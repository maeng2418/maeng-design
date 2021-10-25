/** @jsxImportSource @emotion/react */
import React, { MouseEvent, ReactNode, useEffect } from 'react';
import { DarkColorType, LightColorType } from '../../../styles';
import createStyle, { codeStyle, markStyle } from './styles';
import Prism from 'prismjs';
import { Global } from '@emotion/react';

export interface EllipsisOptions {
  rows: number;
}

export interface CodeOptions {
  language:
    | 'markup'
    | 'html'
    | 'xml'
    | 'svg'
    | 'mathml'
    | 'ssml'
    | 'atom'
    | 'rss'
    | 'css'
    | 'clike'
    | 'javascript'
    | 'js'
    | 'abap'
    | 'abnf'
    | 'actionscript'
    | 'ada'
    | 'agda'
    | 'al'
    | 'antlr4'
    | 'g4'
    | 'apacheconf'
    | 'apex'
    | 'apl'
    | 'applescript'
    | 'aql'
    | 'arduino'
    | 'ino'
    | 'arff'
    | 'asciidoc'
    | 'adoc'
    | 'aspnet'
    | 'asm6502'
    | 'asmatmel'
    | 'autohotkey'
    | 'autoit'
    | 'avisynth'
    | 'avs'
    | 'avro-idl'
    | 'avdl'
    | 'bash'
    | 'shell'
    | 'basic'
    | 'batch'
    | 'bbcode'
    | 'shortcode'
    | 'bicep'
    | 'birb'
    | 'bison'
    | 'bnf'
    | 'rbnf'
    | 'brainfuck'
    | 'brightscript'
    | 'bro'
    | 'bsl'
    | 'oscript'
    | 'c'
    | 'csharp'
    | 'cs'
    | 'dotnet'
    | 'cpp'
    | 'cfscript'
    | 'cfc'
    | 'chaiscript'
    | 'cil'
    | 'clojure'
    | 'cmake'
    | 'cobol'
    | 'coffeescript'
    | 'coffee'
    | 'concurnas'
    | 'conc'
    | 'csp'
    | 'coq'
    | 'crystal'
    | 'css-extras'
    | 'csv'
    | 'cypher'
    | 'd'
    | 'dart'
    | 'dataweave'
    | 'dax'
    | 'dhall'
    | 'diff'
    | 'django'
    | 'jinja2'
    | 'dns-zone-file'
    | 'dns-zone'
    | 'docker'
    | 'dockerfile'
    | 'dot'
    | 'gv'
    | 'ebnf'
    | 'editorconfig'
    | 'eiffel'
    | 'ejs'
    | 'eta'
    | 'elixir'
    | 'elm'
    | 'etlua'
    | 'erb'
    | 'erlang'
    | 'excel-formula'
    | 'xlsx'
    | 'xls'
    | 'fsharp'
    | 'factor'
    | 'false'
    | 'firestore-security-rules'
    | 'flow'
    | 'fortran'
    | 'ftl'
    | 'gml'
    | 'gamemakerlanguage'
    | 'gap'
    | 'gcode'
    | 'gdscript'
    | 'gedcom'
    | 'gherkin'
    | 'git'
    | 'glsl'
    | 'gn'
    | 'gni'
    | 'go'
    | 'graphql'
    | 'groovy'
    | 'haml'
    | 'handlebars'
    | 'hbs'
    | 'haskell'
    | 'hs'
    | 'haxe'
    | 'hcl'
    | 'hlsl'
    | 'hoon'
    | 'http'
    | 'hpkp'
    | 'hsts'
    | 'ichigojam'
    | 'icon'
    | 'icu-message-format'
    | 'idris'
    | 'idr'
    | 'ignore'
    | 'gitignore'
    | 'hgignore'
    | 'npmignore'
    | 'inform7'
    | 'ini'
    | 'io'
    | 'j'
    | 'java'
    | 'javadoc'
    | 'javadoclike'
    | 'javastacktrace'
    | 'jexl'
    | 'jolie'
    | 'jq'
    | 'jsdoc'
    | 'js-extras'
    | 'json'
    | 'webmanifest'
    | 'json5'
    | 'jsonp'
    | 'jsstacktrace'
    | 'js-templates'
    | 'julia'
    | 'keepalived'
    | 'keyman'
    | 'kotlin'
    | 'kt'
    | 'kts'
    | 'kumir'
    | 'kum'
    | 'kusto'
    | 'latex'
    | 'tex'
    | 'context'
    | 'latte'
    | 'less'
    | 'lilypond'
    | 'ly'
    | 'liquid'
    | 'lisp'
    | 'emacs'
    | 'elisp'
    | 'emacs-lisp'
    | 'livescript'
    | 'llvm'
    | 'log'
    | 'lolcode'
    | 'lua'
    | 'magma'
    | 'makefile'
    | 'markdown'
    | 'md'
    | 'markup-templating'
    | 'matlab'
    | 'maxscript'
    | 'mel'
    | 'mermaid'
    | 'mizar'
    | 'mongodb'
    | 'monkey'
    | 'moonscript'
    | 'moon'
    | 'n1ql'
    | 'n4js'
    | 'n4jsd'
    | 'nand2tetris-hdl'
    | 'naniscript'
    | 'nani'
    | 'nasm'
    | 'neon'
    | 'nevod'
    | 'nginx'
    | 'nim'
    | 'nix'
    | 'nsis'
    | 'objectivec'
    | 'objc'
    | 'ocaml'
    | 'opencl'
    | 'openqasm'
    | 'qasm'
    | 'oz'
    | 'parigp'
    | 'parser'
    | 'pascal'
    | 'objectpascal'
    | 'pascaligo'
    | 'psl'
    | 'pcaxis'
    | 'px'
    | 'peoplecode'
    | 'pcode'
    | 'perl'
    | 'php'
    | 'phpdoc'
    | 'php-extras'
    | 'plsql'
    | 'powerquery'
    | 'pq'
    | 'mscript'
    | 'powershell'
    | 'processing'
    | 'prolog'
    | 'promql'
    | 'properties'
    | 'protobuf'
    | 'pug'
    | 'puppet'
    | 'pure'
    | 'purebasic'
    | 'pbfasm'
    | 'purescript'
    | 'purs'
    | 'python'
    | 'py'
    | 'qsharp'
    | 'qs'
    | 'q'
    | 'qml'
    | 'qore'
    | 'r'
    | 'racket'
    | 'rkt'
    | 'cshtml'
    | 'razor'
    | 'jsx'
    | 'tsx'
    | 'reason'
    | 'regex'
    | 'rego'
    | 'renpy'
    | 'rpy'
    | 'rest'
    | 'rip'
    | 'roboconf'
    | 'robotframework'
    | 'robot'
    | 'ruby'
    | 'rb'
    | 'rust'
    | 'sas'
    | 'sass'
    | 'scss'
    | 'scala'
    | 'scheme'
    | 'shell-session'
    | 'sh-session'
    | 'shellsession'
    | 'smali'
    | 'smalltalk'
    | 'smarty'
    | 'sml'
    | 'smlnj'
    | 'solidity'
    | 'sol'
    | 'solution-file'
    | 'sln'
    | 'soy'
    | 'sparql'
    | 'rq'
    | 'splunk-spl'
    | 'sqf'
    | 'sql'
    | 'squirrel'
    | 'stan'
    | 'iecst'
    | 'stylus'
    | 'swift'
    | 'systemd'
    | 't4-templating'
    | 't4-cs'
    | 't4'
    | 't4-vb'
    | 'tap'
    | 'tcl'
    | 'tt2'
    | 'textile'
    | 'toml'
    | 'tremor'
    | 'trickle'
    | 'troy'
    | 'turtle'
    | 'trig'
    | 'twig'
    | 'typescript'
    | 'ts'
    | 'typoscript'
    | 'tsconfig'
    | 'unrealscript'
    | 'uscript'
    | 'uc'
    | 'uri'
    | 'url'
    | 'v'
    | 'vala'
    | 'vbnet'
    | 'velocity'
    | 'verilog'
    | 'vhdl'
    | 'vim'
    | 'visual-basic'
    | 'vb'
    | 'vba'
    | 'warpscript'
    | 'wasm'
    | 'web-idl'
    | 'webidl'
    | 'wiki'
    | 'wolfram'
    | 'mathematica'
    | 'nb'
    | 'wl'
    | 'wren'
    | 'xeora'
    | 'xeoracube'
    | 'xml-doc'
    | 'xojo'
    | 'xquery'
    | 'yaml'
    | 'yml'
    | 'yang'
    | 'zig';
}

