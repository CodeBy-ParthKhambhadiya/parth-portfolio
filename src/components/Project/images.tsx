import { FC } from "react";

export const instaplugProjectImages: string[] = [
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759828674/instaplug1_jasc2f.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759828673/instaplug2_lkf1w0.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759828672/instaplug3_e4eubf.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759828672/instaplug4_lw2g5b.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759828673/instaplug5_tgqrjg.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759828672/instaplug6_oewqur.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759828672/instaplug7_lbgobx.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759828672/instaplug8_p3cd3y.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759828671/instaplug9_byd5hu.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759828671/instaplug10_hpydsy.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759828672/instaplug11_marrbs.png",
];

export const eCommerceProjectImages: string[] = [
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837306/ecommerce1_qup7uo.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837305/ecommerce2_c6icqj.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837305/ecommerce3_baocy3.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837305/ecommerce4_vhqb3z.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837305/ecommerce5_cj6yye.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837305/ecommerce6_hqjr0l.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837305/ecommerce7_czusqa.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837305/ecommerce8_vqrdoy.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837304/ecommerce9_sdwptl.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837304/ecommerce10_aknjbz.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837303/ecommerce11_whm6j2.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837304/ecommerce12_jw2f2l.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837304/ecommerce13_b3axht.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837304/becommerce14_ml4l6i.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837304/becommerce15_vqclnr.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837303/becommerce16_zqht4l.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837303/becommerce17_vl5vf4.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837303/becommerce18_ukzrxg.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837303/becommerce19_z3ttvg.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759837303/becommerce20_otynhf.png"
];
export const pixenProjectImages: string[] = [
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759915741/pixen1_vfovqg.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759915740/pixen2_qxchwq.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759915740/pixen3_gajmqv.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759915739/pixen4_rrif2u.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759915740/pixen5_bypiow.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759915740/pixen6_e34zyf.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759916234/pixen7_oeqlop.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759915740/pixen9_atoc7b.png",
    "https://res.cloudinary.com/dbxwglui1/image/upload/v1759915740/pixen10_ypwjjs.png"
];
export type ArrowProps = {
    onClick?: () => void;
    direction: "next" | "prev";
    offset?: number;
    top?: string | number; // new optional prop

};

// Reusable Arrow Component without hover effect
export const Arrow: FC<ArrowProps> = ({ onClick, direction, offset = 0, top = "50%" }) => {
    const isNext = direction === "next";
    const icon = isNext ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 0 8 16" width="12" height="16" className="eapps-instagram-feed-posts-slider-nav-icon" fill="white"><path d="M11.7,7.3l-6-5.9c-0.4-0.4-1.1-0.4-1.5,0c-0.4,0.4-0.4,1.1,0,1.5L9.5,8l-5.2,5.2         c-0.4,0.4-0.4,1.1,0,1.5c0.4,0.4,1.1,0.4,1.5,0l6-6C12.1,8.3,12.1,7.7,11.7,7.3z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 0 8 16" width="12" height="16" fill="white" className="eapps-instagram-feed-posts-slider-nav-icon"><path d="M4.3,8.7l6,5.9c0.4,0.4,1.1,0.4,1.5,0c0.4-0.4,0.4-1.1,0-1.5L6.5,8l5.2-5.2c0.4-0.4,0.4-1.1,0-1.5 c-0.4-0.4-1.1-0.4-1.5,0l-6,6C3.9,7.7,3.9,8.3,4.3,8.7z"></path></svg>;

    return (
        <div
            onClick={onClick}
            style={{
                position: "absolute",
                top: top,
                [isNext ? "right" : "left"]: offset,
                transform: "translateY(-50%)",
                width: 36,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.685)",
                border: "1px solid #3c3d55",
                borderTopLeftRadius: isNext ? "30px" : "0px",
                borderBottomLeftRadius: isNext ? "30px" : "0px",
                borderTopRightRadius: !isNext ? "30px" : "0px",
                borderBottomRightRadius: !isNext ? "30px" : "0px",
                boxShadow: isNext
                    ? "4px 0 6px -2px rgba(0, 0, 0, 0.16)"
                    : "-4px 0 6px -2px rgba(0, 0, 0, 0.16)",
                cursor: "pointer",
                zIndex: 1,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
            }}
        >
            {icon}
        </div>
    );
};

// Slider settings without hover logic
export const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    nextArrow: <Arrow direction="next" top="45%" />,
    prevArrow: <Arrow direction="prev" top="45%" />,
};