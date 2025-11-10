import { THEME } from '../constants/theme'

export const LAYOUT_CONFIG = {
  /**
   * Configuration for the responsive video grid used across the app.
   * - Uses `THEME.breakpoints` and `THEME.spacing` for consistency.
   * - Exposes both simple named presets (`mobile`, `tablet`, `desktop`) and
   *   a full `breakpoints` map for runtime-driven layout logic.
   */
  videoGrid: {
    // Simple named presets for quick usage in components
    mobile: { columns: 1, gap: THEME.spacing.xs },
    tablet: { columns: 2, gap: THEME.spacing.md },
    desktop: { columns: 4, gap: THEME.spacing.lg },

    // Detailed breakpoint map (values use THEME.breakpoint strings like '768px')
    breakpoints: {
      mobile: {
        // mobile up to tablet breakpoint
        maxWidth: THEME.breakpoints.tablet,
        columns: 1,
        gap: THEME.spacing.xs
      },
      tablet: {
        minWidth: THEME.breakpoints.tablet,
        maxWidth: THEME.breakpoints.desktop,
        columns: 2,
        gap: THEME.spacing.md
      },
      desktop: {
        minWidth: THEME.breakpoints.desktop,
        // desktop uses more columns for wider screens
        columns: 4,
        gap: THEME.spacing.lg
      }
    }
  }
}