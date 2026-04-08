import { StyleSheet } from 'react-native';
import { colors, radius, spacing, font } from './theme';

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: spacing.xl,
    paddingBottom: 40,
  },

  // ── Header ──────────────────────────────────────────────────
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xxl,
    paddingTop: spacing.xs,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    color: colors.text,
    fontSize: font.title,
    fontWeight: '700',
  },
  headerSub: {
    color: colors.textDim,
    fontSize: font.xs,
    marginTop: 1,
  },
  backHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: spacing.xl,
    paddingTop: spacing.xs,
  },
  screenTitle: {
    color: colors.text,
    fontSize: font.xxl,
    fontWeight: '700',
  },

  // ── Buttons ─────────────────────────────────────────────────
  btnRed: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: 14,
    alignItems: 'center',
    marginBottom: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  btnRedText: {
    color: colors.text,
    fontSize: font.xl,
    fontWeight: '600',
  },
  btnOutline: {
    backgroundColor: colors.surfaceDark,
    borderWidth: 1.5,
    borderColor: colors.borderLight,
    borderRadius: radius.lg,
    padding: 13,
    alignItems: 'center',
  },
  btnOutlineText: {
    color: colors.text,
    fontSize: font.lg,
  },
  btnWhite: {
    backgroundColor: colors.text,
    borderRadius: radius.md,
    padding: 12,
    alignItems: 'center',
  },
  btnWhiteText: {
    color: colors.primary,
    fontSize: font.lg,
    fontWeight: '600',
  },

  // ── Form ────────────────────────────────────────────────────
  fieldLabel: {
    color: '#bbbbbb',
    fontSize: font.base,
    fontWeight: '600',
    marginBottom: 7,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: 12,
    color: colors.text,
    fontSize: font.md,
    marginBottom: 14,
  },
  inputMultiline: {
    height: 70,
    textAlignVertical: 'top',
  },

  // ── Section label ────────────────────────────────────────────
  sectionLabel: {
    color: colors.textDim,
    fontSize: font.base,
    fontWeight: '500',
    marginBottom: 10,
  },
});