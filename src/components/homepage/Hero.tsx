"use client";
import Image from "next/image";
import styled from "styled-components";

const Slogan = styled.h2`
  font-family: "Noto Serif TC", serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
`;

const Section = styled.section`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;
`;

const ImageBox = styled.div`
  transform: translateY(3rem);
`;

const TextBox = styled.div`
  width: calc(100% / 2);
`;

const Hero = () => {
  return (
    <Section>
      <TextBox>
        <Slogan>
          CALISTA STUDIO於2019年創立 CALISTA名源自於拉丁，象徵「最美麗的女子」。
          用心致力於每位顧客重拾美麗與自信，
          注重顧客體驗感受及服務品質，追求細緻不求速度。
          專業技術不斷革新與進步，持續進修跟上趨勢成長，堅持好產品、好服務，真誠對待每一份信任。
        </Slogan>
      </TextBox>
      <ImageBox>
        <Image
          src="/images/studio_demo.jpeg"
          alt="calista studio"
          width={600}
          height={550}
          style={{
            objectFit: "cover",
            borderRadius: "1rem",
            width: "100%",
            height: "auto",
          }}
        />
      </ImageBox>
    </Section>
  );
};

export default Hero;
