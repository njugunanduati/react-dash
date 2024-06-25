import React, {useState} from 'react';
import Logo from '../assets/Logo.png';
import RightArrow from '../assets/icons/rightArrow.svg';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Clock3,
    BarChart2,
    ArrowRightLeft,
    HelpCircleIcon
 } from 'lucide-react';

const navLinks = [
    {
        name: 'Dashboard',
        icon: LayoutDashboard,
        path: '/'
    },
    {
        name: 'Activity',
        icon: Clock3,
        path: '/activity'
    },
    {
        name: 'Analytics',
        icon: BarChart2,
        path: '/analytics'
    },
    {
        name: 'Transactions',
        icon: ArrowRightLeft,
        path: '/transactions'
    },
    {
        name: 'Help Center',
        icon: HelpCircleIcon,
        path: '/help-center'
    }
];

const variants = {
    expanded: { width: "20%" },
    nonExpanded: { width: "5%" }
}

const  NavigationBar = () =>{
    const [activeLink, setActiveLink] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <motion.div
         animate={isExpanded ? "expanded" : "nonExpanded"}
         variants={variants}
         className={"px-10 py-12 flex flex-col border border-r-1 w-1/5 relative" + 
         (isExpanded ? " px-10 " : " px-4 ")}
        >
            <div className="logo-div flex space-x-3 items-center">
                <img src={Logo} alt="logo" className="h-10 w-10" />
                <span className={ isExpanded ? "block" : "hidden" }>Dashboard</span>
            </div>
            <div onClick={() => setIsExpanded(!isExpanded)} className="w-5 h-5 bg-[#FF8C8C] rounded-full absolute -right-[10.5px] top-12 flex items-center justify-center">
                <img src={RightArrow} className='w-[5px]' />
            </div>
            <div className="mt-9 flex flex-col space-y-8">
                {navLinks.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            className={
                                "flex space-x-3 p-2 rounded" + 
                                (activeLink === index
                                ? " bg-[#FF8C8C] text-white font-semibold"
                                : " ")
                            }
                            onClick={() => setActiveLink(index)}
                        >
                            <item.icon />
                            <span className={ isExpanded ? "block" : "hidden" }>{item.name}</span>
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )

}

export default NavigationBar;