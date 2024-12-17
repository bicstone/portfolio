import styled from "@emotion/styled";

/**
 * アイコンはBase64埋め込みのCSSが最もパフォーマンスがよい
 * <https://zenn.dev/okamoai/articles/a8d5cf1b094edd>
 * 固定のSVGやPNGを埋め込む場合はStyledのコンポーネントを定義して使用
 */

export const IconBase = styled("div")(({ theme }) => ({
  display: "inline-block",
  width: theme.spacing(3),
  height: theme.spacing(3),
}));
