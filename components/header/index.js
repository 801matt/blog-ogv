import { useState } from "react";

import styled from "styled-components";
import Link from "next/link";

const InternalHeader = styled.header`
.header-content {
    .branding {
        padding: 0 20px;
        height: 65px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px #dfdfdf;
        a {
            h1 {
                font-size: 24px;
            }
        }
        .hamburger {
            display: block;
        }
    }
    .nav {
        background: white;
        position: fixed;
        width: 100%;
        height: calc(100vh - 65px);
        &.active {
            left: 0;
        }
        &.inactive {
            left: -100%;
        }
        nav {
            ul {
                li {
                    list-style: none;
                    a {
                        padding-left: 20px;
                        display: inline-block;
                        width: 100%;
                        line-height: 65px;
                        border-bottom: solid 1px #dfdfdf;
                        &:hover {
                            background: #f7f7f7;
                        }
                    }
                }
            }
        }
    }
}

@media(min-width: 768px) {
    border-bottom: solid 1px #dfdfdf;
    .header-content {
    padding-right: 20px;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .branding {
        border: none;
        a {
            h1 {
                font-size: 24px;
                &:hover {
                    color: #555;
                }
            }
        }
        .hamburger {
            display: none;
        }
    }
    .nav {
        position: relative;
        width: inherit;
        height: inherit;
        opacity: inherit;
        &.active, &.inactive {
            left: 0;
        }

        nav {
            ul {
                display: flex;
                li {
                    list-style: none;
                    a {
                        padding: 0 20px;
                        border: none;
                        background: none;
                        &:hover {
                            background: #f7f7f7;
                        }
                    }
                }
            }
        }
    }
}
}
`;

const Header = () => {
    const [nav, setNav] = useState(false);
    return (
        <InternalHeader>
            <div className="header-content">
                <div className="branding">
                    <Link href="/">
                        <a>
                            <h1>801MATT</h1>
                        </a>
                    </Link>
                    <button className="hamburger" onClick={() => setNav(prevState => !prevState)}>MENU</button>
                </div>
                <div className={`nav ${nav ? 'active' : 'inactive'}`}>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/blog/about">
                                    <a href="/blog/about">About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog/design">
                                    <a href="/blog/design">Design</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog/engineering">
                                    <a href="/blog/engineering">Engineering</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog/hobbies">
                                    <a href="/blog/hobbies">Hobbies</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </InternalHeader>
    )
}

export default Header