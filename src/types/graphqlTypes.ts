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

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  __typename?: 'ContentfulAsset';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
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
  contentful_id = 'contentful_id',
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
  localFile___childImageSharp___gatsbyImage___imageData = 'localFile___childImageSharp___gatsbyImage___imageData',
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
  resize___aspectRatio = 'resize___aspectRatio'
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
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
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

export type ContentfulAssigne = Node & {
  __typename?: 'ContentfulAssigne';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<ContentfulProjects>>>;
  osses?: Maybe<Array<Maybe<ContentfulOsSes>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAssigneSys>;
  node_locale?: Maybe<Scalars['String']>;
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
  projects = 'projects',
  projects___id = 'projects___id',
  projects___parent___id = 'projects___parent___id',
  projects___parent___parent___id = 'projects___parent___parent___id',
  projects___parent___parent___children = 'projects___parent___parent___children',
  projects___parent___children = 'projects___parent___children',
  projects___parent___children___id = 'projects___parent___children___id',
  projects___parent___children___children = 'projects___parent___children___children',
  projects___parent___internal___content = 'projects___parent___internal___content',
  projects___parent___internal___contentDigest = 'projects___parent___internal___contentDigest',
  projects___parent___internal___description = 'projects___parent___internal___description',
  projects___parent___internal___fieldOwners = 'projects___parent___internal___fieldOwners',
  projects___parent___internal___ignoreType = 'projects___parent___internal___ignoreType',
  projects___parent___internal___mediaType = 'projects___parent___internal___mediaType',
  projects___parent___internal___owner = 'projects___parent___internal___owner',
  projects___parent___internal___type = 'projects___parent___internal___type',
  projects___children = 'projects___children',
  projects___children___id = 'projects___children___id',
  projects___children___parent___id = 'projects___children___parent___id',
  projects___children___parent___children = 'projects___children___parent___children',
  projects___children___children = 'projects___children___children',
  projects___children___children___id = 'projects___children___children___id',
  projects___children___children___children = 'projects___children___children___children',
  projects___children___internal___content = 'projects___children___internal___content',
  projects___children___internal___contentDigest = 'projects___children___internal___contentDigest',
  projects___children___internal___description = 'projects___children___internal___description',
  projects___children___internal___fieldOwners = 'projects___children___internal___fieldOwners',
  projects___children___internal___ignoreType = 'projects___children___internal___ignoreType',
  projects___children___internal___mediaType = 'projects___children___internal___mediaType',
  projects___children___internal___owner = 'projects___children___internal___owner',
  projects___children___internal___type = 'projects___children___internal___type',
  projects___internal___content = 'projects___internal___content',
  projects___internal___contentDigest = 'projects___internal___contentDigest',
  projects___internal___description = 'projects___internal___description',
  projects___internal___fieldOwners = 'projects___internal___fieldOwners',
  projects___internal___ignoreType = 'projects___internal___ignoreType',
  projects___internal___mediaType = 'projects___internal___mediaType',
  projects___internal___owner = 'projects___internal___owner',
  projects___internal___type = 'projects___internal___type',
  projects___name = 'projects___name',
  projects___startDate = 'projects___startDate',
  projects___during = 'projects___during',
  projects___comment = 'projects___comment',
  projects___roles = 'projects___roles',
  projects___roles___id = 'projects___roles___id',
  projects___roles___parent___id = 'projects___roles___parent___id',
  projects___roles___parent___children = 'projects___roles___parent___children',
  projects___roles___children = 'projects___roles___children',
  projects___roles___children___id = 'projects___roles___children___id',
  projects___roles___children___children = 'projects___roles___children___children',
  projects___roles___internal___content = 'projects___roles___internal___content',
  projects___roles___internal___contentDigest = 'projects___roles___internal___contentDigest',
  projects___roles___internal___description = 'projects___roles___internal___description',
  projects___roles___internal___fieldOwners = 'projects___roles___internal___fieldOwners',
  projects___roles___internal___ignoreType = 'projects___roles___internal___ignoreType',
  projects___roles___internal___mediaType = 'projects___roles___internal___mediaType',
  projects___roles___internal___owner = 'projects___roles___internal___owner',
  projects___roles___internal___type = 'projects___roles___internal___type',
  projects___roles___name = 'projects___roles___name',
  projects___roles___projects = 'projects___roles___projects',
  projects___roles___projects___id = 'projects___roles___projects___id',
  projects___roles___projects___children = 'projects___roles___projects___children',
  projects___roles___projects___name = 'projects___roles___projects___name',
  projects___roles___projects___startDate = 'projects___roles___projects___startDate',
  projects___roles___projects___during = 'projects___roles___projects___during',
  projects___roles___projects___comment = 'projects___roles___projects___comment',
  projects___roles___projects___roles = 'projects___roles___projects___roles',
  projects___roles___projects___assigns = 'projects___roles___projects___assigns',
  projects___roles___projects___systems = 'projects___roles___projects___systems',
  projects___roles___projects___languages = 'projects___roles___projects___languages',
  projects___roles___projects___tools = 'projects___roles___projects___tools',
  projects___roles___projects___spaceId = 'projects___roles___projects___spaceId',
  projects___roles___projects___contentful_id = 'projects___roles___projects___contentful_id',
  projects___roles___projects___createdAt = 'projects___roles___projects___createdAt',
  projects___roles___projects___updatedAt = 'projects___roles___projects___updatedAt',
  projects___roles___projects___node_locale = 'projects___roles___projects___node_locale',
  projects___roles___osses = 'projects___roles___osses',
  projects___roles___osses___id = 'projects___roles___osses___id',
  projects___roles___osses___children = 'projects___roles___osses___children',
  projects___roles___osses___name = 'projects___roles___osses___name',
  projects___roles___osses___slug = 'projects___roles___osses___slug',
  projects___roles___osses___startDate = 'projects___roles___osses___startDate',
  projects___roles___osses___during = 'projects___roles___osses___during',
  projects___roles___osses___comment = 'projects___roles___osses___comment',
  projects___roles___osses___siteUrl = 'projects___roles___osses___siteUrl',
  projects___roles___osses___sourceUrl = 'projects___roles___osses___sourceUrl',
  projects___roles___osses___roles = 'projects___roles___osses___roles',
  projects___roles___osses___assigns = 'projects___roles___osses___assigns',
  projects___roles___osses___systems = 'projects___roles___osses___systems',
  projects___roles___osses___languages = 'projects___roles___osses___languages',
  projects___roles___osses___tools = 'projects___roles___osses___tools',
  projects___roles___osses___spaceId = 'projects___roles___osses___spaceId',
  projects___roles___osses___contentful_id = 'projects___roles___osses___contentful_id',
  projects___roles___osses___createdAt = 'projects___roles___osses___createdAt',
  projects___roles___osses___updatedAt = 'projects___roles___osses___updatedAt',
  projects___roles___osses___node_locale = 'projects___roles___osses___node_locale',
  projects___roles___spaceId = 'projects___roles___spaceId',
  projects___roles___contentful_id = 'projects___roles___contentful_id',
  projects___roles___createdAt = 'projects___roles___createdAt',
  projects___roles___updatedAt = 'projects___roles___updatedAt',
  projects___roles___sys___type = 'projects___roles___sys___type',
  projects___roles___sys___revision = 'projects___roles___sys___revision',
  projects___roles___node_locale = 'projects___roles___node_locale',
  projects___assigns = 'projects___assigns',
  projects___assigns___id = 'projects___assigns___id',
  projects___assigns___parent___id = 'projects___assigns___parent___id',
  projects___assigns___parent___children = 'projects___assigns___parent___children',
  projects___assigns___children = 'projects___assigns___children',
  projects___assigns___children___id = 'projects___assigns___children___id',
  projects___assigns___children___children = 'projects___assigns___children___children',
  projects___assigns___internal___content = 'projects___assigns___internal___content',
  projects___assigns___internal___contentDigest = 'projects___assigns___internal___contentDigest',
  projects___assigns___internal___description = 'projects___assigns___internal___description',
  projects___assigns___internal___fieldOwners = 'projects___assigns___internal___fieldOwners',
  projects___assigns___internal___ignoreType = 'projects___assigns___internal___ignoreType',
  projects___assigns___internal___mediaType = 'projects___assigns___internal___mediaType',
  projects___assigns___internal___owner = 'projects___assigns___internal___owner',
  projects___assigns___internal___type = 'projects___assigns___internal___type',
  projects___assigns___name = 'projects___assigns___name',
  projects___assigns___projects = 'projects___assigns___projects',
  projects___assigns___projects___id = 'projects___assigns___projects___id',
  projects___assigns___projects___children = 'projects___assigns___projects___children',
  projects___assigns___projects___name = 'projects___assigns___projects___name',
  projects___assigns___projects___startDate = 'projects___assigns___projects___startDate',
  projects___assigns___projects___during = 'projects___assigns___projects___during',
  projects___assigns___projects___comment = 'projects___assigns___projects___comment',
  projects___assigns___projects___roles = 'projects___assigns___projects___roles',
  projects___assigns___projects___assigns = 'projects___assigns___projects___assigns',
  projects___assigns___projects___systems = 'projects___assigns___projects___systems',
  projects___assigns___projects___languages = 'projects___assigns___projects___languages',
  projects___assigns___projects___tools = 'projects___assigns___projects___tools',
  projects___assigns___projects___spaceId = 'projects___assigns___projects___spaceId',
  projects___assigns___projects___contentful_id = 'projects___assigns___projects___contentful_id',
  projects___assigns___projects___createdAt = 'projects___assigns___projects___createdAt',
  projects___assigns___projects___updatedAt = 'projects___assigns___projects___updatedAt',
  projects___assigns___projects___node_locale = 'projects___assigns___projects___node_locale',
  projects___assigns___osses = 'projects___assigns___osses',
  projects___assigns___osses___id = 'projects___assigns___osses___id',
  projects___assigns___osses___children = 'projects___assigns___osses___children',
  projects___assigns___osses___name = 'projects___assigns___osses___name',
  projects___assigns___osses___slug = 'projects___assigns___osses___slug',
  projects___assigns___osses___startDate = 'projects___assigns___osses___startDate',
  projects___assigns___osses___during = 'projects___assigns___osses___during',
  projects___assigns___osses___comment = 'projects___assigns___osses___comment',
  projects___assigns___osses___siteUrl = 'projects___assigns___osses___siteUrl',
  projects___assigns___osses___sourceUrl = 'projects___assigns___osses___sourceUrl',
  projects___assigns___osses___roles = 'projects___assigns___osses___roles',
  projects___assigns___osses___assigns = 'projects___assigns___osses___assigns',
  projects___assigns___osses___systems = 'projects___assigns___osses___systems',
  projects___assigns___osses___languages = 'projects___assigns___osses___languages',
  projects___assigns___osses___tools = 'projects___assigns___osses___tools',
  projects___assigns___osses___spaceId = 'projects___assigns___osses___spaceId',
  projects___assigns___osses___contentful_id = 'projects___assigns___osses___contentful_id',
  projects___assigns___osses___createdAt = 'projects___assigns___osses___createdAt',
  projects___assigns___osses___updatedAt = 'projects___assigns___osses___updatedAt',
  projects___assigns___osses___node_locale = 'projects___assigns___osses___node_locale',
  projects___assigns___spaceId = 'projects___assigns___spaceId',
  projects___assigns___contentful_id = 'projects___assigns___contentful_id',
  projects___assigns___createdAt = 'projects___assigns___createdAt',
  projects___assigns___updatedAt = 'projects___assigns___updatedAt',
  projects___assigns___sys___type = 'projects___assigns___sys___type',
  projects___assigns___sys___revision = 'projects___assigns___sys___revision',
  projects___assigns___node_locale = 'projects___assigns___node_locale',
  projects___systems = 'projects___systems',
  projects___systems___id = 'projects___systems___id',
  projects___systems___parent___id = 'projects___systems___parent___id',
  projects___systems___parent___children = 'projects___systems___parent___children',
  projects___systems___children = 'projects___systems___children',
  projects___systems___children___id = 'projects___systems___children___id',
  projects___systems___children___children = 'projects___systems___children___children',
  projects___systems___internal___content = 'projects___systems___internal___content',
  projects___systems___internal___contentDigest = 'projects___systems___internal___contentDigest',
  projects___systems___internal___description = 'projects___systems___internal___description',
  projects___systems___internal___fieldOwners = 'projects___systems___internal___fieldOwners',
  projects___systems___internal___ignoreType = 'projects___systems___internal___ignoreType',
  projects___systems___internal___mediaType = 'projects___systems___internal___mediaType',
  projects___systems___internal___owner = 'projects___systems___internal___owner',
  projects___systems___internal___type = 'projects___systems___internal___type',
  projects___systems___name = 'projects___systems___name',
  projects___systems___level = 'projects___systems___level',
  projects___systems___osses = 'projects___systems___osses',
  projects___systems___osses___id = 'projects___systems___osses___id',
  projects___systems___osses___children = 'projects___systems___osses___children',
  projects___systems___osses___name = 'projects___systems___osses___name',
  projects___systems___osses___slug = 'projects___systems___osses___slug',
  projects___systems___osses___startDate = 'projects___systems___osses___startDate',
  projects___systems___osses___during = 'projects___systems___osses___during',
  projects___systems___osses___comment = 'projects___systems___osses___comment',
  projects___systems___osses___siteUrl = 'projects___systems___osses___siteUrl',
  projects___systems___osses___sourceUrl = 'projects___systems___osses___sourceUrl',
  projects___systems___osses___roles = 'projects___systems___osses___roles',
  projects___systems___osses___assigns = 'projects___systems___osses___assigns',
  projects___systems___osses___systems = 'projects___systems___osses___systems',
  projects___systems___osses___languages = 'projects___systems___osses___languages',
  projects___systems___osses___tools = 'projects___systems___osses___tools',
  projects___systems___osses___spaceId = 'projects___systems___osses___spaceId',
  projects___systems___osses___contentful_id = 'projects___systems___osses___contentful_id',
  projects___systems___osses___createdAt = 'projects___systems___osses___createdAt',
  projects___systems___osses___updatedAt = 'projects___systems___osses___updatedAt',
  projects___systems___osses___node_locale = 'projects___systems___osses___node_locale',
  projects___systems___spaceId = 'projects___systems___spaceId',
  projects___systems___contentful_id = 'projects___systems___contentful_id',
  projects___systems___createdAt = 'projects___systems___createdAt',
  projects___systems___updatedAt = 'projects___systems___updatedAt',
  projects___systems___sys___type = 'projects___systems___sys___type',
  projects___systems___sys___revision = 'projects___systems___sys___revision',
  projects___systems___node_locale = 'projects___systems___node_locale',
  projects___systems___projects = 'projects___systems___projects',
  projects___systems___projects___id = 'projects___systems___projects___id',
  projects___systems___projects___children = 'projects___systems___projects___children',
  projects___systems___projects___name = 'projects___systems___projects___name',
  projects___systems___projects___startDate = 'projects___systems___projects___startDate',
  projects___systems___projects___during = 'projects___systems___projects___during',
  projects___systems___projects___comment = 'projects___systems___projects___comment',
  projects___systems___projects___roles = 'projects___systems___projects___roles',
  projects___systems___projects___assigns = 'projects___systems___projects___assigns',
  projects___systems___projects___systems = 'projects___systems___projects___systems',
  projects___systems___projects___languages = 'projects___systems___projects___languages',
  projects___systems___projects___tools = 'projects___systems___projects___tools',
  projects___systems___projects___spaceId = 'projects___systems___projects___spaceId',
  projects___systems___projects___contentful_id = 'projects___systems___projects___contentful_id',
  projects___systems___projects___createdAt = 'projects___systems___projects___createdAt',
  projects___systems___projects___updatedAt = 'projects___systems___projects___updatedAt',
  projects___systems___projects___node_locale = 'projects___systems___projects___node_locale',
  projects___systems___skillmap = 'projects___systems___skillmap',
  projects___systems___skillmap___id = 'projects___systems___skillmap___id',
  projects___systems___skillmap___children = 'projects___systems___skillmap___children',
  projects___systems___skillmap___name = 'projects___systems___skillmap___name',
  projects___systems___skillmap___skills = 'projects___systems___skillmap___skills',
  projects___systems___skillmap___spaceId = 'projects___systems___skillmap___spaceId',
  projects___systems___skillmap___contentful_id = 'projects___systems___skillmap___contentful_id',
  projects___systems___skillmap___createdAt = 'projects___systems___skillmap___createdAt',
  projects___systems___skillmap___updatedAt = 'projects___systems___skillmap___updatedAt',
  projects___systems___skillmap___node_locale = 'projects___systems___skillmap___node_locale',
  projects___languages = 'projects___languages',
  projects___languages___id = 'projects___languages___id',
  projects___languages___parent___id = 'projects___languages___parent___id',
  projects___languages___parent___children = 'projects___languages___parent___children',
  projects___languages___children = 'projects___languages___children',
  projects___languages___children___id = 'projects___languages___children___id',
  projects___languages___children___children = 'projects___languages___children___children',
  projects___languages___internal___content = 'projects___languages___internal___content',
  projects___languages___internal___contentDigest = 'projects___languages___internal___contentDigest',
  projects___languages___internal___description = 'projects___languages___internal___description',
  projects___languages___internal___fieldOwners = 'projects___languages___internal___fieldOwners',
  projects___languages___internal___ignoreType = 'projects___languages___internal___ignoreType',
  projects___languages___internal___mediaType = 'projects___languages___internal___mediaType',
  projects___languages___internal___owner = 'projects___languages___internal___owner',
  projects___languages___internal___type = 'projects___languages___internal___type',
  projects___languages___name = 'projects___languages___name',
  projects___languages___level = 'projects___languages___level',
  projects___languages___osses = 'projects___languages___osses',
  projects___languages___osses___id = 'projects___languages___osses___id',
  projects___languages___osses___children = 'projects___languages___osses___children',
  projects___languages___osses___name = 'projects___languages___osses___name',
  projects___languages___osses___slug = 'projects___languages___osses___slug',
  projects___languages___osses___startDate = 'projects___languages___osses___startDate',
  projects___languages___osses___during = 'projects___languages___osses___during',
  projects___languages___osses___comment = 'projects___languages___osses___comment',
  projects___languages___osses___siteUrl = 'projects___languages___osses___siteUrl',
  projects___languages___osses___sourceUrl = 'projects___languages___osses___sourceUrl',
  projects___languages___osses___roles = 'projects___languages___osses___roles',
  projects___languages___osses___assigns = 'projects___languages___osses___assigns',
  projects___languages___osses___systems = 'projects___languages___osses___systems',
  projects___languages___osses___languages = 'projects___languages___osses___languages',
  projects___languages___osses___tools = 'projects___languages___osses___tools',
  projects___languages___osses___spaceId = 'projects___languages___osses___spaceId',
  projects___languages___osses___contentful_id = 'projects___languages___osses___contentful_id',
  projects___languages___osses___createdAt = 'projects___languages___osses___createdAt',
  projects___languages___osses___updatedAt = 'projects___languages___osses___updatedAt',
  projects___languages___osses___node_locale = 'projects___languages___osses___node_locale',
  projects___languages___spaceId = 'projects___languages___spaceId',
  projects___languages___contentful_id = 'projects___languages___contentful_id',
  projects___languages___createdAt = 'projects___languages___createdAt',
  projects___languages___updatedAt = 'projects___languages___updatedAt',
  projects___languages___sys___type = 'projects___languages___sys___type',
  projects___languages___sys___revision = 'projects___languages___sys___revision',
  projects___languages___node_locale = 'projects___languages___node_locale',
  projects___languages___projects = 'projects___languages___projects',
  projects___languages___projects___id = 'projects___languages___projects___id',
  projects___languages___projects___children = 'projects___languages___projects___children',
  projects___languages___projects___name = 'projects___languages___projects___name',
  projects___languages___projects___startDate = 'projects___languages___projects___startDate',
  projects___languages___projects___during = 'projects___languages___projects___during',
  projects___languages___projects___comment = 'projects___languages___projects___comment',
  projects___languages___projects___roles = 'projects___languages___projects___roles',
  projects___languages___projects___assigns = 'projects___languages___projects___assigns',
  projects___languages___projects___systems = 'projects___languages___projects___systems',
  projects___languages___projects___languages = 'projects___languages___projects___languages',
  projects___languages___projects___tools = 'projects___languages___projects___tools',
  projects___languages___projects___spaceId = 'projects___languages___projects___spaceId',
  projects___languages___projects___contentful_id = 'projects___languages___projects___contentful_id',
  projects___languages___projects___createdAt = 'projects___languages___projects___createdAt',
  projects___languages___projects___updatedAt = 'projects___languages___projects___updatedAt',
  projects___languages___projects___node_locale = 'projects___languages___projects___node_locale',
  projects___languages___skillmap = 'projects___languages___skillmap',
  projects___languages___skillmap___id = 'projects___languages___skillmap___id',
  projects___languages___skillmap___children = 'projects___languages___skillmap___children',
  projects___languages___skillmap___name = 'projects___languages___skillmap___name',
  projects___languages___skillmap___skills = 'projects___languages___skillmap___skills',
  projects___languages___skillmap___spaceId = 'projects___languages___skillmap___spaceId',
  projects___languages___skillmap___contentful_id = 'projects___languages___skillmap___contentful_id',
  projects___languages___skillmap___createdAt = 'projects___languages___skillmap___createdAt',
  projects___languages___skillmap___updatedAt = 'projects___languages___skillmap___updatedAt',
  projects___languages___skillmap___node_locale = 'projects___languages___skillmap___node_locale',
  projects___tools = 'projects___tools',
  projects___tools___id = 'projects___tools___id',
  projects___tools___parent___id = 'projects___tools___parent___id',
  projects___tools___parent___children = 'projects___tools___parent___children',
  projects___tools___children = 'projects___tools___children',
  projects___tools___children___id = 'projects___tools___children___id',
  projects___tools___children___children = 'projects___tools___children___children',
  projects___tools___internal___content = 'projects___tools___internal___content',
  projects___tools___internal___contentDigest = 'projects___tools___internal___contentDigest',
  projects___tools___internal___description = 'projects___tools___internal___description',
  projects___tools___internal___fieldOwners = 'projects___tools___internal___fieldOwners',
  projects___tools___internal___ignoreType = 'projects___tools___internal___ignoreType',
  projects___tools___internal___mediaType = 'projects___tools___internal___mediaType',
  projects___tools___internal___owner = 'projects___tools___internal___owner',
  projects___tools___internal___type = 'projects___tools___internal___type',
  projects___tools___name = 'projects___tools___name',
  projects___tools___level = 'projects___tools___level',
  projects___tools___osses = 'projects___tools___osses',
  projects___tools___osses___id = 'projects___tools___osses___id',
  projects___tools___osses___children = 'projects___tools___osses___children',
  projects___tools___osses___name = 'projects___tools___osses___name',
  projects___tools___osses___slug = 'projects___tools___osses___slug',
  projects___tools___osses___startDate = 'projects___tools___osses___startDate',
  projects___tools___osses___during = 'projects___tools___osses___during',
  projects___tools___osses___comment = 'projects___tools___osses___comment',
  projects___tools___osses___siteUrl = 'projects___tools___osses___siteUrl',
  projects___tools___osses___sourceUrl = 'projects___tools___osses___sourceUrl',
  projects___tools___osses___roles = 'projects___tools___osses___roles',
  projects___tools___osses___assigns = 'projects___tools___osses___assigns',
  projects___tools___osses___systems = 'projects___tools___osses___systems',
  projects___tools___osses___languages = 'projects___tools___osses___languages',
  projects___tools___osses___tools = 'projects___tools___osses___tools',
  projects___tools___osses___spaceId = 'projects___tools___osses___spaceId',
  projects___tools___osses___contentful_id = 'projects___tools___osses___contentful_id',
  projects___tools___osses___createdAt = 'projects___tools___osses___createdAt',
  projects___tools___osses___updatedAt = 'projects___tools___osses___updatedAt',
  projects___tools___osses___node_locale = 'projects___tools___osses___node_locale',
  projects___tools___spaceId = 'projects___tools___spaceId',
  projects___tools___contentful_id = 'projects___tools___contentful_id',
  projects___tools___createdAt = 'projects___tools___createdAt',
  projects___tools___updatedAt = 'projects___tools___updatedAt',
  projects___tools___sys___type = 'projects___tools___sys___type',
  projects___tools___sys___revision = 'projects___tools___sys___revision',
  projects___tools___node_locale = 'projects___tools___node_locale',
  projects___tools___projects = 'projects___tools___projects',
  projects___tools___projects___id = 'projects___tools___projects___id',
  projects___tools___projects___children = 'projects___tools___projects___children',
  projects___tools___projects___name = 'projects___tools___projects___name',
  projects___tools___projects___startDate = 'projects___tools___projects___startDate',
  projects___tools___projects___during = 'projects___tools___projects___during',
  projects___tools___projects___comment = 'projects___tools___projects___comment',
  projects___tools___projects___roles = 'projects___tools___projects___roles',
  projects___tools___projects___assigns = 'projects___tools___projects___assigns',
  projects___tools___projects___systems = 'projects___tools___projects___systems',
  projects___tools___projects___languages = 'projects___tools___projects___languages',
  projects___tools___projects___tools = 'projects___tools___projects___tools',
  projects___tools___projects___spaceId = 'projects___tools___projects___spaceId',
  projects___tools___projects___contentful_id = 'projects___tools___projects___contentful_id',
  projects___tools___projects___createdAt = 'projects___tools___projects___createdAt',
  projects___tools___projects___updatedAt = 'projects___tools___projects___updatedAt',
  projects___tools___projects___node_locale = 'projects___tools___projects___node_locale',
  projects___tools___skillmap = 'projects___tools___skillmap',
  projects___tools___skillmap___id = 'projects___tools___skillmap___id',
  projects___tools___skillmap___children = 'projects___tools___skillmap___children',
  projects___tools___skillmap___name = 'projects___tools___skillmap___name',
  projects___tools___skillmap___skills = 'projects___tools___skillmap___skills',
  projects___tools___skillmap___spaceId = 'projects___tools___skillmap___spaceId',
  projects___tools___skillmap___contentful_id = 'projects___tools___skillmap___contentful_id',
  projects___tools___skillmap___createdAt = 'projects___tools___skillmap___createdAt',
  projects___tools___skillmap___updatedAt = 'projects___tools___skillmap___updatedAt',
  projects___tools___skillmap___node_locale = 'projects___tools___skillmap___node_locale',
  projects___image___id = 'projects___image___id',
  projects___image___parent___id = 'projects___image___parent___id',
  projects___image___parent___children = 'projects___image___parent___children',
  projects___image___children = 'projects___image___children',
  projects___image___children___id = 'projects___image___children___id',
  projects___image___children___children = 'projects___image___children___children',
  projects___image___internal___content = 'projects___image___internal___content',
  projects___image___internal___contentDigest = 'projects___image___internal___contentDigest',
  projects___image___internal___description = 'projects___image___internal___description',
  projects___image___internal___fieldOwners = 'projects___image___internal___fieldOwners',
  projects___image___internal___ignoreType = 'projects___image___internal___ignoreType',
  projects___image___internal___mediaType = 'projects___image___internal___mediaType',
  projects___image___internal___owner = 'projects___image___internal___owner',
  projects___image___internal___type = 'projects___image___internal___type',
  projects___image___image = 'projects___image___image',
  projects___image___sys___type = 'projects___image___sys___type',
  projects___spaceId = 'projects___spaceId',
  projects___contentful_id = 'projects___contentful_id',
  projects___createdAt = 'projects___createdAt',
  projects___updatedAt = 'projects___updatedAt',
  projects___sys___type = 'projects___sys___type',
  projects___sys___revision = 'projects___sys___revision',
  projects___node_locale = 'projects___node_locale',
  projects___childContentfulProjectsImageTextNode___id = 'projects___childContentfulProjectsImageTextNode___id',
  projects___childContentfulProjectsImageTextNode___parent___id = 'projects___childContentfulProjectsImageTextNode___parent___id',
  projects___childContentfulProjectsImageTextNode___parent___children = 'projects___childContentfulProjectsImageTextNode___parent___children',
  projects___childContentfulProjectsImageTextNode___children = 'projects___childContentfulProjectsImageTextNode___children',
  projects___childContentfulProjectsImageTextNode___children___id = 'projects___childContentfulProjectsImageTextNode___children___id',
  projects___childContentfulProjectsImageTextNode___children___children = 'projects___childContentfulProjectsImageTextNode___children___children',
  projects___childContentfulProjectsImageTextNode___internal___content = 'projects___childContentfulProjectsImageTextNode___internal___content',
  projects___childContentfulProjectsImageTextNode___internal___contentDigest = 'projects___childContentfulProjectsImageTextNode___internal___contentDigest',
  projects___childContentfulProjectsImageTextNode___internal___description = 'projects___childContentfulProjectsImageTextNode___internal___description',
  projects___childContentfulProjectsImageTextNode___internal___fieldOwners = 'projects___childContentfulProjectsImageTextNode___internal___fieldOwners',
  projects___childContentfulProjectsImageTextNode___internal___ignoreType = 'projects___childContentfulProjectsImageTextNode___internal___ignoreType',
  projects___childContentfulProjectsImageTextNode___internal___mediaType = 'projects___childContentfulProjectsImageTextNode___internal___mediaType',
  projects___childContentfulProjectsImageTextNode___internal___owner = 'projects___childContentfulProjectsImageTextNode___internal___owner',
  projects___childContentfulProjectsImageTextNode___internal___type = 'projects___childContentfulProjectsImageTextNode___internal___type',
  projects___childContentfulProjectsImageTextNode___image = 'projects___childContentfulProjectsImageTextNode___image',
  projects___childContentfulProjectsImageTextNode___sys___type = 'projects___childContentfulProjectsImageTextNode___sys___type',
  osses = 'osses',
  osses___id = 'osses___id',
  osses___parent___id = 'osses___parent___id',
  osses___parent___parent___id = 'osses___parent___parent___id',
  osses___parent___parent___children = 'osses___parent___parent___children',
  osses___parent___children = 'osses___parent___children',
  osses___parent___children___id = 'osses___parent___children___id',
  osses___parent___children___children = 'osses___parent___children___children',
  osses___parent___internal___content = 'osses___parent___internal___content',
  osses___parent___internal___contentDigest = 'osses___parent___internal___contentDigest',
  osses___parent___internal___description = 'osses___parent___internal___description',
  osses___parent___internal___fieldOwners = 'osses___parent___internal___fieldOwners',
  osses___parent___internal___ignoreType = 'osses___parent___internal___ignoreType',
  osses___parent___internal___mediaType = 'osses___parent___internal___mediaType',
  osses___parent___internal___owner = 'osses___parent___internal___owner',
  osses___parent___internal___type = 'osses___parent___internal___type',
  osses___children = 'osses___children',
  osses___children___id = 'osses___children___id',
  osses___children___parent___id = 'osses___children___parent___id',
  osses___children___parent___children = 'osses___children___parent___children',
  osses___children___children = 'osses___children___children',
  osses___children___children___id = 'osses___children___children___id',
  osses___children___children___children = 'osses___children___children___children',
  osses___children___internal___content = 'osses___children___internal___content',
  osses___children___internal___contentDigest = 'osses___children___internal___contentDigest',
  osses___children___internal___description = 'osses___children___internal___description',
  osses___children___internal___fieldOwners = 'osses___children___internal___fieldOwners',
  osses___children___internal___ignoreType = 'osses___children___internal___ignoreType',
  osses___children___internal___mediaType = 'osses___children___internal___mediaType',
  osses___children___internal___owner = 'osses___children___internal___owner',
  osses___children___internal___type = 'osses___children___internal___type',
  osses___internal___content = 'osses___internal___content',
  osses___internal___contentDigest = 'osses___internal___contentDigest',
  osses___internal___description = 'osses___internal___description',
  osses___internal___fieldOwners = 'osses___internal___fieldOwners',
  osses___internal___ignoreType = 'osses___internal___ignoreType',
  osses___internal___mediaType = 'osses___internal___mediaType',
  osses___internal___owner = 'osses___internal___owner',
  osses___internal___type = 'osses___internal___type',
  osses___name = 'osses___name',
  osses___slug = 'osses___slug',
  osses___startDate = 'osses___startDate',
  osses___during = 'osses___during',
  osses___comment = 'osses___comment',
  osses___siteUrl = 'osses___siteUrl',
  osses___sourceUrl = 'osses___sourceUrl',
  osses___mainImage___id = 'osses___mainImage___id',
  osses___mainImage___parent___id = 'osses___mainImage___parent___id',
  osses___mainImage___parent___children = 'osses___mainImage___parent___children',
  osses___mainImage___children = 'osses___mainImage___children',
  osses___mainImage___children___id = 'osses___mainImage___children___id',
  osses___mainImage___children___children = 'osses___mainImage___children___children',
  osses___mainImage___internal___content = 'osses___mainImage___internal___content',
  osses___mainImage___internal___contentDigest = 'osses___mainImage___internal___contentDigest',
  osses___mainImage___internal___description = 'osses___mainImage___internal___description',
  osses___mainImage___internal___fieldOwners = 'osses___mainImage___internal___fieldOwners',
  osses___mainImage___internal___ignoreType = 'osses___mainImage___internal___ignoreType',
  osses___mainImage___internal___mediaType = 'osses___mainImage___internal___mediaType',
  osses___mainImage___internal___owner = 'osses___mainImage___internal___owner',
  osses___mainImage___internal___type = 'osses___mainImage___internal___type',
  osses___mainImage___contentful_id = 'osses___mainImage___contentful_id',
  osses___mainImage___spaceId = 'osses___mainImage___spaceId',
  osses___mainImage___createdAt = 'osses___mainImage___createdAt',
  osses___mainImage___updatedAt = 'osses___mainImage___updatedAt',
  osses___mainImage___file___url = 'osses___mainImage___file___url',
  osses___mainImage___file___fileName = 'osses___mainImage___file___fileName',
  osses___mainImage___file___contentType = 'osses___mainImage___file___contentType',
  osses___mainImage___title = 'osses___mainImage___title',
  osses___mainImage___description = 'osses___mainImage___description',
  osses___mainImage___node_locale = 'osses___mainImage___node_locale',
  osses___mainImage___sys___type = 'osses___mainImage___sys___type',
  osses___mainImage___sys___revision = 'osses___mainImage___sys___revision',
  osses___mainImage___localFile___sourceInstanceName = 'osses___mainImage___localFile___sourceInstanceName',
  osses___mainImage___localFile___absolutePath = 'osses___mainImage___localFile___absolutePath',
  osses___mainImage___localFile___relativePath = 'osses___mainImage___localFile___relativePath',
  osses___mainImage___localFile___extension = 'osses___mainImage___localFile___extension',
  osses___mainImage___localFile___size = 'osses___mainImage___localFile___size',
  osses___mainImage___localFile___prettySize = 'osses___mainImage___localFile___prettySize',
  osses___mainImage___localFile___modifiedTime = 'osses___mainImage___localFile___modifiedTime',
  osses___mainImage___localFile___accessTime = 'osses___mainImage___localFile___accessTime',
  osses___mainImage___localFile___changeTime = 'osses___mainImage___localFile___changeTime',
  osses___mainImage___localFile___birthTime = 'osses___mainImage___localFile___birthTime',
  osses___mainImage___localFile___root = 'osses___mainImage___localFile___root',
  osses___mainImage___localFile___dir = 'osses___mainImage___localFile___dir',
  osses___mainImage___localFile___base = 'osses___mainImage___localFile___base',
  osses___mainImage___localFile___ext = 'osses___mainImage___localFile___ext',
  osses___mainImage___localFile___name = 'osses___mainImage___localFile___name',
  osses___mainImage___localFile___relativeDirectory = 'osses___mainImage___localFile___relativeDirectory',
  osses___mainImage___localFile___dev = 'osses___mainImage___localFile___dev',
  osses___mainImage___localFile___mode = 'osses___mainImage___localFile___mode',
  osses___mainImage___localFile___nlink = 'osses___mainImage___localFile___nlink',
  osses___mainImage___localFile___uid = 'osses___mainImage___localFile___uid',
  osses___mainImage___localFile___gid = 'osses___mainImage___localFile___gid',
  osses___mainImage___localFile___rdev = 'osses___mainImage___localFile___rdev',
  osses___mainImage___localFile___ino = 'osses___mainImage___localFile___ino',
  osses___mainImage___localFile___atimeMs = 'osses___mainImage___localFile___atimeMs',
  osses___mainImage___localFile___mtimeMs = 'osses___mainImage___localFile___mtimeMs',
  osses___mainImage___localFile___ctimeMs = 'osses___mainImage___localFile___ctimeMs',
  osses___mainImage___localFile___atime = 'osses___mainImage___localFile___atime',
  osses___mainImage___localFile___mtime = 'osses___mainImage___localFile___mtime',
  osses___mainImage___localFile___ctime = 'osses___mainImage___localFile___ctime',
  osses___mainImage___localFile___birthtime = 'osses___mainImage___localFile___birthtime',
  osses___mainImage___localFile___birthtimeMs = 'osses___mainImage___localFile___birthtimeMs',
  osses___mainImage___localFile___blksize = 'osses___mainImage___localFile___blksize',
  osses___mainImage___localFile___blocks = 'osses___mainImage___localFile___blocks',
  osses___mainImage___localFile___url = 'osses___mainImage___localFile___url',
  osses___mainImage___localFile___id = 'osses___mainImage___localFile___id',
  osses___mainImage___localFile___children = 'osses___mainImage___localFile___children',
  osses___mainImage___fixed___base64 = 'osses___mainImage___fixed___base64',
  osses___mainImage___fixed___tracedSVG = 'osses___mainImage___fixed___tracedSVG',
  osses___mainImage___fixed___aspectRatio = 'osses___mainImage___fixed___aspectRatio',
  osses___mainImage___fixed___width = 'osses___mainImage___fixed___width',
  osses___mainImage___fixed___height = 'osses___mainImage___fixed___height',
  osses___mainImage___fixed___src = 'osses___mainImage___fixed___src',
  osses___mainImage___fixed___srcSet = 'osses___mainImage___fixed___srcSet',
  osses___mainImage___fixed___srcWebp = 'osses___mainImage___fixed___srcWebp',
  osses___mainImage___fixed___srcSetWebp = 'osses___mainImage___fixed___srcSetWebp',
  osses___mainImage___resolutions___base64 = 'osses___mainImage___resolutions___base64',
  osses___mainImage___resolutions___tracedSVG = 'osses___mainImage___resolutions___tracedSVG',
  osses___mainImage___resolutions___aspectRatio = 'osses___mainImage___resolutions___aspectRatio',
  osses___mainImage___resolutions___width = 'osses___mainImage___resolutions___width',
  osses___mainImage___resolutions___height = 'osses___mainImage___resolutions___height',
  osses___mainImage___resolutions___src = 'osses___mainImage___resolutions___src',
  osses___mainImage___resolutions___srcSet = 'osses___mainImage___resolutions___srcSet',
  osses___mainImage___resolutions___srcWebp = 'osses___mainImage___resolutions___srcWebp',
  osses___mainImage___resolutions___srcSetWebp = 'osses___mainImage___resolutions___srcSetWebp',
  osses___mainImage___fluid___base64 = 'osses___mainImage___fluid___base64',
  osses___mainImage___fluid___tracedSVG = 'osses___mainImage___fluid___tracedSVG',
  osses___mainImage___fluid___aspectRatio = 'osses___mainImage___fluid___aspectRatio',
  osses___mainImage___fluid___src = 'osses___mainImage___fluid___src',
  osses___mainImage___fluid___srcSet = 'osses___mainImage___fluid___srcSet',
  osses___mainImage___fluid___srcWebp = 'osses___mainImage___fluid___srcWebp',
  osses___mainImage___fluid___srcSetWebp = 'osses___mainImage___fluid___srcSetWebp',
  osses___mainImage___fluid___sizes = 'osses___mainImage___fluid___sizes',
  osses___mainImage___sizes___base64 = 'osses___mainImage___sizes___base64',
  osses___mainImage___sizes___tracedSVG = 'osses___mainImage___sizes___tracedSVG',
  osses___mainImage___sizes___aspectRatio = 'osses___mainImage___sizes___aspectRatio',
  osses___mainImage___sizes___src = 'osses___mainImage___sizes___src',
  osses___mainImage___sizes___srcSet = 'osses___mainImage___sizes___srcSet',
  osses___mainImage___sizes___srcWebp = 'osses___mainImage___sizes___srcWebp',
  osses___mainImage___sizes___srcSetWebp = 'osses___mainImage___sizes___srcSetWebp',
  osses___mainImage___sizes___sizes = 'osses___mainImage___sizes___sizes',
  osses___mainImage___resize___base64 = 'osses___mainImage___resize___base64',
  osses___mainImage___resize___tracedSVG = 'osses___mainImage___resize___tracedSVG',
  osses___mainImage___resize___src = 'osses___mainImage___resize___src',
  osses___mainImage___resize___width = 'osses___mainImage___resize___width',
  osses___mainImage___resize___height = 'osses___mainImage___resize___height',
  osses___mainImage___resize___aspectRatio = 'osses___mainImage___resize___aspectRatio',
  osses___roles = 'osses___roles',
  osses___roles___id = 'osses___roles___id',
  osses___roles___parent___id = 'osses___roles___parent___id',
  osses___roles___parent___children = 'osses___roles___parent___children',
  osses___roles___children = 'osses___roles___children',
  osses___roles___children___id = 'osses___roles___children___id',
  osses___roles___children___children = 'osses___roles___children___children',
  osses___roles___internal___content = 'osses___roles___internal___content',
  osses___roles___internal___contentDigest = 'osses___roles___internal___contentDigest',
  osses___roles___internal___description = 'osses___roles___internal___description',
  osses___roles___internal___fieldOwners = 'osses___roles___internal___fieldOwners',
  osses___roles___internal___ignoreType = 'osses___roles___internal___ignoreType',
  osses___roles___internal___mediaType = 'osses___roles___internal___mediaType',
  osses___roles___internal___owner = 'osses___roles___internal___owner',
  osses___roles___internal___type = 'osses___roles___internal___type',
  osses___roles___name = 'osses___roles___name',
  osses___roles___projects = 'osses___roles___projects',
  osses___roles___projects___id = 'osses___roles___projects___id',
  osses___roles___projects___children = 'osses___roles___projects___children',
  osses___roles___projects___name = 'osses___roles___projects___name',
  osses___roles___projects___startDate = 'osses___roles___projects___startDate',
  osses___roles___projects___during = 'osses___roles___projects___during',
  osses___roles___projects___comment = 'osses___roles___projects___comment',
  osses___roles___projects___roles = 'osses___roles___projects___roles',
  osses___roles___projects___assigns = 'osses___roles___projects___assigns',
  osses___roles___projects___systems = 'osses___roles___projects___systems',
  osses___roles___projects___languages = 'osses___roles___projects___languages',
  osses___roles___projects___tools = 'osses___roles___projects___tools',
  osses___roles___projects___spaceId = 'osses___roles___projects___spaceId',
  osses___roles___projects___contentful_id = 'osses___roles___projects___contentful_id',
  osses___roles___projects___createdAt = 'osses___roles___projects___createdAt',
  osses___roles___projects___updatedAt = 'osses___roles___projects___updatedAt',
  osses___roles___projects___node_locale = 'osses___roles___projects___node_locale',
  osses___roles___osses = 'osses___roles___osses',
  osses___roles___osses___id = 'osses___roles___osses___id',
  osses___roles___osses___children = 'osses___roles___osses___children',
  osses___roles___osses___name = 'osses___roles___osses___name',
  osses___roles___osses___slug = 'osses___roles___osses___slug',
  osses___roles___osses___startDate = 'osses___roles___osses___startDate',
  osses___roles___osses___during = 'osses___roles___osses___during',
  osses___roles___osses___comment = 'osses___roles___osses___comment',
  osses___roles___osses___siteUrl = 'osses___roles___osses___siteUrl',
  osses___roles___osses___sourceUrl = 'osses___roles___osses___sourceUrl',
  osses___roles___osses___roles = 'osses___roles___osses___roles',
  osses___roles___osses___assigns = 'osses___roles___osses___assigns',
  osses___roles___osses___systems = 'osses___roles___osses___systems',
  osses___roles___osses___languages = 'osses___roles___osses___languages',
  osses___roles___osses___tools = 'osses___roles___osses___tools',
  osses___roles___osses___spaceId = 'osses___roles___osses___spaceId',
  osses___roles___osses___contentful_id = 'osses___roles___osses___contentful_id',
  osses___roles___osses___createdAt = 'osses___roles___osses___createdAt',
  osses___roles___osses___updatedAt = 'osses___roles___osses___updatedAt',
  osses___roles___osses___node_locale = 'osses___roles___osses___node_locale',
  osses___roles___spaceId = 'osses___roles___spaceId',
  osses___roles___contentful_id = 'osses___roles___contentful_id',
  osses___roles___createdAt = 'osses___roles___createdAt',
  osses___roles___updatedAt = 'osses___roles___updatedAt',
  osses___roles___sys___type = 'osses___roles___sys___type',
  osses___roles___sys___revision = 'osses___roles___sys___revision',
  osses___roles___node_locale = 'osses___roles___node_locale',
  osses___assigns = 'osses___assigns',
  osses___assigns___id = 'osses___assigns___id',
  osses___assigns___parent___id = 'osses___assigns___parent___id',
  osses___assigns___parent___children = 'osses___assigns___parent___children',
  osses___assigns___children = 'osses___assigns___children',
  osses___assigns___children___id = 'osses___assigns___children___id',
  osses___assigns___children___children = 'osses___assigns___children___children',
  osses___assigns___internal___content = 'osses___assigns___internal___content',
  osses___assigns___internal___contentDigest = 'osses___assigns___internal___contentDigest',
  osses___assigns___internal___description = 'osses___assigns___internal___description',
  osses___assigns___internal___fieldOwners = 'osses___assigns___internal___fieldOwners',
  osses___assigns___internal___ignoreType = 'osses___assigns___internal___ignoreType',
  osses___assigns___internal___mediaType = 'osses___assigns___internal___mediaType',
  osses___assigns___internal___owner = 'osses___assigns___internal___owner',
  osses___assigns___internal___type = 'osses___assigns___internal___type',
  osses___assigns___name = 'osses___assigns___name',
  osses___assigns___projects = 'osses___assigns___projects',
  osses___assigns___projects___id = 'osses___assigns___projects___id',
  osses___assigns___projects___children = 'osses___assigns___projects___children',
  osses___assigns___projects___name = 'osses___assigns___projects___name',
  osses___assigns___projects___startDate = 'osses___assigns___projects___startDate',
  osses___assigns___projects___during = 'osses___assigns___projects___during',
  osses___assigns___projects___comment = 'osses___assigns___projects___comment',
  osses___assigns___projects___roles = 'osses___assigns___projects___roles',
  osses___assigns___projects___assigns = 'osses___assigns___projects___assigns',
  osses___assigns___projects___systems = 'osses___assigns___projects___systems',
  osses___assigns___projects___languages = 'osses___assigns___projects___languages',
  osses___assigns___projects___tools = 'osses___assigns___projects___tools',
  osses___assigns___projects___spaceId = 'osses___assigns___projects___spaceId',
  osses___assigns___projects___contentful_id = 'osses___assigns___projects___contentful_id',
  osses___assigns___projects___createdAt = 'osses___assigns___projects___createdAt',
  osses___assigns___projects___updatedAt = 'osses___assigns___projects___updatedAt',
  osses___assigns___projects___node_locale = 'osses___assigns___projects___node_locale',
  osses___assigns___osses = 'osses___assigns___osses',
  osses___assigns___osses___id = 'osses___assigns___osses___id',
  osses___assigns___osses___children = 'osses___assigns___osses___children',
  osses___assigns___osses___name = 'osses___assigns___osses___name',
  osses___assigns___osses___slug = 'osses___assigns___osses___slug',
  osses___assigns___osses___startDate = 'osses___assigns___osses___startDate',
  osses___assigns___osses___during = 'osses___assigns___osses___during',
  osses___assigns___osses___comment = 'osses___assigns___osses___comment',
  osses___assigns___osses___siteUrl = 'osses___assigns___osses___siteUrl',
  osses___assigns___osses___sourceUrl = 'osses___assigns___osses___sourceUrl',
  osses___assigns___osses___roles = 'osses___assigns___osses___roles',
  osses___assigns___osses___assigns = 'osses___assigns___osses___assigns',
  osses___assigns___osses___systems = 'osses___assigns___osses___systems',
  osses___assigns___osses___languages = 'osses___assigns___osses___languages',
  osses___assigns___osses___tools = 'osses___assigns___osses___tools',
  osses___assigns___osses___spaceId = 'osses___assigns___osses___spaceId',
  osses___assigns___osses___contentful_id = 'osses___assigns___osses___contentful_id',
  osses___assigns___osses___createdAt = 'osses___assigns___osses___createdAt',
  osses___assigns___osses___updatedAt = 'osses___assigns___osses___updatedAt',
  osses___assigns___osses___node_locale = 'osses___assigns___osses___node_locale',
  osses___assigns___spaceId = 'osses___assigns___spaceId',
  osses___assigns___contentful_id = 'osses___assigns___contentful_id',
  osses___assigns___createdAt = 'osses___assigns___createdAt',
  osses___assigns___updatedAt = 'osses___assigns___updatedAt',
  osses___assigns___sys___type = 'osses___assigns___sys___type',
  osses___assigns___sys___revision = 'osses___assigns___sys___revision',
  osses___assigns___node_locale = 'osses___assigns___node_locale',
  osses___systems = 'osses___systems',
  osses___systems___id = 'osses___systems___id',
  osses___systems___parent___id = 'osses___systems___parent___id',
  osses___systems___parent___children = 'osses___systems___parent___children',
  osses___systems___children = 'osses___systems___children',
  osses___systems___children___id = 'osses___systems___children___id',
  osses___systems___children___children = 'osses___systems___children___children',
  osses___systems___internal___content = 'osses___systems___internal___content',
  osses___systems___internal___contentDigest = 'osses___systems___internal___contentDigest',
  osses___systems___internal___description = 'osses___systems___internal___description',
  osses___systems___internal___fieldOwners = 'osses___systems___internal___fieldOwners',
  osses___systems___internal___ignoreType = 'osses___systems___internal___ignoreType',
  osses___systems___internal___mediaType = 'osses___systems___internal___mediaType',
  osses___systems___internal___owner = 'osses___systems___internal___owner',
  osses___systems___internal___type = 'osses___systems___internal___type',
  osses___systems___name = 'osses___systems___name',
  osses___systems___level = 'osses___systems___level',
  osses___systems___osses = 'osses___systems___osses',
  osses___systems___osses___id = 'osses___systems___osses___id',
  osses___systems___osses___children = 'osses___systems___osses___children',
  osses___systems___osses___name = 'osses___systems___osses___name',
  osses___systems___osses___slug = 'osses___systems___osses___slug',
  osses___systems___osses___startDate = 'osses___systems___osses___startDate',
  osses___systems___osses___during = 'osses___systems___osses___during',
  osses___systems___osses___comment = 'osses___systems___osses___comment',
  osses___systems___osses___siteUrl = 'osses___systems___osses___siteUrl',
  osses___systems___osses___sourceUrl = 'osses___systems___osses___sourceUrl',
  osses___systems___osses___roles = 'osses___systems___osses___roles',
  osses___systems___osses___assigns = 'osses___systems___osses___assigns',
  osses___systems___osses___systems = 'osses___systems___osses___systems',
  osses___systems___osses___languages = 'osses___systems___osses___languages',
  osses___systems___osses___tools = 'osses___systems___osses___tools',
  osses___systems___osses___spaceId = 'osses___systems___osses___spaceId',
  osses___systems___osses___contentful_id = 'osses___systems___osses___contentful_id',
  osses___systems___osses___createdAt = 'osses___systems___osses___createdAt',
  osses___systems___osses___updatedAt = 'osses___systems___osses___updatedAt',
  osses___systems___osses___node_locale = 'osses___systems___osses___node_locale',
  osses___systems___spaceId = 'osses___systems___spaceId',
  osses___systems___contentful_id = 'osses___systems___contentful_id',
  osses___systems___createdAt = 'osses___systems___createdAt',
  osses___systems___updatedAt = 'osses___systems___updatedAt',
  osses___systems___sys___type = 'osses___systems___sys___type',
  osses___systems___sys___revision = 'osses___systems___sys___revision',
  osses___systems___node_locale = 'osses___systems___node_locale',
  osses___systems___projects = 'osses___systems___projects',
  osses___systems___projects___id = 'osses___systems___projects___id',
  osses___systems___projects___children = 'osses___systems___projects___children',
  osses___systems___projects___name = 'osses___systems___projects___name',
  osses___systems___projects___startDate = 'osses___systems___projects___startDate',
  osses___systems___projects___during = 'osses___systems___projects___during',
  osses___systems___projects___comment = 'osses___systems___projects___comment',
  osses___systems___projects___roles = 'osses___systems___projects___roles',
  osses___systems___projects___assigns = 'osses___systems___projects___assigns',
  osses___systems___projects___systems = 'osses___systems___projects___systems',
  osses___systems___projects___languages = 'osses___systems___projects___languages',
  osses___systems___projects___tools = 'osses___systems___projects___tools',
  osses___systems___projects___spaceId = 'osses___systems___projects___spaceId',
  osses___systems___projects___contentful_id = 'osses___systems___projects___contentful_id',
  osses___systems___projects___createdAt = 'osses___systems___projects___createdAt',
  osses___systems___projects___updatedAt = 'osses___systems___projects___updatedAt',
  osses___systems___projects___node_locale = 'osses___systems___projects___node_locale',
  osses___systems___skillmap = 'osses___systems___skillmap',
  osses___systems___skillmap___id = 'osses___systems___skillmap___id',
  osses___systems___skillmap___children = 'osses___systems___skillmap___children',
  osses___systems___skillmap___name = 'osses___systems___skillmap___name',
  osses___systems___skillmap___skills = 'osses___systems___skillmap___skills',
  osses___systems___skillmap___spaceId = 'osses___systems___skillmap___spaceId',
  osses___systems___skillmap___contentful_id = 'osses___systems___skillmap___contentful_id',
  osses___systems___skillmap___createdAt = 'osses___systems___skillmap___createdAt',
  osses___systems___skillmap___updatedAt = 'osses___systems___skillmap___updatedAt',
  osses___systems___skillmap___node_locale = 'osses___systems___skillmap___node_locale',
  osses___languages = 'osses___languages',
  osses___languages___id = 'osses___languages___id',
  osses___languages___parent___id = 'osses___languages___parent___id',
  osses___languages___parent___children = 'osses___languages___parent___children',
  osses___languages___children = 'osses___languages___children',
  osses___languages___children___id = 'osses___languages___children___id',
  osses___languages___children___children = 'osses___languages___children___children',
  osses___languages___internal___content = 'osses___languages___internal___content',
  osses___languages___internal___contentDigest = 'osses___languages___internal___contentDigest',
  osses___languages___internal___description = 'osses___languages___internal___description',
  osses___languages___internal___fieldOwners = 'osses___languages___internal___fieldOwners',
  osses___languages___internal___ignoreType = 'osses___languages___internal___ignoreType',
  osses___languages___internal___mediaType = 'osses___languages___internal___mediaType',
  osses___languages___internal___owner = 'osses___languages___internal___owner',
  osses___languages___internal___type = 'osses___languages___internal___type',
  osses___languages___name = 'osses___languages___name',
  osses___languages___level = 'osses___languages___level',
  osses___languages___osses = 'osses___languages___osses',
  osses___languages___osses___id = 'osses___languages___osses___id',
  osses___languages___osses___children = 'osses___languages___osses___children',
  osses___languages___osses___name = 'osses___languages___osses___name',
  osses___languages___osses___slug = 'osses___languages___osses___slug',
  osses___languages___osses___startDate = 'osses___languages___osses___startDate',
  osses___languages___osses___during = 'osses___languages___osses___during',
  osses___languages___osses___comment = 'osses___languages___osses___comment',
  osses___languages___osses___siteUrl = 'osses___languages___osses___siteUrl',
  osses___languages___osses___sourceUrl = 'osses___languages___osses___sourceUrl',
  osses___languages___osses___roles = 'osses___languages___osses___roles',
  osses___languages___osses___assigns = 'osses___languages___osses___assigns',
  osses___languages___osses___systems = 'osses___languages___osses___systems',
  osses___languages___osses___languages = 'osses___languages___osses___languages',
  osses___languages___osses___tools = 'osses___languages___osses___tools',
  osses___languages___osses___spaceId = 'osses___languages___osses___spaceId',
  osses___languages___osses___contentful_id = 'osses___languages___osses___contentful_id',
  osses___languages___osses___createdAt = 'osses___languages___osses___createdAt',
  osses___languages___osses___updatedAt = 'osses___languages___osses___updatedAt',
  osses___languages___osses___node_locale = 'osses___languages___osses___node_locale',
  osses___languages___spaceId = 'osses___languages___spaceId',
  osses___languages___contentful_id = 'osses___languages___contentful_id',
  osses___languages___createdAt = 'osses___languages___createdAt',
  osses___languages___updatedAt = 'osses___languages___updatedAt',
  osses___languages___sys___type = 'osses___languages___sys___type',
  osses___languages___sys___revision = 'osses___languages___sys___revision',
  osses___languages___node_locale = 'osses___languages___node_locale',
  osses___languages___projects = 'osses___languages___projects',
  osses___languages___projects___id = 'osses___languages___projects___id',
  osses___languages___projects___children = 'osses___languages___projects___children',
  osses___languages___projects___name = 'osses___languages___projects___name',
  osses___languages___projects___startDate = 'osses___languages___projects___startDate',
  osses___languages___projects___during = 'osses___languages___projects___during',
  osses___languages___projects___comment = 'osses___languages___projects___comment',
  osses___languages___projects___roles = 'osses___languages___projects___roles',
  osses___languages___projects___assigns = 'osses___languages___projects___assigns',
  osses___languages___projects___systems = 'osses___languages___projects___systems',
  osses___languages___projects___languages = 'osses___languages___projects___languages',
  osses___languages___projects___tools = 'osses___languages___projects___tools',
  osses___languages___projects___spaceId = 'osses___languages___projects___spaceId',
  osses___languages___projects___contentful_id = 'osses___languages___projects___contentful_id',
  osses___languages___projects___createdAt = 'osses___languages___projects___createdAt',
  osses___languages___projects___updatedAt = 'osses___languages___projects___updatedAt',
  osses___languages___projects___node_locale = 'osses___languages___projects___node_locale',
  osses___languages___skillmap = 'osses___languages___skillmap',
  osses___languages___skillmap___id = 'osses___languages___skillmap___id',
  osses___languages___skillmap___children = 'osses___languages___skillmap___children',
  osses___languages___skillmap___name = 'osses___languages___skillmap___name',
  osses___languages___skillmap___skills = 'osses___languages___skillmap___skills',
  osses___languages___skillmap___spaceId = 'osses___languages___skillmap___spaceId',
  osses___languages___skillmap___contentful_id = 'osses___languages___skillmap___contentful_id',
  osses___languages___skillmap___createdAt = 'osses___languages___skillmap___createdAt',
  osses___languages___skillmap___updatedAt = 'osses___languages___skillmap___updatedAt',
  osses___languages___skillmap___node_locale = 'osses___languages___skillmap___node_locale',
  osses___tools = 'osses___tools',
  osses___tools___id = 'osses___tools___id',
  osses___tools___parent___id = 'osses___tools___parent___id',
  osses___tools___parent___children = 'osses___tools___parent___children',
  osses___tools___children = 'osses___tools___children',
  osses___tools___children___id = 'osses___tools___children___id',
  osses___tools___children___children = 'osses___tools___children___children',
  osses___tools___internal___content = 'osses___tools___internal___content',
  osses___tools___internal___contentDigest = 'osses___tools___internal___contentDigest',
  osses___tools___internal___description = 'osses___tools___internal___description',
  osses___tools___internal___fieldOwners = 'osses___tools___internal___fieldOwners',
  osses___tools___internal___ignoreType = 'osses___tools___internal___ignoreType',
  osses___tools___internal___mediaType = 'osses___tools___internal___mediaType',
  osses___tools___internal___owner = 'osses___tools___internal___owner',
  osses___tools___internal___type = 'osses___tools___internal___type',
  osses___tools___name = 'osses___tools___name',
  osses___tools___level = 'osses___tools___level',
  osses___tools___osses = 'osses___tools___osses',
  osses___tools___osses___id = 'osses___tools___osses___id',
  osses___tools___osses___children = 'osses___tools___osses___children',
  osses___tools___osses___name = 'osses___tools___osses___name',
  osses___tools___osses___slug = 'osses___tools___osses___slug',
  osses___tools___osses___startDate = 'osses___tools___osses___startDate',
  osses___tools___osses___during = 'osses___tools___osses___during',
  osses___tools___osses___comment = 'osses___tools___osses___comment',
  osses___tools___osses___siteUrl = 'osses___tools___osses___siteUrl',
  osses___tools___osses___sourceUrl = 'osses___tools___osses___sourceUrl',
  osses___tools___osses___roles = 'osses___tools___osses___roles',
  osses___tools___osses___assigns = 'osses___tools___osses___assigns',
  osses___tools___osses___systems = 'osses___tools___osses___systems',
  osses___tools___osses___languages = 'osses___tools___osses___languages',
  osses___tools___osses___tools = 'osses___tools___osses___tools',
  osses___tools___osses___spaceId = 'osses___tools___osses___spaceId',
  osses___tools___osses___contentful_id = 'osses___tools___osses___contentful_id',
  osses___tools___osses___createdAt = 'osses___tools___osses___createdAt',
  osses___tools___osses___updatedAt = 'osses___tools___osses___updatedAt',
  osses___tools___osses___node_locale = 'osses___tools___osses___node_locale',
  osses___tools___spaceId = 'osses___tools___spaceId',
  osses___tools___contentful_id = 'osses___tools___contentful_id',
  osses___tools___createdAt = 'osses___tools___createdAt',
  osses___tools___updatedAt = 'osses___tools___updatedAt',
  osses___tools___sys___type = 'osses___tools___sys___type',
  osses___tools___sys___revision = 'osses___tools___sys___revision',
  osses___tools___node_locale = 'osses___tools___node_locale',
  osses___tools___projects = 'osses___tools___projects',
  osses___tools___projects___id = 'osses___tools___projects___id',
  osses___tools___projects___children = 'osses___tools___projects___children',
  osses___tools___projects___name = 'osses___tools___projects___name',
  osses___tools___projects___startDate = 'osses___tools___projects___startDate',
  osses___tools___projects___during = 'osses___tools___projects___during',
  osses___tools___projects___comment = 'osses___tools___projects___comment',
  osses___tools___projects___roles = 'osses___tools___projects___roles',
  osses___tools___projects___assigns = 'osses___tools___projects___assigns',
  osses___tools___projects___systems = 'osses___tools___projects___systems',
  osses___tools___projects___languages = 'osses___tools___projects___languages',
  osses___tools___projects___tools = 'osses___tools___projects___tools',
  osses___tools___projects___spaceId = 'osses___tools___projects___spaceId',
  osses___tools___projects___contentful_id = 'osses___tools___projects___contentful_id',
  osses___tools___projects___createdAt = 'osses___tools___projects___createdAt',
  osses___tools___projects___updatedAt = 'osses___tools___projects___updatedAt',
  osses___tools___projects___node_locale = 'osses___tools___projects___node_locale',
  osses___tools___skillmap = 'osses___tools___skillmap',
  osses___tools___skillmap___id = 'osses___tools___skillmap___id',
  osses___tools___skillmap___children = 'osses___tools___skillmap___children',
  osses___tools___skillmap___name = 'osses___tools___skillmap___name',
  osses___tools___skillmap___skills = 'osses___tools___skillmap___skills',
  osses___tools___skillmap___spaceId = 'osses___tools___skillmap___spaceId',
  osses___tools___skillmap___contentful_id = 'osses___tools___skillmap___contentful_id',
  osses___tools___skillmap___createdAt = 'osses___tools___skillmap___createdAt',
  osses___tools___skillmap___updatedAt = 'osses___tools___skillmap___updatedAt',
  osses___tools___skillmap___node_locale = 'osses___tools___skillmap___node_locale',
  osses___spaceId = 'osses___spaceId',
  osses___contentful_id = 'osses___contentful_id',
  osses___createdAt = 'osses___createdAt',
  osses___updatedAt = 'osses___updatedAt',
  osses___sys___type = 'osses___sys___type',
  osses___sys___revision = 'osses___sys___revision',
  osses___node_locale = 'osses___node_locale',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  node_locale = 'node_locale'
}

export type ContentfulAssigneFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<ContentfulProjectsFilterListInput>;
  osses?: Maybe<ContentfulOsSesFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAssigneSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
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

export type ContentfulHistorys = Node & {
  __typename?: 'ContentfulHistorys';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  date?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  subheader?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulHistorysImageTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulHistorysSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulHistorysImageTextNode?: Maybe<ContentfulHistorysImageTextNode>;
};


export type ContentfulHistorysDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHistorysCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHistorysUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulHistorysConnection = {
  __typename?: 'ContentfulHistorysConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHistorysEdge>;
  nodes: Array<ContentfulHistorys>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHistorysGroupConnection>;
};


export type ContentfulHistorysConnectionDistinctArgs = {
  field: ContentfulHistorysFieldsEnum;
};


export type ContentfulHistorysConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHistorysFieldsEnum;
};

export type ContentfulHistorysEdge = {
  __typename?: 'ContentfulHistorysEdge';
  next?: Maybe<ContentfulHistorys>;
  node: ContentfulHistorys;
  previous?: Maybe<ContentfulHistorys>;
};

export enum ContentfulHistorysFieldsEnum {
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
  date = 'date',
  title = 'title',
  subheader = 'subheader',
  image___id = 'image___id',
  image___parent___id = 'image___parent___id',
  image___parent___parent___id = 'image___parent___parent___id',
  image___parent___parent___children = 'image___parent___parent___children',
  image___parent___children = 'image___parent___children',
  image___parent___children___id = 'image___parent___children___id',
  image___parent___children___children = 'image___parent___children___children',
  image___parent___internal___content = 'image___parent___internal___content',
  image___parent___internal___contentDigest = 'image___parent___internal___contentDigest',
  image___parent___internal___description = 'image___parent___internal___description',
  image___parent___internal___fieldOwners = 'image___parent___internal___fieldOwners',
  image___parent___internal___ignoreType = 'image___parent___internal___ignoreType',
  image___parent___internal___mediaType = 'image___parent___internal___mediaType',
  image___parent___internal___owner = 'image___parent___internal___owner',
  image___parent___internal___type = 'image___parent___internal___type',
  image___children = 'image___children',
  image___children___id = 'image___children___id',
  image___children___parent___id = 'image___children___parent___id',
  image___children___parent___children = 'image___children___parent___children',
  image___children___children = 'image___children___children',
  image___children___children___id = 'image___children___children___id',
  image___children___children___children = 'image___children___children___children',
  image___children___internal___content = 'image___children___internal___content',
  image___children___internal___contentDigest = 'image___children___internal___contentDigest',
  image___children___internal___description = 'image___children___internal___description',
  image___children___internal___fieldOwners = 'image___children___internal___fieldOwners',
  image___children___internal___ignoreType = 'image___children___internal___ignoreType',
  image___children___internal___mediaType = 'image___children___internal___mediaType',
  image___children___internal___owner = 'image___children___internal___owner',
  image___children___internal___type = 'image___children___internal___type',
  image___internal___content = 'image___internal___content',
  image___internal___contentDigest = 'image___internal___contentDigest',
  image___internal___description = 'image___internal___description',
  image___internal___fieldOwners = 'image___internal___fieldOwners',
  image___internal___ignoreType = 'image___internal___ignoreType',
  image___internal___mediaType = 'image___internal___mediaType',
  image___internal___owner = 'image___internal___owner',
  image___internal___type = 'image___internal___type',
  image___image = 'image___image',
  image___sys___type = 'image___sys___type',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  node_locale = 'node_locale',
  childContentfulHistorysImageTextNode___id = 'childContentfulHistorysImageTextNode___id',
  childContentfulHistorysImageTextNode___parent___id = 'childContentfulHistorysImageTextNode___parent___id',
  childContentfulHistorysImageTextNode___parent___parent___id = 'childContentfulHistorysImageTextNode___parent___parent___id',
  childContentfulHistorysImageTextNode___parent___parent___children = 'childContentfulHistorysImageTextNode___parent___parent___children',
  childContentfulHistorysImageTextNode___parent___children = 'childContentfulHistorysImageTextNode___parent___children',
  childContentfulHistorysImageTextNode___parent___children___id = 'childContentfulHistorysImageTextNode___parent___children___id',
  childContentfulHistorysImageTextNode___parent___children___children = 'childContentfulHistorysImageTextNode___parent___children___children',
  childContentfulHistorysImageTextNode___parent___internal___content = 'childContentfulHistorysImageTextNode___parent___internal___content',
  childContentfulHistorysImageTextNode___parent___internal___contentDigest = 'childContentfulHistorysImageTextNode___parent___internal___contentDigest',
  childContentfulHistorysImageTextNode___parent___internal___description = 'childContentfulHistorysImageTextNode___parent___internal___description',
  childContentfulHistorysImageTextNode___parent___internal___fieldOwners = 'childContentfulHistorysImageTextNode___parent___internal___fieldOwners',
  childContentfulHistorysImageTextNode___parent___internal___ignoreType = 'childContentfulHistorysImageTextNode___parent___internal___ignoreType',
  childContentfulHistorysImageTextNode___parent___internal___mediaType = 'childContentfulHistorysImageTextNode___parent___internal___mediaType',
  childContentfulHistorysImageTextNode___parent___internal___owner = 'childContentfulHistorysImageTextNode___parent___internal___owner',
  childContentfulHistorysImageTextNode___parent___internal___type = 'childContentfulHistorysImageTextNode___parent___internal___type',
  childContentfulHistorysImageTextNode___children = 'childContentfulHistorysImageTextNode___children',
  childContentfulHistorysImageTextNode___children___id = 'childContentfulHistorysImageTextNode___children___id',
  childContentfulHistorysImageTextNode___children___parent___id = 'childContentfulHistorysImageTextNode___children___parent___id',
  childContentfulHistorysImageTextNode___children___parent___children = 'childContentfulHistorysImageTextNode___children___parent___children',
  childContentfulHistorysImageTextNode___children___children = 'childContentfulHistorysImageTextNode___children___children',
  childContentfulHistorysImageTextNode___children___children___id = 'childContentfulHistorysImageTextNode___children___children___id',
  childContentfulHistorysImageTextNode___children___children___children = 'childContentfulHistorysImageTextNode___children___children___children',
  childContentfulHistorysImageTextNode___children___internal___content = 'childContentfulHistorysImageTextNode___children___internal___content',
  childContentfulHistorysImageTextNode___children___internal___contentDigest = 'childContentfulHistorysImageTextNode___children___internal___contentDigest',
  childContentfulHistorysImageTextNode___children___internal___description = 'childContentfulHistorysImageTextNode___children___internal___description',
  childContentfulHistorysImageTextNode___children___internal___fieldOwners = 'childContentfulHistorysImageTextNode___children___internal___fieldOwners',
  childContentfulHistorysImageTextNode___children___internal___ignoreType = 'childContentfulHistorysImageTextNode___children___internal___ignoreType',
  childContentfulHistorysImageTextNode___children___internal___mediaType = 'childContentfulHistorysImageTextNode___children___internal___mediaType',
  childContentfulHistorysImageTextNode___children___internal___owner = 'childContentfulHistorysImageTextNode___children___internal___owner',
  childContentfulHistorysImageTextNode___children___internal___type = 'childContentfulHistorysImageTextNode___children___internal___type',
  childContentfulHistorysImageTextNode___internal___content = 'childContentfulHistorysImageTextNode___internal___content',
  childContentfulHistorysImageTextNode___internal___contentDigest = 'childContentfulHistorysImageTextNode___internal___contentDigest',
  childContentfulHistorysImageTextNode___internal___description = 'childContentfulHistorysImageTextNode___internal___description',
  childContentfulHistorysImageTextNode___internal___fieldOwners = 'childContentfulHistorysImageTextNode___internal___fieldOwners',
  childContentfulHistorysImageTextNode___internal___ignoreType = 'childContentfulHistorysImageTextNode___internal___ignoreType',
  childContentfulHistorysImageTextNode___internal___mediaType = 'childContentfulHistorysImageTextNode___internal___mediaType',
  childContentfulHistorysImageTextNode___internal___owner = 'childContentfulHistorysImageTextNode___internal___owner',
  childContentfulHistorysImageTextNode___internal___type = 'childContentfulHistorysImageTextNode___internal___type',
  childContentfulHistorysImageTextNode___image = 'childContentfulHistorysImageTextNode___image',
  childContentfulHistorysImageTextNode___sys___type = 'childContentfulHistorysImageTextNode___sys___type'
}

export type ContentfulHistorysFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subheader?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulHistorysImageTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHistorysSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulHistorysImageTextNode?: Maybe<ContentfulHistorysImageTextNodeFilterInput>;
};

export type ContentfulHistorysGroupConnection = {
  __typename?: 'ContentfulHistorysGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHistorysEdge>;
  nodes: Array<ContentfulHistorys>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHistorysImageTextNode = Node & {
  __typename?: 'contentfulHistorysImageTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  image?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulHistorysImageTextNodeSys>;
};

export type ContentfulHistorysImageTextNodeConnection = {
  __typename?: 'contentfulHistorysImageTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHistorysImageTextNodeEdge>;
  nodes: Array<ContentfulHistorysImageTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHistorysImageTextNodeGroupConnection>;
};


export type ContentfulHistorysImageTextNodeConnectionDistinctArgs = {
  field: ContentfulHistorysImageTextNodeFieldsEnum;
};


export type ContentfulHistorysImageTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHistorysImageTextNodeFieldsEnum;
};

export type ContentfulHistorysImageTextNodeEdge = {
  __typename?: 'contentfulHistorysImageTextNodeEdge';
  next?: Maybe<ContentfulHistorysImageTextNode>;
  node: ContentfulHistorysImageTextNode;
  previous?: Maybe<ContentfulHistorysImageTextNode>;
};

export enum ContentfulHistorysImageTextNodeFieldsEnum {
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
  image = 'image',
  sys___type = 'sys___type'
}

export type ContentfulHistorysImageTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  image?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulHistorysImageTextNodeSysFilterInput>;
};

export type ContentfulHistorysImageTextNodeGroupConnection = {
  __typename?: 'contentfulHistorysImageTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHistorysImageTextNodeEdge>;
  nodes: Array<ContentfulHistorysImageTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHistorysImageTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHistorysImageTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHistorysImageTextNodeSys = {
  __typename?: 'contentfulHistorysImageTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulHistorysImageTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHistorysSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHistorysFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHistorysSys = {
  __typename?: 'ContentfulHistorysSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulHistorysSysContentType>;
};

export type ContentfulHistorysSysContentType = {
  __typename?: 'ContentfulHistorysSysContentType';
  sys?: Maybe<ContentfulHistorysSysContentTypeSys>;
};

export type ContentfulHistorysSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHistorysSysContentTypeSysFilterInput>;
};

export type ContentfulHistorysSysContentTypeSys = {
  __typename?: 'ContentfulHistorysSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulHistorysSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHistorysSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulHistorysSysContentTypeFilterInput>;
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

export type ContentfulOsSes = Node & {
  __typename?: 'ContentfulOsSes';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
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
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulOsSesSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulOsSesStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulOsSesCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulOsSesUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulOsSesConnection = {
  __typename?: 'ContentfulOsSesConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOsSesEdge>;
  nodes: Array<ContentfulOsSes>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulOsSesGroupConnection>;
};


export type ContentfulOsSesConnectionDistinctArgs = {
  field: ContentfulOsSesFieldsEnum;
};


export type ContentfulOsSesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulOsSesFieldsEnum;
};

export type ContentfulOsSesEdge = {
  __typename?: 'ContentfulOsSesEdge';
  next?: Maybe<ContentfulOsSes>;
  node: ContentfulOsSes;
  previous?: Maybe<ContentfulOsSes>;
};

export enum ContentfulOsSesFieldsEnum {
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
  slug = 'slug',
  startDate = 'startDate',
  during = 'during',
  comment = 'comment',
  siteUrl = 'siteUrl',
  sourceUrl = 'sourceUrl',
  mainImage___id = 'mainImage___id',
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
  mainImage___contentful_id = 'mainImage___contentful_id',
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
  roles = 'roles',
  roles___id = 'roles___id',
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
  roles___name = 'roles___name',
  roles___projects = 'roles___projects',
  roles___projects___id = 'roles___projects___id',
  roles___projects___parent___id = 'roles___projects___parent___id',
  roles___projects___parent___children = 'roles___projects___parent___children',
  roles___projects___children = 'roles___projects___children',
  roles___projects___children___id = 'roles___projects___children___id',
  roles___projects___children___children = 'roles___projects___children___children',
  roles___projects___internal___content = 'roles___projects___internal___content',
  roles___projects___internal___contentDigest = 'roles___projects___internal___contentDigest',
  roles___projects___internal___description = 'roles___projects___internal___description',
  roles___projects___internal___fieldOwners = 'roles___projects___internal___fieldOwners',
  roles___projects___internal___ignoreType = 'roles___projects___internal___ignoreType',
  roles___projects___internal___mediaType = 'roles___projects___internal___mediaType',
  roles___projects___internal___owner = 'roles___projects___internal___owner',
  roles___projects___internal___type = 'roles___projects___internal___type',
  roles___projects___name = 'roles___projects___name',
  roles___projects___startDate = 'roles___projects___startDate',
  roles___projects___during = 'roles___projects___during',
  roles___projects___comment = 'roles___projects___comment',
  roles___projects___roles = 'roles___projects___roles',
  roles___projects___roles___id = 'roles___projects___roles___id',
  roles___projects___roles___children = 'roles___projects___roles___children',
  roles___projects___roles___name = 'roles___projects___roles___name',
  roles___projects___roles___projects = 'roles___projects___roles___projects',
  roles___projects___roles___osses = 'roles___projects___roles___osses',
  roles___projects___roles___spaceId = 'roles___projects___roles___spaceId',
  roles___projects___roles___contentful_id = 'roles___projects___roles___contentful_id',
  roles___projects___roles___createdAt = 'roles___projects___roles___createdAt',
  roles___projects___roles___updatedAt = 'roles___projects___roles___updatedAt',
  roles___projects___roles___node_locale = 'roles___projects___roles___node_locale',
  roles___projects___assigns = 'roles___projects___assigns',
  roles___projects___assigns___id = 'roles___projects___assigns___id',
  roles___projects___assigns___children = 'roles___projects___assigns___children',
  roles___projects___assigns___name = 'roles___projects___assigns___name',
  roles___projects___assigns___projects = 'roles___projects___assigns___projects',
  roles___projects___assigns___osses = 'roles___projects___assigns___osses',
  roles___projects___assigns___spaceId = 'roles___projects___assigns___spaceId',
  roles___projects___assigns___contentful_id = 'roles___projects___assigns___contentful_id',
  roles___projects___assigns___createdAt = 'roles___projects___assigns___createdAt',
  roles___projects___assigns___updatedAt = 'roles___projects___assigns___updatedAt',
  roles___projects___assigns___node_locale = 'roles___projects___assigns___node_locale',
  roles___projects___systems = 'roles___projects___systems',
  roles___projects___systems___id = 'roles___projects___systems___id',
  roles___projects___systems___children = 'roles___projects___systems___children',
  roles___projects___systems___name = 'roles___projects___systems___name',
  roles___projects___systems___level = 'roles___projects___systems___level',
  roles___projects___systems___osses = 'roles___projects___systems___osses',
  roles___projects___systems___spaceId = 'roles___projects___systems___spaceId',
  roles___projects___systems___contentful_id = 'roles___projects___systems___contentful_id',
  roles___projects___systems___createdAt = 'roles___projects___systems___createdAt',
  roles___projects___systems___updatedAt = 'roles___projects___systems___updatedAt',
  roles___projects___systems___node_locale = 'roles___projects___systems___node_locale',
  roles___projects___systems___projects = 'roles___projects___systems___projects',
  roles___projects___systems___skillmap = 'roles___projects___systems___skillmap',
  roles___projects___languages = 'roles___projects___languages',
  roles___projects___languages___id = 'roles___projects___languages___id',
  roles___projects___languages___children = 'roles___projects___languages___children',
  roles___projects___languages___name = 'roles___projects___languages___name',
  roles___projects___languages___level = 'roles___projects___languages___level',
  roles___projects___languages___osses = 'roles___projects___languages___osses',
  roles___projects___languages___spaceId = 'roles___projects___languages___spaceId',
  roles___projects___languages___contentful_id = 'roles___projects___languages___contentful_id',
  roles___projects___languages___createdAt = 'roles___projects___languages___createdAt',
  roles___projects___languages___updatedAt = 'roles___projects___languages___updatedAt',
  roles___projects___languages___node_locale = 'roles___projects___languages___node_locale',
  roles___projects___languages___projects = 'roles___projects___languages___projects',
  roles___projects___languages___skillmap = 'roles___projects___languages___skillmap',
  roles___projects___tools = 'roles___projects___tools',
  roles___projects___tools___id = 'roles___projects___tools___id',
  roles___projects___tools___children = 'roles___projects___tools___children',
  roles___projects___tools___name = 'roles___projects___tools___name',
  roles___projects___tools___level = 'roles___projects___tools___level',
  roles___projects___tools___osses = 'roles___projects___tools___osses',
  roles___projects___tools___spaceId = 'roles___projects___tools___spaceId',
  roles___projects___tools___contentful_id = 'roles___projects___tools___contentful_id',
  roles___projects___tools___createdAt = 'roles___projects___tools___createdAt',
  roles___projects___tools___updatedAt = 'roles___projects___tools___updatedAt',
  roles___projects___tools___node_locale = 'roles___projects___tools___node_locale',
  roles___projects___tools___projects = 'roles___projects___tools___projects',
  roles___projects___tools___skillmap = 'roles___projects___tools___skillmap',
  roles___projects___image___id = 'roles___projects___image___id',
  roles___projects___image___children = 'roles___projects___image___children',
  roles___projects___image___image = 'roles___projects___image___image',
  roles___projects___spaceId = 'roles___projects___spaceId',
  roles___projects___contentful_id = 'roles___projects___contentful_id',
  roles___projects___createdAt = 'roles___projects___createdAt',
  roles___projects___updatedAt = 'roles___projects___updatedAt',
  roles___projects___sys___type = 'roles___projects___sys___type',
  roles___projects___sys___revision = 'roles___projects___sys___revision',
  roles___projects___node_locale = 'roles___projects___node_locale',
  roles___projects___childContentfulProjectsImageTextNode___id = 'roles___projects___childContentfulProjectsImageTextNode___id',
  roles___projects___childContentfulProjectsImageTextNode___children = 'roles___projects___childContentfulProjectsImageTextNode___children',
  roles___projects___childContentfulProjectsImageTextNode___image = 'roles___projects___childContentfulProjectsImageTextNode___image',
  roles___osses = 'roles___osses',
  roles___osses___id = 'roles___osses___id',
  roles___osses___parent___id = 'roles___osses___parent___id',
  roles___osses___parent___children = 'roles___osses___parent___children',
  roles___osses___children = 'roles___osses___children',
  roles___osses___children___id = 'roles___osses___children___id',
  roles___osses___children___children = 'roles___osses___children___children',
  roles___osses___internal___content = 'roles___osses___internal___content',
  roles___osses___internal___contentDigest = 'roles___osses___internal___contentDigest',
  roles___osses___internal___description = 'roles___osses___internal___description',
  roles___osses___internal___fieldOwners = 'roles___osses___internal___fieldOwners',
  roles___osses___internal___ignoreType = 'roles___osses___internal___ignoreType',
  roles___osses___internal___mediaType = 'roles___osses___internal___mediaType',
  roles___osses___internal___owner = 'roles___osses___internal___owner',
  roles___osses___internal___type = 'roles___osses___internal___type',
  roles___osses___name = 'roles___osses___name',
  roles___osses___slug = 'roles___osses___slug',
  roles___osses___startDate = 'roles___osses___startDate',
  roles___osses___during = 'roles___osses___during',
  roles___osses___comment = 'roles___osses___comment',
  roles___osses___siteUrl = 'roles___osses___siteUrl',
  roles___osses___sourceUrl = 'roles___osses___sourceUrl',
  roles___osses___mainImage___id = 'roles___osses___mainImage___id',
  roles___osses___mainImage___children = 'roles___osses___mainImage___children',
  roles___osses___mainImage___contentful_id = 'roles___osses___mainImage___contentful_id',
  roles___osses___mainImage___spaceId = 'roles___osses___mainImage___spaceId',
  roles___osses___mainImage___createdAt = 'roles___osses___mainImage___createdAt',
  roles___osses___mainImage___updatedAt = 'roles___osses___mainImage___updatedAt',
  roles___osses___mainImage___title = 'roles___osses___mainImage___title',
  roles___osses___mainImage___description = 'roles___osses___mainImage___description',
  roles___osses___mainImage___node_locale = 'roles___osses___mainImage___node_locale',
  roles___osses___roles = 'roles___osses___roles',
  roles___osses___roles___id = 'roles___osses___roles___id',
  roles___osses___roles___children = 'roles___osses___roles___children',
  roles___osses___roles___name = 'roles___osses___roles___name',
  roles___osses___roles___projects = 'roles___osses___roles___projects',
  roles___osses___roles___osses = 'roles___osses___roles___osses',
  roles___osses___roles___spaceId = 'roles___osses___roles___spaceId',
  roles___osses___roles___contentful_id = 'roles___osses___roles___contentful_id',
  roles___osses___roles___createdAt = 'roles___osses___roles___createdAt',
  roles___osses___roles___updatedAt = 'roles___osses___roles___updatedAt',
  roles___osses___roles___node_locale = 'roles___osses___roles___node_locale',
  roles___osses___assigns = 'roles___osses___assigns',
  roles___osses___assigns___id = 'roles___osses___assigns___id',
  roles___osses___assigns___children = 'roles___osses___assigns___children',
  roles___osses___assigns___name = 'roles___osses___assigns___name',
  roles___osses___assigns___projects = 'roles___osses___assigns___projects',
  roles___osses___assigns___osses = 'roles___osses___assigns___osses',
  roles___osses___assigns___spaceId = 'roles___osses___assigns___spaceId',
  roles___osses___assigns___contentful_id = 'roles___osses___assigns___contentful_id',
  roles___osses___assigns___createdAt = 'roles___osses___assigns___createdAt',
  roles___osses___assigns___updatedAt = 'roles___osses___assigns___updatedAt',
  roles___osses___assigns___node_locale = 'roles___osses___assigns___node_locale',
  roles___osses___systems = 'roles___osses___systems',
  roles___osses___systems___id = 'roles___osses___systems___id',
  roles___osses___systems___children = 'roles___osses___systems___children',
  roles___osses___systems___name = 'roles___osses___systems___name',
  roles___osses___systems___level = 'roles___osses___systems___level',
  roles___osses___systems___osses = 'roles___osses___systems___osses',
  roles___osses___systems___spaceId = 'roles___osses___systems___spaceId',
  roles___osses___systems___contentful_id = 'roles___osses___systems___contentful_id',
  roles___osses___systems___createdAt = 'roles___osses___systems___createdAt',
  roles___osses___systems___updatedAt = 'roles___osses___systems___updatedAt',
  roles___osses___systems___node_locale = 'roles___osses___systems___node_locale',
  roles___osses___systems___projects = 'roles___osses___systems___projects',
  roles___osses___systems___skillmap = 'roles___osses___systems___skillmap',
  roles___osses___languages = 'roles___osses___languages',
  roles___osses___languages___id = 'roles___osses___languages___id',
  roles___osses___languages___children = 'roles___osses___languages___children',
  roles___osses___languages___name = 'roles___osses___languages___name',
  roles___osses___languages___level = 'roles___osses___languages___level',
  roles___osses___languages___osses = 'roles___osses___languages___osses',
  roles___osses___languages___spaceId = 'roles___osses___languages___spaceId',
  roles___osses___languages___contentful_id = 'roles___osses___languages___contentful_id',
  roles___osses___languages___createdAt = 'roles___osses___languages___createdAt',
  roles___osses___languages___updatedAt = 'roles___osses___languages___updatedAt',
  roles___osses___languages___node_locale = 'roles___osses___languages___node_locale',
  roles___osses___languages___projects = 'roles___osses___languages___projects',
  roles___osses___languages___skillmap = 'roles___osses___languages___skillmap',
  roles___osses___tools = 'roles___osses___tools',
  roles___osses___tools___id = 'roles___osses___tools___id',
  roles___osses___tools___children = 'roles___osses___tools___children',
  roles___osses___tools___name = 'roles___osses___tools___name',
  roles___osses___tools___level = 'roles___osses___tools___level',
  roles___osses___tools___osses = 'roles___osses___tools___osses',
  roles___osses___tools___spaceId = 'roles___osses___tools___spaceId',
  roles___osses___tools___contentful_id = 'roles___osses___tools___contentful_id',
  roles___osses___tools___createdAt = 'roles___osses___tools___createdAt',
  roles___osses___tools___updatedAt = 'roles___osses___tools___updatedAt',
  roles___osses___tools___node_locale = 'roles___osses___tools___node_locale',
  roles___osses___tools___projects = 'roles___osses___tools___projects',
  roles___osses___tools___skillmap = 'roles___osses___tools___skillmap',
  roles___osses___spaceId = 'roles___osses___spaceId',
  roles___osses___contentful_id = 'roles___osses___contentful_id',
  roles___osses___createdAt = 'roles___osses___createdAt',
  roles___osses___updatedAt = 'roles___osses___updatedAt',
  roles___osses___sys___type = 'roles___osses___sys___type',
  roles___osses___sys___revision = 'roles___osses___sys___revision',
  roles___osses___node_locale = 'roles___osses___node_locale',
  roles___spaceId = 'roles___spaceId',
  roles___contentful_id = 'roles___contentful_id',
  roles___createdAt = 'roles___createdAt',
  roles___updatedAt = 'roles___updatedAt',
  roles___sys___type = 'roles___sys___type',
  roles___sys___revision = 'roles___sys___revision',
  roles___node_locale = 'roles___node_locale',
  assigns = 'assigns',
  assigns___id = 'assigns___id',
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
  assigns___name = 'assigns___name',
  assigns___projects = 'assigns___projects',
  assigns___projects___id = 'assigns___projects___id',
  assigns___projects___parent___id = 'assigns___projects___parent___id',
  assigns___projects___parent___children = 'assigns___projects___parent___children',
  assigns___projects___children = 'assigns___projects___children',
  assigns___projects___children___id = 'assigns___projects___children___id',
  assigns___projects___children___children = 'assigns___projects___children___children',
  assigns___projects___internal___content = 'assigns___projects___internal___content',
  assigns___projects___internal___contentDigest = 'assigns___projects___internal___contentDigest',
  assigns___projects___internal___description = 'assigns___projects___internal___description',
  assigns___projects___internal___fieldOwners = 'assigns___projects___internal___fieldOwners',
  assigns___projects___internal___ignoreType = 'assigns___projects___internal___ignoreType',
  assigns___projects___internal___mediaType = 'assigns___projects___internal___mediaType',
  assigns___projects___internal___owner = 'assigns___projects___internal___owner',
  assigns___projects___internal___type = 'assigns___projects___internal___type',
  assigns___projects___name = 'assigns___projects___name',
  assigns___projects___startDate = 'assigns___projects___startDate',
  assigns___projects___during = 'assigns___projects___during',
  assigns___projects___comment = 'assigns___projects___comment',
  assigns___projects___roles = 'assigns___projects___roles',
  assigns___projects___roles___id = 'assigns___projects___roles___id',
  assigns___projects___roles___children = 'assigns___projects___roles___children',
  assigns___projects___roles___name = 'assigns___projects___roles___name',
  assigns___projects___roles___projects = 'assigns___projects___roles___projects',
  assigns___projects___roles___osses = 'assigns___projects___roles___osses',
  assigns___projects___roles___spaceId = 'assigns___projects___roles___spaceId',
  assigns___projects___roles___contentful_id = 'assigns___projects___roles___contentful_id',
  assigns___projects___roles___createdAt = 'assigns___projects___roles___createdAt',
  assigns___projects___roles___updatedAt = 'assigns___projects___roles___updatedAt',
  assigns___projects___roles___node_locale = 'assigns___projects___roles___node_locale',
  assigns___projects___assigns = 'assigns___projects___assigns',
  assigns___projects___assigns___id = 'assigns___projects___assigns___id',
  assigns___projects___assigns___children = 'assigns___projects___assigns___children',
  assigns___projects___assigns___name = 'assigns___projects___assigns___name',
  assigns___projects___assigns___projects = 'assigns___projects___assigns___projects',
  assigns___projects___assigns___osses = 'assigns___projects___assigns___osses',
  assigns___projects___assigns___spaceId = 'assigns___projects___assigns___spaceId',
  assigns___projects___assigns___contentful_id = 'assigns___projects___assigns___contentful_id',
  assigns___projects___assigns___createdAt = 'assigns___projects___assigns___createdAt',
  assigns___projects___assigns___updatedAt = 'assigns___projects___assigns___updatedAt',
  assigns___projects___assigns___node_locale = 'assigns___projects___assigns___node_locale',
  assigns___projects___systems = 'assigns___projects___systems',
  assigns___projects___systems___id = 'assigns___projects___systems___id',
  assigns___projects___systems___children = 'assigns___projects___systems___children',
  assigns___projects___systems___name = 'assigns___projects___systems___name',
  assigns___projects___systems___level = 'assigns___projects___systems___level',
  assigns___projects___systems___osses = 'assigns___projects___systems___osses',
  assigns___projects___systems___spaceId = 'assigns___projects___systems___spaceId',
  assigns___projects___systems___contentful_id = 'assigns___projects___systems___contentful_id',
  assigns___projects___systems___createdAt = 'assigns___projects___systems___createdAt',
  assigns___projects___systems___updatedAt = 'assigns___projects___systems___updatedAt',
  assigns___projects___systems___node_locale = 'assigns___projects___systems___node_locale',
  assigns___projects___systems___projects = 'assigns___projects___systems___projects',
  assigns___projects___systems___skillmap = 'assigns___projects___systems___skillmap',
  assigns___projects___languages = 'assigns___projects___languages',
  assigns___projects___languages___id = 'assigns___projects___languages___id',
  assigns___projects___languages___children = 'assigns___projects___languages___children',
  assigns___projects___languages___name = 'assigns___projects___languages___name',
  assigns___projects___languages___level = 'assigns___projects___languages___level',
  assigns___projects___languages___osses = 'assigns___projects___languages___osses',
  assigns___projects___languages___spaceId = 'assigns___projects___languages___spaceId',
  assigns___projects___languages___contentful_id = 'assigns___projects___languages___contentful_id',
  assigns___projects___languages___createdAt = 'assigns___projects___languages___createdAt',
  assigns___projects___languages___updatedAt = 'assigns___projects___languages___updatedAt',
  assigns___projects___languages___node_locale = 'assigns___projects___languages___node_locale',
  assigns___projects___languages___projects = 'assigns___projects___languages___projects',
  assigns___projects___languages___skillmap = 'assigns___projects___languages___skillmap',
  assigns___projects___tools = 'assigns___projects___tools',
  assigns___projects___tools___id = 'assigns___projects___tools___id',
  assigns___projects___tools___children = 'assigns___projects___tools___children',
  assigns___projects___tools___name = 'assigns___projects___tools___name',
  assigns___projects___tools___level = 'assigns___projects___tools___level',
  assigns___projects___tools___osses = 'assigns___projects___tools___osses',
  assigns___projects___tools___spaceId = 'assigns___projects___tools___spaceId',
  assigns___projects___tools___contentful_id = 'assigns___projects___tools___contentful_id',
  assigns___projects___tools___createdAt = 'assigns___projects___tools___createdAt',
  assigns___projects___tools___updatedAt = 'assigns___projects___tools___updatedAt',
  assigns___projects___tools___node_locale = 'assigns___projects___tools___node_locale',
  assigns___projects___tools___projects = 'assigns___projects___tools___projects',
  assigns___projects___tools___skillmap = 'assigns___projects___tools___skillmap',
  assigns___projects___image___id = 'assigns___projects___image___id',
  assigns___projects___image___children = 'assigns___projects___image___children',
  assigns___projects___image___image = 'assigns___projects___image___image',
  assigns___projects___spaceId = 'assigns___projects___spaceId',
  assigns___projects___contentful_id = 'assigns___projects___contentful_id',
  assigns___projects___createdAt = 'assigns___projects___createdAt',
  assigns___projects___updatedAt = 'assigns___projects___updatedAt',
  assigns___projects___sys___type = 'assigns___projects___sys___type',
  assigns___projects___sys___revision = 'assigns___projects___sys___revision',
  assigns___projects___node_locale = 'assigns___projects___node_locale',
  assigns___projects___childContentfulProjectsImageTextNode___id = 'assigns___projects___childContentfulProjectsImageTextNode___id',
  assigns___projects___childContentfulProjectsImageTextNode___children = 'assigns___projects___childContentfulProjectsImageTextNode___children',
  assigns___projects___childContentfulProjectsImageTextNode___image = 'assigns___projects___childContentfulProjectsImageTextNode___image',
  assigns___osses = 'assigns___osses',
  assigns___osses___id = 'assigns___osses___id',
  assigns___osses___parent___id = 'assigns___osses___parent___id',
  assigns___osses___parent___children = 'assigns___osses___parent___children',
  assigns___osses___children = 'assigns___osses___children',
  assigns___osses___children___id = 'assigns___osses___children___id',
  assigns___osses___children___children = 'assigns___osses___children___children',
  assigns___osses___internal___content = 'assigns___osses___internal___content',
  assigns___osses___internal___contentDigest = 'assigns___osses___internal___contentDigest',
  assigns___osses___internal___description = 'assigns___osses___internal___description',
  assigns___osses___internal___fieldOwners = 'assigns___osses___internal___fieldOwners',
  assigns___osses___internal___ignoreType = 'assigns___osses___internal___ignoreType',
  assigns___osses___internal___mediaType = 'assigns___osses___internal___mediaType',
  assigns___osses___internal___owner = 'assigns___osses___internal___owner',
  assigns___osses___internal___type = 'assigns___osses___internal___type',
  assigns___osses___name = 'assigns___osses___name',
  assigns___osses___slug = 'assigns___osses___slug',
  assigns___osses___startDate = 'assigns___osses___startDate',
  assigns___osses___during = 'assigns___osses___during',
  assigns___osses___comment = 'assigns___osses___comment',
  assigns___osses___siteUrl = 'assigns___osses___siteUrl',
  assigns___osses___sourceUrl = 'assigns___osses___sourceUrl',
  assigns___osses___mainImage___id = 'assigns___osses___mainImage___id',
  assigns___osses___mainImage___children = 'assigns___osses___mainImage___children',
  assigns___osses___mainImage___contentful_id = 'assigns___osses___mainImage___contentful_id',
  assigns___osses___mainImage___spaceId = 'assigns___osses___mainImage___spaceId',
  assigns___osses___mainImage___createdAt = 'assigns___osses___mainImage___createdAt',
  assigns___osses___mainImage___updatedAt = 'assigns___osses___mainImage___updatedAt',
  assigns___osses___mainImage___title = 'assigns___osses___mainImage___title',
  assigns___osses___mainImage___description = 'assigns___osses___mainImage___description',
  assigns___osses___mainImage___node_locale = 'assigns___osses___mainImage___node_locale',
  assigns___osses___roles = 'assigns___osses___roles',
  assigns___osses___roles___id = 'assigns___osses___roles___id',
  assigns___osses___roles___children = 'assigns___osses___roles___children',
  assigns___osses___roles___name = 'assigns___osses___roles___name',
  assigns___osses___roles___projects = 'assigns___osses___roles___projects',
  assigns___osses___roles___osses = 'assigns___osses___roles___osses',
  assigns___osses___roles___spaceId = 'assigns___osses___roles___spaceId',
  assigns___osses___roles___contentful_id = 'assigns___osses___roles___contentful_id',
  assigns___osses___roles___createdAt = 'assigns___osses___roles___createdAt',
  assigns___osses___roles___updatedAt = 'assigns___osses___roles___updatedAt',
  assigns___osses___roles___node_locale = 'assigns___osses___roles___node_locale',
  assigns___osses___assigns = 'assigns___osses___assigns',
  assigns___osses___assigns___id = 'assigns___osses___assigns___id',
  assigns___osses___assigns___children = 'assigns___osses___assigns___children',
  assigns___osses___assigns___name = 'assigns___osses___assigns___name',
  assigns___osses___assigns___projects = 'assigns___osses___assigns___projects',
  assigns___osses___assigns___osses = 'assigns___osses___assigns___osses',
  assigns___osses___assigns___spaceId = 'assigns___osses___assigns___spaceId',
  assigns___osses___assigns___contentful_id = 'assigns___osses___assigns___contentful_id',
  assigns___osses___assigns___createdAt = 'assigns___osses___assigns___createdAt',
  assigns___osses___assigns___updatedAt = 'assigns___osses___assigns___updatedAt',
  assigns___osses___assigns___node_locale = 'assigns___osses___assigns___node_locale',
  assigns___osses___systems = 'assigns___osses___systems',
  assigns___osses___systems___id = 'assigns___osses___systems___id',
  assigns___osses___systems___children = 'assigns___osses___systems___children',
  assigns___osses___systems___name = 'assigns___osses___systems___name',
  assigns___osses___systems___level = 'assigns___osses___systems___level',
  assigns___osses___systems___osses = 'assigns___osses___systems___osses',
  assigns___osses___systems___spaceId = 'assigns___osses___systems___spaceId',
  assigns___osses___systems___contentful_id = 'assigns___osses___systems___contentful_id',
  assigns___osses___systems___createdAt = 'assigns___osses___systems___createdAt',
  assigns___osses___systems___updatedAt = 'assigns___osses___systems___updatedAt',
  assigns___osses___systems___node_locale = 'assigns___osses___systems___node_locale',
  assigns___osses___systems___projects = 'assigns___osses___systems___projects',
  assigns___osses___systems___skillmap = 'assigns___osses___systems___skillmap',
  assigns___osses___languages = 'assigns___osses___languages',
  assigns___osses___languages___id = 'assigns___osses___languages___id',
  assigns___osses___languages___children = 'assigns___osses___languages___children',
  assigns___osses___languages___name = 'assigns___osses___languages___name',
  assigns___osses___languages___level = 'assigns___osses___languages___level',
  assigns___osses___languages___osses = 'assigns___osses___languages___osses',
  assigns___osses___languages___spaceId = 'assigns___osses___languages___spaceId',
  assigns___osses___languages___contentful_id = 'assigns___osses___languages___contentful_id',
  assigns___osses___languages___createdAt = 'assigns___osses___languages___createdAt',
  assigns___osses___languages___updatedAt = 'assigns___osses___languages___updatedAt',
  assigns___osses___languages___node_locale = 'assigns___osses___languages___node_locale',
  assigns___osses___languages___projects = 'assigns___osses___languages___projects',
  assigns___osses___languages___skillmap = 'assigns___osses___languages___skillmap',
  assigns___osses___tools = 'assigns___osses___tools',
  assigns___osses___tools___id = 'assigns___osses___tools___id',
  assigns___osses___tools___children = 'assigns___osses___tools___children',
  assigns___osses___tools___name = 'assigns___osses___tools___name',
  assigns___osses___tools___level = 'assigns___osses___tools___level',
  assigns___osses___tools___osses = 'assigns___osses___tools___osses',
  assigns___osses___tools___spaceId = 'assigns___osses___tools___spaceId',
  assigns___osses___tools___contentful_id = 'assigns___osses___tools___contentful_id',
  assigns___osses___tools___createdAt = 'assigns___osses___tools___createdAt',
  assigns___osses___tools___updatedAt = 'assigns___osses___tools___updatedAt',
  assigns___osses___tools___node_locale = 'assigns___osses___tools___node_locale',
  assigns___osses___tools___projects = 'assigns___osses___tools___projects',
  assigns___osses___tools___skillmap = 'assigns___osses___tools___skillmap',
  assigns___osses___spaceId = 'assigns___osses___spaceId',
  assigns___osses___contentful_id = 'assigns___osses___contentful_id',
  assigns___osses___createdAt = 'assigns___osses___createdAt',
  assigns___osses___updatedAt = 'assigns___osses___updatedAt',
  assigns___osses___sys___type = 'assigns___osses___sys___type',
  assigns___osses___sys___revision = 'assigns___osses___sys___revision',
  assigns___osses___node_locale = 'assigns___osses___node_locale',
  assigns___spaceId = 'assigns___spaceId',
  assigns___contentful_id = 'assigns___contentful_id',
  assigns___createdAt = 'assigns___createdAt',
  assigns___updatedAt = 'assigns___updatedAt',
  assigns___sys___type = 'assigns___sys___type',
  assigns___sys___revision = 'assigns___sys___revision',
  assigns___node_locale = 'assigns___node_locale',
  systems = 'systems',
  systems___id = 'systems___id',
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
  systems___name = 'systems___name',
  systems___level = 'systems___level',
  systems___osses = 'systems___osses',
  systems___osses___id = 'systems___osses___id',
  systems___osses___parent___id = 'systems___osses___parent___id',
  systems___osses___parent___children = 'systems___osses___parent___children',
  systems___osses___children = 'systems___osses___children',
  systems___osses___children___id = 'systems___osses___children___id',
  systems___osses___children___children = 'systems___osses___children___children',
  systems___osses___internal___content = 'systems___osses___internal___content',
  systems___osses___internal___contentDigest = 'systems___osses___internal___contentDigest',
  systems___osses___internal___description = 'systems___osses___internal___description',
  systems___osses___internal___fieldOwners = 'systems___osses___internal___fieldOwners',
  systems___osses___internal___ignoreType = 'systems___osses___internal___ignoreType',
  systems___osses___internal___mediaType = 'systems___osses___internal___mediaType',
  systems___osses___internal___owner = 'systems___osses___internal___owner',
  systems___osses___internal___type = 'systems___osses___internal___type',
  systems___osses___name = 'systems___osses___name',
  systems___osses___slug = 'systems___osses___slug',
  systems___osses___startDate = 'systems___osses___startDate',
  systems___osses___during = 'systems___osses___during',
  systems___osses___comment = 'systems___osses___comment',
  systems___osses___siteUrl = 'systems___osses___siteUrl',
  systems___osses___sourceUrl = 'systems___osses___sourceUrl',
  systems___osses___mainImage___id = 'systems___osses___mainImage___id',
  systems___osses___mainImage___children = 'systems___osses___mainImage___children',
  systems___osses___mainImage___contentful_id = 'systems___osses___mainImage___contentful_id',
  systems___osses___mainImage___spaceId = 'systems___osses___mainImage___spaceId',
  systems___osses___mainImage___createdAt = 'systems___osses___mainImage___createdAt',
  systems___osses___mainImage___updatedAt = 'systems___osses___mainImage___updatedAt',
  systems___osses___mainImage___title = 'systems___osses___mainImage___title',
  systems___osses___mainImage___description = 'systems___osses___mainImage___description',
  systems___osses___mainImage___node_locale = 'systems___osses___mainImage___node_locale',
  systems___osses___roles = 'systems___osses___roles',
  systems___osses___roles___id = 'systems___osses___roles___id',
  systems___osses___roles___children = 'systems___osses___roles___children',
  systems___osses___roles___name = 'systems___osses___roles___name',
  systems___osses___roles___projects = 'systems___osses___roles___projects',
  systems___osses___roles___osses = 'systems___osses___roles___osses',
  systems___osses___roles___spaceId = 'systems___osses___roles___spaceId',
  systems___osses___roles___contentful_id = 'systems___osses___roles___contentful_id',
  systems___osses___roles___createdAt = 'systems___osses___roles___createdAt',
  systems___osses___roles___updatedAt = 'systems___osses___roles___updatedAt',
  systems___osses___roles___node_locale = 'systems___osses___roles___node_locale',
  systems___osses___assigns = 'systems___osses___assigns',
  systems___osses___assigns___id = 'systems___osses___assigns___id',
  systems___osses___assigns___children = 'systems___osses___assigns___children',
  systems___osses___assigns___name = 'systems___osses___assigns___name',
  systems___osses___assigns___projects = 'systems___osses___assigns___projects',
  systems___osses___assigns___osses = 'systems___osses___assigns___osses',
  systems___osses___assigns___spaceId = 'systems___osses___assigns___spaceId',
  systems___osses___assigns___contentful_id = 'systems___osses___assigns___contentful_id',
  systems___osses___assigns___createdAt = 'systems___osses___assigns___createdAt',
  systems___osses___assigns___updatedAt = 'systems___osses___assigns___updatedAt',
  systems___osses___assigns___node_locale = 'systems___osses___assigns___node_locale',
  systems___osses___systems = 'systems___osses___systems',
  systems___osses___systems___id = 'systems___osses___systems___id',
  systems___osses___systems___children = 'systems___osses___systems___children',
  systems___osses___systems___name = 'systems___osses___systems___name',
  systems___osses___systems___level = 'systems___osses___systems___level',
  systems___osses___systems___osses = 'systems___osses___systems___osses',
  systems___osses___systems___spaceId = 'systems___osses___systems___spaceId',
  systems___osses___systems___contentful_id = 'systems___osses___systems___contentful_id',
  systems___osses___systems___createdAt = 'systems___osses___systems___createdAt',
  systems___osses___systems___updatedAt = 'systems___osses___systems___updatedAt',
  systems___osses___systems___node_locale = 'systems___osses___systems___node_locale',
  systems___osses___systems___projects = 'systems___osses___systems___projects',
  systems___osses___systems___skillmap = 'systems___osses___systems___skillmap',
  systems___osses___languages = 'systems___osses___languages',
  systems___osses___languages___id = 'systems___osses___languages___id',
  systems___osses___languages___children = 'systems___osses___languages___children',
  systems___osses___languages___name = 'systems___osses___languages___name',
  systems___osses___languages___level = 'systems___osses___languages___level',
  systems___osses___languages___osses = 'systems___osses___languages___osses',
  systems___osses___languages___spaceId = 'systems___osses___languages___spaceId',
  systems___osses___languages___contentful_id = 'systems___osses___languages___contentful_id',
  systems___osses___languages___createdAt = 'systems___osses___languages___createdAt',
  systems___osses___languages___updatedAt = 'systems___osses___languages___updatedAt',
  systems___osses___languages___node_locale = 'systems___osses___languages___node_locale',
  systems___osses___languages___projects = 'systems___osses___languages___projects',
  systems___osses___languages___skillmap = 'systems___osses___languages___skillmap',
  systems___osses___tools = 'systems___osses___tools',
  systems___osses___tools___id = 'systems___osses___tools___id',
  systems___osses___tools___children = 'systems___osses___tools___children',
  systems___osses___tools___name = 'systems___osses___tools___name',
  systems___osses___tools___level = 'systems___osses___tools___level',
  systems___osses___tools___osses = 'systems___osses___tools___osses',
  systems___osses___tools___spaceId = 'systems___osses___tools___spaceId',
  systems___osses___tools___contentful_id = 'systems___osses___tools___contentful_id',
  systems___osses___tools___createdAt = 'systems___osses___tools___createdAt',
  systems___osses___tools___updatedAt = 'systems___osses___tools___updatedAt',
  systems___osses___tools___node_locale = 'systems___osses___tools___node_locale',
  systems___osses___tools___projects = 'systems___osses___tools___projects',
  systems___osses___tools___skillmap = 'systems___osses___tools___skillmap',
  systems___osses___spaceId = 'systems___osses___spaceId',
  systems___osses___contentful_id = 'systems___osses___contentful_id',
  systems___osses___createdAt = 'systems___osses___createdAt',
  systems___osses___updatedAt = 'systems___osses___updatedAt',
  systems___osses___sys___type = 'systems___osses___sys___type',
  systems___osses___sys___revision = 'systems___osses___sys___revision',
  systems___osses___node_locale = 'systems___osses___node_locale',
  systems___spaceId = 'systems___spaceId',
  systems___contentful_id = 'systems___contentful_id',
  systems___createdAt = 'systems___createdAt',
  systems___updatedAt = 'systems___updatedAt',
  systems___sys___type = 'systems___sys___type',
  systems___sys___revision = 'systems___sys___revision',
  systems___node_locale = 'systems___node_locale',
  systems___projects = 'systems___projects',
  systems___projects___id = 'systems___projects___id',
  systems___projects___parent___id = 'systems___projects___parent___id',
  systems___projects___parent___children = 'systems___projects___parent___children',
  systems___projects___children = 'systems___projects___children',
  systems___projects___children___id = 'systems___projects___children___id',
  systems___projects___children___children = 'systems___projects___children___children',
  systems___projects___internal___content = 'systems___projects___internal___content',
  systems___projects___internal___contentDigest = 'systems___projects___internal___contentDigest',
  systems___projects___internal___description = 'systems___projects___internal___description',
  systems___projects___internal___fieldOwners = 'systems___projects___internal___fieldOwners',
  systems___projects___internal___ignoreType = 'systems___projects___internal___ignoreType',
  systems___projects___internal___mediaType = 'systems___projects___internal___mediaType',
  systems___projects___internal___owner = 'systems___projects___internal___owner',
  systems___projects___internal___type = 'systems___projects___internal___type',
  systems___projects___name = 'systems___projects___name',
  systems___projects___startDate = 'systems___projects___startDate',
  systems___projects___during = 'systems___projects___during',
  systems___projects___comment = 'systems___projects___comment',
  systems___projects___roles = 'systems___projects___roles',
  systems___projects___roles___id = 'systems___projects___roles___id',
  systems___projects___roles___children = 'systems___projects___roles___children',
  systems___projects___roles___name = 'systems___projects___roles___name',
  systems___projects___roles___projects = 'systems___projects___roles___projects',
  systems___projects___roles___osses = 'systems___projects___roles___osses',
  systems___projects___roles___spaceId = 'systems___projects___roles___spaceId',
  systems___projects___roles___contentful_id = 'systems___projects___roles___contentful_id',
  systems___projects___roles___createdAt = 'systems___projects___roles___createdAt',
  systems___projects___roles___updatedAt = 'systems___projects___roles___updatedAt',
  systems___projects___roles___node_locale = 'systems___projects___roles___node_locale',
  systems___projects___assigns = 'systems___projects___assigns',
  systems___projects___assigns___id = 'systems___projects___assigns___id',
  systems___projects___assigns___children = 'systems___projects___assigns___children',
  systems___projects___assigns___name = 'systems___projects___assigns___name',
  systems___projects___assigns___projects = 'systems___projects___assigns___projects',
  systems___projects___assigns___osses = 'systems___projects___assigns___osses',
  systems___projects___assigns___spaceId = 'systems___projects___assigns___spaceId',
  systems___projects___assigns___contentful_id = 'systems___projects___assigns___contentful_id',
  systems___projects___assigns___createdAt = 'systems___projects___assigns___createdAt',
  systems___projects___assigns___updatedAt = 'systems___projects___assigns___updatedAt',
  systems___projects___assigns___node_locale = 'systems___projects___assigns___node_locale',
  systems___projects___systems = 'systems___projects___systems',
  systems___projects___systems___id = 'systems___projects___systems___id',
  systems___projects___systems___children = 'systems___projects___systems___children',
  systems___projects___systems___name = 'systems___projects___systems___name',
  systems___projects___systems___level = 'systems___projects___systems___level',
  systems___projects___systems___osses = 'systems___projects___systems___osses',
  systems___projects___systems___spaceId = 'systems___projects___systems___spaceId',
  systems___projects___systems___contentful_id = 'systems___projects___systems___contentful_id',
  systems___projects___systems___createdAt = 'systems___projects___systems___createdAt',
  systems___projects___systems___updatedAt = 'systems___projects___systems___updatedAt',
  systems___projects___systems___node_locale = 'systems___projects___systems___node_locale',
  systems___projects___systems___projects = 'systems___projects___systems___projects',
  systems___projects___systems___skillmap = 'systems___projects___systems___skillmap',
  systems___projects___languages = 'systems___projects___languages',
  systems___projects___languages___id = 'systems___projects___languages___id',
  systems___projects___languages___children = 'systems___projects___languages___children',
  systems___projects___languages___name = 'systems___projects___languages___name',
  systems___projects___languages___level = 'systems___projects___languages___level',
  systems___projects___languages___osses = 'systems___projects___languages___osses',
  systems___projects___languages___spaceId = 'systems___projects___languages___spaceId',
  systems___projects___languages___contentful_id = 'systems___projects___languages___contentful_id',
  systems___projects___languages___createdAt = 'systems___projects___languages___createdAt',
  systems___projects___languages___updatedAt = 'systems___projects___languages___updatedAt',
  systems___projects___languages___node_locale = 'systems___projects___languages___node_locale',
  systems___projects___languages___projects = 'systems___projects___languages___projects',
  systems___projects___languages___skillmap = 'systems___projects___languages___skillmap',
  systems___projects___tools = 'systems___projects___tools',
  systems___projects___tools___id = 'systems___projects___tools___id',
  systems___projects___tools___children = 'systems___projects___tools___children',
  systems___projects___tools___name = 'systems___projects___tools___name',
  systems___projects___tools___level = 'systems___projects___tools___level',
  systems___projects___tools___osses = 'systems___projects___tools___osses',
  systems___projects___tools___spaceId = 'systems___projects___tools___spaceId',
  systems___projects___tools___contentful_id = 'systems___projects___tools___contentful_id',
  systems___projects___tools___createdAt = 'systems___projects___tools___createdAt',
  systems___projects___tools___updatedAt = 'systems___projects___tools___updatedAt',
  systems___projects___tools___node_locale = 'systems___projects___tools___node_locale',
  systems___projects___tools___projects = 'systems___projects___tools___projects',
  systems___projects___tools___skillmap = 'systems___projects___tools___skillmap',
  systems___projects___image___id = 'systems___projects___image___id',
  systems___projects___image___children = 'systems___projects___image___children',
  systems___projects___image___image = 'systems___projects___image___image',
  systems___projects___spaceId = 'systems___projects___spaceId',
  systems___projects___contentful_id = 'systems___projects___contentful_id',
  systems___projects___createdAt = 'systems___projects___createdAt',
  systems___projects___updatedAt = 'systems___projects___updatedAt',
  systems___projects___sys___type = 'systems___projects___sys___type',
  systems___projects___sys___revision = 'systems___projects___sys___revision',
  systems___projects___node_locale = 'systems___projects___node_locale',
  systems___projects___childContentfulProjectsImageTextNode___id = 'systems___projects___childContentfulProjectsImageTextNode___id',
  systems___projects___childContentfulProjectsImageTextNode___children = 'systems___projects___childContentfulProjectsImageTextNode___children',
  systems___projects___childContentfulProjectsImageTextNode___image = 'systems___projects___childContentfulProjectsImageTextNode___image',
  systems___skillmap = 'systems___skillmap',
  systems___skillmap___id = 'systems___skillmap___id',
  systems___skillmap___parent___id = 'systems___skillmap___parent___id',
  systems___skillmap___parent___children = 'systems___skillmap___parent___children',
  systems___skillmap___children = 'systems___skillmap___children',
  systems___skillmap___children___id = 'systems___skillmap___children___id',
  systems___skillmap___children___children = 'systems___skillmap___children___children',
  systems___skillmap___internal___content = 'systems___skillmap___internal___content',
  systems___skillmap___internal___contentDigest = 'systems___skillmap___internal___contentDigest',
  systems___skillmap___internal___description = 'systems___skillmap___internal___description',
  systems___skillmap___internal___fieldOwners = 'systems___skillmap___internal___fieldOwners',
  systems___skillmap___internal___ignoreType = 'systems___skillmap___internal___ignoreType',
  systems___skillmap___internal___mediaType = 'systems___skillmap___internal___mediaType',
  systems___skillmap___internal___owner = 'systems___skillmap___internal___owner',
  systems___skillmap___internal___type = 'systems___skillmap___internal___type',
  systems___skillmap___name = 'systems___skillmap___name',
  systems___skillmap___skills = 'systems___skillmap___skills',
  systems___skillmap___skills___id = 'systems___skillmap___skills___id',
  systems___skillmap___skills___children = 'systems___skillmap___skills___children',
  systems___skillmap___skills___name = 'systems___skillmap___skills___name',
  systems___skillmap___skills___level = 'systems___skillmap___skills___level',
  systems___skillmap___skills___osses = 'systems___skillmap___skills___osses',
  systems___skillmap___skills___spaceId = 'systems___skillmap___skills___spaceId',
  systems___skillmap___skills___contentful_id = 'systems___skillmap___skills___contentful_id',
  systems___skillmap___skills___createdAt = 'systems___skillmap___skills___createdAt',
  systems___skillmap___skills___updatedAt = 'systems___skillmap___skills___updatedAt',
  systems___skillmap___skills___node_locale = 'systems___skillmap___skills___node_locale',
  systems___skillmap___skills___projects = 'systems___skillmap___skills___projects',
  systems___skillmap___skills___skillmap = 'systems___skillmap___skills___skillmap',
  systems___skillmap___spaceId = 'systems___skillmap___spaceId',
  systems___skillmap___contentful_id = 'systems___skillmap___contentful_id',
  systems___skillmap___createdAt = 'systems___skillmap___createdAt',
  systems___skillmap___updatedAt = 'systems___skillmap___updatedAt',
  systems___skillmap___sys___type = 'systems___skillmap___sys___type',
  systems___skillmap___sys___revision = 'systems___skillmap___sys___revision',
  systems___skillmap___node_locale = 'systems___skillmap___node_locale',
  languages = 'languages',
  languages___id = 'languages___id',
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
  languages___name = 'languages___name',
  languages___level = 'languages___level',
  languages___osses = 'languages___osses',
  languages___osses___id = 'languages___osses___id',
  languages___osses___parent___id = 'languages___osses___parent___id',
  languages___osses___parent___children = 'languages___osses___parent___children',
  languages___osses___children = 'languages___osses___children',
  languages___osses___children___id = 'languages___osses___children___id',
  languages___osses___children___children = 'languages___osses___children___children',
  languages___osses___internal___content = 'languages___osses___internal___content',
  languages___osses___internal___contentDigest = 'languages___osses___internal___contentDigest',
  languages___osses___internal___description = 'languages___osses___internal___description',
  languages___osses___internal___fieldOwners = 'languages___osses___internal___fieldOwners',
  languages___osses___internal___ignoreType = 'languages___osses___internal___ignoreType',
  languages___osses___internal___mediaType = 'languages___osses___internal___mediaType',
  languages___osses___internal___owner = 'languages___osses___internal___owner',
  languages___osses___internal___type = 'languages___osses___internal___type',
  languages___osses___name = 'languages___osses___name',
  languages___osses___slug = 'languages___osses___slug',
  languages___osses___startDate = 'languages___osses___startDate',
  languages___osses___during = 'languages___osses___during',
  languages___osses___comment = 'languages___osses___comment',
  languages___osses___siteUrl = 'languages___osses___siteUrl',
  languages___osses___sourceUrl = 'languages___osses___sourceUrl',
  languages___osses___mainImage___id = 'languages___osses___mainImage___id',
  languages___osses___mainImage___children = 'languages___osses___mainImage___children',
  languages___osses___mainImage___contentful_id = 'languages___osses___mainImage___contentful_id',
  languages___osses___mainImage___spaceId = 'languages___osses___mainImage___spaceId',
  languages___osses___mainImage___createdAt = 'languages___osses___mainImage___createdAt',
  languages___osses___mainImage___updatedAt = 'languages___osses___mainImage___updatedAt',
  languages___osses___mainImage___title = 'languages___osses___mainImage___title',
  languages___osses___mainImage___description = 'languages___osses___mainImage___description',
  languages___osses___mainImage___node_locale = 'languages___osses___mainImage___node_locale',
  languages___osses___roles = 'languages___osses___roles',
  languages___osses___roles___id = 'languages___osses___roles___id',
  languages___osses___roles___children = 'languages___osses___roles___children',
  languages___osses___roles___name = 'languages___osses___roles___name',
  languages___osses___roles___projects = 'languages___osses___roles___projects',
  languages___osses___roles___osses = 'languages___osses___roles___osses',
  languages___osses___roles___spaceId = 'languages___osses___roles___spaceId',
  languages___osses___roles___contentful_id = 'languages___osses___roles___contentful_id',
  languages___osses___roles___createdAt = 'languages___osses___roles___createdAt',
  languages___osses___roles___updatedAt = 'languages___osses___roles___updatedAt',
  languages___osses___roles___node_locale = 'languages___osses___roles___node_locale',
  languages___osses___assigns = 'languages___osses___assigns',
  languages___osses___assigns___id = 'languages___osses___assigns___id',
  languages___osses___assigns___children = 'languages___osses___assigns___children',
  languages___osses___assigns___name = 'languages___osses___assigns___name',
  languages___osses___assigns___projects = 'languages___osses___assigns___projects',
  languages___osses___assigns___osses = 'languages___osses___assigns___osses',
  languages___osses___assigns___spaceId = 'languages___osses___assigns___spaceId',
  languages___osses___assigns___contentful_id = 'languages___osses___assigns___contentful_id',
  languages___osses___assigns___createdAt = 'languages___osses___assigns___createdAt',
  languages___osses___assigns___updatedAt = 'languages___osses___assigns___updatedAt',
  languages___osses___assigns___node_locale = 'languages___osses___assigns___node_locale',
  languages___osses___systems = 'languages___osses___systems',
  languages___osses___systems___id = 'languages___osses___systems___id',
  languages___osses___systems___children = 'languages___osses___systems___children',
  languages___osses___systems___name = 'languages___osses___systems___name',
  languages___osses___systems___level = 'languages___osses___systems___level',
  languages___osses___systems___osses = 'languages___osses___systems___osses',
  languages___osses___systems___spaceId = 'languages___osses___systems___spaceId',
  languages___osses___systems___contentful_id = 'languages___osses___systems___contentful_id',
  languages___osses___systems___createdAt = 'languages___osses___systems___createdAt',
  languages___osses___systems___updatedAt = 'languages___osses___systems___updatedAt',
  languages___osses___systems___node_locale = 'languages___osses___systems___node_locale',
  languages___osses___systems___projects = 'languages___osses___systems___projects',
  languages___osses___systems___skillmap = 'languages___osses___systems___skillmap',
  languages___osses___languages = 'languages___osses___languages',
  languages___osses___languages___id = 'languages___osses___languages___id',
  languages___osses___languages___children = 'languages___osses___languages___children',
  languages___osses___languages___name = 'languages___osses___languages___name',
  languages___osses___languages___level = 'languages___osses___languages___level',
  languages___osses___languages___osses = 'languages___osses___languages___osses',
  languages___osses___languages___spaceId = 'languages___osses___languages___spaceId',
  languages___osses___languages___contentful_id = 'languages___osses___languages___contentful_id',
  languages___osses___languages___createdAt = 'languages___osses___languages___createdAt',
  languages___osses___languages___updatedAt = 'languages___osses___languages___updatedAt',
  languages___osses___languages___node_locale = 'languages___osses___languages___node_locale',
  languages___osses___languages___projects = 'languages___osses___languages___projects',
  languages___osses___languages___skillmap = 'languages___osses___languages___skillmap',
  languages___osses___tools = 'languages___osses___tools',
  languages___osses___tools___id = 'languages___osses___tools___id',
  languages___osses___tools___children = 'languages___osses___tools___children',
  languages___osses___tools___name = 'languages___osses___tools___name',
  languages___osses___tools___level = 'languages___osses___tools___level',
  languages___osses___tools___osses = 'languages___osses___tools___osses',
  languages___osses___tools___spaceId = 'languages___osses___tools___spaceId',
  languages___osses___tools___contentful_id = 'languages___osses___tools___contentful_id',
  languages___osses___tools___createdAt = 'languages___osses___tools___createdAt',
  languages___osses___tools___updatedAt = 'languages___osses___tools___updatedAt',
  languages___osses___tools___node_locale = 'languages___osses___tools___node_locale',
  languages___osses___tools___projects = 'languages___osses___tools___projects',
  languages___osses___tools___skillmap = 'languages___osses___tools___skillmap',
  languages___osses___spaceId = 'languages___osses___spaceId',
  languages___osses___contentful_id = 'languages___osses___contentful_id',
  languages___osses___createdAt = 'languages___osses___createdAt',
  languages___osses___updatedAt = 'languages___osses___updatedAt',
  languages___osses___sys___type = 'languages___osses___sys___type',
  languages___osses___sys___revision = 'languages___osses___sys___revision',
  languages___osses___node_locale = 'languages___osses___node_locale',
  languages___spaceId = 'languages___spaceId',
  languages___contentful_id = 'languages___contentful_id',
  languages___createdAt = 'languages___createdAt',
  languages___updatedAt = 'languages___updatedAt',
  languages___sys___type = 'languages___sys___type',
  languages___sys___revision = 'languages___sys___revision',
  languages___node_locale = 'languages___node_locale',
  languages___projects = 'languages___projects',
  languages___projects___id = 'languages___projects___id',
  languages___projects___parent___id = 'languages___projects___parent___id',
  languages___projects___parent___children = 'languages___projects___parent___children',
  languages___projects___children = 'languages___projects___children',
  languages___projects___children___id = 'languages___projects___children___id',
  languages___projects___children___children = 'languages___projects___children___children',
  languages___projects___internal___content = 'languages___projects___internal___content',
  languages___projects___internal___contentDigest = 'languages___projects___internal___contentDigest',
  languages___projects___internal___description = 'languages___projects___internal___description',
  languages___projects___internal___fieldOwners = 'languages___projects___internal___fieldOwners',
  languages___projects___internal___ignoreType = 'languages___projects___internal___ignoreType',
  languages___projects___internal___mediaType = 'languages___projects___internal___mediaType',
  languages___projects___internal___owner = 'languages___projects___internal___owner',
  languages___projects___internal___type = 'languages___projects___internal___type',
  languages___projects___name = 'languages___projects___name',
  languages___projects___startDate = 'languages___projects___startDate',
  languages___projects___during = 'languages___projects___during',
  languages___projects___comment = 'languages___projects___comment',
  languages___projects___roles = 'languages___projects___roles',
  languages___projects___roles___id = 'languages___projects___roles___id',
  languages___projects___roles___children = 'languages___projects___roles___children',
  languages___projects___roles___name = 'languages___projects___roles___name',
  languages___projects___roles___projects = 'languages___projects___roles___projects',
  languages___projects___roles___osses = 'languages___projects___roles___osses',
  languages___projects___roles___spaceId = 'languages___projects___roles___spaceId',
  languages___projects___roles___contentful_id = 'languages___projects___roles___contentful_id',
  languages___projects___roles___createdAt = 'languages___projects___roles___createdAt',
  languages___projects___roles___updatedAt = 'languages___projects___roles___updatedAt',
  languages___projects___roles___node_locale = 'languages___projects___roles___node_locale',
  languages___projects___assigns = 'languages___projects___assigns',
  languages___projects___assigns___id = 'languages___projects___assigns___id',
  languages___projects___assigns___children = 'languages___projects___assigns___children',
  languages___projects___assigns___name = 'languages___projects___assigns___name',
  languages___projects___assigns___projects = 'languages___projects___assigns___projects',
  languages___projects___assigns___osses = 'languages___projects___assigns___osses',
  languages___projects___assigns___spaceId = 'languages___projects___assigns___spaceId',
  languages___projects___assigns___contentful_id = 'languages___projects___assigns___contentful_id',
  languages___projects___assigns___createdAt = 'languages___projects___assigns___createdAt',
  languages___projects___assigns___updatedAt = 'languages___projects___assigns___updatedAt',
  languages___projects___assigns___node_locale = 'languages___projects___assigns___node_locale',
  languages___projects___systems = 'languages___projects___systems',
  languages___projects___systems___id = 'languages___projects___systems___id',
  languages___projects___systems___children = 'languages___projects___systems___children',
  languages___projects___systems___name = 'languages___projects___systems___name',
  languages___projects___systems___level = 'languages___projects___systems___level',
  languages___projects___systems___osses = 'languages___projects___systems___osses',
  languages___projects___systems___spaceId = 'languages___projects___systems___spaceId',
  languages___projects___systems___contentful_id = 'languages___projects___systems___contentful_id',
  languages___projects___systems___createdAt = 'languages___projects___systems___createdAt',
  languages___projects___systems___updatedAt = 'languages___projects___systems___updatedAt',
  languages___projects___systems___node_locale = 'languages___projects___systems___node_locale',
  languages___projects___systems___projects = 'languages___projects___systems___projects',
  languages___projects___systems___skillmap = 'languages___projects___systems___skillmap',
  languages___projects___languages = 'languages___projects___languages',
  languages___projects___languages___id = 'languages___projects___languages___id',
  languages___projects___languages___children = 'languages___projects___languages___children',
  languages___projects___languages___name = 'languages___projects___languages___name',
  languages___projects___languages___level = 'languages___projects___languages___level',
  languages___projects___languages___osses = 'languages___projects___languages___osses',
  languages___projects___languages___spaceId = 'languages___projects___languages___spaceId',
  languages___projects___languages___contentful_id = 'languages___projects___languages___contentful_id',
  languages___projects___languages___createdAt = 'languages___projects___languages___createdAt',
  languages___projects___languages___updatedAt = 'languages___projects___languages___updatedAt',
  languages___projects___languages___node_locale = 'languages___projects___languages___node_locale',
  languages___projects___languages___projects = 'languages___projects___languages___projects',
  languages___projects___languages___skillmap = 'languages___projects___languages___skillmap',
  languages___projects___tools = 'languages___projects___tools',
  languages___projects___tools___id = 'languages___projects___tools___id',
  languages___projects___tools___children = 'languages___projects___tools___children',
  languages___projects___tools___name = 'languages___projects___tools___name',
  languages___projects___tools___level = 'languages___projects___tools___level',
  languages___projects___tools___osses = 'languages___projects___tools___osses',
  languages___projects___tools___spaceId = 'languages___projects___tools___spaceId',
  languages___projects___tools___contentful_id = 'languages___projects___tools___contentful_id',
  languages___projects___tools___createdAt = 'languages___projects___tools___createdAt',
  languages___projects___tools___updatedAt = 'languages___projects___tools___updatedAt',
  languages___projects___tools___node_locale = 'languages___projects___tools___node_locale',
  languages___projects___tools___projects = 'languages___projects___tools___projects',
  languages___projects___tools___skillmap = 'languages___projects___tools___skillmap',
  languages___projects___image___id = 'languages___projects___image___id',
  languages___projects___image___children = 'languages___projects___image___children',
  languages___projects___image___image = 'languages___projects___image___image',
  languages___projects___spaceId = 'languages___projects___spaceId',
  languages___projects___contentful_id = 'languages___projects___contentful_id',
  languages___projects___createdAt = 'languages___projects___createdAt',
  languages___projects___updatedAt = 'languages___projects___updatedAt',
  languages___projects___sys___type = 'languages___projects___sys___type',
  languages___projects___sys___revision = 'languages___projects___sys___revision',
  languages___projects___node_locale = 'languages___projects___node_locale',
  languages___projects___childContentfulProjectsImageTextNode___id = 'languages___projects___childContentfulProjectsImageTextNode___id',
  languages___projects___childContentfulProjectsImageTextNode___children = 'languages___projects___childContentfulProjectsImageTextNode___children',
  languages___projects___childContentfulProjectsImageTextNode___image = 'languages___projects___childContentfulProjectsImageTextNode___image',
  languages___skillmap = 'languages___skillmap',
  languages___skillmap___id = 'languages___skillmap___id',
  languages___skillmap___parent___id = 'languages___skillmap___parent___id',
  languages___skillmap___parent___children = 'languages___skillmap___parent___children',
  languages___skillmap___children = 'languages___skillmap___children',
  languages___skillmap___children___id = 'languages___skillmap___children___id',
  languages___skillmap___children___children = 'languages___skillmap___children___children',
  languages___skillmap___internal___content = 'languages___skillmap___internal___content',
  languages___skillmap___internal___contentDigest = 'languages___skillmap___internal___contentDigest',
  languages___skillmap___internal___description = 'languages___skillmap___internal___description',
  languages___skillmap___internal___fieldOwners = 'languages___skillmap___internal___fieldOwners',
  languages___skillmap___internal___ignoreType = 'languages___skillmap___internal___ignoreType',
  languages___skillmap___internal___mediaType = 'languages___skillmap___internal___mediaType',
  languages___skillmap___internal___owner = 'languages___skillmap___internal___owner',
  languages___skillmap___internal___type = 'languages___skillmap___internal___type',
  languages___skillmap___name = 'languages___skillmap___name',
  languages___skillmap___skills = 'languages___skillmap___skills',
  languages___skillmap___skills___id = 'languages___skillmap___skills___id',
  languages___skillmap___skills___children = 'languages___skillmap___skills___children',
  languages___skillmap___skills___name = 'languages___skillmap___skills___name',
  languages___skillmap___skills___level = 'languages___skillmap___skills___level',
  languages___skillmap___skills___osses = 'languages___skillmap___skills___osses',
  languages___skillmap___skills___spaceId = 'languages___skillmap___skills___spaceId',
  languages___skillmap___skills___contentful_id = 'languages___skillmap___skills___contentful_id',
  languages___skillmap___skills___createdAt = 'languages___skillmap___skills___createdAt',
  languages___skillmap___skills___updatedAt = 'languages___skillmap___skills___updatedAt',
  languages___skillmap___skills___node_locale = 'languages___skillmap___skills___node_locale',
  languages___skillmap___skills___projects = 'languages___skillmap___skills___projects',
  languages___skillmap___skills___skillmap = 'languages___skillmap___skills___skillmap',
  languages___skillmap___spaceId = 'languages___skillmap___spaceId',
  languages___skillmap___contentful_id = 'languages___skillmap___contentful_id',
  languages___skillmap___createdAt = 'languages___skillmap___createdAt',
  languages___skillmap___updatedAt = 'languages___skillmap___updatedAt',
  languages___skillmap___sys___type = 'languages___skillmap___sys___type',
  languages___skillmap___sys___revision = 'languages___skillmap___sys___revision',
  languages___skillmap___node_locale = 'languages___skillmap___node_locale',
  tools = 'tools',
  tools___id = 'tools___id',
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
  tools___name = 'tools___name',
  tools___level = 'tools___level',
  tools___osses = 'tools___osses',
  tools___osses___id = 'tools___osses___id',
  tools___osses___parent___id = 'tools___osses___parent___id',
  tools___osses___parent___children = 'tools___osses___parent___children',
  tools___osses___children = 'tools___osses___children',
  tools___osses___children___id = 'tools___osses___children___id',
  tools___osses___children___children = 'tools___osses___children___children',
  tools___osses___internal___content = 'tools___osses___internal___content',
  tools___osses___internal___contentDigest = 'tools___osses___internal___contentDigest',
  tools___osses___internal___description = 'tools___osses___internal___description',
  tools___osses___internal___fieldOwners = 'tools___osses___internal___fieldOwners',
  tools___osses___internal___ignoreType = 'tools___osses___internal___ignoreType',
  tools___osses___internal___mediaType = 'tools___osses___internal___mediaType',
  tools___osses___internal___owner = 'tools___osses___internal___owner',
  tools___osses___internal___type = 'tools___osses___internal___type',
  tools___osses___name = 'tools___osses___name',
  tools___osses___slug = 'tools___osses___slug',
  tools___osses___startDate = 'tools___osses___startDate',
  tools___osses___during = 'tools___osses___during',
  tools___osses___comment = 'tools___osses___comment',
  tools___osses___siteUrl = 'tools___osses___siteUrl',
  tools___osses___sourceUrl = 'tools___osses___sourceUrl',
  tools___osses___mainImage___id = 'tools___osses___mainImage___id',
  tools___osses___mainImage___children = 'tools___osses___mainImage___children',
  tools___osses___mainImage___contentful_id = 'tools___osses___mainImage___contentful_id',
  tools___osses___mainImage___spaceId = 'tools___osses___mainImage___spaceId',
  tools___osses___mainImage___createdAt = 'tools___osses___mainImage___createdAt',
  tools___osses___mainImage___updatedAt = 'tools___osses___mainImage___updatedAt',
  tools___osses___mainImage___title = 'tools___osses___mainImage___title',
  tools___osses___mainImage___description = 'tools___osses___mainImage___description',
  tools___osses___mainImage___node_locale = 'tools___osses___mainImage___node_locale',
  tools___osses___roles = 'tools___osses___roles',
  tools___osses___roles___id = 'tools___osses___roles___id',
  tools___osses___roles___children = 'tools___osses___roles___children',
  tools___osses___roles___name = 'tools___osses___roles___name',
  tools___osses___roles___projects = 'tools___osses___roles___projects',
  tools___osses___roles___osses = 'tools___osses___roles___osses',
  tools___osses___roles___spaceId = 'tools___osses___roles___spaceId',
  tools___osses___roles___contentful_id = 'tools___osses___roles___contentful_id',
  tools___osses___roles___createdAt = 'tools___osses___roles___createdAt',
  tools___osses___roles___updatedAt = 'tools___osses___roles___updatedAt',
  tools___osses___roles___node_locale = 'tools___osses___roles___node_locale',
  tools___osses___assigns = 'tools___osses___assigns',
  tools___osses___assigns___id = 'tools___osses___assigns___id',
  tools___osses___assigns___children = 'tools___osses___assigns___children',
  tools___osses___assigns___name = 'tools___osses___assigns___name',
  tools___osses___assigns___projects = 'tools___osses___assigns___projects',
  tools___osses___assigns___osses = 'tools___osses___assigns___osses',
  tools___osses___assigns___spaceId = 'tools___osses___assigns___spaceId',
  tools___osses___assigns___contentful_id = 'tools___osses___assigns___contentful_id',
  tools___osses___assigns___createdAt = 'tools___osses___assigns___createdAt',
  tools___osses___assigns___updatedAt = 'tools___osses___assigns___updatedAt',
  tools___osses___assigns___node_locale = 'tools___osses___assigns___node_locale',
  tools___osses___systems = 'tools___osses___systems',
  tools___osses___systems___id = 'tools___osses___systems___id',
  tools___osses___systems___children = 'tools___osses___systems___children',
  tools___osses___systems___name = 'tools___osses___systems___name',
  tools___osses___systems___level = 'tools___osses___systems___level',
  tools___osses___systems___osses = 'tools___osses___systems___osses',
  tools___osses___systems___spaceId = 'tools___osses___systems___spaceId',
  tools___osses___systems___contentful_id = 'tools___osses___systems___contentful_id',
  tools___osses___systems___createdAt = 'tools___osses___systems___createdAt',
  tools___osses___systems___updatedAt = 'tools___osses___systems___updatedAt',
  tools___osses___systems___node_locale = 'tools___osses___systems___node_locale',
  tools___osses___systems___projects = 'tools___osses___systems___projects',
  tools___osses___systems___skillmap = 'tools___osses___systems___skillmap',
  tools___osses___languages = 'tools___osses___languages',
  tools___osses___languages___id = 'tools___osses___languages___id',
  tools___osses___languages___children = 'tools___osses___languages___children',
  tools___osses___languages___name = 'tools___osses___languages___name',
  tools___osses___languages___level = 'tools___osses___languages___level',
  tools___osses___languages___osses = 'tools___osses___languages___osses',
  tools___osses___languages___spaceId = 'tools___osses___languages___spaceId',
  tools___osses___languages___contentful_id = 'tools___osses___languages___contentful_id',
  tools___osses___languages___createdAt = 'tools___osses___languages___createdAt',
  tools___osses___languages___updatedAt = 'tools___osses___languages___updatedAt',
  tools___osses___languages___node_locale = 'tools___osses___languages___node_locale',
  tools___osses___languages___projects = 'tools___osses___languages___projects',
  tools___osses___languages___skillmap = 'tools___osses___languages___skillmap',
  tools___osses___tools = 'tools___osses___tools',
  tools___osses___tools___id = 'tools___osses___tools___id',
  tools___osses___tools___children = 'tools___osses___tools___children',
  tools___osses___tools___name = 'tools___osses___tools___name',
  tools___osses___tools___level = 'tools___osses___tools___level',
  tools___osses___tools___osses = 'tools___osses___tools___osses',
  tools___osses___tools___spaceId = 'tools___osses___tools___spaceId',
  tools___osses___tools___contentful_id = 'tools___osses___tools___contentful_id',
  tools___osses___tools___createdAt = 'tools___osses___tools___createdAt',
  tools___osses___tools___updatedAt = 'tools___osses___tools___updatedAt',
  tools___osses___tools___node_locale = 'tools___osses___tools___node_locale',
  tools___osses___tools___projects = 'tools___osses___tools___projects',
  tools___osses___tools___skillmap = 'tools___osses___tools___skillmap',
  tools___osses___spaceId = 'tools___osses___spaceId',
  tools___osses___contentful_id = 'tools___osses___contentful_id',
  tools___osses___createdAt = 'tools___osses___createdAt',
  tools___osses___updatedAt = 'tools___osses___updatedAt',
  tools___osses___sys___type = 'tools___osses___sys___type',
  tools___osses___sys___revision = 'tools___osses___sys___revision',
  tools___osses___node_locale = 'tools___osses___node_locale',
  tools___spaceId = 'tools___spaceId',
  tools___contentful_id = 'tools___contentful_id',
  tools___createdAt = 'tools___createdAt',
  tools___updatedAt = 'tools___updatedAt',
  tools___sys___type = 'tools___sys___type',
  tools___sys___revision = 'tools___sys___revision',
  tools___node_locale = 'tools___node_locale',
  tools___projects = 'tools___projects',
  tools___projects___id = 'tools___projects___id',
  tools___projects___parent___id = 'tools___projects___parent___id',
  tools___projects___parent___children = 'tools___projects___parent___children',
  tools___projects___children = 'tools___projects___children',
  tools___projects___children___id = 'tools___projects___children___id',
  tools___projects___children___children = 'tools___projects___children___children',
  tools___projects___internal___content = 'tools___projects___internal___content',
  tools___projects___internal___contentDigest = 'tools___projects___internal___contentDigest',
  tools___projects___internal___description = 'tools___projects___internal___description',
  tools___projects___internal___fieldOwners = 'tools___projects___internal___fieldOwners',
  tools___projects___internal___ignoreType = 'tools___projects___internal___ignoreType',
  tools___projects___internal___mediaType = 'tools___projects___internal___mediaType',
  tools___projects___internal___owner = 'tools___projects___internal___owner',
  tools___projects___internal___type = 'tools___projects___internal___type',
  tools___projects___name = 'tools___projects___name',
  tools___projects___startDate = 'tools___projects___startDate',
  tools___projects___during = 'tools___projects___during',
  tools___projects___comment = 'tools___projects___comment',
  tools___projects___roles = 'tools___projects___roles',
  tools___projects___roles___id = 'tools___projects___roles___id',
  tools___projects___roles___children = 'tools___projects___roles___children',
  tools___projects___roles___name = 'tools___projects___roles___name',
  tools___projects___roles___projects = 'tools___projects___roles___projects',
  tools___projects___roles___osses = 'tools___projects___roles___osses',
  tools___projects___roles___spaceId = 'tools___projects___roles___spaceId',
  tools___projects___roles___contentful_id = 'tools___projects___roles___contentful_id',
  tools___projects___roles___createdAt = 'tools___projects___roles___createdAt',
  tools___projects___roles___updatedAt = 'tools___projects___roles___updatedAt',
  tools___projects___roles___node_locale = 'tools___projects___roles___node_locale',
  tools___projects___assigns = 'tools___projects___assigns',
  tools___projects___assigns___id = 'tools___projects___assigns___id',
  tools___projects___assigns___children = 'tools___projects___assigns___children',
  tools___projects___assigns___name = 'tools___projects___assigns___name',
  tools___projects___assigns___projects = 'tools___projects___assigns___projects',
  tools___projects___assigns___osses = 'tools___projects___assigns___osses',
  tools___projects___assigns___spaceId = 'tools___projects___assigns___spaceId',
  tools___projects___assigns___contentful_id = 'tools___projects___assigns___contentful_id',
  tools___projects___assigns___createdAt = 'tools___projects___assigns___createdAt',
  tools___projects___assigns___updatedAt = 'tools___projects___assigns___updatedAt',
  tools___projects___assigns___node_locale = 'tools___projects___assigns___node_locale',
  tools___projects___systems = 'tools___projects___systems',
  tools___projects___systems___id = 'tools___projects___systems___id',
  tools___projects___systems___children = 'tools___projects___systems___children',
  tools___projects___systems___name = 'tools___projects___systems___name',
  tools___projects___systems___level = 'tools___projects___systems___level',
  tools___projects___systems___osses = 'tools___projects___systems___osses',
  tools___projects___systems___spaceId = 'tools___projects___systems___spaceId',
  tools___projects___systems___contentful_id = 'tools___projects___systems___contentful_id',
  tools___projects___systems___createdAt = 'tools___projects___systems___createdAt',
  tools___projects___systems___updatedAt = 'tools___projects___systems___updatedAt',
  tools___projects___systems___node_locale = 'tools___projects___systems___node_locale',
  tools___projects___systems___projects = 'tools___projects___systems___projects',
  tools___projects___systems___skillmap = 'tools___projects___systems___skillmap',
  tools___projects___languages = 'tools___projects___languages',
  tools___projects___languages___id = 'tools___projects___languages___id',
  tools___projects___languages___children = 'tools___projects___languages___children',
  tools___projects___languages___name = 'tools___projects___languages___name',
  tools___projects___languages___level = 'tools___projects___languages___level',
  tools___projects___languages___osses = 'tools___projects___languages___osses',
  tools___projects___languages___spaceId = 'tools___projects___languages___spaceId',
  tools___projects___languages___contentful_id = 'tools___projects___languages___contentful_id',
  tools___projects___languages___createdAt = 'tools___projects___languages___createdAt',
  tools___projects___languages___updatedAt = 'tools___projects___languages___updatedAt',
  tools___projects___languages___node_locale = 'tools___projects___languages___node_locale',
  tools___projects___languages___projects = 'tools___projects___languages___projects',
  tools___projects___languages___skillmap = 'tools___projects___languages___skillmap',
  tools___projects___tools = 'tools___projects___tools',
  tools___projects___tools___id = 'tools___projects___tools___id',
  tools___projects___tools___children = 'tools___projects___tools___children',
  tools___projects___tools___name = 'tools___projects___tools___name',
  tools___projects___tools___level = 'tools___projects___tools___level',
  tools___projects___tools___osses = 'tools___projects___tools___osses',
  tools___projects___tools___spaceId = 'tools___projects___tools___spaceId',
  tools___projects___tools___contentful_id = 'tools___projects___tools___contentful_id',
  tools___projects___tools___createdAt = 'tools___projects___tools___createdAt',
  tools___projects___tools___updatedAt = 'tools___projects___tools___updatedAt',
  tools___projects___tools___node_locale = 'tools___projects___tools___node_locale',
  tools___projects___tools___projects = 'tools___projects___tools___projects',
  tools___projects___tools___skillmap = 'tools___projects___tools___skillmap',
  tools___projects___image___id = 'tools___projects___image___id',
  tools___projects___image___children = 'tools___projects___image___children',
  tools___projects___image___image = 'tools___projects___image___image',
  tools___projects___spaceId = 'tools___projects___spaceId',
  tools___projects___contentful_id = 'tools___projects___contentful_id',
  tools___projects___createdAt = 'tools___projects___createdAt',
  tools___projects___updatedAt = 'tools___projects___updatedAt',
  tools___projects___sys___type = 'tools___projects___sys___type',
  tools___projects___sys___revision = 'tools___projects___sys___revision',
  tools___projects___node_locale = 'tools___projects___node_locale',
  tools___projects___childContentfulProjectsImageTextNode___id = 'tools___projects___childContentfulProjectsImageTextNode___id',
  tools___projects___childContentfulProjectsImageTextNode___children = 'tools___projects___childContentfulProjectsImageTextNode___children',
  tools___projects___childContentfulProjectsImageTextNode___image = 'tools___projects___childContentfulProjectsImageTextNode___image',
  tools___skillmap = 'tools___skillmap',
  tools___skillmap___id = 'tools___skillmap___id',
  tools___skillmap___parent___id = 'tools___skillmap___parent___id',
  tools___skillmap___parent___children = 'tools___skillmap___parent___children',
  tools___skillmap___children = 'tools___skillmap___children',
  tools___skillmap___children___id = 'tools___skillmap___children___id',
  tools___skillmap___children___children = 'tools___skillmap___children___children',
  tools___skillmap___internal___content = 'tools___skillmap___internal___content',
  tools___skillmap___internal___contentDigest = 'tools___skillmap___internal___contentDigest',
  tools___skillmap___internal___description = 'tools___skillmap___internal___description',
  tools___skillmap___internal___fieldOwners = 'tools___skillmap___internal___fieldOwners',
  tools___skillmap___internal___ignoreType = 'tools___skillmap___internal___ignoreType',
  tools___skillmap___internal___mediaType = 'tools___skillmap___internal___mediaType',
  tools___skillmap___internal___owner = 'tools___skillmap___internal___owner',
  tools___skillmap___internal___type = 'tools___skillmap___internal___type',
  tools___skillmap___name = 'tools___skillmap___name',
  tools___skillmap___skills = 'tools___skillmap___skills',
  tools___skillmap___skills___id = 'tools___skillmap___skills___id',
  tools___skillmap___skills___children = 'tools___skillmap___skills___children',
  tools___skillmap___skills___name = 'tools___skillmap___skills___name',
  tools___skillmap___skills___level = 'tools___skillmap___skills___level',
  tools___skillmap___skills___osses = 'tools___skillmap___skills___osses',
  tools___skillmap___skills___spaceId = 'tools___skillmap___skills___spaceId',
  tools___skillmap___skills___contentful_id = 'tools___skillmap___skills___contentful_id',
  tools___skillmap___skills___createdAt = 'tools___skillmap___skills___createdAt',
  tools___skillmap___skills___updatedAt = 'tools___skillmap___skills___updatedAt',
  tools___skillmap___skills___node_locale = 'tools___skillmap___skills___node_locale',
  tools___skillmap___skills___projects = 'tools___skillmap___skills___projects',
  tools___skillmap___skills___skillmap = 'tools___skillmap___skills___skillmap',
  tools___skillmap___spaceId = 'tools___skillmap___spaceId',
  tools___skillmap___contentful_id = 'tools___skillmap___contentful_id',
  tools___skillmap___createdAt = 'tools___skillmap___createdAt',
  tools___skillmap___updatedAt = 'tools___skillmap___updatedAt',
  tools___skillmap___sys___type = 'tools___skillmap___sys___type',
  tools___skillmap___sys___revision = 'tools___skillmap___sys___revision',
  tools___skillmap___node_locale = 'tools___skillmap___node_locale',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  node_locale = 'node_locale'
}

export type ContentfulOsSesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulOsSesSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulOsSesFilterListInput = {
  elemMatch?: Maybe<ContentfulOsSesFilterInput>;
};

export type ContentfulOsSesGroupConnection = {
  __typename?: 'ContentfulOsSesGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOsSesEdge>;
  nodes: Array<ContentfulOsSes>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulOsSesSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulOsSesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulOsSesSys = {
  __typename?: 'ContentfulOsSesSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulOsSesSysContentType>;
};

export type ContentfulOsSesSysContentType = {
  __typename?: 'ContentfulOsSesSysContentType';
  sys?: Maybe<ContentfulOsSesSysContentTypeSys>;
};

export type ContentfulOsSesSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulOsSesSysContentTypeSysFilterInput>;
};

export type ContentfulOsSesSysContentTypeSys = {
  __typename?: 'ContentfulOsSesSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulOsSesSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulOsSesSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulOsSesSysContentTypeFilterInput>;
};

export type ContentfulProjects = Node & {
  __typename?: 'ContentfulProjects';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  during?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<ContentfulRole>>>;
  assigns?: Maybe<Array<Maybe<ContentfulAssigne>>>;
  systems?: Maybe<Array<Maybe<ContentfulSkill>>>;
  languages?: Maybe<Array<Maybe<ContentfulSkill>>>;
  tools?: Maybe<Array<Maybe<ContentfulSkill>>>;
  image?: Maybe<ContentfulProjectsImageTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulProjectsSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulProjectsImageTextNode?: Maybe<ContentfulProjectsImageTextNode>;
};


export type ContentfulProjectsStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulProjectsConnection = {
  __typename?: 'ContentfulProjectsConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectsEdge>;
  nodes: Array<ContentfulProjects>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProjectsGroupConnection>;
};


export type ContentfulProjectsConnectionDistinctArgs = {
  field: ContentfulProjectsFieldsEnum;
};


export type ContentfulProjectsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProjectsFieldsEnum;
};

export type ContentfulProjectsEdge = {
  __typename?: 'ContentfulProjectsEdge';
  next?: Maybe<ContentfulProjects>;
  node: ContentfulProjects;
  previous?: Maybe<ContentfulProjects>;
};

export enum ContentfulProjectsFieldsEnum {
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
  startDate = 'startDate',
  during = 'during',
  comment = 'comment',
  roles = 'roles',
  roles___id = 'roles___id',
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
  roles___name = 'roles___name',
  roles___projects = 'roles___projects',
  roles___projects___id = 'roles___projects___id',
  roles___projects___parent___id = 'roles___projects___parent___id',
  roles___projects___parent___children = 'roles___projects___parent___children',
  roles___projects___children = 'roles___projects___children',
  roles___projects___children___id = 'roles___projects___children___id',
  roles___projects___children___children = 'roles___projects___children___children',
  roles___projects___internal___content = 'roles___projects___internal___content',
  roles___projects___internal___contentDigest = 'roles___projects___internal___contentDigest',
  roles___projects___internal___description = 'roles___projects___internal___description',
  roles___projects___internal___fieldOwners = 'roles___projects___internal___fieldOwners',
  roles___projects___internal___ignoreType = 'roles___projects___internal___ignoreType',
  roles___projects___internal___mediaType = 'roles___projects___internal___mediaType',
  roles___projects___internal___owner = 'roles___projects___internal___owner',
  roles___projects___internal___type = 'roles___projects___internal___type',
  roles___projects___name = 'roles___projects___name',
  roles___projects___startDate = 'roles___projects___startDate',
  roles___projects___during = 'roles___projects___during',
  roles___projects___comment = 'roles___projects___comment',
  roles___projects___roles = 'roles___projects___roles',
  roles___projects___roles___id = 'roles___projects___roles___id',
  roles___projects___roles___children = 'roles___projects___roles___children',
  roles___projects___roles___name = 'roles___projects___roles___name',
  roles___projects___roles___projects = 'roles___projects___roles___projects',
  roles___projects___roles___osses = 'roles___projects___roles___osses',
  roles___projects___roles___spaceId = 'roles___projects___roles___spaceId',
  roles___projects___roles___contentful_id = 'roles___projects___roles___contentful_id',
  roles___projects___roles___createdAt = 'roles___projects___roles___createdAt',
  roles___projects___roles___updatedAt = 'roles___projects___roles___updatedAt',
  roles___projects___roles___node_locale = 'roles___projects___roles___node_locale',
  roles___projects___assigns = 'roles___projects___assigns',
  roles___projects___assigns___id = 'roles___projects___assigns___id',
  roles___projects___assigns___children = 'roles___projects___assigns___children',
  roles___projects___assigns___name = 'roles___projects___assigns___name',
  roles___projects___assigns___projects = 'roles___projects___assigns___projects',
  roles___projects___assigns___osses = 'roles___projects___assigns___osses',
  roles___projects___assigns___spaceId = 'roles___projects___assigns___spaceId',
  roles___projects___assigns___contentful_id = 'roles___projects___assigns___contentful_id',
  roles___projects___assigns___createdAt = 'roles___projects___assigns___createdAt',
  roles___projects___assigns___updatedAt = 'roles___projects___assigns___updatedAt',
  roles___projects___assigns___node_locale = 'roles___projects___assigns___node_locale',
  roles___projects___systems = 'roles___projects___systems',
  roles___projects___systems___id = 'roles___projects___systems___id',
  roles___projects___systems___children = 'roles___projects___systems___children',
  roles___projects___systems___name = 'roles___projects___systems___name',
  roles___projects___systems___level = 'roles___projects___systems___level',
  roles___projects___systems___osses = 'roles___projects___systems___osses',
  roles___projects___systems___spaceId = 'roles___projects___systems___spaceId',
  roles___projects___systems___contentful_id = 'roles___projects___systems___contentful_id',
  roles___projects___systems___createdAt = 'roles___projects___systems___createdAt',
  roles___projects___systems___updatedAt = 'roles___projects___systems___updatedAt',
  roles___projects___systems___node_locale = 'roles___projects___systems___node_locale',
  roles___projects___systems___projects = 'roles___projects___systems___projects',
  roles___projects___systems___skillmap = 'roles___projects___systems___skillmap',
  roles___projects___languages = 'roles___projects___languages',
  roles___projects___languages___id = 'roles___projects___languages___id',
  roles___projects___languages___children = 'roles___projects___languages___children',
  roles___projects___languages___name = 'roles___projects___languages___name',
  roles___projects___languages___level = 'roles___projects___languages___level',
  roles___projects___languages___osses = 'roles___projects___languages___osses',
  roles___projects___languages___spaceId = 'roles___projects___languages___spaceId',
  roles___projects___languages___contentful_id = 'roles___projects___languages___contentful_id',
  roles___projects___languages___createdAt = 'roles___projects___languages___createdAt',
  roles___projects___languages___updatedAt = 'roles___projects___languages___updatedAt',
  roles___projects___languages___node_locale = 'roles___projects___languages___node_locale',
  roles___projects___languages___projects = 'roles___projects___languages___projects',
  roles___projects___languages___skillmap = 'roles___projects___languages___skillmap',
  roles___projects___tools = 'roles___projects___tools',
  roles___projects___tools___id = 'roles___projects___tools___id',
  roles___projects___tools___children = 'roles___projects___tools___children',
  roles___projects___tools___name = 'roles___projects___tools___name',
  roles___projects___tools___level = 'roles___projects___tools___level',
  roles___projects___tools___osses = 'roles___projects___tools___osses',
  roles___projects___tools___spaceId = 'roles___projects___tools___spaceId',
  roles___projects___tools___contentful_id = 'roles___projects___tools___contentful_id',
  roles___projects___tools___createdAt = 'roles___projects___tools___createdAt',
  roles___projects___tools___updatedAt = 'roles___projects___tools___updatedAt',
  roles___projects___tools___node_locale = 'roles___projects___tools___node_locale',
  roles___projects___tools___projects = 'roles___projects___tools___projects',
  roles___projects___tools___skillmap = 'roles___projects___tools___skillmap',
  roles___projects___image___id = 'roles___projects___image___id',
  roles___projects___image___children = 'roles___projects___image___children',
  roles___projects___image___image = 'roles___projects___image___image',
  roles___projects___spaceId = 'roles___projects___spaceId',
  roles___projects___contentful_id = 'roles___projects___contentful_id',
  roles___projects___createdAt = 'roles___projects___createdAt',
  roles___projects___updatedAt = 'roles___projects___updatedAt',
  roles___projects___sys___type = 'roles___projects___sys___type',
  roles___projects___sys___revision = 'roles___projects___sys___revision',
  roles___projects___node_locale = 'roles___projects___node_locale',
  roles___projects___childContentfulProjectsImageTextNode___id = 'roles___projects___childContentfulProjectsImageTextNode___id',
  roles___projects___childContentfulProjectsImageTextNode___children = 'roles___projects___childContentfulProjectsImageTextNode___children',
  roles___projects___childContentfulProjectsImageTextNode___image = 'roles___projects___childContentfulProjectsImageTextNode___image',
  roles___osses = 'roles___osses',
  roles___osses___id = 'roles___osses___id',
  roles___osses___parent___id = 'roles___osses___parent___id',
  roles___osses___parent___children = 'roles___osses___parent___children',
  roles___osses___children = 'roles___osses___children',
  roles___osses___children___id = 'roles___osses___children___id',
  roles___osses___children___children = 'roles___osses___children___children',
  roles___osses___internal___content = 'roles___osses___internal___content',
  roles___osses___internal___contentDigest = 'roles___osses___internal___contentDigest',
  roles___osses___internal___description = 'roles___osses___internal___description',
  roles___osses___internal___fieldOwners = 'roles___osses___internal___fieldOwners',
  roles___osses___internal___ignoreType = 'roles___osses___internal___ignoreType',
  roles___osses___internal___mediaType = 'roles___osses___internal___mediaType',
  roles___osses___internal___owner = 'roles___osses___internal___owner',
  roles___osses___internal___type = 'roles___osses___internal___type',
  roles___osses___name = 'roles___osses___name',
  roles___osses___slug = 'roles___osses___slug',
  roles___osses___startDate = 'roles___osses___startDate',
  roles___osses___during = 'roles___osses___during',
  roles___osses___comment = 'roles___osses___comment',
  roles___osses___siteUrl = 'roles___osses___siteUrl',
  roles___osses___sourceUrl = 'roles___osses___sourceUrl',
  roles___osses___mainImage___id = 'roles___osses___mainImage___id',
  roles___osses___mainImage___children = 'roles___osses___mainImage___children',
  roles___osses___mainImage___contentful_id = 'roles___osses___mainImage___contentful_id',
  roles___osses___mainImage___spaceId = 'roles___osses___mainImage___spaceId',
  roles___osses___mainImage___createdAt = 'roles___osses___mainImage___createdAt',
  roles___osses___mainImage___updatedAt = 'roles___osses___mainImage___updatedAt',
  roles___osses___mainImage___title = 'roles___osses___mainImage___title',
  roles___osses___mainImage___description = 'roles___osses___mainImage___description',
  roles___osses___mainImage___node_locale = 'roles___osses___mainImage___node_locale',
  roles___osses___roles = 'roles___osses___roles',
  roles___osses___roles___id = 'roles___osses___roles___id',
  roles___osses___roles___children = 'roles___osses___roles___children',
  roles___osses___roles___name = 'roles___osses___roles___name',
  roles___osses___roles___projects = 'roles___osses___roles___projects',
  roles___osses___roles___osses = 'roles___osses___roles___osses',
  roles___osses___roles___spaceId = 'roles___osses___roles___spaceId',
  roles___osses___roles___contentful_id = 'roles___osses___roles___contentful_id',
  roles___osses___roles___createdAt = 'roles___osses___roles___createdAt',
  roles___osses___roles___updatedAt = 'roles___osses___roles___updatedAt',
  roles___osses___roles___node_locale = 'roles___osses___roles___node_locale',
  roles___osses___assigns = 'roles___osses___assigns',
  roles___osses___assigns___id = 'roles___osses___assigns___id',
  roles___osses___assigns___children = 'roles___osses___assigns___children',
  roles___osses___assigns___name = 'roles___osses___assigns___name',
  roles___osses___assigns___projects = 'roles___osses___assigns___projects',
  roles___osses___assigns___osses = 'roles___osses___assigns___osses',
  roles___osses___assigns___spaceId = 'roles___osses___assigns___spaceId',
  roles___osses___assigns___contentful_id = 'roles___osses___assigns___contentful_id',
  roles___osses___assigns___createdAt = 'roles___osses___assigns___createdAt',
  roles___osses___assigns___updatedAt = 'roles___osses___assigns___updatedAt',
  roles___osses___assigns___node_locale = 'roles___osses___assigns___node_locale',
  roles___osses___systems = 'roles___osses___systems',
  roles___osses___systems___id = 'roles___osses___systems___id',
  roles___osses___systems___children = 'roles___osses___systems___children',
  roles___osses___systems___name = 'roles___osses___systems___name',
  roles___osses___systems___level = 'roles___osses___systems___level',
  roles___osses___systems___osses = 'roles___osses___systems___osses',
  roles___osses___systems___spaceId = 'roles___osses___systems___spaceId',
  roles___osses___systems___contentful_id = 'roles___osses___systems___contentful_id',
  roles___osses___systems___createdAt = 'roles___osses___systems___createdAt',
  roles___osses___systems___updatedAt = 'roles___osses___systems___updatedAt',
  roles___osses___systems___node_locale = 'roles___osses___systems___node_locale',
  roles___osses___systems___projects = 'roles___osses___systems___projects',
  roles___osses___systems___skillmap = 'roles___osses___systems___skillmap',
  roles___osses___languages = 'roles___osses___languages',
  roles___osses___languages___id = 'roles___osses___languages___id',
  roles___osses___languages___children = 'roles___osses___languages___children',
  roles___osses___languages___name = 'roles___osses___languages___name',
  roles___osses___languages___level = 'roles___osses___languages___level',
  roles___osses___languages___osses = 'roles___osses___languages___osses',
  roles___osses___languages___spaceId = 'roles___osses___languages___spaceId',
  roles___osses___languages___contentful_id = 'roles___osses___languages___contentful_id',
  roles___osses___languages___createdAt = 'roles___osses___languages___createdAt',
  roles___osses___languages___updatedAt = 'roles___osses___languages___updatedAt',
  roles___osses___languages___node_locale = 'roles___osses___languages___node_locale',
  roles___osses___languages___projects = 'roles___osses___languages___projects',
  roles___osses___languages___skillmap = 'roles___osses___languages___skillmap',
  roles___osses___tools = 'roles___osses___tools',
  roles___osses___tools___id = 'roles___osses___tools___id',
  roles___osses___tools___children = 'roles___osses___tools___children',
  roles___osses___tools___name = 'roles___osses___tools___name',
  roles___osses___tools___level = 'roles___osses___tools___level',
  roles___osses___tools___osses = 'roles___osses___tools___osses',
  roles___osses___tools___spaceId = 'roles___osses___tools___spaceId',
  roles___osses___tools___contentful_id = 'roles___osses___tools___contentful_id',
  roles___osses___tools___createdAt = 'roles___osses___tools___createdAt',
  roles___osses___tools___updatedAt = 'roles___osses___tools___updatedAt',
  roles___osses___tools___node_locale = 'roles___osses___tools___node_locale',
  roles___osses___tools___projects = 'roles___osses___tools___projects',
  roles___osses___tools___skillmap = 'roles___osses___tools___skillmap',
  roles___osses___spaceId = 'roles___osses___spaceId',
  roles___osses___contentful_id = 'roles___osses___contentful_id',
  roles___osses___createdAt = 'roles___osses___createdAt',
  roles___osses___updatedAt = 'roles___osses___updatedAt',
  roles___osses___sys___type = 'roles___osses___sys___type',
  roles___osses___sys___revision = 'roles___osses___sys___revision',
  roles___osses___node_locale = 'roles___osses___node_locale',
  roles___spaceId = 'roles___spaceId',
  roles___contentful_id = 'roles___contentful_id',
  roles___createdAt = 'roles___createdAt',
  roles___updatedAt = 'roles___updatedAt',
  roles___sys___type = 'roles___sys___type',
  roles___sys___revision = 'roles___sys___revision',
  roles___node_locale = 'roles___node_locale',
  assigns = 'assigns',
  assigns___id = 'assigns___id',
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
  assigns___name = 'assigns___name',
  assigns___projects = 'assigns___projects',
  assigns___projects___id = 'assigns___projects___id',
  assigns___projects___parent___id = 'assigns___projects___parent___id',
  assigns___projects___parent___children = 'assigns___projects___parent___children',
  assigns___projects___children = 'assigns___projects___children',
  assigns___projects___children___id = 'assigns___projects___children___id',
  assigns___projects___children___children = 'assigns___projects___children___children',
  assigns___projects___internal___content = 'assigns___projects___internal___content',
  assigns___projects___internal___contentDigest = 'assigns___projects___internal___contentDigest',
  assigns___projects___internal___description = 'assigns___projects___internal___description',
  assigns___projects___internal___fieldOwners = 'assigns___projects___internal___fieldOwners',
  assigns___projects___internal___ignoreType = 'assigns___projects___internal___ignoreType',
  assigns___projects___internal___mediaType = 'assigns___projects___internal___mediaType',
  assigns___projects___internal___owner = 'assigns___projects___internal___owner',
  assigns___projects___internal___type = 'assigns___projects___internal___type',
  assigns___projects___name = 'assigns___projects___name',
  assigns___projects___startDate = 'assigns___projects___startDate',
  assigns___projects___during = 'assigns___projects___during',
  assigns___projects___comment = 'assigns___projects___comment',
  assigns___projects___roles = 'assigns___projects___roles',
  assigns___projects___roles___id = 'assigns___projects___roles___id',
  assigns___projects___roles___children = 'assigns___projects___roles___children',
  assigns___projects___roles___name = 'assigns___projects___roles___name',
  assigns___projects___roles___projects = 'assigns___projects___roles___projects',
  assigns___projects___roles___osses = 'assigns___projects___roles___osses',
  assigns___projects___roles___spaceId = 'assigns___projects___roles___spaceId',
  assigns___projects___roles___contentful_id = 'assigns___projects___roles___contentful_id',
  assigns___projects___roles___createdAt = 'assigns___projects___roles___createdAt',
  assigns___projects___roles___updatedAt = 'assigns___projects___roles___updatedAt',
  assigns___projects___roles___node_locale = 'assigns___projects___roles___node_locale',
  assigns___projects___assigns = 'assigns___projects___assigns',
  assigns___projects___assigns___id = 'assigns___projects___assigns___id',
  assigns___projects___assigns___children = 'assigns___projects___assigns___children',
  assigns___projects___assigns___name = 'assigns___projects___assigns___name',
  assigns___projects___assigns___projects = 'assigns___projects___assigns___projects',
  assigns___projects___assigns___osses = 'assigns___projects___assigns___osses',
  assigns___projects___assigns___spaceId = 'assigns___projects___assigns___spaceId',
  assigns___projects___assigns___contentful_id = 'assigns___projects___assigns___contentful_id',
  assigns___projects___assigns___createdAt = 'assigns___projects___assigns___createdAt',
  assigns___projects___assigns___updatedAt = 'assigns___projects___assigns___updatedAt',
  assigns___projects___assigns___node_locale = 'assigns___projects___assigns___node_locale',
  assigns___projects___systems = 'assigns___projects___systems',
  assigns___projects___systems___id = 'assigns___projects___systems___id',
  assigns___projects___systems___children = 'assigns___projects___systems___children',
  assigns___projects___systems___name = 'assigns___projects___systems___name',
  assigns___projects___systems___level = 'assigns___projects___systems___level',
  assigns___projects___systems___osses = 'assigns___projects___systems___osses',
  assigns___projects___systems___spaceId = 'assigns___projects___systems___spaceId',
  assigns___projects___systems___contentful_id = 'assigns___projects___systems___contentful_id',
  assigns___projects___systems___createdAt = 'assigns___projects___systems___createdAt',
  assigns___projects___systems___updatedAt = 'assigns___projects___systems___updatedAt',
  assigns___projects___systems___node_locale = 'assigns___projects___systems___node_locale',
  assigns___projects___systems___projects = 'assigns___projects___systems___projects',
  assigns___projects___systems___skillmap = 'assigns___projects___systems___skillmap',
  assigns___projects___languages = 'assigns___projects___languages',
  assigns___projects___languages___id = 'assigns___projects___languages___id',
  assigns___projects___languages___children = 'assigns___projects___languages___children',
  assigns___projects___languages___name = 'assigns___projects___languages___name',
  assigns___projects___languages___level = 'assigns___projects___languages___level',
  assigns___projects___languages___osses = 'assigns___projects___languages___osses',
  assigns___projects___languages___spaceId = 'assigns___projects___languages___spaceId',
  assigns___projects___languages___contentful_id = 'assigns___projects___languages___contentful_id',
  assigns___projects___languages___createdAt = 'assigns___projects___languages___createdAt',
  assigns___projects___languages___updatedAt = 'assigns___projects___languages___updatedAt',
  assigns___projects___languages___node_locale = 'assigns___projects___languages___node_locale',
  assigns___projects___languages___projects = 'assigns___projects___languages___projects',
  assigns___projects___languages___skillmap = 'assigns___projects___languages___skillmap',
  assigns___projects___tools = 'assigns___projects___tools',
  assigns___projects___tools___id = 'assigns___projects___tools___id',
  assigns___projects___tools___children = 'assigns___projects___tools___children',
  assigns___projects___tools___name = 'assigns___projects___tools___name',
  assigns___projects___tools___level = 'assigns___projects___tools___level',
  assigns___projects___tools___osses = 'assigns___projects___tools___osses',
  assigns___projects___tools___spaceId = 'assigns___projects___tools___spaceId',
  assigns___projects___tools___contentful_id = 'assigns___projects___tools___contentful_id',
  assigns___projects___tools___createdAt = 'assigns___projects___tools___createdAt',
  assigns___projects___tools___updatedAt = 'assigns___projects___tools___updatedAt',
  assigns___projects___tools___node_locale = 'assigns___projects___tools___node_locale',
  assigns___projects___tools___projects = 'assigns___projects___tools___projects',
  assigns___projects___tools___skillmap = 'assigns___projects___tools___skillmap',
  assigns___projects___image___id = 'assigns___projects___image___id',
  assigns___projects___image___children = 'assigns___projects___image___children',
  assigns___projects___image___image = 'assigns___projects___image___image',
  assigns___projects___spaceId = 'assigns___projects___spaceId',
  assigns___projects___contentful_id = 'assigns___projects___contentful_id',
  assigns___projects___createdAt = 'assigns___projects___createdAt',
  assigns___projects___updatedAt = 'assigns___projects___updatedAt',
  assigns___projects___sys___type = 'assigns___projects___sys___type',
  assigns___projects___sys___revision = 'assigns___projects___sys___revision',
  assigns___projects___node_locale = 'assigns___projects___node_locale',
  assigns___projects___childContentfulProjectsImageTextNode___id = 'assigns___projects___childContentfulProjectsImageTextNode___id',
  assigns___projects___childContentfulProjectsImageTextNode___children = 'assigns___projects___childContentfulProjectsImageTextNode___children',
  assigns___projects___childContentfulProjectsImageTextNode___image = 'assigns___projects___childContentfulProjectsImageTextNode___image',
  assigns___osses = 'assigns___osses',
  assigns___osses___id = 'assigns___osses___id',
  assigns___osses___parent___id = 'assigns___osses___parent___id',
  assigns___osses___parent___children = 'assigns___osses___parent___children',
  assigns___osses___children = 'assigns___osses___children',
  assigns___osses___children___id = 'assigns___osses___children___id',
  assigns___osses___children___children = 'assigns___osses___children___children',
  assigns___osses___internal___content = 'assigns___osses___internal___content',
  assigns___osses___internal___contentDigest = 'assigns___osses___internal___contentDigest',
  assigns___osses___internal___description = 'assigns___osses___internal___description',
  assigns___osses___internal___fieldOwners = 'assigns___osses___internal___fieldOwners',
  assigns___osses___internal___ignoreType = 'assigns___osses___internal___ignoreType',
  assigns___osses___internal___mediaType = 'assigns___osses___internal___mediaType',
  assigns___osses___internal___owner = 'assigns___osses___internal___owner',
  assigns___osses___internal___type = 'assigns___osses___internal___type',
  assigns___osses___name = 'assigns___osses___name',
  assigns___osses___slug = 'assigns___osses___slug',
  assigns___osses___startDate = 'assigns___osses___startDate',
  assigns___osses___during = 'assigns___osses___during',
  assigns___osses___comment = 'assigns___osses___comment',
  assigns___osses___siteUrl = 'assigns___osses___siteUrl',
  assigns___osses___sourceUrl = 'assigns___osses___sourceUrl',
  assigns___osses___mainImage___id = 'assigns___osses___mainImage___id',
  assigns___osses___mainImage___children = 'assigns___osses___mainImage___children',
  assigns___osses___mainImage___contentful_id = 'assigns___osses___mainImage___contentful_id',
  assigns___osses___mainImage___spaceId = 'assigns___osses___mainImage___spaceId',
  assigns___osses___mainImage___createdAt = 'assigns___osses___mainImage___createdAt',
  assigns___osses___mainImage___updatedAt = 'assigns___osses___mainImage___updatedAt',
  assigns___osses___mainImage___title = 'assigns___osses___mainImage___title',
  assigns___osses___mainImage___description = 'assigns___osses___mainImage___description',
  assigns___osses___mainImage___node_locale = 'assigns___osses___mainImage___node_locale',
  assigns___osses___roles = 'assigns___osses___roles',
  assigns___osses___roles___id = 'assigns___osses___roles___id',
  assigns___osses___roles___children = 'assigns___osses___roles___children',
  assigns___osses___roles___name = 'assigns___osses___roles___name',
  assigns___osses___roles___projects = 'assigns___osses___roles___projects',
  assigns___osses___roles___osses = 'assigns___osses___roles___osses',
  assigns___osses___roles___spaceId = 'assigns___osses___roles___spaceId',
  assigns___osses___roles___contentful_id = 'assigns___osses___roles___contentful_id',
  assigns___osses___roles___createdAt = 'assigns___osses___roles___createdAt',
  assigns___osses___roles___updatedAt = 'assigns___osses___roles___updatedAt',
  assigns___osses___roles___node_locale = 'assigns___osses___roles___node_locale',
  assigns___osses___assigns = 'assigns___osses___assigns',
  assigns___osses___assigns___id = 'assigns___osses___assigns___id',
  assigns___osses___assigns___children = 'assigns___osses___assigns___children',
  assigns___osses___assigns___name = 'assigns___osses___assigns___name',
  assigns___osses___assigns___projects = 'assigns___osses___assigns___projects',
  assigns___osses___assigns___osses = 'assigns___osses___assigns___osses',
  assigns___osses___assigns___spaceId = 'assigns___osses___assigns___spaceId',
  assigns___osses___assigns___contentful_id = 'assigns___osses___assigns___contentful_id',
  assigns___osses___assigns___createdAt = 'assigns___osses___assigns___createdAt',
  assigns___osses___assigns___updatedAt = 'assigns___osses___assigns___updatedAt',
  assigns___osses___assigns___node_locale = 'assigns___osses___assigns___node_locale',
  assigns___osses___systems = 'assigns___osses___systems',
  assigns___osses___systems___id = 'assigns___osses___systems___id',
  assigns___osses___systems___children = 'assigns___osses___systems___children',
  assigns___osses___systems___name = 'assigns___osses___systems___name',
  assigns___osses___systems___level = 'assigns___osses___systems___level',
  assigns___osses___systems___osses = 'assigns___osses___systems___osses',
  assigns___osses___systems___spaceId = 'assigns___osses___systems___spaceId',
  assigns___osses___systems___contentful_id = 'assigns___osses___systems___contentful_id',
  assigns___osses___systems___createdAt = 'assigns___osses___systems___createdAt',
  assigns___osses___systems___updatedAt = 'assigns___osses___systems___updatedAt',
  assigns___osses___systems___node_locale = 'assigns___osses___systems___node_locale',
  assigns___osses___systems___projects = 'assigns___osses___systems___projects',
  assigns___osses___systems___skillmap = 'assigns___osses___systems___skillmap',
  assigns___osses___languages = 'assigns___osses___languages',
  assigns___osses___languages___id = 'assigns___osses___languages___id',
  assigns___osses___languages___children = 'assigns___osses___languages___children',
  assigns___osses___languages___name = 'assigns___osses___languages___name',
  assigns___osses___languages___level = 'assigns___osses___languages___level',
  assigns___osses___languages___osses = 'assigns___osses___languages___osses',
  assigns___osses___languages___spaceId = 'assigns___osses___languages___spaceId',
  assigns___osses___languages___contentful_id = 'assigns___osses___languages___contentful_id',
  assigns___osses___languages___createdAt = 'assigns___osses___languages___createdAt',
  assigns___osses___languages___updatedAt = 'assigns___osses___languages___updatedAt',
  assigns___osses___languages___node_locale = 'assigns___osses___languages___node_locale',
  assigns___osses___languages___projects = 'assigns___osses___languages___projects',
  assigns___osses___languages___skillmap = 'assigns___osses___languages___skillmap',
  assigns___osses___tools = 'assigns___osses___tools',
  assigns___osses___tools___id = 'assigns___osses___tools___id',
  assigns___osses___tools___children = 'assigns___osses___tools___children',
  assigns___osses___tools___name = 'assigns___osses___tools___name',
  assigns___osses___tools___level = 'assigns___osses___tools___level',
  assigns___osses___tools___osses = 'assigns___osses___tools___osses',
  assigns___osses___tools___spaceId = 'assigns___osses___tools___spaceId',
  assigns___osses___tools___contentful_id = 'assigns___osses___tools___contentful_id',
  assigns___osses___tools___createdAt = 'assigns___osses___tools___createdAt',
  assigns___osses___tools___updatedAt = 'assigns___osses___tools___updatedAt',
  assigns___osses___tools___node_locale = 'assigns___osses___tools___node_locale',
  assigns___osses___tools___projects = 'assigns___osses___tools___projects',
  assigns___osses___tools___skillmap = 'assigns___osses___tools___skillmap',
  assigns___osses___spaceId = 'assigns___osses___spaceId',
  assigns___osses___contentful_id = 'assigns___osses___contentful_id',
  assigns___osses___createdAt = 'assigns___osses___createdAt',
  assigns___osses___updatedAt = 'assigns___osses___updatedAt',
  assigns___osses___sys___type = 'assigns___osses___sys___type',
  assigns___osses___sys___revision = 'assigns___osses___sys___revision',
  assigns___osses___node_locale = 'assigns___osses___node_locale',
  assigns___spaceId = 'assigns___spaceId',
  assigns___contentful_id = 'assigns___contentful_id',
  assigns___createdAt = 'assigns___createdAt',
  assigns___updatedAt = 'assigns___updatedAt',
  assigns___sys___type = 'assigns___sys___type',
  assigns___sys___revision = 'assigns___sys___revision',
  assigns___node_locale = 'assigns___node_locale',
  systems = 'systems',
  systems___id = 'systems___id',
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
  systems___name = 'systems___name',
  systems___level = 'systems___level',
  systems___osses = 'systems___osses',
  systems___osses___id = 'systems___osses___id',
  systems___osses___parent___id = 'systems___osses___parent___id',
  systems___osses___parent___children = 'systems___osses___parent___children',
  systems___osses___children = 'systems___osses___children',
  systems___osses___children___id = 'systems___osses___children___id',
  systems___osses___children___children = 'systems___osses___children___children',
  systems___osses___internal___content = 'systems___osses___internal___content',
  systems___osses___internal___contentDigest = 'systems___osses___internal___contentDigest',
  systems___osses___internal___description = 'systems___osses___internal___description',
  systems___osses___internal___fieldOwners = 'systems___osses___internal___fieldOwners',
  systems___osses___internal___ignoreType = 'systems___osses___internal___ignoreType',
  systems___osses___internal___mediaType = 'systems___osses___internal___mediaType',
  systems___osses___internal___owner = 'systems___osses___internal___owner',
  systems___osses___internal___type = 'systems___osses___internal___type',
  systems___osses___name = 'systems___osses___name',
  systems___osses___slug = 'systems___osses___slug',
  systems___osses___startDate = 'systems___osses___startDate',
  systems___osses___during = 'systems___osses___during',
  systems___osses___comment = 'systems___osses___comment',
  systems___osses___siteUrl = 'systems___osses___siteUrl',
  systems___osses___sourceUrl = 'systems___osses___sourceUrl',
  systems___osses___mainImage___id = 'systems___osses___mainImage___id',
  systems___osses___mainImage___children = 'systems___osses___mainImage___children',
  systems___osses___mainImage___contentful_id = 'systems___osses___mainImage___contentful_id',
  systems___osses___mainImage___spaceId = 'systems___osses___mainImage___spaceId',
  systems___osses___mainImage___createdAt = 'systems___osses___mainImage___createdAt',
  systems___osses___mainImage___updatedAt = 'systems___osses___mainImage___updatedAt',
  systems___osses___mainImage___title = 'systems___osses___mainImage___title',
  systems___osses___mainImage___description = 'systems___osses___mainImage___description',
  systems___osses___mainImage___node_locale = 'systems___osses___mainImage___node_locale',
  systems___osses___roles = 'systems___osses___roles',
  systems___osses___roles___id = 'systems___osses___roles___id',
  systems___osses___roles___children = 'systems___osses___roles___children',
  systems___osses___roles___name = 'systems___osses___roles___name',
  systems___osses___roles___projects = 'systems___osses___roles___projects',
  systems___osses___roles___osses = 'systems___osses___roles___osses',
  systems___osses___roles___spaceId = 'systems___osses___roles___spaceId',
  systems___osses___roles___contentful_id = 'systems___osses___roles___contentful_id',
  systems___osses___roles___createdAt = 'systems___osses___roles___createdAt',
  systems___osses___roles___updatedAt = 'systems___osses___roles___updatedAt',
  systems___osses___roles___node_locale = 'systems___osses___roles___node_locale',
  systems___osses___assigns = 'systems___osses___assigns',
  systems___osses___assigns___id = 'systems___osses___assigns___id',
  systems___osses___assigns___children = 'systems___osses___assigns___children',
  systems___osses___assigns___name = 'systems___osses___assigns___name',
  systems___osses___assigns___projects = 'systems___osses___assigns___projects',
  systems___osses___assigns___osses = 'systems___osses___assigns___osses',
  systems___osses___assigns___spaceId = 'systems___osses___assigns___spaceId',
  systems___osses___assigns___contentful_id = 'systems___osses___assigns___contentful_id',
  systems___osses___assigns___createdAt = 'systems___osses___assigns___createdAt',
  systems___osses___assigns___updatedAt = 'systems___osses___assigns___updatedAt',
  systems___osses___assigns___node_locale = 'systems___osses___assigns___node_locale',
  systems___osses___systems = 'systems___osses___systems',
  systems___osses___systems___id = 'systems___osses___systems___id',
  systems___osses___systems___children = 'systems___osses___systems___children',
  systems___osses___systems___name = 'systems___osses___systems___name',
  systems___osses___systems___level = 'systems___osses___systems___level',
  systems___osses___systems___osses = 'systems___osses___systems___osses',
  systems___osses___systems___spaceId = 'systems___osses___systems___spaceId',
  systems___osses___systems___contentful_id = 'systems___osses___systems___contentful_id',
  systems___osses___systems___createdAt = 'systems___osses___systems___createdAt',
  systems___osses___systems___updatedAt = 'systems___osses___systems___updatedAt',
  systems___osses___systems___node_locale = 'systems___osses___systems___node_locale',
  systems___osses___systems___projects = 'systems___osses___systems___projects',
  systems___osses___systems___skillmap = 'systems___osses___systems___skillmap',
  systems___osses___languages = 'systems___osses___languages',
  systems___osses___languages___id = 'systems___osses___languages___id',
  systems___osses___languages___children = 'systems___osses___languages___children',
  systems___osses___languages___name = 'systems___osses___languages___name',
  systems___osses___languages___level = 'systems___osses___languages___level',
  systems___osses___languages___osses = 'systems___osses___languages___osses',
  systems___osses___languages___spaceId = 'systems___osses___languages___spaceId',
  systems___osses___languages___contentful_id = 'systems___osses___languages___contentful_id',
  systems___osses___languages___createdAt = 'systems___osses___languages___createdAt',
  systems___osses___languages___updatedAt = 'systems___osses___languages___updatedAt',
  systems___osses___languages___node_locale = 'systems___osses___languages___node_locale',
  systems___osses___languages___projects = 'systems___osses___languages___projects',
  systems___osses___languages___skillmap = 'systems___osses___languages___skillmap',
  systems___osses___tools = 'systems___osses___tools',
  systems___osses___tools___id = 'systems___osses___tools___id',
  systems___osses___tools___children = 'systems___osses___tools___children',
  systems___osses___tools___name = 'systems___osses___tools___name',
  systems___osses___tools___level = 'systems___osses___tools___level',
  systems___osses___tools___osses = 'systems___osses___tools___osses',
  systems___osses___tools___spaceId = 'systems___osses___tools___spaceId',
  systems___osses___tools___contentful_id = 'systems___osses___tools___contentful_id',
  systems___osses___tools___createdAt = 'systems___osses___tools___createdAt',
  systems___osses___tools___updatedAt = 'systems___osses___tools___updatedAt',
  systems___osses___tools___node_locale = 'systems___osses___tools___node_locale',
  systems___osses___tools___projects = 'systems___osses___tools___projects',
  systems___osses___tools___skillmap = 'systems___osses___tools___skillmap',
  systems___osses___spaceId = 'systems___osses___spaceId',
  systems___osses___contentful_id = 'systems___osses___contentful_id',
  systems___osses___createdAt = 'systems___osses___createdAt',
  systems___osses___updatedAt = 'systems___osses___updatedAt',
  systems___osses___sys___type = 'systems___osses___sys___type',
  systems___osses___sys___revision = 'systems___osses___sys___revision',
  systems___osses___node_locale = 'systems___osses___node_locale',
  systems___spaceId = 'systems___spaceId',
  systems___contentful_id = 'systems___contentful_id',
  systems___createdAt = 'systems___createdAt',
  systems___updatedAt = 'systems___updatedAt',
  systems___sys___type = 'systems___sys___type',
  systems___sys___revision = 'systems___sys___revision',
  systems___node_locale = 'systems___node_locale',
  systems___projects = 'systems___projects',
  systems___projects___id = 'systems___projects___id',
  systems___projects___parent___id = 'systems___projects___parent___id',
  systems___projects___parent___children = 'systems___projects___parent___children',
  systems___projects___children = 'systems___projects___children',
  systems___projects___children___id = 'systems___projects___children___id',
  systems___projects___children___children = 'systems___projects___children___children',
  systems___projects___internal___content = 'systems___projects___internal___content',
  systems___projects___internal___contentDigest = 'systems___projects___internal___contentDigest',
  systems___projects___internal___description = 'systems___projects___internal___description',
  systems___projects___internal___fieldOwners = 'systems___projects___internal___fieldOwners',
  systems___projects___internal___ignoreType = 'systems___projects___internal___ignoreType',
  systems___projects___internal___mediaType = 'systems___projects___internal___mediaType',
  systems___projects___internal___owner = 'systems___projects___internal___owner',
  systems___projects___internal___type = 'systems___projects___internal___type',
  systems___projects___name = 'systems___projects___name',
  systems___projects___startDate = 'systems___projects___startDate',
  systems___projects___during = 'systems___projects___during',
  systems___projects___comment = 'systems___projects___comment',
  systems___projects___roles = 'systems___projects___roles',
  systems___projects___roles___id = 'systems___projects___roles___id',
  systems___projects___roles___children = 'systems___projects___roles___children',
  systems___projects___roles___name = 'systems___projects___roles___name',
  systems___projects___roles___projects = 'systems___projects___roles___projects',
  systems___projects___roles___osses = 'systems___projects___roles___osses',
  systems___projects___roles___spaceId = 'systems___projects___roles___spaceId',
  systems___projects___roles___contentful_id = 'systems___projects___roles___contentful_id',
  systems___projects___roles___createdAt = 'systems___projects___roles___createdAt',
  systems___projects___roles___updatedAt = 'systems___projects___roles___updatedAt',
  systems___projects___roles___node_locale = 'systems___projects___roles___node_locale',
  systems___projects___assigns = 'systems___projects___assigns',
  systems___projects___assigns___id = 'systems___projects___assigns___id',
  systems___projects___assigns___children = 'systems___projects___assigns___children',
  systems___projects___assigns___name = 'systems___projects___assigns___name',
  systems___projects___assigns___projects = 'systems___projects___assigns___projects',
  systems___projects___assigns___osses = 'systems___projects___assigns___osses',
  systems___projects___assigns___spaceId = 'systems___projects___assigns___spaceId',
  systems___projects___assigns___contentful_id = 'systems___projects___assigns___contentful_id',
  systems___projects___assigns___createdAt = 'systems___projects___assigns___createdAt',
  systems___projects___assigns___updatedAt = 'systems___projects___assigns___updatedAt',
  systems___projects___assigns___node_locale = 'systems___projects___assigns___node_locale',
  systems___projects___systems = 'systems___projects___systems',
  systems___projects___systems___id = 'systems___projects___systems___id',
  systems___projects___systems___children = 'systems___projects___systems___children',
  systems___projects___systems___name = 'systems___projects___systems___name',
  systems___projects___systems___level = 'systems___projects___systems___level',
  systems___projects___systems___osses = 'systems___projects___systems___osses',
  systems___projects___systems___spaceId = 'systems___projects___systems___spaceId',
  systems___projects___systems___contentful_id = 'systems___projects___systems___contentful_id',
  systems___projects___systems___createdAt = 'systems___projects___systems___createdAt',
  systems___projects___systems___updatedAt = 'systems___projects___systems___updatedAt',
  systems___projects___systems___node_locale = 'systems___projects___systems___node_locale',
  systems___projects___systems___projects = 'systems___projects___systems___projects',
  systems___projects___systems___skillmap = 'systems___projects___systems___skillmap',
  systems___projects___languages = 'systems___projects___languages',
  systems___projects___languages___id = 'systems___projects___languages___id',
  systems___projects___languages___children = 'systems___projects___languages___children',
  systems___projects___languages___name = 'systems___projects___languages___name',
  systems___projects___languages___level = 'systems___projects___languages___level',
  systems___projects___languages___osses = 'systems___projects___languages___osses',
  systems___projects___languages___spaceId = 'systems___projects___languages___spaceId',
  systems___projects___languages___contentful_id = 'systems___projects___languages___contentful_id',
  systems___projects___languages___createdAt = 'systems___projects___languages___createdAt',
  systems___projects___languages___updatedAt = 'systems___projects___languages___updatedAt',
  systems___projects___languages___node_locale = 'systems___projects___languages___node_locale',
  systems___projects___languages___projects = 'systems___projects___languages___projects',
  systems___projects___languages___skillmap = 'systems___projects___languages___skillmap',
  systems___projects___tools = 'systems___projects___tools',
  systems___projects___tools___id = 'systems___projects___tools___id',
  systems___projects___tools___children = 'systems___projects___tools___children',
  systems___projects___tools___name = 'systems___projects___tools___name',
  systems___projects___tools___level = 'systems___projects___tools___level',
  systems___projects___tools___osses = 'systems___projects___tools___osses',
  systems___projects___tools___spaceId = 'systems___projects___tools___spaceId',
  systems___projects___tools___contentful_id = 'systems___projects___tools___contentful_id',
  systems___projects___tools___createdAt = 'systems___projects___tools___createdAt',
  systems___projects___tools___updatedAt = 'systems___projects___tools___updatedAt',
  systems___projects___tools___node_locale = 'systems___projects___tools___node_locale',
  systems___projects___tools___projects = 'systems___projects___tools___projects',
  systems___projects___tools___skillmap = 'systems___projects___tools___skillmap',
  systems___projects___image___id = 'systems___projects___image___id',
  systems___projects___image___children = 'systems___projects___image___children',
  systems___projects___image___image = 'systems___projects___image___image',
  systems___projects___spaceId = 'systems___projects___spaceId',
  systems___projects___contentful_id = 'systems___projects___contentful_id',
  systems___projects___createdAt = 'systems___projects___createdAt',
  systems___projects___updatedAt = 'systems___projects___updatedAt',
  systems___projects___sys___type = 'systems___projects___sys___type',
  systems___projects___sys___revision = 'systems___projects___sys___revision',
  systems___projects___node_locale = 'systems___projects___node_locale',
  systems___projects___childContentfulProjectsImageTextNode___id = 'systems___projects___childContentfulProjectsImageTextNode___id',
  systems___projects___childContentfulProjectsImageTextNode___children = 'systems___projects___childContentfulProjectsImageTextNode___children',
  systems___projects___childContentfulProjectsImageTextNode___image = 'systems___projects___childContentfulProjectsImageTextNode___image',
  systems___skillmap = 'systems___skillmap',
  systems___skillmap___id = 'systems___skillmap___id',
  systems___skillmap___parent___id = 'systems___skillmap___parent___id',
  systems___skillmap___parent___children = 'systems___skillmap___parent___children',
  systems___skillmap___children = 'systems___skillmap___children',
  systems___skillmap___children___id = 'systems___skillmap___children___id',
  systems___skillmap___children___children = 'systems___skillmap___children___children',
  systems___skillmap___internal___content = 'systems___skillmap___internal___content',
  systems___skillmap___internal___contentDigest = 'systems___skillmap___internal___contentDigest',
  systems___skillmap___internal___description = 'systems___skillmap___internal___description',
  systems___skillmap___internal___fieldOwners = 'systems___skillmap___internal___fieldOwners',
  systems___skillmap___internal___ignoreType = 'systems___skillmap___internal___ignoreType',
  systems___skillmap___internal___mediaType = 'systems___skillmap___internal___mediaType',
  systems___skillmap___internal___owner = 'systems___skillmap___internal___owner',
  systems___skillmap___internal___type = 'systems___skillmap___internal___type',
  systems___skillmap___name = 'systems___skillmap___name',
  systems___skillmap___skills = 'systems___skillmap___skills',
  systems___skillmap___skills___id = 'systems___skillmap___skills___id',
  systems___skillmap___skills___children = 'systems___skillmap___skills___children',
  systems___skillmap___skills___name = 'systems___skillmap___skills___name',
  systems___skillmap___skills___level = 'systems___skillmap___skills___level',
  systems___skillmap___skills___osses = 'systems___skillmap___skills___osses',
  systems___skillmap___skills___spaceId = 'systems___skillmap___skills___spaceId',
  systems___skillmap___skills___contentful_id = 'systems___skillmap___skills___contentful_id',
  systems___skillmap___skills___createdAt = 'systems___skillmap___skills___createdAt',
  systems___skillmap___skills___updatedAt = 'systems___skillmap___skills___updatedAt',
  systems___skillmap___skills___node_locale = 'systems___skillmap___skills___node_locale',
  systems___skillmap___skills___projects = 'systems___skillmap___skills___projects',
  systems___skillmap___skills___skillmap = 'systems___skillmap___skills___skillmap',
  systems___skillmap___spaceId = 'systems___skillmap___spaceId',
  systems___skillmap___contentful_id = 'systems___skillmap___contentful_id',
  systems___skillmap___createdAt = 'systems___skillmap___createdAt',
  systems___skillmap___updatedAt = 'systems___skillmap___updatedAt',
  systems___skillmap___sys___type = 'systems___skillmap___sys___type',
  systems___skillmap___sys___revision = 'systems___skillmap___sys___revision',
  systems___skillmap___node_locale = 'systems___skillmap___node_locale',
  languages = 'languages',
  languages___id = 'languages___id',
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
  languages___name = 'languages___name',
  languages___level = 'languages___level',
  languages___osses = 'languages___osses',
  languages___osses___id = 'languages___osses___id',
  languages___osses___parent___id = 'languages___osses___parent___id',
  languages___osses___parent___children = 'languages___osses___parent___children',
  languages___osses___children = 'languages___osses___children',
  languages___osses___children___id = 'languages___osses___children___id',
  languages___osses___children___children = 'languages___osses___children___children',
  languages___osses___internal___content = 'languages___osses___internal___content',
  languages___osses___internal___contentDigest = 'languages___osses___internal___contentDigest',
  languages___osses___internal___description = 'languages___osses___internal___description',
  languages___osses___internal___fieldOwners = 'languages___osses___internal___fieldOwners',
  languages___osses___internal___ignoreType = 'languages___osses___internal___ignoreType',
  languages___osses___internal___mediaType = 'languages___osses___internal___mediaType',
  languages___osses___internal___owner = 'languages___osses___internal___owner',
  languages___osses___internal___type = 'languages___osses___internal___type',
  languages___osses___name = 'languages___osses___name',
  languages___osses___slug = 'languages___osses___slug',
  languages___osses___startDate = 'languages___osses___startDate',
  languages___osses___during = 'languages___osses___during',
  languages___osses___comment = 'languages___osses___comment',
  languages___osses___siteUrl = 'languages___osses___siteUrl',
  languages___osses___sourceUrl = 'languages___osses___sourceUrl',
  languages___osses___mainImage___id = 'languages___osses___mainImage___id',
  languages___osses___mainImage___children = 'languages___osses___mainImage___children',
  languages___osses___mainImage___contentful_id = 'languages___osses___mainImage___contentful_id',
  languages___osses___mainImage___spaceId = 'languages___osses___mainImage___spaceId',
  languages___osses___mainImage___createdAt = 'languages___osses___mainImage___createdAt',
  languages___osses___mainImage___updatedAt = 'languages___osses___mainImage___updatedAt',
  languages___osses___mainImage___title = 'languages___osses___mainImage___title',
  languages___osses___mainImage___description = 'languages___osses___mainImage___description',
  languages___osses___mainImage___node_locale = 'languages___osses___mainImage___node_locale',
  languages___osses___roles = 'languages___osses___roles',
  languages___osses___roles___id = 'languages___osses___roles___id',
  languages___osses___roles___children = 'languages___osses___roles___children',
  languages___osses___roles___name = 'languages___osses___roles___name',
  languages___osses___roles___projects = 'languages___osses___roles___projects',
  languages___osses___roles___osses = 'languages___osses___roles___osses',
  languages___osses___roles___spaceId = 'languages___osses___roles___spaceId',
  languages___osses___roles___contentful_id = 'languages___osses___roles___contentful_id',
  languages___osses___roles___createdAt = 'languages___osses___roles___createdAt',
  languages___osses___roles___updatedAt = 'languages___osses___roles___updatedAt',
  languages___osses___roles___node_locale = 'languages___osses___roles___node_locale',
  languages___osses___assigns = 'languages___osses___assigns',
  languages___osses___assigns___id = 'languages___osses___assigns___id',
  languages___osses___assigns___children = 'languages___osses___assigns___children',
  languages___osses___assigns___name = 'languages___osses___assigns___name',
  languages___osses___assigns___projects = 'languages___osses___assigns___projects',
  languages___osses___assigns___osses = 'languages___osses___assigns___osses',
  languages___osses___assigns___spaceId = 'languages___osses___assigns___spaceId',
  languages___osses___assigns___contentful_id = 'languages___osses___assigns___contentful_id',
  languages___osses___assigns___createdAt = 'languages___osses___assigns___createdAt',
  languages___osses___assigns___updatedAt = 'languages___osses___assigns___updatedAt',
  languages___osses___assigns___node_locale = 'languages___osses___assigns___node_locale',
  languages___osses___systems = 'languages___osses___systems',
  languages___osses___systems___id = 'languages___osses___systems___id',
  languages___osses___systems___children = 'languages___osses___systems___children',
  languages___osses___systems___name = 'languages___osses___systems___name',
  languages___osses___systems___level = 'languages___osses___systems___level',
  languages___osses___systems___osses = 'languages___osses___systems___osses',
  languages___osses___systems___spaceId = 'languages___osses___systems___spaceId',
  languages___osses___systems___contentful_id = 'languages___osses___systems___contentful_id',
  languages___osses___systems___createdAt = 'languages___osses___systems___createdAt',
  languages___osses___systems___updatedAt = 'languages___osses___systems___updatedAt',
  languages___osses___systems___node_locale = 'languages___osses___systems___node_locale',
  languages___osses___systems___projects = 'languages___osses___systems___projects',
  languages___osses___systems___skillmap = 'languages___osses___systems___skillmap',
  languages___osses___languages = 'languages___osses___languages',
  languages___osses___languages___id = 'languages___osses___languages___id',
  languages___osses___languages___children = 'languages___osses___languages___children',
  languages___osses___languages___name = 'languages___osses___languages___name',
  languages___osses___languages___level = 'languages___osses___languages___level',
  languages___osses___languages___osses = 'languages___osses___languages___osses',
  languages___osses___languages___spaceId = 'languages___osses___languages___spaceId',
  languages___osses___languages___contentful_id = 'languages___osses___languages___contentful_id',
  languages___osses___languages___createdAt = 'languages___osses___languages___createdAt',
  languages___osses___languages___updatedAt = 'languages___osses___languages___updatedAt',
  languages___osses___languages___node_locale = 'languages___osses___languages___node_locale',
  languages___osses___languages___projects = 'languages___osses___languages___projects',
  languages___osses___languages___skillmap = 'languages___osses___languages___skillmap',
  languages___osses___tools = 'languages___osses___tools',
  languages___osses___tools___id = 'languages___osses___tools___id',
  languages___osses___tools___children = 'languages___osses___tools___children',
  languages___osses___tools___name = 'languages___osses___tools___name',
  languages___osses___tools___level = 'languages___osses___tools___level',
  languages___osses___tools___osses = 'languages___osses___tools___osses',
  languages___osses___tools___spaceId = 'languages___osses___tools___spaceId',
  languages___osses___tools___contentful_id = 'languages___osses___tools___contentful_id',
  languages___osses___tools___createdAt = 'languages___osses___tools___createdAt',
  languages___osses___tools___updatedAt = 'languages___osses___tools___updatedAt',
  languages___osses___tools___node_locale = 'languages___osses___tools___node_locale',
  languages___osses___tools___projects = 'languages___osses___tools___projects',
  languages___osses___tools___skillmap = 'languages___osses___tools___skillmap',
  languages___osses___spaceId = 'languages___osses___spaceId',
  languages___osses___contentful_id = 'languages___osses___contentful_id',
  languages___osses___createdAt = 'languages___osses___createdAt',
  languages___osses___updatedAt = 'languages___osses___updatedAt',
  languages___osses___sys___type = 'languages___osses___sys___type',
  languages___osses___sys___revision = 'languages___osses___sys___revision',
  languages___osses___node_locale = 'languages___osses___node_locale',
  languages___spaceId = 'languages___spaceId',
  languages___contentful_id = 'languages___contentful_id',
  languages___createdAt = 'languages___createdAt',
  languages___updatedAt = 'languages___updatedAt',
  languages___sys___type = 'languages___sys___type',
  languages___sys___revision = 'languages___sys___revision',
  languages___node_locale = 'languages___node_locale',
  languages___projects = 'languages___projects',
  languages___projects___id = 'languages___projects___id',
  languages___projects___parent___id = 'languages___projects___parent___id',
  languages___projects___parent___children = 'languages___projects___parent___children',
  languages___projects___children = 'languages___projects___children',
  languages___projects___children___id = 'languages___projects___children___id',
  languages___projects___children___children = 'languages___projects___children___children',
  languages___projects___internal___content = 'languages___projects___internal___content',
  languages___projects___internal___contentDigest = 'languages___projects___internal___contentDigest',
  languages___projects___internal___description = 'languages___projects___internal___description',
  languages___projects___internal___fieldOwners = 'languages___projects___internal___fieldOwners',
  languages___projects___internal___ignoreType = 'languages___projects___internal___ignoreType',
  languages___projects___internal___mediaType = 'languages___projects___internal___mediaType',
  languages___projects___internal___owner = 'languages___projects___internal___owner',
  languages___projects___internal___type = 'languages___projects___internal___type',
  languages___projects___name = 'languages___projects___name',
  languages___projects___startDate = 'languages___projects___startDate',
  languages___projects___during = 'languages___projects___during',
  languages___projects___comment = 'languages___projects___comment',
  languages___projects___roles = 'languages___projects___roles',
  languages___projects___roles___id = 'languages___projects___roles___id',
  languages___projects___roles___children = 'languages___projects___roles___children',
  languages___projects___roles___name = 'languages___projects___roles___name',
  languages___projects___roles___projects = 'languages___projects___roles___projects',
  languages___projects___roles___osses = 'languages___projects___roles___osses',
  languages___projects___roles___spaceId = 'languages___projects___roles___spaceId',
  languages___projects___roles___contentful_id = 'languages___projects___roles___contentful_id',
  languages___projects___roles___createdAt = 'languages___projects___roles___createdAt',
  languages___projects___roles___updatedAt = 'languages___projects___roles___updatedAt',
  languages___projects___roles___node_locale = 'languages___projects___roles___node_locale',
  languages___projects___assigns = 'languages___projects___assigns',
  languages___projects___assigns___id = 'languages___projects___assigns___id',
  languages___projects___assigns___children = 'languages___projects___assigns___children',
  languages___projects___assigns___name = 'languages___projects___assigns___name',
  languages___projects___assigns___projects = 'languages___projects___assigns___projects',
  languages___projects___assigns___osses = 'languages___projects___assigns___osses',
  languages___projects___assigns___spaceId = 'languages___projects___assigns___spaceId',
  languages___projects___assigns___contentful_id = 'languages___projects___assigns___contentful_id',
  languages___projects___assigns___createdAt = 'languages___projects___assigns___createdAt',
  languages___projects___assigns___updatedAt = 'languages___projects___assigns___updatedAt',
  languages___projects___assigns___node_locale = 'languages___projects___assigns___node_locale',
  languages___projects___systems = 'languages___projects___systems',
  languages___projects___systems___id = 'languages___projects___systems___id',
  languages___projects___systems___children = 'languages___projects___systems___children',
  languages___projects___systems___name = 'languages___projects___systems___name',
  languages___projects___systems___level = 'languages___projects___systems___level',
  languages___projects___systems___osses = 'languages___projects___systems___osses',
  languages___projects___systems___spaceId = 'languages___projects___systems___spaceId',
  languages___projects___systems___contentful_id = 'languages___projects___systems___contentful_id',
  languages___projects___systems___createdAt = 'languages___projects___systems___createdAt',
  languages___projects___systems___updatedAt = 'languages___projects___systems___updatedAt',
  languages___projects___systems___node_locale = 'languages___projects___systems___node_locale',
  languages___projects___systems___projects = 'languages___projects___systems___projects',
  languages___projects___systems___skillmap = 'languages___projects___systems___skillmap',
  languages___projects___languages = 'languages___projects___languages',
  languages___projects___languages___id = 'languages___projects___languages___id',
  languages___projects___languages___children = 'languages___projects___languages___children',
  languages___projects___languages___name = 'languages___projects___languages___name',
  languages___projects___languages___level = 'languages___projects___languages___level',
  languages___projects___languages___osses = 'languages___projects___languages___osses',
  languages___projects___languages___spaceId = 'languages___projects___languages___spaceId',
  languages___projects___languages___contentful_id = 'languages___projects___languages___contentful_id',
  languages___projects___languages___createdAt = 'languages___projects___languages___createdAt',
  languages___projects___languages___updatedAt = 'languages___projects___languages___updatedAt',
  languages___projects___languages___node_locale = 'languages___projects___languages___node_locale',
  languages___projects___languages___projects = 'languages___projects___languages___projects',
  languages___projects___languages___skillmap = 'languages___projects___languages___skillmap',
  languages___projects___tools = 'languages___projects___tools',
  languages___projects___tools___id = 'languages___projects___tools___id',
  languages___projects___tools___children = 'languages___projects___tools___children',
  languages___projects___tools___name = 'languages___projects___tools___name',
  languages___projects___tools___level = 'languages___projects___tools___level',
  languages___projects___tools___osses = 'languages___projects___tools___osses',
  languages___projects___tools___spaceId = 'languages___projects___tools___spaceId',
  languages___projects___tools___contentful_id = 'languages___projects___tools___contentful_id',
  languages___projects___tools___createdAt = 'languages___projects___tools___createdAt',
  languages___projects___tools___updatedAt = 'languages___projects___tools___updatedAt',
  languages___projects___tools___node_locale = 'languages___projects___tools___node_locale',
  languages___projects___tools___projects = 'languages___projects___tools___projects',
  languages___projects___tools___skillmap = 'languages___projects___tools___skillmap',
  languages___projects___image___id = 'languages___projects___image___id',
  languages___projects___image___children = 'languages___projects___image___children',
  languages___projects___image___image = 'languages___projects___image___image',
  languages___projects___spaceId = 'languages___projects___spaceId',
  languages___projects___contentful_id = 'languages___projects___contentful_id',
  languages___projects___createdAt = 'languages___projects___createdAt',
  languages___projects___updatedAt = 'languages___projects___updatedAt',
  languages___projects___sys___type = 'languages___projects___sys___type',
  languages___projects___sys___revision = 'languages___projects___sys___revision',
  languages___projects___node_locale = 'languages___projects___node_locale',
  languages___projects___childContentfulProjectsImageTextNode___id = 'languages___projects___childContentfulProjectsImageTextNode___id',
  languages___projects___childContentfulProjectsImageTextNode___children = 'languages___projects___childContentfulProjectsImageTextNode___children',
  languages___projects___childContentfulProjectsImageTextNode___image = 'languages___projects___childContentfulProjectsImageTextNode___image',
  languages___skillmap = 'languages___skillmap',
  languages___skillmap___id = 'languages___skillmap___id',
  languages___skillmap___parent___id = 'languages___skillmap___parent___id',
  languages___skillmap___parent___children = 'languages___skillmap___parent___children',
  languages___skillmap___children = 'languages___skillmap___children',
  languages___skillmap___children___id = 'languages___skillmap___children___id',
  languages___skillmap___children___children = 'languages___skillmap___children___children',
  languages___skillmap___internal___content = 'languages___skillmap___internal___content',
  languages___skillmap___internal___contentDigest = 'languages___skillmap___internal___contentDigest',
  languages___skillmap___internal___description = 'languages___skillmap___internal___description',
  languages___skillmap___internal___fieldOwners = 'languages___skillmap___internal___fieldOwners',
  languages___skillmap___internal___ignoreType = 'languages___skillmap___internal___ignoreType',
  languages___skillmap___internal___mediaType = 'languages___skillmap___internal___mediaType',
  languages___skillmap___internal___owner = 'languages___skillmap___internal___owner',
  languages___skillmap___internal___type = 'languages___skillmap___internal___type',
  languages___skillmap___name = 'languages___skillmap___name',
  languages___skillmap___skills = 'languages___skillmap___skills',
  languages___skillmap___skills___id = 'languages___skillmap___skills___id',
  languages___skillmap___skills___children = 'languages___skillmap___skills___children',
  languages___skillmap___skills___name = 'languages___skillmap___skills___name',
  languages___skillmap___skills___level = 'languages___skillmap___skills___level',
  languages___skillmap___skills___osses = 'languages___skillmap___skills___osses',
  languages___skillmap___skills___spaceId = 'languages___skillmap___skills___spaceId',
  languages___skillmap___skills___contentful_id = 'languages___skillmap___skills___contentful_id',
  languages___skillmap___skills___createdAt = 'languages___skillmap___skills___createdAt',
  languages___skillmap___skills___updatedAt = 'languages___skillmap___skills___updatedAt',
  languages___skillmap___skills___node_locale = 'languages___skillmap___skills___node_locale',
  languages___skillmap___skills___projects = 'languages___skillmap___skills___projects',
  languages___skillmap___skills___skillmap = 'languages___skillmap___skills___skillmap',
  languages___skillmap___spaceId = 'languages___skillmap___spaceId',
  languages___skillmap___contentful_id = 'languages___skillmap___contentful_id',
  languages___skillmap___createdAt = 'languages___skillmap___createdAt',
  languages___skillmap___updatedAt = 'languages___skillmap___updatedAt',
  languages___skillmap___sys___type = 'languages___skillmap___sys___type',
  languages___skillmap___sys___revision = 'languages___skillmap___sys___revision',
  languages___skillmap___node_locale = 'languages___skillmap___node_locale',
  tools = 'tools',
  tools___id = 'tools___id',
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
  tools___name = 'tools___name',
  tools___level = 'tools___level',
  tools___osses = 'tools___osses',
  tools___osses___id = 'tools___osses___id',
  tools___osses___parent___id = 'tools___osses___parent___id',
  tools___osses___parent___children = 'tools___osses___parent___children',
  tools___osses___children = 'tools___osses___children',
  tools___osses___children___id = 'tools___osses___children___id',
  tools___osses___children___children = 'tools___osses___children___children',
  tools___osses___internal___content = 'tools___osses___internal___content',
  tools___osses___internal___contentDigest = 'tools___osses___internal___contentDigest',
  tools___osses___internal___description = 'tools___osses___internal___description',
  tools___osses___internal___fieldOwners = 'tools___osses___internal___fieldOwners',
  tools___osses___internal___ignoreType = 'tools___osses___internal___ignoreType',
  tools___osses___internal___mediaType = 'tools___osses___internal___mediaType',
  tools___osses___internal___owner = 'tools___osses___internal___owner',
  tools___osses___internal___type = 'tools___osses___internal___type',
  tools___osses___name = 'tools___osses___name',
  tools___osses___slug = 'tools___osses___slug',
  tools___osses___startDate = 'tools___osses___startDate',
  tools___osses___during = 'tools___osses___during',
  tools___osses___comment = 'tools___osses___comment',
  tools___osses___siteUrl = 'tools___osses___siteUrl',
  tools___osses___sourceUrl = 'tools___osses___sourceUrl',
  tools___osses___mainImage___id = 'tools___osses___mainImage___id',
  tools___osses___mainImage___children = 'tools___osses___mainImage___children',
  tools___osses___mainImage___contentful_id = 'tools___osses___mainImage___contentful_id',
  tools___osses___mainImage___spaceId = 'tools___osses___mainImage___spaceId',
  tools___osses___mainImage___createdAt = 'tools___osses___mainImage___createdAt',
  tools___osses___mainImage___updatedAt = 'tools___osses___mainImage___updatedAt',
  tools___osses___mainImage___title = 'tools___osses___mainImage___title',
  tools___osses___mainImage___description = 'tools___osses___mainImage___description',
  tools___osses___mainImage___node_locale = 'tools___osses___mainImage___node_locale',
  tools___osses___roles = 'tools___osses___roles',
  tools___osses___roles___id = 'tools___osses___roles___id',
  tools___osses___roles___children = 'tools___osses___roles___children',
  tools___osses___roles___name = 'tools___osses___roles___name',
  tools___osses___roles___projects = 'tools___osses___roles___projects',
  tools___osses___roles___osses = 'tools___osses___roles___osses',
  tools___osses___roles___spaceId = 'tools___osses___roles___spaceId',
  tools___osses___roles___contentful_id = 'tools___osses___roles___contentful_id',
  tools___osses___roles___createdAt = 'tools___osses___roles___createdAt',
  tools___osses___roles___updatedAt = 'tools___osses___roles___updatedAt',
  tools___osses___roles___node_locale = 'tools___osses___roles___node_locale',
  tools___osses___assigns = 'tools___osses___assigns',
  tools___osses___assigns___id = 'tools___osses___assigns___id',
  tools___osses___assigns___children = 'tools___osses___assigns___children',
  tools___osses___assigns___name = 'tools___osses___assigns___name',
  tools___osses___assigns___projects = 'tools___osses___assigns___projects',
  tools___osses___assigns___osses = 'tools___osses___assigns___osses',
  tools___osses___assigns___spaceId = 'tools___osses___assigns___spaceId',
  tools___osses___assigns___contentful_id = 'tools___osses___assigns___contentful_id',
  tools___osses___assigns___createdAt = 'tools___osses___assigns___createdAt',
  tools___osses___assigns___updatedAt = 'tools___osses___assigns___updatedAt',
  tools___osses___assigns___node_locale = 'tools___osses___assigns___node_locale',
  tools___osses___systems = 'tools___osses___systems',
  tools___osses___systems___id = 'tools___osses___systems___id',
  tools___osses___systems___children = 'tools___osses___systems___children',
  tools___osses___systems___name = 'tools___osses___systems___name',
  tools___osses___systems___level = 'tools___osses___systems___level',
  tools___osses___systems___osses = 'tools___osses___systems___osses',
  tools___osses___systems___spaceId = 'tools___osses___systems___spaceId',
  tools___osses___systems___contentful_id = 'tools___osses___systems___contentful_id',
  tools___osses___systems___createdAt = 'tools___osses___systems___createdAt',
  tools___osses___systems___updatedAt = 'tools___osses___systems___updatedAt',
  tools___osses___systems___node_locale = 'tools___osses___systems___node_locale',
  tools___osses___systems___projects = 'tools___osses___systems___projects',
  tools___osses___systems___skillmap = 'tools___osses___systems___skillmap',
  tools___osses___languages = 'tools___osses___languages',
  tools___osses___languages___id = 'tools___osses___languages___id',
  tools___osses___languages___children = 'tools___osses___languages___children',
  tools___osses___languages___name = 'tools___osses___languages___name',
  tools___osses___languages___level = 'tools___osses___languages___level',
  tools___osses___languages___osses = 'tools___osses___languages___osses',
  tools___osses___languages___spaceId = 'tools___osses___languages___spaceId',
  tools___osses___languages___contentful_id = 'tools___osses___languages___contentful_id',
  tools___osses___languages___createdAt = 'tools___osses___languages___createdAt',
  tools___osses___languages___updatedAt = 'tools___osses___languages___updatedAt',
  tools___osses___languages___node_locale = 'tools___osses___languages___node_locale',
  tools___osses___languages___projects = 'tools___osses___languages___projects',
  tools___osses___languages___skillmap = 'tools___osses___languages___skillmap',
  tools___osses___tools = 'tools___osses___tools',
  tools___osses___tools___id = 'tools___osses___tools___id',
  tools___osses___tools___children = 'tools___osses___tools___children',
  tools___osses___tools___name = 'tools___osses___tools___name',
  tools___osses___tools___level = 'tools___osses___tools___level',
  tools___osses___tools___osses = 'tools___osses___tools___osses',
  tools___osses___tools___spaceId = 'tools___osses___tools___spaceId',
  tools___osses___tools___contentful_id = 'tools___osses___tools___contentful_id',
  tools___osses___tools___createdAt = 'tools___osses___tools___createdAt',
  tools___osses___tools___updatedAt = 'tools___osses___tools___updatedAt',
  tools___osses___tools___node_locale = 'tools___osses___tools___node_locale',
  tools___osses___tools___projects = 'tools___osses___tools___projects',
  tools___osses___tools___skillmap = 'tools___osses___tools___skillmap',
  tools___osses___spaceId = 'tools___osses___spaceId',
  tools___osses___contentful_id = 'tools___osses___contentful_id',
  tools___osses___createdAt = 'tools___osses___createdAt',
  tools___osses___updatedAt = 'tools___osses___updatedAt',
  tools___osses___sys___type = 'tools___osses___sys___type',
  tools___osses___sys___revision = 'tools___osses___sys___revision',
  tools___osses___node_locale = 'tools___osses___node_locale',
  tools___spaceId = 'tools___spaceId',
  tools___contentful_id = 'tools___contentful_id',
  tools___createdAt = 'tools___createdAt',
  tools___updatedAt = 'tools___updatedAt',
  tools___sys___type = 'tools___sys___type',
  tools___sys___revision = 'tools___sys___revision',
  tools___node_locale = 'tools___node_locale',
  tools___projects = 'tools___projects',
  tools___projects___id = 'tools___projects___id',
  tools___projects___parent___id = 'tools___projects___parent___id',
  tools___projects___parent___children = 'tools___projects___parent___children',
  tools___projects___children = 'tools___projects___children',
  tools___projects___children___id = 'tools___projects___children___id',
  tools___projects___children___children = 'tools___projects___children___children',
  tools___projects___internal___content = 'tools___projects___internal___content',
  tools___projects___internal___contentDigest = 'tools___projects___internal___contentDigest',
  tools___projects___internal___description = 'tools___projects___internal___description',
  tools___projects___internal___fieldOwners = 'tools___projects___internal___fieldOwners',
  tools___projects___internal___ignoreType = 'tools___projects___internal___ignoreType',
  tools___projects___internal___mediaType = 'tools___projects___internal___mediaType',
  tools___projects___internal___owner = 'tools___projects___internal___owner',
  tools___projects___internal___type = 'tools___projects___internal___type',
  tools___projects___name = 'tools___projects___name',
  tools___projects___startDate = 'tools___projects___startDate',
  tools___projects___during = 'tools___projects___during',
  tools___projects___comment = 'tools___projects___comment',
  tools___projects___roles = 'tools___projects___roles',
  tools___projects___roles___id = 'tools___projects___roles___id',
  tools___projects___roles___children = 'tools___projects___roles___children',
  tools___projects___roles___name = 'tools___projects___roles___name',
  tools___projects___roles___projects = 'tools___projects___roles___projects',
  tools___projects___roles___osses = 'tools___projects___roles___osses',
  tools___projects___roles___spaceId = 'tools___projects___roles___spaceId',
  tools___projects___roles___contentful_id = 'tools___projects___roles___contentful_id',
  tools___projects___roles___createdAt = 'tools___projects___roles___createdAt',
  tools___projects___roles___updatedAt = 'tools___projects___roles___updatedAt',
  tools___projects___roles___node_locale = 'tools___projects___roles___node_locale',
  tools___projects___assigns = 'tools___projects___assigns',
  tools___projects___assigns___id = 'tools___projects___assigns___id',
  tools___projects___assigns___children = 'tools___projects___assigns___children',
  tools___projects___assigns___name = 'tools___projects___assigns___name',
  tools___projects___assigns___projects = 'tools___projects___assigns___projects',
  tools___projects___assigns___osses = 'tools___projects___assigns___osses',
  tools___projects___assigns___spaceId = 'tools___projects___assigns___spaceId',
  tools___projects___assigns___contentful_id = 'tools___projects___assigns___contentful_id',
  tools___projects___assigns___createdAt = 'tools___projects___assigns___createdAt',
  tools___projects___assigns___updatedAt = 'tools___projects___assigns___updatedAt',
  tools___projects___assigns___node_locale = 'tools___projects___assigns___node_locale',
  tools___projects___systems = 'tools___projects___systems',
  tools___projects___systems___id = 'tools___projects___systems___id',
  tools___projects___systems___children = 'tools___projects___systems___children',
  tools___projects___systems___name = 'tools___projects___systems___name',
  tools___projects___systems___level = 'tools___projects___systems___level',
  tools___projects___systems___osses = 'tools___projects___systems___osses',
  tools___projects___systems___spaceId = 'tools___projects___systems___spaceId',
  tools___projects___systems___contentful_id = 'tools___projects___systems___contentful_id',
  tools___projects___systems___createdAt = 'tools___projects___systems___createdAt',
  tools___projects___systems___updatedAt = 'tools___projects___systems___updatedAt',
  tools___projects___systems___node_locale = 'tools___projects___systems___node_locale',
  tools___projects___systems___projects = 'tools___projects___systems___projects',
  tools___projects___systems___skillmap = 'tools___projects___systems___skillmap',
  tools___projects___languages = 'tools___projects___languages',
  tools___projects___languages___id = 'tools___projects___languages___id',
  tools___projects___languages___children = 'tools___projects___languages___children',
  tools___projects___languages___name = 'tools___projects___languages___name',
  tools___projects___languages___level = 'tools___projects___languages___level',
  tools___projects___languages___osses = 'tools___projects___languages___osses',
  tools___projects___languages___spaceId = 'tools___projects___languages___spaceId',
  tools___projects___languages___contentful_id = 'tools___projects___languages___contentful_id',
  tools___projects___languages___createdAt = 'tools___projects___languages___createdAt',
  tools___projects___languages___updatedAt = 'tools___projects___languages___updatedAt',
  tools___projects___languages___node_locale = 'tools___projects___languages___node_locale',
  tools___projects___languages___projects = 'tools___projects___languages___projects',
  tools___projects___languages___skillmap = 'tools___projects___languages___skillmap',
  tools___projects___tools = 'tools___projects___tools',
  tools___projects___tools___id = 'tools___projects___tools___id',
  tools___projects___tools___children = 'tools___projects___tools___children',
  tools___projects___tools___name = 'tools___projects___tools___name',
  tools___projects___tools___level = 'tools___projects___tools___level',
  tools___projects___tools___osses = 'tools___projects___tools___osses',
  tools___projects___tools___spaceId = 'tools___projects___tools___spaceId',
  tools___projects___tools___contentful_id = 'tools___projects___tools___contentful_id',
  tools___projects___tools___createdAt = 'tools___projects___tools___createdAt',
  tools___projects___tools___updatedAt = 'tools___projects___tools___updatedAt',
  tools___projects___tools___node_locale = 'tools___projects___tools___node_locale',
  tools___projects___tools___projects = 'tools___projects___tools___projects',
  tools___projects___tools___skillmap = 'tools___projects___tools___skillmap',
  tools___projects___image___id = 'tools___projects___image___id',
  tools___projects___image___children = 'tools___projects___image___children',
  tools___projects___image___image = 'tools___projects___image___image',
  tools___projects___spaceId = 'tools___projects___spaceId',
  tools___projects___contentful_id = 'tools___projects___contentful_id',
  tools___projects___createdAt = 'tools___projects___createdAt',
  tools___projects___updatedAt = 'tools___projects___updatedAt',
  tools___projects___sys___type = 'tools___projects___sys___type',
  tools___projects___sys___revision = 'tools___projects___sys___revision',
  tools___projects___node_locale = 'tools___projects___node_locale',
  tools___projects___childContentfulProjectsImageTextNode___id = 'tools___projects___childContentfulProjectsImageTextNode___id',
  tools___projects___childContentfulProjectsImageTextNode___children = 'tools___projects___childContentfulProjectsImageTextNode___children',
  tools___projects___childContentfulProjectsImageTextNode___image = 'tools___projects___childContentfulProjectsImageTextNode___image',
  tools___skillmap = 'tools___skillmap',
  tools___skillmap___id = 'tools___skillmap___id',
  tools___skillmap___parent___id = 'tools___skillmap___parent___id',
  tools___skillmap___parent___children = 'tools___skillmap___parent___children',
  tools___skillmap___children = 'tools___skillmap___children',
  tools___skillmap___children___id = 'tools___skillmap___children___id',
  tools___skillmap___children___children = 'tools___skillmap___children___children',
  tools___skillmap___internal___content = 'tools___skillmap___internal___content',
  tools___skillmap___internal___contentDigest = 'tools___skillmap___internal___contentDigest',
  tools___skillmap___internal___description = 'tools___skillmap___internal___description',
  tools___skillmap___internal___fieldOwners = 'tools___skillmap___internal___fieldOwners',
  tools___skillmap___internal___ignoreType = 'tools___skillmap___internal___ignoreType',
  tools___skillmap___internal___mediaType = 'tools___skillmap___internal___mediaType',
  tools___skillmap___internal___owner = 'tools___skillmap___internal___owner',
  tools___skillmap___internal___type = 'tools___skillmap___internal___type',
  tools___skillmap___name = 'tools___skillmap___name',
  tools___skillmap___skills = 'tools___skillmap___skills',
  tools___skillmap___skills___id = 'tools___skillmap___skills___id',
  tools___skillmap___skills___children = 'tools___skillmap___skills___children',
  tools___skillmap___skills___name = 'tools___skillmap___skills___name',
  tools___skillmap___skills___level = 'tools___skillmap___skills___level',
  tools___skillmap___skills___osses = 'tools___skillmap___skills___osses',
  tools___skillmap___skills___spaceId = 'tools___skillmap___skills___spaceId',
  tools___skillmap___skills___contentful_id = 'tools___skillmap___skills___contentful_id',
  tools___skillmap___skills___createdAt = 'tools___skillmap___skills___createdAt',
  tools___skillmap___skills___updatedAt = 'tools___skillmap___skills___updatedAt',
  tools___skillmap___skills___node_locale = 'tools___skillmap___skills___node_locale',
  tools___skillmap___skills___projects = 'tools___skillmap___skills___projects',
  tools___skillmap___skills___skillmap = 'tools___skillmap___skills___skillmap',
  tools___skillmap___spaceId = 'tools___skillmap___spaceId',
  tools___skillmap___contentful_id = 'tools___skillmap___contentful_id',
  tools___skillmap___createdAt = 'tools___skillmap___createdAt',
  tools___skillmap___updatedAt = 'tools___skillmap___updatedAt',
  tools___skillmap___sys___type = 'tools___skillmap___sys___type',
  tools___skillmap___sys___revision = 'tools___skillmap___sys___revision',
  tools___skillmap___node_locale = 'tools___skillmap___node_locale',
  image___id = 'image___id',
  image___parent___id = 'image___parent___id',
  image___parent___parent___id = 'image___parent___parent___id',
  image___parent___parent___children = 'image___parent___parent___children',
  image___parent___children = 'image___parent___children',
  image___parent___children___id = 'image___parent___children___id',
  image___parent___children___children = 'image___parent___children___children',
  image___parent___internal___content = 'image___parent___internal___content',
  image___parent___internal___contentDigest = 'image___parent___internal___contentDigest',
  image___parent___internal___description = 'image___parent___internal___description',
  image___parent___internal___fieldOwners = 'image___parent___internal___fieldOwners',
  image___parent___internal___ignoreType = 'image___parent___internal___ignoreType',
  image___parent___internal___mediaType = 'image___parent___internal___mediaType',
  image___parent___internal___owner = 'image___parent___internal___owner',
  image___parent___internal___type = 'image___parent___internal___type',
  image___children = 'image___children',
  image___children___id = 'image___children___id',
  image___children___parent___id = 'image___children___parent___id',
  image___children___parent___children = 'image___children___parent___children',
  image___children___children = 'image___children___children',
  image___children___children___id = 'image___children___children___id',
  image___children___children___children = 'image___children___children___children',
  image___children___internal___content = 'image___children___internal___content',
  image___children___internal___contentDigest = 'image___children___internal___contentDigest',
  image___children___internal___description = 'image___children___internal___description',
  image___children___internal___fieldOwners = 'image___children___internal___fieldOwners',
  image___children___internal___ignoreType = 'image___children___internal___ignoreType',
  image___children___internal___mediaType = 'image___children___internal___mediaType',
  image___children___internal___owner = 'image___children___internal___owner',
  image___children___internal___type = 'image___children___internal___type',
  image___internal___content = 'image___internal___content',
  image___internal___contentDigest = 'image___internal___contentDigest',
  image___internal___description = 'image___internal___description',
  image___internal___fieldOwners = 'image___internal___fieldOwners',
  image___internal___ignoreType = 'image___internal___ignoreType',
  image___internal___mediaType = 'image___internal___mediaType',
  image___internal___owner = 'image___internal___owner',
  image___internal___type = 'image___internal___type',
  image___image = 'image___image',
  image___sys___type = 'image___sys___type',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  node_locale = 'node_locale',
  childContentfulProjectsImageTextNode___id = 'childContentfulProjectsImageTextNode___id',
  childContentfulProjectsImageTextNode___parent___id = 'childContentfulProjectsImageTextNode___parent___id',
  childContentfulProjectsImageTextNode___parent___parent___id = 'childContentfulProjectsImageTextNode___parent___parent___id',
  childContentfulProjectsImageTextNode___parent___parent___children = 'childContentfulProjectsImageTextNode___parent___parent___children',
  childContentfulProjectsImageTextNode___parent___children = 'childContentfulProjectsImageTextNode___parent___children',
  childContentfulProjectsImageTextNode___parent___children___id = 'childContentfulProjectsImageTextNode___parent___children___id',
  childContentfulProjectsImageTextNode___parent___children___children = 'childContentfulProjectsImageTextNode___parent___children___children',
  childContentfulProjectsImageTextNode___parent___internal___content = 'childContentfulProjectsImageTextNode___parent___internal___content',
  childContentfulProjectsImageTextNode___parent___internal___contentDigest = 'childContentfulProjectsImageTextNode___parent___internal___contentDigest',
  childContentfulProjectsImageTextNode___parent___internal___description = 'childContentfulProjectsImageTextNode___parent___internal___description',
  childContentfulProjectsImageTextNode___parent___internal___fieldOwners = 'childContentfulProjectsImageTextNode___parent___internal___fieldOwners',
  childContentfulProjectsImageTextNode___parent___internal___ignoreType = 'childContentfulProjectsImageTextNode___parent___internal___ignoreType',
  childContentfulProjectsImageTextNode___parent___internal___mediaType = 'childContentfulProjectsImageTextNode___parent___internal___mediaType',
  childContentfulProjectsImageTextNode___parent___internal___owner = 'childContentfulProjectsImageTextNode___parent___internal___owner',
  childContentfulProjectsImageTextNode___parent___internal___type = 'childContentfulProjectsImageTextNode___parent___internal___type',
  childContentfulProjectsImageTextNode___children = 'childContentfulProjectsImageTextNode___children',
  childContentfulProjectsImageTextNode___children___id = 'childContentfulProjectsImageTextNode___children___id',
  childContentfulProjectsImageTextNode___children___parent___id = 'childContentfulProjectsImageTextNode___children___parent___id',
  childContentfulProjectsImageTextNode___children___parent___children = 'childContentfulProjectsImageTextNode___children___parent___children',
  childContentfulProjectsImageTextNode___children___children = 'childContentfulProjectsImageTextNode___children___children',
  childContentfulProjectsImageTextNode___children___children___id = 'childContentfulProjectsImageTextNode___children___children___id',
  childContentfulProjectsImageTextNode___children___children___children = 'childContentfulProjectsImageTextNode___children___children___children',
  childContentfulProjectsImageTextNode___children___internal___content = 'childContentfulProjectsImageTextNode___children___internal___content',
  childContentfulProjectsImageTextNode___children___internal___contentDigest = 'childContentfulProjectsImageTextNode___children___internal___contentDigest',
  childContentfulProjectsImageTextNode___children___internal___description = 'childContentfulProjectsImageTextNode___children___internal___description',
  childContentfulProjectsImageTextNode___children___internal___fieldOwners = 'childContentfulProjectsImageTextNode___children___internal___fieldOwners',
  childContentfulProjectsImageTextNode___children___internal___ignoreType = 'childContentfulProjectsImageTextNode___children___internal___ignoreType',
  childContentfulProjectsImageTextNode___children___internal___mediaType = 'childContentfulProjectsImageTextNode___children___internal___mediaType',
  childContentfulProjectsImageTextNode___children___internal___owner = 'childContentfulProjectsImageTextNode___children___internal___owner',
  childContentfulProjectsImageTextNode___children___internal___type = 'childContentfulProjectsImageTextNode___children___internal___type',
  childContentfulProjectsImageTextNode___internal___content = 'childContentfulProjectsImageTextNode___internal___content',
  childContentfulProjectsImageTextNode___internal___contentDigest = 'childContentfulProjectsImageTextNode___internal___contentDigest',
  childContentfulProjectsImageTextNode___internal___description = 'childContentfulProjectsImageTextNode___internal___description',
  childContentfulProjectsImageTextNode___internal___fieldOwners = 'childContentfulProjectsImageTextNode___internal___fieldOwners',
  childContentfulProjectsImageTextNode___internal___ignoreType = 'childContentfulProjectsImageTextNode___internal___ignoreType',
  childContentfulProjectsImageTextNode___internal___mediaType = 'childContentfulProjectsImageTextNode___internal___mediaType',
  childContentfulProjectsImageTextNode___internal___owner = 'childContentfulProjectsImageTextNode___internal___owner',
  childContentfulProjectsImageTextNode___internal___type = 'childContentfulProjectsImageTextNode___internal___type',
  childContentfulProjectsImageTextNode___image = 'childContentfulProjectsImageTextNode___image',
  childContentfulProjectsImageTextNode___sys___type = 'childContentfulProjectsImageTextNode___sys___type'
}

export type ContentfulProjectsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  during?: Maybe<IntQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<ContentfulRoleFilterListInput>;
  assigns?: Maybe<ContentfulAssigneFilterListInput>;
  systems?: Maybe<ContentfulSkillFilterListInput>;
  languages?: Maybe<ContentfulSkillFilterListInput>;
  tools?: Maybe<ContentfulSkillFilterListInput>;
  image?: Maybe<ContentfulProjectsImageTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulProjectsImageTextNode?: Maybe<ContentfulProjectsImageTextNodeFilterInput>;
};

export type ContentfulProjectsFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectsFilterInput>;
};

export type ContentfulProjectsGroupConnection = {
  __typename?: 'ContentfulProjectsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectsEdge>;
  nodes: Array<ContentfulProjects>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProjectsImageTextNode = Node & {
  __typename?: 'contentfulProjectsImageTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  image?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulProjectsImageTextNodeSys>;
};

export type ContentfulProjectsImageTextNodeConnection = {
  __typename?: 'contentfulProjectsImageTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectsImageTextNodeEdge>;
  nodes: Array<ContentfulProjectsImageTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProjectsImageTextNodeGroupConnection>;
};


export type ContentfulProjectsImageTextNodeConnectionDistinctArgs = {
  field: ContentfulProjectsImageTextNodeFieldsEnum;
};


export type ContentfulProjectsImageTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProjectsImageTextNodeFieldsEnum;
};

export type ContentfulProjectsImageTextNodeEdge = {
  __typename?: 'contentfulProjectsImageTextNodeEdge';
  next?: Maybe<ContentfulProjectsImageTextNode>;
  node: ContentfulProjectsImageTextNode;
  previous?: Maybe<ContentfulProjectsImageTextNode>;
};

export enum ContentfulProjectsImageTextNodeFieldsEnum {
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
  image = 'image',
  sys___type = 'sys___type'
}

export type ContentfulProjectsImageTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  image?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectsImageTextNodeSysFilterInput>;
};

export type ContentfulProjectsImageTextNodeGroupConnection = {
  __typename?: 'contentfulProjectsImageTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectsImageTextNodeEdge>;
  nodes: Array<ContentfulProjectsImageTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProjectsImageTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectsImageTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProjectsImageTextNodeSys = {
  __typename?: 'contentfulProjectsImageTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulProjectsImageTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProjectsSys = {
  __typename?: 'ContentfulProjectsSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulProjectsSysContentType>;
};

export type ContentfulProjectsSysContentType = {
  __typename?: 'ContentfulProjectsSysContentType';
  sys?: Maybe<ContentfulProjectsSysContentTypeSys>;
};

export type ContentfulProjectsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulProjectsSysContentTypeSysFilterInput>;
};

export type ContentfulProjectsSysContentTypeSys = {
  __typename?: 'ContentfulProjectsSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulProjectsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectsSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulProjectsSysContentTypeFilterInput>;
};

export type ContentfulQualifications = Node & {
  __typename?: 'ContentfulQualifications';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comment?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulQualificationsSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationsDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationsConnection = {
  __typename?: 'ContentfulQualificationsConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationsEdge>;
  nodes: Array<ContentfulQualifications>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQualificationsGroupConnection>;
};


export type ContentfulQualificationsConnectionDistinctArgs = {
  field: ContentfulQualificationsFieldsEnum;
};


export type ContentfulQualificationsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQualificationsFieldsEnum;
};

export type ContentfulQualificationsEdge = {
  __typename?: 'ContentfulQualificationsEdge';
  next?: Maybe<ContentfulQualifications>;
  node: ContentfulQualifications;
  previous?: Maybe<ContentfulQualifications>;
};

export enum ContentfulQualificationsFieldsEnum {
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
  date = 'date',
  comment = 'comment',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  node_locale = 'node_locale'
}

export type ContentfulQualificationsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationsGroupConnection = {
  __typename?: 'ContentfulQualificationsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationsEdge>;
  nodes: Array<ContentfulQualifications>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQualificationsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQualificationsSys = {
  __typename?: 'ContentfulQualificationsSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulQualificationsSysContentType>;
};

export type ContentfulQualificationsSysContentType = {
  __typename?: 'ContentfulQualificationsSysContentType';
  sys?: Maybe<ContentfulQualificationsSysContentTypeSys>;
};

export type ContentfulQualificationsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulQualificationsSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationsSysContentTypeSys = {
  __typename?: 'ContentfulQualificationsSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationsSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulQualificationsSysContentTypeFilterInput>;
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

export type ContentfulRole = Node & {
  __typename?: 'ContentfulRole';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<ContentfulProjects>>>;
  osses?: Maybe<Array<Maybe<ContentfulOsSes>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulRoleSys>;
  node_locale?: Maybe<Scalars['String']>;
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
  projects = 'projects',
  projects___id = 'projects___id',
  projects___parent___id = 'projects___parent___id',
  projects___parent___parent___id = 'projects___parent___parent___id',
  projects___parent___parent___children = 'projects___parent___parent___children',
  projects___parent___children = 'projects___parent___children',
  projects___parent___children___id = 'projects___parent___children___id',
  projects___parent___children___children = 'projects___parent___children___children',
  projects___parent___internal___content = 'projects___parent___internal___content',
  projects___parent___internal___contentDigest = 'projects___parent___internal___contentDigest',
  projects___parent___internal___description = 'projects___parent___internal___description',
  projects___parent___internal___fieldOwners = 'projects___parent___internal___fieldOwners',
  projects___parent___internal___ignoreType = 'projects___parent___internal___ignoreType',
  projects___parent___internal___mediaType = 'projects___parent___internal___mediaType',
  projects___parent___internal___owner = 'projects___parent___internal___owner',
  projects___parent___internal___type = 'projects___parent___internal___type',
  projects___children = 'projects___children',
  projects___children___id = 'projects___children___id',
  projects___children___parent___id = 'projects___children___parent___id',
  projects___children___parent___children = 'projects___children___parent___children',
  projects___children___children = 'projects___children___children',
  projects___children___children___id = 'projects___children___children___id',
  projects___children___children___children = 'projects___children___children___children',
  projects___children___internal___content = 'projects___children___internal___content',
  projects___children___internal___contentDigest = 'projects___children___internal___contentDigest',
  projects___children___internal___description = 'projects___children___internal___description',
  projects___children___internal___fieldOwners = 'projects___children___internal___fieldOwners',
  projects___children___internal___ignoreType = 'projects___children___internal___ignoreType',
  projects___children___internal___mediaType = 'projects___children___internal___mediaType',
  projects___children___internal___owner = 'projects___children___internal___owner',
  projects___children___internal___type = 'projects___children___internal___type',
  projects___internal___content = 'projects___internal___content',
  projects___internal___contentDigest = 'projects___internal___contentDigest',
  projects___internal___description = 'projects___internal___description',
  projects___internal___fieldOwners = 'projects___internal___fieldOwners',
  projects___internal___ignoreType = 'projects___internal___ignoreType',
  projects___internal___mediaType = 'projects___internal___mediaType',
  projects___internal___owner = 'projects___internal___owner',
  projects___internal___type = 'projects___internal___type',
  projects___name = 'projects___name',
  projects___startDate = 'projects___startDate',
  projects___during = 'projects___during',
  projects___comment = 'projects___comment',
  projects___roles = 'projects___roles',
  projects___roles___id = 'projects___roles___id',
  projects___roles___parent___id = 'projects___roles___parent___id',
  projects___roles___parent___children = 'projects___roles___parent___children',
  projects___roles___children = 'projects___roles___children',
  projects___roles___children___id = 'projects___roles___children___id',
  projects___roles___children___children = 'projects___roles___children___children',
  projects___roles___internal___content = 'projects___roles___internal___content',
  projects___roles___internal___contentDigest = 'projects___roles___internal___contentDigest',
  projects___roles___internal___description = 'projects___roles___internal___description',
  projects___roles___internal___fieldOwners = 'projects___roles___internal___fieldOwners',
  projects___roles___internal___ignoreType = 'projects___roles___internal___ignoreType',
  projects___roles___internal___mediaType = 'projects___roles___internal___mediaType',
  projects___roles___internal___owner = 'projects___roles___internal___owner',
  projects___roles___internal___type = 'projects___roles___internal___type',
  projects___roles___name = 'projects___roles___name',
  projects___roles___projects = 'projects___roles___projects',
  projects___roles___projects___id = 'projects___roles___projects___id',
  projects___roles___projects___children = 'projects___roles___projects___children',
  projects___roles___projects___name = 'projects___roles___projects___name',
  projects___roles___projects___startDate = 'projects___roles___projects___startDate',
  projects___roles___projects___during = 'projects___roles___projects___during',
  projects___roles___projects___comment = 'projects___roles___projects___comment',
  projects___roles___projects___roles = 'projects___roles___projects___roles',
  projects___roles___projects___assigns = 'projects___roles___projects___assigns',
  projects___roles___projects___systems = 'projects___roles___projects___systems',
  projects___roles___projects___languages = 'projects___roles___projects___languages',
  projects___roles___projects___tools = 'projects___roles___projects___tools',
  projects___roles___projects___spaceId = 'projects___roles___projects___spaceId',
  projects___roles___projects___contentful_id = 'projects___roles___projects___contentful_id',
  projects___roles___projects___createdAt = 'projects___roles___projects___createdAt',
  projects___roles___projects___updatedAt = 'projects___roles___projects___updatedAt',
  projects___roles___projects___node_locale = 'projects___roles___projects___node_locale',
  projects___roles___osses = 'projects___roles___osses',
  projects___roles___osses___id = 'projects___roles___osses___id',
  projects___roles___osses___children = 'projects___roles___osses___children',
  projects___roles___osses___name = 'projects___roles___osses___name',
  projects___roles___osses___slug = 'projects___roles___osses___slug',
  projects___roles___osses___startDate = 'projects___roles___osses___startDate',
  projects___roles___osses___during = 'projects___roles___osses___during',
  projects___roles___osses___comment = 'projects___roles___osses___comment',
  projects___roles___osses___siteUrl = 'projects___roles___osses___siteUrl',
  projects___roles___osses___sourceUrl = 'projects___roles___osses___sourceUrl',
  projects___roles___osses___roles = 'projects___roles___osses___roles',
  projects___roles___osses___assigns = 'projects___roles___osses___assigns',
  projects___roles___osses___systems = 'projects___roles___osses___systems',
  projects___roles___osses___languages = 'projects___roles___osses___languages',
  projects___roles___osses___tools = 'projects___roles___osses___tools',
  projects___roles___osses___spaceId = 'projects___roles___osses___spaceId',
  projects___roles___osses___contentful_id = 'projects___roles___osses___contentful_id',
  projects___roles___osses___createdAt = 'projects___roles___osses___createdAt',
  projects___roles___osses___updatedAt = 'projects___roles___osses___updatedAt',
  projects___roles___osses___node_locale = 'projects___roles___osses___node_locale',
  projects___roles___spaceId = 'projects___roles___spaceId',
  projects___roles___contentful_id = 'projects___roles___contentful_id',
  projects___roles___createdAt = 'projects___roles___createdAt',
  projects___roles___updatedAt = 'projects___roles___updatedAt',
  projects___roles___sys___type = 'projects___roles___sys___type',
  projects___roles___sys___revision = 'projects___roles___sys___revision',
  projects___roles___node_locale = 'projects___roles___node_locale',
  projects___assigns = 'projects___assigns',
  projects___assigns___id = 'projects___assigns___id',
  projects___assigns___parent___id = 'projects___assigns___parent___id',
  projects___assigns___parent___children = 'projects___assigns___parent___children',
  projects___assigns___children = 'projects___assigns___children',
  projects___assigns___children___id = 'projects___assigns___children___id',
  projects___assigns___children___children = 'projects___assigns___children___children',
  projects___assigns___internal___content = 'projects___assigns___internal___content',
  projects___assigns___internal___contentDigest = 'projects___assigns___internal___contentDigest',
  projects___assigns___internal___description = 'projects___assigns___internal___description',
  projects___assigns___internal___fieldOwners = 'projects___assigns___internal___fieldOwners',
  projects___assigns___internal___ignoreType = 'projects___assigns___internal___ignoreType',
  projects___assigns___internal___mediaType = 'projects___assigns___internal___mediaType',
  projects___assigns___internal___owner = 'projects___assigns___internal___owner',
  projects___assigns___internal___type = 'projects___assigns___internal___type',
  projects___assigns___name = 'projects___assigns___name',
  projects___assigns___projects = 'projects___assigns___projects',
  projects___assigns___projects___id = 'projects___assigns___projects___id',
  projects___assigns___projects___children = 'projects___assigns___projects___children',
  projects___assigns___projects___name = 'projects___assigns___projects___name',
  projects___assigns___projects___startDate = 'projects___assigns___projects___startDate',
  projects___assigns___projects___during = 'projects___assigns___projects___during',
  projects___assigns___projects___comment = 'projects___assigns___projects___comment',
  projects___assigns___projects___roles = 'projects___assigns___projects___roles',
  projects___assigns___projects___assigns = 'projects___assigns___projects___assigns',
  projects___assigns___projects___systems = 'projects___assigns___projects___systems',
  projects___assigns___projects___languages = 'projects___assigns___projects___languages',
  projects___assigns___projects___tools = 'projects___assigns___projects___tools',
  projects___assigns___projects___spaceId = 'projects___assigns___projects___spaceId',
  projects___assigns___projects___contentful_id = 'projects___assigns___projects___contentful_id',
  projects___assigns___projects___createdAt = 'projects___assigns___projects___createdAt',
  projects___assigns___projects___updatedAt = 'projects___assigns___projects___updatedAt',
  projects___assigns___projects___node_locale = 'projects___assigns___projects___node_locale',
  projects___assigns___osses = 'projects___assigns___osses',
  projects___assigns___osses___id = 'projects___assigns___osses___id',
  projects___assigns___osses___children = 'projects___assigns___osses___children',
  projects___assigns___osses___name = 'projects___assigns___osses___name',
  projects___assigns___osses___slug = 'projects___assigns___osses___slug',
  projects___assigns___osses___startDate = 'projects___assigns___osses___startDate',
  projects___assigns___osses___during = 'projects___assigns___osses___during',
  projects___assigns___osses___comment = 'projects___assigns___osses___comment',
  projects___assigns___osses___siteUrl = 'projects___assigns___osses___siteUrl',
  projects___assigns___osses___sourceUrl = 'projects___assigns___osses___sourceUrl',
  projects___assigns___osses___roles = 'projects___assigns___osses___roles',
  projects___assigns___osses___assigns = 'projects___assigns___osses___assigns',
  projects___assigns___osses___systems = 'projects___assigns___osses___systems',
  projects___assigns___osses___languages = 'projects___assigns___osses___languages',
  projects___assigns___osses___tools = 'projects___assigns___osses___tools',
  projects___assigns___osses___spaceId = 'projects___assigns___osses___spaceId',
  projects___assigns___osses___contentful_id = 'projects___assigns___osses___contentful_id',
  projects___assigns___osses___createdAt = 'projects___assigns___osses___createdAt',
  projects___assigns___osses___updatedAt = 'projects___assigns___osses___updatedAt',
  projects___assigns___osses___node_locale = 'projects___assigns___osses___node_locale',
  projects___assigns___spaceId = 'projects___assigns___spaceId',
  projects___assigns___contentful_id = 'projects___assigns___contentful_id',
  projects___assigns___createdAt = 'projects___assigns___createdAt',
  projects___assigns___updatedAt = 'projects___assigns___updatedAt',
  projects___assigns___sys___type = 'projects___assigns___sys___type',
  projects___assigns___sys___revision = 'projects___assigns___sys___revision',
  projects___assigns___node_locale = 'projects___assigns___node_locale',
  projects___systems = 'projects___systems',
  projects___systems___id = 'projects___systems___id',
  projects___systems___parent___id = 'projects___systems___parent___id',
  projects___systems___parent___children = 'projects___systems___parent___children',
  projects___systems___children = 'projects___systems___children',
  projects___systems___children___id = 'projects___systems___children___id',
  projects___systems___children___children = 'projects___systems___children___children',
  projects___systems___internal___content = 'projects___systems___internal___content',
  projects___systems___internal___contentDigest = 'projects___systems___internal___contentDigest',
  projects___systems___internal___description = 'projects___systems___internal___description',
  projects___systems___internal___fieldOwners = 'projects___systems___internal___fieldOwners',
  projects___systems___internal___ignoreType = 'projects___systems___internal___ignoreType',
  projects___systems___internal___mediaType = 'projects___systems___internal___mediaType',
  projects___systems___internal___owner = 'projects___systems___internal___owner',
  projects___systems___internal___type = 'projects___systems___internal___type',
  projects___systems___name = 'projects___systems___name',
  projects___systems___level = 'projects___systems___level',
  projects___systems___osses = 'projects___systems___osses',
  projects___systems___osses___id = 'projects___systems___osses___id',
  projects___systems___osses___children = 'projects___systems___osses___children',
  projects___systems___osses___name = 'projects___systems___osses___name',
  projects___systems___osses___slug = 'projects___systems___osses___slug',
  projects___systems___osses___startDate = 'projects___systems___osses___startDate',
  projects___systems___osses___during = 'projects___systems___osses___during',
  projects___systems___osses___comment = 'projects___systems___osses___comment',
  projects___systems___osses___siteUrl = 'projects___systems___osses___siteUrl',
  projects___systems___osses___sourceUrl = 'projects___systems___osses___sourceUrl',
  projects___systems___osses___roles = 'projects___systems___osses___roles',
  projects___systems___osses___assigns = 'projects___systems___osses___assigns',
  projects___systems___osses___systems = 'projects___systems___osses___systems',
  projects___systems___osses___languages = 'projects___systems___osses___languages',
  projects___systems___osses___tools = 'projects___systems___osses___tools',
  projects___systems___osses___spaceId = 'projects___systems___osses___spaceId',
  projects___systems___osses___contentful_id = 'projects___systems___osses___contentful_id',
  projects___systems___osses___createdAt = 'projects___systems___osses___createdAt',
  projects___systems___osses___updatedAt = 'projects___systems___osses___updatedAt',
  projects___systems___osses___node_locale = 'projects___systems___osses___node_locale',
  projects___systems___spaceId = 'projects___systems___spaceId',
  projects___systems___contentful_id = 'projects___systems___contentful_id',
  projects___systems___createdAt = 'projects___systems___createdAt',
  projects___systems___updatedAt = 'projects___systems___updatedAt',
  projects___systems___sys___type = 'projects___systems___sys___type',
  projects___systems___sys___revision = 'projects___systems___sys___revision',
  projects___systems___node_locale = 'projects___systems___node_locale',
  projects___systems___projects = 'projects___systems___projects',
  projects___systems___projects___id = 'projects___systems___projects___id',
  projects___systems___projects___children = 'projects___systems___projects___children',
  projects___systems___projects___name = 'projects___systems___projects___name',
  projects___systems___projects___startDate = 'projects___systems___projects___startDate',
  projects___systems___projects___during = 'projects___systems___projects___during',
  projects___systems___projects___comment = 'projects___systems___projects___comment',
  projects___systems___projects___roles = 'projects___systems___projects___roles',
  projects___systems___projects___assigns = 'projects___systems___projects___assigns',
  projects___systems___projects___systems = 'projects___systems___projects___systems',
  projects___systems___projects___languages = 'projects___systems___projects___languages',
  projects___systems___projects___tools = 'projects___systems___projects___tools',
  projects___systems___projects___spaceId = 'projects___systems___projects___spaceId',
  projects___systems___projects___contentful_id = 'projects___systems___projects___contentful_id',
  projects___systems___projects___createdAt = 'projects___systems___projects___createdAt',
  projects___systems___projects___updatedAt = 'projects___systems___projects___updatedAt',
  projects___systems___projects___node_locale = 'projects___systems___projects___node_locale',
  projects___systems___skillmap = 'projects___systems___skillmap',
  projects___systems___skillmap___id = 'projects___systems___skillmap___id',
  projects___systems___skillmap___children = 'projects___systems___skillmap___children',
  projects___systems___skillmap___name = 'projects___systems___skillmap___name',
  projects___systems___skillmap___skills = 'projects___systems___skillmap___skills',
  projects___systems___skillmap___spaceId = 'projects___systems___skillmap___spaceId',
  projects___systems___skillmap___contentful_id = 'projects___systems___skillmap___contentful_id',
  projects___systems___skillmap___createdAt = 'projects___systems___skillmap___createdAt',
  projects___systems___skillmap___updatedAt = 'projects___systems___skillmap___updatedAt',
  projects___systems___skillmap___node_locale = 'projects___systems___skillmap___node_locale',
  projects___languages = 'projects___languages',
  projects___languages___id = 'projects___languages___id',
  projects___languages___parent___id = 'projects___languages___parent___id',
  projects___languages___parent___children = 'projects___languages___parent___children',
  projects___languages___children = 'projects___languages___children',
  projects___languages___children___id = 'projects___languages___children___id',
  projects___languages___children___children = 'projects___languages___children___children',
  projects___languages___internal___content = 'projects___languages___internal___content',
  projects___languages___internal___contentDigest = 'projects___languages___internal___contentDigest',
  projects___languages___internal___description = 'projects___languages___internal___description',
  projects___languages___internal___fieldOwners = 'projects___languages___internal___fieldOwners',
  projects___languages___internal___ignoreType = 'projects___languages___internal___ignoreType',
  projects___languages___internal___mediaType = 'projects___languages___internal___mediaType',
  projects___languages___internal___owner = 'projects___languages___internal___owner',
  projects___languages___internal___type = 'projects___languages___internal___type',
  projects___languages___name = 'projects___languages___name',
  projects___languages___level = 'projects___languages___level',
  projects___languages___osses = 'projects___languages___osses',
  projects___languages___osses___id = 'projects___languages___osses___id',
  projects___languages___osses___children = 'projects___languages___osses___children',
  projects___languages___osses___name = 'projects___languages___osses___name',
  projects___languages___osses___slug = 'projects___languages___osses___slug',
  projects___languages___osses___startDate = 'projects___languages___osses___startDate',
  projects___languages___osses___during = 'projects___languages___osses___during',
  projects___languages___osses___comment = 'projects___languages___osses___comment',
  projects___languages___osses___siteUrl = 'projects___languages___osses___siteUrl',
  projects___languages___osses___sourceUrl = 'projects___languages___osses___sourceUrl',
  projects___languages___osses___roles = 'projects___languages___osses___roles',
  projects___languages___osses___assigns = 'projects___languages___osses___assigns',
  projects___languages___osses___systems = 'projects___languages___osses___systems',
  projects___languages___osses___languages = 'projects___languages___osses___languages',
  projects___languages___osses___tools = 'projects___languages___osses___tools',
  projects___languages___osses___spaceId = 'projects___languages___osses___spaceId',
  projects___languages___osses___contentful_id = 'projects___languages___osses___contentful_id',
  projects___languages___osses___createdAt = 'projects___languages___osses___createdAt',
  projects___languages___osses___updatedAt = 'projects___languages___osses___updatedAt',
  projects___languages___osses___node_locale = 'projects___languages___osses___node_locale',
  projects___languages___spaceId = 'projects___languages___spaceId',
  projects___languages___contentful_id = 'projects___languages___contentful_id',
  projects___languages___createdAt = 'projects___languages___createdAt',
  projects___languages___updatedAt = 'projects___languages___updatedAt',
  projects___languages___sys___type = 'projects___languages___sys___type',
  projects___languages___sys___revision = 'projects___languages___sys___revision',
  projects___languages___node_locale = 'projects___languages___node_locale',
  projects___languages___projects = 'projects___languages___projects',
  projects___languages___projects___id = 'projects___languages___projects___id',
  projects___languages___projects___children = 'projects___languages___projects___children',
  projects___languages___projects___name = 'projects___languages___projects___name',
  projects___languages___projects___startDate = 'projects___languages___projects___startDate',
  projects___languages___projects___during = 'projects___languages___projects___during',
  projects___languages___projects___comment = 'projects___languages___projects___comment',
  projects___languages___projects___roles = 'projects___languages___projects___roles',
  projects___languages___projects___assigns = 'projects___languages___projects___assigns',
  projects___languages___projects___systems = 'projects___languages___projects___systems',
  projects___languages___projects___languages = 'projects___languages___projects___languages',
  projects___languages___projects___tools = 'projects___languages___projects___tools',
  projects___languages___projects___spaceId = 'projects___languages___projects___spaceId',
  projects___languages___projects___contentful_id = 'projects___languages___projects___contentful_id',
  projects___languages___projects___createdAt = 'projects___languages___projects___createdAt',
  projects___languages___projects___updatedAt = 'projects___languages___projects___updatedAt',
  projects___languages___projects___node_locale = 'projects___languages___projects___node_locale',
  projects___languages___skillmap = 'projects___languages___skillmap',
  projects___languages___skillmap___id = 'projects___languages___skillmap___id',
  projects___languages___skillmap___children = 'projects___languages___skillmap___children',
  projects___languages___skillmap___name = 'projects___languages___skillmap___name',
  projects___languages___skillmap___skills = 'projects___languages___skillmap___skills',
  projects___languages___skillmap___spaceId = 'projects___languages___skillmap___spaceId',
  projects___languages___skillmap___contentful_id = 'projects___languages___skillmap___contentful_id',
  projects___languages___skillmap___createdAt = 'projects___languages___skillmap___createdAt',
  projects___languages___skillmap___updatedAt = 'projects___languages___skillmap___updatedAt',
  projects___languages___skillmap___node_locale = 'projects___languages___skillmap___node_locale',
  projects___tools = 'projects___tools',
  projects___tools___id = 'projects___tools___id',
  projects___tools___parent___id = 'projects___tools___parent___id',
  projects___tools___parent___children = 'projects___tools___parent___children',
  projects___tools___children = 'projects___tools___children',
  projects___tools___children___id = 'projects___tools___children___id',
  projects___tools___children___children = 'projects___tools___children___children',
  projects___tools___internal___content = 'projects___tools___internal___content',
  projects___tools___internal___contentDigest = 'projects___tools___internal___contentDigest',
  projects___tools___internal___description = 'projects___tools___internal___description',
  projects___tools___internal___fieldOwners = 'projects___tools___internal___fieldOwners',
  projects___tools___internal___ignoreType = 'projects___tools___internal___ignoreType',
  projects___tools___internal___mediaType = 'projects___tools___internal___mediaType',
  projects___tools___internal___owner = 'projects___tools___internal___owner',
  projects___tools___internal___type = 'projects___tools___internal___type',
  projects___tools___name = 'projects___tools___name',
  projects___tools___level = 'projects___tools___level',
  projects___tools___osses = 'projects___tools___osses',
  projects___tools___osses___id = 'projects___tools___osses___id',
  projects___tools___osses___children = 'projects___tools___osses___children',
  projects___tools___osses___name = 'projects___tools___osses___name',
  projects___tools___osses___slug = 'projects___tools___osses___slug',
  projects___tools___osses___startDate = 'projects___tools___osses___startDate',
  projects___tools___osses___during = 'projects___tools___osses___during',
  projects___tools___osses___comment = 'projects___tools___osses___comment',
  projects___tools___osses___siteUrl = 'projects___tools___osses___siteUrl',
  projects___tools___osses___sourceUrl = 'projects___tools___osses___sourceUrl',
  projects___tools___osses___roles = 'projects___tools___osses___roles',
  projects___tools___osses___assigns = 'projects___tools___osses___assigns',
  projects___tools___osses___systems = 'projects___tools___osses___systems',
  projects___tools___osses___languages = 'projects___tools___osses___languages',
  projects___tools___osses___tools = 'projects___tools___osses___tools',
  projects___tools___osses___spaceId = 'projects___tools___osses___spaceId',
  projects___tools___osses___contentful_id = 'projects___tools___osses___contentful_id',
  projects___tools___osses___createdAt = 'projects___tools___osses___createdAt',
  projects___tools___osses___updatedAt = 'projects___tools___osses___updatedAt',
  projects___tools___osses___node_locale = 'projects___tools___osses___node_locale',
  projects___tools___spaceId = 'projects___tools___spaceId',
  projects___tools___contentful_id = 'projects___tools___contentful_id',
  projects___tools___createdAt = 'projects___tools___createdAt',
  projects___tools___updatedAt = 'projects___tools___updatedAt',
  projects___tools___sys___type = 'projects___tools___sys___type',
  projects___tools___sys___revision = 'projects___tools___sys___revision',
  projects___tools___node_locale = 'projects___tools___node_locale',
  projects___tools___projects = 'projects___tools___projects',
  projects___tools___projects___id = 'projects___tools___projects___id',
  projects___tools___projects___children = 'projects___tools___projects___children',
  projects___tools___projects___name = 'projects___tools___projects___name',
  projects___tools___projects___startDate = 'projects___tools___projects___startDate',
  projects___tools___projects___during = 'projects___tools___projects___during',
  projects___tools___projects___comment = 'projects___tools___projects___comment',
  projects___tools___projects___roles = 'projects___tools___projects___roles',
  projects___tools___projects___assigns = 'projects___tools___projects___assigns',
  projects___tools___projects___systems = 'projects___tools___projects___systems',
  projects___tools___projects___languages = 'projects___tools___projects___languages',
  projects___tools___projects___tools = 'projects___tools___projects___tools',
  projects___tools___projects___spaceId = 'projects___tools___projects___spaceId',
  projects___tools___projects___contentful_id = 'projects___tools___projects___contentful_id',
  projects___tools___projects___createdAt = 'projects___tools___projects___createdAt',
  projects___tools___projects___updatedAt = 'projects___tools___projects___updatedAt',
  projects___tools___projects___node_locale = 'projects___tools___projects___node_locale',
  projects___tools___skillmap = 'projects___tools___skillmap',
  projects___tools___skillmap___id = 'projects___tools___skillmap___id',
  projects___tools___skillmap___children = 'projects___tools___skillmap___children',
  projects___tools___skillmap___name = 'projects___tools___skillmap___name',
  projects___tools___skillmap___skills = 'projects___tools___skillmap___skills',
  projects___tools___skillmap___spaceId = 'projects___tools___skillmap___spaceId',
  projects___tools___skillmap___contentful_id = 'projects___tools___skillmap___contentful_id',
  projects___tools___skillmap___createdAt = 'projects___tools___skillmap___createdAt',
  projects___tools___skillmap___updatedAt = 'projects___tools___skillmap___updatedAt',
  projects___tools___skillmap___node_locale = 'projects___tools___skillmap___node_locale',
  projects___image___id = 'projects___image___id',
  projects___image___parent___id = 'projects___image___parent___id',
  projects___image___parent___children = 'projects___image___parent___children',
  projects___image___children = 'projects___image___children',
  projects___image___children___id = 'projects___image___children___id',
  projects___image___children___children = 'projects___image___children___children',
  projects___image___internal___content = 'projects___image___internal___content',
  projects___image___internal___contentDigest = 'projects___image___internal___contentDigest',
  projects___image___internal___description = 'projects___image___internal___description',
  projects___image___internal___fieldOwners = 'projects___image___internal___fieldOwners',
  projects___image___internal___ignoreType = 'projects___image___internal___ignoreType',
  projects___image___internal___mediaType = 'projects___image___internal___mediaType',
  projects___image___internal___owner = 'projects___image___internal___owner',
  projects___image___internal___type = 'projects___image___internal___type',
  projects___image___image = 'projects___image___image',
  projects___image___sys___type = 'projects___image___sys___type',
  projects___spaceId = 'projects___spaceId',
  projects___contentful_id = 'projects___contentful_id',
  projects___createdAt = 'projects___createdAt',
  projects___updatedAt = 'projects___updatedAt',
  projects___sys___type = 'projects___sys___type',
  projects___sys___revision = 'projects___sys___revision',
  projects___node_locale = 'projects___node_locale',
  projects___childContentfulProjectsImageTextNode___id = 'projects___childContentfulProjectsImageTextNode___id',
  projects___childContentfulProjectsImageTextNode___parent___id = 'projects___childContentfulProjectsImageTextNode___parent___id',
  projects___childContentfulProjectsImageTextNode___parent___children = 'projects___childContentfulProjectsImageTextNode___parent___children',
  projects___childContentfulProjectsImageTextNode___children = 'projects___childContentfulProjectsImageTextNode___children',
  projects___childContentfulProjectsImageTextNode___children___id = 'projects___childContentfulProjectsImageTextNode___children___id',
  projects___childContentfulProjectsImageTextNode___children___children = 'projects___childContentfulProjectsImageTextNode___children___children',
  projects___childContentfulProjectsImageTextNode___internal___content = 'projects___childContentfulProjectsImageTextNode___internal___content',
  projects___childContentfulProjectsImageTextNode___internal___contentDigest = 'projects___childContentfulProjectsImageTextNode___internal___contentDigest',
  projects___childContentfulProjectsImageTextNode___internal___description = 'projects___childContentfulProjectsImageTextNode___internal___description',
  projects___childContentfulProjectsImageTextNode___internal___fieldOwners = 'projects___childContentfulProjectsImageTextNode___internal___fieldOwners',
  projects___childContentfulProjectsImageTextNode___internal___ignoreType = 'projects___childContentfulProjectsImageTextNode___internal___ignoreType',
  projects___childContentfulProjectsImageTextNode___internal___mediaType = 'projects___childContentfulProjectsImageTextNode___internal___mediaType',
  projects___childContentfulProjectsImageTextNode___internal___owner = 'projects___childContentfulProjectsImageTextNode___internal___owner',
  projects___childContentfulProjectsImageTextNode___internal___type = 'projects___childContentfulProjectsImageTextNode___internal___type',
  projects___childContentfulProjectsImageTextNode___image = 'projects___childContentfulProjectsImageTextNode___image',
  projects___childContentfulProjectsImageTextNode___sys___type = 'projects___childContentfulProjectsImageTextNode___sys___type',
  osses = 'osses',
  osses___id = 'osses___id',
  osses___parent___id = 'osses___parent___id',
  osses___parent___parent___id = 'osses___parent___parent___id',
  osses___parent___parent___children = 'osses___parent___parent___children',
  osses___parent___children = 'osses___parent___children',
  osses___parent___children___id = 'osses___parent___children___id',
  osses___parent___children___children = 'osses___parent___children___children',
  osses___parent___internal___content = 'osses___parent___internal___content',
  osses___parent___internal___contentDigest = 'osses___parent___internal___contentDigest',
  osses___parent___internal___description = 'osses___parent___internal___description',
  osses___parent___internal___fieldOwners = 'osses___parent___internal___fieldOwners',
  osses___parent___internal___ignoreType = 'osses___parent___internal___ignoreType',
  osses___parent___internal___mediaType = 'osses___parent___internal___mediaType',
  osses___parent___internal___owner = 'osses___parent___internal___owner',
  osses___parent___internal___type = 'osses___parent___internal___type',
  osses___children = 'osses___children',
  osses___children___id = 'osses___children___id',
  osses___children___parent___id = 'osses___children___parent___id',
  osses___children___parent___children = 'osses___children___parent___children',
  osses___children___children = 'osses___children___children',
  osses___children___children___id = 'osses___children___children___id',
  osses___children___children___children = 'osses___children___children___children',
  osses___children___internal___content = 'osses___children___internal___content',
  osses___children___internal___contentDigest = 'osses___children___internal___contentDigest',
  osses___children___internal___description = 'osses___children___internal___description',
  osses___children___internal___fieldOwners = 'osses___children___internal___fieldOwners',
  osses___children___internal___ignoreType = 'osses___children___internal___ignoreType',
  osses___children___internal___mediaType = 'osses___children___internal___mediaType',
  osses___children___internal___owner = 'osses___children___internal___owner',
  osses___children___internal___type = 'osses___children___internal___type',
  osses___internal___content = 'osses___internal___content',
  osses___internal___contentDigest = 'osses___internal___contentDigest',
  osses___internal___description = 'osses___internal___description',
  osses___internal___fieldOwners = 'osses___internal___fieldOwners',
  osses___internal___ignoreType = 'osses___internal___ignoreType',
  osses___internal___mediaType = 'osses___internal___mediaType',
  osses___internal___owner = 'osses___internal___owner',
  osses___internal___type = 'osses___internal___type',
  osses___name = 'osses___name',
  osses___slug = 'osses___slug',
  osses___startDate = 'osses___startDate',
  osses___during = 'osses___during',
  osses___comment = 'osses___comment',
  osses___siteUrl = 'osses___siteUrl',
  osses___sourceUrl = 'osses___sourceUrl',
  osses___mainImage___id = 'osses___mainImage___id',
  osses___mainImage___parent___id = 'osses___mainImage___parent___id',
  osses___mainImage___parent___children = 'osses___mainImage___parent___children',
  osses___mainImage___children = 'osses___mainImage___children',
  osses___mainImage___children___id = 'osses___mainImage___children___id',
  osses___mainImage___children___children = 'osses___mainImage___children___children',
  osses___mainImage___internal___content = 'osses___mainImage___internal___content',
  osses___mainImage___internal___contentDigest = 'osses___mainImage___internal___contentDigest',
  osses___mainImage___internal___description = 'osses___mainImage___internal___description',
  osses___mainImage___internal___fieldOwners = 'osses___mainImage___internal___fieldOwners',
  osses___mainImage___internal___ignoreType = 'osses___mainImage___internal___ignoreType',
  osses___mainImage___internal___mediaType = 'osses___mainImage___internal___mediaType',
  osses___mainImage___internal___owner = 'osses___mainImage___internal___owner',
  osses___mainImage___internal___type = 'osses___mainImage___internal___type',
  osses___mainImage___contentful_id = 'osses___mainImage___contentful_id',
  osses___mainImage___spaceId = 'osses___mainImage___spaceId',
  osses___mainImage___createdAt = 'osses___mainImage___createdAt',
  osses___mainImage___updatedAt = 'osses___mainImage___updatedAt',
  osses___mainImage___file___url = 'osses___mainImage___file___url',
  osses___mainImage___file___fileName = 'osses___mainImage___file___fileName',
  osses___mainImage___file___contentType = 'osses___mainImage___file___contentType',
  osses___mainImage___title = 'osses___mainImage___title',
  osses___mainImage___description = 'osses___mainImage___description',
  osses___mainImage___node_locale = 'osses___mainImage___node_locale',
  osses___mainImage___sys___type = 'osses___mainImage___sys___type',
  osses___mainImage___sys___revision = 'osses___mainImage___sys___revision',
  osses___mainImage___localFile___sourceInstanceName = 'osses___mainImage___localFile___sourceInstanceName',
  osses___mainImage___localFile___absolutePath = 'osses___mainImage___localFile___absolutePath',
  osses___mainImage___localFile___relativePath = 'osses___mainImage___localFile___relativePath',
  osses___mainImage___localFile___extension = 'osses___mainImage___localFile___extension',
  osses___mainImage___localFile___size = 'osses___mainImage___localFile___size',
  osses___mainImage___localFile___prettySize = 'osses___mainImage___localFile___prettySize',
  osses___mainImage___localFile___modifiedTime = 'osses___mainImage___localFile___modifiedTime',
  osses___mainImage___localFile___accessTime = 'osses___mainImage___localFile___accessTime',
  osses___mainImage___localFile___changeTime = 'osses___mainImage___localFile___changeTime',
  osses___mainImage___localFile___birthTime = 'osses___mainImage___localFile___birthTime',
  osses___mainImage___localFile___root = 'osses___mainImage___localFile___root',
  osses___mainImage___localFile___dir = 'osses___mainImage___localFile___dir',
  osses___mainImage___localFile___base = 'osses___mainImage___localFile___base',
  osses___mainImage___localFile___ext = 'osses___mainImage___localFile___ext',
  osses___mainImage___localFile___name = 'osses___mainImage___localFile___name',
  osses___mainImage___localFile___relativeDirectory = 'osses___mainImage___localFile___relativeDirectory',
  osses___mainImage___localFile___dev = 'osses___mainImage___localFile___dev',
  osses___mainImage___localFile___mode = 'osses___mainImage___localFile___mode',
  osses___mainImage___localFile___nlink = 'osses___mainImage___localFile___nlink',
  osses___mainImage___localFile___uid = 'osses___mainImage___localFile___uid',
  osses___mainImage___localFile___gid = 'osses___mainImage___localFile___gid',
  osses___mainImage___localFile___rdev = 'osses___mainImage___localFile___rdev',
  osses___mainImage___localFile___ino = 'osses___mainImage___localFile___ino',
  osses___mainImage___localFile___atimeMs = 'osses___mainImage___localFile___atimeMs',
  osses___mainImage___localFile___mtimeMs = 'osses___mainImage___localFile___mtimeMs',
  osses___mainImage___localFile___ctimeMs = 'osses___mainImage___localFile___ctimeMs',
  osses___mainImage___localFile___atime = 'osses___mainImage___localFile___atime',
  osses___mainImage___localFile___mtime = 'osses___mainImage___localFile___mtime',
  osses___mainImage___localFile___ctime = 'osses___mainImage___localFile___ctime',
  osses___mainImage___localFile___birthtime = 'osses___mainImage___localFile___birthtime',
  osses___mainImage___localFile___birthtimeMs = 'osses___mainImage___localFile___birthtimeMs',
  osses___mainImage___localFile___blksize = 'osses___mainImage___localFile___blksize',
  osses___mainImage___localFile___blocks = 'osses___mainImage___localFile___blocks',
  osses___mainImage___localFile___url = 'osses___mainImage___localFile___url',
  osses___mainImage___localFile___id = 'osses___mainImage___localFile___id',
  osses___mainImage___localFile___children = 'osses___mainImage___localFile___children',
  osses___mainImage___fixed___base64 = 'osses___mainImage___fixed___base64',
  osses___mainImage___fixed___tracedSVG = 'osses___mainImage___fixed___tracedSVG',
  osses___mainImage___fixed___aspectRatio = 'osses___mainImage___fixed___aspectRatio',
  osses___mainImage___fixed___width = 'osses___mainImage___fixed___width',
  osses___mainImage___fixed___height = 'osses___mainImage___fixed___height',
  osses___mainImage___fixed___src = 'osses___mainImage___fixed___src',
  osses___mainImage___fixed___srcSet = 'osses___mainImage___fixed___srcSet',
  osses___mainImage___fixed___srcWebp = 'osses___mainImage___fixed___srcWebp',
  osses___mainImage___fixed___srcSetWebp = 'osses___mainImage___fixed___srcSetWebp',
  osses___mainImage___resolutions___base64 = 'osses___mainImage___resolutions___base64',
  osses___mainImage___resolutions___tracedSVG = 'osses___mainImage___resolutions___tracedSVG',
  osses___mainImage___resolutions___aspectRatio = 'osses___mainImage___resolutions___aspectRatio',
  osses___mainImage___resolutions___width = 'osses___mainImage___resolutions___width',
  osses___mainImage___resolutions___height = 'osses___mainImage___resolutions___height',
  osses___mainImage___resolutions___src = 'osses___mainImage___resolutions___src',
  osses___mainImage___resolutions___srcSet = 'osses___mainImage___resolutions___srcSet',
  osses___mainImage___resolutions___srcWebp = 'osses___mainImage___resolutions___srcWebp',
  osses___mainImage___resolutions___srcSetWebp = 'osses___mainImage___resolutions___srcSetWebp',
  osses___mainImage___fluid___base64 = 'osses___mainImage___fluid___base64',
  osses___mainImage___fluid___tracedSVG = 'osses___mainImage___fluid___tracedSVG',
  osses___mainImage___fluid___aspectRatio = 'osses___mainImage___fluid___aspectRatio',
  osses___mainImage___fluid___src = 'osses___mainImage___fluid___src',
  osses___mainImage___fluid___srcSet = 'osses___mainImage___fluid___srcSet',
  osses___mainImage___fluid___srcWebp = 'osses___mainImage___fluid___srcWebp',
  osses___mainImage___fluid___srcSetWebp = 'osses___mainImage___fluid___srcSetWebp',
  osses___mainImage___fluid___sizes = 'osses___mainImage___fluid___sizes',
  osses___mainImage___sizes___base64 = 'osses___mainImage___sizes___base64',
  osses___mainImage___sizes___tracedSVG = 'osses___mainImage___sizes___tracedSVG',
  osses___mainImage___sizes___aspectRatio = 'osses___mainImage___sizes___aspectRatio',
  osses___mainImage___sizes___src = 'osses___mainImage___sizes___src',
  osses___mainImage___sizes___srcSet = 'osses___mainImage___sizes___srcSet',
  osses___mainImage___sizes___srcWebp = 'osses___mainImage___sizes___srcWebp',
  osses___mainImage___sizes___srcSetWebp = 'osses___mainImage___sizes___srcSetWebp',
  osses___mainImage___sizes___sizes = 'osses___mainImage___sizes___sizes',
  osses___mainImage___resize___base64 = 'osses___mainImage___resize___base64',
  osses___mainImage___resize___tracedSVG = 'osses___mainImage___resize___tracedSVG',
  osses___mainImage___resize___src = 'osses___mainImage___resize___src',
  osses___mainImage___resize___width = 'osses___mainImage___resize___width',
  osses___mainImage___resize___height = 'osses___mainImage___resize___height',
  osses___mainImage___resize___aspectRatio = 'osses___mainImage___resize___aspectRatio',
  osses___roles = 'osses___roles',
  osses___roles___id = 'osses___roles___id',
  osses___roles___parent___id = 'osses___roles___parent___id',
  osses___roles___parent___children = 'osses___roles___parent___children',
  osses___roles___children = 'osses___roles___children',
  osses___roles___children___id = 'osses___roles___children___id',
  osses___roles___children___children = 'osses___roles___children___children',
  osses___roles___internal___content = 'osses___roles___internal___content',
  osses___roles___internal___contentDigest = 'osses___roles___internal___contentDigest',
  osses___roles___internal___description = 'osses___roles___internal___description',
  osses___roles___internal___fieldOwners = 'osses___roles___internal___fieldOwners',
  osses___roles___internal___ignoreType = 'osses___roles___internal___ignoreType',
  osses___roles___internal___mediaType = 'osses___roles___internal___mediaType',
  osses___roles___internal___owner = 'osses___roles___internal___owner',
  osses___roles___internal___type = 'osses___roles___internal___type',
  osses___roles___name = 'osses___roles___name',
  osses___roles___projects = 'osses___roles___projects',
  osses___roles___projects___id = 'osses___roles___projects___id',
  osses___roles___projects___children = 'osses___roles___projects___children',
  osses___roles___projects___name = 'osses___roles___projects___name',
  osses___roles___projects___startDate = 'osses___roles___projects___startDate',
  osses___roles___projects___during = 'osses___roles___projects___during',
  osses___roles___projects___comment = 'osses___roles___projects___comment',
  osses___roles___projects___roles = 'osses___roles___projects___roles',
  osses___roles___projects___assigns = 'osses___roles___projects___assigns',
  osses___roles___projects___systems = 'osses___roles___projects___systems',
  osses___roles___projects___languages = 'osses___roles___projects___languages',
  osses___roles___projects___tools = 'osses___roles___projects___tools',
  osses___roles___projects___spaceId = 'osses___roles___projects___spaceId',
  osses___roles___projects___contentful_id = 'osses___roles___projects___contentful_id',
  osses___roles___projects___createdAt = 'osses___roles___projects___createdAt',
  osses___roles___projects___updatedAt = 'osses___roles___projects___updatedAt',
  osses___roles___projects___node_locale = 'osses___roles___projects___node_locale',
  osses___roles___osses = 'osses___roles___osses',
  osses___roles___osses___id = 'osses___roles___osses___id',
  osses___roles___osses___children = 'osses___roles___osses___children',
  osses___roles___osses___name = 'osses___roles___osses___name',
  osses___roles___osses___slug = 'osses___roles___osses___slug',
  osses___roles___osses___startDate = 'osses___roles___osses___startDate',
  osses___roles___osses___during = 'osses___roles___osses___during',
  osses___roles___osses___comment = 'osses___roles___osses___comment',
  osses___roles___osses___siteUrl = 'osses___roles___osses___siteUrl',
  osses___roles___osses___sourceUrl = 'osses___roles___osses___sourceUrl',
  osses___roles___osses___roles = 'osses___roles___osses___roles',
  osses___roles___osses___assigns = 'osses___roles___osses___assigns',
  osses___roles___osses___systems = 'osses___roles___osses___systems',
  osses___roles___osses___languages = 'osses___roles___osses___languages',
  osses___roles___osses___tools = 'osses___roles___osses___tools',
  osses___roles___osses___spaceId = 'osses___roles___osses___spaceId',
  osses___roles___osses___contentful_id = 'osses___roles___osses___contentful_id',
  osses___roles___osses___createdAt = 'osses___roles___osses___createdAt',
  osses___roles___osses___updatedAt = 'osses___roles___osses___updatedAt',
  osses___roles___osses___node_locale = 'osses___roles___osses___node_locale',
  osses___roles___spaceId = 'osses___roles___spaceId',
  osses___roles___contentful_id = 'osses___roles___contentful_id',
  osses___roles___createdAt = 'osses___roles___createdAt',
  osses___roles___updatedAt = 'osses___roles___updatedAt',
  osses___roles___sys___type = 'osses___roles___sys___type',
  osses___roles___sys___revision = 'osses___roles___sys___revision',
  osses___roles___node_locale = 'osses___roles___node_locale',
  osses___assigns = 'osses___assigns',
  osses___assigns___id = 'osses___assigns___id',
  osses___assigns___parent___id = 'osses___assigns___parent___id',
  osses___assigns___parent___children = 'osses___assigns___parent___children',
  osses___assigns___children = 'osses___assigns___children',
  osses___assigns___children___id = 'osses___assigns___children___id',
  osses___assigns___children___children = 'osses___assigns___children___children',
  osses___assigns___internal___content = 'osses___assigns___internal___content',
  osses___assigns___internal___contentDigest = 'osses___assigns___internal___contentDigest',
  osses___assigns___internal___description = 'osses___assigns___internal___description',
  osses___assigns___internal___fieldOwners = 'osses___assigns___internal___fieldOwners',
  osses___assigns___internal___ignoreType = 'osses___assigns___internal___ignoreType',
  osses___assigns___internal___mediaType = 'osses___assigns___internal___mediaType',
  osses___assigns___internal___owner = 'osses___assigns___internal___owner',
  osses___assigns___internal___type = 'osses___assigns___internal___type',
  osses___assigns___name = 'osses___assigns___name',
  osses___assigns___projects = 'osses___assigns___projects',
  osses___assigns___projects___id = 'osses___assigns___projects___id',
  osses___assigns___projects___children = 'osses___assigns___projects___children',
  osses___assigns___projects___name = 'osses___assigns___projects___name',
  osses___assigns___projects___startDate = 'osses___assigns___projects___startDate',
  osses___assigns___projects___during = 'osses___assigns___projects___during',
  osses___assigns___projects___comment = 'osses___assigns___projects___comment',
  osses___assigns___projects___roles = 'osses___assigns___projects___roles',
  osses___assigns___projects___assigns = 'osses___assigns___projects___assigns',
  osses___assigns___projects___systems = 'osses___assigns___projects___systems',
  osses___assigns___projects___languages = 'osses___assigns___projects___languages',
  osses___assigns___projects___tools = 'osses___assigns___projects___tools',
  osses___assigns___projects___spaceId = 'osses___assigns___projects___spaceId',
  osses___assigns___projects___contentful_id = 'osses___assigns___projects___contentful_id',
  osses___assigns___projects___createdAt = 'osses___assigns___projects___createdAt',
  osses___assigns___projects___updatedAt = 'osses___assigns___projects___updatedAt',
  osses___assigns___projects___node_locale = 'osses___assigns___projects___node_locale',
  osses___assigns___osses = 'osses___assigns___osses',
  osses___assigns___osses___id = 'osses___assigns___osses___id',
  osses___assigns___osses___children = 'osses___assigns___osses___children',
  osses___assigns___osses___name = 'osses___assigns___osses___name',
  osses___assigns___osses___slug = 'osses___assigns___osses___slug',
  osses___assigns___osses___startDate = 'osses___assigns___osses___startDate',
  osses___assigns___osses___during = 'osses___assigns___osses___during',
  osses___assigns___osses___comment = 'osses___assigns___osses___comment',
  osses___assigns___osses___siteUrl = 'osses___assigns___osses___siteUrl',
  osses___assigns___osses___sourceUrl = 'osses___assigns___osses___sourceUrl',
  osses___assigns___osses___roles = 'osses___assigns___osses___roles',
  osses___assigns___osses___assigns = 'osses___assigns___osses___assigns',
  osses___assigns___osses___systems = 'osses___assigns___osses___systems',
  osses___assigns___osses___languages = 'osses___assigns___osses___languages',
  osses___assigns___osses___tools = 'osses___assigns___osses___tools',
  osses___assigns___osses___spaceId = 'osses___assigns___osses___spaceId',
  osses___assigns___osses___contentful_id = 'osses___assigns___osses___contentful_id',
  osses___assigns___osses___createdAt = 'osses___assigns___osses___createdAt',
  osses___assigns___osses___updatedAt = 'osses___assigns___osses___updatedAt',
  osses___assigns___osses___node_locale = 'osses___assigns___osses___node_locale',
  osses___assigns___spaceId = 'osses___assigns___spaceId',
  osses___assigns___contentful_id = 'osses___assigns___contentful_id',
  osses___assigns___createdAt = 'osses___assigns___createdAt',
  osses___assigns___updatedAt = 'osses___assigns___updatedAt',
  osses___assigns___sys___type = 'osses___assigns___sys___type',
  osses___assigns___sys___revision = 'osses___assigns___sys___revision',
  osses___assigns___node_locale = 'osses___assigns___node_locale',
  osses___systems = 'osses___systems',
  osses___systems___id = 'osses___systems___id',
  osses___systems___parent___id = 'osses___systems___parent___id',
  osses___systems___parent___children = 'osses___systems___parent___children',
  osses___systems___children = 'osses___systems___children',
  osses___systems___children___id = 'osses___systems___children___id',
  osses___systems___children___children = 'osses___systems___children___children',
  osses___systems___internal___content = 'osses___systems___internal___content',
  osses___systems___internal___contentDigest = 'osses___systems___internal___contentDigest',
  osses___systems___internal___description = 'osses___systems___internal___description',
  osses___systems___internal___fieldOwners = 'osses___systems___internal___fieldOwners',
  osses___systems___internal___ignoreType = 'osses___systems___internal___ignoreType',
  osses___systems___internal___mediaType = 'osses___systems___internal___mediaType',
  osses___systems___internal___owner = 'osses___systems___internal___owner',
  osses___systems___internal___type = 'osses___systems___internal___type',
  osses___systems___name = 'osses___systems___name',
  osses___systems___level = 'osses___systems___level',
  osses___systems___osses = 'osses___systems___osses',
  osses___systems___osses___id = 'osses___systems___osses___id',
  osses___systems___osses___children = 'osses___systems___osses___children',
  osses___systems___osses___name = 'osses___systems___osses___name',
  osses___systems___osses___slug = 'osses___systems___osses___slug',
  osses___systems___osses___startDate = 'osses___systems___osses___startDate',
  osses___systems___osses___during = 'osses___systems___osses___during',
  osses___systems___osses___comment = 'osses___systems___osses___comment',
  osses___systems___osses___siteUrl = 'osses___systems___osses___siteUrl',
  osses___systems___osses___sourceUrl = 'osses___systems___osses___sourceUrl',
  osses___systems___osses___roles = 'osses___systems___osses___roles',
  osses___systems___osses___assigns = 'osses___systems___osses___assigns',
  osses___systems___osses___systems = 'osses___systems___osses___systems',
  osses___systems___osses___languages = 'osses___systems___osses___languages',
  osses___systems___osses___tools = 'osses___systems___osses___tools',
  osses___systems___osses___spaceId = 'osses___systems___osses___spaceId',
  osses___systems___osses___contentful_id = 'osses___systems___osses___contentful_id',
  osses___systems___osses___createdAt = 'osses___systems___osses___createdAt',
  osses___systems___osses___updatedAt = 'osses___systems___osses___updatedAt',
  osses___systems___osses___node_locale = 'osses___systems___osses___node_locale',
  osses___systems___spaceId = 'osses___systems___spaceId',
  osses___systems___contentful_id = 'osses___systems___contentful_id',
  osses___systems___createdAt = 'osses___systems___createdAt',
  osses___systems___updatedAt = 'osses___systems___updatedAt',
  osses___systems___sys___type = 'osses___systems___sys___type',
  osses___systems___sys___revision = 'osses___systems___sys___revision',
  osses___systems___node_locale = 'osses___systems___node_locale',
  osses___systems___projects = 'osses___systems___projects',
  osses___systems___projects___id = 'osses___systems___projects___id',
  osses___systems___projects___children = 'osses___systems___projects___children',
  osses___systems___projects___name = 'osses___systems___projects___name',
  osses___systems___projects___startDate = 'osses___systems___projects___startDate',
  osses___systems___projects___during = 'osses___systems___projects___during',
  osses___systems___projects___comment = 'osses___systems___projects___comment',
  osses___systems___projects___roles = 'osses___systems___projects___roles',
  osses___systems___projects___assigns = 'osses___systems___projects___assigns',
  osses___systems___projects___systems = 'osses___systems___projects___systems',
  osses___systems___projects___languages = 'osses___systems___projects___languages',
  osses___systems___projects___tools = 'osses___systems___projects___tools',
  osses___systems___projects___spaceId = 'osses___systems___projects___spaceId',
  osses___systems___projects___contentful_id = 'osses___systems___projects___contentful_id',
  osses___systems___projects___createdAt = 'osses___systems___projects___createdAt',
  osses___systems___projects___updatedAt = 'osses___systems___projects___updatedAt',
  osses___systems___projects___node_locale = 'osses___systems___projects___node_locale',
  osses___systems___skillmap = 'osses___systems___skillmap',
  osses___systems___skillmap___id = 'osses___systems___skillmap___id',
  osses___systems___skillmap___children = 'osses___systems___skillmap___children',
  osses___systems___skillmap___name = 'osses___systems___skillmap___name',
  osses___systems___skillmap___skills = 'osses___systems___skillmap___skills',
  osses___systems___skillmap___spaceId = 'osses___systems___skillmap___spaceId',
  osses___systems___skillmap___contentful_id = 'osses___systems___skillmap___contentful_id',
  osses___systems___skillmap___createdAt = 'osses___systems___skillmap___createdAt',
  osses___systems___skillmap___updatedAt = 'osses___systems___skillmap___updatedAt',
  osses___systems___skillmap___node_locale = 'osses___systems___skillmap___node_locale',
  osses___languages = 'osses___languages',
  osses___languages___id = 'osses___languages___id',
  osses___languages___parent___id = 'osses___languages___parent___id',
  osses___languages___parent___children = 'osses___languages___parent___children',
  osses___languages___children = 'osses___languages___children',
  osses___languages___children___id = 'osses___languages___children___id',
  osses___languages___children___children = 'osses___languages___children___children',
  osses___languages___internal___content = 'osses___languages___internal___content',
  osses___languages___internal___contentDigest = 'osses___languages___internal___contentDigest',
  osses___languages___internal___description = 'osses___languages___internal___description',
  osses___languages___internal___fieldOwners = 'osses___languages___internal___fieldOwners',
  osses___languages___internal___ignoreType = 'osses___languages___internal___ignoreType',
  osses___languages___internal___mediaType = 'osses___languages___internal___mediaType',
  osses___languages___internal___owner = 'osses___languages___internal___owner',
  osses___languages___internal___type = 'osses___languages___internal___type',
  osses___languages___name = 'osses___languages___name',
  osses___languages___level = 'osses___languages___level',
  osses___languages___osses = 'osses___languages___osses',
  osses___languages___osses___id = 'osses___languages___osses___id',
  osses___languages___osses___children = 'osses___languages___osses___children',
  osses___languages___osses___name = 'osses___languages___osses___name',
  osses___languages___osses___slug = 'osses___languages___osses___slug',
  osses___languages___osses___startDate = 'osses___languages___osses___startDate',
  osses___languages___osses___during = 'osses___languages___osses___during',
  osses___languages___osses___comment = 'osses___languages___osses___comment',
  osses___languages___osses___siteUrl = 'osses___languages___osses___siteUrl',
  osses___languages___osses___sourceUrl = 'osses___languages___osses___sourceUrl',
  osses___languages___osses___roles = 'osses___languages___osses___roles',
  osses___languages___osses___assigns = 'osses___languages___osses___assigns',
  osses___languages___osses___systems = 'osses___languages___osses___systems',
  osses___languages___osses___languages = 'osses___languages___osses___languages',
  osses___languages___osses___tools = 'osses___languages___osses___tools',
  osses___languages___osses___spaceId = 'osses___languages___osses___spaceId',
  osses___languages___osses___contentful_id = 'osses___languages___osses___contentful_id',
  osses___languages___osses___createdAt = 'osses___languages___osses___createdAt',
  osses___languages___osses___updatedAt = 'osses___languages___osses___updatedAt',
  osses___languages___osses___node_locale = 'osses___languages___osses___node_locale',
  osses___languages___spaceId = 'osses___languages___spaceId',
  osses___languages___contentful_id = 'osses___languages___contentful_id',
  osses___languages___createdAt = 'osses___languages___createdAt',
  osses___languages___updatedAt = 'osses___languages___updatedAt',
  osses___languages___sys___type = 'osses___languages___sys___type',
  osses___languages___sys___revision = 'osses___languages___sys___revision',
  osses___languages___node_locale = 'osses___languages___node_locale',
  osses___languages___projects = 'osses___languages___projects',
  osses___languages___projects___id = 'osses___languages___projects___id',
  osses___languages___projects___children = 'osses___languages___projects___children',
  osses___languages___projects___name = 'osses___languages___projects___name',
  osses___languages___projects___startDate = 'osses___languages___projects___startDate',
  osses___languages___projects___during = 'osses___languages___projects___during',
  osses___languages___projects___comment = 'osses___languages___projects___comment',
  osses___languages___projects___roles = 'osses___languages___projects___roles',
  osses___languages___projects___assigns = 'osses___languages___projects___assigns',
  osses___languages___projects___systems = 'osses___languages___projects___systems',
  osses___languages___projects___languages = 'osses___languages___projects___languages',
  osses___languages___projects___tools = 'osses___languages___projects___tools',
  osses___languages___projects___spaceId = 'osses___languages___projects___spaceId',
  osses___languages___projects___contentful_id = 'osses___languages___projects___contentful_id',
  osses___languages___projects___createdAt = 'osses___languages___projects___createdAt',
  osses___languages___projects___updatedAt = 'osses___languages___projects___updatedAt',
  osses___languages___projects___node_locale = 'osses___languages___projects___node_locale',
  osses___languages___skillmap = 'osses___languages___skillmap',
  osses___languages___skillmap___id = 'osses___languages___skillmap___id',
  osses___languages___skillmap___children = 'osses___languages___skillmap___children',
  osses___languages___skillmap___name = 'osses___languages___skillmap___name',
  osses___languages___skillmap___skills = 'osses___languages___skillmap___skills',
  osses___languages___skillmap___spaceId = 'osses___languages___skillmap___spaceId',
  osses___languages___skillmap___contentful_id = 'osses___languages___skillmap___contentful_id',
  osses___languages___skillmap___createdAt = 'osses___languages___skillmap___createdAt',
  osses___languages___skillmap___updatedAt = 'osses___languages___skillmap___updatedAt',
  osses___languages___skillmap___node_locale = 'osses___languages___skillmap___node_locale',
  osses___tools = 'osses___tools',
  osses___tools___id = 'osses___tools___id',
  osses___tools___parent___id = 'osses___tools___parent___id',
  osses___tools___parent___children = 'osses___tools___parent___children',
  osses___tools___children = 'osses___tools___children',
  osses___tools___children___id = 'osses___tools___children___id',
  osses___tools___children___children = 'osses___tools___children___children',
  osses___tools___internal___content = 'osses___tools___internal___content',
  osses___tools___internal___contentDigest = 'osses___tools___internal___contentDigest',
  osses___tools___internal___description = 'osses___tools___internal___description',
  osses___tools___internal___fieldOwners = 'osses___tools___internal___fieldOwners',
  osses___tools___internal___ignoreType = 'osses___tools___internal___ignoreType',
  osses___tools___internal___mediaType = 'osses___tools___internal___mediaType',
  osses___tools___internal___owner = 'osses___tools___internal___owner',
  osses___tools___internal___type = 'osses___tools___internal___type',
  osses___tools___name = 'osses___tools___name',
  osses___tools___level = 'osses___tools___level',
  osses___tools___osses = 'osses___tools___osses',
  osses___tools___osses___id = 'osses___tools___osses___id',
  osses___tools___osses___children = 'osses___tools___osses___children',
  osses___tools___osses___name = 'osses___tools___osses___name',
  osses___tools___osses___slug = 'osses___tools___osses___slug',
  osses___tools___osses___startDate = 'osses___tools___osses___startDate',
  osses___tools___osses___during = 'osses___tools___osses___during',
  osses___tools___osses___comment = 'osses___tools___osses___comment',
  osses___tools___osses___siteUrl = 'osses___tools___osses___siteUrl',
  osses___tools___osses___sourceUrl = 'osses___tools___osses___sourceUrl',
  osses___tools___osses___roles = 'osses___tools___osses___roles',
  osses___tools___osses___assigns = 'osses___tools___osses___assigns',
  osses___tools___osses___systems = 'osses___tools___osses___systems',
  osses___tools___osses___languages = 'osses___tools___osses___languages',
  osses___tools___osses___tools = 'osses___tools___osses___tools',
  osses___tools___osses___spaceId = 'osses___tools___osses___spaceId',
  osses___tools___osses___contentful_id = 'osses___tools___osses___contentful_id',
  osses___tools___osses___createdAt = 'osses___tools___osses___createdAt',
  osses___tools___osses___updatedAt = 'osses___tools___osses___updatedAt',
  osses___tools___osses___node_locale = 'osses___tools___osses___node_locale',
  osses___tools___spaceId = 'osses___tools___spaceId',
  osses___tools___contentful_id = 'osses___tools___contentful_id',
  osses___tools___createdAt = 'osses___tools___createdAt',
  osses___tools___updatedAt = 'osses___tools___updatedAt',
  osses___tools___sys___type = 'osses___tools___sys___type',
  osses___tools___sys___revision = 'osses___tools___sys___revision',
  osses___tools___node_locale = 'osses___tools___node_locale',
  osses___tools___projects = 'osses___tools___projects',
  osses___tools___projects___id = 'osses___tools___projects___id',
  osses___tools___projects___children = 'osses___tools___projects___children',
  osses___tools___projects___name = 'osses___tools___projects___name',
  osses___tools___projects___startDate = 'osses___tools___projects___startDate',
  osses___tools___projects___during = 'osses___tools___projects___during',
  osses___tools___projects___comment = 'osses___tools___projects___comment',
  osses___tools___projects___roles = 'osses___tools___projects___roles',
  osses___tools___projects___assigns = 'osses___tools___projects___assigns',
  osses___tools___projects___systems = 'osses___tools___projects___systems',
  osses___tools___projects___languages = 'osses___tools___projects___languages',
  osses___tools___projects___tools = 'osses___tools___projects___tools',
  osses___tools___projects___spaceId = 'osses___tools___projects___spaceId',
  osses___tools___projects___contentful_id = 'osses___tools___projects___contentful_id',
  osses___tools___projects___createdAt = 'osses___tools___projects___createdAt',
  osses___tools___projects___updatedAt = 'osses___tools___projects___updatedAt',
  osses___tools___projects___node_locale = 'osses___tools___projects___node_locale',
  osses___tools___skillmap = 'osses___tools___skillmap',
  osses___tools___skillmap___id = 'osses___tools___skillmap___id',
  osses___tools___skillmap___children = 'osses___tools___skillmap___children',
  osses___tools___skillmap___name = 'osses___tools___skillmap___name',
  osses___tools___skillmap___skills = 'osses___tools___skillmap___skills',
  osses___tools___skillmap___spaceId = 'osses___tools___skillmap___spaceId',
  osses___tools___skillmap___contentful_id = 'osses___tools___skillmap___contentful_id',
  osses___tools___skillmap___createdAt = 'osses___tools___skillmap___createdAt',
  osses___tools___skillmap___updatedAt = 'osses___tools___skillmap___updatedAt',
  osses___tools___skillmap___node_locale = 'osses___tools___skillmap___node_locale',
  osses___spaceId = 'osses___spaceId',
  osses___contentful_id = 'osses___contentful_id',
  osses___createdAt = 'osses___createdAt',
  osses___updatedAt = 'osses___updatedAt',
  osses___sys___type = 'osses___sys___type',
  osses___sys___revision = 'osses___sys___revision',
  osses___node_locale = 'osses___node_locale',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  node_locale = 'node_locale'
}

export type ContentfulRoleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<ContentfulProjectsFilterListInput>;
  osses?: Maybe<ContentfulOsSesFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulRoleSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
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

export type ContentfulSkill = Node & {
  __typename?: 'ContentfulSkill';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  osses?: Maybe<Array<Maybe<ContentfulOsSes>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSkillSys>;
  node_locale?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<ContentfulProjects>>>;
  skillmap?: Maybe<Array<Maybe<ContentfulSkillMap>>>;
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
  level = 'level',
  osses = 'osses',
  osses___id = 'osses___id',
  osses___parent___id = 'osses___parent___id',
  osses___parent___parent___id = 'osses___parent___parent___id',
  osses___parent___parent___children = 'osses___parent___parent___children',
  osses___parent___children = 'osses___parent___children',
  osses___parent___children___id = 'osses___parent___children___id',
  osses___parent___children___children = 'osses___parent___children___children',
  osses___parent___internal___content = 'osses___parent___internal___content',
  osses___parent___internal___contentDigest = 'osses___parent___internal___contentDigest',
  osses___parent___internal___description = 'osses___parent___internal___description',
  osses___parent___internal___fieldOwners = 'osses___parent___internal___fieldOwners',
  osses___parent___internal___ignoreType = 'osses___parent___internal___ignoreType',
  osses___parent___internal___mediaType = 'osses___parent___internal___mediaType',
  osses___parent___internal___owner = 'osses___parent___internal___owner',
  osses___parent___internal___type = 'osses___parent___internal___type',
  osses___children = 'osses___children',
  osses___children___id = 'osses___children___id',
  osses___children___parent___id = 'osses___children___parent___id',
  osses___children___parent___children = 'osses___children___parent___children',
  osses___children___children = 'osses___children___children',
  osses___children___children___id = 'osses___children___children___id',
  osses___children___children___children = 'osses___children___children___children',
  osses___children___internal___content = 'osses___children___internal___content',
  osses___children___internal___contentDigest = 'osses___children___internal___contentDigest',
  osses___children___internal___description = 'osses___children___internal___description',
  osses___children___internal___fieldOwners = 'osses___children___internal___fieldOwners',
  osses___children___internal___ignoreType = 'osses___children___internal___ignoreType',
  osses___children___internal___mediaType = 'osses___children___internal___mediaType',
  osses___children___internal___owner = 'osses___children___internal___owner',
  osses___children___internal___type = 'osses___children___internal___type',
  osses___internal___content = 'osses___internal___content',
  osses___internal___contentDigest = 'osses___internal___contentDigest',
  osses___internal___description = 'osses___internal___description',
  osses___internal___fieldOwners = 'osses___internal___fieldOwners',
  osses___internal___ignoreType = 'osses___internal___ignoreType',
  osses___internal___mediaType = 'osses___internal___mediaType',
  osses___internal___owner = 'osses___internal___owner',
  osses___internal___type = 'osses___internal___type',
  osses___name = 'osses___name',
  osses___slug = 'osses___slug',
  osses___startDate = 'osses___startDate',
  osses___during = 'osses___during',
  osses___comment = 'osses___comment',
  osses___siteUrl = 'osses___siteUrl',
  osses___sourceUrl = 'osses___sourceUrl',
  osses___mainImage___id = 'osses___mainImage___id',
  osses___mainImage___parent___id = 'osses___mainImage___parent___id',
  osses___mainImage___parent___children = 'osses___mainImage___parent___children',
  osses___mainImage___children = 'osses___mainImage___children',
  osses___mainImage___children___id = 'osses___mainImage___children___id',
  osses___mainImage___children___children = 'osses___mainImage___children___children',
  osses___mainImage___internal___content = 'osses___mainImage___internal___content',
  osses___mainImage___internal___contentDigest = 'osses___mainImage___internal___contentDigest',
  osses___mainImage___internal___description = 'osses___mainImage___internal___description',
  osses___mainImage___internal___fieldOwners = 'osses___mainImage___internal___fieldOwners',
  osses___mainImage___internal___ignoreType = 'osses___mainImage___internal___ignoreType',
  osses___mainImage___internal___mediaType = 'osses___mainImage___internal___mediaType',
  osses___mainImage___internal___owner = 'osses___mainImage___internal___owner',
  osses___mainImage___internal___type = 'osses___mainImage___internal___type',
  osses___mainImage___contentful_id = 'osses___mainImage___contentful_id',
  osses___mainImage___spaceId = 'osses___mainImage___spaceId',
  osses___mainImage___createdAt = 'osses___mainImage___createdAt',
  osses___mainImage___updatedAt = 'osses___mainImage___updatedAt',
  osses___mainImage___file___url = 'osses___mainImage___file___url',
  osses___mainImage___file___fileName = 'osses___mainImage___file___fileName',
  osses___mainImage___file___contentType = 'osses___mainImage___file___contentType',
  osses___mainImage___title = 'osses___mainImage___title',
  osses___mainImage___description = 'osses___mainImage___description',
  osses___mainImage___node_locale = 'osses___mainImage___node_locale',
  osses___mainImage___sys___type = 'osses___mainImage___sys___type',
  osses___mainImage___sys___revision = 'osses___mainImage___sys___revision',
  osses___mainImage___localFile___sourceInstanceName = 'osses___mainImage___localFile___sourceInstanceName',
  osses___mainImage___localFile___absolutePath = 'osses___mainImage___localFile___absolutePath',
  osses___mainImage___localFile___relativePath = 'osses___mainImage___localFile___relativePath',
  osses___mainImage___localFile___extension = 'osses___mainImage___localFile___extension',
  osses___mainImage___localFile___size = 'osses___mainImage___localFile___size',
  osses___mainImage___localFile___prettySize = 'osses___mainImage___localFile___prettySize',
  osses___mainImage___localFile___modifiedTime = 'osses___mainImage___localFile___modifiedTime',
  osses___mainImage___localFile___accessTime = 'osses___mainImage___localFile___accessTime',
  osses___mainImage___localFile___changeTime = 'osses___mainImage___localFile___changeTime',
  osses___mainImage___localFile___birthTime = 'osses___mainImage___localFile___birthTime',
  osses___mainImage___localFile___root = 'osses___mainImage___localFile___root',
  osses___mainImage___localFile___dir = 'osses___mainImage___localFile___dir',
  osses___mainImage___localFile___base = 'osses___mainImage___localFile___base',
  osses___mainImage___localFile___ext = 'osses___mainImage___localFile___ext',
  osses___mainImage___localFile___name = 'osses___mainImage___localFile___name',
  osses___mainImage___localFile___relativeDirectory = 'osses___mainImage___localFile___relativeDirectory',
  osses___mainImage___localFile___dev = 'osses___mainImage___localFile___dev',
  osses___mainImage___localFile___mode = 'osses___mainImage___localFile___mode',
  osses___mainImage___localFile___nlink = 'osses___mainImage___localFile___nlink',
  osses___mainImage___localFile___uid = 'osses___mainImage___localFile___uid',
  osses___mainImage___localFile___gid = 'osses___mainImage___localFile___gid',
  osses___mainImage___localFile___rdev = 'osses___mainImage___localFile___rdev',
  osses___mainImage___localFile___ino = 'osses___mainImage___localFile___ino',
  osses___mainImage___localFile___atimeMs = 'osses___mainImage___localFile___atimeMs',
  osses___mainImage___localFile___mtimeMs = 'osses___mainImage___localFile___mtimeMs',
  osses___mainImage___localFile___ctimeMs = 'osses___mainImage___localFile___ctimeMs',
  osses___mainImage___localFile___atime = 'osses___mainImage___localFile___atime',
  osses___mainImage___localFile___mtime = 'osses___mainImage___localFile___mtime',
  osses___mainImage___localFile___ctime = 'osses___mainImage___localFile___ctime',
  osses___mainImage___localFile___birthtime = 'osses___mainImage___localFile___birthtime',
  osses___mainImage___localFile___birthtimeMs = 'osses___mainImage___localFile___birthtimeMs',
  osses___mainImage___localFile___blksize = 'osses___mainImage___localFile___blksize',
  osses___mainImage___localFile___blocks = 'osses___mainImage___localFile___blocks',
  osses___mainImage___localFile___url = 'osses___mainImage___localFile___url',
  osses___mainImage___localFile___id = 'osses___mainImage___localFile___id',
  osses___mainImage___localFile___children = 'osses___mainImage___localFile___children',
  osses___mainImage___fixed___base64 = 'osses___mainImage___fixed___base64',
  osses___mainImage___fixed___tracedSVG = 'osses___mainImage___fixed___tracedSVG',
  osses___mainImage___fixed___aspectRatio = 'osses___mainImage___fixed___aspectRatio',
  osses___mainImage___fixed___width = 'osses___mainImage___fixed___width',
  osses___mainImage___fixed___height = 'osses___mainImage___fixed___height',
  osses___mainImage___fixed___src = 'osses___mainImage___fixed___src',
  osses___mainImage___fixed___srcSet = 'osses___mainImage___fixed___srcSet',
  osses___mainImage___fixed___srcWebp = 'osses___mainImage___fixed___srcWebp',
  osses___mainImage___fixed___srcSetWebp = 'osses___mainImage___fixed___srcSetWebp',
  osses___mainImage___resolutions___base64 = 'osses___mainImage___resolutions___base64',
  osses___mainImage___resolutions___tracedSVG = 'osses___mainImage___resolutions___tracedSVG',
  osses___mainImage___resolutions___aspectRatio = 'osses___mainImage___resolutions___aspectRatio',
  osses___mainImage___resolutions___width = 'osses___mainImage___resolutions___width',
  osses___mainImage___resolutions___height = 'osses___mainImage___resolutions___height',
  osses___mainImage___resolutions___src = 'osses___mainImage___resolutions___src',
  osses___mainImage___resolutions___srcSet = 'osses___mainImage___resolutions___srcSet',
  osses___mainImage___resolutions___srcWebp = 'osses___mainImage___resolutions___srcWebp',
  osses___mainImage___resolutions___srcSetWebp = 'osses___mainImage___resolutions___srcSetWebp',
  osses___mainImage___fluid___base64 = 'osses___mainImage___fluid___base64',
  osses___mainImage___fluid___tracedSVG = 'osses___mainImage___fluid___tracedSVG',
  osses___mainImage___fluid___aspectRatio = 'osses___mainImage___fluid___aspectRatio',
  osses___mainImage___fluid___src = 'osses___mainImage___fluid___src',
  osses___mainImage___fluid___srcSet = 'osses___mainImage___fluid___srcSet',
  osses___mainImage___fluid___srcWebp = 'osses___mainImage___fluid___srcWebp',
  osses___mainImage___fluid___srcSetWebp = 'osses___mainImage___fluid___srcSetWebp',
  osses___mainImage___fluid___sizes = 'osses___mainImage___fluid___sizes',
  osses___mainImage___sizes___base64 = 'osses___mainImage___sizes___base64',
  osses___mainImage___sizes___tracedSVG = 'osses___mainImage___sizes___tracedSVG',
  osses___mainImage___sizes___aspectRatio = 'osses___mainImage___sizes___aspectRatio',
  osses___mainImage___sizes___src = 'osses___mainImage___sizes___src',
  osses___mainImage___sizes___srcSet = 'osses___mainImage___sizes___srcSet',
  osses___mainImage___sizes___srcWebp = 'osses___mainImage___sizes___srcWebp',
  osses___mainImage___sizes___srcSetWebp = 'osses___mainImage___sizes___srcSetWebp',
  osses___mainImage___sizes___sizes = 'osses___mainImage___sizes___sizes',
  osses___mainImage___resize___base64 = 'osses___mainImage___resize___base64',
  osses___mainImage___resize___tracedSVG = 'osses___mainImage___resize___tracedSVG',
  osses___mainImage___resize___src = 'osses___mainImage___resize___src',
  osses___mainImage___resize___width = 'osses___mainImage___resize___width',
  osses___mainImage___resize___height = 'osses___mainImage___resize___height',
  osses___mainImage___resize___aspectRatio = 'osses___mainImage___resize___aspectRatio',
  osses___roles = 'osses___roles',
  osses___roles___id = 'osses___roles___id',
  osses___roles___parent___id = 'osses___roles___parent___id',
  osses___roles___parent___children = 'osses___roles___parent___children',
  osses___roles___children = 'osses___roles___children',
  osses___roles___children___id = 'osses___roles___children___id',
  osses___roles___children___children = 'osses___roles___children___children',
  osses___roles___internal___content = 'osses___roles___internal___content',
  osses___roles___internal___contentDigest = 'osses___roles___internal___contentDigest',
  osses___roles___internal___description = 'osses___roles___internal___description',
  osses___roles___internal___fieldOwners = 'osses___roles___internal___fieldOwners',
  osses___roles___internal___ignoreType = 'osses___roles___internal___ignoreType',
  osses___roles___internal___mediaType = 'osses___roles___internal___mediaType',
  osses___roles___internal___owner = 'osses___roles___internal___owner',
  osses___roles___internal___type = 'osses___roles___internal___type',
  osses___roles___name = 'osses___roles___name',
  osses___roles___projects = 'osses___roles___projects',
  osses___roles___projects___id = 'osses___roles___projects___id',
  osses___roles___projects___children = 'osses___roles___projects___children',
  osses___roles___projects___name = 'osses___roles___projects___name',
  osses___roles___projects___startDate = 'osses___roles___projects___startDate',
  osses___roles___projects___during = 'osses___roles___projects___during',
  osses___roles___projects___comment = 'osses___roles___projects___comment',
  osses___roles___projects___roles = 'osses___roles___projects___roles',
  osses___roles___projects___assigns = 'osses___roles___projects___assigns',
  osses___roles___projects___systems = 'osses___roles___projects___systems',
  osses___roles___projects___languages = 'osses___roles___projects___languages',
  osses___roles___projects___tools = 'osses___roles___projects___tools',
  osses___roles___projects___spaceId = 'osses___roles___projects___spaceId',
  osses___roles___projects___contentful_id = 'osses___roles___projects___contentful_id',
  osses___roles___projects___createdAt = 'osses___roles___projects___createdAt',
  osses___roles___projects___updatedAt = 'osses___roles___projects___updatedAt',
  osses___roles___projects___node_locale = 'osses___roles___projects___node_locale',
  osses___roles___osses = 'osses___roles___osses',
  osses___roles___osses___id = 'osses___roles___osses___id',
  osses___roles___osses___children = 'osses___roles___osses___children',
  osses___roles___osses___name = 'osses___roles___osses___name',
  osses___roles___osses___slug = 'osses___roles___osses___slug',
  osses___roles___osses___startDate = 'osses___roles___osses___startDate',
  osses___roles___osses___during = 'osses___roles___osses___during',
  osses___roles___osses___comment = 'osses___roles___osses___comment',
  osses___roles___osses___siteUrl = 'osses___roles___osses___siteUrl',
  osses___roles___osses___sourceUrl = 'osses___roles___osses___sourceUrl',
  osses___roles___osses___roles = 'osses___roles___osses___roles',
  osses___roles___osses___assigns = 'osses___roles___osses___assigns',
  osses___roles___osses___systems = 'osses___roles___osses___systems',
  osses___roles___osses___languages = 'osses___roles___osses___languages',
  osses___roles___osses___tools = 'osses___roles___osses___tools',
  osses___roles___osses___spaceId = 'osses___roles___osses___spaceId',
  osses___roles___osses___contentful_id = 'osses___roles___osses___contentful_id',
  osses___roles___osses___createdAt = 'osses___roles___osses___createdAt',
  osses___roles___osses___updatedAt = 'osses___roles___osses___updatedAt',
  osses___roles___osses___node_locale = 'osses___roles___osses___node_locale',
  osses___roles___spaceId = 'osses___roles___spaceId',
  osses___roles___contentful_id = 'osses___roles___contentful_id',
  osses___roles___createdAt = 'osses___roles___createdAt',
  osses___roles___updatedAt = 'osses___roles___updatedAt',
  osses___roles___sys___type = 'osses___roles___sys___type',
  osses___roles___sys___revision = 'osses___roles___sys___revision',
  osses___roles___node_locale = 'osses___roles___node_locale',
  osses___assigns = 'osses___assigns',
  osses___assigns___id = 'osses___assigns___id',
  osses___assigns___parent___id = 'osses___assigns___parent___id',
  osses___assigns___parent___children = 'osses___assigns___parent___children',
  osses___assigns___children = 'osses___assigns___children',
  osses___assigns___children___id = 'osses___assigns___children___id',
  osses___assigns___children___children = 'osses___assigns___children___children',
  osses___assigns___internal___content = 'osses___assigns___internal___content',
  osses___assigns___internal___contentDigest = 'osses___assigns___internal___contentDigest',
  osses___assigns___internal___description = 'osses___assigns___internal___description',
  osses___assigns___internal___fieldOwners = 'osses___assigns___internal___fieldOwners',
  osses___assigns___internal___ignoreType = 'osses___assigns___internal___ignoreType',
  osses___assigns___internal___mediaType = 'osses___assigns___internal___mediaType',
  osses___assigns___internal___owner = 'osses___assigns___internal___owner',
  osses___assigns___internal___type = 'osses___assigns___internal___type',
  osses___assigns___name = 'osses___assigns___name',
  osses___assigns___projects = 'osses___assigns___projects',
  osses___assigns___projects___id = 'osses___assigns___projects___id',
  osses___assigns___projects___children = 'osses___assigns___projects___children',
  osses___assigns___projects___name = 'osses___assigns___projects___name',
  osses___assigns___projects___startDate = 'osses___assigns___projects___startDate',
  osses___assigns___projects___during = 'osses___assigns___projects___during',
  osses___assigns___projects___comment = 'osses___assigns___projects___comment',
  osses___assigns___projects___roles = 'osses___assigns___projects___roles',
  osses___assigns___projects___assigns = 'osses___assigns___projects___assigns',
  osses___assigns___projects___systems = 'osses___assigns___projects___systems',
  osses___assigns___projects___languages = 'osses___assigns___projects___languages',
  osses___assigns___projects___tools = 'osses___assigns___projects___tools',
  osses___assigns___projects___spaceId = 'osses___assigns___projects___spaceId',
  osses___assigns___projects___contentful_id = 'osses___assigns___projects___contentful_id',
  osses___assigns___projects___createdAt = 'osses___assigns___projects___createdAt',
  osses___assigns___projects___updatedAt = 'osses___assigns___projects___updatedAt',
  osses___assigns___projects___node_locale = 'osses___assigns___projects___node_locale',
  osses___assigns___osses = 'osses___assigns___osses',
  osses___assigns___osses___id = 'osses___assigns___osses___id',
  osses___assigns___osses___children = 'osses___assigns___osses___children',
  osses___assigns___osses___name = 'osses___assigns___osses___name',
  osses___assigns___osses___slug = 'osses___assigns___osses___slug',
  osses___assigns___osses___startDate = 'osses___assigns___osses___startDate',
  osses___assigns___osses___during = 'osses___assigns___osses___during',
  osses___assigns___osses___comment = 'osses___assigns___osses___comment',
  osses___assigns___osses___siteUrl = 'osses___assigns___osses___siteUrl',
  osses___assigns___osses___sourceUrl = 'osses___assigns___osses___sourceUrl',
  osses___assigns___osses___roles = 'osses___assigns___osses___roles',
  osses___assigns___osses___assigns = 'osses___assigns___osses___assigns',
  osses___assigns___osses___systems = 'osses___assigns___osses___systems',
  osses___assigns___osses___languages = 'osses___assigns___osses___languages',
  osses___assigns___osses___tools = 'osses___assigns___osses___tools',
  osses___assigns___osses___spaceId = 'osses___assigns___osses___spaceId',
  osses___assigns___osses___contentful_id = 'osses___assigns___osses___contentful_id',
  osses___assigns___osses___createdAt = 'osses___assigns___osses___createdAt',
  osses___assigns___osses___updatedAt = 'osses___assigns___osses___updatedAt',
  osses___assigns___osses___node_locale = 'osses___assigns___osses___node_locale',
  osses___assigns___spaceId = 'osses___assigns___spaceId',
  osses___assigns___contentful_id = 'osses___assigns___contentful_id',
  osses___assigns___createdAt = 'osses___assigns___createdAt',
  osses___assigns___updatedAt = 'osses___assigns___updatedAt',
  osses___assigns___sys___type = 'osses___assigns___sys___type',
  osses___assigns___sys___revision = 'osses___assigns___sys___revision',
  osses___assigns___node_locale = 'osses___assigns___node_locale',
  osses___systems = 'osses___systems',
  osses___systems___id = 'osses___systems___id',
  osses___systems___parent___id = 'osses___systems___parent___id',
  osses___systems___parent___children = 'osses___systems___parent___children',
  osses___systems___children = 'osses___systems___children',
  osses___systems___children___id = 'osses___systems___children___id',
  osses___systems___children___children = 'osses___systems___children___children',
  osses___systems___internal___content = 'osses___systems___internal___content',
  osses___systems___internal___contentDigest = 'osses___systems___internal___contentDigest',
  osses___systems___internal___description = 'osses___systems___internal___description',
  osses___systems___internal___fieldOwners = 'osses___systems___internal___fieldOwners',
  osses___systems___internal___ignoreType = 'osses___systems___internal___ignoreType',
  osses___systems___internal___mediaType = 'osses___systems___internal___mediaType',
  osses___systems___internal___owner = 'osses___systems___internal___owner',
  osses___systems___internal___type = 'osses___systems___internal___type',
  osses___systems___name = 'osses___systems___name',
  osses___systems___level = 'osses___systems___level',
  osses___systems___osses = 'osses___systems___osses',
  osses___systems___osses___id = 'osses___systems___osses___id',
  osses___systems___osses___children = 'osses___systems___osses___children',
  osses___systems___osses___name = 'osses___systems___osses___name',
  osses___systems___osses___slug = 'osses___systems___osses___slug',
  osses___systems___osses___startDate = 'osses___systems___osses___startDate',
  osses___systems___osses___during = 'osses___systems___osses___during',
  osses___systems___osses___comment = 'osses___systems___osses___comment',
  osses___systems___osses___siteUrl = 'osses___systems___osses___siteUrl',
  osses___systems___osses___sourceUrl = 'osses___systems___osses___sourceUrl',
  osses___systems___osses___roles = 'osses___systems___osses___roles',
  osses___systems___osses___assigns = 'osses___systems___osses___assigns',
  osses___systems___osses___systems = 'osses___systems___osses___systems',
  osses___systems___osses___languages = 'osses___systems___osses___languages',
  osses___systems___osses___tools = 'osses___systems___osses___tools',
  osses___systems___osses___spaceId = 'osses___systems___osses___spaceId',
  osses___systems___osses___contentful_id = 'osses___systems___osses___contentful_id',
  osses___systems___osses___createdAt = 'osses___systems___osses___createdAt',
  osses___systems___osses___updatedAt = 'osses___systems___osses___updatedAt',
  osses___systems___osses___node_locale = 'osses___systems___osses___node_locale',
  osses___systems___spaceId = 'osses___systems___spaceId',
  osses___systems___contentful_id = 'osses___systems___contentful_id',
  osses___systems___createdAt = 'osses___systems___createdAt',
  osses___systems___updatedAt = 'osses___systems___updatedAt',
  osses___systems___sys___type = 'osses___systems___sys___type',
  osses___systems___sys___revision = 'osses___systems___sys___revision',
  osses___systems___node_locale = 'osses___systems___node_locale',
  osses___systems___projects = 'osses___systems___projects',
  osses___systems___projects___id = 'osses___systems___projects___id',
  osses___systems___projects___children = 'osses___systems___projects___children',
  osses___systems___projects___name = 'osses___systems___projects___name',
  osses___systems___projects___startDate = 'osses___systems___projects___startDate',
  osses___systems___projects___during = 'osses___systems___projects___during',
  osses___systems___projects___comment = 'osses___systems___projects___comment',
  osses___systems___projects___roles = 'osses___systems___projects___roles',
  osses___systems___projects___assigns = 'osses___systems___projects___assigns',
  osses___systems___projects___systems = 'osses___systems___projects___systems',
  osses___systems___projects___languages = 'osses___systems___projects___languages',
  osses___systems___projects___tools = 'osses___systems___projects___tools',
  osses___systems___projects___spaceId = 'osses___systems___projects___spaceId',
  osses___systems___projects___contentful_id = 'osses___systems___projects___contentful_id',
  osses___systems___projects___createdAt = 'osses___systems___projects___createdAt',
  osses___systems___projects___updatedAt = 'osses___systems___projects___updatedAt',
  osses___systems___projects___node_locale = 'osses___systems___projects___node_locale',
  osses___systems___skillmap = 'osses___systems___skillmap',
  osses___systems___skillmap___id = 'osses___systems___skillmap___id',
  osses___systems___skillmap___children = 'osses___systems___skillmap___children',
  osses___systems___skillmap___name = 'osses___systems___skillmap___name',
  osses___systems___skillmap___skills = 'osses___systems___skillmap___skills',
  osses___systems___skillmap___spaceId = 'osses___systems___skillmap___spaceId',
  osses___systems___skillmap___contentful_id = 'osses___systems___skillmap___contentful_id',
  osses___systems___skillmap___createdAt = 'osses___systems___skillmap___createdAt',
  osses___systems___skillmap___updatedAt = 'osses___systems___skillmap___updatedAt',
  osses___systems___skillmap___node_locale = 'osses___systems___skillmap___node_locale',
  osses___languages = 'osses___languages',
  osses___languages___id = 'osses___languages___id',
  osses___languages___parent___id = 'osses___languages___parent___id',
  osses___languages___parent___children = 'osses___languages___parent___children',
  osses___languages___children = 'osses___languages___children',
  osses___languages___children___id = 'osses___languages___children___id',
  osses___languages___children___children = 'osses___languages___children___children',
  osses___languages___internal___content = 'osses___languages___internal___content',
  osses___languages___internal___contentDigest = 'osses___languages___internal___contentDigest',
  osses___languages___internal___description = 'osses___languages___internal___description',
  osses___languages___internal___fieldOwners = 'osses___languages___internal___fieldOwners',
  osses___languages___internal___ignoreType = 'osses___languages___internal___ignoreType',
  osses___languages___internal___mediaType = 'osses___languages___internal___mediaType',
  osses___languages___internal___owner = 'osses___languages___internal___owner',
  osses___languages___internal___type = 'osses___languages___internal___type',
  osses___languages___name = 'osses___languages___name',
  osses___languages___level = 'osses___languages___level',
  osses___languages___osses = 'osses___languages___osses',
  osses___languages___osses___id = 'osses___languages___osses___id',
  osses___languages___osses___children = 'osses___languages___osses___children',
  osses___languages___osses___name = 'osses___languages___osses___name',
  osses___languages___osses___slug = 'osses___languages___osses___slug',
  osses___languages___osses___startDate = 'osses___languages___osses___startDate',
  osses___languages___osses___during = 'osses___languages___osses___during',
  osses___languages___osses___comment = 'osses___languages___osses___comment',
  osses___languages___osses___siteUrl = 'osses___languages___osses___siteUrl',
  osses___languages___osses___sourceUrl = 'osses___languages___osses___sourceUrl',
  osses___languages___osses___roles = 'osses___languages___osses___roles',
  osses___languages___osses___assigns = 'osses___languages___osses___assigns',
  osses___languages___osses___systems = 'osses___languages___osses___systems',
  osses___languages___osses___languages = 'osses___languages___osses___languages',
  osses___languages___osses___tools = 'osses___languages___osses___tools',
  osses___languages___osses___spaceId = 'osses___languages___osses___spaceId',
  osses___languages___osses___contentful_id = 'osses___languages___osses___contentful_id',
  osses___languages___osses___createdAt = 'osses___languages___osses___createdAt',
  osses___languages___osses___updatedAt = 'osses___languages___osses___updatedAt',
  osses___languages___osses___node_locale = 'osses___languages___osses___node_locale',
  osses___languages___spaceId = 'osses___languages___spaceId',
  osses___languages___contentful_id = 'osses___languages___contentful_id',
  osses___languages___createdAt = 'osses___languages___createdAt',
  osses___languages___updatedAt = 'osses___languages___updatedAt',
  osses___languages___sys___type = 'osses___languages___sys___type',
  osses___languages___sys___revision = 'osses___languages___sys___revision',
  osses___languages___node_locale = 'osses___languages___node_locale',
  osses___languages___projects = 'osses___languages___projects',
  osses___languages___projects___id = 'osses___languages___projects___id',
  osses___languages___projects___children = 'osses___languages___projects___children',
  osses___languages___projects___name = 'osses___languages___projects___name',
  osses___languages___projects___startDate = 'osses___languages___projects___startDate',
  osses___languages___projects___during = 'osses___languages___projects___during',
  osses___languages___projects___comment = 'osses___languages___projects___comment',
  osses___languages___projects___roles = 'osses___languages___projects___roles',
  osses___languages___projects___assigns = 'osses___languages___projects___assigns',
  osses___languages___projects___systems = 'osses___languages___projects___systems',
  osses___languages___projects___languages = 'osses___languages___projects___languages',
  osses___languages___projects___tools = 'osses___languages___projects___tools',
  osses___languages___projects___spaceId = 'osses___languages___projects___spaceId',
  osses___languages___projects___contentful_id = 'osses___languages___projects___contentful_id',
  osses___languages___projects___createdAt = 'osses___languages___projects___createdAt',
  osses___languages___projects___updatedAt = 'osses___languages___projects___updatedAt',
  osses___languages___projects___node_locale = 'osses___languages___projects___node_locale',
  osses___languages___skillmap = 'osses___languages___skillmap',
  osses___languages___skillmap___id = 'osses___languages___skillmap___id',
  osses___languages___skillmap___children = 'osses___languages___skillmap___children',
  osses___languages___skillmap___name = 'osses___languages___skillmap___name',
  osses___languages___skillmap___skills = 'osses___languages___skillmap___skills',
  osses___languages___skillmap___spaceId = 'osses___languages___skillmap___spaceId',
  osses___languages___skillmap___contentful_id = 'osses___languages___skillmap___contentful_id',
  osses___languages___skillmap___createdAt = 'osses___languages___skillmap___createdAt',
  osses___languages___skillmap___updatedAt = 'osses___languages___skillmap___updatedAt',
  osses___languages___skillmap___node_locale = 'osses___languages___skillmap___node_locale',
  osses___tools = 'osses___tools',
  osses___tools___id = 'osses___tools___id',
  osses___tools___parent___id = 'osses___tools___parent___id',
  osses___tools___parent___children = 'osses___tools___parent___children',
  osses___tools___children = 'osses___tools___children',
  osses___tools___children___id = 'osses___tools___children___id',
  osses___tools___children___children = 'osses___tools___children___children',
  osses___tools___internal___content = 'osses___tools___internal___content',
  osses___tools___internal___contentDigest = 'osses___tools___internal___contentDigest',
  osses___tools___internal___description = 'osses___tools___internal___description',
  osses___tools___internal___fieldOwners = 'osses___tools___internal___fieldOwners',
  osses___tools___internal___ignoreType = 'osses___tools___internal___ignoreType',
  osses___tools___internal___mediaType = 'osses___tools___internal___mediaType',
  osses___tools___internal___owner = 'osses___tools___internal___owner',
  osses___tools___internal___type = 'osses___tools___internal___type',
  osses___tools___name = 'osses___tools___name',
  osses___tools___level = 'osses___tools___level',
  osses___tools___osses = 'osses___tools___osses',
  osses___tools___osses___id = 'osses___tools___osses___id',
  osses___tools___osses___children = 'osses___tools___osses___children',
  osses___tools___osses___name = 'osses___tools___osses___name',
  osses___tools___osses___slug = 'osses___tools___osses___slug',
  osses___tools___osses___startDate = 'osses___tools___osses___startDate',
  osses___tools___osses___during = 'osses___tools___osses___during',
  osses___tools___osses___comment = 'osses___tools___osses___comment',
  osses___tools___osses___siteUrl = 'osses___tools___osses___siteUrl',
  osses___tools___osses___sourceUrl = 'osses___tools___osses___sourceUrl',
  osses___tools___osses___roles = 'osses___tools___osses___roles',
  osses___tools___osses___assigns = 'osses___tools___osses___assigns',
  osses___tools___osses___systems = 'osses___tools___osses___systems',
  osses___tools___osses___languages = 'osses___tools___osses___languages',
  osses___tools___osses___tools = 'osses___tools___osses___tools',
  osses___tools___osses___spaceId = 'osses___tools___osses___spaceId',
  osses___tools___osses___contentful_id = 'osses___tools___osses___contentful_id',
  osses___tools___osses___createdAt = 'osses___tools___osses___createdAt',
  osses___tools___osses___updatedAt = 'osses___tools___osses___updatedAt',
  osses___tools___osses___node_locale = 'osses___tools___osses___node_locale',
  osses___tools___spaceId = 'osses___tools___spaceId',
  osses___tools___contentful_id = 'osses___tools___contentful_id',
  osses___tools___createdAt = 'osses___tools___createdAt',
  osses___tools___updatedAt = 'osses___tools___updatedAt',
  osses___tools___sys___type = 'osses___tools___sys___type',
  osses___tools___sys___revision = 'osses___tools___sys___revision',
  osses___tools___node_locale = 'osses___tools___node_locale',
  osses___tools___projects = 'osses___tools___projects',
  osses___tools___projects___id = 'osses___tools___projects___id',
  osses___tools___projects___children = 'osses___tools___projects___children',
  osses___tools___projects___name = 'osses___tools___projects___name',
  osses___tools___projects___startDate = 'osses___tools___projects___startDate',
  osses___tools___projects___during = 'osses___tools___projects___during',
  osses___tools___projects___comment = 'osses___tools___projects___comment',
  osses___tools___projects___roles = 'osses___tools___projects___roles',
  osses___tools___projects___assigns = 'osses___tools___projects___assigns',
  osses___tools___projects___systems = 'osses___tools___projects___systems',
  osses___tools___projects___languages = 'osses___tools___projects___languages',
  osses___tools___projects___tools = 'osses___tools___projects___tools',
  osses___tools___projects___spaceId = 'osses___tools___projects___spaceId',
  osses___tools___projects___contentful_id = 'osses___tools___projects___contentful_id',
  osses___tools___projects___createdAt = 'osses___tools___projects___createdAt',
  osses___tools___projects___updatedAt = 'osses___tools___projects___updatedAt',
  osses___tools___projects___node_locale = 'osses___tools___projects___node_locale',
  osses___tools___skillmap = 'osses___tools___skillmap',
  osses___tools___skillmap___id = 'osses___tools___skillmap___id',
  osses___tools___skillmap___children = 'osses___tools___skillmap___children',
  osses___tools___skillmap___name = 'osses___tools___skillmap___name',
  osses___tools___skillmap___skills = 'osses___tools___skillmap___skills',
  osses___tools___skillmap___spaceId = 'osses___tools___skillmap___spaceId',
  osses___tools___skillmap___contentful_id = 'osses___tools___skillmap___contentful_id',
  osses___tools___skillmap___createdAt = 'osses___tools___skillmap___createdAt',
  osses___tools___skillmap___updatedAt = 'osses___tools___skillmap___updatedAt',
  osses___tools___skillmap___node_locale = 'osses___tools___skillmap___node_locale',
  osses___spaceId = 'osses___spaceId',
  osses___contentful_id = 'osses___contentful_id',
  osses___createdAt = 'osses___createdAt',
  osses___updatedAt = 'osses___updatedAt',
  osses___sys___type = 'osses___sys___type',
  osses___sys___revision = 'osses___sys___revision',
  osses___node_locale = 'osses___node_locale',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  node_locale = 'node_locale',
  projects = 'projects',
  projects___id = 'projects___id',
  projects___parent___id = 'projects___parent___id',
  projects___parent___parent___id = 'projects___parent___parent___id',
  projects___parent___parent___children = 'projects___parent___parent___children',
  projects___parent___children = 'projects___parent___children',
  projects___parent___children___id = 'projects___parent___children___id',
  projects___parent___children___children = 'projects___parent___children___children',
  projects___parent___internal___content = 'projects___parent___internal___content',
  projects___parent___internal___contentDigest = 'projects___parent___internal___contentDigest',
  projects___parent___internal___description = 'projects___parent___internal___description',
  projects___parent___internal___fieldOwners = 'projects___parent___internal___fieldOwners',
  projects___parent___internal___ignoreType = 'projects___parent___internal___ignoreType',
  projects___parent___internal___mediaType = 'projects___parent___internal___mediaType',
  projects___parent___internal___owner = 'projects___parent___internal___owner',
  projects___parent___internal___type = 'projects___parent___internal___type',
  projects___children = 'projects___children',
  projects___children___id = 'projects___children___id',
  projects___children___parent___id = 'projects___children___parent___id',
  projects___children___parent___children = 'projects___children___parent___children',
  projects___children___children = 'projects___children___children',
  projects___children___children___id = 'projects___children___children___id',
  projects___children___children___children = 'projects___children___children___children',
  projects___children___internal___content = 'projects___children___internal___content',
  projects___children___internal___contentDigest = 'projects___children___internal___contentDigest',
  projects___children___internal___description = 'projects___children___internal___description',
  projects___children___internal___fieldOwners = 'projects___children___internal___fieldOwners',
  projects___children___internal___ignoreType = 'projects___children___internal___ignoreType',
  projects___children___internal___mediaType = 'projects___children___internal___mediaType',
  projects___children___internal___owner = 'projects___children___internal___owner',
  projects___children___internal___type = 'projects___children___internal___type',
  projects___internal___content = 'projects___internal___content',
  projects___internal___contentDigest = 'projects___internal___contentDigest',
  projects___internal___description = 'projects___internal___description',
  projects___internal___fieldOwners = 'projects___internal___fieldOwners',
  projects___internal___ignoreType = 'projects___internal___ignoreType',
  projects___internal___mediaType = 'projects___internal___mediaType',
  projects___internal___owner = 'projects___internal___owner',
  projects___internal___type = 'projects___internal___type',
  projects___name = 'projects___name',
  projects___startDate = 'projects___startDate',
  projects___during = 'projects___during',
  projects___comment = 'projects___comment',
  projects___roles = 'projects___roles',
  projects___roles___id = 'projects___roles___id',
  projects___roles___parent___id = 'projects___roles___parent___id',
  projects___roles___parent___children = 'projects___roles___parent___children',
  projects___roles___children = 'projects___roles___children',
  projects___roles___children___id = 'projects___roles___children___id',
  projects___roles___children___children = 'projects___roles___children___children',
  projects___roles___internal___content = 'projects___roles___internal___content',
  projects___roles___internal___contentDigest = 'projects___roles___internal___contentDigest',
  projects___roles___internal___description = 'projects___roles___internal___description',
  projects___roles___internal___fieldOwners = 'projects___roles___internal___fieldOwners',
  projects___roles___internal___ignoreType = 'projects___roles___internal___ignoreType',
  projects___roles___internal___mediaType = 'projects___roles___internal___mediaType',
  projects___roles___internal___owner = 'projects___roles___internal___owner',
  projects___roles___internal___type = 'projects___roles___internal___type',
  projects___roles___name = 'projects___roles___name',
  projects___roles___projects = 'projects___roles___projects',
  projects___roles___projects___id = 'projects___roles___projects___id',
  projects___roles___projects___children = 'projects___roles___projects___children',
  projects___roles___projects___name = 'projects___roles___projects___name',
  projects___roles___projects___startDate = 'projects___roles___projects___startDate',
  projects___roles___projects___during = 'projects___roles___projects___during',
  projects___roles___projects___comment = 'projects___roles___projects___comment',
  projects___roles___projects___roles = 'projects___roles___projects___roles',
  projects___roles___projects___assigns = 'projects___roles___projects___assigns',
  projects___roles___projects___systems = 'projects___roles___projects___systems',
  projects___roles___projects___languages = 'projects___roles___projects___languages',
  projects___roles___projects___tools = 'projects___roles___projects___tools',
  projects___roles___projects___spaceId = 'projects___roles___projects___spaceId',
  projects___roles___projects___contentful_id = 'projects___roles___projects___contentful_id',
  projects___roles___projects___createdAt = 'projects___roles___projects___createdAt',
  projects___roles___projects___updatedAt = 'projects___roles___projects___updatedAt',
  projects___roles___projects___node_locale = 'projects___roles___projects___node_locale',
  projects___roles___osses = 'projects___roles___osses',
  projects___roles___osses___id = 'projects___roles___osses___id',
  projects___roles___osses___children = 'projects___roles___osses___children',
  projects___roles___osses___name = 'projects___roles___osses___name',
  projects___roles___osses___slug = 'projects___roles___osses___slug',
  projects___roles___osses___startDate = 'projects___roles___osses___startDate',
  projects___roles___osses___during = 'projects___roles___osses___during',
  projects___roles___osses___comment = 'projects___roles___osses___comment',
  projects___roles___osses___siteUrl = 'projects___roles___osses___siteUrl',
  projects___roles___osses___sourceUrl = 'projects___roles___osses___sourceUrl',
  projects___roles___osses___roles = 'projects___roles___osses___roles',
  projects___roles___osses___assigns = 'projects___roles___osses___assigns',
  projects___roles___osses___systems = 'projects___roles___osses___systems',
  projects___roles___osses___languages = 'projects___roles___osses___languages',
  projects___roles___osses___tools = 'projects___roles___osses___tools',
  projects___roles___osses___spaceId = 'projects___roles___osses___spaceId',
  projects___roles___osses___contentful_id = 'projects___roles___osses___contentful_id',
  projects___roles___osses___createdAt = 'projects___roles___osses___createdAt',
  projects___roles___osses___updatedAt = 'projects___roles___osses___updatedAt',
  projects___roles___osses___node_locale = 'projects___roles___osses___node_locale',
  projects___roles___spaceId = 'projects___roles___spaceId',
  projects___roles___contentful_id = 'projects___roles___contentful_id',
  projects___roles___createdAt = 'projects___roles___createdAt',
  projects___roles___updatedAt = 'projects___roles___updatedAt',
  projects___roles___sys___type = 'projects___roles___sys___type',
  projects___roles___sys___revision = 'projects___roles___sys___revision',
  projects___roles___node_locale = 'projects___roles___node_locale',
  projects___assigns = 'projects___assigns',
  projects___assigns___id = 'projects___assigns___id',
  projects___assigns___parent___id = 'projects___assigns___parent___id',
  projects___assigns___parent___children = 'projects___assigns___parent___children',
  projects___assigns___children = 'projects___assigns___children',
  projects___assigns___children___id = 'projects___assigns___children___id',
  projects___assigns___children___children = 'projects___assigns___children___children',
  projects___assigns___internal___content = 'projects___assigns___internal___content',
  projects___assigns___internal___contentDigest = 'projects___assigns___internal___contentDigest',
  projects___assigns___internal___description = 'projects___assigns___internal___description',
  projects___assigns___internal___fieldOwners = 'projects___assigns___internal___fieldOwners',
  projects___assigns___internal___ignoreType = 'projects___assigns___internal___ignoreType',
  projects___assigns___internal___mediaType = 'projects___assigns___internal___mediaType',
  projects___assigns___internal___owner = 'projects___assigns___internal___owner',
  projects___assigns___internal___type = 'projects___assigns___internal___type',
  projects___assigns___name = 'projects___assigns___name',
  projects___assigns___projects = 'projects___assigns___projects',
  projects___assigns___projects___id = 'projects___assigns___projects___id',
  projects___assigns___projects___children = 'projects___assigns___projects___children',
  projects___assigns___projects___name = 'projects___assigns___projects___name',
  projects___assigns___projects___startDate = 'projects___assigns___projects___startDate',
  projects___assigns___projects___during = 'projects___assigns___projects___during',
  projects___assigns___projects___comment = 'projects___assigns___projects___comment',
  projects___assigns___projects___roles = 'projects___assigns___projects___roles',
  projects___assigns___projects___assigns = 'projects___assigns___projects___assigns',
  projects___assigns___projects___systems = 'projects___assigns___projects___systems',
  projects___assigns___projects___languages = 'projects___assigns___projects___languages',
  projects___assigns___projects___tools = 'projects___assigns___projects___tools',
  projects___assigns___projects___spaceId = 'projects___assigns___projects___spaceId',
  projects___assigns___projects___contentful_id = 'projects___assigns___projects___contentful_id',
  projects___assigns___projects___createdAt = 'projects___assigns___projects___createdAt',
  projects___assigns___projects___updatedAt = 'projects___assigns___projects___updatedAt',
  projects___assigns___projects___node_locale = 'projects___assigns___projects___node_locale',
  projects___assigns___osses = 'projects___assigns___osses',
  projects___assigns___osses___id = 'projects___assigns___osses___id',
  projects___assigns___osses___children = 'projects___assigns___osses___children',
  projects___assigns___osses___name = 'projects___assigns___osses___name',
  projects___assigns___osses___slug = 'projects___assigns___osses___slug',
  projects___assigns___osses___startDate = 'projects___assigns___osses___startDate',
  projects___assigns___osses___during = 'projects___assigns___osses___during',
  projects___assigns___osses___comment = 'projects___assigns___osses___comment',
  projects___assigns___osses___siteUrl = 'projects___assigns___osses___siteUrl',
  projects___assigns___osses___sourceUrl = 'projects___assigns___osses___sourceUrl',
  projects___assigns___osses___roles = 'projects___assigns___osses___roles',
  projects___assigns___osses___assigns = 'projects___assigns___osses___assigns',
  projects___assigns___osses___systems = 'projects___assigns___osses___systems',
  projects___assigns___osses___languages = 'projects___assigns___osses___languages',
  projects___assigns___osses___tools = 'projects___assigns___osses___tools',
  projects___assigns___osses___spaceId = 'projects___assigns___osses___spaceId',
  projects___assigns___osses___contentful_id = 'projects___assigns___osses___contentful_id',
  projects___assigns___osses___createdAt = 'projects___assigns___osses___createdAt',
  projects___assigns___osses___updatedAt = 'projects___assigns___osses___updatedAt',
  projects___assigns___osses___node_locale = 'projects___assigns___osses___node_locale',
  projects___assigns___spaceId = 'projects___assigns___spaceId',
  projects___assigns___contentful_id = 'projects___assigns___contentful_id',
  projects___assigns___createdAt = 'projects___assigns___createdAt',
  projects___assigns___updatedAt = 'projects___assigns___updatedAt',
  projects___assigns___sys___type = 'projects___assigns___sys___type',
  projects___assigns___sys___revision = 'projects___assigns___sys___revision',
  projects___assigns___node_locale = 'projects___assigns___node_locale',
  projects___systems = 'projects___systems',
  projects___systems___id = 'projects___systems___id',
  projects___systems___parent___id = 'projects___systems___parent___id',
  projects___systems___parent___children = 'projects___systems___parent___children',
  projects___systems___children = 'projects___systems___children',
  projects___systems___children___id = 'projects___systems___children___id',
  projects___systems___children___children = 'projects___systems___children___children',
  projects___systems___internal___content = 'projects___systems___internal___content',
  projects___systems___internal___contentDigest = 'projects___systems___internal___contentDigest',
  projects___systems___internal___description = 'projects___systems___internal___description',
  projects___systems___internal___fieldOwners = 'projects___systems___internal___fieldOwners',
  projects___systems___internal___ignoreType = 'projects___systems___internal___ignoreType',
  projects___systems___internal___mediaType = 'projects___systems___internal___mediaType',
  projects___systems___internal___owner = 'projects___systems___internal___owner',
  projects___systems___internal___type = 'projects___systems___internal___type',
  projects___systems___name = 'projects___systems___name',
  projects___systems___level = 'projects___systems___level',
  projects___systems___osses = 'projects___systems___osses',
  projects___systems___osses___id = 'projects___systems___osses___id',
  projects___systems___osses___children = 'projects___systems___osses___children',
  projects___systems___osses___name = 'projects___systems___osses___name',
  projects___systems___osses___slug = 'projects___systems___osses___slug',
  projects___systems___osses___startDate = 'projects___systems___osses___startDate',
  projects___systems___osses___during = 'projects___systems___osses___during',
  projects___systems___osses___comment = 'projects___systems___osses___comment',
  projects___systems___osses___siteUrl = 'projects___systems___osses___siteUrl',
  projects___systems___osses___sourceUrl = 'projects___systems___osses___sourceUrl',
  projects___systems___osses___roles = 'projects___systems___osses___roles',
  projects___systems___osses___assigns = 'projects___systems___osses___assigns',
  projects___systems___osses___systems = 'projects___systems___osses___systems',
  projects___systems___osses___languages = 'projects___systems___osses___languages',
  projects___systems___osses___tools = 'projects___systems___osses___tools',
  projects___systems___osses___spaceId = 'projects___systems___osses___spaceId',
  projects___systems___osses___contentful_id = 'projects___systems___osses___contentful_id',
  projects___systems___osses___createdAt = 'projects___systems___osses___createdAt',
  projects___systems___osses___updatedAt = 'projects___systems___osses___updatedAt',
  projects___systems___osses___node_locale = 'projects___systems___osses___node_locale',
  projects___systems___spaceId = 'projects___systems___spaceId',
  projects___systems___contentful_id = 'projects___systems___contentful_id',
  projects___systems___createdAt = 'projects___systems___createdAt',
  projects___systems___updatedAt = 'projects___systems___updatedAt',
  projects___systems___sys___type = 'projects___systems___sys___type',
  projects___systems___sys___revision = 'projects___systems___sys___revision',
  projects___systems___node_locale = 'projects___systems___node_locale',
  projects___systems___projects = 'projects___systems___projects',
  projects___systems___projects___id = 'projects___systems___projects___id',
  projects___systems___projects___children = 'projects___systems___projects___children',
  projects___systems___projects___name = 'projects___systems___projects___name',
  projects___systems___projects___startDate = 'projects___systems___projects___startDate',
  projects___systems___projects___during = 'projects___systems___projects___during',
  projects___systems___projects___comment = 'projects___systems___projects___comment',
  projects___systems___projects___roles = 'projects___systems___projects___roles',
  projects___systems___projects___assigns = 'projects___systems___projects___assigns',
  projects___systems___projects___systems = 'projects___systems___projects___systems',
  projects___systems___projects___languages = 'projects___systems___projects___languages',
  projects___systems___projects___tools = 'projects___systems___projects___tools',
  projects___systems___projects___spaceId = 'projects___systems___projects___spaceId',
  projects___systems___projects___contentful_id = 'projects___systems___projects___contentful_id',
  projects___systems___projects___createdAt = 'projects___systems___projects___createdAt',
  projects___systems___projects___updatedAt = 'projects___systems___projects___updatedAt',
  projects___systems___projects___node_locale = 'projects___systems___projects___node_locale',
  projects___systems___skillmap = 'projects___systems___skillmap',
  projects___systems___skillmap___id = 'projects___systems___skillmap___id',
  projects___systems___skillmap___children = 'projects___systems___skillmap___children',
  projects___systems___skillmap___name = 'projects___systems___skillmap___name',
  projects___systems___skillmap___skills = 'projects___systems___skillmap___skills',
  projects___systems___skillmap___spaceId = 'projects___systems___skillmap___spaceId',
  projects___systems___skillmap___contentful_id = 'projects___systems___skillmap___contentful_id',
  projects___systems___skillmap___createdAt = 'projects___systems___skillmap___createdAt',
  projects___systems___skillmap___updatedAt = 'projects___systems___skillmap___updatedAt',
  projects___systems___skillmap___node_locale = 'projects___systems___skillmap___node_locale',
  projects___languages = 'projects___languages',
  projects___languages___id = 'projects___languages___id',
  projects___languages___parent___id = 'projects___languages___parent___id',
  projects___languages___parent___children = 'projects___languages___parent___children',
  projects___languages___children = 'projects___languages___children',
  projects___languages___children___id = 'projects___languages___children___id',
  projects___languages___children___children = 'projects___languages___children___children',
  projects___languages___internal___content = 'projects___languages___internal___content',
  projects___languages___internal___contentDigest = 'projects___languages___internal___contentDigest',
  projects___languages___internal___description = 'projects___languages___internal___description',
  projects___languages___internal___fieldOwners = 'projects___languages___internal___fieldOwners',
  projects___languages___internal___ignoreType = 'projects___languages___internal___ignoreType',
  projects___languages___internal___mediaType = 'projects___languages___internal___mediaType',
  projects___languages___internal___owner = 'projects___languages___internal___owner',
  projects___languages___internal___type = 'projects___languages___internal___type',
  projects___languages___name = 'projects___languages___name',
  projects___languages___level = 'projects___languages___level',
  projects___languages___osses = 'projects___languages___osses',
  projects___languages___osses___id = 'projects___languages___osses___id',
  projects___languages___osses___children = 'projects___languages___osses___children',
  projects___languages___osses___name = 'projects___languages___osses___name',
  projects___languages___osses___slug = 'projects___languages___osses___slug',
  projects___languages___osses___startDate = 'projects___languages___osses___startDate',
  projects___languages___osses___during = 'projects___languages___osses___during',
  projects___languages___osses___comment = 'projects___languages___osses___comment',
  projects___languages___osses___siteUrl = 'projects___languages___osses___siteUrl',
  projects___languages___osses___sourceUrl = 'projects___languages___osses___sourceUrl',
  projects___languages___osses___roles = 'projects___languages___osses___roles',
  projects___languages___osses___assigns = 'projects___languages___osses___assigns',
  projects___languages___osses___systems = 'projects___languages___osses___systems',
  projects___languages___osses___languages = 'projects___languages___osses___languages',
  projects___languages___osses___tools = 'projects___languages___osses___tools',
  projects___languages___osses___spaceId = 'projects___languages___osses___spaceId',
  projects___languages___osses___contentful_id = 'projects___languages___osses___contentful_id',
  projects___languages___osses___createdAt = 'projects___languages___osses___createdAt',
  projects___languages___osses___updatedAt = 'projects___languages___osses___updatedAt',
  projects___languages___osses___node_locale = 'projects___languages___osses___node_locale',
  projects___languages___spaceId = 'projects___languages___spaceId',
  projects___languages___contentful_id = 'projects___languages___contentful_id',
  projects___languages___createdAt = 'projects___languages___createdAt',
  projects___languages___updatedAt = 'projects___languages___updatedAt',
  projects___languages___sys___type = 'projects___languages___sys___type',
  projects___languages___sys___revision = 'projects___languages___sys___revision',
  projects___languages___node_locale = 'projects___languages___node_locale',
  projects___languages___projects = 'projects___languages___projects',
  projects___languages___projects___id = 'projects___languages___projects___id',
  projects___languages___projects___children = 'projects___languages___projects___children',
  projects___languages___projects___name = 'projects___languages___projects___name',
  projects___languages___projects___startDate = 'projects___languages___projects___startDate',
  projects___languages___projects___during = 'projects___languages___projects___during',
  projects___languages___projects___comment = 'projects___languages___projects___comment',
  projects___languages___projects___roles = 'projects___languages___projects___roles',
  projects___languages___projects___assigns = 'projects___languages___projects___assigns',
  projects___languages___projects___systems = 'projects___languages___projects___systems',
  projects___languages___projects___languages = 'projects___languages___projects___languages',
  projects___languages___projects___tools = 'projects___languages___projects___tools',
  projects___languages___projects___spaceId = 'projects___languages___projects___spaceId',
  projects___languages___projects___contentful_id = 'projects___languages___projects___contentful_id',
  projects___languages___projects___createdAt = 'projects___languages___projects___createdAt',
  projects___languages___projects___updatedAt = 'projects___languages___projects___updatedAt',
  projects___languages___projects___node_locale = 'projects___languages___projects___node_locale',
  projects___languages___skillmap = 'projects___languages___skillmap',
  projects___languages___skillmap___id = 'projects___languages___skillmap___id',
  projects___languages___skillmap___children = 'projects___languages___skillmap___children',
  projects___languages___skillmap___name = 'projects___languages___skillmap___name',
  projects___languages___skillmap___skills = 'projects___languages___skillmap___skills',
  projects___languages___skillmap___spaceId = 'projects___languages___skillmap___spaceId',
  projects___languages___skillmap___contentful_id = 'projects___languages___skillmap___contentful_id',
  projects___languages___skillmap___createdAt = 'projects___languages___skillmap___createdAt',
  projects___languages___skillmap___updatedAt = 'projects___languages___skillmap___updatedAt',
  projects___languages___skillmap___node_locale = 'projects___languages___skillmap___node_locale',
  projects___tools = 'projects___tools',
  projects___tools___id = 'projects___tools___id',
  projects___tools___parent___id = 'projects___tools___parent___id',
  projects___tools___parent___children = 'projects___tools___parent___children',
  projects___tools___children = 'projects___tools___children',
  projects___tools___children___id = 'projects___tools___children___id',
  projects___tools___children___children = 'projects___tools___children___children',
  projects___tools___internal___content = 'projects___tools___internal___content',
  projects___tools___internal___contentDigest = 'projects___tools___internal___contentDigest',
  projects___tools___internal___description = 'projects___tools___internal___description',
  projects___tools___internal___fieldOwners = 'projects___tools___internal___fieldOwners',
  projects___tools___internal___ignoreType = 'projects___tools___internal___ignoreType',
  projects___tools___internal___mediaType = 'projects___tools___internal___mediaType',
  projects___tools___internal___owner = 'projects___tools___internal___owner',
  projects___tools___internal___type = 'projects___tools___internal___type',
  projects___tools___name = 'projects___tools___name',
  projects___tools___level = 'projects___tools___level',
  projects___tools___osses = 'projects___tools___osses',
  projects___tools___osses___id = 'projects___tools___osses___id',
  projects___tools___osses___children = 'projects___tools___osses___children',
  projects___tools___osses___name = 'projects___tools___osses___name',
  projects___tools___osses___slug = 'projects___tools___osses___slug',
  projects___tools___osses___startDate = 'projects___tools___osses___startDate',
  projects___tools___osses___during = 'projects___tools___osses___during',
  projects___tools___osses___comment = 'projects___tools___osses___comment',
  projects___tools___osses___siteUrl = 'projects___tools___osses___siteUrl',
  projects___tools___osses___sourceUrl = 'projects___tools___osses___sourceUrl',
  projects___tools___osses___roles = 'projects___tools___osses___roles',
  projects___tools___osses___assigns = 'projects___tools___osses___assigns',
  projects___tools___osses___systems = 'projects___tools___osses___systems',
  projects___tools___osses___languages = 'projects___tools___osses___languages',
  projects___tools___osses___tools = 'projects___tools___osses___tools',
  projects___tools___osses___spaceId = 'projects___tools___osses___spaceId',
  projects___tools___osses___contentful_id = 'projects___tools___osses___contentful_id',
  projects___tools___osses___createdAt = 'projects___tools___osses___createdAt',
  projects___tools___osses___updatedAt = 'projects___tools___osses___updatedAt',
  projects___tools___osses___node_locale = 'projects___tools___osses___node_locale',
  projects___tools___spaceId = 'projects___tools___spaceId',
  projects___tools___contentful_id = 'projects___tools___contentful_id',
  projects___tools___createdAt = 'projects___tools___createdAt',
  projects___tools___updatedAt = 'projects___tools___updatedAt',
  projects___tools___sys___type = 'projects___tools___sys___type',
  projects___tools___sys___revision = 'projects___tools___sys___revision',
  projects___tools___node_locale = 'projects___tools___node_locale',
  projects___tools___projects = 'projects___tools___projects',
  projects___tools___projects___id = 'projects___tools___projects___id',
  projects___tools___projects___children = 'projects___tools___projects___children',
  projects___tools___projects___name = 'projects___tools___projects___name',
  projects___tools___projects___startDate = 'projects___tools___projects___startDate',
  projects___tools___projects___during = 'projects___tools___projects___during',
  projects___tools___projects___comment = 'projects___tools___projects___comment',
  projects___tools___projects___roles = 'projects___tools___projects___roles',
  projects___tools___projects___assigns = 'projects___tools___projects___assigns',
  projects___tools___projects___systems = 'projects___tools___projects___systems',
  projects___tools___projects___languages = 'projects___tools___projects___languages',
  projects___tools___projects___tools = 'projects___tools___projects___tools',
  projects___tools___projects___spaceId = 'projects___tools___projects___spaceId',
  projects___tools___projects___contentful_id = 'projects___tools___projects___contentful_id',
  projects___tools___projects___createdAt = 'projects___tools___projects___createdAt',
  projects___tools___projects___updatedAt = 'projects___tools___projects___updatedAt',
  projects___tools___projects___node_locale = 'projects___tools___projects___node_locale',
  projects___tools___skillmap = 'projects___tools___skillmap',
  projects___tools___skillmap___id = 'projects___tools___skillmap___id',
  projects___tools___skillmap___children = 'projects___tools___skillmap___children',
  projects___tools___skillmap___name = 'projects___tools___skillmap___name',
  projects___tools___skillmap___skills = 'projects___tools___skillmap___skills',
  projects___tools___skillmap___spaceId = 'projects___tools___skillmap___spaceId',
  projects___tools___skillmap___contentful_id = 'projects___tools___skillmap___contentful_id',
  projects___tools___skillmap___createdAt = 'projects___tools___skillmap___createdAt',
  projects___tools___skillmap___updatedAt = 'projects___tools___skillmap___updatedAt',
  projects___tools___skillmap___node_locale = 'projects___tools___skillmap___node_locale',
  projects___image___id = 'projects___image___id',
  projects___image___parent___id = 'projects___image___parent___id',
  projects___image___parent___children = 'projects___image___parent___children',
  projects___image___children = 'projects___image___children',
  projects___image___children___id = 'projects___image___children___id',
  projects___image___children___children = 'projects___image___children___children',
  projects___image___internal___content = 'projects___image___internal___content',
  projects___image___internal___contentDigest = 'projects___image___internal___contentDigest',
  projects___image___internal___description = 'projects___image___internal___description',
  projects___image___internal___fieldOwners = 'projects___image___internal___fieldOwners',
  projects___image___internal___ignoreType = 'projects___image___internal___ignoreType',
  projects___image___internal___mediaType = 'projects___image___internal___mediaType',
  projects___image___internal___owner = 'projects___image___internal___owner',
  projects___image___internal___type = 'projects___image___internal___type',
  projects___image___image = 'projects___image___image',
  projects___image___sys___type = 'projects___image___sys___type',
  projects___spaceId = 'projects___spaceId',
  projects___contentful_id = 'projects___contentful_id',
  projects___createdAt = 'projects___createdAt',
  projects___updatedAt = 'projects___updatedAt',
  projects___sys___type = 'projects___sys___type',
  projects___sys___revision = 'projects___sys___revision',
  projects___node_locale = 'projects___node_locale',
  projects___childContentfulProjectsImageTextNode___id = 'projects___childContentfulProjectsImageTextNode___id',
  projects___childContentfulProjectsImageTextNode___parent___id = 'projects___childContentfulProjectsImageTextNode___parent___id',
  projects___childContentfulProjectsImageTextNode___parent___children = 'projects___childContentfulProjectsImageTextNode___parent___children',
  projects___childContentfulProjectsImageTextNode___children = 'projects___childContentfulProjectsImageTextNode___children',
  projects___childContentfulProjectsImageTextNode___children___id = 'projects___childContentfulProjectsImageTextNode___children___id',
  projects___childContentfulProjectsImageTextNode___children___children = 'projects___childContentfulProjectsImageTextNode___children___children',
  projects___childContentfulProjectsImageTextNode___internal___content = 'projects___childContentfulProjectsImageTextNode___internal___content',
  projects___childContentfulProjectsImageTextNode___internal___contentDigest = 'projects___childContentfulProjectsImageTextNode___internal___contentDigest',
  projects___childContentfulProjectsImageTextNode___internal___description = 'projects___childContentfulProjectsImageTextNode___internal___description',
  projects___childContentfulProjectsImageTextNode___internal___fieldOwners = 'projects___childContentfulProjectsImageTextNode___internal___fieldOwners',
  projects___childContentfulProjectsImageTextNode___internal___ignoreType = 'projects___childContentfulProjectsImageTextNode___internal___ignoreType',
  projects___childContentfulProjectsImageTextNode___internal___mediaType = 'projects___childContentfulProjectsImageTextNode___internal___mediaType',
  projects___childContentfulProjectsImageTextNode___internal___owner = 'projects___childContentfulProjectsImageTextNode___internal___owner',
  projects___childContentfulProjectsImageTextNode___internal___type = 'projects___childContentfulProjectsImageTextNode___internal___type',
  projects___childContentfulProjectsImageTextNode___image = 'projects___childContentfulProjectsImageTextNode___image',
  projects___childContentfulProjectsImageTextNode___sys___type = 'projects___childContentfulProjectsImageTextNode___sys___type',
  skillmap = 'skillmap',
  skillmap___id = 'skillmap___id',
  skillmap___parent___id = 'skillmap___parent___id',
  skillmap___parent___parent___id = 'skillmap___parent___parent___id',
  skillmap___parent___parent___children = 'skillmap___parent___parent___children',
  skillmap___parent___children = 'skillmap___parent___children',
  skillmap___parent___children___id = 'skillmap___parent___children___id',
  skillmap___parent___children___children = 'skillmap___parent___children___children',
  skillmap___parent___internal___content = 'skillmap___parent___internal___content',
  skillmap___parent___internal___contentDigest = 'skillmap___parent___internal___contentDigest',
  skillmap___parent___internal___description = 'skillmap___parent___internal___description',
  skillmap___parent___internal___fieldOwners = 'skillmap___parent___internal___fieldOwners',
  skillmap___parent___internal___ignoreType = 'skillmap___parent___internal___ignoreType',
  skillmap___parent___internal___mediaType = 'skillmap___parent___internal___mediaType',
  skillmap___parent___internal___owner = 'skillmap___parent___internal___owner',
  skillmap___parent___internal___type = 'skillmap___parent___internal___type',
  skillmap___children = 'skillmap___children',
  skillmap___children___id = 'skillmap___children___id',
  skillmap___children___parent___id = 'skillmap___children___parent___id',
  skillmap___children___parent___children = 'skillmap___children___parent___children',
  skillmap___children___children = 'skillmap___children___children',
  skillmap___children___children___id = 'skillmap___children___children___id',
  skillmap___children___children___children = 'skillmap___children___children___children',
  skillmap___children___internal___content = 'skillmap___children___internal___content',
  skillmap___children___internal___contentDigest = 'skillmap___children___internal___contentDigest',
  skillmap___children___internal___description = 'skillmap___children___internal___description',
  skillmap___children___internal___fieldOwners = 'skillmap___children___internal___fieldOwners',
  skillmap___children___internal___ignoreType = 'skillmap___children___internal___ignoreType',
  skillmap___children___internal___mediaType = 'skillmap___children___internal___mediaType',
  skillmap___children___internal___owner = 'skillmap___children___internal___owner',
  skillmap___children___internal___type = 'skillmap___children___internal___type',
  skillmap___internal___content = 'skillmap___internal___content',
  skillmap___internal___contentDigest = 'skillmap___internal___contentDigest',
  skillmap___internal___description = 'skillmap___internal___description',
  skillmap___internal___fieldOwners = 'skillmap___internal___fieldOwners',
  skillmap___internal___ignoreType = 'skillmap___internal___ignoreType',
  skillmap___internal___mediaType = 'skillmap___internal___mediaType',
  skillmap___internal___owner = 'skillmap___internal___owner',
  skillmap___internal___type = 'skillmap___internal___type',
  skillmap___name = 'skillmap___name',
  skillmap___skills = 'skillmap___skills',
  skillmap___skills___id = 'skillmap___skills___id',
  skillmap___skills___parent___id = 'skillmap___skills___parent___id',
  skillmap___skills___parent___children = 'skillmap___skills___parent___children',
  skillmap___skills___children = 'skillmap___skills___children',
  skillmap___skills___children___id = 'skillmap___skills___children___id',
  skillmap___skills___children___children = 'skillmap___skills___children___children',
  skillmap___skills___internal___content = 'skillmap___skills___internal___content',
  skillmap___skills___internal___contentDigest = 'skillmap___skills___internal___contentDigest',
  skillmap___skills___internal___description = 'skillmap___skills___internal___description',
  skillmap___skills___internal___fieldOwners = 'skillmap___skills___internal___fieldOwners',
  skillmap___skills___internal___ignoreType = 'skillmap___skills___internal___ignoreType',
  skillmap___skills___internal___mediaType = 'skillmap___skills___internal___mediaType',
  skillmap___skills___internal___owner = 'skillmap___skills___internal___owner',
  skillmap___skills___internal___type = 'skillmap___skills___internal___type',
  skillmap___skills___name = 'skillmap___skills___name',
  skillmap___skills___level = 'skillmap___skills___level',
  skillmap___skills___osses = 'skillmap___skills___osses',
  skillmap___skills___osses___id = 'skillmap___skills___osses___id',
  skillmap___skills___osses___children = 'skillmap___skills___osses___children',
  skillmap___skills___osses___name = 'skillmap___skills___osses___name',
  skillmap___skills___osses___slug = 'skillmap___skills___osses___slug',
  skillmap___skills___osses___startDate = 'skillmap___skills___osses___startDate',
  skillmap___skills___osses___during = 'skillmap___skills___osses___during',
  skillmap___skills___osses___comment = 'skillmap___skills___osses___comment',
  skillmap___skills___osses___siteUrl = 'skillmap___skills___osses___siteUrl',
  skillmap___skills___osses___sourceUrl = 'skillmap___skills___osses___sourceUrl',
  skillmap___skills___osses___roles = 'skillmap___skills___osses___roles',
  skillmap___skills___osses___assigns = 'skillmap___skills___osses___assigns',
  skillmap___skills___osses___systems = 'skillmap___skills___osses___systems',
  skillmap___skills___osses___languages = 'skillmap___skills___osses___languages',
  skillmap___skills___osses___tools = 'skillmap___skills___osses___tools',
  skillmap___skills___osses___spaceId = 'skillmap___skills___osses___spaceId',
  skillmap___skills___osses___contentful_id = 'skillmap___skills___osses___contentful_id',
  skillmap___skills___osses___createdAt = 'skillmap___skills___osses___createdAt',
  skillmap___skills___osses___updatedAt = 'skillmap___skills___osses___updatedAt',
  skillmap___skills___osses___node_locale = 'skillmap___skills___osses___node_locale',
  skillmap___skills___spaceId = 'skillmap___skills___spaceId',
  skillmap___skills___contentful_id = 'skillmap___skills___contentful_id',
  skillmap___skills___createdAt = 'skillmap___skills___createdAt',
  skillmap___skills___updatedAt = 'skillmap___skills___updatedAt',
  skillmap___skills___sys___type = 'skillmap___skills___sys___type',
  skillmap___skills___sys___revision = 'skillmap___skills___sys___revision',
  skillmap___skills___node_locale = 'skillmap___skills___node_locale',
  skillmap___skills___projects = 'skillmap___skills___projects',
  skillmap___skills___projects___id = 'skillmap___skills___projects___id',
  skillmap___skills___projects___children = 'skillmap___skills___projects___children',
  skillmap___skills___projects___name = 'skillmap___skills___projects___name',
  skillmap___skills___projects___startDate = 'skillmap___skills___projects___startDate',
  skillmap___skills___projects___during = 'skillmap___skills___projects___during',
  skillmap___skills___projects___comment = 'skillmap___skills___projects___comment',
  skillmap___skills___projects___roles = 'skillmap___skills___projects___roles',
  skillmap___skills___projects___assigns = 'skillmap___skills___projects___assigns',
  skillmap___skills___projects___systems = 'skillmap___skills___projects___systems',
  skillmap___skills___projects___languages = 'skillmap___skills___projects___languages',
  skillmap___skills___projects___tools = 'skillmap___skills___projects___tools',
  skillmap___skills___projects___spaceId = 'skillmap___skills___projects___spaceId',
  skillmap___skills___projects___contentful_id = 'skillmap___skills___projects___contentful_id',
  skillmap___skills___projects___createdAt = 'skillmap___skills___projects___createdAt',
  skillmap___skills___projects___updatedAt = 'skillmap___skills___projects___updatedAt',
  skillmap___skills___projects___node_locale = 'skillmap___skills___projects___node_locale',
  skillmap___skills___skillmap = 'skillmap___skills___skillmap',
  skillmap___skills___skillmap___id = 'skillmap___skills___skillmap___id',
  skillmap___skills___skillmap___children = 'skillmap___skills___skillmap___children',
  skillmap___skills___skillmap___name = 'skillmap___skills___skillmap___name',
  skillmap___skills___skillmap___skills = 'skillmap___skills___skillmap___skills',
  skillmap___skills___skillmap___spaceId = 'skillmap___skills___skillmap___spaceId',
  skillmap___skills___skillmap___contentful_id = 'skillmap___skills___skillmap___contentful_id',
  skillmap___skills___skillmap___createdAt = 'skillmap___skills___skillmap___createdAt',
  skillmap___skills___skillmap___updatedAt = 'skillmap___skills___skillmap___updatedAt',
  skillmap___skills___skillmap___node_locale = 'skillmap___skills___skillmap___node_locale',
  skillmap___spaceId = 'skillmap___spaceId',
  skillmap___contentful_id = 'skillmap___contentful_id',
  skillmap___createdAt = 'skillmap___createdAt',
  skillmap___updatedAt = 'skillmap___updatedAt',
  skillmap___sys___type = 'skillmap___sys___type',
  skillmap___sys___revision = 'skillmap___sys___revision',
  skillmap___node_locale = 'skillmap___node_locale'
}

export type ContentfulSkillFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  level?: Maybe<IntQueryOperatorInput>;
  osses?: Maybe<ContentfulOsSesFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<ContentfulProjectsFilterListInput>;
  skillmap?: Maybe<ContentfulSkillMapFilterListInput>;
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

export type ContentfulSkillMap = Node & {
  __typename?: 'ContentfulSkillMap';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<ContentfulSkill>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSkillMapSys>;
  node_locale?: Maybe<Scalars['String']>;
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
  skills = 'skills',
  skills___id = 'skills___id',
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
  skills___name = 'skills___name',
  skills___level = 'skills___level',
  skills___osses = 'skills___osses',
  skills___osses___id = 'skills___osses___id',
  skills___osses___parent___id = 'skills___osses___parent___id',
  skills___osses___parent___children = 'skills___osses___parent___children',
  skills___osses___children = 'skills___osses___children',
  skills___osses___children___id = 'skills___osses___children___id',
  skills___osses___children___children = 'skills___osses___children___children',
  skills___osses___internal___content = 'skills___osses___internal___content',
  skills___osses___internal___contentDigest = 'skills___osses___internal___contentDigest',
  skills___osses___internal___description = 'skills___osses___internal___description',
  skills___osses___internal___fieldOwners = 'skills___osses___internal___fieldOwners',
  skills___osses___internal___ignoreType = 'skills___osses___internal___ignoreType',
  skills___osses___internal___mediaType = 'skills___osses___internal___mediaType',
  skills___osses___internal___owner = 'skills___osses___internal___owner',
  skills___osses___internal___type = 'skills___osses___internal___type',
  skills___osses___name = 'skills___osses___name',
  skills___osses___slug = 'skills___osses___slug',
  skills___osses___startDate = 'skills___osses___startDate',
  skills___osses___during = 'skills___osses___during',
  skills___osses___comment = 'skills___osses___comment',
  skills___osses___siteUrl = 'skills___osses___siteUrl',
  skills___osses___sourceUrl = 'skills___osses___sourceUrl',
  skills___osses___mainImage___id = 'skills___osses___mainImage___id',
  skills___osses___mainImage___children = 'skills___osses___mainImage___children',
  skills___osses___mainImage___contentful_id = 'skills___osses___mainImage___contentful_id',
  skills___osses___mainImage___spaceId = 'skills___osses___mainImage___spaceId',
  skills___osses___mainImage___createdAt = 'skills___osses___mainImage___createdAt',
  skills___osses___mainImage___updatedAt = 'skills___osses___mainImage___updatedAt',
  skills___osses___mainImage___title = 'skills___osses___mainImage___title',
  skills___osses___mainImage___description = 'skills___osses___mainImage___description',
  skills___osses___mainImage___node_locale = 'skills___osses___mainImage___node_locale',
  skills___osses___roles = 'skills___osses___roles',
  skills___osses___roles___id = 'skills___osses___roles___id',
  skills___osses___roles___children = 'skills___osses___roles___children',
  skills___osses___roles___name = 'skills___osses___roles___name',
  skills___osses___roles___projects = 'skills___osses___roles___projects',
  skills___osses___roles___osses = 'skills___osses___roles___osses',
  skills___osses___roles___spaceId = 'skills___osses___roles___spaceId',
  skills___osses___roles___contentful_id = 'skills___osses___roles___contentful_id',
  skills___osses___roles___createdAt = 'skills___osses___roles___createdAt',
  skills___osses___roles___updatedAt = 'skills___osses___roles___updatedAt',
  skills___osses___roles___node_locale = 'skills___osses___roles___node_locale',
  skills___osses___assigns = 'skills___osses___assigns',
  skills___osses___assigns___id = 'skills___osses___assigns___id',
  skills___osses___assigns___children = 'skills___osses___assigns___children',
  skills___osses___assigns___name = 'skills___osses___assigns___name',
  skills___osses___assigns___projects = 'skills___osses___assigns___projects',
  skills___osses___assigns___osses = 'skills___osses___assigns___osses',
  skills___osses___assigns___spaceId = 'skills___osses___assigns___spaceId',
  skills___osses___assigns___contentful_id = 'skills___osses___assigns___contentful_id',
  skills___osses___assigns___createdAt = 'skills___osses___assigns___createdAt',
  skills___osses___assigns___updatedAt = 'skills___osses___assigns___updatedAt',
  skills___osses___assigns___node_locale = 'skills___osses___assigns___node_locale',
  skills___osses___systems = 'skills___osses___systems',
  skills___osses___systems___id = 'skills___osses___systems___id',
  skills___osses___systems___children = 'skills___osses___systems___children',
  skills___osses___systems___name = 'skills___osses___systems___name',
  skills___osses___systems___level = 'skills___osses___systems___level',
  skills___osses___systems___osses = 'skills___osses___systems___osses',
  skills___osses___systems___spaceId = 'skills___osses___systems___spaceId',
  skills___osses___systems___contentful_id = 'skills___osses___systems___contentful_id',
  skills___osses___systems___createdAt = 'skills___osses___systems___createdAt',
  skills___osses___systems___updatedAt = 'skills___osses___systems___updatedAt',
  skills___osses___systems___node_locale = 'skills___osses___systems___node_locale',
  skills___osses___systems___projects = 'skills___osses___systems___projects',
  skills___osses___systems___skillmap = 'skills___osses___systems___skillmap',
  skills___osses___languages = 'skills___osses___languages',
  skills___osses___languages___id = 'skills___osses___languages___id',
  skills___osses___languages___children = 'skills___osses___languages___children',
  skills___osses___languages___name = 'skills___osses___languages___name',
  skills___osses___languages___level = 'skills___osses___languages___level',
  skills___osses___languages___osses = 'skills___osses___languages___osses',
  skills___osses___languages___spaceId = 'skills___osses___languages___spaceId',
  skills___osses___languages___contentful_id = 'skills___osses___languages___contentful_id',
  skills___osses___languages___createdAt = 'skills___osses___languages___createdAt',
  skills___osses___languages___updatedAt = 'skills___osses___languages___updatedAt',
  skills___osses___languages___node_locale = 'skills___osses___languages___node_locale',
  skills___osses___languages___projects = 'skills___osses___languages___projects',
  skills___osses___languages___skillmap = 'skills___osses___languages___skillmap',
  skills___osses___tools = 'skills___osses___tools',
  skills___osses___tools___id = 'skills___osses___tools___id',
  skills___osses___tools___children = 'skills___osses___tools___children',
  skills___osses___tools___name = 'skills___osses___tools___name',
  skills___osses___tools___level = 'skills___osses___tools___level',
  skills___osses___tools___osses = 'skills___osses___tools___osses',
  skills___osses___tools___spaceId = 'skills___osses___tools___spaceId',
  skills___osses___tools___contentful_id = 'skills___osses___tools___contentful_id',
  skills___osses___tools___createdAt = 'skills___osses___tools___createdAt',
  skills___osses___tools___updatedAt = 'skills___osses___tools___updatedAt',
  skills___osses___tools___node_locale = 'skills___osses___tools___node_locale',
  skills___osses___tools___projects = 'skills___osses___tools___projects',
  skills___osses___tools___skillmap = 'skills___osses___tools___skillmap',
  skills___osses___spaceId = 'skills___osses___spaceId',
  skills___osses___contentful_id = 'skills___osses___contentful_id',
  skills___osses___createdAt = 'skills___osses___createdAt',
  skills___osses___updatedAt = 'skills___osses___updatedAt',
  skills___osses___sys___type = 'skills___osses___sys___type',
  skills___osses___sys___revision = 'skills___osses___sys___revision',
  skills___osses___node_locale = 'skills___osses___node_locale',
  skills___spaceId = 'skills___spaceId',
  skills___contentful_id = 'skills___contentful_id',
  skills___createdAt = 'skills___createdAt',
  skills___updatedAt = 'skills___updatedAt',
  skills___sys___type = 'skills___sys___type',
  skills___sys___revision = 'skills___sys___revision',
  skills___node_locale = 'skills___node_locale',
  skills___projects = 'skills___projects',
  skills___projects___id = 'skills___projects___id',
  skills___projects___parent___id = 'skills___projects___parent___id',
  skills___projects___parent___children = 'skills___projects___parent___children',
  skills___projects___children = 'skills___projects___children',
  skills___projects___children___id = 'skills___projects___children___id',
  skills___projects___children___children = 'skills___projects___children___children',
  skills___projects___internal___content = 'skills___projects___internal___content',
  skills___projects___internal___contentDigest = 'skills___projects___internal___contentDigest',
  skills___projects___internal___description = 'skills___projects___internal___description',
  skills___projects___internal___fieldOwners = 'skills___projects___internal___fieldOwners',
  skills___projects___internal___ignoreType = 'skills___projects___internal___ignoreType',
  skills___projects___internal___mediaType = 'skills___projects___internal___mediaType',
  skills___projects___internal___owner = 'skills___projects___internal___owner',
  skills___projects___internal___type = 'skills___projects___internal___type',
  skills___projects___name = 'skills___projects___name',
  skills___projects___startDate = 'skills___projects___startDate',
  skills___projects___during = 'skills___projects___during',
  skills___projects___comment = 'skills___projects___comment',
  skills___projects___roles = 'skills___projects___roles',
  skills___projects___roles___id = 'skills___projects___roles___id',
  skills___projects___roles___children = 'skills___projects___roles___children',
  skills___projects___roles___name = 'skills___projects___roles___name',
  skills___projects___roles___projects = 'skills___projects___roles___projects',
  skills___projects___roles___osses = 'skills___projects___roles___osses',
  skills___projects___roles___spaceId = 'skills___projects___roles___spaceId',
  skills___projects___roles___contentful_id = 'skills___projects___roles___contentful_id',
  skills___projects___roles___createdAt = 'skills___projects___roles___createdAt',
  skills___projects___roles___updatedAt = 'skills___projects___roles___updatedAt',
  skills___projects___roles___node_locale = 'skills___projects___roles___node_locale',
  skills___projects___assigns = 'skills___projects___assigns',
  skills___projects___assigns___id = 'skills___projects___assigns___id',
  skills___projects___assigns___children = 'skills___projects___assigns___children',
  skills___projects___assigns___name = 'skills___projects___assigns___name',
  skills___projects___assigns___projects = 'skills___projects___assigns___projects',
  skills___projects___assigns___osses = 'skills___projects___assigns___osses',
  skills___projects___assigns___spaceId = 'skills___projects___assigns___spaceId',
  skills___projects___assigns___contentful_id = 'skills___projects___assigns___contentful_id',
  skills___projects___assigns___createdAt = 'skills___projects___assigns___createdAt',
  skills___projects___assigns___updatedAt = 'skills___projects___assigns___updatedAt',
  skills___projects___assigns___node_locale = 'skills___projects___assigns___node_locale',
  skills___projects___systems = 'skills___projects___systems',
  skills___projects___systems___id = 'skills___projects___systems___id',
  skills___projects___systems___children = 'skills___projects___systems___children',
  skills___projects___systems___name = 'skills___projects___systems___name',
  skills___projects___systems___level = 'skills___projects___systems___level',
  skills___projects___systems___osses = 'skills___projects___systems___osses',
  skills___projects___systems___spaceId = 'skills___projects___systems___spaceId',
  skills___projects___systems___contentful_id = 'skills___projects___systems___contentful_id',
  skills___projects___systems___createdAt = 'skills___projects___systems___createdAt',
  skills___projects___systems___updatedAt = 'skills___projects___systems___updatedAt',
  skills___projects___systems___node_locale = 'skills___projects___systems___node_locale',
  skills___projects___systems___projects = 'skills___projects___systems___projects',
  skills___projects___systems___skillmap = 'skills___projects___systems___skillmap',
  skills___projects___languages = 'skills___projects___languages',
  skills___projects___languages___id = 'skills___projects___languages___id',
  skills___projects___languages___children = 'skills___projects___languages___children',
  skills___projects___languages___name = 'skills___projects___languages___name',
  skills___projects___languages___level = 'skills___projects___languages___level',
  skills___projects___languages___osses = 'skills___projects___languages___osses',
  skills___projects___languages___spaceId = 'skills___projects___languages___spaceId',
  skills___projects___languages___contentful_id = 'skills___projects___languages___contentful_id',
  skills___projects___languages___createdAt = 'skills___projects___languages___createdAt',
  skills___projects___languages___updatedAt = 'skills___projects___languages___updatedAt',
  skills___projects___languages___node_locale = 'skills___projects___languages___node_locale',
  skills___projects___languages___projects = 'skills___projects___languages___projects',
  skills___projects___languages___skillmap = 'skills___projects___languages___skillmap',
  skills___projects___tools = 'skills___projects___tools',
  skills___projects___tools___id = 'skills___projects___tools___id',
  skills___projects___tools___children = 'skills___projects___tools___children',
  skills___projects___tools___name = 'skills___projects___tools___name',
  skills___projects___tools___level = 'skills___projects___tools___level',
  skills___projects___tools___osses = 'skills___projects___tools___osses',
  skills___projects___tools___spaceId = 'skills___projects___tools___spaceId',
  skills___projects___tools___contentful_id = 'skills___projects___tools___contentful_id',
  skills___projects___tools___createdAt = 'skills___projects___tools___createdAt',
  skills___projects___tools___updatedAt = 'skills___projects___tools___updatedAt',
  skills___projects___tools___node_locale = 'skills___projects___tools___node_locale',
  skills___projects___tools___projects = 'skills___projects___tools___projects',
  skills___projects___tools___skillmap = 'skills___projects___tools___skillmap',
  skills___projects___image___id = 'skills___projects___image___id',
  skills___projects___image___children = 'skills___projects___image___children',
  skills___projects___image___image = 'skills___projects___image___image',
  skills___projects___spaceId = 'skills___projects___spaceId',
  skills___projects___contentful_id = 'skills___projects___contentful_id',
  skills___projects___createdAt = 'skills___projects___createdAt',
  skills___projects___updatedAt = 'skills___projects___updatedAt',
  skills___projects___sys___type = 'skills___projects___sys___type',
  skills___projects___sys___revision = 'skills___projects___sys___revision',
  skills___projects___node_locale = 'skills___projects___node_locale',
  skills___projects___childContentfulProjectsImageTextNode___id = 'skills___projects___childContentfulProjectsImageTextNode___id',
  skills___projects___childContentfulProjectsImageTextNode___children = 'skills___projects___childContentfulProjectsImageTextNode___children',
  skills___projects___childContentfulProjectsImageTextNode___image = 'skills___projects___childContentfulProjectsImageTextNode___image',
  skills___skillmap = 'skills___skillmap',
  skills___skillmap___id = 'skills___skillmap___id',
  skills___skillmap___parent___id = 'skills___skillmap___parent___id',
  skills___skillmap___parent___children = 'skills___skillmap___parent___children',
  skills___skillmap___children = 'skills___skillmap___children',
  skills___skillmap___children___id = 'skills___skillmap___children___id',
  skills___skillmap___children___children = 'skills___skillmap___children___children',
  skills___skillmap___internal___content = 'skills___skillmap___internal___content',
  skills___skillmap___internal___contentDigest = 'skills___skillmap___internal___contentDigest',
  skills___skillmap___internal___description = 'skills___skillmap___internal___description',
  skills___skillmap___internal___fieldOwners = 'skills___skillmap___internal___fieldOwners',
  skills___skillmap___internal___ignoreType = 'skills___skillmap___internal___ignoreType',
  skills___skillmap___internal___mediaType = 'skills___skillmap___internal___mediaType',
  skills___skillmap___internal___owner = 'skills___skillmap___internal___owner',
  skills___skillmap___internal___type = 'skills___skillmap___internal___type',
  skills___skillmap___name = 'skills___skillmap___name',
  skills___skillmap___skills = 'skills___skillmap___skills',
  skills___skillmap___skills___id = 'skills___skillmap___skills___id',
  skills___skillmap___skills___children = 'skills___skillmap___skills___children',
  skills___skillmap___skills___name = 'skills___skillmap___skills___name',
  skills___skillmap___skills___level = 'skills___skillmap___skills___level',
  skills___skillmap___skills___osses = 'skills___skillmap___skills___osses',
  skills___skillmap___skills___spaceId = 'skills___skillmap___skills___spaceId',
  skills___skillmap___skills___contentful_id = 'skills___skillmap___skills___contentful_id',
  skills___skillmap___skills___createdAt = 'skills___skillmap___skills___createdAt',
  skills___skillmap___skills___updatedAt = 'skills___skillmap___skills___updatedAt',
  skills___skillmap___skills___node_locale = 'skills___skillmap___skills___node_locale',
  skills___skillmap___skills___projects = 'skills___skillmap___skills___projects',
  skills___skillmap___skills___skillmap = 'skills___skillmap___skills___skillmap',
  skills___skillmap___spaceId = 'skills___skillmap___spaceId',
  skills___skillmap___contentful_id = 'skills___skillmap___contentful_id',
  skills___skillmap___createdAt = 'skills___skillmap___createdAt',
  skills___skillmap___updatedAt = 'skills___skillmap___updatedAt',
  skills___skillmap___sys___type = 'skills___skillmap___sys___type',
  skills___skillmap___sys___revision = 'skills___skillmap___sys___revision',
  skills___skillmap___node_locale = 'skills___skillmap___node_locale',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  node_locale = 'node_locale'
}

export type ContentfulSkillMapFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  skills?: Maybe<ContentfulSkillFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillMapSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
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
  childImageSharp___gatsbyImage___imageData = 'childImageSharp___gatsbyImage___imageData',
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
  BASE64 = 'BASE64',
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
  gatsbyImage?: Maybe<ImageSharpGatsbyImage>;
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


export type ImageSharpGatsbyImageArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  tracedSVGOptions?: Maybe<Potrace>;
  webP?: Maybe<Scalars['Boolean']>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
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
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
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
  gatsbyImage___imageData = 'gatsbyImage___imageData',
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
  gatsbyImage?: Maybe<ImageSharpGatsbyImageFilterInput>;
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

export type ImageSharpGatsbyImage = {
  __typename?: 'ImageSharpGatsbyImage';
  imageData: Scalars['JSON'];
};

export type ImageSharpGatsbyImageFilterInput = {
  imageData?: Maybe<JsonQueryOperatorInput>;
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
  contentfulOsSes?: Maybe<ContentfulOsSes>;
  allContentfulOsSes: ContentfulOsSesConnection;
  contentfulHistorysImageTextNode?: Maybe<ContentfulHistorysImageTextNode>;
  allContentfulHistorysImageTextNode: ContentfulHistorysImageTextNodeConnection;
  contentfulHistorys?: Maybe<ContentfulHistorys>;
  allContentfulHistorys: ContentfulHistorysConnection;
  contentfulQualifications?: Maybe<ContentfulQualifications>;
  allContentfulQualifications: ContentfulQualificationsConnection;
  contentfulAssigne?: Maybe<ContentfulAssigne>;
  allContentfulAssigne: ContentfulAssigneConnection;
  contentfulRole?: Maybe<ContentfulRole>;
  allContentfulRole: ContentfulRoleConnection;
  contentfulProjectsImageTextNode?: Maybe<ContentfulProjectsImageTextNode>;
  allContentfulProjectsImageTextNode: ContentfulProjectsImageTextNodeConnection;
  contentfulProjects?: Maybe<ContentfulProjects>;
  allContentfulProjects: ContentfulProjectsConnection;
  contentfulSkillMap?: Maybe<ContentfulSkillMap>;
  allContentfulSkillMap: ContentfulSkillMapConnection;
  contentfulSkill?: Maybe<ContentfulSkill>;
  allContentfulSkill: ContentfulSkillConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
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
  gatsbyImage?: Maybe<ImageSharpGatsbyImageFilterInput>;
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
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
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
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulOsSesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulOsSesSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulOsSesArgs = {
  filter?: Maybe<ContentfulOsSesFilterInput>;
  sort?: Maybe<ContentfulOsSesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHistorysImageTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  image?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulHistorysImageTextNodeSysFilterInput>;
};


export type QueryAllContentfulHistorysImageTextNodeArgs = {
  filter?: Maybe<ContentfulHistorysImageTextNodeFilterInput>;
  sort?: Maybe<ContentfulHistorysImageTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHistorysArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subheader?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulHistorysImageTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHistorysSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulHistorysImageTextNode?: Maybe<ContentfulHistorysImageTextNodeFilterInput>;
};


export type QueryAllContentfulHistorysArgs = {
  filter?: Maybe<ContentfulHistorysFilterInput>;
  sort?: Maybe<ContentfulHistorysSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQualificationsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulQualificationsArgs = {
  filter?: Maybe<ContentfulQualificationsFilterInput>;
  sort?: Maybe<ContentfulQualificationsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssigneArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<ContentfulProjectsFilterListInput>;
  osses?: Maybe<ContentfulOsSesFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAssigneSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulAssigneArgs = {
  filter?: Maybe<ContentfulAssigneFilterInput>;
  sort?: Maybe<ContentfulAssigneSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulRoleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<ContentfulProjectsFilterListInput>;
  osses?: Maybe<ContentfulOsSesFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulRoleSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulRoleArgs = {
  filter?: Maybe<ContentfulRoleFilterInput>;
  sort?: Maybe<ContentfulRoleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProjectsImageTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  image?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectsImageTextNodeSysFilterInput>;
};


export type QueryAllContentfulProjectsImageTextNodeArgs = {
  filter?: Maybe<ContentfulProjectsImageTextNodeFilterInput>;
  sort?: Maybe<ContentfulProjectsImageTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProjectsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  during?: Maybe<IntQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<ContentfulRoleFilterListInput>;
  assigns?: Maybe<ContentfulAssigneFilterListInput>;
  systems?: Maybe<ContentfulSkillFilterListInput>;
  languages?: Maybe<ContentfulSkillFilterListInput>;
  tools?: Maybe<ContentfulSkillFilterListInput>;
  image?: Maybe<ContentfulProjectsImageTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulProjectsImageTextNode?: Maybe<ContentfulProjectsImageTextNodeFilterInput>;
};


export type QueryAllContentfulProjectsArgs = {
  filter?: Maybe<ContentfulProjectsFilterInput>;
  sort?: Maybe<ContentfulProjectsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSkillMapArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  skills?: Maybe<ContentfulSkillFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillMapSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulSkillMapArgs = {
  filter?: Maybe<ContentfulSkillMapFilterInput>;
  sort?: Maybe<ContentfulSkillMapSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSkillArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  level?: Maybe<IntQueryOperatorInput>;
  osses?: Maybe<ContentfulOsSesFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<ContentfulProjectsFilterListInput>;
  skillmap?: Maybe<ContentfulSkillMapFilterListInput>;
};


export type QueryAllContentfulSkillArgs = {
  filter?: Maybe<ContentfulSkillFilterInput>;
  sort?: Maybe<ContentfulSkillSortInput>;
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
  Hello_world_?: Maybe<Scalars['String']>;
  OSSes?: Maybe<SitePageContextI18nResourcesEnTranslationOsSes>;
  contact?: Maybe<SitePageContextI18nResourcesEnTranslationContact>;
  cookie_alert?: Maybe<SitePageContextI18nResourcesEnTranslationCookie_Alert>;
  header?: Maybe<SitePageContextI18nResourcesEnTranslationHeader>;
  hello?: Maybe<SitePageContextI18nResourcesEnTranslationHello>;
  hello_message?: Maybe<Scalars['String']>;
  historys?: Maybe<SitePageContextI18nResourcesEnTranslationHistorys>;
  not_found?: Maybe<SitePageContextI18nResourcesEnTranslationNot_Found>;
  project?: Maybe<SitePageContextI18nResourcesEnTranslationProject>;
  siteMetadata?: Maybe<SitePageContextI18nResourcesEnTranslationSiteMetadata>;
  skill_map?: Maybe<SitePageContextI18nResourcesEnTranslationSkill_Map>;
  what_i_do?: Maybe<SitePageContextI18nResourcesEnTranslationWhat_I_Do>;
};

export type SitePageContextI18nResourcesEnTranslationContact = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationContact';
  email?: Maybe<SitePageContextI18nResourcesEnTranslationContactEmail>;
  key?: Maybe<SitePageContextI18nResourcesEnTranslationContactKey>;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<SitePageContextI18nResourcesEnTranslationContactTwitter>;
};

export type SitePageContextI18nResourcesEnTranslationContactEmail = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationContactEmail';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationContactEmailFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationContactFilterInput = {
  email?: Maybe<SitePageContextI18nResourcesEnTranslationContactEmailFilterInput>;
  key?: Maybe<SitePageContextI18nResourcesEnTranslationContactKeyFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<SitePageContextI18nResourcesEnTranslationContactTwitterFilterInput>;
};

export type SitePageContextI18nResourcesEnTranslationContactKey = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationContactKey';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationContactKeyFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationContactTwitter = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationContactTwitter';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationContactTwitterFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
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
  Hello_world_?: Maybe<StringQueryOperatorInput>;
  OSSes?: Maybe<SitePageContextI18nResourcesEnTranslationOsSesFilterInput>;
  contact?: Maybe<SitePageContextI18nResourcesEnTranslationContactFilterInput>;
  cookie_alert?: Maybe<SitePageContextI18nResourcesEnTranslationCookie_AlertFilterInput>;
  header?: Maybe<SitePageContextI18nResourcesEnTranslationHeaderFilterInput>;
  hello?: Maybe<SitePageContextI18nResourcesEnTranslationHelloFilterInput>;
  hello_message?: Maybe<StringQueryOperatorInput>;
  historys?: Maybe<SitePageContextI18nResourcesEnTranslationHistorysFilterInput>;
  not_found?: Maybe<SitePageContextI18nResourcesEnTranslationNot_FoundFilterInput>;
  project?: Maybe<SitePageContextI18nResourcesEnTranslationProjectFilterInput>;
  siteMetadata?: Maybe<SitePageContextI18nResourcesEnTranslationSiteMetadataFilterInput>;
  skill_map?: Maybe<SitePageContextI18nResourcesEnTranslationSkill_MapFilterInput>;
  what_i_do?: Maybe<SitePageContextI18nResourcesEnTranslationWhat_I_DoFilterInput>;
};

export type SitePageContextI18nResourcesEnTranslationHeader = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationHeader';
  blog_title?: Maybe<Scalars['String']>;
  blog_url?: Maybe<Scalars['String']>;
  changeLanguage_title?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  github_title?: Maybe<Scalars['String']>;
  github_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_home?: Maybe<Scalars['String']>;
  toggleDarkTheme_title?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_url?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationHeaderFilterInput = {
  blog_title?: Maybe<StringQueryOperatorInput>;
  blog_url?: Maybe<StringQueryOperatorInput>;
  changeLanguage_title?: Maybe<StringQueryOperatorInput>;
  contact_title?: Maybe<StringQueryOperatorInput>;
  github_title?: Maybe<StringQueryOperatorInput>;
  github_url?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  title_home?: Maybe<StringQueryOperatorInput>;
  toggleDarkTheme_title?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_url?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationHello = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationHello';
  title?: Maybe<SitePageContextI18nResourcesEnTranslationHelloTitle>;
};

export type SitePageContextI18nResourcesEnTranslationHelloFilterInput = {
  title?: Maybe<SitePageContextI18nResourcesEnTranslationHelloTitleFilterInput>;
};

export type SitePageContextI18nResourcesEnTranslationHelloTitle = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationHelloTitle';
  _1?: Maybe<Scalars['String']>;
  _2?: Maybe<Scalars['String']>;
  _3?: Maybe<Scalars['String']>;
  _4?: Maybe<Scalars['String']>;
  _5?: Maybe<Scalars['String']>;
  _6?: Maybe<Scalars['String']>;
  pref?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationHelloTitleFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>;
  _2?: Maybe<StringQueryOperatorInput>;
  _3?: Maybe<StringQueryOperatorInput>;
  _4?: Maybe<StringQueryOperatorInput>;
  _5?: Maybe<StringQueryOperatorInput>;
  _6?: Maybe<StringQueryOperatorInput>;
  pref?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationHistorys = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationHistorys';
  age?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationHistorysFilterInput = {
  age?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
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

export type SitePageContextI18nResourcesEnTranslationOsSes = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationOSSes';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationOsSesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationProject = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationProject';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationProjectFilterInput = {
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

export type SitePageContextI18nResourcesEnTranslationSkill_Map = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationSkill_map';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationSkill_MapFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationWhat_I_Do = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationWhat_i_do';
  backend_message?: Maybe<Scalars['String']>;
  backend_tags?: Maybe<Scalars['String']>;
  backend_title?: Maybe<Scalars['String']>;
  devops_message?: Maybe<Scalars['String']>;
  devops_tags?: Maybe<Scalars['String']>;
  devops_title?: Maybe<Scalars['String']>;
  frontend_message?: Maybe<Scalars['String']>;
  frontend_tags?: Maybe<Scalars['String']>;
  frontend_title?: Maybe<Scalars['String']>;
  iot_message?: Maybe<Scalars['String']>;
  iot_tags?: Maybe<Scalars['String']>;
  iot_title?: Maybe<Scalars['String']>;
  mechanical_message?: Maybe<Scalars['String']>;
  mechanical_tags?: Maybe<Scalars['String']>;
  mechanical_title?: Maybe<Scalars['String']>;
  security_message?: Maybe<Scalars['String']>;
  security_tags?: Maybe<Scalars['String']>;
  security_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationWhat_I_DoFilterInput = {
  backend_message?: Maybe<StringQueryOperatorInput>;
  backend_tags?: Maybe<StringQueryOperatorInput>;
  backend_title?: Maybe<StringQueryOperatorInput>;
  devops_message?: Maybe<StringQueryOperatorInput>;
  devops_tags?: Maybe<StringQueryOperatorInput>;
  devops_title?: Maybe<StringQueryOperatorInput>;
  frontend_message?: Maybe<StringQueryOperatorInput>;
  frontend_tags?: Maybe<StringQueryOperatorInput>;
  frontend_title?: Maybe<StringQueryOperatorInput>;
  iot_message?: Maybe<StringQueryOperatorInput>;
  iot_tags?: Maybe<StringQueryOperatorInput>;
  iot_title?: Maybe<StringQueryOperatorInput>;
  mechanical_message?: Maybe<StringQueryOperatorInput>;
  mechanical_tags?: Maybe<StringQueryOperatorInput>;
  mechanical_title?: Maybe<StringQueryOperatorInput>;
  security_message?: Maybe<StringQueryOperatorInput>;
  security_tags?: Maybe<StringQueryOperatorInput>;
  security_title?: Maybe<StringQueryOperatorInput>;
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
  Hello_world_?: Maybe<Scalars['String']>;
  OSSes?: Maybe<SitePageContextI18nResourcesJaTranslationOsSes>;
  contact?: Maybe<SitePageContextI18nResourcesJaTranslationContact>;
  cookie_alert?: Maybe<SitePageContextI18nResourcesJaTranslationCookie_Alert>;
  header?: Maybe<SitePageContextI18nResourcesJaTranslationHeader>;
  hello?: Maybe<SitePageContextI18nResourcesJaTranslationHello>;
  hello_message?: Maybe<Scalars['String']>;
  historys?: Maybe<SitePageContextI18nResourcesJaTranslationHistorys>;
  not_found?: Maybe<SitePageContextI18nResourcesJaTranslationNot_Found>;
  project?: Maybe<SitePageContextI18nResourcesJaTranslationProject>;
  siteMetadata?: Maybe<SitePageContextI18nResourcesJaTranslationSiteMetadata>;
  skill_map?: Maybe<SitePageContextI18nResourcesJaTranslationSkill_Map>;
  what_i_do?: Maybe<SitePageContextI18nResourcesJaTranslationWhat_I_Do>;
};

export type SitePageContextI18nResourcesJaTranslationContact = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationContact';
  email?: Maybe<SitePageContextI18nResourcesJaTranslationContactEmail>;
  key?: Maybe<SitePageContextI18nResourcesJaTranslationContactKey>;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<SitePageContextI18nResourcesJaTranslationContactTwitter>;
};

export type SitePageContextI18nResourcesJaTranslationContactEmail = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationContactEmail';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationContactEmailFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationContactFilterInput = {
  email?: Maybe<SitePageContextI18nResourcesJaTranslationContactEmailFilterInput>;
  key?: Maybe<SitePageContextI18nResourcesJaTranslationContactKeyFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<SitePageContextI18nResourcesJaTranslationContactTwitterFilterInput>;
};

export type SitePageContextI18nResourcesJaTranslationContactKey = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationContactKey';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationContactKeyFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationContactTwitter = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationContactTwitter';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationContactTwitterFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
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
  Hello_world_?: Maybe<StringQueryOperatorInput>;
  OSSes?: Maybe<SitePageContextI18nResourcesJaTranslationOsSesFilterInput>;
  contact?: Maybe<SitePageContextI18nResourcesJaTranslationContactFilterInput>;
  cookie_alert?: Maybe<SitePageContextI18nResourcesJaTranslationCookie_AlertFilterInput>;
  header?: Maybe<SitePageContextI18nResourcesJaTranslationHeaderFilterInput>;
  hello?: Maybe<SitePageContextI18nResourcesJaTranslationHelloFilterInput>;
  hello_message?: Maybe<StringQueryOperatorInput>;
  historys?: Maybe<SitePageContextI18nResourcesJaTranslationHistorysFilterInput>;
  not_found?: Maybe<SitePageContextI18nResourcesJaTranslationNot_FoundFilterInput>;
  project?: Maybe<SitePageContextI18nResourcesJaTranslationProjectFilterInput>;
  siteMetadata?: Maybe<SitePageContextI18nResourcesJaTranslationSiteMetadataFilterInput>;
  skill_map?: Maybe<SitePageContextI18nResourcesJaTranslationSkill_MapFilterInput>;
  what_i_do?: Maybe<SitePageContextI18nResourcesJaTranslationWhat_I_DoFilterInput>;
};

export type SitePageContextI18nResourcesJaTranslationHeader = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationHeader';
  blog_title?: Maybe<Scalars['String']>;
  blog_url?: Maybe<Scalars['String']>;
  changeLanguage_title?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  github_title?: Maybe<Scalars['String']>;
  github_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_home?: Maybe<Scalars['String']>;
  toggleDarkTheme_title?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_url?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationHeaderFilterInput = {
  blog_title?: Maybe<StringQueryOperatorInput>;
  blog_url?: Maybe<StringQueryOperatorInput>;
  changeLanguage_title?: Maybe<StringQueryOperatorInput>;
  contact_title?: Maybe<StringQueryOperatorInput>;
  github_title?: Maybe<StringQueryOperatorInput>;
  github_url?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  title_home?: Maybe<StringQueryOperatorInput>;
  toggleDarkTheme_title?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_url?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationHello = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationHello';
  title?: Maybe<SitePageContextI18nResourcesJaTranslationHelloTitle>;
};

export type SitePageContextI18nResourcesJaTranslationHelloFilterInput = {
  title?: Maybe<SitePageContextI18nResourcesJaTranslationHelloTitleFilterInput>;
};

export type SitePageContextI18nResourcesJaTranslationHelloTitle = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationHelloTitle';
  _1?: Maybe<Scalars['String']>;
  _2?: Maybe<Scalars['String']>;
  _3?: Maybe<Scalars['String']>;
  _4?: Maybe<Scalars['String']>;
  _5?: Maybe<Scalars['String']>;
  _6?: Maybe<Scalars['String']>;
  pref?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationHelloTitleFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>;
  _2?: Maybe<StringQueryOperatorInput>;
  _3?: Maybe<StringQueryOperatorInput>;
  _4?: Maybe<StringQueryOperatorInput>;
  _5?: Maybe<StringQueryOperatorInput>;
  _6?: Maybe<StringQueryOperatorInput>;
  pref?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationHistorys = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationHistorys';
  age?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationHistorysFilterInput = {
  age?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
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

export type SitePageContextI18nResourcesJaTranslationOsSes = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationOSSes';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationOsSesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationProject = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationProject';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationProjectFilterInput = {
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

export type SitePageContextI18nResourcesJaTranslationSkill_Map = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationSkill_map';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationSkill_MapFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationWhat_I_Do = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationWhat_i_do';
  backend_message?: Maybe<Scalars['String']>;
  backend_tags?: Maybe<Scalars['String']>;
  backend_title?: Maybe<Scalars['String']>;
  devops_message?: Maybe<Scalars['String']>;
  devops_tags?: Maybe<Scalars['String']>;
  devops_title?: Maybe<Scalars['String']>;
  frontend_message?: Maybe<Scalars['String']>;
  frontend_tags?: Maybe<Scalars['String']>;
  frontend_title?: Maybe<Scalars['String']>;
  iot_message?: Maybe<Scalars['String']>;
  iot_tags?: Maybe<Scalars['String']>;
  iot_title?: Maybe<Scalars['String']>;
  mechanical_message?: Maybe<Scalars['String']>;
  mechanical_tags?: Maybe<Scalars['String']>;
  mechanical_title?: Maybe<Scalars['String']>;
  security_message?: Maybe<Scalars['String']>;
  security_tags?: Maybe<Scalars['String']>;
  security_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationWhat_I_DoFilterInput = {
  backend_message?: Maybe<StringQueryOperatorInput>;
  backend_tags?: Maybe<StringQueryOperatorInput>;
  backend_title?: Maybe<StringQueryOperatorInput>;
  devops_message?: Maybe<StringQueryOperatorInput>;
  devops_tags?: Maybe<StringQueryOperatorInput>;
  devops_title?: Maybe<StringQueryOperatorInput>;
  frontend_message?: Maybe<StringQueryOperatorInput>;
  frontend_tags?: Maybe<StringQueryOperatorInput>;
  frontend_title?: Maybe<StringQueryOperatorInput>;
  iot_message?: Maybe<StringQueryOperatorInput>;
  iot_tags?: Maybe<StringQueryOperatorInput>;
  iot_title?: Maybe<StringQueryOperatorInput>;
  mechanical_message?: Maybe<StringQueryOperatorInput>;
  mechanical_tags?: Maybe<StringQueryOperatorInput>;
  mechanical_title?: Maybe<StringQueryOperatorInput>;
  security_message?: Maybe<StringQueryOperatorInput>;
  security_tags?: Maybe<StringQueryOperatorInput>;
  security_title?: Maybe<StringQueryOperatorInput>;
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

export type HistoriesDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HistoriesDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulHistorys: (
    { __typename?: 'ContentfulHistorysConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulHistorysEdge' }
      & { node: (
        { __typename?: 'ContentfulHistorys' }
        & Pick<ContentfulHistorys, 'id' | 'node_locale' | 'date' | 'title' | 'subheader'>
        & { image?: Maybe<(
          { __typename?: 'contentfulHistorysImageTextNode' }
          & Pick<ContentfulHistorysImageTextNode, 'image'>
        )> }
      ) }
    )> }
  ) }
);

export type OsSesDataQueryVariables = Exact<{ [key: string]: never; }>;


export type OsSesDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulOsSes: (
    { __typename?: 'ContentfulOsSesConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulOsSesEdge' }
      & { node: (
        { __typename?: 'ContentfulOsSes' }
        & Pick<ContentfulOsSes, 'id' | 'node_locale' | 'name' | 'slug' | 'startDate' | 'during' | 'comment' | 'siteUrl' | 'sourceUrl'>
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

export type ProjectsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulProjects: (
    { __typename?: 'ContentfulProjectsConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulProjectsEdge' }
      & { node: (
        { __typename?: 'ContentfulProjects' }
        & Pick<ContentfulProjects, 'id' | 'node_locale' | 'name' | 'startDate' | 'during' | 'comment'>
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
        )>>>, image?: Maybe<(
          { __typename?: 'contentfulProjectsImageTextNode' }
          & Pick<ContentfulProjectsImageTextNode, 'image'>
        )> }
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
        & Pick<ContentfulSkillMap, 'id' | 'name' | 'node_locale'>
        & { skills?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'id' | 'level' | 'name'>
        )>>> }
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
