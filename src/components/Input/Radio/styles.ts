import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../../styles';
import { RadioProps } from './Radio';

const createStyle =
  (
    color?: RadioProps['color'],
    checked?: RadioProps['checked'],
    disabled?: RadioProps['disabled'],
  ) =>
  (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
    // color
    const primaryColor = getColor(theme, color);
    const defaultStyle = css`
      box-sizing: border-box;
      margin: 0 8px 0 0;
      padding: 0;
      color: #000000d9;
      font-size: 14px;
      line-height: 1.5715;
      position: relative;
      display: inline-flex;
      align-items: baseline;
      cursor: pointer;

      input[type='radio'] {
        position: absolute;
        inset: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        cursor: pointer;
        opacity: 0;
      }
      .radio {
        position: relative;
        top: 0.2em;
        left: 0;
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 1px solid ${getColor(theme, 'gray5')};
        background-color: ${getColor(theme, 'gray1')};
        border-style: solid;
        border-width: 1px;
        border-radius: 50%;
        transition: all 0.3s;

        &::after {
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          width: 16px;
          height: 16px;
          margin-top: -8px;
          margin-left: -8px;
          background-color: ${primaryColor};
          border-top: 0;
          border-left: 0;
          border-radius: 16px;
          transform: scale(0.5);
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
          content: ' ';
        }
      }
      .label {
        padding-right: 8px;
        padding-left: 8px;
        line-height: unset;
        cursor: pointer;
      }
    `;

    const getChecked = () => {
      if (checked)
        return css`
          .radio {
            border-color: ${primaryColor};
            &::after {
              opacity: 1;
            }
          }
        `;
      return css``;
    };

    const getDisabled = () => {
      if (disabled)
        return css`
          cursor: not-allowed;
          input[type='radio']:disabled {
            cursor: not-allowed;
          }
          .radio {
            background-color: ${getColor(theme, 'gray3')};
            border-color: ${getColor(theme, 'gray5')};
            cursor: not-allowed;

            &::after {
              border-color: ${getColor(theme, 'gray6')};
              background-color: ${getColor(theme, 'gray6')};
              ${!checked && `opacity: 0;`};
            }
          }
          .label {
            color: ${getColor(theme, 'gray6')};
            cursor: not-allowed;
          }
        `;
      return css``;
    };

    return [defaultStyle, getChecked, getDisabled];
  };

export default createStyle;
