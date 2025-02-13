"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
    const [shouldRender, setShouldRender] = useState(false);

    const {
        data: user,
        error,
        isLoading: isUserLoading,
    } = useGetCurrentUserQuery(undefined, {
        skip: !accessToken && !refreshToken,
    });

    useEffect(() => {
        const handleAuth = async () => {
            if (isPublicRoute(pathname)) {
                setIsLoading(false);
                setShouldRender(true);

                return;
            }

            if (!accessToken && !refreshToken) {
                await router.replace("/login");
                setIsLoading(false);
                setShouldRender(true);

                return;
            }

            if (!isUserLoading) {
                if (user) {
                    dispatch(setCurrentUser(user));
                    if (isAuthRoute(pathname)) {
                        await router.replace("/home");
                    } else {
                        setShouldRender(true);
                    }
                } else if (error) {
                    // If there's an error, it means the refresh token logic in baseQueryWithReauth has failed
                    dispatch(clearUser());
                    dispatch(logOut());
                    await router.replace("/login");
                }
                setIsLoading(false);
            }
        };

        handleAuth();
    }, [accessToken, refreshToken, user, error, isUserLoading, dispatch, router, pathname]);

    if (isLoading || !shouldRender) {
        return <FullLoading />;
    }

    return <>{children}</>;
}
