import { css, Interpolation, Theme } from '@emotion/react';
import { DarkColorType, getColor, LightColorType, ThemeMode } from '../../styles';
import { STRING_REGEX } from '../../utils/regex';
import { TagColorType, TagProps } from './Tag';

const createStyle = (color?: TagProps['color']) => (
  theme: Theme = { mode: ThemeMode.LIGHT },
): Interpolation<Theme> => {
  // color
  const PRESET_COLOR_IDX = 7;
  const PRESET_BG_COLOR_IDX = 1;
  const PRESET_BORDER_COLOR_IDX = 3;
  const isPresetColor = (color: TagProps['color']): color is TagColorType => {
    const presetColors = [
      'red',
      'volcano',
      'orange',
      'gold',
      'yellow',
      'lime',
      'green',
      'cyan',
      'blue',
      'geekblue',
      'purple',
      'magenta',
      'gray',
    ];
    return presetColors.includes(color as TagColorType);
  };

  const tagColor = isPresetColor(color)
    ? `${color?.replace(STRING_REGEX, '')}${PRESET_COLOR_IDX}`
    : 'gray1';

  const bgColor = isPresetColor(color)
    ? `${color?.replace(STRING_REGEX, '')}${PRESET_BG_COLOR_IDX}`
    : color;

  const borderColor = isPresetColor(color)
    ? `${color?.replace(STRING_REGEX, '')}${PRESET_BORDER_COLOR_IDX}`
    : 'gray5';

  // default
  const defaultStyle = css`
    box-sizing: border-box;
    color: ${getColor(theme, tagColor as LightColorType | DarkColorType)};
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    display: inline-block;
    height: 20px;
    padding: 0 7px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    background: ${getColor(theme, bgColor as LightColorType | DarkColorType)};
    border: 1px solid ${getColor(theme, borderColor as LightColorType | DarkColorType)};
    border-radius: 2px;
    opacity: 1;
    transition: all 0.3s;

    & > svg {
      font-size: 10px;
      vertical-align: -0.125em;
      margin-left: 5px;
      fill: ${getColor(theme, tagColor as LightColorType | DarkColorType)};
    }
  `;

  return [defaultStyle];
};

export default createStyle;
