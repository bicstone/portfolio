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
  ChildContentfulBlogPostContentTextNodeChildren = 29,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 30,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildren = 31,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildrenChildren = 32,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildrenId = 33,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerpt = 34,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerptAst = 35,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkFrontmatterTitle = 36,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadings = 37,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsDepth = 38,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsId = 39,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsValue = 40,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtml = 41,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtmlAst = 42,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkId = 43,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalContent = 44,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalContentDigest = 45,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalDescription = 46,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalFieldOwners = 47,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalIgnoreType = 48,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalMediaType = 49,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalOwner = 50,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalType = 51,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkParentChildren = 52,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkParentId = 53,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkRawMarkdownBody = 54,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTableOfContents = 55,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTimeToRead = 56,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountParagraphs = 57,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountSentences = 58,
  ChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountWords = 59,
  ChildContentfulBlogPostContentTextNodeChildrenChildren = 60,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenChildren = 61,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenId = 62,
  ChildContentfulBlogPostContentTextNodeChildrenId = 63,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContent = 64,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 65,
  ChildContentfulBlogPostContentTextNodeChildrenInternalDescription = 66,
  ChildContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 67,
  ChildContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 68,
  ChildContentfulBlogPostContentTextNodeChildrenInternalMediaType = 69,
  ChildContentfulBlogPostContentTextNodeChildrenInternalOwner = 70,
  ChildContentfulBlogPostContentTextNodeChildrenInternalType = 71,
  ChildContentfulBlogPostContentTextNodeChildrenParentChildren = 72,
  ChildContentfulBlogPostContentTextNodeChildrenParentId = 73,
  ChildContentfulBlogPostContentTextNodeContent = 74,
  ChildContentfulBlogPostContentTextNodeId = 75,
  ChildContentfulBlogPostContentTextNodeInternalContent = 76,
  ChildContentfulBlogPostContentTextNodeInternalContentDigest = 77,
  ChildContentfulBlogPostContentTextNodeInternalDescription = 78,
  ChildContentfulBlogPostContentTextNodeInternalFieldOwners = 79,
  ChildContentfulBlogPostContentTextNodeInternalIgnoreType = 80,
  ChildContentfulBlogPostContentTextNodeInternalMediaType = 81,
  ChildContentfulBlogPostContentTextNodeInternalOwner = 82,
  ChildContentfulBlogPostContentTextNodeInternalType = 83,
  ChildContentfulBlogPostContentTextNodeParentChildren = 84,
  ChildContentfulBlogPostContentTextNodeParentChildrenChildren = 85,
  ChildContentfulBlogPostContentTextNodeParentChildrenId = 86,
  ChildContentfulBlogPostContentTextNodeParentId = 87,
  ChildContentfulBlogPostContentTextNodeParentInternalContent = 88,
  ChildContentfulBlogPostContentTextNodeParentInternalContentDigest = 89,
  ChildContentfulBlogPostContentTextNodeParentInternalDescription = 90,
  ChildContentfulBlogPostContentTextNodeParentInternalFieldOwners = 91,
  ChildContentfulBlogPostContentTextNodeParentInternalIgnoreType = 92,
  ChildContentfulBlogPostContentTextNodeParentInternalMediaType = 93,
  ChildContentfulBlogPostContentTextNodeParentInternalOwner = 94,
  ChildContentfulBlogPostContentTextNodeParentInternalType = 95,
  ChildContentfulBlogPostContentTextNodeParentParentChildren = 96,
  ChildContentfulBlogPostContentTextNodeParentParentId = 97,
  ChildContentfulBlogPostContentTextNodeSysType = 98,
  Children = 99,
  ChildrenContentfulBlogPostContentTextNode = 100,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkChildren = 101,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkChildrenChildren = 102,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkChildrenId = 103,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerpt = 104,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerptAst = 105,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkFrontmatterTitle = 106,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadings = 107,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadingsDepth = 108,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadingsId = 109,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadingsValue = 110,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHtml = 111,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHtmlAst = 112,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkId = 113,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalContent = 114,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalContentDigest = 115,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalDescription = 116,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalFieldOwners = 117,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalIgnoreType = 118,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalMediaType = 119,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalOwner = 120,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkInternalType = 121,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkParentChildren = 122,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkParentId = 123,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkRawMarkdownBody = 124,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkTableOfContents = 125,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkTimeToRead = 126,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkWordCountParagraphs = 127,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkWordCountSentences = 128,
  ChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkWordCountWords = 129,
  ChildrenContentfulBlogPostContentTextNodeChildren = 130,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 131,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildren = 132,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildrenChildren = 133,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildrenId = 134,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerpt = 135,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerptAst = 136,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkFrontmatterTitle = 137,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadings = 138,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsDepth = 139,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsId = 140,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadingsValue = 141,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtml = 142,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtmlAst = 143,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkId = 144,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalContent = 145,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalContentDigest = 146,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalDescription = 147,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalFieldOwners = 148,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalIgnoreType = 149,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalMediaType = 150,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalOwner = 151,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkInternalType = 152,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkParentChildren = 153,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkParentId = 154,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkRawMarkdownBody = 155,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTableOfContents = 156,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTimeToRead = 157,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountParagraphs = 158,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountSentences = 159,
  ChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkWordCountWords = 160,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildren = 161,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenChildren = 162,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenId = 163,
  ChildrenContentfulBlogPostContentTextNodeChildrenId = 164,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContent = 165,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 166,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalDescription = 167,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 168,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 169,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalMediaType = 170,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalOwner = 171,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalType = 172,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentChildren = 173,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentId = 174,
  ChildrenContentfulBlogPostContentTextNodeContent = 175,
  ChildrenContentfulBlogPostContentTextNodeId = 176,
  ChildrenContentfulBlogPostContentTextNodeInternalContent = 177,
  ChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 178,
  ChildrenContentfulBlogPostContentTextNodeInternalDescription = 179,
  ChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 180,
  ChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 181,
  ChildrenContentfulBlogPostContentTextNodeInternalMediaType = 182,
  ChildrenContentfulBlogPostContentTextNodeInternalOwner = 183,
  ChildrenContentfulBlogPostContentTextNodeInternalType = 184,
  ChildrenContentfulBlogPostContentTextNodeParentChildren = 185,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenChildren = 186,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenId = 187,
  ChildrenContentfulBlogPostContentTextNodeParentId = 188,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContent = 189,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentDigest = 190,
  ChildrenContentfulBlogPostContentTextNodeParentInternalDescription = 191,
  ChildrenContentfulBlogPostContentTextNodeParentInternalFieldOwners = 192,
  ChildrenContentfulBlogPostContentTextNodeParentInternalIgnoreType = 193,
  ChildrenContentfulBlogPostContentTextNodeParentInternalMediaType = 194,
  ChildrenContentfulBlogPostContentTextNodeParentInternalOwner = 195,
  ChildrenContentfulBlogPostContentTextNodeParentInternalType = 196,
  ChildrenContentfulBlogPostContentTextNodeParentParentChildren = 197,
  ChildrenContentfulBlogPostContentTextNodeParentParentId = 198,
  ChildrenContentfulBlogPostContentTextNodeSysType = 199,
  ChildrenChildren = 200,
  ChildrenChildrenChildren = 201,
  ChildrenChildrenChildrenChildren = 202,
  ChildrenChildrenChildrenId = 203,
  ChildrenChildrenId = 204,
  ChildrenChildrenInternalContent = 205,
  ChildrenChildrenInternalContentDigest = 206,
  ChildrenChildrenInternalDescription = 207,
  ChildrenChildrenInternalFieldOwners = 208,
  ChildrenChildrenInternalIgnoreType = 209,
  ChildrenChildrenInternalMediaType = 210,
  ChildrenChildrenInternalOwner = 211,
  ChildrenChildrenInternalType = 212,
  ChildrenChildrenParentChildren = 213,
  ChildrenChildrenParentId = 214,
  ChildrenId = 215,
  ChildrenInternalContent = 216,
  ChildrenInternalContentDigest = 217,
  ChildrenInternalDescription = 218,
  ChildrenInternalFieldOwners = 219,
  ChildrenInternalIgnoreType = 220,
  ChildrenInternalMediaType = 221,
  ChildrenInternalOwner = 222,
  ChildrenInternalType = 223,
  ChildrenParentChildren = 224,
  ChildrenParentChildrenChildren = 225,
  ChildrenParentChildrenId = 226,
  ChildrenParentId = 227,
  ChildrenParentInternalContent = 228,
  ChildrenParentInternalContentDigest = 229,
  ChildrenParentInternalDescription = 230,
  ChildrenParentInternalFieldOwners = 231,
  ChildrenParentInternalIgnoreType = 232,
  ChildrenParentInternalMediaType = 233,
  ChildrenParentInternalOwner = 234,
  ChildrenParentInternalType = 235,
  ChildrenParentParentChildren = 236,
  ChildrenParentParentId = 237,
  ContentChildMarkdownRemarkChildren = 238,
  ContentChildMarkdownRemarkChildrenChildren = 239,
  ContentChildMarkdownRemarkChildrenId = 240,
  ContentChildMarkdownRemarkExcerpt = 241,
  ContentChildMarkdownRemarkExcerptAst = 242,
  ContentChildMarkdownRemarkFrontmatterTitle = 243,
  ContentChildMarkdownRemarkHeadings = 244,
  ContentChildMarkdownRemarkHeadingsDepth = 245,
  ContentChildMarkdownRemarkHeadingsId = 246,
  ContentChildMarkdownRemarkHeadingsValue = 247,
  ContentChildMarkdownRemarkHtml = 248,
  ContentChildMarkdownRemarkHtmlAst = 249,
  ContentChildMarkdownRemarkId = 250,
  ContentChildMarkdownRemarkInternalContent = 251,
  ContentChildMarkdownRemarkInternalContentDigest = 252,
  ContentChildMarkdownRemarkInternalDescription = 253,
  ContentChildMarkdownRemarkInternalFieldOwners = 254,
  ContentChildMarkdownRemarkInternalIgnoreType = 255,
  ContentChildMarkdownRemarkInternalMediaType = 256,
  ContentChildMarkdownRemarkInternalOwner = 257,
  ContentChildMarkdownRemarkInternalType = 258,
  ContentChildMarkdownRemarkParentChildren = 259,
  ContentChildMarkdownRemarkParentId = 260,
  ContentChildMarkdownRemarkRawMarkdownBody = 261,
  ContentChildMarkdownRemarkTableOfContents = 262,
  ContentChildMarkdownRemarkTimeToRead = 263,
  ContentChildMarkdownRemarkWordCountParagraphs = 264,
  ContentChildMarkdownRemarkWordCountSentences = 265,
  ContentChildMarkdownRemarkWordCountWords = 266,
  ContentChildren = 267,
  ContentChildrenMarkdownRemark = 268,
  ContentChildrenMarkdownRemarkChildren = 269,
  ContentChildrenMarkdownRemarkChildrenChildren = 270,
  ContentChildrenMarkdownRemarkChildrenId = 271,
  ContentChildrenMarkdownRemarkExcerpt = 272,
  ContentChildrenMarkdownRemarkExcerptAst = 273,
  ContentChildrenMarkdownRemarkFrontmatterTitle = 274,
  ContentChildrenMarkdownRemarkHeadings = 275,
  ContentChildrenMarkdownRemarkHeadingsDepth = 276,
  ContentChildrenMarkdownRemarkHeadingsId = 277,
  ContentChildrenMarkdownRemarkHeadingsValue = 278,
  ContentChildrenMarkdownRemarkHtml = 279,
  ContentChildrenMarkdownRemarkHtmlAst = 280,
  ContentChildrenMarkdownRemarkId = 281,
  ContentChildrenMarkdownRemarkInternalContent = 282,
  ContentChildrenMarkdownRemarkInternalContentDigest = 283,
  ContentChildrenMarkdownRemarkInternalDescription = 284,
  ContentChildrenMarkdownRemarkInternalFieldOwners = 285,
  ContentChildrenMarkdownRemarkInternalIgnoreType = 286,
  ContentChildrenMarkdownRemarkInternalMediaType = 287,
  ContentChildrenMarkdownRemarkInternalOwner = 288,
  ContentChildrenMarkdownRemarkInternalType = 289,
  ContentChildrenMarkdownRemarkParentChildren = 290,
  ContentChildrenMarkdownRemarkParentId = 291,
  ContentChildrenMarkdownRemarkRawMarkdownBody = 292,
  ContentChildrenMarkdownRemarkTableOfContents = 293,
  ContentChildrenMarkdownRemarkTimeToRead = 294,
  ContentChildrenMarkdownRemarkWordCountParagraphs = 295,
  ContentChildrenMarkdownRemarkWordCountSentences = 296,
  ContentChildrenMarkdownRemarkWordCountWords = 297,
  ContentChildrenChildren = 298,
  ContentChildrenChildrenChildren = 299,
  ContentChildrenChildrenId = 300,
  ContentChildrenId = 301,
  ContentChildrenInternalContent = 302,
  ContentChildrenInternalContentDigest = 303,
  ContentChildrenInternalDescription = 304,
  ContentChildrenInternalFieldOwners = 305,
  ContentChildrenInternalIgnoreType = 306,
  ContentChildrenInternalMediaType = 307,
  ContentChildrenInternalOwner = 308,
  ContentChildrenInternalType = 309,
  ContentChildrenParentChildren = 310,
  ContentChildrenParentId = 311,
  ContentContent = 312,
  ContentId = 313,
  ContentInternalContent = 314,
  ContentInternalContentDigest = 315,
  ContentInternalDescription = 316,
  ContentInternalFieldOwners = 317,
  ContentInternalIgnoreType = 318,
  ContentInternalMediaType = 319,
  ContentInternalOwner = 320,
  ContentInternalType = 321,
  ContentParentChildren = 322,
  ContentParentChildrenChildren = 323,
  ContentParentChildrenId = 324,
  ContentParentId = 325,
  ContentParentInternalContent = 326,
  ContentParentInternalContentDigest = 327,
  ContentParentInternalDescription = 328,
  ContentParentInternalFieldOwners = 329,
  ContentParentInternalIgnoreType = 330,
  ContentParentInternalMediaType = 331,
  ContentParentInternalOwner = 332,
  ContentParentInternalType = 333,
  ContentParentParentChildren = 334,
  ContentParentParentId = 335,
  ContentSysType = 336,
  ContentfulId = 337,
  Created = 338,
  CreatedAt = 339,
  Excerpt = 340,
  Id = 341,
  InternalContent = 342,
  InternalContentDigest = 343,
  InternalDescription = 344,
  InternalFieldOwners = 345,
  InternalIgnoreType = 346,
  InternalMediaType = 347,
  InternalOwner = 348,
  InternalType = 349,
  NodeLocale = 350,
  ParentChildren = 351,
  ParentChildrenChildren = 352,
  ParentChildrenChildrenChildren = 353,
  ParentChildrenChildrenId = 354,
  ParentChildrenId = 355,
  ParentChildrenInternalContent = 356,
  ParentChildrenInternalContentDigest = 357,
  ParentChildrenInternalDescription = 358,
  ParentChildrenInternalFieldOwners = 359,
  ParentChildrenInternalIgnoreType = 360,
  ParentChildrenInternalMediaType = 361,
  ParentChildrenInternalOwner = 362,
  ParentChildrenInternalType = 363,
  ParentChildrenParentChildren = 364,
  ParentChildrenParentId = 365,
  ParentId = 366,
  ParentInternalContent = 367,
  ParentInternalContentDigest = 368,
  ParentInternalDescription = 369,
  ParentInternalFieldOwners = 370,
  ParentInternalIgnoreType = 371,
  ParentInternalMediaType = 372,
  ParentInternalOwner = 373,
  ParentInternalType = 374,
  ParentParentChildren = 375,
  ParentParentChildrenChildren = 376,
  ParentParentChildrenId = 377,
  ParentParentId = 378,
  ParentParentInternalContent = 379,
  ParentParentInternalContentDigest = 380,
  ParentParentInternalDescription = 381,
  ParentParentInternalFieldOwners = 382,
  ParentParentInternalIgnoreType = 383,
  ParentParentInternalMediaType = 384,
  ParentParentInternalOwner = 385,
  ParentParentInternalType = 386,
  ParentParentParentChildren = 387,
  ParentParentParentId = 388,
  Slug = 389,
  SpaceId = 390,
  SysContentTypeSysId = 391,
  SysContentTypeSysLinkType = 392,
  SysContentTypeSysType = 393,
  SysRevision = 394,
  SysType = 395,
  Tags = 396,
  TagsBlogPost = 397,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 398,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 399,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 400,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 401,
  TagsBlogPostChildren = 402,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 403,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 404,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 405,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 406,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 407,
  TagsBlogPostChildrenChildren = 408,
  TagsBlogPostChildrenId = 409,
  TagsBlogPostContentChildren = 410,
  TagsBlogPostContentChildrenMarkdownRemark = 411,
  TagsBlogPostContentContent = 412,
  TagsBlogPostContentId = 413,
  TagsBlogPostContentfulId = 414,
  TagsBlogPostCreated = 415,
  TagsBlogPostCreatedAt = 416,
  TagsBlogPostExcerpt = 417,
  TagsBlogPostId = 418,
  TagsBlogPostInternalContent = 419,
  TagsBlogPostInternalContentDigest = 420,
  TagsBlogPostInternalDescription = 421,
  TagsBlogPostInternalFieldOwners = 422,
  TagsBlogPostInternalIgnoreType = 423,
  TagsBlogPostInternalMediaType = 424,
  TagsBlogPostInternalOwner = 425,
  TagsBlogPostInternalType = 426,
  TagsBlogPostNodeLocale = 427,
  TagsBlogPostParentChildren = 428,
  TagsBlogPostParentId = 429,
  TagsBlogPostSlug = 430,
  TagsBlogPostSpaceId = 431,
  TagsBlogPostSysRevision = 432,
  TagsBlogPostSysType = 433,
  TagsBlogPostTags = 434,
  TagsBlogPostTagsBlogPost = 435,
  TagsBlogPostTagsChildren = 436,
  TagsBlogPostTagsContentfulId = 437,
  TagsBlogPostTagsCreatedAt = 438,
  TagsBlogPostTagsId = 439,
  TagsBlogPostTagsLevel = 440,
  TagsBlogPostTagsName = 441,
  TagsBlogPostTagsNodeLocale = 442,
  TagsBlogPostTagsOss = 443,
  TagsBlogPostTagsProject = 444,
  TagsBlogPostTagsSkillMap = 445,
  TagsBlogPostTagsSpaceId = 446,
  TagsBlogPostTagsUpdatedAt = 447,
  TagsBlogPostTitle = 448,
  TagsBlogPostUpdated = 449,
  TagsBlogPostUpdatedAt = 450,
  TagsChildren = 451,
  TagsChildrenChildren = 452,
  TagsChildrenChildrenChildren = 453,
  TagsChildrenChildrenId = 454,
  TagsChildrenId = 455,
  TagsChildrenInternalContent = 456,
  TagsChildrenInternalContentDigest = 457,
  TagsChildrenInternalDescription = 458,
  TagsChildrenInternalFieldOwners = 459,
  TagsChildrenInternalIgnoreType = 460,
  TagsChildrenInternalMediaType = 461,
  TagsChildrenInternalOwner = 462,
  TagsChildrenInternalType = 463,
  TagsChildrenParentChildren = 464,
  TagsChildrenParentId = 465,
  TagsContentfulId = 466,
  TagsCreatedAt = 467,
  TagsId = 468,
  TagsInternalContent = 469,
  TagsInternalContentDigest = 470,
  TagsInternalDescription = 471,
  TagsInternalFieldOwners = 472,
  TagsInternalIgnoreType = 473,
  TagsInternalMediaType = 474,
  TagsInternalOwner = 475,
  TagsInternalType = 476,
  TagsLevel = 477,
  TagsName = 478,
  TagsNodeLocale = 479,
  TagsOss = 480,
  TagsOssChildContentfulOssDetailTextNodeChildren = 481,
  TagsOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 482,
  TagsOssChildContentfulOssDetailTextNodeDetail = 483,
  TagsOssChildContentfulOssDetailTextNodeId = 484,
  TagsOssChildren = 485,
  TagsOssChildrenContentfulOssDetailTextNode = 486,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 487,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 488,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 489,
  TagsOssChildrenContentfulOssDetailTextNodeId = 490,
  TagsOssChildrenChildren = 491,
  TagsOssChildrenId = 492,
  TagsOssContentfulId = 493,
  TagsOssCreatedAt = 494,
  TagsOssDetailChildren = 495,
  TagsOssDetailChildrenMarkdownRemark = 496,
  TagsOssDetailDetail = 497,
  TagsOssDetailId = 498,
  TagsOssHref = 499,
  TagsOssIconChildren = 500,
  TagsOssIconChildrenContentfulIconSvgTextNode = 501,
  TagsOssIconContact = 502,
  TagsOssIconContentfulId = 503,
  TagsOssIconCreatedAt = 504,
  TagsOssIconHistory = 505,
  TagsOssIconId = 506,
  TagsOssIconName = 507,
  TagsOssIconNodeLocale = 508,
  TagsOssIconOss = 509,
  TagsOssIconProject = 510,
  TagsOssIconSpaceId = 511,
  TagsOssIconUpdatedAt = 512,
  TagsOssIconWhatICanDo = 513,
  TagsOssId = 514,
  TagsOssImageChildren = 515,
  TagsOssImageContentfulId = 516,
  TagsOssImageCreatedAt = 517,
  TagsOssImageDescription = 518,
  TagsOssImageGatsbyImageData = 519,
  TagsOssImageId = 520,
  TagsOssImageNodeLocale = 521,
  TagsOssImageSpaceId = 522,
  TagsOssImageTitle = 523,
  TagsOssImageUpdatedAt = 524,
  TagsOssInternalContent = 525,
  TagsOssInternalContentDigest = 526,
  TagsOssInternalDescription = 527,
  TagsOssInternalFieldOwners = 528,
  TagsOssInternalIgnoreType = 529,
  TagsOssInternalMediaType = 530,
  TagsOssInternalOwner = 531,
  TagsOssInternalType = 532,
  TagsOssName = 533,
  TagsOssNodeLocale = 534,
  TagsOssParentChildren = 535,
  TagsOssParentId = 536,
  TagsOssSpaceId = 537,
  TagsOssStartDate = 538,
  TagsOssSubName = 539,
  TagsOssSysRevision = 540,
  TagsOssSysType = 541,
  TagsOssTags = 542,
  TagsOssTagsBlogPost = 543,
  TagsOssTagsChildren = 544,
  TagsOssTagsContentfulId = 545,
  TagsOssTagsCreatedAt = 546,
  TagsOssTagsId = 547,
  TagsOssTagsLevel = 548,
  TagsOssTagsName = 549,
  TagsOssTagsNodeLocale = 550,
  TagsOssTagsOss = 551,
  TagsOssTagsProject = 552,
  TagsOssTagsSkillMap = 553,
  TagsOssTagsSpaceId = 554,
  TagsOssTagsUpdatedAt = 555,
  TagsOssUpdatedAt = 556,
  TagsParentChildren = 557,
  TagsParentChildrenChildren = 558,
  TagsParentChildrenId = 559,
  TagsParentId = 560,
  TagsParentInternalContent = 561,
  TagsParentInternalContentDigest = 562,
  TagsParentInternalDescription = 563,
  TagsParentInternalFieldOwners = 564,
  TagsParentInternalIgnoreType = 565,
  TagsParentInternalMediaType = 566,
  TagsParentInternalOwner = 567,
  TagsParentInternalType = 568,
  TagsParentParentChildren = 569,
  TagsParentParentId = 570,
  TagsProject = 571,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 572,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 573,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 574,
  TagsProjectChildContentfulProjectDetailTextNodeId = 575,
  TagsProjectChildren = 576,
  TagsProjectChildrenContentfulProjectDetailTextNode = 577,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 578,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 579,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 580,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 581,
  TagsProjectChildrenChildren = 582,
  TagsProjectChildrenId = 583,
  TagsProjectContentfulId = 584,
  TagsProjectCreatedAt = 585,
  TagsProjectDetailChildren = 586,
  TagsProjectDetailChildrenMarkdownRemark = 587,
  TagsProjectDetailDetail = 588,
  TagsProjectDetailId = 589,
  TagsProjectEndDate = 590,
  TagsProjectIconChildren = 591,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 592,
  TagsProjectIconContact = 593,
  TagsProjectIconContentfulId = 594,
  TagsProjectIconCreatedAt = 595,
  TagsProjectIconHistory = 596,
  TagsProjectIconId = 597,
  TagsProjectIconName = 598,
  TagsProjectIconNodeLocale = 599,
  TagsProjectIconOss = 600,
  TagsProjectIconProject = 601,
  TagsProjectIconSpaceId = 602,
  TagsProjectIconUpdatedAt = 603,
  TagsProjectIconWhatICanDo = 604,
  TagsProjectId = 605,
  TagsProjectInternalContent = 606,
  TagsProjectInternalContentDigest = 607,
  TagsProjectInternalDescription = 608,
  TagsProjectInternalFieldOwners = 609,
  TagsProjectInternalIgnoreType = 610,
  TagsProjectInternalMediaType = 611,
  TagsProjectInternalOwner = 612,
  TagsProjectInternalType = 613,
  TagsProjectName = 614,
  TagsProjectNodeLocale = 615,
  TagsProjectParentChildren = 616,
  TagsProjectParentId = 617,
  TagsProjectSpaceId = 618,
  TagsProjectStartDate = 619,
  TagsProjectSubName = 620,
  TagsProjectSysRevision = 621,
  TagsProjectSysType = 622,
  TagsProjectTags = 623,
  TagsProjectTagsBlogPost = 624,
  TagsProjectTagsChildren = 625,
  TagsProjectTagsContentfulId = 626,
  TagsProjectTagsCreatedAt = 627,
  TagsProjectTagsId = 628,
  TagsProjectTagsLevel = 629,
  TagsProjectTagsName = 630,
  TagsProjectTagsNodeLocale = 631,
  TagsProjectTagsOss = 632,
  TagsProjectTagsProject = 633,
  TagsProjectTagsSkillMap = 634,
  TagsProjectTagsSpaceId = 635,
  TagsProjectTagsUpdatedAt = 636,
  TagsProjectUpdatedAt = 637,
  TagsSkillMap = 638,
  TagsSkillMapChildren = 639,
  TagsSkillMapChildrenChildren = 640,
  TagsSkillMapChildrenId = 641,
  TagsSkillMapContentfulId = 642,
  TagsSkillMapCreatedAt = 643,
  TagsSkillMapExpanded = 644,
  TagsSkillMapId = 645,
  TagsSkillMapInternalContent = 646,
  TagsSkillMapInternalContentDigest = 647,
  TagsSkillMapInternalDescription = 648,
  TagsSkillMapInternalFieldOwners = 649,
  TagsSkillMapInternalIgnoreType = 650,
  TagsSkillMapInternalMediaType = 651,
  TagsSkillMapInternalOwner = 652,
  TagsSkillMapInternalType = 653,
  TagsSkillMapName = 654,
  TagsSkillMapNodeLocale = 655,
  TagsSkillMapParentChildren = 656,
  TagsSkillMapParentId = 657,
  TagsSkillMapSkills = 658,
  TagsSkillMapSkillsBlogPost = 659,
  TagsSkillMapSkillsChildren = 660,
  TagsSkillMapSkillsContentfulId = 661,
  TagsSkillMapSkillsCreatedAt = 662,
  TagsSkillMapSkillsId = 663,
  TagsSkillMapSkillsLevel = 664,
  TagsSkillMapSkillsName = 665,
  TagsSkillMapSkillsNodeLocale = 666,
  TagsSkillMapSkillsOss = 667,
  TagsSkillMapSkillsProject = 668,
  TagsSkillMapSkillsSkillMap = 669,
  TagsSkillMapSkillsSpaceId = 670,
  TagsSkillMapSkillsUpdatedAt = 671,
  TagsSkillMapSortKey = 672,
  TagsSkillMapSpaceId = 673,
  TagsSkillMapSysRevision = 674,
  TagsSkillMapSysType = 675,
  TagsSkillMapUpdatedAt = 676,
  TagsSpaceId = 677,
  TagsSysRevision = 678,
  TagsSysType = 679,
  TagsUpdatedAt = 680,
  Title = 681,
  Updated = 682,
  UpdatedAt = 683
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
  IconChildContentfulIconSvgTextNodeChildren = 296,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 297,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 298,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 299,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 300,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 301,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 302,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 303,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 304,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 305,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 306,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 307,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 308,
  IconChildContentfulIconSvgTextNodeChildrenId = 309,
  IconChildContentfulIconSvgTextNodeId = 310,
  IconChildContentfulIconSvgTextNodeInternalContent = 311,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 312,
  IconChildContentfulIconSvgTextNodeInternalDescription = 313,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 314,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 315,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 316,
  IconChildContentfulIconSvgTextNodeInternalOwner = 317,
  IconChildContentfulIconSvgTextNodeInternalType = 318,
  IconChildContentfulIconSvgTextNodeParentChildren = 319,
  IconChildContentfulIconSvgTextNodeParentId = 320,
  IconChildContentfulIconSvgTextNodeSvg = 321,
  IconChildContentfulIconSvgTextNodeSysType = 322,
  IconChildren = 323,
  IconChildrenContentfulIconSvgTextNode = 324,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 325,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 326,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 327,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 328,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 329,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 330,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 331,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 332,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 333,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 334,
  IconChildrenContentfulIconSvgTextNodeChildren = 335,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 336,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 337,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 338,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 339,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 340,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 341,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 342,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 343,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 344,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 345,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 346,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 347,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 348,
  IconChildrenContentfulIconSvgTextNodeId = 349,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 350,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 351,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 352,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 353,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 354,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 355,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 356,
  IconChildrenContentfulIconSvgTextNodeInternalType = 357,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 358,
  IconChildrenContentfulIconSvgTextNodeParentId = 359,
  IconChildrenContentfulIconSvgTextNodeSvg = 360,
  IconChildrenContentfulIconSvgTextNodeSysType = 361,
  IconChildrenChildren = 362,
  IconChildrenChildrenChildren = 363,
  IconChildrenChildrenId = 364,
  IconChildrenId = 365,
  IconChildrenInternalContent = 366,
  IconChildrenInternalContentDigest = 367,
  IconChildrenInternalDescription = 368,
  IconChildrenInternalFieldOwners = 369,
  IconChildrenInternalIgnoreType = 370,
  IconChildrenInternalMediaType = 371,
  IconChildrenInternalOwner = 372,
  IconChildrenInternalType = 373,
  IconChildrenParentChildren = 374,
  IconChildrenParentId = 375,
  IconContact = 376,
  IconContactChildren = 377,
  IconContactChildrenChildren = 378,
  IconContactChildrenId = 379,
  IconContactContentfulId = 380,
  IconContactCreatedAt = 381,
  IconContactHref = 382,
  IconContactIconSvgDarkChildren = 383,
  IconContactIconSvgDarkContentfulId = 384,
  IconContactIconSvgDarkCreatedAt = 385,
  IconContactIconSvgDarkDescription = 386,
  IconContactIconSvgDarkGatsbyImageData = 387,
  IconContactIconSvgDarkId = 388,
  IconContactIconSvgDarkNodeLocale = 389,
  IconContactIconSvgDarkSpaceId = 390,
  IconContactIconSvgDarkTitle = 391,
  IconContactIconSvgDarkUpdatedAt = 392,
  IconContactIconSvgLightChildren = 393,
  IconContactIconSvgLightContentfulId = 394,
  IconContactIconSvgLightCreatedAt = 395,
  IconContactIconSvgLightDescription = 396,
  IconContactIconSvgLightGatsbyImageData = 397,
  IconContactIconSvgLightId = 398,
  IconContactIconSvgLightNodeLocale = 399,
  IconContactIconSvgLightSpaceId = 400,
  IconContactIconSvgLightTitle = 401,
  IconContactIconSvgLightUpdatedAt = 402,
  IconContactIconChildren = 403,
  IconContactIconChildrenContentfulIconSvgTextNode = 404,
  IconContactIconContact = 405,
  IconContactIconContentfulId = 406,
  IconContactIconCreatedAt = 407,
  IconContactIconHistory = 408,
  IconContactIconId = 409,
  IconContactIconName = 410,
  IconContactIconNodeLocale = 411,
  IconContactIconOss = 412,
  IconContactIconProject = 413,
  IconContactIconSpaceId = 414,
  IconContactIconUpdatedAt = 415,
  IconContactIconWhatICanDo = 416,
  IconContactId = 417,
  IconContactInternalContent = 418,
  IconContactInternalContentDigest = 419,
  IconContactInternalDescription = 420,
  IconContactInternalFieldOwners = 421,
  IconContactInternalIgnoreType = 422,
  IconContactInternalMediaType = 423,
  IconContactInternalOwner = 424,
  IconContactInternalType = 425,
  IconContactName = 426,
  IconContactNodeLocale = 427,
  IconContactParentChildren = 428,
  IconContactParentId = 429,
  IconContactSortKey = 430,
  IconContactSpaceId = 431,
  IconContactSubName = 432,
  IconContactSysRevision = 433,
  IconContactSysType = 434,
  IconContactUpdatedAt = 435,
  IconContentfulId = 436,
  IconCreatedAt = 437,
  IconHistory = 438,
  IconHistoryChildren = 439,
  IconHistoryChildrenChildren = 440,
  IconHistoryChildrenId = 441,
  IconHistoryContentfulId = 442,
  IconHistoryCreatedAt = 443,
  IconHistoryDate = 444,
  IconHistoryIconChildren = 445,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 446,
  IconHistoryIconContact = 447,
  IconHistoryIconContentfulId = 448,
  IconHistoryIconCreatedAt = 449,
  IconHistoryIconHistory = 450,
  IconHistoryIconId = 451,
  IconHistoryIconName = 452,
  IconHistoryIconNodeLocale = 453,
  IconHistoryIconOss = 454,
  IconHistoryIconProject = 455,
  IconHistoryIconSpaceId = 456,
  IconHistoryIconUpdatedAt = 457,
  IconHistoryIconWhatICanDo = 458,
  IconHistoryId = 459,
  IconHistoryInternalContent = 460,
  IconHistoryInternalContentDigest = 461,
  IconHistoryInternalDescription = 462,
  IconHistoryInternalFieldOwners = 463,
  IconHistoryInternalIgnoreType = 464,
  IconHistoryInternalMediaType = 465,
  IconHistoryInternalOwner = 466,
  IconHistoryInternalType = 467,
  IconHistoryName = 468,
  IconHistoryNodeLocale = 469,
  IconHistoryParentChildren = 470,
  IconHistoryParentId = 471,
  IconHistorySpaceId = 472,
  IconHistorySubName = 473,
  IconHistorySysRevision = 474,
  IconHistorySysType = 475,
  IconHistoryUpdatedAt = 476,
  IconId = 477,
  IconInternalContent = 478,
  IconInternalContentDigest = 479,
  IconInternalDescription = 480,
  IconInternalFieldOwners = 481,
  IconInternalIgnoreType = 482,
  IconInternalMediaType = 483,
  IconInternalOwner = 484,
  IconInternalType = 485,
  IconName = 486,
  IconNodeLocale = 487,
  IconOss = 488,
  IconOssChildContentfulOssDetailTextNodeChildren = 489,
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 490,
  IconOssChildContentfulOssDetailTextNodeDetail = 491,
  IconOssChildContentfulOssDetailTextNodeId = 492,
  IconOssChildren = 493,
  IconOssChildrenContentfulOssDetailTextNode = 494,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 495,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 496,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 497,
  IconOssChildrenContentfulOssDetailTextNodeId = 498,
  IconOssChildrenChildren = 499,
  IconOssChildrenId = 500,
  IconOssContentfulId = 501,
  IconOssCreatedAt = 502,
  IconOssDetailChildren = 503,
  IconOssDetailChildrenMarkdownRemark = 504,
  IconOssDetailDetail = 505,
  IconOssDetailId = 506,
  IconOssHref = 507,
  IconOssIconChildren = 508,
  IconOssIconChildrenContentfulIconSvgTextNode = 509,
  IconOssIconContact = 510,
  IconOssIconContentfulId = 511,
  IconOssIconCreatedAt = 512,
  IconOssIconHistory = 513,
  IconOssIconId = 514,
  IconOssIconName = 515,
  IconOssIconNodeLocale = 516,
  IconOssIconOss = 517,
  IconOssIconProject = 518,
  IconOssIconSpaceId = 519,
  IconOssIconUpdatedAt = 520,
  IconOssIconWhatICanDo = 521,
  IconOssId = 522,
  IconOssImageChildren = 523,
  IconOssImageContentfulId = 524,
  IconOssImageCreatedAt = 525,
  IconOssImageDescription = 526,
  IconOssImageGatsbyImageData = 527,
  IconOssImageId = 528,
  IconOssImageNodeLocale = 529,
  IconOssImageSpaceId = 530,
  IconOssImageTitle = 531,
  IconOssImageUpdatedAt = 532,
  IconOssInternalContent = 533,
  IconOssInternalContentDigest = 534,
  IconOssInternalDescription = 535,
  IconOssInternalFieldOwners = 536,
  IconOssInternalIgnoreType = 537,
  IconOssInternalMediaType = 538,
  IconOssInternalOwner = 539,
  IconOssInternalType = 540,
  IconOssName = 541,
  IconOssNodeLocale = 542,
  IconOssParentChildren = 543,
  IconOssParentId = 544,
  IconOssSpaceId = 545,
  IconOssStartDate = 546,
  IconOssSubName = 547,
  IconOssSysRevision = 548,
  IconOssSysType = 549,
  IconOssTags = 550,
  IconOssTagsBlogPost = 551,
  IconOssTagsChildren = 552,
  IconOssTagsContentfulId = 553,
  IconOssTagsCreatedAt = 554,
  IconOssTagsId = 555,
  IconOssTagsLevel = 556,
  IconOssTagsName = 557,
  IconOssTagsNodeLocale = 558,
  IconOssTagsOss = 559,
  IconOssTagsProject = 560,
  IconOssTagsSkillMap = 561,
  IconOssTagsSpaceId = 562,
  IconOssTagsUpdatedAt = 563,
  IconOssUpdatedAt = 564,
  IconParentChildren = 565,
  IconParentChildrenChildren = 566,
  IconParentChildrenId = 567,
  IconParentId = 568,
  IconParentInternalContent = 569,
  IconParentInternalContentDigest = 570,
  IconParentInternalDescription = 571,
  IconParentInternalFieldOwners = 572,
  IconParentInternalIgnoreType = 573,
  IconParentInternalMediaType = 574,
  IconParentInternalOwner = 575,
  IconParentInternalType = 576,
  IconParentParentChildren = 577,
  IconParentParentId = 578,
  IconProject = 579,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 580,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 581,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 582,
  IconProjectChildContentfulProjectDetailTextNodeId = 583,
  IconProjectChildren = 584,
  IconProjectChildrenContentfulProjectDetailTextNode = 585,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 586,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 587,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 588,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 589,
  IconProjectChildrenChildren = 590,
  IconProjectChildrenId = 591,
  IconProjectContentfulId = 592,
  IconProjectCreatedAt = 593,
  IconProjectDetailChildren = 594,
  IconProjectDetailChildrenMarkdownRemark = 595,
  IconProjectDetailDetail = 596,
  IconProjectDetailId = 597,
  IconProjectEndDate = 598,
  IconProjectIconChildren = 599,
  IconProjectIconChildrenContentfulIconSvgTextNode = 600,
  IconProjectIconContact = 601,
  IconProjectIconContentfulId = 602,
  IconProjectIconCreatedAt = 603,
  IconProjectIconHistory = 604,
  IconProjectIconId = 605,
  IconProjectIconName = 606,
  IconProjectIconNodeLocale = 607,
  IconProjectIconOss = 608,
  IconProjectIconProject = 609,
  IconProjectIconSpaceId = 610,
  IconProjectIconUpdatedAt = 611,
  IconProjectIconWhatICanDo = 612,
  IconProjectId = 613,
  IconProjectInternalContent = 614,
  IconProjectInternalContentDigest = 615,
  IconProjectInternalDescription = 616,
  IconProjectInternalFieldOwners = 617,
  IconProjectInternalIgnoreType = 618,
  IconProjectInternalMediaType = 619,
  IconProjectInternalOwner = 620,
  IconProjectInternalType = 621,
  IconProjectName = 622,
  IconProjectNodeLocale = 623,
  IconProjectParentChildren = 624,
  IconProjectParentId = 625,
  IconProjectSpaceId = 626,
  IconProjectStartDate = 627,
  IconProjectSubName = 628,
  IconProjectSysRevision = 629,
  IconProjectSysType = 630,
  IconProjectTags = 631,
  IconProjectTagsBlogPost = 632,
  IconProjectTagsChildren = 633,
  IconProjectTagsContentfulId = 634,
  IconProjectTagsCreatedAt = 635,
  IconProjectTagsId = 636,
  IconProjectTagsLevel = 637,
  IconProjectTagsName = 638,
  IconProjectTagsNodeLocale = 639,
  IconProjectTagsOss = 640,
  IconProjectTagsProject = 641,
  IconProjectTagsSkillMap = 642,
  IconProjectTagsSpaceId = 643,
  IconProjectTagsUpdatedAt = 644,
  IconProjectUpdatedAt = 645,
  IconSpaceId = 646,
  IconSvgChildMarkdownRemarkChildren = 647,
  IconSvgChildMarkdownRemarkExcerpt = 648,
  IconSvgChildMarkdownRemarkExcerptAst = 649,
  IconSvgChildMarkdownRemarkHeadings = 650,
  IconSvgChildMarkdownRemarkHtml = 651,
  IconSvgChildMarkdownRemarkHtmlAst = 652,
  IconSvgChildMarkdownRemarkId = 653,
  IconSvgChildMarkdownRemarkRawMarkdownBody = 654,
  IconSvgChildMarkdownRemarkTableOfContents = 655,
  IconSvgChildMarkdownRemarkTimeToRead = 656,
  IconSvgChildren = 657,
  IconSvgChildrenMarkdownRemark = 658,
  IconSvgChildrenMarkdownRemarkChildren = 659,
  IconSvgChildrenMarkdownRemarkExcerpt = 660,
  IconSvgChildrenMarkdownRemarkExcerptAst = 661,
  IconSvgChildrenMarkdownRemarkHeadings = 662,
  IconSvgChildrenMarkdownRemarkHtml = 663,
  IconSvgChildrenMarkdownRemarkHtmlAst = 664,
  IconSvgChildrenMarkdownRemarkId = 665,
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 666,
  IconSvgChildrenMarkdownRemarkTableOfContents = 667,
  IconSvgChildrenMarkdownRemarkTimeToRead = 668,
  IconSvgChildrenChildren = 669,
  IconSvgChildrenId = 670,
  IconSvgId = 671,
  IconSvgInternalContent = 672,
  IconSvgInternalContentDigest = 673,
  IconSvgInternalDescription = 674,
  IconSvgInternalFieldOwners = 675,
  IconSvgInternalIgnoreType = 676,
  IconSvgInternalMediaType = 677,
  IconSvgInternalOwner = 678,
  IconSvgInternalType = 679,
  IconSvgParentChildren = 680,
  IconSvgParentId = 681,
  IconSvgSvg = 682,
  IconSvgSysType = 683,
  IconSysRevision = 684,
  IconSysType = 685,
  IconUpdatedAt = 686,
  IconWhatICanDo = 687,
  IconWhatICanDoChildren = 688,
  IconWhatICanDoChildrenChildren = 689,
  IconWhatICanDoChildrenId = 690,
  IconWhatICanDoContentfulId = 691,
  IconWhatICanDoCreatedAt = 692,
  IconWhatICanDoIconChildren = 693,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 694,
  IconWhatICanDoIconContact = 695,
  IconWhatICanDoIconContentfulId = 696,
  IconWhatICanDoIconCreatedAt = 697,
  IconWhatICanDoIconHistory = 698,
  IconWhatICanDoIconId = 699,
  IconWhatICanDoIconName = 700,
  IconWhatICanDoIconNodeLocale = 701,
  IconWhatICanDoIconOss = 702,
  IconWhatICanDoIconProject = 703,
  IconWhatICanDoIconSpaceId = 704,
  IconWhatICanDoIconUpdatedAt = 705,
  IconWhatICanDoIconWhatICanDo = 706,
  IconWhatICanDoId = 707,
  IconWhatICanDoInternalContent = 708,
  IconWhatICanDoInternalContentDigest = 709,
  IconWhatICanDoInternalDescription = 710,
  IconWhatICanDoInternalFieldOwners = 711,
  IconWhatICanDoInternalIgnoreType = 712,
  IconWhatICanDoInternalMediaType = 713,
  IconWhatICanDoInternalOwner = 714,
  IconWhatICanDoInternalType = 715,
  IconWhatICanDoName = 716,
  IconWhatICanDoNodeLocale = 717,
  IconWhatICanDoParentChildren = 718,
  IconWhatICanDoParentId = 719,
  IconWhatICanDoSortKey = 720,
  IconWhatICanDoSpaceId = 721,
  IconWhatICanDoSubName = 722,
  IconWhatICanDoSysRevision = 723,
  IconWhatICanDoSysType = 724,
  IconWhatICanDoUpdatedAt = 725,
  Id = 726,
  InternalContent = 727,
  InternalContentDigest = 728,
  InternalDescription = 729,
  InternalFieldOwners = 730,
  InternalIgnoreType = 731,
  InternalMediaType = 732,
  InternalOwner = 733,
  InternalType = 734,
  Name = 735,
  NodeLocale = 736,
  ParentChildren = 737,
  ParentChildrenChildren = 738,
  ParentChildrenChildrenChildren = 739,
  ParentChildrenChildrenId = 740,
  ParentChildrenId = 741,
  ParentChildrenInternalContent = 742,
  ParentChildrenInternalContentDigest = 743,
  ParentChildrenInternalDescription = 744,
  ParentChildrenInternalFieldOwners = 745,
  ParentChildrenInternalIgnoreType = 746,
  ParentChildrenInternalMediaType = 747,
  ParentChildrenInternalOwner = 748,
  ParentChildrenInternalType = 749,
  ParentChildrenParentChildren = 750,
  ParentChildrenParentId = 751,
  ParentId = 752,
  ParentInternalContent = 753,
  ParentInternalContentDigest = 754,
  ParentInternalDescription = 755,
  ParentInternalFieldOwners = 756,
  ParentInternalIgnoreType = 757,
  ParentInternalMediaType = 758,
  ParentInternalOwner = 759,
  ParentInternalType = 760,
  ParentParentChildren = 761,
  ParentParentChildrenChildren = 762,
  ParentParentChildrenId = 763,
  ParentParentId = 764,
  ParentParentInternalContent = 765,
  ParentParentInternalContentDigest = 766,
  ParentParentInternalDescription = 767,
  ParentParentInternalFieldOwners = 768,
  ParentParentInternalIgnoreType = 769,
  ParentParentInternalMediaType = 770,
  ParentParentInternalOwner = 771,
  ParentParentInternalType = 772,
  ParentParentParentChildren = 773,
  ParentParentParentId = 774,
  SortKey = 775,
  SpaceId = 776,
  SubName = 777,
  SysContentTypeSysId = 778,
  SysContentTypeSysLinkType = 779,
  SysContentTypeSysType = 780,
  SysRevision = 781,
  SysType = 782,
  UpdatedAt = 783
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
  IconChildContentfulIconSvgTextNodeChildren = 52,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 53,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 54,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 55,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 56,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 57,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 58,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 59,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 60,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 61,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 62,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 63,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 64,
  IconChildContentfulIconSvgTextNodeChildrenId = 65,
  IconChildContentfulIconSvgTextNodeId = 66,
  IconChildContentfulIconSvgTextNodeInternalContent = 67,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 68,
  IconChildContentfulIconSvgTextNodeInternalDescription = 69,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 70,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 71,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 72,
  IconChildContentfulIconSvgTextNodeInternalOwner = 73,
  IconChildContentfulIconSvgTextNodeInternalType = 74,
  IconChildContentfulIconSvgTextNodeParentChildren = 75,
  IconChildContentfulIconSvgTextNodeParentId = 76,
  IconChildContentfulIconSvgTextNodeSvg = 77,
  IconChildContentfulIconSvgTextNodeSysType = 78,
  IconChildren = 79,
  IconChildrenContentfulIconSvgTextNode = 80,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 81,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 82,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 83,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 84,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 85,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 86,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 87,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 88,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 89,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 90,
  IconChildrenContentfulIconSvgTextNodeChildren = 91,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 92,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 93,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 94,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 95,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 96,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 97,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 98,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 99,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 100,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 101,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 102,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 103,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 104,
  IconChildrenContentfulIconSvgTextNodeId = 105,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 106,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 107,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 108,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 109,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 110,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 111,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 112,
  IconChildrenContentfulIconSvgTextNodeInternalType = 113,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 114,
  IconChildrenContentfulIconSvgTextNodeParentId = 115,
  IconChildrenContentfulIconSvgTextNodeSvg = 116,
  IconChildrenContentfulIconSvgTextNodeSysType = 117,
  IconChildrenChildren = 118,
  IconChildrenChildrenChildren = 119,
  IconChildrenChildrenId = 120,
  IconChildrenId = 121,
  IconChildrenInternalContent = 122,
  IconChildrenInternalContentDigest = 123,
  IconChildrenInternalDescription = 124,
  IconChildrenInternalFieldOwners = 125,
  IconChildrenInternalIgnoreType = 126,
  IconChildrenInternalMediaType = 127,
  IconChildrenInternalOwner = 128,
  IconChildrenInternalType = 129,
  IconChildrenParentChildren = 130,
  IconChildrenParentId = 131,
  IconContact = 132,
  IconContactChildren = 133,
  IconContactChildrenChildren = 134,
  IconContactChildrenId = 135,
  IconContactContentfulId = 136,
  IconContactCreatedAt = 137,
  IconContactHref = 138,
  IconContactIconSvgDarkChildren = 139,
  IconContactIconSvgDarkContentfulId = 140,
  IconContactIconSvgDarkCreatedAt = 141,
  IconContactIconSvgDarkDescription = 142,
  IconContactIconSvgDarkGatsbyImageData = 143,
  IconContactIconSvgDarkId = 144,
  IconContactIconSvgDarkNodeLocale = 145,
  IconContactIconSvgDarkSpaceId = 146,
  IconContactIconSvgDarkTitle = 147,
  IconContactIconSvgDarkUpdatedAt = 148,
  IconContactIconSvgLightChildren = 149,
  IconContactIconSvgLightContentfulId = 150,
  IconContactIconSvgLightCreatedAt = 151,
  IconContactIconSvgLightDescription = 152,
  IconContactIconSvgLightGatsbyImageData = 153,
  IconContactIconSvgLightId = 154,
  IconContactIconSvgLightNodeLocale = 155,
  IconContactIconSvgLightSpaceId = 156,
  IconContactIconSvgLightTitle = 157,
  IconContactIconSvgLightUpdatedAt = 158,
  IconContactIconChildren = 159,
  IconContactIconChildrenContentfulIconSvgTextNode = 160,
  IconContactIconContact = 161,
  IconContactIconContentfulId = 162,
  IconContactIconCreatedAt = 163,
  IconContactIconHistory = 164,
  IconContactIconId = 165,
  IconContactIconName = 166,
  IconContactIconNodeLocale = 167,
  IconContactIconOss = 168,
  IconContactIconProject = 169,
  IconContactIconSpaceId = 170,
  IconContactIconUpdatedAt = 171,
  IconContactIconWhatICanDo = 172,
  IconContactId = 173,
  IconContactInternalContent = 174,
  IconContactInternalContentDigest = 175,
  IconContactInternalDescription = 176,
  IconContactInternalFieldOwners = 177,
  IconContactInternalIgnoreType = 178,
  IconContactInternalMediaType = 179,
  IconContactInternalOwner = 180,
  IconContactInternalType = 181,
  IconContactName = 182,
  IconContactNodeLocale = 183,
  IconContactParentChildren = 184,
  IconContactParentId = 185,
  IconContactSortKey = 186,
  IconContactSpaceId = 187,
  IconContactSubName = 188,
  IconContactSysRevision = 189,
  IconContactSysType = 190,
  IconContactUpdatedAt = 191,
  IconContentfulId = 192,
  IconCreatedAt = 193,
  IconHistory = 194,
  IconHistoryChildren = 195,
  IconHistoryChildrenChildren = 196,
  IconHistoryChildrenId = 197,
  IconHistoryContentfulId = 198,
  IconHistoryCreatedAt = 199,
  IconHistoryDate = 200,
  IconHistoryIconChildren = 201,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 202,
  IconHistoryIconContact = 203,
  IconHistoryIconContentfulId = 204,
  IconHistoryIconCreatedAt = 205,
  IconHistoryIconHistory = 206,
  IconHistoryIconId = 207,
  IconHistoryIconName = 208,
  IconHistoryIconNodeLocale = 209,
  IconHistoryIconOss = 210,
  IconHistoryIconProject = 211,
  IconHistoryIconSpaceId = 212,
  IconHistoryIconUpdatedAt = 213,
  IconHistoryIconWhatICanDo = 214,
  IconHistoryId = 215,
  IconHistoryInternalContent = 216,
  IconHistoryInternalContentDigest = 217,
  IconHistoryInternalDescription = 218,
  IconHistoryInternalFieldOwners = 219,
  IconHistoryInternalIgnoreType = 220,
  IconHistoryInternalMediaType = 221,
  IconHistoryInternalOwner = 222,
  IconHistoryInternalType = 223,
  IconHistoryName = 224,
  IconHistoryNodeLocale = 225,
  IconHistoryParentChildren = 226,
  IconHistoryParentId = 227,
  IconHistorySpaceId = 228,
  IconHistorySubName = 229,
  IconHistorySysRevision = 230,
  IconHistorySysType = 231,
  IconHistoryUpdatedAt = 232,
  IconId = 233,
  IconInternalContent = 234,
  IconInternalContentDigest = 235,
  IconInternalDescription = 236,
  IconInternalFieldOwners = 237,
  IconInternalIgnoreType = 238,
  IconInternalMediaType = 239,
  IconInternalOwner = 240,
  IconInternalType = 241,
  IconName = 242,
  IconNodeLocale = 243,
  IconOss = 244,
  IconOssChildContentfulOssDetailTextNodeChildren = 245,
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 246,
  IconOssChildContentfulOssDetailTextNodeDetail = 247,
  IconOssChildContentfulOssDetailTextNodeId = 248,
  IconOssChildren = 249,
  IconOssChildrenContentfulOssDetailTextNode = 250,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 251,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 252,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 253,
  IconOssChildrenContentfulOssDetailTextNodeId = 254,
  IconOssChildrenChildren = 255,
  IconOssChildrenId = 256,
  IconOssContentfulId = 257,
  IconOssCreatedAt = 258,
  IconOssDetailChildren = 259,
  IconOssDetailChildrenMarkdownRemark = 260,
  IconOssDetailDetail = 261,
  IconOssDetailId = 262,
  IconOssHref = 263,
  IconOssIconChildren = 264,
  IconOssIconChildrenContentfulIconSvgTextNode = 265,
  IconOssIconContact = 266,
  IconOssIconContentfulId = 267,
  IconOssIconCreatedAt = 268,
  IconOssIconHistory = 269,
  IconOssIconId = 270,
  IconOssIconName = 271,
  IconOssIconNodeLocale = 272,
  IconOssIconOss = 273,
  IconOssIconProject = 274,
  IconOssIconSpaceId = 275,
  IconOssIconUpdatedAt = 276,
  IconOssIconWhatICanDo = 277,
  IconOssId = 278,
  IconOssImageChildren = 279,
  IconOssImageContentfulId = 280,
  IconOssImageCreatedAt = 281,
  IconOssImageDescription = 282,
  IconOssImageGatsbyImageData = 283,
  IconOssImageId = 284,
  IconOssImageNodeLocale = 285,
  IconOssImageSpaceId = 286,
  IconOssImageTitle = 287,
  IconOssImageUpdatedAt = 288,
  IconOssInternalContent = 289,
  IconOssInternalContentDigest = 290,
  IconOssInternalDescription = 291,
  IconOssInternalFieldOwners = 292,
  IconOssInternalIgnoreType = 293,
  IconOssInternalMediaType = 294,
  IconOssInternalOwner = 295,
  IconOssInternalType = 296,
  IconOssName = 297,
  IconOssNodeLocale = 298,
  IconOssParentChildren = 299,
  IconOssParentId = 300,
  IconOssSpaceId = 301,
  IconOssStartDate = 302,
  IconOssSubName = 303,
  IconOssSysRevision = 304,
  IconOssSysType = 305,
  IconOssTags = 306,
  IconOssTagsBlogPost = 307,
  IconOssTagsChildren = 308,
  IconOssTagsContentfulId = 309,
  IconOssTagsCreatedAt = 310,
  IconOssTagsId = 311,
  IconOssTagsLevel = 312,
  IconOssTagsName = 313,
  IconOssTagsNodeLocale = 314,
  IconOssTagsOss = 315,
  IconOssTagsProject = 316,
  IconOssTagsSkillMap = 317,
  IconOssTagsSpaceId = 318,
  IconOssTagsUpdatedAt = 319,
  IconOssUpdatedAt = 320,
  IconParentChildren = 321,
  IconParentChildrenChildren = 322,
  IconParentChildrenId = 323,
  IconParentId = 324,
  IconParentInternalContent = 325,
  IconParentInternalContentDigest = 326,
  IconParentInternalDescription = 327,
  IconParentInternalFieldOwners = 328,
  IconParentInternalIgnoreType = 329,
  IconParentInternalMediaType = 330,
  IconParentInternalOwner = 331,
  IconParentInternalType = 332,
  IconParentParentChildren = 333,
  IconParentParentId = 334,
  IconProject = 335,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 336,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 337,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 338,
  IconProjectChildContentfulProjectDetailTextNodeId = 339,
  IconProjectChildren = 340,
  IconProjectChildrenContentfulProjectDetailTextNode = 341,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 342,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 343,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 344,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 345,
  IconProjectChildrenChildren = 346,
  IconProjectChildrenId = 347,
  IconProjectContentfulId = 348,
  IconProjectCreatedAt = 349,
  IconProjectDetailChildren = 350,
  IconProjectDetailChildrenMarkdownRemark = 351,
  IconProjectDetailDetail = 352,
  IconProjectDetailId = 353,
  IconProjectEndDate = 354,
  IconProjectIconChildren = 355,
  IconProjectIconChildrenContentfulIconSvgTextNode = 356,
  IconProjectIconContact = 357,
  IconProjectIconContentfulId = 358,
  IconProjectIconCreatedAt = 359,
  IconProjectIconHistory = 360,
  IconProjectIconId = 361,
  IconProjectIconName = 362,
  IconProjectIconNodeLocale = 363,
  IconProjectIconOss = 364,
  IconProjectIconProject = 365,
  IconProjectIconSpaceId = 366,
  IconProjectIconUpdatedAt = 367,
  IconProjectIconWhatICanDo = 368,
  IconProjectId = 369,
  IconProjectInternalContent = 370,
  IconProjectInternalContentDigest = 371,
  IconProjectInternalDescription = 372,
  IconProjectInternalFieldOwners = 373,
  IconProjectInternalIgnoreType = 374,
  IconProjectInternalMediaType = 375,
  IconProjectInternalOwner = 376,
  IconProjectInternalType = 377,
  IconProjectName = 378,
  IconProjectNodeLocale = 379,
  IconProjectParentChildren = 380,
  IconProjectParentId = 381,
  IconProjectSpaceId = 382,
  IconProjectStartDate = 383,
  IconProjectSubName = 384,
  IconProjectSysRevision = 385,
  IconProjectSysType = 386,
  IconProjectTags = 387,
  IconProjectTagsBlogPost = 388,
  IconProjectTagsChildren = 389,
  IconProjectTagsContentfulId = 390,
  IconProjectTagsCreatedAt = 391,
  IconProjectTagsId = 392,
  IconProjectTagsLevel = 393,
  IconProjectTagsName = 394,
  IconProjectTagsNodeLocale = 395,
  IconProjectTagsOss = 396,
  IconProjectTagsProject = 397,
  IconProjectTagsSkillMap = 398,
  IconProjectTagsSpaceId = 399,
  IconProjectTagsUpdatedAt = 400,
  IconProjectUpdatedAt = 401,
  IconSpaceId = 402,
  IconSvgChildMarkdownRemarkChildren = 403,
  IconSvgChildMarkdownRemarkExcerpt = 404,
  IconSvgChildMarkdownRemarkExcerptAst = 405,
  IconSvgChildMarkdownRemarkHeadings = 406,
  IconSvgChildMarkdownRemarkHtml = 407,
  IconSvgChildMarkdownRemarkHtmlAst = 408,
  IconSvgChildMarkdownRemarkId = 409,
  IconSvgChildMarkdownRemarkRawMarkdownBody = 410,
  IconSvgChildMarkdownRemarkTableOfContents = 411,
  IconSvgChildMarkdownRemarkTimeToRead = 412,
  IconSvgChildren = 413,
  IconSvgChildrenMarkdownRemark = 414,
  IconSvgChildrenMarkdownRemarkChildren = 415,
  IconSvgChildrenMarkdownRemarkExcerpt = 416,
  IconSvgChildrenMarkdownRemarkExcerptAst = 417,
  IconSvgChildrenMarkdownRemarkHeadings = 418,
  IconSvgChildrenMarkdownRemarkHtml = 419,
  IconSvgChildrenMarkdownRemarkHtmlAst = 420,
  IconSvgChildrenMarkdownRemarkId = 421,
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 422,
  IconSvgChildrenMarkdownRemarkTableOfContents = 423,
  IconSvgChildrenMarkdownRemarkTimeToRead = 424,
  IconSvgChildrenChildren = 425,
  IconSvgChildrenId = 426,
  IconSvgId = 427,
  IconSvgInternalContent = 428,
  IconSvgInternalContentDigest = 429,
  IconSvgInternalDescription = 430,
  IconSvgInternalFieldOwners = 431,
  IconSvgInternalIgnoreType = 432,
  IconSvgInternalMediaType = 433,
  IconSvgInternalOwner = 434,
  IconSvgInternalType = 435,
  IconSvgParentChildren = 436,
  IconSvgParentId = 437,
  IconSvgSvg = 438,
  IconSvgSysType = 439,
  IconSysRevision = 440,
  IconSysType = 441,
  IconUpdatedAt = 442,
  IconWhatICanDo = 443,
  IconWhatICanDoChildren = 444,
  IconWhatICanDoChildrenChildren = 445,
  IconWhatICanDoChildrenId = 446,
  IconWhatICanDoContentfulId = 447,
  IconWhatICanDoCreatedAt = 448,
  IconWhatICanDoIconChildren = 449,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 450,
  IconWhatICanDoIconContact = 451,
  IconWhatICanDoIconContentfulId = 452,
  IconWhatICanDoIconCreatedAt = 453,
  IconWhatICanDoIconHistory = 454,
  IconWhatICanDoIconId = 455,
  IconWhatICanDoIconName = 456,
  IconWhatICanDoIconNodeLocale = 457,
  IconWhatICanDoIconOss = 458,
  IconWhatICanDoIconProject = 459,
  IconWhatICanDoIconSpaceId = 460,
  IconWhatICanDoIconUpdatedAt = 461,
  IconWhatICanDoIconWhatICanDo = 462,
  IconWhatICanDoId = 463,
  IconWhatICanDoInternalContent = 464,
  IconWhatICanDoInternalContentDigest = 465,
  IconWhatICanDoInternalDescription = 466,
  IconWhatICanDoInternalFieldOwners = 467,
  IconWhatICanDoInternalIgnoreType = 468,
  IconWhatICanDoInternalMediaType = 469,
  IconWhatICanDoInternalOwner = 470,
  IconWhatICanDoInternalType = 471,
  IconWhatICanDoName = 472,
  IconWhatICanDoNodeLocale = 473,
  IconWhatICanDoParentChildren = 474,
  IconWhatICanDoParentId = 475,
  IconWhatICanDoSortKey = 476,
  IconWhatICanDoSpaceId = 477,
  IconWhatICanDoSubName = 478,
  IconWhatICanDoSysRevision = 479,
  IconWhatICanDoSysType = 480,
  IconWhatICanDoUpdatedAt = 481,
  Id = 482,
  InternalContent = 483,
  InternalContentDigest = 484,
  InternalDescription = 485,
  InternalFieldOwners = 486,
  InternalIgnoreType = 487,
  InternalMediaType = 488,
  InternalOwner = 489,
  InternalType = 490,
  Name = 491,
  NodeLocale = 492,
  ParentChildren = 493,
  ParentChildrenChildren = 494,
  ParentChildrenChildrenChildren = 495,
  ParentChildrenChildrenId = 496,
  ParentChildrenId = 497,
  ParentChildrenInternalContent = 498,
  ParentChildrenInternalContentDigest = 499,
  ParentChildrenInternalDescription = 500,
  ParentChildrenInternalFieldOwners = 501,
  ParentChildrenInternalIgnoreType = 502,
  ParentChildrenInternalMediaType = 503,
  ParentChildrenInternalOwner = 504,
  ParentChildrenInternalType = 505,
  ParentChildrenParentChildren = 506,
  ParentChildrenParentId = 507,
  ParentId = 508,
  ParentInternalContent = 509,
  ParentInternalContentDigest = 510,
  ParentInternalDescription = 511,
  ParentInternalFieldOwners = 512,
  ParentInternalIgnoreType = 513,
  ParentInternalMediaType = 514,
  ParentInternalOwner = 515,
  ParentInternalType = 516,
  ParentParentChildren = 517,
  ParentParentChildrenChildren = 518,
  ParentParentChildrenId = 519,
  ParentParentId = 520,
  ParentParentInternalContent = 521,
  ParentParentInternalContentDigest = 522,
  ParentParentInternalDescription = 523,
  ParentParentInternalFieldOwners = 524,
  ParentParentInternalIgnoreType = 525,
  ParentParentInternalMediaType = 526,
  ParentParentInternalOwner = 527,
  ParentParentInternalType = 528,
  ParentParentParentChildren = 529,
  ParentParentParentId = 530,
  SpaceId = 531,
  SubName = 532,
  SysContentTypeSysId = 533,
  SysContentTypeSysLinkType = 534,
  SysContentTypeSysType = 535,
  SysRevision = 536,
  SysType = 537,
  UpdatedAt = 538
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
  ChildContentfulIconSvgTextNodeChildren = 29,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 30,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 31,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenChildren = 32,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenId = 33,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 34,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 35,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkFrontmatterTitle = 36,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 37,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsDepth = 38,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsId = 39,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsValue = 40,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 41,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 42,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 43,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContent = 44,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContentDigest = 45,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalDescription = 46,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalFieldOwners = 47,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalIgnoreType = 48,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalMediaType = 49,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalOwner = 50,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalType = 51,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkParentChildren = 52,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkParentId = 53,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 54,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 55,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 56,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountParagraphs = 57,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountSentences = 58,
  ChildContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountWords = 59,
  ChildContentfulIconSvgTextNodeChildrenChildren = 60,
  ChildContentfulIconSvgTextNodeChildrenChildrenChildren = 61,
  ChildContentfulIconSvgTextNodeChildrenChildrenId = 62,
  ChildContentfulIconSvgTextNodeChildrenId = 63,
  ChildContentfulIconSvgTextNodeChildrenInternalContent = 64,
  ChildContentfulIconSvgTextNodeChildrenInternalContentDigest = 65,
  ChildContentfulIconSvgTextNodeChildrenInternalDescription = 66,
  ChildContentfulIconSvgTextNodeChildrenInternalFieldOwners = 67,
  ChildContentfulIconSvgTextNodeChildrenInternalIgnoreType = 68,
  ChildContentfulIconSvgTextNodeChildrenInternalMediaType = 69,
  ChildContentfulIconSvgTextNodeChildrenInternalOwner = 70,
  ChildContentfulIconSvgTextNodeChildrenInternalType = 71,
  ChildContentfulIconSvgTextNodeChildrenParentChildren = 72,
  ChildContentfulIconSvgTextNodeChildrenParentId = 73,
  ChildContentfulIconSvgTextNodeId = 74,
  ChildContentfulIconSvgTextNodeInternalContent = 75,
  ChildContentfulIconSvgTextNodeInternalContentDigest = 76,
  ChildContentfulIconSvgTextNodeInternalDescription = 77,
  ChildContentfulIconSvgTextNodeInternalFieldOwners = 78,
  ChildContentfulIconSvgTextNodeInternalIgnoreType = 79,
  ChildContentfulIconSvgTextNodeInternalMediaType = 80,
  ChildContentfulIconSvgTextNodeInternalOwner = 81,
  ChildContentfulIconSvgTextNodeInternalType = 82,
  ChildContentfulIconSvgTextNodeParentChildren = 83,
  ChildContentfulIconSvgTextNodeParentChildrenChildren = 84,
  ChildContentfulIconSvgTextNodeParentChildrenId = 85,
  ChildContentfulIconSvgTextNodeParentId = 86,
  ChildContentfulIconSvgTextNodeParentInternalContent = 87,
  ChildContentfulIconSvgTextNodeParentInternalContentDigest = 88,
  ChildContentfulIconSvgTextNodeParentInternalDescription = 89,
  ChildContentfulIconSvgTextNodeParentInternalFieldOwners = 90,
  ChildContentfulIconSvgTextNodeParentInternalIgnoreType = 91,
  ChildContentfulIconSvgTextNodeParentInternalMediaType = 92,
  ChildContentfulIconSvgTextNodeParentInternalOwner = 93,
  ChildContentfulIconSvgTextNodeParentInternalType = 94,
  ChildContentfulIconSvgTextNodeParentParentChildren = 95,
  ChildContentfulIconSvgTextNodeParentParentId = 96,
  ChildContentfulIconSvgTextNodeSvg = 97,
  ChildContentfulIconSvgTextNodeSysType = 98,
  Children = 99,
  ChildrenContentfulIconSvgTextNode = 100,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 101,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildrenChildren = 102,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildrenId = 103,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 104,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 105,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkFrontmatterTitle = 106,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 107,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsDepth = 108,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsId = 109,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadingsValue = 110,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 111,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 112,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 113,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalContent = 114,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalContentDigest = 115,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalDescription = 116,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalFieldOwners = 117,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalIgnoreType = 118,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalMediaType = 119,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalOwner = 120,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkInternalType = 121,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkParentChildren = 122,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkParentId = 123,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 124,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 125,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 126,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkWordCountParagraphs = 127,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkWordCountSentences = 128,
  ChildrenContentfulIconSvgTextNodeChildMarkdownRemarkWordCountWords = 129,
  ChildrenContentfulIconSvgTextNodeChildren = 130,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 131,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 132,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenChildren = 133,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildrenId = 134,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 135,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 136,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkFrontmatterTitle = 137,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 138,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsDepth = 139,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsId = 140,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadingsValue = 141,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 142,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 143,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 144,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContent = 145,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalContentDigest = 146,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalDescription = 147,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalFieldOwners = 148,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalIgnoreType = 149,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalMediaType = 150,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalOwner = 151,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkInternalType = 152,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkParentChildren = 153,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkParentId = 154,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 155,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 156,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 157,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountParagraphs = 158,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountSentences = 159,
  ChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkWordCountWords = 160,
  ChildrenContentfulIconSvgTextNodeChildrenChildren = 161,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenChildren = 162,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenId = 163,
  ChildrenContentfulIconSvgTextNodeChildrenId = 164,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContent = 165,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContentDigest = 166,
  ChildrenContentfulIconSvgTextNodeChildrenInternalDescription = 167,
  ChildrenContentfulIconSvgTextNodeChildrenInternalFieldOwners = 168,
  ChildrenContentfulIconSvgTextNodeChildrenInternalIgnoreType = 169,
  ChildrenContentfulIconSvgTextNodeChildrenInternalMediaType = 170,
  ChildrenContentfulIconSvgTextNodeChildrenInternalOwner = 171,
  ChildrenContentfulIconSvgTextNodeChildrenInternalType = 172,
  ChildrenContentfulIconSvgTextNodeChildrenParentChildren = 173,
  ChildrenContentfulIconSvgTextNodeChildrenParentId = 174,
  ChildrenContentfulIconSvgTextNodeId = 175,
  ChildrenContentfulIconSvgTextNodeInternalContent = 176,
  ChildrenContentfulIconSvgTextNodeInternalContentDigest = 177,
  ChildrenContentfulIconSvgTextNodeInternalDescription = 178,
  ChildrenContentfulIconSvgTextNodeInternalFieldOwners = 179,
  ChildrenContentfulIconSvgTextNodeInternalIgnoreType = 180,
  ChildrenContentfulIconSvgTextNodeInternalMediaType = 181,
  ChildrenContentfulIconSvgTextNodeInternalOwner = 182,
  ChildrenContentfulIconSvgTextNodeInternalType = 183,
  ChildrenContentfulIconSvgTextNodeParentChildren = 184,
  ChildrenContentfulIconSvgTextNodeParentChildrenChildren = 185,
  ChildrenContentfulIconSvgTextNodeParentChildrenId = 186,
  ChildrenContentfulIconSvgTextNodeParentId = 187,
  ChildrenContentfulIconSvgTextNodeParentInternalContent = 188,
  ChildrenContentfulIconSvgTextNodeParentInternalContentDigest = 189,
  ChildrenContentfulIconSvgTextNodeParentInternalDescription = 190,
  ChildrenContentfulIconSvgTextNodeParentInternalFieldOwners = 191,
  ChildrenContentfulIconSvgTextNodeParentInternalIgnoreType = 192,
  ChildrenContentfulIconSvgTextNodeParentInternalMediaType = 193,
  ChildrenContentfulIconSvgTextNodeParentInternalOwner = 194,
  ChildrenContentfulIconSvgTextNodeParentInternalType = 195,
  ChildrenContentfulIconSvgTextNodeParentParentChildren = 196,
  ChildrenContentfulIconSvgTextNodeParentParentId = 197,
  ChildrenContentfulIconSvgTextNodeSvg = 198,
  ChildrenContentfulIconSvgTextNodeSysType = 199,
  ChildrenChildren = 200,
  ChildrenChildrenChildren = 201,
  ChildrenChildrenChildrenChildren = 202,
  ChildrenChildrenChildrenId = 203,
  ChildrenChildrenId = 204,
  ChildrenChildrenInternalContent = 205,
  ChildrenChildrenInternalContentDigest = 206,
  ChildrenChildrenInternalDescription = 207,
  ChildrenChildrenInternalFieldOwners = 208,
  ChildrenChildrenInternalIgnoreType = 209,
  ChildrenChildrenInternalMediaType = 210,
  ChildrenChildrenInternalOwner = 211,
  ChildrenChildrenInternalType = 212,
  ChildrenChildrenParentChildren = 213,
  ChildrenChildrenParentId = 214,
  ChildrenId = 215,
  ChildrenInternalContent = 216,
  ChildrenInternalContentDigest = 217,
  ChildrenInternalDescription = 218,
  ChildrenInternalFieldOwners = 219,
  ChildrenInternalIgnoreType = 220,
  ChildrenInternalMediaType = 221,
  ChildrenInternalOwner = 222,
  ChildrenInternalType = 223,
  ChildrenParentChildren = 224,
  ChildrenParentChildrenChildren = 225,
  ChildrenParentChildrenId = 226,
  ChildrenParentId = 227,
  ChildrenParentInternalContent = 228,
  ChildrenParentInternalContentDigest = 229,
  ChildrenParentInternalDescription = 230,
  ChildrenParentInternalFieldOwners = 231,
  ChildrenParentInternalIgnoreType = 232,
  ChildrenParentInternalMediaType = 233,
  ChildrenParentInternalOwner = 234,
  ChildrenParentInternalType = 235,
  ChildrenParentParentChildren = 236,
  ChildrenParentParentId = 237,
  Contact = 238,
  ContactChildren = 239,
  ContactChildrenChildren = 240,
  ContactChildrenChildrenChildren = 241,
  ContactChildrenChildrenId = 242,
  ContactChildrenId = 243,
  ContactChildrenInternalContent = 244,
  ContactChildrenInternalContentDigest = 245,
  ContactChildrenInternalDescription = 246,
  ContactChildrenInternalFieldOwners = 247,
  ContactChildrenInternalIgnoreType = 248,
  ContactChildrenInternalMediaType = 249,
  ContactChildrenInternalOwner = 250,
  ContactChildrenInternalType = 251,
  ContactChildrenParentChildren = 252,
  ContactChildrenParentId = 253,
  ContactContentfulId = 254,
  ContactCreatedAt = 255,
  ContactHref = 256,
  ContactIconSvgDarkChildren = 257,
  ContactIconSvgDarkChildrenChildren = 258,
  ContactIconSvgDarkChildrenId = 259,
  ContactIconSvgDarkContentfulId = 260,
  ContactIconSvgDarkCreatedAt = 261,
  ContactIconSvgDarkDescription = 262,
  ContactIconSvgDarkFieldsLocalFile = 263,
  ContactIconSvgDarkFileContentType = 264,
  ContactIconSvgDarkFileFileName = 265,
  ContactIconSvgDarkFileUrl = 266,
  ContactIconSvgDarkGatsbyImageData = 267,
  ContactIconSvgDarkId = 268,
  ContactIconSvgDarkInternalContent = 269,
  ContactIconSvgDarkInternalContentDigest = 270,
  ContactIconSvgDarkInternalDescription = 271,
  ContactIconSvgDarkInternalFieldOwners = 272,
  ContactIconSvgDarkInternalIgnoreType = 273,
  ContactIconSvgDarkInternalMediaType = 274,
  ContactIconSvgDarkInternalOwner = 275,
  ContactIconSvgDarkInternalType = 276,
  ContactIconSvgDarkLocalFileAbsolutePath = 277,
  ContactIconSvgDarkLocalFileAccessTime = 278,
  ContactIconSvgDarkLocalFileAtime = 279,
  ContactIconSvgDarkLocalFileAtimeMs = 280,
  ContactIconSvgDarkLocalFileBase = 281,
  ContactIconSvgDarkLocalFileBirthTime = 282,
  ContactIconSvgDarkLocalFileBirthtime = 283,
  ContactIconSvgDarkLocalFileBirthtimeMs = 284,
  ContactIconSvgDarkLocalFileBlksize = 285,
  ContactIconSvgDarkLocalFileBlocks = 286,
  ContactIconSvgDarkLocalFileChangeTime = 287,
  ContactIconSvgDarkLocalFileChildren = 288,
  ContactIconSvgDarkLocalFileChildrenImageSharp = 289,
  ContactIconSvgDarkLocalFileChildrenLocale = 290,
  ContactIconSvgDarkLocalFileCtime = 291,
  ContactIconSvgDarkLocalFileCtimeMs = 292,
  ContactIconSvgDarkLocalFileDev = 293,
  ContactIconSvgDarkLocalFileDir = 294,
  ContactIconSvgDarkLocalFileExt = 295,
  ContactIconSvgDarkLocalFileExtension = 296,
  ContactIconSvgDarkLocalFileGid = 297,
  ContactIconSvgDarkLocalFileId = 298,
  ContactIconSvgDarkLocalFileIno = 299,
  ContactIconSvgDarkLocalFileMode = 300,
  ContactIconSvgDarkLocalFileModifiedTime = 301,
  ContactIconSvgDarkLocalFileMtime = 302,
  ContactIconSvgDarkLocalFileMtimeMs = 303,
  ContactIconSvgDarkLocalFileName = 304,
  ContactIconSvgDarkLocalFileNlink = 305,
  ContactIconSvgDarkLocalFilePrettySize = 306,
  ContactIconSvgDarkLocalFilePublicUrl = 307,
  ContactIconSvgDarkLocalFileRdev = 308,
  ContactIconSvgDarkLocalFileRelativeDirectory = 309,
  ContactIconSvgDarkLocalFileRelativePath = 310,
  ContactIconSvgDarkLocalFileRoot = 311,
  ContactIconSvgDarkLocalFileSize = 312,
  ContactIconSvgDarkLocalFileSourceInstanceName = 313,
  ContactIconSvgDarkLocalFileUid = 314,
  ContactIconSvgDarkLocalFileUrl = 315,
  ContactIconSvgDarkNodeLocale = 316,
  ContactIconSvgDarkParentChildren = 317,
  ContactIconSvgDarkParentId = 318,
  ContactIconSvgDarkSpaceId = 319,
  ContactIconSvgDarkSysRevision = 320,
  ContactIconSvgDarkSysType = 321,
  ContactIconSvgDarkTitle = 322,
  ContactIconSvgDarkUpdatedAt = 323,
  ContactIconSvgLightChildren = 324,
  ContactIconSvgLightChildrenChildren = 325,
  ContactIconSvgLightChildrenId = 326,
  ContactIconSvgLightContentfulId = 327,
  ContactIconSvgLightCreatedAt = 328,
  ContactIconSvgLightDescription = 329,
  ContactIconSvgLightFieldsLocalFile = 330,
  ContactIconSvgLightFileContentType = 331,
  ContactIconSvgLightFileFileName = 332,
  ContactIconSvgLightFileUrl = 333,
  ContactIconSvgLightGatsbyImageData = 334,
  ContactIconSvgLightId = 335,
  ContactIconSvgLightInternalContent = 336,
  ContactIconSvgLightInternalContentDigest = 337,
  ContactIconSvgLightInternalDescription = 338,
  ContactIconSvgLightInternalFieldOwners = 339,
  ContactIconSvgLightInternalIgnoreType = 340,
  ContactIconSvgLightInternalMediaType = 341,
  ContactIconSvgLightInternalOwner = 342,
  ContactIconSvgLightInternalType = 343,
  ContactIconSvgLightLocalFileAbsolutePath = 344,
  ContactIconSvgLightLocalFileAccessTime = 345,
  ContactIconSvgLightLocalFileAtime = 346,
  ContactIconSvgLightLocalFileAtimeMs = 347,
  ContactIconSvgLightLocalFileBase = 348,
  ContactIconSvgLightLocalFileBirthTime = 349,
  ContactIconSvgLightLocalFileBirthtime = 350,
  ContactIconSvgLightLocalFileBirthtimeMs = 351,
  ContactIconSvgLightLocalFileBlksize = 352,
  ContactIconSvgLightLocalFileBlocks = 353,
  ContactIconSvgLightLocalFileChangeTime = 354,
  ContactIconSvgLightLocalFileChildren = 355,
  ContactIconSvgLightLocalFileChildrenImageSharp = 356,
  ContactIconSvgLightLocalFileChildrenLocale = 357,
  ContactIconSvgLightLocalFileCtime = 358,
  ContactIconSvgLightLocalFileCtimeMs = 359,
  ContactIconSvgLightLocalFileDev = 360,
  ContactIconSvgLightLocalFileDir = 361,
  ContactIconSvgLightLocalFileExt = 362,
  ContactIconSvgLightLocalFileExtension = 363,
  ContactIconSvgLightLocalFileGid = 364,
  ContactIconSvgLightLocalFileId = 365,
  ContactIconSvgLightLocalFileIno = 366,
  ContactIconSvgLightLocalFileMode = 367,
  ContactIconSvgLightLocalFileModifiedTime = 368,
  ContactIconSvgLightLocalFileMtime = 369,
  ContactIconSvgLightLocalFileMtimeMs = 370,
  ContactIconSvgLightLocalFileName = 371,
  ContactIconSvgLightLocalFileNlink = 372,
  ContactIconSvgLightLocalFilePrettySize = 373,
  ContactIconSvgLightLocalFilePublicUrl = 374,
  ContactIconSvgLightLocalFileRdev = 375,
  ContactIconSvgLightLocalFileRelativeDirectory = 376,
  ContactIconSvgLightLocalFileRelativePath = 377,
  ContactIconSvgLightLocalFileRoot = 378,
  ContactIconSvgLightLocalFileSize = 379,
  ContactIconSvgLightLocalFileSourceInstanceName = 380,
  ContactIconSvgLightLocalFileUid = 381,
  ContactIconSvgLightLocalFileUrl = 382,
  ContactIconSvgLightNodeLocale = 383,
  ContactIconSvgLightParentChildren = 384,
  ContactIconSvgLightParentId = 385,
  ContactIconSvgLightSpaceId = 386,
  ContactIconSvgLightSysRevision = 387,
  ContactIconSvgLightSysType = 388,
  ContactIconSvgLightTitle = 389,
  ContactIconSvgLightUpdatedAt = 390,
  ContactIconChildContentfulIconSvgTextNodeChildren = 391,
  ContactIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 392,
  ContactIconChildContentfulIconSvgTextNodeId = 393,
  ContactIconChildContentfulIconSvgTextNodeSvg = 394,
  ContactIconChildren = 395,
  ContactIconChildrenContentfulIconSvgTextNode = 396,
  ContactIconChildrenContentfulIconSvgTextNodeChildren = 397,
  ContactIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 398,
  ContactIconChildrenContentfulIconSvgTextNodeId = 399,
  ContactIconChildrenContentfulIconSvgTextNodeSvg = 400,
  ContactIconChildrenChildren = 401,
  ContactIconChildrenId = 402,
  ContactIconContact = 403,
  ContactIconContactChildren = 404,
  ContactIconContactContentfulId = 405,
  ContactIconContactCreatedAt = 406,
  ContactIconContactHref = 407,
  ContactIconContactId = 408,
  ContactIconContactName = 409,
  ContactIconContactNodeLocale = 410,
  ContactIconContactSortKey = 411,
  ContactIconContactSpaceId = 412,
  ContactIconContactSubName = 413,
  ContactIconContactUpdatedAt = 414,
  ContactIconContentfulId = 415,
  ContactIconCreatedAt = 416,
  ContactIconHistory = 417,
  ContactIconHistoryChildren = 418,
  ContactIconHistoryContentfulId = 419,
  ContactIconHistoryCreatedAt = 420,
  ContactIconHistoryDate = 421,
  ContactIconHistoryId = 422,
  ContactIconHistoryName = 423,
  ContactIconHistoryNodeLocale = 424,
  ContactIconHistorySpaceId = 425,
  ContactIconHistorySubName = 426,
  ContactIconHistoryUpdatedAt = 427,
  ContactIconId = 428,
  ContactIconInternalContent = 429,
  ContactIconInternalContentDigest = 430,
  ContactIconInternalDescription = 431,
  ContactIconInternalFieldOwners = 432,
  ContactIconInternalIgnoreType = 433,
  ContactIconInternalMediaType = 434,
  ContactIconInternalOwner = 435,
  ContactIconInternalType = 436,
  ContactIconName = 437,
  ContactIconNodeLocale = 438,
  ContactIconOss = 439,
  ContactIconOssChildren = 440,
  ContactIconOssChildrenContentfulOssDetailTextNode = 441,
  ContactIconOssContentfulId = 442,
  ContactIconOssCreatedAt = 443,
  ContactIconOssHref = 444,
  ContactIconOssId = 445,
  ContactIconOssName = 446,
  ContactIconOssNodeLocale = 447,
  ContactIconOssSpaceId = 448,
  ContactIconOssStartDate = 449,
  ContactIconOssSubName = 450,
  ContactIconOssTags = 451,
  ContactIconOssUpdatedAt = 452,
  ContactIconParentChildren = 453,
  ContactIconParentId = 454,
  ContactIconProject = 455,
  ContactIconProjectChildren = 456,
  ContactIconProjectChildrenContentfulProjectDetailTextNode = 457,
  ContactIconProjectContentfulId = 458,
  ContactIconProjectCreatedAt = 459,
  ContactIconProjectEndDate = 460,
  ContactIconProjectId = 461,
  ContactIconProjectName = 462,
  ContactIconProjectNodeLocale = 463,
  ContactIconProjectSpaceId = 464,
  ContactIconProjectStartDate = 465,
  ContactIconProjectSubName = 466,
  ContactIconProjectTags = 467,
  ContactIconProjectUpdatedAt = 468,
  ContactIconSpaceId = 469,
  ContactIconSvgChildren = 470,
  ContactIconSvgChildrenMarkdownRemark = 471,
  ContactIconSvgId = 472,
  ContactIconSvgSvg = 473,
  ContactIconSysRevision = 474,
  ContactIconSysType = 475,
  ContactIconUpdatedAt = 476,
  ContactIconWhatICanDo = 477,
  ContactIconWhatICanDoChildren = 478,
  ContactIconWhatICanDoContentfulId = 479,
  ContactIconWhatICanDoCreatedAt = 480,
  ContactIconWhatICanDoId = 481,
  ContactIconWhatICanDoName = 482,
  ContactIconWhatICanDoNodeLocale = 483,
  ContactIconWhatICanDoSortKey = 484,
  ContactIconWhatICanDoSpaceId = 485,
  ContactIconWhatICanDoSubName = 486,
  ContactIconWhatICanDoUpdatedAt = 487,
  ContactId = 488,
  ContactInternalContent = 489,
  ContactInternalContentDigest = 490,
  ContactInternalDescription = 491,
  ContactInternalFieldOwners = 492,
  ContactInternalIgnoreType = 493,
  ContactInternalMediaType = 494,
  ContactInternalOwner = 495,
  ContactInternalType = 496,
  ContactName = 497,
  ContactNodeLocale = 498,
  ContactParentChildren = 499,
  ContactParentChildrenChildren = 500,
  ContactParentChildrenId = 501,
  ContactParentId = 502,
  ContactParentInternalContent = 503,
  ContactParentInternalContentDigest = 504,
  ContactParentInternalDescription = 505,
  ContactParentInternalFieldOwners = 506,
  ContactParentInternalIgnoreType = 507,
  ContactParentInternalMediaType = 508,
  ContactParentInternalOwner = 509,
  ContactParentInternalType = 510,
  ContactParentParentChildren = 511,
  ContactParentParentId = 512,
  ContactSortKey = 513,
  ContactSpaceId = 514,
  ContactSubName = 515,
  ContactSysRevision = 516,
  ContactSysType = 517,
  ContactUpdatedAt = 518,
  ContentfulId = 519,
  CreatedAt = 520,
  History = 521,
  HistoryChildren = 522,
  HistoryChildrenChildren = 523,
  HistoryChildrenChildrenChildren = 524,
  HistoryChildrenChildrenId = 525,
  HistoryChildrenId = 526,
  HistoryChildrenInternalContent = 527,
  HistoryChildrenInternalContentDigest = 528,
  HistoryChildrenInternalDescription = 529,
  HistoryChildrenInternalFieldOwners = 530,
  HistoryChildrenInternalIgnoreType = 531,
  HistoryChildrenInternalMediaType = 532,
  HistoryChildrenInternalOwner = 533,
  HistoryChildrenInternalType = 534,
  HistoryChildrenParentChildren = 535,
  HistoryChildrenParentId = 536,
  HistoryContentfulId = 537,
  HistoryCreatedAt = 538,
  HistoryDate = 539,
  HistoryIconChildContentfulIconSvgTextNodeChildren = 540,
  HistoryIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 541,
  HistoryIconChildContentfulIconSvgTextNodeId = 542,
  HistoryIconChildContentfulIconSvgTextNodeSvg = 543,
  HistoryIconChildren = 544,
  HistoryIconChildrenContentfulIconSvgTextNode = 545,
  HistoryIconChildrenContentfulIconSvgTextNodeChildren = 546,
  HistoryIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 547,
  HistoryIconChildrenContentfulIconSvgTextNodeId = 548,
  HistoryIconChildrenContentfulIconSvgTextNodeSvg = 549,
  HistoryIconChildrenChildren = 550,
  HistoryIconChildrenId = 551,
  HistoryIconContact = 552,
  HistoryIconContactChildren = 553,
  HistoryIconContactContentfulId = 554,
  HistoryIconContactCreatedAt = 555,
  HistoryIconContactHref = 556,
  HistoryIconContactId = 557,
  HistoryIconContactName = 558,
  HistoryIconContactNodeLocale = 559,
  HistoryIconContactSortKey = 560,
  HistoryIconContactSpaceId = 561,
  HistoryIconContactSubName = 562,
  HistoryIconContactUpdatedAt = 563,
  HistoryIconContentfulId = 564,
  HistoryIconCreatedAt = 565,
  HistoryIconHistory = 566,
  HistoryIconHistoryChildren = 567,
  HistoryIconHistoryContentfulId = 568,
  HistoryIconHistoryCreatedAt = 569,
  HistoryIconHistoryDate = 570,
  HistoryIconHistoryId = 571,
  HistoryIconHistoryName = 572,
  HistoryIconHistoryNodeLocale = 573,
  HistoryIconHistorySpaceId = 574,
  HistoryIconHistorySubName = 575,
  HistoryIconHistoryUpdatedAt = 576,
  HistoryIconId = 577,
  HistoryIconInternalContent = 578,
  HistoryIconInternalContentDigest = 579,
  HistoryIconInternalDescription = 580,
  HistoryIconInternalFieldOwners = 581,
  HistoryIconInternalIgnoreType = 582,
  HistoryIconInternalMediaType = 583,
  HistoryIconInternalOwner = 584,
  HistoryIconInternalType = 585,
  HistoryIconName = 586,
  HistoryIconNodeLocale = 587,
  HistoryIconOss = 588,
  HistoryIconOssChildren = 589,
  HistoryIconOssChildrenContentfulOssDetailTextNode = 590,
  HistoryIconOssContentfulId = 591,
  HistoryIconOssCreatedAt = 592,
  HistoryIconOssHref = 593,
  HistoryIconOssId = 594,
  HistoryIconOssName = 595,
  HistoryIconOssNodeLocale = 596,
  HistoryIconOssSpaceId = 597,
  HistoryIconOssStartDate = 598,
  HistoryIconOssSubName = 599,
  HistoryIconOssTags = 600,
  HistoryIconOssUpdatedAt = 601,
  HistoryIconParentChildren = 602,
  HistoryIconParentId = 603,
  HistoryIconProject = 604,
  HistoryIconProjectChildren = 605,
  HistoryIconProjectChildrenContentfulProjectDetailTextNode = 606,
  HistoryIconProjectContentfulId = 607,
  HistoryIconProjectCreatedAt = 608,
  HistoryIconProjectEndDate = 609,
  HistoryIconProjectId = 610,
  HistoryIconProjectName = 611,
  HistoryIconProjectNodeLocale = 612,
  HistoryIconProjectSpaceId = 613,
  HistoryIconProjectStartDate = 614,
  HistoryIconProjectSubName = 615,
  HistoryIconProjectTags = 616,
  HistoryIconProjectUpdatedAt = 617,
  HistoryIconSpaceId = 618,
  HistoryIconSvgChildren = 619,
  HistoryIconSvgChildrenMarkdownRemark = 620,
  HistoryIconSvgId = 621,
  HistoryIconSvgSvg = 622,
  HistoryIconSysRevision = 623,
  HistoryIconSysType = 624,
  HistoryIconUpdatedAt = 625,
  HistoryIconWhatICanDo = 626,
  HistoryIconWhatICanDoChildren = 627,
  HistoryIconWhatICanDoContentfulId = 628,
  HistoryIconWhatICanDoCreatedAt = 629,
  HistoryIconWhatICanDoId = 630,
  HistoryIconWhatICanDoName = 631,
  HistoryIconWhatICanDoNodeLocale = 632,
  HistoryIconWhatICanDoSortKey = 633,
  HistoryIconWhatICanDoSpaceId = 634,
  HistoryIconWhatICanDoSubName = 635,
  HistoryIconWhatICanDoUpdatedAt = 636,
  HistoryId = 637,
  HistoryInternalContent = 638,
  HistoryInternalContentDigest = 639,
  HistoryInternalDescription = 640,
  HistoryInternalFieldOwners = 641,
  HistoryInternalIgnoreType = 642,
  HistoryInternalMediaType = 643,
  HistoryInternalOwner = 644,
  HistoryInternalType = 645,
  HistoryName = 646,
  HistoryNodeLocale = 647,
  HistoryParentChildren = 648,
  HistoryParentChildrenChildren = 649,
  HistoryParentChildrenId = 650,
  HistoryParentId = 651,
  HistoryParentInternalContent = 652,
  HistoryParentInternalContentDigest = 653,
  HistoryParentInternalDescription = 654,
  HistoryParentInternalFieldOwners = 655,
  HistoryParentInternalIgnoreType = 656,
  HistoryParentInternalMediaType = 657,
  HistoryParentInternalOwner = 658,
  HistoryParentInternalType = 659,
  HistoryParentParentChildren = 660,
  HistoryParentParentId = 661,
  HistorySpaceId = 662,
  HistorySubName = 663,
  HistorySysRevision = 664,
  HistorySysType = 665,
  HistoryUpdatedAt = 666,
  Id = 667,
  InternalContent = 668,
  InternalContentDigest = 669,
  InternalDescription = 670,
  InternalFieldOwners = 671,
  InternalIgnoreType = 672,
  InternalMediaType = 673,
  InternalOwner = 674,
  InternalType = 675,
  Name = 676,
  NodeLocale = 677,
  Oss = 678,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 679,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 680,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 681,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 682,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 683,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 684,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkId = 685,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 686,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 687,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 688,
  OssChildContentfulOssDetailTextNodeChildren = 689,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 690,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 691,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 692,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 693,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 694,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 695,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 696,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 697,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 698,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 699,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 700,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 701,
  OssChildContentfulOssDetailTextNodeChildrenId = 702,
  OssChildContentfulOssDetailTextNodeDetail = 703,
  OssChildContentfulOssDetailTextNodeId = 704,
  OssChildContentfulOssDetailTextNodeInternalContent = 705,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 706,
  OssChildContentfulOssDetailTextNodeInternalDescription = 707,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 708,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 709,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 710,
  OssChildContentfulOssDetailTextNodeInternalOwner = 711,
  OssChildContentfulOssDetailTextNodeInternalType = 712,
  OssChildContentfulOssDetailTextNodeParentChildren = 713,
  OssChildContentfulOssDetailTextNodeParentId = 714,
  OssChildContentfulOssDetailTextNodeSysType = 715,
  OssChildren = 716,
  OssChildrenContentfulOssDetailTextNode = 717,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 718,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 719,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 720,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 721,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 722,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 723,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkId = 724,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 725,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 726,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 727,
  OssChildrenContentfulOssDetailTextNodeChildren = 728,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 729,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 730,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 731,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 732,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 733,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 734,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 735,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 736,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 737,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 738,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 739,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 740,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 741,
  OssChildrenContentfulOssDetailTextNodeDetail = 742,
  OssChildrenContentfulOssDetailTextNodeId = 743,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 744,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 745,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 746,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 747,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 748,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 749,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 750,
  OssChildrenContentfulOssDetailTextNodeInternalType = 751,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 752,
  OssChildrenContentfulOssDetailTextNodeParentId = 753,
  OssChildrenContentfulOssDetailTextNodeSysType = 754,
  OssChildrenChildren = 755,
  OssChildrenChildrenChildren = 756,
  OssChildrenChildrenId = 757,
  OssChildrenId = 758,
  OssChildrenInternalContent = 759,
  OssChildrenInternalContentDigest = 760,
  OssChildrenInternalDescription = 761,
  OssChildrenInternalFieldOwners = 762,
  OssChildrenInternalIgnoreType = 763,
  OssChildrenInternalMediaType = 764,
  OssChildrenInternalOwner = 765,
  OssChildrenInternalType = 766,
  OssChildrenParentChildren = 767,
  OssChildrenParentId = 768,
  OssContentfulId = 769,
  OssCreatedAt = 770,
  OssDetailChildMarkdownRemarkChildren = 771,
  OssDetailChildMarkdownRemarkExcerpt = 772,
  OssDetailChildMarkdownRemarkExcerptAst = 773,
  OssDetailChildMarkdownRemarkHeadings = 774,
  OssDetailChildMarkdownRemarkHtml = 775,
  OssDetailChildMarkdownRemarkHtmlAst = 776,
  OssDetailChildMarkdownRemarkId = 777,
  OssDetailChildMarkdownRemarkRawMarkdownBody = 778,
  OssDetailChildMarkdownRemarkTableOfContents = 779,
  OssDetailChildMarkdownRemarkTimeToRead = 780,
  OssDetailChildren = 781,
  OssDetailChildrenMarkdownRemark = 782,
  OssDetailChildrenMarkdownRemarkChildren = 783,
  OssDetailChildrenMarkdownRemarkExcerpt = 784,
  OssDetailChildrenMarkdownRemarkExcerptAst = 785,
  OssDetailChildrenMarkdownRemarkHeadings = 786,
  OssDetailChildrenMarkdownRemarkHtml = 787,
  OssDetailChildrenMarkdownRemarkHtmlAst = 788,
  OssDetailChildrenMarkdownRemarkId = 789,
  OssDetailChildrenMarkdownRemarkRawMarkdownBody = 790,
  OssDetailChildrenMarkdownRemarkTableOfContents = 791,
  OssDetailChildrenMarkdownRemarkTimeToRead = 792,
  OssDetailChildrenChildren = 793,
  OssDetailChildrenId = 794,
  OssDetailDetail = 795,
  OssDetailId = 796,
  OssDetailInternalContent = 797,
  OssDetailInternalContentDigest = 798,
  OssDetailInternalDescription = 799,
  OssDetailInternalFieldOwners = 800,
  OssDetailInternalIgnoreType = 801,
  OssDetailInternalMediaType = 802,
  OssDetailInternalOwner = 803,
  OssDetailInternalType = 804,
  OssDetailParentChildren = 805,
  OssDetailParentId = 806,
  OssDetailSysType = 807,
  OssHref = 808,
  OssIconChildContentfulIconSvgTextNodeChildren = 809,
  OssIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 810,
  OssIconChildContentfulIconSvgTextNodeId = 811,
  OssIconChildContentfulIconSvgTextNodeSvg = 812,
  OssIconChildren = 813,
  OssIconChildrenContentfulIconSvgTextNode = 814,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 815,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 816,
  OssIconChildrenContentfulIconSvgTextNodeId = 817,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 818,
  OssIconChildrenChildren = 819,
  OssIconChildrenId = 820,
  OssIconContact = 821,
  OssIconContactChildren = 822,
  OssIconContactContentfulId = 823,
  OssIconContactCreatedAt = 824,
  OssIconContactHref = 825,
  OssIconContactId = 826,
  OssIconContactName = 827,
  OssIconContactNodeLocale = 828,
  OssIconContactSortKey = 829,
  OssIconContactSpaceId = 830,
  OssIconContactSubName = 831,
  OssIconContactUpdatedAt = 832,
  OssIconContentfulId = 833,
  OssIconCreatedAt = 834,
  OssIconHistory = 835,
  OssIconHistoryChildren = 836,
  OssIconHistoryContentfulId = 837,
  OssIconHistoryCreatedAt = 838,
  OssIconHistoryDate = 839,
  OssIconHistoryId = 840,
  OssIconHistoryName = 841,
  OssIconHistoryNodeLocale = 842,
  OssIconHistorySpaceId = 843,
  OssIconHistorySubName = 844,
  OssIconHistoryUpdatedAt = 845,
  OssIconId = 846,
  OssIconInternalContent = 847,
  OssIconInternalContentDigest = 848,
  OssIconInternalDescription = 849,
  OssIconInternalFieldOwners = 850,
  OssIconInternalIgnoreType = 851,
  OssIconInternalMediaType = 852,
  OssIconInternalOwner = 853,
  OssIconInternalType = 854,
  OssIconName = 855,
  OssIconNodeLocale = 856,
  OssIconOss = 857,
  OssIconOssChildren = 858,
  OssIconOssChildrenContentfulOssDetailTextNode = 859,
  OssIconOssContentfulId = 860,
  OssIconOssCreatedAt = 861,
  OssIconOssHref = 862,
  OssIconOssId = 863,
  OssIconOssName = 864,
  OssIconOssNodeLocale = 865,
  OssIconOssSpaceId = 866,
  OssIconOssStartDate = 867,
  OssIconOssSubName = 868,
  OssIconOssTags = 869,
  OssIconOssUpdatedAt = 870,
  OssIconParentChildren = 871,
  OssIconParentId = 872,
  OssIconProject = 873,
  OssIconProjectChildren = 874,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 875,
  OssIconProjectContentfulId = 876,
  OssIconProjectCreatedAt = 877,
  OssIconProjectEndDate = 878,
  OssIconProjectId = 879,
  OssIconProjectName = 880,
  OssIconProjectNodeLocale = 881,
  OssIconProjectSpaceId = 882,
  OssIconProjectStartDate = 883,
  OssIconProjectSubName = 884,
  OssIconProjectTags = 885,
  OssIconProjectUpdatedAt = 886,
  OssIconSpaceId = 887,
  OssIconSvgChildren = 888,
  OssIconSvgChildrenMarkdownRemark = 889,
  OssIconSvgId = 890,
  OssIconSvgSvg = 891,
  OssIconSysRevision = 892,
  OssIconSysType = 893,
  OssIconUpdatedAt = 894,
  OssIconWhatICanDo = 895,
  OssIconWhatICanDoChildren = 896,
  OssIconWhatICanDoContentfulId = 897,
  OssIconWhatICanDoCreatedAt = 898,
  OssIconWhatICanDoId = 899,
  OssIconWhatICanDoName = 900,
  OssIconWhatICanDoNodeLocale = 901,
  OssIconWhatICanDoSortKey = 902,
  OssIconWhatICanDoSpaceId = 903,
  OssIconWhatICanDoSubName = 904,
  OssIconWhatICanDoUpdatedAt = 905,
  OssId = 906,
  OssImageChildren = 907,
  OssImageChildrenChildren = 908,
  OssImageChildrenId = 909,
  OssImageContentfulId = 910,
  OssImageCreatedAt = 911,
  OssImageDescription = 912,
  OssImageFieldsLocalFile = 913,
  OssImageFileContentType = 914,
  OssImageFileFileName = 915,
  OssImageFileUrl = 916,
  OssImageGatsbyImageData = 917,
  OssImageId = 918,
  OssImageInternalContent = 919,
  OssImageInternalContentDigest = 920,
  OssImageInternalDescription = 921,
  OssImageInternalFieldOwners = 922,
  OssImageInternalIgnoreType = 923,
  OssImageInternalMediaType = 924,
  OssImageInternalOwner = 925,
  OssImageInternalType = 926,
  OssImageLocalFileAbsolutePath = 927,
  OssImageLocalFileAccessTime = 928,
  OssImageLocalFileAtime = 929,
  OssImageLocalFileAtimeMs = 930,
  OssImageLocalFileBase = 931,
  OssImageLocalFileBirthTime = 932,
  OssImageLocalFileBirthtime = 933,
  OssImageLocalFileBirthtimeMs = 934,
  OssImageLocalFileBlksize = 935,
  OssImageLocalFileBlocks = 936,
  OssImageLocalFileChangeTime = 937,
  OssImageLocalFileChildren = 938,
  OssImageLocalFileChildrenImageSharp = 939,
  OssImageLocalFileChildrenLocale = 940,
  OssImageLocalFileCtime = 941,
  OssImageLocalFileCtimeMs = 942,
  OssImageLocalFileDev = 943,
  OssImageLocalFileDir = 944,
  OssImageLocalFileExt = 945,
  OssImageLocalFileExtension = 946,
  OssImageLocalFileGid = 947,
  OssImageLocalFileId = 948,
  OssImageLocalFileIno = 949,
  OssImageLocalFileMode = 950,
  OssImageLocalFileModifiedTime = 951,
  OssImageLocalFileMtime = 952,
  OssImageLocalFileMtimeMs = 953,
  OssImageLocalFileName = 954,
  OssImageLocalFileNlink = 955,
  OssImageLocalFilePrettySize = 956,
  OssImageLocalFilePublicUrl = 957,
  OssImageLocalFileRdev = 958,
  OssImageLocalFileRelativeDirectory = 959,
  OssImageLocalFileRelativePath = 960,
  OssImageLocalFileRoot = 961,
  OssImageLocalFileSize = 962,
  OssImageLocalFileSourceInstanceName = 963,
  OssImageLocalFileUid = 964,
  OssImageLocalFileUrl = 965,
  OssImageNodeLocale = 966,
  OssImageParentChildren = 967,
  OssImageParentId = 968,
  OssImageSpaceId = 969,
  OssImageSysRevision = 970,
  OssImageSysType = 971,
  OssImageTitle = 972,
  OssImageUpdatedAt = 973,
  OssInternalContent = 974,
  OssInternalContentDigest = 975,
  OssInternalDescription = 976,
  OssInternalFieldOwners = 977,
  OssInternalIgnoreType = 978,
  OssInternalMediaType = 979,
  OssInternalOwner = 980,
  OssInternalType = 981,
  OssName = 982,
  OssNodeLocale = 983,
  OssParentChildren = 984,
  OssParentChildrenChildren = 985,
  OssParentChildrenId = 986,
  OssParentId = 987,
  OssParentInternalContent = 988,
  OssParentInternalContentDigest = 989,
  OssParentInternalDescription = 990,
  OssParentInternalFieldOwners = 991,
  OssParentInternalIgnoreType = 992,
  OssParentInternalMediaType = 993,
  OssParentInternalOwner = 994,
  OssParentInternalType = 995,
  OssParentParentChildren = 996,
  OssParentParentId = 997,
  OssSpaceId = 998,
  OssStartDate = 999,
  OssSubName = 1000,
  OssSysRevision = 1001,
  OssSysType = 1002,
  OssTags = 1003,
  OssTagsBlogPost = 1004,
  OssTagsBlogPostChildren = 1005,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1006,
  OssTagsBlogPostContentfulId = 1007,
  OssTagsBlogPostCreated = 1008,
  OssTagsBlogPostCreatedAt = 1009,
  OssTagsBlogPostExcerpt = 1010,
  OssTagsBlogPostId = 1011,
  OssTagsBlogPostNodeLocale = 1012,
  OssTagsBlogPostSlug = 1013,
  OssTagsBlogPostSpaceId = 1014,
  OssTagsBlogPostTags = 1015,
  OssTagsBlogPostTitle = 1016,
  OssTagsBlogPostUpdated = 1017,
  OssTagsBlogPostUpdatedAt = 1018,
  OssTagsChildren = 1019,
  OssTagsChildrenChildren = 1020,
  OssTagsChildrenId = 1021,
  OssTagsContentfulId = 1022,
  OssTagsCreatedAt = 1023,
  OssTagsId = 1024,
  OssTagsInternalContent = 1025,
  OssTagsInternalContentDigest = 1026,
  OssTagsInternalDescription = 1027,
  OssTagsInternalFieldOwners = 1028,
  OssTagsInternalIgnoreType = 1029,
  OssTagsInternalMediaType = 1030,
  OssTagsInternalOwner = 1031,
  OssTagsInternalType = 1032,
  OssTagsLevel = 1033,
  OssTagsName = 1034,
  OssTagsNodeLocale = 1035,
  OssTagsOss = 1036,
  OssTagsOssChildren = 1037,
  OssTagsOssChildrenContentfulOssDetailTextNode = 1038,
  OssTagsOssContentfulId = 1039,
  OssTagsOssCreatedAt = 1040,
  OssTagsOssHref = 1041,
  OssTagsOssId = 1042,
  OssTagsOssName = 1043,
  OssTagsOssNodeLocale = 1044,
  OssTagsOssSpaceId = 1045,
  OssTagsOssStartDate = 1046,
  OssTagsOssSubName = 1047,
  OssTagsOssTags = 1048,
  OssTagsOssUpdatedAt = 1049,
  OssTagsParentChildren = 1050,
  OssTagsParentId = 1051,
  OssTagsProject = 1052,
  OssTagsProjectChildren = 1053,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 1054,
  OssTagsProjectContentfulId = 1055,
  OssTagsProjectCreatedAt = 1056,
  OssTagsProjectEndDate = 1057,
  OssTagsProjectId = 1058,
  OssTagsProjectName = 1059,
  OssTagsProjectNodeLocale = 1060,
  OssTagsProjectSpaceId = 1061,
  OssTagsProjectStartDate = 1062,
  OssTagsProjectSubName = 1063,
  OssTagsProjectTags = 1064,
  OssTagsProjectUpdatedAt = 1065,
  OssTagsSkillMap = 1066,
  OssTagsSkillMapChildren = 1067,
  OssTagsSkillMapContentfulId = 1068,
  OssTagsSkillMapCreatedAt = 1069,
  OssTagsSkillMapExpanded = 1070,
  OssTagsSkillMapId = 1071,
  OssTagsSkillMapName = 1072,
  OssTagsSkillMapNodeLocale = 1073,
  OssTagsSkillMapSkills = 1074,
  OssTagsSkillMapSortKey = 1075,
  OssTagsSkillMapSpaceId = 1076,
  OssTagsSkillMapUpdatedAt = 1077,
  OssTagsSpaceId = 1078,
  OssTagsSysRevision = 1079,
  OssTagsSysType = 1080,
  OssTagsUpdatedAt = 1081,
  OssUpdatedAt = 1082,
  ParentChildren = 1083,
  ParentChildrenChildren = 1084,
  ParentChildrenChildrenChildren = 1085,
  ParentChildrenChildrenId = 1086,
  ParentChildrenId = 1087,
  ParentChildrenInternalContent = 1088,
  ParentChildrenInternalContentDigest = 1089,
  ParentChildrenInternalDescription = 1090,
  ParentChildrenInternalFieldOwners = 1091,
  ParentChildrenInternalIgnoreType = 1092,
  ParentChildrenInternalMediaType = 1093,
  ParentChildrenInternalOwner = 1094,
  ParentChildrenInternalType = 1095,
  ParentChildrenParentChildren = 1096,
  ParentChildrenParentId = 1097,
  ParentId = 1098,
  ParentInternalContent = 1099,
  ParentInternalContentDigest = 1100,
  ParentInternalDescription = 1101,
  ParentInternalFieldOwners = 1102,
  ParentInternalIgnoreType = 1103,
  ParentInternalMediaType = 1104,
  ParentInternalOwner = 1105,
  ParentInternalType = 1106,
  ParentParentChildren = 1107,
  ParentParentChildrenChildren = 1108,
  ParentParentChildrenId = 1109,
  ParentParentId = 1110,
  ParentParentInternalContent = 1111,
  ParentParentInternalContentDigest = 1112,
  ParentParentInternalDescription = 1113,
  ParentParentInternalFieldOwners = 1114,
  ParentParentInternalIgnoreType = 1115,
  ParentParentInternalMediaType = 1116,
  ParentParentInternalOwner = 1117,
  ParentParentInternalType = 1118,
  ParentParentParentChildren = 1119,
  ParentParentParentId = 1120,
  Project = 1121,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 1122,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 1123,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 1124,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 1125,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 1126,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 1127,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkId = 1128,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 1129,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 1130,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 1131,
  ProjectChildContentfulProjectDetailTextNodeChildren = 1132,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1133,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 1134,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 1135,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 1136,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 1137,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 1138,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 1139,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 1140,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 1141,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 1142,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 1143,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 1144,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 1145,
  ProjectChildContentfulProjectDetailTextNodeDetail = 1146,
  ProjectChildContentfulProjectDetailTextNodeId = 1147,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 1148,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 1149,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 1150,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 1151,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 1152,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 1153,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 1154,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 1155,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 1156,
  ProjectChildContentfulProjectDetailTextNodeParentId = 1157,
  ProjectChildContentfulProjectDetailTextNodeSysType = 1158,
  ProjectChildren = 1159,
  ProjectChildrenContentfulProjectDetailTextNode = 1160,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 1161,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 1162,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 1163,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 1164,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 1165,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 1166,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkId = 1167,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 1168,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 1169,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 1170,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 1171,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1172,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 1173,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 1174,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 1175,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 1176,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 1177,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 1178,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 1179,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 1180,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 1181,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 1182,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 1183,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 1184,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 1185,
  ProjectChildrenContentfulProjectDetailTextNodeId = 1186,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 1187,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 1188,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 1189,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 1190,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 1191,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 1192,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 1193,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 1194,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 1195,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 1196,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 1197,
  ProjectChildrenChildren = 1198,
  ProjectChildrenChildrenChildren = 1199,
  ProjectChildrenChildrenId = 1200,
  ProjectChildrenId = 1201,
  ProjectChildrenInternalContent = 1202,
  ProjectChildrenInternalContentDigest = 1203,
  ProjectChildrenInternalDescription = 1204,
  ProjectChildrenInternalFieldOwners = 1205,
  ProjectChildrenInternalIgnoreType = 1206,
  ProjectChildrenInternalMediaType = 1207,
  ProjectChildrenInternalOwner = 1208,
  ProjectChildrenInternalType = 1209,
  ProjectChildrenParentChildren = 1210,
  ProjectChildrenParentId = 1211,
  ProjectContentfulId = 1212,
  ProjectCreatedAt = 1213,
  ProjectDetailChildMarkdownRemarkChildren = 1214,
  ProjectDetailChildMarkdownRemarkExcerpt = 1215,
  ProjectDetailChildMarkdownRemarkExcerptAst = 1216,
  ProjectDetailChildMarkdownRemarkHeadings = 1217,
  ProjectDetailChildMarkdownRemarkHtml = 1218,
  ProjectDetailChildMarkdownRemarkHtmlAst = 1219,
  ProjectDetailChildMarkdownRemarkId = 1220,
  ProjectDetailChildMarkdownRemarkRawMarkdownBody = 1221,
  ProjectDetailChildMarkdownRemarkTableOfContents = 1222,
  ProjectDetailChildMarkdownRemarkTimeToRead = 1223,
  ProjectDetailChildren = 1224,
  ProjectDetailChildrenMarkdownRemark = 1225,
  ProjectDetailChildrenMarkdownRemarkChildren = 1226,
  ProjectDetailChildrenMarkdownRemarkExcerpt = 1227,
  ProjectDetailChildrenMarkdownRemarkExcerptAst = 1228,
  ProjectDetailChildrenMarkdownRemarkHeadings = 1229,
  ProjectDetailChildrenMarkdownRemarkHtml = 1230,
  ProjectDetailChildrenMarkdownRemarkHtmlAst = 1231,
  ProjectDetailChildrenMarkdownRemarkId = 1232,
  ProjectDetailChildrenMarkdownRemarkRawMarkdownBody = 1233,
  ProjectDetailChildrenMarkdownRemarkTableOfContents = 1234,
  ProjectDetailChildrenMarkdownRemarkTimeToRead = 1235,
  ProjectDetailChildrenChildren = 1236,
  ProjectDetailChildrenId = 1237,
  ProjectDetailDetail = 1238,
  ProjectDetailId = 1239,
  ProjectDetailInternalContent = 1240,
  ProjectDetailInternalContentDigest = 1241,
  ProjectDetailInternalDescription = 1242,
  ProjectDetailInternalFieldOwners = 1243,
  ProjectDetailInternalIgnoreType = 1244,
  ProjectDetailInternalMediaType = 1245,
  ProjectDetailInternalOwner = 1246,
  ProjectDetailInternalType = 1247,
  ProjectDetailParentChildren = 1248,
  ProjectDetailParentId = 1249,
  ProjectDetailSysType = 1250,
  ProjectEndDate = 1251,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1252,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 1253,
  ProjectIconChildContentfulIconSvgTextNodeId = 1254,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1255,
  ProjectIconChildren = 1256,
  ProjectIconChildrenContentfulIconSvgTextNode = 1257,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1258,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 1259,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1260,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1261,
  ProjectIconChildrenChildren = 1262,
  ProjectIconChildrenId = 1263,
  ProjectIconContact = 1264,
  ProjectIconContactChildren = 1265,
  ProjectIconContactContentfulId = 1266,
  ProjectIconContactCreatedAt = 1267,
  ProjectIconContactHref = 1268,
  ProjectIconContactId = 1269,
  ProjectIconContactName = 1270,
  ProjectIconContactNodeLocale = 1271,
  ProjectIconContactSortKey = 1272,
  ProjectIconContactSpaceId = 1273,
  ProjectIconContactSubName = 1274,
  ProjectIconContactUpdatedAt = 1275,
  ProjectIconContentfulId = 1276,
  ProjectIconCreatedAt = 1277,
  ProjectIconHistory = 1278,
  ProjectIconHistoryChildren = 1279,
  ProjectIconHistoryContentfulId = 1280,
  ProjectIconHistoryCreatedAt = 1281,
  ProjectIconHistoryDate = 1282,
  ProjectIconHistoryId = 1283,
  ProjectIconHistoryName = 1284,
  ProjectIconHistoryNodeLocale = 1285,
  ProjectIconHistorySpaceId = 1286,
  ProjectIconHistorySubName = 1287,
  ProjectIconHistoryUpdatedAt = 1288,
  ProjectIconId = 1289,
  ProjectIconInternalContent = 1290,
  ProjectIconInternalContentDigest = 1291,
  ProjectIconInternalDescription = 1292,
  ProjectIconInternalFieldOwners = 1293,
  ProjectIconInternalIgnoreType = 1294,
  ProjectIconInternalMediaType = 1295,
  ProjectIconInternalOwner = 1296,
  ProjectIconInternalType = 1297,
  ProjectIconName = 1298,
  ProjectIconNodeLocale = 1299,
  ProjectIconOss = 1300,
  ProjectIconOssChildren = 1301,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1302,
  ProjectIconOssContentfulId = 1303,
  ProjectIconOssCreatedAt = 1304,
  ProjectIconOssHref = 1305,
  ProjectIconOssId = 1306,
  ProjectIconOssName = 1307,
  ProjectIconOssNodeLocale = 1308,
  ProjectIconOssSpaceId = 1309,
  ProjectIconOssStartDate = 1310,
  ProjectIconOssSubName = 1311,
  ProjectIconOssTags = 1312,
  ProjectIconOssUpdatedAt = 1313,
  ProjectIconParentChildren = 1314,
  ProjectIconParentId = 1315,
  ProjectIconProject = 1316,
  ProjectIconProjectChildren = 1317,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1318,
  ProjectIconProjectContentfulId = 1319,
  ProjectIconProjectCreatedAt = 1320,
  ProjectIconProjectEndDate = 1321,
  ProjectIconProjectId = 1322,
  ProjectIconProjectName = 1323,
  ProjectIconProjectNodeLocale = 1324,
  ProjectIconProjectSpaceId = 1325,
  ProjectIconProjectStartDate = 1326,
  ProjectIconProjectSubName = 1327,
  ProjectIconProjectTags = 1328,
  ProjectIconProjectUpdatedAt = 1329,
  ProjectIconSpaceId = 1330,
  ProjectIconSvgChildren = 1331,
  ProjectIconSvgChildrenMarkdownRemark = 1332,
  ProjectIconSvgId = 1333,
  ProjectIconSvgSvg = 1334,
  ProjectIconSysRevision = 1335,
  ProjectIconSysType = 1336,
  ProjectIconUpdatedAt = 1337,
  ProjectIconWhatICanDo = 1338,
  ProjectIconWhatICanDoChildren = 1339,
  ProjectIconWhatICanDoContentfulId = 1340,
  ProjectIconWhatICanDoCreatedAt = 1341,
  ProjectIconWhatICanDoId = 1342,
  ProjectIconWhatICanDoName = 1343,
  ProjectIconWhatICanDoNodeLocale = 1344,
  ProjectIconWhatICanDoSortKey = 1345,
  ProjectIconWhatICanDoSpaceId = 1346,
  ProjectIconWhatICanDoSubName = 1347,
  ProjectIconWhatICanDoUpdatedAt = 1348,
  ProjectId = 1349,
  ProjectInternalContent = 1350,
  ProjectInternalContentDigest = 1351,
  ProjectInternalDescription = 1352,
  ProjectInternalFieldOwners = 1353,
  ProjectInternalIgnoreType = 1354,
  ProjectInternalMediaType = 1355,
  ProjectInternalOwner = 1356,
  ProjectInternalType = 1357,
  ProjectName = 1358,
  ProjectNodeLocale = 1359,
  ProjectParentChildren = 1360,
  ProjectParentChildrenChildren = 1361,
  ProjectParentChildrenId = 1362,
  ProjectParentId = 1363,
  ProjectParentInternalContent = 1364,
  ProjectParentInternalContentDigest = 1365,
  ProjectParentInternalDescription = 1366,
  ProjectParentInternalFieldOwners = 1367,
  ProjectParentInternalIgnoreType = 1368,
  ProjectParentInternalMediaType = 1369,
  ProjectParentInternalOwner = 1370,
  ProjectParentInternalType = 1371,
  ProjectParentParentChildren = 1372,
  ProjectParentParentId = 1373,
  ProjectSpaceId = 1374,
  ProjectStartDate = 1375,
  ProjectSubName = 1376,
  ProjectSysRevision = 1377,
  ProjectSysType = 1378,
  ProjectTags = 1379,
  ProjectTagsBlogPost = 1380,
  ProjectTagsBlogPostChildren = 1381,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1382,
  ProjectTagsBlogPostContentfulId = 1383,
  ProjectTagsBlogPostCreated = 1384,
  ProjectTagsBlogPostCreatedAt = 1385,
  ProjectTagsBlogPostExcerpt = 1386,
  ProjectTagsBlogPostId = 1387,
  ProjectTagsBlogPostNodeLocale = 1388,
  ProjectTagsBlogPostSlug = 1389,
  ProjectTagsBlogPostSpaceId = 1390,
  ProjectTagsBlogPostTags = 1391,
  ProjectTagsBlogPostTitle = 1392,
  ProjectTagsBlogPostUpdated = 1393,
  ProjectTagsBlogPostUpdatedAt = 1394,
  ProjectTagsChildren = 1395,
  ProjectTagsChildrenChildren = 1396,
  ProjectTagsChildrenId = 1397,
  ProjectTagsContentfulId = 1398,
  ProjectTagsCreatedAt = 1399,
  ProjectTagsId = 1400,
  ProjectTagsInternalContent = 1401,
  ProjectTagsInternalContentDigest = 1402,
  ProjectTagsInternalDescription = 1403,
  ProjectTagsInternalFieldOwners = 1404,
  ProjectTagsInternalIgnoreType = 1405,
  ProjectTagsInternalMediaType = 1406,
  ProjectTagsInternalOwner = 1407,
  ProjectTagsInternalType = 1408,
  ProjectTagsLevel = 1409,
  ProjectTagsName = 1410,
  ProjectTagsNodeLocale = 1411,
  ProjectTagsOss = 1412,
  ProjectTagsOssChildren = 1413,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1414,
  ProjectTagsOssContentfulId = 1415,
  ProjectTagsOssCreatedAt = 1416,
  ProjectTagsOssHref = 1417,
  ProjectTagsOssId = 1418,
  ProjectTagsOssName = 1419,
  ProjectTagsOssNodeLocale = 1420,
  ProjectTagsOssSpaceId = 1421,
  ProjectTagsOssStartDate = 1422,
  ProjectTagsOssSubName = 1423,
  ProjectTagsOssTags = 1424,
  ProjectTagsOssUpdatedAt = 1425,
  ProjectTagsParentChildren = 1426,
  ProjectTagsParentId = 1427,
  ProjectTagsProject = 1428,
  ProjectTagsProjectChildren = 1429,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1430,
  ProjectTagsProjectContentfulId = 1431,
  ProjectTagsProjectCreatedAt = 1432,
  ProjectTagsProjectEndDate = 1433,
  ProjectTagsProjectId = 1434,
  ProjectTagsProjectName = 1435,
  ProjectTagsProjectNodeLocale = 1436,
  ProjectTagsProjectSpaceId = 1437,
  ProjectTagsProjectStartDate = 1438,
  ProjectTagsProjectSubName = 1439,
  ProjectTagsProjectTags = 1440,
  ProjectTagsProjectUpdatedAt = 1441,
  ProjectTagsSkillMap = 1442,
  ProjectTagsSkillMapChildren = 1443,
  ProjectTagsSkillMapContentfulId = 1444,
  ProjectTagsSkillMapCreatedAt = 1445,
  ProjectTagsSkillMapExpanded = 1446,
  ProjectTagsSkillMapId = 1447,
  ProjectTagsSkillMapName = 1448,
  ProjectTagsSkillMapNodeLocale = 1449,
  ProjectTagsSkillMapSkills = 1450,
  ProjectTagsSkillMapSortKey = 1451,
  ProjectTagsSkillMapSpaceId = 1452,
  ProjectTagsSkillMapUpdatedAt = 1453,
  ProjectTagsSpaceId = 1454,
  ProjectTagsSysRevision = 1455,
  ProjectTagsSysType = 1456,
  ProjectTagsUpdatedAt = 1457,
  ProjectUpdatedAt = 1458,
  SpaceId = 1459,
  SvgChildMarkdownRemarkChildren = 1460,
  SvgChildMarkdownRemarkChildrenChildren = 1461,
  SvgChildMarkdownRemarkChildrenId = 1462,
  SvgChildMarkdownRemarkExcerpt = 1463,
  SvgChildMarkdownRemarkExcerptAst = 1464,
  SvgChildMarkdownRemarkFrontmatterTitle = 1465,
  SvgChildMarkdownRemarkHeadings = 1466,
  SvgChildMarkdownRemarkHeadingsDepth = 1467,
  SvgChildMarkdownRemarkHeadingsId = 1468,
  SvgChildMarkdownRemarkHeadingsValue = 1469,
  SvgChildMarkdownRemarkHtml = 1470,
  SvgChildMarkdownRemarkHtmlAst = 1471,
  SvgChildMarkdownRemarkId = 1472,
  SvgChildMarkdownRemarkInternalContent = 1473,
  SvgChildMarkdownRemarkInternalContentDigest = 1474,
  SvgChildMarkdownRemarkInternalDescription = 1475,
  SvgChildMarkdownRemarkInternalFieldOwners = 1476,
  SvgChildMarkdownRemarkInternalIgnoreType = 1477,
  SvgChildMarkdownRemarkInternalMediaType = 1478,
  SvgChildMarkdownRemarkInternalOwner = 1479,
  SvgChildMarkdownRemarkInternalType = 1480,
  SvgChildMarkdownRemarkParentChildren = 1481,
  SvgChildMarkdownRemarkParentId = 1482,
  SvgChildMarkdownRemarkRawMarkdownBody = 1483,
  SvgChildMarkdownRemarkTableOfContents = 1484,
  SvgChildMarkdownRemarkTimeToRead = 1485,
  SvgChildMarkdownRemarkWordCountParagraphs = 1486,
  SvgChildMarkdownRemarkWordCountSentences = 1487,
  SvgChildMarkdownRemarkWordCountWords = 1488,
  SvgChildren = 1489,
  SvgChildrenMarkdownRemark = 1490,
  SvgChildrenMarkdownRemarkChildren = 1491,
  SvgChildrenMarkdownRemarkChildrenChildren = 1492,
  SvgChildrenMarkdownRemarkChildrenId = 1493,
  SvgChildrenMarkdownRemarkExcerpt = 1494,
  SvgChildrenMarkdownRemarkExcerptAst = 1495,
  SvgChildrenMarkdownRemarkFrontmatterTitle = 1496,
  SvgChildrenMarkdownRemarkHeadings = 1497,
  SvgChildrenMarkdownRemarkHeadingsDepth = 1498,
  SvgChildrenMarkdownRemarkHeadingsId = 1499,
  SvgChildrenMarkdownRemarkHeadingsValue = 1500,
  SvgChildrenMarkdownRemarkHtml = 1501,
  SvgChildrenMarkdownRemarkHtmlAst = 1502,
  SvgChildrenMarkdownRemarkId = 1503,
  SvgChildrenMarkdownRemarkInternalContent = 1504,
  SvgChildrenMarkdownRemarkInternalContentDigest = 1505,
  SvgChildrenMarkdownRemarkInternalDescription = 1506,
  SvgChildrenMarkdownRemarkInternalFieldOwners = 1507,
  SvgChildrenMarkdownRemarkInternalIgnoreType = 1508,
  SvgChildrenMarkdownRemarkInternalMediaType = 1509,
  SvgChildrenMarkdownRemarkInternalOwner = 1510,
  SvgChildrenMarkdownRemarkInternalType = 1511,
  SvgChildrenMarkdownRemarkParentChildren = 1512,
  SvgChildrenMarkdownRemarkParentId = 1513,
  SvgChildrenMarkdownRemarkRawMarkdownBody = 1514,
  SvgChildrenMarkdownRemarkTableOfContents = 1515,
  SvgChildrenMarkdownRemarkTimeToRead = 1516,
  SvgChildrenMarkdownRemarkWordCountParagraphs = 1517,
  SvgChildrenMarkdownRemarkWordCountSentences = 1518,
  SvgChildrenMarkdownRemarkWordCountWords = 1519,
  SvgChildrenChildren = 1520,
  SvgChildrenChildrenChildren = 1521,
  SvgChildrenChildrenId = 1522,
  SvgChildrenId = 1523,
  SvgChildrenInternalContent = 1524,
  SvgChildrenInternalContentDigest = 1525,
  SvgChildrenInternalDescription = 1526,
  SvgChildrenInternalFieldOwners = 1527,
  SvgChildrenInternalIgnoreType = 1528,
  SvgChildrenInternalMediaType = 1529,
  SvgChildrenInternalOwner = 1530,
  SvgChildrenInternalType = 1531,
  SvgChildrenParentChildren = 1532,
  SvgChildrenParentId = 1533,
  SvgId = 1534,
  SvgInternalContent = 1535,
  SvgInternalContentDigest = 1536,
  SvgInternalDescription = 1537,
  SvgInternalFieldOwners = 1538,
  SvgInternalIgnoreType = 1539,
  SvgInternalMediaType = 1540,
  SvgInternalOwner = 1541,
  SvgInternalType = 1542,
  SvgParentChildren = 1543,
  SvgParentChildrenChildren = 1544,
  SvgParentChildrenId = 1545,
  SvgParentId = 1546,
  SvgParentInternalContent = 1547,
  SvgParentInternalContentDigest = 1548,
  SvgParentInternalDescription = 1549,
  SvgParentInternalFieldOwners = 1550,
  SvgParentInternalIgnoreType = 1551,
  SvgParentInternalMediaType = 1552,
  SvgParentInternalOwner = 1553,
  SvgParentInternalType = 1554,
  SvgParentParentChildren = 1555,
  SvgParentParentId = 1556,
  SvgSvg = 1557,
  SvgSysType = 1558,
  SysContentTypeSysId = 1559,
  SysContentTypeSysLinkType = 1560,
  SysContentTypeSysType = 1561,
  SysRevision = 1562,
  SysType = 1563,
  UpdatedAt = 1564,
  WhatICanDo = 1565,
  WhatICanDoChildren = 1566,
  WhatICanDoChildrenChildren = 1567,
  WhatICanDoChildrenChildrenChildren = 1568,
  WhatICanDoChildrenChildrenId = 1569,
  WhatICanDoChildrenId = 1570,
  WhatICanDoChildrenInternalContent = 1571,
  WhatICanDoChildrenInternalContentDigest = 1572,
  WhatICanDoChildrenInternalDescription = 1573,
  WhatICanDoChildrenInternalFieldOwners = 1574,
  WhatICanDoChildrenInternalIgnoreType = 1575,
  WhatICanDoChildrenInternalMediaType = 1576,
  WhatICanDoChildrenInternalOwner = 1577,
  WhatICanDoChildrenInternalType = 1578,
  WhatICanDoChildrenParentChildren = 1579,
  WhatICanDoChildrenParentId = 1580,
  WhatICanDoContentfulId = 1581,
  WhatICanDoCreatedAt = 1582,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildren = 1583,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 1584,
  WhatICanDoIconChildContentfulIconSvgTextNodeId = 1585,
  WhatICanDoIconChildContentfulIconSvgTextNodeSvg = 1586,
  WhatICanDoIconChildren = 1587,
  WhatICanDoIconChildrenContentfulIconSvgTextNode = 1588,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildren = 1589,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 1590,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeId = 1591,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeSvg = 1592,
  WhatICanDoIconChildrenChildren = 1593,
  WhatICanDoIconChildrenId = 1594,
  WhatICanDoIconContact = 1595,
  WhatICanDoIconContactChildren = 1596,
  WhatICanDoIconContactContentfulId = 1597,
  WhatICanDoIconContactCreatedAt = 1598,
  WhatICanDoIconContactHref = 1599,
  WhatICanDoIconContactId = 1600,
  WhatICanDoIconContactName = 1601,
  WhatICanDoIconContactNodeLocale = 1602,
  WhatICanDoIconContactSortKey = 1603,
  WhatICanDoIconContactSpaceId = 1604,
  WhatICanDoIconContactSubName = 1605,
  WhatICanDoIconContactUpdatedAt = 1606,
  WhatICanDoIconContentfulId = 1607,
  WhatICanDoIconCreatedAt = 1608,
  WhatICanDoIconHistory = 1609,
  WhatICanDoIconHistoryChildren = 1610,
  WhatICanDoIconHistoryContentfulId = 1611,
  WhatICanDoIconHistoryCreatedAt = 1612,
  WhatICanDoIconHistoryDate = 1613,
  WhatICanDoIconHistoryId = 1614,
  WhatICanDoIconHistoryName = 1615,
  WhatICanDoIconHistoryNodeLocale = 1616,
  WhatICanDoIconHistorySpaceId = 1617,
  WhatICanDoIconHistorySubName = 1618,
  WhatICanDoIconHistoryUpdatedAt = 1619,
  WhatICanDoIconId = 1620,
  WhatICanDoIconInternalContent = 1621,
  WhatICanDoIconInternalContentDigest = 1622,
  WhatICanDoIconInternalDescription = 1623,
  WhatICanDoIconInternalFieldOwners = 1624,
  WhatICanDoIconInternalIgnoreType = 1625,
  WhatICanDoIconInternalMediaType = 1626,
  WhatICanDoIconInternalOwner = 1627,
  WhatICanDoIconInternalType = 1628,
  WhatICanDoIconName = 1629,
  WhatICanDoIconNodeLocale = 1630,
  WhatICanDoIconOss = 1631,
  WhatICanDoIconOssChildren = 1632,
  WhatICanDoIconOssChildrenContentfulOssDetailTextNode = 1633,
  WhatICanDoIconOssContentfulId = 1634,
  WhatICanDoIconOssCreatedAt = 1635,
  WhatICanDoIconOssHref = 1636,
  WhatICanDoIconOssId = 1637,
  WhatICanDoIconOssName = 1638,
  WhatICanDoIconOssNodeLocale = 1639,
  WhatICanDoIconOssSpaceId = 1640,
  WhatICanDoIconOssStartDate = 1641,
  WhatICanDoIconOssSubName = 1642,
  WhatICanDoIconOssTags = 1643,
  WhatICanDoIconOssUpdatedAt = 1644,
  WhatICanDoIconParentChildren = 1645,
  WhatICanDoIconParentId = 1646,
  WhatICanDoIconProject = 1647,
  WhatICanDoIconProjectChildren = 1648,
  WhatICanDoIconProjectChildrenContentfulProjectDetailTextNode = 1649,
  WhatICanDoIconProjectContentfulId = 1650,
  WhatICanDoIconProjectCreatedAt = 1651,
  WhatICanDoIconProjectEndDate = 1652,
  WhatICanDoIconProjectId = 1653,
  WhatICanDoIconProjectName = 1654,
  WhatICanDoIconProjectNodeLocale = 1655,
  WhatICanDoIconProjectSpaceId = 1656,
  WhatICanDoIconProjectStartDate = 1657,
  WhatICanDoIconProjectSubName = 1658,
  WhatICanDoIconProjectTags = 1659,
  WhatICanDoIconProjectUpdatedAt = 1660,
  WhatICanDoIconSpaceId = 1661,
  WhatICanDoIconSvgChildren = 1662,
  WhatICanDoIconSvgChildrenMarkdownRemark = 1663,
  WhatICanDoIconSvgId = 1664,
  WhatICanDoIconSvgSvg = 1665,
  WhatICanDoIconSysRevision = 1666,
  WhatICanDoIconSysType = 1667,
  WhatICanDoIconUpdatedAt = 1668,
  WhatICanDoIconWhatICanDo = 1669,
  WhatICanDoIconWhatICanDoChildren = 1670,
  WhatICanDoIconWhatICanDoContentfulId = 1671,
  WhatICanDoIconWhatICanDoCreatedAt = 1672,
  WhatICanDoIconWhatICanDoId = 1673,
  WhatICanDoIconWhatICanDoName = 1674,
  WhatICanDoIconWhatICanDoNodeLocale = 1675,
  WhatICanDoIconWhatICanDoSortKey = 1676,
  WhatICanDoIconWhatICanDoSpaceId = 1677,
  WhatICanDoIconWhatICanDoSubName = 1678,
  WhatICanDoIconWhatICanDoUpdatedAt = 1679,
  WhatICanDoId = 1680,
  WhatICanDoInternalContent = 1681,
  WhatICanDoInternalContentDigest = 1682,
  WhatICanDoInternalDescription = 1683,
  WhatICanDoInternalFieldOwners = 1684,
  WhatICanDoInternalIgnoreType = 1685,
  WhatICanDoInternalMediaType = 1686,
  WhatICanDoInternalOwner = 1687,
  WhatICanDoInternalType = 1688,
  WhatICanDoName = 1689,
  WhatICanDoNodeLocale = 1690,
  WhatICanDoParentChildren = 1691,
  WhatICanDoParentChildrenChildren = 1692,
  WhatICanDoParentChildrenId = 1693,
  WhatICanDoParentId = 1694,
  WhatICanDoParentInternalContent = 1695,
  WhatICanDoParentInternalContentDigest = 1696,
  WhatICanDoParentInternalDescription = 1697,
  WhatICanDoParentInternalFieldOwners = 1698,
  WhatICanDoParentInternalIgnoreType = 1699,
  WhatICanDoParentInternalMediaType = 1700,
  WhatICanDoParentInternalOwner = 1701,
  WhatICanDoParentInternalType = 1702,
  WhatICanDoParentParentChildren = 1703,
  WhatICanDoParentParentId = 1704,
  WhatICanDoSortKey = 1705,
  WhatICanDoSpaceId = 1706,
  WhatICanDoSubName = 1707,
  WhatICanDoSysRevision = 1708,
  WhatICanDoSysType = 1709,
  WhatICanDoUpdatedAt = 1710
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
  ChildContentfulOssDetailTextNodeChildren = 29,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 30,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 31,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 32,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenId = 33,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 34,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 35,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 36,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 37,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 38,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsId = 39,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 40,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 41,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 42,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 43,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContent = 44,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 45,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalDescription = 46,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 47,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 48,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 49,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalOwner = 50,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalType = 51,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkParentChildren = 52,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkParentId = 53,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 54,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 55,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 56,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 57,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 58,
  ChildContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountWords = 59,
  ChildContentfulOssDetailTextNodeChildrenChildren = 60,
  ChildContentfulOssDetailTextNodeChildrenChildrenChildren = 61,
  ChildContentfulOssDetailTextNodeChildrenChildrenId = 62,
  ChildContentfulOssDetailTextNodeChildrenId = 63,
  ChildContentfulOssDetailTextNodeChildrenInternalContent = 64,
  ChildContentfulOssDetailTextNodeChildrenInternalContentDigest = 65,
  ChildContentfulOssDetailTextNodeChildrenInternalDescription = 66,
  ChildContentfulOssDetailTextNodeChildrenInternalFieldOwners = 67,
  ChildContentfulOssDetailTextNodeChildrenInternalIgnoreType = 68,
  ChildContentfulOssDetailTextNodeChildrenInternalMediaType = 69,
  ChildContentfulOssDetailTextNodeChildrenInternalOwner = 70,
  ChildContentfulOssDetailTextNodeChildrenInternalType = 71,
  ChildContentfulOssDetailTextNodeChildrenParentChildren = 72,
  ChildContentfulOssDetailTextNodeChildrenParentId = 73,
  ChildContentfulOssDetailTextNodeDetail = 74,
  ChildContentfulOssDetailTextNodeId = 75,
  ChildContentfulOssDetailTextNodeInternalContent = 76,
  ChildContentfulOssDetailTextNodeInternalContentDigest = 77,
  ChildContentfulOssDetailTextNodeInternalDescription = 78,
  ChildContentfulOssDetailTextNodeInternalFieldOwners = 79,
  ChildContentfulOssDetailTextNodeInternalIgnoreType = 80,
  ChildContentfulOssDetailTextNodeInternalMediaType = 81,
  ChildContentfulOssDetailTextNodeInternalOwner = 82,
  ChildContentfulOssDetailTextNodeInternalType = 83,
  ChildContentfulOssDetailTextNodeParentChildren = 84,
  ChildContentfulOssDetailTextNodeParentChildrenChildren = 85,
  ChildContentfulOssDetailTextNodeParentChildrenId = 86,
  ChildContentfulOssDetailTextNodeParentId = 87,
  ChildContentfulOssDetailTextNodeParentInternalContent = 88,
  ChildContentfulOssDetailTextNodeParentInternalContentDigest = 89,
  ChildContentfulOssDetailTextNodeParentInternalDescription = 90,
  ChildContentfulOssDetailTextNodeParentInternalFieldOwners = 91,
  ChildContentfulOssDetailTextNodeParentInternalIgnoreType = 92,
  ChildContentfulOssDetailTextNodeParentInternalMediaType = 93,
  ChildContentfulOssDetailTextNodeParentInternalOwner = 94,
  ChildContentfulOssDetailTextNodeParentInternalType = 95,
  ChildContentfulOssDetailTextNodeParentParentChildren = 96,
  ChildContentfulOssDetailTextNodeParentParentId = 97,
  ChildContentfulOssDetailTextNodeSysType = 98,
  Children = 99,
  ChildrenContentfulOssDetailTextNode = 100,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 101,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildrenChildren = 102,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildrenId = 103,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 104,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 105,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkFrontmatterTitle = 106,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 107,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsDepth = 108,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsId = 109,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadingsValue = 110,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 111,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 112,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkId = 113,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalContent = 114,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalContentDigest = 115,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalDescription = 116,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalFieldOwners = 117,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalIgnoreType = 118,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalMediaType = 119,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalOwner = 120,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkInternalType = 121,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkParentChildren = 122,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkParentId = 123,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 124,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 125,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 126,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkWordCountParagraphs = 127,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkWordCountSentences = 128,
  ChildrenContentfulOssDetailTextNodeChildMarkdownRemarkWordCountWords = 129,
  ChildrenContentfulOssDetailTextNodeChildren = 130,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 131,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 132,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 133,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildrenId = 134,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 135,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 136,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 137,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 138,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 139,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsId = 140,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 141,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 142,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 143,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 144,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContent = 145,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 146,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalDescription = 147,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 148,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 149,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 150,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalOwner = 151,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkInternalType = 152,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkParentChildren = 153,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkParentId = 154,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 155,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 156,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 157,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 158,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 159,
  ChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkWordCountWords = 160,
  ChildrenContentfulOssDetailTextNodeChildrenChildren = 161,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenChildren = 162,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenId = 163,
  ChildrenContentfulOssDetailTextNodeChildrenId = 164,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContent = 165,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContentDigest = 166,
  ChildrenContentfulOssDetailTextNodeChildrenInternalDescription = 167,
  ChildrenContentfulOssDetailTextNodeChildrenInternalFieldOwners = 168,
  ChildrenContentfulOssDetailTextNodeChildrenInternalIgnoreType = 169,
  ChildrenContentfulOssDetailTextNodeChildrenInternalMediaType = 170,
  ChildrenContentfulOssDetailTextNodeChildrenInternalOwner = 171,
  ChildrenContentfulOssDetailTextNodeChildrenInternalType = 172,
  ChildrenContentfulOssDetailTextNodeChildrenParentChildren = 173,
  ChildrenContentfulOssDetailTextNodeChildrenParentId = 174,
  ChildrenContentfulOssDetailTextNodeDetail = 175,
  ChildrenContentfulOssDetailTextNodeId = 176,
  ChildrenContentfulOssDetailTextNodeInternalContent = 177,
  ChildrenContentfulOssDetailTextNodeInternalContentDigest = 178,
  ChildrenContentfulOssDetailTextNodeInternalDescription = 179,
  ChildrenContentfulOssDetailTextNodeInternalFieldOwners = 180,
  ChildrenContentfulOssDetailTextNodeInternalIgnoreType = 181,
  ChildrenContentfulOssDetailTextNodeInternalMediaType = 182,
  ChildrenContentfulOssDetailTextNodeInternalOwner = 183,
  ChildrenContentfulOssDetailTextNodeInternalType = 184,
  ChildrenContentfulOssDetailTextNodeParentChildren = 185,
  ChildrenContentfulOssDetailTextNodeParentChildrenChildren = 186,
  ChildrenContentfulOssDetailTextNodeParentChildrenId = 187,
  ChildrenContentfulOssDetailTextNodeParentId = 188,
  ChildrenContentfulOssDetailTextNodeParentInternalContent = 189,
  ChildrenContentfulOssDetailTextNodeParentInternalContentDigest = 190,
  ChildrenContentfulOssDetailTextNodeParentInternalDescription = 191,
  ChildrenContentfulOssDetailTextNodeParentInternalFieldOwners = 192,
  ChildrenContentfulOssDetailTextNodeParentInternalIgnoreType = 193,
  ChildrenContentfulOssDetailTextNodeParentInternalMediaType = 194,
  ChildrenContentfulOssDetailTextNodeParentInternalOwner = 195,
  ChildrenContentfulOssDetailTextNodeParentInternalType = 196,
  ChildrenContentfulOssDetailTextNodeParentParentChildren = 197,
  ChildrenContentfulOssDetailTextNodeParentParentId = 198,
  ChildrenContentfulOssDetailTextNodeSysType = 199,
  ChildrenChildren = 200,
  ChildrenChildrenChildren = 201,
  ChildrenChildrenChildrenChildren = 202,
  ChildrenChildrenChildrenId = 203,
  ChildrenChildrenId = 204,
  ChildrenChildrenInternalContent = 205,
  ChildrenChildrenInternalContentDigest = 206,
  ChildrenChildrenInternalDescription = 207,
  ChildrenChildrenInternalFieldOwners = 208,
  ChildrenChildrenInternalIgnoreType = 209,
  ChildrenChildrenInternalMediaType = 210,
  ChildrenChildrenInternalOwner = 211,
  ChildrenChildrenInternalType = 212,
  ChildrenChildrenParentChildren = 213,
  ChildrenChildrenParentId = 214,
  ChildrenId = 215,
  ChildrenInternalContent = 216,
  ChildrenInternalContentDigest = 217,
  ChildrenInternalDescription = 218,
  ChildrenInternalFieldOwners = 219,
  ChildrenInternalIgnoreType = 220,
  ChildrenInternalMediaType = 221,
  ChildrenInternalOwner = 222,
  ChildrenInternalType = 223,
  ChildrenParentChildren = 224,
  ChildrenParentChildrenChildren = 225,
  ChildrenParentChildrenId = 226,
  ChildrenParentId = 227,
  ChildrenParentInternalContent = 228,
  ChildrenParentInternalContentDigest = 229,
  ChildrenParentInternalDescription = 230,
  ChildrenParentInternalFieldOwners = 231,
  ChildrenParentInternalIgnoreType = 232,
  ChildrenParentInternalMediaType = 233,
  ChildrenParentInternalOwner = 234,
  ChildrenParentInternalType = 235,
  ChildrenParentParentChildren = 236,
  ChildrenParentParentId = 237,
  ContentfulId = 238,
  CreatedAt = 239,
  DetailChildMarkdownRemarkChildren = 240,
  DetailChildMarkdownRemarkChildrenChildren = 241,
  DetailChildMarkdownRemarkChildrenId = 242,
  DetailChildMarkdownRemarkExcerpt = 243,
  DetailChildMarkdownRemarkExcerptAst = 244,
  DetailChildMarkdownRemarkFrontmatterTitle = 245,
  DetailChildMarkdownRemarkHeadings = 246,
  DetailChildMarkdownRemarkHeadingsDepth = 247,
  DetailChildMarkdownRemarkHeadingsId = 248,
  DetailChildMarkdownRemarkHeadingsValue = 249,
  DetailChildMarkdownRemarkHtml = 250,
  DetailChildMarkdownRemarkHtmlAst = 251,
  DetailChildMarkdownRemarkId = 252,
  DetailChildMarkdownRemarkInternalContent = 253,
  DetailChildMarkdownRemarkInternalContentDigest = 254,
  DetailChildMarkdownRemarkInternalDescription = 255,
  DetailChildMarkdownRemarkInternalFieldOwners = 256,
  DetailChildMarkdownRemarkInternalIgnoreType = 257,
  DetailChildMarkdownRemarkInternalMediaType = 258,
  DetailChildMarkdownRemarkInternalOwner = 259,
  DetailChildMarkdownRemarkInternalType = 260,
  DetailChildMarkdownRemarkParentChildren = 261,
  DetailChildMarkdownRemarkParentId = 262,
  DetailChildMarkdownRemarkRawMarkdownBody = 263,
  DetailChildMarkdownRemarkTableOfContents = 264,
  DetailChildMarkdownRemarkTimeToRead = 265,
  DetailChildMarkdownRemarkWordCountParagraphs = 266,
  DetailChildMarkdownRemarkWordCountSentences = 267,
  DetailChildMarkdownRemarkWordCountWords = 268,
  DetailChildren = 269,
  DetailChildrenMarkdownRemark = 270,
  DetailChildrenMarkdownRemarkChildren = 271,
  DetailChildrenMarkdownRemarkChildrenChildren = 272,
  DetailChildrenMarkdownRemarkChildrenId = 273,
  DetailChildrenMarkdownRemarkExcerpt = 274,
  DetailChildrenMarkdownRemarkExcerptAst = 275,
  DetailChildrenMarkdownRemarkFrontmatterTitle = 276,
  DetailChildrenMarkdownRemarkHeadings = 277,
  DetailChildrenMarkdownRemarkHeadingsDepth = 278,
  DetailChildrenMarkdownRemarkHeadingsId = 279,
  DetailChildrenMarkdownRemarkHeadingsValue = 280,
  DetailChildrenMarkdownRemarkHtml = 281,
  DetailChildrenMarkdownRemarkHtmlAst = 282,
  DetailChildrenMarkdownRemarkId = 283,
  DetailChildrenMarkdownRemarkInternalContent = 284,
  DetailChildrenMarkdownRemarkInternalContentDigest = 285,
  DetailChildrenMarkdownRemarkInternalDescription = 286,
  DetailChildrenMarkdownRemarkInternalFieldOwners = 287,
  DetailChildrenMarkdownRemarkInternalIgnoreType = 288,
  DetailChildrenMarkdownRemarkInternalMediaType = 289,
  DetailChildrenMarkdownRemarkInternalOwner = 290,
  DetailChildrenMarkdownRemarkInternalType = 291,
  DetailChildrenMarkdownRemarkParentChildren = 292,
  DetailChildrenMarkdownRemarkParentId = 293,
  DetailChildrenMarkdownRemarkRawMarkdownBody = 294,
  DetailChildrenMarkdownRemarkTableOfContents = 295,
  DetailChildrenMarkdownRemarkTimeToRead = 296,
  DetailChildrenMarkdownRemarkWordCountParagraphs = 297,
  DetailChildrenMarkdownRemarkWordCountSentences = 298,
  DetailChildrenMarkdownRemarkWordCountWords = 299,
  DetailChildrenChildren = 300,
  DetailChildrenChildrenChildren = 301,
  DetailChildrenChildrenId = 302,
  DetailChildrenId = 303,
  DetailChildrenInternalContent = 304,
  DetailChildrenInternalContentDigest = 305,
  DetailChildrenInternalDescription = 306,
  DetailChildrenInternalFieldOwners = 307,
  DetailChildrenInternalIgnoreType = 308,
  DetailChildrenInternalMediaType = 309,
  DetailChildrenInternalOwner = 310,
  DetailChildrenInternalType = 311,
  DetailChildrenParentChildren = 312,
  DetailChildrenParentId = 313,
  DetailDetail = 314,
  DetailId = 315,
  DetailInternalContent = 316,
  DetailInternalContentDigest = 317,
  DetailInternalDescription = 318,
  DetailInternalFieldOwners = 319,
  DetailInternalIgnoreType = 320,
  DetailInternalMediaType = 321,
  DetailInternalOwner = 322,
  DetailInternalType = 323,
  DetailParentChildren = 324,
  DetailParentChildrenChildren = 325,
  DetailParentChildrenId = 326,
  DetailParentId = 327,
  DetailParentInternalContent = 328,
  DetailParentInternalContentDigest = 329,
  DetailParentInternalDescription = 330,
  DetailParentInternalFieldOwners = 331,
  DetailParentInternalIgnoreType = 332,
  DetailParentInternalMediaType = 333,
  DetailParentInternalOwner = 334,
  DetailParentInternalType = 335,
  DetailParentParentChildren = 336,
  DetailParentParentId = 337,
  DetailSysType = 338,
  Href = 339,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 340,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 341,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 342,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 343,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 344,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 345,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 346,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 347,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 348,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 349,
  IconChildContentfulIconSvgTextNodeChildren = 350,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 351,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 352,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 353,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 354,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 355,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 356,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 357,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 358,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 359,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 360,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 361,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 362,
  IconChildContentfulIconSvgTextNodeChildrenId = 363,
  IconChildContentfulIconSvgTextNodeId = 364,
  IconChildContentfulIconSvgTextNodeInternalContent = 365,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 366,
  IconChildContentfulIconSvgTextNodeInternalDescription = 367,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 368,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 369,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 370,
  IconChildContentfulIconSvgTextNodeInternalOwner = 371,
  IconChildContentfulIconSvgTextNodeInternalType = 372,
  IconChildContentfulIconSvgTextNodeParentChildren = 373,
  IconChildContentfulIconSvgTextNodeParentId = 374,
  IconChildContentfulIconSvgTextNodeSvg = 375,
  IconChildContentfulIconSvgTextNodeSysType = 376,
  IconChildren = 377,
  IconChildrenContentfulIconSvgTextNode = 378,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 379,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 380,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 381,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 382,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 383,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 384,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 385,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 386,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 387,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 388,
  IconChildrenContentfulIconSvgTextNodeChildren = 389,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 390,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 391,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 392,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 393,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 394,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 395,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 396,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 397,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 398,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 399,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 400,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 401,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 402,
  IconChildrenContentfulIconSvgTextNodeId = 403,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 404,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 405,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 406,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 407,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 408,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 409,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 410,
  IconChildrenContentfulIconSvgTextNodeInternalType = 411,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 412,
  IconChildrenContentfulIconSvgTextNodeParentId = 413,
  IconChildrenContentfulIconSvgTextNodeSvg = 414,
  IconChildrenContentfulIconSvgTextNodeSysType = 415,
  IconChildrenChildren = 416,
  IconChildrenChildrenChildren = 417,
  IconChildrenChildrenId = 418,
  IconChildrenId = 419,
  IconChildrenInternalContent = 420,
  IconChildrenInternalContentDigest = 421,
  IconChildrenInternalDescription = 422,
  IconChildrenInternalFieldOwners = 423,
  IconChildrenInternalIgnoreType = 424,
  IconChildrenInternalMediaType = 425,
  IconChildrenInternalOwner = 426,
  IconChildrenInternalType = 427,
  IconChildrenParentChildren = 428,
  IconChildrenParentId = 429,
  IconContact = 430,
  IconContactChildren = 431,
  IconContactChildrenChildren = 432,
  IconContactChildrenId = 433,
  IconContactContentfulId = 434,
  IconContactCreatedAt = 435,
  IconContactHref = 436,
  IconContactIconSvgDarkChildren = 437,
  IconContactIconSvgDarkContentfulId = 438,
  IconContactIconSvgDarkCreatedAt = 439,
  IconContactIconSvgDarkDescription = 440,
  IconContactIconSvgDarkGatsbyImageData = 441,
  IconContactIconSvgDarkId = 442,
  IconContactIconSvgDarkNodeLocale = 443,
  IconContactIconSvgDarkSpaceId = 444,
  IconContactIconSvgDarkTitle = 445,
  IconContactIconSvgDarkUpdatedAt = 446,
  IconContactIconSvgLightChildren = 447,
  IconContactIconSvgLightContentfulId = 448,
  IconContactIconSvgLightCreatedAt = 449,
  IconContactIconSvgLightDescription = 450,
  IconContactIconSvgLightGatsbyImageData = 451,
  IconContactIconSvgLightId = 452,
  IconContactIconSvgLightNodeLocale = 453,
  IconContactIconSvgLightSpaceId = 454,
  IconContactIconSvgLightTitle = 455,
  IconContactIconSvgLightUpdatedAt = 456,
  IconContactIconChildren = 457,
  IconContactIconChildrenContentfulIconSvgTextNode = 458,
  IconContactIconContact = 459,
  IconContactIconContentfulId = 460,
  IconContactIconCreatedAt = 461,
  IconContactIconHistory = 462,
  IconContactIconId = 463,
  IconContactIconName = 464,
  IconContactIconNodeLocale = 465,
  IconContactIconOss = 466,
  IconContactIconProject = 467,
  IconContactIconSpaceId = 468,
  IconContactIconUpdatedAt = 469,
  IconContactIconWhatICanDo = 470,
  IconContactId = 471,
  IconContactInternalContent = 472,
  IconContactInternalContentDigest = 473,
  IconContactInternalDescription = 474,
  IconContactInternalFieldOwners = 475,
  IconContactInternalIgnoreType = 476,
  IconContactInternalMediaType = 477,
  IconContactInternalOwner = 478,
  IconContactInternalType = 479,
  IconContactName = 480,
  IconContactNodeLocale = 481,
  IconContactParentChildren = 482,
  IconContactParentId = 483,
  IconContactSortKey = 484,
  IconContactSpaceId = 485,
  IconContactSubName = 486,
  IconContactSysRevision = 487,
  IconContactSysType = 488,
  IconContactUpdatedAt = 489,
  IconContentfulId = 490,
  IconCreatedAt = 491,
  IconHistory = 492,
  IconHistoryChildren = 493,
  IconHistoryChildrenChildren = 494,
  IconHistoryChildrenId = 495,
  IconHistoryContentfulId = 496,
  IconHistoryCreatedAt = 497,
  IconHistoryDate = 498,
  IconHistoryIconChildren = 499,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 500,
  IconHistoryIconContact = 501,
  IconHistoryIconContentfulId = 502,
  IconHistoryIconCreatedAt = 503,
  IconHistoryIconHistory = 504,
  IconHistoryIconId = 505,
  IconHistoryIconName = 506,
  IconHistoryIconNodeLocale = 507,
  IconHistoryIconOss = 508,
  IconHistoryIconProject = 509,
  IconHistoryIconSpaceId = 510,
  IconHistoryIconUpdatedAt = 511,
  IconHistoryIconWhatICanDo = 512,
  IconHistoryId = 513,
  IconHistoryInternalContent = 514,
  IconHistoryInternalContentDigest = 515,
  IconHistoryInternalDescription = 516,
  IconHistoryInternalFieldOwners = 517,
  IconHistoryInternalIgnoreType = 518,
  IconHistoryInternalMediaType = 519,
  IconHistoryInternalOwner = 520,
  IconHistoryInternalType = 521,
  IconHistoryName = 522,
  IconHistoryNodeLocale = 523,
  IconHistoryParentChildren = 524,
  IconHistoryParentId = 525,
  IconHistorySpaceId = 526,
  IconHistorySubName = 527,
  IconHistorySysRevision = 528,
  IconHistorySysType = 529,
  IconHistoryUpdatedAt = 530,
  IconId = 531,
  IconInternalContent = 532,
  IconInternalContentDigest = 533,
  IconInternalDescription = 534,
  IconInternalFieldOwners = 535,
  IconInternalIgnoreType = 536,
  IconInternalMediaType = 537,
  IconInternalOwner = 538,
  IconInternalType = 539,
  IconName = 540,
  IconNodeLocale = 541,
  IconOss = 542,
  IconOssChildContentfulOssDetailTextNodeChildren = 543,
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 544,
  IconOssChildContentfulOssDetailTextNodeDetail = 545,
  IconOssChildContentfulOssDetailTextNodeId = 546,
  IconOssChildren = 547,
  IconOssChildrenContentfulOssDetailTextNode = 548,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 549,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 550,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 551,
  IconOssChildrenContentfulOssDetailTextNodeId = 552,
  IconOssChildrenChildren = 553,
  IconOssChildrenId = 554,
  IconOssContentfulId = 555,
  IconOssCreatedAt = 556,
  IconOssDetailChildren = 557,
  IconOssDetailChildrenMarkdownRemark = 558,
  IconOssDetailDetail = 559,
  IconOssDetailId = 560,
  IconOssHref = 561,
  IconOssIconChildren = 562,
  IconOssIconChildrenContentfulIconSvgTextNode = 563,
  IconOssIconContact = 564,
  IconOssIconContentfulId = 565,
  IconOssIconCreatedAt = 566,
  IconOssIconHistory = 567,
  IconOssIconId = 568,
  IconOssIconName = 569,
  IconOssIconNodeLocale = 570,
  IconOssIconOss = 571,
  IconOssIconProject = 572,
  IconOssIconSpaceId = 573,
  IconOssIconUpdatedAt = 574,
  IconOssIconWhatICanDo = 575,
  IconOssId = 576,
  IconOssImageChildren = 577,
  IconOssImageContentfulId = 578,
  IconOssImageCreatedAt = 579,
  IconOssImageDescription = 580,
  IconOssImageGatsbyImageData = 581,
  IconOssImageId = 582,
  IconOssImageNodeLocale = 583,
  IconOssImageSpaceId = 584,
  IconOssImageTitle = 585,
  IconOssImageUpdatedAt = 586,
  IconOssInternalContent = 587,
  IconOssInternalContentDigest = 588,
  IconOssInternalDescription = 589,
  IconOssInternalFieldOwners = 590,
  IconOssInternalIgnoreType = 591,
  IconOssInternalMediaType = 592,
  IconOssInternalOwner = 593,
  IconOssInternalType = 594,
  IconOssName = 595,
  IconOssNodeLocale = 596,
  IconOssParentChildren = 597,
  IconOssParentId = 598,
  IconOssSpaceId = 599,
  IconOssStartDate = 600,
  IconOssSubName = 601,
  IconOssSysRevision = 602,
  IconOssSysType = 603,
  IconOssTags = 604,
  IconOssTagsBlogPost = 605,
  IconOssTagsChildren = 606,
  IconOssTagsContentfulId = 607,
  IconOssTagsCreatedAt = 608,
  IconOssTagsId = 609,
  IconOssTagsLevel = 610,
  IconOssTagsName = 611,
  IconOssTagsNodeLocale = 612,
  IconOssTagsOss = 613,
  IconOssTagsProject = 614,
  IconOssTagsSkillMap = 615,
  IconOssTagsSpaceId = 616,
  IconOssTagsUpdatedAt = 617,
  IconOssUpdatedAt = 618,
  IconParentChildren = 619,
  IconParentChildrenChildren = 620,
  IconParentChildrenId = 621,
  IconParentId = 622,
  IconParentInternalContent = 623,
  IconParentInternalContentDigest = 624,
  IconParentInternalDescription = 625,
  IconParentInternalFieldOwners = 626,
  IconParentInternalIgnoreType = 627,
  IconParentInternalMediaType = 628,
  IconParentInternalOwner = 629,
  IconParentInternalType = 630,
  IconParentParentChildren = 631,
  IconParentParentId = 632,
  IconProject = 633,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 634,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 635,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 636,
  IconProjectChildContentfulProjectDetailTextNodeId = 637,
  IconProjectChildren = 638,
  IconProjectChildrenContentfulProjectDetailTextNode = 639,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 640,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 641,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 642,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 643,
  IconProjectChildrenChildren = 644,
  IconProjectChildrenId = 645,
  IconProjectContentfulId = 646,
  IconProjectCreatedAt = 647,
  IconProjectDetailChildren = 648,
  IconProjectDetailChildrenMarkdownRemark = 649,
  IconProjectDetailDetail = 650,
  IconProjectDetailId = 651,
  IconProjectEndDate = 652,
  IconProjectIconChildren = 653,
  IconProjectIconChildrenContentfulIconSvgTextNode = 654,
  IconProjectIconContact = 655,
  IconProjectIconContentfulId = 656,
  IconProjectIconCreatedAt = 657,
  IconProjectIconHistory = 658,
  IconProjectIconId = 659,
  IconProjectIconName = 660,
  IconProjectIconNodeLocale = 661,
  IconProjectIconOss = 662,
  IconProjectIconProject = 663,
  IconProjectIconSpaceId = 664,
  IconProjectIconUpdatedAt = 665,
  IconProjectIconWhatICanDo = 666,
  IconProjectId = 667,
  IconProjectInternalContent = 668,
  IconProjectInternalContentDigest = 669,
  IconProjectInternalDescription = 670,
  IconProjectInternalFieldOwners = 671,
  IconProjectInternalIgnoreType = 672,
  IconProjectInternalMediaType = 673,
  IconProjectInternalOwner = 674,
  IconProjectInternalType = 675,
  IconProjectName = 676,
  IconProjectNodeLocale = 677,
  IconProjectParentChildren = 678,
  IconProjectParentId = 679,
  IconProjectSpaceId = 680,
  IconProjectStartDate = 681,
  IconProjectSubName = 682,
  IconProjectSysRevision = 683,
  IconProjectSysType = 684,
  IconProjectTags = 685,
  IconProjectTagsBlogPost = 686,
  IconProjectTagsChildren = 687,
  IconProjectTagsContentfulId = 688,
  IconProjectTagsCreatedAt = 689,
  IconProjectTagsId = 690,
  IconProjectTagsLevel = 691,
  IconProjectTagsName = 692,
  IconProjectTagsNodeLocale = 693,
  IconProjectTagsOss = 694,
  IconProjectTagsProject = 695,
  IconProjectTagsSkillMap = 696,
  IconProjectTagsSpaceId = 697,
  IconProjectTagsUpdatedAt = 698,
  IconProjectUpdatedAt = 699,
  IconSpaceId = 700,
  IconSvgChildMarkdownRemarkChildren = 701,
  IconSvgChildMarkdownRemarkExcerpt = 702,
  IconSvgChildMarkdownRemarkExcerptAst = 703,
  IconSvgChildMarkdownRemarkHeadings = 704,
  IconSvgChildMarkdownRemarkHtml = 705,
  IconSvgChildMarkdownRemarkHtmlAst = 706,
  IconSvgChildMarkdownRemarkId = 707,
  IconSvgChildMarkdownRemarkRawMarkdownBody = 708,
  IconSvgChildMarkdownRemarkTableOfContents = 709,
  IconSvgChildMarkdownRemarkTimeToRead = 710,
  IconSvgChildren = 711,
  IconSvgChildrenMarkdownRemark = 712,
  IconSvgChildrenMarkdownRemarkChildren = 713,
  IconSvgChildrenMarkdownRemarkExcerpt = 714,
  IconSvgChildrenMarkdownRemarkExcerptAst = 715,
  IconSvgChildrenMarkdownRemarkHeadings = 716,
  IconSvgChildrenMarkdownRemarkHtml = 717,
  IconSvgChildrenMarkdownRemarkHtmlAst = 718,
  IconSvgChildrenMarkdownRemarkId = 719,
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 720,
  IconSvgChildrenMarkdownRemarkTableOfContents = 721,
  IconSvgChildrenMarkdownRemarkTimeToRead = 722,
  IconSvgChildrenChildren = 723,
  IconSvgChildrenId = 724,
  IconSvgId = 725,
  IconSvgInternalContent = 726,
  IconSvgInternalContentDigest = 727,
  IconSvgInternalDescription = 728,
  IconSvgInternalFieldOwners = 729,
  IconSvgInternalIgnoreType = 730,
  IconSvgInternalMediaType = 731,
  IconSvgInternalOwner = 732,
  IconSvgInternalType = 733,
  IconSvgParentChildren = 734,
  IconSvgParentId = 735,
  IconSvgSvg = 736,
  IconSvgSysType = 737,
  IconSysRevision = 738,
  IconSysType = 739,
  IconUpdatedAt = 740,
  IconWhatICanDo = 741,
  IconWhatICanDoChildren = 742,
  IconWhatICanDoChildrenChildren = 743,
  IconWhatICanDoChildrenId = 744,
  IconWhatICanDoContentfulId = 745,
  IconWhatICanDoCreatedAt = 746,
  IconWhatICanDoIconChildren = 747,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 748,
  IconWhatICanDoIconContact = 749,
  IconWhatICanDoIconContentfulId = 750,
  IconWhatICanDoIconCreatedAt = 751,
  IconWhatICanDoIconHistory = 752,
  IconWhatICanDoIconId = 753,
  IconWhatICanDoIconName = 754,
  IconWhatICanDoIconNodeLocale = 755,
  IconWhatICanDoIconOss = 756,
  IconWhatICanDoIconProject = 757,
  IconWhatICanDoIconSpaceId = 758,
  IconWhatICanDoIconUpdatedAt = 759,
  IconWhatICanDoIconWhatICanDo = 760,
  IconWhatICanDoId = 761,
  IconWhatICanDoInternalContent = 762,
  IconWhatICanDoInternalContentDigest = 763,
  IconWhatICanDoInternalDescription = 764,
  IconWhatICanDoInternalFieldOwners = 765,
  IconWhatICanDoInternalIgnoreType = 766,
  IconWhatICanDoInternalMediaType = 767,
  IconWhatICanDoInternalOwner = 768,
  IconWhatICanDoInternalType = 769,
  IconWhatICanDoName = 770,
  IconWhatICanDoNodeLocale = 771,
  IconWhatICanDoParentChildren = 772,
  IconWhatICanDoParentId = 773,
  IconWhatICanDoSortKey = 774,
  IconWhatICanDoSpaceId = 775,
  IconWhatICanDoSubName = 776,
  IconWhatICanDoSysRevision = 777,
  IconWhatICanDoSysType = 778,
  IconWhatICanDoUpdatedAt = 779,
  Id = 780,
  ImageChildren = 781,
  ImageChildrenChildren = 782,
  ImageChildrenChildrenChildren = 783,
  ImageChildrenChildrenId = 784,
  ImageChildrenId = 785,
  ImageChildrenInternalContent = 786,
  ImageChildrenInternalContentDigest = 787,
  ImageChildrenInternalDescription = 788,
  ImageChildrenInternalFieldOwners = 789,
  ImageChildrenInternalIgnoreType = 790,
  ImageChildrenInternalMediaType = 791,
  ImageChildrenInternalOwner = 792,
  ImageChildrenInternalType = 793,
  ImageChildrenParentChildren = 794,
  ImageChildrenParentId = 795,
  ImageContentfulId = 796,
  ImageCreatedAt = 797,
  ImageDescription = 798,
  ImageFieldsLocalFile = 799,
  ImageFileContentType = 800,
  ImageFileDetailsSize = 801,
  ImageFileFileName = 802,
  ImageFileUrl = 803,
  ImageGatsbyImageData = 804,
  ImageId = 805,
  ImageInternalContent = 806,
  ImageInternalContentDigest = 807,
  ImageInternalDescription = 808,
  ImageInternalFieldOwners = 809,
  ImageInternalIgnoreType = 810,
  ImageInternalMediaType = 811,
  ImageInternalOwner = 812,
  ImageInternalType = 813,
  ImageLocalFileAbsolutePath = 814,
  ImageLocalFileAccessTime = 815,
  ImageLocalFileAtime = 816,
  ImageLocalFileAtimeMs = 817,
  ImageLocalFileBase = 818,
  ImageLocalFileBirthTime = 819,
  ImageLocalFileBirthtime = 820,
  ImageLocalFileBirthtimeMs = 821,
  ImageLocalFileBlksize = 822,
  ImageLocalFileBlocks = 823,
  ImageLocalFileChangeTime = 824,
  ImageLocalFileChildImageSharpChildren = 825,
  ImageLocalFileChildImageSharpGatsbyImageData = 826,
  ImageLocalFileChildImageSharpId = 827,
  ImageLocalFileChildLocaleChildren = 828,
  ImageLocalFileChildLocaleData = 829,
  ImageLocalFileChildLocaleFileAbsolutePath = 830,
  ImageLocalFileChildLocaleId = 831,
  ImageLocalFileChildLocaleLanguage = 832,
  ImageLocalFileChildLocaleNs = 833,
  ImageLocalFileChildren = 834,
  ImageLocalFileChildrenImageSharp = 835,
  ImageLocalFileChildrenImageSharpChildren = 836,
  ImageLocalFileChildrenImageSharpGatsbyImageData = 837,
  ImageLocalFileChildrenImageSharpId = 838,
  ImageLocalFileChildrenLocale = 839,
  ImageLocalFileChildrenLocaleChildren = 840,
  ImageLocalFileChildrenLocaleData = 841,
  ImageLocalFileChildrenLocaleFileAbsolutePath = 842,
  ImageLocalFileChildrenLocaleId = 843,
  ImageLocalFileChildrenLocaleLanguage = 844,
  ImageLocalFileChildrenLocaleNs = 845,
  ImageLocalFileChildrenChildren = 846,
  ImageLocalFileChildrenId = 847,
  ImageLocalFileCtime = 848,
  ImageLocalFileCtimeMs = 849,
  ImageLocalFileDev = 850,
  ImageLocalFileDir = 851,
  ImageLocalFileExt = 852,
  ImageLocalFileExtension = 853,
  ImageLocalFileGid = 854,
  ImageLocalFileId = 855,
  ImageLocalFileIno = 856,
  ImageLocalFileInternalContent = 857,
  ImageLocalFileInternalContentDigest = 858,
  ImageLocalFileInternalDescription = 859,
  ImageLocalFileInternalFieldOwners = 860,
  ImageLocalFileInternalIgnoreType = 861,
  ImageLocalFileInternalMediaType = 862,
  ImageLocalFileInternalOwner = 863,
  ImageLocalFileInternalType = 864,
  ImageLocalFileMode = 865,
  ImageLocalFileModifiedTime = 866,
  ImageLocalFileMtime = 867,
  ImageLocalFileMtimeMs = 868,
  ImageLocalFileName = 869,
  ImageLocalFileNlink = 870,
  ImageLocalFileParentChildren = 871,
  ImageLocalFileParentId = 872,
  ImageLocalFilePrettySize = 873,
  ImageLocalFilePublicUrl = 874,
  ImageLocalFileRdev = 875,
  ImageLocalFileRelativeDirectory = 876,
  ImageLocalFileRelativePath = 877,
  ImageLocalFileRoot = 878,
  ImageLocalFileSize = 879,
  ImageLocalFileSourceInstanceName = 880,
  ImageLocalFileUid = 881,
  ImageLocalFileUrl = 882,
  ImageNodeLocale = 883,
  ImageParentChildren = 884,
  ImageParentChildrenChildren = 885,
  ImageParentChildrenId = 886,
  ImageParentId = 887,
  ImageParentInternalContent = 888,
  ImageParentInternalContentDigest = 889,
  ImageParentInternalDescription = 890,
  ImageParentInternalFieldOwners = 891,
  ImageParentInternalIgnoreType = 892,
  ImageParentInternalMediaType = 893,
  ImageParentInternalOwner = 894,
  ImageParentInternalType = 895,
  ImageParentParentChildren = 896,
  ImageParentParentId = 897,
  ImageSpaceId = 898,
  ImageSysRevision = 899,
  ImageSysType = 900,
  ImageTitle = 901,
  ImageUpdatedAt = 902,
  InternalContent = 903,
  InternalContentDigest = 904,
  InternalDescription = 905,
  InternalFieldOwners = 906,
  InternalIgnoreType = 907,
  InternalMediaType = 908,
  InternalOwner = 909,
  InternalType = 910,
  Name = 911,
  NodeLocale = 912,
  ParentChildren = 913,
  ParentChildrenChildren = 914,
  ParentChildrenChildrenChildren = 915,
  ParentChildrenChildrenId = 916,
  ParentChildrenId = 917,
  ParentChildrenInternalContent = 918,
  ParentChildrenInternalContentDigest = 919,
  ParentChildrenInternalDescription = 920,
  ParentChildrenInternalFieldOwners = 921,
  ParentChildrenInternalIgnoreType = 922,
  ParentChildrenInternalMediaType = 923,
  ParentChildrenInternalOwner = 924,
  ParentChildrenInternalType = 925,
  ParentChildrenParentChildren = 926,
  ParentChildrenParentId = 927,
  ParentId = 928,
  ParentInternalContent = 929,
  ParentInternalContentDigest = 930,
  ParentInternalDescription = 931,
  ParentInternalFieldOwners = 932,
  ParentInternalIgnoreType = 933,
  ParentInternalMediaType = 934,
  ParentInternalOwner = 935,
  ParentInternalType = 936,
  ParentParentChildren = 937,
  ParentParentChildrenChildren = 938,
  ParentParentChildrenId = 939,
  ParentParentId = 940,
  ParentParentInternalContent = 941,
  ParentParentInternalContentDigest = 942,
  ParentParentInternalDescription = 943,
  ParentParentInternalFieldOwners = 944,
  ParentParentInternalIgnoreType = 945,
  ParentParentInternalMediaType = 946,
  ParentParentInternalOwner = 947,
  ParentParentInternalType = 948,
  ParentParentParentChildren = 949,
  ParentParentParentId = 950,
  SpaceId = 951,
  StartDate = 952,
  SubName = 953,
  SysContentTypeSysId = 954,
  SysContentTypeSysLinkType = 955,
  SysContentTypeSysType = 956,
  SysRevision = 957,
  SysType = 958,
  Tags = 959,
  TagsBlogPost = 960,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 961,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 962,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 963,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 964,
  TagsBlogPostChildren = 965,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 966,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 967,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 968,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 969,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 970,
  TagsBlogPostChildrenChildren = 971,
  TagsBlogPostChildrenId = 972,
  TagsBlogPostContentChildren = 973,
  TagsBlogPostContentChildrenMarkdownRemark = 974,
  TagsBlogPostContentContent = 975,
  TagsBlogPostContentId = 976,
  TagsBlogPostContentfulId = 977,
  TagsBlogPostCreated = 978,
  TagsBlogPostCreatedAt = 979,
  TagsBlogPostExcerpt = 980,
  TagsBlogPostId = 981,
  TagsBlogPostInternalContent = 982,
  TagsBlogPostInternalContentDigest = 983,
  TagsBlogPostInternalDescription = 984,
  TagsBlogPostInternalFieldOwners = 985,
  TagsBlogPostInternalIgnoreType = 986,
  TagsBlogPostInternalMediaType = 987,
  TagsBlogPostInternalOwner = 988,
  TagsBlogPostInternalType = 989,
  TagsBlogPostNodeLocale = 990,
  TagsBlogPostParentChildren = 991,
  TagsBlogPostParentId = 992,
  TagsBlogPostSlug = 993,
  TagsBlogPostSpaceId = 994,
  TagsBlogPostSysRevision = 995,
  TagsBlogPostSysType = 996,
  TagsBlogPostTags = 997,
  TagsBlogPostTagsBlogPost = 998,
  TagsBlogPostTagsChildren = 999,
  TagsBlogPostTagsContentfulId = 1000,
  TagsBlogPostTagsCreatedAt = 1001,
  TagsBlogPostTagsId = 1002,
  TagsBlogPostTagsLevel = 1003,
  TagsBlogPostTagsName = 1004,
  TagsBlogPostTagsNodeLocale = 1005,
  TagsBlogPostTagsOss = 1006,
  TagsBlogPostTagsProject = 1007,
  TagsBlogPostTagsSkillMap = 1008,
  TagsBlogPostTagsSpaceId = 1009,
  TagsBlogPostTagsUpdatedAt = 1010,
  TagsBlogPostTitle = 1011,
  TagsBlogPostUpdated = 1012,
  TagsBlogPostUpdatedAt = 1013,
  TagsChildren = 1014,
  TagsChildrenChildren = 1015,
  TagsChildrenChildrenChildren = 1016,
  TagsChildrenChildrenId = 1017,
  TagsChildrenId = 1018,
  TagsChildrenInternalContent = 1019,
  TagsChildrenInternalContentDigest = 1020,
  TagsChildrenInternalDescription = 1021,
  TagsChildrenInternalFieldOwners = 1022,
  TagsChildrenInternalIgnoreType = 1023,
  TagsChildrenInternalMediaType = 1024,
  TagsChildrenInternalOwner = 1025,
  TagsChildrenInternalType = 1026,
  TagsChildrenParentChildren = 1027,
  TagsChildrenParentId = 1028,
  TagsContentfulId = 1029,
  TagsCreatedAt = 1030,
  TagsId = 1031,
  TagsInternalContent = 1032,
  TagsInternalContentDigest = 1033,
  TagsInternalDescription = 1034,
  TagsInternalFieldOwners = 1035,
  TagsInternalIgnoreType = 1036,
  TagsInternalMediaType = 1037,
  TagsInternalOwner = 1038,
  TagsInternalType = 1039,
  TagsLevel = 1040,
  TagsName = 1041,
  TagsNodeLocale = 1042,
  TagsOss = 1043,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1044,
  TagsOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 1045,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1046,
  TagsOssChildContentfulOssDetailTextNodeId = 1047,
  TagsOssChildren = 1048,
  TagsOssChildrenContentfulOssDetailTextNode = 1049,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1050,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 1051,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1052,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1053,
  TagsOssChildrenChildren = 1054,
  TagsOssChildrenId = 1055,
  TagsOssContentfulId = 1056,
  TagsOssCreatedAt = 1057,
  TagsOssDetailChildren = 1058,
  TagsOssDetailChildrenMarkdownRemark = 1059,
  TagsOssDetailDetail = 1060,
  TagsOssDetailId = 1061,
  TagsOssHref = 1062,
  TagsOssIconChildren = 1063,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1064,
  TagsOssIconContact = 1065,
  TagsOssIconContentfulId = 1066,
  TagsOssIconCreatedAt = 1067,
  TagsOssIconHistory = 1068,
  TagsOssIconId = 1069,
  TagsOssIconName = 1070,
  TagsOssIconNodeLocale = 1071,
  TagsOssIconOss = 1072,
  TagsOssIconProject = 1073,
  TagsOssIconSpaceId = 1074,
  TagsOssIconUpdatedAt = 1075,
  TagsOssIconWhatICanDo = 1076,
  TagsOssId = 1077,
  TagsOssImageChildren = 1078,
  TagsOssImageContentfulId = 1079,
  TagsOssImageCreatedAt = 1080,
  TagsOssImageDescription = 1081,
  TagsOssImageGatsbyImageData = 1082,
  TagsOssImageId = 1083,
  TagsOssImageNodeLocale = 1084,
  TagsOssImageSpaceId = 1085,
  TagsOssImageTitle = 1086,
  TagsOssImageUpdatedAt = 1087,
  TagsOssInternalContent = 1088,
  TagsOssInternalContentDigest = 1089,
  TagsOssInternalDescription = 1090,
  TagsOssInternalFieldOwners = 1091,
  TagsOssInternalIgnoreType = 1092,
  TagsOssInternalMediaType = 1093,
  TagsOssInternalOwner = 1094,
  TagsOssInternalType = 1095,
  TagsOssName = 1096,
  TagsOssNodeLocale = 1097,
  TagsOssParentChildren = 1098,
  TagsOssParentId = 1099,
  TagsOssSpaceId = 1100,
  TagsOssStartDate = 1101,
  TagsOssSubName = 1102,
  TagsOssSysRevision = 1103,
  TagsOssSysType = 1104,
  TagsOssTags = 1105,
  TagsOssTagsBlogPost = 1106,
  TagsOssTagsChildren = 1107,
  TagsOssTagsContentfulId = 1108,
  TagsOssTagsCreatedAt = 1109,
  TagsOssTagsId = 1110,
  TagsOssTagsLevel = 1111,
  TagsOssTagsName = 1112,
  TagsOssTagsNodeLocale = 1113,
  TagsOssTagsOss = 1114,
  TagsOssTagsProject = 1115,
  TagsOssTagsSkillMap = 1116,
  TagsOssTagsSpaceId = 1117,
  TagsOssTagsUpdatedAt = 1118,
  TagsOssUpdatedAt = 1119,
  TagsParentChildren = 1120,
  TagsParentChildrenChildren = 1121,
  TagsParentChildrenId = 1122,
  TagsParentId = 1123,
  TagsParentInternalContent = 1124,
  TagsParentInternalContentDigest = 1125,
  TagsParentInternalDescription = 1126,
  TagsParentInternalFieldOwners = 1127,
  TagsParentInternalIgnoreType = 1128,
  TagsParentInternalMediaType = 1129,
  TagsParentInternalOwner = 1130,
  TagsParentInternalType = 1131,
  TagsParentParentChildren = 1132,
  TagsParentParentId = 1133,
  TagsProject = 1134,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1135,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1136,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1137,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1138,
  TagsProjectChildren = 1139,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1140,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1141,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1142,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1143,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1144,
  TagsProjectChildrenChildren = 1145,
  TagsProjectChildrenId = 1146,
  TagsProjectContentfulId = 1147,
  TagsProjectCreatedAt = 1148,
  TagsProjectDetailChildren = 1149,
  TagsProjectDetailChildrenMarkdownRemark = 1150,
  TagsProjectDetailDetail = 1151,
  TagsProjectDetailId = 1152,
  TagsProjectEndDate = 1153,
  TagsProjectIconChildren = 1154,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1155,
  TagsProjectIconContact = 1156,
  TagsProjectIconContentfulId = 1157,
  TagsProjectIconCreatedAt = 1158,
  TagsProjectIconHistory = 1159,
  TagsProjectIconId = 1160,
  TagsProjectIconName = 1161,
  TagsProjectIconNodeLocale = 1162,
  TagsProjectIconOss = 1163,
  TagsProjectIconProject = 1164,
  TagsProjectIconSpaceId = 1165,
  TagsProjectIconUpdatedAt = 1166,
  TagsProjectIconWhatICanDo = 1167,
  TagsProjectId = 1168,
  TagsProjectInternalContent = 1169,
  TagsProjectInternalContentDigest = 1170,
  TagsProjectInternalDescription = 1171,
  TagsProjectInternalFieldOwners = 1172,
  TagsProjectInternalIgnoreType = 1173,
  TagsProjectInternalMediaType = 1174,
  TagsProjectInternalOwner = 1175,
  TagsProjectInternalType = 1176,
  TagsProjectName = 1177,
  TagsProjectNodeLocale = 1178,
  TagsProjectParentChildren = 1179,
  TagsProjectParentId = 1180,
  TagsProjectSpaceId = 1181,
  TagsProjectStartDate = 1182,
  TagsProjectSubName = 1183,
  TagsProjectSysRevision = 1184,
  TagsProjectSysType = 1185,
  TagsProjectTags = 1186,
  TagsProjectTagsBlogPost = 1187,
  TagsProjectTagsChildren = 1188,
  TagsProjectTagsContentfulId = 1189,
  TagsProjectTagsCreatedAt = 1190,
  TagsProjectTagsId = 1191,
  TagsProjectTagsLevel = 1192,
  TagsProjectTagsName = 1193,
  TagsProjectTagsNodeLocale = 1194,
  TagsProjectTagsOss = 1195,
  TagsProjectTagsProject = 1196,
  TagsProjectTagsSkillMap = 1197,
  TagsProjectTagsSpaceId = 1198,
  TagsProjectTagsUpdatedAt = 1199,
  TagsProjectUpdatedAt = 1200,
  TagsSkillMap = 1201,
  TagsSkillMapChildren = 1202,
  TagsSkillMapChildrenChildren = 1203,
  TagsSkillMapChildrenId = 1204,
  TagsSkillMapContentfulId = 1205,
  TagsSkillMapCreatedAt = 1206,
  TagsSkillMapExpanded = 1207,
  TagsSkillMapId = 1208,
  TagsSkillMapInternalContent = 1209,
  TagsSkillMapInternalContentDigest = 1210,
  TagsSkillMapInternalDescription = 1211,
  TagsSkillMapInternalFieldOwners = 1212,
  TagsSkillMapInternalIgnoreType = 1213,
  TagsSkillMapInternalMediaType = 1214,
  TagsSkillMapInternalOwner = 1215,
  TagsSkillMapInternalType = 1216,
  TagsSkillMapName = 1217,
  TagsSkillMapNodeLocale = 1218,
  TagsSkillMapParentChildren = 1219,
  TagsSkillMapParentId = 1220,
  TagsSkillMapSkills = 1221,
  TagsSkillMapSkillsBlogPost = 1222,
  TagsSkillMapSkillsChildren = 1223,
  TagsSkillMapSkillsContentfulId = 1224,
  TagsSkillMapSkillsCreatedAt = 1225,
  TagsSkillMapSkillsId = 1226,
  TagsSkillMapSkillsLevel = 1227,
  TagsSkillMapSkillsName = 1228,
  TagsSkillMapSkillsNodeLocale = 1229,
  TagsSkillMapSkillsOss = 1230,
  TagsSkillMapSkillsProject = 1231,
  TagsSkillMapSkillsSkillMap = 1232,
  TagsSkillMapSkillsSpaceId = 1233,
  TagsSkillMapSkillsUpdatedAt = 1234,
  TagsSkillMapSortKey = 1235,
  TagsSkillMapSpaceId = 1236,
  TagsSkillMapSysRevision = 1237,
  TagsSkillMapSysType = 1238,
  TagsSkillMapUpdatedAt = 1239,
  TagsSpaceId = 1240,
  TagsSysRevision = 1241,
  TagsSysType = 1242,
  TagsUpdatedAt = 1243,
  UpdatedAt = 1244
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
  ChildContentfulProjectDetailTextNodeChildren = 29,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 30,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 31,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 32,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenId = 33,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 34,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 35,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 36,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 37,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 38,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsId = 39,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 40,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 41,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 42,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 43,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContent = 44,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 45,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalDescription = 46,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 47,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 48,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 49,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalOwner = 50,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalType = 51,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentChildren = 52,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentId = 53,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 54,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 55,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 56,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 57,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 58,
  ChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountWords = 59,
  ChildContentfulProjectDetailTextNodeChildrenChildren = 60,
  ChildContentfulProjectDetailTextNodeChildrenChildrenChildren = 61,
  ChildContentfulProjectDetailTextNodeChildrenChildrenId = 62,
  ChildContentfulProjectDetailTextNodeChildrenId = 63,
  ChildContentfulProjectDetailTextNodeChildrenInternalContent = 64,
  ChildContentfulProjectDetailTextNodeChildrenInternalContentDigest = 65,
  ChildContentfulProjectDetailTextNodeChildrenInternalDescription = 66,
  ChildContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 67,
  ChildContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 68,
  ChildContentfulProjectDetailTextNodeChildrenInternalMediaType = 69,
  ChildContentfulProjectDetailTextNodeChildrenInternalOwner = 70,
  ChildContentfulProjectDetailTextNodeChildrenInternalType = 71,
  ChildContentfulProjectDetailTextNodeChildrenParentChildren = 72,
  ChildContentfulProjectDetailTextNodeChildrenParentId = 73,
  ChildContentfulProjectDetailTextNodeDetail = 74,
  ChildContentfulProjectDetailTextNodeId = 75,
  ChildContentfulProjectDetailTextNodeInternalContent = 76,
  ChildContentfulProjectDetailTextNodeInternalContentDigest = 77,
  ChildContentfulProjectDetailTextNodeInternalDescription = 78,
  ChildContentfulProjectDetailTextNodeInternalFieldOwners = 79,
  ChildContentfulProjectDetailTextNodeInternalIgnoreType = 80,
  ChildContentfulProjectDetailTextNodeInternalMediaType = 81,
  ChildContentfulProjectDetailTextNodeInternalOwner = 82,
  ChildContentfulProjectDetailTextNodeInternalType = 83,
  ChildContentfulProjectDetailTextNodeParentChildren = 84,
  ChildContentfulProjectDetailTextNodeParentChildrenChildren = 85,
  ChildContentfulProjectDetailTextNodeParentChildrenId = 86,
  ChildContentfulProjectDetailTextNodeParentId = 87,
  ChildContentfulProjectDetailTextNodeParentInternalContent = 88,
  ChildContentfulProjectDetailTextNodeParentInternalContentDigest = 89,
  ChildContentfulProjectDetailTextNodeParentInternalDescription = 90,
  ChildContentfulProjectDetailTextNodeParentInternalFieldOwners = 91,
  ChildContentfulProjectDetailTextNodeParentInternalIgnoreType = 92,
  ChildContentfulProjectDetailTextNodeParentInternalMediaType = 93,
  ChildContentfulProjectDetailTextNodeParentInternalOwner = 94,
  ChildContentfulProjectDetailTextNodeParentInternalType = 95,
  ChildContentfulProjectDetailTextNodeParentParentChildren = 96,
  ChildContentfulProjectDetailTextNodeParentParentId = 97,
  ChildContentfulProjectDetailTextNodeSysType = 98,
  Children = 99,
  ChildrenContentfulProjectDetailTextNode = 100,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 101,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildrenChildren = 102,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildrenId = 103,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 104,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 105,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkFrontmatterTitle = 106,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 107,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsDepth = 108,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsId = 109,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadingsValue = 110,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 111,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 112,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkId = 113,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalContent = 114,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalContentDigest = 115,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalDescription = 116,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalFieldOwners = 117,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalIgnoreType = 118,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalMediaType = 119,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalOwner = 120,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkInternalType = 121,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkParentChildren = 122,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkParentId = 123,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 124,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 125,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 126,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountParagraphs = 127,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountSentences = 128,
  ChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkWordCountWords = 129,
  ChildrenContentfulProjectDetailTextNodeChildren = 130,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 131,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 132,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenChildren = 133,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildrenId = 134,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 135,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 136,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkFrontmatterTitle = 137,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 138,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsDepth = 139,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsId = 140,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadingsValue = 141,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 142,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 143,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 144,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContent = 145,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalContentDigest = 146,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalDescription = 147,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalFieldOwners = 148,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalIgnoreType = 149,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalMediaType = 150,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalOwner = 151,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkInternalType = 152,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentChildren = 153,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkParentId = 154,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 155,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 156,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 157,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountParagraphs = 158,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountSentences = 159,
  ChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkWordCountWords = 160,
  ChildrenContentfulProjectDetailTextNodeChildrenChildren = 161,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenChildren = 162,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenId = 163,
  ChildrenContentfulProjectDetailTextNodeChildrenId = 164,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContent = 165,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContentDigest = 166,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalDescription = 167,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 168,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 169,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalMediaType = 170,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalOwner = 171,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalType = 172,
  ChildrenContentfulProjectDetailTextNodeChildrenParentChildren = 173,
  ChildrenContentfulProjectDetailTextNodeChildrenParentId = 174,
  ChildrenContentfulProjectDetailTextNodeDetail = 175,
  ChildrenContentfulProjectDetailTextNodeId = 176,
  ChildrenContentfulProjectDetailTextNodeInternalContent = 177,
  ChildrenContentfulProjectDetailTextNodeInternalContentDigest = 178,
  ChildrenContentfulProjectDetailTextNodeInternalDescription = 179,
  ChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 180,
  ChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 181,
  ChildrenContentfulProjectDetailTextNodeInternalMediaType = 182,
  ChildrenContentfulProjectDetailTextNodeInternalOwner = 183,
  ChildrenContentfulProjectDetailTextNodeInternalType = 184,
  ChildrenContentfulProjectDetailTextNodeParentChildren = 185,
  ChildrenContentfulProjectDetailTextNodeParentChildrenChildren = 186,
  ChildrenContentfulProjectDetailTextNodeParentChildrenId = 187,
  ChildrenContentfulProjectDetailTextNodeParentId = 188,
  ChildrenContentfulProjectDetailTextNodeParentInternalContent = 189,
  ChildrenContentfulProjectDetailTextNodeParentInternalContentDigest = 190,
  ChildrenContentfulProjectDetailTextNodeParentInternalDescription = 191,
  ChildrenContentfulProjectDetailTextNodeParentInternalFieldOwners = 192,
  ChildrenContentfulProjectDetailTextNodeParentInternalIgnoreType = 193,
  ChildrenContentfulProjectDetailTextNodeParentInternalMediaType = 194,
  ChildrenContentfulProjectDetailTextNodeParentInternalOwner = 195,
  ChildrenContentfulProjectDetailTextNodeParentInternalType = 196,
  ChildrenContentfulProjectDetailTextNodeParentParentChildren = 197,
  ChildrenContentfulProjectDetailTextNodeParentParentId = 198,
  ChildrenContentfulProjectDetailTextNodeSysType = 199,
  ChildrenChildren = 200,
  ChildrenChildrenChildren = 201,
  ChildrenChildrenChildrenChildren = 202,
  ChildrenChildrenChildrenId = 203,
  ChildrenChildrenId = 204,
  ChildrenChildrenInternalContent = 205,
  ChildrenChildrenInternalContentDigest = 206,
  ChildrenChildrenInternalDescription = 207,
  ChildrenChildrenInternalFieldOwners = 208,
  ChildrenChildrenInternalIgnoreType = 209,
  ChildrenChildrenInternalMediaType = 210,
  ChildrenChildrenInternalOwner = 211,
  ChildrenChildrenInternalType = 212,
  ChildrenChildrenParentChildren = 213,
  ChildrenChildrenParentId = 214,
  ChildrenId = 215,
  ChildrenInternalContent = 216,
  ChildrenInternalContentDigest = 217,
  ChildrenInternalDescription = 218,
  ChildrenInternalFieldOwners = 219,
  ChildrenInternalIgnoreType = 220,
  ChildrenInternalMediaType = 221,
  ChildrenInternalOwner = 222,
  ChildrenInternalType = 223,
  ChildrenParentChildren = 224,
  ChildrenParentChildrenChildren = 225,
  ChildrenParentChildrenId = 226,
  ChildrenParentId = 227,
  ChildrenParentInternalContent = 228,
  ChildrenParentInternalContentDigest = 229,
  ChildrenParentInternalDescription = 230,
  ChildrenParentInternalFieldOwners = 231,
  ChildrenParentInternalIgnoreType = 232,
  ChildrenParentInternalMediaType = 233,
  ChildrenParentInternalOwner = 234,
  ChildrenParentInternalType = 235,
  ChildrenParentParentChildren = 236,
  ChildrenParentParentId = 237,
  ContentfulId = 238,
  CreatedAt = 239,
  DetailChildMarkdownRemarkChildren = 240,
  DetailChildMarkdownRemarkChildrenChildren = 241,
  DetailChildMarkdownRemarkChildrenId = 242,
  DetailChildMarkdownRemarkExcerpt = 243,
  DetailChildMarkdownRemarkExcerptAst = 244,
  DetailChildMarkdownRemarkFrontmatterTitle = 245,
  DetailChildMarkdownRemarkHeadings = 246,
  DetailChildMarkdownRemarkHeadingsDepth = 247,
  DetailChildMarkdownRemarkHeadingsId = 248,
  DetailChildMarkdownRemarkHeadingsValue = 249,
  DetailChildMarkdownRemarkHtml = 250,
  DetailChildMarkdownRemarkHtmlAst = 251,
  DetailChildMarkdownRemarkId = 252,
  DetailChildMarkdownRemarkInternalContent = 253,
  DetailChildMarkdownRemarkInternalContentDigest = 254,
  DetailChildMarkdownRemarkInternalDescription = 255,
  DetailChildMarkdownRemarkInternalFieldOwners = 256,
  DetailChildMarkdownRemarkInternalIgnoreType = 257,
  DetailChildMarkdownRemarkInternalMediaType = 258,
  DetailChildMarkdownRemarkInternalOwner = 259,
  DetailChildMarkdownRemarkInternalType = 260,
  DetailChildMarkdownRemarkParentChildren = 261,
  DetailChildMarkdownRemarkParentId = 262,
  DetailChildMarkdownRemarkRawMarkdownBody = 263,
  DetailChildMarkdownRemarkTableOfContents = 264,
  DetailChildMarkdownRemarkTimeToRead = 265,
  DetailChildMarkdownRemarkWordCountParagraphs = 266,
  DetailChildMarkdownRemarkWordCountSentences = 267,
  DetailChildMarkdownRemarkWordCountWords = 268,
  DetailChildren = 269,
  DetailChildrenMarkdownRemark = 270,
  DetailChildrenMarkdownRemarkChildren = 271,
  DetailChildrenMarkdownRemarkChildrenChildren = 272,
  DetailChildrenMarkdownRemarkChildrenId = 273,
  DetailChildrenMarkdownRemarkExcerpt = 274,
  DetailChildrenMarkdownRemarkExcerptAst = 275,
  DetailChildrenMarkdownRemarkFrontmatterTitle = 276,
  DetailChildrenMarkdownRemarkHeadings = 277,
  DetailChildrenMarkdownRemarkHeadingsDepth = 278,
  DetailChildrenMarkdownRemarkHeadingsId = 279,
  DetailChildrenMarkdownRemarkHeadingsValue = 280,
  DetailChildrenMarkdownRemarkHtml = 281,
  DetailChildrenMarkdownRemarkHtmlAst = 282,
  DetailChildrenMarkdownRemarkId = 283,
  DetailChildrenMarkdownRemarkInternalContent = 284,
  DetailChildrenMarkdownRemarkInternalContentDigest = 285,
  DetailChildrenMarkdownRemarkInternalDescription = 286,
  DetailChildrenMarkdownRemarkInternalFieldOwners = 287,
  DetailChildrenMarkdownRemarkInternalIgnoreType = 288,
  DetailChildrenMarkdownRemarkInternalMediaType = 289,
  DetailChildrenMarkdownRemarkInternalOwner = 290,
  DetailChildrenMarkdownRemarkInternalType = 291,
  DetailChildrenMarkdownRemarkParentChildren = 292,
  DetailChildrenMarkdownRemarkParentId = 293,
  DetailChildrenMarkdownRemarkRawMarkdownBody = 294,
  DetailChildrenMarkdownRemarkTableOfContents = 295,
  DetailChildrenMarkdownRemarkTimeToRead = 296,
  DetailChildrenMarkdownRemarkWordCountParagraphs = 297,
  DetailChildrenMarkdownRemarkWordCountSentences = 298,
  DetailChildrenMarkdownRemarkWordCountWords = 299,
  DetailChildrenChildren = 300,
  DetailChildrenChildrenChildren = 301,
  DetailChildrenChildrenId = 302,
  DetailChildrenId = 303,
  DetailChildrenInternalContent = 304,
  DetailChildrenInternalContentDigest = 305,
  DetailChildrenInternalDescription = 306,
  DetailChildrenInternalFieldOwners = 307,
  DetailChildrenInternalIgnoreType = 308,
  DetailChildrenInternalMediaType = 309,
  DetailChildrenInternalOwner = 310,
  DetailChildrenInternalType = 311,
  DetailChildrenParentChildren = 312,
  DetailChildrenParentId = 313,
  DetailDetail = 314,
  DetailId = 315,
  DetailInternalContent = 316,
  DetailInternalContentDigest = 317,
  DetailInternalDescription = 318,
  DetailInternalFieldOwners = 319,
  DetailInternalIgnoreType = 320,
  DetailInternalMediaType = 321,
  DetailInternalOwner = 322,
  DetailInternalType = 323,
  DetailParentChildren = 324,
  DetailParentChildrenChildren = 325,
  DetailParentChildrenId = 326,
  DetailParentId = 327,
  DetailParentInternalContent = 328,
  DetailParentInternalContentDigest = 329,
  DetailParentInternalDescription = 330,
  DetailParentInternalFieldOwners = 331,
  DetailParentInternalIgnoreType = 332,
  DetailParentInternalMediaType = 333,
  DetailParentInternalOwner = 334,
  DetailParentInternalType = 335,
  DetailParentParentChildren = 336,
  DetailParentParentId = 337,
  DetailSysType = 338,
  EndDate = 339,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 340,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 341,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 342,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 343,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 344,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 345,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkId = 346,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 347,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 348,
  IconChildContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 349,
  IconChildContentfulIconSvgTextNodeChildren = 350,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 351,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 352,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 353,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 354,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 355,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 356,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 357,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 358,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 359,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 360,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 361,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 362,
  IconChildContentfulIconSvgTextNodeChildrenId = 363,
  IconChildContentfulIconSvgTextNodeId = 364,
  IconChildContentfulIconSvgTextNodeInternalContent = 365,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 366,
  IconChildContentfulIconSvgTextNodeInternalDescription = 367,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 368,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 369,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 370,
  IconChildContentfulIconSvgTextNodeInternalOwner = 371,
  IconChildContentfulIconSvgTextNodeInternalType = 372,
  IconChildContentfulIconSvgTextNodeParentChildren = 373,
  IconChildContentfulIconSvgTextNodeParentId = 374,
  IconChildContentfulIconSvgTextNodeSvg = 375,
  IconChildContentfulIconSvgTextNodeSysType = 376,
  IconChildren = 377,
  IconChildrenContentfulIconSvgTextNode = 378,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 379,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 380,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 381,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 382,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 383,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 384,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 385,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 386,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 387,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 388,
  IconChildrenContentfulIconSvgTextNodeChildren = 389,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 390,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 391,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 392,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 393,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 394,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 395,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 396,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 397,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 398,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 399,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 400,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 401,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 402,
  IconChildrenContentfulIconSvgTextNodeId = 403,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 404,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 405,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 406,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 407,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 408,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 409,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 410,
  IconChildrenContentfulIconSvgTextNodeInternalType = 411,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 412,
  IconChildrenContentfulIconSvgTextNodeParentId = 413,
  IconChildrenContentfulIconSvgTextNodeSvg = 414,
  IconChildrenContentfulIconSvgTextNodeSysType = 415,
  IconChildrenChildren = 416,
  IconChildrenChildrenChildren = 417,
  IconChildrenChildrenId = 418,
  IconChildrenId = 419,
  IconChildrenInternalContent = 420,
  IconChildrenInternalContentDigest = 421,
  IconChildrenInternalDescription = 422,
  IconChildrenInternalFieldOwners = 423,
  IconChildrenInternalIgnoreType = 424,
  IconChildrenInternalMediaType = 425,
  IconChildrenInternalOwner = 426,
  IconChildrenInternalType = 427,
  IconChildrenParentChildren = 428,
  IconChildrenParentId = 429,
  IconContact = 430,
  IconContactChildren = 431,
  IconContactChildrenChildren = 432,
  IconContactChildrenId = 433,
  IconContactContentfulId = 434,
  IconContactCreatedAt = 435,
  IconContactHref = 436,
  IconContactIconSvgDarkChildren = 437,
  IconContactIconSvgDarkContentfulId = 438,
  IconContactIconSvgDarkCreatedAt = 439,
  IconContactIconSvgDarkDescription = 440,
  IconContactIconSvgDarkGatsbyImageData = 441,
  IconContactIconSvgDarkId = 442,
  IconContactIconSvgDarkNodeLocale = 443,
  IconContactIconSvgDarkSpaceId = 444,
  IconContactIconSvgDarkTitle = 445,
  IconContactIconSvgDarkUpdatedAt = 446,
  IconContactIconSvgLightChildren = 447,
  IconContactIconSvgLightContentfulId = 448,
  IconContactIconSvgLightCreatedAt = 449,
  IconContactIconSvgLightDescription = 450,
  IconContactIconSvgLightGatsbyImageData = 451,
  IconContactIconSvgLightId = 452,
  IconContactIconSvgLightNodeLocale = 453,
  IconContactIconSvgLightSpaceId = 454,
  IconContactIconSvgLightTitle = 455,
  IconContactIconSvgLightUpdatedAt = 456,
  IconContactIconChildren = 457,
  IconContactIconChildrenContentfulIconSvgTextNode = 458,
  IconContactIconContact = 459,
  IconContactIconContentfulId = 460,
  IconContactIconCreatedAt = 461,
  IconContactIconHistory = 462,
  IconContactIconId = 463,
  IconContactIconName = 464,
  IconContactIconNodeLocale = 465,
  IconContactIconOss = 466,
  IconContactIconProject = 467,
  IconContactIconSpaceId = 468,
  IconContactIconUpdatedAt = 469,
  IconContactIconWhatICanDo = 470,
  IconContactId = 471,
  IconContactInternalContent = 472,
  IconContactInternalContentDigest = 473,
  IconContactInternalDescription = 474,
  IconContactInternalFieldOwners = 475,
  IconContactInternalIgnoreType = 476,
  IconContactInternalMediaType = 477,
  IconContactInternalOwner = 478,
  IconContactInternalType = 479,
  IconContactName = 480,
  IconContactNodeLocale = 481,
  IconContactParentChildren = 482,
  IconContactParentId = 483,
  IconContactSortKey = 484,
  IconContactSpaceId = 485,
  IconContactSubName = 486,
  IconContactSysRevision = 487,
  IconContactSysType = 488,
  IconContactUpdatedAt = 489,
  IconContentfulId = 490,
  IconCreatedAt = 491,
  IconHistory = 492,
  IconHistoryChildren = 493,
  IconHistoryChildrenChildren = 494,
  IconHistoryChildrenId = 495,
  IconHistoryContentfulId = 496,
  IconHistoryCreatedAt = 497,
  IconHistoryDate = 498,
  IconHistoryIconChildren = 499,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 500,
  IconHistoryIconContact = 501,
  IconHistoryIconContentfulId = 502,
  IconHistoryIconCreatedAt = 503,
  IconHistoryIconHistory = 504,
  IconHistoryIconId = 505,
  IconHistoryIconName = 506,
  IconHistoryIconNodeLocale = 507,
  IconHistoryIconOss = 508,
  IconHistoryIconProject = 509,
  IconHistoryIconSpaceId = 510,
  IconHistoryIconUpdatedAt = 511,
  IconHistoryIconWhatICanDo = 512,
  IconHistoryId = 513,
  IconHistoryInternalContent = 514,
  IconHistoryInternalContentDigest = 515,
  IconHistoryInternalDescription = 516,
  IconHistoryInternalFieldOwners = 517,
  IconHistoryInternalIgnoreType = 518,
  IconHistoryInternalMediaType = 519,
  IconHistoryInternalOwner = 520,
  IconHistoryInternalType = 521,
  IconHistoryName = 522,
  IconHistoryNodeLocale = 523,
  IconHistoryParentChildren = 524,
  IconHistoryParentId = 525,
  IconHistorySpaceId = 526,
  IconHistorySubName = 527,
  IconHistorySysRevision = 528,
  IconHistorySysType = 529,
  IconHistoryUpdatedAt = 530,
  IconId = 531,
  IconInternalContent = 532,
  IconInternalContentDigest = 533,
  IconInternalDescription = 534,
  IconInternalFieldOwners = 535,
  IconInternalIgnoreType = 536,
  IconInternalMediaType = 537,
  IconInternalOwner = 538,
  IconInternalType = 539,
  IconName = 540,
  IconNodeLocale = 541,
  IconOss = 542,
  IconOssChildContentfulOssDetailTextNodeChildren = 543,
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 544,
  IconOssChildContentfulOssDetailTextNodeDetail = 545,
  IconOssChildContentfulOssDetailTextNodeId = 546,
  IconOssChildren = 547,
  IconOssChildrenContentfulOssDetailTextNode = 548,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 549,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 550,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 551,
  IconOssChildrenContentfulOssDetailTextNodeId = 552,
  IconOssChildrenChildren = 553,
  IconOssChildrenId = 554,
  IconOssContentfulId = 555,
  IconOssCreatedAt = 556,
  IconOssDetailChildren = 557,
  IconOssDetailChildrenMarkdownRemark = 558,
  IconOssDetailDetail = 559,
  IconOssDetailId = 560,
  IconOssHref = 561,
  IconOssIconChildren = 562,
  IconOssIconChildrenContentfulIconSvgTextNode = 563,
  IconOssIconContact = 564,
  IconOssIconContentfulId = 565,
  IconOssIconCreatedAt = 566,
  IconOssIconHistory = 567,
  IconOssIconId = 568,
  IconOssIconName = 569,
  IconOssIconNodeLocale = 570,
  IconOssIconOss = 571,
  IconOssIconProject = 572,
  IconOssIconSpaceId = 573,
  IconOssIconUpdatedAt = 574,
  IconOssIconWhatICanDo = 575,
  IconOssId = 576,
  IconOssImageChildren = 577,
  IconOssImageContentfulId = 578,
  IconOssImageCreatedAt = 579,
  IconOssImageDescription = 580,
  IconOssImageGatsbyImageData = 581,
  IconOssImageId = 582,
  IconOssImageNodeLocale = 583,
  IconOssImageSpaceId = 584,
  IconOssImageTitle = 585,
  IconOssImageUpdatedAt = 586,
  IconOssInternalContent = 587,
  IconOssInternalContentDigest = 588,
  IconOssInternalDescription = 589,
  IconOssInternalFieldOwners = 590,
  IconOssInternalIgnoreType = 591,
  IconOssInternalMediaType = 592,
  IconOssInternalOwner = 593,
  IconOssInternalType = 594,
  IconOssName = 595,
  IconOssNodeLocale = 596,
  IconOssParentChildren = 597,
  IconOssParentId = 598,
  IconOssSpaceId = 599,
  IconOssStartDate = 600,
  IconOssSubName = 601,
  IconOssSysRevision = 602,
  IconOssSysType = 603,
  IconOssTags = 604,
  IconOssTagsBlogPost = 605,
  IconOssTagsChildren = 606,
  IconOssTagsContentfulId = 607,
  IconOssTagsCreatedAt = 608,
  IconOssTagsId = 609,
  IconOssTagsLevel = 610,
  IconOssTagsName = 611,
  IconOssTagsNodeLocale = 612,
  IconOssTagsOss = 613,
  IconOssTagsProject = 614,
  IconOssTagsSkillMap = 615,
  IconOssTagsSpaceId = 616,
  IconOssTagsUpdatedAt = 617,
  IconOssUpdatedAt = 618,
  IconParentChildren = 619,
  IconParentChildrenChildren = 620,
  IconParentChildrenId = 621,
  IconParentId = 622,
  IconParentInternalContent = 623,
  IconParentInternalContentDigest = 624,
  IconParentInternalDescription = 625,
  IconParentInternalFieldOwners = 626,
  IconParentInternalIgnoreType = 627,
  IconParentInternalMediaType = 628,
  IconParentInternalOwner = 629,
  IconParentInternalType = 630,
  IconParentParentChildren = 631,
  IconParentParentId = 632,
  IconProject = 633,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 634,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 635,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 636,
  IconProjectChildContentfulProjectDetailTextNodeId = 637,
  IconProjectChildren = 638,
  IconProjectChildrenContentfulProjectDetailTextNode = 639,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 640,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 641,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 642,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 643,
  IconProjectChildrenChildren = 644,
  IconProjectChildrenId = 645,
  IconProjectContentfulId = 646,
  IconProjectCreatedAt = 647,
  IconProjectDetailChildren = 648,
  IconProjectDetailChildrenMarkdownRemark = 649,
  IconProjectDetailDetail = 650,
  IconProjectDetailId = 651,
  IconProjectEndDate = 652,
  IconProjectIconChildren = 653,
  IconProjectIconChildrenContentfulIconSvgTextNode = 654,
  IconProjectIconContact = 655,
  IconProjectIconContentfulId = 656,
  IconProjectIconCreatedAt = 657,
  IconProjectIconHistory = 658,
  IconProjectIconId = 659,
  IconProjectIconName = 660,
  IconProjectIconNodeLocale = 661,
  IconProjectIconOss = 662,
  IconProjectIconProject = 663,
  IconProjectIconSpaceId = 664,
  IconProjectIconUpdatedAt = 665,
  IconProjectIconWhatICanDo = 666,
  IconProjectId = 667,
  IconProjectInternalContent = 668,
  IconProjectInternalContentDigest = 669,
  IconProjectInternalDescription = 670,
  IconProjectInternalFieldOwners = 671,
  IconProjectInternalIgnoreType = 672,
  IconProjectInternalMediaType = 673,
  IconProjectInternalOwner = 674,
  IconProjectInternalType = 675,
  IconProjectName = 676,
  IconProjectNodeLocale = 677,
  IconProjectParentChildren = 678,
  IconProjectParentId = 679,
  IconProjectSpaceId = 680,
  IconProjectStartDate = 681,
  IconProjectSubName = 682,
  IconProjectSysRevision = 683,
  IconProjectSysType = 684,
  IconProjectTags = 685,
  IconProjectTagsBlogPost = 686,
  IconProjectTagsChildren = 687,
  IconProjectTagsContentfulId = 688,
  IconProjectTagsCreatedAt = 689,
  IconProjectTagsId = 690,
  IconProjectTagsLevel = 691,
  IconProjectTagsName = 692,
  IconProjectTagsNodeLocale = 693,
  IconProjectTagsOss = 694,
  IconProjectTagsProject = 695,
  IconProjectTagsSkillMap = 696,
  IconProjectTagsSpaceId = 697,
  IconProjectTagsUpdatedAt = 698,
  IconProjectUpdatedAt = 699,
  IconSpaceId = 700,
  IconSvgChildMarkdownRemarkChildren = 701,
  IconSvgChildMarkdownRemarkExcerpt = 702,
  IconSvgChildMarkdownRemarkExcerptAst = 703,
  IconSvgChildMarkdownRemarkHeadings = 704,
  IconSvgChildMarkdownRemarkHtml = 705,
  IconSvgChildMarkdownRemarkHtmlAst = 706,
  IconSvgChildMarkdownRemarkId = 707,
  IconSvgChildMarkdownRemarkRawMarkdownBody = 708,
  IconSvgChildMarkdownRemarkTableOfContents = 709,
  IconSvgChildMarkdownRemarkTimeToRead = 710,
  IconSvgChildren = 711,
  IconSvgChildrenMarkdownRemark = 712,
  IconSvgChildrenMarkdownRemarkChildren = 713,
  IconSvgChildrenMarkdownRemarkExcerpt = 714,
  IconSvgChildrenMarkdownRemarkExcerptAst = 715,
  IconSvgChildrenMarkdownRemarkHeadings = 716,
  IconSvgChildrenMarkdownRemarkHtml = 717,
  IconSvgChildrenMarkdownRemarkHtmlAst = 718,
  IconSvgChildrenMarkdownRemarkId = 719,
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 720,
  IconSvgChildrenMarkdownRemarkTableOfContents = 721,
  IconSvgChildrenMarkdownRemarkTimeToRead = 722,
  IconSvgChildrenChildren = 723,
  IconSvgChildrenId = 724,
  IconSvgId = 725,
  IconSvgInternalContent = 726,
  IconSvgInternalContentDigest = 727,
  IconSvgInternalDescription = 728,
  IconSvgInternalFieldOwners = 729,
  IconSvgInternalIgnoreType = 730,
  IconSvgInternalMediaType = 731,
  IconSvgInternalOwner = 732,
  IconSvgInternalType = 733,
  IconSvgParentChildren = 734,
  IconSvgParentId = 735,
  IconSvgSvg = 736,
  IconSvgSysType = 737,
  IconSysRevision = 738,
  IconSysType = 739,
  IconUpdatedAt = 740,
  IconWhatICanDo = 741,
  IconWhatICanDoChildren = 742,
  IconWhatICanDoChildrenChildren = 743,
  IconWhatICanDoChildrenId = 744,
  IconWhatICanDoContentfulId = 745,
  IconWhatICanDoCreatedAt = 746,
  IconWhatICanDoIconChildren = 747,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 748,
  IconWhatICanDoIconContact = 749,
  IconWhatICanDoIconContentfulId = 750,
  IconWhatICanDoIconCreatedAt = 751,
  IconWhatICanDoIconHistory = 752,
  IconWhatICanDoIconId = 753,
  IconWhatICanDoIconName = 754,
  IconWhatICanDoIconNodeLocale = 755,
  IconWhatICanDoIconOss = 756,
  IconWhatICanDoIconProject = 757,
  IconWhatICanDoIconSpaceId = 758,
  IconWhatICanDoIconUpdatedAt = 759,
  IconWhatICanDoIconWhatICanDo = 760,
  IconWhatICanDoId = 761,
  IconWhatICanDoInternalContent = 762,
  IconWhatICanDoInternalContentDigest = 763,
  IconWhatICanDoInternalDescription = 764,
  IconWhatICanDoInternalFieldOwners = 765,
  IconWhatICanDoInternalIgnoreType = 766,
  IconWhatICanDoInternalMediaType = 767,
  IconWhatICanDoInternalOwner = 768,
  IconWhatICanDoInternalType = 769,
  IconWhatICanDoName = 770,
  IconWhatICanDoNodeLocale = 771,
  IconWhatICanDoParentChildren = 772,
  IconWhatICanDoParentId = 773,
  IconWhatICanDoSortKey = 774,
  IconWhatICanDoSpaceId = 775,
  IconWhatICanDoSubName = 776,
  IconWhatICanDoSysRevision = 777,
  IconWhatICanDoSysType = 778,
  IconWhatICanDoUpdatedAt = 779,
  Id = 780,
  InternalContent = 781,
  InternalContentDigest = 782,
  InternalDescription = 783,
  InternalFieldOwners = 784,
  InternalIgnoreType = 785,
  InternalMediaType = 786,
  InternalOwner = 787,
  InternalType = 788,
  Name = 789,
  NodeLocale = 790,
  ParentChildren = 791,
  ParentChildrenChildren = 792,
  ParentChildrenChildrenChildren = 793,
  ParentChildrenChildrenId = 794,
  ParentChildrenId = 795,
  ParentChildrenInternalContent = 796,
  ParentChildrenInternalContentDigest = 797,
  ParentChildrenInternalDescription = 798,
  ParentChildrenInternalFieldOwners = 799,
  ParentChildrenInternalIgnoreType = 800,
  ParentChildrenInternalMediaType = 801,
  ParentChildrenInternalOwner = 802,
  ParentChildrenInternalType = 803,
  ParentChildrenParentChildren = 804,
  ParentChildrenParentId = 805,
  ParentId = 806,
  ParentInternalContent = 807,
  ParentInternalContentDigest = 808,
  ParentInternalDescription = 809,
  ParentInternalFieldOwners = 810,
  ParentInternalIgnoreType = 811,
  ParentInternalMediaType = 812,
  ParentInternalOwner = 813,
  ParentInternalType = 814,
  ParentParentChildren = 815,
  ParentParentChildrenChildren = 816,
  ParentParentChildrenId = 817,
  ParentParentId = 818,
  ParentParentInternalContent = 819,
  ParentParentInternalContentDigest = 820,
  ParentParentInternalDescription = 821,
  ParentParentInternalFieldOwners = 822,
  ParentParentInternalIgnoreType = 823,
  ParentParentInternalMediaType = 824,
  ParentParentInternalOwner = 825,
  ParentParentInternalType = 826,
  ParentParentParentChildren = 827,
  ParentParentParentId = 828,
  SpaceId = 829,
  StartDate = 830,
  SubName = 831,
  SysContentTypeSysId = 832,
  SysContentTypeSysLinkType = 833,
  SysContentTypeSysType = 834,
  SysRevision = 835,
  SysType = 836,
  Tags = 837,
  TagsBlogPost = 838,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 839,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 840,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 841,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 842,
  TagsBlogPostChildren = 843,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 844,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 845,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 846,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 847,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 848,
  TagsBlogPostChildrenChildren = 849,
  TagsBlogPostChildrenId = 850,
  TagsBlogPostContentChildren = 851,
  TagsBlogPostContentChildrenMarkdownRemark = 852,
  TagsBlogPostContentContent = 853,
  TagsBlogPostContentId = 854,
  TagsBlogPostContentfulId = 855,
  TagsBlogPostCreated = 856,
  TagsBlogPostCreatedAt = 857,
  TagsBlogPostExcerpt = 858,
  TagsBlogPostId = 859,
  TagsBlogPostInternalContent = 860,
  TagsBlogPostInternalContentDigest = 861,
  TagsBlogPostInternalDescription = 862,
  TagsBlogPostInternalFieldOwners = 863,
  TagsBlogPostInternalIgnoreType = 864,
  TagsBlogPostInternalMediaType = 865,
  TagsBlogPostInternalOwner = 866,
  TagsBlogPostInternalType = 867,
  TagsBlogPostNodeLocale = 868,
  TagsBlogPostParentChildren = 869,
  TagsBlogPostParentId = 870,
  TagsBlogPostSlug = 871,
  TagsBlogPostSpaceId = 872,
  TagsBlogPostSysRevision = 873,
  TagsBlogPostSysType = 874,
  TagsBlogPostTags = 875,
  TagsBlogPostTagsBlogPost = 876,
  TagsBlogPostTagsChildren = 877,
  TagsBlogPostTagsContentfulId = 878,
  TagsBlogPostTagsCreatedAt = 879,
  TagsBlogPostTagsId = 880,
  TagsBlogPostTagsLevel = 881,
  TagsBlogPostTagsName = 882,
  TagsBlogPostTagsNodeLocale = 883,
  TagsBlogPostTagsOss = 884,
  TagsBlogPostTagsProject = 885,
  TagsBlogPostTagsSkillMap = 886,
  TagsBlogPostTagsSpaceId = 887,
  TagsBlogPostTagsUpdatedAt = 888,
  TagsBlogPostTitle = 889,
  TagsBlogPostUpdated = 890,
  TagsBlogPostUpdatedAt = 891,
  TagsChildren = 892,
  TagsChildrenChildren = 893,
  TagsChildrenChildrenChildren = 894,
  TagsChildrenChildrenId = 895,
  TagsChildrenId = 896,
  TagsChildrenInternalContent = 897,
  TagsChildrenInternalContentDigest = 898,
  TagsChildrenInternalDescription = 899,
  TagsChildrenInternalFieldOwners = 900,
  TagsChildrenInternalIgnoreType = 901,
  TagsChildrenInternalMediaType = 902,
  TagsChildrenInternalOwner = 903,
  TagsChildrenInternalType = 904,
  TagsChildrenParentChildren = 905,
  TagsChildrenParentId = 906,
  TagsContentfulId = 907,
  TagsCreatedAt = 908,
  TagsId = 909,
  TagsInternalContent = 910,
  TagsInternalContentDigest = 911,
  TagsInternalDescription = 912,
  TagsInternalFieldOwners = 913,
  TagsInternalIgnoreType = 914,
  TagsInternalMediaType = 915,
  TagsInternalOwner = 916,
  TagsInternalType = 917,
  TagsLevel = 918,
  TagsName = 919,
  TagsNodeLocale = 920,
  TagsOss = 921,
  TagsOssChildContentfulOssDetailTextNodeChildren = 922,
  TagsOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 923,
  TagsOssChildContentfulOssDetailTextNodeDetail = 924,
  TagsOssChildContentfulOssDetailTextNodeId = 925,
  TagsOssChildren = 926,
  TagsOssChildrenContentfulOssDetailTextNode = 927,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 928,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 929,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 930,
  TagsOssChildrenContentfulOssDetailTextNodeId = 931,
  TagsOssChildrenChildren = 932,
  TagsOssChildrenId = 933,
  TagsOssContentfulId = 934,
  TagsOssCreatedAt = 935,
  TagsOssDetailChildren = 936,
  TagsOssDetailChildrenMarkdownRemark = 937,
  TagsOssDetailDetail = 938,
  TagsOssDetailId = 939,
  TagsOssHref = 940,
  TagsOssIconChildren = 941,
  TagsOssIconChildrenContentfulIconSvgTextNode = 942,
  TagsOssIconContact = 943,
  TagsOssIconContentfulId = 944,
  TagsOssIconCreatedAt = 945,
  TagsOssIconHistory = 946,
  TagsOssIconId = 947,
  TagsOssIconName = 948,
  TagsOssIconNodeLocale = 949,
  TagsOssIconOss = 950,
  TagsOssIconProject = 951,
  TagsOssIconSpaceId = 952,
  TagsOssIconUpdatedAt = 953,
  TagsOssIconWhatICanDo = 954,
  TagsOssId = 955,
  TagsOssImageChildren = 956,
  TagsOssImageContentfulId = 957,
  TagsOssImageCreatedAt = 958,
  TagsOssImageDescription = 959,
  TagsOssImageGatsbyImageData = 960,
  TagsOssImageId = 961,
  TagsOssImageNodeLocale = 962,
  TagsOssImageSpaceId = 963,
  TagsOssImageTitle = 964,
  TagsOssImageUpdatedAt = 965,
  TagsOssInternalContent = 966,
  TagsOssInternalContentDigest = 967,
  TagsOssInternalDescription = 968,
  TagsOssInternalFieldOwners = 969,
  TagsOssInternalIgnoreType = 970,
  TagsOssInternalMediaType = 971,
  TagsOssInternalOwner = 972,
  TagsOssInternalType = 973,
  TagsOssName = 974,
  TagsOssNodeLocale = 975,
  TagsOssParentChildren = 976,
  TagsOssParentId = 977,
  TagsOssSpaceId = 978,
  TagsOssStartDate = 979,
  TagsOssSubName = 980,
  TagsOssSysRevision = 981,
  TagsOssSysType = 982,
  TagsOssTags = 983,
  TagsOssTagsBlogPost = 984,
  TagsOssTagsChildren = 985,
  TagsOssTagsContentfulId = 986,
  TagsOssTagsCreatedAt = 987,
  TagsOssTagsId = 988,
  TagsOssTagsLevel = 989,
  TagsOssTagsName = 990,
  TagsOssTagsNodeLocale = 991,
  TagsOssTagsOss = 992,
  TagsOssTagsProject = 993,
  TagsOssTagsSkillMap = 994,
  TagsOssTagsSpaceId = 995,
  TagsOssTagsUpdatedAt = 996,
  TagsOssUpdatedAt = 997,
  TagsParentChildren = 998,
  TagsParentChildrenChildren = 999,
  TagsParentChildrenId = 1000,
  TagsParentId = 1001,
  TagsParentInternalContent = 1002,
  TagsParentInternalContentDigest = 1003,
  TagsParentInternalDescription = 1004,
  TagsParentInternalFieldOwners = 1005,
  TagsParentInternalIgnoreType = 1006,
  TagsParentInternalMediaType = 1007,
  TagsParentInternalOwner = 1008,
  TagsParentInternalType = 1009,
  TagsParentParentChildren = 1010,
  TagsParentParentId = 1011,
  TagsProject = 1012,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1013,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1014,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1015,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1016,
  TagsProjectChildren = 1017,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1018,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1019,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 1020,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1021,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1022,
  TagsProjectChildrenChildren = 1023,
  TagsProjectChildrenId = 1024,
  TagsProjectContentfulId = 1025,
  TagsProjectCreatedAt = 1026,
  TagsProjectDetailChildren = 1027,
  TagsProjectDetailChildrenMarkdownRemark = 1028,
  TagsProjectDetailDetail = 1029,
  TagsProjectDetailId = 1030,
  TagsProjectEndDate = 1031,
  TagsProjectIconChildren = 1032,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1033,
  TagsProjectIconContact = 1034,
  TagsProjectIconContentfulId = 1035,
  TagsProjectIconCreatedAt = 1036,
  TagsProjectIconHistory = 1037,
  TagsProjectIconId = 1038,
  TagsProjectIconName = 1039,
  TagsProjectIconNodeLocale = 1040,
  TagsProjectIconOss = 1041,
  TagsProjectIconProject = 1042,
  TagsProjectIconSpaceId = 1043,
  TagsProjectIconUpdatedAt = 1044,
  TagsProjectIconWhatICanDo = 1045,
  TagsProjectId = 1046,
  TagsProjectInternalContent = 1047,
  TagsProjectInternalContentDigest = 1048,
  TagsProjectInternalDescription = 1049,
  TagsProjectInternalFieldOwners = 1050,
  TagsProjectInternalIgnoreType = 1051,
  TagsProjectInternalMediaType = 1052,
  TagsProjectInternalOwner = 1053,
  TagsProjectInternalType = 1054,
  TagsProjectName = 1055,
  TagsProjectNodeLocale = 1056,
  TagsProjectParentChildren = 1057,
  TagsProjectParentId = 1058,
  TagsProjectSpaceId = 1059,
  TagsProjectStartDate = 1060,
  TagsProjectSubName = 1061,
  TagsProjectSysRevision = 1062,
  TagsProjectSysType = 1063,
  TagsProjectTags = 1064,
  TagsProjectTagsBlogPost = 1065,
  TagsProjectTagsChildren = 1066,
  TagsProjectTagsContentfulId = 1067,
  TagsProjectTagsCreatedAt = 1068,
  TagsProjectTagsId = 1069,
  TagsProjectTagsLevel = 1070,
  TagsProjectTagsName = 1071,
  TagsProjectTagsNodeLocale = 1072,
  TagsProjectTagsOss = 1073,
  TagsProjectTagsProject = 1074,
  TagsProjectTagsSkillMap = 1075,
  TagsProjectTagsSpaceId = 1076,
  TagsProjectTagsUpdatedAt = 1077,
  TagsProjectUpdatedAt = 1078,
  TagsSkillMap = 1079,
  TagsSkillMapChildren = 1080,
  TagsSkillMapChildrenChildren = 1081,
  TagsSkillMapChildrenId = 1082,
  TagsSkillMapContentfulId = 1083,
  TagsSkillMapCreatedAt = 1084,
  TagsSkillMapExpanded = 1085,
  TagsSkillMapId = 1086,
  TagsSkillMapInternalContent = 1087,
  TagsSkillMapInternalContentDigest = 1088,
  TagsSkillMapInternalDescription = 1089,
  TagsSkillMapInternalFieldOwners = 1090,
  TagsSkillMapInternalIgnoreType = 1091,
  TagsSkillMapInternalMediaType = 1092,
  TagsSkillMapInternalOwner = 1093,
  TagsSkillMapInternalType = 1094,
  TagsSkillMapName = 1095,
  TagsSkillMapNodeLocale = 1096,
  TagsSkillMapParentChildren = 1097,
  TagsSkillMapParentId = 1098,
  TagsSkillMapSkills = 1099,
  TagsSkillMapSkillsBlogPost = 1100,
  TagsSkillMapSkillsChildren = 1101,
  TagsSkillMapSkillsContentfulId = 1102,
  TagsSkillMapSkillsCreatedAt = 1103,
  TagsSkillMapSkillsId = 1104,
  TagsSkillMapSkillsLevel = 1105,
  TagsSkillMapSkillsName = 1106,
  TagsSkillMapSkillsNodeLocale = 1107,
  TagsSkillMapSkillsOss = 1108,
  TagsSkillMapSkillsProject = 1109,
  TagsSkillMapSkillsSkillMap = 1110,
  TagsSkillMapSkillsSpaceId = 1111,
  TagsSkillMapSkillsUpdatedAt = 1112,
  TagsSkillMapSortKey = 1113,
  TagsSkillMapSpaceId = 1114,
  TagsSkillMapSysRevision = 1115,
  TagsSkillMapSysType = 1116,
  TagsSkillMapUpdatedAt = 1117,
  TagsSpaceId = 1118,
  TagsSysRevision = 1119,
  TagsSysType = 1120,
  TagsUpdatedAt = 1121,
  UpdatedAt = 1122
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
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 95,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 96,
  SkillsBlogPostChildren = 97,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 98,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 99,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 100,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 101,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 102,
  SkillsBlogPostChildrenChildren = 103,
  SkillsBlogPostChildrenId = 104,
  SkillsBlogPostContentChildren = 105,
  SkillsBlogPostContentChildrenMarkdownRemark = 106,
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
  SkillsOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 177,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 178,
  SkillsOssChildContentfulOssDetailTextNodeId = 179,
  SkillsOssChildren = 180,
  SkillsOssChildrenContentfulOssDetailTextNode = 181,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 182,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 183,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 184,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 185,
  SkillsOssChildrenChildren = 186,
  SkillsOssChildrenId = 187,
  SkillsOssContentfulId = 188,
  SkillsOssCreatedAt = 189,
  SkillsOssDetailChildren = 190,
  SkillsOssDetailChildrenMarkdownRemark = 191,
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
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 268,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 269,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 270,
  SkillsProjectChildren = 271,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 272,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 273,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 274,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 275,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 276,
  SkillsProjectChildrenChildren = 277,
  SkillsProjectChildrenId = 278,
  SkillsProjectContentfulId = 279,
  SkillsProjectCreatedAt = 280,
  SkillsProjectDetailChildren = 281,
  SkillsProjectDetailChildrenMarkdownRemark = 282,
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
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 11,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 12,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildren = 13,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerpt = 14,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerptAst = 15,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadings = 16,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtml = 17,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtmlAst = 18,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkId = 19,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkRawMarkdownBody = 20,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTableOfContents = 21,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTimeToRead = 22,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 23,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 24,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 25,
  BlogPostChildContentfulBlogPostContentTextNodeId = 26,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 27,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 28,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 29,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 30,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 31,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 32,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 33,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 34,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 35,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 36,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 37,
  BlogPostChildren = 38,
  BlogPostChildrenContentfulBlogPostContentTextNode = 39,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkChildren = 40,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerpt = 41,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkExcerptAst = 42,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHeadings = 43,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHtml = 44,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkHtmlAst = 45,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkId = 46,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkRawMarkdownBody = 47,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkTableOfContents = 48,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMarkdownRemarkTimeToRead = 49,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 50,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemark = 51,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkChildren = 52,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerpt = 53,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkExcerptAst = 54,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHeadings = 55,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtml = 56,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkHtmlAst = 57,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkId = 58,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkRawMarkdownBody = 59,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTableOfContents = 60,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMarkdownRemarkTimeToRead = 61,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 62,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 63,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 64,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 65,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 66,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 67,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 68,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 69,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 70,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 71,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 72,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 73,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 74,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 75,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 76,
  BlogPostChildrenChildren = 77,
  BlogPostChildrenChildrenChildren = 78,
  BlogPostChildrenChildrenId = 79,
  BlogPostChildrenId = 80,
  BlogPostChildrenInternalContent = 81,
  BlogPostChildrenInternalContentDigest = 82,
  BlogPostChildrenInternalDescription = 83,
  BlogPostChildrenInternalFieldOwners = 84,
  BlogPostChildrenInternalIgnoreType = 85,
  BlogPostChildrenInternalMediaType = 86,
  BlogPostChildrenInternalOwner = 87,
  BlogPostChildrenInternalType = 88,
  BlogPostChildrenParentChildren = 89,
  BlogPostChildrenParentId = 90,
  BlogPostContentChildMarkdownRemarkChildren = 91,
  BlogPostContentChildMarkdownRemarkExcerpt = 92,
  BlogPostContentChildMarkdownRemarkExcerptAst = 93,
  BlogPostContentChildMarkdownRemarkHeadings = 94,
  BlogPostContentChildMarkdownRemarkHtml = 95,
  BlogPostContentChildMarkdownRemarkHtmlAst = 96,
  BlogPostContentChildMarkdownRemarkId = 97,
  BlogPostContentChildMarkdownRemarkRawMarkdownBody = 98,
  BlogPostContentChildMarkdownRemarkTableOfContents = 99,
  BlogPostContentChildMarkdownRemarkTimeToRead = 100,
  BlogPostContentChildren = 101,
  BlogPostContentChildrenMarkdownRemark = 102,
  BlogPostContentChildrenMarkdownRemarkChildren = 103,
  BlogPostContentChildrenMarkdownRemarkExcerpt = 104,
  BlogPostContentChildrenMarkdownRemarkExcerptAst = 105,
  BlogPostContentChildrenMarkdownRemarkHeadings = 106,
  BlogPostContentChildrenMarkdownRemarkHtml = 107,
  BlogPostContentChildrenMarkdownRemarkHtmlAst = 108,
  BlogPostContentChildrenMarkdownRemarkId = 109,
  BlogPostContentChildrenMarkdownRemarkRawMarkdownBody = 110,
  BlogPostContentChildrenMarkdownRemarkTableOfContents = 111,
  BlogPostContentChildrenMarkdownRemarkTimeToRead = 112,
  BlogPostContentChildrenChildren = 113,
  BlogPostContentChildrenId = 114,
  BlogPostContentContent = 115,
  BlogPostContentId = 116,
  BlogPostContentInternalContent = 117,
  BlogPostContentInternalContentDigest = 118,
  BlogPostContentInternalDescription = 119,
  BlogPostContentInternalFieldOwners = 120,
  BlogPostContentInternalIgnoreType = 121,
  BlogPostContentInternalMediaType = 122,
  BlogPostContentInternalOwner = 123,
  BlogPostContentInternalType = 124,
  BlogPostContentParentChildren = 125,
  BlogPostContentParentId = 126,
  BlogPostContentSysType = 127,
  BlogPostContentfulId = 128,
  BlogPostCreated = 129,
  BlogPostCreatedAt = 130,
  BlogPostExcerpt = 131,
  BlogPostId = 132,
  BlogPostInternalContent = 133,
  BlogPostInternalContentDigest = 134,
  BlogPostInternalDescription = 135,
  BlogPostInternalFieldOwners = 136,
  BlogPostInternalIgnoreType = 137,
  BlogPostInternalMediaType = 138,
  BlogPostInternalOwner = 139,
  BlogPostInternalType = 140,
  BlogPostNodeLocale = 141,
  BlogPostParentChildren = 142,
  BlogPostParentChildrenChildren = 143,
  BlogPostParentChildrenId = 144,
  BlogPostParentId = 145,
  BlogPostParentInternalContent = 146,
  BlogPostParentInternalContentDigest = 147,
  BlogPostParentInternalDescription = 148,
  BlogPostParentInternalFieldOwners = 149,
  BlogPostParentInternalIgnoreType = 150,
  BlogPostParentInternalMediaType = 151,
  BlogPostParentInternalOwner = 152,
  BlogPostParentInternalType = 153,
  BlogPostParentParentChildren = 154,
  BlogPostParentParentId = 155,
  BlogPostSlug = 156,
  BlogPostSpaceId = 157,
  BlogPostSysRevision = 158,
  BlogPostSysType = 159,
  BlogPostTags = 160,
  BlogPostTagsBlogPost = 161,
  BlogPostTagsBlogPostChildren = 162,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 163,
  BlogPostTagsBlogPostContentfulId = 164,
  BlogPostTagsBlogPostCreated = 165,
  BlogPostTagsBlogPostCreatedAt = 166,
  BlogPostTagsBlogPostExcerpt = 167,
  BlogPostTagsBlogPostId = 168,
  BlogPostTagsBlogPostNodeLocale = 169,
  BlogPostTagsBlogPostSlug = 170,
  BlogPostTagsBlogPostSpaceId = 171,
  BlogPostTagsBlogPostTags = 172,
  BlogPostTagsBlogPostTitle = 173,
  BlogPostTagsBlogPostUpdated = 174,
  BlogPostTagsBlogPostUpdatedAt = 175,
  BlogPostTagsChildren = 176,
  BlogPostTagsChildrenChildren = 177,
  BlogPostTagsChildrenId = 178,
  BlogPostTagsContentfulId = 179,
  BlogPostTagsCreatedAt = 180,
  BlogPostTagsId = 181,
  BlogPostTagsInternalContent = 182,
  BlogPostTagsInternalContentDigest = 183,
  BlogPostTagsInternalDescription = 184,
  BlogPostTagsInternalFieldOwners = 185,
  BlogPostTagsInternalIgnoreType = 186,
  BlogPostTagsInternalMediaType = 187,
  BlogPostTagsInternalOwner = 188,
  BlogPostTagsInternalType = 189,
  BlogPostTagsLevel = 190,
  BlogPostTagsName = 191,
  BlogPostTagsNodeLocale = 192,
  BlogPostTagsOss = 193,
  BlogPostTagsOssChildren = 194,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 195,
  BlogPostTagsOssContentfulId = 196,
  BlogPostTagsOssCreatedAt = 197,
  BlogPostTagsOssHref = 198,
  BlogPostTagsOssId = 199,
  BlogPostTagsOssName = 200,
  BlogPostTagsOssNodeLocale = 201,
  BlogPostTagsOssSpaceId = 202,
  BlogPostTagsOssStartDate = 203,
  BlogPostTagsOssSubName = 204,
  BlogPostTagsOssTags = 205,
  BlogPostTagsOssUpdatedAt = 206,
  BlogPostTagsParentChildren = 207,
  BlogPostTagsParentId = 208,
  BlogPostTagsProject = 209,
  BlogPostTagsProjectChildren = 210,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 211,
  BlogPostTagsProjectContentfulId = 212,
  BlogPostTagsProjectCreatedAt = 213,
  BlogPostTagsProjectEndDate = 214,
  BlogPostTagsProjectId = 215,
  BlogPostTagsProjectName = 216,
  BlogPostTagsProjectNodeLocale = 217,
  BlogPostTagsProjectSpaceId = 218,
  BlogPostTagsProjectStartDate = 219,
  BlogPostTagsProjectSubName = 220,
  BlogPostTagsProjectTags = 221,
  BlogPostTagsProjectUpdatedAt = 222,
  BlogPostTagsSkillMap = 223,
  BlogPostTagsSkillMapChildren = 224,
  BlogPostTagsSkillMapContentfulId = 225,
  BlogPostTagsSkillMapCreatedAt = 226,
  BlogPostTagsSkillMapExpanded = 227,
  BlogPostTagsSkillMapId = 228,
  BlogPostTagsSkillMapName = 229,
  BlogPostTagsSkillMapNodeLocale = 230,
  BlogPostTagsSkillMapSkills = 231,
  BlogPostTagsSkillMapSortKey = 232,
  BlogPostTagsSkillMapSpaceId = 233,
  BlogPostTagsSkillMapUpdatedAt = 234,
  BlogPostTagsSpaceId = 235,
  BlogPostTagsSysRevision = 236,
  BlogPostTagsSysType = 237,
  BlogPostTagsUpdatedAt = 238,
  BlogPostTitle = 239,
  BlogPostUpdated = 240,
  BlogPostUpdatedAt = 241,
  Children = 242,
  ChildrenChildren = 243,
  ChildrenChildrenChildren = 244,
  ChildrenChildrenChildrenChildren = 245,
  ChildrenChildrenChildrenId = 246,
  ChildrenChildrenId = 247,
  ChildrenChildrenInternalContent = 248,
  ChildrenChildrenInternalContentDigest = 249,
  ChildrenChildrenInternalDescription = 250,
  ChildrenChildrenInternalFieldOwners = 251,
  ChildrenChildrenInternalIgnoreType = 252,
  ChildrenChildrenInternalMediaType = 253,
  ChildrenChildrenInternalOwner = 254,
  ChildrenChildrenInternalType = 255,
  ChildrenChildrenParentChildren = 256,
  ChildrenChildrenParentId = 257,
  ChildrenId = 258,
  ChildrenInternalContent = 259,
  ChildrenInternalContentDigest = 260,
  ChildrenInternalDescription = 261,
  ChildrenInternalFieldOwners = 262,
  ChildrenInternalIgnoreType = 263,
  ChildrenInternalMediaType = 264,
  ChildrenInternalOwner = 265,
  ChildrenInternalType = 266,
  ChildrenParentChildren = 267,
  ChildrenParentChildrenChildren = 268,
  ChildrenParentChildrenId = 269,
  ChildrenParentId = 270,
  ChildrenParentInternalContent = 271,
  ChildrenParentInternalContentDigest = 272,
  ChildrenParentInternalDescription = 273,
  ChildrenParentInternalFieldOwners = 274,
  ChildrenParentInternalIgnoreType = 275,
  ChildrenParentInternalMediaType = 276,
  ChildrenParentInternalOwner = 277,
  ChildrenParentInternalType = 278,
  ChildrenParentParentChildren = 279,
  ChildrenParentParentId = 280,
  ContentfulId = 281,
  CreatedAt = 282,
  Id = 283,
  InternalContent = 284,
  InternalContentDigest = 285,
  InternalDescription = 286,
  InternalFieldOwners = 287,
  InternalIgnoreType = 288,
  InternalMediaType = 289,
  InternalOwner = 290,
  InternalType = 291,
  Level = 292,
  Name = 293,
  NodeLocale = 294,
  Oss = 295,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 296,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 297,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 298,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 299,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 300,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 301,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkId = 302,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 303,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 304,
  OssChildContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 305,
  OssChildContentfulOssDetailTextNodeChildren = 306,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 307,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 308,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 309,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 310,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 311,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 312,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 313,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 314,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 315,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 316,
  OssChildContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 317,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 318,
  OssChildContentfulOssDetailTextNodeChildrenId = 319,
  OssChildContentfulOssDetailTextNodeDetail = 320,
  OssChildContentfulOssDetailTextNodeId = 321,
  OssChildContentfulOssDetailTextNodeInternalContent = 322,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 323,
  OssChildContentfulOssDetailTextNodeInternalDescription = 324,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 325,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 326,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 327,
  OssChildContentfulOssDetailTextNodeInternalOwner = 328,
  OssChildContentfulOssDetailTextNodeInternalType = 329,
  OssChildContentfulOssDetailTextNodeParentChildren = 330,
  OssChildContentfulOssDetailTextNodeParentId = 331,
  OssChildContentfulOssDetailTextNodeSysType = 332,
  OssChildren = 333,
  OssChildrenContentfulOssDetailTextNode = 334,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkChildren = 335,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerpt = 336,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkExcerptAst = 337,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHeadings = 338,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtml = 339,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkHtmlAst = 340,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkId = 341,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 342,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTableOfContents = 343,
  OssChildrenContentfulOssDetailTextNodeChildMarkdownRemarkTimeToRead = 344,
  OssChildrenContentfulOssDetailTextNodeChildren = 345,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 346,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkChildren = 347,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerpt = 348,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkExcerptAst = 349,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHeadings = 350,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtml = 351,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkHtmlAst = 352,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkId = 353,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 354,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTableOfContents = 355,
  OssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemarkTimeToRead = 356,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 357,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 358,
  OssChildrenContentfulOssDetailTextNodeDetail = 359,
  OssChildrenContentfulOssDetailTextNodeId = 360,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 361,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 362,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 363,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 364,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 365,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 366,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 367,
  OssChildrenContentfulOssDetailTextNodeInternalType = 368,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 369,
  OssChildrenContentfulOssDetailTextNodeParentId = 370,
  OssChildrenContentfulOssDetailTextNodeSysType = 371,
  OssChildrenChildren = 372,
  OssChildrenChildrenChildren = 373,
  OssChildrenChildrenId = 374,
  OssChildrenId = 375,
  OssChildrenInternalContent = 376,
  OssChildrenInternalContentDigest = 377,
  OssChildrenInternalDescription = 378,
  OssChildrenInternalFieldOwners = 379,
  OssChildrenInternalIgnoreType = 380,
  OssChildrenInternalMediaType = 381,
  OssChildrenInternalOwner = 382,
  OssChildrenInternalType = 383,
  OssChildrenParentChildren = 384,
  OssChildrenParentId = 385,
  OssContentfulId = 386,
  OssCreatedAt = 387,
  OssDetailChildMarkdownRemarkChildren = 388,
  OssDetailChildMarkdownRemarkExcerpt = 389,
  OssDetailChildMarkdownRemarkExcerptAst = 390,
  OssDetailChildMarkdownRemarkHeadings = 391,
  OssDetailChildMarkdownRemarkHtml = 392,
  OssDetailChildMarkdownRemarkHtmlAst = 393,
  OssDetailChildMarkdownRemarkId = 394,
  OssDetailChildMarkdownRemarkRawMarkdownBody = 395,
  OssDetailChildMarkdownRemarkTableOfContents = 396,
  OssDetailChildMarkdownRemarkTimeToRead = 397,
  OssDetailChildren = 398,
  OssDetailChildrenMarkdownRemark = 399,
  OssDetailChildrenMarkdownRemarkChildren = 400,
  OssDetailChildrenMarkdownRemarkExcerpt = 401,
  OssDetailChildrenMarkdownRemarkExcerptAst = 402,
  OssDetailChildrenMarkdownRemarkHeadings = 403,
  OssDetailChildrenMarkdownRemarkHtml = 404,
  OssDetailChildrenMarkdownRemarkHtmlAst = 405,
  OssDetailChildrenMarkdownRemarkId = 406,
  OssDetailChildrenMarkdownRemarkRawMarkdownBody = 407,
  OssDetailChildrenMarkdownRemarkTableOfContents = 408,
  OssDetailChildrenMarkdownRemarkTimeToRead = 409,
  OssDetailChildrenChildren = 410,
  OssDetailChildrenId = 411,
  OssDetailDetail = 412,
  OssDetailId = 413,
  OssDetailInternalContent = 414,
  OssDetailInternalContentDigest = 415,
  OssDetailInternalDescription = 416,
  OssDetailInternalFieldOwners = 417,
  OssDetailInternalIgnoreType = 418,
  OssDetailInternalMediaType = 419,
  OssDetailInternalOwner = 420,
  OssDetailInternalType = 421,
  OssDetailParentChildren = 422,
  OssDetailParentId = 423,
  OssDetailSysType = 424,
  OssHref = 425,
  OssIconChildContentfulIconSvgTextNodeChildren = 426,
  OssIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 427,
  OssIconChildContentfulIconSvgTextNodeId = 428,
  OssIconChildContentfulIconSvgTextNodeSvg = 429,
  OssIconChildren = 430,
  OssIconChildrenContentfulIconSvgTextNode = 431,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 432,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 433,
  OssIconChildrenContentfulIconSvgTextNodeId = 434,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 435,
  OssIconChildrenChildren = 436,
  OssIconChildrenId = 437,
  OssIconContact = 438,
  OssIconContactChildren = 439,
  OssIconContactContentfulId = 440,
  OssIconContactCreatedAt = 441,
  OssIconContactHref = 442,
  OssIconContactId = 443,
  OssIconContactName = 444,
  OssIconContactNodeLocale = 445,
  OssIconContactSortKey = 446,
  OssIconContactSpaceId = 447,
  OssIconContactSubName = 448,
  OssIconContactUpdatedAt = 449,
  OssIconContentfulId = 450,
  OssIconCreatedAt = 451,
  OssIconHistory = 452,
  OssIconHistoryChildren = 453,
  OssIconHistoryContentfulId = 454,
  OssIconHistoryCreatedAt = 455,
  OssIconHistoryDate = 456,
  OssIconHistoryId = 457,
  OssIconHistoryName = 458,
  OssIconHistoryNodeLocale = 459,
  OssIconHistorySpaceId = 460,
  OssIconHistorySubName = 461,
  OssIconHistoryUpdatedAt = 462,
  OssIconId = 463,
  OssIconInternalContent = 464,
  OssIconInternalContentDigest = 465,
  OssIconInternalDescription = 466,
  OssIconInternalFieldOwners = 467,
  OssIconInternalIgnoreType = 468,
  OssIconInternalMediaType = 469,
  OssIconInternalOwner = 470,
  OssIconInternalType = 471,
  OssIconName = 472,
  OssIconNodeLocale = 473,
  OssIconOss = 474,
  OssIconOssChildren = 475,
  OssIconOssChildrenContentfulOssDetailTextNode = 476,
  OssIconOssContentfulId = 477,
  OssIconOssCreatedAt = 478,
  OssIconOssHref = 479,
  OssIconOssId = 480,
  OssIconOssName = 481,
  OssIconOssNodeLocale = 482,
  OssIconOssSpaceId = 483,
  OssIconOssStartDate = 484,
  OssIconOssSubName = 485,
  OssIconOssTags = 486,
  OssIconOssUpdatedAt = 487,
  OssIconParentChildren = 488,
  OssIconParentId = 489,
  OssIconProject = 490,
  OssIconProjectChildren = 491,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 492,
  OssIconProjectContentfulId = 493,
  OssIconProjectCreatedAt = 494,
  OssIconProjectEndDate = 495,
  OssIconProjectId = 496,
  OssIconProjectName = 497,
  OssIconProjectNodeLocale = 498,
  OssIconProjectSpaceId = 499,
  OssIconProjectStartDate = 500,
  OssIconProjectSubName = 501,
  OssIconProjectTags = 502,
  OssIconProjectUpdatedAt = 503,
  OssIconSpaceId = 504,
  OssIconSvgChildren = 505,
  OssIconSvgChildrenMarkdownRemark = 506,
  OssIconSvgId = 507,
  OssIconSvgSvg = 508,
  OssIconSysRevision = 509,
  OssIconSysType = 510,
  OssIconUpdatedAt = 511,
  OssIconWhatICanDo = 512,
  OssIconWhatICanDoChildren = 513,
  OssIconWhatICanDoContentfulId = 514,
  OssIconWhatICanDoCreatedAt = 515,
  OssIconWhatICanDoId = 516,
  OssIconWhatICanDoName = 517,
  OssIconWhatICanDoNodeLocale = 518,
  OssIconWhatICanDoSortKey = 519,
  OssIconWhatICanDoSpaceId = 520,
  OssIconWhatICanDoSubName = 521,
  OssIconWhatICanDoUpdatedAt = 522,
  OssId = 523,
  OssImageChildren = 524,
  OssImageChildrenChildren = 525,
  OssImageChildrenId = 526,
  OssImageContentfulId = 527,
  OssImageCreatedAt = 528,
  OssImageDescription = 529,
  OssImageFieldsLocalFile = 530,
  OssImageFileContentType = 531,
  OssImageFileFileName = 532,
  OssImageFileUrl = 533,
  OssImageGatsbyImageData = 534,
  OssImageId = 535,
  OssImageInternalContent = 536,
  OssImageInternalContentDigest = 537,
  OssImageInternalDescription = 538,
  OssImageInternalFieldOwners = 539,
  OssImageInternalIgnoreType = 540,
  OssImageInternalMediaType = 541,
  OssImageInternalOwner = 542,
  OssImageInternalType = 543,
  OssImageLocalFileAbsolutePath = 544,
  OssImageLocalFileAccessTime = 545,
  OssImageLocalFileAtime = 546,
  OssImageLocalFileAtimeMs = 547,
  OssImageLocalFileBase = 548,
  OssImageLocalFileBirthTime = 549,
  OssImageLocalFileBirthtime = 550,
  OssImageLocalFileBirthtimeMs = 551,
  OssImageLocalFileBlksize = 552,
  OssImageLocalFileBlocks = 553,
  OssImageLocalFileChangeTime = 554,
  OssImageLocalFileChildren = 555,
  OssImageLocalFileChildrenImageSharp = 556,
  OssImageLocalFileChildrenLocale = 557,
  OssImageLocalFileCtime = 558,
  OssImageLocalFileCtimeMs = 559,
  OssImageLocalFileDev = 560,
  OssImageLocalFileDir = 561,
  OssImageLocalFileExt = 562,
  OssImageLocalFileExtension = 563,
  OssImageLocalFileGid = 564,
  OssImageLocalFileId = 565,
  OssImageLocalFileIno = 566,
  OssImageLocalFileMode = 567,
  OssImageLocalFileModifiedTime = 568,
  OssImageLocalFileMtime = 569,
  OssImageLocalFileMtimeMs = 570,
  OssImageLocalFileName = 571,
  OssImageLocalFileNlink = 572,
  OssImageLocalFilePrettySize = 573,
  OssImageLocalFilePublicUrl = 574,
  OssImageLocalFileRdev = 575,
  OssImageLocalFileRelativeDirectory = 576,
  OssImageLocalFileRelativePath = 577,
  OssImageLocalFileRoot = 578,
  OssImageLocalFileSize = 579,
  OssImageLocalFileSourceInstanceName = 580,
  OssImageLocalFileUid = 581,
  OssImageLocalFileUrl = 582,
  OssImageNodeLocale = 583,
  OssImageParentChildren = 584,
  OssImageParentId = 585,
  OssImageSpaceId = 586,
  OssImageSysRevision = 587,
  OssImageSysType = 588,
  OssImageTitle = 589,
  OssImageUpdatedAt = 590,
  OssInternalContent = 591,
  OssInternalContentDigest = 592,
  OssInternalDescription = 593,
  OssInternalFieldOwners = 594,
  OssInternalIgnoreType = 595,
  OssInternalMediaType = 596,
  OssInternalOwner = 597,
  OssInternalType = 598,
  OssName = 599,
  OssNodeLocale = 600,
  OssParentChildren = 601,
  OssParentChildrenChildren = 602,
  OssParentChildrenId = 603,
  OssParentId = 604,
  OssParentInternalContent = 605,
  OssParentInternalContentDigest = 606,
  OssParentInternalDescription = 607,
  OssParentInternalFieldOwners = 608,
  OssParentInternalIgnoreType = 609,
  OssParentInternalMediaType = 610,
  OssParentInternalOwner = 611,
  OssParentInternalType = 612,
  OssParentParentChildren = 613,
  OssParentParentId = 614,
  OssSpaceId = 615,
  OssStartDate = 616,
  OssSubName = 617,
  OssSysRevision = 618,
  OssSysType = 619,
  OssTags = 620,
  OssTagsBlogPost = 621,
  OssTagsBlogPostChildren = 622,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 623,
  OssTagsBlogPostContentfulId = 624,
  OssTagsBlogPostCreated = 625,
  OssTagsBlogPostCreatedAt = 626,
  OssTagsBlogPostExcerpt = 627,
  OssTagsBlogPostId = 628,
  OssTagsBlogPostNodeLocale = 629,
  OssTagsBlogPostSlug = 630,
  OssTagsBlogPostSpaceId = 631,
  OssTagsBlogPostTags = 632,
  OssTagsBlogPostTitle = 633,
  OssTagsBlogPostUpdated = 634,
  OssTagsBlogPostUpdatedAt = 635,
  OssTagsChildren = 636,
  OssTagsChildrenChildren = 637,
  OssTagsChildrenId = 638,
  OssTagsContentfulId = 639,
  OssTagsCreatedAt = 640,
  OssTagsId = 641,
  OssTagsInternalContent = 642,
  OssTagsInternalContentDigest = 643,
  OssTagsInternalDescription = 644,
  OssTagsInternalFieldOwners = 645,
  OssTagsInternalIgnoreType = 646,
  OssTagsInternalMediaType = 647,
  OssTagsInternalOwner = 648,
  OssTagsInternalType = 649,
  OssTagsLevel = 650,
  OssTagsName = 651,
  OssTagsNodeLocale = 652,
  OssTagsOss = 653,
  OssTagsOssChildren = 654,
  OssTagsOssChildrenContentfulOssDetailTextNode = 655,
  OssTagsOssContentfulId = 656,
  OssTagsOssCreatedAt = 657,
  OssTagsOssHref = 658,
  OssTagsOssId = 659,
  OssTagsOssName = 660,
  OssTagsOssNodeLocale = 661,
  OssTagsOssSpaceId = 662,
  OssTagsOssStartDate = 663,
  OssTagsOssSubName = 664,
  OssTagsOssTags = 665,
  OssTagsOssUpdatedAt = 666,
  OssTagsParentChildren = 667,
  OssTagsParentId = 668,
  OssTagsProject = 669,
  OssTagsProjectChildren = 670,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 671,
  OssTagsProjectContentfulId = 672,
  OssTagsProjectCreatedAt = 673,
  OssTagsProjectEndDate = 674,
  OssTagsProjectId = 675,
  OssTagsProjectName = 676,
  OssTagsProjectNodeLocale = 677,
  OssTagsProjectSpaceId = 678,
  OssTagsProjectStartDate = 679,
  OssTagsProjectSubName = 680,
  OssTagsProjectTags = 681,
  OssTagsProjectUpdatedAt = 682,
  OssTagsSkillMap = 683,
  OssTagsSkillMapChildren = 684,
  OssTagsSkillMapContentfulId = 685,
  OssTagsSkillMapCreatedAt = 686,
  OssTagsSkillMapExpanded = 687,
  OssTagsSkillMapId = 688,
  OssTagsSkillMapName = 689,
  OssTagsSkillMapNodeLocale = 690,
  OssTagsSkillMapSkills = 691,
  OssTagsSkillMapSortKey = 692,
  OssTagsSkillMapSpaceId = 693,
  OssTagsSkillMapUpdatedAt = 694,
  OssTagsSpaceId = 695,
  OssTagsSysRevision = 696,
  OssTagsSysType = 697,
  OssTagsUpdatedAt = 698,
  OssUpdatedAt = 699,
  ParentChildren = 700,
  ParentChildrenChildren = 701,
  ParentChildrenChildrenChildren = 702,
  ParentChildrenChildrenId = 703,
  ParentChildrenId = 704,
  ParentChildrenInternalContent = 705,
  ParentChildrenInternalContentDigest = 706,
  ParentChildrenInternalDescription = 707,
  ParentChildrenInternalFieldOwners = 708,
  ParentChildrenInternalIgnoreType = 709,
  ParentChildrenInternalMediaType = 710,
  ParentChildrenInternalOwner = 711,
  ParentChildrenInternalType = 712,
  ParentChildrenParentChildren = 713,
  ParentChildrenParentId = 714,
  ParentId = 715,
  ParentInternalContent = 716,
  ParentInternalContentDigest = 717,
  ParentInternalDescription = 718,
  ParentInternalFieldOwners = 719,
  ParentInternalIgnoreType = 720,
  ParentInternalMediaType = 721,
  ParentInternalOwner = 722,
  ParentInternalType = 723,
  ParentParentChildren = 724,
  ParentParentChildrenChildren = 725,
  ParentParentChildrenId = 726,
  ParentParentId = 727,
  ParentParentInternalContent = 728,
  ParentParentInternalContentDigest = 729,
  ParentParentInternalDescription = 730,
  ParentParentInternalFieldOwners = 731,
  ParentParentInternalIgnoreType = 732,
  ParentParentInternalMediaType = 733,
  ParentParentInternalOwner = 734,
  ParentParentInternalType = 735,
  ParentParentParentChildren = 736,
  ParentParentParentId = 737,
  Project = 738,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 739,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 740,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 741,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 742,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 743,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 744,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkId = 745,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 746,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 747,
  ProjectChildContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 748,
  ProjectChildContentfulProjectDetailTextNodeChildren = 749,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 750,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 751,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 752,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 753,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 754,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 755,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 756,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 757,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 758,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 759,
  ProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 760,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 761,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 762,
  ProjectChildContentfulProjectDetailTextNodeDetail = 763,
  ProjectChildContentfulProjectDetailTextNodeId = 764,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 765,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 766,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 767,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 768,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 769,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 770,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 771,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 772,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 773,
  ProjectChildContentfulProjectDetailTextNodeParentId = 774,
  ProjectChildContentfulProjectDetailTextNodeSysType = 775,
  ProjectChildren = 776,
  ProjectChildrenContentfulProjectDetailTextNode = 777,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkChildren = 778,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerpt = 779,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkExcerptAst = 780,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHeadings = 781,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtml = 782,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkHtmlAst = 783,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkId = 784,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkRawMarkdownBody = 785,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTableOfContents = 786,
  ProjectChildrenContentfulProjectDetailTextNodeChildMarkdownRemarkTimeToRead = 787,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 788,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 789,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkChildren = 790,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerpt = 791,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkExcerptAst = 792,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHeadings = 793,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtml = 794,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkHtmlAst = 795,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkId = 796,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkRawMarkdownBody = 797,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTableOfContents = 798,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemarkTimeToRead = 799,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 800,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 801,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 802,
  ProjectChildrenContentfulProjectDetailTextNodeId = 803,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 804,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 805,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 806,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 807,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 808,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 809,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 810,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 811,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 812,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 813,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 814,
  ProjectChildrenChildren = 815,
  ProjectChildrenChildrenChildren = 816,
  ProjectChildrenChildrenId = 817,
  ProjectChildrenId = 818,
  ProjectChildrenInternalContent = 819,
  ProjectChildrenInternalContentDigest = 820,
  ProjectChildrenInternalDescription = 821,
  ProjectChildrenInternalFieldOwners = 822,
  ProjectChildrenInternalIgnoreType = 823,
  ProjectChildrenInternalMediaType = 824,
  ProjectChildrenInternalOwner = 825,
  ProjectChildrenInternalType = 826,
  ProjectChildrenParentChildren = 827,
  ProjectChildrenParentId = 828,
  ProjectContentfulId = 829,
  ProjectCreatedAt = 830,
  ProjectDetailChildMarkdownRemarkChildren = 831,
  ProjectDetailChildMarkdownRemarkExcerpt = 832,
  ProjectDetailChildMarkdownRemarkExcerptAst = 833,
  ProjectDetailChildMarkdownRemarkHeadings = 834,
  ProjectDetailChildMarkdownRemarkHtml = 835,
  ProjectDetailChildMarkdownRemarkHtmlAst = 836,
  ProjectDetailChildMarkdownRemarkId = 837,
  ProjectDetailChildMarkdownRemarkRawMarkdownBody = 838,
  ProjectDetailChildMarkdownRemarkTableOfContents = 839,
  ProjectDetailChildMarkdownRemarkTimeToRead = 840,
  ProjectDetailChildren = 841,
  ProjectDetailChildrenMarkdownRemark = 842,
  ProjectDetailChildrenMarkdownRemarkChildren = 843,
  ProjectDetailChildrenMarkdownRemarkExcerpt = 844,
  ProjectDetailChildrenMarkdownRemarkExcerptAst = 845,
  ProjectDetailChildrenMarkdownRemarkHeadings = 846,
  ProjectDetailChildrenMarkdownRemarkHtml = 847,
  ProjectDetailChildrenMarkdownRemarkHtmlAst = 848,
  ProjectDetailChildrenMarkdownRemarkId = 849,
  ProjectDetailChildrenMarkdownRemarkRawMarkdownBody = 850,
  ProjectDetailChildrenMarkdownRemarkTableOfContents = 851,
  ProjectDetailChildrenMarkdownRemarkTimeToRead = 852,
  ProjectDetailChildrenChildren = 853,
  ProjectDetailChildrenId = 854,
  ProjectDetailDetail = 855,
  ProjectDetailId = 856,
  ProjectDetailInternalContent = 857,
  ProjectDetailInternalContentDigest = 858,
  ProjectDetailInternalDescription = 859,
  ProjectDetailInternalFieldOwners = 860,
  ProjectDetailInternalIgnoreType = 861,
  ProjectDetailInternalMediaType = 862,
  ProjectDetailInternalOwner = 863,
  ProjectDetailInternalType = 864,
  ProjectDetailParentChildren = 865,
  ProjectDetailParentId = 866,
  ProjectDetailSysType = 867,
  ProjectEndDate = 868,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 869,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 870,
  ProjectIconChildContentfulIconSvgTextNodeId = 871,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 872,
  ProjectIconChildren = 873,
  ProjectIconChildrenContentfulIconSvgTextNode = 874,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 875,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 876,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 877,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 878,
  ProjectIconChildrenChildren = 879,
  ProjectIconChildrenId = 880,
  ProjectIconContact = 881,
  ProjectIconContactChildren = 882,
  ProjectIconContactContentfulId = 883,
  ProjectIconContactCreatedAt = 884,
  ProjectIconContactHref = 885,
  ProjectIconContactId = 886,
  ProjectIconContactName = 887,
  ProjectIconContactNodeLocale = 888,
  ProjectIconContactSortKey = 889,
  ProjectIconContactSpaceId = 890,
  ProjectIconContactSubName = 891,
  ProjectIconContactUpdatedAt = 892,
  ProjectIconContentfulId = 893,
  ProjectIconCreatedAt = 894,
  ProjectIconHistory = 895,
  ProjectIconHistoryChildren = 896,
  ProjectIconHistoryContentfulId = 897,
  ProjectIconHistoryCreatedAt = 898,
  ProjectIconHistoryDate = 899,
  ProjectIconHistoryId = 900,
  ProjectIconHistoryName = 901,
  ProjectIconHistoryNodeLocale = 902,
  ProjectIconHistorySpaceId = 903,
  ProjectIconHistorySubName = 904,
  ProjectIconHistoryUpdatedAt = 905,
  ProjectIconId = 906,
  ProjectIconInternalContent = 907,
  ProjectIconInternalContentDigest = 908,
  ProjectIconInternalDescription = 909,
  ProjectIconInternalFieldOwners = 910,
  ProjectIconInternalIgnoreType = 911,
  ProjectIconInternalMediaType = 912,
  ProjectIconInternalOwner = 913,
  ProjectIconInternalType = 914,
  ProjectIconName = 915,
  ProjectIconNodeLocale = 916,
  ProjectIconOss = 917,
  ProjectIconOssChildren = 918,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 919,
  ProjectIconOssContentfulId = 920,
  ProjectIconOssCreatedAt = 921,
  ProjectIconOssHref = 922,
  ProjectIconOssId = 923,
  ProjectIconOssName = 924,
  ProjectIconOssNodeLocale = 925,
  ProjectIconOssSpaceId = 926,
  ProjectIconOssStartDate = 927,
  ProjectIconOssSubName = 928,
  ProjectIconOssTags = 929,
  ProjectIconOssUpdatedAt = 930,
  ProjectIconParentChildren = 931,
  ProjectIconParentId = 932,
  ProjectIconProject = 933,
  ProjectIconProjectChildren = 934,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 935,
  ProjectIconProjectContentfulId = 936,
  ProjectIconProjectCreatedAt = 937,
  ProjectIconProjectEndDate = 938,
  ProjectIconProjectId = 939,
  ProjectIconProjectName = 940,
  ProjectIconProjectNodeLocale = 941,
  ProjectIconProjectSpaceId = 942,
  ProjectIconProjectStartDate = 943,
  ProjectIconProjectSubName = 944,
  ProjectIconProjectTags = 945,
  ProjectIconProjectUpdatedAt = 946,
  ProjectIconSpaceId = 947,
  ProjectIconSvgChildren = 948,
  ProjectIconSvgChildrenMarkdownRemark = 949,
  ProjectIconSvgId = 950,
  ProjectIconSvgSvg = 951,
  ProjectIconSysRevision = 952,
  ProjectIconSysType = 953,
  ProjectIconUpdatedAt = 954,
  ProjectIconWhatICanDo = 955,
  ProjectIconWhatICanDoChildren = 956,
  ProjectIconWhatICanDoContentfulId = 957,
  ProjectIconWhatICanDoCreatedAt = 958,
  ProjectIconWhatICanDoId = 959,
  ProjectIconWhatICanDoName = 960,
  ProjectIconWhatICanDoNodeLocale = 961,
  ProjectIconWhatICanDoSortKey = 962,
  ProjectIconWhatICanDoSpaceId = 963,
  ProjectIconWhatICanDoSubName = 964,
  ProjectIconWhatICanDoUpdatedAt = 965,
  ProjectId = 966,
  ProjectInternalContent = 967,
  ProjectInternalContentDigest = 968,
  ProjectInternalDescription = 969,
  ProjectInternalFieldOwners = 970,
  ProjectInternalIgnoreType = 971,
  ProjectInternalMediaType = 972,
  ProjectInternalOwner = 973,
  ProjectInternalType = 974,
  ProjectName = 975,
  ProjectNodeLocale = 976,
  ProjectParentChildren = 977,
  ProjectParentChildrenChildren = 978,
  ProjectParentChildrenId = 979,
  ProjectParentId = 980,
  ProjectParentInternalContent = 981,
  ProjectParentInternalContentDigest = 982,
  ProjectParentInternalDescription = 983,
  ProjectParentInternalFieldOwners = 984,
  ProjectParentInternalIgnoreType = 985,
  ProjectParentInternalMediaType = 986,
  ProjectParentInternalOwner = 987,
  ProjectParentInternalType = 988,
  ProjectParentParentChildren = 989,
  ProjectParentParentId = 990,
  ProjectSpaceId = 991,
  ProjectStartDate = 992,
  ProjectSubName = 993,
  ProjectSysRevision = 994,
  ProjectSysType = 995,
  ProjectTags = 996,
  ProjectTagsBlogPost = 997,
  ProjectTagsBlogPostChildren = 998,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 999,
  ProjectTagsBlogPostContentfulId = 1000,
  ProjectTagsBlogPostCreated = 1001,
  ProjectTagsBlogPostCreatedAt = 1002,
  ProjectTagsBlogPostExcerpt = 1003,
  ProjectTagsBlogPostId = 1004,
  ProjectTagsBlogPostNodeLocale = 1005,
  ProjectTagsBlogPostSlug = 1006,
  ProjectTagsBlogPostSpaceId = 1007,
  ProjectTagsBlogPostTags = 1008,
  ProjectTagsBlogPostTitle = 1009,
  ProjectTagsBlogPostUpdated = 1010,
  ProjectTagsBlogPostUpdatedAt = 1011,
  ProjectTagsChildren = 1012,
  ProjectTagsChildrenChildren = 1013,
  ProjectTagsChildrenId = 1014,
  ProjectTagsContentfulId = 1015,
  ProjectTagsCreatedAt = 1016,
  ProjectTagsId = 1017,
  ProjectTagsInternalContent = 1018,
  ProjectTagsInternalContentDigest = 1019,
  ProjectTagsInternalDescription = 1020,
  ProjectTagsInternalFieldOwners = 1021,
  ProjectTagsInternalIgnoreType = 1022,
  ProjectTagsInternalMediaType = 1023,
  ProjectTagsInternalOwner = 1024,
  ProjectTagsInternalType = 1025,
  ProjectTagsLevel = 1026,
  ProjectTagsName = 1027,
  ProjectTagsNodeLocale = 1028,
  ProjectTagsOss = 1029,
  ProjectTagsOssChildren = 1030,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1031,
  ProjectTagsOssContentfulId = 1032,
  ProjectTagsOssCreatedAt = 1033,
  ProjectTagsOssHref = 1034,
  ProjectTagsOssId = 1035,
  ProjectTagsOssName = 1036,
  ProjectTagsOssNodeLocale = 1037,
  ProjectTagsOssSpaceId = 1038,
  ProjectTagsOssStartDate = 1039,
  ProjectTagsOssSubName = 1040,
  ProjectTagsOssTags = 1041,
  ProjectTagsOssUpdatedAt = 1042,
  ProjectTagsParentChildren = 1043,
  ProjectTagsParentId = 1044,
  ProjectTagsProject = 1045,
  ProjectTagsProjectChildren = 1046,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1047,
  ProjectTagsProjectContentfulId = 1048,
  ProjectTagsProjectCreatedAt = 1049,
  ProjectTagsProjectEndDate = 1050,
  ProjectTagsProjectId = 1051,
  ProjectTagsProjectName = 1052,
  ProjectTagsProjectNodeLocale = 1053,
  ProjectTagsProjectSpaceId = 1054,
  ProjectTagsProjectStartDate = 1055,
  ProjectTagsProjectSubName = 1056,
  ProjectTagsProjectTags = 1057,
  ProjectTagsProjectUpdatedAt = 1058,
  ProjectTagsSkillMap = 1059,
  ProjectTagsSkillMapChildren = 1060,
  ProjectTagsSkillMapContentfulId = 1061,
  ProjectTagsSkillMapCreatedAt = 1062,
  ProjectTagsSkillMapExpanded = 1063,
  ProjectTagsSkillMapId = 1064,
  ProjectTagsSkillMapName = 1065,
  ProjectTagsSkillMapNodeLocale = 1066,
  ProjectTagsSkillMapSkills = 1067,
  ProjectTagsSkillMapSortKey = 1068,
  ProjectTagsSkillMapSpaceId = 1069,
  ProjectTagsSkillMapUpdatedAt = 1070,
  ProjectTagsSpaceId = 1071,
  ProjectTagsSysRevision = 1072,
  ProjectTagsSysType = 1073,
  ProjectTagsUpdatedAt = 1074,
  ProjectUpdatedAt = 1075,
  SkillMap = 1076,
  SkillMapChildren = 1077,
  SkillMapChildrenChildren = 1078,
  SkillMapChildrenChildrenChildren = 1079,
  SkillMapChildrenChildrenId = 1080,
  SkillMapChildrenId = 1081,
  SkillMapChildrenInternalContent = 1082,
  SkillMapChildrenInternalContentDigest = 1083,
  SkillMapChildrenInternalDescription = 1084,
  SkillMapChildrenInternalFieldOwners = 1085,
  SkillMapChildrenInternalIgnoreType = 1086,
  SkillMapChildrenInternalMediaType = 1087,
  SkillMapChildrenInternalOwner = 1088,
  SkillMapChildrenInternalType = 1089,
  SkillMapChildrenParentChildren = 1090,
  SkillMapChildrenParentId = 1091,
  SkillMapContentfulId = 1092,
  SkillMapCreatedAt = 1093,
  SkillMapExpanded = 1094,
  SkillMapId = 1095,
  SkillMapInternalContent = 1096,
  SkillMapInternalContentDigest = 1097,
  SkillMapInternalDescription = 1098,
  SkillMapInternalFieldOwners = 1099,
  SkillMapInternalIgnoreType = 1100,
  SkillMapInternalMediaType = 1101,
  SkillMapInternalOwner = 1102,
  SkillMapInternalType = 1103,
  SkillMapName = 1104,
  SkillMapNodeLocale = 1105,
  SkillMapParentChildren = 1106,
  SkillMapParentChildrenChildren = 1107,
  SkillMapParentChildrenId = 1108,
  SkillMapParentId = 1109,
  SkillMapParentInternalContent = 1110,
  SkillMapParentInternalContentDigest = 1111,
  SkillMapParentInternalDescription = 1112,
  SkillMapParentInternalFieldOwners = 1113,
  SkillMapParentInternalIgnoreType = 1114,
  SkillMapParentInternalMediaType = 1115,
  SkillMapParentInternalOwner = 1116,
  SkillMapParentInternalType = 1117,
  SkillMapParentParentChildren = 1118,
  SkillMapParentParentId = 1119,
  SkillMapSkills = 1120,
  SkillMapSkillsBlogPost = 1121,
  SkillMapSkillsBlogPostChildren = 1122,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1123,
  SkillMapSkillsBlogPostContentfulId = 1124,
  SkillMapSkillsBlogPostCreated = 1125,
  SkillMapSkillsBlogPostCreatedAt = 1126,
  SkillMapSkillsBlogPostExcerpt = 1127,
  SkillMapSkillsBlogPostId = 1128,
  SkillMapSkillsBlogPostNodeLocale = 1129,
  SkillMapSkillsBlogPostSlug = 1130,
  SkillMapSkillsBlogPostSpaceId = 1131,
  SkillMapSkillsBlogPostTags = 1132,
  SkillMapSkillsBlogPostTitle = 1133,
  SkillMapSkillsBlogPostUpdated = 1134,
  SkillMapSkillsBlogPostUpdatedAt = 1135,
  SkillMapSkillsChildren = 1136,
  SkillMapSkillsChildrenChildren = 1137,
  SkillMapSkillsChildrenId = 1138,
  SkillMapSkillsContentfulId = 1139,
  SkillMapSkillsCreatedAt = 1140,
  SkillMapSkillsId = 1141,
  SkillMapSkillsInternalContent = 1142,
  SkillMapSkillsInternalContentDigest = 1143,
  SkillMapSkillsInternalDescription = 1144,
  SkillMapSkillsInternalFieldOwners = 1145,
  SkillMapSkillsInternalIgnoreType = 1146,
  SkillMapSkillsInternalMediaType = 1147,
  SkillMapSkillsInternalOwner = 1148,
  SkillMapSkillsInternalType = 1149,
  SkillMapSkillsLevel = 1150,
  SkillMapSkillsName = 1151,
  SkillMapSkillsNodeLocale = 1152,
  SkillMapSkillsOss = 1153,
  SkillMapSkillsOssChildren = 1154,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 1155,
  SkillMapSkillsOssContentfulId = 1156,
  SkillMapSkillsOssCreatedAt = 1157,
  SkillMapSkillsOssHref = 1158,
  SkillMapSkillsOssId = 1159,
  SkillMapSkillsOssName = 1160,
  SkillMapSkillsOssNodeLocale = 1161,
  SkillMapSkillsOssSpaceId = 1162,
  SkillMapSkillsOssStartDate = 1163,
  SkillMapSkillsOssSubName = 1164,
  SkillMapSkillsOssTags = 1165,
  SkillMapSkillsOssUpdatedAt = 1166,
  SkillMapSkillsParentChildren = 1167,
  SkillMapSkillsParentId = 1168,
  SkillMapSkillsProject = 1169,
  SkillMapSkillsProjectChildren = 1170,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 1171,
  SkillMapSkillsProjectContentfulId = 1172,
  SkillMapSkillsProjectCreatedAt = 1173,
  SkillMapSkillsProjectEndDate = 1174,
  SkillMapSkillsProjectId = 1175,
  SkillMapSkillsProjectName = 1176,
  SkillMapSkillsProjectNodeLocale = 1177,
  SkillMapSkillsProjectSpaceId = 1178,
  SkillMapSkillsProjectStartDate = 1179,
  SkillMapSkillsProjectSubName = 1180,
  SkillMapSkillsProjectTags = 1181,
  SkillMapSkillsProjectUpdatedAt = 1182,
  SkillMapSkillsSkillMap = 1183,
  SkillMapSkillsSkillMapChildren = 1184,
  SkillMapSkillsSkillMapContentfulId = 1185,
  SkillMapSkillsSkillMapCreatedAt = 1186,
  SkillMapSkillsSkillMapExpanded = 1187,
  SkillMapSkillsSkillMapId = 1188,
  SkillMapSkillsSkillMapName = 1189,
  SkillMapSkillsSkillMapNodeLocale = 1190,
  SkillMapSkillsSkillMapSkills = 1191,
  SkillMapSkillsSkillMapSortKey = 1192,
  SkillMapSkillsSkillMapSpaceId = 1193,
  SkillMapSkillsSkillMapUpdatedAt = 1194,
  SkillMapSkillsSpaceId = 1195,
  SkillMapSkillsSysRevision = 1196,
  SkillMapSkillsSysType = 1197,
  SkillMapSkillsUpdatedAt = 1198,
  SkillMapSortKey = 1199,
  SkillMapSpaceId = 1200,
  SkillMapSysRevision = 1201,
  SkillMapSysType = 1202,
  SkillMapUpdatedAt = 1203,
  SpaceId = 1204,
  SysContentTypeSysId = 1205,
  SysContentTypeSysLinkType = 1206,
  SysContentTypeSysType = 1207,
  SysRevision = 1208,
  SysType = 1209,
  UpdatedAt = 1210
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
  IconChildContentfulIconSvgTextNodeChildren = 51,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemark = 52,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 53,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 54,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 55,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 56,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 57,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 58,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 59,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 60,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 61,
  IconChildContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 62,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 63,
  IconChildContentfulIconSvgTextNodeChildrenId = 64,
  IconChildContentfulIconSvgTextNodeId = 65,
  IconChildContentfulIconSvgTextNodeInternalContent = 66,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 67,
  IconChildContentfulIconSvgTextNodeInternalDescription = 68,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 69,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 70,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 71,
  IconChildContentfulIconSvgTextNodeInternalOwner = 72,
  IconChildContentfulIconSvgTextNodeInternalType = 73,
  IconChildContentfulIconSvgTextNodeParentChildren = 74,
  IconChildContentfulIconSvgTextNodeParentId = 75,
  IconChildContentfulIconSvgTextNodeSvg = 76,
  IconChildContentfulIconSvgTextNodeSysType = 77,
  IconChildren = 78,
  IconChildrenContentfulIconSvgTextNode = 79,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkChildren = 80,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerpt = 81,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkExcerptAst = 82,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHeadings = 83,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtml = 84,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkHtmlAst = 85,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkId = 86,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkRawMarkdownBody = 87,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTableOfContents = 88,
  IconChildrenContentfulIconSvgTextNodeChildMarkdownRemarkTimeToRead = 89,
  IconChildrenContentfulIconSvgTextNodeChildren = 90,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemark = 91,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkChildren = 92,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerpt = 93,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkExcerptAst = 94,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHeadings = 95,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtml = 96,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkHtmlAst = 97,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkId = 98,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkRawMarkdownBody = 99,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTableOfContents = 100,
  IconChildrenContentfulIconSvgTextNodeChildrenMarkdownRemarkTimeToRead = 101,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 102,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 103,
  IconChildrenContentfulIconSvgTextNodeId = 104,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 105,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 106,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 107,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 108,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 109,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 110,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 111,
  IconChildrenContentfulIconSvgTextNodeInternalType = 112,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 113,
  IconChildrenContentfulIconSvgTextNodeParentId = 114,
  IconChildrenContentfulIconSvgTextNodeSvg = 115,
  IconChildrenContentfulIconSvgTextNodeSysType = 116,
  IconChildrenChildren = 117,
  IconChildrenChildrenChildren = 118,
  IconChildrenChildrenId = 119,
  IconChildrenId = 120,
  IconChildrenInternalContent = 121,
  IconChildrenInternalContentDigest = 122,
  IconChildrenInternalDescription = 123,
  IconChildrenInternalFieldOwners = 124,
  IconChildrenInternalIgnoreType = 125,
  IconChildrenInternalMediaType = 126,
  IconChildrenInternalOwner = 127,
  IconChildrenInternalType = 128,
  IconChildrenParentChildren = 129,
  IconChildrenParentId = 130,
  IconContact = 131,
  IconContactChildren = 132,
  IconContactChildrenChildren = 133,
  IconContactChildrenId = 134,
  IconContactContentfulId = 135,
  IconContactCreatedAt = 136,
  IconContactHref = 137,
  IconContactIconSvgDarkChildren = 138,
  IconContactIconSvgDarkContentfulId = 139,
  IconContactIconSvgDarkCreatedAt = 140,
  IconContactIconSvgDarkDescription = 141,
  IconContactIconSvgDarkGatsbyImageData = 142,
  IconContactIconSvgDarkId = 143,
  IconContactIconSvgDarkNodeLocale = 144,
  IconContactIconSvgDarkSpaceId = 145,
  IconContactIconSvgDarkTitle = 146,
  IconContactIconSvgDarkUpdatedAt = 147,
  IconContactIconSvgLightChildren = 148,
  IconContactIconSvgLightContentfulId = 149,
  IconContactIconSvgLightCreatedAt = 150,
  IconContactIconSvgLightDescription = 151,
  IconContactIconSvgLightGatsbyImageData = 152,
  IconContactIconSvgLightId = 153,
  IconContactIconSvgLightNodeLocale = 154,
  IconContactIconSvgLightSpaceId = 155,
  IconContactIconSvgLightTitle = 156,
  IconContactIconSvgLightUpdatedAt = 157,
  IconContactIconChildren = 158,
  IconContactIconChildrenContentfulIconSvgTextNode = 159,
  IconContactIconContact = 160,
  IconContactIconContentfulId = 161,
  IconContactIconCreatedAt = 162,
  IconContactIconHistory = 163,
  IconContactIconId = 164,
  IconContactIconName = 165,
  IconContactIconNodeLocale = 166,
  IconContactIconOss = 167,
  IconContactIconProject = 168,
  IconContactIconSpaceId = 169,
  IconContactIconUpdatedAt = 170,
  IconContactIconWhatICanDo = 171,
  IconContactId = 172,
  IconContactInternalContent = 173,
  IconContactInternalContentDigest = 174,
  IconContactInternalDescription = 175,
  IconContactInternalFieldOwners = 176,
  IconContactInternalIgnoreType = 177,
  IconContactInternalMediaType = 178,
  IconContactInternalOwner = 179,
  IconContactInternalType = 180,
  IconContactName = 181,
  IconContactNodeLocale = 182,
  IconContactParentChildren = 183,
  IconContactParentId = 184,
  IconContactSortKey = 185,
  IconContactSpaceId = 186,
  IconContactSubName = 187,
  IconContactSysRevision = 188,
  IconContactSysType = 189,
  IconContactUpdatedAt = 190,
  IconContentfulId = 191,
  IconCreatedAt = 192,
  IconHistory = 193,
  IconHistoryChildren = 194,
  IconHistoryChildrenChildren = 195,
  IconHistoryChildrenId = 196,
  IconHistoryContentfulId = 197,
  IconHistoryCreatedAt = 198,
  IconHistoryDate = 199,
  IconHistoryIconChildren = 200,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 201,
  IconHistoryIconContact = 202,
  IconHistoryIconContentfulId = 203,
  IconHistoryIconCreatedAt = 204,
  IconHistoryIconHistory = 205,
  IconHistoryIconId = 206,
  IconHistoryIconName = 207,
  IconHistoryIconNodeLocale = 208,
  IconHistoryIconOss = 209,
  IconHistoryIconProject = 210,
  IconHistoryIconSpaceId = 211,
  IconHistoryIconUpdatedAt = 212,
  IconHistoryIconWhatICanDo = 213,
  IconHistoryId = 214,
  IconHistoryInternalContent = 215,
  IconHistoryInternalContentDigest = 216,
  IconHistoryInternalDescription = 217,
  IconHistoryInternalFieldOwners = 218,
  IconHistoryInternalIgnoreType = 219,
  IconHistoryInternalMediaType = 220,
  IconHistoryInternalOwner = 221,
  IconHistoryInternalType = 222,
  IconHistoryName = 223,
  IconHistoryNodeLocale = 224,
  IconHistoryParentChildren = 225,
  IconHistoryParentId = 226,
  IconHistorySpaceId = 227,
  IconHistorySubName = 228,
  IconHistorySysRevision = 229,
  IconHistorySysType = 230,
  IconHistoryUpdatedAt = 231,
  IconId = 232,
  IconInternalContent = 233,
  IconInternalContentDigest = 234,
  IconInternalDescription = 235,
  IconInternalFieldOwners = 236,
  IconInternalIgnoreType = 237,
  IconInternalMediaType = 238,
  IconInternalOwner = 239,
  IconInternalType = 240,
  IconName = 241,
  IconNodeLocale = 242,
  IconOss = 243,
  IconOssChildContentfulOssDetailTextNodeChildren = 244,
  IconOssChildContentfulOssDetailTextNodeChildrenMarkdownRemark = 245,
  IconOssChildContentfulOssDetailTextNodeDetail = 246,
  IconOssChildContentfulOssDetailTextNodeId = 247,
  IconOssChildren = 248,
  IconOssChildrenContentfulOssDetailTextNode = 249,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 250,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMarkdownRemark = 251,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 252,
  IconOssChildrenContentfulOssDetailTextNodeId = 253,
  IconOssChildrenChildren = 254,
  IconOssChildrenId = 255,
  IconOssContentfulId = 256,
  IconOssCreatedAt = 257,
  IconOssDetailChildren = 258,
  IconOssDetailChildrenMarkdownRemark = 259,
  IconOssDetailDetail = 260,
  IconOssDetailId = 261,
  IconOssHref = 262,
  IconOssIconChildren = 263,
  IconOssIconChildrenContentfulIconSvgTextNode = 264,
  IconOssIconContact = 265,
  IconOssIconContentfulId = 266,
  IconOssIconCreatedAt = 267,
  IconOssIconHistory = 268,
  IconOssIconId = 269,
  IconOssIconName = 270,
  IconOssIconNodeLocale = 271,
  IconOssIconOss = 272,
  IconOssIconProject = 273,
  IconOssIconSpaceId = 274,
  IconOssIconUpdatedAt = 275,
  IconOssIconWhatICanDo = 276,
  IconOssId = 277,
  IconOssImageChildren = 278,
  IconOssImageContentfulId = 279,
  IconOssImageCreatedAt = 280,
  IconOssImageDescription = 281,
  IconOssImageGatsbyImageData = 282,
  IconOssImageId = 283,
  IconOssImageNodeLocale = 284,
  IconOssImageSpaceId = 285,
  IconOssImageTitle = 286,
  IconOssImageUpdatedAt = 287,
  IconOssInternalContent = 288,
  IconOssInternalContentDigest = 289,
  IconOssInternalDescription = 290,
  IconOssInternalFieldOwners = 291,
  IconOssInternalIgnoreType = 292,
  IconOssInternalMediaType = 293,
  IconOssInternalOwner = 294,
  IconOssInternalType = 295,
  IconOssName = 296,
  IconOssNodeLocale = 297,
  IconOssParentChildren = 298,
  IconOssParentId = 299,
  IconOssSpaceId = 300,
  IconOssStartDate = 301,
  IconOssSubName = 302,
  IconOssSysRevision = 303,
  IconOssSysType = 304,
  IconOssTags = 305,
  IconOssTagsBlogPost = 306,
  IconOssTagsChildren = 307,
  IconOssTagsContentfulId = 308,
  IconOssTagsCreatedAt = 309,
  IconOssTagsId = 310,
  IconOssTagsLevel = 311,
  IconOssTagsName = 312,
  IconOssTagsNodeLocale = 313,
  IconOssTagsOss = 314,
  IconOssTagsProject = 315,
  IconOssTagsSkillMap = 316,
  IconOssTagsSpaceId = 317,
  IconOssTagsUpdatedAt = 318,
  IconOssUpdatedAt = 319,
  IconParentChildren = 320,
  IconParentChildrenChildren = 321,
  IconParentChildrenId = 322,
  IconParentId = 323,
  IconParentInternalContent = 324,
  IconParentInternalContentDigest = 325,
  IconParentInternalDescription = 326,
  IconParentInternalFieldOwners = 327,
  IconParentInternalIgnoreType = 328,
  IconParentInternalMediaType = 329,
  IconParentInternalOwner = 330,
  IconParentInternalType = 331,
  IconParentParentChildren = 332,
  IconParentParentId = 333,
  IconProject = 334,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 335,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMarkdownRemark = 336,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 337,
  IconProjectChildContentfulProjectDetailTextNodeId = 338,
  IconProjectChildren = 339,
  IconProjectChildrenContentfulProjectDetailTextNode = 340,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 341,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMarkdownRemark = 342,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 343,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 344,
  IconProjectChildrenChildren = 345,
  IconProjectChildrenId = 346,
  IconProjectContentfulId = 347,
  IconProjectCreatedAt = 348,
  IconProjectDetailChildren = 349,
  IconProjectDetailChildrenMarkdownRemark = 350,
  IconProjectDetailDetail = 351,
  IconProjectDetailId = 352,
  IconProjectEndDate = 353,
  IconProjectIconChildren = 354,
  IconProjectIconChildrenContentfulIconSvgTextNode = 355,
  IconProjectIconContact = 356,
  IconProjectIconContentfulId = 357,
  IconProjectIconCreatedAt = 358,
  IconProjectIconHistory = 359,
  IconProjectIconId = 360,
  IconProjectIconName = 361,
  IconProjectIconNodeLocale = 362,
  IconProjectIconOss = 363,
  IconProjectIconProject = 364,
  IconProjectIconSpaceId = 365,
  IconProjectIconUpdatedAt = 366,
  IconProjectIconWhatICanDo = 367,
  IconProjectId = 368,
  IconProjectInternalContent = 369,
  IconProjectInternalContentDigest = 370,
  IconProjectInternalDescription = 371,
  IconProjectInternalFieldOwners = 372,
  IconProjectInternalIgnoreType = 373,
  IconProjectInternalMediaType = 374,
  IconProjectInternalOwner = 375,
  IconProjectInternalType = 376,
  IconProjectName = 377,
  IconProjectNodeLocale = 378,
  IconProjectParentChildren = 379,
  IconProjectParentId = 380,
  IconProjectSpaceId = 381,
  IconProjectStartDate = 382,
  IconProjectSubName = 383,
  IconProjectSysRevision = 384,
  IconProjectSysType = 385,
  IconProjectTags = 386,
  IconProjectTagsBlogPost = 387,
  IconProjectTagsChildren = 388,
  IconProjectTagsContentfulId = 389,
  IconProjectTagsCreatedAt = 390,
  IconProjectTagsId = 391,
  IconProjectTagsLevel = 392,
  IconProjectTagsName = 393,
  IconProjectTagsNodeLocale = 394,
  IconProjectTagsOss = 395,
  IconProjectTagsProject = 396,
  IconProjectTagsSkillMap = 397,
  IconProjectTagsSpaceId = 398,
  IconProjectTagsUpdatedAt = 399,
  IconProjectUpdatedAt = 400,
  IconSpaceId = 401,
  IconSvgChildMarkdownRemarkChildren = 402,
  IconSvgChildMarkdownRemarkExcerpt = 403,
  IconSvgChildMarkdownRemarkExcerptAst = 404,
  IconSvgChildMarkdownRemarkHeadings = 405,
  IconSvgChildMarkdownRemarkHtml = 406,
  IconSvgChildMarkdownRemarkHtmlAst = 407,
  IconSvgChildMarkdownRemarkId = 408,
  IconSvgChildMarkdownRemarkRawMarkdownBody = 409,
  IconSvgChildMarkdownRemarkTableOfContents = 410,
  IconSvgChildMarkdownRemarkTimeToRead = 411,
  IconSvgChildren = 412,
  IconSvgChildrenMarkdownRemark = 413,
  IconSvgChildrenMarkdownRemarkChildren = 414,
  IconSvgChildrenMarkdownRemarkExcerpt = 415,
  IconSvgChildrenMarkdownRemarkExcerptAst = 416,
  IconSvgChildrenMarkdownRemarkHeadings = 417,
  IconSvgChildrenMarkdownRemarkHtml = 418,
  IconSvgChildrenMarkdownRemarkHtmlAst = 419,
  IconSvgChildrenMarkdownRemarkId = 420,
  IconSvgChildrenMarkdownRemarkRawMarkdownBody = 421,
  IconSvgChildrenMarkdownRemarkTableOfContents = 422,
  IconSvgChildrenMarkdownRemarkTimeToRead = 423,
  IconSvgChildrenChildren = 424,
  IconSvgChildrenId = 425,
  IconSvgId = 426,
  IconSvgInternalContent = 427,
  IconSvgInternalContentDigest = 428,
  IconSvgInternalDescription = 429,
  IconSvgInternalFieldOwners = 430,
  IconSvgInternalIgnoreType = 431,
  IconSvgInternalMediaType = 432,
  IconSvgInternalOwner = 433,
  IconSvgInternalType = 434,
  IconSvgParentChildren = 435,
  IconSvgParentId = 436,
  IconSvgSvg = 437,
  IconSvgSysType = 438,
  IconSysRevision = 439,
  IconSysType = 440,
  IconUpdatedAt = 441,
  IconWhatICanDo = 442,
  IconWhatICanDoChildren = 443,
  IconWhatICanDoChildrenChildren = 444,
  IconWhatICanDoChildrenId = 445,
  IconWhatICanDoContentfulId = 446,
  IconWhatICanDoCreatedAt = 447,
  IconWhatICanDoIconChildren = 448,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 449,
  IconWhatICanDoIconContact = 450,
  IconWhatICanDoIconContentfulId = 451,
  IconWhatICanDoIconCreatedAt = 452,
  IconWhatICanDoIconHistory = 453,
  IconWhatICanDoIconId = 454,
  IconWhatICanDoIconName = 455,
  IconWhatICanDoIconNodeLocale = 456,
  IconWhatICanDoIconOss = 457,
  IconWhatICanDoIconProject = 458,
  IconWhatICanDoIconSpaceId = 459,
  IconWhatICanDoIconUpdatedAt = 460,
  IconWhatICanDoIconWhatICanDo = 461,
  IconWhatICanDoId = 462,
  IconWhatICanDoInternalContent = 463,
  IconWhatICanDoInternalContentDigest = 464,
  IconWhatICanDoInternalDescription = 465,
  IconWhatICanDoInternalFieldOwners = 466,
  IconWhatICanDoInternalIgnoreType = 467,
  IconWhatICanDoInternalMediaType = 468,
  IconWhatICanDoInternalOwner = 469,
  IconWhatICanDoInternalType = 470,
  IconWhatICanDoName = 471,
  IconWhatICanDoNodeLocale = 472,
  IconWhatICanDoParentChildren = 473,
  IconWhatICanDoParentId = 474,
  IconWhatICanDoSortKey = 475,
  IconWhatICanDoSpaceId = 476,
  IconWhatICanDoSubName = 477,
  IconWhatICanDoSysRevision = 478,
  IconWhatICanDoSysType = 479,
  IconWhatICanDoUpdatedAt = 480,
  Id = 481,
  InternalContent = 482,
  InternalContentDigest = 483,
  InternalDescription = 484,
  InternalFieldOwners = 485,
  InternalIgnoreType = 486,
  InternalMediaType = 487,
  InternalOwner = 488,
  InternalType = 489,
  Name = 490,
  NodeLocale = 491,
  ParentChildren = 492,
  ParentChildrenChildren = 493,
  ParentChildrenChildrenChildren = 494,
  ParentChildrenChildrenId = 495,
  ParentChildrenId = 496,
  ParentChildrenInternalContent = 497,
  ParentChildrenInternalContentDigest = 498,
  ParentChildrenInternalDescription = 499,
  ParentChildrenInternalFieldOwners = 500,
  ParentChildrenInternalIgnoreType = 501,
  ParentChildrenInternalMediaType = 502,
  ParentChildrenInternalOwner = 503,
  ParentChildrenInternalType = 504,
  ParentChildrenParentChildren = 505,
  ParentChildrenParentId = 506,
  ParentId = 507,
  ParentInternalContent = 508,
  ParentInternalContentDigest = 509,
  ParentInternalDescription = 510,
  ParentInternalFieldOwners = 511,
  ParentInternalIgnoreType = 512,
  ParentInternalMediaType = 513,
  ParentInternalOwner = 514,
  ParentInternalType = 515,
  ParentParentChildren = 516,
  ParentParentChildrenChildren = 517,
  ParentParentChildrenId = 518,
  ParentParentId = 519,
  ParentParentInternalContent = 520,
  ParentParentInternalContentDigest = 521,
  ParentParentInternalDescription = 522,
  ParentParentInternalFieldOwners = 523,
  ParentParentInternalIgnoreType = 524,
  ParentParentInternalMediaType = 525,
  ParentParentInternalOwner = 526,
  ParentParentInternalType = 527,
  ParentParentParentChildren = 528,
  ParentParentParentId = 529,
  SortKey = 530,
  SpaceId = 531,
  SubName = 532,
  SysContentTypeSysId = 533,
  SysContentTypeSysLinkType = 534,
  SysContentTypeSysType = 535,
  SysRevision = 536,
  SysType = 537,
  UpdatedAt = 538
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
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
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
  Children = 53,
  ChildrenMarkdownRemark = 54,
  ChildrenMarkdownRemarkChildren = 55,
  ChildrenMarkdownRemarkChildrenChildren = 56,
  ChildrenMarkdownRemarkChildrenChildrenChildren = 57,
  ChildrenMarkdownRemarkChildrenChildrenId = 58,
  ChildrenMarkdownRemarkChildrenId = 59,
  ChildrenMarkdownRemarkChildrenInternalContent = 60,
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 61,
  ChildrenMarkdownRemarkChildrenInternalDescription = 62,
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 63,
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 64,
  ChildrenMarkdownRemarkChildrenInternalMediaType = 65,
  ChildrenMarkdownRemarkChildrenInternalOwner = 66,
  ChildrenMarkdownRemarkChildrenInternalType = 67,
  ChildrenMarkdownRemarkChildrenParentChildren = 68,
  ChildrenMarkdownRemarkChildrenParentId = 69,
  ChildrenMarkdownRemarkExcerpt = 70,
  ChildrenMarkdownRemarkExcerptAst = 71,
  ChildrenMarkdownRemarkFrontmatterTitle = 72,
  ChildrenMarkdownRemarkHeadings = 73,
  ChildrenMarkdownRemarkHeadingsDepth = 74,
  ChildrenMarkdownRemarkHeadingsId = 75,
  ChildrenMarkdownRemarkHeadingsValue = 76,
  ChildrenMarkdownRemarkHtml = 77,
  ChildrenMarkdownRemarkHtmlAst = 78,
  ChildrenMarkdownRemarkId = 79,
  ChildrenMarkdownRemarkInternalContent = 80,
  ChildrenMarkdownRemarkInternalContentDigest = 81,
  ChildrenMarkdownRemarkInternalDescription = 82,
  ChildrenMarkdownRemarkInternalFieldOwners = 83,
  ChildrenMarkdownRemarkInternalIgnoreType = 84,
  ChildrenMarkdownRemarkInternalMediaType = 85,
  ChildrenMarkdownRemarkInternalOwner = 86,
  ChildrenMarkdownRemarkInternalType = 87,
  ChildrenMarkdownRemarkParentChildren = 88,
  ChildrenMarkdownRemarkParentChildrenChildren = 89,
  ChildrenMarkdownRemarkParentChildrenId = 90,
  ChildrenMarkdownRemarkParentId = 91,
  ChildrenMarkdownRemarkParentInternalContent = 92,
  ChildrenMarkdownRemarkParentInternalContentDigest = 93,
  ChildrenMarkdownRemarkParentInternalDescription = 94,
  ChildrenMarkdownRemarkParentInternalFieldOwners = 95,
  ChildrenMarkdownRemarkParentInternalIgnoreType = 96,
  ChildrenMarkdownRemarkParentInternalMediaType = 97,
  ChildrenMarkdownRemarkParentInternalOwner = 98,
  ChildrenMarkdownRemarkParentInternalType = 99,
  ChildrenMarkdownRemarkParentParentChildren = 100,
  ChildrenMarkdownRemarkParentParentId = 101,
  ChildrenMarkdownRemarkRawMarkdownBody = 102,
  ChildrenMarkdownRemarkTableOfContents = 103,
  ChildrenMarkdownRemarkTimeToRead = 104,
  ChildrenMarkdownRemarkWordCountParagraphs = 105,
  ChildrenMarkdownRemarkWordCountSentences = 106,
  ChildrenMarkdownRemarkWordCountWords = 107,
  ChildrenChildren = 108,
  ChildrenChildrenChildren = 109,
  ChildrenChildrenChildrenChildren = 110,
  ChildrenChildrenChildrenId = 111,
  ChildrenChildrenId = 112,
  ChildrenChildrenInternalContent = 113,
  ChildrenChildrenInternalContentDigest = 114,
  ChildrenChildrenInternalDescription = 115,
  ChildrenChildrenInternalFieldOwners = 116,
  ChildrenChildrenInternalIgnoreType = 117,
  ChildrenChildrenInternalMediaType = 118,
  ChildrenChildrenInternalOwner = 119,
  ChildrenChildrenInternalType = 120,
  ChildrenChildrenParentChildren = 121,
  ChildrenChildrenParentId = 122,
  ChildrenId = 123,
  ChildrenInternalContent = 124,
  ChildrenInternalContentDigest = 125,
  ChildrenInternalDescription = 126,
  ChildrenInternalFieldOwners = 127,
  ChildrenInternalIgnoreType = 128,
  ChildrenInternalMediaType = 129,
  ChildrenInternalOwner = 130,
  ChildrenInternalType = 131,
  ChildrenParentChildren = 132,
  ChildrenParentChildrenChildren = 133,
  ChildrenParentChildrenId = 134,
  ChildrenParentId = 135,
  ChildrenParentInternalContent = 136,
  ChildrenParentInternalContentDigest = 137,
  ChildrenParentInternalDescription = 138,
  ChildrenParentInternalFieldOwners = 139,
  ChildrenParentInternalIgnoreType = 140,
  ChildrenParentInternalMediaType = 141,
  ChildrenParentInternalOwner = 142,
  ChildrenParentInternalType = 143,
  ChildrenParentParentChildren = 144,
  ChildrenParentParentId = 145,
  Content = 146,
  Id = 147,
  InternalContent = 148,
  InternalContentDigest = 149,
  InternalDescription = 150,
  InternalFieldOwners = 151,
  InternalIgnoreType = 152,
  InternalMediaType = 153,
  InternalOwner = 154,
  InternalType = 155,
  ParentChildren = 156,
  ParentChildrenChildren = 157,
  ParentChildrenChildrenChildren = 158,
  ParentChildrenChildrenId = 159,
  ParentChildrenId = 160,
  ParentChildrenInternalContent = 161,
  ParentChildrenInternalContentDigest = 162,
  ParentChildrenInternalDescription = 163,
  ParentChildrenInternalFieldOwners = 164,
  ParentChildrenInternalIgnoreType = 165,
  ParentChildrenInternalMediaType = 166,
  ParentChildrenInternalOwner = 167,
  ParentChildrenInternalType = 168,
  ParentChildrenParentChildren = 169,
  ParentChildrenParentId = 170,
  ParentId = 171,
  ParentInternalContent = 172,
  ParentInternalContentDigest = 173,
  ParentInternalDescription = 174,
  ParentInternalFieldOwners = 175,
  ParentInternalIgnoreType = 176,
  ParentInternalMediaType = 177,
  ParentInternalOwner = 178,
  ParentInternalType = 179,
  ParentParentChildren = 180,
  ParentParentChildrenChildren = 181,
  ParentParentChildrenId = 182,
  ParentParentId = 183,
  ParentParentInternalContent = 184,
  ParentParentInternalContentDigest = 185,
  ParentParentInternalDescription = 186,
  ParentParentInternalFieldOwners = 187,
  ParentParentInternalIgnoreType = 188,
  ParentParentInternalMediaType = 189,
  ParentParentInternalOwner = 190,
  ParentParentInternalType = 191,
  ParentParentParentChildren = 192,
  ParentParentParentId = 193,
  SysType = 194
}

export type ContentfulBlogPostContentTextNodeFilterInput = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
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
  Children = 53,
  ChildrenMarkdownRemark = 54,
  ChildrenMarkdownRemarkChildren = 55,
  ChildrenMarkdownRemarkChildrenChildren = 56,
  ChildrenMarkdownRemarkChildrenChildrenChildren = 57,
  ChildrenMarkdownRemarkChildrenChildrenId = 58,
  ChildrenMarkdownRemarkChildrenId = 59,
  ChildrenMarkdownRemarkChildrenInternalContent = 60,
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 61,
  ChildrenMarkdownRemarkChildrenInternalDescription = 62,
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 63,
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 64,
  ChildrenMarkdownRemarkChildrenInternalMediaType = 65,
  ChildrenMarkdownRemarkChildrenInternalOwner = 66,
  ChildrenMarkdownRemarkChildrenInternalType = 67,
  ChildrenMarkdownRemarkChildrenParentChildren = 68,
  ChildrenMarkdownRemarkChildrenParentId = 69,
  ChildrenMarkdownRemarkExcerpt = 70,
  ChildrenMarkdownRemarkExcerptAst = 71,
  ChildrenMarkdownRemarkFrontmatterTitle = 72,
  ChildrenMarkdownRemarkHeadings = 73,
  ChildrenMarkdownRemarkHeadingsDepth = 74,
  ChildrenMarkdownRemarkHeadingsId = 75,
  ChildrenMarkdownRemarkHeadingsValue = 76,
  ChildrenMarkdownRemarkHtml = 77,
  ChildrenMarkdownRemarkHtmlAst = 78,
  ChildrenMarkdownRemarkId = 79,
  ChildrenMarkdownRemarkInternalContent = 80,
  ChildrenMarkdownRemarkInternalContentDigest = 81,
  ChildrenMarkdownRemarkInternalDescription = 82,
  ChildrenMarkdownRemarkInternalFieldOwners = 83,
  ChildrenMarkdownRemarkInternalIgnoreType = 84,
  ChildrenMarkdownRemarkInternalMediaType = 85,
  ChildrenMarkdownRemarkInternalOwner = 86,
  ChildrenMarkdownRemarkInternalType = 87,
  ChildrenMarkdownRemarkParentChildren = 88,
  ChildrenMarkdownRemarkParentChildrenChildren = 89,
  ChildrenMarkdownRemarkParentChildrenId = 90,
  ChildrenMarkdownRemarkParentId = 91,
  ChildrenMarkdownRemarkParentInternalContent = 92,
  ChildrenMarkdownRemarkParentInternalContentDigest = 93,
  ChildrenMarkdownRemarkParentInternalDescription = 94,
  ChildrenMarkdownRemarkParentInternalFieldOwners = 95,
  ChildrenMarkdownRemarkParentInternalIgnoreType = 96,
  ChildrenMarkdownRemarkParentInternalMediaType = 97,
  ChildrenMarkdownRemarkParentInternalOwner = 98,
  ChildrenMarkdownRemarkParentInternalType = 99,
  ChildrenMarkdownRemarkParentParentChildren = 100,
  ChildrenMarkdownRemarkParentParentId = 101,
  ChildrenMarkdownRemarkRawMarkdownBody = 102,
  ChildrenMarkdownRemarkTableOfContents = 103,
  ChildrenMarkdownRemarkTimeToRead = 104,
  ChildrenMarkdownRemarkWordCountParagraphs = 105,
  ChildrenMarkdownRemarkWordCountSentences = 106,
  ChildrenMarkdownRemarkWordCountWords = 107,
  ChildrenChildren = 108,
  ChildrenChildrenChildren = 109,
  ChildrenChildrenChildrenChildren = 110,
  ChildrenChildrenChildrenId = 111,
  ChildrenChildrenId = 112,
  ChildrenChildrenInternalContent = 113,
  ChildrenChildrenInternalContentDigest = 114,
  ChildrenChildrenInternalDescription = 115,
  ChildrenChildrenInternalFieldOwners = 116,
  ChildrenChildrenInternalIgnoreType = 117,
  ChildrenChildrenInternalMediaType = 118,
  ChildrenChildrenInternalOwner = 119,
  ChildrenChildrenInternalType = 120,
  ChildrenChildrenParentChildren = 121,
  ChildrenChildrenParentId = 122,
  ChildrenId = 123,
  ChildrenInternalContent = 124,
  ChildrenInternalContentDigest = 125,
  ChildrenInternalDescription = 126,
  ChildrenInternalFieldOwners = 127,
  ChildrenInternalIgnoreType = 128,
  ChildrenInternalMediaType = 129,
  ChildrenInternalOwner = 130,
  ChildrenInternalType = 131,
  ChildrenParentChildren = 132,
  ChildrenParentChildrenChildren = 133,
  ChildrenParentChildrenId = 134,
  ChildrenParentId = 135,
  ChildrenParentInternalContent = 136,
  ChildrenParentInternalContentDigest = 137,
  ChildrenParentInternalDescription = 138,
  ChildrenParentInternalFieldOwners = 139,
  ChildrenParentInternalIgnoreType = 140,
  ChildrenParentInternalMediaType = 141,
  ChildrenParentInternalOwner = 142,
  ChildrenParentInternalType = 143,
  ChildrenParentParentChildren = 144,
  ChildrenParentParentId = 145,
  Id = 146,
  InternalContent = 147,
  InternalContentDigest = 148,
  InternalDescription = 149,
  InternalFieldOwners = 150,
  InternalIgnoreType = 151,
  InternalMediaType = 152,
  InternalOwner = 153,
  InternalType = 154,
  ParentChildren = 155,
  ParentChildrenChildren = 156,
  ParentChildrenChildrenChildren = 157,
  ParentChildrenChildrenId = 158,
  ParentChildrenId = 159,
  ParentChildrenInternalContent = 160,
  ParentChildrenInternalContentDigest = 161,
  ParentChildrenInternalDescription = 162,
  ParentChildrenInternalFieldOwners = 163,
  ParentChildrenInternalIgnoreType = 164,
  ParentChildrenInternalMediaType = 165,
  ParentChildrenInternalOwner = 166,
  ParentChildrenInternalType = 167,
  ParentChildrenParentChildren = 168,
  ParentChildrenParentId = 169,
  ParentId = 170,
  ParentInternalContent = 171,
  ParentInternalContentDigest = 172,
  ParentInternalDescription = 173,
  ParentInternalFieldOwners = 174,
  ParentInternalIgnoreType = 175,
  ParentInternalMediaType = 176,
  ParentInternalOwner = 177,
  ParentInternalType = 178,
  ParentParentChildren = 179,
  ParentParentChildrenChildren = 180,
  ParentParentChildrenId = 181,
  ParentParentId = 182,
  ParentParentInternalContent = 183,
  ParentParentInternalContentDigest = 184,
  ParentParentInternalDescription = 185,
  ParentParentInternalFieldOwners = 186,
  ParentParentInternalIgnoreType = 187,
  ParentParentInternalMediaType = 188,
  ParentParentInternalOwner = 189,
  ParentParentInternalType = 190,
  ParentParentParentChildren = 191,
  ParentParentParentId = 192,
  Svg = 193,
  SysType = 194
}

export type ContentfulIconSvgTextNodeFilterInput = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
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
  Children = 53,
  ChildrenMarkdownRemark = 54,
  ChildrenMarkdownRemarkChildren = 55,
  ChildrenMarkdownRemarkChildrenChildren = 56,
  ChildrenMarkdownRemarkChildrenChildrenChildren = 57,
  ChildrenMarkdownRemarkChildrenChildrenId = 58,
  ChildrenMarkdownRemarkChildrenId = 59,
  ChildrenMarkdownRemarkChildrenInternalContent = 60,
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 61,
  ChildrenMarkdownRemarkChildrenInternalDescription = 62,
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 63,
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 64,
  ChildrenMarkdownRemarkChildrenInternalMediaType = 65,
  ChildrenMarkdownRemarkChildrenInternalOwner = 66,
  ChildrenMarkdownRemarkChildrenInternalType = 67,
  ChildrenMarkdownRemarkChildrenParentChildren = 68,
  ChildrenMarkdownRemarkChildrenParentId = 69,
  ChildrenMarkdownRemarkExcerpt = 70,
  ChildrenMarkdownRemarkExcerptAst = 71,
  ChildrenMarkdownRemarkFrontmatterTitle = 72,
  ChildrenMarkdownRemarkHeadings = 73,
  ChildrenMarkdownRemarkHeadingsDepth = 74,
  ChildrenMarkdownRemarkHeadingsId = 75,
  ChildrenMarkdownRemarkHeadingsValue = 76,
  ChildrenMarkdownRemarkHtml = 77,
  ChildrenMarkdownRemarkHtmlAst = 78,
  ChildrenMarkdownRemarkId = 79,
  ChildrenMarkdownRemarkInternalContent = 80,
  ChildrenMarkdownRemarkInternalContentDigest = 81,
  ChildrenMarkdownRemarkInternalDescription = 82,
  ChildrenMarkdownRemarkInternalFieldOwners = 83,
  ChildrenMarkdownRemarkInternalIgnoreType = 84,
  ChildrenMarkdownRemarkInternalMediaType = 85,
  ChildrenMarkdownRemarkInternalOwner = 86,
  ChildrenMarkdownRemarkInternalType = 87,
  ChildrenMarkdownRemarkParentChildren = 88,
  ChildrenMarkdownRemarkParentChildrenChildren = 89,
  ChildrenMarkdownRemarkParentChildrenId = 90,
  ChildrenMarkdownRemarkParentId = 91,
  ChildrenMarkdownRemarkParentInternalContent = 92,
  ChildrenMarkdownRemarkParentInternalContentDigest = 93,
  ChildrenMarkdownRemarkParentInternalDescription = 94,
  ChildrenMarkdownRemarkParentInternalFieldOwners = 95,
  ChildrenMarkdownRemarkParentInternalIgnoreType = 96,
  ChildrenMarkdownRemarkParentInternalMediaType = 97,
  ChildrenMarkdownRemarkParentInternalOwner = 98,
  ChildrenMarkdownRemarkParentInternalType = 99,
  ChildrenMarkdownRemarkParentParentChildren = 100,
  ChildrenMarkdownRemarkParentParentId = 101,
  ChildrenMarkdownRemarkRawMarkdownBody = 102,
  ChildrenMarkdownRemarkTableOfContents = 103,
  ChildrenMarkdownRemarkTimeToRead = 104,
  ChildrenMarkdownRemarkWordCountParagraphs = 105,
  ChildrenMarkdownRemarkWordCountSentences = 106,
  ChildrenMarkdownRemarkWordCountWords = 107,
  ChildrenChildren = 108,
  ChildrenChildrenChildren = 109,
  ChildrenChildrenChildrenChildren = 110,
  ChildrenChildrenChildrenId = 111,
  ChildrenChildrenId = 112,
  ChildrenChildrenInternalContent = 113,
  ChildrenChildrenInternalContentDigest = 114,
  ChildrenChildrenInternalDescription = 115,
  ChildrenChildrenInternalFieldOwners = 116,
  ChildrenChildrenInternalIgnoreType = 117,
  ChildrenChildrenInternalMediaType = 118,
  ChildrenChildrenInternalOwner = 119,
  ChildrenChildrenInternalType = 120,
  ChildrenChildrenParentChildren = 121,
  ChildrenChildrenParentId = 122,
  ChildrenId = 123,
  ChildrenInternalContent = 124,
  ChildrenInternalContentDigest = 125,
  ChildrenInternalDescription = 126,
  ChildrenInternalFieldOwners = 127,
  ChildrenInternalIgnoreType = 128,
  ChildrenInternalMediaType = 129,
  ChildrenInternalOwner = 130,
  ChildrenInternalType = 131,
  ChildrenParentChildren = 132,
  ChildrenParentChildrenChildren = 133,
  ChildrenParentChildrenId = 134,
  ChildrenParentId = 135,
  ChildrenParentInternalContent = 136,
  ChildrenParentInternalContentDigest = 137,
  ChildrenParentInternalDescription = 138,
  ChildrenParentInternalFieldOwners = 139,
  ChildrenParentInternalIgnoreType = 140,
  ChildrenParentInternalMediaType = 141,
  ChildrenParentInternalOwner = 142,
  ChildrenParentInternalType = 143,
  ChildrenParentParentChildren = 144,
  ChildrenParentParentId = 145,
  Detail = 146,
  Id = 147,
  InternalContent = 148,
  InternalContentDigest = 149,
  InternalDescription = 150,
  InternalFieldOwners = 151,
  InternalIgnoreType = 152,
  InternalMediaType = 153,
  InternalOwner = 154,
  InternalType = 155,
  ParentChildren = 156,
  ParentChildrenChildren = 157,
  ParentChildrenChildrenChildren = 158,
  ParentChildrenChildrenId = 159,
  ParentChildrenId = 160,
  ParentChildrenInternalContent = 161,
  ParentChildrenInternalContentDigest = 162,
  ParentChildrenInternalDescription = 163,
  ParentChildrenInternalFieldOwners = 164,
  ParentChildrenInternalIgnoreType = 165,
  ParentChildrenInternalMediaType = 166,
  ParentChildrenInternalOwner = 167,
  ParentChildrenInternalType = 168,
  ParentChildrenParentChildren = 169,
  ParentChildrenParentId = 170,
  ParentId = 171,
  ParentInternalContent = 172,
  ParentInternalContentDigest = 173,
  ParentInternalDescription = 174,
  ParentInternalFieldOwners = 175,
  ParentInternalIgnoreType = 176,
  ParentInternalMediaType = 177,
  ParentInternalOwner = 178,
  ParentInternalType = 179,
  ParentParentChildren = 180,
  ParentParentChildrenChildren = 181,
  ParentParentChildrenId = 182,
  ParentParentId = 183,
  ParentParentInternalContent = 184,
  ParentParentInternalContentDigest = 185,
  ParentParentInternalDescription = 186,
  ParentParentInternalFieldOwners = 187,
  ParentParentInternalIgnoreType = 188,
  ParentParentInternalMediaType = 189,
  ParentParentInternalOwner = 190,
  ParentParentInternalType = 191,
  ParentParentParentChildren = 192,
  ParentParentParentId = 193,
  SysType = 194
}

export type ContentfulOssDetailTextNodeFilterInput = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
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
  Children = 53,
  ChildrenMarkdownRemark = 54,
  ChildrenMarkdownRemarkChildren = 55,
  ChildrenMarkdownRemarkChildrenChildren = 56,
  ChildrenMarkdownRemarkChildrenChildrenChildren = 57,
  ChildrenMarkdownRemarkChildrenChildrenId = 58,
  ChildrenMarkdownRemarkChildrenId = 59,
  ChildrenMarkdownRemarkChildrenInternalContent = 60,
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 61,
  ChildrenMarkdownRemarkChildrenInternalDescription = 62,
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 63,
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 64,
  ChildrenMarkdownRemarkChildrenInternalMediaType = 65,
  ChildrenMarkdownRemarkChildrenInternalOwner = 66,
  ChildrenMarkdownRemarkChildrenInternalType = 67,
  ChildrenMarkdownRemarkChildrenParentChildren = 68,
  ChildrenMarkdownRemarkChildrenParentId = 69,
  ChildrenMarkdownRemarkExcerpt = 70,
  ChildrenMarkdownRemarkExcerptAst = 71,
  ChildrenMarkdownRemarkFrontmatterTitle = 72,
  ChildrenMarkdownRemarkHeadings = 73,
  ChildrenMarkdownRemarkHeadingsDepth = 74,
  ChildrenMarkdownRemarkHeadingsId = 75,
  ChildrenMarkdownRemarkHeadingsValue = 76,
  ChildrenMarkdownRemarkHtml = 77,
  ChildrenMarkdownRemarkHtmlAst = 78,
  ChildrenMarkdownRemarkId = 79,
  ChildrenMarkdownRemarkInternalContent = 80,
  ChildrenMarkdownRemarkInternalContentDigest = 81,
  ChildrenMarkdownRemarkInternalDescription = 82,
  ChildrenMarkdownRemarkInternalFieldOwners = 83,
  ChildrenMarkdownRemarkInternalIgnoreType = 84,
  ChildrenMarkdownRemarkInternalMediaType = 85,
  ChildrenMarkdownRemarkInternalOwner = 86,
  ChildrenMarkdownRemarkInternalType = 87,
  ChildrenMarkdownRemarkParentChildren = 88,
  ChildrenMarkdownRemarkParentChildrenChildren = 89,
  ChildrenMarkdownRemarkParentChildrenId = 90,
  ChildrenMarkdownRemarkParentId = 91,
  ChildrenMarkdownRemarkParentInternalContent = 92,
  ChildrenMarkdownRemarkParentInternalContentDigest = 93,
  ChildrenMarkdownRemarkParentInternalDescription = 94,
  ChildrenMarkdownRemarkParentInternalFieldOwners = 95,
  ChildrenMarkdownRemarkParentInternalIgnoreType = 96,
  ChildrenMarkdownRemarkParentInternalMediaType = 97,
  ChildrenMarkdownRemarkParentInternalOwner = 98,
  ChildrenMarkdownRemarkParentInternalType = 99,
  ChildrenMarkdownRemarkParentParentChildren = 100,
  ChildrenMarkdownRemarkParentParentId = 101,
  ChildrenMarkdownRemarkRawMarkdownBody = 102,
  ChildrenMarkdownRemarkTableOfContents = 103,
  ChildrenMarkdownRemarkTimeToRead = 104,
  ChildrenMarkdownRemarkWordCountParagraphs = 105,
  ChildrenMarkdownRemarkWordCountSentences = 106,
  ChildrenMarkdownRemarkWordCountWords = 107,
  ChildrenChildren = 108,
  ChildrenChildrenChildren = 109,
  ChildrenChildrenChildrenChildren = 110,
  ChildrenChildrenChildrenId = 111,
  ChildrenChildrenId = 112,
  ChildrenChildrenInternalContent = 113,
  ChildrenChildrenInternalContentDigest = 114,
  ChildrenChildrenInternalDescription = 115,
  ChildrenChildrenInternalFieldOwners = 116,
  ChildrenChildrenInternalIgnoreType = 117,
  ChildrenChildrenInternalMediaType = 118,
  ChildrenChildrenInternalOwner = 119,
  ChildrenChildrenInternalType = 120,
  ChildrenChildrenParentChildren = 121,
  ChildrenChildrenParentId = 122,
  ChildrenId = 123,
  ChildrenInternalContent = 124,
  ChildrenInternalContentDigest = 125,
  ChildrenInternalDescription = 126,
  ChildrenInternalFieldOwners = 127,
  ChildrenInternalIgnoreType = 128,
  ChildrenInternalMediaType = 129,
  ChildrenInternalOwner = 130,
  ChildrenInternalType = 131,
  ChildrenParentChildren = 132,
  ChildrenParentChildrenChildren = 133,
  ChildrenParentChildrenId = 134,
  ChildrenParentId = 135,
  ChildrenParentInternalContent = 136,
  ChildrenParentInternalContentDigest = 137,
  ChildrenParentInternalDescription = 138,
  ChildrenParentInternalFieldOwners = 139,
  ChildrenParentInternalIgnoreType = 140,
  ChildrenParentInternalMediaType = 141,
  ChildrenParentInternalOwner = 142,
  ChildrenParentInternalType = 143,
  ChildrenParentParentChildren = 144,
  ChildrenParentParentId = 145,
  Detail = 146,
  Id = 147,
  InternalContent = 148,
  InternalContentDigest = 149,
  InternalDescription = 150,
  InternalFieldOwners = 151,
  InternalIgnoreType = 152,
  InternalMediaType = 153,
  InternalOwner = 154,
  InternalType = 155,
  ParentChildren = 156,
  ParentChildrenChildren = 157,
  ParentChildrenChildrenChildren = 158,
  ParentChildrenChildrenId = 159,
  ParentChildrenId = 160,
  ParentChildrenInternalContent = 161,
  ParentChildrenInternalContentDigest = 162,
  ParentChildrenInternalDescription = 163,
  ParentChildrenInternalFieldOwners = 164,
  ParentChildrenInternalIgnoreType = 165,
  ParentChildrenInternalMediaType = 166,
  ParentChildrenInternalOwner = 167,
  ParentChildrenInternalType = 168,
  ParentChildrenParentChildren = 169,
  ParentChildrenParentId = 170,
  ParentId = 171,
  ParentInternalContent = 172,
  ParentInternalContentDigest = 173,
  ParentInternalDescription = 174,
  ParentInternalFieldOwners = 175,
  ParentInternalIgnoreType = 176,
  ParentInternalMediaType = 177,
  ParentInternalOwner = 178,
  ParentInternalType = 179,
  ParentParentChildren = 180,
  ParentParentChildrenChildren = 181,
  ParentParentChildrenId = 182,
  ParentParentId = 183,
  ParentParentInternalContent = 184,
  ParentParentInternalContentDigest = 185,
  ParentParentInternalDescription = 186,
  ParentParentInternalFieldOwners = 187,
  ParentParentInternalIgnoreType = 188,
  ParentParentInternalMediaType = 189,
  ParentParentInternalOwner = 190,
  ParentParentInternalType = 191,
  ParentParentParentChildren = 192,
  ParentParentParentId = 193,
  SysType = 194
}

export type ContentfulProjectDetailTextNodeFilterInput = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
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
    & { content: Maybe<Pick<ContentfulBlogPostContentTextNode, 'content'>>, tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>> }
  )>, icon: Maybe<(
    Pick<ContentfulAsset, 'title'>
    & { svg: Maybe<Pick<InlineSvg, 'content'>> }
  )>, locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

export type BuildTimeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type BuildTimeDataQuery = { site: Maybe<Pick<Site, 'buildTime'>> };

export type NotFoundPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type NotFoundPageQuery = { posts: { group: Array<{ edges: Array<{ node: (
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

export type PrivacyPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type PrivacyPageQuery = { locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, icon: Maybe<(
    Pick<ContentfulAsset, 'title'>
    & { svg: Maybe<Pick<InlineSvg, 'content'>> }
  )> };
