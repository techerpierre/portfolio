import { FC, PropsWithChildren } from "react";

export const IsometricBackground: FC<PropsWithChildren> = ({children}) => {
    return <div className="relative inline">
        <div className="absolute top-0 left-0 w-full h-full bg-isometric-patern -z-10"></div>
        {children}
    </div>
}