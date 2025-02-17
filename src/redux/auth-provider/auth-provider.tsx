"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import FullLoading from "@/components/global/loading/full-loading";
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux/use-redux";
import { logOut } from "@/redux/slice/auth-slice/auth-slice";
import { setCurrentUser, clearUser } from "@/redux/slice/user-slice/user-slice";
import { useGetCurrentUserQuery } from "@/services/user-api/user-api";
import { isAuthRoute, isPublicRoute } from "@/utils/constant/constant";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const { accessToken, refreshToken } = useAppSelector((state) => state.auth);
    const [isLoading, setIsLoading] = useState(true);
    const lastPathRef = useRef(pathname);

    const {
        data: user,
        error,
        isLoading: isUserLoading,
        isFetching: isUserFetching,
        refetch: refetchUser,
    } = useGetCurrentUserQuery(undefined, {
        skip: !accessToken && !refreshToken,
        refetchOnMountOrArgChange: true,
    });

    useEffect(() => {
        const handleAuth = async () => {
            // If public route, allow access
            if (isPublicRoute(pathname)) {
                setIsLoading(false);

                return;
            }

            // Handle unauthenticated cases
            if (!accessToken && !refreshToken) {
                if (isAuthRoute(pathname)) {
                    setIsLoading(false);
                } else {
                    await router.replace("/login");
                }

                return;
            }

            // Handle authenticated cases
            if (!isUserLoading && !isUserFetching) {
                if (user && !error) {
                    dispatch(setCurrentUser(user));
                    if (user.is_verified && pathname === "/check-email-verification") {
                        await router.replace("/home");
                    } else if (!user.is_verified && pathname !== "/check-email-verification") {
                        await router.replace("/check-email-verification");
                    } else if (isAuthRoute(pathname) && user.is_verified) {
                        await router.replace("/home");
                    } else {
                        setIsLoading(false);
                    }
                } else if (error) {
                    dispatch(clearUser());
                    dispatch(logOut());
                    await router.replace("/login");
                }
            }
        };

        handleAuth();
    }, [
        accessToken,
        refreshToken,
        user,
        error,
        isUserLoading,
        isUserFetching,
        dispatch,
        router,
        pathname,
    ]);

    // Detect route change and refetch user data only if necessary
    useEffect(() => {
        if (accessToken && refreshToken && pathname !== lastPathRef.current) {
            refetchUser();
            lastPathRef.current = pathname;
        }
    }, [pathname, accessToken, refreshToken, refetchUser]);

    if (isLoading || isUserLoading || isUserFetching) {
        return <FullLoading />;
    }

    return <>{children}</>;
}
