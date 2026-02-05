type ThemeColor = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

type ThemeMap = {
    [key in ThemeColor]: {
        bg: string;
        text: string;
    };
};

export const getThemeClasses = (background?: string, color?: string): string => {
    const themeMap: ThemeMap = {
        primary: { bg: 'bg-primary-500', text: 'text-primary-50' },
        secondary: { bg: 'bg-secondary-500', text: 'text-secondary-50' },
        tertiary: { bg: 'bg-tertiary-500', text: 'text-tertiary-50' },
        quaternary: { bg: 'bg-quaternary-500', text: 'text-quaternary-50' }
    };
    
    const bgClass = background && themeMap[background as ThemeColor]?.bg ? 
        themeMap[background as ThemeColor].bg : '';
        
    const textClass = color && themeMap[color as ThemeColor]?.text ? 
        themeMap[color as ThemeColor].text : '';
    
    return `${bgClass} ${textClass}`.trim();
};