/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { HeaderWrapper } from '../static/css/navbar'

const Navigation = () => (
<div class="nav-bar">
        <div class="logo-header" >
            <Link href="/"><img class="menu" src="static/img/ChickenMumbo_LogoWords.png" /></Link>
        </div>
        {/* <div class="header">
            <Link href="/">
                <br/>
            </Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/events">EVENTS</Link>
            <Link href="/experience">MUMBO</Link>
            <Link href="/crank">CRANK KARAOKE</Link>
        </div> */}
</div>
)


export default Navigation;