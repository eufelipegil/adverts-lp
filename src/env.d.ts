interface ImportMetaEnv {
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_GADS_ID?: string;
  readonly PUBLIC_GADS_CONV_LABEL?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
  readonly PUBLIC_WIDZ_TRACK?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
