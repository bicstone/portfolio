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

export type ContentfulAsset = ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  description: Maybe<Scalars['String']>;
  fields: Maybe<ContentfulAssetFields>;
  file: Maybe<ContentfulAssetFile>;
  gatsbyImageData: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  internal: Internal;
  localFile: Maybe<File>;
  node_locale: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  spaceId: Maybe<Scalars['String']>;
  svg: Maybe<InlineSvg>;
  sys: Maybe<ContentfulAssetSys>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulAssetCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
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
  GatsbyImageData = 49,
  Id = 50,
  InternalContent = 51,
  InternalContentDigest = 52,
  InternalDescription = 53,
  InternalFieldOwners = 54,
  InternalIgnoreType = 55,
  InternalMediaType = 56,
  InternalOwner = 57,
  InternalType = 58,
  LocalFileAbsolutePath = 59,
  LocalFileAccessTime = 60,
  LocalFileAtime = 61,
  LocalFileAtimeMs = 62,
  LocalFileBase = 63,
  LocalFileBirthTime = 64,
  LocalFileBirthtime = 65,
  LocalFileBirthtimeMs = 66,
  LocalFileBlksize = 67,
  LocalFileBlocks = 68,
  LocalFileChangeTime = 69,
  LocalFileChildImageSharpChildren = 70,
  LocalFileChildImageSharpChildrenChildren = 71,
  LocalFileChildImageSharpChildrenId = 72,
  LocalFileChildImageSharpFixedAspectRatio = 73,
  LocalFileChildImageSharpFixedBase64 = 74,
  LocalFileChildImageSharpFixedHeight = 75,
  LocalFileChildImageSharpFixedOriginalName = 76,
  LocalFileChildImageSharpFixedSrc = 77,
  LocalFileChildImageSharpFixedSrcSet = 78,
  LocalFileChildImageSharpFixedSrcSetWebp = 79,
  LocalFileChildImageSharpFixedSrcWebp = 80,
  LocalFileChildImageSharpFixedTracedSvg = 81,
  LocalFileChildImageSharpFixedWidth = 82,
  LocalFileChildImageSharpFluidAspectRatio = 83,
  LocalFileChildImageSharpFluidBase64 = 84,
  LocalFileChildImageSharpFluidOriginalImg = 85,
  LocalFileChildImageSharpFluidOriginalName = 86,
  LocalFileChildImageSharpFluidPresentationHeight = 87,
  LocalFileChildImageSharpFluidPresentationWidth = 88,
  LocalFileChildImageSharpFluidSizes = 89,
  LocalFileChildImageSharpFluidSrc = 90,
  LocalFileChildImageSharpFluidSrcSet = 91,
  LocalFileChildImageSharpFluidSrcSetWebp = 92,
  LocalFileChildImageSharpFluidSrcWebp = 93,
  LocalFileChildImageSharpFluidTracedSvg = 94,
  LocalFileChildImageSharpGatsbyImageData = 95,
  LocalFileChildImageSharpId = 96,
  LocalFileChildImageSharpInternalContent = 97,
  LocalFileChildImageSharpInternalContentDigest = 98,
  LocalFileChildImageSharpInternalDescription = 99,
  LocalFileChildImageSharpInternalFieldOwners = 100,
  LocalFileChildImageSharpInternalIgnoreType = 101,
  LocalFileChildImageSharpInternalMediaType = 102,
  LocalFileChildImageSharpInternalOwner = 103,
  LocalFileChildImageSharpInternalType = 104,
  LocalFileChildImageSharpOriginalHeight = 105,
  LocalFileChildImageSharpOriginalSrc = 106,
  LocalFileChildImageSharpOriginalWidth = 107,
  LocalFileChildImageSharpParentChildren = 108,
  LocalFileChildImageSharpParentId = 109,
  LocalFileChildImageSharpResizeAspectRatio = 110,
  LocalFileChildImageSharpResizeHeight = 111,
  LocalFileChildImageSharpResizeOriginalName = 112,
  LocalFileChildImageSharpResizeSrc = 113,
  LocalFileChildImageSharpResizeTracedSvg = 114,
  LocalFileChildImageSharpResizeWidth = 115,
  LocalFileChildLocaleChildren = 116,
  LocalFileChildLocaleChildrenChildren = 117,
  LocalFileChildLocaleChildrenId = 118,
  LocalFileChildLocaleData = 119,
  LocalFileChildLocaleFileAbsolutePath = 120,
  LocalFileChildLocaleId = 121,
  LocalFileChildLocaleInternalContent = 122,
  LocalFileChildLocaleInternalContentDigest = 123,
  LocalFileChildLocaleInternalDescription = 124,
  LocalFileChildLocaleInternalFieldOwners = 125,
  LocalFileChildLocaleInternalIgnoreType = 126,
  LocalFileChildLocaleInternalMediaType = 127,
  LocalFileChildLocaleInternalOwner = 128,
  LocalFileChildLocaleInternalType = 129,
  LocalFileChildLocaleLanguage = 130,
  LocalFileChildLocaleNs = 131,
  LocalFileChildLocaleParentChildren = 132,
  LocalFileChildLocaleParentId = 133,
  LocalFileChildren = 134,
  LocalFileChildrenImageSharp = 135,
  LocalFileChildrenImageSharpChildren = 136,
  LocalFileChildrenImageSharpChildrenChildren = 137,
  LocalFileChildrenImageSharpChildrenId = 138,
  LocalFileChildrenImageSharpFixedAspectRatio = 139,
  LocalFileChildrenImageSharpFixedBase64 = 140,
  LocalFileChildrenImageSharpFixedHeight = 141,
  LocalFileChildrenImageSharpFixedOriginalName = 142,
  LocalFileChildrenImageSharpFixedSrc = 143,
  LocalFileChildrenImageSharpFixedSrcSet = 144,
  LocalFileChildrenImageSharpFixedSrcSetWebp = 145,
  LocalFileChildrenImageSharpFixedSrcWebp = 146,
  LocalFileChildrenImageSharpFixedTracedSvg = 147,
  LocalFileChildrenImageSharpFixedWidth = 148,
  LocalFileChildrenImageSharpFluidAspectRatio = 149,
  LocalFileChildrenImageSharpFluidBase64 = 150,
  LocalFileChildrenImageSharpFluidOriginalImg = 151,
  LocalFileChildrenImageSharpFluidOriginalName = 152,
  LocalFileChildrenImageSharpFluidPresentationHeight = 153,
  LocalFileChildrenImageSharpFluidPresentationWidth = 154,
  LocalFileChildrenImageSharpFluidSizes = 155,
  LocalFileChildrenImageSharpFluidSrc = 156,
  LocalFileChildrenImageSharpFluidSrcSet = 157,
  LocalFileChildrenImageSharpFluidSrcSetWebp = 158,
  LocalFileChildrenImageSharpFluidSrcWebp = 159,
  LocalFileChildrenImageSharpFluidTracedSvg = 160,
  LocalFileChildrenImageSharpGatsbyImageData = 161,
  LocalFileChildrenImageSharpId = 162,
  LocalFileChildrenImageSharpInternalContent = 163,
  LocalFileChildrenImageSharpInternalContentDigest = 164,
  LocalFileChildrenImageSharpInternalDescription = 165,
  LocalFileChildrenImageSharpInternalFieldOwners = 166,
  LocalFileChildrenImageSharpInternalIgnoreType = 167,
  LocalFileChildrenImageSharpInternalMediaType = 168,
  LocalFileChildrenImageSharpInternalOwner = 169,
  LocalFileChildrenImageSharpInternalType = 170,
  LocalFileChildrenImageSharpOriginalHeight = 171,
  LocalFileChildrenImageSharpOriginalSrc = 172,
  LocalFileChildrenImageSharpOriginalWidth = 173,
  LocalFileChildrenImageSharpParentChildren = 174,
  LocalFileChildrenImageSharpParentId = 175,
  LocalFileChildrenImageSharpResizeAspectRatio = 176,
  LocalFileChildrenImageSharpResizeHeight = 177,
  LocalFileChildrenImageSharpResizeOriginalName = 178,
  LocalFileChildrenImageSharpResizeSrc = 179,
  LocalFileChildrenImageSharpResizeTracedSvg = 180,
  LocalFileChildrenImageSharpResizeWidth = 181,
  LocalFileChildrenLocale = 182,
  LocalFileChildrenLocaleChildren = 183,
  LocalFileChildrenLocaleChildrenChildren = 184,
  LocalFileChildrenLocaleChildrenId = 185,
  LocalFileChildrenLocaleData = 186,
  LocalFileChildrenLocaleFileAbsolutePath = 187,
  LocalFileChildrenLocaleId = 188,
  LocalFileChildrenLocaleInternalContent = 189,
  LocalFileChildrenLocaleInternalContentDigest = 190,
  LocalFileChildrenLocaleInternalDescription = 191,
  LocalFileChildrenLocaleInternalFieldOwners = 192,
  LocalFileChildrenLocaleInternalIgnoreType = 193,
  LocalFileChildrenLocaleInternalMediaType = 194,
  LocalFileChildrenLocaleInternalOwner = 195,
  LocalFileChildrenLocaleInternalType = 196,
  LocalFileChildrenLocaleLanguage = 197,
  LocalFileChildrenLocaleNs = 198,
  LocalFileChildrenLocaleParentChildren = 199,
  LocalFileChildrenLocaleParentId = 200,
  LocalFileChildrenChildren = 201,
  LocalFileChildrenChildrenChildren = 202,
  LocalFileChildrenChildrenId = 203,
  LocalFileChildrenId = 204,
  LocalFileChildrenInternalContent = 205,
  LocalFileChildrenInternalContentDigest = 206,
  LocalFileChildrenInternalDescription = 207,
  LocalFileChildrenInternalFieldOwners = 208,
  LocalFileChildrenInternalIgnoreType = 209,
  LocalFileChildrenInternalMediaType = 210,
  LocalFileChildrenInternalOwner = 211,
  LocalFileChildrenInternalType = 212,
  LocalFileChildrenParentChildren = 213,
  LocalFileChildrenParentId = 214,
  LocalFileCtime = 215,
  LocalFileCtimeMs = 216,
  LocalFileDev = 217,
  LocalFileDir = 218,
  LocalFileExt = 219,
  LocalFileExtension = 220,
  LocalFileGid = 221,
  LocalFileId = 222,
  LocalFileIno = 223,
  LocalFileInternalContent = 224,
  LocalFileInternalContentDigest = 225,
  LocalFileInternalDescription = 226,
  LocalFileInternalFieldOwners = 227,
  LocalFileInternalIgnoreType = 228,
  LocalFileInternalMediaType = 229,
  LocalFileInternalOwner = 230,
  LocalFileInternalType = 231,
  LocalFileMode = 232,
  LocalFileModifiedTime = 233,
  LocalFileMtime = 234,
  LocalFileMtimeMs = 235,
  LocalFileName = 236,
  LocalFileNlink = 237,
  LocalFileParentChildren = 238,
  LocalFileParentChildrenChildren = 239,
  LocalFileParentChildrenId = 240,
  LocalFileParentId = 241,
  LocalFileParentInternalContent = 242,
  LocalFileParentInternalContentDigest = 243,
  LocalFileParentInternalDescription = 244,
  LocalFileParentInternalFieldOwners = 245,
  LocalFileParentInternalIgnoreType = 246,
  LocalFileParentInternalMediaType = 247,
  LocalFileParentInternalOwner = 248,
  LocalFileParentInternalType = 249,
  LocalFileParentParentChildren = 250,
  LocalFileParentParentId = 251,
  LocalFilePrettySize = 252,
  LocalFilePublicUrl = 253,
  LocalFileRdev = 254,
  LocalFileRelativeDirectory = 255,
  LocalFileRelativePath = 256,
  LocalFileRoot = 257,
  LocalFileSize = 258,
  LocalFileSourceInstanceName = 259,
  LocalFileUid = 260,
  LocalFileUrl = 261,
  NodeLocale = 262,
  ParentChildren = 263,
  ParentChildrenChildren = 264,
  ParentChildrenChildrenChildren = 265,
  ParentChildrenChildrenId = 266,
  ParentChildrenId = 267,
  ParentChildrenInternalContent = 268,
  ParentChildrenInternalContentDigest = 269,
  ParentChildrenInternalDescription = 270,
  ParentChildrenInternalFieldOwners = 271,
  ParentChildrenInternalIgnoreType = 272,
  ParentChildrenInternalMediaType = 273,
  ParentChildrenInternalOwner = 274,
  ParentChildrenInternalType = 275,
  ParentChildrenParentChildren = 276,
  ParentChildrenParentId = 277,
  ParentId = 278,
  ParentInternalContent = 279,
  ParentInternalContentDigest = 280,
  ParentInternalDescription = 281,
  ParentInternalFieldOwners = 282,
  ParentInternalIgnoreType = 283,
  ParentInternalMediaType = 284,
  ParentInternalOwner = 285,
  ParentInternalType = 286,
  ParentParentChildren = 287,
  ParentParentChildrenChildren = 288,
  ParentParentChildrenId = 289,
  ParentParentId = 290,
  ParentParentInternalContent = 291,
  ParentParentInternalContentDigest = 292,
  ParentParentInternalDescription = 293,
  ParentParentInternalFieldOwners = 294,
  ParentParentInternalIgnoreType = 295,
  ParentParentInternalMediaType = 296,
  ParentParentInternalOwner = 297,
  ParentParentInternalType = 298,
  ParentParentParentChildren = 299,
  ParentParentParentId = 300,
  SpaceId = 301,
  SysRevision = 302,
  SysType = 303,
  Title = 304,
  UpdatedAt = 305
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
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  localFile: InputMaybe<FileFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulAssetSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
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
  TagsOssImageGatsbyImageData = 525,
  TagsOssImageId = 526,
  TagsOssImageNodeLocale = 527,
  TagsOssImageSpaceId = 528,
  TagsOssImageTitle = 529,
  TagsOssImageUpdatedAt = 530,
  TagsOssInternalContent = 531,
  TagsOssInternalContentDigest = 532,
  TagsOssInternalDescription = 533,
  TagsOssInternalFieldOwners = 534,
  TagsOssInternalIgnoreType = 535,
  TagsOssInternalMediaType = 536,
  TagsOssInternalOwner = 537,
  TagsOssInternalType = 538,
  TagsOssName = 539,
  TagsOssNodeLocale = 540,
  TagsOssParentChildren = 541,
  TagsOssParentId = 542,
  TagsOssSpaceId = 543,
  TagsOssStartDate = 544,
  TagsOssSubName = 545,
  TagsOssSysRevision = 546,
  TagsOssSysType = 547,
  TagsOssTags = 548,
  TagsOssTagsBlogPost = 549,
  TagsOssTagsChildren = 550,
  TagsOssTagsContentfulId = 551,
  TagsOssTagsCreatedAt = 552,
  TagsOssTagsId = 553,
  TagsOssTagsLevel = 554,
  TagsOssTagsName = 555,
  TagsOssTagsNodeLocale = 556,
  TagsOssTagsOss = 557,
  TagsOssTagsProject = 558,
  TagsOssTagsSkillMap = 559,
  TagsOssTagsSpaceId = 560,
  TagsOssTagsUpdatedAt = 561,
  TagsOssUpdatedAt = 562,
  TagsParentChildren = 563,
  TagsParentChildrenChildren = 564,
  TagsParentChildrenId = 565,
  TagsParentId = 566,
  TagsParentInternalContent = 567,
  TagsParentInternalContentDigest = 568,
  TagsParentInternalDescription = 569,
  TagsParentInternalFieldOwners = 570,
  TagsParentInternalIgnoreType = 571,
  TagsParentInternalMediaType = 572,
  TagsParentInternalOwner = 573,
  TagsParentInternalType = 574,
  TagsParentParentChildren = 575,
  TagsParentParentId = 576,
  TagsProject = 577,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 578,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 579,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 580,
  TagsProjectChildContentfulProjectDetailTextNodeId = 581,
  TagsProjectChildren = 582,
  TagsProjectChildrenContentfulProjectDetailTextNode = 583,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 584,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 585,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 586,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 587,
  TagsProjectChildrenChildren = 588,
  TagsProjectChildrenId = 589,
  TagsProjectContentfulId = 590,
  TagsProjectCreatedAt = 591,
  TagsProjectDetailChildren = 592,
  TagsProjectDetailChildrenMdx = 593,
  TagsProjectDetailDetail = 594,
  TagsProjectDetailId = 595,
  TagsProjectEndDate = 596,
  TagsProjectIconChildren = 597,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 598,
  TagsProjectIconContact = 599,
  TagsProjectIconContentfulId = 600,
  TagsProjectIconCreatedAt = 601,
  TagsProjectIconHistory = 602,
  TagsProjectIconId = 603,
  TagsProjectIconName = 604,
  TagsProjectIconNodeLocale = 605,
  TagsProjectIconOss = 606,
  TagsProjectIconProject = 607,
  TagsProjectIconSpaceId = 608,
  TagsProjectIconUpdatedAt = 609,
  TagsProjectIconWhatICanDo = 610,
  TagsProjectId = 611,
  TagsProjectInternalContent = 612,
  TagsProjectInternalContentDigest = 613,
  TagsProjectInternalDescription = 614,
  TagsProjectInternalFieldOwners = 615,
  TagsProjectInternalIgnoreType = 616,
  TagsProjectInternalMediaType = 617,
  TagsProjectInternalOwner = 618,
  TagsProjectInternalType = 619,
  TagsProjectName = 620,
  TagsProjectNodeLocale = 621,
  TagsProjectParentChildren = 622,
  TagsProjectParentId = 623,
  TagsProjectSpaceId = 624,
  TagsProjectStartDate = 625,
  TagsProjectSubName = 626,
  TagsProjectSysRevision = 627,
  TagsProjectSysType = 628,
  TagsProjectTags = 629,
  TagsProjectTagsBlogPost = 630,
  TagsProjectTagsChildren = 631,
  TagsProjectTagsContentfulId = 632,
  TagsProjectTagsCreatedAt = 633,
  TagsProjectTagsId = 634,
  TagsProjectTagsLevel = 635,
  TagsProjectTagsName = 636,
  TagsProjectTagsNodeLocale = 637,
  TagsProjectTagsOss = 638,
  TagsProjectTagsProject = 639,
  TagsProjectTagsSkillMap = 640,
  TagsProjectTagsSpaceId = 641,
  TagsProjectTagsUpdatedAt = 642,
  TagsProjectUpdatedAt = 643,
  TagsSkillMap = 644,
  TagsSkillMapChildren = 645,
  TagsSkillMapChildrenChildren = 646,
  TagsSkillMapChildrenId = 647,
  TagsSkillMapContentfulId = 648,
  TagsSkillMapCreatedAt = 649,
  TagsSkillMapExpanded = 650,
  TagsSkillMapId = 651,
  TagsSkillMapInternalContent = 652,
  TagsSkillMapInternalContentDigest = 653,
  TagsSkillMapInternalDescription = 654,
  TagsSkillMapInternalFieldOwners = 655,
  TagsSkillMapInternalIgnoreType = 656,
  TagsSkillMapInternalMediaType = 657,
  TagsSkillMapInternalOwner = 658,
  TagsSkillMapInternalType = 659,
  TagsSkillMapName = 660,
  TagsSkillMapNodeLocale = 661,
  TagsSkillMapParentChildren = 662,
  TagsSkillMapParentId = 663,
  TagsSkillMapSkills = 664,
  TagsSkillMapSkillsBlogPost = 665,
  TagsSkillMapSkillsChildren = 666,
  TagsSkillMapSkillsContentfulId = 667,
  TagsSkillMapSkillsCreatedAt = 668,
  TagsSkillMapSkillsId = 669,
  TagsSkillMapSkillsLevel = 670,
  TagsSkillMapSkillsName = 671,
  TagsSkillMapSkillsNodeLocale = 672,
  TagsSkillMapSkillsOss = 673,
  TagsSkillMapSkillsProject = 674,
  TagsSkillMapSkillsSkillMap = 675,
  TagsSkillMapSkillsSpaceId = 676,
  TagsSkillMapSkillsUpdatedAt = 677,
  TagsSkillMapSortKey = 678,
  TagsSkillMapSpaceId = 679,
  TagsSkillMapSysRevision = 680,
  TagsSkillMapSysType = 681,
  TagsSkillMapUpdatedAt = 682,
  TagsSpaceId = 683,
  TagsSysRevision = 684,
  TagsSysType = 685,
  TagsUpdatedAt = 686,
  Title = 687,
  Updated = 688,
  UpdatedAt = 689
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
  IconSvgDarkGatsbyImageData = 65,
  IconSvgDarkId = 66,
  IconSvgDarkInternalContent = 67,
  IconSvgDarkInternalContentDigest = 68,
  IconSvgDarkInternalDescription = 69,
  IconSvgDarkInternalFieldOwners = 70,
  IconSvgDarkInternalIgnoreType = 71,
  IconSvgDarkInternalMediaType = 72,
  IconSvgDarkInternalOwner = 73,
  IconSvgDarkInternalType = 74,
  IconSvgDarkLocalFileAbsolutePath = 75,
  IconSvgDarkLocalFileAccessTime = 76,
  IconSvgDarkLocalFileAtime = 77,
  IconSvgDarkLocalFileAtimeMs = 78,
  IconSvgDarkLocalFileBase = 79,
  IconSvgDarkLocalFileBirthTime = 80,
  IconSvgDarkLocalFileBirthtime = 81,
  IconSvgDarkLocalFileBirthtimeMs = 82,
  IconSvgDarkLocalFileBlksize = 83,
  IconSvgDarkLocalFileBlocks = 84,
  IconSvgDarkLocalFileChangeTime = 85,
  IconSvgDarkLocalFileChildImageSharpChildren = 86,
  IconSvgDarkLocalFileChildImageSharpGatsbyImageData = 87,
  IconSvgDarkLocalFileChildImageSharpId = 88,
  IconSvgDarkLocalFileChildLocaleChildren = 89,
  IconSvgDarkLocalFileChildLocaleData = 90,
  IconSvgDarkLocalFileChildLocaleFileAbsolutePath = 91,
  IconSvgDarkLocalFileChildLocaleId = 92,
  IconSvgDarkLocalFileChildLocaleLanguage = 93,
  IconSvgDarkLocalFileChildLocaleNs = 94,
  IconSvgDarkLocalFileChildren = 95,
  IconSvgDarkLocalFileChildrenImageSharp = 96,
  IconSvgDarkLocalFileChildrenImageSharpChildren = 97,
  IconSvgDarkLocalFileChildrenImageSharpGatsbyImageData = 98,
  IconSvgDarkLocalFileChildrenImageSharpId = 99,
  IconSvgDarkLocalFileChildrenLocale = 100,
  IconSvgDarkLocalFileChildrenLocaleChildren = 101,
  IconSvgDarkLocalFileChildrenLocaleData = 102,
  IconSvgDarkLocalFileChildrenLocaleFileAbsolutePath = 103,
  IconSvgDarkLocalFileChildrenLocaleId = 104,
  IconSvgDarkLocalFileChildrenLocaleLanguage = 105,
  IconSvgDarkLocalFileChildrenLocaleNs = 106,
  IconSvgDarkLocalFileChildrenChildren = 107,
  IconSvgDarkLocalFileChildrenId = 108,
  IconSvgDarkLocalFileCtime = 109,
  IconSvgDarkLocalFileCtimeMs = 110,
  IconSvgDarkLocalFileDev = 111,
  IconSvgDarkLocalFileDir = 112,
  IconSvgDarkLocalFileExt = 113,
  IconSvgDarkLocalFileExtension = 114,
  IconSvgDarkLocalFileGid = 115,
  IconSvgDarkLocalFileId = 116,
  IconSvgDarkLocalFileIno = 117,
  IconSvgDarkLocalFileInternalContent = 118,
  IconSvgDarkLocalFileInternalContentDigest = 119,
  IconSvgDarkLocalFileInternalDescription = 120,
  IconSvgDarkLocalFileInternalFieldOwners = 121,
  IconSvgDarkLocalFileInternalIgnoreType = 122,
  IconSvgDarkLocalFileInternalMediaType = 123,
  IconSvgDarkLocalFileInternalOwner = 124,
  IconSvgDarkLocalFileInternalType = 125,
  IconSvgDarkLocalFileMode = 126,
  IconSvgDarkLocalFileModifiedTime = 127,
  IconSvgDarkLocalFileMtime = 128,
  IconSvgDarkLocalFileMtimeMs = 129,
  IconSvgDarkLocalFileName = 130,
  IconSvgDarkLocalFileNlink = 131,
  IconSvgDarkLocalFileParentChildren = 132,
  IconSvgDarkLocalFileParentId = 133,
  IconSvgDarkLocalFilePrettySize = 134,
  IconSvgDarkLocalFilePublicUrl = 135,
  IconSvgDarkLocalFileRdev = 136,
  IconSvgDarkLocalFileRelativeDirectory = 137,
  IconSvgDarkLocalFileRelativePath = 138,
  IconSvgDarkLocalFileRoot = 139,
  IconSvgDarkLocalFileSize = 140,
  IconSvgDarkLocalFileSourceInstanceName = 141,
  IconSvgDarkLocalFileUid = 142,
  IconSvgDarkLocalFileUrl = 143,
  IconSvgDarkNodeLocale = 144,
  IconSvgDarkParentChildren = 145,
  IconSvgDarkParentChildrenChildren = 146,
  IconSvgDarkParentChildrenId = 147,
  IconSvgDarkParentId = 148,
  IconSvgDarkParentInternalContent = 149,
  IconSvgDarkParentInternalContentDigest = 150,
  IconSvgDarkParentInternalDescription = 151,
  IconSvgDarkParentInternalFieldOwners = 152,
  IconSvgDarkParentInternalIgnoreType = 153,
  IconSvgDarkParentInternalMediaType = 154,
  IconSvgDarkParentInternalOwner = 155,
  IconSvgDarkParentInternalType = 156,
  IconSvgDarkParentParentChildren = 157,
  IconSvgDarkParentParentId = 158,
  IconSvgDarkSpaceId = 159,
  IconSvgDarkSysRevision = 160,
  IconSvgDarkSysType = 161,
  IconSvgDarkTitle = 162,
  IconSvgDarkUpdatedAt = 163,
  IconSvgLightChildren = 164,
  IconSvgLightChildrenChildren = 165,
  IconSvgLightChildrenChildrenChildren = 166,
  IconSvgLightChildrenChildrenId = 167,
  IconSvgLightChildrenId = 168,
  IconSvgLightChildrenInternalContent = 169,
  IconSvgLightChildrenInternalContentDigest = 170,
  IconSvgLightChildrenInternalDescription = 171,
  IconSvgLightChildrenInternalFieldOwners = 172,
  IconSvgLightChildrenInternalIgnoreType = 173,
  IconSvgLightChildrenInternalMediaType = 174,
  IconSvgLightChildrenInternalOwner = 175,
  IconSvgLightChildrenInternalType = 176,
  IconSvgLightChildrenParentChildren = 177,
  IconSvgLightChildrenParentId = 178,
  IconSvgLightContentfulId = 179,
  IconSvgLightCreatedAt = 180,
  IconSvgLightDescription = 181,
  IconSvgLightFieldsLocalFile = 182,
  IconSvgLightFileContentType = 183,
  IconSvgLightFileDetailsSize = 184,
  IconSvgLightFileFileName = 185,
  IconSvgLightFileUrl = 186,
  IconSvgLightGatsbyImageData = 187,
  IconSvgLightId = 188,
  IconSvgLightInternalContent = 189,
  IconSvgLightInternalContentDigest = 190,
  IconSvgLightInternalDescription = 191,
  IconSvgLightInternalFieldOwners = 192,
  IconSvgLightInternalIgnoreType = 193,
  IconSvgLightInternalMediaType = 194,
  IconSvgLightInternalOwner = 195,
  IconSvgLightInternalType = 196,
  IconSvgLightLocalFileAbsolutePath = 197,
  IconSvgLightLocalFileAccessTime = 198,
  IconSvgLightLocalFileAtime = 199,
  IconSvgLightLocalFileAtimeMs = 200,
  IconSvgLightLocalFileBase = 201,
  IconSvgLightLocalFileBirthTime = 202,
  IconSvgLightLocalFileBirthtime = 203,
  IconSvgLightLocalFileBirthtimeMs = 204,
  IconSvgLightLocalFileBlksize = 205,
  IconSvgLightLocalFileBlocks = 206,
  IconSvgLightLocalFileChangeTime = 207,
  IconSvgLightLocalFileChildImageSharpChildren = 208,
  IconSvgLightLocalFileChildImageSharpGatsbyImageData = 209,
  IconSvgLightLocalFileChildImageSharpId = 210,
  IconSvgLightLocalFileChildLocaleChildren = 211,
  IconSvgLightLocalFileChildLocaleData = 212,
  IconSvgLightLocalFileChildLocaleFileAbsolutePath = 213,
  IconSvgLightLocalFileChildLocaleId = 214,
  IconSvgLightLocalFileChildLocaleLanguage = 215,
  IconSvgLightLocalFileChildLocaleNs = 216,
  IconSvgLightLocalFileChildren = 217,
  IconSvgLightLocalFileChildrenImageSharp = 218,
  IconSvgLightLocalFileChildrenImageSharpChildren = 219,
  IconSvgLightLocalFileChildrenImageSharpGatsbyImageData = 220,
  IconSvgLightLocalFileChildrenImageSharpId = 221,
  IconSvgLightLocalFileChildrenLocale = 222,
  IconSvgLightLocalFileChildrenLocaleChildren = 223,
  IconSvgLightLocalFileChildrenLocaleData = 224,
  IconSvgLightLocalFileChildrenLocaleFileAbsolutePath = 225,
  IconSvgLightLocalFileChildrenLocaleId = 226,
  IconSvgLightLocalFileChildrenLocaleLanguage = 227,
  IconSvgLightLocalFileChildrenLocaleNs = 228,
  IconSvgLightLocalFileChildrenChildren = 229,
  IconSvgLightLocalFileChildrenId = 230,
  IconSvgLightLocalFileCtime = 231,
  IconSvgLightLocalFileCtimeMs = 232,
  IconSvgLightLocalFileDev = 233,
  IconSvgLightLocalFileDir = 234,
  IconSvgLightLocalFileExt = 235,
  IconSvgLightLocalFileExtension = 236,
  IconSvgLightLocalFileGid = 237,
  IconSvgLightLocalFileId = 238,
  IconSvgLightLocalFileIno = 239,
  IconSvgLightLocalFileInternalContent = 240,
  IconSvgLightLocalFileInternalContentDigest = 241,
  IconSvgLightLocalFileInternalDescription = 242,
  IconSvgLightLocalFileInternalFieldOwners = 243,
  IconSvgLightLocalFileInternalIgnoreType = 244,
  IconSvgLightLocalFileInternalMediaType = 245,
  IconSvgLightLocalFileInternalOwner = 246,
  IconSvgLightLocalFileInternalType = 247,
  IconSvgLightLocalFileMode = 248,
  IconSvgLightLocalFileModifiedTime = 249,
  IconSvgLightLocalFileMtime = 250,
  IconSvgLightLocalFileMtimeMs = 251,
  IconSvgLightLocalFileName = 252,
  IconSvgLightLocalFileNlink = 253,
  IconSvgLightLocalFileParentChildren = 254,
  IconSvgLightLocalFileParentId = 255,
  IconSvgLightLocalFilePrettySize = 256,
  IconSvgLightLocalFilePublicUrl = 257,
  IconSvgLightLocalFileRdev = 258,
  IconSvgLightLocalFileRelativeDirectory = 259,
  IconSvgLightLocalFileRelativePath = 260,
  IconSvgLightLocalFileRoot = 261,
  IconSvgLightLocalFileSize = 262,
  IconSvgLightLocalFileSourceInstanceName = 263,
  IconSvgLightLocalFileUid = 264,
  IconSvgLightLocalFileUrl = 265,
  IconSvgLightNodeLocale = 266,
  IconSvgLightParentChildren = 267,
  IconSvgLightParentChildrenChildren = 268,
  IconSvgLightParentChildrenId = 269,
  IconSvgLightParentId = 270,
  IconSvgLightParentInternalContent = 271,
  IconSvgLightParentInternalContentDigest = 272,
  IconSvgLightParentInternalDescription = 273,
  IconSvgLightParentInternalFieldOwners = 274,
  IconSvgLightParentInternalIgnoreType = 275,
  IconSvgLightParentInternalMediaType = 276,
  IconSvgLightParentInternalOwner = 277,
  IconSvgLightParentInternalType = 278,
  IconSvgLightParentParentChildren = 279,
  IconSvgLightParentParentId = 280,
  IconSvgLightSpaceId = 281,
  IconSvgLightSysRevision = 282,
  IconSvgLightSysType = 283,
  IconSvgLightTitle = 284,
  IconSvgLightUpdatedAt = 285,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 286,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 287,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 288,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 289,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 290,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 291,
  IconChildContentfulIconSvgTextNodeChildMdxId = 292,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 293,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 294,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 295,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 296,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 297,
  IconChildContentfulIconSvgTextNodeChildren = 298,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 299,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 300,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 301,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 302,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 303,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 304,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 305,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 306,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 307,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 308,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 309,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 310,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 311,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 312,
  IconChildContentfulIconSvgTextNodeChildrenId = 313,
  IconChildContentfulIconSvgTextNodeId = 314,
  IconChildContentfulIconSvgTextNodeInternalContent = 315,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 316,
  IconChildContentfulIconSvgTextNodeInternalDescription = 317,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 318,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 319,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 320,
  IconChildContentfulIconSvgTextNodeInternalOwner = 321,
  IconChildContentfulIconSvgTextNodeInternalType = 322,
  IconChildContentfulIconSvgTextNodeParentChildren = 323,
  IconChildContentfulIconSvgTextNodeParentId = 324,
  IconChildContentfulIconSvgTextNodeSvg = 325,
  IconChildContentfulIconSvgTextNodeSysType = 326,
  IconChildren = 327,
  IconChildrenContentfulIconSvgTextNode = 328,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 329,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 330,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 331,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 332,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 333,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 334,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 335,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 336,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 337,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 338,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 339,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 340,
  IconChildrenContentfulIconSvgTextNodeChildren = 341,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 342,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 343,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 344,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 345,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 346,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 347,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 348,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 349,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 350,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 351,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 352,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 353,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 354,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 355,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 356,
  IconChildrenContentfulIconSvgTextNodeId = 357,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 358,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 359,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 360,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 361,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 362,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 363,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 364,
  IconChildrenContentfulIconSvgTextNodeInternalType = 365,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 366,
  IconChildrenContentfulIconSvgTextNodeParentId = 367,
  IconChildrenContentfulIconSvgTextNodeSvg = 368,
  IconChildrenContentfulIconSvgTextNodeSysType = 369,
  IconChildrenChildren = 370,
  IconChildrenChildrenChildren = 371,
  IconChildrenChildrenId = 372,
  IconChildrenId = 373,
  IconChildrenInternalContent = 374,
  IconChildrenInternalContentDigest = 375,
  IconChildrenInternalDescription = 376,
  IconChildrenInternalFieldOwners = 377,
  IconChildrenInternalIgnoreType = 378,
  IconChildrenInternalMediaType = 379,
  IconChildrenInternalOwner = 380,
  IconChildrenInternalType = 381,
  IconChildrenParentChildren = 382,
  IconChildrenParentId = 383,
  IconContact = 384,
  IconContactChildren = 385,
  IconContactChildrenChildren = 386,
  IconContactChildrenId = 387,
  IconContactContentfulId = 388,
  IconContactCreatedAt = 389,
  IconContactHref = 390,
  IconContactIconSvgDarkChildren = 391,
  IconContactIconSvgDarkContentfulId = 392,
  IconContactIconSvgDarkCreatedAt = 393,
  IconContactIconSvgDarkDescription = 394,
  IconContactIconSvgDarkGatsbyImageData = 395,
  IconContactIconSvgDarkId = 396,
  IconContactIconSvgDarkNodeLocale = 397,
  IconContactIconSvgDarkSpaceId = 398,
  IconContactIconSvgDarkTitle = 399,
  IconContactIconSvgDarkUpdatedAt = 400,
  IconContactIconSvgLightChildren = 401,
  IconContactIconSvgLightContentfulId = 402,
  IconContactIconSvgLightCreatedAt = 403,
  IconContactIconSvgLightDescription = 404,
  IconContactIconSvgLightGatsbyImageData = 405,
  IconContactIconSvgLightId = 406,
  IconContactIconSvgLightNodeLocale = 407,
  IconContactIconSvgLightSpaceId = 408,
  IconContactIconSvgLightTitle = 409,
  IconContactIconSvgLightUpdatedAt = 410,
  IconContactIconChildren = 411,
  IconContactIconChildrenContentfulIconSvgTextNode = 412,
  IconContactIconContact = 413,
  IconContactIconContentfulId = 414,
  IconContactIconCreatedAt = 415,
  IconContactIconHistory = 416,
  IconContactIconId = 417,
  IconContactIconName = 418,
  IconContactIconNodeLocale = 419,
  IconContactIconOss = 420,
  IconContactIconProject = 421,
  IconContactIconSpaceId = 422,
  IconContactIconUpdatedAt = 423,
  IconContactIconWhatICanDo = 424,
  IconContactId = 425,
  IconContactInternalContent = 426,
  IconContactInternalContentDigest = 427,
  IconContactInternalDescription = 428,
  IconContactInternalFieldOwners = 429,
  IconContactInternalIgnoreType = 430,
  IconContactInternalMediaType = 431,
  IconContactInternalOwner = 432,
  IconContactInternalType = 433,
  IconContactName = 434,
  IconContactNodeLocale = 435,
  IconContactParentChildren = 436,
  IconContactParentId = 437,
  IconContactSortKey = 438,
  IconContactSpaceId = 439,
  IconContactSubName = 440,
  IconContactSysRevision = 441,
  IconContactSysType = 442,
  IconContactUpdatedAt = 443,
  IconContentfulId = 444,
  IconCreatedAt = 445,
  IconHistory = 446,
  IconHistoryChildren = 447,
  IconHistoryChildrenChildren = 448,
  IconHistoryChildrenId = 449,
  IconHistoryContentfulId = 450,
  IconHistoryCreatedAt = 451,
  IconHistoryDate = 452,
  IconHistoryIconChildren = 453,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 454,
  IconHistoryIconContact = 455,
  IconHistoryIconContentfulId = 456,
  IconHistoryIconCreatedAt = 457,
  IconHistoryIconHistory = 458,
  IconHistoryIconId = 459,
  IconHistoryIconName = 460,
  IconHistoryIconNodeLocale = 461,
  IconHistoryIconOss = 462,
  IconHistoryIconProject = 463,
  IconHistoryIconSpaceId = 464,
  IconHistoryIconUpdatedAt = 465,
  IconHistoryIconWhatICanDo = 466,
  IconHistoryId = 467,
  IconHistoryInternalContent = 468,
  IconHistoryInternalContentDigest = 469,
  IconHistoryInternalDescription = 470,
  IconHistoryInternalFieldOwners = 471,
  IconHistoryInternalIgnoreType = 472,
  IconHistoryInternalMediaType = 473,
  IconHistoryInternalOwner = 474,
  IconHistoryInternalType = 475,
  IconHistoryName = 476,
  IconHistoryNodeLocale = 477,
  IconHistoryParentChildren = 478,
  IconHistoryParentId = 479,
  IconHistorySpaceId = 480,
  IconHistorySubName = 481,
  IconHistorySysRevision = 482,
  IconHistorySysType = 483,
  IconHistoryUpdatedAt = 484,
  IconId = 485,
  IconInternalContent = 486,
  IconInternalContentDigest = 487,
  IconInternalDescription = 488,
  IconInternalFieldOwners = 489,
  IconInternalIgnoreType = 490,
  IconInternalMediaType = 491,
  IconInternalOwner = 492,
  IconInternalType = 493,
  IconName = 494,
  IconNodeLocale = 495,
  IconOss = 496,
  IconOssChildContentfulOssDetailTextNodeChildren = 497,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 498,
  IconOssChildContentfulOssDetailTextNodeDetail = 499,
  IconOssChildContentfulOssDetailTextNodeId = 500,
  IconOssChildren = 501,
  IconOssChildrenContentfulOssDetailTextNode = 502,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 503,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 504,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 505,
  IconOssChildrenContentfulOssDetailTextNodeId = 506,
  IconOssChildrenChildren = 507,
  IconOssChildrenId = 508,
  IconOssContentfulId = 509,
  IconOssCreatedAt = 510,
  IconOssDetailChildren = 511,
  IconOssDetailChildrenMdx = 512,
  IconOssDetailDetail = 513,
  IconOssDetailId = 514,
  IconOssHref = 515,
  IconOssIconChildren = 516,
  IconOssIconChildrenContentfulIconSvgTextNode = 517,
  IconOssIconContact = 518,
  IconOssIconContentfulId = 519,
  IconOssIconCreatedAt = 520,
  IconOssIconHistory = 521,
  IconOssIconId = 522,
  IconOssIconName = 523,
  IconOssIconNodeLocale = 524,
  IconOssIconOss = 525,
  IconOssIconProject = 526,
  IconOssIconSpaceId = 527,
  IconOssIconUpdatedAt = 528,
  IconOssIconWhatICanDo = 529,
  IconOssId = 530,
  IconOssImageChildren = 531,
  IconOssImageContentfulId = 532,
  IconOssImageCreatedAt = 533,
  IconOssImageDescription = 534,
  IconOssImageGatsbyImageData = 535,
  IconOssImageId = 536,
  IconOssImageNodeLocale = 537,
  IconOssImageSpaceId = 538,
  IconOssImageTitle = 539,
  IconOssImageUpdatedAt = 540,
  IconOssInternalContent = 541,
  IconOssInternalContentDigest = 542,
  IconOssInternalDescription = 543,
  IconOssInternalFieldOwners = 544,
  IconOssInternalIgnoreType = 545,
  IconOssInternalMediaType = 546,
  IconOssInternalOwner = 547,
  IconOssInternalType = 548,
  IconOssName = 549,
  IconOssNodeLocale = 550,
  IconOssParentChildren = 551,
  IconOssParentId = 552,
  IconOssSpaceId = 553,
  IconOssStartDate = 554,
  IconOssSubName = 555,
  IconOssSysRevision = 556,
  IconOssSysType = 557,
  IconOssTags = 558,
  IconOssTagsBlogPost = 559,
  IconOssTagsChildren = 560,
  IconOssTagsContentfulId = 561,
  IconOssTagsCreatedAt = 562,
  IconOssTagsId = 563,
  IconOssTagsLevel = 564,
  IconOssTagsName = 565,
  IconOssTagsNodeLocale = 566,
  IconOssTagsOss = 567,
  IconOssTagsProject = 568,
  IconOssTagsSkillMap = 569,
  IconOssTagsSpaceId = 570,
  IconOssTagsUpdatedAt = 571,
  IconOssUpdatedAt = 572,
  IconParentChildren = 573,
  IconParentChildrenChildren = 574,
  IconParentChildrenId = 575,
  IconParentId = 576,
  IconParentInternalContent = 577,
  IconParentInternalContentDigest = 578,
  IconParentInternalDescription = 579,
  IconParentInternalFieldOwners = 580,
  IconParentInternalIgnoreType = 581,
  IconParentInternalMediaType = 582,
  IconParentInternalOwner = 583,
  IconParentInternalType = 584,
  IconParentParentChildren = 585,
  IconParentParentId = 586,
  IconProject = 587,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 588,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 589,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 590,
  IconProjectChildContentfulProjectDetailTextNodeId = 591,
  IconProjectChildren = 592,
  IconProjectChildrenContentfulProjectDetailTextNode = 593,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 594,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 595,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 596,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 597,
  IconProjectChildrenChildren = 598,
  IconProjectChildrenId = 599,
  IconProjectContentfulId = 600,
  IconProjectCreatedAt = 601,
  IconProjectDetailChildren = 602,
  IconProjectDetailChildrenMdx = 603,
  IconProjectDetailDetail = 604,
  IconProjectDetailId = 605,
  IconProjectEndDate = 606,
  IconProjectIconChildren = 607,
  IconProjectIconChildrenContentfulIconSvgTextNode = 608,
  IconProjectIconContact = 609,
  IconProjectIconContentfulId = 610,
  IconProjectIconCreatedAt = 611,
  IconProjectIconHistory = 612,
  IconProjectIconId = 613,
  IconProjectIconName = 614,
  IconProjectIconNodeLocale = 615,
  IconProjectIconOss = 616,
  IconProjectIconProject = 617,
  IconProjectIconSpaceId = 618,
  IconProjectIconUpdatedAt = 619,
  IconProjectIconWhatICanDo = 620,
  IconProjectId = 621,
  IconProjectInternalContent = 622,
  IconProjectInternalContentDigest = 623,
  IconProjectInternalDescription = 624,
  IconProjectInternalFieldOwners = 625,
  IconProjectInternalIgnoreType = 626,
  IconProjectInternalMediaType = 627,
  IconProjectInternalOwner = 628,
  IconProjectInternalType = 629,
  IconProjectName = 630,
  IconProjectNodeLocale = 631,
  IconProjectParentChildren = 632,
  IconProjectParentId = 633,
  IconProjectSpaceId = 634,
  IconProjectStartDate = 635,
  IconProjectSubName = 636,
  IconProjectSysRevision = 637,
  IconProjectSysType = 638,
  IconProjectTags = 639,
  IconProjectTagsBlogPost = 640,
  IconProjectTagsChildren = 641,
  IconProjectTagsContentfulId = 642,
  IconProjectTagsCreatedAt = 643,
  IconProjectTagsId = 644,
  IconProjectTagsLevel = 645,
  IconProjectTagsName = 646,
  IconProjectTagsNodeLocale = 647,
  IconProjectTagsOss = 648,
  IconProjectTagsProject = 649,
  IconProjectTagsSkillMap = 650,
  IconProjectTagsSpaceId = 651,
  IconProjectTagsUpdatedAt = 652,
  IconProjectUpdatedAt = 653,
  IconSpaceId = 654,
  IconSvgChildMdxBody = 655,
  IconSvgChildMdxChildren = 656,
  IconSvgChildMdxExcerpt = 657,
  IconSvgChildMdxFileAbsolutePath = 658,
  IconSvgChildMdxHeadings = 659,
  IconSvgChildMdxHtml = 660,
  IconSvgChildMdxId = 661,
  IconSvgChildMdxMdxAst = 662,
  IconSvgChildMdxRawBody = 663,
  IconSvgChildMdxSlug = 664,
  IconSvgChildMdxTableOfContents = 665,
  IconSvgChildMdxTimeToRead = 666,
  IconSvgChildren = 667,
  IconSvgChildrenMdx = 668,
  IconSvgChildrenMdxBody = 669,
  IconSvgChildrenMdxChildren = 670,
  IconSvgChildrenMdxExcerpt = 671,
  IconSvgChildrenMdxFileAbsolutePath = 672,
  IconSvgChildrenMdxHeadings = 673,
  IconSvgChildrenMdxHtml = 674,
  IconSvgChildrenMdxId = 675,
  IconSvgChildrenMdxMdxAst = 676,
  IconSvgChildrenMdxRawBody = 677,
  IconSvgChildrenMdxSlug = 678,
  IconSvgChildrenMdxTableOfContents = 679,
  IconSvgChildrenMdxTimeToRead = 680,
  IconSvgChildrenChildren = 681,
  IconSvgChildrenId = 682,
  IconSvgId = 683,
  IconSvgInternalContent = 684,
  IconSvgInternalContentDigest = 685,
  IconSvgInternalDescription = 686,
  IconSvgInternalFieldOwners = 687,
  IconSvgInternalIgnoreType = 688,
  IconSvgInternalMediaType = 689,
  IconSvgInternalOwner = 690,
  IconSvgInternalType = 691,
  IconSvgParentChildren = 692,
  IconSvgParentId = 693,
  IconSvgSvg = 694,
  IconSvgSysType = 695,
  IconSysRevision = 696,
  IconSysType = 697,
  IconUpdatedAt = 698,
  IconWhatICanDo = 699,
  IconWhatICanDoChildren = 700,
  IconWhatICanDoChildrenChildren = 701,
  IconWhatICanDoChildrenId = 702,
  IconWhatICanDoContentfulId = 703,
  IconWhatICanDoCreatedAt = 704,
  IconWhatICanDoIconChildren = 705,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 706,
  IconWhatICanDoIconContact = 707,
  IconWhatICanDoIconContentfulId = 708,
  IconWhatICanDoIconCreatedAt = 709,
  IconWhatICanDoIconHistory = 710,
  IconWhatICanDoIconId = 711,
  IconWhatICanDoIconName = 712,
  IconWhatICanDoIconNodeLocale = 713,
  IconWhatICanDoIconOss = 714,
  IconWhatICanDoIconProject = 715,
  IconWhatICanDoIconSpaceId = 716,
  IconWhatICanDoIconUpdatedAt = 717,
  IconWhatICanDoIconWhatICanDo = 718,
  IconWhatICanDoId = 719,
  IconWhatICanDoInternalContent = 720,
  IconWhatICanDoInternalContentDigest = 721,
  IconWhatICanDoInternalDescription = 722,
  IconWhatICanDoInternalFieldOwners = 723,
  IconWhatICanDoInternalIgnoreType = 724,
  IconWhatICanDoInternalMediaType = 725,
  IconWhatICanDoInternalOwner = 726,
  IconWhatICanDoInternalType = 727,
  IconWhatICanDoName = 728,
  IconWhatICanDoNodeLocale = 729,
  IconWhatICanDoParentChildren = 730,
  IconWhatICanDoParentId = 731,
  IconWhatICanDoSortKey = 732,
  IconWhatICanDoSpaceId = 733,
  IconWhatICanDoSubName = 734,
  IconWhatICanDoSysRevision = 735,
  IconWhatICanDoSysType = 736,
  IconWhatICanDoUpdatedAt = 737,
  Id = 738,
  InternalContent = 739,
  InternalContentDigest = 740,
  InternalDescription = 741,
  InternalFieldOwners = 742,
  InternalIgnoreType = 743,
  InternalMediaType = 744,
  InternalOwner = 745,
  InternalType = 746,
  Name = 747,
  NodeLocale = 748,
  ParentChildren = 749,
  ParentChildrenChildren = 750,
  ParentChildrenChildrenChildren = 751,
  ParentChildrenChildrenId = 752,
  ParentChildrenId = 753,
  ParentChildrenInternalContent = 754,
  ParentChildrenInternalContentDigest = 755,
  ParentChildrenInternalDescription = 756,
  ParentChildrenInternalFieldOwners = 757,
  ParentChildrenInternalIgnoreType = 758,
  ParentChildrenInternalMediaType = 759,
  ParentChildrenInternalOwner = 760,
  ParentChildrenInternalType = 761,
  ParentChildrenParentChildren = 762,
  ParentChildrenParentId = 763,
  ParentId = 764,
  ParentInternalContent = 765,
  ParentInternalContentDigest = 766,
  ParentInternalDescription = 767,
  ParentInternalFieldOwners = 768,
  ParentInternalIgnoreType = 769,
  ParentInternalMediaType = 770,
  ParentInternalOwner = 771,
  ParentInternalType = 772,
  ParentParentChildren = 773,
  ParentParentChildrenChildren = 774,
  ParentParentChildrenId = 775,
  ParentParentId = 776,
  ParentParentInternalContent = 777,
  ParentParentInternalContentDigest = 778,
  ParentParentInternalDescription = 779,
  ParentParentInternalFieldOwners = 780,
  ParentParentInternalIgnoreType = 781,
  ParentParentInternalMediaType = 782,
  ParentParentInternalOwner = 783,
  ParentParentInternalType = 784,
  ParentParentParentChildren = 785,
  ParentParentParentId = 786,
  SortKey = 787,
  SpaceId = 788,
  SubName = 789,
  SysContentTypeSysId = 790,
  SysContentTypeSysLinkType = 791,
  SysContentTypeSysType = 792,
  SysRevision = 793,
  SysType = 794,
  UpdatedAt = 795
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
  IconContactIconSvgDarkGatsbyImageData = 151,
  IconContactIconSvgDarkId = 152,
  IconContactIconSvgDarkNodeLocale = 153,
  IconContactIconSvgDarkSpaceId = 154,
  IconContactIconSvgDarkTitle = 155,
  IconContactIconSvgDarkUpdatedAt = 156,
  IconContactIconSvgLightChildren = 157,
  IconContactIconSvgLightContentfulId = 158,
  IconContactIconSvgLightCreatedAt = 159,
  IconContactIconSvgLightDescription = 160,
  IconContactIconSvgLightGatsbyImageData = 161,
  IconContactIconSvgLightId = 162,
  IconContactIconSvgLightNodeLocale = 163,
  IconContactIconSvgLightSpaceId = 164,
  IconContactIconSvgLightTitle = 165,
  IconContactIconSvgLightUpdatedAt = 166,
  IconContactIconChildren = 167,
  IconContactIconChildrenContentfulIconSvgTextNode = 168,
  IconContactIconContact = 169,
  IconContactIconContentfulId = 170,
  IconContactIconCreatedAt = 171,
  IconContactIconHistory = 172,
  IconContactIconId = 173,
  IconContactIconName = 174,
  IconContactIconNodeLocale = 175,
  IconContactIconOss = 176,
  IconContactIconProject = 177,
  IconContactIconSpaceId = 178,
  IconContactIconUpdatedAt = 179,
  IconContactIconWhatICanDo = 180,
  IconContactId = 181,
  IconContactInternalContent = 182,
  IconContactInternalContentDigest = 183,
  IconContactInternalDescription = 184,
  IconContactInternalFieldOwners = 185,
  IconContactInternalIgnoreType = 186,
  IconContactInternalMediaType = 187,
  IconContactInternalOwner = 188,
  IconContactInternalType = 189,
  IconContactName = 190,
  IconContactNodeLocale = 191,
  IconContactParentChildren = 192,
  IconContactParentId = 193,
  IconContactSortKey = 194,
  IconContactSpaceId = 195,
  IconContactSubName = 196,
  IconContactSysRevision = 197,
  IconContactSysType = 198,
  IconContactUpdatedAt = 199,
  IconContentfulId = 200,
  IconCreatedAt = 201,
  IconHistory = 202,
  IconHistoryChildren = 203,
  IconHistoryChildrenChildren = 204,
  IconHistoryChildrenId = 205,
  IconHistoryContentfulId = 206,
  IconHistoryCreatedAt = 207,
  IconHistoryDate = 208,
  IconHistoryIconChildren = 209,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 210,
  IconHistoryIconContact = 211,
  IconHistoryIconContentfulId = 212,
  IconHistoryIconCreatedAt = 213,
  IconHistoryIconHistory = 214,
  IconHistoryIconId = 215,
  IconHistoryIconName = 216,
  IconHistoryIconNodeLocale = 217,
  IconHistoryIconOss = 218,
  IconHistoryIconProject = 219,
  IconHistoryIconSpaceId = 220,
  IconHistoryIconUpdatedAt = 221,
  IconHistoryIconWhatICanDo = 222,
  IconHistoryId = 223,
  IconHistoryInternalContent = 224,
  IconHistoryInternalContentDigest = 225,
  IconHistoryInternalDescription = 226,
  IconHistoryInternalFieldOwners = 227,
  IconHistoryInternalIgnoreType = 228,
  IconHistoryInternalMediaType = 229,
  IconHistoryInternalOwner = 230,
  IconHistoryInternalType = 231,
  IconHistoryName = 232,
  IconHistoryNodeLocale = 233,
  IconHistoryParentChildren = 234,
  IconHistoryParentId = 235,
  IconHistorySpaceId = 236,
  IconHistorySubName = 237,
  IconHistorySysRevision = 238,
  IconHistorySysType = 239,
  IconHistoryUpdatedAt = 240,
  IconId = 241,
  IconInternalContent = 242,
  IconInternalContentDigest = 243,
  IconInternalDescription = 244,
  IconInternalFieldOwners = 245,
  IconInternalIgnoreType = 246,
  IconInternalMediaType = 247,
  IconInternalOwner = 248,
  IconInternalType = 249,
  IconName = 250,
  IconNodeLocale = 251,
  IconOss = 252,
  IconOssChildContentfulOssDetailTextNodeChildren = 253,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 254,
  IconOssChildContentfulOssDetailTextNodeDetail = 255,
  IconOssChildContentfulOssDetailTextNodeId = 256,
  IconOssChildren = 257,
  IconOssChildrenContentfulOssDetailTextNode = 258,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 259,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 260,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 261,
  IconOssChildrenContentfulOssDetailTextNodeId = 262,
  IconOssChildrenChildren = 263,
  IconOssChildrenId = 264,
  IconOssContentfulId = 265,
  IconOssCreatedAt = 266,
  IconOssDetailChildren = 267,
  IconOssDetailChildrenMdx = 268,
  IconOssDetailDetail = 269,
  IconOssDetailId = 270,
  IconOssHref = 271,
  IconOssIconChildren = 272,
  IconOssIconChildrenContentfulIconSvgTextNode = 273,
  IconOssIconContact = 274,
  IconOssIconContentfulId = 275,
  IconOssIconCreatedAt = 276,
  IconOssIconHistory = 277,
  IconOssIconId = 278,
  IconOssIconName = 279,
  IconOssIconNodeLocale = 280,
  IconOssIconOss = 281,
  IconOssIconProject = 282,
  IconOssIconSpaceId = 283,
  IconOssIconUpdatedAt = 284,
  IconOssIconWhatICanDo = 285,
  IconOssId = 286,
  IconOssImageChildren = 287,
  IconOssImageContentfulId = 288,
  IconOssImageCreatedAt = 289,
  IconOssImageDescription = 290,
  IconOssImageGatsbyImageData = 291,
  IconOssImageId = 292,
  IconOssImageNodeLocale = 293,
  IconOssImageSpaceId = 294,
  IconOssImageTitle = 295,
  IconOssImageUpdatedAt = 296,
  IconOssInternalContent = 297,
  IconOssInternalContentDigest = 298,
  IconOssInternalDescription = 299,
  IconOssInternalFieldOwners = 300,
  IconOssInternalIgnoreType = 301,
  IconOssInternalMediaType = 302,
  IconOssInternalOwner = 303,
  IconOssInternalType = 304,
  IconOssName = 305,
  IconOssNodeLocale = 306,
  IconOssParentChildren = 307,
  IconOssParentId = 308,
  IconOssSpaceId = 309,
  IconOssStartDate = 310,
  IconOssSubName = 311,
  IconOssSysRevision = 312,
  IconOssSysType = 313,
  IconOssTags = 314,
  IconOssTagsBlogPost = 315,
  IconOssTagsChildren = 316,
  IconOssTagsContentfulId = 317,
  IconOssTagsCreatedAt = 318,
  IconOssTagsId = 319,
  IconOssTagsLevel = 320,
  IconOssTagsName = 321,
  IconOssTagsNodeLocale = 322,
  IconOssTagsOss = 323,
  IconOssTagsProject = 324,
  IconOssTagsSkillMap = 325,
  IconOssTagsSpaceId = 326,
  IconOssTagsUpdatedAt = 327,
  IconOssUpdatedAt = 328,
  IconParentChildren = 329,
  IconParentChildrenChildren = 330,
  IconParentChildrenId = 331,
  IconParentId = 332,
  IconParentInternalContent = 333,
  IconParentInternalContentDigest = 334,
  IconParentInternalDescription = 335,
  IconParentInternalFieldOwners = 336,
  IconParentInternalIgnoreType = 337,
  IconParentInternalMediaType = 338,
  IconParentInternalOwner = 339,
  IconParentInternalType = 340,
  IconParentParentChildren = 341,
  IconParentParentId = 342,
  IconProject = 343,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 344,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 345,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 346,
  IconProjectChildContentfulProjectDetailTextNodeId = 347,
  IconProjectChildren = 348,
  IconProjectChildrenContentfulProjectDetailTextNode = 349,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 350,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 351,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 352,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 353,
  IconProjectChildrenChildren = 354,
  IconProjectChildrenId = 355,
  IconProjectContentfulId = 356,
  IconProjectCreatedAt = 357,
  IconProjectDetailChildren = 358,
  IconProjectDetailChildrenMdx = 359,
  IconProjectDetailDetail = 360,
  IconProjectDetailId = 361,
  IconProjectEndDate = 362,
  IconProjectIconChildren = 363,
  IconProjectIconChildrenContentfulIconSvgTextNode = 364,
  IconProjectIconContact = 365,
  IconProjectIconContentfulId = 366,
  IconProjectIconCreatedAt = 367,
  IconProjectIconHistory = 368,
  IconProjectIconId = 369,
  IconProjectIconName = 370,
  IconProjectIconNodeLocale = 371,
  IconProjectIconOss = 372,
  IconProjectIconProject = 373,
  IconProjectIconSpaceId = 374,
  IconProjectIconUpdatedAt = 375,
  IconProjectIconWhatICanDo = 376,
  IconProjectId = 377,
  IconProjectInternalContent = 378,
  IconProjectInternalContentDigest = 379,
  IconProjectInternalDescription = 380,
  IconProjectInternalFieldOwners = 381,
  IconProjectInternalIgnoreType = 382,
  IconProjectInternalMediaType = 383,
  IconProjectInternalOwner = 384,
  IconProjectInternalType = 385,
  IconProjectName = 386,
  IconProjectNodeLocale = 387,
  IconProjectParentChildren = 388,
  IconProjectParentId = 389,
  IconProjectSpaceId = 390,
  IconProjectStartDate = 391,
  IconProjectSubName = 392,
  IconProjectSysRevision = 393,
  IconProjectSysType = 394,
  IconProjectTags = 395,
  IconProjectTagsBlogPost = 396,
  IconProjectTagsChildren = 397,
  IconProjectTagsContentfulId = 398,
  IconProjectTagsCreatedAt = 399,
  IconProjectTagsId = 400,
  IconProjectTagsLevel = 401,
  IconProjectTagsName = 402,
  IconProjectTagsNodeLocale = 403,
  IconProjectTagsOss = 404,
  IconProjectTagsProject = 405,
  IconProjectTagsSkillMap = 406,
  IconProjectTagsSpaceId = 407,
  IconProjectTagsUpdatedAt = 408,
  IconProjectUpdatedAt = 409,
  IconSpaceId = 410,
  IconSvgChildMdxBody = 411,
  IconSvgChildMdxChildren = 412,
  IconSvgChildMdxExcerpt = 413,
  IconSvgChildMdxFileAbsolutePath = 414,
  IconSvgChildMdxHeadings = 415,
  IconSvgChildMdxHtml = 416,
  IconSvgChildMdxId = 417,
  IconSvgChildMdxMdxAst = 418,
  IconSvgChildMdxRawBody = 419,
  IconSvgChildMdxSlug = 420,
  IconSvgChildMdxTableOfContents = 421,
  IconSvgChildMdxTimeToRead = 422,
  IconSvgChildren = 423,
  IconSvgChildrenMdx = 424,
  IconSvgChildrenMdxBody = 425,
  IconSvgChildrenMdxChildren = 426,
  IconSvgChildrenMdxExcerpt = 427,
  IconSvgChildrenMdxFileAbsolutePath = 428,
  IconSvgChildrenMdxHeadings = 429,
  IconSvgChildrenMdxHtml = 430,
  IconSvgChildrenMdxId = 431,
  IconSvgChildrenMdxMdxAst = 432,
  IconSvgChildrenMdxRawBody = 433,
  IconSvgChildrenMdxSlug = 434,
  IconSvgChildrenMdxTableOfContents = 435,
  IconSvgChildrenMdxTimeToRead = 436,
  IconSvgChildrenChildren = 437,
  IconSvgChildrenId = 438,
  IconSvgId = 439,
  IconSvgInternalContent = 440,
  IconSvgInternalContentDigest = 441,
  IconSvgInternalDescription = 442,
  IconSvgInternalFieldOwners = 443,
  IconSvgInternalIgnoreType = 444,
  IconSvgInternalMediaType = 445,
  IconSvgInternalOwner = 446,
  IconSvgInternalType = 447,
  IconSvgParentChildren = 448,
  IconSvgParentId = 449,
  IconSvgSvg = 450,
  IconSvgSysType = 451,
  IconSysRevision = 452,
  IconSysType = 453,
  IconUpdatedAt = 454,
  IconWhatICanDo = 455,
  IconWhatICanDoChildren = 456,
  IconWhatICanDoChildrenChildren = 457,
  IconWhatICanDoChildrenId = 458,
  IconWhatICanDoContentfulId = 459,
  IconWhatICanDoCreatedAt = 460,
  IconWhatICanDoIconChildren = 461,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 462,
  IconWhatICanDoIconContact = 463,
  IconWhatICanDoIconContentfulId = 464,
  IconWhatICanDoIconCreatedAt = 465,
  IconWhatICanDoIconHistory = 466,
  IconWhatICanDoIconId = 467,
  IconWhatICanDoIconName = 468,
  IconWhatICanDoIconNodeLocale = 469,
  IconWhatICanDoIconOss = 470,
  IconWhatICanDoIconProject = 471,
  IconWhatICanDoIconSpaceId = 472,
  IconWhatICanDoIconUpdatedAt = 473,
  IconWhatICanDoIconWhatICanDo = 474,
  IconWhatICanDoId = 475,
  IconWhatICanDoInternalContent = 476,
  IconWhatICanDoInternalContentDigest = 477,
  IconWhatICanDoInternalDescription = 478,
  IconWhatICanDoInternalFieldOwners = 479,
  IconWhatICanDoInternalIgnoreType = 480,
  IconWhatICanDoInternalMediaType = 481,
  IconWhatICanDoInternalOwner = 482,
  IconWhatICanDoInternalType = 483,
  IconWhatICanDoName = 484,
  IconWhatICanDoNodeLocale = 485,
  IconWhatICanDoParentChildren = 486,
  IconWhatICanDoParentId = 487,
  IconWhatICanDoSortKey = 488,
  IconWhatICanDoSpaceId = 489,
  IconWhatICanDoSubName = 490,
  IconWhatICanDoSysRevision = 491,
  IconWhatICanDoSysType = 492,
  IconWhatICanDoUpdatedAt = 493,
  Id = 494,
  InternalContent = 495,
  InternalContentDigest = 496,
  InternalDescription = 497,
  InternalFieldOwners = 498,
  InternalIgnoreType = 499,
  InternalMediaType = 500,
  InternalOwner = 501,
  InternalType = 502,
  Name = 503,
  NodeLocale = 504,
  ParentChildren = 505,
  ParentChildrenChildren = 506,
  ParentChildrenChildrenChildren = 507,
  ParentChildrenChildrenId = 508,
  ParentChildrenId = 509,
  ParentChildrenInternalContent = 510,
  ParentChildrenInternalContentDigest = 511,
  ParentChildrenInternalDescription = 512,
  ParentChildrenInternalFieldOwners = 513,
  ParentChildrenInternalIgnoreType = 514,
  ParentChildrenInternalMediaType = 515,
  ParentChildrenInternalOwner = 516,
  ParentChildrenInternalType = 517,
  ParentChildrenParentChildren = 518,
  ParentChildrenParentId = 519,
  ParentId = 520,
  ParentInternalContent = 521,
  ParentInternalContentDigest = 522,
  ParentInternalDescription = 523,
  ParentInternalFieldOwners = 524,
  ParentInternalIgnoreType = 525,
  ParentInternalMediaType = 526,
  ParentInternalOwner = 527,
  ParentInternalType = 528,
  ParentParentChildren = 529,
  ParentParentChildrenChildren = 530,
  ParentParentChildrenId = 531,
  ParentParentId = 532,
  ParentParentInternalContent = 533,
  ParentParentInternalContentDigest = 534,
  ParentParentInternalDescription = 535,
  ParentParentInternalFieldOwners = 536,
  ParentParentInternalIgnoreType = 537,
  ParentParentInternalMediaType = 538,
  ParentParentInternalOwner = 539,
  ParentParentInternalType = 540,
  ParentParentParentChildren = 541,
  ParentParentParentId = 542,
  SpaceId = 543,
  SubName = 544,
  SysContentTypeSysId = 545,
  SysContentTypeSysLinkType = 546,
  SysContentTypeSysType = 547,
  SysRevision = 548,
  SysType = 549,
  UpdatedAt = 550
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
  ContactIconSvgDarkGatsbyImageData = 271,
  ContactIconSvgDarkId = 272,
  ContactIconSvgDarkInternalContent = 273,
  ContactIconSvgDarkInternalContentDigest = 274,
  ContactIconSvgDarkInternalDescription = 275,
  ContactIconSvgDarkInternalFieldOwners = 276,
  ContactIconSvgDarkInternalIgnoreType = 277,
  ContactIconSvgDarkInternalMediaType = 278,
  ContactIconSvgDarkInternalOwner = 279,
  ContactIconSvgDarkInternalType = 280,
  ContactIconSvgDarkLocalFileAbsolutePath = 281,
  ContactIconSvgDarkLocalFileAccessTime = 282,
  ContactIconSvgDarkLocalFileAtime = 283,
  ContactIconSvgDarkLocalFileAtimeMs = 284,
  ContactIconSvgDarkLocalFileBase = 285,
  ContactIconSvgDarkLocalFileBirthTime = 286,
  ContactIconSvgDarkLocalFileBirthtime = 287,
  ContactIconSvgDarkLocalFileBirthtimeMs = 288,
  ContactIconSvgDarkLocalFileBlksize = 289,
  ContactIconSvgDarkLocalFileBlocks = 290,
  ContactIconSvgDarkLocalFileChangeTime = 291,
  ContactIconSvgDarkLocalFileChildren = 292,
  ContactIconSvgDarkLocalFileChildrenImageSharp = 293,
  ContactIconSvgDarkLocalFileChildrenLocale = 294,
  ContactIconSvgDarkLocalFileCtime = 295,
  ContactIconSvgDarkLocalFileCtimeMs = 296,
  ContactIconSvgDarkLocalFileDev = 297,
  ContactIconSvgDarkLocalFileDir = 298,
  ContactIconSvgDarkLocalFileExt = 299,
  ContactIconSvgDarkLocalFileExtension = 300,
  ContactIconSvgDarkLocalFileGid = 301,
  ContactIconSvgDarkLocalFileId = 302,
  ContactIconSvgDarkLocalFileIno = 303,
  ContactIconSvgDarkLocalFileMode = 304,
  ContactIconSvgDarkLocalFileModifiedTime = 305,
  ContactIconSvgDarkLocalFileMtime = 306,
  ContactIconSvgDarkLocalFileMtimeMs = 307,
  ContactIconSvgDarkLocalFileName = 308,
  ContactIconSvgDarkLocalFileNlink = 309,
  ContactIconSvgDarkLocalFilePrettySize = 310,
  ContactIconSvgDarkLocalFilePublicUrl = 311,
  ContactIconSvgDarkLocalFileRdev = 312,
  ContactIconSvgDarkLocalFileRelativeDirectory = 313,
  ContactIconSvgDarkLocalFileRelativePath = 314,
  ContactIconSvgDarkLocalFileRoot = 315,
  ContactIconSvgDarkLocalFileSize = 316,
  ContactIconSvgDarkLocalFileSourceInstanceName = 317,
  ContactIconSvgDarkLocalFileUid = 318,
  ContactIconSvgDarkLocalFileUrl = 319,
  ContactIconSvgDarkNodeLocale = 320,
  ContactIconSvgDarkParentChildren = 321,
  ContactIconSvgDarkParentId = 322,
  ContactIconSvgDarkSpaceId = 323,
  ContactIconSvgDarkSysRevision = 324,
  ContactIconSvgDarkSysType = 325,
  ContactIconSvgDarkTitle = 326,
  ContactIconSvgDarkUpdatedAt = 327,
  ContactIconSvgLightChildren = 328,
  ContactIconSvgLightChildrenChildren = 329,
  ContactIconSvgLightChildrenId = 330,
  ContactIconSvgLightContentfulId = 331,
  ContactIconSvgLightCreatedAt = 332,
  ContactIconSvgLightDescription = 333,
  ContactIconSvgLightFieldsLocalFile = 334,
  ContactIconSvgLightFileContentType = 335,
  ContactIconSvgLightFileFileName = 336,
  ContactIconSvgLightFileUrl = 337,
  ContactIconSvgLightGatsbyImageData = 338,
  ContactIconSvgLightId = 339,
  ContactIconSvgLightInternalContent = 340,
  ContactIconSvgLightInternalContentDigest = 341,
  ContactIconSvgLightInternalDescription = 342,
  ContactIconSvgLightInternalFieldOwners = 343,
  ContactIconSvgLightInternalIgnoreType = 344,
  ContactIconSvgLightInternalMediaType = 345,
  ContactIconSvgLightInternalOwner = 346,
  ContactIconSvgLightInternalType = 347,
  ContactIconSvgLightLocalFileAbsolutePath = 348,
  ContactIconSvgLightLocalFileAccessTime = 349,
  ContactIconSvgLightLocalFileAtime = 350,
  ContactIconSvgLightLocalFileAtimeMs = 351,
  ContactIconSvgLightLocalFileBase = 352,
  ContactIconSvgLightLocalFileBirthTime = 353,
  ContactIconSvgLightLocalFileBirthtime = 354,
  ContactIconSvgLightLocalFileBirthtimeMs = 355,
  ContactIconSvgLightLocalFileBlksize = 356,
  ContactIconSvgLightLocalFileBlocks = 357,
  ContactIconSvgLightLocalFileChangeTime = 358,
  ContactIconSvgLightLocalFileChildren = 359,
  ContactIconSvgLightLocalFileChildrenImageSharp = 360,
  ContactIconSvgLightLocalFileChildrenLocale = 361,
  ContactIconSvgLightLocalFileCtime = 362,
  ContactIconSvgLightLocalFileCtimeMs = 363,
  ContactIconSvgLightLocalFileDev = 364,
  ContactIconSvgLightLocalFileDir = 365,
  ContactIconSvgLightLocalFileExt = 366,
  ContactIconSvgLightLocalFileExtension = 367,
  ContactIconSvgLightLocalFileGid = 368,
  ContactIconSvgLightLocalFileId = 369,
  ContactIconSvgLightLocalFileIno = 370,
  ContactIconSvgLightLocalFileMode = 371,
  ContactIconSvgLightLocalFileModifiedTime = 372,
  ContactIconSvgLightLocalFileMtime = 373,
  ContactIconSvgLightLocalFileMtimeMs = 374,
  ContactIconSvgLightLocalFileName = 375,
  ContactIconSvgLightLocalFileNlink = 376,
  ContactIconSvgLightLocalFilePrettySize = 377,
  ContactIconSvgLightLocalFilePublicUrl = 378,
  ContactIconSvgLightLocalFileRdev = 379,
  ContactIconSvgLightLocalFileRelativeDirectory = 380,
  ContactIconSvgLightLocalFileRelativePath = 381,
  ContactIconSvgLightLocalFileRoot = 382,
  ContactIconSvgLightLocalFileSize = 383,
  ContactIconSvgLightLocalFileSourceInstanceName = 384,
  ContactIconSvgLightLocalFileUid = 385,
  ContactIconSvgLightLocalFileUrl = 386,
  ContactIconSvgLightNodeLocale = 387,
  ContactIconSvgLightParentChildren = 388,
  ContactIconSvgLightParentId = 389,
  ContactIconSvgLightSpaceId = 390,
  ContactIconSvgLightSysRevision = 391,
  ContactIconSvgLightSysType = 392,
  ContactIconSvgLightTitle = 393,
  ContactIconSvgLightUpdatedAt = 394,
  ContactIconChildContentfulIconSvgTextNodeChildren = 395,
  ContactIconChildContentfulIconSvgTextNodeChildrenMdx = 396,
  ContactIconChildContentfulIconSvgTextNodeId = 397,
  ContactIconChildContentfulIconSvgTextNodeSvg = 398,
  ContactIconChildren = 399,
  ContactIconChildrenContentfulIconSvgTextNode = 400,
  ContactIconChildrenContentfulIconSvgTextNodeChildren = 401,
  ContactIconChildrenContentfulIconSvgTextNodeChildrenMdx = 402,
  ContactIconChildrenContentfulIconSvgTextNodeId = 403,
  ContactIconChildrenContentfulIconSvgTextNodeSvg = 404,
  ContactIconChildrenChildren = 405,
  ContactIconChildrenId = 406,
  ContactIconContact = 407,
  ContactIconContactChildren = 408,
  ContactIconContactContentfulId = 409,
  ContactIconContactCreatedAt = 410,
  ContactIconContactHref = 411,
  ContactIconContactId = 412,
  ContactIconContactName = 413,
  ContactIconContactNodeLocale = 414,
  ContactIconContactSortKey = 415,
  ContactIconContactSpaceId = 416,
  ContactIconContactSubName = 417,
  ContactIconContactUpdatedAt = 418,
  ContactIconContentfulId = 419,
  ContactIconCreatedAt = 420,
  ContactIconHistory = 421,
  ContactIconHistoryChildren = 422,
  ContactIconHistoryContentfulId = 423,
  ContactIconHistoryCreatedAt = 424,
  ContactIconHistoryDate = 425,
  ContactIconHistoryId = 426,
  ContactIconHistoryName = 427,
  ContactIconHistoryNodeLocale = 428,
  ContactIconHistorySpaceId = 429,
  ContactIconHistorySubName = 430,
  ContactIconHistoryUpdatedAt = 431,
  ContactIconId = 432,
  ContactIconInternalContent = 433,
  ContactIconInternalContentDigest = 434,
  ContactIconInternalDescription = 435,
  ContactIconInternalFieldOwners = 436,
  ContactIconInternalIgnoreType = 437,
  ContactIconInternalMediaType = 438,
  ContactIconInternalOwner = 439,
  ContactIconInternalType = 440,
  ContactIconName = 441,
  ContactIconNodeLocale = 442,
  ContactIconOss = 443,
  ContactIconOssChildren = 444,
  ContactIconOssChildrenContentfulOssDetailTextNode = 445,
  ContactIconOssContentfulId = 446,
  ContactIconOssCreatedAt = 447,
  ContactIconOssHref = 448,
  ContactIconOssId = 449,
  ContactIconOssName = 450,
  ContactIconOssNodeLocale = 451,
  ContactIconOssSpaceId = 452,
  ContactIconOssStartDate = 453,
  ContactIconOssSubName = 454,
  ContactIconOssTags = 455,
  ContactIconOssUpdatedAt = 456,
  ContactIconParentChildren = 457,
  ContactIconParentId = 458,
  ContactIconProject = 459,
  ContactIconProjectChildren = 460,
  ContactIconProjectChildrenContentfulProjectDetailTextNode = 461,
  ContactIconProjectContentfulId = 462,
  ContactIconProjectCreatedAt = 463,
  ContactIconProjectEndDate = 464,
  ContactIconProjectId = 465,
  ContactIconProjectName = 466,
  ContactIconProjectNodeLocale = 467,
  ContactIconProjectSpaceId = 468,
  ContactIconProjectStartDate = 469,
  ContactIconProjectSubName = 470,
  ContactIconProjectTags = 471,
  ContactIconProjectUpdatedAt = 472,
  ContactIconSpaceId = 473,
  ContactIconSvgChildren = 474,
  ContactIconSvgChildrenMdx = 475,
  ContactIconSvgId = 476,
  ContactIconSvgSvg = 477,
  ContactIconSysRevision = 478,
  ContactIconSysType = 479,
  ContactIconUpdatedAt = 480,
  ContactIconWhatICanDo = 481,
  ContactIconWhatICanDoChildren = 482,
  ContactIconWhatICanDoContentfulId = 483,
  ContactIconWhatICanDoCreatedAt = 484,
  ContactIconWhatICanDoId = 485,
  ContactIconWhatICanDoName = 486,
  ContactIconWhatICanDoNodeLocale = 487,
  ContactIconWhatICanDoSortKey = 488,
  ContactIconWhatICanDoSpaceId = 489,
  ContactIconWhatICanDoSubName = 490,
  ContactIconWhatICanDoUpdatedAt = 491,
  ContactId = 492,
  ContactInternalContent = 493,
  ContactInternalContentDigest = 494,
  ContactInternalDescription = 495,
  ContactInternalFieldOwners = 496,
  ContactInternalIgnoreType = 497,
  ContactInternalMediaType = 498,
  ContactInternalOwner = 499,
  ContactInternalType = 500,
  ContactName = 501,
  ContactNodeLocale = 502,
  ContactParentChildren = 503,
  ContactParentChildrenChildren = 504,
  ContactParentChildrenId = 505,
  ContactParentId = 506,
  ContactParentInternalContent = 507,
  ContactParentInternalContentDigest = 508,
  ContactParentInternalDescription = 509,
  ContactParentInternalFieldOwners = 510,
  ContactParentInternalIgnoreType = 511,
  ContactParentInternalMediaType = 512,
  ContactParentInternalOwner = 513,
  ContactParentInternalType = 514,
  ContactParentParentChildren = 515,
  ContactParentParentId = 516,
  ContactSortKey = 517,
  ContactSpaceId = 518,
  ContactSubName = 519,
  ContactSysRevision = 520,
  ContactSysType = 521,
  ContactUpdatedAt = 522,
  ContentfulId = 523,
  CreatedAt = 524,
  History = 525,
  HistoryChildren = 526,
  HistoryChildrenChildren = 527,
  HistoryChildrenChildrenChildren = 528,
  HistoryChildrenChildrenId = 529,
  HistoryChildrenId = 530,
  HistoryChildrenInternalContent = 531,
  HistoryChildrenInternalContentDigest = 532,
  HistoryChildrenInternalDescription = 533,
  HistoryChildrenInternalFieldOwners = 534,
  HistoryChildrenInternalIgnoreType = 535,
  HistoryChildrenInternalMediaType = 536,
  HistoryChildrenInternalOwner = 537,
  HistoryChildrenInternalType = 538,
  HistoryChildrenParentChildren = 539,
  HistoryChildrenParentId = 540,
  HistoryContentfulId = 541,
  HistoryCreatedAt = 542,
  HistoryDate = 543,
  HistoryIconChildContentfulIconSvgTextNodeChildren = 544,
  HistoryIconChildContentfulIconSvgTextNodeChildrenMdx = 545,
  HistoryIconChildContentfulIconSvgTextNodeId = 546,
  HistoryIconChildContentfulIconSvgTextNodeSvg = 547,
  HistoryIconChildren = 548,
  HistoryIconChildrenContentfulIconSvgTextNode = 549,
  HistoryIconChildrenContentfulIconSvgTextNodeChildren = 550,
  HistoryIconChildrenContentfulIconSvgTextNodeChildrenMdx = 551,
  HistoryIconChildrenContentfulIconSvgTextNodeId = 552,
  HistoryIconChildrenContentfulIconSvgTextNodeSvg = 553,
  HistoryIconChildrenChildren = 554,
  HistoryIconChildrenId = 555,
  HistoryIconContact = 556,
  HistoryIconContactChildren = 557,
  HistoryIconContactContentfulId = 558,
  HistoryIconContactCreatedAt = 559,
  HistoryIconContactHref = 560,
  HistoryIconContactId = 561,
  HistoryIconContactName = 562,
  HistoryIconContactNodeLocale = 563,
  HistoryIconContactSortKey = 564,
  HistoryIconContactSpaceId = 565,
  HistoryIconContactSubName = 566,
  HistoryIconContactUpdatedAt = 567,
  HistoryIconContentfulId = 568,
  HistoryIconCreatedAt = 569,
  HistoryIconHistory = 570,
  HistoryIconHistoryChildren = 571,
  HistoryIconHistoryContentfulId = 572,
  HistoryIconHistoryCreatedAt = 573,
  HistoryIconHistoryDate = 574,
  HistoryIconHistoryId = 575,
  HistoryIconHistoryName = 576,
  HistoryIconHistoryNodeLocale = 577,
  HistoryIconHistorySpaceId = 578,
  HistoryIconHistorySubName = 579,
  HistoryIconHistoryUpdatedAt = 580,
  HistoryIconId = 581,
  HistoryIconInternalContent = 582,
  HistoryIconInternalContentDigest = 583,
  HistoryIconInternalDescription = 584,
  HistoryIconInternalFieldOwners = 585,
  HistoryIconInternalIgnoreType = 586,
  HistoryIconInternalMediaType = 587,
  HistoryIconInternalOwner = 588,
  HistoryIconInternalType = 589,
  HistoryIconName = 590,
  HistoryIconNodeLocale = 591,
  HistoryIconOss = 592,
  HistoryIconOssChildren = 593,
  HistoryIconOssChildrenContentfulOssDetailTextNode = 594,
  HistoryIconOssContentfulId = 595,
  HistoryIconOssCreatedAt = 596,
  HistoryIconOssHref = 597,
  HistoryIconOssId = 598,
  HistoryIconOssName = 599,
  HistoryIconOssNodeLocale = 600,
  HistoryIconOssSpaceId = 601,
  HistoryIconOssStartDate = 602,
  HistoryIconOssSubName = 603,
  HistoryIconOssTags = 604,
  HistoryIconOssUpdatedAt = 605,
  HistoryIconParentChildren = 606,
  HistoryIconParentId = 607,
  HistoryIconProject = 608,
  HistoryIconProjectChildren = 609,
  HistoryIconProjectChildrenContentfulProjectDetailTextNode = 610,
  HistoryIconProjectContentfulId = 611,
  HistoryIconProjectCreatedAt = 612,
  HistoryIconProjectEndDate = 613,
  HistoryIconProjectId = 614,
  HistoryIconProjectName = 615,
  HistoryIconProjectNodeLocale = 616,
  HistoryIconProjectSpaceId = 617,
  HistoryIconProjectStartDate = 618,
  HistoryIconProjectSubName = 619,
  HistoryIconProjectTags = 620,
  HistoryIconProjectUpdatedAt = 621,
  HistoryIconSpaceId = 622,
  HistoryIconSvgChildren = 623,
  HistoryIconSvgChildrenMdx = 624,
  HistoryIconSvgId = 625,
  HistoryIconSvgSvg = 626,
  HistoryIconSysRevision = 627,
  HistoryIconSysType = 628,
  HistoryIconUpdatedAt = 629,
  HistoryIconWhatICanDo = 630,
  HistoryIconWhatICanDoChildren = 631,
  HistoryIconWhatICanDoContentfulId = 632,
  HistoryIconWhatICanDoCreatedAt = 633,
  HistoryIconWhatICanDoId = 634,
  HistoryIconWhatICanDoName = 635,
  HistoryIconWhatICanDoNodeLocale = 636,
  HistoryIconWhatICanDoSortKey = 637,
  HistoryIconWhatICanDoSpaceId = 638,
  HistoryIconWhatICanDoSubName = 639,
  HistoryIconWhatICanDoUpdatedAt = 640,
  HistoryId = 641,
  HistoryInternalContent = 642,
  HistoryInternalContentDigest = 643,
  HistoryInternalDescription = 644,
  HistoryInternalFieldOwners = 645,
  HistoryInternalIgnoreType = 646,
  HistoryInternalMediaType = 647,
  HistoryInternalOwner = 648,
  HistoryInternalType = 649,
  HistoryName = 650,
  HistoryNodeLocale = 651,
  HistoryParentChildren = 652,
  HistoryParentChildrenChildren = 653,
  HistoryParentChildrenId = 654,
  HistoryParentId = 655,
  HistoryParentInternalContent = 656,
  HistoryParentInternalContentDigest = 657,
  HistoryParentInternalDescription = 658,
  HistoryParentInternalFieldOwners = 659,
  HistoryParentInternalIgnoreType = 660,
  HistoryParentInternalMediaType = 661,
  HistoryParentInternalOwner = 662,
  HistoryParentInternalType = 663,
  HistoryParentParentChildren = 664,
  HistoryParentParentId = 665,
  HistorySpaceId = 666,
  HistorySubName = 667,
  HistorySysRevision = 668,
  HistorySysType = 669,
  HistoryUpdatedAt = 670,
  Id = 671,
  InternalContent = 672,
  InternalContentDigest = 673,
  InternalDescription = 674,
  InternalFieldOwners = 675,
  InternalIgnoreType = 676,
  InternalMediaType = 677,
  InternalOwner = 678,
  InternalType = 679,
  Name = 680,
  NodeLocale = 681,
  Oss = 682,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 683,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 684,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 685,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 686,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 687,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 688,
  OssChildContentfulOssDetailTextNodeChildMdxId = 689,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 690,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 691,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 692,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 693,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 694,
  OssChildContentfulOssDetailTextNodeChildren = 695,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 696,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 697,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 698,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 699,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 700,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 701,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 702,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 703,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 704,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 705,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 706,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 707,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 708,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 709,
  OssChildContentfulOssDetailTextNodeChildrenId = 710,
  OssChildContentfulOssDetailTextNodeDetail = 711,
  OssChildContentfulOssDetailTextNodeId = 712,
  OssChildContentfulOssDetailTextNodeInternalContent = 713,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 714,
  OssChildContentfulOssDetailTextNodeInternalDescription = 715,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 716,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 717,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 718,
  OssChildContentfulOssDetailTextNodeInternalOwner = 719,
  OssChildContentfulOssDetailTextNodeInternalType = 720,
  OssChildContentfulOssDetailTextNodeParentChildren = 721,
  OssChildContentfulOssDetailTextNodeParentId = 722,
  OssChildContentfulOssDetailTextNodeSysType = 723,
  OssChildren = 724,
  OssChildrenContentfulOssDetailTextNode = 725,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 726,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 727,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 728,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 729,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 730,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 731,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 732,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 733,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 734,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 735,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 736,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 737,
  OssChildrenContentfulOssDetailTextNodeChildren = 738,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 739,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 740,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 741,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 742,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 743,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 744,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 745,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 746,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 747,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 748,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 749,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 750,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 751,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 752,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 753,
  OssChildrenContentfulOssDetailTextNodeDetail = 754,
  OssChildrenContentfulOssDetailTextNodeId = 755,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 756,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 757,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 758,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 759,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 760,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 761,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 762,
  OssChildrenContentfulOssDetailTextNodeInternalType = 763,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 764,
  OssChildrenContentfulOssDetailTextNodeParentId = 765,
  OssChildrenContentfulOssDetailTextNodeSysType = 766,
  OssChildrenChildren = 767,
  OssChildrenChildrenChildren = 768,
  OssChildrenChildrenId = 769,
  OssChildrenId = 770,
  OssChildrenInternalContent = 771,
  OssChildrenInternalContentDigest = 772,
  OssChildrenInternalDescription = 773,
  OssChildrenInternalFieldOwners = 774,
  OssChildrenInternalIgnoreType = 775,
  OssChildrenInternalMediaType = 776,
  OssChildrenInternalOwner = 777,
  OssChildrenInternalType = 778,
  OssChildrenParentChildren = 779,
  OssChildrenParentId = 780,
  OssContentfulId = 781,
  OssCreatedAt = 782,
  OssDetailChildMdxBody = 783,
  OssDetailChildMdxChildren = 784,
  OssDetailChildMdxExcerpt = 785,
  OssDetailChildMdxFileAbsolutePath = 786,
  OssDetailChildMdxHeadings = 787,
  OssDetailChildMdxHtml = 788,
  OssDetailChildMdxId = 789,
  OssDetailChildMdxMdxAst = 790,
  OssDetailChildMdxRawBody = 791,
  OssDetailChildMdxSlug = 792,
  OssDetailChildMdxTableOfContents = 793,
  OssDetailChildMdxTimeToRead = 794,
  OssDetailChildren = 795,
  OssDetailChildrenMdx = 796,
  OssDetailChildrenMdxBody = 797,
  OssDetailChildrenMdxChildren = 798,
  OssDetailChildrenMdxExcerpt = 799,
  OssDetailChildrenMdxFileAbsolutePath = 800,
  OssDetailChildrenMdxHeadings = 801,
  OssDetailChildrenMdxHtml = 802,
  OssDetailChildrenMdxId = 803,
  OssDetailChildrenMdxMdxAst = 804,
  OssDetailChildrenMdxRawBody = 805,
  OssDetailChildrenMdxSlug = 806,
  OssDetailChildrenMdxTableOfContents = 807,
  OssDetailChildrenMdxTimeToRead = 808,
  OssDetailChildrenChildren = 809,
  OssDetailChildrenId = 810,
  OssDetailDetail = 811,
  OssDetailId = 812,
  OssDetailInternalContent = 813,
  OssDetailInternalContentDigest = 814,
  OssDetailInternalDescription = 815,
  OssDetailInternalFieldOwners = 816,
  OssDetailInternalIgnoreType = 817,
  OssDetailInternalMediaType = 818,
  OssDetailInternalOwner = 819,
  OssDetailInternalType = 820,
  OssDetailParentChildren = 821,
  OssDetailParentId = 822,
  OssDetailSysType = 823,
  OssHref = 824,
  OssIconChildContentfulIconSvgTextNodeChildren = 825,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 826,
  OssIconChildContentfulIconSvgTextNodeId = 827,
  OssIconChildContentfulIconSvgTextNodeSvg = 828,
  OssIconChildren = 829,
  OssIconChildrenContentfulIconSvgTextNode = 830,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 831,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 832,
  OssIconChildrenContentfulIconSvgTextNodeId = 833,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 834,
  OssIconChildrenChildren = 835,
  OssIconChildrenId = 836,
  OssIconContact = 837,
  OssIconContactChildren = 838,
  OssIconContactContentfulId = 839,
  OssIconContactCreatedAt = 840,
  OssIconContactHref = 841,
  OssIconContactId = 842,
  OssIconContactName = 843,
  OssIconContactNodeLocale = 844,
  OssIconContactSortKey = 845,
  OssIconContactSpaceId = 846,
  OssIconContactSubName = 847,
  OssIconContactUpdatedAt = 848,
  OssIconContentfulId = 849,
  OssIconCreatedAt = 850,
  OssIconHistory = 851,
  OssIconHistoryChildren = 852,
  OssIconHistoryContentfulId = 853,
  OssIconHistoryCreatedAt = 854,
  OssIconHistoryDate = 855,
  OssIconHistoryId = 856,
  OssIconHistoryName = 857,
  OssIconHistoryNodeLocale = 858,
  OssIconHistorySpaceId = 859,
  OssIconHistorySubName = 860,
  OssIconHistoryUpdatedAt = 861,
  OssIconId = 862,
  OssIconInternalContent = 863,
  OssIconInternalContentDigest = 864,
  OssIconInternalDescription = 865,
  OssIconInternalFieldOwners = 866,
  OssIconInternalIgnoreType = 867,
  OssIconInternalMediaType = 868,
  OssIconInternalOwner = 869,
  OssIconInternalType = 870,
  OssIconName = 871,
  OssIconNodeLocale = 872,
  OssIconOss = 873,
  OssIconOssChildren = 874,
  OssIconOssChildrenContentfulOssDetailTextNode = 875,
  OssIconOssContentfulId = 876,
  OssIconOssCreatedAt = 877,
  OssIconOssHref = 878,
  OssIconOssId = 879,
  OssIconOssName = 880,
  OssIconOssNodeLocale = 881,
  OssIconOssSpaceId = 882,
  OssIconOssStartDate = 883,
  OssIconOssSubName = 884,
  OssIconOssTags = 885,
  OssIconOssUpdatedAt = 886,
  OssIconParentChildren = 887,
  OssIconParentId = 888,
  OssIconProject = 889,
  OssIconProjectChildren = 890,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 891,
  OssIconProjectContentfulId = 892,
  OssIconProjectCreatedAt = 893,
  OssIconProjectEndDate = 894,
  OssIconProjectId = 895,
  OssIconProjectName = 896,
  OssIconProjectNodeLocale = 897,
  OssIconProjectSpaceId = 898,
  OssIconProjectStartDate = 899,
  OssIconProjectSubName = 900,
  OssIconProjectTags = 901,
  OssIconProjectUpdatedAt = 902,
  OssIconSpaceId = 903,
  OssIconSvgChildren = 904,
  OssIconSvgChildrenMdx = 905,
  OssIconSvgId = 906,
  OssIconSvgSvg = 907,
  OssIconSysRevision = 908,
  OssIconSysType = 909,
  OssIconUpdatedAt = 910,
  OssIconWhatICanDo = 911,
  OssIconWhatICanDoChildren = 912,
  OssIconWhatICanDoContentfulId = 913,
  OssIconWhatICanDoCreatedAt = 914,
  OssIconWhatICanDoId = 915,
  OssIconWhatICanDoName = 916,
  OssIconWhatICanDoNodeLocale = 917,
  OssIconWhatICanDoSortKey = 918,
  OssIconWhatICanDoSpaceId = 919,
  OssIconWhatICanDoSubName = 920,
  OssIconWhatICanDoUpdatedAt = 921,
  OssId = 922,
  OssImageChildren = 923,
  OssImageChildrenChildren = 924,
  OssImageChildrenId = 925,
  OssImageContentfulId = 926,
  OssImageCreatedAt = 927,
  OssImageDescription = 928,
  OssImageFieldsLocalFile = 929,
  OssImageFileContentType = 930,
  OssImageFileFileName = 931,
  OssImageFileUrl = 932,
  OssImageGatsbyImageData = 933,
  OssImageId = 934,
  OssImageInternalContent = 935,
  OssImageInternalContentDigest = 936,
  OssImageInternalDescription = 937,
  OssImageInternalFieldOwners = 938,
  OssImageInternalIgnoreType = 939,
  OssImageInternalMediaType = 940,
  OssImageInternalOwner = 941,
  OssImageInternalType = 942,
  OssImageLocalFileAbsolutePath = 943,
  OssImageLocalFileAccessTime = 944,
  OssImageLocalFileAtime = 945,
  OssImageLocalFileAtimeMs = 946,
  OssImageLocalFileBase = 947,
  OssImageLocalFileBirthTime = 948,
  OssImageLocalFileBirthtime = 949,
  OssImageLocalFileBirthtimeMs = 950,
  OssImageLocalFileBlksize = 951,
  OssImageLocalFileBlocks = 952,
  OssImageLocalFileChangeTime = 953,
  OssImageLocalFileChildren = 954,
  OssImageLocalFileChildrenImageSharp = 955,
  OssImageLocalFileChildrenLocale = 956,
  OssImageLocalFileCtime = 957,
  OssImageLocalFileCtimeMs = 958,
  OssImageLocalFileDev = 959,
  OssImageLocalFileDir = 960,
  OssImageLocalFileExt = 961,
  OssImageLocalFileExtension = 962,
  OssImageLocalFileGid = 963,
  OssImageLocalFileId = 964,
  OssImageLocalFileIno = 965,
  OssImageLocalFileMode = 966,
  OssImageLocalFileModifiedTime = 967,
  OssImageLocalFileMtime = 968,
  OssImageLocalFileMtimeMs = 969,
  OssImageLocalFileName = 970,
  OssImageLocalFileNlink = 971,
  OssImageLocalFilePrettySize = 972,
  OssImageLocalFilePublicUrl = 973,
  OssImageLocalFileRdev = 974,
  OssImageLocalFileRelativeDirectory = 975,
  OssImageLocalFileRelativePath = 976,
  OssImageLocalFileRoot = 977,
  OssImageLocalFileSize = 978,
  OssImageLocalFileSourceInstanceName = 979,
  OssImageLocalFileUid = 980,
  OssImageLocalFileUrl = 981,
  OssImageNodeLocale = 982,
  OssImageParentChildren = 983,
  OssImageParentId = 984,
  OssImageSpaceId = 985,
  OssImageSysRevision = 986,
  OssImageSysType = 987,
  OssImageTitle = 988,
  OssImageUpdatedAt = 989,
  OssInternalContent = 990,
  OssInternalContentDigest = 991,
  OssInternalDescription = 992,
  OssInternalFieldOwners = 993,
  OssInternalIgnoreType = 994,
  OssInternalMediaType = 995,
  OssInternalOwner = 996,
  OssInternalType = 997,
  OssName = 998,
  OssNodeLocale = 999,
  OssParentChildren = 1000,
  OssParentChildrenChildren = 1001,
  OssParentChildrenId = 1002,
  OssParentId = 1003,
  OssParentInternalContent = 1004,
  OssParentInternalContentDigest = 1005,
  OssParentInternalDescription = 1006,
  OssParentInternalFieldOwners = 1007,
  OssParentInternalIgnoreType = 1008,
  OssParentInternalMediaType = 1009,
  OssParentInternalOwner = 1010,
  OssParentInternalType = 1011,
  OssParentParentChildren = 1012,
  OssParentParentId = 1013,
  OssSpaceId = 1014,
  OssStartDate = 1015,
  OssSubName = 1016,
  OssSysRevision = 1017,
  OssSysType = 1018,
  OssTags = 1019,
  OssTagsBlogPost = 1020,
  OssTagsBlogPostChildren = 1021,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1022,
  OssTagsBlogPostContentfulId = 1023,
  OssTagsBlogPostCreated = 1024,
  OssTagsBlogPostCreatedAt = 1025,
  OssTagsBlogPostExcerpt = 1026,
  OssTagsBlogPostId = 1027,
  OssTagsBlogPostNodeLocale = 1028,
  OssTagsBlogPostSlug = 1029,
  OssTagsBlogPostSpaceId = 1030,
  OssTagsBlogPostTags = 1031,
  OssTagsBlogPostTitle = 1032,
  OssTagsBlogPostUpdated = 1033,
  OssTagsBlogPostUpdatedAt = 1034,
  OssTagsChildren = 1035,
  OssTagsChildrenChildren = 1036,
  OssTagsChildrenId = 1037,
  OssTagsContentfulId = 1038,
  OssTagsCreatedAt = 1039,
  OssTagsId = 1040,
  OssTagsInternalContent = 1041,
  OssTagsInternalContentDigest = 1042,
  OssTagsInternalDescription = 1043,
  OssTagsInternalFieldOwners = 1044,
  OssTagsInternalIgnoreType = 1045,
  OssTagsInternalMediaType = 1046,
  OssTagsInternalOwner = 1047,
  OssTagsInternalType = 1048,
  OssTagsLevel = 1049,
  OssTagsName = 1050,
  OssTagsNodeLocale = 1051,
  OssTagsOss = 1052,
  OssTagsOssChildren = 1053,
  OssTagsOssChildrenContentfulOssDetailTextNode = 1054,
  OssTagsOssContentfulId = 1055,
  OssTagsOssCreatedAt = 1056,
  OssTagsOssHref = 1057,
  OssTagsOssId = 1058,
  OssTagsOssName = 1059,
  OssTagsOssNodeLocale = 1060,
  OssTagsOssSpaceId = 1061,
  OssTagsOssStartDate = 1062,
  OssTagsOssSubName = 1063,
  OssTagsOssTags = 1064,
  OssTagsOssUpdatedAt = 1065,
  OssTagsParentChildren = 1066,
  OssTagsParentId = 1067,
  OssTagsProject = 1068,
  OssTagsProjectChildren = 1069,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 1070,
  OssTagsProjectContentfulId = 1071,
  OssTagsProjectCreatedAt = 1072,
  OssTagsProjectEndDate = 1073,
  OssTagsProjectId = 1074,
  OssTagsProjectName = 1075,
  OssTagsProjectNodeLocale = 1076,
  OssTagsProjectSpaceId = 1077,
  OssTagsProjectStartDate = 1078,
  OssTagsProjectSubName = 1079,
  OssTagsProjectTags = 1080,
  OssTagsProjectUpdatedAt = 1081,
  OssTagsSkillMap = 1082,
  OssTagsSkillMapChildren = 1083,
  OssTagsSkillMapContentfulId = 1084,
  OssTagsSkillMapCreatedAt = 1085,
  OssTagsSkillMapExpanded = 1086,
  OssTagsSkillMapId = 1087,
  OssTagsSkillMapName = 1088,
  OssTagsSkillMapNodeLocale = 1089,
  OssTagsSkillMapSkills = 1090,
  OssTagsSkillMapSortKey = 1091,
  OssTagsSkillMapSpaceId = 1092,
  OssTagsSkillMapUpdatedAt = 1093,
  OssTagsSpaceId = 1094,
  OssTagsSysRevision = 1095,
  OssTagsSysType = 1096,
  OssTagsUpdatedAt = 1097,
  OssUpdatedAt = 1098,
  ParentChildren = 1099,
  ParentChildrenChildren = 1100,
  ParentChildrenChildrenChildren = 1101,
  ParentChildrenChildrenId = 1102,
  ParentChildrenId = 1103,
  ParentChildrenInternalContent = 1104,
  ParentChildrenInternalContentDigest = 1105,
  ParentChildrenInternalDescription = 1106,
  ParentChildrenInternalFieldOwners = 1107,
  ParentChildrenInternalIgnoreType = 1108,
  ParentChildrenInternalMediaType = 1109,
  ParentChildrenInternalOwner = 1110,
  ParentChildrenInternalType = 1111,
  ParentChildrenParentChildren = 1112,
  ParentChildrenParentId = 1113,
  ParentId = 1114,
  ParentInternalContent = 1115,
  ParentInternalContentDigest = 1116,
  ParentInternalDescription = 1117,
  ParentInternalFieldOwners = 1118,
  ParentInternalIgnoreType = 1119,
  ParentInternalMediaType = 1120,
  ParentInternalOwner = 1121,
  ParentInternalType = 1122,
  ParentParentChildren = 1123,
  ParentParentChildrenChildren = 1124,
  ParentParentChildrenId = 1125,
  ParentParentId = 1126,
  ParentParentInternalContent = 1127,
  ParentParentInternalContentDigest = 1128,
  ParentParentInternalDescription = 1129,
  ParentParentInternalFieldOwners = 1130,
  ParentParentInternalIgnoreType = 1131,
  ParentParentInternalMediaType = 1132,
  ParentParentInternalOwner = 1133,
  ParentParentInternalType = 1134,
  ParentParentParentChildren = 1135,
  ParentParentParentId = 1136,
  Project = 1137,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 1138,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 1139,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 1140,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1141,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 1142,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 1143,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 1144,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 1145,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 1146,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 1147,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 1148,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 1149,
  ProjectChildContentfulProjectDetailTextNodeChildren = 1150,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1151,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 1152,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 1153,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1154,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1155,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 1156,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 1157,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 1158,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1159,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 1160,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 1161,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1162,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1163,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 1164,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 1165,
  ProjectChildContentfulProjectDetailTextNodeDetail = 1166,
  ProjectChildContentfulProjectDetailTextNodeId = 1167,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 1168,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 1169,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 1170,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 1171,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 1172,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 1173,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 1174,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 1175,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 1176,
  ProjectChildContentfulProjectDetailTextNodeParentId = 1177,
  ProjectChildContentfulProjectDetailTextNodeSysType = 1178,
  ProjectChildren = 1179,
  ProjectChildrenContentfulProjectDetailTextNode = 1180,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 1181,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 1182,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 1183,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1184,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 1185,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 1186,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 1187,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 1188,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 1189,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 1190,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 1191,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 1192,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 1193,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1194,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 1195,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 1196,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1197,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1198,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 1199,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 1200,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 1201,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1202,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 1203,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 1204,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1205,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1206,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 1207,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 1208,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 1209,
  ProjectChildrenContentfulProjectDetailTextNodeId = 1210,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 1211,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 1212,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 1213,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 1214,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 1215,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 1216,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 1217,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 1218,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 1219,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 1220,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 1221,
  ProjectChildrenChildren = 1222,
  ProjectChildrenChildrenChildren = 1223,
  ProjectChildrenChildrenId = 1224,
  ProjectChildrenId = 1225,
  ProjectChildrenInternalContent = 1226,
  ProjectChildrenInternalContentDigest = 1227,
  ProjectChildrenInternalDescription = 1228,
  ProjectChildrenInternalFieldOwners = 1229,
  ProjectChildrenInternalIgnoreType = 1230,
  ProjectChildrenInternalMediaType = 1231,
  ProjectChildrenInternalOwner = 1232,
  ProjectChildrenInternalType = 1233,
  ProjectChildrenParentChildren = 1234,
  ProjectChildrenParentId = 1235,
  ProjectContentfulId = 1236,
  ProjectCreatedAt = 1237,
  ProjectDetailChildMdxBody = 1238,
  ProjectDetailChildMdxChildren = 1239,
  ProjectDetailChildMdxExcerpt = 1240,
  ProjectDetailChildMdxFileAbsolutePath = 1241,
  ProjectDetailChildMdxHeadings = 1242,
  ProjectDetailChildMdxHtml = 1243,
  ProjectDetailChildMdxId = 1244,
  ProjectDetailChildMdxMdxAst = 1245,
  ProjectDetailChildMdxRawBody = 1246,
  ProjectDetailChildMdxSlug = 1247,
  ProjectDetailChildMdxTableOfContents = 1248,
  ProjectDetailChildMdxTimeToRead = 1249,
  ProjectDetailChildren = 1250,
  ProjectDetailChildrenMdx = 1251,
  ProjectDetailChildrenMdxBody = 1252,
  ProjectDetailChildrenMdxChildren = 1253,
  ProjectDetailChildrenMdxExcerpt = 1254,
  ProjectDetailChildrenMdxFileAbsolutePath = 1255,
  ProjectDetailChildrenMdxHeadings = 1256,
  ProjectDetailChildrenMdxHtml = 1257,
  ProjectDetailChildrenMdxId = 1258,
  ProjectDetailChildrenMdxMdxAst = 1259,
  ProjectDetailChildrenMdxRawBody = 1260,
  ProjectDetailChildrenMdxSlug = 1261,
  ProjectDetailChildrenMdxTableOfContents = 1262,
  ProjectDetailChildrenMdxTimeToRead = 1263,
  ProjectDetailChildrenChildren = 1264,
  ProjectDetailChildrenId = 1265,
  ProjectDetailDetail = 1266,
  ProjectDetailId = 1267,
  ProjectDetailInternalContent = 1268,
  ProjectDetailInternalContentDigest = 1269,
  ProjectDetailInternalDescription = 1270,
  ProjectDetailInternalFieldOwners = 1271,
  ProjectDetailInternalIgnoreType = 1272,
  ProjectDetailInternalMediaType = 1273,
  ProjectDetailInternalOwner = 1274,
  ProjectDetailInternalType = 1275,
  ProjectDetailParentChildren = 1276,
  ProjectDetailParentId = 1277,
  ProjectDetailSysType = 1278,
  ProjectEndDate = 1279,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1280,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 1281,
  ProjectIconChildContentfulIconSvgTextNodeId = 1282,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1283,
  ProjectIconChildren = 1284,
  ProjectIconChildrenContentfulIconSvgTextNode = 1285,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1286,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1287,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1288,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1289,
  ProjectIconChildrenChildren = 1290,
  ProjectIconChildrenId = 1291,
  ProjectIconContact = 1292,
  ProjectIconContactChildren = 1293,
  ProjectIconContactContentfulId = 1294,
  ProjectIconContactCreatedAt = 1295,
  ProjectIconContactHref = 1296,
  ProjectIconContactId = 1297,
  ProjectIconContactName = 1298,
  ProjectIconContactNodeLocale = 1299,
  ProjectIconContactSortKey = 1300,
  ProjectIconContactSpaceId = 1301,
  ProjectIconContactSubName = 1302,
  ProjectIconContactUpdatedAt = 1303,
  ProjectIconContentfulId = 1304,
  ProjectIconCreatedAt = 1305,
  ProjectIconHistory = 1306,
  ProjectIconHistoryChildren = 1307,
  ProjectIconHistoryContentfulId = 1308,
  ProjectIconHistoryCreatedAt = 1309,
  ProjectIconHistoryDate = 1310,
  ProjectIconHistoryId = 1311,
  ProjectIconHistoryName = 1312,
  ProjectIconHistoryNodeLocale = 1313,
  ProjectIconHistorySpaceId = 1314,
  ProjectIconHistorySubName = 1315,
  ProjectIconHistoryUpdatedAt = 1316,
  ProjectIconId = 1317,
  ProjectIconInternalContent = 1318,
  ProjectIconInternalContentDigest = 1319,
  ProjectIconInternalDescription = 1320,
  ProjectIconInternalFieldOwners = 1321,
  ProjectIconInternalIgnoreType = 1322,
  ProjectIconInternalMediaType = 1323,
  ProjectIconInternalOwner = 1324,
  ProjectIconInternalType = 1325,
  ProjectIconName = 1326,
  ProjectIconNodeLocale = 1327,
  ProjectIconOss = 1328,
  ProjectIconOssChildren = 1329,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1330,
  ProjectIconOssContentfulId = 1331,
  ProjectIconOssCreatedAt = 1332,
  ProjectIconOssHref = 1333,
  ProjectIconOssId = 1334,
  ProjectIconOssName = 1335,
  ProjectIconOssNodeLocale = 1336,
  ProjectIconOssSpaceId = 1337,
  ProjectIconOssStartDate = 1338,
  ProjectIconOssSubName = 1339,
  ProjectIconOssTags = 1340,
  ProjectIconOssUpdatedAt = 1341,
  ProjectIconParentChildren = 1342,
  ProjectIconParentId = 1343,
  ProjectIconProject = 1344,
  ProjectIconProjectChildren = 1345,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1346,
  ProjectIconProjectContentfulId = 1347,
  ProjectIconProjectCreatedAt = 1348,
  ProjectIconProjectEndDate = 1349,
  ProjectIconProjectId = 1350,
  ProjectIconProjectName = 1351,
  ProjectIconProjectNodeLocale = 1352,
  ProjectIconProjectSpaceId = 1353,
  ProjectIconProjectStartDate = 1354,
  ProjectIconProjectSubName = 1355,
  ProjectIconProjectTags = 1356,
  ProjectIconProjectUpdatedAt = 1357,
  ProjectIconSpaceId = 1358,
  ProjectIconSvgChildren = 1359,
  ProjectIconSvgChildrenMdx = 1360,
  ProjectIconSvgId = 1361,
  ProjectIconSvgSvg = 1362,
  ProjectIconSysRevision = 1363,
  ProjectIconSysType = 1364,
  ProjectIconUpdatedAt = 1365,
  ProjectIconWhatICanDo = 1366,
  ProjectIconWhatICanDoChildren = 1367,
  ProjectIconWhatICanDoContentfulId = 1368,
  ProjectIconWhatICanDoCreatedAt = 1369,
  ProjectIconWhatICanDoId = 1370,
  ProjectIconWhatICanDoName = 1371,
  ProjectIconWhatICanDoNodeLocale = 1372,
  ProjectIconWhatICanDoSortKey = 1373,
  ProjectIconWhatICanDoSpaceId = 1374,
  ProjectIconWhatICanDoSubName = 1375,
  ProjectIconWhatICanDoUpdatedAt = 1376,
  ProjectId = 1377,
  ProjectInternalContent = 1378,
  ProjectInternalContentDigest = 1379,
  ProjectInternalDescription = 1380,
  ProjectInternalFieldOwners = 1381,
  ProjectInternalIgnoreType = 1382,
  ProjectInternalMediaType = 1383,
  ProjectInternalOwner = 1384,
  ProjectInternalType = 1385,
  ProjectName = 1386,
  ProjectNodeLocale = 1387,
  ProjectParentChildren = 1388,
  ProjectParentChildrenChildren = 1389,
  ProjectParentChildrenId = 1390,
  ProjectParentId = 1391,
  ProjectParentInternalContent = 1392,
  ProjectParentInternalContentDigest = 1393,
  ProjectParentInternalDescription = 1394,
  ProjectParentInternalFieldOwners = 1395,
  ProjectParentInternalIgnoreType = 1396,
  ProjectParentInternalMediaType = 1397,
  ProjectParentInternalOwner = 1398,
  ProjectParentInternalType = 1399,
  ProjectParentParentChildren = 1400,
  ProjectParentParentId = 1401,
  ProjectSpaceId = 1402,
  ProjectStartDate = 1403,
  ProjectSubName = 1404,
  ProjectSysRevision = 1405,
  ProjectSysType = 1406,
  ProjectTags = 1407,
  ProjectTagsBlogPost = 1408,
  ProjectTagsBlogPostChildren = 1409,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1410,
  ProjectTagsBlogPostContentfulId = 1411,
  ProjectTagsBlogPostCreated = 1412,
  ProjectTagsBlogPostCreatedAt = 1413,
  ProjectTagsBlogPostExcerpt = 1414,
  ProjectTagsBlogPostId = 1415,
  ProjectTagsBlogPostNodeLocale = 1416,
  ProjectTagsBlogPostSlug = 1417,
  ProjectTagsBlogPostSpaceId = 1418,
  ProjectTagsBlogPostTags = 1419,
  ProjectTagsBlogPostTitle = 1420,
  ProjectTagsBlogPostUpdated = 1421,
  ProjectTagsBlogPostUpdatedAt = 1422,
  ProjectTagsChildren = 1423,
  ProjectTagsChildrenChildren = 1424,
  ProjectTagsChildrenId = 1425,
  ProjectTagsContentfulId = 1426,
  ProjectTagsCreatedAt = 1427,
  ProjectTagsId = 1428,
  ProjectTagsInternalContent = 1429,
  ProjectTagsInternalContentDigest = 1430,
  ProjectTagsInternalDescription = 1431,
  ProjectTagsInternalFieldOwners = 1432,
  ProjectTagsInternalIgnoreType = 1433,
  ProjectTagsInternalMediaType = 1434,
  ProjectTagsInternalOwner = 1435,
  ProjectTagsInternalType = 1436,
  ProjectTagsLevel = 1437,
  ProjectTagsName = 1438,
  ProjectTagsNodeLocale = 1439,
  ProjectTagsOss = 1440,
  ProjectTagsOssChildren = 1441,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1442,
  ProjectTagsOssContentfulId = 1443,
  ProjectTagsOssCreatedAt = 1444,
  ProjectTagsOssHref = 1445,
  ProjectTagsOssId = 1446,
  ProjectTagsOssName = 1447,
  ProjectTagsOssNodeLocale = 1448,
  ProjectTagsOssSpaceId = 1449,
  ProjectTagsOssStartDate = 1450,
  ProjectTagsOssSubName = 1451,
  ProjectTagsOssTags = 1452,
  ProjectTagsOssUpdatedAt = 1453,
  ProjectTagsParentChildren = 1454,
  ProjectTagsParentId = 1455,
  ProjectTagsProject = 1456,
  ProjectTagsProjectChildren = 1457,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1458,
  ProjectTagsProjectContentfulId = 1459,
  ProjectTagsProjectCreatedAt = 1460,
  ProjectTagsProjectEndDate = 1461,
  ProjectTagsProjectId = 1462,
  ProjectTagsProjectName = 1463,
  ProjectTagsProjectNodeLocale = 1464,
  ProjectTagsProjectSpaceId = 1465,
  ProjectTagsProjectStartDate = 1466,
  ProjectTagsProjectSubName = 1467,
  ProjectTagsProjectTags = 1468,
  ProjectTagsProjectUpdatedAt = 1469,
  ProjectTagsSkillMap = 1470,
  ProjectTagsSkillMapChildren = 1471,
  ProjectTagsSkillMapContentfulId = 1472,
  ProjectTagsSkillMapCreatedAt = 1473,
  ProjectTagsSkillMapExpanded = 1474,
  ProjectTagsSkillMapId = 1475,
  ProjectTagsSkillMapName = 1476,
  ProjectTagsSkillMapNodeLocale = 1477,
  ProjectTagsSkillMapSkills = 1478,
  ProjectTagsSkillMapSortKey = 1479,
  ProjectTagsSkillMapSpaceId = 1480,
  ProjectTagsSkillMapUpdatedAt = 1481,
  ProjectTagsSpaceId = 1482,
  ProjectTagsSysRevision = 1483,
  ProjectTagsSysType = 1484,
  ProjectTagsUpdatedAt = 1485,
  ProjectUpdatedAt = 1486,
  SpaceId = 1487,
  SvgChildMdxBody = 1488,
  SvgChildMdxChildren = 1489,
  SvgChildMdxChildrenChildren = 1490,
  SvgChildMdxChildrenId = 1491,
  SvgChildMdxExcerpt = 1492,
  SvgChildMdxFileAbsolutePath = 1493,
  SvgChildMdxFrontmatterTitle = 1494,
  SvgChildMdxHeadings = 1495,
  SvgChildMdxHeadingsDepth = 1496,
  SvgChildMdxHeadingsValue = 1497,
  SvgChildMdxHtml = 1498,
  SvgChildMdxId = 1499,
  SvgChildMdxInternalContent = 1500,
  SvgChildMdxInternalContentDigest = 1501,
  SvgChildMdxInternalDescription = 1502,
  SvgChildMdxInternalFieldOwners = 1503,
  SvgChildMdxInternalIgnoreType = 1504,
  SvgChildMdxInternalMediaType = 1505,
  SvgChildMdxInternalOwner = 1506,
  SvgChildMdxInternalType = 1507,
  SvgChildMdxMdxAst = 1508,
  SvgChildMdxParentChildren = 1509,
  SvgChildMdxParentId = 1510,
  SvgChildMdxRawBody = 1511,
  SvgChildMdxSlug = 1512,
  SvgChildMdxTableOfContents = 1513,
  SvgChildMdxTimeToRead = 1514,
  SvgChildMdxWordCountParagraphs = 1515,
  SvgChildMdxWordCountSentences = 1516,
  SvgChildMdxWordCountWords = 1517,
  SvgChildren = 1518,
  SvgChildrenMdx = 1519,
  SvgChildrenMdxBody = 1520,
  SvgChildrenMdxChildren = 1521,
  SvgChildrenMdxChildrenChildren = 1522,
  SvgChildrenMdxChildrenId = 1523,
  SvgChildrenMdxExcerpt = 1524,
  SvgChildrenMdxFileAbsolutePath = 1525,
  SvgChildrenMdxFrontmatterTitle = 1526,
  SvgChildrenMdxHeadings = 1527,
  SvgChildrenMdxHeadingsDepth = 1528,
  SvgChildrenMdxHeadingsValue = 1529,
  SvgChildrenMdxHtml = 1530,
  SvgChildrenMdxId = 1531,
  SvgChildrenMdxInternalContent = 1532,
  SvgChildrenMdxInternalContentDigest = 1533,
  SvgChildrenMdxInternalDescription = 1534,
  SvgChildrenMdxInternalFieldOwners = 1535,
  SvgChildrenMdxInternalIgnoreType = 1536,
  SvgChildrenMdxInternalMediaType = 1537,
  SvgChildrenMdxInternalOwner = 1538,
  SvgChildrenMdxInternalType = 1539,
  SvgChildrenMdxMdxAst = 1540,
  SvgChildrenMdxParentChildren = 1541,
  SvgChildrenMdxParentId = 1542,
  SvgChildrenMdxRawBody = 1543,
  SvgChildrenMdxSlug = 1544,
  SvgChildrenMdxTableOfContents = 1545,
  SvgChildrenMdxTimeToRead = 1546,
  SvgChildrenMdxWordCountParagraphs = 1547,
  SvgChildrenMdxWordCountSentences = 1548,
  SvgChildrenMdxWordCountWords = 1549,
  SvgChildrenChildren = 1550,
  SvgChildrenChildrenChildren = 1551,
  SvgChildrenChildrenId = 1552,
  SvgChildrenId = 1553,
  SvgChildrenInternalContent = 1554,
  SvgChildrenInternalContentDigest = 1555,
  SvgChildrenInternalDescription = 1556,
  SvgChildrenInternalFieldOwners = 1557,
  SvgChildrenInternalIgnoreType = 1558,
  SvgChildrenInternalMediaType = 1559,
  SvgChildrenInternalOwner = 1560,
  SvgChildrenInternalType = 1561,
  SvgChildrenParentChildren = 1562,
  SvgChildrenParentId = 1563,
  SvgId = 1564,
  SvgInternalContent = 1565,
  SvgInternalContentDigest = 1566,
  SvgInternalDescription = 1567,
  SvgInternalFieldOwners = 1568,
  SvgInternalIgnoreType = 1569,
  SvgInternalMediaType = 1570,
  SvgInternalOwner = 1571,
  SvgInternalType = 1572,
  SvgParentChildren = 1573,
  SvgParentChildrenChildren = 1574,
  SvgParentChildrenId = 1575,
  SvgParentId = 1576,
  SvgParentInternalContent = 1577,
  SvgParentInternalContentDigest = 1578,
  SvgParentInternalDescription = 1579,
  SvgParentInternalFieldOwners = 1580,
  SvgParentInternalIgnoreType = 1581,
  SvgParentInternalMediaType = 1582,
  SvgParentInternalOwner = 1583,
  SvgParentInternalType = 1584,
  SvgParentParentChildren = 1585,
  SvgParentParentId = 1586,
  SvgSvg = 1587,
  SvgSysType = 1588,
  SysContentTypeSysId = 1589,
  SysContentTypeSysLinkType = 1590,
  SysContentTypeSysType = 1591,
  SysRevision = 1592,
  SysType = 1593,
  UpdatedAt = 1594,
  WhatICanDo = 1595,
  WhatICanDoChildren = 1596,
  WhatICanDoChildrenChildren = 1597,
  WhatICanDoChildrenChildrenChildren = 1598,
  WhatICanDoChildrenChildrenId = 1599,
  WhatICanDoChildrenId = 1600,
  WhatICanDoChildrenInternalContent = 1601,
  WhatICanDoChildrenInternalContentDigest = 1602,
  WhatICanDoChildrenInternalDescription = 1603,
  WhatICanDoChildrenInternalFieldOwners = 1604,
  WhatICanDoChildrenInternalIgnoreType = 1605,
  WhatICanDoChildrenInternalMediaType = 1606,
  WhatICanDoChildrenInternalOwner = 1607,
  WhatICanDoChildrenInternalType = 1608,
  WhatICanDoChildrenParentChildren = 1609,
  WhatICanDoChildrenParentId = 1610,
  WhatICanDoContentfulId = 1611,
  WhatICanDoCreatedAt = 1612,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildren = 1613,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildrenMdx = 1614,
  WhatICanDoIconChildContentfulIconSvgTextNodeId = 1615,
  WhatICanDoIconChildContentfulIconSvgTextNodeSvg = 1616,
  WhatICanDoIconChildren = 1617,
  WhatICanDoIconChildrenContentfulIconSvgTextNode = 1618,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildren = 1619,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1620,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeId = 1621,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeSvg = 1622,
  WhatICanDoIconChildrenChildren = 1623,
  WhatICanDoIconChildrenId = 1624,
  WhatICanDoIconContact = 1625,
  WhatICanDoIconContactChildren = 1626,
  WhatICanDoIconContactContentfulId = 1627,
  WhatICanDoIconContactCreatedAt = 1628,
  WhatICanDoIconContactHref = 1629,
  WhatICanDoIconContactId = 1630,
  WhatICanDoIconContactName = 1631,
  WhatICanDoIconContactNodeLocale = 1632,
  WhatICanDoIconContactSortKey = 1633,
  WhatICanDoIconContactSpaceId = 1634,
  WhatICanDoIconContactSubName = 1635,
  WhatICanDoIconContactUpdatedAt = 1636,
  WhatICanDoIconContentfulId = 1637,
  WhatICanDoIconCreatedAt = 1638,
  WhatICanDoIconHistory = 1639,
  WhatICanDoIconHistoryChildren = 1640,
  WhatICanDoIconHistoryContentfulId = 1641,
  WhatICanDoIconHistoryCreatedAt = 1642,
  WhatICanDoIconHistoryDate = 1643,
  WhatICanDoIconHistoryId = 1644,
  WhatICanDoIconHistoryName = 1645,
  WhatICanDoIconHistoryNodeLocale = 1646,
  WhatICanDoIconHistorySpaceId = 1647,
  WhatICanDoIconHistorySubName = 1648,
  WhatICanDoIconHistoryUpdatedAt = 1649,
  WhatICanDoIconId = 1650,
  WhatICanDoIconInternalContent = 1651,
  WhatICanDoIconInternalContentDigest = 1652,
  WhatICanDoIconInternalDescription = 1653,
  WhatICanDoIconInternalFieldOwners = 1654,
  WhatICanDoIconInternalIgnoreType = 1655,
  WhatICanDoIconInternalMediaType = 1656,
  WhatICanDoIconInternalOwner = 1657,
  WhatICanDoIconInternalType = 1658,
  WhatICanDoIconName = 1659,
  WhatICanDoIconNodeLocale = 1660,
  WhatICanDoIconOss = 1661,
  WhatICanDoIconOssChildren = 1662,
  WhatICanDoIconOssChildrenContentfulOssDetailTextNode = 1663,
  WhatICanDoIconOssContentfulId = 1664,
  WhatICanDoIconOssCreatedAt = 1665,
  WhatICanDoIconOssHref = 1666,
  WhatICanDoIconOssId = 1667,
  WhatICanDoIconOssName = 1668,
  WhatICanDoIconOssNodeLocale = 1669,
  WhatICanDoIconOssSpaceId = 1670,
  WhatICanDoIconOssStartDate = 1671,
  WhatICanDoIconOssSubName = 1672,
  WhatICanDoIconOssTags = 1673,
  WhatICanDoIconOssUpdatedAt = 1674,
  WhatICanDoIconParentChildren = 1675,
  WhatICanDoIconParentId = 1676,
  WhatICanDoIconProject = 1677,
  WhatICanDoIconProjectChildren = 1678,
  WhatICanDoIconProjectChildrenContentfulProjectDetailTextNode = 1679,
  WhatICanDoIconProjectContentfulId = 1680,
  WhatICanDoIconProjectCreatedAt = 1681,
  WhatICanDoIconProjectEndDate = 1682,
  WhatICanDoIconProjectId = 1683,
  WhatICanDoIconProjectName = 1684,
  WhatICanDoIconProjectNodeLocale = 1685,
  WhatICanDoIconProjectSpaceId = 1686,
  WhatICanDoIconProjectStartDate = 1687,
  WhatICanDoIconProjectSubName = 1688,
  WhatICanDoIconProjectTags = 1689,
  WhatICanDoIconProjectUpdatedAt = 1690,
  WhatICanDoIconSpaceId = 1691,
  WhatICanDoIconSvgChildren = 1692,
  WhatICanDoIconSvgChildrenMdx = 1693,
  WhatICanDoIconSvgId = 1694,
  WhatICanDoIconSvgSvg = 1695,
  WhatICanDoIconSysRevision = 1696,
  WhatICanDoIconSysType = 1697,
  WhatICanDoIconUpdatedAt = 1698,
  WhatICanDoIconWhatICanDo = 1699,
  WhatICanDoIconWhatICanDoChildren = 1700,
  WhatICanDoIconWhatICanDoContentfulId = 1701,
  WhatICanDoIconWhatICanDoCreatedAt = 1702,
  WhatICanDoIconWhatICanDoId = 1703,
  WhatICanDoIconWhatICanDoName = 1704,
  WhatICanDoIconWhatICanDoNodeLocale = 1705,
  WhatICanDoIconWhatICanDoSortKey = 1706,
  WhatICanDoIconWhatICanDoSpaceId = 1707,
  WhatICanDoIconWhatICanDoSubName = 1708,
  WhatICanDoIconWhatICanDoUpdatedAt = 1709,
  WhatICanDoId = 1710,
  WhatICanDoInternalContent = 1711,
  WhatICanDoInternalContentDigest = 1712,
  WhatICanDoInternalDescription = 1713,
  WhatICanDoInternalFieldOwners = 1714,
  WhatICanDoInternalIgnoreType = 1715,
  WhatICanDoInternalMediaType = 1716,
  WhatICanDoInternalOwner = 1717,
  WhatICanDoInternalType = 1718,
  WhatICanDoName = 1719,
  WhatICanDoNodeLocale = 1720,
  WhatICanDoParentChildren = 1721,
  WhatICanDoParentChildrenChildren = 1722,
  WhatICanDoParentChildrenId = 1723,
  WhatICanDoParentId = 1724,
  WhatICanDoParentInternalContent = 1725,
  WhatICanDoParentInternalContentDigest = 1726,
  WhatICanDoParentInternalDescription = 1727,
  WhatICanDoParentInternalFieldOwners = 1728,
  WhatICanDoParentInternalIgnoreType = 1729,
  WhatICanDoParentInternalMediaType = 1730,
  WhatICanDoParentInternalOwner = 1731,
  WhatICanDoParentInternalType = 1732,
  WhatICanDoParentParentChildren = 1733,
  WhatICanDoParentParentId = 1734,
  WhatICanDoSortKey = 1735,
  WhatICanDoSpaceId = 1736,
  WhatICanDoSubName = 1737,
  WhatICanDoSysRevision = 1738,
  WhatICanDoSysType = 1739,
  WhatICanDoUpdatedAt = 1740
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
  IconContactIconSvgDarkGatsbyImageData = 455,
  IconContactIconSvgDarkId = 456,
  IconContactIconSvgDarkNodeLocale = 457,
  IconContactIconSvgDarkSpaceId = 458,
  IconContactIconSvgDarkTitle = 459,
  IconContactIconSvgDarkUpdatedAt = 460,
  IconContactIconSvgLightChildren = 461,
  IconContactIconSvgLightContentfulId = 462,
  IconContactIconSvgLightCreatedAt = 463,
  IconContactIconSvgLightDescription = 464,
  IconContactIconSvgLightGatsbyImageData = 465,
  IconContactIconSvgLightId = 466,
  IconContactIconSvgLightNodeLocale = 467,
  IconContactIconSvgLightSpaceId = 468,
  IconContactIconSvgLightTitle = 469,
  IconContactIconSvgLightUpdatedAt = 470,
  IconContactIconChildren = 471,
  IconContactIconChildrenContentfulIconSvgTextNode = 472,
  IconContactIconContact = 473,
  IconContactIconContentfulId = 474,
  IconContactIconCreatedAt = 475,
  IconContactIconHistory = 476,
  IconContactIconId = 477,
  IconContactIconName = 478,
  IconContactIconNodeLocale = 479,
  IconContactIconOss = 480,
  IconContactIconProject = 481,
  IconContactIconSpaceId = 482,
  IconContactIconUpdatedAt = 483,
  IconContactIconWhatICanDo = 484,
  IconContactId = 485,
  IconContactInternalContent = 486,
  IconContactInternalContentDigest = 487,
  IconContactInternalDescription = 488,
  IconContactInternalFieldOwners = 489,
  IconContactInternalIgnoreType = 490,
  IconContactInternalMediaType = 491,
  IconContactInternalOwner = 492,
  IconContactInternalType = 493,
  IconContactName = 494,
  IconContactNodeLocale = 495,
  IconContactParentChildren = 496,
  IconContactParentId = 497,
  IconContactSortKey = 498,
  IconContactSpaceId = 499,
  IconContactSubName = 500,
  IconContactSysRevision = 501,
  IconContactSysType = 502,
  IconContactUpdatedAt = 503,
  IconContentfulId = 504,
  IconCreatedAt = 505,
  IconHistory = 506,
  IconHistoryChildren = 507,
  IconHistoryChildrenChildren = 508,
  IconHistoryChildrenId = 509,
  IconHistoryContentfulId = 510,
  IconHistoryCreatedAt = 511,
  IconHistoryDate = 512,
  IconHistoryIconChildren = 513,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 514,
  IconHistoryIconContact = 515,
  IconHistoryIconContentfulId = 516,
  IconHistoryIconCreatedAt = 517,
  IconHistoryIconHistory = 518,
  IconHistoryIconId = 519,
  IconHistoryIconName = 520,
  IconHistoryIconNodeLocale = 521,
  IconHistoryIconOss = 522,
  IconHistoryIconProject = 523,
  IconHistoryIconSpaceId = 524,
  IconHistoryIconUpdatedAt = 525,
  IconHistoryIconWhatICanDo = 526,
  IconHistoryId = 527,
  IconHistoryInternalContent = 528,
  IconHistoryInternalContentDigest = 529,
  IconHistoryInternalDescription = 530,
  IconHistoryInternalFieldOwners = 531,
  IconHistoryInternalIgnoreType = 532,
  IconHistoryInternalMediaType = 533,
  IconHistoryInternalOwner = 534,
  IconHistoryInternalType = 535,
  IconHistoryName = 536,
  IconHistoryNodeLocale = 537,
  IconHistoryParentChildren = 538,
  IconHistoryParentId = 539,
  IconHistorySpaceId = 540,
  IconHistorySubName = 541,
  IconHistorySysRevision = 542,
  IconHistorySysType = 543,
  IconHistoryUpdatedAt = 544,
  IconId = 545,
  IconInternalContent = 546,
  IconInternalContentDigest = 547,
  IconInternalDescription = 548,
  IconInternalFieldOwners = 549,
  IconInternalIgnoreType = 550,
  IconInternalMediaType = 551,
  IconInternalOwner = 552,
  IconInternalType = 553,
  IconName = 554,
  IconNodeLocale = 555,
  IconOss = 556,
  IconOssChildContentfulOssDetailTextNodeChildren = 557,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 558,
  IconOssChildContentfulOssDetailTextNodeDetail = 559,
  IconOssChildContentfulOssDetailTextNodeId = 560,
  IconOssChildren = 561,
  IconOssChildrenContentfulOssDetailTextNode = 562,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 563,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 564,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 565,
  IconOssChildrenContentfulOssDetailTextNodeId = 566,
  IconOssChildrenChildren = 567,
  IconOssChildrenId = 568,
  IconOssContentfulId = 569,
  IconOssCreatedAt = 570,
  IconOssDetailChildren = 571,
  IconOssDetailChildrenMdx = 572,
  IconOssDetailDetail = 573,
  IconOssDetailId = 574,
  IconOssHref = 575,
  IconOssIconChildren = 576,
  IconOssIconChildrenContentfulIconSvgTextNode = 577,
  IconOssIconContact = 578,
  IconOssIconContentfulId = 579,
  IconOssIconCreatedAt = 580,
  IconOssIconHistory = 581,
  IconOssIconId = 582,
  IconOssIconName = 583,
  IconOssIconNodeLocale = 584,
  IconOssIconOss = 585,
  IconOssIconProject = 586,
  IconOssIconSpaceId = 587,
  IconOssIconUpdatedAt = 588,
  IconOssIconWhatICanDo = 589,
  IconOssId = 590,
  IconOssImageChildren = 591,
  IconOssImageContentfulId = 592,
  IconOssImageCreatedAt = 593,
  IconOssImageDescription = 594,
  IconOssImageGatsbyImageData = 595,
  IconOssImageId = 596,
  IconOssImageNodeLocale = 597,
  IconOssImageSpaceId = 598,
  IconOssImageTitle = 599,
  IconOssImageUpdatedAt = 600,
  IconOssInternalContent = 601,
  IconOssInternalContentDigest = 602,
  IconOssInternalDescription = 603,
  IconOssInternalFieldOwners = 604,
  IconOssInternalIgnoreType = 605,
  IconOssInternalMediaType = 606,
  IconOssInternalOwner = 607,
  IconOssInternalType = 608,
  IconOssName = 609,
  IconOssNodeLocale = 610,
  IconOssParentChildren = 611,
  IconOssParentId = 612,
  IconOssSpaceId = 613,
  IconOssStartDate = 614,
  IconOssSubName = 615,
  IconOssSysRevision = 616,
  IconOssSysType = 617,
  IconOssTags = 618,
  IconOssTagsBlogPost = 619,
  IconOssTagsChildren = 620,
  IconOssTagsContentfulId = 621,
  IconOssTagsCreatedAt = 622,
  IconOssTagsId = 623,
  IconOssTagsLevel = 624,
  IconOssTagsName = 625,
  IconOssTagsNodeLocale = 626,
  IconOssTagsOss = 627,
  IconOssTagsProject = 628,
  IconOssTagsSkillMap = 629,
  IconOssTagsSpaceId = 630,
  IconOssTagsUpdatedAt = 631,
  IconOssUpdatedAt = 632,
  IconParentChildren = 633,
  IconParentChildrenChildren = 634,
  IconParentChildrenId = 635,
  IconParentId = 636,
  IconParentInternalContent = 637,
  IconParentInternalContentDigest = 638,
  IconParentInternalDescription = 639,
  IconParentInternalFieldOwners = 640,
  IconParentInternalIgnoreType = 641,
  IconParentInternalMediaType = 642,
  IconParentInternalOwner = 643,
  IconParentInternalType = 644,
  IconParentParentChildren = 645,
  IconParentParentId = 646,
  IconProject = 647,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 648,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 649,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 650,
  IconProjectChildContentfulProjectDetailTextNodeId = 651,
  IconProjectChildren = 652,
  IconProjectChildrenContentfulProjectDetailTextNode = 653,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 654,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 655,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 656,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 657,
  IconProjectChildrenChildren = 658,
  IconProjectChildrenId = 659,
  IconProjectContentfulId = 660,
  IconProjectCreatedAt = 661,
  IconProjectDetailChildren = 662,
  IconProjectDetailChildrenMdx = 663,
  IconProjectDetailDetail = 664,
  IconProjectDetailId = 665,
  IconProjectEndDate = 666,
  IconProjectIconChildren = 667,
  IconProjectIconChildrenContentfulIconSvgTextNode = 668,
  IconProjectIconContact = 669,
  IconProjectIconContentfulId = 670,
  IconProjectIconCreatedAt = 671,
  IconProjectIconHistory = 672,
  IconProjectIconId = 673,
  IconProjectIconName = 674,
  IconProjectIconNodeLocale = 675,
  IconProjectIconOss = 676,
  IconProjectIconProject = 677,
  IconProjectIconSpaceId = 678,
  IconProjectIconUpdatedAt = 679,
  IconProjectIconWhatICanDo = 680,
  IconProjectId = 681,
  IconProjectInternalContent = 682,
  IconProjectInternalContentDigest = 683,
  IconProjectInternalDescription = 684,
  IconProjectInternalFieldOwners = 685,
  IconProjectInternalIgnoreType = 686,
  IconProjectInternalMediaType = 687,
  IconProjectInternalOwner = 688,
  IconProjectInternalType = 689,
  IconProjectName = 690,
  IconProjectNodeLocale = 691,
  IconProjectParentChildren = 692,
  IconProjectParentId = 693,
  IconProjectSpaceId = 694,
  IconProjectStartDate = 695,
  IconProjectSubName = 696,
  IconProjectSysRevision = 697,
  IconProjectSysType = 698,
  IconProjectTags = 699,
  IconProjectTagsBlogPost = 700,
  IconProjectTagsChildren = 701,
  IconProjectTagsContentfulId = 702,
  IconProjectTagsCreatedAt = 703,
  IconProjectTagsId = 704,
  IconProjectTagsLevel = 705,
  IconProjectTagsName = 706,
  IconProjectTagsNodeLocale = 707,
  IconProjectTagsOss = 708,
  IconProjectTagsProject = 709,
  IconProjectTagsSkillMap = 710,
  IconProjectTagsSpaceId = 711,
  IconProjectTagsUpdatedAt = 712,
  IconProjectUpdatedAt = 713,
  IconSpaceId = 714,
  IconSvgChildMdxBody = 715,
  IconSvgChildMdxChildren = 716,
  IconSvgChildMdxExcerpt = 717,
  IconSvgChildMdxFileAbsolutePath = 718,
  IconSvgChildMdxHeadings = 719,
  IconSvgChildMdxHtml = 720,
  IconSvgChildMdxId = 721,
  IconSvgChildMdxMdxAst = 722,
  IconSvgChildMdxRawBody = 723,
  IconSvgChildMdxSlug = 724,
  IconSvgChildMdxTableOfContents = 725,
  IconSvgChildMdxTimeToRead = 726,
  IconSvgChildren = 727,
  IconSvgChildrenMdx = 728,
  IconSvgChildrenMdxBody = 729,
  IconSvgChildrenMdxChildren = 730,
  IconSvgChildrenMdxExcerpt = 731,
  IconSvgChildrenMdxFileAbsolutePath = 732,
  IconSvgChildrenMdxHeadings = 733,
  IconSvgChildrenMdxHtml = 734,
  IconSvgChildrenMdxId = 735,
  IconSvgChildrenMdxMdxAst = 736,
  IconSvgChildrenMdxRawBody = 737,
  IconSvgChildrenMdxSlug = 738,
  IconSvgChildrenMdxTableOfContents = 739,
  IconSvgChildrenMdxTimeToRead = 740,
  IconSvgChildrenChildren = 741,
  IconSvgChildrenId = 742,
  IconSvgId = 743,
  IconSvgInternalContent = 744,
  IconSvgInternalContentDigest = 745,
  IconSvgInternalDescription = 746,
  IconSvgInternalFieldOwners = 747,
  IconSvgInternalIgnoreType = 748,
  IconSvgInternalMediaType = 749,
  IconSvgInternalOwner = 750,
  IconSvgInternalType = 751,
  IconSvgParentChildren = 752,
  IconSvgParentId = 753,
  IconSvgSvg = 754,
  IconSvgSysType = 755,
  IconSysRevision = 756,
  IconSysType = 757,
  IconUpdatedAt = 758,
  IconWhatICanDo = 759,
  IconWhatICanDoChildren = 760,
  IconWhatICanDoChildrenChildren = 761,
  IconWhatICanDoChildrenId = 762,
  IconWhatICanDoContentfulId = 763,
  IconWhatICanDoCreatedAt = 764,
  IconWhatICanDoIconChildren = 765,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 766,
  IconWhatICanDoIconContact = 767,
  IconWhatICanDoIconContentfulId = 768,
  IconWhatICanDoIconCreatedAt = 769,
  IconWhatICanDoIconHistory = 770,
  IconWhatICanDoIconId = 771,
  IconWhatICanDoIconName = 772,
  IconWhatICanDoIconNodeLocale = 773,
  IconWhatICanDoIconOss = 774,
  IconWhatICanDoIconProject = 775,
  IconWhatICanDoIconSpaceId = 776,
  IconWhatICanDoIconUpdatedAt = 777,
  IconWhatICanDoIconWhatICanDo = 778,
  IconWhatICanDoId = 779,
  IconWhatICanDoInternalContent = 780,
  IconWhatICanDoInternalContentDigest = 781,
  IconWhatICanDoInternalDescription = 782,
  IconWhatICanDoInternalFieldOwners = 783,
  IconWhatICanDoInternalIgnoreType = 784,
  IconWhatICanDoInternalMediaType = 785,
  IconWhatICanDoInternalOwner = 786,
  IconWhatICanDoInternalType = 787,
  IconWhatICanDoName = 788,
  IconWhatICanDoNodeLocale = 789,
  IconWhatICanDoParentChildren = 790,
  IconWhatICanDoParentId = 791,
  IconWhatICanDoSortKey = 792,
  IconWhatICanDoSpaceId = 793,
  IconWhatICanDoSubName = 794,
  IconWhatICanDoSysRevision = 795,
  IconWhatICanDoSysType = 796,
  IconWhatICanDoUpdatedAt = 797,
  Id = 798,
  ImageChildren = 799,
  ImageChildrenChildren = 800,
  ImageChildrenChildrenChildren = 801,
  ImageChildrenChildrenId = 802,
  ImageChildrenId = 803,
  ImageChildrenInternalContent = 804,
  ImageChildrenInternalContentDigest = 805,
  ImageChildrenInternalDescription = 806,
  ImageChildrenInternalFieldOwners = 807,
  ImageChildrenInternalIgnoreType = 808,
  ImageChildrenInternalMediaType = 809,
  ImageChildrenInternalOwner = 810,
  ImageChildrenInternalType = 811,
  ImageChildrenParentChildren = 812,
  ImageChildrenParentId = 813,
  ImageContentfulId = 814,
  ImageCreatedAt = 815,
  ImageDescription = 816,
  ImageFieldsLocalFile = 817,
  ImageFileContentType = 818,
  ImageFileDetailsSize = 819,
  ImageFileFileName = 820,
  ImageFileUrl = 821,
  ImageGatsbyImageData = 822,
  ImageId = 823,
  ImageInternalContent = 824,
  ImageInternalContentDigest = 825,
  ImageInternalDescription = 826,
  ImageInternalFieldOwners = 827,
  ImageInternalIgnoreType = 828,
  ImageInternalMediaType = 829,
  ImageInternalOwner = 830,
  ImageInternalType = 831,
  ImageLocalFileAbsolutePath = 832,
  ImageLocalFileAccessTime = 833,
  ImageLocalFileAtime = 834,
  ImageLocalFileAtimeMs = 835,
  ImageLocalFileBase = 836,
  ImageLocalFileBirthTime = 837,
  ImageLocalFileBirthtime = 838,
  ImageLocalFileBirthtimeMs = 839,
  ImageLocalFileBlksize = 840,
  ImageLocalFileBlocks = 841,
  ImageLocalFileChangeTime = 842,
  ImageLocalFileChildImageSharpChildren = 843,
  ImageLocalFileChildImageSharpGatsbyImageData = 844,
  ImageLocalFileChildImageSharpId = 845,
  ImageLocalFileChildLocaleChildren = 846,
  ImageLocalFileChildLocaleData = 847,
  ImageLocalFileChildLocaleFileAbsolutePath = 848,
  ImageLocalFileChildLocaleId = 849,
  ImageLocalFileChildLocaleLanguage = 850,
  ImageLocalFileChildLocaleNs = 851,
  ImageLocalFileChildren = 852,
  ImageLocalFileChildrenImageSharp = 853,
  ImageLocalFileChildrenImageSharpChildren = 854,
  ImageLocalFileChildrenImageSharpGatsbyImageData = 855,
  ImageLocalFileChildrenImageSharpId = 856,
  ImageLocalFileChildrenLocale = 857,
  ImageLocalFileChildrenLocaleChildren = 858,
  ImageLocalFileChildrenLocaleData = 859,
  ImageLocalFileChildrenLocaleFileAbsolutePath = 860,
  ImageLocalFileChildrenLocaleId = 861,
  ImageLocalFileChildrenLocaleLanguage = 862,
  ImageLocalFileChildrenLocaleNs = 863,
  ImageLocalFileChildrenChildren = 864,
  ImageLocalFileChildrenId = 865,
  ImageLocalFileCtime = 866,
  ImageLocalFileCtimeMs = 867,
  ImageLocalFileDev = 868,
  ImageLocalFileDir = 869,
  ImageLocalFileExt = 870,
  ImageLocalFileExtension = 871,
  ImageLocalFileGid = 872,
  ImageLocalFileId = 873,
  ImageLocalFileIno = 874,
  ImageLocalFileInternalContent = 875,
  ImageLocalFileInternalContentDigest = 876,
  ImageLocalFileInternalDescription = 877,
  ImageLocalFileInternalFieldOwners = 878,
  ImageLocalFileInternalIgnoreType = 879,
  ImageLocalFileInternalMediaType = 880,
  ImageLocalFileInternalOwner = 881,
  ImageLocalFileInternalType = 882,
  ImageLocalFileMode = 883,
  ImageLocalFileModifiedTime = 884,
  ImageLocalFileMtime = 885,
  ImageLocalFileMtimeMs = 886,
  ImageLocalFileName = 887,
  ImageLocalFileNlink = 888,
  ImageLocalFileParentChildren = 889,
  ImageLocalFileParentId = 890,
  ImageLocalFilePrettySize = 891,
  ImageLocalFilePublicUrl = 892,
  ImageLocalFileRdev = 893,
  ImageLocalFileRelativeDirectory = 894,
  ImageLocalFileRelativePath = 895,
  ImageLocalFileRoot = 896,
  ImageLocalFileSize = 897,
  ImageLocalFileSourceInstanceName = 898,
  ImageLocalFileUid = 899,
  ImageLocalFileUrl = 900,
  ImageNodeLocale = 901,
  ImageParentChildren = 902,
  ImageParentChildrenChildren = 903,
  ImageParentChildrenId = 904,
  ImageParentId = 905,
  ImageParentInternalContent = 906,
  ImageParentInternalContentDigest = 907,
  ImageParentInternalDescription = 908,
  ImageParentInternalFieldOwners = 909,
  ImageParentInternalIgnoreType = 910,
  ImageParentInternalMediaType = 911,
  ImageParentInternalOwner = 912,
  ImageParentInternalType = 913,
  ImageParentParentChildren = 914,
  ImageParentParentId = 915,
  ImageSpaceId = 916,
  ImageSysRevision = 917,
  ImageSysType = 918,
  ImageTitle = 919,
  ImageUpdatedAt = 920,
  InternalContent = 921,
  InternalContentDigest = 922,
  InternalDescription = 923,
  InternalFieldOwners = 924,
  InternalIgnoreType = 925,
  InternalMediaType = 926,
  InternalOwner = 927,
  InternalType = 928,
  Name = 929,
  NodeLocale = 930,
  ParentChildren = 931,
  ParentChildrenChildren = 932,
  ParentChildrenChildrenChildren = 933,
  ParentChildrenChildrenId = 934,
  ParentChildrenId = 935,
  ParentChildrenInternalContent = 936,
  ParentChildrenInternalContentDigest = 937,
  ParentChildrenInternalDescription = 938,
  ParentChildrenInternalFieldOwners = 939,
  ParentChildrenInternalIgnoreType = 940,
  ParentChildrenInternalMediaType = 941,
  ParentChildrenInternalOwner = 942,
  ParentChildrenInternalType = 943,
  ParentChildrenParentChildren = 944,
  ParentChildrenParentId = 945,
  ParentId = 946,
  ParentInternalContent = 947,
  ParentInternalContentDigest = 948,
  ParentInternalDescription = 949,
  ParentInternalFieldOwners = 950,
  ParentInternalIgnoreType = 951,
  ParentInternalMediaType = 952,
  ParentInternalOwner = 953,
  ParentInternalType = 954,
  ParentParentChildren = 955,
  ParentParentChildrenChildren = 956,
  ParentParentChildrenId = 957,
  ParentParentId = 958,
  ParentParentInternalContent = 959,
  ParentParentInternalContentDigest = 960,
  ParentParentInternalDescription = 961,
  ParentParentInternalFieldOwners = 962,
  ParentParentInternalIgnoreType = 963,
  ParentParentInternalMediaType = 964,
  ParentParentInternalOwner = 965,
  ParentParentInternalType = 966,
  ParentParentParentChildren = 967,
  ParentParentParentId = 968,
  SpaceId = 969,
  StartDate = 970,
  SubName = 971,
  SysContentTypeSysId = 972,
  SysContentTypeSysLinkType = 973,
  SysContentTypeSysType = 974,
  SysRevision = 975,
  SysType = 976,
  Tags = 977,
  TagsBlogPost = 978,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 979,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 980,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 981,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 982,
  TagsBlogPostChildren = 983,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 984,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 985,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 986,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 987,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 988,
  TagsBlogPostChildrenChildren = 989,
  TagsBlogPostChildrenId = 990,
  TagsBlogPostContentChildren = 991,
  TagsBlogPostContentChildrenMdx = 992,
  TagsBlogPostContentContent = 993,
  TagsBlogPostContentId = 994,
  TagsBlogPostContentfulId = 995,
  TagsBlogPostCreated = 996,
  TagsBlogPostCreatedAt = 997,
  TagsBlogPostExcerpt = 998,
  TagsBlogPostId = 999,
  TagsBlogPostInternalContent = 1000,
  TagsBlogPostInternalContentDigest = 1001,
  TagsBlogPostInternalDescription = 1002,
  TagsBlogPostInternalFieldOwners = 1003,
  TagsBlogPostInternalIgnoreType = 1004,
  TagsBlogPostInternalMediaType = 1005,
  TagsBlogPostInternalOwner = 1006,
  TagsBlogPostInternalType = 1007,
  TagsBlogPostNodeLocale = 1008,
  TagsBlogPostParentChildren = 1009,
  TagsBlogPostParentId = 1010,
  TagsBlogPostSlug = 1011,
  TagsBlogPostSpaceId = 1012,
  TagsBlogPostSysRevision = 1013,
  TagsBlogPostSysType = 1014,
  TagsBlogPostTags = 1015,
  TagsBlogPostTagsBlogPost = 1016,
  TagsBlogPostTagsChildren = 1017,
  TagsBlogPostTagsContentfulId = 1018,
  TagsBlogPostTagsCreatedAt = 1019,
  TagsBlogPostTagsId = 1020,
  TagsBlogPostTagsLevel = 1021,
  TagsBlogPostTagsName = 1022,
  TagsBlogPostTagsNodeLocale = 1023,
  TagsBlogPostTagsOss = 1024,
  TagsBlogPostTagsProject = 1025,
  TagsBlogPostTagsSkillMap = 1026,
  TagsBlogPostTagsSpaceId = 1027,
  TagsBlogPostTagsUpdatedAt = 1028,
  TagsBlogPostTitle = 1029,
  TagsBlogPostUpdated = 1030,
  TagsBlogPostUpdatedAt = 1031,
  TagsChildren = 1032,
  TagsChildrenChildren = 1033,
  TagsChildrenChildrenChildren = 1034,
  TagsChildrenChildrenId = 1035,
  TagsChildrenId = 1036,
  TagsChildrenInternalContent = 1037,
  TagsChildrenInternalContentDigest = 1038,
  TagsChildrenInternalDescription = 1039,
  TagsChildrenInternalFieldOwners = 1040,
  TagsChildrenInternalIgnoreType = 1041,
  TagsChildrenInternalMediaType = 1042,
  TagsChildrenInternalOwner = 1043,
  TagsChildrenInternalType = 1044,
  TagsChildrenParentChildren = 1045,
  TagsChildrenParentId = 1046,
  TagsContentfulId = 1047,
  TagsCreatedAt = 1048,
  TagsId = 1049,
  TagsInternalContent = 1050,
  TagsInternalContentDigest = 1051,
  TagsInternalDescription = 1052,
  TagsInternalFieldOwners = 1053,
  TagsInternalIgnoreType = 1054,
  TagsInternalMediaType = 1055,
  TagsInternalOwner = 1056,
  TagsInternalType = 1057,
  TagsLevel = 1058,
  TagsName = 1059,
  TagsNodeLocale = 1060,
  TagsOss = 1061,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1062,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1063,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1064,
  TagsOssChildContentfulOssDetailTextNodeId = 1065,
  TagsOssChildren = 1066,
  TagsOssChildrenContentfulOssDetailTextNode = 1067,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1068,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1069,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1070,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1071,
  TagsOssChildrenChildren = 1072,
  TagsOssChildrenId = 1073,
  TagsOssContentfulId = 1074,
  TagsOssCreatedAt = 1075,
  TagsOssDetailChildren = 1076,
  TagsOssDetailChildrenMdx = 1077,
  TagsOssDetailDetail = 1078,
  TagsOssDetailId = 1079,
  TagsOssHref = 1080,
  TagsOssIconChildren = 1081,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1082,
  TagsOssIconContact = 1083,
  TagsOssIconContentfulId = 1084,
  TagsOssIconCreatedAt = 1085,
  TagsOssIconHistory = 1086,
  TagsOssIconId = 1087,
  TagsOssIconName = 1088,
  TagsOssIconNodeLocale = 1089,
  TagsOssIconOss = 1090,
  TagsOssIconProject = 1091,
  TagsOssIconSpaceId = 1092,
  TagsOssIconUpdatedAt = 1093,
  TagsOssIconWhatICanDo = 1094,
  TagsOssId = 1095,
  TagsOssImageChildren = 1096,
  TagsOssImageContentfulId = 1097,
  TagsOssImageCreatedAt = 1098,
  TagsOssImageDescription = 1099,
  TagsOssImageGatsbyImageData = 1100,
  TagsOssImageId = 1101,
  TagsOssImageNodeLocale = 1102,
  TagsOssImageSpaceId = 1103,
  TagsOssImageTitle = 1104,
  TagsOssImageUpdatedAt = 1105,
  TagsOssInternalContent = 1106,
  TagsOssInternalContentDigest = 1107,
  TagsOssInternalDescription = 1108,
  TagsOssInternalFieldOwners = 1109,
  TagsOssInternalIgnoreType = 1110,
  TagsOssInternalMediaType = 1111,
  TagsOssInternalOwner = 1112,
  TagsOssInternalType = 1113,
  TagsOssName = 1114,
  TagsOssNodeLocale = 1115,
  TagsOssParentChildren = 1116,
  TagsOssParentId = 1117,
  TagsOssSpaceId = 1118,
  TagsOssStartDate = 1119,
  TagsOssSubName = 1120,
  TagsOssSysRevision = 1121,
  TagsOssSysType = 1122,
  TagsOssTags = 1123,
  TagsOssTagsBlogPost = 1124,
  TagsOssTagsChildren = 1125,
  TagsOssTagsContentfulId = 1126,
  TagsOssTagsCreatedAt = 1127,
  TagsOssTagsId = 1128,
  TagsOssTagsLevel = 1129,
  TagsOssTagsName = 1130,
  TagsOssTagsNodeLocale = 1131,
  TagsOssTagsOss = 1132,
  TagsOssTagsProject = 1133,
  TagsOssTagsSkillMap = 1134,
  TagsOssTagsSpaceId = 1135,
  TagsOssTagsUpdatedAt = 1136,
  TagsOssUpdatedAt = 1137,
  TagsParentChildren = 1138,
  TagsParentChildrenChildren = 1139,
  TagsParentChildrenId = 1140,
  TagsParentId = 1141,
  TagsParentInternalContent = 1142,
  TagsParentInternalContentDigest = 1143,
  TagsParentInternalDescription = 1144,
  TagsParentInternalFieldOwners = 1145,
  TagsParentInternalIgnoreType = 1146,
  TagsParentInternalMediaType = 1147,
  TagsParentInternalOwner = 1148,
  TagsParentInternalType = 1149,
  TagsParentParentChildren = 1150,
  TagsParentParentId = 1151,
  TagsProject = 1152,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1153,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1154,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1155,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1156,
  TagsProjectChildren = 1157,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1158,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1159,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1160,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1161,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1162,
  TagsProjectChildrenChildren = 1163,
  TagsProjectChildrenId = 1164,
  TagsProjectContentfulId = 1165,
  TagsProjectCreatedAt = 1166,
  TagsProjectDetailChildren = 1167,
  TagsProjectDetailChildrenMdx = 1168,
  TagsProjectDetailDetail = 1169,
  TagsProjectDetailId = 1170,
  TagsProjectEndDate = 1171,
  TagsProjectIconChildren = 1172,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1173,
  TagsProjectIconContact = 1174,
  TagsProjectIconContentfulId = 1175,
  TagsProjectIconCreatedAt = 1176,
  TagsProjectIconHistory = 1177,
  TagsProjectIconId = 1178,
  TagsProjectIconName = 1179,
  TagsProjectIconNodeLocale = 1180,
  TagsProjectIconOss = 1181,
  TagsProjectIconProject = 1182,
  TagsProjectIconSpaceId = 1183,
  TagsProjectIconUpdatedAt = 1184,
  TagsProjectIconWhatICanDo = 1185,
  TagsProjectId = 1186,
  TagsProjectInternalContent = 1187,
  TagsProjectInternalContentDigest = 1188,
  TagsProjectInternalDescription = 1189,
  TagsProjectInternalFieldOwners = 1190,
  TagsProjectInternalIgnoreType = 1191,
  TagsProjectInternalMediaType = 1192,
  TagsProjectInternalOwner = 1193,
  TagsProjectInternalType = 1194,
  TagsProjectName = 1195,
  TagsProjectNodeLocale = 1196,
  TagsProjectParentChildren = 1197,
  TagsProjectParentId = 1198,
  TagsProjectSpaceId = 1199,
  TagsProjectStartDate = 1200,
  TagsProjectSubName = 1201,
  TagsProjectSysRevision = 1202,
  TagsProjectSysType = 1203,
  TagsProjectTags = 1204,
  TagsProjectTagsBlogPost = 1205,
  TagsProjectTagsChildren = 1206,
  TagsProjectTagsContentfulId = 1207,
  TagsProjectTagsCreatedAt = 1208,
  TagsProjectTagsId = 1209,
  TagsProjectTagsLevel = 1210,
  TagsProjectTagsName = 1211,
  TagsProjectTagsNodeLocale = 1212,
  TagsProjectTagsOss = 1213,
  TagsProjectTagsProject = 1214,
  TagsProjectTagsSkillMap = 1215,
  TagsProjectTagsSpaceId = 1216,
  TagsProjectTagsUpdatedAt = 1217,
  TagsProjectUpdatedAt = 1218,
  TagsSkillMap = 1219,
  TagsSkillMapChildren = 1220,
  TagsSkillMapChildrenChildren = 1221,
  TagsSkillMapChildrenId = 1222,
  TagsSkillMapContentfulId = 1223,
  TagsSkillMapCreatedAt = 1224,
  TagsSkillMapExpanded = 1225,
  TagsSkillMapId = 1226,
  TagsSkillMapInternalContent = 1227,
  TagsSkillMapInternalContentDigest = 1228,
  TagsSkillMapInternalDescription = 1229,
  TagsSkillMapInternalFieldOwners = 1230,
  TagsSkillMapInternalIgnoreType = 1231,
  TagsSkillMapInternalMediaType = 1232,
  TagsSkillMapInternalOwner = 1233,
  TagsSkillMapInternalType = 1234,
  TagsSkillMapName = 1235,
  TagsSkillMapNodeLocale = 1236,
  TagsSkillMapParentChildren = 1237,
  TagsSkillMapParentId = 1238,
  TagsSkillMapSkills = 1239,
  TagsSkillMapSkillsBlogPost = 1240,
  TagsSkillMapSkillsChildren = 1241,
  TagsSkillMapSkillsContentfulId = 1242,
  TagsSkillMapSkillsCreatedAt = 1243,
  TagsSkillMapSkillsId = 1244,
  TagsSkillMapSkillsLevel = 1245,
  TagsSkillMapSkillsName = 1246,
  TagsSkillMapSkillsNodeLocale = 1247,
  TagsSkillMapSkillsOss = 1248,
  TagsSkillMapSkillsProject = 1249,
  TagsSkillMapSkillsSkillMap = 1250,
  TagsSkillMapSkillsSpaceId = 1251,
  TagsSkillMapSkillsUpdatedAt = 1252,
  TagsSkillMapSortKey = 1253,
  TagsSkillMapSpaceId = 1254,
  TagsSkillMapSysRevision = 1255,
  TagsSkillMapSysType = 1256,
  TagsSkillMapUpdatedAt = 1257,
  TagsSpaceId = 1258,
  TagsSysRevision = 1259,
  TagsSysType = 1260,
  TagsUpdatedAt = 1261,
  UpdatedAt = 1262
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
  IconContactIconSvgDarkGatsbyImageData = 455,
  IconContactIconSvgDarkId = 456,
  IconContactIconSvgDarkNodeLocale = 457,
  IconContactIconSvgDarkSpaceId = 458,
  IconContactIconSvgDarkTitle = 459,
  IconContactIconSvgDarkUpdatedAt = 460,
  IconContactIconSvgLightChildren = 461,
  IconContactIconSvgLightContentfulId = 462,
  IconContactIconSvgLightCreatedAt = 463,
  IconContactIconSvgLightDescription = 464,
  IconContactIconSvgLightGatsbyImageData = 465,
  IconContactIconSvgLightId = 466,
  IconContactIconSvgLightNodeLocale = 467,
  IconContactIconSvgLightSpaceId = 468,
  IconContactIconSvgLightTitle = 469,
  IconContactIconSvgLightUpdatedAt = 470,
  IconContactIconChildren = 471,
  IconContactIconChildrenContentfulIconSvgTextNode = 472,
  IconContactIconContact = 473,
  IconContactIconContentfulId = 474,
  IconContactIconCreatedAt = 475,
  IconContactIconHistory = 476,
  IconContactIconId = 477,
  IconContactIconName = 478,
  IconContactIconNodeLocale = 479,
  IconContactIconOss = 480,
  IconContactIconProject = 481,
  IconContactIconSpaceId = 482,
  IconContactIconUpdatedAt = 483,
  IconContactIconWhatICanDo = 484,
  IconContactId = 485,
  IconContactInternalContent = 486,
  IconContactInternalContentDigest = 487,
  IconContactInternalDescription = 488,
  IconContactInternalFieldOwners = 489,
  IconContactInternalIgnoreType = 490,
  IconContactInternalMediaType = 491,
  IconContactInternalOwner = 492,
  IconContactInternalType = 493,
  IconContactName = 494,
  IconContactNodeLocale = 495,
  IconContactParentChildren = 496,
  IconContactParentId = 497,
  IconContactSortKey = 498,
  IconContactSpaceId = 499,
  IconContactSubName = 500,
  IconContactSysRevision = 501,
  IconContactSysType = 502,
  IconContactUpdatedAt = 503,
  IconContentfulId = 504,
  IconCreatedAt = 505,
  IconHistory = 506,
  IconHistoryChildren = 507,
  IconHistoryChildrenChildren = 508,
  IconHistoryChildrenId = 509,
  IconHistoryContentfulId = 510,
  IconHistoryCreatedAt = 511,
  IconHistoryDate = 512,
  IconHistoryIconChildren = 513,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 514,
  IconHistoryIconContact = 515,
  IconHistoryIconContentfulId = 516,
  IconHistoryIconCreatedAt = 517,
  IconHistoryIconHistory = 518,
  IconHistoryIconId = 519,
  IconHistoryIconName = 520,
  IconHistoryIconNodeLocale = 521,
  IconHistoryIconOss = 522,
  IconHistoryIconProject = 523,
  IconHistoryIconSpaceId = 524,
  IconHistoryIconUpdatedAt = 525,
  IconHistoryIconWhatICanDo = 526,
  IconHistoryId = 527,
  IconHistoryInternalContent = 528,
  IconHistoryInternalContentDigest = 529,
  IconHistoryInternalDescription = 530,
  IconHistoryInternalFieldOwners = 531,
  IconHistoryInternalIgnoreType = 532,
  IconHistoryInternalMediaType = 533,
  IconHistoryInternalOwner = 534,
  IconHistoryInternalType = 535,
  IconHistoryName = 536,
  IconHistoryNodeLocale = 537,
  IconHistoryParentChildren = 538,
  IconHistoryParentId = 539,
  IconHistorySpaceId = 540,
  IconHistorySubName = 541,
  IconHistorySysRevision = 542,
  IconHistorySysType = 543,
  IconHistoryUpdatedAt = 544,
  IconId = 545,
  IconInternalContent = 546,
  IconInternalContentDigest = 547,
  IconInternalDescription = 548,
  IconInternalFieldOwners = 549,
  IconInternalIgnoreType = 550,
  IconInternalMediaType = 551,
  IconInternalOwner = 552,
  IconInternalType = 553,
  IconName = 554,
  IconNodeLocale = 555,
  IconOss = 556,
  IconOssChildContentfulOssDetailTextNodeChildren = 557,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 558,
  IconOssChildContentfulOssDetailTextNodeDetail = 559,
  IconOssChildContentfulOssDetailTextNodeId = 560,
  IconOssChildren = 561,
  IconOssChildrenContentfulOssDetailTextNode = 562,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 563,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 564,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 565,
  IconOssChildrenContentfulOssDetailTextNodeId = 566,
  IconOssChildrenChildren = 567,
  IconOssChildrenId = 568,
  IconOssContentfulId = 569,
  IconOssCreatedAt = 570,
  IconOssDetailChildren = 571,
  IconOssDetailChildrenMdx = 572,
  IconOssDetailDetail = 573,
  IconOssDetailId = 574,
  IconOssHref = 575,
  IconOssIconChildren = 576,
  IconOssIconChildrenContentfulIconSvgTextNode = 577,
  IconOssIconContact = 578,
  IconOssIconContentfulId = 579,
  IconOssIconCreatedAt = 580,
  IconOssIconHistory = 581,
  IconOssIconId = 582,
  IconOssIconName = 583,
  IconOssIconNodeLocale = 584,
  IconOssIconOss = 585,
  IconOssIconProject = 586,
  IconOssIconSpaceId = 587,
  IconOssIconUpdatedAt = 588,
  IconOssIconWhatICanDo = 589,
  IconOssId = 590,
  IconOssImageChildren = 591,
  IconOssImageContentfulId = 592,
  IconOssImageCreatedAt = 593,
  IconOssImageDescription = 594,
  IconOssImageGatsbyImageData = 595,
  IconOssImageId = 596,
  IconOssImageNodeLocale = 597,
  IconOssImageSpaceId = 598,
  IconOssImageTitle = 599,
  IconOssImageUpdatedAt = 600,
  IconOssInternalContent = 601,
  IconOssInternalContentDigest = 602,
  IconOssInternalDescription = 603,
  IconOssInternalFieldOwners = 604,
  IconOssInternalIgnoreType = 605,
  IconOssInternalMediaType = 606,
  IconOssInternalOwner = 607,
  IconOssInternalType = 608,
  IconOssName = 609,
  IconOssNodeLocale = 610,
  IconOssParentChildren = 611,
  IconOssParentId = 612,
  IconOssSpaceId = 613,
  IconOssStartDate = 614,
  IconOssSubName = 615,
  IconOssSysRevision = 616,
  IconOssSysType = 617,
  IconOssTags = 618,
  IconOssTagsBlogPost = 619,
  IconOssTagsChildren = 620,
  IconOssTagsContentfulId = 621,
  IconOssTagsCreatedAt = 622,
  IconOssTagsId = 623,
  IconOssTagsLevel = 624,
  IconOssTagsName = 625,
  IconOssTagsNodeLocale = 626,
  IconOssTagsOss = 627,
  IconOssTagsProject = 628,
  IconOssTagsSkillMap = 629,
  IconOssTagsSpaceId = 630,
  IconOssTagsUpdatedAt = 631,
  IconOssUpdatedAt = 632,
  IconParentChildren = 633,
  IconParentChildrenChildren = 634,
  IconParentChildrenId = 635,
  IconParentId = 636,
  IconParentInternalContent = 637,
  IconParentInternalContentDigest = 638,
  IconParentInternalDescription = 639,
  IconParentInternalFieldOwners = 640,
  IconParentInternalIgnoreType = 641,
  IconParentInternalMediaType = 642,
  IconParentInternalOwner = 643,
  IconParentInternalType = 644,
  IconParentParentChildren = 645,
  IconParentParentId = 646,
  IconProject = 647,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 648,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 649,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 650,
  IconProjectChildContentfulProjectDetailTextNodeId = 651,
  IconProjectChildren = 652,
  IconProjectChildrenContentfulProjectDetailTextNode = 653,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 654,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 655,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 656,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 657,
  IconProjectChildrenChildren = 658,
  IconProjectChildrenId = 659,
  IconProjectContentfulId = 660,
  IconProjectCreatedAt = 661,
  IconProjectDetailChildren = 662,
  IconProjectDetailChildrenMdx = 663,
  IconProjectDetailDetail = 664,
  IconProjectDetailId = 665,
  IconProjectEndDate = 666,
  IconProjectIconChildren = 667,
  IconProjectIconChildrenContentfulIconSvgTextNode = 668,
  IconProjectIconContact = 669,
  IconProjectIconContentfulId = 670,
  IconProjectIconCreatedAt = 671,
  IconProjectIconHistory = 672,
  IconProjectIconId = 673,
  IconProjectIconName = 674,
  IconProjectIconNodeLocale = 675,
  IconProjectIconOss = 676,
  IconProjectIconProject = 677,
  IconProjectIconSpaceId = 678,
  IconProjectIconUpdatedAt = 679,
  IconProjectIconWhatICanDo = 680,
  IconProjectId = 681,
  IconProjectInternalContent = 682,
  IconProjectInternalContentDigest = 683,
  IconProjectInternalDescription = 684,
  IconProjectInternalFieldOwners = 685,
  IconProjectInternalIgnoreType = 686,
  IconProjectInternalMediaType = 687,
  IconProjectInternalOwner = 688,
  IconProjectInternalType = 689,
  IconProjectName = 690,
  IconProjectNodeLocale = 691,
  IconProjectParentChildren = 692,
  IconProjectParentId = 693,
  IconProjectSpaceId = 694,
  IconProjectStartDate = 695,
  IconProjectSubName = 696,
  IconProjectSysRevision = 697,
  IconProjectSysType = 698,
  IconProjectTags = 699,
  IconProjectTagsBlogPost = 700,
  IconProjectTagsChildren = 701,
  IconProjectTagsContentfulId = 702,
  IconProjectTagsCreatedAt = 703,
  IconProjectTagsId = 704,
  IconProjectTagsLevel = 705,
  IconProjectTagsName = 706,
  IconProjectTagsNodeLocale = 707,
  IconProjectTagsOss = 708,
  IconProjectTagsProject = 709,
  IconProjectTagsSkillMap = 710,
  IconProjectTagsSpaceId = 711,
  IconProjectTagsUpdatedAt = 712,
  IconProjectUpdatedAt = 713,
  IconSpaceId = 714,
  IconSvgChildMdxBody = 715,
  IconSvgChildMdxChildren = 716,
  IconSvgChildMdxExcerpt = 717,
  IconSvgChildMdxFileAbsolutePath = 718,
  IconSvgChildMdxHeadings = 719,
  IconSvgChildMdxHtml = 720,
  IconSvgChildMdxId = 721,
  IconSvgChildMdxMdxAst = 722,
  IconSvgChildMdxRawBody = 723,
  IconSvgChildMdxSlug = 724,
  IconSvgChildMdxTableOfContents = 725,
  IconSvgChildMdxTimeToRead = 726,
  IconSvgChildren = 727,
  IconSvgChildrenMdx = 728,
  IconSvgChildrenMdxBody = 729,
  IconSvgChildrenMdxChildren = 730,
  IconSvgChildrenMdxExcerpt = 731,
  IconSvgChildrenMdxFileAbsolutePath = 732,
  IconSvgChildrenMdxHeadings = 733,
  IconSvgChildrenMdxHtml = 734,
  IconSvgChildrenMdxId = 735,
  IconSvgChildrenMdxMdxAst = 736,
  IconSvgChildrenMdxRawBody = 737,
  IconSvgChildrenMdxSlug = 738,
  IconSvgChildrenMdxTableOfContents = 739,
  IconSvgChildrenMdxTimeToRead = 740,
  IconSvgChildrenChildren = 741,
  IconSvgChildrenId = 742,
  IconSvgId = 743,
  IconSvgInternalContent = 744,
  IconSvgInternalContentDigest = 745,
  IconSvgInternalDescription = 746,
  IconSvgInternalFieldOwners = 747,
  IconSvgInternalIgnoreType = 748,
  IconSvgInternalMediaType = 749,
  IconSvgInternalOwner = 750,
  IconSvgInternalType = 751,
  IconSvgParentChildren = 752,
  IconSvgParentId = 753,
  IconSvgSvg = 754,
  IconSvgSysType = 755,
  IconSysRevision = 756,
  IconSysType = 757,
  IconUpdatedAt = 758,
  IconWhatICanDo = 759,
  IconWhatICanDoChildren = 760,
  IconWhatICanDoChildrenChildren = 761,
  IconWhatICanDoChildrenId = 762,
  IconWhatICanDoContentfulId = 763,
  IconWhatICanDoCreatedAt = 764,
  IconWhatICanDoIconChildren = 765,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 766,
  IconWhatICanDoIconContact = 767,
  IconWhatICanDoIconContentfulId = 768,
  IconWhatICanDoIconCreatedAt = 769,
  IconWhatICanDoIconHistory = 770,
  IconWhatICanDoIconId = 771,
  IconWhatICanDoIconName = 772,
  IconWhatICanDoIconNodeLocale = 773,
  IconWhatICanDoIconOss = 774,
  IconWhatICanDoIconProject = 775,
  IconWhatICanDoIconSpaceId = 776,
  IconWhatICanDoIconUpdatedAt = 777,
  IconWhatICanDoIconWhatICanDo = 778,
  IconWhatICanDoId = 779,
  IconWhatICanDoInternalContent = 780,
  IconWhatICanDoInternalContentDigest = 781,
  IconWhatICanDoInternalDescription = 782,
  IconWhatICanDoInternalFieldOwners = 783,
  IconWhatICanDoInternalIgnoreType = 784,
  IconWhatICanDoInternalMediaType = 785,
  IconWhatICanDoInternalOwner = 786,
  IconWhatICanDoInternalType = 787,
  IconWhatICanDoName = 788,
  IconWhatICanDoNodeLocale = 789,
  IconWhatICanDoParentChildren = 790,
  IconWhatICanDoParentId = 791,
  IconWhatICanDoSortKey = 792,
  IconWhatICanDoSpaceId = 793,
  IconWhatICanDoSubName = 794,
  IconWhatICanDoSysRevision = 795,
  IconWhatICanDoSysType = 796,
  IconWhatICanDoUpdatedAt = 797,
  Id = 798,
  InternalContent = 799,
  InternalContentDigest = 800,
  InternalDescription = 801,
  InternalFieldOwners = 802,
  InternalIgnoreType = 803,
  InternalMediaType = 804,
  InternalOwner = 805,
  InternalType = 806,
  Name = 807,
  NodeLocale = 808,
  ParentChildren = 809,
  ParentChildrenChildren = 810,
  ParentChildrenChildrenChildren = 811,
  ParentChildrenChildrenId = 812,
  ParentChildrenId = 813,
  ParentChildrenInternalContent = 814,
  ParentChildrenInternalContentDigest = 815,
  ParentChildrenInternalDescription = 816,
  ParentChildrenInternalFieldOwners = 817,
  ParentChildrenInternalIgnoreType = 818,
  ParentChildrenInternalMediaType = 819,
  ParentChildrenInternalOwner = 820,
  ParentChildrenInternalType = 821,
  ParentChildrenParentChildren = 822,
  ParentChildrenParentId = 823,
  ParentId = 824,
  ParentInternalContent = 825,
  ParentInternalContentDigest = 826,
  ParentInternalDescription = 827,
  ParentInternalFieldOwners = 828,
  ParentInternalIgnoreType = 829,
  ParentInternalMediaType = 830,
  ParentInternalOwner = 831,
  ParentInternalType = 832,
  ParentParentChildren = 833,
  ParentParentChildrenChildren = 834,
  ParentParentChildrenId = 835,
  ParentParentId = 836,
  ParentParentInternalContent = 837,
  ParentParentInternalContentDigest = 838,
  ParentParentInternalDescription = 839,
  ParentParentInternalFieldOwners = 840,
  ParentParentInternalIgnoreType = 841,
  ParentParentInternalMediaType = 842,
  ParentParentInternalOwner = 843,
  ParentParentInternalType = 844,
  ParentParentParentChildren = 845,
  ParentParentParentId = 846,
  SpaceId = 847,
  StartDate = 848,
  SubName = 849,
  SysContentTypeSysId = 850,
  SysContentTypeSysLinkType = 851,
  SysContentTypeSysType = 852,
  SysRevision = 853,
  SysType = 854,
  Tags = 855,
  TagsBlogPost = 856,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 857,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 858,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 859,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 860,
  TagsBlogPostChildren = 861,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 862,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 863,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 864,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 865,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 866,
  TagsBlogPostChildrenChildren = 867,
  TagsBlogPostChildrenId = 868,
  TagsBlogPostContentChildren = 869,
  TagsBlogPostContentChildrenMdx = 870,
  TagsBlogPostContentContent = 871,
  TagsBlogPostContentId = 872,
  TagsBlogPostContentfulId = 873,
  TagsBlogPostCreated = 874,
  TagsBlogPostCreatedAt = 875,
  TagsBlogPostExcerpt = 876,
  TagsBlogPostId = 877,
  TagsBlogPostInternalContent = 878,
  TagsBlogPostInternalContentDigest = 879,
  TagsBlogPostInternalDescription = 880,
  TagsBlogPostInternalFieldOwners = 881,
  TagsBlogPostInternalIgnoreType = 882,
  TagsBlogPostInternalMediaType = 883,
  TagsBlogPostInternalOwner = 884,
  TagsBlogPostInternalType = 885,
  TagsBlogPostNodeLocale = 886,
  TagsBlogPostParentChildren = 887,
  TagsBlogPostParentId = 888,
  TagsBlogPostSlug = 889,
  TagsBlogPostSpaceId = 890,
  TagsBlogPostSysRevision = 891,
  TagsBlogPostSysType = 892,
  TagsBlogPostTags = 893,
  TagsBlogPostTagsBlogPost = 894,
  TagsBlogPostTagsChildren = 895,
  TagsBlogPostTagsContentfulId = 896,
  TagsBlogPostTagsCreatedAt = 897,
  TagsBlogPostTagsId = 898,
  TagsBlogPostTagsLevel = 899,
  TagsBlogPostTagsName = 900,
  TagsBlogPostTagsNodeLocale = 901,
  TagsBlogPostTagsOss = 902,
  TagsBlogPostTagsProject = 903,
  TagsBlogPostTagsSkillMap = 904,
  TagsBlogPostTagsSpaceId = 905,
  TagsBlogPostTagsUpdatedAt = 906,
  TagsBlogPostTitle = 907,
  TagsBlogPostUpdated = 908,
  TagsBlogPostUpdatedAt = 909,
  TagsChildren = 910,
  TagsChildrenChildren = 911,
  TagsChildrenChildrenChildren = 912,
  TagsChildrenChildrenId = 913,
  TagsChildrenId = 914,
  TagsChildrenInternalContent = 915,
  TagsChildrenInternalContentDigest = 916,
  TagsChildrenInternalDescription = 917,
  TagsChildrenInternalFieldOwners = 918,
  TagsChildrenInternalIgnoreType = 919,
  TagsChildrenInternalMediaType = 920,
  TagsChildrenInternalOwner = 921,
  TagsChildrenInternalType = 922,
  TagsChildrenParentChildren = 923,
  TagsChildrenParentId = 924,
  TagsContentfulId = 925,
  TagsCreatedAt = 926,
  TagsId = 927,
  TagsInternalContent = 928,
  TagsInternalContentDigest = 929,
  TagsInternalDescription = 930,
  TagsInternalFieldOwners = 931,
  TagsInternalIgnoreType = 932,
  TagsInternalMediaType = 933,
  TagsInternalOwner = 934,
  TagsInternalType = 935,
  TagsLevel = 936,
  TagsName = 937,
  TagsNodeLocale = 938,
  TagsOss = 939,
  TagsOssChildContentfulOssDetailTextNodeChildren = 940,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 941,
  TagsOssChildContentfulOssDetailTextNodeDetail = 942,
  TagsOssChildContentfulOssDetailTextNodeId = 943,
  TagsOssChildren = 944,
  TagsOssChildrenContentfulOssDetailTextNode = 945,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 946,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 947,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 948,
  TagsOssChildrenContentfulOssDetailTextNodeId = 949,
  TagsOssChildrenChildren = 950,
  TagsOssChildrenId = 951,
  TagsOssContentfulId = 952,
  TagsOssCreatedAt = 953,
  TagsOssDetailChildren = 954,
  TagsOssDetailChildrenMdx = 955,
  TagsOssDetailDetail = 956,
  TagsOssDetailId = 957,
  TagsOssHref = 958,
  TagsOssIconChildren = 959,
  TagsOssIconChildrenContentfulIconSvgTextNode = 960,
  TagsOssIconContact = 961,
  TagsOssIconContentfulId = 962,
  TagsOssIconCreatedAt = 963,
  TagsOssIconHistory = 964,
  TagsOssIconId = 965,
  TagsOssIconName = 966,
  TagsOssIconNodeLocale = 967,
  TagsOssIconOss = 968,
  TagsOssIconProject = 969,
  TagsOssIconSpaceId = 970,
  TagsOssIconUpdatedAt = 971,
  TagsOssIconWhatICanDo = 972,
  TagsOssId = 973,
  TagsOssImageChildren = 974,
  TagsOssImageContentfulId = 975,
  TagsOssImageCreatedAt = 976,
  TagsOssImageDescription = 977,
  TagsOssImageGatsbyImageData = 978,
  TagsOssImageId = 979,
  TagsOssImageNodeLocale = 980,
  TagsOssImageSpaceId = 981,
  TagsOssImageTitle = 982,
  TagsOssImageUpdatedAt = 983,
  TagsOssInternalContent = 984,
  TagsOssInternalContentDigest = 985,
  TagsOssInternalDescription = 986,
  TagsOssInternalFieldOwners = 987,
  TagsOssInternalIgnoreType = 988,
  TagsOssInternalMediaType = 989,
  TagsOssInternalOwner = 990,
  TagsOssInternalType = 991,
  TagsOssName = 992,
  TagsOssNodeLocale = 993,
  TagsOssParentChildren = 994,
  TagsOssParentId = 995,
  TagsOssSpaceId = 996,
  TagsOssStartDate = 997,
  TagsOssSubName = 998,
  TagsOssSysRevision = 999,
  TagsOssSysType = 1000,
  TagsOssTags = 1001,
  TagsOssTagsBlogPost = 1002,
  TagsOssTagsChildren = 1003,
  TagsOssTagsContentfulId = 1004,
  TagsOssTagsCreatedAt = 1005,
  TagsOssTagsId = 1006,
  TagsOssTagsLevel = 1007,
  TagsOssTagsName = 1008,
  TagsOssTagsNodeLocale = 1009,
  TagsOssTagsOss = 1010,
  TagsOssTagsProject = 1011,
  TagsOssTagsSkillMap = 1012,
  TagsOssTagsSpaceId = 1013,
  TagsOssTagsUpdatedAt = 1014,
  TagsOssUpdatedAt = 1015,
  TagsParentChildren = 1016,
  TagsParentChildrenChildren = 1017,
  TagsParentChildrenId = 1018,
  TagsParentId = 1019,
  TagsParentInternalContent = 1020,
  TagsParentInternalContentDigest = 1021,
  TagsParentInternalDescription = 1022,
  TagsParentInternalFieldOwners = 1023,
  TagsParentInternalIgnoreType = 1024,
  TagsParentInternalMediaType = 1025,
  TagsParentInternalOwner = 1026,
  TagsParentInternalType = 1027,
  TagsParentParentChildren = 1028,
  TagsParentParentId = 1029,
  TagsProject = 1030,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1031,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1032,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1033,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1034,
  TagsProjectChildren = 1035,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1036,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1037,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1038,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1039,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1040,
  TagsProjectChildrenChildren = 1041,
  TagsProjectChildrenId = 1042,
  TagsProjectContentfulId = 1043,
  TagsProjectCreatedAt = 1044,
  TagsProjectDetailChildren = 1045,
  TagsProjectDetailChildrenMdx = 1046,
  TagsProjectDetailDetail = 1047,
  TagsProjectDetailId = 1048,
  TagsProjectEndDate = 1049,
  TagsProjectIconChildren = 1050,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1051,
  TagsProjectIconContact = 1052,
  TagsProjectIconContentfulId = 1053,
  TagsProjectIconCreatedAt = 1054,
  TagsProjectIconHistory = 1055,
  TagsProjectIconId = 1056,
  TagsProjectIconName = 1057,
  TagsProjectIconNodeLocale = 1058,
  TagsProjectIconOss = 1059,
  TagsProjectIconProject = 1060,
  TagsProjectIconSpaceId = 1061,
  TagsProjectIconUpdatedAt = 1062,
  TagsProjectIconWhatICanDo = 1063,
  TagsProjectId = 1064,
  TagsProjectInternalContent = 1065,
  TagsProjectInternalContentDigest = 1066,
  TagsProjectInternalDescription = 1067,
  TagsProjectInternalFieldOwners = 1068,
  TagsProjectInternalIgnoreType = 1069,
  TagsProjectInternalMediaType = 1070,
  TagsProjectInternalOwner = 1071,
  TagsProjectInternalType = 1072,
  TagsProjectName = 1073,
  TagsProjectNodeLocale = 1074,
  TagsProjectParentChildren = 1075,
  TagsProjectParentId = 1076,
  TagsProjectSpaceId = 1077,
  TagsProjectStartDate = 1078,
  TagsProjectSubName = 1079,
  TagsProjectSysRevision = 1080,
  TagsProjectSysType = 1081,
  TagsProjectTags = 1082,
  TagsProjectTagsBlogPost = 1083,
  TagsProjectTagsChildren = 1084,
  TagsProjectTagsContentfulId = 1085,
  TagsProjectTagsCreatedAt = 1086,
  TagsProjectTagsId = 1087,
  TagsProjectTagsLevel = 1088,
  TagsProjectTagsName = 1089,
  TagsProjectTagsNodeLocale = 1090,
  TagsProjectTagsOss = 1091,
  TagsProjectTagsProject = 1092,
  TagsProjectTagsSkillMap = 1093,
  TagsProjectTagsSpaceId = 1094,
  TagsProjectTagsUpdatedAt = 1095,
  TagsProjectUpdatedAt = 1096,
  TagsSkillMap = 1097,
  TagsSkillMapChildren = 1098,
  TagsSkillMapChildrenChildren = 1099,
  TagsSkillMapChildrenId = 1100,
  TagsSkillMapContentfulId = 1101,
  TagsSkillMapCreatedAt = 1102,
  TagsSkillMapExpanded = 1103,
  TagsSkillMapId = 1104,
  TagsSkillMapInternalContent = 1105,
  TagsSkillMapInternalContentDigest = 1106,
  TagsSkillMapInternalDescription = 1107,
  TagsSkillMapInternalFieldOwners = 1108,
  TagsSkillMapInternalIgnoreType = 1109,
  TagsSkillMapInternalMediaType = 1110,
  TagsSkillMapInternalOwner = 1111,
  TagsSkillMapInternalType = 1112,
  TagsSkillMapName = 1113,
  TagsSkillMapNodeLocale = 1114,
  TagsSkillMapParentChildren = 1115,
  TagsSkillMapParentId = 1116,
  TagsSkillMapSkills = 1117,
  TagsSkillMapSkillsBlogPost = 1118,
  TagsSkillMapSkillsChildren = 1119,
  TagsSkillMapSkillsContentfulId = 1120,
  TagsSkillMapSkillsCreatedAt = 1121,
  TagsSkillMapSkillsId = 1122,
  TagsSkillMapSkillsLevel = 1123,
  TagsSkillMapSkillsName = 1124,
  TagsSkillMapSkillsNodeLocale = 1125,
  TagsSkillMapSkillsOss = 1126,
  TagsSkillMapSkillsProject = 1127,
  TagsSkillMapSkillsSkillMap = 1128,
  TagsSkillMapSkillsSpaceId = 1129,
  TagsSkillMapSkillsUpdatedAt = 1130,
  TagsSkillMapSortKey = 1131,
  TagsSkillMapSpaceId = 1132,
  TagsSkillMapSysRevision = 1133,
  TagsSkillMapSysType = 1134,
  TagsSkillMapUpdatedAt = 1135,
  TagsSpaceId = 1136,
  TagsSysRevision = 1137,
  TagsSysType = 1138,
  TagsUpdatedAt = 1139,
  UpdatedAt = 1140
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
  SkillsOssImageGatsbyImageData = 214,
  SkillsOssImageId = 215,
  SkillsOssImageNodeLocale = 216,
  SkillsOssImageSpaceId = 217,
  SkillsOssImageTitle = 218,
  SkillsOssImageUpdatedAt = 219,
  SkillsOssInternalContent = 220,
  SkillsOssInternalContentDigest = 221,
  SkillsOssInternalDescription = 222,
  SkillsOssInternalFieldOwners = 223,
  SkillsOssInternalIgnoreType = 224,
  SkillsOssInternalMediaType = 225,
  SkillsOssInternalOwner = 226,
  SkillsOssInternalType = 227,
  SkillsOssName = 228,
  SkillsOssNodeLocale = 229,
  SkillsOssParentChildren = 230,
  SkillsOssParentId = 231,
  SkillsOssSpaceId = 232,
  SkillsOssStartDate = 233,
  SkillsOssSubName = 234,
  SkillsOssSysRevision = 235,
  SkillsOssSysType = 236,
  SkillsOssTags = 237,
  SkillsOssTagsBlogPost = 238,
  SkillsOssTagsChildren = 239,
  SkillsOssTagsContentfulId = 240,
  SkillsOssTagsCreatedAt = 241,
  SkillsOssTagsId = 242,
  SkillsOssTagsLevel = 243,
  SkillsOssTagsName = 244,
  SkillsOssTagsNodeLocale = 245,
  SkillsOssTagsOss = 246,
  SkillsOssTagsProject = 247,
  SkillsOssTagsSkillMap = 248,
  SkillsOssTagsSpaceId = 249,
  SkillsOssTagsUpdatedAt = 250,
  SkillsOssUpdatedAt = 251,
  SkillsParentChildren = 252,
  SkillsParentChildrenChildren = 253,
  SkillsParentChildrenId = 254,
  SkillsParentId = 255,
  SkillsParentInternalContent = 256,
  SkillsParentInternalContentDigest = 257,
  SkillsParentInternalDescription = 258,
  SkillsParentInternalFieldOwners = 259,
  SkillsParentInternalIgnoreType = 260,
  SkillsParentInternalMediaType = 261,
  SkillsParentInternalOwner = 262,
  SkillsParentInternalType = 263,
  SkillsParentParentChildren = 264,
  SkillsParentParentId = 265,
  SkillsProject = 266,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 267,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 268,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 269,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 270,
  SkillsProjectChildren = 271,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 272,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 273,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 274,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 275,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 276,
  SkillsProjectChildrenChildren = 277,
  SkillsProjectChildrenId = 278,
  SkillsProjectContentfulId = 279,
  SkillsProjectCreatedAt = 280,
  SkillsProjectDetailChildren = 281,
  SkillsProjectDetailChildrenMdx = 282,
  SkillsProjectDetailDetail = 283,
  SkillsProjectDetailId = 284,
  SkillsProjectEndDate = 285,
  SkillsProjectIconChildren = 286,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 287,
  SkillsProjectIconContact = 288,
  SkillsProjectIconContentfulId = 289,
  SkillsProjectIconCreatedAt = 290,
  SkillsProjectIconHistory = 291,
  SkillsProjectIconId = 292,
  SkillsProjectIconName = 293,
  SkillsProjectIconNodeLocale = 294,
  SkillsProjectIconOss = 295,
  SkillsProjectIconProject = 296,
  SkillsProjectIconSpaceId = 297,
  SkillsProjectIconUpdatedAt = 298,
  SkillsProjectIconWhatICanDo = 299,
  SkillsProjectId = 300,
  SkillsProjectInternalContent = 301,
  SkillsProjectInternalContentDigest = 302,
  SkillsProjectInternalDescription = 303,
  SkillsProjectInternalFieldOwners = 304,
  SkillsProjectInternalIgnoreType = 305,
  SkillsProjectInternalMediaType = 306,
  SkillsProjectInternalOwner = 307,
  SkillsProjectInternalType = 308,
  SkillsProjectName = 309,
  SkillsProjectNodeLocale = 310,
  SkillsProjectParentChildren = 311,
  SkillsProjectParentId = 312,
  SkillsProjectSpaceId = 313,
  SkillsProjectStartDate = 314,
  SkillsProjectSubName = 315,
  SkillsProjectSysRevision = 316,
  SkillsProjectSysType = 317,
  SkillsProjectTags = 318,
  SkillsProjectTagsBlogPost = 319,
  SkillsProjectTagsChildren = 320,
  SkillsProjectTagsContentfulId = 321,
  SkillsProjectTagsCreatedAt = 322,
  SkillsProjectTagsId = 323,
  SkillsProjectTagsLevel = 324,
  SkillsProjectTagsName = 325,
  SkillsProjectTagsNodeLocale = 326,
  SkillsProjectTagsOss = 327,
  SkillsProjectTagsProject = 328,
  SkillsProjectTagsSkillMap = 329,
  SkillsProjectTagsSpaceId = 330,
  SkillsProjectTagsUpdatedAt = 331,
  SkillsProjectUpdatedAt = 332,
  SkillsSkillMap = 333,
  SkillsSkillMapChildren = 334,
  SkillsSkillMapChildrenChildren = 335,
  SkillsSkillMapChildrenId = 336,
  SkillsSkillMapContentfulId = 337,
  SkillsSkillMapCreatedAt = 338,
  SkillsSkillMapExpanded = 339,
  SkillsSkillMapId = 340,
  SkillsSkillMapInternalContent = 341,
  SkillsSkillMapInternalContentDigest = 342,
  SkillsSkillMapInternalDescription = 343,
  SkillsSkillMapInternalFieldOwners = 344,
  SkillsSkillMapInternalIgnoreType = 345,
  SkillsSkillMapInternalMediaType = 346,
  SkillsSkillMapInternalOwner = 347,
  SkillsSkillMapInternalType = 348,
  SkillsSkillMapName = 349,
  SkillsSkillMapNodeLocale = 350,
  SkillsSkillMapParentChildren = 351,
  SkillsSkillMapParentId = 352,
  SkillsSkillMapSkills = 353,
  SkillsSkillMapSkillsBlogPost = 354,
  SkillsSkillMapSkillsChildren = 355,
  SkillsSkillMapSkillsContentfulId = 356,
  SkillsSkillMapSkillsCreatedAt = 357,
  SkillsSkillMapSkillsId = 358,
  SkillsSkillMapSkillsLevel = 359,
  SkillsSkillMapSkillsName = 360,
  SkillsSkillMapSkillsNodeLocale = 361,
  SkillsSkillMapSkillsOss = 362,
  SkillsSkillMapSkillsProject = 363,
  SkillsSkillMapSkillsSkillMap = 364,
  SkillsSkillMapSkillsSpaceId = 365,
  SkillsSkillMapSkillsUpdatedAt = 366,
  SkillsSkillMapSortKey = 367,
  SkillsSkillMapSpaceId = 368,
  SkillsSkillMapSysRevision = 369,
  SkillsSkillMapSysType = 370,
  SkillsSkillMapUpdatedAt = 371,
  SkillsSpaceId = 372,
  SkillsSysRevision = 373,
  SkillsSysType = 374,
  SkillsUpdatedAt = 375,
  SortKey = 376,
  SpaceId = 377,
  SysContentTypeSysId = 378,
  SysContentTypeSysLinkType = 379,
  SysContentTypeSysType = 380,
  SysRevision = 381,
  SysType = 382,
  UpdatedAt = 383
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
  OssImageGatsbyImageData = 558,
  OssImageId = 559,
  OssImageInternalContent = 560,
  OssImageInternalContentDigest = 561,
  OssImageInternalDescription = 562,
  OssImageInternalFieldOwners = 563,
  OssImageInternalIgnoreType = 564,
  OssImageInternalMediaType = 565,
  OssImageInternalOwner = 566,
  OssImageInternalType = 567,
  OssImageLocalFileAbsolutePath = 568,
  OssImageLocalFileAccessTime = 569,
  OssImageLocalFileAtime = 570,
  OssImageLocalFileAtimeMs = 571,
  OssImageLocalFileBase = 572,
  OssImageLocalFileBirthTime = 573,
  OssImageLocalFileBirthtime = 574,
  OssImageLocalFileBirthtimeMs = 575,
  OssImageLocalFileBlksize = 576,
  OssImageLocalFileBlocks = 577,
  OssImageLocalFileChangeTime = 578,
  OssImageLocalFileChildren = 579,
  OssImageLocalFileChildrenImageSharp = 580,
  OssImageLocalFileChildrenLocale = 581,
  OssImageLocalFileCtime = 582,
  OssImageLocalFileCtimeMs = 583,
  OssImageLocalFileDev = 584,
  OssImageLocalFileDir = 585,
  OssImageLocalFileExt = 586,
  OssImageLocalFileExtension = 587,
  OssImageLocalFileGid = 588,
  OssImageLocalFileId = 589,
  OssImageLocalFileIno = 590,
  OssImageLocalFileMode = 591,
  OssImageLocalFileModifiedTime = 592,
  OssImageLocalFileMtime = 593,
  OssImageLocalFileMtimeMs = 594,
  OssImageLocalFileName = 595,
  OssImageLocalFileNlink = 596,
  OssImageLocalFilePrettySize = 597,
  OssImageLocalFilePublicUrl = 598,
  OssImageLocalFileRdev = 599,
  OssImageLocalFileRelativeDirectory = 600,
  OssImageLocalFileRelativePath = 601,
  OssImageLocalFileRoot = 602,
  OssImageLocalFileSize = 603,
  OssImageLocalFileSourceInstanceName = 604,
  OssImageLocalFileUid = 605,
  OssImageLocalFileUrl = 606,
  OssImageNodeLocale = 607,
  OssImageParentChildren = 608,
  OssImageParentId = 609,
  OssImageSpaceId = 610,
  OssImageSysRevision = 611,
  OssImageSysType = 612,
  OssImageTitle = 613,
  OssImageUpdatedAt = 614,
  OssInternalContent = 615,
  OssInternalContentDigest = 616,
  OssInternalDescription = 617,
  OssInternalFieldOwners = 618,
  OssInternalIgnoreType = 619,
  OssInternalMediaType = 620,
  OssInternalOwner = 621,
  OssInternalType = 622,
  OssName = 623,
  OssNodeLocale = 624,
  OssParentChildren = 625,
  OssParentChildrenChildren = 626,
  OssParentChildrenId = 627,
  OssParentId = 628,
  OssParentInternalContent = 629,
  OssParentInternalContentDigest = 630,
  OssParentInternalDescription = 631,
  OssParentInternalFieldOwners = 632,
  OssParentInternalIgnoreType = 633,
  OssParentInternalMediaType = 634,
  OssParentInternalOwner = 635,
  OssParentInternalType = 636,
  OssParentParentChildren = 637,
  OssParentParentId = 638,
  OssSpaceId = 639,
  OssStartDate = 640,
  OssSubName = 641,
  OssSysRevision = 642,
  OssSysType = 643,
  OssTags = 644,
  OssTagsBlogPost = 645,
  OssTagsBlogPostChildren = 646,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 647,
  OssTagsBlogPostContentfulId = 648,
  OssTagsBlogPostCreated = 649,
  OssTagsBlogPostCreatedAt = 650,
  OssTagsBlogPostExcerpt = 651,
  OssTagsBlogPostId = 652,
  OssTagsBlogPostNodeLocale = 653,
  OssTagsBlogPostSlug = 654,
  OssTagsBlogPostSpaceId = 655,
  OssTagsBlogPostTags = 656,
  OssTagsBlogPostTitle = 657,
  OssTagsBlogPostUpdated = 658,
  OssTagsBlogPostUpdatedAt = 659,
  OssTagsChildren = 660,
  OssTagsChildrenChildren = 661,
  OssTagsChildrenId = 662,
  OssTagsContentfulId = 663,
  OssTagsCreatedAt = 664,
  OssTagsId = 665,
  OssTagsInternalContent = 666,
  OssTagsInternalContentDigest = 667,
  OssTagsInternalDescription = 668,
  OssTagsInternalFieldOwners = 669,
  OssTagsInternalIgnoreType = 670,
  OssTagsInternalMediaType = 671,
  OssTagsInternalOwner = 672,
  OssTagsInternalType = 673,
  OssTagsLevel = 674,
  OssTagsName = 675,
  OssTagsNodeLocale = 676,
  OssTagsOss = 677,
  OssTagsOssChildren = 678,
  OssTagsOssChildrenContentfulOssDetailTextNode = 679,
  OssTagsOssContentfulId = 680,
  OssTagsOssCreatedAt = 681,
  OssTagsOssHref = 682,
  OssTagsOssId = 683,
  OssTagsOssName = 684,
  OssTagsOssNodeLocale = 685,
  OssTagsOssSpaceId = 686,
  OssTagsOssStartDate = 687,
  OssTagsOssSubName = 688,
  OssTagsOssTags = 689,
  OssTagsOssUpdatedAt = 690,
  OssTagsParentChildren = 691,
  OssTagsParentId = 692,
  OssTagsProject = 693,
  OssTagsProjectChildren = 694,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 695,
  OssTagsProjectContentfulId = 696,
  OssTagsProjectCreatedAt = 697,
  OssTagsProjectEndDate = 698,
  OssTagsProjectId = 699,
  OssTagsProjectName = 700,
  OssTagsProjectNodeLocale = 701,
  OssTagsProjectSpaceId = 702,
  OssTagsProjectStartDate = 703,
  OssTagsProjectSubName = 704,
  OssTagsProjectTags = 705,
  OssTagsProjectUpdatedAt = 706,
  OssTagsSkillMap = 707,
  OssTagsSkillMapChildren = 708,
  OssTagsSkillMapContentfulId = 709,
  OssTagsSkillMapCreatedAt = 710,
  OssTagsSkillMapExpanded = 711,
  OssTagsSkillMapId = 712,
  OssTagsSkillMapName = 713,
  OssTagsSkillMapNodeLocale = 714,
  OssTagsSkillMapSkills = 715,
  OssTagsSkillMapSortKey = 716,
  OssTagsSkillMapSpaceId = 717,
  OssTagsSkillMapUpdatedAt = 718,
  OssTagsSpaceId = 719,
  OssTagsSysRevision = 720,
  OssTagsSysType = 721,
  OssTagsUpdatedAt = 722,
  OssUpdatedAt = 723,
  ParentChildren = 724,
  ParentChildrenChildren = 725,
  ParentChildrenChildrenChildren = 726,
  ParentChildrenChildrenId = 727,
  ParentChildrenId = 728,
  ParentChildrenInternalContent = 729,
  ParentChildrenInternalContentDigest = 730,
  ParentChildrenInternalDescription = 731,
  ParentChildrenInternalFieldOwners = 732,
  ParentChildrenInternalIgnoreType = 733,
  ParentChildrenInternalMediaType = 734,
  ParentChildrenInternalOwner = 735,
  ParentChildrenInternalType = 736,
  ParentChildrenParentChildren = 737,
  ParentChildrenParentId = 738,
  ParentId = 739,
  ParentInternalContent = 740,
  ParentInternalContentDigest = 741,
  ParentInternalDescription = 742,
  ParentInternalFieldOwners = 743,
  ParentInternalIgnoreType = 744,
  ParentInternalMediaType = 745,
  ParentInternalOwner = 746,
  ParentInternalType = 747,
  ParentParentChildren = 748,
  ParentParentChildrenChildren = 749,
  ParentParentChildrenId = 750,
  ParentParentId = 751,
  ParentParentInternalContent = 752,
  ParentParentInternalContentDigest = 753,
  ParentParentInternalDescription = 754,
  ParentParentInternalFieldOwners = 755,
  ParentParentInternalIgnoreType = 756,
  ParentParentInternalMediaType = 757,
  ParentParentInternalOwner = 758,
  ParentParentInternalType = 759,
  ParentParentParentChildren = 760,
  ParentParentParentId = 761,
  Project = 762,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 763,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 764,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 765,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 766,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 767,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 768,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 769,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 770,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 771,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 772,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 773,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 774,
  ProjectChildContentfulProjectDetailTextNodeChildren = 775,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 776,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 777,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 778,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 779,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 780,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 781,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 782,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 783,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 784,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 785,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 786,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 787,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 788,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 789,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 790,
  ProjectChildContentfulProjectDetailTextNodeDetail = 791,
  ProjectChildContentfulProjectDetailTextNodeId = 792,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 793,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 794,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 795,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 796,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 797,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 798,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 799,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 800,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 801,
  ProjectChildContentfulProjectDetailTextNodeParentId = 802,
  ProjectChildContentfulProjectDetailTextNodeSysType = 803,
  ProjectChildren = 804,
  ProjectChildrenContentfulProjectDetailTextNode = 805,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 806,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 807,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 808,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 809,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 810,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 811,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 812,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 813,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 814,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 815,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 816,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 817,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 818,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 819,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 820,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 821,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 822,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 823,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 824,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 825,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 826,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 827,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 828,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 829,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 830,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 831,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 832,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 833,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 834,
  ProjectChildrenContentfulProjectDetailTextNodeId = 835,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 836,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 837,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 838,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 839,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 840,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 841,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 842,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 843,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 844,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 845,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 846,
  ProjectChildrenChildren = 847,
  ProjectChildrenChildrenChildren = 848,
  ProjectChildrenChildrenId = 849,
  ProjectChildrenId = 850,
  ProjectChildrenInternalContent = 851,
  ProjectChildrenInternalContentDigest = 852,
  ProjectChildrenInternalDescription = 853,
  ProjectChildrenInternalFieldOwners = 854,
  ProjectChildrenInternalIgnoreType = 855,
  ProjectChildrenInternalMediaType = 856,
  ProjectChildrenInternalOwner = 857,
  ProjectChildrenInternalType = 858,
  ProjectChildrenParentChildren = 859,
  ProjectChildrenParentId = 860,
  ProjectContentfulId = 861,
  ProjectCreatedAt = 862,
  ProjectDetailChildMdxBody = 863,
  ProjectDetailChildMdxChildren = 864,
  ProjectDetailChildMdxExcerpt = 865,
  ProjectDetailChildMdxFileAbsolutePath = 866,
  ProjectDetailChildMdxHeadings = 867,
  ProjectDetailChildMdxHtml = 868,
  ProjectDetailChildMdxId = 869,
  ProjectDetailChildMdxMdxAst = 870,
  ProjectDetailChildMdxRawBody = 871,
  ProjectDetailChildMdxSlug = 872,
  ProjectDetailChildMdxTableOfContents = 873,
  ProjectDetailChildMdxTimeToRead = 874,
  ProjectDetailChildren = 875,
  ProjectDetailChildrenMdx = 876,
  ProjectDetailChildrenMdxBody = 877,
  ProjectDetailChildrenMdxChildren = 878,
  ProjectDetailChildrenMdxExcerpt = 879,
  ProjectDetailChildrenMdxFileAbsolutePath = 880,
  ProjectDetailChildrenMdxHeadings = 881,
  ProjectDetailChildrenMdxHtml = 882,
  ProjectDetailChildrenMdxId = 883,
  ProjectDetailChildrenMdxMdxAst = 884,
  ProjectDetailChildrenMdxRawBody = 885,
  ProjectDetailChildrenMdxSlug = 886,
  ProjectDetailChildrenMdxTableOfContents = 887,
  ProjectDetailChildrenMdxTimeToRead = 888,
  ProjectDetailChildrenChildren = 889,
  ProjectDetailChildrenId = 890,
  ProjectDetailDetail = 891,
  ProjectDetailId = 892,
  ProjectDetailInternalContent = 893,
  ProjectDetailInternalContentDigest = 894,
  ProjectDetailInternalDescription = 895,
  ProjectDetailInternalFieldOwners = 896,
  ProjectDetailInternalIgnoreType = 897,
  ProjectDetailInternalMediaType = 898,
  ProjectDetailInternalOwner = 899,
  ProjectDetailInternalType = 900,
  ProjectDetailParentChildren = 901,
  ProjectDetailParentId = 902,
  ProjectDetailSysType = 903,
  ProjectEndDate = 904,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 905,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 906,
  ProjectIconChildContentfulIconSvgTextNodeId = 907,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 908,
  ProjectIconChildren = 909,
  ProjectIconChildrenContentfulIconSvgTextNode = 910,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 911,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 912,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 913,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 914,
  ProjectIconChildrenChildren = 915,
  ProjectIconChildrenId = 916,
  ProjectIconContact = 917,
  ProjectIconContactChildren = 918,
  ProjectIconContactContentfulId = 919,
  ProjectIconContactCreatedAt = 920,
  ProjectIconContactHref = 921,
  ProjectIconContactId = 922,
  ProjectIconContactName = 923,
  ProjectIconContactNodeLocale = 924,
  ProjectIconContactSortKey = 925,
  ProjectIconContactSpaceId = 926,
  ProjectIconContactSubName = 927,
  ProjectIconContactUpdatedAt = 928,
  ProjectIconContentfulId = 929,
  ProjectIconCreatedAt = 930,
  ProjectIconHistory = 931,
  ProjectIconHistoryChildren = 932,
  ProjectIconHistoryContentfulId = 933,
  ProjectIconHistoryCreatedAt = 934,
  ProjectIconHistoryDate = 935,
  ProjectIconHistoryId = 936,
  ProjectIconHistoryName = 937,
  ProjectIconHistoryNodeLocale = 938,
  ProjectIconHistorySpaceId = 939,
  ProjectIconHistorySubName = 940,
  ProjectIconHistoryUpdatedAt = 941,
  ProjectIconId = 942,
  ProjectIconInternalContent = 943,
  ProjectIconInternalContentDigest = 944,
  ProjectIconInternalDescription = 945,
  ProjectIconInternalFieldOwners = 946,
  ProjectIconInternalIgnoreType = 947,
  ProjectIconInternalMediaType = 948,
  ProjectIconInternalOwner = 949,
  ProjectIconInternalType = 950,
  ProjectIconName = 951,
  ProjectIconNodeLocale = 952,
  ProjectIconOss = 953,
  ProjectIconOssChildren = 954,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 955,
  ProjectIconOssContentfulId = 956,
  ProjectIconOssCreatedAt = 957,
  ProjectIconOssHref = 958,
  ProjectIconOssId = 959,
  ProjectIconOssName = 960,
  ProjectIconOssNodeLocale = 961,
  ProjectIconOssSpaceId = 962,
  ProjectIconOssStartDate = 963,
  ProjectIconOssSubName = 964,
  ProjectIconOssTags = 965,
  ProjectIconOssUpdatedAt = 966,
  ProjectIconParentChildren = 967,
  ProjectIconParentId = 968,
  ProjectIconProject = 969,
  ProjectIconProjectChildren = 970,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 971,
  ProjectIconProjectContentfulId = 972,
  ProjectIconProjectCreatedAt = 973,
  ProjectIconProjectEndDate = 974,
  ProjectIconProjectId = 975,
  ProjectIconProjectName = 976,
  ProjectIconProjectNodeLocale = 977,
  ProjectIconProjectSpaceId = 978,
  ProjectIconProjectStartDate = 979,
  ProjectIconProjectSubName = 980,
  ProjectIconProjectTags = 981,
  ProjectIconProjectUpdatedAt = 982,
  ProjectIconSpaceId = 983,
  ProjectIconSvgChildren = 984,
  ProjectIconSvgChildrenMdx = 985,
  ProjectIconSvgId = 986,
  ProjectIconSvgSvg = 987,
  ProjectIconSysRevision = 988,
  ProjectIconSysType = 989,
  ProjectIconUpdatedAt = 990,
  ProjectIconWhatICanDo = 991,
  ProjectIconWhatICanDoChildren = 992,
  ProjectIconWhatICanDoContentfulId = 993,
  ProjectIconWhatICanDoCreatedAt = 994,
  ProjectIconWhatICanDoId = 995,
  ProjectIconWhatICanDoName = 996,
  ProjectIconWhatICanDoNodeLocale = 997,
  ProjectIconWhatICanDoSortKey = 998,
  ProjectIconWhatICanDoSpaceId = 999,
  ProjectIconWhatICanDoSubName = 1000,
  ProjectIconWhatICanDoUpdatedAt = 1001,
  ProjectId = 1002,
  ProjectInternalContent = 1003,
  ProjectInternalContentDigest = 1004,
  ProjectInternalDescription = 1005,
  ProjectInternalFieldOwners = 1006,
  ProjectInternalIgnoreType = 1007,
  ProjectInternalMediaType = 1008,
  ProjectInternalOwner = 1009,
  ProjectInternalType = 1010,
  ProjectName = 1011,
  ProjectNodeLocale = 1012,
  ProjectParentChildren = 1013,
  ProjectParentChildrenChildren = 1014,
  ProjectParentChildrenId = 1015,
  ProjectParentId = 1016,
  ProjectParentInternalContent = 1017,
  ProjectParentInternalContentDigest = 1018,
  ProjectParentInternalDescription = 1019,
  ProjectParentInternalFieldOwners = 1020,
  ProjectParentInternalIgnoreType = 1021,
  ProjectParentInternalMediaType = 1022,
  ProjectParentInternalOwner = 1023,
  ProjectParentInternalType = 1024,
  ProjectParentParentChildren = 1025,
  ProjectParentParentId = 1026,
  ProjectSpaceId = 1027,
  ProjectStartDate = 1028,
  ProjectSubName = 1029,
  ProjectSysRevision = 1030,
  ProjectSysType = 1031,
  ProjectTags = 1032,
  ProjectTagsBlogPost = 1033,
  ProjectTagsBlogPostChildren = 1034,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1035,
  ProjectTagsBlogPostContentfulId = 1036,
  ProjectTagsBlogPostCreated = 1037,
  ProjectTagsBlogPostCreatedAt = 1038,
  ProjectTagsBlogPostExcerpt = 1039,
  ProjectTagsBlogPostId = 1040,
  ProjectTagsBlogPostNodeLocale = 1041,
  ProjectTagsBlogPostSlug = 1042,
  ProjectTagsBlogPostSpaceId = 1043,
  ProjectTagsBlogPostTags = 1044,
  ProjectTagsBlogPostTitle = 1045,
  ProjectTagsBlogPostUpdated = 1046,
  ProjectTagsBlogPostUpdatedAt = 1047,
  ProjectTagsChildren = 1048,
  ProjectTagsChildrenChildren = 1049,
  ProjectTagsChildrenId = 1050,
  ProjectTagsContentfulId = 1051,
  ProjectTagsCreatedAt = 1052,
  ProjectTagsId = 1053,
  ProjectTagsInternalContent = 1054,
  ProjectTagsInternalContentDigest = 1055,
  ProjectTagsInternalDescription = 1056,
  ProjectTagsInternalFieldOwners = 1057,
  ProjectTagsInternalIgnoreType = 1058,
  ProjectTagsInternalMediaType = 1059,
  ProjectTagsInternalOwner = 1060,
  ProjectTagsInternalType = 1061,
  ProjectTagsLevel = 1062,
  ProjectTagsName = 1063,
  ProjectTagsNodeLocale = 1064,
  ProjectTagsOss = 1065,
  ProjectTagsOssChildren = 1066,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1067,
  ProjectTagsOssContentfulId = 1068,
  ProjectTagsOssCreatedAt = 1069,
  ProjectTagsOssHref = 1070,
  ProjectTagsOssId = 1071,
  ProjectTagsOssName = 1072,
  ProjectTagsOssNodeLocale = 1073,
  ProjectTagsOssSpaceId = 1074,
  ProjectTagsOssStartDate = 1075,
  ProjectTagsOssSubName = 1076,
  ProjectTagsOssTags = 1077,
  ProjectTagsOssUpdatedAt = 1078,
  ProjectTagsParentChildren = 1079,
  ProjectTagsParentId = 1080,
  ProjectTagsProject = 1081,
  ProjectTagsProjectChildren = 1082,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1083,
  ProjectTagsProjectContentfulId = 1084,
  ProjectTagsProjectCreatedAt = 1085,
  ProjectTagsProjectEndDate = 1086,
  ProjectTagsProjectId = 1087,
  ProjectTagsProjectName = 1088,
  ProjectTagsProjectNodeLocale = 1089,
  ProjectTagsProjectSpaceId = 1090,
  ProjectTagsProjectStartDate = 1091,
  ProjectTagsProjectSubName = 1092,
  ProjectTagsProjectTags = 1093,
  ProjectTagsProjectUpdatedAt = 1094,
  ProjectTagsSkillMap = 1095,
  ProjectTagsSkillMapChildren = 1096,
  ProjectTagsSkillMapContentfulId = 1097,
  ProjectTagsSkillMapCreatedAt = 1098,
  ProjectTagsSkillMapExpanded = 1099,
  ProjectTagsSkillMapId = 1100,
  ProjectTagsSkillMapName = 1101,
  ProjectTagsSkillMapNodeLocale = 1102,
  ProjectTagsSkillMapSkills = 1103,
  ProjectTagsSkillMapSortKey = 1104,
  ProjectTagsSkillMapSpaceId = 1105,
  ProjectTagsSkillMapUpdatedAt = 1106,
  ProjectTagsSpaceId = 1107,
  ProjectTagsSysRevision = 1108,
  ProjectTagsSysType = 1109,
  ProjectTagsUpdatedAt = 1110,
  ProjectUpdatedAt = 1111,
  SkillMap = 1112,
  SkillMapChildren = 1113,
  SkillMapChildrenChildren = 1114,
  SkillMapChildrenChildrenChildren = 1115,
  SkillMapChildrenChildrenId = 1116,
  SkillMapChildrenId = 1117,
  SkillMapChildrenInternalContent = 1118,
  SkillMapChildrenInternalContentDigest = 1119,
  SkillMapChildrenInternalDescription = 1120,
  SkillMapChildrenInternalFieldOwners = 1121,
  SkillMapChildrenInternalIgnoreType = 1122,
  SkillMapChildrenInternalMediaType = 1123,
  SkillMapChildrenInternalOwner = 1124,
  SkillMapChildrenInternalType = 1125,
  SkillMapChildrenParentChildren = 1126,
  SkillMapChildrenParentId = 1127,
  SkillMapContentfulId = 1128,
  SkillMapCreatedAt = 1129,
  SkillMapExpanded = 1130,
  SkillMapId = 1131,
  SkillMapInternalContent = 1132,
  SkillMapInternalContentDigest = 1133,
  SkillMapInternalDescription = 1134,
  SkillMapInternalFieldOwners = 1135,
  SkillMapInternalIgnoreType = 1136,
  SkillMapInternalMediaType = 1137,
  SkillMapInternalOwner = 1138,
  SkillMapInternalType = 1139,
  SkillMapName = 1140,
  SkillMapNodeLocale = 1141,
  SkillMapParentChildren = 1142,
  SkillMapParentChildrenChildren = 1143,
  SkillMapParentChildrenId = 1144,
  SkillMapParentId = 1145,
  SkillMapParentInternalContent = 1146,
  SkillMapParentInternalContentDigest = 1147,
  SkillMapParentInternalDescription = 1148,
  SkillMapParentInternalFieldOwners = 1149,
  SkillMapParentInternalIgnoreType = 1150,
  SkillMapParentInternalMediaType = 1151,
  SkillMapParentInternalOwner = 1152,
  SkillMapParentInternalType = 1153,
  SkillMapParentParentChildren = 1154,
  SkillMapParentParentId = 1155,
  SkillMapSkills = 1156,
  SkillMapSkillsBlogPost = 1157,
  SkillMapSkillsBlogPostChildren = 1158,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1159,
  SkillMapSkillsBlogPostContentfulId = 1160,
  SkillMapSkillsBlogPostCreated = 1161,
  SkillMapSkillsBlogPostCreatedAt = 1162,
  SkillMapSkillsBlogPostExcerpt = 1163,
  SkillMapSkillsBlogPostId = 1164,
  SkillMapSkillsBlogPostNodeLocale = 1165,
  SkillMapSkillsBlogPostSlug = 1166,
  SkillMapSkillsBlogPostSpaceId = 1167,
  SkillMapSkillsBlogPostTags = 1168,
  SkillMapSkillsBlogPostTitle = 1169,
  SkillMapSkillsBlogPostUpdated = 1170,
  SkillMapSkillsBlogPostUpdatedAt = 1171,
  SkillMapSkillsChildren = 1172,
  SkillMapSkillsChildrenChildren = 1173,
  SkillMapSkillsChildrenId = 1174,
  SkillMapSkillsContentfulId = 1175,
  SkillMapSkillsCreatedAt = 1176,
  SkillMapSkillsId = 1177,
  SkillMapSkillsInternalContent = 1178,
  SkillMapSkillsInternalContentDigest = 1179,
  SkillMapSkillsInternalDescription = 1180,
  SkillMapSkillsInternalFieldOwners = 1181,
  SkillMapSkillsInternalIgnoreType = 1182,
  SkillMapSkillsInternalMediaType = 1183,
  SkillMapSkillsInternalOwner = 1184,
  SkillMapSkillsInternalType = 1185,
  SkillMapSkillsLevel = 1186,
  SkillMapSkillsName = 1187,
  SkillMapSkillsNodeLocale = 1188,
  SkillMapSkillsOss = 1189,
  SkillMapSkillsOssChildren = 1190,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 1191,
  SkillMapSkillsOssContentfulId = 1192,
  SkillMapSkillsOssCreatedAt = 1193,
  SkillMapSkillsOssHref = 1194,
  SkillMapSkillsOssId = 1195,
  SkillMapSkillsOssName = 1196,
  SkillMapSkillsOssNodeLocale = 1197,
  SkillMapSkillsOssSpaceId = 1198,
  SkillMapSkillsOssStartDate = 1199,
  SkillMapSkillsOssSubName = 1200,
  SkillMapSkillsOssTags = 1201,
  SkillMapSkillsOssUpdatedAt = 1202,
  SkillMapSkillsParentChildren = 1203,
  SkillMapSkillsParentId = 1204,
  SkillMapSkillsProject = 1205,
  SkillMapSkillsProjectChildren = 1206,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 1207,
  SkillMapSkillsProjectContentfulId = 1208,
  SkillMapSkillsProjectCreatedAt = 1209,
  SkillMapSkillsProjectEndDate = 1210,
  SkillMapSkillsProjectId = 1211,
  SkillMapSkillsProjectName = 1212,
  SkillMapSkillsProjectNodeLocale = 1213,
  SkillMapSkillsProjectSpaceId = 1214,
  SkillMapSkillsProjectStartDate = 1215,
  SkillMapSkillsProjectSubName = 1216,
  SkillMapSkillsProjectTags = 1217,
  SkillMapSkillsProjectUpdatedAt = 1218,
  SkillMapSkillsSkillMap = 1219,
  SkillMapSkillsSkillMapChildren = 1220,
  SkillMapSkillsSkillMapContentfulId = 1221,
  SkillMapSkillsSkillMapCreatedAt = 1222,
  SkillMapSkillsSkillMapExpanded = 1223,
  SkillMapSkillsSkillMapId = 1224,
  SkillMapSkillsSkillMapName = 1225,
  SkillMapSkillsSkillMapNodeLocale = 1226,
  SkillMapSkillsSkillMapSkills = 1227,
  SkillMapSkillsSkillMapSortKey = 1228,
  SkillMapSkillsSkillMapSpaceId = 1229,
  SkillMapSkillsSkillMapUpdatedAt = 1230,
  SkillMapSkillsSpaceId = 1231,
  SkillMapSkillsSysRevision = 1232,
  SkillMapSkillsSysType = 1233,
  SkillMapSkillsUpdatedAt = 1234,
  SkillMapSortKey = 1235,
  SkillMapSpaceId = 1236,
  SkillMapSysRevision = 1237,
  SkillMapSysType = 1238,
  SkillMapUpdatedAt = 1239,
  SpaceId = 1240,
  SysContentTypeSysId = 1241,
  SysContentTypeSysLinkType = 1242,
  SysContentTypeSysType = 1243,
  SysRevision = 1244,
  SysType = 1245,
  UpdatedAt = 1246
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
  IconContactIconSvgDarkGatsbyImageData = 150,
  IconContactIconSvgDarkId = 151,
  IconContactIconSvgDarkNodeLocale = 152,
  IconContactIconSvgDarkSpaceId = 153,
  IconContactIconSvgDarkTitle = 154,
  IconContactIconSvgDarkUpdatedAt = 155,
  IconContactIconSvgLightChildren = 156,
  IconContactIconSvgLightContentfulId = 157,
  IconContactIconSvgLightCreatedAt = 158,
  IconContactIconSvgLightDescription = 159,
  IconContactIconSvgLightGatsbyImageData = 160,
  IconContactIconSvgLightId = 161,
  IconContactIconSvgLightNodeLocale = 162,
  IconContactIconSvgLightSpaceId = 163,
  IconContactIconSvgLightTitle = 164,
  IconContactIconSvgLightUpdatedAt = 165,
  IconContactIconChildren = 166,
  IconContactIconChildrenContentfulIconSvgTextNode = 167,
  IconContactIconContact = 168,
  IconContactIconContentfulId = 169,
  IconContactIconCreatedAt = 170,
  IconContactIconHistory = 171,
  IconContactIconId = 172,
  IconContactIconName = 173,
  IconContactIconNodeLocale = 174,
  IconContactIconOss = 175,
  IconContactIconProject = 176,
  IconContactIconSpaceId = 177,
  IconContactIconUpdatedAt = 178,
  IconContactIconWhatICanDo = 179,
  IconContactId = 180,
  IconContactInternalContent = 181,
  IconContactInternalContentDigest = 182,
  IconContactInternalDescription = 183,
  IconContactInternalFieldOwners = 184,
  IconContactInternalIgnoreType = 185,
  IconContactInternalMediaType = 186,
  IconContactInternalOwner = 187,
  IconContactInternalType = 188,
  IconContactName = 189,
  IconContactNodeLocale = 190,
  IconContactParentChildren = 191,
  IconContactParentId = 192,
  IconContactSortKey = 193,
  IconContactSpaceId = 194,
  IconContactSubName = 195,
  IconContactSysRevision = 196,
  IconContactSysType = 197,
  IconContactUpdatedAt = 198,
  IconContentfulId = 199,
  IconCreatedAt = 200,
  IconHistory = 201,
  IconHistoryChildren = 202,
  IconHistoryChildrenChildren = 203,
  IconHistoryChildrenId = 204,
  IconHistoryContentfulId = 205,
  IconHistoryCreatedAt = 206,
  IconHistoryDate = 207,
  IconHistoryIconChildren = 208,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 209,
  IconHistoryIconContact = 210,
  IconHistoryIconContentfulId = 211,
  IconHistoryIconCreatedAt = 212,
  IconHistoryIconHistory = 213,
  IconHistoryIconId = 214,
  IconHistoryIconName = 215,
  IconHistoryIconNodeLocale = 216,
  IconHistoryIconOss = 217,
  IconHistoryIconProject = 218,
  IconHistoryIconSpaceId = 219,
  IconHistoryIconUpdatedAt = 220,
  IconHistoryIconWhatICanDo = 221,
  IconHistoryId = 222,
  IconHistoryInternalContent = 223,
  IconHistoryInternalContentDigest = 224,
  IconHistoryInternalDescription = 225,
  IconHistoryInternalFieldOwners = 226,
  IconHistoryInternalIgnoreType = 227,
  IconHistoryInternalMediaType = 228,
  IconHistoryInternalOwner = 229,
  IconHistoryInternalType = 230,
  IconHistoryName = 231,
  IconHistoryNodeLocale = 232,
  IconHistoryParentChildren = 233,
  IconHistoryParentId = 234,
  IconHistorySpaceId = 235,
  IconHistorySubName = 236,
  IconHistorySysRevision = 237,
  IconHistorySysType = 238,
  IconHistoryUpdatedAt = 239,
  IconId = 240,
  IconInternalContent = 241,
  IconInternalContentDigest = 242,
  IconInternalDescription = 243,
  IconInternalFieldOwners = 244,
  IconInternalIgnoreType = 245,
  IconInternalMediaType = 246,
  IconInternalOwner = 247,
  IconInternalType = 248,
  IconName = 249,
  IconNodeLocale = 250,
  IconOss = 251,
  IconOssChildContentfulOssDetailTextNodeChildren = 252,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 253,
  IconOssChildContentfulOssDetailTextNodeDetail = 254,
  IconOssChildContentfulOssDetailTextNodeId = 255,
  IconOssChildren = 256,
  IconOssChildrenContentfulOssDetailTextNode = 257,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 258,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 259,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 260,
  IconOssChildrenContentfulOssDetailTextNodeId = 261,
  IconOssChildrenChildren = 262,
  IconOssChildrenId = 263,
  IconOssContentfulId = 264,
  IconOssCreatedAt = 265,
  IconOssDetailChildren = 266,
  IconOssDetailChildrenMdx = 267,
  IconOssDetailDetail = 268,
  IconOssDetailId = 269,
  IconOssHref = 270,
  IconOssIconChildren = 271,
  IconOssIconChildrenContentfulIconSvgTextNode = 272,
  IconOssIconContact = 273,
  IconOssIconContentfulId = 274,
  IconOssIconCreatedAt = 275,
  IconOssIconHistory = 276,
  IconOssIconId = 277,
  IconOssIconName = 278,
  IconOssIconNodeLocale = 279,
  IconOssIconOss = 280,
  IconOssIconProject = 281,
  IconOssIconSpaceId = 282,
  IconOssIconUpdatedAt = 283,
  IconOssIconWhatICanDo = 284,
  IconOssId = 285,
  IconOssImageChildren = 286,
  IconOssImageContentfulId = 287,
  IconOssImageCreatedAt = 288,
  IconOssImageDescription = 289,
  IconOssImageGatsbyImageData = 290,
  IconOssImageId = 291,
  IconOssImageNodeLocale = 292,
  IconOssImageSpaceId = 293,
  IconOssImageTitle = 294,
  IconOssImageUpdatedAt = 295,
  IconOssInternalContent = 296,
  IconOssInternalContentDigest = 297,
  IconOssInternalDescription = 298,
  IconOssInternalFieldOwners = 299,
  IconOssInternalIgnoreType = 300,
  IconOssInternalMediaType = 301,
  IconOssInternalOwner = 302,
  IconOssInternalType = 303,
  IconOssName = 304,
  IconOssNodeLocale = 305,
  IconOssParentChildren = 306,
  IconOssParentId = 307,
  IconOssSpaceId = 308,
  IconOssStartDate = 309,
  IconOssSubName = 310,
  IconOssSysRevision = 311,
  IconOssSysType = 312,
  IconOssTags = 313,
  IconOssTagsBlogPost = 314,
  IconOssTagsChildren = 315,
  IconOssTagsContentfulId = 316,
  IconOssTagsCreatedAt = 317,
  IconOssTagsId = 318,
  IconOssTagsLevel = 319,
  IconOssTagsName = 320,
  IconOssTagsNodeLocale = 321,
  IconOssTagsOss = 322,
  IconOssTagsProject = 323,
  IconOssTagsSkillMap = 324,
  IconOssTagsSpaceId = 325,
  IconOssTagsUpdatedAt = 326,
  IconOssUpdatedAt = 327,
  IconParentChildren = 328,
  IconParentChildrenChildren = 329,
  IconParentChildrenId = 330,
  IconParentId = 331,
  IconParentInternalContent = 332,
  IconParentInternalContentDigest = 333,
  IconParentInternalDescription = 334,
  IconParentInternalFieldOwners = 335,
  IconParentInternalIgnoreType = 336,
  IconParentInternalMediaType = 337,
  IconParentInternalOwner = 338,
  IconParentInternalType = 339,
  IconParentParentChildren = 340,
  IconParentParentId = 341,
  IconProject = 342,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 343,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 344,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 345,
  IconProjectChildContentfulProjectDetailTextNodeId = 346,
  IconProjectChildren = 347,
  IconProjectChildrenContentfulProjectDetailTextNode = 348,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 349,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 350,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 351,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 352,
  IconProjectChildrenChildren = 353,
  IconProjectChildrenId = 354,
  IconProjectContentfulId = 355,
  IconProjectCreatedAt = 356,
  IconProjectDetailChildren = 357,
  IconProjectDetailChildrenMdx = 358,
  IconProjectDetailDetail = 359,
  IconProjectDetailId = 360,
  IconProjectEndDate = 361,
  IconProjectIconChildren = 362,
  IconProjectIconChildrenContentfulIconSvgTextNode = 363,
  IconProjectIconContact = 364,
  IconProjectIconContentfulId = 365,
  IconProjectIconCreatedAt = 366,
  IconProjectIconHistory = 367,
  IconProjectIconId = 368,
  IconProjectIconName = 369,
  IconProjectIconNodeLocale = 370,
  IconProjectIconOss = 371,
  IconProjectIconProject = 372,
  IconProjectIconSpaceId = 373,
  IconProjectIconUpdatedAt = 374,
  IconProjectIconWhatICanDo = 375,
  IconProjectId = 376,
  IconProjectInternalContent = 377,
  IconProjectInternalContentDigest = 378,
  IconProjectInternalDescription = 379,
  IconProjectInternalFieldOwners = 380,
  IconProjectInternalIgnoreType = 381,
  IconProjectInternalMediaType = 382,
  IconProjectInternalOwner = 383,
  IconProjectInternalType = 384,
  IconProjectName = 385,
  IconProjectNodeLocale = 386,
  IconProjectParentChildren = 387,
  IconProjectParentId = 388,
  IconProjectSpaceId = 389,
  IconProjectStartDate = 390,
  IconProjectSubName = 391,
  IconProjectSysRevision = 392,
  IconProjectSysType = 393,
  IconProjectTags = 394,
  IconProjectTagsBlogPost = 395,
  IconProjectTagsChildren = 396,
  IconProjectTagsContentfulId = 397,
  IconProjectTagsCreatedAt = 398,
  IconProjectTagsId = 399,
  IconProjectTagsLevel = 400,
  IconProjectTagsName = 401,
  IconProjectTagsNodeLocale = 402,
  IconProjectTagsOss = 403,
  IconProjectTagsProject = 404,
  IconProjectTagsSkillMap = 405,
  IconProjectTagsSpaceId = 406,
  IconProjectTagsUpdatedAt = 407,
  IconProjectUpdatedAt = 408,
  IconSpaceId = 409,
  IconSvgChildMdxBody = 410,
  IconSvgChildMdxChildren = 411,
  IconSvgChildMdxExcerpt = 412,
  IconSvgChildMdxFileAbsolutePath = 413,
  IconSvgChildMdxHeadings = 414,
  IconSvgChildMdxHtml = 415,
  IconSvgChildMdxId = 416,
  IconSvgChildMdxMdxAst = 417,
  IconSvgChildMdxRawBody = 418,
  IconSvgChildMdxSlug = 419,
  IconSvgChildMdxTableOfContents = 420,
  IconSvgChildMdxTimeToRead = 421,
  IconSvgChildren = 422,
  IconSvgChildrenMdx = 423,
  IconSvgChildrenMdxBody = 424,
  IconSvgChildrenMdxChildren = 425,
  IconSvgChildrenMdxExcerpt = 426,
  IconSvgChildrenMdxFileAbsolutePath = 427,
  IconSvgChildrenMdxHeadings = 428,
  IconSvgChildrenMdxHtml = 429,
  IconSvgChildrenMdxId = 430,
  IconSvgChildrenMdxMdxAst = 431,
  IconSvgChildrenMdxRawBody = 432,
  IconSvgChildrenMdxSlug = 433,
  IconSvgChildrenMdxTableOfContents = 434,
  IconSvgChildrenMdxTimeToRead = 435,
  IconSvgChildrenChildren = 436,
  IconSvgChildrenId = 437,
  IconSvgId = 438,
  IconSvgInternalContent = 439,
  IconSvgInternalContentDigest = 440,
  IconSvgInternalDescription = 441,
  IconSvgInternalFieldOwners = 442,
  IconSvgInternalIgnoreType = 443,
  IconSvgInternalMediaType = 444,
  IconSvgInternalOwner = 445,
  IconSvgInternalType = 446,
  IconSvgParentChildren = 447,
  IconSvgParentId = 448,
  IconSvgSvg = 449,
  IconSvgSysType = 450,
  IconSysRevision = 451,
  IconSysType = 452,
  IconUpdatedAt = 453,
  IconWhatICanDo = 454,
  IconWhatICanDoChildren = 455,
  IconWhatICanDoChildrenChildren = 456,
  IconWhatICanDoChildrenId = 457,
  IconWhatICanDoContentfulId = 458,
  IconWhatICanDoCreatedAt = 459,
  IconWhatICanDoIconChildren = 460,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 461,
  IconWhatICanDoIconContact = 462,
  IconWhatICanDoIconContentfulId = 463,
  IconWhatICanDoIconCreatedAt = 464,
  IconWhatICanDoIconHistory = 465,
  IconWhatICanDoIconId = 466,
  IconWhatICanDoIconName = 467,
  IconWhatICanDoIconNodeLocale = 468,
  IconWhatICanDoIconOss = 469,
  IconWhatICanDoIconProject = 470,
  IconWhatICanDoIconSpaceId = 471,
  IconWhatICanDoIconUpdatedAt = 472,
  IconWhatICanDoIconWhatICanDo = 473,
  IconWhatICanDoId = 474,
  IconWhatICanDoInternalContent = 475,
  IconWhatICanDoInternalContentDigest = 476,
  IconWhatICanDoInternalDescription = 477,
  IconWhatICanDoInternalFieldOwners = 478,
  IconWhatICanDoInternalIgnoreType = 479,
  IconWhatICanDoInternalMediaType = 480,
  IconWhatICanDoInternalOwner = 481,
  IconWhatICanDoInternalType = 482,
  IconWhatICanDoName = 483,
  IconWhatICanDoNodeLocale = 484,
  IconWhatICanDoParentChildren = 485,
  IconWhatICanDoParentId = 486,
  IconWhatICanDoSortKey = 487,
  IconWhatICanDoSpaceId = 488,
  IconWhatICanDoSubName = 489,
  IconWhatICanDoSysRevision = 490,
  IconWhatICanDoSysType = 491,
  IconWhatICanDoUpdatedAt = 492,
  Id = 493,
  InternalContent = 494,
  InternalContentDigest = 495,
  InternalDescription = 496,
  InternalFieldOwners = 497,
  InternalIgnoreType = 498,
  InternalMediaType = 499,
  InternalOwner = 500,
  InternalType = 501,
  Name = 502,
  NodeLocale = 503,
  ParentChildren = 504,
  ParentChildrenChildren = 505,
  ParentChildrenChildrenChildren = 506,
  ParentChildrenChildrenId = 507,
  ParentChildrenId = 508,
  ParentChildrenInternalContent = 509,
  ParentChildrenInternalContentDigest = 510,
  ParentChildrenInternalDescription = 511,
  ParentChildrenInternalFieldOwners = 512,
  ParentChildrenInternalIgnoreType = 513,
  ParentChildrenInternalMediaType = 514,
  ParentChildrenInternalOwner = 515,
  ParentChildrenInternalType = 516,
  ParentChildrenParentChildren = 517,
  ParentChildrenParentId = 518,
  ParentId = 519,
  ParentInternalContent = 520,
  ParentInternalContentDigest = 521,
  ParentInternalDescription = 522,
  ParentInternalFieldOwners = 523,
  ParentInternalIgnoreType = 524,
  ParentInternalMediaType = 525,
  ParentInternalOwner = 526,
  ParentInternalType = 527,
  ParentParentChildren = 528,
  ParentParentChildrenChildren = 529,
  ParentParentChildrenId = 530,
  ParentParentId = 531,
  ParentParentInternalContent = 532,
  ParentParentInternalContentDigest = 533,
  ParentParentInternalDescription = 534,
  ParentParentInternalFieldOwners = 535,
  ParentParentInternalIgnoreType = 536,
  ParentParentInternalMediaType = 537,
  ParentParentInternalOwner = 538,
  ParentParentInternalType = 539,
  ParentParentParentChildren = 540,
  ParentParentParentId = 541,
  SortKey = 542,
  SpaceId = 543,
  SubName = 544,
  SysContentTypeSysId = 545,
  SysContentTypeSysLinkType = 546,
  SysContentTypeSysType = 547,
  SysRevision = 548,
  SysType = 549,
  UpdatedAt = 550
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
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  localFile: InputMaybe<FileFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulAssetSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
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
