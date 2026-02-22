import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import "../styles/gallery.css";
import "../styles/coreteam.css";
import bgVideo from "../assets/bgpursuit.webm";
import HeadPlaceholder from "../assets/pursuitlogo.png";
import Mentor1Image from "../assets/mentor/mentor1.webp";
import Mentor2Image from "../assets/mentor/mentor2.webp";
import VedantDarokarImage from "../assets/coreteam/VedantDarokar.webp";
import OmDeshmukhImage from "../assets/coreteam/Om Deshmukh.webp";
import SanskrutiKakadeImage from "../assets/coreteam/Sanskruti Kakade.webp";
import DhanashriBordeImage from "../assets/coreteam/Dhanshri Borde.webp";
import RanjitDhakareImage from "../assets/coreteam/RANJIT DHAKARE.webp";
import OmKondeImage from "../assets/coreteam/Om Konde.webp";
import KrishnaDeshmukhImage from "../assets/coreteam/Krishna Deshmukh.webp";
import PoonamDandgeImage from "../assets/coreteam/Poonam Dandage.webp";
import HemaniPrajapatiImage from "../assets/coreteam/Hemani Prajapati.webp";
import MayurAdhaoImage from "../assets/coreteam/Mayur Adhao.webp";
import PranaliPandeImage from "../assets/coreteam/Pranali Pande.webp";
import DeepRathodImage from "../assets/coreteam/Deep Rathod.webp";
import ShrawaniVaidyaImage from "../assets/coreteam/Shrawani Vaidya.webp";
import MohitaNimjeImage from "../assets/coreteam/Mohita Nimje.webp";
import AbhishekKanherkarImage from "../assets/coreteam/abhishek.webp";
import NihalKankalImage from "../assets/coreteam/nihalkankal.webp";
import ShripadIngleImage from "../assets/coreteam/shripadingle.webp";
import KrushnagopalAgnihotriImage from "../assets/coreteam/KrushnagopalAgnihotri.webp";
import SharayuMhaskeImage from "../assets/coreteam/SharayuMhaske.webp";
import VikasMoreImage from "../assets/coreteam/VikasMore.webp";
import PiyushPoteImage from "../assets/coreteam/PiyushPote.webp";
import VikasGawadeImage from "../assets/coreteam/Vikas Gawade.webp";
import RutujaDalalImage from "../assets/coreteam/Rutuja Dalal.webp";
import ShraddhaKapleImage from "../assets/coreteam/Shraddha kaple.webp";


