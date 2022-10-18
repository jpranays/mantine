import { createStyles, MantineSize } from '@mantine/styles';

export interface StarSymbolStylesParams {
  size: MantineSize;
  type: 'empty' | 'full';
}
const sizes: Record<MantineSize, number> = {
  xs: 14,
  sm: 18,
  md: 20,
  lg: 28,
  xl: 32,
};

export default createStyles((theme, { size, type }: StarSymbolStylesParams) => {
  const emptyColor = theme.colorScheme === 'light' ? theme.colors.gray[3] : theme.colors.gray[8];
  const fullColor = theme.fn.variant({ variant: 'filled', color: 'yellow' }).background;

  return {
    icon: {
      stroke: type === 'empty' ? emptyColor : fullColor,
      fill: type === 'empty' ? emptyColor : fullColor,
      width: theme.fn.size({ size, sizes }),
      height: theme.fn.size({ size, sizes }),
    },
  };
});