export interface TextProps {
  children?: ReactNode;
  color?: LightColorType | DarkColorType;
  disabled?: boolean;
  ellipsis?: boolean | EllipsisOptions;
  mark?: boolean;
  italic?: boolean;
  underline?: boolean;
  delete?: boolean;
  code?: CodeOptions;
  strong?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Text: React.FC<TextProps> = ({
  children,
  color = 'gray13',
  disabled = false,
  ellipsis = false,
  mark = false,
  italic = false,
  underline = false,
  delete: del = false,
  code,
  strong = false,
  onClick,
}) => {
  useEffect(() => {
    if (code && code.language) Prism.highlightAll();
  }, [code]);

  if (code && code.language)
    return (
      <>
        <Global styles={codeStyle} />
        <span css={createStyle('gray13', false, false)} onClick={onClick}>
          <pre className={`language-${code.language}`}>
            <code className={`language-${code.language}`}>{children}</code>
          </pre>
        </span>
      </>
    );

  if (strong) children = <strong>{children}</strong>;
  if (underline) children = <u>{children}</u>;
  if (del) children = <del>{children}</del>;
  if (mark) children = <mark css={markStyle}>{children}</mark>;
  if (italic) children = <i>{children}</i>;

  return (
    <span css={createStyle(color, ellipsis, disabled)} onClick={onClick}>
      {children}
    </span>
  );
};

export default Text;
