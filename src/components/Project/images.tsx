import { useState, FC } from "react";

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

export type ArrowProps = {
  onClick?: () => void;
  direction: "next" | "prev";
  offset?: number;
};

// Reusable Arrow Component without hover effect
export const Arrow: FC<ArrowProps> = ({ onClick, direction, offset = 0 }) => {
  const isNext = direction === "next";
  const icon = isNext ? "❯" : "❮";

  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
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
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  nextArrow: <Arrow direction="next" />,
  prevArrow: <Arrow direction="prev" />,
};