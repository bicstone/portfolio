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
  category: Maybe<ContentfulTag>;
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
  thumbnail: Maybe<ContentfulAsset>;
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
  CategoryBlogPost = 0,
  CategoryBlogPostCategoryBlogPost = 1,
  CategoryBlogPostCategoryChildren = 2,
  CategoryBlogPostCategoryContentfulId = 3,
  CategoryBlogPostCategoryCreatedAt = 4,
  CategoryBlogPostCategoryId = 5,
  CategoryBlogPostCategoryLevel = 6,
  CategoryBlogPostCategoryName = 7,
  CategoryBlogPostCategoryNodeLocale = 8,
  CategoryBlogPostCategoryOss = 9,
  CategoryBlogPostCategoryProject = 10,
  CategoryBlogPostCategorySkillMap = 11,
  CategoryBlogPostCategorySpaceId = 12,
  CategoryBlogPostCategoryUpdatedAt = 13,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeChildren = 14,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 15,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeContent = 16,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeId = 17,
  CategoryBlogPostChildren = 18,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNode = 19,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 20,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 21,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeContent = 22,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeId = 23,
  CategoryBlogPostChildrenChildren = 24,
  CategoryBlogPostChildrenId = 25,
  CategoryBlogPostContentChildren = 26,
  CategoryBlogPostContentChildrenMdx = 27,
  CategoryBlogPostContentContent = 28,
  CategoryBlogPostContentId = 29,
  CategoryBlogPostContentfulId = 30,
  CategoryBlogPostCreated = 31,
  CategoryBlogPostCreatedAt = 32,
  CategoryBlogPostExcerpt = 33,
  CategoryBlogPostId = 34,
  CategoryBlogPostInternalContent = 35,
  CategoryBlogPostInternalContentDigest = 36,
  CategoryBlogPostInternalDescription = 37,
  CategoryBlogPostInternalFieldOwners = 38,
  CategoryBlogPostInternalIgnoreType = 39,
  CategoryBlogPostInternalMediaType = 40,
  CategoryBlogPostInternalOwner = 41,
  CategoryBlogPostInternalType = 42,
  CategoryBlogPostNodeLocale = 43,
  CategoryBlogPostParentChildren = 44,
  CategoryBlogPostParentId = 45,
  CategoryBlogPostSlug = 46,
  CategoryBlogPostSpaceId = 47,
  CategoryBlogPostSysRevision = 48,
  CategoryBlogPostSysType = 49,
  CategoryBlogPostTags = 50,
  CategoryBlogPostTagsBlogPost = 51,
  CategoryBlogPostTagsChildren = 52,
  CategoryBlogPostTagsContentfulId = 53,
  CategoryBlogPostTagsCreatedAt = 54,
  CategoryBlogPostTagsId = 55,
  CategoryBlogPostTagsLevel = 56,
  CategoryBlogPostTagsName = 57,
  CategoryBlogPostTagsNodeLocale = 58,
  CategoryBlogPostTagsOss = 59,
  CategoryBlogPostTagsProject = 60,
  CategoryBlogPostTagsSkillMap = 61,
  CategoryBlogPostTagsSpaceId = 62,
  CategoryBlogPostTagsUpdatedAt = 63,
  CategoryBlogPostThumbnailChildren = 64,
  CategoryBlogPostThumbnailContentfulId = 65,
  CategoryBlogPostThumbnailCreatedAt = 66,
  CategoryBlogPostThumbnailDescription = 67,
  CategoryBlogPostThumbnailFilename = 68,
  CategoryBlogPostThumbnailFilesize = 69,
  CategoryBlogPostThumbnailGatsbyImage = 70,
  CategoryBlogPostThumbnailGatsbyImageData = 71,
  CategoryBlogPostThumbnailHeight = 72,
  CategoryBlogPostThumbnailId = 73,
  CategoryBlogPostThumbnailMimeType = 74,
  CategoryBlogPostThumbnailNodeLocale = 75,
  CategoryBlogPostThumbnailPlaceholderUrl = 76,
  CategoryBlogPostThumbnailPublicUrl = 77,
  CategoryBlogPostThumbnailSpaceId = 78,
  CategoryBlogPostThumbnailTitle = 79,
  CategoryBlogPostThumbnailUpdatedAt = 80,
  CategoryBlogPostThumbnailUrl = 81,
  CategoryBlogPostThumbnailWidth = 82,
  CategoryBlogPostTitle = 83,
  CategoryBlogPostUpdated = 84,
  CategoryBlogPostUpdatedAt = 85,
  CategoryChildren = 86,
  CategoryChildrenChildren = 87,
  CategoryChildrenChildrenChildren = 88,
  CategoryChildrenChildrenId = 89,
  CategoryChildrenId = 90,
  CategoryChildrenInternalContent = 91,
  CategoryChildrenInternalContentDigest = 92,
  CategoryChildrenInternalDescription = 93,
  CategoryChildrenInternalFieldOwners = 94,
  CategoryChildrenInternalIgnoreType = 95,
  CategoryChildrenInternalMediaType = 96,
  CategoryChildrenInternalOwner = 97,
  CategoryChildrenInternalType = 98,
  CategoryChildrenParentChildren = 99,
  CategoryChildrenParentId = 100,
  CategoryContentfulId = 101,
  CategoryCreatedAt = 102,
  CategoryId = 103,
  CategoryInternalContent = 104,
  CategoryInternalContentDigest = 105,
  CategoryInternalDescription = 106,
  CategoryInternalFieldOwners = 107,
  CategoryInternalIgnoreType = 108,
  CategoryInternalMediaType = 109,
  CategoryInternalOwner = 110,
  CategoryInternalType = 111,
  CategoryLevel = 112,
  CategoryName = 113,
  CategoryNodeLocale = 114,
  CategoryOss = 115,
  CategoryOssChildContentfulOssDetailTextNodeChildren = 116,
  CategoryOssChildContentfulOssDetailTextNodeChildrenMdx = 117,
  CategoryOssChildContentfulOssDetailTextNodeDetail = 118,
  CategoryOssChildContentfulOssDetailTextNodeId = 119,
  CategoryOssChildren = 120,
  CategoryOssChildrenContentfulOssDetailTextNode = 121,
  CategoryOssChildrenContentfulOssDetailTextNodeChildren = 122,
  CategoryOssChildrenContentfulOssDetailTextNodeChildrenMdx = 123,
  CategoryOssChildrenContentfulOssDetailTextNodeDetail = 124,
  CategoryOssChildrenContentfulOssDetailTextNodeId = 125,
  CategoryOssChildrenChildren = 126,
  CategoryOssChildrenId = 127,
  CategoryOssContentfulId = 128,
  CategoryOssCreatedAt = 129,
  CategoryOssDetailChildren = 130,
  CategoryOssDetailChildrenMdx = 131,
  CategoryOssDetailDetail = 132,
  CategoryOssDetailId = 133,
  CategoryOssHref = 134,
  CategoryOssIconChildren = 135,
  CategoryOssIconChildrenContentfulIconSvgTextNode = 136,
  CategoryOssIconContact = 137,
  CategoryOssIconContentfulId = 138,
  CategoryOssIconCreatedAt = 139,
  CategoryOssIconHistory = 140,
  CategoryOssIconId = 141,
  CategoryOssIconName = 142,
  CategoryOssIconNodeLocale = 143,
  CategoryOssIconOss = 144,
  CategoryOssIconProject = 145,
  CategoryOssIconSpaceId = 146,
  CategoryOssIconUpdatedAt = 147,
  CategoryOssIconWhatICanDo = 148,
  CategoryOssId = 149,
  CategoryOssImageChildren = 150,
  CategoryOssImageContentfulId = 151,
  CategoryOssImageCreatedAt = 152,
  CategoryOssImageDescription = 153,
  CategoryOssImageFilename = 154,
  CategoryOssImageFilesize = 155,
  CategoryOssImageGatsbyImage = 156,
  CategoryOssImageGatsbyImageData = 157,
  CategoryOssImageHeight = 158,
  CategoryOssImageId = 159,
  CategoryOssImageMimeType = 160,
  CategoryOssImageNodeLocale = 161,
  CategoryOssImagePlaceholderUrl = 162,
  CategoryOssImagePublicUrl = 163,
  CategoryOssImageSpaceId = 164,
  CategoryOssImageTitle = 165,
  CategoryOssImageUpdatedAt = 166,
  CategoryOssImageUrl = 167,
  CategoryOssImageWidth = 168,
  CategoryOssInternalContent = 169,
  CategoryOssInternalContentDigest = 170,
  CategoryOssInternalDescription = 171,
  CategoryOssInternalFieldOwners = 172,
  CategoryOssInternalIgnoreType = 173,
  CategoryOssInternalMediaType = 174,
  CategoryOssInternalOwner = 175,
  CategoryOssInternalType = 176,
  CategoryOssName = 177,
  CategoryOssNodeLocale = 178,
  CategoryOssParentChildren = 179,
  CategoryOssParentId = 180,
  CategoryOssSpaceId = 181,
  CategoryOssStartDate = 182,
  CategoryOssSubName = 183,
  CategoryOssSysRevision = 184,
  CategoryOssSysType = 185,
  CategoryOssTags = 186,
  CategoryOssTagsBlogPost = 187,
  CategoryOssTagsChildren = 188,
  CategoryOssTagsContentfulId = 189,
  CategoryOssTagsCreatedAt = 190,
  CategoryOssTagsId = 191,
  CategoryOssTagsLevel = 192,
  CategoryOssTagsName = 193,
  CategoryOssTagsNodeLocale = 194,
  CategoryOssTagsOss = 195,
  CategoryOssTagsProject = 196,
  CategoryOssTagsSkillMap = 197,
  CategoryOssTagsSpaceId = 198,
  CategoryOssTagsUpdatedAt = 199,
  CategoryOssUpdatedAt = 200,
  CategoryParentChildren = 201,
  CategoryParentChildrenChildren = 202,
  CategoryParentChildrenId = 203,
  CategoryParentId = 204,
  CategoryParentInternalContent = 205,
  CategoryParentInternalContentDigest = 206,
  CategoryParentInternalDescription = 207,
  CategoryParentInternalFieldOwners = 208,
  CategoryParentInternalIgnoreType = 209,
  CategoryParentInternalMediaType = 210,
  CategoryParentInternalOwner = 211,
  CategoryParentInternalType = 212,
  CategoryParentParentChildren = 213,
  CategoryParentParentId = 214,
  CategoryProject = 215,
  CategoryProjectChildContentfulProjectDetailTextNodeChildren = 216,
  CategoryProjectChildContentfulProjectDetailTextNodeChildrenMdx = 217,
  CategoryProjectChildContentfulProjectDetailTextNodeDetail = 218,
  CategoryProjectChildContentfulProjectDetailTextNodeId = 219,
  CategoryProjectChildren = 220,
  CategoryProjectChildrenContentfulProjectDetailTextNode = 221,
  CategoryProjectChildrenContentfulProjectDetailTextNodeChildren = 222,
  CategoryProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 223,
  CategoryProjectChildrenContentfulProjectDetailTextNodeDetail = 224,
  CategoryProjectChildrenContentfulProjectDetailTextNodeId = 225,
  CategoryProjectChildrenChildren = 226,
  CategoryProjectChildrenId = 227,
  CategoryProjectContentfulId = 228,
  CategoryProjectCreatedAt = 229,
  CategoryProjectDetailChildren = 230,
  CategoryProjectDetailChildrenMdx = 231,
  CategoryProjectDetailDetail = 232,
  CategoryProjectDetailId = 233,
  CategoryProjectEndDate = 234,
  CategoryProjectIconChildren = 235,
  CategoryProjectIconChildrenContentfulIconSvgTextNode = 236,
  CategoryProjectIconContact = 237,
  CategoryProjectIconContentfulId = 238,
  CategoryProjectIconCreatedAt = 239,
  CategoryProjectIconHistory = 240,
  CategoryProjectIconId = 241,
  CategoryProjectIconName = 242,
  CategoryProjectIconNodeLocale = 243,
  CategoryProjectIconOss = 244,
  CategoryProjectIconProject = 245,
  CategoryProjectIconSpaceId = 246,
  CategoryProjectIconUpdatedAt = 247,
  CategoryProjectIconWhatICanDo = 248,
  CategoryProjectId = 249,
  CategoryProjectInternalContent = 250,
  CategoryProjectInternalContentDigest = 251,
  CategoryProjectInternalDescription = 252,
  CategoryProjectInternalFieldOwners = 253,
  CategoryProjectInternalIgnoreType = 254,
  CategoryProjectInternalMediaType = 255,
  CategoryProjectInternalOwner = 256,
  CategoryProjectInternalType = 257,
  CategoryProjectName = 258,
  CategoryProjectNodeLocale = 259,
  CategoryProjectParentChildren = 260,
  CategoryProjectParentId = 261,
  CategoryProjectSpaceId = 262,
  CategoryProjectStartDate = 263,
  CategoryProjectSubName = 264,
  CategoryProjectSysRevision = 265,
  CategoryProjectSysType = 266,
  CategoryProjectTags = 267,
  CategoryProjectTagsBlogPost = 268,
  CategoryProjectTagsChildren = 269,
  CategoryProjectTagsContentfulId = 270,
  CategoryProjectTagsCreatedAt = 271,
  CategoryProjectTagsId = 272,
  CategoryProjectTagsLevel = 273,
  CategoryProjectTagsName = 274,
  CategoryProjectTagsNodeLocale = 275,
  CategoryProjectTagsOss = 276,
  CategoryProjectTagsProject = 277,
  CategoryProjectTagsSkillMap = 278,
  CategoryProjectTagsSpaceId = 279,
  CategoryProjectTagsUpdatedAt = 280,
  CategoryProjectUpdatedAt = 281,
  CategorySkillMap = 282,
  CategorySkillMapChildren = 283,
  CategorySkillMapChildrenChildren = 284,
  CategorySkillMapChildrenId = 285,
  CategorySkillMapContentfulId = 286,
  CategorySkillMapCreatedAt = 287,
  CategorySkillMapExpanded = 288,
  CategorySkillMapId = 289,
  CategorySkillMapInternalContent = 290,
  CategorySkillMapInternalContentDigest = 291,
  CategorySkillMapInternalDescription = 292,
  CategorySkillMapInternalFieldOwners = 293,
  CategorySkillMapInternalIgnoreType = 294,
  CategorySkillMapInternalMediaType = 295,
  CategorySkillMapInternalOwner = 296,
  CategorySkillMapInternalType = 297,
  CategorySkillMapName = 298,
  CategorySkillMapNodeLocale = 299,
  CategorySkillMapParentChildren = 300,
  CategorySkillMapParentId = 301,
  CategorySkillMapSkills = 302,
  CategorySkillMapSkillsBlogPost = 303,
  CategorySkillMapSkillsChildren = 304,
  CategorySkillMapSkillsContentfulId = 305,
  CategorySkillMapSkillsCreatedAt = 306,
  CategorySkillMapSkillsId = 307,
  CategorySkillMapSkillsLevel = 308,
  CategorySkillMapSkillsName = 309,
  CategorySkillMapSkillsNodeLocale = 310,
  CategorySkillMapSkillsOss = 311,
  CategorySkillMapSkillsProject = 312,
  CategorySkillMapSkillsSkillMap = 313,
  CategorySkillMapSkillsSpaceId = 314,
  CategorySkillMapSkillsUpdatedAt = 315,
  CategorySkillMapSortKey = 316,
  CategorySkillMapSpaceId = 317,
  CategorySkillMapSysRevision = 318,
  CategorySkillMapSysType = 319,
  CategorySkillMapUpdatedAt = 320,
  CategorySpaceId = 321,
  CategorySysRevision = 322,
  CategorySysType = 323,
  CategoryUpdatedAt = 324,
  ChildContentfulBlogPostContentTextNodeChildMdxBody = 325,
  ChildContentfulBlogPostContentTextNodeChildMdxChildren = 326,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 327,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenId = 328,
  ChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 329,
  ChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 330,
  ChildContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 331,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadings = 332,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 333,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 334,
  ChildContentfulBlogPostContentTextNodeChildMdxHtml = 335,
  ChildContentfulBlogPostContentTextNodeChildMdxId = 336,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContent = 337,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 338,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalDescription = 339,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 340,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 341,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 342,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalOwner = 343,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalType = 344,
  ChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 345,
  ChildContentfulBlogPostContentTextNodeChildMdxParentChildren = 346,
  ChildContentfulBlogPostContentTextNodeChildMdxParentId = 347,
  ChildContentfulBlogPostContentTextNodeChildMdxRawBody = 348,
  ChildContentfulBlogPostContentTextNodeChildMdxSlug = 349,
  ChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 350,
  ChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 351,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 352,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 353,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountWords = 354,
  ChildContentfulBlogPostContentTextNodeChildren = 355,
  ChildContentfulBlogPostContentTextNodeChildrenMdx = 356,
  ChildContentfulBlogPostContentTextNodeChildrenMdxBody = 357,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 358,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 359,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 360,
  ChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 361,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 362,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 363,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 364,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 365,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 366,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 367,
  ChildContentfulBlogPostContentTextNodeChildrenMdxId = 368,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 369,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 370,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 371,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 372,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 373,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 374,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 375,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalType = 376,
  ChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 377,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 378,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentId = 379,
  ChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 380,
  ChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 381,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 382,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 383,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 384,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 385,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 386,
  ChildContentfulBlogPostContentTextNodeChildrenChildren = 387,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenChildren = 388,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenId = 389,
  ChildContentfulBlogPostContentTextNodeChildrenId = 390,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContent = 391,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 392,
  ChildContentfulBlogPostContentTextNodeChildrenInternalDescription = 393,
  ChildContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 394,
  ChildContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 395,
  ChildContentfulBlogPostContentTextNodeChildrenInternalMediaType = 396,
  ChildContentfulBlogPostContentTextNodeChildrenInternalOwner = 397,
  ChildContentfulBlogPostContentTextNodeChildrenInternalType = 398,
  ChildContentfulBlogPostContentTextNodeChildrenParentChildren = 399,
  ChildContentfulBlogPostContentTextNodeChildrenParentId = 400,
  ChildContentfulBlogPostContentTextNodeContent = 401,
  ChildContentfulBlogPostContentTextNodeId = 402,
  ChildContentfulBlogPostContentTextNodeInternalContent = 403,
  ChildContentfulBlogPostContentTextNodeInternalContentDigest = 404,
  ChildContentfulBlogPostContentTextNodeInternalDescription = 405,
  ChildContentfulBlogPostContentTextNodeInternalFieldOwners = 406,
  ChildContentfulBlogPostContentTextNodeInternalIgnoreType = 407,
  ChildContentfulBlogPostContentTextNodeInternalMediaType = 408,
  ChildContentfulBlogPostContentTextNodeInternalOwner = 409,
  ChildContentfulBlogPostContentTextNodeInternalType = 410,
  ChildContentfulBlogPostContentTextNodeParentChildren = 411,
  ChildContentfulBlogPostContentTextNodeParentChildrenChildren = 412,
  ChildContentfulBlogPostContentTextNodeParentChildrenId = 413,
  ChildContentfulBlogPostContentTextNodeParentId = 414,
  ChildContentfulBlogPostContentTextNodeParentInternalContent = 415,
  ChildContentfulBlogPostContentTextNodeParentInternalContentDigest = 416,
  ChildContentfulBlogPostContentTextNodeParentInternalDescription = 417,
  ChildContentfulBlogPostContentTextNodeParentInternalFieldOwners = 418,
  ChildContentfulBlogPostContentTextNodeParentInternalIgnoreType = 419,
  ChildContentfulBlogPostContentTextNodeParentInternalMediaType = 420,
  ChildContentfulBlogPostContentTextNodeParentInternalOwner = 421,
  ChildContentfulBlogPostContentTextNodeParentInternalType = 422,
  ChildContentfulBlogPostContentTextNodeParentParentChildren = 423,
  ChildContentfulBlogPostContentTextNodeParentParentId = 424,
  ChildContentfulBlogPostContentTextNodeSysType = 425,
  Children = 426,
  ChildrenContentfulBlogPostContentTextNode = 427,
  ChildrenContentfulBlogPostContentTextNodeChildMdxBody = 428,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 429,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 430,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenId = 431,
  ChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 432,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 433,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 434,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 435,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 436,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 437,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 438,
  ChildrenContentfulBlogPostContentTextNodeChildMdxId = 439,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContent = 440,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 441,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalDescription = 442,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 443,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 444,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 445,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalOwner = 446,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalType = 447,
  ChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 448,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentChildren = 449,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentId = 450,
  ChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 451,
  ChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 452,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 453,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 454,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 455,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 456,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountWords = 457,
  ChildrenContentfulBlogPostContentTextNodeChildren = 458,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdx = 459,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 460,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 461,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 462,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 463,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 464,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 465,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 466,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 467,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 468,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 469,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 470,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 471,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 472,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 473,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 474,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 475,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 476,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 477,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 478,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalType = 479,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 480,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 481,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentId = 482,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 483,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 484,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 485,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 486,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 487,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 488,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 489,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildren = 490,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenChildren = 491,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenId = 492,
  ChildrenContentfulBlogPostContentTextNodeChildrenId = 493,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContent = 494,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 495,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalDescription = 496,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 497,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 498,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalMediaType = 499,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalOwner = 500,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalType = 501,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentChildren = 502,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentId = 503,
  ChildrenContentfulBlogPostContentTextNodeContent = 504,
  ChildrenContentfulBlogPostContentTextNodeId = 505,
  ChildrenContentfulBlogPostContentTextNodeInternalContent = 506,
  ChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 507,
  ChildrenContentfulBlogPostContentTextNodeInternalDescription = 508,
  ChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 509,
  ChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 510,
  ChildrenContentfulBlogPostContentTextNodeInternalMediaType = 511,
  ChildrenContentfulBlogPostContentTextNodeInternalOwner = 512,
  ChildrenContentfulBlogPostContentTextNodeInternalType = 513,
  ChildrenContentfulBlogPostContentTextNodeParentChildren = 514,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenChildren = 515,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenId = 516,
  ChildrenContentfulBlogPostContentTextNodeParentId = 517,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContent = 518,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentDigest = 519,
  ChildrenContentfulBlogPostContentTextNodeParentInternalDescription = 520,
  ChildrenContentfulBlogPostContentTextNodeParentInternalFieldOwners = 521,
  ChildrenContentfulBlogPostContentTextNodeParentInternalIgnoreType = 522,
  ChildrenContentfulBlogPostContentTextNodeParentInternalMediaType = 523,
  ChildrenContentfulBlogPostContentTextNodeParentInternalOwner = 524,
  ChildrenContentfulBlogPostContentTextNodeParentInternalType = 525,
  ChildrenContentfulBlogPostContentTextNodeParentParentChildren = 526,
  ChildrenContentfulBlogPostContentTextNodeParentParentId = 527,
  ChildrenContentfulBlogPostContentTextNodeSysType = 528,
  ChildrenChildren = 529,
  ChildrenChildrenChildren = 530,
  ChildrenChildrenChildrenChildren = 531,
  ChildrenChildrenChildrenId = 532,
  ChildrenChildrenId = 533,
  ChildrenChildrenInternalContent = 534,
  ChildrenChildrenInternalContentDigest = 535,
  ChildrenChildrenInternalDescription = 536,
  ChildrenChildrenInternalFieldOwners = 537,
  ChildrenChildrenInternalIgnoreType = 538,
  ChildrenChildrenInternalMediaType = 539,
  ChildrenChildrenInternalOwner = 540,
  ChildrenChildrenInternalType = 541,
  ChildrenChildrenParentChildren = 542,
  ChildrenChildrenParentId = 543,
  ChildrenId = 544,
  ChildrenInternalContent = 545,
  ChildrenInternalContentDigest = 546,
  ChildrenInternalDescription = 547,
  ChildrenInternalFieldOwners = 548,
  ChildrenInternalIgnoreType = 549,
  ChildrenInternalMediaType = 550,
  ChildrenInternalOwner = 551,
  ChildrenInternalType = 552,
  ChildrenParentChildren = 553,
  ChildrenParentChildrenChildren = 554,
  ChildrenParentChildrenId = 555,
  ChildrenParentId = 556,
  ChildrenParentInternalContent = 557,
  ChildrenParentInternalContentDigest = 558,
  ChildrenParentInternalDescription = 559,
  ChildrenParentInternalFieldOwners = 560,
  ChildrenParentInternalIgnoreType = 561,
  ChildrenParentInternalMediaType = 562,
  ChildrenParentInternalOwner = 563,
  ChildrenParentInternalType = 564,
  ChildrenParentParentChildren = 565,
  ChildrenParentParentId = 566,
  ContentChildMdxBody = 567,
  ContentChildMdxChildren = 568,
  ContentChildMdxChildrenChildren = 569,
  ContentChildMdxChildrenId = 570,
  ContentChildMdxExcerpt = 571,
  ContentChildMdxFileAbsolutePath = 572,
  ContentChildMdxFrontmatterTitle = 573,
  ContentChildMdxHeadings = 574,
  ContentChildMdxHeadingsDepth = 575,
  ContentChildMdxHeadingsValue = 576,
  ContentChildMdxHtml = 577,
  ContentChildMdxId = 578,
  ContentChildMdxInternalContent = 579,
  ContentChildMdxInternalContentDigest = 580,
  ContentChildMdxInternalDescription = 581,
  ContentChildMdxInternalFieldOwners = 582,
  ContentChildMdxInternalIgnoreType = 583,
  ContentChildMdxInternalMediaType = 584,
  ContentChildMdxInternalOwner = 585,
  ContentChildMdxInternalType = 586,
  ContentChildMdxMdxAst = 587,
  ContentChildMdxParentChildren = 588,
  ContentChildMdxParentId = 589,
  ContentChildMdxRawBody = 590,
  ContentChildMdxSlug = 591,
  ContentChildMdxTableOfContents = 592,
  ContentChildMdxTimeToRead = 593,
  ContentChildMdxWordCountParagraphs = 594,
  ContentChildMdxWordCountSentences = 595,
  ContentChildMdxWordCountWords = 596,
  ContentChildren = 597,
  ContentChildrenMdx = 598,
  ContentChildrenMdxBody = 599,
  ContentChildrenMdxChildren = 600,
  ContentChildrenMdxChildrenChildren = 601,
  ContentChildrenMdxChildrenId = 602,
  ContentChildrenMdxExcerpt = 603,
  ContentChildrenMdxFileAbsolutePath = 604,
  ContentChildrenMdxFrontmatterTitle = 605,
  ContentChildrenMdxHeadings = 606,
  ContentChildrenMdxHeadingsDepth = 607,
  ContentChildrenMdxHeadingsValue = 608,
  ContentChildrenMdxHtml = 609,
  ContentChildrenMdxId = 610,
  ContentChildrenMdxInternalContent = 611,
  ContentChildrenMdxInternalContentDigest = 612,
  ContentChildrenMdxInternalDescription = 613,
  ContentChildrenMdxInternalFieldOwners = 614,
  ContentChildrenMdxInternalIgnoreType = 615,
  ContentChildrenMdxInternalMediaType = 616,
  ContentChildrenMdxInternalOwner = 617,
  ContentChildrenMdxInternalType = 618,
  ContentChildrenMdxMdxAst = 619,
  ContentChildrenMdxParentChildren = 620,
  ContentChildrenMdxParentId = 621,
  ContentChildrenMdxRawBody = 622,
  ContentChildrenMdxSlug = 623,
  ContentChildrenMdxTableOfContents = 624,
  ContentChildrenMdxTimeToRead = 625,
  ContentChildrenMdxWordCountParagraphs = 626,
  ContentChildrenMdxWordCountSentences = 627,
  ContentChildrenMdxWordCountWords = 628,
  ContentChildrenChildren = 629,
  ContentChildrenChildrenChildren = 630,
  ContentChildrenChildrenId = 631,
  ContentChildrenId = 632,
  ContentChildrenInternalContent = 633,
  ContentChildrenInternalContentDigest = 634,
  ContentChildrenInternalDescription = 635,
  ContentChildrenInternalFieldOwners = 636,
  ContentChildrenInternalIgnoreType = 637,
  ContentChildrenInternalMediaType = 638,
  ContentChildrenInternalOwner = 639,
  ContentChildrenInternalType = 640,
  ContentChildrenParentChildren = 641,
  ContentChildrenParentId = 642,
  ContentContent = 643,
  ContentId = 644,
  ContentInternalContent = 645,
  ContentInternalContentDigest = 646,
  ContentInternalDescription = 647,
  ContentInternalFieldOwners = 648,
  ContentInternalIgnoreType = 649,
  ContentInternalMediaType = 650,
  ContentInternalOwner = 651,
  ContentInternalType = 652,
  ContentParentChildren = 653,
  ContentParentChildrenChildren = 654,
  ContentParentChildrenId = 655,
  ContentParentId = 656,
  ContentParentInternalContent = 657,
  ContentParentInternalContentDigest = 658,
  ContentParentInternalDescription = 659,
  ContentParentInternalFieldOwners = 660,
  ContentParentInternalIgnoreType = 661,
  ContentParentInternalMediaType = 662,
  ContentParentInternalOwner = 663,
  ContentParentInternalType = 664,
  ContentParentParentChildren = 665,
  ContentParentParentId = 666,
  ContentSysType = 667,
  ContentfulId = 668,
  Created = 669,
  CreatedAt = 670,
  Excerpt = 671,
  Id = 672,
  InternalContent = 673,
  InternalContentDigest = 674,
  InternalDescription = 675,
  InternalFieldOwners = 676,
  InternalIgnoreType = 677,
  InternalMediaType = 678,
  InternalOwner = 679,
  InternalType = 680,
  NodeLocale = 681,
  ParentChildren = 682,
  ParentChildrenChildren = 683,
  ParentChildrenChildrenChildren = 684,
  ParentChildrenChildrenId = 685,
  ParentChildrenId = 686,
  ParentChildrenInternalContent = 687,
  ParentChildrenInternalContentDigest = 688,
  ParentChildrenInternalDescription = 689,
  ParentChildrenInternalFieldOwners = 690,
  ParentChildrenInternalIgnoreType = 691,
  ParentChildrenInternalMediaType = 692,
  ParentChildrenInternalOwner = 693,
  ParentChildrenInternalType = 694,
  ParentChildrenParentChildren = 695,
  ParentChildrenParentId = 696,
  ParentId = 697,
  ParentInternalContent = 698,
  ParentInternalContentDigest = 699,
  ParentInternalDescription = 700,
  ParentInternalFieldOwners = 701,
  ParentInternalIgnoreType = 702,
  ParentInternalMediaType = 703,
  ParentInternalOwner = 704,
  ParentInternalType = 705,
  ParentParentChildren = 706,
  ParentParentChildrenChildren = 707,
  ParentParentChildrenId = 708,
  ParentParentId = 709,
  ParentParentInternalContent = 710,
  ParentParentInternalContentDigest = 711,
  ParentParentInternalDescription = 712,
  ParentParentInternalFieldOwners = 713,
  ParentParentInternalIgnoreType = 714,
  ParentParentInternalMediaType = 715,
  ParentParentInternalOwner = 716,
  ParentParentInternalType = 717,
  ParentParentParentChildren = 718,
  ParentParentParentId = 719,
  Slug = 720,
  SpaceId = 721,
  SysContentTypeSysId = 722,
  SysContentTypeSysLinkType = 723,
  SysContentTypeSysType = 724,
  SysRevision = 725,
  SysType = 726,
  Tags = 727,
  TagsBlogPost = 728,
  TagsBlogPostCategoryBlogPost = 729,
  TagsBlogPostCategoryChildren = 730,
  TagsBlogPostCategoryContentfulId = 731,
  TagsBlogPostCategoryCreatedAt = 732,
  TagsBlogPostCategoryId = 733,
  TagsBlogPostCategoryLevel = 734,
  TagsBlogPostCategoryName = 735,
  TagsBlogPostCategoryNodeLocale = 736,
  TagsBlogPostCategoryOss = 737,
  TagsBlogPostCategoryProject = 738,
  TagsBlogPostCategorySkillMap = 739,
  TagsBlogPostCategorySpaceId = 740,
  TagsBlogPostCategoryUpdatedAt = 741,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 742,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 743,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 744,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 745,
  TagsBlogPostChildren = 746,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 747,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 748,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 749,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 750,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 751,
  TagsBlogPostChildrenChildren = 752,
  TagsBlogPostChildrenId = 753,
  TagsBlogPostContentChildren = 754,
  TagsBlogPostContentChildrenMdx = 755,
  TagsBlogPostContentContent = 756,
  TagsBlogPostContentId = 757,
  TagsBlogPostContentfulId = 758,
  TagsBlogPostCreated = 759,
  TagsBlogPostCreatedAt = 760,
  TagsBlogPostExcerpt = 761,
  TagsBlogPostId = 762,
  TagsBlogPostInternalContent = 763,
  TagsBlogPostInternalContentDigest = 764,
  TagsBlogPostInternalDescription = 765,
  TagsBlogPostInternalFieldOwners = 766,
  TagsBlogPostInternalIgnoreType = 767,
  TagsBlogPostInternalMediaType = 768,
  TagsBlogPostInternalOwner = 769,
  TagsBlogPostInternalType = 770,
  TagsBlogPostNodeLocale = 771,
  TagsBlogPostParentChildren = 772,
  TagsBlogPostParentId = 773,
  TagsBlogPostSlug = 774,
  TagsBlogPostSpaceId = 775,
  TagsBlogPostSysRevision = 776,
  TagsBlogPostSysType = 777,
  TagsBlogPostTags = 778,
  TagsBlogPostTagsBlogPost = 779,
  TagsBlogPostTagsChildren = 780,
  TagsBlogPostTagsContentfulId = 781,
  TagsBlogPostTagsCreatedAt = 782,
  TagsBlogPostTagsId = 783,
  TagsBlogPostTagsLevel = 784,
  TagsBlogPostTagsName = 785,
  TagsBlogPostTagsNodeLocale = 786,
  TagsBlogPostTagsOss = 787,
  TagsBlogPostTagsProject = 788,
  TagsBlogPostTagsSkillMap = 789,
  TagsBlogPostTagsSpaceId = 790,
  TagsBlogPostTagsUpdatedAt = 791,
  TagsBlogPostThumbnailChildren = 792,
  TagsBlogPostThumbnailContentfulId = 793,
  TagsBlogPostThumbnailCreatedAt = 794,
  TagsBlogPostThumbnailDescription = 795,
  TagsBlogPostThumbnailFilename = 796,
  TagsBlogPostThumbnailFilesize = 797,
  TagsBlogPostThumbnailGatsbyImage = 798,
  TagsBlogPostThumbnailGatsbyImageData = 799,
  TagsBlogPostThumbnailHeight = 800,
  TagsBlogPostThumbnailId = 801,
  TagsBlogPostThumbnailMimeType = 802,
  TagsBlogPostThumbnailNodeLocale = 803,
  TagsBlogPostThumbnailPlaceholderUrl = 804,
  TagsBlogPostThumbnailPublicUrl = 805,
  TagsBlogPostThumbnailSpaceId = 806,
  TagsBlogPostThumbnailTitle = 807,
  TagsBlogPostThumbnailUpdatedAt = 808,
  TagsBlogPostThumbnailUrl = 809,
  TagsBlogPostThumbnailWidth = 810,
  TagsBlogPostTitle = 811,
  TagsBlogPostUpdated = 812,
  TagsBlogPostUpdatedAt = 813,
  TagsChildren = 814,
  TagsChildrenChildren = 815,
  TagsChildrenChildrenChildren = 816,
  TagsChildrenChildrenId = 817,
  TagsChildrenId = 818,
  TagsChildrenInternalContent = 819,
  TagsChildrenInternalContentDigest = 820,
  TagsChildrenInternalDescription = 821,
  TagsChildrenInternalFieldOwners = 822,
  TagsChildrenInternalIgnoreType = 823,
  TagsChildrenInternalMediaType = 824,
  TagsChildrenInternalOwner = 825,
  TagsChildrenInternalType = 826,
  TagsChildrenParentChildren = 827,
  TagsChildrenParentId = 828,
  TagsContentfulId = 829,
  TagsCreatedAt = 830,
  TagsId = 831,
  TagsInternalContent = 832,
  TagsInternalContentDigest = 833,
  TagsInternalDescription = 834,
  TagsInternalFieldOwners = 835,
  TagsInternalIgnoreType = 836,
  TagsInternalMediaType = 837,
  TagsInternalOwner = 838,
  TagsInternalType = 839,
  TagsLevel = 840,
  TagsName = 841,
  TagsNodeLocale = 842,
  TagsOss = 843,
  TagsOssChildContentfulOssDetailTextNodeChildren = 844,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 845,
  TagsOssChildContentfulOssDetailTextNodeDetail = 846,
  TagsOssChildContentfulOssDetailTextNodeId = 847,
  TagsOssChildren = 848,
  TagsOssChildrenContentfulOssDetailTextNode = 849,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 850,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 851,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 852,
  TagsOssChildrenContentfulOssDetailTextNodeId = 853,
  TagsOssChildrenChildren = 854,
  TagsOssChildrenId = 855,
  TagsOssContentfulId = 856,
  TagsOssCreatedAt = 857,
  TagsOssDetailChildren = 858,
  TagsOssDetailChildrenMdx = 859,
  TagsOssDetailDetail = 860,
  TagsOssDetailId = 861,
  TagsOssHref = 862,
  TagsOssIconChildren = 863,
  TagsOssIconChildrenContentfulIconSvgTextNode = 864,
  TagsOssIconContact = 865,
  TagsOssIconContentfulId = 866,
  TagsOssIconCreatedAt = 867,
  TagsOssIconHistory = 868,
  TagsOssIconId = 869,
  TagsOssIconName = 870,
  TagsOssIconNodeLocale = 871,
  TagsOssIconOss = 872,
  TagsOssIconProject = 873,
  TagsOssIconSpaceId = 874,
  TagsOssIconUpdatedAt = 875,
  TagsOssIconWhatICanDo = 876,
  TagsOssId = 877,
  TagsOssImageChildren = 878,
  TagsOssImageContentfulId = 879,
  TagsOssImageCreatedAt = 880,
  TagsOssImageDescription = 881,
  TagsOssImageFilename = 882,
  TagsOssImageFilesize = 883,
  TagsOssImageGatsbyImage = 884,
  TagsOssImageGatsbyImageData = 885,
  TagsOssImageHeight = 886,
  TagsOssImageId = 887,
  TagsOssImageMimeType = 888,
  TagsOssImageNodeLocale = 889,
  TagsOssImagePlaceholderUrl = 890,
  TagsOssImagePublicUrl = 891,
  TagsOssImageSpaceId = 892,
  TagsOssImageTitle = 893,
  TagsOssImageUpdatedAt = 894,
  TagsOssImageUrl = 895,
  TagsOssImageWidth = 896,
  TagsOssInternalContent = 897,
  TagsOssInternalContentDigest = 898,
  TagsOssInternalDescription = 899,
  TagsOssInternalFieldOwners = 900,
  TagsOssInternalIgnoreType = 901,
  TagsOssInternalMediaType = 902,
  TagsOssInternalOwner = 903,
  TagsOssInternalType = 904,
  TagsOssName = 905,
  TagsOssNodeLocale = 906,
  TagsOssParentChildren = 907,
  TagsOssParentId = 908,
  TagsOssSpaceId = 909,
  TagsOssStartDate = 910,
  TagsOssSubName = 911,
  TagsOssSysRevision = 912,
  TagsOssSysType = 913,
  TagsOssTags = 914,
  TagsOssTagsBlogPost = 915,
  TagsOssTagsChildren = 916,
  TagsOssTagsContentfulId = 917,
  TagsOssTagsCreatedAt = 918,
  TagsOssTagsId = 919,
  TagsOssTagsLevel = 920,
  TagsOssTagsName = 921,
  TagsOssTagsNodeLocale = 922,
  TagsOssTagsOss = 923,
  TagsOssTagsProject = 924,
  TagsOssTagsSkillMap = 925,
  TagsOssTagsSpaceId = 926,
  TagsOssTagsUpdatedAt = 927,
  TagsOssUpdatedAt = 928,
  TagsParentChildren = 929,
  TagsParentChildrenChildren = 930,
  TagsParentChildrenId = 931,
  TagsParentId = 932,
  TagsParentInternalContent = 933,
  TagsParentInternalContentDigest = 934,
  TagsParentInternalDescription = 935,
  TagsParentInternalFieldOwners = 936,
  TagsParentInternalIgnoreType = 937,
  TagsParentInternalMediaType = 938,
  TagsParentInternalOwner = 939,
  TagsParentInternalType = 940,
  TagsParentParentChildren = 941,
  TagsParentParentId = 942,
  TagsProject = 943,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 944,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 945,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 946,
  TagsProjectChildContentfulProjectDetailTextNodeId = 947,
  TagsProjectChildren = 948,
  TagsProjectChildrenContentfulProjectDetailTextNode = 949,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 950,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 951,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 952,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 953,
  TagsProjectChildrenChildren = 954,
  TagsProjectChildrenId = 955,
  TagsProjectContentfulId = 956,
  TagsProjectCreatedAt = 957,
  TagsProjectDetailChildren = 958,
  TagsProjectDetailChildrenMdx = 959,
  TagsProjectDetailDetail = 960,
  TagsProjectDetailId = 961,
  TagsProjectEndDate = 962,
  TagsProjectIconChildren = 963,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 964,
  TagsProjectIconContact = 965,
  TagsProjectIconContentfulId = 966,
  TagsProjectIconCreatedAt = 967,
  TagsProjectIconHistory = 968,
  TagsProjectIconId = 969,
  TagsProjectIconName = 970,
  TagsProjectIconNodeLocale = 971,
  TagsProjectIconOss = 972,
  TagsProjectIconProject = 973,
  TagsProjectIconSpaceId = 974,
  TagsProjectIconUpdatedAt = 975,
  TagsProjectIconWhatICanDo = 976,
  TagsProjectId = 977,
  TagsProjectInternalContent = 978,
  TagsProjectInternalContentDigest = 979,
  TagsProjectInternalDescription = 980,
  TagsProjectInternalFieldOwners = 981,
  TagsProjectInternalIgnoreType = 982,
  TagsProjectInternalMediaType = 983,
  TagsProjectInternalOwner = 984,
  TagsProjectInternalType = 985,
  TagsProjectName = 986,
  TagsProjectNodeLocale = 987,
  TagsProjectParentChildren = 988,
  TagsProjectParentId = 989,
  TagsProjectSpaceId = 990,
  TagsProjectStartDate = 991,
  TagsProjectSubName = 992,
  TagsProjectSysRevision = 993,
  TagsProjectSysType = 994,
  TagsProjectTags = 995,
  TagsProjectTagsBlogPost = 996,
  TagsProjectTagsChildren = 997,
  TagsProjectTagsContentfulId = 998,
  TagsProjectTagsCreatedAt = 999,
  TagsProjectTagsId = 1000,
  TagsProjectTagsLevel = 1001,
  TagsProjectTagsName = 1002,
  TagsProjectTagsNodeLocale = 1003,
  TagsProjectTagsOss = 1004,
  TagsProjectTagsProject = 1005,
  TagsProjectTagsSkillMap = 1006,
  TagsProjectTagsSpaceId = 1007,
  TagsProjectTagsUpdatedAt = 1008,
  TagsProjectUpdatedAt = 1009,
  TagsSkillMap = 1010,
  TagsSkillMapChildren = 1011,
  TagsSkillMapChildrenChildren = 1012,
  TagsSkillMapChildrenId = 1013,
  TagsSkillMapContentfulId = 1014,
  TagsSkillMapCreatedAt = 1015,
  TagsSkillMapExpanded = 1016,
  TagsSkillMapId = 1017,
  TagsSkillMapInternalContent = 1018,
  TagsSkillMapInternalContentDigest = 1019,
  TagsSkillMapInternalDescription = 1020,
  TagsSkillMapInternalFieldOwners = 1021,
  TagsSkillMapInternalIgnoreType = 1022,
  TagsSkillMapInternalMediaType = 1023,
  TagsSkillMapInternalOwner = 1024,
  TagsSkillMapInternalType = 1025,
  TagsSkillMapName = 1026,
  TagsSkillMapNodeLocale = 1027,
  TagsSkillMapParentChildren = 1028,
  TagsSkillMapParentId = 1029,
  TagsSkillMapSkills = 1030,
  TagsSkillMapSkillsBlogPost = 1031,
  TagsSkillMapSkillsChildren = 1032,
  TagsSkillMapSkillsContentfulId = 1033,
  TagsSkillMapSkillsCreatedAt = 1034,
  TagsSkillMapSkillsId = 1035,
  TagsSkillMapSkillsLevel = 1036,
  TagsSkillMapSkillsName = 1037,
  TagsSkillMapSkillsNodeLocale = 1038,
  TagsSkillMapSkillsOss = 1039,
  TagsSkillMapSkillsProject = 1040,
  TagsSkillMapSkillsSkillMap = 1041,
  TagsSkillMapSkillsSpaceId = 1042,
  TagsSkillMapSkillsUpdatedAt = 1043,
  TagsSkillMapSortKey = 1044,
  TagsSkillMapSpaceId = 1045,
  TagsSkillMapSysRevision = 1046,
  TagsSkillMapSysType = 1047,
  TagsSkillMapUpdatedAt = 1048,
  TagsSpaceId = 1049,
  TagsSysRevision = 1050,
  TagsSysType = 1051,
  TagsUpdatedAt = 1052,
  ThumbnailChildren = 1053,
  ThumbnailChildrenChildren = 1054,
  ThumbnailChildrenChildrenChildren = 1055,
  ThumbnailChildrenChildrenId = 1056,
  ThumbnailChildrenId = 1057,
  ThumbnailChildrenInternalContent = 1058,
  ThumbnailChildrenInternalContentDigest = 1059,
  ThumbnailChildrenInternalDescription = 1060,
  ThumbnailChildrenInternalFieldOwners = 1061,
  ThumbnailChildrenInternalIgnoreType = 1062,
  ThumbnailChildrenInternalMediaType = 1063,
  ThumbnailChildrenInternalOwner = 1064,
  ThumbnailChildrenInternalType = 1065,
  ThumbnailChildrenParentChildren = 1066,
  ThumbnailChildrenParentId = 1067,
  ThumbnailContentfulId = 1068,
  ThumbnailCreatedAt = 1069,
  ThumbnailDescription = 1070,
  ThumbnailFieldsLocalFile = 1071,
  ThumbnailFileContentType = 1072,
  ThumbnailFileDetailsSize = 1073,
  ThumbnailFileFileName = 1074,
  ThumbnailFileUrl = 1075,
  ThumbnailFilename = 1076,
  ThumbnailFilesize = 1077,
  ThumbnailGatsbyImage = 1078,
  ThumbnailGatsbyImageData = 1079,
  ThumbnailHeight = 1080,
  ThumbnailId = 1081,
  ThumbnailInternalContent = 1082,
  ThumbnailInternalContentDigest = 1083,
  ThumbnailInternalDescription = 1084,
  ThumbnailInternalFieldOwners = 1085,
  ThumbnailInternalIgnoreType = 1086,
  ThumbnailInternalMediaType = 1087,
  ThumbnailInternalOwner = 1088,
  ThumbnailInternalType = 1089,
  ThumbnailLocalFileAbsolutePath = 1090,
  ThumbnailLocalFileAccessTime = 1091,
  ThumbnailLocalFileAtime = 1092,
  ThumbnailLocalFileAtimeMs = 1093,
  ThumbnailLocalFileBase = 1094,
  ThumbnailLocalFileBirthTime = 1095,
  ThumbnailLocalFileBirthtime = 1096,
  ThumbnailLocalFileBirthtimeMs = 1097,
  ThumbnailLocalFileBlksize = 1098,
  ThumbnailLocalFileBlocks = 1099,
  ThumbnailLocalFileChangeTime = 1100,
  ThumbnailLocalFileChildImageSharpChildren = 1101,
  ThumbnailLocalFileChildImageSharpGatsbyImageData = 1102,
  ThumbnailLocalFileChildImageSharpId = 1103,
  ThumbnailLocalFileChildLocaleChildren = 1104,
  ThumbnailLocalFileChildLocaleData = 1105,
  ThumbnailLocalFileChildLocaleFileAbsolutePath = 1106,
  ThumbnailLocalFileChildLocaleId = 1107,
  ThumbnailLocalFileChildLocaleLanguage = 1108,
  ThumbnailLocalFileChildLocaleNs = 1109,
  ThumbnailLocalFileChildren = 1110,
  ThumbnailLocalFileChildrenImageSharp = 1111,
  ThumbnailLocalFileChildrenImageSharpChildren = 1112,
  ThumbnailLocalFileChildrenImageSharpGatsbyImageData = 1113,
  ThumbnailLocalFileChildrenImageSharpId = 1114,
  ThumbnailLocalFileChildrenLocale = 1115,
  ThumbnailLocalFileChildrenLocaleChildren = 1116,
  ThumbnailLocalFileChildrenLocaleData = 1117,
  ThumbnailLocalFileChildrenLocaleFileAbsolutePath = 1118,
  ThumbnailLocalFileChildrenLocaleId = 1119,
  ThumbnailLocalFileChildrenLocaleLanguage = 1120,
  ThumbnailLocalFileChildrenLocaleNs = 1121,
  ThumbnailLocalFileChildrenChildren = 1122,
  ThumbnailLocalFileChildrenId = 1123,
  ThumbnailLocalFileCtime = 1124,
  ThumbnailLocalFileCtimeMs = 1125,
  ThumbnailLocalFileDev = 1126,
  ThumbnailLocalFileDir = 1127,
  ThumbnailLocalFileExt = 1128,
  ThumbnailLocalFileExtension = 1129,
  ThumbnailLocalFileGid = 1130,
  ThumbnailLocalFileId = 1131,
  ThumbnailLocalFileIno = 1132,
  ThumbnailLocalFileInternalContent = 1133,
  ThumbnailLocalFileInternalContentDigest = 1134,
  ThumbnailLocalFileInternalDescription = 1135,
  ThumbnailLocalFileInternalFieldOwners = 1136,
  ThumbnailLocalFileInternalIgnoreType = 1137,
  ThumbnailLocalFileInternalMediaType = 1138,
  ThumbnailLocalFileInternalOwner = 1139,
  ThumbnailLocalFileInternalType = 1140,
  ThumbnailLocalFileMode = 1141,
  ThumbnailLocalFileModifiedTime = 1142,
  ThumbnailLocalFileMtime = 1143,
  ThumbnailLocalFileMtimeMs = 1144,
  ThumbnailLocalFileName = 1145,
  ThumbnailLocalFileNlink = 1146,
  ThumbnailLocalFileParentChildren = 1147,
  ThumbnailLocalFileParentId = 1148,
  ThumbnailLocalFilePrettySize = 1149,
  ThumbnailLocalFilePublicUrl = 1150,
  ThumbnailLocalFileRdev = 1151,
  ThumbnailLocalFileRelativeDirectory = 1152,
  ThumbnailLocalFileRelativePath = 1153,
  ThumbnailLocalFileRoot = 1154,
  ThumbnailLocalFileSize = 1155,
  ThumbnailLocalFileSourceInstanceName = 1156,
  ThumbnailLocalFileUid = 1157,
  ThumbnailLocalFileUrl = 1158,
  ThumbnailMimeType = 1159,
  ThumbnailNodeLocale = 1160,
  ThumbnailParentChildren = 1161,
  ThumbnailParentChildrenChildren = 1162,
  ThumbnailParentChildrenId = 1163,
  ThumbnailParentId = 1164,
  ThumbnailParentInternalContent = 1165,
  ThumbnailParentInternalContentDigest = 1166,
  ThumbnailParentInternalDescription = 1167,
  ThumbnailParentInternalFieldOwners = 1168,
  ThumbnailParentInternalIgnoreType = 1169,
  ThumbnailParentInternalMediaType = 1170,
  ThumbnailParentInternalOwner = 1171,
  ThumbnailParentInternalType = 1172,
  ThumbnailParentParentChildren = 1173,
  ThumbnailParentParentId = 1174,
  ThumbnailPlaceholderUrl = 1175,
  ThumbnailPublicUrl = 1176,
  ThumbnailResizeHeight = 1177,
  ThumbnailResizeSrc = 1178,
  ThumbnailResizeWidth = 1179,
  ThumbnailSpaceId = 1180,
  ThumbnailSysRevision = 1181,
  ThumbnailSysType = 1182,
  ThumbnailTitle = 1183,
  ThumbnailUpdatedAt = 1184,
  ThumbnailUrl = 1185,
  ThumbnailWidth = 1186,
  Title = 1187,
  Updated = 1188,
  UpdatedAt = 1189
}

