import { Theme } from "../types/Theme";
import { ThemeColors } from "../types/ThemeColors";

const lightTheme:Theme = {
    title:"light",
    colors:{
        text:{
            primary:'#09122C',
            secondary:'#9AA6B2'
        },
        background:{
            primary:'#FAFAF6',
            secondary:'#DDDDDD'
        },
        selection:'#4671ED'
    }
}

const darkTheme:Theme = {
    title:'dark',
    colors:{
        text:{
            primary:"#F8F8F8",
            secondary:"#878C98"
        },
        background:{
            primary:'#000000',
            secondary:'#32353C'
        },
        selection:"#4671ED"
    }
}

export {lightTheme, darkTheme};