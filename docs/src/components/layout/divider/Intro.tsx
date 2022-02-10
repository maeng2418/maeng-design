/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React from 'react';

const { Title, Paragraph, Text } = Typography;

const Intro: React.FC = () => {
  return (
    <article className="intro" css={introStyle}>
      <Title className="intro-title" level={2} mark>
        Divider
      </Title>
      <Paragraph className="intro-content">
        <Text strong>Maeng Design</Text>의 Divider 컴포넌트는 서로 다른 컴포넌트를 구분하기 위해
        사용됩니다.
      </Paragraph>
    </article>
  );
};

const introStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  h2.intro-title mark {
    color: inherit;
    position: relative;
    background: none;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 30%;
      background: ${(theme as MaengTheme).mode === ThemeMode.DARK
        ? getColor(theme, 'magenta5')
        : getColor(theme, 'magenta2')};
      z-index: -1;
    }
  }
  div.intro-content {
    line-height: 2;
    strong {
      color: ${getColor(theme, 'magenta6')};
    }
  }
`;

export default Intro;
