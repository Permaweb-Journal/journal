import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Permaweb Journal",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "permaweb-journal.arweave.net",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: true,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Manrope",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FAFAFA", // Soft off-white for background
          lightgray: "#e0e0e0", // Lighter gray for dividers, UI elements
          gray: "#b0b0b0", // Neutral gray for secondary text
          darkgray: "#3C3C3C", // Darker gray for body text
          dark: "#1A1A1A", // Deep black for headings, strong contrast
          secondary: "#1A1A1A", // Signature green for CTA buttons, highlights
          tertiary: "#66BB6A", // Lighter green for hover states
          highlight: "#F2F2F2", // Subtle highlight color
          textHighlight: "#4CAF50", // Green highlight for important text
        },
        darkMode: {
          light: "#121212", // Dark mode background, slightly lifted black
          lightgray: "#393939", // Darker gray for UI elements
          gray: "#646464", // Mid-tone gray for secondary text
          darkgray: "#d4d4d4", // Lighter gray for readability
          dark: "#EAEAEA", // Off-white for primary text
          secondary: "#EAEAEA", // Signature green for CTA and key elements
          tertiary: "#66BB6A", // Lighter green for hover states
          highlight: "rgba(76, 175, 80, 0.15)", // Subtle green tint for highlights
          textHighlight: "#66BB6A", // Lighter green for emphasized text
        },
}
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage()
    ],
  },
}

export default config
