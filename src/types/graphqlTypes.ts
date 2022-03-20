export type Maybe<T> = T;
export type InputMaybe<T> = T;
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
  lossless: InputMaybe<Scalars['Boolean']>;
  quality: InputMaybe<Scalars['Int']>;
  speed: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars['Boolean']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne: InputMaybe<Scalars['Boolean']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  description: Maybe<Scalars['String']>;
  fields: Maybe<ContentfulAssetFields>;
  file: Maybe<ContentfulAssetFile>;
  filename: Scalars['String'];
  filesize: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage: Maybe<Scalars['JSON']>;
  gatsbyImageData: Maybe<Scalars['JSON']>;
  height: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  internal: Internal;
  localFile: Maybe<File>;
  mimeType: Scalars['String'];
  node_locale: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  placeholderUrl: Maybe<Scalars['String']>;
  publicUrl: Scalars['String'];
  resize: Maybe<RemoteFileResize>;
  spaceId: Maybe<Scalars['String']>;
  svg: Maybe<InlineSvg>;
  sys: Maybe<ContentfulAssetSys>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['Date']>;
  url: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};


export type ContentfulAssetCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetGatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cropFocus: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  cropFocus: InputMaybe<ContentfulImageCropFocus>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<GatsbyImagePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  resizingBehavior: InputMaybe<ImageResizingBehavior>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetResizeArgs = {
  cropFocus: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulAssetEdge>;
  group: Array<ContentfulAssetGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFields = {
  localFile: Maybe<Scalars['String']>;
};

export enum ContentfulAssetFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  ContentfulId = 39,
  CreatedAt = 40,
  Description = 41,
  FieldsLocalFile = 42,
  FileContentType = 43,
  FileDetailsImageHeight = 44,
  FileDetailsImageWidth = 45,
  FileDetailsSize = 46,
  FileFileName = 47,
  FileUrl = 48,
  Filename = 49,
  Filesize = 50,
  GatsbyImage = 51,
  GatsbyImageData = 52,
  Height = 53,
  Id = 54,
  InternalContent = 55,
  InternalContentDigest = 56,
  InternalDescription = 57,
  InternalFieldOwners = 58,
  InternalIgnoreType = 59,
  InternalMediaType = 60,
  InternalOwner = 61,
  InternalType = 62,
  LocalFileAbsolutePath = 63,
  LocalFileAccessTime = 64,
  LocalFileAtime = 65,
  LocalFileAtimeMs = 66,
  LocalFileBase = 67,
  LocalFileBirthTime = 68,
  LocalFileBirthtime = 69,
  LocalFileBirthtimeMs = 70,
  LocalFileBlksize = 71,
  LocalFileBlocks = 72,
  LocalFileChangeTime = 73,
  LocalFileChildImageSharpChildren = 74,
  LocalFileChildImageSharpChildrenChildren = 75,
  LocalFileChildImageSharpChildrenId = 76,
  LocalFileChildImageSharpFixedAspectRatio = 77,
  LocalFileChildImageSharpFixedBase64 = 78,
  LocalFileChildImageSharpFixedHeight = 79,
  LocalFileChildImageSharpFixedOriginalName = 80,
  LocalFileChildImageSharpFixedSrc = 81,
  LocalFileChildImageSharpFixedSrcSet = 82,
  LocalFileChildImageSharpFixedSrcSetWebp = 83,
  LocalFileChildImageSharpFixedSrcWebp = 84,
  LocalFileChildImageSharpFixedTracedSvg = 85,
  LocalFileChildImageSharpFixedWidth = 86,
  LocalFileChildImageSharpFluidAspectRatio = 87,
  LocalFileChildImageSharpFluidBase64 = 88,
  LocalFileChildImageSharpFluidOriginalImg = 89,
  LocalFileChildImageSharpFluidOriginalName = 90,
  LocalFileChildImageSharpFluidPresentationHeight = 91,
  LocalFileChildImageSharpFluidPresentationWidth = 92,
  LocalFileChildImageSharpFluidSizes = 93,
  LocalFileChildImageSharpFluidSrc = 94,
  LocalFileChildImageSharpFluidSrcSet = 95,
  LocalFileChildImageSharpFluidSrcSetWebp = 96,
  LocalFileChildImageSharpFluidSrcWebp = 97,
  LocalFileChildImageSharpFluidTracedSvg = 98,
  LocalFileChildImageSharpGatsbyImageData = 99,
  LocalFileChildImageSharpId = 100,
  LocalFileChildImageSharpInternalContent = 101,
  LocalFileChildImageSharpInternalContentDigest = 102,
  LocalFileChildImageSharpInternalDescription = 103,
  LocalFileChildImageSharpInternalFieldOwners = 104,
  LocalFileChildImageSharpInternalIgnoreType = 105,
  LocalFileChildImageSharpInternalMediaType = 106,
  LocalFileChildImageSharpInternalOwner = 107,
  LocalFileChildImageSharpInternalType = 108,
  LocalFileChildImageSharpOriginalHeight = 109,
  LocalFileChildImageSharpOriginalSrc = 110,
  LocalFileChildImageSharpOriginalWidth = 111,
  LocalFileChildImageSharpParentChildren = 112,
  LocalFileChildImageSharpParentId = 113,
  LocalFileChildImageSharpResizeAspectRatio = 114,
  LocalFileChildImageSharpResizeHeight = 115,
  LocalFileChildImageSharpResizeOriginalName = 116,
  LocalFileChildImageSharpResizeSrc = 117,
  LocalFileChildImageSharpResizeTracedSvg = 118,
  LocalFileChildImageSharpResizeWidth = 119,
  LocalFileChildLocaleChildren = 120,
  LocalFileChildLocaleChildrenChildren = 121,
  LocalFileChildLocaleChildrenId = 122,
  LocalFileChildLocaleData = 123,
  LocalFileChildLocaleFileAbsolutePath = 124,
  LocalFileChildLocaleId = 125,
  LocalFileChildLocaleInternalContent = 126,
  LocalFileChildLocaleInternalContentDigest = 127,
  LocalFileChildLocaleInternalDescription = 128,
  LocalFileChildLocaleInternalFieldOwners = 129,
  LocalFileChildLocaleInternalIgnoreType = 130,
  LocalFileChildLocaleInternalMediaType = 131,
  LocalFileChildLocaleInternalOwner = 132,
  LocalFileChildLocaleInternalType = 133,
  LocalFileChildLocaleLanguage = 134,
  LocalFileChildLocaleNs = 135,
  LocalFileChildLocaleParentChildren = 136,
  LocalFileChildLocaleParentId = 137,
  LocalFileChildren = 138,
  LocalFileChildrenImageSharp = 139,
  LocalFileChildrenImageSharpChildren = 140,
  LocalFileChildrenImageSharpChildrenChildren = 141,
  LocalFileChildrenImageSharpChildrenId = 142,
  LocalFileChildrenImageSharpFixedAspectRatio = 143,
  LocalFileChildrenImageSharpFixedBase64 = 144,
  LocalFileChildrenImageSharpFixedHeight = 145,
  LocalFileChildrenImageSharpFixedOriginalName = 146,
  LocalFileChildrenImageSharpFixedSrc = 147,
  LocalFileChildrenImageSharpFixedSrcSet = 148,
  LocalFileChildrenImageSharpFixedSrcSetWebp = 149,
  LocalFileChildrenImageSharpFixedSrcWebp = 150,
  LocalFileChildrenImageSharpFixedTracedSvg = 151,
  LocalFileChildrenImageSharpFixedWidth = 152,
  LocalFileChildrenImageSharpFluidAspectRatio = 153,
  LocalFileChildrenImageSharpFluidBase64 = 154,
  LocalFileChildrenImageSharpFluidOriginalImg = 155,
  LocalFileChildrenImageSharpFluidOriginalName = 156,
  LocalFileChildrenImageSharpFluidPresentationHeight = 157,
  LocalFileChildrenImageSharpFluidPresentationWidth = 158,
  LocalFileChildrenImageSharpFluidSizes = 159,
  LocalFileChildrenImageSharpFluidSrc = 160,
  LocalFileChildrenImageSharpFluidSrcSet = 161,
  LocalFileChildrenImageSharpFluidSrcSetWebp = 162,
  LocalFileChildrenImageSharpFluidSrcWebp = 163,
  LocalFileChildrenImageSharpFluidTracedSvg = 164,
  LocalFileChildrenImageSharpGatsbyImageData = 165,
  LocalFileChildrenImageSharpId = 166,
  LocalFileChildrenImageSharpInternalContent = 167,
  LocalFileChildrenImageSharpInternalContentDigest = 168,
  LocalFileChildrenImageSharpInternalDescription = 169,
  LocalFileChildrenImageSharpInternalFieldOwners = 170,
  LocalFileChildrenImageSharpInternalIgnoreType = 171,
  LocalFileChildrenImageSharpInternalMediaType = 172,
  LocalFileChildrenImageSharpInternalOwner = 173,
  LocalFileChildrenImageSharpInternalType = 174,
  LocalFileChildrenImageSharpOriginalHeight = 175,
  LocalFileChildrenImageSharpOriginalSrc = 176,
  LocalFileChildrenImageSharpOriginalWidth = 177,
  LocalFileChildrenImageSharpParentChildren = 178,
  LocalFileChildrenImageSharpParentId = 179,
  LocalFileChildrenImageSharpResizeAspectRatio = 180,
  LocalFileChildrenImageSharpResizeHeight = 181,
  LocalFileChildrenImageSharpResizeOriginalName = 182,
  LocalFileChildrenImageSharpResizeSrc = 183,
  LocalFileChildrenImageSharpResizeTracedSvg = 184,
  LocalFileChildrenImageSharpResizeWidth = 185,
  LocalFileChildrenLocale = 186,
  LocalFileChildrenLocaleChildren = 187,
  LocalFileChildrenLocaleChildrenChildren = 188,
  LocalFileChildrenLocaleChildrenId = 189,
  LocalFileChildrenLocaleData = 190,
  LocalFileChildrenLocaleFileAbsolutePath = 191,
  LocalFileChildrenLocaleId = 192,
  LocalFileChildrenLocaleInternalContent = 193,
  LocalFileChildrenLocaleInternalContentDigest = 194,
  LocalFileChildrenLocaleInternalDescription = 195,
  LocalFileChildrenLocaleInternalFieldOwners = 196,
  LocalFileChildrenLocaleInternalIgnoreType = 197,
  LocalFileChildrenLocaleInternalMediaType = 198,
  LocalFileChildrenLocaleInternalOwner = 199,
  LocalFileChildrenLocaleInternalType = 200,
  LocalFileChildrenLocaleLanguage = 201,
  LocalFileChildrenLocaleNs = 202,
  LocalFileChildrenLocaleParentChildren = 203,
  LocalFileChildrenLocaleParentId = 204,
  LocalFileChildrenChildren = 205,
  LocalFileChildrenChildrenChildren = 206,
  LocalFileChildrenChildrenId = 207,
  LocalFileChildrenId = 208,
  LocalFileChildrenInternalContent = 209,
  LocalFileChildrenInternalContentDigest = 210,
  LocalFileChildrenInternalDescription = 211,
  LocalFileChildrenInternalFieldOwners = 212,
  LocalFileChildrenInternalIgnoreType = 213,
  LocalFileChildrenInternalMediaType = 214,
  LocalFileChildrenInternalOwner = 215,
  LocalFileChildrenInternalType = 216,
  LocalFileChildrenParentChildren = 217,
  LocalFileChildrenParentId = 218,
  LocalFileCtime = 219,
  LocalFileCtimeMs = 220,
  LocalFileDev = 221,
  LocalFileDir = 222,
  LocalFileExt = 223,
  LocalFileExtension = 224,
  LocalFileGid = 225,
  LocalFileId = 226,
  LocalFileIno = 227,
  LocalFileInternalContent = 228,
  LocalFileInternalContentDigest = 229,
  LocalFileInternalDescription = 230,
  LocalFileInternalFieldOwners = 231,
  LocalFileInternalIgnoreType = 232,
  LocalFileInternalMediaType = 233,
  LocalFileInternalOwner = 234,
  LocalFileInternalType = 235,
  LocalFileMode = 236,
  LocalFileModifiedTime = 237,
  LocalFileMtime = 238,
  LocalFileMtimeMs = 239,
  LocalFileName = 240,
  LocalFileNlink = 241,
  LocalFileParentChildren = 242,
  LocalFileParentChildrenChildren = 243,
  LocalFileParentChildrenId = 244,
  LocalFileParentId = 245,
  LocalFileParentInternalContent = 246,
  LocalFileParentInternalContentDigest = 247,
  LocalFileParentInternalDescription = 248,
  LocalFileParentInternalFieldOwners = 249,
  LocalFileParentInternalIgnoreType = 250,
  LocalFileParentInternalMediaType = 251,
  LocalFileParentInternalOwner = 252,
  LocalFileParentInternalType = 253,
  LocalFileParentParentChildren = 254,
  LocalFileParentParentId = 255,
  LocalFilePrettySize = 256,
  LocalFilePublicUrl = 257,
  LocalFileRdev = 258,
  LocalFileRelativeDirectory = 259,
  LocalFileRelativePath = 260,
  LocalFileRoot = 261,
  LocalFileSize = 262,
  LocalFileSourceInstanceName = 263,
  LocalFileUid = 264,
  LocalFileUrl = 265,
  MimeType = 266,
  NodeLocale = 267,
  ParentChildren = 268,
  ParentChildrenChildren = 269,
  ParentChildrenChildrenChildren = 270,
  ParentChildrenChildrenId = 271,
  ParentChildrenId = 272,
  ParentChildrenInternalContent = 273,
  ParentChildrenInternalContentDigest = 274,
  ParentChildrenInternalDescription = 275,
  ParentChildrenInternalFieldOwners = 276,
  ParentChildrenInternalIgnoreType = 277,
  ParentChildrenInternalMediaType = 278,
  ParentChildrenInternalOwner = 279,
  ParentChildrenInternalType = 280,
  ParentChildrenParentChildren = 281,
  ParentChildrenParentId = 282,
  ParentId = 283,
  ParentInternalContent = 284,
  ParentInternalContentDigest = 285,
  ParentInternalDescription = 286,
  ParentInternalFieldOwners = 287,
  ParentInternalIgnoreType = 288,
  ParentInternalMediaType = 289,
  ParentInternalOwner = 290,
  ParentInternalType = 291,
  ParentParentChildren = 292,
  ParentParentChildrenChildren = 293,
  ParentParentChildrenId = 294,
  ParentParentId = 295,
  ParentParentInternalContent = 296,
  ParentParentInternalContentDigest = 297,
  ParentParentInternalDescription = 298,
  ParentParentInternalFieldOwners = 299,
  ParentParentInternalIgnoreType = 300,
  ParentParentInternalMediaType = 301,
  ParentParentInternalOwner = 302,
  ParentParentInternalType = 303,
  ParentParentParentChildren = 304,
  ParentParentParentId = 305,
  PlaceholderUrl = 306,
  PublicUrl = 307,
  ResizeHeight = 308,
  ResizeSrc = 309,
  ResizeWidth = 310,
  SpaceId = 311,
  SysRevision = 312,
  SysType = 313,
  Title = 314,
  UpdatedAt = 315,
  Url = 316,
  Width = 317
}

export type ContentfulAssetFieldsFilterInput = {
  localFile: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFile = {
  contentType: Maybe<Scalars['String']>;
  details: Maybe<ContentfulAssetFileDetails>;
  fileName: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  image: Maybe<ContentfulAssetFileDetailsImage>;
  size: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  image: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
  size: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsImage = {
  height: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  height: InputMaybe<IntQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  contentType: InputMaybe<StringQueryOperatorInput>;
  details: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  fields: InputMaybe<ContentfulAssetFieldsFilterInput>;
  file: InputMaybe<ContentfulAssetFileFilterInput>;
  filename: InputMaybe<StringQueryOperatorInput>;
  filesize: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  localFile: InputMaybe<FileFilterInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  placeholderUrl: InputMaybe<StringQueryOperatorInput>;
  publicUrl: InputMaybe<StringQueryOperatorInput>;
  resize: InputMaybe<RemoteFileResizeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulAssetSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulAssetEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulAssetFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulAssetSysFilterInput = {
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPost = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulBlogPostContentTextNode or null if there are no children of given type on this node */
  childContentfulBlogPostContentTextNode: Maybe<ContentfulBlogPostContentTextNode>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type contentfulBlogPostContentTextNode */
  childrenContentfulBlogPostContentTextNode: Maybe<Array<Maybe<ContentfulBlogPostContentTextNode>>>;
  content: Maybe<ContentfulBlogPostContentTextNode>;
  contentful_id: Scalars['String'];
  created: Maybe<Scalars['Date']>;
  createdAt: Maybe<Scalars['Date']>;
  excerpt: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  slug: Maybe<Scalars['String']>;
  spaceId: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulBlogPostSys>;
  tags: Maybe<Array<Maybe<ContentfulTag>>>;
  title: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['Date']>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulBlogPostCreatedArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulBlogPostConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulBlogPostEdge>;
  group: Array<ContentfulBlogPostGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  field: ContentfulBlogPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogPostConnectionMaxArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionMinArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionSumArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostEdge = {
  next: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous: Maybe<ContentfulBlogPost>;
};

export enum ContentfulBlogPostFieldsEnum {
  ChildContentfulBlogPostContentTextNodeChildMdxBody = 0,
  ChildContentfulBlogPostContentTextNodeChildMdxChildren = 1,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 2,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenId = 3,
  ChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 4,
  ChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 5,
  ChildContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 6,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadings = 7,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 8,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 9,
  ChildContentfulBlogPostContentTextNodeChildMdxHtml = 10,
  ChildContentfulBlogPostContentTextNodeChildMdxId = 11,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContent = 12,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 13,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalDescription = 14,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 15,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 16,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 17,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalOwner = 18,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalType = 19,
  ChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 20,
  ChildContentfulBlogPostContentTextNodeChildMdxParentChildren = 21,
  ChildContentfulBlogPostContentTextNodeChildMdxParentId = 22,
  ChildContentfulBlogPostContentTextNodeChildMdxRawBody = 23,
  ChildContentfulBlogPostContentTextNodeChildMdxSlug = 24,
  ChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 25,
  ChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 26,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 27,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 28,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountWords = 29,
  ChildContentfulBlogPostContentTextNodeChildren = 30,
  ChildContentfulBlogPostContentTextNodeChildrenMdx = 31,
  ChildContentfulBlogPostContentTextNodeChildrenMdxBody = 32,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 33,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 34,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 35,
  ChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 36,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 37,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 38,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 39,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 40,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 41,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 42,
  ChildContentfulBlogPostContentTextNodeChildrenMdxId = 43,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 44,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 45,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 46,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 47,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 48,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 49,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 50,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalType = 51,
  ChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 52,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 53,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentId = 54,
  ChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 55,
  ChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 56,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 57,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 58,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 59,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 60,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 61,
  ChildContentfulBlogPostContentTextNodeChildrenChildren = 62,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenChildren = 63,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenId = 64,
  ChildContentfulBlogPostContentTextNodeChildrenId = 65,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContent = 66,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 67,
  ChildContentfulBlogPostContentTextNodeChildrenInternalDescription = 68,
  ChildContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 69,
  ChildContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 70,
  ChildContentfulBlogPostContentTextNodeChildrenInternalMediaType = 71,
  ChildContentfulBlogPostContentTextNodeChildrenInternalOwner = 72,
  ChildContentfulBlogPostContentTextNodeChildrenInternalType = 73,
  ChildContentfulBlogPostContentTextNodeChildrenParentChildren = 74,
  ChildContentfulBlogPostContentTextNodeChildrenParentId = 75,
  ChildContentfulBlogPostContentTextNodeContent = 76,
  ChildContentfulBlogPostContentTextNodeId = 77,
  ChildContentfulBlogPostContentTextNodeInternalContent = 78,
  ChildContentfulBlogPostContentTextNodeInternalContentDigest = 79,
  ChildContentfulBlogPostContentTextNodeInternalDescription = 80,
  ChildContentfulBlogPostContentTextNodeInternalFieldOwners = 81,
  ChildContentfulBlogPostContentTextNodeInternalIgnoreType = 82,
  ChildContentfulBlogPostContentTextNodeInternalMediaType = 83,
  ChildContentfulBlogPostContentTextNodeInternalOwner = 84,
  ChildContentfulBlogPostContentTextNodeInternalType = 85,
  ChildContentfulBlogPostContentTextNodeParentChildren = 86,
  ChildContentfulBlogPostContentTextNodeParentChildrenChildren = 87,
  ChildContentfulBlogPostContentTextNodeParentChildrenId = 88,
  ChildContentfulBlogPostContentTextNodeParentId = 89,
  ChildContentfulBlogPostContentTextNodeParentInternalContent = 90,
  ChildContentfulBlogPostContentTextNodeParentInternalContentDigest = 91,
  ChildContentfulBlogPostContentTextNodeParentInternalDescription = 92,
  ChildContentfulBlogPostContentTextNodeParentInternalFieldOwners = 93,
  ChildContentfulBlogPostContentTextNodeParentInternalIgnoreType = 94,
  ChildContentfulBlogPostContentTextNodeParentInternalMediaType = 95,
  ChildContentfulBlogPostContentTextNodeParentInternalOwner = 96,
  ChildContentfulBlogPostContentTextNodeParentInternalType = 97,
  ChildContentfulBlogPostContentTextNodeParentParentChildren = 98,
  ChildContentfulBlogPostContentTextNodeParentParentId = 99,
  ChildContentfulBlogPostContentTextNodeSysType = 100,
  Children = 101,
  ChildrenContentfulBlogPostContentTextNode = 102,
  ChildrenContentfulBlogPostContentTextNodeChildMdxBody = 103,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 104,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 105,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenId = 106,
  ChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 107,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 108,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 109,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 110,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 111,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 112,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 113,
  ChildrenContentfulBlogPostContentTextNodeChildMdxId = 114,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContent = 115,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 116,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalDescription = 117,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 118,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 119,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 120,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalOwner = 121,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalType = 122,
  ChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 123,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentChildren = 124,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentId = 125,
  ChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 126,
  ChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 127,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 128,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 129,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 130,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 131,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountWords = 132,
  ChildrenContentfulBlogPostContentTextNodeChildren = 133,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdx = 134,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 135,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 136,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 137,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 138,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 139,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 140,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 141,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 142,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 143,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 144,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 145,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 146,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 147,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 148,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 149,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 150,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 151,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 152,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 153,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalType = 154,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 155,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 156,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentId = 157,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 158,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 159,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 160,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 161,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 162,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 163,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 164,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildren = 165,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenChildren = 166,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenId = 167,
  ChildrenContentfulBlogPostContentTextNodeChildrenId = 168,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContent = 169,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 170,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalDescription = 171,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 172,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 173,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalMediaType = 174,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalOwner = 175,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalType = 176,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentChildren = 177,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentId = 178,
  ChildrenContentfulBlogPostContentTextNodeContent = 179,
  ChildrenContentfulBlogPostContentTextNodeId = 180,
  ChildrenContentfulBlogPostContentTextNodeInternalContent = 181,
  ChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 182,
  ChildrenContentfulBlogPostContentTextNodeInternalDescription = 183,
  ChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 184,
  ChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 185,
  ChildrenContentfulBlogPostContentTextNodeInternalMediaType = 186,
  ChildrenContentfulBlogPostContentTextNodeInternalOwner = 187,
  ChildrenContentfulBlogPostContentTextNodeInternalType = 188,
  ChildrenContentfulBlogPostContentTextNodeParentChildren = 189,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenChildren = 190,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenId = 191,
  ChildrenContentfulBlogPostContentTextNodeParentId = 192,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContent = 193,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentDigest = 194,
  ChildrenContentfulBlogPostContentTextNodeParentInternalDescription = 195,
  ChildrenContentfulBlogPostContentTextNodeParentInternalFieldOwners = 196,
  ChildrenContentfulBlogPostContentTextNodeParentInternalIgnoreType = 197,
  ChildrenContentfulBlogPostContentTextNodeParentInternalMediaType = 198,
  ChildrenContentfulBlogPostContentTextNodeParentInternalOwner = 199,
  ChildrenContentfulBlogPostContentTextNodeParentInternalType = 200,
  ChildrenContentfulBlogPostContentTextNodeParentParentChildren = 201,
  ChildrenContentfulBlogPostContentTextNodeParentParentId = 202,
  ChildrenContentfulBlogPostContentTextNodeSysType = 203,
  ChildrenChildren = 204,
  ChildrenChildrenChildren = 205,
  ChildrenChildrenChildrenChildren = 206,
  ChildrenChildrenChildrenId = 207,
  ChildrenChildrenId = 208,
  ChildrenChildrenInternalContent = 209,
  ChildrenChildrenInternalContentDigest = 210,
  ChildrenChildrenInternalDescription = 211,
  ChildrenChildrenInternalFieldOwners = 212,
  ChildrenChildrenInternalIgnoreType = 213,
  ChildrenChildrenInternalMediaType = 214,
  ChildrenChildrenInternalOwner = 215,
  ChildrenChildrenInternalType = 216,
  ChildrenChildrenParentChildren = 217,
  ChildrenChildrenParentId = 218,
  ChildrenId = 219,
  ChildrenInternalContent = 220,
  ChildrenInternalContentDigest = 221,
  ChildrenInternalDescription = 222,
  ChildrenInternalFieldOwners = 223,
  ChildrenInternalIgnoreType = 224,
  ChildrenInternalMediaType = 225,
  ChildrenInternalOwner = 226,
  ChildrenInternalType = 227,
  ChildrenParentChildren = 228,
  ChildrenParentChildrenChildren = 229,
  ChildrenParentChildrenId = 230,
  ChildrenParentId = 231,
  ChildrenParentInternalContent = 232,
  ChildrenParentInternalContentDigest = 233,
  ChildrenParentInternalDescription = 234,
  ChildrenParentInternalFieldOwners = 235,
  ChildrenParentInternalIgnoreType = 236,
  ChildrenParentInternalMediaType = 237,
  ChildrenParentInternalOwner = 238,
  ChildrenParentInternalType = 239,
  ChildrenParentParentChildren = 240,
  ChildrenParentParentId = 241,
  ContentChildMdxBody = 242,
  ContentChildMdxChildren = 243,
  ContentChildMdxChildrenChildren = 244,
  ContentChildMdxChildrenId = 245,
  ContentChildMdxExcerpt = 246,
  ContentChildMdxFileAbsolutePath = 247,
  ContentChildMdxFrontmatterTitle = 248,
  ContentChildMdxHeadings = 249,
  ContentChildMdxHeadingsDepth = 250,
  ContentChildMdxHeadingsValue = 251,
  ContentChildMdxHtml = 252,
  ContentChildMdxId = 253,
  ContentChildMdxInternalContent = 254,
  ContentChildMdxInternalContentDigest = 255,
  ContentChildMdxInternalDescription = 256,
  ContentChildMdxInternalFieldOwners = 257,
  ContentChildMdxInternalIgnoreType = 258,
  ContentChildMdxInternalMediaType = 259,
  ContentChildMdxInternalOwner = 260,
  ContentChildMdxInternalType = 261,
  ContentChildMdxMdxAst = 262,
  ContentChildMdxParentChildren = 263,
  ContentChildMdxParentId = 264,
  ContentChildMdxRawBody = 265,
  ContentChildMdxSlug = 266,
  ContentChildMdxTableOfContents = 267,
  ContentChildMdxTimeToRead = 268,
  ContentChildMdxWordCountParagraphs = 269,
  ContentChildMdxWordCountSentences = 270,
  ContentChildMdxWordCountWords = 271,
  ContentChildren = 272,
  ContentChildrenMdx = 273,
  ContentChildrenMdxBody = 274,
  ContentChildrenMdxChildren = 275,
  ContentChildrenMdxChildrenChildren = 276,
  ContentChildrenMdxChildrenId = 277,
  ContentChildrenMdxExcerpt = 278,
  ContentChildrenMdxFileAbsolutePath = 279,
  ContentChildrenMdxFrontmatterTitle = 280,
  ContentChildrenMdxHeadings = 281,
  ContentChildrenMdxHeadingsDepth = 282,
  ContentChildrenMdxHeadingsValue = 283,
  ContentChildrenMdxHtml = 284,
  ContentChildrenMdxId = 285,
  ContentChildrenMdxInternalContent = 286,
  ContentChildrenMdxInternalContentDigest = 287,
  ContentChildrenMdxInternalDescription = 288,
  ContentChildrenMdxInternalFieldOwners = 289,
  ContentChildrenMdxInternalIgnoreType = 290,
  ContentChildrenMdxInternalMediaType = 291,
  ContentChildrenMdxInternalOwner = 292,
  ContentChildrenMdxInternalType = 293,
  ContentChildrenMdxMdxAst = 294,
  ContentChildrenMdxParentChildren = 295,
  ContentChildrenMdxParentId = 296,
  ContentChildrenMdxRawBody = 297,
  ContentChildrenMdxSlug = 298,
  ContentChildrenMdxTableOfContents = 299,
  ContentChildrenMdxTimeToRead = 300,
  ContentChildrenMdxWordCountParagraphs = 301,
  ContentChildrenMdxWordCountSentences = 302,
  ContentChildrenMdxWordCountWords = 303,
  ContentChildrenChildren = 304,
  ContentChildrenChildrenChildren = 305,
  ContentChildrenChildrenId = 306,
  ContentChildrenId = 307,
  ContentChildrenInternalContent = 308,
  ContentChildrenInternalContentDigest = 309,
  ContentChildrenInternalDescription = 310,
  ContentChildrenInternalFieldOwners = 311,
  ContentChildrenInternalIgnoreType = 312,
  ContentChildrenInternalMediaType = 313,
  ContentChildrenInternalOwner = 314,
  ContentChildrenInternalType = 315,
  ContentChildrenParentChildren = 316,
  ContentChildrenParentId = 317,
  ContentContent = 318,
  ContentId = 319,
  ContentInternalContent = 320,
  ContentInternalContentDigest = 321,
  ContentInternalDescription = 322,
  ContentInternalFieldOwners = 323,
  ContentInternalIgnoreType = 324,
  ContentInternalMediaType = 325,
  ContentInternalOwner = 326,
  ContentInternalType = 327,
  ContentParentChildren = 328,
  ContentParentChildrenChildren = 329,
  ContentParentChildrenId = 330,
  ContentParentId = 331,
  ContentParentInternalContent = 332,
  ContentParentInternalContentDigest = 333,
  ContentParentInternalDescription = 334,
  ContentParentInternalFieldOwners = 335,
  ContentParentInternalIgnoreType = 336,
  ContentParentInternalMediaType = 337,
  ContentParentInternalOwner = 338,
  ContentParentInternalType = 339,
  ContentParentParentChildren = 340,
  ContentParentParentId = 341,
  ContentSysType = 342,
  ContentfulId = 343,
  Created = 344,
  CreatedAt = 345,
  Excerpt = 346,
  Id = 347,
  InternalContent = 348,
  InternalContentDigest = 349,
  InternalDescription = 350,
  InternalFieldOwners = 351,
  InternalIgnoreType = 352,
  InternalMediaType = 353,
  InternalOwner = 354,
  InternalType = 355,
  NodeLocale = 356,
  ParentChildren = 357,
  ParentChildrenChildren = 358,
  ParentChildrenChildrenChildren = 359,
  ParentChildrenChildrenId = 360,
  ParentChildrenId = 361,
  ParentChildrenInternalContent = 362,
  ParentChildrenInternalContentDigest = 363,
  ParentChildrenInternalDescription = 364,
  ParentChildrenInternalFieldOwners = 365,
  ParentChildrenInternalIgnoreType = 366,
  ParentChildrenInternalMediaType = 367,
  ParentChildrenInternalOwner = 368,
  ParentChildrenInternalType = 369,
  ParentChildrenParentChildren = 370,
  ParentChildrenParentId = 371,
  ParentId = 372,
  ParentInternalContent = 373,
  ParentInternalContentDigest = 374,
  ParentInternalDescription = 375,
  ParentInternalFieldOwners = 376,
  ParentInternalIgnoreType = 377,
  ParentInternalMediaType = 378,
  ParentInternalOwner = 379,
  ParentInternalType = 380,
  ParentParentChildren = 381,
  ParentParentChildrenChildren = 382,
  ParentParentChildrenId = 383,
  ParentParentId = 384,
  ParentParentInternalContent = 385,
  ParentParentInternalContentDigest = 386,
  ParentParentInternalDescription = 387,
  ParentParentInternalFieldOwners = 388,
  ParentParentInternalIgnoreType = 389,
  ParentParentInternalMediaType = 390,
  ParentParentInternalOwner = 391,
  ParentParentInternalType = 392,
  ParentParentParentChildren = 393,
  ParentParentParentId = 394,
  Slug = 395,
  SpaceId = 396,
  SysContentTypeSysId = 397,
  SysContentTypeSysLinkType = 398,
  SysContentTypeSysType = 399,
  SysRevision = 400,
  SysType = 401,
  Tags = 402,
  TagsBlogPost = 403,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 404,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 405,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 406,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 407,
  TagsBlogPostChildren = 408,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 409,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 410,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 411,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 412,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 413,
  TagsBlogPostChildrenChildren = 414,
  TagsBlogPostChildrenId = 415,
  TagsBlogPostContentChildren = 416,
  TagsBlogPostContentChildrenMdx = 417,
  TagsBlogPostContentContent = 418,
  TagsBlogPostContentId = 419,
  TagsBlogPostContentfulId = 420,
  TagsBlogPostCreated = 421,
  TagsBlogPostCreatedAt = 422,
  TagsBlogPostExcerpt = 423,
  TagsBlogPostId = 424,
  TagsBlogPostInternalContent = 425,
  TagsBlogPostInternalContentDigest = 426,
  TagsBlogPostInternalDescription = 427,
  TagsBlogPostInternalFieldOwners = 428,
  TagsBlogPostInternalIgnoreType = 429,
  TagsBlogPostInternalMediaType = 430,
  TagsBlogPostInternalOwner = 431,
  TagsBlogPostInternalType = 432,
  TagsBlogPostNodeLocale = 433,
  TagsBlogPostParentChildren = 434,
  TagsBlogPostParentId = 435,
  TagsBlogPostSlug = 436,
  TagsBlogPostSpaceId = 437,
  TagsBlogPostSysRevision = 438,
  TagsBlogPostSysType = 439,
  TagsBlogPostTags = 440,
  TagsBlogPostTagsBlogPost = 441,
  TagsBlogPostTagsChildren = 442,
  TagsBlogPostTagsContentfulId = 443,
  TagsBlogPostTagsCreatedAt = 444,
  TagsBlogPostTagsId = 445,
  TagsBlogPostTagsLevel = 446,
  TagsBlogPostTagsName = 447,
  TagsBlogPostTagsNodeLocale = 448,
  TagsBlogPostTagsOss = 449,
  TagsBlogPostTagsProject = 450,
  TagsBlogPostTagsSkillMap = 451,
  TagsBlogPostTagsSpaceId = 452,
  TagsBlogPostTagsUpdatedAt = 453,
  TagsBlogPostTitle = 454,
  TagsBlogPostUpdated = 455,
  TagsBlogPostUpdatedAt = 456,
  TagsChildren = 457,
  TagsChildrenChildren = 458,
  TagsChildrenChildrenChildren = 459,
  TagsChildrenChildrenId = 460,
  TagsChildrenId = 461,
  TagsChildrenInternalContent = 462,
  TagsChildrenInternalContentDigest = 463,
  TagsChildrenInternalDescription = 464,
  TagsChildrenInternalFieldOwners = 465,
  TagsChildrenInternalIgnoreType = 466,
  TagsChildrenInternalMediaType = 467,
  TagsChildrenInternalOwner = 468,
  TagsChildrenInternalType = 469,
  TagsChildrenParentChildren = 470,
  TagsChildrenParentId = 471,
  TagsContentfulId = 472,
  TagsCreatedAt = 473,
  TagsId = 474,
  TagsInternalContent = 475,
  TagsInternalContentDigest = 476,
  TagsInternalDescription = 477,
  TagsInternalFieldOwners = 478,
  TagsInternalIgnoreType = 479,
  TagsInternalMediaType = 480,
  TagsInternalOwner = 481,
  TagsInternalType = 482,
  TagsLevel = 483,
  TagsName = 484,
  TagsNodeLocale = 485,
  TagsOss = 486,
  TagsOssChildContentfulOssDetailTextNodeChildren = 487,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 488,
  TagsOssChildContentfulOssDetailTextNodeDetail = 489,
  TagsOssChildContentfulOssDetailTextNodeId = 490,
  TagsOssChildren = 491,
  TagsOssChildrenContentfulOssDetailTextNode = 492,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 493,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 494,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 495,
  TagsOssChildrenContentfulOssDetailTextNodeId = 496,
  TagsOssChildrenChildren = 497,
  TagsOssChildrenId = 498,
  TagsOssContentfulId = 499,
  TagsOssCreatedAt = 500,
  TagsOssDetailChildren = 501,
  TagsOssDetailChildrenMdx = 502,
  TagsOssDetailDetail = 503,
  TagsOssDetailId = 504,
  TagsOssHref = 505,
  TagsOssIconChildren = 506,
  TagsOssIconChildrenContentfulIconSvgTextNode = 507,
  TagsOssIconContact = 508,
  TagsOssIconContentfulId = 509,
  TagsOssIconCreatedAt = 510,
  TagsOssIconHistory = 511,
  TagsOssIconId = 512,
  TagsOssIconName = 513,
  TagsOssIconNodeLocale = 514,
  TagsOssIconOss = 515,
  TagsOssIconProject = 516,
  TagsOssIconSpaceId = 517,
  TagsOssIconUpdatedAt = 518,
  TagsOssIconWhatICanDo = 519,
  TagsOssId = 520,
  TagsOssImageChildren = 521,
  TagsOssImageContentfulId = 522,
  TagsOssImageCreatedAt = 523,
  TagsOssImageDescription = 524,
  TagsOssImageFilename = 525,
  TagsOssImageFilesize = 526,
  TagsOssImageGatsbyImage = 527,
  TagsOssImageGatsbyImageData = 528,
  TagsOssImageHeight = 529,
  TagsOssImageId = 530,
  TagsOssImageMimeType = 531,
  TagsOssImageNodeLocale = 532,
  TagsOssImagePlaceholderUrl = 533,
  TagsOssImagePublicUrl = 534,
  TagsOssImageSpaceId = 535,
  TagsOssImageTitle = 536,
  TagsOssImageUpdatedAt = 537,
  TagsOssImageUrl = 538,
  TagsOssImageWidth = 539,
  TagsOssInternalContent = 540,
  TagsOssInternalContentDigest = 541,
  TagsOssInternalDescription = 542,
  TagsOssInternalFieldOwners = 543,
  TagsOssInternalIgnoreType = 544,
  TagsOssInternalMediaType = 545,
  TagsOssInternalOwner = 546,
  TagsOssInternalType = 547,
  TagsOssName = 548,
  TagsOssNodeLocale = 549,
  TagsOssParentChildren = 550,
  TagsOssParentId = 551,
  TagsOssSpaceId = 552,
  TagsOssStartDate = 553,
  TagsOssSubName = 554,
  TagsOssSysRevision = 555,
  TagsOssSysType = 556,
  TagsOssTags = 557,
  TagsOssTagsBlogPost = 558,
  TagsOssTagsChildren = 559,
  TagsOssTagsContentfulId = 560,
  TagsOssTagsCreatedAt = 561,
  TagsOssTagsId = 562,
  TagsOssTagsLevel = 563,
  TagsOssTagsName = 564,
  TagsOssTagsNodeLocale = 565,
  TagsOssTagsOss = 566,
  TagsOssTagsProject = 567,
  TagsOssTagsSkillMap = 568,
  TagsOssTagsSpaceId = 569,
  TagsOssTagsUpdatedAt = 570,
  TagsOssUpdatedAt = 571,
  TagsParentChildren = 572,
  TagsParentChildrenChildren = 573,
  TagsParentChildrenId = 574,
  TagsParentId = 575,
  TagsParentInternalContent = 576,
  TagsParentInternalContentDigest = 577,
  TagsParentInternalDescription = 578,
  TagsParentInternalFieldOwners = 579,
  TagsParentInternalIgnoreType = 580,
  TagsParentInternalMediaType = 581,
  TagsParentInternalOwner = 582,
  TagsParentInternalType = 583,
  TagsParentParentChildren = 584,
  TagsParentParentId = 585,
  TagsProject = 586,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 587,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 588,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 589,
  TagsProjectChildContentfulProjectDetailTextNodeId = 590,
  TagsProjectChildren = 591,
  TagsProjectChildrenContentfulProjectDetailTextNode = 592,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 593,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 594,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 595,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 596,
  TagsProjectChildrenChildren = 597,
  TagsProjectChildrenId = 598,
  TagsProjectContentfulId = 599,
  TagsProjectCreatedAt = 600,
  TagsProjectDetailChildren = 601,
  TagsProjectDetailChildrenMdx = 602,
  TagsProjectDetailDetail = 603,
  TagsProjectDetailId = 604,
  TagsProjectEndDate = 605,
  TagsProjectIconChildren = 606,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 607,
  TagsProjectIconContact = 608,
  TagsProjectIconContentfulId = 609,
  TagsProjectIconCreatedAt = 610,
  TagsProjectIconHistory = 611,
  TagsProjectIconId = 612,
  TagsProjectIconName = 613,
  TagsProjectIconNodeLocale = 614,
  TagsProjectIconOss = 615,
  TagsProjectIconProject = 616,
  TagsProjectIconSpaceId = 617,
  TagsProjectIconUpdatedAt = 618,
  TagsProjectIconWhatICanDo = 619,
  TagsProjectId = 620,
  TagsProjectInternalContent = 621,
  TagsProjectInternalContentDigest = 622,
  TagsProjectInternalDescription = 623,
  TagsProjectInternalFieldOwners = 624,
  TagsProjectInternalIgnoreType = 625,
  TagsProjectInternalMediaType = 626,
  TagsProjectInternalOwner = 627,
  TagsProjectInternalType = 628,
  TagsProjectName = 629,
  TagsProjectNodeLocale = 630,
  TagsProjectParentChildren = 631,
  TagsProjectParentId = 632,
  TagsProjectSpaceId = 633,
  TagsProjectStartDate = 634,
  TagsProjectSubName = 635,
  TagsProjectSysRevision = 636,
  TagsProjectSysType = 637,
  TagsProjectTags = 638,
  TagsProjectTagsBlogPost = 639,
  TagsProjectTagsChildren = 640,
  TagsProjectTagsContentfulId = 641,
  TagsProjectTagsCreatedAt = 642,
  TagsProjectTagsId = 643,
  TagsProjectTagsLevel = 644,
  TagsProjectTagsName = 645,
  TagsProjectTagsNodeLocale = 646,
  TagsProjectTagsOss = 647,
  TagsProjectTagsProject = 648,
  TagsProjectTagsSkillMap = 649,
  TagsProjectTagsSpaceId = 650,
  TagsProjectTagsUpdatedAt = 651,
  TagsProjectUpdatedAt = 652,
  TagsSkillMap = 653,
  TagsSkillMapChildren = 654,
  TagsSkillMapChildrenChildren = 655,
  TagsSkillMapChildrenId = 656,
  TagsSkillMapContentfulId = 657,
  TagsSkillMapCreatedAt = 658,
  TagsSkillMapExpanded = 659,
  TagsSkillMapId = 660,
  TagsSkillMapInternalContent = 661,
  TagsSkillMapInternalContentDigest = 662,
  TagsSkillMapInternalDescription = 663,
  TagsSkillMapInternalFieldOwners = 664,
  TagsSkillMapInternalIgnoreType = 665,
  TagsSkillMapInternalMediaType = 666,
  TagsSkillMapInternalOwner = 667,
  TagsSkillMapInternalType = 668,
  TagsSkillMapName = 669,
  TagsSkillMapNodeLocale = 670,
  TagsSkillMapParentChildren = 671,
  TagsSkillMapParentId = 672,
  TagsSkillMapSkills = 673,
  TagsSkillMapSkillsBlogPost = 674,
  TagsSkillMapSkillsChildren = 675,
  TagsSkillMapSkillsContentfulId = 676,
  TagsSkillMapSkillsCreatedAt = 677,
  TagsSkillMapSkillsId = 678,
  TagsSkillMapSkillsLevel = 679,
  TagsSkillMapSkillsName = 680,
  TagsSkillMapSkillsNodeLocale = 681,
  TagsSkillMapSkillsOss = 682,
  TagsSkillMapSkillsProject = 683,
  TagsSkillMapSkillsSkillMap = 684,
  TagsSkillMapSkillsSpaceId = 685,
  TagsSkillMapSkillsUpdatedAt = 686,
  TagsSkillMapSortKey = 687,
  TagsSkillMapSpaceId = 688,
  TagsSkillMapSysRevision = 689,
  TagsSkillMapSysType = 690,
  TagsSkillMapUpdatedAt = 691,
  TagsSpaceId = 692,
  TagsSysRevision = 693,
  TagsSysType = 694,
  TagsUpdatedAt = 695,
  Title = 696,
  Updated = 697,
  UpdatedAt = 698
}

export type ContentfulBlogPostFilterInput = {
  childContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeFilterListInput>;
  content: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  created: InputMaybe<DateQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulBlogPostSysFilterInput>;
  tags: InputMaybe<ContentfulTagFilterListInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updated: InputMaybe<DateQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch: InputMaybe<ContentfulBlogPostFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulBlogPostEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulBlogPostGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulBlogPostGroupConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostGroupConnectionGroupArgs = {
  field: ContentfulBlogPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogPostGroupConnectionMaxArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostGroupConnectionMinArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostGroupConnectionSumArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulBlogPostFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  contentType: Maybe<ContentfulBlogPostSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentType = {
  sys: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  contentType: InputMaybe<ContentfulBlogPostSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContact = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  href: Maybe<Scalars['String']>;
  icon: Maybe<ContentfulIcon>;
  iconSvgDark: Maybe<ContentfulAsset>;
  iconSvgLight: Maybe<ContentfulAsset>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  sortKey: Maybe<Scalars['Int']>;
  spaceId: Maybe<Scalars['String']>;
  subName: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulContactSys>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulContactCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulContactUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulContactConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContactEdge>;
  group: Array<ContentfulContactGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContact>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContactConnectionDistinctArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactConnectionGroupArgs = {
  field: ContentfulContactFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulContact>;
  node: ContentfulContact;
  previous: Maybe<ContentfulContact>;
};

export enum ContentfulContactFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  ContentfulId = 39,
  CreatedAt = 40,
  Href = 41,
  IconSvgDarkChildren = 42,
  IconSvgDarkChildrenChildren = 43,
  IconSvgDarkChildrenChildrenChildren = 44,
  IconSvgDarkChildrenChildrenId = 45,
  IconSvgDarkChildrenId = 46,
  IconSvgDarkChildrenInternalContent = 47,
  IconSvgDarkChildrenInternalContentDigest = 48,
  IconSvgDarkChildrenInternalDescription = 49,
  IconSvgDarkChildrenInternalFieldOwners = 50,
  IconSvgDarkChildrenInternalIgnoreType = 51,
  IconSvgDarkChildrenInternalMediaType = 52,
  IconSvgDarkChildrenInternalOwner = 53,
  IconSvgDarkChildrenInternalType = 54,
  IconSvgDarkChildrenParentChildren = 55,
  IconSvgDarkChildrenParentId = 56,
  IconSvgDarkContentfulId = 57,
  IconSvgDarkCreatedAt = 58,
  IconSvgDarkDescription = 59,
  IconSvgDarkFieldsLocalFile = 60,
  IconSvgDarkFileContentType = 61,
  IconSvgDarkFileDetailsSize = 62,
  IconSvgDarkFileFileName = 63,
  IconSvgDarkFileUrl = 64,
  IconSvgDarkFilename = 65,
  IconSvgDarkFilesize = 66,
  IconSvgDarkGatsbyImage = 67,
  IconSvgDarkGatsbyImageData = 68,
  IconSvgDarkHeight = 69,
  IconSvgDarkId = 70,
  IconSvgDarkInternalContent = 71,
  IconSvgDarkInternalContentDigest = 72,
  IconSvgDarkInternalDescription = 73,
  IconSvgDarkInternalFieldOwners = 74,
  IconSvgDarkInternalIgnoreType = 75,
  IconSvgDarkInternalMediaType = 76,
  IconSvgDarkInternalOwner = 77,
  IconSvgDarkInternalType = 78,
  IconSvgDarkLocalFileAbsolutePath = 79,
  IconSvgDarkLocalFileAccessTime = 80,
  IconSvgDarkLocalFileAtime = 81,
  IconSvgDarkLocalFileAtimeMs = 82,
  IconSvgDarkLocalFileBase = 83,
  IconSvgDarkLocalFileBirthTime = 84,
  IconSvgDarkLocalFileBirthtime = 85,
  IconSvgDarkLocalFileBirthtimeMs = 86,
  IconSvgDarkLocalFileBlksize = 87,
  IconSvgDarkLocalFileBlocks = 88,
  IconSvgDarkLocalFileChangeTime = 89,
  IconSvgDarkLocalFileChildImageSharpChildren = 90,
  IconSvgDarkLocalFileChildImageSharpGatsbyImageData = 91,
  IconSvgDarkLocalFileChildImageSharpId = 92,
  IconSvgDarkLocalFileChildLocaleChildren = 93,
  IconSvgDarkLocalFileChildLocaleData = 94,
  IconSvgDarkLocalFileChildLocaleFileAbsolutePath = 95,
  IconSvgDarkLocalFileChildLocaleId = 96,
  IconSvgDarkLocalFileChildLocaleLanguage = 97,
  IconSvgDarkLocalFileChildLocaleNs = 98,
  IconSvgDarkLocalFileChildren = 99,
  IconSvgDarkLocalFileChildrenImageSharp = 100,
  IconSvgDarkLocalFileChildrenImageSharpChildren = 101,
  IconSvgDarkLocalFileChildrenImageSharpGatsbyImageData = 102,
  IconSvgDarkLocalFileChildrenImageSharpId = 103,
  IconSvgDarkLocalFileChildrenLocale = 104,
  IconSvgDarkLocalFileChildrenLocaleChildren = 105,
  IconSvgDarkLocalFileChildrenLocaleData = 106,
  IconSvgDarkLocalFileChildrenLocaleFileAbsolutePath = 107,
  IconSvgDarkLocalFileChildrenLocaleId = 108,
  IconSvgDarkLocalFileChildrenLocaleLanguage = 109,
  IconSvgDarkLocalFileChildrenLocaleNs = 110,
  IconSvgDarkLocalFileChildrenChildren = 111,
  IconSvgDarkLocalFileChildrenId = 112,
  IconSvgDarkLocalFileCtime = 113,
  IconSvgDarkLocalFileCtimeMs = 114,
  IconSvgDarkLocalFileDev = 115,
  IconSvgDarkLocalFileDir = 116,
  IconSvgDarkLocalFileExt = 117,
  IconSvgDarkLocalFileExtension = 118,
  IconSvgDarkLocalFileGid = 119,
  IconSvgDarkLocalFileId = 120,
  IconSvgDarkLocalFileIno = 121,
  IconSvgDarkLocalFileInternalContent = 122,
  IconSvgDarkLocalFileInternalContentDigest = 123,
  IconSvgDarkLocalFileInternalDescription = 124,
  IconSvgDarkLocalFileInternalFieldOwners = 125,
  IconSvgDarkLocalFileInternalIgnoreType = 126,
  IconSvgDarkLocalFileInternalMediaType = 127,
  IconSvgDarkLocalFileInternalOwner = 128,
  IconSvgDarkLocalFileInternalType = 129,
  IconSvgDarkLocalFileMode = 130,
  IconSvgDarkLocalFileModifiedTime = 131,
  IconSvgDarkLocalFileMtime = 132,
  IconSvgDarkLocalFileMtimeMs = 133,
  IconSvgDarkLocalFileName = 134,
  IconSvgDarkLocalFileNlink = 135,
  IconSvgDarkLocalFileParentChildren = 136,
  IconSvgDarkLocalFileParentId = 137,
  IconSvgDarkLocalFilePrettySize = 138,
  IconSvgDarkLocalFilePublicUrl = 139,
  IconSvgDarkLocalFileRdev = 140,
  IconSvgDarkLocalFileRelativeDirectory = 141,
  IconSvgDarkLocalFileRelativePath = 142,
  IconSvgDarkLocalFileRoot = 143,
  IconSvgDarkLocalFileSize = 144,
  IconSvgDarkLocalFileSourceInstanceName = 145,
  IconSvgDarkLocalFileUid = 146,
  IconSvgDarkLocalFileUrl = 147,
  IconSvgDarkMimeType = 148,
  IconSvgDarkNodeLocale = 149,
  IconSvgDarkParentChildren = 150,
  IconSvgDarkParentChildrenChildren = 151,
  IconSvgDarkParentChildrenId = 152,
  IconSvgDarkParentId = 153,
  IconSvgDarkParentInternalContent = 154,
  IconSvgDarkParentInternalContentDigest = 155,
  IconSvgDarkParentInternalDescription = 156,
  IconSvgDarkParentInternalFieldOwners = 157,
  IconSvgDarkParentInternalIgnoreType = 158,
  IconSvgDarkParentInternalMediaType = 159,
  IconSvgDarkParentInternalOwner = 160,
  IconSvgDarkParentInternalType = 161,
  IconSvgDarkParentParentChildren = 162,
  IconSvgDarkParentParentId = 163,
  IconSvgDarkPlaceholderUrl = 164,
  IconSvgDarkPublicUrl = 165,
  IconSvgDarkResizeHeight = 166,
  IconSvgDarkResizeSrc = 167,
  IconSvgDarkResizeWidth = 168,
  IconSvgDarkSpaceId = 169,
  IconSvgDarkSysRevision = 170,
  IconSvgDarkSysType = 171,
  IconSvgDarkTitle = 172,
  IconSvgDarkUpdatedAt = 173,
  IconSvgDarkUrl = 174,
  IconSvgDarkWidth = 175,
  IconSvgLightChildren = 176,
  IconSvgLightChildrenChildren = 177,
  IconSvgLightChildrenChildrenChildren = 178,
  IconSvgLightChildrenChildrenId = 179,
  IconSvgLightChildrenId = 180,
  IconSvgLightChildrenInternalContent = 181,
  IconSvgLightChildrenInternalContentDigest = 182,
  IconSvgLightChildrenInternalDescription = 183,
  IconSvgLightChildrenInternalFieldOwners = 184,
  IconSvgLightChildrenInternalIgnoreType = 185,
  IconSvgLightChildrenInternalMediaType = 186,
  IconSvgLightChildrenInternalOwner = 187,
  IconSvgLightChildrenInternalType = 188,
  IconSvgLightChildrenParentChildren = 189,
  IconSvgLightChildrenParentId = 190,
  IconSvgLightContentfulId = 191,
  IconSvgLightCreatedAt = 192,
  IconSvgLightDescription = 193,
  IconSvgLightFieldsLocalFile = 194,
  IconSvgLightFileContentType = 195,
  IconSvgLightFileDetailsSize = 196,
  IconSvgLightFileFileName = 197,
  IconSvgLightFileUrl = 198,
  IconSvgLightFilename = 199,
  IconSvgLightFilesize = 200,
  IconSvgLightGatsbyImage = 201,
  IconSvgLightGatsbyImageData = 202,
  IconSvgLightHeight = 203,
  IconSvgLightId = 204,
  IconSvgLightInternalContent = 205,
  IconSvgLightInternalContentDigest = 206,
  IconSvgLightInternalDescription = 207,
  IconSvgLightInternalFieldOwners = 208,
  IconSvgLightInternalIgnoreType = 209,
  IconSvgLightInternalMediaType = 210,
  IconSvgLightInternalOwner = 211,
  IconSvgLightInternalType = 212,
  IconSvgLightLocalFileAbsolutePath = 213,
  IconSvgLightLocalFileAccessTime = 214,
  IconSvgLightLocalFileAtime = 215,
  IconSvgLightLocalFileAtimeMs = 216,
  IconSvgLightLocalFileBase = 217,
  IconSvgLightLocalFileBirthTime = 218,
  IconSvgLightLocalFileBirthtime = 219,
  IconSvgLightLocalFileBirthtimeMs = 220,
  IconSvgLightLocalFileBlksize = 221,
  IconSvgLightLocalFileBlocks = 222,
  IconSvgLightLocalFileChangeTime = 223,
  IconSvgLightLocalFileChildImageSharpChildren = 224,
  IconSvgLightLocalFileChildImageSharpGatsbyImageData = 225,
  IconSvgLightLocalFileChildImageSharpId = 226,
  IconSvgLightLocalFileChildLocaleChildren = 227,
  IconSvgLightLocalFileChildLocaleData = 228,
  IconSvgLightLocalFileChildLocaleFileAbsolutePath = 229,
  IconSvgLightLocalFileChildLocaleId = 230,
  IconSvgLightLocalFileChildLocaleLanguage = 231,
  IconSvgLightLocalFileChildLocaleNs = 232,
  IconSvgLightLocalFileChildren = 233,
  IconSvgLightLocalFileChildrenImageSharp = 234,
  IconSvgLightLocalFileChildrenImageSharpChildren = 235,
  IconSvgLightLocalFileChildrenImageSharpGatsbyImageData = 236,
  IconSvgLightLocalFileChildrenImageSharpId = 237,
  IconSvgLightLocalFileChildrenLocale = 238,
  IconSvgLightLocalFileChildrenLocaleChildren = 239,
  IconSvgLightLocalFileChildrenLocaleData = 240,
  IconSvgLightLocalFileChildrenLocaleFileAbsolutePath = 241,
  IconSvgLightLocalFileChildrenLocaleId = 242,
  IconSvgLightLocalFileChildrenLocaleLanguage = 243,
  IconSvgLightLocalFileChildrenLocaleNs = 244,
  IconSvgLightLocalFileChildrenChildren = 245,
  IconSvgLightLocalFileChildrenId = 246,
  IconSvgLightLocalFileCtime = 247,
  IconSvgLightLocalFileCtimeMs = 248,
  IconSvgLightLocalFileDev = 249,
  IconSvgLightLocalFileDir = 250,
  IconSvgLightLocalFileExt = 251,
  IconSvgLightLocalFileExtension = 252,
  IconSvgLightLocalFileGid = 253,
  IconSvgLightLocalFileId = 254,
  IconSvgLightLocalFileIno = 255,
  IconSvgLightLocalFileInternalContent = 256,
  IconSvgLightLocalFileInternalContentDigest = 257,
  IconSvgLightLocalFileInternalDescription = 258,
  IconSvgLightLocalFileInternalFieldOwners = 259,
  IconSvgLightLocalFileInternalIgnoreType = 260,
  IconSvgLightLocalFileInternalMediaType = 261,
  IconSvgLightLocalFileInternalOwner = 262,
  IconSvgLightLocalFileInternalType = 263,
  IconSvgLightLocalFileMode = 264,
  IconSvgLightLocalFileModifiedTime = 265,
  IconSvgLightLocalFileMtime = 266,
  IconSvgLightLocalFileMtimeMs = 267,
  IconSvgLightLocalFileName = 268,
  IconSvgLightLocalFileNlink = 269,
  IconSvgLightLocalFileParentChildren = 270,
  IconSvgLightLocalFileParentId = 271,
  IconSvgLightLocalFilePrettySize = 272,
  IconSvgLightLocalFilePublicUrl = 273,
  IconSvgLightLocalFileRdev = 274,
  IconSvgLightLocalFileRelativeDirectory = 275,
  IconSvgLightLocalFileRelativePath = 276,
  IconSvgLightLocalFileRoot = 277,
  IconSvgLightLocalFileSize = 278,
  IconSvgLightLocalFileSourceInstanceName = 279,
  IconSvgLightLocalFileUid = 280,
  IconSvgLightLocalFileUrl = 281,
  IconSvgLightMimeType = 282,
  IconSvgLightNodeLocale = 283,
  IconSvgLightParentChildren = 284,
  IconSvgLightParentChildrenChildren = 285,
  IconSvgLightParentChildrenId = 286,
  IconSvgLightParentId = 287,
  IconSvgLightParentInternalContent = 288,
  IconSvgLightParentInternalContentDigest = 289,
  IconSvgLightParentInternalDescription = 290,
  IconSvgLightParentInternalFieldOwners = 291,
  IconSvgLightParentInternalIgnoreType = 292,
  IconSvgLightParentInternalMediaType = 293,
  IconSvgLightParentInternalOwner = 294,
  IconSvgLightParentInternalType = 295,
  IconSvgLightParentParentChildren = 296,
  IconSvgLightParentParentId = 297,
  IconSvgLightPlaceholderUrl = 298,
  IconSvgLightPublicUrl = 299,
  IconSvgLightResizeHeight = 300,
  IconSvgLightResizeSrc = 301,
  IconSvgLightResizeWidth = 302,
  IconSvgLightSpaceId = 303,
  IconSvgLightSysRevision = 304,
  IconSvgLightSysType = 305,
  IconSvgLightTitle = 306,
  IconSvgLightUpdatedAt = 307,
  IconSvgLightUrl = 308,
  IconSvgLightWidth = 309,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 310,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 311,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 312,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 313,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 314,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 315,
  IconChildContentfulIconSvgTextNodeChildMdxId = 316,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 317,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 318,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 319,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 320,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 321,
  IconChildContentfulIconSvgTextNodeChildren = 322,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 323,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 324,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 325,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 326,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 327,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 328,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 329,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 330,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 331,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 332,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 333,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 334,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 335,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 336,
  IconChildContentfulIconSvgTextNodeChildrenId = 337,
  IconChildContentfulIconSvgTextNodeId = 338,
  IconChildContentfulIconSvgTextNodeInternalContent = 339,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 340,
  IconChildContentfulIconSvgTextNodeInternalDescription = 341,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 342,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 343,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 344,
  IconChildContentfulIconSvgTextNodeInternalOwner = 345,
  IconChildContentfulIconSvgTextNodeInternalType = 346,
  IconChildContentfulIconSvgTextNodeParentChildren = 347,
  IconChildContentfulIconSvgTextNodeParentId = 348,
  IconChildContentfulIconSvgTextNodeSvg = 349,
  IconChildContentfulIconSvgTextNodeSysType = 350,
  IconChildren = 351,
  IconChildrenContentfulIconSvgTextNode = 352,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 353,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 354,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 355,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 356,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 357,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 358,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 359,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 360,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 361,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 362,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 363,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 364,
  IconChildrenContentfulIconSvgTextNodeChildren = 365,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 366,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 367,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 368,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 369,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 370,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 371,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 372,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 373,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 374,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 375,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 376,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 377,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 378,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 379,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 380,
  IconChildrenContentfulIconSvgTextNodeId = 381,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 382,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 383,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 384,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 385,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 386,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 387,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 388,
  IconChildrenContentfulIconSvgTextNodeInternalType = 389,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 390,
  IconChildrenContentfulIconSvgTextNodeParentId = 391,
  IconChildrenContentfulIconSvgTextNodeSvg = 392,
  IconChildrenContentfulIconSvgTextNodeSysType = 393,
  IconChildrenChildren = 394,
  IconChildrenChildrenChildren = 395,
  IconChildrenChildrenId = 396,
  IconChildrenId = 397,
  IconChildrenInternalContent = 398,
  IconChildrenInternalContentDigest = 399,
  IconChildrenInternalDescription = 400,
  IconChildrenInternalFieldOwners = 401,
  IconChildrenInternalIgnoreType = 402,
  IconChildrenInternalMediaType = 403,
  IconChildrenInternalOwner = 404,
  IconChildrenInternalType = 405,
  IconChildrenParentChildren = 406,
  IconChildrenParentId = 407,
  IconContact = 408,
  IconContactChildren = 409,
  IconContactChildrenChildren = 410,
  IconContactChildrenId = 411,
  IconContactContentfulId = 412,
  IconContactCreatedAt = 413,
  IconContactHref = 414,
  IconContactIconSvgDarkChildren = 415,
  IconContactIconSvgDarkContentfulId = 416,
  IconContactIconSvgDarkCreatedAt = 417,
  IconContactIconSvgDarkDescription = 418,
  IconContactIconSvgDarkFilename = 419,
  IconContactIconSvgDarkFilesize = 420,
  IconContactIconSvgDarkGatsbyImage = 421,
  IconContactIconSvgDarkGatsbyImageData = 422,
  IconContactIconSvgDarkHeight = 423,
  IconContactIconSvgDarkId = 424,
  IconContactIconSvgDarkMimeType = 425,
  IconContactIconSvgDarkNodeLocale = 426,
  IconContactIconSvgDarkPlaceholderUrl = 427,
  IconContactIconSvgDarkPublicUrl = 428,
  IconContactIconSvgDarkSpaceId = 429,
  IconContactIconSvgDarkTitle = 430,
  IconContactIconSvgDarkUpdatedAt = 431,
  IconContactIconSvgDarkUrl = 432,
  IconContactIconSvgDarkWidth = 433,
  IconContactIconSvgLightChildren = 434,
  IconContactIconSvgLightContentfulId = 435,
  IconContactIconSvgLightCreatedAt = 436,
  IconContactIconSvgLightDescription = 437,
  IconContactIconSvgLightFilename = 438,
  IconContactIconSvgLightFilesize = 439,
  IconContactIconSvgLightGatsbyImage = 440,
  IconContactIconSvgLightGatsbyImageData = 441,
  IconContactIconSvgLightHeight = 442,
  IconContactIconSvgLightId = 443,
  IconContactIconSvgLightMimeType = 444,
  IconContactIconSvgLightNodeLocale = 445,
  IconContactIconSvgLightPlaceholderUrl = 446,
  IconContactIconSvgLightPublicUrl = 447,
  IconContactIconSvgLightSpaceId = 448,
  IconContactIconSvgLightTitle = 449,
  IconContactIconSvgLightUpdatedAt = 450,
  IconContactIconSvgLightUrl = 451,
  IconContactIconSvgLightWidth = 452,
  IconContactIconChildren = 453,
  IconContactIconChildrenContentfulIconSvgTextNode = 454,
  IconContactIconContact = 455,
  IconContactIconContentfulId = 456,
  IconContactIconCreatedAt = 457,
  IconContactIconHistory = 458,
  IconContactIconId = 459,
  IconContactIconName = 460,
  IconContactIconNodeLocale = 461,
  IconContactIconOss = 462,
  IconContactIconProject = 463,
  IconContactIconSpaceId = 464,
  IconContactIconUpdatedAt = 465,
  IconContactIconWhatICanDo = 466,
  IconContactId = 467,
  IconContactInternalContent = 468,
  IconContactInternalContentDigest = 469,
  IconContactInternalDescription = 470,
  IconContactInternalFieldOwners = 471,
  IconContactInternalIgnoreType = 472,
  IconContactInternalMediaType = 473,
  IconContactInternalOwner = 474,
  IconContactInternalType = 475,
  IconContactName = 476,
  IconContactNodeLocale = 477,
  IconContactParentChildren = 478,
  IconContactParentId = 479,
  IconContactSortKey = 480,
  IconContactSpaceId = 481,
  IconContactSubName = 482,
  IconContactSysRevision = 483,
  IconContactSysType = 484,
  IconContactUpdatedAt = 485,
  IconContentfulId = 486,
  IconCreatedAt = 487,
  IconHistory = 488,
  IconHistoryChildren = 489,
  IconHistoryChildrenChildren = 490,
  IconHistoryChildrenId = 491,
  IconHistoryContentfulId = 492,
  IconHistoryCreatedAt = 493,
  IconHistoryDate = 494,
  IconHistoryIconChildren = 495,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 496,
  IconHistoryIconContact = 497,
  IconHistoryIconContentfulId = 498,
  IconHistoryIconCreatedAt = 499,
  IconHistoryIconHistory = 500,
  IconHistoryIconId = 501,
  IconHistoryIconName = 502,
  IconHistoryIconNodeLocale = 503,
  IconHistoryIconOss = 504,
  IconHistoryIconProject = 505,
  IconHistoryIconSpaceId = 506,
  IconHistoryIconUpdatedAt = 507,
  IconHistoryIconWhatICanDo = 508,
  IconHistoryId = 509,
  IconHistoryInternalContent = 510,
  IconHistoryInternalContentDigest = 511,
  IconHistoryInternalDescription = 512,
  IconHistoryInternalFieldOwners = 513,
  IconHistoryInternalIgnoreType = 514,
  IconHistoryInternalMediaType = 515,
  IconHistoryInternalOwner = 516,
  IconHistoryInternalType = 517,
  IconHistoryName = 518,
  IconHistoryNodeLocale = 519,
  IconHistoryParentChildren = 520,
  IconHistoryParentId = 521,
  IconHistorySpaceId = 522,
  IconHistorySubName = 523,
  IconHistorySysRevision = 524,
  IconHistorySysType = 525,
  IconHistoryUpdatedAt = 526,
  IconId = 527,
  IconInternalContent = 528,
  IconInternalContentDigest = 529,
  IconInternalDescription = 530,
  IconInternalFieldOwners = 531,
  IconInternalIgnoreType = 532,
  IconInternalMediaType = 533,
  IconInternalOwner = 534,
  IconInternalType = 535,
  IconName = 536,
  IconNodeLocale = 537,
  IconOss = 538,
  IconOssChildContentfulOssDetailTextNodeChildren = 539,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 540,
  IconOssChildContentfulOssDetailTextNodeDetail = 541,
  IconOssChildContentfulOssDetailTextNodeId = 542,
  IconOssChildren = 543,
  IconOssChildrenContentfulOssDetailTextNode = 544,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 545,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 546,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 547,
  IconOssChildrenContentfulOssDetailTextNodeId = 548,
  IconOssChildrenChildren = 549,
  IconOssChildrenId = 550,
  IconOssContentfulId = 551,
  IconOssCreatedAt = 552,
  IconOssDetailChildren = 553,
  IconOssDetailChildrenMdx = 554,
  IconOssDetailDetail = 555,
  IconOssDetailId = 556,
  IconOssHref = 557,
  IconOssIconChildren = 558,
  IconOssIconChildrenContentfulIconSvgTextNode = 559,
  IconOssIconContact = 560,
  IconOssIconContentfulId = 561,
  IconOssIconCreatedAt = 562,
  IconOssIconHistory = 563,
  IconOssIconId = 564,
  IconOssIconName = 565,
  IconOssIconNodeLocale = 566,
  IconOssIconOss = 567,
  IconOssIconProject = 568,
  IconOssIconSpaceId = 569,
  IconOssIconUpdatedAt = 570,
  IconOssIconWhatICanDo = 571,
  IconOssId = 572,
  IconOssImageChildren = 573,
  IconOssImageContentfulId = 574,
  IconOssImageCreatedAt = 575,
  IconOssImageDescription = 576,
  IconOssImageFilename = 577,
  IconOssImageFilesize = 578,
  IconOssImageGatsbyImage = 579,
  IconOssImageGatsbyImageData = 580,
  IconOssImageHeight = 581,
  IconOssImageId = 582,
  IconOssImageMimeType = 583,
  IconOssImageNodeLocale = 584,
  IconOssImagePlaceholderUrl = 585,
  IconOssImagePublicUrl = 586,
  IconOssImageSpaceId = 587,
  IconOssImageTitle = 588,
  IconOssImageUpdatedAt = 589,
  IconOssImageUrl = 590,
  IconOssImageWidth = 591,
  IconOssInternalContent = 592,
  IconOssInternalContentDigest = 593,
  IconOssInternalDescription = 594,
  IconOssInternalFieldOwners = 595,
  IconOssInternalIgnoreType = 596,
  IconOssInternalMediaType = 597,
  IconOssInternalOwner = 598,
  IconOssInternalType = 599,
  IconOssName = 600,
  IconOssNodeLocale = 601,
  IconOssParentChildren = 602,
  IconOssParentId = 603,
  IconOssSpaceId = 604,
  IconOssStartDate = 605,
  IconOssSubName = 606,
  IconOssSysRevision = 607,
  IconOssSysType = 608,
  IconOssTags = 609,
  IconOssTagsBlogPost = 610,
  IconOssTagsChildren = 611,
  IconOssTagsContentfulId = 612,
  IconOssTagsCreatedAt = 613,
  IconOssTagsId = 614,
  IconOssTagsLevel = 615,
  IconOssTagsName = 616,
  IconOssTagsNodeLocale = 617,
  IconOssTagsOss = 618,
  IconOssTagsProject = 619,
  IconOssTagsSkillMap = 620,
  IconOssTagsSpaceId = 621,
  IconOssTagsUpdatedAt = 622,
  IconOssUpdatedAt = 623,
  IconParentChildren = 624,
  IconParentChildrenChildren = 625,
  IconParentChildrenId = 626,
  IconParentId = 627,
  IconParentInternalContent = 628,
  IconParentInternalContentDigest = 629,
  IconParentInternalDescription = 630,
  IconParentInternalFieldOwners = 631,
  IconParentInternalIgnoreType = 632,
  IconParentInternalMediaType = 633,
  IconParentInternalOwner = 634,
  IconParentInternalType = 635,
  IconParentParentChildren = 636,
  IconParentParentId = 637,
  IconProject = 638,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 639,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 640,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 641,
  IconProjectChildContentfulProjectDetailTextNodeId = 642,
  IconProjectChildren = 643,
  IconProjectChildrenContentfulProjectDetailTextNode = 644,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 645,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 646,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 647,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 648,
  IconProjectChildrenChildren = 649,
  IconProjectChildrenId = 650,
  IconProjectContentfulId = 651,
  IconProjectCreatedAt = 652,
  IconProjectDetailChildren = 653,
  IconProjectDetailChildrenMdx = 654,
  IconProjectDetailDetail = 655,
  IconProjectDetailId = 656,
  IconProjectEndDate = 657,
  IconProjectIconChildren = 658,
  IconProjectIconChildrenContentfulIconSvgTextNode = 659,
  IconProjectIconContact = 660,
  IconProjectIconContentfulId = 661,
  IconProjectIconCreatedAt = 662,
  IconProjectIconHistory = 663,
  IconProjectIconId = 664,
  IconProjectIconName = 665,
  IconProjectIconNodeLocale = 666,
  IconProjectIconOss = 667,
  IconProjectIconProject = 668,
  IconProjectIconSpaceId = 669,
  IconProjectIconUpdatedAt = 670,
  IconProjectIconWhatICanDo = 671,
  IconProjectId = 672,
  IconProjectInternalContent = 673,
  IconProjectInternalContentDigest = 674,
  IconProjectInternalDescription = 675,
  IconProjectInternalFieldOwners = 676,
  IconProjectInternalIgnoreType = 677,
  IconProjectInternalMediaType = 678,
  IconProjectInternalOwner = 679,
  IconProjectInternalType = 680,
  IconProjectName = 681,
  IconProjectNodeLocale = 682,
  IconProjectParentChildren = 683,
  IconProjectParentId = 684,
  IconProjectSpaceId = 685,
  IconProjectStartDate = 686,
  IconProjectSubName = 687,
  IconProjectSysRevision = 688,
  IconProjectSysType = 689,
  IconProjectTags = 690,
  IconProjectTagsBlogPost = 691,
  IconProjectTagsChildren = 692,
  IconProjectTagsContentfulId = 693,
  IconProjectTagsCreatedAt = 694,
  IconProjectTagsId = 695,
  IconProjectTagsLevel = 696,
  IconProjectTagsName = 697,
  IconProjectTagsNodeLocale = 698,
  IconProjectTagsOss = 699,
  IconProjectTagsProject = 700,
  IconProjectTagsSkillMap = 701,
  IconProjectTagsSpaceId = 702,
  IconProjectTagsUpdatedAt = 703,
  IconProjectUpdatedAt = 704,
  IconSpaceId = 705,
  IconSvgChildMdxBody = 706,
  IconSvgChildMdxChildren = 707,
  IconSvgChildMdxExcerpt = 708,
  IconSvgChildMdxFileAbsolutePath = 709,
  IconSvgChildMdxHeadings = 710,
  IconSvgChildMdxHtml = 711,
  IconSvgChildMdxId = 712,
  IconSvgChildMdxMdxAst = 713,
  IconSvgChildMdxRawBody = 714,
  IconSvgChildMdxSlug = 715,
  IconSvgChildMdxTableOfContents = 716,
  IconSvgChildMdxTimeToRead = 717,
  IconSvgChildren = 718,
  IconSvgChildrenMdx = 719,
  IconSvgChildrenMdxBody = 720,
  IconSvgChildrenMdxChildren = 721,
  IconSvgChildrenMdxExcerpt = 722,
  IconSvgChildrenMdxFileAbsolutePath = 723,
  IconSvgChildrenMdxHeadings = 724,
  IconSvgChildrenMdxHtml = 725,
  IconSvgChildrenMdxId = 726,
  IconSvgChildrenMdxMdxAst = 727,
  IconSvgChildrenMdxRawBody = 728,
  IconSvgChildrenMdxSlug = 729,
  IconSvgChildrenMdxTableOfContents = 730,
  IconSvgChildrenMdxTimeToRead = 731,
  IconSvgChildrenChildren = 732,
  IconSvgChildrenId = 733,
  IconSvgId = 734,
  IconSvgInternalContent = 735,
  IconSvgInternalContentDigest = 736,
  IconSvgInternalDescription = 737,
  IconSvgInternalFieldOwners = 738,
  IconSvgInternalIgnoreType = 739,
  IconSvgInternalMediaType = 740,
  IconSvgInternalOwner = 741,
  IconSvgInternalType = 742,
  IconSvgParentChildren = 743,
  IconSvgParentId = 744,
  IconSvgSvg = 745,
  IconSvgSysType = 746,
  IconSysRevision = 747,
  IconSysType = 748,
  IconUpdatedAt = 749,
  IconWhatICanDo = 750,
  IconWhatICanDoChildren = 751,
  IconWhatICanDoChildrenChildren = 752,
  IconWhatICanDoChildrenId = 753,
  IconWhatICanDoContentfulId = 754,
  IconWhatICanDoCreatedAt = 755,
  IconWhatICanDoIconChildren = 756,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 757,
  IconWhatICanDoIconContact = 758,
  IconWhatICanDoIconContentfulId = 759,
  IconWhatICanDoIconCreatedAt = 760,
  IconWhatICanDoIconHistory = 761,
  IconWhatICanDoIconId = 762,
  IconWhatICanDoIconName = 763,
  IconWhatICanDoIconNodeLocale = 764,
  IconWhatICanDoIconOss = 765,
  IconWhatICanDoIconProject = 766,
  IconWhatICanDoIconSpaceId = 767,
  IconWhatICanDoIconUpdatedAt = 768,
  IconWhatICanDoIconWhatICanDo = 769,
  IconWhatICanDoId = 770,
  IconWhatICanDoInternalContent = 771,
  IconWhatICanDoInternalContentDigest = 772,
  IconWhatICanDoInternalDescription = 773,
  IconWhatICanDoInternalFieldOwners = 774,
  IconWhatICanDoInternalIgnoreType = 775,
  IconWhatICanDoInternalMediaType = 776,
  IconWhatICanDoInternalOwner = 777,
  IconWhatICanDoInternalType = 778,
  IconWhatICanDoName = 779,
  IconWhatICanDoNodeLocale = 780,
  IconWhatICanDoParentChildren = 781,
  IconWhatICanDoParentId = 782,
  IconWhatICanDoSortKey = 783,
  IconWhatICanDoSpaceId = 784,
  IconWhatICanDoSubName = 785,
  IconWhatICanDoSysRevision = 786,
  IconWhatICanDoSysType = 787,
  IconWhatICanDoUpdatedAt = 788,
  Id = 789,
  InternalContent = 790,
  InternalContentDigest = 791,
  InternalDescription = 792,
  InternalFieldOwners = 793,
  InternalIgnoreType = 794,
  InternalMediaType = 795,
  InternalOwner = 796,
  InternalType = 797,
  Name = 798,
  NodeLocale = 799,
  ParentChildren = 800,
  ParentChildrenChildren = 801,
  ParentChildrenChildrenChildren = 802,
  ParentChildrenChildrenId = 803,
  ParentChildrenId = 804,
  ParentChildrenInternalContent = 805,
  ParentChildrenInternalContentDigest = 806,
  ParentChildrenInternalDescription = 807,
  ParentChildrenInternalFieldOwners = 808,
  ParentChildrenInternalIgnoreType = 809,
  ParentChildrenInternalMediaType = 810,
  ParentChildrenInternalOwner = 811,
  ParentChildrenInternalType = 812,
  ParentChildrenParentChildren = 813,
  ParentChildrenParentId = 814,
  ParentId = 815,
  ParentInternalContent = 816,
  ParentInternalContentDigest = 817,
  ParentInternalDescription = 818,
  ParentInternalFieldOwners = 819,
  ParentInternalIgnoreType = 820,
  ParentInternalMediaType = 821,
  ParentInternalOwner = 822,
  ParentInternalType = 823,
  ParentParentChildren = 824,
  ParentParentChildrenChildren = 825,
  ParentParentChildrenId = 826,
  ParentParentId = 827,
  ParentParentInternalContent = 828,
  ParentParentInternalContentDigest = 829,
  ParentParentInternalDescription = 830,
  ParentParentInternalFieldOwners = 831,
  ParentParentInternalIgnoreType = 832,
  ParentParentInternalMediaType = 833,
  ParentParentInternalOwner = 834,
  ParentParentInternalType = 835,
  ParentParentParentChildren = 836,
  ParentParentParentId = 837,
  SortKey = 838,
  SpaceId = 839,
  SubName = 840,
  SysContentTypeSysId = 841,
  SysContentTypeSysLinkType = 842,
  SysContentTypeSysType = 843,
  SysRevision = 844,
  SysType = 845,
  UpdatedAt = 846
}

export type ContentfulContactFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  iconSvgDark: InputMaybe<ContentfulAssetFilterInput>;
  iconSvgLight: InputMaybe<ContentfulAssetFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulContactSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulContactFilterListInput = {
  elemMatch: InputMaybe<ContentfulContactFilterInput>;
};

export type ContentfulContactGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContactEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulContactGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContact>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContactGroupConnectionDistinctArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactGroupConnectionGroupArgs = {
  field: ContentfulContactFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulContactFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContactSys = {
  contentType: Maybe<ContentfulContactSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulContactSysContentType = {
  sys: Maybe<ContentfulContactSysContentTypeSys>;
};

export type ContentfulContactSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulContactSysContentTypeSysFilterInput>;
};

export type ContentfulContactSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulContactSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContactSysFilterInput = {
  contentType: InputMaybe<ContentfulContactSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentType = Node & {
  children: Array<Node>;
  description: Maybe<Scalars['String']>;
  displayField: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  sys: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContentTypeEdge>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  Description = 39,
  DisplayField = 40,
  Id = 41,
  InternalContent = 42,
  InternalContentDigest = 43,
  InternalDescription = 44,
  InternalFieldOwners = 45,
  InternalIgnoreType = 46,
  InternalMediaType = 47,
  InternalOwner = 48,
  InternalType = 49,
  Name = 50,
  ParentChildren = 51,
  ParentChildrenChildren = 52,
  ParentChildrenChildrenChildren = 53,
  ParentChildrenChildrenId = 54,
  ParentChildrenId = 55,
  ParentChildrenInternalContent = 56,
  ParentChildrenInternalContentDigest = 57,
  ParentChildrenInternalDescription = 58,
  ParentChildrenInternalFieldOwners = 59,
  ParentChildrenInternalIgnoreType = 60,
  ParentChildrenInternalMediaType = 61,
  ParentChildrenInternalOwner = 62,
  ParentChildrenInternalType = 63,
  ParentChildrenParentChildren = 64,
  ParentChildrenParentId = 65,
  ParentId = 66,
  ParentInternalContent = 67,
  ParentInternalContentDigest = 68,
  ParentInternalDescription = 69,
  ParentInternalFieldOwners = 70,
  ParentInternalIgnoreType = 71,
  ParentInternalMediaType = 72,
  ParentInternalOwner = 73,
  ParentInternalType = 74,
  ParentParentChildren = 75,
  ParentParentChildrenChildren = 76,
  ParentParentChildrenId = 77,
  ParentParentId = 78,
  ParentParentInternalContent = 79,
  ParentParentInternalContentDigest = 80,
  ParentParentInternalDescription = 81,
  ParentParentInternalFieldOwners = 82,
  ParentParentInternalIgnoreType = 83,
  ParentParentInternalMediaType = 84,
  ParentParentInternalOwner = 85,
  ParentParentInternalType = 86,
  ParentParentParentChildren = 87,
  ParentParentParentId = 88,
  SysType = 89
}

export type ContentfulContentTypeFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  displayField: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulContentTypeEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  type: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
};

export type ContentfulEntryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulEntryEdge>;
  group: Array<ContentfulEntryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  ContentfulId = 39,
  Id = 40,
  InternalContent = 41,
  InternalContentDigest = 42,
  InternalDescription = 43,
  InternalFieldOwners = 44,
  InternalIgnoreType = 45,
  InternalMediaType = 46,
  InternalOwner = 47,
  InternalType = 48,
  NodeLocale = 49,
  ParentChildren = 50,
  ParentChildrenChildren = 51,
  ParentChildrenChildrenChildren = 52,
  ParentChildrenChildrenId = 53,
  ParentChildrenId = 54,
  ParentChildrenInternalContent = 55,
  ParentChildrenInternalContentDigest = 56,
  ParentChildrenInternalDescription = 57,
  ParentChildrenInternalFieldOwners = 58,
  ParentChildrenInternalIgnoreType = 59,
  ParentChildrenInternalMediaType = 60,
  ParentChildrenInternalOwner = 61,
  ParentChildrenInternalType = 62,
  ParentChildrenParentChildren = 63,
  ParentChildrenParentId = 64,
  ParentId = 65,
  ParentInternalContent = 66,
  ParentInternalContentDigest = 67,
  ParentInternalDescription = 68,
  ParentInternalFieldOwners = 69,
  ParentInternalIgnoreType = 70,
  ParentInternalMediaType = 71,
  ParentInternalOwner = 72,
  ParentInternalType = 73,
  ParentParentChildren = 74,
  ParentParentChildrenChildren = 75,
  ParentParentChildrenId = 76,
  ParentParentId = 77,
  ParentParentInternalContent = 78,
  ParentParentInternalContentDigest = 79,
  ParentParentInternalDescription = 80,
  ParentParentInternalFieldOwners = 81,
  ParentParentInternalIgnoreType = 82,
  ParentParentInternalMediaType = 83,
  ParentParentInternalOwner = 84,
  ParentParentInternalType = 85,
  ParentParentParentChildren = 86,
  ParentParentParentId = 87
}

export type ContentfulEntryFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type ContentfulEntryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulEntryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulEntryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulHello = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  href: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  sortKey: Maybe<Scalars['Int']>;
  spaceId: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulHelloSys>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulHelloCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulHelloUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulHelloConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulHelloEdge>;
  group: Array<ContentfulHelloGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulHello>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulHelloConnectionDistinctArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloConnectionGroupArgs = {
  field: ContentfulHelloFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulHello>;
  node: ContentfulHello;
  previous: Maybe<ContentfulHello>;
};

export enum ContentfulHelloFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  ContentfulId = 39,
  CreatedAt = 40,
  Href = 41,
  Id = 42,
  InternalContent = 43,
  InternalContentDigest = 44,
  InternalDescription = 45,
  InternalFieldOwners = 46,
  InternalIgnoreType = 47,
  InternalMediaType = 48,
  InternalOwner = 49,
  InternalType = 50,
  Name = 51,
  NodeLocale = 52,
  ParentChildren = 53,
  ParentChildrenChildren = 54,
  ParentChildrenChildrenChildren = 55,
  ParentChildrenChildrenId = 56,
  ParentChildrenId = 57,
  ParentChildrenInternalContent = 58,
  ParentChildrenInternalContentDigest = 59,
  ParentChildrenInternalDescription = 60,
  ParentChildrenInternalFieldOwners = 61,
  ParentChildrenInternalIgnoreType = 62,
  ParentChildrenInternalMediaType = 63,
  ParentChildrenInternalOwner = 64,
  ParentChildrenInternalType = 65,
  ParentChildrenParentChildren = 66,
  ParentChildrenParentId = 67,
  ParentId = 68,
  ParentInternalContent = 69,
  ParentInternalContentDigest = 70,
  ParentInternalDescription = 71,
  ParentInternalFieldOwners = 72,
  ParentInternalIgnoreType = 73,
  ParentInternalMediaType = 74,
  ParentInternalOwner = 75,
  ParentInternalType = 76,
  ParentParentChildren = 77,
  ParentParentChildrenChildren = 78,
  ParentParentChildrenId = 79,
  ParentParentId = 80,
  ParentParentInternalContent = 81,
  ParentParentInternalContentDigest = 82,
  ParentParentInternalDescription = 83,
  ParentParentInternalFieldOwners = 84,
  ParentParentInternalIgnoreType = 85,
  ParentParentInternalMediaType = 86,
  ParentParentInternalOwner = 87,
  ParentParentInternalType = 88,
  ParentParentParentChildren = 89,
  ParentParentParentId = 90,
  SortKey = 91,
  SpaceId = 92,
  SysContentTypeSysId = 93,
  SysContentTypeSysLinkType = 94,
  SysContentTypeSysType = 95,
  SysRevision = 96,
  SysType = 97,
  UpdatedAt = 98
}

export type ContentfulHelloFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulHelloSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulHelloGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulHelloEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulHelloGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulHello>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulHelloGroupConnectionDistinctArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloGroupConnectionGroupArgs = {
  field: ContentfulHelloFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulHelloFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulHelloSys = {
  contentType: Maybe<ContentfulHelloSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulHelloSysContentType = {
  sys: Maybe<ContentfulHelloSysContentTypeSys>;
};

export type ContentfulHelloSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulHelloSysContentTypeSysFilterInput>;
};

export type ContentfulHelloSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulHelloSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHelloSysFilterInput = {
  contentType: InputMaybe<ContentfulHelloSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHistory = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  date: Maybe<Scalars['Date']>;
  icon: Maybe<ContentfulIcon>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  spaceId: Maybe<Scalars['String']>;
  subName: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulHistorySys>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulHistoryCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulHistoryDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulHistoryUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulHistoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulHistoryEdge>;
  group: Array<ContentfulHistoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulHistory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulHistoryConnectionDistinctArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryConnectionGroupArgs = {
  field: ContentfulHistoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulHistory>;
  node: ContentfulHistory;
  previous: Maybe<ContentfulHistory>;
};

export enum ContentfulHistoryFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  ContentfulId = 39,
  CreatedAt = 40,
  Date = 41,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 42,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 43,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 44,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 45,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 46,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 47,
  IconChildContentfulIconSvgTextNodeChildMdxId = 48,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 49,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 50,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 51,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 52,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 53,
  IconChildContentfulIconSvgTextNodeChildren = 54,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 55,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 56,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 57,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 58,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 59,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 60,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 61,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 62,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 63,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 64,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 65,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 66,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 67,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 68,
  IconChildContentfulIconSvgTextNodeChildrenId = 69,
  IconChildContentfulIconSvgTextNodeId = 70,
  IconChildContentfulIconSvgTextNodeInternalContent = 71,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 72,
  IconChildContentfulIconSvgTextNodeInternalDescription = 73,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 74,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 75,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 76,
  IconChildContentfulIconSvgTextNodeInternalOwner = 77,
  IconChildContentfulIconSvgTextNodeInternalType = 78,
  IconChildContentfulIconSvgTextNodeParentChildren = 79,
  IconChildContentfulIconSvgTextNodeParentId = 80,
  IconChildContentfulIconSvgTextNodeSvg = 81,
  IconChildContentfulIconSvgTextNodeSysType = 82,
  IconChildren = 83,
  IconChildrenContentfulIconSvgTextNode = 84,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 85,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 86,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 87,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 88,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 89,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 90,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 91,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 92,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 93,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 94,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 95,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 96,
  IconChildrenContentfulIconSvgTextNodeChildren = 97,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 98,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 99,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 100,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 101,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 102,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 103,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 104,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 105,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 106,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 107,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 108,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 109,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 110,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 111,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 112,
  IconChildrenContentfulIconSvgTextNodeId = 113,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 114,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 115,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 116,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 117,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 118,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 119,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 120,
  IconChildrenContentfulIconSvgTextNodeInternalType = 121,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 122,
  IconChildrenContentfulIconSvgTextNodeParentId = 123,
  IconChildrenContentfulIconSvgTextNodeSvg = 124,
  IconChildrenContentfulIconSvgTextNodeSysType = 125,
  IconChildrenChildren = 126,
  IconChildrenChildrenChildren = 127,
  IconChildrenChildrenId = 128,
  IconChildrenId = 129,
  IconChildrenInternalContent = 130,
  IconChildrenInternalContentDigest = 131,
  IconChildrenInternalDescription = 132,
  IconChildrenInternalFieldOwners = 133,
  IconChildrenInternalIgnoreType = 134,
  IconChildrenInternalMediaType = 135,
  IconChildrenInternalOwner = 136,
  IconChildrenInternalType = 137,
  IconChildrenParentChildren = 138,
  IconChildrenParentId = 139,
  IconContact = 140,
  IconContactChildren = 141,
  IconContactChildrenChildren = 142,
  IconContactChildrenId = 143,
  IconContactContentfulId = 144,
  IconContactCreatedAt = 145,
  IconContactHref = 146,
  IconContactIconSvgDarkChildren = 147,
  IconContactIconSvgDarkContentfulId = 148,
  IconContactIconSvgDarkCreatedAt = 149,
  IconContactIconSvgDarkDescription = 150,
  IconContactIconSvgDarkFilename = 151,
  IconContactIconSvgDarkFilesize = 152,
  IconContactIconSvgDarkGatsbyImage = 153,
  IconContactIconSvgDarkGatsbyImageData = 154,
  IconContactIconSvgDarkHeight = 155,
  IconContactIconSvgDarkId = 156,
  IconContactIconSvgDarkMimeType = 157,
  IconContactIconSvgDarkNodeLocale = 158,
  IconContactIconSvgDarkPlaceholderUrl = 159,
  IconContactIconSvgDarkPublicUrl = 160,
  IconContactIconSvgDarkSpaceId = 161,
  IconContactIconSvgDarkTitle = 162,
  IconContactIconSvgDarkUpdatedAt = 163,
  IconContactIconSvgDarkUrl = 164,
  IconContactIconSvgDarkWidth = 165,
  IconContactIconSvgLightChildren = 166,
  IconContactIconSvgLightContentfulId = 167,
  IconContactIconSvgLightCreatedAt = 168,
  IconContactIconSvgLightDescription = 169,
  IconContactIconSvgLightFilename = 170,
  IconContactIconSvgLightFilesize = 171,
  IconContactIconSvgLightGatsbyImage = 172,
  IconContactIconSvgLightGatsbyImageData = 173,
  IconContactIconSvgLightHeight = 174,
  IconContactIconSvgLightId = 175,
  IconContactIconSvgLightMimeType = 176,
  IconContactIconSvgLightNodeLocale = 177,
  IconContactIconSvgLightPlaceholderUrl = 178,
  IconContactIconSvgLightPublicUrl = 179,
  IconContactIconSvgLightSpaceId = 180,
  IconContactIconSvgLightTitle = 181,
  IconContactIconSvgLightUpdatedAt = 182,
  IconContactIconSvgLightUrl = 183,
  IconContactIconSvgLightWidth = 184,
  IconContactIconChildren = 185,
  IconContactIconChildrenContentfulIconSvgTextNode = 186,
  IconContactIconContact = 187,
  IconContactIconContentfulId = 188,
  IconContactIconCreatedAt = 189,
  IconContactIconHistory = 190,
  IconContactIconId = 191,
  IconContactIconName = 192,
  IconContactIconNodeLocale = 193,
  IconContactIconOss = 194,
  IconContactIconProject = 195,
  IconContactIconSpaceId = 196,
  IconContactIconUpdatedAt = 197,
  IconContactIconWhatICanDo = 198,
  IconContactId = 199,
  IconContactInternalContent = 200,
  IconContactInternalContentDigest = 201,
  IconContactInternalDescription = 202,
  IconContactInternalFieldOwners = 203,
  IconContactInternalIgnoreType = 204,
  IconContactInternalMediaType = 205,
  IconContactInternalOwner = 206,
  IconContactInternalType = 207,
  IconContactName = 208,
  IconContactNodeLocale = 209,
  IconContactParentChildren = 210,
  IconContactParentId = 211,
  IconContactSortKey = 212,
  IconContactSpaceId = 213,
  IconContactSubName = 214,
  IconContactSysRevision = 215,
  IconContactSysType = 216,
  IconContactUpdatedAt = 217,
  IconContentfulId = 218,
  IconCreatedAt = 219,
  IconHistory = 220,
  IconHistoryChildren = 221,
  IconHistoryChildrenChildren = 222,
  IconHistoryChildrenId = 223,
  IconHistoryContentfulId = 224,
  IconHistoryCreatedAt = 225,
  IconHistoryDate = 226,
  IconHistoryIconChildren = 227,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 228,
  IconHistoryIconContact = 229,
  IconHistoryIconContentfulId = 230,
  IconHistoryIconCreatedAt = 231,
  IconHistoryIconHistory = 232,
  IconHistoryIconId = 233,
  IconHistoryIconName = 234,
  IconHistoryIconNodeLocale = 235,
  IconHistoryIconOss = 236,
  IconHistoryIconProject = 237,
  IconHistoryIconSpaceId = 238,
  IconHistoryIconUpdatedAt = 239,
  IconHistoryIconWhatICanDo = 240,
  IconHistoryId = 241,
  IconHistoryInternalContent = 242,
  IconHistoryInternalContentDigest = 243,
  IconHistoryInternalDescription = 244,
  IconHistoryInternalFieldOwners = 245,
  IconHistoryInternalIgnoreType = 246,
  IconHistoryInternalMediaType = 247,
  IconHistoryInternalOwner = 248,
  IconHistoryInternalType = 249,
  IconHistoryName = 250,
  IconHistoryNodeLocale = 251,
  IconHistoryParentChildren = 252,
  IconHistoryParentId = 253,
  IconHistorySpaceId = 254,
  IconHistorySubName = 255,
  IconHistorySysRevision = 256,
  IconHistorySysType = 257,
  IconHistoryUpdatedAt = 258,
  IconId = 259,
  IconInternalContent = 260,
  IconInternalContentDigest = 261,
  IconInternalDescription = 262,
  IconInternalFieldOwners = 263,
  IconInternalIgnoreType = 264,
  IconInternalMediaType = 265,
  IconInternalOwner = 266,
  IconInternalType = 267,
  IconName = 268,
  IconNodeLocale = 269,
  IconOss = 270,
  IconOssChildContentfulOssDetailTextNodeChildren = 271,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 272,
  IconOssChildContentfulOssDetailTextNodeDetail = 273,
  IconOssChildContentfulOssDetailTextNodeId = 274,
  IconOssChildren = 275,
  IconOssChildrenContentfulOssDetailTextNode = 276,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 277,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 278,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 279,
  IconOssChildrenContentfulOssDetailTextNodeId = 280,
  IconOssChildrenChildren = 281,
  IconOssChildrenId = 282,
  IconOssContentfulId = 283,
  IconOssCreatedAt = 284,
  IconOssDetailChildren = 285,
  IconOssDetailChildrenMdx = 286,
  IconOssDetailDetail = 287,
  IconOssDetailId = 288,
  IconOssHref = 289,
  IconOssIconChildren = 290,
  IconOssIconChildrenContentfulIconSvgTextNode = 291,
  IconOssIconContact = 292,
  IconOssIconContentfulId = 293,
  IconOssIconCreatedAt = 294,
  IconOssIconHistory = 295,
  IconOssIconId = 296,
  IconOssIconName = 297,
  IconOssIconNodeLocale = 298,
  IconOssIconOss = 299,
  IconOssIconProject = 300,
  IconOssIconSpaceId = 301,
  IconOssIconUpdatedAt = 302,
  IconOssIconWhatICanDo = 303,
  IconOssId = 304,
  IconOssImageChildren = 305,
  IconOssImageContentfulId = 306,
  IconOssImageCreatedAt = 307,
  IconOssImageDescription = 308,
  IconOssImageFilename = 309,
  IconOssImageFilesize = 310,
  IconOssImageGatsbyImage = 311,
  IconOssImageGatsbyImageData = 312,
  IconOssImageHeight = 313,
  IconOssImageId = 314,
  IconOssImageMimeType = 315,
  IconOssImageNodeLocale = 316,
  IconOssImagePlaceholderUrl = 317,
  IconOssImagePublicUrl = 318,
  IconOssImageSpaceId = 319,
  IconOssImageTitle = 320,
  IconOssImageUpdatedAt = 321,
  IconOssImageUrl = 322,
  IconOssImageWidth = 323,
  IconOssInternalContent = 324,
  IconOssInternalContentDigest = 325,
  IconOssInternalDescription = 326,
  IconOssInternalFieldOwners = 327,
  IconOssInternalIgnoreType = 328,
  IconOssInternalMediaType = 329,
  IconOssInternalOwner = 330,
  IconOssInternalType = 331,
  IconOssName = 332,
  IconOssNodeLocale = 333,
  IconOssParentChildren = 334,
  IconOssParentId = 335,
  IconOssSpaceId = 336,
  IconOssStartDate = 337,
  IconOssSubName = 338,
  IconOssSysRevision = 339,
  IconOssSysType = 340,
  IconOssTags = 341,
  IconOssTagsBlogPost = 342,
  IconOssTagsChildren = 343,
  IconOssTagsContentfulId = 344,
  IconOssTagsCreatedAt = 345,
  IconOssTagsId = 346,
  IconOssTagsLevel = 347,
  IconOssTagsName = 348,
  IconOssTagsNodeLocale = 349,
  IconOssTagsOss = 350,
  IconOssTagsProject = 351,
  IconOssTagsSkillMap = 352,
  IconOssTagsSpaceId = 353,
  IconOssTagsUpdatedAt = 354,
  IconOssUpdatedAt = 355,
  IconParentChildren = 356,
  IconParentChildrenChildren = 357,
  IconParentChildrenId = 358,
  IconParentId = 359,
  IconParentInternalContent = 360,
  IconParentInternalContentDigest = 361,
  IconParentInternalDescription = 362,
  IconParentInternalFieldOwners = 363,
  IconParentInternalIgnoreType = 364,
  IconParentInternalMediaType = 365,
  IconParentInternalOwner = 366,
  IconParentInternalType = 367,
  IconParentParentChildren = 368,
  IconParentParentId = 369,
  IconProject = 370,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 371,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 372,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 373,
  IconProjectChildContentfulProjectDetailTextNodeId = 374,
  IconProjectChildren = 375,
  IconProjectChildrenContentfulProjectDetailTextNode = 376,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 377,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 378,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 379,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 380,
  IconProjectChildrenChildren = 381,
  IconProjectChildrenId = 382,
  IconProjectContentfulId = 383,
  IconProjectCreatedAt = 384,
  IconProjectDetailChildren = 385,
  IconProjectDetailChildrenMdx = 386,
  IconProjectDetailDetail = 387,
  IconProjectDetailId = 388,
  IconProjectEndDate = 389,
  IconProjectIconChildren = 390,
  IconProjectIconChildrenContentfulIconSvgTextNode = 391,
  IconProjectIconContact = 392,
  IconProjectIconContentfulId = 393,
  IconProjectIconCreatedAt = 394,
  IconProjectIconHistory = 395,
  IconProjectIconId = 396,
  IconProjectIconName = 397,
  IconProjectIconNodeLocale = 398,
  IconProjectIconOss = 399,
  IconProjectIconProject = 400,
  IconProjectIconSpaceId = 401,
  IconProjectIconUpdatedAt = 402,
  IconProjectIconWhatICanDo = 403,
  IconProjectId = 404,
  IconProjectInternalContent = 405,
  IconProjectInternalContentDigest = 406,
  IconProjectInternalDescription = 407,
  IconProjectInternalFieldOwners = 408,
  IconProjectInternalIgnoreType = 409,
  IconProjectInternalMediaType = 410,
  IconProjectInternalOwner = 411,
  IconProjectInternalType = 412,
  IconProjectName = 413,
  IconProjectNodeLocale = 414,
  IconProjectParentChildren = 415,
  IconProjectParentId = 416,
  IconProjectSpaceId = 417,
  IconProjectStartDate = 418,
  IconProjectSubName = 419,
  IconProjectSysRevision = 420,
  IconProjectSysType = 421,
  IconProjectTags = 422,
  IconProjectTagsBlogPost = 423,
  IconProjectTagsChildren = 424,
  IconProjectTagsContentfulId = 425,
  IconProjectTagsCreatedAt = 426,
  IconProjectTagsId = 427,
  IconProjectTagsLevel = 428,
  IconProjectTagsName = 429,
  IconProjectTagsNodeLocale = 430,
  IconProjectTagsOss = 431,
  IconProjectTagsProject = 432,
  IconProjectTagsSkillMap = 433,
  IconProjectTagsSpaceId = 434,
  IconProjectTagsUpdatedAt = 435,
  IconProjectUpdatedAt = 436,
  IconSpaceId = 437,
  IconSvgChildMdxBody = 438,
  IconSvgChildMdxChildren = 439,
  IconSvgChildMdxExcerpt = 440,
  IconSvgChildMdxFileAbsolutePath = 441,
  IconSvgChildMdxHeadings = 442,
  IconSvgChildMdxHtml = 443,
  IconSvgChildMdxId = 444,
  IconSvgChildMdxMdxAst = 445,
  IconSvgChildMdxRawBody = 446,
  IconSvgChildMdxSlug = 447,
  IconSvgChildMdxTableOfContents = 448,
  IconSvgChildMdxTimeToRead = 449,
  IconSvgChildren = 450,
  IconSvgChildrenMdx = 451,
  IconSvgChildrenMdxBody = 452,
  IconSvgChildrenMdxChildren = 453,
  IconSvgChildrenMdxExcerpt = 454,
  IconSvgChildrenMdxFileAbsolutePath = 455,
  IconSvgChildrenMdxHeadings = 456,
  IconSvgChildrenMdxHtml = 457,
  IconSvgChildrenMdxId = 458,
  IconSvgChildrenMdxMdxAst = 459,
  IconSvgChildrenMdxRawBody = 460,
  IconSvgChildrenMdxSlug = 461,
  IconSvgChildrenMdxTableOfContents = 462,
  IconSvgChildrenMdxTimeToRead = 463,
  IconSvgChildrenChildren = 464,
  IconSvgChildrenId = 465,
  IconSvgId = 466,
  IconSvgInternalContent = 467,
  IconSvgInternalContentDigest = 468,
  IconSvgInternalDescription = 469,
  IconSvgInternalFieldOwners = 470,
  IconSvgInternalIgnoreType = 471,
  IconSvgInternalMediaType = 472,
  IconSvgInternalOwner = 473,
  IconSvgInternalType = 474,
  IconSvgParentChildren = 475,
  IconSvgParentId = 476,
  IconSvgSvg = 477,
  IconSvgSysType = 478,
  IconSysRevision = 479,
  IconSysType = 480,
  IconUpdatedAt = 481,
  IconWhatICanDo = 482,
  IconWhatICanDoChildren = 483,
  IconWhatICanDoChildrenChildren = 484,
  IconWhatICanDoChildrenId = 485,
  IconWhatICanDoContentfulId = 486,
  IconWhatICanDoCreatedAt = 487,
  IconWhatICanDoIconChildren = 488,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 489,
  IconWhatICanDoIconContact = 490,
  IconWhatICanDoIconContentfulId = 491,
  IconWhatICanDoIconCreatedAt = 492,
  IconWhatICanDoIconHistory = 493,
  IconWhatICanDoIconId = 494,
  IconWhatICanDoIconName = 495,
  IconWhatICanDoIconNodeLocale = 496,
  IconWhatICanDoIconOss = 497,
  IconWhatICanDoIconProject = 498,
  IconWhatICanDoIconSpaceId = 499,
  IconWhatICanDoIconUpdatedAt = 500,
  IconWhatICanDoIconWhatICanDo = 501,
  IconWhatICanDoId = 502,
  IconWhatICanDoInternalContent = 503,
  IconWhatICanDoInternalContentDigest = 504,
  IconWhatICanDoInternalDescription = 505,
  IconWhatICanDoInternalFieldOwners = 506,
  IconWhatICanDoInternalIgnoreType = 507,
  IconWhatICanDoInternalMediaType = 508,
  IconWhatICanDoInternalOwner = 509,
  IconWhatICanDoInternalType = 510,
  IconWhatICanDoName = 511,
  IconWhatICanDoNodeLocale = 512,
  IconWhatICanDoParentChildren = 513,
  IconWhatICanDoParentId = 514,
  IconWhatICanDoSortKey = 515,
  IconWhatICanDoSpaceId = 516,
  IconWhatICanDoSubName = 517,
  IconWhatICanDoSysRevision = 518,
  IconWhatICanDoSysType = 519,
  IconWhatICanDoUpdatedAt = 520,
  Id = 521,
  InternalContent = 522,
  InternalContentDigest = 523,
  InternalDescription = 524,
  InternalFieldOwners = 525,
  InternalIgnoreType = 526,
  InternalMediaType = 527,
  InternalOwner = 528,
  InternalType = 529,
  Name = 530,
  NodeLocale = 531,
  ParentChildren = 532,
  ParentChildrenChildren = 533,
  ParentChildrenChildrenChildren = 534,
  ParentChildrenChildrenId = 535,
  ParentChildrenId = 536,
  ParentChildrenInternalContent = 537,
  ParentChildrenInternalContentDigest = 538,
  ParentChildrenInternalDescription = 539,
  ParentChildrenInternalFieldOwners = 540,
  ParentChildrenInternalIgnoreType = 541,
  ParentChildrenInternalMediaType = 542,
  ParentChildrenInternalOwner = 543,
  ParentChildrenInternalType = 544,
  ParentChildrenParentChildren = 545,
  ParentChildrenParentId = 546,
  ParentId = 547,
  ParentInternalContent = 548,
  ParentInternalContentDigest = 549,
  ParentInternalDescription = 550,
  ParentInternalFieldOwners = 551,
  ParentInternalIgnoreType = 552,
  ParentInternalMediaType = 553,
  ParentInternalOwner = 554,
  ParentInternalType = 555,
  ParentParentChildren = 556,
  ParentParentChildrenChildren = 557,
  ParentParentChildrenId = 558,
  ParentParentId = 559,
  ParentParentInternalContent = 560,
  ParentParentInternalContentDigest = 561,
  ParentParentInternalDescription = 562,
  ParentParentInternalFieldOwners = 563,
  ParentParentInternalIgnoreType = 564,
  ParentParentInternalMediaType = 565,
  ParentParentInternalOwner = 566,
  ParentParentInternalType = 567,
  ParentParentParentChildren = 568,
  ParentParentParentId = 569,
  SpaceId = 570,
  SubName = 571,
  SysContentTypeSysId = 572,
  SysContentTypeSysLinkType = 573,
  SysContentTypeSysType = 574,
  SysRevision = 575,
  SysType = 576,
  UpdatedAt = 577
}

export type ContentfulHistoryFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulHistorySysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulHistoryFilterListInput = {
  elemMatch: InputMaybe<ContentfulHistoryFilterInput>;
};

export type ContentfulHistoryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulHistoryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulHistoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulHistory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulHistoryGroupConnectionDistinctArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryGroupConnectionGroupArgs = {
  field: ContentfulHistoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulHistoryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulHistorySys = {
  contentType: Maybe<ContentfulHistorySysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulHistorySysContentType = {
  sys: Maybe<ContentfulHistorySysContentTypeSys>;
};

export type ContentfulHistorySysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulHistorySysContentTypeSysFilterInput>;
};

export type ContentfulHistorySysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulHistorySysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHistorySysFilterInput = {
  contentType: InputMaybe<ContentfulHistorySysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulIcon = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulIconSvgTextNode or null if there are no children of given type on this node */
  childContentfulIconSvgTextNode: Maybe<ContentfulIconSvgTextNode>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type contentfulIconSvgTextNode */
  childrenContentfulIconSvgTextNode: Maybe<Array<Maybe<ContentfulIconSvgTextNode>>>;
  contact: Maybe<Array<Maybe<ContentfulContact>>>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  history: Maybe<Array<Maybe<ContentfulHistory>>>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  oss: Maybe<Array<Maybe<ContentfulOss>>>;
  parent: Maybe<Node>;
  project: Maybe<Array<Maybe<ContentfulProject>>>;
  spaceId: Maybe<Scalars['String']>;
  svg: Maybe<ContentfulIconSvgTextNode>;
  sys: Maybe<ContentfulIconSys>;
  updatedAt: Maybe<Scalars['Date']>;
  what_i_can_do: Maybe<Array<Maybe<ContentfulWhatICanDo>>>;
};


export type ContentfulIconCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulIconUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulIconConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulIconEdge>;
  group: Array<ContentfulIconGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulIcon>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulIconConnectionDistinctArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconConnectionGroupArgs = {
  field: ContentfulIconFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulIcon>;
  node: ContentfulIcon;
  previous: Maybe<ContentfulIcon>;
};

export enum ContentfulIconFieldsEnum {
  ChildContentfulIconSvgTextNodeChildMdxBody = 0,
  ChildContentfulIconSvgTextNodeChildMdxChildren = 1,
  ChildContentfulIconSvgTextNodeChildMdxChildrenChildren = 2,
  ChildContentfulIconSvgTextNodeChildMdxChildrenId = 3,
  ChildContentfulIconSvgTextNodeChildMdxExcerpt = 4,
  ChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 5,
  ChildContentfulIconSvgTextNodeChildMdxFrontmatterTitle = 6,
  ChildContentfulIconSvgTextNodeChildMdxHeadings = 7,
  ChildContentfulIconSvgTextNodeChildMdxHeadingsDepth = 8,
  ChildContentfulIconSvgTextNodeChildMdxHeadingsValue = 9,
  ChildContentfulIconSvgTextNodeChildMdxHtml = 10,
  ChildContentfulIconSvgTextNodeChildMdxId = 11,
  ChildContentfulIconSvgTextNodeChildMdxInternalContent = 12,
  ChildContentfulIconSvgTextNodeChildMdxInternalContentDigest = 13,
  ChildContentfulIconSvgTextNodeChildMdxInternalDescription = 14,
  ChildContentfulIconSvgTextNodeChildMdxInternalFieldOwners = 15,
  ChildContentfulIconSvgTextNodeChildMdxInternalIgnoreType = 16,
  ChildContentfulIconSvgTextNodeChildMdxInternalMediaType = 17,
  ChildContentfulIconSvgTextNodeChildMdxInternalOwner = 18,
  ChildContentfulIconSvgTextNodeChildMdxInternalType = 19,
  ChildContentfulIconSvgTextNodeChildMdxMdxAst = 20,
  ChildContentfulIconSvgTextNodeChildMdxParentChildren = 21,
  ChildContentfulIconSvgTextNodeChildMdxParentId = 22,
  ChildContentfulIconSvgTextNodeChildMdxRawBody = 23,
  ChildContentfulIconSvgTextNodeChildMdxSlug = 24,
  ChildContentfulIconSvgTextNodeChildMdxTableOfContents = 25,
  ChildContentfulIconSvgTextNodeChildMdxTimeToRead = 26,
  ChildContentfulIconSvgTextNodeChildMdxWordCountParagraphs = 27,
  ChildContentfulIconSvgTextNodeChildMdxWordCountSentences = 28,
  ChildContentfulIconSvgTextNodeChildMdxWordCountWords = 29,
  ChildContentfulIconSvgTextNodeChildren = 30,
  ChildContentfulIconSvgTextNodeChildrenMdx = 31,
  ChildContentfulIconSvgTextNodeChildrenMdxBody = 32,
  ChildContentfulIconSvgTextNodeChildrenMdxChildren = 33,
  ChildContentfulIconSvgTextNodeChildrenMdxChildrenChildren = 34,
  ChildContentfulIconSvgTextNodeChildrenMdxChildrenId = 35,
  ChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 36,
  ChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 37,
  ChildContentfulIconSvgTextNodeChildrenMdxFrontmatterTitle = 38,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadings = 39,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadingsDepth = 40,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadingsValue = 41,
  ChildContentfulIconSvgTextNodeChildrenMdxHtml = 42,
  ChildContentfulIconSvgTextNodeChildrenMdxId = 43,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalContent = 44,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalContentDigest = 45,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalDescription = 46,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalFieldOwners = 47,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalIgnoreType = 48,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalMediaType = 49,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalOwner = 50,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalType = 51,
  ChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 52,
  ChildContentfulIconSvgTextNodeChildrenMdxParentChildren = 53,
  ChildContentfulIconSvgTextNodeChildrenMdxParentId = 54,
  ChildContentfulIconSvgTextNodeChildrenMdxRawBody = 55,
  ChildContentfulIconSvgTextNodeChildrenMdxSlug = 56,
  ChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 57,
  ChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 58,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountParagraphs = 59,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountSentences = 60,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountWords = 61,
  ChildContentfulIconSvgTextNodeChildrenChildren = 62,
  ChildContentfulIconSvgTextNodeChildrenChildrenChildren = 63,
  ChildContentfulIconSvgTextNodeChildrenChildrenId = 64,
  ChildContentfulIconSvgTextNodeChildrenId = 65,
  ChildContentfulIconSvgTextNodeChildrenInternalContent = 66,
  ChildContentfulIconSvgTextNodeChildrenInternalContentDigest = 67,
  ChildContentfulIconSvgTextNodeChildrenInternalDescription = 68,
  ChildContentfulIconSvgTextNodeChildrenInternalFieldOwners = 69,
  ChildContentfulIconSvgTextNodeChildrenInternalIgnoreType = 70,
  ChildContentfulIconSvgTextNodeChildrenInternalMediaType = 71,
  ChildContentfulIconSvgTextNodeChildrenInternalOwner = 72,
  ChildContentfulIconSvgTextNodeChildrenInternalType = 73,
  ChildContentfulIconSvgTextNodeChildrenParentChildren = 74,
  ChildContentfulIconSvgTextNodeChildrenParentId = 75,
  ChildContentfulIconSvgTextNodeId = 76,
  ChildContentfulIconSvgTextNodeInternalContent = 77,
  ChildContentfulIconSvgTextNodeInternalContentDigest = 78,
  ChildContentfulIconSvgTextNodeInternalDescription = 79,
  ChildContentfulIconSvgTextNodeInternalFieldOwners = 80,
  ChildContentfulIconSvgTextNodeInternalIgnoreType = 81,
  ChildContentfulIconSvgTextNodeInternalMediaType = 82,
  ChildContentfulIconSvgTextNodeInternalOwner = 83,
  ChildContentfulIconSvgTextNodeInternalType = 84,
  ChildContentfulIconSvgTextNodeParentChildren = 85,
  ChildContentfulIconSvgTextNodeParentChildrenChildren = 86,
  ChildContentfulIconSvgTextNodeParentChildrenId = 87,
  ChildContentfulIconSvgTextNodeParentId = 88,
  ChildContentfulIconSvgTextNodeParentInternalContent = 89,
  ChildContentfulIconSvgTextNodeParentInternalContentDigest = 90,
  ChildContentfulIconSvgTextNodeParentInternalDescription = 91,
  ChildContentfulIconSvgTextNodeParentInternalFieldOwners = 92,
  ChildContentfulIconSvgTextNodeParentInternalIgnoreType = 93,
  ChildContentfulIconSvgTextNodeParentInternalMediaType = 94,
  ChildContentfulIconSvgTextNodeParentInternalOwner = 95,
  ChildContentfulIconSvgTextNodeParentInternalType = 96,
  ChildContentfulIconSvgTextNodeParentParentChildren = 97,
  ChildContentfulIconSvgTextNodeParentParentId = 98,
  ChildContentfulIconSvgTextNodeSvg = 99,
  ChildContentfulIconSvgTextNodeSysType = 100,
  Children = 101,
  ChildrenContentfulIconSvgTextNode = 102,
  ChildrenContentfulIconSvgTextNodeChildMdxBody = 103,
  ChildrenContentfulIconSvgTextNodeChildMdxChildren = 104,
  ChildrenContentfulIconSvgTextNodeChildMdxChildrenChildren = 105,
  ChildrenContentfulIconSvgTextNodeChildMdxChildrenId = 106,
  ChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 107,
  ChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 108,
  ChildrenContentfulIconSvgTextNodeChildMdxFrontmatterTitle = 109,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadings = 110,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadingsDepth = 111,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadingsValue = 112,
  ChildrenContentfulIconSvgTextNodeChildMdxHtml = 113,
  ChildrenContentfulIconSvgTextNodeChildMdxId = 114,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalContent = 115,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalContentDigest = 116,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalDescription = 117,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalFieldOwners = 118,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalIgnoreType = 119,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalMediaType = 120,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalOwner = 121,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalType = 122,
  ChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 123,
  ChildrenContentfulIconSvgTextNodeChildMdxParentChildren = 124,
  ChildrenContentfulIconSvgTextNodeChildMdxParentId = 125,
  ChildrenContentfulIconSvgTextNodeChildMdxRawBody = 126,
  ChildrenContentfulIconSvgTextNodeChildMdxSlug = 127,
  ChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 128,
  ChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 129,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountParagraphs = 130,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountSentences = 131,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountWords = 132,
  ChildrenContentfulIconSvgTextNodeChildren = 133,
  ChildrenContentfulIconSvgTextNodeChildrenMdx = 134,
  ChildrenContentfulIconSvgTextNodeChildrenMdxBody = 135,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 136,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildrenChildren = 137,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildrenId = 138,
  ChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 139,
  ChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 140,
  ChildrenContentfulIconSvgTextNodeChildrenMdxFrontmatterTitle = 141,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 142,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadingsDepth = 143,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadingsValue = 144,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 145,
  ChildrenContentfulIconSvgTextNodeChildrenMdxId = 146,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalContent = 147,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalContentDigest = 148,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalDescription = 149,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalFieldOwners = 150,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalIgnoreType = 151,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalMediaType = 152,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalOwner = 153,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalType = 154,
  ChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 155,
  ChildrenContentfulIconSvgTextNodeChildrenMdxParentChildren = 156,
  ChildrenContentfulIconSvgTextNodeChildrenMdxParentId = 157,
  ChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 158,
  ChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 159,
  ChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 160,
  ChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 161,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountParagraphs = 162,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountSentences = 163,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountWords = 164,
  ChildrenContentfulIconSvgTextNodeChildrenChildren = 165,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenChildren = 166,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenId = 167,
  ChildrenContentfulIconSvgTextNodeChildrenId = 168,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContent = 169,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContentDigest = 170,
  ChildrenContentfulIconSvgTextNodeChildrenInternalDescription = 171,
  ChildrenContentfulIconSvgTextNodeChildrenInternalFieldOwners = 172,
  ChildrenContentfulIconSvgTextNodeChildrenInternalIgnoreType = 173,
  ChildrenContentfulIconSvgTextNodeChildrenInternalMediaType = 174,
  ChildrenContentfulIconSvgTextNodeChildrenInternalOwner = 175,
  ChildrenContentfulIconSvgTextNodeChildrenInternalType = 176,
  ChildrenContentfulIconSvgTextNodeChildrenParentChildren = 177,
  ChildrenContentfulIconSvgTextNodeChildrenParentId = 178,
  ChildrenContentfulIconSvgTextNodeId = 179,
  ChildrenContentfulIconSvgTextNodeInternalContent = 180,
  ChildrenContentfulIconSvgTextNodeInternalContentDigest = 181,
  ChildrenContentfulIconSvgTextNodeInternalDescription = 182,
  ChildrenContentfulIconSvgTextNodeInternalFieldOwners = 183,
  ChildrenContentfulIconSvgTextNodeInternalIgnoreType = 184,
  ChildrenContentfulIconSvgTextNodeInternalMediaType = 185,
  ChildrenContentfulIconSvgTextNodeInternalOwner = 186,
  ChildrenContentfulIconSvgTextNodeInternalType = 187,
  ChildrenContentfulIconSvgTextNodeParentChildren = 188,
  ChildrenContentfulIconSvgTextNodeParentChildrenChildren = 189,
  ChildrenContentfulIconSvgTextNodeParentChildrenId = 190,
  ChildrenContentfulIconSvgTextNodeParentId = 191,
  ChildrenContentfulIconSvgTextNodeParentInternalContent = 192,
  ChildrenContentfulIconSvgTextNodeParentInternalContentDigest = 193,
  ChildrenContentfulIconSvgTextNodeParentInternalDescription = 194,
  ChildrenContentfulIconSvgTextNodeParentInternalFieldOwners = 195,
  ChildrenContentfulIconSvgTextNodeParentInternalIgnoreType = 196,
  ChildrenContentfulIconSvgTextNodeParentInternalMediaType = 197,
  ChildrenContentfulIconSvgTextNodeParentInternalOwner = 198,
  ChildrenContentfulIconSvgTextNodeParentInternalType = 199,
  ChildrenContentfulIconSvgTextNodeParentParentChildren = 200,
  ChildrenContentfulIconSvgTextNodeParentParentId = 201,
  ChildrenContentfulIconSvgTextNodeSvg = 202,
  ChildrenContentfulIconSvgTextNodeSysType = 203,
  ChildrenChildren = 204,
  ChildrenChildrenChildren = 205,
  ChildrenChildrenChildrenChildren = 206,
  ChildrenChildrenChildrenId = 207,
  ChildrenChildrenId = 208,
  ChildrenChildrenInternalContent = 209,
  ChildrenChildrenInternalContentDigest = 210,
  ChildrenChildrenInternalDescription = 211,
  ChildrenChildrenInternalFieldOwners = 212,
  ChildrenChildrenInternalIgnoreType = 213,
  ChildrenChildrenInternalMediaType = 214,
  ChildrenChildrenInternalOwner = 215,
  ChildrenChildrenInternalType = 216,
  ChildrenChildrenParentChildren = 217,
  ChildrenChildrenParentId = 218,
  ChildrenId = 219,
  ChildrenInternalContent = 220,
  ChildrenInternalContentDigest = 221,
  ChildrenInternalDescription = 222,
  ChildrenInternalFieldOwners = 223,
  ChildrenInternalIgnoreType = 224,
  ChildrenInternalMediaType = 225,
  ChildrenInternalOwner = 226,
  ChildrenInternalType = 227,
  ChildrenParentChildren = 228,
  ChildrenParentChildrenChildren = 229,
  ChildrenParentChildrenId = 230,
  ChildrenParentId = 231,
  ChildrenParentInternalContent = 232,
  ChildrenParentInternalContentDigest = 233,
  ChildrenParentInternalDescription = 234,
  ChildrenParentInternalFieldOwners = 235,
  ChildrenParentInternalIgnoreType = 236,
  ChildrenParentInternalMediaType = 237,
  ChildrenParentInternalOwner = 238,
  ChildrenParentInternalType = 239,
  ChildrenParentParentChildren = 240,
  ChildrenParentParentId = 241,
  Contact = 242,
  ContactChildren = 243,
  ContactChildrenChildren = 244,
  ContactChildrenChildrenChildren = 245,
  ContactChildrenChildrenId = 246,
  ContactChildrenId = 247,
  ContactChildrenInternalContent = 248,
  ContactChildrenInternalContentDigest = 249,
  ContactChildrenInternalDescription = 250,
  ContactChildrenInternalFieldOwners = 251,
  ContactChildrenInternalIgnoreType = 252,
  ContactChildrenInternalMediaType = 253,
  ContactChildrenInternalOwner = 254,
  ContactChildrenInternalType = 255,
  ContactChildrenParentChildren = 256,
  ContactChildrenParentId = 257,
  ContactContentfulId = 258,
  ContactCreatedAt = 259,
  ContactHref = 260,
  ContactIconSvgDarkChildren = 261,
  ContactIconSvgDarkChildrenChildren = 262,
  ContactIconSvgDarkChildrenId = 263,
  ContactIconSvgDarkContentfulId = 264,
  ContactIconSvgDarkCreatedAt = 265,
  ContactIconSvgDarkDescription = 266,
  ContactIconSvgDarkFieldsLocalFile = 267,
  ContactIconSvgDarkFileContentType = 268,
  ContactIconSvgDarkFileFileName = 269,
  ContactIconSvgDarkFileUrl = 270,
  ContactIconSvgDarkFilename = 271,
  ContactIconSvgDarkFilesize = 272,
  ContactIconSvgDarkGatsbyImage = 273,
  ContactIconSvgDarkGatsbyImageData = 274,
  ContactIconSvgDarkHeight = 275,
  ContactIconSvgDarkId = 276,
  ContactIconSvgDarkInternalContent = 277,
  ContactIconSvgDarkInternalContentDigest = 278,
  ContactIconSvgDarkInternalDescription = 279,
  ContactIconSvgDarkInternalFieldOwners = 280,
  ContactIconSvgDarkInternalIgnoreType = 281,
  ContactIconSvgDarkInternalMediaType = 282,
  ContactIconSvgDarkInternalOwner = 283,
  ContactIconSvgDarkInternalType = 284,
  ContactIconSvgDarkLocalFileAbsolutePath = 285,
  ContactIconSvgDarkLocalFileAccessTime = 286,
  ContactIconSvgDarkLocalFileAtime = 287,
  ContactIconSvgDarkLocalFileAtimeMs = 288,
  ContactIconSvgDarkLocalFileBase = 289,
  ContactIconSvgDarkLocalFileBirthTime = 290,
  ContactIconSvgDarkLocalFileBirthtime = 291,
  ContactIconSvgDarkLocalFileBirthtimeMs = 292,
  ContactIconSvgDarkLocalFileBlksize = 293,
  ContactIconSvgDarkLocalFileBlocks = 294,
  ContactIconSvgDarkLocalFileChangeTime = 295,
  ContactIconSvgDarkLocalFileChildren = 296,
  ContactIconSvgDarkLocalFileChildrenImageSharp = 297,
  ContactIconSvgDarkLocalFileChildrenLocale = 298,
  ContactIconSvgDarkLocalFileCtime = 299,
  ContactIconSvgDarkLocalFileCtimeMs = 300,
  ContactIconSvgDarkLocalFileDev = 301,
  ContactIconSvgDarkLocalFileDir = 302,
  ContactIconSvgDarkLocalFileExt = 303,
  ContactIconSvgDarkLocalFileExtension = 304,
  ContactIconSvgDarkLocalFileGid = 305,
  ContactIconSvgDarkLocalFileId = 306,
  ContactIconSvgDarkLocalFileIno = 307,
  ContactIconSvgDarkLocalFileMode = 308,
  ContactIconSvgDarkLocalFileModifiedTime = 309,
  ContactIconSvgDarkLocalFileMtime = 310,
  ContactIconSvgDarkLocalFileMtimeMs = 311,
  ContactIconSvgDarkLocalFileName = 312,
  ContactIconSvgDarkLocalFileNlink = 313,
  ContactIconSvgDarkLocalFilePrettySize = 314,
  ContactIconSvgDarkLocalFilePublicUrl = 315,
  ContactIconSvgDarkLocalFileRdev = 316,
  ContactIconSvgDarkLocalFileRelativeDirectory = 317,
  ContactIconSvgDarkLocalFileRelativePath = 318,
  ContactIconSvgDarkLocalFileRoot = 319,
  ContactIconSvgDarkLocalFileSize = 320,
  ContactIconSvgDarkLocalFileSourceInstanceName = 321,
  ContactIconSvgDarkLocalFileUid = 322,
  ContactIconSvgDarkLocalFileUrl = 323,
  ContactIconSvgDarkMimeType = 324,
  ContactIconSvgDarkNodeLocale = 325,
  ContactIconSvgDarkParentChildren = 326,
  ContactIconSvgDarkParentId = 327,
  ContactIconSvgDarkPlaceholderUrl = 328,
  ContactIconSvgDarkPublicUrl = 329,
  ContactIconSvgDarkResizeHeight = 330,
  ContactIconSvgDarkResizeSrc = 331,
  ContactIconSvgDarkResizeWidth = 332,
  ContactIconSvgDarkSpaceId = 333,
  ContactIconSvgDarkSysRevision = 334,
  ContactIconSvgDarkSysType = 335,
  ContactIconSvgDarkTitle = 336,
  ContactIconSvgDarkUpdatedAt = 337,
  ContactIconSvgDarkUrl = 338,
  ContactIconSvgDarkWidth = 339,
  ContactIconSvgLightChildren = 340,
  ContactIconSvgLightChildrenChildren = 341,
  ContactIconSvgLightChildrenId = 342,
  ContactIconSvgLightContentfulId = 343,
  ContactIconSvgLightCreatedAt = 344,
  ContactIconSvgLightDescription = 345,
  ContactIconSvgLightFieldsLocalFile = 346,
  ContactIconSvgLightFileContentType = 347,
  ContactIconSvgLightFileFileName = 348,
  ContactIconSvgLightFileUrl = 349,
  ContactIconSvgLightFilename = 350,
  ContactIconSvgLightFilesize = 351,
  ContactIconSvgLightGatsbyImage = 352,
  ContactIconSvgLightGatsbyImageData = 353,
  ContactIconSvgLightHeight = 354,
  ContactIconSvgLightId = 355,
  ContactIconSvgLightInternalContent = 356,
  ContactIconSvgLightInternalContentDigest = 357,
  ContactIconSvgLightInternalDescription = 358,
  ContactIconSvgLightInternalFieldOwners = 359,
  ContactIconSvgLightInternalIgnoreType = 360,
  ContactIconSvgLightInternalMediaType = 361,
  ContactIconSvgLightInternalOwner = 362,
  ContactIconSvgLightInternalType = 363,
  ContactIconSvgLightLocalFileAbsolutePath = 364,
  ContactIconSvgLightLocalFileAccessTime = 365,
  ContactIconSvgLightLocalFileAtime = 366,
  ContactIconSvgLightLocalFileAtimeMs = 367,
  ContactIconSvgLightLocalFileBase = 368,
  ContactIconSvgLightLocalFileBirthTime = 369,
  ContactIconSvgLightLocalFileBirthtime = 370,
  ContactIconSvgLightLocalFileBirthtimeMs = 371,
  ContactIconSvgLightLocalFileBlksize = 372,
  ContactIconSvgLightLocalFileBlocks = 373,
  ContactIconSvgLightLocalFileChangeTime = 374,
  ContactIconSvgLightLocalFileChildren = 375,
  ContactIconSvgLightLocalFileChildrenImageSharp = 376,
  ContactIconSvgLightLocalFileChildrenLocale = 377,
  ContactIconSvgLightLocalFileCtime = 378,
  ContactIconSvgLightLocalFileCtimeMs = 379,
  ContactIconSvgLightLocalFileDev = 380,
  ContactIconSvgLightLocalFileDir = 381,
  ContactIconSvgLightLocalFileExt = 382,
  ContactIconSvgLightLocalFileExtension = 383,
  ContactIconSvgLightLocalFileGid = 384,
  ContactIconSvgLightLocalFileId = 385,
  ContactIconSvgLightLocalFileIno = 386,
  ContactIconSvgLightLocalFileMode = 387,
  ContactIconSvgLightLocalFileModifiedTime = 388,
  ContactIconSvgLightLocalFileMtime = 389,
  ContactIconSvgLightLocalFileMtimeMs = 390,
  ContactIconSvgLightLocalFileName = 391,
  ContactIconSvgLightLocalFileNlink = 392,
  ContactIconSvgLightLocalFilePrettySize = 393,
  ContactIconSvgLightLocalFilePublicUrl = 394,
  ContactIconSvgLightLocalFileRdev = 395,
  ContactIconSvgLightLocalFileRelativeDirectory = 396,
  ContactIconSvgLightLocalFileRelativePath = 397,
  ContactIconSvgLightLocalFileRoot = 398,
  ContactIconSvgLightLocalFileSize = 399,
  ContactIconSvgLightLocalFileSourceInstanceName = 400,
  ContactIconSvgLightLocalFileUid = 401,
  ContactIconSvgLightLocalFileUrl = 402,
  ContactIconSvgLightMimeType = 403,
  ContactIconSvgLightNodeLocale = 404,
  ContactIconSvgLightParentChildren = 405,
  ContactIconSvgLightParentId = 406,
  ContactIconSvgLightPlaceholderUrl = 407,
  ContactIconSvgLightPublicUrl = 408,
  ContactIconSvgLightResizeHeight = 409,
  ContactIconSvgLightResizeSrc = 410,
  ContactIconSvgLightResizeWidth = 411,
  ContactIconSvgLightSpaceId = 412,
  ContactIconSvgLightSysRevision = 413,
  ContactIconSvgLightSysType = 414,
  ContactIconSvgLightTitle = 415,
  ContactIconSvgLightUpdatedAt = 416,
  ContactIconSvgLightUrl = 417,
  ContactIconSvgLightWidth = 418,
  ContactIconChildContentfulIconSvgTextNodeChildren = 419,
  ContactIconChildContentfulIconSvgTextNodeChildrenMdx = 420,
  ContactIconChildContentfulIconSvgTextNodeId = 421,
  ContactIconChildContentfulIconSvgTextNodeSvg = 422,
  ContactIconChildren = 423,
  ContactIconChildrenContentfulIconSvgTextNode = 424,
  ContactIconChildrenContentfulIconSvgTextNodeChildren = 425,
  ContactIconChildrenContentfulIconSvgTextNodeChildrenMdx = 426,
  ContactIconChildrenContentfulIconSvgTextNodeId = 427,
  ContactIconChildrenContentfulIconSvgTextNodeSvg = 428,
  ContactIconChildrenChildren = 429,
  ContactIconChildrenId = 430,
  ContactIconContact = 431,
  ContactIconContactChildren = 432,
  ContactIconContactContentfulId = 433,
  ContactIconContactCreatedAt = 434,
  ContactIconContactHref = 435,
  ContactIconContactId = 436,
  ContactIconContactName = 437,
  ContactIconContactNodeLocale = 438,
  ContactIconContactSortKey = 439,
  ContactIconContactSpaceId = 440,
  ContactIconContactSubName = 441,
  ContactIconContactUpdatedAt = 442,
  ContactIconContentfulId = 443,
  ContactIconCreatedAt = 444,
  ContactIconHistory = 445,
  ContactIconHistoryChildren = 446,
  ContactIconHistoryContentfulId = 447,
  ContactIconHistoryCreatedAt = 448,
  ContactIconHistoryDate = 449,
  ContactIconHistoryId = 450,
  ContactIconHistoryName = 451,
  ContactIconHistoryNodeLocale = 452,
  ContactIconHistorySpaceId = 453,
  ContactIconHistorySubName = 454,
  ContactIconHistoryUpdatedAt = 455,
  ContactIconId = 456,
  ContactIconInternalContent = 457,
  ContactIconInternalContentDigest = 458,
  ContactIconInternalDescription = 459,
  ContactIconInternalFieldOwners = 460,
  ContactIconInternalIgnoreType = 461,
  ContactIconInternalMediaType = 462,
  ContactIconInternalOwner = 463,
  ContactIconInternalType = 464,
  ContactIconName = 465,
  ContactIconNodeLocale = 466,
  ContactIconOss = 467,
  ContactIconOssChildren = 468,
  ContactIconOssChildrenContentfulOssDetailTextNode = 469,
  ContactIconOssContentfulId = 470,
  ContactIconOssCreatedAt = 471,
  ContactIconOssHref = 472,
  ContactIconOssId = 473,
  ContactIconOssName = 474,
  ContactIconOssNodeLocale = 475,
  ContactIconOssSpaceId = 476,
  ContactIconOssStartDate = 477,
  ContactIconOssSubName = 478,
  ContactIconOssTags = 479,
  ContactIconOssUpdatedAt = 480,
  ContactIconParentChildren = 481,
  ContactIconParentId = 482,
  ContactIconProject = 483,
  ContactIconProjectChildren = 484,
  ContactIconProjectChildrenContentfulProjectDetailTextNode = 485,
  ContactIconProjectContentfulId = 486,
  ContactIconProjectCreatedAt = 487,
  ContactIconProjectEndDate = 488,
  ContactIconProjectId = 489,
  ContactIconProjectName = 490,
  ContactIconProjectNodeLocale = 491,
  ContactIconProjectSpaceId = 492,
  ContactIconProjectStartDate = 493,
  ContactIconProjectSubName = 494,
  ContactIconProjectTags = 495,
  ContactIconProjectUpdatedAt = 496,
  ContactIconSpaceId = 497,
  ContactIconSvgChildren = 498,
  ContactIconSvgChildrenMdx = 499,
  ContactIconSvgId = 500,
  ContactIconSvgSvg = 501,
  ContactIconSysRevision = 502,
  ContactIconSysType = 503,
  ContactIconUpdatedAt = 504,
  ContactIconWhatICanDo = 505,
  ContactIconWhatICanDoChildren = 506,
  ContactIconWhatICanDoContentfulId = 507,
  ContactIconWhatICanDoCreatedAt = 508,
  ContactIconWhatICanDoId = 509,
  ContactIconWhatICanDoName = 510,
  ContactIconWhatICanDoNodeLocale = 511,
  ContactIconWhatICanDoSortKey = 512,
  ContactIconWhatICanDoSpaceId = 513,
  ContactIconWhatICanDoSubName = 514,
  ContactIconWhatICanDoUpdatedAt = 515,
  ContactId = 516,
  ContactInternalContent = 517,
  ContactInternalContentDigest = 518,
  ContactInternalDescription = 519,
  ContactInternalFieldOwners = 520,
  ContactInternalIgnoreType = 521,
  ContactInternalMediaType = 522,
  ContactInternalOwner = 523,
  ContactInternalType = 524,
  ContactName = 525,
  ContactNodeLocale = 526,
  ContactParentChildren = 527,
  ContactParentChildrenChildren = 528,
  ContactParentChildrenId = 529,
  ContactParentId = 530,
  ContactParentInternalContent = 531,
  ContactParentInternalContentDigest = 532,
  ContactParentInternalDescription = 533,
  ContactParentInternalFieldOwners = 534,
  ContactParentInternalIgnoreType = 535,
  ContactParentInternalMediaType = 536,
  ContactParentInternalOwner = 537,
  ContactParentInternalType = 538,
  ContactParentParentChildren = 539,
  ContactParentParentId = 540,
  ContactSortKey = 541,
  ContactSpaceId = 542,
  ContactSubName = 543,
  ContactSysRevision = 544,
  ContactSysType = 545,
  ContactUpdatedAt = 546,
  ContentfulId = 547,
  CreatedAt = 548,
  History = 549,
  HistoryChildren = 550,
  HistoryChildrenChildren = 551,
  HistoryChildrenChildrenChildren = 552,
  HistoryChildrenChildrenId = 553,
  HistoryChildrenId = 554,
  HistoryChildrenInternalContent = 555,
  HistoryChildrenInternalContentDigest = 556,
  HistoryChildrenInternalDescription = 557,
  HistoryChildrenInternalFieldOwners = 558,
  HistoryChildrenInternalIgnoreType = 559,
  HistoryChildrenInternalMediaType = 560,
  HistoryChildrenInternalOwner = 561,
  HistoryChildrenInternalType = 562,
  HistoryChildrenParentChildren = 563,
  HistoryChildrenParentId = 564,
  HistoryContentfulId = 565,
  HistoryCreatedAt = 566,
  HistoryDate = 567,
  HistoryIconChildContentfulIconSvgTextNodeChildren = 568,
  HistoryIconChildContentfulIconSvgTextNodeChildrenMdx = 569,
  HistoryIconChildContentfulIconSvgTextNodeId = 570,
  HistoryIconChildContentfulIconSvgTextNodeSvg = 571,
  HistoryIconChildren = 572,
  HistoryIconChildrenContentfulIconSvgTextNode = 573,
  HistoryIconChildrenContentfulIconSvgTextNodeChildren = 574,
  HistoryIconChildrenContentfulIconSvgTextNodeChildrenMdx = 575,
  HistoryIconChildrenContentfulIconSvgTextNodeId = 576,
  HistoryIconChildrenContentfulIconSvgTextNodeSvg = 577,
  HistoryIconChildrenChildren = 578,
  HistoryIconChildrenId = 579,
  HistoryIconContact = 580,
  HistoryIconContactChildren = 581,
  HistoryIconContactContentfulId = 582,
  HistoryIconContactCreatedAt = 583,
  HistoryIconContactHref = 584,
  HistoryIconContactId = 585,
  HistoryIconContactName = 586,
  HistoryIconContactNodeLocale = 587,
  HistoryIconContactSortKey = 588,
  HistoryIconContactSpaceId = 589,
  HistoryIconContactSubName = 590,
  HistoryIconContactUpdatedAt = 591,
  HistoryIconContentfulId = 592,
  HistoryIconCreatedAt = 593,
  HistoryIconHistory = 594,
  HistoryIconHistoryChildren = 595,
  HistoryIconHistoryContentfulId = 596,
  HistoryIconHistoryCreatedAt = 597,
  HistoryIconHistoryDate = 598,
  HistoryIconHistoryId = 599,
  HistoryIconHistoryName = 600,
  HistoryIconHistoryNodeLocale = 601,
  HistoryIconHistorySpaceId = 602,
  HistoryIconHistorySubName = 603,
  HistoryIconHistoryUpdatedAt = 604,
  HistoryIconId = 605,
  HistoryIconInternalContent = 606,
  HistoryIconInternalContentDigest = 607,
  HistoryIconInternalDescription = 608,
  HistoryIconInternalFieldOwners = 609,
  HistoryIconInternalIgnoreType = 610,
  HistoryIconInternalMediaType = 611,
  HistoryIconInternalOwner = 612,
  HistoryIconInternalType = 613,
  HistoryIconName = 614,
  HistoryIconNodeLocale = 615,
  HistoryIconOss = 616,
  HistoryIconOssChildren = 617,
  HistoryIconOssChildrenContentfulOssDetailTextNode = 618,
  HistoryIconOssContentfulId = 619,
  HistoryIconOssCreatedAt = 620,
  HistoryIconOssHref = 621,
  HistoryIconOssId = 622,
  HistoryIconOssName = 623,
  HistoryIconOssNodeLocale = 624,
  HistoryIconOssSpaceId = 625,
  HistoryIconOssStartDate = 626,
  HistoryIconOssSubName = 627,
  HistoryIconOssTags = 628,
  HistoryIconOssUpdatedAt = 629,
  HistoryIconParentChildren = 630,
  HistoryIconParentId = 631,
  HistoryIconProject = 632,
  HistoryIconProjectChildren = 633,
  HistoryIconProjectChildrenContentfulProjectDetailTextNode = 634,
  HistoryIconProjectContentfulId = 635,
  HistoryIconProjectCreatedAt = 636,
  HistoryIconProjectEndDate = 637,
  HistoryIconProjectId = 638,
  HistoryIconProjectName = 639,
  HistoryIconProjectNodeLocale = 640,
  HistoryIconProjectSpaceId = 641,
  HistoryIconProjectStartDate = 642,
  HistoryIconProjectSubName = 643,
  HistoryIconProjectTags = 644,
  HistoryIconProjectUpdatedAt = 645,
  HistoryIconSpaceId = 646,
  HistoryIconSvgChildren = 647,
  HistoryIconSvgChildrenMdx = 648,
  HistoryIconSvgId = 649,
  HistoryIconSvgSvg = 650,
  HistoryIconSysRevision = 651,
  HistoryIconSysType = 652,
  HistoryIconUpdatedAt = 653,
  HistoryIconWhatICanDo = 654,
  HistoryIconWhatICanDoChildren = 655,
  HistoryIconWhatICanDoContentfulId = 656,
  HistoryIconWhatICanDoCreatedAt = 657,
  HistoryIconWhatICanDoId = 658,
  HistoryIconWhatICanDoName = 659,
  HistoryIconWhatICanDoNodeLocale = 660,
  HistoryIconWhatICanDoSortKey = 661,
  HistoryIconWhatICanDoSpaceId = 662,
  HistoryIconWhatICanDoSubName = 663,
  HistoryIconWhatICanDoUpdatedAt = 664,
  HistoryId = 665,
  HistoryInternalContent = 666,
  HistoryInternalContentDigest = 667,
  HistoryInternalDescription = 668,
  HistoryInternalFieldOwners = 669,
  HistoryInternalIgnoreType = 670,
  HistoryInternalMediaType = 671,
  HistoryInternalOwner = 672,
  HistoryInternalType = 673,
  HistoryName = 674,
  HistoryNodeLocale = 675,
  HistoryParentChildren = 676,
  HistoryParentChildrenChildren = 677,
  HistoryParentChildrenId = 678,
  HistoryParentId = 679,
  HistoryParentInternalContent = 680,
  HistoryParentInternalContentDigest = 681,
  HistoryParentInternalDescription = 682,
  HistoryParentInternalFieldOwners = 683,
  HistoryParentInternalIgnoreType = 684,
  HistoryParentInternalMediaType = 685,
  HistoryParentInternalOwner = 686,
  HistoryParentInternalType = 687,
  HistoryParentParentChildren = 688,
  HistoryParentParentId = 689,
  HistorySpaceId = 690,
  HistorySubName = 691,
  HistorySysRevision = 692,
  HistorySysType = 693,
  HistoryUpdatedAt = 694,
  Id = 695,
  InternalContent = 696,
  InternalContentDigest = 697,
  InternalDescription = 698,
  InternalFieldOwners = 699,
  InternalIgnoreType = 700,
  InternalMediaType = 701,
  InternalOwner = 702,
  InternalType = 703,
  Name = 704,
  NodeLocale = 705,
  Oss = 706,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 707,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 708,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 709,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 710,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 711,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 712,
  OssChildContentfulOssDetailTextNodeChildMdxId = 713,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 714,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 715,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 716,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 717,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 718,
  OssChildContentfulOssDetailTextNodeChildren = 719,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 720,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 721,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 722,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 723,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 724,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 725,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 726,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 727,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 728,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 729,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 730,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 731,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 732,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 733,
  OssChildContentfulOssDetailTextNodeChildrenId = 734,
  OssChildContentfulOssDetailTextNodeDetail = 735,
  OssChildContentfulOssDetailTextNodeId = 736,
  OssChildContentfulOssDetailTextNodeInternalContent = 737,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 738,
  OssChildContentfulOssDetailTextNodeInternalDescription = 739,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 740,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 741,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 742,
  OssChildContentfulOssDetailTextNodeInternalOwner = 743,
  OssChildContentfulOssDetailTextNodeInternalType = 744,
  OssChildContentfulOssDetailTextNodeParentChildren = 745,
  OssChildContentfulOssDetailTextNodeParentId = 746,
  OssChildContentfulOssDetailTextNodeSysType = 747,
  OssChildren = 748,
  OssChildrenContentfulOssDetailTextNode = 749,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 750,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 751,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 752,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 753,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 754,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 755,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 756,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 757,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 758,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 759,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 760,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 761,
  OssChildrenContentfulOssDetailTextNodeChildren = 762,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 763,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 764,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 765,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 766,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 767,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 768,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 769,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 770,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 771,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 772,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 773,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 774,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 775,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 776,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 777,
  OssChildrenContentfulOssDetailTextNodeDetail = 778,
  OssChildrenContentfulOssDetailTextNodeId = 779,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 780,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 781,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 782,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 783,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 784,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 785,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 786,
  OssChildrenContentfulOssDetailTextNodeInternalType = 787,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 788,
  OssChildrenContentfulOssDetailTextNodeParentId = 789,
  OssChildrenContentfulOssDetailTextNodeSysType = 790,
  OssChildrenChildren = 791,
  OssChildrenChildrenChildren = 792,
  OssChildrenChildrenId = 793,
  OssChildrenId = 794,
  OssChildrenInternalContent = 795,
  OssChildrenInternalContentDigest = 796,
  OssChildrenInternalDescription = 797,
  OssChildrenInternalFieldOwners = 798,
  OssChildrenInternalIgnoreType = 799,
  OssChildrenInternalMediaType = 800,
  OssChildrenInternalOwner = 801,
  OssChildrenInternalType = 802,
  OssChildrenParentChildren = 803,
  OssChildrenParentId = 804,
  OssContentfulId = 805,
  OssCreatedAt = 806,
  OssDetailChildMdxBody = 807,
  OssDetailChildMdxChildren = 808,
  OssDetailChildMdxExcerpt = 809,
  OssDetailChildMdxFileAbsolutePath = 810,
  OssDetailChildMdxHeadings = 811,
  OssDetailChildMdxHtml = 812,
  OssDetailChildMdxId = 813,
  OssDetailChildMdxMdxAst = 814,
  OssDetailChildMdxRawBody = 815,
  OssDetailChildMdxSlug = 816,
  OssDetailChildMdxTableOfContents = 817,
  OssDetailChildMdxTimeToRead = 818,
  OssDetailChildren = 819,
  OssDetailChildrenMdx = 820,
  OssDetailChildrenMdxBody = 821,
  OssDetailChildrenMdxChildren = 822,
  OssDetailChildrenMdxExcerpt = 823,
  OssDetailChildrenMdxFileAbsolutePath = 824,
  OssDetailChildrenMdxHeadings = 825,
  OssDetailChildrenMdxHtml = 826,
  OssDetailChildrenMdxId = 827,
  OssDetailChildrenMdxMdxAst = 828,
  OssDetailChildrenMdxRawBody = 829,
  OssDetailChildrenMdxSlug = 830,
  OssDetailChildrenMdxTableOfContents = 831,
  OssDetailChildrenMdxTimeToRead = 832,
  OssDetailChildrenChildren = 833,
  OssDetailChildrenId = 834,
  OssDetailDetail = 835,
  OssDetailId = 836,
  OssDetailInternalContent = 837,
  OssDetailInternalContentDigest = 838,
  OssDetailInternalDescription = 839,
  OssDetailInternalFieldOwners = 840,
  OssDetailInternalIgnoreType = 841,
  OssDetailInternalMediaType = 842,
  OssDetailInternalOwner = 843,
  OssDetailInternalType = 844,
  OssDetailParentChildren = 845,
  OssDetailParentId = 846,
  OssDetailSysType = 847,
  OssHref = 848,
  OssIconChildContentfulIconSvgTextNodeChildren = 849,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 850,
  OssIconChildContentfulIconSvgTextNodeId = 851,
  OssIconChildContentfulIconSvgTextNodeSvg = 852,
  OssIconChildren = 853,
  OssIconChildrenContentfulIconSvgTextNode = 854,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 855,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 856,
  OssIconChildrenContentfulIconSvgTextNodeId = 857,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 858,
  OssIconChildrenChildren = 859,
  OssIconChildrenId = 860,
  OssIconContact = 861,
  OssIconContactChildren = 862,
  OssIconContactContentfulId = 863,
  OssIconContactCreatedAt = 864,
  OssIconContactHref = 865,
  OssIconContactId = 866,
  OssIconContactName = 867,
  OssIconContactNodeLocale = 868,
  OssIconContactSortKey = 869,
  OssIconContactSpaceId = 870,
  OssIconContactSubName = 871,
  OssIconContactUpdatedAt = 872,
  OssIconContentfulId = 873,
  OssIconCreatedAt = 874,
  OssIconHistory = 875,
  OssIconHistoryChildren = 876,
  OssIconHistoryContentfulId = 877,
  OssIconHistoryCreatedAt = 878,
  OssIconHistoryDate = 879,
  OssIconHistoryId = 880,
  OssIconHistoryName = 881,
  OssIconHistoryNodeLocale = 882,
  OssIconHistorySpaceId = 883,
  OssIconHistorySubName = 884,
  OssIconHistoryUpdatedAt = 885,
  OssIconId = 886,
  OssIconInternalContent = 887,
  OssIconInternalContentDigest = 888,
  OssIconInternalDescription = 889,
  OssIconInternalFieldOwners = 890,
  OssIconInternalIgnoreType = 891,
  OssIconInternalMediaType = 892,
  OssIconInternalOwner = 893,
  OssIconInternalType = 894,
  OssIconName = 895,
  OssIconNodeLocale = 896,
  OssIconOss = 897,
  OssIconOssChildren = 898,
  OssIconOssChildrenContentfulOssDetailTextNode = 899,
  OssIconOssContentfulId = 900,
  OssIconOssCreatedAt = 901,
  OssIconOssHref = 902,
  OssIconOssId = 903,
  OssIconOssName = 904,
  OssIconOssNodeLocale = 905,
  OssIconOssSpaceId = 906,
  OssIconOssStartDate = 907,
  OssIconOssSubName = 908,
  OssIconOssTags = 909,
  OssIconOssUpdatedAt = 910,
  OssIconParentChildren = 911,
  OssIconParentId = 912,
  OssIconProject = 913,
  OssIconProjectChildren = 914,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 915,
  OssIconProjectContentfulId = 916,
  OssIconProjectCreatedAt = 917,
  OssIconProjectEndDate = 918,
  OssIconProjectId = 919,
  OssIconProjectName = 920,
  OssIconProjectNodeLocale = 921,
  OssIconProjectSpaceId = 922,
  OssIconProjectStartDate = 923,
  OssIconProjectSubName = 924,
  OssIconProjectTags = 925,
  OssIconProjectUpdatedAt = 926,
  OssIconSpaceId = 927,
  OssIconSvgChildren = 928,
  OssIconSvgChildrenMdx = 929,
  OssIconSvgId = 930,
  OssIconSvgSvg = 931,
  OssIconSysRevision = 932,
  OssIconSysType = 933,
  OssIconUpdatedAt = 934,
  OssIconWhatICanDo = 935,
  OssIconWhatICanDoChildren = 936,
  OssIconWhatICanDoContentfulId = 937,
  OssIconWhatICanDoCreatedAt = 938,
  OssIconWhatICanDoId = 939,
  OssIconWhatICanDoName = 940,
  OssIconWhatICanDoNodeLocale = 941,
  OssIconWhatICanDoSortKey = 942,
  OssIconWhatICanDoSpaceId = 943,
  OssIconWhatICanDoSubName = 944,
  OssIconWhatICanDoUpdatedAt = 945,
  OssId = 946,
  OssImageChildren = 947,
  OssImageChildrenChildren = 948,
  OssImageChildrenId = 949,
  OssImageContentfulId = 950,
  OssImageCreatedAt = 951,
  OssImageDescription = 952,
  OssImageFieldsLocalFile = 953,
  OssImageFileContentType = 954,
  OssImageFileFileName = 955,
  OssImageFileUrl = 956,
  OssImageFilename = 957,
  OssImageFilesize = 958,
  OssImageGatsbyImage = 959,
  OssImageGatsbyImageData = 960,
  OssImageHeight = 961,
  OssImageId = 962,
  OssImageInternalContent = 963,
  OssImageInternalContentDigest = 964,
  OssImageInternalDescription = 965,
  OssImageInternalFieldOwners = 966,
  OssImageInternalIgnoreType = 967,
  OssImageInternalMediaType = 968,
  OssImageInternalOwner = 969,
  OssImageInternalType = 970,
  OssImageLocalFileAbsolutePath = 971,
  OssImageLocalFileAccessTime = 972,
  OssImageLocalFileAtime = 973,
  OssImageLocalFileAtimeMs = 974,
  OssImageLocalFileBase = 975,
  OssImageLocalFileBirthTime = 976,
  OssImageLocalFileBirthtime = 977,
  OssImageLocalFileBirthtimeMs = 978,
  OssImageLocalFileBlksize = 979,
  OssImageLocalFileBlocks = 980,
  OssImageLocalFileChangeTime = 981,
  OssImageLocalFileChildren = 982,
  OssImageLocalFileChildrenImageSharp = 983,
  OssImageLocalFileChildrenLocale = 984,
  OssImageLocalFileCtime = 985,
  OssImageLocalFileCtimeMs = 986,
  OssImageLocalFileDev = 987,
  OssImageLocalFileDir = 988,
  OssImageLocalFileExt = 989,
  OssImageLocalFileExtension = 990,
  OssImageLocalFileGid = 991,
  OssImageLocalFileId = 992,
  OssImageLocalFileIno = 993,
  OssImageLocalFileMode = 994,
  OssImageLocalFileModifiedTime = 995,
  OssImageLocalFileMtime = 996,
  OssImageLocalFileMtimeMs = 997,
  OssImageLocalFileName = 998,
  OssImageLocalFileNlink = 999,
  OssImageLocalFilePrettySize = 1000,
  OssImageLocalFilePublicUrl = 1001,
  OssImageLocalFileRdev = 1002,
  OssImageLocalFileRelativeDirectory = 1003,
  OssImageLocalFileRelativePath = 1004,
  OssImageLocalFileRoot = 1005,
  OssImageLocalFileSize = 1006,
  OssImageLocalFileSourceInstanceName = 1007,
  OssImageLocalFileUid = 1008,
  OssImageLocalFileUrl = 1009,
  OssImageMimeType = 1010,
  OssImageNodeLocale = 1011,
  OssImageParentChildren = 1012,
  OssImageParentId = 1013,
  OssImagePlaceholderUrl = 1014,
  OssImagePublicUrl = 1015,
  OssImageResizeHeight = 1016,
  OssImageResizeSrc = 1017,
  OssImageResizeWidth = 1018,
  OssImageSpaceId = 1019,
  OssImageSysRevision = 1020,
  OssImageSysType = 1021,
  OssImageTitle = 1022,
  OssImageUpdatedAt = 1023,
  OssImageUrl = 1024,
  OssImageWidth = 1025,
  OssInternalContent = 1026,
  OssInternalContentDigest = 1027,
  OssInternalDescription = 1028,
  OssInternalFieldOwners = 1029,
  OssInternalIgnoreType = 1030,
  OssInternalMediaType = 1031,
  OssInternalOwner = 1032,
  OssInternalType = 1033,
  OssName = 1034,
  OssNodeLocale = 1035,
  OssParentChildren = 1036,
  OssParentChildrenChildren = 1037,
  OssParentChildrenId = 1038,
  OssParentId = 1039,
  OssParentInternalContent = 1040,
  OssParentInternalContentDigest = 1041,
  OssParentInternalDescription = 1042,
  OssParentInternalFieldOwners = 1043,
  OssParentInternalIgnoreType = 1044,
  OssParentInternalMediaType = 1045,
  OssParentInternalOwner = 1046,
  OssParentInternalType = 1047,
  OssParentParentChildren = 1048,
  OssParentParentId = 1049,
  OssSpaceId = 1050,
  OssStartDate = 1051,
  OssSubName = 1052,
  OssSysRevision = 1053,
  OssSysType = 1054,
  OssTags = 1055,
  OssTagsBlogPost = 1056,
  OssTagsBlogPostChildren = 1057,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1058,
  OssTagsBlogPostContentfulId = 1059,
  OssTagsBlogPostCreated = 1060,
  OssTagsBlogPostCreatedAt = 1061,
  OssTagsBlogPostExcerpt = 1062,
  OssTagsBlogPostId = 1063,
  OssTagsBlogPostNodeLocale = 1064,
  OssTagsBlogPostSlug = 1065,
  OssTagsBlogPostSpaceId = 1066,
  OssTagsBlogPostTags = 1067,
  OssTagsBlogPostTitle = 1068,
  OssTagsBlogPostUpdated = 1069,
  OssTagsBlogPostUpdatedAt = 1070,
  OssTagsChildren = 1071,
  OssTagsChildrenChildren = 1072,
  OssTagsChildrenId = 1073,
  OssTagsContentfulId = 1074,
  OssTagsCreatedAt = 1075,
  OssTagsId = 1076,
  OssTagsInternalContent = 1077,
  OssTagsInternalContentDigest = 1078,
  OssTagsInternalDescription = 1079,
  OssTagsInternalFieldOwners = 1080,
  OssTagsInternalIgnoreType = 1081,
  OssTagsInternalMediaType = 1082,
  OssTagsInternalOwner = 1083,
  OssTagsInternalType = 1084,
  OssTagsLevel = 1085,
  OssTagsName = 1086,
  OssTagsNodeLocale = 1087,
  OssTagsOss = 1088,
  OssTagsOssChildren = 1089,
  OssTagsOssChildrenContentfulOssDetailTextNode = 1090,
  OssTagsOssContentfulId = 1091,
  OssTagsOssCreatedAt = 1092,
  OssTagsOssHref = 1093,
  OssTagsOssId = 1094,
  OssTagsOssName = 1095,
  OssTagsOssNodeLocale = 1096,
  OssTagsOssSpaceId = 1097,
  OssTagsOssStartDate = 1098,
  OssTagsOssSubName = 1099,
  OssTagsOssTags = 1100,
  OssTagsOssUpdatedAt = 1101,
  OssTagsParentChildren = 1102,
  OssTagsParentId = 1103,
  OssTagsProject = 1104,
  OssTagsProjectChildren = 1105,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 1106,
  OssTagsProjectContentfulId = 1107,
  OssTagsProjectCreatedAt = 1108,
  OssTagsProjectEndDate = 1109,
  OssTagsProjectId = 1110,
  OssTagsProjectName = 1111,
  OssTagsProjectNodeLocale = 1112,
  OssTagsProjectSpaceId = 1113,
  OssTagsProjectStartDate = 1114,
  OssTagsProjectSubName = 1115,
  OssTagsProjectTags = 1116,
  OssTagsProjectUpdatedAt = 1117,
  OssTagsSkillMap = 1118,
  OssTagsSkillMapChildren = 1119,
  OssTagsSkillMapContentfulId = 1120,
  OssTagsSkillMapCreatedAt = 1121,
  OssTagsSkillMapExpanded = 1122,
  OssTagsSkillMapId = 1123,
  OssTagsSkillMapName = 1124,
  OssTagsSkillMapNodeLocale = 1125,
  OssTagsSkillMapSkills = 1126,
  OssTagsSkillMapSortKey = 1127,
  OssTagsSkillMapSpaceId = 1128,
  OssTagsSkillMapUpdatedAt = 1129,
  OssTagsSpaceId = 1130,
  OssTagsSysRevision = 1131,
  OssTagsSysType = 1132,
  OssTagsUpdatedAt = 1133,
  OssUpdatedAt = 1134,
  ParentChildren = 1135,
  ParentChildrenChildren = 1136,
  ParentChildrenChildrenChildren = 1137,
  ParentChildrenChildrenId = 1138,
  ParentChildrenId = 1139,
  ParentChildrenInternalContent = 1140,
  ParentChildrenInternalContentDigest = 1141,
  ParentChildrenInternalDescription = 1142,
  ParentChildrenInternalFieldOwners = 1143,
  ParentChildrenInternalIgnoreType = 1144,
  ParentChildrenInternalMediaType = 1145,
  ParentChildrenInternalOwner = 1146,
  ParentChildrenInternalType = 1147,
  ParentChildrenParentChildren = 1148,
  ParentChildrenParentId = 1149,
  ParentId = 1150,
  ParentInternalContent = 1151,
  ParentInternalContentDigest = 1152,
  ParentInternalDescription = 1153,
  ParentInternalFieldOwners = 1154,
  ParentInternalIgnoreType = 1155,
  ParentInternalMediaType = 1156,
  ParentInternalOwner = 1157,
  ParentInternalType = 1158,
  ParentParentChildren = 1159,
  ParentParentChildrenChildren = 1160,
  ParentParentChildrenId = 1161,
  ParentParentId = 1162,
  ParentParentInternalContent = 1163,
  ParentParentInternalContentDigest = 1164,
  ParentParentInternalDescription = 1165,
  ParentParentInternalFieldOwners = 1166,
  ParentParentInternalIgnoreType = 1167,
  ParentParentInternalMediaType = 1168,
  ParentParentInternalOwner = 1169,
  ParentParentInternalType = 1170,
  ParentParentParentChildren = 1171,
  ParentParentParentId = 1172,
  Project = 1173,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 1174,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 1175,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 1176,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1177,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 1178,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 1179,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 1180,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 1181,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 1182,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 1183,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 1184,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 1185,
  ProjectChildContentfulProjectDetailTextNodeChildren = 1186,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1187,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 1188,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 1189,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1190,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1191,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 1192,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 1193,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 1194,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1195,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 1196,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 1197,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1198,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1199,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 1200,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 1201,
  ProjectChildContentfulProjectDetailTextNodeDetail = 1202,
  ProjectChildContentfulProjectDetailTextNodeId = 1203,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 1204,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 1205,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 1206,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 1207,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 1208,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 1209,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 1210,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 1211,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 1212,
  ProjectChildContentfulProjectDetailTextNodeParentId = 1213,
  ProjectChildContentfulProjectDetailTextNodeSysType = 1214,
  ProjectChildren = 1215,
  ProjectChildrenContentfulProjectDetailTextNode = 1216,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 1217,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 1218,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 1219,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1220,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 1221,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 1222,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 1223,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 1224,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 1225,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 1226,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 1227,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 1228,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 1229,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1230,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 1231,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 1232,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1233,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1234,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 1235,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 1236,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 1237,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1238,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 1239,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 1240,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1241,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1242,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 1243,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 1244,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 1245,
  ProjectChildrenContentfulProjectDetailTextNodeId = 1246,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 1247,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 1248,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 1249,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 1250,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 1251,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 1252,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 1253,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 1254,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 1255,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 1256,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 1257,
  ProjectChildrenChildren = 1258,
  ProjectChildrenChildrenChildren = 1259,
  ProjectChildrenChildrenId = 1260,
  ProjectChildrenId = 1261,
  ProjectChildrenInternalContent = 1262,
  ProjectChildrenInternalContentDigest = 1263,
  ProjectChildrenInternalDescription = 1264,
  ProjectChildrenInternalFieldOwners = 1265,
  ProjectChildrenInternalIgnoreType = 1266,
  ProjectChildrenInternalMediaType = 1267,
  ProjectChildrenInternalOwner = 1268,
  ProjectChildrenInternalType = 1269,
  ProjectChildrenParentChildren = 1270,
  ProjectChildrenParentId = 1271,
  ProjectContentfulId = 1272,
  ProjectCreatedAt = 1273,
  ProjectDetailChildMdxBody = 1274,
  ProjectDetailChildMdxChildren = 1275,
  ProjectDetailChildMdxExcerpt = 1276,
  ProjectDetailChildMdxFileAbsolutePath = 1277,
  ProjectDetailChildMdxHeadings = 1278,
  ProjectDetailChildMdxHtml = 1279,
  ProjectDetailChildMdxId = 1280,
  ProjectDetailChildMdxMdxAst = 1281,
  ProjectDetailChildMdxRawBody = 1282,
  ProjectDetailChildMdxSlug = 1283,
  ProjectDetailChildMdxTableOfContents = 1284,
  ProjectDetailChildMdxTimeToRead = 1285,
  ProjectDetailChildren = 1286,
  ProjectDetailChildrenMdx = 1287,
  ProjectDetailChildrenMdxBody = 1288,
  ProjectDetailChildrenMdxChildren = 1289,
  ProjectDetailChildrenMdxExcerpt = 1290,
  ProjectDetailChildrenMdxFileAbsolutePath = 1291,
  ProjectDetailChildrenMdxHeadings = 1292,
  ProjectDetailChildrenMdxHtml = 1293,
  ProjectDetailChildrenMdxId = 1294,
  ProjectDetailChildrenMdxMdxAst = 1295,
  ProjectDetailChildrenMdxRawBody = 1296,
  ProjectDetailChildrenMdxSlug = 1297,
  ProjectDetailChildrenMdxTableOfContents = 1298,
  ProjectDetailChildrenMdxTimeToRead = 1299,
  ProjectDetailChildrenChildren = 1300,
  ProjectDetailChildrenId = 1301,
  ProjectDetailDetail = 1302,
  ProjectDetailId = 1303,
  ProjectDetailInternalContent = 1304,
  ProjectDetailInternalContentDigest = 1305,
  ProjectDetailInternalDescription = 1306,
  ProjectDetailInternalFieldOwners = 1307,
  ProjectDetailInternalIgnoreType = 1308,
  ProjectDetailInternalMediaType = 1309,
  ProjectDetailInternalOwner = 1310,
  ProjectDetailInternalType = 1311,
  ProjectDetailParentChildren = 1312,
  ProjectDetailParentId = 1313,
  ProjectDetailSysType = 1314,
  ProjectEndDate = 1315,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1316,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 1317,
  ProjectIconChildContentfulIconSvgTextNodeId = 1318,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1319,
  ProjectIconChildren = 1320,
  ProjectIconChildrenContentfulIconSvgTextNode = 1321,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1322,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1323,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1324,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1325,
  ProjectIconChildrenChildren = 1326,
  ProjectIconChildrenId = 1327,
  ProjectIconContact = 1328,
  ProjectIconContactChildren = 1329,
  ProjectIconContactContentfulId = 1330,
  ProjectIconContactCreatedAt = 1331,
  ProjectIconContactHref = 1332,
  ProjectIconContactId = 1333,
  ProjectIconContactName = 1334,
  ProjectIconContactNodeLocale = 1335,
  ProjectIconContactSortKey = 1336,
  ProjectIconContactSpaceId = 1337,
  ProjectIconContactSubName = 1338,
  ProjectIconContactUpdatedAt = 1339,
  ProjectIconContentfulId = 1340,
  ProjectIconCreatedAt = 1341,
  ProjectIconHistory = 1342,
  ProjectIconHistoryChildren = 1343,
  ProjectIconHistoryContentfulId = 1344,
  ProjectIconHistoryCreatedAt = 1345,
  ProjectIconHistoryDate = 1346,
  ProjectIconHistoryId = 1347,
  ProjectIconHistoryName = 1348,
  ProjectIconHistoryNodeLocale = 1349,
  ProjectIconHistorySpaceId = 1350,
  ProjectIconHistorySubName = 1351,
  ProjectIconHistoryUpdatedAt = 1352,
  ProjectIconId = 1353,
  ProjectIconInternalContent = 1354,
  ProjectIconInternalContentDigest = 1355,
  ProjectIconInternalDescription = 1356,
  ProjectIconInternalFieldOwners = 1357,
  ProjectIconInternalIgnoreType = 1358,
  ProjectIconInternalMediaType = 1359,
  ProjectIconInternalOwner = 1360,
  ProjectIconInternalType = 1361,
  ProjectIconName = 1362,
  ProjectIconNodeLocale = 1363,
  ProjectIconOss = 1364,
  ProjectIconOssChildren = 1365,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1366,
  ProjectIconOssContentfulId = 1367,
  ProjectIconOssCreatedAt = 1368,
  ProjectIconOssHref = 1369,
  ProjectIconOssId = 1370,
  ProjectIconOssName = 1371,
  ProjectIconOssNodeLocale = 1372,
  ProjectIconOssSpaceId = 1373,
  ProjectIconOssStartDate = 1374,
  ProjectIconOssSubName = 1375,
  ProjectIconOssTags = 1376,
  ProjectIconOssUpdatedAt = 1377,
  ProjectIconParentChildren = 1378,
  ProjectIconParentId = 1379,
  ProjectIconProject = 1380,
  ProjectIconProjectChildren = 1381,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1382,
  ProjectIconProjectContentfulId = 1383,
  ProjectIconProjectCreatedAt = 1384,
  ProjectIconProjectEndDate = 1385,
  ProjectIconProjectId = 1386,
  ProjectIconProjectName = 1387,
  ProjectIconProjectNodeLocale = 1388,
  ProjectIconProjectSpaceId = 1389,
  ProjectIconProjectStartDate = 1390,
  ProjectIconProjectSubName = 1391,
  ProjectIconProjectTags = 1392,
  ProjectIconProjectUpdatedAt = 1393,
  ProjectIconSpaceId = 1394,
  ProjectIconSvgChildren = 1395,
  ProjectIconSvgChildrenMdx = 1396,
  ProjectIconSvgId = 1397,
  ProjectIconSvgSvg = 1398,
  ProjectIconSysRevision = 1399,
  ProjectIconSysType = 1400,
  ProjectIconUpdatedAt = 1401,
  ProjectIconWhatICanDo = 1402,
  ProjectIconWhatICanDoChildren = 1403,
  ProjectIconWhatICanDoContentfulId = 1404,
  ProjectIconWhatICanDoCreatedAt = 1405,
  ProjectIconWhatICanDoId = 1406,
  ProjectIconWhatICanDoName = 1407,
  ProjectIconWhatICanDoNodeLocale = 1408,
  ProjectIconWhatICanDoSortKey = 1409,
  ProjectIconWhatICanDoSpaceId = 1410,
  ProjectIconWhatICanDoSubName = 1411,
  ProjectIconWhatICanDoUpdatedAt = 1412,
  ProjectId = 1413,
  ProjectInternalContent = 1414,
  ProjectInternalContentDigest = 1415,
  ProjectInternalDescription = 1416,
  ProjectInternalFieldOwners = 1417,
  ProjectInternalIgnoreType = 1418,
  ProjectInternalMediaType = 1419,
  ProjectInternalOwner = 1420,
  ProjectInternalType = 1421,
  ProjectName = 1422,
  ProjectNodeLocale = 1423,
  ProjectParentChildren = 1424,
  ProjectParentChildrenChildren = 1425,
  ProjectParentChildrenId = 1426,
  ProjectParentId = 1427,
  ProjectParentInternalContent = 1428,
  ProjectParentInternalContentDigest = 1429,
  ProjectParentInternalDescription = 1430,
  ProjectParentInternalFieldOwners = 1431,
  ProjectParentInternalIgnoreType = 1432,
  ProjectParentInternalMediaType = 1433,
  ProjectParentInternalOwner = 1434,
  ProjectParentInternalType = 1435,
  ProjectParentParentChildren = 1436,
  ProjectParentParentId = 1437,
  ProjectSpaceId = 1438,
  ProjectStartDate = 1439,
  ProjectSubName = 1440,
  ProjectSysRevision = 1441,
  ProjectSysType = 1442,
  ProjectTags = 1443,
  ProjectTagsBlogPost = 1444,
  ProjectTagsBlogPostChildren = 1445,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1446,
  ProjectTagsBlogPostContentfulId = 1447,
  ProjectTagsBlogPostCreated = 1448,
  ProjectTagsBlogPostCreatedAt = 1449,
  ProjectTagsBlogPostExcerpt = 1450,
  ProjectTagsBlogPostId = 1451,
  ProjectTagsBlogPostNodeLocale = 1452,
  ProjectTagsBlogPostSlug = 1453,
  ProjectTagsBlogPostSpaceId = 1454,
  ProjectTagsBlogPostTags = 1455,
  ProjectTagsBlogPostTitle = 1456,
  ProjectTagsBlogPostUpdated = 1457,
  ProjectTagsBlogPostUpdatedAt = 1458,
  ProjectTagsChildren = 1459,
  ProjectTagsChildrenChildren = 1460,
  ProjectTagsChildrenId = 1461,
  ProjectTagsContentfulId = 1462,
  ProjectTagsCreatedAt = 1463,
  ProjectTagsId = 1464,
  ProjectTagsInternalContent = 1465,
  ProjectTagsInternalContentDigest = 1466,
  ProjectTagsInternalDescription = 1467,
  ProjectTagsInternalFieldOwners = 1468,
  ProjectTagsInternalIgnoreType = 1469,
  ProjectTagsInternalMediaType = 1470,
  ProjectTagsInternalOwner = 1471,
  ProjectTagsInternalType = 1472,
  ProjectTagsLevel = 1473,
  ProjectTagsName = 1474,
  ProjectTagsNodeLocale = 1475,
  ProjectTagsOss = 1476,
  ProjectTagsOssChildren = 1477,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1478,
  ProjectTagsOssContentfulId = 1479,
  ProjectTagsOssCreatedAt = 1480,
  ProjectTagsOssHref = 1481,
  ProjectTagsOssId = 1482,
  ProjectTagsOssName = 1483,
  ProjectTagsOssNodeLocale = 1484,
  ProjectTagsOssSpaceId = 1485,
  ProjectTagsOssStartDate = 1486,
  ProjectTagsOssSubName = 1487,
  ProjectTagsOssTags = 1488,
  ProjectTagsOssUpdatedAt = 1489,
  ProjectTagsParentChildren = 1490,
  ProjectTagsParentId = 1491,
  ProjectTagsProject = 1492,
  ProjectTagsProjectChildren = 1493,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1494,
  ProjectTagsProjectContentfulId = 1495,
  ProjectTagsProjectCreatedAt = 1496,
  ProjectTagsProjectEndDate = 1497,
  ProjectTagsProjectId = 1498,
  ProjectTagsProjectName = 1499,
  ProjectTagsProjectNodeLocale = 1500,
  ProjectTagsProjectSpaceId = 1501,
  ProjectTagsProjectStartDate = 1502,
  ProjectTagsProjectSubName = 1503,
  ProjectTagsProjectTags = 1504,
  ProjectTagsProjectUpdatedAt = 1505,
  ProjectTagsSkillMap = 1506,
  ProjectTagsSkillMapChildren = 1507,
  ProjectTagsSkillMapContentfulId = 1508,
  ProjectTagsSkillMapCreatedAt = 1509,
  ProjectTagsSkillMapExpanded = 1510,
  ProjectTagsSkillMapId = 1511,
  ProjectTagsSkillMapName = 1512,
  ProjectTagsSkillMapNodeLocale = 1513,
  ProjectTagsSkillMapSkills = 1514,
  ProjectTagsSkillMapSortKey = 1515,
  ProjectTagsSkillMapSpaceId = 1516,
  ProjectTagsSkillMapUpdatedAt = 1517,
  ProjectTagsSpaceId = 1518,
  ProjectTagsSysRevision = 1519,
  ProjectTagsSysType = 1520,
  ProjectTagsUpdatedAt = 1521,
  ProjectUpdatedAt = 1522,
  SpaceId = 1523,
  SvgChildMdxBody = 1524,
  SvgChildMdxChildren = 1525,
  SvgChildMdxChildrenChildren = 1526,
  SvgChildMdxChildrenId = 1527,
  SvgChildMdxExcerpt = 1528,
  SvgChildMdxFileAbsolutePath = 1529,
  SvgChildMdxFrontmatterTitle = 1530,
  SvgChildMdxHeadings = 1531,
  SvgChildMdxHeadingsDepth = 1532,
  SvgChildMdxHeadingsValue = 1533,
  SvgChildMdxHtml = 1534,
  SvgChildMdxId = 1535,
  SvgChildMdxInternalContent = 1536,
  SvgChildMdxInternalContentDigest = 1537,
  SvgChildMdxInternalDescription = 1538,
  SvgChildMdxInternalFieldOwners = 1539,
  SvgChildMdxInternalIgnoreType = 1540,
  SvgChildMdxInternalMediaType = 1541,
  SvgChildMdxInternalOwner = 1542,
  SvgChildMdxInternalType = 1543,
  SvgChildMdxMdxAst = 1544,
  SvgChildMdxParentChildren = 1545,
  SvgChildMdxParentId = 1546,
  SvgChildMdxRawBody = 1547,
  SvgChildMdxSlug = 1548,
  SvgChildMdxTableOfContents = 1549,
  SvgChildMdxTimeToRead = 1550,
  SvgChildMdxWordCountParagraphs = 1551,
  SvgChildMdxWordCountSentences = 1552,
  SvgChildMdxWordCountWords = 1553,
  SvgChildren = 1554,
  SvgChildrenMdx = 1555,
  SvgChildrenMdxBody = 1556,
  SvgChildrenMdxChildren = 1557,
  SvgChildrenMdxChildrenChildren = 1558,
  SvgChildrenMdxChildrenId = 1559,
  SvgChildrenMdxExcerpt = 1560,
  SvgChildrenMdxFileAbsolutePath = 1561,
  SvgChildrenMdxFrontmatterTitle = 1562,
  SvgChildrenMdxHeadings = 1563,
  SvgChildrenMdxHeadingsDepth = 1564,
  SvgChildrenMdxHeadingsValue = 1565,
  SvgChildrenMdxHtml = 1566,
  SvgChildrenMdxId = 1567,
  SvgChildrenMdxInternalContent = 1568,
  SvgChildrenMdxInternalContentDigest = 1569,
  SvgChildrenMdxInternalDescription = 1570,
  SvgChildrenMdxInternalFieldOwners = 1571,
  SvgChildrenMdxInternalIgnoreType = 1572,
  SvgChildrenMdxInternalMediaType = 1573,
  SvgChildrenMdxInternalOwner = 1574,
  SvgChildrenMdxInternalType = 1575,
  SvgChildrenMdxMdxAst = 1576,
  SvgChildrenMdxParentChildren = 1577,
  SvgChildrenMdxParentId = 1578,
  SvgChildrenMdxRawBody = 1579,
  SvgChildrenMdxSlug = 1580,
  SvgChildrenMdxTableOfContents = 1581,
  SvgChildrenMdxTimeToRead = 1582,
  SvgChildrenMdxWordCountParagraphs = 1583,
  SvgChildrenMdxWordCountSentences = 1584,
  SvgChildrenMdxWordCountWords = 1585,
  SvgChildrenChildren = 1586,
  SvgChildrenChildrenChildren = 1587,
  SvgChildrenChildrenId = 1588,
  SvgChildrenId = 1589,
  SvgChildrenInternalContent = 1590,
  SvgChildrenInternalContentDigest = 1591,
  SvgChildrenInternalDescription = 1592,
  SvgChildrenInternalFieldOwners = 1593,
  SvgChildrenInternalIgnoreType = 1594,
  SvgChildrenInternalMediaType = 1595,
  SvgChildrenInternalOwner = 1596,
  SvgChildrenInternalType = 1597,
  SvgChildrenParentChildren = 1598,
  SvgChildrenParentId = 1599,
  SvgId = 1600,
  SvgInternalContent = 1601,
  SvgInternalContentDigest = 1602,
  SvgInternalDescription = 1603,
  SvgInternalFieldOwners = 1604,
  SvgInternalIgnoreType = 1605,
  SvgInternalMediaType = 1606,
  SvgInternalOwner = 1607,
  SvgInternalType = 1608,
  SvgParentChildren = 1609,
  SvgParentChildrenChildren = 1610,
  SvgParentChildrenId = 1611,
  SvgParentId = 1612,
  SvgParentInternalContent = 1613,
  SvgParentInternalContentDigest = 1614,
  SvgParentInternalDescription = 1615,
  SvgParentInternalFieldOwners = 1616,
  SvgParentInternalIgnoreType = 1617,
  SvgParentInternalMediaType = 1618,
  SvgParentInternalOwner = 1619,
  SvgParentInternalType = 1620,
  SvgParentParentChildren = 1621,
  SvgParentParentId = 1622,
  SvgSvg = 1623,
  SvgSysType = 1624,
  SysContentTypeSysId = 1625,
  SysContentTypeSysLinkType = 1626,
  SysContentTypeSysType = 1627,
  SysRevision = 1628,
  SysType = 1629,
  UpdatedAt = 1630,
  WhatICanDo = 1631,
  WhatICanDoChildren = 1632,
  WhatICanDoChildrenChildren = 1633,
  WhatICanDoChildrenChildrenChildren = 1634,
  WhatICanDoChildrenChildrenId = 1635,
  WhatICanDoChildrenId = 1636,
  WhatICanDoChildrenInternalContent = 1637,
  WhatICanDoChildrenInternalContentDigest = 1638,
  WhatICanDoChildrenInternalDescription = 1639,
  WhatICanDoChildrenInternalFieldOwners = 1640,
  WhatICanDoChildrenInternalIgnoreType = 1641,
  WhatICanDoChildrenInternalMediaType = 1642,
  WhatICanDoChildrenInternalOwner = 1643,
  WhatICanDoChildrenInternalType = 1644,
  WhatICanDoChildrenParentChildren = 1645,
  WhatICanDoChildrenParentId = 1646,
  WhatICanDoContentfulId = 1647,
  WhatICanDoCreatedAt = 1648,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildren = 1649,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildrenMdx = 1650,
  WhatICanDoIconChildContentfulIconSvgTextNodeId = 1651,
  WhatICanDoIconChildContentfulIconSvgTextNodeSvg = 1652,
  WhatICanDoIconChildren = 1653,
  WhatICanDoIconChildrenContentfulIconSvgTextNode = 1654,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildren = 1655,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1656,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeId = 1657,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeSvg = 1658,
  WhatICanDoIconChildrenChildren = 1659,
  WhatICanDoIconChildrenId = 1660,
  WhatICanDoIconContact = 1661,
  WhatICanDoIconContactChildren = 1662,
  WhatICanDoIconContactContentfulId = 1663,
  WhatICanDoIconContactCreatedAt = 1664,
  WhatICanDoIconContactHref = 1665,
  WhatICanDoIconContactId = 1666,
  WhatICanDoIconContactName = 1667,
  WhatICanDoIconContactNodeLocale = 1668,
  WhatICanDoIconContactSortKey = 1669,
  WhatICanDoIconContactSpaceId = 1670,
  WhatICanDoIconContactSubName = 1671,
  WhatICanDoIconContactUpdatedAt = 1672,
  WhatICanDoIconContentfulId = 1673,
  WhatICanDoIconCreatedAt = 1674,
  WhatICanDoIconHistory = 1675,
  WhatICanDoIconHistoryChildren = 1676,
  WhatICanDoIconHistoryContentfulId = 1677,
  WhatICanDoIconHistoryCreatedAt = 1678,
  WhatICanDoIconHistoryDate = 1679,
  WhatICanDoIconHistoryId = 1680,
  WhatICanDoIconHistoryName = 1681,
  WhatICanDoIconHistoryNodeLocale = 1682,
  WhatICanDoIconHistorySpaceId = 1683,
  WhatICanDoIconHistorySubName = 1684,
  WhatICanDoIconHistoryUpdatedAt = 1685,
  WhatICanDoIconId = 1686,
  WhatICanDoIconInternalContent = 1687,
  WhatICanDoIconInternalContentDigest = 1688,
  WhatICanDoIconInternalDescription = 1689,
  WhatICanDoIconInternalFieldOwners = 1690,
  WhatICanDoIconInternalIgnoreType = 1691,
  WhatICanDoIconInternalMediaType = 1692,
  WhatICanDoIconInternalOwner = 1693,
  WhatICanDoIconInternalType = 1694,
  WhatICanDoIconName = 1695,
  WhatICanDoIconNodeLocale = 1696,
  WhatICanDoIconOss = 1697,
  WhatICanDoIconOssChildren = 1698,
  WhatICanDoIconOssChildrenContentfulOssDetailTextNode = 1699,
  WhatICanDoIconOssContentfulId = 1700,
  WhatICanDoIconOssCreatedAt = 1701,
  WhatICanDoIconOssHref = 1702,
  WhatICanDoIconOssId = 1703,
  WhatICanDoIconOssName = 1704,
  WhatICanDoIconOssNodeLocale = 1705,
  WhatICanDoIconOssSpaceId = 1706,
  WhatICanDoIconOssStartDate = 1707,
  WhatICanDoIconOssSubName = 1708,
  WhatICanDoIconOssTags = 1709,
  WhatICanDoIconOssUpdatedAt = 1710,
  WhatICanDoIconParentChildren = 1711,
  WhatICanDoIconParentId = 1712,
  WhatICanDoIconProject = 1713,
  WhatICanDoIconProjectChildren = 1714,
  WhatICanDoIconProjectChildrenContentfulProjectDetailTextNode = 1715,
  WhatICanDoIconProjectContentfulId = 1716,
  WhatICanDoIconProjectCreatedAt = 1717,
  WhatICanDoIconProjectEndDate = 1718,
  WhatICanDoIconProjectId = 1719,
  WhatICanDoIconProjectName = 1720,
  WhatICanDoIconProjectNodeLocale = 1721,
  WhatICanDoIconProjectSpaceId = 1722,
  WhatICanDoIconProjectStartDate = 1723,
  WhatICanDoIconProjectSubName = 1724,
  WhatICanDoIconProjectTags = 1725,
  WhatICanDoIconProjectUpdatedAt = 1726,
  WhatICanDoIconSpaceId = 1727,
  WhatICanDoIconSvgChildren = 1728,
  WhatICanDoIconSvgChildrenMdx = 1729,
  WhatICanDoIconSvgId = 1730,
  WhatICanDoIconSvgSvg = 1731,
  WhatICanDoIconSysRevision = 1732,
  WhatICanDoIconSysType = 1733,
  WhatICanDoIconUpdatedAt = 1734,
  WhatICanDoIconWhatICanDo = 1735,
  WhatICanDoIconWhatICanDoChildren = 1736,
  WhatICanDoIconWhatICanDoContentfulId = 1737,
  WhatICanDoIconWhatICanDoCreatedAt = 1738,
  WhatICanDoIconWhatICanDoId = 1739,
  WhatICanDoIconWhatICanDoName = 1740,
  WhatICanDoIconWhatICanDoNodeLocale = 1741,
  WhatICanDoIconWhatICanDoSortKey = 1742,
  WhatICanDoIconWhatICanDoSpaceId = 1743,
  WhatICanDoIconWhatICanDoSubName = 1744,
  WhatICanDoIconWhatICanDoUpdatedAt = 1745,
  WhatICanDoId = 1746,
  WhatICanDoInternalContent = 1747,
  WhatICanDoInternalContentDigest = 1748,
  WhatICanDoInternalDescription = 1749,
  WhatICanDoInternalFieldOwners = 1750,
  WhatICanDoInternalIgnoreType = 1751,
  WhatICanDoInternalMediaType = 1752,
  WhatICanDoInternalOwner = 1753,
  WhatICanDoInternalType = 1754,
  WhatICanDoName = 1755,
  WhatICanDoNodeLocale = 1756,
  WhatICanDoParentChildren = 1757,
  WhatICanDoParentChildrenChildren = 1758,
  WhatICanDoParentChildrenId = 1759,
  WhatICanDoParentId = 1760,
  WhatICanDoParentInternalContent = 1761,
  WhatICanDoParentInternalContentDigest = 1762,
  WhatICanDoParentInternalDescription = 1763,
  WhatICanDoParentInternalFieldOwners = 1764,
  WhatICanDoParentInternalIgnoreType = 1765,
  WhatICanDoParentInternalMediaType = 1766,
  WhatICanDoParentInternalOwner = 1767,
  WhatICanDoParentInternalType = 1768,
  WhatICanDoParentParentChildren = 1769,
  WhatICanDoParentParentId = 1770,
  WhatICanDoSortKey = 1771,
  WhatICanDoSpaceId = 1772,
  WhatICanDoSubName = 1773,
  WhatICanDoSysRevision = 1774,
  WhatICanDoSysType = 1775,
  WhatICanDoUpdatedAt = 1776
}

export type ContentfulIconFilterInput = {
  childContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeFilterListInput>;
  contact: InputMaybe<ContentfulContactFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  history: InputMaybe<ContentfulHistoryFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  oss: InputMaybe<ContentfulOssFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  project: InputMaybe<ContentfulProjectFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  svg: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  sys: InputMaybe<ContentfulIconSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  what_i_can_do: InputMaybe<ContentfulWhatICanDoFilterListInput>;
};

export type ContentfulIconGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulIconEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulIconGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulIcon>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulIconGroupConnectionDistinctArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconGroupConnectionGroupArgs = {
  field: ContentfulIconFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulIconFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulIconSys = {
  contentType: Maybe<ContentfulIconSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulIconSysContentType = {
  sys: Maybe<ContentfulIconSysContentTypeSys>;
};

export type ContentfulIconSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulIconSysContentTypeSysFilterInput>;
};

export type ContentfulIconSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulIconSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulIconSysFilterInput = {
  contentType: InputMaybe<ContentfulIconSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export enum ContentfulImageCropFocus {
  Bottom = 0,
  BottomLeft = 1,
  BottomRight = 2,
  Center = 3,
  Face = 4,
  Faces = 5,
  Left = 6,
  Right = 7,
  Top = 8,
  TopLeft = 9,
  TopRight = 10
}

export type ContentfulOss = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulOssDetailTextNode or null if there are no children of given type on this node */
  childContentfulOssDetailTextNode: Maybe<ContentfulOssDetailTextNode>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type contentfulOssDetailTextNode */
  childrenContentfulOssDetailTextNode: Maybe<Array<Maybe<ContentfulOssDetailTextNode>>>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  detail: Maybe<ContentfulOssDetailTextNode>;
  href: Maybe<Scalars['String']>;
  icon: Maybe<ContentfulIcon>;
  id: Scalars['ID'];
  image: Maybe<ContentfulAsset>;
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  spaceId: Maybe<Scalars['String']>;
  startDate: Maybe<Scalars['Date']>;
  subName: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulOssSys>;
  tags: Maybe<Array<Maybe<ContentfulTag>>>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulOssCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulOssStartDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulOssUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulOssConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulOssEdge>;
  group: Array<ContentfulOssGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulOss>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulOssConnectionDistinctArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssConnectionGroupArgs = {
  field: ContentfulOssFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulOss>;
  node: ContentfulOss;
  previous: Maybe<ContentfulOss>;
};

export enum ContentfulOssFieldsEnum {
  ChildContentfulOssDetailTextNodeChildMdxBody = 0,
  ChildContentfulOssDetailTextNodeChildMdxChildren = 1,
  ChildContentfulOssDetailTextNodeChildMdxChildrenChildren = 2,
  ChildContentfulOssDetailTextNodeChildMdxChildrenId = 3,
  ChildContentfulOssDetailTextNodeChildMdxExcerpt = 4,
  ChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 5,
  ChildContentfulOssDetailTextNodeChildMdxFrontmatterTitle = 6,
  ChildContentfulOssDetailTextNodeChildMdxHeadings = 7,
  ChildContentfulOssDetailTextNodeChildMdxHeadingsDepth = 8,
  ChildContentfulOssDetailTextNodeChildMdxHeadingsValue = 9,
  ChildContentfulOssDetailTextNodeChildMdxHtml = 10,
  ChildContentfulOssDetailTextNodeChildMdxId = 11,
  ChildContentfulOssDetailTextNodeChildMdxInternalContent = 12,
  ChildContentfulOssDetailTextNodeChildMdxInternalContentDigest = 13,
  ChildContentfulOssDetailTextNodeChildMdxInternalDescription = 14,
  ChildContentfulOssDetailTextNodeChildMdxInternalFieldOwners = 15,
  ChildContentfulOssDetailTextNodeChildMdxInternalIgnoreType = 16,
  ChildContentfulOssDetailTextNodeChildMdxInternalMediaType = 17,
  ChildContentfulOssDetailTextNodeChildMdxInternalOwner = 18,
  ChildContentfulOssDetailTextNodeChildMdxInternalType = 19,
  ChildContentfulOssDetailTextNodeChildMdxMdxAst = 20,
  ChildContentfulOssDetailTextNodeChildMdxParentChildren = 21,
  ChildContentfulOssDetailTextNodeChildMdxParentId = 22,
  ChildContentfulOssDetailTextNodeChildMdxRawBody = 23,
  ChildContentfulOssDetailTextNodeChildMdxSlug = 24,
  ChildContentfulOssDetailTextNodeChildMdxTableOfContents = 25,
  ChildContentfulOssDetailTextNodeChildMdxTimeToRead = 26,
  ChildContentfulOssDetailTextNodeChildMdxWordCountParagraphs = 27,
  ChildContentfulOssDetailTextNodeChildMdxWordCountSentences = 28,
  ChildContentfulOssDetailTextNodeChildMdxWordCountWords = 29,
  ChildContentfulOssDetailTextNodeChildren = 30,
  ChildContentfulOssDetailTextNodeChildrenMdx = 31,
  ChildContentfulOssDetailTextNodeChildrenMdxBody = 32,
  ChildContentfulOssDetailTextNodeChildrenMdxChildren = 33,
  ChildContentfulOssDetailTextNodeChildrenMdxChildrenChildren = 34,
  ChildContentfulOssDetailTextNodeChildrenMdxChildrenId = 35,
  ChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 36,
  ChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 37,
  ChildContentfulOssDetailTextNodeChildrenMdxFrontmatterTitle = 38,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadings = 39,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadingsDepth = 40,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadingsValue = 41,
  ChildContentfulOssDetailTextNodeChildrenMdxHtml = 42,
  ChildContentfulOssDetailTextNodeChildrenMdxId = 43,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalContent = 44,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalContentDigest = 45,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalDescription = 46,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalFieldOwners = 47,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalIgnoreType = 48,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalMediaType = 49,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalOwner = 50,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalType = 51,
  ChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 52,
  ChildContentfulOssDetailTextNodeChildrenMdxParentChildren = 53,
  ChildContentfulOssDetailTextNodeChildrenMdxParentId = 54,
  ChildContentfulOssDetailTextNodeChildrenMdxRawBody = 55,
  ChildContentfulOssDetailTextNodeChildrenMdxSlug = 56,
  ChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 57,
  ChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 58,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountParagraphs = 59,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountSentences = 60,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountWords = 61,
  ChildContentfulOssDetailTextNodeChildrenChildren = 62,
  ChildContentfulOssDetailTextNodeChildrenChildrenChildren = 63,
  ChildContentfulOssDetailTextNodeChildrenChildrenId = 64,
  ChildContentfulOssDetailTextNodeChildrenId = 65,
  ChildContentfulOssDetailTextNodeChildrenInternalContent = 66,
  ChildContentfulOssDetailTextNodeChildrenInternalContentDigest = 67,
  ChildContentfulOssDetailTextNodeChildrenInternalDescription = 68,
  ChildContentfulOssDetailTextNodeChildrenInternalFieldOwners = 69,
  ChildContentfulOssDetailTextNodeChildrenInternalIgnoreType = 70,
  ChildContentfulOssDetailTextNodeChildrenInternalMediaType = 71,
  ChildContentfulOssDetailTextNodeChildrenInternalOwner = 72,
  ChildContentfulOssDetailTextNodeChildrenInternalType = 73,
  ChildContentfulOssDetailTextNodeChildrenParentChildren = 74,
  ChildContentfulOssDetailTextNodeChildrenParentId = 75,
  ChildContentfulOssDetailTextNodeDetail = 76,
  ChildContentfulOssDetailTextNodeId = 77,
  ChildContentfulOssDetailTextNodeInternalContent = 78,
  ChildContentfulOssDetailTextNodeInternalContentDigest = 79,
  ChildContentfulOssDetailTextNodeInternalDescription = 80,
  ChildContentfulOssDetailTextNodeInternalFieldOwners = 81,
  ChildContentfulOssDetailTextNodeInternalIgnoreType = 82,
  ChildContentfulOssDetailTextNodeInternalMediaType = 83,
  ChildContentfulOssDetailTextNodeInternalOwner = 84,
  ChildContentfulOssDetailTextNodeInternalType = 85,
  ChildContentfulOssDetailTextNodeParentChildren = 86,
  ChildContentfulOssDetailTextNodeParentChildrenChildren = 87,
  ChildContentfulOssDetailTextNodeParentChildrenId = 88,
  ChildContentfulOssDetailTextNodeParentId = 89,
  ChildContentfulOssDetailTextNodeParentInternalContent = 90,
  ChildContentfulOssDetailTextNodeParentInternalContentDigest = 91,
  ChildContentfulOssDetailTextNodeParentInternalDescription = 92,
  ChildContentfulOssDetailTextNodeParentInternalFieldOwners = 93,
  ChildContentfulOssDetailTextNodeParentInternalIgnoreType = 94,
  ChildContentfulOssDetailTextNodeParentInternalMediaType = 95,
  ChildContentfulOssDetailTextNodeParentInternalOwner = 96,
  ChildContentfulOssDetailTextNodeParentInternalType = 97,
  ChildContentfulOssDetailTextNodeParentParentChildren = 98,
  ChildContentfulOssDetailTextNodeParentParentId = 99,
  ChildContentfulOssDetailTextNodeSysType = 100,
  Children = 101,
  ChildrenContentfulOssDetailTextNode = 102,
  ChildrenContentfulOssDetailTextNodeChildMdxBody = 103,
  ChildrenContentfulOssDetailTextNodeChildMdxChildren = 104,
  ChildrenContentfulOssDetailTextNodeChildMdxChildrenChildren = 105,
  ChildrenContentfulOssDetailTextNodeChildMdxChildrenId = 106,
  ChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 107,
  ChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 108,
  ChildrenContentfulOssDetailTextNodeChildMdxFrontmatterTitle = 109,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadings = 110,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadingsDepth = 111,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadingsValue = 112,
  ChildrenContentfulOssDetailTextNodeChildMdxHtml = 113,
  ChildrenContentfulOssDetailTextNodeChildMdxId = 114,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalContent = 115,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalContentDigest = 116,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalDescription = 117,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalFieldOwners = 118,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalIgnoreType = 119,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalMediaType = 120,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalOwner = 121,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalType = 122,
  ChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 123,
  ChildrenContentfulOssDetailTextNodeChildMdxParentChildren = 124,
  ChildrenContentfulOssDetailTextNodeChildMdxParentId = 125,
  ChildrenContentfulOssDetailTextNodeChildMdxRawBody = 126,
  ChildrenContentfulOssDetailTextNodeChildMdxSlug = 127,
  ChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 128,
  ChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 129,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountParagraphs = 130,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountSentences = 131,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountWords = 132,
  ChildrenContentfulOssDetailTextNodeChildren = 133,
  ChildrenContentfulOssDetailTextNodeChildrenMdx = 134,
  ChildrenContentfulOssDetailTextNodeChildrenMdxBody = 135,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 136,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildrenChildren = 137,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildrenId = 138,
  ChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 139,
  ChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 140,
  ChildrenContentfulOssDetailTextNodeChildrenMdxFrontmatterTitle = 141,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 142,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadingsDepth = 143,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadingsValue = 144,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 145,
  ChildrenContentfulOssDetailTextNodeChildrenMdxId = 146,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalContent = 147,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalContentDigest = 148,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalDescription = 149,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalFieldOwners = 150,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalIgnoreType = 151,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalMediaType = 152,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalOwner = 153,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalType = 154,
  ChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 155,
  ChildrenContentfulOssDetailTextNodeChildrenMdxParentChildren = 156,
  ChildrenContentfulOssDetailTextNodeChildrenMdxParentId = 157,
  ChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 158,
  ChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 159,
  ChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 160,
  ChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 161,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountParagraphs = 162,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountSentences = 163,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountWords = 164,
  ChildrenContentfulOssDetailTextNodeChildrenChildren = 165,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenChildren = 166,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenId = 167,
  ChildrenContentfulOssDetailTextNodeChildrenId = 168,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContent = 169,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContentDigest = 170,
  ChildrenContentfulOssDetailTextNodeChildrenInternalDescription = 171,
  ChildrenContentfulOssDetailTextNodeChildrenInternalFieldOwners = 172,
  ChildrenContentfulOssDetailTextNodeChildrenInternalIgnoreType = 173,
  ChildrenContentfulOssDetailTextNodeChildrenInternalMediaType = 174,
  ChildrenContentfulOssDetailTextNodeChildrenInternalOwner = 175,
  ChildrenContentfulOssDetailTextNodeChildrenInternalType = 176,
  ChildrenContentfulOssDetailTextNodeChildrenParentChildren = 177,
  ChildrenContentfulOssDetailTextNodeChildrenParentId = 178,
  ChildrenContentfulOssDetailTextNodeDetail = 179,
  ChildrenContentfulOssDetailTextNodeId = 180,
  ChildrenContentfulOssDetailTextNodeInternalContent = 181,
  ChildrenContentfulOssDetailTextNodeInternalContentDigest = 182,
  ChildrenContentfulOssDetailTextNodeInternalDescription = 183,
  ChildrenContentfulOssDetailTextNodeInternalFieldOwners = 184,
  ChildrenContentfulOssDetailTextNodeInternalIgnoreType = 185,
  ChildrenContentfulOssDetailTextNodeInternalMediaType = 186,
  ChildrenContentfulOssDetailTextNodeInternalOwner = 187,
  ChildrenContentfulOssDetailTextNodeInternalType = 188,
  ChildrenContentfulOssDetailTextNodeParentChildren = 189,
  ChildrenContentfulOssDetailTextNodeParentChildrenChildren = 190,
  ChildrenContentfulOssDetailTextNodeParentChildrenId = 191,
  ChildrenContentfulOssDetailTextNodeParentId = 192,
  ChildrenContentfulOssDetailTextNodeParentInternalContent = 193,
  ChildrenContentfulOssDetailTextNodeParentInternalContentDigest = 194,
  ChildrenContentfulOssDetailTextNodeParentInternalDescription = 195,
  ChildrenContentfulOssDetailTextNodeParentInternalFieldOwners = 196,
  ChildrenContentfulOssDetailTextNodeParentInternalIgnoreType = 197,
  ChildrenContentfulOssDetailTextNodeParentInternalMediaType = 198,
  ChildrenContentfulOssDetailTextNodeParentInternalOwner = 199,
  ChildrenContentfulOssDetailTextNodeParentInternalType = 200,
  ChildrenContentfulOssDetailTextNodeParentParentChildren = 201,
  ChildrenContentfulOssDetailTextNodeParentParentId = 202,
  ChildrenContentfulOssDetailTextNodeSysType = 203,
  ChildrenChildren = 204,
  ChildrenChildrenChildren = 205,
  ChildrenChildrenChildrenChildren = 206,
  ChildrenChildrenChildrenId = 207,
  ChildrenChildrenId = 208,
  ChildrenChildrenInternalContent = 209,
  ChildrenChildrenInternalContentDigest = 210,
  ChildrenChildrenInternalDescription = 211,
  ChildrenChildrenInternalFieldOwners = 212,
  ChildrenChildrenInternalIgnoreType = 213,
  ChildrenChildrenInternalMediaType = 214,
  ChildrenChildrenInternalOwner = 215,
  ChildrenChildrenInternalType = 216,
  ChildrenChildrenParentChildren = 217,
  ChildrenChildrenParentId = 218,
  ChildrenId = 219,
  ChildrenInternalContent = 220,
  ChildrenInternalContentDigest = 221,
  ChildrenInternalDescription = 222,
  ChildrenInternalFieldOwners = 223,
  ChildrenInternalIgnoreType = 224,
  ChildrenInternalMediaType = 225,
  ChildrenInternalOwner = 226,
  ChildrenInternalType = 227,
  ChildrenParentChildren = 228,
  ChildrenParentChildrenChildren = 229,
  ChildrenParentChildrenId = 230,
  ChildrenParentId = 231,
  ChildrenParentInternalContent = 232,
  ChildrenParentInternalContentDigest = 233,
  ChildrenParentInternalDescription = 234,
  ChildrenParentInternalFieldOwners = 235,
  ChildrenParentInternalIgnoreType = 236,
  ChildrenParentInternalMediaType = 237,
  ChildrenParentInternalOwner = 238,
  ChildrenParentInternalType = 239,
  ChildrenParentParentChildren = 240,
  ChildrenParentParentId = 241,
  ContentfulId = 242,
  CreatedAt = 243,
  DetailChildMdxBody = 244,
  DetailChildMdxChildren = 245,
  DetailChildMdxChildrenChildren = 246,
  DetailChildMdxChildrenId = 247,
  DetailChildMdxExcerpt = 248,
  DetailChildMdxFileAbsolutePath = 249,
  DetailChildMdxFrontmatterTitle = 250,
  DetailChildMdxHeadings = 251,
  DetailChildMdxHeadingsDepth = 252,
  DetailChildMdxHeadingsValue = 253,
  DetailChildMdxHtml = 254,
  DetailChildMdxId = 255,
  DetailChildMdxInternalContent = 256,
  DetailChildMdxInternalContentDigest = 257,
  DetailChildMdxInternalDescription = 258,
  DetailChildMdxInternalFieldOwners = 259,
  DetailChildMdxInternalIgnoreType = 260,
  DetailChildMdxInternalMediaType = 261,
  DetailChildMdxInternalOwner = 262,
  DetailChildMdxInternalType = 263,
  DetailChildMdxMdxAst = 264,
  DetailChildMdxParentChildren = 265,
  DetailChildMdxParentId = 266,
  DetailChildMdxRawBody = 267,
  DetailChildMdxSlug = 268,
  DetailChildMdxTableOfContents = 269,
  DetailChildMdxTimeToRead = 270,
  DetailChildMdxWordCountParagraphs = 271,
  DetailChildMdxWordCountSentences = 272,
  DetailChildMdxWordCountWords = 273,
  DetailChildren = 274,
  DetailChildrenMdx = 275,
  DetailChildrenMdxBody = 276,
  DetailChildrenMdxChildren = 277,
  DetailChildrenMdxChildrenChildren = 278,
  DetailChildrenMdxChildrenId = 279,
  DetailChildrenMdxExcerpt = 280,
  DetailChildrenMdxFileAbsolutePath = 281,
  DetailChildrenMdxFrontmatterTitle = 282,
  DetailChildrenMdxHeadings = 283,
  DetailChildrenMdxHeadingsDepth = 284,
  DetailChildrenMdxHeadingsValue = 285,
  DetailChildrenMdxHtml = 286,
  DetailChildrenMdxId = 287,
  DetailChildrenMdxInternalContent = 288,
  DetailChildrenMdxInternalContentDigest = 289,
  DetailChildrenMdxInternalDescription = 290,
  DetailChildrenMdxInternalFieldOwners = 291,
  DetailChildrenMdxInternalIgnoreType = 292,
  DetailChildrenMdxInternalMediaType = 293,
  DetailChildrenMdxInternalOwner = 294,
  DetailChildrenMdxInternalType = 295,
  DetailChildrenMdxMdxAst = 296,
  DetailChildrenMdxParentChildren = 297,
  DetailChildrenMdxParentId = 298,
  DetailChildrenMdxRawBody = 299,
  DetailChildrenMdxSlug = 300,
  DetailChildrenMdxTableOfContents = 301,
  DetailChildrenMdxTimeToRead = 302,
  DetailChildrenMdxWordCountParagraphs = 303,
  DetailChildrenMdxWordCountSentences = 304,
  DetailChildrenMdxWordCountWords = 305,
  DetailChildrenChildren = 306,
  DetailChildrenChildrenChildren = 307,
  DetailChildrenChildrenId = 308,
  DetailChildrenId = 309,
  DetailChildrenInternalContent = 310,
  DetailChildrenInternalContentDigest = 311,
  DetailChildrenInternalDescription = 312,
  DetailChildrenInternalFieldOwners = 313,
  DetailChildrenInternalIgnoreType = 314,
  DetailChildrenInternalMediaType = 315,
  DetailChildrenInternalOwner = 316,
  DetailChildrenInternalType = 317,
  DetailChildrenParentChildren = 318,
  DetailChildrenParentId = 319,
  DetailDetail = 320,
  DetailId = 321,
  DetailInternalContent = 322,
  DetailInternalContentDigest = 323,
  DetailInternalDescription = 324,
  DetailInternalFieldOwners = 325,
  DetailInternalIgnoreType = 326,
  DetailInternalMediaType = 327,
  DetailInternalOwner = 328,
  DetailInternalType = 329,
  DetailParentChildren = 330,
  DetailParentChildrenChildren = 331,
  DetailParentChildrenId = 332,
  DetailParentId = 333,
  DetailParentInternalContent = 334,
  DetailParentInternalContentDigest = 335,
  DetailParentInternalDescription = 336,
  DetailParentInternalFieldOwners = 337,
  DetailParentInternalIgnoreType = 338,
  DetailParentInternalMediaType = 339,
  DetailParentInternalOwner = 340,
  DetailParentInternalType = 341,
  DetailParentParentChildren = 342,
  DetailParentParentId = 343,
  DetailSysType = 344,
  Href = 345,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 346,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 347,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 348,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 349,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 350,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 351,
  IconChildContentfulIconSvgTextNodeChildMdxId = 352,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 353,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 354,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 355,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 356,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 357,
  IconChildContentfulIconSvgTextNodeChildren = 358,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 359,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 360,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 361,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 362,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 363,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 364,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 365,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 366,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 367,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 368,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 369,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 370,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 371,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 372,
  IconChildContentfulIconSvgTextNodeChildrenId = 373,
  IconChildContentfulIconSvgTextNodeId = 374,
  IconChildContentfulIconSvgTextNodeInternalContent = 375,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 376,
  IconChildContentfulIconSvgTextNodeInternalDescription = 377,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 378,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 379,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 380,
  IconChildContentfulIconSvgTextNodeInternalOwner = 381,
  IconChildContentfulIconSvgTextNodeInternalType = 382,
  IconChildContentfulIconSvgTextNodeParentChildren = 383,
  IconChildContentfulIconSvgTextNodeParentId = 384,
  IconChildContentfulIconSvgTextNodeSvg = 385,
  IconChildContentfulIconSvgTextNodeSysType = 386,
  IconChildren = 387,
  IconChildrenContentfulIconSvgTextNode = 388,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 389,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 390,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 391,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 392,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 393,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 394,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 395,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 396,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 397,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 398,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 399,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 400,
  IconChildrenContentfulIconSvgTextNodeChildren = 401,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 402,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 403,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 404,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 405,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 406,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 407,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 408,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 409,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 410,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 411,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 412,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 413,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 414,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 415,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 416,
  IconChildrenContentfulIconSvgTextNodeId = 417,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 418,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 419,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 420,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 421,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 422,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 423,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 424,
  IconChildrenContentfulIconSvgTextNodeInternalType = 425,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 426,
  IconChildrenContentfulIconSvgTextNodeParentId = 427,
  IconChildrenContentfulIconSvgTextNodeSvg = 428,
  IconChildrenContentfulIconSvgTextNodeSysType = 429,
  IconChildrenChildren = 430,
  IconChildrenChildrenChildren = 431,
  IconChildrenChildrenId = 432,
  IconChildrenId = 433,
  IconChildrenInternalContent = 434,
  IconChildrenInternalContentDigest = 435,
  IconChildrenInternalDescription = 436,
  IconChildrenInternalFieldOwners = 437,
  IconChildrenInternalIgnoreType = 438,
  IconChildrenInternalMediaType = 439,
  IconChildrenInternalOwner = 440,
  IconChildrenInternalType = 441,
  IconChildrenParentChildren = 442,
  IconChildrenParentId = 443,
  IconContact = 444,
  IconContactChildren = 445,
  IconContactChildrenChildren = 446,
  IconContactChildrenId = 447,
  IconContactContentfulId = 448,
  IconContactCreatedAt = 449,
  IconContactHref = 450,
  IconContactIconSvgDarkChildren = 451,
  IconContactIconSvgDarkContentfulId = 452,
  IconContactIconSvgDarkCreatedAt = 453,
  IconContactIconSvgDarkDescription = 454,
  IconContactIconSvgDarkFilename = 455,
  IconContactIconSvgDarkFilesize = 456,
  IconContactIconSvgDarkGatsbyImage = 457,
  IconContactIconSvgDarkGatsbyImageData = 458,
  IconContactIconSvgDarkHeight = 459,
  IconContactIconSvgDarkId = 460,
  IconContactIconSvgDarkMimeType = 461,
  IconContactIconSvgDarkNodeLocale = 462,
  IconContactIconSvgDarkPlaceholderUrl = 463,
  IconContactIconSvgDarkPublicUrl = 464,
  IconContactIconSvgDarkSpaceId = 465,
  IconContactIconSvgDarkTitle = 466,
  IconContactIconSvgDarkUpdatedAt = 467,
  IconContactIconSvgDarkUrl = 468,
  IconContactIconSvgDarkWidth = 469,
  IconContactIconSvgLightChildren = 470,
  IconContactIconSvgLightContentfulId = 471,
  IconContactIconSvgLightCreatedAt = 472,
  IconContactIconSvgLightDescription = 473,
  IconContactIconSvgLightFilename = 474,
  IconContactIconSvgLightFilesize = 475,
  IconContactIconSvgLightGatsbyImage = 476,
  IconContactIconSvgLightGatsbyImageData = 477,
  IconContactIconSvgLightHeight = 478,
  IconContactIconSvgLightId = 479,
  IconContactIconSvgLightMimeType = 480,
  IconContactIconSvgLightNodeLocale = 481,
  IconContactIconSvgLightPlaceholderUrl = 482,
  IconContactIconSvgLightPublicUrl = 483,
  IconContactIconSvgLightSpaceId = 484,
  IconContactIconSvgLightTitle = 485,
  IconContactIconSvgLightUpdatedAt = 486,
  IconContactIconSvgLightUrl = 487,
  IconContactIconSvgLightWidth = 488,
  IconContactIconChildren = 489,
  IconContactIconChildrenContentfulIconSvgTextNode = 490,
  IconContactIconContact = 491,
  IconContactIconContentfulId = 492,
  IconContactIconCreatedAt = 493,
  IconContactIconHistory = 494,
  IconContactIconId = 495,
  IconContactIconName = 496,
  IconContactIconNodeLocale = 497,
  IconContactIconOss = 498,
  IconContactIconProject = 499,
  IconContactIconSpaceId = 500,
  IconContactIconUpdatedAt = 501,
  IconContactIconWhatICanDo = 502,
  IconContactId = 503,
  IconContactInternalContent = 504,
  IconContactInternalContentDigest = 505,
  IconContactInternalDescription = 506,
  IconContactInternalFieldOwners = 507,
  IconContactInternalIgnoreType = 508,
  IconContactInternalMediaType = 509,
  IconContactInternalOwner = 510,
  IconContactInternalType = 511,
  IconContactName = 512,
  IconContactNodeLocale = 513,
  IconContactParentChildren = 514,
  IconContactParentId = 515,
  IconContactSortKey = 516,
  IconContactSpaceId = 517,
  IconContactSubName = 518,
  IconContactSysRevision = 519,
  IconContactSysType = 520,
  IconContactUpdatedAt = 521,
  IconContentfulId = 522,
  IconCreatedAt = 523,
  IconHistory = 524,
  IconHistoryChildren = 525,
  IconHistoryChildrenChildren = 526,
  IconHistoryChildrenId = 527,
  IconHistoryContentfulId = 528,
  IconHistoryCreatedAt = 529,
  IconHistoryDate = 530,
  IconHistoryIconChildren = 531,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 532,
  IconHistoryIconContact = 533,
  IconHistoryIconContentfulId = 534,
  IconHistoryIconCreatedAt = 535,
  IconHistoryIconHistory = 536,
  IconHistoryIconId = 537,
  IconHistoryIconName = 538,
  IconHistoryIconNodeLocale = 539,
  IconHistoryIconOss = 540,
  IconHistoryIconProject = 541,
  IconHistoryIconSpaceId = 542,
  IconHistoryIconUpdatedAt = 543,
  IconHistoryIconWhatICanDo = 544,
  IconHistoryId = 545,
  IconHistoryInternalContent = 546,
  IconHistoryInternalContentDigest = 547,
  IconHistoryInternalDescription = 548,
  IconHistoryInternalFieldOwners = 549,
  IconHistoryInternalIgnoreType = 550,
  IconHistoryInternalMediaType = 551,
  IconHistoryInternalOwner = 552,
  IconHistoryInternalType = 553,
  IconHistoryName = 554,
  IconHistoryNodeLocale = 555,
  IconHistoryParentChildren = 556,
  IconHistoryParentId = 557,
  IconHistorySpaceId = 558,
  IconHistorySubName = 559,
  IconHistorySysRevision = 560,
  IconHistorySysType = 561,
  IconHistoryUpdatedAt = 562,
  IconId = 563,
  IconInternalContent = 564,
  IconInternalContentDigest = 565,
  IconInternalDescription = 566,
  IconInternalFieldOwners = 567,
  IconInternalIgnoreType = 568,
  IconInternalMediaType = 569,
  IconInternalOwner = 570,
  IconInternalType = 571,
  IconName = 572,
  IconNodeLocale = 573,
  IconOss = 574,
  IconOssChildContentfulOssDetailTextNodeChildren = 575,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 576,
  IconOssChildContentfulOssDetailTextNodeDetail = 577,
  IconOssChildContentfulOssDetailTextNodeId = 578,
  IconOssChildren = 579,
  IconOssChildrenContentfulOssDetailTextNode = 580,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 581,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 582,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 583,
  IconOssChildrenContentfulOssDetailTextNodeId = 584,
  IconOssChildrenChildren = 585,
  IconOssChildrenId = 586,
  IconOssContentfulId = 587,
  IconOssCreatedAt = 588,
  IconOssDetailChildren = 589,
  IconOssDetailChildrenMdx = 590,
  IconOssDetailDetail = 591,
  IconOssDetailId = 592,
  IconOssHref = 593,
  IconOssIconChildren = 594,
  IconOssIconChildrenContentfulIconSvgTextNode = 595,
  IconOssIconContact = 596,
  IconOssIconContentfulId = 597,
  IconOssIconCreatedAt = 598,
  IconOssIconHistory = 599,
  IconOssIconId = 600,
  IconOssIconName = 601,
  IconOssIconNodeLocale = 602,
  IconOssIconOss = 603,
  IconOssIconProject = 604,
  IconOssIconSpaceId = 605,
  IconOssIconUpdatedAt = 606,
  IconOssIconWhatICanDo = 607,
  IconOssId = 608,
  IconOssImageChildren = 609,
  IconOssImageContentfulId = 610,
  IconOssImageCreatedAt = 611,
  IconOssImageDescription = 612,
  IconOssImageFilename = 613,
  IconOssImageFilesize = 614,
  IconOssImageGatsbyImage = 615,
  IconOssImageGatsbyImageData = 616,
  IconOssImageHeight = 617,
  IconOssImageId = 618,
  IconOssImageMimeType = 619,
  IconOssImageNodeLocale = 620,
  IconOssImagePlaceholderUrl = 621,
  IconOssImagePublicUrl = 622,
  IconOssImageSpaceId = 623,
  IconOssImageTitle = 624,
  IconOssImageUpdatedAt = 625,
  IconOssImageUrl = 626,
  IconOssImageWidth = 627,
  IconOssInternalContent = 628,
  IconOssInternalContentDigest = 629,
  IconOssInternalDescription = 630,
  IconOssInternalFieldOwners = 631,
  IconOssInternalIgnoreType = 632,
  IconOssInternalMediaType = 633,
  IconOssInternalOwner = 634,
  IconOssInternalType = 635,
  IconOssName = 636,
  IconOssNodeLocale = 637,
  IconOssParentChildren = 638,
  IconOssParentId = 639,
  IconOssSpaceId = 640,
  IconOssStartDate = 641,
  IconOssSubName = 642,
  IconOssSysRevision = 643,
  IconOssSysType = 644,
  IconOssTags = 645,
  IconOssTagsBlogPost = 646,
  IconOssTagsChildren = 647,
  IconOssTagsContentfulId = 648,
  IconOssTagsCreatedAt = 649,
  IconOssTagsId = 650,
  IconOssTagsLevel = 651,
  IconOssTagsName = 652,
  IconOssTagsNodeLocale = 653,
  IconOssTagsOss = 654,
  IconOssTagsProject = 655,
  IconOssTagsSkillMap = 656,
  IconOssTagsSpaceId = 657,
  IconOssTagsUpdatedAt = 658,
  IconOssUpdatedAt = 659,
  IconParentChildren = 660,
  IconParentChildrenChildren = 661,
  IconParentChildrenId = 662,
  IconParentId = 663,
  IconParentInternalContent = 664,
  IconParentInternalContentDigest = 665,
  IconParentInternalDescription = 666,
  IconParentInternalFieldOwners = 667,
  IconParentInternalIgnoreType = 668,
  IconParentInternalMediaType = 669,
  IconParentInternalOwner = 670,
  IconParentInternalType = 671,
  IconParentParentChildren = 672,
  IconParentParentId = 673,
  IconProject = 674,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 675,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 676,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 677,
  IconProjectChildContentfulProjectDetailTextNodeId = 678,
  IconProjectChildren = 679,
  IconProjectChildrenContentfulProjectDetailTextNode = 680,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 681,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 682,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 683,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 684,
  IconProjectChildrenChildren = 685,
  IconProjectChildrenId = 686,
  IconProjectContentfulId = 687,
  IconProjectCreatedAt = 688,
  IconProjectDetailChildren = 689,
  IconProjectDetailChildrenMdx = 690,
  IconProjectDetailDetail = 691,
  IconProjectDetailId = 692,
  IconProjectEndDate = 693,
  IconProjectIconChildren = 694,
  IconProjectIconChildrenContentfulIconSvgTextNode = 695,
  IconProjectIconContact = 696,
  IconProjectIconContentfulId = 697,
  IconProjectIconCreatedAt = 698,
  IconProjectIconHistory = 699,
  IconProjectIconId = 700,
  IconProjectIconName = 701,
  IconProjectIconNodeLocale = 702,
  IconProjectIconOss = 703,
  IconProjectIconProject = 704,
  IconProjectIconSpaceId = 705,
  IconProjectIconUpdatedAt = 706,
  IconProjectIconWhatICanDo = 707,
  IconProjectId = 708,
  IconProjectInternalContent = 709,
  IconProjectInternalContentDigest = 710,
  IconProjectInternalDescription = 711,
  IconProjectInternalFieldOwners = 712,
  IconProjectInternalIgnoreType = 713,
  IconProjectInternalMediaType = 714,
  IconProjectInternalOwner = 715,
  IconProjectInternalType = 716,
  IconProjectName = 717,
  IconProjectNodeLocale = 718,
  IconProjectParentChildren = 719,
  IconProjectParentId = 720,
  IconProjectSpaceId = 721,
  IconProjectStartDate = 722,
  IconProjectSubName = 723,
  IconProjectSysRevision = 724,
  IconProjectSysType = 725,
  IconProjectTags = 726,
  IconProjectTagsBlogPost = 727,
  IconProjectTagsChildren = 728,
  IconProjectTagsContentfulId = 729,
  IconProjectTagsCreatedAt = 730,
  IconProjectTagsId = 731,
  IconProjectTagsLevel = 732,
  IconProjectTagsName = 733,
  IconProjectTagsNodeLocale = 734,
  IconProjectTagsOss = 735,
  IconProjectTagsProject = 736,
  IconProjectTagsSkillMap = 737,
  IconProjectTagsSpaceId = 738,
  IconProjectTagsUpdatedAt = 739,
  IconProjectUpdatedAt = 740,
  IconSpaceId = 741,
  IconSvgChildMdxBody = 742,
  IconSvgChildMdxChildren = 743,
  IconSvgChildMdxExcerpt = 744,
  IconSvgChildMdxFileAbsolutePath = 745,
  IconSvgChildMdxHeadings = 746,
  IconSvgChildMdxHtml = 747,
  IconSvgChildMdxId = 748,
  IconSvgChildMdxMdxAst = 749,
  IconSvgChildMdxRawBody = 750,
  IconSvgChildMdxSlug = 751,
  IconSvgChildMdxTableOfContents = 752,
  IconSvgChildMdxTimeToRead = 753,
  IconSvgChildren = 754,
  IconSvgChildrenMdx = 755,
  IconSvgChildrenMdxBody = 756,
  IconSvgChildrenMdxChildren = 757,
  IconSvgChildrenMdxExcerpt = 758,
  IconSvgChildrenMdxFileAbsolutePath = 759,
  IconSvgChildrenMdxHeadings = 760,
  IconSvgChildrenMdxHtml = 761,
  IconSvgChildrenMdxId = 762,
  IconSvgChildrenMdxMdxAst = 763,
  IconSvgChildrenMdxRawBody = 764,
  IconSvgChildrenMdxSlug = 765,
  IconSvgChildrenMdxTableOfContents = 766,
  IconSvgChildrenMdxTimeToRead = 767,
  IconSvgChildrenChildren = 768,
  IconSvgChildrenId = 769,
  IconSvgId = 770,
  IconSvgInternalContent = 771,
  IconSvgInternalContentDigest = 772,
  IconSvgInternalDescription = 773,
  IconSvgInternalFieldOwners = 774,
  IconSvgInternalIgnoreType = 775,
  IconSvgInternalMediaType = 776,
  IconSvgInternalOwner = 777,
  IconSvgInternalType = 778,
  IconSvgParentChildren = 779,
  IconSvgParentId = 780,
  IconSvgSvg = 781,
  IconSvgSysType = 782,
  IconSysRevision = 783,
  IconSysType = 784,
  IconUpdatedAt = 785,
  IconWhatICanDo = 786,
  IconWhatICanDoChildren = 787,
  IconWhatICanDoChildrenChildren = 788,
  IconWhatICanDoChildrenId = 789,
  IconWhatICanDoContentfulId = 790,
  IconWhatICanDoCreatedAt = 791,
  IconWhatICanDoIconChildren = 792,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 793,
  IconWhatICanDoIconContact = 794,
  IconWhatICanDoIconContentfulId = 795,
  IconWhatICanDoIconCreatedAt = 796,
  IconWhatICanDoIconHistory = 797,
  IconWhatICanDoIconId = 798,
  IconWhatICanDoIconName = 799,
  IconWhatICanDoIconNodeLocale = 800,
  IconWhatICanDoIconOss = 801,
  IconWhatICanDoIconProject = 802,
  IconWhatICanDoIconSpaceId = 803,
  IconWhatICanDoIconUpdatedAt = 804,
  IconWhatICanDoIconWhatICanDo = 805,
  IconWhatICanDoId = 806,
  IconWhatICanDoInternalContent = 807,
  IconWhatICanDoInternalContentDigest = 808,
  IconWhatICanDoInternalDescription = 809,
  IconWhatICanDoInternalFieldOwners = 810,
  IconWhatICanDoInternalIgnoreType = 811,
  IconWhatICanDoInternalMediaType = 812,
  IconWhatICanDoInternalOwner = 813,
  IconWhatICanDoInternalType = 814,
  IconWhatICanDoName = 815,
  IconWhatICanDoNodeLocale = 816,
  IconWhatICanDoParentChildren = 817,
  IconWhatICanDoParentId = 818,
  IconWhatICanDoSortKey = 819,
  IconWhatICanDoSpaceId = 820,
  IconWhatICanDoSubName = 821,
  IconWhatICanDoSysRevision = 822,
  IconWhatICanDoSysType = 823,
  IconWhatICanDoUpdatedAt = 824,
  Id = 825,
  ImageChildren = 826,
  ImageChildrenChildren = 827,
  ImageChildrenChildrenChildren = 828,
  ImageChildrenChildrenId = 829,
  ImageChildrenId = 830,
  ImageChildrenInternalContent = 831,
  ImageChildrenInternalContentDigest = 832,
  ImageChildrenInternalDescription = 833,
  ImageChildrenInternalFieldOwners = 834,
  ImageChildrenInternalIgnoreType = 835,
  ImageChildrenInternalMediaType = 836,
  ImageChildrenInternalOwner = 837,
  ImageChildrenInternalType = 838,
  ImageChildrenParentChildren = 839,
  ImageChildrenParentId = 840,
  ImageContentfulId = 841,
  ImageCreatedAt = 842,
  ImageDescription = 843,
  ImageFieldsLocalFile = 844,
  ImageFileContentType = 845,
  ImageFileDetailsSize = 846,
  ImageFileFileName = 847,
  ImageFileUrl = 848,
  ImageFilename = 849,
  ImageFilesize = 850,
  ImageGatsbyImage = 851,
  ImageGatsbyImageData = 852,
  ImageHeight = 853,
  ImageId = 854,
  ImageInternalContent = 855,
  ImageInternalContentDigest = 856,
  ImageInternalDescription = 857,
  ImageInternalFieldOwners = 858,
  ImageInternalIgnoreType = 859,
  ImageInternalMediaType = 860,
  ImageInternalOwner = 861,
  ImageInternalType = 862,
  ImageLocalFileAbsolutePath = 863,
  ImageLocalFileAccessTime = 864,
  ImageLocalFileAtime = 865,
  ImageLocalFileAtimeMs = 866,
  ImageLocalFileBase = 867,
  ImageLocalFileBirthTime = 868,
  ImageLocalFileBirthtime = 869,
  ImageLocalFileBirthtimeMs = 870,
  ImageLocalFileBlksize = 871,
  ImageLocalFileBlocks = 872,
  ImageLocalFileChangeTime = 873,
  ImageLocalFileChildImageSharpChildren = 874,
  ImageLocalFileChildImageSharpGatsbyImageData = 875,
  ImageLocalFileChildImageSharpId = 876,
  ImageLocalFileChildLocaleChildren = 877,
  ImageLocalFileChildLocaleData = 878,
  ImageLocalFileChildLocaleFileAbsolutePath = 879,
  ImageLocalFileChildLocaleId = 880,
  ImageLocalFileChildLocaleLanguage = 881,
  ImageLocalFileChildLocaleNs = 882,
  ImageLocalFileChildren = 883,
  ImageLocalFileChildrenImageSharp = 884,
  ImageLocalFileChildrenImageSharpChildren = 885,
  ImageLocalFileChildrenImageSharpGatsbyImageData = 886,
  ImageLocalFileChildrenImageSharpId = 887,
  ImageLocalFileChildrenLocale = 888,
  ImageLocalFileChildrenLocaleChildren = 889,
  ImageLocalFileChildrenLocaleData = 890,
  ImageLocalFileChildrenLocaleFileAbsolutePath = 891,
  ImageLocalFileChildrenLocaleId = 892,
  ImageLocalFileChildrenLocaleLanguage = 893,
  ImageLocalFileChildrenLocaleNs = 894,
  ImageLocalFileChildrenChildren = 895,
  ImageLocalFileChildrenId = 896,
  ImageLocalFileCtime = 897,
  ImageLocalFileCtimeMs = 898,
  ImageLocalFileDev = 899,
  ImageLocalFileDir = 900,
  ImageLocalFileExt = 901,
  ImageLocalFileExtension = 902,
  ImageLocalFileGid = 903,
  ImageLocalFileId = 904,
  ImageLocalFileIno = 905,
  ImageLocalFileInternalContent = 906,
  ImageLocalFileInternalContentDigest = 907,
  ImageLocalFileInternalDescription = 908,
  ImageLocalFileInternalFieldOwners = 909,
  ImageLocalFileInternalIgnoreType = 910,
  ImageLocalFileInternalMediaType = 911,
  ImageLocalFileInternalOwner = 912,
  ImageLocalFileInternalType = 913,
  ImageLocalFileMode = 914,
  ImageLocalFileModifiedTime = 915,
  ImageLocalFileMtime = 916,
  ImageLocalFileMtimeMs = 917,
  ImageLocalFileName = 918,
  ImageLocalFileNlink = 919,
  ImageLocalFileParentChildren = 920,
  ImageLocalFileParentId = 921,
  ImageLocalFilePrettySize = 922,
  ImageLocalFilePublicUrl = 923,
  ImageLocalFileRdev = 924,
  ImageLocalFileRelativeDirectory = 925,
  ImageLocalFileRelativePath = 926,
  ImageLocalFileRoot = 927,
  ImageLocalFileSize = 928,
  ImageLocalFileSourceInstanceName = 929,
  ImageLocalFileUid = 930,
  ImageLocalFileUrl = 931,
  ImageMimeType = 932,
  ImageNodeLocale = 933,
  ImageParentChildren = 934,
  ImageParentChildrenChildren = 935,
  ImageParentChildrenId = 936,
  ImageParentId = 937,
  ImageParentInternalContent = 938,
  ImageParentInternalContentDigest = 939,
  ImageParentInternalDescription = 940,
  ImageParentInternalFieldOwners = 941,
  ImageParentInternalIgnoreType = 942,
  ImageParentInternalMediaType = 943,
  ImageParentInternalOwner = 944,
  ImageParentInternalType = 945,
  ImageParentParentChildren = 946,
  ImageParentParentId = 947,
  ImagePlaceholderUrl = 948,
  ImagePublicUrl = 949,
  ImageResizeHeight = 950,
  ImageResizeSrc = 951,
  ImageResizeWidth = 952,
  ImageSpaceId = 953,
  ImageSysRevision = 954,
  ImageSysType = 955,
  ImageTitle = 956,
  ImageUpdatedAt = 957,
  ImageUrl = 958,
  ImageWidth = 959,
  InternalContent = 960,
  InternalContentDigest = 961,
  InternalDescription = 962,
  InternalFieldOwners = 963,
  InternalIgnoreType = 964,
  InternalMediaType = 965,
  InternalOwner = 966,
  InternalType = 967,
  Name = 968,
  NodeLocale = 969,
  ParentChildren = 970,
  ParentChildrenChildren = 971,
  ParentChildrenChildrenChildren = 972,
  ParentChildrenChildrenId = 973,
  ParentChildrenId = 974,
  ParentChildrenInternalContent = 975,
  ParentChildrenInternalContentDigest = 976,
  ParentChildrenInternalDescription = 977,
  ParentChildrenInternalFieldOwners = 978,
  ParentChildrenInternalIgnoreType = 979,
  ParentChildrenInternalMediaType = 980,
  ParentChildrenInternalOwner = 981,
  ParentChildrenInternalType = 982,
  ParentChildrenParentChildren = 983,
  ParentChildrenParentId = 984,
  ParentId = 985,
  ParentInternalContent = 986,
  ParentInternalContentDigest = 987,
  ParentInternalDescription = 988,
  ParentInternalFieldOwners = 989,
  ParentInternalIgnoreType = 990,
  ParentInternalMediaType = 991,
  ParentInternalOwner = 992,
  ParentInternalType = 993,
  ParentParentChildren = 994,
  ParentParentChildrenChildren = 995,
  ParentParentChildrenId = 996,
  ParentParentId = 997,
  ParentParentInternalContent = 998,
  ParentParentInternalContentDigest = 999,
  ParentParentInternalDescription = 1000,
  ParentParentInternalFieldOwners = 1001,
  ParentParentInternalIgnoreType = 1002,
  ParentParentInternalMediaType = 1003,
  ParentParentInternalOwner = 1004,
  ParentParentInternalType = 1005,
  ParentParentParentChildren = 1006,
  ParentParentParentId = 1007,
  SpaceId = 1008,
  StartDate = 1009,
  SubName = 1010,
  SysContentTypeSysId = 1011,
  SysContentTypeSysLinkType = 1012,
  SysContentTypeSysType = 1013,
  SysRevision = 1014,
  SysType = 1015,
  Tags = 1016,
  TagsBlogPost = 1017,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 1018,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 1019,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 1020,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 1021,
  TagsBlogPostChildren = 1022,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 1023,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 1024,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 1025,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 1026,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 1027,
  TagsBlogPostChildrenChildren = 1028,
  TagsBlogPostChildrenId = 1029,
  TagsBlogPostContentChildren = 1030,
  TagsBlogPostContentChildrenMdx = 1031,
  TagsBlogPostContentContent = 1032,
  TagsBlogPostContentId = 1033,
  TagsBlogPostContentfulId = 1034,
  TagsBlogPostCreated = 1035,
  TagsBlogPostCreatedAt = 1036,
  TagsBlogPostExcerpt = 1037,
  TagsBlogPostId = 1038,
  TagsBlogPostInternalContent = 1039,
  TagsBlogPostInternalContentDigest = 1040,
  TagsBlogPostInternalDescription = 1041,
  TagsBlogPostInternalFieldOwners = 1042,
  TagsBlogPostInternalIgnoreType = 1043,
  TagsBlogPostInternalMediaType = 1044,
  TagsBlogPostInternalOwner = 1045,
  TagsBlogPostInternalType = 1046,
  TagsBlogPostNodeLocale = 1047,
  TagsBlogPostParentChildren = 1048,
  TagsBlogPostParentId = 1049,
  TagsBlogPostSlug = 1050,
  TagsBlogPostSpaceId = 1051,
  TagsBlogPostSysRevision = 1052,
  TagsBlogPostSysType = 1053,
  TagsBlogPostTags = 1054,
  TagsBlogPostTagsBlogPost = 1055,
  TagsBlogPostTagsChildren = 1056,
  TagsBlogPostTagsContentfulId = 1057,
  TagsBlogPostTagsCreatedAt = 1058,
  TagsBlogPostTagsId = 1059,
  TagsBlogPostTagsLevel = 1060,
  TagsBlogPostTagsName = 1061,
  TagsBlogPostTagsNodeLocale = 1062,
  TagsBlogPostTagsOss = 1063,
  TagsBlogPostTagsProject = 1064,
  TagsBlogPostTagsSkillMap = 1065,
  TagsBlogPostTagsSpaceId = 1066,
  TagsBlogPostTagsUpdatedAt = 1067,
  TagsBlogPostTitle = 1068,
  TagsBlogPostUpdated = 1069,
  TagsBlogPostUpdatedAt = 1070,
  TagsChildren = 1071,
  TagsChildrenChildren = 1072,
  TagsChildrenChildrenChildren = 1073,
  TagsChildrenChildrenId = 1074,
  TagsChildrenId = 1075,
  TagsChildrenInternalContent = 1076,
  TagsChildrenInternalContentDigest = 1077,
  TagsChildrenInternalDescription = 1078,
  TagsChildrenInternalFieldOwners = 1079,
  TagsChildrenInternalIgnoreType = 1080,
  TagsChildrenInternalMediaType = 1081,
  TagsChildrenInternalOwner = 1082,
  TagsChildrenInternalType = 1083,
  TagsChildrenParentChildren = 1084,
  TagsChildrenParentId = 1085,
  TagsContentfulId = 1086,
  TagsCreatedAt = 1087,
  TagsId = 1088,
  TagsInternalContent = 1089,
  TagsInternalContentDigest = 1090,
  TagsInternalDescription = 1091,
  TagsInternalFieldOwners = 1092,
  TagsInternalIgnoreType = 1093,
  TagsInternalMediaType = 1094,
  TagsInternalOwner = 1095,
  TagsInternalType = 1096,
  TagsLevel = 1097,
  TagsName = 1098,
  TagsNodeLocale = 1099,
  TagsOss = 1100,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1101,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1102,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1103,
  TagsOssChildContentfulOssDetailTextNodeId = 1104,
  TagsOssChildren = 1105,
  TagsOssChildrenContentfulOssDetailTextNode = 1106,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1107,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1108,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1109,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1110,
  TagsOssChildrenChildren = 1111,
  TagsOssChildrenId = 1112,
  TagsOssContentfulId = 1113,
  TagsOssCreatedAt = 1114,
  TagsOssDetailChildren = 1115,
  TagsOssDetailChildrenMdx = 1116,
  TagsOssDetailDetail = 1117,
  TagsOssDetailId = 1118,
  TagsOssHref = 1119,
  TagsOssIconChildren = 1120,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1121,
  TagsOssIconContact = 1122,
  TagsOssIconContentfulId = 1123,
  TagsOssIconCreatedAt = 1124,
  TagsOssIconHistory = 1125,
  TagsOssIconId = 1126,
  TagsOssIconName = 1127,
  TagsOssIconNodeLocale = 1128,
  TagsOssIconOss = 1129,
  TagsOssIconProject = 1130,
  TagsOssIconSpaceId = 1131,
  TagsOssIconUpdatedAt = 1132,
  TagsOssIconWhatICanDo = 1133,
  TagsOssId = 1134,
  TagsOssImageChildren = 1135,
  TagsOssImageContentfulId = 1136,
  TagsOssImageCreatedAt = 1137,
  TagsOssImageDescription = 1138,
  TagsOssImageFilename = 1139,
  TagsOssImageFilesize = 1140,
  TagsOssImageGatsbyImage = 1141,
  TagsOssImageGatsbyImageData = 1142,
  TagsOssImageHeight = 1143,
  TagsOssImageId = 1144,
  TagsOssImageMimeType = 1145,
  TagsOssImageNodeLocale = 1146,
  TagsOssImagePlaceholderUrl = 1147,
  TagsOssImagePublicUrl = 1148,
  TagsOssImageSpaceId = 1149,
  TagsOssImageTitle = 1150,
  TagsOssImageUpdatedAt = 1151,
  TagsOssImageUrl = 1152,
  TagsOssImageWidth = 1153,
  TagsOssInternalContent = 1154,
  TagsOssInternalContentDigest = 1155,
  TagsOssInternalDescription = 1156,
  TagsOssInternalFieldOwners = 1157,
  TagsOssInternalIgnoreType = 1158,
  TagsOssInternalMediaType = 1159,
  TagsOssInternalOwner = 1160,
  TagsOssInternalType = 1161,
  TagsOssName = 1162,
  TagsOssNodeLocale = 1163,
  TagsOssParentChildren = 1164,
  TagsOssParentId = 1165,
  TagsOssSpaceId = 1166,
  TagsOssStartDate = 1167,
  TagsOssSubName = 1168,
  TagsOssSysRevision = 1169,
  TagsOssSysType = 1170,
  TagsOssTags = 1171,
  TagsOssTagsBlogPost = 1172,
  TagsOssTagsChildren = 1173,
  TagsOssTagsContentfulId = 1174,
  TagsOssTagsCreatedAt = 1175,
  TagsOssTagsId = 1176,
  TagsOssTagsLevel = 1177,
  TagsOssTagsName = 1178,
  TagsOssTagsNodeLocale = 1179,
  TagsOssTagsOss = 1180,
  TagsOssTagsProject = 1181,
  TagsOssTagsSkillMap = 1182,
  TagsOssTagsSpaceId = 1183,
  TagsOssTagsUpdatedAt = 1184,
  TagsOssUpdatedAt = 1185,
  TagsParentChildren = 1186,
  TagsParentChildrenChildren = 1187,
  TagsParentChildrenId = 1188,
  TagsParentId = 1189,
  TagsParentInternalContent = 1190,
  TagsParentInternalContentDigest = 1191,
  TagsParentInternalDescription = 1192,
  TagsParentInternalFieldOwners = 1193,
  TagsParentInternalIgnoreType = 1194,
  TagsParentInternalMediaType = 1195,
  TagsParentInternalOwner = 1196,
  TagsParentInternalType = 1197,
  TagsParentParentChildren = 1198,
  TagsParentParentId = 1199,
  TagsProject = 1200,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1201,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1202,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1203,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1204,
  TagsProjectChildren = 1205,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1206,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1207,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1208,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1209,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1210,
  TagsProjectChildrenChildren = 1211,
  TagsProjectChildrenId = 1212,
  TagsProjectContentfulId = 1213,
  TagsProjectCreatedAt = 1214,
  TagsProjectDetailChildren = 1215,
  TagsProjectDetailChildrenMdx = 1216,
  TagsProjectDetailDetail = 1217,
  TagsProjectDetailId = 1218,
  TagsProjectEndDate = 1219,
  TagsProjectIconChildren = 1220,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1221,
  TagsProjectIconContact = 1222,
  TagsProjectIconContentfulId = 1223,
  TagsProjectIconCreatedAt = 1224,
  TagsProjectIconHistory = 1225,
  TagsProjectIconId = 1226,
  TagsProjectIconName = 1227,
  TagsProjectIconNodeLocale = 1228,
  TagsProjectIconOss = 1229,
  TagsProjectIconProject = 1230,
  TagsProjectIconSpaceId = 1231,
  TagsProjectIconUpdatedAt = 1232,
  TagsProjectIconWhatICanDo = 1233,
  TagsProjectId = 1234,
  TagsProjectInternalContent = 1235,
  TagsProjectInternalContentDigest = 1236,
  TagsProjectInternalDescription = 1237,
  TagsProjectInternalFieldOwners = 1238,
  TagsProjectInternalIgnoreType = 1239,
  TagsProjectInternalMediaType = 1240,
  TagsProjectInternalOwner = 1241,
  TagsProjectInternalType = 1242,
  TagsProjectName = 1243,
  TagsProjectNodeLocale = 1244,
  TagsProjectParentChildren = 1245,
  TagsProjectParentId = 1246,
  TagsProjectSpaceId = 1247,
  TagsProjectStartDate = 1248,
  TagsProjectSubName = 1249,
  TagsProjectSysRevision = 1250,
  TagsProjectSysType = 1251,
  TagsProjectTags = 1252,
  TagsProjectTagsBlogPost = 1253,
  TagsProjectTagsChildren = 1254,
  TagsProjectTagsContentfulId = 1255,
  TagsProjectTagsCreatedAt = 1256,
  TagsProjectTagsId = 1257,
  TagsProjectTagsLevel = 1258,
  TagsProjectTagsName = 1259,
  TagsProjectTagsNodeLocale = 1260,
  TagsProjectTagsOss = 1261,
  TagsProjectTagsProject = 1262,
  TagsProjectTagsSkillMap = 1263,
  TagsProjectTagsSpaceId = 1264,
  TagsProjectTagsUpdatedAt = 1265,
  TagsProjectUpdatedAt = 1266,
  TagsSkillMap = 1267,
  TagsSkillMapChildren = 1268,
  TagsSkillMapChildrenChildren = 1269,
  TagsSkillMapChildrenId = 1270,
  TagsSkillMapContentfulId = 1271,
  TagsSkillMapCreatedAt = 1272,
  TagsSkillMapExpanded = 1273,
  TagsSkillMapId = 1274,
  TagsSkillMapInternalContent = 1275,
  TagsSkillMapInternalContentDigest = 1276,
  TagsSkillMapInternalDescription = 1277,
  TagsSkillMapInternalFieldOwners = 1278,
  TagsSkillMapInternalIgnoreType = 1279,
  TagsSkillMapInternalMediaType = 1280,
  TagsSkillMapInternalOwner = 1281,
  TagsSkillMapInternalType = 1282,
  TagsSkillMapName = 1283,
  TagsSkillMapNodeLocale = 1284,
  TagsSkillMapParentChildren = 1285,
  TagsSkillMapParentId = 1286,
  TagsSkillMapSkills = 1287,
  TagsSkillMapSkillsBlogPost = 1288,
  TagsSkillMapSkillsChildren = 1289,
  TagsSkillMapSkillsContentfulId = 1290,
  TagsSkillMapSkillsCreatedAt = 1291,
  TagsSkillMapSkillsId = 1292,
  TagsSkillMapSkillsLevel = 1293,
  TagsSkillMapSkillsName = 1294,
  TagsSkillMapSkillsNodeLocale = 1295,
  TagsSkillMapSkillsOss = 1296,
  TagsSkillMapSkillsProject = 1297,
  TagsSkillMapSkillsSkillMap = 1298,
  TagsSkillMapSkillsSpaceId = 1299,
  TagsSkillMapSkillsUpdatedAt = 1300,
  TagsSkillMapSortKey = 1301,
  TagsSkillMapSpaceId = 1302,
  TagsSkillMapSysRevision = 1303,
  TagsSkillMapSysType = 1304,
  TagsSkillMapUpdatedAt = 1305,
  TagsSpaceId = 1306,
  TagsSysRevision = 1307,
  TagsSysType = 1308,
  TagsUpdatedAt = 1309,
  UpdatedAt = 1310
}

export type ContentfulOssFilterInput = {
  childContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  detail: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  startDate: InputMaybe<DateQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulOssSysFilterInput>;
  tags: InputMaybe<ContentfulTagFilterListInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulOssFilterListInput = {
  elemMatch: InputMaybe<ContentfulOssFilterInput>;
};

export type ContentfulOssGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulOssEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulOssGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulOss>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulOssGroupConnectionDistinctArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssGroupConnectionGroupArgs = {
  field: ContentfulOssFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulOssFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulOssSys = {
  contentType: Maybe<ContentfulOssSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulOssSysContentType = {
  sys: Maybe<ContentfulOssSysContentTypeSys>;
};

export type ContentfulOssSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulOssSysContentTypeSysFilterInput>;
};

export type ContentfulOssSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulOssSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulOssSysFilterInput = {
  contentType: InputMaybe<ContentfulOssSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProject = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulProjectDetailTextNode or null if there are no children of given type on this node */
  childContentfulProjectDetailTextNode: Maybe<ContentfulProjectDetailTextNode>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type contentfulProjectDetailTextNode */
  childrenContentfulProjectDetailTextNode: Maybe<Array<Maybe<ContentfulProjectDetailTextNode>>>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  detail: Maybe<ContentfulProjectDetailTextNode>;
  endDate: Maybe<Scalars['Date']>;
  icon: Maybe<ContentfulIcon>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  spaceId: Maybe<Scalars['String']>;
  startDate: Maybe<Scalars['Date']>;
  subName: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulProjectSys>;
  tags: Maybe<Array<Maybe<ContentfulTag>>>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulProjectCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulProjectEndDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulProjectStartDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulProjectUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulProjectConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulProjectEdge>;
  group: Array<ContentfulProjectGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionGroupArgs = {
  field: ContentfulProjectFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulProject>;
  node: ContentfulProject;
  previous: Maybe<ContentfulProject>;
};

export enum ContentfulProjectFieldsEnum {
  ChildContentfulProjectDetailTextNodeChildMdxBody = 0,
  ChildContentfulProjectDetailTextNodeChildMdxChildren = 1,
  ChildContentfulProjectDetailTextNodeChildMdxChildrenChildren = 2,
  ChildContentfulProjectDetailTextNodeChildMdxChildrenId = 3,
  ChildContentfulProjectDetailTextNodeChildMdxExcerpt = 4,
  ChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 5,
  ChildContentfulProjectDetailTextNodeChildMdxFrontmatterTitle = 6,
  ChildContentfulProjectDetailTextNodeChildMdxHeadings = 7,
  ChildContentfulProjectDetailTextNodeChildMdxHeadingsDepth = 8,
  ChildContentfulProjectDetailTextNodeChildMdxHeadingsValue = 9,
  ChildContentfulProjectDetailTextNodeChildMdxHtml = 10,
  ChildContentfulProjectDetailTextNodeChildMdxId = 11,
  ChildContentfulProjectDetailTextNodeChildMdxInternalContent = 12,
  ChildContentfulProjectDetailTextNodeChildMdxInternalContentDigest = 13,
  ChildContentfulProjectDetailTextNodeChildMdxInternalDescription = 14,
  ChildContentfulProjectDetailTextNodeChildMdxInternalFieldOwners = 15,
  ChildContentfulProjectDetailTextNodeChildMdxInternalIgnoreType = 16,
  ChildContentfulProjectDetailTextNodeChildMdxInternalMediaType = 17,
  ChildContentfulProjectDetailTextNodeChildMdxInternalOwner = 18,
  ChildContentfulProjectDetailTextNodeChildMdxInternalType = 19,
  ChildContentfulProjectDetailTextNodeChildMdxMdxAst = 20,
  ChildContentfulProjectDetailTextNodeChildMdxParentChildren = 21,
  ChildContentfulProjectDetailTextNodeChildMdxParentId = 22,
  ChildContentfulProjectDetailTextNodeChildMdxRawBody = 23,
  ChildContentfulProjectDetailTextNodeChildMdxSlug = 24,
  ChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 25,
  ChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 26,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountParagraphs = 27,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountSentences = 28,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountWords = 29,
  ChildContentfulProjectDetailTextNodeChildren = 30,
  ChildContentfulProjectDetailTextNodeChildrenMdx = 31,
  ChildContentfulProjectDetailTextNodeChildrenMdxBody = 32,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildren = 33,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildrenChildren = 34,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildrenId = 35,
  ChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 36,
  ChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 37,
  ChildContentfulProjectDetailTextNodeChildrenMdxFrontmatterTitle = 38,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 39,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadingsDepth = 40,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadingsValue = 41,
  ChildContentfulProjectDetailTextNodeChildrenMdxHtml = 42,
  ChildContentfulProjectDetailTextNodeChildrenMdxId = 43,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalContent = 44,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalContentDigest = 45,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalDescription = 46,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalFieldOwners = 47,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalIgnoreType = 48,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalMediaType = 49,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalOwner = 50,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalType = 51,
  ChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 52,
  ChildContentfulProjectDetailTextNodeChildrenMdxParentChildren = 53,
  ChildContentfulProjectDetailTextNodeChildrenMdxParentId = 54,
  ChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 55,
  ChildContentfulProjectDetailTextNodeChildrenMdxSlug = 56,
  ChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 57,
  ChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 58,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountParagraphs = 59,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountSentences = 60,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountWords = 61,
  ChildContentfulProjectDetailTextNodeChildrenChildren = 62,
  ChildContentfulProjectDetailTextNodeChildrenChildrenChildren = 63,
  ChildContentfulProjectDetailTextNodeChildrenChildrenId = 64,
  ChildContentfulProjectDetailTextNodeChildrenId = 65,
  ChildContentfulProjectDetailTextNodeChildrenInternalContent = 66,
  ChildContentfulProjectDetailTextNodeChildrenInternalContentDigest = 67,
  ChildContentfulProjectDetailTextNodeChildrenInternalDescription = 68,
  ChildContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 69,
  ChildContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 70,
  ChildContentfulProjectDetailTextNodeChildrenInternalMediaType = 71,
  ChildContentfulProjectDetailTextNodeChildrenInternalOwner = 72,
  ChildContentfulProjectDetailTextNodeChildrenInternalType = 73,
  ChildContentfulProjectDetailTextNodeChildrenParentChildren = 74,
  ChildContentfulProjectDetailTextNodeChildrenParentId = 75,
  ChildContentfulProjectDetailTextNodeDetail = 76,
  ChildContentfulProjectDetailTextNodeId = 77,
  ChildContentfulProjectDetailTextNodeInternalContent = 78,
  ChildContentfulProjectDetailTextNodeInternalContentDigest = 79,
  ChildContentfulProjectDetailTextNodeInternalDescription = 80,
  ChildContentfulProjectDetailTextNodeInternalFieldOwners = 81,
  ChildContentfulProjectDetailTextNodeInternalIgnoreType = 82,
  ChildContentfulProjectDetailTextNodeInternalMediaType = 83,
  ChildContentfulProjectDetailTextNodeInternalOwner = 84,
  ChildContentfulProjectDetailTextNodeInternalType = 85,
  ChildContentfulProjectDetailTextNodeParentChildren = 86,
  ChildContentfulProjectDetailTextNodeParentChildrenChildren = 87,
  ChildContentfulProjectDetailTextNodeParentChildrenId = 88,
  ChildContentfulProjectDetailTextNodeParentId = 89,
  ChildContentfulProjectDetailTextNodeParentInternalContent = 90,
  ChildContentfulProjectDetailTextNodeParentInternalContentDigest = 91,
  ChildContentfulProjectDetailTextNodeParentInternalDescription = 92,
  ChildContentfulProjectDetailTextNodeParentInternalFieldOwners = 93,
  ChildContentfulProjectDetailTextNodeParentInternalIgnoreType = 94,
  ChildContentfulProjectDetailTextNodeParentInternalMediaType = 95,
  ChildContentfulProjectDetailTextNodeParentInternalOwner = 96,
  ChildContentfulProjectDetailTextNodeParentInternalType = 97,
  ChildContentfulProjectDetailTextNodeParentParentChildren = 98,
  ChildContentfulProjectDetailTextNodeParentParentId = 99,
  ChildContentfulProjectDetailTextNodeSysType = 100,
  Children = 101,
  ChildrenContentfulProjectDetailTextNode = 102,
  ChildrenContentfulProjectDetailTextNodeChildMdxBody = 103,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildren = 104,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildrenChildren = 105,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildrenId = 106,
  ChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 107,
  ChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 108,
  ChildrenContentfulProjectDetailTextNodeChildMdxFrontmatterTitle = 109,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 110,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadingsDepth = 111,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadingsValue = 112,
  ChildrenContentfulProjectDetailTextNodeChildMdxHtml = 113,
  ChildrenContentfulProjectDetailTextNodeChildMdxId = 114,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalContent = 115,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalContentDigest = 116,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalDescription = 117,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalFieldOwners = 118,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalIgnoreType = 119,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalMediaType = 120,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalOwner = 121,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalType = 122,
  ChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 123,
  ChildrenContentfulProjectDetailTextNodeChildMdxParentChildren = 124,
  ChildrenContentfulProjectDetailTextNodeChildMdxParentId = 125,
  ChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 126,
  ChildrenContentfulProjectDetailTextNodeChildMdxSlug = 127,
  ChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 128,
  ChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 129,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountParagraphs = 130,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountSentences = 131,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountWords = 132,
  ChildrenContentfulProjectDetailTextNodeChildren = 133,
  ChildrenContentfulProjectDetailTextNodeChildrenMdx = 134,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 135,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 136,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildrenChildren = 137,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildrenId = 138,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 139,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 140,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxFrontmatterTitle = 141,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 142,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadingsDepth = 143,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadingsValue = 144,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 145,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxId = 146,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalContent = 147,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalContentDigest = 148,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalDescription = 149,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalFieldOwners = 150,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalIgnoreType = 151,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalMediaType = 152,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalOwner = 153,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalType = 154,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 155,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxParentChildren = 156,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxParentId = 157,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 158,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 159,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 160,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 161,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountParagraphs = 162,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountSentences = 163,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountWords = 164,
  ChildrenContentfulProjectDetailTextNodeChildrenChildren = 165,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenChildren = 166,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenId = 167,
  ChildrenContentfulProjectDetailTextNodeChildrenId = 168,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContent = 169,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContentDigest = 170,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalDescription = 171,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 172,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 173,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalMediaType = 174,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalOwner = 175,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalType = 176,
  ChildrenContentfulProjectDetailTextNodeChildrenParentChildren = 177,
  ChildrenContentfulProjectDetailTextNodeChildrenParentId = 178,
  ChildrenContentfulProjectDetailTextNodeDetail = 179,
  ChildrenContentfulProjectDetailTextNodeId = 180,
  ChildrenContentfulProjectDetailTextNodeInternalContent = 181,
  ChildrenContentfulProjectDetailTextNodeInternalContentDigest = 182,
  ChildrenContentfulProjectDetailTextNodeInternalDescription = 183,
  ChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 184,
  ChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 185,
  ChildrenContentfulProjectDetailTextNodeInternalMediaType = 186,
  ChildrenContentfulProjectDetailTextNodeInternalOwner = 187,
  ChildrenContentfulProjectDetailTextNodeInternalType = 188,
  ChildrenContentfulProjectDetailTextNodeParentChildren = 189,
  ChildrenContentfulProjectDetailTextNodeParentChildrenChildren = 190,
  ChildrenContentfulProjectDetailTextNodeParentChildrenId = 191,
  ChildrenContentfulProjectDetailTextNodeParentId = 192,
  ChildrenContentfulProjectDetailTextNodeParentInternalContent = 193,
  ChildrenContentfulProjectDetailTextNodeParentInternalContentDigest = 194,
  ChildrenContentfulProjectDetailTextNodeParentInternalDescription = 195,
  ChildrenContentfulProjectDetailTextNodeParentInternalFieldOwners = 196,
  ChildrenContentfulProjectDetailTextNodeParentInternalIgnoreType = 197,
  ChildrenContentfulProjectDetailTextNodeParentInternalMediaType = 198,
  ChildrenContentfulProjectDetailTextNodeParentInternalOwner = 199,
  ChildrenContentfulProjectDetailTextNodeParentInternalType = 200,
  ChildrenContentfulProjectDetailTextNodeParentParentChildren = 201,
  ChildrenContentfulProjectDetailTextNodeParentParentId = 202,
  ChildrenContentfulProjectDetailTextNodeSysType = 203,
  ChildrenChildren = 204,
  ChildrenChildrenChildren = 205,
  ChildrenChildrenChildrenChildren = 206,
  ChildrenChildrenChildrenId = 207,
  ChildrenChildrenId = 208,
  ChildrenChildrenInternalContent = 209,
  ChildrenChildrenInternalContentDigest = 210,
  ChildrenChildrenInternalDescription = 211,
  ChildrenChildrenInternalFieldOwners = 212,
  ChildrenChildrenInternalIgnoreType = 213,
  ChildrenChildrenInternalMediaType = 214,
  ChildrenChildrenInternalOwner = 215,
  ChildrenChildrenInternalType = 216,
  ChildrenChildrenParentChildren = 217,
  ChildrenChildrenParentId = 218,
  ChildrenId = 219,
  ChildrenInternalContent = 220,
  ChildrenInternalContentDigest = 221,
  ChildrenInternalDescription = 222,
  ChildrenInternalFieldOwners = 223,
  ChildrenInternalIgnoreType = 224,
  ChildrenInternalMediaType = 225,
  ChildrenInternalOwner = 226,
  ChildrenInternalType = 227,
  ChildrenParentChildren = 228,
  ChildrenParentChildrenChildren = 229,
  ChildrenParentChildrenId = 230,
  ChildrenParentId = 231,
  ChildrenParentInternalContent = 232,
  ChildrenParentInternalContentDigest = 233,
  ChildrenParentInternalDescription = 234,
  ChildrenParentInternalFieldOwners = 235,
  ChildrenParentInternalIgnoreType = 236,
  ChildrenParentInternalMediaType = 237,
  ChildrenParentInternalOwner = 238,
  ChildrenParentInternalType = 239,
  ChildrenParentParentChildren = 240,
  ChildrenParentParentId = 241,
  ContentfulId = 242,
  CreatedAt = 243,
  DetailChildMdxBody = 244,
  DetailChildMdxChildren = 245,
  DetailChildMdxChildrenChildren = 246,
  DetailChildMdxChildrenId = 247,
  DetailChildMdxExcerpt = 248,
  DetailChildMdxFileAbsolutePath = 249,
  DetailChildMdxFrontmatterTitle = 250,
  DetailChildMdxHeadings = 251,
  DetailChildMdxHeadingsDepth = 252,
  DetailChildMdxHeadingsValue = 253,
  DetailChildMdxHtml = 254,
  DetailChildMdxId = 255,
  DetailChildMdxInternalContent = 256,
  DetailChildMdxInternalContentDigest = 257,
  DetailChildMdxInternalDescription = 258,
  DetailChildMdxInternalFieldOwners = 259,
  DetailChildMdxInternalIgnoreType = 260,
  DetailChildMdxInternalMediaType = 261,
  DetailChildMdxInternalOwner = 262,
  DetailChildMdxInternalType = 263,
  DetailChildMdxMdxAst = 264,
  DetailChildMdxParentChildren = 265,
  DetailChildMdxParentId = 266,
  DetailChildMdxRawBody = 267,
  DetailChildMdxSlug = 268,
  DetailChildMdxTableOfContents = 269,
  DetailChildMdxTimeToRead = 270,
  DetailChildMdxWordCountParagraphs = 271,
  DetailChildMdxWordCountSentences = 272,
  DetailChildMdxWordCountWords = 273,
  DetailChildren = 274,
  DetailChildrenMdx = 275,
  DetailChildrenMdxBody = 276,
  DetailChildrenMdxChildren = 277,
  DetailChildrenMdxChildrenChildren = 278,
  DetailChildrenMdxChildrenId = 279,
  DetailChildrenMdxExcerpt = 280,
  DetailChildrenMdxFileAbsolutePath = 281,
  DetailChildrenMdxFrontmatterTitle = 282,
  DetailChildrenMdxHeadings = 283,
  DetailChildrenMdxHeadingsDepth = 284,
  DetailChildrenMdxHeadingsValue = 285,
  DetailChildrenMdxHtml = 286,
  DetailChildrenMdxId = 287,
  DetailChildrenMdxInternalContent = 288,
  DetailChildrenMdxInternalContentDigest = 289,
  DetailChildrenMdxInternalDescription = 290,
  DetailChildrenMdxInternalFieldOwners = 291,
  DetailChildrenMdxInternalIgnoreType = 292,
  DetailChildrenMdxInternalMediaType = 293,
  DetailChildrenMdxInternalOwner = 294,
  DetailChildrenMdxInternalType = 295,
  DetailChildrenMdxMdxAst = 296,
  DetailChildrenMdxParentChildren = 297,
  DetailChildrenMdxParentId = 298,
  DetailChildrenMdxRawBody = 299,
  DetailChildrenMdxSlug = 300,
  DetailChildrenMdxTableOfContents = 301,
  DetailChildrenMdxTimeToRead = 302,
  DetailChildrenMdxWordCountParagraphs = 303,
  DetailChildrenMdxWordCountSentences = 304,
  DetailChildrenMdxWordCountWords = 305,
  DetailChildrenChildren = 306,
  DetailChildrenChildrenChildren = 307,
  DetailChildrenChildrenId = 308,
  DetailChildrenId = 309,
  DetailChildrenInternalContent = 310,
  DetailChildrenInternalContentDigest = 311,
  DetailChildrenInternalDescription = 312,
  DetailChildrenInternalFieldOwners = 313,
  DetailChildrenInternalIgnoreType = 314,
  DetailChildrenInternalMediaType = 315,
  DetailChildrenInternalOwner = 316,
  DetailChildrenInternalType = 317,
  DetailChildrenParentChildren = 318,
  DetailChildrenParentId = 319,
  DetailDetail = 320,
  DetailId = 321,
  DetailInternalContent = 322,
  DetailInternalContentDigest = 323,
  DetailInternalDescription = 324,
  DetailInternalFieldOwners = 325,
  DetailInternalIgnoreType = 326,
  DetailInternalMediaType = 327,
  DetailInternalOwner = 328,
  DetailInternalType = 329,
  DetailParentChildren = 330,
  DetailParentChildrenChildren = 331,
  DetailParentChildrenId = 332,
  DetailParentId = 333,
  DetailParentInternalContent = 334,
  DetailParentInternalContentDigest = 335,
  DetailParentInternalDescription = 336,
  DetailParentInternalFieldOwners = 337,
  DetailParentInternalIgnoreType = 338,
  DetailParentInternalMediaType = 339,
  DetailParentInternalOwner = 340,
  DetailParentInternalType = 341,
  DetailParentParentChildren = 342,
  DetailParentParentId = 343,
  DetailSysType = 344,
  EndDate = 345,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 346,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 347,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 348,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 349,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 350,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 351,
  IconChildContentfulIconSvgTextNodeChildMdxId = 352,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 353,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 354,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 355,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 356,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 357,
  IconChildContentfulIconSvgTextNodeChildren = 358,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 359,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 360,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 361,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 362,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 363,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 364,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 365,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 366,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 367,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 368,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 369,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 370,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 371,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 372,
  IconChildContentfulIconSvgTextNodeChildrenId = 373,
  IconChildContentfulIconSvgTextNodeId = 374,
  IconChildContentfulIconSvgTextNodeInternalContent = 375,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 376,
  IconChildContentfulIconSvgTextNodeInternalDescription = 377,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 378,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 379,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 380,
  IconChildContentfulIconSvgTextNodeInternalOwner = 381,
  IconChildContentfulIconSvgTextNodeInternalType = 382,
  IconChildContentfulIconSvgTextNodeParentChildren = 383,
  IconChildContentfulIconSvgTextNodeParentId = 384,
  IconChildContentfulIconSvgTextNodeSvg = 385,
  IconChildContentfulIconSvgTextNodeSysType = 386,
  IconChildren = 387,
  IconChildrenContentfulIconSvgTextNode = 388,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 389,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 390,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 391,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 392,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 393,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 394,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 395,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 396,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 397,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 398,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 399,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 400,
  IconChildrenContentfulIconSvgTextNodeChildren = 401,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 402,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 403,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 404,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 405,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 406,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 407,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 408,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 409,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 410,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 411,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 412,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 413,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 414,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 415,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 416,
  IconChildrenContentfulIconSvgTextNodeId = 417,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 418,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 419,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 420,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 421,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 422,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 423,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 424,
  IconChildrenContentfulIconSvgTextNodeInternalType = 425,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 426,
  IconChildrenContentfulIconSvgTextNodeParentId = 427,
  IconChildrenContentfulIconSvgTextNodeSvg = 428,
  IconChildrenContentfulIconSvgTextNodeSysType = 429,
  IconChildrenChildren = 430,
  IconChildrenChildrenChildren = 431,
  IconChildrenChildrenId = 432,
  IconChildrenId = 433,
  IconChildrenInternalContent = 434,
  IconChildrenInternalContentDigest = 435,
  IconChildrenInternalDescription = 436,
  IconChildrenInternalFieldOwners = 437,
  IconChildrenInternalIgnoreType = 438,
  IconChildrenInternalMediaType = 439,
  IconChildrenInternalOwner = 440,
  IconChildrenInternalType = 441,
  IconChildrenParentChildren = 442,
  IconChildrenParentId = 443,
  IconContact = 444,
  IconContactChildren = 445,
  IconContactChildrenChildren = 446,
  IconContactChildrenId = 447,
  IconContactContentfulId = 448,
  IconContactCreatedAt = 449,
  IconContactHref = 450,
  IconContactIconSvgDarkChildren = 451,
  IconContactIconSvgDarkContentfulId = 452,
  IconContactIconSvgDarkCreatedAt = 453,
  IconContactIconSvgDarkDescription = 454,
  IconContactIconSvgDarkFilename = 455,
  IconContactIconSvgDarkFilesize = 456,
  IconContactIconSvgDarkGatsbyImage = 457,
  IconContactIconSvgDarkGatsbyImageData = 458,
  IconContactIconSvgDarkHeight = 459,
  IconContactIconSvgDarkId = 460,
  IconContactIconSvgDarkMimeType = 461,
  IconContactIconSvgDarkNodeLocale = 462,
  IconContactIconSvgDarkPlaceholderUrl = 463,
  IconContactIconSvgDarkPublicUrl = 464,
  IconContactIconSvgDarkSpaceId = 465,
  IconContactIconSvgDarkTitle = 466,
  IconContactIconSvgDarkUpdatedAt = 467,
  IconContactIconSvgDarkUrl = 468,
  IconContactIconSvgDarkWidth = 469,
  IconContactIconSvgLightChildren = 470,
  IconContactIconSvgLightContentfulId = 471,
  IconContactIconSvgLightCreatedAt = 472,
  IconContactIconSvgLightDescription = 473,
  IconContactIconSvgLightFilename = 474,
  IconContactIconSvgLightFilesize = 475,
  IconContactIconSvgLightGatsbyImage = 476,
  IconContactIconSvgLightGatsbyImageData = 477,
  IconContactIconSvgLightHeight = 478,
  IconContactIconSvgLightId = 479,
  IconContactIconSvgLightMimeType = 480,
  IconContactIconSvgLightNodeLocale = 481,
  IconContactIconSvgLightPlaceholderUrl = 482,
  IconContactIconSvgLightPublicUrl = 483,
  IconContactIconSvgLightSpaceId = 484,
  IconContactIconSvgLightTitle = 485,
  IconContactIconSvgLightUpdatedAt = 486,
  IconContactIconSvgLightUrl = 487,
  IconContactIconSvgLightWidth = 488,
  IconContactIconChildren = 489,
  IconContactIconChildrenContentfulIconSvgTextNode = 490,
  IconContactIconContact = 491,
  IconContactIconContentfulId = 492,
  IconContactIconCreatedAt = 493,
  IconContactIconHistory = 494,
  IconContactIconId = 495,
  IconContactIconName = 496,
  IconContactIconNodeLocale = 497,
  IconContactIconOss = 498,
  IconContactIconProject = 499,
  IconContactIconSpaceId = 500,
  IconContactIconUpdatedAt = 501,
  IconContactIconWhatICanDo = 502,
  IconContactId = 503,
  IconContactInternalContent = 504,
  IconContactInternalContentDigest = 505,
  IconContactInternalDescription = 506,
  IconContactInternalFieldOwners = 507,
  IconContactInternalIgnoreType = 508,
  IconContactInternalMediaType = 509,
  IconContactInternalOwner = 510,
  IconContactInternalType = 511,
  IconContactName = 512,
  IconContactNodeLocale = 513,
  IconContactParentChildren = 514,
  IconContactParentId = 515,
  IconContactSortKey = 516,
  IconContactSpaceId = 517,
  IconContactSubName = 518,
  IconContactSysRevision = 519,
  IconContactSysType = 520,
  IconContactUpdatedAt = 521,
  IconContentfulId = 522,
  IconCreatedAt = 523,
  IconHistory = 524,
  IconHistoryChildren = 525,
  IconHistoryChildrenChildren = 526,
  IconHistoryChildrenId = 527,
  IconHistoryContentfulId = 528,
  IconHistoryCreatedAt = 529,
  IconHistoryDate = 530,
  IconHistoryIconChildren = 531,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 532,
  IconHistoryIconContact = 533,
  IconHistoryIconContentfulId = 534,
  IconHistoryIconCreatedAt = 535,
  IconHistoryIconHistory = 536,
  IconHistoryIconId = 537,
  IconHistoryIconName = 538,
  IconHistoryIconNodeLocale = 539,
  IconHistoryIconOss = 540,
  IconHistoryIconProject = 541,
  IconHistoryIconSpaceId = 542,
  IconHistoryIconUpdatedAt = 543,
  IconHistoryIconWhatICanDo = 544,
  IconHistoryId = 545,
  IconHistoryInternalContent = 546,
  IconHistoryInternalContentDigest = 547,
  IconHistoryInternalDescription = 548,
  IconHistoryInternalFieldOwners = 549,
  IconHistoryInternalIgnoreType = 550,
  IconHistoryInternalMediaType = 551,
  IconHistoryInternalOwner = 552,
  IconHistoryInternalType = 553,
  IconHistoryName = 554,
  IconHistoryNodeLocale = 555,
  IconHistoryParentChildren = 556,
  IconHistoryParentId = 557,
  IconHistorySpaceId = 558,
  IconHistorySubName = 559,
  IconHistorySysRevision = 560,
  IconHistorySysType = 561,
  IconHistoryUpdatedAt = 562,
  IconId = 563,
  IconInternalContent = 564,
  IconInternalContentDigest = 565,
  IconInternalDescription = 566,
  IconInternalFieldOwners = 567,
  IconInternalIgnoreType = 568,
  IconInternalMediaType = 569,
  IconInternalOwner = 570,
  IconInternalType = 571,
  IconName = 572,
  IconNodeLocale = 573,
  IconOss = 574,
  IconOssChildContentfulOssDetailTextNodeChildren = 575,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 576,
  IconOssChildContentfulOssDetailTextNodeDetail = 577,
  IconOssChildContentfulOssDetailTextNodeId = 578,
  IconOssChildren = 579,
  IconOssChildrenContentfulOssDetailTextNode = 580,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 581,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 582,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 583,
  IconOssChildrenContentfulOssDetailTextNodeId = 584,
  IconOssChildrenChildren = 585,
  IconOssChildrenId = 586,
  IconOssContentfulId = 587,
  IconOssCreatedAt = 588,
  IconOssDetailChildren = 589,
  IconOssDetailChildrenMdx = 590,
  IconOssDetailDetail = 591,
  IconOssDetailId = 592,
  IconOssHref = 593,
  IconOssIconChildren = 594,
  IconOssIconChildrenContentfulIconSvgTextNode = 595,
  IconOssIconContact = 596,
  IconOssIconContentfulId = 597,
  IconOssIconCreatedAt = 598,
  IconOssIconHistory = 599,
  IconOssIconId = 600,
  IconOssIconName = 601,
  IconOssIconNodeLocale = 602,
  IconOssIconOss = 603,
  IconOssIconProject = 604,
  IconOssIconSpaceId = 605,
  IconOssIconUpdatedAt = 606,
  IconOssIconWhatICanDo = 607,
  IconOssId = 608,
  IconOssImageChildren = 609,
  IconOssImageContentfulId = 610,
  IconOssImageCreatedAt = 611,
  IconOssImageDescription = 612,
  IconOssImageFilename = 613,
  IconOssImageFilesize = 614,
  IconOssImageGatsbyImage = 615,
  IconOssImageGatsbyImageData = 616,
  IconOssImageHeight = 617,
  IconOssImageId = 618,
  IconOssImageMimeType = 619,
  IconOssImageNodeLocale = 620,
  IconOssImagePlaceholderUrl = 621,
  IconOssImagePublicUrl = 622,
  IconOssImageSpaceId = 623,
  IconOssImageTitle = 624,
  IconOssImageUpdatedAt = 625,
  IconOssImageUrl = 626,
  IconOssImageWidth = 627,
  IconOssInternalContent = 628,
  IconOssInternalContentDigest = 629,
  IconOssInternalDescription = 630,
  IconOssInternalFieldOwners = 631,
  IconOssInternalIgnoreType = 632,
  IconOssInternalMediaType = 633,
  IconOssInternalOwner = 634,
  IconOssInternalType = 635,
  IconOssName = 636,
  IconOssNodeLocale = 637,
  IconOssParentChildren = 638,
  IconOssParentId = 639,
  IconOssSpaceId = 640,
  IconOssStartDate = 641,
  IconOssSubName = 642,
  IconOssSysRevision = 643,
  IconOssSysType = 644,
  IconOssTags = 645,
  IconOssTagsBlogPost = 646,
  IconOssTagsChildren = 647,
  IconOssTagsContentfulId = 648,
  IconOssTagsCreatedAt = 649,
  IconOssTagsId = 650,
  IconOssTagsLevel = 651,
  IconOssTagsName = 652,
  IconOssTagsNodeLocale = 653,
  IconOssTagsOss = 654,
  IconOssTagsProject = 655,
  IconOssTagsSkillMap = 656,
  IconOssTagsSpaceId = 657,
  IconOssTagsUpdatedAt = 658,
  IconOssUpdatedAt = 659,
  IconParentChildren = 660,
  IconParentChildrenChildren = 661,
  IconParentChildrenId = 662,
  IconParentId = 663,
  IconParentInternalContent = 664,
  IconParentInternalContentDigest = 665,
  IconParentInternalDescription = 666,
  IconParentInternalFieldOwners = 667,
  IconParentInternalIgnoreType = 668,
  IconParentInternalMediaType = 669,
  IconParentInternalOwner = 670,
  IconParentInternalType = 671,
  IconParentParentChildren = 672,
  IconParentParentId = 673,
  IconProject = 674,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 675,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 676,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 677,
  IconProjectChildContentfulProjectDetailTextNodeId = 678,
  IconProjectChildren = 679,
  IconProjectChildrenContentfulProjectDetailTextNode = 680,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 681,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 682,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 683,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 684,
  IconProjectChildrenChildren = 685,
  IconProjectChildrenId = 686,
  IconProjectContentfulId = 687,
  IconProjectCreatedAt = 688,
  IconProjectDetailChildren = 689,
  IconProjectDetailChildrenMdx = 690,
  IconProjectDetailDetail = 691,
  IconProjectDetailId = 692,
  IconProjectEndDate = 693,
  IconProjectIconChildren = 694,
  IconProjectIconChildrenContentfulIconSvgTextNode = 695,
  IconProjectIconContact = 696,
  IconProjectIconContentfulId = 697,
  IconProjectIconCreatedAt = 698,
  IconProjectIconHistory = 699,
  IconProjectIconId = 700,
  IconProjectIconName = 701,
  IconProjectIconNodeLocale = 702,
  IconProjectIconOss = 703,
  IconProjectIconProject = 704,
  IconProjectIconSpaceId = 705,
  IconProjectIconUpdatedAt = 706,
  IconProjectIconWhatICanDo = 707,
  IconProjectId = 708,
  IconProjectInternalContent = 709,
  IconProjectInternalContentDigest = 710,
  IconProjectInternalDescription = 711,
  IconProjectInternalFieldOwners = 712,
  IconProjectInternalIgnoreType = 713,
  IconProjectInternalMediaType = 714,
  IconProjectInternalOwner = 715,
  IconProjectInternalType = 716,
  IconProjectName = 717,
  IconProjectNodeLocale = 718,
  IconProjectParentChildren = 719,
  IconProjectParentId = 720,
  IconProjectSpaceId = 721,
  IconProjectStartDate = 722,
  IconProjectSubName = 723,
  IconProjectSysRevision = 724,
  IconProjectSysType = 725,
  IconProjectTags = 726,
  IconProjectTagsBlogPost = 727,
  IconProjectTagsChildren = 728,
  IconProjectTagsContentfulId = 729,
  IconProjectTagsCreatedAt = 730,
  IconProjectTagsId = 731,
  IconProjectTagsLevel = 732,
  IconProjectTagsName = 733,
  IconProjectTagsNodeLocale = 734,
  IconProjectTagsOss = 735,
  IconProjectTagsProject = 736,
  IconProjectTagsSkillMap = 737,
  IconProjectTagsSpaceId = 738,
  IconProjectTagsUpdatedAt = 739,
  IconProjectUpdatedAt = 740,
  IconSpaceId = 741,
  IconSvgChildMdxBody = 742,
  IconSvgChildMdxChildren = 743,
  IconSvgChildMdxExcerpt = 744,
  IconSvgChildMdxFileAbsolutePath = 745,
  IconSvgChildMdxHeadings = 746,
  IconSvgChildMdxHtml = 747,
  IconSvgChildMdxId = 748,
  IconSvgChildMdxMdxAst = 749,
  IconSvgChildMdxRawBody = 750,
  IconSvgChildMdxSlug = 751,
  IconSvgChildMdxTableOfContents = 752,
  IconSvgChildMdxTimeToRead = 753,
  IconSvgChildren = 754,
  IconSvgChildrenMdx = 755,
  IconSvgChildrenMdxBody = 756,
  IconSvgChildrenMdxChildren = 757,
  IconSvgChildrenMdxExcerpt = 758,
  IconSvgChildrenMdxFileAbsolutePath = 759,
  IconSvgChildrenMdxHeadings = 760,
  IconSvgChildrenMdxHtml = 761,
  IconSvgChildrenMdxId = 762,
  IconSvgChildrenMdxMdxAst = 763,
  IconSvgChildrenMdxRawBody = 764,
  IconSvgChildrenMdxSlug = 765,
  IconSvgChildrenMdxTableOfContents = 766,
  IconSvgChildrenMdxTimeToRead = 767,
  IconSvgChildrenChildren = 768,
  IconSvgChildrenId = 769,
  IconSvgId = 770,
  IconSvgInternalContent = 771,
  IconSvgInternalContentDigest = 772,
  IconSvgInternalDescription = 773,
  IconSvgInternalFieldOwners = 774,
  IconSvgInternalIgnoreType = 775,
  IconSvgInternalMediaType = 776,
  IconSvgInternalOwner = 777,
  IconSvgInternalType = 778,
  IconSvgParentChildren = 779,
  IconSvgParentId = 780,
  IconSvgSvg = 781,
  IconSvgSysType = 782,
  IconSysRevision = 783,
  IconSysType = 784,
  IconUpdatedAt = 785,
  IconWhatICanDo = 786,
  IconWhatICanDoChildren = 787,
  IconWhatICanDoChildrenChildren = 788,
  IconWhatICanDoChildrenId = 789,
  IconWhatICanDoContentfulId = 790,
  IconWhatICanDoCreatedAt = 791,
  IconWhatICanDoIconChildren = 792,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 793,
  IconWhatICanDoIconContact = 794,
  IconWhatICanDoIconContentfulId = 795,
  IconWhatICanDoIconCreatedAt = 796,
  IconWhatICanDoIconHistory = 797,
  IconWhatICanDoIconId = 798,
  IconWhatICanDoIconName = 799,
  IconWhatICanDoIconNodeLocale = 800,
  IconWhatICanDoIconOss = 801,
  IconWhatICanDoIconProject = 802,
  IconWhatICanDoIconSpaceId = 803,
  IconWhatICanDoIconUpdatedAt = 804,
  IconWhatICanDoIconWhatICanDo = 805,
  IconWhatICanDoId = 806,
  IconWhatICanDoInternalContent = 807,
  IconWhatICanDoInternalContentDigest = 808,
  IconWhatICanDoInternalDescription = 809,
  IconWhatICanDoInternalFieldOwners = 810,
  IconWhatICanDoInternalIgnoreType = 811,
  IconWhatICanDoInternalMediaType = 812,
  IconWhatICanDoInternalOwner = 813,
  IconWhatICanDoInternalType = 814,
  IconWhatICanDoName = 815,
  IconWhatICanDoNodeLocale = 816,
  IconWhatICanDoParentChildren = 817,
  IconWhatICanDoParentId = 818,
  IconWhatICanDoSortKey = 819,
  IconWhatICanDoSpaceId = 820,
  IconWhatICanDoSubName = 821,
  IconWhatICanDoSysRevision = 822,
  IconWhatICanDoSysType = 823,
  IconWhatICanDoUpdatedAt = 824,
  Id = 825,
  InternalContent = 826,
  InternalContentDigest = 827,
  InternalDescription = 828,
  InternalFieldOwners = 829,
  InternalIgnoreType = 830,
  InternalMediaType = 831,
  InternalOwner = 832,
  InternalType = 833,
  Name = 834,
  NodeLocale = 835,
  ParentChildren = 836,
  ParentChildrenChildren = 837,
  ParentChildrenChildrenChildren = 838,
  ParentChildrenChildrenId = 839,
  ParentChildrenId = 840,
  ParentChildrenInternalContent = 841,
  ParentChildrenInternalContentDigest = 842,
  ParentChildrenInternalDescription = 843,
  ParentChildrenInternalFieldOwners = 844,
  ParentChildrenInternalIgnoreType = 845,
  ParentChildrenInternalMediaType = 846,
  ParentChildrenInternalOwner = 847,
  ParentChildrenInternalType = 848,
  ParentChildrenParentChildren = 849,
  ParentChildrenParentId = 850,
  ParentId = 851,
  ParentInternalContent = 852,
  ParentInternalContentDigest = 853,
  ParentInternalDescription = 854,
  ParentInternalFieldOwners = 855,
  ParentInternalIgnoreType = 856,
  ParentInternalMediaType = 857,
  ParentInternalOwner = 858,
  ParentInternalType = 859,
  ParentParentChildren = 860,
  ParentParentChildrenChildren = 861,
  ParentParentChildrenId = 862,
  ParentParentId = 863,
  ParentParentInternalContent = 864,
  ParentParentInternalContentDigest = 865,
  ParentParentInternalDescription = 866,
  ParentParentInternalFieldOwners = 867,
  ParentParentInternalIgnoreType = 868,
  ParentParentInternalMediaType = 869,
  ParentParentInternalOwner = 870,
  ParentParentInternalType = 871,
  ParentParentParentChildren = 872,
  ParentParentParentId = 873,
  SpaceId = 874,
  StartDate = 875,
  SubName = 876,
  SysContentTypeSysId = 877,
  SysContentTypeSysLinkType = 878,
  SysContentTypeSysType = 879,
  SysRevision = 880,
  SysType = 881,
  Tags = 882,
  TagsBlogPost = 883,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 884,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 885,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 886,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 887,
  TagsBlogPostChildren = 888,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 889,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 890,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 891,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 892,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 893,
  TagsBlogPostChildrenChildren = 894,
  TagsBlogPostChildrenId = 895,
  TagsBlogPostContentChildren = 896,
  TagsBlogPostContentChildrenMdx = 897,
  TagsBlogPostContentContent = 898,
  TagsBlogPostContentId = 899,
  TagsBlogPostContentfulId = 900,
  TagsBlogPostCreated = 901,
  TagsBlogPostCreatedAt = 902,
  TagsBlogPostExcerpt = 903,
  TagsBlogPostId = 904,
  TagsBlogPostInternalContent = 905,
  TagsBlogPostInternalContentDigest = 906,
  TagsBlogPostInternalDescription = 907,
  TagsBlogPostInternalFieldOwners = 908,
  TagsBlogPostInternalIgnoreType = 909,
  TagsBlogPostInternalMediaType = 910,
  TagsBlogPostInternalOwner = 911,
  TagsBlogPostInternalType = 912,
  TagsBlogPostNodeLocale = 913,
  TagsBlogPostParentChildren = 914,
  TagsBlogPostParentId = 915,
  TagsBlogPostSlug = 916,
  TagsBlogPostSpaceId = 917,
  TagsBlogPostSysRevision = 918,
  TagsBlogPostSysType = 919,
  TagsBlogPostTags = 920,
  TagsBlogPostTagsBlogPost = 921,
  TagsBlogPostTagsChildren = 922,
  TagsBlogPostTagsContentfulId = 923,
  TagsBlogPostTagsCreatedAt = 924,
  TagsBlogPostTagsId = 925,
  TagsBlogPostTagsLevel = 926,
  TagsBlogPostTagsName = 927,
  TagsBlogPostTagsNodeLocale = 928,
  TagsBlogPostTagsOss = 929,
  TagsBlogPostTagsProject = 930,
  TagsBlogPostTagsSkillMap = 931,
  TagsBlogPostTagsSpaceId = 932,
  TagsBlogPostTagsUpdatedAt = 933,
  TagsBlogPostTitle = 934,
  TagsBlogPostUpdated = 935,
  TagsBlogPostUpdatedAt = 936,
  TagsChildren = 937,
  TagsChildrenChildren = 938,
  TagsChildrenChildrenChildren = 939,
  TagsChildrenChildrenId = 940,
  TagsChildrenId = 941,
  TagsChildrenInternalContent = 942,
  TagsChildrenInternalContentDigest = 943,
  TagsChildrenInternalDescription = 944,
  TagsChildrenInternalFieldOwners = 945,
  TagsChildrenInternalIgnoreType = 946,
  TagsChildrenInternalMediaType = 947,
  TagsChildrenInternalOwner = 948,
  TagsChildrenInternalType = 949,
  TagsChildrenParentChildren = 950,
  TagsChildrenParentId = 951,
  TagsContentfulId = 952,
  TagsCreatedAt = 953,
  TagsId = 954,
  TagsInternalContent = 955,
  TagsInternalContentDigest = 956,
  TagsInternalDescription = 957,
  TagsInternalFieldOwners = 958,
  TagsInternalIgnoreType = 959,
  TagsInternalMediaType = 960,
  TagsInternalOwner = 961,
  TagsInternalType = 962,
  TagsLevel = 963,
  TagsName = 964,
  TagsNodeLocale = 965,
  TagsOss = 966,
  TagsOssChildContentfulOssDetailTextNodeChildren = 967,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 968,
  TagsOssChildContentfulOssDetailTextNodeDetail = 969,
  TagsOssChildContentfulOssDetailTextNodeId = 970,
  TagsOssChildren = 971,
  TagsOssChildrenContentfulOssDetailTextNode = 972,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 973,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 974,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 975,
  TagsOssChildrenContentfulOssDetailTextNodeId = 976,
  TagsOssChildrenChildren = 977,
  TagsOssChildrenId = 978,
  TagsOssContentfulId = 979,
  TagsOssCreatedAt = 980,
  TagsOssDetailChildren = 981,
  TagsOssDetailChildrenMdx = 982,
  TagsOssDetailDetail = 983,
  TagsOssDetailId = 984,
  TagsOssHref = 985,
  TagsOssIconChildren = 986,
  TagsOssIconChildrenContentfulIconSvgTextNode = 987,
  TagsOssIconContact = 988,
  TagsOssIconContentfulId = 989,
  TagsOssIconCreatedAt = 990,
  TagsOssIconHistory = 991,
  TagsOssIconId = 992,
  TagsOssIconName = 993,
  TagsOssIconNodeLocale = 994,
  TagsOssIconOss = 995,
  TagsOssIconProject = 996,
  TagsOssIconSpaceId = 997,
  TagsOssIconUpdatedAt = 998,
  TagsOssIconWhatICanDo = 999,
  TagsOssId = 1000,
  TagsOssImageChildren = 1001,
  TagsOssImageContentfulId = 1002,
  TagsOssImageCreatedAt = 1003,
  TagsOssImageDescription = 1004,
  TagsOssImageFilename = 1005,
  TagsOssImageFilesize = 1006,
  TagsOssImageGatsbyImage = 1007,
  TagsOssImageGatsbyImageData = 1008,
  TagsOssImageHeight = 1009,
  TagsOssImageId = 1010,
  TagsOssImageMimeType = 1011,
  TagsOssImageNodeLocale = 1012,
  TagsOssImagePlaceholderUrl = 1013,
  TagsOssImagePublicUrl = 1014,
  TagsOssImageSpaceId = 1015,
  TagsOssImageTitle = 1016,
  TagsOssImageUpdatedAt = 1017,
  TagsOssImageUrl = 1018,
  TagsOssImageWidth = 1019,
  TagsOssInternalContent = 1020,
  TagsOssInternalContentDigest = 1021,
  TagsOssInternalDescription = 1022,
  TagsOssInternalFieldOwners = 1023,
  TagsOssInternalIgnoreType = 1024,
  TagsOssInternalMediaType = 1025,
  TagsOssInternalOwner = 1026,
  TagsOssInternalType = 1027,
  TagsOssName = 1028,
  TagsOssNodeLocale = 1029,
  TagsOssParentChildren = 1030,
  TagsOssParentId = 1031,
  TagsOssSpaceId = 1032,
  TagsOssStartDate = 1033,
  TagsOssSubName = 1034,
  TagsOssSysRevision = 1035,
  TagsOssSysType = 1036,
  TagsOssTags = 1037,
  TagsOssTagsBlogPost = 1038,
  TagsOssTagsChildren = 1039,
  TagsOssTagsContentfulId = 1040,
  TagsOssTagsCreatedAt = 1041,
  TagsOssTagsId = 1042,
  TagsOssTagsLevel = 1043,
  TagsOssTagsName = 1044,
  TagsOssTagsNodeLocale = 1045,
  TagsOssTagsOss = 1046,
  TagsOssTagsProject = 1047,
  TagsOssTagsSkillMap = 1048,
  TagsOssTagsSpaceId = 1049,
  TagsOssTagsUpdatedAt = 1050,
  TagsOssUpdatedAt = 1051,
  TagsParentChildren = 1052,
  TagsParentChildrenChildren = 1053,
  TagsParentChildrenId = 1054,
  TagsParentId = 1055,
  TagsParentInternalContent = 1056,
  TagsParentInternalContentDigest = 1057,
  TagsParentInternalDescription = 1058,
  TagsParentInternalFieldOwners = 1059,
  TagsParentInternalIgnoreType = 1060,
  TagsParentInternalMediaType = 1061,
  TagsParentInternalOwner = 1062,
  TagsParentInternalType = 1063,
  TagsParentParentChildren = 1064,
  TagsParentParentId = 1065,
  TagsProject = 1066,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1067,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1068,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1069,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1070,
  TagsProjectChildren = 1071,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1072,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1073,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1074,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1075,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1076,
  TagsProjectChildrenChildren = 1077,
  TagsProjectChildrenId = 1078,
  TagsProjectContentfulId = 1079,
  TagsProjectCreatedAt = 1080,
  TagsProjectDetailChildren = 1081,
  TagsProjectDetailChildrenMdx = 1082,
  TagsProjectDetailDetail = 1083,
  TagsProjectDetailId = 1084,
  TagsProjectEndDate = 1085,
  TagsProjectIconChildren = 1086,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1087,
  TagsProjectIconContact = 1088,
  TagsProjectIconContentfulId = 1089,
  TagsProjectIconCreatedAt = 1090,
  TagsProjectIconHistory = 1091,
  TagsProjectIconId = 1092,
  TagsProjectIconName = 1093,
  TagsProjectIconNodeLocale = 1094,
  TagsProjectIconOss = 1095,
  TagsProjectIconProject = 1096,
  TagsProjectIconSpaceId = 1097,
  TagsProjectIconUpdatedAt = 1098,
  TagsProjectIconWhatICanDo = 1099,
  TagsProjectId = 1100,
  TagsProjectInternalContent = 1101,
  TagsProjectInternalContentDigest = 1102,
  TagsProjectInternalDescription = 1103,
  TagsProjectInternalFieldOwners = 1104,
  TagsProjectInternalIgnoreType = 1105,
  TagsProjectInternalMediaType = 1106,
  TagsProjectInternalOwner = 1107,
  TagsProjectInternalType = 1108,
  TagsProjectName = 1109,
  TagsProjectNodeLocale = 1110,
  TagsProjectParentChildren = 1111,
  TagsProjectParentId = 1112,
  TagsProjectSpaceId = 1113,
  TagsProjectStartDate = 1114,
  TagsProjectSubName = 1115,
  TagsProjectSysRevision = 1116,
  TagsProjectSysType = 1117,
  TagsProjectTags = 1118,
  TagsProjectTagsBlogPost = 1119,
  TagsProjectTagsChildren = 1120,
  TagsProjectTagsContentfulId = 1121,
  TagsProjectTagsCreatedAt = 1122,
  TagsProjectTagsId = 1123,
  TagsProjectTagsLevel = 1124,
  TagsProjectTagsName = 1125,
  TagsProjectTagsNodeLocale = 1126,
  TagsProjectTagsOss = 1127,
  TagsProjectTagsProject = 1128,
  TagsProjectTagsSkillMap = 1129,
  TagsProjectTagsSpaceId = 1130,
  TagsProjectTagsUpdatedAt = 1131,
  TagsProjectUpdatedAt = 1132,
  TagsSkillMap = 1133,
  TagsSkillMapChildren = 1134,
  TagsSkillMapChildrenChildren = 1135,
  TagsSkillMapChildrenId = 1136,
  TagsSkillMapContentfulId = 1137,
  TagsSkillMapCreatedAt = 1138,
  TagsSkillMapExpanded = 1139,
  TagsSkillMapId = 1140,
  TagsSkillMapInternalContent = 1141,
  TagsSkillMapInternalContentDigest = 1142,
  TagsSkillMapInternalDescription = 1143,
  TagsSkillMapInternalFieldOwners = 1144,
  TagsSkillMapInternalIgnoreType = 1145,
  TagsSkillMapInternalMediaType = 1146,
  TagsSkillMapInternalOwner = 1147,
  TagsSkillMapInternalType = 1148,
  TagsSkillMapName = 1149,
  TagsSkillMapNodeLocale = 1150,
  TagsSkillMapParentChildren = 1151,
  TagsSkillMapParentId = 1152,
  TagsSkillMapSkills = 1153,
  TagsSkillMapSkillsBlogPost = 1154,
  TagsSkillMapSkillsChildren = 1155,
  TagsSkillMapSkillsContentfulId = 1156,
  TagsSkillMapSkillsCreatedAt = 1157,
  TagsSkillMapSkillsId = 1158,
  TagsSkillMapSkillsLevel = 1159,
  TagsSkillMapSkillsName = 1160,
  TagsSkillMapSkillsNodeLocale = 1161,
  TagsSkillMapSkillsOss = 1162,
  TagsSkillMapSkillsProject = 1163,
  TagsSkillMapSkillsSkillMap = 1164,
  TagsSkillMapSkillsSpaceId = 1165,
  TagsSkillMapSkillsUpdatedAt = 1166,
  TagsSkillMapSortKey = 1167,
  TagsSkillMapSpaceId = 1168,
  TagsSkillMapSysRevision = 1169,
  TagsSkillMapSysType = 1170,
  TagsSkillMapUpdatedAt = 1171,
  TagsSpaceId = 1172,
  TagsSysRevision = 1173,
  TagsSysType = 1174,
  TagsUpdatedAt = 1175,
  UpdatedAt = 1176
}

export type ContentfulProjectFilterInput = {
  childContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  detail: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  endDate: InputMaybe<DateQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  startDate: InputMaybe<DateQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulProjectSysFilterInput>;
  tags: InputMaybe<ContentfulTagFilterListInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulProjectFilterListInput = {
  elemMatch: InputMaybe<ContentfulProjectFilterInput>;
};

export type ContentfulProjectGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulProjectEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulProjectGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulProjectGroupConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectGroupConnectionGroupArgs = {
  field: ContentfulProjectFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulProjectFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectSys = {
  contentType: Maybe<ContentfulProjectSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentType = {
  sys: Maybe<ContentfulProjectSysContentTypeSys>;
};

export type ContentfulProjectSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulProjectSysContentTypeSysFilterInput>;
};

export type ContentfulProjectSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectSysFilterInput = {
  contentType: InputMaybe<ContentfulProjectSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualification = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  date: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  qualification_map: Maybe<Array<Maybe<ContentfulQualificationMap>>>;
  spaceId: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulQualificationSys>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulQualificationCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulQualificationDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulQualificationUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulQualificationConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulQualificationEdge>;
  group: Array<ContentfulQualificationGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulQualification>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulQualificationConnectionDistinctArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationConnectionGroupArgs = {
  field: ContentfulQualificationFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulQualification>;
  node: ContentfulQualification;
  previous: Maybe<ContentfulQualification>;
};

export enum ContentfulQualificationFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  ContentfulId = 39,
  CreatedAt = 40,
  Date = 41,
  Id = 42,
  InternalContent = 43,
  InternalContentDigest = 44,
  InternalDescription = 45,
  InternalFieldOwners = 46,
  InternalIgnoreType = 47,
  InternalMediaType = 48,
  InternalOwner = 49,
  InternalType = 50,
  Name = 51,
  NodeLocale = 52,
  ParentChildren = 53,
  ParentChildrenChildren = 54,
  ParentChildrenChildrenChildren = 55,
  ParentChildrenChildrenId = 56,
  ParentChildrenId = 57,
  ParentChildrenInternalContent = 58,
  ParentChildrenInternalContentDigest = 59,
  ParentChildrenInternalDescription = 60,
  ParentChildrenInternalFieldOwners = 61,
  ParentChildrenInternalIgnoreType = 62,
  ParentChildrenInternalMediaType = 63,
  ParentChildrenInternalOwner = 64,
  ParentChildrenInternalType = 65,
  ParentChildrenParentChildren = 66,
  ParentChildrenParentId = 67,
  ParentId = 68,
  ParentInternalContent = 69,
  ParentInternalContentDigest = 70,
  ParentInternalDescription = 71,
  ParentInternalFieldOwners = 72,
  ParentInternalIgnoreType = 73,
  ParentInternalMediaType = 74,
  ParentInternalOwner = 75,
  ParentInternalType = 76,
  ParentParentChildren = 77,
  ParentParentChildrenChildren = 78,
  ParentParentChildrenId = 79,
  ParentParentId = 80,
  ParentParentInternalContent = 81,
  ParentParentInternalContentDigest = 82,
  ParentParentInternalDescription = 83,
  ParentParentInternalFieldOwners = 84,
  ParentParentInternalIgnoreType = 85,
  ParentParentInternalMediaType = 86,
  ParentParentInternalOwner = 87,
  ParentParentInternalType = 88,
  ParentParentParentChildren = 89,
  ParentParentParentId = 90,
  QualificationMap = 91,
  QualificationMapChildren = 92,
  QualificationMapChildrenChildren = 93,
  QualificationMapChildrenChildrenChildren = 94,
  QualificationMapChildrenChildrenId = 95,
  QualificationMapChildrenId = 96,
  QualificationMapChildrenInternalContent = 97,
  QualificationMapChildrenInternalContentDigest = 98,
  QualificationMapChildrenInternalDescription = 99,
  QualificationMapChildrenInternalFieldOwners = 100,
  QualificationMapChildrenInternalIgnoreType = 101,
  QualificationMapChildrenInternalMediaType = 102,
  QualificationMapChildrenInternalOwner = 103,
  QualificationMapChildrenInternalType = 104,
  QualificationMapChildrenParentChildren = 105,
  QualificationMapChildrenParentId = 106,
  QualificationMapContentfulId = 107,
  QualificationMapCreatedAt = 108,
  QualificationMapExpanded = 109,
  QualificationMapId = 110,
  QualificationMapInternalContent = 111,
  QualificationMapInternalContentDigest = 112,
  QualificationMapInternalDescription = 113,
  QualificationMapInternalFieldOwners = 114,
  QualificationMapInternalIgnoreType = 115,
  QualificationMapInternalMediaType = 116,
  QualificationMapInternalOwner = 117,
  QualificationMapInternalType = 118,
  QualificationMapName = 119,
  QualificationMapNodeLocale = 120,
  QualificationMapParentChildren = 121,
  QualificationMapParentChildrenChildren = 122,
  QualificationMapParentChildrenId = 123,
  QualificationMapParentId = 124,
  QualificationMapParentInternalContent = 125,
  QualificationMapParentInternalContentDigest = 126,
  QualificationMapParentInternalDescription = 127,
  QualificationMapParentInternalFieldOwners = 128,
  QualificationMapParentInternalIgnoreType = 129,
  QualificationMapParentInternalMediaType = 130,
  QualificationMapParentInternalOwner = 131,
  QualificationMapParentInternalType = 132,
  QualificationMapParentParentChildren = 133,
  QualificationMapParentParentId = 134,
  QualificationMapQualifications = 135,
  QualificationMapQualificationsChildren = 136,
  QualificationMapQualificationsChildrenChildren = 137,
  QualificationMapQualificationsChildrenId = 138,
  QualificationMapQualificationsContentfulId = 139,
  QualificationMapQualificationsCreatedAt = 140,
  QualificationMapQualificationsDate = 141,
  QualificationMapQualificationsId = 142,
  QualificationMapQualificationsInternalContent = 143,
  QualificationMapQualificationsInternalContentDigest = 144,
  QualificationMapQualificationsInternalDescription = 145,
  QualificationMapQualificationsInternalFieldOwners = 146,
  QualificationMapQualificationsInternalIgnoreType = 147,
  QualificationMapQualificationsInternalMediaType = 148,
  QualificationMapQualificationsInternalOwner = 149,
  QualificationMapQualificationsInternalType = 150,
  QualificationMapQualificationsName = 151,
  QualificationMapQualificationsNodeLocale = 152,
  QualificationMapQualificationsParentChildren = 153,
  QualificationMapQualificationsParentId = 154,
  QualificationMapQualificationsQualificationMap = 155,
  QualificationMapQualificationsQualificationMapChildren = 156,
  QualificationMapQualificationsQualificationMapContentfulId = 157,
  QualificationMapQualificationsQualificationMapCreatedAt = 158,
  QualificationMapQualificationsQualificationMapExpanded = 159,
  QualificationMapQualificationsQualificationMapId = 160,
  QualificationMapQualificationsQualificationMapName = 161,
  QualificationMapQualificationsQualificationMapNodeLocale = 162,
  QualificationMapQualificationsQualificationMapQualifications = 163,
  QualificationMapQualificationsQualificationMapSortKey = 164,
  QualificationMapQualificationsQualificationMapSpaceId = 165,
  QualificationMapQualificationsQualificationMapUpdatedAt = 166,
  QualificationMapQualificationsSpaceId = 167,
  QualificationMapQualificationsSysRevision = 168,
  QualificationMapQualificationsSysType = 169,
  QualificationMapQualificationsUpdatedAt = 170,
  QualificationMapSortKey = 171,
  QualificationMapSpaceId = 172,
  QualificationMapSysRevision = 173,
  QualificationMapSysType = 174,
  QualificationMapUpdatedAt = 175,
  SpaceId = 176,
  SysContentTypeSysId = 177,
  SysContentTypeSysLinkType = 178,
  SysContentTypeSysType = 179,
  SysRevision = 180,
  SysType = 181,
  UpdatedAt = 182
}

export type ContentfulQualificationFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  qualification_map: InputMaybe<ContentfulQualificationMapFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulQualificationSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulQualificationFilterListInput = {
  elemMatch: InputMaybe<ContentfulQualificationFilterInput>;
};

export type ContentfulQualificationGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulQualificationEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulQualificationGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulQualification>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulQualificationGroupConnectionDistinctArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationGroupConnectionGroupArgs = {
  field: ContentfulQualificationFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  createdAt: Maybe<Scalars['Date']>;
  expanded: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  qualifications: Maybe<Array<Maybe<ContentfulQualification>>>;
  sortKey: Maybe<Scalars['Int']>;
  spaceId: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulQualificationMapSys>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulQualificationMapCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulQualificationMapUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulQualificationMapConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulQualificationMapEdge>;
  group: Array<ContentfulQualificationMapGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulQualificationMap>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulQualificationMapConnectionDistinctArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapConnectionGroupArgs = {
  field: ContentfulQualificationMapFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulQualificationMap>;
  node: ContentfulQualificationMap;
  previous: Maybe<ContentfulQualificationMap>;
};

export enum ContentfulQualificationMapFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  ContentfulId = 39,
  CreatedAt = 40,
  Expanded = 41,
  Id = 42,
  InternalContent = 43,
  InternalContentDigest = 44,
  InternalDescription = 45,
  InternalFieldOwners = 46,
  InternalIgnoreType = 47,
  InternalMediaType = 48,
  InternalOwner = 49,
  InternalType = 50,
  Name = 51,
  NodeLocale = 52,
  ParentChildren = 53,
  ParentChildrenChildren = 54,
  ParentChildrenChildrenChildren = 55,
  ParentChildrenChildrenId = 56,
  ParentChildrenId = 57,
  ParentChildrenInternalContent = 58,
  ParentChildrenInternalContentDigest = 59,
  ParentChildrenInternalDescription = 60,
  ParentChildrenInternalFieldOwners = 61,
  ParentChildrenInternalIgnoreType = 62,
  ParentChildrenInternalMediaType = 63,
  ParentChildrenInternalOwner = 64,
  ParentChildrenInternalType = 65,
  ParentChildrenParentChildren = 66,
  ParentChildrenParentId = 67,
  ParentId = 68,
  ParentInternalContent = 69,
  ParentInternalContentDigest = 70,
  ParentInternalDescription = 71,
  ParentInternalFieldOwners = 72,
  ParentInternalIgnoreType = 73,
  ParentInternalMediaType = 74,
  ParentInternalOwner = 75,
  ParentInternalType = 76,
  ParentParentChildren = 77,
  ParentParentChildrenChildren = 78,
  ParentParentChildrenId = 79,
  ParentParentId = 80,
  ParentParentInternalContent = 81,
  ParentParentInternalContentDigest = 82,
  ParentParentInternalDescription = 83,
  ParentParentInternalFieldOwners = 84,
  ParentParentInternalIgnoreType = 85,
  ParentParentInternalMediaType = 86,
  ParentParentInternalOwner = 87,
  ParentParentInternalType = 88,
  ParentParentParentChildren = 89,
  ParentParentParentId = 90,
  Qualifications = 91,
  QualificationsChildren = 92,
  QualificationsChildrenChildren = 93,
  QualificationsChildrenChildrenChildren = 94,
  QualificationsChildrenChildrenId = 95,
  QualificationsChildrenId = 96,
  QualificationsChildrenInternalContent = 97,
  QualificationsChildrenInternalContentDigest = 98,
  QualificationsChildrenInternalDescription = 99,
  QualificationsChildrenInternalFieldOwners = 100,
  QualificationsChildrenInternalIgnoreType = 101,
  QualificationsChildrenInternalMediaType = 102,
  QualificationsChildrenInternalOwner = 103,
  QualificationsChildrenInternalType = 104,
  QualificationsChildrenParentChildren = 105,
  QualificationsChildrenParentId = 106,
  QualificationsContentfulId = 107,
  QualificationsCreatedAt = 108,
  QualificationsDate = 109,
  QualificationsId = 110,
  QualificationsInternalContent = 111,
  QualificationsInternalContentDigest = 112,
  QualificationsInternalDescription = 113,
  QualificationsInternalFieldOwners = 114,
  QualificationsInternalIgnoreType = 115,
  QualificationsInternalMediaType = 116,
  QualificationsInternalOwner = 117,
  QualificationsInternalType = 118,
  QualificationsName = 119,
  QualificationsNodeLocale = 120,
  QualificationsParentChildren = 121,
  QualificationsParentChildrenChildren = 122,
  QualificationsParentChildrenId = 123,
  QualificationsParentId = 124,
  QualificationsParentInternalContent = 125,
  QualificationsParentInternalContentDigest = 126,
  QualificationsParentInternalDescription = 127,
  QualificationsParentInternalFieldOwners = 128,
  QualificationsParentInternalIgnoreType = 129,
  QualificationsParentInternalMediaType = 130,
  QualificationsParentInternalOwner = 131,
  QualificationsParentInternalType = 132,
  QualificationsParentParentChildren = 133,
  QualificationsParentParentId = 134,
  QualificationsQualificationMap = 135,
  QualificationsQualificationMapChildren = 136,
  QualificationsQualificationMapChildrenChildren = 137,
  QualificationsQualificationMapChildrenId = 138,
  QualificationsQualificationMapContentfulId = 139,
  QualificationsQualificationMapCreatedAt = 140,
  QualificationsQualificationMapExpanded = 141,
  QualificationsQualificationMapId = 142,
  QualificationsQualificationMapInternalContent = 143,
  QualificationsQualificationMapInternalContentDigest = 144,
  QualificationsQualificationMapInternalDescription = 145,
  QualificationsQualificationMapInternalFieldOwners = 146,
  QualificationsQualificationMapInternalIgnoreType = 147,
  QualificationsQualificationMapInternalMediaType = 148,
  QualificationsQualificationMapInternalOwner = 149,
  QualificationsQualificationMapInternalType = 150,
  QualificationsQualificationMapName = 151,
  QualificationsQualificationMapNodeLocale = 152,
  QualificationsQualificationMapParentChildren = 153,
  QualificationsQualificationMapParentId = 154,
  QualificationsQualificationMapQualifications = 155,
  QualificationsQualificationMapQualificationsChildren = 156,
  QualificationsQualificationMapQualificationsContentfulId = 157,
  QualificationsQualificationMapQualificationsCreatedAt = 158,
  QualificationsQualificationMapQualificationsDate = 159,
  QualificationsQualificationMapQualificationsId = 160,
  QualificationsQualificationMapQualificationsName = 161,
  QualificationsQualificationMapQualificationsNodeLocale = 162,
  QualificationsQualificationMapQualificationsQualificationMap = 163,
  QualificationsQualificationMapQualificationsSpaceId = 164,
  QualificationsQualificationMapQualificationsUpdatedAt = 165,
  QualificationsQualificationMapSortKey = 166,
  QualificationsQualificationMapSpaceId = 167,
  QualificationsQualificationMapSysRevision = 168,
  QualificationsQualificationMapSysType = 169,
  QualificationsQualificationMapUpdatedAt = 170,
  QualificationsSpaceId = 171,
  QualificationsSysRevision = 172,
  QualificationsSysType = 173,
  QualificationsUpdatedAt = 174,
  SortKey = 175,
  SpaceId = 176,
  SysContentTypeSysId = 177,
  SysContentTypeSysLinkType = 178,
  SysContentTypeSysType = 179,
  SysRevision = 180,
  SysType = 181,
  UpdatedAt = 182
}

export type ContentfulQualificationMapFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  expanded: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  qualifications: InputMaybe<ContentfulQualificationFilterListInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulQualificationMapSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulQualificationMapFilterListInput = {
  elemMatch: InputMaybe<ContentfulQualificationMapFilterInput>;
};

export type ContentfulQualificationMapGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulQualificationMapEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulQualificationMapGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulQualificationMap>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulQualificationMapGroupConnectionDistinctArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapGroupConnectionGroupArgs = {
  field: ContentfulQualificationMapFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulQualificationMapFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulQualificationMapSys = {
  contentType: Maybe<ContentfulQualificationMapSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapSysContentType = {
  sys: Maybe<ContentfulQualificationMapSysContentTypeSys>;
};

export type ContentfulQualificationMapSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulQualificationMapSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationMapSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationMapSysFilterInput = {
  contentType: InputMaybe<ContentfulQualificationMapSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulQualificationFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulQualificationSys = {
  contentType: Maybe<ContentfulQualificationSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulQualificationSysContentType = {
  sys: Maybe<ContentfulQualificationSysContentTypeSys>;
};

export type ContentfulQualificationSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulQualificationSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulQualificationSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationSysFilterInput = {
  contentType: InputMaybe<ContentfulQualificationSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulSkillMap = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  expanded: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  skills: Maybe<Array<Maybe<ContentfulTag>>>;
  sortKey: Maybe<Scalars['Int']>;
  spaceId: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulSkillMapSys>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulSkillMapCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulSkillMapUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulSkillMapConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulSkillMapEdge>;
  group: Array<ContentfulSkillMapGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulSkillMap>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulSkillMapConnectionDistinctArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapConnectionGroupArgs = {
  field: ContentfulSkillMapFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulSkillMap>;
  node: ContentfulSkillMap;
  previous: Maybe<ContentfulSkillMap>;
};

export enum ContentfulSkillMapFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  ContentfulId = 39,
  CreatedAt = 40,
  Expanded = 41,
  Id = 42,
  InternalContent = 43,
  InternalContentDigest = 44,
  InternalDescription = 45,
  InternalFieldOwners = 46,
  InternalIgnoreType = 47,
  InternalMediaType = 48,
  InternalOwner = 49,
  InternalType = 50,
  Name = 51,
  NodeLocale = 52,
  ParentChildren = 53,
  ParentChildrenChildren = 54,
  ParentChildrenChildrenChildren = 55,
  ParentChildrenChildrenId = 56,
  ParentChildrenId = 57,
  ParentChildrenInternalContent = 58,
  ParentChildrenInternalContentDigest = 59,
  ParentChildrenInternalDescription = 60,
  ParentChildrenInternalFieldOwners = 61,
  ParentChildrenInternalIgnoreType = 62,
  ParentChildrenInternalMediaType = 63,
  ParentChildrenInternalOwner = 64,
  ParentChildrenInternalType = 65,
  ParentChildrenParentChildren = 66,
  ParentChildrenParentId = 67,
  ParentId = 68,
  ParentInternalContent = 69,
  ParentInternalContentDigest = 70,
  ParentInternalDescription = 71,
  ParentInternalFieldOwners = 72,
  ParentInternalIgnoreType = 73,
  ParentInternalMediaType = 74,
  ParentInternalOwner = 75,
  ParentInternalType = 76,
  ParentParentChildren = 77,
  ParentParentChildrenChildren = 78,
  ParentParentChildrenId = 79,
  ParentParentId = 80,
  ParentParentInternalContent = 81,
  ParentParentInternalContentDigest = 82,
  ParentParentInternalDescription = 83,
  ParentParentInternalFieldOwners = 84,
  ParentParentInternalIgnoreType = 85,
  ParentParentInternalMediaType = 86,
  ParentParentInternalOwner = 87,
  ParentParentInternalType = 88,
  ParentParentParentChildren = 89,
  ParentParentParentId = 90,
  Skills = 91,
  SkillsBlogPost = 92,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 93,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 94,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 95,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 96,
  SkillsBlogPostChildren = 97,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 98,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 99,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 100,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 101,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 102,
  SkillsBlogPostChildrenChildren = 103,
  SkillsBlogPostChildrenId = 104,
  SkillsBlogPostContentChildren = 105,
  SkillsBlogPostContentChildrenMdx = 106,
  SkillsBlogPostContentContent = 107,
  SkillsBlogPostContentId = 108,
  SkillsBlogPostContentfulId = 109,
  SkillsBlogPostCreated = 110,
  SkillsBlogPostCreatedAt = 111,
  SkillsBlogPostExcerpt = 112,
  SkillsBlogPostId = 113,
  SkillsBlogPostInternalContent = 114,
  SkillsBlogPostInternalContentDigest = 115,
  SkillsBlogPostInternalDescription = 116,
  SkillsBlogPostInternalFieldOwners = 117,
  SkillsBlogPostInternalIgnoreType = 118,
  SkillsBlogPostInternalMediaType = 119,
  SkillsBlogPostInternalOwner = 120,
  SkillsBlogPostInternalType = 121,
  SkillsBlogPostNodeLocale = 122,
  SkillsBlogPostParentChildren = 123,
  SkillsBlogPostParentId = 124,
  SkillsBlogPostSlug = 125,
  SkillsBlogPostSpaceId = 126,
  SkillsBlogPostSysRevision = 127,
  SkillsBlogPostSysType = 128,
  SkillsBlogPostTags = 129,
  SkillsBlogPostTagsBlogPost = 130,
  SkillsBlogPostTagsChildren = 131,
  SkillsBlogPostTagsContentfulId = 132,
  SkillsBlogPostTagsCreatedAt = 133,
  SkillsBlogPostTagsId = 134,
  SkillsBlogPostTagsLevel = 135,
  SkillsBlogPostTagsName = 136,
  SkillsBlogPostTagsNodeLocale = 137,
  SkillsBlogPostTagsOss = 138,
  SkillsBlogPostTagsProject = 139,
  SkillsBlogPostTagsSkillMap = 140,
  SkillsBlogPostTagsSpaceId = 141,
  SkillsBlogPostTagsUpdatedAt = 142,
  SkillsBlogPostTitle = 143,
  SkillsBlogPostUpdated = 144,
  SkillsBlogPostUpdatedAt = 145,
  SkillsChildren = 146,
  SkillsChildrenChildren = 147,
  SkillsChildrenChildrenChildren = 148,
  SkillsChildrenChildrenId = 149,
  SkillsChildrenId = 150,
  SkillsChildrenInternalContent = 151,
  SkillsChildrenInternalContentDigest = 152,
  SkillsChildrenInternalDescription = 153,
  SkillsChildrenInternalFieldOwners = 154,
  SkillsChildrenInternalIgnoreType = 155,
  SkillsChildrenInternalMediaType = 156,
  SkillsChildrenInternalOwner = 157,
  SkillsChildrenInternalType = 158,
  SkillsChildrenParentChildren = 159,
  SkillsChildrenParentId = 160,
  SkillsContentfulId = 161,
  SkillsCreatedAt = 162,
  SkillsId = 163,
  SkillsInternalContent = 164,
  SkillsInternalContentDigest = 165,
  SkillsInternalDescription = 166,
  SkillsInternalFieldOwners = 167,
  SkillsInternalIgnoreType = 168,
  SkillsInternalMediaType = 169,
  SkillsInternalOwner = 170,
  SkillsInternalType = 171,
  SkillsLevel = 172,
  SkillsName = 173,
  SkillsNodeLocale = 174,
  SkillsOss = 175,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 176,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMdx = 177,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 178,
  SkillsOssChildContentfulOssDetailTextNodeId = 179,
  SkillsOssChildren = 180,
  SkillsOssChildrenContentfulOssDetailTextNode = 181,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 182,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 183,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 184,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 185,
  SkillsOssChildrenChildren = 186,
  SkillsOssChildrenId = 187,
  SkillsOssContentfulId = 188,
  SkillsOssCreatedAt = 189,
  SkillsOssDetailChildren = 190,
  SkillsOssDetailChildrenMdx = 191,
  SkillsOssDetailDetail = 192,
  SkillsOssDetailId = 193,
  SkillsOssHref = 194,
  SkillsOssIconChildren = 195,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 196,
  SkillsOssIconContact = 197,
  SkillsOssIconContentfulId = 198,
  SkillsOssIconCreatedAt = 199,
  SkillsOssIconHistory = 200,
  SkillsOssIconId = 201,
  SkillsOssIconName = 202,
  SkillsOssIconNodeLocale = 203,
  SkillsOssIconOss = 204,
  SkillsOssIconProject = 205,
  SkillsOssIconSpaceId = 206,
  SkillsOssIconUpdatedAt = 207,
  SkillsOssIconWhatICanDo = 208,
  SkillsOssId = 209,
  SkillsOssImageChildren = 210,
  SkillsOssImageContentfulId = 211,
  SkillsOssImageCreatedAt = 212,
  SkillsOssImageDescription = 213,
  SkillsOssImageFilename = 214,
  SkillsOssImageFilesize = 215,
  SkillsOssImageGatsbyImage = 216,
  SkillsOssImageGatsbyImageData = 217,
  SkillsOssImageHeight = 218,
  SkillsOssImageId = 219,
  SkillsOssImageMimeType = 220,
  SkillsOssImageNodeLocale = 221,
  SkillsOssImagePlaceholderUrl = 222,
  SkillsOssImagePublicUrl = 223,
  SkillsOssImageSpaceId = 224,
  SkillsOssImageTitle = 225,
  SkillsOssImageUpdatedAt = 226,
  SkillsOssImageUrl = 227,
  SkillsOssImageWidth = 228,
  SkillsOssInternalContent = 229,
  SkillsOssInternalContentDigest = 230,
  SkillsOssInternalDescription = 231,
  SkillsOssInternalFieldOwners = 232,
  SkillsOssInternalIgnoreType = 233,
  SkillsOssInternalMediaType = 234,
  SkillsOssInternalOwner = 235,
  SkillsOssInternalType = 236,
  SkillsOssName = 237,
  SkillsOssNodeLocale = 238,
  SkillsOssParentChildren = 239,
  SkillsOssParentId = 240,
  SkillsOssSpaceId = 241,
  SkillsOssStartDate = 242,
  SkillsOssSubName = 243,
  SkillsOssSysRevision = 244,
  SkillsOssSysType = 245,
  SkillsOssTags = 246,
  SkillsOssTagsBlogPost = 247,
  SkillsOssTagsChildren = 248,
  SkillsOssTagsContentfulId = 249,
  SkillsOssTagsCreatedAt = 250,
  SkillsOssTagsId = 251,
  SkillsOssTagsLevel = 252,
  SkillsOssTagsName = 253,
  SkillsOssTagsNodeLocale = 254,
  SkillsOssTagsOss = 255,
  SkillsOssTagsProject = 256,
  SkillsOssTagsSkillMap = 257,
  SkillsOssTagsSpaceId = 258,
  SkillsOssTagsUpdatedAt = 259,
  SkillsOssUpdatedAt = 260,
  SkillsParentChildren = 261,
  SkillsParentChildrenChildren = 262,
  SkillsParentChildrenId = 263,
  SkillsParentId = 264,
  SkillsParentInternalContent = 265,
  SkillsParentInternalContentDigest = 266,
  SkillsParentInternalDescription = 267,
  SkillsParentInternalFieldOwners = 268,
  SkillsParentInternalIgnoreType = 269,
  SkillsParentInternalMediaType = 270,
  SkillsParentInternalOwner = 271,
  SkillsParentInternalType = 272,
  SkillsParentParentChildren = 273,
  SkillsParentParentId = 274,
  SkillsProject = 275,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 276,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 277,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 278,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 279,
  SkillsProjectChildren = 280,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 281,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 282,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 283,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 284,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 285,
  SkillsProjectChildrenChildren = 286,
  SkillsProjectChildrenId = 287,
  SkillsProjectContentfulId = 288,
  SkillsProjectCreatedAt = 289,
  SkillsProjectDetailChildren = 290,
  SkillsProjectDetailChildrenMdx = 291,
  SkillsProjectDetailDetail = 292,
  SkillsProjectDetailId = 293,
  SkillsProjectEndDate = 294,
  SkillsProjectIconChildren = 295,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 296,
  SkillsProjectIconContact = 297,
  SkillsProjectIconContentfulId = 298,
  SkillsProjectIconCreatedAt = 299,
  SkillsProjectIconHistory = 300,
  SkillsProjectIconId = 301,
  SkillsProjectIconName = 302,
  SkillsProjectIconNodeLocale = 303,
  SkillsProjectIconOss = 304,
  SkillsProjectIconProject = 305,
  SkillsProjectIconSpaceId = 306,
  SkillsProjectIconUpdatedAt = 307,
  SkillsProjectIconWhatICanDo = 308,
  SkillsProjectId = 309,
  SkillsProjectInternalContent = 310,
  SkillsProjectInternalContentDigest = 311,
  SkillsProjectInternalDescription = 312,
  SkillsProjectInternalFieldOwners = 313,
  SkillsProjectInternalIgnoreType = 314,
  SkillsProjectInternalMediaType = 315,
  SkillsProjectInternalOwner = 316,
  SkillsProjectInternalType = 317,
  SkillsProjectName = 318,
  SkillsProjectNodeLocale = 319,
  SkillsProjectParentChildren = 320,
  SkillsProjectParentId = 321,
  SkillsProjectSpaceId = 322,
  SkillsProjectStartDate = 323,
  SkillsProjectSubName = 324,
  SkillsProjectSysRevision = 325,
  SkillsProjectSysType = 326,
  SkillsProjectTags = 327,
  SkillsProjectTagsBlogPost = 328,
  SkillsProjectTagsChildren = 329,
  SkillsProjectTagsContentfulId = 330,
  SkillsProjectTagsCreatedAt = 331,
  SkillsProjectTagsId = 332,
  SkillsProjectTagsLevel = 333,
  SkillsProjectTagsName = 334,
  SkillsProjectTagsNodeLocale = 335,
  SkillsProjectTagsOss = 336,
  SkillsProjectTagsProject = 337,
  SkillsProjectTagsSkillMap = 338,
  SkillsProjectTagsSpaceId = 339,
  SkillsProjectTagsUpdatedAt = 340,
  SkillsProjectUpdatedAt = 341,
  SkillsSkillMap = 342,
  SkillsSkillMapChildren = 343,
  SkillsSkillMapChildrenChildren = 344,
  SkillsSkillMapChildrenId = 345,
  SkillsSkillMapContentfulId = 346,
  SkillsSkillMapCreatedAt = 347,
  SkillsSkillMapExpanded = 348,
  SkillsSkillMapId = 349,
  SkillsSkillMapInternalContent = 350,
  SkillsSkillMapInternalContentDigest = 351,
  SkillsSkillMapInternalDescription = 352,
  SkillsSkillMapInternalFieldOwners = 353,
  SkillsSkillMapInternalIgnoreType = 354,
  SkillsSkillMapInternalMediaType = 355,
  SkillsSkillMapInternalOwner = 356,
  SkillsSkillMapInternalType = 357,
  SkillsSkillMapName = 358,
  SkillsSkillMapNodeLocale = 359,
  SkillsSkillMapParentChildren = 360,
  SkillsSkillMapParentId = 361,
  SkillsSkillMapSkills = 362,
  SkillsSkillMapSkillsBlogPost = 363,
  SkillsSkillMapSkillsChildren = 364,
  SkillsSkillMapSkillsContentfulId = 365,
  SkillsSkillMapSkillsCreatedAt = 366,
  SkillsSkillMapSkillsId = 367,
  SkillsSkillMapSkillsLevel = 368,
  SkillsSkillMapSkillsName = 369,
  SkillsSkillMapSkillsNodeLocale = 370,
  SkillsSkillMapSkillsOss = 371,
  SkillsSkillMapSkillsProject = 372,
  SkillsSkillMapSkillsSkillMap = 373,
  SkillsSkillMapSkillsSpaceId = 374,
  SkillsSkillMapSkillsUpdatedAt = 375,
  SkillsSkillMapSortKey = 376,
  SkillsSkillMapSpaceId = 377,
  SkillsSkillMapSysRevision = 378,
  SkillsSkillMapSysType = 379,
  SkillsSkillMapUpdatedAt = 380,
  SkillsSpaceId = 381,
  SkillsSysRevision = 382,
  SkillsSysType = 383,
  SkillsUpdatedAt = 384,
  SortKey = 385,
  SpaceId = 386,
  SysContentTypeSysId = 387,
  SysContentTypeSysLinkType = 388,
  SysContentTypeSysType = 389,
  SysRevision = 390,
  SysType = 391,
  UpdatedAt = 392
}

export type ContentfulSkillMapFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  expanded: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  skills: InputMaybe<ContentfulTagFilterListInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulSkillMapSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulSkillMapFilterListInput = {
  elemMatch: InputMaybe<ContentfulSkillMapFilterInput>;
};

export type ContentfulSkillMapGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulSkillMapEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulSkillMapGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulSkillMap>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulSkillMapGroupConnectionDistinctArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapGroupConnectionGroupArgs = {
  field: ContentfulSkillMapFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulSkillMapFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulSkillMapSys = {
  contentType: Maybe<ContentfulSkillMapSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSysContentType = {
  sys: Maybe<ContentfulSkillMapSysContentTypeSys>;
};

export type ContentfulSkillMapSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulSkillMapSysContentTypeSysFilterInput>;
};

export type ContentfulSkillMapSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSkillMapSysFilterInput = {
  contentType: InputMaybe<ContentfulSkillMapSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulTag = ContentfulEntry & ContentfulReference & Node & {
  blog_post: Maybe<Array<Maybe<ContentfulBlogPost>>>;
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  internal: Internal;
  level: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  oss: Maybe<Array<Maybe<ContentfulOss>>>;
  parent: Maybe<Node>;
  project: Maybe<Array<Maybe<ContentfulProject>>>;
  skill_map: Maybe<Array<Maybe<ContentfulSkillMap>>>;
  spaceId: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulTagSys>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulTagCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulTagUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulTagConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulTagEdge>;
  group: Array<ContentfulTagGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulTagConnectionDistinctArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagConnectionGroupArgs = {
  field: ContentfulTagFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulTag>;
  node: ContentfulTag;
  previous: Maybe<ContentfulTag>;
};

export enum ContentfulTagFieldsEnum {
  BlogPost = 0,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxBody = 1,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxChildren = 2,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 3,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 4,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHeadings = 5,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHtml = 6,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxId = 7,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 8,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxRawBody = 9,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxSlug = 10,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 11,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 12,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 13,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 14,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxBody = 15,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 16,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 17,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 18,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 19,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 20,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxId = 21,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 22,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 23,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 24,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 25,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 26,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 27,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 28,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 29,
  BlogPostChildContentfulBlogPostContentTextNodeId = 30,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 31,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 32,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 33,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 34,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 35,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 36,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 37,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 38,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 39,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 40,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 41,
  BlogPostChildren = 42,
  BlogPostChildrenContentfulBlogPostContentTextNode = 43,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxBody = 44,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 45,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 46,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 47,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 48,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 49,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxId = 50,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 51,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 52,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 53,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 54,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 55,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 56,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 57,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 58,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 59,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 60,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 61,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 62,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 63,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 64,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 65,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 66,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 67,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 68,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 69,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 70,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 71,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 72,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 73,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 74,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 75,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 76,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 77,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 78,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 79,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 80,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 81,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 82,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 83,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 84,
  BlogPostChildrenChildren = 85,
  BlogPostChildrenChildrenChildren = 86,
  BlogPostChildrenChildrenId = 87,
  BlogPostChildrenId = 88,
  BlogPostChildrenInternalContent = 89,
  BlogPostChildrenInternalContentDigest = 90,
  BlogPostChildrenInternalDescription = 91,
  BlogPostChildrenInternalFieldOwners = 92,
  BlogPostChildrenInternalIgnoreType = 93,
  BlogPostChildrenInternalMediaType = 94,
  BlogPostChildrenInternalOwner = 95,
  BlogPostChildrenInternalType = 96,
  BlogPostChildrenParentChildren = 97,
  BlogPostChildrenParentId = 98,
  BlogPostContentChildMdxBody = 99,
  BlogPostContentChildMdxChildren = 100,
  BlogPostContentChildMdxExcerpt = 101,
  BlogPostContentChildMdxFileAbsolutePath = 102,
  BlogPostContentChildMdxHeadings = 103,
  BlogPostContentChildMdxHtml = 104,
  BlogPostContentChildMdxId = 105,
  BlogPostContentChildMdxMdxAst = 106,
  BlogPostContentChildMdxRawBody = 107,
  BlogPostContentChildMdxSlug = 108,
  BlogPostContentChildMdxTableOfContents = 109,
  BlogPostContentChildMdxTimeToRead = 110,
  BlogPostContentChildren = 111,
  BlogPostContentChildrenMdx = 112,
  BlogPostContentChildrenMdxBody = 113,
  BlogPostContentChildrenMdxChildren = 114,
  BlogPostContentChildrenMdxExcerpt = 115,
  BlogPostContentChildrenMdxFileAbsolutePath = 116,
  BlogPostContentChildrenMdxHeadings = 117,
  BlogPostContentChildrenMdxHtml = 118,
  BlogPostContentChildrenMdxId = 119,
  BlogPostContentChildrenMdxMdxAst = 120,
  BlogPostContentChildrenMdxRawBody = 121,
  BlogPostContentChildrenMdxSlug = 122,
  BlogPostContentChildrenMdxTableOfContents = 123,
  BlogPostContentChildrenMdxTimeToRead = 124,
  BlogPostContentChildrenChildren = 125,
  BlogPostContentChildrenId = 126,
  BlogPostContentContent = 127,
  BlogPostContentId = 128,
  BlogPostContentInternalContent = 129,
  BlogPostContentInternalContentDigest = 130,
  BlogPostContentInternalDescription = 131,
  BlogPostContentInternalFieldOwners = 132,
  BlogPostContentInternalIgnoreType = 133,
  BlogPostContentInternalMediaType = 134,
  BlogPostContentInternalOwner = 135,
  BlogPostContentInternalType = 136,
  BlogPostContentParentChildren = 137,
  BlogPostContentParentId = 138,
  BlogPostContentSysType = 139,
  BlogPostContentfulId = 140,
  BlogPostCreated = 141,
  BlogPostCreatedAt = 142,
  BlogPostExcerpt = 143,
  BlogPostId = 144,
  BlogPostInternalContent = 145,
  BlogPostInternalContentDigest = 146,
  BlogPostInternalDescription = 147,
  BlogPostInternalFieldOwners = 148,
  BlogPostInternalIgnoreType = 149,
  BlogPostInternalMediaType = 150,
  BlogPostInternalOwner = 151,
  BlogPostInternalType = 152,
  BlogPostNodeLocale = 153,
  BlogPostParentChildren = 154,
  BlogPostParentChildrenChildren = 155,
  BlogPostParentChildrenId = 156,
  BlogPostParentId = 157,
  BlogPostParentInternalContent = 158,
  BlogPostParentInternalContentDigest = 159,
  BlogPostParentInternalDescription = 160,
  BlogPostParentInternalFieldOwners = 161,
  BlogPostParentInternalIgnoreType = 162,
  BlogPostParentInternalMediaType = 163,
  BlogPostParentInternalOwner = 164,
  BlogPostParentInternalType = 165,
  BlogPostParentParentChildren = 166,
  BlogPostParentParentId = 167,
  BlogPostSlug = 168,
  BlogPostSpaceId = 169,
  BlogPostSysRevision = 170,
  BlogPostSysType = 171,
  BlogPostTags = 172,
  BlogPostTagsBlogPost = 173,
  BlogPostTagsBlogPostChildren = 174,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 175,
  BlogPostTagsBlogPostContentfulId = 176,
  BlogPostTagsBlogPostCreated = 177,
  BlogPostTagsBlogPostCreatedAt = 178,
  BlogPostTagsBlogPostExcerpt = 179,
  BlogPostTagsBlogPostId = 180,
  BlogPostTagsBlogPostNodeLocale = 181,
  BlogPostTagsBlogPostSlug = 182,
  BlogPostTagsBlogPostSpaceId = 183,
  BlogPostTagsBlogPostTags = 184,
  BlogPostTagsBlogPostTitle = 185,
  BlogPostTagsBlogPostUpdated = 186,
  BlogPostTagsBlogPostUpdatedAt = 187,
  BlogPostTagsChildren = 188,
  BlogPostTagsChildrenChildren = 189,
  BlogPostTagsChildrenId = 190,
  BlogPostTagsContentfulId = 191,
  BlogPostTagsCreatedAt = 192,
  BlogPostTagsId = 193,
  BlogPostTagsInternalContent = 194,
  BlogPostTagsInternalContentDigest = 195,
  BlogPostTagsInternalDescription = 196,
  BlogPostTagsInternalFieldOwners = 197,
  BlogPostTagsInternalIgnoreType = 198,
  BlogPostTagsInternalMediaType = 199,
  BlogPostTagsInternalOwner = 200,
  BlogPostTagsInternalType = 201,
  BlogPostTagsLevel = 202,
  BlogPostTagsName = 203,
  BlogPostTagsNodeLocale = 204,
  BlogPostTagsOss = 205,
  BlogPostTagsOssChildren = 206,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 207,
  BlogPostTagsOssContentfulId = 208,
  BlogPostTagsOssCreatedAt = 209,
  BlogPostTagsOssHref = 210,
  BlogPostTagsOssId = 211,
  BlogPostTagsOssName = 212,
  BlogPostTagsOssNodeLocale = 213,
  BlogPostTagsOssSpaceId = 214,
  BlogPostTagsOssStartDate = 215,
  BlogPostTagsOssSubName = 216,
  BlogPostTagsOssTags = 217,
  BlogPostTagsOssUpdatedAt = 218,
  BlogPostTagsParentChildren = 219,
  BlogPostTagsParentId = 220,
  BlogPostTagsProject = 221,
  BlogPostTagsProjectChildren = 222,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 223,
  BlogPostTagsProjectContentfulId = 224,
  BlogPostTagsProjectCreatedAt = 225,
  BlogPostTagsProjectEndDate = 226,
  BlogPostTagsProjectId = 227,
  BlogPostTagsProjectName = 228,
  BlogPostTagsProjectNodeLocale = 229,
  BlogPostTagsProjectSpaceId = 230,
  BlogPostTagsProjectStartDate = 231,
  BlogPostTagsProjectSubName = 232,
  BlogPostTagsProjectTags = 233,
  BlogPostTagsProjectUpdatedAt = 234,
  BlogPostTagsSkillMap = 235,
  BlogPostTagsSkillMapChildren = 236,
  BlogPostTagsSkillMapContentfulId = 237,
  BlogPostTagsSkillMapCreatedAt = 238,
  BlogPostTagsSkillMapExpanded = 239,
  BlogPostTagsSkillMapId = 240,
  BlogPostTagsSkillMapName = 241,
  BlogPostTagsSkillMapNodeLocale = 242,
  BlogPostTagsSkillMapSkills = 243,
  BlogPostTagsSkillMapSortKey = 244,
  BlogPostTagsSkillMapSpaceId = 245,
  BlogPostTagsSkillMapUpdatedAt = 246,
  BlogPostTagsSpaceId = 247,
  BlogPostTagsSysRevision = 248,
  BlogPostTagsSysType = 249,
  BlogPostTagsUpdatedAt = 250,
  BlogPostTitle = 251,
  BlogPostUpdated = 252,
  BlogPostUpdatedAt = 253,
  Children = 254,
  ChildrenChildren = 255,
  ChildrenChildrenChildren = 256,
  ChildrenChildrenChildrenChildren = 257,
  ChildrenChildrenChildrenId = 258,
  ChildrenChildrenId = 259,
  ChildrenChildrenInternalContent = 260,
  ChildrenChildrenInternalContentDigest = 261,
  ChildrenChildrenInternalDescription = 262,
  ChildrenChildrenInternalFieldOwners = 263,
  ChildrenChildrenInternalIgnoreType = 264,
  ChildrenChildrenInternalMediaType = 265,
  ChildrenChildrenInternalOwner = 266,
  ChildrenChildrenInternalType = 267,
  ChildrenChildrenParentChildren = 268,
  ChildrenChildrenParentId = 269,
  ChildrenId = 270,
  ChildrenInternalContent = 271,
  ChildrenInternalContentDigest = 272,
  ChildrenInternalDescription = 273,
  ChildrenInternalFieldOwners = 274,
  ChildrenInternalIgnoreType = 275,
  ChildrenInternalMediaType = 276,
  ChildrenInternalOwner = 277,
  ChildrenInternalType = 278,
  ChildrenParentChildren = 279,
  ChildrenParentChildrenChildren = 280,
  ChildrenParentChildrenId = 281,
  ChildrenParentId = 282,
  ChildrenParentInternalContent = 283,
  ChildrenParentInternalContentDigest = 284,
  ChildrenParentInternalDescription = 285,
  ChildrenParentInternalFieldOwners = 286,
  ChildrenParentInternalIgnoreType = 287,
  ChildrenParentInternalMediaType = 288,
  ChildrenParentInternalOwner = 289,
  ChildrenParentInternalType = 290,
  ChildrenParentParentChildren = 291,
  ChildrenParentParentId = 292,
  ContentfulId = 293,
  CreatedAt = 294,
  Id = 295,
  InternalContent = 296,
  InternalContentDigest = 297,
  InternalDescription = 298,
  InternalFieldOwners = 299,
  InternalIgnoreType = 300,
  InternalMediaType = 301,
  InternalOwner = 302,
  InternalType = 303,
  Level = 304,
  Name = 305,
  NodeLocale = 306,
  Oss = 307,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 308,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 309,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 310,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 311,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 312,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 313,
  OssChildContentfulOssDetailTextNodeChildMdxId = 314,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 315,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 316,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 317,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 318,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 319,
  OssChildContentfulOssDetailTextNodeChildren = 320,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 321,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 322,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 323,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 324,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 325,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 326,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 327,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 328,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 329,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 330,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 331,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 332,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 333,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 334,
  OssChildContentfulOssDetailTextNodeChildrenId = 335,
  OssChildContentfulOssDetailTextNodeDetail = 336,
  OssChildContentfulOssDetailTextNodeId = 337,
  OssChildContentfulOssDetailTextNodeInternalContent = 338,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 339,
  OssChildContentfulOssDetailTextNodeInternalDescription = 340,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 341,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 342,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 343,
  OssChildContentfulOssDetailTextNodeInternalOwner = 344,
  OssChildContentfulOssDetailTextNodeInternalType = 345,
  OssChildContentfulOssDetailTextNodeParentChildren = 346,
  OssChildContentfulOssDetailTextNodeParentId = 347,
  OssChildContentfulOssDetailTextNodeSysType = 348,
  OssChildren = 349,
  OssChildrenContentfulOssDetailTextNode = 350,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 351,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 352,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 353,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 354,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 355,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 356,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 357,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 358,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 359,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 360,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 361,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 362,
  OssChildrenContentfulOssDetailTextNodeChildren = 363,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 364,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 365,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 366,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 367,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 368,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 369,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 370,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 371,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 372,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 373,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 374,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 375,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 376,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 377,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 378,
  OssChildrenContentfulOssDetailTextNodeDetail = 379,
  OssChildrenContentfulOssDetailTextNodeId = 380,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 381,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 382,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 383,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 384,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 385,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 386,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 387,
  OssChildrenContentfulOssDetailTextNodeInternalType = 388,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 389,
  OssChildrenContentfulOssDetailTextNodeParentId = 390,
  OssChildrenContentfulOssDetailTextNodeSysType = 391,
  OssChildrenChildren = 392,
  OssChildrenChildrenChildren = 393,
  OssChildrenChildrenId = 394,
  OssChildrenId = 395,
  OssChildrenInternalContent = 396,
  OssChildrenInternalContentDigest = 397,
  OssChildrenInternalDescription = 398,
  OssChildrenInternalFieldOwners = 399,
  OssChildrenInternalIgnoreType = 400,
  OssChildrenInternalMediaType = 401,
  OssChildrenInternalOwner = 402,
  OssChildrenInternalType = 403,
  OssChildrenParentChildren = 404,
  OssChildrenParentId = 405,
  OssContentfulId = 406,
  OssCreatedAt = 407,
  OssDetailChildMdxBody = 408,
  OssDetailChildMdxChildren = 409,
  OssDetailChildMdxExcerpt = 410,
  OssDetailChildMdxFileAbsolutePath = 411,
  OssDetailChildMdxHeadings = 412,
  OssDetailChildMdxHtml = 413,
  OssDetailChildMdxId = 414,
  OssDetailChildMdxMdxAst = 415,
  OssDetailChildMdxRawBody = 416,
  OssDetailChildMdxSlug = 417,
  OssDetailChildMdxTableOfContents = 418,
  OssDetailChildMdxTimeToRead = 419,
  OssDetailChildren = 420,
  OssDetailChildrenMdx = 421,
  OssDetailChildrenMdxBody = 422,
  OssDetailChildrenMdxChildren = 423,
  OssDetailChildrenMdxExcerpt = 424,
  OssDetailChildrenMdxFileAbsolutePath = 425,
  OssDetailChildrenMdxHeadings = 426,
  OssDetailChildrenMdxHtml = 427,
  OssDetailChildrenMdxId = 428,
  OssDetailChildrenMdxMdxAst = 429,
  OssDetailChildrenMdxRawBody = 430,
  OssDetailChildrenMdxSlug = 431,
  OssDetailChildrenMdxTableOfContents = 432,
  OssDetailChildrenMdxTimeToRead = 433,
  OssDetailChildrenChildren = 434,
  OssDetailChildrenId = 435,
  OssDetailDetail = 436,
  OssDetailId = 437,
  OssDetailInternalContent = 438,
  OssDetailInternalContentDigest = 439,
  OssDetailInternalDescription = 440,
  OssDetailInternalFieldOwners = 441,
  OssDetailInternalIgnoreType = 442,
  OssDetailInternalMediaType = 443,
  OssDetailInternalOwner = 444,
  OssDetailInternalType = 445,
  OssDetailParentChildren = 446,
  OssDetailParentId = 447,
  OssDetailSysType = 448,
  OssHref = 449,
  OssIconChildContentfulIconSvgTextNodeChildren = 450,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 451,
  OssIconChildContentfulIconSvgTextNodeId = 452,
  OssIconChildContentfulIconSvgTextNodeSvg = 453,
  OssIconChildren = 454,
  OssIconChildrenContentfulIconSvgTextNode = 455,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 456,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 457,
  OssIconChildrenContentfulIconSvgTextNodeId = 458,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 459,
  OssIconChildrenChildren = 460,
  OssIconChildrenId = 461,
  OssIconContact = 462,
  OssIconContactChildren = 463,
  OssIconContactContentfulId = 464,
  OssIconContactCreatedAt = 465,
  OssIconContactHref = 466,
  OssIconContactId = 467,
  OssIconContactName = 468,
  OssIconContactNodeLocale = 469,
  OssIconContactSortKey = 470,
  OssIconContactSpaceId = 471,
  OssIconContactSubName = 472,
  OssIconContactUpdatedAt = 473,
  OssIconContentfulId = 474,
  OssIconCreatedAt = 475,
  OssIconHistory = 476,
  OssIconHistoryChildren = 477,
  OssIconHistoryContentfulId = 478,
  OssIconHistoryCreatedAt = 479,
  OssIconHistoryDate = 480,
  OssIconHistoryId = 481,
  OssIconHistoryName = 482,
  OssIconHistoryNodeLocale = 483,
  OssIconHistorySpaceId = 484,
  OssIconHistorySubName = 485,
  OssIconHistoryUpdatedAt = 486,
  OssIconId = 487,
  OssIconInternalContent = 488,
  OssIconInternalContentDigest = 489,
  OssIconInternalDescription = 490,
  OssIconInternalFieldOwners = 491,
  OssIconInternalIgnoreType = 492,
  OssIconInternalMediaType = 493,
  OssIconInternalOwner = 494,
  OssIconInternalType = 495,
  OssIconName = 496,
  OssIconNodeLocale = 497,
  OssIconOss = 498,
  OssIconOssChildren = 499,
  OssIconOssChildrenContentfulOssDetailTextNode = 500,
  OssIconOssContentfulId = 501,
  OssIconOssCreatedAt = 502,
  OssIconOssHref = 503,
  OssIconOssId = 504,
  OssIconOssName = 505,
  OssIconOssNodeLocale = 506,
  OssIconOssSpaceId = 507,
  OssIconOssStartDate = 508,
  OssIconOssSubName = 509,
  OssIconOssTags = 510,
  OssIconOssUpdatedAt = 511,
  OssIconParentChildren = 512,
  OssIconParentId = 513,
  OssIconProject = 514,
  OssIconProjectChildren = 515,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 516,
  OssIconProjectContentfulId = 517,
  OssIconProjectCreatedAt = 518,
  OssIconProjectEndDate = 519,
  OssIconProjectId = 520,
  OssIconProjectName = 521,
  OssIconProjectNodeLocale = 522,
  OssIconProjectSpaceId = 523,
  OssIconProjectStartDate = 524,
  OssIconProjectSubName = 525,
  OssIconProjectTags = 526,
  OssIconProjectUpdatedAt = 527,
  OssIconSpaceId = 528,
  OssIconSvgChildren = 529,
  OssIconSvgChildrenMdx = 530,
  OssIconSvgId = 531,
  OssIconSvgSvg = 532,
  OssIconSysRevision = 533,
  OssIconSysType = 534,
  OssIconUpdatedAt = 535,
  OssIconWhatICanDo = 536,
  OssIconWhatICanDoChildren = 537,
  OssIconWhatICanDoContentfulId = 538,
  OssIconWhatICanDoCreatedAt = 539,
  OssIconWhatICanDoId = 540,
  OssIconWhatICanDoName = 541,
  OssIconWhatICanDoNodeLocale = 542,
  OssIconWhatICanDoSortKey = 543,
  OssIconWhatICanDoSpaceId = 544,
  OssIconWhatICanDoSubName = 545,
  OssIconWhatICanDoUpdatedAt = 546,
  OssId = 547,
  OssImageChildren = 548,
  OssImageChildrenChildren = 549,
  OssImageChildrenId = 550,
  OssImageContentfulId = 551,
  OssImageCreatedAt = 552,
  OssImageDescription = 553,
  OssImageFieldsLocalFile = 554,
  OssImageFileContentType = 555,
  OssImageFileFileName = 556,
  OssImageFileUrl = 557,
  OssImageFilename = 558,
  OssImageFilesize = 559,
  OssImageGatsbyImage = 560,
  OssImageGatsbyImageData = 561,
  OssImageHeight = 562,
  OssImageId = 563,
  OssImageInternalContent = 564,
  OssImageInternalContentDigest = 565,
  OssImageInternalDescription = 566,
  OssImageInternalFieldOwners = 567,
  OssImageInternalIgnoreType = 568,
  OssImageInternalMediaType = 569,
  OssImageInternalOwner = 570,
  OssImageInternalType = 571,
  OssImageLocalFileAbsolutePath = 572,
  OssImageLocalFileAccessTime = 573,
  OssImageLocalFileAtime = 574,
  OssImageLocalFileAtimeMs = 575,
  OssImageLocalFileBase = 576,
  OssImageLocalFileBirthTime = 577,
  OssImageLocalFileBirthtime = 578,
  OssImageLocalFileBirthtimeMs = 579,
  OssImageLocalFileBlksize = 580,
  OssImageLocalFileBlocks = 581,
  OssImageLocalFileChangeTime = 582,
  OssImageLocalFileChildren = 583,
  OssImageLocalFileChildrenImageSharp = 584,
  OssImageLocalFileChildrenLocale = 585,
  OssImageLocalFileCtime = 586,
  OssImageLocalFileCtimeMs = 587,
  OssImageLocalFileDev = 588,
  OssImageLocalFileDir = 589,
  OssImageLocalFileExt = 590,
  OssImageLocalFileExtension = 591,
  OssImageLocalFileGid = 592,
  OssImageLocalFileId = 593,
  OssImageLocalFileIno = 594,
  OssImageLocalFileMode = 595,
  OssImageLocalFileModifiedTime = 596,
  OssImageLocalFileMtime = 597,
  OssImageLocalFileMtimeMs = 598,
  OssImageLocalFileName = 599,
  OssImageLocalFileNlink = 600,
  OssImageLocalFilePrettySize = 601,
  OssImageLocalFilePublicUrl = 602,
  OssImageLocalFileRdev = 603,
  OssImageLocalFileRelativeDirectory = 604,
  OssImageLocalFileRelativePath = 605,
  OssImageLocalFileRoot = 606,
  OssImageLocalFileSize = 607,
  OssImageLocalFileSourceInstanceName = 608,
  OssImageLocalFileUid = 609,
  OssImageLocalFileUrl = 610,
  OssImageMimeType = 611,
  OssImageNodeLocale = 612,
  OssImageParentChildren = 613,
  OssImageParentId = 614,
  OssImagePlaceholderUrl = 615,
  OssImagePublicUrl = 616,
  OssImageResizeHeight = 617,
  OssImageResizeSrc = 618,
  OssImageResizeWidth = 619,
  OssImageSpaceId = 620,
  OssImageSysRevision = 621,
  OssImageSysType = 622,
  OssImageTitle = 623,
  OssImageUpdatedAt = 624,
  OssImageUrl = 625,
  OssImageWidth = 626,
  OssInternalContent = 627,
  OssInternalContentDigest = 628,
  OssInternalDescription = 629,
  OssInternalFieldOwners = 630,
  OssInternalIgnoreType = 631,
  OssInternalMediaType = 632,
  OssInternalOwner = 633,
  OssInternalType = 634,
  OssName = 635,
  OssNodeLocale = 636,
  OssParentChildren = 637,
  OssParentChildrenChildren = 638,
  OssParentChildrenId = 639,
  OssParentId = 640,
  OssParentInternalContent = 641,
  OssParentInternalContentDigest = 642,
  OssParentInternalDescription = 643,
  OssParentInternalFieldOwners = 644,
  OssParentInternalIgnoreType = 645,
  OssParentInternalMediaType = 646,
  OssParentInternalOwner = 647,
  OssParentInternalType = 648,
  OssParentParentChildren = 649,
  OssParentParentId = 650,
  OssSpaceId = 651,
  OssStartDate = 652,
  OssSubName = 653,
  OssSysRevision = 654,
  OssSysType = 655,
  OssTags = 656,
  OssTagsBlogPost = 657,
  OssTagsBlogPostChildren = 658,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 659,
  OssTagsBlogPostContentfulId = 660,
  OssTagsBlogPostCreated = 661,
  OssTagsBlogPostCreatedAt = 662,
  OssTagsBlogPostExcerpt = 663,
  OssTagsBlogPostId = 664,
  OssTagsBlogPostNodeLocale = 665,
  OssTagsBlogPostSlug = 666,
  OssTagsBlogPostSpaceId = 667,
  OssTagsBlogPostTags = 668,
  OssTagsBlogPostTitle = 669,
  OssTagsBlogPostUpdated = 670,
  OssTagsBlogPostUpdatedAt = 671,
  OssTagsChildren = 672,
  OssTagsChildrenChildren = 673,
  OssTagsChildrenId = 674,
  OssTagsContentfulId = 675,
  OssTagsCreatedAt = 676,
  OssTagsId = 677,
  OssTagsInternalContent = 678,
  OssTagsInternalContentDigest = 679,
  OssTagsInternalDescription = 680,
  OssTagsInternalFieldOwners = 681,
  OssTagsInternalIgnoreType = 682,
  OssTagsInternalMediaType = 683,
  OssTagsInternalOwner = 684,
  OssTagsInternalType = 685,
  OssTagsLevel = 686,
  OssTagsName = 687,
  OssTagsNodeLocale = 688,
  OssTagsOss = 689,
  OssTagsOssChildren = 690,
  OssTagsOssChildrenContentfulOssDetailTextNode = 691,
  OssTagsOssContentfulId = 692,
  OssTagsOssCreatedAt = 693,
  OssTagsOssHref = 694,
  OssTagsOssId = 695,
  OssTagsOssName = 696,
  OssTagsOssNodeLocale = 697,
  OssTagsOssSpaceId = 698,
  OssTagsOssStartDate = 699,
  OssTagsOssSubName = 700,
  OssTagsOssTags = 701,
  OssTagsOssUpdatedAt = 702,
  OssTagsParentChildren = 703,
  OssTagsParentId = 704,
  OssTagsProject = 705,
  OssTagsProjectChildren = 706,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 707,
  OssTagsProjectContentfulId = 708,
  OssTagsProjectCreatedAt = 709,
  OssTagsProjectEndDate = 710,
  OssTagsProjectId = 711,
  OssTagsProjectName = 712,
  OssTagsProjectNodeLocale = 713,
  OssTagsProjectSpaceId = 714,
  OssTagsProjectStartDate = 715,
  OssTagsProjectSubName = 716,
  OssTagsProjectTags = 717,
  OssTagsProjectUpdatedAt = 718,
  OssTagsSkillMap = 719,
  OssTagsSkillMapChildren = 720,
  OssTagsSkillMapContentfulId = 721,
  OssTagsSkillMapCreatedAt = 722,
  OssTagsSkillMapExpanded = 723,
  OssTagsSkillMapId = 724,
  OssTagsSkillMapName = 725,
  OssTagsSkillMapNodeLocale = 726,
  OssTagsSkillMapSkills = 727,
  OssTagsSkillMapSortKey = 728,
  OssTagsSkillMapSpaceId = 729,
  OssTagsSkillMapUpdatedAt = 730,
  OssTagsSpaceId = 731,
  OssTagsSysRevision = 732,
  OssTagsSysType = 733,
  OssTagsUpdatedAt = 734,
  OssUpdatedAt = 735,
  ParentChildren = 736,
  ParentChildrenChildren = 737,
  ParentChildrenChildrenChildren = 738,
  ParentChildrenChildrenId = 739,
  ParentChildrenId = 740,
  ParentChildrenInternalContent = 741,
  ParentChildrenInternalContentDigest = 742,
  ParentChildrenInternalDescription = 743,
  ParentChildrenInternalFieldOwners = 744,
  ParentChildrenInternalIgnoreType = 745,
  ParentChildrenInternalMediaType = 746,
  ParentChildrenInternalOwner = 747,
  ParentChildrenInternalType = 748,
  ParentChildrenParentChildren = 749,
  ParentChildrenParentId = 750,
  ParentId = 751,
  ParentInternalContent = 752,
  ParentInternalContentDigest = 753,
  ParentInternalDescription = 754,
  ParentInternalFieldOwners = 755,
  ParentInternalIgnoreType = 756,
  ParentInternalMediaType = 757,
  ParentInternalOwner = 758,
  ParentInternalType = 759,
  ParentParentChildren = 760,
  ParentParentChildrenChildren = 761,
  ParentParentChildrenId = 762,
  ParentParentId = 763,
  ParentParentInternalContent = 764,
  ParentParentInternalContentDigest = 765,
  ParentParentInternalDescription = 766,
  ParentParentInternalFieldOwners = 767,
  ParentParentInternalIgnoreType = 768,
  ParentParentInternalMediaType = 769,
  ParentParentInternalOwner = 770,
  ParentParentInternalType = 771,
  ParentParentParentChildren = 772,
  ParentParentParentId = 773,
  Project = 774,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 775,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 776,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 777,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 778,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 779,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 780,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 781,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 782,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 783,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 784,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 785,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 786,
  ProjectChildContentfulProjectDetailTextNodeChildren = 787,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 788,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 789,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 790,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 791,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 792,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 793,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 794,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 795,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 796,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 797,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 798,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 799,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 800,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 801,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 802,
  ProjectChildContentfulProjectDetailTextNodeDetail = 803,
  ProjectChildContentfulProjectDetailTextNodeId = 804,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 805,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 806,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 807,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 808,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 809,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 810,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 811,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 812,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 813,
  ProjectChildContentfulProjectDetailTextNodeParentId = 814,
  ProjectChildContentfulProjectDetailTextNodeSysType = 815,
  ProjectChildren = 816,
  ProjectChildrenContentfulProjectDetailTextNode = 817,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 818,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 819,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 820,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 821,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 822,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 823,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 824,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 825,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 826,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 827,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 828,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 829,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 830,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 831,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 832,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 833,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 834,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 835,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 836,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 837,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 838,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 839,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 840,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 841,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 842,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 843,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 844,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 845,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 846,
  ProjectChildrenContentfulProjectDetailTextNodeId = 847,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 848,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 849,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 850,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 851,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 852,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 853,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 854,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 855,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 856,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 857,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 858,
  ProjectChildrenChildren = 859,
  ProjectChildrenChildrenChildren = 860,
  ProjectChildrenChildrenId = 861,
  ProjectChildrenId = 862,
  ProjectChildrenInternalContent = 863,
  ProjectChildrenInternalContentDigest = 864,
  ProjectChildrenInternalDescription = 865,
  ProjectChildrenInternalFieldOwners = 866,
  ProjectChildrenInternalIgnoreType = 867,
  ProjectChildrenInternalMediaType = 868,
  ProjectChildrenInternalOwner = 869,
  ProjectChildrenInternalType = 870,
  ProjectChildrenParentChildren = 871,
  ProjectChildrenParentId = 872,
  ProjectContentfulId = 873,
  ProjectCreatedAt = 874,
  ProjectDetailChildMdxBody = 875,
  ProjectDetailChildMdxChildren = 876,
  ProjectDetailChildMdxExcerpt = 877,
  ProjectDetailChildMdxFileAbsolutePath = 878,
  ProjectDetailChildMdxHeadings = 879,
  ProjectDetailChildMdxHtml = 880,
  ProjectDetailChildMdxId = 881,
  ProjectDetailChildMdxMdxAst = 882,
  ProjectDetailChildMdxRawBody = 883,
  ProjectDetailChildMdxSlug = 884,
  ProjectDetailChildMdxTableOfContents = 885,
  ProjectDetailChildMdxTimeToRead = 886,
  ProjectDetailChildren = 887,
  ProjectDetailChildrenMdx = 888,
  ProjectDetailChildrenMdxBody = 889,
  ProjectDetailChildrenMdxChildren = 890,
  ProjectDetailChildrenMdxExcerpt = 891,
  ProjectDetailChildrenMdxFileAbsolutePath = 892,
  ProjectDetailChildrenMdxHeadings = 893,
  ProjectDetailChildrenMdxHtml = 894,
  ProjectDetailChildrenMdxId = 895,
  ProjectDetailChildrenMdxMdxAst = 896,
  ProjectDetailChildrenMdxRawBody = 897,
  ProjectDetailChildrenMdxSlug = 898,
  ProjectDetailChildrenMdxTableOfContents = 899,
  ProjectDetailChildrenMdxTimeToRead = 900,
  ProjectDetailChildrenChildren = 901,
  ProjectDetailChildrenId = 902,
  ProjectDetailDetail = 903,
  ProjectDetailId = 904,
  ProjectDetailInternalContent = 905,
  ProjectDetailInternalContentDigest = 906,
  ProjectDetailInternalDescription = 907,
  ProjectDetailInternalFieldOwners = 908,
  ProjectDetailInternalIgnoreType = 909,
  ProjectDetailInternalMediaType = 910,
  ProjectDetailInternalOwner = 911,
  ProjectDetailInternalType = 912,
  ProjectDetailParentChildren = 913,
  ProjectDetailParentId = 914,
  ProjectDetailSysType = 915,
  ProjectEndDate = 916,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 917,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 918,
  ProjectIconChildContentfulIconSvgTextNodeId = 919,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 920,
  ProjectIconChildren = 921,
  ProjectIconChildrenContentfulIconSvgTextNode = 922,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 923,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 924,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 925,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 926,
  ProjectIconChildrenChildren = 927,
  ProjectIconChildrenId = 928,
  ProjectIconContact = 929,
  ProjectIconContactChildren = 930,
  ProjectIconContactContentfulId = 931,
  ProjectIconContactCreatedAt = 932,
  ProjectIconContactHref = 933,
  ProjectIconContactId = 934,
  ProjectIconContactName = 935,
  ProjectIconContactNodeLocale = 936,
  ProjectIconContactSortKey = 937,
  ProjectIconContactSpaceId = 938,
  ProjectIconContactSubName = 939,
  ProjectIconContactUpdatedAt = 940,
  ProjectIconContentfulId = 941,
  ProjectIconCreatedAt = 942,
  ProjectIconHistory = 943,
  ProjectIconHistoryChildren = 944,
  ProjectIconHistoryContentfulId = 945,
  ProjectIconHistoryCreatedAt = 946,
  ProjectIconHistoryDate = 947,
  ProjectIconHistoryId = 948,
  ProjectIconHistoryName = 949,
  ProjectIconHistoryNodeLocale = 950,
  ProjectIconHistorySpaceId = 951,
  ProjectIconHistorySubName = 952,
  ProjectIconHistoryUpdatedAt = 953,
  ProjectIconId = 954,
  ProjectIconInternalContent = 955,
  ProjectIconInternalContentDigest = 956,
  ProjectIconInternalDescription = 957,
  ProjectIconInternalFieldOwners = 958,
  ProjectIconInternalIgnoreType = 959,
  ProjectIconInternalMediaType = 960,
  ProjectIconInternalOwner = 961,
  ProjectIconInternalType = 962,
  ProjectIconName = 963,
  ProjectIconNodeLocale = 964,
  ProjectIconOss = 965,
  ProjectIconOssChildren = 966,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 967,
  ProjectIconOssContentfulId = 968,
  ProjectIconOssCreatedAt = 969,
  ProjectIconOssHref = 970,
  ProjectIconOssId = 971,
  ProjectIconOssName = 972,
  ProjectIconOssNodeLocale = 973,
  ProjectIconOssSpaceId = 974,
  ProjectIconOssStartDate = 975,
  ProjectIconOssSubName = 976,
  ProjectIconOssTags = 977,
  ProjectIconOssUpdatedAt = 978,
  ProjectIconParentChildren = 979,
  ProjectIconParentId = 980,
  ProjectIconProject = 981,
  ProjectIconProjectChildren = 982,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 983,
  ProjectIconProjectContentfulId = 984,
  ProjectIconProjectCreatedAt = 985,
  ProjectIconProjectEndDate = 986,
  ProjectIconProjectId = 987,
  ProjectIconProjectName = 988,
  ProjectIconProjectNodeLocale = 989,
  ProjectIconProjectSpaceId = 990,
  ProjectIconProjectStartDate = 991,
  ProjectIconProjectSubName = 992,
  ProjectIconProjectTags = 993,
  ProjectIconProjectUpdatedAt = 994,
  ProjectIconSpaceId = 995,
  ProjectIconSvgChildren = 996,
  ProjectIconSvgChildrenMdx = 997,
  ProjectIconSvgId = 998,
  ProjectIconSvgSvg = 999,
  ProjectIconSysRevision = 1000,
  ProjectIconSysType = 1001,
  ProjectIconUpdatedAt = 1002,
  ProjectIconWhatICanDo = 1003,
  ProjectIconWhatICanDoChildren = 1004,
  ProjectIconWhatICanDoContentfulId = 1005,
  ProjectIconWhatICanDoCreatedAt = 1006,
  ProjectIconWhatICanDoId = 1007,
  ProjectIconWhatICanDoName = 1008,
  ProjectIconWhatICanDoNodeLocale = 1009,
  ProjectIconWhatICanDoSortKey = 1010,
  ProjectIconWhatICanDoSpaceId = 1011,
  ProjectIconWhatICanDoSubName = 1012,
  ProjectIconWhatICanDoUpdatedAt = 1013,
  ProjectId = 1014,
  ProjectInternalContent = 1015,
  ProjectInternalContentDigest = 1016,
  ProjectInternalDescription = 1017,
  ProjectInternalFieldOwners = 1018,
  ProjectInternalIgnoreType = 1019,
  ProjectInternalMediaType = 1020,
  ProjectInternalOwner = 1021,
  ProjectInternalType = 1022,
  ProjectName = 1023,
  ProjectNodeLocale = 1024,
  ProjectParentChildren = 1025,
  ProjectParentChildrenChildren = 1026,
  ProjectParentChildrenId = 1027,
  ProjectParentId = 1028,
  ProjectParentInternalContent = 1029,
  ProjectParentInternalContentDigest = 1030,
  ProjectParentInternalDescription = 1031,
  ProjectParentInternalFieldOwners = 1032,
  ProjectParentInternalIgnoreType = 1033,
  ProjectParentInternalMediaType = 1034,
  ProjectParentInternalOwner = 1035,
  ProjectParentInternalType = 1036,
  ProjectParentParentChildren = 1037,
  ProjectParentParentId = 1038,
  ProjectSpaceId = 1039,
  ProjectStartDate = 1040,
  ProjectSubName = 1041,
  ProjectSysRevision = 1042,
  ProjectSysType = 1043,
  ProjectTags = 1044,
  ProjectTagsBlogPost = 1045,
  ProjectTagsBlogPostChildren = 1046,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1047,
  ProjectTagsBlogPostContentfulId = 1048,
  ProjectTagsBlogPostCreated = 1049,
  ProjectTagsBlogPostCreatedAt = 1050,
  ProjectTagsBlogPostExcerpt = 1051,
  ProjectTagsBlogPostId = 1052,
  ProjectTagsBlogPostNodeLocale = 1053,
  ProjectTagsBlogPostSlug = 1054,
  ProjectTagsBlogPostSpaceId = 1055,
  ProjectTagsBlogPostTags = 1056,
  ProjectTagsBlogPostTitle = 1057,
  ProjectTagsBlogPostUpdated = 1058,
  ProjectTagsBlogPostUpdatedAt = 1059,
  ProjectTagsChildren = 1060,
  ProjectTagsChildrenChildren = 1061,
  ProjectTagsChildrenId = 1062,
  ProjectTagsContentfulId = 1063,
  ProjectTagsCreatedAt = 1064,
  ProjectTagsId = 1065,
  ProjectTagsInternalContent = 1066,
  ProjectTagsInternalContentDigest = 1067,
  ProjectTagsInternalDescription = 1068,
  ProjectTagsInternalFieldOwners = 1069,
  ProjectTagsInternalIgnoreType = 1070,
  ProjectTagsInternalMediaType = 1071,
  ProjectTagsInternalOwner = 1072,
  ProjectTagsInternalType = 1073,
  ProjectTagsLevel = 1074,
  ProjectTagsName = 1075,
  ProjectTagsNodeLocale = 1076,
  ProjectTagsOss = 1077,
  ProjectTagsOssChildren = 1078,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1079,
  ProjectTagsOssContentfulId = 1080,
  ProjectTagsOssCreatedAt = 1081,
  ProjectTagsOssHref = 1082,
  ProjectTagsOssId = 1083,
  ProjectTagsOssName = 1084,
  ProjectTagsOssNodeLocale = 1085,
  ProjectTagsOssSpaceId = 1086,
  ProjectTagsOssStartDate = 1087,
  ProjectTagsOssSubName = 1088,
  ProjectTagsOssTags = 1089,
  ProjectTagsOssUpdatedAt = 1090,
  ProjectTagsParentChildren = 1091,
  ProjectTagsParentId = 1092,
  ProjectTagsProject = 1093,
  ProjectTagsProjectChildren = 1094,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1095,
  ProjectTagsProjectContentfulId = 1096,
  ProjectTagsProjectCreatedAt = 1097,
  ProjectTagsProjectEndDate = 1098,
  ProjectTagsProjectId = 1099,
  ProjectTagsProjectName = 1100,
  ProjectTagsProjectNodeLocale = 1101,
  ProjectTagsProjectSpaceId = 1102,
  ProjectTagsProjectStartDate = 1103,
  ProjectTagsProjectSubName = 1104,
  ProjectTagsProjectTags = 1105,
  ProjectTagsProjectUpdatedAt = 1106,
  ProjectTagsSkillMap = 1107,
  ProjectTagsSkillMapChildren = 1108,
  ProjectTagsSkillMapContentfulId = 1109,
  ProjectTagsSkillMapCreatedAt = 1110,
  ProjectTagsSkillMapExpanded = 1111,
  ProjectTagsSkillMapId = 1112,
  ProjectTagsSkillMapName = 1113,
  ProjectTagsSkillMapNodeLocale = 1114,
  ProjectTagsSkillMapSkills = 1115,
  ProjectTagsSkillMapSortKey = 1116,
  ProjectTagsSkillMapSpaceId = 1117,
  ProjectTagsSkillMapUpdatedAt = 1118,
  ProjectTagsSpaceId = 1119,
  ProjectTagsSysRevision = 1120,
  ProjectTagsSysType = 1121,
  ProjectTagsUpdatedAt = 1122,
  ProjectUpdatedAt = 1123,
  SkillMap = 1124,
  SkillMapChildren = 1125,
  SkillMapChildrenChildren = 1126,
  SkillMapChildrenChildrenChildren = 1127,
  SkillMapChildrenChildrenId = 1128,
  SkillMapChildrenId = 1129,
  SkillMapChildrenInternalContent = 1130,
  SkillMapChildrenInternalContentDigest = 1131,
  SkillMapChildrenInternalDescription = 1132,
  SkillMapChildrenInternalFieldOwners = 1133,
  SkillMapChildrenInternalIgnoreType = 1134,
  SkillMapChildrenInternalMediaType = 1135,
  SkillMapChildrenInternalOwner = 1136,
  SkillMapChildrenInternalType = 1137,
  SkillMapChildrenParentChildren = 1138,
  SkillMapChildrenParentId = 1139,
  SkillMapContentfulId = 1140,
  SkillMapCreatedAt = 1141,
  SkillMapExpanded = 1142,
  SkillMapId = 1143,
  SkillMapInternalContent = 1144,
  SkillMapInternalContentDigest = 1145,
  SkillMapInternalDescription = 1146,
  SkillMapInternalFieldOwners = 1147,
  SkillMapInternalIgnoreType = 1148,
  SkillMapInternalMediaType = 1149,
  SkillMapInternalOwner = 1150,
  SkillMapInternalType = 1151,
  SkillMapName = 1152,
  SkillMapNodeLocale = 1153,
  SkillMapParentChildren = 1154,
  SkillMapParentChildrenChildren = 1155,
  SkillMapParentChildrenId = 1156,
  SkillMapParentId = 1157,
  SkillMapParentInternalContent = 1158,
  SkillMapParentInternalContentDigest = 1159,
  SkillMapParentInternalDescription = 1160,
  SkillMapParentInternalFieldOwners = 1161,
  SkillMapParentInternalIgnoreType = 1162,
  SkillMapParentInternalMediaType = 1163,
  SkillMapParentInternalOwner = 1164,
  SkillMapParentInternalType = 1165,
  SkillMapParentParentChildren = 1166,
  SkillMapParentParentId = 1167,
  SkillMapSkills = 1168,
  SkillMapSkillsBlogPost = 1169,
  SkillMapSkillsBlogPostChildren = 1170,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1171,
  SkillMapSkillsBlogPostContentfulId = 1172,
  SkillMapSkillsBlogPostCreated = 1173,
  SkillMapSkillsBlogPostCreatedAt = 1174,
  SkillMapSkillsBlogPostExcerpt = 1175,
  SkillMapSkillsBlogPostId = 1176,
  SkillMapSkillsBlogPostNodeLocale = 1177,
  SkillMapSkillsBlogPostSlug = 1178,
  SkillMapSkillsBlogPostSpaceId = 1179,
  SkillMapSkillsBlogPostTags = 1180,
  SkillMapSkillsBlogPostTitle = 1181,
  SkillMapSkillsBlogPostUpdated = 1182,
  SkillMapSkillsBlogPostUpdatedAt = 1183,
  SkillMapSkillsChildren = 1184,
  SkillMapSkillsChildrenChildren = 1185,
  SkillMapSkillsChildrenId = 1186,
  SkillMapSkillsContentfulId = 1187,
  SkillMapSkillsCreatedAt = 1188,
  SkillMapSkillsId = 1189,
  SkillMapSkillsInternalContent = 1190,
  SkillMapSkillsInternalContentDigest = 1191,
  SkillMapSkillsInternalDescription = 1192,
  SkillMapSkillsInternalFieldOwners = 1193,
  SkillMapSkillsInternalIgnoreType = 1194,
  SkillMapSkillsInternalMediaType = 1195,
  SkillMapSkillsInternalOwner = 1196,
  SkillMapSkillsInternalType = 1197,
  SkillMapSkillsLevel = 1198,
  SkillMapSkillsName = 1199,
  SkillMapSkillsNodeLocale = 1200,
  SkillMapSkillsOss = 1201,
  SkillMapSkillsOssChildren = 1202,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 1203,
  SkillMapSkillsOssContentfulId = 1204,
  SkillMapSkillsOssCreatedAt = 1205,
  SkillMapSkillsOssHref = 1206,
  SkillMapSkillsOssId = 1207,
  SkillMapSkillsOssName = 1208,
  SkillMapSkillsOssNodeLocale = 1209,
  SkillMapSkillsOssSpaceId = 1210,
  SkillMapSkillsOssStartDate = 1211,
  SkillMapSkillsOssSubName = 1212,
  SkillMapSkillsOssTags = 1213,
  SkillMapSkillsOssUpdatedAt = 1214,
  SkillMapSkillsParentChildren = 1215,
  SkillMapSkillsParentId = 1216,
  SkillMapSkillsProject = 1217,
  SkillMapSkillsProjectChildren = 1218,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 1219,
  SkillMapSkillsProjectContentfulId = 1220,
  SkillMapSkillsProjectCreatedAt = 1221,
  SkillMapSkillsProjectEndDate = 1222,
  SkillMapSkillsProjectId = 1223,
  SkillMapSkillsProjectName = 1224,
  SkillMapSkillsProjectNodeLocale = 1225,
  SkillMapSkillsProjectSpaceId = 1226,
  SkillMapSkillsProjectStartDate = 1227,
  SkillMapSkillsProjectSubName = 1228,
  SkillMapSkillsProjectTags = 1229,
  SkillMapSkillsProjectUpdatedAt = 1230,
  SkillMapSkillsSkillMap = 1231,
  SkillMapSkillsSkillMapChildren = 1232,
  SkillMapSkillsSkillMapContentfulId = 1233,
  SkillMapSkillsSkillMapCreatedAt = 1234,
  SkillMapSkillsSkillMapExpanded = 1235,
  SkillMapSkillsSkillMapId = 1236,
  SkillMapSkillsSkillMapName = 1237,
  SkillMapSkillsSkillMapNodeLocale = 1238,
  SkillMapSkillsSkillMapSkills = 1239,
  SkillMapSkillsSkillMapSortKey = 1240,
  SkillMapSkillsSkillMapSpaceId = 1241,
  SkillMapSkillsSkillMapUpdatedAt = 1242,
  SkillMapSkillsSpaceId = 1243,
  SkillMapSkillsSysRevision = 1244,
  SkillMapSkillsSysType = 1245,
  SkillMapSkillsUpdatedAt = 1246,
  SkillMapSortKey = 1247,
  SkillMapSpaceId = 1248,
  SkillMapSysRevision = 1249,
  SkillMapSysType = 1250,
  SkillMapUpdatedAt = 1251,
  SpaceId = 1252,
  SysContentTypeSysId = 1253,
  SysContentTypeSysLinkType = 1254,
  SysContentTypeSysType = 1255,
  SysRevision = 1256,
  SysType = 1257,
  UpdatedAt = 1258
}

export type ContentfulTagFilterInput = {
  blog_post: InputMaybe<ContentfulBlogPostFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  level: InputMaybe<IntQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  oss: InputMaybe<ContentfulOssFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  project: InputMaybe<ContentfulProjectFilterListInput>;
  skill_map: InputMaybe<ContentfulSkillMapFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulTagSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulTagFilterListInput = {
  elemMatch: InputMaybe<ContentfulTagFilterInput>;
};

export type ContentfulTagGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulTagEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulTagGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulTag>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulTagGroupConnectionDistinctArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagGroupConnectionGroupArgs = {
  field: ContentfulTagFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulTagFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulTagSys = {
  contentType: Maybe<ContentfulTagSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulTagSysContentType = {
  sys: Maybe<ContentfulTagSysContentTypeSys>;
};

export type ContentfulTagSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulTagSysContentTypeSysFilterInput>;
};

export type ContentfulTagSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulTagSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulTagSysFilterInput = {
  contentType: InputMaybe<ContentfulTagSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulWhatICanDo = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  icon: Maybe<ContentfulIcon>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  sortKey: Maybe<Scalars['Int']>;
  spaceId: Maybe<Scalars['String']>;
  subName: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulWhatICanDoSys>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulWhatICanDoCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulWhatICanDoUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulWhatICanDoConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulWhatICanDoEdge>;
  group: Array<ContentfulWhatICanDoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulWhatICanDo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulWhatICanDoConnectionDistinctArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoConnectionGroupArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulWhatICanDo>;
  node: ContentfulWhatICanDo;
  previous: Maybe<ContentfulWhatICanDo>;
};

export enum ContentfulWhatICanDoFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  ContentfulId = 39,
  CreatedAt = 40,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 41,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 42,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 43,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 44,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 45,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 46,
  IconChildContentfulIconSvgTextNodeChildMdxId = 47,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 48,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 49,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 50,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 51,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 52,
  IconChildContentfulIconSvgTextNodeChildren = 53,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 54,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 55,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 56,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 57,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 58,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 59,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 60,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 61,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 62,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 63,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 64,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 65,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 66,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 67,
  IconChildContentfulIconSvgTextNodeChildrenId = 68,
  IconChildContentfulIconSvgTextNodeId = 69,
  IconChildContentfulIconSvgTextNodeInternalContent = 70,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 71,
  IconChildContentfulIconSvgTextNodeInternalDescription = 72,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 73,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 74,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 75,
  IconChildContentfulIconSvgTextNodeInternalOwner = 76,
  IconChildContentfulIconSvgTextNodeInternalType = 77,
  IconChildContentfulIconSvgTextNodeParentChildren = 78,
  IconChildContentfulIconSvgTextNodeParentId = 79,
  IconChildContentfulIconSvgTextNodeSvg = 80,
  IconChildContentfulIconSvgTextNodeSysType = 81,
  IconChildren = 82,
  IconChildrenContentfulIconSvgTextNode = 83,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 84,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 85,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 86,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 87,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 88,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 89,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 90,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 91,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 92,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 93,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 94,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 95,
  IconChildrenContentfulIconSvgTextNodeChildren = 96,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 97,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 98,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 99,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 100,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 101,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 102,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 103,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 104,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 105,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 106,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 107,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 108,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 109,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 110,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 111,
  IconChildrenContentfulIconSvgTextNodeId = 112,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 113,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 114,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 115,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 116,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 117,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 118,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 119,
  IconChildrenContentfulIconSvgTextNodeInternalType = 120,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 121,
  IconChildrenContentfulIconSvgTextNodeParentId = 122,
  IconChildrenContentfulIconSvgTextNodeSvg = 123,
  IconChildrenContentfulIconSvgTextNodeSysType = 124,
  IconChildrenChildren = 125,
  IconChildrenChildrenChildren = 126,
  IconChildrenChildrenId = 127,
  IconChildrenId = 128,
  IconChildrenInternalContent = 129,
  IconChildrenInternalContentDigest = 130,
  IconChildrenInternalDescription = 131,
  IconChildrenInternalFieldOwners = 132,
  IconChildrenInternalIgnoreType = 133,
  IconChildrenInternalMediaType = 134,
  IconChildrenInternalOwner = 135,
  IconChildrenInternalType = 136,
  IconChildrenParentChildren = 137,
  IconChildrenParentId = 138,
  IconContact = 139,
  IconContactChildren = 140,
  IconContactChildrenChildren = 141,
  IconContactChildrenId = 142,
  IconContactContentfulId = 143,
  IconContactCreatedAt = 144,
  IconContactHref = 145,
  IconContactIconSvgDarkChildren = 146,
  IconContactIconSvgDarkContentfulId = 147,
  IconContactIconSvgDarkCreatedAt = 148,
  IconContactIconSvgDarkDescription = 149,
  IconContactIconSvgDarkFilename = 150,
  IconContactIconSvgDarkFilesize = 151,
  IconContactIconSvgDarkGatsbyImage = 152,
  IconContactIconSvgDarkGatsbyImageData = 153,
  IconContactIconSvgDarkHeight = 154,
  IconContactIconSvgDarkId = 155,
  IconContactIconSvgDarkMimeType = 156,
  IconContactIconSvgDarkNodeLocale = 157,
  IconContactIconSvgDarkPlaceholderUrl = 158,
  IconContactIconSvgDarkPublicUrl = 159,
  IconContactIconSvgDarkSpaceId = 160,
  IconContactIconSvgDarkTitle = 161,
  IconContactIconSvgDarkUpdatedAt = 162,
  IconContactIconSvgDarkUrl = 163,
  IconContactIconSvgDarkWidth = 164,
  IconContactIconSvgLightChildren = 165,
  IconContactIconSvgLightContentfulId = 166,
  IconContactIconSvgLightCreatedAt = 167,
  IconContactIconSvgLightDescription = 168,
  IconContactIconSvgLightFilename = 169,
  IconContactIconSvgLightFilesize = 170,
  IconContactIconSvgLightGatsbyImage = 171,
  IconContactIconSvgLightGatsbyImageData = 172,
  IconContactIconSvgLightHeight = 173,
  IconContactIconSvgLightId = 174,
  IconContactIconSvgLightMimeType = 175,
  IconContactIconSvgLightNodeLocale = 176,
  IconContactIconSvgLightPlaceholderUrl = 177,
  IconContactIconSvgLightPublicUrl = 178,
  IconContactIconSvgLightSpaceId = 179,
  IconContactIconSvgLightTitle = 180,
  IconContactIconSvgLightUpdatedAt = 181,
  IconContactIconSvgLightUrl = 182,
  IconContactIconSvgLightWidth = 183,
  IconContactIconChildren = 184,
  IconContactIconChildrenContentfulIconSvgTextNode = 185,
  IconContactIconContact = 186,
  IconContactIconContentfulId = 187,
  IconContactIconCreatedAt = 188,
  IconContactIconHistory = 189,
  IconContactIconId = 190,
  IconContactIconName = 191,
  IconContactIconNodeLocale = 192,
  IconContactIconOss = 193,
  IconContactIconProject = 194,
  IconContactIconSpaceId = 195,
  IconContactIconUpdatedAt = 196,
  IconContactIconWhatICanDo = 197,
  IconContactId = 198,
  IconContactInternalContent = 199,
  IconContactInternalContentDigest = 200,
  IconContactInternalDescription = 201,
  IconContactInternalFieldOwners = 202,
  IconContactInternalIgnoreType = 203,
  IconContactInternalMediaType = 204,
  IconContactInternalOwner = 205,
  IconContactInternalType = 206,
  IconContactName = 207,
  IconContactNodeLocale = 208,
  IconContactParentChildren = 209,
  IconContactParentId = 210,
  IconContactSortKey = 211,
  IconContactSpaceId = 212,
  IconContactSubName = 213,
  IconContactSysRevision = 214,
  IconContactSysType = 215,
  IconContactUpdatedAt = 216,
  IconContentfulId = 217,
  IconCreatedAt = 218,
  IconHistory = 219,
  IconHistoryChildren = 220,
  IconHistoryChildrenChildren = 221,
  IconHistoryChildrenId = 222,
  IconHistoryContentfulId = 223,
  IconHistoryCreatedAt = 224,
  IconHistoryDate = 225,
  IconHistoryIconChildren = 226,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 227,
  IconHistoryIconContact = 228,
  IconHistoryIconContentfulId = 229,
  IconHistoryIconCreatedAt = 230,
  IconHistoryIconHistory = 231,
  IconHistoryIconId = 232,
  IconHistoryIconName = 233,
  IconHistoryIconNodeLocale = 234,
  IconHistoryIconOss = 235,
  IconHistoryIconProject = 236,
  IconHistoryIconSpaceId = 237,
  IconHistoryIconUpdatedAt = 238,
  IconHistoryIconWhatICanDo = 239,
  IconHistoryId = 240,
  IconHistoryInternalContent = 241,
  IconHistoryInternalContentDigest = 242,
  IconHistoryInternalDescription = 243,
  IconHistoryInternalFieldOwners = 244,
  IconHistoryInternalIgnoreType = 245,
  IconHistoryInternalMediaType = 246,
  IconHistoryInternalOwner = 247,
  IconHistoryInternalType = 248,
  IconHistoryName = 249,
  IconHistoryNodeLocale = 250,
  IconHistoryParentChildren = 251,
  IconHistoryParentId = 252,
  IconHistorySpaceId = 253,
  IconHistorySubName = 254,
  IconHistorySysRevision = 255,
  IconHistorySysType = 256,
  IconHistoryUpdatedAt = 257,
  IconId = 258,
  IconInternalContent = 259,
  IconInternalContentDigest = 260,
  IconInternalDescription = 261,
  IconInternalFieldOwners = 262,
  IconInternalIgnoreType = 263,
  IconInternalMediaType = 264,
  IconInternalOwner = 265,
  IconInternalType = 266,
  IconName = 267,
  IconNodeLocale = 268,
  IconOss = 269,
  IconOssChildContentfulOssDetailTextNodeChildren = 270,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 271,
  IconOssChildContentfulOssDetailTextNodeDetail = 272,
  IconOssChildContentfulOssDetailTextNodeId = 273,
  IconOssChildren = 274,
  IconOssChildrenContentfulOssDetailTextNode = 275,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 276,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 277,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 278,
  IconOssChildrenContentfulOssDetailTextNodeId = 279,
  IconOssChildrenChildren = 280,
  IconOssChildrenId = 281,
  IconOssContentfulId = 282,
  IconOssCreatedAt = 283,
  IconOssDetailChildren = 284,
  IconOssDetailChildrenMdx = 285,
  IconOssDetailDetail = 286,
  IconOssDetailId = 287,
  IconOssHref = 288,
  IconOssIconChildren = 289,
  IconOssIconChildrenContentfulIconSvgTextNode = 290,
  IconOssIconContact = 291,
  IconOssIconContentfulId = 292,
  IconOssIconCreatedAt = 293,
  IconOssIconHistory = 294,
  IconOssIconId = 295,
  IconOssIconName = 296,
  IconOssIconNodeLocale = 297,
  IconOssIconOss = 298,
  IconOssIconProject = 299,
  IconOssIconSpaceId = 300,
  IconOssIconUpdatedAt = 301,
  IconOssIconWhatICanDo = 302,
  IconOssId = 303,
  IconOssImageChildren = 304,
  IconOssImageContentfulId = 305,
  IconOssImageCreatedAt = 306,
  IconOssImageDescription = 307,
  IconOssImageFilename = 308,
  IconOssImageFilesize = 309,
  IconOssImageGatsbyImage = 310,
  IconOssImageGatsbyImageData = 311,
  IconOssImageHeight = 312,
  IconOssImageId = 313,
  IconOssImageMimeType = 314,
  IconOssImageNodeLocale = 315,
  IconOssImagePlaceholderUrl = 316,
  IconOssImagePublicUrl = 317,
  IconOssImageSpaceId = 318,
  IconOssImageTitle = 319,
  IconOssImageUpdatedAt = 320,
  IconOssImageUrl = 321,
  IconOssImageWidth = 322,
  IconOssInternalContent = 323,
  IconOssInternalContentDigest = 324,
  IconOssInternalDescription = 325,
  IconOssInternalFieldOwners = 326,
  IconOssInternalIgnoreType = 327,
  IconOssInternalMediaType = 328,
  IconOssInternalOwner = 329,
  IconOssInternalType = 330,
  IconOssName = 331,
  IconOssNodeLocale = 332,
  IconOssParentChildren = 333,
  IconOssParentId = 334,
  IconOssSpaceId = 335,
  IconOssStartDate = 336,
  IconOssSubName = 337,
  IconOssSysRevision = 338,
  IconOssSysType = 339,
  IconOssTags = 340,
  IconOssTagsBlogPost = 341,
  IconOssTagsChildren = 342,
  IconOssTagsContentfulId = 343,
  IconOssTagsCreatedAt = 344,
  IconOssTagsId = 345,
  IconOssTagsLevel = 346,
  IconOssTagsName = 347,
  IconOssTagsNodeLocale = 348,
  IconOssTagsOss = 349,
  IconOssTagsProject = 350,
  IconOssTagsSkillMap = 351,
  IconOssTagsSpaceId = 352,
  IconOssTagsUpdatedAt = 353,
  IconOssUpdatedAt = 354,
  IconParentChildren = 355,
  IconParentChildrenChildren = 356,
  IconParentChildrenId = 357,
  IconParentId = 358,
  IconParentInternalContent = 359,
  IconParentInternalContentDigest = 360,
  IconParentInternalDescription = 361,
  IconParentInternalFieldOwners = 362,
  IconParentInternalIgnoreType = 363,
  IconParentInternalMediaType = 364,
  IconParentInternalOwner = 365,
  IconParentInternalType = 366,
  IconParentParentChildren = 367,
  IconParentParentId = 368,
  IconProject = 369,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 370,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 371,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 372,
  IconProjectChildContentfulProjectDetailTextNodeId = 373,
  IconProjectChildren = 374,
  IconProjectChildrenContentfulProjectDetailTextNode = 375,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 376,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 377,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 378,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 379,
  IconProjectChildrenChildren = 380,
  IconProjectChildrenId = 381,
  IconProjectContentfulId = 382,
  IconProjectCreatedAt = 383,
  IconProjectDetailChildren = 384,
  IconProjectDetailChildrenMdx = 385,
  IconProjectDetailDetail = 386,
  IconProjectDetailId = 387,
  IconProjectEndDate = 388,
  IconProjectIconChildren = 389,
  IconProjectIconChildrenContentfulIconSvgTextNode = 390,
  IconProjectIconContact = 391,
  IconProjectIconContentfulId = 392,
  IconProjectIconCreatedAt = 393,
  IconProjectIconHistory = 394,
  IconProjectIconId = 395,
  IconProjectIconName = 396,
  IconProjectIconNodeLocale = 397,
  IconProjectIconOss = 398,
  IconProjectIconProject = 399,
  IconProjectIconSpaceId = 400,
  IconProjectIconUpdatedAt = 401,
  IconProjectIconWhatICanDo = 402,
  IconProjectId = 403,
  IconProjectInternalContent = 404,
  IconProjectInternalContentDigest = 405,
  IconProjectInternalDescription = 406,
  IconProjectInternalFieldOwners = 407,
  IconProjectInternalIgnoreType = 408,
  IconProjectInternalMediaType = 409,
  IconProjectInternalOwner = 410,
  IconProjectInternalType = 411,
  IconProjectName = 412,
  IconProjectNodeLocale = 413,
  IconProjectParentChildren = 414,
  IconProjectParentId = 415,
  IconProjectSpaceId = 416,
  IconProjectStartDate = 417,
  IconProjectSubName = 418,
  IconProjectSysRevision = 419,
  IconProjectSysType = 420,
  IconProjectTags = 421,
  IconProjectTagsBlogPost = 422,
  IconProjectTagsChildren = 423,
  IconProjectTagsContentfulId = 424,
  IconProjectTagsCreatedAt = 425,
  IconProjectTagsId = 426,
  IconProjectTagsLevel = 427,
  IconProjectTagsName = 428,
  IconProjectTagsNodeLocale = 429,
  IconProjectTagsOss = 430,
  IconProjectTagsProject = 431,
  IconProjectTagsSkillMap = 432,
  IconProjectTagsSpaceId = 433,
  IconProjectTagsUpdatedAt = 434,
  IconProjectUpdatedAt = 435,
  IconSpaceId = 436,
  IconSvgChildMdxBody = 437,
  IconSvgChildMdxChildren = 438,
  IconSvgChildMdxExcerpt = 439,
  IconSvgChildMdxFileAbsolutePath = 440,
  IconSvgChildMdxHeadings = 441,
  IconSvgChildMdxHtml = 442,
  IconSvgChildMdxId = 443,
  IconSvgChildMdxMdxAst = 444,
  IconSvgChildMdxRawBody = 445,
  IconSvgChildMdxSlug = 446,
  IconSvgChildMdxTableOfContents = 447,
  IconSvgChildMdxTimeToRead = 448,
  IconSvgChildren = 449,
  IconSvgChildrenMdx = 450,
  IconSvgChildrenMdxBody = 451,
  IconSvgChildrenMdxChildren = 452,
  IconSvgChildrenMdxExcerpt = 453,
  IconSvgChildrenMdxFileAbsolutePath = 454,
  IconSvgChildrenMdxHeadings = 455,
  IconSvgChildrenMdxHtml = 456,
  IconSvgChildrenMdxId = 457,
  IconSvgChildrenMdxMdxAst = 458,
  IconSvgChildrenMdxRawBody = 459,
  IconSvgChildrenMdxSlug = 460,
  IconSvgChildrenMdxTableOfContents = 461,
  IconSvgChildrenMdxTimeToRead = 462,
  IconSvgChildrenChildren = 463,
  IconSvgChildrenId = 464,
  IconSvgId = 465,
  IconSvgInternalContent = 466,
  IconSvgInternalContentDigest = 467,
  IconSvgInternalDescription = 468,
  IconSvgInternalFieldOwners = 469,
  IconSvgInternalIgnoreType = 470,
  IconSvgInternalMediaType = 471,
  IconSvgInternalOwner = 472,
  IconSvgInternalType = 473,
  IconSvgParentChildren = 474,
  IconSvgParentId = 475,
  IconSvgSvg = 476,
  IconSvgSysType = 477,
  IconSysRevision = 478,
  IconSysType = 479,
  IconUpdatedAt = 480,
  IconWhatICanDo = 481,
  IconWhatICanDoChildren = 482,
  IconWhatICanDoChildrenChildren = 483,
  IconWhatICanDoChildrenId = 484,
  IconWhatICanDoContentfulId = 485,
  IconWhatICanDoCreatedAt = 486,
  IconWhatICanDoIconChildren = 487,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 488,
  IconWhatICanDoIconContact = 489,
  IconWhatICanDoIconContentfulId = 490,
  IconWhatICanDoIconCreatedAt = 491,
  IconWhatICanDoIconHistory = 492,
  IconWhatICanDoIconId = 493,
  IconWhatICanDoIconName = 494,
  IconWhatICanDoIconNodeLocale = 495,
  IconWhatICanDoIconOss = 496,
  IconWhatICanDoIconProject = 497,
  IconWhatICanDoIconSpaceId = 498,
  IconWhatICanDoIconUpdatedAt = 499,
  IconWhatICanDoIconWhatICanDo = 500,
  IconWhatICanDoId = 501,
  IconWhatICanDoInternalContent = 502,
  IconWhatICanDoInternalContentDigest = 503,
  IconWhatICanDoInternalDescription = 504,
  IconWhatICanDoInternalFieldOwners = 505,
  IconWhatICanDoInternalIgnoreType = 506,
  IconWhatICanDoInternalMediaType = 507,
  IconWhatICanDoInternalOwner = 508,
  IconWhatICanDoInternalType = 509,
  IconWhatICanDoName = 510,
  IconWhatICanDoNodeLocale = 511,
  IconWhatICanDoParentChildren = 512,
  IconWhatICanDoParentId = 513,
  IconWhatICanDoSortKey = 514,
  IconWhatICanDoSpaceId = 515,
  IconWhatICanDoSubName = 516,
  IconWhatICanDoSysRevision = 517,
  IconWhatICanDoSysType = 518,
  IconWhatICanDoUpdatedAt = 519,
  Id = 520,
  InternalContent = 521,
  InternalContentDigest = 522,
  InternalDescription = 523,
  InternalFieldOwners = 524,
  InternalIgnoreType = 525,
  InternalMediaType = 526,
  InternalOwner = 527,
  InternalType = 528,
  Name = 529,
  NodeLocale = 530,
  ParentChildren = 531,
  ParentChildrenChildren = 532,
  ParentChildrenChildrenChildren = 533,
  ParentChildrenChildrenId = 534,
  ParentChildrenId = 535,
  ParentChildrenInternalContent = 536,
  ParentChildrenInternalContentDigest = 537,
  ParentChildrenInternalDescription = 538,
  ParentChildrenInternalFieldOwners = 539,
  ParentChildrenInternalIgnoreType = 540,
  ParentChildrenInternalMediaType = 541,
  ParentChildrenInternalOwner = 542,
  ParentChildrenInternalType = 543,
  ParentChildrenParentChildren = 544,
  ParentChildrenParentId = 545,
  ParentId = 546,
  ParentInternalContent = 547,
  ParentInternalContentDigest = 548,
  ParentInternalDescription = 549,
  ParentInternalFieldOwners = 550,
  ParentInternalIgnoreType = 551,
  ParentInternalMediaType = 552,
  ParentInternalOwner = 553,
  ParentInternalType = 554,
  ParentParentChildren = 555,
  ParentParentChildrenChildren = 556,
  ParentParentChildrenId = 557,
  ParentParentId = 558,
  ParentParentInternalContent = 559,
  ParentParentInternalContentDigest = 560,
  ParentParentInternalDescription = 561,
  ParentParentInternalFieldOwners = 562,
  ParentParentInternalIgnoreType = 563,
  ParentParentInternalMediaType = 564,
  ParentParentInternalOwner = 565,
  ParentParentInternalType = 566,
  ParentParentParentChildren = 567,
  ParentParentParentId = 568,
  SortKey = 569,
  SpaceId = 570,
  SubName = 571,
  SysContentTypeSysId = 572,
  SysContentTypeSysLinkType = 573,
  SysContentTypeSysType = 574,
  SysRevision = 575,
  SysType = 576,
  UpdatedAt = 577
}

export type ContentfulWhatICanDoFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulWhatICanDoSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulWhatICanDoFilterListInput = {
  elemMatch: InputMaybe<ContentfulWhatICanDoFilterInput>;
};

export type ContentfulWhatICanDoGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulWhatICanDoEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulWhatICanDoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulWhatICanDo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulWhatICanDoGroupConnectionDistinctArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoGroupConnectionGroupArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulWhatICanDoFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulWhatICanDoSys = {
  contentType: Maybe<ContentfulWhatICanDoSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoSysContentType = {
  sys: Maybe<ContentfulWhatICanDoSysContentTypeSys>;
};

export type ContentfulWhatICanDoSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulWhatICanDoSysContentTypeSysFilterInput>;
};

export type ContentfulWhatICanDoSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulWhatICanDoSysFilterInput = {
  contentType: InputMaybe<ContentfulWhatICanDoSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars['Date']>;
  gt: InputMaybe<Scalars['Date']>;
  gte: InputMaybe<Scalars['Date']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt: InputMaybe<Scalars['Date']>;
  lte: InputMaybe<Scalars['Date']>;
  ne: InputMaybe<Scalars['Date']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
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
  parent: Maybe<Node>;
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
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 0,
  AccessTime = 1,
  Atime = 2,
  AtimeMs = 3,
  Base = 4,
  BirthTime = 5,
  Birthtime = 6,
  BirthtimeMs = 7,
  ChangeTime = 8,
  Children = 9,
  ChildrenChildren = 10,
  ChildrenChildrenChildren = 11,
  ChildrenChildrenChildrenChildren = 12,
  ChildrenChildrenChildrenId = 13,
  ChildrenChildrenId = 14,
  ChildrenChildrenInternalContent = 15,
  ChildrenChildrenInternalContentDigest = 16,
  ChildrenChildrenInternalDescription = 17,
  ChildrenChildrenInternalFieldOwners = 18,
  ChildrenChildrenInternalIgnoreType = 19,
  ChildrenChildrenInternalMediaType = 20,
  ChildrenChildrenInternalOwner = 21,
  ChildrenChildrenInternalType = 22,
  ChildrenChildrenParentChildren = 23,
  ChildrenChildrenParentId = 24,
  ChildrenId = 25,
  ChildrenInternalContent = 26,
  ChildrenInternalContentDigest = 27,
  ChildrenInternalDescription = 28,
  ChildrenInternalFieldOwners = 29,
  ChildrenInternalIgnoreType = 30,
  ChildrenInternalMediaType = 31,
  ChildrenInternalOwner = 32,
  ChildrenInternalType = 33,
  ChildrenParentChildren = 34,
  ChildrenParentChildrenChildren = 35,
  ChildrenParentChildrenId = 36,
  ChildrenParentId = 37,
  ChildrenParentInternalContent = 38,
  ChildrenParentInternalContentDigest = 39,
  ChildrenParentInternalDescription = 40,
  ChildrenParentInternalFieldOwners = 41,
  ChildrenParentInternalIgnoreType = 42,
  ChildrenParentInternalMediaType = 43,
  ChildrenParentInternalOwner = 44,
  ChildrenParentInternalType = 45,
  ChildrenParentParentChildren = 46,
  ChildrenParentParentId = 47,
  Ctime = 48,
  CtimeMs = 49,
  Dev = 50,
  Dir = 51,
  Ext = 52,
  Extension = 53,
  Gid = 54,
  Id = 55,
  Ino = 56,
  InternalContent = 57,
  InternalContentDigest = 58,
  InternalDescription = 59,
  InternalFieldOwners = 60,
  InternalIgnoreType = 61,
  InternalMediaType = 62,
  InternalOwner = 63,
  InternalType = 64,
  Mode = 65,
  ModifiedTime = 66,
  Mtime = 67,
  MtimeMs = 68,
  Name = 69,
  Nlink = 70,
  ParentChildren = 71,
  ParentChildrenChildren = 72,
  ParentChildrenChildrenChildren = 73,
  ParentChildrenChildrenId = 74,
  ParentChildrenId = 75,
  ParentChildrenInternalContent = 76,
  ParentChildrenInternalContentDigest = 77,
  ParentChildrenInternalDescription = 78,
  ParentChildrenInternalFieldOwners = 79,
  ParentChildrenInternalIgnoreType = 80,
  ParentChildrenInternalMediaType = 81,
  ParentChildrenInternalOwner = 82,
  ParentChildrenInternalType = 83,
  ParentChildrenParentChildren = 84,
  ParentChildrenParentId = 85,
  ParentId = 86,
  ParentInternalContent = 87,
  ParentInternalContentDigest = 88,
  ParentInternalDescription = 89,
  ParentInternalFieldOwners = 90,
  ParentInternalIgnoreType = 91,
  ParentInternalMediaType = 92,
  ParentInternalOwner = 93,
  ParentInternalType = 94,
  ParentParentChildren = 95,
  ParentParentChildrenChildren = 96,
  ParentParentChildrenId = 97,
  ParentParentId = 98,
  ParentParentInternalContent = 99,
  ParentParentInternalContentDigest = 100,
  ParentParentInternalDescription = 101,
  ParentParentInternalFieldOwners = 102,
  ParentParentInternalIgnoreType = 103,
  ParentParentInternalMediaType = 104,
  ParentParentInternalOwner = 105,
  ParentParentInternalType = 106,
  ParentParentParentChildren = 107,
  ParentParentParentId = 108,
  PrettySize = 109,
  Rdev = 110,
  RelativeDirectory = 111,
  RelativePath = 112,
  Root = 113,
  Size = 114,
  SourceInstanceName = 115,
  Uid = 116
}

export type DirectoryFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity: InputMaybe<Scalars['Int']>;
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
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  /** Returns the first child node of type Locale or null if there are no children of given type on this node */
  childLocale: Maybe<Locale>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type Locale */
  childrenLocale: Maybe<Array<Maybe<Locale>>>;
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
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  svg: Maybe<InlineSvg>;
  uid: Scalars['Int'];
  url: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 0,
  AccessTime = 1,
  Atime = 2,
  AtimeMs = 3,
  Base = 4,
  BirthTime = 5,
  Birthtime = 6,
  BirthtimeMs = 7,
  Blksize = 8,
  Blocks = 9,
  ChangeTime = 10,
  ChildImageSharpChildren = 11,
  ChildImageSharpChildrenChildren = 12,
  ChildImageSharpChildrenChildrenChildren = 13,
  ChildImageSharpChildrenChildrenId = 14,
  ChildImageSharpChildrenId = 15,
  ChildImageSharpChildrenInternalContent = 16,
  ChildImageSharpChildrenInternalContentDigest = 17,
  ChildImageSharpChildrenInternalDescription = 18,
  ChildImageSharpChildrenInternalFieldOwners = 19,
  ChildImageSharpChildrenInternalIgnoreType = 20,
  ChildImageSharpChildrenInternalMediaType = 21,
  ChildImageSharpChildrenInternalOwner = 22,
  ChildImageSharpChildrenInternalType = 23,
  ChildImageSharpChildrenParentChildren = 24,
  ChildImageSharpChildrenParentId = 25,
  ChildImageSharpFixedAspectRatio = 26,
  ChildImageSharpFixedBase64 = 27,
  ChildImageSharpFixedHeight = 28,
  ChildImageSharpFixedOriginalName = 29,
  ChildImageSharpFixedSrc = 30,
  ChildImageSharpFixedSrcSet = 31,
  ChildImageSharpFixedSrcSetWebp = 32,
  ChildImageSharpFixedSrcWebp = 33,
  ChildImageSharpFixedTracedSvg = 34,
  ChildImageSharpFixedWidth = 35,
  ChildImageSharpFluidAspectRatio = 36,
  ChildImageSharpFluidBase64 = 37,
  ChildImageSharpFluidOriginalImg = 38,
  ChildImageSharpFluidOriginalName = 39,
  ChildImageSharpFluidPresentationHeight = 40,
  ChildImageSharpFluidPresentationWidth = 41,
  ChildImageSharpFluidSizes = 42,
  ChildImageSharpFluidSrc = 43,
  ChildImageSharpFluidSrcSet = 44,
  ChildImageSharpFluidSrcSetWebp = 45,
  ChildImageSharpFluidSrcWebp = 46,
  ChildImageSharpFluidTracedSvg = 47,
  ChildImageSharpGatsbyImageData = 48,
  ChildImageSharpId = 49,
  ChildImageSharpInternalContent = 50,
  ChildImageSharpInternalContentDigest = 51,
  ChildImageSharpInternalDescription = 52,
  ChildImageSharpInternalFieldOwners = 53,
  ChildImageSharpInternalIgnoreType = 54,
  ChildImageSharpInternalMediaType = 55,
  ChildImageSharpInternalOwner = 56,
  ChildImageSharpInternalType = 57,
  ChildImageSharpOriginalHeight = 58,
  ChildImageSharpOriginalSrc = 59,
  ChildImageSharpOriginalWidth = 60,
  ChildImageSharpParentChildren = 61,
  ChildImageSharpParentChildrenChildren = 62,
  ChildImageSharpParentChildrenId = 63,
  ChildImageSharpParentId = 64,
  ChildImageSharpParentInternalContent = 65,
  ChildImageSharpParentInternalContentDigest = 66,
  ChildImageSharpParentInternalDescription = 67,
  ChildImageSharpParentInternalFieldOwners = 68,
  ChildImageSharpParentInternalIgnoreType = 69,
  ChildImageSharpParentInternalMediaType = 70,
  ChildImageSharpParentInternalOwner = 71,
  ChildImageSharpParentInternalType = 72,
  ChildImageSharpParentParentChildren = 73,
  ChildImageSharpParentParentId = 74,
  ChildImageSharpResizeAspectRatio = 75,
  ChildImageSharpResizeHeight = 76,
  ChildImageSharpResizeOriginalName = 77,
  ChildImageSharpResizeSrc = 78,
  ChildImageSharpResizeTracedSvg = 79,
  ChildImageSharpResizeWidth = 80,
  ChildLocaleChildren = 81,
  ChildLocaleChildrenChildren = 82,
  ChildLocaleChildrenChildrenChildren = 83,
  ChildLocaleChildrenChildrenId = 84,
  ChildLocaleChildrenId = 85,
  ChildLocaleChildrenInternalContent = 86,
  ChildLocaleChildrenInternalContentDigest = 87,
  ChildLocaleChildrenInternalDescription = 88,
  ChildLocaleChildrenInternalFieldOwners = 89,
  ChildLocaleChildrenInternalIgnoreType = 90,
  ChildLocaleChildrenInternalMediaType = 91,
  ChildLocaleChildrenInternalOwner = 92,
  ChildLocaleChildrenInternalType = 93,
  ChildLocaleChildrenParentChildren = 94,
  ChildLocaleChildrenParentId = 95,
  ChildLocaleData = 96,
  ChildLocaleFileAbsolutePath = 97,
  ChildLocaleId = 98,
  ChildLocaleInternalContent = 99,
  ChildLocaleInternalContentDigest = 100,
  ChildLocaleInternalDescription = 101,
  ChildLocaleInternalFieldOwners = 102,
  ChildLocaleInternalIgnoreType = 103,
  ChildLocaleInternalMediaType = 104,
  ChildLocaleInternalOwner = 105,
  ChildLocaleInternalType = 106,
  ChildLocaleLanguage = 107,
  ChildLocaleNs = 108,
  ChildLocaleParentChildren = 109,
  ChildLocaleParentChildrenChildren = 110,
  ChildLocaleParentChildrenId = 111,
  ChildLocaleParentId = 112,
  ChildLocaleParentInternalContent = 113,
  ChildLocaleParentInternalContentDigest = 114,
  ChildLocaleParentInternalDescription = 115,
  ChildLocaleParentInternalFieldOwners = 116,
  ChildLocaleParentInternalIgnoreType = 117,
  ChildLocaleParentInternalMediaType = 118,
  ChildLocaleParentInternalOwner = 119,
  ChildLocaleParentInternalType = 120,
  ChildLocaleParentParentChildren = 121,
  ChildLocaleParentParentId = 122,
  Children = 123,
  ChildrenImageSharp = 124,
  ChildrenImageSharpChildren = 125,
  ChildrenImageSharpChildrenChildren = 126,
  ChildrenImageSharpChildrenChildrenChildren = 127,
  ChildrenImageSharpChildrenChildrenId = 128,
  ChildrenImageSharpChildrenId = 129,
  ChildrenImageSharpChildrenInternalContent = 130,
  ChildrenImageSharpChildrenInternalContentDigest = 131,
  ChildrenImageSharpChildrenInternalDescription = 132,
  ChildrenImageSharpChildrenInternalFieldOwners = 133,
  ChildrenImageSharpChildrenInternalIgnoreType = 134,
  ChildrenImageSharpChildrenInternalMediaType = 135,
  ChildrenImageSharpChildrenInternalOwner = 136,
  ChildrenImageSharpChildrenInternalType = 137,
  ChildrenImageSharpChildrenParentChildren = 138,
  ChildrenImageSharpChildrenParentId = 139,
  ChildrenImageSharpFixedAspectRatio = 140,
  ChildrenImageSharpFixedBase64 = 141,
  ChildrenImageSharpFixedHeight = 142,
  ChildrenImageSharpFixedOriginalName = 143,
  ChildrenImageSharpFixedSrc = 144,
  ChildrenImageSharpFixedSrcSet = 145,
  ChildrenImageSharpFixedSrcSetWebp = 146,
  ChildrenImageSharpFixedSrcWebp = 147,
  ChildrenImageSharpFixedTracedSvg = 148,
  ChildrenImageSharpFixedWidth = 149,
  ChildrenImageSharpFluidAspectRatio = 150,
  ChildrenImageSharpFluidBase64 = 151,
  ChildrenImageSharpFluidOriginalImg = 152,
  ChildrenImageSharpFluidOriginalName = 153,
  ChildrenImageSharpFluidPresentationHeight = 154,
  ChildrenImageSharpFluidPresentationWidth = 155,
  ChildrenImageSharpFluidSizes = 156,
  ChildrenImageSharpFluidSrc = 157,
  ChildrenImageSharpFluidSrcSet = 158,
  ChildrenImageSharpFluidSrcSetWebp = 159,
  ChildrenImageSharpFluidSrcWebp = 160,
  ChildrenImageSharpFluidTracedSvg = 161,
  ChildrenImageSharpGatsbyImageData = 162,
  ChildrenImageSharpId = 163,
  ChildrenImageSharpInternalContent = 164,
  ChildrenImageSharpInternalContentDigest = 165,
  ChildrenImageSharpInternalDescription = 166,
  ChildrenImageSharpInternalFieldOwners = 167,
  ChildrenImageSharpInternalIgnoreType = 168,
  ChildrenImageSharpInternalMediaType = 169,
  ChildrenImageSharpInternalOwner = 170,
  ChildrenImageSharpInternalType = 171,
  ChildrenImageSharpOriginalHeight = 172,
  ChildrenImageSharpOriginalSrc = 173,
  ChildrenImageSharpOriginalWidth = 174,
  ChildrenImageSharpParentChildren = 175,
  ChildrenImageSharpParentChildrenChildren = 176,
  ChildrenImageSharpParentChildrenId = 177,
  ChildrenImageSharpParentId = 178,
  ChildrenImageSharpParentInternalContent = 179,
  ChildrenImageSharpParentInternalContentDigest = 180,
  ChildrenImageSharpParentInternalDescription = 181,
  ChildrenImageSharpParentInternalFieldOwners = 182,
  ChildrenImageSharpParentInternalIgnoreType = 183,
  ChildrenImageSharpParentInternalMediaType = 184,
  ChildrenImageSharpParentInternalOwner = 185,
  ChildrenImageSharpParentInternalType = 186,
  ChildrenImageSharpParentParentChildren = 187,
  ChildrenImageSharpParentParentId = 188,
  ChildrenImageSharpResizeAspectRatio = 189,
  ChildrenImageSharpResizeHeight = 190,
  ChildrenImageSharpResizeOriginalName = 191,
  ChildrenImageSharpResizeSrc = 192,
  ChildrenImageSharpResizeTracedSvg = 193,
  ChildrenImageSharpResizeWidth = 194,
  ChildrenLocale = 195,
  ChildrenLocaleChildren = 196,
  ChildrenLocaleChildrenChildren = 197,
  ChildrenLocaleChildrenChildrenChildren = 198,
  ChildrenLocaleChildrenChildrenId = 199,
  ChildrenLocaleChildrenId = 200,
  ChildrenLocaleChildrenInternalContent = 201,
  ChildrenLocaleChildrenInternalContentDigest = 202,
  ChildrenLocaleChildrenInternalDescription = 203,
  ChildrenLocaleChildrenInternalFieldOwners = 204,
  ChildrenLocaleChildrenInternalIgnoreType = 205,
  ChildrenLocaleChildrenInternalMediaType = 206,
  ChildrenLocaleChildrenInternalOwner = 207,
  ChildrenLocaleChildrenInternalType = 208,
  ChildrenLocaleChildrenParentChildren = 209,
  ChildrenLocaleChildrenParentId = 210,
  ChildrenLocaleData = 211,
  ChildrenLocaleFileAbsolutePath = 212,
  ChildrenLocaleId = 213,
  ChildrenLocaleInternalContent = 214,
  ChildrenLocaleInternalContentDigest = 215,
  ChildrenLocaleInternalDescription = 216,
  ChildrenLocaleInternalFieldOwners = 217,
  ChildrenLocaleInternalIgnoreType = 218,
  ChildrenLocaleInternalMediaType = 219,
  ChildrenLocaleInternalOwner = 220,
  ChildrenLocaleInternalType = 221,
  ChildrenLocaleLanguage = 222,
  ChildrenLocaleNs = 223,
  ChildrenLocaleParentChildren = 224,
  ChildrenLocaleParentChildrenChildren = 225,
  ChildrenLocaleParentChildrenId = 226,
  ChildrenLocaleParentId = 227,
  ChildrenLocaleParentInternalContent = 228,
  ChildrenLocaleParentInternalContentDigest = 229,
  ChildrenLocaleParentInternalDescription = 230,
  ChildrenLocaleParentInternalFieldOwners = 231,
  ChildrenLocaleParentInternalIgnoreType = 232,
  ChildrenLocaleParentInternalMediaType = 233,
  ChildrenLocaleParentInternalOwner = 234,
  ChildrenLocaleParentInternalType = 235,
  ChildrenLocaleParentParentChildren = 236,
  ChildrenLocaleParentParentId = 237,
  ChildrenChildren = 238,
  ChildrenChildrenChildren = 239,
  ChildrenChildrenChildrenChildren = 240,
  ChildrenChildrenChildrenId = 241,
  ChildrenChildrenId = 242,
  ChildrenChildrenInternalContent = 243,
  ChildrenChildrenInternalContentDigest = 244,
  ChildrenChildrenInternalDescription = 245,
  ChildrenChildrenInternalFieldOwners = 246,
  ChildrenChildrenInternalIgnoreType = 247,
  ChildrenChildrenInternalMediaType = 248,
  ChildrenChildrenInternalOwner = 249,
  ChildrenChildrenInternalType = 250,
  ChildrenChildrenParentChildren = 251,
  ChildrenChildrenParentId = 252,
  ChildrenId = 253,
  ChildrenInternalContent = 254,
  ChildrenInternalContentDigest = 255,
  ChildrenInternalDescription = 256,
  ChildrenInternalFieldOwners = 257,
  ChildrenInternalIgnoreType = 258,
  ChildrenInternalMediaType = 259,
  ChildrenInternalOwner = 260,
  ChildrenInternalType = 261,
  ChildrenParentChildren = 262,
  ChildrenParentChildrenChildren = 263,
  ChildrenParentChildrenId = 264,
  ChildrenParentId = 265,
  ChildrenParentInternalContent = 266,
  ChildrenParentInternalContentDigest = 267,
  ChildrenParentInternalDescription = 268,
  ChildrenParentInternalFieldOwners = 269,
  ChildrenParentInternalIgnoreType = 270,
  ChildrenParentInternalMediaType = 271,
  ChildrenParentInternalOwner = 272,
  ChildrenParentInternalType = 273,
  ChildrenParentParentChildren = 274,
  ChildrenParentParentId = 275,
  Ctime = 276,
  CtimeMs = 277,
  Dev = 278,
  Dir = 279,
  Ext = 280,
  Extension = 281,
  Gid = 282,
  Id = 283,
  Ino = 284,
  InternalContent = 285,
  InternalContentDigest = 286,
  InternalDescription = 287,
  InternalFieldOwners = 288,
  InternalIgnoreType = 289,
  InternalMediaType = 290,
  InternalOwner = 291,
  InternalType = 292,
  Mode = 293,
  ModifiedTime = 294,
  Mtime = 295,
  MtimeMs = 296,
  Name = 297,
  Nlink = 298,
  ParentChildren = 299,
  ParentChildrenChildren = 300,
  ParentChildrenChildrenChildren = 301,
  ParentChildrenChildrenId = 302,
  ParentChildrenId = 303,
  ParentChildrenInternalContent = 304,
  ParentChildrenInternalContentDigest = 305,
  ParentChildrenInternalDescription = 306,
  ParentChildrenInternalFieldOwners = 307,
  ParentChildrenInternalIgnoreType = 308,
  ParentChildrenInternalMediaType = 309,
  ParentChildrenInternalOwner = 310,
  ParentChildrenInternalType = 311,
  ParentChildrenParentChildren = 312,
  ParentChildrenParentId = 313,
  ParentId = 314,
  ParentInternalContent = 315,
  ParentInternalContentDigest = 316,
  ParentInternalDescription = 317,
  ParentInternalFieldOwners = 318,
  ParentInternalIgnoreType = 319,
  ParentInternalMediaType = 320,
  ParentInternalOwner = 321,
  ParentInternalType = 322,
  ParentParentChildren = 323,
  ParentParentChildrenChildren = 324,
  ParentParentChildrenId = 325,
  ParentParentId = 326,
  ParentParentInternalContent = 327,
  ParentParentInternalContentDigest = 328,
  ParentParentInternalDescription = 329,
  ParentParentInternalFieldOwners = 330,
  ParentParentInternalIgnoreType = 331,
  ParentParentInternalMediaType = 332,
  ParentParentInternalOwner = 333,
  ParentParentInternalType = 334,
  ParentParentParentChildren = 335,
  ParentParentParentId = 336,
  PrettySize = 337,
  PublicUrl = 338,
  Rdev = 339,
  RelativeDirectory = 340,
  RelativePath = 341,
  Root = 342,
  Size = 343,
  SourceInstanceName = 344,
  Uid = 345,
  Url = 346
}

export type FileFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  childLocale: InputMaybe<LocaleFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  childrenLocale: InputMaybe<LocaleFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};

export type FileGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  ne: InputMaybe<Scalars['Float']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  Auto = 0,
  Avif = 1,
  Jpg = 2,
  NoChange = 3,
  Png = 4,
  Webp = 5
}

export enum GatsbyImageLayout {
  Constrained = 0,
  Fixed = 1,
  FullWidth = 2
}

export enum GatsbyImagePlaceholder {
  Blurred = 0,
  DominantColor = 1,
  None = 2,
  TracedSvg = 3
}

export enum HeadingsMdx {
  H1 = 0,
  H2 = 1,
  H3 = 2,
  H4 = 3,
  H5 = 4,
  H6 = 5
}

export enum ImageCropFocus {
  Attention = 0,
  Center = 1,
  East = 2,
  Entropy = 3,
  North = 4,
  Northeast = 5,
  Northwest = 6,
  South = 7,
  Southeast = 8,
  Southwest = 9,
  West = 10
}

export enum ImageFit {
  Contain = 0,
  Cover = 1,
  Fill = 2,
  Inside = 3,
  Outside = 4
}

export enum ImageFormat {
  Auto = 0,
  Avif = 1,
  Jpg = 2,
  NoChange = 3,
  Png = 4,
  Webp = 5
}

export enum ImageLayout {
  Constrained = 0,
  Fixed = 1,
  FullWidth = 2
}

export enum ImagePlaceholder {
  Blurred = 0,
  DominantColor = 1,
  None = 2,
  TracedSvg = 3
}

export enum ImageResizingBehavior {
  /** Crop a part of the original image to match the specified size. */
  Crop = 0,
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  Fill = 1,
  NoChange = 2,
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = 3,
  /** Scale the image regardless of the original aspect ratio. */
  Scale = 4,
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = 5
}

export type ImageSharp = Node & {
  children: Array<Node>;
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original: Maybe<ImageSharpOriginal>;
  parent: Maybe<Node>;
  resize: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AvifOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PngOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  FixedAspectRatio = 39,
  FixedBase64 = 40,
  FixedHeight = 41,
  FixedOriginalName = 42,
  FixedSrc = 43,
  FixedSrcSet = 44,
  FixedSrcSetWebp = 45,
  FixedSrcWebp = 46,
  FixedTracedSvg = 47,
  FixedWidth = 48,
  FluidAspectRatio = 49,
  FluidBase64 = 50,
  FluidOriginalImg = 51,
  FluidOriginalName = 52,
  FluidPresentationHeight = 53,
  FluidPresentationWidth = 54,
  FluidSizes = 55,
  FluidSrc = 56,
  FluidSrcSet = 57,
  FluidSrcSetWebp = 58,
  FluidSrcWebp = 59,
  FluidTracedSvg = 60,
  GatsbyImageData = 61,
  Id = 62,
  InternalContent = 63,
  InternalContentDigest = 64,
  InternalDescription = 65,
  InternalFieldOwners = 66,
  InternalIgnoreType = 67,
  InternalMediaType = 68,
  InternalOwner = 69,
  InternalType = 70,
  OriginalHeight = 71,
  OriginalSrc = 72,
  OriginalWidth = 73,
  ParentChildren = 74,
  ParentChildrenChildren = 75,
  ParentChildrenChildrenChildren = 76,
  ParentChildrenChildrenId = 77,
  ParentChildrenId = 78,
  ParentChildrenInternalContent = 79,
  ParentChildrenInternalContentDigest = 80,
  ParentChildrenInternalDescription = 81,
  ParentChildrenInternalFieldOwners = 82,
  ParentChildrenInternalIgnoreType = 83,
  ParentChildrenInternalMediaType = 84,
  ParentChildrenInternalOwner = 85,
  ParentChildrenInternalType = 86,
  ParentChildrenParentChildren = 87,
  ParentChildrenParentId = 88,
  ParentId = 89,
  ParentInternalContent = 90,
  ParentInternalContentDigest = 91,
  ParentInternalDescription = 92,
  ParentInternalFieldOwners = 93,
  ParentInternalIgnoreType = 94,
  ParentInternalMediaType = 95,
  ParentInternalOwner = 96,
  ParentInternalType = 97,
  ParentParentChildren = 98,
  ParentParentChildrenChildren = 99,
  ParentParentChildrenId = 100,
  ParentParentId = 101,
  ParentParentInternalContent = 102,
  ParentParentInternalContentDigest = 103,
  ParentParentInternalDescription = 104,
  ParentParentInternalFieldOwners = 105,
  ParentParentInternalIgnoreType = 106,
  ParentParentInternalMediaType = 107,
  ParentParentInternalOwner = 108,
  ParentParentInternalType = 109,
  ParentParentParentChildren = 110,
  ParentParentParentId = 111,
  ResizeAspectRatio = 112,
  ResizeHeight = 113,
  ResizeOriginalName = 114,
  ResizeSrc = 115,
  ResizeTracedSvg = 116,
  ResizeWidth = 117
}

export type ImageSharpFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  aspectRatio: Maybe<Scalars['Float']>;
  base64: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  aspectRatio: Scalars['Float'];
  base64: Maybe<Scalars['String']>;
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  originalImg: InputMaybe<StringQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  presentationHeight: InputMaybe<IntQueryOperatorInput>;
  presentationWidth: InputMaybe<IntQueryOperatorInput>;
  sizes: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  aspectRatio: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Int']>;
  originalName: Maybe<Scalars['String']>;
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type InlineSvg = {
  absolutePath: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  dataURI: Maybe<Scalars['String']>;
  originalContent: Maybe<Scalars['String']>;
  relativePath: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  ne: InputMaybe<Scalars['Int']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>;
  contentDigest: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  fieldOwners: InputMaybe<StringQueryOperatorInput>;
  ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  mediaType: InputMaybe<StringQueryOperatorInput>;
  owner: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive: InputMaybe<Scalars['Boolean']>;
  quality: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars['JSON']>;
  glob: InputMaybe<Scalars['JSON']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne: InputMaybe<Scalars['JSON']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex: InputMaybe<Scalars['JSON']>;
};

export type Locale = Node & {
  children: Array<Node>;
  data: Maybe<Scalars['String']>;
  fileAbsolutePath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  language: Maybe<Scalars['String']>;
  ns: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
};

export type LocaleConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<LocaleEdge>;
  group: Array<LocaleGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type LocaleConnectionDistinctArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionGroupArgs = {
  field: LocaleFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<Locale>;
  node: Locale;
  previous: Maybe<Locale>;
};

export enum LocaleFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  Data = 39,
  FileAbsolutePath = 40,
  Id = 41,
  InternalContent = 42,
  InternalContentDigest = 43,
  InternalDescription = 44,
  InternalFieldOwners = 45,
  InternalIgnoreType = 46,
  InternalMediaType = 47,
  InternalOwner = 48,
  InternalType = 49,
  Language = 50,
  Ns = 51,
  ParentChildren = 52,
  ParentChildrenChildren = 53,
  ParentChildrenChildrenChildren = 54,
  ParentChildrenChildrenId = 55,
  ParentChildrenId = 56,
  ParentChildrenInternalContent = 57,
  ParentChildrenInternalContentDigest = 58,
  ParentChildrenInternalDescription = 59,
  ParentChildrenInternalFieldOwners = 60,
  ParentChildrenInternalIgnoreType = 61,
  ParentChildrenInternalMediaType = 62,
  ParentChildrenInternalOwner = 63,
  ParentChildrenInternalType = 64,
  ParentChildrenParentChildren = 65,
  ParentChildrenParentId = 66,
  ParentId = 67,
  ParentInternalContent = 68,
  ParentInternalContentDigest = 69,
  ParentInternalDescription = 70,
  ParentInternalFieldOwners = 71,
  ParentInternalIgnoreType = 72,
  ParentInternalMediaType = 73,
  ParentInternalOwner = 74,
  ParentInternalType = 75,
  ParentParentChildren = 76,
  ParentParentChildrenChildren = 77,
  ParentParentChildrenId = 78,
  ParentParentId = 79,
  ParentParentInternalContent = 80,
  ParentParentInternalContentDigest = 81,
  ParentParentInternalDescription = 82,
  ParentParentInternalFieldOwners = 83,
  ParentParentInternalIgnoreType = 84,
  ParentParentInternalMediaType = 85,
  ParentParentInternalOwner = 86,
  ParentParentInternalType = 87,
  ParentParentParentChildren = 88,
  ParentParentParentId = 89
}

export type LocaleFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  language: InputMaybe<StringQueryOperatorInput>;
  ns: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type LocaleFilterListInput = {
  elemMatch: InputMaybe<LocaleFilterInput>;
};

export type LocaleGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<LocaleEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<LocaleGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type LocaleGroupConnectionDistinctArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleGroupConnectionGroupArgs = {
  field: LocaleFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<LocaleFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Mdx = Node & {
  body: Scalars['String'];
  children: Array<Node>;
  excerpt: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter: Maybe<MdxFrontmatter>;
  headings: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  mdxAST: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  rawBody: Scalars['String'];
  slug: Maybe<Scalars['String']>;
  tableOfContents: Maybe<Scalars['JSON']>;
  timeToRead: Maybe<Scalars['Int']>;
  wordCount: Maybe<MdxWordCount>;
};


export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth: InputMaybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth: InputMaybe<Scalars['Int']>;
};

export type MdxConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  group: Array<MdxGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next: Maybe<Mdx>;
  node: Mdx;
  previous: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
  Body = 0,
  Children = 1,
  ChildrenChildren = 2,
  ChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenChildren = 4,
  ChildrenChildrenChildrenId = 5,
  ChildrenChildrenId = 6,
  ChildrenChildrenInternalContent = 7,
  ChildrenChildrenInternalContentDigest = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalDescription = 20,
  ChildrenInternalFieldOwners = 21,
  ChildrenInternalIgnoreType = 22,
  ChildrenInternalMediaType = 23,
  ChildrenInternalOwner = 24,
  ChildrenInternalType = 25,
  ChildrenParentChildren = 26,
  ChildrenParentChildrenChildren = 27,
  ChildrenParentChildrenId = 28,
  ChildrenParentId = 29,
  ChildrenParentInternalContent = 30,
  ChildrenParentInternalContentDigest = 31,
  ChildrenParentInternalDescription = 32,
  ChildrenParentInternalFieldOwners = 33,
  ChildrenParentInternalIgnoreType = 34,
  ChildrenParentInternalMediaType = 35,
  ChildrenParentInternalOwner = 36,
  ChildrenParentInternalType = 37,
  ChildrenParentParentChildren = 38,
  ChildrenParentParentId = 39,
  Excerpt = 40,
  FileAbsolutePath = 41,
  FrontmatterTitle = 42,
  Headings = 43,
  HeadingsDepth = 44,
  HeadingsValue = 45,
  Html = 46,
  Id = 47,
  InternalContent = 48,
  InternalContentDigest = 49,
  InternalDescription = 50,
  InternalFieldOwners = 51,
  InternalIgnoreType = 52,
  InternalMediaType = 53,
  InternalOwner = 54,
  InternalType = 55,
  MdxAst = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalDescription = 64,
  ParentChildrenInternalFieldOwners = 65,
  ParentChildrenInternalIgnoreType = 66,
  ParentChildrenInternalMediaType = 67,
  ParentChildrenInternalOwner = 68,
  ParentChildrenInternalType = 69,
  ParentChildrenParentChildren = 70,
  ParentChildrenParentId = 71,
  ParentId = 72,
  ParentInternalContent = 73,
  ParentInternalContentDigest = 74,
  ParentInternalDescription = 75,
  ParentInternalFieldOwners = 76,
  ParentInternalIgnoreType = 77,
  ParentInternalMediaType = 78,
  ParentInternalOwner = 79,
  ParentInternalType = 80,
  ParentParentChildren = 81,
  ParentParentChildrenChildren = 82,
  ParentParentChildrenId = 83,
  ParentParentId = 84,
  ParentParentInternalContent = 85,
  ParentParentInternalContentDigest = 86,
  ParentParentInternalDescription = 87,
  ParentParentInternalFieldOwners = 88,
  ParentParentInternalIgnoreType = 89,
  ParentParentInternalMediaType = 90,
  ParentParentInternalOwner = 91,
  ParentParentInternalType = 92,
  ParentParentParentChildren = 93,
  ParentParentParentId = 94,
  RawBody = 95,
  Slug = 96,
  TableOfContents = 97,
  TimeToRead = 98,
  WordCountParagraphs = 99,
  WordCountSentences = 100,
  WordCountWords = 101
}

export type MdxFilterInput = {
  body: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>;
  frontmatter: InputMaybe<MdxFrontmatterFilterInput>;
  headings: InputMaybe<MdxHeadingMdxFilterListInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mdxAST: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  rawBody: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  tableOfContents: InputMaybe<JsonQueryOperatorInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  wordCount: InputMaybe<MdxWordCountFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch: InputMaybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
};

export type MdxFrontmatterFilterInput = {
  title: InputMaybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<MdxGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  depth: Maybe<Scalars['Int']>;
  value: Maybe<Scalars['String']>;
};

export type MdxHeadingMdxFilterInput = {
  depth: InputMaybe<IntQueryOperatorInput>;
  value: InputMaybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch: InputMaybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields: InputMaybe<Array<InputMaybe<MdxFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  paragraphs: Maybe<Scalars['Int']>;
  sentences: Maybe<Scalars['Int']>;
  words: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs: InputMaybe<IntQueryOperatorInput>;
  sentences: InputMaybe<IntQueryOperatorInput>;
  words: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};

export type NodeFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax: InputMaybe<Scalars['Float']>;
  background: InputMaybe<Scalars['String']>;
  blackOnWhite: InputMaybe<Scalars['Boolean']>;
  color: InputMaybe<Scalars['String']>;
  optCurve: InputMaybe<Scalars['Boolean']>;
  optTolerance: InputMaybe<Scalars['Float']>;
  threshold: InputMaybe<Scalars['Int']>;
  turdSize: InputMaybe<Scalars['Float']>;
  turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 0,
  TurnpolicyLeft = 1,
  TurnpolicyMajority = 2,
  TurnpolicyMinority = 3,
  TurnpolicyRight = 4,
  TurnpolicyWhite = 5
}

export type Query = {
  allContentfulAsset: ContentfulAssetConnection;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  allContentfulBlogPostContentTextNode: ContentfulBlogPostContentTextNodeConnection;
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
  allMdx: MdxConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  contentfulAsset: Maybe<ContentfulAsset>;
  contentfulBlogPost: Maybe<ContentfulBlogPost>;
  contentfulBlogPostContentTextNode: Maybe<ContentfulBlogPostContentTextNode>;
  contentfulContact: Maybe<ContentfulContact>;
  contentfulContentType: Maybe<ContentfulContentType>;
  contentfulEntry: Maybe<ContentfulEntry>;
  contentfulHello: Maybe<ContentfulHello>;
  contentfulHistory: Maybe<ContentfulHistory>;
  contentfulIcon: Maybe<ContentfulIcon>;
  contentfulIconSvgTextNode: Maybe<ContentfulIconSvgTextNode>;
  contentfulOss: Maybe<ContentfulOss>;
  contentfulOssDetailTextNode: Maybe<ContentfulOssDetailTextNode>;
  contentfulProject: Maybe<ContentfulProject>;
  contentfulProjectDetailTextNode: Maybe<ContentfulProjectDetailTextNode>;
  contentfulQualification: Maybe<ContentfulQualification>;
  contentfulQualificationMap: Maybe<ContentfulQualificationMap>;
  contentfulSkillMap: Maybe<ContentfulSkillMap>;
  contentfulTag: Maybe<ContentfulTag>;
  contentfulWhatICanDo: Maybe<ContentfulWhatICanDo>;
  directory: Maybe<Directory>;
  file: Maybe<File>;
  imageSharp: Maybe<ImageSharp>;
  locale: Maybe<Locale>;
  mdx: Maybe<Mdx>;
  site: Maybe<Site>;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  siteFunction: Maybe<SiteFunction>;
  sitePage: Maybe<SitePage>;
  sitePlugin: Maybe<SitePlugin>;
};


export type QueryAllContentfulAssetArgs = {
  filter: InputMaybe<ContentfulAssetFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulAssetSortInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter: InputMaybe<ContentfulBlogPostFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulBlogPostSortInput>;
};


export type QueryAllContentfulBlogPostContentTextNodeArgs = {
  filter: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulBlogPostContentTextNodeSortInput>;
};


export type QueryAllContentfulContactArgs = {
  filter: InputMaybe<ContentfulContactFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulContactSortInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter: InputMaybe<ContentfulContentTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulContentTypeSortInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter: InputMaybe<ContentfulEntryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulEntrySortInput>;
};


export type QueryAllContentfulHelloArgs = {
  filter: InputMaybe<ContentfulHelloFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulHelloSortInput>;
};


export type QueryAllContentfulHistoryArgs = {
  filter: InputMaybe<ContentfulHistoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulHistorySortInput>;
};


export type QueryAllContentfulIconArgs = {
  filter: InputMaybe<ContentfulIconFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulIconSortInput>;
};


export type QueryAllContentfulIconSvgTextNodeArgs = {
  filter: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulIconSvgTextNodeSortInput>;
};


export type QueryAllContentfulOssArgs = {
  filter: InputMaybe<ContentfulOssFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulOssSortInput>;
};


export type QueryAllContentfulOssDetailTextNodeArgs = {
  filter: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulOssDetailTextNodeSortInput>;
};


export type QueryAllContentfulProjectArgs = {
  filter: InputMaybe<ContentfulProjectFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulProjectSortInput>;
};


export type QueryAllContentfulProjectDetailTextNodeArgs = {
  filter: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulProjectDetailTextNodeSortInput>;
};


export type QueryAllContentfulQualificationArgs = {
  filter: InputMaybe<ContentfulQualificationFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulQualificationSortInput>;
};


export type QueryAllContentfulQualificationMapArgs = {
  filter: InputMaybe<ContentfulQualificationMapFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulQualificationMapSortInput>;
};


export type QueryAllContentfulSkillMapArgs = {
  filter: InputMaybe<ContentfulSkillMapFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulSkillMapSortInput>;
};


export type QueryAllContentfulTagArgs = {
  filter: InputMaybe<ContentfulTagFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulTagSortInput>;
};


export type QueryAllContentfulWhatICanDoArgs = {
  filter: InputMaybe<ContentfulWhatICanDoFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulWhatICanDoSortInput>;
};


export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllLocaleArgs = {
  filter: InputMaybe<LocaleFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<LocaleSortInput>;
};


export type QueryAllMdxArgs = {
  filter: InputMaybe<MdxFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<MdxSortInput>;
};


export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePluginSortInput>;
};


export type QueryContentfulAssetArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  fields: InputMaybe<ContentfulAssetFieldsFilterInput>;
  file: InputMaybe<ContentfulAssetFileFilterInput>;
  filename: InputMaybe<StringQueryOperatorInput>;
  filesize: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  localFile: InputMaybe<FileFilterInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  placeholderUrl: InputMaybe<StringQueryOperatorInput>;
  publicUrl: InputMaybe<StringQueryOperatorInput>;
  resize: InputMaybe<RemoteFileResizeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulAssetSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};


export type QueryContentfulBlogPostArgs = {
  childContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeFilterListInput>;
  content: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  created: InputMaybe<DateQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulBlogPostSysFilterInput>;
  tags: InputMaybe<ContentfulTagFilterListInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updated: InputMaybe<DateQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulBlogPostContentTextNodeArgs = {
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulBlogPostContentTextNodeSysFilterInput>;
};


export type QueryContentfulContactArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  iconSvgDark: InputMaybe<ContentfulAssetFilterInput>;
  iconSvgLight: InputMaybe<ContentfulAssetFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulContactSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulContentTypeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  displayField: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryContentfulEntryArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QueryContentfulHelloArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulHelloSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulHistoryArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulHistorySysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulIconArgs = {
  childContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeFilterListInput>;
  contact: InputMaybe<ContentfulContactFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  history: InputMaybe<ContentfulHistoryFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  oss: InputMaybe<ContentfulOssFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  project: InputMaybe<ContentfulProjectFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  svg: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  sys: InputMaybe<ContentfulIconSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  what_i_can_do: InputMaybe<ContentfulWhatICanDoFilterListInput>;
};


export type QueryContentfulIconSvgTextNodeArgs = {
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  svg: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulIconSvgTextNodeSysFilterInput>;
};


export type QueryContentfulOssArgs = {
  childContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  detail: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  startDate: InputMaybe<DateQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulOssSysFilterInput>;
  tags: InputMaybe<ContentfulTagFilterListInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulOssDetailTextNodeArgs = {
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
  detail: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulOssDetailTextNodeSysFilterInput>;
};


export type QueryContentfulProjectArgs = {
  childContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  detail: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  endDate: InputMaybe<DateQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  startDate: InputMaybe<DateQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulProjectSysFilterInput>;
  tags: InputMaybe<ContentfulTagFilterListInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulProjectDetailTextNodeArgs = {
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
  detail: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulProjectDetailTextNodeSysFilterInput>;
};


export type QueryContentfulQualificationArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  qualification_map: InputMaybe<ContentfulQualificationMapFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulQualificationSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulQualificationMapArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  expanded: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  qualifications: InputMaybe<ContentfulQualificationFilterListInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulQualificationMapSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulSkillMapArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  expanded: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  skills: InputMaybe<ContentfulTagFilterListInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulSkillMapSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulTagArgs = {
  blog_post: InputMaybe<ContentfulBlogPostFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  level: InputMaybe<IntQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  oss: InputMaybe<ContentfulOssFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  project: InputMaybe<ContentfulProjectFilterListInput>;
  skill_map: InputMaybe<ContentfulSkillMapFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulTagSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulWhatICanDoArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulWhatICanDoSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryDirectoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  childLocale: InputMaybe<LocaleFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  childrenLocale: InputMaybe<LocaleFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QueryLocaleArgs = {
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  language: InputMaybe<StringQueryOperatorInput>;
  ns: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QueryMdxArgs = {
  body: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>;
  frontmatter: InputMaybe<MdxFrontmatterFilterInput>;
  headings: InputMaybe<MdxHeadingMdxFilterListInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mdxAST: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  rawBody: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  tableOfContents: InputMaybe<JsonQueryOperatorInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  wordCount: InputMaybe<MdxWordCountFilterInput>;
};


export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

/** Remote Interface */
export type RemoteFile = {
  filename: Scalars['String'];
  filesize: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage: Maybe<Scalars['JSON']>;
  height: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  publicUrl: Scalars['String'];
  resize: Maybe<RemoteFileResize>;
  width: Maybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cropFocus: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  cropFocus: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

export enum RemoteFileCropFocus {
  Bottom = 0,
  Center = 1,
  Edges = 2,
  Entropy = 3,
  Faces = 4,
  Left = 5,
  Right = 6,
  Top = 7
}

export enum RemoteFileFit {
  Contain = 0,
  Cover = 1,
  Fill = 2,
  Outside = 3
}

export enum RemoteFileFormat {
  Auto = 0,
  Avif = 1,
  Jpg = 2,
  Png = 3,
  Webp = 4
}

export enum RemoteFileLayout {
  Constrained = 0,
  Fixed = 1,
  FullWidth = 2
}

export enum RemoteFilePlaceholder {
  Blurred = 0,
  DominantColor = 1,
  None = 2
}

export type RemoteFileResize = {
  height: Maybe<Scalars['Int']>;
  src: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type RemoteFileResizeFilterInput = {
  height: InputMaybe<IntQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};

export type Site = Node & {
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  pathPrefix: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  port: Maybe<Scalars['Int']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  trailingSlash: Maybe<Scalars['String']>;
};


export type SiteBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 0,
  Children = 1,
  ChildrenChildren = 2,
  ChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenChildren = 4,
  ChildrenChildrenChildrenId = 5,
  ChildrenChildrenId = 6,
  ChildrenChildrenInternalContent = 7,
  ChildrenChildrenInternalContentDigest = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalDescription = 20,
  ChildrenInternalFieldOwners = 21,
  ChildrenInternalIgnoreType = 22,
  ChildrenInternalMediaType = 23,
  ChildrenInternalOwner = 24,
  ChildrenInternalType = 25,
  ChildrenParentChildren = 26,
  ChildrenParentChildrenChildren = 27,
  ChildrenParentChildrenId = 28,
  ChildrenParentId = 29,
  ChildrenParentInternalContent = 30,
  ChildrenParentInternalContentDigest = 31,
  ChildrenParentInternalDescription = 32,
  ChildrenParentInternalFieldOwners = 33,
  ChildrenParentInternalIgnoreType = 34,
  ChildrenParentInternalMediaType = 35,
  ChildrenParentInternalOwner = 36,
  ChildrenParentInternalType = 37,
  ChildrenParentParentChildren = 38,
  ChildrenParentParentId = 39,
  Id = 40,
  InternalContent = 41,
  InternalContentDigest = 42,
  InternalDescription = 43,
  InternalFieldOwners = 44,
  InternalIgnoreType = 45,
  InternalMediaType = 46,
  InternalOwner = 47,
  InternalType = 48,
  ParentChildren = 49,
  ParentChildrenChildren = 50,
  ParentChildrenChildrenChildren = 51,
  ParentChildrenChildrenId = 52,
  ParentChildrenId = 53,
  ParentChildrenInternalContent = 54,
  ParentChildrenInternalContentDigest = 55,
  ParentChildrenInternalDescription = 56,
  ParentChildrenInternalFieldOwners = 57,
  ParentChildrenInternalIgnoreType = 58,
  ParentChildrenInternalMediaType = 59,
  ParentChildrenInternalOwner = 60,
  ParentChildrenInternalType = 61,
  ParentChildrenParentChildren = 62,
  ParentChildrenParentId = 63,
  ParentId = 64,
  ParentInternalContent = 65,
  ParentInternalContentDigest = 66,
  ParentInternalDescription = 67,
  ParentInternalFieldOwners = 68,
  ParentInternalIgnoreType = 69,
  ParentInternalMediaType = 70,
  ParentInternalOwner = 71,
  ParentInternalType = 72,
  ParentParentChildren = 73,
  ParentParentChildrenChildren = 74,
  ParentParentChildrenId = 75,
  ParentParentId = 76,
  ParentParentInternalContent = 77,
  ParentParentInternalContentDigest = 78,
  ParentParentInternalDescription = 79,
  ParentParentInternalFieldOwners = 80,
  ParentParentInternalIgnoreType = 81,
  ParentParentInternalMediaType = 82,
  ParentParentInternalOwner = 83,
  ParentParentInternalType = 84,
  ParentParentParentChildren = 85,
  ParentParentParentId = 86
}

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 0,
  Children = 1,
  ChildrenChildren = 2,
  ChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenChildren = 4,
  ChildrenChildrenChildrenId = 5,
  ChildrenChildrenId = 6,
  ChildrenChildrenInternalContent = 7,
  ChildrenChildrenInternalContentDigest = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalDescription = 20,
  ChildrenInternalFieldOwners = 21,
  ChildrenInternalIgnoreType = 22,
  ChildrenInternalMediaType = 23,
  ChildrenInternalOwner = 24,
  ChildrenInternalType = 25,
  ChildrenParentChildren = 26,
  ChildrenParentChildrenChildren = 27,
  ChildrenParentChildrenId = 28,
  ChildrenParentId = 29,
  ChildrenParentInternalContent = 30,
  ChildrenParentInternalContentDigest = 31,
  ChildrenParentInternalDescription = 32,
  ChildrenParentInternalFieldOwners = 33,
  ChildrenParentInternalIgnoreType = 34,
  ChildrenParentInternalMediaType = 35,
  ChildrenParentInternalOwner = 36,
  ChildrenParentInternalType = 37,
  ChildrenParentParentChildren = 38,
  ChildrenParentParentId = 39,
  Host = 40,
  Id = 41,
  InternalContent = 42,
  InternalContentDigest = 43,
  InternalDescription = 44,
  InternalFieldOwners = 45,
  InternalIgnoreType = 46,
  InternalMediaType = 47,
  InternalOwner = 48,
  InternalType = 49,
  JsxRuntime = 50,
  ParentChildren = 51,
  ParentChildrenChildren = 52,
  ParentChildrenChildrenChildren = 53,
  ParentChildrenChildrenId = 54,
  ParentChildrenId = 55,
  ParentChildrenInternalContent = 56,
  ParentChildrenInternalContentDigest = 57,
  ParentChildrenInternalDescription = 58,
  ParentChildrenInternalFieldOwners = 59,
  ParentChildrenInternalIgnoreType = 60,
  ParentChildrenInternalMediaType = 61,
  ParentChildrenInternalOwner = 62,
  ParentChildrenInternalType = 63,
  ParentChildrenParentChildren = 64,
  ParentChildrenParentId = 65,
  ParentId = 66,
  ParentInternalContent = 67,
  ParentInternalContentDigest = 68,
  ParentInternalDescription = 69,
  ParentInternalFieldOwners = 70,
  ParentInternalIgnoreType = 71,
  ParentInternalMediaType = 72,
  ParentInternalOwner = 73,
  ParentInternalType = 74,
  ParentParentChildren = 75,
  ParentParentChildrenChildren = 76,
  ParentParentChildrenId = 77,
  ParentParentId = 78,
  ParentParentInternalContent = 79,
  ParentParentInternalContentDigest = 80,
  ParentParentInternalDescription = 81,
  ParentParentInternalFieldOwners = 82,
  ParentParentInternalIgnoreType = 83,
  ParentParentInternalMediaType = 84,
  ParentParentInternalOwner = 85,
  ParentParentInternalType = 86,
  ParentParentParentChildren = 87,
  ParentParentParentId = 88,
  PathPrefix = 89,
  Polyfill = 90,
  Port = 91,
  SiteMetadataDescription = 92,
  SiteMetadataSiteUrl = 93,
  SiteMetadataTitle = 94,
  TrailingSlash = 95
}

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 0,
  Children = 1,
  ChildrenChildren = 2,
  ChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenChildren = 4,
  ChildrenChildrenChildrenId = 5,
  ChildrenChildrenId = 6,
  ChildrenChildrenInternalContent = 7,
  ChildrenChildrenInternalContentDigest = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalDescription = 20,
  ChildrenInternalFieldOwners = 21,
  ChildrenInternalIgnoreType = 22,
  ChildrenInternalMediaType = 23,
  ChildrenInternalOwner = 24,
  ChildrenInternalType = 25,
  ChildrenParentChildren = 26,
  ChildrenParentChildrenChildren = 27,
  ChildrenParentChildrenId = 28,
  ChildrenParentId = 29,
  ChildrenParentInternalContent = 30,
  ChildrenParentInternalContentDigest = 31,
  ChildrenParentInternalDescription = 32,
  ChildrenParentInternalFieldOwners = 33,
  ChildrenParentInternalIgnoreType = 34,
  ChildrenParentInternalMediaType = 35,
  ChildrenParentInternalOwner = 36,
  ChildrenParentInternalType = 37,
  ChildrenParentParentChildren = 38,
  ChildrenParentParentId = 39,
  FunctionRoute = 40,
  Id = 41,
  InternalContent = 42,
  InternalContentDigest = 43,
  InternalDescription = 44,
  InternalFieldOwners = 45,
  InternalIgnoreType = 46,
  InternalMediaType = 47,
  InternalOwner = 48,
  InternalType = 49,
  MatchPath = 50,
  OriginalAbsoluteFilePath = 51,
  OriginalRelativeFilePath = 52,
  ParentChildren = 53,
  ParentChildrenChildren = 54,
  ParentChildrenChildrenChildren = 55,
  ParentChildrenChildrenId = 56,
  ParentChildrenId = 57,
  ParentChildrenInternalContent = 58,
  ParentChildrenInternalContentDigest = 59,
  ParentChildrenInternalDescription = 60,
  ParentChildrenInternalFieldOwners = 61,
  ParentChildrenInternalIgnoreType = 62,
  ParentChildrenInternalMediaType = 63,
  ParentChildrenInternalOwner = 64,
  ParentChildrenInternalType = 65,
  ParentChildrenParentChildren = 66,
  ParentChildrenParentId = 67,
  ParentId = 68,
  ParentInternalContent = 69,
  ParentInternalContentDigest = 70,
  ParentInternalDescription = 71,
  ParentInternalFieldOwners = 72,
  ParentInternalIgnoreType = 73,
  ParentInternalMediaType = 74,
  ParentInternalOwner = 75,
  ParentInternalType = 76,
  ParentParentChildren = 77,
  ParentParentChildrenChildren = 78,
  ParentParentChildrenId = 79,
  ParentParentId = 80,
  ParentParentInternalContent = 81,
  ParentParentInternalContentDigest = 82,
  ParentParentInternalDescription = 83,
  ParentParentInternalFieldOwners = 84,
  ParentParentInternalIgnoreType = 85,
  ParentParentInternalMediaType = 86,
  ParentParentInternalOwner = 87,
  ParentParentInternalType = 88,
  ParentParentParentChildren = 89,
  ParentParentParentId = 90,
  PluginName = 91,
  RelativeCompiledFilePath = 92
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  matchPath: Maybe<Scalars['String']>;
  pageContext: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalDescription = 8,
  ChildrenChildrenInternalFieldOwners = 9,
  ChildrenChildrenInternalIgnoreType = 10,
  ChildrenChildrenInternalMediaType = 11,
  ChildrenChildrenInternalOwner = 12,
  ChildrenChildrenInternalType = 13,
  ChildrenChildrenParentChildren = 14,
  ChildrenChildrenParentId = 15,
  ChildrenId = 16,
  ChildrenInternalContent = 17,
  ChildrenInternalContentDigest = 18,
  ChildrenInternalDescription = 19,
  ChildrenInternalFieldOwners = 20,
  ChildrenInternalIgnoreType = 21,
  ChildrenInternalMediaType = 22,
  ChildrenInternalOwner = 23,
  ChildrenInternalType = 24,
  ChildrenParentChildren = 25,
  ChildrenParentChildrenChildren = 26,
  ChildrenParentChildrenId = 27,
  ChildrenParentId = 28,
  ChildrenParentInternalContent = 29,
  ChildrenParentInternalContentDigest = 30,
  ChildrenParentInternalDescription = 31,
  ChildrenParentInternalFieldOwners = 32,
  ChildrenParentInternalIgnoreType = 33,
  ChildrenParentInternalMediaType = 34,
  ChildrenParentInternalOwner = 35,
  ChildrenParentInternalType = 36,
  ChildrenParentParentChildren = 37,
  ChildrenParentParentId = 38,
  Component = 39,
  ComponentChunkName = 40,
  Id = 41,
  InternalComponentName = 42,
  InternalContent = 43,
  InternalContentDigest = 44,
  InternalDescription = 45,
  InternalFieldOwners = 46,
  InternalIgnoreType = 47,
  InternalMediaType = 48,
  InternalOwner = 49,
  InternalType = 50,
  MatchPath = 51,
  PageContext = 52,
  ParentChildren = 53,
  ParentChildrenChildren = 54,
  ParentChildrenChildrenChildren = 55,
  ParentChildrenChildrenId = 56,
  ParentChildrenId = 57,
  ParentChildrenInternalContent = 58,
  ParentChildrenInternalContentDigest = 59,
  ParentChildrenInternalDescription = 60,
  ParentChildrenInternalFieldOwners = 61,
  ParentChildrenInternalIgnoreType = 62,
  ParentChildrenInternalMediaType = 63,
  ParentChildrenInternalOwner = 64,
  ParentChildrenInternalType = 65,
  ParentChildrenParentChildren = 66,
  ParentChildrenParentId = 67,
  ParentId = 68,
  ParentInternalContent = 69,
  ParentInternalContentDigest = 70,
  ParentInternalDescription = 71,
  ParentInternalFieldOwners = 72,
  ParentInternalIgnoreType = 73,
  ParentInternalMediaType = 74,
  ParentInternalOwner = 75,
  ParentInternalType = 76,
  ParentParentChildren = 77,
  ParentParentChildrenChildren = 78,
  ParentParentChildrenId = 79,
  ParentParentId = 80,
  ParentParentInternalContent = 81,
  ParentParentInternalContentDigest = 82,
  ParentParentInternalDescription = 83,
  ParentParentInternalFieldOwners = 84,
  ParentParentInternalIgnoreType = 85,
  ParentParentInternalMediaType = 86,
  ParentParentInternalOwner = 87,
  ParentParentInternalType = 88,
  ParentParentParentChildren = 89,
  ParentParentParentId = 90,
  Path = 91,
  PluginCreatorBrowserApIs = 92,
  PluginCreatorChildren = 93,
  PluginCreatorChildrenChildren = 94,
  PluginCreatorChildrenChildrenChildren = 95,
  PluginCreatorChildrenChildrenId = 96,
  PluginCreatorChildrenId = 97,
  PluginCreatorChildrenInternalContent = 98,
  PluginCreatorChildrenInternalContentDigest = 99,
  PluginCreatorChildrenInternalDescription = 100,
  PluginCreatorChildrenInternalFieldOwners = 101,
  PluginCreatorChildrenInternalIgnoreType = 102,
  PluginCreatorChildrenInternalMediaType = 103,
  PluginCreatorChildrenInternalOwner = 104,
  PluginCreatorChildrenInternalType = 105,
  PluginCreatorChildrenParentChildren = 106,
  PluginCreatorChildrenParentId = 107,
  PluginCreatorId = 108,
  PluginCreatorInternalContent = 109,
  PluginCreatorInternalContentDigest = 110,
  PluginCreatorInternalDescription = 111,
  PluginCreatorInternalFieldOwners = 112,
  PluginCreatorInternalIgnoreType = 113,
  PluginCreatorInternalMediaType = 114,
  PluginCreatorInternalOwner = 115,
  PluginCreatorInternalType = 116,
  PluginCreatorName = 117,
  PluginCreatorNodeApIs = 118,
  PluginCreatorPackageJson = 119,
  PluginCreatorParentChildren = 120,
  PluginCreatorParentChildrenChildren = 121,
  PluginCreatorParentChildrenId = 122,
  PluginCreatorParentId = 123,
  PluginCreatorParentInternalContent = 124,
  PluginCreatorParentInternalContentDigest = 125,
  PluginCreatorParentInternalDescription = 126,
  PluginCreatorParentInternalFieldOwners = 127,
  PluginCreatorParentInternalIgnoreType = 128,
  PluginCreatorParentInternalMediaType = 129,
  PluginCreatorParentInternalOwner = 130,
  PluginCreatorParentInternalType = 131,
  PluginCreatorParentParentChildren = 132,
  PluginCreatorParentParentId = 133,
  PluginCreatorPluginFilepath = 134,
  PluginCreatorPluginOptions = 135,
  PluginCreatorResolve = 136,
  PluginCreatorSsrApIs = 137,
  PluginCreatorVersion = 138
}

export type SitePageFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  pluginFilepath: Maybe<Scalars['String']>;
  pluginOptions: Maybe<Scalars['JSON']>;
  resolve: Maybe<Scalars['String']>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 0,
  Children = 1,
  ChildrenChildren = 2,
  ChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenChildren = 4,
  ChildrenChildrenChildrenId = 5,
  ChildrenChildrenId = 6,
  ChildrenChildrenInternalContent = 7,
  ChildrenChildrenInternalContentDigest = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalDescription = 20,
  ChildrenInternalFieldOwners = 21,
  ChildrenInternalIgnoreType = 22,
  ChildrenInternalMediaType = 23,
  ChildrenInternalOwner = 24,
  ChildrenInternalType = 25,
  ChildrenParentChildren = 26,
  ChildrenParentChildrenChildren = 27,
  ChildrenParentChildrenId = 28,
  ChildrenParentId = 29,
  ChildrenParentInternalContent = 30,
  ChildrenParentInternalContentDigest = 31,
  ChildrenParentInternalDescription = 32,
  ChildrenParentInternalFieldOwners = 33,
  ChildrenParentInternalIgnoreType = 34,
  ChildrenParentInternalMediaType = 35,
  ChildrenParentInternalOwner = 36,
  ChildrenParentInternalType = 37,
  ChildrenParentParentChildren = 38,
  ChildrenParentParentId = 39,
  Id = 40,
  InternalContent = 41,
  InternalContentDigest = 42,
  InternalDescription = 43,
  InternalFieldOwners = 44,
  InternalIgnoreType = 45,
  InternalMediaType = 46,
  InternalOwner = 47,
  InternalType = 48,
  Name = 49,
  NodeApIs = 50,
  PackageJson = 51,
  ParentChildren = 52,
  ParentChildrenChildren = 53,
  ParentChildrenChildrenChildren = 54,
  ParentChildrenChildrenId = 55,
  ParentChildrenId = 56,
  ParentChildrenInternalContent = 57,
  ParentChildrenInternalContentDigest = 58,
  ParentChildrenInternalDescription = 59,
  ParentChildrenInternalFieldOwners = 60,
  ParentChildrenInternalIgnoreType = 61,
  ParentChildrenInternalMediaType = 62,
  ParentChildrenInternalOwner = 63,
  ParentChildrenInternalType = 64,
  ParentChildrenParentChildren = 65,
  ParentChildrenParentId = 66,
  ParentId = 67,
  ParentInternalContent = 68,
  ParentInternalContentDigest = 69,
  ParentInternalDescription = 70,
  ParentInternalFieldOwners = 71,
  ParentInternalIgnoreType = 72,
  ParentInternalMediaType = 73,
  ParentInternalOwner = 74,
  ParentInternalType = 75,
  ParentParentChildren = 76,
  ParentParentChildrenChildren = 77,
  ParentParentChildrenId = 78,
  ParentParentId = 79,
  ParentParentInternalContent = 80,
  ParentParentInternalContentDigest = 81,
  ParentParentInternalDescription = 82,
  ParentParentInternalFieldOwners = 83,
  ParentParentInternalIgnoreType = 84,
  ParentParentInternalMediaType = 85,
  ParentParentInternalOwner = 86,
  ParentParentInternalType = 87,
  ParentParentParentChildren = 88,
  ParentParentParentId = 89,
  PluginFilepath = 90,
  PluginOptions = 91,
  Resolve = 92,
  SsrApIs = 93,
  Version = 94
}

export type SitePluginFilterInput = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  description: Maybe<Scalars['String']>;
  siteUrl: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>;
  siteUrl: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 0,
  Desc = 1
}

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars['String']>;
  glob: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne: InputMaybe<Scalars['String']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit: InputMaybe<ImageFit>;
  grayscale: InputMaybe<Scalars['Boolean']>;
  rotate: InputMaybe<Scalars['Int']>;
  trim: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality: InputMaybe<Scalars['Int']>;
};

export type ContentfulBlogPostContentTextNode = Node & {
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx: Maybe<Array<Maybe<Mdx>>>;
  content: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  sys: Maybe<ContentfulBlogPostContentTextNodeSys>;
};

export type ContentfulBlogPostContentTextNodeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulBlogPostContentTextNodeEdge>;
  group: Array<ContentfulBlogPostContentTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulBlogPostContentTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulBlogPostContentTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeConnectionGroupArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogPostContentTextNodeConnectionMaxArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeConnectionMinArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeConnectionSumArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};

export type ContentfulBlogPostContentTextNodeEdge = {
  next: Maybe<ContentfulBlogPostContentTextNode>;
  node: ContentfulBlogPostContentTextNode;
  previous: Maybe<ContentfulBlogPostContentTextNode>;
};

export enum ContentfulBlogPostContentTextNodeFieldsEnum {
  ChildMdxBody = 0,
  ChildMdxChildren = 1,
  ChildMdxChildrenChildren = 2,
  ChildMdxChildrenChildrenChildren = 3,
  ChildMdxChildrenChildrenId = 4,
  ChildMdxChildrenId = 5,
  ChildMdxChildrenInternalContent = 6,
  ChildMdxChildrenInternalContentDigest = 7,
  ChildMdxChildrenInternalDescription = 8,
  ChildMdxChildrenInternalFieldOwners = 9,
  ChildMdxChildrenInternalIgnoreType = 10,
  ChildMdxChildrenInternalMediaType = 11,
  ChildMdxChildrenInternalOwner = 12,
  ChildMdxChildrenInternalType = 13,
  ChildMdxChildrenParentChildren = 14,
  ChildMdxChildrenParentId = 15,
  ChildMdxExcerpt = 16,
  ChildMdxFileAbsolutePath = 17,
  ChildMdxFrontmatterTitle = 18,
  ChildMdxHeadings = 19,
  ChildMdxHeadingsDepth = 20,
  ChildMdxHeadingsValue = 21,
  ChildMdxHtml = 22,
  ChildMdxId = 23,
  ChildMdxInternalContent = 24,
  ChildMdxInternalContentDigest = 25,
  ChildMdxInternalDescription = 26,
  ChildMdxInternalFieldOwners = 27,
  ChildMdxInternalIgnoreType = 28,
  ChildMdxInternalMediaType = 29,
  ChildMdxInternalOwner = 30,
  ChildMdxInternalType = 31,
  ChildMdxMdxAst = 32,
  ChildMdxParentChildren = 33,
  ChildMdxParentChildrenChildren = 34,
  ChildMdxParentChildrenId = 35,
  ChildMdxParentId = 36,
  ChildMdxParentInternalContent = 37,
  ChildMdxParentInternalContentDigest = 38,
  ChildMdxParentInternalDescription = 39,
  ChildMdxParentInternalFieldOwners = 40,
  ChildMdxParentInternalIgnoreType = 41,
  ChildMdxParentInternalMediaType = 42,
  ChildMdxParentInternalOwner = 43,
  ChildMdxParentInternalType = 44,
  ChildMdxParentParentChildren = 45,
  ChildMdxParentParentId = 46,
  ChildMdxRawBody = 47,
  ChildMdxSlug = 48,
  ChildMdxTableOfContents = 49,
  ChildMdxTimeToRead = 50,
  ChildMdxWordCountParagraphs = 51,
  ChildMdxWordCountSentences = 52,
  ChildMdxWordCountWords = 53,
  Children = 54,
  ChildrenMdx = 55,
  ChildrenMdxBody = 56,
  ChildrenMdxChildren = 57,
  ChildrenMdxChildrenChildren = 58,
  ChildrenMdxChildrenChildrenChildren = 59,
  ChildrenMdxChildrenChildrenId = 60,
  ChildrenMdxChildrenId = 61,
  ChildrenMdxChildrenInternalContent = 62,
  ChildrenMdxChildrenInternalContentDigest = 63,
  ChildrenMdxChildrenInternalDescription = 64,
  ChildrenMdxChildrenInternalFieldOwners = 65,
  ChildrenMdxChildrenInternalIgnoreType = 66,
  ChildrenMdxChildrenInternalMediaType = 67,
  ChildrenMdxChildrenInternalOwner = 68,
  ChildrenMdxChildrenInternalType = 69,
  ChildrenMdxChildrenParentChildren = 70,
  ChildrenMdxChildrenParentId = 71,
  ChildrenMdxExcerpt = 72,
  ChildrenMdxFileAbsolutePath = 73,
  ChildrenMdxFrontmatterTitle = 74,
  ChildrenMdxHeadings = 75,
  ChildrenMdxHeadingsDepth = 76,
  ChildrenMdxHeadingsValue = 77,
  ChildrenMdxHtml = 78,
  ChildrenMdxId = 79,
  ChildrenMdxInternalContent = 80,
  ChildrenMdxInternalContentDigest = 81,
  ChildrenMdxInternalDescription = 82,
  ChildrenMdxInternalFieldOwners = 83,
  ChildrenMdxInternalIgnoreType = 84,
  ChildrenMdxInternalMediaType = 85,
  ChildrenMdxInternalOwner = 86,
  ChildrenMdxInternalType = 87,
  ChildrenMdxMdxAst = 88,
  ChildrenMdxParentChildren = 89,
  ChildrenMdxParentChildrenChildren = 90,
  ChildrenMdxParentChildrenId = 91,
  ChildrenMdxParentId = 92,
  ChildrenMdxParentInternalContent = 93,
  ChildrenMdxParentInternalContentDigest = 94,
  ChildrenMdxParentInternalDescription = 95,
  ChildrenMdxParentInternalFieldOwners = 96,
  ChildrenMdxParentInternalIgnoreType = 97,
  ChildrenMdxParentInternalMediaType = 98,
  ChildrenMdxParentInternalOwner = 99,
  ChildrenMdxParentInternalType = 100,
  ChildrenMdxParentParentChildren = 101,
  ChildrenMdxParentParentId = 102,
  ChildrenMdxRawBody = 103,
  ChildrenMdxSlug = 104,
  ChildrenMdxTableOfContents = 105,
  ChildrenMdxTimeToRead = 106,
  ChildrenMdxWordCountParagraphs = 107,
  ChildrenMdxWordCountSentences = 108,
  ChildrenMdxWordCountWords = 109,
  ChildrenChildren = 110,
  ChildrenChildrenChildren = 111,
  ChildrenChildrenChildrenChildren = 112,
  ChildrenChildrenChildrenId = 113,
  ChildrenChildrenId = 114,
  ChildrenChildrenInternalContent = 115,
  ChildrenChildrenInternalContentDigest = 116,
  ChildrenChildrenInternalDescription = 117,
  ChildrenChildrenInternalFieldOwners = 118,
  ChildrenChildrenInternalIgnoreType = 119,
  ChildrenChildrenInternalMediaType = 120,
  ChildrenChildrenInternalOwner = 121,
  ChildrenChildrenInternalType = 122,
  ChildrenChildrenParentChildren = 123,
  ChildrenChildrenParentId = 124,
  ChildrenId = 125,
  ChildrenInternalContent = 126,
  ChildrenInternalContentDigest = 127,
  ChildrenInternalDescription = 128,
  ChildrenInternalFieldOwners = 129,
  ChildrenInternalIgnoreType = 130,
  ChildrenInternalMediaType = 131,
  ChildrenInternalOwner = 132,
  ChildrenInternalType = 133,
  ChildrenParentChildren = 134,
  ChildrenParentChildrenChildren = 135,
  ChildrenParentChildrenId = 136,
  ChildrenParentId = 137,
  ChildrenParentInternalContent = 138,
  ChildrenParentInternalContentDigest = 139,
  ChildrenParentInternalDescription = 140,
  ChildrenParentInternalFieldOwners = 141,
  ChildrenParentInternalIgnoreType = 142,
  ChildrenParentInternalMediaType = 143,
  ChildrenParentInternalOwner = 144,
  ChildrenParentInternalType = 145,
  ChildrenParentParentChildren = 146,
  ChildrenParentParentId = 147,
  Content = 148,
  Id = 149,
  InternalContent = 150,
  InternalContentDigest = 151,
  InternalDescription = 152,
  InternalFieldOwners = 153,
  InternalIgnoreType = 154,
  InternalMediaType = 155,
  InternalOwner = 156,
  InternalType = 157,
  ParentChildren = 158,
  ParentChildrenChildren = 159,
  ParentChildrenChildrenChildren = 160,
  ParentChildrenChildrenId = 161,
  ParentChildrenId = 162,
  ParentChildrenInternalContent = 163,
  ParentChildrenInternalContentDigest = 164,
  ParentChildrenInternalDescription = 165,
  ParentChildrenInternalFieldOwners = 166,
  ParentChildrenInternalIgnoreType = 167,
  ParentChildrenInternalMediaType = 168,
  ParentChildrenInternalOwner = 169,
  ParentChildrenInternalType = 170,
  ParentChildrenParentChildren = 171,
  ParentChildrenParentId = 172,
  ParentId = 173,
  ParentInternalContent = 174,
  ParentInternalContentDigest = 175,
  ParentInternalDescription = 176,
  ParentInternalFieldOwners = 177,
  ParentInternalIgnoreType = 178,
  ParentInternalMediaType = 179,
  ParentInternalOwner = 180,
  ParentInternalType = 181,
  ParentParentChildren = 182,
  ParentParentChildrenChildren = 183,
  ParentParentChildrenId = 184,
  ParentParentId = 185,
  ParentParentInternalContent = 186,
  ParentParentInternalContentDigest = 187,
  ParentParentInternalDescription = 188,
  ParentParentInternalFieldOwners = 189,
  ParentParentInternalIgnoreType = 190,
  ParentParentInternalMediaType = 191,
  ParentParentInternalOwner = 192,
  ParentParentInternalType = 193,
  ParentParentParentChildren = 194,
  ParentParentParentId = 195,
  SysType = 196
}

export type ContentfulBlogPostContentTextNodeFilterInput = {
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulBlogPostContentTextNodeSysFilterInput>;
};

export type ContentfulBlogPostContentTextNodeFilterListInput = {
  elemMatch: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
};

export type ContentfulBlogPostContentTextNodeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulBlogPostContentTextNodeEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulBlogPostContentTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulBlogPostContentTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulBlogPostContentTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionGroupArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionMaxArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionMinArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionSumArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};

export type ContentfulBlogPostContentTextNodeSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulBlogPostContentTextNodeFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostContentTextNodeSys = {
  type: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostContentTextNodeSysFilterInput = {
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulIconSvgTextNode = Node & {
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx: Maybe<Array<Maybe<Mdx>>>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  svg: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulIconSvgTextNodeSys>;
};

export type ContentfulIconSvgTextNodeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulIconSvgTextNodeEdge>;
  group: Array<ContentfulIconSvgTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulIconSvgTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulIconSvgTextNodeConnectionDistinctArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeConnectionGroupArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulIconSvgTextNode>;
  node: ContentfulIconSvgTextNode;
  previous: Maybe<ContentfulIconSvgTextNode>;
};

export enum ContentfulIconSvgTextNodeFieldsEnum {
  ChildMdxBody = 0,
  ChildMdxChildren = 1,
  ChildMdxChildrenChildren = 2,
  ChildMdxChildrenChildrenChildren = 3,
  ChildMdxChildrenChildrenId = 4,
  ChildMdxChildrenId = 5,
  ChildMdxChildrenInternalContent = 6,
  ChildMdxChildrenInternalContentDigest = 7,
  ChildMdxChildrenInternalDescription = 8,
  ChildMdxChildrenInternalFieldOwners = 9,
  ChildMdxChildrenInternalIgnoreType = 10,
  ChildMdxChildrenInternalMediaType = 11,
  ChildMdxChildrenInternalOwner = 12,
  ChildMdxChildrenInternalType = 13,
  ChildMdxChildrenParentChildren = 14,
  ChildMdxChildrenParentId = 15,
  ChildMdxExcerpt = 16,
  ChildMdxFileAbsolutePath = 17,
  ChildMdxFrontmatterTitle = 18,
  ChildMdxHeadings = 19,
  ChildMdxHeadingsDepth = 20,
  ChildMdxHeadingsValue = 21,
  ChildMdxHtml = 22,
  ChildMdxId = 23,
  ChildMdxInternalContent = 24,
  ChildMdxInternalContentDigest = 25,
  ChildMdxInternalDescription = 26,
  ChildMdxInternalFieldOwners = 27,
  ChildMdxInternalIgnoreType = 28,
  ChildMdxInternalMediaType = 29,
  ChildMdxInternalOwner = 30,
  ChildMdxInternalType = 31,
  ChildMdxMdxAst = 32,
  ChildMdxParentChildren = 33,
  ChildMdxParentChildrenChildren = 34,
  ChildMdxParentChildrenId = 35,
  ChildMdxParentId = 36,
  ChildMdxParentInternalContent = 37,
  ChildMdxParentInternalContentDigest = 38,
  ChildMdxParentInternalDescription = 39,
  ChildMdxParentInternalFieldOwners = 40,
  ChildMdxParentInternalIgnoreType = 41,
  ChildMdxParentInternalMediaType = 42,
  ChildMdxParentInternalOwner = 43,
  ChildMdxParentInternalType = 44,
  ChildMdxParentParentChildren = 45,
  ChildMdxParentParentId = 46,
  ChildMdxRawBody = 47,
  ChildMdxSlug = 48,
  ChildMdxTableOfContents = 49,
  ChildMdxTimeToRead = 50,
  ChildMdxWordCountParagraphs = 51,
  ChildMdxWordCountSentences = 52,
  ChildMdxWordCountWords = 53,
  Children = 54,
  ChildrenMdx = 55,
  ChildrenMdxBody = 56,
  ChildrenMdxChildren = 57,
  ChildrenMdxChildrenChildren = 58,
  ChildrenMdxChildrenChildrenChildren = 59,
  ChildrenMdxChildrenChildrenId = 60,
  ChildrenMdxChildrenId = 61,
  ChildrenMdxChildrenInternalContent = 62,
  ChildrenMdxChildrenInternalContentDigest = 63,
  ChildrenMdxChildrenInternalDescription = 64,
  ChildrenMdxChildrenInternalFieldOwners = 65,
  ChildrenMdxChildrenInternalIgnoreType = 66,
  ChildrenMdxChildrenInternalMediaType = 67,
  ChildrenMdxChildrenInternalOwner = 68,
  ChildrenMdxChildrenInternalType = 69,
  ChildrenMdxChildrenParentChildren = 70,
  ChildrenMdxChildrenParentId = 71,
  ChildrenMdxExcerpt = 72,
  ChildrenMdxFileAbsolutePath = 73,
  ChildrenMdxFrontmatterTitle = 74,
  ChildrenMdxHeadings = 75,
  ChildrenMdxHeadingsDepth = 76,
  ChildrenMdxHeadingsValue = 77,
  ChildrenMdxHtml = 78,
  ChildrenMdxId = 79,
  ChildrenMdxInternalContent = 80,
  ChildrenMdxInternalContentDigest = 81,
  ChildrenMdxInternalDescription = 82,
  ChildrenMdxInternalFieldOwners = 83,
  ChildrenMdxInternalIgnoreType = 84,
  ChildrenMdxInternalMediaType = 85,
  ChildrenMdxInternalOwner = 86,
  ChildrenMdxInternalType = 87,
  ChildrenMdxMdxAst = 88,
  ChildrenMdxParentChildren = 89,
  ChildrenMdxParentChildrenChildren = 90,
  ChildrenMdxParentChildrenId = 91,
  ChildrenMdxParentId = 92,
  ChildrenMdxParentInternalContent = 93,
  ChildrenMdxParentInternalContentDigest = 94,
  ChildrenMdxParentInternalDescription = 95,
  ChildrenMdxParentInternalFieldOwners = 96,
  ChildrenMdxParentInternalIgnoreType = 97,
  ChildrenMdxParentInternalMediaType = 98,
  ChildrenMdxParentInternalOwner = 99,
  ChildrenMdxParentInternalType = 100,
  ChildrenMdxParentParentChildren = 101,
  ChildrenMdxParentParentId = 102,
  ChildrenMdxRawBody = 103,
  ChildrenMdxSlug = 104,
  ChildrenMdxTableOfContents = 105,
  ChildrenMdxTimeToRead = 106,
  ChildrenMdxWordCountParagraphs = 107,
  ChildrenMdxWordCountSentences = 108,
  ChildrenMdxWordCountWords = 109,
  ChildrenChildren = 110,
  ChildrenChildrenChildren = 111,
  ChildrenChildrenChildrenChildren = 112,
  ChildrenChildrenChildrenId = 113,
  ChildrenChildrenId = 114,
  ChildrenChildrenInternalContent = 115,
  ChildrenChildrenInternalContentDigest = 116,
  ChildrenChildrenInternalDescription = 117,
  ChildrenChildrenInternalFieldOwners = 118,
  ChildrenChildrenInternalIgnoreType = 119,
  ChildrenChildrenInternalMediaType = 120,
  ChildrenChildrenInternalOwner = 121,
  ChildrenChildrenInternalType = 122,
  ChildrenChildrenParentChildren = 123,
  ChildrenChildrenParentId = 124,
  ChildrenId = 125,
  ChildrenInternalContent = 126,
  ChildrenInternalContentDigest = 127,
  ChildrenInternalDescription = 128,
  ChildrenInternalFieldOwners = 129,
  ChildrenInternalIgnoreType = 130,
  ChildrenInternalMediaType = 131,
  ChildrenInternalOwner = 132,
  ChildrenInternalType = 133,
  ChildrenParentChildren = 134,
  ChildrenParentChildrenChildren = 135,
  ChildrenParentChildrenId = 136,
  ChildrenParentId = 137,
  ChildrenParentInternalContent = 138,
  ChildrenParentInternalContentDigest = 139,
  ChildrenParentInternalDescription = 140,
  ChildrenParentInternalFieldOwners = 141,
  ChildrenParentInternalIgnoreType = 142,
  ChildrenParentInternalMediaType = 143,
  ChildrenParentInternalOwner = 144,
  ChildrenParentInternalType = 145,
  ChildrenParentParentChildren = 146,
  ChildrenParentParentId = 147,
  Id = 148,
  InternalContent = 149,
  InternalContentDigest = 150,
  InternalDescription = 151,
  InternalFieldOwners = 152,
  InternalIgnoreType = 153,
  InternalMediaType = 154,
  InternalOwner = 155,
  InternalType = 156,
  ParentChildren = 157,
  ParentChildrenChildren = 158,
  ParentChildrenChildrenChildren = 159,
  ParentChildrenChildrenId = 160,
  ParentChildrenId = 161,
  ParentChildrenInternalContent = 162,
  ParentChildrenInternalContentDigest = 163,
  ParentChildrenInternalDescription = 164,
  ParentChildrenInternalFieldOwners = 165,
  ParentChildrenInternalIgnoreType = 166,
  ParentChildrenInternalMediaType = 167,
  ParentChildrenInternalOwner = 168,
  ParentChildrenInternalType = 169,
  ParentChildrenParentChildren = 170,
  ParentChildrenParentId = 171,
  ParentId = 172,
  ParentInternalContent = 173,
  ParentInternalContentDigest = 174,
  ParentInternalDescription = 175,
  ParentInternalFieldOwners = 176,
  ParentInternalIgnoreType = 177,
  ParentInternalMediaType = 178,
  ParentInternalOwner = 179,
  ParentInternalType = 180,
  ParentParentChildren = 181,
  ParentParentChildrenChildren = 182,
  ParentParentChildrenId = 183,
  ParentParentId = 184,
  ParentParentInternalContent = 185,
  ParentParentInternalContentDigest = 186,
  ParentParentInternalDescription = 187,
  ParentParentInternalFieldOwners = 188,
  ParentParentInternalIgnoreType = 189,
  ParentParentInternalMediaType = 190,
  ParentParentInternalOwner = 191,
  ParentParentInternalType = 192,
  ParentParentParentChildren = 193,
  ParentParentParentId = 194,
  Svg = 195,
  SysType = 196
}

export type ContentfulIconSvgTextNodeFilterInput = {
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  svg: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulIconSvgTextNodeSysFilterInput>;
};

export type ContentfulIconSvgTextNodeFilterListInput = {
  elemMatch: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
};

export type ContentfulIconSvgTextNodeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulIconSvgTextNodeEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulIconSvgTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulIconSvgTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulIconSvgTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeGroupConnectionGroupArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulIconSvgTextNodeFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulIconSvgTextNodeSys = {
  type: Maybe<Scalars['String']>;
};

export type ContentfulIconSvgTextNodeSysFilterInput = {
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulOssDetailTextNode = Node & {
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx: Maybe<Array<Maybe<Mdx>>>;
  detail: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  sys: Maybe<ContentfulOssDetailTextNodeSys>;
};

export type ContentfulOssDetailTextNodeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulOssDetailTextNodeEdge>;
  group: Array<ContentfulOssDetailTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulOssDetailTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulOssDetailTextNodeConnectionDistinctArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeConnectionGroupArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulOssDetailTextNode>;
  node: ContentfulOssDetailTextNode;
  previous: Maybe<ContentfulOssDetailTextNode>;
};

export enum ContentfulOssDetailTextNodeFieldsEnum {
  ChildMdxBody = 0,
  ChildMdxChildren = 1,
  ChildMdxChildrenChildren = 2,
  ChildMdxChildrenChildrenChildren = 3,
  ChildMdxChildrenChildrenId = 4,
  ChildMdxChildrenId = 5,
  ChildMdxChildrenInternalContent = 6,
  ChildMdxChildrenInternalContentDigest = 7,
  ChildMdxChildrenInternalDescription = 8,
  ChildMdxChildrenInternalFieldOwners = 9,
  ChildMdxChildrenInternalIgnoreType = 10,
  ChildMdxChildrenInternalMediaType = 11,
  ChildMdxChildrenInternalOwner = 12,
  ChildMdxChildrenInternalType = 13,
  ChildMdxChildrenParentChildren = 14,
  ChildMdxChildrenParentId = 15,
  ChildMdxExcerpt = 16,
  ChildMdxFileAbsolutePath = 17,
  ChildMdxFrontmatterTitle = 18,
  ChildMdxHeadings = 19,
  ChildMdxHeadingsDepth = 20,
  ChildMdxHeadingsValue = 21,
  ChildMdxHtml = 22,
  ChildMdxId = 23,
  ChildMdxInternalContent = 24,
  ChildMdxInternalContentDigest = 25,
  ChildMdxInternalDescription = 26,
  ChildMdxInternalFieldOwners = 27,
  ChildMdxInternalIgnoreType = 28,
  ChildMdxInternalMediaType = 29,
  ChildMdxInternalOwner = 30,
  ChildMdxInternalType = 31,
  ChildMdxMdxAst = 32,
  ChildMdxParentChildren = 33,
  ChildMdxParentChildrenChildren = 34,
  ChildMdxParentChildrenId = 35,
  ChildMdxParentId = 36,
  ChildMdxParentInternalContent = 37,
  ChildMdxParentInternalContentDigest = 38,
  ChildMdxParentInternalDescription = 39,
  ChildMdxParentInternalFieldOwners = 40,
  ChildMdxParentInternalIgnoreType = 41,
  ChildMdxParentInternalMediaType = 42,
  ChildMdxParentInternalOwner = 43,
  ChildMdxParentInternalType = 44,
  ChildMdxParentParentChildren = 45,
  ChildMdxParentParentId = 46,
  ChildMdxRawBody = 47,
  ChildMdxSlug = 48,
  ChildMdxTableOfContents = 49,
  ChildMdxTimeToRead = 50,
  ChildMdxWordCountParagraphs = 51,
  ChildMdxWordCountSentences = 52,
  ChildMdxWordCountWords = 53,
  Children = 54,
  ChildrenMdx = 55,
  ChildrenMdxBody = 56,
  ChildrenMdxChildren = 57,
  ChildrenMdxChildrenChildren = 58,
  ChildrenMdxChildrenChildrenChildren = 59,
  ChildrenMdxChildrenChildrenId = 60,
  ChildrenMdxChildrenId = 61,
  ChildrenMdxChildrenInternalContent = 62,
  ChildrenMdxChildrenInternalContentDigest = 63,
  ChildrenMdxChildrenInternalDescription = 64,
  ChildrenMdxChildrenInternalFieldOwners = 65,
  ChildrenMdxChildrenInternalIgnoreType = 66,
  ChildrenMdxChildrenInternalMediaType = 67,
  ChildrenMdxChildrenInternalOwner = 68,
  ChildrenMdxChildrenInternalType = 69,
  ChildrenMdxChildrenParentChildren = 70,
  ChildrenMdxChildrenParentId = 71,
  ChildrenMdxExcerpt = 72,
  ChildrenMdxFileAbsolutePath = 73,
  ChildrenMdxFrontmatterTitle = 74,
  ChildrenMdxHeadings = 75,
  ChildrenMdxHeadingsDepth = 76,
  ChildrenMdxHeadingsValue = 77,
  ChildrenMdxHtml = 78,
  ChildrenMdxId = 79,
  ChildrenMdxInternalContent = 80,
  ChildrenMdxInternalContentDigest = 81,
  ChildrenMdxInternalDescription = 82,
  ChildrenMdxInternalFieldOwners = 83,
  ChildrenMdxInternalIgnoreType = 84,
  ChildrenMdxInternalMediaType = 85,
  ChildrenMdxInternalOwner = 86,
  ChildrenMdxInternalType = 87,
  ChildrenMdxMdxAst = 88,
  ChildrenMdxParentChildren = 89,
  ChildrenMdxParentChildrenChildren = 90,
  ChildrenMdxParentChildrenId = 91,
  ChildrenMdxParentId = 92,
  ChildrenMdxParentInternalContent = 93,
  ChildrenMdxParentInternalContentDigest = 94,
  ChildrenMdxParentInternalDescription = 95,
  ChildrenMdxParentInternalFieldOwners = 96,
  ChildrenMdxParentInternalIgnoreType = 97,
  ChildrenMdxParentInternalMediaType = 98,
  ChildrenMdxParentInternalOwner = 99,
  ChildrenMdxParentInternalType = 100,
  ChildrenMdxParentParentChildren = 101,
  ChildrenMdxParentParentId = 102,
  ChildrenMdxRawBody = 103,
  ChildrenMdxSlug = 104,
  ChildrenMdxTableOfContents = 105,
  ChildrenMdxTimeToRead = 106,
  ChildrenMdxWordCountParagraphs = 107,
  ChildrenMdxWordCountSentences = 108,
  ChildrenMdxWordCountWords = 109,
  ChildrenChildren = 110,
  ChildrenChildrenChildren = 111,
  ChildrenChildrenChildrenChildren = 112,
  ChildrenChildrenChildrenId = 113,
  ChildrenChildrenId = 114,
  ChildrenChildrenInternalContent = 115,
  ChildrenChildrenInternalContentDigest = 116,
  ChildrenChildrenInternalDescription = 117,
  ChildrenChildrenInternalFieldOwners = 118,
  ChildrenChildrenInternalIgnoreType = 119,
  ChildrenChildrenInternalMediaType = 120,
  ChildrenChildrenInternalOwner = 121,
  ChildrenChildrenInternalType = 122,
  ChildrenChildrenParentChildren = 123,
  ChildrenChildrenParentId = 124,
  ChildrenId = 125,
  ChildrenInternalContent = 126,
  ChildrenInternalContentDigest = 127,
  ChildrenInternalDescription = 128,
  ChildrenInternalFieldOwners = 129,
  ChildrenInternalIgnoreType = 130,
  ChildrenInternalMediaType = 131,
  ChildrenInternalOwner = 132,
  ChildrenInternalType = 133,
  ChildrenParentChildren = 134,
  ChildrenParentChildrenChildren = 135,
  ChildrenParentChildrenId = 136,
  ChildrenParentId = 137,
  ChildrenParentInternalContent = 138,
  ChildrenParentInternalContentDigest = 139,
  ChildrenParentInternalDescription = 140,
  ChildrenParentInternalFieldOwners = 141,
  ChildrenParentInternalIgnoreType = 142,
  ChildrenParentInternalMediaType = 143,
  ChildrenParentInternalOwner = 144,
  ChildrenParentInternalType = 145,
  ChildrenParentParentChildren = 146,
  ChildrenParentParentId = 147,
  Detail = 148,
  Id = 149,
  InternalContent = 150,
  InternalContentDigest = 151,
  InternalDescription = 152,
  InternalFieldOwners = 153,
  InternalIgnoreType = 154,
  InternalMediaType = 155,
  InternalOwner = 156,
  InternalType = 157,
  ParentChildren = 158,
  ParentChildrenChildren = 159,
  ParentChildrenChildrenChildren = 160,
  ParentChildrenChildrenId = 161,
  ParentChildrenId = 162,
  ParentChildrenInternalContent = 163,
  ParentChildrenInternalContentDigest = 164,
  ParentChildrenInternalDescription = 165,
  ParentChildrenInternalFieldOwners = 166,
  ParentChildrenInternalIgnoreType = 167,
  ParentChildrenInternalMediaType = 168,
  ParentChildrenInternalOwner = 169,
  ParentChildrenInternalType = 170,
  ParentChildrenParentChildren = 171,
  ParentChildrenParentId = 172,
  ParentId = 173,
  ParentInternalContent = 174,
  ParentInternalContentDigest = 175,
  ParentInternalDescription = 176,
  ParentInternalFieldOwners = 177,
  ParentInternalIgnoreType = 178,
  ParentInternalMediaType = 179,
  ParentInternalOwner = 180,
  ParentInternalType = 181,
  ParentParentChildren = 182,
  ParentParentChildrenChildren = 183,
  ParentParentChildrenId = 184,
  ParentParentId = 185,
  ParentParentInternalContent = 186,
  ParentParentInternalContentDigest = 187,
  ParentParentInternalDescription = 188,
  ParentParentInternalFieldOwners = 189,
  ParentParentInternalIgnoreType = 190,
  ParentParentInternalMediaType = 191,
  ParentParentInternalOwner = 192,
  ParentParentInternalType = 193,
  ParentParentParentChildren = 194,
  ParentParentParentId = 195,
  SysType = 196
}

export type ContentfulOssDetailTextNodeFilterInput = {
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
  detail: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulOssDetailTextNodeSysFilterInput>;
};

export type ContentfulOssDetailTextNodeFilterListInput = {
  elemMatch: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
};

export type ContentfulOssDetailTextNodeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulOssDetailTextNodeEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulOssDetailTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulOssDetailTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulOssDetailTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeGroupConnectionGroupArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulOssDetailTextNodeFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulOssDetailTextNodeSys = {
  type: Maybe<Scalars['String']>;
};

export type ContentfulOssDetailTextNodeSysFilterInput = {
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectDetailTextNode = Node & {
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx: Maybe<Array<Maybe<Mdx>>>;
  detail: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  sys: Maybe<ContentfulProjectDetailTextNodeSys>;
};

export type ContentfulProjectDetailTextNodeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulProjectDetailTextNodeEdge>;
  group: Array<ContentfulProjectDetailTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulProjectDetailTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulProjectDetailTextNodeConnectionDistinctArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeConnectionGroupArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<ContentfulProjectDetailTextNode>;
  node: ContentfulProjectDetailTextNode;
  previous: Maybe<ContentfulProjectDetailTextNode>;
};

export enum ContentfulProjectDetailTextNodeFieldsEnum {
  ChildMdxBody = 0,
  ChildMdxChildren = 1,
  ChildMdxChildrenChildren = 2,
  ChildMdxChildrenChildrenChildren = 3,
  ChildMdxChildrenChildrenId = 4,
  ChildMdxChildrenId = 5,
  ChildMdxChildrenInternalContent = 6,
  ChildMdxChildrenInternalContentDigest = 7,
  ChildMdxChildrenInternalDescription = 8,
  ChildMdxChildrenInternalFieldOwners = 9,
  ChildMdxChildrenInternalIgnoreType = 10,
  ChildMdxChildrenInternalMediaType = 11,
  ChildMdxChildrenInternalOwner = 12,
  ChildMdxChildrenInternalType = 13,
  ChildMdxChildrenParentChildren = 14,
  ChildMdxChildrenParentId = 15,
  ChildMdxExcerpt = 16,
  ChildMdxFileAbsolutePath = 17,
  ChildMdxFrontmatterTitle = 18,
  ChildMdxHeadings = 19,
  ChildMdxHeadingsDepth = 20,
  ChildMdxHeadingsValue = 21,
  ChildMdxHtml = 22,
  ChildMdxId = 23,
  ChildMdxInternalContent = 24,
  ChildMdxInternalContentDigest = 25,
  ChildMdxInternalDescription = 26,
  ChildMdxInternalFieldOwners = 27,
  ChildMdxInternalIgnoreType = 28,
  ChildMdxInternalMediaType = 29,
  ChildMdxInternalOwner = 30,
  ChildMdxInternalType = 31,
  ChildMdxMdxAst = 32,
  ChildMdxParentChildren = 33,
  ChildMdxParentChildrenChildren = 34,
  ChildMdxParentChildrenId = 35,
  ChildMdxParentId = 36,
  ChildMdxParentInternalContent = 37,
  ChildMdxParentInternalContentDigest = 38,
  ChildMdxParentInternalDescription = 39,
  ChildMdxParentInternalFieldOwners = 40,
  ChildMdxParentInternalIgnoreType = 41,
  ChildMdxParentInternalMediaType = 42,
  ChildMdxParentInternalOwner = 43,
  ChildMdxParentInternalType = 44,
  ChildMdxParentParentChildren = 45,
  ChildMdxParentParentId = 46,
  ChildMdxRawBody = 47,
  ChildMdxSlug = 48,
  ChildMdxTableOfContents = 49,
  ChildMdxTimeToRead = 50,
  ChildMdxWordCountParagraphs = 51,
  ChildMdxWordCountSentences = 52,
  ChildMdxWordCountWords = 53,
  Children = 54,
  ChildrenMdx = 55,
  ChildrenMdxBody = 56,
  ChildrenMdxChildren = 57,
  ChildrenMdxChildrenChildren = 58,
  ChildrenMdxChildrenChildrenChildren = 59,
  ChildrenMdxChildrenChildrenId = 60,
  ChildrenMdxChildrenId = 61,
  ChildrenMdxChildrenInternalContent = 62,
  ChildrenMdxChildrenInternalContentDigest = 63,
  ChildrenMdxChildrenInternalDescription = 64,
  ChildrenMdxChildrenInternalFieldOwners = 65,
  ChildrenMdxChildrenInternalIgnoreType = 66,
  ChildrenMdxChildrenInternalMediaType = 67,
  ChildrenMdxChildrenInternalOwner = 68,
  ChildrenMdxChildrenInternalType = 69,
  ChildrenMdxChildrenParentChildren = 70,
  ChildrenMdxChildrenParentId = 71,
  ChildrenMdxExcerpt = 72,
  ChildrenMdxFileAbsolutePath = 73,
  ChildrenMdxFrontmatterTitle = 74,
  ChildrenMdxHeadings = 75,
  ChildrenMdxHeadingsDepth = 76,
  ChildrenMdxHeadingsValue = 77,
  ChildrenMdxHtml = 78,
  ChildrenMdxId = 79,
  ChildrenMdxInternalContent = 80,
  ChildrenMdxInternalContentDigest = 81,
  ChildrenMdxInternalDescription = 82,
  ChildrenMdxInternalFieldOwners = 83,
  ChildrenMdxInternalIgnoreType = 84,
  ChildrenMdxInternalMediaType = 85,
  ChildrenMdxInternalOwner = 86,
  ChildrenMdxInternalType = 87,
  ChildrenMdxMdxAst = 88,
  ChildrenMdxParentChildren = 89,
  ChildrenMdxParentChildrenChildren = 90,
  ChildrenMdxParentChildrenId = 91,
  ChildrenMdxParentId = 92,
  ChildrenMdxParentInternalContent = 93,
  ChildrenMdxParentInternalContentDigest = 94,
  ChildrenMdxParentInternalDescription = 95,
  ChildrenMdxParentInternalFieldOwners = 96,
  ChildrenMdxParentInternalIgnoreType = 97,
  ChildrenMdxParentInternalMediaType = 98,
  ChildrenMdxParentInternalOwner = 99,
  ChildrenMdxParentInternalType = 100,
  ChildrenMdxParentParentChildren = 101,
  ChildrenMdxParentParentId = 102,
  ChildrenMdxRawBody = 103,
  ChildrenMdxSlug = 104,
  ChildrenMdxTableOfContents = 105,
  ChildrenMdxTimeToRead = 106,
  ChildrenMdxWordCountParagraphs = 107,
  ChildrenMdxWordCountSentences = 108,
  ChildrenMdxWordCountWords = 109,
  ChildrenChildren = 110,
  ChildrenChildrenChildren = 111,
  ChildrenChildrenChildrenChildren = 112,
  ChildrenChildrenChildrenId = 113,
  ChildrenChildrenId = 114,
  ChildrenChildrenInternalContent = 115,
  ChildrenChildrenInternalContentDigest = 116,
  ChildrenChildrenInternalDescription = 117,
  ChildrenChildrenInternalFieldOwners = 118,
  ChildrenChildrenInternalIgnoreType = 119,
  ChildrenChildrenInternalMediaType = 120,
  ChildrenChildrenInternalOwner = 121,
  ChildrenChildrenInternalType = 122,
  ChildrenChildrenParentChildren = 123,
  ChildrenChildrenParentId = 124,
  ChildrenId = 125,
  ChildrenInternalContent = 126,
  ChildrenInternalContentDigest = 127,
  ChildrenInternalDescription = 128,
  ChildrenInternalFieldOwners = 129,
  ChildrenInternalIgnoreType = 130,
  ChildrenInternalMediaType = 131,
  ChildrenInternalOwner = 132,
  ChildrenInternalType = 133,
  ChildrenParentChildren = 134,
  ChildrenParentChildrenChildren = 135,
  ChildrenParentChildrenId = 136,
  ChildrenParentId = 137,
  ChildrenParentInternalContent = 138,
  ChildrenParentInternalContentDigest = 139,
  ChildrenParentInternalDescription = 140,
  ChildrenParentInternalFieldOwners = 141,
  ChildrenParentInternalIgnoreType = 142,
  ChildrenParentInternalMediaType = 143,
  ChildrenParentInternalOwner = 144,
  ChildrenParentInternalType = 145,
  ChildrenParentParentChildren = 146,
  ChildrenParentParentId = 147,
  Detail = 148,
  Id = 149,
  InternalContent = 150,
  InternalContentDigest = 151,
  InternalDescription = 152,
  InternalFieldOwners = 153,
  InternalIgnoreType = 154,
  InternalMediaType = 155,
  InternalOwner = 156,
  InternalType = 157,
  ParentChildren = 158,
  ParentChildrenChildren = 159,
  ParentChildrenChildrenChildren = 160,
  ParentChildrenChildrenId = 161,
  ParentChildrenId = 162,
  ParentChildrenInternalContent = 163,
  ParentChildrenInternalContentDigest = 164,
  ParentChildrenInternalDescription = 165,
  ParentChildrenInternalFieldOwners = 166,
  ParentChildrenInternalIgnoreType = 167,
  ParentChildrenInternalMediaType = 168,
  ParentChildrenInternalOwner = 169,
  ParentChildrenInternalType = 170,
  ParentChildrenParentChildren = 171,
  ParentChildrenParentId = 172,
  ParentId = 173,
  ParentInternalContent = 174,
  ParentInternalContentDigest = 175,
  ParentInternalDescription = 176,
  ParentInternalFieldOwners = 177,
  ParentInternalIgnoreType = 178,
  ParentInternalMediaType = 179,
  ParentInternalOwner = 180,
  ParentInternalType = 181,
  ParentParentChildren = 182,
  ParentParentChildrenChildren = 183,
  ParentParentChildrenId = 184,
  ParentParentId = 185,
  ParentParentInternalContent = 186,
  ParentParentInternalContentDigest = 187,
  ParentParentInternalDescription = 188,
  ParentParentInternalFieldOwners = 189,
  ParentParentInternalIgnoreType = 190,
  ParentParentInternalMediaType = 191,
  ParentParentInternalOwner = 192,
  ParentParentInternalType = 193,
  ParentParentParentChildren = 194,
  ParentParentParentId = 195,
  SysType = 196
}

export type ContentfulProjectDetailTextNodeFilterInput = {
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
  detail: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulProjectDetailTextNodeSysFilterInput>;
};

export type ContentfulProjectDetailTextNodeFilterListInput = {
  elemMatch: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
};

export type ContentfulProjectDetailTextNodeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulProjectDetailTextNodeEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulProjectDetailTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulProjectDetailTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulProjectDetailTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeGroupConnectionGroupArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<ContentfulProjectDetailTextNodeFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectDetailTextNodeSys = {
  type: Maybe<Scalars['String']>;
};

export type ContentfulProjectDetailTextNodeSysFilterInput = {
  type: InputMaybe<StringQueryOperatorInput>;
};

export type BlogPostQueryVariables = Exact<{
  id: Scalars['String'];
  language: Scalars['String'];
}>;


export type BlogPostQuery = { post: Maybe<(
    Pick<ContentfulBlogPost, 'id' | 'title' | 'slug' | 'created' | 'updated' | 'excerpt'>
    & { createdDate: ContentfulBlogPost['created'], updatedDate: ContentfulBlogPost['updated'] }
    & { content: Maybe<(
      Pick<ContentfulBlogPostContentTextNode, 'content'>
      & { childMdx: Maybe<Pick<Mdx, 'body'>> }
    )>, tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>> }
  )>, links: { edges: Array<{ node: Pick<ContentfulHello, 'id' | 'node_locale' | 'name' | 'href'> }> }, icon: Maybe<(
    Pick<ContentfulAsset, 'title'>
    & { svg: Maybe<Pick<InlineSvg, 'content'>> }
  )>, locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

export type BuildTimeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type BuildTimeDataQuery = { site: Maybe<Pick<Site, 'buildTime'>> };

export type NotFoundPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type NotFoundPageQuery = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, icon: Maybe<(
    Pick<ContentfulAsset, 'title'>
    & { svg: Maybe<Pick<InlineSvg, 'content'>> }
  )> };

export type BlogPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type BlogPageQuery = { posts: { group: Array<{ edges: Array<{ node: (
          Pick<ContentfulBlogPost, 'id' | 'title' | 'slug' | 'created' | 'updated' | 'excerpt'>
          & { content: Maybe<Pick<ContentfulBlogPostContentTextNode, 'content'>>, tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>> }
        ) }> }> }, postsLite: { edges: Array<{ node: Pick<ContentfulBlogPost, 'title' | 'slug' | 'created'> }> }, locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, icon: Maybe<(
    Pick<ContentfulAsset, 'title'>
    & { svg: Maybe<Pick<InlineSvg, 'content'>> }
  )> };

export type IndexPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type IndexPageQuery = { links: { edges: Array<{ node: Pick<ContentfulHello, 'id' | 'node_locale' | 'name' | 'href'> }> }, whatICanDos: { edges: Array<{ node: (
        Pick<ContentfulWhatICanDo, 'id' | 'node_locale' | 'name' | 'subName'>
        & { icon: Maybe<(
          Pick<ContentfulIcon, 'name'>
          & { svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
        )> }
      ) }> }, projects: { edges: Array<{ node: (
        Pick<ContentfulProject, 'id' | 'node_locale' | 'name' | 'subName' | 'startDate'>
        & { tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>>, icon: Maybe<(
          Pick<ContentfulIcon, 'name'>
          & { svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
        )>, detail: Maybe<{ childMdx: Maybe<Pick<Mdx, 'body'>> }> }
      ) }> }, histories: { edges: Array<{ node: (
        Pick<ContentfulHistory, 'id' | 'node_locale' | 'date' | 'name' | 'subName'>
        & { icon: Maybe<(
          Pick<ContentfulIcon, 'name'>
          & { svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
        )> }
      ) }> }, osses: { edges: Array<{ node: (
        Pick<ContentfulOss, 'id' | 'node_locale' | 'name' | 'subName' | 'startDate' | 'href'>
        & { tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>>, icon: Maybe<(
          Pick<ContentfulIcon, 'name'>
          & { svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
        )>, image: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { file: Maybe<Pick<ContentfulAssetFile, 'url'>>, localFile: Maybe<{ childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
        )> }
      ) }> }, contacts: { edges: Array<{ node: (
        Pick<ContentfulContact, 'id' | 'node_locale' | 'name' | 'subName' | 'href'>
        & { icon: Maybe<{ svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }> }
      ) }> }, skills: { edges: Array<{ node: (
        Pick<ContentfulSkillMap, 'id' | 'name' | 'node_locale' | 'expanded'>
        & { skills: Maybe<Array<Maybe<Pick<ContentfulTag, 'id' | 'level' | 'name'>>>> }
      ) }> }, certification: { edges: Array<{ node: (
        Pick<ContentfulQualificationMap, 'id' | 'node_locale' | 'name' | 'expanded'>
        & { qualifications: Maybe<Array<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date'>>>> }
      ) }> }, locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, icon: Maybe<(
    Pick<ContentfulAsset, 'title'>
    & { svg: Maybe<Pick<InlineSvg, 'content'>> }
  )> };
