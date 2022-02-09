import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faAngellist} from '@fortawesome/free-brands-svg-icons'

const AboutUs = () => (
    <div className="footerIcons">
            <div className="bios">
            <div className="botFooter">
                    <h2 className="bio-name">Andy Yu</h2>
            </div>
                <div className="topFooterIcons">
                    <div className="gitHub-Icon">
                        <a href="https://www.github.com/AndyAYu" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                    <div className="linkedIn-Icon">
                        <a href="https://www.linkedin.com/in/andy-yu-the-human/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <div className="angellist-Icon">
                        <a href="https://www.angel.co" target="_blank"><FontAwesomeIcon icon={faAngellist}/></a>
                     </div>
                    <div className="linkedIn"></div>
                </div>
            </div>
            <div className="bios">
                <div className="botFooter">
                    <h2 className="bio-name">Anuj Gupta</h2>
                </div>
                <div className="topFooterIcons">
                    <div className="gitHub-Icon">
                        <a href="https://www.github.com/apgupta3091" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                    <div className="linkedIn-Icon">
                        <a href="https://www.linkedin.com/in/anujgupta19/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <div className="angellist-Icon">
                        <a href="https://www.angel.co" target="_blank"><FontAwesomeIcon icon={faAngellist}/></a>
                     </div>
                    <div className="linkedIn"></div>
                </div>
            </div>
            <div className="bios">
                    <div className="botFooter">
                        <h2 className="bio-name">Sonja Ng</h2>
                    </div>
                <div className="topFooterIcons">
                    <div className="gitHub-Icon">
                    <a href="https://github.com/sonja-ng" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                    <div className="linkedIn-Icon">
                        <a href="https://www.linkedin.com/in/sonja-ng-a22aa513/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <div className="angellist-Icon">
                        <a href="https://angel.co/u/sonja-ng" target="_blank"><FontAwesomeIcon icon={faAngellist}/></a>
                     </div>
                    <div className="linkedIn"></div>
                </div>
            </div>
            <div className="bios">
                    <div className="botFooter">
                        <h2 className="bio-name">Jason Chu</h2>
                    </div>
                <div className="topFooterIcons">
                    <div className="gitHub-Icon">
                    <a href="https://github.com/Jasonchu94" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                    <div className="linkedIn-Icon">
                    <a href="https://www.linkedin.com/in/jasonchu94/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <div className="angellist-Icon">
                    <a href="https://angel.co/u/jason-chu-20" target="_blank"><FontAwesomeIcon icon={faAngellist}/></a>
                     </div>
                    <div className="linkedIn"></div>
                </div>
            </div>
    </div>
)


export default AboutUs;