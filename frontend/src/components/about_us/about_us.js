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
                        <a target="_blank" href="https://www.github.com/AndyAYu"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                    <div className="linkedIn-Icon">
                        <a target="_blank" href="https://www.linkedin.com/in/andy-yu-the-human/"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <div className="angellist-Icon">
                        <a target="_blank" href="https://www.angel.co"><FontAwesomeIcon icon={faAngellist}/></a>
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
                        <a target="_blank" href="https://www.github.com/apgupta3091"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                    <div className="linkedIn-Icon">
                        <a target="_blank" href="https://www.linkedin.com/in/anujgupta19/"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <div className="angellist-Icon">
                        <a target="_blank" href="https://www.angel.co"><FontAwesomeIcon icon={faAngellist}/></a>
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
                    <a target="_blank" href="https://github.com/sonja-ng"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                    <div className="linkedIn-Icon">
                        <a target="_blank" href="https://www.linkedin.com/in/sonja-ng-a22aa513/"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <div className="angellist-Icon">
                        <a target="_blank" href="https://angel.co/u/sonja-ng"><FontAwesomeIcon icon={faAngellist}/></a>
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
                    <a target="_blank" href="https://github.com/Jasonchu94"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                    <div className="linkedIn-Icon">
                    <a target="_blank" href="https://www.linkedin.com/in/jasonchu94/"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <div className="angellist-Icon">
                    <a target="_blank" href="https://angel.co/u/jason-chu-20"><FontAwesomeIcon icon={faAngellist}/></a>
                     </div>
                    <div className="linkedIn"></div>
                </div>
            </div>
    </div>
)


export default AboutUs;