const mentors = [
    {
        name: "Dr. S. B. Somani",
        role: "Principal SSGMCE SHEGAON",
        image: Mentor1Image,
    },
    {
        name: "Dr. K. V. Chandan",
        role: "Faculty Co-Ordinator \nPursuit'26",
        image: Mentor2Image,
    },
];
const coreHeads = [
    {
        name: "Vikas Gawade",
        role: "Student Co-Ordinator",
        image: VikasGawadeImage,
        instagram: "https://www.instagram.com/vikasgawade166/",
        linkedin: "https://www.linkedin.com/in/vikas-gawade-166/",
    },
    {
        name: "Om Deshmukh",
        role: "Student Co-Coordinator",
        image: OmDeshmukhImage,
        instagram: "https://www.instagram.com/om_deshmukh18?igsh=MTJja25mMjR3OTI5eQ==",
        linkedin: "https://www.linkedin.com/in/om-deshmukh-007/",
    },
    {
        name: "Vedant Darokar",
        role: "Student Co-Coordinator",
        image: VedantDarokarImage,
        instagram: "https://www.instagram.com/vedant_darokar_15",
        linkedin: "https://www.linkedin.com/in/vedant-darokar-566a1a260/",
    },
    {
        name: "Nihal Kankal",
        role: "Student Co-Coordinator",
        image: NihalKankalImage,
        instagram: "https://www.instagram.com/nihalkankal/",
        linkedin: "https://www.linkedin.com/in/nihalkankal/",
    },
    {
        name: "Sanskruti Kakade",
        role: "Student Co-Coordinator",
        image: SanskrutiKakadeImage,
        instagram: "https://www.instagram.com/_.sansskruti?igsh=MjFrZ2IyOGQ4cjg0",
        linkedin: "https://www.linkedin.com/in/sanskruti-kakade-566a1a260/",
    },
    {
        name: "Shripad Ingle",
        role: "Management Head",
        image: ShripadIngleImage,
        instagram: "https://www.instagram.com/shripadingle/",
        linkedin: "https://www.linkedin.com/in/shripad-ingle-566a1a260/",
    },
    {
        name: "Dhanashri Borde",
        role: "Management Head",
        image: DhanashriBordeImage,
        instagram: "https://www.instagram.com/dhanashri_borde75?igsh=ZnU0NWNvZTh4NmJw",
        linkedin: "https://www.linkedin.com/in/dhanashri-borde-566a1a260/",
    },
    {
        name: "Krushnagopal Agnihotri",
        role: "Social Media Head",
        image: KrushnagopalAgnihotriImage,
        instagram: "https://www.instagram.com/wokenupkrish_?igsh=ODlyMXFkYjk2ZHF3",
        linkedin: "https://www.linkedin.com/in/krushnagopal-agnihotri-6b493b257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        name: "Sharayu Mhaske",
        role: "Social Media Head",
        image: SharayuMhaskeImage,
        instagram: "https://www.instagram.com/sharayyu._/",
        linkedin: "https://www.linkedin.com/in/sharayu-mhaske-088b583a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        name: "Ranjit Dhakare",
        role: "Cultural Head",
        image: RanjitDhakareImage,
        instagram: "https://www.instagram.com/ranjit.patil_/",
        linkedin: "https://www.linkedin.com/in/username",
    },
    {
        name: "Abhishek Kanherkar",
        role: "Publicity Head",
        image: AbhishekKanherkarImage,
        instagram: "https://www.instagram.com/abhishekkanherkar03/",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Om Konde",
        role: "Publicity Head",
        image: OmKondeImage,
        instagram: "https://www.instagram.com/om_3105_?igsh=ZHBxYmZoaWtmZm8x",
        linkedin: "https://www.linkedin.com/in/om-konde-bb48b2290?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
        name: "Chakradhar Mahale",
        role: "Treasurer",
        image: HeadPlaceholder,
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Vikas More",
        role: "Technical Team",
        image: VikasMoreImage,
        instagram: "https://www.instagram.com/vikas_more2005?igsh=NWhobTlma2gzZm9t",
        linkedin: "https://www.linkedin.com/in/vikasmore16",
    },
    {
        name: "Shreya Kathole",
        role: "Technical Team",
        image: HeadPlaceholder,
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Krishna Deshmukh",
        role: "Sponsorship Head",
        image: KrishnaDeshmukhImage,
        instagram: "https://www.instagram.com/deshmukh_krishnaa?igsh=amhtZzFzOGQ4eWN4",
        linkedin: "https://www.linkedin.com/in/krishna-deshmukh-103bb2294",
    },
    {
        name: "Poonam Dandge",
        role: "Sponsorship Head",
        image: PoonamDandgeImage,
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/in/poonam-dandage-381b96294?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
        name: "Ajinkya Surange",
        role: "Decoration Team",
        image: HeadPlaceholder,
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Hemani Prajapati",
        role: "Decoration Team",
        image: HemaniPrajapatiImage,
        instagram: "https://www.instagram.com/hemani1503?igsh=NG4zandvYmJ1bDdo",
        linkedin: "https://www.linkedin.com/in/hemani-prajapati-2007222b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        name: "Mayur Adhao",
        role: "Event and PR Head",
        image: MayurAdhaoImage,
        instagram: "https://www.instagram.com/mayurxop_?igsh=ZGxxNGZxbGQzYjJs",
        linkedin: "https://www.linkedin.com/in/mayur-adhao-4b474b272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        name: "Pranali Pande",
        role: "Event and PR Head",
        image: PranaliPandeImage,
        instagram: "https://www.instagram.com/hyiapiness_2929",
        linkedin: "https://www.linkedin.com/in/pranali-pande-ba7741295",
    },
    {
        name: "Piyush Pote",
        role: "Cultural Head",
        image: PiyushPoteImage,
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Deep Rathod",
        role: "Registration Head",
        image: DeepRathodImage,
        instagram: "https://www.instagram.com/deeprathod_17?igsh=MWUwbjlobTM2dnRuaw==",
        linkedin: "https://www.linkedin.com/in/deep-17r",
    },
    {
        name: "Shrawani Vaidya",
        role: "Registration Head",
        image: ShrawaniVaidyaImage,
        instagram: "https://www.instagram.com/shrawani2005?igsh=MWI1NW04bmc1NmJ5cQ==",
        linkedin: "www.linkedin.com/in/shrawani-vaidya-5a08b3292",
    },
    {
        name: "Rutuja Dalal",
        role: "Report Writing Head",
        image: RutujaDalalImage,
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Shraddha Kaple",
        role: "Report Writing Head",
        image: ShraddhaKapleImage,
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Hanzala Khan",
        role: "Graphics Head",
        image: HeadPlaceholder,
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Mohita Nimje",
        role: "Graphics Head",
        image: MohitaNimjeImage,
        instagram: "https://www.instagram.com/mohita_nimje",
        linkedin: "https://www.linkedin.com/in/mohita-nimje",
    },
];

const CoreTeam = () => {
    return (
        <section className="gallery-section coreteam-section">
            <video
                className="gallery-bg-video"
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="gallery-title-card">
                <span className="gallery-title-text">Mentors</span>
            </div>
            <div className="coreteam-wrapper">
                <div className="coreteam-grid">
                    {mentors.map((mentor) => (
                        <article key={mentor.name} className="core-card mentor-card">
                            <div className="mentor-card-left">
                                <div className="mentor-avatar">
                                    <img src={mentor.image} alt={mentor.name} />
                                </div>
                                <h3 className="core-name">{mentor.name}</h3>
                                <p className="mentor-role">{mentor.role}</p>
                            </div>

                        </article>
                    ))}
                </div>
            </div>

            <div className="gallery-title-card">
                <span className="gallery-title-text">Core Team</span>
            </div>

            <div className="coreteam-wrapper">
                <div className="coreteam-grid">
                    {coreHeads.map((head) => (
                        <article key={head.name} className="core-card">
                            <div className="core-card-top">
                                <div className="core-avatar">
                                    <img src={head.image} alt={head.name} />
                                </div>
                                <h3 className="core-name">{head.name}</h3>
                                <p className="core-role">{head.role}</p>

                            </div>

                            <div className="core-card-bottom">
                                <span className="core-connect-label">Connect</span>
                                <div className="core-socials">
                                    <a
                                        href={head.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="instagram"
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href={head.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="linkedin"
                                    >
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreTeam;
