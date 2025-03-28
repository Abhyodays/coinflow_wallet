import { Theme } from "../types/Theme";
import { ThemeColors } from "../types/ThemeColors";

const lightTheme:Theme = {
    title:"light",
    colors:{
        text:{
            primary:'#0F172A',
            secondary:'#64748B'
        },
        background:{
            primary:'#FAFAF6',
            secondary:'#CBD5E1'
        },
        selection:'#4ADE80'
    }
}

const darkTheme:Theme = {
    title:'dark',
    colors:{
        text:{
            primary:"#F8FAFC",
            secondary:"#64748B"
        },
        background:{
            primary:'#000000',
            secondary:'#334155'
        },
        selection:"#2563EB"
    }
}

export {lightTheme, darkTheme};