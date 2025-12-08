import React from "react";

interface IconProps {
    icon: 'arrow_down' | 'arrow_right' | 'arrow_left' | 'star' | 'play' | 'close' | 'plus' | 'cube' | 'paintbrush' | 'sculpting' | 'animation' | 'design' | 'cad';
    fill?: string,
}

const Icon: React.FC<IconProps> = ({icon,fill = 'currentColor' }) => {
    switch (icon){
        case 'arrow_down': {
            return (
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.0693 13.8148L18.5772 8.30698C18.6774 8.1969 18.7988 8.10805 18.934 8.04569C19.0691 7.98333 19.2155 7.94873 19.3643 7.94394C19.5131 7.93914 19.6613 7.96425 19.8003 8.01777C19.9392 8.07129 20.066 8.15215 20.1731 8.25554C20.2802 8.35894 20.3655 8.48277 20.4239 8.61972C20.4823 8.75666 20.5127 8.90393 20.5131 9.05282C20.5136 9.2017 20.4842 9.34916 20.4267 9.48648C20.3692 9.62379 20.2847 9.74817 20.1782 9.85225L20.1511 9.87936L13.857 16.1749C13.6483 16.3836 13.3652 16.5008 13.0701 16.5008C12.7749 16.5008 12.4919 16.3836 12.2832 16.1749L5.9891 9.88087C5.88397 9.7793 5.79988 9.65803 5.74163 9.52397C5.68338 9.38991 5.6521 9.24569 5.64958 9.09954C5.64706 8.95339 5.67336 8.80817 5.72696 8.67219C5.78056 8.5362 5.86042 8.4121 5.96199 8.30698C6.06355 8.20185 6.18482 8.11776 6.31889 8.05951C6.45295 8.00126 6.59717 7.96998 6.74332 7.96746C6.88947 7.96494 7.03468 7.99124 7.17067 8.04484C7.30666 8.09844 7.43075 8.1783 7.53588 8.27987L7.56299 8.30698L13.0693 13.8148Z"
                        fill={fill}/>
                </svg>
            )
        }
        case 'arrow_right': {
            return (
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6737 12.9556L9.16586 7.4477C9.05579 7.34746 8.96694 7.22615 8.90458 7.09095C8.84222 6.95576 8.80762 6.80943 8.80282 6.66063C8.79803 6.51182 8.82313 6.36357 8.87666 6.22464C8.93018 6.08571 9.01103 5.95893 9.11443 5.85181C9.21782 5.74468 9.34166 5.65939 9.4786 5.60098C9.61555 5.54258 9.76282 5.51223 9.9117 5.51176C10.0606 5.51128 10.208 5.54068 10.3454 5.59821C10.4827 5.65574 10.6071 5.74024 10.7111 5.8467L10.7382 5.87381L17.0338 12.1679C17.2425 12.3766 17.3597 12.6597 17.3597 12.9548C17.3597 13.25 17.2425 13.533 17.0338 13.7418L10.7398 20.0358C10.6382 20.1409 10.5169 20.225 10.3829 20.2833C10.2488 20.3415 10.1046 20.3728 9.95842 20.3753C9.81227 20.3778 9.66706 20.3515 9.53107 20.2979C9.39509 20.2443 9.27099 20.1645 9.16586 20.0629C9.06074 19.9614 8.97665 19.8401 8.9184 19.706C8.86014 19.572 8.82886 19.4277 8.82635 19.2816C8.82383 19.1354 8.85012 18.9902 8.90372 18.8542C8.95733 18.7182 9.03719 18.5941 9.13875 18.489L9.16586 18.4619L14.6737 12.9556Z" fill={fill}/>
                </svg>
            )
        }
        case 'arrow_left': {
            return (
                <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0457 1.26331C12.1819 1.39572 12.25 1.54798 12.25 1.72011C12.25 1.89224 12.1819 2.04451 12.0457 2.17692L4.01495 9.98235L12.0457 17.7878C12.1819 17.9202 12.25 18.0725 12.25 18.2446C12.25 18.4167 12.1819 18.569 12.0457 18.7014L11.024 19.6945C10.8877 19.8269 10.7311 19.8931 10.554 19.8931C10.3769 19.8931 10.2202 19.8269 10.084 19.6945L0.561522 10.4392C0.425293 10.3068 0.357178 10.1545 0.357178 9.98235C0.357178 9.81022 0.425293 9.65795 0.561522 9.52555L10.084 0.27025C10.2202 0.137842 10.3769 0.0716379 10.554 0.0716379C10.7311 0.0716379 10.8877 0.137842 11.024 0.27025L12.0457 1.26331Z" fill={fill}/>
                </svg>
            )
        }
        case 'star': {
            return (
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1969 1.29134C10.5411 0.236219 12.0396 0.236221 12.3838 1.29134L14.2587 7.03957C14.4127 7.51144 14.8541 7.8309 15.3522 7.8309H21.4198C22.5335 7.8309 22.9966 9.25057 22.0956 9.90266L17.1867 13.4553C16.7838 13.7468 16.6152 14.2639 16.7691 14.7356L18.6441 20.4839C18.9883 21.539 17.7759 22.4164 16.8749 21.7643L11.9662 18.2117C11.5631 17.9201 11.0176 17.9201 10.6146 18.2117L5.7058 21.7643C4.80477 22.4164 3.59244 21.539 3.9366 20.4839L5.81159 14.7356C5.96551 14.2639 5.79689 13.7468 5.39394 13.4553L0.485158 9.90266C-0.415874 9.25056 0.047197 7.8309 1.16093 7.8309H7.22852C7.7266 7.8309 8.16803 7.51144 8.32194 7.03957L10.1969 1.29134Z" fill={fill}/>
                </svg>
            )
        }
        case 'play': {
            return (
                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="68" height="68" rx="34" fill="#8E8E8E" />
                    <g clipPath="url(#clip0_197_593)">
                        <g clipPath="url(#clip1_197_593)">
                            <path d="M44.625 30.3193C47.4583 31.9551 47.4583 36.0447 44.625 37.6805L31.875 45.0418C29.0417 46.6776 25.5 44.6327 25.5 41.3611V26.6387C25.5 23.367 29.0417 21.3222 31.875 22.9581L44.625 30.3193Z" fill="white" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_197_593">
                            <rect width="34" height="34" fill="white" transform="translate(17 17)" />
                        </clipPath>
                        <clipPath id="clip1_197_593">
                            <rect width="34" height="34" fill="white" transform="translate(17 17)" />
                        </clipPath>
                    </defs>
                </svg>
            );
        }
        case 'close': {
            return (
                <svg clipRule="evenodd" fill={fill} fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
                </svg>
            )
        }
        case 'plus': {
            return (
                <svg width="24" height="24" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.487305 8.31848H16.5429V9.84754H0.487305V8.31848Z" fill={fill}/>
                    <path d="M7.74707 17.1102V1.05469H9.27613V17.1102H7.74707Z" fill={fill}/>
                </svg>
            )
        }
        case 'cube': {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7V17L12 22V12" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7V17L12 22V12" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
        case 'paintbrush': {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.37 2.63C17.74 2 16.74 2 14.74 2H9.26C7.26 2 6.26 2 5.63 2.63C5 3.26 5 4.26 5 6.26V17.74C5 19.74 5 20.74 5.63 21.37C6.26 22 7.26 22 9.26 22H14.74C16.74 22 17.74 22 18.37 21.37C19 20.74 19 19.74 19 17.74V6.26C19 4.26 19 3.26 18.37 2.63Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 10L15 10" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 14L13 14" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
        case 'sculpting': {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C9.79 2 8 3.79 8 6V10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10V6C16 3.79 14.21 2 12 2Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 10V14C8 16.21 9.79 18 12 18C14.21 18 16 16.21 16 14V10" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V22" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="6" r="1" fill={fill}/>
                </svg>
            )
        }
        case 'animation': {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke={fill} strokeWidth="2"/>
                    <circle cx="9" cy="9" r="2" stroke={fill} strokeWidth="2"/>
                    <path d="M13 7L17 9L13 11V7Z" fill={fill}/>
                    <path d="M2 16H22" stroke={fill} strokeWidth="2"/>
                </svg>
            )
        }
        case 'design': {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7V17L12 22V12" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7V17L12 22V12" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke={fill} strokeWidth="2"/>
                </svg>
            )
        }
        case 'cad': {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H21V21H3V3Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7H17V17H7V7Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="9" r="1" fill={fill}/>
                    <circle cx="15" cy="9" r="1" fill={fill}/>
                    <circle cx="9" cy="15" r="1" fill={fill}/>
                    <circle cx="15" cy="15" r="1" fill={fill}/>
                </svg>
            )
        }
        default: {
            return (
                <></>
            )
        }
    }
}
export default Icon;
