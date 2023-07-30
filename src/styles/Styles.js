import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
    :root {
        &,&.light-mode {
            //Main colors
            //Background
            --color-white-1: #fff;
            --color-white-2: #f9fafb;
            --color-white-3: #e5e7eb;
            --color-white-4: #d1d5db;
            --color-white-5: #4b5563;
            --color-white-6: #27272a;
            --color-white-3-light: #e5e7eb3b;

            //Shadows
            --shadow-light: 0 3px 7px #bbb8b8c0;
            --shadow-strong: 0 3px 7px #7e7c7cc0;

            //Decoration colors
            --color-border-1: #e4e2e2;
            --icons-color: #6366f1;
            --icons-color-hover: #5a5ce4;
        };

        --raidius-sm: 3px;
        --raidius-md: 6px;
        --raidius-lg: 9px;

        --border-sm: 1px solid var(--color-border-1);
        --border-md: 2px solid var(--color-border-1);
        --border-lg: 3px solid var(--color-border-1);

        font-family: 'Roboto Mono', monospace;
        transition: all 3s ease-in;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export default Styles;
