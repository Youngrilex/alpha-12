import { SVGProps } from "react";
import { BellIcon, CollBellIcon, CollEventIcon, CollReportIcon, CollSpeakerIcon, EventIcon, HomeIcon, MessageIcon, ReportIcon, SettingsIcon, SpeakerIcon } from "./generics";


export type TSidebarLinks ={
    label:string;
    url:string;
    icon:({width, height,color}:SVGProps<SVGSVGElement>) =>JSX.Element
    collapsedIcon?: ({ width, height, color }: SVGProps<SVGSVGElement>) => JSX.Element;
    badgeCount?: number;
}


export const sidebarLinks:TSidebarLinks[] =[
    {
        icon:HomeIcon,
        collapsedIcon: HomeIcon,
        label:"Home",
        url:'/',
    },
    {
        icon:EventIcon,
        collapsedIcon: CollEventIcon,
        label:"Events",
        url:'/events',
    },
    {
        icon:SpeakerIcon,
        collapsedIcon: CollSpeakerIcon,
        label:"Speakers",
        url:'/speakers',
    },
    {
        icon:ReportIcon,
        collapsedIcon: CollReportIcon,
        label:"Reports",
        url:'/reports',
    },
    {
        icon:BellIcon,
        collapsedIcon: CollBellIcon,
        label:"Notifications",
        url:'/notifications',
        badgeCount: 3,
    },

    {
        icon:MessageIcon,
        label:"Messages",
        url:'/messages',
    },

    {
        icon:SettingsIcon,
        label:"Settings",
        url:'/settings',
    },
]