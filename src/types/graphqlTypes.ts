export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<ContentfulAssetFields>;
  file?: Maybe<ContentfulAssetFile>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  internal: Internal;
  localFile?: Maybe<File>;
  node_locale?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']>;
  svg?: Maybe<InlineSvg>;
  sys?: Maybe<ContentfulAssetSys>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulAssetCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  resizingBehavior?: InputMaybe<ImageResizingBehavior>;
  sizes?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulAssetEdge>;
  group: Array<ContentfulAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFields = {
  localFile?: Maybe<Scalars['String']>;
};

export enum ContentfulAssetFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Description = 'description',
  FieldsLocalFile = 'fields___localFile',
  FileContentType = 'file___contentType',
  FileDetailsImageHeight = 'file___details___image___height',
  FileDetailsImageWidth = 'file___details___image___width',
  FileDetailsSize = 'file___details___size',
  FileFileName = 'file___fileName',
  FileUrl = 'file___url',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  LocalFileAbsolutePath = 'localFile___absolutePath',
  LocalFileAccessTime = 'localFile___accessTime',
  LocalFileAtime = 'localFile___atime',
  LocalFileAtimeMs = 'localFile___atimeMs',
  LocalFileBase = 'localFile___base',
  LocalFileBirthTime = 'localFile___birthTime',
  LocalFileBirthtime = 'localFile___birthtime',
  LocalFileBirthtimeMs = 'localFile___birthtimeMs',
  LocalFileBlksize = 'localFile___blksize',
  LocalFileBlocks = 'localFile___blocks',
  LocalFileChangeTime = 'localFile___changeTime',
  LocalFileChildImageSharpChildren = 'localFile___childImageSharp___children',
  LocalFileChildImageSharpChildrenChildren = 'localFile___childImageSharp___children___children',
  LocalFileChildImageSharpChildrenId = 'localFile___childImageSharp___children___id',
  LocalFileChildImageSharpFixedAspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  LocalFileChildImageSharpFixedBase64 = 'localFile___childImageSharp___fixed___base64',
  LocalFileChildImageSharpFixedHeight = 'localFile___childImageSharp___fixed___height',
  LocalFileChildImageSharpFixedOriginalName = 'localFile___childImageSharp___fixed___originalName',
  LocalFileChildImageSharpFixedSrc = 'localFile___childImageSharp___fixed___src',
  LocalFileChildImageSharpFixedSrcSet = 'localFile___childImageSharp___fixed___srcSet',
  LocalFileChildImageSharpFixedSrcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  LocalFileChildImageSharpFixedSrcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  LocalFileChildImageSharpFixedTracedSvg = 'localFile___childImageSharp___fixed___tracedSVG',
  LocalFileChildImageSharpFixedWidth = 'localFile___childImageSharp___fixed___width',
  LocalFileChildImageSharpFluidAspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  LocalFileChildImageSharpFluidBase64 = 'localFile___childImageSharp___fluid___base64',
  LocalFileChildImageSharpFluidOriginalImg = 'localFile___childImageSharp___fluid___originalImg',
  LocalFileChildImageSharpFluidOriginalName = 'localFile___childImageSharp___fluid___originalName',
  LocalFileChildImageSharpFluidPresentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  LocalFileChildImageSharpFluidPresentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  LocalFileChildImageSharpFluidSizes = 'localFile___childImageSharp___fluid___sizes',
  LocalFileChildImageSharpFluidSrc = 'localFile___childImageSharp___fluid___src',
  LocalFileChildImageSharpFluidSrcSet = 'localFile___childImageSharp___fluid___srcSet',
  LocalFileChildImageSharpFluidSrcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  LocalFileChildImageSharpFluidSrcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  LocalFileChildImageSharpFluidTracedSvg = 'localFile___childImageSharp___fluid___tracedSVG',
  LocalFileChildImageSharpGatsbyImageData = 'localFile___childImageSharp___gatsbyImageData',
  LocalFileChildImageSharpId = 'localFile___childImageSharp___id',
  LocalFileChildImageSharpInternalContent = 'localFile___childImageSharp___internal___content',
  LocalFileChildImageSharpInternalContentDigest = 'localFile___childImageSharp___internal___contentDigest',
  LocalFileChildImageSharpInternalDescription = 'localFile___childImageSharp___internal___description',
  LocalFileChildImageSharpInternalFieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  LocalFileChildImageSharpInternalIgnoreType = 'localFile___childImageSharp___internal___ignoreType',
  LocalFileChildImageSharpInternalMediaType = 'localFile___childImageSharp___internal___mediaType',
  LocalFileChildImageSharpInternalOwner = 'localFile___childImageSharp___internal___owner',
  LocalFileChildImageSharpInternalType = 'localFile___childImageSharp___internal___type',
  LocalFileChildImageSharpOriginalHeight = 'localFile___childImageSharp___original___height',
  LocalFileChildImageSharpOriginalSrc = 'localFile___childImageSharp___original___src',
  LocalFileChildImageSharpOriginalWidth = 'localFile___childImageSharp___original___width',
  LocalFileChildImageSharpParentChildren = 'localFile___childImageSharp___parent___children',
  LocalFileChildImageSharpParentId = 'localFile___childImageSharp___parent___id',
  LocalFileChildImageSharpResizeAspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  LocalFileChildImageSharpResizeHeight = 'localFile___childImageSharp___resize___height',
  LocalFileChildImageSharpResizeOriginalName = 'localFile___childImageSharp___resize___originalName',
  LocalFileChildImageSharpResizeSrc = 'localFile___childImageSharp___resize___src',
  LocalFileChildImageSharpResizeTracedSvg = 'localFile___childImageSharp___resize___tracedSVG',
  LocalFileChildImageSharpResizeWidth = 'localFile___childImageSharp___resize___width',
  LocalFileChildLocaleChildren = 'localFile___childLocale___children',
  LocalFileChildLocaleChildrenChildren = 'localFile___childLocale___children___children',
  LocalFileChildLocaleChildrenId = 'localFile___childLocale___children___id',
  LocalFileChildLocaleData = 'localFile___childLocale___data',
  LocalFileChildLocaleFileAbsolutePath = 'localFile___childLocale___fileAbsolutePath',
  LocalFileChildLocaleId = 'localFile___childLocale___id',
  LocalFileChildLocaleInternalContent = 'localFile___childLocale___internal___content',
  LocalFileChildLocaleInternalContentDigest = 'localFile___childLocale___internal___contentDigest',
  LocalFileChildLocaleInternalDescription = 'localFile___childLocale___internal___description',
  LocalFileChildLocaleInternalFieldOwners = 'localFile___childLocale___internal___fieldOwners',
  LocalFileChildLocaleInternalIgnoreType = 'localFile___childLocale___internal___ignoreType',
  LocalFileChildLocaleInternalMediaType = 'localFile___childLocale___internal___mediaType',
  LocalFileChildLocaleInternalOwner = 'localFile___childLocale___internal___owner',
  LocalFileChildLocaleInternalType = 'localFile___childLocale___internal___type',
  LocalFileChildLocaleLanguage = 'localFile___childLocale___language',
  LocalFileChildLocaleNs = 'localFile___childLocale___ns',
  LocalFileChildLocaleParentChildren = 'localFile___childLocale___parent___children',
  LocalFileChildLocaleParentId = 'localFile___childLocale___parent___id',
  LocalFileChildren = 'localFile___children',
  LocalFileChildrenImageSharp = 'localFile___childrenImageSharp',
  LocalFileChildrenImageSharpChildren = 'localFile___childrenImageSharp___children',
  LocalFileChildrenImageSharpChildrenChildren = 'localFile___childrenImageSharp___children___children',
  LocalFileChildrenImageSharpChildrenId = 'localFile___childrenImageSharp___children___id',
  LocalFileChildrenImageSharpFixedAspectRatio = 'localFile___childrenImageSharp___fixed___aspectRatio',
  LocalFileChildrenImageSharpFixedBase64 = 'localFile___childrenImageSharp___fixed___base64',
  LocalFileChildrenImageSharpFixedHeight = 'localFile___childrenImageSharp___fixed___height',
  LocalFileChildrenImageSharpFixedOriginalName = 'localFile___childrenImageSharp___fixed___originalName',
  LocalFileChildrenImageSharpFixedSrc = 'localFile___childrenImageSharp___fixed___src',
  LocalFileChildrenImageSharpFixedSrcSet = 'localFile___childrenImageSharp___fixed___srcSet',
  LocalFileChildrenImageSharpFixedSrcSetWebp = 'localFile___childrenImageSharp___fixed___srcSetWebp',
  LocalFileChildrenImageSharpFixedSrcWebp = 'localFile___childrenImageSharp___fixed___srcWebp',
  LocalFileChildrenImageSharpFixedTracedSvg = 'localFile___childrenImageSharp___fixed___tracedSVG',
  LocalFileChildrenImageSharpFixedWidth = 'localFile___childrenImageSharp___fixed___width',
  LocalFileChildrenImageSharpFluidAspectRatio = 'localFile___childrenImageSharp___fluid___aspectRatio',
  LocalFileChildrenImageSharpFluidBase64 = 'localFile___childrenImageSharp___fluid___base64',
  LocalFileChildrenImageSharpFluidOriginalImg = 'localFile___childrenImageSharp___fluid___originalImg',
  LocalFileChildrenImageSharpFluidOriginalName = 'localFile___childrenImageSharp___fluid___originalName',
  LocalFileChildrenImageSharpFluidPresentationHeight = 'localFile___childrenImageSharp___fluid___presentationHeight',
  LocalFileChildrenImageSharpFluidPresentationWidth = 'localFile___childrenImageSharp___fluid___presentationWidth',
  LocalFileChildrenImageSharpFluidSizes = 'localFile___childrenImageSharp___fluid___sizes',
  LocalFileChildrenImageSharpFluidSrc = 'localFile___childrenImageSharp___fluid___src',
  LocalFileChildrenImageSharpFluidSrcSet = 'localFile___childrenImageSharp___fluid___srcSet',
  LocalFileChildrenImageSharpFluidSrcSetWebp = 'localFile___childrenImageSharp___fluid___srcSetWebp',
  LocalFileChildrenImageSharpFluidSrcWebp = 'localFile___childrenImageSharp___fluid___srcWebp',
  LocalFileChildrenImageSharpFluidTracedSvg = 'localFile___childrenImageSharp___fluid___tracedSVG',
  LocalFileChildrenImageSharpGatsbyImageData = 'localFile___childrenImageSharp___gatsbyImageData',
  LocalFileChildrenImageSharpId = 'localFile___childrenImageSharp___id',
  LocalFileChildrenImageSharpInternalContent = 'localFile___childrenImageSharp___internal___content',
  LocalFileChildrenImageSharpInternalContentDigest = 'localFile___childrenImageSharp___internal___contentDigest',
  LocalFileChildrenImageSharpInternalDescription = 'localFile___childrenImageSharp___internal___description',
  LocalFileChildrenImageSharpInternalFieldOwners = 'localFile___childrenImageSharp___internal___fieldOwners',
  LocalFileChildrenImageSharpInternalIgnoreType = 'localFile___childrenImageSharp___internal___ignoreType',
  LocalFileChildrenImageSharpInternalMediaType = 'localFile___childrenImageSharp___internal___mediaType',
  LocalFileChildrenImageSharpInternalOwner = 'localFile___childrenImageSharp___internal___owner',
  LocalFileChildrenImageSharpInternalType = 'localFile___childrenImageSharp___internal___type',
  LocalFileChildrenImageSharpOriginalHeight = 'localFile___childrenImageSharp___original___height',
  LocalFileChildrenImageSharpOriginalSrc = 'localFile___childrenImageSharp___original___src',
  LocalFileChildrenImageSharpOriginalWidth = 'localFile___childrenImageSharp___original___width',
  LocalFileChildrenImageSharpParentChildren = 'localFile___childrenImageSharp___parent___children',
  LocalFileChildrenImageSharpParentId = 'localFile___childrenImageSharp___parent___id',
  LocalFileChildrenImageSharpResizeAspectRatio = 'localFile___childrenImageSharp___resize___aspectRatio',
  LocalFileChildrenImageSharpResizeHeight = 'localFile___childrenImageSharp___resize___height',
  LocalFileChildrenImageSharpResizeOriginalName = 'localFile___childrenImageSharp___resize___originalName',
  LocalFileChildrenImageSharpResizeSrc = 'localFile___childrenImageSharp___resize___src',
  LocalFileChildrenImageSharpResizeTracedSvg = 'localFile___childrenImageSharp___resize___tracedSVG',
  LocalFileChildrenImageSharpResizeWidth = 'localFile___childrenImageSharp___resize___width',
  LocalFileChildrenLocale = 'localFile___childrenLocale',
  LocalFileChildrenLocaleChildren = 'localFile___childrenLocale___children',
  LocalFileChildrenLocaleChildrenChildren = 'localFile___childrenLocale___children___children',
  LocalFileChildrenLocaleChildrenId = 'localFile___childrenLocale___children___id',
  LocalFileChildrenLocaleData = 'localFile___childrenLocale___data',
  LocalFileChildrenLocaleFileAbsolutePath = 'localFile___childrenLocale___fileAbsolutePath',
  LocalFileChildrenLocaleId = 'localFile___childrenLocale___id',
  LocalFileChildrenLocaleInternalContent = 'localFile___childrenLocale___internal___content',
  LocalFileChildrenLocaleInternalContentDigest = 'localFile___childrenLocale___internal___contentDigest',
  LocalFileChildrenLocaleInternalDescription = 'localFile___childrenLocale___internal___description',
  LocalFileChildrenLocaleInternalFieldOwners = 'localFile___childrenLocale___internal___fieldOwners',
  LocalFileChildrenLocaleInternalIgnoreType = 'localFile___childrenLocale___internal___ignoreType',
  LocalFileChildrenLocaleInternalMediaType = 'localFile___childrenLocale___internal___mediaType',
  LocalFileChildrenLocaleInternalOwner = 'localFile___childrenLocale___internal___owner',
  LocalFileChildrenLocaleInternalType = 'localFile___childrenLocale___internal___type',
  LocalFileChildrenLocaleLanguage = 'localFile___childrenLocale___language',
  LocalFileChildrenLocaleNs = 'localFile___childrenLocale___ns',
  LocalFileChildrenLocaleParentChildren = 'localFile___childrenLocale___parent___children',
  LocalFileChildrenLocaleParentId = 'localFile___childrenLocale___parent___id',
  LocalFileChildrenChildren = 'localFile___children___children',
  LocalFileChildrenChildrenChildren = 'localFile___children___children___children',
  LocalFileChildrenChildrenId = 'localFile___children___children___id',
  LocalFileChildrenId = 'localFile___children___id',
  LocalFileChildrenInternalContent = 'localFile___children___internal___content',
  LocalFileChildrenInternalContentDigest = 'localFile___children___internal___contentDigest',
  LocalFileChildrenInternalDescription = 'localFile___children___internal___description',
  LocalFileChildrenInternalFieldOwners = 'localFile___children___internal___fieldOwners',
  LocalFileChildrenInternalIgnoreType = 'localFile___children___internal___ignoreType',
  LocalFileChildrenInternalMediaType = 'localFile___children___internal___mediaType',
  LocalFileChildrenInternalOwner = 'localFile___children___internal___owner',
  LocalFileChildrenInternalType = 'localFile___children___internal___type',
  LocalFileChildrenParentChildren = 'localFile___children___parent___children',
  LocalFileChildrenParentId = 'localFile___children___parent___id',
  LocalFileCtime = 'localFile___ctime',
  LocalFileCtimeMs = 'localFile___ctimeMs',
  LocalFileDev = 'localFile___dev',
  LocalFileDir = 'localFile___dir',
  LocalFileExt = 'localFile___ext',
  LocalFileExtension = 'localFile___extension',
  LocalFileGid = 'localFile___gid',
  LocalFileId = 'localFile___id',
  LocalFileIno = 'localFile___ino',
  LocalFileInternalContent = 'localFile___internal___content',
  LocalFileInternalContentDigest = 'localFile___internal___contentDigest',
  LocalFileInternalDescription = 'localFile___internal___description',
  LocalFileInternalFieldOwners = 'localFile___internal___fieldOwners',
  LocalFileInternalIgnoreType = 'localFile___internal___ignoreType',
  LocalFileInternalMediaType = 'localFile___internal___mediaType',
  LocalFileInternalOwner = 'localFile___internal___owner',
  LocalFileInternalType = 'localFile___internal___type',
  LocalFileMode = 'localFile___mode',
  LocalFileModifiedTime = 'localFile___modifiedTime',
  LocalFileMtime = 'localFile___mtime',
  LocalFileMtimeMs = 'localFile___mtimeMs',
  LocalFileName = 'localFile___name',
  LocalFileNlink = 'localFile___nlink',
  LocalFileParentChildren = 'localFile___parent___children',
  LocalFileParentChildrenChildren = 'localFile___parent___children___children',
  LocalFileParentChildrenId = 'localFile___parent___children___id',
  LocalFileParentId = 'localFile___parent___id',
  LocalFileParentInternalContent = 'localFile___parent___internal___content',
  LocalFileParentInternalContentDigest = 'localFile___parent___internal___contentDigest',
  LocalFileParentInternalDescription = 'localFile___parent___internal___description',
  LocalFileParentInternalFieldOwners = 'localFile___parent___internal___fieldOwners',
  LocalFileParentInternalIgnoreType = 'localFile___parent___internal___ignoreType',
  LocalFileParentInternalMediaType = 'localFile___parent___internal___mediaType',
  LocalFileParentInternalOwner = 'localFile___parent___internal___owner',
  LocalFileParentInternalType = 'localFile___parent___internal___type',
  LocalFileParentParentChildren = 'localFile___parent___parent___children',
  LocalFileParentParentId = 'localFile___parent___parent___id',
  LocalFilePrettySize = 'localFile___prettySize',
  LocalFilePublicUrl = 'localFile___publicURL',
  LocalFileRdev = 'localFile___rdev',
  LocalFileRelativeDirectory = 'localFile___relativeDirectory',
  LocalFileRelativePath = 'localFile___relativePath',
  LocalFileRoot = 'localFile___root',
  LocalFileSize = 'localFile___size',
  LocalFileSourceInstanceName = 'localFile___sourceInstanceName',
  LocalFileUid = 'localFile___uid',
  LocalFileUrl = 'localFile___url',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ContentfulAssetFieldsFilterInput = {
  localFile?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFile = {
  contentType?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  image?: Maybe<ContentfulAssetFileDetailsImage>;
  size?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  image?: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsImage = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  contentType?: InputMaybe<StringQueryOperatorInput>;
  details?: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<ContentfulAssetFieldsFilterInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  localFile?: InputMaybe<FileFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulAssetGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulAssetEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSysFilterInput = {
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogAuthor = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
};

export type ContentfulBlogAuthorConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulBlogAuthorEdge>;
  group: Array<ContentfulBlogAuthorGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulBlogAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulBlogAuthorConnectionDistinctArgs = {
  field: ContentfulBlogAuthorFieldsEnum;
};


export type ContentfulBlogAuthorConnectionGroupArgs = {
  field: ContentfulBlogAuthorFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogAuthorConnectionMaxArgs = {
  field: ContentfulBlogAuthorFieldsEnum;
};


export type ContentfulBlogAuthorConnectionMinArgs = {
  field: ContentfulBlogAuthorFieldsEnum;
};


export type ContentfulBlogAuthorConnectionSumArgs = {
  field: ContentfulBlogAuthorFieldsEnum;
};

export type ContentfulBlogAuthorEdge = {
  next?: Maybe<ContentfulBlogAuthor>;
  node: ContentfulBlogAuthor;
  previous?: Maybe<ContentfulBlogAuthor>;
};

export enum ContentfulBlogAuthorFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type ContentfulBlogAuthorFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type ContentfulBlogAuthorGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulBlogAuthorEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulBlogAuthorGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulBlogAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulBlogAuthorGroupConnectionDistinctArgs = {
  field: ContentfulBlogAuthorFieldsEnum;
};


export type ContentfulBlogAuthorGroupConnectionGroupArgs = {
  field: ContentfulBlogAuthorFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogAuthorGroupConnectionMaxArgs = {
  field: ContentfulBlogAuthorFieldsEnum;
};


export type ContentfulBlogAuthorGroupConnectionMinArgs = {
  field: ContentfulBlogAuthorFieldsEnum;
};


export type ContentfulBlogAuthorGroupConnectionSumArgs = {
  field: ContentfulBlogAuthorFieldsEnum;
};

export type ContentfulBlogAuthorSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulBlogAuthorFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContact = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  href?: Maybe<Scalars['String']>;
  icon?: Maybe<ContentfulIcon>;
  iconSvgDark?: Maybe<ContentfulAsset>;
  iconSvgLight?: Maybe<ContentfulAsset>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  sortKey?: Maybe<Scalars['Int']>;
  spaceId?: Maybe<Scalars['String']>;
  subName?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContactSys>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulContactCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulContactUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulContactConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContactEdge>;
  group: Array<ContentfulContactGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContact>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContactConnectionDistinctArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactConnectionGroupArgs = {
  field: ContentfulContactFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulContactConnectionMaxArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactConnectionMinArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactConnectionSumArgs = {
  field: ContentfulContactFieldsEnum;
};

export type ContentfulContactEdge = {
  next?: Maybe<ContentfulContact>;
  node: ContentfulContact;
  previous?: Maybe<ContentfulContact>;
};

export enum ContentfulContactFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Href = 'href',
  IconSvgDarkChildren = 'iconSvgDark___children',
  IconSvgDarkChildrenChildren = 'iconSvgDark___children___children',
  IconSvgDarkChildrenChildrenChildren = 'iconSvgDark___children___children___children',
  IconSvgDarkChildrenChildrenId = 'iconSvgDark___children___children___id',
  IconSvgDarkChildrenId = 'iconSvgDark___children___id',
  IconSvgDarkChildrenInternalContent = 'iconSvgDark___children___internal___content',
  IconSvgDarkChildrenInternalContentDigest = 'iconSvgDark___children___internal___contentDigest',
  IconSvgDarkChildrenInternalDescription = 'iconSvgDark___children___internal___description',
  IconSvgDarkChildrenInternalFieldOwners = 'iconSvgDark___children___internal___fieldOwners',
  IconSvgDarkChildrenInternalIgnoreType = 'iconSvgDark___children___internal___ignoreType',
  IconSvgDarkChildrenInternalMediaType = 'iconSvgDark___children___internal___mediaType',
  IconSvgDarkChildrenInternalOwner = 'iconSvgDark___children___internal___owner',
  IconSvgDarkChildrenInternalType = 'iconSvgDark___children___internal___type',
  IconSvgDarkChildrenParentChildren = 'iconSvgDark___children___parent___children',
  IconSvgDarkChildrenParentId = 'iconSvgDark___children___parent___id',
  IconSvgDarkContentfulId = 'iconSvgDark___contentful_id',
  IconSvgDarkCreatedAt = 'iconSvgDark___createdAt',
  IconSvgDarkDescription = 'iconSvgDark___description',
  IconSvgDarkFieldsLocalFile = 'iconSvgDark___fields___localFile',
  IconSvgDarkFileContentType = 'iconSvgDark___file___contentType',
  IconSvgDarkFileDetailsSize = 'iconSvgDark___file___details___size',
  IconSvgDarkFileFileName = 'iconSvgDark___file___fileName',
  IconSvgDarkFileUrl = 'iconSvgDark___file___url',
  IconSvgDarkGatsbyImageData = 'iconSvgDark___gatsbyImageData',
  IconSvgDarkId = 'iconSvgDark___id',
  IconSvgDarkInternalContent = 'iconSvgDark___internal___content',
  IconSvgDarkInternalContentDigest = 'iconSvgDark___internal___contentDigest',
  IconSvgDarkInternalDescription = 'iconSvgDark___internal___description',
  IconSvgDarkInternalFieldOwners = 'iconSvgDark___internal___fieldOwners',
  IconSvgDarkInternalIgnoreType = 'iconSvgDark___internal___ignoreType',
  IconSvgDarkInternalMediaType = 'iconSvgDark___internal___mediaType',
  IconSvgDarkInternalOwner = 'iconSvgDark___internal___owner',
  IconSvgDarkInternalType = 'iconSvgDark___internal___type',
  IconSvgDarkLocalFileAbsolutePath = 'iconSvgDark___localFile___absolutePath',
  IconSvgDarkLocalFileAccessTime = 'iconSvgDark___localFile___accessTime',
  IconSvgDarkLocalFileAtime = 'iconSvgDark___localFile___atime',
  IconSvgDarkLocalFileAtimeMs = 'iconSvgDark___localFile___atimeMs',
  IconSvgDarkLocalFileBase = 'iconSvgDark___localFile___base',
  IconSvgDarkLocalFileBirthTime = 'iconSvgDark___localFile___birthTime',
  IconSvgDarkLocalFileBirthtime = 'iconSvgDark___localFile___birthtime',
  IconSvgDarkLocalFileBirthtimeMs = 'iconSvgDark___localFile___birthtimeMs',
  IconSvgDarkLocalFileBlksize = 'iconSvgDark___localFile___blksize',
  IconSvgDarkLocalFileBlocks = 'iconSvgDark___localFile___blocks',
  IconSvgDarkLocalFileChangeTime = 'iconSvgDark___localFile___changeTime',
  IconSvgDarkLocalFileChildImageSharpChildren = 'iconSvgDark___localFile___childImageSharp___children',
  IconSvgDarkLocalFileChildImageSharpGatsbyImageData = 'iconSvgDark___localFile___childImageSharp___gatsbyImageData',
  IconSvgDarkLocalFileChildImageSharpId = 'iconSvgDark___localFile___childImageSharp___id',
  IconSvgDarkLocalFileChildLocaleChildren = 'iconSvgDark___localFile___childLocale___children',
  IconSvgDarkLocalFileChildLocaleData = 'iconSvgDark___localFile___childLocale___data',
  IconSvgDarkLocalFileChildLocaleFileAbsolutePath = 'iconSvgDark___localFile___childLocale___fileAbsolutePath',
  IconSvgDarkLocalFileChildLocaleId = 'iconSvgDark___localFile___childLocale___id',
  IconSvgDarkLocalFileChildLocaleLanguage = 'iconSvgDark___localFile___childLocale___language',
  IconSvgDarkLocalFileChildLocaleNs = 'iconSvgDark___localFile___childLocale___ns',
  IconSvgDarkLocalFileChildren = 'iconSvgDark___localFile___children',
  IconSvgDarkLocalFileChildrenImageSharp = 'iconSvgDark___localFile___childrenImageSharp',
  IconSvgDarkLocalFileChildrenImageSharpChildren = 'iconSvgDark___localFile___childrenImageSharp___children',
  IconSvgDarkLocalFileChildrenImageSharpGatsbyImageData = 'iconSvgDark___localFile___childrenImageSharp___gatsbyImageData',
  IconSvgDarkLocalFileChildrenImageSharpId = 'iconSvgDark___localFile___childrenImageSharp___id',
  IconSvgDarkLocalFileChildrenLocale = 'iconSvgDark___localFile___childrenLocale',
  IconSvgDarkLocalFileChildrenLocaleChildren = 'iconSvgDark___localFile___childrenLocale___children',
  IconSvgDarkLocalFileChildrenLocaleData = 'iconSvgDark___localFile___childrenLocale___data',
  IconSvgDarkLocalFileChildrenLocaleFileAbsolutePath = 'iconSvgDark___localFile___childrenLocale___fileAbsolutePath',
  IconSvgDarkLocalFileChildrenLocaleId = 'iconSvgDark___localFile___childrenLocale___id',
  IconSvgDarkLocalFileChildrenLocaleLanguage = 'iconSvgDark___localFile___childrenLocale___language',
  IconSvgDarkLocalFileChildrenLocaleNs = 'iconSvgDark___localFile___childrenLocale___ns',
  IconSvgDarkLocalFileChildrenChildren = 'iconSvgDark___localFile___children___children',
  IconSvgDarkLocalFileChildrenId = 'iconSvgDark___localFile___children___id',
  IconSvgDarkLocalFileCtime = 'iconSvgDark___localFile___ctime',
  IconSvgDarkLocalFileCtimeMs = 'iconSvgDark___localFile___ctimeMs',
  IconSvgDarkLocalFileDev = 'iconSvgDark___localFile___dev',
  IconSvgDarkLocalFileDir = 'iconSvgDark___localFile___dir',
  IconSvgDarkLocalFileExt = 'iconSvgDark___localFile___ext',
  IconSvgDarkLocalFileExtension = 'iconSvgDark___localFile___extension',
  IconSvgDarkLocalFileGid = 'iconSvgDark___localFile___gid',
  IconSvgDarkLocalFileId = 'iconSvgDark___localFile___id',
  IconSvgDarkLocalFileIno = 'iconSvgDark___localFile___ino',
  IconSvgDarkLocalFileInternalContent = 'iconSvgDark___localFile___internal___content',
  IconSvgDarkLocalFileInternalContentDigest = 'iconSvgDark___localFile___internal___contentDigest',
  IconSvgDarkLocalFileInternalDescription = 'iconSvgDark___localFile___internal___description',
  IconSvgDarkLocalFileInternalFieldOwners = 'iconSvgDark___localFile___internal___fieldOwners',
  IconSvgDarkLocalFileInternalIgnoreType = 'iconSvgDark___localFile___internal___ignoreType',
  IconSvgDarkLocalFileInternalMediaType = 'iconSvgDark___localFile___internal___mediaType',
  IconSvgDarkLocalFileInternalOwner = 'iconSvgDark___localFile___internal___owner',
  IconSvgDarkLocalFileInternalType = 'iconSvgDark___localFile___internal___type',
  IconSvgDarkLocalFileMode = 'iconSvgDark___localFile___mode',
  IconSvgDarkLocalFileModifiedTime = 'iconSvgDark___localFile___modifiedTime',
  IconSvgDarkLocalFileMtime = 'iconSvgDark___localFile___mtime',
  IconSvgDarkLocalFileMtimeMs = 'iconSvgDark___localFile___mtimeMs',
  IconSvgDarkLocalFileName = 'iconSvgDark___localFile___name',
  IconSvgDarkLocalFileNlink = 'iconSvgDark___localFile___nlink',
  IconSvgDarkLocalFileParentChildren = 'iconSvgDark___localFile___parent___children',
  IconSvgDarkLocalFileParentId = 'iconSvgDark___localFile___parent___id',
  IconSvgDarkLocalFilePrettySize = 'iconSvgDark___localFile___prettySize',
  IconSvgDarkLocalFilePublicUrl = 'iconSvgDark___localFile___publicURL',
  IconSvgDarkLocalFileRdev = 'iconSvgDark___localFile___rdev',
  IconSvgDarkLocalFileRelativeDirectory = 'iconSvgDark___localFile___relativeDirectory',
  IconSvgDarkLocalFileRelativePath = 'iconSvgDark___localFile___relativePath',
  IconSvgDarkLocalFileRoot = 'iconSvgDark___localFile___root',
  IconSvgDarkLocalFileSize = 'iconSvgDark___localFile___size',
  IconSvgDarkLocalFileSourceInstanceName = 'iconSvgDark___localFile___sourceInstanceName',
  IconSvgDarkLocalFileUid = 'iconSvgDark___localFile___uid',
  IconSvgDarkLocalFileUrl = 'iconSvgDark___localFile___url',
  IconSvgDarkNodeLocale = 'iconSvgDark___node_locale',
  IconSvgDarkParentChildren = 'iconSvgDark___parent___children',
  IconSvgDarkParentChildrenChildren = 'iconSvgDark___parent___children___children',
  IconSvgDarkParentChildrenId = 'iconSvgDark___parent___children___id',
  IconSvgDarkParentId = 'iconSvgDark___parent___id',
  IconSvgDarkParentInternalContent = 'iconSvgDark___parent___internal___content',
  IconSvgDarkParentInternalContentDigest = 'iconSvgDark___parent___internal___contentDigest',
  IconSvgDarkParentInternalDescription = 'iconSvgDark___parent___internal___description',
  IconSvgDarkParentInternalFieldOwners = 'iconSvgDark___parent___internal___fieldOwners',
  IconSvgDarkParentInternalIgnoreType = 'iconSvgDark___parent___internal___ignoreType',
  IconSvgDarkParentInternalMediaType = 'iconSvgDark___parent___internal___mediaType',
  IconSvgDarkParentInternalOwner = 'iconSvgDark___parent___internal___owner',
  IconSvgDarkParentInternalType = 'iconSvgDark___parent___internal___type',
  IconSvgDarkParentParentChildren = 'iconSvgDark___parent___parent___children',
  IconSvgDarkParentParentId = 'iconSvgDark___parent___parent___id',
  IconSvgDarkSpaceId = 'iconSvgDark___spaceId',
  IconSvgDarkSysRevision = 'iconSvgDark___sys___revision',
  IconSvgDarkSysType = 'iconSvgDark___sys___type',
  IconSvgDarkTitle = 'iconSvgDark___title',
  IconSvgDarkUpdatedAt = 'iconSvgDark___updatedAt',
  IconSvgLightChildren = 'iconSvgLight___children',
  IconSvgLightChildrenChildren = 'iconSvgLight___children___children',
  IconSvgLightChildrenChildrenChildren = 'iconSvgLight___children___children___children',
  IconSvgLightChildrenChildrenId = 'iconSvgLight___children___children___id',
  IconSvgLightChildrenId = 'iconSvgLight___children___id',
  IconSvgLightChildrenInternalContent = 'iconSvgLight___children___internal___content',
  IconSvgLightChildrenInternalContentDigest = 'iconSvgLight___children___internal___contentDigest',
  IconSvgLightChildrenInternalDescription = 'iconSvgLight___children___internal___description',
  IconSvgLightChildrenInternalFieldOwners = 'iconSvgLight___children___internal___fieldOwners',
  IconSvgLightChildrenInternalIgnoreType = 'iconSvgLight___children___internal___ignoreType',
  IconSvgLightChildrenInternalMediaType = 'iconSvgLight___children___internal___mediaType',
  IconSvgLightChildrenInternalOwner = 'iconSvgLight___children___internal___owner',
  IconSvgLightChildrenInternalType = 'iconSvgLight___children___internal___type',
  IconSvgLightChildrenParentChildren = 'iconSvgLight___children___parent___children',
  IconSvgLightChildrenParentId = 'iconSvgLight___children___parent___id',
  IconSvgLightContentfulId = 'iconSvgLight___contentful_id',
  IconSvgLightCreatedAt = 'iconSvgLight___createdAt',
  IconSvgLightDescription = 'iconSvgLight___description',
  IconSvgLightFieldsLocalFile = 'iconSvgLight___fields___localFile',
  IconSvgLightFileContentType = 'iconSvgLight___file___contentType',
  IconSvgLightFileDetailsSize = 'iconSvgLight___file___details___size',
  IconSvgLightFileFileName = 'iconSvgLight___file___fileName',
  IconSvgLightFileUrl = 'iconSvgLight___file___url',
  IconSvgLightGatsbyImageData = 'iconSvgLight___gatsbyImageData',
  IconSvgLightId = 'iconSvgLight___id',
  IconSvgLightInternalContent = 'iconSvgLight___internal___content',
  IconSvgLightInternalContentDigest = 'iconSvgLight___internal___contentDigest',
  IconSvgLightInternalDescription = 'iconSvgLight___internal___description',
  IconSvgLightInternalFieldOwners = 'iconSvgLight___internal___fieldOwners',
  IconSvgLightInternalIgnoreType = 'iconSvgLight___internal___ignoreType',
  IconSvgLightInternalMediaType = 'iconSvgLight___internal___mediaType',
  IconSvgLightInternalOwner = 'iconSvgLight___internal___owner',
  IconSvgLightInternalType = 'iconSvgLight___internal___type',
  IconSvgLightLocalFileAbsolutePath = 'iconSvgLight___localFile___absolutePath',
  IconSvgLightLocalFileAccessTime = 'iconSvgLight___localFile___accessTime',
  IconSvgLightLocalFileAtime = 'iconSvgLight___localFile___atime',
  IconSvgLightLocalFileAtimeMs = 'iconSvgLight___localFile___atimeMs',
  IconSvgLightLocalFileBase = 'iconSvgLight___localFile___base',
  IconSvgLightLocalFileBirthTime = 'iconSvgLight___localFile___birthTime',
  IconSvgLightLocalFileBirthtime = 'iconSvgLight___localFile___birthtime',
  IconSvgLightLocalFileBirthtimeMs = 'iconSvgLight___localFile___birthtimeMs',
  IconSvgLightLocalFileBlksize = 'iconSvgLight___localFile___blksize',
  IconSvgLightLocalFileBlocks = 'iconSvgLight___localFile___blocks',
  IconSvgLightLocalFileChangeTime = 'iconSvgLight___localFile___changeTime',
  IconSvgLightLocalFileChildImageSharpChildren = 'iconSvgLight___localFile___childImageSharp___children',
  IconSvgLightLocalFileChildImageSharpGatsbyImageData = 'iconSvgLight___localFile___childImageSharp___gatsbyImageData',
  IconSvgLightLocalFileChildImageSharpId = 'iconSvgLight___localFile___childImageSharp___id',
  IconSvgLightLocalFileChildLocaleChildren = 'iconSvgLight___localFile___childLocale___children',
  IconSvgLightLocalFileChildLocaleData = 'iconSvgLight___localFile___childLocale___data',
  IconSvgLightLocalFileChildLocaleFileAbsolutePath = 'iconSvgLight___localFile___childLocale___fileAbsolutePath',
  IconSvgLightLocalFileChildLocaleId = 'iconSvgLight___localFile___childLocale___id',
  IconSvgLightLocalFileChildLocaleLanguage = 'iconSvgLight___localFile___childLocale___language',
  IconSvgLightLocalFileChildLocaleNs = 'iconSvgLight___localFile___childLocale___ns',
  IconSvgLightLocalFileChildren = 'iconSvgLight___localFile___children',
  IconSvgLightLocalFileChildrenImageSharp = 'iconSvgLight___localFile___childrenImageSharp',
  IconSvgLightLocalFileChildrenImageSharpChildren = 'iconSvgLight___localFile___childrenImageSharp___children',
  IconSvgLightLocalFileChildrenImageSharpGatsbyImageData = 'iconSvgLight___localFile___childrenImageSharp___gatsbyImageData',
  IconSvgLightLocalFileChildrenImageSharpId = 'iconSvgLight___localFile___childrenImageSharp___id',
  IconSvgLightLocalFileChildrenLocale = 'iconSvgLight___localFile___childrenLocale',
  IconSvgLightLocalFileChildrenLocaleChildren = 'iconSvgLight___localFile___childrenLocale___children',
  IconSvgLightLocalFileChildrenLocaleData = 'iconSvgLight___localFile___childrenLocale___data',
  IconSvgLightLocalFileChildrenLocaleFileAbsolutePath = 'iconSvgLight___localFile___childrenLocale___fileAbsolutePath',
  IconSvgLightLocalFileChildrenLocaleId = 'iconSvgLight___localFile___childrenLocale___id',
  IconSvgLightLocalFileChildrenLocaleLanguage = 'iconSvgLight___localFile___childrenLocale___language',
  IconSvgLightLocalFileChildrenLocaleNs = 'iconSvgLight___localFile___childrenLocale___ns',
  IconSvgLightLocalFileChildrenChildren = 'iconSvgLight___localFile___children___children',
  IconSvgLightLocalFileChildrenId = 'iconSvgLight___localFile___children___id',
  IconSvgLightLocalFileCtime = 'iconSvgLight___localFile___ctime',
  IconSvgLightLocalFileCtimeMs = 'iconSvgLight___localFile___ctimeMs',
  IconSvgLightLocalFileDev = 'iconSvgLight___localFile___dev',
  IconSvgLightLocalFileDir = 'iconSvgLight___localFile___dir',
  IconSvgLightLocalFileExt = 'iconSvgLight___localFile___ext',
  IconSvgLightLocalFileExtension = 'iconSvgLight___localFile___extension',
  IconSvgLightLocalFileGid = 'iconSvgLight___localFile___gid',
  IconSvgLightLocalFileId = 'iconSvgLight___localFile___id',
  IconSvgLightLocalFileIno = 'iconSvgLight___localFile___ino',
  IconSvgLightLocalFileInternalContent = 'iconSvgLight___localFile___internal___content',
  IconSvgLightLocalFileInternalContentDigest = 'iconSvgLight___localFile___internal___contentDigest',
  IconSvgLightLocalFileInternalDescription = 'iconSvgLight___localFile___internal___description',
  IconSvgLightLocalFileInternalFieldOwners = 'iconSvgLight___localFile___internal___fieldOwners',
  IconSvgLightLocalFileInternalIgnoreType = 'iconSvgLight___localFile___internal___ignoreType',
  IconSvgLightLocalFileInternalMediaType = 'iconSvgLight___localFile___internal___mediaType',
  IconSvgLightLocalFileInternalOwner = 'iconSvgLight___localFile___internal___owner',
  IconSvgLightLocalFileInternalType = 'iconSvgLight___localFile___internal___type',
  IconSvgLightLocalFileMode = 'iconSvgLight___localFile___mode',
  IconSvgLightLocalFileModifiedTime = 'iconSvgLight___localFile___modifiedTime',
  IconSvgLightLocalFileMtime = 'iconSvgLight___localFile___mtime',
  IconSvgLightLocalFileMtimeMs = 'iconSvgLight___localFile___mtimeMs',
  IconSvgLightLocalFileName = 'iconSvgLight___localFile___name',
  IconSvgLightLocalFileNlink = 'iconSvgLight___localFile___nlink',
  IconSvgLightLocalFileParentChildren = 'iconSvgLight___localFile___parent___children',
  IconSvgLightLocalFileParentId = 'iconSvgLight___localFile___parent___id',
  IconSvgLightLocalFilePrettySize = 'iconSvgLight___localFile___prettySize',
  IconSvgLightLocalFilePublicUrl = 'iconSvgLight___localFile___publicURL',
  IconSvgLightLocalFileRdev = 'iconSvgLight___localFile___rdev',
  IconSvgLightLocalFileRelativeDirectory = 'iconSvgLight___localFile___relativeDirectory',
  IconSvgLightLocalFileRelativePath = 'iconSvgLight___localFile___relativePath',
  IconSvgLightLocalFileRoot = 'iconSvgLight___localFile___root',
  IconSvgLightLocalFileSize = 'iconSvgLight___localFile___size',
  IconSvgLightLocalFileSourceInstanceName = 'iconSvgLight___localFile___sourceInstanceName',
  IconSvgLightLocalFileUid = 'iconSvgLight___localFile___uid',
  IconSvgLightLocalFileUrl = 'iconSvgLight___localFile___url',
  IconSvgLightNodeLocale = 'iconSvgLight___node_locale',
  IconSvgLightParentChildren = 'iconSvgLight___parent___children',
  IconSvgLightParentChildrenChildren = 'iconSvgLight___parent___children___children',
  IconSvgLightParentChildrenId = 'iconSvgLight___parent___children___id',
  IconSvgLightParentId = 'iconSvgLight___parent___id',
  IconSvgLightParentInternalContent = 'iconSvgLight___parent___internal___content',
  IconSvgLightParentInternalContentDigest = 'iconSvgLight___parent___internal___contentDigest',
  IconSvgLightParentInternalDescription = 'iconSvgLight___parent___internal___description',
  IconSvgLightParentInternalFieldOwners = 'iconSvgLight___parent___internal___fieldOwners',
  IconSvgLightParentInternalIgnoreType = 'iconSvgLight___parent___internal___ignoreType',
  IconSvgLightParentInternalMediaType = 'iconSvgLight___parent___internal___mediaType',
  IconSvgLightParentInternalOwner = 'iconSvgLight___parent___internal___owner',
  IconSvgLightParentInternalType = 'iconSvgLight___parent___internal___type',
  IconSvgLightParentParentChildren = 'iconSvgLight___parent___parent___children',
  IconSvgLightParentParentId = 'iconSvgLight___parent___parent___id',
  IconSvgLightSpaceId = 'iconSvgLight___spaceId',
  IconSvgLightSysRevision = 'iconSvgLight___sys___revision',
  IconSvgLightSysType = 'iconSvgLight___sys___type',
  IconSvgLightTitle = 'iconSvgLight___title',
  IconSvgLightUpdatedAt = 'iconSvgLight___updatedAt',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___children',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___html',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___id',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  IconChildContentfulIconSvgTextNodeChildren = 'icon___childContentfulIconSvgTextNode___children',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  IconChildContentfulIconSvgTextNodeChildrenChildren = 'icon___childContentfulIconSvgTextNode___children___children',
  IconChildContentfulIconSvgTextNodeChildrenId = 'icon___childContentfulIconSvgTextNode___children___id',
  IconChildContentfulIconSvgTextNodeId = 'icon___childContentfulIconSvgTextNode___id',
  IconChildContentfulIconSvgTextNodeInternalContent = 'icon___childContentfulIconSvgTextNode___internal___content',
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 'icon___childContentfulIconSvgTextNode___internal___contentDigest',
  IconChildContentfulIconSvgTextNodeInternalDescription = 'icon___childContentfulIconSvgTextNode___internal___description',
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 'icon___childContentfulIconSvgTextNode___internal___fieldOwners',
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 'icon___childContentfulIconSvgTextNode___internal___ignoreType',
  IconChildContentfulIconSvgTextNodeInternalMediaType = 'icon___childContentfulIconSvgTextNode___internal___mediaType',
  IconChildContentfulIconSvgTextNodeInternalOwner = 'icon___childContentfulIconSvgTextNode___internal___owner',
  IconChildContentfulIconSvgTextNodeInternalType = 'icon___childContentfulIconSvgTextNode___internal___type',
  IconChildContentfulIconSvgTextNodeParentChildren = 'icon___childContentfulIconSvgTextNode___parent___children',
  IconChildContentfulIconSvgTextNodeParentId = 'icon___childContentfulIconSvgTextNode___parent___id',
  IconChildContentfulIconSvgTextNodeSvg = 'icon___childContentfulIconSvgTextNode___svg',
  IconChildContentfulIconSvgTextNodeSysType = 'icon___childContentfulIconSvgTextNode___sys___type',
  IconChildren = 'icon___children',
  IconChildrenContentfulIconSvgTextNode = 'icon___childrenContentfulIconSvgTextNode',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  IconChildrenContentfulIconSvgTextNodeChildren = 'icon___childrenContentfulIconSvgTextNode___children',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 'icon___childrenContentfulIconSvgTextNode___children___children',
  IconChildrenContentfulIconSvgTextNodeChildrenId = 'icon___childrenContentfulIconSvgTextNode___children___id',
  IconChildrenContentfulIconSvgTextNodeId = 'icon___childrenContentfulIconSvgTextNode___id',
  IconChildrenContentfulIconSvgTextNodeInternalContent = 'icon___childrenContentfulIconSvgTextNode___internal___content',
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 'icon___childrenContentfulIconSvgTextNode___internal___contentDigest',
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 'icon___childrenContentfulIconSvgTextNode___internal___description',
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 'icon___childrenContentfulIconSvgTextNode___internal___fieldOwners',
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 'icon___childrenContentfulIconSvgTextNode___internal___ignoreType',
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 'icon___childrenContentfulIconSvgTextNode___internal___mediaType',
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 'icon___childrenContentfulIconSvgTextNode___internal___owner',
  IconChildrenContentfulIconSvgTextNodeInternalType = 'icon___childrenContentfulIconSvgTextNode___internal___type',
  IconChildrenContentfulIconSvgTextNodeParentChildren = 'icon___childrenContentfulIconSvgTextNode___parent___children',
  IconChildrenContentfulIconSvgTextNodeParentId = 'icon___childrenContentfulIconSvgTextNode___parent___id',
  IconChildrenContentfulIconSvgTextNodeSvg = 'icon___childrenContentfulIconSvgTextNode___svg',
  IconChildrenContentfulIconSvgTextNodeSysType = 'icon___childrenContentfulIconSvgTextNode___sys___type',
  IconChildrenChildren = 'icon___children___children',
  IconChildrenChildrenChildren = 'icon___children___children___children',
  IconChildrenChildrenId = 'icon___children___children___id',
  IconChildrenId = 'icon___children___id',
  IconChildrenInternalContent = 'icon___children___internal___content',
  IconChildrenInternalContentDigest = 'icon___children___internal___contentDigest',
  IconChildrenInternalDescription = 'icon___children___internal___description',
  IconChildrenInternalFieldOwners = 'icon___children___internal___fieldOwners',
  IconChildrenInternalIgnoreType = 'icon___children___internal___ignoreType',
  IconChildrenInternalMediaType = 'icon___children___internal___mediaType',
  IconChildrenInternalOwner = 'icon___children___internal___owner',
  IconChildrenInternalType = 'icon___children___internal___type',
  IconChildrenParentChildren = 'icon___children___parent___children',
  IconChildrenParentId = 'icon___children___parent___id',
  IconContact = 'icon___contact',
  IconContactChildren = 'icon___contact___children',
  IconContactChildrenChildren = 'icon___contact___children___children',
  IconContactChildrenId = 'icon___contact___children___id',
  IconContactContentfulId = 'icon___contact___contentful_id',
  IconContactCreatedAt = 'icon___contact___createdAt',
  IconContactHref = 'icon___contact___href',
  IconContactIconSvgDarkChildren = 'icon___contact___iconSvgDark___children',
  IconContactIconSvgDarkContentfulId = 'icon___contact___iconSvgDark___contentful_id',
  IconContactIconSvgDarkCreatedAt = 'icon___contact___iconSvgDark___createdAt',
  IconContactIconSvgDarkDescription = 'icon___contact___iconSvgDark___description',
  IconContactIconSvgDarkGatsbyImageData = 'icon___contact___iconSvgDark___gatsbyImageData',
  IconContactIconSvgDarkId = 'icon___contact___iconSvgDark___id',
  IconContactIconSvgDarkNodeLocale = 'icon___contact___iconSvgDark___node_locale',
  IconContactIconSvgDarkSpaceId = 'icon___contact___iconSvgDark___spaceId',
  IconContactIconSvgDarkTitle = 'icon___contact___iconSvgDark___title',
  IconContactIconSvgDarkUpdatedAt = 'icon___contact___iconSvgDark___updatedAt',
  IconContactIconSvgLightChildren = 'icon___contact___iconSvgLight___children',
  IconContactIconSvgLightContentfulId = 'icon___contact___iconSvgLight___contentful_id',
  IconContactIconSvgLightCreatedAt = 'icon___contact___iconSvgLight___createdAt',
  IconContactIconSvgLightDescription = 'icon___contact___iconSvgLight___description',
  IconContactIconSvgLightGatsbyImageData = 'icon___contact___iconSvgLight___gatsbyImageData',
  IconContactIconSvgLightId = 'icon___contact___iconSvgLight___id',
  IconContactIconSvgLightNodeLocale = 'icon___contact___iconSvgLight___node_locale',
  IconContactIconSvgLightSpaceId = 'icon___contact___iconSvgLight___spaceId',
  IconContactIconSvgLightTitle = 'icon___contact___iconSvgLight___title',
  IconContactIconSvgLightUpdatedAt = 'icon___contact___iconSvgLight___updatedAt',
  IconContactIconChildren = 'icon___contact___icon___children',
  IconContactIconChildrenContentfulIconSvgTextNode = 'icon___contact___icon___childrenContentfulIconSvgTextNode',
  IconContactIconContact = 'icon___contact___icon___contact',
  IconContactIconContentfulId = 'icon___contact___icon___contentful_id',
  IconContactIconCreatedAt = 'icon___contact___icon___createdAt',
  IconContactIconHistory = 'icon___contact___icon___history',
  IconContactIconId = 'icon___contact___icon___id',
  IconContactIconName = 'icon___contact___icon___name',
  IconContactIconNodeLocale = 'icon___contact___icon___node_locale',
  IconContactIconOss = 'icon___contact___icon___oss',
  IconContactIconProject = 'icon___contact___icon___project',
  IconContactIconSpaceId = 'icon___contact___icon___spaceId',
  IconContactIconUpdatedAt = 'icon___contact___icon___updatedAt',
  IconContactIconWhatICanDo = 'icon___contact___icon___what_i_can_do',
  IconContactId = 'icon___contact___id',
  IconContactInternalContent = 'icon___contact___internal___content',
  IconContactInternalContentDigest = 'icon___contact___internal___contentDigest',
  IconContactInternalDescription = 'icon___contact___internal___description',
  IconContactInternalFieldOwners = 'icon___contact___internal___fieldOwners',
  IconContactInternalIgnoreType = 'icon___contact___internal___ignoreType',
  IconContactInternalMediaType = 'icon___contact___internal___mediaType',
  IconContactInternalOwner = 'icon___contact___internal___owner',
  IconContactInternalType = 'icon___contact___internal___type',
  IconContactName = 'icon___contact___name',
  IconContactNodeLocale = 'icon___contact___node_locale',
  IconContactParentChildren = 'icon___contact___parent___children',
  IconContactParentId = 'icon___contact___parent___id',
  IconContactSortKey = 'icon___contact___sortKey',
  IconContactSpaceId = 'icon___contact___spaceId',
  IconContactSubName = 'icon___contact___subName',
  IconContactSysRevision = 'icon___contact___sys___revision',
  IconContactSysType = 'icon___contact___sys___type',
  IconContactUpdatedAt = 'icon___contact___updatedAt',
  IconContentfulId = 'icon___contentful_id',
  IconCreatedAt = 'icon___createdAt',
  IconHistory = 'icon___history',
  IconHistoryChildren = 'icon___history___children',
  IconHistoryChildrenChildren = 'icon___history___children___children',
  IconHistoryChildrenId = 'icon___history___children___id',
  IconHistoryContentfulId = 'icon___history___contentful_id',
  IconHistoryCreatedAt = 'icon___history___createdAt',
  IconHistoryDate = 'icon___history___date',
  IconHistoryIconChildren = 'icon___history___icon___children',
  IconHistoryIconChildrenContentfulIconSvgTextNode = 'icon___history___icon___childrenContentfulIconSvgTextNode',
  IconHistoryIconContact = 'icon___history___icon___contact',
  IconHistoryIconContentfulId = 'icon___history___icon___contentful_id',
  IconHistoryIconCreatedAt = 'icon___history___icon___createdAt',
  IconHistoryIconHistory = 'icon___history___icon___history',
  IconHistoryIconId = 'icon___history___icon___id',
  IconHistoryIconName = 'icon___history___icon___name',
  IconHistoryIconNodeLocale = 'icon___history___icon___node_locale',
  IconHistoryIconOss = 'icon___history___icon___oss',
  IconHistoryIconProject = 'icon___history___icon___project',
  IconHistoryIconSpaceId = 'icon___history___icon___spaceId',
  IconHistoryIconUpdatedAt = 'icon___history___icon___updatedAt',
  IconHistoryIconWhatICanDo = 'icon___history___icon___what_i_can_do',
  IconHistoryId = 'icon___history___id',
  IconHistoryInternalContent = 'icon___history___internal___content',
  IconHistoryInternalContentDigest = 'icon___history___internal___contentDigest',
  IconHistoryInternalDescription = 'icon___history___internal___description',
  IconHistoryInternalFieldOwners = 'icon___history___internal___fieldOwners',
  IconHistoryInternalIgnoreType = 'icon___history___internal___ignoreType',
  IconHistoryInternalMediaType = 'icon___history___internal___mediaType',
  IconHistoryInternalOwner = 'icon___history___internal___owner',
  IconHistoryInternalType = 'icon___history___internal___type',
  IconHistoryName = 'icon___history___name',
  IconHistoryNodeLocale = 'icon___history___node_locale',
  IconHistoryParentChildren = 'icon___history___parent___children',
  IconHistoryParentId = 'icon___history___parent___id',
  IconHistorySpaceId = 'icon___history___spaceId',
  IconHistorySubName = 'icon___history___subName',
  IconHistorySysRevision = 'icon___history___sys___revision',
  IconHistorySysType = 'icon___history___sys___type',
  IconHistoryUpdatedAt = 'icon___history___updatedAt',
  IconId = 'icon___id',
  IconInternalContent = 'icon___internal___content',
  IconInternalContentDigest = 'icon___internal___contentDigest',
  IconInternalDescription = 'icon___internal___description',
  IconInternalFieldOwners = 'icon___internal___fieldOwners',
  IconInternalIgnoreType = 'icon___internal___ignoreType',
  IconInternalMediaType = 'icon___internal___mediaType',
  IconInternalOwner = 'icon___internal___owner',
  IconInternalType = 'icon___internal___type',
  IconName = 'icon___name',
  IconNodeLocale = 'icon___node_locale',
  IconOss = 'icon___oss',
  IconOssChildContentfulOssDetailTextNodeChildren = 'icon___oss___childContentfulOssDetailTextNode___children',
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 'icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  IconOssChildContentfulOssDetailTextNodeDetail = 'icon___oss___childContentfulOssDetailTextNode___detail',
  IconOssChildContentfulOssDetailTextNodeId = 'icon___oss___childContentfulOssDetailTextNode___id',
  IconOssChildren = 'icon___oss___children',
  IconOssChildrenContentfulOssDetailTextNode = 'icon___oss___childrenContentfulOssDetailTextNode',
  IconOssChildrenContentfulOssDetailTextNodeChildren = 'icon___oss___childrenContentfulOssDetailTextNode___children',
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 'icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  IconOssChildrenContentfulOssDetailTextNodeDetail = 'icon___oss___childrenContentfulOssDetailTextNode___detail',
  IconOssChildrenContentfulOssDetailTextNodeId = 'icon___oss___childrenContentfulOssDetailTextNode___id',
  IconOssChildrenChildren = 'icon___oss___children___children',
  IconOssChildrenId = 'icon___oss___children___id',
  IconOssContentfulId = 'icon___oss___contentful_id',
  IconOssCreatedAt = 'icon___oss___createdAt',
  IconOssDetailChildren = 'icon___oss___detail___children',
  IconOssDetailChildrenMarkdownRemark = 'icon___oss___detail___childrenMarkdownRemark',
  IconOssDetailDetail = 'icon___oss___detail___detail',
  IconOssDetailId = 'icon___oss___detail___id',
  IconOssHref = 'icon___oss___href',
  IconOssIconChildren = 'icon___oss___icon___children',
  IconOssIconChildrenContentfulIconSvgTextNode = 'icon___oss___icon___childrenContentfulIconSvgTextNode',
  IconOssIconContact = 'icon___oss___icon___contact',
  IconOssIconContentfulId = 'icon___oss___icon___contentful_id',
  IconOssIconCreatedAt = 'icon___oss___icon___createdAt',
  IconOssIconHistory = 'icon___oss___icon___history',
  IconOssIconId = 'icon___oss___icon___id',
  IconOssIconName = 'icon___oss___icon___name',
  IconOssIconNodeLocale = 'icon___oss___icon___node_locale',
  IconOssIconOss = 'icon___oss___icon___oss',
  IconOssIconProject = 'icon___oss___icon___project',
  IconOssIconSpaceId = 'icon___oss___icon___spaceId',
  IconOssIconUpdatedAt = 'icon___oss___icon___updatedAt',
  IconOssIconWhatICanDo = 'icon___oss___icon___what_i_can_do',
  IconOssId = 'icon___oss___id',
  IconOssImageChildren = 'icon___oss___image___children',
  IconOssImageContentfulId = 'icon___oss___image___contentful_id',
  IconOssImageCreatedAt = 'icon___oss___image___createdAt',
  IconOssImageDescription = 'icon___oss___image___description',
  IconOssImageGatsbyImageData = 'icon___oss___image___gatsbyImageData',
  IconOssImageId = 'icon___oss___image___id',
  IconOssImageNodeLocale = 'icon___oss___image___node_locale',
  IconOssImageSpaceId = 'icon___oss___image___spaceId',
  IconOssImageTitle = 'icon___oss___image___title',
  IconOssImageUpdatedAt = 'icon___oss___image___updatedAt',
  IconOssInternalContent = 'icon___oss___internal___content',
  IconOssInternalContentDigest = 'icon___oss___internal___contentDigest',
  IconOssInternalDescription = 'icon___oss___internal___description',
  IconOssInternalFieldOwners = 'icon___oss___internal___fieldOwners',
  IconOssInternalIgnoreType = 'icon___oss___internal___ignoreType',
  IconOssInternalMediaType = 'icon___oss___internal___mediaType',
  IconOssInternalOwner = 'icon___oss___internal___owner',
  IconOssInternalType = 'icon___oss___internal___type',
  IconOssName = 'icon___oss___name',
  IconOssNodeLocale = 'icon___oss___node_locale',
  IconOssParentChildren = 'icon___oss___parent___children',
  IconOssParentId = 'icon___oss___parent___id',
  IconOssSpaceId = 'icon___oss___spaceId',
  IconOssStartDate = 'icon___oss___startDate',
  IconOssSubName = 'icon___oss___subName',
  IconOssSysRevision = 'icon___oss___sys___revision',
  IconOssSysType = 'icon___oss___sys___type',
  IconOssTags = 'icon___oss___tags',
  IconOssTagsChildren = 'icon___oss___tags___children',
  IconOssTagsContentfulId = 'icon___oss___tags___contentful_id',
  IconOssTagsCreatedAt = 'icon___oss___tags___createdAt',
  IconOssTagsId = 'icon___oss___tags___id',
  IconOssTagsLevel = 'icon___oss___tags___level',
  IconOssTagsName = 'icon___oss___tags___name',
  IconOssTagsNodeLocale = 'icon___oss___tags___node_locale',
  IconOssTagsOss = 'icon___oss___tags___oss',
  IconOssTagsProject = 'icon___oss___tags___project',
  IconOssTagsSkillMap = 'icon___oss___tags___skill_map',
  IconOssTagsSpaceId = 'icon___oss___tags___spaceId',
  IconOssTagsUpdatedAt = 'icon___oss___tags___updatedAt',
  IconOssUpdatedAt = 'icon___oss___updatedAt',
  IconParentChildren = 'icon___parent___children',
  IconParentChildrenChildren = 'icon___parent___children___children',
  IconParentChildrenId = 'icon___parent___children___id',
  IconParentId = 'icon___parent___id',
  IconParentInternalContent = 'icon___parent___internal___content',
  IconParentInternalContentDigest = 'icon___parent___internal___contentDigest',
  IconParentInternalDescription = 'icon___parent___internal___description',
  IconParentInternalFieldOwners = 'icon___parent___internal___fieldOwners',
  IconParentInternalIgnoreType = 'icon___parent___internal___ignoreType',
  IconParentInternalMediaType = 'icon___parent___internal___mediaType',
  IconParentInternalOwner = 'icon___parent___internal___owner',
  IconParentInternalType = 'icon___parent___internal___type',
  IconParentParentChildren = 'icon___parent___parent___children',
  IconParentParentId = 'icon___parent___parent___id',
  IconProject = 'icon___project',
  IconProjectChildContentfulProjectDetailTextNodeChildren = 'icon___project___childContentfulProjectDetailTextNode___children',
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  IconProjectChildContentfulProjectDetailTextNodeDetail = 'icon___project___childContentfulProjectDetailTextNode___detail',
  IconProjectChildContentfulProjectDetailTextNodeId = 'icon___project___childContentfulProjectDetailTextNode___id',
  IconProjectChildren = 'icon___project___children',
  IconProjectChildrenContentfulProjectDetailTextNode = 'icon___project___childrenContentfulProjectDetailTextNode',
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 'icon___project___childrenContentfulProjectDetailTextNode___children',
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 'icon___project___childrenContentfulProjectDetailTextNode___detail',
  IconProjectChildrenContentfulProjectDetailTextNodeId = 'icon___project___childrenContentfulProjectDetailTextNode___id',
  IconProjectChildrenChildren = 'icon___project___children___children',
  IconProjectChildrenId = 'icon___project___children___id',
  IconProjectContentfulId = 'icon___project___contentful_id',
  IconProjectCreatedAt = 'icon___project___createdAt',
  IconProjectDetailChildren = 'icon___project___detail___children',
  IconProjectDetailChildrenMarkdownRemark = 'icon___project___detail___childrenMarkdownRemark',
  IconProjectDetailDetail = 'icon___project___detail___detail',
  IconProjectDetailId = 'icon___project___detail___id',
  IconProjectEndDate = 'icon___project___endDate',
  IconProjectIconChildren = 'icon___project___icon___children',
  IconProjectIconChildrenContentfulIconSvgTextNode = 'icon___project___icon___childrenContentfulIconSvgTextNode',
  IconProjectIconContact = 'icon___project___icon___contact',
  IconProjectIconContentfulId = 'icon___project___icon___contentful_id',
  IconProjectIconCreatedAt = 'icon___project___icon___createdAt',
  IconProjectIconHistory = 'icon___project___icon___history',
  IconProjectIconId = 'icon___project___icon___id',
  IconProjectIconName = 'icon___project___icon___name',
  IconProjectIconNodeLocale = 'icon___project___icon___node_locale',
  IconProjectIconOss = 'icon___project___icon___oss',
  IconProjectIconProject = 'icon___project___icon___project',
  IconProjectIconSpaceId = 'icon___project___icon___spaceId',
  IconProjectIconUpdatedAt = 'icon___project___icon___updatedAt',
  IconProjectIconWhatICanDo = 'icon___project___icon___what_i_can_do',
  IconProjectId = 'icon___project___id',
  IconProjectInternalContent = 'icon___project___internal___content',
  IconProjectInternalContentDigest = 'icon___project___internal___contentDigest',
  IconProjectInternalDescription = 'icon___project___internal___description',
  IconProjectInternalFieldOwners = 'icon___project___internal___fieldOwners',
  IconProjectInternalIgnoreType = 'icon___project___internal___ignoreType',
  IconProjectInternalMediaType = 'icon___project___internal___mediaType',
  IconProjectInternalOwner = 'icon___project___internal___owner',
  IconProjectInternalType = 'icon___project___internal___type',
  IconProjectName = 'icon___project___name',
  IconProjectNodeLocale = 'icon___project___node_locale',
  IconProjectParentChildren = 'icon___project___parent___children',
  IconProjectParentId = 'icon___project___parent___id',
  IconProjectSpaceId = 'icon___project___spaceId',
  IconProjectStartDate = 'icon___project___startDate',
  IconProjectSubName = 'icon___project___subName',
  IconProjectSysRevision = 'icon___project___sys___revision',
  IconProjectSysType = 'icon___project___sys___type',
  IconProjectTags = 'icon___project___tags',
  IconProjectTagsChildren = 'icon___project___tags___children',
  IconProjectTagsContentfulId = 'icon___project___tags___contentful_id',
  IconProjectTagsCreatedAt = 'icon___project___tags___createdAt',
  IconProjectTagsId = 'icon___project___tags___id',
  IconProjectTagsLevel = 'icon___project___tags___level',
  IconProjectTagsName = 'icon___project___tags___name',
  IconProjectTagsNodeLocale = 'icon___project___tags___node_locale',
  IconProjectTagsOss = 'icon___project___tags___oss',
  IconProjectTagsProject = 'icon___project___tags___project',
  IconProjectTagsSkillMap = 'icon___project___tags___skill_map',
  IconProjectTagsSpaceId = 'icon___project___tags___spaceId',
  IconProjectTagsUpdatedAt = 'icon___project___tags___updatedAt',
  IconProjectUpdatedAt = 'icon___project___updatedAt',
  IconSpaceId = 'icon___spaceId',
  IconSvgChildMarkdownRemarkChildren = 'icon___svg___childMarkdownRemark___children',
  IconSvgChildMarkdownRemarkExcerpt = 'icon___svg___childMarkdownRemark___excerpt',
  IconSvgChildMarkdownRemarkExcerptAst = 'icon___svg___childMarkdownRemark___excerptAst',
  IconSvgChildMarkdownRemarkHeadings = 'icon___svg___childMarkdownRemark___headings',
  IconSvgChildMarkdownRemarkHtml = 'icon___svg___childMarkdownRemark___html',
  IconSvgChildMarkdownRemarkHtmlAst = 'icon___svg___childMarkdownRemark___htmlAst',
  IconSvgChildMarkdownRemarkId = 'icon___svg___childMarkdownRemark___id',
  IconSvgChildMarkdownRemarkRawMarkdownBody = 'icon___svg___childMarkdownRemark___rawMarkdownBody',
  IconSvgChildMarkdownRemarkTableOfContents = 'icon___svg___childMarkdownRemark___tableOfContents',
  IconSvgChildMarkdownRemarkTimeToRead = 'icon___svg___childMarkdownRemark___timeToRead',
  IconSvgChildren = 'icon___svg___children',
  IconSvgChildrenMarkdownRemark = 'icon___svg___childrenMarkdownRemark',
  IconSvgChildrenMarkdownRemarkChildren = 'icon___svg___childrenMarkdownRemark___children',
  IconSvgChildrenMarkdownRemarkExcerpt = 'icon___svg___childrenMarkdownRemark___excerpt',
  IconSvgChildrenMarkdownRemarkExcerptAst = 'icon___svg___childrenMarkdownRemark___excerptAst',
  IconSvgChildrenMarkdownRemarkHeadings = 'icon___svg___childrenMarkdownRemark___headings',
  IconSvgChildrenMarkdownRemarkHtml = 'icon___svg___childrenMarkdownRemark___html',
  IconSvgChildrenMarkdownRemarkHtmlAst = 'icon___svg___childrenMarkdownRemark___htmlAst',
  IconSvgChildrenMarkdownRemarkId = 'icon___svg___childrenMarkdownRemark___id',
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 'icon___svg___childrenMarkdownRemark___rawMarkdownBody',
  IconSvgChildrenMarkdownRemarkTableOfContents = 'icon___svg___childrenMarkdownRemark___tableOfContents',
  IconSvgChildrenMarkdownRemarkTimeToRead = 'icon___svg___childrenMarkdownRemark___timeToRead',
  IconSvgChildrenChildren = 'icon___svg___children___children',
  IconSvgChildrenId = 'icon___svg___children___id',
  IconSvgId = 'icon___svg___id',
  IconSvgInternalContent = 'icon___svg___internal___content',
  IconSvgInternalContentDigest = 'icon___svg___internal___contentDigest',
  IconSvgInternalDescription = 'icon___svg___internal___description',
  IconSvgInternalFieldOwners = 'icon___svg___internal___fieldOwners',
  IconSvgInternalIgnoreType = 'icon___svg___internal___ignoreType',
  IconSvgInternalMediaType = 'icon___svg___internal___mediaType',
  IconSvgInternalOwner = 'icon___svg___internal___owner',
  IconSvgInternalType = 'icon___svg___internal___type',
  IconSvgParentChildren = 'icon___svg___parent___children',
  IconSvgParentId = 'icon___svg___parent___id',
  IconSvgSvg = 'icon___svg___svg',
  IconSvgSysType = 'icon___svg___sys___type',
  IconSysRevision = 'icon___sys___revision',
  IconSysType = 'icon___sys___type',
  IconUpdatedAt = 'icon___updatedAt',
  IconWhatICanDo = 'icon___what_i_can_do',
  IconWhatICanDoChildren = 'icon___what_i_can_do___children',
  IconWhatICanDoChildrenChildren = 'icon___what_i_can_do___children___children',
  IconWhatICanDoChildrenId = 'icon___what_i_can_do___children___id',
  IconWhatICanDoContentfulId = 'icon___what_i_can_do___contentful_id',
  IconWhatICanDoCreatedAt = 'icon___what_i_can_do___createdAt',
  IconWhatICanDoIconChildren = 'icon___what_i_can_do___icon___children',
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 'icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  IconWhatICanDoIconContact = 'icon___what_i_can_do___icon___contact',
  IconWhatICanDoIconContentfulId = 'icon___what_i_can_do___icon___contentful_id',
  IconWhatICanDoIconCreatedAt = 'icon___what_i_can_do___icon___createdAt',
  IconWhatICanDoIconHistory = 'icon___what_i_can_do___icon___history',
  IconWhatICanDoIconId = 'icon___what_i_can_do___icon___id',
  IconWhatICanDoIconName = 'icon___what_i_can_do___icon___name',
  IconWhatICanDoIconNodeLocale = 'icon___what_i_can_do___icon___node_locale',
  IconWhatICanDoIconOss = 'icon___what_i_can_do___icon___oss',
  IconWhatICanDoIconProject = 'icon___what_i_can_do___icon___project',
  IconWhatICanDoIconSpaceId = 'icon___what_i_can_do___icon___spaceId',
  IconWhatICanDoIconUpdatedAt = 'icon___what_i_can_do___icon___updatedAt',
  IconWhatICanDoIconWhatICanDo = 'icon___what_i_can_do___icon___what_i_can_do',
  IconWhatICanDoId = 'icon___what_i_can_do___id',
  IconWhatICanDoInternalContent = 'icon___what_i_can_do___internal___content',
  IconWhatICanDoInternalContentDigest = 'icon___what_i_can_do___internal___contentDigest',
  IconWhatICanDoInternalDescription = 'icon___what_i_can_do___internal___description',
  IconWhatICanDoInternalFieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  IconWhatICanDoInternalIgnoreType = 'icon___what_i_can_do___internal___ignoreType',
  IconWhatICanDoInternalMediaType = 'icon___what_i_can_do___internal___mediaType',
  IconWhatICanDoInternalOwner = 'icon___what_i_can_do___internal___owner',
  IconWhatICanDoInternalType = 'icon___what_i_can_do___internal___type',
  IconWhatICanDoName = 'icon___what_i_can_do___name',
  IconWhatICanDoNodeLocale = 'icon___what_i_can_do___node_locale',
  IconWhatICanDoParentChildren = 'icon___what_i_can_do___parent___children',
  IconWhatICanDoParentId = 'icon___what_i_can_do___parent___id',
  IconWhatICanDoSortKey = 'icon___what_i_can_do___sortKey',
  IconWhatICanDoSpaceId = 'icon___what_i_can_do___spaceId',
  IconWhatICanDoSubName = 'icon___what_i_can_do___subName',
  IconWhatICanDoSysRevision = 'icon___what_i_can_do___sys___revision',
  IconWhatICanDoSysType = 'icon___what_i_can_do___sys___type',
  IconWhatICanDoUpdatedAt = 'icon___what_i_can_do___updatedAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SortKey = 'sortKey',
  SpaceId = 'spaceId',
  SubName = 'subName',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulContactFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<ContentfulIconFilterInput>;
  iconSvgDark?: InputMaybe<ContentfulAssetFilterInput>;
  iconSvgLight?: InputMaybe<ContentfulAssetFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sortKey?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  subName?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContactSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulContactFilterListInput = {
  elemMatch?: InputMaybe<ContentfulContactFilterInput>;
};

export type ContentfulContactGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContactEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulContactGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContact>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContactGroupConnectionDistinctArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactGroupConnectionGroupArgs = {
  field: ContentfulContactFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulContactGroupConnectionMaxArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactGroupConnectionMinArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactGroupConnectionSumArgs = {
  field: ContentfulContactFieldsEnum;
};

export type ContentfulContactSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulContactFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContactSys = {
  contentType?: Maybe<ContentfulContactSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContactSysContentType = {
  sys?: Maybe<ContentfulContactSysContentTypeSys>;
};

export type ContentfulContactSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulContactSysContentTypeSysFilterInput>;
};

export type ContentfulContactSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContactSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContactSysFilterInput = {
  contentType?: InputMaybe<ContentfulContactSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentType = Node & {
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContentTypeEdge>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Description = 'description',
  DisplayField = 'displayField',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SysType = 'sys___type'
}

export type ContentfulContentTypeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContentTypeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
};

export type ContentfulEntryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulEntryEdge>;
  group: Array<ContentfulEntryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type ContentfulEntryFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type ContentfulEntryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulEntryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntrySortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulEntryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulHello = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  href?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  sortKey?: Maybe<Scalars['Int']>;
  spaceId?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulHelloSys>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulHelloCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulHelloUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulHelloConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulHelloEdge>;
  group: Array<ContentfulHelloGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulHello>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulHelloConnectionDistinctArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloConnectionGroupArgs = {
  field: ContentfulHelloFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulHelloConnectionMaxArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloConnectionMinArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloConnectionSumArgs = {
  field: ContentfulHelloFieldsEnum;
};

export type ContentfulHelloEdge = {
  next?: Maybe<ContentfulHello>;
  node: ContentfulHello;
  previous?: Maybe<ContentfulHello>;
};

export enum ContentfulHelloFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Href = 'href',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SortKey = 'sortKey',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulHelloFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sortKey?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulHelloSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulHelloGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulHelloEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulHelloGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulHello>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulHelloGroupConnectionDistinctArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloGroupConnectionGroupArgs = {
  field: ContentfulHelloFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulHelloGroupConnectionMaxArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloGroupConnectionMinArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloGroupConnectionSumArgs = {
  field: ContentfulHelloFieldsEnum;
};

export type ContentfulHelloSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulHelloFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulHelloSys = {
  contentType?: Maybe<ContentfulHelloSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulHelloSysContentType = {
  sys?: Maybe<ContentfulHelloSysContentTypeSys>;
};

export type ContentfulHelloSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulHelloSysContentTypeSysFilterInput>;
};

export type ContentfulHelloSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulHelloSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHelloSysFilterInput = {
  contentType?: InputMaybe<ContentfulHelloSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHistory = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  date?: Maybe<Scalars['Date']>;
  icon?: Maybe<ContentfulIcon>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']>;
  subName?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulHistorySys>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulHistoryCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulHistoryDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulHistoryUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulHistoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulHistoryEdge>;
  group: Array<ContentfulHistoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulHistory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulHistoryConnectionDistinctArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryConnectionGroupArgs = {
  field: ContentfulHistoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulHistoryConnectionMaxArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryConnectionMinArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryConnectionSumArgs = {
  field: ContentfulHistoryFieldsEnum;
};

export type ContentfulHistoryEdge = {
  next?: Maybe<ContentfulHistory>;
  node: ContentfulHistory;
  previous?: Maybe<ContentfulHistory>;
};

export enum ContentfulHistoryFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Date = 'date',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___children',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___html',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___id',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  IconChildContentfulIconSvgTextNodeChildren = 'icon___childContentfulIconSvgTextNode___children',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  IconChildContentfulIconSvgTextNodeChildrenChildren = 'icon___childContentfulIconSvgTextNode___children___children',
  IconChildContentfulIconSvgTextNodeChildrenId = 'icon___childContentfulIconSvgTextNode___children___id',
  IconChildContentfulIconSvgTextNodeId = 'icon___childContentfulIconSvgTextNode___id',
  IconChildContentfulIconSvgTextNodeInternalContent = 'icon___childContentfulIconSvgTextNode___internal___content',
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 'icon___childContentfulIconSvgTextNode___internal___contentDigest',
  IconChildContentfulIconSvgTextNodeInternalDescription = 'icon___childContentfulIconSvgTextNode___internal___description',
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 'icon___childContentfulIconSvgTextNode___internal___fieldOwners',
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 'icon___childContentfulIconSvgTextNode___internal___ignoreType',
  IconChildContentfulIconSvgTextNodeInternalMediaType = 'icon___childContentfulIconSvgTextNode___internal___mediaType',
  IconChildContentfulIconSvgTextNodeInternalOwner = 'icon___childContentfulIconSvgTextNode___internal___owner',
  IconChildContentfulIconSvgTextNodeInternalType = 'icon___childContentfulIconSvgTextNode___internal___type',
  IconChildContentfulIconSvgTextNodeParentChildren = 'icon___childContentfulIconSvgTextNode___parent___children',
  IconChildContentfulIconSvgTextNodeParentId = 'icon___childContentfulIconSvgTextNode___parent___id',
  IconChildContentfulIconSvgTextNodeSvg = 'icon___childContentfulIconSvgTextNode___svg',
  IconChildContentfulIconSvgTextNodeSysType = 'icon___childContentfulIconSvgTextNode___sys___type',
  IconChildren = 'icon___children',
  IconChildrenContentfulIconSvgTextNode = 'icon___childrenContentfulIconSvgTextNode',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  IconChildrenContentfulIconSvgTextNodeChildren = 'icon___childrenContentfulIconSvgTextNode___children',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 'icon___childrenContentfulIconSvgTextNode___children___children',
  IconChildrenContentfulIconSvgTextNodeChildrenId = 'icon___childrenContentfulIconSvgTextNode___children___id',
  IconChildrenContentfulIconSvgTextNodeId = 'icon___childrenContentfulIconSvgTextNode___id',
  IconChildrenContentfulIconSvgTextNodeInternalContent = 'icon___childrenContentfulIconSvgTextNode___internal___content',
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 'icon___childrenContentfulIconSvgTextNode___internal___contentDigest',
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 'icon___childrenContentfulIconSvgTextNode___internal___description',
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 'icon___childrenContentfulIconSvgTextNode___internal___fieldOwners',
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 'icon___childrenContentfulIconSvgTextNode___internal___ignoreType',
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 'icon___childrenContentfulIconSvgTextNode___internal___mediaType',
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 'icon___childrenContentfulIconSvgTextNode___internal___owner',
  IconChildrenContentfulIconSvgTextNodeInternalType = 'icon___childrenContentfulIconSvgTextNode___internal___type',
  IconChildrenContentfulIconSvgTextNodeParentChildren = 'icon___childrenContentfulIconSvgTextNode___parent___children',
  IconChildrenContentfulIconSvgTextNodeParentId = 'icon___childrenContentfulIconSvgTextNode___parent___id',
  IconChildrenContentfulIconSvgTextNodeSvg = 'icon___childrenContentfulIconSvgTextNode___svg',
  IconChildrenContentfulIconSvgTextNodeSysType = 'icon___childrenContentfulIconSvgTextNode___sys___type',
  IconChildrenChildren = 'icon___children___children',
  IconChildrenChildrenChildren = 'icon___children___children___children',
  IconChildrenChildrenId = 'icon___children___children___id',
  IconChildrenId = 'icon___children___id',
  IconChildrenInternalContent = 'icon___children___internal___content',
  IconChildrenInternalContentDigest = 'icon___children___internal___contentDigest',
  IconChildrenInternalDescription = 'icon___children___internal___description',
  IconChildrenInternalFieldOwners = 'icon___children___internal___fieldOwners',
  IconChildrenInternalIgnoreType = 'icon___children___internal___ignoreType',
  IconChildrenInternalMediaType = 'icon___children___internal___mediaType',
  IconChildrenInternalOwner = 'icon___children___internal___owner',
  IconChildrenInternalType = 'icon___children___internal___type',
  IconChildrenParentChildren = 'icon___children___parent___children',
  IconChildrenParentId = 'icon___children___parent___id',
  IconContact = 'icon___contact',
  IconContactChildren = 'icon___contact___children',
  IconContactChildrenChildren = 'icon___contact___children___children',
  IconContactChildrenId = 'icon___contact___children___id',
  IconContactContentfulId = 'icon___contact___contentful_id',
  IconContactCreatedAt = 'icon___contact___createdAt',
  IconContactHref = 'icon___contact___href',
  IconContactIconSvgDarkChildren = 'icon___contact___iconSvgDark___children',
  IconContactIconSvgDarkContentfulId = 'icon___contact___iconSvgDark___contentful_id',
  IconContactIconSvgDarkCreatedAt = 'icon___contact___iconSvgDark___createdAt',
  IconContactIconSvgDarkDescription = 'icon___contact___iconSvgDark___description',
  IconContactIconSvgDarkGatsbyImageData = 'icon___contact___iconSvgDark___gatsbyImageData',
  IconContactIconSvgDarkId = 'icon___contact___iconSvgDark___id',
  IconContactIconSvgDarkNodeLocale = 'icon___contact___iconSvgDark___node_locale',
  IconContactIconSvgDarkSpaceId = 'icon___contact___iconSvgDark___spaceId',
  IconContactIconSvgDarkTitle = 'icon___contact___iconSvgDark___title',
  IconContactIconSvgDarkUpdatedAt = 'icon___contact___iconSvgDark___updatedAt',
  IconContactIconSvgLightChildren = 'icon___contact___iconSvgLight___children',
  IconContactIconSvgLightContentfulId = 'icon___contact___iconSvgLight___contentful_id',
  IconContactIconSvgLightCreatedAt = 'icon___contact___iconSvgLight___createdAt',
  IconContactIconSvgLightDescription = 'icon___contact___iconSvgLight___description',
  IconContactIconSvgLightGatsbyImageData = 'icon___contact___iconSvgLight___gatsbyImageData',
  IconContactIconSvgLightId = 'icon___contact___iconSvgLight___id',
  IconContactIconSvgLightNodeLocale = 'icon___contact___iconSvgLight___node_locale',
  IconContactIconSvgLightSpaceId = 'icon___contact___iconSvgLight___spaceId',
  IconContactIconSvgLightTitle = 'icon___contact___iconSvgLight___title',
  IconContactIconSvgLightUpdatedAt = 'icon___contact___iconSvgLight___updatedAt',
  IconContactIconChildren = 'icon___contact___icon___children',
  IconContactIconChildrenContentfulIconSvgTextNode = 'icon___contact___icon___childrenContentfulIconSvgTextNode',
  IconContactIconContact = 'icon___contact___icon___contact',
  IconContactIconContentfulId = 'icon___contact___icon___contentful_id',
  IconContactIconCreatedAt = 'icon___contact___icon___createdAt',
  IconContactIconHistory = 'icon___contact___icon___history',
  IconContactIconId = 'icon___contact___icon___id',
  IconContactIconName = 'icon___contact___icon___name',
  IconContactIconNodeLocale = 'icon___contact___icon___node_locale',
  IconContactIconOss = 'icon___contact___icon___oss',
  IconContactIconProject = 'icon___contact___icon___project',
  IconContactIconSpaceId = 'icon___contact___icon___spaceId',
  IconContactIconUpdatedAt = 'icon___contact___icon___updatedAt',
  IconContactIconWhatICanDo = 'icon___contact___icon___what_i_can_do',
  IconContactId = 'icon___contact___id',
  IconContactInternalContent = 'icon___contact___internal___content',
  IconContactInternalContentDigest = 'icon___contact___internal___contentDigest',
  IconContactInternalDescription = 'icon___contact___internal___description',
  IconContactInternalFieldOwners = 'icon___contact___internal___fieldOwners',
  IconContactInternalIgnoreType = 'icon___contact___internal___ignoreType',
  IconContactInternalMediaType = 'icon___contact___internal___mediaType',
  IconContactInternalOwner = 'icon___contact___internal___owner',
  IconContactInternalType = 'icon___contact___internal___type',
  IconContactName = 'icon___contact___name',
  IconContactNodeLocale = 'icon___contact___node_locale',
  IconContactParentChildren = 'icon___contact___parent___children',
  IconContactParentId = 'icon___contact___parent___id',
  IconContactSortKey = 'icon___contact___sortKey',
  IconContactSpaceId = 'icon___contact___spaceId',
  IconContactSubName = 'icon___contact___subName',
  IconContactSysRevision = 'icon___contact___sys___revision',
  IconContactSysType = 'icon___contact___sys___type',
  IconContactUpdatedAt = 'icon___contact___updatedAt',
  IconContentfulId = 'icon___contentful_id',
  IconCreatedAt = 'icon___createdAt',
  IconHistory = 'icon___history',
  IconHistoryChildren = 'icon___history___children',
  IconHistoryChildrenChildren = 'icon___history___children___children',
  IconHistoryChildrenId = 'icon___history___children___id',
  IconHistoryContentfulId = 'icon___history___contentful_id',
  IconHistoryCreatedAt = 'icon___history___createdAt',
  IconHistoryDate = 'icon___history___date',
  IconHistoryIconChildren = 'icon___history___icon___children',
  IconHistoryIconChildrenContentfulIconSvgTextNode = 'icon___history___icon___childrenContentfulIconSvgTextNode',
  IconHistoryIconContact = 'icon___history___icon___contact',
  IconHistoryIconContentfulId = 'icon___history___icon___contentful_id',
  IconHistoryIconCreatedAt = 'icon___history___icon___createdAt',
  IconHistoryIconHistory = 'icon___history___icon___history',
  IconHistoryIconId = 'icon___history___icon___id',
  IconHistoryIconName = 'icon___history___icon___name',
  IconHistoryIconNodeLocale = 'icon___history___icon___node_locale',
  IconHistoryIconOss = 'icon___history___icon___oss',
  IconHistoryIconProject = 'icon___history___icon___project',
  IconHistoryIconSpaceId = 'icon___history___icon___spaceId',
  IconHistoryIconUpdatedAt = 'icon___history___icon___updatedAt',
  IconHistoryIconWhatICanDo = 'icon___history___icon___what_i_can_do',
  IconHistoryId = 'icon___history___id',
  IconHistoryInternalContent = 'icon___history___internal___content',
  IconHistoryInternalContentDigest = 'icon___history___internal___contentDigest',
  IconHistoryInternalDescription = 'icon___history___internal___description',
  IconHistoryInternalFieldOwners = 'icon___history___internal___fieldOwners',
  IconHistoryInternalIgnoreType = 'icon___history___internal___ignoreType',
  IconHistoryInternalMediaType = 'icon___history___internal___mediaType',
  IconHistoryInternalOwner = 'icon___history___internal___owner',
  IconHistoryInternalType = 'icon___history___internal___type',
  IconHistoryName = 'icon___history___name',
  IconHistoryNodeLocale = 'icon___history___node_locale',
  IconHistoryParentChildren = 'icon___history___parent___children',
  IconHistoryParentId = 'icon___history___parent___id',
  IconHistorySpaceId = 'icon___history___spaceId',
  IconHistorySubName = 'icon___history___subName',
  IconHistorySysRevision = 'icon___history___sys___revision',
  IconHistorySysType = 'icon___history___sys___type',
  IconHistoryUpdatedAt = 'icon___history___updatedAt',
  IconId = 'icon___id',
  IconInternalContent = 'icon___internal___content',
  IconInternalContentDigest = 'icon___internal___contentDigest',
  IconInternalDescription = 'icon___internal___description',
  IconInternalFieldOwners = 'icon___internal___fieldOwners',
  IconInternalIgnoreType = 'icon___internal___ignoreType',
  IconInternalMediaType = 'icon___internal___mediaType',
  IconInternalOwner = 'icon___internal___owner',
  IconInternalType = 'icon___internal___type',
  IconName = 'icon___name',
  IconNodeLocale = 'icon___node_locale',
  IconOss = 'icon___oss',
  IconOssChildContentfulOssDetailTextNodeChildren = 'icon___oss___childContentfulOssDetailTextNode___children',
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 'icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  IconOssChildContentfulOssDetailTextNodeDetail = 'icon___oss___childContentfulOssDetailTextNode___detail',
  IconOssChildContentfulOssDetailTextNodeId = 'icon___oss___childContentfulOssDetailTextNode___id',
  IconOssChildren = 'icon___oss___children',
  IconOssChildrenContentfulOssDetailTextNode = 'icon___oss___childrenContentfulOssDetailTextNode',
  IconOssChildrenContentfulOssDetailTextNodeChildren = 'icon___oss___childrenContentfulOssDetailTextNode___children',
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 'icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  IconOssChildrenContentfulOssDetailTextNodeDetail = 'icon___oss___childrenContentfulOssDetailTextNode___detail',
  IconOssChildrenContentfulOssDetailTextNodeId = 'icon___oss___childrenContentfulOssDetailTextNode___id',
  IconOssChildrenChildren = 'icon___oss___children___children',
  IconOssChildrenId = 'icon___oss___children___id',
  IconOssContentfulId = 'icon___oss___contentful_id',
  IconOssCreatedAt = 'icon___oss___createdAt',
  IconOssDetailChildren = 'icon___oss___detail___children',
  IconOssDetailChildrenMarkdownRemark = 'icon___oss___detail___childrenMarkdownRemark',
  IconOssDetailDetail = 'icon___oss___detail___detail',
  IconOssDetailId = 'icon___oss___detail___id',
  IconOssHref = 'icon___oss___href',
  IconOssIconChildren = 'icon___oss___icon___children',
  IconOssIconChildrenContentfulIconSvgTextNode = 'icon___oss___icon___childrenContentfulIconSvgTextNode',
  IconOssIconContact = 'icon___oss___icon___contact',
  IconOssIconContentfulId = 'icon___oss___icon___contentful_id',
  IconOssIconCreatedAt = 'icon___oss___icon___createdAt',
  IconOssIconHistory = 'icon___oss___icon___history',
  IconOssIconId = 'icon___oss___icon___id',
  IconOssIconName = 'icon___oss___icon___name',
  IconOssIconNodeLocale = 'icon___oss___icon___node_locale',
  IconOssIconOss = 'icon___oss___icon___oss',
  IconOssIconProject = 'icon___oss___icon___project',
  IconOssIconSpaceId = 'icon___oss___icon___spaceId',
  IconOssIconUpdatedAt = 'icon___oss___icon___updatedAt',
  IconOssIconWhatICanDo = 'icon___oss___icon___what_i_can_do',
  IconOssId = 'icon___oss___id',
  IconOssImageChildren = 'icon___oss___image___children',
  IconOssImageContentfulId = 'icon___oss___image___contentful_id',
  IconOssImageCreatedAt = 'icon___oss___image___createdAt',
  IconOssImageDescription = 'icon___oss___image___description',
  IconOssImageGatsbyImageData = 'icon___oss___image___gatsbyImageData',
  IconOssImageId = 'icon___oss___image___id',
  IconOssImageNodeLocale = 'icon___oss___image___node_locale',
  IconOssImageSpaceId = 'icon___oss___image___spaceId',
  IconOssImageTitle = 'icon___oss___image___title',
  IconOssImageUpdatedAt = 'icon___oss___image___updatedAt',
  IconOssInternalContent = 'icon___oss___internal___content',
  IconOssInternalContentDigest = 'icon___oss___internal___contentDigest',
  IconOssInternalDescription = 'icon___oss___internal___description',
  IconOssInternalFieldOwners = 'icon___oss___internal___fieldOwners',
  IconOssInternalIgnoreType = 'icon___oss___internal___ignoreType',
  IconOssInternalMediaType = 'icon___oss___internal___mediaType',
  IconOssInternalOwner = 'icon___oss___internal___owner',
  IconOssInternalType = 'icon___oss___internal___type',
  IconOssName = 'icon___oss___name',
  IconOssNodeLocale = 'icon___oss___node_locale',
  IconOssParentChildren = 'icon___oss___parent___children',
  IconOssParentId = 'icon___oss___parent___id',
  IconOssSpaceId = 'icon___oss___spaceId',
  IconOssStartDate = 'icon___oss___startDate',
  IconOssSubName = 'icon___oss___subName',
  IconOssSysRevision = 'icon___oss___sys___revision',
  IconOssSysType = 'icon___oss___sys___type',
  IconOssTags = 'icon___oss___tags',
  IconOssTagsChildren = 'icon___oss___tags___children',
  IconOssTagsContentfulId = 'icon___oss___tags___contentful_id',
  IconOssTagsCreatedAt = 'icon___oss___tags___createdAt',
  IconOssTagsId = 'icon___oss___tags___id',
  IconOssTagsLevel = 'icon___oss___tags___level',
  IconOssTagsName = 'icon___oss___tags___name',
  IconOssTagsNodeLocale = 'icon___oss___tags___node_locale',
  IconOssTagsOss = 'icon___oss___tags___oss',
  IconOssTagsProject = 'icon___oss___tags___project',
  IconOssTagsSkillMap = 'icon___oss___tags___skill_map',
  IconOssTagsSpaceId = 'icon___oss___tags___spaceId',
  IconOssTagsUpdatedAt = 'icon___oss___tags___updatedAt',
  IconOssUpdatedAt = 'icon___oss___updatedAt',
  IconParentChildren = 'icon___parent___children',
  IconParentChildrenChildren = 'icon___parent___children___children',
  IconParentChildrenId = 'icon___parent___children___id',
  IconParentId = 'icon___parent___id',
  IconParentInternalContent = 'icon___parent___internal___content',
  IconParentInternalContentDigest = 'icon___parent___internal___contentDigest',
  IconParentInternalDescription = 'icon___parent___internal___description',
  IconParentInternalFieldOwners = 'icon___parent___internal___fieldOwners',
  IconParentInternalIgnoreType = 'icon___parent___internal___ignoreType',
  IconParentInternalMediaType = 'icon___parent___internal___mediaType',
  IconParentInternalOwner = 'icon___parent___internal___owner',
  IconParentInternalType = 'icon___parent___internal___type',
  IconParentParentChildren = 'icon___parent___parent___children',
  IconParentParentId = 'icon___parent___parent___id',
  IconProject = 'icon___project',
  IconProjectChildContentfulProjectDetailTextNodeChildren = 'icon___project___childContentfulProjectDetailTextNode___children',
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  IconProjectChildContentfulProjectDetailTextNodeDetail = 'icon___project___childContentfulProjectDetailTextNode___detail',
  IconProjectChildContentfulProjectDetailTextNodeId = 'icon___project___childContentfulProjectDetailTextNode___id',
  IconProjectChildren = 'icon___project___children',
  IconProjectChildrenContentfulProjectDetailTextNode = 'icon___project___childrenContentfulProjectDetailTextNode',
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 'icon___project___childrenContentfulProjectDetailTextNode___children',
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 'icon___project___childrenContentfulProjectDetailTextNode___detail',
  IconProjectChildrenContentfulProjectDetailTextNodeId = 'icon___project___childrenContentfulProjectDetailTextNode___id',
  IconProjectChildrenChildren = 'icon___project___children___children',
  IconProjectChildrenId = 'icon___project___children___id',
  IconProjectContentfulId = 'icon___project___contentful_id',
  IconProjectCreatedAt = 'icon___project___createdAt',
  IconProjectDetailChildren = 'icon___project___detail___children',
  IconProjectDetailChildrenMarkdownRemark = 'icon___project___detail___childrenMarkdownRemark',
  IconProjectDetailDetail = 'icon___project___detail___detail',
  IconProjectDetailId = 'icon___project___detail___id',
  IconProjectEndDate = 'icon___project___endDate',
  IconProjectIconChildren = 'icon___project___icon___children',
  IconProjectIconChildrenContentfulIconSvgTextNode = 'icon___project___icon___childrenContentfulIconSvgTextNode',
  IconProjectIconContact = 'icon___project___icon___contact',
  IconProjectIconContentfulId = 'icon___project___icon___contentful_id',
  IconProjectIconCreatedAt = 'icon___project___icon___createdAt',
  IconProjectIconHistory = 'icon___project___icon___history',
  IconProjectIconId = 'icon___project___icon___id',
  IconProjectIconName = 'icon___project___icon___name',
  IconProjectIconNodeLocale = 'icon___project___icon___node_locale',
  IconProjectIconOss = 'icon___project___icon___oss',
  IconProjectIconProject = 'icon___project___icon___project',
  IconProjectIconSpaceId = 'icon___project___icon___spaceId',
  IconProjectIconUpdatedAt = 'icon___project___icon___updatedAt',
  IconProjectIconWhatICanDo = 'icon___project___icon___what_i_can_do',
  IconProjectId = 'icon___project___id',
  IconProjectInternalContent = 'icon___project___internal___content',
  IconProjectInternalContentDigest = 'icon___project___internal___contentDigest',
  IconProjectInternalDescription = 'icon___project___internal___description',
  IconProjectInternalFieldOwners = 'icon___project___internal___fieldOwners',
  IconProjectInternalIgnoreType = 'icon___project___internal___ignoreType',
  IconProjectInternalMediaType = 'icon___project___internal___mediaType',
  IconProjectInternalOwner = 'icon___project___internal___owner',
  IconProjectInternalType = 'icon___project___internal___type',
  IconProjectName = 'icon___project___name',
  IconProjectNodeLocale = 'icon___project___node_locale',
  IconProjectParentChildren = 'icon___project___parent___children',
  IconProjectParentId = 'icon___project___parent___id',
  IconProjectSpaceId = 'icon___project___spaceId',
  IconProjectStartDate = 'icon___project___startDate',
  IconProjectSubName = 'icon___project___subName',
  IconProjectSysRevision = 'icon___project___sys___revision',
  IconProjectSysType = 'icon___project___sys___type',
  IconProjectTags = 'icon___project___tags',
  IconProjectTagsChildren = 'icon___project___tags___children',
  IconProjectTagsContentfulId = 'icon___project___tags___contentful_id',
  IconProjectTagsCreatedAt = 'icon___project___tags___createdAt',
  IconProjectTagsId = 'icon___project___tags___id',
  IconProjectTagsLevel = 'icon___project___tags___level',
  IconProjectTagsName = 'icon___project___tags___name',
  IconProjectTagsNodeLocale = 'icon___project___tags___node_locale',
  IconProjectTagsOss = 'icon___project___tags___oss',
  IconProjectTagsProject = 'icon___project___tags___project',
  IconProjectTagsSkillMap = 'icon___project___tags___skill_map',
  IconProjectTagsSpaceId = 'icon___project___tags___spaceId',
  IconProjectTagsUpdatedAt = 'icon___project___tags___updatedAt',
  IconProjectUpdatedAt = 'icon___project___updatedAt',
  IconSpaceId = 'icon___spaceId',
  IconSvgChildMarkdownRemarkChildren = 'icon___svg___childMarkdownRemark___children',
  IconSvgChildMarkdownRemarkExcerpt = 'icon___svg___childMarkdownRemark___excerpt',
  IconSvgChildMarkdownRemarkExcerptAst = 'icon___svg___childMarkdownRemark___excerptAst',
  IconSvgChildMarkdownRemarkHeadings = 'icon___svg___childMarkdownRemark___headings',
  IconSvgChildMarkdownRemarkHtml = 'icon___svg___childMarkdownRemark___html',
  IconSvgChildMarkdownRemarkHtmlAst = 'icon___svg___childMarkdownRemark___htmlAst',
  IconSvgChildMarkdownRemarkId = 'icon___svg___childMarkdownRemark___id',
  IconSvgChildMarkdownRemarkRawMarkdownBody = 'icon___svg___childMarkdownRemark___rawMarkdownBody',
  IconSvgChildMarkdownRemarkTableOfContents = 'icon___svg___childMarkdownRemark___tableOfContents',
  IconSvgChildMarkdownRemarkTimeToRead = 'icon___svg___childMarkdownRemark___timeToRead',
  IconSvgChildren = 'icon___svg___children',
  IconSvgChildrenMarkdownRemark = 'icon___svg___childrenMarkdownRemark',
  IconSvgChildrenMarkdownRemarkChildren = 'icon___svg___childrenMarkdownRemark___children',
  IconSvgChildrenMarkdownRemarkExcerpt = 'icon___svg___childrenMarkdownRemark___excerpt',
  IconSvgChildrenMarkdownRemarkExcerptAst = 'icon___svg___childrenMarkdownRemark___excerptAst',
  IconSvgChildrenMarkdownRemarkHeadings = 'icon___svg___childrenMarkdownRemark___headings',
  IconSvgChildrenMarkdownRemarkHtml = 'icon___svg___childrenMarkdownRemark___html',
  IconSvgChildrenMarkdownRemarkHtmlAst = 'icon___svg___childrenMarkdownRemark___htmlAst',
  IconSvgChildrenMarkdownRemarkId = 'icon___svg___childrenMarkdownRemark___id',
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 'icon___svg___childrenMarkdownRemark___rawMarkdownBody',
  IconSvgChildrenMarkdownRemarkTableOfContents = 'icon___svg___childrenMarkdownRemark___tableOfContents',
  IconSvgChildrenMarkdownRemarkTimeToRead = 'icon___svg___childrenMarkdownRemark___timeToRead',
  IconSvgChildrenChildren = 'icon___svg___children___children',
  IconSvgChildrenId = 'icon___svg___children___id',
  IconSvgId = 'icon___svg___id',
  IconSvgInternalContent = 'icon___svg___internal___content',
  IconSvgInternalContentDigest = 'icon___svg___internal___contentDigest',
  IconSvgInternalDescription = 'icon___svg___internal___description',
  IconSvgInternalFieldOwners = 'icon___svg___internal___fieldOwners',
  IconSvgInternalIgnoreType = 'icon___svg___internal___ignoreType',
  IconSvgInternalMediaType = 'icon___svg___internal___mediaType',
  IconSvgInternalOwner = 'icon___svg___internal___owner',
  IconSvgInternalType = 'icon___svg___internal___type',
  IconSvgParentChildren = 'icon___svg___parent___children',
  IconSvgParentId = 'icon___svg___parent___id',
  IconSvgSvg = 'icon___svg___svg',
  IconSvgSysType = 'icon___svg___sys___type',
  IconSysRevision = 'icon___sys___revision',
  IconSysType = 'icon___sys___type',
  IconUpdatedAt = 'icon___updatedAt',
  IconWhatICanDo = 'icon___what_i_can_do',
  IconWhatICanDoChildren = 'icon___what_i_can_do___children',
  IconWhatICanDoChildrenChildren = 'icon___what_i_can_do___children___children',
  IconWhatICanDoChildrenId = 'icon___what_i_can_do___children___id',
  IconWhatICanDoContentfulId = 'icon___what_i_can_do___contentful_id',
  IconWhatICanDoCreatedAt = 'icon___what_i_can_do___createdAt',
  IconWhatICanDoIconChildren = 'icon___what_i_can_do___icon___children',
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 'icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  IconWhatICanDoIconContact = 'icon___what_i_can_do___icon___contact',
  IconWhatICanDoIconContentfulId = 'icon___what_i_can_do___icon___contentful_id',
  IconWhatICanDoIconCreatedAt = 'icon___what_i_can_do___icon___createdAt',
  IconWhatICanDoIconHistory = 'icon___what_i_can_do___icon___history',
  IconWhatICanDoIconId = 'icon___what_i_can_do___icon___id',
  IconWhatICanDoIconName = 'icon___what_i_can_do___icon___name',
  IconWhatICanDoIconNodeLocale = 'icon___what_i_can_do___icon___node_locale',
  IconWhatICanDoIconOss = 'icon___what_i_can_do___icon___oss',
  IconWhatICanDoIconProject = 'icon___what_i_can_do___icon___project',
  IconWhatICanDoIconSpaceId = 'icon___what_i_can_do___icon___spaceId',
  IconWhatICanDoIconUpdatedAt = 'icon___what_i_can_do___icon___updatedAt',
  IconWhatICanDoIconWhatICanDo = 'icon___what_i_can_do___icon___what_i_can_do',
  IconWhatICanDoId = 'icon___what_i_can_do___id',
  IconWhatICanDoInternalContent = 'icon___what_i_can_do___internal___content',
  IconWhatICanDoInternalContentDigest = 'icon___what_i_can_do___internal___contentDigest',
  IconWhatICanDoInternalDescription = 'icon___what_i_can_do___internal___description',
  IconWhatICanDoInternalFieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  IconWhatICanDoInternalIgnoreType = 'icon___what_i_can_do___internal___ignoreType',
  IconWhatICanDoInternalMediaType = 'icon___what_i_can_do___internal___mediaType',
  IconWhatICanDoInternalOwner = 'icon___what_i_can_do___internal___owner',
  IconWhatICanDoInternalType = 'icon___what_i_can_do___internal___type',
  IconWhatICanDoName = 'icon___what_i_can_do___name',
  IconWhatICanDoNodeLocale = 'icon___what_i_can_do___node_locale',
  IconWhatICanDoParentChildren = 'icon___what_i_can_do___parent___children',
  IconWhatICanDoParentId = 'icon___what_i_can_do___parent___id',
  IconWhatICanDoSortKey = 'icon___what_i_can_do___sortKey',
  IconWhatICanDoSpaceId = 'icon___what_i_can_do___spaceId',
  IconWhatICanDoSubName = 'icon___what_i_can_do___subName',
  IconWhatICanDoSysRevision = 'icon___what_i_can_do___sys___revision',
  IconWhatICanDoSysType = 'icon___what_i_can_do___sys___type',
  IconWhatICanDoUpdatedAt = 'icon___what_i_can_do___updatedAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  SubName = 'subName',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulHistoryFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  icon?: InputMaybe<ContentfulIconFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  subName?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulHistorySysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulHistoryFilterListInput = {
  elemMatch?: InputMaybe<ContentfulHistoryFilterInput>;
};

export type ContentfulHistoryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulHistoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulHistoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulHistory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulHistoryGroupConnectionDistinctArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryGroupConnectionGroupArgs = {
  field: ContentfulHistoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulHistoryGroupConnectionMaxArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryGroupConnectionMinArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryGroupConnectionSumArgs = {
  field: ContentfulHistoryFieldsEnum;
};

export type ContentfulHistorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulHistoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulHistorySys = {
  contentType?: Maybe<ContentfulHistorySysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulHistorySysContentType = {
  sys?: Maybe<ContentfulHistorySysContentTypeSys>;
};

export type ContentfulHistorySysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulHistorySysContentTypeSysFilterInput>;
};

export type ContentfulHistorySysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulHistorySysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHistorySysFilterInput = {
  contentType?: InputMaybe<ContentfulHistorySysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulIcon = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulIconSvgTextNode or null if there are no children of given type on this node */
  childContentfulIconSvgTextNode?: Maybe<ContentfulIconSvgTextNode>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type contentfulIconSvgTextNode */
  childrenContentfulIconSvgTextNode?: Maybe<Array<Maybe<ContentfulIconSvgTextNode>>>;
  contact?: Maybe<Array<Maybe<ContentfulContact>>>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  history?: Maybe<Array<Maybe<ContentfulHistory>>>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  oss?: Maybe<Array<Maybe<ContentfulOss>>>;
  parent?: Maybe<Node>;
  project?: Maybe<Array<Maybe<ContentfulProject>>>;
  spaceId?: Maybe<Scalars['String']>;
  svg?: Maybe<ContentfulIconSvgTextNode>;
  sys?: Maybe<ContentfulIconSys>;
  updatedAt?: Maybe<Scalars['Date']>;
  what_i_can_do?: Maybe<Array<Maybe<ContentfulWhatICanDo>>>;
};


export type ContentfulIconCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulIconUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulIconConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulIconEdge>;
  group: Array<ContentfulIconGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulIcon>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulIconConnectionDistinctArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconConnectionGroupArgs = {
  field: ContentfulIconFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulIconConnectionMaxArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconConnectionMinArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconConnectionSumArgs = {
  field: ContentfulIconFieldsEnum;
};

export type ContentfulIconEdge = {
  next?: Maybe<ContentfulIcon>;
  node: ContentfulIcon;
  previous?: Maybe<ContentfulIcon>;
};

export enum ContentfulIconFieldsEnum {
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'childContentfulIconSvgTextNode___childMarkdownRemark___children',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkChildrenChildren = 'childContentfulIconSvgTextNode___childMarkdownRemark___children___children',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkChildrenId = 'childContentfulIconSvgTextNode___childMarkdownRemark___children___id',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkFrontmatterTitle = 'childContentfulIconSvgTextNode___childMarkdownRemark___frontmatter___title',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsDepth = 'childContentfulIconSvgTextNode___childMarkdownRemark___headings___depth',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsId = 'childContentfulIconSvgTextNode___childMarkdownRemark___headings___id',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsValue = 'childContentfulIconSvgTextNode___childMarkdownRemark___headings___value',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'childContentfulIconSvgTextNode___childMarkdownRemark___html',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 'childContentfulIconSvgTextNode___childMarkdownRemark___id',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalContent = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___content',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalContentDigest = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___contentDigest',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalDescription = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___description',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalFieldOwners = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalIgnoreType = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___ignoreType',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalMediaType = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___mediaType',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalOwner = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___owner',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalType = 'childContentfulIconSvgTextNode___childMarkdownRemark___internal___type',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkParentChildren = 'childContentfulIconSvgTextNode___childMarkdownRemark___parent___children',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkParentId = 'childContentfulIconSvgTextNode___childMarkdownRemark___parent___id',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkWordCountParagraphs = 'childContentfulIconSvgTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkWordCountSentences = 'childContentfulIconSvgTextNode___childMarkdownRemark___wordCount___sentences',
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkWordCountWords = 'childContentfulIconSvgTextNode___childMarkdownRemark___wordCount___words',
  ChildContentfulIconSvgTextNodeChildren = 'childContentfulIconSvgTextNode___children',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'childContentfulIconSvgTextNode___childrenMarkdownRemark',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenChildren = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___children___children',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenId = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___children___id',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkFrontmatterTitle = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___frontmatter___title',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsDepth = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___headings___depth',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsId = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___headings___id',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsValue = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___headings___value',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContent = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___content',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContentDigest = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___contentDigest',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalDescription = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___description',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalFieldOwners = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___fieldOwners',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalIgnoreType = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___ignoreType',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalMediaType = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___mediaType',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalOwner = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___owner',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalType = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___internal___type',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkParentChildren = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___parent___children',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkParentId = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___parent___id',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountParagraphs = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountSentences = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___sentences',
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountWords = 'childContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___words',
  ChildContentfulIconSvgTextNodeChildrenChildren = 'childContentfulIconSvgTextNode___children___children',
  ChildContentfulIconSvgTextNodeChildrenChildrenChildren = 'childContentfulIconSvgTextNode___children___children___children',
  ChildContentfulIconSvgTextNodeChildrenChildrenId = 'childContentfulIconSvgTextNode___children___children___id',
  ChildContentfulIconSvgTextNodeChildrenId = 'childContentfulIconSvgTextNode___children___id',
  ChildContentfulIconSvgTextNodeChildrenInternalContent = 'childContentfulIconSvgTextNode___children___internal___content',
  ChildContentfulIconSvgTextNodeChildrenInternalContentDigest = 'childContentfulIconSvgTextNode___children___internal___contentDigest',
  ChildContentfulIconSvgTextNodeChildrenInternalDescription = 'childContentfulIconSvgTextNode___children___internal___description',
  ChildContentfulIconSvgTextNodeChildrenInternalFieldOwners = 'childContentfulIconSvgTextNode___children___internal___fieldOwners',
  ChildContentfulIconSvgTextNodeChildrenInternalIgnoreType = 'childContentfulIconSvgTextNode___children___internal___ignoreType',
  ChildContentfulIconSvgTextNodeChildrenInternalMediaType = 'childContentfulIconSvgTextNode___children___internal___mediaType',
  ChildContentfulIconSvgTextNodeChildrenInternalOwner = 'childContentfulIconSvgTextNode___children___internal___owner',
  ChildContentfulIconSvgTextNodeChildrenInternalType = 'childContentfulIconSvgTextNode___children___internal___type',
  ChildContentfulIconSvgTextNodeChildrenParentChildren = 'childContentfulIconSvgTextNode___children___parent___children',
  ChildContentfulIconSvgTextNodeChildrenParentId = 'childContentfulIconSvgTextNode___children___parent___id',
  ChildContentfulIconSvgTextNodeId = 'childContentfulIconSvgTextNode___id',
  ChildContentfulIconSvgTextNodeInternalContent = 'childContentfulIconSvgTextNode___internal___content',
  ChildContentfulIconSvgTextNodeInternalContentDigest = 'childContentfulIconSvgTextNode___internal___contentDigest',
  ChildContentfulIconSvgTextNodeInternalDescription = 'childContentfulIconSvgTextNode___internal___description',
  ChildContentfulIconSvgTextNodeInternalFieldOwners = 'childContentfulIconSvgTextNode___internal___fieldOwners',
  ChildContentfulIconSvgTextNodeInternalIgnoreType = 'childContentfulIconSvgTextNode___internal___ignoreType',
  ChildContentfulIconSvgTextNodeInternalMediaType = 'childContentfulIconSvgTextNode___internal___mediaType',
  ChildContentfulIconSvgTextNodeInternalOwner = 'childContentfulIconSvgTextNode___internal___owner',
  ChildContentfulIconSvgTextNodeInternalType = 'childContentfulIconSvgTextNode___internal___type',
  ChildContentfulIconSvgTextNodeParentChildren = 'childContentfulIconSvgTextNode___parent___children',
  ChildContentfulIconSvgTextNodeParentChildrenChildren = 'childContentfulIconSvgTextNode___parent___children___children',
  ChildContentfulIconSvgTextNodeParentChildrenId = 'childContentfulIconSvgTextNode___parent___children___id',
  ChildContentfulIconSvgTextNodeParentId = 'childContentfulIconSvgTextNode___parent___id',
  ChildContentfulIconSvgTextNodeParentInternalContent = 'childContentfulIconSvgTextNode___parent___internal___content',
  ChildContentfulIconSvgTextNodeParentInternalContentDigest = 'childContentfulIconSvgTextNode___parent___internal___contentDigest',
  ChildContentfulIconSvgTextNodeParentInternalDescription = 'childContentfulIconSvgTextNode___parent___internal___description',
  ChildContentfulIconSvgTextNodeParentInternalFieldOwners = 'childContentfulIconSvgTextNode___parent___internal___fieldOwners',
  ChildContentfulIconSvgTextNodeParentInternalIgnoreType = 'childContentfulIconSvgTextNode___parent___internal___ignoreType',
  ChildContentfulIconSvgTextNodeParentInternalMediaType = 'childContentfulIconSvgTextNode___parent___internal___mediaType',
  ChildContentfulIconSvgTextNodeParentInternalOwner = 'childContentfulIconSvgTextNode___parent___internal___owner',
  ChildContentfulIconSvgTextNodeParentInternalType = 'childContentfulIconSvgTextNode___parent___internal___type',
  ChildContentfulIconSvgTextNodeParentParentChildren = 'childContentfulIconSvgTextNode___parent___parent___children',
  ChildContentfulIconSvgTextNodeParentParentId = 'childContentfulIconSvgTextNode___parent___parent___id',
  ChildContentfulIconSvgTextNodeSvg = 'childContentfulIconSvgTextNode___svg',
  ChildContentfulIconSvgTextNodeSysType = 'childContentfulIconSvgTextNode___sys___type',
  Children = 'children',
  ChildrenContentfulIconSvgTextNode = 'childrenContentfulIconSvgTextNode',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildrenChildren = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___children___children',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildrenId = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___children___id',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkFrontmatterTitle = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___frontmatter___title',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsDepth = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___headings___depth',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsId = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___headings___id',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsValue = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___headings___value',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalContent = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___content',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalContentDigest = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___contentDigest',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalDescription = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___description',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalFieldOwners = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalIgnoreType = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___ignoreType',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalMediaType = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___mediaType',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalOwner = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___owner',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalType = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___internal___type',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkParentChildren = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___parent___children',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkParentId = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___parent___id',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkWordCountParagraphs = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkWordCountSentences = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___wordCount___sentences',
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkWordCountWords = 'childrenContentfulIconSvgTextNode___childMarkdownRemark___wordCount___words',
  ChildrenContentfulIconSvgTextNodeChildren = 'childrenContentfulIconSvgTextNode___children',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenChildren = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children___children',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenId = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children___id',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkFrontmatterTitle = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___frontmatter___title',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsDepth = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings___depth',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsId = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings___id',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsValue = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings___value',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContent = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___content',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContentDigest = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___contentDigest',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalDescription = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___description',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalFieldOwners = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___fieldOwners',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalIgnoreType = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___ignoreType',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalMediaType = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___mediaType',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalOwner = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___owner',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalType = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___internal___type',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkParentChildren = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___parent___children',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkParentId = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___parent___id',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountParagraphs = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountSentences = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___sentences',
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountWords = 'childrenContentfulIconSvgTextNode___childrenMarkdownRemark___wordCount___words',
  ChildrenContentfulIconSvgTextNodeChildrenChildren = 'childrenContentfulIconSvgTextNode___children___children',
  ChildrenContentfulIconSvgTextNodeChildrenChildrenChildren = 'childrenContentfulIconSvgTextNode___children___children___children',
  ChildrenContentfulIconSvgTextNodeChildrenChildrenId = 'childrenContentfulIconSvgTextNode___children___children___id',
  ChildrenContentfulIconSvgTextNodeChildrenId = 'childrenContentfulIconSvgTextNode___children___id',
  ChildrenContentfulIconSvgTextNodeChildrenInternalContent = 'childrenContentfulIconSvgTextNode___children___internal___content',
  ChildrenContentfulIconSvgTextNodeChildrenInternalContentDigest = 'childrenContentfulIconSvgTextNode___children___internal___contentDigest',
  ChildrenContentfulIconSvgTextNodeChildrenInternalDescription = 'childrenContentfulIconSvgTextNode___children___internal___description',
  ChildrenContentfulIconSvgTextNodeChildrenInternalFieldOwners = 'childrenContentfulIconSvgTextNode___children___internal___fieldOwners',
  ChildrenContentfulIconSvgTextNodeChildrenInternalIgnoreType = 'childrenContentfulIconSvgTextNode___children___internal___ignoreType',
  ChildrenContentfulIconSvgTextNodeChildrenInternalMediaType = 'childrenContentfulIconSvgTextNode___children___internal___mediaType',
  ChildrenContentfulIconSvgTextNodeChildrenInternalOwner = 'childrenContentfulIconSvgTextNode___children___internal___owner',
  ChildrenContentfulIconSvgTextNodeChildrenInternalType = 'childrenContentfulIconSvgTextNode___children___internal___type',
  ChildrenContentfulIconSvgTextNodeChildrenParentChildren = 'childrenContentfulIconSvgTextNode___children___parent___children',
  ChildrenContentfulIconSvgTextNodeChildrenParentId = 'childrenContentfulIconSvgTextNode___children___parent___id',
  ChildrenContentfulIconSvgTextNodeId = 'childrenContentfulIconSvgTextNode___id',
  ChildrenContentfulIconSvgTextNodeInternalContent = 'childrenContentfulIconSvgTextNode___internal___content',
  ChildrenContentfulIconSvgTextNodeInternalContentDigest = 'childrenContentfulIconSvgTextNode___internal___contentDigest',
  ChildrenContentfulIconSvgTextNodeInternalDescription = 'childrenContentfulIconSvgTextNode___internal___description',
  ChildrenContentfulIconSvgTextNodeInternalFieldOwners = 'childrenContentfulIconSvgTextNode___internal___fieldOwners',
  ChildrenContentfulIconSvgTextNodeInternalIgnoreType = 'childrenContentfulIconSvgTextNode___internal___ignoreType',
  ChildrenContentfulIconSvgTextNodeInternalMediaType = 'childrenContentfulIconSvgTextNode___internal___mediaType',
  ChildrenContentfulIconSvgTextNodeInternalOwner = 'childrenContentfulIconSvgTextNode___internal___owner',
  ChildrenContentfulIconSvgTextNodeInternalType = 'childrenContentfulIconSvgTextNode___internal___type',
  ChildrenContentfulIconSvgTextNodeParentChildren = 'childrenContentfulIconSvgTextNode___parent___children',
  ChildrenContentfulIconSvgTextNodeParentChildrenChildren = 'childrenContentfulIconSvgTextNode___parent___children___children',
  ChildrenContentfulIconSvgTextNodeParentChildrenId = 'childrenContentfulIconSvgTextNode___parent___children___id',
  ChildrenContentfulIconSvgTextNodeParentId = 'childrenContentfulIconSvgTextNode___parent___id',
  ChildrenContentfulIconSvgTextNodeParentInternalContent = 'childrenContentfulIconSvgTextNode___parent___internal___content',
  ChildrenContentfulIconSvgTextNodeParentInternalContentDigest = 'childrenContentfulIconSvgTextNode___parent___internal___contentDigest',
  ChildrenContentfulIconSvgTextNodeParentInternalDescription = 'childrenContentfulIconSvgTextNode___parent___internal___description',
  ChildrenContentfulIconSvgTextNodeParentInternalFieldOwners = 'childrenContentfulIconSvgTextNode___parent___internal___fieldOwners',
  ChildrenContentfulIconSvgTextNodeParentInternalIgnoreType = 'childrenContentfulIconSvgTextNode___parent___internal___ignoreType',
  ChildrenContentfulIconSvgTextNodeParentInternalMediaType = 'childrenContentfulIconSvgTextNode___parent___internal___mediaType',
  ChildrenContentfulIconSvgTextNodeParentInternalOwner = 'childrenContentfulIconSvgTextNode___parent___internal___owner',
  ChildrenContentfulIconSvgTextNodeParentInternalType = 'childrenContentfulIconSvgTextNode___parent___internal___type',
  ChildrenContentfulIconSvgTextNodeParentParentChildren = 'childrenContentfulIconSvgTextNode___parent___parent___children',
  ChildrenContentfulIconSvgTextNodeParentParentId = 'childrenContentfulIconSvgTextNode___parent___parent___id',
  ChildrenContentfulIconSvgTextNodeSvg = 'childrenContentfulIconSvgTextNode___svg',
  ChildrenContentfulIconSvgTextNodeSysType = 'childrenContentfulIconSvgTextNode___sys___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Contact = 'contact',
  ContactChildren = 'contact___children',
  ContactChildrenChildren = 'contact___children___children',
  ContactChildrenChildrenChildren = 'contact___children___children___children',
  ContactChildrenChildrenId = 'contact___children___children___id',
  ContactChildrenId = 'contact___children___id',
  ContactChildrenInternalContent = 'contact___children___internal___content',
  ContactChildrenInternalContentDigest = 'contact___children___internal___contentDigest',
  ContactChildrenInternalDescription = 'contact___children___internal___description',
  ContactChildrenInternalFieldOwners = 'contact___children___internal___fieldOwners',
  ContactChildrenInternalIgnoreType = 'contact___children___internal___ignoreType',
  ContactChildrenInternalMediaType = 'contact___children___internal___mediaType',
  ContactChildrenInternalOwner = 'contact___children___internal___owner',
  ContactChildrenInternalType = 'contact___children___internal___type',
  ContactChildrenParentChildren = 'contact___children___parent___children',
  ContactChildrenParentId = 'contact___children___parent___id',
  ContactContentfulId = 'contact___contentful_id',
  ContactCreatedAt = 'contact___createdAt',
  ContactHref = 'contact___href',
  ContactIconSvgDarkChildren = 'contact___iconSvgDark___children',
  ContactIconSvgDarkChildrenChildren = 'contact___iconSvgDark___children___children',
  ContactIconSvgDarkChildrenId = 'contact___iconSvgDark___children___id',
  ContactIconSvgDarkContentfulId = 'contact___iconSvgDark___contentful_id',
  ContactIconSvgDarkCreatedAt = 'contact___iconSvgDark___createdAt',
  ContactIconSvgDarkDescription = 'contact___iconSvgDark___description',
  ContactIconSvgDarkFieldsLocalFile = 'contact___iconSvgDark___fields___localFile',
  ContactIconSvgDarkFileContentType = 'contact___iconSvgDark___file___contentType',
  ContactIconSvgDarkFileFileName = 'contact___iconSvgDark___file___fileName',
  ContactIconSvgDarkFileUrl = 'contact___iconSvgDark___file___url',
  ContactIconSvgDarkGatsbyImageData = 'contact___iconSvgDark___gatsbyImageData',
  ContactIconSvgDarkId = 'contact___iconSvgDark___id',
  ContactIconSvgDarkInternalContent = 'contact___iconSvgDark___internal___content',
  ContactIconSvgDarkInternalContentDigest = 'contact___iconSvgDark___internal___contentDigest',
  ContactIconSvgDarkInternalDescription = 'contact___iconSvgDark___internal___description',
  ContactIconSvgDarkInternalFieldOwners = 'contact___iconSvgDark___internal___fieldOwners',
  ContactIconSvgDarkInternalIgnoreType = 'contact___iconSvgDark___internal___ignoreType',
  ContactIconSvgDarkInternalMediaType = 'contact___iconSvgDark___internal___mediaType',
  ContactIconSvgDarkInternalOwner = 'contact___iconSvgDark___internal___owner',
  ContactIconSvgDarkInternalType = 'contact___iconSvgDark___internal___type',
  ContactIconSvgDarkLocalFileAbsolutePath = 'contact___iconSvgDark___localFile___absolutePath',
  ContactIconSvgDarkLocalFileAccessTime = 'contact___iconSvgDark___localFile___accessTime',
  ContactIconSvgDarkLocalFileAtime = 'contact___iconSvgDark___localFile___atime',
  ContactIconSvgDarkLocalFileAtimeMs = 'contact___iconSvgDark___localFile___atimeMs',
  ContactIconSvgDarkLocalFileBase = 'contact___iconSvgDark___localFile___base',
  ContactIconSvgDarkLocalFileBirthTime = 'contact___iconSvgDark___localFile___birthTime',
  ContactIconSvgDarkLocalFileBirthtime = 'contact___iconSvgDark___localFile___birthtime',
  ContactIconSvgDarkLocalFileBirthtimeMs = 'contact___iconSvgDark___localFile___birthtimeMs',
  ContactIconSvgDarkLocalFileBlksize = 'contact___iconSvgDark___localFile___blksize',
  ContactIconSvgDarkLocalFileBlocks = 'contact___iconSvgDark___localFile___blocks',
  ContactIconSvgDarkLocalFileChangeTime = 'contact___iconSvgDark___localFile___changeTime',
  ContactIconSvgDarkLocalFileChildren = 'contact___iconSvgDark___localFile___children',
  ContactIconSvgDarkLocalFileChildrenImageSharp = 'contact___iconSvgDark___localFile___childrenImageSharp',
  ContactIconSvgDarkLocalFileChildrenLocale = 'contact___iconSvgDark___localFile___childrenLocale',
  ContactIconSvgDarkLocalFileCtime = 'contact___iconSvgDark___localFile___ctime',
  ContactIconSvgDarkLocalFileCtimeMs = 'contact___iconSvgDark___localFile___ctimeMs',
  ContactIconSvgDarkLocalFileDev = 'contact___iconSvgDark___localFile___dev',
  ContactIconSvgDarkLocalFileDir = 'contact___iconSvgDark___localFile___dir',
  ContactIconSvgDarkLocalFileExt = 'contact___iconSvgDark___localFile___ext',
  ContactIconSvgDarkLocalFileExtension = 'contact___iconSvgDark___localFile___extension',
  ContactIconSvgDarkLocalFileGid = 'contact___iconSvgDark___localFile___gid',
  ContactIconSvgDarkLocalFileId = 'contact___iconSvgDark___localFile___id',
  ContactIconSvgDarkLocalFileIno = 'contact___iconSvgDark___localFile___ino',
  ContactIconSvgDarkLocalFileMode = 'contact___iconSvgDark___localFile___mode',
  ContactIconSvgDarkLocalFileModifiedTime = 'contact___iconSvgDark___localFile___modifiedTime',
  ContactIconSvgDarkLocalFileMtime = 'contact___iconSvgDark___localFile___mtime',
  ContactIconSvgDarkLocalFileMtimeMs = 'contact___iconSvgDark___localFile___mtimeMs',
  ContactIconSvgDarkLocalFileName = 'contact___iconSvgDark___localFile___name',
  ContactIconSvgDarkLocalFileNlink = 'contact___iconSvgDark___localFile___nlink',
  ContactIconSvgDarkLocalFilePrettySize = 'contact___iconSvgDark___localFile___prettySize',
  ContactIconSvgDarkLocalFilePublicUrl = 'contact___iconSvgDark___localFile___publicURL',
  ContactIconSvgDarkLocalFileRdev = 'contact___iconSvgDark___localFile___rdev',
  ContactIconSvgDarkLocalFileRelativeDirectory = 'contact___iconSvgDark___localFile___relativeDirectory',
  ContactIconSvgDarkLocalFileRelativePath = 'contact___iconSvgDark___localFile___relativePath',
  ContactIconSvgDarkLocalFileRoot = 'contact___iconSvgDark___localFile___root',
  ContactIconSvgDarkLocalFileSize = 'contact___iconSvgDark___localFile___size',
  ContactIconSvgDarkLocalFileSourceInstanceName = 'contact___iconSvgDark___localFile___sourceInstanceName',
  ContactIconSvgDarkLocalFileUid = 'contact___iconSvgDark___localFile___uid',
  ContactIconSvgDarkLocalFileUrl = 'contact___iconSvgDark___localFile___url',
  ContactIconSvgDarkNodeLocale = 'contact___iconSvgDark___node_locale',
  ContactIconSvgDarkParentChildren = 'contact___iconSvgDark___parent___children',
  ContactIconSvgDarkParentId = 'contact___iconSvgDark___parent___id',
  ContactIconSvgDarkSpaceId = 'contact___iconSvgDark___spaceId',
  ContactIconSvgDarkSysRevision = 'contact___iconSvgDark___sys___revision',
  ContactIconSvgDarkSysType = 'contact___iconSvgDark___sys___type',
  ContactIconSvgDarkTitle = 'contact___iconSvgDark___title',
  ContactIconSvgDarkUpdatedAt = 'contact___iconSvgDark___updatedAt',
  ContactIconSvgLightChildren = 'contact___iconSvgLight___children',
  ContactIconSvgLightChildrenChildren = 'contact___iconSvgLight___children___children',
  ContactIconSvgLightChildrenId = 'contact___iconSvgLight___children___id',
  ContactIconSvgLightContentfulId = 'contact___iconSvgLight___contentful_id',
  ContactIconSvgLightCreatedAt = 'contact___iconSvgLight___createdAt',
  ContactIconSvgLightDescription = 'contact___iconSvgLight___description',
  ContactIconSvgLightFieldsLocalFile = 'contact___iconSvgLight___fields___localFile',
  ContactIconSvgLightFileContentType = 'contact___iconSvgLight___file___contentType',
  ContactIconSvgLightFileFileName = 'contact___iconSvgLight___file___fileName',
  ContactIconSvgLightFileUrl = 'contact___iconSvgLight___file___url',
  ContactIconSvgLightGatsbyImageData = 'contact___iconSvgLight___gatsbyImageData',
  ContactIconSvgLightId = 'contact___iconSvgLight___id',
  ContactIconSvgLightInternalContent = 'contact___iconSvgLight___internal___content',
  ContactIconSvgLightInternalContentDigest = 'contact___iconSvgLight___internal___contentDigest',
  ContactIconSvgLightInternalDescription = 'contact___iconSvgLight___internal___description',
  ContactIconSvgLightInternalFieldOwners = 'contact___iconSvgLight___internal___fieldOwners',
  ContactIconSvgLightInternalIgnoreType = 'contact___iconSvgLight___internal___ignoreType',
  ContactIconSvgLightInternalMediaType = 'contact___iconSvgLight___internal___mediaType',
  ContactIconSvgLightInternalOwner = 'contact___iconSvgLight___internal___owner',
  ContactIconSvgLightInternalType = 'contact___iconSvgLight___internal___type',
  ContactIconSvgLightLocalFileAbsolutePath = 'contact___iconSvgLight___localFile___absolutePath',
  ContactIconSvgLightLocalFileAccessTime = 'contact___iconSvgLight___localFile___accessTime',
  ContactIconSvgLightLocalFileAtime = 'contact___iconSvgLight___localFile___atime',
  ContactIconSvgLightLocalFileAtimeMs = 'contact___iconSvgLight___localFile___atimeMs',
  ContactIconSvgLightLocalFileBase = 'contact___iconSvgLight___localFile___base',
  ContactIconSvgLightLocalFileBirthTime = 'contact___iconSvgLight___localFile___birthTime',
  ContactIconSvgLightLocalFileBirthtime = 'contact___iconSvgLight___localFile___birthtime',
  ContactIconSvgLightLocalFileBirthtimeMs = 'contact___iconSvgLight___localFile___birthtimeMs',
  ContactIconSvgLightLocalFileBlksize = 'contact___iconSvgLight___localFile___blksize',
  ContactIconSvgLightLocalFileBlocks = 'contact___iconSvgLight___localFile___blocks',
  ContactIconSvgLightLocalFileChangeTime = 'contact___iconSvgLight___localFile___changeTime',
  ContactIconSvgLightLocalFileChildren = 'contact___iconSvgLight___localFile___children',
  ContactIconSvgLightLocalFileChildrenImageSharp = 'contact___iconSvgLight___localFile___childrenImageSharp',
  ContactIconSvgLightLocalFileChildrenLocale = 'contact___iconSvgLight___localFile___childrenLocale',
  ContactIconSvgLightLocalFileCtime = 'contact___iconSvgLight___localFile___ctime',
  ContactIconSvgLightLocalFileCtimeMs = 'contact___iconSvgLight___localFile___ctimeMs',
  ContactIconSvgLightLocalFileDev = 'contact___iconSvgLight___localFile___dev',
  ContactIconSvgLightLocalFileDir = 'contact___iconSvgLight___localFile___dir',
  ContactIconSvgLightLocalFileExt = 'contact___iconSvgLight___localFile___ext',
  ContactIconSvgLightLocalFileExtension = 'contact___iconSvgLight___localFile___extension',
  ContactIconSvgLightLocalFileGid = 'contact___iconSvgLight___localFile___gid',
  ContactIconSvgLightLocalFileId = 'contact___iconSvgLight___localFile___id',
  ContactIconSvgLightLocalFileIno = 'contact___iconSvgLight___localFile___ino',
  ContactIconSvgLightLocalFileMode = 'contact___iconSvgLight___localFile___mode',
  ContactIconSvgLightLocalFileModifiedTime = 'contact___iconSvgLight___localFile___modifiedTime',
  ContactIconSvgLightLocalFileMtime = 'contact___iconSvgLight___localFile___mtime',
  ContactIconSvgLightLocalFileMtimeMs = 'contact___iconSvgLight___localFile___mtimeMs',
  ContactIconSvgLightLocalFileName = 'contact___iconSvgLight___localFile___name',
  ContactIconSvgLightLocalFileNlink = 'contact___iconSvgLight___localFile___nlink',
  ContactIconSvgLightLocalFilePrettySize = 'contact___iconSvgLight___localFile___prettySize',
  ContactIconSvgLightLocalFilePublicUrl = 'contact___iconSvgLight___localFile___publicURL',
  ContactIconSvgLightLocalFileRdev = 'contact___iconSvgLight___localFile___rdev',
  ContactIconSvgLightLocalFileRelativeDirectory = 'contact___iconSvgLight___localFile___relativeDirectory',
  ContactIconSvgLightLocalFileRelativePath = 'contact___iconSvgLight___localFile___relativePath',
  ContactIconSvgLightLocalFileRoot = 'contact___iconSvgLight___localFile___root',
  ContactIconSvgLightLocalFileSize = 'contact___iconSvgLight___localFile___size',
  ContactIconSvgLightLocalFileSourceInstanceName = 'contact___iconSvgLight___localFile___sourceInstanceName',
  ContactIconSvgLightLocalFileUid = 'contact___iconSvgLight___localFile___uid',
  ContactIconSvgLightLocalFileUrl = 'contact___iconSvgLight___localFile___url',
  ContactIconSvgLightNodeLocale = 'contact___iconSvgLight___node_locale',
  ContactIconSvgLightParentChildren = 'contact___iconSvgLight___parent___children',
  ContactIconSvgLightParentId = 'contact___iconSvgLight___parent___id',
  ContactIconSvgLightSpaceId = 'contact___iconSvgLight___spaceId',
  ContactIconSvgLightSysRevision = 'contact___iconSvgLight___sys___revision',
  ContactIconSvgLightSysType = 'contact___iconSvgLight___sys___type',
  ContactIconSvgLightTitle = 'contact___iconSvgLight___title',
  ContactIconSvgLightUpdatedAt = 'contact___iconSvgLight___updatedAt',
  ContactIconChildContentfulIconSvgTextNodeChildren = 'contact___icon___childContentfulIconSvgTextNode___children',
  ContactIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'contact___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  ContactIconChildContentfulIconSvgTextNodeId = 'contact___icon___childContentfulIconSvgTextNode___id',
  ContactIconChildContentfulIconSvgTextNodeSvg = 'contact___icon___childContentfulIconSvgTextNode___svg',
  ContactIconChildren = 'contact___icon___children',
  ContactIconChildrenContentfulIconSvgTextNode = 'contact___icon___childrenContentfulIconSvgTextNode',
  ContactIconChildrenContentfulIconSvgTextNodeChildren = 'contact___icon___childrenContentfulIconSvgTextNode___children',
  ContactIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'contact___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  ContactIconChildrenContentfulIconSvgTextNodeId = 'contact___icon___childrenContentfulIconSvgTextNode___id',
  ContactIconChildrenContentfulIconSvgTextNodeSvg = 'contact___icon___childrenContentfulIconSvgTextNode___svg',
  ContactIconChildrenChildren = 'contact___icon___children___children',
  ContactIconChildrenId = 'contact___icon___children___id',
  ContactIconContact = 'contact___icon___contact',
  ContactIconContactChildren = 'contact___icon___contact___children',
  ContactIconContactContentfulId = 'contact___icon___contact___contentful_id',
  ContactIconContactCreatedAt = 'contact___icon___contact___createdAt',
  ContactIconContactHref = 'contact___icon___contact___href',
  ContactIconContactId = 'contact___icon___contact___id',
  ContactIconContactName = 'contact___icon___contact___name',
  ContactIconContactNodeLocale = 'contact___icon___contact___node_locale',
  ContactIconContactSortKey = 'contact___icon___contact___sortKey',
  ContactIconContactSpaceId = 'contact___icon___contact___spaceId',
  ContactIconContactSubName = 'contact___icon___contact___subName',
  ContactIconContactUpdatedAt = 'contact___icon___contact___updatedAt',
  ContactIconContentfulId = 'contact___icon___contentful_id',
  ContactIconCreatedAt = 'contact___icon___createdAt',
  ContactIconHistory = 'contact___icon___history',
  ContactIconHistoryChildren = 'contact___icon___history___children',
  ContactIconHistoryContentfulId = 'contact___icon___history___contentful_id',
  ContactIconHistoryCreatedAt = 'contact___icon___history___createdAt',
  ContactIconHistoryDate = 'contact___icon___history___date',
  ContactIconHistoryId = 'contact___icon___history___id',
  ContactIconHistoryName = 'contact___icon___history___name',
  ContactIconHistoryNodeLocale = 'contact___icon___history___node_locale',
  ContactIconHistorySpaceId = 'contact___icon___history___spaceId',
  ContactIconHistorySubName = 'contact___icon___history___subName',
  ContactIconHistoryUpdatedAt = 'contact___icon___history___updatedAt',
  ContactIconId = 'contact___icon___id',
  ContactIconInternalContent = 'contact___icon___internal___content',
  ContactIconInternalContentDigest = 'contact___icon___internal___contentDigest',
  ContactIconInternalDescription = 'contact___icon___internal___description',
  ContactIconInternalFieldOwners = 'contact___icon___internal___fieldOwners',
  ContactIconInternalIgnoreType = 'contact___icon___internal___ignoreType',
  ContactIconInternalMediaType = 'contact___icon___internal___mediaType',
  ContactIconInternalOwner = 'contact___icon___internal___owner',
  ContactIconInternalType = 'contact___icon___internal___type',
  ContactIconName = 'contact___icon___name',
  ContactIconNodeLocale = 'contact___icon___node_locale',
  ContactIconOss = 'contact___icon___oss',
  ContactIconOssChildren = 'contact___icon___oss___children',
  ContactIconOssChildrenContentfulOssDetailTextNode = 'contact___icon___oss___childrenContentfulOssDetailTextNode',
  ContactIconOssContentfulId = 'contact___icon___oss___contentful_id',
  ContactIconOssCreatedAt = 'contact___icon___oss___createdAt',
  ContactIconOssHref = 'contact___icon___oss___href',
  ContactIconOssId = 'contact___icon___oss___id',
  ContactIconOssName = 'contact___icon___oss___name',
  ContactIconOssNodeLocale = 'contact___icon___oss___node_locale',
  ContactIconOssSpaceId = 'contact___icon___oss___spaceId',
  ContactIconOssStartDate = 'contact___icon___oss___startDate',
  ContactIconOssSubName = 'contact___icon___oss___subName',
  ContactIconOssTags = 'contact___icon___oss___tags',
  ContactIconOssUpdatedAt = 'contact___icon___oss___updatedAt',
  ContactIconParentChildren = 'contact___icon___parent___children',
  ContactIconParentId = 'contact___icon___parent___id',
  ContactIconProject = 'contact___icon___project',
  ContactIconProjectChildren = 'contact___icon___project___children',
  ContactIconProjectChildrenContentfulProjectDetailTextNode = 'contact___icon___project___childrenContentfulProjectDetailTextNode',
  ContactIconProjectContentfulId = 'contact___icon___project___contentful_id',
  ContactIconProjectCreatedAt = 'contact___icon___project___createdAt',
  ContactIconProjectEndDate = 'contact___icon___project___endDate',
  ContactIconProjectId = 'contact___icon___project___id',
  ContactIconProjectName = 'contact___icon___project___name',
  ContactIconProjectNodeLocale = 'contact___icon___project___node_locale',
  ContactIconProjectSpaceId = 'contact___icon___project___spaceId',
  ContactIconProjectStartDate = 'contact___icon___project___startDate',
  ContactIconProjectSubName = 'contact___icon___project___subName',
  ContactIconProjectTags = 'contact___icon___project___tags',
  ContactIconProjectUpdatedAt = 'contact___icon___project___updatedAt',
  ContactIconSpaceId = 'contact___icon___spaceId',
  ContactIconSvgChildren = 'contact___icon___svg___children',
  ContactIconSvgChildrenMarkdownRemark = 'contact___icon___svg___childrenMarkdownRemark',
  ContactIconSvgId = 'contact___icon___svg___id',
  ContactIconSvgSvg = 'contact___icon___svg___svg',
  ContactIconSysRevision = 'contact___icon___sys___revision',
  ContactIconSysType = 'contact___icon___sys___type',
  ContactIconUpdatedAt = 'contact___icon___updatedAt',
  ContactIconWhatICanDo = 'contact___icon___what_i_can_do',
  ContactIconWhatICanDoChildren = 'contact___icon___what_i_can_do___children',
  ContactIconWhatICanDoContentfulId = 'contact___icon___what_i_can_do___contentful_id',
  ContactIconWhatICanDoCreatedAt = 'contact___icon___what_i_can_do___createdAt',
  ContactIconWhatICanDoId = 'contact___icon___what_i_can_do___id',
  ContactIconWhatICanDoName = 'contact___icon___what_i_can_do___name',
  ContactIconWhatICanDoNodeLocale = 'contact___icon___what_i_can_do___node_locale',
  ContactIconWhatICanDoSortKey = 'contact___icon___what_i_can_do___sortKey',
  ContactIconWhatICanDoSpaceId = 'contact___icon___what_i_can_do___spaceId',
  ContactIconWhatICanDoSubName = 'contact___icon___what_i_can_do___subName',
  ContactIconWhatICanDoUpdatedAt = 'contact___icon___what_i_can_do___updatedAt',
  ContactId = 'contact___id',
  ContactInternalContent = 'contact___internal___content',
  ContactInternalContentDigest = 'contact___internal___contentDigest',
  ContactInternalDescription = 'contact___internal___description',
  ContactInternalFieldOwners = 'contact___internal___fieldOwners',
  ContactInternalIgnoreType = 'contact___internal___ignoreType',
  ContactInternalMediaType = 'contact___internal___mediaType',
  ContactInternalOwner = 'contact___internal___owner',
  ContactInternalType = 'contact___internal___type',
  ContactName = 'contact___name',
  ContactNodeLocale = 'contact___node_locale',
  ContactParentChildren = 'contact___parent___children',
  ContactParentChildrenChildren = 'contact___parent___children___children',
  ContactParentChildrenId = 'contact___parent___children___id',
  ContactParentId = 'contact___parent___id',
  ContactParentInternalContent = 'contact___parent___internal___content',
  ContactParentInternalContentDigest = 'contact___parent___internal___contentDigest',
  ContactParentInternalDescription = 'contact___parent___internal___description',
  ContactParentInternalFieldOwners = 'contact___parent___internal___fieldOwners',
  ContactParentInternalIgnoreType = 'contact___parent___internal___ignoreType',
  ContactParentInternalMediaType = 'contact___parent___internal___mediaType',
  ContactParentInternalOwner = 'contact___parent___internal___owner',
  ContactParentInternalType = 'contact___parent___internal___type',
  ContactParentParentChildren = 'contact___parent___parent___children',
  ContactParentParentId = 'contact___parent___parent___id',
  ContactSortKey = 'contact___sortKey',
  ContactSpaceId = 'contact___spaceId',
  ContactSubName = 'contact___subName',
  ContactSysRevision = 'contact___sys___revision',
  ContactSysType = 'contact___sys___type',
  ContactUpdatedAt = 'contact___updatedAt',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  History = 'history',
  HistoryChildren = 'history___children',
  HistoryChildrenChildren = 'history___children___children',
  HistoryChildrenChildrenChildren = 'history___children___children___children',
  HistoryChildrenChildrenId = 'history___children___children___id',
  HistoryChildrenId = 'history___children___id',
  HistoryChildrenInternalContent = 'history___children___internal___content',
  HistoryChildrenInternalContentDigest = 'history___children___internal___contentDigest',
  HistoryChildrenInternalDescription = 'history___children___internal___description',
  HistoryChildrenInternalFieldOwners = 'history___children___internal___fieldOwners',
  HistoryChildrenInternalIgnoreType = 'history___children___internal___ignoreType',
  HistoryChildrenInternalMediaType = 'history___children___internal___mediaType',
  HistoryChildrenInternalOwner = 'history___children___internal___owner',
  HistoryChildrenInternalType = 'history___children___internal___type',
  HistoryChildrenParentChildren = 'history___children___parent___children',
  HistoryChildrenParentId = 'history___children___parent___id',
  HistoryContentfulId = 'history___contentful_id',
  HistoryCreatedAt = 'history___createdAt',
  HistoryDate = 'history___date',
  HistoryIconChildContentfulIconSvgTextNodeChildren = 'history___icon___childContentfulIconSvgTextNode___children',
  HistoryIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'history___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  HistoryIconChildContentfulIconSvgTextNodeId = 'history___icon___childContentfulIconSvgTextNode___id',
  HistoryIconChildContentfulIconSvgTextNodeSvg = 'history___icon___childContentfulIconSvgTextNode___svg',
  HistoryIconChildren = 'history___icon___children',
  HistoryIconChildrenContentfulIconSvgTextNode = 'history___icon___childrenContentfulIconSvgTextNode',
  HistoryIconChildrenContentfulIconSvgTextNodeChildren = 'history___icon___childrenContentfulIconSvgTextNode___children',
  HistoryIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'history___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  HistoryIconChildrenContentfulIconSvgTextNodeId = 'history___icon___childrenContentfulIconSvgTextNode___id',
  HistoryIconChildrenContentfulIconSvgTextNodeSvg = 'history___icon___childrenContentfulIconSvgTextNode___svg',
  HistoryIconChildrenChildren = 'history___icon___children___children',
  HistoryIconChildrenId = 'history___icon___children___id',
  HistoryIconContact = 'history___icon___contact',
  HistoryIconContactChildren = 'history___icon___contact___children',
  HistoryIconContactContentfulId = 'history___icon___contact___contentful_id',
  HistoryIconContactCreatedAt = 'history___icon___contact___createdAt',
  HistoryIconContactHref = 'history___icon___contact___href',
  HistoryIconContactId = 'history___icon___contact___id',
  HistoryIconContactName = 'history___icon___contact___name',
  HistoryIconContactNodeLocale = 'history___icon___contact___node_locale',
  HistoryIconContactSortKey = 'history___icon___contact___sortKey',
  HistoryIconContactSpaceId = 'history___icon___contact___spaceId',
  HistoryIconContactSubName = 'history___icon___contact___subName',
  HistoryIconContactUpdatedAt = 'history___icon___contact___updatedAt',
  HistoryIconContentfulId = 'history___icon___contentful_id',
  HistoryIconCreatedAt = 'history___icon___createdAt',
  HistoryIconHistory = 'history___icon___history',
  HistoryIconHistoryChildren = 'history___icon___history___children',
  HistoryIconHistoryContentfulId = 'history___icon___history___contentful_id',
  HistoryIconHistoryCreatedAt = 'history___icon___history___createdAt',
  HistoryIconHistoryDate = 'history___icon___history___date',
  HistoryIconHistoryId = 'history___icon___history___id',
  HistoryIconHistoryName = 'history___icon___history___name',
  HistoryIconHistoryNodeLocale = 'history___icon___history___node_locale',
  HistoryIconHistorySpaceId = 'history___icon___history___spaceId',
  HistoryIconHistorySubName = 'history___icon___history___subName',
  HistoryIconHistoryUpdatedAt = 'history___icon___history___updatedAt',
  HistoryIconId = 'history___icon___id',
  HistoryIconInternalContent = 'history___icon___internal___content',
  HistoryIconInternalContentDigest = 'history___icon___internal___contentDigest',
  HistoryIconInternalDescription = 'history___icon___internal___description',
  HistoryIconInternalFieldOwners = 'history___icon___internal___fieldOwners',
  HistoryIconInternalIgnoreType = 'history___icon___internal___ignoreType',
  HistoryIconInternalMediaType = 'history___icon___internal___mediaType',
  HistoryIconInternalOwner = 'history___icon___internal___owner',
  HistoryIconInternalType = 'history___icon___internal___type',
  HistoryIconName = 'history___icon___name',
  HistoryIconNodeLocale = 'history___icon___node_locale',
  HistoryIconOss = 'history___icon___oss',
  HistoryIconOssChildren = 'history___icon___oss___children',
  HistoryIconOssChildrenContentfulOssDetailTextNode = 'history___icon___oss___childrenContentfulOssDetailTextNode',
  HistoryIconOssContentfulId = 'history___icon___oss___contentful_id',
  HistoryIconOssCreatedAt = 'history___icon___oss___createdAt',
  HistoryIconOssHref = 'history___icon___oss___href',
  HistoryIconOssId = 'history___icon___oss___id',
  HistoryIconOssName = 'history___icon___oss___name',
  HistoryIconOssNodeLocale = 'history___icon___oss___node_locale',
  HistoryIconOssSpaceId = 'history___icon___oss___spaceId',
  HistoryIconOssStartDate = 'history___icon___oss___startDate',
  HistoryIconOssSubName = 'history___icon___oss___subName',
  HistoryIconOssTags = 'history___icon___oss___tags',
  HistoryIconOssUpdatedAt = 'history___icon___oss___updatedAt',
  HistoryIconParentChildren = 'history___icon___parent___children',
  HistoryIconParentId = 'history___icon___parent___id',
  HistoryIconProject = 'history___icon___project',
  HistoryIconProjectChildren = 'history___icon___project___children',
  HistoryIconProjectChildrenContentfulProjectDetailTextNode = 'history___icon___project___childrenContentfulProjectDetailTextNode',
  HistoryIconProjectContentfulId = 'history___icon___project___contentful_id',
  HistoryIconProjectCreatedAt = 'history___icon___project___createdAt',
  HistoryIconProjectEndDate = 'history___icon___project___endDate',
  HistoryIconProjectId = 'history___icon___project___id',
  HistoryIconProjectName = 'history___icon___project___name',
  HistoryIconProjectNodeLocale = 'history___icon___project___node_locale',
  HistoryIconProjectSpaceId = 'history___icon___project___spaceId',
  HistoryIconProjectStartDate = 'history___icon___project___startDate',
  HistoryIconProjectSubName = 'history___icon___project___subName',
  HistoryIconProjectTags = 'history___icon___project___tags',
  HistoryIconProjectUpdatedAt = 'history___icon___project___updatedAt',
  HistoryIconSpaceId = 'history___icon___spaceId',
  HistoryIconSvgChildren = 'history___icon___svg___children',
  HistoryIconSvgChildrenMarkdownRemark = 'history___icon___svg___childrenMarkdownRemark',
  HistoryIconSvgId = 'history___icon___svg___id',
  HistoryIconSvgSvg = 'history___icon___svg___svg',
  HistoryIconSysRevision = 'history___icon___sys___revision',
  HistoryIconSysType = 'history___icon___sys___type',
  HistoryIconUpdatedAt = 'history___icon___updatedAt',
  HistoryIconWhatICanDo = 'history___icon___what_i_can_do',
  HistoryIconWhatICanDoChildren = 'history___icon___what_i_can_do___children',
  HistoryIconWhatICanDoContentfulId = 'history___icon___what_i_can_do___contentful_id',
  HistoryIconWhatICanDoCreatedAt = 'history___icon___what_i_can_do___createdAt',
  HistoryIconWhatICanDoId = 'history___icon___what_i_can_do___id',
  HistoryIconWhatICanDoName = 'history___icon___what_i_can_do___name',
  HistoryIconWhatICanDoNodeLocale = 'history___icon___what_i_can_do___node_locale',
  HistoryIconWhatICanDoSortKey = 'history___icon___what_i_can_do___sortKey',
  HistoryIconWhatICanDoSpaceId = 'history___icon___what_i_can_do___spaceId',
  HistoryIconWhatICanDoSubName = 'history___icon___what_i_can_do___subName',
  HistoryIconWhatICanDoUpdatedAt = 'history___icon___what_i_can_do___updatedAt',
  HistoryId = 'history___id',
  HistoryInternalContent = 'history___internal___content',
  HistoryInternalContentDigest = 'history___internal___contentDigest',
  HistoryInternalDescription = 'history___internal___description',
  HistoryInternalFieldOwners = 'history___internal___fieldOwners',
  HistoryInternalIgnoreType = 'history___internal___ignoreType',
  HistoryInternalMediaType = 'history___internal___mediaType',
  HistoryInternalOwner = 'history___internal___owner',
  HistoryInternalType = 'history___internal___type',
  HistoryName = 'history___name',
  HistoryNodeLocale = 'history___node_locale',
  HistoryParentChildren = 'history___parent___children',
  HistoryParentChildrenChildren = 'history___parent___children___children',
  HistoryParentChildrenId = 'history___parent___children___id',
  HistoryParentId = 'history___parent___id',
  HistoryParentInternalContent = 'history___parent___internal___content',
  HistoryParentInternalContentDigest = 'history___parent___internal___contentDigest',
  HistoryParentInternalDescription = 'history___parent___internal___description',
  HistoryParentInternalFieldOwners = 'history___parent___internal___fieldOwners',
  HistoryParentInternalIgnoreType = 'history___parent___internal___ignoreType',
  HistoryParentInternalMediaType = 'history___parent___internal___mediaType',
  HistoryParentInternalOwner = 'history___parent___internal___owner',
  HistoryParentInternalType = 'history___parent___internal___type',
  HistoryParentParentChildren = 'history___parent___parent___children',
  HistoryParentParentId = 'history___parent___parent___id',
  HistorySpaceId = 'history___spaceId',
  HistorySubName = 'history___subName',
  HistorySysRevision = 'history___sys___revision',
  HistorySysType = 'history___sys___type',
  HistoryUpdatedAt = 'history___updatedAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  Oss = 'oss',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___children',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___headings',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___html',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkId = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___id',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  OssChildContentfulOssDetailTextNodeChildren = 'oss___childContentfulOssDetailTextNode___children',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  OssChildContentfulOssDetailTextNodeChildrenChildren = 'oss___childContentfulOssDetailTextNode___children___children',
  OssChildContentfulOssDetailTextNodeChildrenId = 'oss___childContentfulOssDetailTextNode___children___id',
  OssChildContentfulOssDetailTextNodeDetail = 'oss___childContentfulOssDetailTextNode___detail',
  OssChildContentfulOssDetailTextNodeId = 'oss___childContentfulOssDetailTextNode___id',
  OssChildContentfulOssDetailTextNodeInternalContent = 'oss___childContentfulOssDetailTextNode___internal___content',
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 'oss___childContentfulOssDetailTextNode___internal___contentDigest',
  OssChildContentfulOssDetailTextNodeInternalDescription = 'oss___childContentfulOssDetailTextNode___internal___description',
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 'oss___childContentfulOssDetailTextNode___internal___fieldOwners',
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 'oss___childContentfulOssDetailTextNode___internal___ignoreType',
  OssChildContentfulOssDetailTextNodeInternalMediaType = 'oss___childContentfulOssDetailTextNode___internal___mediaType',
  OssChildContentfulOssDetailTextNodeInternalOwner = 'oss___childContentfulOssDetailTextNode___internal___owner',
  OssChildContentfulOssDetailTextNodeInternalType = 'oss___childContentfulOssDetailTextNode___internal___type',
  OssChildContentfulOssDetailTextNodeParentChildren = 'oss___childContentfulOssDetailTextNode___parent___children',
  OssChildContentfulOssDetailTextNodeParentId = 'oss___childContentfulOssDetailTextNode___parent___id',
  OssChildContentfulOssDetailTextNodeSysType = 'oss___childContentfulOssDetailTextNode___sys___type',
  OssChildren = 'oss___children',
  OssChildrenContentfulOssDetailTextNode = 'oss___childrenContentfulOssDetailTextNode',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___children',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___headings',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___html',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkId = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___id',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  OssChildrenContentfulOssDetailTextNodeChildren = 'oss___childrenContentfulOssDetailTextNode___children',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 'oss___childrenContentfulOssDetailTextNode___children___children',
  OssChildrenContentfulOssDetailTextNodeChildrenId = 'oss___childrenContentfulOssDetailTextNode___children___id',
  OssChildrenContentfulOssDetailTextNodeDetail = 'oss___childrenContentfulOssDetailTextNode___detail',
  OssChildrenContentfulOssDetailTextNodeId = 'oss___childrenContentfulOssDetailTextNode___id',
  OssChildrenContentfulOssDetailTextNodeInternalContent = 'oss___childrenContentfulOssDetailTextNode___internal___content',
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 'oss___childrenContentfulOssDetailTextNode___internal___contentDigest',
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 'oss___childrenContentfulOssDetailTextNode___internal___description',
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 'oss___childrenContentfulOssDetailTextNode___internal___fieldOwners',
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 'oss___childrenContentfulOssDetailTextNode___internal___ignoreType',
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 'oss___childrenContentfulOssDetailTextNode___internal___mediaType',
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 'oss___childrenContentfulOssDetailTextNode___internal___owner',
  OssChildrenContentfulOssDetailTextNodeInternalType = 'oss___childrenContentfulOssDetailTextNode___internal___type',
  OssChildrenContentfulOssDetailTextNodeParentChildren = 'oss___childrenContentfulOssDetailTextNode___parent___children',
  OssChildrenContentfulOssDetailTextNodeParentId = 'oss___childrenContentfulOssDetailTextNode___parent___id',
  OssChildrenContentfulOssDetailTextNodeSysType = 'oss___childrenContentfulOssDetailTextNode___sys___type',
  OssChildrenChildren = 'oss___children___children',
  OssChildrenChildrenChildren = 'oss___children___children___children',
  OssChildrenChildrenId = 'oss___children___children___id',
  OssChildrenId = 'oss___children___id',
  OssChildrenInternalContent = 'oss___children___internal___content',
  OssChildrenInternalContentDigest = 'oss___children___internal___contentDigest',
  OssChildrenInternalDescription = 'oss___children___internal___description',
  OssChildrenInternalFieldOwners = 'oss___children___internal___fieldOwners',
  OssChildrenInternalIgnoreType = 'oss___children___internal___ignoreType',
  OssChildrenInternalMediaType = 'oss___children___internal___mediaType',
  OssChildrenInternalOwner = 'oss___children___internal___owner',
  OssChildrenInternalType = 'oss___children___internal___type',
  OssChildrenParentChildren = 'oss___children___parent___children',
  OssChildrenParentId = 'oss___children___parent___id',
  OssContentfulId = 'oss___contentful_id',
  OssCreatedAt = 'oss___createdAt',
  OssDetailChildMarkdownRemarkChildren = 'oss___detail___childMarkdownRemark___children',
  OssDetailChildMarkdownRemarkExcerpt = 'oss___detail___childMarkdownRemark___excerpt',
  OssDetailChildMarkdownRemarkExcerptAst = 'oss___detail___childMarkdownRemark___excerptAst',
  OssDetailChildMarkdownRemarkHeadings = 'oss___detail___childMarkdownRemark___headings',
  OssDetailChildMarkdownRemarkHtml = 'oss___detail___childMarkdownRemark___html',
  OssDetailChildMarkdownRemarkHtmlAst = 'oss___detail___childMarkdownRemark___htmlAst',
  OssDetailChildMarkdownRemarkId = 'oss___detail___childMarkdownRemark___id',
  OssDetailChildMarkdownRemarkRawMarkdownBody = 'oss___detail___childMarkdownRemark___rawMarkdownBody',
  OssDetailChildMarkdownRemarkTableOfContents = 'oss___detail___childMarkdownRemark___tableOfContents',
  OssDetailChildMarkdownRemarkTimeToRead = 'oss___detail___childMarkdownRemark___timeToRead',
  OssDetailChildren = 'oss___detail___children',
  OssDetailChildrenMarkdownRemark = 'oss___detail___childrenMarkdownRemark',
  OssDetailChildrenMarkdownRemarkChildren = 'oss___detail___childrenMarkdownRemark___children',
  OssDetailChildrenMarkdownRemarkExcerpt = 'oss___detail___childrenMarkdownRemark___excerpt',
  OssDetailChildrenMarkdownRemarkExcerptAst = 'oss___detail___childrenMarkdownRemark___excerptAst',
  OssDetailChildrenMarkdownRemarkHeadings = 'oss___detail___childrenMarkdownRemark___headings',
  OssDetailChildrenMarkdownRemarkHtml = 'oss___detail___childrenMarkdownRemark___html',
  OssDetailChildrenMarkdownRemarkHtmlAst = 'oss___detail___childrenMarkdownRemark___htmlAst',
  OssDetailChildrenMarkdownRemarkId = 'oss___detail___childrenMarkdownRemark___id',
  OssDetailChildrenMarkdownRemarkRawMarkdownBody = 'oss___detail___childrenMarkdownRemark___rawMarkdownBody',
  OssDetailChildrenMarkdownRemarkTableOfContents = 'oss___detail___childrenMarkdownRemark___tableOfContents',
  OssDetailChildrenMarkdownRemarkTimeToRead = 'oss___detail___childrenMarkdownRemark___timeToRead',
  OssDetailChildrenChildren = 'oss___detail___children___children',
  OssDetailChildrenId = 'oss___detail___children___id',
  OssDetailDetail = 'oss___detail___detail',
  OssDetailId = 'oss___detail___id',
  OssDetailInternalContent = 'oss___detail___internal___content',
  OssDetailInternalContentDigest = 'oss___detail___internal___contentDigest',
  OssDetailInternalDescription = 'oss___detail___internal___description',
  OssDetailInternalFieldOwners = 'oss___detail___internal___fieldOwners',
  OssDetailInternalIgnoreType = 'oss___detail___internal___ignoreType',
  OssDetailInternalMediaType = 'oss___detail___internal___mediaType',
  OssDetailInternalOwner = 'oss___detail___internal___owner',
  OssDetailInternalType = 'oss___detail___internal___type',
  OssDetailParentChildren = 'oss___detail___parent___children',
  OssDetailParentId = 'oss___detail___parent___id',
  OssDetailSysType = 'oss___detail___sys___type',
  OssHref = 'oss___href',
  OssIconChildContentfulIconSvgTextNodeChildren = 'oss___icon___childContentfulIconSvgTextNode___children',
  OssIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'oss___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  OssIconChildContentfulIconSvgTextNodeId = 'oss___icon___childContentfulIconSvgTextNode___id',
  OssIconChildContentfulIconSvgTextNodeSvg = 'oss___icon___childContentfulIconSvgTextNode___svg',
  OssIconChildren = 'oss___icon___children',
  OssIconChildrenContentfulIconSvgTextNode = 'oss___icon___childrenContentfulIconSvgTextNode',
  OssIconChildrenContentfulIconSvgTextNodeChildren = 'oss___icon___childrenContentfulIconSvgTextNode___children',
  OssIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'oss___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  OssIconChildrenContentfulIconSvgTextNodeId = 'oss___icon___childrenContentfulIconSvgTextNode___id',
  OssIconChildrenContentfulIconSvgTextNodeSvg = 'oss___icon___childrenContentfulIconSvgTextNode___svg',
  OssIconChildrenChildren = 'oss___icon___children___children',
  OssIconChildrenId = 'oss___icon___children___id',
  OssIconContact = 'oss___icon___contact',
  OssIconContactChildren = 'oss___icon___contact___children',
  OssIconContactContentfulId = 'oss___icon___contact___contentful_id',
  OssIconContactCreatedAt = 'oss___icon___contact___createdAt',
  OssIconContactHref = 'oss___icon___contact___href',
  OssIconContactId = 'oss___icon___contact___id',
  OssIconContactName = 'oss___icon___contact___name',
  OssIconContactNodeLocale = 'oss___icon___contact___node_locale',
  OssIconContactSortKey = 'oss___icon___contact___sortKey',
  OssIconContactSpaceId = 'oss___icon___contact___spaceId',
  OssIconContactSubName = 'oss___icon___contact___subName',
  OssIconContactUpdatedAt = 'oss___icon___contact___updatedAt',
  OssIconContentfulId = 'oss___icon___contentful_id',
  OssIconCreatedAt = 'oss___icon___createdAt',
  OssIconHistory = 'oss___icon___history',
  OssIconHistoryChildren = 'oss___icon___history___children',
  OssIconHistoryContentfulId = 'oss___icon___history___contentful_id',
  OssIconHistoryCreatedAt = 'oss___icon___history___createdAt',
  OssIconHistoryDate = 'oss___icon___history___date',
  OssIconHistoryId = 'oss___icon___history___id',
  OssIconHistoryName = 'oss___icon___history___name',
  OssIconHistoryNodeLocale = 'oss___icon___history___node_locale',
  OssIconHistorySpaceId = 'oss___icon___history___spaceId',
  OssIconHistorySubName = 'oss___icon___history___subName',
  OssIconHistoryUpdatedAt = 'oss___icon___history___updatedAt',
  OssIconId = 'oss___icon___id',
  OssIconInternalContent = 'oss___icon___internal___content',
  OssIconInternalContentDigest = 'oss___icon___internal___contentDigest',
  OssIconInternalDescription = 'oss___icon___internal___description',
  OssIconInternalFieldOwners = 'oss___icon___internal___fieldOwners',
  OssIconInternalIgnoreType = 'oss___icon___internal___ignoreType',
  OssIconInternalMediaType = 'oss___icon___internal___mediaType',
  OssIconInternalOwner = 'oss___icon___internal___owner',
  OssIconInternalType = 'oss___icon___internal___type',
  OssIconName = 'oss___icon___name',
  OssIconNodeLocale = 'oss___icon___node_locale',
  OssIconOss = 'oss___icon___oss',
  OssIconOssChildren = 'oss___icon___oss___children',
  OssIconOssChildrenContentfulOssDetailTextNode = 'oss___icon___oss___childrenContentfulOssDetailTextNode',
  OssIconOssContentfulId = 'oss___icon___oss___contentful_id',
  OssIconOssCreatedAt = 'oss___icon___oss___createdAt',
  OssIconOssHref = 'oss___icon___oss___href',
  OssIconOssId = 'oss___icon___oss___id',
  OssIconOssName = 'oss___icon___oss___name',
  OssIconOssNodeLocale = 'oss___icon___oss___node_locale',
  OssIconOssSpaceId = 'oss___icon___oss___spaceId',
  OssIconOssStartDate = 'oss___icon___oss___startDate',
  OssIconOssSubName = 'oss___icon___oss___subName',
  OssIconOssTags = 'oss___icon___oss___tags',
  OssIconOssUpdatedAt = 'oss___icon___oss___updatedAt',
  OssIconParentChildren = 'oss___icon___parent___children',
  OssIconParentId = 'oss___icon___parent___id',
  OssIconProject = 'oss___icon___project',
  OssIconProjectChildren = 'oss___icon___project___children',
  OssIconProjectChildrenContentfulProjectDetailTextNode = 'oss___icon___project___childrenContentfulProjectDetailTextNode',
  OssIconProjectContentfulId = 'oss___icon___project___contentful_id',
  OssIconProjectCreatedAt = 'oss___icon___project___createdAt',
  OssIconProjectEndDate = 'oss___icon___project___endDate',
  OssIconProjectId = 'oss___icon___project___id',
  OssIconProjectName = 'oss___icon___project___name',
  OssIconProjectNodeLocale = 'oss___icon___project___node_locale',
  OssIconProjectSpaceId = 'oss___icon___project___spaceId',
  OssIconProjectStartDate = 'oss___icon___project___startDate',
  OssIconProjectSubName = 'oss___icon___project___subName',
  OssIconProjectTags = 'oss___icon___project___tags',
  OssIconProjectUpdatedAt = 'oss___icon___project___updatedAt',
  OssIconSpaceId = 'oss___icon___spaceId',
  OssIconSvgChildren = 'oss___icon___svg___children',
  OssIconSvgChildrenMarkdownRemark = 'oss___icon___svg___childrenMarkdownRemark',
  OssIconSvgId = 'oss___icon___svg___id',
  OssIconSvgSvg = 'oss___icon___svg___svg',
  OssIconSysRevision = 'oss___icon___sys___revision',
  OssIconSysType = 'oss___icon___sys___type',
  OssIconUpdatedAt = 'oss___icon___updatedAt',
  OssIconWhatICanDo = 'oss___icon___what_i_can_do',
  OssIconWhatICanDoChildren = 'oss___icon___what_i_can_do___children',
  OssIconWhatICanDoContentfulId = 'oss___icon___what_i_can_do___contentful_id',
  OssIconWhatICanDoCreatedAt = 'oss___icon___what_i_can_do___createdAt',
  OssIconWhatICanDoId = 'oss___icon___what_i_can_do___id',
  OssIconWhatICanDoName = 'oss___icon___what_i_can_do___name',
  OssIconWhatICanDoNodeLocale = 'oss___icon___what_i_can_do___node_locale',
  OssIconWhatICanDoSortKey = 'oss___icon___what_i_can_do___sortKey',
  OssIconWhatICanDoSpaceId = 'oss___icon___what_i_can_do___spaceId',
  OssIconWhatICanDoSubName = 'oss___icon___what_i_can_do___subName',
  OssIconWhatICanDoUpdatedAt = 'oss___icon___what_i_can_do___updatedAt',
  OssId = 'oss___id',
  OssImageChildren = 'oss___image___children',
  OssImageChildrenChildren = 'oss___image___children___children',
  OssImageChildrenId = 'oss___image___children___id',
  OssImageContentfulId = 'oss___image___contentful_id',
  OssImageCreatedAt = 'oss___image___createdAt',
  OssImageDescription = 'oss___image___description',
  OssImageFieldsLocalFile = 'oss___image___fields___localFile',
  OssImageFileContentType = 'oss___image___file___contentType',
  OssImageFileFileName = 'oss___image___file___fileName',
  OssImageFileUrl = 'oss___image___file___url',
  OssImageGatsbyImageData = 'oss___image___gatsbyImageData',
  OssImageId = 'oss___image___id',
  OssImageInternalContent = 'oss___image___internal___content',
  OssImageInternalContentDigest = 'oss___image___internal___contentDigest',
  OssImageInternalDescription = 'oss___image___internal___description',
  OssImageInternalFieldOwners = 'oss___image___internal___fieldOwners',
  OssImageInternalIgnoreType = 'oss___image___internal___ignoreType',
  OssImageInternalMediaType = 'oss___image___internal___mediaType',
  OssImageInternalOwner = 'oss___image___internal___owner',
  OssImageInternalType = 'oss___image___internal___type',
  OssImageLocalFileAbsolutePath = 'oss___image___localFile___absolutePath',
  OssImageLocalFileAccessTime = 'oss___image___localFile___accessTime',
  OssImageLocalFileAtime = 'oss___image___localFile___atime',
  OssImageLocalFileAtimeMs = 'oss___image___localFile___atimeMs',
  OssImageLocalFileBase = 'oss___image___localFile___base',
  OssImageLocalFileBirthTime = 'oss___image___localFile___birthTime',
  OssImageLocalFileBirthtime = 'oss___image___localFile___birthtime',
  OssImageLocalFileBirthtimeMs = 'oss___image___localFile___birthtimeMs',
  OssImageLocalFileBlksize = 'oss___image___localFile___blksize',
  OssImageLocalFileBlocks = 'oss___image___localFile___blocks',
  OssImageLocalFileChangeTime = 'oss___image___localFile___changeTime',
  OssImageLocalFileChildren = 'oss___image___localFile___children',
  OssImageLocalFileChildrenImageSharp = 'oss___image___localFile___childrenImageSharp',
  OssImageLocalFileChildrenLocale = 'oss___image___localFile___childrenLocale',
  OssImageLocalFileCtime = 'oss___image___localFile___ctime',
  OssImageLocalFileCtimeMs = 'oss___image___localFile___ctimeMs',
  OssImageLocalFileDev = 'oss___image___localFile___dev',
  OssImageLocalFileDir = 'oss___image___localFile___dir',
  OssImageLocalFileExt = 'oss___image___localFile___ext',
  OssImageLocalFileExtension = 'oss___image___localFile___extension',
  OssImageLocalFileGid = 'oss___image___localFile___gid',
  OssImageLocalFileId = 'oss___image___localFile___id',
  OssImageLocalFileIno = 'oss___image___localFile___ino',
  OssImageLocalFileMode = 'oss___image___localFile___mode',
  OssImageLocalFileModifiedTime = 'oss___image___localFile___modifiedTime',
  OssImageLocalFileMtime = 'oss___image___localFile___mtime',
  OssImageLocalFileMtimeMs = 'oss___image___localFile___mtimeMs',
  OssImageLocalFileName = 'oss___image___localFile___name',
  OssImageLocalFileNlink = 'oss___image___localFile___nlink',
  OssImageLocalFilePrettySize = 'oss___image___localFile___prettySize',
  OssImageLocalFilePublicUrl = 'oss___image___localFile___publicURL',
  OssImageLocalFileRdev = 'oss___image___localFile___rdev',
  OssImageLocalFileRelativeDirectory = 'oss___image___localFile___relativeDirectory',
  OssImageLocalFileRelativePath = 'oss___image___localFile___relativePath',
  OssImageLocalFileRoot = 'oss___image___localFile___root',
  OssImageLocalFileSize = 'oss___image___localFile___size',
  OssImageLocalFileSourceInstanceName = 'oss___image___localFile___sourceInstanceName',
  OssImageLocalFileUid = 'oss___image___localFile___uid',
  OssImageLocalFileUrl = 'oss___image___localFile___url',
  OssImageNodeLocale = 'oss___image___node_locale',
  OssImageParentChildren = 'oss___image___parent___children',
  OssImageParentId = 'oss___image___parent___id',
  OssImageSpaceId = 'oss___image___spaceId',
  OssImageSysRevision = 'oss___image___sys___revision',
  OssImageSysType = 'oss___image___sys___type',
  OssImageTitle = 'oss___image___title',
  OssImageUpdatedAt = 'oss___image___updatedAt',
  OssInternalContent = 'oss___internal___content',
  OssInternalContentDigest = 'oss___internal___contentDigest',
  OssInternalDescription = 'oss___internal___description',
  OssInternalFieldOwners = 'oss___internal___fieldOwners',
  OssInternalIgnoreType = 'oss___internal___ignoreType',
  OssInternalMediaType = 'oss___internal___mediaType',
  OssInternalOwner = 'oss___internal___owner',
  OssInternalType = 'oss___internal___type',
  OssName = 'oss___name',
  OssNodeLocale = 'oss___node_locale',
  OssParentChildren = 'oss___parent___children',
  OssParentChildrenChildren = 'oss___parent___children___children',
  OssParentChildrenId = 'oss___parent___children___id',
  OssParentId = 'oss___parent___id',
  OssParentInternalContent = 'oss___parent___internal___content',
  OssParentInternalContentDigest = 'oss___parent___internal___contentDigest',
  OssParentInternalDescription = 'oss___parent___internal___description',
  OssParentInternalFieldOwners = 'oss___parent___internal___fieldOwners',
  OssParentInternalIgnoreType = 'oss___parent___internal___ignoreType',
  OssParentInternalMediaType = 'oss___parent___internal___mediaType',
  OssParentInternalOwner = 'oss___parent___internal___owner',
  OssParentInternalType = 'oss___parent___internal___type',
  OssParentParentChildren = 'oss___parent___parent___children',
  OssParentParentId = 'oss___parent___parent___id',
  OssSpaceId = 'oss___spaceId',
  OssStartDate = 'oss___startDate',
  OssSubName = 'oss___subName',
  OssSysRevision = 'oss___sys___revision',
  OssSysType = 'oss___sys___type',
  OssTags = 'oss___tags',
  OssTagsChildren = 'oss___tags___children',
  OssTagsChildrenChildren = 'oss___tags___children___children',
  OssTagsChildrenId = 'oss___tags___children___id',
  OssTagsContentfulId = 'oss___tags___contentful_id',
  OssTagsCreatedAt = 'oss___tags___createdAt',
  OssTagsId = 'oss___tags___id',
  OssTagsInternalContent = 'oss___tags___internal___content',
  OssTagsInternalContentDigest = 'oss___tags___internal___contentDigest',
  OssTagsInternalDescription = 'oss___tags___internal___description',
  OssTagsInternalFieldOwners = 'oss___tags___internal___fieldOwners',
  OssTagsInternalIgnoreType = 'oss___tags___internal___ignoreType',
  OssTagsInternalMediaType = 'oss___tags___internal___mediaType',
  OssTagsInternalOwner = 'oss___tags___internal___owner',
  OssTagsInternalType = 'oss___tags___internal___type',
  OssTagsLevel = 'oss___tags___level',
  OssTagsName = 'oss___tags___name',
  OssTagsNodeLocale = 'oss___tags___node_locale',
  OssTagsOss = 'oss___tags___oss',
  OssTagsOssChildren = 'oss___tags___oss___children',
  OssTagsOssChildrenContentfulOssDetailTextNode = 'oss___tags___oss___childrenContentfulOssDetailTextNode',
  OssTagsOssContentfulId = 'oss___tags___oss___contentful_id',
  OssTagsOssCreatedAt = 'oss___tags___oss___createdAt',
  OssTagsOssHref = 'oss___tags___oss___href',
  OssTagsOssId = 'oss___tags___oss___id',
  OssTagsOssName = 'oss___tags___oss___name',
  OssTagsOssNodeLocale = 'oss___tags___oss___node_locale',
  OssTagsOssSpaceId = 'oss___tags___oss___spaceId',
  OssTagsOssStartDate = 'oss___tags___oss___startDate',
  OssTagsOssSubName = 'oss___tags___oss___subName',
  OssTagsOssTags = 'oss___tags___oss___tags',
  OssTagsOssUpdatedAt = 'oss___tags___oss___updatedAt',
  OssTagsParentChildren = 'oss___tags___parent___children',
  OssTagsParentId = 'oss___tags___parent___id',
  OssTagsProject = 'oss___tags___project',
  OssTagsProjectChildren = 'oss___tags___project___children',
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 'oss___tags___project___childrenContentfulProjectDetailTextNode',
  OssTagsProjectContentfulId = 'oss___tags___project___contentful_id',
  OssTagsProjectCreatedAt = 'oss___tags___project___createdAt',
  OssTagsProjectEndDate = 'oss___tags___project___endDate',
  OssTagsProjectId = 'oss___tags___project___id',
  OssTagsProjectName = 'oss___tags___project___name',
  OssTagsProjectNodeLocale = 'oss___tags___project___node_locale',
  OssTagsProjectSpaceId = 'oss___tags___project___spaceId',
  OssTagsProjectStartDate = 'oss___tags___project___startDate',
  OssTagsProjectSubName = 'oss___tags___project___subName',
  OssTagsProjectTags = 'oss___tags___project___tags',
  OssTagsProjectUpdatedAt = 'oss___tags___project___updatedAt',
  OssTagsSkillMap = 'oss___tags___skill_map',
  OssTagsSkillMapChildren = 'oss___tags___skill_map___children',
  OssTagsSkillMapContentfulId = 'oss___tags___skill_map___contentful_id',
  OssTagsSkillMapCreatedAt = 'oss___tags___skill_map___createdAt',
  OssTagsSkillMapExpanded = 'oss___tags___skill_map___expanded',
  OssTagsSkillMapId = 'oss___tags___skill_map___id',
  OssTagsSkillMapName = 'oss___tags___skill_map___name',
  OssTagsSkillMapNodeLocale = 'oss___tags___skill_map___node_locale',
  OssTagsSkillMapSkills = 'oss___tags___skill_map___skills',
  OssTagsSkillMapSortKey = 'oss___tags___skill_map___sortKey',
  OssTagsSkillMapSpaceId = 'oss___tags___skill_map___spaceId',
  OssTagsSkillMapUpdatedAt = 'oss___tags___skill_map___updatedAt',
  OssTagsSpaceId = 'oss___tags___spaceId',
  OssTagsSysRevision = 'oss___tags___sys___revision',
  OssTagsSysType = 'oss___tags___sys___type',
  OssTagsUpdatedAt = 'oss___tags___updatedAt',
  OssUpdatedAt = 'oss___updatedAt',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Project = 'project',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___children',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___html',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkId = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___id',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  ProjectChildContentfulProjectDetailTextNodeChildren = 'project___childContentfulProjectDetailTextNode___children',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 'project___childContentfulProjectDetailTextNode___children___children',
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 'project___childContentfulProjectDetailTextNode___children___id',
  ProjectChildContentfulProjectDetailTextNodeDetail = 'project___childContentfulProjectDetailTextNode___detail',
  ProjectChildContentfulProjectDetailTextNodeId = 'project___childContentfulProjectDetailTextNode___id',
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 'project___childContentfulProjectDetailTextNode___internal___content',
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 'project___childContentfulProjectDetailTextNode___internal___contentDigest',
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 'project___childContentfulProjectDetailTextNode___internal___description',
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 'project___childContentfulProjectDetailTextNode___internal___fieldOwners',
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 'project___childContentfulProjectDetailTextNode___internal___ignoreType',
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 'project___childContentfulProjectDetailTextNode___internal___mediaType',
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 'project___childContentfulProjectDetailTextNode___internal___owner',
  ProjectChildContentfulProjectDetailTextNodeInternalType = 'project___childContentfulProjectDetailTextNode___internal___type',
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 'project___childContentfulProjectDetailTextNode___parent___children',
  ProjectChildContentfulProjectDetailTextNodeParentId = 'project___childContentfulProjectDetailTextNode___parent___id',
  ProjectChildContentfulProjectDetailTextNodeSysType = 'project___childContentfulProjectDetailTextNode___sys___type',
  ProjectChildren = 'project___children',
  ProjectChildrenContentfulProjectDetailTextNode = 'project___childrenContentfulProjectDetailTextNode',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___children',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___html',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkId = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___id',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 'project___childrenContentfulProjectDetailTextNode___children',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 'project___childrenContentfulProjectDetailTextNode___children___children',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 'project___childrenContentfulProjectDetailTextNode___children___id',
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 'project___childrenContentfulProjectDetailTextNode___detail',
  ProjectChildrenContentfulProjectDetailTextNodeId = 'project___childrenContentfulProjectDetailTextNode___id',
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 'project___childrenContentfulProjectDetailTextNode___internal___content',
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 'project___childrenContentfulProjectDetailTextNode___internal___contentDigest',
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 'project___childrenContentfulProjectDetailTextNode___internal___description',
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 'project___childrenContentfulProjectDetailTextNode___internal___fieldOwners',
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 'project___childrenContentfulProjectDetailTextNode___internal___ignoreType',
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 'project___childrenContentfulProjectDetailTextNode___internal___mediaType',
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 'project___childrenContentfulProjectDetailTextNode___internal___owner',
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 'project___childrenContentfulProjectDetailTextNode___internal___type',
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 'project___childrenContentfulProjectDetailTextNode___parent___children',
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 'project___childrenContentfulProjectDetailTextNode___parent___id',
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 'project___childrenContentfulProjectDetailTextNode___sys___type',
  ProjectChildrenChildren = 'project___children___children',
  ProjectChildrenChildrenChildren = 'project___children___children___children',
  ProjectChildrenChildrenId = 'project___children___children___id',
  ProjectChildrenId = 'project___children___id',
  ProjectChildrenInternalContent = 'project___children___internal___content',
  ProjectChildrenInternalContentDigest = 'project___children___internal___contentDigest',
  ProjectChildrenInternalDescription = 'project___children___internal___description',
  ProjectChildrenInternalFieldOwners = 'project___children___internal___fieldOwners',
  ProjectChildrenInternalIgnoreType = 'project___children___internal___ignoreType',
  ProjectChildrenInternalMediaType = 'project___children___internal___mediaType',
  ProjectChildrenInternalOwner = 'project___children___internal___owner',
  ProjectChildrenInternalType = 'project___children___internal___type',
  ProjectChildrenParentChildren = 'project___children___parent___children',
  ProjectChildrenParentId = 'project___children___parent___id',
  ProjectContentfulId = 'project___contentful_id',
  ProjectCreatedAt = 'project___createdAt',
  ProjectDetailChildMarkdownRemarkChildren = 'project___detail___childMarkdownRemark___children',
  ProjectDetailChildMarkdownRemarkExcerpt = 'project___detail___childMarkdownRemark___excerpt',
  ProjectDetailChildMarkdownRemarkExcerptAst = 'project___detail___childMarkdownRemark___excerptAst',
  ProjectDetailChildMarkdownRemarkHeadings = 'project___detail___childMarkdownRemark___headings',
  ProjectDetailChildMarkdownRemarkHtml = 'project___detail___childMarkdownRemark___html',
  ProjectDetailChildMarkdownRemarkHtmlAst = 'project___detail___childMarkdownRemark___htmlAst',
  ProjectDetailChildMarkdownRemarkId = 'project___detail___childMarkdownRemark___id',
  ProjectDetailChildMarkdownRemarkRawMarkdownBody = 'project___detail___childMarkdownRemark___rawMarkdownBody',
  ProjectDetailChildMarkdownRemarkTableOfContents = 'project___detail___childMarkdownRemark___tableOfContents',
  ProjectDetailChildMarkdownRemarkTimeToRead = 'project___detail___childMarkdownRemark___timeToRead',
  ProjectDetailChildren = 'project___detail___children',
  ProjectDetailChildrenMarkdownRemark = 'project___detail___childrenMarkdownRemark',
  ProjectDetailChildrenMarkdownRemarkChildren = 'project___detail___childrenMarkdownRemark___children',
  ProjectDetailChildrenMarkdownRemarkExcerpt = 'project___detail___childrenMarkdownRemark___excerpt',
  ProjectDetailChildrenMarkdownRemarkExcerptAst = 'project___detail___childrenMarkdownRemark___excerptAst',
  ProjectDetailChildrenMarkdownRemarkHeadings = 'project___detail___childrenMarkdownRemark___headings',
  ProjectDetailChildrenMarkdownRemarkHtml = 'project___detail___childrenMarkdownRemark___html',
  ProjectDetailChildrenMarkdownRemarkHtmlAst = 'project___detail___childrenMarkdownRemark___htmlAst',
  ProjectDetailChildrenMarkdownRemarkId = 'project___detail___childrenMarkdownRemark___id',
  ProjectDetailChildrenMarkdownRemarkRawMarkdownBody = 'project___detail___childrenMarkdownRemark___rawMarkdownBody',
  ProjectDetailChildrenMarkdownRemarkTableOfContents = 'project___detail___childrenMarkdownRemark___tableOfContents',
  ProjectDetailChildrenMarkdownRemarkTimeToRead = 'project___detail___childrenMarkdownRemark___timeToRead',
  ProjectDetailChildrenChildren = 'project___detail___children___children',
  ProjectDetailChildrenId = 'project___detail___children___id',
  ProjectDetailDetail = 'project___detail___detail',
  ProjectDetailId = 'project___detail___id',
  ProjectDetailInternalContent = 'project___detail___internal___content',
  ProjectDetailInternalContentDigest = 'project___detail___internal___contentDigest',
  ProjectDetailInternalDescription = 'project___detail___internal___description',
  ProjectDetailInternalFieldOwners = 'project___detail___internal___fieldOwners',
  ProjectDetailInternalIgnoreType = 'project___detail___internal___ignoreType',
  ProjectDetailInternalMediaType = 'project___detail___internal___mediaType',
  ProjectDetailInternalOwner = 'project___detail___internal___owner',
  ProjectDetailInternalType = 'project___detail___internal___type',
  ProjectDetailParentChildren = 'project___detail___parent___children',
  ProjectDetailParentId = 'project___detail___parent___id',
  ProjectDetailSysType = 'project___detail___sys___type',
  ProjectEndDate = 'project___endDate',
  ProjectIconChildContentfulIconSvgTextNodeChildren = 'project___icon___childContentfulIconSvgTextNode___children',
  ProjectIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'project___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  ProjectIconChildContentfulIconSvgTextNodeId = 'project___icon___childContentfulIconSvgTextNode___id',
  ProjectIconChildContentfulIconSvgTextNodeSvg = 'project___icon___childContentfulIconSvgTextNode___svg',
  ProjectIconChildren = 'project___icon___children',
  ProjectIconChildrenContentfulIconSvgTextNode = 'project___icon___childrenContentfulIconSvgTextNode',
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 'project___icon___childrenContentfulIconSvgTextNode___children',
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'project___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  ProjectIconChildrenContentfulIconSvgTextNodeId = 'project___icon___childrenContentfulIconSvgTextNode___id',
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 'project___icon___childrenContentfulIconSvgTextNode___svg',
  ProjectIconChildrenChildren = 'project___icon___children___children',
  ProjectIconChildrenId = 'project___icon___children___id',
  ProjectIconContact = 'project___icon___contact',
  ProjectIconContactChildren = 'project___icon___contact___children',
  ProjectIconContactContentfulId = 'project___icon___contact___contentful_id',
  ProjectIconContactCreatedAt = 'project___icon___contact___createdAt',
  ProjectIconContactHref = 'project___icon___contact___href',
  ProjectIconContactId = 'project___icon___contact___id',
  ProjectIconContactName = 'project___icon___contact___name',
  ProjectIconContactNodeLocale = 'project___icon___contact___node_locale',
  ProjectIconContactSortKey = 'project___icon___contact___sortKey',
  ProjectIconContactSpaceId = 'project___icon___contact___spaceId',
  ProjectIconContactSubName = 'project___icon___contact___subName',
  ProjectIconContactUpdatedAt = 'project___icon___contact___updatedAt',
  ProjectIconContentfulId = 'project___icon___contentful_id',
  ProjectIconCreatedAt = 'project___icon___createdAt',
  ProjectIconHistory = 'project___icon___history',
  ProjectIconHistoryChildren = 'project___icon___history___children',
  ProjectIconHistoryContentfulId = 'project___icon___history___contentful_id',
  ProjectIconHistoryCreatedAt = 'project___icon___history___createdAt',
  ProjectIconHistoryDate = 'project___icon___history___date',
  ProjectIconHistoryId = 'project___icon___history___id',
  ProjectIconHistoryName = 'project___icon___history___name',
  ProjectIconHistoryNodeLocale = 'project___icon___history___node_locale',
  ProjectIconHistorySpaceId = 'project___icon___history___spaceId',
  ProjectIconHistorySubName = 'project___icon___history___subName',
  ProjectIconHistoryUpdatedAt = 'project___icon___history___updatedAt',
  ProjectIconId = 'project___icon___id',
  ProjectIconInternalContent = 'project___icon___internal___content',
  ProjectIconInternalContentDigest = 'project___icon___internal___contentDigest',
  ProjectIconInternalDescription = 'project___icon___internal___description',
  ProjectIconInternalFieldOwners = 'project___icon___internal___fieldOwners',
  ProjectIconInternalIgnoreType = 'project___icon___internal___ignoreType',
  ProjectIconInternalMediaType = 'project___icon___internal___mediaType',
  ProjectIconInternalOwner = 'project___icon___internal___owner',
  ProjectIconInternalType = 'project___icon___internal___type',
  ProjectIconName = 'project___icon___name',
  ProjectIconNodeLocale = 'project___icon___node_locale',
  ProjectIconOss = 'project___icon___oss',
  ProjectIconOssChildren = 'project___icon___oss___children',
  ProjectIconOssChildrenContentfulOssDetailTextNode = 'project___icon___oss___childrenContentfulOssDetailTextNode',
  ProjectIconOssContentfulId = 'project___icon___oss___contentful_id',
  ProjectIconOssCreatedAt = 'project___icon___oss___createdAt',
  ProjectIconOssHref = 'project___icon___oss___href',
  ProjectIconOssId = 'project___icon___oss___id',
  ProjectIconOssName = 'project___icon___oss___name',
  ProjectIconOssNodeLocale = 'project___icon___oss___node_locale',
  ProjectIconOssSpaceId = 'project___icon___oss___spaceId',
  ProjectIconOssStartDate = 'project___icon___oss___startDate',
  ProjectIconOssSubName = 'project___icon___oss___subName',
  ProjectIconOssTags = 'project___icon___oss___tags',
  ProjectIconOssUpdatedAt = 'project___icon___oss___updatedAt',
  ProjectIconParentChildren = 'project___icon___parent___children',
  ProjectIconParentId = 'project___icon___parent___id',
  ProjectIconProject = 'project___icon___project',
  ProjectIconProjectChildren = 'project___icon___project___children',
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 'project___icon___project___childrenContentfulProjectDetailTextNode',
  ProjectIconProjectContentfulId = 'project___icon___project___contentful_id',
  ProjectIconProjectCreatedAt = 'project___icon___project___createdAt',
  ProjectIconProjectEndDate = 'project___icon___project___endDate',
  ProjectIconProjectId = 'project___icon___project___id',
  ProjectIconProjectName = 'project___icon___project___name',
  ProjectIconProjectNodeLocale = 'project___icon___project___node_locale',
  ProjectIconProjectSpaceId = 'project___icon___project___spaceId',
  ProjectIconProjectStartDate = 'project___icon___project___startDate',
  ProjectIconProjectSubName = 'project___icon___project___subName',
  ProjectIconProjectTags = 'project___icon___project___tags',
  ProjectIconProjectUpdatedAt = 'project___icon___project___updatedAt',
  ProjectIconSpaceId = 'project___icon___spaceId',
  ProjectIconSvgChildren = 'project___icon___svg___children',
  ProjectIconSvgChildrenMarkdownRemark = 'project___icon___svg___childrenMarkdownRemark',
  ProjectIconSvgId = 'project___icon___svg___id',
  ProjectIconSvgSvg = 'project___icon___svg___svg',
  ProjectIconSysRevision = 'project___icon___sys___revision',
  ProjectIconSysType = 'project___icon___sys___type',
  ProjectIconUpdatedAt = 'project___icon___updatedAt',
  ProjectIconWhatICanDo = 'project___icon___what_i_can_do',
  ProjectIconWhatICanDoChildren = 'project___icon___what_i_can_do___children',
  ProjectIconWhatICanDoContentfulId = 'project___icon___what_i_can_do___contentful_id',
  ProjectIconWhatICanDoCreatedAt = 'project___icon___what_i_can_do___createdAt',
  ProjectIconWhatICanDoId = 'project___icon___what_i_can_do___id',
  ProjectIconWhatICanDoName = 'project___icon___what_i_can_do___name',
  ProjectIconWhatICanDoNodeLocale = 'project___icon___what_i_can_do___node_locale',
  ProjectIconWhatICanDoSortKey = 'project___icon___what_i_can_do___sortKey',
  ProjectIconWhatICanDoSpaceId = 'project___icon___what_i_can_do___spaceId',
  ProjectIconWhatICanDoSubName = 'project___icon___what_i_can_do___subName',
  ProjectIconWhatICanDoUpdatedAt = 'project___icon___what_i_can_do___updatedAt',
  ProjectId = 'project___id',
  ProjectInternalContent = 'project___internal___content',
  ProjectInternalContentDigest = 'project___internal___contentDigest',
  ProjectInternalDescription = 'project___internal___description',
  ProjectInternalFieldOwners = 'project___internal___fieldOwners',
  ProjectInternalIgnoreType = 'project___internal___ignoreType',
  ProjectInternalMediaType = 'project___internal___mediaType',
  ProjectInternalOwner = 'project___internal___owner',
  ProjectInternalType = 'project___internal___type',
  ProjectName = 'project___name',
  ProjectNodeLocale = 'project___node_locale',
  ProjectParentChildren = 'project___parent___children',
  ProjectParentChildrenChildren = 'project___parent___children___children',
  ProjectParentChildrenId = 'project___parent___children___id',
  ProjectParentId = 'project___parent___id',
  ProjectParentInternalContent = 'project___parent___internal___content',
  ProjectParentInternalContentDigest = 'project___parent___internal___contentDigest',
  ProjectParentInternalDescription = 'project___parent___internal___description',
  ProjectParentInternalFieldOwners = 'project___parent___internal___fieldOwners',
  ProjectParentInternalIgnoreType = 'project___parent___internal___ignoreType',
  ProjectParentInternalMediaType = 'project___parent___internal___mediaType',
  ProjectParentInternalOwner = 'project___parent___internal___owner',
  ProjectParentInternalType = 'project___parent___internal___type',
  ProjectParentParentChildren = 'project___parent___parent___children',
  ProjectParentParentId = 'project___parent___parent___id',
  ProjectSpaceId = 'project___spaceId',
  ProjectStartDate = 'project___startDate',
  ProjectSubName = 'project___subName',
  ProjectSysRevision = 'project___sys___revision',
  ProjectSysType = 'project___sys___type',
  ProjectTags = 'project___tags',
  ProjectTagsChildren = 'project___tags___children',
  ProjectTagsChildrenChildren = 'project___tags___children___children',
  ProjectTagsChildrenId = 'project___tags___children___id',
  ProjectTagsContentfulId = 'project___tags___contentful_id',
  ProjectTagsCreatedAt = 'project___tags___createdAt',
  ProjectTagsId = 'project___tags___id',
  ProjectTagsInternalContent = 'project___tags___internal___content',
  ProjectTagsInternalContentDigest = 'project___tags___internal___contentDigest',
  ProjectTagsInternalDescription = 'project___tags___internal___description',
  ProjectTagsInternalFieldOwners = 'project___tags___internal___fieldOwners',
  ProjectTagsInternalIgnoreType = 'project___tags___internal___ignoreType',
  ProjectTagsInternalMediaType = 'project___tags___internal___mediaType',
  ProjectTagsInternalOwner = 'project___tags___internal___owner',
  ProjectTagsInternalType = 'project___tags___internal___type',
  ProjectTagsLevel = 'project___tags___level',
  ProjectTagsName = 'project___tags___name',
  ProjectTagsNodeLocale = 'project___tags___node_locale',
  ProjectTagsOss = 'project___tags___oss',
  ProjectTagsOssChildren = 'project___tags___oss___children',
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 'project___tags___oss___childrenContentfulOssDetailTextNode',
  ProjectTagsOssContentfulId = 'project___tags___oss___contentful_id',
  ProjectTagsOssCreatedAt = 'project___tags___oss___createdAt',
  ProjectTagsOssHref = 'project___tags___oss___href',
  ProjectTagsOssId = 'project___tags___oss___id',
  ProjectTagsOssName = 'project___tags___oss___name',
  ProjectTagsOssNodeLocale = 'project___tags___oss___node_locale',
  ProjectTagsOssSpaceId = 'project___tags___oss___spaceId',
  ProjectTagsOssStartDate = 'project___tags___oss___startDate',
  ProjectTagsOssSubName = 'project___tags___oss___subName',
  ProjectTagsOssTags = 'project___tags___oss___tags',
  ProjectTagsOssUpdatedAt = 'project___tags___oss___updatedAt',
  ProjectTagsParentChildren = 'project___tags___parent___children',
  ProjectTagsParentId = 'project___tags___parent___id',
  ProjectTagsProject = 'project___tags___project',
  ProjectTagsProjectChildren = 'project___tags___project___children',
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 'project___tags___project___childrenContentfulProjectDetailTextNode',
  ProjectTagsProjectContentfulId = 'project___tags___project___contentful_id',
  ProjectTagsProjectCreatedAt = 'project___tags___project___createdAt',
  ProjectTagsProjectEndDate = 'project___tags___project___endDate',
  ProjectTagsProjectId = 'project___tags___project___id',
  ProjectTagsProjectName = 'project___tags___project___name',
  ProjectTagsProjectNodeLocale = 'project___tags___project___node_locale',
  ProjectTagsProjectSpaceId = 'project___tags___project___spaceId',
  ProjectTagsProjectStartDate = 'project___tags___project___startDate',
  ProjectTagsProjectSubName = 'project___tags___project___subName',
  ProjectTagsProjectTags = 'project___tags___project___tags',
  ProjectTagsProjectUpdatedAt = 'project___tags___project___updatedAt',
  ProjectTagsSkillMap = 'project___tags___skill_map',
  ProjectTagsSkillMapChildren = 'project___tags___skill_map___children',
  ProjectTagsSkillMapContentfulId = 'project___tags___skill_map___contentful_id',
  ProjectTagsSkillMapCreatedAt = 'project___tags___skill_map___createdAt',
  ProjectTagsSkillMapExpanded = 'project___tags___skill_map___expanded',
  ProjectTagsSkillMapId = 'project___tags___skill_map___id',
  ProjectTagsSkillMapName = 'project___tags___skill_map___name',
  ProjectTagsSkillMapNodeLocale = 'project___tags___skill_map___node_locale',
  ProjectTagsSkillMapSkills = 'project___tags___skill_map___skills',
  ProjectTagsSkillMapSortKey = 'project___tags___skill_map___sortKey',
  ProjectTagsSkillMapSpaceId = 'project___tags___skill_map___spaceId',
  ProjectTagsSkillMapUpdatedAt = 'project___tags___skill_map___updatedAt',
  ProjectTagsSpaceId = 'project___tags___spaceId',
  ProjectTagsSysRevision = 'project___tags___sys___revision',
  ProjectTagsSysType = 'project___tags___sys___type',
  ProjectTagsUpdatedAt = 'project___tags___updatedAt',
  ProjectUpdatedAt = 'project___updatedAt',
  SpaceId = 'spaceId',
  SvgChildMarkdownRemarkChildren = 'svg___childMarkdownRemark___children',
  SvgChildMarkdownRemarkChildrenChildren = 'svg___childMarkdownRemark___children___children',
  SvgChildMarkdownRemarkChildrenId = 'svg___childMarkdownRemark___children___id',
  SvgChildMarkdownRemarkExcerpt = 'svg___childMarkdownRemark___excerpt',
  SvgChildMarkdownRemarkExcerptAst = 'svg___childMarkdownRemark___excerptAst',
  SvgChildMarkdownRemarkFrontmatterTitle = 'svg___childMarkdownRemark___frontmatter___title',
  SvgChildMarkdownRemarkHeadings = 'svg___childMarkdownRemark___headings',
  SvgChildMarkdownRemarkHeadingsDepth = 'svg___childMarkdownRemark___headings___depth',
  SvgChildMarkdownRemarkHeadingsId = 'svg___childMarkdownRemark___headings___id',
  SvgChildMarkdownRemarkHeadingsValue = 'svg___childMarkdownRemark___headings___value',
  SvgChildMarkdownRemarkHtml = 'svg___childMarkdownRemark___html',
  SvgChildMarkdownRemarkHtmlAst = 'svg___childMarkdownRemark___htmlAst',
  SvgChildMarkdownRemarkId = 'svg___childMarkdownRemark___id',
  SvgChildMarkdownRemarkInternalContent = 'svg___childMarkdownRemark___internal___content',
  SvgChildMarkdownRemarkInternalContentDigest = 'svg___childMarkdownRemark___internal___contentDigest',
  SvgChildMarkdownRemarkInternalDescription = 'svg___childMarkdownRemark___internal___description',
  SvgChildMarkdownRemarkInternalFieldOwners = 'svg___childMarkdownRemark___internal___fieldOwners',
  SvgChildMarkdownRemarkInternalIgnoreType = 'svg___childMarkdownRemark___internal___ignoreType',
  SvgChildMarkdownRemarkInternalMediaType = 'svg___childMarkdownRemark___internal___mediaType',
  SvgChildMarkdownRemarkInternalOwner = 'svg___childMarkdownRemark___internal___owner',
  SvgChildMarkdownRemarkInternalType = 'svg___childMarkdownRemark___internal___type',
  SvgChildMarkdownRemarkParentChildren = 'svg___childMarkdownRemark___parent___children',
  SvgChildMarkdownRemarkParentId = 'svg___childMarkdownRemark___parent___id',
  SvgChildMarkdownRemarkRawMarkdownBody = 'svg___childMarkdownRemark___rawMarkdownBody',
  SvgChildMarkdownRemarkTableOfContents = 'svg___childMarkdownRemark___tableOfContents',
  SvgChildMarkdownRemarkTimeToRead = 'svg___childMarkdownRemark___timeToRead',
  SvgChildMarkdownRemarkWordCountParagraphs = 'svg___childMarkdownRemark___wordCount___paragraphs',
  SvgChildMarkdownRemarkWordCountSentences = 'svg___childMarkdownRemark___wordCount___sentences',
  SvgChildMarkdownRemarkWordCountWords = 'svg___childMarkdownRemark___wordCount___words',
  SvgChildren = 'svg___children',
  SvgChildrenMarkdownRemark = 'svg___childrenMarkdownRemark',
  SvgChildrenMarkdownRemarkChildren = 'svg___childrenMarkdownRemark___children',
  SvgChildrenMarkdownRemarkChildrenChildren = 'svg___childrenMarkdownRemark___children___children',
  SvgChildrenMarkdownRemarkChildrenId = 'svg___childrenMarkdownRemark___children___id',
  SvgChildrenMarkdownRemarkExcerpt = 'svg___childrenMarkdownRemark___excerpt',
  SvgChildrenMarkdownRemarkExcerptAst = 'svg___childrenMarkdownRemark___excerptAst',
  SvgChildrenMarkdownRemarkFrontmatterTitle = 'svg___childrenMarkdownRemark___frontmatter___title',
  SvgChildrenMarkdownRemarkHeadings = 'svg___childrenMarkdownRemark___headings',
  SvgChildrenMarkdownRemarkHeadingsDepth = 'svg___childrenMarkdownRemark___headings___depth',
  SvgChildrenMarkdownRemarkHeadingsId = 'svg___childrenMarkdownRemark___headings___id',
  SvgChildrenMarkdownRemarkHeadingsValue = 'svg___childrenMarkdownRemark___headings___value',
  SvgChildrenMarkdownRemarkHtml = 'svg___childrenMarkdownRemark___html',
  SvgChildrenMarkdownRemarkHtmlAst = 'svg___childrenMarkdownRemark___htmlAst',
  SvgChildrenMarkdownRemarkId = 'svg___childrenMarkdownRemark___id',
  SvgChildrenMarkdownRemarkInternalContent = 'svg___childrenMarkdownRemark___internal___content',
  SvgChildrenMarkdownRemarkInternalContentDigest = 'svg___childrenMarkdownRemark___internal___contentDigest',
  SvgChildrenMarkdownRemarkInternalDescription = 'svg___childrenMarkdownRemark___internal___description',
  SvgChildrenMarkdownRemarkInternalFieldOwners = 'svg___childrenMarkdownRemark___internal___fieldOwners',
  SvgChildrenMarkdownRemarkInternalIgnoreType = 'svg___childrenMarkdownRemark___internal___ignoreType',
  SvgChildrenMarkdownRemarkInternalMediaType = 'svg___childrenMarkdownRemark___internal___mediaType',
  SvgChildrenMarkdownRemarkInternalOwner = 'svg___childrenMarkdownRemark___internal___owner',
  SvgChildrenMarkdownRemarkInternalType = 'svg___childrenMarkdownRemark___internal___type',
  SvgChildrenMarkdownRemarkParentChildren = 'svg___childrenMarkdownRemark___parent___children',
  SvgChildrenMarkdownRemarkParentId = 'svg___childrenMarkdownRemark___parent___id',
  SvgChildrenMarkdownRemarkRawMarkdownBody = 'svg___childrenMarkdownRemark___rawMarkdownBody',
  SvgChildrenMarkdownRemarkTableOfContents = 'svg___childrenMarkdownRemark___tableOfContents',
  SvgChildrenMarkdownRemarkTimeToRead = 'svg___childrenMarkdownRemark___timeToRead',
  SvgChildrenMarkdownRemarkWordCountParagraphs = 'svg___childrenMarkdownRemark___wordCount___paragraphs',
  SvgChildrenMarkdownRemarkWordCountSentences = 'svg___childrenMarkdownRemark___wordCount___sentences',
  SvgChildrenMarkdownRemarkWordCountWords = 'svg___childrenMarkdownRemark___wordCount___words',
  SvgChildrenChildren = 'svg___children___children',
  SvgChildrenChildrenChildren = 'svg___children___children___children',
  SvgChildrenChildrenId = 'svg___children___children___id',
  SvgChildrenId = 'svg___children___id',
  SvgChildrenInternalContent = 'svg___children___internal___content',
  SvgChildrenInternalContentDigest = 'svg___children___internal___contentDigest',
  SvgChildrenInternalDescription = 'svg___children___internal___description',
  SvgChildrenInternalFieldOwners = 'svg___children___internal___fieldOwners',
  SvgChildrenInternalIgnoreType = 'svg___children___internal___ignoreType',
  SvgChildrenInternalMediaType = 'svg___children___internal___mediaType',
  SvgChildrenInternalOwner = 'svg___children___internal___owner',
  SvgChildrenInternalType = 'svg___children___internal___type',
  SvgChildrenParentChildren = 'svg___children___parent___children',
  SvgChildrenParentId = 'svg___children___parent___id',
  SvgId = 'svg___id',
  SvgInternalContent = 'svg___internal___content',
  SvgInternalContentDigest = 'svg___internal___contentDigest',
  SvgInternalDescription = 'svg___internal___description',
  SvgInternalFieldOwners = 'svg___internal___fieldOwners',
  SvgInternalIgnoreType = 'svg___internal___ignoreType',
  SvgInternalMediaType = 'svg___internal___mediaType',
  SvgInternalOwner = 'svg___internal___owner',
  SvgInternalType = 'svg___internal___type',
  SvgParentChildren = 'svg___parent___children',
  SvgParentChildrenChildren = 'svg___parent___children___children',
  SvgParentChildrenId = 'svg___parent___children___id',
  SvgParentId = 'svg___parent___id',
  SvgParentInternalContent = 'svg___parent___internal___content',
  SvgParentInternalContentDigest = 'svg___parent___internal___contentDigest',
  SvgParentInternalDescription = 'svg___parent___internal___description',
  SvgParentInternalFieldOwners = 'svg___parent___internal___fieldOwners',
  SvgParentInternalIgnoreType = 'svg___parent___internal___ignoreType',
  SvgParentInternalMediaType = 'svg___parent___internal___mediaType',
  SvgParentInternalOwner = 'svg___parent___internal___owner',
  SvgParentInternalType = 'svg___parent___internal___type',
  SvgParentParentChildren = 'svg___parent___parent___children',
  SvgParentParentId = 'svg___parent___parent___id',
  SvgSvg = 'svg___svg',
  SvgSysType = 'svg___sys___type',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt',
  WhatICanDo = 'what_i_can_do',
  WhatICanDoChildren = 'what_i_can_do___children',
  WhatICanDoChildrenChildren = 'what_i_can_do___children___children',
  WhatICanDoChildrenChildrenChildren = 'what_i_can_do___children___children___children',
  WhatICanDoChildrenChildrenId = 'what_i_can_do___children___children___id',
  WhatICanDoChildrenId = 'what_i_can_do___children___id',
  WhatICanDoChildrenInternalContent = 'what_i_can_do___children___internal___content',
  WhatICanDoChildrenInternalContentDigest = 'what_i_can_do___children___internal___contentDigest',
  WhatICanDoChildrenInternalDescription = 'what_i_can_do___children___internal___description',
  WhatICanDoChildrenInternalFieldOwners = 'what_i_can_do___children___internal___fieldOwners',
  WhatICanDoChildrenInternalIgnoreType = 'what_i_can_do___children___internal___ignoreType',
  WhatICanDoChildrenInternalMediaType = 'what_i_can_do___children___internal___mediaType',
  WhatICanDoChildrenInternalOwner = 'what_i_can_do___children___internal___owner',
  WhatICanDoChildrenInternalType = 'what_i_can_do___children___internal___type',
  WhatICanDoChildrenParentChildren = 'what_i_can_do___children___parent___children',
  WhatICanDoChildrenParentId = 'what_i_can_do___children___parent___id',
  WhatICanDoContentfulId = 'what_i_can_do___contentful_id',
  WhatICanDoCreatedAt = 'what_i_can_do___createdAt',
  WhatICanDoIconChildContentfulIconSvgTextNodeChildren = 'what_i_can_do___icon___childContentfulIconSvgTextNode___children',
  WhatICanDoIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'what_i_can_do___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  WhatICanDoIconChildContentfulIconSvgTextNodeId = 'what_i_can_do___icon___childContentfulIconSvgTextNode___id',
  WhatICanDoIconChildContentfulIconSvgTextNodeSvg = 'what_i_can_do___icon___childContentfulIconSvgTextNode___svg',
  WhatICanDoIconChildren = 'what_i_can_do___icon___children',
  WhatICanDoIconChildrenContentfulIconSvgTextNode = 'what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildren = 'what_i_can_do___icon___childrenContentfulIconSvgTextNode___children',
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'what_i_can_do___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  WhatICanDoIconChildrenContentfulIconSvgTextNodeId = 'what_i_can_do___icon___childrenContentfulIconSvgTextNode___id',
  WhatICanDoIconChildrenContentfulIconSvgTextNodeSvg = 'what_i_can_do___icon___childrenContentfulIconSvgTextNode___svg',
  WhatICanDoIconChildrenChildren = 'what_i_can_do___icon___children___children',
  WhatICanDoIconChildrenId = 'what_i_can_do___icon___children___id',
  WhatICanDoIconContact = 'what_i_can_do___icon___contact',
  WhatICanDoIconContactChildren = 'what_i_can_do___icon___contact___children',
  WhatICanDoIconContactContentfulId = 'what_i_can_do___icon___contact___contentful_id',
  WhatICanDoIconContactCreatedAt = 'what_i_can_do___icon___contact___createdAt',
  WhatICanDoIconContactHref = 'what_i_can_do___icon___contact___href',
  WhatICanDoIconContactId = 'what_i_can_do___icon___contact___id',
  WhatICanDoIconContactName = 'what_i_can_do___icon___contact___name',
  WhatICanDoIconContactNodeLocale = 'what_i_can_do___icon___contact___node_locale',
  WhatICanDoIconContactSortKey = 'what_i_can_do___icon___contact___sortKey',
  WhatICanDoIconContactSpaceId = 'what_i_can_do___icon___contact___spaceId',
  WhatICanDoIconContactSubName = 'what_i_can_do___icon___contact___subName',
  WhatICanDoIconContactUpdatedAt = 'what_i_can_do___icon___contact___updatedAt',
  WhatICanDoIconContentfulId = 'what_i_can_do___icon___contentful_id',
  WhatICanDoIconCreatedAt = 'what_i_can_do___icon___createdAt',
  WhatICanDoIconHistory = 'what_i_can_do___icon___history',
  WhatICanDoIconHistoryChildren = 'what_i_can_do___icon___history___children',
  WhatICanDoIconHistoryContentfulId = 'what_i_can_do___icon___history___contentful_id',
  WhatICanDoIconHistoryCreatedAt = 'what_i_can_do___icon___history___createdAt',
  WhatICanDoIconHistoryDate = 'what_i_can_do___icon___history___date',
  WhatICanDoIconHistoryId = 'what_i_can_do___icon___history___id',
  WhatICanDoIconHistoryName = 'what_i_can_do___icon___history___name',
  WhatICanDoIconHistoryNodeLocale = 'what_i_can_do___icon___history___node_locale',
  WhatICanDoIconHistorySpaceId = 'what_i_can_do___icon___history___spaceId',
  WhatICanDoIconHistorySubName = 'what_i_can_do___icon___history___subName',
  WhatICanDoIconHistoryUpdatedAt = 'what_i_can_do___icon___history___updatedAt',
  WhatICanDoIconId = 'what_i_can_do___icon___id',
  WhatICanDoIconInternalContent = 'what_i_can_do___icon___internal___content',
  WhatICanDoIconInternalContentDigest = 'what_i_can_do___icon___internal___contentDigest',
  WhatICanDoIconInternalDescription = 'what_i_can_do___icon___internal___description',
  WhatICanDoIconInternalFieldOwners = 'what_i_can_do___icon___internal___fieldOwners',
  WhatICanDoIconInternalIgnoreType = 'what_i_can_do___icon___internal___ignoreType',
  WhatICanDoIconInternalMediaType = 'what_i_can_do___icon___internal___mediaType',
  WhatICanDoIconInternalOwner = 'what_i_can_do___icon___internal___owner',
  WhatICanDoIconInternalType = 'what_i_can_do___icon___internal___type',
  WhatICanDoIconName = 'what_i_can_do___icon___name',
  WhatICanDoIconNodeLocale = 'what_i_can_do___icon___node_locale',
  WhatICanDoIconOss = 'what_i_can_do___icon___oss',
  WhatICanDoIconOssChildren = 'what_i_can_do___icon___oss___children',
  WhatICanDoIconOssChildrenContentfulOssDetailTextNode = 'what_i_can_do___icon___oss___childrenContentfulOssDetailTextNode',
  WhatICanDoIconOssContentfulId = 'what_i_can_do___icon___oss___contentful_id',
  WhatICanDoIconOssCreatedAt = 'what_i_can_do___icon___oss___createdAt',
  WhatICanDoIconOssHref = 'what_i_can_do___icon___oss___href',
  WhatICanDoIconOssId = 'what_i_can_do___icon___oss___id',
  WhatICanDoIconOssName = 'what_i_can_do___icon___oss___name',
  WhatICanDoIconOssNodeLocale = 'what_i_can_do___icon___oss___node_locale',
  WhatICanDoIconOssSpaceId = 'what_i_can_do___icon___oss___spaceId',
  WhatICanDoIconOssStartDate = 'what_i_can_do___icon___oss___startDate',
  WhatICanDoIconOssSubName = 'what_i_can_do___icon___oss___subName',
  WhatICanDoIconOssTags = 'what_i_can_do___icon___oss___tags',
  WhatICanDoIconOssUpdatedAt = 'what_i_can_do___icon___oss___updatedAt',
  WhatICanDoIconParentChildren = 'what_i_can_do___icon___parent___children',
  WhatICanDoIconParentId = 'what_i_can_do___icon___parent___id',
  WhatICanDoIconProject = 'what_i_can_do___icon___project',
  WhatICanDoIconProjectChildren = 'what_i_can_do___icon___project___children',
  WhatICanDoIconProjectChildrenContentfulProjectDetailTextNode = 'what_i_can_do___icon___project___childrenContentfulProjectDetailTextNode',
  WhatICanDoIconProjectContentfulId = 'what_i_can_do___icon___project___contentful_id',
  WhatICanDoIconProjectCreatedAt = 'what_i_can_do___icon___project___createdAt',
  WhatICanDoIconProjectEndDate = 'what_i_can_do___icon___project___endDate',
  WhatICanDoIconProjectId = 'what_i_can_do___icon___project___id',
  WhatICanDoIconProjectName = 'what_i_can_do___icon___project___name',
  WhatICanDoIconProjectNodeLocale = 'what_i_can_do___icon___project___node_locale',
  WhatICanDoIconProjectSpaceId = 'what_i_can_do___icon___project___spaceId',
  WhatICanDoIconProjectStartDate = 'what_i_can_do___icon___project___startDate',
  WhatICanDoIconProjectSubName = 'what_i_can_do___icon___project___subName',
  WhatICanDoIconProjectTags = 'what_i_can_do___icon___project___tags',
  WhatICanDoIconProjectUpdatedAt = 'what_i_can_do___icon___project___updatedAt',
  WhatICanDoIconSpaceId = 'what_i_can_do___icon___spaceId',
  WhatICanDoIconSvgChildren = 'what_i_can_do___icon___svg___children',
  WhatICanDoIconSvgChildrenMarkdownRemark = 'what_i_can_do___icon___svg___childrenMarkdownRemark',
  WhatICanDoIconSvgId = 'what_i_can_do___icon___svg___id',
  WhatICanDoIconSvgSvg = 'what_i_can_do___icon___svg___svg',
  WhatICanDoIconSysRevision = 'what_i_can_do___icon___sys___revision',
  WhatICanDoIconSysType = 'what_i_can_do___icon___sys___type',
  WhatICanDoIconUpdatedAt = 'what_i_can_do___icon___updatedAt',
  WhatICanDoIconWhatICanDo = 'what_i_can_do___icon___what_i_can_do',
  WhatICanDoIconWhatICanDoChildren = 'what_i_can_do___icon___what_i_can_do___children',
  WhatICanDoIconWhatICanDoContentfulId = 'what_i_can_do___icon___what_i_can_do___contentful_id',
  WhatICanDoIconWhatICanDoCreatedAt = 'what_i_can_do___icon___what_i_can_do___createdAt',
  WhatICanDoIconWhatICanDoId = 'what_i_can_do___icon___what_i_can_do___id',
  WhatICanDoIconWhatICanDoName = 'what_i_can_do___icon___what_i_can_do___name',
  WhatICanDoIconWhatICanDoNodeLocale = 'what_i_can_do___icon___what_i_can_do___node_locale',
  WhatICanDoIconWhatICanDoSortKey = 'what_i_can_do___icon___what_i_can_do___sortKey',
  WhatICanDoIconWhatICanDoSpaceId = 'what_i_can_do___icon___what_i_can_do___spaceId',
  WhatICanDoIconWhatICanDoSubName = 'what_i_can_do___icon___what_i_can_do___subName',
  WhatICanDoIconWhatICanDoUpdatedAt = 'what_i_can_do___icon___what_i_can_do___updatedAt',
  WhatICanDoId = 'what_i_can_do___id',
  WhatICanDoInternalContent = 'what_i_can_do___internal___content',
  WhatICanDoInternalContentDigest = 'what_i_can_do___internal___contentDigest',
  WhatICanDoInternalDescription = 'what_i_can_do___internal___description',
  WhatICanDoInternalFieldOwners = 'what_i_can_do___internal___fieldOwners',
  WhatICanDoInternalIgnoreType = 'what_i_can_do___internal___ignoreType',
  WhatICanDoInternalMediaType = 'what_i_can_do___internal___mediaType',
  WhatICanDoInternalOwner = 'what_i_can_do___internal___owner',
  WhatICanDoInternalType = 'what_i_can_do___internal___type',
  WhatICanDoName = 'what_i_can_do___name',
  WhatICanDoNodeLocale = 'what_i_can_do___node_locale',
  WhatICanDoParentChildren = 'what_i_can_do___parent___children',
  WhatICanDoParentChildrenChildren = 'what_i_can_do___parent___children___children',
  WhatICanDoParentChildrenId = 'what_i_can_do___parent___children___id',
  WhatICanDoParentId = 'what_i_can_do___parent___id',
  WhatICanDoParentInternalContent = 'what_i_can_do___parent___internal___content',
  WhatICanDoParentInternalContentDigest = 'what_i_can_do___parent___internal___contentDigest',
  WhatICanDoParentInternalDescription = 'what_i_can_do___parent___internal___description',
  WhatICanDoParentInternalFieldOwners = 'what_i_can_do___parent___internal___fieldOwners',
  WhatICanDoParentInternalIgnoreType = 'what_i_can_do___parent___internal___ignoreType',
  WhatICanDoParentInternalMediaType = 'what_i_can_do___parent___internal___mediaType',
  WhatICanDoParentInternalOwner = 'what_i_can_do___parent___internal___owner',
  WhatICanDoParentInternalType = 'what_i_can_do___parent___internal___type',
  WhatICanDoParentParentChildren = 'what_i_can_do___parent___parent___children',
  WhatICanDoParentParentId = 'what_i_can_do___parent___parent___id',
  WhatICanDoSortKey = 'what_i_can_do___sortKey',
  WhatICanDoSpaceId = 'what_i_can_do___spaceId',
  WhatICanDoSubName = 'what_i_can_do___subName',
  WhatICanDoSysRevision = 'what_i_can_do___sys___revision',
  WhatICanDoSysType = 'what_i_can_do___sys___type',
  WhatICanDoUpdatedAt = 'what_i_can_do___updatedAt'
}

export type ContentfulIconFilterInput = {
  childContentfulIconSvgTextNode?: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulIconSvgTextNode?: InputMaybe<ContentfulIconSvgTextNodeFilterListInput>;
  contact?: InputMaybe<ContentfulContactFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  history?: InputMaybe<ContentfulHistoryFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  oss?: InputMaybe<ContentfulOssFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  project?: InputMaybe<ContentfulProjectFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  svg?: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  sys?: InputMaybe<ContentfulIconSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  what_i_can_do?: InputMaybe<ContentfulWhatICanDoFilterListInput>;
};

export type ContentfulIconGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulIconEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulIconGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulIcon>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulIconGroupConnectionDistinctArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconGroupConnectionGroupArgs = {
  field: ContentfulIconFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulIconGroupConnectionMaxArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconGroupConnectionMinArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconGroupConnectionSumArgs = {
  field: ContentfulIconFieldsEnum;
};

export type ContentfulIconSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulIconFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulIconSys = {
  contentType?: Maybe<ContentfulIconSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulIconSysContentType = {
  sys?: Maybe<ContentfulIconSysContentTypeSys>;
};

export type ContentfulIconSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulIconSysContentTypeSysFilterInput>;
};

export type ContentfulIconSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulIconSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulIconSysFilterInput = {
  contentType?: InputMaybe<ContentfulIconSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export enum ContentfulImageCropFocus {
  Bottom = 'BOTTOM',
  BottomLeft = 'BOTTOM_LEFT',
  BottomRight = 'BOTTOM_RIGHT',
  Center = 'CENTER',
  Face = 'FACE',
  Faces = 'FACES',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT'
}

export type ContentfulOss = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulOssDetailTextNode or null if there are no children of given type on this node */
  childContentfulOssDetailTextNode?: Maybe<ContentfulOssDetailTextNode>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type contentfulOssDetailTextNode */
  childrenContentfulOssDetailTextNode?: Maybe<Array<Maybe<ContentfulOssDetailTextNode>>>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  detail?: Maybe<ContentfulOssDetailTextNode>;
  href?: Maybe<Scalars['String']>;
  icon?: Maybe<ContentfulIcon>;
  id: Scalars['ID'];
  image?: Maybe<ContentfulAsset>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  subName?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulOssSys>;
  tags?: Maybe<Array<Maybe<ContentfulTag>>>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulOssCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulOssStartDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulOssUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulOssConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulOssEdge>;
  group: Array<ContentfulOssGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulOss>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulOssConnectionDistinctArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssConnectionGroupArgs = {
  field: ContentfulOssFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulOssConnectionMaxArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssConnectionMinArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssConnectionSumArgs = {
  field: ContentfulOssFieldsEnum;
};

export type ContentfulOssEdge = {
  next?: Maybe<ContentfulOss>;
  node: ContentfulOss;
  previous?: Maybe<ContentfulOss>;
};

export enum ContentfulOssFieldsEnum {
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 'childContentfulOssDetailTextNode___childMarkdownRemark___children',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkChildrenChildren = 'childContentfulOssDetailTextNode___childMarkdownRemark___children___children',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkChildrenId = 'childContentfulOssDetailTextNode___childMarkdownRemark___children___id',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 'childContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 'childContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkFrontmatterTitle = 'childContentfulOssDetailTextNode___childMarkdownRemark___frontmatter___title',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 'childContentfulOssDetailTextNode___childMarkdownRemark___headings',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsDepth = 'childContentfulOssDetailTextNode___childMarkdownRemark___headings___depth',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsId = 'childContentfulOssDetailTextNode___childMarkdownRemark___headings___id',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsValue = 'childContentfulOssDetailTextNode___childMarkdownRemark___headings___value',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 'childContentfulOssDetailTextNode___childMarkdownRemark___html',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 'childContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkId = 'childContentfulOssDetailTextNode___childMarkdownRemark___id',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalContent = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___content',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalContentDigest = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___contentDigest',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalDescription = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___description',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalFieldOwners = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalIgnoreType = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___ignoreType',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalMediaType = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___mediaType',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalOwner = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___owner',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalType = 'childContentfulOssDetailTextNode___childMarkdownRemark___internal___type',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkParentChildren = 'childContentfulOssDetailTextNode___childMarkdownRemark___parent___children',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkParentId = 'childContentfulOssDetailTextNode___childMarkdownRemark___parent___id',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'childContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 'childContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 'childContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkWordCountParagraphs = 'childContentfulOssDetailTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkWordCountSentences = 'childContentfulOssDetailTextNode___childMarkdownRemark___wordCount___sentences',
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkWordCountWords = 'childContentfulOssDetailTextNode___childMarkdownRemark___wordCount___words',
  ChildContentfulOssDetailTextNodeChildren = 'childContentfulOssDetailTextNode___children',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 'childContentfulOssDetailTextNode___childrenMarkdownRemark',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___children___children',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenId = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___children___id',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___frontmatter___title',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___headings___depth',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsId = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___headings___id',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___headings___value',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContent = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___content',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___contentDigest',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalDescription = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___description',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___fieldOwners',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___ignoreType',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___mediaType',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalOwner = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___owner',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalType = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___internal___type',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkParentChildren = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___parent___children',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkParentId = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___parent___id',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___sentences',
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountWords = 'childContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___words',
  ChildContentfulOssDetailTextNodeChildrenChildren = 'childContentfulOssDetailTextNode___children___children',
  ChildContentfulOssDetailTextNodeChildrenChildrenChildren = 'childContentfulOssDetailTextNode___children___children___children',
  ChildContentfulOssDetailTextNodeChildrenChildrenId = 'childContentfulOssDetailTextNode___children___children___id',
  ChildContentfulOssDetailTextNodeChildrenId = 'childContentfulOssDetailTextNode___children___id',
  ChildContentfulOssDetailTextNodeChildrenInternalContent = 'childContentfulOssDetailTextNode___children___internal___content',
  ChildContentfulOssDetailTextNodeChildrenInternalContentDigest = 'childContentfulOssDetailTextNode___children___internal___contentDigest',
  ChildContentfulOssDetailTextNodeChildrenInternalDescription = 'childContentfulOssDetailTextNode___children___internal___description',
  ChildContentfulOssDetailTextNodeChildrenInternalFieldOwners = 'childContentfulOssDetailTextNode___children___internal___fieldOwners',
  ChildContentfulOssDetailTextNodeChildrenInternalIgnoreType = 'childContentfulOssDetailTextNode___children___internal___ignoreType',
  ChildContentfulOssDetailTextNodeChildrenInternalMediaType = 'childContentfulOssDetailTextNode___children___internal___mediaType',
  ChildContentfulOssDetailTextNodeChildrenInternalOwner = 'childContentfulOssDetailTextNode___children___internal___owner',
  ChildContentfulOssDetailTextNodeChildrenInternalType = 'childContentfulOssDetailTextNode___children___internal___type',
  ChildContentfulOssDetailTextNodeChildrenParentChildren = 'childContentfulOssDetailTextNode___children___parent___children',
  ChildContentfulOssDetailTextNodeChildrenParentId = 'childContentfulOssDetailTextNode___children___parent___id',
  ChildContentfulOssDetailTextNodeDetail = 'childContentfulOssDetailTextNode___detail',
  ChildContentfulOssDetailTextNodeId = 'childContentfulOssDetailTextNode___id',
  ChildContentfulOssDetailTextNodeInternalContent = 'childContentfulOssDetailTextNode___internal___content',
  ChildContentfulOssDetailTextNodeInternalContentDigest = 'childContentfulOssDetailTextNode___internal___contentDigest',
  ChildContentfulOssDetailTextNodeInternalDescription = 'childContentfulOssDetailTextNode___internal___description',
  ChildContentfulOssDetailTextNodeInternalFieldOwners = 'childContentfulOssDetailTextNode___internal___fieldOwners',
  ChildContentfulOssDetailTextNodeInternalIgnoreType = 'childContentfulOssDetailTextNode___internal___ignoreType',
  ChildContentfulOssDetailTextNodeInternalMediaType = 'childContentfulOssDetailTextNode___internal___mediaType',
  ChildContentfulOssDetailTextNodeInternalOwner = 'childContentfulOssDetailTextNode___internal___owner',
  ChildContentfulOssDetailTextNodeInternalType = 'childContentfulOssDetailTextNode___internal___type',
  ChildContentfulOssDetailTextNodeParentChildren = 'childContentfulOssDetailTextNode___parent___children',
  ChildContentfulOssDetailTextNodeParentChildrenChildren = 'childContentfulOssDetailTextNode___parent___children___children',
  ChildContentfulOssDetailTextNodeParentChildrenId = 'childContentfulOssDetailTextNode___parent___children___id',
  ChildContentfulOssDetailTextNodeParentId = 'childContentfulOssDetailTextNode___parent___id',
  ChildContentfulOssDetailTextNodeParentInternalContent = 'childContentfulOssDetailTextNode___parent___internal___content',
  ChildContentfulOssDetailTextNodeParentInternalContentDigest = 'childContentfulOssDetailTextNode___parent___internal___contentDigest',
  ChildContentfulOssDetailTextNodeParentInternalDescription = 'childContentfulOssDetailTextNode___parent___internal___description',
  ChildContentfulOssDetailTextNodeParentInternalFieldOwners = 'childContentfulOssDetailTextNode___parent___internal___fieldOwners',
  ChildContentfulOssDetailTextNodeParentInternalIgnoreType = 'childContentfulOssDetailTextNode___parent___internal___ignoreType',
  ChildContentfulOssDetailTextNodeParentInternalMediaType = 'childContentfulOssDetailTextNode___parent___internal___mediaType',
  ChildContentfulOssDetailTextNodeParentInternalOwner = 'childContentfulOssDetailTextNode___parent___internal___owner',
  ChildContentfulOssDetailTextNodeParentInternalType = 'childContentfulOssDetailTextNode___parent___internal___type',
  ChildContentfulOssDetailTextNodeParentParentChildren = 'childContentfulOssDetailTextNode___parent___parent___children',
  ChildContentfulOssDetailTextNodeParentParentId = 'childContentfulOssDetailTextNode___parent___parent___id',
  ChildContentfulOssDetailTextNodeSysType = 'childContentfulOssDetailTextNode___sys___type',
  Children = 'children',
  ChildrenContentfulOssDetailTextNode = 'childrenContentfulOssDetailTextNode',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___children',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildrenChildren = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___children___children',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildrenId = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___children___id',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkFrontmatterTitle = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___frontmatter___title',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___headings',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsDepth = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___headings___depth',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsId = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___headings___id',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsValue = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___headings___value',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___html',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkId = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___id',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalContent = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___content',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalContentDigest = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___contentDigest',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalDescription = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___description',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalFieldOwners = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalIgnoreType = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___ignoreType',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalMediaType = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___mediaType',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalOwner = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___owner',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalType = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___internal___type',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkParentChildren = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___parent___children',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkParentId = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___parent___id',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkWordCountParagraphs = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkWordCountSentences = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___wordCount___sentences',
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkWordCountWords = 'childrenContentfulOssDetailTextNode___childMarkdownRemark___wordCount___words',
  ChildrenContentfulOssDetailTextNodeChildren = 'childrenContentfulOssDetailTextNode___children',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children___children',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenId = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children___id',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___frontmatter___title',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings___depth',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsId = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings___id',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings___value',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContent = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___content',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___contentDigest',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalDescription = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___description',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___fieldOwners',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___ignoreType',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___mediaType',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalOwner = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___owner',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalType = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___internal___type',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkParentChildren = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___parent___children',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkParentId = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___parent___id',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___sentences',
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountWords = 'childrenContentfulOssDetailTextNode___childrenMarkdownRemark___wordCount___words',
  ChildrenContentfulOssDetailTextNodeChildrenChildren = 'childrenContentfulOssDetailTextNode___children___children',
  ChildrenContentfulOssDetailTextNodeChildrenChildrenChildren = 'childrenContentfulOssDetailTextNode___children___children___children',
  ChildrenContentfulOssDetailTextNodeChildrenChildrenId = 'childrenContentfulOssDetailTextNode___children___children___id',
  ChildrenContentfulOssDetailTextNodeChildrenId = 'childrenContentfulOssDetailTextNode___children___id',
  ChildrenContentfulOssDetailTextNodeChildrenInternalContent = 'childrenContentfulOssDetailTextNode___children___internal___content',
  ChildrenContentfulOssDetailTextNodeChildrenInternalContentDigest = 'childrenContentfulOssDetailTextNode___children___internal___contentDigest',
  ChildrenContentfulOssDetailTextNodeChildrenInternalDescription = 'childrenContentfulOssDetailTextNode___children___internal___description',
  ChildrenContentfulOssDetailTextNodeChildrenInternalFieldOwners = 'childrenContentfulOssDetailTextNode___children___internal___fieldOwners',
  ChildrenContentfulOssDetailTextNodeChildrenInternalIgnoreType = 'childrenContentfulOssDetailTextNode___children___internal___ignoreType',
  ChildrenContentfulOssDetailTextNodeChildrenInternalMediaType = 'childrenContentfulOssDetailTextNode___children___internal___mediaType',
  ChildrenContentfulOssDetailTextNodeChildrenInternalOwner = 'childrenContentfulOssDetailTextNode___children___internal___owner',
  ChildrenContentfulOssDetailTextNodeChildrenInternalType = 'childrenContentfulOssDetailTextNode___children___internal___type',
  ChildrenContentfulOssDetailTextNodeChildrenParentChildren = 'childrenContentfulOssDetailTextNode___children___parent___children',
  ChildrenContentfulOssDetailTextNodeChildrenParentId = 'childrenContentfulOssDetailTextNode___children___parent___id',
  ChildrenContentfulOssDetailTextNodeDetail = 'childrenContentfulOssDetailTextNode___detail',
  ChildrenContentfulOssDetailTextNodeId = 'childrenContentfulOssDetailTextNode___id',
  ChildrenContentfulOssDetailTextNodeInternalContent = 'childrenContentfulOssDetailTextNode___internal___content',
  ChildrenContentfulOssDetailTextNodeInternalContentDigest = 'childrenContentfulOssDetailTextNode___internal___contentDigest',
  ChildrenContentfulOssDetailTextNodeInternalDescription = 'childrenContentfulOssDetailTextNode___internal___description',
  ChildrenContentfulOssDetailTextNodeInternalFieldOwners = 'childrenContentfulOssDetailTextNode___internal___fieldOwners',
  ChildrenContentfulOssDetailTextNodeInternalIgnoreType = 'childrenContentfulOssDetailTextNode___internal___ignoreType',
  ChildrenContentfulOssDetailTextNodeInternalMediaType = 'childrenContentfulOssDetailTextNode___internal___mediaType',
  ChildrenContentfulOssDetailTextNodeInternalOwner = 'childrenContentfulOssDetailTextNode___internal___owner',
  ChildrenContentfulOssDetailTextNodeInternalType = 'childrenContentfulOssDetailTextNode___internal___type',
  ChildrenContentfulOssDetailTextNodeParentChildren = 'childrenContentfulOssDetailTextNode___parent___children',
  ChildrenContentfulOssDetailTextNodeParentChildrenChildren = 'childrenContentfulOssDetailTextNode___parent___children___children',
  ChildrenContentfulOssDetailTextNodeParentChildrenId = 'childrenContentfulOssDetailTextNode___parent___children___id',
  ChildrenContentfulOssDetailTextNodeParentId = 'childrenContentfulOssDetailTextNode___parent___id',
  ChildrenContentfulOssDetailTextNodeParentInternalContent = 'childrenContentfulOssDetailTextNode___parent___internal___content',
  ChildrenContentfulOssDetailTextNodeParentInternalContentDigest = 'childrenContentfulOssDetailTextNode___parent___internal___contentDigest',
  ChildrenContentfulOssDetailTextNodeParentInternalDescription = 'childrenContentfulOssDetailTextNode___parent___internal___description',
  ChildrenContentfulOssDetailTextNodeParentInternalFieldOwners = 'childrenContentfulOssDetailTextNode___parent___internal___fieldOwners',
  ChildrenContentfulOssDetailTextNodeParentInternalIgnoreType = 'childrenContentfulOssDetailTextNode___parent___internal___ignoreType',
  ChildrenContentfulOssDetailTextNodeParentInternalMediaType = 'childrenContentfulOssDetailTextNode___parent___internal___mediaType',
  ChildrenContentfulOssDetailTextNodeParentInternalOwner = 'childrenContentfulOssDetailTextNode___parent___internal___owner',
  ChildrenContentfulOssDetailTextNodeParentInternalType = 'childrenContentfulOssDetailTextNode___parent___internal___type',
  ChildrenContentfulOssDetailTextNodeParentParentChildren = 'childrenContentfulOssDetailTextNode___parent___parent___children',
  ChildrenContentfulOssDetailTextNodeParentParentId = 'childrenContentfulOssDetailTextNode___parent___parent___id',
  ChildrenContentfulOssDetailTextNodeSysType = 'childrenContentfulOssDetailTextNode___sys___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  DetailChildMarkdownRemarkChildren = 'detail___childMarkdownRemark___children',
  DetailChildMarkdownRemarkChildrenChildren = 'detail___childMarkdownRemark___children___children',
  DetailChildMarkdownRemarkChildrenId = 'detail___childMarkdownRemark___children___id',
  DetailChildMarkdownRemarkExcerpt = 'detail___childMarkdownRemark___excerpt',
  DetailChildMarkdownRemarkExcerptAst = 'detail___childMarkdownRemark___excerptAst',
  DetailChildMarkdownRemarkFrontmatterTitle = 'detail___childMarkdownRemark___frontmatter___title',
  DetailChildMarkdownRemarkHeadings = 'detail___childMarkdownRemark___headings',
  DetailChildMarkdownRemarkHeadingsDepth = 'detail___childMarkdownRemark___headings___depth',
  DetailChildMarkdownRemarkHeadingsId = 'detail___childMarkdownRemark___headings___id',
  DetailChildMarkdownRemarkHeadingsValue = 'detail___childMarkdownRemark___headings___value',
  DetailChildMarkdownRemarkHtml = 'detail___childMarkdownRemark___html',
  DetailChildMarkdownRemarkHtmlAst = 'detail___childMarkdownRemark___htmlAst',
  DetailChildMarkdownRemarkId = 'detail___childMarkdownRemark___id',
  DetailChildMarkdownRemarkInternalContent = 'detail___childMarkdownRemark___internal___content',
  DetailChildMarkdownRemarkInternalContentDigest = 'detail___childMarkdownRemark___internal___contentDigest',
  DetailChildMarkdownRemarkInternalDescription = 'detail___childMarkdownRemark___internal___description',
  DetailChildMarkdownRemarkInternalFieldOwners = 'detail___childMarkdownRemark___internal___fieldOwners',
  DetailChildMarkdownRemarkInternalIgnoreType = 'detail___childMarkdownRemark___internal___ignoreType',
  DetailChildMarkdownRemarkInternalMediaType = 'detail___childMarkdownRemark___internal___mediaType',
  DetailChildMarkdownRemarkInternalOwner = 'detail___childMarkdownRemark___internal___owner',
  DetailChildMarkdownRemarkInternalType = 'detail___childMarkdownRemark___internal___type',
  DetailChildMarkdownRemarkParentChildren = 'detail___childMarkdownRemark___parent___children',
  DetailChildMarkdownRemarkParentId = 'detail___childMarkdownRemark___parent___id',
  DetailChildMarkdownRemarkRawMarkdownBody = 'detail___childMarkdownRemark___rawMarkdownBody',
  DetailChildMarkdownRemarkTableOfContents = 'detail___childMarkdownRemark___tableOfContents',
  DetailChildMarkdownRemarkTimeToRead = 'detail___childMarkdownRemark___timeToRead',
  DetailChildMarkdownRemarkWordCountParagraphs = 'detail___childMarkdownRemark___wordCount___paragraphs',
  DetailChildMarkdownRemarkWordCountSentences = 'detail___childMarkdownRemark___wordCount___sentences',
  DetailChildMarkdownRemarkWordCountWords = 'detail___childMarkdownRemark___wordCount___words',
  DetailChildren = 'detail___children',
  DetailChildrenMarkdownRemark = 'detail___childrenMarkdownRemark',
  DetailChildrenMarkdownRemarkChildren = 'detail___childrenMarkdownRemark___children',
  DetailChildrenMarkdownRemarkChildrenChildren = 'detail___childrenMarkdownRemark___children___children',
  DetailChildrenMarkdownRemarkChildrenId = 'detail___childrenMarkdownRemark___children___id',
  DetailChildrenMarkdownRemarkExcerpt = 'detail___childrenMarkdownRemark___excerpt',
  DetailChildrenMarkdownRemarkExcerptAst = 'detail___childrenMarkdownRemark___excerptAst',
  DetailChildrenMarkdownRemarkFrontmatterTitle = 'detail___childrenMarkdownRemark___frontmatter___title',
  DetailChildrenMarkdownRemarkHeadings = 'detail___childrenMarkdownRemark___headings',
  DetailChildrenMarkdownRemarkHeadingsDepth = 'detail___childrenMarkdownRemark___headings___depth',
  DetailChildrenMarkdownRemarkHeadingsId = 'detail___childrenMarkdownRemark___headings___id',
  DetailChildrenMarkdownRemarkHeadingsValue = 'detail___childrenMarkdownRemark___headings___value',
  DetailChildrenMarkdownRemarkHtml = 'detail___childrenMarkdownRemark___html',
  DetailChildrenMarkdownRemarkHtmlAst = 'detail___childrenMarkdownRemark___htmlAst',
  DetailChildrenMarkdownRemarkId = 'detail___childrenMarkdownRemark___id',
  DetailChildrenMarkdownRemarkInternalContent = 'detail___childrenMarkdownRemark___internal___content',
  DetailChildrenMarkdownRemarkInternalContentDigest = 'detail___childrenMarkdownRemark___internal___contentDigest',
  DetailChildrenMarkdownRemarkInternalDescription = 'detail___childrenMarkdownRemark___internal___description',
  DetailChildrenMarkdownRemarkInternalFieldOwners = 'detail___childrenMarkdownRemark___internal___fieldOwners',
  DetailChildrenMarkdownRemarkInternalIgnoreType = 'detail___childrenMarkdownRemark___internal___ignoreType',
  DetailChildrenMarkdownRemarkInternalMediaType = 'detail___childrenMarkdownRemark___internal___mediaType',
  DetailChildrenMarkdownRemarkInternalOwner = 'detail___childrenMarkdownRemark___internal___owner',
  DetailChildrenMarkdownRemarkInternalType = 'detail___childrenMarkdownRemark___internal___type',
  DetailChildrenMarkdownRemarkParentChildren = 'detail___childrenMarkdownRemark___parent___children',
  DetailChildrenMarkdownRemarkParentId = 'detail___childrenMarkdownRemark___parent___id',
  DetailChildrenMarkdownRemarkRawMarkdownBody = 'detail___childrenMarkdownRemark___rawMarkdownBody',
  DetailChildrenMarkdownRemarkTableOfContents = 'detail___childrenMarkdownRemark___tableOfContents',
  DetailChildrenMarkdownRemarkTimeToRead = 'detail___childrenMarkdownRemark___timeToRead',
  DetailChildrenMarkdownRemarkWordCountParagraphs = 'detail___childrenMarkdownRemark___wordCount___paragraphs',
  DetailChildrenMarkdownRemarkWordCountSentences = 'detail___childrenMarkdownRemark___wordCount___sentences',
  DetailChildrenMarkdownRemarkWordCountWords = 'detail___childrenMarkdownRemark___wordCount___words',
  DetailChildrenChildren = 'detail___children___children',
  DetailChildrenChildrenChildren = 'detail___children___children___children',
  DetailChildrenChildrenId = 'detail___children___children___id',
  DetailChildrenId = 'detail___children___id',
  DetailChildrenInternalContent = 'detail___children___internal___content',
  DetailChildrenInternalContentDigest = 'detail___children___internal___contentDigest',
  DetailChildrenInternalDescription = 'detail___children___internal___description',
  DetailChildrenInternalFieldOwners = 'detail___children___internal___fieldOwners',
  DetailChildrenInternalIgnoreType = 'detail___children___internal___ignoreType',
  DetailChildrenInternalMediaType = 'detail___children___internal___mediaType',
  DetailChildrenInternalOwner = 'detail___children___internal___owner',
  DetailChildrenInternalType = 'detail___children___internal___type',
  DetailChildrenParentChildren = 'detail___children___parent___children',
  DetailChildrenParentId = 'detail___children___parent___id',
  DetailDetail = 'detail___detail',
  DetailId = 'detail___id',
  DetailInternalContent = 'detail___internal___content',
  DetailInternalContentDigest = 'detail___internal___contentDigest',
  DetailInternalDescription = 'detail___internal___description',
  DetailInternalFieldOwners = 'detail___internal___fieldOwners',
  DetailInternalIgnoreType = 'detail___internal___ignoreType',
  DetailInternalMediaType = 'detail___internal___mediaType',
  DetailInternalOwner = 'detail___internal___owner',
  DetailInternalType = 'detail___internal___type',
  DetailParentChildren = 'detail___parent___children',
  DetailParentChildrenChildren = 'detail___parent___children___children',
  DetailParentChildrenId = 'detail___parent___children___id',
  DetailParentId = 'detail___parent___id',
  DetailParentInternalContent = 'detail___parent___internal___content',
  DetailParentInternalContentDigest = 'detail___parent___internal___contentDigest',
  DetailParentInternalDescription = 'detail___parent___internal___description',
  DetailParentInternalFieldOwners = 'detail___parent___internal___fieldOwners',
  DetailParentInternalIgnoreType = 'detail___parent___internal___ignoreType',
  DetailParentInternalMediaType = 'detail___parent___internal___mediaType',
  DetailParentInternalOwner = 'detail___parent___internal___owner',
  DetailParentInternalType = 'detail___parent___internal___type',
  DetailParentParentChildren = 'detail___parent___parent___children',
  DetailParentParentId = 'detail___parent___parent___id',
  DetailSysType = 'detail___sys___type',
  Href = 'href',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___children',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___html',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___id',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  IconChildContentfulIconSvgTextNodeChildren = 'icon___childContentfulIconSvgTextNode___children',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  IconChildContentfulIconSvgTextNodeChildrenChildren = 'icon___childContentfulIconSvgTextNode___children___children',
  IconChildContentfulIconSvgTextNodeChildrenId = 'icon___childContentfulIconSvgTextNode___children___id',
  IconChildContentfulIconSvgTextNodeId = 'icon___childContentfulIconSvgTextNode___id',
  IconChildContentfulIconSvgTextNodeInternalContent = 'icon___childContentfulIconSvgTextNode___internal___content',
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 'icon___childContentfulIconSvgTextNode___internal___contentDigest',
  IconChildContentfulIconSvgTextNodeInternalDescription = 'icon___childContentfulIconSvgTextNode___internal___description',
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 'icon___childContentfulIconSvgTextNode___internal___fieldOwners',
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 'icon___childContentfulIconSvgTextNode___internal___ignoreType',
  IconChildContentfulIconSvgTextNodeInternalMediaType = 'icon___childContentfulIconSvgTextNode___internal___mediaType',
  IconChildContentfulIconSvgTextNodeInternalOwner = 'icon___childContentfulIconSvgTextNode___internal___owner',
  IconChildContentfulIconSvgTextNodeInternalType = 'icon___childContentfulIconSvgTextNode___internal___type',
  IconChildContentfulIconSvgTextNodeParentChildren = 'icon___childContentfulIconSvgTextNode___parent___children',
  IconChildContentfulIconSvgTextNodeParentId = 'icon___childContentfulIconSvgTextNode___parent___id',
  IconChildContentfulIconSvgTextNodeSvg = 'icon___childContentfulIconSvgTextNode___svg',
  IconChildContentfulIconSvgTextNodeSysType = 'icon___childContentfulIconSvgTextNode___sys___type',
  IconChildren = 'icon___children',
  IconChildrenContentfulIconSvgTextNode = 'icon___childrenContentfulIconSvgTextNode',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  IconChildrenContentfulIconSvgTextNodeChildren = 'icon___childrenContentfulIconSvgTextNode___children',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 'icon___childrenContentfulIconSvgTextNode___children___children',
  IconChildrenContentfulIconSvgTextNodeChildrenId = 'icon___childrenContentfulIconSvgTextNode___children___id',
  IconChildrenContentfulIconSvgTextNodeId = 'icon___childrenContentfulIconSvgTextNode___id',
  IconChildrenContentfulIconSvgTextNodeInternalContent = 'icon___childrenContentfulIconSvgTextNode___internal___content',
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 'icon___childrenContentfulIconSvgTextNode___internal___contentDigest',
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 'icon___childrenContentfulIconSvgTextNode___internal___description',
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 'icon___childrenContentfulIconSvgTextNode___internal___fieldOwners',
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 'icon___childrenContentfulIconSvgTextNode___internal___ignoreType',
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 'icon___childrenContentfulIconSvgTextNode___internal___mediaType',
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 'icon___childrenContentfulIconSvgTextNode___internal___owner',
  IconChildrenContentfulIconSvgTextNodeInternalType = 'icon___childrenContentfulIconSvgTextNode___internal___type',
  IconChildrenContentfulIconSvgTextNodeParentChildren = 'icon___childrenContentfulIconSvgTextNode___parent___children',
  IconChildrenContentfulIconSvgTextNodeParentId = 'icon___childrenContentfulIconSvgTextNode___parent___id',
  IconChildrenContentfulIconSvgTextNodeSvg = 'icon___childrenContentfulIconSvgTextNode___svg',
  IconChildrenContentfulIconSvgTextNodeSysType = 'icon___childrenContentfulIconSvgTextNode___sys___type',
  IconChildrenChildren = 'icon___children___children',
  IconChildrenChildrenChildren = 'icon___children___children___children',
  IconChildrenChildrenId = 'icon___children___children___id',
  IconChildrenId = 'icon___children___id',
  IconChildrenInternalContent = 'icon___children___internal___content',
  IconChildrenInternalContentDigest = 'icon___children___internal___contentDigest',
  IconChildrenInternalDescription = 'icon___children___internal___description',
  IconChildrenInternalFieldOwners = 'icon___children___internal___fieldOwners',
  IconChildrenInternalIgnoreType = 'icon___children___internal___ignoreType',
  IconChildrenInternalMediaType = 'icon___children___internal___mediaType',
  IconChildrenInternalOwner = 'icon___children___internal___owner',
  IconChildrenInternalType = 'icon___children___internal___type',
  IconChildrenParentChildren = 'icon___children___parent___children',
  IconChildrenParentId = 'icon___children___parent___id',
  IconContact = 'icon___contact',
  IconContactChildren = 'icon___contact___children',
  IconContactChildrenChildren = 'icon___contact___children___children',
  IconContactChildrenId = 'icon___contact___children___id',
  IconContactContentfulId = 'icon___contact___contentful_id',
  IconContactCreatedAt = 'icon___contact___createdAt',
  IconContactHref = 'icon___contact___href',
  IconContactIconSvgDarkChildren = 'icon___contact___iconSvgDark___children',
  IconContactIconSvgDarkContentfulId = 'icon___contact___iconSvgDark___contentful_id',
  IconContactIconSvgDarkCreatedAt = 'icon___contact___iconSvgDark___createdAt',
  IconContactIconSvgDarkDescription = 'icon___contact___iconSvgDark___description',
  IconContactIconSvgDarkGatsbyImageData = 'icon___contact___iconSvgDark___gatsbyImageData',
  IconContactIconSvgDarkId = 'icon___contact___iconSvgDark___id',
  IconContactIconSvgDarkNodeLocale = 'icon___contact___iconSvgDark___node_locale',
  IconContactIconSvgDarkSpaceId = 'icon___contact___iconSvgDark___spaceId',
  IconContactIconSvgDarkTitle = 'icon___contact___iconSvgDark___title',
  IconContactIconSvgDarkUpdatedAt = 'icon___contact___iconSvgDark___updatedAt',
  IconContactIconSvgLightChildren = 'icon___contact___iconSvgLight___children',
  IconContactIconSvgLightContentfulId = 'icon___contact___iconSvgLight___contentful_id',
  IconContactIconSvgLightCreatedAt = 'icon___contact___iconSvgLight___createdAt',
  IconContactIconSvgLightDescription = 'icon___contact___iconSvgLight___description',
  IconContactIconSvgLightGatsbyImageData = 'icon___contact___iconSvgLight___gatsbyImageData',
  IconContactIconSvgLightId = 'icon___contact___iconSvgLight___id',
  IconContactIconSvgLightNodeLocale = 'icon___contact___iconSvgLight___node_locale',
  IconContactIconSvgLightSpaceId = 'icon___contact___iconSvgLight___spaceId',
  IconContactIconSvgLightTitle = 'icon___contact___iconSvgLight___title',
  IconContactIconSvgLightUpdatedAt = 'icon___contact___iconSvgLight___updatedAt',
  IconContactIconChildren = 'icon___contact___icon___children',
  IconContactIconChildrenContentfulIconSvgTextNode = 'icon___contact___icon___childrenContentfulIconSvgTextNode',
  IconContactIconContact = 'icon___contact___icon___contact',
  IconContactIconContentfulId = 'icon___contact___icon___contentful_id',
  IconContactIconCreatedAt = 'icon___contact___icon___createdAt',
  IconContactIconHistory = 'icon___contact___icon___history',
  IconContactIconId = 'icon___contact___icon___id',
  IconContactIconName = 'icon___contact___icon___name',
  IconContactIconNodeLocale = 'icon___contact___icon___node_locale',
  IconContactIconOss = 'icon___contact___icon___oss',
  IconContactIconProject = 'icon___contact___icon___project',
  IconContactIconSpaceId = 'icon___contact___icon___spaceId',
  IconContactIconUpdatedAt = 'icon___contact___icon___updatedAt',
  IconContactIconWhatICanDo = 'icon___contact___icon___what_i_can_do',
  IconContactId = 'icon___contact___id',
  IconContactInternalContent = 'icon___contact___internal___content',
  IconContactInternalContentDigest = 'icon___contact___internal___contentDigest',
  IconContactInternalDescription = 'icon___contact___internal___description',
  IconContactInternalFieldOwners = 'icon___contact___internal___fieldOwners',
  IconContactInternalIgnoreType = 'icon___contact___internal___ignoreType',
  IconContactInternalMediaType = 'icon___contact___internal___mediaType',
  IconContactInternalOwner = 'icon___contact___internal___owner',
  IconContactInternalType = 'icon___contact___internal___type',
  IconContactName = 'icon___contact___name',
  IconContactNodeLocale = 'icon___contact___node_locale',
  IconContactParentChildren = 'icon___contact___parent___children',
  IconContactParentId = 'icon___contact___parent___id',
  IconContactSortKey = 'icon___contact___sortKey',
  IconContactSpaceId = 'icon___contact___spaceId',
  IconContactSubName = 'icon___contact___subName',
  IconContactSysRevision = 'icon___contact___sys___revision',
  IconContactSysType = 'icon___contact___sys___type',
  IconContactUpdatedAt = 'icon___contact___updatedAt',
  IconContentfulId = 'icon___contentful_id',
  IconCreatedAt = 'icon___createdAt',
  IconHistory = 'icon___history',
  IconHistoryChildren = 'icon___history___children',
  IconHistoryChildrenChildren = 'icon___history___children___children',
  IconHistoryChildrenId = 'icon___history___children___id',
  IconHistoryContentfulId = 'icon___history___contentful_id',
  IconHistoryCreatedAt = 'icon___history___createdAt',
  IconHistoryDate = 'icon___history___date',
  IconHistoryIconChildren = 'icon___history___icon___children',
  IconHistoryIconChildrenContentfulIconSvgTextNode = 'icon___history___icon___childrenContentfulIconSvgTextNode',
  IconHistoryIconContact = 'icon___history___icon___contact',
  IconHistoryIconContentfulId = 'icon___history___icon___contentful_id',
  IconHistoryIconCreatedAt = 'icon___history___icon___createdAt',
  IconHistoryIconHistory = 'icon___history___icon___history',
  IconHistoryIconId = 'icon___history___icon___id',
  IconHistoryIconName = 'icon___history___icon___name',
  IconHistoryIconNodeLocale = 'icon___history___icon___node_locale',
  IconHistoryIconOss = 'icon___history___icon___oss',
  IconHistoryIconProject = 'icon___history___icon___project',
  IconHistoryIconSpaceId = 'icon___history___icon___spaceId',
  IconHistoryIconUpdatedAt = 'icon___history___icon___updatedAt',
  IconHistoryIconWhatICanDo = 'icon___history___icon___what_i_can_do',
  IconHistoryId = 'icon___history___id',
  IconHistoryInternalContent = 'icon___history___internal___content',
  IconHistoryInternalContentDigest = 'icon___history___internal___contentDigest',
  IconHistoryInternalDescription = 'icon___history___internal___description',
  IconHistoryInternalFieldOwners = 'icon___history___internal___fieldOwners',
  IconHistoryInternalIgnoreType = 'icon___history___internal___ignoreType',
  IconHistoryInternalMediaType = 'icon___history___internal___mediaType',
  IconHistoryInternalOwner = 'icon___history___internal___owner',
  IconHistoryInternalType = 'icon___history___internal___type',
  IconHistoryName = 'icon___history___name',
  IconHistoryNodeLocale = 'icon___history___node_locale',
  IconHistoryParentChildren = 'icon___history___parent___children',
  IconHistoryParentId = 'icon___history___parent___id',
  IconHistorySpaceId = 'icon___history___spaceId',
  IconHistorySubName = 'icon___history___subName',
  IconHistorySysRevision = 'icon___history___sys___revision',
  IconHistorySysType = 'icon___history___sys___type',
  IconHistoryUpdatedAt = 'icon___history___updatedAt',
  IconId = 'icon___id',
  IconInternalContent = 'icon___internal___content',
  IconInternalContentDigest = 'icon___internal___contentDigest',
  IconInternalDescription = 'icon___internal___description',
  IconInternalFieldOwners = 'icon___internal___fieldOwners',
  IconInternalIgnoreType = 'icon___internal___ignoreType',
  IconInternalMediaType = 'icon___internal___mediaType',
  IconInternalOwner = 'icon___internal___owner',
  IconInternalType = 'icon___internal___type',
  IconName = 'icon___name',
  IconNodeLocale = 'icon___node_locale',
  IconOss = 'icon___oss',
  IconOssChildContentfulOssDetailTextNodeChildren = 'icon___oss___childContentfulOssDetailTextNode___children',
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 'icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  IconOssChildContentfulOssDetailTextNodeDetail = 'icon___oss___childContentfulOssDetailTextNode___detail',
  IconOssChildContentfulOssDetailTextNodeId = 'icon___oss___childContentfulOssDetailTextNode___id',
  IconOssChildren = 'icon___oss___children',
  IconOssChildrenContentfulOssDetailTextNode = 'icon___oss___childrenContentfulOssDetailTextNode',
  IconOssChildrenContentfulOssDetailTextNodeChildren = 'icon___oss___childrenContentfulOssDetailTextNode___children',
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 'icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  IconOssChildrenContentfulOssDetailTextNodeDetail = 'icon___oss___childrenContentfulOssDetailTextNode___detail',
  IconOssChildrenContentfulOssDetailTextNodeId = 'icon___oss___childrenContentfulOssDetailTextNode___id',
  IconOssChildrenChildren = 'icon___oss___children___children',
  IconOssChildrenId = 'icon___oss___children___id',
  IconOssContentfulId = 'icon___oss___contentful_id',
  IconOssCreatedAt = 'icon___oss___createdAt',
  IconOssDetailChildren = 'icon___oss___detail___children',
  IconOssDetailChildrenMarkdownRemark = 'icon___oss___detail___childrenMarkdownRemark',
  IconOssDetailDetail = 'icon___oss___detail___detail',
  IconOssDetailId = 'icon___oss___detail___id',
  IconOssHref = 'icon___oss___href',
  IconOssIconChildren = 'icon___oss___icon___children',
  IconOssIconChildrenContentfulIconSvgTextNode = 'icon___oss___icon___childrenContentfulIconSvgTextNode',
  IconOssIconContact = 'icon___oss___icon___contact',
  IconOssIconContentfulId = 'icon___oss___icon___contentful_id',
  IconOssIconCreatedAt = 'icon___oss___icon___createdAt',
  IconOssIconHistory = 'icon___oss___icon___history',
  IconOssIconId = 'icon___oss___icon___id',
  IconOssIconName = 'icon___oss___icon___name',
  IconOssIconNodeLocale = 'icon___oss___icon___node_locale',
  IconOssIconOss = 'icon___oss___icon___oss',
  IconOssIconProject = 'icon___oss___icon___project',
  IconOssIconSpaceId = 'icon___oss___icon___spaceId',
  IconOssIconUpdatedAt = 'icon___oss___icon___updatedAt',
  IconOssIconWhatICanDo = 'icon___oss___icon___what_i_can_do',
  IconOssId = 'icon___oss___id',
  IconOssImageChildren = 'icon___oss___image___children',
  IconOssImageContentfulId = 'icon___oss___image___contentful_id',
  IconOssImageCreatedAt = 'icon___oss___image___createdAt',
  IconOssImageDescription = 'icon___oss___image___description',
  IconOssImageGatsbyImageData = 'icon___oss___image___gatsbyImageData',
  IconOssImageId = 'icon___oss___image___id',
  IconOssImageNodeLocale = 'icon___oss___image___node_locale',
  IconOssImageSpaceId = 'icon___oss___image___spaceId',
  IconOssImageTitle = 'icon___oss___image___title',
  IconOssImageUpdatedAt = 'icon___oss___image___updatedAt',
  IconOssInternalContent = 'icon___oss___internal___content',
  IconOssInternalContentDigest = 'icon___oss___internal___contentDigest',
  IconOssInternalDescription = 'icon___oss___internal___description',
  IconOssInternalFieldOwners = 'icon___oss___internal___fieldOwners',
  IconOssInternalIgnoreType = 'icon___oss___internal___ignoreType',
  IconOssInternalMediaType = 'icon___oss___internal___mediaType',
  IconOssInternalOwner = 'icon___oss___internal___owner',
  IconOssInternalType = 'icon___oss___internal___type',
  IconOssName = 'icon___oss___name',
  IconOssNodeLocale = 'icon___oss___node_locale',
  IconOssParentChildren = 'icon___oss___parent___children',
  IconOssParentId = 'icon___oss___parent___id',
  IconOssSpaceId = 'icon___oss___spaceId',
  IconOssStartDate = 'icon___oss___startDate',
  IconOssSubName = 'icon___oss___subName',
  IconOssSysRevision = 'icon___oss___sys___revision',
  IconOssSysType = 'icon___oss___sys___type',
  IconOssTags = 'icon___oss___tags',
  IconOssTagsChildren = 'icon___oss___tags___children',
  IconOssTagsContentfulId = 'icon___oss___tags___contentful_id',
  IconOssTagsCreatedAt = 'icon___oss___tags___createdAt',
  IconOssTagsId = 'icon___oss___tags___id',
  IconOssTagsLevel = 'icon___oss___tags___level',
  IconOssTagsName = 'icon___oss___tags___name',
  IconOssTagsNodeLocale = 'icon___oss___tags___node_locale',
  IconOssTagsOss = 'icon___oss___tags___oss',
  IconOssTagsProject = 'icon___oss___tags___project',
  IconOssTagsSkillMap = 'icon___oss___tags___skill_map',
  IconOssTagsSpaceId = 'icon___oss___tags___spaceId',
  IconOssTagsUpdatedAt = 'icon___oss___tags___updatedAt',
  IconOssUpdatedAt = 'icon___oss___updatedAt',
  IconParentChildren = 'icon___parent___children',
  IconParentChildrenChildren = 'icon___parent___children___children',
  IconParentChildrenId = 'icon___parent___children___id',
  IconParentId = 'icon___parent___id',
  IconParentInternalContent = 'icon___parent___internal___content',
  IconParentInternalContentDigest = 'icon___parent___internal___contentDigest',
  IconParentInternalDescription = 'icon___parent___internal___description',
  IconParentInternalFieldOwners = 'icon___parent___internal___fieldOwners',
  IconParentInternalIgnoreType = 'icon___parent___internal___ignoreType',
  IconParentInternalMediaType = 'icon___parent___internal___mediaType',
  IconParentInternalOwner = 'icon___parent___internal___owner',
  IconParentInternalType = 'icon___parent___internal___type',
  IconParentParentChildren = 'icon___parent___parent___children',
  IconParentParentId = 'icon___parent___parent___id',
  IconProject = 'icon___project',
  IconProjectChildContentfulProjectDetailTextNodeChildren = 'icon___project___childContentfulProjectDetailTextNode___children',
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  IconProjectChildContentfulProjectDetailTextNodeDetail = 'icon___project___childContentfulProjectDetailTextNode___detail',
  IconProjectChildContentfulProjectDetailTextNodeId = 'icon___project___childContentfulProjectDetailTextNode___id',
  IconProjectChildren = 'icon___project___children',
  IconProjectChildrenContentfulProjectDetailTextNode = 'icon___project___childrenContentfulProjectDetailTextNode',
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 'icon___project___childrenContentfulProjectDetailTextNode___children',
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 'icon___project___childrenContentfulProjectDetailTextNode___detail',
  IconProjectChildrenContentfulProjectDetailTextNodeId = 'icon___project___childrenContentfulProjectDetailTextNode___id',
  IconProjectChildrenChildren = 'icon___project___children___children',
  IconProjectChildrenId = 'icon___project___children___id',
  IconProjectContentfulId = 'icon___project___contentful_id',
  IconProjectCreatedAt = 'icon___project___createdAt',
  IconProjectDetailChildren = 'icon___project___detail___children',
  IconProjectDetailChildrenMarkdownRemark = 'icon___project___detail___childrenMarkdownRemark',
  IconProjectDetailDetail = 'icon___project___detail___detail',
  IconProjectDetailId = 'icon___project___detail___id',
  IconProjectEndDate = 'icon___project___endDate',
  IconProjectIconChildren = 'icon___project___icon___children',
  IconProjectIconChildrenContentfulIconSvgTextNode = 'icon___project___icon___childrenContentfulIconSvgTextNode',
  IconProjectIconContact = 'icon___project___icon___contact',
  IconProjectIconContentfulId = 'icon___project___icon___contentful_id',
  IconProjectIconCreatedAt = 'icon___project___icon___createdAt',
  IconProjectIconHistory = 'icon___project___icon___history',
  IconProjectIconId = 'icon___project___icon___id',
  IconProjectIconName = 'icon___project___icon___name',
  IconProjectIconNodeLocale = 'icon___project___icon___node_locale',
  IconProjectIconOss = 'icon___project___icon___oss',
  IconProjectIconProject = 'icon___project___icon___project',
  IconProjectIconSpaceId = 'icon___project___icon___spaceId',
  IconProjectIconUpdatedAt = 'icon___project___icon___updatedAt',
  IconProjectIconWhatICanDo = 'icon___project___icon___what_i_can_do',
  IconProjectId = 'icon___project___id',
  IconProjectInternalContent = 'icon___project___internal___content',
  IconProjectInternalContentDigest = 'icon___project___internal___contentDigest',
  IconProjectInternalDescription = 'icon___project___internal___description',
  IconProjectInternalFieldOwners = 'icon___project___internal___fieldOwners',
  IconProjectInternalIgnoreType = 'icon___project___internal___ignoreType',
  IconProjectInternalMediaType = 'icon___project___internal___mediaType',
  IconProjectInternalOwner = 'icon___project___internal___owner',
  IconProjectInternalType = 'icon___project___internal___type',
  IconProjectName = 'icon___project___name',
  IconProjectNodeLocale = 'icon___project___node_locale',
  IconProjectParentChildren = 'icon___project___parent___children',
  IconProjectParentId = 'icon___project___parent___id',
  IconProjectSpaceId = 'icon___project___spaceId',
  IconProjectStartDate = 'icon___project___startDate',
  IconProjectSubName = 'icon___project___subName',
  IconProjectSysRevision = 'icon___project___sys___revision',
  IconProjectSysType = 'icon___project___sys___type',
  IconProjectTags = 'icon___project___tags',
  IconProjectTagsChildren = 'icon___project___tags___children',
  IconProjectTagsContentfulId = 'icon___project___tags___contentful_id',
  IconProjectTagsCreatedAt = 'icon___project___tags___createdAt',
  IconProjectTagsId = 'icon___project___tags___id',
  IconProjectTagsLevel = 'icon___project___tags___level',
  IconProjectTagsName = 'icon___project___tags___name',
  IconProjectTagsNodeLocale = 'icon___project___tags___node_locale',
  IconProjectTagsOss = 'icon___project___tags___oss',
  IconProjectTagsProject = 'icon___project___tags___project',
  IconProjectTagsSkillMap = 'icon___project___tags___skill_map',
  IconProjectTagsSpaceId = 'icon___project___tags___spaceId',
  IconProjectTagsUpdatedAt = 'icon___project___tags___updatedAt',
  IconProjectUpdatedAt = 'icon___project___updatedAt',
  IconSpaceId = 'icon___spaceId',
  IconSvgChildMarkdownRemarkChildren = 'icon___svg___childMarkdownRemark___children',
  IconSvgChildMarkdownRemarkExcerpt = 'icon___svg___childMarkdownRemark___excerpt',
  IconSvgChildMarkdownRemarkExcerptAst = 'icon___svg___childMarkdownRemark___excerptAst',
  IconSvgChildMarkdownRemarkHeadings = 'icon___svg___childMarkdownRemark___headings',
  IconSvgChildMarkdownRemarkHtml = 'icon___svg___childMarkdownRemark___html',
  IconSvgChildMarkdownRemarkHtmlAst = 'icon___svg___childMarkdownRemark___htmlAst',
  IconSvgChildMarkdownRemarkId = 'icon___svg___childMarkdownRemark___id',
  IconSvgChildMarkdownRemarkRawMarkdownBody = 'icon___svg___childMarkdownRemark___rawMarkdownBody',
  IconSvgChildMarkdownRemarkTableOfContents = 'icon___svg___childMarkdownRemark___tableOfContents',
  IconSvgChildMarkdownRemarkTimeToRead = 'icon___svg___childMarkdownRemark___timeToRead',
  IconSvgChildren = 'icon___svg___children',
  IconSvgChildrenMarkdownRemark = 'icon___svg___childrenMarkdownRemark',
  IconSvgChildrenMarkdownRemarkChildren = 'icon___svg___childrenMarkdownRemark___children',
  IconSvgChildrenMarkdownRemarkExcerpt = 'icon___svg___childrenMarkdownRemark___excerpt',
  IconSvgChildrenMarkdownRemarkExcerptAst = 'icon___svg___childrenMarkdownRemark___excerptAst',
  IconSvgChildrenMarkdownRemarkHeadings = 'icon___svg___childrenMarkdownRemark___headings',
  IconSvgChildrenMarkdownRemarkHtml = 'icon___svg___childrenMarkdownRemark___html',
  IconSvgChildrenMarkdownRemarkHtmlAst = 'icon___svg___childrenMarkdownRemark___htmlAst',
  IconSvgChildrenMarkdownRemarkId = 'icon___svg___childrenMarkdownRemark___id',
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 'icon___svg___childrenMarkdownRemark___rawMarkdownBody',
  IconSvgChildrenMarkdownRemarkTableOfContents = 'icon___svg___childrenMarkdownRemark___tableOfContents',
  IconSvgChildrenMarkdownRemarkTimeToRead = 'icon___svg___childrenMarkdownRemark___timeToRead',
  IconSvgChildrenChildren = 'icon___svg___children___children',
  IconSvgChildrenId = 'icon___svg___children___id',
  IconSvgId = 'icon___svg___id',
  IconSvgInternalContent = 'icon___svg___internal___content',
  IconSvgInternalContentDigest = 'icon___svg___internal___contentDigest',
  IconSvgInternalDescription = 'icon___svg___internal___description',
  IconSvgInternalFieldOwners = 'icon___svg___internal___fieldOwners',
  IconSvgInternalIgnoreType = 'icon___svg___internal___ignoreType',
  IconSvgInternalMediaType = 'icon___svg___internal___mediaType',
  IconSvgInternalOwner = 'icon___svg___internal___owner',
  IconSvgInternalType = 'icon___svg___internal___type',
  IconSvgParentChildren = 'icon___svg___parent___children',
  IconSvgParentId = 'icon___svg___parent___id',
  IconSvgSvg = 'icon___svg___svg',
  IconSvgSysType = 'icon___svg___sys___type',
  IconSysRevision = 'icon___sys___revision',
  IconSysType = 'icon___sys___type',
  IconUpdatedAt = 'icon___updatedAt',
  IconWhatICanDo = 'icon___what_i_can_do',
  IconWhatICanDoChildren = 'icon___what_i_can_do___children',
  IconWhatICanDoChildrenChildren = 'icon___what_i_can_do___children___children',
  IconWhatICanDoChildrenId = 'icon___what_i_can_do___children___id',
  IconWhatICanDoContentfulId = 'icon___what_i_can_do___contentful_id',
  IconWhatICanDoCreatedAt = 'icon___what_i_can_do___createdAt',
  IconWhatICanDoIconChildren = 'icon___what_i_can_do___icon___children',
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 'icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  IconWhatICanDoIconContact = 'icon___what_i_can_do___icon___contact',
  IconWhatICanDoIconContentfulId = 'icon___what_i_can_do___icon___contentful_id',
  IconWhatICanDoIconCreatedAt = 'icon___what_i_can_do___icon___createdAt',
  IconWhatICanDoIconHistory = 'icon___what_i_can_do___icon___history',
  IconWhatICanDoIconId = 'icon___what_i_can_do___icon___id',
  IconWhatICanDoIconName = 'icon___what_i_can_do___icon___name',
  IconWhatICanDoIconNodeLocale = 'icon___what_i_can_do___icon___node_locale',
  IconWhatICanDoIconOss = 'icon___what_i_can_do___icon___oss',
  IconWhatICanDoIconProject = 'icon___what_i_can_do___icon___project',
  IconWhatICanDoIconSpaceId = 'icon___what_i_can_do___icon___spaceId',
  IconWhatICanDoIconUpdatedAt = 'icon___what_i_can_do___icon___updatedAt',
  IconWhatICanDoIconWhatICanDo = 'icon___what_i_can_do___icon___what_i_can_do',
  IconWhatICanDoId = 'icon___what_i_can_do___id',
  IconWhatICanDoInternalContent = 'icon___what_i_can_do___internal___content',
  IconWhatICanDoInternalContentDigest = 'icon___what_i_can_do___internal___contentDigest',
  IconWhatICanDoInternalDescription = 'icon___what_i_can_do___internal___description',
  IconWhatICanDoInternalFieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  IconWhatICanDoInternalIgnoreType = 'icon___what_i_can_do___internal___ignoreType',
  IconWhatICanDoInternalMediaType = 'icon___what_i_can_do___internal___mediaType',
  IconWhatICanDoInternalOwner = 'icon___what_i_can_do___internal___owner',
  IconWhatICanDoInternalType = 'icon___what_i_can_do___internal___type',
  IconWhatICanDoName = 'icon___what_i_can_do___name',
  IconWhatICanDoNodeLocale = 'icon___what_i_can_do___node_locale',
  IconWhatICanDoParentChildren = 'icon___what_i_can_do___parent___children',
  IconWhatICanDoParentId = 'icon___what_i_can_do___parent___id',
  IconWhatICanDoSortKey = 'icon___what_i_can_do___sortKey',
  IconWhatICanDoSpaceId = 'icon___what_i_can_do___spaceId',
  IconWhatICanDoSubName = 'icon___what_i_can_do___subName',
  IconWhatICanDoSysRevision = 'icon___what_i_can_do___sys___revision',
  IconWhatICanDoSysType = 'icon___what_i_can_do___sys___type',
  IconWhatICanDoUpdatedAt = 'icon___what_i_can_do___updatedAt',
  Id = 'id',
  ImageChildren = 'image___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenId = 'image___children___id',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageContentfulId = 'image___contentful_id',
  ImageCreatedAt = 'image___createdAt',
  ImageDescription = 'image___description',
  ImageFieldsLocalFile = 'image___fields___localFile',
  ImageFileContentType = 'image___file___contentType',
  ImageFileDetailsSize = 'image___file___details___size',
  ImageFileFileName = 'image___file___fileName',
  ImageFileUrl = 'image___file___url',
  ImageGatsbyImageData = 'image___gatsbyImageData',
  ImageId = 'image___id',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ImageLocalFileAbsolutePath = 'image___localFile___absolutePath',
  ImageLocalFileAccessTime = 'image___localFile___accessTime',
  ImageLocalFileAtime = 'image___localFile___atime',
  ImageLocalFileAtimeMs = 'image___localFile___atimeMs',
  ImageLocalFileBase = 'image___localFile___base',
  ImageLocalFileBirthTime = 'image___localFile___birthTime',
  ImageLocalFileBirthtime = 'image___localFile___birthtime',
  ImageLocalFileBirthtimeMs = 'image___localFile___birthtimeMs',
  ImageLocalFileBlksize = 'image___localFile___blksize',
  ImageLocalFileBlocks = 'image___localFile___blocks',
  ImageLocalFileChangeTime = 'image___localFile___changeTime',
  ImageLocalFileChildImageSharpChildren = 'image___localFile___childImageSharp___children',
  ImageLocalFileChildImageSharpGatsbyImageData = 'image___localFile___childImageSharp___gatsbyImageData',
  ImageLocalFileChildImageSharpId = 'image___localFile___childImageSharp___id',
  ImageLocalFileChildLocaleChildren = 'image___localFile___childLocale___children',
  ImageLocalFileChildLocaleData = 'image___localFile___childLocale___data',
  ImageLocalFileChildLocaleFileAbsolutePath = 'image___localFile___childLocale___fileAbsolutePath',
  ImageLocalFileChildLocaleId = 'image___localFile___childLocale___id',
  ImageLocalFileChildLocaleLanguage = 'image___localFile___childLocale___language',
  ImageLocalFileChildLocaleNs = 'image___localFile___childLocale___ns',
  ImageLocalFileChildren = 'image___localFile___children',
  ImageLocalFileChildrenImageSharp = 'image___localFile___childrenImageSharp',
  ImageLocalFileChildrenImageSharpChildren = 'image___localFile___childrenImageSharp___children',
  ImageLocalFileChildrenImageSharpGatsbyImageData = 'image___localFile___childrenImageSharp___gatsbyImageData',
  ImageLocalFileChildrenImageSharpId = 'image___localFile___childrenImageSharp___id',
  ImageLocalFileChildrenLocale = 'image___localFile___childrenLocale',
  ImageLocalFileChildrenLocaleChildren = 'image___localFile___childrenLocale___children',
  ImageLocalFileChildrenLocaleData = 'image___localFile___childrenLocale___data',
  ImageLocalFileChildrenLocaleFileAbsolutePath = 'image___localFile___childrenLocale___fileAbsolutePath',
  ImageLocalFileChildrenLocaleId = 'image___localFile___childrenLocale___id',
  ImageLocalFileChildrenLocaleLanguage = 'image___localFile___childrenLocale___language',
  ImageLocalFileChildrenLocaleNs = 'image___localFile___childrenLocale___ns',
  ImageLocalFileChildrenChildren = 'image___localFile___children___children',
  ImageLocalFileChildrenId = 'image___localFile___children___id',
  ImageLocalFileCtime = 'image___localFile___ctime',
  ImageLocalFileCtimeMs = 'image___localFile___ctimeMs',
  ImageLocalFileDev = 'image___localFile___dev',
  ImageLocalFileDir = 'image___localFile___dir',
  ImageLocalFileExt = 'image___localFile___ext',
  ImageLocalFileExtension = 'image___localFile___extension',
  ImageLocalFileGid = 'image___localFile___gid',
  ImageLocalFileId = 'image___localFile___id',
  ImageLocalFileIno = 'image___localFile___ino',
  ImageLocalFileInternalContent = 'image___localFile___internal___content',
  ImageLocalFileInternalContentDigest = 'image___localFile___internal___contentDigest',
  ImageLocalFileInternalDescription = 'image___localFile___internal___description',
  ImageLocalFileInternalFieldOwners = 'image___localFile___internal___fieldOwners',
  ImageLocalFileInternalIgnoreType = 'image___localFile___internal___ignoreType',
  ImageLocalFileInternalMediaType = 'image___localFile___internal___mediaType',
  ImageLocalFileInternalOwner = 'image___localFile___internal___owner',
  ImageLocalFileInternalType = 'image___localFile___internal___type',
  ImageLocalFileMode = 'image___localFile___mode',
  ImageLocalFileModifiedTime = 'image___localFile___modifiedTime',
  ImageLocalFileMtime = 'image___localFile___mtime',
  ImageLocalFileMtimeMs = 'image___localFile___mtimeMs',
  ImageLocalFileName = 'image___localFile___name',
  ImageLocalFileNlink = 'image___localFile___nlink',
  ImageLocalFileParentChildren = 'image___localFile___parent___children',
  ImageLocalFileParentId = 'image___localFile___parent___id',
  ImageLocalFilePrettySize = 'image___localFile___prettySize',
  ImageLocalFilePublicUrl = 'image___localFile___publicURL',
  ImageLocalFileRdev = 'image___localFile___rdev',
  ImageLocalFileRelativeDirectory = 'image___localFile___relativeDirectory',
  ImageLocalFileRelativePath = 'image___localFile___relativePath',
  ImageLocalFileRoot = 'image___localFile___root',
  ImageLocalFileSize = 'image___localFile___size',
  ImageLocalFileSourceInstanceName = 'image___localFile___sourceInstanceName',
  ImageLocalFileUid = 'image___localFile___uid',
  ImageLocalFileUrl = 'image___localFile___url',
  ImageNodeLocale = 'image___node_locale',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentId = 'image___parent___id',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentParentId = 'image___parent___parent___id',
  ImageSpaceId = 'image___spaceId',
  ImageSysRevision = 'image___sys___revision',
  ImageSysType = 'image___sys___type',
  ImageTitle = 'image___title',
  ImageUpdatedAt = 'image___updatedAt',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  StartDate = 'startDate',
  SubName = 'subName',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Tags = 'tags',
  TagsChildren = 'tags___children',
  TagsChildrenChildren = 'tags___children___children',
  TagsChildrenChildrenChildren = 'tags___children___children___children',
  TagsChildrenChildrenId = 'tags___children___children___id',
  TagsChildrenId = 'tags___children___id',
  TagsChildrenInternalContent = 'tags___children___internal___content',
  TagsChildrenInternalContentDigest = 'tags___children___internal___contentDigest',
  TagsChildrenInternalDescription = 'tags___children___internal___description',
  TagsChildrenInternalFieldOwners = 'tags___children___internal___fieldOwners',
  TagsChildrenInternalIgnoreType = 'tags___children___internal___ignoreType',
  TagsChildrenInternalMediaType = 'tags___children___internal___mediaType',
  TagsChildrenInternalOwner = 'tags___children___internal___owner',
  TagsChildrenInternalType = 'tags___children___internal___type',
  TagsChildrenParentChildren = 'tags___children___parent___children',
  TagsChildrenParentId = 'tags___children___parent___id',
  TagsContentfulId = 'tags___contentful_id',
  TagsCreatedAt = 'tags___createdAt',
  TagsId = 'tags___id',
  TagsInternalContent = 'tags___internal___content',
  TagsInternalContentDigest = 'tags___internal___contentDigest',
  TagsInternalDescription = 'tags___internal___description',
  TagsInternalFieldOwners = 'tags___internal___fieldOwners',
  TagsInternalIgnoreType = 'tags___internal___ignoreType',
  TagsInternalMediaType = 'tags___internal___mediaType',
  TagsInternalOwner = 'tags___internal___owner',
  TagsInternalType = 'tags___internal___type',
  TagsLevel = 'tags___level',
  TagsName = 'tags___name',
  TagsNodeLocale = 'tags___node_locale',
  TagsOss = 'tags___oss',
  TagsOssChildContentfulOssDetailTextNodeChildren = 'tags___oss___childContentfulOssDetailTextNode___children',
  TagsOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 'tags___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  TagsOssChildContentfulOssDetailTextNodeDetail = 'tags___oss___childContentfulOssDetailTextNode___detail',
  TagsOssChildContentfulOssDetailTextNodeId = 'tags___oss___childContentfulOssDetailTextNode___id',
  TagsOssChildren = 'tags___oss___children',
  TagsOssChildrenContentfulOssDetailTextNode = 'tags___oss___childrenContentfulOssDetailTextNode',
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 'tags___oss___childrenContentfulOssDetailTextNode___children',
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 'tags___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 'tags___oss___childrenContentfulOssDetailTextNode___detail',
  TagsOssChildrenContentfulOssDetailTextNodeId = 'tags___oss___childrenContentfulOssDetailTextNode___id',
  TagsOssChildrenChildren = 'tags___oss___children___children',
  TagsOssChildrenId = 'tags___oss___children___id',
  TagsOssContentfulId = 'tags___oss___contentful_id',
  TagsOssCreatedAt = 'tags___oss___createdAt',
  TagsOssDetailChildren = 'tags___oss___detail___children',
  TagsOssDetailChildrenMarkdownRemark = 'tags___oss___detail___childrenMarkdownRemark',
  TagsOssDetailDetail = 'tags___oss___detail___detail',
  TagsOssDetailId = 'tags___oss___detail___id',
  TagsOssHref = 'tags___oss___href',
  TagsOssIconChildren = 'tags___oss___icon___children',
  TagsOssIconChildrenContentfulIconSvgTextNode = 'tags___oss___icon___childrenContentfulIconSvgTextNode',
  TagsOssIconContact = 'tags___oss___icon___contact',
  TagsOssIconContentfulId = 'tags___oss___icon___contentful_id',
  TagsOssIconCreatedAt = 'tags___oss___icon___createdAt',
  TagsOssIconHistory = 'tags___oss___icon___history',
  TagsOssIconId = 'tags___oss___icon___id',
  TagsOssIconName = 'tags___oss___icon___name',
  TagsOssIconNodeLocale = 'tags___oss___icon___node_locale',
  TagsOssIconOss = 'tags___oss___icon___oss',
  TagsOssIconProject = 'tags___oss___icon___project',
  TagsOssIconSpaceId = 'tags___oss___icon___spaceId',
  TagsOssIconUpdatedAt = 'tags___oss___icon___updatedAt',
  TagsOssIconWhatICanDo = 'tags___oss___icon___what_i_can_do',
  TagsOssId = 'tags___oss___id',
  TagsOssImageChildren = 'tags___oss___image___children',
  TagsOssImageContentfulId = 'tags___oss___image___contentful_id',
  TagsOssImageCreatedAt = 'tags___oss___image___createdAt',
  TagsOssImageDescription = 'tags___oss___image___description',
  TagsOssImageGatsbyImageData = 'tags___oss___image___gatsbyImageData',
  TagsOssImageId = 'tags___oss___image___id',
  TagsOssImageNodeLocale = 'tags___oss___image___node_locale',
  TagsOssImageSpaceId = 'tags___oss___image___spaceId',
  TagsOssImageTitle = 'tags___oss___image___title',
  TagsOssImageUpdatedAt = 'tags___oss___image___updatedAt',
  TagsOssInternalContent = 'tags___oss___internal___content',
  TagsOssInternalContentDigest = 'tags___oss___internal___contentDigest',
  TagsOssInternalDescription = 'tags___oss___internal___description',
  TagsOssInternalFieldOwners = 'tags___oss___internal___fieldOwners',
  TagsOssInternalIgnoreType = 'tags___oss___internal___ignoreType',
  TagsOssInternalMediaType = 'tags___oss___internal___mediaType',
  TagsOssInternalOwner = 'tags___oss___internal___owner',
  TagsOssInternalType = 'tags___oss___internal___type',
  TagsOssName = 'tags___oss___name',
  TagsOssNodeLocale = 'tags___oss___node_locale',
  TagsOssParentChildren = 'tags___oss___parent___children',
  TagsOssParentId = 'tags___oss___parent___id',
  TagsOssSpaceId = 'tags___oss___spaceId',
  TagsOssStartDate = 'tags___oss___startDate',
  TagsOssSubName = 'tags___oss___subName',
  TagsOssSysRevision = 'tags___oss___sys___revision',
  TagsOssSysType = 'tags___oss___sys___type',
  TagsOssTags = 'tags___oss___tags',
  TagsOssTagsChildren = 'tags___oss___tags___children',
  TagsOssTagsContentfulId = 'tags___oss___tags___contentful_id',
  TagsOssTagsCreatedAt = 'tags___oss___tags___createdAt',
  TagsOssTagsId = 'tags___oss___tags___id',
  TagsOssTagsLevel = 'tags___oss___tags___level',
  TagsOssTagsName = 'tags___oss___tags___name',
  TagsOssTagsNodeLocale = 'tags___oss___tags___node_locale',
  TagsOssTagsOss = 'tags___oss___tags___oss',
  TagsOssTagsProject = 'tags___oss___tags___project',
  TagsOssTagsSkillMap = 'tags___oss___tags___skill_map',
  TagsOssTagsSpaceId = 'tags___oss___tags___spaceId',
  TagsOssTagsUpdatedAt = 'tags___oss___tags___updatedAt',
  TagsOssUpdatedAt = 'tags___oss___updatedAt',
  TagsParentChildren = 'tags___parent___children',
  TagsParentChildrenChildren = 'tags___parent___children___children',
  TagsParentChildrenId = 'tags___parent___children___id',
  TagsParentId = 'tags___parent___id',
  TagsParentInternalContent = 'tags___parent___internal___content',
  TagsParentInternalContentDigest = 'tags___parent___internal___contentDigest',
  TagsParentInternalDescription = 'tags___parent___internal___description',
  TagsParentInternalFieldOwners = 'tags___parent___internal___fieldOwners',
  TagsParentInternalIgnoreType = 'tags___parent___internal___ignoreType',
  TagsParentInternalMediaType = 'tags___parent___internal___mediaType',
  TagsParentInternalOwner = 'tags___parent___internal___owner',
  TagsParentInternalType = 'tags___parent___internal___type',
  TagsParentParentChildren = 'tags___parent___parent___children',
  TagsParentParentId = 'tags___parent___parent___id',
  TagsProject = 'tags___project',
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 'tags___project___childContentfulProjectDetailTextNode___children',
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'tags___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 'tags___project___childContentfulProjectDetailTextNode___detail',
  TagsProjectChildContentfulProjectDetailTextNodeId = 'tags___project___childContentfulProjectDetailTextNode___id',
  TagsProjectChildren = 'tags___project___children',
  TagsProjectChildrenContentfulProjectDetailTextNode = 'tags___project___childrenContentfulProjectDetailTextNode',
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 'tags___project___childrenContentfulProjectDetailTextNode___children',
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'tags___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 'tags___project___childrenContentfulProjectDetailTextNode___detail',
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 'tags___project___childrenContentfulProjectDetailTextNode___id',
  TagsProjectChildrenChildren = 'tags___project___children___children',
  TagsProjectChildrenId = 'tags___project___children___id',
  TagsProjectContentfulId = 'tags___project___contentful_id',
  TagsProjectCreatedAt = 'tags___project___createdAt',
  TagsProjectDetailChildren = 'tags___project___detail___children',
  TagsProjectDetailChildrenMarkdownRemark = 'tags___project___detail___childrenMarkdownRemark',
  TagsProjectDetailDetail = 'tags___project___detail___detail',
  TagsProjectDetailId = 'tags___project___detail___id',
  TagsProjectEndDate = 'tags___project___endDate',
  TagsProjectIconChildren = 'tags___project___icon___children',
  TagsProjectIconChildrenContentfulIconSvgTextNode = 'tags___project___icon___childrenContentfulIconSvgTextNode',
  TagsProjectIconContact = 'tags___project___icon___contact',
  TagsProjectIconContentfulId = 'tags___project___icon___contentful_id',
  TagsProjectIconCreatedAt = 'tags___project___icon___createdAt',
  TagsProjectIconHistory = 'tags___project___icon___history',
  TagsProjectIconId = 'tags___project___icon___id',
  TagsProjectIconName = 'tags___project___icon___name',
  TagsProjectIconNodeLocale = 'tags___project___icon___node_locale',
  TagsProjectIconOss = 'tags___project___icon___oss',
  TagsProjectIconProject = 'tags___project___icon___project',
  TagsProjectIconSpaceId = 'tags___project___icon___spaceId',
  TagsProjectIconUpdatedAt = 'tags___project___icon___updatedAt',
  TagsProjectIconWhatICanDo = 'tags___project___icon___what_i_can_do',
  TagsProjectId = 'tags___project___id',
  TagsProjectInternalContent = 'tags___project___internal___content',
  TagsProjectInternalContentDigest = 'tags___project___internal___contentDigest',
  TagsProjectInternalDescription = 'tags___project___internal___description',
  TagsProjectInternalFieldOwners = 'tags___project___internal___fieldOwners',
  TagsProjectInternalIgnoreType = 'tags___project___internal___ignoreType',
  TagsProjectInternalMediaType = 'tags___project___internal___mediaType',
  TagsProjectInternalOwner = 'tags___project___internal___owner',
  TagsProjectInternalType = 'tags___project___internal___type',
  TagsProjectName = 'tags___project___name',
  TagsProjectNodeLocale = 'tags___project___node_locale',
  TagsProjectParentChildren = 'tags___project___parent___children',
  TagsProjectParentId = 'tags___project___parent___id',
  TagsProjectSpaceId = 'tags___project___spaceId',
  TagsProjectStartDate = 'tags___project___startDate',
  TagsProjectSubName = 'tags___project___subName',
  TagsProjectSysRevision = 'tags___project___sys___revision',
  TagsProjectSysType = 'tags___project___sys___type',
  TagsProjectTags = 'tags___project___tags',
  TagsProjectTagsChildren = 'tags___project___tags___children',
  TagsProjectTagsContentfulId = 'tags___project___tags___contentful_id',
  TagsProjectTagsCreatedAt = 'tags___project___tags___createdAt',
  TagsProjectTagsId = 'tags___project___tags___id',
  TagsProjectTagsLevel = 'tags___project___tags___level',
  TagsProjectTagsName = 'tags___project___tags___name',
  TagsProjectTagsNodeLocale = 'tags___project___tags___node_locale',
  TagsProjectTagsOss = 'tags___project___tags___oss',
  TagsProjectTagsProject = 'tags___project___tags___project',
  TagsProjectTagsSkillMap = 'tags___project___tags___skill_map',
  TagsProjectTagsSpaceId = 'tags___project___tags___spaceId',
  TagsProjectTagsUpdatedAt = 'tags___project___tags___updatedAt',
  TagsProjectUpdatedAt = 'tags___project___updatedAt',
  TagsSkillMap = 'tags___skill_map',
  TagsSkillMapChildren = 'tags___skill_map___children',
  TagsSkillMapChildrenChildren = 'tags___skill_map___children___children',
  TagsSkillMapChildrenId = 'tags___skill_map___children___id',
  TagsSkillMapContentfulId = 'tags___skill_map___contentful_id',
  TagsSkillMapCreatedAt = 'tags___skill_map___createdAt',
  TagsSkillMapExpanded = 'tags___skill_map___expanded',
  TagsSkillMapId = 'tags___skill_map___id',
  TagsSkillMapInternalContent = 'tags___skill_map___internal___content',
  TagsSkillMapInternalContentDigest = 'tags___skill_map___internal___contentDigest',
  TagsSkillMapInternalDescription = 'tags___skill_map___internal___description',
  TagsSkillMapInternalFieldOwners = 'tags___skill_map___internal___fieldOwners',
  TagsSkillMapInternalIgnoreType = 'tags___skill_map___internal___ignoreType',
  TagsSkillMapInternalMediaType = 'tags___skill_map___internal___mediaType',
  TagsSkillMapInternalOwner = 'tags___skill_map___internal___owner',
  TagsSkillMapInternalType = 'tags___skill_map___internal___type',
  TagsSkillMapName = 'tags___skill_map___name',
  TagsSkillMapNodeLocale = 'tags___skill_map___node_locale',
  TagsSkillMapParentChildren = 'tags___skill_map___parent___children',
  TagsSkillMapParentId = 'tags___skill_map___parent___id',
  TagsSkillMapSkills = 'tags___skill_map___skills',
  TagsSkillMapSkillsChildren = 'tags___skill_map___skills___children',
  TagsSkillMapSkillsContentfulId = 'tags___skill_map___skills___contentful_id',
  TagsSkillMapSkillsCreatedAt = 'tags___skill_map___skills___createdAt',
  TagsSkillMapSkillsId = 'tags___skill_map___skills___id',
  TagsSkillMapSkillsLevel = 'tags___skill_map___skills___level',
  TagsSkillMapSkillsName = 'tags___skill_map___skills___name',
  TagsSkillMapSkillsNodeLocale = 'tags___skill_map___skills___node_locale',
  TagsSkillMapSkillsOss = 'tags___skill_map___skills___oss',
  TagsSkillMapSkillsProject = 'tags___skill_map___skills___project',
  TagsSkillMapSkillsSkillMap = 'tags___skill_map___skills___skill_map',
  TagsSkillMapSkillsSpaceId = 'tags___skill_map___skills___spaceId',
  TagsSkillMapSkillsUpdatedAt = 'tags___skill_map___skills___updatedAt',
  TagsSkillMapSortKey = 'tags___skill_map___sortKey',
  TagsSkillMapSpaceId = 'tags___skill_map___spaceId',
  TagsSkillMapSysRevision = 'tags___skill_map___sys___revision',
  TagsSkillMapSysType = 'tags___skill_map___sys___type',
  TagsSkillMapUpdatedAt = 'tags___skill_map___updatedAt',
  TagsSpaceId = 'tags___spaceId',
  TagsSysRevision = 'tags___sys___revision',
  TagsSysType = 'tags___sys___type',
  TagsUpdatedAt = 'tags___updatedAt',
  UpdatedAt = 'updatedAt'
}

export type ContentfulOssFilterInput = {
  childContentfulOssDetailTextNode?: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulOssDetailTextNode?: InputMaybe<ContentfulOssDetailTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  detail?: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<ContentfulIconFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  startDate?: InputMaybe<DateQueryOperatorInput>;
  subName?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulOssSysFilterInput>;
  tags?: InputMaybe<ContentfulTagFilterListInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulOssFilterListInput = {
  elemMatch?: InputMaybe<ContentfulOssFilterInput>;
};

export type ContentfulOssGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulOssEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulOssGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulOss>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulOssGroupConnectionDistinctArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssGroupConnectionGroupArgs = {
  field: ContentfulOssFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulOssGroupConnectionMaxArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssGroupConnectionMinArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssGroupConnectionSumArgs = {
  field: ContentfulOssFieldsEnum;
};

export type ContentfulOssSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulOssFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulOssSys = {
  contentType?: Maybe<ContentfulOssSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulOssSysContentType = {
  sys?: Maybe<ContentfulOssSysContentTypeSys>;
};

export type ContentfulOssSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulOssSysContentTypeSysFilterInput>;
};

export type ContentfulOssSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulOssSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulOssSysFilterInput = {
  contentType?: InputMaybe<ContentfulOssSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProject = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulProjectDetailTextNode or null if there are no children of given type on this node */
  childContentfulProjectDetailTextNode?: Maybe<ContentfulProjectDetailTextNode>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type contentfulProjectDetailTextNode */
  childrenContentfulProjectDetailTextNode?: Maybe<Array<Maybe<ContentfulProjectDetailTextNode>>>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  detail?: Maybe<ContentfulProjectDetailTextNode>;
  endDate?: Maybe<Scalars['Date']>;
  icon?: Maybe<ContentfulIcon>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  spaceId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  subName?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulProjectSys>;
  tags?: Maybe<Array<Maybe<ContentfulTag>>>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulProjectCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulProjectEndDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulProjectStartDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulProjectUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulProjectConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulProjectEdge>;
  group: Array<ContentfulProjectGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionGroupArgs = {
  field: ContentfulProjectFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulProjectConnectionMaxArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionMinArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionSumArgs = {
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectEdge = {
  next?: Maybe<ContentfulProject>;
  node: ContentfulProject;
  previous?: Maybe<ContentfulProject>;
};

export enum ContentfulProjectFieldsEnum {
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 'childContentfulProjectDetailTextNode___childMarkdownRemark___children',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildrenChildren = 'childContentfulProjectDetailTextNode___childMarkdownRemark___children___children',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildrenId = 'childContentfulProjectDetailTextNode___childMarkdownRemark___children___id',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 'childContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 'childContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkFrontmatterTitle = 'childContentfulProjectDetailTextNode___childMarkdownRemark___frontmatter___title',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 'childContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsDepth = 'childContentfulProjectDetailTextNode___childMarkdownRemark___headings___depth',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsId = 'childContentfulProjectDetailTextNode___childMarkdownRemark___headings___id',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsValue = 'childContentfulProjectDetailTextNode___childMarkdownRemark___headings___value',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 'childContentfulProjectDetailTextNode___childMarkdownRemark___html',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 'childContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkId = 'childContentfulProjectDetailTextNode___childMarkdownRemark___id',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalContent = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___content',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalContentDigest = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___contentDigest',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalDescription = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___description',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalFieldOwners = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalIgnoreType = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___ignoreType',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalMediaType = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___mediaType',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalOwner = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___owner',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalType = 'childContentfulProjectDetailTextNode___childMarkdownRemark___internal___type',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkParentChildren = 'childContentfulProjectDetailTextNode___childMarkdownRemark___parent___children',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkParentId = 'childContentfulProjectDetailTextNode___childMarkdownRemark___parent___id',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'childContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 'childContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 'childContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountParagraphs = 'childContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountSentences = 'childContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___sentences',
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountWords = 'childContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___words',
  ChildContentfulProjectDetailTextNodeChildren = 'childContentfulProjectDetailTextNode___children',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___children___children',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenId = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___children___id',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___frontmatter___title',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___depth',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsId = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___id',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___value',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContent = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___content',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___contentDigest',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalDescription = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___description',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___fieldOwners',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___ignoreType',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___mediaType',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalOwner = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___owner',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalType = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___type',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentChildren = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___children',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentId = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___id',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___sentences',
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountWords = 'childContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___words',
  ChildContentfulProjectDetailTextNodeChildrenChildren = 'childContentfulProjectDetailTextNode___children___children',
  ChildContentfulProjectDetailTextNodeChildrenChildrenChildren = 'childContentfulProjectDetailTextNode___children___children___children',
  ChildContentfulProjectDetailTextNodeChildrenChildrenId = 'childContentfulProjectDetailTextNode___children___children___id',
  ChildContentfulProjectDetailTextNodeChildrenId = 'childContentfulProjectDetailTextNode___children___id',
  ChildContentfulProjectDetailTextNodeChildrenInternalContent = 'childContentfulProjectDetailTextNode___children___internal___content',
  ChildContentfulProjectDetailTextNodeChildrenInternalContentDigest = 'childContentfulProjectDetailTextNode___children___internal___contentDigest',
  ChildContentfulProjectDetailTextNodeChildrenInternalDescription = 'childContentfulProjectDetailTextNode___children___internal___description',
  ChildContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 'childContentfulProjectDetailTextNode___children___internal___fieldOwners',
  ChildContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 'childContentfulProjectDetailTextNode___children___internal___ignoreType',
  ChildContentfulProjectDetailTextNodeChildrenInternalMediaType = 'childContentfulProjectDetailTextNode___children___internal___mediaType',
  ChildContentfulProjectDetailTextNodeChildrenInternalOwner = 'childContentfulProjectDetailTextNode___children___internal___owner',
  ChildContentfulProjectDetailTextNodeChildrenInternalType = 'childContentfulProjectDetailTextNode___children___internal___type',
  ChildContentfulProjectDetailTextNodeChildrenParentChildren = 'childContentfulProjectDetailTextNode___children___parent___children',
  ChildContentfulProjectDetailTextNodeChildrenParentId = 'childContentfulProjectDetailTextNode___children___parent___id',
  ChildContentfulProjectDetailTextNodeDetail = 'childContentfulProjectDetailTextNode___detail',
  ChildContentfulProjectDetailTextNodeId = 'childContentfulProjectDetailTextNode___id',
  ChildContentfulProjectDetailTextNodeInternalContent = 'childContentfulProjectDetailTextNode___internal___content',
  ChildContentfulProjectDetailTextNodeInternalContentDigest = 'childContentfulProjectDetailTextNode___internal___contentDigest',
  ChildContentfulProjectDetailTextNodeInternalDescription = 'childContentfulProjectDetailTextNode___internal___description',
  ChildContentfulProjectDetailTextNodeInternalFieldOwners = 'childContentfulProjectDetailTextNode___internal___fieldOwners',
  ChildContentfulProjectDetailTextNodeInternalIgnoreType = 'childContentfulProjectDetailTextNode___internal___ignoreType',
  ChildContentfulProjectDetailTextNodeInternalMediaType = 'childContentfulProjectDetailTextNode___internal___mediaType',
  ChildContentfulProjectDetailTextNodeInternalOwner = 'childContentfulProjectDetailTextNode___internal___owner',
  ChildContentfulProjectDetailTextNodeInternalType = 'childContentfulProjectDetailTextNode___internal___type',
  ChildContentfulProjectDetailTextNodeParentChildren = 'childContentfulProjectDetailTextNode___parent___children',
  ChildContentfulProjectDetailTextNodeParentChildrenChildren = 'childContentfulProjectDetailTextNode___parent___children___children',
  ChildContentfulProjectDetailTextNodeParentChildrenId = 'childContentfulProjectDetailTextNode___parent___children___id',
  ChildContentfulProjectDetailTextNodeParentId = 'childContentfulProjectDetailTextNode___parent___id',
  ChildContentfulProjectDetailTextNodeParentInternalContent = 'childContentfulProjectDetailTextNode___parent___internal___content',
  ChildContentfulProjectDetailTextNodeParentInternalContentDigest = 'childContentfulProjectDetailTextNode___parent___internal___contentDigest',
  ChildContentfulProjectDetailTextNodeParentInternalDescription = 'childContentfulProjectDetailTextNode___parent___internal___description',
  ChildContentfulProjectDetailTextNodeParentInternalFieldOwners = 'childContentfulProjectDetailTextNode___parent___internal___fieldOwners',
  ChildContentfulProjectDetailTextNodeParentInternalIgnoreType = 'childContentfulProjectDetailTextNode___parent___internal___ignoreType',
  ChildContentfulProjectDetailTextNodeParentInternalMediaType = 'childContentfulProjectDetailTextNode___parent___internal___mediaType',
  ChildContentfulProjectDetailTextNodeParentInternalOwner = 'childContentfulProjectDetailTextNode___parent___internal___owner',
  ChildContentfulProjectDetailTextNodeParentInternalType = 'childContentfulProjectDetailTextNode___parent___internal___type',
  ChildContentfulProjectDetailTextNodeParentParentChildren = 'childContentfulProjectDetailTextNode___parent___parent___children',
  ChildContentfulProjectDetailTextNodeParentParentId = 'childContentfulProjectDetailTextNode___parent___parent___id',
  ChildContentfulProjectDetailTextNodeSysType = 'childContentfulProjectDetailTextNode___sys___type',
  Children = 'children',
  ChildrenContentfulProjectDetailTextNode = 'childrenContentfulProjectDetailTextNode',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___children',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildrenChildren = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___children___children',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildrenId = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___children___id',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkFrontmatterTitle = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___frontmatter___title',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsDepth = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings___depth',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsId = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings___id',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsValue = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings___value',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___html',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkId = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___id',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalContent = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___content',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalContentDigest = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___contentDigest',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalDescription = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___description',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalFieldOwners = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalIgnoreType = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___ignoreType',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalMediaType = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___mediaType',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalOwner = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___owner',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalType = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___internal___type',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkParentChildren = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___parent___children',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkParentId = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___parent___id',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountParagraphs = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountSentences = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___sentences',
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountWords = 'childrenContentfulProjectDetailTextNode___childMarkdownRemark___wordCount___words',
  ChildrenContentfulProjectDetailTextNodeChildren = 'childrenContentfulProjectDetailTextNode___children',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children___children',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenId = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children___id',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___frontmatter___title',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___depth',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsId = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___id',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings___value',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContent = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___content',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___contentDigest',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalDescription = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___description',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___fieldOwners',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___ignoreType',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___mediaType',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalOwner = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___owner',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalType = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___internal___type',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentChildren = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___children',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentId = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___parent___id',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___sentences',
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountWords = 'childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___wordCount___words',
  ChildrenContentfulProjectDetailTextNodeChildrenChildren = 'childrenContentfulProjectDetailTextNode___children___children',
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenChildren = 'childrenContentfulProjectDetailTextNode___children___children___children',
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenId = 'childrenContentfulProjectDetailTextNode___children___children___id',
  ChildrenContentfulProjectDetailTextNodeChildrenId = 'childrenContentfulProjectDetailTextNode___children___id',
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContent = 'childrenContentfulProjectDetailTextNode___children___internal___content',
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContentDigest = 'childrenContentfulProjectDetailTextNode___children___internal___contentDigest',
  ChildrenContentfulProjectDetailTextNodeChildrenInternalDescription = 'childrenContentfulProjectDetailTextNode___children___internal___description',
  ChildrenContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 'childrenContentfulProjectDetailTextNode___children___internal___fieldOwners',
  ChildrenContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 'childrenContentfulProjectDetailTextNode___children___internal___ignoreType',
  ChildrenContentfulProjectDetailTextNodeChildrenInternalMediaType = 'childrenContentfulProjectDetailTextNode___children___internal___mediaType',
  ChildrenContentfulProjectDetailTextNodeChildrenInternalOwner = 'childrenContentfulProjectDetailTextNode___children___internal___owner',
  ChildrenContentfulProjectDetailTextNodeChildrenInternalType = 'childrenContentfulProjectDetailTextNode___children___internal___type',
  ChildrenContentfulProjectDetailTextNodeChildrenParentChildren = 'childrenContentfulProjectDetailTextNode___children___parent___children',
  ChildrenContentfulProjectDetailTextNodeChildrenParentId = 'childrenContentfulProjectDetailTextNode___children___parent___id',
  ChildrenContentfulProjectDetailTextNodeDetail = 'childrenContentfulProjectDetailTextNode___detail',
  ChildrenContentfulProjectDetailTextNodeId = 'childrenContentfulProjectDetailTextNode___id',
  ChildrenContentfulProjectDetailTextNodeInternalContent = 'childrenContentfulProjectDetailTextNode___internal___content',
  ChildrenContentfulProjectDetailTextNodeInternalContentDigest = 'childrenContentfulProjectDetailTextNode___internal___contentDigest',
  ChildrenContentfulProjectDetailTextNodeInternalDescription = 'childrenContentfulProjectDetailTextNode___internal___description',
  ChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 'childrenContentfulProjectDetailTextNode___internal___fieldOwners',
  ChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 'childrenContentfulProjectDetailTextNode___internal___ignoreType',
  ChildrenContentfulProjectDetailTextNodeInternalMediaType = 'childrenContentfulProjectDetailTextNode___internal___mediaType',
  ChildrenContentfulProjectDetailTextNodeInternalOwner = 'childrenContentfulProjectDetailTextNode___internal___owner',
  ChildrenContentfulProjectDetailTextNodeInternalType = 'childrenContentfulProjectDetailTextNode___internal___type',
  ChildrenContentfulProjectDetailTextNodeParentChildren = 'childrenContentfulProjectDetailTextNode___parent___children',
  ChildrenContentfulProjectDetailTextNodeParentChildrenChildren = 'childrenContentfulProjectDetailTextNode___parent___children___children',
  ChildrenContentfulProjectDetailTextNodeParentChildrenId = 'childrenContentfulProjectDetailTextNode___parent___children___id',
  ChildrenContentfulProjectDetailTextNodeParentId = 'childrenContentfulProjectDetailTextNode___parent___id',
  ChildrenContentfulProjectDetailTextNodeParentInternalContent = 'childrenContentfulProjectDetailTextNode___parent___internal___content',
  ChildrenContentfulProjectDetailTextNodeParentInternalContentDigest = 'childrenContentfulProjectDetailTextNode___parent___internal___contentDigest',
  ChildrenContentfulProjectDetailTextNodeParentInternalDescription = 'childrenContentfulProjectDetailTextNode___parent___internal___description',
  ChildrenContentfulProjectDetailTextNodeParentInternalFieldOwners = 'childrenContentfulProjectDetailTextNode___parent___internal___fieldOwners',
  ChildrenContentfulProjectDetailTextNodeParentInternalIgnoreType = 'childrenContentfulProjectDetailTextNode___parent___internal___ignoreType',
  ChildrenContentfulProjectDetailTextNodeParentInternalMediaType = 'childrenContentfulProjectDetailTextNode___parent___internal___mediaType',
  ChildrenContentfulProjectDetailTextNodeParentInternalOwner = 'childrenContentfulProjectDetailTextNode___parent___internal___owner',
  ChildrenContentfulProjectDetailTextNodeParentInternalType = 'childrenContentfulProjectDetailTextNode___parent___internal___type',
  ChildrenContentfulProjectDetailTextNodeParentParentChildren = 'childrenContentfulProjectDetailTextNode___parent___parent___children',
  ChildrenContentfulProjectDetailTextNodeParentParentId = 'childrenContentfulProjectDetailTextNode___parent___parent___id',
  ChildrenContentfulProjectDetailTextNodeSysType = 'childrenContentfulProjectDetailTextNode___sys___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  DetailChildMarkdownRemarkChildren = 'detail___childMarkdownRemark___children',
  DetailChildMarkdownRemarkChildrenChildren = 'detail___childMarkdownRemark___children___children',
  DetailChildMarkdownRemarkChildrenId = 'detail___childMarkdownRemark___children___id',
  DetailChildMarkdownRemarkExcerpt = 'detail___childMarkdownRemark___excerpt',
  DetailChildMarkdownRemarkExcerptAst = 'detail___childMarkdownRemark___excerptAst',
  DetailChildMarkdownRemarkFrontmatterTitle = 'detail___childMarkdownRemark___frontmatter___title',
  DetailChildMarkdownRemarkHeadings = 'detail___childMarkdownRemark___headings',
  DetailChildMarkdownRemarkHeadingsDepth = 'detail___childMarkdownRemark___headings___depth',
  DetailChildMarkdownRemarkHeadingsId = 'detail___childMarkdownRemark___headings___id',
  DetailChildMarkdownRemarkHeadingsValue = 'detail___childMarkdownRemark___headings___value',
  DetailChildMarkdownRemarkHtml = 'detail___childMarkdownRemark___html',
  DetailChildMarkdownRemarkHtmlAst = 'detail___childMarkdownRemark___htmlAst',
  DetailChildMarkdownRemarkId = 'detail___childMarkdownRemark___id',
  DetailChildMarkdownRemarkInternalContent = 'detail___childMarkdownRemark___internal___content',
  DetailChildMarkdownRemarkInternalContentDigest = 'detail___childMarkdownRemark___internal___contentDigest',
  DetailChildMarkdownRemarkInternalDescription = 'detail___childMarkdownRemark___internal___description',
  DetailChildMarkdownRemarkInternalFieldOwners = 'detail___childMarkdownRemark___internal___fieldOwners',
  DetailChildMarkdownRemarkInternalIgnoreType = 'detail___childMarkdownRemark___internal___ignoreType',
  DetailChildMarkdownRemarkInternalMediaType = 'detail___childMarkdownRemark___internal___mediaType',
  DetailChildMarkdownRemarkInternalOwner = 'detail___childMarkdownRemark___internal___owner',
  DetailChildMarkdownRemarkInternalType = 'detail___childMarkdownRemark___internal___type',
  DetailChildMarkdownRemarkParentChildren = 'detail___childMarkdownRemark___parent___children',
  DetailChildMarkdownRemarkParentId = 'detail___childMarkdownRemark___parent___id',
  DetailChildMarkdownRemarkRawMarkdownBody = 'detail___childMarkdownRemark___rawMarkdownBody',
  DetailChildMarkdownRemarkTableOfContents = 'detail___childMarkdownRemark___tableOfContents',
  DetailChildMarkdownRemarkTimeToRead = 'detail___childMarkdownRemark___timeToRead',
  DetailChildMarkdownRemarkWordCountParagraphs = 'detail___childMarkdownRemark___wordCount___paragraphs',
  DetailChildMarkdownRemarkWordCountSentences = 'detail___childMarkdownRemark___wordCount___sentences',
  DetailChildMarkdownRemarkWordCountWords = 'detail___childMarkdownRemark___wordCount___words',
  DetailChildren = 'detail___children',
  DetailChildrenMarkdownRemark = 'detail___childrenMarkdownRemark',
  DetailChildrenMarkdownRemarkChildren = 'detail___childrenMarkdownRemark___children',
  DetailChildrenMarkdownRemarkChildrenChildren = 'detail___childrenMarkdownRemark___children___children',
  DetailChildrenMarkdownRemarkChildrenId = 'detail___childrenMarkdownRemark___children___id',
  DetailChildrenMarkdownRemarkExcerpt = 'detail___childrenMarkdownRemark___excerpt',
  DetailChildrenMarkdownRemarkExcerptAst = 'detail___childrenMarkdownRemark___excerptAst',
  DetailChildrenMarkdownRemarkFrontmatterTitle = 'detail___childrenMarkdownRemark___frontmatter___title',
  DetailChildrenMarkdownRemarkHeadings = 'detail___childrenMarkdownRemark___headings',
  DetailChildrenMarkdownRemarkHeadingsDepth = 'detail___childrenMarkdownRemark___headings___depth',
  DetailChildrenMarkdownRemarkHeadingsId = 'detail___childrenMarkdownRemark___headings___id',
  DetailChildrenMarkdownRemarkHeadingsValue = 'detail___childrenMarkdownRemark___headings___value',
  DetailChildrenMarkdownRemarkHtml = 'detail___childrenMarkdownRemark___html',
  DetailChildrenMarkdownRemarkHtmlAst = 'detail___childrenMarkdownRemark___htmlAst',
  DetailChildrenMarkdownRemarkId = 'detail___childrenMarkdownRemark___id',
  DetailChildrenMarkdownRemarkInternalContent = 'detail___childrenMarkdownRemark___internal___content',
  DetailChildrenMarkdownRemarkInternalContentDigest = 'detail___childrenMarkdownRemark___internal___contentDigest',
  DetailChildrenMarkdownRemarkInternalDescription = 'detail___childrenMarkdownRemark___internal___description',
  DetailChildrenMarkdownRemarkInternalFieldOwners = 'detail___childrenMarkdownRemark___internal___fieldOwners',
  DetailChildrenMarkdownRemarkInternalIgnoreType = 'detail___childrenMarkdownRemark___internal___ignoreType',
  DetailChildrenMarkdownRemarkInternalMediaType = 'detail___childrenMarkdownRemark___internal___mediaType',
  DetailChildrenMarkdownRemarkInternalOwner = 'detail___childrenMarkdownRemark___internal___owner',
  DetailChildrenMarkdownRemarkInternalType = 'detail___childrenMarkdownRemark___internal___type',
  DetailChildrenMarkdownRemarkParentChildren = 'detail___childrenMarkdownRemark___parent___children',
  DetailChildrenMarkdownRemarkParentId = 'detail___childrenMarkdownRemark___parent___id',
  DetailChildrenMarkdownRemarkRawMarkdownBody = 'detail___childrenMarkdownRemark___rawMarkdownBody',
  DetailChildrenMarkdownRemarkTableOfContents = 'detail___childrenMarkdownRemark___tableOfContents',
  DetailChildrenMarkdownRemarkTimeToRead = 'detail___childrenMarkdownRemark___timeToRead',
  DetailChildrenMarkdownRemarkWordCountParagraphs = 'detail___childrenMarkdownRemark___wordCount___paragraphs',
  DetailChildrenMarkdownRemarkWordCountSentences = 'detail___childrenMarkdownRemark___wordCount___sentences',
  DetailChildrenMarkdownRemarkWordCountWords = 'detail___childrenMarkdownRemark___wordCount___words',
  DetailChildrenChildren = 'detail___children___children',
  DetailChildrenChildrenChildren = 'detail___children___children___children',
  DetailChildrenChildrenId = 'detail___children___children___id',
  DetailChildrenId = 'detail___children___id',
  DetailChildrenInternalContent = 'detail___children___internal___content',
  DetailChildrenInternalContentDigest = 'detail___children___internal___contentDigest',
  DetailChildrenInternalDescription = 'detail___children___internal___description',
  DetailChildrenInternalFieldOwners = 'detail___children___internal___fieldOwners',
  DetailChildrenInternalIgnoreType = 'detail___children___internal___ignoreType',
  DetailChildrenInternalMediaType = 'detail___children___internal___mediaType',
  DetailChildrenInternalOwner = 'detail___children___internal___owner',
  DetailChildrenInternalType = 'detail___children___internal___type',
  DetailChildrenParentChildren = 'detail___children___parent___children',
  DetailChildrenParentId = 'detail___children___parent___id',
  DetailDetail = 'detail___detail',
  DetailId = 'detail___id',
  DetailInternalContent = 'detail___internal___content',
  DetailInternalContentDigest = 'detail___internal___contentDigest',
  DetailInternalDescription = 'detail___internal___description',
  DetailInternalFieldOwners = 'detail___internal___fieldOwners',
  DetailInternalIgnoreType = 'detail___internal___ignoreType',
  DetailInternalMediaType = 'detail___internal___mediaType',
  DetailInternalOwner = 'detail___internal___owner',
  DetailInternalType = 'detail___internal___type',
  DetailParentChildren = 'detail___parent___children',
  DetailParentChildrenChildren = 'detail___parent___children___children',
  DetailParentChildrenId = 'detail___parent___children___id',
  DetailParentId = 'detail___parent___id',
  DetailParentInternalContent = 'detail___parent___internal___content',
  DetailParentInternalContentDigest = 'detail___parent___internal___contentDigest',
  DetailParentInternalDescription = 'detail___parent___internal___description',
  DetailParentInternalFieldOwners = 'detail___parent___internal___fieldOwners',
  DetailParentInternalIgnoreType = 'detail___parent___internal___ignoreType',
  DetailParentInternalMediaType = 'detail___parent___internal___mediaType',
  DetailParentInternalOwner = 'detail___parent___internal___owner',
  DetailParentInternalType = 'detail___parent___internal___type',
  DetailParentParentChildren = 'detail___parent___parent___children',
  DetailParentParentId = 'detail___parent___parent___id',
  DetailSysType = 'detail___sys___type',
  EndDate = 'endDate',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___children',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___html',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___id',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  IconChildContentfulIconSvgTextNodeChildren = 'icon___childContentfulIconSvgTextNode___children',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  IconChildContentfulIconSvgTextNodeChildrenChildren = 'icon___childContentfulIconSvgTextNode___children___children',
  IconChildContentfulIconSvgTextNodeChildrenId = 'icon___childContentfulIconSvgTextNode___children___id',
  IconChildContentfulIconSvgTextNodeId = 'icon___childContentfulIconSvgTextNode___id',
  IconChildContentfulIconSvgTextNodeInternalContent = 'icon___childContentfulIconSvgTextNode___internal___content',
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 'icon___childContentfulIconSvgTextNode___internal___contentDigest',
  IconChildContentfulIconSvgTextNodeInternalDescription = 'icon___childContentfulIconSvgTextNode___internal___description',
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 'icon___childContentfulIconSvgTextNode___internal___fieldOwners',
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 'icon___childContentfulIconSvgTextNode___internal___ignoreType',
  IconChildContentfulIconSvgTextNodeInternalMediaType = 'icon___childContentfulIconSvgTextNode___internal___mediaType',
  IconChildContentfulIconSvgTextNodeInternalOwner = 'icon___childContentfulIconSvgTextNode___internal___owner',
  IconChildContentfulIconSvgTextNodeInternalType = 'icon___childContentfulIconSvgTextNode___internal___type',
  IconChildContentfulIconSvgTextNodeParentChildren = 'icon___childContentfulIconSvgTextNode___parent___children',
  IconChildContentfulIconSvgTextNodeParentId = 'icon___childContentfulIconSvgTextNode___parent___id',
  IconChildContentfulIconSvgTextNodeSvg = 'icon___childContentfulIconSvgTextNode___svg',
  IconChildContentfulIconSvgTextNodeSysType = 'icon___childContentfulIconSvgTextNode___sys___type',
  IconChildren = 'icon___children',
  IconChildrenContentfulIconSvgTextNode = 'icon___childrenContentfulIconSvgTextNode',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  IconChildrenContentfulIconSvgTextNodeChildren = 'icon___childrenContentfulIconSvgTextNode___children',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 'icon___childrenContentfulIconSvgTextNode___children___children',
  IconChildrenContentfulIconSvgTextNodeChildrenId = 'icon___childrenContentfulIconSvgTextNode___children___id',
  IconChildrenContentfulIconSvgTextNodeId = 'icon___childrenContentfulIconSvgTextNode___id',
  IconChildrenContentfulIconSvgTextNodeInternalContent = 'icon___childrenContentfulIconSvgTextNode___internal___content',
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 'icon___childrenContentfulIconSvgTextNode___internal___contentDigest',
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 'icon___childrenContentfulIconSvgTextNode___internal___description',
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 'icon___childrenContentfulIconSvgTextNode___internal___fieldOwners',
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 'icon___childrenContentfulIconSvgTextNode___internal___ignoreType',
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 'icon___childrenContentfulIconSvgTextNode___internal___mediaType',
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 'icon___childrenContentfulIconSvgTextNode___internal___owner',
  IconChildrenContentfulIconSvgTextNodeInternalType = 'icon___childrenContentfulIconSvgTextNode___internal___type',
  IconChildrenContentfulIconSvgTextNodeParentChildren = 'icon___childrenContentfulIconSvgTextNode___parent___children',
  IconChildrenContentfulIconSvgTextNodeParentId = 'icon___childrenContentfulIconSvgTextNode___parent___id',
  IconChildrenContentfulIconSvgTextNodeSvg = 'icon___childrenContentfulIconSvgTextNode___svg',
  IconChildrenContentfulIconSvgTextNodeSysType = 'icon___childrenContentfulIconSvgTextNode___sys___type',
  IconChildrenChildren = 'icon___children___children',
  IconChildrenChildrenChildren = 'icon___children___children___children',
  IconChildrenChildrenId = 'icon___children___children___id',
  IconChildrenId = 'icon___children___id',
  IconChildrenInternalContent = 'icon___children___internal___content',
  IconChildrenInternalContentDigest = 'icon___children___internal___contentDigest',
  IconChildrenInternalDescription = 'icon___children___internal___description',
  IconChildrenInternalFieldOwners = 'icon___children___internal___fieldOwners',
  IconChildrenInternalIgnoreType = 'icon___children___internal___ignoreType',
  IconChildrenInternalMediaType = 'icon___children___internal___mediaType',
  IconChildrenInternalOwner = 'icon___children___internal___owner',
  IconChildrenInternalType = 'icon___children___internal___type',
  IconChildrenParentChildren = 'icon___children___parent___children',
  IconChildrenParentId = 'icon___children___parent___id',
  IconContact = 'icon___contact',
  IconContactChildren = 'icon___contact___children',
  IconContactChildrenChildren = 'icon___contact___children___children',
  IconContactChildrenId = 'icon___contact___children___id',
  IconContactContentfulId = 'icon___contact___contentful_id',
  IconContactCreatedAt = 'icon___contact___createdAt',
  IconContactHref = 'icon___contact___href',
  IconContactIconSvgDarkChildren = 'icon___contact___iconSvgDark___children',
  IconContactIconSvgDarkContentfulId = 'icon___contact___iconSvgDark___contentful_id',
  IconContactIconSvgDarkCreatedAt = 'icon___contact___iconSvgDark___createdAt',
  IconContactIconSvgDarkDescription = 'icon___contact___iconSvgDark___description',
  IconContactIconSvgDarkGatsbyImageData = 'icon___contact___iconSvgDark___gatsbyImageData',
  IconContactIconSvgDarkId = 'icon___contact___iconSvgDark___id',
  IconContactIconSvgDarkNodeLocale = 'icon___contact___iconSvgDark___node_locale',
  IconContactIconSvgDarkSpaceId = 'icon___contact___iconSvgDark___spaceId',
  IconContactIconSvgDarkTitle = 'icon___contact___iconSvgDark___title',
  IconContactIconSvgDarkUpdatedAt = 'icon___contact___iconSvgDark___updatedAt',
  IconContactIconSvgLightChildren = 'icon___contact___iconSvgLight___children',
  IconContactIconSvgLightContentfulId = 'icon___contact___iconSvgLight___contentful_id',
  IconContactIconSvgLightCreatedAt = 'icon___contact___iconSvgLight___createdAt',
  IconContactIconSvgLightDescription = 'icon___contact___iconSvgLight___description',
  IconContactIconSvgLightGatsbyImageData = 'icon___contact___iconSvgLight___gatsbyImageData',
  IconContactIconSvgLightId = 'icon___contact___iconSvgLight___id',
  IconContactIconSvgLightNodeLocale = 'icon___contact___iconSvgLight___node_locale',
  IconContactIconSvgLightSpaceId = 'icon___contact___iconSvgLight___spaceId',
  IconContactIconSvgLightTitle = 'icon___contact___iconSvgLight___title',
  IconContactIconSvgLightUpdatedAt = 'icon___contact___iconSvgLight___updatedAt',
  IconContactIconChildren = 'icon___contact___icon___children',
  IconContactIconChildrenContentfulIconSvgTextNode = 'icon___contact___icon___childrenContentfulIconSvgTextNode',
  IconContactIconContact = 'icon___contact___icon___contact',
  IconContactIconContentfulId = 'icon___contact___icon___contentful_id',
  IconContactIconCreatedAt = 'icon___contact___icon___createdAt',
  IconContactIconHistory = 'icon___contact___icon___history',
  IconContactIconId = 'icon___contact___icon___id',
  IconContactIconName = 'icon___contact___icon___name',
  IconContactIconNodeLocale = 'icon___contact___icon___node_locale',
  IconContactIconOss = 'icon___contact___icon___oss',
  IconContactIconProject = 'icon___contact___icon___project',
  IconContactIconSpaceId = 'icon___contact___icon___spaceId',
  IconContactIconUpdatedAt = 'icon___contact___icon___updatedAt',
  IconContactIconWhatICanDo = 'icon___contact___icon___what_i_can_do',
  IconContactId = 'icon___contact___id',
  IconContactInternalContent = 'icon___contact___internal___content',
  IconContactInternalContentDigest = 'icon___contact___internal___contentDigest',
  IconContactInternalDescription = 'icon___contact___internal___description',
  IconContactInternalFieldOwners = 'icon___contact___internal___fieldOwners',
  IconContactInternalIgnoreType = 'icon___contact___internal___ignoreType',
  IconContactInternalMediaType = 'icon___contact___internal___mediaType',
  IconContactInternalOwner = 'icon___contact___internal___owner',
  IconContactInternalType = 'icon___contact___internal___type',
  IconContactName = 'icon___contact___name',
  IconContactNodeLocale = 'icon___contact___node_locale',
  IconContactParentChildren = 'icon___contact___parent___children',
  IconContactParentId = 'icon___contact___parent___id',
  IconContactSortKey = 'icon___contact___sortKey',
  IconContactSpaceId = 'icon___contact___spaceId',
  IconContactSubName = 'icon___contact___subName',
  IconContactSysRevision = 'icon___contact___sys___revision',
  IconContactSysType = 'icon___contact___sys___type',
  IconContactUpdatedAt = 'icon___contact___updatedAt',
  IconContentfulId = 'icon___contentful_id',
  IconCreatedAt = 'icon___createdAt',
  IconHistory = 'icon___history',
  IconHistoryChildren = 'icon___history___children',
  IconHistoryChildrenChildren = 'icon___history___children___children',
  IconHistoryChildrenId = 'icon___history___children___id',
  IconHistoryContentfulId = 'icon___history___contentful_id',
  IconHistoryCreatedAt = 'icon___history___createdAt',
  IconHistoryDate = 'icon___history___date',
  IconHistoryIconChildren = 'icon___history___icon___children',
  IconHistoryIconChildrenContentfulIconSvgTextNode = 'icon___history___icon___childrenContentfulIconSvgTextNode',
  IconHistoryIconContact = 'icon___history___icon___contact',
  IconHistoryIconContentfulId = 'icon___history___icon___contentful_id',
  IconHistoryIconCreatedAt = 'icon___history___icon___createdAt',
  IconHistoryIconHistory = 'icon___history___icon___history',
  IconHistoryIconId = 'icon___history___icon___id',
  IconHistoryIconName = 'icon___history___icon___name',
  IconHistoryIconNodeLocale = 'icon___history___icon___node_locale',
  IconHistoryIconOss = 'icon___history___icon___oss',
  IconHistoryIconProject = 'icon___history___icon___project',
  IconHistoryIconSpaceId = 'icon___history___icon___spaceId',
  IconHistoryIconUpdatedAt = 'icon___history___icon___updatedAt',
  IconHistoryIconWhatICanDo = 'icon___history___icon___what_i_can_do',
  IconHistoryId = 'icon___history___id',
  IconHistoryInternalContent = 'icon___history___internal___content',
  IconHistoryInternalContentDigest = 'icon___history___internal___contentDigest',
  IconHistoryInternalDescription = 'icon___history___internal___description',
  IconHistoryInternalFieldOwners = 'icon___history___internal___fieldOwners',
  IconHistoryInternalIgnoreType = 'icon___history___internal___ignoreType',
  IconHistoryInternalMediaType = 'icon___history___internal___mediaType',
  IconHistoryInternalOwner = 'icon___history___internal___owner',
  IconHistoryInternalType = 'icon___history___internal___type',
  IconHistoryName = 'icon___history___name',
  IconHistoryNodeLocale = 'icon___history___node_locale',
  IconHistoryParentChildren = 'icon___history___parent___children',
  IconHistoryParentId = 'icon___history___parent___id',
  IconHistorySpaceId = 'icon___history___spaceId',
  IconHistorySubName = 'icon___history___subName',
  IconHistorySysRevision = 'icon___history___sys___revision',
  IconHistorySysType = 'icon___history___sys___type',
  IconHistoryUpdatedAt = 'icon___history___updatedAt',
  IconId = 'icon___id',
  IconInternalContent = 'icon___internal___content',
  IconInternalContentDigest = 'icon___internal___contentDigest',
  IconInternalDescription = 'icon___internal___description',
  IconInternalFieldOwners = 'icon___internal___fieldOwners',
  IconInternalIgnoreType = 'icon___internal___ignoreType',
  IconInternalMediaType = 'icon___internal___mediaType',
  IconInternalOwner = 'icon___internal___owner',
  IconInternalType = 'icon___internal___type',
  IconName = 'icon___name',
  IconNodeLocale = 'icon___node_locale',
  IconOss = 'icon___oss',
  IconOssChildContentfulOssDetailTextNodeChildren = 'icon___oss___childContentfulOssDetailTextNode___children',
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 'icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  IconOssChildContentfulOssDetailTextNodeDetail = 'icon___oss___childContentfulOssDetailTextNode___detail',
  IconOssChildContentfulOssDetailTextNodeId = 'icon___oss___childContentfulOssDetailTextNode___id',
  IconOssChildren = 'icon___oss___children',
  IconOssChildrenContentfulOssDetailTextNode = 'icon___oss___childrenContentfulOssDetailTextNode',
  IconOssChildrenContentfulOssDetailTextNodeChildren = 'icon___oss___childrenContentfulOssDetailTextNode___children',
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 'icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  IconOssChildrenContentfulOssDetailTextNodeDetail = 'icon___oss___childrenContentfulOssDetailTextNode___detail',
  IconOssChildrenContentfulOssDetailTextNodeId = 'icon___oss___childrenContentfulOssDetailTextNode___id',
  IconOssChildrenChildren = 'icon___oss___children___children',
  IconOssChildrenId = 'icon___oss___children___id',
  IconOssContentfulId = 'icon___oss___contentful_id',
  IconOssCreatedAt = 'icon___oss___createdAt',
  IconOssDetailChildren = 'icon___oss___detail___children',
  IconOssDetailChildrenMarkdownRemark = 'icon___oss___detail___childrenMarkdownRemark',
  IconOssDetailDetail = 'icon___oss___detail___detail',
  IconOssDetailId = 'icon___oss___detail___id',
  IconOssHref = 'icon___oss___href',
  IconOssIconChildren = 'icon___oss___icon___children',
  IconOssIconChildrenContentfulIconSvgTextNode = 'icon___oss___icon___childrenContentfulIconSvgTextNode',
  IconOssIconContact = 'icon___oss___icon___contact',
  IconOssIconContentfulId = 'icon___oss___icon___contentful_id',
  IconOssIconCreatedAt = 'icon___oss___icon___createdAt',
  IconOssIconHistory = 'icon___oss___icon___history',
  IconOssIconId = 'icon___oss___icon___id',
  IconOssIconName = 'icon___oss___icon___name',
  IconOssIconNodeLocale = 'icon___oss___icon___node_locale',
  IconOssIconOss = 'icon___oss___icon___oss',
  IconOssIconProject = 'icon___oss___icon___project',
  IconOssIconSpaceId = 'icon___oss___icon___spaceId',
  IconOssIconUpdatedAt = 'icon___oss___icon___updatedAt',
  IconOssIconWhatICanDo = 'icon___oss___icon___what_i_can_do',
  IconOssId = 'icon___oss___id',
  IconOssImageChildren = 'icon___oss___image___children',
  IconOssImageContentfulId = 'icon___oss___image___contentful_id',
  IconOssImageCreatedAt = 'icon___oss___image___createdAt',
  IconOssImageDescription = 'icon___oss___image___description',
  IconOssImageGatsbyImageData = 'icon___oss___image___gatsbyImageData',
  IconOssImageId = 'icon___oss___image___id',
  IconOssImageNodeLocale = 'icon___oss___image___node_locale',
  IconOssImageSpaceId = 'icon___oss___image___spaceId',
  IconOssImageTitle = 'icon___oss___image___title',
  IconOssImageUpdatedAt = 'icon___oss___image___updatedAt',
  IconOssInternalContent = 'icon___oss___internal___content',
  IconOssInternalContentDigest = 'icon___oss___internal___contentDigest',
  IconOssInternalDescription = 'icon___oss___internal___description',
  IconOssInternalFieldOwners = 'icon___oss___internal___fieldOwners',
  IconOssInternalIgnoreType = 'icon___oss___internal___ignoreType',
  IconOssInternalMediaType = 'icon___oss___internal___mediaType',
  IconOssInternalOwner = 'icon___oss___internal___owner',
  IconOssInternalType = 'icon___oss___internal___type',
  IconOssName = 'icon___oss___name',
  IconOssNodeLocale = 'icon___oss___node_locale',
  IconOssParentChildren = 'icon___oss___parent___children',
  IconOssParentId = 'icon___oss___parent___id',
  IconOssSpaceId = 'icon___oss___spaceId',
  IconOssStartDate = 'icon___oss___startDate',
  IconOssSubName = 'icon___oss___subName',
  IconOssSysRevision = 'icon___oss___sys___revision',
  IconOssSysType = 'icon___oss___sys___type',
  IconOssTags = 'icon___oss___tags',
  IconOssTagsChildren = 'icon___oss___tags___children',
  IconOssTagsContentfulId = 'icon___oss___tags___contentful_id',
  IconOssTagsCreatedAt = 'icon___oss___tags___createdAt',
  IconOssTagsId = 'icon___oss___tags___id',
  IconOssTagsLevel = 'icon___oss___tags___level',
  IconOssTagsName = 'icon___oss___tags___name',
  IconOssTagsNodeLocale = 'icon___oss___tags___node_locale',
  IconOssTagsOss = 'icon___oss___tags___oss',
  IconOssTagsProject = 'icon___oss___tags___project',
  IconOssTagsSkillMap = 'icon___oss___tags___skill_map',
  IconOssTagsSpaceId = 'icon___oss___tags___spaceId',
  IconOssTagsUpdatedAt = 'icon___oss___tags___updatedAt',
  IconOssUpdatedAt = 'icon___oss___updatedAt',
  IconParentChildren = 'icon___parent___children',
  IconParentChildrenChildren = 'icon___parent___children___children',
  IconParentChildrenId = 'icon___parent___children___id',
  IconParentId = 'icon___parent___id',
  IconParentInternalContent = 'icon___parent___internal___content',
  IconParentInternalContentDigest = 'icon___parent___internal___contentDigest',
  IconParentInternalDescription = 'icon___parent___internal___description',
  IconParentInternalFieldOwners = 'icon___parent___internal___fieldOwners',
  IconParentInternalIgnoreType = 'icon___parent___internal___ignoreType',
  IconParentInternalMediaType = 'icon___parent___internal___mediaType',
  IconParentInternalOwner = 'icon___parent___internal___owner',
  IconParentInternalType = 'icon___parent___internal___type',
  IconParentParentChildren = 'icon___parent___parent___children',
  IconParentParentId = 'icon___parent___parent___id',
  IconProject = 'icon___project',
  IconProjectChildContentfulProjectDetailTextNodeChildren = 'icon___project___childContentfulProjectDetailTextNode___children',
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  IconProjectChildContentfulProjectDetailTextNodeDetail = 'icon___project___childContentfulProjectDetailTextNode___detail',
  IconProjectChildContentfulProjectDetailTextNodeId = 'icon___project___childContentfulProjectDetailTextNode___id',
  IconProjectChildren = 'icon___project___children',
  IconProjectChildrenContentfulProjectDetailTextNode = 'icon___project___childrenContentfulProjectDetailTextNode',
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 'icon___project___childrenContentfulProjectDetailTextNode___children',
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 'icon___project___childrenContentfulProjectDetailTextNode___detail',
  IconProjectChildrenContentfulProjectDetailTextNodeId = 'icon___project___childrenContentfulProjectDetailTextNode___id',
  IconProjectChildrenChildren = 'icon___project___children___children',
  IconProjectChildrenId = 'icon___project___children___id',
  IconProjectContentfulId = 'icon___project___contentful_id',
  IconProjectCreatedAt = 'icon___project___createdAt',
  IconProjectDetailChildren = 'icon___project___detail___children',
  IconProjectDetailChildrenMarkdownRemark = 'icon___project___detail___childrenMarkdownRemark',
  IconProjectDetailDetail = 'icon___project___detail___detail',
  IconProjectDetailId = 'icon___project___detail___id',
  IconProjectEndDate = 'icon___project___endDate',
  IconProjectIconChildren = 'icon___project___icon___children',
  IconProjectIconChildrenContentfulIconSvgTextNode = 'icon___project___icon___childrenContentfulIconSvgTextNode',
  IconProjectIconContact = 'icon___project___icon___contact',
  IconProjectIconContentfulId = 'icon___project___icon___contentful_id',
  IconProjectIconCreatedAt = 'icon___project___icon___createdAt',
  IconProjectIconHistory = 'icon___project___icon___history',
  IconProjectIconId = 'icon___project___icon___id',
  IconProjectIconName = 'icon___project___icon___name',
  IconProjectIconNodeLocale = 'icon___project___icon___node_locale',
  IconProjectIconOss = 'icon___project___icon___oss',
  IconProjectIconProject = 'icon___project___icon___project',
  IconProjectIconSpaceId = 'icon___project___icon___spaceId',
  IconProjectIconUpdatedAt = 'icon___project___icon___updatedAt',
  IconProjectIconWhatICanDo = 'icon___project___icon___what_i_can_do',
  IconProjectId = 'icon___project___id',
  IconProjectInternalContent = 'icon___project___internal___content',
  IconProjectInternalContentDigest = 'icon___project___internal___contentDigest',
  IconProjectInternalDescription = 'icon___project___internal___description',
  IconProjectInternalFieldOwners = 'icon___project___internal___fieldOwners',
  IconProjectInternalIgnoreType = 'icon___project___internal___ignoreType',
  IconProjectInternalMediaType = 'icon___project___internal___mediaType',
  IconProjectInternalOwner = 'icon___project___internal___owner',
  IconProjectInternalType = 'icon___project___internal___type',
  IconProjectName = 'icon___project___name',
  IconProjectNodeLocale = 'icon___project___node_locale',
  IconProjectParentChildren = 'icon___project___parent___children',
  IconProjectParentId = 'icon___project___parent___id',
  IconProjectSpaceId = 'icon___project___spaceId',
  IconProjectStartDate = 'icon___project___startDate',
  IconProjectSubName = 'icon___project___subName',
  IconProjectSysRevision = 'icon___project___sys___revision',
  IconProjectSysType = 'icon___project___sys___type',
  IconProjectTags = 'icon___project___tags',
  IconProjectTagsChildren = 'icon___project___tags___children',
  IconProjectTagsContentfulId = 'icon___project___tags___contentful_id',
  IconProjectTagsCreatedAt = 'icon___project___tags___createdAt',
  IconProjectTagsId = 'icon___project___tags___id',
  IconProjectTagsLevel = 'icon___project___tags___level',
  IconProjectTagsName = 'icon___project___tags___name',
  IconProjectTagsNodeLocale = 'icon___project___tags___node_locale',
  IconProjectTagsOss = 'icon___project___tags___oss',
  IconProjectTagsProject = 'icon___project___tags___project',
  IconProjectTagsSkillMap = 'icon___project___tags___skill_map',
  IconProjectTagsSpaceId = 'icon___project___tags___spaceId',
  IconProjectTagsUpdatedAt = 'icon___project___tags___updatedAt',
  IconProjectUpdatedAt = 'icon___project___updatedAt',
  IconSpaceId = 'icon___spaceId',
  IconSvgChildMarkdownRemarkChildren = 'icon___svg___childMarkdownRemark___children',
  IconSvgChildMarkdownRemarkExcerpt = 'icon___svg___childMarkdownRemark___excerpt',
  IconSvgChildMarkdownRemarkExcerptAst = 'icon___svg___childMarkdownRemark___excerptAst',
  IconSvgChildMarkdownRemarkHeadings = 'icon___svg___childMarkdownRemark___headings',
  IconSvgChildMarkdownRemarkHtml = 'icon___svg___childMarkdownRemark___html',
  IconSvgChildMarkdownRemarkHtmlAst = 'icon___svg___childMarkdownRemark___htmlAst',
  IconSvgChildMarkdownRemarkId = 'icon___svg___childMarkdownRemark___id',
  IconSvgChildMarkdownRemarkRawMarkdownBody = 'icon___svg___childMarkdownRemark___rawMarkdownBody',
  IconSvgChildMarkdownRemarkTableOfContents = 'icon___svg___childMarkdownRemark___tableOfContents',
  IconSvgChildMarkdownRemarkTimeToRead = 'icon___svg___childMarkdownRemark___timeToRead',
  IconSvgChildren = 'icon___svg___children',
  IconSvgChildrenMarkdownRemark = 'icon___svg___childrenMarkdownRemark',
  IconSvgChildrenMarkdownRemarkChildren = 'icon___svg___childrenMarkdownRemark___children',
  IconSvgChildrenMarkdownRemarkExcerpt = 'icon___svg___childrenMarkdownRemark___excerpt',
  IconSvgChildrenMarkdownRemarkExcerptAst = 'icon___svg___childrenMarkdownRemark___excerptAst',
  IconSvgChildrenMarkdownRemarkHeadings = 'icon___svg___childrenMarkdownRemark___headings',
  IconSvgChildrenMarkdownRemarkHtml = 'icon___svg___childrenMarkdownRemark___html',
  IconSvgChildrenMarkdownRemarkHtmlAst = 'icon___svg___childrenMarkdownRemark___htmlAst',
  IconSvgChildrenMarkdownRemarkId = 'icon___svg___childrenMarkdownRemark___id',
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 'icon___svg___childrenMarkdownRemark___rawMarkdownBody',
  IconSvgChildrenMarkdownRemarkTableOfContents = 'icon___svg___childrenMarkdownRemark___tableOfContents',
  IconSvgChildrenMarkdownRemarkTimeToRead = 'icon___svg___childrenMarkdownRemark___timeToRead',
  IconSvgChildrenChildren = 'icon___svg___children___children',
  IconSvgChildrenId = 'icon___svg___children___id',
  IconSvgId = 'icon___svg___id',
  IconSvgInternalContent = 'icon___svg___internal___content',
  IconSvgInternalContentDigest = 'icon___svg___internal___contentDigest',
  IconSvgInternalDescription = 'icon___svg___internal___description',
  IconSvgInternalFieldOwners = 'icon___svg___internal___fieldOwners',
  IconSvgInternalIgnoreType = 'icon___svg___internal___ignoreType',
  IconSvgInternalMediaType = 'icon___svg___internal___mediaType',
  IconSvgInternalOwner = 'icon___svg___internal___owner',
  IconSvgInternalType = 'icon___svg___internal___type',
  IconSvgParentChildren = 'icon___svg___parent___children',
  IconSvgParentId = 'icon___svg___parent___id',
  IconSvgSvg = 'icon___svg___svg',
  IconSvgSysType = 'icon___svg___sys___type',
  IconSysRevision = 'icon___sys___revision',
  IconSysType = 'icon___sys___type',
  IconUpdatedAt = 'icon___updatedAt',
  IconWhatICanDo = 'icon___what_i_can_do',
  IconWhatICanDoChildren = 'icon___what_i_can_do___children',
  IconWhatICanDoChildrenChildren = 'icon___what_i_can_do___children___children',
  IconWhatICanDoChildrenId = 'icon___what_i_can_do___children___id',
  IconWhatICanDoContentfulId = 'icon___what_i_can_do___contentful_id',
  IconWhatICanDoCreatedAt = 'icon___what_i_can_do___createdAt',
  IconWhatICanDoIconChildren = 'icon___what_i_can_do___icon___children',
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 'icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  IconWhatICanDoIconContact = 'icon___what_i_can_do___icon___contact',
  IconWhatICanDoIconContentfulId = 'icon___what_i_can_do___icon___contentful_id',
  IconWhatICanDoIconCreatedAt = 'icon___what_i_can_do___icon___createdAt',
  IconWhatICanDoIconHistory = 'icon___what_i_can_do___icon___history',
  IconWhatICanDoIconId = 'icon___what_i_can_do___icon___id',
  IconWhatICanDoIconName = 'icon___what_i_can_do___icon___name',
  IconWhatICanDoIconNodeLocale = 'icon___what_i_can_do___icon___node_locale',
  IconWhatICanDoIconOss = 'icon___what_i_can_do___icon___oss',
  IconWhatICanDoIconProject = 'icon___what_i_can_do___icon___project',
  IconWhatICanDoIconSpaceId = 'icon___what_i_can_do___icon___spaceId',
  IconWhatICanDoIconUpdatedAt = 'icon___what_i_can_do___icon___updatedAt',
  IconWhatICanDoIconWhatICanDo = 'icon___what_i_can_do___icon___what_i_can_do',
  IconWhatICanDoId = 'icon___what_i_can_do___id',
  IconWhatICanDoInternalContent = 'icon___what_i_can_do___internal___content',
  IconWhatICanDoInternalContentDigest = 'icon___what_i_can_do___internal___contentDigest',
  IconWhatICanDoInternalDescription = 'icon___what_i_can_do___internal___description',
  IconWhatICanDoInternalFieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  IconWhatICanDoInternalIgnoreType = 'icon___what_i_can_do___internal___ignoreType',
  IconWhatICanDoInternalMediaType = 'icon___what_i_can_do___internal___mediaType',
  IconWhatICanDoInternalOwner = 'icon___what_i_can_do___internal___owner',
  IconWhatICanDoInternalType = 'icon___what_i_can_do___internal___type',
  IconWhatICanDoName = 'icon___what_i_can_do___name',
  IconWhatICanDoNodeLocale = 'icon___what_i_can_do___node_locale',
  IconWhatICanDoParentChildren = 'icon___what_i_can_do___parent___children',
  IconWhatICanDoParentId = 'icon___what_i_can_do___parent___id',
  IconWhatICanDoSortKey = 'icon___what_i_can_do___sortKey',
  IconWhatICanDoSpaceId = 'icon___what_i_can_do___spaceId',
  IconWhatICanDoSubName = 'icon___what_i_can_do___subName',
  IconWhatICanDoSysRevision = 'icon___what_i_can_do___sys___revision',
  IconWhatICanDoSysType = 'icon___what_i_can_do___sys___type',
  IconWhatICanDoUpdatedAt = 'icon___what_i_can_do___updatedAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SpaceId = 'spaceId',
  StartDate = 'startDate',
  SubName = 'subName',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  Tags = 'tags',
  TagsChildren = 'tags___children',
  TagsChildrenChildren = 'tags___children___children',
  TagsChildrenChildrenChildren = 'tags___children___children___children',
  TagsChildrenChildrenId = 'tags___children___children___id',
  TagsChildrenId = 'tags___children___id',
  TagsChildrenInternalContent = 'tags___children___internal___content',
  TagsChildrenInternalContentDigest = 'tags___children___internal___contentDigest',
  TagsChildrenInternalDescription = 'tags___children___internal___description',
  TagsChildrenInternalFieldOwners = 'tags___children___internal___fieldOwners',
  TagsChildrenInternalIgnoreType = 'tags___children___internal___ignoreType',
  TagsChildrenInternalMediaType = 'tags___children___internal___mediaType',
  TagsChildrenInternalOwner = 'tags___children___internal___owner',
  TagsChildrenInternalType = 'tags___children___internal___type',
  TagsChildrenParentChildren = 'tags___children___parent___children',
  TagsChildrenParentId = 'tags___children___parent___id',
  TagsContentfulId = 'tags___contentful_id',
  TagsCreatedAt = 'tags___createdAt',
  TagsId = 'tags___id',
  TagsInternalContent = 'tags___internal___content',
  TagsInternalContentDigest = 'tags___internal___contentDigest',
  TagsInternalDescription = 'tags___internal___description',
  TagsInternalFieldOwners = 'tags___internal___fieldOwners',
  TagsInternalIgnoreType = 'tags___internal___ignoreType',
  TagsInternalMediaType = 'tags___internal___mediaType',
  TagsInternalOwner = 'tags___internal___owner',
  TagsInternalType = 'tags___internal___type',
  TagsLevel = 'tags___level',
  TagsName = 'tags___name',
  TagsNodeLocale = 'tags___node_locale',
  TagsOss = 'tags___oss',
  TagsOssChildContentfulOssDetailTextNodeChildren = 'tags___oss___childContentfulOssDetailTextNode___children',
  TagsOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 'tags___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  TagsOssChildContentfulOssDetailTextNodeDetail = 'tags___oss___childContentfulOssDetailTextNode___detail',
  TagsOssChildContentfulOssDetailTextNodeId = 'tags___oss___childContentfulOssDetailTextNode___id',
  TagsOssChildren = 'tags___oss___children',
  TagsOssChildrenContentfulOssDetailTextNode = 'tags___oss___childrenContentfulOssDetailTextNode',
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 'tags___oss___childrenContentfulOssDetailTextNode___children',
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 'tags___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 'tags___oss___childrenContentfulOssDetailTextNode___detail',
  TagsOssChildrenContentfulOssDetailTextNodeId = 'tags___oss___childrenContentfulOssDetailTextNode___id',
  TagsOssChildrenChildren = 'tags___oss___children___children',
  TagsOssChildrenId = 'tags___oss___children___id',
  TagsOssContentfulId = 'tags___oss___contentful_id',
  TagsOssCreatedAt = 'tags___oss___createdAt',
  TagsOssDetailChildren = 'tags___oss___detail___children',
  TagsOssDetailChildrenMarkdownRemark = 'tags___oss___detail___childrenMarkdownRemark',
  TagsOssDetailDetail = 'tags___oss___detail___detail',
  TagsOssDetailId = 'tags___oss___detail___id',
  TagsOssHref = 'tags___oss___href',
  TagsOssIconChildren = 'tags___oss___icon___children',
  TagsOssIconChildrenContentfulIconSvgTextNode = 'tags___oss___icon___childrenContentfulIconSvgTextNode',
  TagsOssIconContact = 'tags___oss___icon___contact',
  TagsOssIconContentfulId = 'tags___oss___icon___contentful_id',
  TagsOssIconCreatedAt = 'tags___oss___icon___createdAt',
  TagsOssIconHistory = 'tags___oss___icon___history',
  TagsOssIconId = 'tags___oss___icon___id',
  TagsOssIconName = 'tags___oss___icon___name',
  TagsOssIconNodeLocale = 'tags___oss___icon___node_locale',
  TagsOssIconOss = 'tags___oss___icon___oss',
  TagsOssIconProject = 'tags___oss___icon___project',
  TagsOssIconSpaceId = 'tags___oss___icon___spaceId',
  TagsOssIconUpdatedAt = 'tags___oss___icon___updatedAt',
  TagsOssIconWhatICanDo = 'tags___oss___icon___what_i_can_do',
  TagsOssId = 'tags___oss___id',
  TagsOssImageChildren = 'tags___oss___image___children',
  TagsOssImageContentfulId = 'tags___oss___image___contentful_id',
  TagsOssImageCreatedAt = 'tags___oss___image___createdAt',
  TagsOssImageDescription = 'tags___oss___image___description',
  TagsOssImageGatsbyImageData = 'tags___oss___image___gatsbyImageData',
  TagsOssImageId = 'tags___oss___image___id',
  TagsOssImageNodeLocale = 'tags___oss___image___node_locale',
  TagsOssImageSpaceId = 'tags___oss___image___spaceId',
  TagsOssImageTitle = 'tags___oss___image___title',
  TagsOssImageUpdatedAt = 'tags___oss___image___updatedAt',
  TagsOssInternalContent = 'tags___oss___internal___content',
  TagsOssInternalContentDigest = 'tags___oss___internal___contentDigest',
  TagsOssInternalDescription = 'tags___oss___internal___description',
  TagsOssInternalFieldOwners = 'tags___oss___internal___fieldOwners',
  TagsOssInternalIgnoreType = 'tags___oss___internal___ignoreType',
  TagsOssInternalMediaType = 'tags___oss___internal___mediaType',
  TagsOssInternalOwner = 'tags___oss___internal___owner',
  TagsOssInternalType = 'tags___oss___internal___type',
  TagsOssName = 'tags___oss___name',
  TagsOssNodeLocale = 'tags___oss___node_locale',
  TagsOssParentChildren = 'tags___oss___parent___children',
  TagsOssParentId = 'tags___oss___parent___id',
  TagsOssSpaceId = 'tags___oss___spaceId',
  TagsOssStartDate = 'tags___oss___startDate',
  TagsOssSubName = 'tags___oss___subName',
  TagsOssSysRevision = 'tags___oss___sys___revision',
  TagsOssSysType = 'tags___oss___sys___type',
  TagsOssTags = 'tags___oss___tags',
  TagsOssTagsChildren = 'tags___oss___tags___children',
  TagsOssTagsContentfulId = 'tags___oss___tags___contentful_id',
  TagsOssTagsCreatedAt = 'tags___oss___tags___createdAt',
  TagsOssTagsId = 'tags___oss___tags___id',
  TagsOssTagsLevel = 'tags___oss___tags___level',
  TagsOssTagsName = 'tags___oss___tags___name',
  TagsOssTagsNodeLocale = 'tags___oss___tags___node_locale',
  TagsOssTagsOss = 'tags___oss___tags___oss',
  TagsOssTagsProject = 'tags___oss___tags___project',
  TagsOssTagsSkillMap = 'tags___oss___tags___skill_map',
  TagsOssTagsSpaceId = 'tags___oss___tags___spaceId',
  TagsOssTagsUpdatedAt = 'tags___oss___tags___updatedAt',
  TagsOssUpdatedAt = 'tags___oss___updatedAt',
  TagsParentChildren = 'tags___parent___children',
  TagsParentChildrenChildren = 'tags___parent___children___children',
  TagsParentChildrenId = 'tags___parent___children___id',
  TagsParentId = 'tags___parent___id',
  TagsParentInternalContent = 'tags___parent___internal___content',
  TagsParentInternalContentDigest = 'tags___parent___internal___contentDigest',
  TagsParentInternalDescription = 'tags___parent___internal___description',
  TagsParentInternalFieldOwners = 'tags___parent___internal___fieldOwners',
  TagsParentInternalIgnoreType = 'tags___parent___internal___ignoreType',
  TagsParentInternalMediaType = 'tags___parent___internal___mediaType',
  TagsParentInternalOwner = 'tags___parent___internal___owner',
  TagsParentInternalType = 'tags___parent___internal___type',
  TagsParentParentChildren = 'tags___parent___parent___children',
  TagsParentParentId = 'tags___parent___parent___id',
  TagsProject = 'tags___project',
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 'tags___project___childContentfulProjectDetailTextNode___children',
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'tags___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 'tags___project___childContentfulProjectDetailTextNode___detail',
  TagsProjectChildContentfulProjectDetailTextNodeId = 'tags___project___childContentfulProjectDetailTextNode___id',
  TagsProjectChildren = 'tags___project___children',
  TagsProjectChildrenContentfulProjectDetailTextNode = 'tags___project___childrenContentfulProjectDetailTextNode',
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 'tags___project___childrenContentfulProjectDetailTextNode___children',
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'tags___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 'tags___project___childrenContentfulProjectDetailTextNode___detail',
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 'tags___project___childrenContentfulProjectDetailTextNode___id',
  TagsProjectChildrenChildren = 'tags___project___children___children',
  TagsProjectChildrenId = 'tags___project___children___id',
  TagsProjectContentfulId = 'tags___project___contentful_id',
  TagsProjectCreatedAt = 'tags___project___createdAt',
  TagsProjectDetailChildren = 'tags___project___detail___children',
  TagsProjectDetailChildrenMarkdownRemark = 'tags___project___detail___childrenMarkdownRemark',
  TagsProjectDetailDetail = 'tags___project___detail___detail',
  TagsProjectDetailId = 'tags___project___detail___id',
  TagsProjectEndDate = 'tags___project___endDate',
  TagsProjectIconChildren = 'tags___project___icon___children',
  TagsProjectIconChildrenContentfulIconSvgTextNode = 'tags___project___icon___childrenContentfulIconSvgTextNode',
  TagsProjectIconContact = 'tags___project___icon___contact',
  TagsProjectIconContentfulId = 'tags___project___icon___contentful_id',
  TagsProjectIconCreatedAt = 'tags___project___icon___createdAt',
  TagsProjectIconHistory = 'tags___project___icon___history',
  TagsProjectIconId = 'tags___project___icon___id',
  TagsProjectIconName = 'tags___project___icon___name',
  TagsProjectIconNodeLocale = 'tags___project___icon___node_locale',
  TagsProjectIconOss = 'tags___project___icon___oss',
  TagsProjectIconProject = 'tags___project___icon___project',
  TagsProjectIconSpaceId = 'tags___project___icon___spaceId',
  TagsProjectIconUpdatedAt = 'tags___project___icon___updatedAt',
  TagsProjectIconWhatICanDo = 'tags___project___icon___what_i_can_do',
  TagsProjectId = 'tags___project___id',
  TagsProjectInternalContent = 'tags___project___internal___content',
  TagsProjectInternalContentDigest = 'tags___project___internal___contentDigest',
  TagsProjectInternalDescription = 'tags___project___internal___description',
  TagsProjectInternalFieldOwners = 'tags___project___internal___fieldOwners',
  TagsProjectInternalIgnoreType = 'tags___project___internal___ignoreType',
  TagsProjectInternalMediaType = 'tags___project___internal___mediaType',
  TagsProjectInternalOwner = 'tags___project___internal___owner',
  TagsProjectInternalType = 'tags___project___internal___type',
  TagsProjectName = 'tags___project___name',
  TagsProjectNodeLocale = 'tags___project___node_locale',
  TagsProjectParentChildren = 'tags___project___parent___children',
  TagsProjectParentId = 'tags___project___parent___id',
  TagsProjectSpaceId = 'tags___project___spaceId',
  TagsProjectStartDate = 'tags___project___startDate',
  TagsProjectSubName = 'tags___project___subName',
  TagsProjectSysRevision = 'tags___project___sys___revision',
  TagsProjectSysType = 'tags___project___sys___type',
  TagsProjectTags = 'tags___project___tags',
  TagsProjectTagsChildren = 'tags___project___tags___children',
  TagsProjectTagsContentfulId = 'tags___project___tags___contentful_id',
  TagsProjectTagsCreatedAt = 'tags___project___tags___createdAt',
  TagsProjectTagsId = 'tags___project___tags___id',
  TagsProjectTagsLevel = 'tags___project___tags___level',
  TagsProjectTagsName = 'tags___project___tags___name',
  TagsProjectTagsNodeLocale = 'tags___project___tags___node_locale',
  TagsProjectTagsOss = 'tags___project___tags___oss',
  TagsProjectTagsProject = 'tags___project___tags___project',
  TagsProjectTagsSkillMap = 'tags___project___tags___skill_map',
  TagsProjectTagsSpaceId = 'tags___project___tags___spaceId',
  TagsProjectTagsUpdatedAt = 'tags___project___tags___updatedAt',
  TagsProjectUpdatedAt = 'tags___project___updatedAt',
  TagsSkillMap = 'tags___skill_map',
  TagsSkillMapChildren = 'tags___skill_map___children',
  TagsSkillMapChildrenChildren = 'tags___skill_map___children___children',
  TagsSkillMapChildrenId = 'tags___skill_map___children___id',
  TagsSkillMapContentfulId = 'tags___skill_map___contentful_id',
  TagsSkillMapCreatedAt = 'tags___skill_map___createdAt',
  TagsSkillMapExpanded = 'tags___skill_map___expanded',
  TagsSkillMapId = 'tags___skill_map___id',
  TagsSkillMapInternalContent = 'tags___skill_map___internal___content',
  TagsSkillMapInternalContentDigest = 'tags___skill_map___internal___contentDigest',
  TagsSkillMapInternalDescription = 'tags___skill_map___internal___description',
  TagsSkillMapInternalFieldOwners = 'tags___skill_map___internal___fieldOwners',
  TagsSkillMapInternalIgnoreType = 'tags___skill_map___internal___ignoreType',
  TagsSkillMapInternalMediaType = 'tags___skill_map___internal___mediaType',
  TagsSkillMapInternalOwner = 'tags___skill_map___internal___owner',
  TagsSkillMapInternalType = 'tags___skill_map___internal___type',
  TagsSkillMapName = 'tags___skill_map___name',
  TagsSkillMapNodeLocale = 'tags___skill_map___node_locale',
  TagsSkillMapParentChildren = 'tags___skill_map___parent___children',
  TagsSkillMapParentId = 'tags___skill_map___parent___id',
  TagsSkillMapSkills = 'tags___skill_map___skills',
  TagsSkillMapSkillsChildren = 'tags___skill_map___skills___children',
  TagsSkillMapSkillsContentfulId = 'tags___skill_map___skills___contentful_id',
  TagsSkillMapSkillsCreatedAt = 'tags___skill_map___skills___createdAt',
  TagsSkillMapSkillsId = 'tags___skill_map___skills___id',
  TagsSkillMapSkillsLevel = 'tags___skill_map___skills___level',
  TagsSkillMapSkillsName = 'tags___skill_map___skills___name',
  TagsSkillMapSkillsNodeLocale = 'tags___skill_map___skills___node_locale',
  TagsSkillMapSkillsOss = 'tags___skill_map___skills___oss',
  TagsSkillMapSkillsProject = 'tags___skill_map___skills___project',
  TagsSkillMapSkillsSkillMap = 'tags___skill_map___skills___skill_map',
  TagsSkillMapSkillsSpaceId = 'tags___skill_map___skills___spaceId',
  TagsSkillMapSkillsUpdatedAt = 'tags___skill_map___skills___updatedAt',
  TagsSkillMapSortKey = 'tags___skill_map___sortKey',
  TagsSkillMapSpaceId = 'tags___skill_map___spaceId',
  TagsSkillMapSysRevision = 'tags___skill_map___sys___revision',
  TagsSkillMapSysType = 'tags___skill_map___sys___type',
  TagsSkillMapUpdatedAt = 'tags___skill_map___updatedAt',
  TagsSpaceId = 'tags___spaceId',
  TagsSysRevision = 'tags___sys___revision',
  TagsSysType = 'tags___sys___type',
  TagsUpdatedAt = 'tags___updatedAt',
  UpdatedAt = 'updatedAt'
}

export type ContentfulProjectFilterInput = {
  childContentfulProjectDetailTextNode?: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulProjectDetailTextNode?: InputMaybe<ContentfulProjectDetailTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  detail?: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  endDate?: InputMaybe<DateQueryOperatorInput>;
  icon?: InputMaybe<ContentfulIconFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  startDate?: InputMaybe<DateQueryOperatorInput>;
  subName?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulProjectSysFilterInput>;
  tags?: InputMaybe<ContentfulTagFilterListInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulProjectFilterListInput = {
  elemMatch?: InputMaybe<ContentfulProjectFilterInput>;
};

export type ContentfulProjectGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulProjectEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulProjectGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulProjectGroupConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectGroupConnectionGroupArgs = {
  field: ContentfulProjectFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulProjectGroupConnectionMaxArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectGroupConnectionMinArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectGroupConnectionSumArgs = {
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulProjectFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectSys = {
  contentType?: Maybe<ContentfulProjectSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentType = {
  sys?: Maybe<ContentfulProjectSysContentTypeSys>;
};

export type ContentfulProjectSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulProjectSysContentTypeSysFilterInput>;
};

export type ContentfulProjectSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectSysFilterInput = {
  contentType?: InputMaybe<ContentfulProjectSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualification = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  qualification_map?: Maybe<Array<Maybe<ContentfulQualificationMap>>>;
  spaceId?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulQualificationSys>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulQualificationCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulQualificationDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulQualificationUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulQualificationConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulQualificationEdge>;
  group: Array<ContentfulQualificationGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulQualification>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulQualificationConnectionDistinctArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationConnectionGroupArgs = {
  field: ContentfulQualificationFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulQualificationConnectionMaxArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationConnectionMinArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationConnectionSumArgs = {
  field: ContentfulQualificationFieldsEnum;
};

export type ContentfulQualificationEdge = {
  next?: Maybe<ContentfulQualification>;
  node: ContentfulQualification;
  previous?: Maybe<ContentfulQualification>;
};

export enum ContentfulQualificationFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Date = 'date',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  QualificationMap = 'qualification_map',
  QualificationMapChildren = 'qualification_map___children',
  QualificationMapChildrenChildren = 'qualification_map___children___children',
  QualificationMapChildrenChildrenChildren = 'qualification_map___children___children___children',
  QualificationMapChildrenChildrenId = 'qualification_map___children___children___id',
  QualificationMapChildrenId = 'qualification_map___children___id',
  QualificationMapChildrenInternalContent = 'qualification_map___children___internal___content',
  QualificationMapChildrenInternalContentDigest = 'qualification_map___children___internal___contentDigest',
  QualificationMapChildrenInternalDescription = 'qualification_map___children___internal___description',
  QualificationMapChildrenInternalFieldOwners = 'qualification_map___children___internal___fieldOwners',
  QualificationMapChildrenInternalIgnoreType = 'qualification_map___children___internal___ignoreType',
  QualificationMapChildrenInternalMediaType = 'qualification_map___children___internal___mediaType',
  QualificationMapChildrenInternalOwner = 'qualification_map___children___internal___owner',
  QualificationMapChildrenInternalType = 'qualification_map___children___internal___type',
  QualificationMapChildrenParentChildren = 'qualification_map___children___parent___children',
  QualificationMapChildrenParentId = 'qualification_map___children___parent___id',
  QualificationMapContentfulId = 'qualification_map___contentful_id',
  QualificationMapCreatedAt = 'qualification_map___createdAt',
  QualificationMapExpanded = 'qualification_map___expanded',
  QualificationMapId = 'qualification_map___id',
  QualificationMapInternalContent = 'qualification_map___internal___content',
  QualificationMapInternalContentDigest = 'qualification_map___internal___contentDigest',
  QualificationMapInternalDescription = 'qualification_map___internal___description',
  QualificationMapInternalFieldOwners = 'qualification_map___internal___fieldOwners',
  QualificationMapInternalIgnoreType = 'qualification_map___internal___ignoreType',
  QualificationMapInternalMediaType = 'qualification_map___internal___mediaType',
  QualificationMapInternalOwner = 'qualification_map___internal___owner',
  QualificationMapInternalType = 'qualification_map___internal___type',
  QualificationMapName = 'qualification_map___name',
  QualificationMapNodeLocale = 'qualification_map___node_locale',
  QualificationMapParentChildren = 'qualification_map___parent___children',
  QualificationMapParentChildrenChildren = 'qualification_map___parent___children___children',
  QualificationMapParentChildrenId = 'qualification_map___parent___children___id',
  QualificationMapParentId = 'qualification_map___parent___id',
  QualificationMapParentInternalContent = 'qualification_map___parent___internal___content',
  QualificationMapParentInternalContentDigest = 'qualification_map___parent___internal___contentDigest',
  QualificationMapParentInternalDescription = 'qualification_map___parent___internal___description',
  QualificationMapParentInternalFieldOwners = 'qualification_map___parent___internal___fieldOwners',
  QualificationMapParentInternalIgnoreType = 'qualification_map___parent___internal___ignoreType',
  QualificationMapParentInternalMediaType = 'qualification_map___parent___internal___mediaType',
  QualificationMapParentInternalOwner = 'qualification_map___parent___internal___owner',
  QualificationMapParentInternalType = 'qualification_map___parent___internal___type',
  QualificationMapParentParentChildren = 'qualification_map___parent___parent___children',
  QualificationMapParentParentId = 'qualification_map___parent___parent___id',
  QualificationMapQualifications = 'qualification_map___qualifications',
  QualificationMapQualificationsChildren = 'qualification_map___qualifications___children',
  QualificationMapQualificationsChildrenChildren = 'qualification_map___qualifications___children___children',
  QualificationMapQualificationsChildrenId = 'qualification_map___qualifications___children___id',
  QualificationMapQualificationsContentfulId = 'qualification_map___qualifications___contentful_id',
  QualificationMapQualificationsCreatedAt = 'qualification_map___qualifications___createdAt',
  QualificationMapQualificationsDate = 'qualification_map___qualifications___date',
  QualificationMapQualificationsId = 'qualification_map___qualifications___id',
  QualificationMapQualificationsInternalContent = 'qualification_map___qualifications___internal___content',
  QualificationMapQualificationsInternalContentDigest = 'qualification_map___qualifications___internal___contentDigest',
  QualificationMapQualificationsInternalDescription = 'qualification_map___qualifications___internal___description',
  QualificationMapQualificationsInternalFieldOwners = 'qualification_map___qualifications___internal___fieldOwners',
  QualificationMapQualificationsInternalIgnoreType = 'qualification_map___qualifications___internal___ignoreType',
  QualificationMapQualificationsInternalMediaType = 'qualification_map___qualifications___internal___mediaType',
  QualificationMapQualificationsInternalOwner = 'qualification_map___qualifications___internal___owner',
  QualificationMapQualificationsInternalType = 'qualification_map___qualifications___internal___type',
  QualificationMapQualificationsName = 'qualification_map___qualifications___name',
  QualificationMapQualificationsNodeLocale = 'qualification_map___qualifications___node_locale',
  QualificationMapQualificationsParentChildren = 'qualification_map___qualifications___parent___children',
  QualificationMapQualificationsParentId = 'qualification_map___qualifications___parent___id',
  QualificationMapQualificationsQualificationMap = 'qualification_map___qualifications___qualification_map',
  QualificationMapQualificationsQualificationMapChildren = 'qualification_map___qualifications___qualification_map___children',
  QualificationMapQualificationsQualificationMapContentfulId = 'qualification_map___qualifications___qualification_map___contentful_id',
  QualificationMapQualificationsQualificationMapCreatedAt = 'qualification_map___qualifications___qualification_map___createdAt',
  QualificationMapQualificationsQualificationMapExpanded = 'qualification_map___qualifications___qualification_map___expanded',
  QualificationMapQualificationsQualificationMapId = 'qualification_map___qualifications___qualification_map___id',
  QualificationMapQualificationsQualificationMapName = 'qualification_map___qualifications___qualification_map___name',
  QualificationMapQualificationsQualificationMapNodeLocale = 'qualification_map___qualifications___qualification_map___node_locale',
  QualificationMapQualificationsQualificationMapQualifications = 'qualification_map___qualifications___qualification_map___qualifications',
  QualificationMapQualificationsQualificationMapSortKey = 'qualification_map___qualifications___qualification_map___sortKey',
  QualificationMapQualificationsQualificationMapSpaceId = 'qualification_map___qualifications___qualification_map___spaceId',
  QualificationMapQualificationsQualificationMapUpdatedAt = 'qualification_map___qualifications___qualification_map___updatedAt',
  QualificationMapQualificationsSpaceId = 'qualification_map___qualifications___spaceId',
  QualificationMapQualificationsSysRevision = 'qualification_map___qualifications___sys___revision',
  QualificationMapQualificationsSysType = 'qualification_map___qualifications___sys___type',
  QualificationMapQualificationsUpdatedAt = 'qualification_map___qualifications___updatedAt',
  QualificationMapSortKey = 'qualification_map___sortKey',
  QualificationMapSpaceId = 'qualification_map___spaceId',
  QualificationMapSysRevision = 'qualification_map___sys___revision',
  QualificationMapSysType = 'qualification_map___sys___type',
  QualificationMapUpdatedAt = 'qualification_map___updatedAt',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulQualificationFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  qualification_map?: InputMaybe<ContentfulQualificationMapFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulQualificationSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulQualificationFilterListInput = {
  elemMatch?: InputMaybe<ContentfulQualificationFilterInput>;
};

export type ContentfulQualificationGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulQualificationEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulQualificationGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulQualification>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulQualificationGroupConnectionDistinctArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationGroupConnectionGroupArgs = {
  field: ContentfulQualificationFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulQualificationGroupConnectionMaxArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationGroupConnectionMinArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationGroupConnectionSumArgs = {
  field: ContentfulQualificationFieldsEnum;
};

export type ContentfulQualificationMap = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  expanded?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  qualifications?: Maybe<Array<Maybe<ContentfulQualification>>>;
  sortKey?: Maybe<Scalars['Int']>;
  spaceId?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulQualificationMapSys>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulQualificationMapCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulQualificationMapUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulQualificationMapConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulQualificationMapEdge>;
  group: Array<ContentfulQualificationMapGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulQualificationMap>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulQualificationMapConnectionDistinctArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapConnectionGroupArgs = {
  field: ContentfulQualificationMapFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulQualificationMapConnectionMaxArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapConnectionMinArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapConnectionSumArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};

export type ContentfulQualificationMapEdge = {
  next?: Maybe<ContentfulQualificationMap>;
  node: ContentfulQualificationMap;
  previous?: Maybe<ContentfulQualificationMap>;
};

export enum ContentfulQualificationMapFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Expanded = 'expanded',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Qualifications = 'qualifications',
  QualificationsChildren = 'qualifications___children',
  QualificationsChildrenChildren = 'qualifications___children___children',
  QualificationsChildrenChildrenChildren = 'qualifications___children___children___children',
  QualificationsChildrenChildrenId = 'qualifications___children___children___id',
  QualificationsChildrenId = 'qualifications___children___id',
  QualificationsChildrenInternalContent = 'qualifications___children___internal___content',
  QualificationsChildrenInternalContentDigest = 'qualifications___children___internal___contentDigest',
  QualificationsChildrenInternalDescription = 'qualifications___children___internal___description',
  QualificationsChildrenInternalFieldOwners = 'qualifications___children___internal___fieldOwners',
  QualificationsChildrenInternalIgnoreType = 'qualifications___children___internal___ignoreType',
  QualificationsChildrenInternalMediaType = 'qualifications___children___internal___mediaType',
  QualificationsChildrenInternalOwner = 'qualifications___children___internal___owner',
  QualificationsChildrenInternalType = 'qualifications___children___internal___type',
  QualificationsChildrenParentChildren = 'qualifications___children___parent___children',
  QualificationsChildrenParentId = 'qualifications___children___parent___id',
  QualificationsContentfulId = 'qualifications___contentful_id',
  QualificationsCreatedAt = 'qualifications___createdAt',
  QualificationsDate = 'qualifications___date',
  QualificationsId = 'qualifications___id',
  QualificationsInternalContent = 'qualifications___internal___content',
  QualificationsInternalContentDigest = 'qualifications___internal___contentDigest',
  QualificationsInternalDescription = 'qualifications___internal___description',
  QualificationsInternalFieldOwners = 'qualifications___internal___fieldOwners',
  QualificationsInternalIgnoreType = 'qualifications___internal___ignoreType',
  QualificationsInternalMediaType = 'qualifications___internal___mediaType',
  QualificationsInternalOwner = 'qualifications___internal___owner',
  QualificationsInternalType = 'qualifications___internal___type',
  QualificationsName = 'qualifications___name',
  QualificationsNodeLocale = 'qualifications___node_locale',
  QualificationsParentChildren = 'qualifications___parent___children',
  QualificationsParentChildrenChildren = 'qualifications___parent___children___children',
  QualificationsParentChildrenId = 'qualifications___parent___children___id',
  QualificationsParentId = 'qualifications___parent___id',
  QualificationsParentInternalContent = 'qualifications___parent___internal___content',
  QualificationsParentInternalContentDigest = 'qualifications___parent___internal___contentDigest',
  QualificationsParentInternalDescription = 'qualifications___parent___internal___description',
  QualificationsParentInternalFieldOwners = 'qualifications___parent___internal___fieldOwners',
  QualificationsParentInternalIgnoreType = 'qualifications___parent___internal___ignoreType',
  QualificationsParentInternalMediaType = 'qualifications___parent___internal___mediaType',
  QualificationsParentInternalOwner = 'qualifications___parent___internal___owner',
  QualificationsParentInternalType = 'qualifications___parent___internal___type',
  QualificationsParentParentChildren = 'qualifications___parent___parent___children',
  QualificationsParentParentId = 'qualifications___parent___parent___id',
  QualificationsQualificationMap = 'qualifications___qualification_map',
  QualificationsQualificationMapChildren = 'qualifications___qualification_map___children',
  QualificationsQualificationMapChildrenChildren = 'qualifications___qualification_map___children___children',
  QualificationsQualificationMapChildrenId = 'qualifications___qualification_map___children___id',
  QualificationsQualificationMapContentfulId = 'qualifications___qualification_map___contentful_id',
  QualificationsQualificationMapCreatedAt = 'qualifications___qualification_map___createdAt',
  QualificationsQualificationMapExpanded = 'qualifications___qualification_map___expanded',
  QualificationsQualificationMapId = 'qualifications___qualification_map___id',
  QualificationsQualificationMapInternalContent = 'qualifications___qualification_map___internal___content',
  QualificationsQualificationMapInternalContentDigest = 'qualifications___qualification_map___internal___contentDigest',
  QualificationsQualificationMapInternalDescription = 'qualifications___qualification_map___internal___description',
  QualificationsQualificationMapInternalFieldOwners = 'qualifications___qualification_map___internal___fieldOwners',
  QualificationsQualificationMapInternalIgnoreType = 'qualifications___qualification_map___internal___ignoreType',
  QualificationsQualificationMapInternalMediaType = 'qualifications___qualification_map___internal___mediaType',
  QualificationsQualificationMapInternalOwner = 'qualifications___qualification_map___internal___owner',
  QualificationsQualificationMapInternalType = 'qualifications___qualification_map___internal___type',
  QualificationsQualificationMapName = 'qualifications___qualification_map___name',
  QualificationsQualificationMapNodeLocale = 'qualifications___qualification_map___node_locale',
  QualificationsQualificationMapParentChildren = 'qualifications___qualification_map___parent___children',
  QualificationsQualificationMapParentId = 'qualifications___qualification_map___parent___id',
  QualificationsQualificationMapQualifications = 'qualifications___qualification_map___qualifications',
  QualificationsQualificationMapQualificationsChildren = 'qualifications___qualification_map___qualifications___children',
  QualificationsQualificationMapQualificationsContentfulId = 'qualifications___qualification_map___qualifications___contentful_id',
  QualificationsQualificationMapQualificationsCreatedAt = 'qualifications___qualification_map___qualifications___createdAt',
  QualificationsQualificationMapQualificationsDate = 'qualifications___qualification_map___qualifications___date',
  QualificationsQualificationMapQualificationsId = 'qualifications___qualification_map___qualifications___id',
  QualificationsQualificationMapQualificationsName = 'qualifications___qualification_map___qualifications___name',
  QualificationsQualificationMapQualificationsNodeLocale = 'qualifications___qualification_map___qualifications___node_locale',
  QualificationsQualificationMapQualificationsQualificationMap = 'qualifications___qualification_map___qualifications___qualification_map',
  QualificationsQualificationMapQualificationsSpaceId = 'qualifications___qualification_map___qualifications___spaceId',
  QualificationsQualificationMapQualificationsUpdatedAt = 'qualifications___qualification_map___qualifications___updatedAt',
  QualificationsQualificationMapSortKey = 'qualifications___qualification_map___sortKey',
  QualificationsQualificationMapSpaceId = 'qualifications___qualification_map___spaceId',
  QualificationsQualificationMapSysRevision = 'qualifications___qualification_map___sys___revision',
  QualificationsQualificationMapSysType = 'qualifications___qualification_map___sys___type',
  QualificationsQualificationMapUpdatedAt = 'qualifications___qualification_map___updatedAt',
  QualificationsSpaceId = 'qualifications___spaceId',
  QualificationsSysRevision = 'qualifications___sys___revision',
  QualificationsSysType = 'qualifications___sys___type',
  QualificationsUpdatedAt = 'qualifications___updatedAt',
  SortKey = 'sortKey',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulQualificationMapFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  expanded?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  qualifications?: InputMaybe<ContentfulQualificationFilterListInput>;
  sortKey?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulQualificationMapSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulQualificationMapFilterListInput = {
  elemMatch?: InputMaybe<ContentfulQualificationMapFilterInput>;
};

export type ContentfulQualificationMapGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulQualificationMapEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulQualificationMapGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulQualificationMap>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulQualificationMapGroupConnectionDistinctArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapGroupConnectionGroupArgs = {
  field: ContentfulQualificationMapFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulQualificationMapGroupConnectionMaxArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapGroupConnectionMinArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapGroupConnectionSumArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};

export type ContentfulQualificationMapSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulQualificationMapFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulQualificationMapSys = {
  contentType?: Maybe<ContentfulQualificationMapSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapSysContentType = {
  sys?: Maybe<ContentfulQualificationMapSysContentTypeSys>;
};

export type ContentfulQualificationMapSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulQualificationMapSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationMapSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationMapSysFilterInput = {
  contentType?: InputMaybe<ContentfulQualificationMapSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulQualificationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulQualificationSys = {
  contentType?: Maybe<ContentfulQualificationSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationSysContentType = {
  sys?: Maybe<ContentfulQualificationSysContentTypeSys>;
};

export type ContentfulQualificationSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulQualificationSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationSysFilterInput = {
  contentType?: InputMaybe<ContentfulQualificationSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulSkillMap = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  expanded?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  skills?: Maybe<Array<Maybe<ContentfulTag>>>;
  sortKey?: Maybe<Scalars['Int']>;
  spaceId?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulSkillMapSys>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulSkillMapCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulSkillMapUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulSkillMapConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulSkillMapEdge>;
  group: Array<ContentfulSkillMapGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulSkillMap>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulSkillMapConnectionDistinctArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapConnectionGroupArgs = {
  field: ContentfulSkillMapFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulSkillMapConnectionMaxArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapConnectionMinArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapConnectionSumArgs = {
  field: ContentfulSkillMapFieldsEnum;
};

export type ContentfulSkillMapEdge = {
  next?: Maybe<ContentfulSkillMap>;
  node: ContentfulSkillMap;
  previous?: Maybe<ContentfulSkillMap>;
};

export enum ContentfulSkillMapFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Expanded = 'expanded',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Skills = 'skills',
  SkillsChildren = 'skills___children',
  SkillsChildrenChildren = 'skills___children___children',
  SkillsChildrenChildrenChildren = 'skills___children___children___children',
  SkillsChildrenChildrenId = 'skills___children___children___id',
  SkillsChildrenId = 'skills___children___id',
  SkillsChildrenInternalContent = 'skills___children___internal___content',
  SkillsChildrenInternalContentDigest = 'skills___children___internal___contentDigest',
  SkillsChildrenInternalDescription = 'skills___children___internal___description',
  SkillsChildrenInternalFieldOwners = 'skills___children___internal___fieldOwners',
  SkillsChildrenInternalIgnoreType = 'skills___children___internal___ignoreType',
  SkillsChildrenInternalMediaType = 'skills___children___internal___mediaType',
  SkillsChildrenInternalOwner = 'skills___children___internal___owner',
  SkillsChildrenInternalType = 'skills___children___internal___type',
  SkillsChildrenParentChildren = 'skills___children___parent___children',
  SkillsChildrenParentId = 'skills___children___parent___id',
  SkillsContentfulId = 'skills___contentful_id',
  SkillsCreatedAt = 'skills___createdAt',
  SkillsId = 'skills___id',
  SkillsInternalContent = 'skills___internal___content',
  SkillsInternalContentDigest = 'skills___internal___contentDigest',
  SkillsInternalDescription = 'skills___internal___description',
  SkillsInternalFieldOwners = 'skills___internal___fieldOwners',
  SkillsInternalIgnoreType = 'skills___internal___ignoreType',
  SkillsInternalMediaType = 'skills___internal___mediaType',
  SkillsInternalOwner = 'skills___internal___owner',
  SkillsInternalType = 'skills___internal___type',
  SkillsLevel = 'skills___level',
  SkillsName = 'skills___name',
  SkillsNodeLocale = 'skills___node_locale',
  SkillsOss = 'skills___oss',
  SkillsOssChildContentfulOssDetailTextNodeChildren = 'skills___oss___childContentfulOssDetailTextNode___children',
  SkillsOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 'skills___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  SkillsOssChildContentfulOssDetailTextNodeDetail = 'skills___oss___childContentfulOssDetailTextNode___detail',
  SkillsOssChildContentfulOssDetailTextNodeId = 'skills___oss___childContentfulOssDetailTextNode___id',
  SkillsOssChildren = 'skills___oss___children',
  SkillsOssChildrenContentfulOssDetailTextNode = 'skills___oss___childrenContentfulOssDetailTextNode',
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 'skills___oss___childrenContentfulOssDetailTextNode___children',
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 'skills___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 'skills___oss___childrenContentfulOssDetailTextNode___detail',
  SkillsOssChildrenContentfulOssDetailTextNodeId = 'skills___oss___childrenContentfulOssDetailTextNode___id',
  SkillsOssChildrenChildren = 'skills___oss___children___children',
  SkillsOssChildrenId = 'skills___oss___children___id',
  SkillsOssContentfulId = 'skills___oss___contentful_id',
  SkillsOssCreatedAt = 'skills___oss___createdAt',
  SkillsOssDetailChildren = 'skills___oss___detail___children',
  SkillsOssDetailChildrenMarkdownRemark = 'skills___oss___detail___childrenMarkdownRemark',
  SkillsOssDetailDetail = 'skills___oss___detail___detail',
  SkillsOssDetailId = 'skills___oss___detail___id',
  SkillsOssHref = 'skills___oss___href',
  SkillsOssIconChildren = 'skills___oss___icon___children',
  SkillsOssIconChildrenContentfulIconSvgTextNode = 'skills___oss___icon___childrenContentfulIconSvgTextNode',
  SkillsOssIconContact = 'skills___oss___icon___contact',
  SkillsOssIconContentfulId = 'skills___oss___icon___contentful_id',
  SkillsOssIconCreatedAt = 'skills___oss___icon___createdAt',
  SkillsOssIconHistory = 'skills___oss___icon___history',
  SkillsOssIconId = 'skills___oss___icon___id',
  SkillsOssIconName = 'skills___oss___icon___name',
  SkillsOssIconNodeLocale = 'skills___oss___icon___node_locale',
  SkillsOssIconOss = 'skills___oss___icon___oss',
  SkillsOssIconProject = 'skills___oss___icon___project',
  SkillsOssIconSpaceId = 'skills___oss___icon___spaceId',
  SkillsOssIconUpdatedAt = 'skills___oss___icon___updatedAt',
  SkillsOssIconWhatICanDo = 'skills___oss___icon___what_i_can_do',
  SkillsOssId = 'skills___oss___id',
  SkillsOssImageChildren = 'skills___oss___image___children',
  SkillsOssImageContentfulId = 'skills___oss___image___contentful_id',
  SkillsOssImageCreatedAt = 'skills___oss___image___createdAt',
  SkillsOssImageDescription = 'skills___oss___image___description',
  SkillsOssImageGatsbyImageData = 'skills___oss___image___gatsbyImageData',
  SkillsOssImageId = 'skills___oss___image___id',
  SkillsOssImageNodeLocale = 'skills___oss___image___node_locale',
  SkillsOssImageSpaceId = 'skills___oss___image___spaceId',
  SkillsOssImageTitle = 'skills___oss___image___title',
  SkillsOssImageUpdatedAt = 'skills___oss___image___updatedAt',
  SkillsOssInternalContent = 'skills___oss___internal___content',
  SkillsOssInternalContentDigest = 'skills___oss___internal___contentDigest',
  SkillsOssInternalDescription = 'skills___oss___internal___description',
  SkillsOssInternalFieldOwners = 'skills___oss___internal___fieldOwners',
  SkillsOssInternalIgnoreType = 'skills___oss___internal___ignoreType',
  SkillsOssInternalMediaType = 'skills___oss___internal___mediaType',
  SkillsOssInternalOwner = 'skills___oss___internal___owner',
  SkillsOssInternalType = 'skills___oss___internal___type',
  SkillsOssName = 'skills___oss___name',
  SkillsOssNodeLocale = 'skills___oss___node_locale',
  SkillsOssParentChildren = 'skills___oss___parent___children',
  SkillsOssParentId = 'skills___oss___parent___id',
  SkillsOssSpaceId = 'skills___oss___spaceId',
  SkillsOssStartDate = 'skills___oss___startDate',
  SkillsOssSubName = 'skills___oss___subName',
  SkillsOssSysRevision = 'skills___oss___sys___revision',
  SkillsOssSysType = 'skills___oss___sys___type',
  SkillsOssTags = 'skills___oss___tags',
  SkillsOssTagsChildren = 'skills___oss___tags___children',
  SkillsOssTagsContentfulId = 'skills___oss___tags___contentful_id',
  SkillsOssTagsCreatedAt = 'skills___oss___tags___createdAt',
  SkillsOssTagsId = 'skills___oss___tags___id',
  SkillsOssTagsLevel = 'skills___oss___tags___level',
  SkillsOssTagsName = 'skills___oss___tags___name',
  SkillsOssTagsNodeLocale = 'skills___oss___tags___node_locale',
  SkillsOssTagsOss = 'skills___oss___tags___oss',
  SkillsOssTagsProject = 'skills___oss___tags___project',
  SkillsOssTagsSkillMap = 'skills___oss___tags___skill_map',
  SkillsOssTagsSpaceId = 'skills___oss___tags___spaceId',
  SkillsOssTagsUpdatedAt = 'skills___oss___tags___updatedAt',
  SkillsOssUpdatedAt = 'skills___oss___updatedAt',
  SkillsParentChildren = 'skills___parent___children',
  SkillsParentChildrenChildren = 'skills___parent___children___children',
  SkillsParentChildrenId = 'skills___parent___children___id',
  SkillsParentId = 'skills___parent___id',
  SkillsParentInternalContent = 'skills___parent___internal___content',
  SkillsParentInternalContentDigest = 'skills___parent___internal___contentDigest',
  SkillsParentInternalDescription = 'skills___parent___internal___description',
  SkillsParentInternalFieldOwners = 'skills___parent___internal___fieldOwners',
  SkillsParentInternalIgnoreType = 'skills___parent___internal___ignoreType',
  SkillsParentInternalMediaType = 'skills___parent___internal___mediaType',
  SkillsParentInternalOwner = 'skills___parent___internal___owner',
  SkillsParentInternalType = 'skills___parent___internal___type',
  SkillsParentParentChildren = 'skills___parent___parent___children',
  SkillsParentParentId = 'skills___parent___parent___id',
  SkillsProject = 'skills___project',
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 'skills___project___childContentfulProjectDetailTextNode___children',
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'skills___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 'skills___project___childContentfulProjectDetailTextNode___detail',
  SkillsProjectChildContentfulProjectDetailTextNodeId = 'skills___project___childContentfulProjectDetailTextNode___id',
  SkillsProjectChildren = 'skills___project___children',
  SkillsProjectChildrenContentfulProjectDetailTextNode = 'skills___project___childrenContentfulProjectDetailTextNode',
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 'skills___project___childrenContentfulProjectDetailTextNode___children',
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'skills___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 'skills___project___childrenContentfulProjectDetailTextNode___detail',
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 'skills___project___childrenContentfulProjectDetailTextNode___id',
  SkillsProjectChildrenChildren = 'skills___project___children___children',
  SkillsProjectChildrenId = 'skills___project___children___id',
  SkillsProjectContentfulId = 'skills___project___contentful_id',
  SkillsProjectCreatedAt = 'skills___project___createdAt',
  SkillsProjectDetailChildren = 'skills___project___detail___children',
  SkillsProjectDetailChildrenMarkdownRemark = 'skills___project___detail___childrenMarkdownRemark',
  SkillsProjectDetailDetail = 'skills___project___detail___detail',
  SkillsProjectDetailId = 'skills___project___detail___id',
  SkillsProjectEndDate = 'skills___project___endDate',
  SkillsProjectIconChildren = 'skills___project___icon___children',
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 'skills___project___icon___childrenContentfulIconSvgTextNode',
  SkillsProjectIconContact = 'skills___project___icon___contact',
  SkillsProjectIconContentfulId = 'skills___project___icon___contentful_id',
  SkillsProjectIconCreatedAt = 'skills___project___icon___createdAt',
  SkillsProjectIconHistory = 'skills___project___icon___history',
  SkillsProjectIconId = 'skills___project___icon___id',
  SkillsProjectIconName = 'skills___project___icon___name',
  SkillsProjectIconNodeLocale = 'skills___project___icon___node_locale',
  SkillsProjectIconOss = 'skills___project___icon___oss',
  SkillsProjectIconProject = 'skills___project___icon___project',
  SkillsProjectIconSpaceId = 'skills___project___icon___spaceId',
  SkillsProjectIconUpdatedAt = 'skills___project___icon___updatedAt',
  SkillsProjectIconWhatICanDo = 'skills___project___icon___what_i_can_do',
  SkillsProjectId = 'skills___project___id',
  SkillsProjectInternalContent = 'skills___project___internal___content',
  SkillsProjectInternalContentDigest = 'skills___project___internal___contentDigest',
  SkillsProjectInternalDescription = 'skills___project___internal___description',
  SkillsProjectInternalFieldOwners = 'skills___project___internal___fieldOwners',
  SkillsProjectInternalIgnoreType = 'skills___project___internal___ignoreType',
  SkillsProjectInternalMediaType = 'skills___project___internal___mediaType',
  SkillsProjectInternalOwner = 'skills___project___internal___owner',
  SkillsProjectInternalType = 'skills___project___internal___type',
  SkillsProjectName = 'skills___project___name',
  SkillsProjectNodeLocale = 'skills___project___node_locale',
  SkillsProjectParentChildren = 'skills___project___parent___children',
  SkillsProjectParentId = 'skills___project___parent___id',
  SkillsProjectSpaceId = 'skills___project___spaceId',
  SkillsProjectStartDate = 'skills___project___startDate',
  SkillsProjectSubName = 'skills___project___subName',
  SkillsProjectSysRevision = 'skills___project___sys___revision',
  SkillsProjectSysType = 'skills___project___sys___type',
  SkillsProjectTags = 'skills___project___tags',
  SkillsProjectTagsChildren = 'skills___project___tags___children',
  SkillsProjectTagsContentfulId = 'skills___project___tags___contentful_id',
  SkillsProjectTagsCreatedAt = 'skills___project___tags___createdAt',
  SkillsProjectTagsId = 'skills___project___tags___id',
  SkillsProjectTagsLevel = 'skills___project___tags___level',
  SkillsProjectTagsName = 'skills___project___tags___name',
  SkillsProjectTagsNodeLocale = 'skills___project___tags___node_locale',
  SkillsProjectTagsOss = 'skills___project___tags___oss',
  SkillsProjectTagsProject = 'skills___project___tags___project',
  SkillsProjectTagsSkillMap = 'skills___project___tags___skill_map',
  SkillsProjectTagsSpaceId = 'skills___project___tags___spaceId',
  SkillsProjectTagsUpdatedAt = 'skills___project___tags___updatedAt',
  SkillsProjectUpdatedAt = 'skills___project___updatedAt',
  SkillsSkillMap = 'skills___skill_map',
  SkillsSkillMapChildren = 'skills___skill_map___children',
  SkillsSkillMapChildrenChildren = 'skills___skill_map___children___children',
  SkillsSkillMapChildrenId = 'skills___skill_map___children___id',
  SkillsSkillMapContentfulId = 'skills___skill_map___contentful_id',
  SkillsSkillMapCreatedAt = 'skills___skill_map___createdAt',
  SkillsSkillMapExpanded = 'skills___skill_map___expanded',
  SkillsSkillMapId = 'skills___skill_map___id',
  SkillsSkillMapInternalContent = 'skills___skill_map___internal___content',
  SkillsSkillMapInternalContentDigest = 'skills___skill_map___internal___contentDigest',
  SkillsSkillMapInternalDescription = 'skills___skill_map___internal___description',
  SkillsSkillMapInternalFieldOwners = 'skills___skill_map___internal___fieldOwners',
  SkillsSkillMapInternalIgnoreType = 'skills___skill_map___internal___ignoreType',
  SkillsSkillMapInternalMediaType = 'skills___skill_map___internal___mediaType',
  SkillsSkillMapInternalOwner = 'skills___skill_map___internal___owner',
  SkillsSkillMapInternalType = 'skills___skill_map___internal___type',
  SkillsSkillMapName = 'skills___skill_map___name',
  SkillsSkillMapNodeLocale = 'skills___skill_map___node_locale',
  SkillsSkillMapParentChildren = 'skills___skill_map___parent___children',
  SkillsSkillMapParentId = 'skills___skill_map___parent___id',
  SkillsSkillMapSkills = 'skills___skill_map___skills',
  SkillsSkillMapSkillsChildren = 'skills___skill_map___skills___children',
  SkillsSkillMapSkillsContentfulId = 'skills___skill_map___skills___contentful_id',
  SkillsSkillMapSkillsCreatedAt = 'skills___skill_map___skills___createdAt',
  SkillsSkillMapSkillsId = 'skills___skill_map___skills___id',
  SkillsSkillMapSkillsLevel = 'skills___skill_map___skills___level',
  SkillsSkillMapSkillsName = 'skills___skill_map___skills___name',
  SkillsSkillMapSkillsNodeLocale = 'skills___skill_map___skills___node_locale',
  SkillsSkillMapSkillsOss = 'skills___skill_map___skills___oss',
  SkillsSkillMapSkillsProject = 'skills___skill_map___skills___project',
  SkillsSkillMapSkillsSkillMap = 'skills___skill_map___skills___skill_map',
  SkillsSkillMapSkillsSpaceId = 'skills___skill_map___skills___spaceId',
  SkillsSkillMapSkillsUpdatedAt = 'skills___skill_map___skills___updatedAt',
  SkillsSkillMapSortKey = 'skills___skill_map___sortKey',
  SkillsSkillMapSpaceId = 'skills___skill_map___spaceId',
  SkillsSkillMapSysRevision = 'skills___skill_map___sys___revision',
  SkillsSkillMapSysType = 'skills___skill_map___sys___type',
  SkillsSkillMapUpdatedAt = 'skills___skill_map___updatedAt',
  SkillsSpaceId = 'skills___spaceId',
  SkillsSysRevision = 'skills___sys___revision',
  SkillsSysType = 'skills___sys___type',
  SkillsUpdatedAt = 'skills___updatedAt',
  SortKey = 'sortKey',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulSkillMapFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  expanded?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  skills?: InputMaybe<ContentfulTagFilterListInput>;
  sortKey?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSkillMapSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulSkillMapFilterListInput = {
  elemMatch?: InputMaybe<ContentfulSkillMapFilterInput>;
};

export type ContentfulSkillMapGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulSkillMapEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulSkillMapGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulSkillMap>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulSkillMapGroupConnectionDistinctArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapGroupConnectionGroupArgs = {
  field: ContentfulSkillMapFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulSkillMapGroupConnectionMaxArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapGroupConnectionMinArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapGroupConnectionSumArgs = {
  field: ContentfulSkillMapFieldsEnum;
};

export type ContentfulSkillMapSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulSkillMapFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulSkillMapSys = {
  contentType?: Maybe<ContentfulSkillMapSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSysContentType = {
  sys?: Maybe<ContentfulSkillMapSysContentTypeSys>;
};

export type ContentfulSkillMapSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulSkillMapSysContentTypeSysFilterInput>;
};

export type ContentfulSkillMapSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSkillMapSysFilterInput = {
  contentType?: InputMaybe<ContentfulSkillMapSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulTag = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  internal: Internal;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  oss?: Maybe<Array<Maybe<ContentfulOss>>>;
  parent?: Maybe<Node>;
  project?: Maybe<Array<Maybe<ContentfulProject>>>;
  skill_map?: Maybe<Array<Maybe<ContentfulSkillMap>>>;
  spaceId?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulTagSys>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulTagCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulTagUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulTagConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulTagEdge>;
  group: Array<ContentfulTagGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulTagConnectionDistinctArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagConnectionGroupArgs = {
  field: ContentfulTagFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulTagConnectionMaxArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagConnectionMinArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagConnectionSumArgs = {
  field: ContentfulTagFieldsEnum;
};

export type ContentfulTagEdge = {
  next?: Maybe<ContentfulTag>;
  node: ContentfulTag;
  previous?: Maybe<ContentfulTag>;
};

export enum ContentfulTagFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Level = 'level',
  Name = 'name',
  NodeLocale = 'node_locale',
  Oss = 'oss',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___children',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___headings',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___html',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkId = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___id',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 'oss___childContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  OssChildContentfulOssDetailTextNodeChildren = 'oss___childContentfulOssDetailTextNode___children',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'oss___childContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  OssChildContentfulOssDetailTextNodeChildrenChildren = 'oss___childContentfulOssDetailTextNode___children___children',
  OssChildContentfulOssDetailTextNodeChildrenId = 'oss___childContentfulOssDetailTextNode___children___id',
  OssChildContentfulOssDetailTextNodeDetail = 'oss___childContentfulOssDetailTextNode___detail',
  OssChildContentfulOssDetailTextNodeId = 'oss___childContentfulOssDetailTextNode___id',
  OssChildContentfulOssDetailTextNodeInternalContent = 'oss___childContentfulOssDetailTextNode___internal___content',
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 'oss___childContentfulOssDetailTextNode___internal___contentDigest',
  OssChildContentfulOssDetailTextNodeInternalDescription = 'oss___childContentfulOssDetailTextNode___internal___description',
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 'oss___childContentfulOssDetailTextNode___internal___fieldOwners',
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 'oss___childContentfulOssDetailTextNode___internal___ignoreType',
  OssChildContentfulOssDetailTextNodeInternalMediaType = 'oss___childContentfulOssDetailTextNode___internal___mediaType',
  OssChildContentfulOssDetailTextNodeInternalOwner = 'oss___childContentfulOssDetailTextNode___internal___owner',
  OssChildContentfulOssDetailTextNodeInternalType = 'oss___childContentfulOssDetailTextNode___internal___type',
  OssChildContentfulOssDetailTextNodeParentChildren = 'oss___childContentfulOssDetailTextNode___parent___children',
  OssChildContentfulOssDetailTextNodeParentId = 'oss___childContentfulOssDetailTextNode___parent___id',
  OssChildContentfulOssDetailTextNodeSysType = 'oss___childContentfulOssDetailTextNode___sys___type',
  OssChildren = 'oss___children',
  OssChildrenContentfulOssDetailTextNode = 'oss___childrenContentfulOssDetailTextNode',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___children',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerpt',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___excerptAst',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___headings',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___html',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___htmlAst',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkId = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___id',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___tableOfContents',
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 'oss___childrenContentfulOssDetailTextNode___childMarkdownRemark___timeToRead',
  OssChildrenContentfulOssDetailTextNodeChildren = 'oss___childrenContentfulOssDetailTextNode___children',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___children',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerpt',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___excerptAst',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___headings',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___html',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___htmlAst',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___id',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___tableOfContents',
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark___timeToRead',
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 'oss___childrenContentfulOssDetailTextNode___children___children',
  OssChildrenContentfulOssDetailTextNodeChildrenId = 'oss___childrenContentfulOssDetailTextNode___children___id',
  OssChildrenContentfulOssDetailTextNodeDetail = 'oss___childrenContentfulOssDetailTextNode___detail',
  OssChildrenContentfulOssDetailTextNodeId = 'oss___childrenContentfulOssDetailTextNode___id',
  OssChildrenContentfulOssDetailTextNodeInternalContent = 'oss___childrenContentfulOssDetailTextNode___internal___content',
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 'oss___childrenContentfulOssDetailTextNode___internal___contentDigest',
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 'oss___childrenContentfulOssDetailTextNode___internal___description',
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 'oss___childrenContentfulOssDetailTextNode___internal___fieldOwners',
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 'oss___childrenContentfulOssDetailTextNode___internal___ignoreType',
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 'oss___childrenContentfulOssDetailTextNode___internal___mediaType',
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 'oss___childrenContentfulOssDetailTextNode___internal___owner',
  OssChildrenContentfulOssDetailTextNodeInternalType = 'oss___childrenContentfulOssDetailTextNode___internal___type',
  OssChildrenContentfulOssDetailTextNodeParentChildren = 'oss___childrenContentfulOssDetailTextNode___parent___children',
  OssChildrenContentfulOssDetailTextNodeParentId = 'oss___childrenContentfulOssDetailTextNode___parent___id',
  OssChildrenContentfulOssDetailTextNodeSysType = 'oss___childrenContentfulOssDetailTextNode___sys___type',
  OssChildrenChildren = 'oss___children___children',
  OssChildrenChildrenChildren = 'oss___children___children___children',
  OssChildrenChildrenId = 'oss___children___children___id',
  OssChildrenId = 'oss___children___id',
  OssChildrenInternalContent = 'oss___children___internal___content',
  OssChildrenInternalContentDigest = 'oss___children___internal___contentDigest',
  OssChildrenInternalDescription = 'oss___children___internal___description',
  OssChildrenInternalFieldOwners = 'oss___children___internal___fieldOwners',
  OssChildrenInternalIgnoreType = 'oss___children___internal___ignoreType',
  OssChildrenInternalMediaType = 'oss___children___internal___mediaType',
  OssChildrenInternalOwner = 'oss___children___internal___owner',
  OssChildrenInternalType = 'oss___children___internal___type',
  OssChildrenParentChildren = 'oss___children___parent___children',
  OssChildrenParentId = 'oss___children___parent___id',
  OssContentfulId = 'oss___contentful_id',
  OssCreatedAt = 'oss___createdAt',
  OssDetailChildMarkdownRemarkChildren = 'oss___detail___childMarkdownRemark___children',
  OssDetailChildMarkdownRemarkExcerpt = 'oss___detail___childMarkdownRemark___excerpt',
  OssDetailChildMarkdownRemarkExcerptAst = 'oss___detail___childMarkdownRemark___excerptAst',
  OssDetailChildMarkdownRemarkHeadings = 'oss___detail___childMarkdownRemark___headings',
  OssDetailChildMarkdownRemarkHtml = 'oss___detail___childMarkdownRemark___html',
  OssDetailChildMarkdownRemarkHtmlAst = 'oss___detail___childMarkdownRemark___htmlAst',
  OssDetailChildMarkdownRemarkId = 'oss___detail___childMarkdownRemark___id',
  OssDetailChildMarkdownRemarkRawMarkdownBody = 'oss___detail___childMarkdownRemark___rawMarkdownBody',
  OssDetailChildMarkdownRemarkTableOfContents = 'oss___detail___childMarkdownRemark___tableOfContents',
  OssDetailChildMarkdownRemarkTimeToRead = 'oss___detail___childMarkdownRemark___timeToRead',
  OssDetailChildren = 'oss___detail___children',
  OssDetailChildrenMarkdownRemark = 'oss___detail___childrenMarkdownRemark',
  OssDetailChildrenMarkdownRemarkChildren = 'oss___detail___childrenMarkdownRemark___children',
  OssDetailChildrenMarkdownRemarkExcerpt = 'oss___detail___childrenMarkdownRemark___excerpt',
  OssDetailChildrenMarkdownRemarkExcerptAst = 'oss___detail___childrenMarkdownRemark___excerptAst',
  OssDetailChildrenMarkdownRemarkHeadings = 'oss___detail___childrenMarkdownRemark___headings',
  OssDetailChildrenMarkdownRemarkHtml = 'oss___detail___childrenMarkdownRemark___html',
  OssDetailChildrenMarkdownRemarkHtmlAst = 'oss___detail___childrenMarkdownRemark___htmlAst',
  OssDetailChildrenMarkdownRemarkId = 'oss___detail___childrenMarkdownRemark___id',
  OssDetailChildrenMarkdownRemarkRawMarkdownBody = 'oss___detail___childrenMarkdownRemark___rawMarkdownBody',
  OssDetailChildrenMarkdownRemarkTableOfContents = 'oss___detail___childrenMarkdownRemark___tableOfContents',
  OssDetailChildrenMarkdownRemarkTimeToRead = 'oss___detail___childrenMarkdownRemark___timeToRead',
  OssDetailChildrenChildren = 'oss___detail___children___children',
  OssDetailChildrenId = 'oss___detail___children___id',
  OssDetailDetail = 'oss___detail___detail',
  OssDetailId = 'oss___detail___id',
  OssDetailInternalContent = 'oss___detail___internal___content',
  OssDetailInternalContentDigest = 'oss___detail___internal___contentDigest',
  OssDetailInternalDescription = 'oss___detail___internal___description',
  OssDetailInternalFieldOwners = 'oss___detail___internal___fieldOwners',
  OssDetailInternalIgnoreType = 'oss___detail___internal___ignoreType',
  OssDetailInternalMediaType = 'oss___detail___internal___mediaType',
  OssDetailInternalOwner = 'oss___detail___internal___owner',
  OssDetailInternalType = 'oss___detail___internal___type',
  OssDetailParentChildren = 'oss___detail___parent___children',
  OssDetailParentId = 'oss___detail___parent___id',
  OssDetailSysType = 'oss___detail___sys___type',
  OssHref = 'oss___href',
  OssIconChildContentfulIconSvgTextNodeChildren = 'oss___icon___childContentfulIconSvgTextNode___children',
  OssIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'oss___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  OssIconChildContentfulIconSvgTextNodeId = 'oss___icon___childContentfulIconSvgTextNode___id',
  OssIconChildContentfulIconSvgTextNodeSvg = 'oss___icon___childContentfulIconSvgTextNode___svg',
  OssIconChildren = 'oss___icon___children',
  OssIconChildrenContentfulIconSvgTextNode = 'oss___icon___childrenContentfulIconSvgTextNode',
  OssIconChildrenContentfulIconSvgTextNodeChildren = 'oss___icon___childrenContentfulIconSvgTextNode___children',
  OssIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'oss___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  OssIconChildrenContentfulIconSvgTextNodeId = 'oss___icon___childrenContentfulIconSvgTextNode___id',
  OssIconChildrenContentfulIconSvgTextNodeSvg = 'oss___icon___childrenContentfulIconSvgTextNode___svg',
  OssIconChildrenChildren = 'oss___icon___children___children',
  OssIconChildrenId = 'oss___icon___children___id',
  OssIconContact = 'oss___icon___contact',
  OssIconContactChildren = 'oss___icon___contact___children',
  OssIconContactContentfulId = 'oss___icon___contact___contentful_id',
  OssIconContactCreatedAt = 'oss___icon___contact___createdAt',
  OssIconContactHref = 'oss___icon___contact___href',
  OssIconContactId = 'oss___icon___contact___id',
  OssIconContactName = 'oss___icon___contact___name',
  OssIconContactNodeLocale = 'oss___icon___contact___node_locale',
  OssIconContactSortKey = 'oss___icon___contact___sortKey',
  OssIconContactSpaceId = 'oss___icon___contact___spaceId',
  OssIconContactSubName = 'oss___icon___contact___subName',
  OssIconContactUpdatedAt = 'oss___icon___contact___updatedAt',
  OssIconContentfulId = 'oss___icon___contentful_id',
  OssIconCreatedAt = 'oss___icon___createdAt',
  OssIconHistory = 'oss___icon___history',
  OssIconHistoryChildren = 'oss___icon___history___children',
  OssIconHistoryContentfulId = 'oss___icon___history___contentful_id',
  OssIconHistoryCreatedAt = 'oss___icon___history___createdAt',
  OssIconHistoryDate = 'oss___icon___history___date',
  OssIconHistoryId = 'oss___icon___history___id',
  OssIconHistoryName = 'oss___icon___history___name',
  OssIconHistoryNodeLocale = 'oss___icon___history___node_locale',
  OssIconHistorySpaceId = 'oss___icon___history___spaceId',
  OssIconHistorySubName = 'oss___icon___history___subName',
  OssIconHistoryUpdatedAt = 'oss___icon___history___updatedAt',
  OssIconId = 'oss___icon___id',
  OssIconInternalContent = 'oss___icon___internal___content',
  OssIconInternalContentDigest = 'oss___icon___internal___contentDigest',
  OssIconInternalDescription = 'oss___icon___internal___description',
  OssIconInternalFieldOwners = 'oss___icon___internal___fieldOwners',
  OssIconInternalIgnoreType = 'oss___icon___internal___ignoreType',
  OssIconInternalMediaType = 'oss___icon___internal___mediaType',
  OssIconInternalOwner = 'oss___icon___internal___owner',
  OssIconInternalType = 'oss___icon___internal___type',
  OssIconName = 'oss___icon___name',
  OssIconNodeLocale = 'oss___icon___node_locale',
  OssIconOss = 'oss___icon___oss',
  OssIconOssChildren = 'oss___icon___oss___children',
  OssIconOssChildrenContentfulOssDetailTextNode = 'oss___icon___oss___childrenContentfulOssDetailTextNode',
  OssIconOssContentfulId = 'oss___icon___oss___contentful_id',
  OssIconOssCreatedAt = 'oss___icon___oss___createdAt',
  OssIconOssHref = 'oss___icon___oss___href',
  OssIconOssId = 'oss___icon___oss___id',
  OssIconOssName = 'oss___icon___oss___name',
  OssIconOssNodeLocale = 'oss___icon___oss___node_locale',
  OssIconOssSpaceId = 'oss___icon___oss___spaceId',
  OssIconOssStartDate = 'oss___icon___oss___startDate',
  OssIconOssSubName = 'oss___icon___oss___subName',
  OssIconOssTags = 'oss___icon___oss___tags',
  OssIconOssUpdatedAt = 'oss___icon___oss___updatedAt',
  OssIconParentChildren = 'oss___icon___parent___children',
  OssIconParentId = 'oss___icon___parent___id',
  OssIconProject = 'oss___icon___project',
  OssIconProjectChildren = 'oss___icon___project___children',
  OssIconProjectChildrenContentfulProjectDetailTextNode = 'oss___icon___project___childrenContentfulProjectDetailTextNode',
  OssIconProjectContentfulId = 'oss___icon___project___contentful_id',
  OssIconProjectCreatedAt = 'oss___icon___project___createdAt',
  OssIconProjectEndDate = 'oss___icon___project___endDate',
  OssIconProjectId = 'oss___icon___project___id',
  OssIconProjectName = 'oss___icon___project___name',
  OssIconProjectNodeLocale = 'oss___icon___project___node_locale',
  OssIconProjectSpaceId = 'oss___icon___project___spaceId',
  OssIconProjectStartDate = 'oss___icon___project___startDate',
  OssIconProjectSubName = 'oss___icon___project___subName',
  OssIconProjectTags = 'oss___icon___project___tags',
  OssIconProjectUpdatedAt = 'oss___icon___project___updatedAt',
  OssIconSpaceId = 'oss___icon___spaceId',
  OssIconSvgChildren = 'oss___icon___svg___children',
  OssIconSvgChildrenMarkdownRemark = 'oss___icon___svg___childrenMarkdownRemark',
  OssIconSvgId = 'oss___icon___svg___id',
  OssIconSvgSvg = 'oss___icon___svg___svg',
  OssIconSysRevision = 'oss___icon___sys___revision',
  OssIconSysType = 'oss___icon___sys___type',
  OssIconUpdatedAt = 'oss___icon___updatedAt',
  OssIconWhatICanDo = 'oss___icon___what_i_can_do',
  OssIconWhatICanDoChildren = 'oss___icon___what_i_can_do___children',
  OssIconWhatICanDoContentfulId = 'oss___icon___what_i_can_do___contentful_id',
  OssIconWhatICanDoCreatedAt = 'oss___icon___what_i_can_do___createdAt',
  OssIconWhatICanDoId = 'oss___icon___what_i_can_do___id',
  OssIconWhatICanDoName = 'oss___icon___what_i_can_do___name',
  OssIconWhatICanDoNodeLocale = 'oss___icon___what_i_can_do___node_locale',
  OssIconWhatICanDoSortKey = 'oss___icon___what_i_can_do___sortKey',
  OssIconWhatICanDoSpaceId = 'oss___icon___what_i_can_do___spaceId',
  OssIconWhatICanDoSubName = 'oss___icon___what_i_can_do___subName',
  OssIconWhatICanDoUpdatedAt = 'oss___icon___what_i_can_do___updatedAt',
  OssId = 'oss___id',
  OssImageChildren = 'oss___image___children',
  OssImageChildrenChildren = 'oss___image___children___children',
  OssImageChildrenId = 'oss___image___children___id',
  OssImageContentfulId = 'oss___image___contentful_id',
  OssImageCreatedAt = 'oss___image___createdAt',
  OssImageDescription = 'oss___image___description',
  OssImageFieldsLocalFile = 'oss___image___fields___localFile',
  OssImageFileContentType = 'oss___image___file___contentType',
  OssImageFileFileName = 'oss___image___file___fileName',
  OssImageFileUrl = 'oss___image___file___url',
  OssImageGatsbyImageData = 'oss___image___gatsbyImageData',
  OssImageId = 'oss___image___id',
  OssImageInternalContent = 'oss___image___internal___content',
  OssImageInternalContentDigest = 'oss___image___internal___contentDigest',
  OssImageInternalDescription = 'oss___image___internal___description',
  OssImageInternalFieldOwners = 'oss___image___internal___fieldOwners',
  OssImageInternalIgnoreType = 'oss___image___internal___ignoreType',
  OssImageInternalMediaType = 'oss___image___internal___mediaType',
  OssImageInternalOwner = 'oss___image___internal___owner',
  OssImageInternalType = 'oss___image___internal___type',
  OssImageLocalFileAbsolutePath = 'oss___image___localFile___absolutePath',
  OssImageLocalFileAccessTime = 'oss___image___localFile___accessTime',
  OssImageLocalFileAtime = 'oss___image___localFile___atime',
  OssImageLocalFileAtimeMs = 'oss___image___localFile___atimeMs',
  OssImageLocalFileBase = 'oss___image___localFile___base',
  OssImageLocalFileBirthTime = 'oss___image___localFile___birthTime',
  OssImageLocalFileBirthtime = 'oss___image___localFile___birthtime',
  OssImageLocalFileBirthtimeMs = 'oss___image___localFile___birthtimeMs',
  OssImageLocalFileBlksize = 'oss___image___localFile___blksize',
  OssImageLocalFileBlocks = 'oss___image___localFile___blocks',
  OssImageLocalFileChangeTime = 'oss___image___localFile___changeTime',
  OssImageLocalFileChildren = 'oss___image___localFile___children',
  OssImageLocalFileChildrenImageSharp = 'oss___image___localFile___childrenImageSharp',
  OssImageLocalFileChildrenLocale = 'oss___image___localFile___childrenLocale',
  OssImageLocalFileCtime = 'oss___image___localFile___ctime',
  OssImageLocalFileCtimeMs = 'oss___image___localFile___ctimeMs',
  OssImageLocalFileDev = 'oss___image___localFile___dev',
  OssImageLocalFileDir = 'oss___image___localFile___dir',
  OssImageLocalFileExt = 'oss___image___localFile___ext',
  OssImageLocalFileExtension = 'oss___image___localFile___extension',
  OssImageLocalFileGid = 'oss___image___localFile___gid',
  OssImageLocalFileId = 'oss___image___localFile___id',
  OssImageLocalFileIno = 'oss___image___localFile___ino',
  OssImageLocalFileMode = 'oss___image___localFile___mode',
  OssImageLocalFileModifiedTime = 'oss___image___localFile___modifiedTime',
  OssImageLocalFileMtime = 'oss___image___localFile___mtime',
  OssImageLocalFileMtimeMs = 'oss___image___localFile___mtimeMs',
  OssImageLocalFileName = 'oss___image___localFile___name',
  OssImageLocalFileNlink = 'oss___image___localFile___nlink',
  OssImageLocalFilePrettySize = 'oss___image___localFile___prettySize',
  OssImageLocalFilePublicUrl = 'oss___image___localFile___publicURL',
  OssImageLocalFileRdev = 'oss___image___localFile___rdev',
  OssImageLocalFileRelativeDirectory = 'oss___image___localFile___relativeDirectory',
  OssImageLocalFileRelativePath = 'oss___image___localFile___relativePath',
  OssImageLocalFileRoot = 'oss___image___localFile___root',
  OssImageLocalFileSize = 'oss___image___localFile___size',
  OssImageLocalFileSourceInstanceName = 'oss___image___localFile___sourceInstanceName',
  OssImageLocalFileUid = 'oss___image___localFile___uid',
  OssImageLocalFileUrl = 'oss___image___localFile___url',
  OssImageNodeLocale = 'oss___image___node_locale',
  OssImageParentChildren = 'oss___image___parent___children',
  OssImageParentId = 'oss___image___parent___id',
  OssImageSpaceId = 'oss___image___spaceId',
  OssImageSysRevision = 'oss___image___sys___revision',
  OssImageSysType = 'oss___image___sys___type',
  OssImageTitle = 'oss___image___title',
  OssImageUpdatedAt = 'oss___image___updatedAt',
  OssInternalContent = 'oss___internal___content',
  OssInternalContentDigest = 'oss___internal___contentDigest',
  OssInternalDescription = 'oss___internal___description',
  OssInternalFieldOwners = 'oss___internal___fieldOwners',
  OssInternalIgnoreType = 'oss___internal___ignoreType',
  OssInternalMediaType = 'oss___internal___mediaType',
  OssInternalOwner = 'oss___internal___owner',
  OssInternalType = 'oss___internal___type',
  OssName = 'oss___name',
  OssNodeLocale = 'oss___node_locale',
  OssParentChildren = 'oss___parent___children',
  OssParentChildrenChildren = 'oss___parent___children___children',
  OssParentChildrenId = 'oss___parent___children___id',
  OssParentId = 'oss___parent___id',
  OssParentInternalContent = 'oss___parent___internal___content',
  OssParentInternalContentDigest = 'oss___parent___internal___contentDigest',
  OssParentInternalDescription = 'oss___parent___internal___description',
  OssParentInternalFieldOwners = 'oss___parent___internal___fieldOwners',
  OssParentInternalIgnoreType = 'oss___parent___internal___ignoreType',
  OssParentInternalMediaType = 'oss___parent___internal___mediaType',
  OssParentInternalOwner = 'oss___parent___internal___owner',
  OssParentInternalType = 'oss___parent___internal___type',
  OssParentParentChildren = 'oss___parent___parent___children',
  OssParentParentId = 'oss___parent___parent___id',
  OssSpaceId = 'oss___spaceId',
  OssStartDate = 'oss___startDate',
  OssSubName = 'oss___subName',
  OssSysRevision = 'oss___sys___revision',
  OssSysType = 'oss___sys___type',
  OssTags = 'oss___tags',
  OssTagsChildren = 'oss___tags___children',
  OssTagsChildrenChildren = 'oss___tags___children___children',
  OssTagsChildrenId = 'oss___tags___children___id',
  OssTagsContentfulId = 'oss___tags___contentful_id',
  OssTagsCreatedAt = 'oss___tags___createdAt',
  OssTagsId = 'oss___tags___id',
  OssTagsInternalContent = 'oss___tags___internal___content',
  OssTagsInternalContentDigest = 'oss___tags___internal___contentDigest',
  OssTagsInternalDescription = 'oss___tags___internal___description',
  OssTagsInternalFieldOwners = 'oss___tags___internal___fieldOwners',
  OssTagsInternalIgnoreType = 'oss___tags___internal___ignoreType',
  OssTagsInternalMediaType = 'oss___tags___internal___mediaType',
  OssTagsInternalOwner = 'oss___tags___internal___owner',
  OssTagsInternalType = 'oss___tags___internal___type',
  OssTagsLevel = 'oss___tags___level',
  OssTagsName = 'oss___tags___name',
  OssTagsNodeLocale = 'oss___tags___node_locale',
  OssTagsOss = 'oss___tags___oss',
  OssTagsOssChildren = 'oss___tags___oss___children',
  OssTagsOssChildrenContentfulOssDetailTextNode = 'oss___tags___oss___childrenContentfulOssDetailTextNode',
  OssTagsOssContentfulId = 'oss___tags___oss___contentful_id',
  OssTagsOssCreatedAt = 'oss___tags___oss___createdAt',
  OssTagsOssHref = 'oss___tags___oss___href',
  OssTagsOssId = 'oss___tags___oss___id',
  OssTagsOssName = 'oss___tags___oss___name',
  OssTagsOssNodeLocale = 'oss___tags___oss___node_locale',
  OssTagsOssSpaceId = 'oss___tags___oss___spaceId',
  OssTagsOssStartDate = 'oss___tags___oss___startDate',
  OssTagsOssSubName = 'oss___tags___oss___subName',
  OssTagsOssTags = 'oss___tags___oss___tags',
  OssTagsOssUpdatedAt = 'oss___tags___oss___updatedAt',
  OssTagsParentChildren = 'oss___tags___parent___children',
  OssTagsParentId = 'oss___tags___parent___id',
  OssTagsProject = 'oss___tags___project',
  OssTagsProjectChildren = 'oss___tags___project___children',
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 'oss___tags___project___childrenContentfulProjectDetailTextNode',
  OssTagsProjectContentfulId = 'oss___tags___project___contentful_id',
  OssTagsProjectCreatedAt = 'oss___tags___project___createdAt',
  OssTagsProjectEndDate = 'oss___tags___project___endDate',
  OssTagsProjectId = 'oss___tags___project___id',
  OssTagsProjectName = 'oss___tags___project___name',
  OssTagsProjectNodeLocale = 'oss___tags___project___node_locale',
  OssTagsProjectSpaceId = 'oss___tags___project___spaceId',
  OssTagsProjectStartDate = 'oss___tags___project___startDate',
  OssTagsProjectSubName = 'oss___tags___project___subName',
  OssTagsProjectTags = 'oss___tags___project___tags',
  OssTagsProjectUpdatedAt = 'oss___tags___project___updatedAt',
  OssTagsSkillMap = 'oss___tags___skill_map',
  OssTagsSkillMapChildren = 'oss___tags___skill_map___children',
  OssTagsSkillMapContentfulId = 'oss___tags___skill_map___contentful_id',
  OssTagsSkillMapCreatedAt = 'oss___tags___skill_map___createdAt',
  OssTagsSkillMapExpanded = 'oss___tags___skill_map___expanded',
  OssTagsSkillMapId = 'oss___tags___skill_map___id',
  OssTagsSkillMapName = 'oss___tags___skill_map___name',
  OssTagsSkillMapNodeLocale = 'oss___tags___skill_map___node_locale',
  OssTagsSkillMapSkills = 'oss___tags___skill_map___skills',
  OssTagsSkillMapSortKey = 'oss___tags___skill_map___sortKey',
  OssTagsSkillMapSpaceId = 'oss___tags___skill_map___spaceId',
  OssTagsSkillMapUpdatedAt = 'oss___tags___skill_map___updatedAt',
  OssTagsSpaceId = 'oss___tags___spaceId',
  OssTagsSysRevision = 'oss___tags___sys___revision',
  OssTagsSysType = 'oss___tags___sys___type',
  OssTagsUpdatedAt = 'oss___tags___updatedAt',
  OssUpdatedAt = 'oss___updatedAt',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Project = 'project',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___children',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___html',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkId = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___id',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 'project___childContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  ProjectChildContentfulProjectDetailTextNodeChildren = 'project___childContentfulProjectDetailTextNode___children',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'project___childContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 'project___childContentfulProjectDetailTextNode___children___children',
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 'project___childContentfulProjectDetailTextNode___children___id',
  ProjectChildContentfulProjectDetailTextNodeDetail = 'project___childContentfulProjectDetailTextNode___detail',
  ProjectChildContentfulProjectDetailTextNodeId = 'project___childContentfulProjectDetailTextNode___id',
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 'project___childContentfulProjectDetailTextNode___internal___content',
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 'project___childContentfulProjectDetailTextNode___internal___contentDigest',
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 'project___childContentfulProjectDetailTextNode___internal___description',
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 'project___childContentfulProjectDetailTextNode___internal___fieldOwners',
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 'project___childContentfulProjectDetailTextNode___internal___ignoreType',
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 'project___childContentfulProjectDetailTextNode___internal___mediaType',
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 'project___childContentfulProjectDetailTextNode___internal___owner',
  ProjectChildContentfulProjectDetailTextNodeInternalType = 'project___childContentfulProjectDetailTextNode___internal___type',
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 'project___childContentfulProjectDetailTextNode___parent___children',
  ProjectChildContentfulProjectDetailTextNodeParentId = 'project___childContentfulProjectDetailTextNode___parent___id',
  ProjectChildContentfulProjectDetailTextNodeSysType = 'project___childContentfulProjectDetailTextNode___sys___type',
  ProjectChildren = 'project___children',
  ProjectChildrenContentfulProjectDetailTextNode = 'project___childrenContentfulProjectDetailTextNode',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___children',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerpt',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___excerptAst',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___headings',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___html',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___htmlAst',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkId = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___id',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___rawMarkdownBody',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___tableOfContents',
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 'project___childrenContentfulProjectDetailTextNode___childMarkdownRemark___timeToRead',
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 'project___childrenContentfulProjectDetailTextNode___children',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___children',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerpt',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___excerptAst',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___headings',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___html',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___htmlAst',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___id',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___rawMarkdownBody',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___tableOfContents',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 'project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark___timeToRead',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 'project___childrenContentfulProjectDetailTextNode___children___children',
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 'project___childrenContentfulProjectDetailTextNode___children___id',
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 'project___childrenContentfulProjectDetailTextNode___detail',
  ProjectChildrenContentfulProjectDetailTextNodeId = 'project___childrenContentfulProjectDetailTextNode___id',
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 'project___childrenContentfulProjectDetailTextNode___internal___content',
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 'project___childrenContentfulProjectDetailTextNode___internal___contentDigest',
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 'project___childrenContentfulProjectDetailTextNode___internal___description',
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 'project___childrenContentfulProjectDetailTextNode___internal___fieldOwners',
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 'project___childrenContentfulProjectDetailTextNode___internal___ignoreType',
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 'project___childrenContentfulProjectDetailTextNode___internal___mediaType',
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 'project___childrenContentfulProjectDetailTextNode___internal___owner',
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 'project___childrenContentfulProjectDetailTextNode___internal___type',
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 'project___childrenContentfulProjectDetailTextNode___parent___children',
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 'project___childrenContentfulProjectDetailTextNode___parent___id',
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 'project___childrenContentfulProjectDetailTextNode___sys___type',
  ProjectChildrenChildren = 'project___children___children',
  ProjectChildrenChildrenChildren = 'project___children___children___children',
  ProjectChildrenChildrenId = 'project___children___children___id',
  ProjectChildrenId = 'project___children___id',
  ProjectChildrenInternalContent = 'project___children___internal___content',
  ProjectChildrenInternalContentDigest = 'project___children___internal___contentDigest',
  ProjectChildrenInternalDescription = 'project___children___internal___description',
  ProjectChildrenInternalFieldOwners = 'project___children___internal___fieldOwners',
  ProjectChildrenInternalIgnoreType = 'project___children___internal___ignoreType',
  ProjectChildrenInternalMediaType = 'project___children___internal___mediaType',
  ProjectChildrenInternalOwner = 'project___children___internal___owner',
  ProjectChildrenInternalType = 'project___children___internal___type',
  ProjectChildrenParentChildren = 'project___children___parent___children',
  ProjectChildrenParentId = 'project___children___parent___id',
  ProjectContentfulId = 'project___contentful_id',
  ProjectCreatedAt = 'project___createdAt',
  ProjectDetailChildMarkdownRemarkChildren = 'project___detail___childMarkdownRemark___children',
  ProjectDetailChildMarkdownRemarkExcerpt = 'project___detail___childMarkdownRemark___excerpt',
  ProjectDetailChildMarkdownRemarkExcerptAst = 'project___detail___childMarkdownRemark___excerptAst',
  ProjectDetailChildMarkdownRemarkHeadings = 'project___detail___childMarkdownRemark___headings',
  ProjectDetailChildMarkdownRemarkHtml = 'project___detail___childMarkdownRemark___html',
  ProjectDetailChildMarkdownRemarkHtmlAst = 'project___detail___childMarkdownRemark___htmlAst',
  ProjectDetailChildMarkdownRemarkId = 'project___detail___childMarkdownRemark___id',
  ProjectDetailChildMarkdownRemarkRawMarkdownBody = 'project___detail___childMarkdownRemark___rawMarkdownBody',
  ProjectDetailChildMarkdownRemarkTableOfContents = 'project___detail___childMarkdownRemark___tableOfContents',
  ProjectDetailChildMarkdownRemarkTimeToRead = 'project___detail___childMarkdownRemark___timeToRead',
  ProjectDetailChildren = 'project___detail___children',
  ProjectDetailChildrenMarkdownRemark = 'project___detail___childrenMarkdownRemark',
  ProjectDetailChildrenMarkdownRemarkChildren = 'project___detail___childrenMarkdownRemark___children',
  ProjectDetailChildrenMarkdownRemarkExcerpt = 'project___detail___childrenMarkdownRemark___excerpt',
  ProjectDetailChildrenMarkdownRemarkExcerptAst = 'project___detail___childrenMarkdownRemark___excerptAst',
  ProjectDetailChildrenMarkdownRemarkHeadings = 'project___detail___childrenMarkdownRemark___headings',
  ProjectDetailChildrenMarkdownRemarkHtml = 'project___detail___childrenMarkdownRemark___html',
  ProjectDetailChildrenMarkdownRemarkHtmlAst = 'project___detail___childrenMarkdownRemark___htmlAst',
  ProjectDetailChildrenMarkdownRemarkId = 'project___detail___childrenMarkdownRemark___id',
  ProjectDetailChildrenMarkdownRemarkRawMarkdownBody = 'project___detail___childrenMarkdownRemark___rawMarkdownBody',
  ProjectDetailChildrenMarkdownRemarkTableOfContents = 'project___detail___childrenMarkdownRemark___tableOfContents',
  ProjectDetailChildrenMarkdownRemarkTimeToRead = 'project___detail___childrenMarkdownRemark___timeToRead',
  ProjectDetailChildrenChildren = 'project___detail___children___children',
  ProjectDetailChildrenId = 'project___detail___children___id',
  ProjectDetailDetail = 'project___detail___detail',
  ProjectDetailId = 'project___detail___id',
  ProjectDetailInternalContent = 'project___detail___internal___content',
  ProjectDetailInternalContentDigest = 'project___detail___internal___contentDigest',
  ProjectDetailInternalDescription = 'project___detail___internal___description',
  ProjectDetailInternalFieldOwners = 'project___detail___internal___fieldOwners',
  ProjectDetailInternalIgnoreType = 'project___detail___internal___ignoreType',
  ProjectDetailInternalMediaType = 'project___detail___internal___mediaType',
  ProjectDetailInternalOwner = 'project___detail___internal___owner',
  ProjectDetailInternalType = 'project___detail___internal___type',
  ProjectDetailParentChildren = 'project___detail___parent___children',
  ProjectDetailParentId = 'project___detail___parent___id',
  ProjectDetailSysType = 'project___detail___sys___type',
  ProjectEndDate = 'project___endDate',
  ProjectIconChildContentfulIconSvgTextNodeChildren = 'project___icon___childContentfulIconSvgTextNode___children',
  ProjectIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'project___icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  ProjectIconChildContentfulIconSvgTextNodeId = 'project___icon___childContentfulIconSvgTextNode___id',
  ProjectIconChildContentfulIconSvgTextNodeSvg = 'project___icon___childContentfulIconSvgTextNode___svg',
  ProjectIconChildren = 'project___icon___children',
  ProjectIconChildrenContentfulIconSvgTextNode = 'project___icon___childrenContentfulIconSvgTextNode',
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 'project___icon___childrenContentfulIconSvgTextNode___children',
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'project___icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  ProjectIconChildrenContentfulIconSvgTextNodeId = 'project___icon___childrenContentfulIconSvgTextNode___id',
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 'project___icon___childrenContentfulIconSvgTextNode___svg',
  ProjectIconChildrenChildren = 'project___icon___children___children',
  ProjectIconChildrenId = 'project___icon___children___id',
  ProjectIconContact = 'project___icon___contact',
  ProjectIconContactChildren = 'project___icon___contact___children',
  ProjectIconContactContentfulId = 'project___icon___contact___contentful_id',
  ProjectIconContactCreatedAt = 'project___icon___contact___createdAt',
  ProjectIconContactHref = 'project___icon___contact___href',
  ProjectIconContactId = 'project___icon___contact___id',
  ProjectIconContactName = 'project___icon___contact___name',
  ProjectIconContactNodeLocale = 'project___icon___contact___node_locale',
  ProjectIconContactSortKey = 'project___icon___contact___sortKey',
  ProjectIconContactSpaceId = 'project___icon___contact___spaceId',
  ProjectIconContactSubName = 'project___icon___contact___subName',
  ProjectIconContactUpdatedAt = 'project___icon___contact___updatedAt',
  ProjectIconContentfulId = 'project___icon___contentful_id',
  ProjectIconCreatedAt = 'project___icon___createdAt',
  ProjectIconHistory = 'project___icon___history',
  ProjectIconHistoryChildren = 'project___icon___history___children',
  ProjectIconHistoryContentfulId = 'project___icon___history___contentful_id',
  ProjectIconHistoryCreatedAt = 'project___icon___history___createdAt',
  ProjectIconHistoryDate = 'project___icon___history___date',
  ProjectIconHistoryId = 'project___icon___history___id',
  ProjectIconHistoryName = 'project___icon___history___name',
  ProjectIconHistoryNodeLocale = 'project___icon___history___node_locale',
  ProjectIconHistorySpaceId = 'project___icon___history___spaceId',
  ProjectIconHistorySubName = 'project___icon___history___subName',
  ProjectIconHistoryUpdatedAt = 'project___icon___history___updatedAt',
  ProjectIconId = 'project___icon___id',
  ProjectIconInternalContent = 'project___icon___internal___content',
  ProjectIconInternalContentDigest = 'project___icon___internal___contentDigest',
  ProjectIconInternalDescription = 'project___icon___internal___description',
  ProjectIconInternalFieldOwners = 'project___icon___internal___fieldOwners',
  ProjectIconInternalIgnoreType = 'project___icon___internal___ignoreType',
  ProjectIconInternalMediaType = 'project___icon___internal___mediaType',
  ProjectIconInternalOwner = 'project___icon___internal___owner',
  ProjectIconInternalType = 'project___icon___internal___type',
  ProjectIconName = 'project___icon___name',
  ProjectIconNodeLocale = 'project___icon___node_locale',
  ProjectIconOss = 'project___icon___oss',
  ProjectIconOssChildren = 'project___icon___oss___children',
  ProjectIconOssChildrenContentfulOssDetailTextNode = 'project___icon___oss___childrenContentfulOssDetailTextNode',
  ProjectIconOssContentfulId = 'project___icon___oss___contentful_id',
  ProjectIconOssCreatedAt = 'project___icon___oss___createdAt',
  ProjectIconOssHref = 'project___icon___oss___href',
  ProjectIconOssId = 'project___icon___oss___id',
  ProjectIconOssName = 'project___icon___oss___name',
  ProjectIconOssNodeLocale = 'project___icon___oss___node_locale',
  ProjectIconOssSpaceId = 'project___icon___oss___spaceId',
  ProjectIconOssStartDate = 'project___icon___oss___startDate',
  ProjectIconOssSubName = 'project___icon___oss___subName',
  ProjectIconOssTags = 'project___icon___oss___tags',
  ProjectIconOssUpdatedAt = 'project___icon___oss___updatedAt',
  ProjectIconParentChildren = 'project___icon___parent___children',
  ProjectIconParentId = 'project___icon___parent___id',
  ProjectIconProject = 'project___icon___project',
  ProjectIconProjectChildren = 'project___icon___project___children',
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 'project___icon___project___childrenContentfulProjectDetailTextNode',
  ProjectIconProjectContentfulId = 'project___icon___project___contentful_id',
  ProjectIconProjectCreatedAt = 'project___icon___project___createdAt',
  ProjectIconProjectEndDate = 'project___icon___project___endDate',
  ProjectIconProjectId = 'project___icon___project___id',
  ProjectIconProjectName = 'project___icon___project___name',
  ProjectIconProjectNodeLocale = 'project___icon___project___node_locale',
  ProjectIconProjectSpaceId = 'project___icon___project___spaceId',
  ProjectIconProjectStartDate = 'project___icon___project___startDate',
  ProjectIconProjectSubName = 'project___icon___project___subName',
  ProjectIconProjectTags = 'project___icon___project___tags',
  ProjectIconProjectUpdatedAt = 'project___icon___project___updatedAt',
  ProjectIconSpaceId = 'project___icon___spaceId',
  ProjectIconSvgChildren = 'project___icon___svg___children',
  ProjectIconSvgChildrenMarkdownRemark = 'project___icon___svg___childrenMarkdownRemark',
  ProjectIconSvgId = 'project___icon___svg___id',
  ProjectIconSvgSvg = 'project___icon___svg___svg',
  ProjectIconSysRevision = 'project___icon___sys___revision',
  ProjectIconSysType = 'project___icon___sys___type',
  ProjectIconUpdatedAt = 'project___icon___updatedAt',
  ProjectIconWhatICanDo = 'project___icon___what_i_can_do',
  ProjectIconWhatICanDoChildren = 'project___icon___what_i_can_do___children',
  ProjectIconWhatICanDoContentfulId = 'project___icon___what_i_can_do___contentful_id',
  ProjectIconWhatICanDoCreatedAt = 'project___icon___what_i_can_do___createdAt',
  ProjectIconWhatICanDoId = 'project___icon___what_i_can_do___id',
  ProjectIconWhatICanDoName = 'project___icon___what_i_can_do___name',
  ProjectIconWhatICanDoNodeLocale = 'project___icon___what_i_can_do___node_locale',
  ProjectIconWhatICanDoSortKey = 'project___icon___what_i_can_do___sortKey',
  ProjectIconWhatICanDoSpaceId = 'project___icon___what_i_can_do___spaceId',
  ProjectIconWhatICanDoSubName = 'project___icon___what_i_can_do___subName',
  ProjectIconWhatICanDoUpdatedAt = 'project___icon___what_i_can_do___updatedAt',
  ProjectId = 'project___id',
  ProjectInternalContent = 'project___internal___content',
  ProjectInternalContentDigest = 'project___internal___contentDigest',
  ProjectInternalDescription = 'project___internal___description',
  ProjectInternalFieldOwners = 'project___internal___fieldOwners',
  ProjectInternalIgnoreType = 'project___internal___ignoreType',
  ProjectInternalMediaType = 'project___internal___mediaType',
  ProjectInternalOwner = 'project___internal___owner',
  ProjectInternalType = 'project___internal___type',
  ProjectName = 'project___name',
  ProjectNodeLocale = 'project___node_locale',
  ProjectParentChildren = 'project___parent___children',
  ProjectParentChildrenChildren = 'project___parent___children___children',
  ProjectParentChildrenId = 'project___parent___children___id',
  ProjectParentId = 'project___parent___id',
  ProjectParentInternalContent = 'project___parent___internal___content',
  ProjectParentInternalContentDigest = 'project___parent___internal___contentDigest',
  ProjectParentInternalDescription = 'project___parent___internal___description',
  ProjectParentInternalFieldOwners = 'project___parent___internal___fieldOwners',
  ProjectParentInternalIgnoreType = 'project___parent___internal___ignoreType',
  ProjectParentInternalMediaType = 'project___parent___internal___mediaType',
  ProjectParentInternalOwner = 'project___parent___internal___owner',
  ProjectParentInternalType = 'project___parent___internal___type',
  ProjectParentParentChildren = 'project___parent___parent___children',
  ProjectParentParentId = 'project___parent___parent___id',
  ProjectSpaceId = 'project___spaceId',
  ProjectStartDate = 'project___startDate',
  ProjectSubName = 'project___subName',
  ProjectSysRevision = 'project___sys___revision',
  ProjectSysType = 'project___sys___type',
  ProjectTags = 'project___tags',
  ProjectTagsChildren = 'project___tags___children',
  ProjectTagsChildrenChildren = 'project___tags___children___children',
  ProjectTagsChildrenId = 'project___tags___children___id',
  ProjectTagsContentfulId = 'project___tags___contentful_id',
  ProjectTagsCreatedAt = 'project___tags___createdAt',
  ProjectTagsId = 'project___tags___id',
  ProjectTagsInternalContent = 'project___tags___internal___content',
  ProjectTagsInternalContentDigest = 'project___tags___internal___contentDigest',
  ProjectTagsInternalDescription = 'project___tags___internal___description',
  ProjectTagsInternalFieldOwners = 'project___tags___internal___fieldOwners',
  ProjectTagsInternalIgnoreType = 'project___tags___internal___ignoreType',
  ProjectTagsInternalMediaType = 'project___tags___internal___mediaType',
  ProjectTagsInternalOwner = 'project___tags___internal___owner',
  ProjectTagsInternalType = 'project___tags___internal___type',
  ProjectTagsLevel = 'project___tags___level',
  ProjectTagsName = 'project___tags___name',
  ProjectTagsNodeLocale = 'project___tags___node_locale',
  ProjectTagsOss = 'project___tags___oss',
  ProjectTagsOssChildren = 'project___tags___oss___children',
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 'project___tags___oss___childrenContentfulOssDetailTextNode',
  ProjectTagsOssContentfulId = 'project___tags___oss___contentful_id',
  ProjectTagsOssCreatedAt = 'project___tags___oss___createdAt',
  ProjectTagsOssHref = 'project___tags___oss___href',
  ProjectTagsOssId = 'project___tags___oss___id',
  ProjectTagsOssName = 'project___tags___oss___name',
  ProjectTagsOssNodeLocale = 'project___tags___oss___node_locale',
  ProjectTagsOssSpaceId = 'project___tags___oss___spaceId',
  ProjectTagsOssStartDate = 'project___tags___oss___startDate',
  ProjectTagsOssSubName = 'project___tags___oss___subName',
  ProjectTagsOssTags = 'project___tags___oss___tags',
  ProjectTagsOssUpdatedAt = 'project___tags___oss___updatedAt',
  ProjectTagsParentChildren = 'project___tags___parent___children',
  ProjectTagsParentId = 'project___tags___parent___id',
  ProjectTagsProject = 'project___tags___project',
  ProjectTagsProjectChildren = 'project___tags___project___children',
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 'project___tags___project___childrenContentfulProjectDetailTextNode',
  ProjectTagsProjectContentfulId = 'project___tags___project___contentful_id',
  ProjectTagsProjectCreatedAt = 'project___tags___project___createdAt',
  ProjectTagsProjectEndDate = 'project___tags___project___endDate',
  ProjectTagsProjectId = 'project___tags___project___id',
  ProjectTagsProjectName = 'project___tags___project___name',
  ProjectTagsProjectNodeLocale = 'project___tags___project___node_locale',
  ProjectTagsProjectSpaceId = 'project___tags___project___spaceId',
  ProjectTagsProjectStartDate = 'project___tags___project___startDate',
  ProjectTagsProjectSubName = 'project___tags___project___subName',
  ProjectTagsProjectTags = 'project___tags___project___tags',
  ProjectTagsProjectUpdatedAt = 'project___tags___project___updatedAt',
  ProjectTagsSkillMap = 'project___tags___skill_map',
  ProjectTagsSkillMapChildren = 'project___tags___skill_map___children',
  ProjectTagsSkillMapContentfulId = 'project___tags___skill_map___contentful_id',
  ProjectTagsSkillMapCreatedAt = 'project___tags___skill_map___createdAt',
  ProjectTagsSkillMapExpanded = 'project___tags___skill_map___expanded',
  ProjectTagsSkillMapId = 'project___tags___skill_map___id',
  ProjectTagsSkillMapName = 'project___tags___skill_map___name',
  ProjectTagsSkillMapNodeLocale = 'project___tags___skill_map___node_locale',
  ProjectTagsSkillMapSkills = 'project___tags___skill_map___skills',
  ProjectTagsSkillMapSortKey = 'project___tags___skill_map___sortKey',
  ProjectTagsSkillMapSpaceId = 'project___tags___skill_map___spaceId',
  ProjectTagsSkillMapUpdatedAt = 'project___tags___skill_map___updatedAt',
  ProjectTagsSpaceId = 'project___tags___spaceId',
  ProjectTagsSysRevision = 'project___tags___sys___revision',
  ProjectTagsSysType = 'project___tags___sys___type',
  ProjectTagsUpdatedAt = 'project___tags___updatedAt',
  ProjectUpdatedAt = 'project___updatedAt',
  SkillMap = 'skill_map',
  SkillMapChildren = 'skill_map___children',
  SkillMapChildrenChildren = 'skill_map___children___children',
  SkillMapChildrenChildrenChildren = 'skill_map___children___children___children',
  SkillMapChildrenChildrenId = 'skill_map___children___children___id',
  SkillMapChildrenId = 'skill_map___children___id',
  SkillMapChildrenInternalContent = 'skill_map___children___internal___content',
  SkillMapChildrenInternalContentDigest = 'skill_map___children___internal___contentDigest',
  SkillMapChildrenInternalDescription = 'skill_map___children___internal___description',
  SkillMapChildrenInternalFieldOwners = 'skill_map___children___internal___fieldOwners',
  SkillMapChildrenInternalIgnoreType = 'skill_map___children___internal___ignoreType',
  SkillMapChildrenInternalMediaType = 'skill_map___children___internal___mediaType',
  SkillMapChildrenInternalOwner = 'skill_map___children___internal___owner',
  SkillMapChildrenInternalType = 'skill_map___children___internal___type',
  SkillMapChildrenParentChildren = 'skill_map___children___parent___children',
  SkillMapChildrenParentId = 'skill_map___children___parent___id',
  SkillMapContentfulId = 'skill_map___contentful_id',
  SkillMapCreatedAt = 'skill_map___createdAt',
  SkillMapExpanded = 'skill_map___expanded',
  SkillMapId = 'skill_map___id',
  SkillMapInternalContent = 'skill_map___internal___content',
  SkillMapInternalContentDigest = 'skill_map___internal___contentDigest',
  SkillMapInternalDescription = 'skill_map___internal___description',
  SkillMapInternalFieldOwners = 'skill_map___internal___fieldOwners',
  SkillMapInternalIgnoreType = 'skill_map___internal___ignoreType',
  SkillMapInternalMediaType = 'skill_map___internal___mediaType',
  SkillMapInternalOwner = 'skill_map___internal___owner',
  SkillMapInternalType = 'skill_map___internal___type',
  SkillMapName = 'skill_map___name',
  SkillMapNodeLocale = 'skill_map___node_locale',
  SkillMapParentChildren = 'skill_map___parent___children',
  SkillMapParentChildrenChildren = 'skill_map___parent___children___children',
  SkillMapParentChildrenId = 'skill_map___parent___children___id',
  SkillMapParentId = 'skill_map___parent___id',
  SkillMapParentInternalContent = 'skill_map___parent___internal___content',
  SkillMapParentInternalContentDigest = 'skill_map___parent___internal___contentDigest',
  SkillMapParentInternalDescription = 'skill_map___parent___internal___description',
  SkillMapParentInternalFieldOwners = 'skill_map___parent___internal___fieldOwners',
  SkillMapParentInternalIgnoreType = 'skill_map___parent___internal___ignoreType',
  SkillMapParentInternalMediaType = 'skill_map___parent___internal___mediaType',
  SkillMapParentInternalOwner = 'skill_map___parent___internal___owner',
  SkillMapParentInternalType = 'skill_map___parent___internal___type',
  SkillMapParentParentChildren = 'skill_map___parent___parent___children',
  SkillMapParentParentId = 'skill_map___parent___parent___id',
  SkillMapSkills = 'skill_map___skills',
  SkillMapSkillsChildren = 'skill_map___skills___children',
  SkillMapSkillsChildrenChildren = 'skill_map___skills___children___children',
  SkillMapSkillsChildrenId = 'skill_map___skills___children___id',
  SkillMapSkillsContentfulId = 'skill_map___skills___contentful_id',
  SkillMapSkillsCreatedAt = 'skill_map___skills___createdAt',
  SkillMapSkillsId = 'skill_map___skills___id',
  SkillMapSkillsInternalContent = 'skill_map___skills___internal___content',
  SkillMapSkillsInternalContentDigest = 'skill_map___skills___internal___contentDigest',
  SkillMapSkillsInternalDescription = 'skill_map___skills___internal___description',
  SkillMapSkillsInternalFieldOwners = 'skill_map___skills___internal___fieldOwners',
  SkillMapSkillsInternalIgnoreType = 'skill_map___skills___internal___ignoreType',
  SkillMapSkillsInternalMediaType = 'skill_map___skills___internal___mediaType',
  SkillMapSkillsInternalOwner = 'skill_map___skills___internal___owner',
  SkillMapSkillsInternalType = 'skill_map___skills___internal___type',
  SkillMapSkillsLevel = 'skill_map___skills___level',
  SkillMapSkillsName = 'skill_map___skills___name',
  SkillMapSkillsNodeLocale = 'skill_map___skills___node_locale',
  SkillMapSkillsOss = 'skill_map___skills___oss',
  SkillMapSkillsOssChildren = 'skill_map___skills___oss___children',
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 'skill_map___skills___oss___childrenContentfulOssDetailTextNode',
  SkillMapSkillsOssContentfulId = 'skill_map___skills___oss___contentful_id',
  SkillMapSkillsOssCreatedAt = 'skill_map___skills___oss___createdAt',
  SkillMapSkillsOssHref = 'skill_map___skills___oss___href',
  SkillMapSkillsOssId = 'skill_map___skills___oss___id',
  SkillMapSkillsOssName = 'skill_map___skills___oss___name',
  SkillMapSkillsOssNodeLocale = 'skill_map___skills___oss___node_locale',
  SkillMapSkillsOssSpaceId = 'skill_map___skills___oss___spaceId',
  SkillMapSkillsOssStartDate = 'skill_map___skills___oss___startDate',
  SkillMapSkillsOssSubName = 'skill_map___skills___oss___subName',
  SkillMapSkillsOssTags = 'skill_map___skills___oss___tags',
  SkillMapSkillsOssUpdatedAt = 'skill_map___skills___oss___updatedAt',
  SkillMapSkillsParentChildren = 'skill_map___skills___parent___children',
  SkillMapSkillsParentId = 'skill_map___skills___parent___id',
  SkillMapSkillsProject = 'skill_map___skills___project',
  SkillMapSkillsProjectChildren = 'skill_map___skills___project___children',
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 'skill_map___skills___project___childrenContentfulProjectDetailTextNode',
  SkillMapSkillsProjectContentfulId = 'skill_map___skills___project___contentful_id',
  SkillMapSkillsProjectCreatedAt = 'skill_map___skills___project___createdAt',
  SkillMapSkillsProjectEndDate = 'skill_map___skills___project___endDate',
  SkillMapSkillsProjectId = 'skill_map___skills___project___id',
  SkillMapSkillsProjectName = 'skill_map___skills___project___name',
  SkillMapSkillsProjectNodeLocale = 'skill_map___skills___project___node_locale',
  SkillMapSkillsProjectSpaceId = 'skill_map___skills___project___spaceId',
  SkillMapSkillsProjectStartDate = 'skill_map___skills___project___startDate',
  SkillMapSkillsProjectSubName = 'skill_map___skills___project___subName',
  SkillMapSkillsProjectTags = 'skill_map___skills___project___tags',
  SkillMapSkillsProjectUpdatedAt = 'skill_map___skills___project___updatedAt',
  SkillMapSkillsSkillMap = 'skill_map___skills___skill_map',
  SkillMapSkillsSkillMapChildren = 'skill_map___skills___skill_map___children',
  SkillMapSkillsSkillMapContentfulId = 'skill_map___skills___skill_map___contentful_id',
  SkillMapSkillsSkillMapCreatedAt = 'skill_map___skills___skill_map___createdAt',
  SkillMapSkillsSkillMapExpanded = 'skill_map___skills___skill_map___expanded',
  SkillMapSkillsSkillMapId = 'skill_map___skills___skill_map___id',
  SkillMapSkillsSkillMapName = 'skill_map___skills___skill_map___name',
  SkillMapSkillsSkillMapNodeLocale = 'skill_map___skills___skill_map___node_locale',
  SkillMapSkillsSkillMapSkills = 'skill_map___skills___skill_map___skills',
  SkillMapSkillsSkillMapSortKey = 'skill_map___skills___skill_map___sortKey',
  SkillMapSkillsSkillMapSpaceId = 'skill_map___skills___skill_map___spaceId',
  SkillMapSkillsSkillMapUpdatedAt = 'skill_map___skills___skill_map___updatedAt',
  SkillMapSkillsSpaceId = 'skill_map___skills___spaceId',
  SkillMapSkillsSysRevision = 'skill_map___skills___sys___revision',
  SkillMapSkillsSysType = 'skill_map___skills___sys___type',
  SkillMapSkillsUpdatedAt = 'skill_map___skills___updatedAt',
  SkillMapSortKey = 'skill_map___sortKey',
  SkillMapSpaceId = 'skill_map___spaceId',
  SkillMapSysRevision = 'skill_map___sys___revision',
  SkillMapSysType = 'skill_map___sys___type',
  SkillMapUpdatedAt = 'skill_map___updatedAt',
  SpaceId = 'spaceId',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulTagFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  level?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  oss?: InputMaybe<ContentfulOssFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  project?: InputMaybe<ContentfulProjectFilterListInput>;
  skill_map?: InputMaybe<ContentfulSkillMapFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulTagSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulTagFilterListInput = {
  elemMatch?: InputMaybe<ContentfulTagFilterInput>;
};

export type ContentfulTagGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulTagEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulTagGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulTagGroupConnectionDistinctArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagGroupConnectionGroupArgs = {
  field: ContentfulTagFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulTagGroupConnectionMaxArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagGroupConnectionMinArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagGroupConnectionSumArgs = {
  field: ContentfulTagFieldsEnum;
};

export type ContentfulTagSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulTagFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulTagSys = {
  contentType?: Maybe<ContentfulTagSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulTagSysContentType = {
  sys?: Maybe<ContentfulTagSysContentTypeSys>;
};

export type ContentfulTagSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulTagSysContentTypeSysFilterInput>;
};

export type ContentfulTagSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulTagSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulTagSysFilterInput = {
  contentType?: InputMaybe<ContentfulTagSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulWhatICanDo = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  icon?: Maybe<ContentfulIcon>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  sortKey?: Maybe<Scalars['Int']>;
  spaceId?: Maybe<Scalars['String']>;
  subName?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulWhatICanDoSys>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ContentfulWhatICanDoCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulWhatICanDoUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulWhatICanDoConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulWhatICanDoEdge>;
  group: Array<ContentfulWhatICanDoGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulWhatICanDo>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulWhatICanDoConnectionDistinctArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoConnectionGroupArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulWhatICanDoConnectionMaxArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoConnectionMinArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoConnectionSumArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};

export type ContentfulWhatICanDoEdge = {
  next?: Maybe<ContentfulWhatICanDo>;
  node: ContentfulWhatICanDo;
  previous?: Maybe<ContentfulWhatICanDo>;
};

export enum ContentfulWhatICanDoFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___children',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___headings',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___html',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___id',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'icon___childContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  IconChildContentfulIconSvgTextNodeChildren = 'icon___childContentfulIconSvgTextNode___children',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'icon___childContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  IconChildContentfulIconSvgTextNodeChildrenChildren = 'icon___childContentfulIconSvgTextNode___children___children',
  IconChildContentfulIconSvgTextNodeChildrenId = 'icon___childContentfulIconSvgTextNode___children___id',
  IconChildContentfulIconSvgTextNodeId = 'icon___childContentfulIconSvgTextNode___id',
  IconChildContentfulIconSvgTextNodeInternalContent = 'icon___childContentfulIconSvgTextNode___internal___content',
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 'icon___childContentfulIconSvgTextNode___internal___contentDigest',
  IconChildContentfulIconSvgTextNodeInternalDescription = 'icon___childContentfulIconSvgTextNode___internal___description',
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 'icon___childContentfulIconSvgTextNode___internal___fieldOwners',
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 'icon___childContentfulIconSvgTextNode___internal___ignoreType',
  IconChildContentfulIconSvgTextNodeInternalMediaType = 'icon___childContentfulIconSvgTextNode___internal___mediaType',
  IconChildContentfulIconSvgTextNodeInternalOwner = 'icon___childContentfulIconSvgTextNode___internal___owner',
  IconChildContentfulIconSvgTextNodeInternalType = 'icon___childContentfulIconSvgTextNode___internal___type',
  IconChildContentfulIconSvgTextNodeParentChildren = 'icon___childContentfulIconSvgTextNode___parent___children',
  IconChildContentfulIconSvgTextNodeParentId = 'icon___childContentfulIconSvgTextNode___parent___id',
  IconChildContentfulIconSvgTextNodeSvg = 'icon___childContentfulIconSvgTextNode___svg',
  IconChildContentfulIconSvgTextNodeSysType = 'icon___childContentfulIconSvgTextNode___sys___type',
  IconChildren = 'icon___children',
  IconChildrenContentfulIconSvgTextNode = 'icon___childrenContentfulIconSvgTextNode',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___children',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerpt',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___excerptAst',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___headings',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___html',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___htmlAst',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___id',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___rawMarkdownBody',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___tableOfContents',
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 'icon___childrenContentfulIconSvgTextNode___childMarkdownRemark___timeToRead',
  IconChildrenContentfulIconSvgTextNodeChildren = 'icon___childrenContentfulIconSvgTextNode___children',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___children',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerpt',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___excerptAst',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___headings',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___html',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___htmlAst',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___id',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___rawMarkdownBody',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___tableOfContents',
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 'icon___childrenContentfulIconSvgTextNode___childrenMarkdownRemark___timeToRead',
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 'icon___childrenContentfulIconSvgTextNode___children___children',
  IconChildrenContentfulIconSvgTextNodeChildrenId = 'icon___childrenContentfulIconSvgTextNode___children___id',
  IconChildrenContentfulIconSvgTextNodeId = 'icon___childrenContentfulIconSvgTextNode___id',
  IconChildrenContentfulIconSvgTextNodeInternalContent = 'icon___childrenContentfulIconSvgTextNode___internal___content',
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 'icon___childrenContentfulIconSvgTextNode___internal___contentDigest',
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 'icon___childrenContentfulIconSvgTextNode___internal___description',
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 'icon___childrenContentfulIconSvgTextNode___internal___fieldOwners',
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 'icon___childrenContentfulIconSvgTextNode___internal___ignoreType',
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 'icon___childrenContentfulIconSvgTextNode___internal___mediaType',
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 'icon___childrenContentfulIconSvgTextNode___internal___owner',
  IconChildrenContentfulIconSvgTextNodeInternalType = 'icon___childrenContentfulIconSvgTextNode___internal___type',
  IconChildrenContentfulIconSvgTextNodeParentChildren = 'icon___childrenContentfulIconSvgTextNode___parent___children',
  IconChildrenContentfulIconSvgTextNodeParentId = 'icon___childrenContentfulIconSvgTextNode___parent___id',
  IconChildrenContentfulIconSvgTextNodeSvg = 'icon___childrenContentfulIconSvgTextNode___svg',
  IconChildrenContentfulIconSvgTextNodeSysType = 'icon___childrenContentfulIconSvgTextNode___sys___type',
  IconChildrenChildren = 'icon___children___children',
  IconChildrenChildrenChildren = 'icon___children___children___children',
  IconChildrenChildrenId = 'icon___children___children___id',
  IconChildrenId = 'icon___children___id',
  IconChildrenInternalContent = 'icon___children___internal___content',
  IconChildrenInternalContentDigest = 'icon___children___internal___contentDigest',
  IconChildrenInternalDescription = 'icon___children___internal___description',
  IconChildrenInternalFieldOwners = 'icon___children___internal___fieldOwners',
  IconChildrenInternalIgnoreType = 'icon___children___internal___ignoreType',
  IconChildrenInternalMediaType = 'icon___children___internal___mediaType',
  IconChildrenInternalOwner = 'icon___children___internal___owner',
  IconChildrenInternalType = 'icon___children___internal___type',
  IconChildrenParentChildren = 'icon___children___parent___children',
  IconChildrenParentId = 'icon___children___parent___id',
  IconContact = 'icon___contact',
  IconContactChildren = 'icon___contact___children',
  IconContactChildrenChildren = 'icon___contact___children___children',
  IconContactChildrenId = 'icon___contact___children___id',
  IconContactContentfulId = 'icon___contact___contentful_id',
  IconContactCreatedAt = 'icon___contact___createdAt',
  IconContactHref = 'icon___contact___href',
  IconContactIconSvgDarkChildren = 'icon___contact___iconSvgDark___children',
  IconContactIconSvgDarkContentfulId = 'icon___contact___iconSvgDark___contentful_id',
  IconContactIconSvgDarkCreatedAt = 'icon___contact___iconSvgDark___createdAt',
  IconContactIconSvgDarkDescription = 'icon___contact___iconSvgDark___description',
  IconContactIconSvgDarkGatsbyImageData = 'icon___contact___iconSvgDark___gatsbyImageData',
  IconContactIconSvgDarkId = 'icon___contact___iconSvgDark___id',
  IconContactIconSvgDarkNodeLocale = 'icon___contact___iconSvgDark___node_locale',
  IconContactIconSvgDarkSpaceId = 'icon___contact___iconSvgDark___spaceId',
  IconContactIconSvgDarkTitle = 'icon___contact___iconSvgDark___title',
  IconContactIconSvgDarkUpdatedAt = 'icon___contact___iconSvgDark___updatedAt',
  IconContactIconSvgLightChildren = 'icon___contact___iconSvgLight___children',
  IconContactIconSvgLightContentfulId = 'icon___contact___iconSvgLight___contentful_id',
  IconContactIconSvgLightCreatedAt = 'icon___contact___iconSvgLight___createdAt',
  IconContactIconSvgLightDescription = 'icon___contact___iconSvgLight___description',
  IconContactIconSvgLightGatsbyImageData = 'icon___contact___iconSvgLight___gatsbyImageData',
  IconContactIconSvgLightId = 'icon___contact___iconSvgLight___id',
  IconContactIconSvgLightNodeLocale = 'icon___contact___iconSvgLight___node_locale',
  IconContactIconSvgLightSpaceId = 'icon___contact___iconSvgLight___spaceId',
  IconContactIconSvgLightTitle = 'icon___contact___iconSvgLight___title',
  IconContactIconSvgLightUpdatedAt = 'icon___contact___iconSvgLight___updatedAt',
  IconContactIconChildren = 'icon___contact___icon___children',
  IconContactIconChildrenContentfulIconSvgTextNode = 'icon___contact___icon___childrenContentfulIconSvgTextNode',
  IconContactIconContact = 'icon___contact___icon___contact',
  IconContactIconContentfulId = 'icon___contact___icon___contentful_id',
  IconContactIconCreatedAt = 'icon___contact___icon___createdAt',
  IconContactIconHistory = 'icon___contact___icon___history',
  IconContactIconId = 'icon___contact___icon___id',
  IconContactIconName = 'icon___contact___icon___name',
  IconContactIconNodeLocale = 'icon___contact___icon___node_locale',
  IconContactIconOss = 'icon___contact___icon___oss',
  IconContactIconProject = 'icon___contact___icon___project',
  IconContactIconSpaceId = 'icon___contact___icon___spaceId',
  IconContactIconUpdatedAt = 'icon___contact___icon___updatedAt',
  IconContactIconWhatICanDo = 'icon___contact___icon___what_i_can_do',
  IconContactId = 'icon___contact___id',
  IconContactInternalContent = 'icon___contact___internal___content',
  IconContactInternalContentDigest = 'icon___contact___internal___contentDigest',
  IconContactInternalDescription = 'icon___contact___internal___description',
  IconContactInternalFieldOwners = 'icon___contact___internal___fieldOwners',
  IconContactInternalIgnoreType = 'icon___contact___internal___ignoreType',
  IconContactInternalMediaType = 'icon___contact___internal___mediaType',
  IconContactInternalOwner = 'icon___contact___internal___owner',
  IconContactInternalType = 'icon___contact___internal___type',
  IconContactName = 'icon___contact___name',
  IconContactNodeLocale = 'icon___contact___node_locale',
  IconContactParentChildren = 'icon___contact___parent___children',
  IconContactParentId = 'icon___contact___parent___id',
  IconContactSortKey = 'icon___contact___sortKey',
  IconContactSpaceId = 'icon___contact___spaceId',
  IconContactSubName = 'icon___contact___subName',
  IconContactSysRevision = 'icon___contact___sys___revision',
  IconContactSysType = 'icon___contact___sys___type',
  IconContactUpdatedAt = 'icon___contact___updatedAt',
  IconContentfulId = 'icon___contentful_id',
  IconCreatedAt = 'icon___createdAt',
  IconHistory = 'icon___history',
  IconHistoryChildren = 'icon___history___children',
  IconHistoryChildrenChildren = 'icon___history___children___children',
  IconHistoryChildrenId = 'icon___history___children___id',
  IconHistoryContentfulId = 'icon___history___contentful_id',
  IconHistoryCreatedAt = 'icon___history___createdAt',
  IconHistoryDate = 'icon___history___date',
  IconHistoryIconChildren = 'icon___history___icon___children',
  IconHistoryIconChildrenContentfulIconSvgTextNode = 'icon___history___icon___childrenContentfulIconSvgTextNode',
  IconHistoryIconContact = 'icon___history___icon___contact',
  IconHistoryIconContentfulId = 'icon___history___icon___contentful_id',
  IconHistoryIconCreatedAt = 'icon___history___icon___createdAt',
  IconHistoryIconHistory = 'icon___history___icon___history',
  IconHistoryIconId = 'icon___history___icon___id',
  IconHistoryIconName = 'icon___history___icon___name',
  IconHistoryIconNodeLocale = 'icon___history___icon___node_locale',
  IconHistoryIconOss = 'icon___history___icon___oss',
  IconHistoryIconProject = 'icon___history___icon___project',
  IconHistoryIconSpaceId = 'icon___history___icon___spaceId',
  IconHistoryIconUpdatedAt = 'icon___history___icon___updatedAt',
  IconHistoryIconWhatICanDo = 'icon___history___icon___what_i_can_do',
  IconHistoryId = 'icon___history___id',
  IconHistoryInternalContent = 'icon___history___internal___content',
  IconHistoryInternalContentDigest = 'icon___history___internal___contentDigest',
  IconHistoryInternalDescription = 'icon___history___internal___description',
  IconHistoryInternalFieldOwners = 'icon___history___internal___fieldOwners',
  IconHistoryInternalIgnoreType = 'icon___history___internal___ignoreType',
  IconHistoryInternalMediaType = 'icon___history___internal___mediaType',
  IconHistoryInternalOwner = 'icon___history___internal___owner',
  IconHistoryInternalType = 'icon___history___internal___type',
  IconHistoryName = 'icon___history___name',
  IconHistoryNodeLocale = 'icon___history___node_locale',
  IconHistoryParentChildren = 'icon___history___parent___children',
  IconHistoryParentId = 'icon___history___parent___id',
  IconHistorySpaceId = 'icon___history___spaceId',
  IconHistorySubName = 'icon___history___subName',
  IconHistorySysRevision = 'icon___history___sys___revision',
  IconHistorySysType = 'icon___history___sys___type',
  IconHistoryUpdatedAt = 'icon___history___updatedAt',
  IconId = 'icon___id',
  IconInternalContent = 'icon___internal___content',
  IconInternalContentDigest = 'icon___internal___contentDigest',
  IconInternalDescription = 'icon___internal___description',
  IconInternalFieldOwners = 'icon___internal___fieldOwners',
  IconInternalIgnoreType = 'icon___internal___ignoreType',
  IconInternalMediaType = 'icon___internal___mediaType',
  IconInternalOwner = 'icon___internal___owner',
  IconInternalType = 'icon___internal___type',
  IconName = 'icon___name',
  IconNodeLocale = 'icon___node_locale',
  IconOss = 'icon___oss',
  IconOssChildContentfulOssDetailTextNodeChildren = 'icon___oss___childContentfulOssDetailTextNode___children',
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 'icon___oss___childContentfulOssDetailTextNode___childrenMarkdownRemark',
  IconOssChildContentfulOssDetailTextNodeDetail = 'icon___oss___childContentfulOssDetailTextNode___detail',
  IconOssChildContentfulOssDetailTextNodeId = 'icon___oss___childContentfulOssDetailTextNode___id',
  IconOssChildren = 'icon___oss___children',
  IconOssChildrenContentfulOssDetailTextNode = 'icon___oss___childrenContentfulOssDetailTextNode',
  IconOssChildrenContentfulOssDetailTextNodeChildren = 'icon___oss___childrenContentfulOssDetailTextNode___children',
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 'icon___oss___childrenContentfulOssDetailTextNode___childrenMarkdownRemark',
  IconOssChildrenContentfulOssDetailTextNodeDetail = 'icon___oss___childrenContentfulOssDetailTextNode___detail',
  IconOssChildrenContentfulOssDetailTextNodeId = 'icon___oss___childrenContentfulOssDetailTextNode___id',
  IconOssChildrenChildren = 'icon___oss___children___children',
  IconOssChildrenId = 'icon___oss___children___id',
  IconOssContentfulId = 'icon___oss___contentful_id',
  IconOssCreatedAt = 'icon___oss___createdAt',
  IconOssDetailChildren = 'icon___oss___detail___children',
  IconOssDetailChildrenMarkdownRemark = 'icon___oss___detail___childrenMarkdownRemark',
  IconOssDetailDetail = 'icon___oss___detail___detail',
  IconOssDetailId = 'icon___oss___detail___id',
  IconOssHref = 'icon___oss___href',
  IconOssIconChildren = 'icon___oss___icon___children',
  IconOssIconChildrenContentfulIconSvgTextNode = 'icon___oss___icon___childrenContentfulIconSvgTextNode',
  IconOssIconContact = 'icon___oss___icon___contact',
  IconOssIconContentfulId = 'icon___oss___icon___contentful_id',
  IconOssIconCreatedAt = 'icon___oss___icon___createdAt',
  IconOssIconHistory = 'icon___oss___icon___history',
  IconOssIconId = 'icon___oss___icon___id',
  IconOssIconName = 'icon___oss___icon___name',
  IconOssIconNodeLocale = 'icon___oss___icon___node_locale',
  IconOssIconOss = 'icon___oss___icon___oss',
  IconOssIconProject = 'icon___oss___icon___project',
  IconOssIconSpaceId = 'icon___oss___icon___spaceId',
  IconOssIconUpdatedAt = 'icon___oss___icon___updatedAt',
  IconOssIconWhatICanDo = 'icon___oss___icon___what_i_can_do',
  IconOssId = 'icon___oss___id',
  IconOssImageChildren = 'icon___oss___image___children',
  IconOssImageContentfulId = 'icon___oss___image___contentful_id',
  IconOssImageCreatedAt = 'icon___oss___image___createdAt',
  IconOssImageDescription = 'icon___oss___image___description',
  IconOssImageGatsbyImageData = 'icon___oss___image___gatsbyImageData',
  IconOssImageId = 'icon___oss___image___id',
  IconOssImageNodeLocale = 'icon___oss___image___node_locale',
  IconOssImageSpaceId = 'icon___oss___image___spaceId',
  IconOssImageTitle = 'icon___oss___image___title',
  IconOssImageUpdatedAt = 'icon___oss___image___updatedAt',
  IconOssInternalContent = 'icon___oss___internal___content',
  IconOssInternalContentDigest = 'icon___oss___internal___contentDigest',
  IconOssInternalDescription = 'icon___oss___internal___description',
  IconOssInternalFieldOwners = 'icon___oss___internal___fieldOwners',
  IconOssInternalIgnoreType = 'icon___oss___internal___ignoreType',
  IconOssInternalMediaType = 'icon___oss___internal___mediaType',
  IconOssInternalOwner = 'icon___oss___internal___owner',
  IconOssInternalType = 'icon___oss___internal___type',
  IconOssName = 'icon___oss___name',
  IconOssNodeLocale = 'icon___oss___node_locale',
  IconOssParentChildren = 'icon___oss___parent___children',
  IconOssParentId = 'icon___oss___parent___id',
  IconOssSpaceId = 'icon___oss___spaceId',
  IconOssStartDate = 'icon___oss___startDate',
  IconOssSubName = 'icon___oss___subName',
  IconOssSysRevision = 'icon___oss___sys___revision',
  IconOssSysType = 'icon___oss___sys___type',
  IconOssTags = 'icon___oss___tags',
  IconOssTagsChildren = 'icon___oss___tags___children',
  IconOssTagsContentfulId = 'icon___oss___tags___contentful_id',
  IconOssTagsCreatedAt = 'icon___oss___tags___createdAt',
  IconOssTagsId = 'icon___oss___tags___id',
  IconOssTagsLevel = 'icon___oss___tags___level',
  IconOssTagsName = 'icon___oss___tags___name',
  IconOssTagsNodeLocale = 'icon___oss___tags___node_locale',
  IconOssTagsOss = 'icon___oss___tags___oss',
  IconOssTagsProject = 'icon___oss___tags___project',
  IconOssTagsSkillMap = 'icon___oss___tags___skill_map',
  IconOssTagsSpaceId = 'icon___oss___tags___spaceId',
  IconOssTagsUpdatedAt = 'icon___oss___tags___updatedAt',
  IconOssUpdatedAt = 'icon___oss___updatedAt',
  IconParentChildren = 'icon___parent___children',
  IconParentChildrenChildren = 'icon___parent___children___children',
  IconParentChildrenId = 'icon___parent___children___id',
  IconParentId = 'icon___parent___id',
  IconParentInternalContent = 'icon___parent___internal___content',
  IconParentInternalContentDigest = 'icon___parent___internal___contentDigest',
  IconParentInternalDescription = 'icon___parent___internal___description',
  IconParentInternalFieldOwners = 'icon___parent___internal___fieldOwners',
  IconParentInternalIgnoreType = 'icon___parent___internal___ignoreType',
  IconParentInternalMediaType = 'icon___parent___internal___mediaType',
  IconParentInternalOwner = 'icon___parent___internal___owner',
  IconParentInternalType = 'icon___parent___internal___type',
  IconParentParentChildren = 'icon___parent___parent___children',
  IconParentParentId = 'icon___parent___parent___id',
  IconProject = 'icon___project',
  IconProjectChildContentfulProjectDetailTextNodeChildren = 'icon___project___childContentfulProjectDetailTextNode___children',
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'icon___project___childContentfulProjectDetailTextNode___childrenMarkdownRemark',
  IconProjectChildContentfulProjectDetailTextNodeDetail = 'icon___project___childContentfulProjectDetailTextNode___detail',
  IconProjectChildContentfulProjectDetailTextNodeId = 'icon___project___childContentfulProjectDetailTextNode___id',
  IconProjectChildren = 'icon___project___children',
  IconProjectChildrenContentfulProjectDetailTextNode = 'icon___project___childrenContentfulProjectDetailTextNode',
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 'icon___project___childrenContentfulProjectDetailTextNode___children',
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 'icon___project___childrenContentfulProjectDetailTextNode___childrenMarkdownRemark',
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 'icon___project___childrenContentfulProjectDetailTextNode___detail',
  IconProjectChildrenContentfulProjectDetailTextNodeId = 'icon___project___childrenContentfulProjectDetailTextNode___id',
  IconProjectChildrenChildren = 'icon___project___children___children',
  IconProjectChildrenId = 'icon___project___children___id',
  IconProjectContentfulId = 'icon___project___contentful_id',
  IconProjectCreatedAt = 'icon___project___createdAt',
  IconProjectDetailChildren = 'icon___project___detail___children',
  IconProjectDetailChildrenMarkdownRemark = 'icon___project___detail___childrenMarkdownRemark',
  IconProjectDetailDetail = 'icon___project___detail___detail',
  IconProjectDetailId = 'icon___project___detail___id',
  IconProjectEndDate = 'icon___project___endDate',
  IconProjectIconChildren = 'icon___project___icon___children',
  IconProjectIconChildrenContentfulIconSvgTextNode = 'icon___project___icon___childrenContentfulIconSvgTextNode',
  IconProjectIconContact = 'icon___project___icon___contact',
  IconProjectIconContentfulId = 'icon___project___icon___contentful_id',
  IconProjectIconCreatedAt = 'icon___project___icon___createdAt',
  IconProjectIconHistory = 'icon___project___icon___history',
  IconProjectIconId = 'icon___project___icon___id',
  IconProjectIconName = 'icon___project___icon___name',
  IconProjectIconNodeLocale = 'icon___project___icon___node_locale',
  IconProjectIconOss = 'icon___project___icon___oss',
  IconProjectIconProject = 'icon___project___icon___project',
  IconProjectIconSpaceId = 'icon___project___icon___spaceId',
  IconProjectIconUpdatedAt = 'icon___project___icon___updatedAt',
  IconProjectIconWhatICanDo = 'icon___project___icon___what_i_can_do',
  IconProjectId = 'icon___project___id',
  IconProjectInternalContent = 'icon___project___internal___content',
  IconProjectInternalContentDigest = 'icon___project___internal___contentDigest',
  IconProjectInternalDescription = 'icon___project___internal___description',
  IconProjectInternalFieldOwners = 'icon___project___internal___fieldOwners',
  IconProjectInternalIgnoreType = 'icon___project___internal___ignoreType',
  IconProjectInternalMediaType = 'icon___project___internal___mediaType',
  IconProjectInternalOwner = 'icon___project___internal___owner',
  IconProjectInternalType = 'icon___project___internal___type',
  IconProjectName = 'icon___project___name',
  IconProjectNodeLocale = 'icon___project___node_locale',
  IconProjectParentChildren = 'icon___project___parent___children',
  IconProjectParentId = 'icon___project___parent___id',
  IconProjectSpaceId = 'icon___project___spaceId',
  IconProjectStartDate = 'icon___project___startDate',
  IconProjectSubName = 'icon___project___subName',
  IconProjectSysRevision = 'icon___project___sys___revision',
  IconProjectSysType = 'icon___project___sys___type',
  IconProjectTags = 'icon___project___tags',
  IconProjectTagsChildren = 'icon___project___tags___children',
  IconProjectTagsContentfulId = 'icon___project___tags___contentful_id',
  IconProjectTagsCreatedAt = 'icon___project___tags___createdAt',
  IconProjectTagsId = 'icon___project___tags___id',
  IconProjectTagsLevel = 'icon___project___tags___level',
  IconProjectTagsName = 'icon___project___tags___name',
  IconProjectTagsNodeLocale = 'icon___project___tags___node_locale',
  IconProjectTagsOss = 'icon___project___tags___oss',
  IconProjectTagsProject = 'icon___project___tags___project',
  IconProjectTagsSkillMap = 'icon___project___tags___skill_map',
  IconProjectTagsSpaceId = 'icon___project___tags___spaceId',
  IconProjectTagsUpdatedAt = 'icon___project___tags___updatedAt',
  IconProjectUpdatedAt = 'icon___project___updatedAt',
  IconSpaceId = 'icon___spaceId',
  IconSvgChildMarkdownRemarkChildren = 'icon___svg___childMarkdownRemark___children',
  IconSvgChildMarkdownRemarkExcerpt = 'icon___svg___childMarkdownRemark___excerpt',
  IconSvgChildMarkdownRemarkExcerptAst = 'icon___svg___childMarkdownRemark___excerptAst',
  IconSvgChildMarkdownRemarkHeadings = 'icon___svg___childMarkdownRemark___headings',
  IconSvgChildMarkdownRemarkHtml = 'icon___svg___childMarkdownRemark___html',
  IconSvgChildMarkdownRemarkHtmlAst = 'icon___svg___childMarkdownRemark___htmlAst',
  IconSvgChildMarkdownRemarkId = 'icon___svg___childMarkdownRemark___id',
  IconSvgChildMarkdownRemarkRawMarkdownBody = 'icon___svg___childMarkdownRemark___rawMarkdownBody',
  IconSvgChildMarkdownRemarkTableOfContents = 'icon___svg___childMarkdownRemark___tableOfContents',
  IconSvgChildMarkdownRemarkTimeToRead = 'icon___svg___childMarkdownRemark___timeToRead',
  IconSvgChildren = 'icon___svg___children',
  IconSvgChildrenMarkdownRemark = 'icon___svg___childrenMarkdownRemark',
  IconSvgChildrenMarkdownRemarkChildren = 'icon___svg___childrenMarkdownRemark___children',
  IconSvgChildrenMarkdownRemarkExcerpt = 'icon___svg___childrenMarkdownRemark___excerpt',
  IconSvgChildrenMarkdownRemarkExcerptAst = 'icon___svg___childrenMarkdownRemark___excerptAst',
  IconSvgChildrenMarkdownRemarkHeadings = 'icon___svg___childrenMarkdownRemark___headings',
  IconSvgChildrenMarkdownRemarkHtml = 'icon___svg___childrenMarkdownRemark___html',
  IconSvgChildrenMarkdownRemarkHtmlAst = 'icon___svg___childrenMarkdownRemark___htmlAst',
  IconSvgChildrenMarkdownRemarkId = 'icon___svg___childrenMarkdownRemark___id',
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 'icon___svg___childrenMarkdownRemark___rawMarkdownBody',
  IconSvgChildrenMarkdownRemarkTableOfContents = 'icon___svg___childrenMarkdownRemark___tableOfContents',
  IconSvgChildrenMarkdownRemarkTimeToRead = 'icon___svg___childrenMarkdownRemark___timeToRead',
  IconSvgChildrenChildren = 'icon___svg___children___children',
  IconSvgChildrenId = 'icon___svg___children___id',
  IconSvgId = 'icon___svg___id',
  IconSvgInternalContent = 'icon___svg___internal___content',
  IconSvgInternalContentDigest = 'icon___svg___internal___contentDigest',
  IconSvgInternalDescription = 'icon___svg___internal___description',
  IconSvgInternalFieldOwners = 'icon___svg___internal___fieldOwners',
  IconSvgInternalIgnoreType = 'icon___svg___internal___ignoreType',
  IconSvgInternalMediaType = 'icon___svg___internal___mediaType',
  IconSvgInternalOwner = 'icon___svg___internal___owner',
  IconSvgInternalType = 'icon___svg___internal___type',
  IconSvgParentChildren = 'icon___svg___parent___children',
  IconSvgParentId = 'icon___svg___parent___id',
  IconSvgSvg = 'icon___svg___svg',
  IconSvgSysType = 'icon___svg___sys___type',
  IconSysRevision = 'icon___sys___revision',
  IconSysType = 'icon___sys___type',
  IconUpdatedAt = 'icon___updatedAt',
  IconWhatICanDo = 'icon___what_i_can_do',
  IconWhatICanDoChildren = 'icon___what_i_can_do___children',
  IconWhatICanDoChildrenChildren = 'icon___what_i_can_do___children___children',
  IconWhatICanDoChildrenId = 'icon___what_i_can_do___children___id',
  IconWhatICanDoContentfulId = 'icon___what_i_can_do___contentful_id',
  IconWhatICanDoCreatedAt = 'icon___what_i_can_do___createdAt',
  IconWhatICanDoIconChildren = 'icon___what_i_can_do___icon___children',
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 'icon___what_i_can_do___icon___childrenContentfulIconSvgTextNode',
  IconWhatICanDoIconContact = 'icon___what_i_can_do___icon___contact',
  IconWhatICanDoIconContentfulId = 'icon___what_i_can_do___icon___contentful_id',
  IconWhatICanDoIconCreatedAt = 'icon___what_i_can_do___icon___createdAt',
  IconWhatICanDoIconHistory = 'icon___what_i_can_do___icon___history',
  IconWhatICanDoIconId = 'icon___what_i_can_do___icon___id',
  IconWhatICanDoIconName = 'icon___what_i_can_do___icon___name',
  IconWhatICanDoIconNodeLocale = 'icon___what_i_can_do___icon___node_locale',
  IconWhatICanDoIconOss = 'icon___what_i_can_do___icon___oss',
  IconWhatICanDoIconProject = 'icon___what_i_can_do___icon___project',
  IconWhatICanDoIconSpaceId = 'icon___what_i_can_do___icon___spaceId',
  IconWhatICanDoIconUpdatedAt = 'icon___what_i_can_do___icon___updatedAt',
  IconWhatICanDoIconWhatICanDo = 'icon___what_i_can_do___icon___what_i_can_do',
  IconWhatICanDoId = 'icon___what_i_can_do___id',
  IconWhatICanDoInternalContent = 'icon___what_i_can_do___internal___content',
  IconWhatICanDoInternalContentDigest = 'icon___what_i_can_do___internal___contentDigest',
  IconWhatICanDoInternalDescription = 'icon___what_i_can_do___internal___description',
  IconWhatICanDoInternalFieldOwners = 'icon___what_i_can_do___internal___fieldOwners',
  IconWhatICanDoInternalIgnoreType = 'icon___what_i_can_do___internal___ignoreType',
  IconWhatICanDoInternalMediaType = 'icon___what_i_can_do___internal___mediaType',
  IconWhatICanDoInternalOwner = 'icon___what_i_can_do___internal___owner',
  IconWhatICanDoInternalType = 'icon___what_i_can_do___internal___type',
  IconWhatICanDoName = 'icon___what_i_can_do___name',
  IconWhatICanDoNodeLocale = 'icon___what_i_can_do___node_locale',
  IconWhatICanDoParentChildren = 'icon___what_i_can_do___parent___children',
  IconWhatICanDoParentId = 'icon___what_i_can_do___parent___id',
  IconWhatICanDoSortKey = 'icon___what_i_can_do___sortKey',
  IconWhatICanDoSpaceId = 'icon___what_i_can_do___spaceId',
  IconWhatICanDoSubName = 'icon___what_i_can_do___subName',
  IconWhatICanDoSysRevision = 'icon___what_i_can_do___sys___revision',
  IconWhatICanDoSysType = 'icon___what_i_can_do___sys___type',
  IconWhatICanDoUpdatedAt = 'icon___what_i_can_do___updatedAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeLocale = 'node_locale',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SortKey = 'sortKey',
  SpaceId = 'spaceId',
  SubName = 'subName',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysRevision = 'sys___revision',
  SysType = 'sys___type',
  UpdatedAt = 'updatedAt'
}

export type ContentfulWhatICanDoFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  icon?: InputMaybe<ContentfulIconFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sortKey?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  subName?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulWhatICanDoSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulWhatICanDoFilterListInput = {
  elemMatch?: InputMaybe<ContentfulWhatICanDoFilterInput>;
};

export type ContentfulWhatICanDoGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulWhatICanDoEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulWhatICanDoGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulWhatICanDo>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulWhatICanDoGroupConnectionDistinctArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoGroupConnectionGroupArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulWhatICanDoGroupConnectionMaxArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoGroupConnectionMinArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoGroupConnectionSumArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};

export type ContentfulWhatICanDoSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulWhatICanDoFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulWhatICanDoSys = {
  contentType?: Maybe<ContentfulWhatICanDoSysContentType>;
  revision?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoSysContentType = {
  sys?: Maybe<ContentfulWhatICanDoSysContentTypeSys>;
};

export type ContentfulWhatICanDoSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulWhatICanDoSysContentTypeSysFilterInput>;
};

export type ContentfulWhatICanDoSysContentTypeSys = {
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulWhatICanDoSysFilterInput = {
  contentType?: InputMaybe<ContentfulWhatICanDoSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns the first child node of type Locale or null if there are no children of given type on this node */
  childLocale?: Maybe<Locale>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type Locale */
  childrenLocale?: Maybe<Array<Maybe<Locale>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildLocaleChildren = 'childLocale___children',
  ChildLocaleChildrenChildren = 'childLocale___children___children',
  ChildLocaleChildrenChildrenChildren = 'childLocale___children___children___children',
  ChildLocaleChildrenChildrenId = 'childLocale___children___children___id',
  ChildLocaleChildrenId = 'childLocale___children___id',
  ChildLocaleChildrenInternalContent = 'childLocale___children___internal___content',
  ChildLocaleChildrenInternalContentDigest = 'childLocale___children___internal___contentDigest',
  ChildLocaleChildrenInternalDescription = 'childLocale___children___internal___description',
  ChildLocaleChildrenInternalFieldOwners = 'childLocale___children___internal___fieldOwners',
  ChildLocaleChildrenInternalIgnoreType = 'childLocale___children___internal___ignoreType',
  ChildLocaleChildrenInternalMediaType = 'childLocale___children___internal___mediaType',
  ChildLocaleChildrenInternalOwner = 'childLocale___children___internal___owner',
  ChildLocaleChildrenInternalType = 'childLocale___children___internal___type',
  ChildLocaleChildrenParentChildren = 'childLocale___children___parent___children',
  ChildLocaleChildrenParentId = 'childLocale___children___parent___id',
  ChildLocaleData = 'childLocale___data',
  ChildLocaleFileAbsolutePath = 'childLocale___fileAbsolutePath',
  ChildLocaleId = 'childLocale___id',
  ChildLocaleInternalContent = 'childLocale___internal___content',
  ChildLocaleInternalContentDigest = 'childLocale___internal___contentDigest',
  ChildLocaleInternalDescription = 'childLocale___internal___description',
  ChildLocaleInternalFieldOwners = 'childLocale___internal___fieldOwners',
  ChildLocaleInternalIgnoreType = 'childLocale___internal___ignoreType',
  ChildLocaleInternalMediaType = 'childLocale___internal___mediaType',
  ChildLocaleInternalOwner = 'childLocale___internal___owner',
  ChildLocaleInternalType = 'childLocale___internal___type',
  ChildLocaleLanguage = 'childLocale___language',
  ChildLocaleNs = 'childLocale___ns',
  ChildLocaleParentChildren = 'childLocale___parent___children',
  ChildLocaleParentChildrenChildren = 'childLocale___parent___children___children',
  ChildLocaleParentChildrenId = 'childLocale___parent___children___id',
  ChildLocaleParentId = 'childLocale___parent___id',
  ChildLocaleParentInternalContent = 'childLocale___parent___internal___content',
  ChildLocaleParentInternalContentDigest = 'childLocale___parent___internal___contentDigest',
  ChildLocaleParentInternalDescription = 'childLocale___parent___internal___description',
  ChildLocaleParentInternalFieldOwners = 'childLocale___parent___internal___fieldOwners',
  ChildLocaleParentInternalIgnoreType = 'childLocale___parent___internal___ignoreType',
  ChildLocaleParentInternalMediaType = 'childLocale___parent___internal___mediaType',
  ChildLocaleParentInternalOwner = 'childLocale___parent___internal___owner',
  ChildLocaleParentInternalType = 'childLocale___parent___internal___type',
  ChildLocaleParentParentChildren = 'childLocale___parent___parent___children',
  ChildLocaleParentParentId = 'childLocale___parent___parent___id',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenLocale = 'childrenLocale',
  ChildrenLocaleChildren = 'childrenLocale___children',
  ChildrenLocaleChildrenChildren = 'childrenLocale___children___children',
  ChildrenLocaleChildrenChildrenChildren = 'childrenLocale___children___children___children',
  ChildrenLocaleChildrenChildrenId = 'childrenLocale___children___children___id',
  ChildrenLocaleChildrenId = 'childrenLocale___children___id',
  ChildrenLocaleChildrenInternalContent = 'childrenLocale___children___internal___content',
  ChildrenLocaleChildrenInternalContentDigest = 'childrenLocale___children___internal___contentDigest',
  ChildrenLocaleChildrenInternalDescription = 'childrenLocale___children___internal___description',
  ChildrenLocaleChildrenInternalFieldOwners = 'childrenLocale___children___internal___fieldOwners',
  ChildrenLocaleChildrenInternalIgnoreType = 'childrenLocale___children___internal___ignoreType',
  ChildrenLocaleChildrenInternalMediaType = 'childrenLocale___children___internal___mediaType',
  ChildrenLocaleChildrenInternalOwner = 'childrenLocale___children___internal___owner',
  ChildrenLocaleChildrenInternalType = 'childrenLocale___children___internal___type',
  ChildrenLocaleChildrenParentChildren = 'childrenLocale___children___parent___children',
  ChildrenLocaleChildrenParentId = 'childrenLocale___children___parent___id',
  ChildrenLocaleData = 'childrenLocale___data',
  ChildrenLocaleFileAbsolutePath = 'childrenLocale___fileAbsolutePath',
  ChildrenLocaleId = 'childrenLocale___id',
  ChildrenLocaleInternalContent = 'childrenLocale___internal___content',
  ChildrenLocaleInternalContentDigest = 'childrenLocale___internal___contentDigest',
  ChildrenLocaleInternalDescription = 'childrenLocale___internal___description',
  ChildrenLocaleInternalFieldOwners = 'childrenLocale___internal___fieldOwners',
  ChildrenLocaleInternalIgnoreType = 'childrenLocale___internal___ignoreType',
  ChildrenLocaleInternalMediaType = 'childrenLocale___internal___mediaType',
  ChildrenLocaleInternalOwner = 'childrenLocale___internal___owner',
  ChildrenLocaleInternalType = 'childrenLocale___internal___type',
  ChildrenLocaleLanguage = 'childrenLocale___language',
  ChildrenLocaleNs = 'childrenLocale___ns',
  ChildrenLocaleParentChildren = 'childrenLocale___parent___children',
  ChildrenLocaleParentChildrenChildren = 'childrenLocale___parent___children___children',
  ChildrenLocaleParentChildrenId = 'childrenLocale___parent___children___id',
  ChildrenLocaleParentId = 'childrenLocale___parent___id',
  ChildrenLocaleParentInternalContent = 'childrenLocale___parent___internal___content',
  ChildrenLocaleParentInternalContentDigest = 'childrenLocale___parent___internal___contentDigest',
  ChildrenLocaleParentInternalDescription = 'childrenLocale___parent___internal___description',
  ChildrenLocaleParentInternalFieldOwners = 'childrenLocale___parent___internal___fieldOwners',
  ChildrenLocaleParentInternalIgnoreType = 'childrenLocale___parent___internal___ignoreType',
  ChildrenLocaleParentInternalMediaType = 'childrenLocale___parent___internal___mediaType',
  ChildrenLocaleParentInternalOwner = 'childrenLocale___parent___internal___owner',
  ChildrenLocaleParentInternalType = 'childrenLocale___parent___internal___type',
  ChildrenLocaleParentParentChildren = 'childrenLocale___parent___parent___children',
  ChildrenLocaleParentParentId = 'childrenLocale___parent___parent___id',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
  Url = 'url'
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childLocale?: InputMaybe<LocaleFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenLocale?: InputMaybe<LocaleFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type FileGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export enum ImageResizingBehavior {
  /** Crop a part of the original image to match the specified size. */
  Crop = 'CROP',
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  Fill = 'FILL',
  NoChange = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = 'PAD',
  /** Scale the image regardless of the original aspect ratio. */
  Scale = 'SCALE',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = 'THUMB'
}

export type ImageSharp = Node & {
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedOriginalName = 'fixed___originalName',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidTracedSvg = 'fluid___tracedSVG',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeHeight = 'resize___height',
  ResizeOriginalName = 'resize___originalName',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width'
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type InlineSvg = {
  absolutePath?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dataURI?: Maybe<Scalars['String']>;
  originalContent?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
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
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

export type Locale = Node & {
  children: Array<Node>;
  data?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  language?: Maybe<Scalars['String']>;
  ns?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
};

export type LocaleConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<LocaleEdge>;
  group: Array<LocaleGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type LocaleConnectionDistinctArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionGroupArgs = {
  field: LocaleFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LocaleConnectionMaxArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionMinArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionSumArgs = {
  field: LocaleFieldsEnum;
};

export type LocaleEdge = {
  next?: Maybe<Locale>;
  node: Locale;
  previous?: Maybe<Locale>;
};

export enum LocaleFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Data = 'data',
  FileAbsolutePath = 'fileAbsolutePath',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Language = 'language',
  Ns = 'ns',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type LocaleFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  ns?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type LocaleFilterListInput = {
  elemMatch?: InputMaybe<LocaleFilterInput>;
};

export type LocaleGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<LocaleEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<LocaleGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type LocaleGroupConnectionDistinctArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleGroupConnectionGroupArgs = {
  field: LocaleFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LocaleGroupConnectionMaxArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleGroupConnectionMinArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleGroupConnectionSumArgs = {
  field: LocaleFieldsEnum;
};

export type LocaleSortInput = {
  fields?: InputMaybe<Array<InputMaybe<LocaleFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum MarkdownExcerptFormats {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Plain = 'PLAIN'
}

export type MarkdownHeading = {
  depth?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MarkdownHeadingFilterInput = {
  depth?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  children: Array<Node>;
  excerpt?: Maybe<Scalars['String']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  tableOfContents?: Maybe<Scalars['String']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MarkdownWordCount>;
};


export type MarkdownRemarkExcerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>;
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  group: Array<MarkdownRemarkGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Excerpt = 'excerpt',
  ExcerptAst = 'excerptAst',
  FrontmatterTitle = 'frontmatter___title',
  Headings = 'headings',
  HeadingsDepth = 'headings___depth',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  Html = 'html',
  HtmlAst = 'htmlAst',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  RawMarkdownBody = 'rawMarkdownBody',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words'
}

export type MarkdownRemarkFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  allContentfulAsset: ContentfulAssetConnection;
  allContentfulBlogAuthor: ContentfulBlogAuthorConnection;
  allContentfulContact: ContentfulContactConnection;
  allContentfulContentType: ContentfulContentTypeConnection;
  allContentfulEntry: ContentfulEntryConnection;
  allContentfulHello: ContentfulHelloConnection;
  allContentfulHistory: ContentfulHistoryConnection;
  allContentfulIcon: ContentfulIconConnection;
  allContentfulIconSvgTextNode: ContentfulIconSvgTextNodeConnection;
  allContentfulOss: ContentfulOssConnection;
  allContentfulOssDetailTextNode: ContentfulOssDetailTextNodeConnection;
  allContentfulProject: ContentfulProjectConnection;
  allContentfulProjectDetailTextNode: ContentfulProjectDetailTextNodeConnection;
  allContentfulQualification: ContentfulQualificationConnection;
  allContentfulQualificationMap: ContentfulQualificationMapConnection;
  allContentfulSkillMap: ContentfulSkillMapConnection;
  allContentfulTag: ContentfulTagConnection;
  allContentfulWhatICanDo: ContentfulWhatICanDoConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allLocale: LocaleConnection;
  allMarkdownRemark: MarkdownRemarkConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  contentfulBlogAuthor?: Maybe<ContentfulBlogAuthor>;
  contentfulContact?: Maybe<ContentfulContact>;
  contentfulContentType?: Maybe<ContentfulContentType>;
  contentfulEntry?: Maybe<ContentfulEntry>;
  contentfulHello?: Maybe<ContentfulHello>;
  contentfulHistory?: Maybe<ContentfulHistory>;
  contentfulIcon?: Maybe<ContentfulIcon>;
  contentfulIconSvgTextNode?: Maybe<ContentfulIconSvgTextNode>;
  contentfulOss?: Maybe<ContentfulOss>;
  contentfulOssDetailTextNode?: Maybe<ContentfulOssDetailTextNode>;
  contentfulProject?: Maybe<ContentfulProject>;
  contentfulProjectDetailTextNode?: Maybe<ContentfulProjectDetailTextNode>;
  contentfulQualification?: Maybe<ContentfulQualification>;
  contentfulQualificationMap?: Maybe<ContentfulQualificationMap>;
  contentfulSkillMap?: Maybe<ContentfulSkillMap>;
  contentfulTag?: Maybe<ContentfulTag>;
  contentfulWhatICanDo?: Maybe<ContentfulWhatICanDo>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  locale?: Maybe<Locale>;
  markdownRemark?: Maybe<MarkdownRemark>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: InputMaybe<ContentfulAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulAssetSortInput>;
};


export type QueryAllContentfulBlogAuthorArgs = {
  filter?: InputMaybe<ContentfulBlogAuthorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulBlogAuthorSortInput>;
};


export type QueryAllContentfulContactArgs = {
  filter?: InputMaybe<ContentfulContactFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulContactSortInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: InputMaybe<ContentfulContentTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulContentTypeSortInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: InputMaybe<ContentfulEntryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulEntrySortInput>;
};


export type QueryAllContentfulHelloArgs = {
  filter?: InputMaybe<ContentfulHelloFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulHelloSortInput>;
};


export type QueryAllContentfulHistoryArgs = {
  filter?: InputMaybe<ContentfulHistoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulHistorySortInput>;
};


export type QueryAllContentfulIconArgs = {
  filter?: InputMaybe<ContentfulIconFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulIconSortInput>;
};


export type QueryAllContentfulIconSvgTextNodeArgs = {
  filter?: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulIconSvgTextNodeSortInput>;
};


export type QueryAllContentfulOssArgs = {
  filter?: InputMaybe<ContentfulOssFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulOssSortInput>;
};


export type QueryAllContentfulOssDetailTextNodeArgs = {
  filter?: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulOssDetailTextNodeSortInput>;
};


export type QueryAllContentfulProjectArgs = {
  filter?: InputMaybe<ContentfulProjectFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulProjectSortInput>;
};


export type QueryAllContentfulProjectDetailTextNodeArgs = {
  filter?: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulProjectDetailTextNodeSortInput>;
};


export type QueryAllContentfulQualificationArgs = {
  filter?: InputMaybe<ContentfulQualificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulQualificationSortInput>;
};


export type QueryAllContentfulQualificationMapArgs = {
  filter?: InputMaybe<ContentfulQualificationMapFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulQualificationMapSortInput>;
};


export type QueryAllContentfulSkillMapArgs = {
  filter?: InputMaybe<ContentfulSkillMapFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulSkillMapSortInput>;
};


export type QueryAllContentfulTagArgs = {
  filter?: InputMaybe<ContentfulTagFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulTagSortInput>;
};


export type QueryAllContentfulWhatICanDoArgs = {
  filter?: InputMaybe<ContentfulWhatICanDoFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentfulWhatICanDoSortInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllLocaleArgs = {
  filter?: InputMaybe<LocaleFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<LocaleSortInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MarkdownRemarkSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};


export type QueryContentfulAssetArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<ContentfulAssetFieldsFilterInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  localFile?: InputMaybe<FileFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulBlogAuthorArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryContentfulContactArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<ContentfulIconFilterInput>;
  iconSvgDark?: InputMaybe<ContentfulAssetFilterInput>;
  iconSvgLight?: InputMaybe<ContentfulAssetFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sortKey?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  subName?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContactSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulContentTypeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryContentfulEntryArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryContentfulHelloArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sortKey?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulHelloSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulHistoryArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  icon?: InputMaybe<ContentfulIconFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  subName?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulHistorySysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulIconArgs = {
  childContentfulIconSvgTextNode?: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulIconSvgTextNode?: InputMaybe<ContentfulIconSvgTextNodeFilterListInput>;
  contact?: InputMaybe<ContentfulContactFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  history?: InputMaybe<ContentfulHistoryFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  oss?: InputMaybe<ContentfulOssFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  project?: InputMaybe<ContentfulProjectFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  svg?: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  sys?: InputMaybe<ContentfulIconSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  what_i_can_do?: InputMaybe<ContentfulWhatICanDoFilterListInput>;
};


export type QueryContentfulIconSvgTextNodeArgs = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  svg?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulIconSvgTextNodeSysFilterInput>;
};


export type QueryContentfulOssArgs = {
  childContentfulOssDetailTextNode?: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulOssDetailTextNode?: InputMaybe<ContentfulOssDetailTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  detail?: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<ContentfulIconFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  startDate?: InputMaybe<DateQueryOperatorInput>;
  subName?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulOssSysFilterInput>;
  tags?: InputMaybe<ContentfulTagFilterListInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulOssDetailTextNodeArgs = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  detail?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulOssDetailTextNodeSysFilterInput>;
};


export type QueryContentfulProjectArgs = {
  childContentfulProjectDetailTextNode?: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulProjectDetailTextNode?: InputMaybe<ContentfulProjectDetailTextNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  detail?: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  endDate?: InputMaybe<DateQueryOperatorInput>;
  icon?: InputMaybe<ContentfulIconFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  startDate?: InputMaybe<DateQueryOperatorInput>;
  subName?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulProjectSysFilterInput>;
  tags?: InputMaybe<ContentfulTagFilterListInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulProjectDetailTextNodeArgs = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  detail?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulProjectDetailTextNodeSysFilterInput>;
};


export type QueryContentfulQualificationArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  qualification_map?: InputMaybe<ContentfulQualificationMapFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulQualificationSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulQualificationMapArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  expanded?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  qualifications?: InputMaybe<ContentfulQualificationFilterListInput>;
  sortKey?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulQualificationMapSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulSkillMapArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  expanded?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  skills?: InputMaybe<ContentfulTagFilterListInput>;
  sortKey?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSkillMapSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulTagArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  level?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  oss?: InputMaybe<ContentfulOssFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  project?: InputMaybe<ContentfulProjectFilterListInput>;
  skill_map?: InputMaybe<ContentfulSkillMapFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulTagSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulWhatICanDoArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  icon?: InputMaybe<ContentfulIconFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sortKey?: InputMaybe<IntQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  subName?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulWhatICanDoSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childLocale?: InputMaybe<LocaleFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenLocale?: InputMaybe<LocaleFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QueryLocaleArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  ns?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryMarkdownRemarkArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  JsxRuntime = 'jsxRuntime',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitle = 'siteMetadata___title'
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  PageContext = 'pageContext',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJson = 'pluginCreator___packageJson',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJson = 'packageJson',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptions = 'pluginOptions',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type ContentfulIconSvgTextNode = Node & {
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  svg?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulIconSvgTextNodeSys>;
};

export type ContentfulIconSvgTextNodeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulIconSvgTextNodeEdge>;
  group: Array<ContentfulIconSvgTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulIconSvgTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulIconSvgTextNodeConnectionDistinctArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeConnectionGroupArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulIconSvgTextNodeConnectionMaxArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeConnectionMinArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeConnectionSumArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};

export type ContentfulIconSvgTextNodeEdge = {
  next?: Maybe<ContentfulIconSvgTextNode>;
  node: ContentfulIconSvgTextNode;
  previous?: Maybe<ContentfulIconSvgTextNode>;
};

export enum ContentfulIconSvgTextNodeFieldsEnum {
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Svg = 'svg',
  SysType = 'sys___type'
}

export type ContentfulIconSvgTextNodeFilterInput = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  svg?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulIconSvgTextNodeSysFilterInput>;
};

export type ContentfulIconSvgTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
};

export type ContentfulIconSvgTextNodeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulIconSvgTextNodeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulIconSvgTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulIconSvgTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulIconSvgTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeGroupConnectionGroupArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulIconSvgTextNodeGroupConnectionMaxArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeGroupConnectionMinArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeGroupConnectionSumArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};

export type ContentfulIconSvgTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulIconSvgTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulIconSvgTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulIconSvgTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulOssDetailTextNode = Node & {
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  detail?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulOssDetailTextNodeSys>;
};

export type ContentfulOssDetailTextNodeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulOssDetailTextNodeEdge>;
  group: Array<ContentfulOssDetailTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulOssDetailTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulOssDetailTextNodeConnectionDistinctArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeConnectionGroupArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulOssDetailTextNodeConnectionMaxArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeConnectionMinArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeConnectionSumArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};

export type ContentfulOssDetailTextNodeEdge = {
  next?: Maybe<ContentfulOssDetailTextNode>;
  node: ContentfulOssDetailTextNode;
  previous?: Maybe<ContentfulOssDetailTextNode>;
};

export enum ContentfulOssDetailTextNodeFieldsEnum {
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Detail = 'detail',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SysType = 'sys___type'
}

export type ContentfulOssDetailTextNodeFilterInput = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  detail?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulOssDetailTextNodeSysFilterInput>;
};

export type ContentfulOssDetailTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
};

export type ContentfulOssDetailTextNodeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulOssDetailTextNodeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulOssDetailTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulOssDetailTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulOssDetailTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeGroupConnectionGroupArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulOssDetailTextNodeGroupConnectionMaxArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeGroupConnectionMinArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeGroupConnectionSumArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};

export type ContentfulOssDetailTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulOssDetailTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulOssDetailTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulOssDetailTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectDetailTextNode = Node & {
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  detail?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulProjectDetailTextNodeSys>;
};

export type ContentfulProjectDetailTextNodeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulProjectDetailTextNodeEdge>;
  group: Array<ContentfulProjectDetailTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulProjectDetailTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulProjectDetailTextNodeConnectionDistinctArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeConnectionGroupArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulProjectDetailTextNodeConnectionMaxArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeConnectionMinArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeConnectionSumArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};

export type ContentfulProjectDetailTextNodeEdge = {
  next?: Maybe<ContentfulProjectDetailTextNode>;
  node: ContentfulProjectDetailTextNode;
  previous?: Maybe<ContentfulProjectDetailTextNode>;
};

export enum ContentfulProjectDetailTextNodeFieldsEnum {
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Detail = 'detail',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SysType = 'sys___type'
}

export type ContentfulProjectDetailTextNodeFilterInput = {
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  detail?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulProjectDetailTextNodeSysFilterInput>;
};

export type ContentfulProjectDetailTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
};

export type ContentfulProjectDetailTextNodeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulProjectDetailTextNodeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ContentfulProjectDetailTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulProjectDetailTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulProjectDetailTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeGroupConnectionGroupArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentfulProjectDetailTextNodeGroupConnectionMaxArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeGroupConnectionMinArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeGroupConnectionSumArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};

export type ContentfulProjectDetailTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulProjectDetailTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectDetailTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulProjectDetailTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BuildTimeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type BuildTimeDataQuery = { site?: { buildTime?: any | null | undefined } | null | undefined };

export type NotFoundPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type NotFoundPageQuery = { locales: { edges: Array<{ node: { ns?: string | null | undefined, data?: string | null | undefined, language?: string | null | undefined } }> }, icon?: { title?: string | null | undefined, svg?: { content?: string | null | undefined } | null | undefined } | null | undefined };

export type IndexPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type IndexPageQuery = { links: { edges: Array<{ node: { id: string, node_locale: string, name?: string | null | undefined, href?: string | null | undefined } }> }, whatICanDos: { edges: Array<{ node: { id: string, node_locale: string, name?: string | null | undefined, subName?: string | null | undefined, icon?: { name?: string | null | undefined, svg?: { svg?: string | null | undefined } | null | undefined } | null | undefined } }> }, projects: { edges: Array<{ node: { id: string, node_locale: string, name?: string | null | undefined, subName?: string | null | undefined, startDate?: any | null | undefined, tags?: Array<{ name?: string | null | undefined } | null | undefined> | null | undefined, icon?: { name?: string | null | undefined, svg?: { svg?: string | null | undefined } | null | undefined } | null | undefined, detail?: { childMarkdownRemark?: { html?: string | null | undefined } | null | undefined } | null | undefined } }> }, histories: { edges: Array<{ node: { id: string, node_locale: string, date?: any | null | undefined, name?: string | null | undefined, subName?: string | null | undefined, icon?: { name?: string | null | undefined, svg?: { svg?: string | null | undefined } | null | undefined } | null | undefined } }> }, osses: { edges: Array<{ node: { id: string, node_locale: string, name?: string | null | undefined, subName?: string | null | undefined, startDate?: any | null | undefined, href?: string | null | undefined, tags?: Array<{ name?: string | null | undefined } | null | undefined> | null | undefined, icon?: { name?: string | null | undefined, svg?: { svg?: string | null | undefined } | null | undefined } | null | undefined, image?: { title?: string | null | undefined, file?: { url?: string | null | undefined } | null | undefined, localFile?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, detail?: { childMarkdownRemark?: { html?: string | null | undefined } | null | undefined } | null | undefined } }> }, contacts: { edges: Array<{ node: { id: string, node_locale: string, name?: string | null | undefined, subName?: string | null | undefined, href?: string | null | undefined, icon?: { svg?: { svg?: string | null | undefined } | null | undefined } | null | undefined } }> }, skills: { edges: Array<{ node: { id: string, name?: string | null | undefined, node_locale: string, expanded?: boolean | null | undefined, skills?: Array<{ id: string, level?: number | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined } }> }, certification: { edges: Array<{ node: { id: string, node_locale: string, name?: string | null | undefined, expanded?: boolean | null | undefined, qualifications?: Array<{ id: string, name?: string | null | undefined, date?: any | null | undefined } | null | undefined> | null | undefined } }> }, locales: { edges: Array<{ node: { ns?: string | null | undefined, data?: string | null | undefined, language?: string | null | undefined } }> }, icon?: { title?: string | null | undefined, svg?: { content?: string | null | undefined } | null | undefined } | null | undefined };

export type PrivacyPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type PrivacyPageQuery = { locales: { edges: Array<{ node: { ns?: string | null | undefined, data?: string | null | undefined, language?: string | null | undefined } }> }, icon?: { title?: string | null | undefined, svg?: { content?: string | null | undefined } | null | undefined } | null | undefined };
