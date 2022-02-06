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
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkChildren = 0,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkChildrenChildren = 1,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkChildrenId = 2,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerpt = 3,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerptAst = 4,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkFrontmatterTitle = 5,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadings = 6,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadingsDepth = 7,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadingsId = 8,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadingsValue = 9,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkHtml = 10,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkHtmlAst = 11,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkId = 12,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalContent = 13,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalContentDigest = 14,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalDescription = 15,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalFieldOwners = 16,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalIgnoreType = 17,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalMediaType = 18,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalOwner = 19,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalType = 20,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkParentChildren = 21,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkParentId = 22,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkRawMarkdownBody = 23,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkTableOfContents = 24,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkTimeToRead = 25,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkWordCountParagraphs = 26,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkWordCountSentences = 27,
  ChildContentfulBlogPostContentTextNodeChildMarkdownRemarkWordCountWords = 28,
  ChildContentfulBlogPostContentTextNodeChildMdxBody = 29,
  ChildContentfulBlogPostContentTextNodeChildMdxChildren = 30,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 31,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenId = 32,
  ChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 33,
  ChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 34,
  ChildContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 35,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadings = 36,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 37,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 38,
  ChildContentfulBlogPostContentTextNodeChildMdxHtml = 39,
  ChildContentfulBlogPostContentTextNodeChildMdxId = 40,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContent = 41,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 42,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalDescription = 43,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 44,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 45,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 46,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalOwner = 47,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalType = 48,
  ChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 49,
  ChildContentfulBlogPostContentTextNodeChildMdxParentChildren = 50,
  ChildContentfulBlogPostContentTextNodeChildMdxParentId = 51,
  ChildContentfulBlogPostContentTextNodeChildMdxRawBody = 52,
  ChildContentfulBlogPostContentTextNodeChildMdxSlug = 53,
  ChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 54,
  ChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 55,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 56,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 57,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountWords = 58,
  ChildContentfulBlogPostContentTextNodeChildren = 59,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 60,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildren = 61,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildrenChildren = 62,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildrenId = 63,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerpt = 64,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerptAst = 65,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkFrontmatterTitle = 66,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadings = 67,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsDepth = 68,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsId = 69,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsValue = 70,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtml = 71,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtmlAst = 72,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkId = 73,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalContent = 74,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalContentDigest = 75,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalDescription = 76,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalFieldOwners = 77,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalIgnoreType = 78,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalMediaType = 79,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalOwner = 80,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalType = 81,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkParentChildren = 82,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkParentId = 83,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkRawMarkdownBody = 84,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTableOfContents = 85,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTimeToRead = 86,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountParagraphs = 87,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountSentences = 88,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountWords = 89,
  ChildContentfulBlogPostContentTextNodeChildrenMdx = 90,
  ChildContentfulBlogPostContentTextNodeChildrenMdxBody = 91,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 92,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 93,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 94,
  ChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 95,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 96,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 97,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 98,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 99,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 100,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 101,
  ChildContentfulBlogPostContentTextNodeChildrenMdxId = 102,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 103,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 104,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 105,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 106,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 107,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 108,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 109,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalType = 110,
  ChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 111,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 112,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentId = 113,
  ChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 114,
  ChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 115,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 116,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 117,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 118,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 119,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 120,
  ChildContentfulBlogPostContentTextNodeChildrenChildren = 121,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenChildren = 122,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenId = 123,
  ChildContentfulBlogPostContentTextNodeChildrenId = 124,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContent = 125,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 126,
  ChildContentfulBlogPostContentTextNodeChildrenInternalDescription = 127,
  ChildContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 128,
  ChildContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 129,
  ChildContentfulBlogPostContentTextNodeChildrenInternalMediaType = 130,
  ChildContentfulBlogPostContentTextNodeChildrenInternalOwner = 131,
  ChildContentfulBlogPostContentTextNodeChildrenInternalType = 132,
  ChildContentfulBlogPostContentTextNodeChildrenParentChildren = 133,
  ChildContentfulBlogPostContentTextNodeChildrenParentId = 134,
  ChildContentfulBlogPostContentTextNodeContent = 135,
  ChildContentfulBlogPostContentTextNodeId = 136,
  ChildContentfulBlogPostContentTextNodeInternalContent = 137,
  ChildContentfulBlogPostContentTextNodeInternalContentDigest = 138,
  ChildContentfulBlogPostContentTextNodeInternalDescription = 139,
  ChildContentfulBlogPostContentTextNodeInternalFieldOwners = 140,
  ChildContentfulBlogPostContentTextNodeInternalIgnoreType = 141,
  ChildContentfulBlogPostContentTextNodeInternalMediaType = 142,
  ChildContentfulBlogPostContentTextNodeInternalOwner = 143,
  ChildContentfulBlogPostContentTextNodeInternalType = 144,
  ChildContentfulBlogPostContentTextNodeParentChildren = 145,
  ChildContentfulBlogPostContentTextNodeParentChildrenChildren = 146,
  ChildContentfulBlogPostContentTextNodeParentChildrenId = 147,
  ChildContentfulBlogPostContentTextNodeParentId = 148,
  ChildContentfulBlogPostContentTextNodeParentInternalContent = 149,
  ChildContentfulBlogPostContentTextNodeParentInternalContentDigest = 150,
  ChildContentfulBlogPostContentTextNodeParentInternalDescription = 151,
  ChildContentfulBlogPostContentTextNodeParentInternalFieldOwners = 152,
  ChildContentfulBlogPostContentTextNodeParentInternalIgnoreType = 153,
  ChildContentfulBlogPostContentTextNodeParentInternalMediaType = 154,
  ChildContentfulBlogPostContentTextNodeParentInternalOwner = 155,
  ChildContentfulBlogPostContentTextNodeParentInternalType = 156,
  ChildContentfulBlogPostContentTextNodeParentParentChildren = 157,
  ChildContentfulBlogPostContentTextNodeParentParentId = 158,
  ChildContentfulBlogPostContentTextNodeSysType = 159,
  Children = 160,
  ChildrenContentfulBlogPostContentTextNode = 161,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkChildren = 162,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkChildrenChildren = 163,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkChildrenId = 164,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerpt = 165,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerptAst = 166,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkFrontmatterTitle = 167,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadings = 168,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadingsDepth = 169,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadingsId = 170,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadingsValue = 171,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHtml = 172,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHtmlAst = 173,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkId = 174,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalContent = 175,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalContentDigest = 176,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalDescription = 177,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalFieldOwners = 178,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalIgnoreType = 179,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalMediaType = 180,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalOwner = 181,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalType = 182,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkParentChildren = 183,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkParentId = 184,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkRawMarkdownBody = 185,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkTableOfContents = 186,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkTimeToRead = 187,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkWordCountParagraphs = 188,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkWordCountSentences = 189,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkWordCountWords = 190,
  ChildrenContentfulBlogPostContentTextNodeChildMdxBody = 191,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 192,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 193,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenId = 194,
  ChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 195,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 196,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 197,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 198,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 199,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 200,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 201,
  ChildrenContentfulBlogPostContentTextNodeChildMdxId = 202,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContent = 203,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 204,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalDescription = 205,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 206,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 207,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 208,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalOwner = 209,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalType = 210,
  ChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 211,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentChildren = 212,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentId = 213,
  ChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 214,
  ChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 215,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 216,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 217,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 218,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 219,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountWords = 220,
  ChildrenContentfulBlogPostContentTextNodeChildren = 221,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 222,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildren = 223,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildrenChildren = 224,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildrenId = 225,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerpt = 226,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerptAst = 227,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkFrontmatterTitle = 228,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadings = 229,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsDepth = 230,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsId = 231,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsValue = 232,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtml = 233,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtmlAst = 234,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkId = 235,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalContent = 236,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalContentDigest = 237,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalDescription = 238,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalFieldOwners = 239,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalIgnoreType = 240,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalMediaType = 241,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalOwner = 242,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalType = 243,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkParentChildren = 244,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkParentId = 245,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkRawMarkdownBody = 246,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTableOfContents = 247,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTimeToRead = 248,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountParagraphs = 249,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountSentences = 250,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountWords = 251,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdx = 252,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 253,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 254,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 255,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 256,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 257,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 258,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 259,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 260,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 261,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 262,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 263,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 264,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 265,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 266,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 267,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 268,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 269,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 270,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 271,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalType = 272,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 273,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 274,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentId = 275,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 276,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 277,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 278,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 279,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 280,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 281,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 282,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildren = 283,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenChildren = 284,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenId = 285,
  ChildrenContentfulBlogPostContentTextNodeChildrenId = 286,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContent = 287,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 288,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalDescription = 289,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 290,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 291,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalMediaType = 292,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalOwner = 293,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalType = 294,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentChildren = 295,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentId = 296,
  ChildrenContentfulBlogPostContentTextNodeContent = 297,
  ChildrenContentfulBlogPostContentTextNodeId = 298,
  ChildrenContentfulBlogPostContentTextNodeInternalContent = 299,
  ChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 300,
  ChildrenContentfulBlogPostContentTextNodeInternalDescription = 301,
  ChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 302,
  ChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 303,
  ChildrenContentfulBlogPostContentTextNodeInternalMediaType = 304,
  ChildrenContentfulBlogPostContentTextNodeInternalOwner = 305,
  ChildrenContentfulBlogPostContentTextNodeInternalType = 306,
  ChildrenContentfulBlogPostContentTextNodeParentChildren = 307,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenChildren = 308,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenId = 309,
  ChildrenContentfulBlogPostContentTextNodeParentId = 310,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContent = 311,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentDigest = 312,
  ChildrenContentfulBlogPostContentTextNodeParentInternalDescription = 313,
  ChildrenContentfulBlogPostContentTextNodeParentInternalFieldOwners = 314,
  ChildrenContentfulBlogPostContentTextNodeParentInternalIgnoreType = 315,
  ChildrenContentfulBlogPostContentTextNodeParentInternalMediaType = 316,
  ChildrenContentfulBlogPostContentTextNodeParentInternalOwner = 317,
  ChildrenContentfulBlogPostContentTextNodeParentInternalType = 318,
  ChildrenContentfulBlogPostContentTextNodeParentParentChildren = 319,
  ChildrenContentfulBlogPostContentTextNodeParentParentId = 320,
  ChildrenContentfulBlogPostContentTextNodeSysType = 321,
  ChildrenChildren = 322,
  ChildrenChildrenChildren = 323,
  ChildrenChildrenChildrenChildren = 324,
  ChildrenChildrenChildrenId = 325,
  ChildrenChildrenId = 326,
  ChildrenChildrenInternalContent = 327,
  ChildrenChildrenInternalContentDigest = 328,
  ChildrenChildrenInternalDescription = 329,
  ChildrenChildrenInternalFieldOwners = 330,
  ChildrenChildrenInternalIgnoreType = 331,
  ChildrenChildrenInternalMediaType = 332,
  ChildrenChildrenInternalOwner = 333,
  ChildrenChildrenInternalType = 334,
  ChildrenChildrenParentChildren = 335,
  ChildrenChildrenParentId = 336,
  ChildrenId = 337,
  ChildrenInternalContent = 338,
  ChildrenInternalContentDigest = 339,
  ChildrenInternalDescription = 340,
  ChildrenInternalFieldOwners = 341,
  ChildrenInternalIgnoreType = 342,
  ChildrenInternalMediaType = 343,
  ChildrenInternalOwner = 344,
  ChildrenInternalType = 345,
  ChildrenParentChildren = 346,
  ChildrenParentChildrenChildren = 347,
  ChildrenParentChildrenId = 348,
  ChildrenParentId = 349,
  ChildrenParentInternalContent = 350,
  ChildrenParentInternalContentDigest = 351,
  ChildrenParentInternalDescription = 352,
  ChildrenParentInternalFieldOwners = 353,
  ChildrenParentInternalIgnoreType = 354,
  ChildrenParentInternalMediaType = 355,
  ChildrenParentInternalOwner = 356,
  ChildrenParentInternalType = 357,
  ChildrenParentParentChildren = 358,
  ChildrenParentParentId = 359,
  ContentChildMarkdownRemarkChildren = 360,
  ContentChildMarkdownRemarkChildrenChildren = 361,
  ContentChildMarkdownRemarkChildrenId = 362,
  ContentChildMarkdownRemarkExcerpt = 363,
  ContentChildMarkdownRemarkExcerptAst = 364,
  ContentChildMarkdownRemarkFrontmatterTitle = 365,
  ContentChildMarkdownRemarkHeadings = 366,
  ContentChildMarkdownRemarkHeadingsDepth = 367,
  ContentChildMarkdownRemarkHeadingsId = 368,
  ContentChildMarkdownRemarkHeadingsValue = 369,
  ContentChildMarkdownRemarkHtml = 370,
  ContentChildMarkdownRemarkHtmlAst = 371,
  ContentChildMarkdownRemarkId = 372,
  ContentChildMarkdownRemarkInternalContent = 373,
  ContentChildMarkdownRemarkInternalContentDigest = 374,
  ContentChildMarkdownRemarkInternalDescription = 375,
  ContentChildMarkdownRemarkInternalFieldOwners = 376,
  ContentChildMarkdownRemarkInternalIgnoreType = 377,
  ContentChildMarkdownRemarkInternalMediaType = 378,
  ContentChildMarkdownRemarkInternalOwner = 379,
  ContentChildMarkdownRemarkInternalType = 380,
  ContentChildMarkdownRemarkParentChildren = 381,
  ContentChildMarkdownRemarkParentId = 382,
  ContentChildMarkdownRemarkRawMarkdownBody = 383,
  ContentChildMarkdownRemarkTableOfContents = 384,
  ContentChildMarkdownRemarkTimeToRead = 385,
  ContentChildMarkdownRemarkWordCountParagraphs = 386,
  ContentChildMarkdownRemarkWordCountSentences = 387,
  ContentChildMarkdownRemarkWordCountWords = 388,
  ContentChildMdxBody = 389,
  ContentChildMdxChildren = 390,
  ContentChildMdxChildrenChildren = 391,
  ContentChildMdxChildrenId = 392,
  ContentChildMdxExcerpt = 393,
  ContentChildMdxFileAbsolutePath = 394,
  ContentChildMdxFrontmatterTitle = 395,
  ContentChildMdxHeadings = 396,
  ContentChildMdxHeadingsDepth = 397,
  ContentChildMdxHeadingsValue = 398,
  ContentChildMdxHtml = 399,
  ContentChildMdxId = 400,
  ContentChildMdxInternalContent = 401,
  ContentChildMdxInternalContentDigest = 402,
  ContentChildMdxInternalDescription = 403,
  ContentChildMdxInternalFieldOwners = 404,
  ContentChildMdxInternalIgnoreType = 405,
  ContentChildMdxInternalMediaType = 406,
  ContentChildMdxInternalOwner = 407,
  ContentChildMdxInternalType = 408,
  ContentChildMdxMdxAst = 409,
  ContentChildMdxParentChildren = 410,
  ContentChildMdxParentId = 411,
  ContentChildMdxRawBody = 412,
  ContentChildMdxSlug = 413,
  ContentChildMdxTableOfContents = 414,
  ContentChildMdxTimeToRead = 415,
  ContentChildMdxWordCountParagraphs = 416,
  ContentChildMdxWordCountSentences = 417,
  ContentChildMdxWordCountWords = 418,
  ContentChildren = 419,
  ContentChildrenMarkdownRemark = 420,
  ContentChildrenMarkdownRemarkChildren = 421,
  ContentChildrenMarkdownRemarkChildrenChildren = 422,
  ContentChildrenMarkdownRemarkChildrenId = 423,
  ContentChildrenMarkdownRemarkExcerpt = 424,
  ContentChildrenMarkdownRemarkExcerptAst = 425,
  ContentChildrenMarkdownRemarkFrontmatterTitle = 426,
  ContentChildrenMarkdownRemarkHeadings = 427,
  ContentChildrenMarkdownRemarkHeadingsDepth = 428,
  ContentChildrenMarkdownRemarkHeadingsId = 429,
  ContentChildrenMarkdownRemarkHeadingsValue = 430,
  ContentChildrenMarkdownRemarkHtml = 431,
  ContentChildrenMarkdownRemarkHtmlAst = 432,
  ContentChildrenMarkdownRemarkId = 433,
  ContentChildrenMarkdownRemarkInternalContent = 434,
  ContentChildrenMarkdownRemarkInternalContentDigest = 435,
  ContentChildrenMarkdownRemarkInternalDescription = 436,
  ContentChildrenMarkdownRemarkInternalFieldOwners = 437,
  ContentChildrenMarkdownRemarkInternalIgnoreType = 438,
  ContentChildrenMarkdownRemarkInternalMediaType = 439,
  ContentChildrenMarkdownRemarkInternalOwner = 440,
  ContentChildrenMarkdownRemarkInternalType = 441,
  ContentChildrenMarkdownRemarkParentChildren = 442,
  ContentChildrenMarkdownRemarkParentId = 443,
  ContentChildrenMarkdownRemarkRawMarkdownBody = 444,
  ContentChildrenMarkdownRemarkTableOfContents = 445,
  ContentChildrenMarkdownRemarkTimeToRead = 446,
  ContentChildrenMarkdownRemarkWordCountParagraphs = 447,
  ContentChildrenMarkdownRemarkWordCountSentences = 448,
  ContentChildrenMarkdownRemarkWordCountWords = 449,
  ContentChildrenMdx = 450,
  ContentChildrenMdxBody = 451,
  ContentChildrenMdxChildren = 452,
  ContentChildrenMdxChildrenChildren = 453,
  ContentChildrenMdxChildrenId = 454,
  ContentChildrenMdxExcerpt = 455,
  ContentChildrenMdxFileAbsolutePath = 456,
  ContentChildrenMdxFrontmatterTitle = 457,
  ContentChildrenMdxHeadings = 458,
  ContentChildrenMdxHeadingsDepth = 459,
  ContentChildrenMdxHeadingsValue = 460,
  ContentChildrenMdxHtml = 461,
  ContentChildrenMdxId = 462,
  ContentChildrenMdxInternalContent = 463,
  ContentChildrenMdxInternalContentDigest = 464,
  ContentChildrenMdxInternalDescription = 465,
  ContentChildrenMdxInternalFieldOwners = 466,
  ContentChildrenMdxInternalIgnoreType = 467,
  ContentChildrenMdxInternalMediaType = 468,
  ContentChildrenMdxInternalOwner = 469,
  ContentChildrenMdxInternalType = 470,
  ContentChildrenMdxMdxAst = 471,
  ContentChildrenMdxParentChildren = 472,
  ContentChildrenMdxParentId = 473,
  ContentChildrenMdxRawBody = 474,
  ContentChildrenMdxSlug = 475,
  ContentChildrenMdxTableOfContents = 476,
  ContentChildrenMdxTimeToRead = 477,
  ContentChildrenMdxWordCountParagraphs = 478,
  ContentChildrenMdxWordCountSentences = 479,
  ContentChildrenMdxWordCountWords = 480,
  ContentChildrenChildren = 481,
  ContentChildrenChildrenChildren = 482,
  ContentChildrenChildrenId = 483,
  ContentChildrenId = 484,
  ContentChildrenInternalContent = 485,
  ContentChildrenInternalContentDigest = 486,
  ContentChildrenInternalDescription = 487,
  ContentChildrenInternalFieldOwners = 488,
  ContentChildrenInternalIgnoreType = 489,
  ContentChildrenInternalMediaType = 490,
  ContentChildrenInternalOwner = 491,
  ContentChildrenInternalType = 492,
  ContentChildrenParentChildren = 493,
  ContentChildrenParentId = 494,
  ContentContent = 495,
  ContentId = 496,
  ContentInternalContent = 497,
  ContentInternalContentDigest = 498,
  ContentInternalDescription = 499,
  ContentInternalFieldOwners = 500,
  ContentInternalIgnoreType = 501,
  ContentInternalMediaType = 502,
  ContentInternalOwner = 503,
  ContentInternalType = 504,
  ContentParentChildren = 505,
  ContentParentChildrenChildren = 506,
  ContentParentChildrenId = 507,
  ContentParentId = 508,
  ContentParentInternalContent = 509,
  ContentParentInternalContentDigest = 510,
  ContentParentInternalDescription = 511,
  ContentParentInternalFieldOwners = 512,
  ContentParentInternalIgnoreType = 513,
  ContentParentInternalMediaType = 514,
  ContentParentInternalOwner = 515,
  ContentParentInternalType = 516,
  ContentParentParentChildren = 517,
  ContentParentParentId = 518,
  ContentSysType = 519,
  ContentfulId = 520,
  Created = 521,
  CreatedAt = 522,
  Excerpt = 523,
  Id = 524,
  InternalContent = 525,
  InternalContentDigest = 526,
  InternalDescription = 527,
  InternalFieldOwners = 528,
  InternalIgnoreType = 529,
  InternalMediaType = 530,
  InternalOwner = 531,
  InternalType = 532,
  NodeLocale = 533,
  ParentChildren = 534,
  ParentChildrenChildren = 535,
  ParentChildrenChildrenChildren = 536,
  ParentChildrenChildrenId = 537,
  ParentChildrenId = 538,
  ParentChildrenInternalContent = 539,
  ParentChildrenInternalContentDigest = 540,
  ParentChildrenInternalDescription = 541,
  ParentChildrenInternalFieldOwners = 542,
  ParentChildrenInternalIgnoreType = 543,
  ParentChildrenInternalMediaType = 544,
  ParentChildrenInternalOwner = 545,
  ParentChildrenInternalType = 546,
  ParentChildrenParentChildren = 547,
  ParentChildrenParentId = 548,
  ParentId = 549,
  ParentInternalContent = 550,
  ParentInternalContentDigest = 551,
  ParentInternalDescription = 552,
  ParentInternalFieldOwners = 553,
  ParentInternalIgnoreType = 554,
  ParentInternalMediaType = 555,
  ParentInternalOwner = 556,
  ParentInternalType = 557,
  ParentParentChildren = 558,
  ParentParentChildrenChildren = 559,
  ParentParentChildrenId = 560,
  ParentParentId = 561,
  ParentParentInternalContent = 562,
  ParentParentInternalContentDigest = 563,
  ParentParentInternalDescription = 564,
  ParentParentInternalFieldOwners = 565,
  ParentParentInternalIgnoreType = 566,
  ParentParentInternalMediaType = 567,
  ParentParentInternalOwner = 568,
  ParentParentInternalType = 569,
  ParentParentParentChildren = 570,
  ParentParentParentId = 571,
  Slug = 572,
  SpaceId = 573,
  SysContentTypeSysId = 574,
  SysContentTypeSysLinkType = 575,
  SysContentTypeSysType = 576,
  SysRevision = 577,
  SysType = 578,
  Tags = 579,
  TagsBlogPost = 580,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 581,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 582,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 583,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 584,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 585,
  TagsBlogPostChildren = 586,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 587,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 588,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 589,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 590,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 591,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 592,
  TagsBlogPostChildrenChildren = 593,
  TagsBlogPostChildrenId = 594,
  TagsBlogPostContentChildren = 595,
  TagsBlogPostContentChildrenMarkdownRemark = 596,
  TagsBlogPostContentChildrenMdx = 597,
  TagsBlogPostContentContent = 598,
  TagsBlogPostContentId = 599,
  TagsBlogPostContentfulId = 600,
  TagsBlogPostCreated = 601,
  TagsBlogPostCreatedAt = 602,
  TagsBlogPostExcerpt = 603,
  TagsBlogPostId = 604,
  TagsBlogPostInternalContent = 605,
  TagsBlogPostInternalContentDigest = 606,
  TagsBlogPostInternalDescription = 607,
  TagsBlogPostInternalFieldOwners = 608,
  TagsBlogPostInternalIgnoreType = 609,
  TagsBlogPostInternalMediaType = 610,
  TagsBlogPostInternalOwner = 611,
  TagsBlogPostInternalType = 612,
  TagsBlogPostNodeLocale = 613,
  TagsBlogPostParentChildren = 614,
  TagsBlogPostParentId = 615,
  TagsBlogPostSlug = 616,
  TagsBlogPostSpaceId = 617,
  TagsBlogPostSysRevision = 618,
  TagsBlogPostSysType = 619,
  TagsBlogPostTags = 620,
  TagsBlogPostTagsBlogPost = 621,
  TagsBlogPostTagsChildren = 622,
  TagsBlogPostTagsContentfulId = 623,
  TagsBlogPostTagsCreatedAt = 624,
  TagsBlogPostTagsId = 625,
  TagsBlogPostTagsLevel = 626,
  TagsBlogPostTagsName = 627,
  TagsBlogPostTagsNodeLocale = 628,
  TagsBlogPostTagsOss = 629,
  TagsBlogPostTagsProject = 630,
  TagsBlogPostTagsSkillMap = 631,
  TagsBlogPostTagsSpaceId = 632,
  TagsBlogPostTagsUpdatedAt = 633,
  TagsBlogPostTitle = 634,
  TagsBlogPostUpdated = 635,
  TagsBlogPostUpdatedAt = 636,
  TagsChildren = 637,
  TagsChildrenChildren = 638,
  TagsChildrenChildrenChildren = 639,
  TagsChildrenChildrenId = 640,
  TagsChildrenId = 641,
  TagsChildrenInternalContent = 642,
  TagsChildrenInternalContentDigest = 643,
  TagsChildrenInternalDescription = 644,
  TagsChildrenInternalFieldOwners = 645,
  TagsChildrenInternalIgnoreType = 646,
  TagsChildrenInternalMediaType = 647,
  TagsChildrenInternalOwner = 648,
  TagsChildrenInternalType = 649,
  TagsChildrenParentChildren = 650,
  TagsChildrenParentId = 651,
  TagsContentfulId = 652,
  TagsCreatedAt = 653,
  TagsId = 654,
  TagsInternalContent = 655,
  TagsInternalContentDigest = 656,
  TagsInternalDescription = 657,
  TagsInternalFieldOwners = 658,
  TagsInternalIgnoreType = 659,
  TagsInternalMediaType = 660,
  TagsInternalOwner = 661,
  TagsInternalType = 662,
  TagsLevel = 663,
  TagsName = 664,
  TagsNodeLocale = 665,
  TagsOss = 666,
  TagsOssChildContentfulOssDetailTextNodeChildren = 667,
  TagsOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 668,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 669,
  TagsOssChildContentfulOssDetailTextNodeDetail = 670,
  TagsOssChildContentfulOssDetailTextNodeId = 671,
  TagsOssChildren = 672,
  TagsOssChildrenContentfulOssDetailTextNode = 673,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 674,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 675,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 676,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 677,
  TagsOssChildrenContentfulOssDetailTextNodeId = 678,
  TagsOssChildrenChildren = 679,
  TagsOssChildrenId = 680,
  TagsOssContentfulId = 681,
  TagsOssCreatedAt = 682,
  TagsOssDetailChildren = 683,
  TagsOssDetailChildrenMarkdownRemark = 684,
  TagsOssDetailChildrenMdx = 685,
  TagsOssDetailDetail = 686,
  TagsOssDetailId = 687,
  TagsOssHref = 688,
  TagsOssIconChildren = 689,
  TagsOssIconChildrenContentfulIconSvgTextNode = 690,
  TagsOssIconContact = 691,
  TagsOssIconContentfulId = 692,
  TagsOssIconCreatedAt = 693,
  TagsOssIconHistory = 694,
  TagsOssIconId = 695,
  TagsOssIconName = 696,
  TagsOssIconNodeLocale = 697,
  TagsOssIconOss = 698,
  TagsOssIconProject = 699,
  TagsOssIconSpaceId = 700,
  TagsOssIconUpdatedAt = 701,
  TagsOssIconWhatICanDo = 702,
  TagsOssId = 703,
  TagsOssImageChildren = 704,
  TagsOssImageContentfulId = 705,
  TagsOssImageCreatedAt = 706,
  TagsOssImageDescription = 707,
  TagsOssImageGatsbyImageData = 708,
  TagsOssImageId = 709,
  TagsOssImageNodeLocale = 710,
  TagsOssImageSpaceId = 711,
  TagsOssImageTitle = 712,
  TagsOssImageUpdatedAt = 713,
  TagsOssInternalContent = 714,
  TagsOssInternalContentDigest = 715,
  TagsOssInternalDescription = 716,
  TagsOssInternalFieldOwners = 717,
  TagsOssInternalIgnoreType = 718,
  TagsOssInternalMediaType = 719,
  TagsOssInternalOwner = 720,
  TagsOssInternalType = 721,
  TagsOssName = 722,
  TagsOssNodeLocale = 723,
  TagsOssParentChildren = 724,
  TagsOssParentId = 725,
  TagsOssSpaceId = 726,
  TagsOssStartDate = 727,
  TagsOssSubName = 728,
  TagsOssSysRevision = 729,
  TagsOssSysType = 730,
  TagsOssTags = 731,
  TagsOssTagsBlogPost = 732,
  TagsOssTagsChildren = 733,
  TagsOssTagsContentfulId = 734,
  TagsOssTagsCreatedAt = 735,
  TagsOssTagsId = 736,
  TagsOssTagsLevel = 737,
  TagsOssTagsName = 738,
  TagsOssTagsNodeLocale = 739,
  TagsOssTagsOss = 740,
  TagsOssTagsProject = 741,
  TagsOssTagsSkillMap = 742,
  TagsOssTagsSpaceId = 743,
  TagsOssTagsUpdatedAt = 744,
  TagsOssUpdatedAt = 745,
  TagsParentChildren = 746,
  TagsParentChildrenChildren = 747,
  TagsParentChildrenId = 748,
  TagsParentId = 749,
  TagsParentInternalContent = 750,
  TagsParentInternalContentDigest = 751,
  TagsParentInternalDescription = 752,
  TagsParentInternalFieldOwners = 753,
  TagsParentInternalIgnoreType = 754,
  TagsParentInternalMediaType = 755,
  TagsParentInternalOwner = 756,
  TagsParentInternalType = 757,
  TagsParentParentChildren = 758,
  TagsParentParentId = 759,
  TagsProject = 760,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 761,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 762,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 763,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 764,
  TagsProjectChildContentfulProjectDetailTextNodeId = 765,
  TagsProjectChildren = 766,
  TagsProjectChildrenContentfulProjectDetailTextNode = 767,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 768,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 769,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 770,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 771,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 772,
  TagsProjectChildrenChildren = 773,
  TagsProjectChildrenId = 774,
  TagsProjectContentfulId = 775,
  TagsProjectCreatedAt = 776,
  TagsProjectDetailChildren = 777,
  TagsProjectDetailChildrenMarkdownRemark = 778,
  TagsProjectDetailChildrenMdx = 779,
  TagsProjectDetailDetail = 780,
  TagsProjectDetailId = 781,
  TagsProjectEndDate = 782,
  TagsProjectIconChildren = 783,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 784,
  TagsProjectIconContact = 785,
  TagsProjectIconContentfulId = 786,
  TagsProjectIconCreatedAt = 787,
  TagsProjectIconHistory = 788,
  TagsProjectIconId = 789,
  TagsProjectIconName = 790,
  TagsProjectIconNodeLocale = 791,
  TagsProjectIconOss = 792,
  TagsProjectIconProject = 793,
  TagsProjectIconSpaceId = 794,
  TagsProjectIconUpdatedAt = 795,
  TagsProjectIconWhatICanDo = 796,
  TagsProjectId = 797,
  TagsProjectInternalContent = 798,
  TagsProjectInternalContentDigest = 799,
  TagsProjectInternalDescription = 800,
  TagsProjectInternalFieldOwners = 801,
  TagsProjectInternalIgnoreType = 802,
  TagsProjectInternalMediaType = 803,
  TagsProjectInternalOwner = 804,
  TagsProjectInternalType = 805,
  TagsProjectName = 806,
  TagsProjectNodeLocale = 807,
  TagsProjectParentChildren = 808,
  TagsProjectParentId = 809,
  TagsProjectSpaceId = 810,
  TagsProjectStartDate = 811,
  TagsProjectSubName = 812,
  TagsProjectSysRevision = 813,
  TagsProjectSysType = 814,
  TagsProjectTags = 815,
  TagsProjectTagsBlogPost = 816,
  TagsProjectTagsChildren = 817,
  TagsProjectTagsContentfulId = 818,
  TagsProjectTagsCreatedAt = 819,
  TagsProjectTagsId = 820,
  TagsProjectTagsLevel = 821,
  TagsProjectTagsName = 822,
  TagsProjectTagsNodeLocale = 823,
  TagsProjectTagsOss = 824,
  TagsProjectTagsProject = 825,
  TagsProjectTagsSkillMap = 826,
  TagsProjectTagsSpaceId = 827,
  TagsProjectTagsUpdatedAt = 828,
  TagsProjectUpdatedAt = 829,
  TagsSkillMap = 830,
  TagsSkillMapChildren = 831,
  TagsSkillMapChildrenChildren = 832,
  TagsSkillMapChildrenId = 833,
  TagsSkillMapContentfulId = 834,
  TagsSkillMapCreatedAt = 835,
  TagsSkillMapExpanded = 836,
  TagsSkillMapId = 837,
  TagsSkillMapInternalContent = 838,
  TagsSkillMapInternalContentDigest = 839,
  TagsSkillMapInternalDescription = 840,
  TagsSkillMapInternalFieldOwners = 841,
  TagsSkillMapInternalIgnoreType = 842,
  TagsSkillMapInternalMediaType = 843,
  TagsSkillMapInternalOwner = 844,
  TagsSkillMapInternalType = 845,
  TagsSkillMapName = 846,
  TagsSkillMapNodeLocale = 847,
  TagsSkillMapParentChildren = 848,
  TagsSkillMapParentId = 849,
  TagsSkillMapSkills = 850,
  TagsSkillMapSkillsBlogPost = 851,
  TagsSkillMapSkillsChildren = 852,
  TagsSkillMapSkillsContentfulId = 853,
  TagsSkillMapSkillsCreatedAt = 854,
  TagsSkillMapSkillsId = 855,
  TagsSkillMapSkillsLevel = 856,
  TagsSkillMapSkillsName = 857,
  TagsSkillMapSkillsNodeLocale = 858,
  TagsSkillMapSkillsOss = 859,
  TagsSkillMapSkillsProject = 860,
  TagsSkillMapSkillsSkillMap = 861,
  TagsSkillMapSkillsSpaceId = 862,
  TagsSkillMapSkillsUpdatedAt = 863,
  TagsSkillMapSortKey = 864,
  TagsSkillMapSpaceId = 865,
  TagsSkillMapSysRevision = 866,
  TagsSkillMapSysType = 867,
  TagsSkillMapUpdatedAt = 868,
  TagsSpaceId = 869,
  TagsSysRevision = 870,
  TagsSysType = 871,
  TagsUpdatedAt = 872,
  Title = 873,
  Updated = 874,
  UpdatedAt = 875
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
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 286,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 287,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 288,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 289,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 290,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 291,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 292,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 293,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 294,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 295,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 296,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 297,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 298,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 299,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 300,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 301,
  IconChildContentfulIconSvgTextNodeChildMdxId = 302,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 303,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 304,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 305,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 306,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 307,
  IconChildContentfulIconSvgTextNodeChildren = 308,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 309,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 310,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 311,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 312,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 313,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 314,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 315,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 316,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 317,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 318,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 319,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 320,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 321,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 322,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 323,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 324,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 325,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 326,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 327,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 328,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 329,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 330,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 331,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 332,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 333,
  IconChildContentfulIconSvgTextNodeChildrenId = 334,
  IconChildContentfulIconSvgTextNodeId = 335,
  IconChildContentfulIconSvgTextNodeInternalContent = 336,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 337,
  IconChildContentfulIconSvgTextNodeInternalDescription = 338,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 339,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 340,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 341,
  IconChildContentfulIconSvgTextNodeInternalOwner = 342,
  IconChildContentfulIconSvgTextNodeInternalType = 343,
  IconChildContentfulIconSvgTextNodeParentChildren = 344,
  IconChildContentfulIconSvgTextNodeParentId = 345,
  IconChildContentfulIconSvgTextNodeSvg = 346,
  IconChildContentfulIconSvgTextNodeSysType = 347,
  IconChildren = 348,
  IconChildrenContentfulIconSvgTextNode = 349,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 350,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 351,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 352,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 353,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 354,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 355,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 356,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 357,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 358,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 359,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 360,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 361,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 362,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 363,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 364,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 365,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 366,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 367,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 368,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 369,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 370,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 371,
  IconChildrenContentfulIconSvgTextNodeChildren = 372,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 373,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 374,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 375,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 376,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 377,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 378,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 379,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 380,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 381,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 382,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 383,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 384,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 385,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 386,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 387,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 388,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 389,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 390,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 391,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 392,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 393,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 394,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 395,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 396,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 397,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 398,
  IconChildrenContentfulIconSvgTextNodeId = 399,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 400,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 401,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 402,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 403,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 404,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 405,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 406,
  IconChildrenContentfulIconSvgTextNodeInternalType = 407,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 408,
  IconChildrenContentfulIconSvgTextNodeParentId = 409,
  IconChildrenContentfulIconSvgTextNodeSvg = 410,
  IconChildrenContentfulIconSvgTextNodeSysType = 411,
  IconChildrenChildren = 412,
  IconChildrenChildrenChildren = 413,
  IconChildrenChildrenId = 414,
  IconChildrenId = 415,
  IconChildrenInternalContent = 416,
  IconChildrenInternalContentDigest = 417,
  IconChildrenInternalDescription = 418,
  IconChildrenInternalFieldOwners = 419,
  IconChildrenInternalIgnoreType = 420,
  IconChildrenInternalMediaType = 421,
  IconChildrenInternalOwner = 422,
  IconChildrenInternalType = 423,
  IconChildrenParentChildren = 424,
  IconChildrenParentId = 425,
  IconContact = 426,
  IconContactChildren = 427,
  IconContactChildrenChildren = 428,
  IconContactChildrenId = 429,
  IconContactContentfulId = 430,
  IconContactCreatedAt = 431,
  IconContactHref = 432,
  IconContactIconSvgDarkChildren = 433,
  IconContactIconSvgDarkContentfulId = 434,
  IconContactIconSvgDarkCreatedAt = 435,
  IconContactIconSvgDarkDescription = 436,
  IconContactIconSvgDarkGatsbyImageData = 437,
  IconContactIconSvgDarkId = 438,
  IconContactIconSvgDarkNodeLocale = 439,
  IconContactIconSvgDarkSpaceId = 440,
  IconContactIconSvgDarkTitle = 441,
  IconContactIconSvgDarkUpdatedAt = 442,
  IconContactIconSvgLightChildren = 443,
  IconContactIconSvgLightContentfulId = 444,
  IconContactIconSvgLightCreatedAt = 445,
  IconContactIconSvgLightDescription = 446,
  IconContactIconSvgLightGatsbyImageData = 447,
  IconContactIconSvgLightId = 448,
  IconContactIconSvgLightNodeLocale = 449,
  IconContactIconSvgLightSpaceId = 450,
  IconContactIconSvgLightTitle = 451,
  IconContactIconSvgLightUpdatedAt = 452,
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
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 540,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 541,
  IconOssChildContentfulOssDetailTextNodeDetail = 542,
  IconOssChildContentfulOssDetailTextNodeId = 543,
  IconOssChildren = 544,
  IconOssChildrenContentfulOssDetailTextNode = 545,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 546,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 547,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 548,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 549,
  IconOssChildrenContentfulOssDetailTextNodeId = 550,
  IconOssChildrenChildren = 551,
  IconOssChildrenId = 552,
  IconOssContentfulId = 553,
  IconOssCreatedAt = 554,
  IconOssDetailChildren = 555,
  IconOssDetailChildrenMarkdownRemark = 556,
  IconOssDetailChildrenMdx = 557,
  IconOssDetailDetail = 558,
  IconOssDetailId = 559,
  IconOssHref = 560,
  IconOssIconChildren = 561,
  IconOssIconChildrenContentfulIconSvgTextNode = 562,
  IconOssIconContact = 563,
  IconOssIconContentfulId = 564,
  IconOssIconCreatedAt = 565,
  IconOssIconHistory = 566,
  IconOssIconId = 567,
  IconOssIconName = 568,
  IconOssIconNodeLocale = 569,
  IconOssIconOss = 570,
  IconOssIconProject = 571,
  IconOssIconSpaceId = 572,
  IconOssIconUpdatedAt = 573,
  IconOssIconWhatICanDo = 574,
  IconOssId = 575,
  IconOssImageChildren = 576,
  IconOssImageContentfulId = 577,
  IconOssImageCreatedAt = 578,
  IconOssImageDescription = 579,
  IconOssImageGatsbyImageData = 580,
  IconOssImageId = 581,
  IconOssImageNodeLocale = 582,
  IconOssImageSpaceId = 583,
  IconOssImageTitle = 584,
  IconOssImageUpdatedAt = 585,
  IconOssInternalContent = 586,
  IconOssInternalContentDigest = 587,
  IconOssInternalDescription = 588,
  IconOssInternalFieldOwners = 589,
  IconOssInternalIgnoreType = 590,
  IconOssInternalMediaType = 591,
  IconOssInternalOwner = 592,
  IconOssInternalType = 593,
  IconOssName = 594,
  IconOssNodeLocale = 595,
  IconOssParentChildren = 596,
  IconOssParentId = 597,
  IconOssSpaceId = 598,
  IconOssStartDate = 599,
  IconOssSubName = 600,
  IconOssSysRevision = 601,
  IconOssSysType = 602,
  IconOssTags = 603,
  IconOssTagsBlogPost = 604,
  IconOssTagsChildren = 605,
  IconOssTagsContentfulId = 606,
  IconOssTagsCreatedAt = 607,
  IconOssTagsId = 608,
  IconOssTagsLevel = 609,
  IconOssTagsName = 610,
  IconOssTagsNodeLocale = 611,
  IconOssTagsOss = 612,
  IconOssTagsProject = 613,
  IconOssTagsSkillMap = 614,
  IconOssTagsSpaceId = 615,
  IconOssTagsUpdatedAt = 616,
  IconOssUpdatedAt = 617,
  IconParentChildren = 618,
  IconParentChildrenChildren = 619,
  IconParentChildrenId = 620,
  IconParentId = 621,
  IconParentInternalContent = 622,
  IconParentInternalContentDigest = 623,
  IconParentInternalDescription = 624,
  IconParentInternalFieldOwners = 625,
  IconParentInternalIgnoreType = 626,
  IconParentInternalMediaType = 627,
  IconParentInternalOwner = 628,
  IconParentInternalType = 629,
  IconParentParentChildren = 630,
  IconParentParentId = 631,
  IconProject = 632,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 633,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 634,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 635,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 636,
  IconProjectChildContentfulProjectDetailTextNodeId = 637,
  IconProjectChildren = 638,
  IconProjectChildrenContentfulProjectDetailTextNode = 639,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 640,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 641,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 642,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 643,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 644,
  IconProjectChildrenChildren = 645,
  IconProjectChildrenId = 646,
  IconProjectContentfulId = 647,
  IconProjectCreatedAt = 648,
  IconProjectDetailChildren = 649,
  IconProjectDetailChildrenMarkdownRemark = 650,
  IconProjectDetailChildrenMdx = 651,
  IconProjectDetailDetail = 652,
  IconProjectDetailId = 653,
  IconProjectEndDate = 654,
  IconProjectIconChildren = 655,
  IconProjectIconChildrenContentfulIconSvgTextNode = 656,
  IconProjectIconContact = 657,
  IconProjectIconContentfulId = 658,
  IconProjectIconCreatedAt = 659,
  IconProjectIconHistory = 660,
  IconProjectIconId = 661,
  IconProjectIconName = 662,
  IconProjectIconNodeLocale = 663,
  IconProjectIconOss = 664,
  IconProjectIconProject = 665,
  IconProjectIconSpaceId = 666,
  IconProjectIconUpdatedAt = 667,
  IconProjectIconWhatICanDo = 668,
  IconProjectId = 669,
  IconProjectInternalContent = 670,
  IconProjectInternalContentDigest = 671,
  IconProjectInternalDescription = 672,
  IconProjectInternalFieldOwners = 673,
  IconProjectInternalIgnoreType = 674,
  IconProjectInternalMediaType = 675,
  IconProjectInternalOwner = 676,
  IconProjectInternalType = 677,
  IconProjectName = 678,
  IconProjectNodeLocale = 679,
  IconProjectParentChildren = 680,
  IconProjectParentId = 681,
  IconProjectSpaceId = 682,
  IconProjectStartDate = 683,
  IconProjectSubName = 684,
  IconProjectSysRevision = 685,
  IconProjectSysType = 686,
  IconProjectTags = 687,
  IconProjectTagsBlogPost = 688,
  IconProjectTagsChildren = 689,
  IconProjectTagsContentfulId = 690,
  IconProjectTagsCreatedAt = 691,
  IconProjectTagsId = 692,
  IconProjectTagsLevel = 693,
  IconProjectTagsName = 694,
  IconProjectTagsNodeLocale = 695,
  IconProjectTagsOss = 696,
  IconProjectTagsProject = 697,
  IconProjectTagsSkillMap = 698,
  IconProjectTagsSpaceId = 699,
  IconProjectTagsUpdatedAt = 700,
  IconProjectUpdatedAt = 701,
  IconSpaceId = 702,
  IconSvgChildMarkdownRemarkChildren = 703,
  IconSvgChildMarkdownRemarkExcerpt = 704,
  IconSvgChildMarkdownRemarkExcerptAst = 705,
  IconSvgChildMarkdownRemarkHeadings = 706,
  IconSvgChildMarkdownRemarkHtml = 707,
  IconSvgChildMarkdownRemarkHtmlAst = 708,
  IconSvgChildMarkdownRemarkId = 709,
  IconSvgChildMarkdownRemarkRawMarkdownBody = 710,
  IconSvgChildMarkdownRemarkTableOfContents = 711,
  IconSvgChildMarkdownRemarkTimeToRead = 712,
  IconSvgChildMdxBody = 713,
  IconSvgChildMdxChildren = 714,
  IconSvgChildMdxExcerpt = 715,
  IconSvgChildMdxFileAbsolutePath = 716,
  IconSvgChildMdxHeadings = 717,
  IconSvgChildMdxHtml = 718,
  IconSvgChildMdxId = 719,
  IconSvgChildMdxMdxAst = 720,
  IconSvgChildMdxRawBody = 721,
  IconSvgChildMdxSlug = 722,
  IconSvgChildMdxTableOfContents = 723,
  IconSvgChildMdxTimeToRead = 724,
  IconSvgChildren = 725,
  IconSvgChildrenMarkdownRemark = 726,
  IconSvgChildrenMarkdownRemarkChildren = 727,
  IconSvgChildrenMarkdownRemarkExcerpt = 728,
  IconSvgChildrenMarkdownRemarkExcerptAst = 729,
  IconSvgChildrenMarkdownRemarkHeadings = 730,
  IconSvgChildrenMarkdownRemarkHtml = 731,
  IconSvgChildrenMarkdownRemarkHtmlAst = 732,
  IconSvgChildrenMarkdownRemarkId = 733,
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 734,
  IconSvgChildrenMarkdownRemarkTableOfContents = 735,
  IconSvgChildrenMarkdownRemarkTimeToRead = 736,
  IconSvgChildrenMdx = 737,
  IconSvgChildrenMdxBody = 738,
  IconSvgChildrenMdxChildren = 739,
  IconSvgChildrenMdxExcerpt = 740,
  IconSvgChildrenMdxFileAbsolutePath = 741,
  IconSvgChildrenMdxHeadings = 742,
  IconSvgChildrenMdxHtml = 743,
  IconSvgChildrenMdxId = 744,
  IconSvgChildrenMdxMdxAst = 745,
  IconSvgChildrenMdxRawBody = 746,
  IconSvgChildrenMdxSlug = 747,
  IconSvgChildrenMdxTableOfContents = 748,
  IconSvgChildrenMdxTimeToRead = 749,
  IconSvgChildrenChildren = 750,
  IconSvgChildrenId = 751,
  IconSvgId = 752,
  IconSvgInternalContent = 753,
  IconSvgInternalContentDigest = 754,
  IconSvgInternalDescription = 755,
  IconSvgInternalFieldOwners = 756,
  IconSvgInternalIgnoreType = 757,
  IconSvgInternalMediaType = 758,
  IconSvgInternalOwner = 759,
  IconSvgInternalType = 760,
  IconSvgParentChildren = 761,
  IconSvgParentId = 762,
  IconSvgSvg = 763,
  IconSvgSysType = 764,
  IconSysRevision = 765,
  IconSysType = 766,
  IconUpdatedAt = 767,
  IconWhatICanDo = 768,
  IconWhatICanDoChildren = 769,
  IconWhatICanDoChildrenChildren = 770,
  IconWhatICanDoChildrenId = 771,
  IconWhatICanDoContentfulId = 772,
  IconWhatICanDoCreatedAt = 773,
  IconWhatICanDoIconChildren = 774,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 775,
  IconWhatICanDoIconContact = 776,
  IconWhatICanDoIconContentfulId = 777,
  IconWhatICanDoIconCreatedAt = 778,
  IconWhatICanDoIconHistory = 779,
  IconWhatICanDoIconId = 780,
  IconWhatICanDoIconName = 781,
  IconWhatICanDoIconNodeLocale = 782,
  IconWhatICanDoIconOss = 783,
  IconWhatICanDoIconProject = 784,
  IconWhatICanDoIconSpaceId = 785,
  IconWhatICanDoIconUpdatedAt = 786,
  IconWhatICanDoIconWhatICanDo = 787,
  IconWhatICanDoId = 788,
  IconWhatICanDoInternalContent = 789,
  IconWhatICanDoInternalContentDigest = 790,
  IconWhatICanDoInternalDescription = 791,
  IconWhatICanDoInternalFieldOwners = 792,
  IconWhatICanDoInternalIgnoreType = 793,
  IconWhatICanDoInternalMediaType = 794,
  IconWhatICanDoInternalOwner = 795,
  IconWhatICanDoInternalType = 796,
  IconWhatICanDoName = 797,
  IconWhatICanDoNodeLocale = 798,
  IconWhatICanDoParentChildren = 799,
  IconWhatICanDoParentId = 800,
  IconWhatICanDoSortKey = 801,
  IconWhatICanDoSpaceId = 802,
  IconWhatICanDoSubName = 803,
  IconWhatICanDoSysRevision = 804,
  IconWhatICanDoSysType = 805,
  IconWhatICanDoUpdatedAt = 806,
  Id = 807,
  InternalContent = 808,
  InternalContentDigest = 809,
  InternalDescription = 810,
  InternalFieldOwners = 811,
  InternalIgnoreType = 812,
  InternalMediaType = 813,
  InternalOwner = 814,
  InternalType = 815,
  Name = 816,
  NodeLocale = 817,
  ParentChildren = 818,
  ParentChildrenChildren = 819,
  ParentChildrenChildrenChildren = 820,
  ParentChildrenChildrenId = 821,
  ParentChildrenId = 822,
  ParentChildrenInternalContent = 823,
  ParentChildrenInternalContentDigest = 824,
  ParentChildrenInternalDescription = 825,
  ParentChildrenInternalFieldOwners = 826,
  ParentChildrenInternalIgnoreType = 827,
  ParentChildrenInternalMediaType = 828,
  ParentChildrenInternalOwner = 829,
  ParentChildrenInternalType = 830,
  ParentChildrenParentChildren = 831,
  ParentChildrenParentId = 832,
  ParentId = 833,
  ParentInternalContent = 834,
  ParentInternalContentDigest = 835,
  ParentInternalDescription = 836,
  ParentInternalFieldOwners = 837,
  ParentInternalIgnoreType = 838,
  ParentInternalMediaType = 839,
  ParentInternalOwner = 840,
  ParentInternalType = 841,
  ParentParentChildren = 842,
  ParentParentChildrenChildren = 843,
  ParentParentChildrenId = 844,
  ParentParentId = 845,
  ParentParentInternalContent = 846,
  ParentParentInternalContentDigest = 847,
  ParentParentInternalDescription = 848,
  ParentParentInternalFieldOwners = 849,
  ParentParentInternalIgnoreType = 850,
  ParentParentInternalMediaType = 851,
  ParentParentInternalOwner = 852,
  ParentParentInternalType = 853,
  ParentParentParentChildren = 854,
  ParentParentParentId = 855,
  SortKey = 856,
  SpaceId = 857,
  SubName = 858,
  SysContentTypeSysId = 859,
  SysContentTypeSysLinkType = 860,
  SysContentTypeSysType = 861,
  SysRevision = 862,
  SysType = 863,
  UpdatedAt = 864
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
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 42,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 43,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 44,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 45,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 46,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 47,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 48,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 49,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 50,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 51,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 52,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 53,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 54,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 55,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 56,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 57,
  IconChildContentfulIconSvgTextNodeChildMdxId = 58,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 59,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 60,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 61,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 62,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 63,
  IconChildContentfulIconSvgTextNodeChildren = 64,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 65,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 66,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 67,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 68,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 69,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 70,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 71,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 72,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 73,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 74,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 75,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 76,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 77,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 78,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 79,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 80,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 81,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 82,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 83,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 84,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 85,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 86,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 87,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 88,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 89,
  IconChildContentfulIconSvgTextNodeChildrenId = 90,
  IconChildContentfulIconSvgTextNodeId = 91,
  IconChildContentfulIconSvgTextNodeInternalContent = 92,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 93,
  IconChildContentfulIconSvgTextNodeInternalDescription = 94,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 95,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 96,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 97,
  IconChildContentfulIconSvgTextNodeInternalOwner = 98,
  IconChildContentfulIconSvgTextNodeInternalType = 99,
  IconChildContentfulIconSvgTextNodeParentChildren = 100,
  IconChildContentfulIconSvgTextNodeParentId = 101,
  IconChildContentfulIconSvgTextNodeSvg = 102,
  IconChildContentfulIconSvgTextNodeSysType = 103,
  IconChildren = 104,
  IconChildrenContentfulIconSvgTextNode = 105,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 106,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 107,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 108,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 109,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 110,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 111,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 112,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 113,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 114,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 115,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 116,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 117,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 118,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 119,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 120,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 121,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 122,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 123,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 124,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 125,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 126,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 127,
  IconChildrenContentfulIconSvgTextNodeChildren = 128,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 129,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 130,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 131,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 132,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 133,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 134,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 135,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 136,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 137,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 138,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 139,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 140,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 141,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 142,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 143,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 144,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 145,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 146,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 147,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 148,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 149,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 150,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 151,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 152,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 153,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 154,
  IconChildrenContentfulIconSvgTextNodeId = 155,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 156,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 157,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 158,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 159,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 160,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 161,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 162,
  IconChildrenContentfulIconSvgTextNodeInternalType = 163,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 164,
  IconChildrenContentfulIconSvgTextNodeParentId = 165,
  IconChildrenContentfulIconSvgTextNodeSvg = 166,
  IconChildrenContentfulIconSvgTextNodeSysType = 167,
  IconChildrenChildren = 168,
  IconChildrenChildrenChildren = 169,
  IconChildrenChildrenId = 170,
  IconChildrenId = 171,
  IconChildrenInternalContent = 172,
  IconChildrenInternalContentDigest = 173,
  IconChildrenInternalDescription = 174,
  IconChildrenInternalFieldOwners = 175,
  IconChildrenInternalIgnoreType = 176,
  IconChildrenInternalMediaType = 177,
  IconChildrenInternalOwner = 178,
  IconChildrenInternalType = 179,
  IconChildrenParentChildren = 180,
  IconChildrenParentId = 181,
  IconContact = 182,
  IconContactChildren = 183,
  IconContactChildrenChildren = 184,
  IconContactChildrenId = 185,
  IconContactContentfulId = 186,
  IconContactCreatedAt = 187,
  IconContactHref = 188,
  IconContactIconSvgDarkChildren = 189,
  IconContactIconSvgDarkContentfulId = 190,
  IconContactIconSvgDarkCreatedAt = 191,
  IconContactIconSvgDarkDescription = 192,
  IconContactIconSvgDarkGatsbyImageData = 193,
  IconContactIconSvgDarkId = 194,
  IconContactIconSvgDarkNodeLocale = 195,
  IconContactIconSvgDarkSpaceId = 196,
  IconContactIconSvgDarkTitle = 197,
  IconContactIconSvgDarkUpdatedAt = 198,
  IconContactIconSvgLightChildren = 199,
  IconContactIconSvgLightContentfulId = 200,
  IconContactIconSvgLightCreatedAt = 201,
  IconContactIconSvgLightDescription = 202,
  IconContactIconSvgLightGatsbyImageData = 203,
  IconContactIconSvgLightId = 204,
  IconContactIconSvgLightNodeLocale = 205,
  IconContactIconSvgLightSpaceId = 206,
  IconContactIconSvgLightTitle = 207,
  IconContactIconSvgLightUpdatedAt = 208,
  IconContactIconChildren = 209,
  IconContactIconChildrenContentfulIconSvgTextNode = 210,
  IconContactIconContact = 211,
  IconContactIconContentfulId = 212,
  IconContactIconCreatedAt = 213,
  IconContactIconHistory = 214,
  IconContactIconId = 215,
  IconContactIconName = 216,
  IconContactIconNodeLocale = 217,
  IconContactIconOss = 218,
  IconContactIconProject = 219,
  IconContactIconSpaceId = 220,
  IconContactIconUpdatedAt = 221,
  IconContactIconWhatICanDo = 222,
  IconContactId = 223,
  IconContactInternalContent = 224,
  IconContactInternalContentDigest = 225,
  IconContactInternalDescription = 226,
  IconContactInternalFieldOwners = 227,
  IconContactInternalIgnoreType = 228,
  IconContactInternalMediaType = 229,
  IconContactInternalOwner = 230,
  IconContactInternalType = 231,
  IconContactName = 232,
  IconContactNodeLocale = 233,
  IconContactParentChildren = 234,
  IconContactParentId = 235,
  IconContactSortKey = 236,
  IconContactSpaceId = 237,
  IconContactSubName = 238,
  IconContactSysRevision = 239,
  IconContactSysType = 240,
  IconContactUpdatedAt = 241,
  IconContentfulId = 242,
  IconCreatedAt = 243,
  IconHistory = 244,
  IconHistoryChildren = 245,
  IconHistoryChildrenChildren = 246,
  IconHistoryChildrenId = 247,
  IconHistoryContentfulId = 248,
  IconHistoryCreatedAt = 249,
  IconHistoryDate = 250,
  IconHistoryIconChildren = 251,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 252,
  IconHistoryIconContact = 253,
  IconHistoryIconContentfulId = 254,
  IconHistoryIconCreatedAt = 255,
  IconHistoryIconHistory = 256,
  IconHistoryIconId = 257,
  IconHistoryIconName = 258,
  IconHistoryIconNodeLocale = 259,
  IconHistoryIconOss = 260,
  IconHistoryIconProject = 261,
  IconHistoryIconSpaceId = 262,
  IconHistoryIconUpdatedAt = 263,
  IconHistoryIconWhatICanDo = 264,
  IconHistoryId = 265,
  IconHistoryInternalContent = 266,
  IconHistoryInternalContentDigest = 267,
  IconHistoryInternalDescription = 268,
  IconHistoryInternalFieldOwners = 269,
  IconHistoryInternalIgnoreType = 270,
  IconHistoryInternalMediaType = 271,
  IconHistoryInternalOwner = 272,
  IconHistoryInternalType = 273,
  IconHistoryName = 274,
  IconHistoryNodeLocale = 275,
  IconHistoryParentChildren = 276,
  IconHistoryParentId = 277,
  IconHistorySpaceId = 278,
  IconHistorySubName = 279,
  IconHistorySysRevision = 280,
  IconHistorySysType = 281,
  IconHistoryUpdatedAt = 282,
  IconId = 283,
  IconInternalContent = 284,
  IconInternalContentDigest = 285,
  IconInternalDescription = 286,
  IconInternalFieldOwners = 287,
  IconInternalIgnoreType = 288,
  IconInternalMediaType = 289,
  IconInternalOwner = 290,
  IconInternalType = 291,
  IconName = 292,
  IconNodeLocale = 293,
  IconOss = 294,
  IconOssChildContentfulOssDetailTextNodeChildren = 295,
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 296,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 297,
  IconOssChildContentfulOssDetailTextNodeDetail = 298,
  IconOssChildContentfulOssDetailTextNodeId = 299,
  IconOssChildren = 300,
  IconOssChildrenContentfulOssDetailTextNode = 301,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 302,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 303,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 304,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 305,
  IconOssChildrenContentfulOssDetailTextNodeId = 306,
  IconOssChildrenChildren = 307,
  IconOssChildrenId = 308,
  IconOssContentfulId = 309,
  IconOssCreatedAt = 310,
  IconOssDetailChildren = 311,
  IconOssDetailChildrenMarkdownRemark = 312,
  IconOssDetailChildrenMdx = 313,
  IconOssDetailDetail = 314,
  IconOssDetailId = 315,
  IconOssHref = 316,
  IconOssIconChildren = 317,
  IconOssIconChildrenContentfulIconSvgTextNode = 318,
  IconOssIconContact = 319,
  IconOssIconContentfulId = 320,
  IconOssIconCreatedAt = 321,
  IconOssIconHistory = 322,
  IconOssIconId = 323,
  IconOssIconName = 324,
  IconOssIconNodeLocale = 325,
  IconOssIconOss = 326,
  IconOssIconProject = 327,
  IconOssIconSpaceId = 328,
  IconOssIconUpdatedAt = 329,
  IconOssIconWhatICanDo = 330,
  IconOssId = 331,
  IconOssImageChildren = 332,
  IconOssImageContentfulId = 333,
  IconOssImageCreatedAt = 334,
  IconOssImageDescription = 335,
  IconOssImageGatsbyImageData = 336,
  IconOssImageId = 337,
  IconOssImageNodeLocale = 338,
  IconOssImageSpaceId = 339,
  IconOssImageTitle = 340,
  IconOssImageUpdatedAt = 341,
  IconOssInternalContent = 342,
  IconOssInternalContentDigest = 343,
  IconOssInternalDescription = 344,
  IconOssInternalFieldOwners = 345,
  IconOssInternalIgnoreType = 346,
  IconOssInternalMediaType = 347,
  IconOssInternalOwner = 348,
  IconOssInternalType = 349,
  IconOssName = 350,
  IconOssNodeLocale = 351,
  IconOssParentChildren = 352,
  IconOssParentId = 353,
  IconOssSpaceId = 354,
  IconOssStartDate = 355,
  IconOssSubName = 356,
  IconOssSysRevision = 357,
  IconOssSysType = 358,
  IconOssTags = 359,
  IconOssTagsBlogPost = 360,
  IconOssTagsChildren = 361,
  IconOssTagsContentfulId = 362,
  IconOssTagsCreatedAt = 363,
  IconOssTagsId = 364,
  IconOssTagsLevel = 365,
  IconOssTagsName = 366,
  IconOssTagsNodeLocale = 367,
  IconOssTagsOss = 368,
  IconOssTagsProject = 369,
  IconOssTagsSkillMap = 370,
  IconOssTagsSpaceId = 371,
  IconOssTagsUpdatedAt = 372,
  IconOssUpdatedAt = 373,
  IconParentChildren = 374,
  IconParentChildrenChildren = 375,
  IconParentChildrenId = 376,
  IconParentId = 377,
  IconParentInternalContent = 378,
  IconParentInternalContentDigest = 379,
  IconParentInternalDescription = 380,
  IconParentInternalFieldOwners = 381,
  IconParentInternalIgnoreType = 382,
  IconParentInternalMediaType = 383,
  IconParentInternalOwner = 384,
  IconParentInternalType = 385,
  IconParentParentChildren = 386,
  IconParentParentId = 387,
  IconProject = 388,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 389,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 390,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 391,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 392,
  IconProjectChildContentfulProjectDetailTextNodeId = 393,
  IconProjectChildren = 394,
  IconProjectChildrenContentfulProjectDetailTextNode = 395,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 396,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 397,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 398,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 399,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 400,
  IconProjectChildrenChildren = 401,
  IconProjectChildrenId = 402,
  IconProjectContentfulId = 403,
  IconProjectCreatedAt = 404,
  IconProjectDetailChildren = 405,
  IconProjectDetailChildrenMarkdownRemark = 406,
  IconProjectDetailChildrenMdx = 407,
  IconProjectDetailDetail = 408,
  IconProjectDetailId = 409,
  IconProjectEndDate = 410,
  IconProjectIconChildren = 411,
  IconProjectIconChildrenContentfulIconSvgTextNode = 412,
  IconProjectIconContact = 413,
  IconProjectIconContentfulId = 414,
  IconProjectIconCreatedAt = 415,
  IconProjectIconHistory = 416,
  IconProjectIconId = 417,
  IconProjectIconName = 418,
  IconProjectIconNodeLocale = 419,
  IconProjectIconOss = 420,
  IconProjectIconProject = 421,
  IconProjectIconSpaceId = 422,
  IconProjectIconUpdatedAt = 423,
  IconProjectIconWhatICanDo = 424,
  IconProjectId = 425,
  IconProjectInternalContent = 426,
  IconProjectInternalContentDigest = 427,
  IconProjectInternalDescription = 428,
  IconProjectInternalFieldOwners = 429,
  IconProjectInternalIgnoreType = 430,
  IconProjectInternalMediaType = 431,
  IconProjectInternalOwner = 432,
  IconProjectInternalType = 433,
  IconProjectName = 434,
  IconProjectNodeLocale = 435,
  IconProjectParentChildren = 436,
  IconProjectParentId = 437,
  IconProjectSpaceId = 438,
  IconProjectStartDate = 439,
  IconProjectSubName = 440,
  IconProjectSysRevision = 441,
  IconProjectSysType = 442,
  IconProjectTags = 443,
  IconProjectTagsBlogPost = 444,
  IconProjectTagsChildren = 445,
  IconProjectTagsContentfulId = 446,
  IconProjectTagsCreatedAt = 447,
  IconProjectTagsId = 448,
  IconProjectTagsLevel = 449,
  IconProjectTagsName = 450,
  IconProjectTagsNodeLocale = 451,
  IconProjectTagsOss = 452,
  IconProjectTagsProject = 453,
  IconProjectTagsSkillMap = 454,
  IconProjectTagsSpaceId = 455,
  IconProjectTagsUpdatedAt = 456,
  IconProjectUpdatedAt = 457,
  IconSpaceId = 458,
  IconSvgChildMarkdownRemarkChildren = 459,
  IconSvgChildMarkdownRemarkExcerpt = 460,
  IconSvgChildMarkdownRemarkExcerptAst = 461,
  IconSvgChildMarkdownRemarkHeadings = 462,
  IconSvgChildMarkdownRemarkHtml = 463,
  IconSvgChildMarkdownRemarkHtmlAst = 464,
  IconSvgChildMarkdownRemarkId = 465,
  IconSvgChildMarkdownRemarkRawMarkdownBody = 466,
  IconSvgChildMarkdownRemarkTableOfContents = 467,
  IconSvgChildMarkdownRemarkTimeToRead = 468,
  IconSvgChildMdxBody = 469,
  IconSvgChildMdxChildren = 470,
  IconSvgChildMdxExcerpt = 471,
  IconSvgChildMdxFileAbsolutePath = 472,
  IconSvgChildMdxHeadings = 473,
  IconSvgChildMdxHtml = 474,
  IconSvgChildMdxId = 475,
  IconSvgChildMdxMdxAst = 476,
  IconSvgChildMdxRawBody = 477,
  IconSvgChildMdxSlug = 478,
  IconSvgChildMdxTableOfContents = 479,
  IconSvgChildMdxTimeToRead = 480,
  IconSvgChildren = 481,
  IconSvgChildrenMarkdownRemark = 482,
  IconSvgChildrenMarkdownRemarkChildren = 483,
  IconSvgChildrenMarkdownRemarkExcerpt = 484,
  IconSvgChildrenMarkdownRemarkExcerptAst = 485,
  IconSvgChildrenMarkdownRemarkHeadings = 486,
  IconSvgChildrenMarkdownRemarkHtml = 487,
  IconSvgChildrenMarkdownRemarkHtmlAst = 488,
  IconSvgChildrenMarkdownRemarkId = 489,
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 490,
  IconSvgChildrenMarkdownRemarkTableOfContents = 491,
  IconSvgChildrenMarkdownRemarkTimeToRead = 492,
  IconSvgChildrenMdx = 493,
  IconSvgChildrenMdxBody = 494,
  IconSvgChildrenMdxChildren = 495,
  IconSvgChildrenMdxExcerpt = 496,
  IconSvgChildrenMdxFileAbsolutePath = 497,
  IconSvgChildrenMdxHeadings = 498,
  IconSvgChildrenMdxHtml = 499,
  IconSvgChildrenMdxId = 500,
  IconSvgChildrenMdxMdxAst = 501,
  IconSvgChildrenMdxRawBody = 502,
  IconSvgChildrenMdxSlug = 503,
  IconSvgChildrenMdxTableOfContents = 504,
  IconSvgChildrenMdxTimeToRead = 505,
  IconSvgChildrenChildren = 506,
  IconSvgChildrenId = 507,
  IconSvgId = 508,
  IconSvgInternalContent = 509,
  IconSvgInternalContentDigest = 510,
  IconSvgInternalDescription = 511,
  IconSvgInternalFieldOwners = 512,
  IconSvgInternalIgnoreType = 513,
  IconSvgInternalMediaType = 514,
  IconSvgInternalOwner = 515,
  IconSvgInternalType = 516,
  IconSvgParentChildren = 517,
  IconSvgParentId = 518,
  IconSvgSvg = 519,
  IconSvgSysType = 520,
  IconSysRevision = 521,
  IconSysType = 522,
  IconUpdatedAt = 523,
  IconWhatICanDo = 524,
  IconWhatICanDoChildren = 525,
  IconWhatICanDoChildrenChildren = 526,
  IconWhatICanDoChildrenId = 527,
  IconWhatICanDoContentfulId = 528,
  IconWhatICanDoCreatedAt = 529,
  IconWhatICanDoIconChildren = 530,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 531,
  IconWhatICanDoIconContact = 532,
  IconWhatICanDoIconContentfulId = 533,
  IconWhatICanDoIconCreatedAt = 534,
  IconWhatICanDoIconHistory = 535,
  IconWhatICanDoIconId = 536,
  IconWhatICanDoIconName = 537,
  IconWhatICanDoIconNodeLocale = 538,
  IconWhatICanDoIconOss = 539,
  IconWhatICanDoIconProject = 540,
  IconWhatICanDoIconSpaceId = 541,
  IconWhatICanDoIconUpdatedAt = 542,
  IconWhatICanDoIconWhatICanDo = 543,
  IconWhatICanDoId = 544,
  IconWhatICanDoInternalContent = 545,
  IconWhatICanDoInternalContentDigest = 546,
  IconWhatICanDoInternalDescription = 547,
  IconWhatICanDoInternalFieldOwners = 548,
  IconWhatICanDoInternalIgnoreType = 549,
  IconWhatICanDoInternalMediaType = 550,
  IconWhatICanDoInternalOwner = 551,
  IconWhatICanDoInternalType = 552,
  IconWhatICanDoName = 553,
  IconWhatICanDoNodeLocale = 554,
  IconWhatICanDoParentChildren = 555,
  IconWhatICanDoParentId = 556,
  IconWhatICanDoSortKey = 557,
  IconWhatICanDoSpaceId = 558,
  IconWhatICanDoSubName = 559,
  IconWhatICanDoSysRevision = 560,
  IconWhatICanDoSysType = 561,
  IconWhatICanDoUpdatedAt = 562,
  Id = 563,
  InternalContent = 564,
  InternalContentDigest = 565,
  InternalDescription = 566,
  InternalFieldOwners = 567,
  InternalIgnoreType = 568,
  InternalMediaType = 569,
  InternalOwner = 570,
  InternalType = 571,
  Name = 572,
  NodeLocale = 573,
  ParentChildren = 574,
  ParentChildrenChildren = 575,
  ParentChildrenChildrenChildren = 576,
  ParentChildrenChildrenId = 577,
  ParentChildrenId = 578,
  ParentChildrenInternalContent = 579,
  ParentChildrenInternalContentDigest = 580,
  ParentChildrenInternalDescription = 581,
  ParentChildrenInternalFieldOwners = 582,
  ParentChildrenInternalIgnoreType = 583,
  ParentChildrenInternalMediaType = 584,
  ParentChildrenInternalOwner = 585,
  ParentChildrenInternalType = 586,
  ParentChildrenParentChildren = 587,
  ParentChildrenParentId = 588,
  ParentId = 589,
  ParentInternalContent = 590,
  ParentInternalContentDigest = 591,
  ParentInternalDescription = 592,
  ParentInternalFieldOwners = 593,
  ParentInternalIgnoreType = 594,
  ParentInternalMediaType = 595,
  ParentInternalOwner = 596,
  ParentInternalType = 597,
  ParentParentChildren = 598,
  ParentParentChildrenChildren = 599,
  ParentParentChildrenId = 600,
  ParentParentId = 601,
  ParentParentInternalContent = 602,
  ParentParentInternalContentDigest = 603,
  ParentParentInternalDescription = 604,
  ParentParentInternalFieldOwners = 605,
  ParentParentInternalIgnoreType = 606,
  ParentParentInternalMediaType = 607,
  ParentParentInternalOwner = 608,
  ParentParentInternalType = 609,
  ParentParentParentChildren = 610,
  ParentParentParentId = 611,
  SpaceId = 612,
  SubName = 613,
  SysContentTypeSysId = 614,
  SysContentTypeSysLinkType = 615,
  SysContentTypeSysType = 616,
  SysRevision = 617,
  SysType = 618,
  UpdatedAt = 619
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
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 0,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkChildrenChildren = 1,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkChildrenId = 2,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 3,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 4,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkFrontmatterTitle = 5,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 6,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsDepth = 7,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsId = 8,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsValue = 9,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 10,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 11,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 12,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalContent = 13,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalContentDigest = 14,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalDescription = 15,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalFieldOwners = 16,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalIgnoreType = 17,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalMediaType = 18,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalOwner = 19,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkInternalType = 20,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkParentChildren = 21,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkParentId = 22,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 23,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 24,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 25,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkWordCountParagraphs = 26,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkWordCountSentences = 27,
  ChildContentfulIconSvgTextNodeChildMarkdownRemarkWordCountWords = 28,
  ChildContentfulIconSvgTextNodeChildMdxBody = 29,
  ChildContentfulIconSvgTextNodeChildMdxChildren = 30,
  ChildContentfulIconSvgTextNodeChildMdxChildrenChildren = 31,
  ChildContentfulIconSvgTextNodeChildMdxChildrenId = 32,
  ChildContentfulIconSvgTextNodeChildMdxExcerpt = 33,
  ChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 34,
  ChildContentfulIconSvgTextNodeChildMdxFrontmatterTitle = 35,
  ChildContentfulIconSvgTextNodeChildMdxHeadings = 36,
  ChildContentfulIconSvgTextNodeChildMdxHeadingsDepth = 37,
  ChildContentfulIconSvgTextNodeChildMdxHeadingsValue = 38,
  ChildContentfulIconSvgTextNodeChildMdxHtml = 39,
  ChildContentfulIconSvgTextNodeChildMdxId = 40,
  ChildContentfulIconSvgTextNodeChildMdxInternalContent = 41,
  ChildContentfulIconSvgTextNodeChildMdxInternalContentDigest = 42,
  ChildContentfulIconSvgTextNodeChildMdxInternalDescription = 43,
  ChildContentfulIconSvgTextNodeChildMdxInternalFieldOwners = 44,
  ChildContentfulIconSvgTextNodeChildMdxInternalIgnoreType = 45,
  ChildContentfulIconSvgTextNodeChildMdxInternalMediaType = 46,
  ChildContentfulIconSvgTextNodeChildMdxInternalOwner = 47,
  ChildContentfulIconSvgTextNodeChildMdxInternalType = 48,
  ChildContentfulIconSvgTextNodeChildMdxMdxAst = 49,
  ChildContentfulIconSvgTextNodeChildMdxParentChildren = 50,
  ChildContentfulIconSvgTextNodeChildMdxParentId = 51,
  ChildContentfulIconSvgTextNodeChildMdxRawBody = 52,
  ChildContentfulIconSvgTextNodeChildMdxSlug = 53,
  ChildContentfulIconSvgTextNodeChildMdxTableOfContents = 54,
  ChildContentfulIconSvgTextNodeChildMdxTimeToRead = 55,
  ChildContentfulIconSvgTextNodeChildMdxWordCountParagraphs = 56,
  ChildContentfulIconSvgTextNodeChildMdxWordCountSentences = 57,
  ChildContentfulIconSvgTextNodeChildMdxWordCountWords = 58,
  ChildContentfulIconSvgTextNodeChildren = 59,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 60,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 61,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenChildren = 62,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenId = 63,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 64,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 65,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkFrontmatterTitle = 66,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 67,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsDepth = 68,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsId = 69,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsValue = 70,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 71,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 72,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 73,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContent = 74,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContentDigest = 75,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalDescription = 76,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalFieldOwners = 77,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalIgnoreType = 78,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalMediaType = 79,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalOwner = 80,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalType = 81,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkParentChildren = 82,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkParentId = 83,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 84,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 85,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 86,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountParagraphs = 87,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountSentences = 88,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountWords = 89,
  ChildContentfulIconSvgTextNodeChildrenMdx = 90,
  ChildContentfulIconSvgTextNodeChildrenMdxBody = 91,
  ChildContentfulIconSvgTextNodeChildrenMdxChildren = 92,
  ChildContentfulIconSvgTextNodeChildrenMdxChildrenChildren = 93,
  ChildContentfulIconSvgTextNodeChildrenMdxChildrenId = 94,
  ChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 95,
  ChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 96,
  ChildContentfulIconSvgTextNodeChildrenMdxFrontmatterTitle = 97,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadings = 98,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadingsDepth = 99,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadingsValue = 100,
  ChildContentfulIconSvgTextNodeChildrenMdxHtml = 101,
  ChildContentfulIconSvgTextNodeChildrenMdxId = 102,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalContent = 103,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalContentDigest = 104,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalDescription = 105,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalFieldOwners = 106,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalIgnoreType = 107,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalMediaType = 108,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalOwner = 109,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalType = 110,
  ChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 111,
  ChildContentfulIconSvgTextNodeChildrenMdxParentChildren = 112,
  ChildContentfulIconSvgTextNodeChildrenMdxParentId = 113,
  ChildContentfulIconSvgTextNodeChildrenMdxRawBody = 114,
  ChildContentfulIconSvgTextNodeChildrenMdxSlug = 115,
  ChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 116,
  ChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 117,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountParagraphs = 118,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountSentences = 119,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountWords = 120,
  ChildContentfulIconSvgTextNodeChildrenChildren = 121,
  ChildContentfulIconSvgTextNodeChildrenChildrenChildren = 122,
  ChildContentfulIconSvgTextNodeChildrenChildrenId = 123,
  ChildContentfulIconSvgTextNodeChildrenId = 124,
  ChildContentfulIconSvgTextNodeChildrenInternalContent = 125,
  ChildContentfulIconSvgTextNodeChildrenInternalContentDigest = 126,
  ChildContentfulIconSvgTextNodeChildrenInternalDescription = 127,
  ChildContentfulIconSvgTextNodeChildrenInternalFieldOwners = 128,
  ChildContentfulIconSvgTextNodeChildrenInternalIgnoreType = 129,
  ChildContentfulIconSvgTextNodeChildrenInternalMediaType = 130,
  ChildContentfulIconSvgTextNodeChildrenInternalOwner = 131,
  ChildContentfulIconSvgTextNodeChildrenInternalType = 132,
  ChildContentfulIconSvgTextNodeChildrenParentChildren = 133,
  ChildContentfulIconSvgTextNodeChildrenParentId = 134,
  ChildContentfulIconSvgTextNodeId = 135,
  ChildContentfulIconSvgTextNodeInternalContent = 136,
  ChildContentfulIconSvgTextNodeInternalContentDigest = 137,
  ChildContentfulIconSvgTextNodeInternalDescription = 138,
  ChildContentfulIconSvgTextNodeInternalFieldOwners = 139,
  ChildContentfulIconSvgTextNodeInternalIgnoreType = 140,
  ChildContentfulIconSvgTextNodeInternalMediaType = 141,
  ChildContentfulIconSvgTextNodeInternalOwner = 142,
  ChildContentfulIconSvgTextNodeInternalType = 143,
  ChildContentfulIconSvgTextNodeParentChildren = 144,
  ChildContentfulIconSvgTextNodeParentChildrenChildren = 145,
  ChildContentfulIconSvgTextNodeParentChildrenId = 146,
  ChildContentfulIconSvgTextNodeParentId = 147,
  ChildContentfulIconSvgTextNodeParentInternalContent = 148,
  ChildContentfulIconSvgTextNodeParentInternalContentDigest = 149,
  ChildContentfulIconSvgTextNodeParentInternalDescription = 150,
  ChildContentfulIconSvgTextNodeParentInternalFieldOwners = 151,
  ChildContentfulIconSvgTextNodeParentInternalIgnoreType = 152,
  ChildContentfulIconSvgTextNodeParentInternalMediaType = 153,
  ChildContentfulIconSvgTextNodeParentInternalOwner = 154,
  ChildContentfulIconSvgTextNodeParentInternalType = 155,
  ChildContentfulIconSvgTextNodeParentParentChildren = 156,
  ChildContentfulIconSvgTextNodeParentParentId = 157,
  ChildContentfulIconSvgTextNodeSvg = 158,
  ChildContentfulIconSvgTextNodeSysType = 159,
  Children = 160,
  ChildrenContentfulIconSvgTextNode = 161,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 162,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildrenChildren = 163,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildrenId = 164,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 165,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 166,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkFrontmatterTitle = 167,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 168,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsDepth = 169,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsId = 170,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsValue = 171,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 172,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 173,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 174,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalContent = 175,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalContentDigest = 176,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalDescription = 177,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalFieldOwners = 178,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalIgnoreType = 179,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalMediaType = 180,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalOwner = 181,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalType = 182,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkParentChildren = 183,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkParentId = 184,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 185,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 186,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 187,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkWordCountParagraphs = 188,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkWordCountSentences = 189,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkWordCountWords = 190,
  ChildrenContentfulIconSvgTextNodeChildMdxBody = 191,
  ChildrenContentfulIconSvgTextNodeChildMdxChildren = 192,
  ChildrenContentfulIconSvgTextNodeChildMdxChildrenChildren = 193,
  ChildrenContentfulIconSvgTextNodeChildMdxChildrenId = 194,
  ChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 195,
  ChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 196,
  ChildrenContentfulIconSvgTextNodeChildMdxFrontmatterTitle = 197,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadings = 198,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadingsDepth = 199,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadingsValue = 200,
  ChildrenContentfulIconSvgTextNodeChildMdxHtml = 201,
  ChildrenContentfulIconSvgTextNodeChildMdxId = 202,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalContent = 203,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalContentDigest = 204,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalDescription = 205,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalFieldOwners = 206,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalIgnoreType = 207,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalMediaType = 208,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalOwner = 209,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalType = 210,
  ChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 211,
  ChildrenContentfulIconSvgTextNodeChildMdxParentChildren = 212,
  ChildrenContentfulIconSvgTextNodeChildMdxParentId = 213,
  ChildrenContentfulIconSvgTextNodeChildMdxRawBody = 214,
  ChildrenContentfulIconSvgTextNodeChildMdxSlug = 215,
  ChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 216,
  ChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 217,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountParagraphs = 218,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountSentences = 219,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountWords = 220,
  ChildrenContentfulIconSvgTextNodeChildren = 221,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 222,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 223,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenChildren = 224,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenId = 225,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 226,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 227,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkFrontmatterTitle = 228,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 229,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsDepth = 230,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsId = 231,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsValue = 232,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 233,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 234,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 235,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContent = 236,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContentDigest = 237,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalDescription = 238,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalFieldOwners = 239,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalIgnoreType = 240,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalMediaType = 241,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalOwner = 242,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalType = 243,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkParentChildren = 244,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkParentId = 245,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 246,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 247,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 248,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountParagraphs = 249,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountSentences = 250,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountWords = 251,
  ChildrenContentfulIconSvgTextNodeChildrenMdx = 252,
  ChildrenContentfulIconSvgTextNodeChildrenMdxBody = 253,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 254,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildrenChildren = 255,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildrenId = 256,
  ChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 257,
  ChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 258,
  ChildrenContentfulIconSvgTextNodeChildrenMdxFrontmatterTitle = 259,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 260,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadingsDepth = 261,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadingsValue = 262,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 263,
  ChildrenContentfulIconSvgTextNodeChildrenMdxId = 264,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalContent = 265,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalContentDigest = 266,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalDescription = 267,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalFieldOwners = 268,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalIgnoreType = 269,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalMediaType = 270,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalOwner = 271,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalType = 272,
  ChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 273,
  ChildrenContentfulIconSvgTextNodeChildrenMdxParentChildren = 274,
  ChildrenContentfulIconSvgTextNodeChildrenMdxParentId = 275,
  ChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 276,
  ChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 277,
  ChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 278,
  ChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 279,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountParagraphs = 280,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountSentences = 281,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountWords = 282,
  ChildrenContentfulIconSvgTextNodeChildrenChildren = 283,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenChildren = 284,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenId = 285,
  ChildrenContentfulIconSvgTextNodeChildrenId = 286,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContent = 287,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContentDigest = 288,
  ChildrenContentfulIconSvgTextNodeChildrenInternalDescription = 289,
  ChildrenContentfulIconSvgTextNodeChildrenInternalFieldOwners = 290,
  ChildrenContentfulIconSvgTextNodeChildrenInternalIgnoreType = 291,
  ChildrenContentfulIconSvgTextNodeChildrenInternalMediaType = 292,
  ChildrenContentfulIconSvgTextNodeChildrenInternalOwner = 293,
  ChildrenContentfulIconSvgTextNodeChildrenInternalType = 294,
  ChildrenContentfulIconSvgTextNodeChildrenParentChildren = 295,
  ChildrenContentfulIconSvgTextNodeChildrenParentId = 296,
  ChildrenContentfulIconSvgTextNodeId = 297,
  ChildrenContentfulIconSvgTextNodeInternalContent = 298,
  ChildrenContentfulIconSvgTextNodeInternalContentDigest = 299,
  ChildrenContentfulIconSvgTextNodeInternalDescription = 300,
  ChildrenContentfulIconSvgTextNodeInternalFieldOwners = 301,
  ChildrenContentfulIconSvgTextNodeInternalIgnoreType = 302,
  ChildrenContentfulIconSvgTextNodeInternalMediaType = 303,
  ChildrenContentfulIconSvgTextNodeInternalOwner = 304,
  ChildrenContentfulIconSvgTextNodeInternalType = 305,
  ChildrenContentfulIconSvgTextNodeParentChildren = 306,
  ChildrenContentfulIconSvgTextNodeParentChildrenChildren = 307,
  ChildrenContentfulIconSvgTextNodeParentChildrenId = 308,
  ChildrenContentfulIconSvgTextNodeParentId = 309,
  ChildrenContentfulIconSvgTextNodeParentInternalContent = 310,
  ChildrenContentfulIconSvgTextNodeParentInternalContentDigest = 311,
  ChildrenContentfulIconSvgTextNodeParentInternalDescription = 312,
  ChildrenContentfulIconSvgTextNodeParentInternalFieldOwners = 313,
  ChildrenContentfulIconSvgTextNodeParentInternalIgnoreType = 314,
  ChildrenContentfulIconSvgTextNodeParentInternalMediaType = 315,
  ChildrenContentfulIconSvgTextNodeParentInternalOwner = 316,
  ChildrenContentfulIconSvgTextNodeParentInternalType = 317,
  ChildrenContentfulIconSvgTextNodeParentParentChildren = 318,
  ChildrenContentfulIconSvgTextNodeParentParentId = 319,
  ChildrenContentfulIconSvgTextNodeSvg = 320,
  ChildrenContentfulIconSvgTextNodeSysType = 321,
  ChildrenChildren = 322,
  ChildrenChildrenChildren = 323,
  ChildrenChildrenChildrenChildren = 324,
  ChildrenChildrenChildrenId = 325,
  ChildrenChildrenId = 326,
  ChildrenChildrenInternalContent = 327,
  ChildrenChildrenInternalContentDigest = 328,
  ChildrenChildrenInternalDescription = 329,
  ChildrenChildrenInternalFieldOwners = 330,
  ChildrenChildrenInternalIgnoreType = 331,
  ChildrenChildrenInternalMediaType = 332,
  ChildrenChildrenInternalOwner = 333,
  ChildrenChildrenInternalType = 334,
  ChildrenChildrenParentChildren = 335,
  ChildrenChildrenParentId = 336,
  ChildrenId = 337,
  ChildrenInternalContent = 338,
  ChildrenInternalContentDigest = 339,
  ChildrenInternalDescription = 340,
  ChildrenInternalFieldOwners = 341,
  ChildrenInternalIgnoreType = 342,
  ChildrenInternalMediaType = 343,
  ChildrenInternalOwner = 344,
  ChildrenInternalType = 345,
  ChildrenParentChildren = 346,
  ChildrenParentChildrenChildren = 347,
  ChildrenParentChildrenId = 348,
  ChildrenParentId = 349,
  ChildrenParentInternalContent = 350,
  ChildrenParentInternalContentDigest = 351,
  ChildrenParentInternalDescription = 352,
  ChildrenParentInternalFieldOwners = 353,
  ChildrenParentInternalIgnoreType = 354,
  ChildrenParentInternalMediaType = 355,
  ChildrenParentInternalOwner = 356,
  ChildrenParentInternalType = 357,
  ChildrenParentParentChildren = 358,
  ChildrenParentParentId = 359,
  Contact = 360,
  ContactChildren = 361,
  ContactChildrenChildren = 362,
  ContactChildrenChildrenChildren = 363,
  ContactChildrenChildrenId = 364,
  ContactChildrenId = 365,
  ContactChildrenInternalContent = 366,
  ContactChildrenInternalContentDigest = 367,
  ContactChildrenInternalDescription = 368,
  ContactChildrenInternalFieldOwners = 369,
  ContactChildrenInternalIgnoreType = 370,
  ContactChildrenInternalMediaType = 371,
  ContactChildrenInternalOwner = 372,
  ContactChildrenInternalType = 373,
  ContactChildrenParentChildren = 374,
  ContactChildrenParentId = 375,
  ContactContentfulId = 376,
  ContactCreatedAt = 377,
  ContactHref = 378,
  ContactIconSvgDarkChildren = 379,
  ContactIconSvgDarkChildrenChildren = 380,
  ContactIconSvgDarkChildrenId = 381,
  ContactIconSvgDarkContentfulId = 382,
  ContactIconSvgDarkCreatedAt = 383,
  ContactIconSvgDarkDescription = 384,
  ContactIconSvgDarkFieldsLocalFile = 385,
  ContactIconSvgDarkFileContentType = 386,
  ContactIconSvgDarkFileFileName = 387,
  ContactIconSvgDarkFileUrl = 388,
  ContactIconSvgDarkGatsbyImageData = 389,
  ContactIconSvgDarkId = 390,
  ContactIconSvgDarkInternalContent = 391,
  ContactIconSvgDarkInternalContentDigest = 392,
  ContactIconSvgDarkInternalDescription = 393,
  ContactIconSvgDarkInternalFieldOwners = 394,
  ContactIconSvgDarkInternalIgnoreType = 395,
  ContactIconSvgDarkInternalMediaType = 396,
  ContactIconSvgDarkInternalOwner = 397,
  ContactIconSvgDarkInternalType = 398,
  ContactIconSvgDarkLocalFileAbsolutePath = 399,
  ContactIconSvgDarkLocalFileAccessTime = 400,
  ContactIconSvgDarkLocalFileAtime = 401,
  ContactIconSvgDarkLocalFileAtimeMs = 402,
  ContactIconSvgDarkLocalFileBase = 403,
  ContactIconSvgDarkLocalFileBirthTime = 404,
  ContactIconSvgDarkLocalFileBirthtime = 405,
  ContactIconSvgDarkLocalFileBirthtimeMs = 406,
  ContactIconSvgDarkLocalFileBlksize = 407,
  ContactIconSvgDarkLocalFileBlocks = 408,
  ContactIconSvgDarkLocalFileChangeTime = 409,
  ContactIconSvgDarkLocalFileChildren = 410,
  ContactIconSvgDarkLocalFileChildrenImageSharp = 411,
  ContactIconSvgDarkLocalFileChildrenLocale = 412,
  ContactIconSvgDarkLocalFileCtime = 413,
  ContactIconSvgDarkLocalFileCtimeMs = 414,
  ContactIconSvgDarkLocalFileDev = 415,
  ContactIconSvgDarkLocalFileDir = 416,
  ContactIconSvgDarkLocalFileExt = 417,
  ContactIconSvgDarkLocalFileExtension = 418,
  ContactIconSvgDarkLocalFileGid = 419,
  ContactIconSvgDarkLocalFileId = 420,
  ContactIconSvgDarkLocalFileIno = 421,
  ContactIconSvgDarkLocalFileMode = 422,
  ContactIconSvgDarkLocalFileModifiedTime = 423,
  ContactIconSvgDarkLocalFileMtime = 424,
  ContactIconSvgDarkLocalFileMtimeMs = 425,
  ContactIconSvgDarkLocalFileName = 426,
  ContactIconSvgDarkLocalFileNlink = 427,
  ContactIconSvgDarkLocalFilePrettySize = 428,
  ContactIconSvgDarkLocalFilePublicUrl = 429,
  ContactIconSvgDarkLocalFileRdev = 430,
  ContactIconSvgDarkLocalFileRelativeDirectory = 431,
  ContactIconSvgDarkLocalFileRelativePath = 432,
  ContactIconSvgDarkLocalFileRoot = 433,
  ContactIconSvgDarkLocalFileSize = 434,
  ContactIconSvgDarkLocalFileSourceInstanceName = 435,
  ContactIconSvgDarkLocalFileUid = 436,
  ContactIconSvgDarkLocalFileUrl = 437,
  ContactIconSvgDarkNodeLocale = 438,
  ContactIconSvgDarkParentChildren = 439,
  ContactIconSvgDarkParentId = 440,
  ContactIconSvgDarkSpaceId = 441,
  ContactIconSvgDarkSysRevision = 442,
  ContactIconSvgDarkSysType = 443,
  ContactIconSvgDarkTitle = 444,
  ContactIconSvgDarkUpdatedAt = 445,
  ContactIconSvgLightChildren = 446,
  ContactIconSvgLightChildrenChildren = 447,
  ContactIconSvgLightChildrenId = 448,
  ContactIconSvgLightContentfulId = 449,
  ContactIconSvgLightCreatedAt = 450,
  ContactIconSvgLightDescription = 451,
  ContactIconSvgLightFieldsLocalFile = 452,
  ContactIconSvgLightFileContentType = 453,
  ContactIconSvgLightFileFileName = 454,
  ContactIconSvgLightFileUrl = 455,
  ContactIconSvgLightGatsbyImageData = 456,
  ContactIconSvgLightId = 457,
  ContactIconSvgLightInternalContent = 458,
  ContactIconSvgLightInternalContentDigest = 459,
  ContactIconSvgLightInternalDescription = 460,
  ContactIconSvgLightInternalFieldOwners = 461,
  ContactIconSvgLightInternalIgnoreType = 462,
  ContactIconSvgLightInternalMediaType = 463,
  ContactIconSvgLightInternalOwner = 464,
  ContactIconSvgLightInternalType = 465,
  ContactIconSvgLightLocalFileAbsolutePath = 466,
  ContactIconSvgLightLocalFileAccessTime = 467,
  ContactIconSvgLightLocalFileAtime = 468,
  ContactIconSvgLightLocalFileAtimeMs = 469,
  ContactIconSvgLightLocalFileBase = 470,
  ContactIconSvgLightLocalFileBirthTime = 471,
  ContactIconSvgLightLocalFileBirthtime = 472,
  ContactIconSvgLightLocalFileBirthtimeMs = 473,
  ContactIconSvgLightLocalFileBlksize = 474,
  ContactIconSvgLightLocalFileBlocks = 475,
  ContactIconSvgLightLocalFileChangeTime = 476,
  ContactIconSvgLightLocalFileChildren = 477,
  ContactIconSvgLightLocalFileChildrenImageSharp = 478,
  ContactIconSvgLightLocalFileChildrenLocale = 479,
  ContactIconSvgLightLocalFileCtime = 480,
  ContactIconSvgLightLocalFileCtimeMs = 481,
  ContactIconSvgLightLocalFileDev = 482,
  ContactIconSvgLightLocalFileDir = 483,
  ContactIconSvgLightLocalFileExt = 484,
  ContactIconSvgLightLocalFileExtension = 485,
  ContactIconSvgLightLocalFileGid = 486,
  ContactIconSvgLightLocalFileId = 487,
  ContactIconSvgLightLocalFileIno = 488,
  ContactIconSvgLightLocalFileMode = 489,
  ContactIconSvgLightLocalFileModifiedTime = 490,
  ContactIconSvgLightLocalFileMtime = 491,
  ContactIconSvgLightLocalFileMtimeMs = 492,
  ContactIconSvgLightLocalFileName = 493,
  ContactIconSvgLightLocalFileNlink = 494,
  ContactIconSvgLightLocalFilePrettySize = 495,
  ContactIconSvgLightLocalFilePublicUrl = 496,
  ContactIconSvgLightLocalFileRdev = 497,
  ContactIconSvgLightLocalFileRelativeDirectory = 498,
  ContactIconSvgLightLocalFileRelativePath = 499,
  ContactIconSvgLightLocalFileRoot = 500,
  ContactIconSvgLightLocalFileSize = 501,
  ContactIconSvgLightLocalFileSourceInstanceName = 502,
  ContactIconSvgLightLocalFileUid = 503,
  ContactIconSvgLightLocalFileUrl = 504,
  ContactIconSvgLightNodeLocale = 505,
  ContactIconSvgLightParentChildren = 506,
  ContactIconSvgLightParentId = 507,
  ContactIconSvgLightSpaceId = 508,
  ContactIconSvgLightSysRevision = 509,
  ContactIconSvgLightSysType = 510,
  ContactIconSvgLightTitle = 511,
  ContactIconSvgLightUpdatedAt = 512,
  ContactIconChildContentfulIconSvgTextNodeChildren = 513,
  ContactIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 514,
  ContactIconChildContentfulIconSvgTextNodeChildrenMdx = 515,
  ContactIconChildContentfulIconSvgTextNodeId = 516,
  ContactIconChildContentfulIconSvgTextNodeSvg = 517,
  ContactIconChildren = 518,
  ContactIconChildrenContentfulIconSvgTextNode = 519,
  ContactIconChildrenContentfulIconSvgTextNodeChildren = 520,
  ContactIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 521,
  ContactIconChildrenContentfulIconSvgTextNodeChildrenMdx = 522,
  ContactIconChildrenContentfulIconSvgTextNodeId = 523,
  ContactIconChildrenContentfulIconSvgTextNodeSvg = 524,
  ContactIconChildrenChildren = 525,
  ContactIconChildrenId = 526,
  ContactIconContact = 527,
  ContactIconContactChildren = 528,
  ContactIconContactContentfulId = 529,
  ContactIconContactCreatedAt = 530,
  ContactIconContactHref = 531,
  ContactIconContactId = 532,
  ContactIconContactName = 533,
  ContactIconContactNodeLocale = 534,
  ContactIconContactSortKey = 535,
  ContactIconContactSpaceId = 536,
  ContactIconContactSubName = 537,
  ContactIconContactUpdatedAt = 538,
  ContactIconContentfulId = 539,
  ContactIconCreatedAt = 540,
  ContactIconHistory = 541,
  ContactIconHistoryChildren = 542,
  ContactIconHistoryContentfulId = 543,
  ContactIconHistoryCreatedAt = 544,
  ContactIconHistoryDate = 545,
  ContactIconHistoryId = 546,
  ContactIconHistoryName = 547,
  ContactIconHistoryNodeLocale = 548,
  ContactIconHistorySpaceId = 549,
  ContactIconHistorySubName = 550,
  ContactIconHistoryUpdatedAt = 551,
  ContactIconId = 552,
  ContactIconInternalContent = 553,
  ContactIconInternalContentDigest = 554,
  ContactIconInternalDescription = 555,
  ContactIconInternalFieldOwners = 556,
  ContactIconInternalIgnoreType = 557,
  ContactIconInternalMediaType = 558,
  ContactIconInternalOwner = 559,
  ContactIconInternalType = 560,
  ContactIconName = 561,
  ContactIconNodeLocale = 562,
  ContactIconOss = 563,
  ContactIconOssChildren = 564,
  ContactIconOssChildrenContentfulOssDetailTextNode = 565,
  ContactIconOssContentfulId = 566,
  ContactIconOssCreatedAt = 567,
  ContactIconOssHref = 568,
  ContactIconOssId = 569,
  ContactIconOssName = 570,
  ContactIconOssNodeLocale = 571,
  ContactIconOssSpaceId = 572,
  ContactIconOssStartDate = 573,
  ContactIconOssSubName = 574,
  ContactIconOssTags = 575,
  ContactIconOssUpdatedAt = 576,
  ContactIconParentChildren = 577,
  ContactIconParentId = 578,
  ContactIconProject = 579,
  ContactIconProjectChildren = 580,
  ContactIconProjectChildrenContentfulProjectDetailTextNode = 581,
  ContactIconProjectContentfulId = 582,
  ContactIconProjectCreatedAt = 583,
  ContactIconProjectEndDate = 584,
  ContactIconProjectId = 585,
  ContactIconProjectName = 586,
  ContactIconProjectNodeLocale = 587,
  ContactIconProjectSpaceId = 588,
  ContactIconProjectStartDate = 589,
  ContactIconProjectSubName = 590,
  ContactIconProjectTags = 591,
  ContactIconProjectUpdatedAt = 592,
  ContactIconSpaceId = 593,
  ContactIconSvgChildren = 594,
  ContactIconSvgChildrenMarkdownRemark = 595,
  ContactIconSvgChildrenMdx = 596,
  ContactIconSvgId = 597,
  ContactIconSvgSvg = 598,
  ContactIconSysRevision = 599,
  ContactIconSysType = 600,
  ContactIconUpdatedAt = 601,
  ContactIconWhatICanDo = 602,
  ContactIconWhatICanDoChildren = 603,
  ContactIconWhatICanDoContentfulId = 604,
  ContactIconWhatICanDoCreatedAt = 605,
  ContactIconWhatICanDoId = 606,
  ContactIconWhatICanDoName = 607,
  ContactIconWhatICanDoNodeLocale = 608,
  ContactIconWhatICanDoSortKey = 609,
  ContactIconWhatICanDoSpaceId = 610,
  ContactIconWhatICanDoSubName = 611,
  ContactIconWhatICanDoUpdatedAt = 612,
  ContactId = 613,
  ContactInternalContent = 614,
  ContactInternalContentDigest = 615,
  ContactInternalDescription = 616,
  ContactInternalFieldOwners = 617,
  ContactInternalIgnoreType = 618,
  ContactInternalMediaType = 619,
  ContactInternalOwner = 620,
  ContactInternalType = 621,
  ContactName = 622,
  ContactNodeLocale = 623,
  ContactParentChildren = 624,
  ContactParentChildrenChildren = 625,
  ContactParentChildrenId = 626,
  ContactParentId = 627,
  ContactParentInternalContent = 628,
  ContactParentInternalContentDigest = 629,
  ContactParentInternalDescription = 630,
  ContactParentInternalFieldOwners = 631,
  ContactParentInternalIgnoreType = 632,
  ContactParentInternalMediaType = 633,
  ContactParentInternalOwner = 634,
  ContactParentInternalType = 635,
  ContactParentParentChildren = 636,
  ContactParentParentId = 637,
  ContactSortKey = 638,
  ContactSpaceId = 639,
  ContactSubName = 640,
  ContactSysRevision = 641,
  ContactSysType = 642,
  ContactUpdatedAt = 643,
  ContentfulId = 644,
  CreatedAt = 645,
  History = 646,
  HistoryChildren = 647,
  HistoryChildrenChildren = 648,
  HistoryChildrenChildrenChildren = 649,
  HistoryChildrenChildrenId = 650,
  HistoryChildrenId = 651,
  HistoryChildrenInternalContent = 652,
  HistoryChildrenInternalContentDigest = 653,
  HistoryChildrenInternalDescription = 654,
  HistoryChildrenInternalFieldOwners = 655,
  HistoryChildrenInternalIgnoreType = 656,
  HistoryChildrenInternalMediaType = 657,
  HistoryChildrenInternalOwner = 658,
  HistoryChildrenInternalType = 659,
  HistoryChildrenParentChildren = 660,
  HistoryChildrenParentId = 661,
  HistoryContentfulId = 662,
  HistoryCreatedAt = 663,
  HistoryDate = 664,
  HistoryIconChildContentfulIconSvgTextNodeChildren = 665,
  HistoryIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 666,
  HistoryIconChildContentfulIconSvgTextNodeChildrenMdx = 667,
  HistoryIconChildContentfulIconSvgTextNodeId = 668,
  HistoryIconChildContentfulIconSvgTextNodeSvg = 669,
  HistoryIconChildren = 670,
  HistoryIconChildrenContentfulIconSvgTextNode = 671,
  HistoryIconChildrenContentfulIconSvgTextNodeChildren = 672,
  HistoryIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 673,
  HistoryIconChildrenContentfulIconSvgTextNodeChildrenMdx = 674,
  HistoryIconChildrenContentfulIconSvgTextNodeId = 675,
  HistoryIconChildrenContentfulIconSvgTextNodeSvg = 676,
  HistoryIconChildrenChildren = 677,
  HistoryIconChildrenId = 678,
  HistoryIconContact = 679,
  HistoryIconContactChildren = 680,
  HistoryIconContactContentfulId = 681,
  HistoryIconContactCreatedAt = 682,
  HistoryIconContactHref = 683,
  HistoryIconContactId = 684,
  HistoryIconContactName = 685,
  HistoryIconContactNodeLocale = 686,
  HistoryIconContactSortKey = 687,
  HistoryIconContactSpaceId = 688,
  HistoryIconContactSubName = 689,
  HistoryIconContactUpdatedAt = 690,
  HistoryIconContentfulId = 691,
  HistoryIconCreatedAt = 692,
  HistoryIconHistory = 693,
  HistoryIconHistoryChildren = 694,
  HistoryIconHistoryContentfulId = 695,
  HistoryIconHistoryCreatedAt = 696,
  HistoryIconHistoryDate = 697,
  HistoryIconHistoryId = 698,
  HistoryIconHistoryName = 699,
  HistoryIconHistoryNodeLocale = 700,
  HistoryIconHistorySpaceId = 701,
  HistoryIconHistorySubName = 702,
  HistoryIconHistoryUpdatedAt = 703,
  HistoryIconId = 704,
  HistoryIconInternalContent = 705,
  HistoryIconInternalContentDigest = 706,
  HistoryIconInternalDescription = 707,
  HistoryIconInternalFieldOwners = 708,
  HistoryIconInternalIgnoreType = 709,
  HistoryIconInternalMediaType = 710,
  HistoryIconInternalOwner = 711,
  HistoryIconInternalType = 712,
  HistoryIconName = 713,
  HistoryIconNodeLocale = 714,
  HistoryIconOss = 715,
  HistoryIconOssChildren = 716,
  HistoryIconOssChildrenContentfulOssDetailTextNode = 717,
  HistoryIconOssContentfulId = 718,
  HistoryIconOssCreatedAt = 719,
  HistoryIconOssHref = 720,
  HistoryIconOssId = 721,
  HistoryIconOssName = 722,
  HistoryIconOssNodeLocale = 723,
  HistoryIconOssSpaceId = 724,
  HistoryIconOssStartDate = 725,
  HistoryIconOssSubName = 726,
  HistoryIconOssTags = 727,
  HistoryIconOssUpdatedAt = 728,
  HistoryIconParentChildren = 729,
  HistoryIconParentId = 730,
  HistoryIconProject = 731,
  HistoryIconProjectChildren = 732,
  HistoryIconProjectChildrenContentfulProjectDetailTextNode = 733,
  HistoryIconProjectContentfulId = 734,
  HistoryIconProjectCreatedAt = 735,
  HistoryIconProjectEndDate = 736,
  HistoryIconProjectId = 737,
  HistoryIconProjectName = 738,
  HistoryIconProjectNodeLocale = 739,
  HistoryIconProjectSpaceId = 740,
  HistoryIconProjectStartDate = 741,
  HistoryIconProjectSubName = 742,
  HistoryIconProjectTags = 743,
  HistoryIconProjectUpdatedAt = 744,
  HistoryIconSpaceId = 745,
  HistoryIconSvgChildren = 746,
  HistoryIconSvgChildrenMarkdownRemark = 747,
  HistoryIconSvgChildrenMdx = 748,
  HistoryIconSvgId = 749,
  HistoryIconSvgSvg = 750,
  HistoryIconSysRevision = 751,
  HistoryIconSysType = 752,
  HistoryIconUpdatedAt = 753,
  HistoryIconWhatICanDo = 754,
  HistoryIconWhatICanDoChildren = 755,
  HistoryIconWhatICanDoContentfulId = 756,
  HistoryIconWhatICanDoCreatedAt = 757,
  HistoryIconWhatICanDoId = 758,
  HistoryIconWhatICanDoName = 759,
  HistoryIconWhatICanDoNodeLocale = 760,
  HistoryIconWhatICanDoSortKey = 761,
  HistoryIconWhatICanDoSpaceId = 762,
  HistoryIconWhatICanDoSubName = 763,
  HistoryIconWhatICanDoUpdatedAt = 764,
  HistoryId = 765,
  HistoryInternalContent = 766,
  HistoryInternalContentDigest = 767,
  HistoryInternalDescription = 768,
  HistoryInternalFieldOwners = 769,
  HistoryInternalIgnoreType = 770,
  HistoryInternalMediaType = 771,
  HistoryInternalOwner = 772,
  HistoryInternalType = 773,
  HistoryName = 774,
  HistoryNodeLocale = 775,
  HistoryParentChildren = 776,
  HistoryParentChildrenChildren = 777,
  HistoryParentChildrenId = 778,
  HistoryParentId = 779,
  HistoryParentInternalContent = 780,
  HistoryParentInternalContentDigest = 781,
  HistoryParentInternalDescription = 782,
  HistoryParentInternalFieldOwners = 783,
  HistoryParentInternalIgnoreType = 784,
  HistoryParentInternalMediaType = 785,
  HistoryParentInternalOwner = 786,
  HistoryParentInternalType = 787,
  HistoryParentParentChildren = 788,
  HistoryParentParentId = 789,
  HistorySpaceId = 790,
  HistorySubName = 791,
  HistorySysRevision = 792,
  HistorySysType = 793,
  HistoryUpdatedAt = 794,
  Id = 795,
  InternalContent = 796,
  InternalContentDigest = 797,
  InternalDescription = 798,
  InternalFieldOwners = 799,
  InternalIgnoreType = 800,
  InternalMediaType = 801,
  InternalOwner = 802,
  InternalType = 803,
  Name = 804,
  NodeLocale = 805,
  Oss = 806,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 807,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 808,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 809,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 810,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 811,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 812,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkId = 813,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 814,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 815,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 816,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 817,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 818,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 819,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 820,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 821,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 822,
  OssChildContentfulOssDetailTextNodeChildMdxId = 823,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 824,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 825,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 826,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 827,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 828,
  OssChildContentfulOssDetailTextNodeChildren = 829,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 830,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 831,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 832,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 833,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 834,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 835,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 836,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 837,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 838,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 839,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 840,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 841,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 842,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 843,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 844,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 845,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 846,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 847,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 848,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 849,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 850,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 851,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 852,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 853,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 854,
  OssChildContentfulOssDetailTextNodeChildrenId = 855,
  OssChildContentfulOssDetailTextNodeDetail = 856,
  OssChildContentfulOssDetailTextNodeId = 857,
  OssChildContentfulOssDetailTextNodeInternalContent = 858,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 859,
  OssChildContentfulOssDetailTextNodeInternalDescription = 860,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 861,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 862,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 863,
  OssChildContentfulOssDetailTextNodeInternalOwner = 864,
  OssChildContentfulOssDetailTextNodeInternalType = 865,
  OssChildContentfulOssDetailTextNodeParentChildren = 866,
  OssChildContentfulOssDetailTextNodeParentId = 867,
  OssChildContentfulOssDetailTextNodeSysType = 868,
  OssChildren = 869,
  OssChildrenContentfulOssDetailTextNode = 870,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 871,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 872,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 873,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 874,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 875,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 876,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkId = 877,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 878,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 879,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 880,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 881,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 882,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 883,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 884,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 885,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 886,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 887,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 888,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 889,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 890,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 891,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 892,
  OssChildrenContentfulOssDetailTextNodeChildren = 893,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 894,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 895,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 896,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 897,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 898,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 899,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 900,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 901,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 902,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 903,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 904,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 905,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 906,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 907,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 908,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 909,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 910,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 911,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 912,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 913,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 914,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 915,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 916,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 917,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 918,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 919,
  OssChildrenContentfulOssDetailTextNodeDetail = 920,
  OssChildrenContentfulOssDetailTextNodeId = 921,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 922,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 923,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 924,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 925,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 926,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 927,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 928,
  OssChildrenContentfulOssDetailTextNodeInternalType = 929,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 930,
  OssChildrenContentfulOssDetailTextNodeParentId = 931,
  OssChildrenContentfulOssDetailTextNodeSysType = 932,
  OssChildrenChildren = 933,
  OssChildrenChildrenChildren = 934,
  OssChildrenChildrenId = 935,
  OssChildrenId = 936,
  OssChildrenInternalContent = 937,
  OssChildrenInternalContentDigest = 938,
  OssChildrenInternalDescription = 939,
  OssChildrenInternalFieldOwners = 940,
  OssChildrenInternalIgnoreType = 941,
  OssChildrenInternalMediaType = 942,
  OssChildrenInternalOwner = 943,
  OssChildrenInternalType = 944,
  OssChildrenParentChildren = 945,
  OssChildrenParentId = 946,
  OssContentfulId = 947,
  OssCreatedAt = 948,
  OssDetailChildMarkdownRemarkChildren = 949,
  OssDetailChildMarkdownRemarkExcerpt = 950,
  OssDetailChildMarkdownRemarkExcerptAst = 951,
  OssDetailChildMarkdownRemarkHeadings = 952,
  OssDetailChildMarkdownRemarkHtml = 953,
  OssDetailChildMarkdownRemarkHtmlAst = 954,
  OssDetailChildMarkdownRemarkId = 955,
  OssDetailChildMarkdownRemarkRawMarkdownBody = 956,
  OssDetailChildMarkdownRemarkTableOfContents = 957,
  OssDetailChildMarkdownRemarkTimeToRead = 958,
  OssDetailChildMdxBody = 959,
  OssDetailChildMdxChildren = 960,
  OssDetailChildMdxExcerpt = 961,
  OssDetailChildMdxFileAbsolutePath = 962,
  OssDetailChildMdxHeadings = 963,
  OssDetailChildMdxHtml = 964,
  OssDetailChildMdxId = 965,
  OssDetailChildMdxMdxAst = 966,
  OssDetailChildMdxRawBody = 967,
  OssDetailChildMdxSlug = 968,
  OssDetailChildMdxTableOfContents = 969,
  OssDetailChildMdxTimeToRead = 970,
  OssDetailChildren = 971,
  OssDetailChildrenMarkdownRemark = 972,
  OssDetailChildrenMarkdownRemarkChildren = 973,
  OssDetailChildrenMarkdownRemarkExcerpt = 974,
  OssDetailChildrenMarkdownRemarkExcerptAst = 975,
  OssDetailChildrenMarkdownRemarkHeadings = 976,
  OssDetailChildrenMarkdownRemarkHtml = 977,
  OssDetailChildrenMarkdownRemarkHtmlAst = 978,
  OssDetailChildrenMarkdownRemarkId = 979,
  OssDetailChildrenMarkdownRemarkRawMarkdownBody = 980,
  OssDetailChildrenMarkdownRemarkTableOfContents = 981,
  OssDetailChildrenMarkdownRemarkTimeToRead = 982,
  OssDetailChildrenMdx = 983,
  OssDetailChildrenMdxBody = 984,
  OssDetailChildrenMdxChildren = 985,
  OssDetailChildrenMdxExcerpt = 986,
  OssDetailChildrenMdxFileAbsolutePath = 987,
  OssDetailChildrenMdxHeadings = 988,
  OssDetailChildrenMdxHtml = 989,
  OssDetailChildrenMdxId = 990,
  OssDetailChildrenMdxMdxAst = 991,
  OssDetailChildrenMdxRawBody = 992,
  OssDetailChildrenMdxSlug = 993,
  OssDetailChildrenMdxTableOfContents = 994,
  OssDetailChildrenMdxTimeToRead = 995,
  OssDetailChildrenChildren = 996,
  OssDetailChildrenId = 997,
  OssDetailDetail = 998,
  OssDetailId = 999,
  OssDetailInternalContent = 1000,
  OssDetailInternalContentDigest = 1001,
  OssDetailInternalDescription = 1002,
  OssDetailInternalFieldOwners = 1003,
  OssDetailInternalIgnoreType = 1004,
  OssDetailInternalMediaType = 1005,
  OssDetailInternalOwner = 1006,
  OssDetailInternalType = 1007,
  OssDetailParentChildren = 1008,
  OssDetailParentId = 1009,
  OssDetailSysType = 1010,
  OssHref = 1011,
  OssIconChildContentfulIconSvgTextNodeChildren = 1012,
  OssIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 1013,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 1014,
  OssIconChildContentfulIconSvgTextNodeId = 1015,
  OssIconChildContentfulIconSvgTextNodeSvg = 1016,
  OssIconChildren = 1017,
  OssIconChildrenContentfulIconSvgTextNode = 1018,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 1019,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 1020,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1021,
  OssIconChildrenContentfulIconSvgTextNodeId = 1022,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 1023,
  OssIconChildrenChildren = 1024,
  OssIconChildrenId = 1025,
  OssIconContact = 1026,
  OssIconContactChildren = 1027,
  OssIconContactContentfulId = 1028,
  OssIconContactCreatedAt = 1029,
  OssIconContactHref = 1030,
  OssIconContactId = 1031,
  OssIconContactName = 1032,
  OssIconContactNodeLocale = 1033,
  OssIconContactSortKey = 1034,
  OssIconContactSpaceId = 1035,
  OssIconContactSubName = 1036,
  OssIconContactUpdatedAt = 1037,
  OssIconContentfulId = 1038,
  OssIconCreatedAt = 1039,
  OssIconHistory = 1040,
  OssIconHistoryChildren = 1041,
  OssIconHistoryContentfulId = 1042,
  OssIconHistoryCreatedAt = 1043,
  OssIconHistoryDate = 1044,
  OssIconHistoryId = 1045,
  OssIconHistoryName = 1046,
  OssIconHistoryNodeLocale = 1047,
  OssIconHistorySpaceId = 1048,
  OssIconHistorySubName = 1049,
  OssIconHistoryUpdatedAt = 1050,
  OssIconId = 1051,
  OssIconInternalContent = 1052,
  OssIconInternalContentDigest = 1053,
  OssIconInternalDescription = 1054,
  OssIconInternalFieldOwners = 1055,
  OssIconInternalIgnoreType = 1056,
  OssIconInternalMediaType = 1057,
  OssIconInternalOwner = 1058,
  OssIconInternalType = 1059,
  OssIconName = 1060,
  OssIconNodeLocale = 1061,
  OssIconOss = 1062,
  OssIconOssChildren = 1063,
  OssIconOssChildrenContentfulOssDetailTextNode = 1064,
  OssIconOssContentfulId = 1065,
  OssIconOssCreatedAt = 1066,
  OssIconOssHref = 1067,
  OssIconOssId = 1068,
  OssIconOssName = 1069,
  OssIconOssNodeLocale = 1070,
  OssIconOssSpaceId = 1071,
  OssIconOssStartDate = 1072,
  OssIconOssSubName = 1073,
  OssIconOssTags = 1074,
  OssIconOssUpdatedAt = 1075,
  OssIconParentChildren = 1076,
  OssIconParentId = 1077,
  OssIconProject = 1078,
  OssIconProjectChildren = 1079,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 1080,
  OssIconProjectContentfulId = 1081,
  OssIconProjectCreatedAt = 1082,
  OssIconProjectEndDate = 1083,
  OssIconProjectId = 1084,
  OssIconProjectName = 1085,
  OssIconProjectNodeLocale = 1086,
  OssIconProjectSpaceId = 1087,
  OssIconProjectStartDate = 1088,
  OssIconProjectSubName = 1089,
  OssIconProjectTags = 1090,
  OssIconProjectUpdatedAt = 1091,
  OssIconSpaceId = 1092,
  OssIconSvgChildren = 1093,
  OssIconSvgChildrenMarkdownRemark = 1094,
  OssIconSvgChildrenMdx = 1095,
  OssIconSvgId = 1096,
  OssIconSvgSvg = 1097,
  OssIconSysRevision = 1098,
  OssIconSysType = 1099,
  OssIconUpdatedAt = 1100,
  OssIconWhatICanDo = 1101,
  OssIconWhatICanDoChildren = 1102,
  OssIconWhatICanDoContentfulId = 1103,
  OssIconWhatICanDoCreatedAt = 1104,
  OssIconWhatICanDoId = 1105,
  OssIconWhatICanDoName = 1106,
  OssIconWhatICanDoNodeLocale = 1107,
  OssIconWhatICanDoSortKey = 1108,
  OssIconWhatICanDoSpaceId = 1109,
  OssIconWhatICanDoSubName = 1110,
  OssIconWhatICanDoUpdatedAt = 1111,
  OssId = 1112,
  OssImageChildren = 1113,
  OssImageChildrenChildren = 1114,
  OssImageChildrenId = 1115,
  OssImageContentfulId = 1116,
  OssImageCreatedAt = 1117,
  OssImageDescription = 1118,
  OssImageFieldsLocalFile = 1119,
  OssImageFileContentType = 1120,
  OssImageFileFileName = 1121,
  OssImageFileUrl = 1122,
  OssImageGatsbyImageData = 1123,
  OssImageId = 1124,
  OssImageInternalContent = 1125,
  OssImageInternalContentDigest = 1126,
  OssImageInternalDescription = 1127,
  OssImageInternalFieldOwners = 1128,
  OssImageInternalIgnoreType = 1129,
  OssImageInternalMediaType = 1130,
  OssImageInternalOwner = 1131,
  OssImageInternalType = 1132,
  OssImageLocalFileAbsolutePath = 1133,
  OssImageLocalFileAccessTime = 1134,
  OssImageLocalFileAtime = 1135,
  OssImageLocalFileAtimeMs = 1136,
  OssImageLocalFileBase = 1137,
  OssImageLocalFileBirthTime = 1138,
  OssImageLocalFileBirthtime = 1139,
  OssImageLocalFileBirthtimeMs = 1140,
  OssImageLocalFileBlksize = 1141,
  OssImageLocalFileBlocks = 1142,
  OssImageLocalFileChangeTime = 1143,
  OssImageLocalFileChildren = 1144,
  OssImageLocalFileChildrenImageSharp = 1145,
  OssImageLocalFileChildrenLocale = 1146,
  OssImageLocalFileCtime = 1147,
  OssImageLocalFileCtimeMs = 1148,
  OssImageLocalFileDev = 1149,
  OssImageLocalFileDir = 1150,
  OssImageLocalFileExt = 1151,
  OssImageLocalFileExtension = 1152,
  OssImageLocalFileGid = 1153,
  OssImageLocalFileId = 1154,
  OssImageLocalFileIno = 1155,
  OssImageLocalFileMode = 1156,
  OssImageLocalFileModifiedTime = 1157,
  OssImageLocalFileMtime = 1158,
  OssImageLocalFileMtimeMs = 1159,
  OssImageLocalFileName = 1160,
  OssImageLocalFileNlink = 1161,
  OssImageLocalFilePrettySize = 1162,
  OssImageLocalFilePublicUrl = 1163,
  OssImageLocalFileRdev = 1164,
  OssImageLocalFileRelativeDirectory = 1165,
  OssImageLocalFileRelativePath = 1166,
  OssImageLocalFileRoot = 1167,
  OssImageLocalFileSize = 1168,
  OssImageLocalFileSourceInstanceName = 1169,
  OssImageLocalFileUid = 1170,
  OssImageLocalFileUrl = 1171,
  OssImageNodeLocale = 1172,
  OssImageParentChildren = 1173,
  OssImageParentId = 1174,
  OssImageSpaceId = 1175,
  OssImageSysRevision = 1176,
  OssImageSysType = 1177,
  OssImageTitle = 1178,
  OssImageUpdatedAt = 1179,
  OssInternalContent = 1180,
  OssInternalContentDigest = 1181,
  OssInternalDescription = 1182,
  OssInternalFieldOwners = 1183,
  OssInternalIgnoreType = 1184,
  OssInternalMediaType = 1185,
  OssInternalOwner = 1186,
  OssInternalType = 1187,
  OssName = 1188,
  OssNodeLocale = 1189,
  OssParentChildren = 1190,
  OssParentChildrenChildren = 1191,
  OssParentChildrenId = 1192,
  OssParentId = 1193,
  OssParentInternalContent = 1194,
  OssParentInternalContentDigest = 1195,
  OssParentInternalDescription = 1196,
  OssParentInternalFieldOwners = 1197,
  OssParentInternalIgnoreType = 1198,
  OssParentInternalMediaType = 1199,
  OssParentInternalOwner = 1200,
  OssParentInternalType = 1201,
  OssParentParentChildren = 1202,
  OssParentParentId = 1203,
  OssSpaceId = 1204,
  OssStartDate = 1205,
  OssSubName = 1206,
  OssSysRevision = 1207,
  OssSysType = 1208,
  OssTags = 1209,
  OssTagsBlogPost = 1210,
  OssTagsBlogPostChildren = 1211,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1212,
  OssTagsBlogPostContentfulId = 1213,
  OssTagsBlogPostCreated = 1214,
  OssTagsBlogPostCreatedAt = 1215,
  OssTagsBlogPostExcerpt = 1216,
  OssTagsBlogPostId = 1217,
  OssTagsBlogPostNodeLocale = 1218,
  OssTagsBlogPostSlug = 1219,
  OssTagsBlogPostSpaceId = 1220,
  OssTagsBlogPostTags = 1221,
  OssTagsBlogPostTitle = 1222,
  OssTagsBlogPostUpdated = 1223,
  OssTagsBlogPostUpdatedAt = 1224,
  OssTagsChildren = 1225,
  OssTagsChildrenChildren = 1226,
  OssTagsChildrenId = 1227,
  OssTagsContentfulId = 1228,
  OssTagsCreatedAt = 1229,
  OssTagsId = 1230,
  OssTagsInternalContent = 1231,
  OssTagsInternalContentDigest = 1232,
  OssTagsInternalDescription = 1233,
  OssTagsInternalFieldOwners = 1234,
  OssTagsInternalIgnoreType = 1235,
  OssTagsInternalMediaType = 1236,
  OssTagsInternalOwner = 1237,
  OssTagsInternalType = 1238,
  OssTagsLevel = 1239,
  OssTagsName = 1240,
  OssTagsNodeLocale = 1241,
  OssTagsOss = 1242,
  OssTagsOssChildren = 1243,
  OssTagsOssChildrenContentfulOssDetailTextNode = 1244,
  OssTagsOssContentfulId = 1245,
  OssTagsOssCreatedAt = 1246,
  OssTagsOssHref = 1247,
  OssTagsOssId = 1248,
  OssTagsOssName = 1249,
  OssTagsOssNodeLocale = 1250,
  OssTagsOssSpaceId = 1251,
  OssTagsOssStartDate = 1252,
  OssTagsOssSubName = 1253,
  OssTagsOssTags = 1254,
  OssTagsOssUpdatedAt = 1255,
  OssTagsParentChildren = 1256,
  OssTagsParentId = 1257,
  OssTagsProject = 1258,
  OssTagsProjectChildren = 1259,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 1260,
  OssTagsProjectContentfulId = 1261,
  OssTagsProjectCreatedAt = 1262,
  OssTagsProjectEndDate = 1263,
  OssTagsProjectId = 1264,
  OssTagsProjectName = 1265,
  OssTagsProjectNodeLocale = 1266,
  OssTagsProjectSpaceId = 1267,
  OssTagsProjectStartDate = 1268,
  OssTagsProjectSubName = 1269,
  OssTagsProjectTags = 1270,
  OssTagsProjectUpdatedAt = 1271,
  OssTagsSkillMap = 1272,
  OssTagsSkillMapChildren = 1273,
  OssTagsSkillMapContentfulId = 1274,
  OssTagsSkillMapCreatedAt = 1275,
  OssTagsSkillMapExpanded = 1276,
  OssTagsSkillMapId = 1277,
  OssTagsSkillMapName = 1278,
  OssTagsSkillMapNodeLocale = 1279,
  OssTagsSkillMapSkills = 1280,
  OssTagsSkillMapSortKey = 1281,
  OssTagsSkillMapSpaceId = 1282,
  OssTagsSkillMapUpdatedAt = 1283,
  OssTagsSpaceId = 1284,
  OssTagsSysRevision = 1285,
  OssTagsSysType = 1286,
  OssTagsUpdatedAt = 1287,
  OssUpdatedAt = 1288,
  ParentChildren = 1289,
  ParentChildrenChildren = 1290,
  ParentChildrenChildrenChildren = 1291,
  ParentChildrenChildrenId = 1292,
  ParentChildrenId = 1293,
  ParentChildrenInternalContent = 1294,
  ParentChildrenInternalContentDigest = 1295,
  ParentChildrenInternalDescription = 1296,
  ParentChildrenInternalFieldOwners = 1297,
  ParentChildrenInternalIgnoreType = 1298,
  ParentChildrenInternalMediaType = 1299,
  ParentChildrenInternalOwner = 1300,
  ParentChildrenInternalType = 1301,
  ParentChildrenParentChildren = 1302,
  ParentChildrenParentId = 1303,
  ParentId = 1304,
  ParentInternalContent = 1305,
  ParentInternalContentDigest = 1306,
  ParentInternalDescription = 1307,
  ParentInternalFieldOwners = 1308,
  ParentInternalIgnoreType = 1309,
  ParentInternalMediaType = 1310,
  ParentInternalOwner = 1311,
  ParentInternalType = 1312,
  ParentParentChildren = 1313,
  ParentParentChildrenChildren = 1314,
  ParentParentChildrenId = 1315,
  ParentParentId = 1316,
  ParentParentInternalContent = 1317,
  ParentParentInternalContentDigest = 1318,
  ParentParentInternalDescription = 1319,
  ParentParentInternalFieldOwners = 1320,
  ParentParentInternalIgnoreType = 1321,
  ParentParentInternalMediaType = 1322,
  ParentParentInternalOwner = 1323,
  ParentParentInternalType = 1324,
  ParentParentParentChildren = 1325,
  ParentParentParentId = 1326,
  Project = 1327,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 1328,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 1329,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 1330,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 1331,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 1332,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 1333,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkId = 1334,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 1335,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 1336,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 1337,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 1338,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 1339,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 1340,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1341,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 1342,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 1343,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 1344,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 1345,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 1346,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 1347,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 1348,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 1349,
  ProjectChildContentfulProjectDetailTextNodeChildren = 1350,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1351,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 1352,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 1353,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 1354,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 1355,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 1356,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 1357,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 1358,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 1359,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 1360,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 1361,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1362,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 1363,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 1364,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1365,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1366,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 1367,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 1368,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 1369,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1370,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 1371,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 1372,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1373,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1374,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 1375,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 1376,
  ProjectChildContentfulProjectDetailTextNodeDetail = 1377,
  ProjectChildContentfulProjectDetailTextNodeId = 1378,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 1379,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 1380,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 1381,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 1382,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 1383,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 1384,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 1385,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 1386,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 1387,
  ProjectChildContentfulProjectDetailTextNodeParentId = 1388,
  ProjectChildContentfulProjectDetailTextNodeSysType = 1389,
  ProjectChildren = 1390,
  ProjectChildrenContentfulProjectDetailTextNode = 1391,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 1392,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 1393,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 1394,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 1395,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 1396,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 1397,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkId = 1398,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 1399,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 1400,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 1401,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 1402,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 1403,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 1404,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1405,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 1406,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 1407,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 1408,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 1409,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 1410,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 1411,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 1412,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 1413,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 1414,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1415,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 1416,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 1417,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 1418,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 1419,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 1420,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 1421,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 1422,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 1423,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 1424,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 1425,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1426,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 1427,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 1428,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1429,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1430,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 1431,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 1432,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 1433,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1434,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 1435,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 1436,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1437,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1438,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 1439,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 1440,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 1441,
  ProjectChildrenContentfulProjectDetailTextNodeId = 1442,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 1443,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 1444,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 1445,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 1446,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 1447,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 1448,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 1449,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 1450,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 1451,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 1452,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 1453,
  ProjectChildrenChildren = 1454,
  ProjectChildrenChildrenChildren = 1455,
  ProjectChildrenChildrenId = 1456,
  ProjectChildrenId = 1457,
  ProjectChildrenInternalContent = 1458,
  ProjectChildrenInternalContentDigest = 1459,
  ProjectChildrenInternalDescription = 1460,
  ProjectChildrenInternalFieldOwners = 1461,
  ProjectChildrenInternalIgnoreType = 1462,
  ProjectChildrenInternalMediaType = 1463,
  ProjectChildrenInternalOwner = 1464,
  ProjectChildrenInternalType = 1465,
  ProjectChildrenParentChildren = 1466,
  ProjectChildrenParentId = 1467,
  ProjectContentfulId = 1468,
  ProjectCreatedAt = 1469,
  ProjectDetailChildMarkdownRemarkChildren = 1470,
  ProjectDetailChildMarkdownRemarkExcerpt = 1471,
  ProjectDetailChildMarkdownRemarkExcerptAst = 1472,
  ProjectDetailChildMarkdownRemarkHeadings = 1473,
  ProjectDetailChildMarkdownRemarkHtml = 1474,
  ProjectDetailChildMarkdownRemarkHtmlAst = 1475,
  ProjectDetailChildMarkdownRemarkId = 1476,
  ProjectDetailChildMarkdownRemarkRawMarkdownBody = 1477,
  ProjectDetailChildMarkdownRemarkTableOfContents = 1478,
  ProjectDetailChildMarkdownRemarkTimeToRead = 1479,
  ProjectDetailChildMdxBody = 1480,
  ProjectDetailChildMdxChildren = 1481,
  ProjectDetailChildMdxExcerpt = 1482,
  ProjectDetailChildMdxFileAbsolutePath = 1483,
  ProjectDetailChildMdxHeadings = 1484,
  ProjectDetailChildMdxHtml = 1485,
  ProjectDetailChildMdxId = 1486,
  ProjectDetailChildMdxMdxAst = 1487,
  ProjectDetailChildMdxRawBody = 1488,
  ProjectDetailChildMdxSlug = 1489,
  ProjectDetailChildMdxTableOfContents = 1490,
  ProjectDetailChildMdxTimeToRead = 1491,
  ProjectDetailChildren = 1492,
  ProjectDetailChildrenMarkdownRemark = 1493,
  ProjectDetailChildrenMarkdownRemarkChildren = 1494,
  ProjectDetailChildrenMarkdownRemarkExcerpt = 1495,
  ProjectDetailChildrenMarkdownRemarkExcerptAst = 1496,
  ProjectDetailChildrenMarkdownRemarkHeadings = 1497,
  ProjectDetailChildrenMarkdownRemarkHtml = 1498,
  ProjectDetailChildrenMarkdownRemarkHtmlAst = 1499,
  ProjectDetailChildrenMarkdownRemarkId = 1500,
  ProjectDetailChildrenMarkdownRemarkRawMarkdownBody = 1501,
  ProjectDetailChildrenMarkdownRemarkTableOfContents = 1502,
  ProjectDetailChildrenMarkdownRemarkTimeToRead = 1503,
  ProjectDetailChildrenMdx = 1504,
  ProjectDetailChildrenMdxBody = 1505,
  ProjectDetailChildrenMdxChildren = 1506,
  ProjectDetailChildrenMdxExcerpt = 1507,
  ProjectDetailChildrenMdxFileAbsolutePath = 1508,
  ProjectDetailChildrenMdxHeadings = 1509,
  ProjectDetailChildrenMdxHtml = 1510,
  ProjectDetailChildrenMdxId = 1511,
  ProjectDetailChildrenMdxMdxAst = 1512,
  ProjectDetailChildrenMdxRawBody = 1513,
  ProjectDetailChildrenMdxSlug = 1514,
  ProjectDetailChildrenMdxTableOfContents = 1515,
  ProjectDetailChildrenMdxTimeToRead = 1516,
  ProjectDetailChildrenChildren = 1517,
  ProjectDetailChildrenId = 1518,
  ProjectDetailDetail = 1519,
  ProjectDetailId = 1520,
  ProjectDetailInternalContent = 1521,
  ProjectDetailInternalContentDigest = 1522,
  ProjectDetailInternalDescription = 1523,
  ProjectDetailInternalFieldOwners = 1524,
  ProjectDetailInternalIgnoreType = 1525,
  ProjectDetailInternalMediaType = 1526,
  ProjectDetailInternalOwner = 1527,
  ProjectDetailInternalType = 1528,
  ProjectDetailParentChildren = 1529,
  ProjectDetailParentId = 1530,
  ProjectDetailSysType = 1531,
  ProjectEndDate = 1532,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1533,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 1534,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 1535,
  ProjectIconChildContentfulIconSvgTextNodeId = 1536,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1537,
  ProjectIconChildren = 1538,
  ProjectIconChildrenContentfulIconSvgTextNode = 1539,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1540,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 1541,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1542,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1543,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1544,
  ProjectIconChildrenChildren = 1545,
  ProjectIconChildrenId = 1546,
  ProjectIconContact = 1547,
  ProjectIconContactChildren = 1548,
  ProjectIconContactContentfulId = 1549,
  ProjectIconContactCreatedAt = 1550,
  ProjectIconContactHref = 1551,
  ProjectIconContactId = 1552,
  ProjectIconContactName = 1553,
  ProjectIconContactNodeLocale = 1554,
  ProjectIconContactSortKey = 1555,
  ProjectIconContactSpaceId = 1556,
  ProjectIconContactSubName = 1557,
  ProjectIconContactUpdatedAt = 1558,
  ProjectIconContentfulId = 1559,
  ProjectIconCreatedAt = 1560,
  ProjectIconHistory = 1561,
  ProjectIconHistoryChildren = 1562,
  ProjectIconHistoryContentfulId = 1563,
  ProjectIconHistoryCreatedAt = 1564,
  ProjectIconHistoryDate = 1565,
  ProjectIconHistoryId = 1566,
  ProjectIconHistoryName = 1567,
  ProjectIconHistoryNodeLocale = 1568,
  ProjectIconHistorySpaceId = 1569,
  ProjectIconHistorySubName = 1570,
  ProjectIconHistoryUpdatedAt = 1571,
  ProjectIconId = 1572,
  ProjectIconInternalContent = 1573,
  ProjectIconInternalContentDigest = 1574,
  ProjectIconInternalDescription = 1575,
  ProjectIconInternalFieldOwners = 1576,
  ProjectIconInternalIgnoreType = 1577,
  ProjectIconInternalMediaType = 1578,
  ProjectIconInternalOwner = 1579,
  ProjectIconInternalType = 1580,
  ProjectIconName = 1581,
  ProjectIconNodeLocale = 1582,
  ProjectIconOss = 1583,
  ProjectIconOssChildren = 1584,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1585,
  ProjectIconOssContentfulId = 1586,
  ProjectIconOssCreatedAt = 1587,
  ProjectIconOssHref = 1588,
  ProjectIconOssId = 1589,
  ProjectIconOssName = 1590,
  ProjectIconOssNodeLocale = 1591,
  ProjectIconOssSpaceId = 1592,
  ProjectIconOssStartDate = 1593,
  ProjectIconOssSubName = 1594,
  ProjectIconOssTags = 1595,
  ProjectIconOssUpdatedAt = 1596,
  ProjectIconParentChildren = 1597,
  ProjectIconParentId = 1598,
  ProjectIconProject = 1599,
  ProjectIconProjectChildren = 1600,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1601,
  ProjectIconProjectContentfulId = 1602,
  ProjectIconProjectCreatedAt = 1603,
  ProjectIconProjectEndDate = 1604,
  ProjectIconProjectId = 1605,
  ProjectIconProjectName = 1606,
  ProjectIconProjectNodeLocale = 1607,
  ProjectIconProjectSpaceId = 1608,
  ProjectIconProjectStartDate = 1609,
  ProjectIconProjectSubName = 1610,
  ProjectIconProjectTags = 1611,
  ProjectIconProjectUpdatedAt = 1612,
  ProjectIconSpaceId = 1613,
  ProjectIconSvgChildren = 1614,
  ProjectIconSvgChildrenMarkdownRemark = 1615,
  ProjectIconSvgChildrenMdx = 1616,
  ProjectIconSvgId = 1617,
  ProjectIconSvgSvg = 1618,
  ProjectIconSysRevision = 1619,
  ProjectIconSysType = 1620,
  ProjectIconUpdatedAt = 1621,
  ProjectIconWhatICanDo = 1622,
  ProjectIconWhatICanDoChildren = 1623,
  ProjectIconWhatICanDoContentfulId = 1624,
  ProjectIconWhatICanDoCreatedAt = 1625,
  ProjectIconWhatICanDoId = 1626,
  ProjectIconWhatICanDoName = 1627,
  ProjectIconWhatICanDoNodeLocale = 1628,
  ProjectIconWhatICanDoSortKey = 1629,
  ProjectIconWhatICanDoSpaceId = 1630,
  ProjectIconWhatICanDoSubName = 1631,
  ProjectIconWhatICanDoUpdatedAt = 1632,
  ProjectId = 1633,
  ProjectInternalContent = 1634,
  ProjectInternalContentDigest = 1635,
  ProjectInternalDescription = 1636,
  ProjectInternalFieldOwners = 1637,
  ProjectInternalIgnoreType = 1638,
  ProjectInternalMediaType = 1639,
  ProjectInternalOwner = 1640,
  ProjectInternalType = 1641,
  ProjectName = 1642,
  ProjectNodeLocale = 1643,
  ProjectParentChildren = 1644,
  ProjectParentChildrenChildren = 1645,
  ProjectParentChildrenId = 1646,
  ProjectParentId = 1647,
  ProjectParentInternalContent = 1648,
  ProjectParentInternalContentDigest = 1649,
  ProjectParentInternalDescription = 1650,
  ProjectParentInternalFieldOwners = 1651,
  ProjectParentInternalIgnoreType = 1652,
  ProjectParentInternalMediaType = 1653,
  ProjectParentInternalOwner = 1654,
  ProjectParentInternalType = 1655,
  ProjectParentParentChildren = 1656,
  ProjectParentParentId = 1657,
  ProjectSpaceId = 1658,
  ProjectStartDate = 1659,
  ProjectSubName = 1660,
  ProjectSysRevision = 1661,
  ProjectSysType = 1662,
  ProjectTags = 1663,
  ProjectTagsBlogPost = 1664,
  ProjectTagsBlogPostChildren = 1665,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1666,
  ProjectTagsBlogPostContentfulId = 1667,
  ProjectTagsBlogPostCreated = 1668,
  ProjectTagsBlogPostCreatedAt = 1669,
  ProjectTagsBlogPostExcerpt = 1670,
  ProjectTagsBlogPostId = 1671,
  ProjectTagsBlogPostNodeLocale = 1672,
  ProjectTagsBlogPostSlug = 1673,
  ProjectTagsBlogPostSpaceId = 1674,
  ProjectTagsBlogPostTags = 1675,
  ProjectTagsBlogPostTitle = 1676,
  ProjectTagsBlogPostUpdated = 1677,
  ProjectTagsBlogPostUpdatedAt = 1678,
  ProjectTagsChildren = 1679,
  ProjectTagsChildrenChildren = 1680,
  ProjectTagsChildrenId = 1681,
  ProjectTagsContentfulId = 1682,
  ProjectTagsCreatedAt = 1683,
  ProjectTagsId = 1684,
  ProjectTagsInternalContent = 1685,
  ProjectTagsInternalContentDigest = 1686,
  ProjectTagsInternalDescription = 1687,
  ProjectTagsInternalFieldOwners = 1688,
  ProjectTagsInternalIgnoreType = 1689,
  ProjectTagsInternalMediaType = 1690,
  ProjectTagsInternalOwner = 1691,
  ProjectTagsInternalType = 1692,
  ProjectTagsLevel = 1693,
  ProjectTagsName = 1694,
  ProjectTagsNodeLocale = 1695,
  ProjectTagsOss = 1696,
  ProjectTagsOssChildren = 1697,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1698,
  ProjectTagsOssContentfulId = 1699,
  ProjectTagsOssCreatedAt = 1700,
  ProjectTagsOssHref = 1701,
  ProjectTagsOssId = 1702,
  ProjectTagsOssName = 1703,
  ProjectTagsOssNodeLocale = 1704,
  ProjectTagsOssSpaceId = 1705,
  ProjectTagsOssStartDate = 1706,
  ProjectTagsOssSubName = 1707,
  ProjectTagsOssTags = 1708,
  ProjectTagsOssUpdatedAt = 1709,
  ProjectTagsParentChildren = 1710,
  ProjectTagsParentId = 1711,
  ProjectTagsProject = 1712,
  ProjectTagsProjectChildren = 1713,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1714,
  ProjectTagsProjectContentfulId = 1715,
  ProjectTagsProjectCreatedAt = 1716,
  ProjectTagsProjectEndDate = 1717,
  ProjectTagsProjectId = 1718,
  ProjectTagsProjectName = 1719,
  ProjectTagsProjectNodeLocale = 1720,
  ProjectTagsProjectSpaceId = 1721,
  ProjectTagsProjectStartDate = 1722,
  ProjectTagsProjectSubName = 1723,
  ProjectTagsProjectTags = 1724,
  ProjectTagsProjectUpdatedAt = 1725,
  ProjectTagsSkillMap = 1726,
  ProjectTagsSkillMapChildren = 1727,
  ProjectTagsSkillMapContentfulId = 1728,
  ProjectTagsSkillMapCreatedAt = 1729,
  ProjectTagsSkillMapExpanded = 1730,
  ProjectTagsSkillMapId = 1731,
  ProjectTagsSkillMapName = 1732,
  ProjectTagsSkillMapNodeLocale = 1733,
  ProjectTagsSkillMapSkills = 1734,
  ProjectTagsSkillMapSortKey = 1735,
  ProjectTagsSkillMapSpaceId = 1736,
  ProjectTagsSkillMapUpdatedAt = 1737,
  ProjectTagsSpaceId = 1738,
  ProjectTagsSysRevision = 1739,
  ProjectTagsSysType = 1740,
  ProjectTagsUpdatedAt = 1741,
  ProjectUpdatedAt = 1742,
  SpaceId = 1743,
  SvgChildMarkdownRemarkChildren = 1744,
  SvgChildMarkdownRemarkChildrenChildren = 1745,
  SvgChildMarkdownRemarkChildrenId = 1746,
  SvgChildMarkdownRemarkExcerpt = 1747,
  SvgChildMarkdownRemarkExcerptAst = 1748,
  SvgChildMarkdownRemarkFrontmatterTitle = 1749,
  SvgChildMarkdownRemarkHeadings = 1750,
  SvgChildMarkdownRemarkHeadingsDepth = 1751,
  SvgChildMarkdownRemarkHeadingsId = 1752,
  SvgChildMarkdownRemarkHeadingsValue = 1753,
  SvgChildMarkdownRemarkHtml = 1754,
  SvgChildMarkdownRemarkHtmlAst = 1755,
  SvgChildMarkdownRemarkId = 1756,
  SvgChildMarkdownRemarkInternalContent = 1757,
  SvgChildMarkdownRemarkInternalContentDigest = 1758,
  SvgChildMarkdownRemarkInternalDescription = 1759,
  SvgChildMarkdownRemarkInternalFieldOwners = 1760,
  SvgChildMarkdownRemarkInternalIgnoreType = 1761,
  SvgChildMarkdownRemarkInternalMediaType = 1762,
  SvgChildMarkdownRemarkInternalOwner = 1763,
  SvgChildMarkdownRemarkInternalType = 1764,
  SvgChildMarkdownRemarkParentChildren = 1765,
  SvgChildMarkdownRemarkParentId = 1766,
  SvgChildMarkdownRemarkRawMarkdownBody = 1767,
  SvgChildMarkdownRemarkTableOfContents = 1768,
  SvgChildMarkdownRemarkTimeToRead = 1769,
  SvgChildMarkdownRemarkWordCountParagraphs = 1770,
  SvgChildMarkdownRemarkWordCountSentences = 1771,
  SvgChildMarkdownRemarkWordCountWords = 1772,
  SvgChildMdxBody = 1773,
  SvgChildMdxChildren = 1774,
  SvgChildMdxChildrenChildren = 1775,
  SvgChildMdxChildrenId = 1776,
  SvgChildMdxExcerpt = 1777,
  SvgChildMdxFileAbsolutePath = 1778,
  SvgChildMdxFrontmatterTitle = 1779,
  SvgChildMdxHeadings = 1780,
  SvgChildMdxHeadingsDepth = 1781,
  SvgChildMdxHeadingsValue = 1782,
  SvgChildMdxHtml = 1783,
  SvgChildMdxId = 1784,
  SvgChildMdxInternalContent = 1785,
  SvgChildMdxInternalContentDigest = 1786,
  SvgChildMdxInternalDescription = 1787,
  SvgChildMdxInternalFieldOwners = 1788,
  SvgChildMdxInternalIgnoreType = 1789,
  SvgChildMdxInternalMediaType = 1790,
  SvgChildMdxInternalOwner = 1791,
  SvgChildMdxInternalType = 1792,
  SvgChildMdxMdxAst = 1793,
  SvgChildMdxParentChildren = 1794,
  SvgChildMdxParentId = 1795,
  SvgChildMdxRawBody = 1796,
  SvgChildMdxSlug = 1797,
  SvgChildMdxTableOfContents = 1798,
  SvgChildMdxTimeToRead = 1799,
  SvgChildMdxWordCountParagraphs = 1800,
  SvgChildMdxWordCountSentences = 1801,
  SvgChildMdxWordCountWords = 1802,
  SvgChildren = 1803,
  SvgChildrenMarkdownRemark = 1804,
  SvgChildrenMarkdownRemarkChildren = 1805,
  SvgChildrenMarkdownRemarkChildrenChildren = 1806,
  SvgChildrenMarkdownRemarkChildrenId = 1807,
  SvgChildrenMarkdownRemarkExcerpt = 1808,
  SvgChildrenMarkdownRemarkExcerptAst = 1809,
  SvgChildrenMarkdownRemarkFrontmatterTitle = 1810,
  SvgChildrenMarkdownRemarkHeadings = 1811,
  SvgChildrenMarkdownRemarkHeadingsDepth = 1812,
  SvgChildrenMarkdownRemarkHeadingsId = 1813,
  SvgChildrenMarkdownRemarkHeadingsValue = 1814,
  SvgChildrenMarkdownRemarkHtml = 1815,
  SvgChildrenMarkdownRemarkHtmlAst = 1816,
  SvgChildrenMarkdownRemarkId = 1817,
  SvgChildrenMarkdownRemarkInternalContent = 1818,
  SvgChildrenMarkdownRemarkInternalContentDigest = 1819,
  SvgChildrenMarkdownRemarkInternalDescription = 1820,
  SvgChildrenMarkdownRemarkInternalFieldOwners = 1821,
  SvgChildrenMarkdownRemarkInternalIgnoreType = 1822,
  SvgChildrenMarkdownRemarkInternalMediaType = 1823,
  SvgChildrenMarkdownRemarkInternalOwner = 1824,
  SvgChildrenMarkdownRemarkInternalType = 1825,
  SvgChildrenMarkdownRemarkParentChildren = 1826,
  SvgChildrenMarkdownRemarkParentId = 1827,
  SvgChildrenMarkdownRemarkRawMarkdownBody = 1828,
  SvgChildrenMarkdownRemarkTableOfContents = 1829,
  SvgChildrenMarkdownRemarkTimeToRead = 1830,
  SvgChildrenMarkdownRemarkWordCountParagraphs = 1831,
  SvgChildrenMarkdownRemarkWordCountSentences = 1832,
  SvgChildrenMarkdownRemarkWordCountWords = 1833,
  SvgChildrenMdx = 1834,
  SvgChildrenMdxBody = 1835,
  SvgChildrenMdxChildren = 1836,
  SvgChildrenMdxChildrenChildren = 1837,
  SvgChildrenMdxChildrenId = 1838,
  SvgChildrenMdxExcerpt = 1839,
  SvgChildrenMdxFileAbsolutePath = 1840,
  SvgChildrenMdxFrontmatterTitle = 1841,
  SvgChildrenMdxHeadings = 1842,
  SvgChildrenMdxHeadingsDepth = 1843,
  SvgChildrenMdxHeadingsValue = 1844,
  SvgChildrenMdxHtml = 1845,
  SvgChildrenMdxId = 1846,
  SvgChildrenMdxInternalContent = 1847,
  SvgChildrenMdxInternalContentDigest = 1848,
  SvgChildrenMdxInternalDescription = 1849,
  SvgChildrenMdxInternalFieldOwners = 1850,
  SvgChildrenMdxInternalIgnoreType = 1851,
  SvgChildrenMdxInternalMediaType = 1852,
  SvgChildrenMdxInternalOwner = 1853,
  SvgChildrenMdxInternalType = 1854,
  SvgChildrenMdxMdxAst = 1855,
  SvgChildrenMdxParentChildren = 1856,
  SvgChildrenMdxParentId = 1857,
  SvgChildrenMdxRawBody = 1858,
  SvgChildrenMdxSlug = 1859,
  SvgChildrenMdxTableOfContents = 1860,
  SvgChildrenMdxTimeToRead = 1861,
  SvgChildrenMdxWordCountParagraphs = 1862,
  SvgChildrenMdxWordCountSentences = 1863,
  SvgChildrenMdxWordCountWords = 1864,
  SvgChildrenChildren = 1865,
  SvgChildrenChildrenChildren = 1866,
  SvgChildrenChildrenId = 1867,
  SvgChildrenId = 1868,
  SvgChildrenInternalContent = 1869,
  SvgChildrenInternalContentDigest = 1870,
  SvgChildrenInternalDescription = 1871,
  SvgChildrenInternalFieldOwners = 1872,
  SvgChildrenInternalIgnoreType = 1873,
  SvgChildrenInternalMediaType = 1874,
  SvgChildrenInternalOwner = 1875,
  SvgChildrenInternalType = 1876,
  SvgChildrenParentChildren = 1877,
  SvgChildrenParentId = 1878,
  SvgId = 1879,
  SvgInternalContent = 1880,
  SvgInternalContentDigest = 1881,
  SvgInternalDescription = 1882,
  SvgInternalFieldOwners = 1883,
  SvgInternalIgnoreType = 1884,
  SvgInternalMediaType = 1885,
  SvgInternalOwner = 1886,
  SvgInternalType = 1887,
  SvgParentChildren = 1888,
  SvgParentChildrenChildren = 1889,
  SvgParentChildrenId = 1890,
  SvgParentId = 1891,
  SvgParentInternalContent = 1892,
  SvgParentInternalContentDigest = 1893,
  SvgParentInternalDescription = 1894,
  SvgParentInternalFieldOwners = 1895,
  SvgParentInternalIgnoreType = 1896,
  SvgParentInternalMediaType = 1897,
  SvgParentInternalOwner = 1898,
  SvgParentInternalType = 1899,
  SvgParentParentChildren = 1900,
  SvgParentParentId = 1901,
  SvgSvg = 1902,
  SvgSysType = 1903,
  SysContentTypeSysId = 1904,
  SysContentTypeSysLinkType = 1905,
  SysContentTypeSysType = 1906,
  SysRevision = 1907,
  SysType = 1908,
  UpdatedAt = 1909,
  WhatICanDo = 1910,
  WhatICanDoChildren = 1911,
  WhatICanDoChildrenChildren = 1912,
  WhatICanDoChildrenChildrenChildren = 1913,
  WhatICanDoChildrenChildrenId = 1914,
  WhatICanDoChildrenId = 1915,
  WhatICanDoChildrenInternalContent = 1916,
  WhatICanDoChildrenInternalContentDigest = 1917,
  WhatICanDoChildrenInternalDescription = 1918,
  WhatICanDoChildrenInternalFieldOwners = 1919,
  WhatICanDoChildrenInternalIgnoreType = 1920,
  WhatICanDoChildrenInternalMediaType = 1921,
  WhatICanDoChildrenInternalOwner = 1922,
  WhatICanDoChildrenInternalType = 1923,
  WhatICanDoChildrenParentChildren = 1924,
  WhatICanDoChildrenParentId = 1925,
  WhatICanDoContentfulId = 1926,
  WhatICanDoCreatedAt = 1927,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildren = 1928,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 1929,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildrenMdx = 1930,
  WhatICanDoIconChildContentfulIconSvgTextNodeId = 1931,
  WhatICanDoIconChildContentfulIconSvgTextNodeSvg = 1932,
  WhatICanDoIconChildren = 1933,
  WhatICanDoIconChildrenContentfulIconSvgTextNode = 1934,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildren = 1935,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 1936,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1937,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeId = 1938,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeSvg = 1939,
  WhatICanDoIconChildrenChildren = 1940,
  WhatICanDoIconChildrenId = 1941,
  WhatICanDoIconContact = 1942,
  WhatICanDoIconContactChildren = 1943,
  WhatICanDoIconContactContentfulId = 1944,
  WhatICanDoIconContactCreatedAt = 1945,
  WhatICanDoIconContactHref = 1946,
  WhatICanDoIconContactId = 1947,
  WhatICanDoIconContactName = 1948,
  WhatICanDoIconContactNodeLocale = 1949,
  WhatICanDoIconContactSortKey = 1950,
  WhatICanDoIconContactSpaceId = 1951,
  WhatICanDoIconContactSubName = 1952,
  WhatICanDoIconContactUpdatedAt = 1953,
  WhatICanDoIconContentfulId = 1954,
  WhatICanDoIconCreatedAt = 1955,
  WhatICanDoIconHistory = 1956,
  WhatICanDoIconHistoryChildren = 1957,
  WhatICanDoIconHistoryContentfulId = 1958,
  WhatICanDoIconHistoryCreatedAt = 1959,
  WhatICanDoIconHistoryDate = 1960,
  WhatICanDoIconHistoryId = 1961,
  WhatICanDoIconHistoryName = 1962,
  WhatICanDoIconHistoryNodeLocale = 1963,
  WhatICanDoIconHistorySpaceId = 1964,
  WhatICanDoIconHistorySubName = 1965,
  WhatICanDoIconHistoryUpdatedAt = 1966,
  WhatICanDoIconId = 1967,
  WhatICanDoIconInternalContent = 1968,
  WhatICanDoIconInternalContentDigest = 1969,
  WhatICanDoIconInternalDescription = 1970,
  WhatICanDoIconInternalFieldOwners = 1971,
  WhatICanDoIconInternalIgnoreType = 1972,
  WhatICanDoIconInternalMediaType = 1973,
  WhatICanDoIconInternalOwner = 1974,
  WhatICanDoIconInternalType = 1975,
  WhatICanDoIconName = 1976,
  WhatICanDoIconNodeLocale = 1977,
  WhatICanDoIconOss = 1978,
  WhatICanDoIconOssChildren = 1979,
  WhatICanDoIconOssChildrenContentfulOssDetailTextNode = 1980,
  WhatICanDoIconOssContentfulId = 1981,
  WhatICanDoIconOssCreatedAt = 1982,
  WhatICanDoIconOssHref = 1983,
  WhatICanDoIconOssId = 1984,
  WhatICanDoIconOssName = 1985,
  WhatICanDoIconOssNodeLocale = 1986,
  WhatICanDoIconOssSpaceId = 1987,
  WhatICanDoIconOssStartDate = 1988,
  WhatICanDoIconOssSubName = 1989,
  WhatICanDoIconOssTags = 1990,
  WhatICanDoIconOssUpdatedAt = 1991,
  WhatICanDoIconParentChildren = 1992,
  WhatICanDoIconParentId = 1993,
  WhatICanDoIconProject = 1994,
  WhatICanDoIconProjectChildren = 1995,
  WhatICanDoIconProjectChildrenContentfulProjectDetailTextNode = 1996,
  WhatICanDoIconProjectContentfulId = 1997,
  WhatICanDoIconProjectCreatedAt = 1998,
  WhatICanDoIconProjectEndDate = 1999,
  WhatICanDoIconProjectId = 2000,
  WhatICanDoIconProjectName = 2001,
  WhatICanDoIconProjectNodeLocale = 2002,
  WhatICanDoIconProjectSpaceId = 2003,
  WhatICanDoIconProjectStartDate = 2004,
  WhatICanDoIconProjectSubName = 2005,
  WhatICanDoIconProjectTags = 2006,
  WhatICanDoIconProjectUpdatedAt = 2007,
  WhatICanDoIconSpaceId = 2008,
  WhatICanDoIconSvgChildren = 2009,
  WhatICanDoIconSvgChildrenMarkdownRemark = 2010,
  WhatICanDoIconSvgChildrenMdx = 2011,
  WhatICanDoIconSvgId = 2012,
  WhatICanDoIconSvgSvg = 2013,
  WhatICanDoIconSysRevision = 2014,
  WhatICanDoIconSysType = 2015,
  WhatICanDoIconUpdatedAt = 2016,
  WhatICanDoIconWhatICanDo = 2017,
  WhatICanDoIconWhatICanDoChildren = 2018,
  WhatICanDoIconWhatICanDoContentfulId = 2019,
  WhatICanDoIconWhatICanDoCreatedAt = 2020,
  WhatICanDoIconWhatICanDoId = 2021,
  WhatICanDoIconWhatICanDoName = 2022,
  WhatICanDoIconWhatICanDoNodeLocale = 2023,
  WhatICanDoIconWhatICanDoSortKey = 2024,
  WhatICanDoIconWhatICanDoSpaceId = 2025,
  WhatICanDoIconWhatICanDoSubName = 2026,
  WhatICanDoIconWhatICanDoUpdatedAt = 2027,
  WhatICanDoId = 2028,
  WhatICanDoInternalContent = 2029,
  WhatICanDoInternalContentDigest = 2030,
  WhatICanDoInternalDescription = 2031,
  WhatICanDoInternalFieldOwners = 2032,
  WhatICanDoInternalIgnoreType = 2033,
  WhatICanDoInternalMediaType = 2034,
  WhatICanDoInternalOwner = 2035,
  WhatICanDoInternalType = 2036,
  WhatICanDoName = 2037,
  WhatICanDoNodeLocale = 2038,
  WhatICanDoParentChildren = 2039,
  WhatICanDoParentChildrenChildren = 2040,
  WhatICanDoParentChildrenId = 2041,
  WhatICanDoParentId = 2042,
  WhatICanDoParentInternalContent = 2043,
  WhatICanDoParentInternalContentDigest = 2044,
  WhatICanDoParentInternalDescription = 2045,
  WhatICanDoParentInternalFieldOwners = 2046,
  WhatICanDoParentInternalIgnoreType = 2047,
  WhatICanDoParentInternalMediaType = 2048,
  WhatICanDoParentInternalOwner = 2049,
  WhatICanDoParentInternalType = 2050,
  WhatICanDoParentParentChildren = 2051,
  WhatICanDoParentParentId = 2052,
  WhatICanDoSortKey = 2053,
  WhatICanDoSpaceId = 2054,
  WhatICanDoSubName = 2055,
  WhatICanDoSysRevision = 2056,
  WhatICanDoSysType = 2057,
  WhatICanDoUpdatedAt = 2058
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
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 0,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkChildrenChildren = 1,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkChildrenId = 2,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 3,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 4,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkFrontmatterTitle = 5,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 6,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsDepth = 7,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsId = 8,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsValue = 9,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 10,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 11,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkId = 12,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalContent = 13,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalContentDigest = 14,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalDescription = 15,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalFieldOwners = 16,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalIgnoreType = 17,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalMediaType = 18,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalOwner = 19,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkInternalType = 20,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkParentChildren = 21,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkParentId = 22,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 23,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 24,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 25,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkWordCountParagraphs = 26,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkWordCountSentences = 27,
  ChildContentfulOssDetailTextNodeChildMarkdownRemarkWordCountWords = 28,
  ChildContentfulOssDetailTextNodeChildMdxBody = 29,
  ChildContentfulOssDetailTextNodeChildMdxChildren = 30,
  ChildContentfulOssDetailTextNodeChildMdxChildrenChildren = 31,
  ChildContentfulOssDetailTextNodeChildMdxChildrenId = 32,
  ChildContentfulOssDetailTextNodeChildMdxExcerpt = 33,
  ChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 34,
  ChildContentfulOssDetailTextNodeChildMdxFrontmatterTitle = 35,
  ChildContentfulOssDetailTextNodeChildMdxHeadings = 36,
  ChildContentfulOssDetailTextNodeChildMdxHeadingsDepth = 37,
  ChildContentfulOssDetailTextNodeChildMdxHeadingsValue = 38,
  ChildContentfulOssDetailTextNodeChildMdxHtml = 39,
  ChildContentfulOssDetailTextNodeChildMdxId = 40,
  ChildContentfulOssDetailTextNodeChildMdxInternalContent = 41,
  ChildContentfulOssDetailTextNodeChildMdxInternalContentDigest = 42,
  ChildContentfulOssDetailTextNodeChildMdxInternalDescription = 43,
  ChildContentfulOssDetailTextNodeChildMdxInternalFieldOwners = 44,
  ChildContentfulOssDetailTextNodeChildMdxInternalIgnoreType = 45,
  ChildContentfulOssDetailTextNodeChildMdxInternalMediaType = 46,
  ChildContentfulOssDetailTextNodeChildMdxInternalOwner = 47,
  ChildContentfulOssDetailTextNodeChildMdxInternalType = 48,
  ChildContentfulOssDetailTextNodeChildMdxMdxAst = 49,
  ChildContentfulOssDetailTextNodeChildMdxParentChildren = 50,
  ChildContentfulOssDetailTextNodeChildMdxParentId = 51,
  ChildContentfulOssDetailTextNodeChildMdxRawBody = 52,
  ChildContentfulOssDetailTextNodeChildMdxSlug = 53,
  ChildContentfulOssDetailTextNodeChildMdxTableOfContents = 54,
  ChildContentfulOssDetailTextNodeChildMdxTimeToRead = 55,
  ChildContentfulOssDetailTextNodeChildMdxWordCountParagraphs = 56,
  ChildContentfulOssDetailTextNodeChildMdxWordCountSentences = 57,
  ChildContentfulOssDetailTextNodeChildMdxWordCountWords = 58,
  ChildContentfulOssDetailTextNodeChildren = 59,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 60,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 61,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 62,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenId = 63,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 64,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 65,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 66,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 67,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 68,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsId = 69,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 70,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 71,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 72,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 73,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContent = 74,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 75,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalDescription = 76,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 77,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 78,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 79,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalOwner = 80,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalType = 81,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkParentChildren = 82,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkParentId = 83,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 84,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 85,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 86,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 87,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 88,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountWords = 89,
  ChildContentfulOssDetailTextNodeChildrenMdx = 90,
  ChildContentfulOssDetailTextNodeChildrenMdxBody = 91,
  ChildContentfulOssDetailTextNodeChildrenMdxChildren = 92,
  ChildContentfulOssDetailTextNodeChildrenMdxChildrenChildren = 93,
  ChildContentfulOssDetailTextNodeChildrenMdxChildrenId = 94,
  ChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 95,
  ChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 96,
  ChildContentfulOssDetailTextNodeChildrenMdxFrontmatterTitle = 97,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadings = 98,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadingsDepth = 99,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadingsValue = 100,
  ChildContentfulOssDetailTextNodeChildrenMdxHtml = 101,
  ChildContentfulOssDetailTextNodeChildrenMdxId = 102,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalContent = 103,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalContentDigest = 104,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalDescription = 105,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalFieldOwners = 106,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalIgnoreType = 107,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalMediaType = 108,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalOwner = 109,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalType = 110,
  ChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 111,
  ChildContentfulOssDetailTextNodeChildrenMdxParentChildren = 112,
  ChildContentfulOssDetailTextNodeChildrenMdxParentId = 113,
  ChildContentfulOssDetailTextNodeChildrenMdxRawBody = 114,
  ChildContentfulOssDetailTextNodeChildrenMdxSlug = 115,
  ChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 116,
  ChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 117,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountParagraphs = 118,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountSentences = 119,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountWords = 120,
  ChildContentfulOssDetailTextNodeChildrenChildren = 121,
  ChildContentfulOssDetailTextNodeChildrenChildrenChildren = 122,
  ChildContentfulOssDetailTextNodeChildrenChildrenId = 123,
  ChildContentfulOssDetailTextNodeChildrenId = 124,
  ChildContentfulOssDetailTextNodeChildrenInternalContent = 125,
  ChildContentfulOssDetailTextNodeChildrenInternalContentDigest = 126,
  ChildContentfulOssDetailTextNodeChildrenInternalDescription = 127,
  ChildContentfulOssDetailTextNodeChildrenInternalFieldOwners = 128,
  ChildContentfulOssDetailTextNodeChildrenInternalIgnoreType = 129,
  ChildContentfulOssDetailTextNodeChildrenInternalMediaType = 130,
  ChildContentfulOssDetailTextNodeChildrenInternalOwner = 131,
  ChildContentfulOssDetailTextNodeChildrenInternalType = 132,
  ChildContentfulOssDetailTextNodeChildrenParentChildren = 133,
  ChildContentfulOssDetailTextNodeChildrenParentId = 134,
  ChildContentfulOssDetailTextNodeDetail = 135,
  ChildContentfulOssDetailTextNodeId = 136,
  ChildContentfulOssDetailTextNodeInternalContent = 137,
  ChildContentfulOssDetailTextNodeInternalContentDigest = 138,
  ChildContentfulOssDetailTextNodeInternalDescription = 139,
  ChildContentfulOssDetailTextNodeInternalFieldOwners = 140,
  ChildContentfulOssDetailTextNodeInternalIgnoreType = 141,
  ChildContentfulOssDetailTextNodeInternalMediaType = 142,
  ChildContentfulOssDetailTextNodeInternalOwner = 143,
  ChildContentfulOssDetailTextNodeInternalType = 144,
  ChildContentfulOssDetailTextNodeParentChildren = 145,
  ChildContentfulOssDetailTextNodeParentChildrenChildren = 146,
  ChildContentfulOssDetailTextNodeParentChildrenId = 147,
  ChildContentfulOssDetailTextNodeParentId = 148,
  ChildContentfulOssDetailTextNodeParentInternalContent = 149,
  ChildContentfulOssDetailTextNodeParentInternalContentDigest = 150,
  ChildContentfulOssDetailTextNodeParentInternalDescription = 151,
  ChildContentfulOssDetailTextNodeParentInternalFieldOwners = 152,
  ChildContentfulOssDetailTextNodeParentInternalIgnoreType = 153,
  ChildContentfulOssDetailTextNodeParentInternalMediaType = 154,
  ChildContentfulOssDetailTextNodeParentInternalOwner = 155,
  ChildContentfulOssDetailTextNodeParentInternalType = 156,
  ChildContentfulOssDetailTextNodeParentParentChildren = 157,
  ChildContentfulOssDetailTextNodeParentParentId = 158,
  ChildContentfulOssDetailTextNodeSysType = 159,
  Children = 160,
  ChildrenContentfulOssDetailTextNode = 161,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 162,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildrenChildren = 163,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildrenId = 164,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 165,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 166,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkFrontmatterTitle = 167,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 168,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsDepth = 169,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsId = 170,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsValue = 171,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 172,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 173,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkId = 174,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalContent = 175,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalContentDigest = 176,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalDescription = 177,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalFieldOwners = 178,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalIgnoreType = 179,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalMediaType = 180,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalOwner = 181,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalType = 182,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkParentChildren = 183,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkParentId = 184,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 185,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 186,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 187,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkWordCountParagraphs = 188,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkWordCountSentences = 189,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkWordCountWords = 190,
  ChildrenContentfulOssDetailTextNodeChildMdxBody = 191,
  ChildrenContentfulOssDetailTextNodeChildMdxChildren = 192,
  ChildrenContentfulOssDetailTextNodeChildMdxChildrenChildren = 193,
  ChildrenContentfulOssDetailTextNodeChildMdxChildrenId = 194,
  ChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 195,
  ChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 196,
  ChildrenContentfulOssDetailTextNodeChildMdxFrontmatterTitle = 197,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadings = 198,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadingsDepth = 199,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadingsValue = 200,
  ChildrenContentfulOssDetailTextNodeChildMdxHtml = 201,
  ChildrenContentfulOssDetailTextNodeChildMdxId = 202,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalContent = 203,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalContentDigest = 204,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalDescription = 205,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalFieldOwners = 206,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalIgnoreType = 207,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalMediaType = 208,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalOwner = 209,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalType = 210,
  ChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 211,
  ChildrenContentfulOssDetailTextNodeChildMdxParentChildren = 212,
  ChildrenContentfulOssDetailTextNodeChildMdxParentId = 213,
  ChildrenContentfulOssDetailTextNodeChildMdxRawBody = 214,
  ChildrenContentfulOssDetailTextNodeChildMdxSlug = 215,
  ChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 216,
  ChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 217,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountParagraphs = 218,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountSentences = 219,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountWords = 220,
  ChildrenContentfulOssDetailTextNodeChildren = 221,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 222,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 223,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 224,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenId = 225,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 226,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 227,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 228,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 229,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 230,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsId = 231,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 232,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 233,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 234,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 235,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContent = 236,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 237,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalDescription = 238,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 239,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 240,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 241,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalOwner = 242,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalType = 243,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkParentChildren = 244,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkParentId = 245,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 246,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 247,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 248,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 249,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 250,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountWords = 251,
  ChildrenContentfulOssDetailTextNodeChildrenMdx = 252,
  ChildrenContentfulOssDetailTextNodeChildrenMdxBody = 253,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 254,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildrenChildren = 255,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildrenId = 256,
  ChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 257,
  ChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 258,
  ChildrenContentfulOssDetailTextNodeChildrenMdxFrontmatterTitle = 259,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 260,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadingsDepth = 261,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadingsValue = 262,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 263,
  ChildrenContentfulOssDetailTextNodeChildrenMdxId = 264,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalContent = 265,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalContentDigest = 266,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalDescription = 267,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalFieldOwners = 268,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalIgnoreType = 269,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalMediaType = 270,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalOwner = 271,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalType = 272,
  ChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 273,
  ChildrenContentfulOssDetailTextNodeChildrenMdxParentChildren = 274,
  ChildrenContentfulOssDetailTextNodeChildrenMdxParentId = 275,
  ChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 276,
  ChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 277,
  ChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 278,
  ChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 279,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountParagraphs = 280,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountSentences = 281,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountWords = 282,
  ChildrenContentfulOssDetailTextNodeChildrenChildren = 283,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenChildren = 284,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenId = 285,
  ChildrenContentfulOssDetailTextNodeChildrenId = 286,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContent = 287,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContentDigest = 288,
  ChildrenContentfulOssDetailTextNodeChildrenInternalDescription = 289,
  ChildrenContentfulOssDetailTextNodeChildrenInternalFieldOwners = 290,
  ChildrenContentfulOssDetailTextNodeChildrenInternalIgnoreType = 291,
  ChildrenContentfulOssDetailTextNodeChildrenInternalMediaType = 292,
  ChildrenContentfulOssDetailTextNodeChildrenInternalOwner = 293,
  ChildrenContentfulOssDetailTextNodeChildrenInternalType = 294,
  ChildrenContentfulOssDetailTextNodeChildrenParentChildren = 295,
  ChildrenContentfulOssDetailTextNodeChildrenParentId = 296,
  ChildrenContentfulOssDetailTextNodeDetail = 297,
  ChildrenContentfulOssDetailTextNodeId = 298,
  ChildrenContentfulOssDetailTextNodeInternalContent = 299,
  ChildrenContentfulOssDetailTextNodeInternalContentDigest = 300,
  ChildrenContentfulOssDetailTextNodeInternalDescription = 301,
  ChildrenContentfulOssDetailTextNodeInternalFieldOwners = 302,
  ChildrenContentfulOssDetailTextNodeInternalIgnoreType = 303,
  ChildrenContentfulOssDetailTextNodeInternalMediaType = 304,
  ChildrenContentfulOssDetailTextNodeInternalOwner = 305,
  ChildrenContentfulOssDetailTextNodeInternalType = 306,
  ChildrenContentfulOssDetailTextNodeParentChildren = 307,
  ChildrenContentfulOssDetailTextNodeParentChildrenChildren = 308,
  ChildrenContentfulOssDetailTextNodeParentChildrenId = 309,
  ChildrenContentfulOssDetailTextNodeParentId = 310,
  ChildrenContentfulOssDetailTextNodeParentInternalContent = 311,
  ChildrenContentfulOssDetailTextNodeParentInternalContentDigest = 312,
  ChildrenContentfulOssDetailTextNodeParentInternalDescription = 313,
  ChildrenContentfulOssDetailTextNodeParentInternalFieldOwners = 314,
  ChildrenContentfulOssDetailTextNodeParentInternalIgnoreType = 315,
  ChildrenContentfulOssDetailTextNodeParentInternalMediaType = 316,
  ChildrenContentfulOssDetailTextNodeParentInternalOwner = 317,
  ChildrenContentfulOssDetailTextNodeParentInternalType = 318,
  ChildrenContentfulOssDetailTextNodeParentParentChildren = 319,
  ChildrenContentfulOssDetailTextNodeParentParentId = 320,
  ChildrenContentfulOssDetailTextNodeSysType = 321,
  ChildrenChildren = 322,
  ChildrenChildrenChildren = 323,
  ChildrenChildrenChildrenChildren = 324,
  ChildrenChildrenChildrenId = 325,
  ChildrenChildrenId = 326,
  ChildrenChildrenInternalContent = 327,
  ChildrenChildrenInternalContentDigest = 328,
  ChildrenChildrenInternalDescription = 329,
  ChildrenChildrenInternalFieldOwners = 330,
  ChildrenChildrenInternalIgnoreType = 331,
  ChildrenChildrenInternalMediaType = 332,
  ChildrenChildrenInternalOwner = 333,
  ChildrenChildrenInternalType = 334,
  ChildrenChildrenParentChildren = 335,
  ChildrenChildrenParentId = 336,
  ChildrenId = 337,
  ChildrenInternalContent = 338,
  ChildrenInternalContentDigest = 339,
  ChildrenInternalDescription = 340,
  ChildrenInternalFieldOwners = 341,
  ChildrenInternalIgnoreType = 342,
  ChildrenInternalMediaType = 343,
  ChildrenInternalOwner = 344,
  ChildrenInternalType = 345,
  ChildrenParentChildren = 346,
  ChildrenParentChildrenChildren = 347,
  ChildrenParentChildrenId = 348,
  ChildrenParentId = 349,
  ChildrenParentInternalContent = 350,
  ChildrenParentInternalContentDigest = 351,
  ChildrenParentInternalDescription = 352,
  ChildrenParentInternalFieldOwners = 353,
  ChildrenParentInternalIgnoreType = 354,
  ChildrenParentInternalMediaType = 355,
  ChildrenParentInternalOwner = 356,
  ChildrenParentInternalType = 357,
  ChildrenParentParentChildren = 358,
  ChildrenParentParentId = 359,
  ContentfulId = 360,
  CreatedAt = 361,
  DetailChildMarkdownRemarkChildren = 362,
  DetailChildMarkdownRemarkChildrenChildren = 363,
  DetailChildMarkdownRemarkChildrenId = 364,
  DetailChildMarkdownRemarkExcerpt = 365,
  DetailChildMarkdownRemarkExcerptAst = 366,
  DetailChildMarkdownRemarkFrontmatterTitle = 367,
  DetailChildMarkdownRemarkHeadings = 368,
  DetailChildMarkdownRemarkHeadingsDepth = 369,
  DetailChildMarkdownRemarkHeadingsId = 370,
  DetailChildMarkdownRemarkHeadingsValue = 371,
  DetailChildMarkdownRemarkHtml = 372,
  DetailChildMarkdownRemarkHtmlAst = 373,
  DetailChildMarkdownRemarkId = 374,
  DetailChildMarkdownRemarkInternalContent = 375,
  DetailChildMarkdownRemarkInternalContentDigest = 376,
  DetailChildMarkdownRemarkInternalDescription = 377,
  DetailChildMarkdownRemarkInternalFieldOwners = 378,
  DetailChildMarkdownRemarkInternalIgnoreType = 379,
  DetailChildMarkdownRemarkInternalMediaType = 380,
  DetailChildMarkdownRemarkInternalOwner = 381,
  DetailChildMarkdownRemarkInternalType = 382,
  DetailChildMarkdownRemarkParentChildren = 383,
  DetailChildMarkdownRemarkParentId = 384,
  DetailChildMarkdownRemarkRawMarkdownBody = 385,
  DetailChildMarkdownRemarkTableOfContents = 386,
  DetailChildMarkdownRemarkTimeToRead = 387,
  DetailChildMarkdownRemarkWordCountParagraphs = 388,
  DetailChildMarkdownRemarkWordCountSentences = 389,
  DetailChildMarkdownRemarkWordCountWords = 390,
  DetailChildMdxBody = 391,
  DetailChildMdxChildren = 392,
  DetailChildMdxChildrenChildren = 393,
  DetailChildMdxChildrenId = 394,
  DetailChildMdxExcerpt = 395,
  DetailChildMdxFileAbsolutePath = 396,
  DetailChildMdxFrontmatterTitle = 397,
  DetailChildMdxHeadings = 398,
  DetailChildMdxHeadingsDepth = 399,
  DetailChildMdxHeadingsValue = 400,
  DetailChildMdxHtml = 401,
  DetailChildMdxId = 402,
  DetailChildMdxInternalContent = 403,
  DetailChildMdxInternalContentDigest = 404,
  DetailChildMdxInternalDescription = 405,
  DetailChildMdxInternalFieldOwners = 406,
  DetailChildMdxInternalIgnoreType = 407,
  DetailChildMdxInternalMediaType = 408,
  DetailChildMdxInternalOwner = 409,
  DetailChildMdxInternalType = 410,
  DetailChildMdxMdxAst = 411,
  DetailChildMdxParentChildren = 412,
  DetailChildMdxParentId = 413,
  DetailChildMdxRawBody = 414,
  DetailChildMdxSlug = 415,
  DetailChildMdxTableOfContents = 416,
  DetailChildMdxTimeToRead = 417,
  DetailChildMdxWordCountParagraphs = 418,
  DetailChildMdxWordCountSentences = 419,
  DetailChildMdxWordCountWords = 420,
  DetailChildren = 421,
  DetailChildrenMarkdownRemark = 422,
  DetailChildrenMarkdownRemarkChildren = 423,
  DetailChildrenMarkdownRemarkChildrenChildren = 424,
  DetailChildrenMarkdownRemarkChildrenId = 425,
  DetailChildrenMarkdownRemarkExcerpt = 426,
  DetailChildrenMarkdownRemarkExcerptAst = 427,
  DetailChildrenMarkdownRemarkFrontmatterTitle = 428,
  DetailChildrenMarkdownRemarkHeadings = 429,
  DetailChildrenMarkdownRemarkHeadingsDepth = 430,
  DetailChildrenMarkdownRemarkHeadingsId = 431,
  DetailChildrenMarkdownRemarkHeadingsValue = 432,
  DetailChildrenMarkdownRemarkHtml = 433,
  DetailChildrenMarkdownRemarkHtmlAst = 434,
  DetailChildrenMarkdownRemarkId = 435,
  DetailChildrenMarkdownRemarkInternalContent = 436,
  DetailChildrenMarkdownRemarkInternalContentDigest = 437,
  DetailChildrenMarkdownRemarkInternalDescription = 438,
  DetailChildrenMarkdownRemarkInternalFieldOwners = 439,
  DetailChildrenMarkdownRemarkInternalIgnoreType = 440,
  DetailChildrenMarkdownRemarkInternalMediaType = 441,
  DetailChildrenMarkdownRemarkInternalOwner = 442,
  DetailChildrenMarkdownRemarkInternalType = 443,
  DetailChildrenMarkdownRemarkParentChildren = 444,
  DetailChildrenMarkdownRemarkParentId = 445,
  DetailChildrenMarkdownRemarkRawMarkdownBody = 446,
  DetailChildrenMarkdownRemarkTableOfContents = 447,
  DetailChildrenMarkdownRemarkTimeToRead = 448,
  DetailChildrenMarkdownRemarkWordCountParagraphs = 449,
  DetailChildrenMarkdownRemarkWordCountSentences = 450,
  DetailChildrenMarkdownRemarkWordCountWords = 451,
  DetailChildrenMdx = 452,
  DetailChildrenMdxBody = 453,
  DetailChildrenMdxChildren = 454,
  DetailChildrenMdxChildrenChildren = 455,
  DetailChildrenMdxChildrenId = 456,
  DetailChildrenMdxExcerpt = 457,
  DetailChildrenMdxFileAbsolutePath = 458,
  DetailChildrenMdxFrontmatterTitle = 459,
  DetailChildrenMdxHeadings = 460,
  DetailChildrenMdxHeadingsDepth = 461,
  DetailChildrenMdxHeadingsValue = 462,
  DetailChildrenMdxHtml = 463,
  DetailChildrenMdxId = 464,
  DetailChildrenMdxInternalContent = 465,
  DetailChildrenMdxInternalContentDigest = 466,
  DetailChildrenMdxInternalDescription = 467,
  DetailChildrenMdxInternalFieldOwners = 468,
  DetailChildrenMdxInternalIgnoreType = 469,
  DetailChildrenMdxInternalMediaType = 470,
  DetailChildrenMdxInternalOwner = 471,
  DetailChildrenMdxInternalType = 472,
  DetailChildrenMdxMdxAst = 473,
  DetailChildrenMdxParentChildren = 474,
  DetailChildrenMdxParentId = 475,
  DetailChildrenMdxRawBody = 476,
  DetailChildrenMdxSlug = 477,
  DetailChildrenMdxTableOfContents = 478,
  DetailChildrenMdxTimeToRead = 479,
  DetailChildrenMdxWordCountParagraphs = 480,
  DetailChildrenMdxWordCountSentences = 481,
  DetailChildrenMdxWordCountWords = 482,
  DetailChildrenChildren = 483,
  DetailChildrenChildrenChildren = 484,
  DetailChildrenChildrenId = 485,
  DetailChildrenId = 486,
  DetailChildrenInternalContent = 487,
  DetailChildrenInternalContentDigest = 488,
  DetailChildrenInternalDescription = 489,
  DetailChildrenInternalFieldOwners = 490,
  DetailChildrenInternalIgnoreType = 491,
  DetailChildrenInternalMediaType = 492,
  DetailChildrenInternalOwner = 493,
  DetailChildrenInternalType = 494,
  DetailChildrenParentChildren = 495,
  DetailChildrenParentId = 496,
  DetailDetail = 497,
  DetailId = 498,
  DetailInternalContent = 499,
  DetailInternalContentDigest = 500,
  DetailInternalDescription = 501,
  DetailInternalFieldOwners = 502,
  DetailInternalIgnoreType = 503,
  DetailInternalMediaType = 504,
  DetailInternalOwner = 505,
  DetailInternalType = 506,
  DetailParentChildren = 507,
  DetailParentChildrenChildren = 508,
  DetailParentChildrenId = 509,
  DetailParentId = 510,
  DetailParentInternalContent = 511,
  DetailParentInternalContentDigest = 512,
  DetailParentInternalDescription = 513,
  DetailParentInternalFieldOwners = 514,
  DetailParentInternalIgnoreType = 515,
  DetailParentInternalMediaType = 516,
  DetailParentInternalOwner = 517,
  DetailParentInternalType = 518,
  DetailParentParentChildren = 519,
  DetailParentParentId = 520,
  DetailSysType = 521,
  Href = 522,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 523,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 524,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 525,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 526,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 527,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 528,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 529,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 530,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 531,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 532,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 533,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 534,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 535,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 536,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 537,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 538,
  IconChildContentfulIconSvgTextNodeChildMdxId = 539,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 540,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 541,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 542,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 543,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 544,
  IconChildContentfulIconSvgTextNodeChildren = 545,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 546,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 547,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 548,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 549,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 550,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 551,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 552,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 553,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 554,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 555,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 556,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 557,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 558,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 559,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 560,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 561,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 562,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 563,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 564,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 565,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 566,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 567,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 568,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 569,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 570,
  IconChildContentfulIconSvgTextNodeChildrenId = 571,
  IconChildContentfulIconSvgTextNodeId = 572,
  IconChildContentfulIconSvgTextNodeInternalContent = 573,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 574,
  IconChildContentfulIconSvgTextNodeInternalDescription = 575,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 576,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 577,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 578,
  IconChildContentfulIconSvgTextNodeInternalOwner = 579,
  IconChildContentfulIconSvgTextNodeInternalType = 580,
  IconChildContentfulIconSvgTextNodeParentChildren = 581,
  IconChildContentfulIconSvgTextNodeParentId = 582,
  IconChildContentfulIconSvgTextNodeSvg = 583,
  IconChildContentfulIconSvgTextNodeSysType = 584,
  IconChildren = 585,
  IconChildrenContentfulIconSvgTextNode = 586,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 587,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 588,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 589,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 590,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 591,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 592,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 593,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 594,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 595,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 596,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 597,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 598,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 599,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 600,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 601,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 602,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 603,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 604,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 605,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 606,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 607,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 608,
  IconChildrenContentfulIconSvgTextNodeChildren = 609,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 610,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 611,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 612,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 613,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 614,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 615,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 616,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 617,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 618,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 619,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 620,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 621,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 622,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 623,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 624,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 625,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 626,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 627,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 628,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 629,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 630,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 631,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 632,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 633,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 634,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 635,
  IconChildrenContentfulIconSvgTextNodeId = 636,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 637,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 638,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 639,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 640,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 641,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 642,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 643,
  IconChildrenContentfulIconSvgTextNodeInternalType = 644,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 645,
  IconChildrenContentfulIconSvgTextNodeParentId = 646,
  IconChildrenContentfulIconSvgTextNodeSvg = 647,
  IconChildrenContentfulIconSvgTextNodeSysType = 648,
  IconChildrenChildren = 649,
  IconChildrenChildrenChildren = 650,
  IconChildrenChildrenId = 651,
  IconChildrenId = 652,
  IconChildrenInternalContent = 653,
  IconChildrenInternalContentDigest = 654,
  IconChildrenInternalDescription = 655,
  IconChildrenInternalFieldOwners = 656,
  IconChildrenInternalIgnoreType = 657,
  IconChildrenInternalMediaType = 658,
  IconChildrenInternalOwner = 659,
  IconChildrenInternalType = 660,
  IconChildrenParentChildren = 661,
  IconChildrenParentId = 662,
  IconContact = 663,
  IconContactChildren = 664,
  IconContactChildrenChildren = 665,
  IconContactChildrenId = 666,
  IconContactContentfulId = 667,
  IconContactCreatedAt = 668,
  IconContactHref = 669,
  IconContactIconSvgDarkChildren = 670,
  IconContactIconSvgDarkContentfulId = 671,
  IconContactIconSvgDarkCreatedAt = 672,
  IconContactIconSvgDarkDescription = 673,
  IconContactIconSvgDarkGatsbyImageData = 674,
  IconContactIconSvgDarkId = 675,
  IconContactIconSvgDarkNodeLocale = 676,
  IconContactIconSvgDarkSpaceId = 677,
  IconContactIconSvgDarkTitle = 678,
  IconContactIconSvgDarkUpdatedAt = 679,
  IconContactIconSvgLightChildren = 680,
  IconContactIconSvgLightContentfulId = 681,
  IconContactIconSvgLightCreatedAt = 682,
  IconContactIconSvgLightDescription = 683,
  IconContactIconSvgLightGatsbyImageData = 684,
  IconContactIconSvgLightId = 685,
  IconContactIconSvgLightNodeLocale = 686,
  IconContactIconSvgLightSpaceId = 687,
  IconContactIconSvgLightTitle = 688,
  IconContactIconSvgLightUpdatedAt = 689,
  IconContactIconChildren = 690,
  IconContactIconChildrenContentfulIconSvgTextNode = 691,
  IconContactIconContact = 692,
  IconContactIconContentfulId = 693,
  IconContactIconCreatedAt = 694,
  IconContactIconHistory = 695,
  IconContactIconId = 696,
  IconContactIconName = 697,
  IconContactIconNodeLocale = 698,
  IconContactIconOss = 699,
  IconContactIconProject = 700,
  IconContactIconSpaceId = 701,
  IconContactIconUpdatedAt = 702,
  IconContactIconWhatICanDo = 703,
  IconContactId = 704,
  IconContactInternalContent = 705,
  IconContactInternalContentDigest = 706,
  IconContactInternalDescription = 707,
  IconContactInternalFieldOwners = 708,
  IconContactInternalIgnoreType = 709,
  IconContactInternalMediaType = 710,
  IconContactInternalOwner = 711,
  IconContactInternalType = 712,
  IconContactName = 713,
  IconContactNodeLocale = 714,
  IconContactParentChildren = 715,
  IconContactParentId = 716,
  IconContactSortKey = 717,
  IconContactSpaceId = 718,
  IconContactSubName = 719,
  IconContactSysRevision = 720,
  IconContactSysType = 721,
  IconContactUpdatedAt = 722,
  IconContentfulId = 723,
  IconCreatedAt = 724,
  IconHistory = 725,
  IconHistoryChildren = 726,
  IconHistoryChildrenChildren = 727,
  IconHistoryChildrenId = 728,
  IconHistoryContentfulId = 729,
  IconHistoryCreatedAt = 730,
  IconHistoryDate = 731,
  IconHistoryIconChildren = 732,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 733,
  IconHistoryIconContact = 734,
  IconHistoryIconContentfulId = 735,
  IconHistoryIconCreatedAt = 736,
  IconHistoryIconHistory = 737,
  IconHistoryIconId = 738,
  IconHistoryIconName = 739,
  IconHistoryIconNodeLocale = 740,
  IconHistoryIconOss = 741,
  IconHistoryIconProject = 742,
  IconHistoryIconSpaceId = 743,
  IconHistoryIconUpdatedAt = 744,
  IconHistoryIconWhatICanDo = 745,
  IconHistoryId = 746,
  IconHistoryInternalContent = 747,
  IconHistoryInternalContentDigest = 748,
  IconHistoryInternalDescription = 749,
  IconHistoryInternalFieldOwners = 750,
  IconHistoryInternalIgnoreType = 751,
  IconHistoryInternalMediaType = 752,
  IconHistoryInternalOwner = 753,
  IconHistoryInternalType = 754,
  IconHistoryName = 755,
  IconHistoryNodeLocale = 756,
  IconHistoryParentChildren = 757,
  IconHistoryParentId = 758,
  IconHistorySpaceId = 759,
  IconHistorySubName = 760,
  IconHistorySysRevision = 761,
  IconHistorySysType = 762,
  IconHistoryUpdatedAt = 763,
  IconId = 764,
  IconInternalContent = 765,
  IconInternalContentDigest = 766,
  IconInternalDescription = 767,
  IconInternalFieldOwners = 768,
  IconInternalIgnoreType = 769,
  IconInternalMediaType = 770,
  IconInternalOwner = 771,
  IconInternalType = 772,
  IconName = 773,
  IconNodeLocale = 774,
  IconOss = 775,
  IconOssChildContentfulOssDetailTextNodeChildren = 776,
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 777,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 778,
  IconOssChildContentfulOssDetailTextNodeDetail = 779,
  IconOssChildContentfulOssDetailTextNodeId = 780,
  IconOssChildren = 781,
  IconOssChildrenContentfulOssDetailTextNode = 782,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 783,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 784,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 785,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 786,
  IconOssChildrenContentfulOssDetailTextNodeId = 787,
  IconOssChildrenChildren = 788,
  IconOssChildrenId = 789,
  IconOssContentfulId = 790,
  IconOssCreatedAt = 791,
  IconOssDetailChildren = 792,
  IconOssDetailChildrenMarkdownRemark = 793,
  IconOssDetailChildrenMdx = 794,
  IconOssDetailDetail = 795,
  IconOssDetailId = 796,
  IconOssHref = 797,
  IconOssIconChildren = 798,
  IconOssIconChildrenContentfulIconSvgTextNode = 799,
  IconOssIconContact = 800,
  IconOssIconContentfulId = 801,
  IconOssIconCreatedAt = 802,
  IconOssIconHistory = 803,
  IconOssIconId = 804,
  IconOssIconName = 805,
  IconOssIconNodeLocale = 806,
  IconOssIconOss = 807,
  IconOssIconProject = 808,
  IconOssIconSpaceId = 809,
  IconOssIconUpdatedAt = 810,
  IconOssIconWhatICanDo = 811,
  IconOssId = 812,
  IconOssImageChildren = 813,
  IconOssImageContentfulId = 814,
  IconOssImageCreatedAt = 815,
  IconOssImageDescription = 816,
  IconOssImageGatsbyImageData = 817,
  IconOssImageId = 818,
  IconOssImageNodeLocale = 819,
  IconOssImageSpaceId = 820,
  IconOssImageTitle = 821,
  IconOssImageUpdatedAt = 822,
  IconOssInternalContent = 823,
  IconOssInternalContentDigest = 824,
  IconOssInternalDescription = 825,
  IconOssInternalFieldOwners = 826,
  IconOssInternalIgnoreType = 827,
  IconOssInternalMediaType = 828,
  IconOssInternalOwner = 829,
  IconOssInternalType = 830,
  IconOssName = 831,
  IconOssNodeLocale = 832,
  IconOssParentChildren = 833,
  IconOssParentId = 834,
  IconOssSpaceId = 835,
  IconOssStartDate = 836,
  IconOssSubName = 837,
  IconOssSysRevision = 838,
  IconOssSysType = 839,
  IconOssTags = 840,
  IconOssTagsBlogPost = 841,
  IconOssTagsChildren = 842,
  IconOssTagsContentfulId = 843,
  IconOssTagsCreatedAt = 844,
  IconOssTagsId = 845,
  IconOssTagsLevel = 846,
  IconOssTagsName = 847,
  IconOssTagsNodeLocale = 848,
  IconOssTagsOss = 849,
  IconOssTagsProject = 850,
  IconOssTagsSkillMap = 851,
  IconOssTagsSpaceId = 852,
  IconOssTagsUpdatedAt = 853,
  IconOssUpdatedAt = 854,
  IconParentChildren = 855,
  IconParentChildrenChildren = 856,
  IconParentChildrenId = 857,
  IconParentId = 858,
  IconParentInternalContent = 859,
  IconParentInternalContentDigest = 860,
  IconParentInternalDescription = 861,
  IconParentInternalFieldOwners = 862,
  IconParentInternalIgnoreType = 863,
  IconParentInternalMediaType = 864,
  IconParentInternalOwner = 865,
  IconParentInternalType = 866,
  IconParentParentChildren = 867,
  IconParentParentId = 868,
  IconProject = 869,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 870,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 871,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 872,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 873,
  IconProjectChildContentfulProjectDetailTextNodeId = 874,
  IconProjectChildren = 875,
  IconProjectChildrenContentfulProjectDetailTextNode = 876,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 877,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 878,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 879,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 880,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 881,
  IconProjectChildrenChildren = 882,
  IconProjectChildrenId = 883,
  IconProjectContentfulId = 884,
  IconProjectCreatedAt = 885,
  IconProjectDetailChildren = 886,
  IconProjectDetailChildrenMarkdownRemark = 887,
  IconProjectDetailChildrenMdx = 888,
  IconProjectDetailDetail = 889,
  IconProjectDetailId = 890,
  IconProjectEndDate = 891,
  IconProjectIconChildren = 892,
  IconProjectIconChildrenContentfulIconSvgTextNode = 893,
  IconProjectIconContact = 894,
  IconProjectIconContentfulId = 895,
  IconProjectIconCreatedAt = 896,
  IconProjectIconHistory = 897,
  IconProjectIconId = 898,
  IconProjectIconName = 899,
  IconProjectIconNodeLocale = 900,
  IconProjectIconOss = 901,
  IconProjectIconProject = 902,
  IconProjectIconSpaceId = 903,
  IconProjectIconUpdatedAt = 904,
  IconProjectIconWhatICanDo = 905,
  IconProjectId = 906,
  IconProjectInternalContent = 907,
  IconProjectInternalContentDigest = 908,
  IconProjectInternalDescription = 909,
  IconProjectInternalFieldOwners = 910,
  IconProjectInternalIgnoreType = 911,
  IconProjectInternalMediaType = 912,
  IconProjectInternalOwner = 913,
  IconProjectInternalType = 914,
  IconProjectName = 915,
  IconProjectNodeLocale = 916,
  IconProjectParentChildren = 917,
  IconProjectParentId = 918,
  IconProjectSpaceId = 919,
  IconProjectStartDate = 920,
  IconProjectSubName = 921,
  IconProjectSysRevision = 922,
  IconProjectSysType = 923,
  IconProjectTags = 924,
  IconProjectTagsBlogPost = 925,
  IconProjectTagsChildren = 926,
  IconProjectTagsContentfulId = 927,
  IconProjectTagsCreatedAt = 928,
  IconProjectTagsId = 929,
  IconProjectTagsLevel = 930,
  IconProjectTagsName = 931,
  IconProjectTagsNodeLocale = 932,
  IconProjectTagsOss = 933,
  IconProjectTagsProject = 934,
  IconProjectTagsSkillMap = 935,
  IconProjectTagsSpaceId = 936,
  IconProjectTagsUpdatedAt = 937,
  IconProjectUpdatedAt = 938,
  IconSpaceId = 939,
  IconSvgChildMarkdownRemarkChildren = 940,
  IconSvgChildMarkdownRemarkExcerpt = 941,
  IconSvgChildMarkdownRemarkExcerptAst = 942,
  IconSvgChildMarkdownRemarkHeadings = 943,
  IconSvgChildMarkdownRemarkHtml = 944,
  IconSvgChildMarkdownRemarkHtmlAst = 945,
  IconSvgChildMarkdownRemarkId = 946,
  IconSvgChildMarkdownRemarkRawMarkdownBody = 947,
  IconSvgChildMarkdownRemarkTableOfContents = 948,
  IconSvgChildMarkdownRemarkTimeToRead = 949,
  IconSvgChildMdxBody = 950,
  IconSvgChildMdxChildren = 951,
  IconSvgChildMdxExcerpt = 952,
  IconSvgChildMdxFileAbsolutePath = 953,
  IconSvgChildMdxHeadings = 954,
  IconSvgChildMdxHtml = 955,
  IconSvgChildMdxId = 956,
  IconSvgChildMdxMdxAst = 957,
  IconSvgChildMdxRawBody = 958,
  IconSvgChildMdxSlug = 959,
  IconSvgChildMdxTableOfContents = 960,
  IconSvgChildMdxTimeToRead = 961,
  IconSvgChildren = 962,
  IconSvgChildrenMarkdownRemark = 963,
  IconSvgChildrenMarkdownRemarkChildren = 964,
  IconSvgChildrenMarkdownRemarkExcerpt = 965,
  IconSvgChildrenMarkdownRemarkExcerptAst = 966,
  IconSvgChildrenMarkdownRemarkHeadings = 967,
  IconSvgChildrenMarkdownRemarkHtml = 968,
  IconSvgChildrenMarkdownRemarkHtmlAst = 969,
  IconSvgChildrenMarkdownRemarkId = 970,
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 971,
  IconSvgChildrenMarkdownRemarkTableOfContents = 972,
  IconSvgChildrenMarkdownRemarkTimeToRead = 973,
  IconSvgChildrenMdx = 974,
  IconSvgChildrenMdxBody = 975,
  IconSvgChildrenMdxChildren = 976,
  IconSvgChildrenMdxExcerpt = 977,
  IconSvgChildrenMdxFileAbsolutePath = 978,
  IconSvgChildrenMdxHeadings = 979,
  IconSvgChildrenMdxHtml = 980,
  IconSvgChildrenMdxId = 981,
  IconSvgChildrenMdxMdxAst = 982,
  IconSvgChildrenMdxRawBody = 983,
  IconSvgChildrenMdxSlug = 984,
  IconSvgChildrenMdxTableOfContents = 985,
  IconSvgChildrenMdxTimeToRead = 986,
  IconSvgChildrenChildren = 987,
  IconSvgChildrenId = 988,
  IconSvgId = 989,
  IconSvgInternalContent = 990,
  IconSvgInternalContentDigest = 991,
  IconSvgInternalDescription = 992,
  IconSvgInternalFieldOwners = 993,
  IconSvgInternalIgnoreType = 994,
  IconSvgInternalMediaType = 995,
  IconSvgInternalOwner = 996,
  IconSvgInternalType = 997,
  IconSvgParentChildren = 998,
  IconSvgParentId = 999,
  IconSvgSvg = 1000,
  IconSvgSysType = 1001,
  IconSysRevision = 1002,
  IconSysType = 1003,
  IconUpdatedAt = 1004,
  IconWhatICanDo = 1005,
  IconWhatICanDoChildren = 1006,
  IconWhatICanDoChildrenChildren = 1007,
  IconWhatICanDoChildrenId = 1008,
  IconWhatICanDoContentfulId = 1009,
  IconWhatICanDoCreatedAt = 1010,
  IconWhatICanDoIconChildren = 1011,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 1012,
  IconWhatICanDoIconContact = 1013,
  IconWhatICanDoIconContentfulId = 1014,
  IconWhatICanDoIconCreatedAt = 1015,
  IconWhatICanDoIconHistory = 1016,
  IconWhatICanDoIconId = 1017,
  IconWhatICanDoIconName = 1018,
  IconWhatICanDoIconNodeLocale = 1019,
  IconWhatICanDoIconOss = 1020,
  IconWhatICanDoIconProject = 1021,
  IconWhatICanDoIconSpaceId = 1022,
  IconWhatICanDoIconUpdatedAt = 1023,
  IconWhatICanDoIconWhatICanDo = 1024,
  IconWhatICanDoId = 1025,
  IconWhatICanDoInternalContent = 1026,
  IconWhatICanDoInternalContentDigest = 1027,
  IconWhatICanDoInternalDescription = 1028,
  IconWhatICanDoInternalFieldOwners = 1029,
  IconWhatICanDoInternalIgnoreType = 1030,
  IconWhatICanDoInternalMediaType = 1031,
  IconWhatICanDoInternalOwner = 1032,
  IconWhatICanDoInternalType = 1033,
  IconWhatICanDoName = 1034,
  IconWhatICanDoNodeLocale = 1035,
  IconWhatICanDoParentChildren = 1036,
  IconWhatICanDoParentId = 1037,
  IconWhatICanDoSortKey = 1038,
  IconWhatICanDoSpaceId = 1039,
  IconWhatICanDoSubName = 1040,
  IconWhatICanDoSysRevision = 1041,
  IconWhatICanDoSysType = 1042,
  IconWhatICanDoUpdatedAt = 1043,
  Id = 1044,
  ImageChildren = 1045,
  ImageChildrenChildren = 1046,
  ImageChildrenChildrenChildren = 1047,
  ImageChildrenChildrenId = 1048,
  ImageChildrenId = 1049,
  ImageChildrenInternalContent = 1050,
  ImageChildrenInternalContentDigest = 1051,
  ImageChildrenInternalDescription = 1052,
  ImageChildrenInternalFieldOwners = 1053,
  ImageChildrenInternalIgnoreType = 1054,
  ImageChildrenInternalMediaType = 1055,
  ImageChildrenInternalOwner = 1056,
  ImageChildrenInternalType = 1057,
  ImageChildrenParentChildren = 1058,
  ImageChildrenParentId = 1059,
  ImageContentfulId = 1060,
  ImageCreatedAt = 1061,
  ImageDescription = 1062,
  ImageFieldsLocalFile = 1063,
  ImageFileContentType = 1064,
  ImageFileDetailsSize = 1065,
  ImageFileFileName = 1066,
  ImageFileUrl = 1067,
  ImageGatsbyImageData = 1068,
  ImageId = 1069,
  ImageInternalContent = 1070,
  ImageInternalContentDigest = 1071,
  ImageInternalDescription = 1072,
  ImageInternalFieldOwners = 1073,
  ImageInternalIgnoreType = 1074,
  ImageInternalMediaType = 1075,
  ImageInternalOwner = 1076,
  ImageInternalType = 1077,
  ImageLocalFileAbsolutePath = 1078,
  ImageLocalFileAccessTime = 1079,
  ImageLocalFileAtime = 1080,
  ImageLocalFileAtimeMs = 1081,
  ImageLocalFileBase = 1082,
  ImageLocalFileBirthTime = 1083,
  ImageLocalFileBirthtime = 1084,
  ImageLocalFileBirthtimeMs = 1085,
  ImageLocalFileBlksize = 1086,
  ImageLocalFileBlocks = 1087,
  ImageLocalFileChangeTime = 1088,
  ImageLocalFileChildImageSharpChildren = 1089,
  ImageLocalFileChildImageSharpGatsbyImageData = 1090,
  ImageLocalFileChildImageSharpId = 1091,
  ImageLocalFileChildLocaleChildren = 1092,
  ImageLocalFileChildLocaleData = 1093,
  ImageLocalFileChildLocaleFileAbsolutePath = 1094,
  ImageLocalFileChildLocaleId = 1095,
  ImageLocalFileChildLocaleLanguage = 1096,
  ImageLocalFileChildLocaleNs = 1097,
  ImageLocalFileChildren = 1098,
  ImageLocalFileChildrenImageSharp = 1099,
  ImageLocalFileChildrenImageSharpChildren = 1100,
  ImageLocalFileChildrenImageSharpGatsbyImageData = 1101,
  ImageLocalFileChildrenImageSharpId = 1102,
  ImageLocalFileChildrenLocale = 1103,
  ImageLocalFileChildrenLocaleChildren = 1104,
  ImageLocalFileChildrenLocaleData = 1105,
  ImageLocalFileChildrenLocaleFileAbsolutePath = 1106,
  ImageLocalFileChildrenLocaleId = 1107,
  ImageLocalFileChildrenLocaleLanguage = 1108,
  ImageLocalFileChildrenLocaleNs = 1109,
  ImageLocalFileChildrenChildren = 1110,
  ImageLocalFileChildrenId = 1111,
  ImageLocalFileCtime = 1112,
  ImageLocalFileCtimeMs = 1113,
  ImageLocalFileDev = 1114,
  ImageLocalFileDir = 1115,
  ImageLocalFileExt = 1116,
  ImageLocalFileExtension = 1117,
  ImageLocalFileGid = 1118,
  ImageLocalFileId = 1119,
  ImageLocalFileIno = 1120,
  ImageLocalFileInternalContent = 1121,
  ImageLocalFileInternalContentDigest = 1122,
  ImageLocalFileInternalDescription = 1123,
  ImageLocalFileInternalFieldOwners = 1124,
  ImageLocalFileInternalIgnoreType = 1125,
  ImageLocalFileInternalMediaType = 1126,
  ImageLocalFileInternalOwner = 1127,
  ImageLocalFileInternalType = 1128,
  ImageLocalFileMode = 1129,
  ImageLocalFileModifiedTime = 1130,
  ImageLocalFileMtime = 1131,
  ImageLocalFileMtimeMs = 1132,
  ImageLocalFileName = 1133,
  ImageLocalFileNlink = 1134,
  ImageLocalFileParentChildren = 1135,
  ImageLocalFileParentId = 1136,
  ImageLocalFilePrettySize = 1137,
  ImageLocalFilePublicUrl = 1138,
  ImageLocalFileRdev = 1139,
  ImageLocalFileRelativeDirectory = 1140,
  ImageLocalFileRelativePath = 1141,
  ImageLocalFileRoot = 1142,
  ImageLocalFileSize = 1143,
  ImageLocalFileSourceInstanceName = 1144,
  ImageLocalFileUid = 1145,
  ImageLocalFileUrl = 1146,
  ImageNodeLocale = 1147,
  ImageParentChildren = 1148,
  ImageParentChildrenChildren = 1149,
  ImageParentChildrenId = 1150,
  ImageParentId = 1151,
  ImageParentInternalContent = 1152,
  ImageParentInternalContentDigest = 1153,
  ImageParentInternalDescription = 1154,
  ImageParentInternalFieldOwners = 1155,
  ImageParentInternalIgnoreType = 1156,
  ImageParentInternalMediaType = 1157,
  ImageParentInternalOwner = 1158,
  ImageParentInternalType = 1159,
  ImageParentParentChildren = 1160,
  ImageParentParentId = 1161,
  ImageSpaceId = 1162,
  ImageSysRevision = 1163,
  ImageSysType = 1164,
  ImageTitle = 1165,
  ImageUpdatedAt = 1166,
  InternalContent = 1167,
  InternalContentDigest = 1168,
  InternalDescription = 1169,
  InternalFieldOwners = 1170,
  InternalIgnoreType = 1171,
  InternalMediaType = 1172,
  InternalOwner = 1173,
  InternalType = 1174,
  Name = 1175,
  NodeLocale = 1176,
  ParentChildren = 1177,
  ParentChildrenChildren = 1178,
  ParentChildrenChildrenChildren = 1179,
  ParentChildrenChildrenId = 1180,
  ParentChildrenId = 1181,
  ParentChildrenInternalContent = 1182,
  ParentChildrenInternalContentDigest = 1183,
  ParentChildrenInternalDescription = 1184,
  ParentChildrenInternalFieldOwners = 1185,
  ParentChildrenInternalIgnoreType = 1186,
  ParentChildrenInternalMediaType = 1187,
  ParentChildrenInternalOwner = 1188,
  ParentChildrenInternalType = 1189,
  ParentChildrenParentChildren = 1190,
  ParentChildrenParentId = 1191,
  ParentId = 1192,
  ParentInternalContent = 1193,
  ParentInternalContentDigest = 1194,
  ParentInternalDescription = 1195,
  ParentInternalFieldOwners = 1196,
  ParentInternalIgnoreType = 1197,
  ParentInternalMediaType = 1198,
  ParentInternalOwner = 1199,
  ParentInternalType = 1200,
  ParentParentChildren = 1201,
  ParentParentChildrenChildren = 1202,
  ParentParentChildrenId = 1203,
  ParentParentId = 1204,
  ParentParentInternalContent = 1205,
  ParentParentInternalContentDigest = 1206,
  ParentParentInternalDescription = 1207,
  ParentParentInternalFieldOwners = 1208,
  ParentParentInternalIgnoreType = 1209,
  ParentParentInternalMediaType = 1210,
  ParentParentInternalOwner = 1211,
  ParentParentInternalType = 1212,
  ParentParentParentChildren = 1213,
  ParentParentParentId = 1214,
  SpaceId = 1215,
  StartDate = 1216,
  SubName = 1217,
  SysContentTypeSysId = 1218,
  SysContentTypeSysLinkType = 1219,
  SysContentTypeSysType = 1220,
  SysRevision = 1221,
  SysType = 1222,
  Tags = 1223,
  TagsBlogPost = 1224,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 1225,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 1226,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 1227,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 1228,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 1229,
  TagsBlogPostChildren = 1230,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 1231,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 1232,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 1233,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 1234,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 1235,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 1236,
  TagsBlogPostChildrenChildren = 1237,
  TagsBlogPostChildrenId = 1238,
  TagsBlogPostContentChildren = 1239,
  TagsBlogPostContentChildrenMarkdownRemark = 1240,
  TagsBlogPostContentChildrenMdx = 1241,
  TagsBlogPostContentContent = 1242,
  TagsBlogPostContentId = 1243,
  TagsBlogPostContentfulId = 1244,
  TagsBlogPostCreated = 1245,
  TagsBlogPostCreatedAt = 1246,
  TagsBlogPostExcerpt = 1247,
  TagsBlogPostId = 1248,
  TagsBlogPostInternalContent = 1249,
  TagsBlogPostInternalContentDigest = 1250,
  TagsBlogPostInternalDescription = 1251,
  TagsBlogPostInternalFieldOwners = 1252,
  TagsBlogPostInternalIgnoreType = 1253,
  TagsBlogPostInternalMediaType = 1254,
  TagsBlogPostInternalOwner = 1255,
  TagsBlogPostInternalType = 1256,
  TagsBlogPostNodeLocale = 1257,
  TagsBlogPostParentChildren = 1258,
  TagsBlogPostParentId = 1259,
  TagsBlogPostSlug = 1260,
  TagsBlogPostSpaceId = 1261,
  TagsBlogPostSysRevision = 1262,
  TagsBlogPostSysType = 1263,
  TagsBlogPostTags = 1264,
  TagsBlogPostTagsBlogPost = 1265,
  TagsBlogPostTagsChildren = 1266,
  TagsBlogPostTagsContentfulId = 1267,
  TagsBlogPostTagsCreatedAt = 1268,
  TagsBlogPostTagsId = 1269,
  TagsBlogPostTagsLevel = 1270,
  TagsBlogPostTagsName = 1271,
  TagsBlogPostTagsNodeLocale = 1272,
  TagsBlogPostTagsOss = 1273,
  TagsBlogPostTagsProject = 1274,
  TagsBlogPostTagsSkillMap = 1275,
  TagsBlogPostTagsSpaceId = 1276,
  TagsBlogPostTagsUpdatedAt = 1277,
  TagsBlogPostTitle = 1278,
  TagsBlogPostUpdated = 1279,
  TagsBlogPostUpdatedAt = 1280,
  TagsChildren = 1281,
  TagsChildrenChildren = 1282,
  TagsChildrenChildrenChildren = 1283,
  TagsChildrenChildrenId = 1284,
  TagsChildrenId = 1285,
  TagsChildrenInternalContent = 1286,
  TagsChildrenInternalContentDigest = 1287,
  TagsChildrenInternalDescription = 1288,
  TagsChildrenInternalFieldOwners = 1289,
  TagsChildrenInternalIgnoreType = 1290,
  TagsChildrenInternalMediaType = 1291,
  TagsChildrenInternalOwner = 1292,
  TagsChildrenInternalType = 1293,
  TagsChildrenParentChildren = 1294,
  TagsChildrenParentId = 1295,
  TagsContentfulId = 1296,
  TagsCreatedAt = 1297,
  TagsId = 1298,
  TagsInternalContent = 1299,
  TagsInternalContentDigest = 1300,
  TagsInternalDescription = 1301,
  TagsInternalFieldOwners = 1302,
  TagsInternalIgnoreType = 1303,
  TagsInternalMediaType = 1304,
  TagsInternalOwner = 1305,
  TagsInternalType = 1306,
  TagsLevel = 1307,
  TagsName = 1308,
  TagsNodeLocale = 1309,
  TagsOss = 1310,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1311,
  TagsOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 1312,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1313,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1314,
  TagsOssChildContentfulOssDetailTextNodeId = 1315,
  TagsOssChildren = 1316,
  TagsOssChildrenContentfulOssDetailTextNode = 1317,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1318,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 1319,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1320,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1321,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1322,
  TagsOssChildrenChildren = 1323,
  TagsOssChildrenId = 1324,
  TagsOssContentfulId = 1325,
  TagsOssCreatedAt = 1326,
  TagsOssDetailChildren = 1327,
  TagsOssDetailChildrenMarkdownRemark = 1328,
  TagsOssDetailChildrenMdx = 1329,
  TagsOssDetailDetail = 1330,
  TagsOssDetailId = 1331,
  TagsOssHref = 1332,
  TagsOssIconChildren = 1333,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1334,
  TagsOssIconContact = 1335,
  TagsOssIconContentfulId = 1336,
  TagsOssIconCreatedAt = 1337,
  TagsOssIconHistory = 1338,
  TagsOssIconId = 1339,
  TagsOssIconName = 1340,
  TagsOssIconNodeLocale = 1341,
  TagsOssIconOss = 1342,
  TagsOssIconProject = 1343,
  TagsOssIconSpaceId = 1344,
  TagsOssIconUpdatedAt = 1345,
  TagsOssIconWhatICanDo = 1346,
  TagsOssId = 1347,
  TagsOssImageChildren = 1348,
  TagsOssImageContentfulId = 1349,
  TagsOssImageCreatedAt = 1350,
  TagsOssImageDescription = 1351,
  TagsOssImageGatsbyImageData = 1352,
  TagsOssImageId = 1353,
  TagsOssImageNodeLocale = 1354,
  TagsOssImageSpaceId = 1355,
  TagsOssImageTitle = 1356,
  TagsOssImageUpdatedAt = 1357,
  TagsOssInternalContent = 1358,
  TagsOssInternalContentDigest = 1359,
  TagsOssInternalDescription = 1360,
  TagsOssInternalFieldOwners = 1361,
  TagsOssInternalIgnoreType = 1362,
  TagsOssInternalMediaType = 1363,
  TagsOssInternalOwner = 1364,
  TagsOssInternalType = 1365,
  TagsOssName = 1366,
  TagsOssNodeLocale = 1367,
  TagsOssParentChildren = 1368,
  TagsOssParentId = 1369,
  TagsOssSpaceId = 1370,
  TagsOssStartDate = 1371,
  TagsOssSubName = 1372,
  TagsOssSysRevision = 1373,
  TagsOssSysType = 1374,
  TagsOssTags = 1375,
  TagsOssTagsBlogPost = 1376,
  TagsOssTagsChildren = 1377,
  TagsOssTagsContentfulId = 1378,
  TagsOssTagsCreatedAt = 1379,
  TagsOssTagsId = 1380,
  TagsOssTagsLevel = 1381,
  TagsOssTagsName = 1382,
  TagsOssTagsNodeLocale = 1383,
  TagsOssTagsOss = 1384,
  TagsOssTagsProject = 1385,
  TagsOssTagsSkillMap = 1386,
  TagsOssTagsSpaceId = 1387,
  TagsOssTagsUpdatedAt = 1388,
  TagsOssUpdatedAt = 1389,
  TagsParentChildren = 1390,
  TagsParentChildrenChildren = 1391,
  TagsParentChildrenId = 1392,
  TagsParentId = 1393,
  TagsParentInternalContent = 1394,
  TagsParentInternalContentDigest = 1395,
  TagsParentInternalDescription = 1396,
  TagsParentInternalFieldOwners = 1397,
  TagsParentInternalIgnoreType = 1398,
  TagsParentInternalMediaType = 1399,
  TagsParentInternalOwner = 1400,
  TagsParentInternalType = 1401,
  TagsParentParentChildren = 1402,
  TagsParentParentId = 1403,
  TagsProject = 1404,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1405,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1406,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1407,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1408,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1409,
  TagsProjectChildren = 1410,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1411,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1412,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1413,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1414,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1415,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1416,
  TagsProjectChildrenChildren = 1417,
  TagsProjectChildrenId = 1418,
  TagsProjectContentfulId = 1419,
  TagsProjectCreatedAt = 1420,
  TagsProjectDetailChildren = 1421,
  TagsProjectDetailChildrenMarkdownRemark = 1422,
  TagsProjectDetailChildrenMdx = 1423,
  TagsProjectDetailDetail = 1424,
  TagsProjectDetailId = 1425,
  TagsProjectEndDate = 1426,
  TagsProjectIconChildren = 1427,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1428,
  TagsProjectIconContact = 1429,
  TagsProjectIconContentfulId = 1430,
  TagsProjectIconCreatedAt = 1431,
  TagsProjectIconHistory = 1432,
  TagsProjectIconId = 1433,
  TagsProjectIconName = 1434,
  TagsProjectIconNodeLocale = 1435,
  TagsProjectIconOss = 1436,
  TagsProjectIconProject = 1437,
  TagsProjectIconSpaceId = 1438,
  TagsProjectIconUpdatedAt = 1439,
  TagsProjectIconWhatICanDo = 1440,
  TagsProjectId = 1441,
  TagsProjectInternalContent = 1442,
  TagsProjectInternalContentDigest = 1443,
  TagsProjectInternalDescription = 1444,
  TagsProjectInternalFieldOwners = 1445,
  TagsProjectInternalIgnoreType = 1446,
  TagsProjectInternalMediaType = 1447,
  TagsProjectInternalOwner = 1448,
  TagsProjectInternalType = 1449,
  TagsProjectName = 1450,
  TagsProjectNodeLocale = 1451,
  TagsProjectParentChildren = 1452,
  TagsProjectParentId = 1453,
  TagsProjectSpaceId = 1454,
  TagsProjectStartDate = 1455,
  TagsProjectSubName = 1456,
  TagsProjectSysRevision = 1457,
  TagsProjectSysType = 1458,
  TagsProjectTags = 1459,
  TagsProjectTagsBlogPost = 1460,
  TagsProjectTagsChildren = 1461,
  TagsProjectTagsContentfulId = 1462,
  TagsProjectTagsCreatedAt = 1463,
  TagsProjectTagsId = 1464,
  TagsProjectTagsLevel = 1465,
  TagsProjectTagsName = 1466,
  TagsProjectTagsNodeLocale = 1467,
  TagsProjectTagsOss = 1468,
  TagsProjectTagsProject = 1469,
  TagsProjectTagsSkillMap = 1470,
  TagsProjectTagsSpaceId = 1471,
  TagsProjectTagsUpdatedAt = 1472,
  TagsProjectUpdatedAt = 1473,
  TagsSkillMap = 1474,
  TagsSkillMapChildren = 1475,
  TagsSkillMapChildrenChildren = 1476,
  TagsSkillMapChildrenId = 1477,
  TagsSkillMapContentfulId = 1478,
  TagsSkillMapCreatedAt = 1479,
  TagsSkillMapExpanded = 1480,
  TagsSkillMapId = 1481,
  TagsSkillMapInternalContent = 1482,
  TagsSkillMapInternalContentDigest = 1483,
  TagsSkillMapInternalDescription = 1484,
  TagsSkillMapInternalFieldOwners = 1485,
  TagsSkillMapInternalIgnoreType = 1486,
  TagsSkillMapInternalMediaType = 1487,
  TagsSkillMapInternalOwner = 1488,
  TagsSkillMapInternalType = 1489,
  TagsSkillMapName = 1490,
  TagsSkillMapNodeLocale = 1491,
  TagsSkillMapParentChildren = 1492,
  TagsSkillMapParentId = 1493,
  TagsSkillMapSkills = 1494,
  TagsSkillMapSkillsBlogPost = 1495,
  TagsSkillMapSkillsChildren = 1496,
  TagsSkillMapSkillsContentfulId = 1497,
  TagsSkillMapSkillsCreatedAt = 1498,
  TagsSkillMapSkillsId = 1499,
  TagsSkillMapSkillsLevel = 1500,
  TagsSkillMapSkillsName = 1501,
  TagsSkillMapSkillsNodeLocale = 1502,
  TagsSkillMapSkillsOss = 1503,
  TagsSkillMapSkillsProject = 1504,
  TagsSkillMapSkillsSkillMap = 1505,
  TagsSkillMapSkillsSpaceId = 1506,
  TagsSkillMapSkillsUpdatedAt = 1507,
  TagsSkillMapSortKey = 1508,
  TagsSkillMapSpaceId = 1509,
  TagsSkillMapSysRevision = 1510,
  TagsSkillMapSysType = 1511,
  TagsSkillMapUpdatedAt = 1512,
  TagsSpaceId = 1513,
  TagsSysRevision = 1514,
  TagsSysType = 1515,
  TagsUpdatedAt = 1516,
  UpdatedAt = 1517
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
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 0,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildrenChildren = 1,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildrenId = 2,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 3,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 4,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkFrontmatterTitle = 5,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 6,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsDepth = 7,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsId = 8,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsValue = 9,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 10,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 11,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkId = 12,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalContent = 13,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalContentDigest = 14,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalDescription = 15,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalFieldOwners = 16,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalIgnoreType = 17,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalMediaType = 18,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalOwner = 19,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkInternalType = 20,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkParentChildren = 21,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkParentId = 22,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 23,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 24,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 25,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountParagraphs = 26,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountSentences = 27,
  ChildContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountWords = 28,
  ChildContentfulProjectDetailTextNodeChildMdxBody = 29,
  ChildContentfulProjectDetailTextNodeChildMdxChildren = 30,
  ChildContentfulProjectDetailTextNodeChildMdxChildrenChildren = 31,
  ChildContentfulProjectDetailTextNodeChildMdxChildrenId = 32,
  ChildContentfulProjectDetailTextNodeChildMdxExcerpt = 33,
  ChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 34,
  ChildContentfulProjectDetailTextNodeChildMdxFrontmatterTitle = 35,
  ChildContentfulProjectDetailTextNodeChildMdxHeadings = 36,
  ChildContentfulProjectDetailTextNodeChildMdxHeadingsDepth = 37,
  ChildContentfulProjectDetailTextNodeChildMdxHeadingsValue = 38,
  ChildContentfulProjectDetailTextNodeChildMdxHtml = 39,
  ChildContentfulProjectDetailTextNodeChildMdxId = 40,
  ChildContentfulProjectDetailTextNodeChildMdxInternalContent = 41,
  ChildContentfulProjectDetailTextNodeChildMdxInternalContentDigest = 42,
  ChildContentfulProjectDetailTextNodeChildMdxInternalDescription = 43,
  ChildContentfulProjectDetailTextNodeChildMdxInternalFieldOwners = 44,
  ChildContentfulProjectDetailTextNodeChildMdxInternalIgnoreType = 45,
  ChildContentfulProjectDetailTextNodeChildMdxInternalMediaType = 46,
  ChildContentfulProjectDetailTextNodeChildMdxInternalOwner = 47,
  ChildContentfulProjectDetailTextNodeChildMdxInternalType = 48,
  ChildContentfulProjectDetailTextNodeChildMdxMdxAst = 49,
  ChildContentfulProjectDetailTextNodeChildMdxParentChildren = 50,
  ChildContentfulProjectDetailTextNodeChildMdxParentId = 51,
  ChildContentfulProjectDetailTextNodeChildMdxRawBody = 52,
  ChildContentfulProjectDetailTextNodeChildMdxSlug = 53,
  ChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 54,
  ChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 55,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountParagraphs = 56,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountSentences = 57,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountWords = 58,
  ChildContentfulProjectDetailTextNodeChildren = 59,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 60,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 61,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 62,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenId = 63,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 64,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 65,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 66,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 67,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 68,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsId = 69,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 70,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 71,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 72,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 73,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContent = 74,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 75,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalDescription = 76,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 77,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 78,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 79,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalOwner = 80,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalType = 81,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentChildren = 82,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentId = 83,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 84,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 85,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 86,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 87,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 88,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountWords = 89,
  ChildContentfulProjectDetailTextNodeChildrenMdx = 90,
  ChildContentfulProjectDetailTextNodeChildrenMdxBody = 91,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildren = 92,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildrenChildren = 93,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildrenId = 94,
  ChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 95,
  ChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 96,
  ChildContentfulProjectDetailTextNodeChildrenMdxFrontmatterTitle = 97,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 98,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadingsDepth = 99,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadingsValue = 100,
  ChildContentfulProjectDetailTextNodeChildrenMdxHtml = 101,
  ChildContentfulProjectDetailTextNodeChildrenMdxId = 102,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalContent = 103,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalContentDigest = 104,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalDescription = 105,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalFieldOwners = 106,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalIgnoreType = 107,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalMediaType = 108,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalOwner = 109,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalType = 110,
  ChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 111,
  ChildContentfulProjectDetailTextNodeChildrenMdxParentChildren = 112,
  ChildContentfulProjectDetailTextNodeChildrenMdxParentId = 113,
  ChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 114,
  ChildContentfulProjectDetailTextNodeChildrenMdxSlug = 115,
  ChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 116,
  ChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 117,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountParagraphs = 118,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountSentences = 119,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountWords = 120,
  ChildContentfulProjectDetailTextNodeChildrenChildren = 121,
  ChildContentfulProjectDetailTextNodeChildrenChildrenChildren = 122,
  ChildContentfulProjectDetailTextNodeChildrenChildrenId = 123,
  ChildContentfulProjectDetailTextNodeChildrenId = 124,
  ChildContentfulProjectDetailTextNodeChildrenInternalContent = 125,
  ChildContentfulProjectDetailTextNodeChildrenInternalContentDigest = 126,
  ChildContentfulProjectDetailTextNodeChildrenInternalDescription = 127,
  ChildContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 128,
  ChildContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 129,
  ChildContentfulProjectDetailTextNodeChildrenInternalMediaType = 130,
  ChildContentfulProjectDetailTextNodeChildrenInternalOwner = 131,
  ChildContentfulProjectDetailTextNodeChildrenInternalType = 132,
  ChildContentfulProjectDetailTextNodeChildrenParentChildren = 133,
  ChildContentfulProjectDetailTextNodeChildrenParentId = 134,
  ChildContentfulProjectDetailTextNodeDetail = 135,
  ChildContentfulProjectDetailTextNodeId = 136,
  ChildContentfulProjectDetailTextNodeInternalContent = 137,
  ChildContentfulProjectDetailTextNodeInternalContentDigest = 138,
  ChildContentfulProjectDetailTextNodeInternalDescription = 139,
  ChildContentfulProjectDetailTextNodeInternalFieldOwners = 140,
  ChildContentfulProjectDetailTextNodeInternalIgnoreType = 141,
  ChildContentfulProjectDetailTextNodeInternalMediaType = 142,
  ChildContentfulProjectDetailTextNodeInternalOwner = 143,
  ChildContentfulProjectDetailTextNodeInternalType = 144,
  ChildContentfulProjectDetailTextNodeParentChildren = 145,
  ChildContentfulProjectDetailTextNodeParentChildrenChildren = 146,
  ChildContentfulProjectDetailTextNodeParentChildrenId = 147,
  ChildContentfulProjectDetailTextNodeParentId = 148,
  ChildContentfulProjectDetailTextNodeParentInternalContent = 149,
  ChildContentfulProjectDetailTextNodeParentInternalContentDigest = 150,
  ChildContentfulProjectDetailTextNodeParentInternalDescription = 151,
  ChildContentfulProjectDetailTextNodeParentInternalFieldOwners = 152,
  ChildContentfulProjectDetailTextNodeParentInternalIgnoreType = 153,
  ChildContentfulProjectDetailTextNodeParentInternalMediaType = 154,
  ChildContentfulProjectDetailTextNodeParentInternalOwner = 155,
  ChildContentfulProjectDetailTextNodeParentInternalType = 156,
  ChildContentfulProjectDetailTextNodeParentParentChildren = 157,
  ChildContentfulProjectDetailTextNodeParentParentId = 158,
  ChildContentfulProjectDetailTextNodeSysType = 159,
  Children = 160,
  ChildrenContentfulProjectDetailTextNode = 161,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 162,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildrenChildren = 163,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildrenId = 164,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 165,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 166,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkFrontmatterTitle = 167,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 168,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsDepth = 169,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsId = 170,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsValue = 171,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 172,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 173,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkId = 174,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalContent = 175,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalContentDigest = 176,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalDescription = 177,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalFieldOwners = 178,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalIgnoreType = 179,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalMediaType = 180,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalOwner = 181,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalType = 182,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkParentChildren = 183,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkParentId = 184,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 185,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 186,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 187,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountParagraphs = 188,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountSentences = 189,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountWords = 190,
  ChildrenContentfulProjectDetailTextNodeChildMdxBody = 191,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildren = 192,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildrenChildren = 193,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildrenId = 194,
  ChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 195,
  ChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 196,
  ChildrenContentfulProjectDetailTextNodeChildMdxFrontmatterTitle = 197,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 198,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadingsDepth = 199,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadingsValue = 200,
  ChildrenContentfulProjectDetailTextNodeChildMdxHtml = 201,
  ChildrenContentfulProjectDetailTextNodeChildMdxId = 202,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalContent = 203,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalContentDigest = 204,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalDescription = 205,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalFieldOwners = 206,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalIgnoreType = 207,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalMediaType = 208,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalOwner = 209,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalType = 210,
  ChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 211,
  ChildrenContentfulProjectDetailTextNodeChildMdxParentChildren = 212,
  ChildrenContentfulProjectDetailTextNodeChildMdxParentId = 213,
  ChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 214,
  ChildrenContentfulProjectDetailTextNodeChildMdxSlug = 215,
  ChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 216,
  ChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 217,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountParagraphs = 218,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountSentences = 219,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountWords = 220,
  ChildrenContentfulProjectDetailTextNodeChildren = 221,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 222,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 223,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 224,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenId = 225,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 226,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 227,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 228,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 229,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 230,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsId = 231,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 232,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 233,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 234,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 235,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContent = 236,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 237,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalDescription = 238,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 239,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 240,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 241,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalOwner = 242,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalType = 243,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentChildren = 244,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentId = 245,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 246,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 247,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 248,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 249,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 250,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountWords = 251,
  ChildrenContentfulProjectDetailTextNodeChildrenMdx = 252,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 253,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 254,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildrenChildren = 255,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildrenId = 256,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 257,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 258,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxFrontmatterTitle = 259,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 260,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadingsDepth = 261,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadingsValue = 262,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 263,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxId = 264,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalContent = 265,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalContentDigest = 266,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalDescription = 267,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalFieldOwners = 268,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalIgnoreType = 269,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalMediaType = 270,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalOwner = 271,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalType = 272,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 273,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxParentChildren = 274,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxParentId = 275,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 276,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 277,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 278,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 279,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountParagraphs = 280,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountSentences = 281,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountWords = 282,
  ChildrenContentfulProjectDetailTextNodeChildrenChildren = 283,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenChildren = 284,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenId = 285,
  ChildrenContentfulProjectDetailTextNodeChildrenId = 286,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContent = 287,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContentDigest = 288,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalDescription = 289,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 290,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 291,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalMediaType = 292,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalOwner = 293,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalType = 294,
  ChildrenContentfulProjectDetailTextNodeChildrenParentChildren = 295,
  ChildrenContentfulProjectDetailTextNodeChildrenParentId = 296,
  ChildrenContentfulProjectDetailTextNodeDetail = 297,
  ChildrenContentfulProjectDetailTextNodeId = 298,
  ChildrenContentfulProjectDetailTextNodeInternalContent = 299,
  ChildrenContentfulProjectDetailTextNodeInternalContentDigest = 300,
  ChildrenContentfulProjectDetailTextNodeInternalDescription = 301,
  ChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 302,
  ChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 303,
  ChildrenContentfulProjectDetailTextNodeInternalMediaType = 304,
  ChildrenContentfulProjectDetailTextNodeInternalOwner = 305,
  ChildrenContentfulProjectDetailTextNodeInternalType = 306,
  ChildrenContentfulProjectDetailTextNodeParentChildren = 307,
  ChildrenContentfulProjectDetailTextNodeParentChildrenChildren = 308,
  ChildrenContentfulProjectDetailTextNodeParentChildrenId = 309,
  ChildrenContentfulProjectDetailTextNodeParentId = 310,
  ChildrenContentfulProjectDetailTextNodeParentInternalContent = 311,
  ChildrenContentfulProjectDetailTextNodeParentInternalContentDigest = 312,
  ChildrenContentfulProjectDetailTextNodeParentInternalDescription = 313,
  ChildrenContentfulProjectDetailTextNodeParentInternalFieldOwners = 314,
  ChildrenContentfulProjectDetailTextNodeParentInternalIgnoreType = 315,
  ChildrenContentfulProjectDetailTextNodeParentInternalMediaType = 316,
  ChildrenContentfulProjectDetailTextNodeParentInternalOwner = 317,
  ChildrenContentfulProjectDetailTextNodeParentInternalType = 318,
  ChildrenContentfulProjectDetailTextNodeParentParentChildren = 319,
  ChildrenContentfulProjectDetailTextNodeParentParentId = 320,
  ChildrenContentfulProjectDetailTextNodeSysType = 321,
  ChildrenChildren = 322,
  ChildrenChildrenChildren = 323,
  ChildrenChildrenChildrenChildren = 324,
  ChildrenChildrenChildrenId = 325,
  ChildrenChildrenId = 326,
  ChildrenChildrenInternalContent = 327,
  ChildrenChildrenInternalContentDigest = 328,
  ChildrenChildrenInternalDescription = 329,
  ChildrenChildrenInternalFieldOwners = 330,
  ChildrenChildrenInternalIgnoreType = 331,
  ChildrenChildrenInternalMediaType = 332,
  ChildrenChildrenInternalOwner = 333,
  ChildrenChildrenInternalType = 334,
  ChildrenChildrenParentChildren = 335,
  ChildrenChildrenParentId = 336,
  ChildrenId = 337,
  ChildrenInternalContent = 338,
  ChildrenInternalContentDigest = 339,
  ChildrenInternalDescription = 340,
  ChildrenInternalFieldOwners = 341,
  ChildrenInternalIgnoreType = 342,
  ChildrenInternalMediaType = 343,
  ChildrenInternalOwner = 344,
  ChildrenInternalType = 345,
  ChildrenParentChildren = 346,
  ChildrenParentChildrenChildren = 347,
  ChildrenParentChildrenId = 348,
  ChildrenParentId = 349,
  ChildrenParentInternalContent = 350,
  ChildrenParentInternalContentDigest = 351,
  ChildrenParentInternalDescription = 352,
  ChildrenParentInternalFieldOwners = 353,
  ChildrenParentInternalIgnoreType = 354,
  ChildrenParentInternalMediaType = 355,
  ChildrenParentInternalOwner = 356,
  ChildrenParentInternalType = 357,
  ChildrenParentParentChildren = 358,
  ChildrenParentParentId = 359,
  ContentfulId = 360,
  CreatedAt = 361,
  DetailChildMarkdownRemarkChildren = 362,
  DetailChildMarkdownRemarkChildrenChildren = 363,
  DetailChildMarkdownRemarkChildrenId = 364,
  DetailChildMarkdownRemarkExcerpt = 365,
  DetailChildMarkdownRemarkExcerptAst = 366,
  DetailChildMarkdownRemarkFrontmatterTitle = 367,
  DetailChildMarkdownRemarkHeadings = 368,
  DetailChildMarkdownRemarkHeadingsDepth = 369,
  DetailChildMarkdownRemarkHeadingsId = 370,
  DetailChildMarkdownRemarkHeadingsValue = 371,
  DetailChildMarkdownRemarkHtml = 372,
  DetailChildMarkdownRemarkHtmlAst = 373,
  DetailChildMarkdownRemarkId = 374,
  DetailChildMarkdownRemarkInternalContent = 375,
  DetailChildMarkdownRemarkInternalContentDigest = 376,
  DetailChildMarkdownRemarkInternalDescription = 377,
  DetailChildMarkdownRemarkInternalFieldOwners = 378,
  DetailChildMarkdownRemarkInternalIgnoreType = 379,
  DetailChildMarkdownRemarkInternalMediaType = 380,
  DetailChildMarkdownRemarkInternalOwner = 381,
  DetailChildMarkdownRemarkInternalType = 382,
  DetailChildMarkdownRemarkParentChildren = 383,
  DetailChildMarkdownRemarkParentId = 384,
  DetailChildMarkdownRemarkRawMarkdownBody = 385,
  DetailChildMarkdownRemarkTableOfContents = 386,
  DetailChildMarkdownRemarkTimeToRead = 387,
  DetailChildMarkdownRemarkWordCountParagraphs = 388,
  DetailChildMarkdownRemarkWordCountSentences = 389,
  DetailChildMarkdownRemarkWordCountWords = 390,
  DetailChildMdxBody = 391,
  DetailChildMdxChildren = 392,
  DetailChildMdxChildrenChildren = 393,
  DetailChildMdxChildrenId = 394,
  DetailChildMdxExcerpt = 395,
  DetailChildMdxFileAbsolutePath = 396,
  DetailChildMdxFrontmatterTitle = 397,
  DetailChildMdxHeadings = 398,
  DetailChildMdxHeadingsDepth = 399,
  DetailChildMdxHeadingsValue = 400,
  DetailChildMdxHtml = 401,
  DetailChildMdxId = 402,
  DetailChildMdxInternalContent = 403,
  DetailChildMdxInternalContentDigest = 404,
  DetailChildMdxInternalDescription = 405,
  DetailChildMdxInternalFieldOwners = 406,
  DetailChildMdxInternalIgnoreType = 407,
  DetailChildMdxInternalMediaType = 408,
  DetailChildMdxInternalOwner = 409,
  DetailChildMdxInternalType = 410,
  DetailChildMdxMdxAst = 411,
  DetailChildMdxParentChildren = 412,
  DetailChildMdxParentId = 413,
  DetailChildMdxRawBody = 414,
  DetailChildMdxSlug = 415,
  DetailChildMdxTableOfContents = 416,
  DetailChildMdxTimeToRead = 417,
  DetailChildMdxWordCountParagraphs = 418,
  DetailChildMdxWordCountSentences = 419,
  DetailChildMdxWordCountWords = 420,
  DetailChildren = 421,
  DetailChildrenMarkdownRemark = 422,
  DetailChildrenMarkdownRemarkChildren = 423,
  DetailChildrenMarkdownRemarkChildrenChildren = 424,
  DetailChildrenMarkdownRemarkChildrenId = 425,
  DetailChildrenMarkdownRemarkExcerpt = 426,
  DetailChildrenMarkdownRemarkExcerptAst = 427,
  DetailChildrenMarkdownRemarkFrontmatterTitle = 428,
  DetailChildrenMarkdownRemarkHeadings = 429,
  DetailChildrenMarkdownRemarkHeadingsDepth = 430,
  DetailChildrenMarkdownRemarkHeadingsId = 431,
  DetailChildrenMarkdownRemarkHeadingsValue = 432,
  DetailChildrenMarkdownRemarkHtml = 433,
  DetailChildrenMarkdownRemarkHtmlAst = 434,
  DetailChildrenMarkdownRemarkId = 435,
  DetailChildrenMarkdownRemarkInternalContent = 436,
  DetailChildrenMarkdownRemarkInternalContentDigest = 437,
  DetailChildrenMarkdownRemarkInternalDescription = 438,
  DetailChildrenMarkdownRemarkInternalFieldOwners = 439,
  DetailChildrenMarkdownRemarkInternalIgnoreType = 440,
  DetailChildrenMarkdownRemarkInternalMediaType = 441,
  DetailChildrenMarkdownRemarkInternalOwner = 442,
  DetailChildrenMarkdownRemarkInternalType = 443,
  DetailChildrenMarkdownRemarkParentChildren = 444,
  DetailChildrenMarkdownRemarkParentId = 445,
  DetailChildrenMarkdownRemarkRawMarkdownBody = 446,
  DetailChildrenMarkdownRemarkTableOfContents = 447,
  DetailChildrenMarkdownRemarkTimeToRead = 448,
  DetailChildrenMarkdownRemarkWordCountParagraphs = 449,
  DetailChildrenMarkdownRemarkWordCountSentences = 450,
  DetailChildrenMarkdownRemarkWordCountWords = 451,
  DetailChildrenMdx = 452,
  DetailChildrenMdxBody = 453,
  DetailChildrenMdxChildren = 454,
  DetailChildrenMdxChildrenChildren = 455,
  DetailChildrenMdxChildrenId = 456,
  DetailChildrenMdxExcerpt = 457,
  DetailChildrenMdxFileAbsolutePath = 458,
  DetailChildrenMdxFrontmatterTitle = 459,
  DetailChildrenMdxHeadings = 460,
  DetailChildrenMdxHeadingsDepth = 461,
  DetailChildrenMdxHeadingsValue = 462,
  DetailChildrenMdxHtml = 463,
  DetailChildrenMdxId = 464,
  DetailChildrenMdxInternalContent = 465,
  DetailChildrenMdxInternalContentDigest = 466,
  DetailChildrenMdxInternalDescription = 467,
  DetailChildrenMdxInternalFieldOwners = 468,
  DetailChildrenMdxInternalIgnoreType = 469,
  DetailChildrenMdxInternalMediaType = 470,
  DetailChildrenMdxInternalOwner = 471,
  DetailChildrenMdxInternalType = 472,
  DetailChildrenMdxMdxAst = 473,
  DetailChildrenMdxParentChildren = 474,
  DetailChildrenMdxParentId = 475,
  DetailChildrenMdxRawBody = 476,
  DetailChildrenMdxSlug = 477,
  DetailChildrenMdxTableOfContents = 478,
  DetailChildrenMdxTimeToRead = 479,
  DetailChildrenMdxWordCountParagraphs = 480,
  DetailChildrenMdxWordCountSentences = 481,
  DetailChildrenMdxWordCountWords = 482,
  DetailChildrenChildren = 483,
  DetailChildrenChildrenChildren = 484,
  DetailChildrenChildrenId = 485,
  DetailChildrenId = 486,
  DetailChildrenInternalContent = 487,
  DetailChildrenInternalContentDigest = 488,
  DetailChildrenInternalDescription = 489,
  DetailChildrenInternalFieldOwners = 490,
  DetailChildrenInternalIgnoreType = 491,
  DetailChildrenInternalMediaType = 492,
  DetailChildrenInternalOwner = 493,
  DetailChildrenInternalType = 494,
  DetailChildrenParentChildren = 495,
  DetailChildrenParentId = 496,
  DetailDetail = 497,
  DetailId = 498,
  DetailInternalContent = 499,
  DetailInternalContentDigest = 500,
  DetailInternalDescription = 501,
  DetailInternalFieldOwners = 502,
  DetailInternalIgnoreType = 503,
  DetailInternalMediaType = 504,
  DetailInternalOwner = 505,
  DetailInternalType = 506,
  DetailParentChildren = 507,
  DetailParentChildrenChildren = 508,
  DetailParentChildrenId = 509,
  DetailParentId = 510,
  DetailParentInternalContent = 511,
  DetailParentInternalContentDigest = 512,
  DetailParentInternalDescription = 513,
  DetailParentInternalFieldOwners = 514,
  DetailParentInternalIgnoreType = 515,
  DetailParentInternalMediaType = 516,
  DetailParentInternalOwner = 517,
  DetailParentInternalType = 518,
  DetailParentParentChildren = 519,
  DetailParentParentId = 520,
  DetailSysType = 521,
  EndDate = 522,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 523,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 524,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 525,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 526,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 527,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 528,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 529,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 530,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 531,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 532,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 533,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 534,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 535,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 536,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 537,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 538,
  IconChildContentfulIconSvgTextNodeChildMdxId = 539,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 540,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 541,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 542,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 543,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 544,
  IconChildContentfulIconSvgTextNodeChildren = 545,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 546,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 547,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 548,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 549,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 550,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 551,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 552,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 553,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 554,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 555,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 556,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 557,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 558,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 559,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 560,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 561,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 562,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 563,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 564,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 565,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 566,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 567,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 568,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 569,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 570,
  IconChildContentfulIconSvgTextNodeChildrenId = 571,
  IconChildContentfulIconSvgTextNodeId = 572,
  IconChildContentfulIconSvgTextNodeInternalContent = 573,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 574,
  IconChildContentfulIconSvgTextNodeInternalDescription = 575,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 576,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 577,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 578,
  IconChildContentfulIconSvgTextNodeInternalOwner = 579,
  IconChildContentfulIconSvgTextNodeInternalType = 580,
  IconChildContentfulIconSvgTextNodeParentChildren = 581,
  IconChildContentfulIconSvgTextNodeParentId = 582,
  IconChildContentfulIconSvgTextNodeSvg = 583,
  IconChildContentfulIconSvgTextNodeSysType = 584,
  IconChildren = 585,
  IconChildrenContentfulIconSvgTextNode = 586,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 587,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 588,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 589,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 590,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 591,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 592,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 593,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 594,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 595,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 596,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 597,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 598,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 599,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 600,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 601,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 602,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 603,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 604,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 605,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 606,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 607,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 608,
  IconChildrenContentfulIconSvgTextNodeChildren = 609,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 610,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 611,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 612,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 613,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 614,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 615,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 616,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 617,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 618,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 619,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 620,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 621,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 622,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 623,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 624,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 625,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 626,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 627,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 628,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 629,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 630,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 631,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 632,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 633,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 634,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 635,
  IconChildrenContentfulIconSvgTextNodeId = 636,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 637,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 638,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 639,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 640,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 641,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 642,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 643,
  IconChildrenContentfulIconSvgTextNodeInternalType = 644,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 645,
  IconChildrenContentfulIconSvgTextNodeParentId = 646,
  IconChildrenContentfulIconSvgTextNodeSvg = 647,
  IconChildrenContentfulIconSvgTextNodeSysType = 648,
  IconChildrenChildren = 649,
  IconChildrenChildrenChildren = 650,
  IconChildrenChildrenId = 651,
  IconChildrenId = 652,
  IconChildrenInternalContent = 653,
  IconChildrenInternalContentDigest = 654,
  IconChildrenInternalDescription = 655,
  IconChildrenInternalFieldOwners = 656,
  IconChildrenInternalIgnoreType = 657,
  IconChildrenInternalMediaType = 658,
  IconChildrenInternalOwner = 659,
  IconChildrenInternalType = 660,
  IconChildrenParentChildren = 661,
  IconChildrenParentId = 662,
  IconContact = 663,
  IconContactChildren = 664,
  IconContactChildrenChildren = 665,
  IconContactChildrenId = 666,
  IconContactContentfulId = 667,
  IconContactCreatedAt = 668,
  IconContactHref = 669,
  IconContactIconSvgDarkChildren = 670,
  IconContactIconSvgDarkContentfulId = 671,
  IconContactIconSvgDarkCreatedAt = 672,
  IconContactIconSvgDarkDescription = 673,
  IconContactIconSvgDarkGatsbyImageData = 674,
  IconContactIconSvgDarkId = 675,
  IconContactIconSvgDarkNodeLocale = 676,
  IconContactIconSvgDarkSpaceId = 677,
  IconContactIconSvgDarkTitle = 678,
  IconContactIconSvgDarkUpdatedAt = 679,
  IconContactIconSvgLightChildren = 680,
  IconContactIconSvgLightContentfulId = 681,
  IconContactIconSvgLightCreatedAt = 682,
  IconContactIconSvgLightDescription = 683,
  IconContactIconSvgLightGatsbyImageData = 684,
  IconContactIconSvgLightId = 685,
  IconContactIconSvgLightNodeLocale = 686,
  IconContactIconSvgLightSpaceId = 687,
  IconContactIconSvgLightTitle = 688,
  IconContactIconSvgLightUpdatedAt = 689,
  IconContactIconChildren = 690,
  IconContactIconChildrenContentfulIconSvgTextNode = 691,
  IconContactIconContact = 692,
  IconContactIconContentfulId = 693,
  IconContactIconCreatedAt = 694,
  IconContactIconHistory = 695,
  IconContactIconId = 696,
  IconContactIconName = 697,
  IconContactIconNodeLocale = 698,
  IconContactIconOss = 699,
  IconContactIconProject = 700,
  IconContactIconSpaceId = 701,
  IconContactIconUpdatedAt = 702,
  IconContactIconWhatICanDo = 703,
  IconContactId = 704,
  IconContactInternalContent = 705,
  IconContactInternalContentDigest = 706,
  IconContactInternalDescription = 707,
  IconContactInternalFieldOwners = 708,
  IconContactInternalIgnoreType = 709,
  IconContactInternalMediaType = 710,
  IconContactInternalOwner = 711,
  IconContactInternalType = 712,
  IconContactName = 713,
  IconContactNodeLocale = 714,
  IconContactParentChildren = 715,
  IconContactParentId = 716,
  IconContactSortKey = 717,
  IconContactSpaceId = 718,
  IconContactSubName = 719,
  IconContactSysRevision = 720,
  IconContactSysType = 721,
  IconContactUpdatedAt = 722,
  IconContentfulId = 723,
  IconCreatedAt = 724,
  IconHistory = 725,
  IconHistoryChildren = 726,
  IconHistoryChildrenChildren = 727,
  IconHistoryChildrenId = 728,
  IconHistoryContentfulId = 729,
  IconHistoryCreatedAt = 730,
  IconHistoryDate = 731,
  IconHistoryIconChildren = 732,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 733,
  IconHistoryIconContact = 734,
  IconHistoryIconContentfulId = 735,
  IconHistoryIconCreatedAt = 736,
  IconHistoryIconHistory = 737,
  IconHistoryIconId = 738,
  IconHistoryIconName = 739,
  IconHistoryIconNodeLocale = 740,
  IconHistoryIconOss = 741,
  IconHistoryIconProject = 742,
  IconHistoryIconSpaceId = 743,
  IconHistoryIconUpdatedAt = 744,
  IconHistoryIconWhatICanDo = 745,
  IconHistoryId = 746,
  IconHistoryInternalContent = 747,
  IconHistoryInternalContentDigest = 748,
  IconHistoryInternalDescription = 749,
  IconHistoryInternalFieldOwners = 750,
  IconHistoryInternalIgnoreType = 751,
  IconHistoryInternalMediaType = 752,
  IconHistoryInternalOwner = 753,
  IconHistoryInternalType = 754,
  IconHistoryName = 755,
  IconHistoryNodeLocale = 756,
  IconHistoryParentChildren = 757,
  IconHistoryParentId = 758,
  IconHistorySpaceId = 759,
  IconHistorySubName = 760,
  IconHistorySysRevision = 761,
  IconHistorySysType = 762,
  IconHistoryUpdatedAt = 763,
  IconId = 764,
  IconInternalContent = 765,
  IconInternalContentDigest = 766,
  IconInternalDescription = 767,
  IconInternalFieldOwners = 768,
  IconInternalIgnoreType = 769,
  IconInternalMediaType = 770,
  IconInternalOwner = 771,
  IconInternalType = 772,
  IconName = 773,
  IconNodeLocale = 774,
  IconOss = 775,
  IconOssChildContentfulOssDetailTextNodeChildren = 776,
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 777,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 778,
  IconOssChildContentfulOssDetailTextNodeDetail = 779,
  IconOssChildContentfulOssDetailTextNodeId = 780,
  IconOssChildren = 781,
  IconOssChildrenContentfulOssDetailTextNode = 782,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 783,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 784,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 785,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 786,
  IconOssChildrenContentfulOssDetailTextNodeId = 787,
  IconOssChildrenChildren = 788,
  IconOssChildrenId = 789,
  IconOssContentfulId = 790,
  IconOssCreatedAt = 791,
  IconOssDetailChildren = 792,
  IconOssDetailChildrenMarkdownRemark = 793,
  IconOssDetailChildrenMdx = 794,
  IconOssDetailDetail = 795,
  IconOssDetailId = 796,
  IconOssHref = 797,
  IconOssIconChildren = 798,
  IconOssIconChildrenContentfulIconSvgTextNode = 799,
  IconOssIconContact = 800,
  IconOssIconContentfulId = 801,
  IconOssIconCreatedAt = 802,
  IconOssIconHistory = 803,
  IconOssIconId = 804,
  IconOssIconName = 805,
  IconOssIconNodeLocale = 806,
  IconOssIconOss = 807,
  IconOssIconProject = 808,
  IconOssIconSpaceId = 809,
  IconOssIconUpdatedAt = 810,
  IconOssIconWhatICanDo = 811,
  IconOssId = 812,
  IconOssImageChildren = 813,
  IconOssImageContentfulId = 814,
  IconOssImageCreatedAt = 815,
  IconOssImageDescription = 816,
  IconOssImageGatsbyImageData = 817,
  IconOssImageId = 818,
  IconOssImageNodeLocale = 819,
  IconOssImageSpaceId = 820,
  IconOssImageTitle = 821,
  IconOssImageUpdatedAt = 822,
  IconOssInternalContent = 823,
  IconOssInternalContentDigest = 824,
  IconOssInternalDescription = 825,
  IconOssInternalFieldOwners = 826,
  IconOssInternalIgnoreType = 827,
  IconOssInternalMediaType = 828,
  IconOssInternalOwner = 829,
  IconOssInternalType = 830,
  IconOssName = 831,
  IconOssNodeLocale = 832,
  IconOssParentChildren = 833,
  IconOssParentId = 834,
  IconOssSpaceId = 835,
  IconOssStartDate = 836,
  IconOssSubName = 837,
  IconOssSysRevision = 838,
  IconOssSysType = 839,
  IconOssTags = 840,
  IconOssTagsBlogPost = 841,
  IconOssTagsChildren = 842,
  IconOssTagsContentfulId = 843,
  IconOssTagsCreatedAt = 844,
  IconOssTagsId = 845,
  IconOssTagsLevel = 846,
  IconOssTagsName = 847,
  IconOssTagsNodeLocale = 848,
  IconOssTagsOss = 849,
  IconOssTagsProject = 850,
  IconOssTagsSkillMap = 851,
  IconOssTagsSpaceId = 852,
  IconOssTagsUpdatedAt = 853,
  IconOssUpdatedAt = 854,
  IconParentChildren = 855,
  IconParentChildrenChildren = 856,
  IconParentChildrenId = 857,
  IconParentId = 858,
  IconParentInternalContent = 859,
  IconParentInternalContentDigest = 860,
  IconParentInternalDescription = 861,
  IconParentInternalFieldOwners = 862,
  IconParentInternalIgnoreType = 863,
  IconParentInternalMediaType = 864,
  IconParentInternalOwner = 865,
  IconParentInternalType = 866,
  IconParentParentChildren = 867,
  IconParentParentId = 868,
  IconProject = 869,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 870,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 871,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 872,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 873,
  IconProjectChildContentfulProjectDetailTextNodeId = 874,
  IconProjectChildren = 875,
  IconProjectChildrenContentfulProjectDetailTextNode = 876,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 877,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 878,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 879,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 880,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 881,
  IconProjectChildrenChildren = 882,
  IconProjectChildrenId = 883,
  IconProjectContentfulId = 884,
  IconProjectCreatedAt = 885,
  IconProjectDetailChildren = 886,
  IconProjectDetailChildrenMarkdownRemark = 887,
  IconProjectDetailChildrenMdx = 888,
  IconProjectDetailDetail = 889,
  IconProjectDetailId = 890,
  IconProjectEndDate = 891,
  IconProjectIconChildren = 892,
  IconProjectIconChildrenContentfulIconSvgTextNode = 893,
  IconProjectIconContact = 894,
  IconProjectIconContentfulId = 895,
  IconProjectIconCreatedAt = 896,
  IconProjectIconHistory = 897,
  IconProjectIconId = 898,
  IconProjectIconName = 899,
  IconProjectIconNodeLocale = 900,
  IconProjectIconOss = 901,
  IconProjectIconProject = 902,
  IconProjectIconSpaceId = 903,
  IconProjectIconUpdatedAt = 904,
  IconProjectIconWhatICanDo = 905,
  IconProjectId = 906,
  IconProjectInternalContent = 907,
  IconProjectInternalContentDigest = 908,
  IconProjectInternalDescription = 909,
  IconProjectInternalFieldOwners = 910,
  IconProjectInternalIgnoreType = 911,
  IconProjectInternalMediaType = 912,
  IconProjectInternalOwner = 913,
  IconProjectInternalType = 914,
  IconProjectName = 915,
  IconProjectNodeLocale = 916,
  IconProjectParentChildren = 917,
  IconProjectParentId = 918,
  IconProjectSpaceId = 919,
  IconProjectStartDate = 920,
  IconProjectSubName = 921,
  IconProjectSysRevision = 922,
  IconProjectSysType = 923,
  IconProjectTags = 924,
  IconProjectTagsBlogPost = 925,
  IconProjectTagsChildren = 926,
  IconProjectTagsContentfulId = 927,
  IconProjectTagsCreatedAt = 928,
  IconProjectTagsId = 929,
  IconProjectTagsLevel = 930,
  IconProjectTagsName = 931,
  IconProjectTagsNodeLocale = 932,
  IconProjectTagsOss = 933,
  IconProjectTagsProject = 934,
  IconProjectTagsSkillMap = 935,
  IconProjectTagsSpaceId = 936,
  IconProjectTagsUpdatedAt = 937,
  IconProjectUpdatedAt = 938,
  IconSpaceId = 939,
  IconSvgChildMarkdownRemarkChildren = 940,
  IconSvgChildMarkdownRemarkExcerpt = 941,
  IconSvgChildMarkdownRemarkExcerptAst = 942,
  IconSvgChildMarkdownRemarkHeadings = 943,
  IconSvgChildMarkdownRemarkHtml = 944,
  IconSvgChildMarkdownRemarkHtmlAst = 945,
  IconSvgChildMarkdownRemarkId = 946,
  IconSvgChildMarkdownRemarkRawMarkdownBody = 947,
  IconSvgChildMarkdownRemarkTableOfContents = 948,
  IconSvgChildMarkdownRemarkTimeToRead = 949,
  IconSvgChildMdxBody = 950,
  IconSvgChildMdxChildren = 951,
  IconSvgChildMdxExcerpt = 952,
  IconSvgChildMdxFileAbsolutePath = 953,
  IconSvgChildMdxHeadings = 954,
  IconSvgChildMdxHtml = 955,
  IconSvgChildMdxId = 956,
  IconSvgChildMdxMdxAst = 957,
  IconSvgChildMdxRawBody = 958,
  IconSvgChildMdxSlug = 959,
  IconSvgChildMdxTableOfContents = 960,
  IconSvgChildMdxTimeToRead = 961,
  IconSvgChildren = 962,
  IconSvgChildrenMarkdownRemark = 963,
  IconSvgChildrenMarkdownRemarkChildren = 964,
  IconSvgChildrenMarkdownRemarkExcerpt = 965,
  IconSvgChildrenMarkdownRemarkExcerptAst = 966,
  IconSvgChildrenMarkdownRemarkHeadings = 967,
  IconSvgChildrenMarkdownRemarkHtml = 968,
  IconSvgChildrenMarkdownRemarkHtmlAst = 969,
  IconSvgChildrenMarkdownRemarkId = 970,
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 971,
  IconSvgChildrenMarkdownRemarkTableOfContents = 972,
  IconSvgChildrenMarkdownRemarkTimeToRead = 973,
  IconSvgChildrenMdx = 974,
  IconSvgChildrenMdxBody = 975,
  IconSvgChildrenMdxChildren = 976,
  IconSvgChildrenMdxExcerpt = 977,
  IconSvgChildrenMdxFileAbsolutePath = 978,
  IconSvgChildrenMdxHeadings = 979,
  IconSvgChildrenMdxHtml = 980,
  IconSvgChildrenMdxId = 981,
  IconSvgChildrenMdxMdxAst = 982,
  IconSvgChildrenMdxRawBody = 983,
  IconSvgChildrenMdxSlug = 984,
  IconSvgChildrenMdxTableOfContents = 985,
  IconSvgChildrenMdxTimeToRead = 986,
  IconSvgChildrenChildren = 987,
  IconSvgChildrenId = 988,
  IconSvgId = 989,
  IconSvgInternalContent = 990,
  IconSvgInternalContentDigest = 991,
  IconSvgInternalDescription = 992,
  IconSvgInternalFieldOwners = 993,
  IconSvgInternalIgnoreType = 994,
  IconSvgInternalMediaType = 995,
  IconSvgInternalOwner = 996,
  IconSvgInternalType = 997,
  IconSvgParentChildren = 998,
  IconSvgParentId = 999,
  IconSvgSvg = 1000,
  IconSvgSysType = 1001,
  IconSysRevision = 1002,
  IconSysType = 1003,
  IconUpdatedAt = 1004,
  IconWhatICanDo = 1005,
  IconWhatICanDoChildren = 1006,
  IconWhatICanDoChildrenChildren = 1007,
  IconWhatICanDoChildrenId = 1008,
  IconWhatICanDoContentfulId = 1009,
  IconWhatICanDoCreatedAt = 1010,
  IconWhatICanDoIconChildren = 1011,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 1012,
  IconWhatICanDoIconContact = 1013,
  IconWhatICanDoIconContentfulId = 1014,
  IconWhatICanDoIconCreatedAt = 1015,
  IconWhatICanDoIconHistory = 1016,
  IconWhatICanDoIconId = 1017,
  IconWhatICanDoIconName = 1018,
  IconWhatICanDoIconNodeLocale = 1019,
  IconWhatICanDoIconOss = 1020,
  IconWhatICanDoIconProject = 1021,
  IconWhatICanDoIconSpaceId = 1022,
  IconWhatICanDoIconUpdatedAt = 1023,
  IconWhatICanDoIconWhatICanDo = 1024,
  IconWhatICanDoId = 1025,
  IconWhatICanDoInternalContent = 1026,
  IconWhatICanDoInternalContentDigest = 1027,
  IconWhatICanDoInternalDescription = 1028,
  IconWhatICanDoInternalFieldOwners = 1029,
  IconWhatICanDoInternalIgnoreType = 1030,
  IconWhatICanDoInternalMediaType = 1031,
  IconWhatICanDoInternalOwner = 1032,
  IconWhatICanDoInternalType = 1033,
  IconWhatICanDoName = 1034,
  IconWhatICanDoNodeLocale = 1035,
  IconWhatICanDoParentChildren = 1036,
  IconWhatICanDoParentId = 1037,
  IconWhatICanDoSortKey = 1038,
  IconWhatICanDoSpaceId = 1039,
  IconWhatICanDoSubName = 1040,
  IconWhatICanDoSysRevision = 1041,
  IconWhatICanDoSysType = 1042,
  IconWhatICanDoUpdatedAt = 1043,
  Id = 1044,
  InternalContent = 1045,
  InternalContentDigest = 1046,
  InternalDescription = 1047,
  InternalFieldOwners = 1048,
  InternalIgnoreType = 1049,
  InternalMediaType = 1050,
  InternalOwner = 1051,
  InternalType = 1052,
  Name = 1053,
  NodeLocale = 1054,
  ParentChildren = 1055,
  ParentChildrenChildren = 1056,
  ParentChildrenChildrenChildren = 1057,
  ParentChildrenChildrenId = 1058,
  ParentChildrenId = 1059,
  ParentChildrenInternalContent = 1060,
  ParentChildrenInternalContentDigest = 1061,
  ParentChildrenInternalDescription = 1062,
  ParentChildrenInternalFieldOwners = 1063,
  ParentChildrenInternalIgnoreType = 1064,
  ParentChildrenInternalMediaType = 1065,
  ParentChildrenInternalOwner = 1066,
  ParentChildrenInternalType = 1067,
  ParentChildrenParentChildren = 1068,
  ParentChildrenParentId = 1069,
  ParentId = 1070,
  ParentInternalContent = 1071,
  ParentInternalContentDigest = 1072,
  ParentInternalDescription = 1073,
  ParentInternalFieldOwners = 1074,
  ParentInternalIgnoreType = 1075,
  ParentInternalMediaType = 1076,
  ParentInternalOwner = 1077,
  ParentInternalType = 1078,
  ParentParentChildren = 1079,
  ParentParentChildrenChildren = 1080,
  ParentParentChildrenId = 1081,
  ParentParentId = 1082,
  ParentParentInternalContent = 1083,
  ParentParentInternalContentDigest = 1084,
  ParentParentInternalDescription = 1085,
  ParentParentInternalFieldOwners = 1086,
  ParentParentInternalIgnoreType = 1087,
  ParentParentInternalMediaType = 1088,
  ParentParentInternalOwner = 1089,
  ParentParentInternalType = 1090,
  ParentParentParentChildren = 1091,
  ParentParentParentId = 1092,
  SpaceId = 1093,
  StartDate = 1094,
  SubName = 1095,
  SysContentTypeSysId = 1096,
  SysContentTypeSysLinkType = 1097,
  SysContentTypeSysType = 1098,
  SysRevision = 1099,
  SysType = 1100,
  Tags = 1101,
  TagsBlogPost = 1102,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 1103,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 1104,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 1105,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 1106,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 1107,
  TagsBlogPostChildren = 1108,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 1109,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 1110,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 1111,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 1112,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 1113,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 1114,
  TagsBlogPostChildrenChildren = 1115,
  TagsBlogPostChildrenId = 1116,
  TagsBlogPostContentChildren = 1117,
  TagsBlogPostContentChildrenMarkdownRemark = 1118,
  TagsBlogPostContentChildrenMdx = 1119,
  TagsBlogPostContentContent = 1120,
  TagsBlogPostContentId = 1121,
  TagsBlogPostContentfulId = 1122,
  TagsBlogPostCreated = 1123,
  TagsBlogPostCreatedAt = 1124,
  TagsBlogPostExcerpt = 1125,
  TagsBlogPostId = 1126,
  TagsBlogPostInternalContent = 1127,
  TagsBlogPostInternalContentDigest = 1128,
  TagsBlogPostInternalDescription = 1129,
  TagsBlogPostInternalFieldOwners = 1130,
  TagsBlogPostInternalIgnoreType = 1131,
  TagsBlogPostInternalMediaType = 1132,
  TagsBlogPostInternalOwner = 1133,
  TagsBlogPostInternalType = 1134,
  TagsBlogPostNodeLocale = 1135,
  TagsBlogPostParentChildren = 1136,
  TagsBlogPostParentId = 1137,
  TagsBlogPostSlug = 1138,
  TagsBlogPostSpaceId = 1139,
  TagsBlogPostSysRevision = 1140,
  TagsBlogPostSysType = 1141,
  TagsBlogPostTags = 1142,
  TagsBlogPostTagsBlogPost = 1143,
  TagsBlogPostTagsChildren = 1144,
  TagsBlogPostTagsContentfulId = 1145,
  TagsBlogPostTagsCreatedAt = 1146,
  TagsBlogPostTagsId = 1147,
  TagsBlogPostTagsLevel = 1148,
  TagsBlogPostTagsName = 1149,
  TagsBlogPostTagsNodeLocale = 1150,
  TagsBlogPostTagsOss = 1151,
  TagsBlogPostTagsProject = 1152,
  TagsBlogPostTagsSkillMap = 1153,
  TagsBlogPostTagsSpaceId = 1154,
  TagsBlogPostTagsUpdatedAt = 1155,
  TagsBlogPostTitle = 1156,
  TagsBlogPostUpdated = 1157,
  TagsBlogPostUpdatedAt = 1158,
  TagsChildren = 1159,
  TagsChildrenChildren = 1160,
  TagsChildrenChildrenChildren = 1161,
  TagsChildrenChildrenId = 1162,
  TagsChildrenId = 1163,
  TagsChildrenInternalContent = 1164,
  TagsChildrenInternalContentDigest = 1165,
  TagsChildrenInternalDescription = 1166,
  TagsChildrenInternalFieldOwners = 1167,
  TagsChildrenInternalIgnoreType = 1168,
  TagsChildrenInternalMediaType = 1169,
  TagsChildrenInternalOwner = 1170,
  TagsChildrenInternalType = 1171,
  TagsChildrenParentChildren = 1172,
  TagsChildrenParentId = 1173,
  TagsContentfulId = 1174,
  TagsCreatedAt = 1175,
  TagsId = 1176,
  TagsInternalContent = 1177,
  TagsInternalContentDigest = 1178,
  TagsInternalDescription = 1179,
  TagsInternalFieldOwners = 1180,
  TagsInternalIgnoreType = 1181,
  TagsInternalMediaType = 1182,
  TagsInternalOwner = 1183,
  TagsInternalType = 1184,
  TagsLevel = 1185,
  TagsName = 1186,
  TagsNodeLocale = 1187,
  TagsOss = 1188,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1189,
  TagsOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 1190,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1191,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1192,
  TagsOssChildContentfulOssDetailTextNodeId = 1193,
  TagsOssChildren = 1194,
  TagsOssChildrenContentfulOssDetailTextNode = 1195,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1196,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 1197,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1198,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1199,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1200,
  TagsOssChildrenChildren = 1201,
  TagsOssChildrenId = 1202,
  TagsOssContentfulId = 1203,
  TagsOssCreatedAt = 1204,
  TagsOssDetailChildren = 1205,
  TagsOssDetailChildrenMarkdownRemark = 1206,
  TagsOssDetailChildrenMdx = 1207,
  TagsOssDetailDetail = 1208,
  TagsOssDetailId = 1209,
  TagsOssHref = 1210,
  TagsOssIconChildren = 1211,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1212,
  TagsOssIconContact = 1213,
  TagsOssIconContentfulId = 1214,
  TagsOssIconCreatedAt = 1215,
  TagsOssIconHistory = 1216,
  TagsOssIconId = 1217,
  TagsOssIconName = 1218,
  TagsOssIconNodeLocale = 1219,
  TagsOssIconOss = 1220,
  TagsOssIconProject = 1221,
  TagsOssIconSpaceId = 1222,
  TagsOssIconUpdatedAt = 1223,
  TagsOssIconWhatICanDo = 1224,
  TagsOssId = 1225,
  TagsOssImageChildren = 1226,
  TagsOssImageContentfulId = 1227,
  TagsOssImageCreatedAt = 1228,
  TagsOssImageDescription = 1229,
  TagsOssImageGatsbyImageData = 1230,
  TagsOssImageId = 1231,
  TagsOssImageNodeLocale = 1232,
  TagsOssImageSpaceId = 1233,
  TagsOssImageTitle = 1234,
  TagsOssImageUpdatedAt = 1235,
  TagsOssInternalContent = 1236,
  TagsOssInternalContentDigest = 1237,
  TagsOssInternalDescription = 1238,
  TagsOssInternalFieldOwners = 1239,
  TagsOssInternalIgnoreType = 1240,
  TagsOssInternalMediaType = 1241,
  TagsOssInternalOwner = 1242,
  TagsOssInternalType = 1243,
  TagsOssName = 1244,
  TagsOssNodeLocale = 1245,
  TagsOssParentChildren = 1246,
  TagsOssParentId = 1247,
  TagsOssSpaceId = 1248,
  TagsOssStartDate = 1249,
  TagsOssSubName = 1250,
  TagsOssSysRevision = 1251,
  TagsOssSysType = 1252,
  TagsOssTags = 1253,
  TagsOssTagsBlogPost = 1254,
  TagsOssTagsChildren = 1255,
  TagsOssTagsContentfulId = 1256,
  TagsOssTagsCreatedAt = 1257,
  TagsOssTagsId = 1258,
  TagsOssTagsLevel = 1259,
  TagsOssTagsName = 1260,
  TagsOssTagsNodeLocale = 1261,
  TagsOssTagsOss = 1262,
  TagsOssTagsProject = 1263,
  TagsOssTagsSkillMap = 1264,
  TagsOssTagsSpaceId = 1265,
  TagsOssTagsUpdatedAt = 1266,
  TagsOssUpdatedAt = 1267,
  TagsParentChildren = 1268,
  TagsParentChildrenChildren = 1269,
  TagsParentChildrenId = 1270,
  TagsParentId = 1271,
  TagsParentInternalContent = 1272,
  TagsParentInternalContentDigest = 1273,
  TagsParentInternalDescription = 1274,
  TagsParentInternalFieldOwners = 1275,
  TagsParentInternalIgnoreType = 1276,
  TagsParentInternalMediaType = 1277,
  TagsParentInternalOwner = 1278,
  TagsParentInternalType = 1279,
  TagsParentParentChildren = 1280,
  TagsParentParentId = 1281,
  TagsProject = 1282,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1283,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1284,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1285,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1286,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1287,
  TagsProjectChildren = 1288,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1289,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1290,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1291,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1292,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1293,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1294,
  TagsProjectChildrenChildren = 1295,
  TagsProjectChildrenId = 1296,
  TagsProjectContentfulId = 1297,
  TagsProjectCreatedAt = 1298,
  TagsProjectDetailChildren = 1299,
  TagsProjectDetailChildrenMarkdownRemark = 1300,
  TagsProjectDetailChildrenMdx = 1301,
  TagsProjectDetailDetail = 1302,
  TagsProjectDetailId = 1303,
  TagsProjectEndDate = 1304,
  TagsProjectIconChildren = 1305,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1306,
  TagsProjectIconContact = 1307,
  TagsProjectIconContentfulId = 1308,
  TagsProjectIconCreatedAt = 1309,
  TagsProjectIconHistory = 1310,
  TagsProjectIconId = 1311,
  TagsProjectIconName = 1312,
  TagsProjectIconNodeLocale = 1313,
  TagsProjectIconOss = 1314,
  TagsProjectIconProject = 1315,
  TagsProjectIconSpaceId = 1316,
  TagsProjectIconUpdatedAt = 1317,
  TagsProjectIconWhatICanDo = 1318,
  TagsProjectId = 1319,
  TagsProjectInternalContent = 1320,
  TagsProjectInternalContentDigest = 1321,
  TagsProjectInternalDescription = 1322,
  TagsProjectInternalFieldOwners = 1323,
  TagsProjectInternalIgnoreType = 1324,
  TagsProjectInternalMediaType = 1325,
  TagsProjectInternalOwner = 1326,
  TagsProjectInternalType = 1327,
  TagsProjectName = 1328,
  TagsProjectNodeLocale = 1329,
  TagsProjectParentChildren = 1330,
  TagsProjectParentId = 1331,
  TagsProjectSpaceId = 1332,
  TagsProjectStartDate = 1333,
  TagsProjectSubName = 1334,
  TagsProjectSysRevision = 1335,
  TagsProjectSysType = 1336,
  TagsProjectTags = 1337,
  TagsProjectTagsBlogPost = 1338,
  TagsProjectTagsChildren = 1339,
  TagsProjectTagsContentfulId = 1340,
  TagsProjectTagsCreatedAt = 1341,
  TagsProjectTagsId = 1342,
  TagsProjectTagsLevel = 1343,
  TagsProjectTagsName = 1344,
  TagsProjectTagsNodeLocale = 1345,
  TagsProjectTagsOss = 1346,
  TagsProjectTagsProject = 1347,
  TagsProjectTagsSkillMap = 1348,
  TagsProjectTagsSpaceId = 1349,
  TagsProjectTagsUpdatedAt = 1350,
  TagsProjectUpdatedAt = 1351,
  TagsSkillMap = 1352,
  TagsSkillMapChildren = 1353,
  TagsSkillMapChildrenChildren = 1354,
  TagsSkillMapChildrenId = 1355,
  TagsSkillMapContentfulId = 1356,
  TagsSkillMapCreatedAt = 1357,
  TagsSkillMapExpanded = 1358,
  TagsSkillMapId = 1359,
  TagsSkillMapInternalContent = 1360,
  TagsSkillMapInternalContentDigest = 1361,
  TagsSkillMapInternalDescription = 1362,
  TagsSkillMapInternalFieldOwners = 1363,
  TagsSkillMapInternalIgnoreType = 1364,
  TagsSkillMapInternalMediaType = 1365,
  TagsSkillMapInternalOwner = 1366,
  TagsSkillMapInternalType = 1367,
  TagsSkillMapName = 1368,
  TagsSkillMapNodeLocale = 1369,
  TagsSkillMapParentChildren = 1370,
  TagsSkillMapParentId = 1371,
  TagsSkillMapSkills = 1372,
  TagsSkillMapSkillsBlogPost = 1373,
  TagsSkillMapSkillsChildren = 1374,
  TagsSkillMapSkillsContentfulId = 1375,
  TagsSkillMapSkillsCreatedAt = 1376,
  TagsSkillMapSkillsId = 1377,
  TagsSkillMapSkillsLevel = 1378,
  TagsSkillMapSkillsName = 1379,
  TagsSkillMapSkillsNodeLocale = 1380,
  TagsSkillMapSkillsOss = 1381,
  TagsSkillMapSkillsProject = 1382,
  TagsSkillMapSkillsSkillMap = 1383,
  TagsSkillMapSkillsSpaceId = 1384,
  TagsSkillMapSkillsUpdatedAt = 1385,
  TagsSkillMapSortKey = 1386,
  TagsSkillMapSpaceId = 1387,
  TagsSkillMapSysRevision = 1388,
  TagsSkillMapSysType = 1389,
  TagsSkillMapUpdatedAt = 1390,
  TagsSpaceId = 1391,
  TagsSysRevision = 1392,
  TagsSysType = 1393,
  TagsUpdatedAt = 1394,
  UpdatedAt = 1395
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
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 94,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 95,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 96,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 97,
  SkillsBlogPostChildren = 98,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 99,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 100,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 101,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 102,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 103,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 104,
  SkillsBlogPostChildrenChildren = 105,
  SkillsBlogPostChildrenId = 106,
  SkillsBlogPostContentChildren = 107,
  SkillsBlogPostContentChildrenMarkdownRemark = 108,
  SkillsBlogPostContentChildrenMdx = 109,
  SkillsBlogPostContentContent = 110,
  SkillsBlogPostContentId = 111,
  SkillsBlogPostContentfulId = 112,
  SkillsBlogPostCreated = 113,
  SkillsBlogPostCreatedAt = 114,
  SkillsBlogPostExcerpt = 115,
  SkillsBlogPostId = 116,
  SkillsBlogPostInternalContent = 117,
  SkillsBlogPostInternalContentDigest = 118,
  SkillsBlogPostInternalDescription = 119,
  SkillsBlogPostInternalFieldOwners = 120,
  SkillsBlogPostInternalIgnoreType = 121,
  SkillsBlogPostInternalMediaType = 122,
  SkillsBlogPostInternalOwner = 123,
  SkillsBlogPostInternalType = 124,
  SkillsBlogPostNodeLocale = 125,
  SkillsBlogPostParentChildren = 126,
  SkillsBlogPostParentId = 127,
  SkillsBlogPostSlug = 128,
  SkillsBlogPostSpaceId = 129,
  SkillsBlogPostSysRevision = 130,
  SkillsBlogPostSysType = 131,
  SkillsBlogPostTags = 132,
  SkillsBlogPostTagsBlogPost = 133,
  SkillsBlogPostTagsChildren = 134,
  SkillsBlogPostTagsContentfulId = 135,
  SkillsBlogPostTagsCreatedAt = 136,
  SkillsBlogPostTagsId = 137,
  SkillsBlogPostTagsLevel = 138,
  SkillsBlogPostTagsName = 139,
  SkillsBlogPostTagsNodeLocale = 140,
  SkillsBlogPostTagsOss = 141,
  SkillsBlogPostTagsProject = 142,
  SkillsBlogPostTagsSkillMap = 143,
  SkillsBlogPostTagsSpaceId = 144,
  SkillsBlogPostTagsUpdatedAt = 145,
  SkillsBlogPostTitle = 146,
  SkillsBlogPostUpdated = 147,
  SkillsBlogPostUpdatedAt = 148,
  SkillsChildren = 149,
  SkillsChildrenChildren = 150,
  SkillsChildrenChildrenChildren = 151,
  SkillsChildrenChildrenId = 152,
  SkillsChildrenId = 153,
  SkillsChildrenInternalContent = 154,
  SkillsChildrenInternalContentDigest = 155,
  SkillsChildrenInternalDescription = 156,
  SkillsChildrenInternalFieldOwners = 157,
  SkillsChildrenInternalIgnoreType = 158,
  SkillsChildrenInternalMediaType = 159,
  SkillsChildrenInternalOwner = 160,
  SkillsChildrenInternalType = 161,
  SkillsChildrenParentChildren = 162,
  SkillsChildrenParentId = 163,
  SkillsContentfulId = 164,
  SkillsCreatedAt = 165,
  SkillsId = 166,
  SkillsInternalContent = 167,
  SkillsInternalContentDigest = 168,
  SkillsInternalDescription = 169,
  SkillsInternalFieldOwners = 170,
  SkillsInternalIgnoreType = 171,
  SkillsInternalMediaType = 172,
  SkillsInternalOwner = 173,
  SkillsInternalType = 174,
  SkillsLevel = 175,
  SkillsName = 176,
  SkillsNodeLocale = 177,
  SkillsOss = 178,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 179,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 180,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMdx = 181,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 182,
  SkillsOssChildContentfulOssDetailTextNodeId = 183,
  SkillsOssChildren = 184,
  SkillsOssChildrenContentfulOssDetailTextNode = 185,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 186,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 187,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 188,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 189,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 190,
  SkillsOssChildrenChildren = 191,
  SkillsOssChildrenId = 192,
  SkillsOssContentfulId = 193,
  SkillsOssCreatedAt = 194,
  SkillsOssDetailChildren = 195,
  SkillsOssDetailChildrenMarkdownRemark = 196,
  SkillsOssDetailChildrenMdx = 197,
  SkillsOssDetailDetail = 198,
  SkillsOssDetailId = 199,
  SkillsOssHref = 200,
  SkillsOssIconChildren = 201,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 202,
  SkillsOssIconContact = 203,
  SkillsOssIconContentfulId = 204,
  SkillsOssIconCreatedAt = 205,
  SkillsOssIconHistory = 206,
  SkillsOssIconId = 207,
  SkillsOssIconName = 208,
  SkillsOssIconNodeLocale = 209,
  SkillsOssIconOss = 210,
  SkillsOssIconProject = 211,
  SkillsOssIconSpaceId = 212,
  SkillsOssIconUpdatedAt = 213,
  SkillsOssIconWhatICanDo = 214,
  SkillsOssId = 215,
  SkillsOssImageChildren = 216,
  SkillsOssImageContentfulId = 217,
  SkillsOssImageCreatedAt = 218,
  SkillsOssImageDescription = 219,
  SkillsOssImageGatsbyImageData = 220,
  SkillsOssImageId = 221,
  SkillsOssImageNodeLocale = 222,
  SkillsOssImageSpaceId = 223,
  SkillsOssImageTitle = 224,
  SkillsOssImageUpdatedAt = 225,
  SkillsOssInternalContent = 226,
  SkillsOssInternalContentDigest = 227,
  SkillsOssInternalDescription = 228,
  SkillsOssInternalFieldOwners = 229,
  SkillsOssInternalIgnoreType = 230,
  SkillsOssInternalMediaType = 231,
  SkillsOssInternalOwner = 232,
  SkillsOssInternalType = 233,
  SkillsOssName = 234,
  SkillsOssNodeLocale = 235,
  SkillsOssParentChildren = 236,
  SkillsOssParentId = 237,
  SkillsOssSpaceId = 238,
  SkillsOssStartDate = 239,
  SkillsOssSubName = 240,
  SkillsOssSysRevision = 241,
  SkillsOssSysType = 242,
  SkillsOssTags = 243,
  SkillsOssTagsBlogPost = 244,
  SkillsOssTagsChildren = 245,
  SkillsOssTagsContentfulId = 246,
  SkillsOssTagsCreatedAt = 247,
  SkillsOssTagsId = 248,
  SkillsOssTagsLevel = 249,
  SkillsOssTagsName = 250,
  SkillsOssTagsNodeLocale = 251,
  SkillsOssTagsOss = 252,
  SkillsOssTagsProject = 253,
  SkillsOssTagsSkillMap = 254,
  SkillsOssTagsSpaceId = 255,
  SkillsOssTagsUpdatedAt = 256,
  SkillsOssUpdatedAt = 257,
  SkillsParentChildren = 258,
  SkillsParentChildrenChildren = 259,
  SkillsParentChildrenId = 260,
  SkillsParentId = 261,
  SkillsParentInternalContent = 262,
  SkillsParentInternalContentDigest = 263,
  SkillsParentInternalDescription = 264,
  SkillsParentInternalFieldOwners = 265,
  SkillsParentInternalIgnoreType = 266,
  SkillsParentInternalMediaType = 267,
  SkillsParentInternalOwner = 268,
  SkillsParentInternalType = 269,
  SkillsParentParentChildren = 270,
  SkillsParentParentId = 271,
  SkillsProject = 272,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 273,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 274,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 275,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 276,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 277,
  SkillsProjectChildren = 278,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 279,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 280,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 281,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 282,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 283,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 284,
  SkillsProjectChildrenChildren = 285,
  SkillsProjectChildrenId = 286,
  SkillsProjectContentfulId = 287,
  SkillsProjectCreatedAt = 288,
  SkillsProjectDetailChildren = 289,
  SkillsProjectDetailChildrenMarkdownRemark = 290,
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
  BlogPostChildContentfulBlogPostContentTextNodeChildMarkdownRemarkChildren = 1,
  BlogPostChildContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerpt = 2,
  BlogPostChildContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerptAst = 3,
  BlogPostChildContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadings = 4,
  BlogPostChildContentfulBlogPostContentTextNodeChildMarkdownRemarkHtml = 5,
  BlogPostChildContentfulBlogPostContentTextNodeChildMarkdownRemarkHtmlAst = 6,
  BlogPostChildContentfulBlogPostContentTextNodeChildMarkdownRemarkId = 7,
  BlogPostChildContentfulBlogPostContentTextNodeChildMarkdownRemarkRawMarkdownBody = 8,
  BlogPostChildContentfulBlogPostContentTextNodeChildMarkdownRemarkTableOfContents = 9,
  BlogPostChildContentfulBlogPostContentTextNodeChildMarkdownRemarkTimeToRead = 10,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxBody = 11,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxChildren = 12,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 13,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 14,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHeadings = 15,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHtml = 16,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxId = 17,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 18,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxRawBody = 19,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxSlug = 20,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 21,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 22,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 23,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 24,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildren = 25,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerpt = 26,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerptAst = 27,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadings = 28,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtml = 29,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtmlAst = 30,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkId = 31,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkRawMarkdownBody = 32,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTableOfContents = 33,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTimeToRead = 34,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 35,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxBody = 36,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 37,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 38,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 39,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 40,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 41,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxId = 42,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 43,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 44,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 45,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 46,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 47,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 48,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 49,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 50,
  BlogPostChildContentfulBlogPostContentTextNodeId = 51,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 52,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 53,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 54,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 55,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 56,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 57,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 58,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 59,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 60,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 61,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 62,
  BlogPostChildren = 63,
  BlogPostChildrenContentfulBlogPostContentTextNode = 64,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkChildren = 65,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerpt = 66,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerptAst = 67,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadings = 68,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHtml = 69,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHtmlAst = 70,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkId = 71,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkRawMarkdownBody = 72,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkTableOfContents = 73,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkTimeToRead = 74,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxBody = 75,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 76,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 77,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 78,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 79,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 80,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxId = 81,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 82,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 83,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 84,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 85,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 86,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 87,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 88,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildren = 89,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerpt = 90,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerptAst = 91,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadings = 92,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtml = 93,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtmlAst = 94,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkId = 95,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkRawMarkdownBody = 96,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTableOfContents = 97,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTimeToRead = 98,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 99,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 100,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 101,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 102,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 103,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 104,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 105,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 106,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 107,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 108,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 109,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 110,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 111,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 112,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 113,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 114,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 115,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 116,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 117,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 118,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 119,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 120,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 121,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 122,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 123,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 124,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 125,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 126,
  BlogPostChildrenChildren = 127,
  BlogPostChildrenChildrenChildren = 128,
  BlogPostChildrenChildrenId = 129,
  BlogPostChildrenId = 130,
  BlogPostChildrenInternalContent = 131,
  BlogPostChildrenInternalContentDigest = 132,
  BlogPostChildrenInternalDescription = 133,
  BlogPostChildrenInternalFieldOwners = 134,
  BlogPostChildrenInternalIgnoreType = 135,
  BlogPostChildrenInternalMediaType = 136,
  BlogPostChildrenInternalOwner = 137,
  BlogPostChildrenInternalType = 138,
  BlogPostChildrenParentChildren = 139,
  BlogPostChildrenParentId = 140,
  BlogPostContentChildMarkdownRemarkChildren = 141,
  BlogPostContentChildMarkdownRemarkExcerpt = 142,
  BlogPostContentChildMarkdownRemarkExcerptAst = 143,
  BlogPostContentChildMarkdownRemarkHeadings = 144,
  BlogPostContentChildMarkdownRemarkHtml = 145,
  BlogPostContentChildMarkdownRemarkHtmlAst = 146,
  BlogPostContentChildMarkdownRemarkId = 147,
  BlogPostContentChildMarkdownRemarkRawMarkdownBody = 148,
  BlogPostContentChildMarkdownRemarkTableOfContents = 149,
  BlogPostContentChildMarkdownRemarkTimeToRead = 150,
  BlogPostContentChildMdxBody = 151,
  BlogPostContentChildMdxChildren = 152,
  BlogPostContentChildMdxExcerpt = 153,
  BlogPostContentChildMdxFileAbsolutePath = 154,
  BlogPostContentChildMdxHeadings = 155,
  BlogPostContentChildMdxHtml = 156,
  BlogPostContentChildMdxId = 157,
  BlogPostContentChildMdxMdxAst = 158,
  BlogPostContentChildMdxRawBody = 159,
  BlogPostContentChildMdxSlug = 160,
  BlogPostContentChildMdxTableOfContents = 161,
  BlogPostContentChildMdxTimeToRead = 162,
  BlogPostContentChildren = 163,
  BlogPostContentChildrenMarkdownRemark = 164,
  BlogPostContentChildrenMarkdownRemarkChildren = 165,
  BlogPostContentChildrenMarkdownRemarkExcerpt = 166,
  BlogPostContentChildrenMarkdownRemarkExcerptAst = 167,
  BlogPostContentChildrenMarkdownRemarkHeadings = 168,
  BlogPostContentChildrenMarkdownRemarkHtml = 169,
  BlogPostContentChildrenMarkdownRemarkHtmlAst = 170,
  BlogPostContentChildrenMarkdownRemarkId = 171,
  BlogPostContentChildrenMarkdownRemarkRawMarkdownBody = 172,
  BlogPostContentChildrenMarkdownRemarkTableOfContents = 173,
  BlogPostContentChildrenMarkdownRemarkTimeToRead = 174,
  BlogPostContentChildrenMdx = 175,
  BlogPostContentChildrenMdxBody = 176,
  BlogPostContentChildrenMdxChildren = 177,
  BlogPostContentChildrenMdxExcerpt = 178,
  BlogPostContentChildrenMdxFileAbsolutePath = 179,
  BlogPostContentChildrenMdxHeadings = 180,
  BlogPostContentChildrenMdxHtml = 181,
  BlogPostContentChildrenMdxId = 182,
  BlogPostContentChildrenMdxMdxAst = 183,
  BlogPostContentChildrenMdxRawBody = 184,
  BlogPostContentChildrenMdxSlug = 185,
  BlogPostContentChildrenMdxTableOfContents = 186,
  BlogPostContentChildrenMdxTimeToRead = 187,
  BlogPostContentChildrenChildren = 188,
  BlogPostContentChildrenId = 189,
  BlogPostContentContent = 190,
  BlogPostContentId = 191,
  BlogPostContentInternalContent = 192,
  BlogPostContentInternalContentDigest = 193,
  BlogPostContentInternalDescription = 194,
  BlogPostContentInternalFieldOwners = 195,
  BlogPostContentInternalIgnoreType = 196,
  BlogPostContentInternalMediaType = 197,
  BlogPostContentInternalOwner = 198,
  BlogPostContentInternalType = 199,
  BlogPostContentParentChildren = 200,
  BlogPostContentParentId = 201,
  BlogPostContentSysType = 202,
  BlogPostContentfulId = 203,
  BlogPostCreated = 204,
  BlogPostCreatedAt = 205,
  BlogPostExcerpt = 206,
  BlogPostId = 207,
  BlogPostInternalContent = 208,
  BlogPostInternalContentDigest = 209,
  BlogPostInternalDescription = 210,
  BlogPostInternalFieldOwners = 211,
  BlogPostInternalIgnoreType = 212,
  BlogPostInternalMediaType = 213,
  BlogPostInternalOwner = 214,
  BlogPostInternalType = 215,
  BlogPostNodeLocale = 216,
  BlogPostParentChildren = 217,
  BlogPostParentChildrenChildren = 218,
  BlogPostParentChildrenId = 219,
  BlogPostParentId = 220,
  BlogPostParentInternalContent = 221,
  BlogPostParentInternalContentDigest = 222,
  BlogPostParentInternalDescription = 223,
  BlogPostParentInternalFieldOwners = 224,
  BlogPostParentInternalIgnoreType = 225,
  BlogPostParentInternalMediaType = 226,
  BlogPostParentInternalOwner = 227,
  BlogPostParentInternalType = 228,
  BlogPostParentParentChildren = 229,
  BlogPostParentParentId = 230,
  BlogPostSlug = 231,
  BlogPostSpaceId = 232,
  BlogPostSysRevision = 233,
  BlogPostSysType = 234,
  BlogPostTags = 235,
  BlogPostTagsBlogPost = 236,
  BlogPostTagsBlogPostChildren = 237,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 238,
  BlogPostTagsBlogPostContentfulId = 239,
  BlogPostTagsBlogPostCreated = 240,
  BlogPostTagsBlogPostCreatedAt = 241,
  BlogPostTagsBlogPostExcerpt = 242,
  BlogPostTagsBlogPostId = 243,
  BlogPostTagsBlogPostNodeLocale = 244,
  BlogPostTagsBlogPostSlug = 245,
  BlogPostTagsBlogPostSpaceId = 246,
  BlogPostTagsBlogPostTags = 247,
  BlogPostTagsBlogPostTitle = 248,
  BlogPostTagsBlogPostUpdated = 249,
  BlogPostTagsBlogPostUpdatedAt = 250,
  BlogPostTagsChildren = 251,
  BlogPostTagsChildrenChildren = 252,
  BlogPostTagsChildrenId = 253,
  BlogPostTagsContentfulId = 254,
  BlogPostTagsCreatedAt = 255,
  BlogPostTagsId = 256,
  BlogPostTagsInternalContent = 257,
  BlogPostTagsInternalContentDigest = 258,
  BlogPostTagsInternalDescription = 259,
  BlogPostTagsInternalFieldOwners = 260,
  BlogPostTagsInternalIgnoreType = 261,
  BlogPostTagsInternalMediaType = 262,
  BlogPostTagsInternalOwner = 263,
  BlogPostTagsInternalType = 264,
  BlogPostTagsLevel = 265,
  BlogPostTagsName = 266,
  BlogPostTagsNodeLocale = 267,
  BlogPostTagsOss = 268,
  BlogPostTagsOssChildren = 269,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 270,
  BlogPostTagsOssContentfulId = 271,
  BlogPostTagsOssCreatedAt = 272,
  BlogPostTagsOssHref = 273,
  BlogPostTagsOssId = 274,
  BlogPostTagsOssName = 275,
  BlogPostTagsOssNodeLocale = 276,
  BlogPostTagsOssSpaceId = 277,
  BlogPostTagsOssStartDate = 278,
  BlogPostTagsOssSubName = 279,
  BlogPostTagsOssTags = 280,
  BlogPostTagsOssUpdatedAt = 281,
  BlogPostTagsParentChildren = 282,
  BlogPostTagsParentId = 283,
  BlogPostTagsProject = 284,
  BlogPostTagsProjectChildren = 285,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 286,
  BlogPostTagsProjectContentfulId = 287,
  BlogPostTagsProjectCreatedAt = 288,
  BlogPostTagsProjectEndDate = 289,
  BlogPostTagsProjectId = 290,
  BlogPostTagsProjectName = 291,
  BlogPostTagsProjectNodeLocale = 292,
  BlogPostTagsProjectSpaceId = 293,
  BlogPostTagsProjectStartDate = 294,
  BlogPostTagsProjectSubName = 295,
  BlogPostTagsProjectTags = 296,
  BlogPostTagsProjectUpdatedAt = 297,
  BlogPostTagsSkillMap = 298,
  BlogPostTagsSkillMapChildren = 299,
  BlogPostTagsSkillMapContentfulId = 300,
  BlogPostTagsSkillMapCreatedAt = 301,
  BlogPostTagsSkillMapExpanded = 302,
  BlogPostTagsSkillMapId = 303,
  BlogPostTagsSkillMapName = 304,
  BlogPostTagsSkillMapNodeLocale = 305,
  BlogPostTagsSkillMapSkills = 306,
  BlogPostTagsSkillMapSortKey = 307,
  BlogPostTagsSkillMapSpaceId = 308,
  BlogPostTagsSkillMapUpdatedAt = 309,
  BlogPostTagsSpaceId = 310,
  BlogPostTagsSysRevision = 311,
  BlogPostTagsSysType = 312,
  BlogPostTagsUpdatedAt = 313,
  BlogPostTitle = 314,
  BlogPostUpdated = 315,
  BlogPostUpdatedAt = 316,
  Children = 317,
  ChildrenChildren = 318,
  ChildrenChildrenChildren = 319,
  ChildrenChildrenChildrenChildren = 320,
  ChildrenChildrenChildrenId = 321,
  ChildrenChildrenId = 322,
  ChildrenChildrenInternalContent = 323,
  ChildrenChildrenInternalContentDigest = 324,
  ChildrenChildrenInternalDescription = 325,
  ChildrenChildrenInternalFieldOwners = 326,
  ChildrenChildrenInternalIgnoreType = 327,
  ChildrenChildrenInternalMediaType = 328,
  ChildrenChildrenInternalOwner = 329,
  ChildrenChildrenInternalType = 330,
  ChildrenChildrenParentChildren = 331,
  ChildrenChildrenParentId = 332,
  ChildrenId = 333,
  ChildrenInternalContent = 334,
  ChildrenInternalContentDigest = 335,
  ChildrenInternalDescription = 336,
  ChildrenInternalFieldOwners = 337,
  ChildrenInternalIgnoreType = 338,
  ChildrenInternalMediaType = 339,
  ChildrenInternalOwner = 340,
  ChildrenInternalType = 341,
  ChildrenParentChildren = 342,
  ChildrenParentChildrenChildren = 343,
  ChildrenParentChildrenId = 344,
  ChildrenParentId = 345,
  ChildrenParentInternalContent = 346,
  ChildrenParentInternalContentDigest = 347,
  ChildrenParentInternalDescription = 348,
  ChildrenParentInternalFieldOwners = 349,
  ChildrenParentInternalIgnoreType = 350,
  ChildrenParentInternalMediaType = 351,
  ChildrenParentInternalOwner = 352,
  ChildrenParentInternalType = 353,
  ChildrenParentParentChildren = 354,
  ChildrenParentParentId = 355,
  ContentfulId = 356,
  CreatedAt = 357,
  Id = 358,
  InternalContent = 359,
  InternalContentDigest = 360,
  InternalDescription = 361,
  InternalFieldOwners = 362,
  InternalIgnoreType = 363,
  InternalMediaType = 364,
  InternalOwner = 365,
  InternalType = 366,
  Level = 367,
  Name = 368,
  NodeLocale = 369,
  Oss = 370,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 371,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 372,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 373,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 374,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 375,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 376,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkId = 377,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 378,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 379,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 380,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 381,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 382,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 383,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 384,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 385,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 386,
  OssChildContentfulOssDetailTextNodeChildMdxId = 387,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 388,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 389,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 390,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 391,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 392,
  OssChildContentfulOssDetailTextNodeChildren = 393,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 394,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 395,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 396,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 397,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 398,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 399,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 400,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 401,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 402,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 403,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 404,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 405,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 406,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 407,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 408,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 409,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 410,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 411,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 412,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 413,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 414,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 415,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 416,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 417,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 418,
  OssChildContentfulOssDetailTextNodeChildrenId = 419,
  OssChildContentfulOssDetailTextNodeDetail = 420,
  OssChildContentfulOssDetailTextNodeId = 421,
  OssChildContentfulOssDetailTextNodeInternalContent = 422,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 423,
  OssChildContentfulOssDetailTextNodeInternalDescription = 424,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 425,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 426,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 427,
  OssChildContentfulOssDetailTextNodeInternalOwner = 428,
  OssChildContentfulOssDetailTextNodeInternalType = 429,
  OssChildContentfulOssDetailTextNodeParentChildren = 430,
  OssChildContentfulOssDetailTextNodeParentId = 431,
  OssChildContentfulOssDetailTextNodeSysType = 432,
  OssChildren = 433,
  OssChildrenContentfulOssDetailTextNode = 434,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 435,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 436,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 437,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 438,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 439,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 440,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkId = 441,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 442,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 443,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 444,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 445,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 446,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 447,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 448,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 449,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 450,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 451,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 452,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 453,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 454,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 455,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 456,
  OssChildrenContentfulOssDetailTextNodeChildren = 457,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 458,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 459,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 460,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 461,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 462,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 463,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 464,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 465,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 466,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 467,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 468,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 469,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 470,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 471,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 472,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 473,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 474,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 475,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 476,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 477,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 478,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 479,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 480,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 481,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 482,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 483,
  OssChildrenContentfulOssDetailTextNodeDetail = 484,
  OssChildrenContentfulOssDetailTextNodeId = 485,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 486,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 487,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 488,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 489,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 490,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 491,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 492,
  OssChildrenContentfulOssDetailTextNodeInternalType = 493,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 494,
  OssChildrenContentfulOssDetailTextNodeParentId = 495,
  OssChildrenContentfulOssDetailTextNodeSysType = 496,
  OssChildrenChildren = 497,
  OssChildrenChildrenChildren = 498,
  OssChildrenChildrenId = 499,
  OssChildrenId = 500,
  OssChildrenInternalContent = 501,
  OssChildrenInternalContentDigest = 502,
  OssChildrenInternalDescription = 503,
  OssChildrenInternalFieldOwners = 504,
  OssChildrenInternalIgnoreType = 505,
  OssChildrenInternalMediaType = 506,
  OssChildrenInternalOwner = 507,
  OssChildrenInternalType = 508,
  OssChildrenParentChildren = 509,
  OssChildrenParentId = 510,
  OssContentfulId = 511,
  OssCreatedAt = 512,
  OssDetailChildMarkdownRemarkChildren = 513,
  OssDetailChildMarkdownRemarkExcerpt = 514,
  OssDetailChildMarkdownRemarkExcerptAst = 515,
  OssDetailChildMarkdownRemarkHeadings = 516,
  OssDetailChildMarkdownRemarkHtml = 517,
  OssDetailChildMarkdownRemarkHtmlAst = 518,
  OssDetailChildMarkdownRemarkId = 519,
  OssDetailChildMarkdownRemarkRawMarkdownBody = 520,
  OssDetailChildMarkdownRemarkTableOfContents = 521,
  OssDetailChildMarkdownRemarkTimeToRead = 522,
  OssDetailChildMdxBody = 523,
  OssDetailChildMdxChildren = 524,
  OssDetailChildMdxExcerpt = 525,
  OssDetailChildMdxFileAbsolutePath = 526,
  OssDetailChildMdxHeadings = 527,
  OssDetailChildMdxHtml = 528,
  OssDetailChildMdxId = 529,
  OssDetailChildMdxMdxAst = 530,
  OssDetailChildMdxRawBody = 531,
  OssDetailChildMdxSlug = 532,
  OssDetailChildMdxTableOfContents = 533,
  OssDetailChildMdxTimeToRead = 534,
  OssDetailChildren = 535,
  OssDetailChildrenMarkdownRemark = 536,
  OssDetailChildrenMarkdownRemarkChildren = 537,
  OssDetailChildrenMarkdownRemarkExcerpt = 538,
  OssDetailChildrenMarkdownRemarkExcerptAst = 539,
  OssDetailChildrenMarkdownRemarkHeadings = 540,
  OssDetailChildrenMarkdownRemarkHtml = 541,
  OssDetailChildrenMarkdownRemarkHtmlAst = 542,
  OssDetailChildrenMarkdownRemarkId = 543,
  OssDetailChildrenMarkdownRemarkRawMarkdownBody = 544,
  OssDetailChildrenMarkdownRemarkTableOfContents = 545,
  OssDetailChildrenMarkdownRemarkTimeToRead = 546,
  OssDetailChildrenMdx = 547,
  OssDetailChildrenMdxBody = 548,
  OssDetailChildrenMdxChildren = 549,
  OssDetailChildrenMdxExcerpt = 550,
  OssDetailChildrenMdxFileAbsolutePath = 551,
  OssDetailChildrenMdxHeadings = 552,
  OssDetailChildrenMdxHtml = 553,
  OssDetailChildrenMdxId = 554,
  OssDetailChildrenMdxMdxAst = 555,
  OssDetailChildrenMdxRawBody = 556,
  OssDetailChildrenMdxSlug = 557,
  OssDetailChildrenMdxTableOfContents = 558,
  OssDetailChildrenMdxTimeToRead = 559,
  OssDetailChildrenChildren = 560,
  OssDetailChildrenId = 561,
  OssDetailDetail = 562,
  OssDetailId = 563,
  OssDetailInternalContent = 564,
  OssDetailInternalContentDigest = 565,
  OssDetailInternalDescription = 566,
  OssDetailInternalFieldOwners = 567,
  OssDetailInternalIgnoreType = 568,
  OssDetailInternalMediaType = 569,
  OssDetailInternalOwner = 570,
  OssDetailInternalType = 571,
  OssDetailParentChildren = 572,
  OssDetailParentId = 573,
  OssDetailSysType = 574,
  OssHref = 575,
  OssIconChildContentfulIconSvgTextNodeChildren = 576,
  OssIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 577,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 578,
  OssIconChildContentfulIconSvgTextNodeId = 579,
  OssIconChildContentfulIconSvgTextNodeSvg = 580,
  OssIconChildren = 581,
  OssIconChildrenContentfulIconSvgTextNode = 582,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 583,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 584,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 585,
  OssIconChildrenContentfulIconSvgTextNodeId = 586,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 587,
  OssIconChildrenChildren = 588,
  OssIconChildrenId = 589,
  OssIconContact = 590,
  OssIconContactChildren = 591,
  OssIconContactContentfulId = 592,
  OssIconContactCreatedAt = 593,
  OssIconContactHref = 594,
  OssIconContactId = 595,
  OssIconContactName = 596,
  OssIconContactNodeLocale = 597,
  OssIconContactSortKey = 598,
  OssIconContactSpaceId = 599,
  OssIconContactSubName = 600,
  OssIconContactUpdatedAt = 601,
  OssIconContentfulId = 602,
  OssIconCreatedAt = 603,
  OssIconHistory = 604,
  OssIconHistoryChildren = 605,
  OssIconHistoryContentfulId = 606,
  OssIconHistoryCreatedAt = 607,
  OssIconHistoryDate = 608,
  OssIconHistoryId = 609,
  OssIconHistoryName = 610,
  OssIconHistoryNodeLocale = 611,
  OssIconHistorySpaceId = 612,
  OssIconHistorySubName = 613,
  OssIconHistoryUpdatedAt = 614,
  OssIconId = 615,
  OssIconInternalContent = 616,
  OssIconInternalContentDigest = 617,
  OssIconInternalDescription = 618,
  OssIconInternalFieldOwners = 619,
  OssIconInternalIgnoreType = 620,
  OssIconInternalMediaType = 621,
  OssIconInternalOwner = 622,
  OssIconInternalType = 623,
  OssIconName = 624,
  OssIconNodeLocale = 625,
  OssIconOss = 626,
  OssIconOssChildren = 627,
  OssIconOssChildrenContentfulOssDetailTextNode = 628,
  OssIconOssContentfulId = 629,
  OssIconOssCreatedAt = 630,
  OssIconOssHref = 631,
  OssIconOssId = 632,
  OssIconOssName = 633,
  OssIconOssNodeLocale = 634,
  OssIconOssSpaceId = 635,
  OssIconOssStartDate = 636,
  OssIconOssSubName = 637,
  OssIconOssTags = 638,
  OssIconOssUpdatedAt = 639,
  OssIconParentChildren = 640,
  OssIconParentId = 641,
  OssIconProject = 642,
  OssIconProjectChildren = 643,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 644,
  OssIconProjectContentfulId = 645,
  OssIconProjectCreatedAt = 646,
  OssIconProjectEndDate = 647,
  OssIconProjectId = 648,
  OssIconProjectName = 649,
  OssIconProjectNodeLocale = 650,
  OssIconProjectSpaceId = 651,
  OssIconProjectStartDate = 652,
  OssIconProjectSubName = 653,
  OssIconProjectTags = 654,
  OssIconProjectUpdatedAt = 655,
  OssIconSpaceId = 656,
  OssIconSvgChildren = 657,
  OssIconSvgChildrenMarkdownRemark = 658,
  OssIconSvgChildrenMdx = 659,
  OssIconSvgId = 660,
  OssIconSvgSvg = 661,
  OssIconSysRevision = 662,
  OssIconSysType = 663,
  OssIconUpdatedAt = 664,
  OssIconWhatICanDo = 665,
  OssIconWhatICanDoChildren = 666,
  OssIconWhatICanDoContentfulId = 667,
  OssIconWhatICanDoCreatedAt = 668,
  OssIconWhatICanDoId = 669,
  OssIconWhatICanDoName = 670,
  OssIconWhatICanDoNodeLocale = 671,
  OssIconWhatICanDoSortKey = 672,
  OssIconWhatICanDoSpaceId = 673,
  OssIconWhatICanDoSubName = 674,
  OssIconWhatICanDoUpdatedAt = 675,
  OssId = 676,
  OssImageChildren = 677,
  OssImageChildrenChildren = 678,
  OssImageChildrenId = 679,
  OssImageContentfulId = 680,
  OssImageCreatedAt = 681,
  OssImageDescription = 682,
  OssImageFieldsLocalFile = 683,
  OssImageFileContentType = 684,
  OssImageFileFileName = 685,
  OssImageFileUrl = 686,
  OssImageGatsbyImageData = 687,
  OssImageId = 688,
  OssImageInternalContent = 689,
  OssImageInternalContentDigest = 690,
  OssImageInternalDescription = 691,
  OssImageInternalFieldOwners = 692,
  OssImageInternalIgnoreType = 693,
  OssImageInternalMediaType = 694,
  OssImageInternalOwner = 695,
  OssImageInternalType = 696,
  OssImageLocalFileAbsolutePath = 697,
  OssImageLocalFileAccessTime = 698,
  OssImageLocalFileAtime = 699,
  OssImageLocalFileAtimeMs = 700,
  OssImageLocalFileBase = 701,
  OssImageLocalFileBirthTime = 702,
  OssImageLocalFileBirthtime = 703,
  OssImageLocalFileBirthtimeMs = 704,
  OssImageLocalFileBlksize = 705,
  OssImageLocalFileBlocks = 706,
  OssImageLocalFileChangeTime = 707,
  OssImageLocalFileChildren = 708,
  OssImageLocalFileChildrenImageSharp = 709,
  OssImageLocalFileChildrenLocale = 710,
  OssImageLocalFileCtime = 711,
  OssImageLocalFileCtimeMs = 712,
  OssImageLocalFileDev = 713,
  OssImageLocalFileDir = 714,
  OssImageLocalFileExt = 715,
  OssImageLocalFileExtension = 716,
  OssImageLocalFileGid = 717,
  OssImageLocalFileId = 718,
  OssImageLocalFileIno = 719,
  OssImageLocalFileMode = 720,
  OssImageLocalFileModifiedTime = 721,
  OssImageLocalFileMtime = 722,
  OssImageLocalFileMtimeMs = 723,
  OssImageLocalFileName = 724,
  OssImageLocalFileNlink = 725,
  OssImageLocalFilePrettySize = 726,
  OssImageLocalFilePublicUrl = 727,
  OssImageLocalFileRdev = 728,
  OssImageLocalFileRelativeDirectory = 729,
  OssImageLocalFileRelativePath = 730,
  OssImageLocalFileRoot = 731,
  OssImageLocalFileSize = 732,
  OssImageLocalFileSourceInstanceName = 733,
  OssImageLocalFileUid = 734,
  OssImageLocalFileUrl = 735,
  OssImageNodeLocale = 736,
  OssImageParentChildren = 737,
  OssImageParentId = 738,
  OssImageSpaceId = 739,
  OssImageSysRevision = 740,
  OssImageSysType = 741,
  OssImageTitle = 742,
  OssImageUpdatedAt = 743,
  OssInternalContent = 744,
  OssInternalContentDigest = 745,
  OssInternalDescription = 746,
  OssInternalFieldOwners = 747,
  OssInternalIgnoreType = 748,
  OssInternalMediaType = 749,
  OssInternalOwner = 750,
  OssInternalType = 751,
  OssName = 752,
  OssNodeLocale = 753,
  OssParentChildren = 754,
  OssParentChildrenChildren = 755,
  OssParentChildrenId = 756,
  OssParentId = 757,
  OssParentInternalContent = 758,
  OssParentInternalContentDigest = 759,
  OssParentInternalDescription = 760,
  OssParentInternalFieldOwners = 761,
  OssParentInternalIgnoreType = 762,
  OssParentInternalMediaType = 763,
  OssParentInternalOwner = 764,
  OssParentInternalType = 765,
  OssParentParentChildren = 766,
  OssParentParentId = 767,
  OssSpaceId = 768,
  OssStartDate = 769,
  OssSubName = 770,
  OssSysRevision = 771,
  OssSysType = 772,
  OssTags = 773,
  OssTagsBlogPost = 774,
  OssTagsBlogPostChildren = 775,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 776,
  OssTagsBlogPostContentfulId = 777,
  OssTagsBlogPostCreated = 778,
  OssTagsBlogPostCreatedAt = 779,
  OssTagsBlogPostExcerpt = 780,
  OssTagsBlogPostId = 781,
  OssTagsBlogPostNodeLocale = 782,
  OssTagsBlogPostSlug = 783,
  OssTagsBlogPostSpaceId = 784,
  OssTagsBlogPostTags = 785,
  OssTagsBlogPostTitle = 786,
  OssTagsBlogPostUpdated = 787,
  OssTagsBlogPostUpdatedAt = 788,
  OssTagsChildren = 789,
  OssTagsChildrenChildren = 790,
  OssTagsChildrenId = 791,
  OssTagsContentfulId = 792,
  OssTagsCreatedAt = 793,
  OssTagsId = 794,
  OssTagsInternalContent = 795,
  OssTagsInternalContentDigest = 796,
  OssTagsInternalDescription = 797,
  OssTagsInternalFieldOwners = 798,
  OssTagsInternalIgnoreType = 799,
  OssTagsInternalMediaType = 800,
  OssTagsInternalOwner = 801,
  OssTagsInternalType = 802,
  OssTagsLevel = 803,
  OssTagsName = 804,
  OssTagsNodeLocale = 805,
  OssTagsOss = 806,
  OssTagsOssChildren = 807,
  OssTagsOssChildrenContentfulOssDetailTextNode = 808,
  OssTagsOssContentfulId = 809,
  OssTagsOssCreatedAt = 810,
  OssTagsOssHref = 811,
  OssTagsOssId = 812,
  OssTagsOssName = 813,
  OssTagsOssNodeLocale = 814,
  OssTagsOssSpaceId = 815,
  OssTagsOssStartDate = 816,
  OssTagsOssSubName = 817,
  OssTagsOssTags = 818,
  OssTagsOssUpdatedAt = 819,
  OssTagsParentChildren = 820,
  OssTagsParentId = 821,
  OssTagsProject = 822,
  OssTagsProjectChildren = 823,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 824,
  OssTagsProjectContentfulId = 825,
  OssTagsProjectCreatedAt = 826,
  OssTagsProjectEndDate = 827,
  OssTagsProjectId = 828,
  OssTagsProjectName = 829,
  OssTagsProjectNodeLocale = 830,
  OssTagsProjectSpaceId = 831,
  OssTagsProjectStartDate = 832,
  OssTagsProjectSubName = 833,
  OssTagsProjectTags = 834,
  OssTagsProjectUpdatedAt = 835,
  OssTagsSkillMap = 836,
  OssTagsSkillMapChildren = 837,
  OssTagsSkillMapContentfulId = 838,
  OssTagsSkillMapCreatedAt = 839,
  OssTagsSkillMapExpanded = 840,
  OssTagsSkillMapId = 841,
  OssTagsSkillMapName = 842,
  OssTagsSkillMapNodeLocale = 843,
  OssTagsSkillMapSkills = 844,
  OssTagsSkillMapSortKey = 845,
  OssTagsSkillMapSpaceId = 846,
  OssTagsSkillMapUpdatedAt = 847,
  OssTagsSpaceId = 848,
  OssTagsSysRevision = 849,
  OssTagsSysType = 850,
  OssTagsUpdatedAt = 851,
  OssUpdatedAt = 852,
  ParentChildren = 853,
  ParentChildrenChildren = 854,
  ParentChildrenChildrenChildren = 855,
  ParentChildrenChildrenId = 856,
  ParentChildrenId = 857,
  ParentChildrenInternalContent = 858,
  ParentChildrenInternalContentDigest = 859,
  ParentChildrenInternalDescription = 860,
  ParentChildrenInternalFieldOwners = 861,
  ParentChildrenInternalIgnoreType = 862,
  ParentChildrenInternalMediaType = 863,
  ParentChildrenInternalOwner = 864,
  ParentChildrenInternalType = 865,
  ParentChildrenParentChildren = 866,
  ParentChildrenParentId = 867,
  ParentId = 868,
  ParentInternalContent = 869,
  ParentInternalContentDigest = 870,
  ParentInternalDescription = 871,
  ParentInternalFieldOwners = 872,
  ParentInternalIgnoreType = 873,
  ParentInternalMediaType = 874,
  ParentInternalOwner = 875,
  ParentInternalType = 876,
  ParentParentChildren = 877,
  ParentParentChildrenChildren = 878,
  ParentParentChildrenId = 879,
  ParentParentId = 880,
  ParentParentInternalContent = 881,
  ParentParentInternalContentDigest = 882,
  ParentParentInternalDescription = 883,
  ParentParentInternalFieldOwners = 884,
  ParentParentInternalIgnoreType = 885,
  ParentParentInternalMediaType = 886,
  ParentParentInternalOwner = 887,
  ParentParentInternalType = 888,
  ParentParentParentChildren = 889,
  ParentParentParentId = 890,
  Project = 891,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 892,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 893,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 894,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 895,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 896,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 897,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkId = 898,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 899,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 900,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 901,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 902,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 903,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 904,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 905,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 906,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 907,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 908,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 909,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 910,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 911,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 912,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 913,
  ProjectChildContentfulProjectDetailTextNodeChildren = 914,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 915,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 916,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 917,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 918,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 919,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 920,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 921,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 922,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 923,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 924,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 925,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 926,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 927,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 928,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 929,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 930,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 931,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 932,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 933,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 934,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 935,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 936,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 937,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 938,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 939,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 940,
  ProjectChildContentfulProjectDetailTextNodeDetail = 941,
  ProjectChildContentfulProjectDetailTextNodeId = 942,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 943,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 944,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 945,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 946,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 947,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 948,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 949,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 950,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 951,
  ProjectChildContentfulProjectDetailTextNodeParentId = 952,
  ProjectChildContentfulProjectDetailTextNodeSysType = 953,
  ProjectChildren = 954,
  ProjectChildrenContentfulProjectDetailTextNode = 955,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 956,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 957,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 958,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 959,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 960,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 961,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkId = 962,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 963,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 964,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 965,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 966,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 967,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 968,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 969,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 970,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 971,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 972,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 973,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 974,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 975,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 976,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 977,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 978,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 979,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 980,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 981,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 982,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 983,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 984,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 985,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 986,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 987,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 988,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 989,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 990,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 991,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 992,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 993,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 994,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 995,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 996,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 997,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 998,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 999,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 1000,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1001,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1002,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 1003,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 1004,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 1005,
  ProjectChildrenContentfulProjectDetailTextNodeId = 1006,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 1007,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 1008,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 1009,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 1010,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 1011,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 1012,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 1013,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 1014,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 1015,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 1016,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 1017,
  ProjectChildrenChildren = 1018,
  ProjectChildrenChildrenChildren = 1019,
  ProjectChildrenChildrenId = 1020,
  ProjectChildrenId = 1021,
  ProjectChildrenInternalContent = 1022,
  ProjectChildrenInternalContentDigest = 1023,
  ProjectChildrenInternalDescription = 1024,
  ProjectChildrenInternalFieldOwners = 1025,
  ProjectChildrenInternalIgnoreType = 1026,
  ProjectChildrenInternalMediaType = 1027,
  ProjectChildrenInternalOwner = 1028,
  ProjectChildrenInternalType = 1029,
  ProjectChildrenParentChildren = 1030,
  ProjectChildrenParentId = 1031,
  ProjectContentfulId = 1032,
  ProjectCreatedAt = 1033,
  ProjectDetailChildMarkdownRemarkChildren = 1034,
  ProjectDetailChildMarkdownRemarkExcerpt = 1035,
  ProjectDetailChildMarkdownRemarkExcerptAst = 1036,
  ProjectDetailChildMarkdownRemarkHeadings = 1037,
  ProjectDetailChildMarkdownRemarkHtml = 1038,
  ProjectDetailChildMarkdownRemarkHtmlAst = 1039,
  ProjectDetailChildMarkdownRemarkId = 1040,
  ProjectDetailChildMarkdownRemarkRawMarkdownBody = 1041,
  ProjectDetailChildMarkdownRemarkTableOfContents = 1042,
  ProjectDetailChildMarkdownRemarkTimeToRead = 1043,
  ProjectDetailChildMdxBody = 1044,
  ProjectDetailChildMdxChildren = 1045,
  ProjectDetailChildMdxExcerpt = 1046,
  ProjectDetailChildMdxFileAbsolutePath = 1047,
  ProjectDetailChildMdxHeadings = 1048,
  ProjectDetailChildMdxHtml = 1049,
  ProjectDetailChildMdxId = 1050,
  ProjectDetailChildMdxMdxAst = 1051,
  ProjectDetailChildMdxRawBody = 1052,
  ProjectDetailChildMdxSlug = 1053,
  ProjectDetailChildMdxTableOfContents = 1054,
  ProjectDetailChildMdxTimeToRead = 1055,
  ProjectDetailChildren = 1056,
  ProjectDetailChildrenMarkdownRemark = 1057,
  ProjectDetailChildrenMarkdownRemarkChildren = 1058,
  ProjectDetailChildrenMarkdownRemarkExcerpt = 1059,
  ProjectDetailChildrenMarkdownRemarkExcerptAst = 1060,
  ProjectDetailChildrenMarkdownRemarkHeadings = 1061,
  ProjectDetailChildrenMarkdownRemarkHtml = 1062,
  ProjectDetailChildrenMarkdownRemarkHtmlAst = 1063,
  ProjectDetailChildrenMarkdownRemarkId = 1064,
  ProjectDetailChildrenMarkdownRemarkRawMarkdownBody = 1065,
  ProjectDetailChildrenMarkdownRemarkTableOfContents = 1066,
  ProjectDetailChildrenMarkdownRemarkTimeToRead = 1067,
  ProjectDetailChildrenMdx = 1068,
  ProjectDetailChildrenMdxBody = 1069,
  ProjectDetailChildrenMdxChildren = 1070,
  ProjectDetailChildrenMdxExcerpt = 1071,
  ProjectDetailChildrenMdxFileAbsolutePath = 1072,
  ProjectDetailChildrenMdxHeadings = 1073,
  ProjectDetailChildrenMdxHtml = 1074,
  ProjectDetailChildrenMdxId = 1075,
  ProjectDetailChildrenMdxMdxAst = 1076,
  ProjectDetailChildrenMdxRawBody = 1077,
  ProjectDetailChildrenMdxSlug = 1078,
  ProjectDetailChildrenMdxTableOfContents = 1079,
  ProjectDetailChildrenMdxTimeToRead = 1080,
  ProjectDetailChildrenChildren = 1081,
  ProjectDetailChildrenId = 1082,
  ProjectDetailDetail = 1083,
  ProjectDetailId = 1084,
  ProjectDetailInternalContent = 1085,
  ProjectDetailInternalContentDigest = 1086,
  ProjectDetailInternalDescription = 1087,
  ProjectDetailInternalFieldOwners = 1088,
  ProjectDetailInternalIgnoreType = 1089,
  ProjectDetailInternalMediaType = 1090,
  ProjectDetailInternalOwner = 1091,
  ProjectDetailInternalType = 1092,
  ProjectDetailParentChildren = 1093,
  ProjectDetailParentId = 1094,
  ProjectDetailSysType = 1095,
  ProjectEndDate = 1096,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1097,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 1098,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 1099,
  ProjectIconChildContentfulIconSvgTextNodeId = 1100,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1101,
  ProjectIconChildren = 1102,
  ProjectIconChildrenContentfulIconSvgTextNode = 1103,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1104,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 1105,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1106,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1107,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1108,
  ProjectIconChildrenChildren = 1109,
  ProjectIconChildrenId = 1110,
  ProjectIconContact = 1111,
  ProjectIconContactChildren = 1112,
  ProjectIconContactContentfulId = 1113,
  ProjectIconContactCreatedAt = 1114,
  ProjectIconContactHref = 1115,
  ProjectIconContactId = 1116,
  ProjectIconContactName = 1117,
  ProjectIconContactNodeLocale = 1118,
  ProjectIconContactSortKey = 1119,
  ProjectIconContactSpaceId = 1120,
  ProjectIconContactSubName = 1121,
  ProjectIconContactUpdatedAt = 1122,
  ProjectIconContentfulId = 1123,
  ProjectIconCreatedAt = 1124,
  ProjectIconHistory = 1125,
  ProjectIconHistoryChildren = 1126,
  ProjectIconHistoryContentfulId = 1127,
  ProjectIconHistoryCreatedAt = 1128,
  ProjectIconHistoryDate = 1129,
  ProjectIconHistoryId = 1130,
  ProjectIconHistoryName = 1131,
  ProjectIconHistoryNodeLocale = 1132,
  ProjectIconHistorySpaceId = 1133,
  ProjectIconHistorySubName = 1134,
  ProjectIconHistoryUpdatedAt = 1135,
  ProjectIconId = 1136,
  ProjectIconInternalContent = 1137,
  ProjectIconInternalContentDigest = 1138,
  ProjectIconInternalDescription = 1139,
  ProjectIconInternalFieldOwners = 1140,
  ProjectIconInternalIgnoreType = 1141,
  ProjectIconInternalMediaType = 1142,
  ProjectIconInternalOwner = 1143,
  ProjectIconInternalType = 1144,
  ProjectIconName = 1145,
  ProjectIconNodeLocale = 1146,
  ProjectIconOss = 1147,
  ProjectIconOssChildren = 1148,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1149,
  ProjectIconOssContentfulId = 1150,
  ProjectIconOssCreatedAt = 1151,
  ProjectIconOssHref = 1152,
  ProjectIconOssId = 1153,
  ProjectIconOssName = 1154,
  ProjectIconOssNodeLocale = 1155,
  ProjectIconOssSpaceId = 1156,
  ProjectIconOssStartDate = 1157,
  ProjectIconOssSubName = 1158,
  ProjectIconOssTags = 1159,
  ProjectIconOssUpdatedAt = 1160,
  ProjectIconParentChildren = 1161,
  ProjectIconParentId = 1162,
  ProjectIconProject = 1163,
  ProjectIconProjectChildren = 1164,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1165,
  ProjectIconProjectContentfulId = 1166,
  ProjectIconProjectCreatedAt = 1167,
  ProjectIconProjectEndDate = 1168,
  ProjectIconProjectId = 1169,
  ProjectIconProjectName = 1170,
  ProjectIconProjectNodeLocale = 1171,
  ProjectIconProjectSpaceId = 1172,
  ProjectIconProjectStartDate = 1173,
  ProjectIconProjectSubName = 1174,
  ProjectIconProjectTags = 1175,
  ProjectIconProjectUpdatedAt = 1176,
  ProjectIconSpaceId = 1177,
  ProjectIconSvgChildren = 1178,
  ProjectIconSvgChildrenMarkdownRemark = 1179,
  ProjectIconSvgChildrenMdx = 1180,
  ProjectIconSvgId = 1181,
  ProjectIconSvgSvg = 1182,
  ProjectIconSysRevision = 1183,
  ProjectIconSysType = 1184,
  ProjectIconUpdatedAt = 1185,
  ProjectIconWhatICanDo = 1186,
  ProjectIconWhatICanDoChildren = 1187,
  ProjectIconWhatICanDoContentfulId = 1188,
  ProjectIconWhatICanDoCreatedAt = 1189,
  ProjectIconWhatICanDoId = 1190,
  ProjectIconWhatICanDoName = 1191,
  ProjectIconWhatICanDoNodeLocale = 1192,
  ProjectIconWhatICanDoSortKey = 1193,
  ProjectIconWhatICanDoSpaceId = 1194,
  ProjectIconWhatICanDoSubName = 1195,
  ProjectIconWhatICanDoUpdatedAt = 1196,
  ProjectId = 1197,
  ProjectInternalContent = 1198,
  ProjectInternalContentDigest = 1199,
  ProjectInternalDescription = 1200,
  ProjectInternalFieldOwners = 1201,
  ProjectInternalIgnoreType = 1202,
  ProjectInternalMediaType = 1203,
  ProjectInternalOwner = 1204,
  ProjectInternalType = 1205,
  ProjectName = 1206,
  ProjectNodeLocale = 1207,
  ProjectParentChildren = 1208,
  ProjectParentChildrenChildren = 1209,
  ProjectParentChildrenId = 1210,
  ProjectParentId = 1211,
  ProjectParentInternalContent = 1212,
  ProjectParentInternalContentDigest = 1213,
  ProjectParentInternalDescription = 1214,
  ProjectParentInternalFieldOwners = 1215,
  ProjectParentInternalIgnoreType = 1216,
  ProjectParentInternalMediaType = 1217,
  ProjectParentInternalOwner = 1218,
  ProjectParentInternalType = 1219,
  ProjectParentParentChildren = 1220,
  ProjectParentParentId = 1221,
  ProjectSpaceId = 1222,
  ProjectStartDate = 1223,
  ProjectSubName = 1224,
  ProjectSysRevision = 1225,
  ProjectSysType = 1226,
  ProjectTags = 1227,
  ProjectTagsBlogPost = 1228,
  ProjectTagsBlogPostChildren = 1229,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1230,
  ProjectTagsBlogPostContentfulId = 1231,
  ProjectTagsBlogPostCreated = 1232,
  ProjectTagsBlogPostCreatedAt = 1233,
  ProjectTagsBlogPostExcerpt = 1234,
  ProjectTagsBlogPostId = 1235,
  ProjectTagsBlogPostNodeLocale = 1236,
  ProjectTagsBlogPostSlug = 1237,
  ProjectTagsBlogPostSpaceId = 1238,
  ProjectTagsBlogPostTags = 1239,
  ProjectTagsBlogPostTitle = 1240,
  ProjectTagsBlogPostUpdated = 1241,
  ProjectTagsBlogPostUpdatedAt = 1242,
  ProjectTagsChildren = 1243,
  ProjectTagsChildrenChildren = 1244,
  ProjectTagsChildrenId = 1245,
  ProjectTagsContentfulId = 1246,
  ProjectTagsCreatedAt = 1247,
  ProjectTagsId = 1248,
  ProjectTagsInternalContent = 1249,
  ProjectTagsInternalContentDigest = 1250,
  ProjectTagsInternalDescription = 1251,
  ProjectTagsInternalFieldOwners = 1252,
  ProjectTagsInternalIgnoreType = 1253,
  ProjectTagsInternalMediaType = 1254,
  ProjectTagsInternalOwner = 1255,
  ProjectTagsInternalType = 1256,
  ProjectTagsLevel = 1257,
  ProjectTagsName = 1258,
  ProjectTagsNodeLocale = 1259,
  ProjectTagsOss = 1260,
  ProjectTagsOssChildren = 1261,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1262,
  ProjectTagsOssContentfulId = 1263,
  ProjectTagsOssCreatedAt = 1264,
  ProjectTagsOssHref = 1265,
  ProjectTagsOssId = 1266,
  ProjectTagsOssName = 1267,
  ProjectTagsOssNodeLocale = 1268,
  ProjectTagsOssSpaceId = 1269,
  ProjectTagsOssStartDate = 1270,
  ProjectTagsOssSubName = 1271,
  ProjectTagsOssTags = 1272,
  ProjectTagsOssUpdatedAt = 1273,
  ProjectTagsParentChildren = 1274,
  ProjectTagsParentId = 1275,
  ProjectTagsProject = 1276,
  ProjectTagsProjectChildren = 1277,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1278,
  ProjectTagsProjectContentfulId = 1279,
  ProjectTagsProjectCreatedAt = 1280,
  ProjectTagsProjectEndDate = 1281,
  ProjectTagsProjectId = 1282,
  ProjectTagsProjectName = 1283,
  ProjectTagsProjectNodeLocale = 1284,
  ProjectTagsProjectSpaceId = 1285,
  ProjectTagsProjectStartDate = 1286,
  ProjectTagsProjectSubName = 1287,
  ProjectTagsProjectTags = 1288,
  ProjectTagsProjectUpdatedAt = 1289,
  ProjectTagsSkillMap = 1290,
  ProjectTagsSkillMapChildren = 1291,
  ProjectTagsSkillMapContentfulId = 1292,
  ProjectTagsSkillMapCreatedAt = 1293,
  ProjectTagsSkillMapExpanded = 1294,
  ProjectTagsSkillMapId = 1295,
  ProjectTagsSkillMapName = 1296,
  ProjectTagsSkillMapNodeLocale = 1297,
  ProjectTagsSkillMapSkills = 1298,
  ProjectTagsSkillMapSortKey = 1299,
  ProjectTagsSkillMapSpaceId = 1300,
  ProjectTagsSkillMapUpdatedAt = 1301,
  ProjectTagsSpaceId = 1302,
  ProjectTagsSysRevision = 1303,
  ProjectTagsSysType = 1304,
  ProjectTagsUpdatedAt = 1305,
  ProjectUpdatedAt = 1306,
  SkillMap = 1307,
  SkillMapChildren = 1308,
  SkillMapChildrenChildren = 1309,
  SkillMapChildrenChildrenChildren = 1310,
  SkillMapChildrenChildrenId = 1311,
  SkillMapChildrenId = 1312,
  SkillMapChildrenInternalContent = 1313,
  SkillMapChildrenInternalContentDigest = 1314,
  SkillMapChildrenInternalDescription = 1315,
  SkillMapChildrenInternalFieldOwners = 1316,
  SkillMapChildrenInternalIgnoreType = 1317,
  SkillMapChildrenInternalMediaType = 1318,
  SkillMapChildrenInternalOwner = 1319,
  SkillMapChildrenInternalType = 1320,
  SkillMapChildrenParentChildren = 1321,
  SkillMapChildrenParentId = 1322,
  SkillMapContentfulId = 1323,
  SkillMapCreatedAt = 1324,
  SkillMapExpanded = 1325,
  SkillMapId = 1326,
  SkillMapInternalContent = 1327,
  SkillMapInternalContentDigest = 1328,
  SkillMapInternalDescription = 1329,
  SkillMapInternalFieldOwners = 1330,
  SkillMapInternalIgnoreType = 1331,
  SkillMapInternalMediaType = 1332,
  SkillMapInternalOwner = 1333,
  SkillMapInternalType = 1334,
  SkillMapName = 1335,
  SkillMapNodeLocale = 1336,
  SkillMapParentChildren = 1337,
  SkillMapParentChildrenChildren = 1338,
  SkillMapParentChildrenId = 1339,
  SkillMapParentId = 1340,
  SkillMapParentInternalContent = 1341,
  SkillMapParentInternalContentDigest = 1342,
  SkillMapParentInternalDescription = 1343,
  SkillMapParentInternalFieldOwners = 1344,
  SkillMapParentInternalIgnoreType = 1345,
  SkillMapParentInternalMediaType = 1346,
  SkillMapParentInternalOwner = 1347,
  SkillMapParentInternalType = 1348,
  SkillMapParentParentChildren = 1349,
  SkillMapParentParentId = 1350,
  SkillMapSkills = 1351,
  SkillMapSkillsBlogPost = 1352,
  SkillMapSkillsBlogPostChildren = 1353,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1354,
  SkillMapSkillsBlogPostContentfulId = 1355,
  SkillMapSkillsBlogPostCreated = 1356,
  SkillMapSkillsBlogPostCreatedAt = 1357,
  SkillMapSkillsBlogPostExcerpt = 1358,
  SkillMapSkillsBlogPostId = 1359,
  SkillMapSkillsBlogPostNodeLocale = 1360,
  SkillMapSkillsBlogPostSlug = 1361,
  SkillMapSkillsBlogPostSpaceId = 1362,
  SkillMapSkillsBlogPostTags = 1363,
  SkillMapSkillsBlogPostTitle = 1364,
  SkillMapSkillsBlogPostUpdated = 1365,
  SkillMapSkillsBlogPostUpdatedAt = 1366,
  SkillMapSkillsChildren = 1367,
  SkillMapSkillsChildrenChildren = 1368,
  SkillMapSkillsChildrenId = 1369,
  SkillMapSkillsContentfulId = 1370,
  SkillMapSkillsCreatedAt = 1371,
  SkillMapSkillsId = 1372,
  SkillMapSkillsInternalContent = 1373,
  SkillMapSkillsInternalContentDigest = 1374,
  SkillMapSkillsInternalDescription = 1375,
  SkillMapSkillsInternalFieldOwners = 1376,
  SkillMapSkillsInternalIgnoreType = 1377,
  SkillMapSkillsInternalMediaType = 1378,
  SkillMapSkillsInternalOwner = 1379,
  SkillMapSkillsInternalType = 1380,
  SkillMapSkillsLevel = 1381,
  SkillMapSkillsName = 1382,
  SkillMapSkillsNodeLocale = 1383,
  SkillMapSkillsOss = 1384,
  SkillMapSkillsOssChildren = 1385,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 1386,
  SkillMapSkillsOssContentfulId = 1387,
  SkillMapSkillsOssCreatedAt = 1388,
  SkillMapSkillsOssHref = 1389,
  SkillMapSkillsOssId = 1390,
  SkillMapSkillsOssName = 1391,
  SkillMapSkillsOssNodeLocale = 1392,
  SkillMapSkillsOssSpaceId = 1393,
  SkillMapSkillsOssStartDate = 1394,
  SkillMapSkillsOssSubName = 1395,
  SkillMapSkillsOssTags = 1396,
  SkillMapSkillsOssUpdatedAt = 1397,
  SkillMapSkillsParentChildren = 1398,
  SkillMapSkillsParentId = 1399,
  SkillMapSkillsProject = 1400,
  SkillMapSkillsProjectChildren = 1401,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 1402,
  SkillMapSkillsProjectContentfulId = 1403,
  SkillMapSkillsProjectCreatedAt = 1404,
  SkillMapSkillsProjectEndDate = 1405,
  SkillMapSkillsProjectId = 1406,
  SkillMapSkillsProjectName = 1407,
  SkillMapSkillsProjectNodeLocale = 1408,
  SkillMapSkillsProjectSpaceId = 1409,
  SkillMapSkillsProjectStartDate = 1410,
  SkillMapSkillsProjectSubName = 1411,
  SkillMapSkillsProjectTags = 1412,
  SkillMapSkillsProjectUpdatedAt = 1413,
  SkillMapSkillsSkillMap = 1414,
  SkillMapSkillsSkillMapChildren = 1415,
  SkillMapSkillsSkillMapContentfulId = 1416,
  SkillMapSkillsSkillMapCreatedAt = 1417,
  SkillMapSkillsSkillMapExpanded = 1418,
  SkillMapSkillsSkillMapId = 1419,
  SkillMapSkillsSkillMapName = 1420,
  SkillMapSkillsSkillMapNodeLocale = 1421,
  SkillMapSkillsSkillMapSkills = 1422,
  SkillMapSkillsSkillMapSortKey = 1423,
  SkillMapSkillsSkillMapSpaceId = 1424,
  SkillMapSkillsSkillMapUpdatedAt = 1425,
  SkillMapSkillsSpaceId = 1426,
  SkillMapSkillsSysRevision = 1427,
  SkillMapSkillsSysType = 1428,
  SkillMapSkillsUpdatedAt = 1429,
  SkillMapSortKey = 1430,
  SkillMapSpaceId = 1431,
  SkillMapSysRevision = 1432,
  SkillMapSysType = 1433,
  SkillMapUpdatedAt = 1434,
  SpaceId = 1435,
  SysContentTypeSysId = 1436,
  SysContentTypeSysLinkType = 1437,
  SysContentTypeSysType = 1438,
  SysRevision = 1439,
  SysType = 1440,
  UpdatedAt = 1441
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
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 41,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 42,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 43,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 44,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 45,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 46,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 47,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 48,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 49,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 50,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 51,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 52,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 53,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 54,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 55,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 56,
  IconChildContentfulIconSvgTextNodeChildMdxId = 57,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 58,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 59,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 60,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 61,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 62,
  IconChildContentfulIconSvgTextNodeChildren = 63,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 64,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 65,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 66,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 67,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 68,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 69,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 70,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 71,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 72,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 73,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 74,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 75,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 76,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 77,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 78,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 79,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 80,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 81,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 82,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 83,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 84,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 85,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 86,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 87,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 88,
  IconChildContentfulIconSvgTextNodeChildrenId = 89,
  IconChildContentfulIconSvgTextNodeId = 90,
  IconChildContentfulIconSvgTextNodeInternalContent = 91,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 92,
  IconChildContentfulIconSvgTextNodeInternalDescription = 93,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 94,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 95,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 96,
  IconChildContentfulIconSvgTextNodeInternalOwner = 97,
  IconChildContentfulIconSvgTextNodeInternalType = 98,
  IconChildContentfulIconSvgTextNodeParentChildren = 99,
  IconChildContentfulIconSvgTextNodeParentId = 100,
  IconChildContentfulIconSvgTextNodeSvg = 101,
  IconChildContentfulIconSvgTextNodeSysType = 102,
  IconChildren = 103,
  IconChildrenContentfulIconSvgTextNode = 104,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 105,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 106,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 107,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 108,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 109,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 110,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 111,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 112,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 113,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 114,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 115,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 116,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 117,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 118,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 119,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 120,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 121,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 122,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 123,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 124,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 125,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 126,
  IconChildrenContentfulIconSvgTextNodeChildren = 127,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 128,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 129,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 130,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 131,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 132,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 133,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 134,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 135,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 136,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 137,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 138,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 139,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 140,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 141,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 142,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 143,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 144,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 145,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 146,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 147,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 148,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 149,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 150,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 151,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 152,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 153,
  IconChildrenContentfulIconSvgTextNodeId = 154,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 155,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 156,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 157,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 158,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 159,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 160,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 161,
  IconChildrenContentfulIconSvgTextNodeInternalType = 162,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 163,
  IconChildrenContentfulIconSvgTextNodeParentId = 164,
  IconChildrenContentfulIconSvgTextNodeSvg = 165,
  IconChildrenContentfulIconSvgTextNodeSysType = 166,
  IconChildrenChildren = 167,
  IconChildrenChildrenChildren = 168,
  IconChildrenChildrenId = 169,
  IconChildrenId = 170,
  IconChildrenInternalContent = 171,
  IconChildrenInternalContentDigest = 172,
  IconChildrenInternalDescription = 173,
  IconChildrenInternalFieldOwners = 174,
  IconChildrenInternalIgnoreType = 175,
  IconChildrenInternalMediaType = 176,
  IconChildrenInternalOwner = 177,
  IconChildrenInternalType = 178,
  IconChildrenParentChildren = 179,
  IconChildrenParentId = 180,
  IconContact = 181,
  IconContactChildren = 182,
  IconContactChildrenChildren = 183,
  IconContactChildrenId = 184,
  IconContactContentfulId = 185,
  IconContactCreatedAt = 186,
  IconContactHref = 187,
  IconContactIconSvgDarkChildren = 188,
  IconContactIconSvgDarkContentfulId = 189,
  IconContactIconSvgDarkCreatedAt = 190,
  IconContactIconSvgDarkDescription = 191,
  IconContactIconSvgDarkGatsbyImageData = 192,
  IconContactIconSvgDarkId = 193,
  IconContactIconSvgDarkNodeLocale = 194,
  IconContactIconSvgDarkSpaceId = 195,
  IconContactIconSvgDarkTitle = 196,
  IconContactIconSvgDarkUpdatedAt = 197,
  IconContactIconSvgLightChildren = 198,
  IconContactIconSvgLightContentfulId = 199,
  IconContactIconSvgLightCreatedAt = 200,
  IconContactIconSvgLightDescription = 201,
  IconContactIconSvgLightGatsbyImageData = 202,
  IconContactIconSvgLightId = 203,
  IconContactIconSvgLightNodeLocale = 204,
  IconContactIconSvgLightSpaceId = 205,
  IconContactIconSvgLightTitle = 206,
  IconContactIconSvgLightUpdatedAt = 207,
  IconContactIconChildren = 208,
  IconContactIconChildrenContentfulIconSvgTextNode = 209,
  IconContactIconContact = 210,
  IconContactIconContentfulId = 211,
  IconContactIconCreatedAt = 212,
  IconContactIconHistory = 213,
  IconContactIconId = 214,
  IconContactIconName = 215,
  IconContactIconNodeLocale = 216,
  IconContactIconOss = 217,
  IconContactIconProject = 218,
  IconContactIconSpaceId = 219,
  IconContactIconUpdatedAt = 220,
  IconContactIconWhatICanDo = 221,
  IconContactId = 222,
  IconContactInternalContent = 223,
  IconContactInternalContentDigest = 224,
  IconContactInternalDescription = 225,
  IconContactInternalFieldOwners = 226,
  IconContactInternalIgnoreType = 227,
  IconContactInternalMediaType = 228,
  IconContactInternalOwner = 229,
  IconContactInternalType = 230,
  IconContactName = 231,
  IconContactNodeLocale = 232,
  IconContactParentChildren = 233,
  IconContactParentId = 234,
  IconContactSortKey = 235,
  IconContactSpaceId = 236,
  IconContactSubName = 237,
  IconContactSysRevision = 238,
  IconContactSysType = 239,
  IconContactUpdatedAt = 240,
  IconContentfulId = 241,
  IconCreatedAt = 242,
  IconHistory = 243,
  IconHistoryChildren = 244,
  IconHistoryChildrenChildren = 245,
  IconHistoryChildrenId = 246,
  IconHistoryContentfulId = 247,
  IconHistoryCreatedAt = 248,
  IconHistoryDate = 249,
  IconHistoryIconChildren = 250,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 251,
  IconHistoryIconContact = 252,
  IconHistoryIconContentfulId = 253,
  IconHistoryIconCreatedAt = 254,
  IconHistoryIconHistory = 255,
  IconHistoryIconId = 256,
  IconHistoryIconName = 257,
  IconHistoryIconNodeLocale = 258,
  IconHistoryIconOss = 259,
  IconHistoryIconProject = 260,
  IconHistoryIconSpaceId = 261,
  IconHistoryIconUpdatedAt = 262,
  IconHistoryIconWhatICanDo = 263,
  IconHistoryId = 264,
  IconHistoryInternalContent = 265,
  IconHistoryInternalContentDigest = 266,
  IconHistoryInternalDescription = 267,
  IconHistoryInternalFieldOwners = 268,
  IconHistoryInternalIgnoreType = 269,
  IconHistoryInternalMediaType = 270,
  IconHistoryInternalOwner = 271,
  IconHistoryInternalType = 272,
  IconHistoryName = 273,
  IconHistoryNodeLocale = 274,
  IconHistoryParentChildren = 275,
  IconHistoryParentId = 276,
  IconHistorySpaceId = 277,
  IconHistorySubName = 278,
  IconHistorySysRevision = 279,
  IconHistorySysType = 280,
  IconHistoryUpdatedAt = 281,
  IconId = 282,
  IconInternalContent = 283,
  IconInternalContentDigest = 284,
  IconInternalDescription = 285,
  IconInternalFieldOwners = 286,
  IconInternalIgnoreType = 287,
  IconInternalMediaType = 288,
  IconInternalOwner = 289,
  IconInternalType = 290,
  IconName = 291,
  IconNodeLocale = 292,
  IconOss = 293,
  IconOssChildContentfulOssDetailTextNodeChildren = 294,
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 295,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 296,
  IconOssChildContentfulOssDetailTextNodeDetail = 297,
  IconOssChildContentfulOssDetailTextNodeId = 298,
  IconOssChildren = 299,
  IconOssChildrenContentfulOssDetailTextNode = 300,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 301,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 302,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 303,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 304,
  IconOssChildrenContentfulOssDetailTextNodeId = 305,
  IconOssChildrenChildren = 306,
  IconOssChildrenId = 307,
  IconOssContentfulId = 308,
  IconOssCreatedAt = 309,
  IconOssDetailChildren = 310,
  IconOssDetailChildrenMarkdownRemark = 311,
  IconOssDetailChildrenMdx = 312,
  IconOssDetailDetail = 313,
  IconOssDetailId = 314,
  IconOssHref = 315,
  IconOssIconChildren = 316,
  IconOssIconChildrenContentfulIconSvgTextNode = 317,
  IconOssIconContact = 318,
  IconOssIconContentfulId = 319,
  IconOssIconCreatedAt = 320,
  IconOssIconHistory = 321,
  IconOssIconId = 322,
  IconOssIconName = 323,
  IconOssIconNodeLocale = 324,
  IconOssIconOss = 325,
  IconOssIconProject = 326,
  IconOssIconSpaceId = 327,
  IconOssIconUpdatedAt = 328,
  IconOssIconWhatICanDo = 329,
  IconOssId = 330,
  IconOssImageChildren = 331,
  IconOssImageContentfulId = 332,
  IconOssImageCreatedAt = 333,
  IconOssImageDescription = 334,
  IconOssImageGatsbyImageData = 335,
  IconOssImageId = 336,
  IconOssImageNodeLocale = 337,
  IconOssImageSpaceId = 338,
  IconOssImageTitle = 339,
  IconOssImageUpdatedAt = 340,
  IconOssInternalContent = 341,
  IconOssInternalContentDigest = 342,
  IconOssInternalDescription = 343,
  IconOssInternalFieldOwners = 344,
  IconOssInternalIgnoreType = 345,
  IconOssInternalMediaType = 346,
  IconOssInternalOwner = 347,
  IconOssInternalType = 348,
  IconOssName = 349,
  IconOssNodeLocale = 350,
  IconOssParentChildren = 351,
  IconOssParentId = 352,
  IconOssSpaceId = 353,
  IconOssStartDate = 354,
  IconOssSubName = 355,
  IconOssSysRevision = 356,
  IconOssSysType = 357,
  IconOssTags = 358,
  IconOssTagsBlogPost = 359,
  IconOssTagsChildren = 360,
  IconOssTagsContentfulId = 361,
  IconOssTagsCreatedAt = 362,
  IconOssTagsId = 363,
  IconOssTagsLevel = 364,
  IconOssTagsName = 365,
  IconOssTagsNodeLocale = 366,
  IconOssTagsOss = 367,
  IconOssTagsProject = 368,
  IconOssTagsSkillMap = 369,
  IconOssTagsSpaceId = 370,
  IconOssTagsUpdatedAt = 371,
  IconOssUpdatedAt = 372,
  IconParentChildren = 373,
  IconParentChildrenChildren = 374,
  IconParentChildrenId = 375,
  IconParentId = 376,
  IconParentInternalContent = 377,
  IconParentInternalContentDigest = 378,
  IconParentInternalDescription = 379,
  IconParentInternalFieldOwners = 380,
  IconParentInternalIgnoreType = 381,
  IconParentInternalMediaType = 382,
  IconParentInternalOwner = 383,
  IconParentInternalType = 384,
  IconParentParentChildren = 385,
  IconParentParentId = 386,
  IconProject = 387,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 388,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 389,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 390,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 391,
  IconProjectChildContentfulProjectDetailTextNodeId = 392,
  IconProjectChildren = 393,
  IconProjectChildrenContentfulProjectDetailTextNode = 394,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 395,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 396,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 397,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 398,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 399,
  IconProjectChildrenChildren = 400,
  IconProjectChildrenId = 401,
  IconProjectContentfulId = 402,
  IconProjectCreatedAt = 403,
  IconProjectDetailChildren = 404,
  IconProjectDetailChildrenMarkdownRemark = 405,
  IconProjectDetailChildrenMdx = 406,
  IconProjectDetailDetail = 407,
  IconProjectDetailId = 408,
  IconProjectEndDate = 409,
  IconProjectIconChildren = 410,
  IconProjectIconChildrenContentfulIconSvgTextNode = 411,
  IconProjectIconContact = 412,
  IconProjectIconContentfulId = 413,
  IconProjectIconCreatedAt = 414,
  IconProjectIconHistory = 415,
  IconProjectIconId = 416,
  IconProjectIconName = 417,
  IconProjectIconNodeLocale = 418,
  IconProjectIconOss = 419,
  IconProjectIconProject = 420,
  IconProjectIconSpaceId = 421,
  IconProjectIconUpdatedAt = 422,
  IconProjectIconWhatICanDo = 423,
  IconProjectId = 424,
  IconProjectInternalContent = 425,
  IconProjectInternalContentDigest = 426,
  IconProjectInternalDescription = 427,
  IconProjectInternalFieldOwners = 428,
  IconProjectInternalIgnoreType = 429,
  IconProjectInternalMediaType = 430,
  IconProjectInternalOwner = 431,
  IconProjectInternalType = 432,
  IconProjectName = 433,
  IconProjectNodeLocale = 434,
  IconProjectParentChildren = 435,
  IconProjectParentId = 436,
  IconProjectSpaceId = 437,
  IconProjectStartDate = 438,
  IconProjectSubName = 439,
  IconProjectSysRevision = 440,
  IconProjectSysType = 441,
  IconProjectTags = 442,
  IconProjectTagsBlogPost = 443,
  IconProjectTagsChildren = 444,
  IconProjectTagsContentfulId = 445,
  IconProjectTagsCreatedAt = 446,
  IconProjectTagsId = 447,
  IconProjectTagsLevel = 448,
  IconProjectTagsName = 449,
  IconProjectTagsNodeLocale = 450,
  IconProjectTagsOss = 451,
  IconProjectTagsProject = 452,
  IconProjectTagsSkillMap = 453,
  IconProjectTagsSpaceId = 454,
  IconProjectTagsUpdatedAt = 455,
  IconProjectUpdatedAt = 456,
  IconSpaceId = 457,
  IconSvgChildMarkdownRemarkChildren = 458,
  IconSvgChildMarkdownRemarkExcerpt = 459,
  IconSvgChildMarkdownRemarkExcerptAst = 460,
  IconSvgChildMarkdownRemarkHeadings = 461,
  IconSvgChildMarkdownRemarkHtml = 462,
  IconSvgChildMarkdownRemarkHtmlAst = 463,
  IconSvgChildMarkdownRemarkId = 464,
  IconSvgChildMarkdownRemarkRawMarkdownBody = 465,
  IconSvgChildMarkdownRemarkTableOfContents = 466,
  IconSvgChildMarkdownRemarkTimeToRead = 467,
  IconSvgChildMdxBody = 468,
  IconSvgChildMdxChildren = 469,
  IconSvgChildMdxExcerpt = 470,
  IconSvgChildMdxFileAbsolutePath = 471,
  IconSvgChildMdxHeadings = 472,
  IconSvgChildMdxHtml = 473,
  IconSvgChildMdxId = 474,
  IconSvgChildMdxMdxAst = 475,
  IconSvgChildMdxRawBody = 476,
  IconSvgChildMdxSlug = 477,
  IconSvgChildMdxTableOfContents = 478,
  IconSvgChildMdxTimeToRead = 479,
  IconSvgChildren = 480,
  IconSvgChildrenMarkdownRemark = 481,
  IconSvgChildrenMarkdownRemarkChildren = 482,
  IconSvgChildrenMarkdownRemarkExcerpt = 483,
  IconSvgChildrenMarkdownRemarkExcerptAst = 484,
  IconSvgChildrenMarkdownRemarkHeadings = 485,
  IconSvgChildrenMarkdownRemarkHtml = 486,
  IconSvgChildrenMarkdownRemarkHtmlAst = 487,
  IconSvgChildrenMarkdownRemarkId = 488,
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 489,
  IconSvgChildrenMarkdownRemarkTableOfContents = 490,
  IconSvgChildrenMarkdownRemarkTimeToRead = 491,
  IconSvgChildrenMdx = 492,
  IconSvgChildrenMdxBody = 493,
  IconSvgChildrenMdxChildren = 494,
  IconSvgChildrenMdxExcerpt = 495,
  IconSvgChildrenMdxFileAbsolutePath = 496,
  IconSvgChildrenMdxHeadings = 497,
  IconSvgChildrenMdxHtml = 498,
  IconSvgChildrenMdxId = 499,
  IconSvgChildrenMdxMdxAst = 500,
  IconSvgChildrenMdxRawBody = 501,
  IconSvgChildrenMdxSlug = 502,
  IconSvgChildrenMdxTableOfContents = 503,
  IconSvgChildrenMdxTimeToRead = 504,
  IconSvgChildrenChildren = 505,
  IconSvgChildrenId = 506,
  IconSvgId = 507,
  IconSvgInternalContent = 508,
  IconSvgInternalContentDigest = 509,
  IconSvgInternalDescription = 510,
  IconSvgInternalFieldOwners = 511,
  IconSvgInternalIgnoreType = 512,
  IconSvgInternalMediaType = 513,
  IconSvgInternalOwner = 514,
  IconSvgInternalType = 515,
  IconSvgParentChildren = 516,
  IconSvgParentId = 517,
  IconSvgSvg = 518,
  IconSvgSysType = 519,
  IconSysRevision = 520,
  IconSysType = 521,
  IconUpdatedAt = 522,
  IconWhatICanDo = 523,
  IconWhatICanDoChildren = 524,
  IconWhatICanDoChildrenChildren = 525,
  IconWhatICanDoChildrenId = 526,
  IconWhatICanDoContentfulId = 527,
  IconWhatICanDoCreatedAt = 528,
  IconWhatICanDoIconChildren = 529,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 530,
  IconWhatICanDoIconContact = 531,
  IconWhatICanDoIconContentfulId = 532,
  IconWhatICanDoIconCreatedAt = 533,
  IconWhatICanDoIconHistory = 534,
  IconWhatICanDoIconId = 535,
  IconWhatICanDoIconName = 536,
  IconWhatICanDoIconNodeLocale = 537,
  IconWhatICanDoIconOss = 538,
  IconWhatICanDoIconProject = 539,
  IconWhatICanDoIconSpaceId = 540,
  IconWhatICanDoIconUpdatedAt = 541,
  IconWhatICanDoIconWhatICanDo = 542,
  IconWhatICanDoId = 543,
  IconWhatICanDoInternalContent = 544,
  IconWhatICanDoInternalContentDigest = 545,
  IconWhatICanDoInternalDescription = 546,
  IconWhatICanDoInternalFieldOwners = 547,
  IconWhatICanDoInternalIgnoreType = 548,
  IconWhatICanDoInternalMediaType = 549,
  IconWhatICanDoInternalOwner = 550,
  IconWhatICanDoInternalType = 551,
  IconWhatICanDoName = 552,
  IconWhatICanDoNodeLocale = 553,
  IconWhatICanDoParentChildren = 554,
  IconWhatICanDoParentId = 555,
  IconWhatICanDoSortKey = 556,
  IconWhatICanDoSpaceId = 557,
  IconWhatICanDoSubName = 558,
  IconWhatICanDoSysRevision = 559,
  IconWhatICanDoSysType = 560,
  IconWhatICanDoUpdatedAt = 561,
  Id = 562,
  InternalContent = 563,
  InternalContentDigest = 564,
  InternalDescription = 565,
  InternalFieldOwners = 566,
  InternalIgnoreType = 567,
  InternalMediaType = 568,
  InternalOwner = 569,
  InternalType = 570,
  Name = 571,
  NodeLocale = 572,
  ParentChildren = 573,
  ParentChildrenChildren = 574,
  ParentChildrenChildrenChildren = 575,
  ParentChildrenChildrenId = 576,
  ParentChildrenId = 577,
  ParentChildrenInternalContent = 578,
  ParentChildrenInternalContentDigest = 579,
  ParentChildrenInternalDescription = 580,
  ParentChildrenInternalFieldOwners = 581,
  ParentChildrenInternalIgnoreType = 582,
  ParentChildrenInternalMediaType = 583,
  ParentChildrenInternalOwner = 584,
  ParentChildrenInternalType = 585,
  ParentChildrenParentChildren = 586,
  ParentChildrenParentId = 587,
  ParentId = 588,
  ParentInternalContent = 589,
  ParentInternalContentDigest = 590,
  ParentInternalDescription = 591,
  ParentInternalFieldOwners = 592,
  ParentInternalIgnoreType = 593,
  ParentInternalMediaType = 594,
  ParentInternalOwner = 595,
  ParentInternalType = 596,
  ParentParentChildren = 597,
  ParentParentChildrenChildren = 598,
  ParentParentChildrenId = 599,
  ParentParentId = 600,
  ParentParentInternalContent = 601,
  ParentParentInternalContentDigest = 602,
  ParentParentInternalDescription = 603,
  ParentParentInternalFieldOwners = 604,
  ParentParentInternalIgnoreType = 605,
  ParentParentInternalMediaType = 606,
  ParentParentInternalOwner = 607,
  ParentParentInternalType = 608,
  ParentParentParentChildren = 609,
  ParentParentParentId = 610,
  SortKey = 611,
  SpaceId = 612,
  SubName = 613,
  SysContentTypeSysId = 614,
  SysContentTypeSysLinkType = 615,
  SysContentTypeSysType = 616,
  SysRevision = 617,
  SysType = 618,
  UpdatedAt = 619
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

export enum MarkdownExcerptFormats {
  Html = 0,
  Markdown = 1,
  Plain = 2
}

export type MarkdownHeading = {
  depth: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type MarkdownHeadingFilterInput = {
  depth: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  value: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch: InputMaybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 0,
  H2 = 1,
  H3 = 2,
  H4 = 3,
  H5 = 4,
  H6 = 5
}

export type MarkdownRemark = Node & {
  children: Array<Node>;
  excerpt: Maybe<Scalars['String']>;
  excerptAst: Maybe<Scalars['JSON']>;
  frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  headings: Maybe<Array<Maybe<MarkdownHeading>>>;
  html: Maybe<Scalars['String']>;
  htmlAst: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  rawMarkdownBody: Maybe<Scalars['String']>;
  tableOfContents: Maybe<Scalars['String']>;
  timeToRead: Maybe<Scalars['Int']>;
  wordCount: Maybe<MarkdownWordCount>;
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
  depth: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  heading: InputMaybe<Scalars['String']>;
  maxDepth: InputMaybe<Scalars['Int']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  group: Array<MarkdownRemarkGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  next: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
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
  Excerpt = 39,
  ExcerptAst = 40,
  FrontmatterTitle = 41,
  Headings = 42,
  HeadingsDepth = 43,
  HeadingsId = 44,
  HeadingsValue = 45,
  Html = 46,
  HtmlAst = 47,
  Id = 48,
  InternalContent = 49,
  InternalContentDigest = 50,
  InternalDescription = 51,
  InternalFieldOwners = 52,
  InternalIgnoreType = 53,
  InternalMediaType = 54,
  InternalOwner = 55,
  InternalType = 56,
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
  RawMarkdownBody = 95,
  TableOfContents = 96,
  TimeToRead = 97,
  WordCountParagraphs = 98,
  WordCountSentences = 99,
  WordCountWords = 100
}

export type MarkdownRemarkFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  excerptAst: InputMaybe<JsonQueryOperatorInput>;
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings: InputMaybe<MarkdownHeadingFilterListInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  htmlAst: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>;
  tableOfContents: InputMaybe<StringQueryOperatorInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  wordCount: InputMaybe<MarkdownWordCountFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  fields: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs: Maybe<Scalars['Int']>;
  sentences: Maybe<Scalars['Int']>;
  words: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs: InputMaybe<IntQueryOperatorInput>;
  sentences: InputMaybe<IntQueryOperatorInput>;
  words: InputMaybe<IntQueryOperatorInput>;
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
  allMarkdownRemark: MarkdownRemarkConnection;
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
  markdownRemark: Maybe<MarkdownRemark>;
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


export type QueryAllMarkdownRemarkArgs = {
  filter: InputMaybe<MarkdownRemarkFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<MarkdownRemarkSortInput>;
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
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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


export type QueryMarkdownRemarkArgs = {
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  excerptAst: InputMaybe<JsonQueryOperatorInput>;
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings: InputMaybe<MarkdownHeadingFilterListInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  htmlAst: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>;
  tableOfContents: InputMaybe<StringQueryOperatorInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  wordCount: InputMaybe<MarkdownWordCountFilterInput>;
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
  SiteMetadataTitle = 94
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
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
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
  ChildMarkdownRemarkChildren = 0,
  ChildMarkdownRemarkChildrenChildren = 1,
  ChildMarkdownRemarkChildrenChildrenChildren = 2,
  ChildMarkdownRemarkChildrenChildrenId = 3,
  ChildMarkdownRemarkChildrenId = 4,
  ChildMarkdownRemarkChildrenInternalContent = 5,
  ChildMarkdownRemarkChildrenInternalContentDigest = 6,
  ChildMarkdownRemarkChildrenInternalDescription = 7,
  ChildMarkdownRemarkChildrenInternalFieldOwners = 8,
  ChildMarkdownRemarkChildrenInternalIgnoreType = 9,
  ChildMarkdownRemarkChildrenInternalMediaType = 10,
  ChildMarkdownRemarkChildrenInternalOwner = 11,
  ChildMarkdownRemarkChildrenInternalType = 12,
  ChildMarkdownRemarkChildrenParentChildren = 13,
  ChildMarkdownRemarkChildrenParentId = 14,
  ChildMarkdownRemarkExcerpt = 15,
  ChildMarkdownRemarkExcerptAst = 16,
  ChildMarkdownRemarkFrontmatterTitle = 17,
  ChildMarkdownRemarkHeadings = 18,
  ChildMarkdownRemarkHeadingsDepth = 19,
  ChildMarkdownRemarkHeadingsId = 20,
  ChildMarkdownRemarkHeadingsValue = 21,
  ChildMarkdownRemarkHtml = 22,
  ChildMarkdownRemarkHtmlAst = 23,
  ChildMarkdownRemarkId = 24,
  ChildMarkdownRemarkInternalContent = 25,
  ChildMarkdownRemarkInternalContentDigest = 26,
  ChildMarkdownRemarkInternalDescription = 27,
  ChildMarkdownRemarkInternalFieldOwners = 28,
  ChildMarkdownRemarkInternalIgnoreType = 29,
  ChildMarkdownRemarkInternalMediaType = 30,
  ChildMarkdownRemarkInternalOwner = 31,
  ChildMarkdownRemarkInternalType = 32,
  ChildMarkdownRemarkParentChildren = 33,
  ChildMarkdownRemarkParentChildrenChildren = 34,
  ChildMarkdownRemarkParentChildrenId = 35,
  ChildMarkdownRemarkParentId = 36,
  ChildMarkdownRemarkParentInternalContent = 37,
  ChildMarkdownRemarkParentInternalContentDigest = 38,
  ChildMarkdownRemarkParentInternalDescription = 39,
  ChildMarkdownRemarkParentInternalFieldOwners = 40,
  ChildMarkdownRemarkParentInternalIgnoreType = 41,
  ChildMarkdownRemarkParentInternalMediaType = 42,
  ChildMarkdownRemarkParentInternalOwner = 43,
  ChildMarkdownRemarkParentInternalType = 44,
  ChildMarkdownRemarkParentParentChildren = 45,
  ChildMarkdownRemarkParentParentId = 46,
  ChildMarkdownRemarkRawMarkdownBody = 47,
  ChildMarkdownRemarkTableOfContents = 48,
  ChildMarkdownRemarkTimeToRead = 49,
  ChildMarkdownRemarkWordCountParagraphs = 50,
  ChildMarkdownRemarkWordCountSentences = 51,
  ChildMarkdownRemarkWordCountWords = 52,
  ChildMdxBody = 53,
  ChildMdxChildren = 54,
  ChildMdxChildrenChildren = 55,
  ChildMdxChildrenChildrenChildren = 56,
  ChildMdxChildrenChildrenId = 57,
  ChildMdxChildrenId = 58,
  ChildMdxChildrenInternalContent = 59,
  ChildMdxChildrenInternalContentDigest = 60,
  ChildMdxChildrenInternalDescription = 61,
  ChildMdxChildrenInternalFieldOwners = 62,
  ChildMdxChildrenInternalIgnoreType = 63,
  ChildMdxChildrenInternalMediaType = 64,
  ChildMdxChildrenInternalOwner = 65,
  ChildMdxChildrenInternalType = 66,
  ChildMdxChildrenParentChildren = 67,
  ChildMdxChildrenParentId = 68,
  ChildMdxExcerpt = 69,
  ChildMdxFileAbsolutePath = 70,
  ChildMdxFrontmatterTitle = 71,
  ChildMdxHeadings = 72,
  ChildMdxHeadingsDepth = 73,
  ChildMdxHeadingsValue = 74,
  ChildMdxHtml = 75,
  ChildMdxId = 76,
  ChildMdxInternalContent = 77,
  ChildMdxInternalContentDigest = 78,
  ChildMdxInternalDescription = 79,
  ChildMdxInternalFieldOwners = 80,
  ChildMdxInternalIgnoreType = 81,
  ChildMdxInternalMediaType = 82,
  ChildMdxInternalOwner = 83,
  ChildMdxInternalType = 84,
  ChildMdxMdxAst = 85,
  ChildMdxParentChildren = 86,
  ChildMdxParentChildrenChildren = 87,
  ChildMdxParentChildrenId = 88,
  ChildMdxParentId = 89,
  ChildMdxParentInternalContent = 90,
  ChildMdxParentInternalContentDigest = 91,
  ChildMdxParentInternalDescription = 92,
  ChildMdxParentInternalFieldOwners = 93,
  ChildMdxParentInternalIgnoreType = 94,
  ChildMdxParentInternalMediaType = 95,
  ChildMdxParentInternalOwner = 96,
  ChildMdxParentInternalType = 97,
  ChildMdxParentParentChildren = 98,
  ChildMdxParentParentId = 99,
  ChildMdxRawBody = 100,
  ChildMdxSlug = 101,
  ChildMdxTableOfContents = 102,
  ChildMdxTimeToRead = 103,
  ChildMdxWordCountParagraphs = 104,
  ChildMdxWordCountSentences = 105,
  ChildMdxWordCountWords = 106,
  Children = 107,
  ChildrenMarkdownRemark = 108,
  ChildrenMarkdownRemarkChildren = 109,
  ChildrenMarkdownRemarkChildrenChildren = 110,
  ChildrenMarkdownRemarkChildrenChildrenChildren = 111,
  ChildrenMarkdownRemarkChildrenChildrenId = 112,
  ChildrenMarkdownRemarkChildrenId = 113,
  ChildrenMarkdownRemarkChildrenInternalContent = 114,
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 115,
  ChildrenMarkdownRemarkChildrenInternalDescription = 116,
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 117,
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 118,
  ChildrenMarkdownRemarkChildrenInternalMediaType = 119,
  ChildrenMarkdownRemarkChildrenInternalOwner = 120,
  ChildrenMarkdownRemarkChildrenInternalType = 121,
  ChildrenMarkdownRemarkChildrenParentChildren = 122,
  ChildrenMarkdownRemarkChildrenParentId = 123,
  ChildrenMarkdownRemarkExcerpt = 124,
  ChildrenMarkdownRemarkExcerptAst = 125,
  ChildrenMarkdownRemarkFrontmatterTitle = 126,
  ChildrenMarkdownRemarkHeadings = 127,
  ChildrenMarkdownRemarkHeadingsDepth = 128,
  ChildrenMarkdownRemarkHeadingsId = 129,
  ChildrenMarkdownRemarkHeadingsValue = 130,
  ChildrenMarkdownRemarkHtml = 131,
  ChildrenMarkdownRemarkHtmlAst = 132,
  ChildrenMarkdownRemarkId = 133,
  ChildrenMarkdownRemarkInternalContent = 134,
  ChildrenMarkdownRemarkInternalContentDigest = 135,
  ChildrenMarkdownRemarkInternalDescription = 136,
  ChildrenMarkdownRemarkInternalFieldOwners = 137,
  ChildrenMarkdownRemarkInternalIgnoreType = 138,
  ChildrenMarkdownRemarkInternalMediaType = 139,
  ChildrenMarkdownRemarkInternalOwner = 140,
  ChildrenMarkdownRemarkInternalType = 141,
  ChildrenMarkdownRemarkParentChildren = 142,
  ChildrenMarkdownRemarkParentChildrenChildren = 143,
  ChildrenMarkdownRemarkParentChildrenId = 144,
  ChildrenMarkdownRemarkParentId = 145,
  ChildrenMarkdownRemarkParentInternalContent = 146,
  ChildrenMarkdownRemarkParentInternalContentDigest = 147,
  ChildrenMarkdownRemarkParentInternalDescription = 148,
  ChildrenMarkdownRemarkParentInternalFieldOwners = 149,
  ChildrenMarkdownRemarkParentInternalIgnoreType = 150,
  ChildrenMarkdownRemarkParentInternalMediaType = 151,
  ChildrenMarkdownRemarkParentInternalOwner = 152,
  ChildrenMarkdownRemarkParentInternalType = 153,
  ChildrenMarkdownRemarkParentParentChildren = 154,
  ChildrenMarkdownRemarkParentParentId = 155,
  ChildrenMarkdownRemarkRawMarkdownBody = 156,
  ChildrenMarkdownRemarkTableOfContents = 157,
  ChildrenMarkdownRemarkTimeToRead = 158,
  ChildrenMarkdownRemarkWordCountParagraphs = 159,
  ChildrenMarkdownRemarkWordCountSentences = 160,
  ChildrenMarkdownRemarkWordCountWords = 161,
  ChildrenMdx = 162,
  ChildrenMdxBody = 163,
  ChildrenMdxChildren = 164,
  ChildrenMdxChildrenChildren = 165,
  ChildrenMdxChildrenChildrenChildren = 166,
  ChildrenMdxChildrenChildrenId = 167,
  ChildrenMdxChildrenId = 168,
  ChildrenMdxChildrenInternalContent = 169,
  ChildrenMdxChildrenInternalContentDigest = 170,
  ChildrenMdxChildrenInternalDescription = 171,
  ChildrenMdxChildrenInternalFieldOwners = 172,
  ChildrenMdxChildrenInternalIgnoreType = 173,
  ChildrenMdxChildrenInternalMediaType = 174,
  ChildrenMdxChildrenInternalOwner = 175,
  ChildrenMdxChildrenInternalType = 176,
  ChildrenMdxChildrenParentChildren = 177,
  ChildrenMdxChildrenParentId = 178,
  ChildrenMdxExcerpt = 179,
  ChildrenMdxFileAbsolutePath = 180,
  ChildrenMdxFrontmatterTitle = 181,
  ChildrenMdxHeadings = 182,
  ChildrenMdxHeadingsDepth = 183,
  ChildrenMdxHeadingsValue = 184,
  ChildrenMdxHtml = 185,
  ChildrenMdxId = 186,
  ChildrenMdxInternalContent = 187,
  ChildrenMdxInternalContentDigest = 188,
  ChildrenMdxInternalDescription = 189,
  ChildrenMdxInternalFieldOwners = 190,
  ChildrenMdxInternalIgnoreType = 191,
  ChildrenMdxInternalMediaType = 192,
  ChildrenMdxInternalOwner = 193,
  ChildrenMdxInternalType = 194,
  ChildrenMdxMdxAst = 195,
  ChildrenMdxParentChildren = 196,
  ChildrenMdxParentChildrenChildren = 197,
  ChildrenMdxParentChildrenId = 198,
  ChildrenMdxParentId = 199,
  ChildrenMdxParentInternalContent = 200,
  ChildrenMdxParentInternalContentDigest = 201,
  ChildrenMdxParentInternalDescription = 202,
  ChildrenMdxParentInternalFieldOwners = 203,
  ChildrenMdxParentInternalIgnoreType = 204,
  ChildrenMdxParentInternalMediaType = 205,
  ChildrenMdxParentInternalOwner = 206,
  ChildrenMdxParentInternalType = 207,
  ChildrenMdxParentParentChildren = 208,
  ChildrenMdxParentParentId = 209,
  ChildrenMdxRawBody = 210,
  ChildrenMdxSlug = 211,
  ChildrenMdxTableOfContents = 212,
  ChildrenMdxTimeToRead = 213,
  ChildrenMdxWordCountParagraphs = 214,
  ChildrenMdxWordCountSentences = 215,
  ChildrenMdxWordCountWords = 216,
  ChildrenChildren = 217,
  ChildrenChildrenChildren = 218,
  ChildrenChildrenChildrenChildren = 219,
  ChildrenChildrenChildrenId = 220,
  ChildrenChildrenId = 221,
  ChildrenChildrenInternalContent = 222,
  ChildrenChildrenInternalContentDigest = 223,
  ChildrenChildrenInternalDescription = 224,
  ChildrenChildrenInternalFieldOwners = 225,
  ChildrenChildrenInternalIgnoreType = 226,
  ChildrenChildrenInternalMediaType = 227,
  ChildrenChildrenInternalOwner = 228,
  ChildrenChildrenInternalType = 229,
  ChildrenChildrenParentChildren = 230,
  ChildrenChildrenParentId = 231,
  ChildrenId = 232,
  ChildrenInternalContent = 233,
  ChildrenInternalContentDigest = 234,
  ChildrenInternalDescription = 235,
  ChildrenInternalFieldOwners = 236,
  ChildrenInternalIgnoreType = 237,
  ChildrenInternalMediaType = 238,
  ChildrenInternalOwner = 239,
  ChildrenInternalType = 240,
  ChildrenParentChildren = 241,
  ChildrenParentChildrenChildren = 242,
  ChildrenParentChildrenId = 243,
  ChildrenParentId = 244,
  ChildrenParentInternalContent = 245,
  ChildrenParentInternalContentDigest = 246,
  ChildrenParentInternalDescription = 247,
  ChildrenParentInternalFieldOwners = 248,
  ChildrenParentInternalIgnoreType = 249,
  ChildrenParentInternalMediaType = 250,
  ChildrenParentInternalOwner = 251,
  ChildrenParentInternalType = 252,
  ChildrenParentParentChildren = 253,
  ChildrenParentParentId = 254,
  Content = 255,
  Id = 256,
  InternalContent = 257,
  InternalContentDigest = 258,
  InternalDescription = 259,
  InternalFieldOwners = 260,
  InternalIgnoreType = 261,
  InternalMediaType = 262,
  InternalOwner = 263,
  InternalType = 264,
  ParentChildren = 265,
  ParentChildrenChildren = 266,
  ParentChildrenChildrenChildren = 267,
  ParentChildrenChildrenId = 268,
  ParentChildrenId = 269,
  ParentChildrenInternalContent = 270,
  ParentChildrenInternalContentDigest = 271,
  ParentChildrenInternalDescription = 272,
  ParentChildrenInternalFieldOwners = 273,
  ParentChildrenInternalIgnoreType = 274,
  ParentChildrenInternalMediaType = 275,
  ParentChildrenInternalOwner = 276,
  ParentChildrenInternalType = 277,
  ParentChildrenParentChildren = 278,
  ParentChildrenParentId = 279,
  ParentId = 280,
  ParentInternalContent = 281,
  ParentInternalContentDigest = 282,
  ParentInternalDescription = 283,
  ParentInternalFieldOwners = 284,
  ParentInternalIgnoreType = 285,
  ParentInternalMediaType = 286,
  ParentInternalOwner = 287,
  ParentInternalType = 288,
  ParentParentChildren = 289,
  ParentParentChildrenChildren = 290,
  ParentParentChildrenId = 291,
  ParentParentId = 292,
  ParentParentInternalContent = 293,
  ParentParentInternalContentDigest = 294,
  ParentParentInternalDescription = 295,
  ParentParentInternalFieldOwners = 296,
  ParentParentInternalIgnoreType = 297,
  ParentParentInternalMediaType = 298,
  ParentParentInternalOwner = 299,
  ParentParentInternalType = 300,
  ParentParentParentChildren = 301,
  ParentParentParentId = 302,
  SysType = 303
}

export type ContentfulBlogPostContentTextNodeFilterInput = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
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
  ChildMarkdownRemarkChildren = 0,
  ChildMarkdownRemarkChildrenChildren = 1,
  ChildMarkdownRemarkChildrenChildrenChildren = 2,
  ChildMarkdownRemarkChildrenChildrenId = 3,
  ChildMarkdownRemarkChildrenId = 4,
  ChildMarkdownRemarkChildrenInternalContent = 5,
  ChildMarkdownRemarkChildrenInternalContentDigest = 6,
  ChildMarkdownRemarkChildrenInternalDescription = 7,
  ChildMarkdownRemarkChildrenInternalFieldOwners = 8,
  ChildMarkdownRemarkChildrenInternalIgnoreType = 9,
  ChildMarkdownRemarkChildrenInternalMediaType = 10,
  ChildMarkdownRemarkChildrenInternalOwner = 11,
  ChildMarkdownRemarkChildrenInternalType = 12,
  ChildMarkdownRemarkChildrenParentChildren = 13,
  ChildMarkdownRemarkChildrenParentId = 14,
  ChildMarkdownRemarkExcerpt = 15,
  ChildMarkdownRemarkExcerptAst = 16,
  ChildMarkdownRemarkFrontmatterTitle = 17,
  ChildMarkdownRemarkHeadings = 18,
  ChildMarkdownRemarkHeadingsDepth = 19,
  ChildMarkdownRemarkHeadingsId = 20,
  ChildMarkdownRemarkHeadingsValue = 21,
  ChildMarkdownRemarkHtml = 22,
  ChildMarkdownRemarkHtmlAst = 23,
  ChildMarkdownRemarkId = 24,
  ChildMarkdownRemarkInternalContent = 25,
  ChildMarkdownRemarkInternalContentDigest = 26,
  ChildMarkdownRemarkInternalDescription = 27,
  ChildMarkdownRemarkInternalFieldOwners = 28,
  ChildMarkdownRemarkInternalIgnoreType = 29,
  ChildMarkdownRemarkInternalMediaType = 30,
  ChildMarkdownRemarkInternalOwner = 31,
  ChildMarkdownRemarkInternalType = 32,
  ChildMarkdownRemarkParentChildren = 33,
  ChildMarkdownRemarkParentChildrenChildren = 34,
  ChildMarkdownRemarkParentChildrenId = 35,
  ChildMarkdownRemarkParentId = 36,
  ChildMarkdownRemarkParentInternalContent = 37,
  ChildMarkdownRemarkParentInternalContentDigest = 38,
  ChildMarkdownRemarkParentInternalDescription = 39,
  ChildMarkdownRemarkParentInternalFieldOwners = 40,
  ChildMarkdownRemarkParentInternalIgnoreType = 41,
  ChildMarkdownRemarkParentInternalMediaType = 42,
  ChildMarkdownRemarkParentInternalOwner = 43,
  ChildMarkdownRemarkParentInternalType = 44,
  ChildMarkdownRemarkParentParentChildren = 45,
  ChildMarkdownRemarkParentParentId = 46,
  ChildMarkdownRemarkRawMarkdownBody = 47,
  ChildMarkdownRemarkTableOfContents = 48,
  ChildMarkdownRemarkTimeToRead = 49,
  ChildMarkdownRemarkWordCountParagraphs = 50,
  ChildMarkdownRemarkWordCountSentences = 51,
  ChildMarkdownRemarkWordCountWords = 52,
  ChildMdxBody = 53,
  ChildMdxChildren = 54,
  ChildMdxChildrenChildren = 55,
  ChildMdxChildrenChildrenChildren = 56,
  ChildMdxChildrenChildrenId = 57,
  ChildMdxChildrenId = 58,
  ChildMdxChildrenInternalContent = 59,
  ChildMdxChildrenInternalContentDigest = 60,
  ChildMdxChildrenInternalDescription = 61,
  ChildMdxChildrenInternalFieldOwners = 62,
  ChildMdxChildrenInternalIgnoreType = 63,
  ChildMdxChildrenInternalMediaType = 64,
  ChildMdxChildrenInternalOwner = 65,
  ChildMdxChildrenInternalType = 66,
  ChildMdxChildrenParentChildren = 67,
  ChildMdxChildrenParentId = 68,
  ChildMdxExcerpt = 69,
  ChildMdxFileAbsolutePath = 70,
  ChildMdxFrontmatterTitle = 71,
  ChildMdxHeadings = 72,
  ChildMdxHeadingsDepth = 73,
  ChildMdxHeadingsValue = 74,
  ChildMdxHtml = 75,
  ChildMdxId = 76,
  ChildMdxInternalContent = 77,
  ChildMdxInternalContentDigest = 78,
  ChildMdxInternalDescription = 79,
  ChildMdxInternalFieldOwners = 80,
  ChildMdxInternalIgnoreType = 81,
  ChildMdxInternalMediaType = 82,
  ChildMdxInternalOwner = 83,
  ChildMdxInternalType = 84,
  ChildMdxMdxAst = 85,
  ChildMdxParentChildren = 86,
  ChildMdxParentChildrenChildren = 87,
  ChildMdxParentChildrenId = 88,
  ChildMdxParentId = 89,
  ChildMdxParentInternalContent = 90,
  ChildMdxParentInternalContentDigest = 91,
  ChildMdxParentInternalDescription = 92,
  ChildMdxParentInternalFieldOwners = 93,
  ChildMdxParentInternalIgnoreType = 94,
  ChildMdxParentInternalMediaType = 95,
  ChildMdxParentInternalOwner = 96,
  ChildMdxParentInternalType = 97,
  ChildMdxParentParentChildren = 98,
  ChildMdxParentParentId = 99,
  ChildMdxRawBody = 100,
  ChildMdxSlug = 101,
  ChildMdxTableOfContents = 102,
  ChildMdxTimeToRead = 103,
  ChildMdxWordCountParagraphs = 104,
  ChildMdxWordCountSentences = 105,
  ChildMdxWordCountWords = 106,
  Children = 107,
  ChildrenMarkdownRemark = 108,
  ChildrenMarkdownRemarkChildren = 109,
  ChildrenMarkdownRemarkChildrenChildren = 110,
  ChildrenMarkdownRemarkChildrenChildrenChildren = 111,
  ChildrenMarkdownRemarkChildrenChildrenId = 112,
  ChildrenMarkdownRemarkChildrenId = 113,
  ChildrenMarkdownRemarkChildrenInternalContent = 114,
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 115,
  ChildrenMarkdownRemarkChildrenInternalDescription = 116,
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 117,
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 118,
  ChildrenMarkdownRemarkChildrenInternalMediaType = 119,
  ChildrenMarkdownRemarkChildrenInternalOwner = 120,
  ChildrenMarkdownRemarkChildrenInternalType = 121,
  ChildrenMarkdownRemarkChildrenParentChildren = 122,
  ChildrenMarkdownRemarkChildrenParentId = 123,
  ChildrenMarkdownRemarkExcerpt = 124,
  ChildrenMarkdownRemarkExcerptAst = 125,
  ChildrenMarkdownRemarkFrontmatterTitle = 126,
  ChildrenMarkdownRemarkHeadings = 127,
  ChildrenMarkdownRemarkHeadingsDepth = 128,
  ChildrenMarkdownRemarkHeadingsId = 129,
  ChildrenMarkdownRemarkHeadingsValue = 130,
  ChildrenMarkdownRemarkHtml = 131,
  ChildrenMarkdownRemarkHtmlAst = 132,
  ChildrenMarkdownRemarkId = 133,
  ChildrenMarkdownRemarkInternalContent = 134,
  ChildrenMarkdownRemarkInternalContentDigest = 135,
  ChildrenMarkdownRemarkInternalDescription = 136,
  ChildrenMarkdownRemarkInternalFieldOwners = 137,
  ChildrenMarkdownRemarkInternalIgnoreType = 138,
  ChildrenMarkdownRemarkInternalMediaType = 139,
  ChildrenMarkdownRemarkInternalOwner = 140,
  ChildrenMarkdownRemarkInternalType = 141,
  ChildrenMarkdownRemarkParentChildren = 142,
  ChildrenMarkdownRemarkParentChildrenChildren = 143,
  ChildrenMarkdownRemarkParentChildrenId = 144,
  ChildrenMarkdownRemarkParentId = 145,
  ChildrenMarkdownRemarkParentInternalContent = 146,
  ChildrenMarkdownRemarkParentInternalContentDigest = 147,
  ChildrenMarkdownRemarkParentInternalDescription = 148,
  ChildrenMarkdownRemarkParentInternalFieldOwners = 149,
  ChildrenMarkdownRemarkParentInternalIgnoreType = 150,
  ChildrenMarkdownRemarkParentInternalMediaType = 151,
  ChildrenMarkdownRemarkParentInternalOwner = 152,
  ChildrenMarkdownRemarkParentInternalType = 153,
  ChildrenMarkdownRemarkParentParentChildren = 154,
  ChildrenMarkdownRemarkParentParentId = 155,
  ChildrenMarkdownRemarkRawMarkdownBody = 156,
  ChildrenMarkdownRemarkTableOfContents = 157,
  ChildrenMarkdownRemarkTimeToRead = 158,
  ChildrenMarkdownRemarkWordCountParagraphs = 159,
  ChildrenMarkdownRemarkWordCountSentences = 160,
  ChildrenMarkdownRemarkWordCountWords = 161,
  ChildrenMdx = 162,
  ChildrenMdxBody = 163,
  ChildrenMdxChildren = 164,
  ChildrenMdxChildrenChildren = 165,
  ChildrenMdxChildrenChildrenChildren = 166,
  ChildrenMdxChildrenChildrenId = 167,
  ChildrenMdxChildrenId = 168,
  ChildrenMdxChildrenInternalContent = 169,
  ChildrenMdxChildrenInternalContentDigest = 170,
  ChildrenMdxChildrenInternalDescription = 171,
  ChildrenMdxChildrenInternalFieldOwners = 172,
  ChildrenMdxChildrenInternalIgnoreType = 173,
  ChildrenMdxChildrenInternalMediaType = 174,
  ChildrenMdxChildrenInternalOwner = 175,
  ChildrenMdxChildrenInternalType = 176,
  ChildrenMdxChildrenParentChildren = 177,
  ChildrenMdxChildrenParentId = 178,
  ChildrenMdxExcerpt = 179,
  ChildrenMdxFileAbsolutePath = 180,
  ChildrenMdxFrontmatterTitle = 181,
  ChildrenMdxHeadings = 182,
  ChildrenMdxHeadingsDepth = 183,
  ChildrenMdxHeadingsValue = 184,
  ChildrenMdxHtml = 185,
  ChildrenMdxId = 186,
  ChildrenMdxInternalContent = 187,
  ChildrenMdxInternalContentDigest = 188,
  ChildrenMdxInternalDescription = 189,
  ChildrenMdxInternalFieldOwners = 190,
  ChildrenMdxInternalIgnoreType = 191,
  ChildrenMdxInternalMediaType = 192,
  ChildrenMdxInternalOwner = 193,
  ChildrenMdxInternalType = 194,
  ChildrenMdxMdxAst = 195,
  ChildrenMdxParentChildren = 196,
  ChildrenMdxParentChildrenChildren = 197,
  ChildrenMdxParentChildrenId = 198,
  ChildrenMdxParentId = 199,
  ChildrenMdxParentInternalContent = 200,
  ChildrenMdxParentInternalContentDigest = 201,
  ChildrenMdxParentInternalDescription = 202,
  ChildrenMdxParentInternalFieldOwners = 203,
  ChildrenMdxParentInternalIgnoreType = 204,
  ChildrenMdxParentInternalMediaType = 205,
  ChildrenMdxParentInternalOwner = 206,
  ChildrenMdxParentInternalType = 207,
  ChildrenMdxParentParentChildren = 208,
  ChildrenMdxParentParentId = 209,
  ChildrenMdxRawBody = 210,
  ChildrenMdxSlug = 211,
  ChildrenMdxTableOfContents = 212,
  ChildrenMdxTimeToRead = 213,
  ChildrenMdxWordCountParagraphs = 214,
  ChildrenMdxWordCountSentences = 215,
  ChildrenMdxWordCountWords = 216,
  ChildrenChildren = 217,
  ChildrenChildrenChildren = 218,
  ChildrenChildrenChildrenChildren = 219,
  ChildrenChildrenChildrenId = 220,
  ChildrenChildrenId = 221,
  ChildrenChildrenInternalContent = 222,
  ChildrenChildrenInternalContentDigest = 223,
  ChildrenChildrenInternalDescription = 224,
  ChildrenChildrenInternalFieldOwners = 225,
  ChildrenChildrenInternalIgnoreType = 226,
  ChildrenChildrenInternalMediaType = 227,
  ChildrenChildrenInternalOwner = 228,
  ChildrenChildrenInternalType = 229,
  ChildrenChildrenParentChildren = 230,
  ChildrenChildrenParentId = 231,
  ChildrenId = 232,
  ChildrenInternalContent = 233,
  ChildrenInternalContentDigest = 234,
  ChildrenInternalDescription = 235,
  ChildrenInternalFieldOwners = 236,
  ChildrenInternalIgnoreType = 237,
  ChildrenInternalMediaType = 238,
  ChildrenInternalOwner = 239,
  ChildrenInternalType = 240,
  ChildrenParentChildren = 241,
  ChildrenParentChildrenChildren = 242,
  ChildrenParentChildrenId = 243,
  ChildrenParentId = 244,
  ChildrenParentInternalContent = 245,
  ChildrenParentInternalContentDigest = 246,
  ChildrenParentInternalDescription = 247,
  ChildrenParentInternalFieldOwners = 248,
  ChildrenParentInternalIgnoreType = 249,
  ChildrenParentInternalMediaType = 250,
  ChildrenParentInternalOwner = 251,
  ChildrenParentInternalType = 252,
  ChildrenParentParentChildren = 253,
  ChildrenParentParentId = 254,
  Id = 255,
  InternalContent = 256,
  InternalContentDigest = 257,
  InternalDescription = 258,
  InternalFieldOwners = 259,
  InternalIgnoreType = 260,
  InternalMediaType = 261,
  InternalOwner = 262,
  InternalType = 263,
  ParentChildren = 264,
  ParentChildrenChildren = 265,
  ParentChildrenChildrenChildren = 266,
  ParentChildrenChildrenId = 267,
  ParentChildrenId = 268,
  ParentChildrenInternalContent = 269,
  ParentChildrenInternalContentDigest = 270,
  ParentChildrenInternalDescription = 271,
  ParentChildrenInternalFieldOwners = 272,
  ParentChildrenInternalIgnoreType = 273,
  ParentChildrenInternalMediaType = 274,
  ParentChildrenInternalOwner = 275,
  ParentChildrenInternalType = 276,
  ParentChildrenParentChildren = 277,
  ParentChildrenParentId = 278,
  ParentId = 279,
  ParentInternalContent = 280,
  ParentInternalContentDigest = 281,
  ParentInternalDescription = 282,
  ParentInternalFieldOwners = 283,
  ParentInternalIgnoreType = 284,
  ParentInternalMediaType = 285,
  ParentInternalOwner = 286,
  ParentInternalType = 287,
  ParentParentChildren = 288,
  ParentParentChildrenChildren = 289,
  ParentParentChildrenId = 290,
  ParentParentId = 291,
  ParentParentInternalContent = 292,
  ParentParentInternalContentDigest = 293,
  ParentParentInternalDescription = 294,
  ParentParentInternalFieldOwners = 295,
  ParentParentInternalIgnoreType = 296,
  ParentParentInternalMediaType = 297,
  ParentParentInternalOwner = 298,
  ParentParentInternalType = 299,
  ParentParentParentChildren = 300,
  ParentParentParentId = 301,
  Svg = 302,
  SysType = 303
}

export type ContentfulIconSvgTextNodeFilterInput = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
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
  ChildMarkdownRemarkChildren = 0,
  ChildMarkdownRemarkChildrenChildren = 1,
  ChildMarkdownRemarkChildrenChildrenChildren = 2,
  ChildMarkdownRemarkChildrenChildrenId = 3,
  ChildMarkdownRemarkChildrenId = 4,
  ChildMarkdownRemarkChildrenInternalContent = 5,
  ChildMarkdownRemarkChildrenInternalContentDigest = 6,
  ChildMarkdownRemarkChildrenInternalDescription = 7,
  ChildMarkdownRemarkChildrenInternalFieldOwners = 8,
  ChildMarkdownRemarkChildrenInternalIgnoreType = 9,
  ChildMarkdownRemarkChildrenInternalMediaType = 10,
  ChildMarkdownRemarkChildrenInternalOwner = 11,
  ChildMarkdownRemarkChildrenInternalType = 12,
  ChildMarkdownRemarkChildrenParentChildren = 13,
  ChildMarkdownRemarkChildrenParentId = 14,
  ChildMarkdownRemarkExcerpt = 15,
  ChildMarkdownRemarkExcerptAst = 16,
  ChildMarkdownRemarkFrontmatterTitle = 17,
  ChildMarkdownRemarkHeadings = 18,
  ChildMarkdownRemarkHeadingsDepth = 19,
  ChildMarkdownRemarkHeadingsId = 20,
  ChildMarkdownRemarkHeadingsValue = 21,
  ChildMarkdownRemarkHtml = 22,
  ChildMarkdownRemarkHtmlAst = 23,
  ChildMarkdownRemarkId = 24,
  ChildMarkdownRemarkInternalContent = 25,
  ChildMarkdownRemarkInternalContentDigest = 26,
  ChildMarkdownRemarkInternalDescription = 27,
  ChildMarkdownRemarkInternalFieldOwners = 28,
  ChildMarkdownRemarkInternalIgnoreType = 29,
  ChildMarkdownRemarkInternalMediaType = 30,
  ChildMarkdownRemarkInternalOwner = 31,
  ChildMarkdownRemarkInternalType = 32,
  ChildMarkdownRemarkParentChildren = 33,
  ChildMarkdownRemarkParentChildrenChildren = 34,
  ChildMarkdownRemarkParentChildrenId = 35,
  ChildMarkdownRemarkParentId = 36,
  ChildMarkdownRemarkParentInternalContent = 37,
  ChildMarkdownRemarkParentInternalContentDigest = 38,
  ChildMarkdownRemarkParentInternalDescription = 39,
  ChildMarkdownRemarkParentInternalFieldOwners = 40,
  ChildMarkdownRemarkParentInternalIgnoreType = 41,
  ChildMarkdownRemarkParentInternalMediaType = 42,
  ChildMarkdownRemarkParentInternalOwner = 43,
  ChildMarkdownRemarkParentInternalType = 44,
  ChildMarkdownRemarkParentParentChildren = 45,
  ChildMarkdownRemarkParentParentId = 46,
  ChildMarkdownRemarkRawMarkdownBody = 47,
  ChildMarkdownRemarkTableOfContents = 48,
  ChildMarkdownRemarkTimeToRead = 49,
  ChildMarkdownRemarkWordCountParagraphs = 50,
  ChildMarkdownRemarkWordCountSentences = 51,
  ChildMarkdownRemarkWordCountWords = 52,
  ChildMdxBody = 53,
  ChildMdxChildren = 54,
  ChildMdxChildrenChildren = 55,
  ChildMdxChildrenChildrenChildren = 56,
  ChildMdxChildrenChildrenId = 57,
  ChildMdxChildrenId = 58,
  ChildMdxChildrenInternalContent = 59,
  ChildMdxChildrenInternalContentDigest = 60,
  ChildMdxChildrenInternalDescription = 61,
  ChildMdxChildrenInternalFieldOwners = 62,
  ChildMdxChildrenInternalIgnoreType = 63,
  ChildMdxChildrenInternalMediaType = 64,
  ChildMdxChildrenInternalOwner = 65,
  ChildMdxChildrenInternalType = 66,
  ChildMdxChildrenParentChildren = 67,
  ChildMdxChildrenParentId = 68,
  ChildMdxExcerpt = 69,
  ChildMdxFileAbsolutePath = 70,
  ChildMdxFrontmatterTitle = 71,
  ChildMdxHeadings = 72,
  ChildMdxHeadingsDepth = 73,
  ChildMdxHeadingsValue = 74,
  ChildMdxHtml = 75,
  ChildMdxId = 76,
  ChildMdxInternalContent = 77,
  ChildMdxInternalContentDigest = 78,
  ChildMdxInternalDescription = 79,
  ChildMdxInternalFieldOwners = 80,
  ChildMdxInternalIgnoreType = 81,
  ChildMdxInternalMediaType = 82,
  ChildMdxInternalOwner = 83,
  ChildMdxInternalType = 84,
  ChildMdxMdxAst = 85,
  ChildMdxParentChildren = 86,
  ChildMdxParentChildrenChildren = 87,
  ChildMdxParentChildrenId = 88,
  ChildMdxParentId = 89,
  ChildMdxParentInternalContent = 90,
  ChildMdxParentInternalContentDigest = 91,
  ChildMdxParentInternalDescription = 92,
  ChildMdxParentInternalFieldOwners = 93,
  ChildMdxParentInternalIgnoreType = 94,
  ChildMdxParentInternalMediaType = 95,
  ChildMdxParentInternalOwner = 96,
  ChildMdxParentInternalType = 97,
  ChildMdxParentParentChildren = 98,
  ChildMdxParentParentId = 99,
  ChildMdxRawBody = 100,
  ChildMdxSlug = 101,
  ChildMdxTableOfContents = 102,
  ChildMdxTimeToRead = 103,
  ChildMdxWordCountParagraphs = 104,
  ChildMdxWordCountSentences = 105,
  ChildMdxWordCountWords = 106,
  Children = 107,
  ChildrenMarkdownRemark = 108,
  ChildrenMarkdownRemarkChildren = 109,
  ChildrenMarkdownRemarkChildrenChildren = 110,
  ChildrenMarkdownRemarkChildrenChildrenChildren = 111,
  ChildrenMarkdownRemarkChildrenChildrenId = 112,
  ChildrenMarkdownRemarkChildrenId = 113,
  ChildrenMarkdownRemarkChildrenInternalContent = 114,
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 115,
  ChildrenMarkdownRemarkChildrenInternalDescription = 116,
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 117,
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 118,
  ChildrenMarkdownRemarkChildrenInternalMediaType = 119,
  ChildrenMarkdownRemarkChildrenInternalOwner = 120,
  ChildrenMarkdownRemarkChildrenInternalType = 121,
  ChildrenMarkdownRemarkChildrenParentChildren = 122,
  ChildrenMarkdownRemarkChildrenParentId = 123,
  ChildrenMarkdownRemarkExcerpt = 124,
  ChildrenMarkdownRemarkExcerptAst = 125,
  ChildrenMarkdownRemarkFrontmatterTitle = 126,
  ChildrenMarkdownRemarkHeadings = 127,
  ChildrenMarkdownRemarkHeadingsDepth = 128,
  ChildrenMarkdownRemarkHeadingsId = 129,
  ChildrenMarkdownRemarkHeadingsValue = 130,
  ChildrenMarkdownRemarkHtml = 131,
  ChildrenMarkdownRemarkHtmlAst = 132,
  ChildrenMarkdownRemarkId = 133,
  ChildrenMarkdownRemarkInternalContent = 134,
  ChildrenMarkdownRemarkInternalContentDigest = 135,
  ChildrenMarkdownRemarkInternalDescription = 136,
  ChildrenMarkdownRemarkInternalFieldOwners = 137,
  ChildrenMarkdownRemarkInternalIgnoreType = 138,
  ChildrenMarkdownRemarkInternalMediaType = 139,
  ChildrenMarkdownRemarkInternalOwner = 140,
  ChildrenMarkdownRemarkInternalType = 141,
  ChildrenMarkdownRemarkParentChildren = 142,
  ChildrenMarkdownRemarkParentChildrenChildren = 143,
  ChildrenMarkdownRemarkParentChildrenId = 144,
  ChildrenMarkdownRemarkParentId = 145,
  ChildrenMarkdownRemarkParentInternalContent = 146,
  ChildrenMarkdownRemarkParentInternalContentDigest = 147,
  ChildrenMarkdownRemarkParentInternalDescription = 148,
  ChildrenMarkdownRemarkParentInternalFieldOwners = 149,
  ChildrenMarkdownRemarkParentInternalIgnoreType = 150,
  ChildrenMarkdownRemarkParentInternalMediaType = 151,
  ChildrenMarkdownRemarkParentInternalOwner = 152,
  ChildrenMarkdownRemarkParentInternalType = 153,
  ChildrenMarkdownRemarkParentParentChildren = 154,
  ChildrenMarkdownRemarkParentParentId = 155,
  ChildrenMarkdownRemarkRawMarkdownBody = 156,
  ChildrenMarkdownRemarkTableOfContents = 157,
  ChildrenMarkdownRemarkTimeToRead = 158,
  ChildrenMarkdownRemarkWordCountParagraphs = 159,
  ChildrenMarkdownRemarkWordCountSentences = 160,
  ChildrenMarkdownRemarkWordCountWords = 161,
  ChildrenMdx = 162,
  ChildrenMdxBody = 163,
  ChildrenMdxChildren = 164,
  ChildrenMdxChildrenChildren = 165,
  ChildrenMdxChildrenChildrenChildren = 166,
  ChildrenMdxChildrenChildrenId = 167,
  ChildrenMdxChildrenId = 168,
  ChildrenMdxChildrenInternalContent = 169,
  ChildrenMdxChildrenInternalContentDigest = 170,
  ChildrenMdxChildrenInternalDescription = 171,
  ChildrenMdxChildrenInternalFieldOwners = 172,
  ChildrenMdxChildrenInternalIgnoreType = 173,
  ChildrenMdxChildrenInternalMediaType = 174,
  ChildrenMdxChildrenInternalOwner = 175,
  ChildrenMdxChildrenInternalType = 176,
  ChildrenMdxChildrenParentChildren = 177,
  ChildrenMdxChildrenParentId = 178,
  ChildrenMdxExcerpt = 179,
  ChildrenMdxFileAbsolutePath = 180,
  ChildrenMdxFrontmatterTitle = 181,
  ChildrenMdxHeadings = 182,
  ChildrenMdxHeadingsDepth = 183,
  ChildrenMdxHeadingsValue = 184,
  ChildrenMdxHtml = 185,
  ChildrenMdxId = 186,
  ChildrenMdxInternalContent = 187,
  ChildrenMdxInternalContentDigest = 188,
  ChildrenMdxInternalDescription = 189,
  ChildrenMdxInternalFieldOwners = 190,
  ChildrenMdxInternalIgnoreType = 191,
  ChildrenMdxInternalMediaType = 192,
  ChildrenMdxInternalOwner = 193,
  ChildrenMdxInternalType = 194,
  ChildrenMdxMdxAst = 195,
  ChildrenMdxParentChildren = 196,
  ChildrenMdxParentChildrenChildren = 197,
  ChildrenMdxParentChildrenId = 198,
  ChildrenMdxParentId = 199,
  ChildrenMdxParentInternalContent = 200,
  ChildrenMdxParentInternalContentDigest = 201,
  ChildrenMdxParentInternalDescription = 202,
  ChildrenMdxParentInternalFieldOwners = 203,
  ChildrenMdxParentInternalIgnoreType = 204,
  ChildrenMdxParentInternalMediaType = 205,
  ChildrenMdxParentInternalOwner = 206,
  ChildrenMdxParentInternalType = 207,
  ChildrenMdxParentParentChildren = 208,
  ChildrenMdxParentParentId = 209,
  ChildrenMdxRawBody = 210,
  ChildrenMdxSlug = 211,
  ChildrenMdxTableOfContents = 212,
  ChildrenMdxTimeToRead = 213,
  ChildrenMdxWordCountParagraphs = 214,
  ChildrenMdxWordCountSentences = 215,
  ChildrenMdxWordCountWords = 216,
  ChildrenChildren = 217,
  ChildrenChildrenChildren = 218,
  ChildrenChildrenChildrenChildren = 219,
  ChildrenChildrenChildrenId = 220,
  ChildrenChildrenId = 221,
  ChildrenChildrenInternalContent = 222,
  ChildrenChildrenInternalContentDigest = 223,
  ChildrenChildrenInternalDescription = 224,
  ChildrenChildrenInternalFieldOwners = 225,
  ChildrenChildrenInternalIgnoreType = 226,
  ChildrenChildrenInternalMediaType = 227,
  ChildrenChildrenInternalOwner = 228,
  ChildrenChildrenInternalType = 229,
  ChildrenChildrenParentChildren = 230,
  ChildrenChildrenParentId = 231,
  ChildrenId = 232,
  ChildrenInternalContent = 233,
  ChildrenInternalContentDigest = 234,
  ChildrenInternalDescription = 235,
  ChildrenInternalFieldOwners = 236,
  ChildrenInternalIgnoreType = 237,
  ChildrenInternalMediaType = 238,
  ChildrenInternalOwner = 239,
  ChildrenInternalType = 240,
  ChildrenParentChildren = 241,
  ChildrenParentChildrenChildren = 242,
  ChildrenParentChildrenId = 243,
  ChildrenParentId = 244,
  ChildrenParentInternalContent = 245,
  ChildrenParentInternalContentDigest = 246,
  ChildrenParentInternalDescription = 247,
  ChildrenParentInternalFieldOwners = 248,
  ChildrenParentInternalIgnoreType = 249,
  ChildrenParentInternalMediaType = 250,
  ChildrenParentInternalOwner = 251,
  ChildrenParentInternalType = 252,
  ChildrenParentParentChildren = 253,
  ChildrenParentParentId = 254,
  Detail = 255,
  Id = 256,
  InternalContent = 257,
  InternalContentDigest = 258,
  InternalDescription = 259,
  InternalFieldOwners = 260,
  InternalIgnoreType = 261,
  InternalMediaType = 262,
  InternalOwner = 263,
  InternalType = 264,
  ParentChildren = 265,
  ParentChildrenChildren = 266,
  ParentChildrenChildrenChildren = 267,
  ParentChildrenChildrenId = 268,
  ParentChildrenId = 269,
  ParentChildrenInternalContent = 270,
  ParentChildrenInternalContentDigest = 271,
  ParentChildrenInternalDescription = 272,
  ParentChildrenInternalFieldOwners = 273,
  ParentChildrenInternalIgnoreType = 274,
  ParentChildrenInternalMediaType = 275,
  ParentChildrenInternalOwner = 276,
  ParentChildrenInternalType = 277,
  ParentChildrenParentChildren = 278,
  ParentChildrenParentId = 279,
  ParentId = 280,
  ParentInternalContent = 281,
  ParentInternalContentDigest = 282,
  ParentInternalDescription = 283,
  ParentInternalFieldOwners = 284,
  ParentInternalIgnoreType = 285,
  ParentInternalMediaType = 286,
  ParentInternalOwner = 287,
  ParentInternalType = 288,
  ParentParentChildren = 289,
  ParentParentChildrenChildren = 290,
  ParentParentChildrenId = 291,
  ParentParentId = 292,
  ParentParentInternalContent = 293,
  ParentParentInternalContentDigest = 294,
  ParentParentInternalDescription = 295,
  ParentParentInternalFieldOwners = 296,
  ParentParentInternalIgnoreType = 297,
  ParentParentInternalMediaType = 298,
  ParentParentInternalOwner = 299,
  ParentParentInternalType = 300,
  ParentParentParentChildren = 301,
  ParentParentParentId = 302,
  SysType = 303
}

export type ContentfulOssDetailTextNodeFilterInput = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
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
  ChildMarkdownRemarkChildren = 0,
  ChildMarkdownRemarkChildrenChildren = 1,
  ChildMarkdownRemarkChildrenChildrenChildren = 2,
  ChildMarkdownRemarkChildrenChildrenId = 3,
  ChildMarkdownRemarkChildrenId = 4,
  ChildMarkdownRemarkChildrenInternalContent = 5,
  ChildMarkdownRemarkChildrenInternalContentDigest = 6,
  ChildMarkdownRemarkChildrenInternalDescription = 7,
  ChildMarkdownRemarkChildrenInternalFieldOwners = 8,
  ChildMarkdownRemarkChildrenInternalIgnoreType = 9,
  ChildMarkdownRemarkChildrenInternalMediaType = 10,
  ChildMarkdownRemarkChildrenInternalOwner = 11,
  ChildMarkdownRemarkChildrenInternalType = 12,
  ChildMarkdownRemarkChildrenParentChildren = 13,
  ChildMarkdownRemarkChildrenParentId = 14,
  ChildMarkdownRemarkExcerpt = 15,
  ChildMarkdownRemarkExcerptAst = 16,
  ChildMarkdownRemarkFrontmatterTitle = 17,
  ChildMarkdownRemarkHeadings = 18,
  ChildMarkdownRemarkHeadingsDepth = 19,
  ChildMarkdownRemarkHeadingsId = 20,
  ChildMarkdownRemarkHeadingsValue = 21,
  ChildMarkdownRemarkHtml = 22,
  ChildMarkdownRemarkHtmlAst = 23,
  ChildMarkdownRemarkId = 24,
  ChildMarkdownRemarkInternalContent = 25,
  ChildMarkdownRemarkInternalContentDigest = 26,
  ChildMarkdownRemarkInternalDescription = 27,
  ChildMarkdownRemarkInternalFieldOwners = 28,
  ChildMarkdownRemarkInternalIgnoreType = 29,
  ChildMarkdownRemarkInternalMediaType = 30,
  ChildMarkdownRemarkInternalOwner = 31,
  ChildMarkdownRemarkInternalType = 32,
  ChildMarkdownRemarkParentChildren = 33,
  ChildMarkdownRemarkParentChildrenChildren = 34,
  ChildMarkdownRemarkParentChildrenId = 35,
  ChildMarkdownRemarkParentId = 36,
  ChildMarkdownRemarkParentInternalContent = 37,
  ChildMarkdownRemarkParentInternalContentDigest = 38,
  ChildMarkdownRemarkParentInternalDescription = 39,
  ChildMarkdownRemarkParentInternalFieldOwners = 40,
  ChildMarkdownRemarkParentInternalIgnoreType = 41,
  ChildMarkdownRemarkParentInternalMediaType = 42,
  ChildMarkdownRemarkParentInternalOwner = 43,
  ChildMarkdownRemarkParentInternalType = 44,
  ChildMarkdownRemarkParentParentChildren = 45,
  ChildMarkdownRemarkParentParentId = 46,
  ChildMarkdownRemarkRawMarkdownBody = 47,
  ChildMarkdownRemarkTableOfContents = 48,
  ChildMarkdownRemarkTimeToRead = 49,
  ChildMarkdownRemarkWordCountParagraphs = 50,
  ChildMarkdownRemarkWordCountSentences = 51,
  ChildMarkdownRemarkWordCountWords = 52,
  ChildMdxBody = 53,
  ChildMdxChildren = 54,
  ChildMdxChildrenChildren = 55,
  ChildMdxChildrenChildrenChildren = 56,
  ChildMdxChildrenChildrenId = 57,
  ChildMdxChildrenId = 58,
  ChildMdxChildrenInternalContent = 59,
  ChildMdxChildrenInternalContentDigest = 60,
  ChildMdxChildrenInternalDescription = 61,
  ChildMdxChildrenInternalFieldOwners = 62,
  ChildMdxChildrenInternalIgnoreType = 63,
  ChildMdxChildrenInternalMediaType = 64,
  ChildMdxChildrenInternalOwner = 65,
  ChildMdxChildrenInternalType = 66,
  ChildMdxChildrenParentChildren = 67,
  ChildMdxChildrenParentId = 68,
  ChildMdxExcerpt = 69,
  ChildMdxFileAbsolutePath = 70,
  ChildMdxFrontmatterTitle = 71,
  ChildMdxHeadings = 72,
  ChildMdxHeadingsDepth = 73,
  ChildMdxHeadingsValue = 74,
  ChildMdxHtml = 75,
  ChildMdxId = 76,
  ChildMdxInternalContent = 77,
  ChildMdxInternalContentDigest = 78,
  ChildMdxInternalDescription = 79,
  ChildMdxInternalFieldOwners = 80,
  ChildMdxInternalIgnoreType = 81,
  ChildMdxInternalMediaType = 82,
  ChildMdxInternalOwner = 83,
  ChildMdxInternalType = 84,
  ChildMdxMdxAst = 85,
  ChildMdxParentChildren = 86,
  ChildMdxParentChildrenChildren = 87,
  ChildMdxParentChildrenId = 88,
  ChildMdxParentId = 89,
  ChildMdxParentInternalContent = 90,
  ChildMdxParentInternalContentDigest = 91,
  ChildMdxParentInternalDescription = 92,
  ChildMdxParentInternalFieldOwners = 93,
  ChildMdxParentInternalIgnoreType = 94,
  ChildMdxParentInternalMediaType = 95,
  ChildMdxParentInternalOwner = 96,
  ChildMdxParentInternalType = 97,
  ChildMdxParentParentChildren = 98,
  ChildMdxParentParentId = 99,
  ChildMdxRawBody = 100,
  ChildMdxSlug = 101,
  ChildMdxTableOfContents = 102,
  ChildMdxTimeToRead = 103,
  ChildMdxWordCountParagraphs = 104,
  ChildMdxWordCountSentences = 105,
  ChildMdxWordCountWords = 106,
  Children = 107,
  ChildrenMarkdownRemark = 108,
  ChildrenMarkdownRemarkChildren = 109,
  ChildrenMarkdownRemarkChildrenChildren = 110,
  ChildrenMarkdownRemarkChildrenChildrenChildren = 111,
  ChildrenMarkdownRemarkChildrenChildrenId = 112,
  ChildrenMarkdownRemarkChildrenId = 113,
  ChildrenMarkdownRemarkChildrenInternalContent = 114,
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 115,
  ChildrenMarkdownRemarkChildrenInternalDescription = 116,
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 117,
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 118,
  ChildrenMarkdownRemarkChildrenInternalMediaType = 119,
  ChildrenMarkdownRemarkChildrenInternalOwner = 120,
  ChildrenMarkdownRemarkChildrenInternalType = 121,
  ChildrenMarkdownRemarkChildrenParentChildren = 122,
  ChildrenMarkdownRemarkChildrenParentId = 123,
  ChildrenMarkdownRemarkExcerpt = 124,
  ChildrenMarkdownRemarkExcerptAst = 125,
  ChildrenMarkdownRemarkFrontmatterTitle = 126,
  ChildrenMarkdownRemarkHeadings = 127,
  ChildrenMarkdownRemarkHeadingsDepth = 128,
  ChildrenMarkdownRemarkHeadingsId = 129,
  ChildrenMarkdownRemarkHeadingsValue = 130,
  ChildrenMarkdownRemarkHtml = 131,
  ChildrenMarkdownRemarkHtmlAst = 132,
  ChildrenMarkdownRemarkId = 133,
  ChildrenMarkdownRemarkInternalContent = 134,
  ChildrenMarkdownRemarkInternalContentDigest = 135,
  ChildrenMarkdownRemarkInternalDescription = 136,
  ChildrenMarkdownRemarkInternalFieldOwners = 137,
  ChildrenMarkdownRemarkInternalIgnoreType = 138,
  ChildrenMarkdownRemarkInternalMediaType = 139,
  ChildrenMarkdownRemarkInternalOwner = 140,
  ChildrenMarkdownRemarkInternalType = 141,
  ChildrenMarkdownRemarkParentChildren = 142,
  ChildrenMarkdownRemarkParentChildrenChildren = 143,
  ChildrenMarkdownRemarkParentChildrenId = 144,
  ChildrenMarkdownRemarkParentId = 145,
  ChildrenMarkdownRemarkParentInternalContent = 146,
  ChildrenMarkdownRemarkParentInternalContentDigest = 147,
  ChildrenMarkdownRemarkParentInternalDescription = 148,
  ChildrenMarkdownRemarkParentInternalFieldOwners = 149,
  ChildrenMarkdownRemarkParentInternalIgnoreType = 150,
  ChildrenMarkdownRemarkParentInternalMediaType = 151,
  ChildrenMarkdownRemarkParentInternalOwner = 152,
  ChildrenMarkdownRemarkParentInternalType = 153,
  ChildrenMarkdownRemarkParentParentChildren = 154,
  ChildrenMarkdownRemarkParentParentId = 155,
  ChildrenMarkdownRemarkRawMarkdownBody = 156,
  ChildrenMarkdownRemarkTableOfContents = 157,
  ChildrenMarkdownRemarkTimeToRead = 158,
  ChildrenMarkdownRemarkWordCountParagraphs = 159,
  ChildrenMarkdownRemarkWordCountSentences = 160,
  ChildrenMarkdownRemarkWordCountWords = 161,
  ChildrenMdx = 162,
  ChildrenMdxBody = 163,
  ChildrenMdxChildren = 164,
  ChildrenMdxChildrenChildren = 165,
  ChildrenMdxChildrenChildrenChildren = 166,
  ChildrenMdxChildrenChildrenId = 167,
  ChildrenMdxChildrenId = 168,
  ChildrenMdxChildrenInternalContent = 169,
  ChildrenMdxChildrenInternalContentDigest = 170,
  ChildrenMdxChildrenInternalDescription = 171,
  ChildrenMdxChildrenInternalFieldOwners = 172,
  ChildrenMdxChildrenInternalIgnoreType = 173,
  ChildrenMdxChildrenInternalMediaType = 174,
  ChildrenMdxChildrenInternalOwner = 175,
  ChildrenMdxChildrenInternalType = 176,
  ChildrenMdxChildrenParentChildren = 177,
  ChildrenMdxChildrenParentId = 178,
  ChildrenMdxExcerpt = 179,
  ChildrenMdxFileAbsolutePath = 180,
  ChildrenMdxFrontmatterTitle = 181,
  ChildrenMdxHeadings = 182,
  ChildrenMdxHeadingsDepth = 183,
  ChildrenMdxHeadingsValue = 184,
  ChildrenMdxHtml = 185,
  ChildrenMdxId = 186,
  ChildrenMdxInternalContent = 187,
  ChildrenMdxInternalContentDigest = 188,
  ChildrenMdxInternalDescription = 189,
  ChildrenMdxInternalFieldOwners = 190,
  ChildrenMdxInternalIgnoreType = 191,
  ChildrenMdxInternalMediaType = 192,
  ChildrenMdxInternalOwner = 193,
  ChildrenMdxInternalType = 194,
  ChildrenMdxMdxAst = 195,
  ChildrenMdxParentChildren = 196,
  ChildrenMdxParentChildrenChildren = 197,
  ChildrenMdxParentChildrenId = 198,
  ChildrenMdxParentId = 199,
  ChildrenMdxParentInternalContent = 200,
  ChildrenMdxParentInternalContentDigest = 201,
  ChildrenMdxParentInternalDescription = 202,
  ChildrenMdxParentInternalFieldOwners = 203,
  ChildrenMdxParentInternalIgnoreType = 204,
  ChildrenMdxParentInternalMediaType = 205,
  ChildrenMdxParentInternalOwner = 206,
  ChildrenMdxParentInternalType = 207,
  ChildrenMdxParentParentChildren = 208,
  ChildrenMdxParentParentId = 209,
  ChildrenMdxRawBody = 210,
  ChildrenMdxSlug = 211,
  ChildrenMdxTableOfContents = 212,
  ChildrenMdxTimeToRead = 213,
  ChildrenMdxWordCountParagraphs = 214,
  ChildrenMdxWordCountSentences = 215,
  ChildrenMdxWordCountWords = 216,
  ChildrenChildren = 217,
  ChildrenChildrenChildren = 218,
  ChildrenChildrenChildrenChildren = 219,
  ChildrenChildrenChildrenId = 220,
  ChildrenChildrenId = 221,
  ChildrenChildrenInternalContent = 222,
  ChildrenChildrenInternalContentDigest = 223,
  ChildrenChildrenInternalDescription = 224,
  ChildrenChildrenInternalFieldOwners = 225,
  ChildrenChildrenInternalIgnoreType = 226,
  ChildrenChildrenInternalMediaType = 227,
  ChildrenChildrenInternalOwner = 228,
  ChildrenChildrenInternalType = 229,
  ChildrenChildrenParentChildren = 230,
  ChildrenChildrenParentId = 231,
  ChildrenId = 232,
  ChildrenInternalContent = 233,
  ChildrenInternalContentDigest = 234,
  ChildrenInternalDescription = 235,
  ChildrenInternalFieldOwners = 236,
  ChildrenInternalIgnoreType = 237,
  ChildrenInternalMediaType = 238,
  ChildrenInternalOwner = 239,
  ChildrenInternalType = 240,
  ChildrenParentChildren = 241,
  ChildrenParentChildrenChildren = 242,
  ChildrenParentChildrenId = 243,
  ChildrenParentId = 244,
  ChildrenParentInternalContent = 245,
  ChildrenParentInternalContentDigest = 246,
  ChildrenParentInternalDescription = 247,
  ChildrenParentInternalFieldOwners = 248,
  ChildrenParentInternalIgnoreType = 249,
  ChildrenParentInternalMediaType = 250,
  ChildrenParentInternalOwner = 251,
  ChildrenParentInternalType = 252,
  ChildrenParentParentChildren = 253,
  ChildrenParentParentId = 254,
  Detail = 255,
  Id = 256,
  InternalContent = 257,
  InternalContentDigest = 258,
  InternalDescription = 259,
  InternalFieldOwners = 260,
  InternalIgnoreType = 261,
  InternalMediaType = 262,
  InternalOwner = 263,
  InternalType = 264,
  ParentChildren = 265,
  ParentChildrenChildren = 266,
  ParentChildrenChildrenChildren = 267,
  ParentChildrenChildrenId = 268,
  ParentChildrenId = 269,
  ParentChildrenInternalContent = 270,
  ParentChildrenInternalContentDigest = 271,
  ParentChildrenInternalDescription = 272,
  ParentChildrenInternalFieldOwners = 273,
  ParentChildrenInternalIgnoreType = 274,
  ParentChildrenInternalMediaType = 275,
  ParentChildrenInternalOwner = 276,
  ParentChildrenInternalType = 277,
  ParentChildrenParentChildren = 278,
  ParentChildrenParentId = 279,
  ParentId = 280,
  ParentInternalContent = 281,
  ParentInternalContentDigest = 282,
  ParentInternalDescription = 283,
  ParentInternalFieldOwners = 284,
  ParentInternalIgnoreType = 285,
  ParentInternalMediaType = 286,
  ParentInternalOwner = 287,
  ParentInternalType = 288,
  ParentParentChildren = 289,
  ParentParentChildrenChildren = 290,
  ParentParentChildrenId = 291,
  ParentParentId = 292,
  ParentParentInternalContent = 293,
  ParentParentInternalContentDigest = 294,
  ParentParentInternalDescription = 295,
  ParentParentInternalFieldOwners = 296,
  ParentParentInternalIgnoreType = 297,
  ParentParentInternalMediaType = 298,
  ParentParentInternalOwner = 299,
  ParentParentInternalType = 300,
  ParentParentParentChildren = 301,
  ParentParentParentId = 302,
  SysType = 303
}

export type ContentfulProjectDetailTextNodeFilterInput = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
    & { content: Maybe<{ childMdx: Maybe<Pick<Mdx, 'body'>> }>, tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>> }
  )>, icon: Maybe<(
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
        ) }> }> }, locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, icon: Maybe<(
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
        )>, detail: Maybe<{ childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
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
        )>, detail: Maybe<{ childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
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
