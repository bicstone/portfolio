export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = ContentfulReference & Node & {
  __typename?: 'ContentfulAsset';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  localFile?: Maybe<File>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  svg?: Maybe<InlineSvg>;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge';
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  file___url = 'file___url',
  file___details___size = 'file___details___size',
  file___details___image___width = 'file___details___image___width',
  file___details___image___height = 'file___details___image___height',
  file___fileName = 'file___fileName',
  file___contentType = 'file___contentType',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  localFile___sourceInstanceName = 'localFile___sourceInstanceName',
  localFile___absolutePath = 'localFile___absolutePath',
  localFile___relativePath = 'localFile___relativePath',
  localFile___extension = 'localFile___extension',
  localFile___size = 'localFile___size',
  localFile___prettySize = 'localFile___prettySize',
  localFile___modifiedTime = 'localFile___modifiedTime',
  localFile___accessTime = 'localFile___accessTime',
  localFile___changeTime = 'localFile___changeTime',
  localFile___birthTime = 'localFile___birthTime',
  localFile___root = 'localFile___root',
  localFile___dir = 'localFile___dir',
  localFile___base = 'localFile___base',
  localFile___ext = 'localFile___ext',
  localFile___name = 'localFile___name',
  localFile___relativeDirectory = 'localFile___relativeDirectory',
  localFile___dev = 'localFile___dev',
  localFile___mode = 'localFile___mode',
  localFile___nlink = 'localFile___nlink',
  localFile___uid = 'localFile___uid',
  localFile___gid = 'localFile___gid',
  localFile___rdev = 'localFile___rdev',
  localFile___ino = 'localFile___ino',
  localFile___atimeMs = 'localFile___atimeMs',
  localFile___mtimeMs = 'localFile___mtimeMs',
  localFile___ctimeMs = 'localFile___ctimeMs',
  localFile___atime = 'localFile___atime',
  localFile___mtime = 'localFile___mtime',
  localFile___ctime = 'localFile___ctime',
  localFile___birthtime = 'localFile___birthtime',
  localFile___birthtimeMs = 'localFile___birthtimeMs',
  localFile___blksize = 'localFile___blksize',
  localFile___blocks = 'localFile___blocks',
  localFile___url = 'localFile___url',
  localFile___childImageSharp___fixed___base64 = 'localFile___childImageSharp___fixed___base64',
  localFile___childImageSharp___fixed___tracedSVG = 'localFile___childImageSharp___fixed___tracedSVG',
  localFile___childImageSharp___fixed___aspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  localFile___childImageSharp___fixed___width = 'localFile___childImageSharp___fixed___width',
  localFile___childImageSharp___fixed___height = 'localFile___childImageSharp___fixed___height',
  localFile___childImageSharp___fixed___src = 'localFile___childImageSharp___fixed___src',
  localFile___childImageSharp___fixed___srcSet = 'localFile___childImageSharp___fixed___srcSet',
  localFile___childImageSharp___fixed___srcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  localFile___childImageSharp___fixed___srcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  localFile___childImageSharp___fixed___originalName = 'localFile___childImageSharp___fixed___originalName',
  localFile___childImageSharp___resolutions___base64 = 'localFile___childImageSharp___resolutions___base64',
  localFile___childImageSharp___resolutions___tracedSVG = 'localFile___childImageSharp___resolutions___tracedSVG',
  localFile___childImageSharp___resolutions___aspectRatio = 'localFile___childImageSharp___resolutions___aspectRatio',
  localFile___childImageSharp___resolutions___width = 'localFile___childImageSharp___resolutions___width',
  localFile___childImageSharp___resolutions___height = 'localFile___childImageSharp___resolutions___height',
  localFile___childImageSharp___resolutions___src = 'localFile___childImageSharp___resolutions___src',
  localFile___childImageSharp___resolutions___srcSet = 'localFile___childImageSharp___resolutions___srcSet',
  localFile___childImageSharp___resolutions___srcWebp = 'localFile___childImageSharp___resolutions___srcWebp',
  localFile___childImageSharp___resolutions___srcSetWebp = 'localFile___childImageSharp___resolutions___srcSetWebp',
  localFile___childImageSharp___resolutions___originalName = 'localFile___childImageSharp___resolutions___originalName',
  localFile___childImageSharp___fluid___base64 = 'localFile___childImageSharp___fluid___base64',
  localFile___childImageSharp___fluid___tracedSVG = 'localFile___childImageSharp___fluid___tracedSVG',
  localFile___childImageSharp___fluid___aspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  localFile___childImageSharp___fluid___src = 'localFile___childImageSharp___fluid___src',
  localFile___childImageSharp___fluid___srcSet = 'localFile___childImageSharp___fluid___srcSet',
  localFile___childImageSharp___fluid___srcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  localFile___childImageSharp___fluid___srcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  localFile___childImageSharp___fluid___sizes = 'localFile___childImageSharp___fluid___sizes',
  localFile___childImageSharp___fluid___originalImg = 'localFile___childImageSharp___fluid___originalImg',
  localFile___childImageSharp___fluid___originalName = 'localFile___childImageSharp___fluid___originalName',
  localFile___childImageSharp___fluid___presentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  localFile___childImageSharp___fluid___presentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  localFile___childImageSharp___sizes___base64 = 'localFile___childImageSharp___sizes___base64',
  localFile___childImageSharp___sizes___tracedSVG = 'localFile___childImageSharp___sizes___tracedSVG',
  localFile___childImageSharp___sizes___aspectRatio = 'localFile___childImageSharp___sizes___aspectRatio',
  localFile___childImageSharp___sizes___src = 'localFile___childImageSharp___sizes___src',
  localFile___childImageSharp___sizes___srcSet = 'localFile___childImageSharp___sizes___srcSet',
  localFile___childImageSharp___sizes___srcWebp = 'localFile___childImageSharp___sizes___srcWebp',
  localFile___childImageSharp___sizes___srcSetWebp = 'localFile___childImageSharp___sizes___srcSetWebp',
  localFile___childImageSharp___sizes___sizes = 'localFile___childImageSharp___sizes___sizes',
  localFile___childImageSharp___sizes___originalImg = 'localFile___childImageSharp___sizes___originalImg',
  localFile___childImageSharp___sizes___originalName = 'localFile___childImageSharp___sizes___originalName',
  localFile___childImageSharp___sizes___presentationWidth = 'localFile___childImageSharp___sizes___presentationWidth',
  localFile___childImageSharp___sizes___presentationHeight = 'localFile___childImageSharp___sizes___presentationHeight',
  localFile___childImageSharp___gatsbyImageData = 'localFile___childImageSharp___gatsbyImageData',
  localFile___childImageSharp___original___width = 'localFile___childImageSharp___original___width',
  localFile___childImageSharp___original___height = 'localFile___childImageSharp___original___height',
  localFile___childImageSharp___original___src = 'localFile___childImageSharp___original___src',
  localFile___childImageSharp___resize___src = 'localFile___childImageSharp___resize___src',
  localFile___childImageSharp___resize___tracedSVG = 'localFile___childImageSharp___resize___tracedSVG',
  localFile___childImageSharp___resize___width = 'localFile___childImageSharp___resize___width',
  localFile___childImageSharp___resize___height = 'localFile___childImageSharp___resize___height',
  localFile___childImageSharp___resize___aspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  localFile___childImageSharp___resize___originalName = 'localFile___childImageSharp___resize___originalName',
  localFile___childImageSharp___id = 'localFile___childImageSharp___id',
  localFile___childImageSharp___parent___id = 'localFile___childImageSharp___parent___id',
  localFile___childImageSharp___parent___children = 'localFile___childImageSharp___parent___children',
  localFile___childImageSharp___children = 'localFile___childImageSharp___children',
  localFile___childImageSharp___children___id = 'localFile___childImageSharp___children___id',
  localFile___childImageSharp___children___children = 'localFile___childImageSharp___children___children',
  localFile___childImageSharp___internal___content = 'localFile___childImageSharp___internal___content',
  localFile___childImageSharp___internal___contentDigest = 'localFile___childImageSharp___internal___contentDigest',
  localFile___childImageSharp___internal___description = 'localFile___childImageSharp___internal___description',
  localFile___childImageSharp___internal___fieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  localFile___childImageSharp___internal___ignoreType = 'localFile___childImageSharp___internal___ignoreType',
  localFile___childImageSharp___internal___mediaType = 'localFile___childImageSharp___internal___mediaType',
  localFile___childImageSharp___internal___owner = 'localFile___childImageSharp___internal___owner',
  localFile___childImageSharp___internal___type = 'localFile___childImageSharp___internal___type',
  localFile___id = 'localFile___id',
  localFile___parent___id = 'localFile___parent___id',
  localFile___parent___parent___id = 'localFile___parent___parent___id',
  localFile___parent___parent___children = 'localFile___parent___parent___children',
  localFile___parent___children = 'localFile___parent___children',
  localFile___parent___children___id = 'localFile___parent___children___id',
  localFile___parent___children___children = 'localFile___parent___children___children',
  localFile___parent___internal___content = 'localFile___parent___internal___content',
  localFile___parent___internal___contentDigest = 'localFile___parent___internal___contentDigest',
  localFile___parent___internal___description = 'localFile___parent___internal___description',
  localFile___parent___internal___fieldOwners = 'localFile___parent___internal___fieldOwners',
  localFile___parent___internal___ignoreType = 'localFile___parent___internal___ignoreType',
  localFile___parent___internal___mediaType = 'localFile___parent___internal___mediaType',
  localFile___parent___internal___owner = 'localFile___parent___internal___owner',
  localFile___parent___internal___type = 'localFile___parent___internal___type',
  localFile___children = 'localFile___children',
  localFile___children___id = 'localFile___children___id',
  localFile___children___parent___id = 'localFile___children___parent___id',
  localFile___children___parent___children = 'localFile___children___parent___children',
  localFile___children___children = 'localFile___children___children',
  localFile___children___children___id = 'localFile___children___children___id',
  localFile___children___children___children = 'localFile___children___children___children',
  localFile___children___internal___content = 'localFile___children___internal___content',
  localFile___children___internal___contentDigest = 'localFile___children___internal___contentDigest',
  localFile___children___internal___description = 'localFile___children___internal___description',
  localFile___children___internal___fieldOwners = 'localFile___children___internal___fieldOwners',
  localFile___children___internal___ignoreType = 'localFile___children___internal___ignoreType',
  localFile___children___internal___mediaType = 'localFile___children___internal___mediaType',
  localFile___children___internal___owner = 'localFile___children___internal___owner',
  localFile___children___internal___type = 'localFile___children___internal___type',
  localFile___internal___content = 'localFile___internal___content',
  localFile___internal___contentDigest = 'localFile___internal___contentDigest',
  localFile___internal___description = 'localFile___internal___description',
  localFile___internal___fieldOwners = 'localFile___internal___fieldOwners',
  localFile___internal___ignoreType = 'localFile___internal___ignoreType',
  localFile___internal___mediaType = 'localFile___internal___mediaType',
  localFile___internal___owner = 'localFile___internal___owner',
  localFile___internal___type = 'localFile___internal___type',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  resize___base64 = 'resize___base64',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___src = 'resize___src',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile';
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails';
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  __typename?: 'ContentfulAssetSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssigne = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulAssigne';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  oss?: Maybe<Array<Maybe<ContentfulOss>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAssigneSys>;
  project?: Maybe<Array<Maybe<ContentfulProject>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAssigneCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssigneUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAssigneConnection = {
  __typename?: 'ContentfulAssigneConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssigneEdge>;
  nodes: Array<ContentfulAssigne>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssigneGroupConnection>;
};


export type ContentfulAssigneConnectionDistinctArgs = {
  field: ContentfulAssigneFieldsEnum;
};


export type ContentfulAssigneConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssigneFieldsEnum;
};

export type ContentfulAssigneEdge = {
  __typename?: 'ContentfulAssigneEdge';
  next?: Maybe<ContentfulAssigne>;
  node: ContentfulAssigne;
  previous?: Maybe<ContentfulAssigne>;
};

export enum ContentfulAssigneFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  oss = 'oss',
  oss___contentful_id = 'oss___contentful_id',
  oss___id = 'oss___id',
  oss___node_locale = 'oss___node_locale',
  oss___name = 'oss___name',
  oss___slug = 'oss___slug',
  oss___startDate = 'oss___startDate',
  oss___during = 'oss___during',
  oss___comment = 'oss___comment',
  oss___siteUrl = 'oss___siteUrl',
  oss___sourceUrl = 'oss___sourceUrl',
  oss___mainImage___contentful_id = 'oss___mainImage___contentful_id',
  oss___mainImage___id = 'oss___mainImage___id',
  oss___mainImage___spaceId = 'oss___mainImage___spaceId',
  oss___mainImage___createdAt = 'oss___mainImage___createdAt',
  oss___mainImage___updatedAt = 'oss___mainImage___updatedAt',
  oss___mainImage___file___url = 'oss___mainImage___file___url',
  oss___mainImage___file___fileName = 'oss___mainImage___file___fileName',
  oss___mainImage___file___contentType = 'oss___mainImage___file___contentType',
  oss___mainImage___title = 'oss___mainImage___title',
  oss___mainImage___description = 'oss___mainImage___description',
  oss___mainImage___node_locale = 'oss___mainImage___node_locale',
  oss___mainImage___sys___type = 'oss___mainImage___sys___type',
  oss___mainImage___sys___revision = 'oss___mainImage___sys___revision',
  oss___mainImage___localFile___sourceInstanceName = 'oss___mainImage___localFile___sourceInstanceName',
  oss___mainImage___localFile___absolutePath = 'oss___mainImage___localFile___absolutePath',
  oss___mainImage___localFile___relativePath = 'oss___mainImage___localFile___relativePath',
  oss___mainImage___localFile___extension = 'oss___mainImage___localFile___extension',
  oss___mainImage___localFile___size = 'oss___mainImage___localFile___size',
  oss___mainImage___localFile___prettySize = 'oss___mainImage___localFile___prettySize',
  oss___mainImage___localFile___modifiedTime = 'oss___mainImage___localFile___modifiedTime',
  oss___mainImage___localFile___accessTime = 'oss___mainImage___localFile___accessTime',
  oss___mainImage___localFile___changeTime = 'oss___mainImage___localFile___changeTime',
  oss___mainImage___localFile___birthTime = 'oss___mainImage___localFile___birthTime',
  oss___mainImage___localFile___root = 'oss___mainImage___localFile___root',
  oss___mainImage___localFile___dir = 'oss___mainImage___localFile___dir',
  oss___mainImage___localFile___base = 'oss___mainImage___localFile___base',
  oss___mainImage___localFile___ext = 'oss___mainImage___localFile___ext',
  oss___mainImage___localFile___name = 'oss___mainImage___localFile___name',
  oss___mainImage___localFile___relativeDirectory = 'oss___mainImage___localFile___relativeDirectory',
  oss___mainImage___localFile___dev = 'oss___mainImage___localFile___dev',
  oss___mainImage___localFile___mode = 'oss___mainImage___localFile___mode',
  oss___mainImage___localFile___nlink = 'oss___mainImage___localFile___nlink',
  oss___mainImage___localFile___uid = 'oss___mainImage___localFile___uid',
  oss___mainImage___localFile___gid = 'oss___mainImage___localFile___gid',
  oss___mainImage___localFile___rdev = 'oss___mainImage___localFile___rdev',
  oss___mainImage___localFile___ino = 'oss___mainImage___localFile___ino',
  oss___mainImage___localFile___atimeMs = 'oss___mainImage___localFile___atimeMs',
  oss___mainImage___localFile___mtimeMs = 'oss___mainImage___localFile___mtimeMs',
  oss___mainImage___localFile___ctimeMs = 'oss___mainImage___localFile___ctimeMs',
  oss___mainImage___localFile___atime = 'oss___mainImage___localFile___atime',
  oss___mainImage___localFile___mtime = 'oss___mainImage___localFile___mtime',
  oss___mainImage___localFile___ctime = 'oss___mainImage___localFile___ctime',
  oss___mainImage___localFile___birthtime = 'oss___mainImage___localFile___birthtime',
  oss___mainImage___localFile___birthtimeMs = 'oss___mainImage___localFile___birthtimeMs',
  oss___mainImage___localFile___blksize = 'oss___mainImage___localFile___blksize',
  oss___mainImage___localFile___blocks = 'oss___mainImage___localFile___blocks',
  oss___mainImage___localFile___url = 'oss___mainImage___localFile___url',
  oss___mainImage___localFile___id = 'oss___mainImage___localFile___id',
  oss___mainImage___localFile___children = 'oss___mainImage___localFile___children',
  oss___mainImage___fixed___base64 = 'oss___mainImage___fixed___base64',
  oss___mainImage___fixed___tracedSVG = 'oss___mainImage___fixed___tracedSVG',
  oss___mainImage___fixed___aspectRatio = 'oss___mainImage___fixed___aspectRatio',
  oss___mainImage___fixed___width = 'oss___mainImage___fixed___width',
  oss___mainImage___fixed___height = 'oss___mainImage___fixed___height',
  oss___mainImage___fixed___src = 'oss___mainImage___fixed___src',
  oss___mainImage___fixed___srcSet = 'oss___mainImage___fixed___srcSet',
  oss___mainImage___fixed___srcWebp = 'oss___mainImage___fixed___srcWebp',
  oss___mainImage___fixed___srcSetWebp = 'oss___mainImage___fixed___srcSetWebp',
  oss___mainImage___resolutions___base64 = 'oss___mainImage___resolutions___base64',
  oss___mainImage___resolutions___tracedSVG = 'oss___mainImage___resolutions___tracedSVG',
  oss___mainImage___resolutions___aspectRatio = 'oss___mainImage___resolutions___aspectRatio',
  oss___mainImage___resolutions___width = 'oss___mainImage___resolutions___width',
  oss___mainImage___resolutions___height = 'oss___mainImage___resolutions___height',
  oss___mainImage___resolutions___src = 'oss___mainImage___resolutions___src',
  oss___mainImage___resolutions___srcSet = 'oss___mainImage___resolutions___srcSet',
  oss___mainImage___resolutions___srcWebp = 'oss___mainImage___resolutions___srcWebp',
  oss___mainImage___resolutions___srcSetWebp = 'oss___mainImage___resolutions___srcSetWebp',
  oss___mainImage___fluid___base64 = 'oss___mainImage___fluid___base64',
  oss___mainImage___fluid___tracedSVG = 'oss___mainImage___fluid___tracedSVG',
  oss___mainImage___fluid___aspectRatio = 'oss___mainImage___fluid___aspectRatio',
  oss___mainImage___fluid___src = 'oss___mainImage___fluid___src',
  oss___mainImage___fluid___srcSet = 'oss___mainImage___fluid___srcSet',
  oss___mainImage___fluid___srcWebp = 'oss___mainImage___fluid___srcWebp',
  oss___mainImage___fluid___srcSetWebp = 'oss___mainImage___fluid___srcSetWebp',
  oss___mainImage___fluid___sizes = 'oss___mainImage___fluid___sizes',
  oss___mainImage___sizes___base64 = 'oss___mainImage___sizes___base64',
  oss___mainImage___sizes___tracedSVG = 'oss___mainImage___sizes___tracedSVG',
  oss___mainImage___sizes___aspectRatio = 'oss___mainImage___sizes___aspectRatio',
  oss___mainImage___sizes___src = 'oss___mainImage___sizes___src',
  oss___mainImage___sizes___srcSet = 'oss___mainImage___sizes___srcSet',
  oss___mainImage___sizes___srcWebp = 'oss___mainImage___sizes___srcWebp',
  oss___mainImage___sizes___srcSetWebp = 'oss___mainImage___sizes___srcSetWebp',
  oss___mainImage___sizes___sizes = 'oss___mainImage___sizes___sizes',
  oss___mainImage___resize___base64 = 'oss___mainImage___resize___base64',
  oss___mainImage___resize___tracedSVG = 'oss___mainImage___resize___tracedSVG',
  oss___mainImage___resize___src = 'oss___mainImage___resize___src',
  oss___mainImage___resize___width = 'oss___mainImage___resize___width',
  oss___mainImage___resize___height = 'oss___mainImage___resize___height',
  oss___mainImage___resize___aspectRatio = 'oss___mainImage___resize___aspectRatio',
  oss___mainImage___parent___id = 'oss___mainImage___parent___id',
  oss___mainImage___parent___children = 'oss___mainImage___parent___children',
  oss___mainImage___children = 'oss___mainImage___children',
  oss___mainImage___children___id = 'oss___mainImage___children___id',
  oss___mainImage___children___children = 'oss___mainImage___children___children',
  oss___mainImage___internal___content = 'oss___mainImage___internal___content',
  oss___mainImage___internal___contentDigest = 'oss___mainImage___internal___contentDigest',
  oss___mainImage___internal___description = 'oss___mainImage___internal___description',
  oss___mainImage___internal___fieldOwners = 'oss___mainImage___internal___fieldOwners',
  oss___mainImage___internal___ignoreType = 'oss___mainImage___internal___ignoreType',
  oss___mainImage___internal___mediaType = 'oss___mainImage___internal___mediaType',
  oss___mainImage___internal___owner = 'oss___mainImage___internal___owner',
  oss___mainImage___internal___type = 'oss___mainImage___internal___type',
  oss___roles = 'oss___roles',
  oss___roles___contentful_id = 'oss___roles___contentful_id',
  oss___roles___id = 'oss___roles___id',
  oss___roles___node_locale = 'oss___roles___node_locale',
  oss___roles___name = 'oss___roles___name',
  oss___roles___project = 'oss___roles___project',
  oss___roles___project___contentful_id = 'oss___roles___project___contentful_id',
  oss___roles___project___id = 'oss___roles___project___id',
  oss___roles___project___node_locale = 'oss___roles___project___node_locale',
  oss___roles___project___name = 'oss___roles___project___name',
  oss___roles___project___startDate = 'oss___roles___project___startDate',
  oss___roles___project___during = 'oss___roles___project___during',
  oss___roles___project___comment = 'oss___roles___project___comment',
  oss___roles___project___roles = 'oss___roles___project___roles',
  oss___roles___project___assigns = 'oss___roles___project___assigns',
  oss___roles___project___systems = 'oss___roles___project___systems',
  oss___roles___project___languages = 'oss___roles___project___languages',
  oss___roles___project___tools = 'oss___roles___project___tools',
  oss___roles___project___spaceId = 'oss___roles___project___spaceId',
  oss___roles___project___createdAt = 'oss___roles___project___createdAt',
  oss___roles___project___updatedAt = 'oss___roles___project___updatedAt',
  oss___roles___project___children = 'oss___roles___project___children',
  oss___roles___oss = 'oss___roles___oss',
  oss___roles___oss___contentful_id = 'oss___roles___oss___contentful_id',
  oss___roles___oss___id = 'oss___roles___oss___id',
  oss___roles___oss___node_locale = 'oss___roles___oss___node_locale',
  oss___roles___oss___name = 'oss___roles___oss___name',
  oss___roles___oss___slug = 'oss___roles___oss___slug',
  oss___roles___oss___startDate = 'oss___roles___oss___startDate',
  oss___roles___oss___during = 'oss___roles___oss___during',
  oss___roles___oss___comment = 'oss___roles___oss___comment',
  oss___roles___oss___siteUrl = 'oss___roles___oss___siteUrl',
  oss___roles___oss___sourceUrl = 'oss___roles___oss___sourceUrl',
  oss___roles___oss___roles = 'oss___roles___oss___roles',
  oss___roles___oss___assigns = 'oss___roles___oss___assigns',
  oss___roles___oss___systems = 'oss___roles___oss___systems',
  oss___roles___oss___languages = 'oss___roles___oss___languages',
  oss___roles___oss___tools = 'oss___roles___oss___tools',
  oss___roles___oss___spaceId = 'oss___roles___oss___spaceId',
  oss___roles___oss___createdAt = 'oss___roles___oss___createdAt',
  oss___roles___oss___updatedAt = 'oss___roles___oss___updatedAt',
  oss___roles___oss___children = 'oss___roles___oss___children',
  oss___roles___spaceId = 'oss___roles___spaceId',
  oss___roles___createdAt = 'oss___roles___createdAt',
  oss___roles___updatedAt = 'oss___roles___updatedAt',
  oss___roles___sys___type = 'oss___roles___sys___type',
  oss___roles___sys___revision = 'oss___roles___sys___revision',
  oss___roles___parent___id = 'oss___roles___parent___id',
  oss___roles___parent___children = 'oss___roles___parent___children',
  oss___roles___children = 'oss___roles___children',
  oss___roles___children___id = 'oss___roles___children___id',
  oss___roles___children___children = 'oss___roles___children___children',
  oss___roles___internal___content = 'oss___roles___internal___content',
  oss___roles___internal___contentDigest = 'oss___roles___internal___contentDigest',
  oss___roles___internal___description = 'oss___roles___internal___description',
  oss___roles___internal___fieldOwners = 'oss___roles___internal___fieldOwners',
  oss___roles___internal___ignoreType = 'oss___roles___internal___ignoreType',
  oss___roles___internal___mediaType = 'oss___roles___internal___mediaType',
  oss___roles___internal___owner = 'oss___roles___internal___owner',
  oss___roles___internal___type = 'oss___roles___internal___type',
  oss___assigns = 'oss___assigns',
  oss___assigns___contentful_id = 'oss___assigns___contentful_id',
  oss___assigns___id = 'oss___assigns___id',
  oss___assigns___node_locale = 'oss___assigns___node_locale',
  oss___assigns___name = 'oss___assigns___name',
  oss___assigns___oss = 'oss___assigns___oss',
  oss___assigns___oss___contentful_id = 'oss___assigns___oss___contentful_id',
  oss___assigns___oss___id = 'oss___assigns___oss___id',
  oss___assigns___oss___node_locale = 'oss___assigns___oss___node_locale',
  oss___assigns___oss___name = 'oss___assigns___oss___name',
  oss___assigns___oss___slug = 'oss___assigns___oss___slug',
  oss___assigns___oss___startDate = 'oss___assigns___oss___startDate',
  oss___assigns___oss___during = 'oss___assigns___oss___during',
  oss___assigns___oss___comment = 'oss___assigns___oss___comment',
  oss___assigns___oss___siteUrl = 'oss___assigns___oss___siteUrl',
  oss___assigns___oss___sourceUrl = 'oss___assigns___oss___sourceUrl',
  oss___assigns___oss___roles = 'oss___assigns___oss___roles',
  oss___assigns___oss___assigns = 'oss___assigns___oss___assigns',
  oss___assigns___oss___systems = 'oss___assigns___oss___systems',
  oss___assigns___oss___languages = 'oss___assigns___oss___languages',
  oss___assigns___oss___tools = 'oss___assigns___oss___tools',
  oss___assigns___oss___spaceId = 'oss___assigns___oss___spaceId',
  oss___assigns___oss___createdAt = 'oss___assigns___oss___createdAt',
  oss___assigns___oss___updatedAt = 'oss___assigns___oss___updatedAt',
  oss___assigns___oss___children = 'oss___assigns___oss___children',
  oss___assigns___spaceId = 'oss___assigns___spaceId',
  oss___assigns___createdAt = 'oss___assigns___createdAt',
  oss___assigns___updatedAt = 'oss___assigns___updatedAt',
  oss___assigns___sys___type = 'oss___assigns___sys___type',
  oss___assigns___sys___revision = 'oss___assigns___sys___revision',
  oss___assigns___project = 'oss___assigns___project',
  oss___assigns___project___contentful_id = 'oss___assigns___project___contentful_id',
  oss___assigns___project___id = 'oss___assigns___project___id',
  oss___assigns___project___node_locale = 'oss___assigns___project___node_locale',
  oss___assigns___project___name = 'oss___assigns___project___name',
  oss___assigns___project___startDate = 'oss___assigns___project___startDate',
  oss___assigns___project___during = 'oss___assigns___project___during',
  oss___assigns___project___comment = 'oss___assigns___project___comment',
  oss___assigns___project___roles = 'oss___assigns___project___roles',
  oss___assigns___project___assigns = 'oss___assigns___project___assigns',
  oss___assigns___project___systems = 'oss___assigns___project___systems',
  oss___assigns___project___languages = 'oss___assigns___project___languages',
  oss___assigns___project___tools = 'oss___assigns___project___tools',
  oss___assigns___project___spaceId = 'oss___assigns___project___spaceId',
  oss___assigns___project___createdAt = 'oss___assigns___project___createdAt',
  oss___assigns___project___updatedAt = 'oss___assigns___project___updatedAt',
  oss___assigns___project___children = 'oss___assigns___project___children',
  oss___assigns___parent___id = 'oss___assigns___parent___id',
  oss___assigns___parent___children = 'oss___assigns___parent___children',
  oss___assigns___children = 'oss___assigns___children',
  oss___assigns___children___id = 'oss___assigns___children___id',
  oss___assigns___children___children = 'oss___assigns___children___children',
  oss___assigns___internal___content = 'oss___assigns___internal___content',
  oss___assigns___internal___contentDigest = 'oss___assigns___internal___contentDigest',
  oss___assigns___internal___description = 'oss___assigns___internal___description',
  oss___assigns___internal___fieldOwners = 'oss___assigns___internal___fieldOwners',
  oss___assigns___internal___ignoreType = 'oss___assigns___internal___ignoreType',
  oss___assigns___internal___mediaType = 'oss___assigns___internal___mediaType',
  oss___assigns___internal___owner = 'oss___assigns___internal___owner',
  oss___assigns___internal___type = 'oss___assigns___internal___type',
  oss___systems = 'oss___systems',
  oss___systems___contentful_id = 'oss___systems___contentful_id',
  oss___systems___id = 'oss___systems___id',
  oss___systems___node_locale = 'oss___systems___node_locale',
  oss___systems___name = 'oss___systems___name',
  oss___systems___level = 'oss___systems___level',
  oss___systems___project = 'oss___systems___project',
  oss___systems___project___contentful_id = 'oss___systems___project___contentful_id',
  oss___systems___project___id = 'oss___systems___project___id',
  oss___systems___project___node_locale = 'oss___systems___project___node_locale',
  oss___systems___project___name = 'oss___systems___project___name',
  oss___systems___project___startDate = 'oss___systems___project___startDate',
  oss___systems___project___during = 'oss___systems___project___during',
  oss___systems___project___comment = 'oss___systems___project___comment',
  oss___systems___project___roles = 'oss___systems___project___roles',
  oss___systems___project___assigns = 'oss___systems___project___assigns',
  oss___systems___project___systems = 'oss___systems___project___systems',
  oss___systems___project___languages = 'oss___systems___project___languages',
  oss___systems___project___tools = 'oss___systems___project___tools',
  oss___systems___project___spaceId = 'oss___systems___project___spaceId',
  oss___systems___project___createdAt = 'oss___systems___project___createdAt',
  oss___systems___project___updatedAt = 'oss___systems___project___updatedAt',
  oss___systems___project___children = 'oss___systems___project___children',
  oss___systems___spaceId = 'oss___systems___spaceId',
  oss___systems___createdAt = 'oss___systems___createdAt',
  oss___systems___updatedAt = 'oss___systems___updatedAt',
  oss___systems___sys___type = 'oss___systems___sys___type',
  oss___systems___sys___revision = 'oss___systems___sys___revision',
  oss___systems___oss = 'oss___systems___oss',
  oss___systems___oss___contentful_id = 'oss___systems___oss___contentful_id',
  oss___systems___oss___id = 'oss___systems___oss___id',
  oss___systems___oss___node_locale = 'oss___systems___oss___node_locale',
  oss___systems___oss___name = 'oss___systems___oss___name',
  oss___systems___oss___slug = 'oss___systems___oss___slug',
  oss___systems___oss___startDate = 'oss___systems___oss___startDate',
  oss___systems___oss___during = 'oss___systems___oss___during',
  oss___systems___oss___comment = 'oss___systems___oss___comment',
  oss___systems___oss___siteUrl = 'oss___systems___oss___siteUrl',
  oss___systems___oss___sourceUrl = 'oss___systems___oss___sourceUrl',
  oss___systems___oss___roles = 'oss___systems___oss___roles',
  oss___systems___oss___assigns = 'oss___systems___oss___assigns',
  oss___systems___oss___systems = 'oss___systems___oss___systems',
  oss___systems___oss___languages = 'oss___systems___oss___languages',
  oss___systems___oss___tools = 'oss___systems___oss___tools',
  oss___systems___oss___spaceId = 'oss___systems___oss___spaceId',
  oss___systems___oss___createdAt = 'oss___systems___oss___createdAt',
  oss___systems___oss___updatedAt = 'oss___systems___oss___updatedAt',
  oss___systems___oss___children = 'oss___systems___oss___children',
  oss___systems___skill_map = 'oss___systems___skill_map',
  oss___systems___skill_map___contentful_id = 'oss___systems___skill_map___contentful_id',
  oss___systems___skill_map___id = 'oss___systems___skill_map___id',
  oss___systems___skill_map___node_locale = 'oss___systems___skill_map___node_locale',
  oss___systems___skill_map___sort = 'oss___systems___skill_map___sort',
  oss___systems___skill_map___name = 'oss___systems___skill_map___name',
  oss___systems___skill_map___expanded = 'oss___systems___skill_map___expanded',
  oss___systems___skill_map___skills = 'oss___systems___skill_map___skills',
  oss___systems___skill_map___spaceId = 'oss___systems___skill_map___spaceId',
  oss___systems___skill_map___createdAt = 'oss___systems___skill_map___createdAt',
  oss___systems___skill_map___updatedAt = 'oss___systems___skill_map___updatedAt',
  oss___systems___skill_map___children = 'oss___systems___skill_map___children',
  oss___systems___parent___id = 'oss___systems___parent___id',
  oss___systems___parent___children = 'oss___systems___parent___children',
  oss___systems___children = 'oss___systems___children',
  oss___systems___children___id = 'oss___systems___children___id',
  oss___systems___children___children = 'oss___systems___children___children',
  oss___systems___internal___content = 'oss___systems___internal___content',
  oss___systems___internal___contentDigest = 'oss___systems___internal___contentDigest',
  oss___systems___internal___description = 'oss___systems___internal___description',
  oss___systems___internal___fieldOwners = 'oss___systems___internal___fieldOwners',
  oss___systems___internal___ignoreType = 'oss___systems___internal___ignoreType',
  oss___systems___internal___mediaType = 'oss___systems___internal___mediaType',
  oss___systems___internal___owner = 'oss___systems___internal___owner',
  oss___systems___internal___type = 'oss___systems___internal___type',
  oss___languages = 'oss___languages',
  oss___languages___contentful_id = 'oss___languages___contentful_id',
  oss___languages___id = 'oss___languages___id',
  oss___languages___node_locale = 'oss___languages___node_locale',
  oss___languages___name = 'oss___languages___name',
  oss___languages___level = 'oss___languages___level',
  oss___languages___project = 'oss___languages___project',
  oss___languages___project___contentful_id = 'oss___languages___project___contentful_id',
  oss___languages___project___id = 'oss___languages___project___id',
  oss___languages___project___node_locale = 'oss___languages___project___node_locale',
  oss___languages___project___name = 'oss___languages___project___name',
  oss___languages___project___startDate = 'oss___languages___project___startDate',
  oss___languages___project___during = 'oss___languages___project___during',
  oss___languages___project___comment = 'oss___languages___project___comment',
  oss___languages___project___roles = 'oss___languages___project___roles',
  oss___languages___project___assigns = 'oss___languages___project___assigns',
  oss___languages___project___systems = 'oss___languages___project___systems',
  oss___languages___project___languages = 'oss___languages___project___languages',
  oss___languages___project___tools = 'oss___languages___project___tools',
  oss___languages___project___spaceId = 'oss___languages___project___spaceId',
  oss___languages___project___createdAt = 'oss___languages___project___createdAt',
  oss___languages___project___updatedAt = 'oss___languages___project___updatedAt',
  oss___languages___project___children = 'oss___languages___project___children',
  oss___languages___spaceId = 'oss___languages___spaceId',
  oss___languages___createdAt = 'oss___languages___createdAt',
  oss___languages___updatedAt = 'oss___languages___updatedAt',
  oss___languages___sys___type = 'oss___languages___sys___type',
  oss___languages___sys___revision = 'oss___languages___sys___revision',
  oss___languages___oss = 'oss___languages___oss',
  oss___languages___oss___contentful_id = 'oss___languages___oss___contentful_id',
  oss___languages___oss___id = 'oss___languages___oss___id',
  oss___languages___oss___node_locale = 'oss___languages___oss___node_locale',
  oss___languages___oss___name = 'oss___languages___oss___name',
  oss___languages___oss___slug = 'oss___languages___oss___slug',
  oss___languages___oss___startDate = 'oss___languages___oss___startDate',
  oss___languages___oss___during = 'oss___languages___oss___during',
  oss___languages___oss___comment = 'oss___languages___oss___comment',
  oss___languages___oss___siteUrl = 'oss___languages___oss___siteUrl',
  oss___languages___oss___sourceUrl = 'oss___languages___oss___sourceUrl',
  oss___languages___oss___roles = 'oss___languages___oss___roles',
  oss___languages___oss___assigns = 'oss___languages___oss___assigns',
  oss___languages___oss___systems = 'oss___languages___oss___systems',
  oss___languages___oss___languages = 'oss___languages___oss___languages',
  oss___languages___oss___tools = 'oss___languages___oss___tools',
  oss___languages___oss___spaceId = 'oss___languages___oss___spaceId',
  oss___languages___oss___createdAt = 'oss___languages___oss___createdAt',
  oss___languages___oss___updatedAt = 'oss___languages___oss___updatedAt',
  oss___languages___oss___children = 'oss___languages___oss___children',
  oss___languages___skill_map = 'oss___languages___skill_map',
  oss___languages___skill_map___contentful_id = 'oss___languages___skill_map___contentful_id',
  oss___languages___skill_map___id = 'oss___languages___skill_map___id',
  oss___languages___skill_map___node_locale = 'oss___languages___skill_map___node_locale',
  oss___languages___skill_map___sort = 'oss___languages___skill_map___sort',
  oss___languages___skill_map___name = 'oss___languages___skill_map___name',
  oss___languages___skill_map___expanded = 'oss___languages___skill_map___expanded',
  oss___languages___skill_map___skills = 'oss___languages___skill_map___skills',
  oss___languages___skill_map___spaceId = 'oss___languages___skill_map___spaceId',
  oss___languages___skill_map___createdAt = 'oss___languages___skill_map___createdAt',
  oss___languages___skill_map___updatedAt = 'oss___languages___skill_map___updatedAt',
  oss___languages___skill_map___children = 'oss___languages___skill_map___children',
  oss___languages___parent___id = 'oss___languages___parent___id',
  oss___languages___parent___children = 'oss___languages___parent___children',
  oss___languages___children = 'oss___languages___children',
  oss___languages___children___id = 'oss___languages___children___id',
  oss___languages___children___children = 'oss___languages___children___children',
  oss___languages___internal___content = 'oss___languages___internal___content',
  oss___languages___internal___contentDigest = 'oss___languages___internal___contentDigest',
  oss___languages___internal___description = 'oss___languages___internal___description',
  oss___languages___internal___fieldOwners = 'oss___languages___internal___fieldOwners',
  oss___languages___internal___ignoreType = 'oss___languages___internal___ignoreType',
  oss___languages___internal___mediaType = 'oss___languages___internal___mediaType',
  oss___languages___internal___owner = 'oss___languages___internal___owner',
  oss___languages___internal___type = 'oss___languages___internal___type',
  oss___tools = 'oss___tools',
  oss___tools___contentful_id = 'oss___tools___contentful_id',
  oss___tools___id = 'oss___tools___id',
  oss___tools___node_locale = 'oss___tools___node_locale',
  oss___tools___name = 'oss___tools___name',
  oss___tools___level = 'oss___tools___level',
  oss___tools___project = 'oss___tools___project',
  oss___tools___project___contentful_id = 'oss___tools___project___contentful_id',
  oss___tools___project___id = 'oss___tools___project___id',
  oss___tools___project___node_locale = 'oss___tools___project___node_locale',
  oss___tools___project___name = 'oss___tools___project___name',
  oss___tools___project___startDate = 'oss___tools___project___startDate',
  oss___tools___project___during = 'oss___tools___project___during',
  oss___tools___project___comment = 'oss___tools___project___comment',
  oss___tools___project___roles = 'oss___tools___project___roles',
  oss___tools___project___assigns = 'oss___tools___project___assigns',
  oss___tools___project___systems = 'oss___tools___project___systems',
  oss___tools___project___languages = 'oss___tools___project___languages',
  oss___tools___project___tools = 'oss___tools___project___tools',
  oss___tools___project___spaceId = 'oss___tools___project___spaceId',
  oss___tools___project___createdAt = 'oss___tools___project___createdAt',
  oss___tools___project___updatedAt = 'oss___tools___project___updatedAt',
  oss___tools___project___children = 'oss___tools___project___children',
  oss___tools___spaceId = 'oss___tools___spaceId',
  oss___tools___createdAt = 'oss___tools___createdAt',
  oss___tools___updatedAt = 'oss___tools___updatedAt',
  oss___tools___sys___type = 'oss___tools___sys___type',
  oss___tools___sys___revision = 'oss___tools___sys___revision',
  oss___tools___oss = 'oss___tools___oss',
  oss___tools___oss___contentful_id = 'oss___tools___oss___contentful_id',
  oss___tools___oss___id = 'oss___tools___oss___id',
  oss___tools___oss___node_locale = 'oss___tools___oss___node_locale',
  oss___tools___oss___name = 'oss___tools___oss___name',
  oss___tools___oss___slug = 'oss___tools___oss___slug',
  oss___tools___oss___startDate = 'oss___tools___oss___startDate',
  oss___tools___oss___during = 'oss___tools___oss___during',
  oss___tools___oss___comment = 'oss___tools___oss___comment',
  oss___tools___oss___siteUrl = 'oss___tools___oss___siteUrl',
  oss___tools___oss___sourceUrl = 'oss___tools___oss___sourceUrl',
  oss___tools___oss___roles = 'oss___tools___oss___roles',
  oss___tools___oss___assigns = 'oss___tools___oss___assigns',
  oss___tools___oss___systems = 'oss___tools___oss___systems',
  oss___tools___oss___languages = 'oss___tools___oss___languages',
  oss___tools___oss___tools = 'oss___tools___oss___tools',
  oss___tools___oss___spaceId = 'oss___tools___oss___spaceId',
  oss___tools___oss___createdAt = 'oss___tools___oss___createdAt',
  oss___tools___oss___updatedAt = 'oss___tools___oss___updatedAt',
  oss___tools___oss___children = 'oss___tools___oss___children',
  oss___tools___skill_map = 'oss___tools___skill_map',
  oss___tools___skill_map___contentful_id = 'oss___tools___skill_map___contentful_id',
  oss___tools___skill_map___id = 'oss___tools___skill_map___id',
  oss___tools___skill_map___node_locale = 'oss___tools___skill_map___node_locale',
  oss___tools___skill_map___sort = 'oss___tools___skill_map___sort',
  oss___tools___skill_map___name = 'oss___tools___skill_map___name',
  oss___tools___skill_map___expanded = 'oss___tools___skill_map___expanded',
  oss___tools___skill_map___skills = 'oss___tools___skill_map___skills',
  oss___tools___skill_map___spaceId = 'oss___tools___skill_map___spaceId',
  oss___tools___skill_map___createdAt = 'oss___tools___skill_map___createdAt',
  oss___tools___skill_map___updatedAt = 'oss___tools___skill_map___updatedAt',
  oss___tools___skill_map___children = 'oss___tools___skill_map___children',
  oss___tools___parent___id = 'oss___tools___parent___id',
  oss___tools___parent___children = 'oss___tools___parent___children',
  oss___tools___children = 'oss___tools___children',
  oss___tools___children___id = 'oss___tools___children___id',
  oss___tools___children___children = 'oss___tools___children___children',
  oss___tools___internal___content = 'oss___tools___internal___content',
  oss___tools___internal___contentDigest = 'oss___tools___internal___contentDigest',
  oss___tools___internal___description = 'oss___tools___internal___description',
  oss___tools___internal___fieldOwners = 'oss___tools___internal___fieldOwners',
  oss___tools___internal___ignoreType = 'oss___tools___internal___ignoreType',
  oss___tools___internal___mediaType = 'oss___tools___internal___mediaType',
  oss___tools___internal___owner = 'oss___tools___internal___owner',
  oss___tools___internal___type = 'oss___tools___internal___type',
  oss___spaceId = 'oss___spaceId',
  oss___createdAt = 'oss___createdAt',
  oss___updatedAt = 'oss___updatedAt',
  oss___sys___type = 'oss___sys___type',
  oss___sys___revision = 'oss___sys___revision',
  oss___parent___id = 'oss___parent___id',
  oss___parent___parent___id = 'oss___parent___parent___id',
  oss___parent___parent___children = 'oss___parent___parent___children',
  oss___parent___children = 'oss___parent___children',
  oss___parent___children___id = 'oss___parent___children___id',
  oss___parent___children___children = 'oss___parent___children___children',
  oss___parent___internal___content = 'oss___parent___internal___content',
  oss___parent___internal___contentDigest = 'oss___parent___internal___contentDigest',
  oss___parent___internal___description = 'oss___parent___internal___description',
  oss___parent___internal___fieldOwners = 'oss___parent___internal___fieldOwners',
  oss___parent___internal___ignoreType = 'oss___parent___internal___ignoreType',
  oss___parent___internal___mediaType = 'oss___parent___internal___mediaType',
  oss___parent___internal___owner = 'oss___parent___internal___owner',
  oss___parent___internal___type = 'oss___parent___internal___type',
  oss___children = 'oss___children',
  oss___children___id = 'oss___children___id',
  oss___children___parent___id = 'oss___children___parent___id',
  oss___children___parent___children = 'oss___children___parent___children',
  oss___children___children = 'oss___children___children',
  oss___children___children___id = 'oss___children___children___id',
  oss___children___children___children = 'oss___children___children___children',
  oss___children___internal___content = 'oss___children___internal___content',
  oss___children___internal___contentDigest = 'oss___children___internal___contentDigest',
  oss___children___internal___description = 'oss___children___internal___description',
  oss___children___internal___fieldOwners = 'oss___children___internal___fieldOwners',
  oss___children___internal___ignoreType = 'oss___children___internal___ignoreType',
  oss___children___internal___mediaType = 'oss___children___internal___mediaType',
  oss___children___internal___owner = 'oss___children___internal___owner',
  oss___children___internal___type = 'oss___children___internal___type',
  oss___internal___content = 'oss___internal___content',
  oss___internal___contentDigest = 'oss___internal___contentDigest',
  oss___internal___description = 'oss___internal___description',
  oss___internal___fieldOwners = 'oss___internal___fieldOwners',
  oss___internal___ignoreType = 'oss___internal___ignoreType',
  oss___internal___mediaType = 'oss___internal___mediaType',
  oss___internal___owner = 'oss___internal___owner',
  oss___internal___type = 'oss___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  project = 'project',
  project___contentful_id = 'project___contentful_id',
  project___id = 'project___id',
  project___node_locale = 'project___node_locale',
  project___name = 'project___name',
  project___startDate = 'project___startDate',
  project___during = 'project___during',
  project___comment = 'project___comment',
  project___roles = 'project___roles',
  project___roles___contentful_id = 'project___roles___contentful_id',
  project___roles___id = 'project___roles___id',
  project___roles___node_locale = 'project___roles___node_locale',
  project___roles___name = 'project___roles___name',
  project___roles___project = 'project___roles___project',
  project___roles___project___contentful_id = 'project___roles___project___contentful_id',
  project___roles___project___id = 'project___roles___project___id',
  project___roles___project___node_locale = 'project___roles___project___node_locale',
  project___roles___project___name = 'project___roles___project___name',
  project___roles___project___startDate = 'project___roles___project___startDate',
  project___roles___project___during = 'project___roles___project___during',
  project___roles___project___comment = 'project___roles___project___comment',
  project___roles___project___roles = 'project___roles___project___roles',
  project___roles___project___assigns = 'project___roles___project___assigns',
  project___roles___project___systems = 'project___roles___project___systems',
  project___roles___project___languages = 'project___roles___project___languages',
  project___roles___project___tools = 'project___roles___project___tools',
  project___roles___project___spaceId = 'project___roles___project___spaceId',
  project___roles___project___createdAt = 'project___roles___project___createdAt',
  project___roles___project___updatedAt = 'project___roles___project___updatedAt',
  project___roles___project___children = 'project___roles___project___children',
  project___roles___oss = 'project___roles___oss',
  project___roles___oss___contentful_id = 'project___roles___oss___contentful_id',
  project___roles___oss___id = 'project___roles___oss___id',
  project___roles___oss___node_locale = 'project___roles___oss___node_locale',
  project___roles___oss___name = 'project___roles___oss___name',
  project___roles___oss___slug = 'project___roles___oss___slug',
  project___roles___oss___startDate = 'project___roles___oss___startDate',
  project___roles___oss___during = 'project___roles___oss___during',
  project___roles___oss___comment = 'project___roles___oss___comment',
  project___roles___oss___siteUrl = 'project___roles___oss___siteUrl',
  project___roles___oss___sourceUrl = 'project___roles___oss___sourceUrl',
  project___roles___oss___roles = 'project___roles___oss___roles',
  project___roles___oss___assigns = 'project___roles___oss___assigns',
  project___roles___oss___systems = 'project___roles___oss___systems',
  project___roles___oss___languages = 'project___roles___oss___languages',
  project___roles___oss___tools = 'project___roles___oss___tools',
  project___roles___oss___spaceId = 'project___roles___oss___spaceId',
  project___roles___oss___createdAt = 'project___roles___oss___createdAt',
  project___roles___oss___updatedAt = 'project___roles___oss___updatedAt',
  project___roles___oss___children = 'project___roles___oss___children',
  project___roles___spaceId = 'project___roles___spaceId',
  project___roles___createdAt = 'project___roles___createdAt',
  project___roles___updatedAt = 'project___roles___updatedAt',
  project___roles___sys___type = 'project___roles___sys___type',
  project___roles___sys___revision = 'project___roles___sys___revision',
  project___roles___parent___id = 'project___roles___parent___id',
  project___roles___parent___children = 'project___roles___parent___children',
  project___roles___children = 'project___roles___children',
  project___roles___children___id = 'project___roles___children___id',
  project___roles___children___children = 'project___roles___children___children',
  project___roles___internal___content = 'project___roles___internal___content',
  project___roles___internal___contentDigest = 'project___roles___internal___contentDigest',
  project___roles___internal___description = 'project___roles___internal___description',
  project___roles___internal___fieldOwners = 'project___roles___internal___fieldOwners',
  project___roles___internal___ignoreType = 'project___roles___internal___ignoreType',
  project___roles___internal___mediaType = 'project___roles___internal___mediaType',
  project___roles___internal___owner = 'project___roles___internal___owner',
  project___roles___internal___type = 'project___roles___internal___type',
  project___assigns = 'project___assigns',
  project___assigns___contentful_id = 'project___assigns___contentful_id',
  project___assigns___id = 'project___assigns___id',
  project___assigns___node_locale = 'project___assigns___node_locale',
  project___assigns___name = 'project___assigns___name',
  project___assigns___oss = 'project___assigns___oss',
  project___assigns___oss___contentful_id = 'project___assigns___oss___contentful_id',
  project___assigns___oss___id = 'project___assigns___oss___id',
  project___assigns___oss___node_locale = 'project___assigns___oss___node_locale',
  project___assigns___oss___name = 'project___assigns___oss___name',
  project___assigns___oss___slug = 'project___assigns___oss___slug',
  project___assigns___oss___startDate = 'project___assigns___oss___startDate',
  project___assigns___oss___during = 'project___assigns___oss___during',
  project___assigns___oss___comment = 'project___assigns___oss___comment',
  project___assigns___oss___siteUrl = 'project___assigns___oss___siteUrl',
  project___assigns___oss___sourceUrl = 'project___assigns___oss___sourceUrl',
  project___assigns___oss___roles = 'project___assigns___oss___roles',
  project___assigns___oss___assigns = 'project___assigns___oss___assigns',
  project___assigns___oss___systems = 'project___assigns___oss___systems',
  project___assigns___oss___languages = 'project___assigns___oss___languages',
  project___assigns___oss___tools = 'project___assigns___oss___tools',
  project___assigns___oss___spaceId = 'project___assigns___oss___spaceId',
  project___assigns___oss___createdAt = 'project___assigns___oss___createdAt',
  project___assigns___oss___updatedAt = 'project___assigns___oss___updatedAt',
  project___assigns___oss___children = 'project___assigns___oss___children',
  project___assigns___spaceId = 'project___assigns___spaceId',
  project___assigns___createdAt = 'project___assigns___createdAt',
  project___assigns___updatedAt = 'project___assigns___updatedAt',
  project___assigns___sys___type = 'project___assigns___sys___type',
  project___assigns___sys___revision = 'project___assigns___sys___revision',
  project___assigns___project = 'project___assigns___project',
  project___assigns___project___contentful_id = 'project___assigns___project___contentful_id',
  project___assigns___project___id = 'project___assigns___project___id',
  project___assigns___project___node_locale = 'project___assigns___project___node_locale',
  project___assigns___project___name = 'project___assigns___project___name',
  project___assigns___project___startDate = 'project___assigns___project___startDate',
  project___assigns___project___during = 'project___assigns___project___during',
  project___assigns___project___comment = 'project___assigns___project___comment',
  project___assigns___project___roles = 'project___assigns___project___roles',
  project___assigns___project___assigns = 'project___assigns___project___assigns',
  project___assigns___project___systems = 'project___assigns___project___systems',
  project___assigns___project___languages = 'project___assigns___project___languages',
  project___assigns___project___tools = 'project___assigns___project___tools',
  project___assigns___project___spaceId = 'project___assigns___project___spaceId',
  project___assigns___project___createdAt = 'project___assigns___project___createdAt',
  project___assigns___project___updatedAt = 'project___assigns___project___updatedAt',
  project___assigns___project___children = 'project___assigns___project___children',
  project___assigns___parent___id = 'project___assigns___parent___id',
  project___assigns___parent___children = 'project___assigns___parent___children',
  project___assigns___children = 'project___assigns___children',
  project___assigns___children___id = 'project___assigns___children___id',
  project___assigns___children___children = 'project___assigns___children___children',
  project___assigns___internal___content = 'project___assigns___internal___content',
  project___assigns___internal___contentDigest = 'project___assigns___internal___contentDigest',
  project___assigns___internal___description = 'project___assigns___internal___description',
  project___assigns___internal___fieldOwners = 'project___assigns___internal___fieldOwners',
  project___assigns___internal___ignoreType = 'project___assigns___internal___ignoreType',
  project___assigns___internal___mediaType = 'project___assigns___internal___mediaType',
  project___assigns___internal___owner = 'project___assigns___internal___owner',
  project___assigns___internal___type = 'project___assigns___internal___type',
  project___systems = 'project___systems',
  project___systems___contentful_id = 'project___systems___contentful_id',
  project___systems___id = 'project___systems___id',
  project___systems___node_locale = 'project___systems___node_locale',
  project___systems___name = 'project___systems___name',
  project___systems___level = 'project___systems___level',
  project___systems___project = 'project___systems___project',
  project___systems___project___contentful_id = 'project___systems___project___contentful_id',
  project___systems___project___id = 'project___systems___project___id',
  project___systems___project___node_locale = 'project___systems___project___node_locale',
  project___systems___project___name = 'project___systems___project___name',
  project___systems___project___startDate = 'project___systems___project___startDate',
  project___systems___project___during = 'project___systems___project___during',
  project___systems___project___comment = 'project___systems___project___comment',
  project___systems___project___roles = 'project___systems___project___roles',
  project___systems___project___assigns = 'project___systems___project___assigns',
  project___systems___project___systems = 'project___systems___project___systems',
  project___systems___project___languages = 'project___systems___project___languages',
  project___systems___project___tools = 'project___systems___project___tools',
  project___systems___project___spaceId = 'project___systems___project___spaceId',
  project___systems___project___createdAt = 'project___systems___project___createdAt',
  project___systems___project___updatedAt = 'project___systems___project___updatedAt',
  project___systems___project___children = 'project___systems___project___children',
  project___systems___spaceId = 'project___systems___spaceId',
  project___systems___createdAt = 'project___systems___createdAt',
  project___systems___updatedAt = 'project___systems___updatedAt',
  project___systems___sys___type = 'project___systems___sys___type',
  project___systems___sys___revision = 'project___systems___sys___revision',
  project___systems___oss = 'project___systems___oss',
  project___systems___oss___contentful_id = 'project___systems___oss___contentful_id',
  project___systems___oss___id = 'project___systems___oss___id',
  project___systems___oss___node_locale = 'project___systems___oss___node_locale',
  project___systems___oss___name = 'project___systems___oss___name',
  project___systems___oss___slug = 'project___systems___oss___slug',
  project___systems___oss___startDate = 'project___systems___oss___startDate',
  project___systems___oss___during = 'project___systems___oss___during',
  project___systems___oss___comment = 'project___systems___oss___comment',
  project___systems___oss___siteUrl = 'project___systems___oss___siteUrl',
  project___systems___oss___sourceUrl = 'project___systems___oss___sourceUrl',
  project___systems___oss___roles = 'project___systems___oss___roles',
  project___systems___oss___assigns = 'project___systems___oss___assigns',
  project___systems___oss___systems = 'project___systems___oss___systems',
  project___systems___oss___languages = 'project___systems___oss___languages',
  project___systems___oss___tools = 'project___systems___oss___tools',
  project___systems___oss___spaceId = 'project___systems___oss___spaceId',
  project___systems___oss___createdAt = 'project___systems___oss___createdAt',
  project___systems___oss___updatedAt = 'project___systems___oss___updatedAt',
  project___systems___oss___children = 'project___systems___oss___children',
  project___systems___skill_map = 'project___systems___skill_map',
  project___systems___skill_map___contentful_id = 'project___systems___skill_map___contentful_id',
  project___systems___skill_map___id = 'project___systems___skill_map___id',
  project___systems___skill_map___node_locale = 'project___systems___skill_map___node_locale',
  project___systems___skill_map___sort = 'project___systems___skill_map___sort',
  project___systems___skill_map___name = 'project___systems___skill_map___name',
  project___systems___skill_map___expanded = 'project___systems___skill_map___expanded',
  project___systems___skill_map___skills = 'project___systems___skill_map___skills',
  project___systems___skill_map___spaceId = 'project___systems___skill_map___spaceId',
  project___systems___skill_map___createdAt = 'project___systems___skill_map___createdAt',
  project___systems___skill_map___updatedAt = 'project___systems___skill_map___updatedAt',
  project___systems___skill_map___children = 'project___systems___skill_map___children',
  project___systems___parent___id = 'project___systems___parent___id',
  project___systems___parent___children = 'project___systems___parent___children',
  project___systems___children = 'project___systems___children',
  project___systems___children___id = 'project___systems___children___id',
  project___systems___children___children = 'project___systems___children___children',
  project___systems___internal___content = 'project___systems___internal___content',
  project___systems___internal___contentDigest = 'project___systems___internal___contentDigest',
  project___systems___internal___description = 'project___systems___internal___description',
  project___systems___internal___fieldOwners = 'project___systems___internal___fieldOwners',
  project___systems___internal___ignoreType = 'project___systems___internal___ignoreType',
  project___systems___internal___mediaType = 'project___systems___internal___mediaType',
  project___systems___internal___owner = 'project___systems___internal___owner',
  project___systems___internal___type = 'project___systems___internal___type',
  project___languages = 'project___languages',
  project___languages___contentful_id = 'project___languages___contentful_id',
  project___languages___id = 'project___languages___id',
  project___languages___node_locale = 'project___languages___node_locale',
  project___languages___name = 'project___languages___name',
  project___languages___level = 'project___languages___level',
  project___languages___project = 'project___languages___project',
  project___languages___project___contentful_id = 'project___languages___project___contentful_id',
  project___languages___project___id = 'project___languages___project___id',
  project___languages___project___node_locale = 'project___languages___project___node_locale',
  project___languages___project___name = 'project___languages___project___name',
  project___languages___project___startDate = 'project___languages___project___startDate',
  project___languages___project___during = 'project___languages___project___during',
  project___languages___project___comment = 'project___languages___project___comment',
  project___languages___project___roles = 'project___languages___project___roles',
  project___languages___project___assigns = 'project___languages___project___assigns',
  project___languages___project___systems = 'project___languages___project___systems',
  project___languages___project___languages = 'project___languages___project___languages',
  project___languages___project___tools = 'project___languages___project___tools',
  project___languages___project___spaceId = 'project___languages___project___spaceId',
  project___languages___project___createdAt = 'project___languages___project___createdAt',
  project___languages___project___updatedAt = 'project___languages___project___updatedAt',
  project___languages___project___children = 'project___languages___project___children',
  project___languages___spaceId = 'project___languages___spaceId',
  project___languages___createdAt = 'project___languages___createdAt',
  project___languages___updatedAt = 'project___languages___updatedAt',
  project___languages___sys___type = 'project___languages___sys___type',
  project___languages___sys___revision = 'project___languages___sys___revision',
  project___languages___oss = 'project___languages___oss',
  project___languages___oss___contentful_id = 'project___languages___oss___contentful_id',
  project___languages___oss___id = 'project___languages___oss___id',
  project___languages___oss___node_locale = 'project___languages___oss___node_locale',
  project___languages___oss___name = 'project___languages___oss___name',
  project___languages___oss___slug = 'project___languages___oss___slug',
  project___languages___oss___startDate = 'project___languages___oss___startDate',
  project___languages___oss___during = 'project___languages___oss___during',
  project___languages___oss___comment = 'project___languages___oss___comment',
  project___languages___oss___siteUrl = 'project___languages___oss___siteUrl',
  project___languages___oss___sourceUrl = 'project___languages___oss___sourceUrl',
  project___languages___oss___roles = 'project___languages___oss___roles',
  project___languages___oss___assigns = 'project___languages___oss___assigns',
  project___languages___oss___systems = 'project___languages___oss___systems',
  project___languages___oss___languages = 'project___languages___oss___languages',
  project___languages___oss___tools = 'project___languages___oss___tools',
  project___languages___oss___spaceId = 'project___languages___oss___spaceId',
  project___languages___oss___createdAt = 'project___languages___oss___createdAt',
  project___languages___oss___updatedAt = 'project___languages___oss___updatedAt',
  project___languages___oss___children = 'project___languages___oss___children',
  project___languages___skill_map = 'project___languages___skill_map',
  project___languages___skill_map___contentful_id = 'project___languages___skill_map___contentful_id',
  project___languages___skill_map___id = 'project___languages___skill_map___id',
  project___languages___skill_map___node_locale = 'project___languages___skill_map___node_locale',
  project___languages___skill_map___sort = 'project___languages___skill_map___sort',
  project___languages___skill_map___name = 'project___languages___skill_map___name',
  project___languages___skill_map___expanded = 'project___languages___skill_map___expanded',
  project___languages___skill_map___skills = 'project___languages___skill_map___skills',
  project___languages___skill_map___spaceId = 'project___languages___skill_map___spaceId',
  project___languages___skill_map___createdAt = 'project___languages___skill_map___createdAt',
  project___languages___skill_map___updatedAt = 'project___languages___skill_map___updatedAt',
  project___languages___skill_map___children = 'project___languages___skill_map___children',
  project___languages___parent___id = 'project___languages___parent___id',
  project___languages___parent___children = 'project___languages___parent___children',
  project___languages___children = 'project___languages___children',
  project___languages___children___id = 'project___languages___children___id',
  project___languages___children___children = 'project___languages___children___children',
  project___languages___internal___content = 'project___languages___internal___content',
  project___languages___internal___contentDigest = 'project___languages___internal___contentDigest',
  project___languages___internal___description = 'project___languages___internal___description',
  project___languages___internal___fieldOwners = 'project___languages___internal___fieldOwners',
  project___languages___internal___ignoreType = 'project___languages___internal___ignoreType',
  project___languages___internal___mediaType = 'project___languages___internal___mediaType',
  project___languages___internal___owner = 'project___languages___internal___owner',
  project___languages___internal___type = 'project___languages___internal___type',
  project___tools = 'project___tools',
  project___tools___contentful_id = 'project___tools___contentful_id',
  project___tools___id = 'project___tools___id',
  project___tools___node_locale = 'project___tools___node_locale',
  project___tools___name = 'project___tools___name',
  project___tools___level = 'project___tools___level',
  project___tools___project = 'project___tools___project',
  project___tools___project___contentful_id = 'project___tools___project___contentful_id',
  project___tools___project___id = 'project___tools___project___id',
  project___tools___project___node_locale = 'project___tools___project___node_locale',
  project___tools___project___name = 'project___tools___project___name',
  project___tools___project___startDate = 'project___tools___project___startDate',
  project___tools___project___during = 'project___tools___project___during',
  project___tools___project___comment = 'project___tools___project___comment',
  project___tools___project___roles = 'project___tools___project___roles',
  project___tools___project___assigns = 'project___tools___project___assigns',
  project___tools___project___systems = 'project___tools___project___systems',
  project___tools___project___languages = 'project___tools___project___languages',
  project___tools___project___tools = 'project___tools___project___tools',
  project___tools___project___spaceId = 'project___tools___project___spaceId',
  project___tools___project___createdAt = 'project___tools___project___createdAt',
  project___tools___project___updatedAt = 'project___tools___project___updatedAt',
  project___tools___project___children = 'project___tools___project___children',
  project___tools___spaceId = 'project___tools___spaceId',
  project___tools___createdAt = 'project___tools___createdAt',
  project___tools___updatedAt = 'project___tools___updatedAt',
  project___tools___sys___type = 'project___tools___sys___type',
  project___tools___sys___revision = 'project___tools___sys___revision',
  project___tools___oss = 'project___tools___oss',
  project___tools___oss___contentful_id = 'project___tools___oss___contentful_id',
  project___tools___oss___id = 'project___tools___oss___id',
  project___tools___oss___node_locale = 'project___tools___oss___node_locale',
  project___tools___oss___name = 'project___tools___oss___name',
  project___tools___oss___slug = 'project___tools___oss___slug',
  project___tools___oss___startDate = 'project___tools___oss___startDate',
  project___tools___oss___during = 'project___tools___oss___during',
  project___tools___oss___comment = 'project___tools___oss___comment',
  project___tools___oss___siteUrl = 'project___tools___oss___siteUrl',
  project___tools___oss___sourceUrl = 'project___tools___oss___sourceUrl',
  project___tools___oss___roles = 'project___tools___oss___roles',
  project___tools___oss___assigns = 'project___tools___oss___assigns',
  project___tools___oss___systems = 'project___tools___oss___systems',
  project___tools___oss___languages = 'project___tools___oss___languages',
  project___tools___oss___tools = 'project___tools___oss___tools',
  project___tools___oss___spaceId = 'project___tools___oss___spaceId',
  project___tools___oss___createdAt = 'project___tools___oss___createdAt',
  project___tools___oss___updatedAt = 'project___tools___oss___updatedAt',
  project___tools___oss___children = 'project___tools___oss___children',
  project___tools___skill_map = 'project___tools___skill_map',
  project___tools___skill_map___contentful_id = 'project___tools___skill_map___contentful_id',
  project___tools___skill_map___id = 'project___tools___skill_map___id',
  project___tools___skill_map___node_locale = 'project___tools___skill_map___node_locale',
  project___tools___skill_map___sort = 'project___tools___skill_map___sort',
  project___tools___skill_map___name = 'project___tools___skill_map___name',
  project___tools___skill_map___expanded = 'project___tools___skill_map___expanded',
  project___tools___skill_map___skills = 'project___tools___skill_map___skills',
  project___tools___skill_map___spaceId = 'project___tools___skill_map___spaceId',
  project___tools___skill_map___createdAt = 'project___tools___skill_map___createdAt',
  project___tools___skill_map___updatedAt = 'project___tools___skill_map___updatedAt',
  project___tools___skill_map___children = 'project___tools___skill_map___children',
  project___tools___parent___id = 'project___tools___parent___id',
  project___tools___parent___children = 'project___tools___parent___children',
  project___tools___children = 'project___tools___children',
  project___tools___children___id = 'project___tools___children___id',
  project___tools___children___children = 'project___tools___children___children',
  project___tools___internal___content = 'project___tools___internal___content',
  project___tools___internal___contentDigest = 'project___tools___internal___contentDigest',
  project___tools___internal___description = 'project___tools___internal___description',
  project___tools___internal___fieldOwners = 'project___tools___internal___fieldOwners',
  project___tools___internal___ignoreType = 'project___tools___internal___ignoreType',
  project___tools___internal___mediaType = 'project___tools___internal___mediaType',
  project___tools___internal___owner = 'project___tools___internal___owner',
  project___tools___internal___type = 'project___tools___internal___type',
  project___icon___contentful_id = 'project___icon___contentful_id',
  project___icon___id = 'project___icon___id',
  project___icon___node_locale = 'project___icon___node_locale',
  project___icon___title = 'project___icon___title',
  project___icon___history = 'project___icon___history',
  project___icon___history___contentful_id = 'project___icon___history___contentful_id',
  project___icon___history___id = 'project___icon___history___id',
  project___icon___history___node_locale = 'project___icon___history___node_locale',
  project___icon___history___date = 'project___icon___history___date',
  project___icon___history___title = 'project___icon___history___title',
  project___icon___history___subheader = 'project___icon___history___subheader',
  project___icon___history___spaceId = 'project___icon___history___spaceId',
  project___icon___history___createdAt = 'project___icon___history___createdAt',
  project___icon___history___updatedAt = 'project___icon___history___updatedAt',
  project___icon___history___children = 'project___icon___history___children',
  project___icon___contents___id = 'project___icon___contents___id',
  project___icon___contents___children = 'project___icon___contents___children',
  project___icon___contents___contents = 'project___icon___contents___contents',
  project___icon___spaceId = 'project___icon___spaceId',
  project___icon___createdAt = 'project___icon___createdAt',
  project___icon___updatedAt = 'project___icon___updatedAt',
  project___icon___sys___type = 'project___icon___sys___type',
  project___icon___sys___revision = 'project___icon___sys___revision',
  project___icon___what_i_can_do = 'project___icon___what_i_can_do',
  project___icon___what_i_can_do___contentful_id = 'project___icon___what_i_can_do___contentful_id',
  project___icon___what_i_can_do___id = 'project___icon___what_i_can_do___id',
  project___icon___what_i_can_do___node_locale = 'project___icon___what_i_can_do___node_locale',
  project___icon___what_i_can_do___sort = 'project___icon___what_i_can_do___sort',
  project___icon___what_i_can_do___title = 'project___icon___what_i_can_do___title',
  project___icon___what_i_can_do___message = 'project___icon___what_i_can_do___message',
  project___icon___what_i_can_do___spaceId = 'project___icon___what_i_can_do___spaceId',
  project___icon___what_i_can_do___createdAt = 'project___icon___what_i_can_do___createdAt',
  project___icon___what_i_can_do___updatedAt = 'project___icon___what_i_can_do___updatedAt',
  project___icon___what_i_can_do___children = 'project___icon___what_i_can_do___children',
  project___icon___project = 'project___icon___project',
  project___icon___project___contentful_id = 'project___icon___project___contentful_id',
  project___icon___project___id = 'project___icon___project___id',
  project___icon___project___node_locale = 'project___icon___project___node_locale',
  project___icon___project___name = 'project___icon___project___name',
  project___icon___project___startDate = 'project___icon___project___startDate',
  project___icon___project___during = 'project___icon___project___during',
  project___icon___project___comment = 'project___icon___project___comment',
  project___icon___project___roles = 'project___icon___project___roles',
  project___icon___project___assigns = 'project___icon___project___assigns',
  project___icon___project___systems = 'project___icon___project___systems',
  project___icon___project___languages = 'project___icon___project___languages',
  project___icon___project___tools = 'project___icon___project___tools',
  project___icon___project___spaceId = 'project___icon___project___spaceId',
  project___icon___project___createdAt = 'project___icon___project___createdAt',
  project___icon___project___updatedAt = 'project___icon___project___updatedAt',
  project___icon___project___children = 'project___icon___project___children',
  project___icon___contact = 'project___icon___contact',
  project___icon___contact___contentful_id = 'project___icon___contact___contentful_id',
  project___icon___contact___id = 'project___icon___contact___id',
  project___icon___contact___node_locale = 'project___icon___contact___node_locale',
  project___icon___contact___sort = 'project___icon___contact___sort',
  project___icon___contact___title = 'project___icon___contact___title',
  project___icon___contact___subTitle = 'project___icon___contact___subTitle',
  project___icon___contact___href = 'project___icon___contact___href',
  project___icon___contact___spaceId = 'project___icon___contact___spaceId',
  project___icon___contact___createdAt = 'project___icon___contact___createdAt',
  project___icon___contact___updatedAt = 'project___icon___contact___updatedAt',
  project___icon___contact___children = 'project___icon___contact___children',
  project___icon___parent___id = 'project___icon___parent___id',
  project___icon___parent___children = 'project___icon___parent___children',
  project___icon___children = 'project___icon___children',
  project___icon___children___id = 'project___icon___children___id',
  project___icon___children___children = 'project___icon___children___children',
  project___icon___internal___content = 'project___icon___internal___content',
  project___icon___internal___contentDigest = 'project___icon___internal___contentDigest',
  project___icon___internal___description = 'project___icon___internal___description',
  project___icon___internal___fieldOwners = 'project___icon___internal___fieldOwners',
  project___icon___internal___ignoreType = 'project___icon___internal___ignoreType',
  project___icon___internal___mediaType = 'project___icon___internal___mediaType',
  project___icon___internal___owner = 'project___icon___internal___owner',
  project___icon___internal___type = 'project___icon___internal___type',
  project___icon___childContentfulIconContentsTextNode___id = 'project___icon___childContentfulIconContentsTextNode___id',
  project___icon___childContentfulIconContentsTextNode___children = 'project___icon___childContentfulIconContentsTextNode___children',
  project___icon___childContentfulIconContentsTextNode___contents = 'project___icon___childContentfulIconContentsTextNode___contents',
  project___spaceId = 'project___spaceId',
  project___createdAt = 'project___createdAt',
  project___updatedAt = 'project___updatedAt',
  project___sys___type = 'project___sys___type',
  project___sys___revision = 'project___sys___revision',
  project___parent___id = 'project___parent___id',
  project___parent___parent___id = 'project___parent___parent___id',
  project___parent___parent___children = 'project___parent___parent___children',
  project___parent___children = 'project___parent___children',
  project___parent___children___id = 'project___parent___children___id',
  project___parent___children___children = 'project___parent___children___children',
  project___parent___internal___content = 'project___parent___internal___content',
  project___parent___internal___contentDigest = 'project___parent___internal___contentDigest',
  project___parent___internal___description = 'project___parent___internal___description',
  project___parent___internal___fieldOwners = 'project___parent___internal___fieldOwners',
  project___parent___internal___ignoreType = 'project___parent___internal___ignoreType',
  project___parent___internal___mediaType = 'project___parent___internal___mediaType',
  project___parent___internal___owner = 'project___parent___internal___owner',
  project___parent___internal___type = 'project___parent___internal___type',
  project___children = 'project___children',
  project___children___id = 'project___children___id',
  project___children___parent___id = 'project___children___parent___id',
  project___children___parent___children = 'project___children___parent___children',
  project___children___children = 'project___children___children',
  project___children___children___id = 'project___children___children___id',
  project___children___children___children = 'project___children___children___children',
  project___children___internal___content = 'project___children___internal___content',
  project___children___internal___contentDigest = 'project___children___internal___contentDigest',
  project___children___internal___description = 'project___children___internal___description',
  project___children___internal___fieldOwners = 'project___children___internal___fieldOwners',
  project___children___internal___ignoreType = 'project___children___internal___ignoreType',
  project___children___internal___mediaType = 'project___children___internal___mediaType',
  project___children___internal___owner = 'project___children___internal___owner',
  project___children___internal___type = 'project___children___internal___type',
  project___internal___content = 'project___internal___content',
  project___internal___contentDigest = 'project___internal___contentDigest',
  project___internal___description = 'project___internal___description',
  project___internal___fieldOwners = 'project___internal___fieldOwners',
  project___internal___ignoreType = 'project___internal___ignoreType',
  project___internal___mediaType = 'project___internal___mediaType',
  project___internal___owner = 'project___internal___owner',
  project___internal___type = 'project___internal___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulAssigneFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  oss?: Maybe<ContentfulOssFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAssigneSysFilterInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssigneFilterListInput = {
  elemMatch?: Maybe<ContentfulAssigneFilterInput>;
};

export type ContentfulAssigneGroupConnection = {
  __typename?: 'ContentfulAssigneGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssigneEdge>;
  nodes: Array<ContentfulAssigne>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssigneSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssigneFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssigneSys = {
  __typename?: 'ContentfulAssigneSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAssigneSysContentType>;
};

export type ContentfulAssigneSysContentType = {
  __typename?: 'ContentfulAssigneSysContentType';
  sys?: Maybe<ContentfulAssigneSysContentTypeSys>;
};

export type ContentfulAssigneSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAssigneSysContentTypeSysFilterInput>;
};

export type ContentfulAssigneSysContentTypeSys = {
  __typename?: 'ContentfulAssigneSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAssigneSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssigneSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAssigneSysContentTypeFilterInput>;
};

export type ContentfulContact = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulContact';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  icon?: Maybe<ContentfulIcon>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulContactSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulContactCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulContactUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulContactConnection = {
  __typename?: 'ContentfulContactConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContactEdge>;
  nodes: Array<ContentfulContact>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContactGroupConnection>;
};


export type ContentfulContactConnectionDistinctArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContactFieldsEnum;
};

export type ContentfulContactEdge = {
  __typename?: 'ContentfulContactEdge';
  next?: Maybe<ContentfulContact>;
  node: ContentfulContact;
  previous?: Maybe<ContentfulContact>;
};

export enum ContentfulContactFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  sort = 'sort',
  title = 'title',
  subTitle = 'subTitle',
  href = 'href',
  icon___contentful_id = 'icon___contentful_id',
  icon___id = 'icon___id',
  icon___node_locale = 'icon___node_locale',
  icon___title = 'icon___title',
  icon___history = 'icon___history',
  icon___history___contentful_id = 'icon___history___contentful_id',
  icon___history___id = 'icon___history___id',
  icon___history___node_locale = 'icon___history___node_locale',
  icon___history___date = 'icon___history___date',
  icon___history___title = 'icon___history___title',
  icon___history___subheader = 'icon___history___subheader',
  icon___history___icon___contentful_id = 'icon___history___icon___contentful_id',
  icon___history___icon___id = 'icon___history___icon___id',
  icon___history___icon___node_locale = 'icon___history___icon___node_locale',
  icon___history___icon___title = 'icon___history___icon___title',
  icon___history___icon___history = 'icon___history___icon___history',
  icon___history___icon___spaceId = 'icon___history___icon___spaceId',
  icon___history___icon___createdAt = 'icon___history___icon___createdAt',
  icon___history___icon___updatedAt = 'icon___history___icon___updatedAt',
  icon___history___icon___what_i_can_do = 'icon___history___icon___what_i_can_do',
  icon___history___icon___project = 'icon___history___icon___project',
  icon___history___icon___contact = 'icon___history___icon___contact',
  icon___history___icon___children = 'icon___history___icon___children',
  icon___history___spaceId = 'icon___history___spaceId',
  icon___history___createdAt = 'icon___history___createdAt',
  icon___history___updatedAt = 'icon___history___updatedAt',
  icon___history___sys___type = 'icon___history___sys___type',
  icon___history___sys___revision = 'icon___history___sys___revision',
  icon___history___parent___id = 'icon___history___parent___id',
  icon___history___parent___children = 'icon___history___parent___children',
  icon___history___children = 'icon___history___children',
  icon___history___children___id = 'icon___history___children___id',
  icon___history___children___children = 'icon___history___children___children',
  icon___history___internal___content = 'icon___history___internal___content',
  icon___history___internal___contentDigest = 'icon___history___internal___contentDigest',
  icon___history___internal___description = 'icon___history___internal___description',
  icon___history___internal___fieldOwners = 'icon___history___internal___fieldOwners',
  icon___history___internal___ignoreType = 'icon___history___internal___ignoreType',
  icon___history___internal___mediaType = 'icon___history___internal___mediaType',
  icon___history___internal___owner = 'icon___history___internal___owner',
  icon___history___internal___type = 'icon___history___internal___type',
  icon___contents___id = 'icon___contents___id',
  icon___contents___parent___id = 'icon___contents___parent___id',
  icon___contents___parent___children = 'icon___contents___parent___children',
  icon___contents___children = 'icon___contents___children',
  icon___contents___children___id = 'icon___contents___children___id',
  icon___contents___children___children = 'icon___contents___children___children',
  icon___contents___internal___content = 'icon___contents___internal___content',
  icon___contents___internal___contentDigest = 'icon___contents___internal___contentDigest',
  icon___contents___internal___description = 'icon___contents___internal___description',
  icon___contents___internal___fieldOwners = 'icon___contents___internal___fieldOwners',
  icon___contents___internal___ignoreType = 'icon___contents___internal___ignoreType',
  icon___contents___internal___mediaType = 'icon___contents___internal___mediaType',
  icon___contents___internal___owner = 'icon___contents___internal___owner',
  icon___contents___internal___type = 'icon___contents___internal___type',
  icon___contents___contents = 'icon___contents___contents',
  icon___contents___sys___type = 'icon___contents___sys___type',
  icon___spaceId = 'icon___spaceId',
  icon___createdAt = 'icon___createdAt',
  icon___updatedAt = 'icon___updatedAt',
  icon___sys___type = 'icon___sys___type',
  icon___sys___revision = 'icon___sys___revision',
  icon___what_i_can_do = 'icon___what_i_can_do',
  icon___what_i_can_do___contentful_id = 'icon___what_i_can_do___contentful_id',
  icon___what_i_can_do___id = 'icon___what_i_can_do___id',
  icon___what_i_can_do___node_locale = 'icon___what_i_can_do___node_locale',
  icon___what_i_can_do___sort = 'icon___what_i_can_do___sort',
  icon___what_i_can_do___title = 'icon___what_i_can_do___title',
  icon___what_i_can_do___message = 'icon___what_i_can_do___message',
  icon___what_i_can_do___icon___contentful_id = 'icon___what_i_can_do___icon___contentful_id',
  icon___what_i_can_do___icon___id = 'icon___what_i_can_do___icon___id',
  icon___what_i_can_do___icon___node_locale = 'icon___what_i_can_do___icon___node_locale',
  icon___what_i_can_do___icon___title = 'icon___what_i_can_do___icon___title',
  icon___what_i_can_do___icon___history = 'icon___what_i_can_do___icon___history',
  icon___what_i_can_do___icon___spaceId = 'icon___what_i_can_do___icon___spaceId',
  icon___what_i_can_do___icon___createdAt = 'icon___what_i_can_do___icon___createdAt',
  icon___what_i_can_do___icon___updatedAt = 'icon___what_i_can_do___icon___updatedAt',
  icon___what_i_can_do___icon___what_i_can_do = 'icon___what_i_can_do___icon___what_i_can_do',
  icon___what_i_can_do___icon___project = 'icon___what_i_can_do___icon___project',
  icon___what_i_can_do___icon___contact = 'icon___what_i_can_do___icon___contact',
  icon___what_i_can_do___icon___children = 'icon___what_i_can_do___icon___children',
  icon___what_i_can_do___spaceId = 'icon___what_i_can_do___spaceId',
  icon___what_i_can_do___createdAt = 'icon___what_i_can_do___createdAt',
  icon___what_i_can_do___updatedAt = 'icon___what_i_can_do___updatedAt',
  icon___what_i_can_do___sys___type = 'icon___what_i_can_do___sys___type',
  icon___what_i_can_do___sys___revision = 'icon___what_i_can_do___sys___revision',
  icon___what_i_can_do___parent___id = 'icon___what_i_can_do___parent___id',
  icon___what_i_can_do___parent___children = 'icon___what_i_can_do___parent___children',
  icon___what_i_can_do___children = 'icon___what_i_can_do___children',
  icon___what_i_can_do___children___id = 'icon___what_i_can_do___children___id',
  icon___what_i_can_do___children___children = 'icon___what_i_can_do___children___children',
  icon___what_i_can_do___internal___content = 'icon___what_i_can_do___internal___content',
  icon___what_i_can_do___internal___contentDigest = 'icon___what_i_can_do___internal___contentDigest',
  icon___what_i_can_do___internal___description = 'icon___what_i_can_do___internal___description',
  icon___what_i_can_do___internal___fieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  icon___what_i_can_do___internal___ignoreType = 'icon___what_i_can_do___internal___ignoreType',
  icon___what_i_can_do___internal___mediaType = 'icon___what_i_can_do___internal___mediaType',
  icon___what_i_can_do___internal___owner = 'icon___what_i_can_do___internal___owner',
  icon___what_i_can_do___internal___type = 'icon___what_i_can_do___internal___type',
  icon___project = 'icon___project',
  icon___project___contentful_id = 'icon___project___contentful_id',
  icon___project___id = 'icon___project___id',
  icon___project___node_locale = 'icon___project___node_locale',
  icon___project___name = 'icon___project___name',
  icon___project___startDate = 'icon___project___startDate',
  icon___project___during = 'icon___project___during',
  icon___project___comment = 'icon___project___comment',
  icon___project___roles = 'icon___project___roles',
  icon___project___roles___contentful_id = 'icon___project___roles___contentful_id',
  icon___project___roles___id = 'icon___project___roles___id',
  icon___project___roles___node_locale = 'icon___project___roles___node_locale',
  icon___project___roles___name = 'icon___project___roles___name',
  icon___project___roles___project = 'icon___project___roles___project',
  icon___project___roles___oss = 'icon___project___roles___oss',
  icon___project___roles___spaceId = 'icon___project___roles___spaceId',
  icon___project___roles___createdAt = 'icon___project___roles___createdAt',
  icon___project___roles___updatedAt = 'icon___project___roles___updatedAt',
  icon___project___roles___children = 'icon___project___roles___children',
  icon___project___assigns = 'icon___project___assigns',
  icon___project___assigns___contentful_id = 'icon___project___assigns___contentful_id',
  icon___project___assigns___id = 'icon___project___assigns___id',
  icon___project___assigns___node_locale = 'icon___project___assigns___node_locale',
  icon___project___assigns___name = 'icon___project___assigns___name',
  icon___project___assigns___oss = 'icon___project___assigns___oss',
  icon___project___assigns___spaceId = 'icon___project___assigns___spaceId',
  icon___project___assigns___createdAt = 'icon___project___assigns___createdAt',
  icon___project___assigns___updatedAt = 'icon___project___assigns___updatedAt',
  icon___project___assigns___project = 'icon___project___assigns___project',
  icon___project___assigns___children = 'icon___project___assigns___children',
  icon___project___systems = 'icon___project___systems',
  icon___project___systems___contentful_id = 'icon___project___systems___contentful_id',
  icon___project___systems___id = 'icon___project___systems___id',
  icon___project___systems___node_locale = 'icon___project___systems___node_locale',
  icon___project___systems___name = 'icon___project___systems___name',
  icon___project___systems___level = 'icon___project___systems___level',
  icon___project___systems___project = 'icon___project___systems___project',
  icon___project___systems___spaceId = 'icon___project___systems___spaceId',
  icon___project___systems___createdAt = 'icon___project___systems___createdAt',
  icon___project___systems___updatedAt = 'icon___project___systems___updatedAt',
  icon___project___systems___oss = 'icon___project___systems___oss',
  icon___project___systems___skill_map = 'icon___project___systems___skill_map',
  icon___project___systems___children = 'icon___project___systems___children',
  icon___project___languages = 'icon___project___languages',
  icon___project___languages___contentful_id = 'icon___project___languages___contentful_id',
  icon___project___languages___id = 'icon___project___languages___id',
  icon___project___languages___node_locale = 'icon___project___languages___node_locale',
  icon___project___languages___name = 'icon___project___languages___name',
  icon___project___languages___level = 'icon___project___languages___level',
  icon___project___languages___project = 'icon___project___languages___project',
  icon___project___languages___spaceId = 'icon___project___languages___spaceId',
  icon___project___languages___createdAt = 'icon___project___languages___createdAt',
  icon___project___languages___updatedAt = 'icon___project___languages___updatedAt',
  icon___project___languages___oss = 'icon___project___languages___oss',
  icon___project___languages___skill_map = 'icon___project___languages___skill_map',
  icon___project___languages___children = 'icon___project___languages___children',
  icon___project___tools = 'icon___project___tools',
  icon___project___tools___contentful_id = 'icon___project___tools___contentful_id',
  icon___project___tools___id = 'icon___project___tools___id',
  icon___project___tools___node_locale = 'icon___project___tools___node_locale',
  icon___project___tools___name = 'icon___project___tools___name',
  icon___project___tools___level = 'icon___project___tools___level',
  icon___project___tools___project = 'icon___project___tools___project',
  icon___project___tools___spaceId = 'icon___project___tools___spaceId',
  icon___project___tools___createdAt = 'icon___project___tools___createdAt',
  icon___project___tools___updatedAt = 'icon___project___tools___updatedAt',
  icon___project___tools___oss = 'icon___project___tools___oss',
  icon___project___tools___skill_map = 'icon___project___tools___skill_map',
  icon___project___tools___children = 'icon___project___tools___children',
  icon___project___icon___contentful_id = 'icon___project___icon___contentful_id',
  icon___project___icon___id = 'icon___project___icon___id',
  icon___project___icon___node_locale = 'icon___project___icon___node_locale',
  icon___project___icon___title = 'icon___project___icon___title',
  icon___project___icon___history = 'icon___project___icon___history',
  icon___project___icon___spaceId = 'icon___project___icon___spaceId',
  icon___project___icon___createdAt = 'icon___project___icon___createdAt',
  icon___project___icon___updatedAt = 'icon___project___icon___updatedAt',
  icon___project___icon___what_i_can_do = 'icon___project___icon___what_i_can_do',
  icon___project___icon___project = 'icon___project___icon___project',
  icon___project___icon___contact = 'icon___project___icon___contact',
  icon___project___icon___children = 'icon___project___icon___children',
  icon___project___spaceId = 'icon___project___spaceId',
  icon___project___createdAt = 'icon___project___createdAt',
  icon___project___updatedAt = 'icon___project___updatedAt',
  icon___project___sys___type = 'icon___project___sys___type',
  icon___project___sys___revision = 'icon___project___sys___revision',
  icon___project___parent___id = 'icon___project___parent___id',
  icon___project___parent___children = 'icon___project___parent___children',
  icon___project___children = 'icon___project___children',
  icon___project___children___id = 'icon___project___children___id',
  icon___project___children___children = 'icon___project___children___children',
  icon___project___internal___content = 'icon___project___internal___content',
  icon___project___internal___contentDigest = 'icon___project___internal___contentDigest',
  icon___project___internal___description = 'icon___project___internal___description',
  icon___project___internal___fieldOwners = 'icon___project___internal___fieldOwners',
  icon___project___internal___ignoreType = 'icon___project___internal___ignoreType',
  icon___project___internal___mediaType = 'icon___project___internal___mediaType',
  icon___project___internal___owner = 'icon___project___internal___owner',
  icon___project___internal___type = 'icon___project___internal___type',
  icon___contact = 'icon___contact',
  icon___contact___contentful_id = 'icon___contact___contentful_id',
  icon___contact___id = 'icon___contact___id',
  icon___contact___node_locale = 'icon___contact___node_locale',
  icon___contact___sort = 'icon___contact___sort',
  icon___contact___title = 'icon___contact___title',
  icon___contact___subTitle = 'icon___contact___subTitle',
  icon___contact___href = 'icon___contact___href',
  icon___contact___icon___contentful_id = 'icon___contact___icon___contentful_id',
  icon___contact___icon___id = 'icon___contact___icon___id',
  icon___contact___icon___node_locale = 'icon___contact___icon___node_locale',
  icon___contact___icon___title = 'icon___contact___icon___title',
  icon___contact___icon___history = 'icon___contact___icon___history',
  icon___contact___icon___spaceId = 'icon___contact___icon___spaceId',
  icon___contact___icon___createdAt = 'icon___contact___icon___createdAt',
  icon___contact___icon___updatedAt = 'icon___contact___icon___updatedAt',
  icon___contact___icon___what_i_can_do = 'icon___contact___icon___what_i_can_do',
  icon___contact___icon___project = 'icon___contact___icon___project',
  icon___contact___icon___contact = 'icon___contact___icon___contact',
  icon___contact___icon___children = 'icon___contact___icon___children',
  icon___contact___spaceId = 'icon___contact___spaceId',
  icon___contact___createdAt = 'icon___contact___createdAt',
  icon___contact___updatedAt = 'icon___contact___updatedAt',
  icon___contact___sys___type = 'icon___contact___sys___type',
  icon___contact___sys___revision = 'icon___contact___sys___revision',
  icon___contact___parent___id = 'icon___contact___parent___id',
  icon___contact___parent___children = 'icon___contact___parent___children',
  icon___contact___children = 'icon___contact___children',
  icon___contact___children___id = 'icon___contact___children___id',
  icon___contact___children___children = 'icon___contact___children___children',
  icon___contact___internal___content = 'icon___contact___internal___content',
  icon___contact___internal___contentDigest = 'icon___contact___internal___contentDigest',
  icon___contact___internal___description = 'icon___contact___internal___description',
  icon___contact___internal___fieldOwners = 'icon___contact___internal___fieldOwners',
  icon___contact___internal___ignoreType = 'icon___contact___internal___ignoreType',
  icon___contact___internal___mediaType = 'icon___contact___internal___mediaType',
  icon___contact___internal___owner = 'icon___contact___internal___owner',
  icon___contact___internal___type = 'icon___contact___internal___type',
  icon___parent___id = 'icon___parent___id',
  icon___parent___parent___id = 'icon___parent___parent___id',
  icon___parent___parent___children = 'icon___parent___parent___children',
  icon___parent___children = 'icon___parent___children',
  icon___parent___children___id = 'icon___parent___children___id',
  icon___parent___children___children = 'icon___parent___children___children',
  icon___parent___internal___content = 'icon___parent___internal___content',
  icon___parent___internal___contentDigest = 'icon___parent___internal___contentDigest',
  icon___parent___internal___description = 'icon___parent___internal___description',
  icon___parent___internal___fieldOwners = 'icon___parent___internal___fieldOwners',
  icon___parent___internal___ignoreType = 'icon___parent___internal___ignoreType',
  icon___parent___internal___mediaType = 'icon___parent___internal___mediaType',
  icon___parent___internal___owner = 'icon___parent___internal___owner',
  icon___parent___internal___type = 'icon___parent___internal___type',
  icon___children = 'icon___children',
  icon___children___id = 'icon___children___id',
  icon___children___parent___id = 'icon___children___parent___id',
  icon___children___parent___children = 'icon___children___parent___children',
  icon___children___children = 'icon___children___children',
  icon___children___children___id = 'icon___children___children___id',
  icon___children___children___children = 'icon___children___children___children',
  icon___children___internal___content = 'icon___children___internal___content',
  icon___children___internal___contentDigest = 'icon___children___internal___contentDigest',
  icon___children___internal___description = 'icon___children___internal___description',
  icon___children___internal___fieldOwners = 'icon___children___internal___fieldOwners',
  icon___children___internal___ignoreType = 'icon___children___internal___ignoreType',
  icon___children___internal___mediaType = 'icon___children___internal___mediaType',
  icon___children___internal___owner = 'icon___children___internal___owner',
  icon___children___internal___type = 'icon___children___internal___type',
  icon___internal___content = 'icon___internal___content',
  icon___internal___contentDigest = 'icon___internal___contentDigest',
  icon___internal___description = 'icon___internal___description',
  icon___internal___fieldOwners = 'icon___internal___fieldOwners',
  icon___internal___ignoreType = 'icon___internal___ignoreType',
  icon___internal___mediaType = 'icon___internal___mediaType',
  icon___internal___owner = 'icon___internal___owner',
  icon___internal___type = 'icon___internal___type',
  icon___childContentfulIconContentsTextNode___id = 'icon___childContentfulIconContentsTextNode___id',
  icon___childContentfulIconContentsTextNode___parent___id = 'icon___childContentfulIconContentsTextNode___parent___id',
  icon___childContentfulIconContentsTextNode___parent___children = 'icon___childContentfulIconContentsTextNode___parent___children',
  icon___childContentfulIconContentsTextNode___children = 'icon___childContentfulIconContentsTextNode___children',
  icon___childContentfulIconContentsTextNode___children___id = 'icon___childContentfulIconContentsTextNode___children___id',
  icon___childContentfulIconContentsTextNode___children___children = 'icon___childContentfulIconContentsTextNode___children___children',
  icon___childContentfulIconContentsTextNode___internal___content = 'icon___childContentfulIconContentsTextNode___internal___content',
  icon___childContentfulIconContentsTextNode___internal___contentDigest = 'icon___childContentfulIconContentsTextNode___internal___contentDigest',
  icon___childContentfulIconContentsTextNode___internal___description = 'icon___childContentfulIconContentsTextNode___internal___description',
  icon___childContentfulIconContentsTextNode___internal___fieldOwners = 'icon___childContentfulIconContentsTextNode___internal___fieldOwners',
  icon___childContentfulIconContentsTextNode___internal___ignoreType = 'icon___childContentfulIconContentsTextNode___internal___ignoreType',
  icon___childContentfulIconContentsTextNode___internal___mediaType = 'icon___childContentfulIconContentsTextNode___internal___mediaType',
  icon___childContentfulIconContentsTextNode___internal___owner = 'icon___childContentfulIconContentsTextNode___internal___owner',
  icon___childContentfulIconContentsTextNode___internal___type = 'icon___childContentfulIconContentsTextNode___internal___type',
  icon___childContentfulIconContentsTextNode___contents = 'icon___childContentfulIconContentsTextNode___contents',
  icon___childContentfulIconContentsTextNode___sys___type = 'icon___childContentfulIconContentsTextNode___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulContactFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sort?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulContactSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulContactFilterListInput = {
  elemMatch?: Maybe<ContentfulContactFilterInput>;
};

export type ContentfulContactGroupConnection = {
  __typename?: 'ContentfulContactGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContactEdge>;
  nodes: Array<ContentfulContact>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContactSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContactFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContactSys = {
  __typename?: 'ContentfulContactSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulContactSysContentType>;
};

export type ContentfulContactSysContentType = {
  __typename?: 'ContentfulContactSysContentType';
  sys?: Maybe<ContentfulContactSysContentTypeSys>;
};

export type ContentfulContactSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulContactSysContentTypeSysFilterInput>;
};

export type ContentfulContactSysContentTypeSys = {
  __typename?: 'ContentfulContactSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulContactSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContactSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulContactSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge';
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
  sys___type = 'sys___type'
}

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  __typename?: 'ContentfulContentTypeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
};

export type ContentfulEntryConnection = {
  __typename?: 'ContentfulEntryConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  __typename?: 'ContentfulEntryEdge';
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale'
}

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntryGroupConnection = {
  __typename?: 'ContentfulEntryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHistory = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulHistory';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  subheader?: Maybe<Scalars['String']>;
  icon?: Maybe<ContentfulIcon>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulHistorySys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulHistoryDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHistoryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHistoryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulHistoryConnection = {
  __typename?: 'ContentfulHistoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHistoryEdge>;
  nodes: Array<ContentfulHistory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHistoryGroupConnection>;
};


export type ContentfulHistoryConnectionDistinctArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHistoryFieldsEnum;
};

export type ContentfulHistoryEdge = {
  __typename?: 'ContentfulHistoryEdge';
  next?: Maybe<ContentfulHistory>;
  node: ContentfulHistory;
  previous?: Maybe<ContentfulHistory>;
};

export enum ContentfulHistoryFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  date = 'date',
  title = 'title',
  subheader = 'subheader',
  icon___contentful_id = 'icon___contentful_id',
  icon___id = 'icon___id',
  icon___node_locale = 'icon___node_locale',
  icon___title = 'icon___title',
  icon___history = 'icon___history',
  icon___history___contentful_id = 'icon___history___contentful_id',
  icon___history___id = 'icon___history___id',
  icon___history___node_locale = 'icon___history___node_locale',
  icon___history___date = 'icon___history___date',
  icon___history___title = 'icon___history___title',
  icon___history___subheader = 'icon___history___subheader',
  icon___history___icon___contentful_id = 'icon___history___icon___contentful_id',
  icon___history___icon___id = 'icon___history___icon___id',
  icon___history___icon___node_locale = 'icon___history___icon___node_locale',
  icon___history___icon___title = 'icon___history___icon___title',
  icon___history___icon___history = 'icon___history___icon___history',
  icon___history___icon___spaceId = 'icon___history___icon___spaceId',
  icon___history___icon___createdAt = 'icon___history___icon___createdAt',
  icon___history___icon___updatedAt = 'icon___history___icon___updatedAt',
  icon___history___icon___what_i_can_do = 'icon___history___icon___what_i_can_do',
  icon___history___icon___project = 'icon___history___icon___project',
  icon___history___icon___contact = 'icon___history___icon___contact',
  icon___history___icon___children = 'icon___history___icon___children',
  icon___history___spaceId = 'icon___history___spaceId',
  icon___history___createdAt = 'icon___history___createdAt',
  icon___history___updatedAt = 'icon___history___updatedAt',
  icon___history___sys___type = 'icon___history___sys___type',
  icon___history___sys___revision = 'icon___history___sys___revision',
  icon___history___parent___id = 'icon___history___parent___id',
  icon___history___parent___children = 'icon___history___parent___children',
  icon___history___children = 'icon___history___children',
  icon___history___children___id = 'icon___history___children___id',
  icon___history___children___children = 'icon___history___children___children',
  icon___history___internal___content = 'icon___history___internal___content',
  icon___history___internal___contentDigest = 'icon___history___internal___contentDigest',
  icon___history___internal___description = 'icon___history___internal___description',
  icon___history___internal___fieldOwners = 'icon___history___internal___fieldOwners',
  icon___history___internal___ignoreType = 'icon___history___internal___ignoreType',
  icon___history___internal___mediaType = 'icon___history___internal___mediaType',
  icon___history___internal___owner = 'icon___history___internal___owner',
  icon___history___internal___type = 'icon___history___internal___type',
  icon___contents___id = 'icon___contents___id',
  icon___contents___parent___id = 'icon___contents___parent___id',
  icon___contents___parent___children = 'icon___contents___parent___children',
  icon___contents___children = 'icon___contents___children',
  icon___contents___children___id = 'icon___contents___children___id',
  icon___contents___children___children = 'icon___contents___children___children',
  icon___contents___internal___content = 'icon___contents___internal___content',
  icon___contents___internal___contentDigest = 'icon___contents___internal___contentDigest',
  icon___contents___internal___description = 'icon___contents___internal___description',
  icon___contents___internal___fieldOwners = 'icon___contents___internal___fieldOwners',
  icon___contents___internal___ignoreType = 'icon___contents___internal___ignoreType',
  icon___contents___internal___mediaType = 'icon___contents___internal___mediaType',
  icon___contents___internal___owner = 'icon___contents___internal___owner',
  icon___contents___internal___type = 'icon___contents___internal___type',
  icon___contents___contents = 'icon___contents___contents',
  icon___contents___sys___type = 'icon___contents___sys___type',
  icon___spaceId = 'icon___spaceId',
  icon___createdAt = 'icon___createdAt',
  icon___updatedAt = 'icon___updatedAt',
  icon___sys___type = 'icon___sys___type',
  icon___sys___revision = 'icon___sys___revision',
  icon___what_i_can_do = 'icon___what_i_can_do',
  icon___what_i_can_do___contentful_id = 'icon___what_i_can_do___contentful_id',
  icon___what_i_can_do___id = 'icon___what_i_can_do___id',
  icon___what_i_can_do___node_locale = 'icon___what_i_can_do___node_locale',
  icon___what_i_can_do___sort = 'icon___what_i_can_do___sort',
  icon___what_i_can_do___title = 'icon___what_i_can_do___title',
  icon___what_i_can_do___message = 'icon___what_i_can_do___message',
  icon___what_i_can_do___icon___contentful_id = 'icon___what_i_can_do___icon___contentful_id',
  icon___what_i_can_do___icon___id = 'icon___what_i_can_do___icon___id',
  icon___what_i_can_do___icon___node_locale = 'icon___what_i_can_do___icon___node_locale',
  icon___what_i_can_do___icon___title = 'icon___what_i_can_do___icon___title',
  icon___what_i_can_do___icon___history = 'icon___what_i_can_do___icon___history',
  icon___what_i_can_do___icon___spaceId = 'icon___what_i_can_do___icon___spaceId',
  icon___what_i_can_do___icon___createdAt = 'icon___what_i_can_do___icon___createdAt',
  icon___what_i_can_do___icon___updatedAt = 'icon___what_i_can_do___icon___updatedAt',
  icon___what_i_can_do___icon___what_i_can_do = 'icon___what_i_can_do___icon___what_i_can_do',
  icon___what_i_can_do___icon___project = 'icon___what_i_can_do___icon___project',
  icon___what_i_can_do___icon___contact = 'icon___what_i_can_do___icon___contact',
  icon___what_i_can_do___icon___children = 'icon___what_i_can_do___icon___children',
  icon___what_i_can_do___spaceId = 'icon___what_i_can_do___spaceId',
  icon___what_i_can_do___createdAt = 'icon___what_i_can_do___createdAt',
  icon___what_i_can_do___updatedAt = 'icon___what_i_can_do___updatedAt',
  icon___what_i_can_do___sys___type = 'icon___what_i_can_do___sys___type',
  icon___what_i_can_do___sys___revision = 'icon___what_i_can_do___sys___revision',
  icon___what_i_can_do___parent___id = 'icon___what_i_can_do___parent___id',
  icon___what_i_can_do___parent___children = 'icon___what_i_can_do___parent___children',
  icon___what_i_can_do___children = 'icon___what_i_can_do___children',
  icon___what_i_can_do___children___id = 'icon___what_i_can_do___children___id',
  icon___what_i_can_do___children___children = 'icon___what_i_can_do___children___children',
  icon___what_i_can_do___internal___content = 'icon___what_i_can_do___internal___content',
  icon___what_i_can_do___internal___contentDigest = 'icon___what_i_can_do___internal___contentDigest',
  icon___what_i_can_do___internal___description = 'icon___what_i_can_do___internal___description',
  icon___what_i_can_do___internal___fieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  icon___what_i_can_do___internal___ignoreType = 'icon___what_i_can_do___internal___ignoreType',
  icon___what_i_can_do___internal___mediaType = 'icon___what_i_can_do___internal___mediaType',
  icon___what_i_can_do___internal___owner = 'icon___what_i_can_do___internal___owner',
  icon___what_i_can_do___internal___type = 'icon___what_i_can_do___internal___type',
  icon___project = 'icon___project',
  icon___project___contentful_id = 'icon___project___contentful_id',
  icon___project___id = 'icon___project___id',
  icon___project___node_locale = 'icon___project___node_locale',
  icon___project___name = 'icon___project___name',
  icon___project___startDate = 'icon___project___startDate',
  icon___project___during = 'icon___project___during',
  icon___project___comment = 'icon___project___comment',
  icon___project___roles = 'icon___project___roles',
  icon___project___roles___contentful_id = 'icon___project___roles___contentful_id',
  icon___project___roles___id = 'icon___project___roles___id',
  icon___project___roles___node_locale = 'icon___project___roles___node_locale',
  icon___project___roles___name = 'icon___project___roles___name',
  icon___project___roles___project = 'icon___project___roles___project',
  icon___project___roles___oss = 'icon___project___roles___oss',
  icon___project___roles___spaceId = 'icon___project___roles___spaceId',
  icon___project___roles___createdAt = 'icon___project___roles___createdAt',
  icon___project___roles___updatedAt = 'icon___project___roles___updatedAt',
  icon___project___roles___children = 'icon___project___roles___children',
  icon___project___assigns = 'icon___project___assigns',
  icon___project___assigns___contentful_id = 'icon___project___assigns___contentful_id',
  icon___project___assigns___id = 'icon___project___assigns___id',
  icon___project___assigns___node_locale = 'icon___project___assigns___node_locale',
  icon___project___assigns___name = 'icon___project___assigns___name',
  icon___project___assigns___oss = 'icon___project___assigns___oss',
  icon___project___assigns___spaceId = 'icon___project___assigns___spaceId',
  icon___project___assigns___createdAt = 'icon___project___assigns___createdAt',
  icon___project___assigns___updatedAt = 'icon___project___assigns___updatedAt',
  icon___project___assigns___project = 'icon___project___assigns___project',
  icon___project___assigns___children = 'icon___project___assigns___children',
  icon___project___systems = 'icon___project___systems',
  icon___project___systems___contentful_id = 'icon___project___systems___contentful_id',
  icon___project___systems___id = 'icon___project___systems___id',
  icon___project___systems___node_locale = 'icon___project___systems___node_locale',
  icon___project___systems___name = 'icon___project___systems___name',
  icon___project___systems___level = 'icon___project___systems___level',
  icon___project___systems___project = 'icon___project___systems___project',
  icon___project___systems___spaceId = 'icon___project___systems___spaceId',
  icon___project___systems___createdAt = 'icon___project___systems___createdAt',
  icon___project___systems___updatedAt = 'icon___project___systems___updatedAt',
  icon___project___systems___oss = 'icon___project___systems___oss',
  icon___project___systems___skill_map = 'icon___project___systems___skill_map',
  icon___project___systems___children = 'icon___project___systems___children',
  icon___project___languages = 'icon___project___languages',
  icon___project___languages___contentful_id = 'icon___project___languages___contentful_id',
  icon___project___languages___id = 'icon___project___languages___id',
  icon___project___languages___node_locale = 'icon___project___languages___node_locale',
  icon___project___languages___name = 'icon___project___languages___name',
  icon___project___languages___level = 'icon___project___languages___level',
  icon___project___languages___project = 'icon___project___languages___project',
  icon___project___languages___spaceId = 'icon___project___languages___spaceId',
  icon___project___languages___createdAt = 'icon___project___languages___createdAt',
  icon___project___languages___updatedAt = 'icon___project___languages___updatedAt',
  icon___project___languages___oss = 'icon___project___languages___oss',
  icon___project___languages___skill_map = 'icon___project___languages___skill_map',
  icon___project___languages___children = 'icon___project___languages___children',
  icon___project___tools = 'icon___project___tools',
  icon___project___tools___contentful_id = 'icon___project___tools___contentful_id',
  icon___project___tools___id = 'icon___project___tools___id',
  icon___project___tools___node_locale = 'icon___project___tools___node_locale',
  icon___project___tools___name = 'icon___project___tools___name',
  icon___project___tools___level = 'icon___project___tools___level',
  icon___project___tools___project = 'icon___project___tools___project',
  icon___project___tools___spaceId = 'icon___project___tools___spaceId',
  icon___project___tools___createdAt = 'icon___project___tools___createdAt',
  icon___project___tools___updatedAt = 'icon___project___tools___updatedAt',
  icon___project___tools___oss = 'icon___project___tools___oss',
  icon___project___tools___skill_map = 'icon___project___tools___skill_map',
  icon___project___tools___children = 'icon___project___tools___children',
  icon___project___icon___contentful_id = 'icon___project___icon___contentful_id',
  icon___project___icon___id = 'icon___project___icon___id',
  icon___project___icon___node_locale = 'icon___project___icon___node_locale',
  icon___project___icon___title = 'icon___project___icon___title',
  icon___project___icon___history = 'icon___project___icon___history',
  icon___project___icon___spaceId = 'icon___project___icon___spaceId',
  icon___project___icon___createdAt = 'icon___project___icon___createdAt',
  icon___project___icon___updatedAt = 'icon___project___icon___updatedAt',
  icon___project___icon___what_i_can_do = 'icon___project___icon___what_i_can_do',
  icon___project___icon___project = 'icon___project___icon___project',
  icon___project___icon___contact = 'icon___project___icon___contact',
  icon___project___icon___children = 'icon___project___icon___children',
  icon___project___spaceId = 'icon___project___spaceId',
  icon___project___createdAt = 'icon___project___createdAt',
  icon___project___updatedAt = 'icon___project___updatedAt',
  icon___project___sys___type = 'icon___project___sys___type',
  icon___project___sys___revision = 'icon___project___sys___revision',
  icon___project___parent___id = 'icon___project___parent___id',
  icon___project___parent___children = 'icon___project___parent___children',
  icon___project___children = 'icon___project___children',
  icon___project___children___id = 'icon___project___children___id',
  icon___project___children___children = 'icon___project___children___children',
  icon___project___internal___content = 'icon___project___internal___content',
  icon___project___internal___contentDigest = 'icon___project___internal___contentDigest',
  icon___project___internal___description = 'icon___project___internal___description',
  icon___project___internal___fieldOwners = 'icon___project___internal___fieldOwners',
  icon___project___internal___ignoreType = 'icon___project___internal___ignoreType',
  icon___project___internal___mediaType = 'icon___project___internal___mediaType',
  icon___project___internal___owner = 'icon___project___internal___owner',
  icon___project___internal___type = 'icon___project___internal___type',
  icon___contact = 'icon___contact',
  icon___contact___contentful_id = 'icon___contact___contentful_id',
  icon___contact___id = 'icon___contact___id',
  icon___contact___node_locale = 'icon___contact___node_locale',
  icon___contact___sort = 'icon___contact___sort',
  icon___contact___title = 'icon___contact___title',
  icon___contact___subTitle = 'icon___contact___subTitle',
  icon___contact___href = 'icon___contact___href',
  icon___contact___icon___contentful_id = 'icon___contact___icon___contentful_id',
  icon___contact___icon___id = 'icon___contact___icon___id',
  icon___contact___icon___node_locale = 'icon___contact___icon___node_locale',
  icon___contact___icon___title = 'icon___contact___icon___title',
  icon___contact___icon___history = 'icon___contact___icon___history',
  icon___contact___icon___spaceId = 'icon___contact___icon___spaceId',
  icon___contact___icon___createdAt = 'icon___contact___icon___createdAt',
  icon___contact___icon___updatedAt = 'icon___contact___icon___updatedAt',
  icon___contact___icon___what_i_can_do = 'icon___contact___icon___what_i_can_do',
  icon___contact___icon___project = 'icon___contact___icon___project',
  icon___contact___icon___contact = 'icon___contact___icon___contact',
  icon___contact___icon___children = 'icon___contact___icon___children',
  icon___contact___spaceId = 'icon___contact___spaceId',
  icon___contact___createdAt = 'icon___contact___createdAt',
  icon___contact___updatedAt = 'icon___contact___updatedAt',
  icon___contact___sys___type = 'icon___contact___sys___type',
  icon___contact___sys___revision = 'icon___contact___sys___revision',
  icon___contact___parent___id = 'icon___contact___parent___id',
  icon___contact___parent___children = 'icon___contact___parent___children',
  icon___contact___children = 'icon___contact___children',
  icon___contact___children___id = 'icon___contact___children___id',
  icon___contact___children___children = 'icon___contact___children___children',
  icon___contact___internal___content = 'icon___contact___internal___content',
  icon___contact___internal___contentDigest = 'icon___contact___internal___contentDigest',
  icon___contact___internal___description = 'icon___contact___internal___description',
  icon___contact___internal___fieldOwners = 'icon___contact___internal___fieldOwners',
  icon___contact___internal___ignoreType = 'icon___contact___internal___ignoreType',
  icon___contact___internal___mediaType = 'icon___contact___internal___mediaType',
  icon___contact___internal___owner = 'icon___contact___internal___owner',
  icon___contact___internal___type = 'icon___contact___internal___type',
  icon___parent___id = 'icon___parent___id',
  icon___parent___parent___id = 'icon___parent___parent___id',
  icon___parent___parent___children = 'icon___parent___parent___children',
  icon___parent___children = 'icon___parent___children',
  icon___parent___children___id = 'icon___parent___children___id',
  icon___parent___children___children = 'icon___parent___children___children',
  icon___parent___internal___content = 'icon___parent___internal___content',
  icon___parent___internal___contentDigest = 'icon___parent___internal___contentDigest',
  icon___parent___internal___description = 'icon___parent___internal___description',
  icon___parent___internal___fieldOwners = 'icon___parent___internal___fieldOwners',
  icon___parent___internal___ignoreType = 'icon___parent___internal___ignoreType',
  icon___parent___internal___mediaType = 'icon___parent___internal___mediaType',
  icon___parent___internal___owner = 'icon___parent___internal___owner',
  icon___parent___internal___type = 'icon___parent___internal___type',
  icon___children = 'icon___children',
  icon___children___id = 'icon___children___id',
  icon___children___parent___id = 'icon___children___parent___id',
  icon___children___parent___children = 'icon___children___parent___children',
  icon___children___children = 'icon___children___children',
  icon___children___children___id = 'icon___children___children___id',
  icon___children___children___children = 'icon___children___children___children',
  icon___children___internal___content = 'icon___children___internal___content',
  icon___children___internal___contentDigest = 'icon___children___internal___contentDigest',
  icon___children___internal___description = 'icon___children___internal___description',
  icon___children___internal___fieldOwners = 'icon___children___internal___fieldOwners',
  icon___children___internal___ignoreType = 'icon___children___internal___ignoreType',
  icon___children___internal___mediaType = 'icon___children___internal___mediaType',
  icon___children___internal___owner = 'icon___children___internal___owner',
  icon___children___internal___type = 'icon___children___internal___type',
  icon___internal___content = 'icon___internal___content',
  icon___internal___contentDigest = 'icon___internal___contentDigest',
  icon___internal___description = 'icon___internal___description',
  icon___internal___fieldOwners = 'icon___internal___fieldOwners',
  icon___internal___ignoreType = 'icon___internal___ignoreType',
  icon___internal___mediaType = 'icon___internal___mediaType',
  icon___internal___owner = 'icon___internal___owner',
  icon___internal___type = 'icon___internal___type',
  icon___childContentfulIconContentsTextNode___id = 'icon___childContentfulIconContentsTextNode___id',
  icon___childContentfulIconContentsTextNode___parent___id = 'icon___childContentfulIconContentsTextNode___parent___id',
  icon___childContentfulIconContentsTextNode___parent___children = 'icon___childContentfulIconContentsTextNode___parent___children',
  icon___childContentfulIconContentsTextNode___children = 'icon___childContentfulIconContentsTextNode___children',
  icon___childContentfulIconContentsTextNode___children___id = 'icon___childContentfulIconContentsTextNode___children___id',
  icon___childContentfulIconContentsTextNode___children___children = 'icon___childContentfulIconContentsTextNode___children___children',
  icon___childContentfulIconContentsTextNode___internal___content = 'icon___childContentfulIconContentsTextNode___internal___content',
  icon___childContentfulIconContentsTextNode___internal___contentDigest = 'icon___childContentfulIconContentsTextNode___internal___contentDigest',
  icon___childContentfulIconContentsTextNode___internal___description = 'icon___childContentfulIconContentsTextNode___internal___description',
  icon___childContentfulIconContentsTextNode___internal___fieldOwners = 'icon___childContentfulIconContentsTextNode___internal___fieldOwners',
  icon___childContentfulIconContentsTextNode___internal___ignoreType = 'icon___childContentfulIconContentsTextNode___internal___ignoreType',
  icon___childContentfulIconContentsTextNode___internal___mediaType = 'icon___childContentfulIconContentsTextNode___internal___mediaType',
  icon___childContentfulIconContentsTextNode___internal___owner = 'icon___childContentfulIconContentsTextNode___internal___owner',
  icon___childContentfulIconContentsTextNode___internal___type = 'icon___childContentfulIconContentsTextNode___internal___type',
  icon___childContentfulIconContentsTextNode___contents = 'icon___childContentfulIconContentsTextNode___contents',
  icon___childContentfulIconContentsTextNode___sys___type = 'icon___childContentfulIconContentsTextNode___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulHistoryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subheader?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHistorySysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulHistoryFilterListInput = {
  elemMatch?: Maybe<ContentfulHistoryFilterInput>;
};

export type ContentfulHistoryGroupConnection = {
  __typename?: 'ContentfulHistoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHistoryEdge>;
  nodes: Array<ContentfulHistory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHistorySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHistoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHistorySys = {
  __typename?: 'ContentfulHistorySys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulHistorySysContentType>;
};

export type ContentfulHistorySysContentType = {
  __typename?: 'ContentfulHistorySysContentType';
  sys?: Maybe<ContentfulHistorySysContentTypeSys>;
};

export type ContentfulHistorySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHistorySysContentTypeSysFilterInput>;
};

export type ContentfulHistorySysContentTypeSys = {
  __typename?: 'ContentfulHistorySysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulHistorySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHistorySysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulHistorySysContentTypeFilterInput>;
};

export type ContentfulIcon = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulIcon';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  history?: Maybe<Array<Maybe<ContentfulHistory>>>;
  contents?: Maybe<ContentfulIconContentsTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulIconSys>;
  what_i_can_do?: Maybe<Array<Maybe<ContentfulWhatICanDo>>>;
  project?: Maybe<Array<Maybe<ContentfulProject>>>;
  contact?: Maybe<Array<Maybe<ContentfulContact>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childContentfulIconContentsTextNode?: Maybe<ContentfulIconContentsTextNode>;
};


export type ContentfulIconCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulIconUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulIconConnection = {
  __typename?: 'ContentfulIconConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulIconEdge>;
  nodes: Array<ContentfulIcon>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulIconGroupConnection>;
};


export type ContentfulIconConnectionDistinctArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulIconFieldsEnum;
};

export type ContentfulIconContentsTextNode = Node & {
  __typename?: 'contentfulIconContentsTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contents?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulIconContentsTextNodeSys>;
};

export type ContentfulIconContentsTextNodeConnection = {
  __typename?: 'contentfulIconContentsTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulIconContentsTextNodeEdge>;
  nodes: Array<ContentfulIconContentsTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulIconContentsTextNodeGroupConnection>;
};


export type ContentfulIconContentsTextNodeConnectionDistinctArgs = {
  field: ContentfulIconContentsTextNodeFieldsEnum;
};


export type ContentfulIconContentsTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulIconContentsTextNodeFieldsEnum;
};

export type ContentfulIconContentsTextNodeEdge = {
  __typename?: 'contentfulIconContentsTextNodeEdge';
  next?: Maybe<ContentfulIconContentsTextNode>;
  node: ContentfulIconContentsTextNode;
  previous?: Maybe<ContentfulIconContentsTextNode>;
};

export enum ContentfulIconContentsTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  contents = 'contents',
  sys___type = 'sys___type'
}

export type ContentfulIconContentsTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contents?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulIconContentsTextNodeSysFilterInput>;
};

export type ContentfulIconContentsTextNodeGroupConnection = {
  __typename?: 'contentfulIconContentsTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulIconContentsTextNodeEdge>;
  nodes: Array<ContentfulIconContentsTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulIconContentsTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulIconContentsTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulIconContentsTextNodeSys = {
  __typename?: 'contentfulIconContentsTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulIconContentsTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulIconEdge = {
  __typename?: 'ContentfulIconEdge';
  next?: Maybe<ContentfulIcon>;
  node: ContentfulIcon;
  previous?: Maybe<ContentfulIcon>;
};

export enum ContentfulIconFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  history = 'history',
  history___contentful_id = 'history___contentful_id',
  history___id = 'history___id',
  history___node_locale = 'history___node_locale',
  history___date = 'history___date',
  history___title = 'history___title',
  history___subheader = 'history___subheader',
  history___icon___contentful_id = 'history___icon___contentful_id',
  history___icon___id = 'history___icon___id',
  history___icon___node_locale = 'history___icon___node_locale',
  history___icon___title = 'history___icon___title',
  history___icon___history = 'history___icon___history',
  history___icon___history___contentful_id = 'history___icon___history___contentful_id',
  history___icon___history___id = 'history___icon___history___id',
  history___icon___history___node_locale = 'history___icon___history___node_locale',
  history___icon___history___date = 'history___icon___history___date',
  history___icon___history___title = 'history___icon___history___title',
  history___icon___history___subheader = 'history___icon___history___subheader',
  history___icon___history___spaceId = 'history___icon___history___spaceId',
  history___icon___history___createdAt = 'history___icon___history___createdAt',
  history___icon___history___updatedAt = 'history___icon___history___updatedAt',
  history___icon___history___children = 'history___icon___history___children',
  history___icon___contents___id = 'history___icon___contents___id',
  history___icon___contents___children = 'history___icon___contents___children',
  history___icon___contents___contents = 'history___icon___contents___contents',
  history___icon___spaceId = 'history___icon___spaceId',
  history___icon___createdAt = 'history___icon___createdAt',
  history___icon___updatedAt = 'history___icon___updatedAt',
  history___icon___sys___type = 'history___icon___sys___type',
  history___icon___sys___revision = 'history___icon___sys___revision',
  history___icon___what_i_can_do = 'history___icon___what_i_can_do',
  history___icon___what_i_can_do___contentful_id = 'history___icon___what_i_can_do___contentful_id',
  history___icon___what_i_can_do___id = 'history___icon___what_i_can_do___id',
  history___icon___what_i_can_do___node_locale = 'history___icon___what_i_can_do___node_locale',
  history___icon___what_i_can_do___sort = 'history___icon___what_i_can_do___sort',
  history___icon___what_i_can_do___title = 'history___icon___what_i_can_do___title',
  history___icon___what_i_can_do___message = 'history___icon___what_i_can_do___message',
  history___icon___what_i_can_do___spaceId = 'history___icon___what_i_can_do___spaceId',
  history___icon___what_i_can_do___createdAt = 'history___icon___what_i_can_do___createdAt',
  history___icon___what_i_can_do___updatedAt = 'history___icon___what_i_can_do___updatedAt',
  history___icon___what_i_can_do___children = 'history___icon___what_i_can_do___children',
  history___icon___project = 'history___icon___project',
  history___icon___project___contentful_id = 'history___icon___project___contentful_id',
  history___icon___project___id = 'history___icon___project___id',
  history___icon___project___node_locale = 'history___icon___project___node_locale',
  history___icon___project___name = 'history___icon___project___name',
  history___icon___project___startDate = 'history___icon___project___startDate',
  history___icon___project___during = 'history___icon___project___during',
  history___icon___project___comment = 'history___icon___project___comment',
  history___icon___project___roles = 'history___icon___project___roles',
  history___icon___project___assigns = 'history___icon___project___assigns',
  history___icon___project___systems = 'history___icon___project___systems',
  history___icon___project___languages = 'history___icon___project___languages',
  history___icon___project___tools = 'history___icon___project___tools',
  history___icon___project___spaceId = 'history___icon___project___spaceId',
  history___icon___project___createdAt = 'history___icon___project___createdAt',
  history___icon___project___updatedAt = 'history___icon___project___updatedAt',
  history___icon___project___children = 'history___icon___project___children',
  history___icon___contact = 'history___icon___contact',
  history___icon___contact___contentful_id = 'history___icon___contact___contentful_id',
  history___icon___contact___id = 'history___icon___contact___id',
  history___icon___contact___node_locale = 'history___icon___contact___node_locale',
  history___icon___contact___sort = 'history___icon___contact___sort',
  history___icon___contact___title = 'history___icon___contact___title',
  history___icon___contact___subTitle = 'history___icon___contact___subTitle',
  history___icon___contact___href = 'history___icon___contact___href',
  history___icon___contact___spaceId = 'history___icon___contact___spaceId',
  history___icon___contact___createdAt = 'history___icon___contact___createdAt',
  history___icon___contact___updatedAt = 'history___icon___contact___updatedAt',
  history___icon___contact___children = 'history___icon___contact___children',
  history___icon___parent___id = 'history___icon___parent___id',
  history___icon___parent___children = 'history___icon___parent___children',
  history___icon___children = 'history___icon___children',
  history___icon___children___id = 'history___icon___children___id',
  history___icon___children___children = 'history___icon___children___children',
  history___icon___internal___content = 'history___icon___internal___content',
  history___icon___internal___contentDigest = 'history___icon___internal___contentDigest',
  history___icon___internal___description = 'history___icon___internal___description',
  history___icon___internal___fieldOwners = 'history___icon___internal___fieldOwners',
  history___icon___internal___ignoreType = 'history___icon___internal___ignoreType',
  history___icon___internal___mediaType = 'history___icon___internal___mediaType',
  history___icon___internal___owner = 'history___icon___internal___owner',
  history___icon___internal___type = 'history___icon___internal___type',
  history___icon___childContentfulIconContentsTextNode___id = 'history___icon___childContentfulIconContentsTextNode___id',
  history___icon___childContentfulIconContentsTextNode___children = 'history___icon___childContentfulIconContentsTextNode___children',
  history___icon___childContentfulIconContentsTextNode___contents = 'history___icon___childContentfulIconContentsTextNode___contents',
  history___spaceId = 'history___spaceId',
  history___createdAt = 'history___createdAt',
  history___updatedAt = 'history___updatedAt',
  history___sys___type = 'history___sys___type',
  history___sys___revision = 'history___sys___revision',
  history___parent___id = 'history___parent___id',
  history___parent___parent___id = 'history___parent___parent___id',
  history___parent___parent___children = 'history___parent___parent___children',
  history___parent___children = 'history___parent___children',
  history___parent___children___id = 'history___parent___children___id',
  history___parent___children___children = 'history___parent___children___children',
  history___parent___internal___content = 'history___parent___internal___content',
  history___parent___internal___contentDigest = 'history___parent___internal___contentDigest',
  history___parent___internal___description = 'history___parent___internal___description',
  history___parent___internal___fieldOwners = 'history___parent___internal___fieldOwners',
  history___parent___internal___ignoreType = 'history___parent___internal___ignoreType',
  history___parent___internal___mediaType = 'history___parent___internal___mediaType',
  history___parent___internal___owner = 'history___parent___internal___owner',
  history___parent___internal___type = 'history___parent___internal___type',
  history___children = 'history___children',
  history___children___id = 'history___children___id',
  history___children___parent___id = 'history___children___parent___id',
  history___children___parent___children = 'history___children___parent___children',
  history___children___children = 'history___children___children',
  history___children___children___id = 'history___children___children___id',
  history___children___children___children = 'history___children___children___children',
  history___children___internal___content = 'history___children___internal___content',
  history___children___internal___contentDigest = 'history___children___internal___contentDigest',
  history___children___internal___description = 'history___children___internal___description',
  history___children___internal___fieldOwners = 'history___children___internal___fieldOwners',
  history___children___internal___ignoreType = 'history___children___internal___ignoreType',
  history___children___internal___mediaType = 'history___children___internal___mediaType',
  history___children___internal___owner = 'history___children___internal___owner',
  history___children___internal___type = 'history___children___internal___type',
  history___internal___content = 'history___internal___content',
  history___internal___contentDigest = 'history___internal___contentDigest',
  history___internal___description = 'history___internal___description',
  history___internal___fieldOwners = 'history___internal___fieldOwners',
  history___internal___ignoreType = 'history___internal___ignoreType',
  history___internal___mediaType = 'history___internal___mediaType',
  history___internal___owner = 'history___internal___owner',
  history___internal___type = 'history___internal___type',
  contents___id = 'contents___id',
  contents___parent___id = 'contents___parent___id',
  contents___parent___parent___id = 'contents___parent___parent___id',
  contents___parent___parent___children = 'contents___parent___parent___children',
  contents___parent___children = 'contents___parent___children',
  contents___parent___children___id = 'contents___parent___children___id',
  contents___parent___children___children = 'contents___parent___children___children',
  contents___parent___internal___content = 'contents___parent___internal___content',
  contents___parent___internal___contentDigest = 'contents___parent___internal___contentDigest',
  contents___parent___internal___description = 'contents___parent___internal___description',
  contents___parent___internal___fieldOwners = 'contents___parent___internal___fieldOwners',
  contents___parent___internal___ignoreType = 'contents___parent___internal___ignoreType',
  contents___parent___internal___mediaType = 'contents___parent___internal___mediaType',
  contents___parent___internal___owner = 'contents___parent___internal___owner',
  contents___parent___internal___type = 'contents___parent___internal___type',
  contents___children = 'contents___children',
  contents___children___id = 'contents___children___id',
  contents___children___parent___id = 'contents___children___parent___id',
  contents___children___parent___children = 'contents___children___parent___children',
  contents___children___children = 'contents___children___children',
  contents___children___children___id = 'contents___children___children___id',
  contents___children___children___children = 'contents___children___children___children',
  contents___children___internal___content = 'contents___children___internal___content',
  contents___children___internal___contentDigest = 'contents___children___internal___contentDigest',
  contents___children___internal___description = 'contents___children___internal___description',
  contents___children___internal___fieldOwners = 'contents___children___internal___fieldOwners',
  contents___children___internal___ignoreType = 'contents___children___internal___ignoreType',
  contents___children___internal___mediaType = 'contents___children___internal___mediaType',
  contents___children___internal___owner = 'contents___children___internal___owner',
  contents___children___internal___type = 'contents___children___internal___type',
  contents___internal___content = 'contents___internal___content',
  contents___internal___contentDigest = 'contents___internal___contentDigest',
  contents___internal___description = 'contents___internal___description',
  contents___internal___fieldOwners = 'contents___internal___fieldOwners',
  contents___internal___ignoreType = 'contents___internal___ignoreType',
  contents___internal___mediaType = 'contents___internal___mediaType',
  contents___internal___owner = 'contents___internal___owner',
  contents___internal___type = 'contents___internal___type',
  contents___contents = 'contents___contents',
  contents___sys___type = 'contents___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  what_i_can_do = 'what_i_can_do',
  what_i_can_do___contentful_id = 'what_i_can_do___contentful_id',
  what_i_can_do___id = 'what_i_can_do___id',
  what_i_can_do___node_locale = 'what_i_can_do___node_locale',
  what_i_can_do___sort = 'what_i_can_do___sort',
  what_i_can_do___title = 'what_i_can_do___title',
  what_i_can_do___message = 'what_i_can_do___message',
  what_i_can_do___icon___contentful_id = 'what_i_can_do___icon___contentful_id',
  what_i_can_do___icon___id = 'what_i_can_do___icon___id',
  what_i_can_do___icon___node_locale = 'what_i_can_do___icon___node_locale',
  what_i_can_do___icon___title = 'what_i_can_do___icon___title',
  what_i_can_do___icon___history = 'what_i_can_do___icon___history',
  what_i_can_do___icon___history___contentful_id = 'what_i_can_do___icon___history___contentful_id',
  what_i_can_do___icon___history___id = 'what_i_can_do___icon___history___id',
  what_i_can_do___icon___history___node_locale = 'what_i_can_do___icon___history___node_locale',
  what_i_can_do___icon___history___date = 'what_i_can_do___icon___history___date',
  what_i_can_do___icon___history___title = 'what_i_can_do___icon___history___title',
  what_i_can_do___icon___history___subheader = 'what_i_can_do___icon___history___subheader',
  what_i_can_do___icon___history___spaceId = 'what_i_can_do___icon___history___spaceId',
  what_i_can_do___icon___history___createdAt = 'what_i_can_do___icon___history___createdAt',
  what_i_can_do___icon___history___updatedAt = 'what_i_can_do___icon___history___updatedAt',
  what_i_can_do___icon___history___children = 'what_i_can_do___icon___history___children',
  what_i_can_do___icon___contents___id = 'what_i_can_do___icon___contents___id',
  what_i_can_do___icon___contents___children = 'what_i_can_do___icon___contents___children',
  what_i_can_do___icon___contents___contents = 'what_i_can_do___icon___contents___contents',
  what_i_can_do___icon___spaceId = 'what_i_can_do___icon___spaceId',
  what_i_can_do___icon___createdAt = 'what_i_can_do___icon___createdAt',
  what_i_can_do___icon___updatedAt = 'what_i_can_do___icon___updatedAt',
  what_i_can_do___icon___sys___type = 'what_i_can_do___icon___sys___type',
  what_i_can_do___icon___sys___revision = 'what_i_can_do___icon___sys___revision',
  what_i_can_do___icon___what_i_can_do = 'what_i_can_do___icon___what_i_can_do',
  what_i_can_do___icon___what_i_can_do___contentful_id = 'what_i_can_do___icon___what_i_can_do___contentful_id',
  what_i_can_do___icon___what_i_can_do___id = 'what_i_can_do___icon___what_i_can_do___id',
  what_i_can_do___icon___what_i_can_do___node_locale = 'what_i_can_do___icon___what_i_can_do___node_locale',
  what_i_can_do___icon___what_i_can_do___sort = 'what_i_can_do___icon___what_i_can_do___sort',
  what_i_can_do___icon___what_i_can_do___title = 'what_i_can_do___icon___what_i_can_do___title',
  what_i_can_do___icon___what_i_can_do___message = 'what_i_can_do___icon___what_i_can_do___message',
  what_i_can_do___icon___what_i_can_do___spaceId = 'what_i_can_do___icon___what_i_can_do___spaceId',
  what_i_can_do___icon___what_i_can_do___createdAt = 'what_i_can_do___icon___what_i_can_do___createdAt',
  what_i_can_do___icon___what_i_can_do___updatedAt = 'what_i_can_do___icon___what_i_can_do___updatedAt',
  what_i_can_do___icon___what_i_can_do___children = 'what_i_can_do___icon___what_i_can_do___children',
  what_i_can_do___icon___project = 'what_i_can_do___icon___project',
  what_i_can_do___icon___project___contentful_id = 'what_i_can_do___icon___project___contentful_id',
  what_i_can_do___icon___project___id = 'what_i_can_do___icon___project___id',
  what_i_can_do___icon___project___node_locale = 'what_i_can_do___icon___project___node_locale',
  what_i_can_do___icon___project___name = 'what_i_can_do___icon___project___name',
  what_i_can_do___icon___project___startDate = 'what_i_can_do___icon___project___startDate',
  what_i_can_do___icon___project___during = 'what_i_can_do___icon___project___during',
  what_i_can_do___icon___project___comment = 'what_i_can_do___icon___project___comment',
  what_i_can_do___icon___project___roles = 'what_i_can_do___icon___project___roles',
  what_i_can_do___icon___project___assigns = 'what_i_can_do___icon___project___assigns',
  what_i_can_do___icon___project___systems = 'what_i_can_do___icon___project___systems',
  what_i_can_do___icon___project___languages = 'what_i_can_do___icon___project___languages',
  what_i_can_do___icon___project___tools = 'what_i_can_do___icon___project___tools',
  what_i_can_do___icon___project___spaceId = 'what_i_can_do___icon___project___spaceId',
  what_i_can_do___icon___project___createdAt = 'what_i_can_do___icon___project___createdAt',
  what_i_can_do___icon___project___updatedAt = 'what_i_can_do___icon___project___updatedAt',
  what_i_can_do___icon___project___children = 'what_i_can_do___icon___project___children',
  what_i_can_do___icon___contact = 'what_i_can_do___icon___contact',
  what_i_can_do___icon___contact___contentful_id = 'what_i_can_do___icon___contact___contentful_id',
  what_i_can_do___icon___contact___id = 'what_i_can_do___icon___contact___id',
  what_i_can_do___icon___contact___node_locale = 'what_i_can_do___icon___contact___node_locale',
  what_i_can_do___icon___contact___sort = 'what_i_can_do___icon___contact___sort',
  what_i_can_do___icon___contact___title = 'what_i_can_do___icon___contact___title',
  what_i_can_do___icon___contact___subTitle = 'what_i_can_do___icon___contact___subTitle',
  what_i_can_do___icon___contact___href = 'what_i_can_do___icon___contact___href',
  what_i_can_do___icon___contact___spaceId = 'what_i_can_do___icon___contact___spaceId',
  what_i_can_do___icon___contact___createdAt = 'what_i_can_do___icon___contact___createdAt',
  what_i_can_do___icon___contact___updatedAt = 'what_i_can_do___icon___contact___updatedAt',
  what_i_can_do___icon___contact___children = 'what_i_can_do___icon___contact___children',
  what_i_can_do___icon___parent___id = 'what_i_can_do___icon___parent___id',
  what_i_can_do___icon___parent___children = 'what_i_can_do___icon___parent___children',
  what_i_can_do___icon___children = 'what_i_can_do___icon___children',
  what_i_can_do___icon___children___id = 'what_i_can_do___icon___children___id',
  what_i_can_do___icon___children___children = 'what_i_can_do___icon___children___children',
  what_i_can_do___icon___internal___content = 'what_i_can_do___icon___internal___content',
  what_i_can_do___icon___internal___contentDigest = 'what_i_can_do___icon___internal___contentDigest',
  what_i_can_do___icon___internal___description = 'what_i_can_do___icon___internal___description',
  what_i_can_do___icon___internal___fieldOwners = 'what_i_can_do___icon___internal___fieldOwners',
  what_i_can_do___icon___internal___ignoreType = 'what_i_can_do___icon___internal___ignoreType',
  what_i_can_do___icon___internal___mediaType = 'what_i_can_do___icon___internal___mediaType',
  what_i_can_do___icon___internal___owner = 'what_i_can_do___icon___internal___owner',
  what_i_can_do___icon___internal___type = 'what_i_can_do___icon___internal___type',
  what_i_can_do___icon___childContentfulIconContentsTextNode___id = 'what_i_can_do___icon___childContentfulIconContentsTextNode___id',
  what_i_can_do___icon___childContentfulIconContentsTextNode___children = 'what_i_can_do___icon___childContentfulIconContentsTextNode___children',
  what_i_can_do___icon___childContentfulIconContentsTextNode___contents = 'what_i_can_do___icon___childContentfulIconContentsTextNode___contents',
  what_i_can_do___spaceId = 'what_i_can_do___spaceId',
  what_i_can_do___createdAt = 'what_i_can_do___createdAt',
  what_i_can_do___updatedAt = 'what_i_can_do___updatedAt',
  what_i_can_do___sys___type = 'what_i_can_do___sys___type',
  what_i_can_do___sys___revision = 'what_i_can_do___sys___revision',
  what_i_can_do___parent___id = 'what_i_can_do___parent___id',
  what_i_can_do___parent___parent___id = 'what_i_can_do___parent___parent___id',
  what_i_can_do___parent___parent___children = 'what_i_can_do___parent___parent___children',
  what_i_can_do___parent___children = 'what_i_can_do___parent___children',
  what_i_can_do___parent___children___id = 'what_i_can_do___parent___children___id',
  what_i_can_do___parent___children___children = 'what_i_can_do___parent___children___children',
  what_i_can_do___parent___internal___content = 'what_i_can_do___parent___internal___content',
  what_i_can_do___parent___internal___contentDigest = 'what_i_can_do___parent___internal___contentDigest',
  what_i_can_do___parent___internal___description = 'what_i_can_do___parent___internal___description',
  what_i_can_do___parent___internal___fieldOwners = 'what_i_can_do___parent___internal___fieldOwners',
  what_i_can_do___parent___internal___ignoreType = 'what_i_can_do___parent___internal___ignoreType',
  what_i_can_do___parent___internal___mediaType = 'what_i_can_do___parent___internal___mediaType',
  what_i_can_do___parent___internal___owner = 'what_i_can_do___parent___internal___owner',
  what_i_can_do___parent___internal___type = 'what_i_can_do___parent___internal___type',
  what_i_can_do___children = 'what_i_can_do___children',
  what_i_can_do___children___id = 'what_i_can_do___children___id',
  what_i_can_do___children___parent___id = 'what_i_can_do___children___parent___id',
  what_i_can_do___children___parent___children = 'what_i_can_do___children___parent___children',
  what_i_can_do___children___children = 'what_i_can_do___children___children',
  what_i_can_do___children___children___id = 'what_i_can_do___children___children___id',
  what_i_can_do___children___children___children = 'what_i_can_do___children___children___children',
  what_i_can_do___children___internal___content = 'what_i_can_do___children___internal___content',
  what_i_can_do___children___internal___contentDigest = 'what_i_can_do___children___internal___contentDigest',
  what_i_can_do___children___internal___description = 'what_i_can_do___children___internal___description',
  what_i_can_do___children___internal___fieldOwners = 'what_i_can_do___children___internal___fieldOwners',
  what_i_can_do___children___internal___ignoreType = 'what_i_can_do___children___internal___ignoreType',
  what_i_can_do___children___internal___mediaType = 'what_i_can_do___children___internal___mediaType',
  what_i_can_do___children___internal___owner = 'what_i_can_do___children___internal___owner',
  what_i_can_do___children___internal___type = 'what_i_can_do___children___internal___type',
  what_i_can_do___internal___content = 'what_i_can_do___internal___content',
  what_i_can_do___internal___contentDigest = 'what_i_can_do___internal___contentDigest',
  what_i_can_do___internal___description = 'what_i_can_do___internal___description',
  what_i_can_do___internal___fieldOwners = 'what_i_can_do___internal___fieldOwners',
  what_i_can_do___internal___ignoreType = 'what_i_can_do___internal___ignoreType',
  what_i_can_do___internal___mediaType = 'what_i_can_do___internal___mediaType',
  what_i_can_do___internal___owner = 'what_i_can_do___internal___owner',
  what_i_can_do___internal___type = 'what_i_can_do___internal___type',
  project = 'project',
  project___contentful_id = 'project___contentful_id',
  project___id = 'project___id',
  project___node_locale = 'project___node_locale',
  project___name = 'project___name',
  project___startDate = 'project___startDate',
  project___during = 'project___during',
  project___comment = 'project___comment',
  project___roles = 'project___roles',
  project___roles___contentful_id = 'project___roles___contentful_id',
  project___roles___id = 'project___roles___id',
  project___roles___node_locale = 'project___roles___node_locale',
  project___roles___name = 'project___roles___name',
  project___roles___project = 'project___roles___project',
  project___roles___project___contentful_id = 'project___roles___project___contentful_id',
  project___roles___project___id = 'project___roles___project___id',
  project___roles___project___node_locale = 'project___roles___project___node_locale',
  project___roles___project___name = 'project___roles___project___name',
  project___roles___project___startDate = 'project___roles___project___startDate',
  project___roles___project___during = 'project___roles___project___during',
  project___roles___project___comment = 'project___roles___project___comment',
  project___roles___project___roles = 'project___roles___project___roles',
  project___roles___project___assigns = 'project___roles___project___assigns',
  project___roles___project___systems = 'project___roles___project___systems',
  project___roles___project___languages = 'project___roles___project___languages',
  project___roles___project___tools = 'project___roles___project___tools',
  project___roles___project___spaceId = 'project___roles___project___spaceId',
  project___roles___project___createdAt = 'project___roles___project___createdAt',
  project___roles___project___updatedAt = 'project___roles___project___updatedAt',
  project___roles___project___children = 'project___roles___project___children',
  project___roles___oss = 'project___roles___oss',
  project___roles___oss___contentful_id = 'project___roles___oss___contentful_id',
  project___roles___oss___id = 'project___roles___oss___id',
  project___roles___oss___node_locale = 'project___roles___oss___node_locale',
  project___roles___oss___name = 'project___roles___oss___name',
  project___roles___oss___slug = 'project___roles___oss___slug',
  project___roles___oss___startDate = 'project___roles___oss___startDate',
  project___roles___oss___during = 'project___roles___oss___during',
  project___roles___oss___comment = 'project___roles___oss___comment',
  project___roles___oss___siteUrl = 'project___roles___oss___siteUrl',
  project___roles___oss___sourceUrl = 'project___roles___oss___sourceUrl',
  project___roles___oss___roles = 'project___roles___oss___roles',
  project___roles___oss___assigns = 'project___roles___oss___assigns',
  project___roles___oss___systems = 'project___roles___oss___systems',
  project___roles___oss___languages = 'project___roles___oss___languages',
  project___roles___oss___tools = 'project___roles___oss___tools',
  project___roles___oss___spaceId = 'project___roles___oss___spaceId',
  project___roles___oss___createdAt = 'project___roles___oss___createdAt',
  project___roles___oss___updatedAt = 'project___roles___oss___updatedAt',
  project___roles___oss___children = 'project___roles___oss___children',
  project___roles___spaceId = 'project___roles___spaceId',
  project___roles___createdAt = 'project___roles___createdAt',
  project___roles___updatedAt = 'project___roles___updatedAt',
  project___roles___sys___type = 'project___roles___sys___type',
  project___roles___sys___revision = 'project___roles___sys___revision',
  project___roles___parent___id = 'project___roles___parent___id',
  project___roles___parent___children = 'project___roles___parent___children',
  project___roles___children = 'project___roles___children',
  project___roles___children___id = 'project___roles___children___id',
  project___roles___children___children = 'project___roles___children___children',
  project___roles___internal___content = 'project___roles___internal___content',
  project___roles___internal___contentDigest = 'project___roles___internal___contentDigest',
  project___roles___internal___description = 'project___roles___internal___description',
  project___roles___internal___fieldOwners = 'project___roles___internal___fieldOwners',
  project___roles___internal___ignoreType = 'project___roles___internal___ignoreType',
  project___roles___internal___mediaType = 'project___roles___internal___mediaType',
  project___roles___internal___owner = 'project___roles___internal___owner',
  project___roles___internal___type = 'project___roles___internal___type',
  project___assigns = 'project___assigns',
  project___assigns___contentful_id = 'project___assigns___contentful_id',
  project___assigns___id = 'project___assigns___id',
  project___assigns___node_locale = 'project___assigns___node_locale',
  project___assigns___name = 'project___assigns___name',
  project___assigns___oss = 'project___assigns___oss',
  project___assigns___oss___contentful_id = 'project___assigns___oss___contentful_id',
  project___assigns___oss___id = 'project___assigns___oss___id',
  project___assigns___oss___node_locale = 'project___assigns___oss___node_locale',
  project___assigns___oss___name = 'project___assigns___oss___name',
  project___assigns___oss___slug = 'project___assigns___oss___slug',
  project___assigns___oss___startDate = 'project___assigns___oss___startDate',
  project___assigns___oss___during = 'project___assigns___oss___during',
  project___assigns___oss___comment = 'project___assigns___oss___comment',
  project___assigns___oss___siteUrl = 'project___assigns___oss___siteUrl',
  project___assigns___oss___sourceUrl = 'project___assigns___oss___sourceUrl',
  project___assigns___oss___roles = 'project___assigns___oss___roles',
  project___assigns___oss___assigns = 'project___assigns___oss___assigns',
  project___assigns___oss___systems = 'project___assigns___oss___systems',
  project___assigns___oss___languages = 'project___assigns___oss___languages',
  project___assigns___oss___tools = 'project___assigns___oss___tools',
  project___assigns___oss___spaceId = 'project___assigns___oss___spaceId',
  project___assigns___oss___createdAt = 'project___assigns___oss___createdAt',
  project___assigns___oss___updatedAt = 'project___assigns___oss___updatedAt',
  project___assigns___oss___children = 'project___assigns___oss___children',
  project___assigns___spaceId = 'project___assigns___spaceId',
  project___assigns___createdAt = 'project___assigns___createdAt',
  project___assigns___updatedAt = 'project___assigns___updatedAt',
  project___assigns___sys___type = 'project___assigns___sys___type',
  project___assigns___sys___revision = 'project___assigns___sys___revision',
  project___assigns___project = 'project___assigns___project',
  project___assigns___project___contentful_id = 'project___assigns___project___contentful_id',
  project___assigns___project___id = 'project___assigns___project___id',
  project___assigns___project___node_locale = 'project___assigns___project___node_locale',
  project___assigns___project___name = 'project___assigns___project___name',
  project___assigns___project___startDate = 'project___assigns___project___startDate',
  project___assigns___project___during = 'project___assigns___project___during',
  project___assigns___project___comment = 'project___assigns___project___comment',
  project___assigns___project___roles = 'project___assigns___project___roles',
  project___assigns___project___assigns = 'project___assigns___project___assigns',
  project___assigns___project___systems = 'project___assigns___project___systems',
  project___assigns___project___languages = 'project___assigns___project___languages',
  project___assigns___project___tools = 'project___assigns___project___tools',
  project___assigns___project___spaceId = 'project___assigns___project___spaceId',
  project___assigns___project___createdAt = 'project___assigns___project___createdAt',
  project___assigns___project___updatedAt = 'project___assigns___project___updatedAt',
  project___assigns___project___children = 'project___assigns___project___children',
  project___assigns___parent___id = 'project___assigns___parent___id',
  project___assigns___parent___children = 'project___assigns___parent___children',
  project___assigns___children = 'project___assigns___children',
  project___assigns___children___id = 'project___assigns___children___id',
  project___assigns___children___children = 'project___assigns___children___children',
  project___assigns___internal___content = 'project___assigns___internal___content',
  project___assigns___internal___contentDigest = 'project___assigns___internal___contentDigest',
  project___assigns___internal___description = 'project___assigns___internal___description',
  project___assigns___internal___fieldOwners = 'project___assigns___internal___fieldOwners',
  project___assigns___internal___ignoreType = 'project___assigns___internal___ignoreType',
  project___assigns___internal___mediaType = 'project___assigns___internal___mediaType',
  project___assigns___internal___owner = 'project___assigns___internal___owner',
  project___assigns___internal___type = 'project___assigns___internal___type',
  project___systems = 'project___systems',
  project___systems___contentful_id = 'project___systems___contentful_id',
  project___systems___id = 'project___systems___id',
  project___systems___node_locale = 'project___systems___node_locale',
  project___systems___name = 'project___systems___name',
  project___systems___level = 'project___systems___level',
  project___systems___project = 'project___systems___project',
  project___systems___project___contentful_id = 'project___systems___project___contentful_id',
  project___systems___project___id = 'project___systems___project___id',
  project___systems___project___node_locale = 'project___systems___project___node_locale',
  project___systems___project___name = 'project___systems___project___name',
  project___systems___project___startDate = 'project___systems___project___startDate',
  project___systems___project___during = 'project___systems___project___during',
  project___systems___project___comment = 'project___systems___project___comment',
  project___systems___project___roles = 'project___systems___project___roles',
  project___systems___project___assigns = 'project___systems___project___assigns',
  project___systems___project___systems = 'project___systems___project___systems',
  project___systems___project___languages = 'project___systems___project___languages',
  project___systems___project___tools = 'project___systems___project___tools',
  project___systems___project___spaceId = 'project___systems___project___spaceId',
  project___systems___project___createdAt = 'project___systems___project___createdAt',
  project___systems___project___updatedAt = 'project___systems___project___updatedAt',
  project___systems___project___children = 'project___systems___project___children',
  project___systems___spaceId = 'project___systems___spaceId',
  project___systems___createdAt = 'project___systems___createdAt',
  project___systems___updatedAt = 'project___systems___updatedAt',
  project___systems___sys___type = 'project___systems___sys___type',
  project___systems___sys___revision = 'project___systems___sys___revision',
  project___systems___oss = 'project___systems___oss',
  project___systems___oss___contentful_id = 'project___systems___oss___contentful_id',
  project___systems___oss___id = 'project___systems___oss___id',
  project___systems___oss___node_locale = 'project___systems___oss___node_locale',
  project___systems___oss___name = 'project___systems___oss___name',
  project___systems___oss___slug = 'project___systems___oss___slug',
  project___systems___oss___startDate = 'project___systems___oss___startDate',
  project___systems___oss___during = 'project___systems___oss___during',
  project___systems___oss___comment = 'project___systems___oss___comment',
  project___systems___oss___siteUrl = 'project___systems___oss___siteUrl',
  project___systems___oss___sourceUrl = 'project___systems___oss___sourceUrl',
  project___systems___oss___roles = 'project___systems___oss___roles',
  project___systems___oss___assigns = 'project___systems___oss___assigns',
  project___systems___oss___systems = 'project___systems___oss___systems',
  project___systems___oss___languages = 'project___systems___oss___languages',
  project___systems___oss___tools = 'project___systems___oss___tools',
  project___systems___oss___spaceId = 'project___systems___oss___spaceId',
  project___systems___oss___createdAt = 'project___systems___oss___createdAt',
  project___systems___oss___updatedAt = 'project___systems___oss___updatedAt',
  project___systems___oss___children = 'project___systems___oss___children',
  project___systems___skill_map = 'project___systems___skill_map',
  project___systems___skill_map___contentful_id = 'project___systems___skill_map___contentful_id',
  project___systems___skill_map___id = 'project___systems___skill_map___id',
  project___systems___skill_map___node_locale = 'project___systems___skill_map___node_locale',
  project___systems___skill_map___sort = 'project___systems___skill_map___sort',
  project___systems___skill_map___name = 'project___systems___skill_map___name',
  project___systems___skill_map___expanded = 'project___systems___skill_map___expanded',
  project___systems___skill_map___skills = 'project___systems___skill_map___skills',
  project___systems___skill_map___spaceId = 'project___systems___skill_map___spaceId',
  project___systems___skill_map___createdAt = 'project___systems___skill_map___createdAt',
  project___systems___skill_map___updatedAt = 'project___systems___skill_map___updatedAt',
  project___systems___skill_map___children = 'project___systems___skill_map___children',
  project___systems___parent___id = 'project___systems___parent___id',
  project___systems___parent___children = 'project___systems___parent___children',
  project___systems___children = 'project___systems___children',
  project___systems___children___id = 'project___systems___children___id',
  project___systems___children___children = 'project___systems___children___children',
  project___systems___internal___content = 'project___systems___internal___content',
  project___systems___internal___contentDigest = 'project___systems___internal___contentDigest',
  project___systems___internal___description = 'project___systems___internal___description',
  project___systems___internal___fieldOwners = 'project___systems___internal___fieldOwners',
  project___systems___internal___ignoreType = 'project___systems___internal___ignoreType',
  project___systems___internal___mediaType = 'project___systems___internal___mediaType',
  project___systems___internal___owner = 'project___systems___internal___owner',
  project___systems___internal___type = 'project___systems___internal___type',
  project___languages = 'project___languages',
  project___languages___contentful_id = 'project___languages___contentful_id',
  project___languages___id = 'project___languages___id',
  project___languages___node_locale = 'project___languages___node_locale',
  project___languages___name = 'project___languages___name',
  project___languages___level = 'project___languages___level',
  project___languages___project = 'project___languages___project',
  project___languages___project___contentful_id = 'project___languages___project___contentful_id',
  project___languages___project___id = 'project___languages___project___id',
  project___languages___project___node_locale = 'project___languages___project___node_locale',
  project___languages___project___name = 'project___languages___project___name',
  project___languages___project___startDate = 'project___languages___project___startDate',
  project___languages___project___during = 'project___languages___project___during',
  project___languages___project___comment = 'project___languages___project___comment',
  project___languages___project___roles = 'project___languages___project___roles',
  project___languages___project___assigns = 'project___languages___project___assigns',
  project___languages___project___systems = 'project___languages___project___systems',
  project___languages___project___languages = 'project___languages___project___languages',
  project___languages___project___tools = 'project___languages___project___tools',
  project___languages___project___spaceId = 'project___languages___project___spaceId',
  project___languages___project___createdAt = 'project___languages___project___createdAt',
  project___languages___project___updatedAt = 'project___languages___project___updatedAt',
  project___languages___project___children = 'project___languages___project___children',
  project___languages___spaceId = 'project___languages___spaceId',
  project___languages___createdAt = 'project___languages___createdAt',
  project___languages___updatedAt = 'project___languages___updatedAt',
  project___languages___sys___type = 'project___languages___sys___type',
  project___languages___sys___revision = 'project___languages___sys___revision',
  project___languages___oss = 'project___languages___oss',
  project___languages___oss___contentful_id = 'project___languages___oss___contentful_id',
  project___languages___oss___id = 'project___languages___oss___id',
  project___languages___oss___node_locale = 'project___languages___oss___node_locale',
  project___languages___oss___name = 'project___languages___oss___name',
  project___languages___oss___slug = 'project___languages___oss___slug',
  project___languages___oss___startDate = 'project___languages___oss___startDate',
  project___languages___oss___during = 'project___languages___oss___during',
  project___languages___oss___comment = 'project___languages___oss___comment',
  project___languages___oss___siteUrl = 'project___languages___oss___siteUrl',
  project___languages___oss___sourceUrl = 'project___languages___oss___sourceUrl',
  project___languages___oss___roles = 'project___languages___oss___roles',
  project___languages___oss___assigns = 'project___languages___oss___assigns',
  project___languages___oss___systems = 'project___languages___oss___systems',
  project___languages___oss___languages = 'project___languages___oss___languages',
  project___languages___oss___tools = 'project___languages___oss___tools',
  project___languages___oss___spaceId = 'project___languages___oss___spaceId',
  project___languages___oss___createdAt = 'project___languages___oss___createdAt',
  project___languages___oss___updatedAt = 'project___languages___oss___updatedAt',
  project___languages___oss___children = 'project___languages___oss___children',
  project___languages___skill_map = 'project___languages___skill_map',
  project___languages___skill_map___contentful_id = 'project___languages___skill_map___contentful_id',
  project___languages___skill_map___id = 'project___languages___skill_map___id',
  project___languages___skill_map___node_locale = 'project___languages___skill_map___node_locale',
  project___languages___skill_map___sort = 'project___languages___skill_map___sort',
  project___languages___skill_map___name = 'project___languages___skill_map___name',
  project___languages___skill_map___expanded = 'project___languages___skill_map___expanded',
  project___languages___skill_map___skills = 'project___languages___skill_map___skills',
  project___languages___skill_map___spaceId = 'project___languages___skill_map___spaceId',
  project___languages___skill_map___createdAt = 'project___languages___skill_map___createdAt',
  project___languages___skill_map___updatedAt = 'project___languages___skill_map___updatedAt',
  project___languages___skill_map___children = 'project___languages___skill_map___children',
  project___languages___parent___id = 'project___languages___parent___id',
  project___languages___parent___children = 'project___languages___parent___children',
  project___languages___children = 'project___languages___children',
  project___languages___children___id = 'project___languages___children___id',
  project___languages___children___children = 'project___languages___children___children',
  project___languages___internal___content = 'project___languages___internal___content',
  project___languages___internal___contentDigest = 'project___languages___internal___contentDigest',
  project___languages___internal___description = 'project___languages___internal___description',
  project___languages___internal___fieldOwners = 'project___languages___internal___fieldOwners',
  project___languages___internal___ignoreType = 'project___languages___internal___ignoreType',
  project___languages___internal___mediaType = 'project___languages___internal___mediaType',
  project___languages___internal___owner = 'project___languages___internal___owner',
  project___languages___internal___type = 'project___languages___internal___type',
  project___tools = 'project___tools',
  project___tools___contentful_id = 'project___tools___contentful_id',
  project___tools___id = 'project___tools___id',
  project___tools___node_locale = 'project___tools___node_locale',
  project___tools___name = 'project___tools___name',
  project___tools___level = 'project___tools___level',
  project___tools___project = 'project___tools___project',
  project___tools___project___contentful_id = 'project___tools___project___contentful_id',
  project___tools___project___id = 'project___tools___project___id',
  project___tools___project___node_locale = 'project___tools___project___node_locale',
  project___tools___project___name = 'project___tools___project___name',
  project___tools___project___startDate = 'project___tools___project___startDate',
  project___tools___project___during = 'project___tools___project___during',
  project___tools___project___comment = 'project___tools___project___comment',
  project___tools___project___roles = 'project___tools___project___roles',
  project___tools___project___assigns = 'project___tools___project___assigns',
  project___tools___project___systems = 'project___tools___project___systems',
  project___tools___project___languages = 'project___tools___project___languages',
  project___tools___project___tools = 'project___tools___project___tools',
  project___tools___project___spaceId = 'project___tools___project___spaceId',
  project___tools___project___createdAt = 'project___tools___project___createdAt',
  project___tools___project___updatedAt = 'project___tools___project___updatedAt',
  project___tools___project___children = 'project___tools___project___children',
  project___tools___spaceId = 'project___tools___spaceId',
  project___tools___createdAt = 'project___tools___createdAt',
  project___tools___updatedAt = 'project___tools___updatedAt',
  project___tools___sys___type = 'project___tools___sys___type',
  project___tools___sys___revision = 'project___tools___sys___revision',
  project___tools___oss = 'project___tools___oss',
  project___tools___oss___contentful_id = 'project___tools___oss___contentful_id',
  project___tools___oss___id = 'project___tools___oss___id',
  project___tools___oss___node_locale = 'project___tools___oss___node_locale',
  project___tools___oss___name = 'project___tools___oss___name',
  project___tools___oss___slug = 'project___tools___oss___slug',
  project___tools___oss___startDate = 'project___tools___oss___startDate',
  project___tools___oss___during = 'project___tools___oss___during',
  project___tools___oss___comment = 'project___tools___oss___comment',
  project___tools___oss___siteUrl = 'project___tools___oss___siteUrl',
  project___tools___oss___sourceUrl = 'project___tools___oss___sourceUrl',
  project___tools___oss___roles = 'project___tools___oss___roles',
  project___tools___oss___assigns = 'project___tools___oss___assigns',
  project___tools___oss___systems = 'project___tools___oss___systems',
  project___tools___oss___languages = 'project___tools___oss___languages',
  project___tools___oss___tools = 'project___tools___oss___tools',
  project___tools___oss___spaceId = 'project___tools___oss___spaceId',
  project___tools___oss___createdAt = 'project___tools___oss___createdAt',
  project___tools___oss___updatedAt = 'project___tools___oss___updatedAt',
  project___tools___oss___children = 'project___tools___oss___children',
  project___tools___skill_map = 'project___tools___skill_map',
  project___tools___skill_map___contentful_id = 'project___tools___skill_map___contentful_id',
  project___tools___skill_map___id = 'project___tools___skill_map___id',
  project___tools___skill_map___node_locale = 'project___tools___skill_map___node_locale',
  project___tools___skill_map___sort = 'project___tools___skill_map___sort',
  project___tools___skill_map___name = 'project___tools___skill_map___name',
  project___tools___skill_map___expanded = 'project___tools___skill_map___expanded',
  project___tools___skill_map___skills = 'project___tools___skill_map___skills',
  project___tools___skill_map___spaceId = 'project___tools___skill_map___spaceId',
  project___tools___skill_map___createdAt = 'project___tools___skill_map___createdAt',
  project___tools___skill_map___updatedAt = 'project___tools___skill_map___updatedAt',
  project___tools___skill_map___children = 'project___tools___skill_map___children',
  project___tools___parent___id = 'project___tools___parent___id',
  project___tools___parent___children = 'project___tools___parent___children',
  project___tools___children = 'project___tools___children',
  project___tools___children___id = 'project___tools___children___id',
  project___tools___children___children = 'project___tools___children___children',
  project___tools___internal___content = 'project___tools___internal___content',
  project___tools___internal___contentDigest = 'project___tools___internal___contentDigest',
  project___tools___internal___description = 'project___tools___internal___description',
  project___tools___internal___fieldOwners = 'project___tools___internal___fieldOwners',
  project___tools___internal___ignoreType = 'project___tools___internal___ignoreType',
  project___tools___internal___mediaType = 'project___tools___internal___mediaType',
  project___tools___internal___owner = 'project___tools___internal___owner',
  project___tools___internal___type = 'project___tools___internal___type',
  project___icon___contentful_id = 'project___icon___contentful_id',
  project___icon___id = 'project___icon___id',
  project___icon___node_locale = 'project___icon___node_locale',
  project___icon___title = 'project___icon___title',
  project___icon___history = 'project___icon___history',
  project___icon___history___contentful_id = 'project___icon___history___contentful_id',
  project___icon___history___id = 'project___icon___history___id',
  project___icon___history___node_locale = 'project___icon___history___node_locale',
  project___icon___history___date = 'project___icon___history___date',
  project___icon___history___title = 'project___icon___history___title',
  project___icon___history___subheader = 'project___icon___history___subheader',
  project___icon___history___spaceId = 'project___icon___history___spaceId',
  project___icon___history___createdAt = 'project___icon___history___createdAt',
  project___icon___history___updatedAt = 'project___icon___history___updatedAt',
  project___icon___history___children = 'project___icon___history___children',
  project___icon___contents___id = 'project___icon___contents___id',
  project___icon___contents___children = 'project___icon___contents___children',
  project___icon___contents___contents = 'project___icon___contents___contents',
  project___icon___spaceId = 'project___icon___spaceId',
  project___icon___createdAt = 'project___icon___createdAt',
  project___icon___updatedAt = 'project___icon___updatedAt',
  project___icon___sys___type = 'project___icon___sys___type',
  project___icon___sys___revision = 'project___icon___sys___revision',
  project___icon___what_i_can_do = 'project___icon___what_i_can_do',
  project___icon___what_i_can_do___contentful_id = 'project___icon___what_i_can_do___contentful_id',
  project___icon___what_i_can_do___id = 'project___icon___what_i_can_do___id',
  project___icon___what_i_can_do___node_locale = 'project___icon___what_i_can_do___node_locale',
  project___icon___what_i_can_do___sort = 'project___icon___what_i_can_do___sort',
  project___icon___what_i_can_do___title = 'project___icon___what_i_can_do___title',
  project___icon___what_i_can_do___message = 'project___icon___what_i_can_do___message',
  project___icon___what_i_can_do___spaceId = 'project___icon___what_i_can_do___spaceId',
  project___icon___what_i_can_do___createdAt = 'project___icon___what_i_can_do___createdAt',
  project___icon___what_i_can_do___updatedAt = 'project___icon___what_i_can_do___updatedAt',
  project___icon___what_i_can_do___children = 'project___icon___what_i_can_do___children',
  project___icon___project = 'project___icon___project',
  project___icon___project___contentful_id = 'project___icon___project___contentful_id',
  project___icon___project___id = 'project___icon___project___id',
  project___icon___project___node_locale = 'project___icon___project___node_locale',
  project___icon___project___name = 'project___icon___project___name',
  project___icon___project___startDate = 'project___icon___project___startDate',
  project___icon___project___during = 'project___icon___project___during',
  project___icon___project___comment = 'project___icon___project___comment',
  project___icon___project___roles = 'project___icon___project___roles',
  project___icon___project___assigns = 'project___icon___project___assigns',
  project___icon___project___systems = 'project___icon___project___systems',
  project___icon___project___languages = 'project___icon___project___languages',
  project___icon___project___tools = 'project___icon___project___tools',
  project___icon___project___spaceId = 'project___icon___project___spaceId',
  project___icon___project___createdAt = 'project___icon___project___createdAt',
  project___icon___project___updatedAt = 'project___icon___project___updatedAt',
  project___icon___project___children = 'project___icon___project___children',
  project___icon___contact = 'project___icon___contact',
  project___icon___contact___contentful_id = 'project___icon___contact___contentful_id',
  project___icon___contact___id = 'project___icon___contact___id',
  project___icon___contact___node_locale = 'project___icon___contact___node_locale',
  project___icon___contact___sort = 'project___icon___contact___sort',
  project___icon___contact___title = 'project___icon___contact___title',
  project___icon___contact___subTitle = 'project___icon___contact___subTitle',
  project___icon___contact___href = 'project___icon___contact___href',
  project___icon___contact___spaceId = 'project___icon___contact___spaceId',
  project___icon___contact___createdAt = 'project___icon___contact___createdAt',
  project___icon___contact___updatedAt = 'project___icon___contact___updatedAt',
  project___icon___contact___children = 'project___icon___contact___children',
  project___icon___parent___id = 'project___icon___parent___id',
  project___icon___parent___children = 'project___icon___parent___children',
  project___icon___children = 'project___icon___children',
  project___icon___children___id = 'project___icon___children___id',
  project___icon___children___children = 'project___icon___children___children',
  project___icon___internal___content = 'project___icon___internal___content',
  project___icon___internal___contentDigest = 'project___icon___internal___contentDigest',
  project___icon___internal___description = 'project___icon___internal___description',
  project___icon___internal___fieldOwners = 'project___icon___internal___fieldOwners',
  project___icon___internal___ignoreType = 'project___icon___internal___ignoreType',
  project___icon___internal___mediaType = 'project___icon___internal___mediaType',
  project___icon___internal___owner = 'project___icon___internal___owner',
  project___icon___internal___type = 'project___icon___internal___type',
  project___icon___childContentfulIconContentsTextNode___id = 'project___icon___childContentfulIconContentsTextNode___id',
  project___icon___childContentfulIconContentsTextNode___children = 'project___icon___childContentfulIconContentsTextNode___children',
  project___icon___childContentfulIconContentsTextNode___contents = 'project___icon___childContentfulIconContentsTextNode___contents',
  project___spaceId = 'project___spaceId',
  project___createdAt = 'project___createdAt',
  project___updatedAt = 'project___updatedAt',
  project___sys___type = 'project___sys___type',
  project___sys___revision = 'project___sys___revision',
  project___parent___id = 'project___parent___id',
  project___parent___parent___id = 'project___parent___parent___id',
  project___parent___parent___children = 'project___parent___parent___children',
  project___parent___children = 'project___parent___children',
  project___parent___children___id = 'project___parent___children___id',
  project___parent___children___children = 'project___parent___children___children',
  project___parent___internal___content = 'project___parent___internal___content',
  project___parent___internal___contentDigest = 'project___parent___internal___contentDigest',
  project___parent___internal___description = 'project___parent___internal___description',
  project___parent___internal___fieldOwners = 'project___parent___internal___fieldOwners',
  project___parent___internal___ignoreType = 'project___parent___internal___ignoreType',
  project___parent___internal___mediaType = 'project___parent___internal___mediaType',
  project___parent___internal___owner = 'project___parent___internal___owner',
  project___parent___internal___type = 'project___parent___internal___type',
  project___children = 'project___children',
  project___children___id = 'project___children___id',
  project___children___parent___id = 'project___children___parent___id',
  project___children___parent___children = 'project___children___parent___children',
  project___children___children = 'project___children___children',
  project___children___children___id = 'project___children___children___id',
  project___children___children___children = 'project___children___children___children',
  project___children___internal___content = 'project___children___internal___content',
  project___children___internal___contentDigest = 'project___children___internal___contentDigest',
  project___children___internal___description = 'project___children___internal___description',
  project___children___internal___fieldOwners = 'project___children___internal___fieldOwners',
  project___children___internal___ignoreType = 'project___children___internal___ignoreType',
  project___children___internal___mediaType = 'project___children___internal___mediaType',
  project___children___internal___owner = 'project___children___internal___owner',
  project___children___internal___type = 'project___children___internal___type',
  project___internal___content = 'project___internal___content',
  project___internal___contentDigest = 'project___internal___contentDigest',
  project___internal___description = 'project___internal___description',
  project___internal___fieldOwners = 'project___internal___fieldOwners',
  project___internal___ignoreType = 'project___internal___ignoreType',
  project___internal___mediaType = 'project___internal___mediaType',
  project___internal___owner = 'project___internal___owner',
  project___internal___type = 'project___internal___type',
  contact = 'contact',
  contact___contentful_id = 'contact___contentful_id',
  contact___id = 'contact___id',
  contact___node_locale = 'contact___node_locale',
  contact___sort = 'contact___sort',
  contact___title = 'contact___title',
  contact___subTitle = 'contact___subTitle',
  contact___href = 'contact___href',
  contact___icon___contentful_id = 'contact___icon___contentful_id',
  contact___icon___id = 'contact___icon___id',
  contact___icon___node_locale = 'contact___icon___node_locale',
  contact___icon___title = 'contact___icon___title',
  contact___icon___history = 'contact___icon___history',
  contact___icon___history___contentful_id = 'contact___icon___history___contentful_id',
  contact___icon___history___id = 'contact___icon___history___id',
  contact___icon___history___node_locale = 'contact___icon___history___node_locale',
  contact___icon___history___date = 'contact___icon___history___date',
  contact___icon___history___title = 'contact___icon___history___title',
  contact___icon___history___subheader = 'contact___icon___history___subheader',
  contact___icon___history___spaceId = 'contact___icon___history___spaceId',
  contact___icon___history___createdAt = 'contact___icon___history___createdAt',
  contact___icon___history___updatedAt = 'contact___icon___history___updatedAt',
  contact___icon___history___children = 'contact___icon___history___children',
  contact___icon___contents___id = 'contact___icon___contents___id',
  contact___icon___contents___children = 'contact___icon___contents___children',
  contact___icon___contents___contents = 'contact___icon___contents___contents',
  contact___icon___spaceId = 'contact___icon___spaceId',
  contact___icon___createdAt = 'contact___icon___createdAt',
  contact___icon___updatedAt = 'contact___icon___updatedAt',
  contact___icon___sys___type = 'contact___icon___sys___type',
  contact___icon___sys___revision = 'contact___icon___sys___revision',
  contact___icon___what_i_can_do = 'contact___icon___what_i_can_do',
  contact___icon___what_i_can_do___contentful_id = 'contact___icon___what_i_can_do___contentful_id',
  contact___icon___what_i_can_do___id = 'contact___icon___what_i_can_do___id',
  contact___icon___what_i_can_do___node_locale = 'contact___icon___what_i_can_do___node_locale',
  contact___icon___what_i_can_do___sort = 'contact___icon___what_i_can_do___sort',
  contact___icon___what_i_can_do___title = 'contact___icon___what_i_can_do___title',
  contact___icon___what_i_can_do___message = 'contact___icon___what_i_can_do___message',
  contact___icon___what_i_can_do___spaceId = 'contact___icon___what_i_can_do___spaceId',
  contact___icon___what_i_can_do___createdAt = 'contact___icon___what_i_can_do___createdAt',
  contact___icon___what_i_can_do___updatedAt = 'contact___icon___what_i_can_do___updatedAt',
  contact___icon___what_i_can_do___children = 'contact___icon___what_i_can_do___children',
  contact___icon___project = 'contact___icon___project',
  contact___icon___project___contentful_id = 'contact___icon___project___contentful_id',
  contact___icon___project___id = 'contact___icon___project___id',
  contact___icon___project___node_locale = 'contact___icon___project___node_locale',
  contact___icon___project___name = 'contact___icon___project___name',
  contact___icon___project___startDate = 'contact___icon___project___startDate',
  contact___icon___project___during = 'contact___icon___project___during',
  contact___icon___project___comment = 'contact___icon___project___comment',
  contact___icon___project___roles = 'contact___icon___project___roles',
  contact___icon___project___assigns = 'contact___icon___project___assigns',
  contact___icon___project___systems = 'contact___icon___project___systems',
  contact___icon___project___languages = 'contact___icon___project___languages',
  contact___icon___project___tools = 'contact___icon___project___tools',
  contact___icon___project___spaceId = 'contact___icon___project___spaceId',
  contact___icon___project___createdAt = 'contact___icon___project___createdAt',
  contact___icon___project___updatedAt = 'contact___icon___project___updatedAt',
  contact___icon___project___children = 'contact___icon___project___children',
  contact___icon___contact = 'contact___icon___contact',
  contact___icon___contact___contentful_id = 'contact___icon___contact___contentful_id',
  contact___icon___contact___id = 'contact___icon___contact___id',
  contact___icon___contact___node_locale = 'contact___icon___contact___node_locale',
  contact___icon___contact___sort = 'contact___icon___contact___sort',
  contact___icon___contact___title = 'contact___icon___contact___title',
  contact___icon___contact___subTitle = 'contact___icon___contact___subTitle',
  contact___icon___contact___href = 'contact___icon___contact___href',
  contact___icon___contact___spaceId = 'contact___icon___contact___spaceId',
  contact___icon___contact___createdAt = 'contact___icon___contact___createdAt',
  contact___icon___contact___updatedAt = 'contact___icon___contact___updatedAt',
  contact___icon___contact___children = 'contact___icon___contact___children',
  contact___icon___parent___id = 'contact___icon___parent___id',
  contact___icon___parent___children = 'contact___icon___parent___children',
  contact___icon___children = 'contact___icon___children',
  contact___icon___children___id = 'contact___icon___children___id',
  contact___icon___children___children = 'contact___icon___children___children',
  contact___icon___internal___content = 'contact___icon___internal___content',
  contact___icon___internal___contentDigest = 'contact___icon___internal___contentDigest',
  contact___icon___internal___description = 'contact___icon___internal___description',
  contact___icon___internal___fieldOwners = 'contact___icon___internal___fieldOwners',
  contact___icon___internal___ignoreType = 'contact___icon___internal___ignoreType',
  contact___icon___internal___mediaType = 'contact___icon___internal___mediaType',
  contact___icon___internal___owner = 'contact___icon___internal___owner',
  contact___icon___internal___type = 'contact___icon___internal___type',
  contact___icon___childContentfulIconContentsTextNode___id = 'contact___icon___childContentfulIconContentsTextNode___id',
  contact___icon___childContentfulIconContentsTextNode___children = 'contact___icon___childContentfulIconContentsTextNode___children',
  contact___icon___childContentfulIconContentsTextNode___contents = 'contact___icon___childContentfulIconContentsTextNode___contents',
  contact___spaceId = 'contact___spaceId',
  contact___createdAt = 'contact___createdAt',
  contact___updatedAt = 'contact___updatedAt',
  contact___sys___type = 'contact___sys___type',
  contact___sys___revision = 'contact___sys___revision',
  contact___parent___id = 'contact___parent___id',
  contact___parent___parent___id = 'contact___parent___parent___id',
  contact___parent___parent___children = 'contact___parent___parent___children',
  contact___parent___children = 'contact___parent___children',
  contact___parent___children___id = 'contact___parent___children___id',
  contact___parent___children___children = 'contact___parent___children___children',
  contact___parent___internal___content = 'contact___parent___internal___content',
  contact___parent___internal___contentDigest = 'contact___parent___internal___contentDigest',
  contact___parent___internal___description = 'contact___parent___internal___description',
  contact___parent___internal___fieldOwners = 'contact___parent___internal___fieldOwners',
  contact___parent___internal___ignoreType = 'contact___parent___internal___ignoreType',
  contact___parent___internal___mediaType = 'contact___parent___internal___mediaType',
  contact___parent___internal___owner = 'contact___parent___internal___owner',
  contact___parent___internal___type = 'contact___parent___internal___type',
  contact___children = 'contact___children',
  contact___children___id = 'contact___children___id',
  contact___children___parent___id = 'contact___children___parent___id',
  contact___children___parent___children = 'contact___children___parent___children',
  contact___children___children = 'contact___children___children',
  contact___children___children___id = 'contact___children___children___id',
  contact___children___children___children = 'contact___children___children___children',
  contact___children___internal___content = 'contact___children___internal___content',
  contact___children___internal___contentDigest = 'contact___children___internal___contentDigest',
  contact___children___internal___description = 'contact___children___internal___description',
  contact___children___internal___fieldOwners = 'contact___children___internal___fieldOwners',
  contact___children___internal___ignoreType = 'contact___children___internal___ignoreType',
  contact___children___internal___mediaType = 'contact___children___internal___mediaType',
  contact___children___internal___owner = 'contact___children___internal___owner',
  contact___children___internal___type = 'contact___children___internal___type',
  contact___internal___content = 'contact___internal___content',
  contact___internal___contentDigest = 'contact___internal___contentDigest',
  contact___internal___description = 'contact___internal___description',
  contact___internal___fieldOwners = 'contact___internal___fieldOwners',
  contact___internal___ignoreType = 'contact___internal___ignoreType',
  contact___internal___mediaType = 'contact___internal___mediaType',
  contact___internal___owner = 'contact___internal___owner',
  contact___internal___type = 'contact___internal___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childContentfulIconContentsTextNode___id = 'childContentfulIconContentsTextNode___id',
  childContentfulIconContentsTextNode___parent___id = 'childContentfulIconContentsTextNode___parent___id',
  childContentfulIconContentsTextNode___parent___parent___id = 'childContentfulIconContentsTextNode___parent___parent___id',
  childContentfulIconContentsTextNode___parent___parent___children = 'childContentfulIconContentsTextNode___parent___parent___children',
  childContentfulIconContentsTextNode___parent___children = 'childContentfulIconContentsTextNode___parent___children',
  childContentfulIconContentsTextNode___parent___children___id = 'childContentfulIconContentsTextNode___parent___children___id',
  childContentfulIconContentsTextNode___parent___children___children = 'childContentfulIconContentsTextNode___parent___children___children',
  childContentfulIconContentsTextNode___parent___internal___content = 'childContentfulIconContentsTextNode___parent___internal___content',
  childContentfulIconContentsTextNode___parent___internal___contentDigest = 'childContentfulIconContentsTextNode___parent___internal___contentDigest',
  childContentfulIconContentsTextNode___parent___internal___description = 'childContentfulIconContentsTextNode___parent___internal___description',
  childContentfulIconContentsTextNode___parent___internal___fieldOwners = 'childContentfulIconContentsTextNode___parent___internal___fieldOwners',
  childContentfulIconContentsTextNode___parent___internal___ignoreType = 'childContentfulIconContentsTextNode___parent___internal___ignoreType',
  childContentfulIconContentsTextNode___parent___internal___mediaType = 'childContentfulIconContentsTextNode___parent___internal___mediaType',
  childContentfulIconContentsTextNode___parent___internal___owner = 'childContentfulIconContentsTextNode___parent___internal___owner',
  childContentfulIconContentsTextNode___parent___internal___type = 'childContentfulIconContentsTextNode___parent___internal___type',
  childContentfulIconContentsTextNode___children = 'childContentfulIconContentsTextNode___children',
  childContentfulIconContentsTextNode___children___id = 'childContentfulIconContentsTextNode___children___id',
  childContentfulIconContentsTextNode___children___parent___id = 'childContentfulIconContentsTextNode___children___parent___id',
  childContentfulIconContentsTextNode___children___parent___children = 'childContentfulIconContentsTextNode___children___parent___children',
  childContentfulIconContentsTextNode___children___children = 'childContentfulIconContentsTextNode___children___children',
  childContentfulIconContentsTextNode___children___children___id = 'childContentfulIconContentsTextNode___children___children___id',
  childContentfulIconContentsTextNode___children___children___children = 'childContentfulIconContentsTextNode___children___children___children',
  childContentfulIconContentsTextNode___children___internal___content = 'childContentfulIconContentsTextNode___children___internal___content',
  childContentfulIconContentsTextNode___children___internal___contentDigest = 'childContentfulIconContentsTextNode___children___internal___contentDigest',
  childContentfulIconContentsTextNode___children___internal___description = 'childContentfulIconContentsTextNode___children___internal___description',
  childContentfulIconContentsTextNode___children___internal___fieldOwners = 'childContentfulIconContentsTextNode___children___internal___fieldOwners',
  childContentfulIconContentsTextNode___children___internal___ignoreType = 'childContentfulIconContentsTextNode___children___internal___ignoreType',
  childContentfulIconContentsTextNode___children___internal___mediaType = 'childContentfulIconContentsTextNode___children___internal___mediaType',
  childContentfulIconContentsTextNode___children___internal___owner = 'childContentfulIconContentsTextNode___children___internal___owner',
  childContentfulIconContentsTextNode___children___internal___type = 'childContentfulIconContentsTextNode___children___internal___type',
  childContentfulIconContentsTextNode___internal___content = 'childContentfulIconContentsTextNode___internal___content',
  childContentfulIconContentsTextNode___internal___contentDigest = 'childContentfulIconContentsTextNode___internal___contentDigest',
  childContentfulIconContentsTextNode___internal___description = 'childContentfulIconContentsTextNode___internal___description',
  childContentfulIconContentsTextNode___internal___fieldOwners = 'childContentfulIconContentsTextNode___internal___fieldOwners',
  childContentfulIconContentsTextNode___internal___ignoreType = 'childContentfulIconContentsTextNode___internal___ignoreType',
  childContentfulIconContentsTextNode___internal___mediaType = 'childContentfulIconContentsTextNode___internal___mediaType',
  childContentfulIconContentsTextNode___internal___owner = 'childContentfulIconContentsTextNode___internal___owner',
  childContentfulIconContentsTextNode___internal___type = 'childContentfulIconContentsTextNode___internal___type',
  childContentfulIconContentsTextNode___contents = 'childContentfulIconContentsTextNode___contents',
  childContentfulIconContentsTextNode___sys___type = 'childContentfulIconContentsTextNode___sys___type'
}

export type ContentfulIconFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  history?: Maybe<ContentfulHistoryFilterListInput>;
  contents?: Maybe<ContentfulIconContentsTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulIconSysFilterInput>;
  what_i_can_do?: Maybe<ContentfulWhatICanDoFilterListInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  contact?: Maybe<ContentfulContactFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulIconContentsTextNode?: Maybe<ContentfulIconContentsTextNodeFilterInput>;
};

export type ContentfulIconGroupConnection = {
  __typename?: 'ContentfulIconGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulIconEdge>;
  nodes: Array<ContentfulIcon>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulIconSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulIconFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulIconSys = {
  __typename?: 'ContentfulIconSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulIconSysContentType>;
};

export type ContentfulIconSysContentType = {
  __typename?: 'ContentfulIconSysContentType';
  sys?: Maybe<ContentfulIconSysContentTypeSys>;
};

export type ContentfulIconSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulIconSysContentTypeSysFilterInput>;
};

export type ContentfulIconSysContentTypeSys = {
  __typename?: 'ContentfulIconSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulIconSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulIconSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulIconSysContentTypeFilterInput>;
};

export enum ContentfulImageCropFocus {
  TOP = 'TOP',
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM = 'BOTTOM',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  FACE = 'FACE',
  FACES = 'FACES',
  CENTER = 'CENTER'
}

export enum ContentfulImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export type ContentfulOss = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulOss';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  during?: Maybe<Scalars['Float']>;
  comment?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  mainImage?: Maybe<ContentfulAsset>;
  roles?: Maybe<Array<Maybe<ContentfulRole>>>;
  assigns?: Maybe<Array<Maybe<ContentfulAssigne>>>;
  systems?: Maybe<Array<Maybe<ContentfulSkill>>>;
  languages?: Maybe<Array<Maybe<ContentfulSkill>>>;
  tools?: Maybe<Array<Maybe<ContentfulSkill>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulOssSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulOssStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulOssCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulOssUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulOssConnection = {
  __typename?: 'ContentfulOssConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOssEdge>;
  nodes: Array<ContentfulOss>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulOssGroupConnection>;
};


export type ContentfulOssConnectionDistinctArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulOssFieldsEnum;
};

export type ContentfulOssEdge = {
  __typename?: 'ContentfulOssEdge';
  next?: Maybe<ContentfulOss>;
  node: ContentfulOss;
  previous?: Maybe<ContentfulOss>;
};

export enum ContentfulOssFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  slug = 'slug',
  startDate = 'startDate',
  during = 'during',
  comment = 'comment',
  siteUrl = 'siteUrl',
  sourceUrl = 'sourceUrl',
  mainImage___contentful_id = 'mainImage___contentful_id',
  mainImage___id = 'mainImage___id',
  mainImage___spaceId = 'mainImage___spaceId',
  mainImage___createdAt = 'mainImage___createdAt',
  mainImage___updatedAt = 'mainImage___updatedAt',
  mainImage___file___url = 'mainImage___file___url',
  mainImage___file___details___size = 'mainImage___file___details___size',
  mainImage___file___fileName = 'mainImage___file___fileName',
  mainImage___file___contentType = 'mainImage___file___contentType',
  mainImage___title = 'mainImage___title',
  mainImage___description = 'mainImage___description',
  mainImage___node_locale = 'mainImage___node_locale',
  mainImage___sys___type = 'mainImage___sys___type',
  mainImage___sys___revision = 'mainImage___sys___revision',
  mainImage___localFile___sourceInstanceName = 'mainImage___localFile___sourceInstanceName',
  mainImage___localFile___absolutePath = 'mainImage___localFile___absolutePath',
  mainImage___localFile___relativePath = 'mainImage___localFile___relativePath',
  mainImage___localFile___extension = 'mainImage___localFile___extension',
  mainImage___localFile___size = 'mainImage___localFile___size',
  mainImage___localFile___prettySize = 'mainImage___localFile___prettySize',
  mainImage___localFile___modifiedTime = 'mainImage___localFile___modifiedTime',
  mainImage___localFile___accessTime = 'mainImage___localFile___accessTime',
  mainImage___localFile___changeTime = 'mainImage___localFile___changeTime',
  mainImage___localFile___birthTime = 'mainImage___localFile___birthTime',
  mainImage___localFile___root = 'mainImage___localFile___root',
  mainImage___localFile___dir = 'mainImage___localFile___dir',
  mainImage___localFile___base = 'mainImage___localFile___base',
  mainImage___localFile___ext = 'mainImage___localFile___ext',
  mainImage___localFile___name = 'mainImage___localFile___name',
  mainImage___localFile___relativeDirectory = 'mainImage___localFile___relativeDirectory',
  mainImage___localFile___dev = 'mainImage___localFile___dev',
  mainImage___localFile___mode = 'mainImage___localFile___mode',
  mainImage___localFile___nlink = 'mainImage___localFile___nlink',
  mainImage___localFile___uid = 'mainImage___localFile___uid',
  mainImage___localFile___gid = 'mainImage___localFile___gid',
  mainImage___localFile___rdev = 'mainImage___localFile___rdev',
  mainImage___localFile___ino = 'mainImage___localFile___ino',
  mainImage___localFile___atimeMs = 'mainImage___localFile___atimeMs',
  mainImage___localFile___mtimeMs = 'mainImage___localFile___mtimeMs',
  mainImage___localFile___ctimeMs = 'mainImage___localFile___ctimeMs',
  mainImage___localFile___atime = 'mainImage___localFile___atime',
  mainImage___localFile___mtime = 'mainImage___localFile___mtime',
  mainImage___localFile___ctime = 'mainImage___localFile___ctime',
  mainImage___localFile___birthtime = 'mainImage___localFile___birthtime',
  mainImage___localFile___birthtimeMs = 'mainImage___localFile___birthtimeMs',
  mainImage___localFile___blksize = 'mainImage___localFile___blksize',
  mainImage___localFile___blocks = 'mainImage___localFile___blocks',
  mainImage___localFile___url = 'mainImage___localFile___url',
  mainImage___localFile___childImageSharp___gatsbyImageData = 'mainImage___localFile___childImageSharp___gatsbyImageData',
  mainImage___localFile___childImageSharp___id = 'mainImage___localFile___childImageSharp___id',
  mainImage___localFile___childImageSharp___children = 'mainImage___localFile___childImageSharp___children',
  mainImage___localFile___id = 'mainImage___localFile___id',
  mainImage___localFile___parent___id = 'mainImage___localFile___parent___id',
  mainImage___localFile___parent___children = 'mainImage___localFile___parent___children',
  mainImage___localFile___children = 'mainImage___localFile___children',
  mainImage___localFile___children___id = 'mainImage___localFile___children___id',
  mainImage___localFile___children___children = 'mainImage___localFile___children___children',
  mainImage___localFile___internal___content = 'mainImage___localFile___internal___content',
  mainImage___localFile___internal___contentDigest = 'mainImage___localFile___internal___contentDigest',
  mainImage___localFile___internal___description = 'mainImage___localFile___internal___description',
  mainImage___localFile___internal___fieldOwners = 'mainImage___localFile___internal___fieldOwners',
  mainImage___localFile___internal___ignoreType = 'mainImage___localFile___internal___ignoreType',
  mainImage___localFile___internal___mediaType = 'mainImage___localFile___internal___mediaType',
  mainImage___localFile___internal___owner = 'mainImage___localFile___internal___owner',
  mainImage___localFile___internal___type = 'mainImage___localFile___internal___type',
  mainImage___fixed___base64 = 'mainImage___fixed___base64',
  mainImage___fixed___tracedSVG = 'mainImage___fixed___tracedSVG',
  mainImage___fixed___aspectRatio = 'mainImage___fixed___aspectRatio',
  mainImage___fixed___width = 'mainImage___fixed___width',
  mainImage___fixed___height = 'mainImage___fixed___height',
  mainImage___fixed___src = 'mainImage___fixed___src',
  mainImage___fixed___srcSet = 'mainImage___fixed___srcSet',
  mainImage___fixed___srcWebp = 'mainImage___fixed___srcWebp',
  mainImage___fixed___srcSetWebp = 'mainImage___fixed___srcSetWebp',
  mainImage___resolutions___base64 = 'mainImage___resolutions___base64',
  mainImage___resolutions___tracedSVG = 'mainImage___resolutions___tracedSVG',
  mainImage___resolutions___aspectRatio = 'mainImage___resolutions___aspectRatio',
  mainImage___resolutions___width = 'mainImage___resolutions___width',
  mainImage___resolutions___height = 'mainImage___resolutions___height',
  mainImage___resolutions___src = 'mainImage___resolutions___src',
  mainImage___resolutions___srcSet = 'mainImage___resolutions___srcSet',
  mainImage___resolutions___srcWebp = 'mainImage___resolutions___srcWebp',
  mainImage___resolutions___srcSetWebp = 'mainImage___resolutions___srcSetWebp',
  mainImage___fluid___base64 = 'mainImage___fluid___base64',
  mainImage___fluid___tracedSVG = 'mainImage___fluid___tracedSVG',
  mainImage___fluid___aspectRatio = 'mainImage___fluid___aspectRatio',
  mainImage___fluid___src = 'mainImage___fluid___src',
  mainImage___fluid___srcSet = 'mainImage___fluid___srcSet',
  mainImage___fluid___srcWebp = 'mainImage___fluid___srcWebp',
  mainImage___fluid___srcSetWebp = 'mainImage___fluid___srcSetWebp',
  mainImage___fluid___sizes = 'mainImage___fluid___sizes',
  mainImage___sizes___base64 = 'mainImage___sizes___base64',
  mainImage___sizes___tracedSVG = 'mainImage___sizes___tracedSVG',
  mainImage___sizes___aspectRatio = 'mainImage___sizes___aspectRatio',
  mainImage___sizes___src = 'mainImage___sizes___src',
  mainImage___sizes___srcSet = 'mainImage___sizes___srcSet',
  mainImage___sizes___srcWebp = 'mainImage___sizes___srcWebp',
  mainImage___sizes___srcSetWebp = 'mainImage___sizes___srcSetWebp',
  mainImage___sizes___sizes = 'mainImage___sizes___sizes',
  mainImage___resize___base64 = 'mainImage___resize___base64',
  mainImage___resize___tracedSVG = 'mainImage___resize___tracedSVG',
  mainImage___resize___src = 'mainImage___resize___src',
  mainImage___resize___width = 'mainImage___resize___width',
  mainImage___resize___height = 'mainImage___resize___height',
  mainImage___resize___aspectRatio = 'mainImage___resize___aspectRatio',
  mainImage___parent___id = 'mainImage___parent___id',
  mainImage___parent___parent___id = 'mainImage___parent___parent___id',
  mainImage___parent___parent___children = 'mainImage___parent___parent___children',
  mainImage___parent___children = 'mainImage___parent___children',
  mainImage___parent___children___id = 'mainImage___parent___children___id',
  mainImage___parent___children___children = 'mainImage___parent___children___children',
  mainImage___parent___internal___content = 'mainImage___parent___internal___content',
  mainImage___parent___internal___contentDigest = 'mainImage___parent___internal___contentDigest',
  mainImage___parent___internal___description = 'mainImage___parent___internal___description',
  mainImage___parent___internal___fieldOwners = 'mainImage___parent___internal___fieldOwners',
  mainImage___parent___internal___ignoreType = 'mainImage___parent___internal___ignoreType',
  mainImage___parent___internal___mediaType = 'mainImage___parent___internal___mediaType',
  mainImage___parent___internal___owner = 'mainImage___parent___internal___owner',
  mainImage___parent___internal___type = 'mainImage___parent___internal___type',
  mainImage___children = 'mainImage___children',
  mainImage___children___id = 'mainImage___children___id',
  mainImage___children___parent___id = 'mainImage___children___parent___id',
  mainImage___children___parent___children = 'mainImage___children___parent___children',
  mainImage___children___children = 'mainImage___children___children',
  mainImage___children___children___id = 'mainImage___children___children___id',
  mainImage___children___children___children = 'mainImage___children___children___children',
  mainImage___children___internal___content = 'mainImage___children___internal___content',
  mainImage___children___internal___contentDigest = 'mainImage___children___internal___contentDigest',
  mainImage___children___internal___description = 'mainImage___children___internal___description',
  mainImage___children___internal___fieldOwners = 'mainImage___children___internal___fieldOwners',
  mainImage___children___internal___ignoreType = 'mainImage___children___internal___ignoreType',
  mainImage___children___internal___mediaType = 'mainImage___children___internal___mediaType',
  mainImage___children___internal___owner = 'mainImage___children___internal___owner',
  mainImage___children___internal___type = 'mainImage___children___internal___type',
  mainImage___internal___content = 'mainImage___internal___content',
  mainImage___internal___contentDigest = 'mainImage___internal___contentDigest',
  mainImage___internal___description = 'mainImage___internal___description',
  mainImage___internal___fieldOwners = 'mainImage___internal___fieldOwners',
  mainImage___internal___ignoreType = 'mainImage___internal___ignoreType',
  mainImage___internal___mediaType = 'mainImage___internal___mediaType',
  mainImage___internal___owner = 'mainImage___internal___owner',
  mainImage___internal___type = 'mainImage___internal___type',
  roles = 'roles',
  roles___contentful_id = 'roles___contentful_id',
  roles___id = 'roles___id',
  roles___node_locale = 'roles___node_locale',
  roles___name = 'roles___name',
  roles___project = 'roles___project',
  roles___project___contentful_id = 'roles___project___contentful_id',
  roles___project___id = 'roles___project___id',
  roles___project___node_locale = 'roles___project___node_locale',
  roles___project___name = 'roles___project___name',
  roles___project___startDate = 'roles___project___startDate',
  roles___project___during = 'roles___project___during',
  roles___project___comment = 'roles___project___comment',
  roles___project___roles = 'roles___project___roles',
  roles___project___roles___contentful_id = 'roles___project___roles___contentful_id',
  roles___project___roles___id = 'roles___project___roles___id',
  roles___project___roles___node_locale = 'roles___project___roles___node_locale',
  roles___project___roles___name = 'roles___project___roles___name',
  roles___project___roles___project = 'roles___project___roles___project',
  roles___project___roles___oss = 'roles___project___roles___oss',
  roles___project___roles___spaceId = 'roles___project___roles___spaceId',
  roles___project___roles___createdAt = 'roles___project___roles___createdAt',
  roles___project___roles___updatedAt = 'roles___project___roles___updatedAt',
  roles___project___roles___children = 'roles___project___roles___children',
  roles___project___assigns = 'roles___project___assigns',
  roles___project___assigns___contentful_id = 'roles___project___assigns___contentful_id',
  roles___project___assigns___id = 'roles___project___assigns___id',
  roles___project___assigns___node_locale = 'roles___project___assigns___node_locale',
  roles___project___assigns___name = 'roles___project___assigns___name',
  roles___project___assigns___oss = 'roles___project___assigns___oss',
  roles___project___assigns___spaceId = 'roles___project___assigns___spaceId',
  roles___project___assigns___createdAt = 'roles___project___assigns___createdAt',
  roles___project___assigns___updatedAt = 'roles___project___assigns___updatedAt',
  roles___project___assigns___project = 'roles___project___assigns___project',
  roles___project___assigns___children = 'roles___project___assigns___children',
  roles___project___systems = 'roles___project___systems',
  roles___project___systems___contentful_id = 'roles___project___systems___contentful_id',
  roles___project___systems___id = 'roles___project___systems___id',
  roles___project___systems___node_locale = 'roles___project___systems___node_locale',
  roles___project___systems___name = 'roles___project___systems___name',
  roles___project___systems___level = 'roles___project___systems___level',
  roles___project___systems___project = 'roles___project___systems___project',
  roles___project___systems___spaceId = 'roles___project___systems___spaceId',
  roles___project___systems___createdAt = 'roles___project___systems___createdAt',
  roles___project___systems___updatedAt = 'roles___project___systems___updatedAt',
  roles___project___systems___oss = 'roles___project___systems___oss',
  roles___project___systems___skill_map = 'roles___project___systems___skill_map',
  roles___project___systems___children = 'roles___project___systems___children',
  roles___project___languages = 'roles___project___languages',
  roles___project___languages___contentful_id = 'roles___project___languages___contentful_id',
  roles___project___languages___id = 'roles___project___languages___id',
  roles___project___languages___node_locale = 'roles___project___languages___node_locale',
  roles___project___languages___name = 'roles___project___languages___name',
  roles___project___languages___level = 'roles___project___languages___level',
  roles___project___languages___project = 'roles___project___languages___project',
  roles___project___languages___spaceId = 'roles___project___languages___spaceId',
  roles___project___languages___createdAt = 'roles___project___languages___createdAt',
  roles___project___languages___updatedAt = 'roles___project___languages___updatedAt',
  roles___project___languages___oss = 'roles___project___languages___oss',
  roles___project___languages___skill_map = 'roles___project___languages___skill_map',
  roles___project___languages___children = 'roles___project___languages___children',
  roles___project___tools = 'roles___project___tools',
  roles___project___tools___contentful_id = 'roles___project___tools___contentful_id',
  roles___project___tools___id = 'roles___project___tools___id',
  roles___project___tools___node_locale = 'roles___project___tools___node_locale',
  roles___project___tools___name = 'roles___project___tools___name',
  roles___project___tools___level = 'roles___project___tools___level',
  roles___project___tools___project = 'roles___project___tools___project',
  roles___project___tools___spaceId = 'roles___project___tools___spaceId',
  roles___project___tools___createdAt = 'roles___project___tools___createdAt',
  roles___project___tools___updatedAt = 'roles___project___tools___updatedAt',
  roles___project___tools___oss = 'roles___project___tools___oss',
  roles___project___tools___skill_map = 'roles___project___tools___skill_map',
  roles___project___tools___children = 'roles___project___tools___children',
  roles___project___icon___contentful_id = 'roles___project___icon___contentful_id',
  roles___project___icon___id = 'roles___project___icon___id',
  roles___project___icon___node_locale = 'roles___project___icon___node_locale',
  roles___project___icon___title = 'roles___project___icon___title',
  roles___project___icon___history = 'roles___project___icon___history',
  roles___project___icon___spaceId = 'roles___project___icon___spaceId',
  roles___project___icon___createdAt = 'roles___project___icon___createdAt',
  roles___project___icon___updatedAt = 'roles___project___icon___updatedAt',
  roles___project___icon___what_i_can_do = 'roles___project___icon___what_i_can_do',
  roles___project___icon___project = 'roles___project___icon___project',
  roles___project___icon___contact = 'roles___project___icon___contact',
  roles___project___icon___children = 'roles___project___icon___children',
  roles___project___spaceId = 'roles___project___spaceId',
  roles___project___createdAt = 'roles___project___createdAt',
  roles___project___updatedAt = 'roles___project___updatedAt',
  roles___project___sys___type = 'roles___project___sys___type',
  roles___project___sys___revision = 'roles___project___sys___revision',
  roles___project___parent___id = 'roles___project___parent___id',
  roles___project___parent___children = 'roles___project___parent___children',
  roles___project___children = 'roles___project___children',
  roles___project___children___id = 'roles___project___children___id',
  roles___project___children___children = 'roles___project___children___children',
  roles___project___internal___content = 'roles___project___internal___content',
  roles___project___internal___contentDigest = 'roles___project___internal___contentDigest',
  roles___project___internal___description = 'roles___project___internal___description',
  roles___project___internal___fieldOwners = 'roles___project___internal___fieldOwners',
  roles___project___internal___ignoreType = 'roles___project___internal___ignoreType',
  roles___project___internal___mediaType = 'roles___project___internal___mediaType',
  roles___project___internal___owner = 'roles___project___internal___owner',
  roles___project___internal___type = 'roles___project___internal___type',
  roles___oss = 'roles___oss',
  roles___oss___contentful_id = 'roles___oss___contentful_id',
  roles___oss___id = 'roles___oss___id',
  roles___oss___node_locale = 'roles___oss___node_locale',
  roles___oss___name = 'roles___oss___name',
  roles___oss___slug = 'roles___oss___slug',
  roles___oss___startDate = 'roles___oss___startDate',
  roles___oss___during = 'roles___oss___during',
  roles___oss___comment = 'roles___oss___comment',
  roles___oss___siteUrl = 'roles___oss___siteUrl',
  roles___oss___sourceUrl = 'roles___oss___sourceUrl',
  roles___oss___mainImage___contentful_id = 'roles___oss___mainImage___contentful_id',
  roles___oss___mainImage___id = 'roles___oss___mainImage___id',
  roles___oss___mainImage___spaceId = 'roles___oss___mainImage___spaceId',
  roles___oss___mainImage___createdAt = 'roles___oss___mainImage___createdAt',
  roles___oss___mainImage___updatedAt = 'roles___oss___mainImage___updatedAt',
  roles___oss___mainImage___title = 'roles___oss___mainImage___title',
  roles___oss___mainImage___description = 'roles___oss___mainImage___description',
  roles___oss___mainImage___node_locale = 'roles___oss___mainImage___node_locale',
  roles___oss___mainImage___children = 'roles___oss___mainImage___children',
  roles___oss___roles = 'roles___oss___roles',
  roles___oss___roles___contentful_id = 'roles___oss___roles___contentful_id',
  roles___oss___roles___id = 'roles___oss___roles___id',
  roles___oss___roles___node_locale = 'roles___oss___roles___node_locale',
  roles___oss___roles___name = 'roles___oss___roles___name',
  roles___oss___roles___project = 'roles___oss___roles___project',
  roles___oss___roles___oss = 'roles___oss___roles___oss',
  roles___oss___roles___spaceId = 'roles___oss___roles___spaceId',
  roles___oss___roles___createdAt = 'roles___oss___roles___createdAt',
  roles___oss___roles___updatedAt = 'roles___oss___roles___updatedAt',
  roles___oss___roles___children = 'roles___oss___roles___children',
  roles___oss___assigns = 'roles___oss___assigns',
  roles___oss___assigns___contentful_id = 'roles___oss___assigns___contentful_id',
  roles___oss___assigns___id = 'roles___oss___assigns___id',
  roles___oss___assigns___node_locale = 'roles___oss___assigns___node_locale',
  roles___oss___assigns___name = 'roles___oss___assigns___name',
  roles___oss___assigns___oss = 'roles___oss___assigns___oss',
  roles___oss___assigns___spaceId = 'roles___oss___assigns___spaceId',
  roles___oss___assigns___createdAt = 'roles___oss___assigns___createdAt',
  roles___oss___assigns___updatedAt = 'roles___oss___assigns___updatedAt',
  roles___oss___assigns___project = 'roles___oss___assigns___project',
  roles___oss___assigns___children = 'roles___oss___assigns___children',
  roles___oss___systems = 'roles___oss___systems',
  roles___oss___systems___contentful_id = 'roles___oss___systems___contentful_id',
  roles___oss___systems___id = 'roles___oss___systems___id',
  roles___oss___systems___node_locale = 'roles___oss___systems___node_locale',
  roles___oss___systems___name = 'roles___oss___systems___name',
  roles___oss___systems___level = 'roles___oss___systems___level',
  roles___oss___systems___project = 'roles___oss___systems___project',
  roles___oss___systems___spaceId = 'roles___oss___systems___spaceId',
  roles___oss___systems___createdAt = 'roles___oss___systems___createdAt',
  roles___oss___systems___updatedAt = 'roles___oss___systems___updatedAt',
  roles___oss___systems___oss = 'roles___oss___systems___oss',
  roles___oss___systems___skill_map = 'roles___oss___systems___skill_map',
  roles___oss___systems___children = 'roles___oss___systems___children',
  roles___oss___languages = 'roles___oss___languages',
  roles___oss___languages___contentful_id = 'roles___oss___languages___contentful_id',
  roles___oss___languages___id = 'roles___oss___languages___id',
  roles___oss___languages___node_locale = 'roles___oss___languages___node_locale',
  roles___oss___languages___name = 'roles___oss___languages___name',
  roles___oss___languages___level = 'roles___oss___languages___level',
  roles___oss___languages___project = 'roles___oss___languages___project',
  roles___oss___languages___spaceId = 'roles___oss___languages___spaceId',
  roles___oss___languages___createdAt = 'roles___oss___languages___createdAt',
  roles___oss___languages___updatedAt = 'roles___oss___languages___updatedAt',
  roles___oss___languages___oss = 'roles___oss___languages___oss',
  roles___oss___languages___skill_map = 'roles___oss___languages___skill_map',
  roles___oss___languages___children = 'roles___oss___languages___children',
  roles___oss___tools = 'roles___oss___tools',
  roles___oss___tools___contentful_id = 'roles___oss___tools___contentful_id',
  roles___oss___tools___id = 'roles___oss___tools___id',
  roles___oss___tools___node_locale = 'roles___oss___tools___node_locale',
  roles___oss___tools___name = 'roles___oss___tools___name',
  roles___oss___tools___level = 'roles___oss___tools___level',
  roles___oss___tools___project = 'roles___oss___tools___project',
  roles___oss___tools___spaceId = 'roles___oss___tools___spaceId',
  roles___oss___tools___createdAt = 'roles___oss___tools___createdAt',
  roles___oss___tools___updatedAt = 'roles___oss___tools___updatedAt',
  roles___oss___tools___oss = 'roles___oss___tools___oss',
  roles___oss___tools___skill_map = 'roles___oss___tools___skill_map',
  roles___oss___tools___children = 'roles___oss___tools___children',
  roles___oss___spaceId = 'roles___oss___spaceId',
  roles___oss___createdAt = 'roles___oss___createdAt',
  roles___oss___updatedAt = 'roles___oss___updatedAt',
  roles___oss___sys___type = 'roles___oss___sys___type',
  roles___oss___sys___revision = 'roles___oss___sys___revision',
  roles___oss___parent___id = 'roles___oss___parent___id',
  roles___oss___parent___children = 'roles___oss___parent___children',
  roles___oss___children = 'roles___oss___children',
  roles___oss___children___id = 'roles___oss___children___id',
  roles___oss___children___children = 'roles___oss___children___children',
  roles___oss___internal___content = 'roles___oss___internal___content',
  roles___oss___internal___contentDigest = 'roles___oss___internal___contentDigest',
  roles___oss___internal___description = 'roles___oss___internal___description',
  roles___oss___internal___fieldOwners = 'roles___oss___internal___fieldOwners',
  roles___oss___internal___ignoreType = 'roles___oss___internal___ignoreType',
  roles___oss___internal___mediaType = 'roles___oss___internal___mediaType',
  roles___oss___internal___owner = 'roles___oss___internal___owner',
  roles___oss___internal___type = 'roles___oss___internal___type',
  roles___spaceId = 'roles___spaceId',
  roles___createdAt = 'roles___createdAt',
  roles___updatedAt = 'roles___updatedAt',
  roles___sys___type = 'roles___sys___type',
  roles___sys___revision = 'roles___sys___revision',
  roles___parent___id = 'roles___parent___id',
  roles___parent___parent___id = 'roles___parent___parent___id',
  roles___parent___parent___children = 'roles___parent___parent___children',
  roles___parent___children = 'roles___parent___children',
  roles___parent___children___id = 'roles___parent___children___id',
  roles___parent___children___children = 'roles___parent___children___children',
  roles___parent___internal___content = 'roles___parent___internal___content',
  roles___parent___internal___contentDigest = 'roles___parent___internal___contentDigest',
  roles___parent___internal___description = 'roles___parent___internal___description',
  roles___parent___internal___fieldOwners = 'roles___parent___internal___fieldOwners',
  roles___parent___internal___ignoreType = 'roles___parent___internal___ignoreType',
  roles___parent___internal___mediaType = 'roles___parent___internal___mediaType',
  roles___parent___internal___owner = 'roles___parent___internal___owner',
  roles___parent___internal___type = 'roles___parent___internal___type',
  roles___children = 'roles___children',
  roles___children___id = 'roles___children___id',
  roles___children___parent___id = 'roles___children___parent___id',
  roles___children___parent___children = 'roles___children___parent___children',
  roles___children___children = 'roles___children___children',
  roles___children___children___id = 'roles___children___children___id',
  roles___children___children___children = 'roles___children___children___children',
  roles___children___internal___content = 'roles___children___internal___content',
  roles___children___internal___contentDigest = 'roles___children___internal___contentDigest',
  roles___children___internal___description = 'roles___children___internal___description',
  roles___children___internal___fieldOwners = 'roles___children___internal___fieldOwners',
  roles___children___internal___ignoreType = 'roles___children___internal___ignoreType',
  roles___children___internal___mediaType = 'roles___children___internal___mediaType',
  roles___children___internal___owner = 'roles___children___internal___owner',
  roles___children___internal___type = 'roles___children___internal___type',
  roles___internal___content = 'roles___internal___content',
  roles___internal___contentDigest = 'roles___internal___contentDigest',
  roles___internal___description = 'roles___internal___description',
  roles___internal___fieldOwners = 'roles___internal___fieldOwners',
  roles___internal___ignoreType = 'roles___internal___ignoreType',
  roles___internal___mediaType = 'roles___internal___mediaType',
  roles___internal___owner = 'roles___internal___owner',
  roles___internal___type = 'roles___internal___type',
  assigns = 'assigns',
  assigns___contentful_id = 'assigns___contentful_id',
  assigns___id = 'assigns___id',
  assigns___node_locale = 'assigns___node_locale',
  assigns___name = 'assigns___name',
  assigns___oss = 'assigns___oss',
  assigns___oss___contentful_id = 'assigns___oss___contentful_id',
  assigns___oss___id = 'assigns___oss___id',
  assigns___oss___node_locale = 'assigns___oss___node_locale',
  assigns___oss___name = 'assigns___oss___name',
  assigns___oss___slug = 'assigns___oss___slug',
  assigns___oss___startDate = 'assigns___oss___startDate',
  assigns___oss___during = 'assigns___oss___during',
  assigns___oss___comment = 'assigns___oss___comment',
  assigns___oss___siteUrl = 'assigns___oss___siteUrl',
  assigns___oss___sourceUrl = 'assigns___oss___sourceUrl',
  assigns___oss___mainImage___contentful_id = 'assigns___oss___mainImage___contentful_id',
  assigns___oss___mainImage___id = 'assigns___oss___mainImage___id',
  assigns___oss___mainImage___spaceId = 'assigns___oss___mainImage___spaceId',
  assigns___oss___mainImage___createdAt = 'assigns___oss___mainImage___createdAt',
  assigns___oss___mainImage___updatedAt = 'assigns___oss___mainImage___updatedAt',
  assigns___oss___mainImage___title = 'assigns___oss___mainImage___title',
  assigns___oss___mainImage___description = 'assigns___oss___mainImage___description',
  assigns___oss___mainImage___node_locale = 'assigns___oss___mainImage___node_locale',
  assigns___oss___mainImage___children = 'assigns___oss___mainImage___children',
  assigns___oss___roles = 'assigns___oss___roles',
  assigns___oss___roles___contentful_id = 'assigns___oss___roles___contentful_id',
  assigns___oss___roles___id = 'assigns___oss___roles___id',
  assigns___oss___roles___node_locale = 'assigns___oss___roles___node_locale',
  assigns___oss___roles___name = 'assigns___oss___roles___name',
  assigns___oss___roles___project = 'assigns___oss___roles___project',
  assigns___oss___roles___oss = 'assigns___oss___roles___oss',
  assigns___oss___roles___spaceId = 'assigns___oss___roles___spaceId',
  assigns___oss___roles___createdAt = 'assigns___oss___roles___createdAt',
  assigns___oss___roles___updatedAt = 'assigns___oss___roles___updatedAt',
  assigns___oss___roles___children = 'assigns___oss___roles___children',
  assigns___oss___assigns = 'assigns___oss___assigns',
  assigns___oss___assigns___contentful_id = 'assigns___oss___assigns___contentful_id',
  assigns___oss___assigns___id = 'assigns___oss___assigns___id',
  assigns___oss___assigns___node_locale = 'assigns___oss___assigns___node_locale',
  assigns___oss___assigns___name = 'assigns___oss___assigns___name',
  assigns___oss___assigns___oss = 'assigns___oss___assigns___oss',
  assigns___oss___assigns___spaceId = 'assigns___oss___assigns___spaceId',
  assigns___oss___assigns___createdAt = 'assigns___oss___assigns___createdAt',
  assigns___oss___assigns___updatedAt = 'assigns___oss___assigns___updatedAt',
  assigns___oss___assigns___project = 'assigns___oss___assigns___project',
  assigns___oss___assigns___children = 'assigns___oss___assigns___children',
  assigns___oss___systems = 'assigns___oss___systems',
  assigns___oss___systems___contentful_id = 'assigns___oss___systems___contentful_id',
  assigns___oss___systems___id = 'assigns___oss___systems___id',
  assigns___oss___systems___node_locale = 'assigns___oss___systems___node_locale',
  assigns___oss___systems___name = 'assigns___oss___systems___name',
  assigns___oss___systems___level = 'assigns___oss___systems___level',
  assigns___oss___systems___project = 'assigns___oss___systems___project',
  assigns___oss___systems___spaceId = 'assigns___oss___systems___spaceId',
  assigns___oss___systems___createdAt = 'assigns___oss___systems___createdAt',
  assigns___oss___systems___updatedAt = 'assigns___oss___systems___updatedAt',
  assigns___oss___systems___oss = 'assigns___oss___systems___oss',
  assigns___oss___systems___skill_map = 'assigns___oss___systems___skill_map',
  assigns___oss___systems___children = 'assigns___oss___systems___children',
  assigns___oss___languages = 'assigns___oss___languages',
  assigns___oss___languages___contentful_id = 'assigns___oss___languages___contentful_id',
  assigns___oss___languages___id = 'assigns___oss___languages___id',
  assigns___oss___languages___node_locale = 'assigns___oss___languages___node_locale',
  assigns___oss___languages___name = 'assigns___oss___languages___name',
  assigns___oss___languages___level = 'assigns___oss___languages___level',
  assigns___oss___languages___project = 'assigns___oss___languages___project',
  assigns___oss___languages___spaceId = 'assigns___oss___languages___spaceId',
  assigns___oss___languages___createdAt = 'assigns___oss___languages___createdAt',
  assigns___oss___languages___updatedAt = 'assigns___oss___languages___updatedAt',
  assigns___oss___languages___oss = 'assigns___oss___languages___oss',
  assigns___oss___languages___skill_map = 'assigns___oss___languages___skill_map',
  assigns___oss___languages___children = 'assigns___oss___languages___children',
  assigns___oss___tools = 'assigns___oss___tools',
  assigns___oss___tools___contentful_id = 'assigns___oss___tools___contentful_id',
  assigns___oss___tools___id = 'assigns___oss___tools___id',
  assigns___oss___tools___node_locale = 'assigns___oss___tools___node_locale',
  assigns___oss___tools___name = 'assigns___oss___tools___name',
  assigns___oss___tools___level = 'assigns___oss___tools___level',
  assigns___oss___tools___project = 'assigns___oss___tools___project',
  assigns___oss___tools___spaceId = 'assigns___oss___tools___spaceId',
  assigns___oss___tools___createdAt = 'assigns___oss___tools___createdAt',
  assigns___oss___tools___updatedAt = 'assigns___oss___tools___updatedAt',
  assigns___oss___tools___oss = 'assigns___oss___tools___oss',
  assigns___oss___tools___skill_map = 'assigns___oss___tools___skill_map',
  assigns___oss___tools___children = 'assigns___oss___tools___children',
  assigns___oss___spaceId = 'assigns___oss___spaceId',
  assigns___oss___createdAt = 'assigns___oss___createdAt',
  assigns___oss___updatedAt = 'assigns___oss___updatedAt',
  assigns___oss___sys___type = 'assigns___oss___sys___type',
  assigns___oss___sys___revision = 'assigns___oss___sys___revision',
  assigns___oss___parent___id = 'assigns___oss___parent___id',
  assigns___oss___parent___children = 'assigns___oss___parent___children',
  assigns___oss___children = 'assigns___oss___children',
  assigns___oss___children___id = 'assigns___oss___children___id',
  assigns___oss___children___children = 'assigns___oss___children___children',
  assigns___oss___internal___content = 'assigns___oss___internal___content',
  assigns___oss___internal___contentDigest = 'assigns___oss___internal___contentDigest',
  assigns___oss___internal___description = 'assigns___oss___internal___description',
  assigns___oss___internal___fieldOwners = 'assigns___oss___internal___fieldOwners',
  assigns___oss___internal___ignoreType = 'assigns___oss___internal___ignoreType',
  assigns___oss___internal___mediaType = 'assigns___oss___internal___mediaType',
  assigns___oss___internal___owner = 'assigns___oss___internal___owner',
  assigns___oss___internal___type = 'assigns___oss___internal___type',
  assigns___spaceId = 'assigns___spaceId',
  assigns___createdAt = 'assigns___createdAt',
  assigns___updatedAt = 'assigns___updatedAt',
  assigns___sys___type = 'assigns___sys___type',
  assigns___sys___revision = 'assigns___sys___revision',
  assigns___project = 'assigns___project',
  assigns___project___contentful_id = 'assigns___project___contentful_id',
  assigns___project___id = 'assigns___project___id',
  assigns___project___node_locale = 'assigns___project___node_locale',
  assigns___project___name = 'assigns___project___name',
  assigns___project___startDate = 'assigns___project___startDate',
  assigns___project___during = 'assigns___project___during',
  assigns___project___comment = 'assigns___project___comment',
  assigns___project___roles = 'assigns___project___roles',
  assigns___project___roles___contentful_id = 'assigns___project___roles___contentful_id',
  assigns___project___roles___id = 'assigns___project___roles___id',
  assigns___project___roles___node_locale = 'assigns___project___roles___node_locale',
  assigns___project___roles___name = 'assigns___project___roles___name',
  assigns___project___roles___project = 'assigns___project___roles___project',
  assigns___project___roles___oss = 'assigns___project___roles___oss',
  assigns___project___roles___spaceId = 'assigns___project___roles___spaceId',
  assigns___project___roles___createdAt = 'assigns___project___roles___createdAt',
  assigns___project___roles___updatedAt = 'assigns___project___roles___updatedAt',
  assigns___project___roles___children = 'assigns___project___roles___children',
  assigns___project___assigns = 'assigns___project___assigns',
  assigns___project___assigns___contentful_id = 'assigns___project___assigns___contentful_id',
  assigns___project___assigns___id = 'assigns___project___assigns___id',
  assigns___project___assigns___node_locale = 'assigns___project___assigns___node_locale',
  assigns___project___assigns___name = 'assigns___project___assigns___name',
  assigns___project___assigns___oss = 'assigns___project___assigns___oss',
  assigns___project___assigns___spaceId = 'assigns___project___assigns___spaceId',
  assigns___project___assigns___createdAt = 'assigns___project___assigns___createdAt',
  assigns___project___assigns___updatedAt = 'assigns___project___assigns___updatedAt',
  assigns___project___assigns___project = 'assigns___project___assigns___project',
  assigns___project___assigns___children = 'assigns___project___assigns___children',
  assigns___project___systems = 'assigns___project___systems',
  assigns___project___systems___contentful_id = 'assigns___project___systems___contentful_id',
  assigns___project___systems___id = 'assigns___project___systems___id',
  assigns___project___systems___node_locale = 'assigns___project___systems___node_locale',
  assigns___project___systems___name = 'assigns___project___systems___name',
  assigns___project___systems___level = 'assigns___project___systems___level',
  assigns___project___systems___project = 'assigns___project___systems___project',
  assigns___project___systems___spaceId = 'assigns___project___systems___spaceId',
  assigns___project___systems___createdAt = 'assigns___project___systems___createdAt',
  assigns___project___systems___updatedAt = 'assigns___project___systems___updatedAt',
  assigns___project___systems___oss = 'assigns___project___systems___oss',
  assigns___project___systems___skill_map = 'assigns___project___systems___skill_map',
  assigns___project___systems___children = 'assigns___project___systems___children',
  assigns___project___languages = 'assigns___project___languages',
  assigns___project___languages___contentful_id = 'assigns___project___languages___contentful_id',
  assigns___project___languages___id = 'assigns___project___languages___id',
  assigns___project___languages___node_locale = 'assigns___project___languages___node_locale',
  assigns___project___languages___name = 'assigns___project___languages___name',
  assigns___project___languages___level = 'assigns___project___languages___level',
  assigns___project___languages___project = 'assigns___project___languages___project',
  assigns___project___languages___spaceId = 'assigns___project___languages___spaceId',
  assigns___project___languages___createdAt = 'assigns___project___languages___createdAt',
  assigns___project___languages___updatedAt = 'assigns___project___languages___updatedAt',
  assigns___project___languages___oss = 'assigns___project___languages___oss',
  assigns___project___languages___skill_map = 'assigns___project___languages___skill_map',
  assigns___project___languages___children = 'assigns___project___languages___children',
  assigns___project___tools = 'assigns___project___tools',
  assigns___project___tools___contentful_id = 'assigns___project___tools___contentful_id',
  assigns___project___tools___id = 'assigns___project___tools___id',
  assigns___project___tools___node_locale = 'assigns___project___tools___node_locale',
  assigns___project___tools___name = 'assigns___project___tools___name',
  assigns___project___tools___level = 'assigns___project___tools___level',
  assigns___project___tools___project = 'assigns___project___tools___project',
  assigns___project___tools___spaceId = 'assigns___project___tools___spaceId',
  assigns___project___tools___createdAt = 'assigns___project___tools___createdAt',
  assigns___project___tools___updatedAt = 'assigns___project___tools___updatedAt',
  assigns___project___tools___oss = 'assigns___project___tools___oss',
  assigns___project___tools___skill_map = 'assigns___project___tools___skill_map',
  assigns___project___tools___children = 'assigns___project___tools___children',
  assigns___project___icon___contentful_id = 'assigns___project___icon___contentful_id',
  assigns___project___icon___id = 'assigns___project___icon___id',
  assigns___project___icon___node_locale = 'assigns___project___icon___node_locale',
  assigns___project___icon___title = 'assigns___project___icon___title',
  assigns___project___icon___history = 'assigns___project___icon___history',
  assigns___project___icon___spaceId = 'assigns___project___icon___spaceId',
  assigns___project___icon___createdAt = 'assigns___project___icon___createdAt',
  assigns___project___icon___updatedAt = 'assigns___project___icon___updatedAt',
  assigns___project___icon___what_i_can_do = 'assigns___project___icon___what_i_can_do',
  assigns___project___icon___project = 'assigns___project___icon___project',
  assigns___project___icon___contact = 'assigns___project___icon___contact',
  assigns___project___icon___children = 'assigns___project___icon___children',
  assigns___project___spaceId = 'assigns___project___spaceId',
  assigns___project___createdAt = 'assigns___project___createdAt',
  assigns___project___updatedAt = 'assigns___project___updatedAt',
  assigns___project___sys___type = 'assigns___project___sys___type',
  assigns___project___sys___revision = 'assigns___project___sys___revision',
  assigns___project___parent___id = 'assigns___project___parent___id',
  assigns___project___parent___children = 'assigns___project___parent___children',
  assigns___project___children = 'assigns___project___children',
  assigns___project___children___id = 'assigns___project___children___id',
  assigns___project___children___children = 'assigns___project___children___children',
  assigns___project___internal___content = 'assigns___project___internal___content',
  assigns___project___internal___contentDigest = 'assigns___project___internal___contentDigest',
  assigns___project___internal___description = 'assigns___project___internal___description',
  assigns___project___internal___fieldOwners = 'assigns___project___internal___fieldOwners',
  assigns___project___internal___ignoreType = 'assigns___project___internal___ignoreType',
  assigns___project___internal___mediaType = 'assigns___project___internal___mediaType',
  assigns___project___internal___owner = 'assigns___project___internal___owner',
  assigns___project___internal___type = 'assigns___project___internal___type',
  assigns___parent___id = 'assigns___parent___id',
  assigns___parent___parent___id = 'assigns___parent___parent___id',
  assigns___parent___parent___children = 'assigns___parent___parent___children',
  assigns___parent___children = 'assigns___parent___children',
  assigns___parent___children___id = 'assigns___parent___children___id',
  assigns___parent___children___children = 'assigns___parent___children___children',
  assigns___parent___internal___content = 'assigns___parent___internal___content',
  assigns___parent___internal___contentDigest = 'assigns___parent___internal___contentDigest',
  assigns___parent___internal___description = 'assigns___parent___internal___description',
  assigns___parent___internal___fieldOwners = 'assigns___parent___internal___fieldOwners',
  assigns___parent___internal___ignoreType = 'assigns___parent___internal___ignoreType',
  assigns___parent___internal___mediaType = 'assigns___parent___internal___mediaType',
  assigns___parent___internal___owner = 'assigns___parent___internal___owner',
  assigns___parent___internal___type = 'assigns___parent___internal___type',
  assigns___children = 'assigns___children',
  assigns___children___id = 'assigns___children___id',
  assigns___children___parent___id = 'assigns___children___parent___id',
  assigns___children___parent___children = 'assigns___children___parent___children',
  assigns___children___children = 'assigns___children___children',
  assigns___children___children___id = 'assigns___children___children___id',
  assigns___children___children___children = 'assigns___children___children___children',
  assigns___children___internal___content = 'assigns___children___internal___content',
  assigns___children___internal___contentDigest = 'assigns___children___internal___contentDigest',
  assigns___children___internal___description = 'assigns___children___internal___description',
  assigns___children___internal___fieldOwners = 'assigns___children___internal___fieldOwners',
  assigns___children___internal___ignoreType = 'assigns___children___internal___ignoreType',
  assigns___children___internal___mediaType = 'assigns___children___internal___mediaType',
  assigns___children___internal___owner = 'assigns___children___internal___owner',
  assigns___children___internal___type = 'assigns___children___internal___type',
  assigns___internal___content = 'assigns___internal___content',
  assigns___internal___contentDigest = 'assigns___internal___contentDigest',
  assigns___internal___description = 'assigns___internal___description',
  assigns___internal___fieldOwners = 'assigns___internal___fieldOwners',
  assigns___internal___ignoreType = 'assigns___internal___ignoreType',
  assigns___internal___mediaType = 'assigns___internal___mediaType',
  assigns___internal___owner = 'assigns___internal___owner',
  assigns___internal___type = 'assigns___internal___type',
  systems = 'systems',
  systems___contentful_id = 'systems___contentful_id',
  systems___id = 'systems___id',
  systems___node_locale = 'systems___node_locale',
  systems___name = 'systems___name',
  systems___level = 'systems___level',
  systems___project = 'systems___project',
  systems___project___contentful_id = 'systems___project___contentful_id',
  systems___project___id = 'systems___project___id',
  systems___project___node_locale = 'systems___project___node_locale',
  systems___project___name = 'systems___project___name',
  systems___project___startDate = 'systems___project___startDate',
  systems___project___during = 'systems___project___during',
  systems___project___comment = 'systems___project___comment',
  systems___project___roles = 'systems___project___roles',
  systems___project___roles___contentful_id = 'systems___project___roles___contentful_id',
  systems___project___roles___id = 'systems___project___roles___id',
  systems___project___roles___node_locale = 'systems___project___roles___node_locale',
  systems___project___roles___name = 'systems___project___roles___name',
  systems___project___roles___project = 'systems___project___roles___project',
  systems___project___roles___oss = 'systems___project___roles___oss',
  systems___project___roles___spaceId = 'systems___project___roles___spaceId',
  systems___project___roles___createdAt = 'systems___project___roles___createdAt',
  systems___project___roles___updatedAt = 'systems___project___roles___updatedAt',
  systems___project___roles___children = 'systems___project___roles___children',
  systems___project___assigns = 'systems___project___assigns',
  systems___project___assigns___contentful_id = 'systems___project___assigns___contentful_id',
  systems___project___assigns___id = 'systems___project___assigns___id',
  systems___project___assigns___node_locale = 'systems___project___assigns___node_locale',
  systems___project___assigns___name = 'systems___project___assigns___name',
  systems___project___assigns___oss = 'systems___project___assigns___oss',
  systems___project___assigns___spaceId = 'systems___project___assigns___spaceId',
  systems___project___assigns___createdAt = 'systems___project___assigns___createdAt',
  systems___project___assigns___updatedAt = 'systems___project___assigns___updatedAt',
  systems___project___assigns___project = 'systems___project___assigns___project',
  systems___project___assigns___children = 'systems___project___assigns___children',
  systems___project___systems = 'systems___project___systems',
  systems___project___systems___contentful_id = 'systems___project___systems___contentful_id',
  systems___project___systems___id = 'systems___project___systems___id',
  systems___project___systems___node_locale = 'systems___project___systems___node_locale',
  systems___project___systems___name = 'systems___project___systems___name',
  systems___project___systems___level = 'systems___project___systems___level',
  systems___project___systems___project = 'systems___project___systems___project',
  systems___project___systems___spaceId = 'systems___project___systems___spaceId',
  systems___project___systems___createdAt = 'systems___project___systems___createdAt',
  systems___project___systems___updatedAt = 'systems___project___systems___updatedAt',
  systems___project___systems___oss = 'systems___project___systems___oss',
  systems___project___systems___skill_map = 'systems___project___systems___skill_map',
  systems___project___systems___children = 'systems___project___systems___children',
  systems___project___languages = 'systems___project___languages',
  systems___project___languages___contentful_id = 'systems___project___languages___contentful_id',
  systems___project___languages___id = 'systems___project___languages___id',
  systems___project___languages___node_locale = 'systems___project___languages___node_locale',
  systems___project___languages___name = 'systems___project___languages___name',
  systems___project___languages___level = 'systems___project___languages___level',
  systems___project___languages___project = 'systems___project___languages___project',
  systems___project___languages___spaceId = 'systems___project___languages___spaceId',
  systems___project___languages___createdAt = 'systems___project___languages___createdAt',
  systems___project___languages___updatedAt = 'systems___project___languages___updatedAt',
  systems___project___languages___oss = 'systems___project___languages___oss',
  systems___project___languages___skill_map = 'systems___project___languages___skill_map',
  systems___project___languages___children = 'systems___project___languages___children',
  systems___project___tools = 'systems___project___tools',
  systems___project___tools___contentful_id = 'systems___project___tools___contentful_id',
  systems___project___tools___id = 'systems___project___tools___id',
  systems___project___tools___node_locale = 'systems___project___tools___node_locale',
  systems___project___tools___name = 'systems___project___tools___name',
  systems___project___tools___level = 'systems___project___tools___level',
  systems___project___tools___project = 'systems___project___tools___project',
  systems___project___tools___spaceId = 'systems___project___tools___spaceId',
  systems___project___tools___createdAt = 'systems___project___tools___createdAt',
  systems___project___tools___updatedAt = 'systems___project___tools___updatedAt',
  systems___project___tools___oss = 'systems___project___tools___oss',
  systems___project___tools___skill_map = 'systems___project___tools___skill_map',
  systems___project___tools___children = 'systems___project___tools___children',
  systems___project___icon___contentful_id = 'systems___project___icon___contentful_id',
  systems___project___icon___id = 'systems___project___icon___id',
  systems___project___icon___node_locale = 'systems___project___icon___node_locale',
  systems___project___icon___title = 'systems___project___icon___title',
  systems___project___icon___history = 'systems___project___icon___history',
  systems___project___icon___spaceId = 'systems___project___icon___spaceId',
  systems___project___icon___createdAt = 'systems___project___icon___createdAt',
  systems___project___icon___updatedAt = 'systems___project___icon___updatedAt',
  systems___project___icon___what_i_can_do = 'systems___project___icon___what_i_can_do',
  systems___project___icon___project = 'systems___project___icon___project',
  systems___project___icon___contact = 'systems___project___icon___contact',
  systems___project___icon___children = 'systems___project___icon___children',
  systems___project___spaceId = 'systems___project___spaceId',
  systems___project___createdAt = 'systems___project___createdAt',
  systems___project___updatedAt = 'systems___project___updatedAt',
  systems___project___sys___type = 'systems___project___sys___type',
  systems___project___sys___revision = 'systems___project___sys___revision',
  systems___project___parent___id = 'systems___project___parent___id',
  systems___project___parent___children = 'systems___project___parent___children',
  systems___project___children = 'systems___project___children',
  systems___project___children___id = 'systems___project___children___id',
  systems___project___children___children = 'systems___project___children___children',
  systems___project___internal___content = 'systems___project___internal___content',
  systems___project___internal___contentDigest = 'systems___project___internal___contentDigest',
  systems___project___internal___description = 'systems___project___internal___description',
  systems___project___internal___fieldOwners = 'systems___project___internal___fieldOwners',
  systems___project___internal___ignoreType = 'systems___project___internal___ignoreType',
  systems___project___internal___mediaType = 'systems___project___internal___mediaType',
  systems___project___internal___owner = 'systems___project___internal___owner',
  systems___project___internal___type = 'systems___project___internal___type',
  systems___spaceId = 'systems___spaceId',
  systems___createdAt = 'systems___createdAt',
  systems___updatedAt = 'systems___updatedAt',
  systems___sys___type = 'systems___sys___type',
  systems___sys___revision = 'systems___sys___revision',
  systems___oss = 'systems___oss',
  systems___oss___contentful_id = 'systems___oss___contentful_id',
  systems___oss___id = 'systems___oss___id',
  systems___oss___node_locale = 'systems___oss___node_locale',
  systems___oss___name = 'systems___oss___name',
  systems___oss___slug = 'systems___oss___slug',
  systems___oss___startDate = 'systems___oss___startDate',
  systems___oss___during = 'systems___oss___during',
  systems___oss___comment = 'systems___oss___comment',
  systems___oss___siteUrl = 'systems___oss___siteUrl',
  systems___oss___sourceUrl = 'systems___oss___sourceUrl',
  systems___oss___mainImage___contentful_id = 'systems___oss___mainImage___contentful_id',
  systems___oss___mainImage___id = 'systems___oss___mainImage___id',
  systems___oss___mainImage___spaceId = 'systems___oss___mainImage___spaceId',
  systems___oss___mainImage___createdAt = 'systems___oss___mainImage___createdAt',
  systems___oss___mainImage___updatedAt = 'systems___oss___mainImage___updatedAt',
  systems___oss___mainImage___title = 'systems___oss___mainImage___title',
  systems___oss___mainImage___description = 'systems___oss___mainImage___description',
  systems___oss___mainImage___node_locale = 'systems___oss___mainImage___node_locale',
  systems___oss___mainImage___children = 'systems___oss___mainImage___children',
  systems___oss___roles = 'systems___oss___roles',
  systems___oss___roles___contentful_id = 'systems___oss___roles___contentful_id',
  systems___oss___roles___id = 'systems___oss___roles___id',
  systems___oss___roles___node_locale = 'systems___oss___roles___node_locale',
  systems___oss___roles___name = 'systems___oss___roles___name',
  systems___oss___roles___project = 'systems___oss___roles___project',
  systems___oss___roles___oss = 'systems___oss___roles___oss',
  systems___oss___roles___spaceId = 'systems___oss___roles___spaceId',
  systems___oss___roles___createdAt = 'systems___oss___roles___createdAt',
  systems___oss___roles___updatedAt = 'systems___oss___roles___updatedAt',
  systems___oss___roles___children = 'systems___oss___roles___children',
  systems___oss___assigns = 'systems___oss___assigns',
  systems___oss___assigns___contentful_id = 'systems___oss___assigns___contentful_id',
  systems___oss___assigns___id = 'systems___oss___assigns___id',
  systems___oss___assigns___node_locale = 'systems___oss___assigns___node_locale',
  systems___oss___assigns___name = 'systems___oss___assigns___name',
  systems___oss___assigns___oss = 'systems___oss___assigns___oss',
  systems___oss___assigns___spaceId = 'systems___oss___assigns___spaceId',
  systems___oss___assigns___createdAt = 'systems___oss___assigns___createdAt',
  systems___oss___assigns___updatedAt = 'systems___oss___assigns___updatedAt',
  systems___oss___assigns___project = 'systems___oss___assigns___project',
  systems___oss___assigns___children = 'systems___oss___assigns___children',
  systems___oss___systems = 'systems___oss___systems',
  systems___oss___systems___contentful_id = 'systems___oss___systems___contentful_id',
  systems___oss___systems___id = 'systems___oss___systems___id',
  systems___oss___systems___node_locale = 'systems___oss___systems___node_locale',
  systems___oss___systems___name = 'systems___oss___systems___name',
  systems___oss___systems___level = 'systems___oss___systems___level',
  systems___oss___systems___project = 'systems___oss___systems___project',
  systems___oss___systems___spaceId = 'systems___oss___systems___spaceId',
  systems___oss___systems___createdAt = 'systems___oss___systems___createdAt',
  systems___oss___systems___updatedAt = 'systems___oss___systems___updatedAt',
  systems___oss___systems___oss = 'systems___oss___systems___oss',
  systems___oss___systems___skill_map = 'systems___oss___systems___skill_map',
  systems___oss___systems___children = 'systems___oss___systems___children',
  systems___oss___languages = 'systems___oss___languages',
  systems___oss___languages___contentful_id = 'systems___oss___languages___contentful_id',
  systems___oss___languages___id = 'systems___oss___languages___id',
  systems___oss___languages___node_locale = 'systems___oss___languages___node_locale',
  systems___oss___languages___name = 'systems___oss___languages___name',
  systems___oss___languages___level = 'systems___oss___languages___level',
  systems___oss___languages___project = 'systems___oss___languages___project',
  systems___oss___languages___spaceId = 'systems___oss___languages___spaceId',
  systems___oss___languages___createdAt = 'systems___oss___languages___createdAt',
  systems___oss___languages___updatedAt = 'systems___oss___languages___updatedAt',
  systems___oss___languages___oss = 'systems___oss___languages___oss',
  systems___oss___languages___skill_map = 'systems___oss___languages___skill_map',
  systems___oss___languages___children = 'systems___oss___languages___children',
  systems___oss___tools = 'systems___oss___tools',
  systems___oss___tools___contentful_id = 'systems___oss___tools___contentful_id',
  systems___oss___tools___id = 'systems___oss___tools___id',
  systems___oss___tools___node_locale = 'systems___oss___tools___node_locale',
  systems___oss___tools___name = 'systems___oss___tools___name',
  systems___oss___tools___level = 'systems___oss___tools___level',
  systems___oss___tools___project = 'systems___oss___tools___project',
  systems___oss___tools___spaceId = 'systems___oss___tools___spaceId',
  systems___oss___tools___createdAt = 'systems___oss___tools___createdAt',
  systems___oss___tools___updatedAt = 'systems___oss___tools___updatedAt',
  systems___oss___tools___oss = 'systems___oss___tools___oss',
  systems___oss___tools___skill_map = 'systems___oss___tools___skill_map',
  systems___oss___tools___children = 'systems___oss___tools___children',
  systems___oss___spaceId = 'systems___oss___spaceId',
  systems___oss___createdAt = 'systems___oss___createdAt',
  systems___oss___updatedAt = 'systems___oss___updatedAt',
  systems___oss___sys___type = 'systems___oss___sys___type',
  systems___oss___sys___revision = 'systems___oss___sys___revision',
  systems___oss___parent___id = 'systems___oss___parent___id',
  systems___oss___parent___children = 'systems___oss___parent___children',
  systems___oss___children = 'systems___oss___children',
  systems___oss___children___id = 'systems___oss___children___id',
  systems___oss___children___children = 'systems___oss___children___children',
  systems___oss___internal___content = 'systems___oss___internal___content',
  systems___oss___internal___contentDigest = 'systems___oss___internal___contentDigest',
  systems___oss___internal___description = 'systems___oss___internal___description',
  systems___oss___internal___fieldOwners = 'systems___oss___internal___fieldOwners',
  systems___oss___internal___ignoreType = 'systems___oss___internal___ignoreType',
  systems___oss___internal___mediaType = 'systems___oss___internal___mediaType',
  systems___oss___internal___owner = 'systems___oss___internal___owner',
  systems___oss___internal___type = 'systems___oss___internal___type',
  systems___skill_map = 'systems___skill_map',
  systems___skill_map___contentful_id = 'systems___skill_map___contentful_id',
  systems___skill_map___id = 'systems___skill_map___id',
  systems___skill_map___node_locale = 'systems___skill_map___node_locale',
  systems___skill_map___sort = 'systems___skill_map___sort',
  systems___skill_map___name = 'systems___skill_map___name',
  systems___skill_map___expanded = 'systems___skill_map___expanded',
  systems___skill_map___skills = 'systems___skill_map___skills',
  systems___skill_map___skills___contentful_id = 'systems___skill_map___skills___contentful_id',
  systems___skill_map___skills___id = 'systems___skill_map___skills___id',
  systems___skill_map___skills___node_locale = 'systems___skill_map___skills___node_locale',
  systems___skill_map___skills___name = 'systems___skill_map___skills___name',
  systems___skill_map___skills___level = 'systems___skill_map___skills___level',
  systems___skill_map___skills___project = 'systems___skill_map___skills___project',
  systems___skill_map___skills___spaceId = 'systems___skill_map___skills___spaceId',
  systems___skill_map___skills___createdAt = 'systems___skill_map___skills___createdAt',
  systems___skill_map___skills___updatedAt = 'systems___skill_map___skills___updatedAt',
  systems___skill_map___skills___oss = 'systems___skill_map___skills___oss',
  systems___skill_map___skills___skill_map = 'systems___skill_map___skills___skill_map',
  systems___skill_map___skills___children = 'systems___skill_map___skills___children',
  systems___skill_map___spaceId = 'systems___skill_map___spaceId',
  systems___skill_map___createdAt = 'systems___skill_map___createdAt',
  systems___skill_map___updatedAt = 'systems___skill_map___updatedAt',
  systems___skill_map___sys___type = 'systems___skill_map___sys___type',
  systems___skill_map___sys___revision = 'systems___skill_map___sys___revision',
  systems___skill_map___parent___id = 'systems___skill_map___parent___id',
  systems___skill_map___parent___children = 'systems___skill_map___parent___children',
  systems___skill_map___children = 'systems___skill_map___children',
  systems___skill_map___children___id = 'systems___skill_map___children___id',
  systems___skill_map___children___children = 'systems___skill_map___children___children',
  systems___skill_map___internal___content = 'systems___skill_map___internal___content',
  systems___skill_map___internal___contentDigest = 'systems___skill_map___internal___contentDigest',
  systems___skill_map___internal___description = 'systems___skill_map___internal___description',
  systems___skill_map___internal___fieldOwners = 'systems___skill_map___internal___fieldOwners',
  systems___skill_map___internal___ignoreType = 'systems___skill_map___internal___ignoreType',
  systems___skill_map___internal___mediaType = 'systems___skill_map___internal___mediaType',
  systems___skill_map___internal___owner = 'systems___skill_map___internal___owner',
  systems___skill_map___internal___type = 'systems___skill_map___internal___type',
  systems___parent___id = 'systems___parent___id',
  systems___parent___parent___id = 'systems___parent___parent___id',
  systems___parent___parent___children = 'systems___parent___parent___children',
  systems___parent___children = 'systems___parent___children',
  systems___parent___children___id = 'systems___parent___children___id',
  systems___parent___children___children = 'systems___parent___children___children',
  systems___parent___internal___content = 'systems___parent___internal___content',
  systems___parent___internal___contentDigest = 'systems___parent___internal___contentDigest',
  systems___parent___internal___description = 'systems___parent___internal___description',
  systems___parent___internal___fieldOwners = 'systems___parent___internal___fieldOwners',
  systems___parent___internal___ignoreType = 'systems___parent___internal___ignoreType',
  systems___parent___internal___mediaType = 'systems___parent___internal___mediaType',
  systems___parent___internal___owner = 'systems___parent___internal___owner',
  systems___parent___internal___type = 'systems___parent___internal___type',
  systems___children = 'systems___children',
  systems___children___id = 'systems___children___id',
  systems___children___parent___id = 'systems___children___parent___id',
  systems___children___parent___children = 'systems___children___parent___children',
  systems___children___children = 'systems___children___children',
  systems___children___children___id = 'systems___children___children___id',
  systems___children___children___children = 'systems___children___children___children',
  systems___children___internal___content = 'systems___children___internal___content',
  systems___children___internal___contentDigest = 'systems___children___internal___contentDigest',
  systems___children___internal___description = 'systems___children___internal___description',
  systems___children___internal___fieldOwners = 'systems___children___internal___fieldOwners',
  systems___children___internal___ignoreType = 'systems___children___internal___ignoreType',
  systems___children___internal___mediaType = 'systems___children___internal___mediaType',
  systems___children___internal___owner = 'systems___children___internal___owner',
  systems___children___internal___type = 'systems___children___internal___type',
  systems___internal___content = 'systems___internal___content',
  systems___internal___contentDigest = 'systems___internal___contentDigest',
  systems___internal___description = 'systems___internal___description',
  systems___internal___fieldOwners = 'systems___internal___fieldOwners',
  systems___internal___ignoreType = 'systems___internal___ignoreType',
  systems___internal___mediaType = 'systems___internal___mediaType',
  systems___internal___owner = 'systems___internal___owner',
  systems___internal___type = 'systems___internal___type',
  languages = 'languages',
  languages___contentful_id = 'languages___contentful_id',
  languages___id = 'languages___id',
  languages___node_locale = 'languages___node_locale',
  languages___name = 'languages___name',
  languages___level = 'languages___level',
  languages___project = 'languages___project',
  languages___project___contentful_id = 'languages___project___contentful_id',
  languages___project___id = 'languages___project___id',
  languages___project___node_locale = 'languages___project___node_locale',
  languages___project___name = 'languages___project___name',
  languages___project___startDate = 'languages___project___startDate',
  languages___project___during = 'languages___project___during',
  languages___project___comment = 'languages___project___comment',
  languages___project___roles = 'languages___project___roles',
  languages___project___roles___contentful_id = 'languages___project___roles___contentful_id',
  languages___project___roles___id = 'languages___project___roles___id',
  languages___project___roles___node_locale = 'languages___project___roles___node_locale',
  languages___project___roles___name = 'languages___project___roles___name',
  languages___project___roles___project = 'languages___project___roles___project',
  languages___project___roles___oss = 'languages___project___roles___oss',
  languages___project___roles___spaceId = 'languages___project___roles___spaceId',
  languages___project___roles___createdAt = 'languages___project___roles___createdAt',
  languages___project___roles___updatedAt = 'languages___project___roles___updatedAt',
  languages___project___roles___children = 'languages___project___roles___children',
  languages___project___assigns = 'languages___project___assigns',
  languages___project___assigns___contentful_id = 'languages___project___assigns___contentful_id',
  languages___project___assigns___id = 'languages___project___assigns___id',
  languages___project___assigns___node_locale = 'languages___project___assigns___node_locale',
  languages___project___assigns___name = 'languages___project___assigns___name',
  languages___project___assigns___oss = 'languages___project___assigns___oss',
  languages___project___assigns___spaceId = 'languages___project___assigns___spaceId',
  languages___project___assigns___createdAt = 'languages___project___assigns___createdAt',
  languages___project___assigns___updatedAt = 'languages___project___assigns___updatedAt',
  languages___project___assigns___project = 'languages___project___assigns___project',
  languages___project___assigns___children = 'languages___project___assigns___children',
  languages___project___systems = 'languages___project___systems',
  languages___project___systems___contentful_id = 'languages___project___systems___contentful_id',
  languages___project___systems___id = 'languages___project___systems___id',
  languages___project___systems___node_locale = 'languages___project___systems___node_locale',
  languages___project___systems___name = 'languages___project___systems___name',
  languages___project___systems___level = 'languages___project___systems___level',
  languages___project___systems___project = 'languages___project___systems___project',
  languages___project___systems___spaceId = 'languages___project___systems___spaceId',
  languages___project___systems___createdAt = 'languages___project___systems___createdAt',
  languages___project___systems___updatedAt = 'languages___project___systems___updatedAt',
  languages___project___systems___oss = 'languages___project___systems___oss',
  languages___project___systems___skill_map = 'languages___project___systems___skill_map',
  languages___project___systems___children = 'languages___project___systems___children',
  languages___project___languages = 'languages___project___languages',
  languages___project___languages___contentful_id = 'languages___project___languages___contentful_id',
  languages___project___languages___id = 'languages___project___languages___id',
  languages___project___languages___node_locale = 'languages___project___languages___node_locale',
  languages___project___languages___name = 'languages___project___languages___name',
  languages___project___languages___level = 'languages___project___languages___level',
  languages___project___languages___project = 'languages___project___languages___project',
  languages___project___languages___spaceId = 'languages___project___languages___spaceId',
  languages___project___languages___createdAt = 'languages___project___languages___createdAt',
  languages___project___languages___updatedAt = 'languages___project___languages___updatedAt',
  languages___project___languages___oss = 'languages___project___languages___oss',
  languages___project___languages___skill_map = 'languages___project___languages___skill_map',
  languages___project___languages___children = 'languages___project___languages___children',
  languages___project___tools = 'languages___project___tools',
  languages___project___tools___contentful_id = 'languages___project___tools___contentful_id',
  languages___project___tools___id = 'languages___project___tools___id',
  languages___project___tools___node_locale = 'languages___project___tools___node_locale',
  languages___project___tools___name = 'languages___project___tools___name',
  languages___project___tools___level = 'languages___project___tools___level',
  languages___project___tools___project = 'languages___project___tools___project',
  languages___project___tools___spaceId = 'languages___project___tools___spaceId',
  languages___project___tools___createdAt = 'languages___project___tools___createdAt',
  languages___project___tools___updatedAt = 'languages___project___tools___updatedAt',
  languages___project___tools___oss = 'languages___project___tools___oss',
  languages___project___tools___skill_map = 'languages___project___tools___skill_map',
  languages___project___tools___children = 'languages___project___tools___children',
  languages___project___icon___contentful_id = 'languages___project___icon___contentful_id',
  languages___project___icon___id = 'languages___project___icon___id',
  languages___project___icon___node_locale = 'languages___project___icon___node_locale',
  languages___project___icon___title = 'languages___project___icon___title',
  languages___project___icon___history = 'languages___project___icon___history',
  languages___project___icon___spaceId = 'languages___project___icon___spaceId',
  languages___project___icon___createdAt = 'languages___project___icon___createdAt',
  languages___project___icon___updatedAt = 'languages___project___icon___updatedAt',
  languages___project___icon___what_i_can_do = 'languages___project___icon___what_i_can_do',
  languages___project___icon___project = 'languages___project___icon___project',
  languages___project___icon___contact = 'languages___project___icon___contact',
  languages___project___icon___children = 'languages___project___icon___children',
  languages___project___spaceId = 'languages___project___spaceId',
  languages___project___createdAt = 'languages___project___createdAt',
  languages___project___updatedAt = 'languages___project___updatedAt',
  languages___project___sys___type = 'languages___project___sys___type',
  languages___project___sys___revision = 'languages___project___sys___revision',
  languages___project___parent___id = 'languages___project___parent___id',
  languages___project___parent___children = 'languages___project___parent___children',
  languages___project___children = 'languages___project___children',
  languages___project___children___id = 'languages___project___children___id',
  languages___project___children___children = 'languages___project___children___children',
  languages___project___internal___content = 'languages___project___internal___content',
  languages___project___internal___contentDigest = 'languages___project___internal___contentDigest',
  languages___project___internal___description = 'languages___project___internal___description',
  languages___project___internal___fieldOwners = 'languages___project___internal___fieldOwners',
  languages___project___internal___ignoreType = 'languages___project___internal___ignoreType',
  languages___project___internal___mediaType = 'languages___project___internal___mediaType',
  languages___project___internal___owner = 'languages___project___internal___owner',
  languages___project___internal___type = 'languages___project___internal___type',
  languages___spaceId = 'languages___spaceId',
  languages___createdAt = 'languages___createdAt',
  languages___updatedAt = 'languages___updatedAt',
  languages___sys___type = 'languages___sys___type',
  languages___sys___revision = 'languages___sys___revision',
  languages___oss = 'languages___oss',
  languages___oss___contentful_id = 'languages___oss___contentful_id',
  languages___oss___id = 'languages___oss___id',
  languages___oss___node_locale = 'languages___oss___node_locale',
  languages___oss___name = 'languages___oss___name',
  languages___oss___slug = 'languages___oss___slug',
  languages___oss___startDate = 'languages___oss___startDate',
  languages___oss___during = 'languages___oss___during',
  languages___oss___comment = 'languages___oss___comment',
  languages___oss___siteUrl = 'languages___oss___siteUrl',
  languages___oss___sourceUrl = 'languages___oss___sourceUrl',
  languages___oss___mainImage___contentful_id = 'languages___oss___mainImage___contentful_id',
  languages___oss___mainImage___id = 'languages___oss___mainImage___id',
  languages___oss___mainImage___spaceId = 'languages___oss___mainImage___spaceId',
  languages___oss___mainImage___createdAt = 'languages___oss___mainImage___createdAt',
  languages___oss___mainImage___updatedAt = 'languages___oss___mainImage___updatedAt',
  languages___oss___mainImage___title = 'languages___oss___mainImage___title',
  languages___oss___mainImage___description = 'languages___oss___mainImage___description',
  languages___oss___mainImage___node_locale = 'languages___oss___mainImage___node_locale',
  languages___oss___mainImage___children = 'languages___oss___mainImage___children',
  languages___oss___roles = 'languages___oss___roles',
  languages___oss___roles___contentful_id = 'languages___oss___roles___contentful_id',
  languages___oss___roles___id = 'languages___oss___roles___id',
  languages___oss___roles___node_locale = 'languages___oss___roles___node_locale',
  languages___oss___roles___name = 'languages___oss___roles___name',
  languages___oss___roles___project = 'languages___oss___roles___project',
  languages___oss___roles___oss = 'languages___oss___roles___oss',
  languages___oss___roles___spaceId = 'languages___oss___roles___spaceId',
  languages___oss___roles___createdAt = 'languages___oss___roles___createdAt',
  languages___oss___roles___updatedAt = 'languages___oss___roles___updatedAt',
  languages___oss___roles___children = 'languages___oss___roles___children',
  languages___oss___assigns = 'languages___oss___assigns',
  languages___oss___assigns___contentful_id = 'languages___oss___assigns___contentful_id',
  languages___oss___assigns___id = 'languages___oss___assigns___id',
  languages___oss___assigns___node_locale = 'languages___oss___assigns___node_locale',
  languages___oss___assigns___name = 'languages___oss___assigns___name',
  languages___oss___assigns___oss = 'languages___oss___assigns___oss',
  languages___oss___assigns___spaceId = 'languages___oss___assigns___spaceId',
  languages___oss___assigns___createdAt = 'languages___oss___assigns___createdAt',
  languages___oss___assigns___updatedAt = 'languages___oss___assigns___updatedAt',
  languages___oss___assigns___project = 'languages___oss___assigns___project',
  languages___oss___assigns___children = 'languages___oss___assigns___children',
  languages___oss___systems = 'languages___oss___systems',
  languages___oss___systems___contentful_id = 'languages___oss___systems___contentful_id',
  languages___oss___systems___id = 'languages___oss___systems___id',
  languages___oss___systems___node_locale = 'languages___oss___systems___node_locale',
  languages___oss___systems___name = 'languages___oss___systems___name',
  languages___oss___systems___level = 'languages___oss___systems___level',
  languages___oss___systems___project = 'languages___oss___systems___project',
  languages___oss___systems___spaceId = 'languages___oss___systems___spaceId',
  languages___oss___systems___createdAt = 'languages___oss___systems___createdAt',
  languages___oss___systems___updatedAt = 'languages___oss___systems___updatedAt',
  languages___oss___systems___oss = 'languages___oss___systems___oss',
  languages___oss___systems___skill_map = 'languages___oss___systems___skill_map',
  languages___oss___systems___children = 'languages___oss___systems___children',
  languages___oss___languages = 'languages___oss___languages',
  languages___oss___languages___contentful_id = 'languages___oss___languages___contentful_id',
  languages___oss___languages___id = 'languages___oss___languages___id',
  languages___oss___languages___node_locale = 'languages___oss___languages___node_locale',
  languages___oss___languages___name = 'languages___oss___languages___name',
  languages___oss___languages___level = 'languages___oss___languages___level',
  languages___oss___languages___project = 'languages___oss___languages___project',
  languages___oss___languages___spaceId = 'languages___oss___languages___spaceId',
  languages___oss___languages___createdAt = 'languages___oss___languages___createdAt',
  languages___oss___languages___updatedAt = 'languages___oss___languages___updatedAt',
  languages___oss___languages___oss = 'languages___oss___languages___oss',
  languages___oss___languages___skill_map = 'languages___oss___languages___skill_map',
  languages___oss___languages___children = 'languages___oss___languages___children',
  languages___oss___tools = 'languages___oss___tools',
  languages___oss___tools___contentful_id = 'languages___oss___tools___contentful_id',
  languages___oss___tools___id = 'languages___oss___tools___id',
  languages___oss___tools___node_locale = 'languages___oss___tools___node_locale',
  languages___oss___tools___name = 'languages___oss___tools___name',
  languages___oss___tools___level = 'languages___oss___tools___level',
  languages___oss___tools___project = 'languages___oss___tools___project',
  languages___oss___tools___spaceId = 'languages___oss___tools___spaceId',
  languages___oss___tools___createdAt = 'languages___oss___tools___createdAt',
  languages___oss___tools___updatedAt = 'languages___oss___tools___updatedAt',
  languages___oss___tools___oss = 'languages___oss___tools___oss',
  languages___oss___tools___skill_map = 'languages___oss___tools___skill_map',
  languages___oss___tools___children = 'languages___oss___tools___children',
  languages___oss___spaceId = 'languages___oss___spaceId',
  languages___oss___createdAt = 'languages___oss___createdAt',
  languages___oss___updatedAt = 'languages___oss___updatedAt',
  languages___oss___sys___type = 'languages___oss___sys___type',
  languages___oss___sys___revision = 'languages___oss___sys___revision',
  languages___oss___parent___id = 'languages___oss___parent___id',
  languages___oss___parent___children = 'languages___oss___parent___children',
  languages___oss___children = 'languages___oss___children',
  languages___oss___children___id = 'languages___oss___children___id',
  languages___oss___children___children = 'languages___oss___children___children',
  languages___oss___internal___content = 'languages___oss___internal___content',
  languages___oss___internal___contentDigest = 'languages___oss___internal___contentDigest',
  languages___oss___internal___description = 'languages___oss___internal___description',
  languages___oss___internal___fieldOwners = 'languages___oss___internal___fieldOwners',
  languages___oss___internal___ignoreType = 'languages___oss___internal___ignoreType',
  languages___oss___internal___mediaType = 'languages___oss___internal___mediaType',
  languages___oss___internal___owner = 'languages___oss___internal___owner',
  languages___oss___internal___type = 'languages___oss___internal___type',
  languages___skill_map = 'languages___skill_map',
  languages___skill_map___contentful_id = 'languages___skill_map___contentful_id',
  languages___skill_map___id = 'languages___skill_map___id',
  languages___skill_map___node_locale = 'languages___skill_map___node_locale',
  languages___skill_map___sort = 'languages___skill_map___sort',
  languages___skill_map___name = 'languages___skill_map___name',
  languages___skill_map___expanded = 'languages___skill_map___expanded',
  languages___skill_map___skills = 'languages___skill_map___skills',
  languages___skill_map___skills___contentful_id = 'languages___skill_map___skills___contentful_id',
  languages___skill_map___skills___id = 'languages___skill_map___skills___id',
  languages___skill_map___skills___node_locale = 'languages___skill_map___skills___node_locale',
  languages___skill_map___skills___name = 'languages___skill_map___skills___name',
  languages___skill_map___skills___level = 'languages___skill_map___skills___level',
  languages___skill_map___skills___project = 'languages___skill_map___skills___project',
  languages___skill_map___skills___spaceId = 'languages___skill_map___skills___spaceId',
  languages___skill_map___skills___createdAt = 'languages___skill_map___skills___createdAt',
  languages___skill_map___skills___updatedAt = 'languages___skill_map___skills___updatedAt',
  languages___skill_map___skills___oss = 'languages___skill_map___skills___oss',
  languages___skill_map___skills___skill_map = 'languages___skill_map___skills___skill_map',
  languages___skill_map___skills___children = 'languages___skill_map___skills___children',
  languages___skill_map___spaceId = 'languages___skill_map___spaceId',
  languages___skill_map___createdAt = 'languages___skill_map___createdAt',
  languages___skill_map___updatedAt = 'languages___skill_map___updatedAt',
  languages___skill_map___sys___type = 'languages___skill_map___sys___type',
  languages___skill_map___sys___revision = 'languages___skill_map___sys___revision',
  languages___skill_map___parent___id = 'languages___skill_map___parent___id',
  languages___skill_map___parent___children = 'languages___skill_map___parent___children',
  languages___skill_map___children = 'languages___skill_map___children',
  languages___skill_map___children___id = 'languages___skill_map___children___id',
  languages___skill_map___children___children = 'languages___skill_map___children___children',
  languages___skill_map___internal___content = 'languages___skill_map___internal___content',
  languages___skill_map___internal___contentDigest = 'languages___skill_map___internal___contentDigest',
  languages___skill_map___internal___description = 'languages___skill_map___internal___description',
  languages___skill_map___internal___fieldOwners = 'languages___skill_map___internal___fieldOwners',
  languages___skill_map___internal___ignoreType = 'languages___skill_map___internal___ignoreType',
  languages___skill_map___internal___mediaType = 'languages___skill_map___internal___mediaType',
  languages___skill_map___internal___owner = 'languages___skill_map___internal___owner',
  languages___skill_map___internal___type = 'languages___skill_map___internal___type',
  languages___parent___id = 'languages___parent___id',
  languages___parent___parent___id = 'languages___parent___parent___id',
  languages___parent___parent___children = 'languages___parent___parent___children',
  languages___parent___children = 'languages___parent___children',
  languages___parent___children___id = 'languages___parent___children___id',
  languages___parent___children___children = 'languages___parent___children___children',
  languages___parent___internal___content = 'languages___parent___internal___content',
  languages___parent___internal___contentDigest = 'languages___parent___internal___contentDigest',
  languages___parent___internal___description = 'languages___parent___internal___description',
  languages___parent___internal___fieldOwners = 'languages___parent___internal___fieldOwners',
  languages___parent___internal___ignoreType = 'languages___parent___internal___ignoreType',
  languages___parent___internal___mediaType = 'languages___parent___internal___mediaType',
  languages___parent___internal___owner = 'languages___parent___internal___owner',
  languages___parent___internal___type = 'languages___parent___internal___type',
  languages___children = 'languages___children',
  languages___children___id = 'languages___children___id',
  languages___children___parent___id = 'languages___children___parent___id',
  languages___children___parent___children = 'languages___children___parent___children',
  languages___children___children = 'languages___children___children',
  languages___children___children___id = 'languages___children___children___id',
  languages___children___children___children = 'languages___children___children___children',
  languages___children___internal___content = 'languages___children___internal___content',
  languages___children___internal___contentDigest = 'languages___children___internal___contentDigest',
  languages___children___internal___description = 'languages___children___internal___description',
  languages___children___internal___fieldOwners = 'languages___children___internal___fieldOwners',
  languages___children___internal___ignoreType = 'languages___children___internal___ignoreType',
  languages___children___internal___mediaType = 'languages___children___internal___mediaType',
  languages___children___internal___owner = 'languages___children___internal___owner',
  languages___children___internal___type = 'languages___children___internal___type',
  languages___internal___content = 'languages___internal___content',
  languages___internal___contentDigest = 'languages___internal___contentDigest',
  languages___internal___description = 'languages___internal___description',
  languages___internal___fieldOwners = 'languages___internal___fieldOwners',
  languages___internal___ignoreType = 'languages___internal___ignoreType',
  languages___internal___mediaType = 'languages___internal___mediaType',
  languages___internal___owner = 'languages___internal___owner',
  languages___internal___type = 'languages___internal___type',
  tools = 'tools',
  tools___contentful_id = 'tools___contentful_id',
  tools___id = 'tools___id',
  tools___node_locale = 'tools___node_locale',
  tools___name = 'tools___name',
  tools___level = 'tools___level',
  tools___project = 'tools___project',
  tools___project___contentful_id = 'tools___project___contentful_id',
  tools___project___id = 'tools___project___id',
  tools___project___node_locale = 'tools___project___node_locale',
  tools___project___name = 'tools___project___name',
  tools___project___startDate = 'tools___project___startDate',
  tools___project___during = 'tools___project___during',
  tools___project___comment = 'tools___project___comment',
  tools___project___roles = 'tools___project___roles',
  tools___project___roles___contentful_id = 'tools___project___roles___contentful_id',
  tools___project___roles___id = 'tools___project___roles___id',
  tools___project___roles___node_locale = 'tools___project___roles___node_locale',
  tools___project___roles___name = 'tools___project___roles___name',
  tools___project___roles___project = 'tools___project___roles___project',
  tools___project___roles___oss = 'tools___project___roles___oss',
  tools___project___roles___spaceId = 'tools___project___roles___spaceId',
  tools___project___roles___createdAt = 'tools___project___roles___createdAt',
  tools___project___roles___updatedAt = 'tools___project___roles___updatedAt',
  tools___project___roles___children = 'tools___project___roles___children',
  tools___project___assigns = 'tools___project___assigns',
  tools___project___assigns___contentful_id = 'tools___project___assigns___contentful_id',
  tools___project___assigns___id = 'tools___project___assigns___id',
  tools___project___assigns___node_locale = 'tools___project___assigns___node_locale',
  tools___project___assigns___name = 'tools___project___assigns___name',
  tools___project___assigns___oss = 'tools___project___assigns___oss',
  tools___project___assigns___spaceId = 'tools___project___assigns___spaceId',
  tools___project___assigns___createdAt = 'tools___project___assigns___createdAt',
  tools___project___assigns___updatedAt = 'tools___project___assigns___updatedAt',
  tools___project___assigns___project = 'tools___project___assigns___project',
  tools___project___assigns___children = 'tools___project___assigns___children',
  tools___project___systems = 'tools___project___systems',
  tools___project___systems___contentful_id = 'tools___project___systems___contentful_id',
  tools___project___systems___id = 'tools___project___systems___id',
  tools___project___systems___node_locale = 'tools___project___systems___node_locale',
  tools___project___systems___name = 'tools___project___systems___name',
  tools___project___systems___level = 'tools___project___systems___level',
  tools___project___systems___project = 'tools___project___systems___project',
  tools___project___systems___spaceId = 'tools___project___systems___spaceId',
  tools___project___systems___createdAt = 'tools___project___systems___createdAt',
  tools___project___systems___updatedAt = 'tools___project___systems___updatedAt',
  tools___project___systems___oss = 'tools___project___systems___oss',
  tools___project___systems___skill_map = 'tools___project___systems___skill_map',
  tools___project___systems___children = 'tools___project___systems___children',
  tools___project___languages = 'tools___project___languages',
  tools___project___languages___contentful_id = 'tools___project___languages___contentful_id',
  tools___project___languages___id = 'tools___project___languages___id',
  tools___project___languages___node_locale = 'tools___project___languages___node_locale',
  tools___project___languages___name = 'tools___project___languages___name',
  tools___project___languages___level = 'tools___project___languages___level',
  tools___project___languages___project = 'tools___project___languages___project',
  tools___project___languages___spaceId = 'tools___project___languages___spaceId',
  tools___project___languages___createdAt = 'tools___project___languages___createdAt',
  tools___project___languages___updatedAt = 'tools___project___languages___updatedAt',
  tools___project___languages___oss = 'tools___project___languages___oss',
  tools___project___languages___skill_map = 'tools___project___languages___skill_map',
  tools___project___languages___children = 'tools___project___languages___children',
  tools___project___tools = 'tools___project___tools',
  tools___project___tools___contentful_id = 'tools___project___tools___contentful_id',
  tools___project___tools___id = 'tools___project___tools___id',
  tools___project___tools___node_locale = 'tools___project___tools___node_locale',
  tools___project___tools___name = 'tools___project___tools___name',
  tools___project___tools___level = 'tools___project___tools___level',
  tools___project___tools___project = 'tools___project___tools___project',
  tools___project___tools___spaceId = 'tools___project___tools___spaceId',
  tools___project___tools___createdAt = 'tools___project___tools___createdAt',
  tools___project___tools___updatedAt = 'tools___project___tools___updatedAt',
  tools___project___tools___oss = 'tools___project___tools___oss',
  tools___project___tools___skill_map = 'tools___project___tools___skill_map',
  tools___project___tools___children = 'tools___project___tools___children',
  tools___project___icon___contentful_id = 'tools___project___icon___contentful_id',
  tools___project___icon___id = 'tools___project___icon___id',
  tools___project___icon___node_locale = 'tools___project___icon___node_locale',
  tools___project___icon___title = 'tools___project___icon___title',
  tools___project___icon___history = 'tools___project___icon___history',
  tools___project___icon___spaceId = 'tools___project___icon___spaceId',
  tools___project___icon___createdAt = 'tools___project___icon___createdAt',
  tools___project___icon___updatedAt = 'tools___project___icon___updatedAt',
  tools___project___icon___what_i_can_do = 'tools___project___icon___what_i_can_do',
  tools___project___icon___project = 'tools___project___icon___project',
  tools___project___icon___contact = 'tools___project___icon___contact',
  tools___project___icon___children = 'tools___project___icon___children',
  tools___project___spaceId = 'tools___project___spaceId',
  tools___project___createdAt = 'tools___project___createdAt',
  tools___project___updatedAt = 'tools___project___updatedAt',
  tools___project___sys___type = 'tools___project___sys___type',
  tools___project___sys___revision = 'tools___project___sys___revision',
  tools___project___parent___id = 'tools___project___parent___id',
  tools___project___parent___children = 'tools___project___parent___children',
  tools___project___children = 'tools___project___children',
  tools___project___children___id = 'tools___project___children___id',
  tools___project___children___children = 'tools___project___children___children',
  tools___project___internal___content = 'tools___project___internal___content',
  tools___project___internal___contentDigest = 'tools___project___internal___contentDigest',
  tools___project___internal___description = 'tools___project___internal___description',
  tools___project___internal___fieldOwners = 'tools___project___internal___fieldOwners',
  tools___project___internal___ignoreType = 'tools___project___internal___ignoreType',
  tools___project___internal___mediaType = 'tools___project___internal___mediaType',
  tools___project___internal___owner = 'tools___project___internal___owner',
  tools___project___internal___type = 'tools___project___internal___type',
  tools___spaceId = 'tools___spaceId',
  tools___createdAt = 'tools___createdAt',
  tools___updatedAt = 'tools___updatedAt',
  tools___sys___type = 'tools___sys___type',
  tools___sys___revision = 'tools___sys___revision',
  tools___oss = 'tools___oss',
  tools___oss___contentful_id = 'tools___oss___contentful_id',
  tools___oss___id = 'tools___oss___id',
  tools___oss___node_locale = 'tools___oss___node_locale',
  tools___oss___name = 'tools___oss___name',
  tools___oss___slug = 'tools___oss___slug',
  tools___oss___startDate = 'tools___oss___startDate',
  tools___oss___during = 'tools___oss___during',
  tools___oss___comment = 'tools___oss___comment',
  tools___oss___siteUrl = 'tools___oss___siteUrl',
  tools___oss___sourceUrl = 'tools___oss___sourceUrl',
  tools___oss___mainImage___contentful_id = 'tools___oss___mainImage___contentful_id',
  tools___oss___mainImage___id = 'tools___oss___mainImage___id',
  tools___oss___mainImage___spaceId = 'tools___oss___mainImage___spaceId',
  tools___oss___mainImage___createdAt = 'tools___oss___mainImage___createdAt',
  tools___oss___mainImage___updatedAt = 'tools___oss___mainImage___updatedAt',
  tools___oss___mainImage___title = 'tools___oss___mainImage___title',
  tools___oss___mainImage___description = 'tools___oss___mainImage___description',
  tools___oss___mainImage___node_locale = 'tools___oss___mainImage___node_locale',
  tools___oss___mainImage___children = 'tools___oss___mainImage___children',
  tools___oss___roles = 'tools___oss___roles',
  tools___oss___roles___contentful_id = 'tools___oss___roles___contentful_id',
  tools___oss___roles___id = 'tools___oss___roles___id',
  tools___oss___roles___node_locale = 'tools___oss___roles___node_locale',
  tools___oss___roles___name = 'tools___oss___roles___name',
  tools___oss___roles___project = 'tools___oss___roles___project',
  tools___oss___roles___oss = 'tools___oss___roles___oss',
  tools___oss___roles___spaceId = 'tools___oss___roles___spaceId',
  tools___oss___roles___createdAt = 'tools___oss___roles___createdAt',
  tools___oss___roles___updatedAt = 'tools___oss___roles___updatedAt',
  tools___oss___roles___children = 'tools___oss___roles___children',
  tools___oss___assigns = 'tools___oss___assigns',
  tools___oss___assigns___contentful_id = 'tools___oss___assigns___contentful_id',
  tools___oss___assigns___id = 'tools___oss___assigns___id',
  tools___oss___assigns___node_locale = 'tools___oss___assigns___node_locale',
  tools___oss___assigns___name = 'tools___oss___assigns___name',
  tools___oss___assigns___oss = 'tools___oss___assigns___oss',
  tools___oss___assigns___spaceId = 'tools___oss___assigns___spaceId',
  tools___oss___assigns___createdAt = 'tools___oss___assigns___createdAt',
  tools___oss___assigns___updatedAt = 'tools___oss___assigns___updatedAt',
  tools___oss___assigns___project = 'tools___oss___assigns___project',
  tools___oss___assigns___children = 'tools___oss___assigns___children',
  tools___oss___systems = 'tools___oss___systems',
  tools___oss___systems___contentful_id = 'tools___oss___systems___contentful_id',
  tools___oss___systems___id = 'tools___oss___systems___id',
  tools___oss___systems___node_locale = 'tools___oss___systems___node_locale',
  tools___oss___systems___name = 'tools___oss___systems___name',
  tools___oss___systems___level = 'tools___oss___systems___level',
  tools___oss___systems___project = 'tools___oss___systems___project',
  tools___oss___systems___spaceId = 'tools___oss___systems___spaceId',
  tools___oss___systems___createdAt = 'tools___oss___systems___createdAt',
  tools___oss___systems___updatedAt = 'tools___oss___systems___updatedAt',
  tools___oss___systems___oss = 'tools___oss___systems___oss',
  tools___oss___systems___skill_map = 'tools___oss___systems___skill_map',
  tools___oss___systems___children = 'tools___oss___systems___children',
  tools___oss___languages = 'tools___oss___languages',
  tools___oss___languages___contentful_id = 'tools___oss___languages___contentful_id',
  tools___oss___languages___id = 'tools___oss___languages___id',
  tools___oss___languages___node_locale = 'tools___oss___languages___node_locale',
  tools___oss___languages___name = 'tools___oss___languages___name',
  tools___oss___languages___level = 'tools___oss___languages___level',
  tools___oss___languages___project = 'tools___oss___languages___project',
  tools___oss___languages___spaceId = 'tools___oss___languages___spaceId',
  tools___oss___languages___createdAt = 'tools___oss___languages___createdAt',
  tools___oss___languages___updatedAt = 'tools___oss___languages___updatedAt',
  tools___oss___languages___oss = 'tools___oss___languages___oss',
  tools___oss___languages___skill_map = 'tools___oss___languages___skill_map',
  tools___oss___languages___children = 'tools___oss___languages___children',
  tools___oss___tools = 'tools___oss___tools',
  tools___oss___tools___contentful_id = 'tools___oss___tools___contentful_id',
  tools___oss___tools___id = 'tools___oss___tools___id',
  tools___oss___tools___node_locale = 'tools___oss___tools___node_locale',
  tools___oss___tools___name = 'tools___oss___tools___name',
  tools___oss___tools___level = 'tools___oss___tools___level',
  tools___oss___tools___project = 'tools___oss___tools___project',
  tools___oss___tools___spaceId = 'tools___oss___tools___spaceId',
  tools___oss___tools___createdAt = 'tools___oss___tools___createdAt',
  tools___oss___tools___updatedAt = 'tools___oss___tools___updatedAt',
  tools___oss___tools___oss = 'tools___oss___tools___oss',
  tools___oss___tools___skill_map = 'tools___oss___tools___skill_map',
  tools___oss___tools___children = 'tools___oss___tools___children',
  tools___oss___spaceId = 'tools___oss___spaceId',
  tools___oss___createdAt = 'tools___oss___createdAt',
  tools___oss___updatedAt = 'tools___oss___updatedAt',
  tools___oss___sys___type = 'tools___oss___sys___type',
  tools___oss___sys___revision = 'tools___oss___sys___revision',
  tools___oss___parent___id = 'tools___oss___parent___id',
  tools___oss___parent___children = 'tools___oss___parent___children',
  tools___oss___children = 'tools___oss___children',
  tools___oss___children___id = 'tools___oss___children___id',
  tools___oss___children___children = 'tools___oss___children___children',
  tools___oss___internal___content = 'tools___oss___internal___content',
  tools___oss___internal___contentDigest = 'tools___oss___internal___contentDigest',
  tools___oss___internal___description = 'tools___oss___internal___description',
  tools___oss___internal___fieldOwners = 'tools___oss___internal___fieldOwners',
  tools___oss___internal___ignoreType = 'tools___oss___internal___ignoreType',
  tools___oss___internal___mediaType = 'tools___oss___internal___mediaType',
  tools___oss___internal___owner = 'tools___oss___internal___owner',
  tools___oss___internal___type = 'tools___oss___internal___type',
  tools___skill_map = 'tools___skill_map',
  tools___skill_map___contentful_id = 'tools___skill_map___contentful_id',
  tools___skill_map___id = 'tools___skill_map___id',
  tools___skill_map___node_locale = 'tools___skill_map___node_locale',
  tools___skill_map___sort = 'tools___skill_map___sort',
  tools___skill_map___name = 'tools___skill_map___name',
  tools___skill_map___expanded = 'tools___skill_map___expanded',
  tools___skill_map___skills = 'tools___skill_map___skills',
  tools___skill_map___skills___contentful_id = 'tools___skill_map___skills___contentful_id',
  tools___skill_map___skills___id = 'tools___skill_map___skills___id',
  tools___skill_map___skills___node_locale = 'tools___skill_map___skills___node_locale',
  tools___skill_map___skills___name = 'tools___skill_map___skills___name',
  tools___skill_map___skills___level = 'tools___skill_map___skills___level',
  tools___skill_map___skills___project = 'tools___skill_map___skills___project',
  tools___skill_map___skills___spaceId = 'tools___skill_map___skills___spaceId',
  tools___skill_map___skills___createdAt = 'tools___skill_map___skills___createdAt',
  tools___skill_map___skills___updatedAt = 'tools___skill_map___skills___updatedAt',
  tools___skill_map___skills___oss = 'tools___skill_map___skills___oss',
  tools___skill_map___skills___skill_map = 'tools___skill_map___skills___skill_map',
  tools___skill_map___skills___children = 'tools___skill_map___skills___children',
  tools___skill_map___spaceId = 'tools___skill_map___spaceId',
  tools___skill_map___createdAt = 'tools___skill_map___createdAt',
  tools___skill_map___updatedAt = 'tools___skill_map___updatedAt',
  tools___skill_map___sys___type = 'tools___skill_map___sys___type',
  tools___skill_map___sys___revision = 'tools___skill_map___sys___revision',
  tools___skill_map___parent___id = 'tools___skill_map___parent___id',
  tools___skill_map___parent___children = 'tools___skill_map___parent___children',
  tools___skill_map___children = 'tools___skill_map___children',
  tools___skill_map___children___id = 'tools___skill_map___children___id',
  tools___skill_map___children___children = 'tools___skill_map___children___children',
  tools___skill_map___internal___content = 'tools___skill_map___internal___content',
  tools___skill_map___internal___contentDigest = 'tools___skill_map___internal___contentDigest',
  tools___skill_map___internal___description = 'tools___skill_map___internal___description',
  tools___skill_map___internal___fieldOwners = 'tools___skill_map___internal___fieldOwners',
  tools___skill_map___internal___ignoreType = 'tools___skill_map___internal___ignoreType',
  tools___skill_map___internal___mediaType = 'tools___skill_map___internal___mediaType',
  tools___skill_map___internal___owner = 'tools___skill_map___internal___owner',
  tools___skill_map___internal___type = 'tools___skill_map___internal___type',
  tools___parent___id = 'tools___parent___id',
  tools___parent___parent___id = 'tools___parent___parent___id',
  tools___parent___parent___children = 'tools___parent___parent___children',
  tools___parent___children = 'tools___parent___children',
  tools___parent___children___id = 'tools___parent___children___id',
  tools___parent___children___children = 'tools___parent___children___children',
  tools___parent___internal___content = 'tools___parent___internal___content',
  tools___parent___internal___contentDigest = 'tools___parent___internal___contentDigest',
  tools___parent___internal___description = 'tools___parent___internal___description',
  tools___parent___internal___fieldOwners = 'tools___parent___internal___fieldOwners',
  tools___parent___internal___ignoreType = 'tools___parent___internal___ignoreType',
  tools___parent___internal___mediaType = 'tools___parent___internal___mediaType',
  tools___parent___internal___owner = 'tools___parent___internal___owner',
  tools___parent___internal___type = 'tools___parent___internal___type',
  tools___children = 'tools___children',
  tools___children___id = 'tools___children___id',
  tools___children___parent___id = 'tools___children___parent___id',
  tools___children___parent___children = 'tools___children___parent___children',
  tools___children___children = 'tools___children___children',
  tools___children___children___id = 'tools___children___children___id',
  tools___children___children___children = 'tools___children___children___children',
  tools___children___internal___content = 'tools___children___internal___content',
  tools___children___internal___contentDigest = 'tools___children___internal___contentDigest',
  tools___children___internal___description = 'tools___children___internal___description',
  tools___children___internal___fieldOwners = 'tools___children___internal___fieldOwners',
  tools___children___internal___ignoreType = 'tools___children___internal___ignoreType',
  tools___children___internal___mediaType = 'tools___children___internal___mediaType',
  tools___children___internal___owner = 'tools___children___internal___owner',
  tools___children___internal___type = 'tools___children___internal___type',
  tools___internal___content = 'tools___internal___content',
  tools___internal___contentDigest = 'tools___internal___contentDigest',
  tools___internal___description = 'tools___internal___description',
  tools___internal___fieldOwners = 'tools___internal___fieldOwners',
  tools___internal___ignoreType = 'tools___internal___ignoreType',
  tools___internal___mediaType = 'tools___internal___mediaType',
  tools___internal___owner = 'tools___internal___owner',
  tools___internal___type = 'tools___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulOssFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  during?: Maybe<FloatQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  mainImage?: Maybe<ContentfulAssetFilterInput>;
  roles?: Maybe<ContentfulRoleFilterListInput>;
  assigns?: Maybe<ContentfulAssigneFilterListInput>;
  systems?: Maybe<ContentfulSkillFilterListInput>;
  languages?: Maybe<ContentfulSkillFilterListInput>;
  tools?: Maybe<ContentfulSkillFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulOssSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulOssFilterListInput = {
  elemMatch?: Maybe<ContentfulOssFilterInput>;
};

export type ContentfulOssGroupConnection = {
  __typename?: 'ContentfulOssGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOssEdge>;
  nodes: Array<ContentfulOss>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulOssSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulOssFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulOssSys = {
  __typename?: 'ContentfulOssSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulOssSysContentType>;
};

export type ContentfulOssSysContentType = {
  __typename?: 'ContentfulOssSysContentType';
  sys?: Maybe<ContentfulOssSysContentTypeSys>;
};

export type ContentfulOssSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulOssSysContentTypeSysFilterInput>;
};

export type ContentfulOssSysContentTypeSys = {
  __typename?: 'ContentfulOssSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulOssSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulOssSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulOssSysContentTypeFilterInput>;
};

export type ContentfulProject = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulProject';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  during?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<ContentfulRole>>>;
  assigns?: Maybe<Array<Maybe<ContentfulAssigne>>>;
  systems?: Maybe<Array<Maybe<ContentfulSkill>>>;
  languages?: Maybe<Array<Maybe<ContentfulSkill>>>;
  tools?: Maybe<Array<Maybe<ContentfulSkill>>>;
  icon?: Maybe<ContentfulIcon>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulProjectSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulProjectStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulProjectConnection = {
  __typename?: 'ContentfulProjectConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProjectGroupConnection>;
};


export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectEdge = {
  __typename?: 'ContentfulProjectEdge';
  next?: Maybe<ContentfulProject>;
  node: ContentfulProject;
  previous?: Maybe<ContentfulProject>;
};

export enum ContentfulProjectFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  startDate = 'startDate',
  during = 'during',
  comment = 'comment',
  roles = 'roles',
  roles___contentful_id = 'roles___contentful_id',
  roles___id = 'roles___id',
  roles___node_locale = 'roles___node_locale',
  roles___name = 'roles___name',
  roles___project = 'roles___project',
  roles___project___contentful_id = 'roles___project___contentful_id',
  roles___project___id = 'roles___project___id',
  roles___project___node_locale = 'roles___project___node_locale',
  roles___project___name = 'roles___project___name',
  roles___project___startDate = 'roles___project___startDate',
  roles___project___during = 'roles___project___during',
  roles___project___comment = 'roles___project___comment',
  roles___project___roles = 'roles___project___roles',
  roles___project___roles___contentful_id = 'roles___project___roles___contentful_id',
  roles___project___roles___id = 'roles___project___roles___id',
  roles___project___roles___node_locale = 'roles___project___roles___node_locale',
  roles___project___roles___name = 'roles___project___roles___name',
  roles___project___roles___project = 'roles___project___roles___project',
  roles___project___roles___oss = 'roles___project___roles___oss',
  roles___project___roles___spaceId = 'roles___project___roles___spaceId',
  roles___project___roles___createdAt = 'roles___project___roles___createdAt',
  roles___project___roles___updatedAt = 'roles___project___roles___updatedAt',
  roles___project___roles___children = 'roles___project___roles___children',
  roles___project___assigns = 'roles___project___assigns',
  roles___project___assigns___contentful_id = 'roles___project___assigns___contentful_id',
  roles___project___assigns___id = 'roles___project___assigns___id',
  roles___project___assigns___node_locale = 'roles___project___assigns___node_locale',
  roles___project___assigns___name = 'roles___project___assigns___name',
  roles___project___assigns___oss = 'roles___project___assigns___oss',
  roles___project___assigns___spaceId = 'roles___project___assigns___spaceId',
  roles___project___assigns___createdAt = 'roles___project___assigns___createdAt',
  roles___project___assigns___updatedAt = 'roles___project___assigns___updatedAt',
  roles___project___assigns___project = 'roles___project___assigns___project',
  roles___project___assigns___children = 'roles___project___assigns___children',
  roles___project___systems = 'roles___project___systems',
  roles___project___systems___contentful_id = 'roles___project___systems___contentful_id',
  roles___project___systems___id = 'roles___project___systems___id',
  roles___project___systems___node_locale = 'roles___project___systems___node_locale',
  roles___project___systems___name = 'roles___project___systems___name',
  roles___project___systems___level = 'roles___project___systems___level',
  roles___project___systems___project = 'roles___project___systems___project',
  roles___project___systems___spaceId = 'roles___project___systems___spaceId',
  roles___project___systems___createdAt = 'roles___project___systems___createdAt',
  roles___project___systems___updatedAt = 'roles___project___systems___updatedAt',
  roles___project___systems___oss = 'roles___project___systems___oss',
  roles___project___systems___skill_map = 'roles___project___systems___skill_map',
  roles___project___systems___children = 'roles___project___systems___children',
  roles___project___languages = 'roles___project___languages',
  roles___project___languages___contentful_id = 'roles___project___languages___contentful_id',
  roles___project___languages___id = 'roles___project___languages___id',
  roles___project___languages___node_locale = 'roles___project___languages___node_locale',
  roles___project___languages___name = 'roles___project___languages___name',
  roles___project___languages___level = 'roles___project___languages___level',
  roles___project___languages___project = 'roles___project___languages___project',
  roles___project___languages___spaceId = 'roles___project___languages___spaceId',
  roles___project___languages___createdAt = 'roles___project___languages___createdAt',
  roles___project___languages___updatedAt = 'roles___project___languages___updatedAt',
  roles___project___languages___oss = 'roles___project___languages___oss',
  roles___project___languages___skill_map = 'roles___project___languages___skill_map',
  roles___project___languages___children = 'roles___project___languages___children',
  roles___project___tools = 'roles___project___tools',
  roles___project___tools___contentful_id = 'roles___project___tools___contentful_id',
  roles___project___tools___id = 'roles___project___tools___id',
  roles___project___tools___node_locale = 'roles___project___tools___node_locale',
  roles___project___tools___name = 'roles___project___tools___name',
  roles___project___tools___level = 'roles___project___tools___level',
  roles___project___tools___project = 'roles___project___tools___project',
  roles___project___tools___spaceId = 'roles___project___tools___spaceId',
  roles___project___tools___createdAt = 'roles___project___tools___createdAt',
  roles___project___tools___updatedAt = 'roles___project___tools___updatedAt',
  roles___project___tools___oss = 'roles___project___tools___oss',
  roles___project___tools___skill_map = 'roles___project___tools___skill_map',
  roles___project___tools___children = 'roles___project___tools___children',
  roles___project___icon___contentful_id = 'roles___project___icon___contentful_id',
  roles___project___icon___id = 'roles___project___icon___id',
  roles___project___icon___node_locale = 'roles___project___icon___node_locale',
  roles___project___icon___title = 'roles___project___icon___title',
  roles___project___icon___history = 'roles___project___icon___history',
  roles___project___icon___spaceId = 'roles___project___icon___spaceId',
  roles___project___icon___createdAt = 'roles___project___icon___createdAt',
  roles___project___icon___updatedAt = 'roles___project___icon___updatedAt',
  roles___project___icon___what_i_can_do = 'roles___project___icon___what_i_can_do',
  roles___project___icon___project = 'roles___project___icon___project',
  roles___project___icon___contact = 'roles___project___icon___contact',
  roles___project___icon___children = 'roles___project___icon___children',
  roles___project___spaceId = 'roles___project___spaceId',
  roles___project___createdAt = 'roles___project___createdAt',
  roles___project___updatedAt = 'roles___project___updatedAt',
  roles___project___sys___type = 'roles___project___sys___type',
  roles___project___sys___revision = 'roles___project___sys___revision',
  roles___project___parent___id = 'roles___project___parent___id',
  roles___project___parent___children = 'roles___project___parent___children',
  roles___project___children = 'roles___project___children',
  roles___project___children___id = 'roles___project___children___id',
  roles___project___children___children = 'roles___project___children___children',
  roles___project___internal___content = 'roles___project___internal___content',
  roles___project___internal___contentDigest = 'roles___project___internal___contentDigest',
  roles___project___internal___description = 'roles___project___internal___description',
  roles___project___internal___fieldOwners = 'roles___project___internal___fieldOwners',
  roles___project___internal___ignoreType = 'roles___project___internal___ignoreType',
  roles___project___internal___mediaType = 'roles___project___internal___mediaType',
  roles___project___internal___owner = 'roles___project___internal___owner',
  roles___project___internal___type = 'roles___project___internal___type',
  roles___oss = 'roles___oss',
  roles___oss___contentful_id = 'roles___oss___contentful_id',
  roles___oss___id = 'roles___oss___id',
  roles___oss___node_locale = 'roles___oss___node_locale',
  roles___oss___name = 'roles___oss___name',
  roles___oss___slug = 'roles___oss___slug',
  roles___oss___startDate = 'roles___oss___startDate',
  roles___oss___during = 'roles___oss___during',
  roles___oss___comment = 'roles___oss___comment',
  roles___oss___siteUrl = 'roles___oss___siteUrl',
  roles___oss___sourceUrl = 'roles___oss___sourceUrl',
  roles___oss___mainImage___contentful_id = 'roles___oss___mainImage___contentful_id',
  roles___oss___mainImage___id = 'roles___oss___mainImage___id',
  roles___oss___mainImage___spaceId = 'roles___oss___mainImage___spaceId',
  roles___oss___mainImage___createdAt = 'roles___oss___mainImage___createdAt',
  roles___oss___mainImage___updatedAt = 'roles___oss___mainImage___updatedAt',
  roles___oss___mainImage___title = 'roles___oss___mainImage___title',
  roles___oss___mainImage___description = 'roles___oss___mainImage___description',
  roles___oss___mainImage___node_locale = 'roles___oss___mainImage___node_locale',
  roles___oss___mainImage___children = 'roles___oss___mainImage___children',
  roles___oss___roles = 'roles___oss___roles',
  roles___oss___roles___contentful_id = 'roles___oss___roles___contentful_id',
  roles___oss___roles___id = 'roles___oss___roles___id',
  roles___oss___roles___node_locale = 'roles___oss___roles___node_locale',
  roles___oss___roles___name = 'roles___oss___roles___name',
  roles___oss___roles___project = 'roles___oss___roles___project',
  roles___oss___roles___oss = 'roles___oss___roles___oss',
  roles___oss___roles___spaceId = 'roles___oss___roles___spaceId',
  roles___oss___roles___createdAt = 'roles___oss___roles___createdAt',
  roles___oss___roles___updatedAt = 'roles___oss___roles___updatedAt',
  roles___oss___roles___children = 'roles___oss___roles___children',
  roles___oss___assigns = 'roles___oss___assigns',
  roles___oss___assigns___contentful_id = 'roles___oss___assigns___contentful_id',
  roles___oss___assigns___id = 'roles___oss___assigns___id',
  roles___oss___assigns___node_locale = 'roles___oss___assigns___node_locale',
  roles___oss___assigns___name = 'roles___oss___assigns___name',
  roles___oss___assigns___oss = 'roles___oss___assigns___oss',
  roles___oss___assigns___spaceId = 'roles___oss___assigns___spaceId',
  roles___oss___assigns___createdAt = 'roles___oss___assigns___createdAt',
  roles___oss___assigns___updatedAt = 'roles___oss___assigns___updatedAt',
  roles___oss___assigns___project = 'roles___oss___assigns___project',
  roles___oss___assigns___children = 'roles___oss___assigns___children',
  roles___oss___systems = 'roles___oss___systems',
  roles___oss___systems___contentful_id = 'roles___oss___systems___contentful_id',
  roles___oss___systems___id = 'roles___oss___systems___id',
  roles___oss___systems___node_locale = 'roles___oss___systems___node_locale',
  roles___oss___systems___name = 'roles___oss___systems___name',
  roles___oss___systems___level = 'roles___oss___systems___level',
  roles___oss___systems___project = 'roles___oss___systems___project',
  roles___oss___systems___spaceId = 'roles___oss___systems___spaceId',
  roles___oss___systems___createdAt = 'roles___oss___systems___createdAt',
  roles___oss___systems___updatedAt = 'roles___oss___systems___updatedAt',
  roles___oss___systems___oss = 'roles___oss___systems___oss',
  roles___oss___systems___skill_map = 'roles___oss___systems___skill_map',
  roles___oss___systems___children = 'roles___oss___systems___children',
  roles___oss___languages = 'roles___oss___languages',
  roles___oss___languages___contentful_id = 'roles___oss___languages___contentful_id',
  roles___oss___languages___id = 'roles___oss___languages___id',
  roles___oss___languages___node_locale = 'roles___oss___languages___node_locale',
  roles___oss___languages___name = 'roles___oss___languages___name',
  roles___oss___languages___level = 'roles___oss___languages___level',
  roles___oss___languages___project = 'roles___oss___languages___project',
  roles___oss___languages___spaceId = 'roles___oss___languages___spaceId',
  roles___oss___languages___createdAt = 'roles___oss___languages___createdAt',
  roles___oss___languages___updatedAt = 'roles___oss___languages___updatedAt',
  roles___oss___languages___oss = 'roles___oss___languages___oss',
  roles___oss___languages___skill_map = 'roles___oss___languages___skill_map',
  roles___oss___languages___children = 'roles___oss___languages___children',
  roles___oss___tools = 'roles___oss___tools',
  roles___oss___tools___contentful_id = 'roles___oss___tools___contentful_id',
  roles___oss___tools___id = 'roles___oss___tools___id',
  roles___oss___tools___node_locale = 'roles___oss___tools___node_locale',
  roles___oss___tools___name = 'roles___oss___tools___name',
  roles___oss___tools___level = 'roles___oss___tools___level',
  roles___oss___tools___project = 'roles___oss___tools___project',
  roles___oss___tools___spaceId = 'roles___oss___tools___spaceId',
  roles___oss___tools___createdAt = 'roles___oss___tools___createdAt',
  roles___oss___tools___updatedAt = 'roles___oss___tools___updatedAt',
  roles___oss___tools___oss = 'roles___oss___tools___oss',
  roles___oss___tools___skill_map = 'roles___oss___tools___skill_map',
  roles___oss___tools___children = 'roles___oss___tools___children',
  roles___oss___spaceId = 'roles___oss___spaceId',
  roles___oss___createdAt = 'roles___oss___createdAt',
  roles___oss___updatedAt = 'roles___oss___updatedAt',
  roles___oss___sys___type = 'roles___oss___sys___type',
  roles___oss___sys___revision = 'roles___oss___sys___revision',
  roles___oss___parent___id = 'roles___oss___parent___id',
  roles___oss___parent___children = 'roles___oss___parent___children',
  roles___oss___children = 'roles___oss___children',
  roles___oss___children___id = 'roles___oss___children___id',
  roles___oss___children___children = 'roles___oss___children___children',
  roles___oss___internal___content = 'roles___oss___internal___content',
  roles___oss___internal___contentDigest = 'roles___oss___internal___contentDigest',
  roles___oss___internal___description = 'roles___oss___internal___description',
  roles___oss___internal___fieldOwners = 'roles___oss___internal___fieldOwners',
  roles___oss___internal___ignoreType = 'roles___oss___internal___ignoreType',
  roles___oss___internal___mediaType = 'roles___oss___internal___mediaType',
  roles___oss___internal___owner = 'roles___oss___internal___owner',
  roles___oss___internal___type = 'roles___oss___internal___type',
  roles___spaceId = 'roles___spaceId',
  roles___createdAt = 'roles___createdAt',
  roles___updatedAt = 'roles___updatedAt',
  roles___sys___type = 'roles___sys___type',
  roles___sys___revision = 'roles___sys___revision',
  roles___parent___id = 'roles___parent___id',
  roles___parent___parent___id = 'roles___parent___parent___id',
  roles___parent___parent___children = 'roles___parent___parent___children',
  roles___parent___children = 'roles___parent___children',
  roles___parent___children___id = 'roles___parent___children___id',
  roles___parent___children___children = 'roles___parent___children___children',
  roles___parent___internal___content = 'roles___parent___internal___content',
  roles___parent___internal___contentDigest = 'roles___parent___internal___contentDigest',
  roles___parent___internal___description = 'roles___parent___internal___description',
  roles___parent___internal___fieldOwners = 'roles___parent___internal___fieldOwners',
  roles___parent___internal___ignoreType = 'roles___parent___internal___ignoreType',
  roles___parent___internal___mediaType = 'roles___parent___internal___mediaType',
  roles___parent___internal___owner = 'roles___parent___internal___owner',
  roles___parent___internal___type = 'roles___parent___internal___type',
  roles___children = 'roles___children',
  roles___children___id = 'roles___children___id',
  roles___children___parent___id = 'roles___children___parent___id',
  roles___children___parent___children = 'roles___children___parent___children',
  roles___children___children = 'roles___children___children',
  roles___children___children___id = 'roles___children___children___id',
  roles___children___children___children = 'roles___children___children___children',
  roles___children___internal___content = 'roles___children___internal___content',
  roles___children___internal___contentDigest = 'roles___children___internal___contentDigest',
  roles___children___internal___description = 'roles___children___internal___description',
  roles___children___internal___fieldOwners = 'roles___children___internal___fieldOwners',
  roles___children___internal___ignoreType = 'roles___children___internal___ignoreType',
  roles___children___internal___mediaType = 'roles___children___internal___mediaType',
  roles___children___internal___owner = 'roles___children___internal___owner',
  roles___children___internal___type = 'roles___children___internal___type',
  roles___internal___content = 'roles___internal___content',
  roles___internal___contentDigest = 'roles___internal___contentDigest',
  roles___internal___description = 'roles___internal___description',
  roles___internal___fieldOwners = 'roles___internal___fieldOwners',
  roles___internal___ignoreType = 'roles___internal___ignoreType',
  roles___internal___mediaType = 'roles___internal___mediaType',
  roles___internal___owner = 'roles___internal___owner',
  roles___internal___type = 'roles___internal___type',
  assigns = 'assigns',
  assigns___contentful_id = 'assigns___contentful_id',
  assigns___id = 'assigns___id',
  assigns___node_locale = 'assigns___node_locale',
  assigns___name = 'assigns___name',
  assigns___oss = 'assigns___oss',
  assigns___oss___contentful_id = 'assigns___oss___contentful_id',
  assigns___oss___id = 'assigns___oss___id',
  assigns___oss___node_locale = 'assigns___oss___node_locale',
  assigns___oss___name = 'assigns___oss___name',
  assigns___oss___slug = 'assigns___oss___slug',
  assigns___oss___startDate = 'assigns___oss___startDate',
  assigns___oss___during = 'assigns___oss___during',
  assigns___oss___comment = 'assigns___oss___comment',
  assigns___oss___siteUrl = 'assigns___oss___siteUrl',
  assigns___oss___sourceUrl = 'assigns___oss___sourceUrl',
  assigns___oss___mainImage___contentful_id = 'assigns___oss___mainImage___contentful_id',
  assigns___oss___mainImage___id = 'assigns___oss___mainImage___id',
  assigns___oss___mainImage___spaceId = 'assigns___oss___mainImage___spaceId',
  assigns___oss___mainImage___createdAt = 'assigns___oss___mainImage___createdAt',
  assigns___oss___mainImage___updatedAt = 'assigns___oss___mainImage___updatedAt',
  assigns___oss___mainImage___title = 'assigns___oss___mainImage___title',
  assigns___oss___mainImage___description = 'assigns___oss___mainImage___description',
  assigns___oss___mainImage___node_locale = 'assigns___oss___mainImage___node_locale',
  assigns___oss___mainImage___children = 'assigns___oss___mainImage___children',
  assigns___oss___roles = 'assigns___oss___roles',
  assigns___oss___roles___contentful_id = 'assigns___oss___roles___contentful_id',
  assigns___oss___roles___id = 'assigns___oss___roles___id',
  assigns___oss___roles___node_locale = 'assigns___oss___roles___node_locale',
  assigns___oss___roles___name = 'assigns___oss___roles___name',
  assigns___oss___roles___project = 'assigns___oss___roles___project',
  assigns___oss___roles___oss = 'assigns___oss___roles___oss',
  assigns___oss___roles___spaceId = 'assigns___oss___roles___spaceId',
  assigns___oss___roles___createdAt = 'assigns___oss___roles___createdAt',
  assigns___oss___roles___updatedAt = 'assigns___oss___roles___updatedAt',
  assigns___oss___roles___children = 'assigns___oss___roles___children',
  assigns___oss___assigns = 'assigns___oss___assigns',
  assigns___oss___assigns___contentful_id = 'assigns___oss___assigns___contentful_id',
  assigns___oss___assigns___id = 'assigns___oss___assigns___id',
  assigns___oss___assigns___node_locale = 'assigns___oss___assigns___node_locale',
  assigns___oss___assigns___name = 'assigns___oss___assigns___name',
  assigns___oss___assigns___oss = 'assigns___oss___assigns___oss',
  assigns___oss___assigns___spaceId = 'assigns___oss___assigns___spaceId',
  assigns___oss___assigns___createdAt = 'assigns___oss___assigns___createdAt',
  assigns___oss___assigns___updatedAt = 'assigns___oss___assigns___updatedAt',
  assigns___oss___assigns___project = 'assigns___oss___assigns___project',
  assigns___oss___assigns___children = 'assigns___oss___assigns___children',
  assigns___oss___systems = 'assigns___oss___systems',
  assigns___oss___systems___contentful_id = 'assigns___oss___systems___contentful_id',
  assigns___oss___systems___id = 'assigns___oss___systems___id',
  assigns___oss___systems___node_locale = 'assigns___oss___systems___node_locale',
  assigns___oss___systems___name = 'assigns___oss___systems___name',
  assigns___oss___systems___level = 'assigns___oss___systems___level',
  assigns___oss___systems___project = 'assigns___oss___systems___project',
  assigns___oss___systems___spaceId = 'assigns___oss___systems___spaceId',
  assigns___oss___systems___createdAt = 'assigns___oss___systems___createdAt',
  assigns___oss___systems___updatedAt = 'assigns___oss___systems___updatedAt',
  assigns___oss___systems___oss = 'assigns___oss___systems___oss',
  assigns___oss___systems___skill_map = 'assigns___oss___systems___skill_map',
  assigns___oss___systems___children = 'assigns___oss___systems___children',
  assigns___oss___languages = 'assigns___oss___languages',
  assigns___oss___languages___contentful_id = 'assigns___oss___languages___contentful_id',
  assigns___oss___languages___id = 'assigns___oss___languages___id',
  assigns___oss___languages___node_locale = 'assigns___oss___languages___node_locale',
  assigns___oss___languages___name = 'assigns___oss___languages___name',
  assigns___oss___languages___level = 'assigns___oss___languages___level',
  assigns___oss___languages___project = 'assigns___oss___languages___project',
  assigns___oss___languages___spaceId = 'assigns___oss___languages___spaceId',
  assigns___oss___languages___createdAt = 'assigns___oss___languages___createdAt',
  assigns___oss___languages___updatedAt = 'assigns___oss___languages___updatedAt',
  assigns___oss___languages___oss = 'assigns___oss___languages___oss',
  assigns___oss___languages___skill_map = 'assigns___oss___languages___skill_map',
  assigns___oss___languages___children = 'assigns___oss___languages___children',
  assigns___oss___tools = 'assigns___oss___tools',
  assigns___oss___tools___contentful_id = 'assigns___oss___tools___contentful_id',
  assigns___oss___tools___id = 'assigns___oss___tools___id',
  assigns___oss___tools___node_locale = 'assigns___oss___tools___node_locale',
  assigns___oss___tools___name = 'assigns___oss___tools___name',
  assigns___oss___tools___level = 'assigns___oss___tools___level',
  assigns___oss___tools___project = 'assigns___oss___tools___project',
  assigns___oss___tools___spaceId = 'assigns___oss___tools___spaceId',
  assigns___oss___tools___createdAt = 'assigns___oss___tools___createdAt',
  assigns___oss___tools___updatedAt = 'assigns___oss___tools___updatedAt',
  assigns___oss___tools___oss = 'assigns___oss___tools___oss',
  assigns___oss___tools___skill_map = 'assigns___oss___tools___skill_map',
  assigns___oss___tools___children = 'assigns___oss___tools___children',
  assigns___oss___spaceId = 'assigns___oss___spaceId',
  assigns___oss___createdAt = 'assigns___oss___createdAt',
  assigns___oss___updatedAt = 'assigns___oss___updatedAt',
  assigns___oss___sys___type = 'assigns___oss___sys___type',
  assigns___oss___sys___revision = 'assigns___oss___sys___revision',
  assigns___oss___parent___id = 'assigns___oss___parent___id',
  assigns___oss___parent___children = 'assigns___oss___parent___children',
  assigns___oss___children = 'assigns___oss___children',
  assigns___oss___children___id = 'assigns___oss___children___id',
  assigns___oss___children___children = 'assigns___oss___children___children',
  assigns___oss___internal___content = 'assigns___oss___internal___content',
  assigns___oss___internal___contentDigest = 'assigns___oss___internal___contentDigest',
  assigns___oss___internal___description = 'assigns___oss___internal___description',
  assigns___oss___internal___fieldOwners = 'assigns___oss___internal___fieldOwners',
  assigns___oss___internal___ignoreType = 'assigns___oss___internal___ignoreType',
  assigns___oss___internal___mediaType = 'assigns___oss___internal___mediaType',
  assigns___oss___internal___owner = 'assigns___oss___internal___owner',
  assigns___oss___internal___type = 'assigns___oss___internal___type',
  assigns___spaceId = 'assigns___spaceId',
  assigns___createdAt = 'assigns___createdAt',
  assigns___updatedAt = 'assigns___updatedAt',
  assigns___sys___type = 'assigns___sys___type',
  assigns___sys___revision = 'assigns___sys___revision',
  assigns___project = 'assigns___project',
  assigns___project___contentful_id = 'assigns___project___contentful_id',
  assigns___project___id = 'assigns___project___id',
  assigns___project___node_locale = 'assigns___project___node_locale',
  assigns___project___name = 'assigns___project___name',
  assigns___project___startDate = 'assigns___project___startDate',
  assigns___project___during = 'assigns___project___during',
  assigns___project___comment = 'assigns___project___comment',
  assigns___project___roles = 'assigns___project___roles',
  assigns___project___roles___contentful_id = 'assigns___project___roles___contentful_id',
  assigns___project___roles___id = 'assigns___project___roles___id',
  assigns___project___roles___node_locale = 'assigns___project___roles___node_locale',
  assigns___project___roles___name = 'assigns___project___roles___name',
  assigns___project___roles___project = 'assigns___project___roles___project',
  assigns___project___roles___oss = 'assigns___project___roles___oss',
  assigns___project___roles___spaceId = 'assigns___project___roles___spaceId',
  assigns___project___roles___createdAt = 'assigns___project___roles___createdAt',
  assigns___project___roles___updatedAt = 'assigns___project___roles___updatedAt',
  assigns___project___roles___children = 'assigns___project___roles___children',
  assigns___project___assigns = 'assigns___project___assigns',
  assigns___project___assigns___contentful_id = 'assigns___project___assigns___contentful_id',
  assigns___project___assigns___id = 'assigns___project___assigns___id',
  assigns___project___assigns___node_locale = 'assigns___project___assigns___node_locale',
  assigns___project___assigns___name = 'assigns___project___assigns___name',
  assigns___project___assigns___oss = 'assigns___project___assigns___oss',
  assigns___project___assigns___spaceId = 'assigns___project___assigns___spaceId',
  assigns___project___assigns___createdAt = 'assigns___project___assigns___createdAt',
  assigns___project___assigns___updatedAt = 'assigns___project___assigns___updatedAt',
  assigns___project___assigns___project = 'assigns___project___assigns___project',
  assigns___project___assigns___children = 'assigns___project___assigns___children',
  assigns___project___systems = 'assigns___project___systems',
  assigns___project___systems___contentful_id = 'assigns___project___systems___contentful_id',
  assigns___project___systems___id = 'assigns___project___systems___id',
  assigns___project___systems___node_locale = 'assigns___project___systems___node_locale',
  assigns___project___systems___name = 'assigns___project___systems___name',
  assigns___project___systems___level = 'assigns___project___systems___level',
  assigns___project___systems___project = 'assigns___project___systems___project',
  assigns___project___systems___spaceId = 'assigns___project___systems___spaceId',
  assigns___project___systems___createdAt = 'assigns___project___systems___createdAt',
  assigns___project___systems___updatedAt = 'assigns___project___systems___updatedAt',
  assigns___project___systems___oss = 'assigns___project___systems___oss',
  assigns___project___systems___skill_map = 'assigns___project___systems___skill_map',
  assigns___project___systems___children = 'assigns___project___systems___children',
  assigns___project___languages = 'assigns___project___languages',
  assigns___project___languages___contentful_id = 'assigns___project___languages___contentful_id',
  assigns___project___languages___id = 'assigns___project___languages___id',
  assigns___project___languages___node_locale = 'assigns___project___languages___node_locale',
  assigns___project___languages___name = 'assigns___project___languages___name',
  assigns___project___languages___level = 'assigns___project___languages___level',
  assigns___project___languages___project = 'assigns___project___languages___project',
  assigns___project___languages___spaceId = 'assigns___project___languages___spaceId',
  assigns___project___languages___createdAt = 'assigns___project___languages___createdAt',
  assigns___project___languages___updatedAt = 'assigns___project___languages___updatedAt',
  assigns___project___languages___oss = 'assigns___project___languages___oss',
  assigns___project___languages___skill_map = 'assigns___project___languages___skill_map',
  assigns___project___languages___children = 'assigns___project___languages___children',
  assigns___project___tools = 'assigns___project___tools',
  assigns___project___tools___contentful_id = 'assigns___project___tools___contentful_id',
  assigns___project___tools___id = 'assigns___project___tools___id',
  assigns___project___tools___node_locale = 'assigns___project___tools___node_locale',
  assigns___project___tools___name = 'assigns___project___tools___name',
  assigns___project___tools___level = 'assigns___project___tools___level',
  assigns___project___tools___project = 'assigns___project___tools___project',
  assigns___project___tools___spaceId = 'assigns___project___tools___spaceId',
  assigns___project___tools___createdAt = 'assigns___project___tools___createdAt',
  assigns___project___tools___updatedAt = 'assigns___project___tools___updatedAt',
  assigns___project___tools___oss = 'assigns___project___tools___oss',
  assigns___project___tools___skill_map = 'assigns___project___tools___skill_map',
  assigns___project___tools___children = 'assigns___project___tools___children',
  assigns___project___icon___contentful_id = 'assigns___project___icon___contentful_id',
  assigns___project___icon___id = 'assigns___project___icon___id',
  assigns___project___icon___node_locale = 'assigns___project___icon___node_locale',
  assigns___project___icon___title = 'assigns___project___icon___title',
  assigns___project___icon___history = 'assigns___project___icon___history',
  assigns___project___icon___spaceId = 'assigns___project___icon___spaceId',
  assigns___project___icon___createdAt = 'assigns___project___icon___createdAt',
  assigns___project___icon___updatedAt = 'assigns___project___icon___updatedAt',
  assigns___project___icon___what_i_can_do = 'assigns___project___icon___what_i_can_do',
  assigns___project___icon___project = 'assigns___project___icon___project',
  assigns___project___icon___contact = 'assigns___project___icon___contact',
  assigns___project___icon___children = 'assigns___project___icon___children',
  assigns___project___spaceId = 'assigns___project___spaceId',
  assigns___project___createdAt = 'assigns___project___createdAt',
  assigns___project___updatedAt = 'assigns___project___updatedAt',
  assigns___project___sys___type = 'assigns___project___sys___type',
  assigns___project___sys___revision = 'assigns___project___sys___revision',
  assigns___project___parent___id = 'assigns___project___parent___id',
  assigns___project___parent___children = 'assigns___project___parent___children',
  assigns___project___children = 'assigns___project___children',
  assigns___project___children___id = 'assigns___project___children___id',
  assigns___project___children___children = 'assigns___project___children___children',
  assigns___project___internal___content = 'assigns___project___internal___content',
  assigns___project___internal___contentDigest = 'assigns___project___internal___contentDigest',
  assigns___project___internal___description = 'assigns___project___internal___description',
  assigns___project___internal___fieldOwners = 'assigns___project___internal___fieldOwners',
  assigns___project___internal___ignoreType = 'assigns___project___internal___ignoreType',
  assigns___project___internal___mediaType = 'assigns___project___internal___mediaType',
  assigns___project___internal___owner = 'assigns___project___internal___owner',
  assigns___project___internal___type = 'assigns___project___internal___type',
  assigns___parent___id = 'assigns___parent___id',
  assigns___parent___parent___id = 'assigns___parent___parent___id',
  assigns___parent___parent___children = 'assigns___parent___parent___children',
  assigns___parent___children = 'assigns___parent___children',
  assigns___parent___children___id = 'assigns___parent___children___id',
  assigns___parent___children___children = 'assigns___parent___children___children',
  assigns___parent___internal___content = 'assigns___parent___internal___content',
  assigns___parent___internal___contentDigest = 'assigns___parent___internal___contentDigest',
  assigns___parent___internal___description = 'assigns___parent___internal___description',
  assigns___parent___internal___fieldOwners = 'assigns___parent___internal___fieldOwners',
  assigns___parent___internal___ignoreType = 'assigns___parent___internal___ignoreType',
  assigns___parent___internal___mediaType = 'assigns___parent___internal___mediaType',
  assigns___parent___internal___owner = 'assigns___parent___internal___owner',
  assigns___parent___internal___type = 'assigns___parent___internal___type',
  assigns___children = 'assigns___children',
  assigns___children___id = 'assigns___children___id',
  assigns___children___parent___id = 'assigns___children___parent___id',
  assigns___children___parent___children = 'assigns___children___parent___children',
  assigns___children___children = 'assigns___children___children',
  assigns___children___children___id = 'assigns___children___children___id',
  assigns___children___children___children = 'assigns___children___children___children',
  assigns___children___internal___content = 'assigns___children___internal___content',
  assigns___children___internal___contentDigest = 'assigns___children___internal___contentDigest',
  assigns___children___internal___description = 'assigns___children___internal___description',
  assigns___children___internal___fieldOwners = 'assigns___children___internal___fieldOwners',
  assigns___children___internal___ignoreType = 'assigns___children___internal___ignoreType',
  assigns___children___internal___mediaType = 'assigns___children___internal___mediaType',
  assigns___children___internal___owner = 'assigns___children___internal___owner',
  assigns___children___internal___type = 'assigns___children___internal___type',
  assigns___internal___content = 'assigns___internal___content',
  assigns___internal___contentDigest = 'assigns___internal___contentDigest',
  assigns___internal___description = 'assigns___internal___description',
  assigns___internal___fieldOwners = 'assigns___internal___fieldOwners',
  assigns___internal___ignoreType = 'assigns___internal___ignoreType',
  assigns___internal___mediaType = 'assigns___internal___mediaType',
  assigns___internal___owner = 'assigns___internal___owner',
  assigns___internal___type = 'assigns___internal___type',
  systems = 'systems',
  systems___contentful_id = 'systems___contentful_id',
  systems___id = 'systems___id',
  systems___node_locale = 'systems___node_locale',
  systems___name = 'systems___name',
  systems___level = 'systems___level',
  systems___project = 'systems___project',
  systems___project___contentful_id = 'systems___project___contentful_id',
  systems___project___id = 'systems___project___id',
  systems___project___node_locale = 'systems___project___node_locale',
  systems___project___name = 'systems___project___name',
  systems___project___startDate = 'systems___project___startDate',
  systems___project___during = 'systems___project___during',
  systems___project___comment = 'systems___project___comment',
  systems___project___roles = 'systems___project___roles',
  systems___project___roles___contentful_id = 'systems___project___roles___contentful_id',
  systems___project___roles___id = 'systems___project___roles___id',
  systems___project___roles___node_locale = 'systems___project___roles___node_locale',
  systems___project___roles___name = 'systems___project___roles___name',
  systems___project___roles___project = 'systems___project___roles___project',
  systems___project___roles___oss = 'systems___project___roles___oss',
  systems___project___roles___spaceId = 'systems___project___roles___spaceId',
  systems___project___roles___createdAt = 'systems___project___roles___createdAt',
  systems___project___roles___updatedAt = 'systems___project___roles___updatedAt',
  systems___project___roles___children = 'systems___project___roles___children',
  systems___project___assigns = 'systems___project___assigns',
  systems___project___assigns___contentful_id = 'systems___project___assigns___contentful_id',
  systems___project___assigns___id = 'systems___project___assigns___id',
  systems___project___assigns___node_locale = 'systems___project___assigns___node_locale',
  systems___project___assigns___name = 'systems___project___assigns___name',
  systems___project___assigns___oss = 'systems___project___assigns___oss',
  systems___project___assigns___spaceId = 'systems___project___assigns___spaceId',
  systems___project___assigns___createdAt = 'systems___project___assigns___createdAt',
  systems___project___assigns___updatedAt = 'systems___project___assigns___updatedAt',
  systems___project___assigns___project = 'systems___project___assigns___project',
  systems___project___assigns___children = 'systems___project___assigns___children',
  systems___project___systems = 'systems___project___systems',
  systems___project___systems___contentful_id = 'systems___project___systems___contentful_id',
  systems___project___systems___id = 'systems___project___systems___id',
  systems___project___systems___node_locale = 'systems___project___systems___node_locale',
  systems___project___systems___name = 'systems___project___systems___name',
  systems___project___systems___level = 'systems___project___systems___level',
  systems___project___systems___project = 'systems___project___systems___project',
  systems___project___systems___spaceId = 'systems___project___systems___spaceId',
  systems___project___systems___createdAt = 'systems___project___systems___createdAt',
  systems___project___systems___updatedAt = 'systems___project___systems___updatedAt',
  systems___project___systems___oss = 'systems___project___systems___oss',
  systems___project___systems___skill_map = 'systems___project___systems___skill_map',
  systems___project___systems___children = 'systems___project___systems___children',
  systems___project___languages = 'systems___project___languages',
  systems___project___languages___contentful_id = 'systems___project___languages___contentful_id',
  systems___project___languages___id = 'systems___project___languages___id',
  systems___project___languages___node_locale = 'systems___project___languages___node_locale',
  systems___project___languages___name = 'systems___project___languages___name',
  systems___project___languages___level = 'systems___project___languages___level',
  systems___project___languages___project = 'systems___project___languages___project',
  systems___project___languages___spaceId = 'systems___project___languages___spaceId',
  systems___project___languages___createdAt = 'systems___project___languages___createdAt',
  systems___project___languages___updatedAt = 'systems___project___languages___updatedAt',
  systems___project___languages___oss = 'systems___project___languages___oss',
  systems___project___languages___skill_map = 'systems___project___languages___skill_map',
  systems___project___languages___children = 'systems___project___languages___children',
  systems___project___tools = 'systems___project___tools',
  systems___project___tools___contentful_id = 'systems___project___tools___contentful_id',
  systems___project___tools___id = 'systems___project___tools___id',
  systems___project___tools___node_locale = 'systems___project___tools___node_locale',
  systems___project___tools___name = 'systems___project___tools___name',
  systems___project___tools___level = 'systems___project___tools___level',
  systems___project___tools___project = 'systems___project___tools___project',
  systems___project___tools___spaceId = 'systems___project___tools___spaceId',
  systems___project___tools___createdAt = 'systems___project___tools___createdAt',
  systems___project___tools___updatedAt = 'systems___project___tools___updatedAt',
  systems___project___tools___oss = 'systems___project___tools___oss',
  systems___project___tools___skill_map = 'systems___project___tools___skill_map',
  systems___project___tools___children = 'systems___project___tools___children',
  systems___project___icon___contentful_id = 'systems___project___icon___contentful_id',
  systems___project___icon___id = 'systems___project___icon___id',
  systems___project___icon___node_locale = 'systems___project___icon___node_locale',
  systems___project___icon___title = 'systems___project___icon___title',
  systems___project___icon___history = 'systems___project___icon___history',
  systems___project___icon___spaceId = 'systems___project___icon___spaceId',
  systems___project___icon___createdAt = 'systems___project___icon___createdAt',
  systems___project___icon___updatedAt = 'systems___project___icon___updatedAt',
  systems___project___icon___what_i_can_do = 'systems___project___icon___what_i_can_do',
  systems___project___icon___project = 'systems___project___icon___project',
  systems___project___icon___contact = 'systems___project___icon___contact',
  systems___project___icon___children = 'systems___project___icon___children',
  systems___project___spaceId = 'systems___project___spaceId',
  systems___project___createdAt = 'systems___project___createdAt',
  systems___project___updatedAt = 'systems___project___updatedAt',
  systems___project___sys___type = 'systems___project___sys___type',
  systems___project___sys___revision = 'systems___project___sys___revision',
  systems___project___parent___id = 'systems___project___parent___id',
  systems___project___parent___children = 'systems___project___parent___children',
  systems___project___children = 'systems___project___children',
  systems___project___children___id = 'systems___project___children___id',
  systems___project___children___children = 'systems___project___children___children',
  systems___project___internal___content = 'systems___project___internal___content',
  systems___project___internal___contentDigest = 'systems___project___internal___contentDigest',
  systems___project___internal___description = 'systems___project___internal___description',
  systems___project___internal___fieldOwners = 'systems___project___internal___fieldOwners',
  systems___project___internal___ignoreType = 'systems___project___internal___ignoreType',
  systems___project___internal___mediaType = 'systems___project___internal___mediaType',
  systems___project___internal___owner = 'systems___project___internal___owner',
  systems___project___internal___type = 'systems___project___internal___type',
  systems___spaceId = 'systems___spaceId',
  systems___createdAt = 'systems___createdAt',
  systems___updatedAt = 'systems___updatedAt',
  systems___sys___type = 'systems___sys___type',
  systems___sys___revision = 'systems___sys___revision',
  systems___oss = 'systems___oss',
  systems___oss___contentful_id = 'systems___oss___contentful_id',
  systems___oss___id = 'systems___oss___id',
  systems___oss___node_locale = 'systems___oss___node_locale',
  systems___oss___name = 'systems___oss___name',
  systems___oss___slug = 'systems___oss___slug',
  systems___oss___startDate = 'systems___oss___startDate',
  systems___oss___during = 'systems___oss___during',
  systems___oss___comment = 'systems___oss___comment',
  systems___oss___siteUrl = 'systems___oss___siteUrl',
  systems___oss___sourceUrl = 'systems___oss___sourceUrl',
  systems___oss___mainImage___contentful_id = 'systems___oss___mainImage___contentful_id',
  systems___oss___mainImage___id = 'systems___oss___mainImage___id',
  systems___oss___mainImage___spaceId = 'systems___oss___mainImage___spaceId',
  systems___oss___mainImage___createdAt = 'systems___oss___mainImage___createdAt',
  systems___oss___mainImage___updatedAt = 'systems___oss___mainImage___updatedAt',
  systems___oss___mainImage___title = 'systems___oss___mainImage___title',
  systems___oss___mainImage___description = 'systems___oss___mainImage___description',
  systems___oss___mainImage___node_locale = 'systems___oss___mainImage___node_locale',
  systems___oss___mainImage___children = 'systems___oss___mainImage___children',
  systems___oss___roles = 'systems___oss___roles',
  systems___oss___roles___contentful_id = 'systems___oss___roles___contentful_id',
  systems___oss___roles___id = 'systems___oss___roles___id',
  systems___oss___roles___node_locale = 'systems___oss___roles___node_locale',
  systems___oss___roles___name = 'systems___oss___roles___name',
  systems___oss___roles___project = 'systems___oss___roles___project',
  systems___oss___roles___oss = 'systems___oss___roles___oss',
  systems___oss___roles___spaceId = 'systems___oss___roles___spaceId',
  systems___oss___roles___createdAt = 'systems___oss___roles___createdAt',
  systems___oss___roles___updatedAt = 'systems___oss___roles___updatedAt',
  systems___oss___roles___children = 'systems___oss___roles___children',
  systems___oss___assigns = 'systems___oss___assigns',
  systems___oss___assigns___contentful_id = 'systems___oss___assigns___contentful_id',
  systems___oss___assigns___id = 'systems___oss___assigns___id',
  systems___oss___assigns___node_locale = 'systems___oss___assigns___node_locale',
  systems___oss___assigns___name = 'systems___oss___assigns___name',
  systems___oss___assigns___oss = 'systems___oss___assigns___oss',
  systems___oss___assigns___spaceId = 'systems___oss___assigns___spaceId',
  systems___oss___assigns___createdAt = 'systems___oss___assigns___createdAt',
  systems___oss___assigns___updatedAt = 'systems___oss___assigns___updatedAt',
  systems___oss___assigns___project = 'systems___oss___assigns___project',
  systems___oss___assigns___children = 'systems___oss___assigns___children',
  systems___oss___systems = 'systems___oss___systems',
  systems___oss___systems___contentful_id = 'systems___oss___systems___contentful_id',
  systems___oss___systems___id = 'systems___oss___systems___id',
  systems___oss___systems___node_locale = 'systems___oss___systems___node_locale',
  systems___oss___systems___name = 'systems___oss___systems___name',
  systems___oss___systems___level = 'systems___oss___systems___level',
  systems___oss___systems___project = 'systems___oss___systems___project',
  systems___oss___systems___spaceId = 'systems___oss___systems___spaceId',
  systems___oss___systems___createdAt = 'systems___oss___systems___createdAt',
  systems___oss___systems___updatedAt = 'systems___oss___systems___updatedAt',
  systems___oss___systems___oss = 'systems___oss___systems___oss',
  systems___oss___systems___skill_map = 'systems___oss___systems___skill_map',
  systems___oss___systems___children = 'systems___oss___systems___children',
  systems___oss___languages = 'systems___oss___languages',
  systems___oss___languages___contentful_id = 'systems___oss___languages___contentful_id',
  systems___oss___languages___id = 'systems___oss___languages___id',
  systems___oss___languages___node_locale = 'systems___oss___languages___node_locale',
  systems___oss___languages___name = 'systems___oss___languages___name',
  systems___oss___languages___level = 'systems___oss___languages___level',
  systems___oss___languages___project = 'systems___oss___languages___project',
  systems___oss___languages___spaceId = 'systems___oss___languages___spaceId',
  systems___oss___languages___createdAt = 'systems___oss___languages___createdAt',
  systems___oss___languages___updatedAt = 'systems___oss___languages___updatedAt',
  systems___oss___languages___oss = 'systems___oss___languages___oss',
  systems___oss___languages___skill_map = 'systems___oss___languages___skill_map',
  systems___oss___languages___children = 'systems___oss___languages___children',
  systems___oss___tools = 'systems___oss___tools',
  systems___oss___tools___contentful_id = 'systems___oss___tools___contentful_id',
  systems___oss___tools___id = 'systems___oss___tools___id',
  systems___oss___tools___node_locale = 'systems___oss___tools___node_locale',
  systems___oss___tools___name = 'systems___oss___tools___name',
  systems___oss___tools___level = 'systems___oss___tools___level',
  systems___oss___tools___project = 'systems___oss___tools___project',
  systems___oss___tools___spaceId = 'systems___oss___tools___spaceId',
  systems___oss___tools___createdAt = 'systems___oss___tools___createdAt',
  systems___oss___tools___updatedAt = 'systems___oss___tools___updatedAt',
  systems___oss___tools___oss = 'systems___oss___tools___oss',
  systems___oss___tools___skill_map = 'systems___oss___tools___skill_map',
  systems___oss___tools___children = 'systems___oss___tools___children',
  systems___oss___spaceId = 'systems___oss___spaceId',
  systems___oss___createdAt = 'systems___oss___createdAt',
  systems___oss___updatedAt = 'systems___oss___updatedAt',
  systems___oss___sys___type = 'systems___oss___sys___type',
  systems___oss___sys___revision = 'systems___oss___sys___revision',
  systems___oss___parent___id = 'systems___oss___parent___id',
  systems___oss___parent___children = 'systems___oss___parent___children',
  systems___oss___children = 'systems___oss___children',
  systems___oss___children___id = 'systems___oss___children___id',
  systems___oss___children___children = 'systems___oss___children___children',
  systems___oss___internal___content = 'systems___oss___internal___content',
  systems___oss___internal___contentDigest = 'systems___oss___internal___contentDigest',
  systems___oss___internal___description = 'systems___oss___internal___description',
  systems___oss___internal___fieldOwners = 'systems___oss___internal___fieldOwners',
  systems___oss___internal___ignoreType = 'systems___oss___internal___ignoreType',
  systems___oss___internal___mediaType = 'systems___oss___internal___mediaType',
  systems___oss___internal___owner = 'systems___oss___internal___owner',
  systems___oss___internal___type = 'systems___oss___internal___type',
  systems___skill_map = 'systems___skill_map',
  systems___skill_map___contentful_id = 'systems___skill_map___contentful_id',
  systems___skill_map___id = 'systems___skill_map___id',
  systems___skill_map___node_locale = 'systems___skill_map___node_locale',
  systems___skill_map___sort = 'systems___skill_map___sort',
  systems___skill_map___name = 'systems___skill_map___name',
  systems___skill_map___expanded = 'systems___skill_map___expanded',
  systems___skill_map___skills = 'systems___skill_map___skills',
  systems___skill_map___skills___contentful_id = 'systems___skill_map___skills___contentful_id',
  systems___skill_map___skills___id = 'systems___skill_map___skills___id',
  systems___skill_map___skills___node_locale = 'systems___skill_map___skills___node_locale',
  systems___skill_map___skills___name = 'systems___skill_map___skills___name',
  systems___skill_map___skills___level = 'systems___skill_map___skills___level',
  systems___skill_map___skills___project = 'systems___skill_map___skills___project',
  systems___skill_map___skills___spaceId = 'systems___skill_map___skills___spaceId',
  systems___skill_map___skills___createdAt = 'systems___skill_map___skills___createdAt',
  systems___skill_map___skills___updatedAt = 'systems___skill_map___skills___updatedAt',
  systems___skill_map___skills___oss = 'systems___skill_map___skills___oss',
  systems___skill_map___skills___skill_map = 'systems___skill_map___skills___skill_map',
  systems___skill_map___skills___children = 'systems___skill_map___skills___children',
  systems___skill_map___spaceId = 'systems___skill_map___spaceId',
  systems___skill_map___createdAt = 'systems___skill_map___createdAt',
  systems___skill_map___updatedAt = 'systems___skill_map___updatedAt',
  systems___skill_map___sys___type = 'systems___skill_map___sys___type',
  systems___skill_map___sys___revision = 'systems___skill_map___sys___revision',
  systems___skill_map___parent___id = 'systems___skill_map___parent___id',
  systems___skill_map___parent___children = 'systems___skill_map___parent___children',
  systems___skill_map___children = 'systems___skill_map___children',
  systems___skill_map___children___id = 'systems___skill_map___children___id',
  systems___skill_map___children___children = 'systems___skill_map___children___children',
  systems___skill_map___internal___content = 'systems___skill_map___internal___content',
  systems___skill_map___internal___contentDigest = 'systems___skill_map___internal___contentDigest',
  systems___skill_map___internal___description = 'systems___skill_map___internal___description',
  systems___skill_map___internal___fieldOwners = 'systems___skill_map___internal___fieldOwners',
  systems___skill_map___internal___ignoreType = 'systems___skill_map___internal___ignoreType',
  systems___skill_map___internal___mediaType = 'systems___skill_map___internal___mediaType',
  systems___skill_map___internal___owner = 'systems___skill_map___internal___owner',
  systems___skill_map___internal___type = 'systems___skill_map___internal___type',
  systems___parent___id = 'systems___parent___id',
  systems___parent___parent___id = 'systems___parent___parent___id',
  systems___parent___parent___children = 'systems___parent___parent___children',
  systems___parent___children = 'systems___parent___children',
  systems___parent___children___id = 'systems___parent___children___id',
  systems___parent___children___children = 'systems___parent___children___children',
  systems___parent___internal___content = 'systems___parent___internal___content',
  systems___parent___internal___contentDigest = 'systems___parent___internal___contentDigest',
  systems___parent___internal___description = 'systems___parent___internal___description',
  systems___parent___internal___fieldOwners = 'systems___parent___internal___fieldOwners',
  systems___parent___internal___ignoreType = 'systems___parent___internal___ignoreType',
  systems___parent___internal___mediaType = 'systems___parent___internal___mediaType',
  systems___parent___internal___owner = 'systems___parent___internal___owner',
  systems___parent___internal___type = 'systems___parent___internal___type',
  systems___children = 'systems___children',
  systems___children___id = 'systems___children___id',
  systems___children___parent___id = 'systems___children___parent___id',
  systems___children___parent___children = 'systems___children___parent___children',
  systems___children___children = 'systems___children___children',
  systems___children___children___id = 'systems___children___children___id',
  systems___children___children___children = 'systems___children___children___children',
  systems___children___internal___content = 'systems___children___internal___content',
  systems___children___internal___contentDigest = 'systems___children___internal___contentDigest',
  systems___children___internal___description = 'systems___children___internal___description',
  systems___children___internal___fieldOwners = 'systems___children___internal___fieldOwners',
  systems___children___internal___ignoreType = 'systems___children___internal___ignoreType',
  systems___children___internal___mediaType = 'systems___children___internal___mediaType',
  systems___children___internal___owner = 'systems___children___internal___owner',
  systems___children___internal___type = 'systems___children___internal___type',
  systems___internal___content = 'systems___internal___content',
  systems___internal___contentDigest = 'systems___internal___contentDigest',
  systems___internal___description = 'systems___internal___description',
  systems___internal___fieldOwners = 'systems___internal___fieldOwners',
  systems___internal___ignoreType = 'systems___internal___ignoreType',
  systems___internal___mediaType = 'systems___internal___mediaType',
  systems___internal___owner = 'systems___internal___owner',
  systems___internal___type = 'systems___internal___type',
  languages = 'languages',
  languages___contentful_id = 'languages___contentful_id',
  languages___id = 'languages___id',
  languages___node_locale = 'languages___node_locale',
  languages___name = 'languages___name',
  languages___level = 'languages___level',
  languages___project = 'languages___project',
  languages___project___contentful_id = 'languages___project___contentful_id',
  languages___project___id = 'languages___project___id',
  languages___project___node_locale = 'languages___project___node_locale',
  languages___project___name = 'languages___project___name',
  languages___project___startDate = 'languages___project___startDate',
  languages___project___during = 'languages___project___during',
  languages___project___comment = 'languages___project___comment',
  languages___project___roles = 'languages___project___roles',
  languages___project___roles___contentful_id = 'languages___project___roles___contentful_id',
  languages___project___roles___id = 'languages___project___roles___id',
  languages___project___roles___node_locale = 'languages___project___roles___node_locale',
  languages___project___roles___name = 'languages___project___roles___name',
  languages___project___roles___project = 'languages___project___roles___project',
  languages___project___roles___oss = 'languages___project___roles___oss',
  languages___project___roles___spaceId = 'languages___project___roles___spaceId',
  languages___project___roles___createdAt = 'languages___project___roles___createdAt',
  languages___project___roles___updatedAt = 'languages___project___roles___updatedAt',
  languages___project___roles___children = 'languages___project___roles___children',
  languages___project___assigns = 'languages___project___assigns',
  languages___project___assigns___contentful_id = 'languages___project___assigns___contentful_id',
  languages___project___assigns___id = 'languages___project___assigns___id',
  languages___project___assigns___node_locale = 'languages___project___assigns___node_locale',
  languages___project___assigns___name = 'languages___project___assigns___name',
  languages___project___assigns___oss = 'languages___project___assigns___oss',
  languages___project___assigns___spaceId = 'languages___project___assigns___spaceId',
  languages___project___assigns___createdAt = 'languages___project___assigns___createdAt',
  languages___project___assigns___updatedAt = 'languages___project___assigns___updatedAt',
  languages___project___assigns___project = 'languages___project___assigns___project',
  languages___project___assigns___children = 'languages___project___assigns___children',
  languages___project___systems = 'languages___project___systems',
  languages___project___systems___contentful_id = 'languages___project___systems___contentful_id',
  languages___project___systems___id = 'languages___project___systems___id',
  languages___project___systems___node_locale = 'languages___project___systems___node_locale',
  languages___project___systems___name = 'languages___project___systems___name',
  languages___project___systems___level = 'languages___project___systems___level',
  languages___project___systems___project = 'languages___project___systems___project',
  languages___project___systems___spaceId = 'languages___project___systems___spaceId',
  languages___project___systems___createdAt = 'languages___project___systems___createdAt',
  languages___project___systems___updatedAt = 'languages___project___systems___updatedAt',
  languages___project___systems___oss = 'languages___project___systems___oss',
  languages___project___systems___skill_map = 'languages___project___systems___skill_map',
  languages___project___systems___children = 'languages___project___systems___children',
  languages___project___languages = 'languages___project___languages',
  languages___project___languages___contentful_id = 'languages___project___languages___contentful_id',
  languages___project___languages___id = 'languages___project___languages___id',
  languages___project___languages___node_locale = 'languages___project___languages___node_locale',
  languages___project___languages___name = 'languages___project___languages___name',
  languages___project___languages___level = 'languages___project___languages___level',
  languages___project___languages___project = 'languages___project___languages___project',
  languages___project___languages___spaceId = 'languages___project___languages___spaceId',
  languages___project___languages___createdAt = 'languages___project___languages___createdAt',
  languages___project___languages___updatedAt = 'languages___project___languages___updatedAt',
  languages___project___languages___oss = 'languages___project___languages___oss',
  languages___project___languages___skill_map = 'languages___project___languages___skill_map',
  languages___project___languages___children = 'languages___project___languages___children',
  languages___project___tools = 'languages___project___tools',
  languages___project___tools___contentful_id = 'languages___project___tools___contentful_id',
  languages___project___tools___id = 'languages___project___tools___id',
  languages___project___tools___node_locale = 'languages___project___tools___node_locale',
  languages___project___tools___name = 'languages___project___tools___name',
  languages___project___tools___level = 'languages___project___tools___level',
  languages___project___tools___project = 'languages___project___tools___project',
  languages___project___tools___spaceId = 'languages___project___tools___spaceId',
  languages___project___tools___createdAt = 'languages___project___tools___createdAt',
  languages___project___tools___updatedAt = 'languages___project___tools___updatedAt',
  languages___project___tools___oss = 'languages___project___tools___oss',
  languages___project___tools___skill_map = 'languages___project___tools___skill_map',
  languages___project___tools___children = 'languages___project___tools___children',
  languages___project___icon___contentful_id = 'languages___project___icon___contentful_id',
  languages___project___icon___id = 'languages___project___icon___id',
  languages___project___icon___node_locale = 'languages___project___icon___node_locale',
  languages___project___icon___title = 'languages___project___icon___title',
  languages___project___icon___history = 'languages___project___icon___history',
  languages___project___icon___spaceId = 'languages___project___icon___spaceId',
  languages___project___icon___createdAt = 'languages___project___icon___createdAt',
  languages___project___icon___updatedAt = 'languages___project___icon___updatedAt',
  languages___project___icon___what_i_can_do = 'languages___project___icon___what_i_can_do',
  languages___project___icon___project = 'languages___project___icon___project',
  languages___project___icon___contact = 'languages___project___icon___contact',
  languages___project___icon___children = 'languages___project___icon___children',
  languages___project___spaceId = 'languages___project___spaceId',
  languages___project___createdAt = 'languages___project___createdAt',
  languages___project___updatedAt = 'languages___project___updatedAt',
  languages___project___sys___type = 'languages___project___sys___type',
  languages___project___sys___revision = 'languages___project___sys___revision',
  languages___project___parent___id = 'languages___project___parent___id',
  languages___project___parent___children = 'languages___project___parent___children',
  languages___project___children = 'languages___project___children',
  languages___project___children___id = 'languages___project___children___id',
  languages___project___children___children = 'languages___project___children___children',
  languages___project___internal___content = 'languages___project___internal___content',
  languages___project___internal___contentDigest = 'languages___project___internal___contentDigest',
  languages___project___internal___description = 'languages___project___internal___description',
  languages___project___internal___fieldOwners = 'languages___project___internal___fieldOwners',
  languages___project___internal___ignoreType = 'languages___project___internal___ignoreType',
  languages___project___internal___mediaType = 'languages___project___internal___mediaType',
  languages___project___internal___owner = 'languages___project___internal___owner',
  languages___project___internal___type = 'languages___project___internal___type',
  languages___spaceId = 'languages___spaceId',
  languages___createdAt = 'languages___createdAt',
  languages___updatedAt = 'languages___updatedAt',
  languages___sys___type = 'languages___sys___type',
  languages___sys___revision = 'languages___sys___revision',
  languages___oss = 'languages___oss',
  languages___oss___contentful_id = 'languages___oss___contentful_id',
  languages___oss___id = 'languages___oss___id',
  languages___oss___node_locale = 'languages___oss___node_locale',
  languages___oss___name = 'languages___oss___name',
  languages___oss___slug = 'languages___oss___slug',
  languages___oss___startDate = 'languages___oss___startDate',
  languages___oss___during = 'languages___oss___during',
  languages___oss___comment = 'languages___oss___comment',
  languages___oss___siteUrl = 'languages___oss___siteUrl',
  languages___oss___sourceUrl = 'languages___oss___sourceUrl',
  languages___oss___mainImage___contentful_id = 'languages___oss___mainImage___contentful_id',
  languages___oss___mainImage___id = 'languages___oss___mainImage___id',
  languages___oss___mainImage___spaceId = 'languages___oss___mainImage___spaceId',
  languages___oss___mainImage___createdAt = 'languages___oss___mainImage___createdAt',
  languages___oss___mainImage___updatedAt = 'languages___oss___mainImage___updatedAt',
  languages___oss___mainImage___title = 'languages___oss___mainImage___title',
  languages___oss___mainImage___description = 'languages___oss___mainImage___description',
  languages___oss___mainImage___node_locale = 'languages___oss___mainImage___node_locale',
  languages___oss___mainImage___children = 'languages___oss___mainImage___children',
  languages___oss___roles = 'languages___oss___roles',
  languages___oss___roles___contentful_id = 'languages___oss___roles___contentful_id',
  languages___oss___roles___id = 'languages___oss___roles___id',
  languages___oss___roles___node_locale = 'languages___oss___roles___node_locale',
  languages___oss___roles___name = 'languages___oss___roles___name',
  languages___oss___roles___project = 'languages___oss___roles___project',
  languages___oss___roles___oss = 'languages___oss___roles___oss',
  languages___oss___roles___spaceId = 'languages___oss___roles___spaceId',
  languages___oss___roles___createdAt = 'languages___oss___roles___createdAt',
  languages___oss___roles___updatedAt = 'languages___oss___roles___updatedAt',
  languages___oss___roles___children = 'languages___oss___roles___children',
  languages___oss___assigns = 'languages___oss___assigns',
  languages___oss___assigns___contentful_id = 'languages___oss___assigns___contentful_id',
  languages___oss___assigns___id = 'languages___oss___assigns___id',
  languages___oss___assigns___node_locale = 'languages___oss___assigns___node_locale',
  languages___oss___assigns___name = 'languages___oss___assigns___name',
  languages___oss___assigns___oss = 'languages___oss___assigns___oss',
  languages___oss___assigns___spaceId = 'languages___oss___assigns___spaceId',
  languages___oss___assigns___createdAt = 'languages___oss___assigns___createdAt',
  languages___oss___assigns___updatedAt = 'languages___oss___assigns___updatedAt',
  languages___oss___assigns___project = 'languages___oss___assigns___project',
  languages___oss___assigns___children = 'languages___oss___assigns___children',
  languages___oss___systems = 'languages___oss___systems',
  languages___oss___systems___contentful_id = 'languages___oss___systems___contentful_id',
  languages___oss___systems___id = 'languages___oss___systems___id',
  languages___oss___systems___node_locale = 'languages___oss___systems___node_locale',
  languages___oss___systems___name = 'languages___oss___systems___name',
  languages___oss___systems___level = 'languages___oss___systems___level',
  languages___oss___systems___project = 'languages___oss___systems___project',
  languages___oss___systems___spaceId = 'languages___oss___systems___spaceId',
  languages___oss___systems___createdAt = 'languages___oss___systems___createdAt',
  languages___oss___systems___updatedAt = 'languages___oss___systems___updatedAt',
  languages___oss___systems___oss = 'languages___oss___systems___oss',
  languages___oss___systems___skill_map = 'languages___oss___systems___skill_map',
  languages___oss___systems___children = 'languages___oss___systems___children',
  languages___oss___languages = 'languages___oss___languages',
  languages___oss___languages___contentful_id = 'languages___oss___languages___contentful_id',
  languages___oss___languages___id = 'languages___oss___languages___id',
  languages___oss___languages___node_locale = 'languages___oss___languages___node_locale',
  languages___oss___languages___name = 'languages___oss___languages___name',
  languages___oss___languages___level = 'languages___oss___languages___level',
  languages___oss___languages___project = 'languages___oss___languages___project',
  languages___oss___languages___spaceId = 'languages___oss___languages___spaceId',
  languages___oss___languages___createdAt = 'languages___oss___languages___createdAt',
  languages___oss___languages___updatedAt = 'languages___oss___languages___updatedAt',
  languages___oss___languages___oss = 'languages___oss___languages___oss',
  languages___oss___languages___skill_map = 'languages___oss___languages___skill_map',
  languages___oss___languages___children = 'languages___oss___languages___children',
  languages___oss___tools = 'languages___oss___tools',
  languages___oss___tools___contentful_id = 'languages___oss___tools___contentful_id',
  languages___oss___tools___id = 'languages___oss___tools___id',
  languages___oss___tools___node_locale = 'languages___oss___tools___node_locale',
  languages___oss___tools___name = 'languages___oss___tools___name',
  languages___oss___tools___level = 'languages___oss___tools___level',
  languages___oss___tools___project = 'languages___oss___tools___project',
  languages___oss___tools___spaceId = 'languages___oss___tools___spaceId',
  languages___oss___tools___createdAt = 'languages___oss___tools___createdAt',
  languages___oss___tools___updatedAt = 'languages___oss___tools___updatedAt',
  languages___oss___tools___oss = 'languages___oss___tools___oss',
  languages___oss___tools___skill_map = 'languages___oss___tools___skill_map',
  languages___oss___tools___children = 'languages___oss___tools___children',
  languages___oss___spaceId = 'languages___oss___spaceId',
  languages___oss___createdAt = 'languages___oss___createdAt',
  languages___oss___updatedAt = 'languages___oss___updatedAt',
  languages___oss___sys___type = 'languages___oss___sys___type',
  languages___oss___sys___revision = 'languages___oss___sys___revision',
  languages___oss___parent___id = 'languages___oss___parent___id',
  languages___oss___parent___children = 'languages___oss___parent___children',
  languages___oss___children = 'languages___oss___children',
  languages___oss___children___id = 'languages___oss___children___id',
  languages___oss___children___children = 'languages___oss___children___children',
  languages___oss___internal___content = 'languages___oss___internal___content',
  languages___oss___internal___contentDigest = 'languages___oss___internal___contentDigest',
  languages___oss___internal___description = 'languages___oss___internal___description',
  languages___oss___internal___fieldOwners = 'languages___oss___internal___fieldOwners',
  languages___oss___internal___ignoreType = 'languages___oss___internal___ignoreType',
  languages___oss___internal___mediaType = 'languages___oss___internal___mediaType',
  languages___oss___internal___owner = 'languages___oss___internal___owner',
  languages___oss___internal___type = 'languages___oss___internal___type',
  languages___skill_map = 'languages___skill_map',
  languages___skill_map___contentful_id = 'languages___skill_map___contentful_id',
  languages___skill_map___id = 'languages___skill_map___id',
  languages___skill_map___node_locale = 'languages___skill_map___node_locale',
  languages___skill_map___sort = 'languages___skill_map___sort',
  languages___skill_map___name = 'languages___skill_map___name',
  languages___skill_map___expanded = 'languages___skill_map___expanded',
  languages___skill_map___skills = 'languages___skill_map___skills',
  languages___skill_map___skills___contentful_id = 'languages___skill_map___skills___contentful_id',
  languages___skill_map___skills___id = 'languages___skill_map___skills___id',
  languages___skill_map___skills___node_locale = 'languages___skill_map___skills___node_locale',
  languages___skill_map___skills___name = 'languages___skill_map___skills___name',
  languages___skill_map___skills___level = 'languages___skill_map___skills___level',
  languages___skill_map___skills___project = 'languages___skill_map___skills___project',
  languages___skill_map___skills___spaceId = 'languages___skill_map___skills___spaceId',
  languages___skill_map___skills___createdAt = 'languages___skill_map___skills___createdAt',
  languages___skill_map___skills___updatedAt = 'languages___skill_map___skills___updatedAt',
  languages___skill_map___skills___oss = 'languages___skill_map___skills___oss',
  languages___skill_map___skills___skill_map = 'languages___skill_map___skills___skill_map',
  languages___skill_map___skills___children = 'languages___skill_map___skills___children',
  languages___skill_map___spaceId = 'languages___skill_map___spaceId',
  languages___skill_map___createdAt = 'languages___skill_map___createdAt',
  languages___skill_map___updatedAt = 'languages___skill_map___updatedAt',
  languages___skill_map___sys___type = 'languages___skill_map___sys___type',
  languages___skill_map___sys___revision = 'languages___skill_map___sys___revision',
  languages___skill_map___parent___id = 'languages___skill_map___parent___id',
  languages___skill_map___parent___children = 'languages___skill_map___parent___children',
  languages___skill_map___children = 'languages___skill_map___children',
  languages___skill_map___children___id = 'languages___skill_map___children___id',
  languages___skill_map___children___children = 'languages___skill_map___children___children',
  languages___skill_map___internal___content = 'languages___skill_map___internal___content',
  languages___skill_map___internal___contentDigest = 'languages___skill_map___internal___contentDigest',
  languages___skill_map___internal___description = 'languages___skill_map___internal___description',
  languages___skill_map___internal___fieldOwners = 'languages___skill_map___internal___fieldOwners',
  languages___skill_map___internal___ignoreType = 'languages___skill_map___internal___ignoreType',
  languages___skill_map___internal___mediaType = 'languages___skill_map___internal___mediaType',
  languages___skill_map___internal___owner = 'languages___skill_map___internal___owner',
  languages___skill_map___internal___type = 'languages___skill_map___internal___type',
  languages___parent___id = 'languages___parent___id',
  languages___parent___parent___id = 'languages___parent___parent___id',
  languages___parent___parent___children = 'languages___parent___parent___children',
  languages___parent___children = 'languages___parent___children',
  languages___parent___children___id = 'languages___parent___children___id',
  languages___parent___children___children = 'languages___parent___children___children',
  languages___parent___internal___content = 'languages___parent___internal___content',
  languages___parent___internal___contentDigest = 'languages___parent___internal___contentDigest',
  languages___parent___internal___description = 'languages___parent___internal___description',
  languages___parent___internal___fieldOwners = 'languages___parent___internal___fieldOwners',
  languages___parent___internal___ignoreType = 'languages___parent___internal___ignoreType',
  languages___parent___internal___mediaType = 'languages___parent___internal___mediaType',
  languages___parent___internal___owner = 'languages___parent___internal___owner',
  languages___parent___internal___type = 'languages___parent___internal___type',
  languages___children = 'languages___children',
  languages___children___id = 'languages___children___id',
  languages___children___parent___id = 'languages___children___parent___id',
  languages___children___parent___children = 'languages___children___parent___children',
  languages___children___children = 'languages___children___children',
  languages___children___children___id = 'languages___children___children___id',
  languages___children___children___children = 'languages___children___children___children',
  languages___children___internal___content = 'languages___children___internal___content',
  languages___children___internal___contentDigest = 'languages___children___internal___contentDigest',
  languages___children___internal___description = 'languages___children___internal___description',
  languages___children___internal___fieldOwners = 'languages___children___internal___fieldOwners',
  languages___children___internal___ignoreType = 'languages___children___internal___ignoreType',
  languages___children___internal___mediaType = 'languages___children___internal___mediaType',
  languages___children___internal___owner = 'languages___children___internal___owner',
  languages___children___internal___type = 'languages___children___internal___type',
  languages___internal___content = 'languages___internal___content',
  languages___internal___contentDigest = 'languages___internal___contentDigest',
  languages___internal___description = 'languages___internal___description',
  languages___internal___fieldOwners = 'languages___internal___fieldOwners',
  languages___internal___ignoreType = 'languages___internal___ignoreType',
  languages___internal___mediaType = 'languages___internal___mediaType',
  languages___internal___owner = 'languages___internal___owner',
  languages___internal___type = 'languages___internal___type',
  tools = 'tools',
  tools___contentful_id = 'tools___contentful_id',
  tools___id = 'tools___id',
  tools___node_locale = 'tools___node_locale',
  tools___name = 'tools___name',
  tools___level = 'tools___level',
  tools___project = 'tools___project',
  tools___project___contentful_id = 'tools___project___contentful_id',
  tools___project___id = 'tools___project___id',
  tools___project___node_locale = 'tools___project___node_locale',
  tools___project___name = 'tools___project___name',
  tools___project___startDate = 'tools___project___startDate',
  tools___project___during = 'tools___project___during',
  tools___project___comment = 'tools___project___comment',
  tools___project___roles = 'tools___project___roles',
  tools___project___roles___contentful_id = 'tools___project___roles___contentful_id',
  tools___project___roles___id = 'tools___project___roles___id',
  tools___project___roles___node_locale = 'tools___project___roles___node_locale',
  tools___project___roles___name = 'tools___project___roles___name',
  tools___project___roles___project = 'tools___project___roles___project',
  tools___project___roles___oss = 'tools___project___roles___oss',
  tools___project___roles___spaceId = 'tools___project___roles___spaceId',
  tools___project___roles___createdAt = 'tools___project___roles___createdAt',
  tools___project___roles___updatedAt = 'tools___project___roles___updatedAt',
  tools___project___roles___children = 'tools___project___roles___children',
  tools___project___assigns = 'tools___project___assigns',
  tools___project___assigns___contentful_id = 'tools___project___assigns___contentful_id',
  tools___project___assigns___id = 'tools___project___assigns___id',
  tools___project___assigns___node_locale = 'tools___project___assigns___node_locale',
  tools___project___assigns___name = 'tools___project___assigns___name',
  tools___project___assigns___oss = 'tools___project___assigns___oss',
  tools___project___assigns___spaceId = 'tools___project___assigns___spaceId',
  tools___project___assigns___createdAt = 'tools___project___assigns___createdAt',
  tools___project___assigns___updatedAt = 'tools___project___assigns___updatedAt',
  tools___project___assigns___project = 'tools___project___assigns___project',
  tools___project___assigns___children = 'tools___project___assigns___children',
  tools___project___systems = 'tools___project___systems',
  tools___project___systems___contentful_id = 'tools___project___systems___contentful_id',
  tools___project___systems___id = 'tools___project___systems___id',
  tools___project___systems___node_locale = 'tools___project___systems___node_locale',
  tools___project___systems___name = 'tools___project___systems___name',
  tools___project___systems___level = 'tools___project___systems___level',
  tools___project___systems___project = 'tools___project___systems___project',
  tools___project___systems___spaceId = 'tools___project___systems___spaceId',
  tools___project___systems___createdAt = 'tools___project___systems___createdAt',
  tools___project___systems___updatedAt = 'tools___project___systems___updatedAt',
  tools___project___systems___oss = 'tools___project___systems___oss',
  tools___project___systems___skill_map = 'tools___project___systems___skill_map',
  tools___project___systems___children = 'tools___project___systems___children',
  tools___project___languages = 'tools___project___languages',
  tools___project___languages___contentful_id = 'tools___project___languages___contentful_id',
  tools___project___languages___id = 'tools___project___languages___id',
  tools___project___languages___node_locale = 'tools___project___languages___node_locale',
  tools___project___languages___name = 'tools___project___languages___name',
  tools___project___languages___level = 'tools___project___languages___level',
  tools___project___languages___project = 'tools___project___languages___project',
  tools___project___languages___spaceId = 'tools___project___languages___spaceId',
  tools___project___languages___createdAt = 'tools___project___languages___createdAt',
  tools___project___languages___updatedAt = 'tools___project___languages___updatedAt',
  tools___project___languages___oss = 'tools___project___languages___oss',
  tools___project___languages___skill_map = 'tools___project___languages___skill_map',
  tools___project___languages___children = 'tools___project___languages___children',
  tools___project___tools = 'tools___project___tools',
  tools___project___tools___contentful_id = 'tools___project___tools___contentful_id',
  tools___project___tools___id = 'tools___project___tools___id',
  tools___project___tools___node_locale = 'tools___project___tools___node_locale',
  tools___project___tools___name = 'tools___project___tools___name',
  tools___project___tools___level = 'tools___project___tools___level',
  tools___project___tools___project = 'tools___project___tools___project',
  tools___project___tools___spaceId = 'tools___project___tools___spaceId',
  tools___project___tools___createdAt = 'tools___project___tools___createdAt',
  tools___project___tools___updatedAt = 'tools___project___tools___updatedAt',
  tools___project___tools___oss = 'tools___project___tools___oss',
  tools___project___tools___skill_map = 'tools___project___tools___skill_map',
  tools___project___tools___children = 'tools___project___tools___children',
  tools___project___icon___contentful_id = 'tools___project___icon___contentful_id',
  tools___project___icon___id = 'tools___project___icon___id',
  tools___project___icon___node_locale = 'tools___project___icon___node_locale',
  tools___project___icon___title = 'tools___project___icon___title',
  tools___project___icon___history = 'tools___project___icon___history',
  tools___project___icon___spaceId = 'tools___project___icon___spaceId',
  tools___project___icon___createdAt = 'tools___project___icon___createdAt',
  tools___project___icon___updatedAt = 'tools___project___icon___updatedAt',
  tools___project___icon___what_i_can_do = 'tools___project___icon___what_i_can_do',
  tools___project___icon___project = 'tools___project___icon___project',
  tools___project___icon___contact = 'tools___project___icon___contact',
  tools___project___icon___children = 'tools___project___icon___children',
  tools___project___spaceId = 'tools___project___spaceId',
  tools___project___createdAt = 'tools___project___createdAt',
  tools___project___updatedAt = 'tools___project___updatedAt',
  tools___project___sys___type = 'tools___project___sys___type',
  tools___project___sys___revision = 'tools___project___sys___revision',
  tools___project___parent___id = 'tools___project___parent___id',
  tools___project___parent___children = 'tools___project___parent___children',
  tools___project___children = 'tools___project___children',
  tools___project___children___id = 'tools___project___children___id',
  tools___project___children___children = 'tools___project___children___children',
  tools___project___internal___content = 'tools___project___internal___content',
  tools___project___internal___contentDigest = 'tools___project___internal___contentDigest',
  tools___project___internal___description = 'tools___project___internal___description',
  tools___project___internal___fieldOwners = 'tools___project___internal___fieldOwners',
  tools___project___internal___ignoreType = 'tools___project___internal___ignoreType',
  tools___project___internal___mediaType = 'tools___project___internal___mediaType',
  tools___project___internal___owner = 'tools___project___internal___owner',
  tools___project___internal___type = 'tools___project___internal___type',
  tools___spaceId = 'tools___spaceId',
  tools___createdAt = 'tools___createdAt',
  tools___updatedAt = 'tools___updatedAt',
  tools___sys___type = 'tools___sys___type',
  tools___sys___revision = 'tools___sys___revision',
  tools___oss = 'tools___oss',
  tools___oss___contentful_id = 'tools___oss___contentful_id',
  tools___oss___id = 'tools___oss___id',
  tools___oss___node_locale = 'tools___oss___node_locale',
  tools___oss___name = 'tools___oss___name',
  tools___oss___slug = 'tools___oss___slug',
  tools___oss___startDate = 'tools___oss___startDate',
  tools___oss___during = 'tools___oss___during',
  tools___oss___comment = 'tools___oss___comment',
  tools___oss___siteUrl = 'tools___oss___siteUrl',
  tools___oss___sourceUrl = 'tools___oss___sourceUrl',
  tools___oss___mainImage___contentful_id = 'tools___oss___mainImage___contentful_id',
  tools___oss___mainImage___id = 'tools___oss___mainImage___id',
  tools___oss___mainImage___spaceId = 'tools___oss___mainImage___spaceId',
  tools___oss___mainImage___createdAt = 'tools___oss___mainImage___createdAt',
  tools___oss___mainImage___updatedAt = 'tools___oss___mainImage___updatedAt',
  tools___oss___mainImage___title = 'tools___oss___mainImage___title',
  tools___oss___mainImage___description = 'tools___oss___mainImage___description',
  tools___oss___mainImage___node_locale = 'tools___oss___mainImage___node_locale',
  tools___oss___mainImage___children = 'tools___oss___mainImage___children',
  tools___oss___roles = 'tools___oss___roles',
  tools___oss___roles___contentful_id = 'tools___oss___roles___contentful_id',
  tools___oss___roles___id = 'tools___oss___roles___id',
  tools___oss___roles___node_locale = 'tools___oss___roles___node_locale',
  tools___oss___roles___name = 'tools___oss___roles___name',
  tools___oss___roles___project = 'tools___oss___roles___project',
  tools___oss___roles___oss = 'tools___oss___roles___oss',
  tools___oss___roles___spaceId = 'tools___oss___roles___spaceId',
  tools___oss___roles___createdAt = 'tools___oss___roles___createdAt',
  tools___oss___roles___updatedAt = 'tools___oss___roles___updatedAt',
  tools___oss___roles___children = 'tools___oss___roles___children',
  tools___oss___assigns = 'tools___oss___assigns',
  tools___oss___assigns___contentful_id = 'tools___oss___assigns___contentful_id',
  tools___oss___assigns___id = 'tools___oss___assigns___id',
  tools___oss___assigns___node_locale = 'tools___oss___assigns___node_locale',
  tools___oss___assigns___name = 'tools___oss___assigns___name',
  tools___oss___assigns___oss = 'tools___oss___assigns___oss',
  tools___oss___assigns___spaceId = 'tools___oss___assigns___spaceId',
  tools___oss___assigns___createdAt = 'tools___oss___assigns___createdAt',
  tools___oss___assigns___updatedAt = 'tools___oss___assigns___updatedAt',
  tools___oss___assigns___project = 'tools___oss___assigns___project',
  tools___oss___assigns___children = 'tools___oss___assigns___children',
  tools___oss___systems = 'tools___oss___systems',
  tools___oss___systems___contentful_id = 'tools___oss___systems___contentful_id',
  tools___oss___systems___id = 'tools___oss___systems___id',
  tools___oss___systems___node_locale = 'tools___oss___systems___node_locale',
  tools___oss___systems___name = 'tools___oss___systems___name',
  tools___oss___systems___level = 'tools___oss___systems___level',
  tools___oss___systems___project = 'tools___oss___systems___project',
  tools___oss___systems___spaceId = 'tools___oss___systems___spaceId',
  tools___oss___systems___createdAt = 'tools___oss___systems___createdAt',
  tools___oss___systems___updatedAt = 'tools___oss___systems___updatedAt',
  tools___oss___systems___oss = 'tools___oss___systems___oss',
  tools___oss___systems___skill_map = 'tools___oss___systems___skill_map',
  tools___oss___systems___children = 'tools___oss___systems___children',
  tools___oss___languages = 'tools___oss___languages',
  tools___oss___languages___contentful_id = 'tools___oss___languages___contentful_id',
  tools___oss___languages___id = 'tools___oss___languages___id',
  tools___oss___languages___node_locale = 'tools___oss___languages___node_locale',
  tools___oss___languages___name = 'tools___oss___languages___name',
  tools___oss___languages___level = 'tools___oss___languages___level',
  tools___oss___languages___project = 'tools___oss___languages___project',
  tools___oss___languages___spaceId = 'tools___oss___languages___spaceId',
  tools___oss___languages___createdAt = 'tools___oss___languages___createdAt',
  tools___oss___languages___updatedAt = 'tools___oss___languages___updatedAt',
  tools___oss___languages___oss = 'tools___oss___languages___oss',
  tools___oss___languages___skill_map = 'tools___oss___languages___skill_map',
  tools___oss___languages___children = 'tools___oss___languages___children',
  tools___oss___tools = 'tools___oss___tools',
  tools___oss___tools___contentful_id = 'tools___oss___tools___contentful_id',
  tools___oss___tools___id = 'tools___oss___tools___id',
  tools___oss___tools___node_locale = 'tools___oss___tools___node_locale',
  tools___oss___tools___name = 'tools___oss___tools___name',
  tools___oss___tools___level = 'tools___oss___tools___level',
  tools___oss___tools___project = 'tools___oss___tools___project',
  tools___oss___tools___spaceId = 'tools___oss___tools___spaceId',
  tools___oss___tools___createdAt = 'tools___oss___tools___createdAt',
  tools___oss___tools___updatedAt = 'tools___oss___tools___updatedAt',
  tools___oss___tools___oss = 'tools___oss___tools___oss',
  tools___oss___tools___skill_map = 'tools___oss___tools___skill_map',
  tools___oss___tools___children = 'tools___oss___tools___children',
  tools___oss___spaceId = 'tools___oss___spaceId',
  tools___oss___createdAt = 'tools___oss___createdAt',
  tools___oss___updatedAt = 'tools___oss___updatedAt',
  tools___oss___sys___type = 'tools___oss___sys___type',
  tools___oss___sys___revision = 'tools___oss___sys___revision',
  tools___oss___parent___id = 'tools___oss___parent___id',
  tools___oss___parent___children = 'tools___oss___parent___children',
  tools___oss___children = 'tools___oss___children',
  tools___oss___children___id = 'tools___oss___children___id',
  tools___oss___children___children = 'tools___oss___children___children',
  tools___oss___internal___content = 'tools___oss___internal___content',
  tools___oss___internal___contentDigest = 'tools___oss___internal___contentDigest',
  tools___oss___internal___description = 'tools___oss___internal___description',
  tools___oss___internal___fieldOwners = 'tools___oss___internal___fieldOwners',
  tools___oss___internal___ignoreType = 'tools___oss___internal___ignoreType',
  tools___oss___internal___mediaType = 'tools___oss___internal___mediaType',
  tools___oss___internal___owner = 'tools___oss___internal___owner',
  tools___oss___internal___type = 'tools___oss___internal___type',
  tools___skill_map = 'tools___skill_map',
  tools___skill_map___contentful_id = 'tools___skill_map___contentful_id',
  tools___skill_map___id = 'tools___skill_map___id',
  tools___skill_map___node_locale = 'tools___skill_map___node_locale',
  tools___skill_map___sort = 'tools___skill_map___sort',
  tools___skill_map___name = 'tools___skill_map___name',
  tools___skill_map___expanded = 'tools___skill_map___expanded',
  tools___skill_map___skills = 'tools___skill_map___skills',
  tools___skill_map___skills___contentful_id = 'tools___skill_map___skills___contentful_id',
  tools___skill_map___skills___id = 'tools___skill_map___skills___id',
  tools___skill_map___skills___node_locale = 'tools___skill_map___skills___node_locale',
  tools___skill_map___skills___name = 'tools___skill_map___skills___name',
  tools___skill_map___skills___level = 'tools___skill_map___skills___level',
  tools___skill_map___skills___project = 'tools___skill_map___skills___project',
  tools___skill_map___skills___spaceId = 'tools___skill_map___skills___spaceId',
  tools___skill_map___skills___createdAt = 'tools___skill_map___skills___createdAt',
  tools___skill_map___skills___updatedAt = 'tools___skill_map___skills___updatedAt',
  tools___skill_map___skills___oss = 'tools___skill_map___skills___oss',
  tools___skill_map___skills___skill_map = 'tools___skill_map___skills___skill_map',
  tools___skill_map___skills___children = 'tools___skill_map___skills___children',
  tools___skill_map___spaceId = 'tools___skill_map___spaceId',
  tools___skill_map___createdAt = 'tools___skill_map___createdAt',
  tools___skill_map___updatedAt = 'tools___skill_map___updatedAt',
  tools___skill_map___sys___type = 'tools___skill_map___sys___type',
  tools___skill_map___sys___revision = 'tools___skill_map___sys___revision',
  tools___skill_map___parent___id = 'tools___skill_map___parent___id',
  tools___skill_map___parent___children = 'tools___skill_map___parent___children',
  tools___skill_map___children = 'tools___skill_map___children',
  tools___skill_map___children___id = 'tools___skill_map___children___id',
  tools___skill_map___children___children = 'tools___skill_map___children___children',
  tools___skill_map___internal___content = 'tools___skill_map___internal___content',
  tools___skill_map___internal___contentDigest = 'tools___skill_map___internal___contentDigest',
  tools___skill_map___internal___description = 'tools___skill_map___internal___description',
  tools___skill_map___internal___fieldOwners = 'tools___skill_map___internal___fieldOwners',
  tools___skill_map___internal___ignoreType = 'tools___skill_map___internal___ignoreType',
  tools___skill_map___internal___mediaType = 'tools___skill_map___internal___mediaType',
  tools___skill_map___internal___owner = 'tools___skill_map___internal___owner',
  tools___skill_map___internal___type = 'tools___skill_map___internal___type',
  tools___parent___id = 'tools___parent___id',
  tools___parent___parent___id = 'tools___parent___parent___id',
  tools___parent___parent___children = 'tools___parent___parent___children',
  tools___parent___children = 'tools___parent___children',
  tools___parent___children___id = 'tools___parent___children___id',
  tools___parent___children___children = 'tools___parent___children___children',
  tools___parent___internal___content = 'tools___parent___internal___content',
  tools___parent___internal___contentDigest = 'tools___parent___internal___contentDigest',
  tools___parent___internal___description = 'tools___parent___internal___description',
  tools___parent___internal___fieldOwners = 'tools___parent___internal___fieldOwners',
  tools___parent___internal___ignoreType = 'tools___parent___internal___ignoreType',
  tools___parent___internal___mediaType = 'tools___parent___internal___mediaType',
  tools___parent___internal___owner = 'tools___parent___internal___owner',
  tools___parent___internal___type = 'tools___parent___internal___type',
  tools___children = 'tools___children',
  tools___children___id = 'tools___children___id',
  tools___children___parent___id = 'tools___children___parent___id',
  tools___children___parent___children = 'tools___children___parent___children',
  tools___children___children = 'tools___children___children',
  tools___children___children___id = 'tools___children___children___id',
  tools___children___children___children = 'tools___children___children___children',
  tools___children___internal___content = 'tools___children___internal___content',
  tools___children___internal___contentDigest = 'tools___children___internal___contentDigest',
  tools___children___internal___description = 'tools___children___internal___description',
  tools___children___internal___fieldOwners = 'tools___children___internal___fieldOwners',
  tools___children___internal___ignoreType = 'tools___children___internal___ignoreType',
  tools___children___internal___mediaType = 'tools___children___internal___mediaType',
  tools___children___internal___owner = 'tools___children___internal___owner',
  tools___children___internal___type = 'tools___children___internal___type',
  tools___internal___content = 'tools___internal___content',
  tools___internal___contentDigest = 'tools___internal___contentDigest',
  tools___internal___description = 'tools___internal___description',
  tools___internal___fieldOwners = 'tools___internal___fieldOwners',
  tools___internal___ignoreType = 'tools___internal___ignoreType',
  tools___internal___mediaType = 'tools___internal___mediaType',
  tools___internal___owner = 'tools___internal___owner',
  tools___internal___type = 'tools___internal___type',
  icon___contentful_id = 'icon___contentful_id',
  icon___id = 'icon___id',
  icon___node_locale = 'icon___node_locale',
  icon___title = 'icon___title',
  icon___history = 'icon___history',
  icon___history___contentful_id = 'icon___history___contentful_id',
  icon___history___id = 'icon___history___id',
  icon___history___node_locale = 'icon___history___node_locale',
  icon___history___date = 'icon___history___date',
  icon___history___title = 'icon___history___title',
  icon___history___subheader = 'icon___history___subheader',
  icon___history___icon___contentful_id = 'icon___history___icon___contentful_id',
  icon___history___icon___id = 'icon___history___icon___id',
  icon___history___icon___node_locale = 'icon___history___icon___node_locale',
  icon___history___icon___title = 'icon___history___icon___title',
  icon___history___icon___history = 'icon___history___icon___history',
  icon___history___icon___spaceId = 'icon___history___icon___spaceId',
  icon___history___icon___createdAt = 'icon___history___icon___createdAt',
  icon___history___icon___updatedAt = 'icon___history___icon___updatedAt',
  icon___history___icon___what_i_can_do = 'icon___history___icon___what_i_can_do',
  icon___history___icon___project = 'icon___history___icon___project',
  icon___history___icon___contact = 'icon___history___icon___contact',
  icon___history___icon___children = 'icon___history___icon___children',
  icon___history___spaceId = 'icon___history___spaceId',
  icon___history___createdAt = 'icon___history___createdAt',
  icon___history___updatedAt = 'icon___history___updatedAt',
  icon___history___sys___type = 'icon___history___sys___type',
  icon___history___sys___revision = 'icon___history___sys___revision',
  icon___history___parent___id = 'icon___history___parent___id',
  icon___history___parent___children = 'icon___history___parent___children',
  icon___history___children = 'icon___history___children',
  icon___history___children___id = 'icon___history___children___id',
  icon___history___children___children = 'icon___history___children___children',
  icon___history___internal___content = 'icon___history___internal___content',
  icon___history___internal___contentDigest = 'icon___history___internal___contentDigest',
  icon___history___internal___description = 'icon___history___internal___description',
  icon___history___internal___fieldOwners = 'icon___history___internal___fieldOwners',
  icon___history___internal___ignoreType = 'icon___history___internal___ignoreType',
  icon___history___internal___mediaType = 'icon___history___internal___mediaType',
  icon___history___internal___owner = 'icon___history___internal___owner',
  icon___history___internal___type = 'icon___history___internal___type',
  icon___contents___id = 'icon___contents___id',
  icon___contents___parent___id = 'icon___contents___parent___id',
  icon___contents___parent___children = 'icon___contents___parent___children',
  icon___contents___children = 'icon___contents___children',
  icon___contents___children___id = 'icon___contents___children___id',
  icon___contents___children___children = 'icon___contents___children___children',
  icon___contents___internal___content = 'icon___contents___internal___content',
  icon___contents___internal___contentDigest = 'icon___contents___internal___contentDigest',
  icon___contents___internal___description = 'icon___contents___internal___description',
  icon___contents___internal___fieldOwners = 'icon___contents___internal___fieldOwners',
  icon___contents___internal___ignoreType = 'icon___contents___internal___ignoreType',
  icon___contents___internal___mediaType = 'icon___contents___internal___mediaType',
  icon___contents___internal___owner = 'icon___contents___internal___owner',
  icon___contents___internal___type = 'icon___contents___internal___type',
  icon___contents___contents = 'icon___contents___contents',
  icon___contents___sys___type = 'icon___contents___sys___type',
  icon___spaceId = 'icon___spaceId',
  icon___createdAt = 'icon___createdAt',
  icon___updatedAt = 'icon___updatedAt',
  icon___sys___type = 'icon___sys___type',
  icon___sys___revision = 'icon___sys___revision',
  icon___what_i_can_do = 'icon___what_i_can_do',
  icon___what_i_can_do___contentful_id = 'icon___what_i_can_do___contentful_id',
  icon___what_i_can_do___id = 'icon___what_i_can_do___id',
  icon___what_i_can_do___node_locale = 'icon___what_i_can_do___node_locale',
  icon___what_i_can_do___sort = 'icon___what_i_can_do___sort',
  icon___what_i_can_do___title = 'icon___what_i_can_do___title',
  icon___what_i_can_do___message = 'icon___what_i_can_do___message',
  icon___what_i_can_do___icon___contentful_id = 'icon___what_i_can_do___icon___contentful_id',
  icon___what_i_can_do___icon___id = 'icon___what_i_can_do___icon___id',
  icon___what_i_can_do___icon___node_locale = 'icon___what_i_can_do___icon___node_locale',
  icon___what_i_can_do___icon___title = 'icon___what_i_can_do___icon___title',
  icon___what_i_can_do___icon___history = 'icon___what_i_can_do___icon___history',
  icon___what_i_can_do___icon___spaceId = 'icon___what_i_can_do___icon___spaceId',
  icon___what_i_can_do___icon___createdAt = 'icon___what_i_can_do___icon___createdAt',
  icon___what_i_can_do___icon___updatedAt = 'icon___what_i_can_do___icon___updatedAt',
  icon___what_i_can_do___icon___what_i_can_do = 'icon___what_i_can_do___icon___what_i_can_do',
  icon___what_i_can_do___icon___project = 'icon___what_i_can_do___icon___project',
  icon___what_i_can_do___icon___contact = 'icon___what_i_can_do___icon___contact',
  icon___what_i_can_do___icon___children = 'icon___what_i_can_do___icon___children',
  icon___what_i_can_do___spaceId = 'icon___what_i_can_do___spaceId',
  icon___what_i_can_do___createdAt = 'icon___what_i_can_do___createdAt',
  icon___what_i_can_do___updatedAt = 'icon___what_i_can_do___updatedAt',
  icon___what_i_can_do___sys___type = 'icon___what_i_can_do___sys___type',
  icon___what_i_can_do___sys___revision = 'icon___what_i_can_do___sys___revision',
  icon___what_i_can_do___parent___id = 'icon___what_i_can_do___parent___id',
  icon___what_i_can_do___parent___children = 'icon___what_i_can_do___parent___children',
  icon___what_i_can_do___children = 'icon___what_i_can_do___children',
  icon___what_i_can_do___children___id = 'icon___what_i_can_do___children___id',
  icon___what_i_can_do___children___children = 'icon___what_i_can_do___children___children',
  icon___what_i_can_do___internal___content = 'icon___what_i_can_do___internal___content',
  icon___what_i_can_do___internal___contentDigest = 'icon___what_i_can_do___internal___contentDigest',
  icon___what_i_can_do___internal___description = 'icon___what_i_can_do___internal___description',
  icon___what_i_can_do___internal___fieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  icon___what_i_can_do___internal___ignoreType = 'icon___what_i_can_do___internal___ignoreType',
  icon___what_i_can_do___internal___mediaType = 'icon___what_i_can_do___internal___mediaType',
  icon___what_i_can_do___internal___owner = 'icon___what_i_can_do___internal___owner',
  icon___what_i_can_do___internal___type = 'icon___what_i_can_do___internal___type',
  icon___project = 'icon___project',
  icon___project___contentful_id = 'icon___project___contentful_id',
  icon___project___id = 'icon___project___id',
  icon___project___node_locale = 'icon___project___node_locale',
  icon___project___name = 'icon___project___name',
  icon___project___startDate = 'icon___project___startDate',
  icon___project___during = 'icon___project___during',
  icon___project___comment = 'icon___project___comment',
  icon___project___roles = 'icon___project___roles',
  icon___project___roles___contentful_id = 'icon___project___roles___contentful_id',
  icon___project___roles___id = 'icon___project___roles___id',
  icon___project___roles___node_locale = 'icon___project___roles___node_locale',
  icon___project___roles___name = 'icon___project___roles___name',
  icon___project___roles___project = 'icon___project___roles___project',
  icon___project___roles___oss = 'icon___project___roles___oss',
  icon___project___roles___spaceId = 'icon___project___roles___spaceId',
  icon___project___roles___createdAt = 'icon___project___roles___createdAt',
  icon___project___roles___updatedAt = 'icon___project___roles___updatedAt',
  icon___project___roles___children = 'icon___project___roles___children',
  icon___project___assigns = 'icon___project___assigns',
  icon___project___assigns___contentful_id = 'icon___project___assigns___contentful_id',
  icon___project___assigns___id = 'icon___project___assigns___id',
  icon___project___assigns___node_locale = 'icon___project___assigns___node_locale',
  icon___project___assigns___name = 'icon___project___assigns___name',
  icon___project___assigns___oss = 'icon___project___assigns___oss',
  icon___project___assigns___spaceId = 'icon___project___assigns___spaceId',
  icon___project___assigns___createdAt = 'icon___project___assigns___createdAt',
  icon___project___assigns___updatedAt = 'icon___project___assigns___updatedAt',
  icon___project___assigns___project = 'icon___project___assigns___project',
  icon___project___assigns___children = 'icon___project___assigns___children',
  icon___project___systems = 'icon___project___systems',
  icon___project___systems___contentful_id = 'icon___project___systems___contentful_id',
  icon___project___systems___id = 'icon___project___systems___id',
  icon___project___systems___node_locale = 'icon___project___systems___node_locale',
  icon___project___systems___name = 'icon___project___systems___name',
  icon___project___systems___level = 'icon___project___systems___level',
  icon___project___systems___project = 'icon___project___systems___project',
  icon___project___systems___spaceId = 'icon___project___systems___spaceId',
  icon___project___systems___createdAt = 'icon___project___systems___createdAt',
  icon___project___systems___updatedAt = 'icon___project___systems___updatedAt',
  icon___project___systems___oss = 'icon___project___systems___oss',
  icon___project___systems___skill_map = 'icon___project___systems___skill_map',
  icon___project___systems___children = 'icon___project___systems___children',
  icon___project___languages = 'icon___project___languages',
  icon___project___languages___contentful_id = 'icon___project___languages___contentful_id',
  icon___project___languages___id = 'icon___project___languages___id',
  icon___project___languages___node_locale = 'icon___project___languages___node_locale',
  icon___project___languages___name = 'icon___project___languages___name',
  icon___project___languages___level = 'icon___project___languages___level',
  icon___project___languages___project = 'icon___project___languages___project',
  icon___project___languages___spaceId = 'icon___project___languages___spaceId',
  icon___project___languages___createdAt = 'icon___project___languages___createdAt',
  icon___project___languages___updatedAt = 'icon___project___languages___updatedAt',
  icon___project___languages___oss = 'icon___project___languages___oss',
  icon___project___languages___skill_map = 'icon___project___languages___skill_map',
  icon___project___languages___children = 'icon___project___languages___children',
  icon___project___tools = 'icon___project___tools',
  icon___project___tools___contentful_id = 'icon___project___tools___contentful_id',
  icon___project___tools___id = 'icon___project___tools___id',
  icon___project___tools___node_locale = 'icon___project___tools___node_locale',
  icon___project___tools___name = 'icon___project___tools___name',
  icon___project___tools___level = 'icon___project___tools___level',
  icon___project___tools___project = 'icon___project___tools___project',
  icon___project___tools___spaceId = 'icon___project___tools___spaceId',
  icon___project___tools___createdAt = 'icon___project___tools___createdAt',
  icon___project___tools___updatedAt = 'icon___project___tools___updatedAt',
  icon___project___tools___oss = 'icon___project___tools___oss',
  icon___project___tools___skill_map = 'icon___project___tools___skill_map',
  icon___project___tools___children = 'icon___project___tools___children',
  icon___project___icon___contentful_id = 'icon___project___icon___contentful_id',
  icon___project___icon___id = 'icon___project___icon___id',
  icon___project___icon___node_locale = 'icon___project___icon___node_locale',
  icon___project___icon___title = 'icon___project___icon___title',
  icon___project___icon___history = 'icon___project___icon___history',
  icon___project___icon___spaceId = 'icon___project___icon___spaceId',
  icon___project___icon___createdAt = 'icon___project___icon___createdAt',
  icon___project___icon___updatedAt = 'icon___project___icon___updatedAt',
  icon___project___icon___what_i_can_do = 'icon___project___icon___what_i_can_do',
  icon___project___icon___project = 'icon___project___icon___project',
  icon___project___icon___contact = 'icon___project___icon___contact',
  icon___project___icon___children = 'icon___project___icon___children',
  icon___project___spaceId = 'icon___project___spaceId',
  icon___project___createdAt = 'icon___project___createdAt',
  icon___project___updatedAt = 'icon___project___updatedAt',
  icon___project___sys___type = 'icon___project___sys___type',
  icon___project___sys___revision = 'icon___project___sys___revision',
  icon___project___parent___id = 'icon___project___parent___id',
  icon___project___parent___children = 'icon___project___parent___children',
  icon___project___children = 'icon___project___children',
  icon___project___children___id = 'icon___project___children___id',
  icon___project___children___children = 'icon___project___children___children',
  icon___project___internal___content = 'icon___project___internal___content',
  icon___project___internal___contentDigest = 'icon___project___internal___contentDigest',
  icon___project___internal___description = 'icon___project___internal___description',
  icon___project___internal___fieldOwners = 'icon___project___internal___fieldOwners',
  icon___project___internal___ignoreType = 'icon___project___internal___ignoreType',
  icon___project___internal___mediaType = 'icon___project___internal___mediaType',
  icon___project___internal___owner = 'icon___project___internal___owner',
  icon___project___internal___type = 'icon___project___internal___type',
  icon___contact = 'icon___contact',
  icon___contact___contentful_id = 'icon___contact___contentful_id',
  icon___contact___id = 'icon___contact___id',
  icon___contact___node_locale = 'icon___contact___node_locale',
  icon___contact___sort = 'icon___contact___sort',
  icon___contact___title = 'icon___contact___title',
  icon___contact___subTitle = 'icon___contact___subTitle',
  icon___contact___href = 'icon___contact___href',
  icon___contact___icon___contentful_id = 'icon___contact___icon___contentful_id',
  icon___contact___icon___id = 'icon___contact___icon___id',
  icon___contact___icon___node_locale = 'icon___contact___icon___node_locale',
  icon___contact___icon___title = 'icon___contact___icon___title',
  icon___contact___icon___history = 'icon___contact___icon___history',
  icon___contact___icon___spaceId = 'icon___contact___icon___spaceId',
  icon___contact___icon___createdAt = 'icon___contact___icon___createdAt',
  icon___contact___icon___updatedAt = 'icon___contact___icon___updatedAt',
  icon___contact___icon___what_i_can_do = 'icon___contact___icon___what_i_can_do',
  icon___contact___icon___project = 'icon___contact___icon___project',
  icon___contact___icon___contact = 'icon___contact___icon___contact',
  icon___contact___icon___children = 'icon___contact___icon___children',
  icon___contact___spaceId = 'icon___contact___spaceId',
  icon___contact___createdAt = 'icon___contact___createdAt',
  icon___contact___updatedAt = 'icon___contact___updatedAt',
  icon___contact___sys___type = 'icon___contact___sys___type',
  icon___contact___sys___revision = 'icon___contact___sys___revision',
  icon___contact___parent___id = 'icon___contact___parent___id',
  icon___contact___parent___children = 'icon___contact___parent___children',
  icon___contact___children = 'icon___contact___children',
  icon___contact___children___id = 'icon___contact___children___id',
  icon___contact___children___children = 'icon___contact___children___children',
  icon___contact___internal___content = 'icon___contact___internal___content',
  icon___contact___internal___contentDigest = 'icon___contact___internal___contentDigest',
  icon___contact___internal___description = 'icon___contact___internal___description',
  icon___contact___internal___fieldOwners = 'icon___contact___internal___fieldOwners',
  icon___contact___internal___ignoreType = 'icon___contact___internal___ignoreType',
  icon___contact___internal___mediaType = 'icon___contact___internal___mediaType',
  icon___contact___internal___owner = 'icon___contact___internal___owner',
  icon___contact___internal___type = 'icon___contact___internal___type',
  icon___parent___id = 'icon___parent___id',
  icon___parent___parent___id = 'icon___parent___parent___id',
  icon___parent___parent___children = 'icon___parent___parent___children',
  icon___parent___children = 'icon___parent___children',
  icon___parent___children___id = 'icon___parent___children___id',
  icon___parent___children___children = 'icon___parent___children___children',
  icon___parent___internal___content = 'icon___parent___internal___content',
  icon___parent___internal___contentDigest = 'icon___parent___internal___contentDigest',
  icon___parent___internal___description = 'icon___parent___internal___description',
  icon___parent___internal___fieldOwners = 'icon___parent___internal___fieldOwners',
  icon___parent___internal___ignoreType = 'icon___parent___internal___ignoreType',
  icon___parent___internal___mediaType = 'icon___parent___internal___mediaType',
  icon___parent___internal___owner = 'icon___parent___internal___owner',
  icon___parent___internal___type = 'icon___parent___internal___type',
  icon___children = 'icon___children',
  icon___children___id = 'icon___children___id',
  icon___children___parent___id = 'icon___children___parent___id',
  icon___children___parent___children = 'icon___children___parent___children',
  icon___children___children = 'icon___children___children',
  icon___children___children___id = 'icon___children___children___id',
  icon___children___children___children = 'icon___children___children___children',
  icon___children___internal___content = 'icon___children___internal___content',
  icon___children___internal___contentDigest = 'icon___children___internal___contentDigest',
  icon___children___internal___description = 'icon___children___internal___description',
  icon___children___internal___fieldOwners = 'icon___children___internal___fieldOwners',
  icon___children___internal___ignoreType = 'icon___children___internal___ignoreType',
  icon___children___internal___mediaType = 'icon___children___internal___mediaType',
  icon___children___internal___owner = 'icon___children___internal___owner',
  icon___children___internal___type = 'icon___children___internal___type',
  icon___internal___content = 'icon___internal___content',
  icon___internal___contentDigest = 'icon___internal___contentDigest',
  icon___internal___description = 'icon___internal___description',
  icon___internal___fieldOwners = 'icon___internal___fieldOwners',
  icon___internal___ignoreType = 'icon___internal___ignoreType',
  icon___internal___mediaType = 'icon___internal___mediaType',
  icon___internal___owner = 'icon___internal___owner',
  icon___internal___type = 'icon___internal___type',
  icon___childContentfulIconContentsTextNode___id = 'icon___childContentfulIconContentsTextNode___id',
  icon___childContentfulIconContentsTextNode___parent___id = 'icon___childContentfulIconContentsTextNode___parent___id',
  icon___childContentfulIconContentsTextNode___parent___children = 'icon___childContentfulIconContentsTextNode___parent___children',
  icon___childContentfulIconContentsTextNode___children = 'icon___childContentfulIconContentsTextNode___children',
  icon___childContentfulIconContentsTextNode___children___id = 'icon___childContentfulIconContentsTextNode___children___id',
  icon___childContentfulIconContentsTextNode___children___children = 'icon___childContentfulIconContentsTextNode___children___children',
  icon___childContentfulIconContentsTextNode___internal___content = 'icon___childContentfulIconContentsTextNode___internal___content',
  icon___childContentfulIconContentsTextNode___internal___contentDigest = 'icon___childContentfulIconContentsTextNode___internal___contentDigest',
  icon___childContentfulIconContentsTextNode___internal___description = 'icon___childContentfulIconContentsTextNode___internal___description',
  icon___childContentfulIconContentsTextNode___internal___fieldOwners = 'icon___childContentfulIconContentsTextNode___internal___fieldOwners',
  icon___childContentfulIconContentsTextNode___internal___ignoreType = 'icon___childContentfulIconContentsTextNode___internal___ignoreType',
  icon___childContentfulIconContentsTextNode___internal___mediaType = 'icon___childContentfulIconContentsTextNode___internal___mediaType',
  icon___childContentfulIconContentsTextNode___internal___owner = 'icon___childContentfulIconContentsTextNode___internal___owner',
  icon___childContentfulIconContentsTextNode___internal___type = 'icon___childContentfulIconContentsTextNode___internal___type',
  icon___childContentfulIconContentsTextNode___contents = 'icon___childContentfulIconContentsTextNode___contents',
  icon___childContentfulIconContentsTextNode___sys___type = 'icon___childContentfulIconContentsTextNode___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulProjectFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  during?: Maybe<IntQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<ContentfulRoleFilterListInput>;
  assigns?: Maybe<ContentfulAssigneFilterListInput>;
  systems?: Maybe<ContentfulSkillFilterListInput>;
  languages?: Maybe<ContentfulSkillFilterListInput>;
  tools?: Maybe<ContentfulSkillFilterListInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulProjectFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectFilterInput>;
};

export type ContentfulProjectGroupConnection = {
  __typename?: 'ContentfulProjectGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProjectSys = {
  __typename?: 'ContentfulProjectSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulProjectSysContentType>;
};

export type ContentfulProjectSysContentType = {
  __typename?: 'ContentfulProjectSysContentType';
  sys?: Maybe<ContentfulProjectSysContentTypeSys>;
};

export type ContentfulProjectSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulProjectSysContentTypeSysFilterInput>;
};

export type ContentfulProjectSysContentTypeSys = {
  __typename?: 'ContentfulProjectSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulProjectSysContentTypeFilterInput>;
};

export type ContentfulQualification = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulQualification';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  qualification_map?: Maybe<Array<Maybe<ContentfulQualificationMap>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulQualificationSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulQualificationDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationConnection = {
  __typename?: 'ContentfulQualificationConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationEdge>;
  nodes: Array<ContentfulQualification>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQualificationGroupConnection>;
};


export type ContentfulQualificationConnectionDistinctArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQualificationFieldsEnum;
};

export type ContentfulQualificationEdge = {
  __typename?: 'ContentfulQualificationEdge';
  next?: Maybe<ContentfulQualification>;
  node: ContentfulQualification;
  previous?: Maybe<ContentfulQualification>;
};

export enum ContentfulQualificationFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  date = 'date',
  qualification_map = 'qualification_map',
  qualification_map___contentful_id = 'qualification_map___contentful_id',
  qualification_map___id = 'qualification_map___id',
  qualification_map___node_locale = 'qualification_map___node_locale',
  qualification_map___sort = 'qualification_map___sort',
  qualification_map___name = 'qualification_map___name',
  qualification_map___expanded = 'qualification_map___expanded',
  qualification_map___qualifications = 'qualification_map___qualifications',
  qualification_map___qualifications___contentful_id = 'qualification_map___qualifications___contentful_id',
  qualification_map___qualifications___id = 'qualification_map___qualifications___id',
  qualification_map___qualifications___node_locale = 'qualification_map___qualifications___node_locale',
  qualification_map___qualifications___name = 'qualification_map___qualifications___name',
  qualification_map___qualifications___date = 'qualification_map___qualifications___date',
  qualification_map___qualifications___qualification_map = 'qualification_map___qualifications___qualification_map',
  qualification_map___qualifications___qualification_map___contentful_id = 'qualification_map___qualifications___qualification_map___contentful_id',
  qualification_map___qualifications___qualification_map___id = 'qualification_map___qualifications___qualification_map___id',
  qualification_map___qualifications___qualification_map___node_locale = 'qualification_map___qualifications___qualification_map___node_locale',
  qualification_map___qualifications___qualification_map___sort = 'qualification_map___qualifications___qualification_map___sort',
  qualification_map___qualifications___qualification_map___name = 'qualification_map___qualifications___qualification_map___name',
  qualification_map___qualifications___qualification_map___expanded = 'qualification_map___qualifications___qualification_map___expanded',
  qualification_map___qualifications___qualification_map___qualifications = 'qualification_map___qualifications___qualification_map___qualifications',
  qualification_map___qualifications___qualification_map___spaceId = 'qualification_map___qualifications___qualification_map___spaceId',
  qualification_map___qualifications___qualification_map___createdAt = 'qualification_map___qualifications___qualification_map___createdAt',
  qualification_map___qualifications___qualification_map___updatedAt = 'qualification_map___qualifications___qualification_map___updatedAt',
  qualification_map___qualifications___qualification_map___children = 'qualification_map___qualifications___qualification_map___children',
  qualification_map___qualifications___spaceId = 'qualification_map___qualifications___spaceId',
  qualification_map___qualifications___createdAt = 'qualification_map___qualifications___createdAt',
  qualification_map___qualifications___updatedAt = 'qualification_map___qualifications___updatedAt',
  qualification_map___qualifications___sys___type = 'qualification_map___qualifications___sys___type',
  qualification_map___qualifications___sys___revision = 'qualification_map___qualifications___sys___revision',
  qualification_map___qualifications___parent___id = 'qualification_map___qualifications___parent___id',
  qualification_map___qualifications___parent___children = 'qualification_map___qualifications___parent___children',
  qualification_map___qualifications___children = 'qualification_map___qualifications___children',
  qualification_map___qualifications___children___id = 'qualification_map___qualifications___children___id',
  qualification_map___qualifications___children___children = 'qualification_map___qualifications___children___children',
  qualification_map___qualifications___internal___content = 'qualification_map___qualifications___internal___content',
  qualification_map___qualifications___internal___contentDigest = 'qualification_map___qualifications___internal___contentDigest',
  qualification_map___qualifications___internal___description = 'qualification_map___qualifications___internal___description',
  qualification_map___qualifications___internal___fieldOwners = 'qualification_map___qualifications___internal___fieldOwners',
  qualification_map___qualifications___internal___ignoreType = 'qualification_map___qualifications___internal___ignoreType',
  qualification_map___qualifications___internal___mediaType = 'qualification_map___qualifications___internal___mediaType',
  qualification_map___qualifications___internal___owner = 'qualification_map___qualifications___internal___owner',
  qualification_map___qualifications___internal___type = 'qualification_map___qualifications___internal___type',
  qualification_map___spaceId = 'qualification_map___spaceId',
  qualification_map___createdAt = 'qualification_map___createdAt',
  qualification_map___updatedAt = 'qualification_map___updatedAt',
  qualification_map___sys___type = 'qualification_map___sys___type',
  qualification_map___sys___revision = 'qualification_map___sys___revision',
  qualification_map___parent___id = 'qualification_map___parent___id',
  qualification_map___parent___parent___id = 'qualification_map___parent___parent___id',
  qualification_map___parent___parent___children = 'qualification_map___parent___parent___children',
  qualification_map___parent___children = 'qualification_map___parent___children',
  qualification_map___parent___children___id = 'qualification_map___parent___children___id',
  qualification_map___parent___children___children = 'qualification_map___parent___children___children',
  qualification_map___parent___internal___content = 'qualification_map___parent___internal___content',
  qualification_map___parent___internal___contentDigest = 'qualification_map___parent___internal___contentDigest',
  qualification_map___parent___internal___description = 'qualification_map___parent___internal___description',
  qualification_map___parent___internal___fieldOwners = 'qualification_map___parent___internal___fieldOwners',
  qualification_map___parent___internal___ignoreType = 'qualification_map___parent___internal___ignoreType',
  qualification_map___parent___internal___mediaType = 'qualification_map___parent___internal___mediaType',
  qualification_map___parent___internal___owner = 'qualification_map___parent___internal___owner',
  qualification_map___parent___internal___type = 'qualification_map___parent___internal___type',
  qualification_map___children = 'qualification_map___children',
  qualification_map___children___id = 'qualification_map___children___id',
  qualification_map___children___parent___id = 'qualification_map___children___parent___id',
  qualification_map___children___parent___children = 'qualification_map___children___parent___children',
  qualification_map___children___children = 'qualification_map___children___children',
  qualification_map___children___children___id = 'qualification_map___children___children___id',
  qualification_map___children___children___children = 'qualification_map___children___children___children',
  qualification_map___children___internal___content = 'qualification_map___children___internal___content',
  qualification_map___children___internal___contentDigest = 'qualification_map___children___internal___contentDigest',
  qualification_map___children___internal___description = 'qualification_map___children___internal___description',
  qualification_map___children___internal___fieldOwners = 'qualification_map___children___internal___fieldOwners',
  qualification_map___children___internal___ignoreType = 'qualification_map___children___internal___ignoreType',
  qualification_map___children___internal___mediaType = 'qualification_map___children___internal___mediaType',
  qualification_map___children___internal___owner = 'qualification_map___children___internal___owner',
  qualification_map___children___internal___type = 'qualification_map___children___internal___type',
  qualification_map___internal___content = 'qualification_map___internal___content',
  qualification_map___internal___contentDigest = 'qualification_map___internal___contentDigest',
  qualification_map___internal___description = 'qualification_map___internal___description',
  qualification_map___internal___fieldOwners = 'qualification_map___internal___fieldOwners',
  qualification_map___internal___ignoreType = 'qualification_map___internal___ignoreType',
  qualification_map___internal___mediaType = 'qualification_map___internal___mediaType',
  qualification_map___internal___owner = 'qualification_map___internal___owner',
  qualification_map___internal___type = 'qualification_map___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulQualificationFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  qualification_map?: Maybe<ContentfulQualificationMapFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulQualificationFilterListInput = {
  elemMatch?: Maybe<ContentfulQualificationFilterInput>;
};

export type ContentfulQualificationGroupConnection = {
  __typename?: 'ContentfulQualificationGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationEdge>;
  nodes: Array<ContentfulQualification>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMap = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulQualificationMap';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  expanded?: Maybe<Scalars['Boolean']>;
  qualifications?: Maybe<Array<Maybe<ContentfulQualification>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulQualificationMapSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulQualificationMapCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationMapUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapConnection = {
  __typename?: 'ContentfulQualificationMapConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationMapEdge>;
  nodes: Array<ContentfulQualificationMap>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQualificationMapGroupConnection>;
};


export type ContentfulQualificationMapConnectionDistinctArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQualificationMapFieldsEnum;
};

export type ContentfulQualificationMapEdge = {
  __typename?: 'ContentfulQualificationMapEdge';
  next?: Maybe<ContentfulQualificationMap>;
  node: ContentfulQualificationMap;
  previous?: Maybe<ContentfulQualificationMap>;
};

export enum ContentfulQualificationMapFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  sort = 'sort',
  name = 'name',
  expanded = 'expanded',
  qualifications = 'qualifications',
  qualifications___contentful_id = 'qualifications___contentful_id',
  qualifications___id = 'qualifications___id',
  qualifications___node_locale = 'qualifications___node_locale',
  qualifications___name = 'qualifications___name',
  qualifications___date = 'qualifications___date',
  qualifications___qualification_map = 'qualifications___qualification_map',
  qualifications___qualification_map___contentful_id = 'qualifications___qualification_map___contentful_id',
  qualifications___qualification_map___id = 'qualifications___qualification_map___id',
  qualifications___qualification_map___node_locale = 'qualifications___qualification_map___node_locale',
  qualifications___qualification_map___sort = 'qualifications___qualification_map___sort',
  qualifications___qualification_map___name = 'qualifications___qualification_map___name',
  qualifications___qualification_map___expanded = 'qualifications___qualification_map___expanded',
  qualifications___qualification_map___qualifications = 'qualifications___qualification_map___qualifications',
  qualifications___qualification_map___qualifications___contentful_id = 'qualifications___qualification_map___qualifications___contentful_id',
  qualifications___qualification_map___qualifications___id = 'qualifications___qualification_map___qualifications___id',
  qualifications___qualification_map___qualifications___node_locale = 'qualifications___qualification_map___qualifications___node_locale',
  qualifications___qualification_map___qualifications___name = 'qualifications___qualification_map___qualifications___name',
  qualifications___qualification_map___qualifications___date = 'qualifications___qualification_map___qualifications___date',
  qualifications___qualification_map___qualifications___qualification_map = 'qualifications___qualification_map___qualifications___qualification_map',
  qualifications___qualification_map___qualifications___spaceId = 'qualifications___qualification_map___qualifications___spaceId',
  qualifications___qualification_map___qualifications___createdAt = 'qualifications___qualification_map___qualifications___createdAt',
  qualifications___qualification_map___qualifications___updatedAt = 'qualifications___qualification_map___qualifications___updatedAt',
  qualifications___qualification_map___qualifications___children = 'qualifications___qualification_map___qualifications___children',
  qualifications___qualification_map___spaceId = 'qualifications___qualification_map___spaceId',
  qualifications___qualification_map___createdAt = 'qualifications___qualification_map___createdAt',
  qualifications___qualification_map___updatedAt = 'qualifications___qualification_map___updatedAt',
  qualifications___qualification_map___sys___type = 'qualifications___qualification_map___sys___type',
  qualifications___qualification_map___sys___revision = 'qualifications___qualification_map___sys___revision',
  qualifications___qualification_map___parent___id = 'qualifications___qualification_map___parent___id',
  qualifications___qualification_map___parent___children = 'qualifications___qualification_map___parent___children',
  qualifications___qualification_map___children = 'qualifications___qualification_map___children',
  qualifications___qualification_map___children___id = 'qualifications___qualification_map___children___id',
  qualifications___qualification_map___children___children = 'qualifications___qualification_map___children___children',
  qualifications___qualification_map___internal___content = 'qualifications___qualification_map___internal___content',
  qualifications___qualification_map___internal___contentDigest = 'qualifications___qualification_map___internal___contentDigest',
  qualifications___qualification_map___internal___description = 'qualifications___qualification_map___internal___description',
  qualifications___qualification_map___internal___fieldOwners = 'qualifications___qualification_map___internal___fieldOwners',
  qualifications___qualification_map___internal___ignoreType = 'qualifications___qualification_map___internal___ignoreType',
  qualifications___qualification_map___internal___mediaType = 'qualifications___qualification_map___internal___mediaType',
  qualifications___qualification_map___internal___owner = 'qualifications___qualification_map___internal___owner',
  qualifications___qualification_map___internal___type = 'qualifications___qualification_map___internal___type',
  qualifications___spaceId = 'qualifications___spaceId',
  qualifications___createdAt = 'qualifications___createdAt',
  qualifications___updatedAt = 'qualifications___updatedAt',
  qualifications___sys___type = 'qualifications___sys___type',
  qualifications___sys___revision = 'qualifications___sys___revision',
  qualifications___parent___id = 'qualifications___parent___id',
  qualifications___parent___parent___id = 'qualifications___parent___parent___id',
  qualifications___parent___parent___children = 'qualifications___parent___parent___children',
  qualifications___parent___children = 'qualifications___parent___children',
  qualifications___parent___children___id = 'qualifications___parent___children___id',
  qualifications___parent___children___children = 'qualifications___parent___children___children',
  qualifications___parent___internal___content = 'qualifications___parent___internal___content',
  qualifications___parent___internal___contentDigest = 'qualifications___parent___internal___contentDigest',
  qualifications___parent___internal___description = 'qualifications___parent___internal___description',
  qualifications___parent___internal___fieldOwners = 'qualifications___parent___internal___fieldOwners',
  qualifications___parent___internal___ignoreType = 'qualifications___parent___internal___ignoreType',
  qualifications___parent___internal___mediaType = 'qualifications___parent___internal___mediaType',
  qualifications___parent___internal___owner = 'qualifications___parent___internal___owner',
  qualifications___parent___internal___type = 'qualifications___parent___internal___type',
  qualifications___children = 'qualifications___children',
  qualifications___children___id = 'qualifications___children___id',
  qualifications___children___parent___id = 'qualifications___children___parent___id',
  qualifications___children___parent___children = 'qualifications___children___parent___children',
  qualifications___children___children = 'qualifications___children___children',
  qualifications___children___children___id = 'qualifications___children___children___id',
  qualifications___children___children___children = 'qualifications___children___children___children',
  qualifications___children___internal___content = 'qualifications___children___internal___content',
  qualifications___children___internal___contentDigest = 'qualifications___children___internal___contentDigest',
  qualifications___children___internal___description = 'qualifications___children___internal___description',
  qualifications___children___internal___fieldOwners = 'qualifications___children___internal___fieldOwners',
  qualifications___children___internal___ignoreType = 'qualifications___children___internal___ignoreType',
  qualifications___children___internal___mediaType = 'qualifications___children___internal___mediaType',
  qualifications___children___internal___owner = 'qualifications___children___internal___owner',
  qualifications___children___internal___type = 'qualifications___children___internal___type',
  qualifications___internal___content = 'qualifications___internal___content',
  qualifications___internal___contentDigest = 'qualifications___internal___contentDigest',
  qualifications___internal___description = 'qualifications___internal___description',
  qualifications___internal___fieldOwners = 'qualifications___internal___fieldOwners',
  qualifications___internal___ignoreType = 'qualifications___internal___ignoreType',
  qualifications___internal___mediaType = 'qualifications___internal___mediaType',
  qualifications___internal___owner = 'qualifications___internal___owner',
  qualifications___internal___type = 'qualifications___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulQualificationMapFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sort?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  expanded?: Maybe<BooleanQueryOperatorInput>;
  qualifications?: Maybe<ContentfulQualificationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationMapSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulQualificationMapFilterListInput = {
  elemMatch?: Maybe<ContentfulQualificationMapFilterInput>;
};

export type ContentfulQualificationMapGroupConnection = {
  __typename?: 'ContentfulQualificationMapGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationMapEdge>;
  nodes: Array<ContentfulQualificationMap>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQualificationMapFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQualificationMapSys = {
  __typename?: 'ContentfulQualificationMapSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulQualificationMapSysContentType>;
};

export type ContentfulQualificationMapSysContentType = {
  __typename?: 'ContentfulQualificationMapSysContentType';
  sys?: Maybe<ContentfulQualificationMapSysContentTypeSys>;
};

export type ContentfulQualificationMapSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulQualificationMapSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationMapSysContentTypeSys = {
  __typename?: 'ContentfulQualificationMapSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationMapSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulQualificationMapSysContentTypeFilterInput>;
};

export type ContentfulQualificationSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQualificationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQualificationSys = {
  __typename?: 'ContentfulQualificationSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulQualificationSysContentType>;
};

export type ContentfulQualificationSysContentType = {
  __typename?: 'ContentfulQualificationSysContentType';
  sys?: Maybe<ContentfulQualificationSysContentTypeSys>;
};

export type ContentfulQualificationSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulQualificationSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationSysContentTypeSys = {
  __typename?: 'ContentfulQualificationSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulQualificationSysContentTypeFilterInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulResize = {
  __typename?: 'ContentfulResize';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  __typename?: 'ContentfulResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulRole = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulRole';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<ContentfulProject>>>;
  oss?: Maybe<Array<Maybe<ContentfulOss>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulRoleSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulRoleCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulRoleUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulRoleConnection = {
  __typename?: 'ContentfulRoleConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulRoleEdge>;
  nodes: Array<ContentfulRole>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulRoleGroupConnection>;
};


export type ContentfulRoleConnectionDistinctArgs = {
  field: ContentfulRoleFieldsEnum;
};


export type ContentfulRoleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulRoleFieldsEnum;
};

export type ContentfulRoleEdge = {
  __typename?: 'ContentfulRoleEdge';
  next?: Maybe<ContentfulRole>;
  node: ContentfulRole;
  previous?: Maybe<ContentfulRole>;
};

export enum ContentfulRoleFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  project = 'project',
  project___contentful_id = 'project___contentful_id',
  project___id = 'project___id',
  project___node_locale = 'project___node_locale',
  project___name = 'project___name',
  project___startDate = 'project___startDate',
  project___during = 'project___during',
  project___comment = 'project___comment',
  project___roles = 'project___roles',
  project___roles___contentful_id = 'project___roles___contentful_id',
  project___roles___id = 'project___roles___id',
  project___roles___node_locale = 'project___roles___node_locale',
  project___roles___name = 'project___roles___name',
  project___roles___project = 'project___roles___project',
  project___roles___project___contentful_id = 'project___roles___project___contentful_id',
  project___roles___project___id = 'project___roles___project___id',
  project___roles___project___node_locale = 'project___roles___project___node_locale',
  project___roles___project___name = 'project___roles___project___name',
  project___roles___project___startDate = 'project___roles___project___startDate',
  project___roles___project___during = 'project___roles___project___during',
  project___roles___project___comment = 'project___roles___project___comment',
  project___roles___project___roles = 'project___roles___project___roles',
  project___roles___project___assigns = 'project___roles___project___assigns',
  project___roles___project___systems = 'project___roles___project___systems',
  project___roles___project___languages = 'project___roles___project___languages',
  project___roles___project___tools = 'project___roles___project___tools',
  project___roles___project___spaceId = 'project___roles___project___spaceId',
  project___roles___project___createdAt = 'project___roles___project___createdAt',
  project___roles___project___updatedAt = 'project___roles___project___updatedAt',
  project___roles___project___children = 'project___roles___project___children',
  project___roles___oss = 'project___roles___oss',
  project___roles___oss___contentful_id = 'project___roles___oss___contentful_id',
  project___roles___oss___id = 'project___roles___oss___id',
  project___roles___oss___node_locale = 'project___roles___oss___node_locale',
  project___roles___oss___name = 'project___roles___oss___name',
  project___roles___oss___slug = 'project___roles___oss___slug',
  project___roles___oss___startDate = 'project___roles___oss___startDate',
  project___roles___oss___during = 'project___roles___oss___during',
  project___roles___oss___comment = 'project___roles___oss___comment',
  project___roles___oss___siteUrl = 'project___roles___oss___siteUrl',
  project___roles___oss___sourceUrl = 'project___roles___oss___sourceUrl',
  project___roles___oss___roles = 'project___roles___oss___roles',
  project___roles___oss___assigns = 'project___roles___oss___assigns',
  project___roles___oss___systems = 'project___roles___oss___systems',
  project___roles___oss___languages = 'project___roles___oss___languages',
  project___roles___oss___tools = 'project___roles___oss___tools',
  project___roles___oss___spaceId = 'project___roles___oss___spaceId',
  project___roles___oss___createdAt = 'project___roles___oss___createdAt',
  project___roles___oss___updatedAt = 'project___roles___oss___updatedAt',
  project___roles___oss___children = 'project___roles___oss___children',
  project___roles___spaceId = 'project___roles___spaceId',
  project___roles___createdAt = 'project___roles___createdAt',
  project___roles___updatedAt = 'project___roles___updatedAt',
  project___roles___sys___type = 'project___roles___sys___type',
  project___roles___sys___revision = 'project___roles___sys___revision',
  project___roles___parent___id = 'project___roles___parent___id',
  project___roles___parent___children = 'project___roles___parent___children',
  project___roles___children = 'project___roles___children',
  project___roles___children___id = 'project___roles___children___id',
  project___roles___children___children = 'project___roles___children___children',
  project___roles___internal___content = 'project___roles___internal___content',
  project___roles___internal___contentDigest = 'project___roles___internal___contentDigest',
  project___roles___internal___description = 'project___roles___internal___description',
  project___roles___internal___fieldOwners = 'project___roles___internal___fieldOwners',
  project___roles___internal___ignoreType = 'project___roles___internal___ignoreType',
  project___roles___internal___mediaType = 'project___roles___internal___mediaType',
  project___roles___internal___owner = 'project___roles___internal___owner',
  project___roles___internal___type = 'project___roles___internal___type',
  project___assigns = 'project___assigns',
  project___assigns___contentful_id = 'project___assigns___contentful_id',
  project___assigns___id = 'project___assigns___id',
  project___assigns___node_locale = 'project___assigns___node_locale',
  project___assigns___name = 'project___assigns___name',
  project___assigns___oss = 'project___assigns___oss',
  project___assigns___oss___contentful_id = 'project___assigns___oss___contentful_id',
  project___assigns___oss___id = 'project___assigns___oss___id',
  project___assigns___oss___node_locale = 'project___assigns___oss___node_locale',
  project___assigns___oss___name = 'project___assigns___oss___name',
  project___assigns___oss___slug = 'project___assigns___oss___slug',
  project___assigns___oss___startDate = 'project___assigns___oss___startDate',
  project___assigns___oss___during = 'project___assigns___oss___during',
  project___assigns___oss___comment = 'project___assigns___oss___comment',
  project___assigns___oss___siteUrl = 'project___assigns___oss___siteUrl',
  project___assigns___oss___sourceUrl = 'project___assigns___oss___sourceUrl',
  project___assigns___oss___roles = 'project___assigns___oss___roles',
  project___assigns___oss___assigns = 'project___assigns___oss___assigns',
  project___assigns___oss___systems = 'project___assigns___oss___systems',
  project___assigns___oss___languages = 'project___assigns___oss___languages',
  project___assigns___oss___tools = 'project___assigns___oss___tools',
  project___assigns___oss___spaceId = 'project___assigns___oss___spaceId',
  project___assigns___oss___createdAt = 'project___assigns___oss___createdAt',
  project___assigns___oss___updatedAt = 'project___assigns___oss___updatedAt',
  project___assigns___oss___children = 'project___assigns___oss___children',
  project___assigns___spaceId = 'project___assigns___spaceId',
  project___assigns___createdAt = 'project___assigns___createdAt',
  project___assigns___updatedAt = 'project___assigns___updatedAt',
  project___assigns___sys___type = 'project___assigns___sys___type',
  project___assigns___sys___revision = 'project___assigns___sys___revision',
  project___assigns___project = 'project___assigns___project',
  project___assigns___project___contentful_id = 'project___assigns___project___contentful_id',
  project___assigns___project___id = 'project___assigns___project___id',
  project___assigns___project___node_locale = 'project___assigns___project___node_locale',
  project___assigns___project___name = 'project___assigns___project___name',
  project___assigns___project___startDate = 'project___assigns___project___startDate',
  project___assigns___project___during = 'project___assigns___project___during',
  project___assigns___project___comment = 'project___assigns___project___comment',
  project___assigns___project___roles = 'project___assigns___project___roles',
  project___assigns___project___assigns = 'project___assigns___project___assigns',
  project___assigns___project___systems = 'project___assigns___project___systems',
  project___assigns___project___languages = 'project___assigns___project___languages',
  project___assigns___project___tools = 'project___assigns___project___tools',
  project___assigns___project___spaceId = 'project___assigns___project___spaceId',
  project___assigns___project___createdAt = 'project___assigns___project___createdAt',
  project___assigns___project___updatedAt = 'project___assigns___project___updatedAt',
  project___assigns___project___children = 'project___assigns___project___children',
  project___assigns___parent___id = 'project___assigns___parent___id',
  project___assigns___parent___children = 'project___assigns___parent___children',
  project___assigns___children = 'project___assigns___children',
  project___assigns___children___id = 'project___assigns___children___id',
  project___assigns___children___children = 'project___assigns___children___children',
  project___assigns___internal___content = 'project___assigns___internal___content',
  project___assigns___internal___contentDigest = 'project___assigns___internal___contentDigest',
  project___assigns___internal___description = 'project___assigns___internal___description',
  project___assigns___internal___fieldOwners = 'project___assigns___internal___fieldOwners',
  project___assigns___internal___ignoreType = 'project___assigns___internal___ignoreType',
  project___assigns___internal___mediaType = 'project___assigns___internal___mediaType',
  project___assigns___internal___owner = 'project___assigns___internal___owner',
  project___assigns___internal___type = 'project___assigns___internal___type',
  project___systems = 'project___systems',
  project___systems___contentful_id = 'project___systems___contentful_id',
  project___systems___id = 'project___systems___id',
  project___systems___node_locale = 'project___systems___node_locale',
  project___systems___name = 'project___systems___name',
  project___systems___level = 'project___systems___level',
  project___systems___project = 'project___systems___project',
  project___systems___project___contentful_id = 'project___systems___project___contentful_id',
  project___systems___project___id = 'project___systems___project___id',
  project___systems___project___node_locale = 'project___systems___project___node_locale',
  project___systems___project___name = 'project___systems___project___name',
  project___systems___project___startDate = 'project___systems___project___startDate',
  project___systems___project___during = 'project___systems___project___during',
  project___systems___project___comment = 'project___systems___project___comment',
  project___systems___project___roles = 'project___systems___project___roles',
  project___systems___project___assigns = 'project___systems___project___assigns',
  project___systems___project___systems = 'project___systems___project___systems',
  project___systems___project___languages = 'project___systems___project___languages',
  project___systems___project___tools = 'project___systems___project___tools',
  project___systems___project___spaceId = 'project___systems___project___spaceId',
  project___systems___project___createdAt = 'project___systems___project___createdAt',
  project___systems___project___updatedAt = 'project___systems___project___updatedAt',
  project___systems___project___children = 'project___systems___project___children',
  project___systems___spaceId = 'project___systems___spaceId',
  project___systems___createdAt = 'project___systems___createdAt',
  project___systems___updatedAt = 'project___systems___updatedAt',
  project___systems___sys___type = 'project___systems___sys___type',
  project___systems___sys___revision = 'project___systems___sys___revision',
  project___systems___oss = 'project___systems___oss',
  project___systems___oss___contentful_id = 'project___systems___oss___contentful_id',
  project___systems___oss___id = 'project___systems___oss___id',
  project___systems___oss___node_locale = 'project___systems___oss___node_locale',
  project___systems___oss___name = 'project___systems___oss___name',
  project___systems___oss___slug = 'project___systems___oss___slug',
  project___systems___oss___startDate = 'project___systems___oss___startDate',
  project___systems___oss___during = 'project___systems___oss___during',
  project___systems___oss___comment = 'project___systems___oss___comment',
  project___systems___oss___siteUrl = 'project___systems___oss___siteUrl',
  project___systems___oss___sourceUrl = 'project___systems___oss___sourceUrl',
  project___systems___oss___roles = 'project___systems___oss___roles',
  project___systems___oss___assigns = 'project___systems___oss___assigns',
  project___systems___oss___systems = 'project___systems___oss___systems',
  project___systems___oss___languages = 'project___systems___oss___languages',
  project___systems___oss___tools = 'project___systems___oss___tools',
  project___systems___oss___spaceId = 'project___systems___oss___spaceId',
  project___systems___oss___createdAt = 'project___systems___oss___createdAt',
  project___systems___oss___updatedAt = 'project___systems___oss___updatedAt',
  project___systems___oss___children = 'project___systems___oss___children',
  project___systems___skill_map = 'project___systems___skill_map',
  project___systems___skill_map___contentful_id = 'project___systems___skill_map___contentful_id',
  project___systems___skill_map___id = 'project___systems___skill_map___id',
  project___systems___skill_map___node_locale = 'project___systems___skill_map___node_locale',
  project___systems___skill_map___sort = 'project___systems___skill_map___sort',
  project___systems___skill_map___name = 'project___systems___skill_map___name',
  project___systems___skill_map___expanded = 'project___systems___skill_map___expanded',
  project___systems___skill_map___skills = 'project___systems___skill_map___skills',
  project___systems___skill_map___spaceId = 'project___systems___skill_map___spaceId',
  project___systems___skill_map___createdAt = 'project___systems___skill_map___createdAt',
  project___systems___skill_map___updatedAt = 'project___systems___skill_map___updatedAt',
  project___systems___skill_map___children = 'project___systems___skill_map___children',
  project___systems___parent___id = 'project___systems___parent___id',
  project___systems___parent___children = 'project___systems___parent___children',
  project___systems___children = 'project___systems___children',
  project___systems___children___id = 'project___systems___children___id',
  project___systems___children___children = 'project___systems___children___children',
  project___systems___internal___content = 'project___systems___internal___content',
  project___systems___internal___contentDigest = 'project___systems___internal___contentDigest',
  project___systems___internal___description = 'project___systems___internal___description',
  project___systems___internal___fieldOwners = 'project___systems___internal___fieldOwners',
  project___systems___internal___ignoreType = 'project___systems___internal___ignoreType',
  project___systems___internal___mediaType = 'project___systems___internal___mediaType',
  project___systems___internal___owner = 'project___systems___internal___owner',
  project___systems___internal___type = 'project___systems___internal___type',
  project___languages = 'project___languages',
  project___languages___contentful_id = 'project___languages___contentful_id',
  project___languages___id = 'project___languages___id',
  project___languages___node_locale = 'project___languages___node_locale',
  project___languages___name = 'project___languages___name',
  project___languages___level = 'project___languages___level',
  project___languages___project = 'project___languages___project',
  project___languages___project___contentful_id = 'project___languages___project___contentful_id',
  project___languages___project___id = 'project___languages___project___id',
  project___languages___project___node_locale = 'project___languages___project___node_locale',
  project___languages___project___name = 'project___languages___project___name',
  project___languages___project___startDate = 'project___languages___project___startDate',
  project___languages___project___during = 'project___languages___project___during',
  project___languages___project___comment = 'project___languages___project___comment',
  project___languages___project___roles = 'project___languages___project___roles',
  project___languages___project___assigns = 'project___languages___project___assigns',
  project___languages___project___systems = 'project___languages___project___systems',
  project___languages___project___languages = 'project___languages___project___languages',
  project___languages___project___tools = 'project___languages___project___tools',
  project___languages___project___spaceId = 'project___languages___project___spaceId',
  project___languages___project___createdAt = 'project___languages___project___createdAt',
  project___languages___project___updatedAt = 'project___languages___project___updatedAt',
  project___languages___project___children = 'project___languages___project___children',
  project___languages___spaceId = 'project___languages___spaceId',
  project___languages___createdAt = 'project___languages___createdAt',
  project___languages___updatedAt = 'project___languages___updatedAt',
  project___languages___sys___type = 'project___languages___sys___type',
  project___languages___sys___revision = 'project___languages___sys___revision',
  project___languages___oss = 'project___languages___oss',
  project___languages___oss___contentful_id = 'project___languages___oss___contentful_id',
  project___languages___oss___id = 'project___languages___oss___id',
  project___languages___oss___node_locale = 'project___languages___oss___node_locale',
  project___languages___oss___name = 'project___languages___oss___name',
  project___languages___oss___slug = 'project___languages___oss___slug',
  project___languages___oss___startDate = 'project___languages___oss___startDate',
  project___languages___oss___during = 'project___languages___oss___during',
  project___languages___oss___comment = 'project___languages___oss___comment',
  project___languages___oss___siteUrl = 'project___languages___oss___siteUrl',
  project___languages___oss___sourceUrl = 'project___languages___oss___sourceUrl',
  project___languages___oss___roles = 'project___languages___oss___roles',
  project___languages___oss___assigns = 'project___languages___oss___assigns',
  project___languages___oss___systems = 'project___languages___oss___systems',
  project___languages___oss___languages = 'project___languages___oss___languages',
  project___languages___oss___tools = 'project___languages___oss___tools',
  project___languages___oss___spaceId = 'project___languages___oss___spaceId',
  project___languages___oss___createdAt = 'project___languages___oss___createdAt',
  project___languages___oss___updatedAt = 'project___languages___oss___updatedAt',
  project___languages___oss___children = 'project___languages___oss___children',
  project___languages___skill_map = 'project___languages___skill_map',
  project___languages___skill_map___contentful_id = 'project___languages___skill_map___contentful_id',
  project___languages___skill_map___id = 'project___languages___skill_map___id',
  project___languages___skill_map___node_locale = 'project___languages___skill_map___node_locale',
  project___languages___skill_map___sort = 'project___languages___skill_map___sort',
  project___languages___skill_map___name = 'project___languages___skill_map___name',
  project___languages___skill_map___expanded = 'project___languages___skill_map___expanded',
  project___languages___skill_map___skills = 'project___languages___skill_map___skills',
  project___languages___skill_map___spaceId = 'project___languages___skill_map___spaceId',
  project___languages___skill_map___createdAt = 'project___languages___skill_map___createdAt',
  project___languages___skill_map___updatedAt = 'project___languages___skill_map___updatedAt',
  project___languages___skill_map___children = 'project___languages___skill_map___children',
  project___languages___parent___id = 'project___languages___parent___id',
  project___languages___parent___children = 'project___languages___parent___children',
  project___languages___children = 'project___languages___children',
  project___languages___children___id = 'project___languages___children___id',
  project___languages___children___children = 'project___languages___children___children',
  project___languages___internal___content = 'project___languages___internal___content',
  project___languages___internal___contentDigest = 'project___languages___internal___contentDigest',
  project___languages___internal___description = 'project___languages___internal___description',
  project___languages___internal___fieldOwners = 'project___languages___internal___fieldOwners',
  project___languages___internal___ignoreType = 'project___languages___internal___ignoreType',
  project___languages___internal___mediaType = 'project___languages___internal___mediaType',
  project___languages___internal___owner = 'project___languages___internal___owner',
  project___languages___internal___type = 'project___languages___internal___type',
  project___tools = 'project___tools',
  project___tools___contentful_id = 'project___tools___contentful_id',
  project___tools___id = 'project___tools___id',
  project___tools___node_locale = 'project___tools___node_locale',
  project___tools___name = 'project___tools___name',
  project___tools___level = 'project___tools___level',
  project___tools___project = 'project___tools___project',
  project___tools___project___contentful_id = 'project___tools___project___contentful_id',
  project___tools___project___id = 'project___tools___project___id',
  project___tools___project___node_locale = 'project___tools___project___node_locale',
  project___tools___project___name = 'project___tools___project___name',
  project___tools___project___startDate = 'project___tools___project___startDate',
  project___tools___project___during = 'project___tools___project___during',
  project___tools___project___comment = 'project___tools___project___comment',
  project___tools___project___roles = 'project___tools___project___roles',
  project___tools___project___assigns = 'project___tools___project___assigns',
  project___tools___project___systems = 'project___tools___project___systems',
  project___tools___project___languages = 'project___tools___project___languages',
  project___tools___project___tools = 'project___tools___project___tools',
  project___tools___project___spaceId = 'project___tools___project___spaceId',
  project___tools___project___createdAt = 'project___tools___project___createdAt',
  project___tools___project___updatedAt = 'project___tools___project___updatedAt',
  project___tools___project___children = 'project___tools___project___children',
  project___tools___spaceId = 'project___tools___spaceId',
  project___tools___createdAt = 'project___tools___createdAt',
  project___tools___updatedAt = 'project___tools___updatedAt',
  project___tools___sys___type = 'project___tools___sys___type',
  project___tools___sys___revision = 'project___tools___sys___revision',
  project___tools___oss = 'project___tools___oss',
  project___tools___oss___contentful_id = 'project___tools___oss___contentful_id',
  project___tools___oss___id = 'project___tools___oss___id',
  project___tools___oss___node_locale = 'project___tools___oss___node_locale',
  project___tools___oss___name = 'project___tools___oss___name',
  project___tools___oss___slug = 'project___tools___oss___slug',
  project___tools___oss___startDate = 'project___tools___oss___startDate',
  project___tools___oss___during = 'project___tools___oss___during',
  project___tools___oss___comment = 'project___tools___oss___comment',
  project___tools___oss___siteUrl = 'project___tools___oss___siteUrl',
  project___tools___oss___sourceUrl = 'project___tools___oss___sourceUrl',
  project___tools___oss___roles = 'project___tools___oss___roles',
  project___tools___oss___assigns = 'project___tools___oss___assigns',
  project___tools___oss___systems = 'project___tools___oss___systems',
  project___tools___oss___languages = 'project___tools___oss___languages',
  project___tools___oss___tools = 'project___tools___oss___tools',
  project___tools___oss___spaceId = 'project___tools___oss___spaceId',
  project___tools___oss___createdAt = 'project___tools___oss___createdAt',
  project___tools___oss___updatedAt = 'project___tools___oss___updatedAt',
  project___tools___oss___children = 'project___tools___oss___children',
  project___tools___skill_map = 'project___tools___skill_map',
  project___tools___skill_map___contentful_id = 'project___tools___skill_map___contentful_id',
  project___tools___skill_map___id = 'project___tools___skill_map___id',
  project___tools___skill_map___node_locale = 'project___tools___skill_map___node_locale',
  project___tools___skill_map___sort = 'project___tools___skill_map___sort',
  project___tools___skill_map___name = 'project___tools___skill_map___name',
  project___tools___skill_map___expanded = 'project___tools___skill_map___expanded',
  project___tools___skill_map___skills = 'project___tools___skill_map___skills',
  project___tools___skill_map___spaceId = 'project___tools___skill_map___spaceId',
  project___tools___skill_map___createdAt = 'project___tools___skill_map___createdAt',
  project___tools___skill_map___updatedAt = 'project___tools___skill_map___updatedAt',
  project___tools___skill_map___children = 'project___tools___skill_map___children',
  project___tools___parent___id = 'project___tools___parent___id',
  project___tools___parent___children = 'project___tools___parent___children',
  project___tools___children = 'project___tools___children',
  project___tools___children___id = 'project___tools___children___id',
  project___tools___children___children = 'project___tools___children___children',
  project___tools___internal___content = 'project___tools___internal___content',
  project___tools___internal___contentDigest = 'project___tools___internal___contentDigest',
  project___tools___internal___description = 'project___tools___internal___description',
  project___tools___internal___fieldOwners = 'project___tools___internal___fieldOwners',
  project___tools___internal___ignoreType = 'project___tools___internal___ignoreType',
  project___tools___internal___mediaType = 'project___tools___internal___mediaType',
  project___tools___internal___owner = 'project___tools___internal___owner',
  project___tools___internal___type = 'project___tools___internal___type',
  project___icon___contentful_id = 'project___icon___contentful_id',
  project___icon___id = 'project___icon___id',
  project___icon___node_locale = 'project___icon___node_locale',
  project___icon___title = 'project___icon___title',
  project___icon___history = 'project___icon___history',
  project___icon___history___contentful_id = 'project___icon___history___contentful_id',
  project___icon___history___id = 'project___icon___history___id',
  project___icon___history___node_locale = 'project___icon___history___node_locale',
  project___icon___history___date = 'project___icon___history___date',
  project___icon___history___title = 'project___icon___history___title',
  project___icon___history___subheader = 'project___icon___history___subheader',
  project___icon___history___spaceId = 'project___icon___history___spaceId',
  project___icon___history___createdAt = 'project___icon___history___createdAt',
  project___icon___history___updatedAt = 'project___icon___history___updatedAt',
  project___icon___history___children = 'project___icon___history___children',
  project___icon___contents___id = 'project___icon___contents___id',
  project___icon___contents___children = 'project___icon___contents___children',
  project___icon___contents___contents = 'project___icon___contents___contents',
  project___icon___spaceId = 'project___icon___spaceId',
  project___icon___createdAt = 'project___icon___createdAt',
  project___icon___updatedAt = 'project___icon___updatedAt',
  project___icon___sys___type = 'project___icon___sys___type',
  project___icon___sys___revision = 'project___icon___sys___revision',
  project___icon___what_i_can_do = 'project___icon___what_i_can_do',
  project___icon___what_i_can_do___contentful_id = 'project___icon___what_i_can_do___contentful_id',
  project___icon___what_i_can_do___id = 'project___icon___what_i_can_do___id',
  project___icon___what_i_can_do___node_locale = 'project___icon___what_i_can_do___node_locale',
  project___icon___what_i_can_do___sort = 'project___icon___what_i_can_do___sort',
  project___icon___what_i_can_do___title = 'project___icon___what_i_can_do___title',
  project___icon___what_i_can_do___message = 'project___icon___what_i_can_do___message',
  project___icon___what_i_can_do___spaceId = 'project___icon___what_i_can_do___spaceId',
  project___icon___what_i_can_do___createdAt = 'project___icon___what_i_can_do___createdAt',
  project___icon___what_i_can_do___updatedAt = 'project___icon___what_i_can_do___updatedAt',
  project___icon___what_i_can_do___children = 'project___icon___what_i_can_do___children',
  project___icon___project = 'project___icon___project',
  project___icon___project___contentful_id = 'project___icon___project___contentful_id',
  project___icon___project___id = 'project___icon___project___id',
  project___icon___project___node_locale = 'project___icon___project___node_locale',
  project___icon___project___name = 'project___icon___project___name',
  project___icon___project___startDate = 'project___icon___project___startDate',
  project___icon___project___during = 'project___icon___project___during',
  project___icon___project___comment = 'project___icon___project___comment',
  project___icon___project___roles = 'project___icon___project___roles',
  project___icon___project___assigns = 'project___icon___project___assigns',
  project___icon___project___systems = 'project___icon___project___systems',
  project___icon___project___languages = 'project___icon___project___languages',
  project___icon___project___tools = 'project___icon___project___tools',
  project___icon___project___spaceId = 'project___icon___project___spaceId',
  project___icon___project___createdAt = 'project___icon___project___createdAt',
  project___icon___project___updatedAt = 'project___icon___project___updatedAt',
  project___icon___project___children = 'project___icon___project___children',
  project___icon___contact = 'project___icon___contact',
  project___icon___contact___contentful_id = 'project___icon___contact___contentful_id',
  project___icon___contact___id = 'project___icon___contact___id',
  project___icon___contact___node_locale = 'project___icon___contact___node_locale',
  project___icon___contact___sort = 'project___icon___contact___sort',
  project___icon___contact___title = 'project___icon___contact___title',
  project___icon___contact___subTitle = 'project___icon___contact___subTitle',
  project___icon___contact___href = 'project___icon___contact___href',
  project___icon___contact___spaceId = 'project___icon___contact___spaceId',
  project___icon___contact___createdAt = 'project___icon___contact___createdAt',
  project___icon___contact___updatedAt = 'project___icon___contact___updatedAt',
  project___icon___contact___children = 'project___icon___contact___children',
  project___icon___parent___id = 'project___icon___parent___id',
  project___icon___parent___children = 'project___icon___parent___children',
  project___icon___children = 'project___icon___children',
  project___icon___children___id = 'project___icon___children___id',
  project___icon___children___children = 'project___icon___children___children',
  project___icon___internal___content = 'project___icon___internal___content',
  project___icon___internal___contentDigest = 'project___icon___internal___contentDigest',
  project___icon___internal___description = 'project___icon___internal___description',
  project___icon___internal___fieldOwners = 'project___icon___internal___fieldOwners',
  project___icon___internal___ignoreType = 'project___icon___internal___ignoreType',
  project___icon___internal___mediaType = 'project___icon___internal___mediaType',
  project___icon___internal___owner = 'project___icon___internal___owner',
  project___icon___internal___type = 'project___icon___internal___type',
  project___icon___childContentfulIconContentsTextNode___id = 'project___icon___childContentfulIconContentsTextNode___id',
  project___icon___childContentfulIconContentsTextNode___children = 'project___icon___childContentfulIconContentsTextNode___children',
  project___icon___childContentfulIconContentsTextNode___contents = 'project___icon___childContentfulIconContentsTextNode___contents',
  project___spaceId = 'project___spaceId',
  project___createdAt = 'project___createdAt',
  project___updatedAt = 'project___updatedAt',
  project___sys___type = 'project___sys___type',
  project___sys___revision = 'project___sys___revision',
  project___parent___id = 'project___parent___id',
  project___parent___parent___id = 'project___parent___parent___id',
  project___parent___parent___children = 'project___parent___parent___children',
  project___parent___children = 'project___parent___children',
  project___parent___children___id = 'project___parent___children___id',
  project___parent___children___children = 'project___parent___children___children',
  project___parent___internal___content = 'project___parent___internal___content',
  project___parent___internal___contentDigest = 'project___parent___internal___contentDigest',
  project___parent___internal___description = 'project___parent___internal___description',
  project___parent___internal___fieldOwners = 'project___parent___internal___fieldOwners',
  project___parent___internal___ignoreType = 'project___parent___internal___ignoreType',
  project___parent___internal___mediaType = 'project___parent___internal___mediaType',
  project___parent___internal___owner = 'project___parent___internal___owner',
  project___parent___internal___type = 'project___parent___internal___type',
  project___children = 'project___children',
  project___children___id = 'project___children___id',
  project___children___parent___id = 'project___children___parent___id',
  project___children___parent___children = 'project___children___parent___children',
  project___children___children = 'project___children___children',
  project___children___children___id = 'project___children___children___id',
  project___children___children___children = 'project___children___children___children',
  project___children___internal___content = 'project___children___internal___content',
  project___children___internal___contentDigest = 'project___children___internal___contentDigest',
  project___children___internal___description = 'project___children___internal___description',
  project___children___internal___fieldOwners = 'project___children___internal___fieldOwners',
  project___children___internal___ignoreType = 'project___children___internal___ignoreType',
  project___children___internal___mediaType = 'project___children___internal___mediaType',
  project___children___internal___owner = 'project___children___internal___owner',
  project___children___internal___type = 'project___children___internal___type',
  project___internal___content = 'project___internal___content',
  project___internal___contentDigest = 'project___internal___contentDigest',
  project___internal___description = 'project___internal___description',
  project___internal___fieldOwners = 'project___internal___fieldOwners',
  project___internal___ignoreType = 'project___internal___ignoreType',
  project___internal___mediaType = 'project___internal___mediaType',
  project___internal___owner = 'project___internal___owner',
  project___internal___type = 'project___internal___type',
  oss = 'oss',
  oss___contentful_id = 'oss___contentful_id',
  oss___id = 'oss___id',
  oss___node_locale = 'oss___node_locale',
  oss___name = 'oss___name',
  oss___slug = 'oss___slug',
  oss___startDate = 'oss___startDate',
  oss___during = 'oss___during',
  oss___comment = 'oss___comment',
  oss___siteUrl = 'oss___siteUrl',
  oss___sourceUrl = 'oss___sourceUrl',
  oss___mainImage___contentful_id = 'oss___mainImage___contentful_id',
  oss___mainImage___id = 'oss___mainImage___id',
  oss___mainImage___spaceId = 'oss___mainImage___spaceId',
  oss___mainImage___createdAt = 'oss___mainImage___createdAt',
  oss___mainImage___updatedAt = 'oss___mainImage___updatedAt',
  oss___mainImage___file___url = 'oss___mainImage___file___url',
  oss___mainImage___file___fileName = 'oss___mainImage___file___fileName',
  oss___mainImage___file___contentType = 'oss___mainImage___file___contentType',
  oss___mainImage___title = 'oss___mainImage___title',
  oss___mainImage___description = 'oss___mainImage___description',
  oss___mainImage___node_locale = 'oss___mainImage___node_locale',
  oss___mainImage___sys___type = 'oss___mainImage___sys___type',
  oss___mainImage___sys___revision = 'oss___mainImage___sys___revision',
  oss___mainImage___localFile___sourceInstanceName = 'oss___mainImage___localFile___sourceInstanceName',
  oss___mainImage___localFile___absolutePath = 'oss___mainImage___localFile___absolutePath',
  oss___mainImage___localFile___relativePath = 'oss___mainImage___localFile___relativePath',
  oss___mainImage___localFile___extension = 'oss___mainImage___localFile___extension',
  oss___mainImage___localFile___size = 'oss___mainImage___localFile___size',
  oss___mainImage___localFile___prettySize = 'oss___mainImage___localFile___prettySize',
  oss___mainImage___localFile___modifiedTime = 'oss___mainImage___localFile___modifiedTime',
  oss___mainImage___localFile___accessTime = 'oss___mainImage___localFile___accessTime',
  oss___mainImage___localFile___changeTime = 'oss___mainImage___localFile___changeTime',
  oss___mainImage___localFile___birthTime = 'oss___mainImage___localFile___birthTime',
  oss___mainImage___localFile___root = 'oss___mainImage___localFile___root',
  oss___mainImage___localFile___dir = 'oss___mainImage___localFile___dir',
  oss___mainImage___localFile___base = 'oss___mainImage___localFile___base',
  oss___mainImage___localFile___ext = 'oss___mainImage___localFile___ext',
  oss___mainImage___localFile___name = 'oss___mainImage___localFile___name',
  oss___mainImage___localFile___relativeDirectory = 'oss___mainImage___localFile___relativeDirectory',
  oss___mainImage___localFile___dev = 'oss___mainImage___localFile___dev',
  oss___mainImage___localFile___mode = 'oss___mainImage___localFile___mode',
  oss___mainImage___localFile___nlink = 'oss___mainImage___localFile___nlink',
  oss___mainImage___localFile___uid = 'oss___mainImage___localFile___uid',
  oss___mainImage___localFile___gid = 'oss___mainImage___localFile___gid',
  oss___mainImage___localFile___rdev = 'oss___mainImage___localFile___rdev',
  oss___mainImage___localFile___ino = 'oss___mainImage___localFile___ino',
  oss___mainImage___localFile___atimeMs = 'oss___mainImage___localFile___atimeMs',
  oss___mainImage___localFile___mtimeMs = 'oss___mainImage___localFile___mtimeMs',
  oss___mainImage___localFile___ctimeMs = 'oss___mainImage___localFile___ctimeMs',
  oss___mainImage___localFile___atime = 'oss___mainImage___localFile___atime',
  oss___mainImage___localFile___mtime = 'oss___mainImage___localFile___mtime',
  oss___mainImage___localFile___ctime = 'oss___mainImage___localFile___ctime',
  oss___mainImage___localFile___birthtime = 'oss___mainImage___localFile___birthtime',
  oss___mainImage___localFile___birthtimeMs = 'oss___mainImage___localFile___birthtimeMs',
  oss___mainImage___localFile___blksize = 'oss___mainImage___localFile___blksize',
  oss___mainImage___localFile___blocks = 'oss___mainImage___localFile___blocks',
  oss___mainImage___localFile___url = 'oss___mainImage___localFile___url',
  oss___mainImage___localFile___id = 'oss___mainImage___localFile___id',
  oss___mainImage___localFile___children = 'oss___mainImage___localFile___children',
  oss___mainImage___fixed___base64 = 'oss___mainImage___fixed___base64',
  oss___mainImage___fixed___tracedSVG = 'oss___mainImage___fixed___tracedSVG',
  oss___mainImage___fixed___aspectRatio = 'oss___mainImage___fixed___aspectRatio',
  oss___mainImage___fixed___width = 'oss___mainImage___fixed___width',
  oss___mainImage___fixed___height = 'oss___mainImage___fixed___height',
  oss___mainImage___fixed___src = 'oss___mainImage___fixed___src',
  oss___mainImage___fixed___srcSet = 'oss___mainImage___fixed___srcSet',
  oss___mainImage___fixed___srcWebp = 'oss___mainImage___fixed___srcWebp',
  oss___mainImage___fixed___srcSetWebp = 'oss___mainImage___fixed___srcSetWebp',
  oss___mainImage___resolutions___base64 = 'oss___mainImage___resolutions___base64',
  oss___mainImage___resolutions___tracedSVG = 'oss___mainImage___resolutions___tracedSVG',
  oss___mainImage___resolutions___aspectRatio = 'oss___mainImage___resolutions___aspectRatio',
  oss___mainImage___resolutions___width = 'oss___mainImage___resolutions___width',
  oss___mainImage___resolutions___height = 'oss___mainImage___resolutions___height',
  oss___mainImage___resolutions___src = 'oss___mainImage___resolutions___src',
  oss___mainImage___resolutions___srcSet = 'oss___mainImage___resolutions___srcSet',
  oss___mainImage___resolutions___srcWebp = 'oss___mainImage___resolutions___srcWebp',
  oss___mainImage___resolutions___srcSetWebp = 'oss___mainImage___resolutions___srcSetWebp',
  oss___mainImage___fluid___base64 = 'oss___mainImage___fluid___base64',
  oss___mainImage___fluid___tracedSVG = 'oss___mainImage___fluid___tracedSVG',
  oss___mainImage___fluid___aspectRatio = 'oss___mainImage___fluid___aspectRatio',
  oss___mainImage___fluid___src = 'oss___mainImage___fluid___src',
  oss___mainImage___fluid___srcSet = 'oss___mainImage___fluid___srcSet',
  oss___mainImage___fluid___srcWebp = 'oss___mainImage___fluid___srcWebp',
  oss___mainImage___fluid___srcSetWebp = 'oss___mainImage___fluid___srcSetWebp',
  oss___mainImage___fluid___sizes = 'oss___mainImage___fluid___sizes',
  oss___mainImage___sizes___base64 = 'oss___mainImage___sizes___base64',
  oss___mainImage___sizes___tracedSVG = 'oss___mainImage___sizes___tracedSVG',
  oss___mainImage___sizes___aspectRatio = 'oss___mainImage___sizes___aspectRatio',
  oss___mainImage___sizes___src = 'oss___mainImage___sizes___src',
  oss___mainImage___sizes___srcSet = 'oss___mainImage___sizes___srcSet',
  oss___mainImage___sizes___srcWebp = 'oss___mainImage___sizes___srcWebp',
  oss___mainImage___sizes___srcSetWebp = 'oss___mainImage___sizes___srcSetWebp',
  oss___mainImage___sizes___sizes = 'oss___mainImage___sizes___sizes',
  oss___mainImage___resize___base64 = 'oss___mainImage___resize___base64',
  oss___mainImage___resize___tracedSVG = 'oss___mainImage___resize___tracedSVG',
  oss___mainImage___resize___src = 'oss___mainImage___resize___src',
  oss___mainImage___resize___width = 'oss___mainImage___resize___width',
  oss___mainImage___resize___height = 'oss___mainImage___resize___height',
  oss___mainImage___resize___aspectRatio = 'oss___mainImage___resize___aspectRatio',
  oss___mainImage___parent___id = 'oss___mainImage___parent___id',
  oss___mainImage___parent___children = 'oss___mainImage___parent___children',
  oss___mainImage___children = 'oss___mainImage___children',
  oss___mainImage___children___id = 'oss___mainImage___children___id',
  oss___mainImage___children___children = 'oss___mainImage___children___children',
  oss___mainImage___internal___content = 'oss___mainImage___internal___content',
  oss___mainImage___internal___contentDigest = 'oss___mainImage___internal___contentDigest',
  oss___mainImage___internal___description = 'oss___mainImage___internal___description',
  oss___mainImage___internal___fieldOwners = 'oss___mainImage___internal___fieldOwners',
  oss___mainImage___internal___ignoreType = 'oss___mainImage___internal___ignoreType',
  oss___mainImage___internal___mediaType = 'oss___mainImage___internal___mediaType',
  oss___mainImage___internal___owner = 'oss___mainImage___internal___owner',
  oss___mainImage___internal___type = 'oss___mainImage___internal___type',
  oss___roles = 'oss___roles',
  oss___roles___contentful_id = 'oss___roles___contentful_id',
  oss___roles___id = 'oss___roles___id',
  oss___roles___node_locale = 'oss___roles___node_locale',
  oss___roles___name = 'oss___roles___name',
  oss___roles___project = 'oss___roles___project',
  oss___roles___project___contentful_id = 'oss___roles___project___contentful_id',
  oss___roles___project___id = 'oss___roles___project___id',
  oss___roles___project___node_locale = 'oss___roles___project___node_locale',
  oss___roles___project___name = 'oss___roles___project___name',
  oss___roles___project___startDate = 'oss___roles___project___startDate',
  oss___roles___project___during = 'oss___roles___project___during',
  oss___roles___project___comment = 'oss___roles___project___comment',
  oss___roles___project___roles = 'oss___roles___project___roles',
  oss___roles___project___assigns = 'oss___roles___project___assigns',
  oss___roles___project___systems = 'oss___roles___project___systems',
  oss___roles___project___languages = 'oss___roles___project___languages',
  oss___roles___project___tools = 'oss___roles___project___tools',
  oss___roles___project___spaceId = 'oss___roles___project___spaceId',
  oss___roles___project___createdAt = 'oss___roles___project___createdAt',
  oss___roles___project___updatedAt = 'oss___roles___project___updatedAt',
  oss___roles___project___children = 'oss___roles___project___children',
  oss___roles___oss = 'oss___roles___oss',
  oss___roles___oss___contentful_id = 'oss___roles___oss___contentful_id',
  oss___roles___oss___id = 'oss___roles___oss___id',
  oss___roles___oss___node_locale = 'oss___roles___oss___node_locale',
  oss___roles___oss___name = 'oss___roles___oss___name',
  oss___roles___oss___slug = 'oss___roles___oss___slug',
  oss___roles___oss___startDate = 'oss___roles___oss___startDate',
  oss___roles___oss___during = 'oss___roles___oss___during',
  oss___roles___oss___comment = 'oss___roles___oss___comment',
  oss___roles___oss___siteUrl = 'oss___roles___oss___siteUrl',
  oss___roles___oss___sourceUrl = 'oss___roles___oss___sourceUrl',
  oss___roles___oss___roles = 'oss___roles___oss___roles',
  oss___roles___oss___assigns = 'oss___roles___oss___assigns',
  oss___roles___oss___systems = 'oss___roles___oss___systems',
  oss___roles___oss___languages = 'oss___roles___oss___languages',
  oss___roles___oss___tools = 'oss___roles___oss___tools',
  oss___roles___oss___spaceId = 'oss___roles___oss___spaceId',
  oss___roles___oss___createdAt = 'oss___roles___oss___createdAt',
  oss___roles___oss___updatedAt = 'oss___roles___oss___updatedAt',
  oss___roles___oss___children = 'oss___roles___oss___children',
  oss___roles___spaceId = 'oss___roles___spaceId',
  oss___roles___createdAt = 'oss___roles___createdAt',
  oss___roles___updatedAt = 'oss___roles___updatedAt',
  oss___roles___sys___type = 'oss___roles___sys___type',
  oss___roles___sys___revision = 'oss___roles___sys___revision',
  oss___roles___parent___id = 'oss___roles___parent___id',
  oss___roles___parent___children = 'oss___roles___parent___children',
  oss___roles___children = 'oss___roles___children',
  oss___roles___children___id = 'oss___roles___children___id',
  oss___roles___children___children = 'oss___roles___children___children',
  oss___roles___internal___content = 'oss___roles___internal___content',
  oss___roles___internal___contentDigest = 'oss___roles___internal___contentDigest',
  oss___roles___internal___description = 'oss___roles___internal___description',
  oss___roles___internal___fieldOwners = 'oss___roles___internal___fieldOwners',
  oss___roles___internal___ignoreType = 'oss___roles___internal___ignoreType',
  oss___roles___internal___mediaType = 'oss___roles___internal___mediaType',
  oss___roles___internal___owner = 'oss___roles___internal___owner',
  oss___roles___internal___type = 'oss___roles___internal___type',
  oss___assigns = 'oss___assigns',
  oss___assigns___contentful_id = 'oss___assigns___contentful_id',
  oss___assigns___id = 'oss___assigns___id',
  oss___assigns___node_locale = 'oss___assigns___node_locale',
  oss___assigns___name = 'oss___assigns___name',
  oss___assigns___oss = 'oss___assigns___oss',
  oss___assigns___oss___contentful_id = 'oss___assigns___oss___contentful_id',
  oss___assigns___oss___id = 'oss___assigns___oss___id',
  oss___assigns___oss___node_locale = 'oss___assigns___oss___node_locale',
  oss___assigns___oss___name = 'oss___assigns___oss___name',
  oss___assigns___oss___slug = 'oss___assigns___oss___slug',
  oss___assigns___oss___startDate = 'oss___assigns___oss___startDate',
  oss___assigns___oss___during = 'oss___assigns___oss___during',
  oss___assigns___oss___comment = 'oss___assigns___oss___comment',
  oss___assigns___oss___siteUrl = 'oss___assigns___oss___siteUrl',
  oss___assigns___oss___sourceUrl = 'oss___assigns___oss___sourceUrl',
  oss___assigns___oss___roles = 'oss___assigns___oss___roles',
  oss___assigns___oss___assigns = 'oss___assigns___oss___assigns',
  oss___assigns___oss___systems = 'oss___assigns___oss___systems',
  oss___assigns___oss___languages = 'oss___assigns___oss___languages',
  oss___assigns___oss___tools = 'oss___assigns___oss___tools',
  oss___assigns___oss___spaceId = 'oss___assigns___oss___spaceId',
  oss___assigns___oss___createdAt = 'oss___assigns___oss___createdAt',
  oss___assigns___oss___updatedAt = 'oss___assigns___oss___updatedAt',
  oss___assigns___oss___children = 'oss___assigns___oss___children',
  oss___assigns___spaceId = 'oss___assigns___spaceId',
  oss___assigns___createdAt = 'oss___assigns___createdAt',
  oss___assigns___updatedAt = 'oss___assigns___updatedAt',
  oss___assigns___sys___type = 'oss___assigns___sys___type',
  oss___assigns___sys___revision = 'oss___assigns___sys___revision',
  oss___assigns___project = 'oss___assigns___project',
  oss___assigns___project___contentful_id = 'oss___assigns___project___contentful_id',
  oss___assigns___project___id = 'oss___assigns___project___id',
  oss___assigns___project___node_locale = 'oss___assigns___project___node_locale',
  oss___assigns___project___name = 'oss___assigns___project___name',
  oss___assigns___project___startDate = 'oss___assigns___project___startDate',
  oss___assigns___project___during = 'oss___assigns___project___during',
  oss___assigns___project___comment = 'oss___assigns___project___comment',
  oss___assigns___project___roles = 'oss___assigns___project___roles',
  oss___assigns___project___assigns = 'oss___assigns___project___assigns',
  oss___assigns___project___systems = 'oss___assigns___project___systems',
  oss___assigns___project___languages = 'oss___assigns___project___languages',
  oss___assigns___project___tools = 'oss___assigns___project___tools',
  oss___assigns___project___spaceId = 'oss___assigns___project___spaceId',
  oss___assigns___project___createdAt = 'oss___assigns___project___createdAt',
  oss___assigns___project___updatedAt = 'oss___assigns___project___updatedAt',
  oss___assigns___project___children = 'oss___assigns___project___children',
  oss___assigns___parent___id = 'oss___assigns___parent___id',
  oss___assigns___parent___children = 'oss___assigns___parent___children',
  oss___assigns___children = 'oss___assigns___children',
  oss___assigns___children___id = 'oss___assigns___children___id',
  oss___assigns___children___children = 'oss___assigns___children___children',
  oss___assigns___internal___content = 'oss___assigns___internal___content',
  oss___assigns___internal___contentDigest = 'oss___assigns___internal___contentDigest',
  oss___assigns___internal___description = 'oss___assigns___internal___description',
  oss___assigns___internal___fieldOwners = 'oss___assigns___internal___fieldOwners',
  oss___assigns___internal___ignoreType = 'oss___assigns___internal___ignoreType',
  oss___assigns___internal___mediaType = 'oss___assigns___internal___mediaType',
  oss___assigns___internal___owner = 'oss___assigns___internal___owner',
  oss___assigns___internal___type = 'oss___assigns___internal___type',
  oss___systems = 'oss___systems',
  oss___systems___contentful_id = 'oss___systems___contentful_id',
  oss___systems___id = 'oss___systems___id',
  oss___systems___node_locale = 'oss___systems___node_locale',
  oss___systems___name = 'oss___systems___name',
  oss___systems___level = 'oss___systems___level',
  oss___systems___project = 'oss___systems___project',
  oss___systems___project___contentful_id = 'oss___systems___project___contentful_id',
  oss___systems___project___id = 'oss___systems___project___id',
  oss___systems___project___node_locale = 'oss___systems___project___node_locale',
  oss___systems___project___name = 'oss___systems___project___name',
  oss___systems___project___startDate = 'oss___systems___project___startDate',
  oss___systems___project___during = 'oss___systems___project___during',
  oss___systems___project___comment = 'oss___systems___project___comment',
  oss___systems___project___roles = 'oss___systems___project___roles',
  oss___systems___project___assigns = 'oss___systems___project___assigns',
  oss___systems___project___systems = 'oss___systems___project___systems',
  oss___systems___project___languages = 'oss___systems___project___languages',
  oss___systems___project___tools = 'oss___systems___project___tools',
  oss___systems___project___spaceId = 'oss___systems___project___spaceId',
  oss___systems___project___createdAt = 'oss___systems___project___createdAt',
  oss___systems___project___updatedAt = 'oss___systems___project___updatedAt',
  oss___systems___project___children = 'oss___systems___project___children',
  oss___systems___spaceId = 'oss___systems___spaceId',
  oss___systems___createdAt = 'oss___systems___createdAt',
  oss___systems___updatedAt = 'oss___systems___updatedAt',
  oss___systems___sys___type = 'oss___systems___sys___type',
  oss___systems___sys___revision = 'oss___systems___sys___revision',
  oss___systems___oss = 'oss___systems___oss',
  oss___systems___oss___contentful_id = 'oss___systems___oss___contentful_id',
  oss___systems___oss___id = 'oss___systems___oss___id',
  oss___systems___oss___node_locale = 'oss___systems___oss___node_locale',
  oss___systems___oss___name = 'oss___systems___oss___name',
  oss___systems___oss___slug = 'oss___systems___oss___slug',
  oss___systems___oss___startDate = 'oss___systems___oss___startDate',
  oss___systems___oss___during = 'oss___systems___oss___during',
  oss___systems___oss___comment = 'oss___systems___oss___comment',
  oss___systems___oss___siteUrl = 'oss___systems___oss___siteUrl',
  oss___systems___oss___sourceUrl = 'oss___systems___oss___sourceUrl',
  oss___systems___oss___roles = 'oss___systems___oss___roles',
  oss___systems___oss___assigns = 'oss___systems___oss___assigns',
  oss___systems___oss___systems = 'oss___systems___oss___systems',
  oss___systems___oss___languages = 'oss___systems___oss___languages',
  oss___systems___oss___tools = 'oss___systems___oss___tools',
  oss___systems___oss___spaceId = 'oss___systems___oss___spaceId',
  oss___systems___oss___createdAt = 'oss___systems___oss___createdAt',
  oss___systems___oss___updatedAt = 'oss___systems___oss___updatedAt',
  oss___systems___oss___children = 'oss___systems___oss___children',
  oss___systems___skill_map = 'oss___systems___skill_map',
  oss___systems___skill_map___contentful_id = 'oss___systems___skill_map___contentful_id',
  oss___systems___skill_map___id = 'oss___systems___skill_map___id',
  oss___systems___skill_map___node_locale = 'oss___systems___skill_map___node_locale',
  oss___systems___skill_map___sort = 'oss___systems___skill_map___sort',
  oss___systems___skill_map___name = 'oss___systems___skill_map___name',
  oss___systems___skill_map___expanded = 'oss___systems___skill_map___expanded',
  oss___systems___skill_map___skills = 'oss___systems___skill_map___skills',
  oss___systems___skill_map___spaceId = 'oss___systems___skill_map___spaceId',
  oss___systems___skill_map___createdAt = 'oss___systems___skill_map___createdAt',
  oss___systems___skill_map___updatedAt = 'oss___systems___skill_map___updatedAt',
  oss___systems___skill_map___children = 'oss___systems___skill_map___children',
  oss___systems___parent___id = 'oss___systems___parent___id',
  oss___systems___parent___children = 'oss___systems___parent___children',
  oss___systems___children = 'oss___systems___children',
  oss___systems___children___id = 'oss___systems___children___id',
  oss___systems___children___children = 'oss___systems___children___children',
  oss___systems___internal___content = 'oss___systems___internal___content',
  oss___systems___internal___contentDigest = 'oss___systems___internal___contentDigest',
  oss___systems___internal___description = 'oss___systems___internal___description',
  oss___systems___internal___fieldOwners = 'oss___systems___internal___fieldOwners',
  oss___systems___internal___ignoreType = 'oss___systems___internal___ignoreType',
  oss___systems___internal___mediaType = 'oss___systems___internal___mediaType',
  oss___systems___internal___owner = 'oss___systems___internal___owner',
  oss___systems___internal___type = 'oss___systems___internal___type',
  oss___languages = 'oss___languages',
  oss___languages___contentful_id = 'oss___languages___contentful_id',
  oss___languages___id = 'oss___languages___id',
  oss___languages___node_locale = 'oss___languages___node_locale',
  oss___languages___name = 'oss___languages___name',
  oss___languages___level = 'oss___languages___level',
  oss___languages___project = 'oss___languages___project',
  oss___languages___project___contentful_id = 'oss___languages___project___contentful_id',
  oss___languages___project___id = 'oss___languages___project___id',
  oss___languages___project___node_locale = 'oss___languages___project___node_locale',
  oss___languages___project___name = 'oss___languages___project___name',
  oss___languages___project___startDate = 'oss___languages___project___startDate',
  oss___languages___project___during = 'oss___languages___project___during',
  oss___languages___project___comment = 'oss___languages___project___comment',
  oss___languages___project___roles = 'oss___languages___project___roles',
  oss___languages___project___assigns = 'oss___languages___project___assigns',
  oss___languages___project___systems = 'oss___languages___project___systems',
  oss___languages___project___languages = 'oss___languages___project___languages',
  oss___languages___project___tools = 'oss___languages___project___tools',
  oss___languages___project___spaceId = 'oss___languages___project___spaceId',
  oss___languages___project___createdAt = 'oss___languages___project___createdAt',
  oss___languages___project___updatedAt = 'oss___languages___project___updatedAt',
  oss___languages___project___children = 'oss___languages___project___children',
  oss___languages___spaceId = 'oss___languages___spaceId',
  oss___languages___createdAt = 'oss___languages___createdAt',
  oss___languages___updatedAt = 'oss___languages___updatedAt',
  oss___languages___sys___type = 'oss___languages___sys___type',
  oss___languages___sys___revision = 'oss___languages___sys___revision',
  oss___languages___oss = 'oss___languages___oss',
  oss___languages___oss___contentful_id = 'oss___languages___oss___contentful_id',
  oss___languages___oss___id = 'oss___languages___oss___id',
  oss___languages___oss___node_locale = 'oss___languages___oss___node_locale',
  oss___languages___oss___name = 'oss___languages___oss___name',
  oss___languages___oss___slug = 'oss___languages___oss___slug',
  oss___languages___oss___startDate = 'oss___languages___oss___startDate',
  oss___languages___oss___during = 'oss___languages___oss___during',
  oss___languages___oss___comment = 'oss___languages___oss___comment',
  oss___languages___oss___siteUrl = 'oss___languages___oss___siteUrl',
  oss___languages___oss___sourceUrl = 'oss___languages___oss___sourceUrl',
  oss___languages___oss___roles = 'oss___languages___oss___roles',
  oss___languages___oss___assigns = 'oss___languages___oss___assigns',
  oss___languages___oss___systems = 'oss___languages___oss___systems',
  oss___languages___oss___languages = 'oss___languages___oss___languages',
  oss___languages___oss___tools = 'oss___languages___oss___tools',
  oss___languages___oss___spaceId = 'oss___languages___oss___spaceId',
  oss___languages___oss___createdAt = 'oss___languages___oss___createdAt',
  oss___languages___oss___updatedAt = 'oss___languages___oss___updatedAt',
  oss___languages___oss___children = 'oss___languages___oss___children',
  oss___languages___skill_map = 'oss___languages___skill_map',
  oss___languages___skill_map___contentful_id = 'oss___languages___skill_map___contentful_id',
  oss___languages___skill_map___id = 'oss___languages___skill_map___id',
  oss___languages___skill_map___node_locale = 'oss___languages___skill_map___node_locale',
  oss___languages___skill_map___sort = 'oss___languages___skill_map___sort',
  oss___languages___skill_map___name = 'oss___languages___skill_map___name',
  oss___languages___skill_map___expanded = 'oss___languages___skill_map___expanded',
  oss___languages___skill_map___skills = 'oss___languages___skill_map___skills',
  oss___languages___skill_map___spaceId = 'oss___languages___skill_map___spaceId',
  oss___languages___skill_map___createdAt = 'oss___languages___skill_map___createdAt',
  oss___languages___skill_map___updatedAt = 'oss___languages___skill_map___updatedAt',
  oss___languages___skill_map___children = 'oss___languages___skill_map___children',
  oss___languages___parent___id = 'oss___languages___parent___id',
  oss___languages___parent___children = 'oss___languages___parent___children',
  oss___languages___children = 'oss___languages___children',
  oss___languages___children___id = 'oss___languages___children___id',
  oss___languages___children___children = 'oss___languages___children___children',
  oss___languages___internal___content = 'oss___languages___internal___content',
  oss___languages___internal___contentDigest = 'oss___languages___internal___contentDigest',
  oss___languages___internal___description = 'oss___languages___internal___description',
  oss___languages___internal___fieldOwners = 'oss___languages___internal___fieldOwners',
  oss___languages___internal___ignoreType = 'oss___languages___internal___ignoreType',
  oss___languages___internal___mediaType = 'oss___languages___internal___mediaType',
  oss___languages___internal___owner = 'oss___languages___internal___owner',
  oss___languages___internal___type = 'oss___languages___internal___type',
  oss___tools = 'oss___tools',
  oss___tools___contentful_id = 'oss___tools___contentful_id',
  oss___tools___id = 'oss___tools___id',
  oss___tools___node_locale = 'oss___tools___node_locale',
  oss___tools___name = 'oss___tools___name',
  oss___tools___level = 'oss___tools___level',
  oss___tools___project = 'oss___tools___project',
  oss___tools___project___contentful_id = 'oss___tools___project___contentful_id',
  oss___tools___project___id = 'oss___tools___project___id',
  oss___tools___project___node_locale = 'oss___tools___project___node_locale',
  oss___tools___project___name = 'oss___tools___project___name',
  oss___tools___project___startDate = 'oss___tools___project___startDate',
  oss___tools___project___during = 'oss___tools___project___during',
  oss___tools___project___comment = 'oss___tools___project___comment',
  oss___tools___project___roles = 'oss___tools___project___roles',
  oss___tools___project___assigns = 'oss___tools___project___assigns',
  oss___tools___project___systems = 'oss___tools___project___systems',
  oss___tools___project___languages = 'oss___tools___project___languages',
  oss___tools___project___tools = 'oss___tools___project___tools',
  oss___tools___project___spaceId = 'oss___tools___project___spaceId',
  oss___tools___project___createdAt = 'oss___tools___project___createdAt',
  oss___tools___project___updatedAt = 'oss___tools___project___updatedAt',
  oss___tools___project___children = 'oss___tools___project___children',
  oss___tools___spaceId = 'oss___tools___spaceId',
  oss___tools___createdAt = 'oss___tools___createdAt',
  oss___tools___updatedAt = 'oss___tools___updatedAt',
  oss___tools___sys___type = 'oss___tools___sys___type',
  oss___tools___sys___revision = 'oss___tools___sys___revision',
  oss___tools___oss = 'oss___tools___oss',
  oss___tools___oss___contentful_id = 'oss___tools___oss___contentful_id',
  oss___tools___oss___id = 'oss___tools___oss___id',
  oss___tools___oss___node_locale = 'oss___tools___oss___node_locale',
  oss___tools___oss___name = 'oss___tools___oss___name',
  oss___tools___oss___slug = 'oss___tools___oss___slug',
  oss___tools___oss___startDate = 'oss___tools___oss___startDate',
  oss___tools___oss___during = 'oss___tools___oss___during',
  oss___tools___oss___comment = 'oss___tools___oss___comment',
  oss___tools___oss___siteUrl = 'oss___tools___oss___siteUrl',
  oss___tools___oss___sourceUrl = 'oss___tools___oss___sourceUrl',
  oss___tools___oss___roles = 'oss___tools___oss___roles',
  oss___tools___oss___assigns = 'oss___tools___oss___assigns',
  oss___tools___oss___systems = 'oss___tools___oss___systems',
  oss___tools___oss___languages = 'oss___tools___oss___languages',
  oss___tools___oss___tools = 'oss___tools___oss___tools',
  oss___tools___oss___spaceId = 'oss___tools___oss___spaceId',
  oss___tools___oss___createdAt = 'oss___tools___oss___createdAt',
  oss___tools___oss___updatedAt = 'oss___tools___oss___updatedAt',
  oss___tools___oss___children = 'oss___tools___oss___children',
  oss___tools___skill_map = 'oss___tools___skill_map',
  oss___tools___skill_map___contentful_id = 'oss___tools___skill_map___contentful_id',
  oss___tools___skill_map___id = 'oss___tools___skill_map___id',
  oss___tools___skill_map___node_locale = 'oss___tools___skill_map___node_locale',
  oss___tools___skill_map___sort = 'oss___tools___skill_map___sort',
  oss___tools___skill_map___name = 'oss___tools___skill_map___name',
  oss___tools___skill_map___expanded = 'oss___tools___skill_map___expanded',
  oss___tools___skill_map___skills = 'oss___tools___skill_map___skills',
  oss___tools___skill_map___spaceId = 'oss___tools___skill_map___spaceId',
  oss___tools___skill_map___createdAt = 'oss___tools___skill_map___createdAt',
  oss___tools___skill_map___updatedAt = 'oss___tools___skill_map___updatedAt',
  oss___tools___skill_map___children = 'oss___tools___skill_map___children',
  oss___tools___parent___id = 'oss___tools___parent___id',
  oss___tools___parent___children = 'oss___tools___parent___children',
  oss___tools___children = 'oss___tools___children',
  oss___tools___children___id = 'oss___tools___children___id',
  oss___tools___children___children = 'oss___tools___children___children',
  oss___tools___internal___content = 'oss___tools___internal___content',
  oss___tools___internal___contentDigest = 'oss___tools___internal___contentDigest',
  oss___tools___internal___description = 'oss___tools___internal___description',
  oss___tools___internal___fieldOwners = 'oss___tools___internal___fieldOwners',
  oss___tools___internal___ignoreType = 'oss___tools___internal___ignoreType',
  oss___tools___internal___mediaType = 'oss___tools___internal___mediaType',
  oss___tools___internal___owner = 'oss___tools___internal___owner',
  oss___tools___internal___type = 'oss___tools___internal___type',
  oss___spaceId = 'oss___spaceId',
  oss___createdAt = 'oss___createdAt',
  oss___updatedAt = 'oss___updatedAt',
  oss___sys___type = 'oss___sys___type',
  oss___sys___revision = 'oss___sys___revision',
  oss___parent___id = 'oss___parent___id',
  oss___parent___parent___id = 'oss___parent___parent___id',
  oss___parent___parent___children = 'oss___parent___parent___children',
  oss___parent___children = 'oss___parent___children',
  oss___parent___children___id = 'oss___parent___children___id',
  oss___parent___children___children = 'oss___parent___children___children',
  oss___parent___internal___content = 'oss___parent___internal___content',
  oss___parent___internal___contentDigest = 'oss___parent___internal___contentDigest',
  oss___parent___internal___description = 'oss___parent___internal___description',
  oss___parent___internal___fieldOwners = 'oss___parent___internal___fieldOwners',
  oss___parent___internal___ignoreType = 'oss___parent___internal___ignoreType',
  oss___parent___internal___mediaType = 'oss___parent___internal___mediaType',
  oss___parent___internal___owner = 'oss___parent___internal___owner',
  oss___parent___internal___type = 'oss___parent___internal___type',
  oss___children = 'oss___children',
  oss___children___id = 'oss___children___id',
  oss___children___parent___id = 'oss___children___parent___id',
  oss___children___parent___children = 'oss___children___parent___children',
  oss___children___children = 'oss___children___children',
  oss___children___children___id = 'oss___children___children___id',
  oss___children___children___children = 'oss___children___children___children',
  oss___children___internal___content = 'oss___children___internal___content',
  oss___children___internal___contentDigest = 'oss___children___internal___contentDigest',
  oss___children___internal___description = 'oss___children___internal___description',
  oss___children___internal___fieldOwners = 'oss___children___internal___fieldOwners',
  oss___children___internal___ignoreType = 'oss___children___internal___ignoreType',
  oss___children___internal___mediaType = 'oss___children___internal___mediaType',
  oss___children___internal___owner = 'oss___children___internal___owner',
  oss___children___internal___type = 'oss___children___internal___type',
  oss___internal___content = 'oss___internal___content',
  oss___internal___contentDigest = 'oss___internal___contentDigest',
  oss___internal___description = 'oss___internal___description',
  oss___internal___fieldOwners = 'oss___internal___fieldOwners',
  oss___internal___ignoreType = 'oss___internal___ignoreType',
  oss___internal___mediaType = 'oss___internal___mediaType',
  oss___internal___owner = 'oss___internal___owner',
  oss___internal___type = 'oss___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulRoleFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  oss?: Maybe<ContentfulOssFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulRoleSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulRoleFilterListInput = {
  elemMatch?: Maybe<ContentfulRoleFilterInput>;
};

export type ContentfulRoleGroupConnection = {
  __typename?: 'ContentfulRoleGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulRoleEdge>;
  nodes: Array<ContentfulRole>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulRoleSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulRoleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulRoleSys = {
  __typename?: 'ContentfulRoleSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulRoleSysContentType>;
};

export type ContentfulRoleSysContentType = {
  __typename?: 'ContentfulRoleSysContentType';
  sys?: Maybe<ContentfulRoleSysContentTypeSys>;
};

export type ContentfulRoleSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulRoleSysContentTypeSysFilterInput>;
};

export type ContentfulRoleSysContentTypeSys = {
  __typename?: 'ContentfulRoleSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulRoleSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulRoleSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulRoleSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  __typename?: 'ContentfulSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSkill = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulSkill';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  project?: Maybe<Array<Maybe<ContentfulProject>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSkillSys>;
  oss?: Maybe<Array<Maybe<ContentfulOss>>>;
  skill_map?: Maybe<Array<Maybe<ContentfulSkillMap>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSkillCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSkillUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSkillConnection = {
  __typename?: 'ContentfulSkillConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillEdge>;
  nodes: Array<ContentfulSkill>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSkillGroupConnection>;
};


export type ContentfulSkillConnectionDistinctArgs = {
  field: ContentfulSkillFieldsEnum;
};


export type ContentfulSkillConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSkillFieldsEnum;
};

export type ContentfulSkillEdge = {
  __typename?: 'ContentfulSkillEdge';
  next?: Maybe<ContentfulSkill>;
  node: ContentfulSkill;
  previous?: Maybe<ContentfulSkill>;
};

export enum ContentfulSkillFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  level = 'level',
  project = 'project',
  project___contentful_id = 'project___contentful_id',
  project___id = 'project___id',
  project___node_locale = 'project___node_locale',
  project___name = 'project___name',
  project___startDate = 'project___startDate',
  project___during = 'project___during',
  project___comment = 'project___comment',
  project___roles = 'project___roles',
  project___roles___contentful_id = 'project___roles___contentful_id',
  project___roles___id = 'project___roles___id',
  project___roles___node_locale = 'project___roles___node_locale',
  project___roles___name = 'project___roles___name',
  project___roles___project = 'project___roles___project',
  project___roles___project___contentful_id = 'project___roles___project___contentful_id',
  project___roles___project___id = 'project___roles___project___id',
  project___roles___project___node_locale = 'project___roles___project___node_locale',
  project___roles___project___name = 'project___roles___project___name',
  project___roles___project___startDate = 'project___roles___project___startDate',
  project___roles___project___during = 'project___roles___project___during',
  project___roles___project___comment = 'project___roles___project___comment',
  project___roles___project___roles = 'project___roles___project___roles',
  project___roles___project___assigns = 'project___roles___project___assigns',
  project___roles___project___systems = 'project___roles___project___systems',
  project___roles___project___languages = 'project___roles___project___languages',
  project___roles___project___tools = 'project___roles___project___tools',
  project___roles___project___spaceId = 'project___roles___project___spaceId',
  project___roles___project___createdAt = 'project___roles___project___createdAt',
  project___roles___project___updatedAt = 'project___roles___project___updatedAt',
  project___roles___project___children = 'project___roles___project___children',
  project___roles___oss = 'project___roles___oss',
  project___roles___oss___contentful_id = 'project___roles___oss___contentful_id',
  project___roles___oss___id = 'project___roles___oss___id',
  project___roles___oss___node_locale = 'project___roles___oss___node_locale',
  project___roles___oss___name = 'project___roles___oss___name',
  project___roles___oss___slug = 'project___roles___oss___slug',
  project___roles___oss___startDate = 'project___roles___oss___startDate',
  project___roles___oss___during = 'project___roles___oss___during',
  project___roles___oss___comment = 'project___roles___oss___comment',
  project___roles___oss___siteUrl = 'project___roles___oss___siteUrl',
  project___roles___oss___sourceUrl = 'project___roles___oss___sourceUrl',
  project___roles___oss___roles = 'project___roles___oss___roles',
  project___roles___oss___assigns = 'project___roles___oss___assigns',
  project___roles___oss___systems = 'project___roles___oss___systems',
  project___roles___oss___languages = 'project___roles___oss___languages',
  project___roles___oss___tools = 'project___roles___oss___tools',
  project___roles___oss___spaceId = 'project___roles___oss___spaceId',
  project___roles___oss___createdAt = 'project___roles___oss___createdAt',
  project___roles___oss___updatedAt = 'project___roles___oss___updatedAt',
  project___roles___oss___children = 'project___roles___oss___children',
  project___roles___spaceId = 'project___roles___spaceId',
  project___roles___createdAt = 'project___roles___createdAt',
  project___roles___updatedAt = 'project___roles___updatedAt',
  project___roles___sys___type = 'project___roles___sys___type',
  project___roles___sys___revision = 'project___roles___sys___revision',
  project___roles___parent___id = 'project___roles___parent___id',
  project___roles___parent___children = 'project___roles___parent___children',
  project___roles___children = 'project___roles___children',
  project___roles___children___id = 'project___roles___children___id',
  project___roles___children___children = 'project___roles___children___children',
  project___roles___internal___content = 'project___roles___internal___content',
  project___roles___internal___contentDigest = 'project___roles___internal___contentDigest',
  project___roles___internal___description = 'project___roles___internal___description',
  project___roles___internal___fieldOwners = 'project___roles___internal___fieldOwners',
  project___roles___internal___ignoreType = 'project___roles___internal___ignoreType',
  project___roles___internal___mediaType = 'project___roles___internal___mediaType',
  project___roles___internal___owner = 'project___roles___internal___owner',
  project___roles___internal___type = 'project___roles___internal___type',
  project___assigns = 'project___assigns',
  project___assigns___contentful_id = 'project___assigns___contentful_id',
  project___assigns___id = 'project___assigns___id',
  project___assigns___node_locale = 'project___assigns___node_locale',
  project___assigns___name = 'project___assigns___name',
  project___assigns___oss = 'project___assigns___oss',
  project___assigns___oss___contentful_id = 'project___assigns___oss___contentful_id',
  project___assigns___oss___id = 'project___assigns___oss___id',
  project___assigns___oss___node_locale = 'project___assigns___oss___node_locale',
  project___assigns___oss___name = 'project___assigns___oss___name',
  project___assigns___oss___slug = 'project___assigns___oss___slug',
  project___assigns___oss___startDate = 'project___assigns___oss___startDate',
  project___assigns___oss___during = 'project___assigns___oss___during',
  project___assigns___oss___comment = 'project___assigns___oss___comment',
  project___assigns___oss___siteUrl = 'project___assigns___oss___siteUrl',
  project___assigns___oss___sourceUrl = 'project___assigns___oss___sourceUrl',
  project___assigns___oss___roles = 'project___assigns___oss___roles',
  project___assigns___oss___assigns = 'project___assigns___oss___assigns',
  project___assigns___oss___systems = 'project___assigns___oss___systems',
  project___assigns___oss___languages = 'project___assigns___oss___languages',
  project___assigns___oss___tools = 'project___assigns___oss___tools',
  project___assigns___oss___spaceId = 'project___assigns___oss___spaceId',
  project___assigns___oss___createdAt = 'project___assigns___oss___createdAt',
  project___assigns___oss___updatedAt = 'project___assigns___oss___updatedAt',
  project___assigns___oss___children = 'project___assigns___oss___children',
  project___assigns___spaceId = 'project___assigns___spaceId',
  project___assigns___createdAt = 'project___assigns___createdAt',
  project___assigns___updatedAt = 'project___assigns___updatedAt',
  project___assigns___sys___type = 'project___assigns___sys___type',
  project___assigns___sys___revision = 'project___assigns___sys___revision',
  project___assigns___project = 'project___assigns___project',
  project___assigns___project___contentful_id = 'project___assigns___project___contentful_id',
  project___assigns___project___id = 'project___assigns___project___id',
  project___assigns___project___node_locale = 'project___assigns___project___node_locale',
  project___assigns___project___name = 'project___assigns___project___name',
  project___assigns___project___startDate = 'project___assigns___project___startDate',
  project___assigns___project___during = 'project___assigns___project___during',
  project___assigns___project___comment = 'project___assigns___project___comment',
  project___assigns___project___roles = 'project___assigns___project___roles',
  project___assigns___project___assigns = 'project___assigns___project___assigns',
  project___assigns___project___systems = 'project___assigns___project___systems',
  project___assigns___project___languages = 'project___assigns___project___languages',
  project___assigns___project___tools = 'project___assigns___project___tools',
  project___assigns___project___spaceId = 'project___assigns___project___spaceId',
  project___assigns___project___createdAt = 'project___assigns___project___createdAt',
  project___assigns___project___updatedAt = 'project___assigns___project___updatedAt',
  project___assigns___project___children = 'project___assigns___project___children',
  project___assigns___parent___id = 'project___assigns___parent___id',
  project___assigns___parent___children = 'project___assigns___parent___children',
  project___assigns___children = 'project___assigns___children',
  project___assigns___children___id = 'project___assigns___children___id',
  project___assigns___children___children = 'project___assigns___children___children',
  project___assigns___internal___content = 'project___assigns___internal___content',
  project___assigns___internal___contentDigest = 'project___assigns___internal___contentDigest',
  project___assigns___internal___description = 'project___assigns___internal___description',
  project___assigns___internal___fieldOwners = 'project___assigns___internal___fieldOwners',
  project___assigns___internal___ignoreType = 'project___assigns___internal___ignoreType',
  project___assigns___internal___mediaType = 'project___assigns___internal___mediaType',
  project___assigns___internal___owner = 'project___assigns___internal___owner',
  project___assigns___internal___type = 'project___assigns___internal___type',
  project___systems = 'project___systems',
  project___systems___contentful_id = 'project___systems___contentful_id',
  project___systems___id = 'project___systems___id',
  project___systems___node_locale = 'project___systems___node_locale',
  project___systems___name = 'project___systems___name',
  project___systems___level = 'project___systems___level',
  project___systems___project = 'project___systems___project',
  project___systems___project___contentful_id = 'project___systems___project___contentful_id',
  project___systems___project___id = 'project___systems___project___id',
  project___systems___project___node_locale = 'project___systems___project___node_locale',
  project___systems___project___name = 'project___systems___project___name',
  project___systems___project___startDate = 'project___systems___project___startDate',
  project___systems___project___during = 'project___systems___project___during',
  project___systems___project___comment = 'project___systems___project___comment',
  project___systems___project___roles = 'project___systems___project___roles',
  project___systems___project___assigns = 'project___systems___project___assigns',
  project___systems___project___systems = 'project___systems___project___systems',
  project___systems___project___languages = 'project___systems___project___languages',
  project___systems___project___tools = 'project___systems___project___tools',
  project___systems___project___spaceId = 'project___systems___project___spaceId',
  project___systems___project___createdAt = 'project___systems___project___createdAt',
  project___systems___project___updatedAt = 'project___systems___project___updatedAt',
  project___systems___project___children = 'project___systems___project___children',
  project___systems___spaceId = 'project___systems___spaceId',
  project___systems___createdAt = 'project___systems___createdAt',
  project___systems___updatedAt = 'project___systems___updatedAt',
  project___systems___sys___type = 'project___systems___sys___type',
  project___systems___sys___revision = 'project___systems___sys___revision',
  project___systems___oss = 'project___systems___oss',
  project___systems___oss___contentful_id = 'project___systems___oss___contentful_id',
  project___systems___oss___id = 'project___systems___oss___id',
  project___systems___oss___node_locale = 'project___systems___oss___node_locale',
  project___systems___oss___name = 'project___systems___oss___name',
  project___systems___oss___slug = 'project___systems___oss___slug',
  project___systems___oss___startDate = 'project___systems___oss___startDate',
  project___systems___oss___during = 'project___systems___oss___during',
  project___systems___oss___comment = 'project___systems___oss___comment',
  project___systems___oss___siteUrl = 'project___systems___oss___siteUrl',
  project___systems___oss___sourceUrl = 'project___systems___oss___sourceUrl',
  project___systems___oss___roles = 'project___systems___oss___roles',
  project___systems___oss___assigns = 'project___systems___oss___assigns',
  project___systems___oss___systems = 'project___systems___oss___systems',
  project___systems___oss___languages = 'project___systems___oss___languages',
  project___systems___oss___tools = 'project___systems___oss___tools',
  project___systems___oss___spaceId = 'project___systems___oss___spaceId',
  project___systems___oss___createdAt = 'project___systems___oss___createdAt',
  project___systems___oss___updatedAt = 'project___systems___oss___updatedAt',
  project___systems___oss___children = 'project___systems___oss___children',
  project___systems___skill_map = 'project___systems___skill_map',
  project___systems___skill_map___contentful_id = 'project___systems___skill_map___contentful_id',
  project___systems___skill_map___id = 'project___systems___skill_map___id',
  project___systems___skill_map___node_locale = 'project___systems___skill_map___node_locale',
  project___systems___skill_map___sort = 'project___systems___skill_map___sort',
  project___systems___skill_map___name = 'project___systems___skill_map___name',
  project___systems___skill_map___expanded = 'project___systems___skill_map___expanded',
  project___systems___skill_map___skills = 'project___systems___skill_map___skills',
  project___systems___skill_map___spaceId = 'project___systems___skill_map___spaceId',
  project___systems___skill_map___createdAt = 'project___systems___skill_map___createdAt',
  project___systems___skill_map___updatedAt = 'project___systems___skill_map___updatedAt',
  project___systems___skill_map___children = 'project___systems___skill_map___children',
  project___systems___parent___id = 'project___systems___parent___id',
  project___systems___parent___children = 'project___systems___parent___children',
  project___systems___children = 'project___systems___children',
  project___systems___children___id = 'project___systems___children___id',
  project___systems___children___children = 'project___systems___children___children',
  project___systems___internal___content = 'project___systems___internal___content',
  project___systems___internal___contentDigest = 'project___systems___internal___contentDigest',
  project___systems___internal___description = 'project___systems___internal___description',
  project___systems___internal___fieldOwners = 'project___systems___internal___fieldOwners',
  project___systems___internal___ignoreType = 'project___systems___internal___ignoreType',
  project___systems___internal___mediaType = 'project___systems___internal___mediaType',
  project___systems___internal___owner = 'project___systems___internal___owner',
  project___systems___internal___type = 'project___systems___internal___type',
  project___languages = 'project___languages',
  project___languages___contentful_id = 'project___languages___contentful_id',
  project___languages___id = 'project___languages___id',
  project___languages___node_locale = 'project___languages___node_locale',
  project___languages___name = 'project___languages___name',
  project___languages___level = 'project___languages___level',
  project___languages___project = 'project___languages___project',
  project___languages___project___contentful_id = 'project___languages___project___contentful_id',
  project___languages___project___id = 'project___languages___project___id',
  project___languages___project___node_locale = 'project___languages___project___node_locale',
  project___languages___project___name = 'project___languages___project___name',
  project___languages___project___startDate = 'project___languages___project___startDate',
  project___languages___project___during = 'project___languages___project___during',
  project___languages___project___comment = 'project___languages___project___comment',
  project___languages___project___roles = 'project___languages___project___roles',
  project___languages___project___assigns = 'project___languages___project___assigns',
  project___languages___project___systems = 'project___languages___project___systems',
  project___languages___project___languages = 'project___languages___project___languages',
  project___languages___project___tools = 'project___languages___project___tools',
  project___languages___project___spaceId = 'project___languages___project___spaceId',
  project___languages___project___createdAt = 'project___languages___project___createdAt',
  project___languages___project___updatedAt = 'project___languages___project___updatedAt',
  project___languages___project___children = 'project___languages___project___children',
  project___languages___spaceId = 'project___languages___spaceId',
  project___languages___createdAt = 'project___languages___createdAt',
  project___languages___updatedAt = 'project___languages___updatedAt',
  project___languages___sys___type = 'project___languages___sys___type',
  project___languages___sys___revision = 'project___languages___sys___revision',
  project___languages___oss = 'project___languages___oss',
  project___languages___oss___contentful_id = 'project___languages___oss___contentful_id',
  project___languages___oss___id = 'project___languages___oss___id',
  project___languages___oss___node_locale = 'project___languages___oss___node_locale',
  project___languages___oss___name = 'project___languages___oss___name',
  project___languages___oss___slug = 'project___languages___oss___slug',
  project___languages___oss___startDate = 'project___languages___oss___startDate',
  project___languages___oss___during = 'project___languages___oss___during',
  project___languages___oss___comment = 'project___languages___oss___comment',
  project___languages___oss___siteUrl = 'project___languages___oss___siteUrl',
  project___languages___oss___sourceUrl = 'project___languages___oss___sourceUrl',
  project___languages___oss___roles = 'project___languages___oss___roles',
  project___languages___oss___assigns = 'project___languages___oss___assigns',
  project___languages___oss___systems = 'project___languages___oss___systems',
  project___languages___oss___languages = 'project___languages___oss___languages',
  project___languages___oss___tools = 'project___languages___oss___tools',
  project___languages___oss___spaceId = 'project___languages___oss___spaceId',
  project___languages___oss___createdAt = 'project___languages___oss___createdAt',
  project___languages___oss___updatedAt = 'project___languages___oss___updatedAt',
  project___languages___oss___children = 'project___languages___oss___children',
  project___languages___skill_map = 'project___languages___skill_map',
  project___languages___skill_map___contentful_id = 'project___languages___skill_map___contentful_id',
  project___languages___skill_map___id = 'project___languages___skill_map___id',
  project___languages___skill_map___node_locale = 'project___languages___skill_map___node_locale',
  project___languages___skill_map___sort = 'project___languages___skill_map___sort',
  project___languages___skill_map___name = 'project___languages___skill_map___name',
  project___languages___skill_map___expanded = 'project___languages___skill_map___expanded',
  project___languages___skill_map___skills = 'project___languages___skill_map___skills',
  project___languages___skill_map___spaceId = 'project___languages___skill_map___spaceId',
  project___languages___skill_map___createdAt = 'project___languages___skill_map___createdAt',
  project___languages___skill_map___updatedAt = 'project___languages___skill_map___updatedAt',
  project___languages___skill_map___children = 'project___languages___skill_map___children',
  project___languages___parent___id = 'project___languages___parent___id',
  project___languages___parent___children = 'project___languages___parent___children',
  project___languages___children = 'project___languages___children',
  project___languages___children___id = 'project___languages___children___id',
  project___languages___children___children = 'project___languages___children___children',
  project___languages___internal___content = 'project___languages___internal___content',
  project___languages___internal___contentDigest = 'project___languages___internal___contentDigest',
  project___languages___internal___description = 'project___languages___internal___description',
  project___languages___internal___fieldOwners = 'project___languages___internal___fieldOwners',
  project___languages___internal___ignoreType = 'project___languages___internal___ignoreType',
  project___languages___internal___mediaType = 'project___languages___internal___mediaType',
  project___languages___internal___owner = 'project___languages___internal___owner',
  project___languages___internal___type = 'project___languages___internal___type',
  project___tools = 'project___tools',
  project___tools___contentful_id = 'project___tools___contentful_id',
  project___tools___id = 'project___tools___id',
  project___tools___node_locale = 'project___tools___node_locale',
  project___tools___name = 'project___tools___name',
  project___tools___level = 'project___tools___level',
  project___tools___project = 'project___tools___project',
  project___tools___project___contentful_id = 'project___tools___project___contentful_id',
  project___tools___project___id = 'project___tools___project___id',
  project___tools___project___node_locale = 'project___tools___project___node_locale',
  project___tools___project___name = 'project___tools___project___name',
  project___tools___project___startDate = 'project___tools___project___startDate',
  project___tools___project___during = 'project___tools___project___during',
  project___tools___project___comment = 'project___tools___project___comment',
  project___tools___project___roles = 'project___tools___project___roles',
  project___tools___project___assigns = 'project___tools___project___assigns',
  project___tools___project___systems = 'project___tools___project___systems',
  project___tools___project___languages = 'project___tools___project___languages',
  project___tools___project___tools = 'project___tools___project___tools',
  project___tools___project___spaceId = 'project___tools___project___spaceId',
  project___tools___project___createdAt = 'project___tools___project___createdAt',
  project___tools___project___updatedAt = 'project___tools___project___updatedAt',
  project___tools___project___children = 'project___tools___project___children',
  project___tools___spaceId = 'project___tools___spaceId',
  project___tools___createdAt = 'project___tools___createdAt',
  project___tools___updatedAt = 'project___tools___updatedAt',
  project___tools___sys___type = 'project___tools___sys___type',
  project___tools___sys___revision = 'project___tools___sys___revision',
  project___tools___oss = 'project___tools___oss',
  project___tools___oss___contentful_id = 'project___tools___oss___contentful_id',
  project___tools___oss___id = 'project___tools___oss___id',
  project___tools___oss___node_locale = 'project___tools___oss___node_locale',
  project___tools___oss___name = 'project___tools___oss___name',
  project___tools___oss___slug = 'project___tools___oss___slug',
  project___tools___oss___startDate = 'project___tools___oss___startDate',
  project___tools___oss___during = 'project___tools___oss___during',
  project___tools___oss___comment = 'project___tools___oss___comment',
  project___tools___oss___siteUrl = 'project___tools___oss___siteUrl',
  project___tools___oss___sourceUrl = 'project___tools___oss___sourceUrl',
  project___tools___oss___roles = 'project___tools___oss___roles',
  project___tools___oss___assigns = 'project___tools___oss___assigns',
  project___tools___oss___systems = 'project___tools___oss___systems',
  project___tools___oss___languages = 'project___tools___oss___languages',
  project___tools___oss___tools = 'project___tools___oss___tools',
  project___tools___oss___spaceId = 'project___tools___oss___spaceId',
  project___tools___oss___createdAt = 'project___tools___oss___createdAt',
  project___tools___oss___updatedAt = 'project___tools___oss___updatedAt',
  project___tools___oss___children = 'project___tools___oss___children',
  project___tools___skill_map = 'project___tools___skill_map',
  project___tools___skill_map___contentful_id = 'project___tools___skill_map___contentful_id',
  project___tools___skill_map___id = 'project___tools___skill_map___id',
  project___tools___skill_map___node_locale = 'project___tools___skill_map___node_locale',
  project___tools___skill_map___sort = 'project___tools___skill_map___sort',
  project___tools___skill_map___name = 'project___tools___skill_map___name',
  project___tools___skill_map___expanded = 'project___tools___skill_map___expanded',
  project___tools___skill_map___skills = 'project___tools___skill_map___skills',
  project___tools___skill_map___spaceId = 'project___tools___skill_map___spaceId',
  project___tools___skill_map___createdAt = 'project___tools___skill_map___createdAt',
  project___tools___skill_map___updatedAt = 'project___tools___skill_map___updatedAt',
  project___tools___skill_map___children = 'project___tools___skill_map___children',
  project___tools___parent___id = 'project___tools___parent___id',
  project___tools___parent___children = 'project___tools___parent___children',
  project___tools___children = 'project___tools___children',
  project___tools___children___id = 'project___tools___children___id',
  project___tools___children___children = 'project___tools___children___children',
  project___tools___internal___content = 'project___tools___internal___content',
  project___tools___internal___contentDigest = 'project___tools___internal___contentDigest',
  project___tools___internal___description = 'project___tools___internal___description',
  project___tools___internal___fieldOwners = 'project___tools___internal___fieldOwners',
  project___tools___internal___ignoreType = 'project___tools___internal___ignoreType',
  project___tools___internal___mediaType = 'project___tools___internal___mediaType',
  project___tools___internal___owner = 'project___tools___internal___owner',
  project___tools___internal___type = 'project___tools___internal___type',
  project___icon___contentful_id = 'project___icon___contentful_id',
  project___icon___id = 'project___icon___id',
  project___icon___node_locale = 'project___icon___node_locale',
  project___icon___title = 'project___icon___title',
  project___icon___history = 'project___icon___history',
  project___icon___history___contentful_id = 'project___icon___history___contentful_id',
  project___icon___history___id = 'project___icon___history___id',
  project___icon___history___node_locale = 'project___icon___history___node_locale',
  project___icon___history___date = 'project___icon___history___date',
  project___icon___history___title = 'project___icon___history___title',
  project___icon___history___subheader = 'project___icon___history___subheader',
  project___icon___history___spaceId = 'project___icon___history___spaceId',
  project___icon___history___createdAt = 'project___icon___history___createdAt',
  project___icon___history___updatedAt = 'project___icon___history___updatedAt',
  project___icon___history___children = 'project___icon___history___children',
  project___icon___contents___id = 'project___icon___contents___id',
  project___icon___contents___children = 'project___icon___contents___children',
  project___icon___contents___contents = 'project___icon___contents___contents',
  project___icon___spaceId = 'project___icon___spaceId',
  project___icon___createdAt = 'project___icon___createdAt',
  project___icon___updatedAt = 'project___icon___updatedAt',
  project___icon___sys___type = 'project___icon___sys___type',
  project___icon___sys___revision = 'project___icon___sys___revision',
  project___icon___what_i_can_do = 'project___icon___what_i_can_do',
  project___icon___what_i_can_do___contentful_id = 'project___icon___what_i_can_do___contentful_id',
  project___icon___what_i_can_do___id = 'project___icon___what_i_can_do___id',
  project___icon___what_i_can_do___node_locale = 'project___icon___what_i_can_do___node_locale',
  project___icon___what_i_can_do___sort = 'project___icon___what_i_can_do___sort',
  project___icon___what_i_can_do___title = 'project___icon___what_i_can_do___title',
  project___icon___what_i_can_do___message = 'project___icon___what_i_can_do___message',
  project___icon___what_i_can_do___spaceId = 'project___icon___what_i_can_do___spaceId',
  project___icon___what_i_can_do___createdAt = 'project___icon___what_i_can_do___createdAt',
  project___icon___what_i_can_do___updatedAt = 'project___icon___what_i_can_do___updatedAt',
  project___icon___what_i_can_do___children = 'project___icon___what_i_can_do___children',
  project___icon___project = 'project___icon___project',
  project___icon___project___contentful_id = 'project___icon___project___contentful_id',
  project___icon___project___id = 'project___icon___project___id',
  project___icon___project___node_locale = 'project___icon___project___node_locale',
  project___icon___project___name = 'project___icon___project___name',
  project___icon___project___startDate = 'project___icon___project___startDate',
  project___icon___project___during = 'project___icon___project___during',
  project___icon___project___comment = 'project___icon___project___comment',
  project___icon___project___roles = 'project___icon___project___roles',
  project___icon___project___assigns = 'project___icon___project___assigns',
  project___icon___project___systems = 'project___icon___project___systems',
  project___icon___project___languages = 'project___icon___project___languages',
  project___icon___project___tools = 'project___icon___project___tools',
  project___icon___project___spaceId = 'project___icon___project___spaceId',
  project___icon___project___createdAt = 'project___icon___project___createdAt',
  project___icon___project___updatedAt = 'project___icon___project___updatedAt',
  project___icon___project___children = 'project___icon___project___children',
  project___icon___contact = 'project___icon___contact',
  project___icon___contact___contentful_id = 'project___icon___contact___contentful_id',
  project___icon___contact___id = 'project___icon___contact___id',
  project___icon___contact___node_locale = 'project___icon___contact___node_locale',
  project___icon___contact___sort = 'project___icon___contact___sort',
  project___icon___contact___title = 'project___icon___contact___title',
  project___icon___contact___subTitle = 'project___icon___contact___subTitle',
  project___icon___contact___href = 'project___icon___contact___href',
  project___icon___contact___spaceId = 'project___icon___contact___spaceId',
  project___icon___contact___createdAt = 'project___icon___contact___createdAt',
  project___icon___contact___updatedAt = 'project___icon___contact___updatedAt',
  project___icon___contact___children = 'project___icon___contact___children',
  project___icon___parent___id = 'project___icon___parent___id',
  project___icon___parent___children = 'project___icon___parent___children',
  project___icon___children = 'project___icon___children',
  project___icon___children___id = 'project___icon___children___id',
  project___icon___children___children = 'project___icon___children___children',
  project___icon___internal___content = 'project___icon___internal___content',
  project___icon___internal___contentDigest = 'project___icon___internal___contentDigest',
  project___icon___internal___description = 'project___icon___internal___description',
  project___icon___internal___fieldOwners = 'project___icon___internal___fieldOwners',
  project___icon___internal___ignoreType = 'project___icon___internal___ignoreType',
  project___icon___internal___mediaType = 'project___icon___internal___mediaType',
  project___icon___internal___owner = 'project___icon___internal___owner',
  project___icon___internal___type = 'project___icon___internal___type',
  project___icon___childContentfulIconContentsTextNode___id = 'project___icon___childContentfulIconContentsTextNode___id',
  project___icon___childContentfulIconContentsTextNode___children = 'project___icon___childContentfulIconContentsTextNode___children',
  project___icon___childContentfulIconContentsTextNode___contents = 'project___icon___childContentfulIconContentsTextNode___contents',
  project___spaceId = 'project___spaceId',
  project___createdAt = 'project___createdAt',
  project___updatedAt = 'project___updatedAt',
  project___sys___type = 'project___sys___type',
  project___sys___revision = 'project___sys___revision',
  project___parent___id = 'project___parent___id',
  project___parent___parent___id = 'project___parent___parent___id',
  project___parent___parent___children = 'project___parent___parent___children',
  project___parent___children = 'project___parent___children',
  project___parent___children___id = 'project___parent___children___id',
  project___parent___children___children = 'project___parent___children___children',
  project___parent___internal___content = 'project___parent___internal___content',
  project___parent___internal___contentDigest = 'project___parent___internal___contentDigest',
  project___parent___internal___description = 'project___parent___internal___description',
  project___parent___internal___fieldOwners = 'project___parent___internal___fieldOwners',
  project___parent___internal___ignoreType = 'project___parent___internal___ignoreType',
  project___parent___internal___mediaType = 'project___parent___internal___mediaType',
  project___parent___internal___owner = 'project___parent___internal___owner',
  project___parent___internal___type = 'project___parent___internal___type',
  project___children = 'project___children',
  project___children___id = 'project___children___id',
  project___children___parent___id = 'project___children___parent___id',
  project___children___parent___children = 'project___children___parent___children',
  project___children___children = 'project___children___children',
  project___children___children___id = 'project___children___children___id',
  project___children___children___children = 'project___children___children___children',
  project___children___internal___content = 'project___children___internal___content',
  project___children___internal___contentDigest = 'project___children___internal___contentDigest',
  project___children___internal___description = 'project___children___internal___description',
  project___children___internal___fieldOwners = 'project___children___internal___fieldOwners',
  project___children___internal___ignoreType = 'project___children___internal___ignoreType',
  project___children___internal___mediaType = 'project___children___internal___mediaType',
  project___children___internal___owner = 'project___children___internal___owner',
  project___children___internal___type = 'project___children___internal___type',
  project___internal___content = 'project___internal___content',
  project___internal___contentDigest = 'project___internal___contentDigest',
  project___internal___description = 'project___internal___description',
  project___internal___fieldOwners = 'project___internal___fieldOwners',
  project___internal___ignoreType = 'project___internal___ignoreType',
  project___internal___mediaType = 'project___internal___mediaType',
  project___internal___owner = 'project___internal___owner',
  project___internal___type = 'project___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  oss = 'oss',
  oss___contentful_id = 'oss___contentful_id',
  oss___id = 'oss___id',
  oss___node_locale = 'oss___node_locale',
  oss___name = 'oss___name',
  oss___slug = 'oss___slug',
  oss___startDate = 'oss___startDate',
  oss___during = 'oss___during',
  oss___comment = 'oss___comment',
  oss___siteUrl = 'oss___siteUrl',
  oss___sourceUrl = 'oss___sourceUrl',
  oss___mainImage___contentful_id = 'oss___mainImage___contentful_id',
  oss___mainImage___id = 'oss___mainImage___id',
  oss___mainImage___spaceId = 'oss___mainImage___spaceId',
  oss___mainImage___createdAt = 'oss___mainImage___createdAt',
  oss___mainImage___updatedAt = 'oss___mainImage___updatedAt',
  oss___mainImage___file___url = 'oss___mainImage___file___url',
  oss___mainImage___file___fileName = 'oss___mainImage___file___fileName',
  oss___mainImage___file___contentType = 'oss___mainImage___file___contentType',
  oss___mainImage___title = 'oss___mainImage___title',
  oss___mainImage___description = 'oss___mainImage___description',
  oss___mainImage___node_locale = 'oss___mainImage___node_locale',
  oss___mainImage___sys___type = 'oss___mainImage___sys___type',
  oss___mainImage___sys___revision = 'oss___mainImage___sys___revision',
  oss___mainImage___localFile___sourceInstanceName = 'oss___mainImage___localFile___sourceInstanceName',
  oss___mainImage___localFile___absolutePath = 'oss___mainImage___localFile___absolutePath',
  oss___mainImage___localFile___relativePath = 'oss___mainImage___localFile___relativePath',
  oss___mainImage___localFile___extension = 'oss___mainImage___localFile___extension',
  oss___mainImage___localFile___size = 'oss___mainImage___localFile___size',
  oss___mainImage___localFile___prettySize = 'oss___mainImage___localFile___prettySize',
  oss___mainImage___localFile___modifiedTime = 'oss___mainImage___localFile___modifiedTime',
  oss___mainImage___localFile___accessTime = 'oss___mainImage___localFile___accessTime',
  oss___mainImage___localFile___changeTime = 'oss___mainImage___localFile___changeTime',
  oss___mainImage___localFile___birthTime = 'oss___mainImage___localFile___birthTime',
  oss___mainImage___localFile___root = 'oss___mainImage___localFile___root',
  oss___mainImage___localFile___dir = 'oss___mainImage___localFile___dir',
  oss___mainImage___localFile___base = 'oss___mainImage___localFile___base',
  oss___mainImage___localFile___ext = 'oss___mainImage___localFile___ext',
  oss___mainImage___localFile___name = 'oss___mainImage___localFile___name',
  oss___mainImage___localFile___relativeDirectory = 'oss___mainImage___localFile___relativeDirectory',
  oss___mainImage___localFile___dev = 'oss___mainImage___localFile___dev',
  oss___mainImage___localFile___mode = 'oss___mainImage___localFile___mode',
  oss___mainImage___localFile___nlink = 'oss___mainImage___localFile___nlink',
  oss___mainImage___localFile___uid = 'oss___mainImage___localFile___uid',
  oss___mainImage___localFile___gid = 'oss___mainImage___localFile___gid',
  oss___mainImage___localFile___rdev = 'oss___mainImage___localFile___rdev',
  oss___mainImage___localFile___ino = 'oss___mainImage___localFile___ino',
  oss___mainImage___localFile___atimeMs = 'oss___mainImage___localFile___atimeMs',
  oss___mainImage___localFile___mtimeMs = 'oss___mainImage___localFile___mtimeMs',
  oss___mainImage___localFile___ctimeMs = 'oss___mainImage___localFile___ctimeMs',
  oss___mainImage___localFile___atime = 'oss___mainImage___localFile___atime',
  oss___mainImage___localFile___mtime = 'oss___mainImage___localFile___mtime',
  oss___mainImage___localFile___ctime = 'oss___mainImage___localFile___ctime',
  oss___mainImage___localFile___birthtime = 'oss___mainImage___localFile___birthtime',
  oss___mainImage___localFile___birthtimeMs = 'oss___mainImage___localFile___birthtimeMs',
  oss___mainImage___localFile___blksize = 'oss___mainImage___localFile___blksize',
  oss___mainImage___localFile___blocks = 'oss___mainImage___localFile___blocks',
  oss___mainImage___localFile___url = 'oss___mainImage___localFile___url',
  oss___mainImage___localFile___id = 'oss___mainImage___localFile___id',
  oss___mainImage___localFile___children = 'oss___mainImage___localFile___children',
  oss___mainImage___fixed___base64 = 'oss___mainImage___fixed___base64',
  oss___mainImage___fixed___tracedSVG = 'oss___mainImage___fixed___tracedSVG',
  oss___mainImage___fixed___aspectRatio = 'oss___mainImage___fixed___aspectRatio',
  oss___mainImage___fixed___width = 'oss___mainImage___fixed___width',
  oss___mainImage___fixed___height = 'oss___mainImage___fixed___height',
  oss___mainImage___fixed___src = 'oss___mainImage___fixed___src',
  oss___mainImage___fixed___srcSet = 'oss___mainImage___fixed___srcSet',
  oss___mainImage___fixed___srcWebp = 'oss___mainImage___fixed___srcWebp',
  oss___mainImage___fixed___srcSetWebp = 'oss___mainImage___fixed___srcSetWebp',
  oss___mainImage___resolutions___base64 = 'oss___mainImage___resolutions___base64',
  oss___mainImage___resolutions___tracedSVG = 'oss___mainImage___resolutions___tracedSVG',
  oss___mainImage___resolutions___aspectRatio = 'oss___mainImage___resolutions___aspectRatio',
  oss___mainImage___resolutions___width = 'oss___mainImage___resolutions___width',
  oss___mainImage___resolutions___height = 'oss___mainImage___resolutions___height',
  oss___mainImage___resolutions___src = 'oss___mainImage___resolutions___src',
  oss___mainImage___resolutions___srcSet = 'oss___mainImage___resolutions___srcSet',
  oss___mainImage___resolutions___srcWebp = 'oss___mainImage___resolutions___srcWebp',
  oss___mainImage___resolutions___srcSetWebp = 'oss___mainImage___resolutions___srcSetWebp',
  oss___mainImage___fluid___base64 = 'oss___mainImage___fluid___base64',
  oss___mainImage___fluid___tracedSVG = 'oss___mainImage___fluid___tracedSVG',
  oss___mainImage___fluid___aspectRatio = 'oss___mainImage___fluid___aspectRatio',
  oss___mainImage___fluid___src = 'oss___mainImage___fluid___src',
  oss___mainImage___fluid___srcSet = 'oss___mainImage___fluid___srcSet',
  oss___mainImage___fluid___srcWebp = 'oss___mainImage___fluid___srcWebp',
  oss___mainImage___fluid___srcSetWebp = 'oss___mainImage___fluid___srcSetWebp',
  oss___mainImage___fluid___sizes = 'oss___mainImage___fluid___sizes',
  oss___mainImage___sizes___base64 = 'oss___mainImage___sizes___base64',
  oss___mainImage___sizes___tracedSVG = 'oss___mainImage___sizes___tracedSVG',
  oss___mainImage___sizes___aspectRatio = 'oss___mainImage___sizes___aspectRatio',
  oss___mainImage___sizes___src = 'oss___mainImage___sizes___src',
  oss___mainImage___sizes___srcSet = 'oss___mainImage___sizes___srcSet',
  oss___mainImage___sizes___srcWebp = 'oss___mainImage___sizes___srcWebp',
  oss___mainImage___sizes___srcSetWebp = 'oss___mainImage___sizes___srcSetWebp',
  oss___mainImage___sizes___sizes = 'oss___mainImage___sizes___sizes',
  oss___mainImage___resize___base64 = 'oss___mainImage___resize___base64',
  oss___mainImage___resize___tracedSVG = 'oss___mainImage___resize___tracedSVG',
  oss___mainImage___resize___src = 'oss___mainImage___resize___src',
  oss___mainImage___resize___width = 'oss___mainImage___resize___width',
  oss___mainImage___resize___height = 'oss___mainImage___resize___height',
  oss___mainImage___resize___aspectRatio = 'oss___mainImage___resize___aspectRatio',
  oss___mainImage___parent___id = 'oss___mainImage___parent___id',
  oss___mainImage___parent___children = 'oss___mainImage___parent___children',
  oss___mainImage___children = 'oss___mainImage___children',
  oss___mainImage___children___id = 'oss___mainImage___children___id',
  oss___mainImage___children___children = 'oss___mainImage___children___children',
  oss___mainImage___internal___content = 'oss___mainImage___internal___content',
  oss___mainImage___internal___contentDigest = 'oss___mainImage___internal___contentDigest',
  oss___mainImage___internal___description = 'oss___mainImage___internal___description',
  oss___mainImage___internal___fieldOwners = 'oss___mainImage___internal___fieldOwners',
  oss___mainImage___internal___ignoreType = 'oss___mainImage___internal___ignoreType',
  oss___mainImage___internal___mediaType = 'oss___mainImage___internal___mediaType',
  oss___mainImage___internal___owner = 'oss___mainImage___internal___owner',
  oss___mainImage___internal___type = 'oss___mainImage___internal___type',
  oss___roles = 'oss___roles',
  oss___roles___contentful_id = 'oss___roles___contentful_id',
  oss___roles___id = 'oss___roles___id',
  oss___roles___node_locale = 'oss___roles___node_locale',
  oss___roles___name = 'oss___roles___name',
  oss___roles___project = 'oss___roles___project',
  oss___roles___project___contentful_id = 'oss___roles___project___contentful_id',
  oss___roles___project___id = 'oss___roles___project___id',
  oss___roles___project___node_locale = 'oss___roles___project___node_locale',
  oss___roles___project___name = 'oss___roles___project___name',
  oss___roles___project___startDate = 'oss___roles___project___startDate',
  oss___roles___project___during = 'oss___roles___project___during',
  oss___roles___project___comment = 'oss___roles___project___comment',
  oss___roles___project___roles = 'oss___roles___project___roles',
  oss___roles___project___assigns = 'oss___roles___project___assigns',
  oss___roles___project___systems = 'oss___roles___project___systems',
  oss___roles___project___languages = 'oss___roles___project___languages',
  oss___roles___project___tools = 'oss___roles___project___tools',
  oss___roles___project___spaceId = 'oss___roles___project___spaceId',
  oss___roles___project___createdAt = 'oss___roles___project___createdAt',
  oss___roles___project___updatedAt = 'oss___roles___project___updatedAt',
  oss___roles___project___children = 'oss___roles___project___children',
  oss___roles___oss = 'oss___roles___oss',
  oss___roles___oss___contentful_id = 'oss___roles___oss___contentful_id',
  oss___roles___oss___id = 'oss___roles___oss___id',
  oss___roles___oss___node_locale = 'oss___roles___oss___node_locale',
  oss___roles___oss___name = 'oss___roles___oss___name',
  oss___roles___oss___slug = 'oss___roles___oss___slug',
  oss___roles___oss___startDate = 'oss___roles___oss___startDate',
  oss___roles___oss___during = 'oss___roles___oss___during',
  oss___roles___oss___comment = 'oss___roles___oss___comment',
  oss___roles___oss___siteUrl = 'oss___roles___oss___siteUrl',
  oss___roles___oss___sourceUrl = 'oss___roles___oss___sourceUrl',
  oss___roles___oss___roles = 'oss___roles___oss___roles',
  oss___roles___oss___assigns = 'oss___roles___oss___assigns',
  oss___roles___oss___systems = 'oss___roles___oss___systems',
  oss___roles___oss___languages = 'oss___roles___oss___languages',
  oss___roles___oss___tools = 'oss___roles___oss___tools',
  oss___roles___oss___spaceId = 'oss___roles___oss___spaceId',
  oss___roles___oss___createdAt = 'oss___roles___oss___createdAt',
  oss___roles___oss___updatedAt = 'oss___roles___oss___updatedAt',
  oss___roles___oss___children = 'oss___roles___oss___children',
  oss___roles___spaceId = 'oss___roles___spaceId',
  oss___roles___createdAt = 'oss___roles___createdAt',
  oss___roles___updatedAt = 'oss___roles___updatedAt',
  oss___roles___sys___type = 'oss___roles___sys___type',
  oss___roles___sys___revision = 'oss___roles___sys___revision',
  oss___roles___parent___id = 'oss___roles___parent___id',
  oss___roles___parent___children = 'oss___roles___parent___children',
  oss___roles___children = 'oss___roles___children',
  oss___roles___children___id = 'oss___roles___children___id',
  oss___roles___children___children = 'oss___roles___children___children',
  oss___roles___internal___content = 'oss___roles___internal___content',
  oss___roles___internal___contentDigest = 'oss___roles___internal___contentDigest',
  oss___roles___internal___description = 'oss___roles___internal___description',
  oss___roles___internal___fieldOwners = 'oss___roles___internal___fieldOwners',
  oss___roles___internal___ignoreType = 'oss___roles___internal___ignoreType',
  oss___roles___internal___mediaType = 'oss___roles___internal___mediaType',
  oss___roles___internal___owner = 'oss___roles___internal___owner',
  oss___roles___internal___type = 'oss___roles___internal___type',
  oss___assigns = 'oss___assigns',
  oss___assigns___contentful_id = 'oss___assigns___contentful_id',
  oss___assigns___id = 'oss___assigns___id',
  oss___assigns___node_locale = 'oss___assigns___node_locale',
  oss___assigns___name = 'oss___assigns___name',
  oss___assigns___oss = 'oss___assigns___oss',
  oss___assigns___oss___contentful_id = 'oss___assigns___oss___contentful_id',
  oss___assigns___oss___id = 'oss___assigns___oss___id',
  oss___assigns___oss___node_locale = 'oss___assigns___oss___node_locale',
  oss___assigns___oss___name = 'oss___assigns___oss___name',
  oss___assigns___oss___slug = 'oss___assigns___oss___slug',
  oss___assigns___oss___startDate = 'oss___assigns___oss___startDate',
  oss___assigns___oss___during = 'oss___assigns___oss___during',
  oss___assigns___oss___comment = 'oss___assigns___oss___comment',
  oss___assigns___oss___siteUrl = 'oss___assigns___oss___siteUrl',
  oss___assigns___oss___sourceUrl = 'oss___assigns___oss___sourceUrl',
  oss___assigns___oss___roles = 'oss___assigns___oss___roles',
  oss___assigns___oss___assigns = 'oss___assigns___oss___assigns',
  oss___assigns___oss___systems = 'oss___assigns___oss___systems',
  oss___assigns___oss___languages = 'oss___assigns___oss___languages',
  oss___assigns___oss___tools = 'oss___assigns___oss___tools',
  oss___assigns___oss___spaceId = 'oss___assigns___oss___spaceId',
  oss___assigns___oss___createdAt = 'oss___assigns___oss___createdAt',
  oss___assigns___oss___updatedAt = 'oss___assigns___oss___updatedAt',
  oss___assigns___oss___children = 'oss___assigns___oss___children',
  oss___assigns___spaceId = 'oss___assigns___spaceId',
  oss___assigns___createdAt = 'oss___assigns___createdAt',
  oss___assigns___updatedAt = 'oss___assigns___updatedAt',
  oss___assigns___sys___type = 'oss___assigns___sys___type',
  oss___assigns___sys___revision = 'oss___assigns___sys___revision',
  oss___assigns___project = 'oss___assigns___project',
  oss___assigns___project___contentful_id = 'oss___assigns___project___contentful_id',
  oss___assigns___project___id = 'oss___assigns___project___id',
  oss___assigns___project___node_locale = 'oss___assigns___project___node_locale',
  oss___assigns___project___name = 'oss___assigns___project___name',
  oss___assigns___project___startDate = 'oss___assigns___project___startDate',
  oss___assigns___project___during = 'oss___assigns___project___during',
  oss___assigns___project___comment = 'oss___assigns___project___comment',
  oss___assigns___project___roles = 'oss___assigns___project___roles',
  oss___assigns___project___assigns = 'oss___assigns___project___assigns',
  oss___assigns___project___systems = 'oss___assigns___project___systems',
  oss___assigns___project___languages = 'oss___assigns___project___languages',
  oss___assigns___project___tools = 'oss___assigns___project___tools',
  oss___assigns___project___spaceId = 'oss___assigns___project___spaceId',
  oss___assigns___project___createdAt = 'oss___assigns___project___createdAt',
  oss___assigns___project___updatedAt = 'oss___assigns___project___updatedAt',
  oss___assigns___project___children = 'oss___assigns___project___children',
  oss___assigns___parent___id = 'oss___assigns___parent___id',
  oss___assigns___parent___children = 'oss___assigns___parent___children',
  oss___assigns___children = 'oss___assigns___children',
  oss___assigns___children___id = 'oss___assigns___children___id',
  oss___assigns___children___children = 'oss___assigns___children___children',
  oss___assigns___internal___content = 'oss___assigns___internal___content',
  oss___assigns___internal___contentDigest = 'oss___assigns___internal___contentDigest',
  oss___assigns___internal___description = 'oss___assigns___internal___description',
  oss___assigns___internal___fieldOwners = 'oss___assigns___internal___fieldOwners',
  oss___assigns___internal___ignoreType = 'oss___assigns___internal___ignoreType',
  oss___assigns___internal___mediaType = 'oss___assigns___internal___mediaType',
  oss___assigns___internal___owner = 'oss___assigns___internal___owner',
  oss___assigns___internal___type = 'oss___assigns___internal___type',
  oss___systems = 'oss___systems',
  oss___systems___contentful_id = 'oss___systems___contentful_id',
  oss___systems___id = 'oss___systems___id',
  oss___systems___node_locale = 'oss___systems___node_locale',
  oss___systems___name = 'oss___systems___name',
  oss___systems___level = 'oss___systems___level',
  oss___systems___project = 'oss___systems___project',
  oss___systems___project___contentful_id = 'oss___systems___project___contentful_id',
  oss___systems___project___id = 'oss___systems___project___id',
  oss___systems___project___node_locale = 'oss___systems___project___node_locale',
  oss___systems___project___name = 'oss___systems___project___name',
  oss___systems___project___startDate = 'oss___systems___project___startDate',
  oss___systems___project___during = 'oss___systems___project___during',
  oss___systems___project___comment = 'oss___systems___project___comment',
  oss___systems___project___roles = 'oss___systems___project___roles',
  oss___systems___project___assigns = 'oss___systems___project___assigns',
  oss___systems___project___systems = 'oss___systems___project___systems',
  oss___systems___project___languages = 'oss___systems___project___languages',
  oss___systems___project___tools = 'oss___systems___project___tools',
  oss___systems___project___spaceId = 'oss___systems___project___spaceId',
  oss___systems___project___createdAt = 'oss___systems___project___createdAt',
  oss___systems___project___updatedAt = 'oss___systems___project___updatedAt',
  oss___systems___project___children = 'oss___systems___project___children',
  oss___systems___spaceId = 'oss___systems___spaceId',
  oss___systems___createdAt = 'oss___systems___createdAt',
  oss___systems___updatedAt = 'oss___systems___updatedAt',
  oss___systems___sys___type = 'oss___systems___sys___type',
  oss___systems___sys___revision = 'oss___systems___sys___revision',
  oss___systems___oss = 'oss___systems___oss',
  oss___systems___oss___contentful_id = 'oss___systems___oss___contentful_id',
  oss___systems___oss___id = 'oss___systems___oss___id',
  oss___systems___oss___node_locale = 'oss___systems___oss___node_locale',
  oss___systems___oss___name = 'oss___systems___oss___name',
  oss___systems___oss___slug = 'oss___systems___oss___slug',
  oss___systems___oss___startDate = 'oss___systems___oss___startDate',
  oss___systems___oss___during = 'oss___systems___oss___during',
  oss___systems___oss___comment = 'oss___systems___oss___comment',
  oss___systems___oss___siteUrl = 'oss___systems___oss___siteUrl',
  oss___systems___oss___sourceUrl = 'oss___systems___oss___sourceUrl',
  oss___systems___oss___roles = 'oss___systems___oss___roles',
  oss___systems___oss___assigns = 'oss___systems___oss___assigns',
  oss___systems___oss___systems = 'oss___systems___oss___systems',
  oss___systems___oss___languages = 'oss___systems___oss___languages',
  oss___systems___oss___tools = 'oss___systems___oss___tools',
  oss___systems___oss___spaceId = 'oss___systems___oss___spaceId',
  oss___systems___oss___createdAt = 'oss___systems___oss___createdAt',
  oss___systems___oss___updatedAt = 'oss___systems___oss___updatedAt',
  oss___systems___oss___children = 'oss___systems___oss___children',
  oss___systems___skill_map = 'oss___systems___skill_map',
  oss___systems___skill_map___contentful_id = 'oss___systems___skill_map___contentful_id',
  oss___systems___skill_map___id = 'oss___systems___skill_map___id',
  oss___systems___skill_map___node_locale = 'oss___systems___skill_map___node_locale',
  oss___systems___skill_map___sort = 'oss___systems___skill_map___sort',
  oss___systems___skill_map___name = 'oss___systems___skill_map___name',
  oss___systems___skill_map___expanded = 'oss___systems___skill_map___expanded',
  oss___systems___skill_map___skills = 'oss___systems___skill_map___skills',
  oss___systems___skill_map___spaceId = 'oss___systems___skill_map___spaceId',
  oss___systems___skill_map___createdAt = 'oss___systems___skill_map___createdAt',
  oss___systems___skill_map___updatedAt = 'oss___systems___skill_map___updatedAt',
  oss___systems___skill_map___children = 'oss___systems___skill_map___children',
  oss___systems___parent___id = 'oss___systems___parent___id',
  oss___systems___parent___children = 'oss___systems___parent___children',
  oss___systems___children = 'oss___systems___children',
  oss___systems___children___id = 'oss___systems___children___id',
  oss___systems___children___children = 'oss___systems___children___children',
  oss___systems___internal___content = 'oss___systems___internal___content',
  oss___systems___internal___contentDigest = 'oss___systems___internal___contentDigest',
  oss___systems___internal___description = 'oss___systems___internal___description',
  oss___systems___internal___fieldOwners = 'oss___systems___internal___fieldOwners',
  oss___systems___internal___ignoreType = 'oss___systems___internal___ignoreType',
  oss___systems___internal___mediaType = 'oss___systems___internal___mediaType',
  oss___systems___internal___owner = 'oss___systems___internal___owner',
  oss___systems___internal___type = 'oss___systems___internal___type',
  oss___languages = 'oss___languages',
  oss___languages___contentful_id = 'oss___languages___contentful_id',
  oss___languages___id = 'oss___languages___id',
  oss___languages___node_locale = 'oss___languages___node_locale',
  oss___languages___name = 'oss___languages___name',
  oss___languages___level = 'oss___languages___level',
  oss___languages___project = 'oss___languages___project',
  oss___languages___project___contentful_id = 'oss___languages___project___contentful_id',
  oss___languages___project___id = 'oss___languages___project___id',
  oss___languages___project___node_locale = 'oss___languages___project___node_locale',
  oss___languages___project___name = 'oss___languages___project___name',
  oss___languages___project___startDate = 'oss___languages___project___startDate',
  oss___languages___project___during = 'oss___languages___project___during',
  oss___languages___project___comment = 'oss___languages___project___comment',
  oss___languages___project___roles = 'oss___languages___project___roles',
  oss___languages___project___assigns = 'oss___languages___project___assigns',
  oss___languages___project___systems = 'oss___languages___project___systems',
  oss___languages___project___languages = 'oss___languages___project___languages',
  oss___languages___project___tools = 'oss___languages___project___tools',
  oss___languages___project___spaceId = 'oss___languages___project___spaceId',
  oss___languages___project___createdAt = 'oss___languages___project___createdAt',
  oss___languages___project___updatedAt = 'oss___languages___project___updatedAt',
  oss___languages___project___children = 'oss___languages___project___children',
  oss___languages___spaceId = 'oss___languages___spaceId',
  oss___languages___createdAt = 'oss___languages___createdAt',
  oss___languages___updatedAt = 'oss___languages___updatedAt',
  oss___languages___sys___type = 'oss___languages___sys___type',
  oss___languages___sys___revision = 'oss___languages___sys___revision',
  oss___languages___oss = 'oss___languages___oss',
  oss___languages___oss___contentful_id = 'oss___languages___oss___contentful_id',
  oss___languages___oss___id = 'oss___languages___oss___id',
  oss___languages___oss___node_locale = 'oss___languages___oss___node_locale',
  oss___languages___oss___name = 'oss___languages___oss___name',
  oss___languages___oss___slug = 'oss___languages___oss___slug',
  oss___languages___oss___startDate = 'oss___languages___oss___startDate',
  oss___languages___oss___during = 'oss___languages___oss___during',
  oss___languages___oss___comment = 'oss___languages___oss___comment',
  oss___languages___oss___siteUrl = 'oss___languages___oss___siteUrl',
  oss___languages___oss___sourceUrl = 'oss___languages___oss___sourceUrl',
  oss___languages___oss___roles = 'oss___languages___oss___roles',
  oss___languages___oss___assigns = 'oss___languages___oss___assigns',
  oss___languages___oss___systems = 'oss___languages___oss___systems',
  oss___languages___oss___languages = 'oss___languages___oss___languages',
  oss___languages___oss___tools = 'oss___languages___oss___tools',
  oss___languages___oss___spaceId = 'oss___languages___oss___spaceId',
  oss___languages___oss___createdAt = 'oss___languages___oss___createdAt',
  oss___languages___oss___updatedAt = 'oss___languages___oss___updatedAt',
  oss___languages___oss___children = 'oss___languages___oss___children',
  oss___languages___skill_map = 'oss___languages___skill_map',
  oss___languages___skill_map___contentful_id = 'oss___languages___skill_map___contentful_id',
  oss___languages___skill_map___id = 'oss___languages___skill_map___id',
  oss___languages___skill_map___node_locale = 'oss___languages___skill_map___node_locale',
  oss___languages___skill_map___sort = 'oss___languages___skill_map___sort',
  oss___languages___skill_map___name = 'oss___languages___skill_map___name',
  oss___languages___skill_map___expanded = 'oss___languages___skill_map___expanded',
  oss___languages___skill_map___skills = 'oss___languages___skill_map___skills',
  oss___languages___skill_map___spaceId = 'oss___languages___skill_map___spaceId',
  oss___languages___skill_map___createdAt = 'oss___languages___skill_map___createdAt',
  oss___languages___skill_map___updatedAt = 'oss___languages___skill_map___updatedAt',
  oss___languages___skill_map___children = 'oss___languages___skill_map___children',
  oss___languages___parent___id = 'oss___languages___parent___id',
  oss___languages___parent___children = 'oss___languages___parent___children',
  oss___languages___children = 'oss___languages___children',
  oss___languages___children___id = 'oss___languages___children___id',
  oss___languages___children___children = 'oss___languages___children___children',
  oss___languages___internal___content = 'oss___languages___internal___content',
  oss___languages___internal___contentDigest = 'oss___languages___internal___contentDigest',
  oss___languages___internal___description = 'oss___languages___internal___description',
  oss___languages___internal___fieldOwners = 'oss___languages___internal___fieldOwners',
  oss___languages___internal___ignoreType = 'oss___languages___internal___ignoreType',
  oss___languages___internal___mediaType = 'oss___languages___internal___mediaType',
  oss___languages___internal___owner = 'oss___languages___internal___owner',
  oss___languages___internal___type = 'oss___languages___internal___type',
  oss___tools = 'oss___tools',
  oss___tools___contentful_id = 'oss___tools___contentful_id',
  oss___tools___id = 'oss___tools___id',
  oss___tools___node_locale = 'oss___tools___node_locale',
  oss___tools___name = 'oss___tools___name',
  oss___tools___level = 'oss___tools___level',
  oss___tools___project = 'oss___tools___project',
  oss___tools___project___contentful_id = 'oss___tools___project___contentful_id',
  oss___tools___project___id = 'oss___tools___project___id',
  oss___tools___project___node_locale = 'oss___tools___project___node_locale',
  oss___tools___project___name = 'oss___tools___project___name',
  oss___tools___project___startDate = 'oss___tools___project___startDate',
  oss___tools___project___during = 'oss___tools___project___during',
  oss___tools___project___comment = 'oss___tools___project___comment',
  oss___tools___project___roles = 'oss___tools___project___roles',
  oss___tools___project___assigns = 'oss___tools___project___assigns',
  oss___tools___project___systems = 'oss___tools___project___systems',
  oss___tools___project___languages = 'oss___tools___project___languages',
  oss___tools___project___tools = 'oss___tools___project___tools',
  oss___tools___project___spaceId = 'oss___tools___project___spaceId',
  oss___tools___project___createdAt = 'oss___tools___project___createdAt',
  oss___tools___project___updatedAt = 'oss___tools___project___updatedAt',
  oss___tools___project___children = 'oss___tools___project___children',
  oss___tools___spaceId = 'oss___tools___spaceId',
  oss___tools___createdAt = 'oss___tools___createdAt',
  oss___tools___updatedAt = 'oss___tools___updatedAt',
  oss___tools___sys___type = 'oss___tools___sys___type',
  oss___tools___sys___revision = 'oss___tools___sys___revision',
  oss___tools___oss = 'oss___tools___oss',
  oss___tools___oss___contentful_id = 'oss___tools___oss___contentful_id',
  oss___tools___oss___id = 'oss___tools___oss___id',
  oss___tools___oss___node_locale = 'oss___tools___oss___node_locale',
  oss___tools___oss___name = 'oss___tools___oss___name',
  oss___tools___oss___slug = 'oss___tools___oss___slug',
  oss___tools___oss___startDate = 'oss___tools___oss___startDate',
  oss___tools___oss___during = 'oss___tools___oss___during',
  oss___tools___oss___comment = 'oss___tools___oss___comment',
  oss___tools___oss___siteUrl = 'oss___tools___oss___siteUrl',
  oss___tools___oss___sourceUrl = 'oss___tools___oss___sourceUrl',
  oss___tools___oss___roles = 'oss___tools___oss___roles',
  oss___tools___oss___assigns = 'oss___tools___oss___assigns',
  oss___tools___oss___systems = 'oss___tools___oss___systems',
  oss___tools___oss___languages = 'oss___tools___oss___languages',
  oss___tools___oss___tools = 'oss___tools___oss___tools',
  oss___tools___oss___spaceId = 'oss___tools___oss___spaceId',
  oss___tools___oss___createdAt = 'oss___tools___oss___createdAt',
  oss___tools___oss___updatedAt = 'oss___tools___oss___updatedAt',
  oss___tools___oss___children = 'oss___tools___oss___children',
  oss___tools___skill_map = 'oss___tools___skill_map',
  oss___tools___skill_map___contentful_id = 'oss___tools___skill_map___contentful_id',
  oss___tools___skill_map___id = 'oss___tools___skill_map___id',
  oss___tools___skill_map___node_locale = 'oss___tools___skill_map___node_locale',
  oss___tools___skill_map___sort = 'oss___tools___skill_map___sort',
  oss___tools___skill_map___name = 'oss___tools___skill_map___name',
  oss___tools___skill_map___expanded = 'oss___tools___skill_map___expanded',
  oss___tools___skill_map___skills = 'oss___tools___skill_map___skills',
  oss___tools___skill_map___spaceId = 'oss___tools___skill_map___spaceId',
  oss___tools___skill_map___createdAt = 'oss___tools___skill_map___createdAt',
  oss___tools___skill_map___updatedAt = 'oss___tools___skill_map___updatedAt',
  oss___tools___skill_map___children = 'oss___tools___skill_map___children',
  oss___tools___parent___id = 'oss___tools___parent___id',
  oss___tools___parent___children = 'oss___tools___parent___children',
  oss___tools___children = 'oss___tools___children',
  oss___tools___children___id = 'oss___tools___children___id',
  oss___tools___children___children = 'oss___tools___children___children',
  oss___tools___internal___content = 'oss___tools___internal___content',
  oss___tools___internal___contentDigest = 'oss___tools___internal___contentDigest',
  oss___tools___internal___description = 'oss___tools___internal___description',
  oss___tools___internal___fieldOwners = 'oss___tools___internal___fieldOwners',
  oss___tools___internal___ignoreType = 'oss___tools___internal___ignoreType',
  oss___tools___internal___mediaType = 'oss___tools___internal___mediaType',
  oss___tools___internal___owner = 'oss___tools___internal___owner',
  oss___tools___internal___type = 'oss___tools___internal___type',
  oss___spaceId = 'oss___spaceId',
  oss___createdAt = 'oss___createdAt',
  oss___updatedAt = 'oss___updatedAt',
  oss___sys___type = 'oss___sys___type',
  oss___sys___revision = 'oss___sys___revision',
  oss___parent___id = 'oss___parent___id',
  oss___parent___parent___id = 'oss___parent___parent___id',
  oss___parent___parent___children = 'oss___parent___parent___children',
  oss___parent___children = 'oss___parent___children',
  oss___parent___children___id = 'oss___parent___children___id',
  oss___parent___children___children = 'oss___parent___children___children',
  oss___parent___internal___content = 'oss___parent___internal___content',
  oss___parent___internal___contentDigest = 'oss___parent___internal___contentDigest',
  oss___parent___internal___description = 'oss___parent___internal___description',
  oss___parent___internal___fieldOwners = 'oss___parent___internal___fieldOwners',
  oss___parent___internal___ignoreType = 'oss___parent___internal___ignoreType',
  oss___parent___internal___mediaType = 'oss___parent___internal___mediaType',
  oss___parent___internal___owner = 'oss___parent___internal___owner',
  oss___parent___internal___type = 'oss___parent___internal___type',
  oss___children = 'oss___children',
  oss___children___id = 'oss___children___id',
  oss___children___parent___id = 'oss___children___parent___id',
  oss___children___parent___children = 'oss___children___parent___children',
  oss___children___children = 'oss___children___children',
  oss___children___children___id = 'oss___children___children___id',
  oss___children___children___children = 'oss___children___children___children',
  oss___children___internal___content = 'oss___children___internal___content',
  oss___children___internal___contentDigest = 'oss___children___internal___contentDigest',
  oss___children___internal___description = 'oss___children___internal___description',
  oss___children___internal___fieldOwners = 'oss___children___internal___fieldOwners',
  oss___children___internal___ignoreType = 'oss___children___internal___ignoreType',
  oss___children___internal___mediaType = 'oss___children___internal___mediaType',
  oss___children___internal___owner = 'oss___children___internal___owner',
  oss___children___internal___type = 'oss___children___internal___type',
  oss___internal___content = 'oss___internal___content',
  oss___internal___contentDigest = 'oss___internal___contentDigest',
  oss___internal___description = 'oss___internal___description',
  oss___internal___fieldOwners = 'oss___internal___fieldOwners',
  oss___internal___ignoreType = 'oss___internal___ignoreType',
  oss___internal___mediaType = 'oss___internal___mediaType',
  oss___internal___owner = 'oss___internal___owner',
  oss___internal___type = 'oss___internal___type',
  skill_map = 'skill_map',
  skill_map___contentful_id = 'skill_map___contentful_id',
  skill_map___id = 'skill_map___id',
  skill_map___node_locale = 'skill_map___node_locale',
  skill_map___sort = 'skill_map___sort',
  skill_map___name = 'skill_map___name',
  skill_map___expanded = 'skill_map___expanded',
  skill_map___skills = 'skill_map___skills',
  skill_map___skills___contentful_id = 'skill_map___skills___contentful_id',
  skill_map___skills___id = 'skill_map___skills___id',
  skill_map___skills___node_locale = 'skill_map___skills___node_locale',
  skill_map___skills___name = 'skill_map___skills___name',
  skill_map___skills___level = 'skill_map___skills___level',
  skill_map___skills___project = 'skill_map___skills___project',
  skill_map___skills___project___contentful_id = 'skill_map___skills___project___contentful_id',
  skill_map___skills___project___id = 'skill_map___skills___project___id',
  skill_map___skills___project___node_locale = 'skill_map___skills___project___node_locale',
  skill_map___skills___project___name = 'skill_map___skills___project___name',
  skill_map___skills___project___startDate = 'skill_map___skills___project___startDate',
  skill_map___skills___project___during = 'skill_map___skills___project___during',
  skill_map___skills___project___comment = 'skill_map___skills___project___comment',
  skill_map___skills___project___roles = 'skill_map___skills___project___roles',
  skill_map___skills___project___assigns = 'skill_map___skills___project___assigns',
  skill_map___skills___project___systems = 'skill_map___skills___project___systems',
  skill_map___skills___project___languages = 'skill_map___skills___project___languages',
  skill_map___skills___project___tools = 'skill_map___skills___project___tools',
  skill_map___skills___project___spaceId = 'skill_map___skills___project___spaceId',
  skill_map___skills___project___createdAt = 'skill_map___skills___project___createdAt',
  skill_map___skills___project___updatedAt = 'skill_map___skills___project___updatedAt',
  skill_map___skills___project___children = 'skill_map___skills___project___children',
  skill_map___skills___spaceId = 'skill_map___skills___spaceId',
  skill_map___skills___createdAt = 'skill_map___skills___createdAt',
  skill_map___skills___updatedAt = 'skill_map___skills___updatedAt',
  skill_map___skills___sys___type = 'skill_map___skills___sys___type',
  skill_map___skills___sys___revision = 'skill_map___skills___sys___revision',
  skill_map___skills___oss = 'skill_map___skills___oss',
  skill_map___skills___oss___contentful_id = 'skill_map___skills___oss___contentful_id',
  skill_map___skills___oss___id = 'skill_map___skills___oss___id',
  skill_map___skills___oss___node_locale = 'skill_map___skills___oss___node_locale',
  skill_map___skills___oss___name = 'skill_map___skills___oss___name',
  skill_map___skills___oss___slug = 'skill_map___skills___oss___slug',
  skill_map___skills___oss___startDate = 'skill_map___skills___oss___startDate',
  skill_map___skills___oss___during = 'skill_map___skills___oss___during',
  skill_map___skills___oss___comment = 'skill_map___skills___oss___comment',
  skill_map___skills___oss___siteUrl = 'skill_map___skills___oss___siteUrl',
  skill_map___skills___oss___sourceUrl = 'skill_map___skills___oss___sourceUrl',
  skill_map___skills___oss___roles = 'skill_map___skills___oss___roles',
  skill_map___skills___oss___assigns = 'skill_map___skills___oss___assigns',
  skill_map___skills___oss___systems = 'skill_map___skills___oss___systems',
  skill_map___skills___oss___languages = 'skill_map___skills___oss___languages',
  skill_map___skills___oss___tools = 'skill_map___skills___oss___tools',
  skill_map___skills___oss___spaceId = 'skill_map___skills___oss___spaceId',
  skill_map___skills___oss___createdAt = 'skill_map___skills___oss___createdAt',
  skill_map___skills___oss___updatedAt = 'skill_map___skills___oss___updatedAt',
  skill_map___skills___oss___children = 'skill_map___skills___oss___children',
  skill_map___skills___skill_map = 'skill_map___skills___skill_map',
  skill_map___skills___skill_map___contentful_id = 'skill_map___skills___skill_map___contentful_id',
  skill_map___skills___skill_map___id = 'skill_map___skills___skill_map___id',
  skill_map___skills___skill_map___node_locale = 'skill_map___skills___skill_map___node_locale',
  skill_map___skills___skill_map___sort = 'skill_map___skills___skill_map___sort',
  skill_map___skills___skill_map___name = 'skill_map___skills___skill_map___name',
  skill_map___skills___skill_map___expanded = 'skill_map___skills___skill_map___expanded',
  skill_map___skills___skill_map___skills = 'skill_map___skills___skill_map___skills',
  skill_map___skills___skill_map___spaceId = 'skill_map___skills___skill_map___spaceId',
  skill_map___skills___skill_map___createdAt = 'skill_map___skills___skill_map___createdAt',
  skill_map___skills___skill_map___updatedAt = 'skill_map___skills___skill_map___updatedAt',
  skill_map___skills___skill_map___children = 'skill_map___skills___skill_map___children',
  skill_map___skills___parent___id = 'skill_map___skills___parent___id',
  skill_map___skills___parent___children = 'skill_map___skills___parent___children',
  skill_map___skills___children = 'skill_map___skills___children',
  skill_map___skills___children___id = 'skill_map___skills___children___id',
  skill_map___skills___children___children = 'skill_map___skills___children___children',
  skill_map___skills___internal___content = 'skill_map___skills___internal___content',
  skill_map___skills___internal___contentDigest = 'skill_map___skills___internal___contentDigest',
  skill_map___skills___internal___description = 'skill_map___skills___internal___description',
  skill_map___skills___internal___fieldOwners = 'skill_map___skills___internal___fieldOwners',
  skill_map___skills___internal___ignoreType = 'skill_map___skills___internal___ignoreType',
  skill_map___skills___internal___mediaType = 'skill_map___skills___internal___mediaType',
  skill_map___skills___internal___owner = 'skill_map___skills___internal___owner',
  skill_map___skills___internal___type = 'skill_map___skills___internal___type',
  skill_map___spaceId = 'skill_map___spaceId',
  skill_map___createdAt = 'skill_map___createdAt',
  skill_map___updatedAt = 'skill_map___updatedAt',
  skill_map___sys___type = 'skill_map___sys___type',
  skill_map___sys___revision = 'skill_map___sys___revision',
  skill_map___parent___id = 'skill_map___parent___id',
  skill_map___parent___parent___id = 'skill_map___parent___parent___id',
  skill_map___parent___parent___children = 'skill_map___parent___parent___children',
  skill_map___parent___children = 'skill_map___parent___children',
  skill_map___parent___children___id = 'skill_map___parent___children___id',
  skill_map___parent___children___children = 'skill_map___parent___children___children',
  skill_map___parent___internal___content = 'skill_map___parent___internal___content',
  skill_map___parent___internal___contentDigest = 'skill_map___parent___internal___contentDigest',
  skill_map___parent___internal___description = 'skill_map___parent___internal___description',
  skill_map___parent___internal___fieldOwners = 'skill_map___parent___internal___fieldOwners',
  skill_map___parent___internal___ignoreType = 'skill_map___parent___internal___ignoreType',
  skill_map___parent___internal___mediaType = 'skill_map___parent___internal___mediaType',
  skill_map___parent___internal___owner = 'skill_map___parent___internal___owner',
  skill_map___parent___internal___type = 'skill_map___parent___internal___type',
  skill_map___children = 'skill_map___children',
  skill_map___children___id = 'skill_map___children___id',
  skill_map___children___parent___id = 'skill_map___children___parent___id',
  skill_map___children___parent___children = 'skill_map___children___parent___children',
  skill_map___children___children = 'skill_map___children___children',
  skill_map___children___children___id = 'skill_map___children___children___id',
  skill_map___children___children___children = 'skill_map___children___children___children',
  skill_map___children___internal___content = 'skill_map___children___internal___content',
  skill_map___children___internal___contentDigest = 'skill_map___children___internal___contentDigest',
  skill_map___children___internal___description = 'skill_map___children___internal___description',
  skill_map___children___internal___fieldOwners = 'skill_map___children___internal___fieldOwners',
  skill_map___children___internal___ignoreType = 'skill_map___children___internal___ignoreType',
  skill_map___children___internal___mediaType = 'skill_map___children___internal___mediaType',
  skill_map___children___internal___owner = 'skill_map___children___internal___owner',
  skill_map___children___internal___type = 'skill_map___children___internal___type',
  skill_map___internal___content = 'skill_map___internal___content',
  skill_map___internal___contentDigest = 'skill_map___internal___contentDigest',
  skill_map___internal___description = 'skill_map___internal___description',
  skill_map___internal___fieldOwners = 'skill_map___internal___fieldOwners',
  skill_map___internal___ignoreType = 'skill_map___internal___ignoreType',
  skill_map___internal___mediaType = 'skill_map___internal___mediaType',
  skill_map___internal___owner = 'skill_map___internal___owner',
  skill_map___internal___type = 'skill_map___internal___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulSkillFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  level?: Maybe<IntQueryOperatorInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillSysFilterInput>;
  oss?: Maybe<ContentfulOssFilterListInput>;
  skill_map?: Maybe<ContentfulSkillMapFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulSkillFilterListInput = {
  elemMatch?: Maybe<ContentfulSkillFilterInput>;
};

export type ContentfulSkillGroupConnection = {
  __typename?: 'ContentfulSkillGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillEdge>;
  nodes: Array<ContentfulSkill>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMap = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulSkillMap';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  expanded?: Maybe<Scalars['Boolean']>;
  skills?: Maybe<Array<Maybe<ContentfulSkill>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSkillMapSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSkillMapCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSkillMapUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapConnection = {
  __typename?: 'ContentfulSkillMapConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillMapEdge>;
  nodes: Array<ContentfulSkillMap>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSkillMapGroupConnection>;
};


export type ContentfulSkillMapConnectionDistinctArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSkillMapFieldsEnum;
};

export type ContentfulSkillMapEdge = {
  __typename?: 'ContentfulSkillMapEdge';
  next?: Maybe<ContentfulSkillMap>;
  node: ContentfulSkillMap;
  previous?: Maybe<ContentfulSkillMap>;
};

export enum ContentfulSkillMapFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  sort = 'sort',
  name = 'name',
  expanded = 'expanded',
  skills = 'skills',
  skills___contentful_id = 'skills___contentful_id',
  skills___id = 'skills___id',
  skills___node_locale = 'skills___node_locale',
  skills___name = 'skills___name',
  skills___level = 'skills___level',
  skills___project = 'skills___project',
  skills___project___contentful_id = 'skills___project___contentful_id',
  skills___project___id = 'skills___project___id',
  skills___project___node_locale = 'skills___project___node_locale',
  skills___project___name = 'skills___project___name',
  skills___project___startDate = 'skills___project___startDate',
  skills___project___during = 'skills___project___during',
  skills___project___comment = 'skills___project___comment',
  skills___project___roles = 'skills___project___roles',
  skills___project___roles___contentful_id = 'skills___project___roles___contentful_id',
  skills___project___roles___id = 'skills___project___roles___id',
  skills___project___roles___node_locale = 'skills___project___roles___node_locale',
  skills___project___roles___name = 'skills___project___roles___name',
  skills___project___roles___project = 'skills___project___roles___project',
  skills___project___roles___oss = 'skills___project___roles___oss',
  skills___project___roles___spaceId = 'skills___project___roles___spaceId',
  skills___project___roles___createdAt = 'skills___project___roles___createdAt',
  skills___project___roles___updatedAt = 'skills___project___roles___updatedAt',
  skills___project___roles___children = 'skills___project___roles___children',
  skills___project___assigns = 'skills___project___assigns',
  skills___project___assigns___contentful_id = 'skills___project___assigns___contentful_id',
  skills___project___assigns___id = 'skills___project___assigns___id',
  skills___project___assigns___node_locale = 'skills___project___assigns___node_locale',
  skills___project___assigns___name = 'skills___project___assigns___name',
  skills___project___assigns___oss = 'skills___project___assigns___oss',
  skills___project___assigns___spaceId = 'skills___project___assigns___spaceId',
  skills___project___assigns___createdAt = 'skills___project___assigns___createdAt',
  skills___project___assigns___updatedAt = 'skills___project___assigns___updatedAt',
  skills___project___assigns___project = 'skills___project___assigns___project',
  skills___project___assigns___children = 'skills___project___assigns___children',
  skills___project___systems = 'skills___project___systems',
  skills___project___systems___contentful_id = 'skills___project___systems___contentful_id',
  skills___project___systems___id = 'skills___project___systems___id',
  skills___project___systems___node_locale = 'skills___project___systems___node_locale',
  skills___project___systems___name = 'skills___project___systems___name',
  skills___project___systems___level = 'skills___project___systems___level',
  skills___project___systems___project = 'skills___project___systems___project',
  skills___project___systems___spaceId = 'skills___project___systems___spaceId',
  skills___project___systems___createdAt = 'skills___project___systems___createdAt',
  skills___project___systems___updatedAt = 'skills___project___systems___updatedAt',
  skills___project___systems___oss = 'skills___project___systems___oss',
  skills___project___systems___skill_map = 'skills___project___systems___skill_map',
  skills___project___systems___children = 'skills___project___systems___children',
  skills___project___languages = 'skills___project___languages',
  skills___project___languages___contentful_id = 'skills___project___languages___contentful_id',
  skills___project___languages___id = 'skills___project___languages___id',
  skills___project___languages___node_locale = 'skills___project___languages___node_locale',
  skills___project___languages___name = 'skills___project___languages___name',
  skills___project___languages___level = 'skills___project___languages___level',
  skills___project___languages___project = 'skills___project___languages___project',
  skills___project___languages___spaceId = 'skills___project___languages___spaceId',
  skills___project___languages___createdAt = 'skills___project___languages___createdAt',
  skills___project___languages___updatedAt = 'skills___project___languages___updatedAt',
  skills___project___languages___oss = 'skills___project___languages___oss',
  skills___project___languages___skill_map = 'skills___project___languages___skill_map',
  skills___project___languages___children = 'skills___project___languages___children',
  skills___project___tools = 'skills___project___tools',
  skills___project___tools___contentful_id = 'skills___project___tools___contentful_id',
  skills___project___tools___id = 'skills___project___tools___id',
  skills___project___tools___node_locale = 'skills___project___tools___node_locale',
  skills___project___tools___name = 'skills___project___tools___name',
  skills___project___tools___level = 'skills___project___tools___level',
  skills___project___tools___project = 'skills___project___tools___project',
  skills___project___tools___spaceId = 'skills___project___tools___spaceId',
  skills___project___tools___createdAt = 'skills___project___tools___createdAt',
  skills___project___tools___updatedAt = 'skills___project___tools___updatedAt',
  skills___project___tools___oss = 'skills___project___tools___oss',
  skills___project___tools___skill_map = 'skills___project___tools___skill_map',
  skills___project___tools___children = 'skills___project___tools___children',
  skills___project___icon___contentful_id = 'skills___project___icon___contentful_id',
  skills___project___icon___id = 'skills___project___icon___id',
  skills___project___icon___node_locale = 'skills___project___icon___node_locale',
  skills___project___icon___title = 'skills___project___icon___title',
  skills___project___icon___history = 'skills___project___icon___history',
  skills___project___icon___spaceId = 'skills___project___icon___spaceId',
  skills___project___icon___createdAt = 'skills___project___icon___createdAt',
  skills___project___icon___updatedAt = 'skills___project___icon___updatedAt',
  skills___project___icon___what_i_can_do = 'skills___project___icon___what_i_can_do',
  skills___project___icon___project = 'skills___project___icon___project',
  skills___project___icon___contact = 'skills___project___icon___contact',
  skills___project___icon___children = 'skills___project___icon___children',
  skills___project___spaceId = 'skills___project___spaceId',
  skills___project___createdAt = 'skills___project___createdAt',
  skills___project___updatedAt = 'skills___project___updatedAt',
  skills___project___sys___type = 'skills___project___sys___type',
  skills___project___sys___revision = 'skills___project___sys___revision',
  skills___project___parent___id = 'skills___project___parent___id',
  skills___project___parent___children = 'skills___project___parent___children',
  skills___project___children = 'skills___project___children',
  skills___project___children___id = 'skills___project___children___id',
  skills___project___children___children = 'skills___project___children___children',
  skills___project___internal___content = 'skills___project___internal___content',
  skills___project___internal___contentDigest = 'skills___project___internal___contentDigest',
  skills___project___internal___description = 'skills___project___internal___description',
  skills___project___internal___fieldOwners = 'skills___project___internal___fieldOwners',
  skills___project___internal___ignoreType = 'skills___project___internal___ignoreType',
  skills___project___internal___mediaType = 'skills___project___internal___mediaType',
  skills___project___internal___owner = 'skills___project___internal___owner',
  skills___project___internal___type = 'skills___project___internal___type',
  skills___spaceId = 'skills___spaceId',
  skills___createdAt = 'skills___createdAt',
  skills___updatedAt = 'skills___updatedAt',
  skills___sys___type = 'skills___sys___type',
  skills___sys___revision = 'skills___sys___revision',
  skills___oss = 'skills___oss',
  skills___oss___contentful_id = 'skills___oss___contentful_id',
  skills___oss___id = 'skills___oss___id',
  skills___oss___node_locale = 'skills___oss___node_locale',
  skills___oss___name = 'skills___oss___name',
  skills___oss___slug = 'skills___oss___slug',
  skills___oss___startDate = 'skills___oss___startDate',
  skills___oss___during = 'skills___oss___during',
  skills___oss___comment = 'skills___oss___comment',
  skills___oss___siteUrl = 'skills___oss___siteUrl',
  skills___oss___sourceUrl = 'skills___oss___sourceUrl',
  skills___oss___mainImage___contentful_id = 'skills___oss___mainImage___contentful_id',
  skills___oss___mainImage___id = 'skills___oss___mainImage___id',
  skills___oss___mainImage___spaceId = 'skills___oss___mainImage___spaceId',
  skills___oss___mainImage___createdAt = 'skills___oss___mainImage___createdAt',
  skills___oss___mainImage___updatedAt = 'skills___oss___mainImage___updatedAt',
  skills___oss___mainImage___title = 'skills___oss___mainImage___title',
  skills___oss___mainImage___description = 'skills___oss___mainImage___description',
  skills___oss___mainImage___node_locale = 'skills___oss___mainImage___node_locale',
  skills___oss___mainImage___children = 'skills___oss___mainImage___children',
  skills___oss___roles = 'skills___oss___roles',
  skills___oss___roles___contentful_id = 'skills___oss___roles___contentful_id',
  skills___oss___roles___id = 'skills___oss___roles___id',
  skills___oss___roles___node_locale = 'skills___oss___roles___node_locale',
  skills___oss___roles___name = 'skills___oss___roles___name',
  skills___oss___roles___project = 'skills___oss___roles___project',
  skills___oss___roles___oss = 'skills___oss___roles___oss',
  skills___oss___roles___spaceId = 'skills___oss___roles___spaceId',
  skills___oss___roles___createdAt = 'skills___oss___roles___createdAt',
  skills___oss___roles___updatedAt = 'skills___oss___roles___updatedAt',
  skills___oss___roles___children = 'skills___oss___roles___children',
  skills___oss___assigns = 'skills___oss___assigns',
  skills___oss___assigns___contentful_id = 'skills___oss___assigns___contentful_id',
  skills___oss___assigns___id = 'skills___oss___assigns___id',
  skills___oss___assigns___node_locale = 'skills___oss___assigns___node_locale',
  skills___oss___assigns___name = 'skills___oss___assigns___name',
  skills___oss___assigns___oss = 'skills___oss___assigns___oss',
  skills___oss___assigns___spaceId = 'skills___oss___assigns___spaceId',
  skills___oss___assigns___createdAt = 'skills___oss___assigns___createdAt',
  skills___oss___assigns___updatedAt = 'skills___oss___assigns___updatedAt',
  skills___oss___assigns___project = 'skills___oss___assigns___project',
  skills___oss___assigns___children = 'skills___oss___assigns___children',
  skills___oss___systems = 'skills___oss___systems',
  skills___oss___systems___contentful_id = 'skills___oss___systems___contentful_id',
  skills___oss___systems___id = 'skills___oss___systems___id',
  skills___oss___systems___node_locale = 'skills___oss___systems___node_locale',
  skills___oss___systems___name = 'skills___oss___systems___name',
  skills___oss___systems___level = 'skills___oss___systems___level',
  skills___oss___systems___project = 'skills___oss___systems___project',
  skills___oss___systems___spaceId = 'skills___oss___systems___spaceId',
  skills___oss___systems___createdAt = 'skills___oss___systems___createdAt',
  skills___oss___systems___updatedAt = 'skills___oss___systems___updatedAt',
  skills___oss___systems___oss = 'skills___oss___systems___oss',
  skills___oss___systems___skill_map = 'skills___oss___systems___skill_map',
  skills___oss___systems___children = 'skills___oss___systems___children',
  skills___oss___languages = 'skills___oss___languages',
  skills___oss___languages___contentful_id = 'skills___oss___languages___contentful_id',
  skills___oss___languages___id = 'skills___oss___languages___id',
  skills___oss___languages___node_locale = 'skills___oss___languages___node_locale',
  skills___oss___languages___name = 'skills___oss___languages___name',
  skills___oss___languages___level = 'skills___oss___languages___level',
  skills___oss___languages___project = 'skills___oss___languages___project',
  skills___oss___languages___spaceId = 'skills___oss___languages___spaceId',
  skills___oss___languages___createdAt = 'skills___oss___languages___createdAt',
  skills___oss___languages___updatedAt = 'skills___oss___languages___updatedAt',
  skills___oss___languages___oss = 'skills___oss___languages___oss',
  skills___oss___languages___skill_map = 'skills___oss___languages___skill_map',
  skills___oss___languages___children = 'skills___oss___languages___children',
  skills___oss___tools = 'skills___oss___tools',
  skills___oss___tools___contentful_id = 'skills___oss___tools___contentful_id',
  skills___oss___tools___id = 'skills___oss___tools___id',
  skills___oss___tools___node_locale = 'skills___oss___tools___node_locale',
  skills___oss___tools___name = 'skills___oss___tools___name',
  skills___oss___tools___level = 'skills___oss___tools___level',
  skills___oss___tools___project = 'skills___oss___tools___project',
  skills___oss___tools___spaceId = 'skills___oss___tools___spaceId',
  skills___oss___tools___createdAt = 'skills___oss___tools___createdAt',
  skills___oss___tools___updatedAt = 'skills___oss___tools___updatedAt',
  skills___oss___tools___oss = 'skills___oss___tools___oss',
  skills___oss___tools___skill_map = 'skills___oss___tools___skill_map',
  skills___oss___tools___children = 'skills___oss___tools___children',
  skills___oss___spaceId = 'skills___oss___spaceId',
  skills___oss___createdAt = 'skills___oss___createdAt',
  skills___oss___updatedAt = 'skills___oss___updatedAt',
  skills___oss___sys___type = 'skills___oss___sys___type',
  skills___oss___sys___revision = 'skills___oss___sys___revision',
  skills___oss___parent___id = 'skills___oss___parent___id',
  skills___oss___parent___children = 'skills___oss___parent___children',
  skills___oss___children = 'skills___oss___children',
  skills___oss___children___id = 'skills___oss___children___id',
  skills___oss___children___children = 'skills___oss___children___children',
  skills___oss___internal___content = 'skills___oss___internal___content',
  skills___oss___internal___contentDigest = 'skills___oss___internal___contentDigest',
  skills___oss___internal___description = 'skills___oss___internal___description',
  skills___oss___internal___fieldOwners = 'skills___oss___internal___fieldOwners',
  skills___oss___internal___ignoreType = 'skills___oss___internal___ignoreType',
  skills___oss___internal___mediaType = 'skills___oss___internal___mediaType',
  skills___oss___internal___owner = 'skills___oss___internal___owner',
  skills___oss___internal___type = 'skills___oss___internal___type',
  skills___skill_map = 'skills___skill_map',
  skills___skill_map___contentful_id = 'skills___skill_map___contentful_id',
  skills___skill_map___id = 'skills___skill_map___id',
  skills___skill_map___node_locale = 'skills___skill_map___node_locale',
  skills___skill_map___sort = 'skills___skill_map___sort',
  skills___skill_map___name = 'skills___skill_map___name',
  skills___skill_map___expanded = 'skills___skill_map___expanded',
  skills___skill_map___skills = 'skills___skill_map___skills',
  skills___skill_map___skills___contentful_id = 'skills___skill_map___skills___contentful_id',
  skills___skill_map___skills___id = 'skills___skill_map___skills___id',
  skills___skill_map___skills___node_locale = 'skills___skill_map___skills___node_locale',
  skills___skill_map___skills___name = 'skills___skill_map___skills___name',
  skills___skill_map___skills___level = 'skills___skill_map___skills___level',
  skills___skill_map___skills___project = 'skills___skill_map___skills___project',
  skills___skill_map___skills___spaceId = 'skills___skill_map___skills___spaceId',
  skills___skill_map___skills___createdAt = 'skills___skill_map___skills___createdAt',
  skills___skill_map___skills___updatedAt = 'skills___skill_map___skills___updatedAt',
  skills___skill_map___skills___oss = 'skills___skill_map___skills___oss',
  skills___skill_map___skills___skill_map = 'skills___skill_map___skills___skill_map',
  skills___skill_map___skills___children = 'skills___skill_map___skills___children',
  skills___skill_map___spaceId = 'skills___skill_map___spaceId',
  skills___skill_map___createdAt = 'skills___skill_map___createdAt',
  skills___skill_map___updatedAt = 'skills___skill_map___updatedAt',
  skills___skill_map___sys___type = 'skills___skill_map___sys___type',
  skills___skill_map___sys___revision = 'skills___skill_map___sys___revision',
  skills___skill_map___parent___id = 'skills___skill_map___parent___id',
  skills___skill_map___parent___children = 'skills___skill_map___parent___children',
  skills___skill_map___children = 'skills___skill_map___children',
  skills___skill_map___children___id = 'skills___skill_map___children___id',
  skills___skill_map___children___children = 'skills___skill_map___children___children',
  skills___skill_map___internal___content = 'skills___skill_map___internal___content',
  skills___skill_map___internal___contentDigest = 'skills___skill_map___internal___contentDigest',
  skills___skill_map___internal___description = 'skills___skill_map___internal___description',
  skills___skill_map___internal___fieldOwners = 'skills___skill_map___internal___fieldOwners',
  skills___skill_map___internal___ignoreType = 'skills___skill_map___internal___ignoreType',
  skills___skill_map___internal___mediaType = 'skills___skill_map___internal___mediaType',
  skills___skill_map___internal___owner = 'skills___skill_map___internal___owner',
  skills___skill_map___internal___type = 'skills___skill_map___internal___type',
  skills___parent___id = 'skills___parent___id',
  skills___parent___parent___id = 'skills___parent___parent___id',
  skills___parent___parent___children = 'skills___parent___parent___children',
  skills___parent___children = 'skills___parent___children',
  skills___parent___children___id = 'skills___parent___children___id',
  skills___parent___children___children = 'skills___parent___children___children',
  skills___parent___internal___content = 'skills___parent___internal___content',
  skills___parent___internal___contentDigest = 'skills___parent___internal___contentDigest',
  skills___parent___internal___description = 'skills___parent___internal___description',
  skills___parent___internal___fieldOwners = 'skills___parent___internal___fieldOwners',
  skills___parent___internal___ignoreType = 'skills___parent___internal___ignoreType',
  skills___parent___internal___mediaType = 'skills___parent___internal___mediaType',
  skills___parent___internal___owner = 'skills___parent___internal___owner',
  skills___parent___internal___type = 'skills___parent___internal___type',
  skills___children = 'skills___children',
  skills___children___id = 'skills___children___id',
  skills___children___parent___id = 'skills___children___parent___id',
  skills___children___parent___children = 'skills___children___parent___children',
  skills___children___children = 'skills___children___children',
  skills___children___children___id = 'skills___children___children___id',
  skills___children___children___children = 'skills___children___children___children',
  skills___children___internal___content = 'skills___children___internal___content',
  skills___children___internal___contentDigest = 'skills___children___internal___contentDigest',
  skills___children___internal___description = 'skills___children___internal___description',
  skills___children___internal___fieldOwners = 'skills___children___internal___fieldOwners',
  skills___children___internal___ignoreType = 'skills___children___internal___ignoreType',
  skills___children___internal___mediaType = 'skills___children___internal___mediaType',
  skills___children___internal___owner = 'skills___children___internal___owner',
  skills___children___internal___type = 'skills___children___internal___type',
  skills___internal___content = 'skills___internal___content',
  skills___internal___contentDigest = 'skills___internal___contentDigest',
  skills___internal___description = 'skills___internal___description',
  skills___internal___fieldOwners = 'skills___internal___fieldOwners',
  skills___internal___ignoreType = 'skills___internal___ignoreType',
  skills___internal___mediaType = 'skills___internal___mediaType',
  skills___internal___owner = 'skills___internal___owner',
  skills___internal___type = 'skills___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulSkillMapFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sort?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  expanded?: Maybe<BooleanQueryOperatorInput>;
  skills?: Maybe<ContentfulSkillFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillMapSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulSkillMapFilterListInput = {
  elemMatch?: Maybe<ContentfulSkillMapFilterInput>;
};

export type ContentfulSkillMapGroupConnection = {
  __typename?: 'ContentfulSkillMapGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillMapEdge>;
  nodes: Array<ContentfulSkillMap>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSkillMapFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSkillMapSys = {
  __typename?: 'ContentfulSkillMapSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSkillMapSysContentType>;
};

export type ContentfulSkillMapSysContentType = {
  __typename?: 'ContentfulSkillMapSysContentType';
  sys?: Maybe<ContentfulSkillMapSysContentTypeSys>;
};

export type ContentfulSkillMapSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSkillMapSysContentTypeSysFilterInput>;
};

export type ContentfulSkillMapSysContentTypeSys = {
  __typename?: 'ContentfulSkillMapSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSkillMapSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSkillMapSysContentTypeFilterInput>;
};

export type ContentfulSkillSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSkillFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSkillSys = {
  __typename?: 'ContentfulSkillSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSkillSysContentType>;
};

export type ContentfulSkillSysContentType = {
  __typename?: 'ContentfulSkillSysContentType';
  sys?: Maybe<ContentfulSkillSysContentTypeSys>;
};

export type ContentfulSkillSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSkillSysContentTypeSysFilterInput>;
};

export type ContentfulSkillSysContentTypeSys = {
  __typename?: 'ContentfulSkillSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulSkillSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSkillSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSkillSysContentTypeFilterInput>;
};

export type ContentfulWhatICanDo = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulWhatICanDo';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  icon?: Maybe<ContentfulIcon>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulWhatICanDoSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulWhatICanDoCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulWhatICanDoUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoConnection = {
  __typename?: 'ContentfulWhatICanDoConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWhatICanDoEdge>;
  nodes: Array<ContentfulWhatICanDo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulWhatICanDoGroupConnection>;
};


export type ContentfulWhatICanDoConnectionDistinctArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulWhatICanDoFieldsEnum;
};

export type ContentfulWhatICanDoEdge = {
  __typename?: 'ContentfulWhatICanDoEdge';
  next?: Maybe<ContentfulWhatICanDo>;
  node: ContentfulWhatICanDo;
  previous?: Maybe<ContentfulWhatICanDo>;
};

export enum ContentfulWhatICanDoFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  sort = 'sort',
  title = 'title',
  message = 'message',
  icon___contentful_id = 'icon___contentful_id',
  icon___id = 'icon___id',
  icon___node_locale = 'icon___node_locale',
  icon___title = 'icon___title',
  icon___history = 'icon___history',
  icon___history___contentful_id = 'icon___history___contentful_id',
  icon___history___id = 'icon___history___id',
  icon___history___node_locale = 'icon___history___node_locale',
  icon___history___date = 'icon___history___date',
  icon___history___title = 'icon___history___title',
  icon___history___subheader = 'icon___history___subheader',
  icon___history___icon___contentful_id = 'icon___history___icon___contentful_id',
  icon___history___icon___id = 'icon___history___icon___id',
  icon___history___icon___node_locale = 'icon___history___icon___node_locale',
  icon___history___icon___title = 'icon___history___icon___title',
  icon___history___icon___history = 'icon___history___icon___history',
  icon___history___icon___spaceId = 'icon___history___icon___spaceId',
  icon___history___icon___createdAt = 'icon___history___icon___createdAt',
  icon___history___icon___updatedAt = 'icon___history___icon___updatedAt',
  icon___history___icon___what_i_can_do = 'icon___history___icon___what_i_can_do',
  icon___history___icon___project = 'icon___history___icon___project',
  icon___history___icon___contact = 'icon___history___icon___contact',
  icon___history___icon___children = 'icon___history___icon___children',
  icon___history___spaceId = 'icon___history___spaceId',
  icon___history___createdAt = 'icon___history___createdAt',
  icon___history___updatedAt = 'icon___history___updatedAt',
  icon___history___sys___type = 'icon___history___sys___type',
  icon___history___sys___revision = 'icon___history___sys___revision',
  icon___history___parent___id = 'icon___history___parent___id',
  icon___history___parent___children = 'icon___history___parent___children',
  icon___history___children = 'icon___history___children',
  icon___history___children___id = 'icon___history___children___id',
  icon___history___children___children = 'icon___history___children___children',
  icon___history___internal___content = 'icon___history___internal___content',
  icon___history___internal___contentDigest = 'icon___history___internal___contentDigest',
  icon___history___internal___description = 'icon___history___internal___description',
  icon___history___internal___fieldOwners = 'icon___history___internal___fieldOwners',
  icon___history___internal___ignoreType = 'icon___history___internal___ignoreType',
  icon___history___internal___mediaType = 'icon___history___internal___mediaType',
  icon___history___internal___owner = 'icon___history___internal___owner',
  icon___history___internal___type = 'icon___history___internal___type',
  icon___contents___id = 'icon___contents___id',
  icon___contents___parent___id = 'icon___contents___parent___id',
  icon___contents___parent___children = 'icon___contents___parent___children',
  icon___contents___children = 'icon___contents___children',
  icon___contents___children___id = 'icon___contents___children___id',
  icon___contents___children___children = 'icon___contents___children___children',
  icon___contents___internal___content = 'icon___contents___internal___content',
  icon___contents___internal___contentDigest = 'icon___contents___internal___contentDigest',
  icon___contents___internal___description = 'icon___contents___internal___description',
  icon___contents___internal___fieldOwners = 'icon___contents___internal___fieldOwners',
  icon___contents___internal___ignoreType = 'icon___contents___internal___ignoreType',
  icon___contents___internal___mediaType = 'icon___contents___internal___mediaType',
  icon___contents___internal___owner = 'icon___contents___internal___owner',
  icon___contents___internal___type = 'icon___contents___internal___type',
  icon___contents___contents = 'icon___contents___contents',
  icon___contents___sys___type = 'icon___contents___sys___type',
  icon___spaceId = 'icon___spaceId',
  icon___createdAt = 'icon___createdAt',
  icon___updatedAt = 'icon___updatedAt',
  icon___sys___type = 'icon___sys___type',
  icon___sys___revision = 'icon___sys___revision',
  icon___what_i_can_do = 'icon___what_i_can_do',
  icon___what_i_can_do___contentful_id = 'icon___what_i_can_do___contentful_id',
  icon___what_i_can_do___id = 'icon___what_i_can_do___id',
  icon___what_i_can_do___node_locale = 'icon___what_i_can_do___node_locale',
  icon___what_i_can_do___sort = 'icon___what_i_can_do___sort',
  icon___what_i_can_do___title = 'icon___what_i_can_do___title',
  icon___what_i_can_do___message = 'icon___what_i_can_do___message',
  icon___what_i_can_do___icon___contentful_id = 'icon___what_i_can_do___icon___contentful_id',
  icon___what_i_can_do___icon___id = 'icon___what_i_can_do___icon___id',
  icon___what_i_can_do___icon___node_locale = 'icon___what_i_can_do___icon___node_locale',
  icon___what_i_can_do___icon___title = 'icon___what_i_can_do___icon___title',
  icon___what_i_can_do___icon___history = 'icon___what_i_can_do___icon___history',
  icon___what_i_can_do___icon___spaceId = 'icon___what_i_can_do___icon___spaceId',
  icon___what_i_can_do___icon___createdAt = 'icon___what_i_can_do___icon___createdAt',
  icon___what_i_can_do___icon___updatedAt = 'icon___what_i_can_do___icon___updatedAt',
  icon___what_i_can_do___icon___what_i_can_do = 'icon___what_i_can_do___icon___what_i_can_do',
  icon___what_i_can_do___icon___project = 'icon___what_i_can_do___icon___project',
  icon___what_i_can_do___icon___contact = 'icon___what_i_can_do___icon___contact',
  icon___what_i_can_do___icon___children = 'icon___what_i_can_do___icon___children',
  icon___what_i_can_do___spaceId = 'icon___what_i_can_do___spaceId',
  icon___what_i_can_do___createdAt = 'icon___what_i_can_do___createdAt',
  icon___what_i_can_do___updatedAt = 'icon___what_i_can_do___updatedAt',
  icon___what_i_can_do___sys___type = 'icon___what_i_can_do___sys___type',
  icon___what_i_can_do___sys___revision = 'icon___what_i_can_do___sys___revision',
  icon___what_i_can_do___parent___id = 'icon___what_i_can_do___parent___id',
  icon___what_i_can_do___parent___children = 'icon___what_i_can_do___parent___children',
  icon___what_i_can_do___children = 'icon___what_i_can_do___children',
  icon___what_i_can_do___children___id = 'icon___what_i_can_do___children___id',
  icon___what_i_can_do___children___children = 'icon___what_i_can_do___children___children',
  icon___what_i_can_do___internal___content = 'icon___what_i_can_do___internal___content',
  icon___what_i_can_do___internal___contentDigest = 'icon___what_i_can_do___internal___contentDigest',
  icon___what_i_can_do___internal___description = 'icon___what_i_can_do___internal___description',
  icon___what_i_can_do___internal___fieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  icon___what_i_can_do___internal___ignoreType = 'icon___what_i_can_do___internal___ignoreType',
  icon___what_i_can_do___internal___mediaType = 'icon___what_i_can_do___internal___mediaType',
  icon___what_i_can_do___internal___owner = 'icon___what_i_can_do___internal___owner',
  icon___what_i_can_do___internal___type = 'icon___what_i_can_do___internal___type',
  icon___project = 'icon___project',
  icon___project___contentful_id = 'icon___project___contentful_id',
  icon___project___id = 'icon___project___id',
  icon___project___node_locale = 'icon___project___node_locale',
  icon___project___name = 'icon___project___name',
  icon___project___startDate = 'icon___project___startDate',
  icon___project___during = 'icon___project___during',
  icon___project___comment = 'icon___project___comment',
  icon___project___roles = 'icon___project___roles',
  icon___project___roles___contentful_id = 'icon___project___roles___contentful_id',
  icon___project___roles___id = 'icon___project___roles___id',
  icon___project___roles___node_locale = 'icon___project___roles___node_locale',
  icon___project___roles___name = 'icon___project___roles___name',
  icon___project___roles___project = 'icon___project___roles___project',
  icon___project___roles___oss = 'icon___project___roles___oss',
  icon___project___roles___spaceId = 'icon___project___roles___spaceId',
  icon___project___roles___createdAt = 'icon___project___roles___createdAt',
  icon___project___roles___updatedAt = 'icon___project___roles___updatedAt',
  icon___project___roles___children = 'icon___project___roles___children',
  icon___project___assigns = 'icon___project___assigns',
  icon___project___assigns___contentful_id = 'icon___project___assigns___contentful_id',
  icon___project___assigns___id = 'icon___project___assigns___id',
  icon___project___assigns___node_locale = 'icon___project___assigns___node_locale',
  icon___project___assigns___name = 'icon___project___assigns___name',
  icon___project___assigns___oss = 'icon___project___assigns___oss',
  icon___project___assigns___spaceId = 'icon___project___assigns___spaceId',
  icon___project___assigns___createdAt = 'icon___project___assigns___createdAt',
  icon___project___assigns___updatedAt = 'icon___project___assigns___updatedAt',
  icon___project___assigns___project = 'icon___project___assigns___project',
  icon___project___assigns___children = 'icon___project___assigns___children',
  icon___project___systems = 'icon___project___systems',
  icon___project___systems___contentful_id = 'icon___project___systems___contentful_id',
  icon___project___systems___id = 'icon___project___systems___id',
  icon___project___systems___node_locale = 'icon___project___systems___node_locale',
  icon___project___systems___name = 'icon___project___systems___name',
  icon___project___systems___level = 'icon___project___systems___level',
  icon___project___systems___project = 'icon___project___systems___project',
  icon___project___systems___spaceId = 'icon___project___systems___spaceId',
  icon___project___systems___createdAt = 'icon___project___systems___createdAt',
  icon___project___systems___updatedAt = 'icon___project___systems___updatedAt',
  icon___project___systems___oss = 'icon___project___systems___oss',
  icon___project___systems___skill_map = 'icon___project___systems___skill_map',
  icon___project___systems___children = 'icon___project___systems___children',
  icon___project___languages = 'icon___project___languages',
  icon___project___languages___contentful_id = 'icon___project___languages___contentful_id',
  icon___project___languages___id = 'icon___project___languages___id',
  icon___project___languages___node_locale = 'icon___project___languages___node_locale',
  icon___project___languages___name = 'icon___project___languages___name',
  icon___project___languages___level = 'icon___project___languages___level',
  icon___project___languages___project = 'icon___project___languages___project',
  icon___project___languages___spaceId = 'icon___project___languages___spaceId',
  icon___project___languages___createdAt = 'icon___project___languages___createdAt',
  icon___project___languages___updatedAt = 'icon___project___languages___updatedAt',
  icon___project___languages___oss = 'icon___project___languages___oss',
  icon___project___languages___skill_map = 'icon___project___languages___skill_map',
  icon___project___languages___children = 'icon___project___languages___children',
  icon___project___tools = 'icon___project___tools',
  icon___project___tools___contentful_id = 'icon___project___tools___contentful_id',
  icon___project___tools___id = 'icon___project___tools___id',
  icon___project___tools___node_locale = 'icon___project___tools___node_locale',
  icon___project___tools___name = 'icon___project___tools___name',
  icon___project___tools___level = 'icon___project___tools___level',
  icon___project___tools___project = 'icon___project___tools___project',
  icon___project___tools___spaceId = 'icon___project___tools___spaceId',
  icon___project___tools___createdAt = 'icon___project___tools___createdAt',
  icon___project___tools___updatedAt = 'icon___project___tools___updatedAt',
  icon___project___tools___oss = 'icon___project___tools___oss',
  icon___project___tools___skill_map = 'icon___project___tools___skill_map',
  icon___project___tools___children = 'icon___project___tools___children',
  icon___project___icon___contentful_id = 'icon___project___icon___contentful_id',
  icon___project___icon___id = 'icon___project___icon___id',
  icon___project___icon___node_locale = 'icon___project___icon___node_locale',
  icon___project___icon___title = 'icon___project___icon___title',
  icon___project___icon___history = 'icon___project___icon___history',
  icon___project___icon___spaceId = 'icon___project___icon___spaceId',
  icon___project___icon___createdAt = 'icon___project___icon___createdAt',
  icon___project___icon___updatedAt = 'icon___project___icon___updatedAt',
  icon___project___icon___what_i_can_do = 'icon___project___icon___what_i_can_do',
  icon___project___icon___project = 'icon___project___icon___project',
  icon___project___icon___contact = 'icon___project___icon___contact',
  icon___project___icon___children = 'icon___project___icon___children',
  icon___project___spaceId = 'icon___project___spaceId',
  icon___project___createdAt = 'icon___project___createdAt',
  icon___project___updatedAt = 'icon___project___updatedAt',
  icon___project___sys___type = 'icon___project___sys___type',
  icon___project___sys___revision = 'icon___project___sys___revision',
  icon___project___parent___id = 'icon___project___parent___id',
  icon___project___parent___children = 'icon___project___parent___children',
  icon___project___children = 'icon___project___children',
  icon___project___children___id = 'icon___project___children___id',
  icon___project___children___children = 'icon___project___children___children',
  icon___project___internal___content = 'icon___project___internal___content',
  icon___project___internal___contentDigest = 'icon___project___internal___contentDigest',
  icon___project___internal___description = 'icon___project___internal___description',
  icon___project___internal___fieldOwners = 'icon___project___internal___fieldOwners',
  icon___project___internal___ignoreType = 'icon___project___internal___ignoreType',
  icon___project___internal___mediaType = 'icon___project___internal___mediaType',
  icon___project___internal___owner = 'icon___project___internal___owner',
  icon___project___internal___type = 'icon___project___internal___type',
  icon___contact = 'icon___contact',
  icon___contact___contentful_id = 'icon___contact___contentful_id',
  icon___contact___id = 'icon___contact___id',
  icon___contact___node_locale = 'icon___contact___node_locale',
  icon___contact___sort = 'icon___contact___sort',
  icon___contact___title = 'icon___contact___title',
  icon___contact___subTitle = 'icon___contact___subTitle',
  icon___contact___href = 'icon___contact___href',
  icon___contact___icon___contentful_id = 'icon___contact___icon___contentful_id',
  icon___contact___icon___id = 'icon___contact___icon___id',
  icon___contact___icon___node_locale = 'icon___contact___icon___node_locale',
  icon___contact___icon___title = 'icon___contact___icon___title',
  icon___contact___icon___history = 'icon___contact___icon___history',
  icon___contact___icon___spaceId = 'icon___contact___icon___spaceId',
  icon___contact___icon___createdAt = 'icon___contact___icon___createdAt',
  icon___contact___icon___updatedAt = 'icon___contact___icon___updatedAt',
  icon___contact___icon___what_i_can_do = 'icon___contact___icon___what_i_can_do',
  icon___contact___icon___project = 'icon___contact___icon___project',
  icon___contact___icon___contact = 'icon___contact___icon___contact',
  icon___contact___icon___children = 'icon___contact___icon___children',
  icon___contact___spaceId = 'icon___contact___spaceId',
  icon___contact___createdAt = 'icon___contact___createdAt',
  icon___contact___updatedAt = 'icon___contact___updatedAt',
  icon___contact___sys___type = 'icon___contact___sys___type',
  icon___contact___sys___revision = 'icon___contact___sys___revision',
  icon___contact___parent___id = 'icon___contact___parent___id',
  icon___contact___parent___children = 'icon___contact___parent___children',
  icon___contact___children = 'icon___contact___children',
  icon___contact___children___id = 'icon___contact___children___id',
  icon___contact___children___children = 'icon___contact___children___children',
  icon___contact___internal___content = 'icon___contact___internal___content',
  icon___contact___internal___contentDigest = 'icon___contact___internal___contentDigest',
  icon___contact___internal___description = 'icon___contact___internal___description',
  icon___contact___internal___fieldOwners = 'icon___contact___internal___fieldOwners',
  icon___contact___internal___ignoreType = 'icon___contact___internal___ignoreType',
  icon___contact___internal___mediaType = 'icon___contact___internal___mediaType',
  icon___contact___internal___owner = 'icon___contact___internal___owner',
  icon___contact___internal___type = 'icon___contact___internal___type',
  icon___parent___id = 'icon___parent___id',
  icon___parent___parent___id = 'icon___parent___parent___id',
  icon___parent___parent___children = 'icon___parent___parent___children',
  icon___parent___children = 'icon___parent___children',
  icon___parent___children___id = 'icon___parent___children___id',
  icon___parent___children___children = 'icon___parent___children___children',
  icon___parent___internal___content = 'icon___parent___internal___content',
  icon___parent___internal___contentDigest = 'icon___parent___internal___contentDigest',
  icon___parent___internal___description = 'icon___parent___internal___description',
  icon___parent___internal___fieldOwners = 'icon___parent___internal___fieldOwners',
  icon___parent___internal___ignoreType = 'icon___parent___internal___ignoreType',
  icon___parent___internal___mediaType = 'icon___parent___internal___mediaType',
  icon___parent___internal___owner = 'icon___parent___internal___owner',
  icon___parent___internal___type = 'icon___parent___internal___type',
  icon___children = 'icon___children',
  icon___children___id = 'icon___children___id',
  icon___children___parent___id = 'icon___children___parent___id',
  icon___children___parent___children = 'icon___children___parent___children',
  icon___children___children = 'icon___children___children',
  icon___children___children___id = 'icon___children___children___id',
  icon___children___children___children = 'icon___children___children___children',
  icon___children___internal___content = 'icon___children___internal___content',
  icon___children___internal___contentDigest = 'icon___children___internal___contentDigest',
  icon___children___internal___description = 'icon___children___internal___description',
  icon___children___internal___fieldOwners = 'icon___children___internal___fieldOwners',
  icon___children___internal___ignoreType = 'icon___children___internal___ignoreType',
  icon___children___internal___mediaType = 'icon___children___internal___mediaType',
  icon___children___internal___owner = 'icon___children___internal___owner',
  icon___children___internal___type = 'icon___children___internal___type',
  icon___internal___content = 'icon___internal___content',
  icon___internal___contentDigest = 'icon___internal___contentDigest',
  icon___internal___description = 'icon___internal___description',
  icon___internal___fieldOwners = 'icon___internal___fieldOwners',
  icon___internal___ignoreType = 'icon___internal___ignoreType',
  icon___internal___mediaType = 'icon___internal___mediaType',
  icon___internal___owner = 'icon___internal___owner',
  icon___internal___type = 'icon___internal___type',
  icon___childContentfulIconContentsTextNode___id = 'icon___childContentfulIconContentsTextNode___id',
  icon___childContentfulIconContentsTextNode___parent___id = 'icon___childContentfulIconContentsTextNode___parent___id',
  icon___childContentfulIconContentsTextNode___parent___children = 'icon___childContentfulIconContentsTextNode___parent___children',
  icon___childContentfulIconContentsTextNode___children = 'icon___childContentfulIconContentsTextNode___children',
  icon___childContentfulIconContentsTextNode___children___id = 'icon___childContentfulIconContentsTextNode___children___id',
  icon___childContentfulIconContentsTextNode___children___children = 'icon___childContentfulIconContentsTextNode___children___children',
  icon___childContentfulIconContentsTextNode___internal___content = 'icon___childContentfulIconContentsTextNode___internal___content',
  icon___childContentfulIconContentsTextNode___internal___contentDigest = 'icon___childContentfulIconContentsTextNode___internal___contentDigest',
  icon___childContentfulIconContentsTextNode___internal___description = 'icon___childContentfulIconContentsTextNode___internal___description',
  icon___childContentfulIconContentsTextNode___internal___fieldOwners = 'icon___childContentfulIconContentsTextNode___internal___fieldOwners',
  icon___childContentfulIconContentsTextNode___internal___ignoreType = 'icon___childContentfulIconContentsTextNode___internal___ignoreType',
  icon___childContentfulIconContentsTextNode___internal___mediaType = 'icon___childContentfulIconContentsTextNode___internal___mediaType',
  icon___childContentfulIconContentsTextNode___internal___owner = 'icon___childContentfulIconContentsTextNode___internal___owner',
  icon___childContentfulIconContentsTextNode___internal___type = 'icon___childContentfulIconContentsTextNode___internal___type',
  icon___childContentfulIconContentsTextNode___contents = 'icon___childContentfulIconContentsTextNode___contents',
  icon___childContentfulIconContentsTextNode___sys___type = 'icon___childContentfulIconContentsTextNode___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulWhatICanDoFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sort?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  message?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWhatICanDoSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulWhatICanDoFilterListInput = {
  elemMatch?: Maybe<ContentfulWhatICanDoFilterInput>;
};

export type ContentfulWhatICanDoGroupConnection = {
  __typename?: 'ContentfulWhatICanDoGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWhatICanDoEdge>;
  nodes: Array<ContentfulWhatICanDo>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulWhatICanDoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulWhatICanDoSys = {
  __typename?: 'ContentfulWhatICanDoSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulWhatICanDoSysContentType>;
};

export type ContentfulWhatICanDoSysContentType = {
  __typename?: 'ContentfulWhatICanDoSysContentType';
  sys?: Maybe<ContentfulWhatICanDoSysContentTypeSys>;
};

export type ContentfulWhatICanDoSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulWhatICanDoSysContentTypeSysFilterInput>;
};

export type ContentfulWhatICanDoSysContentTypeSys = {
  __typename?: 'ContentfulWhatICanDoSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWhatICanDoSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulWhatICanDoSysContentTypeFilterInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  url = 'url',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export enum ImageLayout {
  FIXED = 'FIXED',
  FLUID = 'FLUID',
  CONSTRAINED = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export enum ImageResizingBehavior {
  NO_CHANGE = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = 'PAD',
  /** Crop a part of the original image to match the specified size. */
  CROP = 'CROP',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  FILL = 'FILL',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = 'THUMB',
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = 'SCALE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  transformOptions?: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type InlineSvg = {
  __typename?: 'InlineSvg';
  content?: Maybe<Scalars['String']>;
  originalContent?: Maybe<Scalars['String']>;
  dataURI?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulSkill?: Maybe<ContentfulSkill>;
  allContentfulSkill: ContentfulSkillConnection;
  contentfulSkillMap?: Maybe<ContentfulSkillMap>;
  allContentfulSkillMap: ContentfulSkillMapConnection;
  contentfulRole?: Maybe<ContentfulRole>;
  allContentfulRole: ContentfulRoleConnection;
  contentfulAssigne?: Maybe<ContentfulAssigne>;
  allContentfulAssigne: ContentfulAssigneConnection;
  contentfulIcon?: Maybe<ContentfulIcon>;
  allContentfulIcon: ContentfulIconConnection;
  contentfulWhatICanDo?: Maybe<ContentfulWhatICanDo>;
  allContentfulWhatICanDo: ContentfulWhatICanDoConnection;
  contentfulQualification?: Maybe<ContentfulQualification>;
  allContentfulQualification: ContentfulQualificationConnection;
  contentfulProject?: Maybe<ContentfulProject>;
  allContentfulProject: ContentfulProjectConnection;
  contentfulOss?: Maybe<ContentfulOss>;
  allContentfulOss: ContentfulOssConnection;
  contentfulHistory?: Maybe<ContentfulHistory>;
  allContentfulHistory: ContentfulHistoryConnection;
  contentfulContact?: Maybe<ContentfulContact>;
  allContentfulContact: ContentfulContactConnection;
  contentfulQualificationMap?: Maybe<ContentfulQualificationMap>;
  allContentfulQualificationMap: ContentfulQualificationMapConnection;
  contentfulIconContentsTextNode?: Maybe<ContentfulIconContentsTextNode>;
  allContentfulIconContentsTextNode: ContentfulIconContentsTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>;
  sort?: Maybe<ContentfulEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSkillArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  level?: Maybe<IntQueryOperatorInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillSysFilterInput>;
  oss?: Maybe<ContentfulOssFilterListInput>;
  skill_map?: Maybe<ContentfulSkillMapFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulSkillArgs = {
  filter?: Maybe<ContentfulSkillFilterInput>;
  sort?: Maybe<ContentfulSkillSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSkillMapArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sort?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  expanded?: Maybe<BooleanQueryOperatorInput>;
  skills?: Maybe<ContentfulSkillFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillMapSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulSkillMapArgs = {
  filter?: Maybe<ContentfulSkillMapFilterInput>;
  sort?: Maybe<ContentfulSkillMapSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulRoleArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  oss?: Maybe<ContentfulOssFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulRoleSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulRoleArgs = {
  filter?: Maybe<ContentfulRoleFilterInput>;
  sort?: Maybe<ContentfulRoleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssigneArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  oss?: Maybe<ContentfulOssFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAssigneSysFilterInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssigneArgs = {
  filter?: Maybe<ContentfulAssigneFilterInput>;
  sort?: Maybe<ContentfulAssigneSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulIconArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  history?: Maybe<ContentfulHistoryFilterListInput>;
  contents?: Maybe<ContentfulIconContentsTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulIconSysFilterInput>;
  what_i_can_do?: Maybe<ContentfulWhatICanDoFilterListInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  contact?: Maybe<ContentfulContactFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulIconContentsTextNode?: Maybe<ContentfulIconContentsTextNodeFilterInput>;
};


export type QueryAllContentfulIconArgs = {
  filter?: Maybe<ContentfulIconFilterInput>;
  sort?: Maybe<ContentfulIconSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulWhatICanDoArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sort?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  message?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWhatICanDoSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulWhatICanDoArgs = {
  filter?: Maybe<ContentfulWhatICanDoFilterInput>;
  sort?: Maybe<ContentfulWhatICanDoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQualificationArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  qualification_map?: Maybe<ContentfulQualificationMapFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulQualificationArgs = {
  filter?: Maybe<ContentfulQualificationFilterInput>;
  sort?: Maybe<ContentfulQualificationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProjectArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  during?: Maybe<IntQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<ContentfulRoleFilterListInput>;
  assigns?: Maybe<ContentfulAssigneFilterListInput>;
  systems?: Maybe<ContentfulSkillFilterListInput>;
  languages?: Maybe<ContentfulSkillFilterListInput>;
  tools?: Maybe<ContentfulSkillFilterListInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulProjectArgs = {
  filter?: Maybe<ContentfulProjectFilterInput>;
  sort?: Maybe<ContentfulProjectSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulOssArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  during?: Maybe<FloatQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  mainImage?: Maybe<ContentfulAssetFilterInput>;
  roles?: Maybe<ContentfulRoleFilterListInput>;
  assigns?: Maybe<ContentfulAssigneFilterListInput>;
  systems?: Maybe<ContentfulSkillFilterListInput>;
  languages?: Maybe<ContentfulSkillFilterListInput>;
  tools?: Maybe<ContentfulSkillFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulOssSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulOssArgs = {
  filter?: Maybe<ContentfulOssFilterInput>;
  sort?: Maybe<ContentfulOssSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHistoryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subheader?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHistorySysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulHistoryArgs = {
  filter?: Maybe<ContentfulHistoryFilterInput>;
  sort?: Maybe<ContentfulHistorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContactArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sort?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<ContentfulIconFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulContactSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulContactArgs = {
  filter?: Maybe<ContentfulContactFilterInput>;
  sort?: Maybe<ContentfulContactSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQualificationMapArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sort?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  expanded?: Maybe<BooleanQueryOperatorInput>;
  qualifications?: Maybe<ContentfulQualificationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationMapSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulQualificationMapArgs = {
  filter?: Maybe<ContentfulQualificationMapFilterInput>;
  sort?: Maybe<ContentfulQualificationMapSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulIconContentsTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contents?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulIconContentsTextNodeSysFilterInput>;
};


export type QueryAllContentfulIconContentsTextNodeArgs = {
  filter?: Maybe<ContentfulIconContentsTextNodeFilterInput>;
  sort?: Maybe<ContentfulIconContentsTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  buildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  language?: Maybe<Scalars['String']>;
  i18n?: Maybe<SitePageContextI18n>;
};

export type SitePageContextFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  i18n?: Maybe<SitePageContextI18nFilterInput>;
};

export type SitePageContextI18n = {
  __typename?: 'SitePageContextI18n';
  language?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  routed?: Maybe<Scalars['Boolean']>;
  resources?: Maybe<SitePageContextI18nResources>;
  originalPath?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  routed?: Maybe<BooleanQueryOperatorInput>;
  resources?: Maybe<SitePageContextI18nResourcesFilterInput>;
  originalPath?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResources = {
  __typename?: 'SitePageContextI18nResources';
  ja?: Maybe<SitePageContextI18nResourcesJa>;
  en?: Maybe<SitePageContextI18nResourcesEn>;
};

export type SitePageContextI18nResourcesEn = {
  __typename?: 'SitePageContextI18nResourcesEn';
  translation?: Maybe<SitePageContextI18nResourcesEnTranslation>;
};

export type SitePageContextI18nResourcesEnFilterInput = {
  translation?: Maybe<SitePageContextI18nResourcesEnTranslationFilterInput>;
};

export type SitePageContextI18nResourcesEnTranslation = {
  __typename?: 'SitePageContextI18nResourcesEnTranslation';
  cookie_alert?: Maybe<SitePageContextI18nResourcesEnTranslationCookie_Alert>;
  header?: Maybe<SitePageContextI18nResourcesEnTranslationHeader>;
  hello?: Maybe<SitePageContextI18nResourcesEnTranslationHello>;
  historys?: Maybe<SitePageContextI18nResourcesEnTranslationHistorys>;
  index?: Maybe<SitePageContextI18nResourcesEnTranslationIndex>;
  not_found?: Maybe<SitePageContextI18nResourcesEnTranslationNot_Found>;
  siteMetadata?: Maybe<SitePageContextI18nResourcesEnTranslationSiteMetadata>;
};

export type SitePageContextI18nResourcesEnTranslationCookie_Alert = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationCookie_alert';
  accept?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dicline?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationCookie_AlertFilterInput = {
  accept?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  dicline?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationFilterInput = {
  cookie_alert?: Maybe<SitePageContextI18nResourcesEnTranslationCookie_AlertFilterInput>;
  header?: Maybe<SitePageContextI18nResourcesEnTranslationHeaderFilterInput>;
  hello?: Maybe<SitePageContextI18nResourcesEnTranslationHelloFilterInput>;
  historys?: Maybe<SitePageContextI18nResourcesEnTranslationHistorysFilterInput>;
  index?: Maybe<SitePageContextI18nResourcesEnTranslationIndexFilterInput>;
  not_found?: Maybe<SitePageContextI18nResourcesEnTranslationNot_FoundFilterInput>;
  siteMetadata?: Maybe<SitePageContextI18nResourcesEnTranslationSiteMetadataFilterInput>;
};

export type SitePageContextI18nResourcesEnTranslationHeader = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationHeader';
  changeLanguage_title?: Maybe<Scalars['String']>;
  github_title?: Maybe<Scalars['String']>;
  github_url?: Maybe<Scalars['String']>;
  title_home?: Maybe<Scalars['String']>;
  toggleDarkTheme_title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationHeaderFilterInput = {
  changeLanguage_title?: Maybe<StringQueryOperatorInput>;
  github_title?: Maybe<StringQueryOperatorInput>;
  github_url?: Maybe<StringQueryOperatorInput>;
  title_home?: Maybe<StringQueryOperatorInput>;
  toggleDarkTheme_title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationHello = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationHello';
  message?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationHelloFilterInput = {
  message?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationHistorys = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationHistorys';
  age?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationHistorysFilterInput = {
  age?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationIndex = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationIndex';
  contacts_title?: Maybe<Scalars['String']>;
  histories_title?: Maybe<Scalars['String']>;
  osses_title?: Maybe<Scalars['String']>;
  projects_title?: Maybe<Scalars['String']>;
  qualifications_title?: Maybe<Scalars['String']>;
  skills_title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationIndexFilterInput = {
  contacts_title?: Maybe<StringQueryOperatorInput>;
  histories_title?: Maybe<StringQueryOperatorInput>;
  osses_title?: Maybe<StringQueryOperatorInput>;
  projects_title?: Maybe<StringQueryOperatorInput>;
  qualifications_title?: Maybe<StringQueryOperatorInput>;
  skills_title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationNot_Found = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationNot_found';
  back_to_home?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationNot_FoundFilterInput = {
  back_to_home?: Maybe<StringQueryOperatorInput>;
  message?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationSiteMetadata = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationSiteMetadata';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  shortTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationSiteMetadataFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  shortTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesFilterInput = {
  ja?: Maybe<SitePageContextI18nResourcesJaFilterInput>;
  en?: Maybe<SitePageContextI18nResourcesEnFilterInput>;
};

export type SitePageContextI18nResourcesJa = {
  __typename?: 'SitePageContextI18nResourcesJa';
  translation?: Maybe<SitePageContextI18nResourcesJaTranslation>;
};

export type SitePageContextI18nResourcesJaFilterInput = {
  translation?: Maybe<SitePageContextI18nResourcesJaTranslationFilterInput>;
};

export type SitePageContextI18nResourcesJaTranslation = {
  __typename?: 'SitePageContextI18nResourcesJaTranslation';
  cookie_alert?: Maybe<SitePageContextI18nResourcesJaTranslationCookie_Alert>;
  header?: Maybe<SitePageContextI18nResourcesJaTranslationHeader>;
  hello?: Maybe<SitePageContextI18nResourcesJaTranslationHello>;
  historys?: Maybe<SitePageContextI18nResourcesJaTranslationHistorys>;
  index?: Maybe<SitePageContextI18nResourcesJaTranslationIndex>;
  not_found?: Maybe<SitePageContextI18nResourcesJaTranslationNot_Found>;
  siteMetadata?: Maybe<SitePageContextI18nResourcesJaTranslationSiteMetadata>;
};

export type SitePageContextI18nResourcesJaTranslationCookie_Alert = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationCookie_alert';
  accept?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dicline?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationCookie_AlertFilterInput = {
  accept?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  dicline?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationFilterInput = {
  cookie_alert?: Maybe<SitePageContextI18nResourcesJaTranslationCookie_AlertFilterInput>;
  header?: Maybe<SitePageContextI18nResourcesJaTranslationHeaderFilterInput>;
  hello?: Maybe<SitePageContextI18nResourcesJaTranslationHelloFilterInput>;
  historys?: Maybe<SitePageContextI18nResourcesJaTranslationHistorysFilterInput>;
  index?: Maybe<SitePageContextI18nResourcesJaTranslationIndexFilterInput>;
  not_found?: Maybe<SitePageContextI18nResourcesJaTranslationNot_FoundFilterInput>;
  siteMetadata?: Maybe<SitePageContextI18nResourcesJaTranslationSiteMetadataFilterInput>;
};

export type SitePageContextI18nResourcesJaTranslationHeader = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationHeader';
  changeLanguage_title?: Maybe<Scalars['String']>;
  github_title?: Maybe<Scalars['String']>;
  github_url?: Maybe<Scalars['String']>;
  title_home?: Maybe<Scalars['String']>;
  toggleDarkTheme_title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationHeaderFilterInput = {
  changeLanguage_title?: Maybe<StringQueryOperatorInput>;
  github_title?: Maybe<StringQueryOperatorInput>;
  github_url?: Maybe<StringQueryOperatorInput>;
  title_home?: Maybe<StringQueryOperatorInput>;
  toggleDarkTheme_title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationHello = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationHello';
  message?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationHelloFilterInput = {
  message?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationHistorys = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationHistorys';
  age?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationHistorysFilterInput = {
  age?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationIndex = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationIndex';
  contacts_title?: Maybe<Scalars['String']>;
  histories_title?: Maybe<Scalars['String']>;
  osses_title?: Maybe<Scalars['String']>;
  projects_title?: Maybe<Scalars['String']>;
  qualifications_title?: Maybe<Scalars['String']>;
  skills_title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationIndexFilterInput = {
  contacts_title?: Maybe<StringQueryOperatorInput>;
  histories_title?: Maybe<StringQueryOperatorInput>;
  osses_title?: Maybe<StringQueryOperatorInput>;
  projects_title?: Maybe<StringQueryOperatorInput>;
  qualifications_title?: Maybe<StringQueryOperatorInput>;
  skills_title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationNot_Found = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationNot_found';
  back_to_home?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationNot_FoundFilterInput = {
  back_to_home?: Maybe<StringQueryOperatorInput>;
  message?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationSiteMetadata = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationSiteMetadata';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  shortTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationSiteMetadataFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  shortTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___language = 'context___language',
  context___i18n___language = 'context___i18n___language',
  context___i18n___languages = 'context___i18n___languages',
  context___i18n___defaultLanguage = 'context___i18n___defaultLanguage',
  context___i18n___routed = 'context___i18n___routed',
  context___i18n___originalPath = 'context___i18n___originalPath',
  context___i18n___path = 'context___i18n___path',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator___pluginOptions___base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator___pluginOptions___failOnError',
  pluginCreator___pluginOptions___spaceId = 'pluginCreator___pluginOptions___spaceId',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator___pluginOptions___accessToken',
  pluginCreator___pluginOptions___downloadLocal = 'pluginCreator___pluginOptions___downloadLocal',
  pluginCreator___pluginOptions___host = 'pluginCreator___pluginOptions___host',
  pluginCreator___pluginOptions___environment = 'pluginCreator___pluginOptions___environment',
  pluginCreator___pluginOptions___forceFullSync = 'pluginCreator___pluginOptions___forceFullSync',
  pluginCreator___pluginOptions___pageLimit = 'pluginCreator___pluginOptions___pageLimit',
  pluginCreator___pluginOptions___assetDownloadWorkers = 'pluginCreator___pluginOptions___assetDownloadWorkers',
  pluginCreator___pluginOptions___useNameForId = 'pluginCreator___pluginOptions___useNameForId',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___stylesProvider___injectFirst = 'pluginCreator___pluginOptions___stylesProvider___injectFirst',
  pluginCreator___pluginOptions___modules = 'pluginCreator___pluginOptions___modules',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___languages = 'pluginCreator___pluginOptions___languages',
  pluginCreator___pluginOptions___defaultLanguage = 'pluginCreator___pluginOptions___defaultLanguage',
  pluginCreator___pluginOptions___allPageHeaders = 'pluginCreator___pluginOptions___allPageHeaders',
  pluginCreator___pluginOptions___googleAnalytics___trackingId = 'pluginCreator___pluginOptions___googleAnalytics___trackingId',
  pluginCreator___pluginOptions___googleAnalytics___anonymize = 'pluginCreator___pluginOptions___googleAnalytics___anonymize',
  pluginCreator___pluginOptions___environments = 'pluginCreator___pluginOptions___environments',
  pluginCreator___pluginOptions___lang = 'pluginCreator___pluginOptions___lang',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___description = 'pluginCreator___pluginOptions___description',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icons = 'pluginCreator___pluginOptions___icons',
  pluginCreator___pluginOptions___icons___src = 'pluginCreator___pluginOptions___icons___src',
  pluginCreator___pluginOptions___icons___sizes = 'pluginCreator___pluginOptions___icons___sizes',
  pluginCreator___pluginOptions___icons___type = 'pluginCreator___pluginOptions___icons___type',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
  pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
  pluginCreator___pluginOptions___localize = 'pluginCreator___pluginOptions___localize',
  pluginCreator___pluginOptions___localize___lang = 'pluginCreator___pluginOptions___localize___lang',
  pluginCreator___pluginOptions___localize___name = 'pluginCreator___pluginOptions___localize___name',
  pluginCreator___pluginOptions___localize___short_name = 'pluginCreator___pluginOptions___localize___short_name',
  pluginCreator___pluginOptions___localize___description = 'pluginCreator___pluginOptions___localize___description',
  pluginCreator___pluginOptions___localize___start_url = 'pluginCreator___pluginOptions___localize___start_url',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator___pluginOptions___cache_busting_mode',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator___pluginOptions___include_favicon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator___pluginOptions___legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator___pluginOptions___theme_color_in_head',
  pluginCreator___pluginOptions___exclude = 'pluginCreator___pluginOptions___exclude',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  pluginCreator___pluginOptions___addUncaughtPages = 'pluginCreator___pluginOptions___addUncaughtPages',
  pluginCreator___pluginOptions___workboxConfig___globPatterns = 'pluginCreator___pluginOptions___workboxConfig___globPatterns',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___author = 'pluginCreator___packageJson___author',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___base64Width = 'pluginOptions___base64Width',
  pluginOptions___stripMetadata = 'pluginOptions___stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions___defaultQuality',
  pluginOptions___failOnError = 'pluginOptions___failOnError',
  pluginOptions___spaceId = 'pluginOptions___spaceId',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___downloadLocal = 'pluginOptions___downloadLocal',
  pluginOptions___host = 'pluginOptions___host',
  pluginOptions___environment = 'pluginOptions___environment',
  pluginOptions___forceFullSync = 'pluginOptions___forceFullSync',
  pluginOptions___pageLimit = 'pluginOptions___pageLimit',
  pluginOptions___assetDownloadWorkers = 'pluginOptions___assetDownloadWorkers',
  pluginOptions___useNameForId = 'pluginOptions___useNameForId',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___stylesProvider___injectFirst = 'pluginOptions___stylesProvider___injectFirst',
  pluginOptions___modules = 'pluginOptions___modules',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___languages = 'pluginOptions___languages',
  pluginOptions___defaultLanguage = 'pluginOptions___defaultLanguage',
  pluginOptions___allPageHeaders = 'pluginOptions___allPageHeaders',
  pluginOptions___googleAnalytics___trackingId = 'pluginOptions___googleAnalytics___trackingId',
  pluginOptions___googleAnalytics___anonymize = 'pluginOptions___googleAnalytics___anonymize',
  pluginOptions___environments = 'pluginOptions___environments',
  pluginOptions___lang = 'pluginOptions___lang',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___description = 'pluginOptions___description',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icons = 'pluginOptions___icons',
  pluginOptions___icons___src = 'pluginOptions___icons___src',
  pluginOptions___icons___sizes = 'pluginOptions___icons___sizes',
  pluginOptions___icons___type = 'pluginOptions___icons___type',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___localize = 'pluginOptions___localize',
  pluginOptions___localize___lang = 'pluginOptions___localize___lang',
  pluginOptions___localize___name = 'pluginOptions___localize___name',
  pluginOptions___localize___short_name = 'pluginOptions___localize___short_name',
  pluginOptions___localize___description = 'pluginOptions___localize___description',
  pluginOptions___localize___start_url = 'pluginOptions___localize___start_url',
  pluginOptions___cache_busting_mode = 'pluginOptions___cache_busting_mode',
  pluginOptions___include_favicon = 'pluginOptions___include_favicon',
  pluginOptions___legacy = 'pluginOptions___legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions___theme_color_in_head',
  pluginOptions___exclude = 'pluginOptions___exclude',
  pluginOptions___createLinkInHead = 'pluginOptions___createLinkInHead',
  pluginOptions___addUncaughtPages = 'pluginOptions___addUncaughtPages',
  pluginOptions___workboxConfig___globPatterns = 'pluginOptions___workboxConfig___globPatterns',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  forceFullSync?: Maybe<Scalars['Boolean']>;
  pageLimit?: Maybe<Scalars['Int']>;
  assetDownloadWorkers?: Maybe<Scalars['Int']>;
  useNameForId?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProvider>;
  modules?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  allPageHeaders?: Maybe<Array<Maybe<Scalars['String']>>>;
  googleAnalytics?: Maybe<SitePluginPluginOptionsGoogleAnalytics>;
  environments?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  theme_color?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  localize?: Maybe<Array<Maybe<SitePluginPluginOptionsLocalize>>>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  addUncaughtPages?: Maybe<Scalars['Boolean']>;
  workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfig>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  forceFullSync?: Maybe<BooleanQueryOperatorInput>;
  pageLimit?: Maybe<IntQueryOperatorInput>;
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>;
  useNameForId?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProviderFilterInput>;
  modules?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  allPageHeaders?: Maybe<StringQueryOperatorInput>;
  googleAnalytics?: Maybe<SitePluginPluginOptionsGoogleAnalyticsFilterInput>;
  environments?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  localize?: Maybe<SitePluginPluginOptionsLocalizeFilterListInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  exclude?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  addUncaughtPages?: Maybe<BooleanQueryOperatorInput>;
  workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfigFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsGoogleAnalytics = {
  __typename?: 'SitePluginPluginOptionsGoogleAnalytics';
  trackingId?: Maybe<Scalars['String']>;
  anonymize?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsGoogleAnalyticsFilterInput = {
  trackingId?: Maybe<StringQueryOperatorInput>;
  anonymize?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginPluginOptionsLocalize = {
  __typename?: 'SitePluginPluginOptionsLocalize';
  lang?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsLocalizeFilterInput = {
  lang?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsLocalizeFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsLocalizeFilterInput>;
};

export type SitePluginPluginOptionsStylesProvider = {
  __typename?: 'SitePluginPluginOptionsStylesProvider';
  injectFirst?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsStylesProviderFilterInput = {
  injectFirst?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsWorkboxConfig = {
  __typename?: 'SitePluginPluginOptionsWorkboxConfig';
  globPatterns?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsWorkboxConfigFilterInput = {
  globPatterns?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type BicstoneIconDataQueryVariables = Exact<{ [key: string]: never; }>;


export type BicstoneIconDataQuery = (
  { __typename?: 'Query' }
  & { contentfulAsset?: Maybe<(
    { __typename?: 'ContentfulAsset' }
    & { svg?: Maybe<(
      { __typename?: 'InlineSvg' }
      & Pick<InlineSvg, 'content'>
    )> }
  )> }
);

export type ContactDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulContact: (
    { __typename?: 'ContentfulContactConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulContactEdge' }
      & { node: (
        { __typename?: 'ContentfulContact' }
        & Pick<ContentfulContact, 'id' | 'node_locale' | 'title' | 'subTitle' | 'href'>
        & { icon?: Maybe<(
          { __typename?: 'ContentfulIcon' }
          & { contents?: Maybe<(
            { __typename?: 'contentfulIconContentsTextNode' }
            & Pick<ContentfulIconContentsTextNode, 'contents'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type HistoryDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HistoryDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulHistory: (
    { __typename?: 'ContentfulHistoryConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulHistoryEdge' }
      & { node: (
        { __typename?: 'ContentfulHistory' }
        & Pick<ContentfulHistory, 'id' | 'node_locale' | 'date' | 'title' | 'subheader'>
        & { icon?: Maybe<(
          { __typename?: 'ContentfulIcon' }
          & { contents?: Maybe<(
            { __typename?: 'contentfulIconContentsTextNode' }
            & Pick<ContentfulIconContentsTextNode, 'contents'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type OssDataQueryVariables = Exact<{ [key: string]: never; }>;


export type OssDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulOss: (
    { __typename?: 'ContentfulOssConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulOssEdge' }
      & { node: (
        { __typename?: 'ContentfulOss' }
        & Pick<ContentfulOss, 'id' | 'node_locale' | 'name' | 'slug' | 'startDate' | 'during' | 'comment' | 'siteUrl' | 'sourceUrl'>
        & { mainImage?: Maybe<(
          { __typename?: 'ContentfulAsset' }
          & Pick<ContentfulAsset, 'title'>
          & { file?: Maybe<(
            { __typename?: 'ContentfulAssetFile' }
            & Pick<ContentfulAssetFile, 'url'>
          )>, localFile?: Maybe<(
            { __typename?: 'File' }
            & { childImageSharp?: Maybe<(
              { __typename?: 'ImageSharp' }
              & { fluid?: Maybe<(
                { __typename?: 'ImageSharpFluid' }
                & Pick<ImageSharpFluid, 'sizes' | 'src' | 'srcSet' | 'aspectRatio'>
              )> }
            )> }
          )> }
        )>, roles?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulRole' }
          & Pick<ContentfulRole, 'name'>
        )>>>, assigns?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulAssigne' }
          & Pick<ContentfulAssigne, 'name'>
        )>>>, systems?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'name'>
        )>>>, languages?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'name'>
        )>>>, tools?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'name'>
        )>>> }
      ) }
    )> }
  ) }
);

export type ProjectDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulProject: (
    { __typename?: 'ContentfulProjectConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulProjectEdge' }
      & { node: (
        { __typename?: 'ContentfulProject' }
        & Pick<ContentfulProject, 'id' | 'node_locale' | 'name' | 'startDate' | 'during' | 'comment'>
        & { roles?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulRole' }
          & Pick<ContentfulRole, 'name'>
        )>>>, systems?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'name'>
        )>>>, languages?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'name'>
        )>>>, tools?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'name'>
        )>>>, assigns?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulAssigne' }
          & Pick<ContentfulAssigne, 'name'>
        )>>>, icon?: Maybe<(
          { __typename?: 'ContentfulIcon' }
          & { contents?: Maybe<(
            { __typename?: 'contentfulIconContentsTextNode' }
            & Pick<ContentfulIconContentsTextNode, 'contents'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type QualificationMapDataQueryVariables = Exact<{ [key: string]: never; }>;


export type QualificationMapDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulQualificationMap: (
    { __typename?: 'ContentfulQualificationMapConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulQualificationMapEdge' }
      & { node: (
        { __typename?: 'ContentfulQualificationMap' }
        & Pick<ContentfulQualificationMap, 'id' | 'name' | 'node_locale' | 'expanded'>
        & { qualifications?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulQualification' }
          & Pick<ContentfulQualification, 'id' | 'name' | 'date'>
        )>>> }
      ) }
    )> }
  ) }
);

export type SkillDataQueryVariables = Exact<{ [key: string]: never; }>;


export type SkillDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulSkillMap: (
    { __typename?: 'ContentfulSkillMapConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulSkillMapEdge' }
      & { node: (
        { __typename?: 'ContentfulSkillMap' }
        & Pick<ContentfulSkillMap, 'id' | 'name' | 'node_locale' | 'expanded'>
        & { skills?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'id' | 'level' | 'name'>
        )>>> }
      ) }
    )> }
  ) }
);

export type WhatICanDoDataQueryVariables = Exact<{ [key: string]: never; }>;


export type WhatICanDoDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulWhatICanDo: (
    { __typename?: 'ContentfulWhatICanDoConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulWhatICanDoEdge' }
      & { node: (
        { __typename?: 'ContentfulWhatICanDo' }
        & Pick<ContentfulWhatICanDo, 'id' | 'node_locale' | 'title' | 'message'>
        & { icon?: Maybe<(
          { __typename?: 'ContentfulIcon' }
          & { contents?: Maybe<(
            { __typename?: 'contentfulIconContentsTextNode' }
            & Pick<ContentfulIconContentsTextNode, 'contents'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type BuildTimeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type BuildTimeDataQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & Pick<Site, 'buildTime'>
  )> }
);
