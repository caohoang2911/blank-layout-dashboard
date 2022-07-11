import React from "react";
import AuthLayout from "~/components/layout/AuthLayout/AuthLayout";
import DefaultLayout from "~/components/layout/DefaultLayout/DefaultLayout";
import Login from "~/features/auth/Pages/Login";
import Posts from "~/features/post";
import Todos from "~/features/todoNew/Pages/Todos";
const AntDesign = React.lazy(() => import('~/features/antd/AntDesign'));

export enum ScopeRoute {
    'PRIVATE' = "PRIVATE",
    'PUBLIC' = "PUBLIC",
}

export interface RouterDefine{
    path: string;
    element: React.FC<any>;
    layout : React.FC<{children: React.ReactNode}>;
    scope: ScopeRoute;
} 

const routers : RouterDefine[] = [
    {
        path: '/',
        element : Posts,
        layout: DefaultLayout,
        scope: ScopeRoute.PRIVATE
    },
    {
        path: '/antd',
        element : AntDesign,
        layout: DefaultLayout,
        scope: ScopeRoute.PRIVATE
    },
    {
        path: '/login',
        element: Login, 
        layout: AuthLayout,
        scope: ScopeRoute.PUBLIC
    }
]

export { routers };