export type ContentfulBlogPostFilterInput = {
  category: InputMaybe<ContentfulTagFilterInput>;
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
  thumbnail: InputMaybe<ContentfulAssetFilterInput>;
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
  TagsBlogPostCategoryBlogPost = 1018,
  TagsBlogPostCategoryChildren = 1019,
  TagsBlogPostCategoryContentfulId = 1020,
  TagsBlogPostCategoryCreatedAt = 1021,
  TagsBlogPostCategoryId = 1022,
  TagsBlogPostCategoryLevel = 1023,
  TagsBlogPostCategoryName = 1024,
  TagsBlogPostCategoryNodeLocale = 1025,
  TagsBlogPostCategoryOss = 1026,
  TagsBlogPostCategoryProject = 1027,
  TagsBlogPostCategorySkillMap = 1028,
  TagsBlogPostCategorySpaceId = 1029,
  TagsBlogPostCategoryUpdatedAt = 1030,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 1031,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 1032,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 1033,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 1034,
  TagsBlogPostChildren = 1035,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 1036,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 1037,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 1038,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 1039,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 1040,
  TagsBlogPostChildrenChildren = 1041,
  TagsBlogPostChildrenId = 1042,
  TagsBlogPostContentChildren = 1043,
  TagsBlogPostContentChildrenMdx = 1044,
  TagsBlogPostContentContent = 1045,
  TagsBlogPostContentId = 1046,
  TagsBlogPostContentfulId = 1047,
  TagsBlogPostCreated = 1048,
  TagsBlogPostCreatedAt = 1049,
  TagsBlogPostExcerpt = 1050,
  TagsBlogPostId = 1051,
  TagsBlogPostInternalContent = 1052,
  TagsBlogPostInternalContentDigest = 1053,
  TagsBlogPostInternalDescription = 1054,
  TagsBlogPostInternalFieldOwners = 1055,
  TagsBlogPostInternalIgnoreType = 1056,
  TagsBlogPostInternalMediaType = 1057,
  TagsBlogPostInternalOwner = 1058,
  TagsBlogPostInternalType = 1059,
  TagsBlogPostNodeLocale = 1060,
  TagsBlogPostParentChildren = 1061,
  TagsBlogPostParentId = 1062,
  TagsBlogPostSlug = 1063,
  TagsBlogPostSpaceId = 1064,
  TagsBlogPostSysRevision = 1065,
  TagsBlogPostSysType = 1066,
  TagsBlogPostTags = 1067,
  TagsBlogPostTagsBlogPost = 1068,
  TagsBlogPostTagsChildren = 1069,
  TagsBlogPostTagsContentfulId = 1070,
  TagsBlogPostTagsCreatedAt = 1071,
  TagsBlogPostTagsId = 1072,
  TagsBlogPostTagsLevel = 1073,
  TagsBlogPostTagsName = 1074,
  TagsBlogPostTagsNodeLocale = 1075,
  TagsBlogPostTagsOss = 1076,
  TagsBlogPostTagsProject = 1077,
  TagsBlogPostTagsSkillMap = 1078,
  TagsBlogPostTagsSpaceId = 1079,
  TagsBlogPostTagsUpdatedAt = 1080,
  TagsBlogPostThumbnailChildren = 1081,
  TagsBlogPostThumbnailContentfulId = 1082,
  TagsBlogPostThumbnailCreatedAt = 1083,
  TagsBlogPostThumbnailDescription = 1084,
  TagsBlogPostThumbnailFilename = 1085,
  TagsBlogPostThumbnailFilesize = 1086,
  TagsBlogPostThumbnailGatsbyImage = 1087,
  TagsBlogPostThumbnailGatsbyImageData = 1088,
  TagsBlogPostThumbnailHeight = 1089,
  TagsBlogPostThumbnailId = 1090,
  TagsBlogPostThumbnailMimeType = 1091,
  TagsBlogPostThumbnailNodeLocale = 1092,
  TagsBlogPostThumbnailPlaceholderUrl = 1093,
  TagsBlogPostThumbnailPublicUrl = 1094,
  TagsBlogPostThumbnailSpaceId = 1095,
  TagsBlogPostThumbnailTitle = 1096,
  TagsBlogPostThumbnailUpdatedAt = 1097,
  TagsBlogPostThumbnailUrl = 1098,
  TagsBlogPostThumbnailWidth = 1099,
  TagsBlogPostTitle = 1100,
  TagsBlogPostUpdated = 1101,
  TagsBlogPostUpdatedAt = 1102,
  TagsChildren = 1103,
  TagsChildrenChildren = 1104,
  TagsChildrenChildrenChildren = 1105,
  TagsChildrenChildrenId = 1106,
  TagsChildrenId = 1107,
  TagsChildrenInternalContent = 1108,
  TagsChildrenInternalContentDigest = 1109,
  TagsChildrenInternalDescription = 1110,
  TagsChildrenInternalFieldOwners = 1111,
  TagsChildrenInternalIgnoreType = 1112,
  TagsChildrenInternalMediaType = 1113,
  TagsChildrenInternalOwner = 1114,
  TagsChildrenInternalType = 1115,
  TagsChildrenParentChildren = 1116,
  TagsChildrenParentId = 1117,
  TagsContentfulId = 1118,
  TagsCreatedAt = 1119,
  TagsId = 1120,
  TagsInternalContent = 1121,
  TagsInternalContentDigest = 1122,
  TagsInternalDescription = 1123,
  TagsInternalFieldOwners = 1124,
  TagsInternalIgnoreType = 1125,
  TagsInternalMediaType = 1126,
  TagsInternalOwner = 1127,
  TagsInternalType = 1128,
  TagsLevel = 1129,
  TagsName = 1130,
  TagsNodeLocale = 1131,
  TagsOss = 1132,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1133,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1134,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1135,
  TagsOssChildContentfulOssDetailTextNodeId = 1136,
  TagsOssChildren = 1137,
  TagsOssChildrenContentfulOssDetailTextNode = 1138,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1139,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1140,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1141,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1142,
  TagsOssChildrenChildren = 1143,
  TagsOssChildrenId = 1144,
  TagsOssContentfulId = 1145,
  TagsOssCreatedAt = 1146,
  TagsOssDetailChildren = 1147,
  TagsOssDetailChildrenMdx = 1148,
  TagsOssDetailDetail = 1149,
  TagsOssDetailId = 1150,
  TagsOssHref = 1151,
  TagsOssIconChildren = 1152,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1153,
  TagsOssIconContact = 1154,
  TagsOssIconContentfulId = 1155,
  TagsOssIconCreatedAt = 1156,
  TagsOssIconHistory = 1157,
  TagsOssIconId = 1158,
  TagsOssIconName = 1159,
  TagsOssIconNodeLocale = 1160,
  TagsOssIconOss = 1161,
  TagsOssIconProject = 1162,
  TagsOssIconSpaceId = 1163,
  TagsOssIconUpdatedAt = 1164,
  TagsOssIconWhatICanDo = 1165,
  TagsOssId = 1166,
  TagsOssImageChildren = 1167,
  TagsOssImageContentfulId = 1168,
  TagsOssImageCreatedAt = 1169,
  TagsOssImageDescription = 1170,
  TagsOssImageFilename = 1171,
  TagsOssImageFilesize = 1172,
  TagsOssImageGatsbyImage = 1173,
  TagsOssImageGatsbyImageData = 1174,
  TagsOssImageHeight = 1175,
  TagsOssImageId = 1176,
  TagsOssImageMimeType = 1177,
  TagsOssImageNodeLocale = 1178,
  TagsOssImagePlaceholderUrl = 1179,
  TagsOssImagePublicUrl = 1180,
  TagsOssImageSpaceId = 1181,
  TagsOssImageTitle = 1182,
  TagsOssImageUpdatedAt = 1183,
  TagsOssImageUrl = 1184,
  TagsOssImageWidth = 1185,
  TagsOssInternalContent = 1186,
  TagsOssInternalContentDigest = 1187,
  TagsOssInternalDescription = 1188,
  TagsOssInternalFieldOwners = 1189,
  TagsOssInternalIgnoreType = 1190,
  TagsOssInternalMediaType = 1191,
  TagsOssInternalOwner = 1192,
  TagsOssInternalType = 1193,
  TagsOssName = 1194,
  TagsOssNodeLocale = 1195,
  TagsOssParentChildren = 1196,
  TagsOssParentId = 1197,
  TagsOssSpaceId = 1198,
  TagsOssStartDate = 1199,
  TagsOssSubName = 1200,
  TagsOssSysRevision = 1201,
  TagsOssSysType = 1202,
  TagsOssTags = 1203,
  TagsOssTagsBlogPost = 1204,
  TagsOssTagsChildren = 1205,
  TagsOssTagsContentfulId = 1206,
  TagsOssTagsCreatedAt = 1207,
  TagsOssTagsId = 1208,
  TagsOssTagsLevel = 1209,
  TagsOssTagsName = 1210,
  TagsOssTagsNodeLocale = 1211,
  TagsOssTagsOss = 1212,
  TagsOssTagsProject = 1213,
  TagsOssTagsSkillMap = 1214,
  TagsOssTagsSpaceId = 1215,
  TagsOssTagsUpdatedAt = 1216,
  TagsOssUpdatedAt = 1217,
  TagsParentChildren = 1218,
  TagsParentChildrenChildren = 1219,
  TagsParentChildrenId = 1220,
  TagsParentId = 1221,
  TagsParentInternalContent = 1222,
  TagsParentInternalContentDigest = 1223,
  TagsParentInternalDescription = 1224,
  TagsParentInternalFieldOwners = 1225,
  TagsParentInternalIgnoreType = 1226,
  TagsParentInternalMediaType = 1227,
  TagsParentInternalOwner = 1228,
  TagsParentInternalType = 1229,
  TagsParentParentChildren = 1230,
  TagsParentParentId = 1231,
  TagsProject = 1232,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1233,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1234,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1235,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1236,
  TagsProjectChildren = 1237,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1238,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1239,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1240,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1241,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1242,
  TagsProjectChildrenChildren = 1243,
  TagsProjectChildrenId = 1244,
  TagsProjectContentfulId = 1245,
  TagsProjectCreatedAt = 1246,
  TagsProjectDetailChildren = 1247,
  TagsProjectDetailChildrenMdx = 1248,
  TagsProjectDetailDetail = 1249,
  TagsProjectDetailId = 1250,
  TagsProjectEndDate = 1251,
  TagsProjectIconChildren = 1252,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1253,
  TagsProjectIconContact = 1254,
  TagsProjectIconContentfulId = 1255,
  TagsProjectIconCreatedAt = 1256,
  TagsProjectIconHistory = 1257,
  TagsProjectIconId = 1258,
  TagsProjectIconName = 1259,
  TagsProjectIconNodeLocale = 1260,
  TagsProjectIconOss = 1261,
  TagsProjectIconProject = 1262,
  TagsProjectIconSpaceId = 1263,
  TagsProjectIconUpdatedAt = 1264,
  TagsProjectIconWhatICanDo = 1265,
  TagsProjectId = 1266,
  TagsProjectInternalContent = 1267,
  TagsProjectInternalContentDigest = 1268,
  TagsProjectInternalDescription = 1269,
  TagsProjectInternalFieldOwners = 1270,
  TagsProjectInternalIgnoreType = 1271,
  TagsProjectInternalMediaType = 1272,
  TagsProjectInternalOwner = 1273,
  TagsProjectInternalType = 1274,
  TagsProjectName = 1275,
  TagsProjectNodeLocale = 1276,
  TagsProjectParentChildren = 1277,
  TagsProjectParentId = 1278,
  TagsProjectSpaceId = 1279,
  TagsProjectStartDate = 1280,
  TagsProjectSubName = 1281,
  TagsProjectSysRevision = 1282,
  TagsProjectSysType = 1283,
  TagsProjectTags = 1284,
  TagsProjectTagsBlogPost = 1285,
  TagsProjectTagsChildren = 1286,
  TagsProjectTagsContentfulId = 1287,
  TagsProjectTagsCreatedAt = 1288,
  TagsProjectTagsId = 1289,
  TagsProjectTagsLevel = 1290,
  TagsProjectTagsName = 1291,
  TagsProjectTagsNodeLocale = 1292,
  TagsProjectTagsOss = 1293,
  TagsProjectTagsProject = 1294,
  TagsProjectTagsSkillMap = 1295,
  TagsProjectTagsSpaceId = 1296,
  TagsProjectTagsUpdatedAt = 1297,
  TagsProjectUpdatedAt = 1298,
  TagsSkillMap = 1299,
  TagsSkillMapChildren = 1300,
  TagsSkillMapChildrenChildren = 1301,
  TagsSkillMapChildrenId = 1302,
  TagsSkillMapContentfulId = 1303,
  TagsSkillMapCreatedAt = 1304,
  TagsSkillMapExpanded = 1305,
  TagsSkillMapId = 1306,
  TagsSkillMapInternalContent = 1307,
  TagsSkillMapInternalContentDigest = 1308,
  TagsSkillMapInternalDescription = 1309,
  TagsSkillMapInternalFieldOwners = 1310,
  TagsSkillMapInternalIgnoreType = 1311,
  TagsSkillMapInternalMediaType = 1312,
  TagsSkillMapInternalOwner = 1313,
  TagsSkillMapInternalType = 1314,
  TagsSkillMapName = 1315,
  TagsSkillMapNodeLocale = 1316,
  TagsSkillMapParentChildren = 1317,
  TagsSkillMapParentId = 1318,
  TagsSkillMapSkills = 1319,
  TagsSkillMapSkillsBlogPost = 1320,
  TagsSkillMapSkillsChildren = 1321,
  TagsSkillMapSkillsContentfulId = 1322,
  TagsSkillMapSkillsCreatedAt = 1323,
  TagsSkillMapSkillsId = 1324,
  TagsSkillMapSkillsLevel = 1325,
  TagsSkillMapSkillsName = 1326,
  TagsSkillMapSkillsNodeLocale = 1327,
  TagsSkillMapSkillsOss = 1328,
  TagsSkillMapSkillsProject = 1329,
  TagsSkillMapSkillsSkillMap = 1330,
  TagsSkillMapSkillsSpaceId = 1331,
  TagsSkillMapSkillsUpdatedAt = 1332,
  TagsSkillMapSortKey = 1333,
  TagsSkillMapSpaceId = 1334,
  TagsSkillMapSysRevision = 1335,
  TagsSkillMapSysType = 1336,
  TagsSkillMapUpdatedAt = 1337,
  TagsSpaceId = 1338,
  TagsSysRevision = 1339,
  TagsSysType = 1340,
  TagsUpdatedAt = 1341,
  UpdatedAt = 1342
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
  TagsBlogPostCategoryBlogPost = 884,
  TagsBlogPostCategoryChildren = 885,
  TagsBlogPostCategoryContentfulId = 886,
  TagsBlogPostCategoryCreatedAt = 887,
  TagsBlogPostCategoryId = 888,
  TagsBlogPostCategoryLevel = 889,
  TagsBlogPostCategoryName = 890,
  TagsBlogPostCategoryNodeLocale = 891,
  TagsBlogPostCategoryOss = 892,
  TagsBlogPostCategoryProject = 893,
  TagsBlogPostCategorySkillMap = 894,
  TagsBlogPostCategorySpaceId = 895,
  TagsBlogPostCategoryUpdatedAt = 896,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 897,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 898,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 899,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 900,
  TagsBlogPostChildren = 901,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 902,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 903,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 904,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 905,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 906,
  TagsBlogPostChildrenChildren = 907,
  TagsBlogPostChildrenId = 908,
  TagsBlogPostContentChildren = 909,
  TagsBlogPostContentChildrenMdx = 910,
  TagsBlogPostContentContent = 911,
  TagsBlogPostContentId = 912,
  TagsBlogPostContentfulId = 913,
  TagsBlogPostCreated = 914,
  TagsBlogPostCreatedAt = 915,
  TagsBlogPostExcerpt = 916,
  TagsBlogPostId = 917,
  TagsBlogPostInternalContent = 918,
  TagsBlogPostInternalContentDigest = 919,
  TagsBlogPostInternalDescription = 920,
  TagsBlogPostInternalFieldOwners = 921,
  TagsBlogPostInternalIgnoreType = 922,
  TagsBlogPostInternalMediaType = 923,
  TagsBlogPostInternalOwner = 924,
  TagsBlogPostInternalType = 925,
  TagsBlogPostNodeLocale = 926,
  TagsBlogPostParentChildren = 927,
  TagsBlogPostParentId = 928,
  TagsBlogPostSlug = 929,
  TagsBlogPostSpaceId = 930,
  TagsBlogPostSysRevision = 931,
  TagsBlogPostSysType = 932,
  TagsBlogPostTags = 933,
  TagsBlogPostTagsBlogPost = 934,
  TagsBlogPostTagsChildren = 935,
  TagsBlogPostTagsContentfulId = 936,
  TagsBlogPostTagsCreatedAt = 937,
  TagsBlogPostTagsId = 938,
  TagsBlogPostTagsLevel = 939,
  TagsBlogPostTagsName = 940,
  TagsBlogPostTagsNodeLocale = 941,
  TagsBlogPostTagsOss = 942,
  TagsBlogPostTagsProject = 943,
  TagsBlogPostTagsSkillMap = 944,
  TagsBlogPostTagsSpaceId = 945,
  TagsBlogPostTagsUpdatedAt = 946,
  TagsBlogPostThumbnailChildren = 947,
  TagsBlogPostThumbnailContentfulId = 948,
  TagsBlogPostThumbnailCreatedAt = 949,
  TagsBlogPostThumbnailDescription = 950,
  TagsBlogPostThumbnailFilename = 951,
  TagsBlogPostThumbnailFilesize = 952,
  TagsBlogPostThumbnailGatsbyImage = 953,
  TagsBlogPostThumbnailGatsbyImageData = 954,
  TagsBlogPostThumbnailHeight = 955,
  TagsBlogPostThumbnailId = 956,
  TagsBlogPostThumbnailMimeType = 957,
  TagsBlogPostThumbnailNodeLocale = 958,
  TagsBlogPostThumbnailPlaceholderUrl = 959,
  TagsBlogPostThumbnailPublicUrl = 960,
  TagsBlogPostThumbnailSpaceId = 961,
  TagsBlogPostThumbnailTitle = 962,
  TagsBlogPostThumbnailUpdatedAt = 963,
  TagsBlogPostThumbnailUrl = 964,
  TagsBlogPostThumbnailWidth = 965,
  TagsBlogPostTitle = 966,
  TagsBlogPostUpdated = 967,
  TagsBlogPostUpdatedAt = 968,
  TagsChildren = 969,
  TagsChildrenChildren = 970,
  TagsChildrenChildrenChildren = 971,
  TagsChildrenChildrenId = 972,
  TagsChildrenId = 973,
  TagsChildrenInternalContent = 974,
  TagsChildrenInternalContentDigest = 975,
  TagsChildrenInternalDescription = 976,
  TagsChildrenInternalFieldOwners = 977,
  TagsChildrenInternalIgnoreType = 978,
  TagsChildrenInternalMediaType = 979,
  TagsChildrenInternalOwner = 980,
  TagsChildrenInternalType = 981,
  TagsChildrenParentChildren = 982,
  TagsChildrenParentId = 983,
  TagsContentfulId = 984,
  TagsCreatedAt = 985,
  TagsId = 986,
  TagsInternalContent = 987,
  TagsInternalContentDigest = 988,
  TagsInternalDescription = 989,
  TagsInternalFieldOwners = 990,
  TagsInternalIgnoreType = 991,
  TagsInternalMediaType = 992,
  TagsInternalOwner = 993,
  TagsInternalType = 994,
  TagsLevel = 995,
  TagsName = 996,
  TagsNodeLocale = 997,
  TagsOss = 998,
  TagsOssChildContentfulOssDetailTextNodeChildren = 999,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1000,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1001,
  TagsOssChildContentfulOssDetailTextNodeId = 1002,
  TagsOssChildren = 1003,
  TagsOssChildrenContentfulOssDetailTextNode = 1004,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1005,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1006,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1007,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1008,
  TagsOssChildrenChildren = 1009,
  TagsOssChildrenId = 1010,
  TagsOssContentfulId = 1011,
  TagsOssCreatedAt = 1012,
  TagsOssDetailChildren = 1013,
  TagsOssDetailChildrenMdx = 1014,
  TagsOssDetailDetail = 1015,
  TagsOssDetailId = 1016,
  TagsOssHref = 1017,
  TagsOssIconChildren = 1018,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1019,
  TagsOssIconContact = 1020,
  TagsOssIconContentfulId = 1021,
  TagsOssIconCreatedAt = 1022,
  TagsOssIconHistory = 1023,
  TagsOssIconId = 1024,
  TagsOssIconName = 1025,
  TagsOssIconNodeLocale = 1026,
  TagsOssIconOss = 1027,
  TagsOssIconProject = 1028,
  TagsOssIconSpaceId = 1029,
  TagsOssIconUpdatedAt = 1030,
  TagsOssIconWhatICanDo = 1031,
  TagsOssId = 1032,
  TagsOssImageChildren = 1033,
  TagsOssImageContentfulId = 1034,
  TagsOssImageCreatedAt = 1035,
  TagsOssImageDescription = 1036,
  TagsOssImageFilename = 1037,
  TagsOssImageFilesize = 1038,
  TagsOssImageGatsbyImage = 1039,
  TagsOssImageGatsbyImageData = 1040,
  TagsOssImageHeight = 1041,
  TagsOssImageId = 1042,
  TagsOssImageMimeType = 1043,
  TagsOssImageNodeLocale = 1044,
  TagsOssImagePlaceholderUrl = 1045,
  TagsOssImagePublicUrl = 1046,
  TagsOssImageSpaceId = 1047,
  TagsOssImageTitle = 1048,
  TagsOssImageUpdatedAt = 1049,
  TagsOssImageUrl = 1050,
  TagsOssImageWidth = 1051,
  TagsOssInternalContent = 1052,
  TagsOssInternalContentDigest = 1053,
  TagsOssInternalDescription = 1054,
  TagsOssInternalFieldOwners = 1055,
  TagsOssInternalIgnoreType = 1056,
  TagsOssInternalMediaType = 1057,
  TagsOssInternalOwner = 1058,
  TagsOssInternalType = 1059,
  TagsOssName = 1060,
  TagsOssNodeLocale = 1061,
  TagsOssParentChildren = 1062,
  TagsOssParentId = 1063,
  TagsOssSpaceId = 1064,
  TagsOssStartDate = 1065,
  TagsOssSubName = 1066,
  TagsOssSysRevision = 1067,
  TagsOssSysType = 1068,
  TagsOssTags = 1069,
  TagsOssTagsBlogPost = 1070,
  TagsOssTagsChildren = 1071,
  TagsOssTagsContentfulId = 1072,
  TagsOssTagsCreatedAt = 1073,
  TagsOssTagsId = 1074,
  TagsOssTagsLevel = 1075,
  TagsOssTagsName = 1076,
  TagsOssTagsNodeLocale = 1077,
  TagsOssTagsOss = 1078,
  TagsOssTagsProject = 1079,
  TagsOssTagsSkillMap = 1080,
  TagsOssTagsSpaceId = 1081,
  TagsOssTagsUpdatedAt = 1082,
  TagsOssUpdatedAt = 1083,
  TagsParentChildren = 1084,
  TagsParentChildrenChildren = 1085,
  TagsParentChildrenId = 1086,
  TagsParentId = 1087,
  TagsParentInternalContent = 1088,
  TagsParentInternalContentDigest = 1089,
  TagsParentInternalDescription = 1090,
  TagsParentInternalFieldOwners = 1091,
  TagsParentInternalIgnoreType = 1092,
  TagsParentInternalMediaType = 1093,
  TagsParentInternalOwner = 1094,
  TagsParentInternalType = 1095,
  TagsParentParentChildren = 1096,
  TagsParentParentId = 1097,
  TagsProject = 1098,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1099,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1100,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1101,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1102,
  TagsProjectChildren = 1103,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1104,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1105,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1106,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1107,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1108,
  TagsProjectChildrenChildren = 1109,
  TagsProjectChildrenId = 1110,
  TagsProjectContentfulId = 1111,
  TagsProjectCreatedAt = 1112,
  TagsProjectDetailChildren = 1113,
  TagsProjectDetailChildrenMdx = 1114,
  TagsProjectDetailDetail = 1115,
  TagsProjectDetailId = 1116,
  TagsProjectEndDate = 1117,
  TagsProjectIconChildren = 1118,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1119,
  TagsProjectIconContact = 1120,
  TagsProjectIconContentfulId = 1121,
  TagsProjectIconCreatedAt = 1122,
  TagsProjectIconHistory = 1123,
  TagsProjectIconId = 1124,
  TagsProjectIconName = 1125,
  TagsProjectIconNodeLocale = 1126,
  TagsProjectIconOss = 1127,
  TagsProjectIconProject = 1128,
  TagsProjectIconSpaceId = 1129,
  TagsProjectIconUpdatedAt = 1130,
  TagsProjectIconWhatICanDo = 1131,
  TagsProjectId = 1132,
  TagsProjectInternalContent = 1133,
  TagsProjectInternalContentDigest = 1134,
  TagsProjectInternalDescription = 1135,
  TagsProjectInternalFieldOwners = 1136,
  TagsProjectInternalIgnoreType = 1137,
  TagsProjectInternalMediaType = 1138,
  TagsProjectInternalOwner = 1139,
  TagsProjectInternalType = 1140,
  TagsProjectName = 1141,
  TagsProjectNodeLocale = 1142,
  TagsProjectParentChildren = 1143,
  TagsProjectParentId = 1144,
  TagsProjectSpaceId = 1145,
  TagsProjectStartDate = 1146,
  TagsProjectSubName = 1147,
  TagsProjectSysRevision = 1148,
  TagsProjectSysType = 1149,
  TagsProjectTags = 1150,
  TagsProjectTagsBlogPost = 1151,
  TagsProjectTagsChildren = 1152,
  TagsProjectTagsContentfulId = 1153,
  TagsProjectTagsCreatedAt = 1154,
  TagsProjectTagsId = 1155,
  TagsProjectTagsLevel = 1156,
  TagsProjectTagsName = 1157,
  TagsProjectTagsNodeLocale = 1158,
  TagsProjectTagsOss = 1159,
  TagsProjectTagsProject = 1160,
  TagsProjectTagsSkillMap = 1161,
  TagsProjectTagsSpaceId = 1162,
  TagsProjectTagsUpdatedAt = 1163,
  TagsProjectUpdatedAt = 1164,
  TagsSkillMap = 1165,
  TagsSkillMapChildren = 1166,
  TagsSkillMapChildrenChildren = 1167,
  TagsSkillMapChildrenId = 1168,
  TagsSkillMapContentfulId = 1169,
  TagsSkillMapCreatedAt = 1170,
  TagsSkillMapExpanded = 1171,
  TagsSkillMapId = 1172,
  TagsSkillMapInternalContent = 1173,
  TagsSkillMapInternalContentDigest = 1174,
  TagsSkillMapInternalDescription = 1175,
  TagsSkillMapInternalFieldOwners = 1176,
  TagsSkillMapInternalIgnoreType = 1177,
  TagsSkillMapInternalMediaType = 1178,
  TagsSkillMapInternalOwner = 1179,
  TagsSkillMapInternalType = 1180,
  TagsSkillMapName = 1181,
  TagsSkillMapNodeLocale = 1182,
  TagsSkillMapParentChildren = 1183,
  TagsSkillMapParentId = 1184,
  TagsSkillMapSkills = 1185,
  TagsSkillMapSkillsBlogPost = 1186,
  TagsSkillMapSkillsChildren = 1187,
  TagsSkillMapSkillsContentfulId = 1188,
  TagsSkillMapSkillsCreatedAt = 1189,
  TagsSkillMapSkillsId = 1190,
  TagsSkillMapSkillsLevel = 1191,
  TagsSkillMapSkillsName = 1192,
  TagsSkillMapSkillsNodeLocale = 1193,
  TagsSkillMapSkillsOss = 1194,
  TagsSkillMapSkillsProject = 1195,
  TagsSkillMapSkillsSkillMap = 1196,
  TagsSkillMapSkillsSpaceId = 1197,
  TagsSkillMapSkillsUpdatedAt = 1198,
  TagsSkillMapSortKey = 1199,
  TagsSkillMapSpaceId = 1200,
  TagsSkillMapSysRevision = 1201,
  TagsSkillMapSysType = 1202,
  TagsSkillMapUpdatedAt = 1203,
  TagsSpaceId = 1204,
  TagsSysRevision = 1205,
  TagsSysType = 1206,
  TagsUpdatedAt = 1207,
  UpdatedAt = 1208
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
  SkillsBlogPostCategoryBlogPost = 93,
  SkillsBlogPostCategoryChildren = 94,
  SkillsBlogPostCategoryContentfulId = 95,
  SkillsBlogPostCategoryCreatedAt = 96,
  SkillsBlogPostCategoryId = 97,
  SkillsBlogPostCategoryLevel = 98,
  SkillsBlogPostCategoryName = 99,
  SkillsBlogPostCategoryNodeLocale = 100,
  SkillsBlogPostCategoryOss = 101,
  SkillsBlogPostCategoryProject = 102,
  SkillsBlogPostCategorySkillMap = 103,
  SkillsBlogPostCategorySpaceId = 104,
  SkillsBlogPostCategoryUpdatedAt = 105,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 106,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 107,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 108,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 109,
  SkillsBlogPostChildren = 110,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 111,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 112,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 113,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 114,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 115,
  SkillsBlogPostChildrenChildren = 116,
  SkillsBlogPostChildrenId = 117,
  SkillsBlogPostContentChildren = 118,
  SkillsBlogPostContentChildrenMdx = 119,
  SkillsBlogPostContentContent = 120,
  SkillsBlogPostContentId = 121,
  SkillsBlogPostContentfulId = 122,
  SkillsBlogPostCreated = 123,
  SkillsBlogPostCreatedAt = 124,
  SkillsBlogPostExcerpt = 125,
  SkillsBlogPostId = 126,
  SkillsBlogPostInternalContent = 127,
  SkillsBlogPostInternalContentDigest = 128,
  SkillsBlogPostInternalDescription = 129,
  SkillsBlogPostInternalFieldOwners = 130,
  SkillsBlogPostInternalIgnoreType = 131,
  SkillsBlogPostInternalMediaType = 132,
  SkillsBlogPostInternalOwner = 133,
  SkillsBlogPostInternalType = 134,
  SkillsBlogPostNodeLocale = 135,
  SkillsBlogPostParentChildren = 136,
  SkillsBlogPostParentId = 137,
  SkillsBlogPostSlug = 138,
  SkillsBlogPostSpaceId = 139,
  SkillsBlogPostSysRevision = 140,
  SkillsBlogPostSysType = 141,
  SkillsBlogPostTags = 142,
  SkillsBlogPostTagsBlogPost = 143,
  SkillsBlogPostTagsChildren = 144,
  SkillsBlogPostTagsContentfulId = 145,
  SkillsBlogPostTagsCreatedAt = 146,
  SkillsBlogPostTagsId = 147,
  SkillsBlogPostTagsLevel = 148,
  SkillsBlogPostTagsName = 149,
  SkillsBlogPostTagsNodeLocale = 150,
  SkillsBlogPostTagsOss = 151,
  SkillsBlogPostTagsProject = 152,
  SkillsBlogPostTagsSkillMap = 153,
  SkillsBlogPostTagsSpaceId = 154,
  SkillsBlogPostTagsUpdatedAt = 155,
  SkillsBlogPostThumbnailChildren = 156,
  SkillsBlogPostThumbnailContentfulId = 157,
  SkillsBlogPostThumbnailCreatedAt = 158,
  SkillsBlogPostThumbnailDescription = 159,
  SkillsBlogPostThumbnailFilename = 160,
  SkillsBlogPostThumbnailFilesize = 161,
  SkillsBlogPostThumbnailGatsbyImage = 162,
  SkillsBlogPostThumbnailGatsbyImageData = 163,
  SkillsBlogPostThumbnailHeight = 164,
  SkillsBlogPostThumbnailId = 165,
  SkillsBlogPostThumbnailMimeType = 166,
  SkillsBlogPostThumbnailNodeLocale = 167,
  SkillsBlogPostThumbnailPlaceholderUrl = 168,
  SkillsBlogPostThumbnailPublicUrl = 169,
  SkillsBlogPostThumbnailSpaceId = 170,
  SkillsBlogPostThumbnailTitle = 171,
  SkillsBlogPostThumbnailUpdatedAt = 172,
  SkillsBlogPostThumbnailUrl = 173,
  SkillsBlogPostThumbnailWidth = 174,
  SkillsBlogPostTitle = 175,
  SkillsBlogPostUpdated = 176,
  SkillsBlogPostUpdatedAt = 177,
  SkillsChildren = 178,
  SkillsChildrenChildren = 179,
  SkillsChildrenChildrenChildren = 180,
  SkillsChildrenChildrenId = 181,
  SkillsChildrenId = 182,
  SkillsChildrenInternalContent = 183,
  SkillsChildrenInternalContentDigest = 184,
  SkillsChildrenInternalDescription = 185,
  SkillsChildrenInternalFieldOwners = 186,
  SkillsChildrenInternalIgnoreType = 187,
  SkillsChildrenInternalMediaType = 188,
  SkillsChildrenInternalOwner = 189,
  SkillsChildrenInternalType = 190,
  SkillsChildrenParentChildren = 191,
  SkillsChildrenParentId = 192,
  SkillsContentfulId = 193,
  SkillsCreatedAt = 194,
  SkillsId = 195,
  SkillsInternalContent = 196,
  SkillsInternalContentDigest = 197,
  SkillsInternalDescription = 198,
  SkillsInternalFieldOwners = 199,
  SkillsInternalIgnoreType = 200,
  SkillsInternalMediaType = 201,
  SkillsInternalOwner = 202,
  SkillsInternalType = 203,
  SkillsLevel = 204,
  SkillsName = 205,
  SkillsNodeLocale = 206,
  SkillsOss = 207,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 208,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMdx = 209,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 210,
  SkillsOssChildContentfulOssDetailTextNodeId = 211,
  SkillsOssChildren = 212,
  SkillsOssChildrenContentfulOssDetailTextNode = 213,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 214,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 215,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 216,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 217,
  SkillsOssChildrenChildren = 218,
  SkillsOssChildrenId = 219,
  SkillsOssContentfulId = 220,
  SkillsOssCreatedAt = 221,
  SkillsOssDetailChildren = 222,
  SkillsOssDetailChildrenMdx = 223,
  SkillsOssDetailDetail = 224,
  SkillsOssDetailId = 225,
  SkillsOssHref = 226,
  SkillsOssIconChildren = 227,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 228,
  SkillsOssIconContact = 229,
  SkillsOssIconContentfulId = 230,
  SkillsOssIconCreatedAt = 231,
  SkillsOssIconHistory = 232,
  SkillsOssIconId = 233,
  SkillsOssIconName = 234,
  SkillsOssIconNodeLocale = 235,
  SkillsOssIconOss = 236,
  SkillsOssIconProject = 237,
  SkillsOssIconSpaceId = 238,
  SkillsOssIconUpdatedAt = 239,
  SkillsOssIconWhatICanDo = 240,
  SkillsOssId = 241,
  SkillsOssImageChildren = 242,
  SkillsOssImageContentfulId = 243,
  SkillsOssImageCreatedAt = 244,
  SkillsOssImageDescription = 245,
  SkillsOssImageFilename = 246,
  SkillsOssImageFilesize = 247,
  SkillsOssImageGatsbyImage = 248,
  SkillsOssImageGatsbyImageData = 249,
  SkillsOssImageHeight = 250,
  SkillsOssImageId = 251,
  SkillsOssImageMimeType = 252,
  SkillsOssImageNodeLocale = 253,
  SkillsOssImagePlaceholderUrl = 254,
  SkillsOssImagePublicUrl = 255,
  SkillsOssImageSpaceId = 256,
  SkillsOssImageTitle = 257,
  SkillsOssImageUpdatedAt = 258,
  SkillsOssImageUrl = 259,
  SkillsOssImageWidth = 260,
  SkillsOssInternalContent = 261,
  SkillsOssInternalContentDigest = 262,
  SkillsOssInternalDescription = 263,
  SkillsOssInternalFieldOwners = 264,
  SkillsOssInternalIgnoreType = 265,
  SkillsOssInternalMediaType = 266,
  SkillsOssInternalOwner = 267,
  SkillsOssInternalType = 268,
  SkillsOssName = 269,
  SkillsOssNodeLocale = 270,
  SkillsOssParentChildren = 271,
  SkillsOssParentId = 272,
  SkillsOssSpaceId = 273,
  SkillsOssStartDate = 274,
  SkillsOssSubName = 275,
  SkillsOssSysRevision = 276,
  SkillsOssSysType = 277,
  SkillsOssTags = 278,
  SkillsOssTagsBlogPost = 279,
  SkillsOssTagsChildren = 280,
  SkillsOssTagsContentfulId = 281,
  SkillsOssTagsCreatedAt = 282,
  SkillsOssTagsId = 283,
  SkillsOssTagsLevel = 284,
  SkillsOssTagsName = 285,
  SkillsOssTagsNodeLocale = 286,
  SkillsOssTagsOss = 287,
  SkillsOssTagsProject = 288,
  SkillsOssTagsSkillMap = 289,
  SkillsOssTagsSpaceId = 290,
  SkillsOssTagsUpdatedAt = 291,
  SkillsOssUpdatedAt = 292,
  SkillsParentChildren = 293,
  SkillsParentChildrenChildren = 294,
  SkillsParentChildrenId = 295,
  SkillsParentId = 296,
  SkillsParentInternalContent = 297,
  SkillsParentInternalContentDigest = 298,
  SkillsParentInternalDescription = 299,
  SkillsParentInternalFieldOwners = 300,
  SkillsParentInternalIgnoreType = 301,
  SkillsParentInternalMediaType = 302,
  SkillsParentInternalOwner = 303,
  SkillsParentInternalType = 304,
  SkillsParentParentChildren = 305,
  SkillsParentParentId = 306,
  SkillsProject = 307,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 308,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 309,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 310,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 311,
  SkillsProjectChildren = 312,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 313,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 314,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 315,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 316,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 317,
  SkillsProjectChildrenChildren = 318,
  SkillsProjectChildrenId = 319,
  SkillsProjectContentfulId = 320,
  SkillsProjectCreatedAt = 321,
  SkillsProjectDetailChildren = 322,
  SkillsProjectDetailChildrenMdx = 323,
  SkillsProjectDetailDetail = 324,
  SkillsProjectDetailId = 325,
  SkillsProjectEndDate = 326,
  SkillsProjectIconChildren = 327,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 328,
  SkillsProjectIconContact = 329,
  SkillsProjectIconContentfulId = 330,
  SkillsProjectIconCreatedAt = 331,
  SkillsProjectIconHistory = 332,
  SkillsProjectIconId = 333,
  SkillsProjectIconName = 334,
  SkillsProjectIconNodeLocale = 335,
  SkillsProjectIconOss = 336,
  SkillsProjectIconProject = 337,
  SkillsProjectIconSpaceId = 338,
  SkillsProjectIconUpdatedAt = 339,
  SkillsProjectIconWhatICanDo = 340,
  SkillsProjectId = 341,
  SkillsProjectInternalContent = 342,
  SkillsProjectInternalContentDigest = 343,
  SkillsProjectInternalDescription = 344,
  SkillsProjectInternalFieldOwners = 345,
  SkillsProjectInternalIgnoreType = 346,
  SkillsProjectInternalMediaType = 347,
  SkillsProjectInternalOwner = 348,
  SkillsProjectInternalType = 349,
  SkillsProjectName = 350,
  SkillsProjectNodeLocale = 351,
  SkillsProjectParentChildren = 352,
  SkillsProjectParentId = 353,
  SkillsProjectSpaceId = 354,
  SkillsProjectStartDate = 355,
  SkillsProjectSubName = 356,
  SkillsProjectSysRevision = 357,
  SkillsProjectSysType = 358,
  SkillsProjectTags = 359,
  SkillsProjectTagsBlogPost = 360,
  SkillsProjectTagsChildren = 361,
  SkillsProjectTagsContentfulId = 362,
  SkillsProjectTagsCreatedAt = 363,
  SkillsProjectTagsId = 364,
  SkillsProjectTagsLevel = 365,
  SkillsProjectTagsName = 366,
  SkillsProjectTagsNodeLocale = 367,
  SkillsProjectTagsOss = 368,
  SkillsProjectTagsProject = 369,
  SkillsProjectTagsSkillMap = 370,
  SkillsProjectTagsSpaceId = 371,
  SkillsProjectTagsUpdatedAt = 372,
  SkillsProjectUpdatedAt = 373,
  SkillsSkillMap = 374,
  SkillsSkillMapChildren = 375,
  SkillsSkillMapChildrenChildren = 376,
  SkillsSkillMapChildrenId = 377,
  SkillsSkillMapContentfulId = 378,
  SkillsSkillMapCreatedAt = 379,
  SkillsSkillMapExpanded = 380,
  SkillsSkillMapId = 381,
  SkillsSkillMapInternalContent = 382,
  SkillsSkillMapInternalContentDigest = 383,
  SkillsSkillMapInternalDescription = 384,
  SkillsSkillMapInternalFieldOwners = 385,
  SkillsSkillMapInternalIgnoreType = 386,
  SkillsSkillMapInternalMediaType = 387,
  SkillsSkillMapInternalOwner = 388,
  SkillsSkillMapInternalType = 389,
  SkillsSkillMapName = 390,
  SkillsSkillMapNodeLocale = 391,
  SkillsSkillMapParentChildren = 392,
  SkillsSkillMapParentId = 393,
  SkillsSkillMapSkills = 394,
  SkillsSkillMapSkillsBlogPost = 395,
  SkillsSkillMapSkillsChildren = 396,
  SkillsSkillMapSkillsContentfulId = 397,
  SkillsSkillMapSkillsCreatedAt = 398,
  SkillsSkillMapSkillsId = 399,
  SkillsSkillMapSkillsLevel = 400,
  SkillsSkillMapSkillsName = 401,
  SkillsSkillMapSkillsNodeLocale = 402,
  SkillsSkillMapSkillsOss = 403,
  SkillsSkillMapSkillsProject = 404,
  SkillsSkillMapSkillsSkillMap = 405,
  SkillsSkillMapSkillsSpaceId = 406,
  SkillsSkillMapSkillsUpdatedAt = 407,
  SkillsSkillMapSortKey = 408,
  SkillsSkillMapSpaceId = 409,
  SkillsSkillMapSysRevision = 410,
  SkillsSkillMapSysType = 411,
  SkillsSkillMapUpdatedAt = 412,
  SkillsSpaceId = 413,
  SkillsSysRevision = 414,
  SkillsSysType = 415,
  SkillsUpdatedAt = 416,
  SortKey = 417,
  SpaceId = 418,
  SysContentTypeSysId = 419,
  SysContentTypeSysLinkType = 420,
  SysContentTypeSysType = 421,
  SysRevision = 422,
  SysType = 423,
  UpdatedAt = 424
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
  BlogPostCategoryBlogPost = 1,
  BlogPostCategoryBlogPostChildren = 2,
  BlogPostCategoryBlogPostChildrenContentfulBlogPostContentTextNode = 3,
  BlogPostCategoryBlogPostContentfulId = 4,
  BlogPostCategoryBlogPostCreated = 5,
  BlogPostCategoryBlogPostCreatedAt = 6,
  BlogPostCategoryBlogPostExcerpt = 7,
  BlogPostCategoryBlogPostId = 8,
  BlogPostCategoryBlogPostNodeLocale = 9,
  BlogPostCategoryBlogPostSlug = 10,
  BlogPostCategoryBlogPostSpaceId = 11,
  BlogPostCategoryBlogPostTags = 12,
  BlogPostCategoryBlogPostTitle = 13,
  BlogPostCategoryBlogPostUpdated = 14,
  BlogPostCategoryBlogPostUpdatedAt = 15,
  BlogPostCategoryChildren = 16,
  BlogPostCategoryChildrenChildren = 17,
  BlogPostCategoryChildrenId = 18,
  BlogPostCategoryContentfulId = 19,
  BlogPostCategoryCreatedAt = 20,
  BlogPostCategoryId = 21,
  BlogPostCategoryInternalContent = 22,
  BlogPostCategoryInternalContentDigest = 23,
  BlogPostCategoryInternalDescription = 24,
  BlogPostCategoryInternalFieldOwners = 25,
  BlogPostCategoryInternalIgnoreType = 26,
  BlogPostCategoryInternalMediaType = 27,
  BlogPostCategoryInternalOwner = 28,
  BlogPostCategoryInternalType = 29,
  BlogPostCategoryLevel = 30,
  BlogPostCategoryName = 31,
  BlogPostCategoryNodeLocale = 32,
  BlogPostCategoryOss = 33,
  BlogPostCategoryOssChildren = 34,
  BlogPostCategoryOssChildrenContentfulOssDetailTextNode = 35,
  BlogPostCategoryOssContentfulId = 36,
  BlogPostCategoryOssCreatedAt = 37,
  BlogPostCategoryOssHref = 38,
  BlogPostCategoryOssId = 39,
  BlogPostCategoryOssName = 40,
  BlogPostCategoryOssNodeLocale = 41,
  BlogPostCategoryOssSpaceId = 42,
  BlogPostCategoryOssStartDate = 43,
  BlogPostCategoryOssSubName = 44,
  BlogPostCategoryOssTags = 45,
  BlogPostCategoryOssUpdatedAt = 46,
  BlogPostCategoryParentChildren = 47,
  BlogPostCategoryParentId = 48,
  BlogPostCategoryProject = 49,
  BlogPostCategoryProjectChildren = 50,
  BlogPostCategoryProjectChildrenContentfulProjectDetailTextNode = 51,
  BlogPostCategoryProjectContentfulId = 52,
  BlogPostCategoryProjectCreatedAt = 53,
  BlogPostCategoryProjectEndDate = 54,
  BlogPostCategoryProjectId = 55,
  BlogPostCategoryProjectName = 56,
  BlogPostCategoryProjectNodeLocale = 57,
  BlogPostCategoryProjectSpaceId = 58,
  BlogPostCategoryProjectStartDate = 59,
  BlogPostCategoryProjectSubName = 60,
  BlogPostCategoryProjectTags = 61,
  BlogPostCategoryProjectUpdatedAt = 62,
  BlogPostCategorySkillMap = 63,
  BlogPostCategorySkillMapChildren = 64,
  BlogPostCategorySkillMapContentfulId = 65,
  BlogPostCategorySkillMapCreatedAt = 66,
  BlogPostCategorySkillMapExpanded = 67,
  BlogPostCategorySkillMapId = 68,
  BlogPostCategorySkillMapName = 69,
  BlogPostCategorySkillMapNodeLocale = 70,
  BlogPostCategorySkillMapSkills = 71,
  BlogPostCategorySkillMapSortKey = 72,
  BlogPostCategorySkillMapSpaceId = 73,
  BlogPostCategorySkillMapUpdatedAt = 74,
  BlogPostCategorySpaceId = 75,
  BlogPostCategorySysRevision = 76,
  BlogPostCategorySysType = 77,
  BlogPostCategoryUpdatedAt = 78,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxBody = 79,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxChildren = 80,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 81,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 82,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHeadings = 83,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHtml = 84,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxId = 85,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 86,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxRawBody = 87,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxSlug = 88,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 89,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 90,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 91,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 92,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxBody = 93,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 94,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 95,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 96,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 97,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 98,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxId = 99,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 100,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 101,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 102,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 103,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 104,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 105,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 106,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 107,
  BlogPostChildContentfulBlogPostContentTextNodeId = 108,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 109,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 110,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 111,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 112,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 113,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 114,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 115,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 116,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 117,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 118,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 119,
  BlogPostChildren = 120,
  BlogPostChildrenContentfulBlogPostContentTextNode = 121,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxBody = 122,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 123,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 124,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 125,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 126,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 127,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxId = 128,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 129,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 130,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 131,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 132,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 133,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 134,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 135,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 136,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 137,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 138,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 139,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 140,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 141,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 142,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 143,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 144,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 145,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 146,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 147,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 148,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 149,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 150,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 151,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 152,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 153,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 154,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 155,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 156,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 157,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 158,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 159,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 160,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 161,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 162,
  BlogPostChildrenChildren = 163,
  BlogPostChildrenChildrenChildren = 164,
  BlogPostChildrenChildrenId = 165,
  BlogPostChildrenId = 166,
  BlogPostChildrenInternalContent = 167,
  BlogPostChildrenInternalContentDigest = 168,
  BlogPostChildrenInternalDescription = 169,
  BlogPostChildrenInternalFieldOwners = 170,
  BlogPostChildrenInternalIgnoreType = 171,
  BlogPostChildrenInternalMediaType = 172,
  BlogPostChildrenInternalOwner = 173,
  BlogPostChildrenInternalType = 174,
  BlogPostChildrenParentChildren = 175,
  BlogPostChildrenParentId = 176,
  BlogPostContentChildMdxBody = 177,
  BlogPostContentChildMdxChildren = 178,
  BlogPostContentChildMdxExcerpt = 179,
  BlogPostContentChildMdxFileAbsolutePath = 180,
  BlogPostContentChildMdxHeadings = 181,
  BlogPostContentChildMdxHtml = 182,
  BlogPostContentChildMdxId = 183,
  BlogPostContentChildMdxMdxAst = 184,
  BlogPostContentChildMdxRawBody = 185,
  BlogPostContentChildMdxSlug = 186,
  BlogPostContentChildMdxTableOfContents = 187,
  BlogPostContentChildMdxTimeToRead = 188,
  BlogPostContentChildren = 189,
  BlogPostContentChildrenMdx = 190,
  BlogPostContentChildrenMdxBody = 191,
  BlogPostContentChildrenMdxChildren = 192,
  BlogPostContentChildrenMdxExcerpt = 193,
  BlogPostContentChildrenMdxFileAbsolutePath = 194,
  BlogPostContentChildrenMdxHeadings = 195,
  BlogPostContentChildrenMdxHtml = 196,
  BlogPostContentChildrenMdxId = 197,
  BlogPostContentChildrenMdxMdxAst = 198,
  BlogPostContentChildrenMdxRawBody = 199,
  BlogPostContentChildrenMdxSlug = 200,
  BlogPostContentChildrenMdxTableOfContents = 201,
  BlogPostContentChildrenMdxTimeToRead = 202,
  BlogPostContentChildrenChildren = 203,
  BlogPostContentChildrenId = 204,
  BlogPostContentContent = 205,
  BlogPostContentId = 206,
  BlogPostContentInternalContent = 207,
  BlogPostContentInternalContentDigest = 208,
  BlogPostContentInternalDescription = 209,
  BlogPostContentInternalFieldOwners = 210,
  BlogPostContentInternalIgnoreType = 211,
  BlogPostContentInternalMediaType = 212,
  BlogPostContentInternalOwner = 213,
  BlogPostContentInternalType = 214,
  BlogPostContentParentChildren = 215,
  BlogPostContentParentId = 216,
  BlogPostContentSysType = 217,
  BlogPostContentfulId = 218,
  BlogPostCreated = 219,
  BlogPostCreatedAt = 220,
  BlogPostExcerpt = 221,
  BlogPostId = 222,
  BlogPostInternalContent = 223,
  BlogPostInternalContentDigest = 224,
  BlogPostInternalDescription = 225,
  BlogPostInternalFieldOwners = 226,
  BlogPostInternalIgnoreType = 227,
  BlogPostInternalMediaType = 228,
  BlogPostInternalOwner = 229,
  BlogPostInternalType = 230,
  BlogPostNodeLocale = 231,
  BlogPostParentChildren = 232,
  BlogPostParentChildrenChildren = 233,
  BlogPostParentChildrenId = 234,
  BlogPostParentId = 235,
  BlogPostParentInternalContent = 236,
  BlogPostParentInternalContentDigest = 237,
  BlogPostParentInternalDescription = 238,
  BlogPostParentInternalFieldOwners = 239,
  BlogPostParentInternalIgnoreType = 240,
  BlogPostParentInternalMediaType = 241,
  BlogPostParentInternalOwner = 242,
  BlogPostParentInternalType = 243,
  BlogPostParentParentChildren = 244,
  BlogPostParentParentId = 245,
  BlogPostSlug = 246,
  BlogPostSpaceId = 247,
  BlogPostSysRevision = 248,
  BlogPostSysType = 249,
  BlogPostTags = 250,
  BlogPostTagsBlogPost = 251,
  BlogPostTagsBlogPostChildren = 252,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 253,
  BlogPostTagsBlogPostContentfulId = 254,
  BlogPostTagsBlogPostCreated = 255,
  BlogPostTagsBlogPostCreatedAt = 256,
  BlogPostTagsBlogPostExcerpt = 257,
  BlogPostTagsBlogPostId = 258,
  BlogPostTagsBlogPostNodeLocale = 259,
  BlogPostTagsBlogPostSlug = 260,
  BlogPostTagsBlogPostSpaceId = 261,
  BlogPostTagsBlogPostTags = 262,
  BlogPostTagsBlogPostTitle = 263,
  BlogPostTagsBlogPostUpdated = 264,
  BlogPostTagsBlogPostUpdatedAt = 265,
  BlogPostTagsChildren = 266,
  BlogPostTagsChildrenChildren = 267,
  BlogPostTagsChildrenId = 268,
  BlogPostTagsContentfulId = 269,
  BlogPostTagsCreatedAt = 270,
  BlogPostTagsId = 271,
  BlogPostTagsInternalContent = 272,
  BlogPostTagsInternalContentDigest = 273,
  BlogPostTagsInternalDescription = 274,
  BlogPostTagsInternalFieldOwners = 275,
  BlogPostTagsInternalIgnoreType = 276,
  BlogPostTagsInternalMediaType = 277,
  BlogPostTagsInternalOwner = 278,
  BlogPostTagsInternalType = 279,
  BlogPostTagsLevel = 280,
  BlogPostTagsName = 281,
  BlogPostTagsNodeLocale = 282,
  BlogPostTagsOss = 283,
  BlogPostTagsOssChildren = 284,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 285,
  BlogPostTagsOssContentfulId = 286,
  BlogPostTagsOssCreatedAt = 287,
  BlogPostTagsOssHref = 288,
  BlogPostTagsOssId = 289,
  BlogPostTagsOssName = 290,
  BlogPostTagsOssNodeLocale = 291,
  BlogPostTagsOssSpaceId = 292,
  BlogPostTagsOssStartDate = 293,
  BlogPostTagsOssSubName = 294,
  BlogPostTagsOssTags = 295,
  BlogPostTagsOssUpdatedAt = 296,
  BlogPostTagsParentChildren = 297,
  BlogPostTagsParentId = 298,
  BlogPostTagsProject = 299,
  BlogPostTagsProjectChildren = 300,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 301,
  BlogPostTagsProjectContentfulId = 302,
  BlogPostTagsProjectCreatedAt = 303,
  BlogPostTagsProjectEndDate = 304,
  BlogPostTagsProjectId = 305,
  BlogPostTagsProjectName = 306,
  BlogPostTagsProjectNodeLocale = 307,
  BlogPostTagsProjectSpaceId = 308,
  BlogPostTagsProjectStartDate = 309,
  BlogPostTagsProjectSubName = 310,
  BlogPostTagsProjectTags = 311,
  BlogPostTagsProjectUpdatedAt = 312,
  BlogPostTagsSkillMap = 313,
  BlogPostTagsSkillMapChildren = 314,
  BlogPostTagsSkillMapContentfulId = 315,
  BlogPostTagsSkillMapCreatedAt = 316,
  BlogPostTagsSkillMapExpanded = 317,
  BlogPostTagsSkillMapId = 318,
  BlogPostTagsSkillMapName = 319,
  BlogPostTagsSkillMapNodeLocale = 320,
  BlogPostTagsSkillMapSkills = 321,
  BlogPostTagsSkillMapSortKey = 322,
  BlogPostTagsSkillMapSpaceId = 323,
  BlogPostTagsSkillMapUpdatedAt = 324,
  BlogPostTagsSpaceId = 325,
  BlogPostTagsSysRevision = 326,
  BlogPostTagsSysType = 327,
  BlogPostTagsUpdatedAt = 328,
  BlogPostThumbnailChildren = 329,
  BlogPostThumbnailChildrenChildren = 330,
  BlogPostThumbnailChildrenId = 331,
  BlogPostThumbnailContentfulId = 332,
  BlogPostThumbnailCreatedAt = 333,
  BlogPostThumbnailDescription = 334,
  BlogPostThumbnailFieldsLocalFile = 335,
  BlogPostThumbnailFileContentType = 336,
  BlogPostThumbnailFileFileName = 337,
  BlogPostThumbnailFileUrl = 338,
  BlogPostThumbnailFilename = 339,
  BlogPostThumbnailFilesize = 340,
  BlogPostThumbnailGatsbyImage = 341,
  BlogPostThumbnailGatsbyImageData = 342,
  BlogPostThumbnailHeight = 343,
  BlogPostThumbnailId = 344,
  BlogPostThumbnailInternalContent = 345,
  BlogPostThumbnailInternalContentDigest = 346,
  BlogPostThumbnailInternalDescription = 347,
  BlogPostThumbnailInternalFieldOwners = 348,
  BlogPostThumbnailInternalIgnoreType = 349,
  BlogPostThumbnailInternalMediaType = 350,
  BlogPostThumbnailInternalOwner = 351,
  BlogPostThumbnailInternalType = 352,
  BlogPostThumbnailLocalFileAbsolutePath = 353,
  BlogPostThumbnailLocalFileAccessTime = 354,
  BlogPostThumbnailLocalFileAtime = 355,
  BlogPostThumbnailLocalFileAtimeMs = 356,
  BlogPostThumbnailLocalFileBase = 357,
  BlogPostThumbnailLocalFileBirthTime = 358,
  BlogPostThumbnailLocalFileBirthtime = 359,
  BlogPostThumbnailLocalFileBirthtimeMs = 360,
  BlogPostThumbnailLocalFileBlksize = 361,
  BlogPostThumbnailLocalFileBlocks = 362,
  BlogPostThumbnailLocalFileChangeTime = 363,
  BlogPostThumbnailLocalFileChildren = 364,
  BlogPostThumbnailLocalFileChildrenImageSharp = 365,
  BlogPostThumbnailLocalFileChildrenLocale = 366,
  BlogPostThumbnailLocalFileCtime = 367,
  BlogPostThumbnailLocalFileCtimeMs = 368,
  BlogPostThumbnailLocalFileDev = 369,
  BlogPostThumbnailLocalFileDir = 370,
  BlogPostThumbnailLocalFileExt = 371,
  BlogPostThumbnailLocalFileExtension = 372,
  BlogPostThumbnailLocalFileGid = 373,
  BlogPostThumbnailLocalFileId = 374,
  BlogPostThumbnailLocalFileIno = 375,
  BlogPostThumbnailLocalFileMode = 376,
  BlogPostThumbnailLocalFileModifiedTime = 377,
  BlogPostThumbnailLocalFileMtime = 378,
  BlogPostThumbnailLocalFileMtimeMs = 379,
  BlogPostThumbnailLocalFileName = 380,
  BlogPostThumbnailLocalFileNlink = 381,
  BlogPostThumbnailLocalFilePrettySize = 382,
  BlogPostThumbnailLocalFilePublicUrl = 383,
  BlogPostThumbnailLocalFileRdev = 384,
  BlogPostThumbnailLocalFileRelativeDirectory = 385,
  BlogPostThumbnailLocalFileRelativePath = 386,
  BlogPostThumbnailLocalFileRoot = 387,
  BlogPostThumbnailLocalFileSize = 388,
  BlogPostThumbnailLocalFileSourceInstanceName = 389,
  BlogPostThumbnailLocalFileUid = 390,
  BlogPostThumbnailLocalFileUrl = 391,
  BlogPostThumbnailMimeType = 392,
  BlogPostThumbnailNodeLocale = 393,
  BlogPostThumbnailParentChildren = 394,
  BlogPostThumbnailParentId = 395,
  BlogPostThumbnailPlaceholderUrl = 396,
  BlogPostThumbnailPublicUrl = 397,
  BlogPostThumbnailResizeHeight = 398,
  BlogPostThumbnailResizeSrc = 399,
  BlogPostThumbnailResizeWidth = 400,
  BlogPostThumbnailSpaceId = 401,
  BlogPostThumbnailSysRevision = 402,
  BlogPostThumbnailSysType = 403,
  BlogPostThumbnailTitle = 404,
  BlogPostThumbnailUpdatedAt = 405,
  BlogPostThumbnailUrl = 406,
  BlogPostThumbnailWidth = 407,
  BlogPostTitle = 408,
  BlogPostUpdated = 409,
  BlogPostUpdatedAt = 410,
  Children = 411,
  ChildrenChildren = 412,
  ChildrenChildrenChildren = 413,
  ChildrenChildrenChildrenChildren = 414,
  ChildrenChildrenChildrenId = 415,
  ChildrenChildrenId = 416,
  ChildrenChildrenInternalContent = 417,
  ChildrenChildrenInternalContentDigest = 418,
  ChildrenChildrenInternalDescription = 419,
  ChildrenChildrenInternalFieldOwners = 420,
  ChildrenChildrenInternalIgnoreType = 421,
  ChildrenChildrenInternalMediaType = 422,
  ChildrenChildrenInternalOwner = 423,
  ChildrenChildrenInternalType = 424,
  ChildrenChildrenParentChildren = 425,
  ChildrenChildrenParentId = 426,
  ChildrenId = 427,
  ChildrenInternalContent = 428,
  ChildrenInternalContentDigest = 429,
  ChildrenInternalDescription = 430,
  ChildrenInternalFieldOwners = 431,
  ChildrenInternalIgnoreType = 432,
  ChildrenInternalMediaType = 433,
  ChildrenInternalOwner = 434,
  ChildrenInternalType = 435,
  ChildrenParentChildren = 436,
  ChildrenParentChildrenChildren = 437,
  ChildrenParentChildrenId = 438,
  ChildrenParentId = 439,
  ChildrenParentInternalContent = 440,
  ChildrenParentInternalContentDigest = 441,
  ChildrenParentInternalDescription = 442,
  ChildrenParentInternalFieldOwners = 443,
  ChildrenParentInternalIgnoreType = 444,
  ChildrenParentInternalMediaType = 445,
  ChildrenParentInternalOwner = 446,
  ChildrenParentInternalType = 447,
  ChildrenParentParentChildren = 448,
  ChildrenParentParentId = 449,
  ContentfulId = 450,
  CreatedAt = 451,
  Id = 452,
  InternalContent = 453,
  InternalContentDigest = 454,
  InternalDescription = 455,
  InternalFieldOwners = 456,
  InternalIgnoreType = 457,
  InternalMediaType = 458,
  InternalOwner = 459,
  InternalType = 460,
  Level = 461,
  Name = 462,
  NodeLocale = 463,
  Oss = 464,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 465,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 466,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 467,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 468,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 469,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 470,
  OssChildContentfulOssDetailTextNodeChildMdxId = 471,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 472,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 473,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 474,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 475,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 476,
  OssChildContentfulOssDetailTextNodeChildren = 477,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 478,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 479,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 480,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 481,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 482,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 483,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 484,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 485,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 486,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 487,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 488,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 489,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 490,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 491,
  OssChildContentfulOssDetailTextNodeChildrenId = 492,
  OssChildContentfulOssDetailTextNodeDetail = 493,
  OssChildContentfulOssDetailTextNodeId = 494,
  OssChildContentfulOssDetailTextNodeInternalContent = 495,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 496,
  OssChildContentfulOssDetailTextNodeInternalDescription = 497,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 498,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 499,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 500,
  OssChildContentfulOssDetailTextNodeInternalOwner = 501,
  OssChildContentfulOssDetailTextNodeInternalType = 502,
  OssChildContentfulOssDetailTextNodeParentChildren = 503,
  OssChildContentfulOssDetailTextNodeParentId = 504,
  OssChildContentfulOssDetailTextNodeSysType = 505,
  OssChildren = 506,
  OssChildrenContentfulOssDetailTextNode = 507,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 508,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 509,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 510,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 511,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 512,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 513,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 514,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 515,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 516,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 517,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 518,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 519,
  OssChildrenContentfulOssDetailTextNodeChildren = 520,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 521,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 522,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 523,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 524,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 525,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 526,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 527,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 528,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 529,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 530,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 531,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 532,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 533,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 534,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 535,
  OssChildrenContentfulOssDetailTextNodeDetail = 536,
  OssChildrenContentfulOssDetailTextNodeId = 537,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 538,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 539,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 540,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 541,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 542,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 543,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 544,
  OssChildrenContentfulOssDetailTextNodeInternalType = 545,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 546,
  OssChildrenContentfulOssDetailTextNodeParentId = 547,
  OssChildrenContentfulOssDetailTextNodeSysType = 548,
  OssChildrenChildren = 549,
  OssChildrenChildrenChildren = 550,
  OssChildrenChildrenId = 551,
  OssChildrenId = 552,
  OssChildrenInternalContent = 553,
  OssChildrenInternalContentDigest = 554,
  OssChildrenInternalDescription = 555,
  OssChildrenInternalFieldOwners = 556,
  OssChildrenInternalIgnoreType = 557,
  OssChildrenInternalMediaType = 558,
  OssChildrenInternalOwner = 559,
  OssChildrenInternalType = 560,
  OssChildrenParentChildren = 561,
  OssChildrenParentId = 562,
  OssContentfulId = 563,
  OssCreatedAt = 564,
  OssDetailChildMdxBody = 565,
  OssDetailChildMdxChildren = 566,
  OssDetailChildMdxExcerpt = 567,
  OssDetailChildMdxFileAbsolutePath = 568,
  OssDetailChildMdxHeadings = 569,
  OssDetailChildMdxHtml = 570,
  OssDetailChildMdxId = 571,
  OssDetailChildMdxMdxAst = 572,
  OssDetailChildMdxRawBody = 573,
  OssDetailChildMdxSlug = 574,
  OssDetailChildMdxTableOfContents = 575,
  OssDetailChildMdxTimeToRead = 576,
  OssDetailChildren = 577,
  OssDetailChildrenMdx = 578,
  OssDetailChildrenMdxBody = 579,
  OssDetailChildrenMdxChildren = 580,
  OssDetailChildrenMdxExcerpt = 581,
  OssDetailChildrenMdxFileAbsolutePath = 582,
  OssDetailChildrenMdxHeadings = 583,
  OssDetailChildrenMdxHtml = 584,
  OssDetailChildrenMdxId = 585,
  OssDetailChildrenMdxMdxAst = 586,
  OssDetailChildrenMdxRawBody = 587,
  OssDetailChildrenMdxSlug = 588,
  OssDetailChildrenMdxTableOfContents = 589,
  OssDetailChildrenMdxTimeToRead = 590,
  OssDetailChildrenChildren = 591,
  OssDetailChildrenId = 592,
  OssDetailDetail = 593,
  OssDetailId = 594,
  OssDetailInternalContent = 595,
  OssDetailInternalContentDigest = 596,
  OssDetailInternalDescription = 597,
  OssDetailInternalFieldOwners = 598,
  OssDetailInternalIgnoreType = 599,
  OssDetailInternalMediaType = 600,
  OssDetailInternalOwner = 601,
  OssDetailInternalType = 602,
  OssDetailParentChildren = 603,
  OssDetailParentId = 604,
  OssDetailSysType = 605,
  OssHref = 606,
  OssIconChildContentfulIconSvgTextNodeChildren = 607,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 608,
  OssIconChildContentfulIconSvgTextNodeId = 609,
  OssIconChildContentfulIconSvgTextNodeSvg = 610,
  OssIconChildren = 611,
  OssIconChildrenContentfulIconSvgTextNode = 612,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 613,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 614,
  OssIconChildrenContentfulIconSvgTextNodeId = 615,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 616,
  OssIconChildrenChildren = 617,
  OssIconChildrenId = 618,
  OssIconContact = 619,
  OssIconContactChildren = 620,
  OssIconContactContentfulId = 621,
  OssIconContactCreatedAt = 622,
  OssIconContactHref = 623,
  OssIconContactId = 624,
  OssIconContactName = 625,
  OssIconContactNodeLocale = 626,
  OssIconContactSortKey = 627,
  OssIconContactSpaceId = 628,
  OssIconContactSubName = 629,
  OssIconContactUpdatedAt = 630,
  OssIconContentfulId = 631,
  OssIconCreatedAt = 632,
  OssIconHistory = 633,
  OssIconHistoryChildren = 634,
  OssIconHistoryContentfulId = 635,
  OssIconHistoryCreatedAt = 636,
  OssIconHistoryDate = 637,
  OssIconHistoryId = 638,
  OssIconHistoryName = 639,
  OssIconHistoryNodeLocale = 640,
  OssIconHistorySpaceId = 641,
  OssIconHistorySubName = 642,
  OssIconHistoryUpdatedAt = 643,
  OssIconId = 644,
  OssIconInternalContent = 645,
  OssIconInternalContentDigest = 646,
  OssIconInternalDescription = 647,
  OssIconInternalFieldOwners = 648,
  OssIconInternalIgnoreType = 649,
  OssIconInternalMediaType = 650,
  OssIconInternalOwner = 651,
  OssIconInternalType = 652,
  OssIconName = 653,
  OssIconNodeLocale = 654,
  OssIconOss = 655,
  OssIconOssChildren = 656,
  OssIconOssChildrenContentfulOssDetailTextNode = 657,
  OssIconOssContentfulId = 658,
  OssIconOssCreatedAt = 659,
  OssIconOssHref = 660,
  OssIconOssId = 661,
  OssIconOssName = 662,
  OssIconOssNodeLocale = 663,
  OssIconOssSpaceId = 664,
  OssIconOssStartDate = 665,
  OssIconOssSubName = 666,
  OssIconOssTags = 667,
  OssIconOssUpdatedAt = 668,
  OssIconParentChildren = 669,
  OssIconParentId = 670,
  OssIconProject = 671,
  OssIconProjectChildren = 672,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 673,
  OssIconProjectContentfulId = 674,
  OssIconProjectCreatedAt = 675,
  OssIconProjectEndDate = 676,
  OssIconProjectId = 677,
  OssIconProjectName = 678,
  OssIconProjectNodeLocale = 679,
  OssIconProjectSpaceId = 680,
  OssIconProjectStartDate = 681,
  OssIconProjectSubName = 682,
  OssIconProjectTags = 683,
  OssIconProjectUpdatedAt = 684,
  OssIconSpaceId = 685,
  OssIconSvgChildren = 686,
  OssIconSvgChildrenMdx = 687,
  OssIconSvgId = 688,
  OssIconSvgSvg = 689,
  OssIconSysRevision = 690,
  OssIconSysType = 691,
  OssIconUpdatedAt = 692,
  OssIconWhatICanDo = 693,
  OssIconWhatICanDoChildren = 694,
  OssIconWhatICanDoContentfulId = 695,
  OssIconWhatICanDoCreatedAt = 696,
  OssIconWhatICanDoId = 697,
  OssIconWhatICanDoName = 698,
  OssIconWhatICanDoNodeLocale = 699,
  OssIconWhatICanDoSortKey = 700,
  OssIconWhatICanDoSpaceId = 701,
  OssIconWhatICanDoSubName = 702,
  OssIconWhatICanDoUpdatedAt = 703,
  OssId = 704,
  OssImageChildren = 705,
  OssImageChildrenChildren = 706,
  OssImageChildrenId = 707,
  OssImageContentfulId = 708,
  OssImageCreatedAt = 709,
  OssImageDescription = 710,
  OssImageFieldsLocalFile = 711,
  OssImageFileContentType = 712,
  OssImageFileFileName = 713,
  OssImageFileUrl = 714,
  OssImageFilename = 715,
  OssImageFilesize = 716,
  OssImageGatsbyImage = 717,
  OssImageGatsbyImageData = 718,
  OssImageHeight = 719,
  OssImageId = 720,
  OssImageInternalContent = 721,
  OssImageInternalContentDigest = 722,
  OssImageInternalDescription = 723,
  OssImageInternalFieldOwners = 724,
  OssImageInternalIgnoreType = 725,
  OssImageInternalMediaType = 726,
  OssImageInternalOwner = 727,
  OssImageInternalType = 728,
  OssImageLocalFileAbsolutePath = 729,
  OssImageLocalFileAccessTime = 730,
  OssImageLocalFileAtime = 731,
  OssImageLocalFileAtimeMs = 732,
  OssImageLocalFileBase = 733,
  OssImageLocalFileBirthTime = 734,
  OssImageLocalFileBirthtime = 735,
  OssImageLocalFileBirthtimeMs = 736,
  OssImageLocalFileBlksize = 737,
  OssImageLocalFileBlocks = 738,
  OssImageLocalFileChangeTime = 739,
  OssImageLocalFileChildren = 740,
  OssImageLocalFileChildrenImageSharp = 741,
  OssImageLocalFileChildrenLocale = 742,
  OssImageLocalFileCtime = 743,
  OssImageLocalFileCtimeMs = 744,
  OssImageLocalFileDev = 745,
  OssImageLocalFileDir = 746,
  OssImageLocalFileExt = 747,
  OssImageLocalFileExtension = 748,
  OssImageLocalFileGid = 749,
  OssImageLocalFileId = 750,
  OssImageLocalFileIno = 751,
  OssImageLocalFileMode = 752,
  OssImageLocalFileModifiedTime = 753,
  OssImageLocalFileMtime = 754,
  OssImageLocalFileMtimeMs = 755,
  OssImageLocalFileName = 756,
  OssImageLocalFileNlink = 757,
  OssImageLocalFilePrettySize = 758,
  OssImageLocalFilePublicUrl = 759,
  OssImageLocalFileRdev = 760,
  OssImageLocalFileRelativeDirectory = 761,
  OssImageLocalFileRelativePath = 762,
  OssImageLocalFileRoot = 763,
  OssImageLocalFileSize = 764,
  OssImageLocalFileSourceInstanceName = 765,
  OssImageLocalFileUid = 766,
  OssImageLocalFileUrl = 767,
  OssImageMimeType = 768,
  OssImageNodeLocale = 769,
  OssImageParentChildren = 770,
  OssImageParentId = 771,
  OssImagePlaceholderUrl = 772,
  OssImagePublicUrl = 773,
  OssImageResizeHeight = 774,
  OssImageResizeSrc = 775,
  OssImageResizeWidth = 776,
  OssImageSpaceId = 777,
  OssImageSysRevision = 778,
  OssImageSysType = 779,
  OssImageTitle = 780,
  OssImageUpdatedAt = 781,
  OssImageUrl = 782,
  OssImageWidth = 783,
  OssInternalContent = 784,
  OssInternalContentDigest = 785,
  OssInternalDescription = 786,
  OssInternalFieldOwners = 787,
  OssInternalIgnoreType = 788,
  OssInternalMediaType = 789,
  OssInternalOwner = 790,
  OssInternalType = 791,
  OssName = 792,
  OssNodeLocale = 793,
  OssParentChildren = 794,
  OssParentChildrenChildren = 795,
  OssParentChildrenId = 796,
  OssParentId = 797,
  OssParentInternalContent = 798,
  OssParentInternalContentDigest = 799,
  OssParentInternalDescription = 800,
  OssParentInternalFieldOwners = 801,
  OssParentInternalIgnoreType = 802,
  OssParentInternalMediaType = 803,
  OssParentInternalOwner = 804,
  OssParentInternalType = 805,
  OssParentParentChildren = 806,
  OssParentParentId = 807,
  OssSpaceId = 808,
  OssStartDate = 809,
  OssSubName = 810,
  OssSysRevision = 811,
  OssSysType = 812,
  OssTags = 813,
  OssTagsBlogPost = 814,
  OssTagsBlogPostChildren = 815,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 816,
  OssTagsBlogPostContentfulId = 817,
  OssTagsBlogPostCreated = 818,
  OssTagsBlogPostCreatedAt = 819,
  OssTagsBlogPostExcerpt = 820,
  OssTagsBlogPostId = 821,
  OssTagsBlogPostNodeLocale = 822,
  OssTagsBlogPostSlug = 823,
  OssTagsBlogPostSpaceId = 824,
  OssTagsBlogPostTags = 825,
  OssTagsBlogPostTitle = 826,
  OssTagsBlogPostUpdated = 827,
  OssTagsBlogPostUpdatedAt = 828,
  OssTagsChildren = 829,
  OssTagsChildrenChildren = 830,
  OssTagsChildrenId = 831,
  OssTagsContentfulId = 832,
  OssTagsCreatedAt = 833,
  OssTagsId = 834,
  OssTagsInternalContent = 835,
  OssTagsInternalContentDigest = 836,
  OssTagsInternalDescription = 837,
  OssTagsInternalFieldOwners = 838,
  OssTagsInternalIgnoreType = 839,
  OssTagsInternalMediaType = 840,
  OssTagsInternalOwner = 841,
  OssTagsInternalType = 842,
  OssTagsLevel = 843,
  OssTagsName = 844,
  OssTagsNodeLocale = 845,
  OssTagsOss = 846,
  OssTagsOssChildren = 847,
  OssTagsOssChildrenContentfulOssDetailTextNode = 848,
  OssTagsOssContentfulId = 849,
  OssTagsOssCreatedAt = 850,
  OssTagsOssHref = 851,
  OssTagsOssId = 852,
  OssTagsOssName = 853,
  OssTagsOssNodeLocale = 854,
  OssTagsOssSpaceId = 855,
  OssTagsOssStartDate = 856,
  OssTagsOssSubName = 857,
  OssTagsOssTags = 858,
  OssTagsOssUpdatedAt = 859,
  OssTagsParentChildren = 860,
  OssTagsParentId = 861,
  OssTagsProject = 862,
  OssTagsProjectChildren = 863,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 864,
  OssTagsProjectContentfulId = 865,
  OssTagsProjectCreatedAt = 866,
  OssTagsProjectEndDate = 867,
  OssTagsProjectId = 868,
  OssTagsProjectName = 869,
  OssTagsProjectNodeLocale = 870,
  OssTagsProjectSpaceId = 871,
  OssTagsProjectStartDate = 872,
  OssTagsProjectSubName = 873,
  OssTagsProjectTags = 874,
  OssTagsProjectUpdatedAt = 875,
  OssTagsSkillMap = 876,
  OssTagsSkillMapChildren = 877,
  OssTagsSkillMapContentfulId = 878,
  OssTagsSkillMapCreatedAt = 879,
  OssTagsSkillMapExpanded = 880,
  OssTagsSkillMapId = 881,
  OssTagsSkillMapName = 882,
  OssTagsSkillMapNodeLocale = 883,
  OssTagsSkillMapSkills = 884,
  OssTagsSkillMapSortKey = 885,
  OssTagsSkillMapSpaceId = 886,
  OssTagsSkillMapUpdatedAt = 887,
  OssTagsSpaceId = 888,
  OssTagsSysRevision = 889,
  OssTagsSysType = 890,
  OssTagsUpdatedAt = 891,
  OssUpdatedAt = 892,
  ParentChildren = 893,
  ParentChildrenChildren = 894,
  ParentChildrenChildrenChildren = 895,
  ParentChildrenChildrenId = 896,
  ParentChildrenId = 897,
  ParentChildrenInternalContent = 898,
  ParentChildrenInternalContentDigest = 899,
  ParentChildrenInternalDescription = 900,
  ParentChildrenInternalFieldOwners = 901,
  ParentChildrenInternalIgnoreType = 902,
  ParentChildrenInternalMediaType = 903,
  ParentChildrenInternalOwner = 904,
  ParentChildrenInternalType = 905,
  ParentChildrenParentChildren = 906,
  ParentChildrenParentId = 907,
  ParentId = 908,
  ParentInternalContent = 909,
  ParentInternalContentDigest = 910,
  ParentInternalDescription = 911,
  ParentInternalFieldOwners = 912,
  ParentInternalIgnoreType = 913,
  ParentInternalMediaType = 914,
  ParentInternalOwner = 915,
  ParentInternalType = 916,
  ParentParentChildren = 917,
  ParentParentChildrenChildren = 918,
  ParentParentChildrenId = 919,
  ParentParentId = 920,
  ParentParentInternalContent = 921,
  ParentParentInternalContentDigest = 922,
  ParentParentInternalDescription = 923,
  ParentParentInternalFieldOwners = 924,
  ParentParentInternalIgnoreType = 925,
  ParentParentInternalMediaType = 926,
  ParentParentInternalOwner = 927,
  ParentParentInternalType = 928,
  ParentParentParentChildren = 929,
  ParentParentParentId = 930,
  Project = 931,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 932,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 933,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 934,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 935,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 936,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 937,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 938,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 939,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 940,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 941,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 942,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 943,
  ProjectChildContentfulProjectDetailTextNodeChildren = 944,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 945,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 946,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 947,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 948,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 949,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 950,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 951,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 952,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 953,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 954,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 955,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 956,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 957,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 958,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 959,
  ProjectChildContentfulProjectDetailTextNodeDetail = 960,
  ProjectChildContentfulProjectDetailTextNodeId = 961,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 962,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 963,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 964,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 965,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 966,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 967,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 968,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 969,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 970,
  ProjectChildContentfulProjectDetailTextNodeParentId = 971,
  ProjectChildContentfulProjectDetailTextNodeSysType = 972,
  ProjectChildren = 973,
  ProjectChildrenContentfulProjectDetailTextNode = 974,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 975,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 976,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 977,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 978,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 979,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 980,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 981,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 982,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 983,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 984,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 985,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 986,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 987,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 988,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 989,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 990,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 991,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 992,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 993,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 994,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 995,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 996,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 997,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 998,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 999,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1000,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 1001,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 1002,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 1003,
  ProjectChildrenContentfulProjectDetailTextNodeId = 1004,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 1005,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 1006,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 1007,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 1008,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 1009,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 1010,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 1011,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 1012,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 1013,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 1014,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 1015,
  ProjectChildrenChildren = 1016,
  ProjectChildrenChildrenChildren = 1017,
  ProjectChildrenChildrenId = 1018,
  ProjectChildrenId = 1019,
  ProjectChildrenInternalContent = 1020,
  ProjectChildrenInternalContentDigest = 1021,
  ProjectChildrenInternalDescription = 1022,
  ProjectChildrenInternalFieldOwners = 1023,
  ProjectChildrenInternalIgnoreType = 1024,
  ProjectChildrenInternalMediaType = 1025,
  ProjectChildrenInternalOwner = 1026,
  ProjectChildrenInternalType = 1027,
  ProjectChildrenParentChildren = 1028,
  ProjectChildrenParentId = 1029,
  ProjectContentfulId = 1030,
  ProjectCreatedAt = 1031,
  ProjectDetailChildMdxBody = 1032,
  ProjectDetailChildMdxChildren = 1033,
  ProjectDetailChildMdxExcerpt = 1034,
  ProjectDetailChildMdxFileAbsolutePath = 1035,
  ProjectDetailChildMdxHeadings = 1036,
  ProjectDetailChildMdxHtml = 1037,
  ProjectDetailChildMdxId = 1038,
  ProjectDetailChildMdxMdxAst = 1039,
  ProjectDetailChildMdxRawBody = 1040,
  ProjectDetailChildMdxSlug = 1041,
  ProjectDetailChildMdxTableOfContents = 1042,
  ProjectDetailChildMdxTimeToRead = 1043,
  ProjectDetailChildren = 1044,
  ProjectDetailChildrenMdx = 1045,
  ProjectDetailChildrenMdxBody = 1046,
  ProjectDetailChildrenMdxChildren = 1047,
  ProjectDetailChildrenMdxExcerpt = 1048,
  ProjectDetailChildrenMdxFileAbsolutePath = 1049,
  ProjectDetailChildrenMdxHeadings = 1050,
  ProjectDetailChildrenMdxHtml = 1051,
  ProjectDetailChildrenMdxId = 1052,
  ProjectDetailChildrenMdxMdxAst = 1053,
  ProjectDetailChildrenMdxRawBody = 1054,
  ProjectDetailChildrenMdxSlug = 1055,
  ProjectDetailChildrenMdxTableOfContents = 1056,
  ProjectDetailChildrenMdxTimeToRead = 1057,
  ProjectDetailChildrenChildren = 1058,
  ProjectDetailChildrenId = 1059,
  ProjectDetailDetail = 1060,
  ProjectDetailId = 1061,
  ProjectDetailInternalContent = 1062,
  ProjectDetailInternalContentDigest = 1063,
  ProjectDetailInternalDescription = 1064,
  ProjectDetailInternalFieldOwners = 1065,
  ProjectDetailInternalIgnoreType = 1066,
  ProjectDetailInternalMediaType = 1067,
  ProjectDetailInternalOwner = 1068,
  ProjectDetailInternalType = 1069,
  ProjectDetailParentChildren = 1070,
  ProjectDetailParentId = 1071,
  ProjectDetailSysType = 1072,
  ProjectEndDate = 1073,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1074,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 1075,
  ProjectIconChildContentfulIconSvgTextNodeId = 1076,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1077,
  ProjectIconChildren = 1078,
  ProjectIconChildrenContentfulIconSvgTextNode = 1079,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1080,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1081,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1082,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1083,
  ProjectIconChildrenChildren = 1084,
  ProjectIconChildrenId = 1085,
  ProjectIconContact = 1086,
  ProjectIconContactChildren = 1087,
  ProjectIconContactContentfulId = 1088,
  ProjectIconContactCreatedAt = 1089,
  ProjectIconContactHref = 1090,
  ProjectIconContactId = 1091,
  ProjectIconContactName = 1092,
  ProjectIconContactNodeLocale = 1093,
  ProjectIconContactSortKey = 1094,
  ProjectIconContactSpaceId = 1095,
  ProjectIconContactSubName = 1096,
  ProjectIconContactUpdatedAt = 1097,
  ProjectIconContentfulId = 1098,
  ProjectIconCreatedAt = 1099,
  ProjectIconHistory = 1100,
  ProjectIconHistoryChildren = 1101,
  ProjectIconHistoryContentfulId = 1102,
  ProjectIconHistoryCreatedAt = 1103,
  ProjectIconHistoryDate = 1104,
  ProjectIconHistoryId = 1105,
  ProjectIconHistoryName = 1106,
  ProjectIconHistoryNodeLocale = 1107,
  ProjectIconHistorySpaceId = 1108,
  ProjectIconHistorySubName = 1109,
  ProjectIconHistoryUpdatedAt = 1110,
  ProjectIconId = 1111,
  ProjectIconInternalContent = 1112,
  ProjectIconInternalContentDigest = 1113,
  ProjectIconInternalDescription = 1114,
  ProjectIconInternalFieldOwners = 1115,
  ProjectIconInternalIgnoreType = 1116,
  ProjectIconInternalMediaType = 1117,
  ProjectIconInternalOwner = 1118,
  ProjectIconInternalType = 1119,
  ProjectIconName = 1120,
  ProjectIconNodeLocale = 1121,
  ProjectIconOss = 1122,
  ProjectIconOssChildren = 1123,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1124,
  ProjectIconOssContentfulId = 1125,
  ProjectIconOssCreatedAt = 1126,
  ProjectIconOssHref = 1127,
  ProjectIconOssId = 1128,
  ProjectIconOssName = 1129,
  ProjectIconOssNodeLocale = 1130,
  ProjectIconOssSpaceId = 1131,
  ProjectIconOssStartDate = 1132,
  ProjectIconOssSubName = 1133,
  ProjectIconOssTags = 1134,
  ProjectIconOssUpdatedAt = 1135,
  ProjectIconParentChildren = 1136,
  ProjectIconParentId = 1137,
  ProjectIconProject = 1138,
  ProjectIconProjectChildren = 1139,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1140,
  ProjectIconProjectContentfulId = 1141,
  ProjectIconProjectCreatedAt = 1142,
  ProjectIconProjectEndDate = 1143,
  ProjectIconProjectId = 1144,
  ProjectIconProjectName = 1145,
  ProjectIconProjectNodeLocale = 1146,
  ProjectIconProjectSpaceId = 1147,
  ProjectIconProjectStartDate = 1148,
  ProjectIconProjectSubName = 1149,
  ProjectIconProjectTags = 1150,
  ProjectIconProjectUpdatedAt = 1151,
  ProjectIconSpaceId = 1152,
  ProjectIconSvgChildren = 1153,
  ProjectIconSvgChildrenMdx = 1154,
  ProjectIconSvgId = 1155,
  ProjectIconSvgSvg = 1156,
  ProjectIconSysRevision = 1157,
  ProjectIconSysType = 1158,
  ProjectIconUpdatedAt = 1159,
  ProjectIconWhatICanDo = 1160,
  ProjectIconWhatICanDoChildren = 1161,
  ProjectIconWhatICanDoContentfulId = 1162,
  ProjectIconWhatICanDoCreatedAt = 1163,
  ProjectIconWhatICanDoId = 1164,
  ProjectIconWhatICanDoName = 1165,
  ProjectIconWhatICanDoNodeLocale = 1166,
  ProjectIconWhatICanDoSortKey = 1167,
  ProjectIconWhatICanDoSpaceId = 1168,
  ProjectIconWhatICanDoSubName = 1169,
  ProjectIconWhatICanDoUpdatedAt = 1170,
  ProjectId = 1171,
  ProjectInternalContent = 1172,
  ProjectInternalContentDigest = 1173,
  ProjectInternalDescription = 1174,
  ProjectInternalFieldOwners = 1175,
  ProjectInternalIgnoreType = 1176,
  ProjectInternalMediaType = 1177,
  ProjectInternalOwner = 1178,
  ProjectInternalType = 1179,
  ProjectName = 1180,
  ProjectNodeLocale = 1181,
  ProjectParentChildren = 1182,
  ProjectParentChildrenChildren = 1183,
  ProjectParentChildrenId = 1184,
  ProjectParentId = 1185,
  ProjectParentInternalContent = 1186,
  ProjectParentInternalContentDigest = 1187,
  ProjectParentInternalDescription = 1188,
  ProjectParentInternalFieldOwners = 1189,
  ProjectParentInternalIgnoreType = 1190,
  ProjectParentInternalMediaType = 1191,
  ProjectParentInternalOwner = 1192,
  ProjectParentInternalType = 1193,
  ProjectParentParentChildren = 1194,
  ProjectParentParentId = 1195,
  ProjectSpaceId = 1196,
  ProjectStartDate = 1197,
  ProjectSubName = 1198,
  ProjectSysRevision = 1199,
  ProjectSysType = 1200,
  ProjectTags = 1201,
  ProjectTagsBlogPost = 1202,
  ProjectTagsBlogPostChildren = 1203,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1204,
  ProjectTagsBlogPostContentfulId = 1205,
  ProjectTagsBlogPostCreated = 1206,
  ProjectTagsBlogPostCreatedAt = 1207,
  ProjectTagsBlogPostExcerpt = 1208,
  ProjectTagsBlogPostId = 1209,
  ProjectTagsBlogPostNodeLocale = 1210,
  ProjectTagsBlogPostSlug = 1211,
  ProjectTagsBlogPostSpaceId = 1212,
  ProjectTagsBlogPostTags = 1213,
  ProjectTagsBlogPostTitle = 1214,
  ProjectTagsBlogPostUpdated = 1215,
  ProjectTagsBlogPostUpdatedAt = 1216,
  ProjectTagsChildren = 1217,
  ProjectTagsChildrenChildren = 1218,
  ProjectTagsChildrenId = 1219,
  ProjectTagsContentfulId = 1220,
  ProjectTagsCreatedAt = 1221,
  ProjectTagsId = 1222,
  ProjectTagsInternalContent = 1223,
  ProjectTagsInternalContentDigest = 1224,
  ProjectTagsInternalDescription = 1225,
  ProjectTagsInternalFieldOwners = 1226,
  ProjectTagsInternalIgnoreType = 1227,
  ProjectTagsInternalMediaType = 1228,
  ProjectTagsInternalOwner = 1229,
  ProjectTagsInternalType = 1230,
  ProjectTagsLevel = 1231,
  ProjectTagsName = 1232,
  ProjectTagsNodeLocale = 1233,
  ProjectTagsOss = 1234,
  ProjectTagsOssChildren = 1235,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1236,
  ProjectTagsOssContentfulId = 1237,
  ProjectTagsOssCreatedAt = 1238,
  ProjectTagsOssHref = 1239,
  ProjectTagsOssId = 1240,
  ProjectTagsOssName = 1241,
  ProjectTagsOssNodeLocale = 1242,
  ProjectTagsOssSpaceId = 1243,
  ProjectTagsOssStartDate = 1244,
  ProjectTagsOssSubName = 1245,
  ProjectTagsOssTags = 1246,
  ProjectTagsOssUpdatedAt = 1247,
  ProjectTagsParentChildren = 1248,
  ProjectTagsParentId = 1249,
  ProjectTagsProject = 1250,
  ProjectTagsProjectChildren = 1251,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1252,
  ProjectTagsProjectContentfulId = 1253,
  ProjectTagsProjectCreatedAt = 1254,
  ProjectTagsProjectEndDate = 1255,
  ProjectTagsProjectId = 1256,
  ProjectTagsProjectName = 1257,
  ProjectTagsProjectNodeLocale = 1258,
  ProjectTagsProjectSpaceId = 1259,
  ProjectTagsProjectStartDate = 1260,
  ProjectTagsProjectSubName = 1261,
  ProjectTagsProjectTags = 1262,
  ProjectTagsProjectUpdatedAt = 1263,
  ProjectTagsSkillMap = 1264,
  ProjectTagsSkillMapChildren = 1265,
  ProjectTagsSkillMapContentfulId = 1266,
  ProjectTagsSkillMapCreatedAt = 1267,
  ProjectTagsSkillMapExpanded = 1268,
  ProjectTagsSkillMapId = 1269,
  ProjectTagsSkillMapName = 1270,
  ProjectTagsSkillMapNodeLocale = 1271,
  ProjectTagsSkillMapSkills = 1272,
  ProjectTagsSkillMapSortKey = 1273,
  ProjectTagsSkillMapSpaceId = 1274,
  ProjectTagsSkillMapUpdatedAt = 1275,
  ProjectTagsSpaceId = 1276,
  ProjectTagsSysRevision = 1277,
  ProjectTagsSysType = 1278,
  ProjectTagsUpdatedAt = 1279,
  ProjectUpdatedAt = 1280,
  SkillMap = 1281,
  SkillMapChildren = 1282,
  SkillMapChildrenChildren = 1283,
  SkillMapChildrenChildrenChildren = 1284,
  SkillMapChildrenChildrenId = 1285,
  SkillMapChildrenId = 1286,
  SkillMapChildrenInternalContent = 1287,
  SkillMapChildrenInternalContentDigest = 1288,
  SkillMapChildrenInternalDescription = 1289,
  SkillMapChildrenInternalFieldOwners = 1290,
  SkillMapChildrenInternalIgnoreType = 1291,
  SkillMapChildrenInternalMediaType = 1292,
  SkillMapChildrenInternalOwner = 1293,
  SkillMapChildrenInternalType = 1294,
  SkillMapChildrenParentChildren = 1295,
  SkillMapChildrenParentId = 1296,
  SkillMapContentfulId = 1297,
  SkillMapCreatedAt = 1298,
  SkillMapExpanded = 1299,
  SkillMapId = 1300,
  SkillMapInternalContent = 1301,
  SkillMapInternalContentDigest = 1302,
  SkillMapInternalDescription = 1303,
  SkillMapInternalFieldOwners = 1304,
  SkillMapInternalIgnoreType = 1305,
  SkillMapInternalMediaType = 1306,
  SkillMapInternalOwner = 1307,
  SkillMapInternalType = 1308,
  SkillMapName = 1309,
  SkillMapNodeLocale = 1310,
  SkillMapParentChildren = 1311,
  SkillMapParentChildrenChildren = 1312,
  SkillMapParentChildrenId = 1313,
  SkillMapParentId = 1314,
  SkillMapParentInternalContent = 1315,
  SkillMapParentInternalContentDigest = 1316,
  SkillMapParentInternalDescription = 1317,
  SkillMapParentInternalFieldOwners = 1318,
  SkillMapParentInternalIgnoreType = 1319,
  SkillMapParentInternalMediaType = 1320,
  SkillMapParentInternalOwner = 1321,
  SkillMapParentInternalType = 1322,
  SkillMapParentParentChildren = 1323,
  SkillMapParentParentId = 1324,
  SkillMapSkills = 1325,
  SkillMapSkillsBlogPost = 1326,
  SkillMapSkillsBlogPostChildren = 1327,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1328,
  SkillMapSkillsBlogPostContentfulId = 1329,
  SkillMapSkillsBlogPostCreated = 1330,
  SkillMapSkillsBlogPostCreatedAt = 1331,
  SkillMapSkillsBlogPostExcerpt = 1332,
  SkillMapSkillsBlogPostId = 1333,
  SkillMapSkillsBlogPostNodeLocale = 1334,
  SkillMapSkillsBlogPostSlug = 1335,
  SkillMapSkillsBlogPostSpaceId = 1336,
  SkillMapSkillsBlogPostTags = 1337,
  SkillMapSkillsBlogPostTitle = 1338,
  SkillMapSkillsBlogPostUpdated = 1339,
  SkillMapSkillsBlogPostUpdatedAt = 1340,
  SkillMapSkillsChildren = 1341,
  SkillMapSkillsChildrenChildren = 1342,
  SkillMapSkillsChildrenId = 1343,
  SkillMapSkillsContentfulId = 1344,
  SkillMapSkillsCreatedAt = 1345,
  SkillMapSkillsId = 1346,
  SkillMapSkillsInternalContent = 1347,
  SkillMapSkillsInternalContentDigest = 1348,
  SkillMapSkillsInternalDescription = 1349,
  SkillMapSkillsInternalFieldOwners = 1350,
  SkillMapSkillsInternalIgnoreType = 1351,
  SkillMapSkillsInternalMediaType = 1352,
  SkillMapSkillsInternalOwner = 1353,
  SkillMapSkillsInternalType = 1354,
  SkillMapSkillsLevel = 1355,
  SkillMapSkillsName = 1356,
  SkillMapSkillsNodeLocale = 1357,
  SkillMapSkillsOss = 1358,
  SkillMapSkillsOssChildren = 1359,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 1360,
  SkillMapSkillsOssContentfulId = 1361,
  SkillMapSkillsOssCreatedAt = 1362,
  SkillMapSkillsOssHref = 1363,
  SkillMapSkillsOssId = 1364,
  SkillMapSkillsOssName = 1365,
  SkillMapSkillsOssNodeLocale = 1366,
  SkillMapSkillsOssSpaceId = 1367,
  SkillMapSkillsOssStartDate = 1368,
  SkillMapSkillsOssSubName = 1369,
  SkillMapSkillsOssTags = 1370,
  SkillMapSkillsOssUpdatedAt = 1371,
  SkillMapSkillsParentChildren = 1372,
  SkillMapSkillsParentId = 1373,
  SkillMapSkillsProject = 1374,
  SkillMapSkillsProjectChildren = 1375,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 1376,
  SkillMapSkillsProjectContentfulId = 1377,
  SkillMapSkillsProjectCreatedAt = 1378,
  SkillMapSkillsProjectEndDate = 1379,
  SkillMapSkillsProjectId = 1380,
  SkillMapSkillsProjectName = 1381,
  SkillMapSkillsProjectNodeLocale = 1382,
  SkillMapSkillsProjectSpaceId = 1383,
  SkillMapSkillsProjectStartDate = 1384,
  SkillMapSkillsProjectSubName = 1385,
  SkillMapSkillsProjectTags = 1386,
  SkillMapSkillsProjectUpdatedAt = 1387,
  SkillMapSkillsSkillMap = 1388,
  SkillMapSkillsSkillMapChildren = 1389,
  SkillMapSkillsSkillMapContentfulId = 1390,
  SkillMapSkillsSkillMapCreatedAt = 1391,
  SkillMapSkillsSkillMapExpanded = 1392,
  SkillMapSkillsSkillMapId = 1393,
  SkillMapSkillsSkillMapName = 1394,
  SkillMapSkillsSkillMapNodeLocale = 1395,
  SkillMapSkillsSkillMapSkills = 1396,
  SkillMapSkillsSkillMapSortKey = 1397,
  SkillMapSkillsSkillMapSpaceId = 1398,
  SkillMapSkillsSkillMapUpdatedAt = 1399,
  SkillMapSkillsSpaceId = 1400,
  SkillMapSkillsSysRevision = 1401,
  SkillMapSkillsSysType = 1402,
  SkillMapSkillsUpdatedAt = 1403,
  SkillMapSortKey = 1404,
  SkillMapSpaceId = 1405,
  SkillMapSysRevision = 1406,
  SkillMapSysType = 1407,
  SkillMapUpdatedAt = 1408,
  SpaceId = 1409,
  SysContentTypeSysId = 1410,
  SysContentTypeSysLinkType = 1411,
  SysContentTypeSysType = 1412,
  SysRevision = 1413,
  SysType = 1414,
  UpdatedAt = 1415
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
  category: InputMaybe<ContentfulTagFilterInput>;
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
  thumbnail: InputMaybe<ContentfulAssetFilterInput>;
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
    )>, category: Maybe<Pick<ContentfulTag, 'name'>>, tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>>, thumbnail: Maybe<(
      Pick<ContentfulAsset, 'title'>
      & { file: Maybe<Pick<ContentfulAssetFile, 'url'>>, localFile: Maybe<Pick<File, 'publicURL'>> }
    )> }
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
          & { createdDate: ContentfulBlogPost['created'], updatedDate: ContentfulBlogPost['updated'] }
          & { content: Maybe<Pick<ContentfulBlogPostContentTextNode, 'content'>>, tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>>, category: Maybe<Pick<ContentfulTag, 'name'>>, thumbnail: Maybe<(
            Pick<ContentfulAsset, 'title'>
            & { file: Maybe<Pick<ContentfulAssetFile, 'url'>>, localFile: Maybe<{ childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
          )> }
        ) }> }> }, postsLite: { edges: Array<{ node: (
        Pick<ContentfulBlogPost, 'title' | 'slug' | 'created'>
        & { thumbnail: Maybe<{ localFile: Maybe<Pick<File, 'publicURL'>> }> }
      ) }> }, locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, icon: Maybe<(
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
