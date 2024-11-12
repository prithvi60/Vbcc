export const HeroBox = ({ className, ...props }) => {
    return (
        <svg viewBox="0 0 734 235" xmlns="http://www.w3.org/2000/svg" {...props}
            className={className}>
            <path d="M985 5H6.50221C5.39764 5 4.5022 5.89543 4.5022 7V209.5" stroke="url(#paint0_linear_20_2)" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="5.00254" cy="5" rx="5.00254" ry="5" fill="#F06F38" />
            <defs>
                <linearGradient id="paint0_linear_20_2" x1="4.5022" y1="71" x2="985" y2="71" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F06F38" />
                    <stop offset="1" stopColor="#8A4020" stopOpacity="0.17" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export const HeroBoxBottom = ({ className, ...props }) => {
    return (
        <svg viewBox="0 0 734 235" xmlns="http://www.w3.org/2000/svg" {...props}
            className={className}>
            <path d="M732.5 229.985L5.48625 229.985C4.38168 229.985 3.48626 229.09 3.48626 227.985L3.48626 0.999969" stroke="url(#paint0_linear_20_2)" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="5.00254" cy="5" rx="5.00254" ry="5" transform="matrix(0.999995 -0.00328834 -0.00328834 -0.999995 1 235)" fill="#F06F38" />
            <defs>
                <linearGradient id="paint0_linear_20_2" x1="3.26918" y1="163.986" x2="983.762" y2="160.761" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F06F38" />
                    <stop offset="1" stopColor="#8A4020" stopOpacity="0.17" />
                </linearGradient>
            </defs>
        </svg>
    );
};


export const TSBox = ({ className, ...props }) => {
    return (
        <svg
            viewBox={`0 0 338 479`}
            xmlns="http://www.w3.org/2000/svg" {...props}
            className={className}>
            <path d="M16 217V18H337V58.1046" stroke="#F06F38" className="w-[620px] h-full" />
            <path d="M1 197V1H329V51.25" stroke="#F06F38" className="w-full h-full" />
            <path d="M16 259V459H335V416.36" stroke="#F06F38" className="w-full h-full" />
            <path d="M1 274V478H326V434.508" stroke="#F06F38" className="w-full h-full" />
        </svg>
    );
};

{/* <svg width="338" height="479" viewBox="0 0 338 479" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 217V18H337V58.1046" stroke="#F06F38"/>
<path d="M1 197V1H329V51.25" stroke="#F06F38"/>
<path d="M16 259V459H335V416.36" stroke="#F06F38"/>
<path d="M1 274V478H326V434.508" stroke="#F06F38"/>
</svg> */}
