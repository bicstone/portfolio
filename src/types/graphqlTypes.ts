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
  file: Maybe<ContentfulAssetFile>;
  filename: Scalars['String'];
  filesize: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage: Maybe<Scalars['JSON']>;
  gatsbyImageData: Maybe<Scalars['JSON']>;
  height: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  internal: Internal;
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
  aspectRatio: InputMaybe<Scalars['Float']>;
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
  FileContentType = 42,
  FileDetailsImageHeight = 43,
  FileDetailsImageWidth = 44,
  FileDetailsSize = 45,
  FileFileName = 46,
  FileUrl = 47,
  Filename = 48,
  Filesize = 49,
  GatsbyImage = 50,
  GatsbyImageData = 51,
  Height = 52,
  Id = 53,
  InternalContent = 54,
  InternalContentDigest = 55,
  InternalDescription = 56,
  InternalFieldOwners = 57,
  InternalIgnoreType = 58,
  InternalMediaType = 59,
  InternalOwner = 60,
  InternalType = 61,
  MimeType = 62,
  NodeLocale = 63,
  ParentChildren = 64,
  ParentChildrenChildren = 65,
  ParentChildrenChildrenChildren = 66,
  ParentChildrenChildrenId = 67,
  ParentChildrenId = 68,
  ParentChildrenInternalContent = 69,
  ParentChildrenInternalContentDigest = 70,
  ParentChildrenInternalDescription = 71,
  ParentChildrenInternalFieldOwners = 72,
  ParentChildrenInternalIgnoreType = 73,
  ParentChildrenInternalMediaType = 74,
  ParentChildrenInternalOwner = 75,
  ParentChildrenInternalType = 76,
  ParentChildrenParentChildren = 77,
  ParentChildrenParentId = 78,
  ParentId = 79,
  ParentInternalContent = 80,
  ParentInternalContentDigest = 81,
  ParentInternalDescription = 82,
  ParentInternalFieldOwners = 83,
  ParentInternalIgnoreType = 84,
  ParentInternalMediaType = 85,
  ParentInternalOwner = 86,
  ParentInternalType = 87,
  ParentParentChildren = 88,
  ParentParentChildrenChildren = 89,
  ParentParentChildrenId = 90,
  ParentParentId = 91,
  ParentParentInternalContent = 92,
  ParentParentInternalContentDigest = 93,
  ParentParentInternalDescription = 94,
  ParentParentInternalFieldOwners = 95,
  ParentParentInternalIgnoreType = 96,
  ParentParentInternalMediaType = 97,
  ParentParentInternalOwner = 98,
  ParentParentInternalType = 99,
  ParentParentParentChildren = 100,
  ParentParentParentId = 101,
  PlaceholderUrl = 102,
  PublicUrl = 103,
  ResizeHeight = 104,
  ResizeSrc = 105,
  ResizeWidth = 106,
  SpaceId = 107,
  SysRevision = 108,
  SysType = 109,
  Title = 110,
  UpdatedAt = 111,
  Url = 112,
  Width = 113
}

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
  file: InputMaybe<ContentfulAssetFileFilterInput>;
  filename: InputMaybe<StringQueryOperatorInput>;
  filesize: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
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
  category: Maybe<ContentfulCategory>;
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
  CategoryBlogPostCategoryName = 6,
  CategoryBlogPostCategoryNodeLocale = 7,
  CategoryBlogPostCategorySortKey = 8,
  CategoryBlogPostCategorySpaceId = 9,
  CategoryBlogPostCategoryUpdatedAt = 10,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeChildren = 11,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 12,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeContent = 13,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeId = 14,
  CategoryBlogPostChildren = 15,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNode = 16,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 17,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 18,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeContent = 19,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeId = 20,
  CategoryBlogPostChildrenChildren = 21,
  CategoryBlogPostChildrenId = 22,
  CategoryBlogPostContentChildren = 23,
  CategoryBlogPostContentChildrenMdx = 24,
  CategoryBlogPostContentContent = 25,
  CategoryBlogPostContentId = 26,
  CategoryBlogPostContentfulId = 27,
  CategoryBlogPostCreated = 28,
  CategoryBlogPostCreatedAt = 29,
  CategoryBlogPostExcerpt = 30,
  CategoryBlogPostId = 31,
  CategoryBlogPostInternalContent = 32,
  CategoryBlogPostInternalContentDigest = 33,
  CategoryBlogPostInternalDescription = 34,
  CategoryBlogPostInternalFieldOwners = 35,
  CategoryBlogPostInternalIgnoreType = 36,
  CategoryBlogPostInternalMediaType = 37,
  CategoryBlogPostInternalOwner = 38,
  CategoryBlogPostInternalType = 39,
  CategoryBlogPostNodeLocale = 40,
  CategoryBlogPostParentChildren = 41,
  CategoryBlogPostParentId = 42,
  CategoryBlogPostSlug = 43,
  CategoryBlogPostSpaceId = 44,
  CategoryBlogPostSysRevision = 45,
  CategoryBlogPostSysType = 46,
  CategoryBlogPostTags = 47,
  CategoryBlogPostTagsBlogPost = 48,
  CategoryBlogPostTagsChildren = 49,
  CategoryBlogPostTagsContentfulId = 50,
  CategoryBlogPostTagsCreatedAt = 51,
  CategoryBlogPostTagsId = 52,
  CategoryBlogPostTagsLevel = 53,
  CategoryBlogPostTagsName = 54,
  CategoryBlogPostTagsNodeLocale = 55,
  CategoryBlogPostTagsOss = 56,
  CategoryBlogPostTagsProject = 57,
  CategoryBlogPostTagsSkillMap = 58,
  CategoryBlogPostTagsSpaceId = 59,
  CategoryBlogPostTagsUpdatedAt = 60,
  CategoryBlogPostThumbnailChildren = 61,
  CategoryBlogPostThumbnailContentfulId = 62,
  CategoryBlogPostThumbnailCreatedAt = 63,
  CategoryBlogPostThumbnailDescription = 64,
  CategoryBlogPostThumbnailFilename = 65,
  CategoryBlogPostThumbnailFilesize = 66,
  CategoryBlogPostThumbnailGatsbyImage = 67,
  CategoryBlogPostThumbnailGatsbyImageData = 68,
  CategoryBlogPostThumbnailHeight = 69,
  CategoryBlogPostThumbnailId = 70,
  CategoryBlogPostThumbnailMimeType = 71,
  CategoryBlogPostThumbnailNodeLocale = 72,
  CategoryBlogPostThumbnailPlaceholderUrl = 73,
  CategoryBlogPostThumbnailPublicUrl = 74,
  CategoryBlogPostThumbnailSpaceId = 75,
  CategoryBlogPostThumbnailTitle = 76,
  CategoryBlogPostThumbnailUpdatedAt = 77,
  CategoryBlogPostThumbnailUrl = 78,
  CategoryBlogPostThumbnailWidth = 79,
  CategoryBlogPostTitle = 80,
  CategoryBlogPostUpdated = 81,
  CategoryBlogPostUpdatedAt = 82,
  CategoryChildren = 83,
  CategoryChildrenChildren = 84,
  CategoryChildrenChildrenChildren = 85,
  CategoryChildrenChildrenId = 86,
  CategoryChildrenId = 87,
  CategoryChildrenInternalContent = 88,
  CategoryChildrenInternalContentDigest = 89,
  CategoryChildrenInternalDescription = 90,
  CategoryChildrenInternalFieldOwners = 91,
  CategoryChildrenInternalIgnoreType = 92,
  CategoryChildrenInternalMediaType = 93,
  CategoryChildrenInternalOwner = 94,
  CategoryChildrenInternalType = 95,
  CategoryChildrenParentChildren = 96,
  CategoryChildrenParentId = 97,
  CategoryContentfulId = 98,
  CategoryCreatedAt = 99,
  CategoryId = 100,
  CategoryInternalContent = 101,
  CategoryInternalContentDigest = 102,
  CategoryInternalDescription = 103,
  CategoryInternalFieldOwners = 104,
  CategoryInternalIgnoreType = 105,
  CategoryInternalMediaType = 106,
  CategoryInternalOwner = 107,
  CategoryInternalType = 108,
  CategoryName = 109,
  CategoryNodeLocale = 110,
  CategoryParentChildren = 111,
  CategoryParentChildrenChildren = 112,
  CategoryParentChildrenId = 113,
  CategoryParentId = 114,
  CategoryParentInternalContent = 115,
  CategoryParentInternalContentDigest = 116,
  CategoryParentInternalDescription = 117,
  CategoryParentInternalFieldOwners = 118,
  CategoryParentInternalIgnoreType = 119,
  CategoryParentInternalMediaType = 120,
  CategoryParentInternalOwner = 121,
  CategoryParentInternalType = 122,
  CategoryParentParentChildren = 123,
  CategoryParentParentId = 124,
  CategorySortKey = 125,
  CategorySpaceId = 126,
  CategorySysRevision = 127,
  CategorySysType = 128,
  CategoryUpdatedAt = 129,
  ChildContentfulBlogPostContentTextNodeChildMdxBody = 130,
  ChildContentfulBlogPostContentTextNodeChildMdxChildren = 131,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 132,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenId = 133,
  ChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 134,
  ChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 135,
  ChildContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 136,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadings = 137,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 138,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 139,
  ChildContentfulBlogPostContentTextNodeChildMdxHtml = 140,
  ChildContentfulBlogPostContentTextNodeChildMdxId = 141,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContent = 142,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 143,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalDescription = 144,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 145,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 146,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 147,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalOwner = 148,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalType = 149,
  ChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 150,
  ChildContentfulBlogPostContentTextNodeChildMdxParentChildren = 151,
  ChildContentfulBlogPostContentTextNodeChildMdxParentId = 152,
  ChildContentfulBlogPostContentTextNodeChildMdxRawBody = 153,
  ChildContentfulBlogPostContentTextNodeChildMdxSlug = 154,
  ChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 155,
  ChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 156,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 157,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 158,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountWords = 159,
  ChildContentfulBlogPostContentTextNodeChildren = 160,
  ChildContentfulBlogPostContentTextNodeChildrenMdx = 161,
  ChildContentfulBlogPostContentTextNodeChildrenMdxBody = 162,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 163,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 164,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 165,
  ChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 166,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 167,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 168,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 169,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 170,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 171,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 172,
  ChildContentfulBlogPostContentTextNodeChildrenMdxId = 173,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 174,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 175,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 176,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 177,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 178,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 179,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 180,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalType = 181,
  ChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 182,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 183,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentId = 184,
  ChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 185,
  ChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 186,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 187,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 188,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 189,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 190,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 191,
  ChildContentfulBlogPostContentTextNodeChildrenChildren = 192,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenChildren = 193,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenId = 194,
  ChildContentfulBlogPostContentTextNodeChildrenId = 195,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContent = 196,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 197,
  ChildContentfulBlogPostContentTextNodeChildrenInternalDescription = 198,
  ChildContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 199,
  ChildContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 200,
  ChildContentfulBlogPostContentTextNodeChildrenInternalMediaType = 201,
  ChildContentfulBlogPostContentTextNodeChildrenInternalOwner = 202,
  ChildContentfulBlogPostContentTextNodeChildrenInternalType = 203,
  ChildContentfulBlogPostContentTextNodeChildrenParentChildren = 204,
  ChildContentfulBlogPostContentTextNodeChildrenParentId = 205,
  ChildContentfulBlogPostContentTextNodeContent = 206,
  ChildContentfulBlogPostContentTextNodeId = 207,
  ChildContentfulBlogPostContentTextNodeInternalContent = 208,
  ChildContentfulBlogPostContentTextNodeInternalContentDigest = 209,
  ChildContentfulBlogPostContentTextNodeInternalDescription = 210,
  ChildContentfulBlogPostContentTextNodeInternalFieldOwners = 211,
  ChildContentfulBlogPostContentTextNodeInternalIgnoreType = 212,
  ChildContentfulBlogPostContentTextNodeInternalMediaType = 213,
  ChildContentfulBlogPostContentTextNodeInternalOwner = 214,
  ChildContentfulBlogPostContentTextNodeInternalType = 215,
  ChildContentfulBlogPostContentTextNodeParentChildren = 216,
  ChildContentfulBlogPostContentTextNodeParentChildrenChildren = 217,
  ChildContentfulBlogPostContentTextNodeParentChildrenId = 218,
  ChildContentfulBlogPostContentTextNodeParentId = 219,
  ChildContentfulBlogPostContentTextNodeParentInternalContent = 220,
  ChildContentfulBlogPostContentTextNodeParentInternalContentDigest = 221,
  ChildContentfulBlogPostContentTextNodeParentInternalDescription = 222,
  ChildContentfulBlogPostContentTextNodeParentInternalFieldOwners = 223,
  ChildContentfulBlogPostContentTextNodeParentInternalIgnoreType = 224,
  ChildContentfulBlogPostContentTextNodeParentInternalMediaType = 225,
  ChildContentfulBlogPostContentTextNodeParentInternalOwner = 226,
  ChildContentfulBlogPostContentTextNodeParentInternalType = 227,
  ChildContentfulBlogPostContentTextNodeParentParentChildren = 228,
  ChildContentfulBlogPostContentTextNodeParentParentId = 229,
  ChildContentfulBlogPostContentTextNodeSysType = 230,
  Children = 231,
  ChildrenContentfulBlogPostContentTextNode = 232,
  ChildrenContentfulBlogPostContentTextNodeChildMdxBody = 233,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 234,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 235,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenId = 236,
  ChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 237,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 238,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 239,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 240,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 241,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 242,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 243,
  ChildrenContentfulBlogPostContentTextNodeChildMdxId = 244,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContent = 245,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 246,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalDescription = 247,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 248,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 249,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 250,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalOwner = 251,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalType = 252,
  ChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 253,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentChildren = 254,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentId = 255,
  ChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 256,
  ChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 257,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 258,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 259,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 260,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 261,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountWords = 262,
  ChildrenContentfulBlogPostContentTextNodeChildren = 263,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdx = 264,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 265,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 266,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 267,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 268,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 269,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 270,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 271,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 272,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 273,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 274,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 275,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 276,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 277,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 278,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 279,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 280,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 281,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 282,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 283,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalType = 284,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 285,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 286,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentId = 287,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 288,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 289,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 290,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 291,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 292,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 293,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 294,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildren = 295,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenChildren = 296,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenId = 297,
  ChildrenContentfulBlogPostContentTextNodeChildrenId = 298,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContent = 299,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 300,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalDescription = 301,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 302,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 303,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalMediaType = 304,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalOwner = 305,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalType = 306,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentChildren = 307,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentId = 308,
  ChildrenContentfulBlogPostContentTextNodeContent = 309,
  ChildrenContentfulBlogPostContentTextNodeId = 310,
  ChildrenContentfulBlogPostContentTextNodeInternalContent = 311,
  ChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 312,
  ChildrenContentfulBlogPostContentTextNodeInternalDescription = 313,
  ChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 314,
  ChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 315,
  ChildrenContentfulBlogPostContentTextNodeInternalMediaType = 316,
  ChildrenContentfulBlogPostContentTextNodeInternalOwner = 317,
  ChildrenContentfulBlogPostContentTextNodeInternalType = 318,
  ChildrenContentfulBlogPostContentTextNodeParentChildren = 319,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenChildren = 320,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenId = 321,
  ChildrenContentfulBlogPostContentTextNodeParentId = 322,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContent = 323,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentDigest = 324,
  ChildrenContentfulBlogPostContentTextNodeParentInternalDescription = 325,
  ChildrenContentfulBlogPostContentTextNodeParentInternalFieldOwners = 326,
  ChildrenContentfulBlogPostContentTextNodeParentInternalIgnoreType = 327,
  ChildrenContentfulBlogPostContentTextNodeParentInternalMediaType = 328,
  ChildrenContentfulBlogPostContentTextNodeParentInternalOwner = 329,
  ChildrenContentfulBlogPostContentTextNodeParentInternalType = 330,
  ChildrenContentfulBlogPostContentTextNodeParentParentChildren = 331,
  ChildrenContentfulBlogPostContentTextNodeParentParentId = 332,
  ChildrenContentfulBlogPostContentTextNodeSysType = 333,
  ChildrenChildren = 334,
  ChildrenChildrenChildren = 335,
  ChildrenChildrenChildrenChildren = 336,
  ChildrenChildrenChildrenId = 337,
  ChildrenChildrenId = 338,
  ChildrenChildrenInternalContent = 339,
  ChildrenChildrenInternalContentDigest = 340,
  ChildrenChildrenInternalDescription = 341,
  ChildrenChildrenInternalFieldOwners = 342,
  ChildrenChildrenInternalIgnoreType = 343,
  ChildrenChildrenInternalMediaType = 344,
  ChildrenChildrenInternalOwner = 345,
  ChildrenChildrenInternalType = 346,
  ChildrenChildrenParentChildren = 347,
  ChildrenChildrenParentId = 348,
  ChildrenId = 349,
  ChildrenInternalContent = 350,
  ChildrenInternalContentDigest = 351,
  ChildrenInternalDescription = 352,
  ChildrenInternalFieldOwners = 353,
  ChildrenInternalIgnoreType = 354,
  ChildrenInternalMediaType = 355,
  ChildrenInternalOwner = 356,
  ChildrenInternalType = 357,
  ChildrenParentChildren = 358,
  ChildrenParentChildrenChildren = 359,
  ChildrenParentChildrenId = 360,
  ChildrenParentId = 361,
  ChildrenParentInternalContent = 362,
  ChildrenParentInternalContentDigest = 363,
  ChildrenParentInternalDescription = 364,
  ChildrenParentInternalFieldOwners = 365,
  ChildrenParentInternalIgnoreType = 366,
  ChildrenParentInternalMediaType = 367,
  ChildrenParentInternalOwner = 368,
  ChildrenParentInternalType = 369,
  ChildrenParentParentChildren = 370,
  ChildrenParentParentId = 371,
  ContentChildMdxBody = 372,
  ContentChildMdxChildren = 373,
  ContentChildMdxChildrenChildren = 374,
  ContentChildMdxChildrenId = 375,
  ContentChildMdxExcerpt = 376,
  ContentChildMdxFileAbsolutePath = 377,
  ContentChildMdxFrontmatterTitle = 378,
  ContentChildMdxHeadings = 379,
  ContentChildMdxHeadingsDepth = 380,
  ContentChildMdxHeadingsValue = 381,
  ContentChildMdxHtml = 382,
  ContentChildMdxId = 383,
  ContentChildMdxInternalContent = 384,
  ContentChildMdxInternalContentDigest = 385,
  ContentChildMdxInternalDescription = 386,
  ContentChildMdxInternalFieldOwners = 387,
  ContentChildMdxInternalIgnoreType = 388,
  ContentChildMdxInternalMediaType = 389,
  ContentChildMdxInternalOwner = 390,
  ContentChildMdxInternalType = 391,
  ContentChildMdxMdxAst = 392,
  ContentChildMdxParentChildren = 393,
  ContentChildMdxParentId = 394,
  ContentChildMdxRawBody = 395,
  ContentChildMdxSlug = 396,
  ContentChildMdxTableOfContents = 397,
  ContentChildMdxTimeToRead = 398,
  ContentChildMdxWordCountParagraphs = 399,
  ContentChildMdxWordCountSentences = 400,
  ContentChildMdxWordCountWords = 401,
  ContentChildren = 402,
  ContentChildrenMdx = 403,
  ContentChildrenMdxBody = 404,
  ContentChildrenMdxChildren = 405,
  ContentChildrenMdxChildrenChildren = 406,
  ContentChildrenMdxChildrenId = 407,
  ContentChildrenMdxExcerpt = 408,
  ContentChildrenMdxFileAbsolutePath = 409,
  ContentChildrenMdxFrontmatterTitle = 410,
  ContentChildrenMdxHeadings = 411,
  ContentChildrenMdxHeadingsDepth = 412,
  ContentChildrenMdxHeadingsValue = 413,
  ContentChildrenMdxHtml = 414,
  ContentChildrenMdxId = 415,
  ContentChildrenMdxInternalContent = 416,
  ContentChildrenMdxInternalContentDigest = 417,
  ContentChildrenMdxInternalDescription = 418,
  ContentChildrenMdxInternalFieldOwners = 419,
  ContentChildrenMdxInternalIgnoreType = 420,
  ContentChildrenMdxInternalMediaType = 421,
  ContentChildrenMdxInternalOwner = 422,
  ContentChildrenMdxInternalType = 423,
  ContentChildrenMdxMdxAst = 424,
  ContentChildrenMdxParentChildren = 425,
  ContentChildrenMdxParentId = 426,
  ContentChildrenMdxRawBody = 427,
  ContentChildrenMdxSlug = 428,
  ContentChildrenMdxTableOfContents = 429,
  ContentChildrenMdxTimeToRead = 430,
  ContentChildrenMdxWordCountParagraphs = 431,
  ContentChildrenMdxWordCountSentences = 432,
  ContentChildrenMdxWordCountWords = 433,
  ContentChildrenChildren = 434,
  ContentChildrenChildrenChildren = 435,
  ContentChildrenChildrenId = 436,
  ContentChildrenId = 437,
  ContentChildrenInternalContent = 438,
  ContentChildrenInternalContentDigest = 439,
  ContentChildrenInternalDescription = 440,
  ContentChildrenInternalFieldOwners = 441,
  ContentChildrenInternalIgnoreType = 442,
  ContentChildrenInternalMediaType = 443,
  ContentChildrenInternalOwner = 444,
  ContentChildrenInternalType = 445,
  ContentChildrenParentChildren = 446,
  ContentChildrenParentId = 447,
  ContentContent = 448,
  ContentId = 449,
  ContentInternalContent = 450,
  ContentInternalContentDigest = 451,
  ContentInternalDescription = 452,
  ContentInternalFieldOwners = 453,
  ContentInternalIgnoreType = 454,
  ContentInternalMediaType = 455,
  ContentInternalOwner = 456,
  ContentInternalType = 457,
  ContentParentChildren = 458,
  ContentParentChildrenChildren = 459,
  ContentParentChildrenId = 460,
  ContentParentId = 461,
  ContentParentInternalContent = 462,
  ContentParentInternalContentDigest = 463,
  ContentParentInternalDescription = 464,
  ContentParentInternalFieldOwners = 465,
  ContentParentInternalIgnoreType = 466,
  ContentParentInternalMediaType = 467,
  ContentParentInternalOwner = 468,
  ContentParentInternalType = 469,
  ContentParentParentChildren = 470,
  ContentParentParentId = 471,
  ContentSysType = 472,
  ContentfulId = 473,
  Created = 474,
  CreatedAt = 475,
  Excerpt = 476,
  Id = 477,
  InternalContent = 478,
  InternalContentDigest = 479,
  InternalDescription = 480,
  InternalFieldOwners = 481,
  InternalIgnoreType = 482,
  InternalMediaType = 483,
  InternalOwner = 484,
  InternalType = 485,
  NodeLocale = 486,
  ParentChildren = 487,
  ParentChildrenChildren = 488,
  ParentChildrenChildrenChildren = 489,
  ParentChildrenChildrenId = 490,
  ParentChildrenId = 491,
  ParentChildrenInternalContent = 492,
  ParentChildrenInternalContentDigest = 493,
  ParentChildrenInternalDescription = 494,
  ParentChildrenInternalFieldOwners = 495,
  ParentChildrenInternalIgnoreType = 496,
  ParentChildrenInternalMediaType = 497,
  ParentChildrenInternalOwner = 498,
  ParentChildrenInternalType = 499,
  ParentChildrenParentChildren = 500,
  ParentChildrenParentId = 501,
  ParentId = 502,
  ParentInternalContent = 503,
  ParentInternalContentDigest = 504,
  ParentInternalDescription = 505,
  ParentInternalFieldOwners = 506,
  ParentInternalIgnoreType = 507,
  ParentInternalMediaType = 508,
  ParentInternalOwner = 509,
  ParentInternalType = 510,
  ParentParentChildren = 511,
  ParentParentChildrenChildren = 512,
  ParentParentChildrenId = 513,
  ParentParentId = 514,
  ParentParentInternalContent = 515,
  ParentParentInternalContentDigest = 516,
  ParentParentInternalDescription = 517,
  ParentParentInternalFieldOwners = 518,
  ParentParentInternalIgnoreType = 519,
  ParentParentInternalMediaType = 520,
  ParentParentInternalOwner = 521,
  ParentParentInternalType = 522,
  ParentParentParentChildren = 523,
  ParentParentParentId = 524,
  Slug = 525,
  SpaceId = 526,
  SysContentTypeSysId = 527,
  SysContentTypeSysLinkType = 528,
  SysContentTypeSysType = 529,
  SysRevision = 530,
  SysType = 531,
  Tags = 532,
  TagsBlogPost = 533,
  TagsBlogPostCategoryBlogPost = 534,
  TagsBlogPostCategoryChildren = 535,
  TagsBlogPostCategoryContentfulId = 536,
  TagsBlogPostCategoryCreatedAt = 537,
  TagsBlogPostCategoryId = 538,
  TagsBlogPostCategoryName = 539,
  TagsBlogPostCategoryNodeLocale = 540,
  TagsBlogPostCategorySortKey = 541,
  TagsBlogPostCategorySpaceId = 542,
  TagsBlogPostCategoryUpdatedAt = 543,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 544,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 545,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 546,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 547,
  TagsBlogPostChildren = 548,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 549,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 550,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 551,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 552,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 553,
  TagsBlogPostChildrenChildren = 554,
  TagsBlogPostChildrenId = 555,
  TagsBlogPostContentChildren = 556,
  TagsBlogPostContentChildrenMdx = 557,
  TagsBlogPostContentContent = 558,
  TagsBlogPostContentId = 559,
  TagsBlogPostContentfulId = 560,
  TagsBlogPostCreated = 561,
  TagsBlogPostCreatedAt = 562,
  TagsBlogPostExcerpt = 563,
  TagsBlogPostId = 564,
  TagsBlogPostInternalContent = 565,
  TagsBlogPostInternalContentDigest = 566,
  TagsBlogPostInternalDescription = 567,
  TagsBlogPostInternalFieldOwners = 568,
  TagsBlogPostInternalIgnoreType = 569,
  TagsBlogPostInternalMediaType = 570,
  TagsBlogPostInternalOwner = 571,
  TagsBlogPostInternalType = 572,
  TagsBlogPostNodeLocale = 573,
  TagsBlogPostParentChildren = 574,
  TagsBlogPostParentId = 575,
  TagsBlogPostSlug = 576,
  TagsBlogPostSpaceId = 577,
  TagsBlogPostSysRevision = 578,
  TagsBlogPostSysType = 579,
  TagsBlogPostTags = 580,
  TagsBlogPostTagsBlogPost = 581,
  TagsBlogPostTagsChildren = 582,
  TagsBlogPostTagsContentfulId = 583,
  TagsBlogPostTagsCreatedAt = 584,
  TagsBlogPostTagsId = 585,
  TagsBlogPostTagsLevel = 586,
  TagsBlogPostTagsName = 587,
  TagsBlogPostTagsNodeLocale = 588,
  TagsBlogPostTagsOss = 589,
  TagsBlogPostTagsProject = 590,
  TagsBlogPostTagsSkillMap = 591,
  TagsBlogPostTagsSpaceId = 592,
  TagsBlogPostTagsUpdatedAt = 593,
  TagsBlogPostThumbnailChildren = 594,
  TagsBlogPostThumbnailContentfulId = 595,
  TagsBlogPostThumbnailCreatedAt = 596,
  TagsBlogPostThumbnailDescription = 597,
  TagsBlogPostThumbnailFilename = 598,
  TagsBlogPostThumbnailFilesize = 599,
  TagsBlogPostThumbnailGatsbyImage = 600,
  TagsBlogPostThumbnailGatsbyImageData = 601,
  TagsBlogPostThumbnailHeight = 602,
  TagsBlogPostThumbnailId = 603,
  TagsBlogPostThumbnailMimeType = 604,
  TagsBlogPostThumbnailNodeLocale = 605,
  TagsBlogPostThumbnailPlaceholderUrl = 606,
  TagsBlogPostThumbnailPublicUrl = 607,
  TagsBlogPostThumbnailSpaceId = 608,
  TagsBlogPostThumbnailTitle = 609,
  TagsBlogPostThumbnailUpdatedAt = 610,
  TagsBlogPostThumbnailUrl = 611,
  TagsBlogPostThumbnailWidth = 612,
  TagsBlogPostTitle = 613,
  TagsBlogPostUpdated = 614,
  TagsBlogPostUpdatedAt = 615,
  TagsChildren = 616,
  TagsChildrenChildren = 617,
  TagsChildrenChildrenChildren = 618,
  TagsChildrenChildrenId = 619,
  TagsChildrenId = 620,
  TagsChildrenInternalContent = 621,
  TagsChildrenInternalContentDigest = 622,
  TagsChildrenInternalDescription = 623,
  TagsChildrenInternalFieldOwners = 624,
  TagsChildrenInternalIgnoreType = 625,
  TagsChildrenInternalMediaType = 626,
  TagsChildrenInternalOwner = 627,
  TagsChildrenInternalType = 628,
  TagsChildrenParentChildren = 629,
  TagsChildrenParentId = 630,
  TagsContentfulId = 631,
  TagsCreatedAt = 632,
  TagsId = 633,
  TagsInternalContent = 634,
  TagsInternalContentDigest = 635,
  TagsInternalDescription = 636,
  TagsInternalFieldOwners = 637,
  TagsInternalIgnoreType = 638,
  TagsInternalMediaType = 639,
  TagsInternalOwner = 640,
  TagsInternalType = 641,
  TagsLevel = 642,
  TagsName = 643,
  TagsNodeLocale = 644,
  TagsOss = 645,
  TagsOssChildContentfulOssDetailTextNodeChildren = 646,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 647,
  TagsOssChildContentfulOssDetailTextNodeDetail = 648,
  TagsOssChildContentfulOssDetailTextNodeId = 649,
  TagsOssChildren = 650,
  TagsOssChildrenContentfulOssDetailTextNode = 651,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 652,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 653,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 654,
  TagsOssChildrenContentfulOssDetailTextNodeId = 655,
  TagsOssChildrenChildren = 656,
  TagsOssChildrenId = 657,
  TagsOssContentfulId = 658,
  TagsOssCreatedAt = 659,
  TagsOssDetailChildren = 660,
  TagsOssDetailChildrenMdx = 661,
  TagsOssDetailDetail = 662,
  TagsOssDetailId = 663,
  TagsOssHref = 664,
  TagsOssIconChildren = 665,
  TagsOssIconChildrenContentfulIconSvgTextNode = 666,
  TagsOssIconContact = 667,
  TagsOssIconContentfulId = 668,
  TagsOssIconCreatedAt = 669,
  TagsOssIconHistory = 670,
  TagsOssIconId = 671,
  TagsOssIconName = 672,
  TagsOssIconNodeLocale = 673,
  TagsOssIconOss = 674,
  TagsOssIconProject = 675,
  TagsOssIconSpaceId = 676,
  TagsOssIconUpdatedAt = 677,
  TagsOssIconWhatICanDo = 678,
  TagsOssId = 679,
  TagsOssImageChildren = 680,
  TagsOssImageContentfulId = 681,
  TagsOssImageCreatedAt = 682,
  TagsOssImageDescription = 683,
  TagsOssImageFilename = 684,
  TagsOssImageFilesize = 685,
  TagsOssImageGatsbyImage = 686,
  TagsOssImageGatsbyImageData = 687,
  TagsOssImageHeight = 688,
  TagsOssImageId = 689,
  TagsOssImageMimeType = 690,
  TagsOssImageNodeLocale = 691,
  TagsOssImagePlaceholderUrl = 692,
  TagsOssImagePublicUrl = 693,
  TagsOssImageSpaceId = 694,
  TagsOssImageTitle = 695,
  TagsOssImageUpdatedAt = 696,
  TagsOssImageUrl = 697,
  TagsOssImageWidth = 698,
  TagsOssInternalContent = 699,
  TagsOssInternalContentDigest = 700,
  TagsOssInternalDescription = 701,
  TagsOssInternalFieldOwners = 702,
  TagsOssInternalIgnoreType = 703,
  TagsOssInternalMediaType = 704,
  TagsOssInternalOwner = 705,
  TagsOssInternalType = 706,
  TagsOssName = 707,
  TagsOssNodeLocale = 708,
  TagsOssParentChildren = 709,
  TagsOssParentId = 710,
  TagsOssSpaceId = 711,
  TagsOssStartDate = 712,
  TagsOssSubName = 713,
  TagsOssSysRevision = 714,
  TagsOssSysType = 715,
  TagsOssTags = 716,
  TagsOssTagsBlogPost = 717,
  TagsOssTagsChildren = 718,
  TagsOssTagsContentfulId = 719,
  TagsOssTagsCreatedAt = 720,
  TagsOssTagsId = 721,
  TagsOssTagsLevel = 722,
  TagsOssTagsName = 723,
  TagsOssTagsNodeLocale = 724,
  TagsOssTagsOss = 725,
  TagsOssTagsProject = 726,
  TagsOssTagsSkillMap = 727,
  TagsOssTagsSpaceId = 728,
  TagsOssTagsUpdatedAt = 729,
  TagsOssUpdatedAt = 730,
  TagsParentChildren = 731,
  TagsParentChildrenChildren = 732,
  TagsParentChildrenId = 733,
  TagsParentId = 734,
  TagsParentInternalContent = 735,
  TagsParentInternalContentDigest = 736,
  TagsParentInternalDescription = 737,
  TagsParentInternalFieldOwners = 738,
  TagsParentInternalIgnoreType = 739,
  TagsParentInternalMediaType = 740,
  TagsParentInternalOwner = 741,
  TagsParentInternalType = 742,
  TagsParentParentChildren = 743,
  TagsParentParentId = 744,
  TagsProject = 745,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 746,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 747,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 748,
  TagsProjectChildContentfulProjectDetailTextNodeId = 749,
  TagsProjectChildren = 750,
  TagsProjectChildrenContentfulProjectDetailTextNode = 751,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 752,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 753,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 754,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 755,
  TagsProjectChildrenChildren = 756,
  TagsProjectChildrenId = 757,
  TagsProjectContentfulId = 758,
  TagsProjectCreatedAt = 759,
  TagsProjectDetailChildren = 760,
  TagsProjectDetailChildrenMdx = 761,
  TagsProjectDetailDetail = 762,
  TagsProjectDetailId = 763,
  TagsProjectEndDate = 764,
  TagsProjectIconChildren = 765,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 766,
  TagsProjectIconContact = 767,
  TagsProjectIconContentfulId = 768,
  TagsProjectIconCreatedAt = 769,
  TagsProjectIconHistory = 770,
  TagsProjectIconId = 771,
  TagsProjectIconName = 772,
  TagsProjectIconNodeLocale = 773,
  TagsProjectIconOss = 774,
  TagsProjectIconProject = 775,
  TagsProjectIconSpaceId = 776,
  TagsProjectIconUpdatedAt = 777,
  TagsProjectIconWhatICanDo = 778,
  TagsProjectId = 779,
  TagsProjectInternalContent = 780,
  TagsProjectInternalContentDigest = 781,
  TagsProjectInternalDescription = 782,
  TagsProjectInternalFieldOwners = 783,
  TagsProjectInternalIgnoreType = 784,
  TagsProjectInternalMediaType = 785,
  TagsProjectInternalOwner = 786,
  TagsProjectInternalType = 787,
  TagsProjectName = 788,
  TagsProjectNodeLocale = 789,
  TagsProjectParentChildren = 790,
  TagsProjectParentId = 791,
  TagsProjectSpaceId = 792,
  TagsProjectStartDate = 793,
  TagsProjectSubName = 794,
  TagsProjectSysRevision = 795,
  TagsProjectSysType = 796,
  TagsProjectTags = 797,
  TagsProjectTagsBlogPost = 798,
  TagsProjectTagsChildren = 799,
  TagsProjectTagsContentfulId = 800,
  TagsProjectTagsCreatedAt = 801,
  TagsProjectTagsId = 802,
  TagsProjectTagsLevel = 803,
  TagsProjectTagsName = 804,
  TagsProjectTagsNodeLocale = 805,
  TagsProjectTagsOss = 806,
  TagsProjectTagsProject = 807,
  TagsProjectTagsSkillMap = 808,
  TagsProjectTagsSpaceId = 809,
  TagsProjectTagsUpdatedAt = 810,
  TagsProjectUpdatedAt = 811,
  TagsSkillMap = 812,
  TagsSkillMapChildren = 813,
  TagsSkillMapChildrenChildren = 814,
  TagsSkillMapChildrenId = 815,
  TagsSkillMapContentfulId = 816,
  TagsSkillMapCreatedAt = 817,
  TagsSkillMapExpanded = 818,
  TagsSkillMapId = 819,
  TagsSkillMapInternalContent = 820,
  TagsSkillMapInternalContentDigest = 821,
  TagsSkillMapInternalDescription = 822,
  TagsSkillMapInternalFieldOwners = 823,
  TagsSkillMapInternalIgnoreType = 824,
  TagsSkillMapInternalMediaType = 825,
  TagsSkillMapInternalOwner = 826,
  TagsSkillMapInternalType = 827,
  TagsSkillMapName = 828,
  TagsSkillMapNodeLocale = 829,
  TagsSkillMapParentChildren = 830,
  TagsSkillMapParentId = 831,
  TagsSkillMapSkills = 832,
  TagsSkillMapSkillsBlogPost = 833,
  TagsSkillMapSkillsChildren = 834,
  TagsSkillMapSkillsContentfulId = 835,
  TagsSkillMapSkillsCreatedAt = 836,
  TagsSkillMapSkillsId = 837,
  TagsSkillMapSkillsLevel = 838,
  TagsSkillMapSkillsName = 839,
  TagsSkillMapSkillsNodeLocale = 840,
  TagsSkillMapSkillsOss = 841,
  TagsSkillMapSkillsProject = 842,
  TagsSkillMapSkillsSkillMap = 843,
  TagsSkillMapSkillsSpaceId = 844,
  TagsSkillMapSkillsUpdatedAt = 845,
  TagsSkillMapSortKey = 846,
  TagsSkillMapSpaceId = 847,
  TagsSkillMapSysRevision = 848,
  TagsSkillMapSysType = 849,
  TagsSkillMapUpdatedAt = 850,
  TagsSpaceId = 851,
  TagsSysRevision = 852,
  TagsSysType = 853,
  TagsUpdatedAt = 854,
  ThumbnailChildren = 855,
  ThumbnailChildrenChildren = 856,
  ThumbnailChildrenChildrenChildren = 857,
  ThumbnailChildrenChildrenId = 858,
  ThumbnailChildrenId = 859,
  ThumbnailChildrenInternalContent = 860,
  ThumbnailChildrenInternalContentDigest = 861,
  ThumbnailChildrenInternalDescription = 862,
  ThumbnailChildrenInternalFieldOwners = 863,
  ThumbnailChildrenInternalIgnoreType = 864,
  ThumbnailChildrenInternalMediaType = 865,
  ThumbnailChildrenInternalOwner = 866,
  ThumbnailChildrenInternalType = 867,
  ThumbnailChildrenParentChildren = 868,
  ThumbnailChildrenParentId = 869,
  ThumbnailContentfulId = 870,
  ThumbnailCreatedAt = 871,
  ThumbnailDescription = 872,
  ThumbnailFileContentType = 873,
  ThumbnailFileDetailsSize = 874,
  ThumbnailFileFileName = 875,
  ThumbnailFileUrl = 876,
  ThumbnailFilename = 877,
  ThumbnailFilesize = 878,
  ThumbnailGatsbyImage = 879,
  ThumbnailGatsbyImageData = 880,
  ThumbnailHeight = 881,
  ThumbnailId = 882,
  ThumbnailInternalContent = 883,
  ThumbnailInternalContentDigest = 884,
  ThumbnailInternalDescription = 885,
  ThumbnailInternalFieldOwners = 886,
  ThumbnailInternalIgnoreType = 887,
  ThumbnailInternalMediaType = 888,
  ThumbnailInternalOwner = 889,
  ThumbnailInternalType = 890,
  ThumbnailMimeType = 891,
  ThumbnailNodeLocale = 892,
  ThumbnailParentChildren = 893,
  ThumbnailParentChildrenChildren = 894,
  ThumbnailParentChildrenId = 895,
  ThumbnailParentId = 896,
  ThumbnailParentInternalContent = 897,
  ThumbnailParentInternalContentDigest = 898,
  ThumbnailParentInternalDescription = 899,
  ThumbnailParentInternalFieldOwners = 900,
  ThumbnailParentInternalIgnoreType = 901,
  ThumbnailParentInternalMediaType = 902,
  ThumbnailParentInternalOwner = 903,
  ThumbnailParentInternalType = 904,
  ThumbnailParentParentChildren = 905,
  ThumbnailParentParentId = 906,
  ThumbnailPlaceholderUrl = 907,
  ThumbnailPublicUrl = 908,
  ThumbnailResizeHeight = 909,
  ThumbnailResizeSrc = 910,
  ThumbnailResizeWidth = 911,
  ThumbnailSpaceId = 912,
  ThumbnailSysRevision = 913,
  ThumbnailSysType = 914,
  ThumbnailTitle = 915,
  ThumbnailUpdatedAt = 916,
  ThumbnailUrl = 917,
  ThumbnailWidth = 918,
  Title = 919,
  Updated = 920,
  UpdatedAt = 921
}

export type ContentfulBlogPostFilterInput = {
  category: InputMaybe<ContentfulCategoryFilterInput>;
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

export type ContentfulCategory = ContentfulEntry & ContentfulReference & Node & {
  blog_post: Maybe<Array<Maybe<ContentfulBlogPost>>>;
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  sortKey: Maybe<Scalars['Int']>;
  spaceId: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulCategorySys>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulCategoryCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulCategoryUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulCategoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulCategoryEdge>;
  group: Array<ContentfulCategoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulCategoryConnectionDistinctArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionGroupArgs = {
  field: ContentfulCategoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulCategoryConnectionMaxArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionMinArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionSumArgs = {
  field: ContentfulCategoryFieldsEnum;
};

export type ContentfulCategoryEdge = {
  next: Maybe<ContentfulCategory>;
  node: ContentfulCategory;
  previous: Maybe<ContentfulCategory>;
};

export enum ContentfulCategoryFieldsEnum {
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
  BlogPostCategoryName = 30,
  BlogPostCategoryNodeLocale = 31,
  BlogPostCategoryParentChildren = 32,
  BlogPostCategoryParentId = 33,
  BlogPostCategorySortKey = 34,
  BlogPostCategorySpaceId = 35,
  BlogPostCategorySysRevision = 36,
  BlogPostCategorySysType = 37,
  BlogPostCategoryUpdatedAt = 38,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxBody = 39,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxChildren = 40,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 41,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 42,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHeadings = 43,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHtml = 44,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxId = 45,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 46,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxRawBody = 47,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxSlug = 48,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 49,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 50,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 51,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 52,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxBody = 53,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 54,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 55,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 56,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 57,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 58,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxId = 59,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 60,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 61,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 62,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 63,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 64,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 65,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 66,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 67,
  BlogPostChildContentfulBlogPostContentTextNodeId = 68,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 69,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 70,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 71,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 72,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 73,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 74,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 75,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 76,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 77,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 78,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 79,
  BlogPostChildren = 80,
  BlogPostChildrenContentfulBlogPostContentTextNode = 81,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxBody = 82,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 83,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 84,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 85,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 86,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 87,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxId = 88,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 89,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 90,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 91,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 92,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 93,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 94,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 95,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 96,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 97,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 98,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 99,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 100,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 101,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 102,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 103,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 104,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 105,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 106,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 107,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 108,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 109,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 110,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 111,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 112,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 113,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 114,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 115,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 116,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 117,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 118,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 119,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 120,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 121,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 122,
  BlogPostChildrenChildren = 123,
  BlogPostChildrenChildrenChildren = 124,
  BlogPostChildrenChildrenId = 125,
  BlogPostChildrenId = 126,
  BlogPostChildrenInternalContent = 127,
  BlogPostChildrenInternalContentDigest = 128,
  BlogPostChildrenInternalDescription = 129,
  BlogPostChildrenInternalFieldOwners = 130,
  BlogPostChildrenInternalIgnoreType = 131,
  BlogPostChildrenInternalMediaType = 132,
  BlogPostChildrenInternalOwner = 133,
  BlogPostChildrenInternalType = 134,
  BlogPostChildrenParentChildren = 135,
  BlogPostChildrenParentId = 136,
  BlogPostContentChildMdxBody = 137,
  BlogPostContentChildMdxChildren = 138,
  BlogPostContentChildMdxExcerpt = 139,
  BlogPostContentChildMdxFileAbsolutePath = 140,
  BlogPostContentChildMdxHeadings = 141,
  BlogPostContentChildMdxHtml = 142,
  BlogPostContentChildMdxId = 143,
  BlogPostContentChildMdxMdxAst = 144,
  BlogPostContentChildMdxRawBody = 145,
  BlogPostContentChildMdxSlug = 146,
  BlogPostContentChildMdxTableOfContents = 147,
  BlogPostContentChildMdxTimeToRead = 148,
  BlogPostContentChildren = 149,
  BlogPostContentChildrenMdx = 150,
  BlogPostContentChildrenMdxBody = 151,
  BlogPostContentChildrenMdxChildren = 152,
  BlogPostContentChildrenMdxExcerpt = 153,
  BlogPostContentChildrenMdxFileAbsolutePath = 154,
  BlogPostContentChildrenMdxHeadings = 155,
  BlogPostContentChildrenMdxHtml = 156,
  BlogPostContentChildrenMdxId = 157,
  BlogPostContentChildrenMdxMdxAst = 158,
  BlogPostContentChildrenMdxRawBody = 159,
  BlogPostContentChildrenMdxSlug = 160,
  BlogPostContentChildrenMdxTableOfContents = 161,
  BlogPostContentChildrenMdxTimeToRead = 162,
  BlogPostContentChildrenChildren = 163,
  BlogPostContentChildrenId = 164,
  BlogPostContentContent = 165,
  BlogPostContentId = 166,
  BlogPostContentInternalContent = 167,
  BlogPostContentInternalContentDigest = 168,
  BlogPostContentInternalDescription = 169,
  BlogPostContentInternalFieldOwners = 170,
  BlogPostContentInternalIgnoreType = 171,
  BlogPostContentInternalMediaType = 172,
  BlogPostContentInternalOwner = 173,
  BlogPostContentInternalType = 174,
  BlogPostContentParentChildren = 175,
  BlogPostContentParentId = 176,
  BlogPostContentSysType = 177,
  BlogPostContentfulId = 178,
  BlogPostCreated = 179,
  BlogPostCreatedAt = 180,
  BlogPostExcerpt = 181,
  BlogPostId = 182,
  BlogPostInternalContent = 183,
  BlogPostInternalContentDigest = 184,
  BlogPostInternalDescription = 185,
  BlogPostInternalFieldOwners = 186,
  BlogPostInternalIgnoreType = 187,
  BlogPostInternalMediaType = 188,
  BlogPostInternalOwner = 189,
  BlogPostInternalType = 190,
  BlogPostNodeLocale = 191,
  BlogPostParentChildren = 192,
  BlogPostParentChildrenChildren = 193,
  BlogPostParentChildrenId = 194,
  BlogPostParentId = 195,
  BlogPostParentInternalContent = 196,
  BlogPostParentInternalContentDigest = 197,
  BlogPostParentInternalDescription = 198,
  BlogPostParentInternalFieldOwners = 199,
  BlogPostParentInternalIgnoreType = 200,
  BlogPostParentInternalMediaType = 201,
  BlogPostParentInternalOwner = 202,
  BlogPostParentInternalType = 203,
  BlogPostParentParentChildren = 204,
  BlogPostParentParentId = 205,
  BlogPostSlug = 206,
  BlogPostSpaceId = 207,
  BlogPostSysRevision = 208,
  BlogPostSysType = 209,
  BlogPostTags = 210,
  BlogPostTagsBlogPost = 211,
  BlogPostTagsBlogPostChildren = 212,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 213,
  BlogPostTagsBlogPostContentfulId = 214,
  BlogPostTagsBlogPostCreated = 215,
  BlogPostTagsBlogPostCreatedAt = 216,
  BlogPostTagsBlogPostExcerpt = 217,
  BlogPostTagsBlogPostId = 218,
  BlogPostTagsBlogPostNodeLocale = 219,
  BlogPostTagsBlogPostSlug = 220,
  BlogPostTagsBlogPostSpaceId = 221,
  BlogPostTagsBlogPostTags = 222,
  BlogPostTagsBlogPostTitle = 223,
  BlogPostTagsBlogPostUpdated = 224,
  BlogPostTagsBlogPostUpdatedAt = 225,
  BlogPostTagsChildren = 226,
  BlogPostTagsChildrenChildren = 227,
  BlogPostTagsChildrenId = 228,
  BlogPostTagsContentfulId = 229,
  BlogPostTagsCreatedAt = 230,
  BlogPostTagsId = 231,
  BlogPostTagsInternalContent = 232,
  BlogPostTagsInternalContentDigest = 233,
  BlogPostTagsInternalDescription = 234,
  BlogPostTagsInternalFieldOwners = 235,
  BlogPostTagsInternalIgnoreType = 236,
  BlogPostTagsInternalMediaType = 237,
  BlogPostTagsInternalOwner = 238,
  BlogPostTagsInternalType = 239,
  BlogPostTagsLevel = 240,
  BlogPostTagsName = 241,
  BlogPostTagsNodeLocale = 242,
  BlogPostTagsOss = 243,
  BlogPostTagsOssChildren = 244,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 245,
  BlogPostTagsOssContentfulId = 246,
  BlogPostTagsOssCreatedAt = 247,
  BlogPostTagsOssHref = 248,
  BlogPostTagsOssId = 249,
  BlogPostTagsOssName = 250,
  BlogPostTagsOssNodeLocale = 251,
  BlogPostTagsOssSpaceId = 252,
  BlogPostTagsOssStartDate = 253,
  BlogPostTagsOssSubName = 254,
  BlogPostTagsOssTags = 255,
  BlogPostTagsOssUpdatedAt = 256,
  BlogPostTagsParentChildren = 257,
  BlogPostTagsParentId = 258,
  BlogPostTagsProject = 259,
  BlogPostTagsProjectChildren = 260,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 261,
  BlogPostTagsProjectContentfulId = 262,
  BlogPostTagsProjectCreatedAt = 263,
  BlogPostTagsProjectEndDate = 264,
  BlogPostTagsProjectId = 265,
  BlogPostTagsProjectName = 266,
  BlogPostTagsProjectNodeLocale = 267,
  BlogPostTagsProjectSpaceId = 268,
  BlogPostTagsProjectStartDate = 269,
  BlogPostTagsProjectSubName = 270,
  BlogPostTagsProjectTags = 271,
  BlogPostTagsProjectUpdatedAt = 272,
  BlogPostTagsSkillMap = 273,
  BlogPostTagsSkillMapChildren = 274,
  BlogPostTagsSkillMapContentfulId = 275,
  BlogPostTagsSkillMapCreatedAt = 276,
  BlogPostTagsSkillMapExpanded = 277,
  BlogPostTagsSkillMapId = 278,
  BlogPostTagsSkillMapName = 279,
  BlogPostTagsSkillMapNodeLocale = 280,
  BlogPostTagsSkillMapSkills = 281,
  BlogPostTagsSkillMapSortKey = 282,
  BlogPostTagsSkillMapSpaceId = 283,
  BlogPostTagsSkillMapUpdatedAt = 284,
  BlogPostTagsSpaceId = 285,
  BlogPostTagsSysRevision = 286,
  BlogPostTagsSysType = 287,
  BlogPostTagsUpdatedAt = 288,
  BlogPostThumbnailChildren = 289,
  BlogPostThumbnailChildrenChildren = 290,
  BlogPostThumbnailChildrenId = 291,
  BlogPostThumbnailContentfulId = 292,
  BlogPostThumbnailCreatedAt = 293,
  BlogPostThumbnailDescription = 294,
  BlogPostThumbnailFileContentType = 295,
  BlogPostThumbnailFileFileName = 296,
  BlogPostThumbnailFileUrl = 297,
  BlogPostThumbnailFilename = 298,
  BlogPostThumbnailFilesize = 299,
  BlogPostThumbnailGatsbyImage = 300,
  BlogPostThumbnailGatsbyImageData = 301,
  BlogPostThumbnailHeight = 302,
  BlogPostThumbnailId = 303,
  BlogPostThumbnailInternalContent = 304,
  BlogPostThumbnailInternalContentDigest = 305,
  BlogPostThumbnailInternalDescription = 306,
  BlogPostThumbnailInternalFieldOwners = 307,
  BlogPostThumbnailInternalIgnoreType = 308,
  BlogPostThumbnailInternalMediaType = 309,
  BlogPostThumbnailInternalOwner = 310,
  BlogPostThumbnailInternalType = 311,
  BlogPostThumbnailMimeType = 312,
  BlogPostThumbnailNodeLocale = 313,
  BlogPostThumbnailParentChildren = 314,
  BlogPostThumbnailParentId = 315,
  BlogPostThumbnailPlaceholderUrl = 316,
  BlogPostThumbnailPublicUrl = 317,
  BlogPostThumbnailResizeHeight = 318,
  BlogPostThumbnailResizeSrc = 319,
  BlogPostThumbnailResizeWidth = 320,
  BlogPostThumbnailSpaceId = 321,
  BlogPostThumbnailSysRevision = 322,
  BlogPostThumbnailSysType = 323,
  BlogPostThumbnailTitle = 324,
  BlogPostThumbnailUpdatedAt = 325,
  BlogPostThumbnailUrl = 326,
  BlogPostThumbnailWidth = 327,
  BlogPostTitle = 328,
  BlogPostUpdated = 329,
  BlogPostUpdatedAt = 330,
  Children = 331,
  ChildrenChildren = 332,
  ChildrenChildrenChildren = 333,
  ChildrenChildrenChildrenChildren = 334,
  ChildrenChildrenChildrenId = 335,
  ChildrenChildrenId = 336,
  ChildrenChildrenInternalContent = 337,
  ChildrenChildrenInternalContentDigest = 338,
  ChildrenChildrenInternalDescription = 339,
  ChildrenChildrenInternalFieldOwners = 340,
  ChildrenChildrenInternalIgnoreType = 341,
  ChildrenChildrenInternalMediaType = 342,
  ChildrenChildrenInternalOwner = 343,
  ChildrenChildrenInternalType = 344,
  ChildrenChildrenParentChildren = 345,
  ChildrenChildrenParentId = 346,
  ChildrenId = 347,
  ChildrenInternalContent = 348,
  ChildrenInternalContentDigest = 349,
  ChildrenInternalDescription = 350,
  ChildrenInternalFieldOwners = 351,
  ChildrenInternalIgnoreType = 352,
  ChildrenInternalMediaType = 353,
  ChildrenInternalOwner = 354,
  ChildrenInternalType = 355,
  ChildrenParentChildren = 356,
  ChildrenParentChildrenChildren = 357,
  ChildrenParentChildrenId = 358,
  ChildrenParentId = 359,
  ChildrenParentInternalContent = 360,
  ChildrenParentInternalContentDigest = 361,
  ChildrenParentInternalDescription = 362,
  ChildrenParentInternalFieldOwners = 363,
  ChildrenParentInternalIgnoreType = 364,
  ChildrenParentInternalMediaType = 365,
  ChildrenParentInternalOwner = 366,
  ChildrenParentInternalType = 367,
  ChildrenParentParentChildren = 368,
  ChildrenParentParentId = 369,
  ContentfulId = 370,
  CreatedAt = 371,
  Id = 372,
  InternalContent = 373,
  InternalContentDigest = 374,
  InternalDescription = 375,
  InternalFieldOwners = 376,
  InternalIgnoreType = 377,
  InternalMediaType = 378,
  InternalOwner = 379,
  InternalType = 380,
  Name = 381,
  NodeLocale = 382,
  ParentChildren = 383,
  ParentChildrenChildren = 384,
  ParentChildrenChildrenChildren = 385,
  ParentChildrenChildrenId = 386,
  ParentChildrenId = 387,
  ParentChildrenInternalContent = 388,
  ParentChildrenInternalContentDigest = 389,
  ParentChildrenInternalDescription = 390,
  ParentChildrenInternalFieldOwners = 391,
  ParentChildrenInternalIgnoreType = 392,
  ParentChildrenInternalMediaType = 393,
  ParentChildrenInternalOwner = 394,
  ParentChildrenInternalType = 395,
  ParentChildrenParentChildren = 396,
  ParentChildrenParentId = 397,
  ParentId = 398,
  ParentInternalContent = 399,
  ParentInternalContentDigest = 400,
  ParentInternalDescription = 401,
  ParentInternalFieldOwners = 402,
  ParentInternalIgnoreType = 403,
  ParentInternalMediaType = 404,
  ParentInternalOwner = 405,
  ParentInternalType = 406,
  ParentParentChildren = 407,
  ParentParentChildrenChildren = 408,
  ParentParentChildrenId = 409,
  ParentParentId = 410,
  ParentParentInternalContent = 411,
  ParentParentInternalContentDigest = 412,
  ParentParentInternalDescription = 413,
  ParentParentInternalFieldOwners = 414,
  ParentParentInternalIgnoreType = 415,
  ParentParentInternalMediaType = 416,
  ParentParentInternalOwner = 417,
  ParentParentInternalType = 418,
  ParentParentParentChildren = 419,
  ParentParentParentId = 420,
  SortKey = 421,
  SpaceId = 422,
  SysContentTypeSysId = 423,
  SysContentTypeSysLinkType = 424,
  SysContentTypeSysType = 425,
  SysRevision = 426,
  SysType = 427,
  UpdatedAt = 428
}

export type ContentfulCategoryFilterInput = {
  blog_post: InputMaybe<ContentfulBlogPostFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulCategorySysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulCategoryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulCategoryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulCategoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulCategoryGroupConnectionDistinctArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryGroupConnectionGroupArgs = {
  field: ContentfulCategoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulCategoryGroupConnectionMaxArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryGroupConnectionMinArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryGroupConnectionSumArgs = {
  field: ContentfulCategoryFieldsEnum;
};

export type ContentfulCategorySortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulCategoryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulCategorySys = {
  contentType: Maybe<ContentfulCategorySysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulCategorySysContentType = {
  sys: Maybe<ContentfulCategorySysContentTypeSys>;
};

export type ContentfulCategorySysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulCategorySysContentTypeSysFilterInput>;
};

export type ContentfulCategorySysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulCategorySysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulCategorySysFilterInput = {
  contentType: InputMaybe<ContentfulCategorySysContentTypeFilterInput>;
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
  IconSvgDarkFileContentType = 60,
  IconSvgDarkFileDetailsSize = 61,
  IconSvgDarkFileFileName = 62,
  IconSvgDarkFileUrl = 63,
  IconSvgDarkFilename = 64,
  IconSvgDarkFilesize = 65,
  IconSvgDarkGatsbyImage = 66,
  IconSvgDarkGatsbyImageData = 67,
  IconSvgDarkHeight = 68,
  IconSvgDarkId = 69,
  IconSvgDarkInternalContent = 70,
  IconSvgDarkInternalContentDigest = 71,
  IconSvgDarkInternalDescription = 72,
  IconSvgDarkInternalFieldOwners = 73,
  IconSvgDarkInternalIgnoreType = 74,
  IconSvgDarkInternalMediaType = 75,
  IconSvgDarkInternalOwner = 76,
  IconSvgDarkInternalType = 77,
  IconSvgDarkMimeType = 78,
  IconSvgDarkNodeLocale = 79,
  IconSvgDarkParentChildren = 80,
  IconSvgDarkParentChildrenChildren = 81,
  IconSvgDarkParentChildrenId = 82,
  IconSvgDarkParentId = 83,
  IconSvgDarkParentInternalContent = 84,
  IconSvgDarkParentInternalContentDigest = 85,
  IconSvgDarkParentInternalDescription = 86,
  IconSvgDarkParentInternalFieldOwners = 87,
  IconSvgDarkParentInternalIgnoreType = 88,
  IconSvgDarkParentInternalMediaType = 89,
  IconSvgDarkParentInternalOwner = 90,
  IconSvgDarkParentInternalType = 91,
  IconSvgDarkParentParentChildren = 92,
  IconSvgDarkParentParentId = 93,
  IconSvgDarkPlaceholderUrl = 94,
  IconSvgDarkPublicUrl = 95,
  IconSvgDarkResizeHeight = 96,
  IconSvgDarkResizeSrc = 97,
  IconSvgDarkResizeWidth = 98,
  IconSvgDarkSpaceId = 99,
  IconSvgDarkSysRevision = 100,
  IconSvgDarkSysType = 101,
  IconSvgDarkTitle = 102,
  IconSvgDarkUpdatedAt = 103,
  IconSvgDarkUrl = 104,
  IconSvgDarkWidth = 105,
  IconSvgLightChildren = 106,
  IconSvgLightChildrenChildren = 107,
  IconSvgLightChildrenChildrenChildren = 108,
  IconSvgLightChildrenChildrenId = 109,
  IconSvgLightChildrenId = 110,
  IconSvgLightChildrenInternalContent = 111,
  IconSvgLightChildrenInternalContentDigest = 112,
  IconSvgLightChildrenInternalDescription = 113,
  IconSvgLightChildrenInternalFieldOwners = 114,
  IconSvgLightChildrenInternalIgnoreType = 115,
  IconSvgLightChildrenInternalMediaType = 116,
  IconSvgLightChildrenInternalOwner = 117,
  IconSvgLightChildrenInternalType = 118,
  IconSvgLightChildrenParentChildren = 119,
  IconSvgLightChildrenParentId = 120,
  IconSvgLightContentfulId = 121,
  IconSvgLightCreatedAt = 122,
  IconSvgLightDescription = 123,
  IconSvgLightFileContentType = 124,
  IconSvgLightFileDetailsSize = 125,
  IconSvgLightFileFileName = 126,
  IconSvgLightFileUrl = 127,
  IconSvgLightFilename = 128,
  IconSvgLightFilesize = 129,
  IconSvgLightGatsbyImage = 130,
  IconSvgLightGatsbyImageData = 131,
  IconSvgLightHeight = 132,
  IconSvgLightId = 133,
  IconSvgLightInternalContent = 134,
  IconSvgLightInternalContentDigest = 135,
  IconSvgLightInternalDescription = 136,
  IconSvgLightInternalFieldOwners = 137,
  IconSvgLightInternalIgnoreType = 138,
  IconSvgLightInternalMediaType = 139,
  IconSvgLightInternalOwner = 140,
  IconSvgLightInternalType = 141,
  IconSvgLightMimeType = 142,
  IconSvgLightNodeLocale = 143,
  IconSvgLightParentChildren = 144,
  IconSvgLightParentChildrenChildren = 145,
  IconSvgLightParentChildrenId = 146,
  IconSvgLightParentId = 147,
  IconSvgLightParentInternalContent = 148,
  IconSvgLightParentInternalContentDigest = 149,
  IconSvgLightParentInternalDescription = 150,
  IconSvgLightParentInternalFieldOwners = 151,
  IconSvgLightParentInternalIgnoreType = 152,
  IconSvgLightParentInternalMediaType = 153,
  IconSvgLightParentInternalOwner = 154,
  IconSvgLightParentInternalType = 155,
  IconSvgLightParentParentChildren = 156,
  IconSvgLightParentParentId = 157,
  IconSvgLightPlaceholderUrl = 158,
  IconSvgLightPublicUrl = 159,
  IconSvgLightResizeHeight = 160,
  IconSvgLightResizeSrc = 161,
  IconSvgLightResizeWidth = 162,
  IconSvgLightSpaceId = 163,
  IconSvgLightSysRevision = 164,
  IconSvgLightSysType = 165,
  IconSvgLightTitle = 166,
  IconSvgLightUpdatedAt = 167,
  IconSvgLightUrl = 168,
  IconSvgLightWidth = 169,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 170,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 171,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 172,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 173,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 174,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 175,
  IconChildContentfulIconSvgTextNodeChildMdxId = 176,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 177,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 178,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 179,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 180,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 181,
  IconChildContentfulIconSvgTextNodeChildren = 182,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 183,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 184,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 185,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 186,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 187,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 188,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 189,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 190,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 191,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 192,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 193,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 194,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 195,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 196,
  IconChildContentfulIconSvgTextNodeChildrenId = 197,
  IconChildContentfulIconSvgTextNodeId = 198,
  IconChildContentfulIconSvgTextNodeInternalContent = 199,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 200,
  IconChildContentfulIconSvgTextNodeInternalDescription = 201,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 202,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 203,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 204,
  IconChildContentfulIconSvgTextNodeInternalOwner = 205,
  IconChildContentfulIconSvgTextNodeInternalType = 206,
  IconChildContentfulIconSvgTextNodeParentChildren = 207,
  IconChildContentfulIconSvgTextNodeParentId = 208,
  IconChildContentfulIconSvgTextNodeSvg = 209,
  IconChildContentfulIconSvgTextNodeSysType = 210,
  IconChildren = 211,
  IconChildrenContentfulIconSvgTextNode = 212,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 213,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 214,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 215,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 216,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 217,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 218,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 219,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 220,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 221,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 222,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 223,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 224,
  IconChildrenContentfulIconSvgTextNodeChildren = 225,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 226,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 227,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 228,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 229,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 230,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 231,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 232,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 233,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 234,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 235,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 236,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 237,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 238,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 239,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 240,
  IconChildrenContentfulIconSvgTextNodeId = 241,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 242,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 243,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 244,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 245,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 246,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 247,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 248,
  IconChildrenContentfulIconSvgTextNodeInternalType = 249,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 250,
  IconChildrenContentfulIconSvgTextNodeParentId = 251,
  IconChildrenContentfulIconSvgTextNodeSvg = 252,
  IconChildrenContentfulIconSvgTextNodeSysType = 253,
  IconChildrenChildren = 254,
  IconChildrenChildrenChildren = 255,
  IconChildrenChildrenId = 256,
  IconChildrenId = 257,
  IconChildrenInternalContent = 258,
  IconChildrenInternalContentDigest = 259,
  IconChildrenInternalDescription = 260,
  IconChildrenInternalFieldOwners = 261,
  IconChildrenInternalIgnoreType = 262,
  IconChildrenInternalMediaType = 263,
  IconChildrenInternalOwner = 264,
  IconChildrenInternalType = 265,
  IconChildrenParentChildren = 266,
  IconChildrenParentId = 267,
  IconContact = 268,
  IconContactChildren = 269,
  IconContactChildrenChildren = 270,
  IconContactChildrenId = 271,
  IconContactContentfulId = 272,
  IconContactCreatedAt = 273,
  IconContactHref = 274,
  IconContactIconSvgDarkChildren = 275,
  IconContactIconSvgDarkContentfulId = 276,
  IconContactIconSvgDarkCreatedAt = 277,
  IconContactIconSvgDarkDescription = 278,
  IconContactIconSvgDarkFilename = 279,
  IconContactIconSvgDarkFilesize = 280,
  IconContactIconSvgDarkGatsbyImage = 281,
  IconContactIconSvgDarkGatsbyImageData = 282,
  IconContactIconSvgDarkHeight = 283,
  IconContactIconSvgDarkId = 284,
  IconContactIconSvgDarkMimeType = 285,
  IconContactIconSvgDarkNodeLocale = 286,
  IconContactIconSvgDarkPlaceholderUrl = 287,
  IconContactIconSvgDarkPublicUrl = 288,
  IconContactIconSvgDarkSpaceId = 289,
  IconContactIconSvgDarkTitle = 290,
  IconContactIconSvgDarkUpdatedAt = 291,
  IconContactIconSvgDarkUrl = 292,
  IconContactIconSvgDarkWidth = 293,
  IconContactIconSvgLightChildren = 294,
  IconContactIconSvgLightContentfulId = 295,
  IconContactIconSvgLightCreatedAt = 296,
  IconContactIconSvgLightDescription = 297,
  IconContactIconSvgLightFilename = 298,
  IconContactIconSvgLightFilesize = 299,
  IconContactIconSvgLightGatsbyImage = 300,
  IconContactIconSvgLightGatsbyImageData = 301,
  IconContactIconSvgLightHeight = 302,
  IconContactIconSvgLightId = 303,
  IconContactIconSvgLightMimeType = 304,
  IconContactIconSvgLightNodeLocale = 305,
  IconContactIconSvgLightPlaceholderUrl = 306,
  IconContactIconSvgLightPublicUrl = 307,
  IconContactIconSvgLightSpaceId = 308,
  IconContactIconSvgLightTitle = 309,
  IconContactIconSvgLightUpdatedAt = 310,
  IconContactIconSvgLightUrl = 311,
  IconContactIconSvgLightWidth = 312,
  IconContactIconChildren = 313,
  IconContactIconChildrenContentfulIconSvgTextNode = 314,
  IconContactIconContact = 315,
  IconContactIconContentfulId = 316,
  IconContactIconCreatedAt = 317,
  IconContactIconHistory = 318,
  IconContactIconId = 319,
  IconContactIconName = 320,
  IconContactIconNodeLocale = 321,
  IconContactIconOss = 322,
  IconContactIconProject = 323,
  IconContactIconSpaceId = 324,
  IconContactIconUpdatedAt = 325,
  IconContactIconWhatICanDo = 326,
  IconContactId = 327,
  IconContactInternalContent = 328,
  IconContactInternalContentDigest = 329,
  IconContactInternalDescription = 330,
  IconContactInternalFieldOwners = 331,
  IconContactInternalIgnoreType = 332,
  IconContactInternalMediaType = 333,
  IconContactInternalOwner = 334,
  IconContactInternalType = 335,
  IconContactName = 336,
  IconContactNodeLocale = 337,
  IconContactParentChildren = 338,
  IconContactParentId = 339,
  IconContactSortKey = 340,
  IconContactSpaceId = 341,
  IconContactSubName = 342,
  IconContactSysRevision = 343,
  IconContactSysType = 344,
  IconContactUpdatedAt = 345,
  IconContentfulId = 346,
  IconCreatedAt = 347,
  IconHistory = 348,
  IconHistoryChildren = 349,
  IconHistoryChildrenChildren = 350,
  IconHistoryChildrenId = 351,
  IconHistoryContentfulId = 352,
  IconHistoryCreatedAt = 353,
  IconHistoryDate = 354,
  IconHistoryIconChildren = 355,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 356,
  IconHistoryIconContact = 357,
  IconHistoryIconContentfulId = 358,
  IconHistoryIconCreatedAt = 359,
  IconHistoryIconHistory = 360,
  IconHistoryIconId = 361,
  IconHistoryIconName = 362,
  IconHistoryIconNodeLocale = 363,
  IconHistoryIconOss = 364,
  IconHistoryIconProject = 365,
  IconHistoryIconSpaceId = 366,
  IconHistoryIconUpdatedAt = 367,
  IconHistoryIconWhatICanDo = 368,
  IconHistoryId = 369,
  IconHistoryInternalContent = 370,
  IconHistoryInternalContentDigest = 371,
  IconHistoryInternalDescription = 372,
  IconHistoryInternalFieldOwners = 373,
  IconHistoryInternalIgnoreType = 374,
  IconHistoryInternalMediaType = 375,
  IconHistoryInternalOwner = 376,
  IconHistoryInternalType = 377,
  IconHistoryName = 378,
  IconHistoryNodeLocale = 379,
  IconHistoryParentChildren = 380,
  IconHistoryParentId = 381,
  IconHistorySpaceId = 382,
  IconHistorySubName = 383,
  IconHistorySysRevision = 384,
  IconHistorySysType = 385,
  IconHistoryUpdatedAt = 386,
  IconId = 387,
  IconInternalContent = 388,
  IconInternalContentDigest = 389,
  IconInternalDescription = 390,
  IconInternalFieldOwners = 391,
  IconInternalIgnoreType = 392,
  IconInternalMediaType = 393,
  IconInternalOwner = 394,
  IconInternalType = 395,
  IconName = 396,
  IconNodeLocale = 397,
  IconOss = 398,
  IconOssChildContentfulOssDetailTextNodeChildren = 399,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 400,
  IconOssChildContentfulOssDetailTextNodeDetail = 401,
  IconOssChildContentfulOssDetailTextNodeId = 402,
  IconOssChildren = 403,
  IconOssChildrenContentfulOssDetailTextNode = 404,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 405,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 406,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 407,
  IconOssChildrenContentfulOssDetailTextNodeId = 408,
  IconOssChildrenChildren = 409,
  IconOssChildrenId = 410,
  IconOssContentfulId = 411,
  IconOssCreatedAt = 412,
  IconOssDetailChildren = 413,
  IconOssDetailChildrenMdx = 414,
  IconOssDetailDetail = 415,
  IconOssDetailId = 416,
  IconOssHref = 417,
  IconOssIconChildren = 418,
  IconOssIconChildrenContentfulIconSvgTextNode = 419,
  IconOssIconContact = 420,
  IconOssIconContentfulId = 421,
  IconOssIconCreatedAt = 422,
  IconOssIconHistory = 423,
  IconOssIconId = 424,
  IconOssIconName = 425,
  IconOssIconNodeLocale = 426,
  IconOssIconOss = 427,
  IconOssIconProject = 428,
  IconOssIconSpaceId = 429,
  IconOssIconUpdatedAt = 430,
  IconOssIconWhatICanDo = 431,
  IconOssId = 432,
  IconOssImageChildren = 433,
  IconOssImageContentfulId = 434,
  IconOssImageCreatedAt = 435,
  IconOssImageDescription = 436,
  IconOssImageFilename = 437,
  IconOssImageFilesize = 438,
  IconOssImageGatsbyImage = 439,
  IconOssImageGatsbyImageData = 440,
  IconOssImageHeight = 441,
  IconOssImageId = 442,
  IconOssImageMimeType = 443,
  IconOssImageNodeLocale = 444,
  IconOssImagePlaceholderUrl = 445,
  IconOssImagePublicUrl = 446,
  IconOssImageSpaceId = 447,
  IconOssImageTitle = 448,
  IconOssImageUpdatedAt = 449,
  IconOssImageUrl = 450,
  IconOssImageWidth = 451,
  IconOssInternalContent = 452,
  IconOssInternalContentDigest = 453,
  IconOssInternalDescription = 454,
  IconOssInternalFieldOwners = 455,
  IconOssInternalIgnoreType = 456,
  IconOssInternalMediaType = 457,
  IconOssInternalOwner = 458,
  IconOssInternalType = 459,
  IconOssName = 460,
  IconOssNodeLocale = 461,
  IconOssParentChildren = 462,
  IconOssParentId = 463,
  IconOssSpaceId = 464,
  IconOssStartDate = 465,
  IconOssSubName = 466,
  IconOssSysRevision = 467,
  IconOssSysType = 468,
  IconOssTags = 469,
  IconOssTagsBlogPost = 470,
  IconOssTagsChildren = 471,
  IconOssTagsContentfulId = 472,
  IconOssTagsCreatedAt = 473,
  IconOssTagsId = 474,
  IconOssTagsLevel = 475,
  IconOssTagsName = 476,
  IconOssTagsNodeLocale = 477,
  IconOssTagsOss = 478,
  IconOssTagsProject = 479,
  IconOssTagsSkillMap = 480,
  IconOssTagsSpaceId = 481,
  IconOssTagsUpdatedAt = 482,
  IconOssUpdatedAt = 483,
  IconParentChildren = 484,
  IconParentChildrenChildren = 485,
  IconParentChildrenId = 486,
  IconParentId = 487,
  IconParentInternalContent = 488,
  IconParentInternalContentDigest = 489,
  IconParentInternalDescription = 490,
  IconParentInternalFieldOwners = 491,
  IconParentInternalIgnoreType = 492,
  IconParentInternalMediaType = 493,
  IconParentInternalOwner = 494,
  IconParentInternalType = 495,
  IconParentParentChildren = 496,
  IconParentParentId = 497,
  IconProject = 498,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 499,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 500,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 501,
  IconProjectChildContentfulProjectDetailTextNodeId = 502,
  IconProjectChildren = 503,
  IconProjectChildrenContentfulProjectDetailTextNode = 504,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 505,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 506,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 507,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 508,
  IconProjectChildrenChildren = 509,
  IconProjectChildrenId = 510,
  IconProjectContentfulId = 511,
  IconProjectCreatedAt = 512,
  IconProjectDetailChildren = 513,
  IconProjectDetailChildrenMdx = 514,
  IconProjectDetailDetail = 515,
  IconProjectDetailId = 516,
  IconProjectEndDate = 517,
  IconProjectIconChildren = 518,
  IconProjectIconChildrenContentfulIconSvgTextNode = 519,
  IconProjectIconContact = 520,
  IconProjectIconContentfulId = 521,
  IconProjectIconCreatedAt = 522,
  IconProjectIconHistory = 523,
  IconProjectIconId = 524,
  IconProjectIconName = 525,
  IconProjectIconNodeLocale = 526,
  IconProjectIconOss = 527,
  IconProjectIconProject = 528,
  IconProjectIconSpaceId = 529,
  IconProjectIconUpdatedAt = 530,
  IconProjectIconWhatICanDo = 531,
  IconProjectId = 532,
  IconProjectInternalContent = 533,
  IconProjectInternalContentDigest = 534,
  IconProjectInternalDescription = 535,
  IconProjectInternalFieldOwners = 536,
  IconProjectInternalIgnoreType = 537,
  IconProjectInternalMediaType = 538,
  IconProjectInternalOwner = 539,
  IconProjectInternalType = 540,
  IconProjectName = 541,
  IconProjectNodeLocale = 542,
  IconProjectParentChildren = 543,
  IconProjectParentId = 544,
  IconProjectSpaceId = 545,
  IconProjectStartDate = 546,
  IconProjectSubName = 547,
  IconProjectSysRevision = 548,
  IconProjectSysType = 549,
  IconProjectTags = 550,
  IconProjectTagsBlogPost = 551,
  IconProjectTagsChildren = 552,
  IconProjectTagsContentfulId = 553,
  IconProjectTagsCreatedAt = 554,
  IconProjectTagsId = 555,
  IconProjectTagsLevel = 556,
  IconProjectTagsName = 557,
  IconProjectTagsNodeLocale = 558,
  IconProjectTagsOss = 559,
  IconProjectTagsProject = 560,
  IconProjectTagsSkillMap = 561,
  IconProjectTagsSpaceId = 562,
  IconProjectTagsUpdatedAt = 563,
  IconProjectUpdatedAt = 564,
  IconSpaceId = 565,
  IconSvgChildMdxBody = 566,
  IconSvgChildMdxChildren = 567,
  IconSvgChildMdxExcerpt = 568,
  IconSvgChildMdxFileAbsolutePath = 569,
  IconSvgChildMdxHeadings = 570,
  IconSvgChildMdxHtml = 571,
  IconSvgChildMdxId = 572,
  IconSvgChildMdxMdxAst = 573,
  IconSvgChildMdxRawBody = 574,
  IconSvgChildMdxSlug = 575,
  IconSvgChildMdxTableOfContents = 576,
  IconSvgChildMdxTimeToRead = 577,
  IconSvgChildren = 578,
  IconSvgChildrenMdx = 579,
  IconSvgChildrenMdxBody = 580,
  IconSvgChildrenMdxChildren = 581,
  IconSvgChildrenMdxExcerpt = 582,
  IconSvgChildrenMdxFileAbsolutePath = 583,
  IconSvgChildrenMdxHeadings = 584,
  IconSvgChildrenMdxHtml = 585,
  IconSvgChildrenMdxId = 586,
  IconSvgChildrenMdxMdxAst = 587,
  IconSvgChildrenMdxRawBody = 588,
  IconSvgChildrenMdxSlug = 589,
  IconSvgChildrenMdxTableOfContents = 590,
  IconSvgChildrenMdxTimeToRead = 591,
  IconSvgChildrenChildren = 592,
  IconSvgChildrenId = 593,
  IconSvgId = 594,
  IconSvgInternalContent = 595,
  IconSvgInternalContentDigest = 596,
  IconSvgInternalDescription = 597,
  IconSvgInternalFieldOwners = 598,
  IconSvgInternalIgnoreType = 599,
  IconSvgInternalMediaType = 600,
  IconSvgInternalOwner = 601,
  IconSvgInternalType = 602,
  IconSvgParentChildren = 603,
  IconSvgParentId = 604,
  IconSvgSvg = 605,
  IconSvgSysType = 606,
  IconSysRevision = 607,
  IconSysType = 608,
  IconUpdatedAt = 609,
  IconWhatICanDo = 610,
  IconWhatICanDoChildren = 611,
  IconWhatICanDoChildrenChildren = 612,
  IconWhatICanDoChildrenId = 613,
  IconWhatICanDoContentfulId = 614,
  IconWhatICanDoCreatedAt = 615,
  IconWhatICanDoIconChildren = 616,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 617,
  IconWhatICanDoIconContact = 618,
  IconWhatICanDoIconContentfulId = 619,
  IconWhatICanDoIconCreatedAt = 620,
  IconWhatICanDoIconHistory = 621,
  IconWhatICanDoIconId = 622,
  IconWhatICanDoIconName = 623,
  IconWhatICanDoIconNodeLocale = 624,
  IconWhatICanDoIconOss = 625,
  IconWhatICanDoIconProject = 626,
  IconWhatICanDoIconSpaceId = 627,
  IconWhatICanDoIconUpdatedAt = 628,
  IconWhatICanDoIconWhatICanDo = 629,
  IconWhatICanDoId = 630,
  IconWhatICanDoInternalContent = 631,
  IconWhatICanDoInternalContentDigest = 632,
  IconWhatICanDoInternalDescription = 633,
  IconWhatICanDoInternalFieldOwners = 634,
  IconWhatICanDoInternalIgnoreType = 635,
  IconWhatICanDoInternalMediaType = 636,
  IconWhatICanDoInternalOwner = 637,
  IconWhatICanDoInternalType = 638,
  IconWhatICanDoName = 639,
  IconWhatICanDoNodeLocale = 640,
  IconWhatICanDoParentChildren = 641,
  IconWhatICanDoParentId = 642,
  IconWhatICanDoSortKey = 643,
  IconWhatICanDoSpaceId = 644,
  IconWhatICanDoSubName = 645,
  IconWhatICanDoSysRevision = 646,
  IconWhatICanDoSysType = 647,
  IconWhatICanDoUpdatedAt = 648,
  Id = 649,
  InternalContent = 650,
  InternalContentDigest = 651,
  InternalDescription = 652,
  InternalFieldOwners = 653,
  InternalIgnoreType = 654,
  InternalMediaType = 655,
  InternalOwner = 656,
  InternalType = 657,
  Name = 658,
  NodeLocale = 659,
  ParentChildren = 660,
  ParentChildrenChildren = 661,
  ParentChildrenChildrenChildren = 662,
  ParentChildrenChildrenId = 663,
  ParentChildrenId = 664,
  ParentChildrenInternalContent = 665,
  ParentChildrenInternalContentDigest = 666,
  ParentChildrenInternalDescription = 667,
  ParentChildrenInternalFieldOwners = 668,
  ParentChildrenInternalIgnoreType = 669,
  ParentChildrenInternalMediaType = 670,
  ParentChildrenInternalOwner = 671,
  ParentChildrenInternalType = 672,
  ParentChildrenParentChildren = 673,
  ParentChildrenParentId = 674,
  ParentId = 675,
  ParentInternalContent = 676,
  ParentInternalContentDigest = 677,
  ParentInternalDescription = 678,
  ParentInternalFieldOwners = 679,
  ParentInternalIgnoreType = 680,
  ParentInternalMediaType = 681,
  ParentInternalOwner = 682,
  ParentInternalType = 683,
  ParentParentChildren = 684,
  ParentParentChildrenChildren = 685,
  ParentParentChildrenId = 686,
  ParentParentId = 687,
  ParentParentInternalContent = 688,
  ParentParentInternalContentDigest = 689,
  ParentParentInternalDescription = 690,
  ParentParentInternalFieldOwners = 691,
  ParentParentInternalIgnoreType = 692,
  ParentParentInternalMediaType = 693,
  ParentParentInternalOwner = 694,
  ParentParentInternalType = 695,
  ParentParentParentChildren = 696,
  ParentParentParentId = 697,
  SortKey = 698,
  SpaceId = 699,
  SubName = 700,
  SysContentTypeSysId = 701,
  SysContentTypeSysLinkType = 702,
  SysContentTypeSysType = 703,
  SysRevision = 704,
  SysType = 705,
  UpdatedAt = 706
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
  ContactIconSvgDarkFileContentType = 267,
  ContactIconSvgDarkFileFileName = 268,
  ContactIconSvgDarkFileUrl = 269,
  ContactIconSvgDarkFilename = 270,
  ContactIconSvgDarkFilesize = 271,
  ContactIconSvgDarkGatsbyImage = 272,
  ContactIconSvgDarkGatsbyImageData = 273,
  ContactIconSvgDarkHeight = 274,
  ContactIconSvgDarkId = 275,
  ContactIconSvgDarkInternalContent = 276,
  ContactIconSvgDarkInternalContentDigest = 277,
  ContactIconSvgDarkInternalDescription = 278,
  ContactIconSvgDarkInternalFieldOwners = 279,
  ContactIconSvgDarkInternalIgnoreType = 280,
  ContactIconSvgDarkInternalMediaType = 281,
  ContactIconSvgDarkInternalOwner = 282,
  ContactIconSvgDarkInternalType = 283,
  ContactIconSvgDarkMimeType = 284,
  ContactIconSvgDarkNodeLocale = 285,
  ContactIconSvgDarkParentChildren = 286,
  ContactIconSvgDarkParentId = 287,
  ContactIconSvgDarkPlaceholderUrl = 288,
  ContactIconSvgDarkPublicUrl = 289,
  ContactIconSvgDarkResizeHeight = 290,
  ContactIconSvgDarkResizeSrc = 291,
  ContactIconSvgDarkResizeWidth = 292,
  ContactIconSvgDarkSpaceId = 293,
  ContactIconSvgDarkSysRevision = 294,
  ContactIconSvgDarkSysType = 295,
  ContactIconSvgDarkTitle = 296,
  ContactIconSvgDarkUpdatedAt = 297,
  ContactIconSvgDarkUrl = 298,
  ContactIconSvgDarkWidth = 299,
  ContactIconSvgLightChildren = 300,
  ContactIconSvgLightChildrenChildren = 301,
  ContactIconSvgLightChildrenId = 302,
  ContactIconSvgLightContentfulId = 303,
  ContactIconSvgLightCreatedAt = 304,
  ContactIconSvgLightDescription = 305,
  ContactIconSvgLightFileContentType = 306,
  ContactIconSvgLightFileFileName = 307,
  ContactIconSvgLightFileUrl = 308,
  ContactIconSvgLightFilename = 309,
  ContactIconSvgLightFilesize = 310,
  ContactIconSvgLightGatsbyImage = 311,
  ContactIconSvgLightGatsbyImageData = 312,
  ContactIconSvgLightHeight = 313,
  ContactIconSvgLightId = 314,
  ContactIconSvgLightInternalContent = 315,
  ContactIconSvgLightInternalContentDigest = 316,
  ContactIconSvgLightInternalDescription = 317,
  ContactIconSvgLightInternalFieldOwners = 318,
  ContactIconSvgLightInternalIgnoreType = 319,
  ContactIconSvgLightInternalMediaType = 320,
  ContactIconSvgLightInternalOwner = 321,
  ContactIconSvgLightInternalType = 322,
  ContactIconSvgLightMimeType = 323,
  ContactIconSvgLightNodeLocale = 324,
  ContactIconSvgLightParentChildren = 325,
  ContactIconSvgLightParentId = 326,
  ContactIconSvgLightPlaceholderUrl = 327,
  ContactIconSvgLightPublicUrl = 328,
  ContactIconSvgLightResizeHeight = 329,
  ContactIconSvgLightResizeSrc = 330,
  ContactIconSvgLightResizeWidth = 331,
  ContactIconSvgLightSpaceId = 332,
  ContactIconSvgLightSysRevision = 333,
  ContactIconSvgLightSysType = 334,
  ContactIconSvgLightTitle = 335,
  ContactIconSvgLightUpdatedAt = 336,
  ContactIconSvgLightUrl = 337,
  ContactIconSvgLightWidth = 338,
  ContactIconChildContentfulIconSvgTextNodeChildren = 339,
  ContactIconChildContentfulIconSvgTextNodeChildrenMdx = 340,
  ContactIconChildContentfulIconSvgTextNodeId = 341,
  ContactIconChildContentfulIconSvgTextNodeSvg = 342,
  ContactIconChildren = 343,
  ContactIconChildrenContentfulIconSvgTextNode = 344,
  ContactIconChildrenContentfulIconSvgTextNodeChildren = 345,
  ContactIconChildrenContentfulIconSvgTextNodeChildrenMdx = 346,
  ContactIconChildrenContentfulIconSvgTextNodeId = 347,
  ContactIconChildrenContentfulIconSvgTextNodeSvg = 348,
  ContactIconChildrenChildren = 349,
  ContactIconChildrenId = 350,
  ContactIconContact = 351,
  ContactIconContactChildren = 352,
  ContactIconContactContentfulId = 353,
  ContactIconContactCreatedAt = 354,
  ContactIconContactHref = 355,
  ContactIconContactId = 356,
  ContactIconContactName = 357,
  ContactIconContactNodeLocale = 358,
  ContactIconContactSortKey = 359,
  ContactIconContactSpaceId = 360,
  ContactIconContactSubName = 361,
  ContactIconContactUpdatedAt = 362,
  ContactIconContentfulId = 363,
  ContactIconCreatedAt = 364,
  ContactIconHistory = 365,
  ContactIconHistoryChildren = 366,
  ContactIconHistoryContentfulId = 367,
  ContactIconHistoryCreatedAt = 368,
  ContactIconHistoryDate = 369,
  ContactIconHistoryId = 370,
  ContactIconHistoryName = 371,
  ContactIconHistoryNodeLocale = 372,
  ContactIconHistorySpaceId = 373,
  ContactIconHistorySubName = 374,
  ContactIconHistoryUpdatedAt = 375,
  ContactIconId = 376,
  ContactIconInternalContent = 377,
  ContactIconInternalContentDigest = 378,
  ContactIconInternalDescription = 379,
  ContactIconInternalFieldOwners = 380,
  ContactIconInternalIgnoreType = 381,
  ContactIconInternalMediaType = 382,
  ContactIconInternalOwner = 383,
  ContactIconInternalType = 384,
  ContactIconName = 385,
  ContactIconNodeLocale = 386,
  ContactIconOss = 387,
  ContactIconOssChildren = 388,
  ContactIconOssChildrenContentfulOssDetailTextNode = 389,
  ContactIconOssContentfulId = 390,
  ContactIconOssCreatedAt = 391,
  ContactIconOssHref = 392,
  ContactIconOssId = 393,
  ContactIconOssName = 394,
  ContactIconOssNodeLocale = 395,
  ContactIconOssSpaceId = 396,
  ContactIconOssStartDate = 397,
  ContactIconOssSubName = 398,
  ContactIconOssTags = 399,
  ContactIconOssUpdatedAt = 400,
  ContactIconParentChildren = 401,
  ContactIconParentId = 402,
  ContactIconProject = 403,
  ContactIconProjectChildren = 404,
  ContactIconProjectChildrenContentfulProjectDetailTextNode = 405,
  ContactIconProjectContentfulId = 406,
  ContactIconProjectCreatedAt = 407,
  ContactIconProjectEndDate = 408,
  ContactIconProjectId = 409,
  ContactIconProjectName = 410,
  ContactIconProjectNodeLocale = 411,
  ContactIconProjectSpaceId = 412,
  ContactIconProjectStartDate = 413,
  ContactIconProjectSubName = 414,
  ContactIconProjectTags = 415,
  ContactIconProjectUpdatedAt = 416,
  ContactIconSpaceId = 417,
  ContactIconSvgChildren = 418,
  ContactIconSvgChildrenMdx = 419,
  ContactIconSvgId = 420,
  ContactIconSvgSvg = 421,
  ContactIconSysRevision = 422,
  ContactIconSysType = 423,
  ContactIconUpdatedAt = 424,
  ContactIconWhatICanDo = 425,
  ContactIconWhatICanDoChildren = 426,
  ContactIconWhatICanDoContentfulId = 427,
  ContactIconWhatICanDoCreatedAt = 428,
  ContactIconWhatICanDoId = 429,
  ContactIconWhatICanDoName = 430,
  ContactIconWhatICanDoNodeLocale = 431,
  ContactIconWhatICanDoSortKey = 432,
  ContactIconWhatICanDoSpaceId = 433,
  ContactIconWhatICanDoSubName = 434,
  ContactIconWhatICanDoUpdatedAt = 435,
  ContactId = 436,
  ContactInternalContent = 437,
  ContactInternalContentDigest = 438,
  ContactInternalDescription = 439,
  ContactInternalFieldOwners = 440,
  ContactInternalIgnoreType = 441,
  ContactInternalMediaType = 442,
  ContactInternalOwner = 443,
  ContactInternalType = 444,
  ContactName = 445,
  ContactNodeLocale = 446,
  ContactParentChildren = 447,
  ContactParentChildrenChildren = 448,
  ContactParentChildrenId = 449,
  ContactParentId = 450,
  ContactParentInternalContent = 451,
  ContactParentInternalContentDigest = 452,
  ContactParentInternalDescription = 453,
  ContactParentInternalFieldOwners = 454,
  ContactParentInternalIgnoreType = 455,
  ContactParentInternalMediaType = 456,
  ContactParentInternalOwner = 457,
  ContactParentInternalType = 458,
  ContactParentParentChildren = 459,
  ContactParentParentId = 460,
  ContactSortKey = 461,
  ContactSpaceId = 462,
  ContactSubName = 463,
  ContactSysRevision = 464,
  ContactSysType = 465,
  ContactUpdatedAt = 466,
  ContentfulId = 467,
  CreatedAt = 468,
  History = 469,
  HistoryChildren = 470,
  HistoryChildrenChildren = 471,
  HistoryChildrenChildrenChildren = 472,
  HistoryChildrenChildrenId = 473,
  HistoryChildrenId = 474,
  HistoryChildrenInternalContent = 475,
  HistoryChildrenInternalContentDigest = 476,
  HistoryChildrenInternalDescription = 477,
  HistoryChildrenInternalFieldOwners = 478,
  HistoryChildrenInternalIgnoreType = 479,
  HistoryChildrenInternalMediaType = 480,
  HistoryChildrenInternalOwner = 481,
  HistoryChildrenInternalType = 482,
  HistoryChildrenParentChildren = 483,
  HistoryChildrenParentId = 484,
  HistoryContentfulId = 485,
  HistoryCreatedAt = 486,
  HistoryDate = 487,
  HistoryIconChildContentfulIconSvgTextNodeChildren = 488,
  HistoryIconChildContentfulIconSvgTextNodeChildrenMdx = 489,
  HistoryIconChildContentfulIconSvgTextNodeId = 490,
  HistoryIconChildContentfulIconSvgTextNodeSvg = 491,
  HistoryIconChildren = 492,
  HistoryIconChildrenContentfulIconSvgTextNode = 493,
  HistoryIconChildrenContentfulIconSvgTextNodeChildren = 494,
  HistoryIconChildrenContentfulIconSvgTextNodeChildrenMdx = 495,
  HistoryIconChildrenContentfulIconSvgTextNodeId = 496,
  HistoryIconChildrenContentfulIconSvgTextNodeSvg = 497,
  HistoryIconChildrenChildren = 498,
  HistoryIconChildrenId = 499,
  HistoryIconContact = 500,
  HistoryIconContactChildren = 501,
  HistoryIconContactContentfulId = 502,
  HistoryIconContactCreatedAt = 503,
  HistoryIconContactHref = 504,
  HistoryIconContactId = 505,
  HistoryIconContactName = 506,
  HistoryIconContactNodeLocale = 507,
  HistoryIconContactSortKey = 508,
  HistoryIconContactSpaceId = 509,
  HistoryIconContactSubName = 510,
  HistoryIconContactUpdatedAt = 511,
  HistoryIconContentfulId = 512,
  HistoryIconCreatedAt = 513,
  HistoryIconHistory = 514,
  HistoryIconHistoryChildren = 515,
  HistoryIconHistoryContentfulId = 516,
  HistoryIconHistoryCreatedAt = 517,
  HistoryIconHistoryDate = 518,
  HistoryIconHistoryId = 519,
  HistoryIconHistoryName = 520,
  HistoryIconHistoryNodeLocale = 521,
  HistoryIconHistorySpaceId = 522,
  HistoryIconHistorySubName = 523,
  HistoryIconHistoryUpdatedAt = 524,
  HistoryIconId = 525,
  HistoryIconInternalContent = 526,
  HistoryIconInternalContentDigest = 527,
  HistoryIconInternalDescription = 528,
  HistoryIconInternalFieldOwners = 529,
  HistoryIconInternalIgnoreType = 530,
  HistoryIconInternalMediaType = 531,
  HistoryIconInternalOwner = 532,
  HistoryIconInternalType = 533,
  HistoryIconName = 534,
  HistoryIconNodeLocale = 535,
  HistoryIconOss = 536,
  HistoryIconOssChildren = 537,
  HistoryIconOssChildrenContentfulOssDetailTextNode = 538,
  HistoryIconOssContentfulId = 539,
  HistoryIconOssCreatedAt = 540,
  HistoryIconOssHref = 541,
  HistoryIconOssId = 542,
  HistoryIconOssName = 543,
  HistoryIconOssNodeLocale = 544,
  HistoryIconOssSpaceId = 545,
  HistoryIconOssStartDate = 546,
  HistoryIconOssSubName = 547,
  HistoryIconOssTags = 548,
  HistoryIconOssUpdatedAt = 549,
  HistoryIconParentChildren = 550,
  HistoryIconParentId = 551,
  HistoryIconProject = 552,
  HistoryIconProjectChildren = 553,
  HistoryIconProjectChildrenContentfulProjectDetailTextNode = 554,
  HistoryIconProjectContentfulId = 555,
  HistoryIconProjectCreatedAt = 556,
  HistoryIconProjectEndDate = 557,
  HistoryIconProjectId = 558,
  HistoryIconProjectName = 559,
  HistoryIconProjectNodeLocale = 560,
  HistoryIconProjectSpaceId = 561,
  HistoryIconProjectStartDate = 562,
  HistoryIconProjectSubName = 563,
  HistoryIconProjectTags = 564,
  HistoryIconProjectUpdatedAt = 565,
  HistoryIconSpaceId = 566,
  HistoryIconSvgChildren = 567,
  HistoryIconSvgChildrenMdx = 568,
  HistoryIconSvgId = 569,
  HistoryIconSvgSvg = 570,
  HistoryIconSysRevision = 571,
  HistoryIconSysType = 572,
  HistoryIconUpdatedAt = 573,
  HistoryIconWhatICanDo = 574,
  HistoryIconWhatICanDoChildren = 575,
  HistoryIconWhatICanDoContentfulId = 576,
  HistoryIconWhatICanDoCreatedAt = 577,
  HistoryIconWhatICanDoId = 578,
  HistoryIconWhatICanDoName = 579,
  HistoryIconWhatICanDoNodeLocale = 580,
  HistoryIconWhatICanDoSortKey = 581,
  HistoryIconWhatICanDoSpaceId = 582,
  HistoryIconWhatICanDoSubName = 583,
  HistoryIconWhatICanDoUpdatedAt = 584,
  HistoryId = 585,
  HistoryInternalContent = 586,
  HistoryInternalContentDigest = 587,
  HistoryInternalDescription = 588,
  HistoryInternalFieldOwners = 589,
  HistoryInternalIgnoreType = 590,
  HistoryInternalMediaType = 591,
  HistoryInternalOwner = 592,
  HistoryInternalType = 593,
  HistoryName = 594,
  HistoryNodeLocale = 595,
  HistoryParentChildren = 596,
  HistoryParentChildrenChildren = 597,
  HistoryParentChildrenId = 598,
  HistoryParentId = 599,
  HistoryParentInternalContent = 600,
  HistoryParentInternalContentDigest = 601,
  HistoryParentInternalDescription = 602,
  HistoryParentInternalFieldOwners = 603,
  HistoryParentInternalIgnoreType = 604,
  HistoryParentInternalMediaType = 605,
  HistoryParentInternalOwner = 606,
  HistoryParentInternalType = 607,
  HistoryParentParentChildren = 608,
  HistoryParentParentId = 609,
  HistorySpaceId = 610,
  HistorySubName = 611,
  HistorySysRevision = 612,
  HistorySysType = 613,
  HistoryUpdatedAt = 614,
  Id = 615,
  InternalContent = 616,
  InternalContentDigest = 617,
  InternalDescription = 618,
  InternalFieldOwners = 619,
  InternalIgnoreType = 620,
  InternalMediaType = 621,
  InternalOwner = 622,
  InternalType = 623,
  Name = 624,
  NodeLocale = 625,
  Oss = 626,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 627,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 628,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 629,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 630,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 631,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 632,
  OssChildContentfulOssDetailTextNodeChildMdxId = 633,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 634,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 635,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 636,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 637,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 638,
  OssChildContentfulOssDetailTextNodeChildren = 639,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 640,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 641,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 642,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 643,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 644,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 645,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 646,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 647,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 648,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 649,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 650,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 651,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 652,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 653,
  OssChildContentfulOssDetailTextNodeChildrenId = 654,
  OssChildContentfulOssDetailTextNodeDetail = 655,
  OssChildContentfulOssDetailTextNodeId = 656,
  OssChildContentfulOssDetailTextNodeInternalContent = 657,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 658,
  OssChildContentfulOssDetailTextNodeInternalDescription = 659,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 660,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 661,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 662,
  OssChildContentfulOssDetailTextNodeInternalOwner = 663,
  OssChildContentfulOssDetailTextNodeInternalType = 664,
  OssChildContentfulOssDetailTextNodeParentChildren = 665,
  OssChildContentfulOssDetailTextNodeParentId = 666,
  OssChildContentfulOssDetailTextNodeSysType = 667,
  OssChildren = 668,
  OssChildrenContentfulOssDetailTextNode = 669,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 670,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 671,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 672,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 673,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 674,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 675,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 676,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 677,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 678,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 679,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 680,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 681,
  OssChildrenContentfulOssDetailTextNodeChildren = 682,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 683,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 684,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 685,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 686,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 687,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 688,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 689,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 690,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 691,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 692,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 693,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 694,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 695,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 696,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 697,
  OssChildrenContentfulOssDetailTextNodeDetail = 698,
  OssChildrenContentfulOssDetailTextNodeId = 699,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 700,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 701,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 702,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 703,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 704,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 705,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 706,
  OssChildrenContentfulOssDetailTextNodeInternalType = 707,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 708,
  OssChildrenContentfulOssDetailTextNodeParentId = 709,
  OssChildrenContentfulOssDetailTextNodeSysType = 710,
  OssChildrenChildren = 711,
  OssChildrenChildrenChildren = 712,
  OssChildrenChildrenId = 713,
  OssChildrenId = 714,
  OssChildrenInternalContent = 715,
  OssChildrenInternalContentDigest = 716,
  OssChildrenInternalDescription = 717,
  OssChildrenInternalFieldOwners = 718,
  OssChildrenInternalIgnoreType = 719,
  OssChildrenInternalMediaType = 720,
  OssChildrenInternalOwner = 721,
  OssChildrenInternalType = 722,
  OssChildrenParentChildren = 723,
  OssChildrenParentId = 724,
  OssContentfulId = 725,
  OssCreatedAt = 726,
  OssDetailChildMdxBody = 727,
  OssDetailChildMdxChildren = 728,
  OssDetailChildMdxExcerpt = 729,
  OssDetailChildMdxFileAbsolutePath = 730,
  OssDetailChildMdxHeadings = 731,
  OssDetailChildMdxHtml = 732,
  OssDetailChildMdxId = 733,
  OssDetailChildMdxMdxAst = 734,
  OssDetailChildMdxRawBody = 735,
  OssDetailChildMdxSlug = 736,
  OssDetailChildMdxTableOfContents = 737,
  OssDetailChildMdxTimeToRead = 738,
  OssDetailChildren = 739,
  OssDetailChildrenMdx = 740,
  OssDetailChildrenMdxBody = 741,
  OssDetailChildrenMdxChildren = 742,
  OssDetailChildrenMdxExcerpt = 743,
  OssDetailChildrenMdxFileAbsolutePath = 744,
  OssDetailChildrenMdxHeadings = 745,
  OssDetailChildrenMdxHtml = 746,
  OssDetailChildrenMdxId = 747,
  OssDetailChildrenMdxMdxAst = 748,
  OssDetailChildrenMdxRawBody = 749,
  OssDetailChildrenMdxSlug = 750,
  OssDetailChildrenMdxTableOfContents = 751,
  OssDetailChildrenMdxTimeToRead = 752,
  OssDetailChildrenChildren = 753,
  OssDetailChildrenId = 754,
  OssDetailDetail = 755,
  OssDetailId = 756,
  OssDetailInternalContent = 757,
  OssDetailInternalContentDigest = 758,
  OssDetailInternalDescription = 759,
  OssDetailInternalFieldOwners = 760,
  OssDetailInternalIgnoreType = 761,
  OssDetailInternalMediaType = 762,
  OssDetailInternalOwner = 763,
  OssDetailInternalType = 764,
  OssDetailParentChildren = 765,
  OssDetailParentId = 766,
  OssDetailSysType = 767,
  OssHref = 768,
  OssIconChildContentfulIconSvgTextNodeChildren = 769,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 770,
  OssIconChildContentfulIconSvgTextNodeId = 771,
  OssIconChildContentfulIconSvgTextNodeSvg = 772,
  OssIconChildren = 773,
  OssIconChildrenContentfulIconSvgTextNode = 774,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 775,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 776,
  OssIconChildrenContentfulIconSvgTextNodeId = 777,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 778,
  OssIconChildrenChildren = 779,
  OssIconChildrenId = 780,
  OssIconContact = 781,
  OssIconContactChildren = 782,
  OssIconContactContentfulId = 783,
  OssIconContactCreatedAt = 784,
  OssIconContactHref = 785,
  OssIconContactId = 786,
  OssIconContactName = 787,
  OssIconContactNodeLocale = 788,
  OssIconContactSortKey = 789,
  OssIconContactSpaceId = 790,
  OssIconContactSubName = 791,
  OssIconContactUpdatedAt = 792,
  OssIconContentfulId = 793,
  OssIconCreatedAt = 794,
  OssIconHistory = 795,
  OssIconHistoryChildren = 796,
  OssIconHistoryContentfulId = 797,
  OssIconHistoryCreatedAt = 798,
  OssIconHistoryDate = 799,
  OssIconHistoryId = 800,
  OssIconHistoryName = 801,
  OssIconHistoryNodeLocale = 802,
  OssIconHistorySpaceId = 803,
  OssIconHistorySubName = 804,
  OssIconHistoryUpdatedAt = 805,
  OssIconId = 806,
  OssIconInternalContent = 807,
  OssIconInternalContentDigest = 808,
  OssIconInternalDescription = 809,
  OssIconInternalFieldOwners = 810,
  OssIconInternalIgnoreType = 811,
  OssIconInternalMediaType = 812,
  OssIconInternalOwner = 813,
  OssIconInternalType = 814,
  OssIconName = 815,
  OssIconNodeLocale = 816,
  OssIconOss = 817,
  OssIconOssChildren = 818,
  OssIconOssChildrenContentfulOssDetailTextNode = 819,
  OssIconOssContentfulId = 820,
  OssIconOssCreatedAt = 821,
  OssIconOssHref = 822,
  OssIconOssId = 823,
  OssIconOssName = 824,
  OssIconOssNodeLocale = 825,
  OssIconOssSpaceId = 826,
  OssIconOssStartDate = 827,
  OssIconOssSubName = 828,
  OssIconOssTags = 829,
  OssIconOssUpdatedAt = 830,
  OssIconParentChildren = 831,
  OssIconParentId = 832,
  OssIconProject = 833,
  OssIconProjectChildren = 834,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 835,
  OssIconProjectContentfulId = 836,
  OssIconProjectCreatedAt = 837,
  OssIconProjectEndDate = 838,
  OssIconProjectId = 839,
  OssIconProjectName = 840,
  OssIconProjectNodeLocale = 841,
  OssIconProjectSpaceId = 842,
  OssIconProjectStartDate = 843,
  OssIconProjectSubName = 844,
  OssIconProjectTags = 845,
  OssIconProjectUpdatedAt = 846,
  OssIconSpaceId = 847,
  OssIconSvgChildren = 848,
  OssIconSvgChildrenMdx = 849,
  OssIconSvgId = 850,
  OssIconSvgSvg = 851,
  OssIconSysRevision = 852,
  OssIconSysType = 853,
  OssIconUpdatedAt = 854,
  OssIconWhatICanDo = 855,
  OssIconWhatICanDoChildren = 856,
  OssIconWhatICanDoContentfulId = 857,
  OssIconWhatICanDoCreatedAt = 858,
  OssIconWhatICanDoId = 859,
  OssIconWhatICanDoName = 860,
  OssIconWhatICanDoNodeLocale = 861,
  OssIconWhatICanDoSortKey = 862,
  OssIconWhatICanDoSpaceId = 863,
  OssIconWhatICanDoSubName = 864,
  OssIconWhatICanDoUpdatedAt = 865,
  OssId = 866,
  OssImageChildren = 867,
  OssImageChildrenChildren = 868,
  OssImageChildrenId = 869,
  OssImageContentfulId = 870,
  OssImageCreatedAt = 871,
  OssImageDescription = 872,
  OssImageFileContentType = 873,
  OssImageFileFileName = 874,
  OssImageFileUrl = 875,
  OssImageFilename = 876,
  OssImageFilesize = 877,
  OssImageGatsbyImage = 878,
  OssImageGatsbyImageData = 879,
  OssImageHeight = 880,
  OssImageId = 881,
  OssImageInternalContent = 882,
  OssImageInternalContentDigest = 883,
  OssImageInternalDescription = 884,
  OssImageInternalFieldOwners = 885,
  OssImageInternalIgnoreType = 886,
  OssImageInternalMediaType = 887,
  OssImageInternalOwner = 888,
  OssImageInternalType = 889,
  OssImageMimeType = 890,
  OssImageNodeLocale = 891,
  OssImageParentChildren = 892,
  OssImageParentId = 893,
  OssImagePlaceholderUrl = 894,
  OssImagePublicUrl = 895,
  OssImageResizeHeight = 896,
  OssImageResizeSrc = 897,
  OssImageResizeWidth = 898,
  OssImageSpaceId = 899,
  OssImageSysRevision = 900,
  OssImageSysType = 901,
  OssImageTitle = 902,
  OssImageUpdatedAt = 903,
  OssImageUrl = 904,
  OssImageWidth = 905,
  OssInternalContent = 906,
  OssInternalContentDigest = 907,
  OssInternalDescription = 908,
  OssInternalFieldOwners = 909,
  OssInternalIgnoreType = 910,
  OssInternalMediaType = 911,
  OssInternalOwner = 912,
  OssInternalType = 913,
  OssName = 914,
  OssNodeLocale = 915,
  OssParentChildren = 916,
  OssParentChildrenChildren = 917,
  OssParentChildrenId = 918,
  OssParentId = 919,
  OssParentInternalContent = 920,
  OssParentInternalContentDigest = 921,
  OssParentInternalDescription = 922,
  OssParentInternalFieldOwners = 923,
  OssParentInternalIgnoreType = 924,
  OssParentInternalMediaType = 925,
  OssParentInternalOwner = 926,
  OssParentInternalType = 927,
  OssParentParentChildren = 928,
  OssParentParentId = 929,
  OssSpaceId = 930,
  OssStartDate = 931,
  OssSubName = 932,
  OssSysRevision = 933,
  OssSysType = 934,
  OssTags = 935,
  OssTagsBlogPost = 936,
  OssTagsBlogPostChildren = 937,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 938,
  OssTagsBlogPostContentfulId = 939,
  OssTagsBlogPostCreated = 940,
  OssTagsBlogPostCreatedAt = 941,
  OssTagsBlogPostExcerpt = 942,
  OssTagsBlogPostId = 943,
  OssTagsBlogPostNodeLocale = 944,
  OssTagsBlogPostSlug = 945,
  OssTagsBlogPostSpaceId = 946,
  OssTagsBlogPostTags = 947,
  OssTagsBlogPostTitle = 948,
  OssTagsBlogPostUpdated = 949,
  OssTagsBlogPostUpdatedAt = 950,
  OssTagsChildren = 951,
  OssTagsChildrenChildren = 952,
  OssTagsChildrenId = 953,
  OssTagsContentfulId = 954,
  OssTagsCreatedAt = 955,
  OssTagsId = 956,
  OssTagsInternalContent = 957,
  OssTagsInternalContentDigest = 958,
  OssTagsInternalDescription = 959,
  OssTagsInternalFieldOwners = 960,
  OssTagsInternalIgnoreType = 961,
  OssTagsInternalMediaType = 962,
  OssTagsInternalOwner = 963,
  OssTagsInternalType = 964,
  OssTagsLevel = 965,
  OssTagsName = 966,
  OssTagsNodeLocale = 967,
  OssTagsOss = 968,
  OssTagsOssChildren = 969,
  OssTagsOssChildrenContentfulOssDetailTextNode = 970,
  OssTagsOssContentfulId = 971,
  OssTagsOssCreatedAt = 972,
  OssTagsOssHref = 973,
  OssTagsOssId = 974,
  OssTagsOssName = 975,
  OssTagsOssNodeLocale = 976,
  OssTagsOssSpaceId = 977,
  OssTagsOssStartDate = 978,
  OssTagsOssSubName = 979,
  OssTagsOssTags = 980,
  OssTagsOssUpdatedAt = 981,
  OssTagsParentChildren = 982,
  OssTagsParentId = 983,
  OssTagsProject = 984,
  OssTagsProjectChildren = 985,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 986,
  OssTagsProjectContentfulId = 987,
  OssTagsProjectCreatedAt = 988,
  OssTagsProjectEndDate = 989,
  OssTagsProjectId = 990,
  OssTagsProjectName = 991,
  OssTagsProjectNodeLocale = 992,
  OssTagsProjectSpaceId = 993,
  OssTagsProjectStartDate = 994,
  OssTagsProjectSubName = 995,
  OssTagsProjectTags = 996,
  OssTagsProjectUpdatedAt = 997,
  OssTagsSkillMap = 998,
  OssTagsSkillMapChildren = 999,
  OssTagsSkillMapContentfulId = 1000,
  OssTagsSkillMapCreatedAt = 1001,
  OssTagsSkillMapExpanded = 1002,
  OssTagsSkillMapId = 1003,
  OssTagsSkillMapName = 1004,
  OssTagsSkillMapNodeLocale = 1005,
  OssTagsSkillMapSkills = 1006,
  OssTagsSkillMapSortKey = 1007,
  OssTagsSkillMapSpaceId = 1008,
  OssTagsSkillMapUpdatedAt = 1009,
  OssTagsSpaceId = 1010,
  OssTagsSysRevision = 1011,
  OssTagsSysType = 1012,
  OssTagsUpdatedAt = 1013,
  OssUpdatedAt = 1014,
  ParentChildren = 1015,
  ParentChildrenChildren = 1016,
  ParentChildrenChildrenChildren = 1017,
  ParentChildrenChildrenId = 1018,
  ParentChildrenId = 1019,
  ParentChildrenInternalContent = 1020,
  ParentChildrenInternalContentDigest = 1021,
  ParentChildrenInternalDescription = 1022,
  ParentChildrenInternalFieldOwners = 1023,
  ParentChildrenInternalIgnoreType = 1024,
  ParentChildrenInternalMediaType = 1025,
  ParentChildrenInternalOwner = 1026,
  ParentChildrenInternalType = 1027,
  ParentChildrenParentChildren = 1028,
  ParentChildrenParentId = 1029,
  ParentId = 1030,
  ParentInternalContent = 1031,
  ParentInternalContentDigest = 1032,
  ParentInternalDescription = 1033,
  ParentInternalFieldOwners = 1034,
  ParentInternalIgnoreType = 1035,
  ParentInternalMediaType = 1036,
  ParentInternalOwner = 1037,
  ParentInternalType = 1038,
  ParentParentChildren = 1039,
  ParentParentChildrenChildren = 1040,
  ParentParentChildrenId = 1041,
  ParentParentId = 1042,
  ParentParentInternalContent = 1043,
  ParentParentInternalContentDigest = 1044,
  ParentParentInternalDescription = 1045,
  ParentParentInternalFieldOwners = 1046,
  ParentParentInternalIgnoreType = 1047,
  ParentParentInternalMediaType = 1048,
  ParentParentInternalOwner = 1049,
  ParentParentInternalType = 1050,
  ParentParentParentChildren = 1051,
  ParentParentParentId = 1052,
  Project = 1053,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 1054,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 1055,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 1056,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1057,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 1058,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 1059,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 1060,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 1061,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 1062,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 1063,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 1064,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 1065,
  ProjectChildContentfulProjectDetailTextNodeChildren = 1066,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1067,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 1068,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 1069,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1070,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1071,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 1072,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 1073,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 1074,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1075,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 1076,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 1077,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1078,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1079,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 1080,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 1081,
  ProjectChildContentfulProjectDetailTextNodeDetail = 1082,
  ProjectChildContentfulProjectDetailTextNodeId = 1083,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 1084,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 1085,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 1086,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 1087,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 1088,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 1089,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 1090,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 1091,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 1092,
  ProjectChildContentfulProjectDetailTextNodeParentId = 1093,
  ProjectChildContentfulProjectDetailTextNodeSysType = 1094,
  ProjectChildren = 1095,
  ProjectChildrenContentfulProjectDetailTextNode = 1096,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 1097,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 1098,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 1099,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1100,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 1101,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 1102,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 1103,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 1104,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 1105,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 1106,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 1107,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 1108,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 1109,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1110,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 1111,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 1112,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1113,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1114,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 1115,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 1116,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 1117,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1118,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 1119,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 1120,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1121,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1122,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 1123,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 1124,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 1125,
  ProjectChildrenContentfulProjectDetailTextNodeId = 1126,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 1127,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 1128,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 1129,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 1130,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 1131,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 1132,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 1133,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 1134,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 1135,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 1136,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 1137,
  ProjectChildrenChildren = 1138,
  ProjectChildrenChildrenChildren = 1139,
  ProjectChildrenChildrenId = 1140,
  ProjectChildrenId = 1141,
  ProjectChildrenInternalContent = 1142,
  ProjectChildrenInternalContentDigest = 1143,
  ProjectChildrenInternalDescription = 1144,
  ProjectChildrenInternalFieldOwners = 1145,
  ProjectChildrenInternalIgnoreType = 1146,
  ProjectChildrenInternalMediaType = 1147,
  ProjectChildrenInternalOwner = 1148,
  ProjectChildrenInternalType = 1149,
  ProjectChildrenParentChildren = 1150,
  ProjectChildrenParentId = 1151,
  ProjectContentfulId = 1152,
  ProjectCreatedAt = 1153,
  ProjectDetailChildMdxBody = 1154,
  ProjectDetailChildMdxChildren = 1155,
  ProjectDetailChildMdxExcerpt = 1156,
  ProjectDetailChildMdxFileAbsolutePath = 1157,
  ProjectDetailChildMdxHeadings = 1158,
  ProjectDetailChildMdxHtml = 1159,
  ProjectDetailChildMdxId = 1160,
  ProjectDetailChildMdxMdxAst = 1161,
  ProjectDetailChildMdxRawBody = 1162,
  ProjectDetailChildMdxSlug = 1163,
  ProjectDetailChildMdxTableOfContents = 1164,
  ProjectDetailChildMdxTimeToRead = 1165,
  ProjectDetailChildren = 1166,
  ProjectDetailChildrenMdx = 1167,
  ProjectDetailChildrenMdxBody = 1168,
  ProjectDetailChildrenMdxChildren = 1169,
  ProjectDetailChildrenMdxExcerpt = 1170,
  ProjectDetailChildrenMdxFileAbsolutePath = 1171,
  ProjectDetailChildrenMdxHeadings = 1172,
  ProjectDetailChildrenMdxHtml = 1173,
  ProjectDetailChildrenMdxId = 1174,
  ProjectDetailChildrenMdxMdxAst = 1175,
  ProjectDetailChildrenMdxRawBody = 1176,
  ProjectDetailChildrenMdxSlug = 1177,
  ProjectDetailChildrenMdxTableOfContents = 1178,
  ProjectDetailChildrenMdxTimeToRead = 1179,
  ProjectDetailChildrenChildren = 1180,
  ProjectDetailChildrenId = 1181,
  ProjectDetailDetail = 1182,
  ProjectDetailId = 1183,
  ProjectDetailInternalContent = 1184,
  ProjectDetailInternalContentDigest = 1185,
  ProjectDetailInternalDescription = 1186,
  ProjectDetailInternalFieldOwners = 1187,
  ProjectDetailInternalIgnoreType = 1188,
  ProjectDetailInternalMediaType = 1189,
  ProjectDetailInternalOwner = 1190,
  ProjectDetailInternalType = 1191,
  ProjectDetailParentChildren = 1192,
  ProjectDetailParentId = 1193,
  ProjectDetailSysType = 1194,
  ProjectEndDate = 1195,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1196,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 1197,
  ProjectIconChildContentfulIconSvgTextNodeId = 1198,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1199,
  ProjectIconChildren = 1200,
  ProjectIconChildrenContentfulIconSvgTextNode = 1201,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1202,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1203,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1204,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1205,
  ProjectIconChildrenChildren = 1206,
  ProjectIconChildrenId = 1207,
  ProjectIconContact = 1208,
  ProjectIconContactChildren = 1209,
  ProjectIconContactContentfulId = 1210,
  ProjectIconContactCreatedAt = 1211,
  ProjectIconContactHref = 1212,
  ProjectIconContactId = 1213,
  ProjectIconContactName = 1214,
  ProjectIconContactNodeLocale = 1215,
  ProjectIconContactSortKey = 1216,
  ProjectIconContactSpaceId = 1217,
  ProjectIconContactSubName = 1218,
  ProjectIconContactUpdatedAt = 1219,
  ProjectIconContentfulId = 1220,
  ProjectIconCreatedAt = 1221,
  ProjectIconHistory = 1222,
  ProjectIconHistoryChildren = 1223,
  ProjectIconHistoryContentfulId = 1224,
  ProjectIconHistoryCreatedAt = 1225,
  ProjectIconHistoryDate = 1226,
  ProjectIconHistoryId = 1227,
  ProjectIconHistoryName = 1228,
  ProjectIconHistoryNodeLocale = 1229,
  ProjectIconHistorySpaceId = 1230,
  ProjectIconHistorySubName = 1231,
  ProjectIconHistoryUpdatedAt = 1232,
  ProjectIconId = 1233,
  ProjectIconInternalContent = 1234,
  ProjectIconInternalContentDigest = 1235,
  ProjectIconInternalDescription = 1236,
  ProjectIconInternalFieldOwners = 1237,
  ProjectIconInternalIgnoreType = 1238,
  ProjectIconInternalMediaType = 1239,
  ProjectIconInternalOwner = 1240,
  ProjectIconInternalType = 1241,
  ProjectIconName = 1242,
  ProjectIconNodeLocale = 1243,
  ProjectIconOss = 1244,
  ProjectIconOssChildren = 1245,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1246,
  ProjectIconOssContentfulId = 1247,
  ProjectIconOssCreatedAt = 1248,
  ProjectIconOssHref = 1249,
  ProjectIconOssId = 1250,
  ProjectIconOssName = 1251,
  ProjectIconOssNodeLocale = 1252,
  ProjectIconOssSpaceId = 1253,
  ProjectIconOssStartDate = 1254,
  ProjectIconOssSubName = 1255,
  ProjectIconOssTags = 1256,
  ProjectIconOssUpdatedAt = 1257,
  ProjectIconParentChildren = 1258,
  ProjectIconParentId = 1259,
  ProjectIconProject = 1260,
  ProjectIconProjectChildren = 1261,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1262,
  ProjectIconProjectContentfulId = 1263,
  ProjectIconProjectCreatedAt = 1264,
  ProjectIconProjectEndDate = 1265,
  ProjectIconProjectId = 1266,
  ProjectIconProjectName = 1267,
  ProjectIconProjectNodeLocale = 1268,
  ProjectIconProjectSpaceId = 1269,
  ProjectIconProjectStartDate = 1270,
  ProjectIconProjectSubName = 1271,
  ProjectIconProjectTags = 1272,
  ProjectIconProjectUpdatedAt = 1273,
  ProjectIconSpaceId = 1274,
  ProjectIconSvgChildren = 1275,
  ProjectIconSvgChildrenMdx = 1276,
  ProjectIconSvgId = 1277,
  ProjectIconSvgSvg = 1278,
  ProjectIconSysRevision = 1279,
  ProjectIconSysType = 1280,
  ProjectIconUpdatedAt = 1281,
  ProjectIconWhatICanDo = 1282,
  ProjectIconWhatICanDoChildren = 1283,
  ProjectIconWhatICanDoContentfulId = 1284,
  ProjectIconWhatICanDoCreatedAt = 1285,
  ProjectIconWhatICanDoId = 1286,
  ProjectIconWhatICanDoName = 1287,
  ProjectIconWhatICanDoNodeLocale = 1288,
  ProjectIconWhatICanDoSortKey = 1289,
  ProjectIconWhatICanDoSpaceId = 1290,
  ProjectIconWhatICanDoSubName = 1291,
  ProjectIconWhatICanDoUpdatedAt = 1292,
  ProjectId = 1293,
  ProjectInternalContent = 1294,
  ProjectInternalContentDigest = 1295,
  ProjectInternalDescription = 1296,
  ProjectInternalFieldOwners = 1297,
  ProjectInternalIgnoreType = 1298,
  ProjectInternalMediaType = 1299,
  ProjectInternalOwner = 1300,
  ProjectInternalType = 1301,
  ProjectName = 1302,
  ProjectNodeLocale = 1303,
  ProjectParentChildren = 1304,
  ProjectParentChildrenChildren = 1305,
  ProjectParentChildrenId = 1306,
  ProjectParentId = 1307,
  ProjectParentInternalContent = 1308,
  ProjectParentInternalContentDigest = 1309,
  ProjectParentInternalDescription = 1310,
  ProjectParentInternalFieldOwners = 1311,
  ProjectParentInternalIgnoreType = 1312,
  ProjectParentInternalMediaType = 1313,
  ProjectParentInternalOwner = 1314,
  ProjectParentInternalType = 1315,
  ProjectParentParentChildren = 1316,
  ProjectParentParentId = 1317,
  ProjectSpaceId = 1318,
  ProjectStartDate = 1319,
  ProjectSubName = 1320,
  ProjectSysRevision = 1321,
  ProjectSysType = 1322,
  ProjectTags = 1323,
  ProjectTagsBlogPost = 1324,
  ProjectTagsBlogPostChildren = 1325,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1326,
  ProjectTagsBlogPostContentfulId = 1327,
  ProjectTagsBlogPostCreated = 1328,
  ProjectTagsBlogPostCreatedAt = 1329,
  ProjectTagsBlogPostExcerpt = 1330,
  ProjectTagsBlogPostId = 1331,
  ProjectTagsBlogPostNodeLocale = 1332,
  ProjectTagsBlogPostSlug = 1333,
  ProjectTagsBlogPostSpaceId = 1334,
  ProjectTagsBlogPostTags = 1335,
  ProjectTagsBlogPostTitle = 1336,
  ProjectTagsBlogPostUpdated = 1337,
  ProjectTagsBlogPostUpdatedAt = 1338,
  ProjectTagsChildren = 1339,
  ProjectTagsChildrenChildren = 1340,
  ProjectTagsChildrenId = 1341,
  ProjectTagsContentfulId = 1342,
  ProjectTagsCreatedAt = 1343,
  ProjectTagsId = 1344,
  ProjectTagsInternalContent = 1345,
  ProjectTagsInternalContentDigest = 1346,
  ProjectTagsInternalDescription = 1347,
  ProjectTagsInternalFieldOwners = 1348,
  ProjectTagsInternalIgnoreType = 1349,
  ProjectTagsInternalMediaType = 1350,
  ProjectTagsInternalOwner = 1351,
  ProjectTagsInternalType = 1352,
  ProjectTagsLevel = 1353,
  ProjectTagsName = 1354,
  ProjectTagsNodeLocale = 1355,
  ProjectTagsOss = 1356,
  ProjectTagsOssChildren = 1357,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1358,
  ProjectTagsOssContentfulId = 1359,
  ProjectTagsOssCreatedAt = 1360,
  ProjectTagsOssHref = 1361,
  ProjectTagsOssId = 1362,
  ProjectTagsOssName = 1363,
  ProjectTagsOssNodeLocale = 1364,
  ProjectTagsOssSpaceId = 1365,
  ProjectTagsOssStartDate = 1366,
  ProjectTagsOssSubName = 1367,
  ProjectTagsOssTags = 1368,
  ProjectTagsOssUpdatedAt = 1369,
  ProjectTagsParentChildren = 1370,
  ProjectTagsParentId = 1371,
  ProjectTagsProject = 1372,
  ProjectTagsProjectChildren = 1373,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1374,
  ProjectTagsProjectContentfulId = 1375,
  ProjectTagsProjectCreatedAt = 1376,
  ProjectTagsProjectEndDate = 1377,
  ProjectTagsProjectId = 1378,
  ProjectTagsProjectName = 1379,
  ProjectTagsProjectNodeLocale = 1380,
  ProjectTagsProjectSpaceId = 1381,
  ProjectTagsProjectStartDate = 1382,
  ProjectTagsProjectSubName = 1383,
  ProjectTagsProjectTags = 1384,
  ProjectTagsProjectUpdatedAt = 1385,
  ProjectTagsSkillMap = 1386,
  ProjectTagsSkillMapChildren = 1387,
  ProjectTagsSkillMapContentfulId = 1388,
  ProjectTagsSkillMapCreatedAt = 1389,
  ProjectTagsSkillMapExpanded = 1390,
  ProjectTagsSkillMapId = 1391,
  ProjectTagsSkillMapName = 1392,
  ProjectTagsSkillMapNodeLocale = 1393,
  ProjectTagsSkillMapSkills = 1394,
  ProjectTagsSkillMapSortKey = 1395,
  ProjectTagsSkillMapSpaceId = 1396,
  ProjectTagsSkillMapUpdatedAt = 1397,
  ProjectTagsSpaceId = 1398,
  ProjectTagsSysRevision = 1399,
  ProjectTagsSysType = 1400,
  ProjectTagsUpdatedAt = 1401,
  ProjectUpdatedAt = 1402,
  SpaceId = 1403,
  SvgChildMdxBody = 1404,
  SvgChildMdxChildren = 1405,
  SvgChildMdxChildrenChildren = 1406,
  SvgChildMdxChildrenId = 1407,
  SvgChildMdxExcerpt = 1408,
  SvgChildMdxFileAbsolutePath = 1409,
  SvgChildMdxFrontmatterTitle = 1410,
  SvgChildMdxHeadings = 1411,
  SvgChildMdxHeadingsDepth = 1412,
  SvgChildMdxHeadingsValue = 1413,
  SvgChildMdxHtml = 1414,
  SvgChildMdxId = 1415,
  SvgChildMdxInternalContent = 1416,
  SvgChildMdxInternalContentDigest = 1417,
  SvgChildMdxInternalDescription = 1418,
  SvgChildMdxInternalFieldOwners = 1419,
  SvgChildMdxInternalIgnoreType = 1420,
  SvgChildMdxInternalMediaType = 1421,
  SvgChildMdxInternalOwner = 1422,
  SvgChildMdxInternalType = 1423,
  SvgChildMdxMdxAst = 1424,
  SvgChildMdxParentChildren = 1425,
  SvgChildMdxParentId = 1426,
  SvgChildMdxRawBody = 1427,
  SvgChildMdxSlug = 1428,
  SvgChildMdxTableOfContents = 1429,
  SvgChildMdxTimeToRead = 1430,
  SvgChildMdxWordCountParagraphs = 1431,
  SvgChildMdxWordCountSentences = 1432,
  SvgChildMdxWordCountWords = 1433,
  SvgChildren = 1434,
  SvgChildrenMdx = 1435,
  SvgChildrenMdxBody = 1436,
  SvgChildrenMdxChildren = 1437,
  SvgChildrenMdxChildrenChildren = 1438,
  SvgChildrenMdxChildrenId = 1439,
  SvgChildrenMdxExcerpt = 1440,
  SvgChildrenMdxFileAbsolutePath = 1441,
  SvgChildrenMdxFrontmatterTitle = 1442,
  SvgChildrenMdxHeadings = 1443,
  SvgChildrenMdxHeadingsDepth = 1444,
  SvgChildrenMdxHeadingsValue = 1445,
  SvgChildrenMdxHtml = 1446,
  SvgChildrenMdxId = 1447,
  SvgChildrenMdxInternalContent = 1448,
  SvgChildrenMdxInternalContentDigest = 1449,
  SvgChildrenMdxInternalDescription = 1450,
  SvgChildrenMdxInternalFieldOwners = 1451,
  SvgChildrenMdxInternalIgnoreType = 1452,
  SvgChildrenMdxInternalMediaType = 1453,
  SvgChildrenMdxInternalOwner = 1454,
  SvgChildrenMdxInternalType = 1455,
  SvgChildrenMdxMdxAst = 1456,
  SvgChildrenMdxParentChildren = 1457,
  SvgChildrenMdxParentId = 1458,
  SvgChildrenMdxRawBody = 1459,
  SvgChildrenMdxSlug = 1460,
  SvgChildrenMdxTableOfContents = 1461,
  SvgChildrenMdxTimeToRead = 1462,
  SvgChildrenMdxWordCountParagraphs = 1463,
  SvgChildrenMdxWordCountSentences = 1464,
  SvgChildrenMdxWordCountWords = 1465,
  SvgChildrenChildren = 1466,
  SvgChildrenChildrenChildren = 1467,
  SvgChildrenChildrenId = 1468,
  SvgChildrenId = 1469,
  SvgChildrenInternalContent = 1470,
  SvgChildrenInternalContentDigest = 1471,
  SvgChildrenInternalDescription = 1472,
  SvgChildrenInternalFieldOwners = 1473,
  SvgChildrenInternalIgnoreType = 1474,
  SvgChildrenInternalMediaType = 1475,
  SvgChildrenInternalOwner = 1476,
  SvgChildrenInternalType = 1477,
  SvgChildrenParentChildren = 1478,
  SvgChildrenParentId = 1479,
  SvgId = 1480,
  SvgInternalContent = 1481,
  SvgInternalContentDigest = 1482,
  SvgInternalDescription = 1483,
  SvgInternalFieldOwners = 1484,
  SvgInternalIgnoreType = 1485,
  SvgInternalMediaType = 1486,
  SvgInternalOwner = 1487,
  SvgInternalType = 1488,
  SvgParentChildren = 1489,
  SvgParentChildrenChildren = 1490,
  SvgParentChildrenId = 1491,
  SvgParentId = 1492,
  SvgParentInternalContent = 1493,
  SvgParentInternalContentDigest = 1494,
  SvgParentInternalDescription = 1495,
  SvgParentInternalFieldOwners = 1496,
  SvgParentInternalIgnoreType = 1497,
  SvgParentInternalMediaType = 1498,
  SvgParentInternalOwner = 1499,
  SvgParentInternalType = 1500,
  SvgParentParentChildren = 1501,
  SvgParentParentId = 1502,
  SvgSvg = 1503,
  SvgSysType = 1504,
  SysContentTypeSysId = 1505,
  SysContentTypeSysLinkType = 1506,
  SysContentTypeSysType = 1507,
  SysRevision = 1508,
  SysType = 1509,
  UpdatedAt = 1510,
  WhatICanDo = 1511,
  WhatICanDoChildren = 1512,
  WhatICanDoChildrenChildren = 1513,
  WhatICanDoChildrenChildrenChildren = 1514,
  WhatICanDoChildrenChildrenId = 1515,
  WhatICanDoChildrenId = 1516,
  WhatICanDoChildrenInternalContent = 1517,
  WhatICanDoChildrenInternalContentDigest = 1518,
  WhatICanDoChildrenInternalDescription = 1519,
  WhatICanDoChildrenInternalFieldOwners = 1520,
  WhatICanDoChildrenInternalIgnoreType = 1521,
  WhatICanDoChildrenInternalMediaType = 1522,
  WhatICanDoChildrenInternalOwner = 1523,
  WhatICanDoChildrenInternalType = 1524,
  WhatICanDoChildrenParentChildren = 1525,
  WhatICanDoChildrenParentId = 1526,
  WhatICanDoContentfulId = 1527,
  WhatICanDoCreatedAt = 1528,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildren = 1529,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildrenMdx = 1530,
  WhatICanDoIconChildContentfulIconSvgTextNodeId = 1531,
  WhatICanDoIconChildContentfulIconSvgTextNodeSvg = 1532,
  WhatICanDoIconChildren = 1533,
  WhatICanDoIconChildrenContentfulIconSvgTextNode = 1534,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildren = 1535,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1536,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeId = 1537,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeSvg = 1538,
  WhatICanDoIconChildrenChildren = 1539,
  WhatICanDoIconChildrenId = 1540,
  WhatICanDoIconContact = 1541,
  WhatICanDoIconContactChildren = 1542,
  WhatICanDoIconContactContentfulId = 1543,
  WhatICanDoIconContactCreatedAt = 1544,
  WhatICanDoIconContactHref = 1545,
  WhatICanDoIconContactId = 1546,
  WhatICanDoIconContactName = 1547,
  WhatICanDoIconContactNodeLocale = 1548,
  WhatICanDoIconContactSortKey = 1549,
  WhatICanDoIconContactSpaceId = 1550,
  WhatICanDoIconContactSubName = 1551,
  WhatICanDoIconContactUpdatedAt = 1552,
  WhatICanDoIconContentfulId = 1553,
  WhatICanDoIconCreatedAt = 1554,
  WhatICanDoIconHistory = 1555,
  WhatICanDoIconHistoryChildren = 1556,
  WhatICanDoIconHistoryContentfulId = 1557,
  WhatICanDoIconHistoryCreatedAt = 1558,
  WhatICanDoIconHistoryDate = 1559,
  WhatICanDoIconHistoryId = 1560,
  WhatICanDoIconHistoryName = 1561,
  WhatICanDoIconHistoryNodeLocale = 1562,
  WhatICanDoIconHistorySpaceId = 1563,
  WhatICanDoIconHistorySubName = 1564,
  WhatICanDoIconHistoryUpdatedAt = 1565,
  WhatICanDoIconId = 1566,
  WhatICanDoIconInternalContent = 1567,
  WhatICanDoIconInternalContentDigest = 1568,
  WhatICanDoIconInternalDescription = 1569,
  WhatICanDoIconInternalFieldOwners = 1570,
  WhatICanDoIconInternalIgnoreType = 1571,
  WhatICanDoIconInternalMediaType = 1572,
  WhatICanDoIconInternalOwner = 1573,
  WhatICanDoIconInternalType = 1574,
  WhatICanDoIconName = 1575,
  WhatICanDoIconNodeLocale = 1576,
  WhatICanDoIconOss = 1577,
  WhatICanDoIconOssChildren = 1578,
  WhatICanDoIconOssChildrenContentfulOssDetailTextNode = 1579,
  WhatICanDoIconOssContentfulId = 1580,
  WhatICanDoIconOssCreatedAt = 1581,
  WhatICanDoIconOssHref = 1582,
  WhatICanDoIconOssId = 1583,
  WhatICanDoIconOssName = 1584,
  WhatICanDoIconOssNodeLocale = 1585,
  WhatICanDoIconOssSpaceId = 1586,
  WhatICanDoIconOssStartDate = 1587,
  WhatICanDoIconOssSubName = 1588,
  WhatICanDoIconOssTags = 1589,
  WhatICanDoIconOssUpdatedAt = 1590,
  WhatICanDoIconParentChildren = 1591,
  WhatICanDoIconParentId = 1592,
  WhatICanDoIconProject = 1593,
  WhatICanDoIconProjectChildren = 1594,
  WhatICanDoIconProjectChildrenContentfulProjectDetailTextNode = 1595,
  WhatICanDoIconProjectContentfulId = 1596,
  WhatICanDoIconProjectCreatedAt = 1597,
  WhatICanDoIconProjectEndDate = 1598,
  WhatICanDoIconProjectId = 1599,
  WhatICanDoIconProjectName = 1600,
  WhatICanDoIconProjectNodeLocale = 1601,
  WhatICanDoIconProjectSpaceId = 1602,
  WhatICanDoIconProjectStartDate = 1603,
  WhatICanDoIconProjectSubName = 1604,
  WhatICanDoIconProjectTags = 1605,
  WhatICanDoIconProjectUpdatedAt = 1606,
  WhatICanDoIconSpaceId = 1607,
  WhatICanDoIconSvgChildren = 1608,
  WhatICanDoIconSvgChildrenMdx = 1609,
  WhatICanDoIconSvgId = 1610,
  WhatICanDoIconSvgSvg = 1611,
  WhatICanDoIconSysRevision = 1612,
  WhatICanDoIconSysType = 1613,
  WhatICanDoIconUpdatedAt = 1614,
  WhatICanDoIconWhatICanDo = 1615,
  WhatICanDoIconWhatICanDoChildren = 1616,
  WhatICanDoIconWhatICanDoContentfulId = 1617,
  WhatICanDoIconWhatICanDoCreatedAt = 1618,
  WhatICanDoIconWhatICanDoId = 1619,
  WhatICanDoIconWhatICanDoName = 1620,
  WhatICanDoIconWhatICanDoNodeLocale = 1621,
  WhatICanDoIconWhatICanDoSortKey = 1622,
  WhatICanDoIconWhatICanDoSpaceId = 1623,
  WhatICanDoIconWhatICanDoSubName = 1624,
  WhatICanDoIconWhatICanDoUpdatedAt = 1625,
  WhatICanDoId = 1626,
  WhatICanDoInternalContent = 1627,
  WhatICanDoInternalContentDigest = 1628,
  WhatICanDoInternalDescription = 1629,
  WhatICanDoInternalFieldOwners = 1630,
  WhatICanDoInternalIgnoreType = 1631,
  WhatICanDoInternalMediaType = 1632,
  WhatICanDoInternalOwner = 1633,
  WhatICanDoInternalType = 1634,
  WhatICanDoName = 1635,
  WhatICanDoNodeLocale = 1636,
  WhatICanDoParentChildren = 1637,
  WhatICanDoParentChildrenChildren = 1638,
  WhatICanDoParentChildrenId = 1639,
  WhatICanDoParentId = 1640,
  WhatICanDoParentInternalContent = 1641,
  WhatICanDoParentInternalContentDigest = 1642,
  WhatICanDoParentInternalDescription = 1643,
  WhatICanDoParentInternalFieldOwners = 1644,
  WhatICanDoParentInternalIgnoreType = 1645,
  WhatICanDoParentInternalMediaType = 1646,
  WhatICanDoParentInternalOwner = 1647,
  WhatICanDoParentInternalType = 1648,
  WhatICanDoParentParentChildren = 1649,
  WhatICanDoParentParentId = 1650,
  WhatICanDoSortKey = 1651,
  WhatICanDoSpaceId = 1652,
  WhatICanDoSubName = 1653,
  WhatICanDoSysRevision = 1654,
  WhatICanDoSysType = 1655,
  WhatICanDoUpdatedAt = 1656
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
  ImageFileContentType = 844,
  ImageFileDetailsSize = 845,
  ImageFileFileName = 846,
  ImageFileUrl = 847,
  ImageFilename = 848,
  ImageFilesize = 849,
  ImageGatsbyImage = 850,
  ImageGatsbyImageData = 851,
  ImageHeight = 852,
  ImageId = 853,
  ImageInternalContent = 854,
  ImageInternalContentDigest = 855,
  ImageInternalDescription = 856,
  ImageInternalFieldOwners = 857,
  ImageInternalIgnoreType = 858,
  ImageInternalMediaType = 859,
  ImageInternalOwner = 860,
  ImageInternalType = 861,
  ImageMimeType = 862,
  ImageNodeLocale = 863,
  ImageParentChildren = 864,
  ImageParentChildrenChildren = 865,
  ImageParentChildrenId = 866,
  ImageParentId = 867,
  ImageParentInternalContent = 868,
  ImageParentInternalContentDigest = 869,
  ImageParentInternalDescription = 870,
  ImageParentInternalFieldOwners = 871,
  ImageParentInternalIgnoreType = 872,
  ImageParentInternalMediaType = 873,
  ImageParentInternalOwner = 874,
  ImageParentInternalType = 875,
  ImageParentParentChildren = 876,
  ImageParentParentId = 877,
  ImagePlaceholderUrl = 878,
  ImagePublicUrl = 879,
  ImageResizeHeight = 880,
  ImageResizeSrc = 881,
  ImageResizeWidth = 882,
  ImageSpaceId = 883,
  ImageSysRevision = 884,
  ImageSysType = 885,
  ImageTitle = 886,
  ImageUpdatedAt = 887,
  ImageUrl = 888,
  ImageWidth = 889,
  InternalContent = 890,
  InternalContentDigest = 891,
  InternalDescription = 892,
  InternalFieldOwners = 893,
  InternalIgnoreType = 894,
  InternalMediaType = 895,
  InternalOwner = 896,
  InternalType = 897,
  Name = 898,
  NodeLocale = 899,
  ParentChildren = 900,
  ParentChildrenChildren = 901,
  ParentChildrenChildrenChildren = 902,
  ParentChildrenChildrenId = 903,
  ParentChildrenId = 904,
  ParentChildrenInternalContent = 905,
  ParentChildrenInternalContentDigest = 906,
  ParentChildrenInternalDescription = 907,
  ParentChildrenInternalFieldOwners = 908,
  ParentChildrenInternalIgnoreType = 909,
  ParentChildrenInternalMediaType = 910,
  ParentChildrenInternalOwner = 911,
  ParentChildrenInternalType = 912,
  ParentChildrenParentChildren = 913,
  ParentChildrenParentId = 914,
  ParentId = 915,
  ParentInternalContent = 916,
  ParentInternalContentDigest = 917,
  ParentInternalDescription = 918,
  ParentInternalFieldOwners = 919,
  ParentInternalIgnoreType = 920,
  ParentInternalMediaType = 921,
  ParentInternalOwner = 922,
  ParentInternalType = 923,
  ParentParentChildren = 924,
  ParentParentChildrenChildren = 925,
  ParentParentChildrenId = 926,
  ParentParentId = 927,
  ParentParentInternalContent = 928,
  ParentParentInternalContentDigest = 929,
  ParentParentInternalDescription = 930,
  ParentParentInternalFieldOwners = 931,
  ParentParentInternalIgnoreType = 932,
  ParentParentInternalMediaType = 933,
  ParentParentInternalOwner = 934,
  ParentParentInternalType = 935,
  ParentParentParentChildren = 936,
  ParentParentParentId = 937,
  SpaceId = 938,
  StartDate = 939,
  SubName = 940,
  SysContentTypeSysId = 941,
  SysContentTypeSysLinkType = 942,
  SysContentTypeSysType = 943,
  SysRevision = 944,
  SysType = 945,
  Tags = 946,
  TagsBlogPost = 947,
  TagsBlogPostCategoryBlogPost = 948,
  TagsBlogPostCategoryChildren = 949,
  TagsBlogPostCategoryContentfulId = 950,
  TagsBlogPostCategoryCreatedAt = 951,
  TagsBlogPostCategoryId = 952,
  TagsBlogPostCategoryName = 953,
  TagsBlogPostCategoryNodeLocale = 954,
  TagsBlogPostCategorySortKey = 955,
  TagsBlogPostCategorySpaceId = 956,
  TagsBlogPostCategoryUpdatedAt = 957,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 958,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 959,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 960,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 961,
  TagsBlogPostChildren = 962,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 963,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 964,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 965,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 966,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 967,
  TagsBlogPostChildrenChildren = 968,
  TagsBlogPostChildrenId = 969,
  TagsBlogPostContentChildren = 970,
  TagsBlogPostContentChildrenMdx = 971,
  TagsBlogPostContentContent = 972,
  TagsBlogPostContentId = 973,
  TagsBlogPostContentfulId = 974,
  TagsBlogPostCreated = 975,
  TagsBlogPostCreatedAt = 976,
  TagsBlogPostExcerpt = 977,
  TagsBlogPostId = 978,
  TagsBlogPostInternalContent = 979,
  TagsBlogPostInternalContentDigest = 980,
  TagsBlogPostInternalDescription = 981,
  TagsBlogPostInternalFieldOwners = 982,
  TagsBlogPostInternalIgnoreType = 983,
  TagsBlogPostInternalMediaType = 984,
  TagsBlogPostInternalOwner = 985,
  TagsBlogPostInternalType = 986,
  TagsBlogPostNodeLocale = 987,
  TagsBlogPostParentChildren = 988,
  TagsBlogPostParentId = 989,
  TagsBlogPostSlug = 990,
  TagsBlogPostSpaceId = 991,
  TagsBlogPostSysRevision = 992,
  TagsBlogPostSysType = 993,
  TagsBlogPostTags = 994,
  TagsBlogPostTagsBlogPost = 995,
  TagsBlogPostTagsChildren = 996,
  TagsBlogPostTagsContentfulId = 997,
  TagsBlogPostTagsCreatedAt = 998,
  TagsBlogPostTagsId = 999,
  TagsBlogPostTagsLevel = 1000,
  TagsBlogPostTagsName = 1001,
  TagsBlogPostTagsNodeLocale = 1002,
  TagsBlogPostTagsOss = 1003,
  TagsBlogPostTagsProject = 1004,
  TagsBlogPostTagsSkillMap = 1005,
  TagsBlogPostTagsSpaceId = 1006,
  TagsBlogPostTagsUpdatedAt = 1007,
  TagsBlogPostThumbnailChildren = 1008,
  TagsBlogPostThumbnailContentfulId = 1009,
  TagsBlogPostThumbnailCreatedAt = 1010,
  TagsBlogPostThumbnailDescription = 1011,
  TagsBlogPostThumbnailFilename = 1012,
  TagsBlogPostThumbnailFilesize = 1013,
  TagsBlogPostThumbnailGatsbyImage = 1014,
  TagsBlogPostThumbnailGatsbyImageData = 1015,
  TagsBlogPostThumbnailHeight = 1016,
  TagsBlogPostThumbnailId = 1017,
  TagsBlogPostThumbnailMimeType = 1018,
  TagsBlogPostThumbnailNodeLocale = 1019,
  TagsBlogPostThumbnailPlaceholderUrl = 1020,
  TagsBlogPostThumbnailPublicUrl = 1021,
  TagsBlogPostThumbnailSpaceId = 1022,
  TagsBlogPostThumbnailTitle = 1023,
  TagsBlogPostThumbnailUpdatedAt = 1024,
  TagsBlogPostThumbnailUrl = 1025,
  TagsBlogPostThumbnailWidth = 1026,
  TagsBlogPostTitle = 1027,
  TagsBlogPostUpdated = 1028,
  TagsBlogPostUpdatedAt = 1029,
  TagsChildren = 1030,
  TagsChildrenChildren = 1031,
  TagsChildrenChildrenChildren = 1032,
  TagsChildrenChildrenId = 1033,
  TagsChildrenId = 1034,
  TagsChildrenInternalContent = 1035,
  TagsChildrenInternalContentDigest = 1036,
  TagsChildrenInternalDescription = 1037,
  TagsChildrenInternalFieldOwners = 1038,
  TagsChildrenInternalIgnoreType = 1039,
  TagsChildrenInternalMediaType = 1040,
  TagsChildrenInternalOwner = 1041,
  TagsChildrenInternalType = 1042,
  TagsChildrenParentChildren = 1043,
  TagsChildrenParentId = 1044,
  TagsContentfulId = 1045,
  TagsCreatedAt = 1046,
  TagsId = 1047,
  TagsInternalContent = 1048,
  TagsInternalContentDigest = 1049,
  TagsInternalDescription = 1050,
  TagsInternalFieldOwners = 1051,
  TagsInternalIgnoreType = 1052,
  TagsInternalMediaType = 1053,
  TagsInternalOwner = 1054,
  TagsInternalType = 1055,
  TagsLevel = 1056,
  TagsName = 1057,
  TagsNodeLocale = 1058,
  TagsOss = 1059,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1060,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1061,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1062,
  TagsOssChildContentfulOssDetailTextNodeId = 1063,
  TagsOssChildren = 1064,
  TagsOssChildrenContentfulOssDetailTextNode = 1065,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1066,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1067,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1068,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1069,
  TagsOssChildrenChildren = 1070,
  TagsOssChildrenId = 1071,
  TagsOssContentfulId = 1072,
  TagsOssCreatedAt = 1073,
  TagsOssDetailChildren = 1074,
  TagsOssDetailChildrenMdx = 1075,
  TagsOssDetailDetail = 1076,
  TagsOssDetailId = 1077,
  TagsOssHref = 1078,
  TagsOssIconChildren = 1079,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1080,
  TagsOssIconContact = 1081,
  TagsOssIconContentfulId = 1082,
  TagsOssIconCreatedAt = 1083,
  TagsOssIconHistory = 1084,
  TagsOssIconId = 1085,
  TagsOssIconName = 1086,
  TagsOssIconNodeLocale = 1087,
  TagsOssIconOss = 1088,
  TagsOssIconProject = 1089,
  TagsOssIconSpaceId = 1090,
  TagsOssIconUpdatedAt = 1091,
  TagsOssIconWhatICanDo = 1092,
  TagsOssId = 1093,
  TagsOssImageChildren = 1094,
  TagsOssImageContentfulId = 1095,
  TagsOssImageCreatedAt = 1096,
  TagsOssImageDescription = 1097,
  TagsOssImageFilename = 1098,
  TagsOssImageFilesize = 1099,
  TagsOssImageGatsbyImage = 1100,
  TagsOssImageGatsbyImageData = 1101,
  TagsOssImageHeight = 1102,
  TagsOssImageId = 1103,
  TagsOssImageMimeType = 1104,
  TagsOssImageNodeLocale = 1105,
  TagsOssImagePlaceholderUrl = 1106,
  TagsOssImagePublicUrl = 1107,
  TagsOssImageSpaceId = 1108,
  TagsOssImageTitle = 1109,
  TagsOssImageUpdatedAt = 1110,
  TagsOssImageUrl = 1111,
  TagsOssImageWidth = 1112,
  TagsOssInternalContent = 1113,
  TagsOssInternalContentDigest = 1114,
  TagsOssInternalDescription = 1115,
  TagsOssInternalFieldOwners = 1116,
  TagsOssInternalIgnoreType = 1117,
  TagsOssInternalMediaType = 1118,
  TagsOssInternalOwner = 1119,
  TagsOssInternalType = 1120,
  TagsOssName = 1121,
  TagsOssNodeLocale = 1122,
  TagsOssParentChildren = 1123,
  TagsOssParentId = 1124,
  TagsOssSpaceId = 1125,
  TagsOssStartDate = 1126,
  TagsOssSubName = 1127,
  TagsOssSysRevision = 1128,
  TagsOssSysType = 1129,
  TagsOssTags = 1130,
  TagsOssTagsBlogPost = 1131,
  TagsOssTagsChildren = 1132,
  TagsOssTagsContentfulId = 1133,
  TagsOssTagsCreatedAt = 1134,
  TagsOssTagsId = 1135,
  TagsOssTagsLevel = 1136,
  TagsOssTagsName = 1137,
  TagsOssTagsNodeLocale = 1138,
  TagsOssTagsOss = 1139,
  TagsOssTagsProject = 1140,
  TagsOssTagsSkillMap = 1141,
  TagsOssTagsSpaceId = 1142,
  TagsOssTagsUpdatedAt = 1143,
  TagsOssUpdatedAt = 1144,
  TagsParentChildren = 1145,
  TagsParentChildrenChildren = 1146,
  TagsParentChildrenId = 1147,
  TagsParentId = 1148,
  TagsParentInternalContent = 1149,
  TagsParentInternalContentDigest = 1150,
  TagsParentInternalDescription = 1151,
  TagsParentInternalFieldOwners = 1152,
  TagsParentInternalIgnoreType = 1153,
  TagsParentInternalMediaType = 1154,
  TagsParentInternalOwner = 1155,
  TagsParentInternalType = 1156,
  TagsParentParentChildren = 1157,
  TagsParentParentId = 1158,
  TagsProject = 1159,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1160,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1161,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1162,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1163,
  TagsProjectChildren = 1164,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1165,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1166,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1167,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1168,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1169,
  TagsProjectChildrenChildren = 1170,
  TagsProjectChildrenId = 1171,
  TagsProjectContentfulId = 1172,
  TagsProjectCreatedAt = 1173,
  TagsProjectDetailChildren = 1174,
  TagsProjectDetailChildrenMdx = 1175,
  TagsProjectDetailDetail = 1176,
  TagsProjectDetailId = 1177,
  TagsProjectEndDate = 1178,
  TagsProjectIconChildren = 1179,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1180,
  TagsProjectIconContact = 1181,
  TagsProjectIconContentfulId = 1182,
  TagsProjectIconCreatedAt = 1183,
  TagsProjectIconHistory = 1184,
  TagsProjectIconId = 1185,
  TagsProjectIconName = 1186,
  TagsProjectIconNodeLocale = 1187,
  TagsProjectIconOss = 1188,
  TagsProjectIconProject = 1189,
  TagsProjectIconSpaceId = 1190,
  TagsProjectIconUpdatedAt = 1191,
  TagsProjectIconWhatICanDo = 1192,
  TagsProjectId = 1193,
  TagsProjectInternalContent = 1194,
  TagsProjectInternalContentDigest = 1195,
  TagsProjectInternalDescription = 1196,
  TagsProjectInternalFieldOwners = 1197,
  TagsProjectInternalIgnoreType = 1198,
  TagsProjectInternalMediaType = 1199,
  TagsProjectInternalOwner = 1200,
  TagsProjectInternalType = 1201,
  TagsProjectName = 1202,
  TagsProjectNodeLocale = 1203,
  TagsProjectParentChildren = 1204,
  TagsProjectParentId = 1205,
  TagsProjectSpaceId = 1206,
  TagsProjectStartDate = 1207,
  TagsProjectSubName = 1208,
  TagsProjectSysRevision = 1209,
  TagsProjectSysType = 1210,
  TagsProjectTags = 1211,
  TagsProjectTagsBlogPost = 1212,
  TagsProjectTagsChildren = 1213,
  TagsProjectTagsContentfulId = 1214,
  TagsProjectTagsCreatedAt = 1215,
  TagsProjectTagsId = 1216,
  TagsProjectTagsLevel = 1217,
  TagsProjectTagsName = 1218,
  TagsProjectTagsNodeLocale = 1219,
  TagsProjectTagsOss = 1220,
  TagsProjectTagsProject = 1221,
  TagsProjectTagsSkillMap = 1222,
  TagsProjectTagsSpaceId = 1223,
  TagsProjectTagsUpdatedAt = 1224,
  TagsProjectUpdatedAt = 1225,
  TagsSkillMap = 1226,
  TagsSkillMapChildren = 1227,
  TagsSkillMapChildrenChildren = 1228,
  TagsSkillMapChildrenId = 1229,
  TagsSkillMapContentfulId = 1230,
  TagsSkillMapCreatedAt = 1231,
  TagsSkillMapExpanded = 1232,
  TagsSkillMapId = 1233,
  TagsSkillMapInternalContent = 1234,
  TagsSkillMapInternalContentDigest = 1235,
  TagsSkillMapInternalDescription = 1236,
  TagsSkillMapInternalFieldOwners = 1237,
  TagsSkillMapInternalIgnoreType = 1238,
  TagsSkillMapInternalMediaType = 1239,
  TagsSkillMapInternalOwner = 1240,
  TagsSkillMapInternalType = 1241,
  TagsSkillMapName = 1242,
  TagsSkillMapNodeLocale = 1243,
  TagsSkillMapParentChildren = 1244,
  TagsSkillMapParentId = 1245,
  TagsSkillMapSkills = 1246,
  TagsSkillMapSkillsBlogPost = 1247,
  TagsSkillMapSkillsChildren = 1248,
  TagsSkillMapSkillsContentfulId = 1249,
  TagsSkillMapSkillsCreatedAt = 1250,
  TagsSkillMapSkillsId = 1251,
  TagsSkillMapSkillsLevel = 1252,
  TagsSkillMapSkillsName = 1253,
  TagsSkillMapSkillsNodeLocale = 1254,
  TagsSkillMapSkillsOss = 1255,
  TagsSkillMapSkillsProject = 1256,
  TagsSkillMapSkillsSkillMap = 1257,
  TagsSkillMapSkillsSpaceId = 1258,
  TagsSkillMapSkillsUpdatedAt = 1259,
  TagsSkillMapSortKey = 1260,
  TagsSkillMapSpaceId = 1261,
  TagsSkillMapSysRevision = 1262,
  TagsSkillMapSysType = 1263,
  TagsSkillMapUpdatedAt = 1264,
  TagsSpaceId = 1265,
  TagsSysRevision = 1266,
  TagsSysType = 1267,
  TagsUpdatedAt = 1268,
  UpdatedAt = 1269
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
  TagsBlogPostCategoryName = 889,
  TagsBlogPostCategoryNodeLocale = 890,
  TagsBlogPostCategorySortKey = 891,
  TagsBlogPostCategorySpaceId = 892,
  TagsBlogPostCategoryUpdatedAt = 893,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 894,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 895,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 896,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 897,
  TagsBlogPostChildren = 898,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 899,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 900,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 901,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 902,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 903,
  TagsBlogPostChildrenChildren = 904,
  TagsBlogPostChildrenId = 905,
  TagsBlogPostContentChildren = 906,
  TagsBlogPostContentChildrenMdx = 907,
  TagsBlogPostContentContent = 908,
  TagsBlogPostContentId = 909,
  TagsBlogPostContentfulId = 910,
  TagsBlogPostCreated = 911,
  TagsBlogPostCreatedAt = 912,
  TagsBlogPostExcerpt = 913,
  TagsBlogPostId = 914,
  TagsBlogPostInternalContent = 915,
  TagsBlogPostInternalContentDigest = 916,
  TagsBlogPostInternalDescription = 917,
  TagsBlogPostInternalFieldOwners = 918,
  TagsBlogPostInternalIgnoreType = 919,
  TagsBlogPostInternalMediaType = 920,
  TagsBlogPostInternalOwner = 921,
  TagsBlogPostInternalType = 922,
  TagsBlogPostNodeLocale = 923,
  TagsBlogPostParentChildren = 924,
  TagsBlogPostParentId = 925,
  TagsBlogPostSlug = 926,
  TagsBlogPostSpaceId = 927,
  TagsBlogPostSysRevision = 928,
  TagsBlogPostSysType = 929,
  TagsBlogPostTags = 930,
  TagsBlogPostTagsBlogPost = 931,
  TagsBlogPostTagsChildren = 932,
  TagsBlogPostTagsContentfulId = 933,
  TagsBlogPostTagsCreatedAt = 934,
  TagsBlogPostTagsId = 935,
  TagsBlogPostTagsLevel = 936,
  TagsBlogPostTagsName = 937,
  TagsBlogPostTagsNodeLocale = 938,
  TagsBlogPostTagsOss = 939,
  TagsBlogPostTagsProject = 940,
  TagsBlogPostTagsSkillMap = 941,
  TagsBlogPostTagsSpaceId = 942,
  TagsBlogPostTagsUpdatedAt = 943,
  TagsBlogPostThumbnailChildren = 944,
  TagsBlogPostThumbnailContentfulId = 945,
  TagsBlogPostThumbnailCreatedAt = 946,
  TagsBlogPostThumbnailDescription = 947,
  TagsBlogPostThumbnailFilename = 948,
  TagsBlogPostThumbnailFilesize = 949,
  TagsBlogPostThumbnailGatsbyImage = 950,
  TagsBlogPostThumbnailGatsbyImageData = 951,
  TagsBlogPostThumbnailHeight = 952,
  TagsBlogPostThumbnailId = 953,
  TagsBlogPostThumbnailMimeType = 954,
  TagsBlogPostThumbnailNodeLocale = 955,
  TagsBlogPostThumbnailPlaceholderUrl = 956,
  TagsBlogPostThumbnailPublicUrl = 957,
  TagsBlogPostThumbnailSpaceId = 958,
  TagsBlogPostThumbnailTitle = 959,
  TagsBlogPostThumbnailUpdatedAt = 960,
  TagsBlogPostThumbnailUrl = 961,
  TagsBlogPostThumbnailWidth = 962,
  TagsBlogPostTitle = 963,
  TagsBlogPostUpdated = 964,
  TagsBlogPostUpdatedAt = 965,
  TagsChildren = 966,
  TagsChildrenChildren = 967,
  TagsChildrenChildrenChildren = 968,
  TagsChildrenChildrenId = 969,
  TagsChildrenId = 970,
  TagsChildrenInternalContent = 971,
  TagsChildrenInternalContentDigest = 972,
  TagsChildrenInternalDescription = 973,
  TagsChildrenInternalFieldOwners = 974,
  TagsChildrenInternalIgnoreType = 975,
  TagsChildrenInternalMediaType = 976,
  TagsChildrenInternalOwner = 977,
  TagsChildrenInternalType = 978,
  TagsChildrenParentChildren = 979,
  TagsChildrenParentId = 980,
  TagsContentfulId = 981,
  TagsCreatedAt = 982,
  TagsId = 983,
  TagsInternalContent = 984,
  TagsInternalContentDigest = 985,
  TagsInternalDescription = 986,
  TagsInternalFieldOwners = 987,
  TagsInternalIgnoreType = 988,
  TagsInternalMediaType = 989,
  TagsInternalOwner = 990,
  TagsInternalType = 991,
  TagsLevel = 992,
  TagsName = 993,
  TagsNodeLocale = 994,
  TagsOss = 995,
  TagsOssChildContentfulOssDetailTextNodeChildren = 996,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 997,
  TagsOssChildContentfulOssDetailTextNodeDetail = 998,
  TagsOssChildContentfulOssDetailTextNodeId = 999,
  TagsOssChildren = 1000,
  TagsOssChildrenContentfulOssDetailTextNode = 1001,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1002,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1003,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1004,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1005,
  TagsOssChildrenChildren = 1006,
  TagsOssChildrenId = 1007,
  TagsOssContentfulId = 1008,
  TagsOssCreatedAt = 1009,
  TagsOssDetailChildren = 1010,
  TagsOssDetailChildrenMdx = 1011,
  TagsOssDetailDetail = 1012,
  TagsOssDetailId = 1013,
  TagsOssHref = 1014,
  TagsOssIconChildren = 1015,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1016,
  TagsOssIconContact = 1017,
  TagsOssIconContentfulId = 1018,
  TagsOssIconCreatedAt = 1019,
  TagsOssIconHistory = 1020,
  TagsOssIconId = 1021,
  TagsOssIconName = 1022,
  TagsOssIconNodeLocale = 1023,
  TagsOssIconOss = 1024,
  TagsOssIconProject = 1025,
  TagsOssIconSpaceId = 1026,
  TagsOssIconUpdatedAt = 1027,
  TagsOssIconWhatICanDo = 1028,
  TagsOssId = 1029,
  TagsOssImageChildren = 1030,
  TagsOssImageContentfulId = 1031,
  TagsOssImageCreatedAt = 1032,
  TagsOssImageDescription = 1033,
  TagsOssImageFilename = 1034,
  TagsOssImageFilesize = 1035,
  TagsOssImageGatsbyImage = 1036,
  TagsOssImageGatsbyImageData = 1037,
  TagsOssImageHeight = 1038,
  TagsOssImageId = 1039,
  TagsOssImageMimeType = 1040,
  TagsOssImageNodeLocale = 1041,
  TagsOssImagePlaceholderUrl = 1042,
  TagsOssImagePublicUrl = 1043,
  TagsOssImageSpaceId = 1044,
  TagsOssImageTitle = 1045,
  TagsOssImageUpdatedAt = 1046,
  TagsOssImageUrl = 1047,
  TagsOssImageWidth = 1048,
  TagsOssInternalContent = 1049,
  TagsOssInternalContentDigest = 1050,
  TagsOssInternalDescription = 1051,
  TagsOssInternalFieldOwners = 1052,
  TagsOssInternalIgnoreType = 1053,
  TagsOssInternalMediaType = 1054,
  TagsOssInternalOwner = 1055,
  TagsOssInternalType = 1056,
  TagsOssName = 1057,
  TagsOssNodeLocale = 1058,
  TagsOssParentChildren = 1059,
  TagsOssParentId = 1060,
  TagsOssSpaceId = 1061,
  TagsOssStartDate = 1062,
  TagsOssSubName = 1063,
  TagsOssSysRevision = 1064,
  TagsOssSysType = 1065,
  TagsOssTags = 1066,
  TagsOssTagsBlogPost = 1067,
  TagsOssTagsChildren = 1068,
  TagsOssTagsContentfulId = 1069,
  TagsOssTagsCreatedAt = 1070,
  TagsOssTagsId = 1071,
  TagsOssTagsLevel = 1072,
  TagsOssTagsName = 1073,
  TagsOssTagsNodeLocale = 1074,
  TagsOssTagsOss = 1075,
  TagsOssTagsProject = 1076,
  TagsOssTagsSkillMap = 1077,
  TagsOssTagsSpaceId = 1078,
  TagsOssTagsUpdatedAt = 1079,
  TagsOssUpdatedAt = 1080,
  TagsParentChildren = 1081,
  TagsParentChildrenChildren = 1082,
  TagsParentChildrenId = 1083,
  TagsParentId = 1084,
  TagsParentInternalContent = 1085,
  TagsParentInternalContentDigest = 1086,
  TagsParentInternalDescription = 1087,
  TagsParentInternalFieldOwners = 1088,
  TagsParentInternalIgnoreType = 1089,
  TagsParentInternalMediaType = 1090,
  TagsParentInternalOwner = 1091,
  TagsParentInternalType = 1092,
  TagsParentParentChildren = 1093,
  TagsParentParentId = 1094,
  TagsProject = 1095,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1096,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1097,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1098,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1099,
  TagsProjectChildren = 1100,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1101,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1102,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1103,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1104,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1105,
  TagsProjectChildrenChildren = 1106,
  TagsProjectChildrenId = 1107,
  TagsProjectContentfulId = 1108,
  TagsProjectCreatedAt = 1109,
  TagsProjectDetailChildren = 1110,
  TagsProjectDetailChildrenMdx = 1111,
  TagsProjectDetailDetail = 1112,
  TagsProjectDetailId = 1113,
  TagsProjectEndDate = 1114,
  TagsProjectIconChildren = 1115,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1116,
  TagsProjectIconContact = 1117,
  TagsProjectIconContentfulId = 1118,
  TagsProjectIconCreatedAt = 1119,
  TagsProjectIconHistory = 1120,
  TagsProjectIconId = 1121,
  TagsProjectIconName = 1122,
  TagsProjectIconNodeLocale = 1123,
  TagsProjectIconOss = 1124,
  TagsProjectIconProject = 1125,
  TagsProjectIconSpaceId = 1126,
  TagsProjectIconUpdatedAt = 1127,
  TagsProjectIconWhatICanDo = 1128,
  TagsProjectId = 1129,
  TagsProjectInternalContent = 1130,
  TagsProjectInternalContentDigest = 1131,
  TagsProjectInternalDescription = 1132,
  TagsProjectInternalFieldOwners = 1133,
  TagsProjectInternalIgnoreType = 1134,
  TagsProjectInternalMediaType = 1135,
  TagsProjectInternalOwner = 1136,
  TagsProjectInternalType = 1137,
  TagsProjectName = 1138,
  TagsProjectNodeLocale = 1139,
  TagsProjectParentChildren = 1140,
  TagsProjectParentId = 1141,
  TagsProjectSpaceId = 1142,
  TagsProjectStartDate = 1143,
  TagsProjectSubName = 1144,
  TagsProjectSysRevision = 1145,
  TagsProjectSysType = 1146,
  TagsProjectTags = 1147,
  TagsProjectTagsBlogPost = 1148,
  TagsProjectTagsChildren = 1149,
  TagsProjectTagsContentfulId = 1150,
  TagsProjectTagsCreatedAt = 1151,
  TagsProjectTagsId = 1152,
  TagsProjectTagsLevel = 1153,
  TagsProjectTagsName = 1154,
  TagsProjectTagsNodeLocale = 1155,
  TagsProjectTagsOss = 1156,
  TagsProjectTagsProject = 1157,
  TagsProjectTagsSkillMap = 1158,
  TagsProjectTagsSpaceId = 1159,
  TagsProjectTagsUpdatedAt = 1160,
  TagsProjectUpdatedAt = 1161,
  TagsSkillMap = 1162,
  TagsSkillMapChildren = 1163,
  TagsSkillMapChildrenChildren = 1164,
  TagsSkillMapChildrenId = 1165,
  TagsSkillMapContentfulId = 1166,
  TagsSkillMapCreatedAt = 1167,
  TagsSkillMapExpanded = 1168,
  TagsSkillMapId = 1169,
  TagsSkillMapInternalContent = 1170,
  TagsSkillMapInternalContentDigest = 1171,
  TagsSkillMapInternalDescription = 1172,
  TagsSkillMapInternalFieldOwners = 1173,
  TagsSkillMapInternalIgnoreType = 1174,
  TagsSkillMapInternalMediaType = 1175,
  TagsSkillMapInternalOwner = 1176,
  TagsSkillMapInternalType = 1177,
  TagsSkillMapName = 1178,
  TagsSkillMapNodeLocale = 1179,
  TagsSkillMapParentChildren = 1180,
  TagsSkillMapParentId = 1181,
  TagsSkillMapSkills = 1182,
  TagsSkillMapSkillsBlogPost = 1183,
  TagsSkillMapSkillsChildren = 1184,
  TagsSkillMapSkillsContentfulId = 1185,
  TagsSkillMapSkillsCreatedAt = 1186,
  TagsSkillMapSkillsId = 1187,
  TagsSkillMapSkillsLevel = 1188,
  TagsSkillMapSkillsName = 1189,
  TagsSkillMapSkillsNodeLocale = 1190,
  TagsSkillMapSkillsOss = 1191,
  TagsSkillMapSkillsProject = 1192,
  TagsSkillMapSkillsSkillMap = 1193,
  TagsSkillMapSkillsSpaceId = 1194,
  TagsSkillMapSkillsUpdatedAt = 1195,
  TagsSkillMapSortKey = 1196,
  TagsSkillMapSpaceId = 1197,
  TagsSkillMapSysRevision = 1198,
  TagsSkillMapSysType = 1199,
  TagsSkillMapUpdatedAt = 1200,
  TagsSpaceId = 1201,
  TagsSysRevision = 1202,
  TagsSysType = 1203,
  TagsUpdatedAt = 1204,
  UpdatedAt = 1205
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
  SkillsBlogPostCategoryName = 98,
  SkillsBlogPostCategoryNodeLocale = 99,
  SkillsBlogPostCategorySortKey = 100,
  SkillsBlogPostCategorySpaceId = 101,
  SkillsBlogPostCategoryUpdatedAt = 102,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 103,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 104,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 105,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 106,
  SkillsBlogPostChildren = 107,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 108,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 109,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 110,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 111,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 112,
  SkillsBlogPostChildrenChildren = 113,
  SkillsBlogPostChildrenId = 114,
  SkillsBlogPostContentChildren = 115,
  SkillsBlogPostContentChildrenMdx = 116,
  SkillsBlogPostContentContent = 117,
  SkillsBlogPostContentId = 118,
  SkillsBlogPostContentfulId = 119,
  SkillsBlogPostCreated = 120,
  SkillsBlogPostCreatedAt = 121,
  SkillsBlogPostExcerpt = 122,
  SkillsBlogPostId = 123,
  SkillsBlogPostInternalContent = 124,
  SkillsBlogPostInternalContentDigest = 125,
  SkillsBlogPostInternalDescription = 126,
  SkillsBlogPostInternalFieldOwners = 127,
  SkillsBlogPostInternalIgnoreType = 128,
  SkillsBlogPostInternalMediaType = 129,
  SkillsBlogPostInternalOwner = 130,
  SkillsBlogPostInternalType = 131,
  SkillsBlogPostNodeLocale = 132,
  SkillsBlogPostParentChildren = 133,
  SkillsBlogPostParentId = 134,
  SkillsBlogPostSlug = 135,
  SkillsBlogPostSpaceId = 136,
  SkillsBlogPostSysRevision = 137,
  SkillsBlogPostSysType = 138,
  SkillsBlogPostTags = 139,
  SkillsBlogPostTagsBlogPost = 140,
  SkillsBlogPostTagsChildren = 141,
  SkillsBlogPostTagsContentfulId = 142,
  SkillsBlogPostTagsCreatedAt = 143,
  SkillsBlogPostTagsId = 144,
  SkillsBlogPostTagsLevel = 145,
  SkillsBlogPostTagsName = 146,
  SkillsBlogPostTagsNodeLocale = 147,
  SkillsBlogPostTagsOss = 148,
  SkillsBlogPostTagsProject = 149,
  SkillsBlogPostTagsSkillMap = 150,
  SkillsBlogPostTagsSpaceId = 151,
  SkillsBlogPostTagsUpdatedAt = 152,
  SkillsBlogPostThumbnailChildren = 153,
  SkillsBlogPostThumbnailContentfulId = 154,
  SkillsBlogPostThumbnailCreatedAt = 155,
  SkillsBlogPostThumbnailDescription = 156,
  SkillsBlogPostThumbnailFilename = 157,
  SkillsBlogPostThumbnailFilesize = 158,
  SkillsBlogPostThumbnailGatsbyImage = 159,
  SkillsBlogPostThumbnailGatsbyImageData = 160,
  SkillsBlogPostThumbnailHeight = 161,
  SkillsBlogPostThumbnailId = 162,
  SkillsBlogPostThumbnailMimeType = 163,
  SkillsBlogPostThumbnailNodeLocale = 164,
  SkillsBlogPostThumbnailPlaceholderUrl = 165,
  SkillsBlogPostThumbnailPublicUrl = 166,
  SkillsBlogPostThumbnailSpaceId = 167,
  SkillsBlogPostThumbnailTitle = 168,
  SkillsBlogPostThumbnailUpdatedAt = 169,
  SkillsBlogPostThumbnailUrl = 170,
  SkillsBlogPostThumbnailWidth = 171,
  SkillsBlogPostTitle = 172,
  SkillsBlogPostUpdated = 173,
  SkillsBlogPostUpdatedAt = 174,
  SkillsChildren = 175,
  SkillsChildrenChildren = 176,
  SkillsChildrenChildrenChildren = 177,
  SkillsChildrenChildrenId = 178,
  SkillsChildrenId = 179,
  SkillsChildrenInternalContent = 180,
  SkillsChildrenInternalContentDigest = 181,
  SkillsChildrenInternalDescription = 182,
  SkillsChildrenInternalFieldOwners = 183,
  SkillsChildrenInternalIgnoreType = 184,
  SkillsChildrenInternalMediaType = 185,
  SkillsChildrenInternalOwner = 186,
  SkillsChildrenInternalType = 187,
  SkillsChildrenParentChildren = 188,
  SkillsChildrenParentId = 189,
  SkillsContentfulId = 190,
  SkillsCreatedAt = 191,
  SkillsId = 192,
  SkillsInternalContent = 193,
  SkillsInternalContentDigest = 194,
  SkillsInternalDescription = 195,
  SkillsInternalFieldOwners = 196,
  SkillsInternalIgnoreType = 197,
  SkillsInternalMediaType = 198,
  SkillsInternalOwner = 199,
  SkillsInternalType = 200,
  SkillsLevel = 201,
  SkillsName = 202,
  SkillsNodeLocale = 203,
  SkillsOss = 204,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 205,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMdx = 206,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 207,
  SkillsOssChildContentfulOssDetailTextNodeId = 208,
  SkillsOssChildren = 209,
  SkillsOssChildrenContentfulOssDetailTextNode = 210,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 211,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 212,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 213,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 214,
  SkillsOssChildrenChildren = 215,
  SkillsOssChildrenId = 216,
  SkillsOssContentfulId = 217,
  SkillsOssCreatedAt = 218,
  SkillsOssDetailChildren = 219,
  SkillsOssDetailChildrenMdx = 220,
  SkillsOssDetailDetail = 221,
  SkillsOssDetailId = 222,
  SkillsOssHref = 223,
  SkillsOssIconChildren = 224,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 225,
  SkillsOssIconContact = 226,
  SkillsOssIconContentfulId = 227,
  SkillsOssIconCreatedAt = 228,
  SkillsOssIconHistory = 229,
  SkillsOssIconId = 230,
  SkillsOssIconName = 231,
  SkillsOssIconNodeLocale = 232,
  SkillsOssIconOss = 233,
  SkillsOssIconProject = 234,
  SkillsOssIconSpaceId = 235,
  SkillsOssIconUpdatedAt = 236,
  SkillsOssIconWhatICanDo = 237,
  SkillsOssId = 238,
  SkillsOssImageChildren = 239,
  SkillsOssImageContentfulId = 240,
  SkillsOssImageCreatedAt = 241,
  SkillsOssImageDescription = 242,
  SkillsOssImageFilename = 243,
  SkillsOssImageFilesize = 244,
  SkillsOssImageGatsbyImage = 245,
  SkillsOssImageGatsbyImageData = 246,
  SkillsOssImageHeight = 247,
  SkillsOssImageId = 248,
  SkillsOssImageMimeType = 249,
  SkillsOssImageNodeLocale = 250,
  SkillsOssImagePlaceholderUrl = 251,
  SkillsOssImagePublicUrl = 252,
  SkillsOssImageSpaceId = 253,
  SkillsOssImageTitle = 254,
  SkillsOssImageUpdatedAt = 255,
  SkillsOssImageUrl = 256,
  SkillsOssImageWidth = 257,
  SkillsOssInternalContent = 258,
  SkillsOssInternalContentDigest = 259,
  SkillsOssInternalDescription = 260,
  SkillsOssInternalFieldOwners = 261,
  SkillsOssInternalIgnoreType = 262,
  SkillsOssInternalMediaType = 263,
  SkillsOssInternalOwner = 264,
  SkillsOssInternalType = 265,
  SkillsOssName = 266,
  SkillsOssNodeLocale = 267,
  SkillsOssParentChildren = 268,
  SkillsOssParentId = 269,
  SkillsOssSpaceId = 270,
  SkillsOssStartDate = 271,
  SkillsOssSubName = 272,
  SkillsOssSysRevision = 273,
  SkillsOssSysType = 274,
  SkillsOssTags = 275,
  SkillsOssTagsBlogPost = 276,
  SkillsOssTagsChildren = 277,
  SkillsOssTagsContentfulId = 278,
  SkillsOssTagsCreatedAt = 279,
  SkillsOssTagsId = 280,
  SkillsOssTagsLevel = 281,
  SkillsOssTagsName = 282,
  SkillsOssTagsNodeLocale = 283,
  SkillsOssTagsOss = 284,
  SkillsOssTagsProject = 285,
  SkillsOssTagsSkillMap = 286,
  SkillsOssTagsSpaceId = 287,
  SkillsOssTagsUpdatedAt = 288,
  SkillsOssUpdatedAt = 289,
  SkillsParentChildren = 290,
  SkillsParentChildrenChildren = 291,
  SkillsParentChildrenId = 292,
  SkillsParentId = 293,
  SkillsParentInternalContent = 294,
  SkillsParentInternalContentDigest = 295,
  SkillsParentInternalDescription = 296,
  SkillsParentInternalFieldOwners = 297,
  SkillsParentInternalIgnoreType = 298,
  SkillsParentInternalMediaType = 299,
  SkillsParentInternalOwner = 300,
  SkillsParentInternalType = 301,
  SkillsParentParentChildren = 302,
  SkillsParentParentId = 303,
  SkillsProject = 304,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 305,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 306,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 307,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 308,
  SkillsProjectChildren = 309,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 310,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 311,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 312,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 313,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 314,
  SkillsProjectChildrenChildren = 315,
  SkillsProjectChildrenId = 316,
  SkillsProjectContentfulId = 317,
  SkillsProjectCreatedAt = 318,
  SkillsProjectDetailChildren = 319,
  SkillsProjectDetailChildrenMdx = 320,
  SkillsProjectDetailDetail = 321,
  SkillsProjectDetailId = 322,
  SkillsProjectEndDate = 323,
  SkillsProjectIconChildren = 324,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 325,
  SkillsProjectIconContact = 326,
  SkillsProjectIconContentfulId = 327,
  SkillsProjectIconCreatedAt = 328,
  SkillsProjectIconHistory = 329,
  SkillsProjectIconId = 330,
  SkillsProjectIconName = 331,
  SkillsProjectIconNodeLocale = 332,
  SkillsProjectIconOss = 333,
  SkillsProjectIconProject = 334,
  SkillsProjectIconSpaceId = 335,
  SkillsProjectIconUpdatedAt = 336,
  SkillsProjectIconWhatICanDo = 337,
  SkillsProjectId = 338,
  SkillsProjectInternalContent = 339,
  SkillsProjectInternalContentDigest = 340,
  SkillsProjectInternalDescription = 341,
  SkillsProjectInternalFieldOwners = 342,
  SkillsProjectInternalIgnoreType = 343,
  SkillsProjectInternalMediaType = 344,
  SkillsProjectInternalOwner = 345,
  SkillsProjectInternalType = 346,
  SkillsProjectName = 347,
  SkillsProjectNodeLocale = 348,
  SkillsProjectParentChildren = 349,
  SkillsProjectParentId = 350,
  SkillsProjectSpaceId = 351,
  SkillsProjectStartDate = 352,
  SkillsProjectSubName = 353,
  SkillsProjectSysRevision = 354,
  SkillsProjectSysType = 355,
  SkillsProjectTags = 356,
  SkillsProjectTagsBlogPost = 357,
  SkillsProjectTagsChildren = 358,
  SkillsProjectTagsContentfulId = 359,
  SkillsProjectTagsCreatedAt = 360,
  SkillsProjectTagsId = 361,
  SkillsProjectTagsLevel = 362,
  SkillsProjectTagsName = 363,
  SkillsProjectTagsNodeLocale = 364,
  SkillsProjectTagsOss = 365,
  SkillsProjectTagsProject = 366,
  SkillsProjectTagsSkillMap = 367,
  SkillsProjectTagsSpaceId = 368,
  SkillsProjectTagsUpdatedAt = 369,
  SkillsProjectUpdatedAt = 370,
  SkillsSkillMap = 371,
  SkillsSkillMapChildren = 372,
  SkillsSkillMapChildrenChildren = 373,
  SkillsSkillMapChildrenId = 374,
  SkillsSkillMapContentfulId = 375,
  SkillsSkillMapCreatedAt = 376,
  SkillsSkillMapExpanded = 377,
  SkillsSkillMapId = 378,
  SkillsSkillMapInternalContent = 379,
  SkillsSkillMapInternalContentDigest = 380,
  SkillsSkillMapInternalDescription = 381,
  SkillsSkillMapInternalFieldOwners = 382,
  SkillsSkillMapInternalIgnoreType = 383,
  SkillsSkillMapInternalMediaType = 384,
  SkillsSkillMapInternalOwner = 385,
  SkillsSkillMapInternalType = 386,
  SkillsSkillMapName = 387,
  SkillsSkillMapNodeLocale = 388,
  SkillsSkillMapParentChildren = 389,
  SkillsSkillMapParentId = 390,
  SkillsSkillMapSkills = 391,
  SkillsSkillMapSkillsBlogPost = 392,
  SkillsSkillMapSkillsChildren = 393,
  SkillsSkillMapSkillsContentfulId = 394,
  SkillsSkillMapSkillsCreatedAt = 395,
  SkillsSkillMapSkillsId = 396,
  SkillsSkillMapSkillsLevel = 397,
  SkillsSkillMapSkillsName = 398,
  SkillsSkillMapSkillsNodeLocale = 399,
  SkillsSkillMapSkillsOss = 400,
  SkillsSkillMapSkillsProject = 401,
  SkillsSkillMapSkillsSkillMap = 402,
  SkillsSkillMapSkillsSpaceId = 403,
  SkillsSkillMapSkillsUpdatedAt = 404,
  SkillsSkillMapSortKey = 405,
  SkillsSkillMapSpaceId = 406,
  SkillsSkillMapSysRevision = 407,
  SkillsSkillMapSysType = 408,
  SkillsSkillMapUpdatedAt = 409,
  SkillsSpaceId = 410,
  SkillsSysRevision = 411,
  SkillsSysType = 412,
  SkillsUpdatedAt = 413,
  SortKey = 414,
  SpaceId = 415,
  SysContentTypeSysId = 416,
  SysContentTypeSysLinkType = 417,
  SysContentTypeSysType = 418,
  SysRevision = 419,
  SysType = 420,
  UpdatedAt = 421
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
  BlogPostCategoryName = 30,
  BlogPostCategoryNodeLocale = 31,
  BlogPostCategoryParentChildren = 32,
  BlogPostCategoryParentId = 33,
  BlogPostCategorySortKey = 34,
  BlogPostCategorySpaceId = 35,
  BlogPostCategorySysRevision = 36,
  BlogPostCategorySysType = 37,
  BlogPostCategoryUpdatedAt = 38,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxBody = 39,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxChildren = 40,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 41,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 42,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHeadings = 43,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHtml = 44,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxId = 45,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 46,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxRawBody = 47,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxSlug = 48,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 49,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 50,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 51,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 52,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxBody = 53,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 54,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 55,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 56,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 57,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 58,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxId = 59,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 60,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 61,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 62,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 63,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 64,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 65,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 66,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 67,
  BlogPostChildContentfulBlogPostContentTextNodeId = 68,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 69,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 70,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 71,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 72,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 73,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 74,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 75,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 76,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 77,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 78,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 79,
  BlogPostChildren = 80,
  BlogPostChildrenContentfulBlogPostContentTextNode = 81,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxBody = 82,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 83,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 84,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 85,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 86,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 87,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxId = 88,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 89,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 90,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 91,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 92,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 93,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 94,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 95,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 96,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 97,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 98,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 99,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 100,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 101,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 102,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 103,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 104,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 105,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 106,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 107,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 108,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 109,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 110,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 111,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 112,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 113,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 114,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 115,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 116,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 117,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 118,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 119,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 120,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 121,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 122,
  BlogPostChildrenChildren = 123,
  BlogPostChildrenChildrenChildren = 124,
  BlogPostChildrenChildrenId = 125,
  BlogPostChildrenId = 126,
  BlogPostChildrenInternalContent = 127,
  BlogPostChildrenInternalContentDigest = 128,
  BlogPostChildrenInternalDescription = 129,
  BlogPostChildrenInternalFieldOwners = 130,
  BlogPostChildrenInternalIgnoreType = 131,
  BlogPostChildrenInternalMediaType = 132,
  BlogPostChildrenInternalOwner = 133,
  BlogPostChildrenInternalType = 134,
  BlogPostChildrenParentChildren = 135,
  BlogPostChildrenParentId = 136,
  BlogPostContentChildMdxBody = 137,
  BlogPostContentChildMdxChildren = 138,
  BlogPostContentChildMdxExcerpt = 139,
  BlogPostContentChildMdxFileAbsolutePath = 140,
  BlogPostContentChildMdxHeadings = 141,
  BlogPostContentChildMdxHtml = 142,
  BlogPostContentChildMdxId = 143,
  BlogPostContentChildMdxMdxAst = 144,
  BlogPostContentChildMdxRawBody = 145,
  BlogPostContentChildMdxSlug = 146,
  BlogPostContentChildMdxTableOfContents = 147,
  BlogPostContentChildMdxTimeToRead = 148,
  BlogPostContentChildren = 149,
  BlogPostContentChildrenMdx = 150,
  BlogPostContentChildrenMdxBody = 151,
  BlogPostContentChildrenMdxChildren = 152,
  BlogPostContentChildrenMdxExcerpt = 153,
  BlogPostContentChildrenMdxFileAbsolutePath = 154,
  BlogPostContentChildrenMdxHeadings = 155,
  BlogPostContentChildrenMdxHtml = 156,
  BlogPostContentChildrenMdxId = 157,
  BlogPostContentChildrenMdxMdxAst = 158,
  BlogPostContentChildrenMdxRawBody = 159,
  BlogPostContentChildrenMdxSlug = 160,
  BlogPostContentChildrenMdxTableOfContents = 161,
  BlogPostContentChildrenMdxTimeToRead = 162,
  BlogPostContentChildrenChildren = 163,
  BlogPostContentChildrenId = 164,
  BlogPostContentContent = 165,
  BlogPostContentId = 166,
  BlogPostContentInternalContent = 167,
  BlogPostContentInternalContentDigest = 168,
  BlogPostContentInternalDescription = 169,
  BlogPostContentInternalFieldOwners = 170,
  BlogPostContentInternalIgnoreType = 171,
  BlogPostContentInternalMediaType = 172,
  BlogPostContentInternalOwner = 173,
  BlogPostContentInternalType = 174,
  BlogPostContentParentChildren = 175,
  BlogPostContentParentId = 176,
  BlogPostContentSysType = 177,
  BlogPostContentfulId = 178,
  BlogPostCreated = 179,
  BlogPostCreatedAt = 180,
  BlogPostExcerpt = 181,
  BlogPostId = 182,
  BlogPostInternalContent = 183,
  BlogPostInternalContentDigest = 184,
  BlogPostInternalDescription = 185,
  BlogPostInternalFieldOwners = 186,
  BlogPostInternalIgnoreType = 187,
  BlogPostInternalMediaType = 188,
  BlogPostInternalOwner = 189,
  BlogPostInternalType = 190,
  BlogPostNodeLocale = 191,
  BlogPostParentChildren = 192,
  BlogPostParentChildrenChildren = 193,
  BlogPostParentChildrenId = 194,
  BlogPostParentId = 195,
  BlogPostParentInternalContent = 196,
  BlogPostParentInternalContentDigest = 197,
  BlogPostParentInternalDescription = 198,
  BlogPostParentInternalFieldOwners = 199,
  BlogPostParentInternalIgnoreType = 200,
  BlogPostParentInternalMediaType = 201,
  BlogPostParentInternalOwner = 202,
  BlogPostParentInternalType = 203,
  BlogPostParentParentChildren = 204,
  BlogPostParentParentId = 205,
  BlogPostSlug = 206,
  BlogPostSpaceId = 207,
  BlogPostSysRevision = 208,
  BlogPostSysType = 209,
  BlogPostTags = 210,
  BlogPostTagsBlogPost = 211,
  BlogPostTagsBlogPostChildren = 212,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 213,
  BlogPostTagsBlogPostContentfulId = 214,
  BlogPostTagsBlogPostCreated = 215,
  BlogPostTagsBlogPostCreatedAt = 216,
  BlogPostTagsBlogPostExcerpt = 217,
  BlogPostTagsBlogPostId = 218,
  BlogPostTagsBlogPostNodeLocale = 219,
  BlogPostTagsBlogPostSlug = 220,
  BlogPostTagsBlogPostSpaceId = 221,
  BlogPostTagsBlogPostTags = 222,
  BlogPostTagsBlogPostTitle = 223,
  BlogPostTagsBlogPostUpdated = 224,
  BlogPostTagsBlogPostUpdatedAt = 225,
  BlogPostTagsChildren = 226,
  BlogPostTagsChildrenChildren = 227,
  BlogPostTagsChildrenId = 228,
  BlogPostTagsContentfulId = 229,
  BlogPostTagsCreatedAt = 230,
  BlogPostTagsId = 231,
  BlogPostTagsInternalContent = 232,
  BlogPostTagsInternalContentDigest = 233,
  BlogPostTagsInternalDescription = 234,
  BlogPostTagsInternalFieldOwners = 235,
  BlogPostTagsInternalIgnoreType = 236,
  BlogPostTagsInternalMediaType = 237,
  BlogPostTagsInternalOwner = 238,
  BlogPostTagsInternalType = 239,
  BlogPostTagsLevel = 240,
  BlogPostTagsName = 241,
  BlogPostTagsNodeLocale = 242,
  BlogPostTagsOss = 243,
  BlogPostTagsOssChildren = 244,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 245,
  BlogPostTagsOssContentfulId = 246,
  BlogPostTagsOssCreatedAt = 247,
  BlogPostTagsOssHref = 248,
  BlogPostTagsOssId = 249,
  BlogPostTagsOssName = 250,
  BlogPostTagsOssNodeLocale = 251,
  BlogPostTagsOssSpaceId = 252,
  BlogPostTagsOssStartDate = 253,
  BlogPostTagsOssSubName = 254,
  BlogPostTagsOssTags = 255,
  BlogPostTagsOssUpdatedAt = 256,
  BlogPostTagsParentChildren = 257,
  BlogPostTagsParentId = 258,
  BlogPostTagsProject = 259,
  BlogPostTagsProjectChildren = 260,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 261,
  BlogPostTagsProjectContentfulId = 262,
  BlogPostTagsProjectCreatedAt = 263,
  BlogPostTagsProjectEndDate = 264,
  BlogPostTagsProjectId = 265,
  BlogPostTagsProjectName = 266,
  BlogPostTagsProjectNodeLocale = 267,
  BlogPostTagsProjectSpaceId = 268,
  BlogPostTagsProjectStartDate = 269,
  BlogPostTagsProjectSubName = 270,
  BlogPostTagsProjectTags = 271,
  BlogPostTagsProjectUpdatedAt = 272,
  BlogPostTagsSkillMap = 273,
  BlogPostTagsSkillMapChildren = 274,
  BlogPostTagsSkillMapContentfulId = 275,
  BlogPostTagsSkillMapCreatedAt = 276,
  BlogPostTagsSkillMapExpanded = 277,
  BlogPostTagsSkillMapId = 278,
  BlogPostTagsSkillMapName = 279,
  BlogPostTagsSkillMapNodeLocale = 280,
  BlogPostTagsSkillMapSkills = 281,
  BlogPostTagsSkillMapSortKey = 282,
  BlogPostTagsSkillMapSpaceId = 283,
  BlogPostTagsSkillMapUpdatedAt = 284,
  BlogPostTagsSpaceId = 285,
  BlogPostTagsSysRevision = 286,
  BlogPostTagsSysType = 287,
  BlogPostTagsUpdatedAt = 288,
  BlogPostThumbnailChildren = 289,
  BlogPostThumbnailChildrenChildren = 290,
  BlogPostThumbnailChildrenId = 291,
  BlogPostThumbnailContentfulId = 292,
  BlogPostThumbnailCreatedAt = 293,
  BlogPostThumbnailDescription = 294,
  BlogPostThumbnailFileContentType = 295,
  BlogPostThumbnailFileFileName = 296,
  BlogPostThumbnailFileUrl = 297,
  BlogPostThumbnailFilename = 298,
  BlogPostThumbnailFilesize = 299,
  BlogPostThumbnailGatsbyImage = 300,
  BlogPostThumbnailGatsbyImageData = 301,
  BlogPostThumbnailHeight = 302,
  BlogPostThumbnailId = 303,
  BlogPostThumbnailInternalContent = 304,
  BlogPostThumbnailInternalContentDigest = 305,
  BlogPostThumbnailInternalDescription = 306,
  BlogPostThumbnailInternalFieldOwners = 307,
  BlogPostThumbnailInternalIgnoreType = 308,
  BlogPostThumbnailInternalMediaType = 309,
  BlogPostThumbnailInternalOwner = 310,
  BlogPostThumbnailInternalType = 311,
  BlogPostThumbnailMimeType = 312,
  BlogPostThumbnailNodeLocale = 313,
  BlogPostThumbnailParentChildren = 314,
  BlogPostThumbnailParentId = 315,
  BlogPostThumbnailPlaceholderUrl = 316,
  BlogPostThumbnailPublicUrl = 317,
  BlogPostThumbnailResizeHeight = 318,
  BlogPostThumbnailResizeSrc = 319,
  BlogPostThumbnailResizeWidth = 320,
  BlogPostThumbnailSpaceId = 321,
  BlogPostThumbnailSysRevision = 322,
  BlogPostThumbnailSysType = 323,
  BlogPostThumbnailTitle = 324,
  BlogPostThumbnailUpdatedAt = 325,
  BlogPostThumbnailUrl = 326,
  BlogPostThumbnailWidth = 327,
  BlogPostTitle = 328,
  BlogPostUpdated = 329,
  BlogPostUpdatedAt = 330,
  Children = 331,
  ChildrenChildren = 332,
  ChildrenChildrenChildren = 333,
  ChildrenChildrenChildrenChildren = 334,
  ChildrenChildrenChildrenId = 335,
  ChildrenChildrenId = 336,
  ChildrenChildrenInternalContent = 337,
  ChildrenChildrenInternalContentDigest = 338,
  ChildrenChildrenInternalDescription = 339,
  ChildrenChildrenInternalFieldOwners = 340,
  ChildrenChildrenInternalIgnoreType = 341,
  ChildrenChildrenInternalMediaType = 342,
  ChildrenChildrenInternalOwner = 343,
  ChildrenChildrenInternalType = 344,
  ChildrenChildrenParentChildren = 345,
  ChildrenChildrenParentId = 346,
  ChildrenId = 347,
  ChildrenInternalContent = 348,
  ChildrenInternalContentDigest = 349,
  ChildrenInternalDescription = 350,
  ChildrenInternalFieldOwners = 351,
  ChildrenInternalIgnoreType = 352,
  ChildrenInternalMediaType = 353,
  ChildrenInternalOwner = 354,
  ChildrenInternalType = 355,
  ChildrenParentChildren = 356,
  ChildrenParentChildrenChildren = 357,
  ChildrenParentChildrenId = 358,
  ChildrenParentId = 359,
  ChildrenParentInternalContent = 360,
  ChildrenParentInternalContentDigest = 361,
  ChildrenParentInternalDescription = 362,
  ChildrenParentInternalFieldOwners = 363,
  ChildrenParentInternalIgnoreType = 364,
  ChildrenParentInternalMediaType = 365,
  ChildrenParentInternalOwner = 366,
  ChildrenParentInternalType = 367,
  ChildrenParentParentChildren = 368,
  ChildrenParentParentId = 369,
  ContentfulId = 370,
  CreatedAt = 371,
  Id = 372,
  InternalContent = 373,
  InternalContentDigest = 374,
  InternalDescription = 375,
  InternalFieldOwners = 376,
  InternalIgnoreType = 377,
  InternalMediaType = 378,
  InternalOwner = 379,
  InternalType = 380,
  Level = 381,
  Name = 382,
  NodeLocale = 383,
  Oss = 384,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 385,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 386,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 387,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 388,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 389,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 390,
  OssChildContentfulOssDetailTextNodeChildMdxId = 391,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 392,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 393,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 394,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 395,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 396,
  OssChildContentfulOssDetailTextNodeChildren = 397,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 398,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 399,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 400,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 401,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 402,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 403,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 404,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 405,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 406,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 407,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 408,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 409,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 410,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 411,
  OssChildContentfulOssDetailTextNodeChildrenId = 412,
  OssChildContentfulOssDetailTextNodeDetail = 413,
  OssChildContentfulOssDetailTextNodeId = 414,
  OssChildContentfulOssDetailTextNodeInternalContent = 415,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 416,
  OssChildContentfulOssDetailTextNodeInternalDescription = 417,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 418,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 419,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 420,
  OssChildContentfulOssDetailTextNodeInternalOwner = 421,
  OssChildContentfulOssDetailTextNodeInternalType = 422,
  OssChildContentfulOssDetailTextNodeParentChildren = 423,
  OssChildContentfulOssDetailTextNodeParentId = 424,
  OssChildContentfulOssDetailTextNodeSysType = 425,
  OssChildren = 426,
  OssChildrenContentfulOssDetailTextNode = 427,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 428,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 429,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 430,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 431,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 432,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 433,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 434,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 435,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 436,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 437,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 438,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 439,
  OssChildrenContentfulOssDetailTextNodeChildren = 440,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 441,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 442,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 443,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 444,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 445,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 446,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 447,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 448,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 449,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 450,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 451,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 452,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 453,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 454,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 455,
  OssChildrenContentfulOssDetailTextNodeDetail = 456,
  OssChildrenContentfulOssDetailTextNodeId = 457,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 458,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 459,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 460,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 461,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 462,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 463,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 464,
  OssChildrenContentfulOssDetailTextNodeInternalType = 465,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 466,
  OssChildrenContentfulOssDetailTextNodeParentId = 467,
  OssChildrenContentfulOssDetailTextNodeSysType = 468,
  OssChildrenChildren = 469,
  OssChildrenChildrenChildren = 470,
  OssChildrenChildrenId = 471,
  OssChildrenId = 472,
  OssChildrenInternalContent = 473,
  OssChildrenInternalContentDigest = 474,
  OssChildrenInternalDescription = 475,
  OssChildrenInternalFieldOwners = 476,
  OssChildrenInternalIgnoreType = 477,
  OssChildrenInternalMediaType = 478,
  OssChildrenInternalOwner = 479,
  OssChildrenInternalType = 480,
  OssChildrenParentChildren = 481,
  OssChildrenParentId = 482,
  OssContentfulId = 483,
  OssCreatedAt = 484,
  OssDetailChildMdxBody = 485,
  OssDetailChildMdxChildren = 486,
  OssDetailChildMdxExcerpt = 487,
  OssDetailChildMdxFileAbsolutePath = 488,
  OssDetailChildMdxHeadings = 489,
  OssDetailChildMdxHtml = 490,
  OssDetailChildMdxId = 491,
  OssDetailChildMdxMdxAst = 492,
  OssDetailChildMdxRawBody = 493,
  OssDetailChildMdxSlug = 494,
  OssDetailChildMdxTableOfContents = 495,
  OssDetailChildMdxTimeToRead = 496,
  OssDetailChildren = 497,
  OssDetailChildrenMdx = 498,
  OssDetailChildrenMdxBody = 499,
  OssDetailChildrenMdxChildren = 500,
  OssDetailChildrenMdxExcerpt = 501,
  OssDetailChildrenMdxFileAbsolutePath = 502,
  OssDetailChildrenMdxHeadings = 503,
  OssDetailChildrenMdxHtml = 504,
  OssDetailChildrenMdxId = 505,
  OssDetailChildrenMdxMdxAst = 506,
  OssDetailChildrenMdxRawBody = 507,
  OssDetailChildrenMdxSlug = 508,
  OssDetailChildrenMdxTableOfContents = 509,
  OssDetailChildrenMdxTimeToRead = 510,
  OssDetailChildrenChildren = 511,
  OssDetailChildrenId = 512,
  OssDetailDetail = 513,
  OssDetailId = 514,
  OssDetailInternalContent = 515,
  OssDetailInternalContentDigest = 516,
  OssDetailInternalDescription = 517,
  OssDetailInternalFieldOwners = 518,
  OssDetailInternalIgnoreType = 519,
  OssDetailInternalMediaType = 520,
  OssDetailInternalOwner = 521,
  OssDetailInternalType = 522,
  OssDetailParentChildren = 523,
  OssDetailParentId = 524,
  OssDetailSysType = 525,
  OssHref = 526,
  OssIconChildContentfulIconSvgTextNodeChildren = 527,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 528,
  OssIconChildContentfulIconSvgTextNodeId = 529,
  OssIconChildContentfulIconSvgTextNodeSvg = 530,
  OssIconChildren = 531,
  OssIconChildrenContentfulIconSvgTextNode = 532,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 533,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 534,
  OssIconChildrenContentfulIconSvgTextNodeId = 535,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 536,
  OssIconChildrenChildren = 537,
  OssIconChildrenId = 538,
  OssIconContact = 539,
  OssIconContactChildren = 540,
  OssIconContactContentfulId = 541,
  OssIconContactCreatedAt = 542,
  OssIconContactHref = 543,
  OssIconContactId = 544,
  OssIconContactName = 545,
  OssIconContactNodeLocale = 546,
  OssIconContactSortKey = 547,
  OssIconContactSpaceId = 548,
  OssIconContactSubName = 549,
  OssIconContactUpdatedAt = 550,
  OssIconContentfulId = 551,
  OssIconCreatedAt = 552,
  OssIconHistory = 553,
  OssIconHistoryChildren = 554,
  OssIconHistoryContentfulId = 555,
  OssIconHistoryCreatedAt = 556,
  OssIconHistoryDate = 557,
  OssIconHistoryId = 558,
  OssIconHistoryName = 559,
  OssIconHistoryNodeLocale = 560,
  OssIconHistorySpaceId = 561,
  OssIconHistorySubName = 562,
  OssIconHistoryUpdatedAt = 563,
  OssIconId = 564,
  OssIconInternalContent = 565,
  OssIconInternalContentDigest = 566,
  OssIconInternalDescription = 567,
  OssIconInternalFieldOwners = 568,
  OssIconInternalIgnoreType = 569,
  OssIconInternalMediaType = 570,
  OssIconInternalOwner = 571,
  OssIconInternalType = 572,
  OssIconName = 573,
  OssIconNodeLocale = 574,
  OssIconOss = 575,
  OssIconOssChildren = 576,
  OssIconOssChildrenContentfulOssDetailTextNode = 577,
  OssIconOssContentfulId = 578,
  OssIconOssCreatedAt = 579,
  OssIconOssHref = 580,
  OssIconOssId = 581,
  OssIconOssName = 582,
  OssIconOssNodeLocale = 583,
  OssIconOssSpaceId = 584,
  OssIconOssStartDate = 585,
  OssIconOssSubName = 586,
  OssIconOssTags = 587,
  OssIconOssUpdatedAt = 588,
  OssIconParentChildren = 589,
  OssIconParentId = 590,
  OssIconProject = 591,
  OssIconProjectChildren = 592,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 593,
  OssIconProjectContentfulId = 594,
  OssIconProjectCreatedAt = 595,
  OssIconProjectEndDate = 596,
  OssIconProjectId = 597,
  OssIconProjectName = 598,
  OssIconProjectNodeLocale = 599,
  OssIconProjectSpaceId = 600,
  OssIconProjectStartDate = 601,
  OssIconProjectSubName = 602,
  OssIconProjectTags = 603,
  OssIconProjectUpdatedAt = 604,
  OssIconSpaceId = 605,
  OssIconSvgChildren = 606,
  OssIconSvgChildrenMdx = 607,
  OssIconSvgId = 608,
  OssIconSvgSvg = 609,
  OssIconSysRevision = 610,
  OssIconSysType = 611,
  OssIconUpdatedAt = 612,
  OssIconWhatICanDo = 613,
  OssIconWhatICanDoChildren = 614,
  OssIconWhatICanDoContentfulId = 615,
  OssIconWhatICanDoCreatedAt = 616,
  OssIconWhatICanDoId = 617,
  OssIconWhatICanDoName = 618,
  OssIconWhatICanDoNodeLocale = 619,
  OssIconWhatICanDoSortKey = 620,
  OssIconWhatICanDoSpaceId = 621,
  OssIconWhatICanDoSubName = 622,
  OssIconWhatICanDoUpdatedAt = 623,
  OssId = 624,
  OssImageChildren = 625,
  OssImageChildrenChildren = 626,
  OssImageChildrenId = 627,
  OssImageContentfulId = 628,
  OssImageCreatedAt = 629,
  OssImageDescription = 630,
  OssImageFileContentType = 631,
  OssImageFileFileName = 632,
  OssImageFileUrl = 633,
  OssImageFilename = 634,
  OssImageFilesize = 635,
  OssImageGatsbyImage = 636,
  OssImageGatsbyImageData = 637,
  OssImageHeight = 638,
  OssImageId = 639,
  OssImageInternalContent = 640,
  OssImageInternalContentDigest = 641,
  OssImageInternalDescription = 642,
  OssImageInternalFieldOwners = 643,
  OssImageInternalIgnoreType = 644,
  OssImageInternalMediaType = 645,
  OssImageInternalOwner = 646,
  OssImageInternalType = 647,
  OssImageMimeType = 648,
  OssImageNodeLocale = 649,
  OssImageParentChildren = 650,
  OssImageParentId = 651,
  OssImagePlaceholderUrl = 652,
  OssImagePublicUrl = 653,
  OssImageResizeHeight = 654,
  OssImageResizeSrc = 655,
  OssImageResizeWidth = 656,
  OssImageSpaceId = 657,
  OssImageSysRevision = 658,
  OssImageSysType = 659,
  OssImageTitle = 660,
  OssImageUpdatedAt = 661,
  OssImageUrl = 662,
  OssImageWidth = 663,
  OssInternalContent = 664,
  OssInternalContentDigest = 665,
  OssInternalDescription = 666,
  OssInternalFieldOwners = 667,
  OssInternalIgnoreType = 668,
  OssInternalMediaType = 669,
  OssInternalOwner = 670,
  OssInternalType = 671,
  OssName = 672,
  OssNodeLocale = 673,
  OssParentChildren = 674,
  OssParentChildrenChildren = 675,
  OssParentChildrenId = 676,
  OssParentId = 677,
  OssParentInternalContent = 678,
  OssParentInternalContentDigest = 679,
  OssParentInternalDescription = 680,
  OssParentInternalFieldOwners = 681,
  OssParentInternalIgnoreType = 682,
  OssParentInternalMediaType = 683,
  OssParentInternalOwner = 684,
  OssParentInternalType = 685,
  OssParentParentChildren = 686,
  OssParentParentId = 687,
  OssSpaceId = 688,
  OssStartDate = 689,
  OssSubName = 690,
  OssSysRevision = 691,
  OssSysType = 692,
  OssTags = 693,
  OssTagsBlogPost = 694,
  OssTagsBlogPostChildren = 695,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 696,
  OssTagsBlogPostContentfulId = 697,
  OssTagsBlogPostCreated = 698,
  OssTagsBlogPostCreatedAt = 699,
  OssTagsBlogPostExcerpt = 700,
  OssTagsBlogPostId = 701,
  OssTagsBlogPostNodeLocale = 702,
  OssTagsBlogPostSlug = 703,
  OssTagsBlogPostSpaceId = 704,
  OssTagsBlogPostTags = 705,
  OssTagsBlogPostTitle = 706,
  OssTagsBlogPostUpdated = 707,
  OssTagsBlogPostUpdatedAt = 708,
  OssTagsChildren = 709,
  OssTagsChildrenChildren = 710,
  OssTagsChildrenId = 711,
  OssTagsContentfulId = 712,
  OssTagsCreatedAt = 713,
  OssTagsId = 714,
  OssTagsInternalContent = 715,
  OssTagsInternalContentDigest = 716,
  OssTagsInternalDescription = 717,
  OssTagsInternalFieldOwners = 718,
  OssTagsInternalIgnoreType = 719,
  OssTagsInternalMediaType = 720,
  OssTagsInternalOwner = 721,
  OssTagsInternalType = 722,
  OssTagsLevel = 723,
  OssTagsName = 724,
  OssTagsNodeLocale = 725,
  OssTagsOss = 726,
  OssTagsOssChildren = 727,
  OssTagsOssChildrenContentfulOssDetailTextNode = 728,
  OssTagsOssContentfulId = 729,
  OssTagsOssCreatedAt = 730,
  OssTagsOssHref = 731,
  OssTagsOssId = 732,
  OssTagsOssName = 733,
  OssTagsOssNodeLocale = 734,
  OssTagsOssSpaceId = 735,
  OssTagsOssStartDate = 736,
  OssTagsOssSubName = 737,
  OssTagsOssTags = 738,
  OssTagsOssUpdatedAt = 739,
  OssTagsParentChildren = 740,
  OssTagsParentId = 741,
  OssTagsProject = 742,
  OssTagsProjectChildren = 743,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 744,
  OssTagsProjectContentfulId = 745,
  OssTagsProjectCreatedAt = 746,
  OssTagsProjectEndDate = 747,
  OssTagsProjectId = 748,
  OssTagsProjectName = 749,
  OssTagsProjectNodeLocale = 750,
  OssTagsProjectSpaceId = 751,
  OssTagsProjectStartDate = 752,
  OssTagsProjectSubName = 753,
  OssTagsProjectTags = 754,
  OssTagsProjectUpdatedAt = 755,
  OssTagsSkillMap = 756,
  OssTagsSkillMapChildren = 757,
  OssTagsSkillMapContentfulId = 758,
  OssTagsSkillMapCreatedAt = 759,
  OssTagsSkillMapExpanded = 760,
  OssTagsSkillMapId = 761,
  OssTagsSkillMapName = 762,
  OssTagsSkillMapNodeLocale = 763,
  OssTagsSkillMapSkills = 764,
  OssTagsSkillMapSortKey = 765,
  OssTagsSkillMapSpaceId = 766,
  OssTagsSkillMapUpdatedAt = 767,
  OssTagsSpaceId = 768,
  OssTagsSysRevision = 769,
  OssTagsSysType = 770,
  OssTagsUpdatedAt = 771,
  OssUpdatedAt = 772,
  ParentChildren = 773,
  ParentChildrenChildren = 774,
  ParentChildrenChildrenChildren = 775,
  ParentChildrenChildrenId = 776,
  ParentChildrenId = 777,
  ParentChildrenInternalContent = 778,
  ParentChildrenInternalContentDigest = 779,
  ParentChildrenInternalDescription = 780,
  ParentChildrenInternalFieldOwners = 781,
  ParentChildrenInternalIgnoreType = 782,
  ParentChildrenInternalMediaType = 783,
  ParentChildrenInternalOwner = 784,
  ParentChildrenInternalType = 785,
  ParentChildrenParentChildren = 786,
  ParentChildrenParentId = 787,
  ParentId = 788,
  ParentInternalContent = 789,
  ParentInternalContentDigest = 790,
  ParentInternalDescription = 791,
  ParentInternalFieldOwners = 792,
  ParentInternalIgnoreType = 793,
  ParentInternalMediaType = 794,
  ParentInternalOwner = 795,
  ParentInternalType = 796,
  ParentParentChildren = 797,
  ParentParentChildrenChildren = 798,
  ParentParentChildrenId = 799,
  ParentParentId = 800,
  ParentParentInternalContent = 801,
  ParentParentInternalContentDigest = 802,
  ParentParentInternalDescription = 803,
  ParentParentInternalFieldOwners = 804,
  ParentParentInternalIgnoreType = 805,
  ParentParentInternalMediaType = 806,
  ParentParentInternalOwner = 807,
  ParentParentInternalType = 808,
  ParentParentParentChildren = 809,
  ParentParentParentId = 810,
  Project = 811,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 812,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 813,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 814,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 815,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 816,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 817,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 818,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 819,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 820,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 821,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 822,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 823,
  ProjectChildContentfulProjectDetailTextNodeChildren = 824,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 825,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 826,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 827,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 828,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 829,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 830,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 831,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 832,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 833,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 834,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 835,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 836,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 837,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 838,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 839,
  ProjectChildContentfulProjectDetailTextNodeDetail = 840,
  ProjectChildContentfulProjectDetailTextNodeId = 841,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 842,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 843,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 844,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 845,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 846,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 847,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 848,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 849,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 850,
  ProjectChildContentfulProjectDetailTextNodeParentId = 851,
  ProjectChildContentfulProjectDetailTextNodeSysType = 852,
  ProjectChildren = 853,
  ProjectChildrenContentfulProjectDetailTextNode = 854,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 855,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 856,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 857,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 858,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 859,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 860,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 861,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 862,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 863,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 864,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 865,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 866,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 867,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 868,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 869,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 870,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 871,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 872,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 873,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 874,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 875,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 876,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 877,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 878,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 879,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 880,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 881,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 882,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 883,
  ProjectChildrenContentfulProjectDetailTextNodeId = 884,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 885,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 886,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 887,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 888,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 889,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 890,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 891,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 892,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 893,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 894,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 895,
  ProjectChildrenChildren = 896,
  ProjectChildrenChildrenChildren = 897,
  ProjectChildrenChildrenId = 898,
  ProjectChildrenId = 899,
  ProjectChildrenInternalContent = 900,
  ProjectChildrenInternalContentDigest = 901,
  ProjectChildrenInternalDescription = 902,
  ProjectChildrenInternalFieldOwners = 903,
  ProjectChildrenInternalIgnoreType = 904,
  ProjectChildrenInternalMediaType = 905,
  ProjectChildrenInternalOwner = 906,
  ProjectChildrenInternalType = 907,
  ProjectChildrenParentChildren = 908,
  ProjectChildrenParentId = 909,
  ProjectContentfulId = 910,
  ProjectCreatedAt = 911,
  ProjectDetailChildMdxBody = 912,
  ProjectDetailChildMdxChildren = 913,
  ProjectDetailChildMdxExcerpt = 914,
  ProjectDetailChildMdxFileAbsolutePath = 915,
  ProjectDetailChildMdxHeadings = 916,
  ProjectDetailChildMdxHtml = 917,
  ProjectDetailChildMdxId = 918,
  ProjectDetailChildMdxMdxAst = 919,
  ProjectDetailChildMdxRawBody = 920,
  ProjectDetailChildMdxSlug = 921,
  ProjectDetailChildMdxTableOfContents = 922,
  ProjectDetailChildMdxTimeToRead = 923,
  ProjectDetailChildren = 924,
  ProjectDetailChildrenMdx = 925,
  ProjectDetailChildrenMdxBody = 926,
  ProjectDetailChildrenMdxChildren = 927,
  ProjectDetailChildrenMdxExcerpt = 928,
  ProjectDetailChildrenMdxFileAbsolutePath = 929,
  ProjectDetailChildrenMdxHeadings = 930,
  ProjectDetailChildrenMdxHtml = 931,
  ProjectDetailChildrenMdxId = 932,
  ProjectDetailChildrenMdxMdxAst = 933,
  ProjectDetailChildrenMdxRawBody = 934,
  ProjectDetailChildrenMdxSlug = 935,
  ProjectDetailChildrenMdxTableOfContents = 936,
  ProjectDetailChildrenMdxTimeToRead = 937,
  ProjectDetailChildrenChildren = 938,
  ProjectDetailChildrenId = 939,
  ProjectDetailDetail = 940,
  ProjectDetailId = 941,
  ProjectDetailInternalContent = 942,
  ProjectDetailInternalContentDigest = 943,
  ProjectDetailInternalDescription = 944,
  ProjectDetailInternalFieldOwners = 945,
  ProjectDetailInternalIgnoreType = 946,
  ProjectDetailInternalMediaType = 947,
  ProjectDetailInternalOwner = 948,
  ProjectDetailInternalType = 949,
  ProjectDetailParentChildren = 950,
  ProjectDetailParentId = 951,
  ProjectDetailSysType = 952,
  ProjectEndDate = 953,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 954,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 955,
  ProjectIconChildContentfulIconSvgTextNodeId = 956,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 957,
  ProjectIconChildren = 958,
  ProjectIconChildrenContentfulIconSvgTextNode = 959,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 960,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 961,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 962,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 963,
  ProjectIconChildrenChildren = 964,
  ProjectIconChildrenId = 965,
  ProjectIconContact = 966,
  ProjectIconContactChildren = 967,
  ProjectIconContactContentfulId = 968,
  ProjectIconContactCreatedAt = 969,
  ProjectIconContactHref = 970,
  ProjectIconContactId = 971,
  ProjectIconContactName = 972,
  ProjectIconContactNodeLocale = 973,
  ProjectIconContactSortKey = 974,
  ProjectIconContactSpaceId = 975,
  ProjectIconContactSubName = 976,
  ProjectIconContactUpdatedAt = 977,
  ProjectIconContentfulId = 978,
  ProjectIconCreatedAt = 979,
  ProjectIconHistory = 980,
  ProjectIconHistoryChildren = 981,
  ProjectIconHistoryContentfulId = 982,
  ProjectIconHistoryCreatedAt = 983,
  ProjectIconHistoryDate = 984,
  ProjectIconHistoryId = 985,
  ProjectIconHistoryName = 986,
  ProjectIconHistoryNodeLocale = 987,
  ProjectIconHistorySpaceId = 988,
  ProjectIconHistorySubName = 989,
  ProjectIconHistoryUpdatedAt = 990,
  ProjectIconId = 991,
  ProjectIconInternalContent = 992,
  ProjectIconInternalContentDigest = 993,
  ProjectIconInternalDescription = 994,
  ProjectIconInternalFieldOwners = 995,
  ProjectIconInternalIgnoreType = 996,
  ProjectIconInternalMediaType = 997,
  ProjectIconInternalOwner = 998,
  ProjectIconInternalType = 999,
  ProjectIconName = 1000,
  ProjectIconNodeLocale = 1001,
  ProjectIconOss = 1002,
  ProjectIconOssChildren = 1003,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1004,
  ProjectIconOssContentfulId = 1005,
  ProjectIconOssCreatedAt = 1006,
  ProjectIconOssHref = 1007,
  ProjectIconOssId = 1008,
  ProjectIconOssName = 1009,
  ProjectIconOssNodeLocale = 1010,
  ProjectIconOssSpaceId = 1011,
  ProjectIconOssStartDate = 1012,
  ProjectIconOssSubName = 1013,
  ProjectIconOssTags = 1014,
  ProjectIconOssUpdatedAt = 1015,
  ProjectIconParentChildren = 1016,
  ProjectIconParentId = 1017,
  ProjectIconProject = 1018,
  ProjectIconProjectChildren = 1019,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1020,
  ProjectIconProjectContentfulId = 1021,
  ProjectIconProjectCreatedAt = 1022,
  ProjectIconProjectEndDate = 1023,
  ProjectIconProjectId = 1024,
  ProjectIconProjectName = 1025,
  ProjectIconProjectNodeLocale = 1026,
  ProjectIconProjectSpaceId = 1027,
  ProjectIconProjectStartDate = 1028,
  ProjectIconProjectSubName = 1029,
  ProjectIconProjectTags = 1030,
  ProjectIconProjectUpdatedAt = 1031,
  ProjectIconSpaceId = 1032,
  ProjectIconSvgChildren = 1033,
  ProjectIconSvgChildrenMdx = 1034,
  ProjectIconSvgId = 1035,
  ProjectIconSvgSvg = 1036,
  ProjectIconSysRevision = 1037,
  ProjectIconSysType = 1038,
  ProjectIconUpdatedAt = 1039,
  ProjectIconWhatICanDo = 1040,
  ProjectIconWhatICanDoChildren = 1041,
  ProjectIconWhatICanDoContentfulId = 1042,
  ProjectIconWhatICanDoCreatedAt = 1043,
  ProjectIconWhatICanDoId = 1044,
  ProjectIconWhatICanDoName = 1045,
  ProjectIconWhatICanDoNodeLocale = 1046,
  ProjectIconWhatICanDoSortKey = 1047,
  ProjectIconWhatICanDoSpaceId = 1048,
  ProjectIconWhatICanDoSubName = 1049,
  ProjectIconWhatICanDoUpdatedAt = 1050,
  ProjectId = 1051,
  ProjectInternalContent = 1052,
  ProjectInternalContentDigest = 1053,
  ProjectInternalDescription = 1054,
  ProjectInternalFieldOwners = 1055,
  ProjectInternalIgnoreType = 1056,
  ProjectInternalMediaType = 1057,
  ProjectInternalOwner = 1058,
  ProjectInternalType = 1059,
  ProjectName = 1060,
  ProjectNodeLocale = 1061,
  ProjectParentChildren = 1062,
  ProjectParentChildrenChildren = 1063,
  ProjectParentChildrenId = 1064,
  ProjectParentId = 1065,
  ProjectParentInternalContent = 1066,
  ProjectParentInternalContentDigest = 1067,
  ProjectParentInternalDescription = 1068,
  ProjectParentInternalFieldOwners = 1069,
  ProjectParentInternalIgnoreType = 1070,
  ProjectParentInternalMediaType = 1071,
  ProjectParentInternalOwner = 1072,
  ProjectParentInternalType = 1073,
  ProjectParentParentChildren = 1074,
  ProjectParentParentId = 1075,
  ProjectSpaceId = 1076,
  ProjectStartDate = 1077,
  ProjectSubName = 1078,
  ProjectSysRevision = 1079,
  ProjectSysType = 1080,
  ProjectTags = 1081,
  ProjectTagsBlogPost = 1082,
  ProjectTagsBlogPostChildren = 1083,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1084,
  ProjectTagsBlogPostContentfulId = 1085,
  ProjectTagsBlogPostCreated = 1086,
  ProjectTagsBlogPostCreatedAt = 1087,
  ProjectTagsBlogPostExcerpt = 1088,
  ProjectTagsBlogPostId = 1089,
  ProjectTagsBlogPostNodeLocale = 1090,
  ProjectTagsBlogPostSlug = 1091,
  ProjectTagsBlogPostSpaceId = 1092,
  ProjectTagsBlogPostTags = 1093,
  ProjectTagsBlogPostTitle = 1094,
  ProjectTagsBlogPostUpdated = 1095,
  ProjectTagsBlogPostUpdatedAt = 1096,
  ProjectTagsChildren = 1097,
  ProjectTagsChildrenChildren = 1098,
  ProjectTagsChildrenId = 1099,
  ProjectTagsContentfulId = 1100,
  ProjectTagsCreatedAt = 1101,
  ProjectTagsId = 1102,
  ProjectTagsInternalContent = 1103,
  ProjectTagsInternalContentDigest = 1104,
  ProjectTagsInternalDescription = 1105,
  ProjectTagsInternalFieldOwners = 1106,
  ProjectTagsInternalIgnoreType = 1107,
  ProjectTagsInternalMediaType = 1108,
  ProjectTagsInternalOwner = 1109,
  ProjectTagsInternalType = 1110,
  ProjectTagsLevel = 1111,
  ProjectTagsName = 1112,
  ProjectTagsNodeLocale = 1113,
  ProjectTagsOss = 1114,
  ProjectTagsOssChildren = 1115,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1116,
  ProjectTagsOssContentfulId = 1117,
  ProjectTagsOssCreatedAt = 1118,
  ProjectTagsOssHref = 1119,
  ProjectTagsOssId = 1120,
  ProjectTagsOssName = 1121,
  ProjectTagsOssNodeLocale = 1122,
  ProjectTagsOssSpaceId = 1123,
  ProjectTagsOssStartDate = 1124,
  ProjectTagsOssSubName = 1125,
  ProjectTagsOssTags = 1126,
  ProjectTagsOssUpdatedAt = 1127,
  ProjectTagsParentChildren = 1128,
  ProjectTagsParentId = 1129,
  ProjectTagsProject = 1130,
  ProjectTagsProjectChildren = 1131,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1132,
  ProjectTagsProjectContentfulId = 1133,
  ProjectTagsProjectCreatedAt = 1134,
  ProjectTagsProjectEndDate = 1135,
  ProjectTagsProjectId = 1136,
  ProjectTagsProjectName = 1137,
  ProjectTagsProjectNodeLocale = 1138,
  ProjectTagsProjectSpaceId = 1139,
  ProjectTagsProjectStartDate = 1140,
  ProjectTagsProjectSubName = 1141,
  ProjectTagsProjectTags = 1142,
  ProjectTagsProjectUpdatedAt = 1143,
  ProjectTagsSkillMap = 1144,
  ProjectTagsSkillMapChildren = 1145,
  ProjectTagsSkillMapContentfulId = 1146,
  ProjectTagsSkillMapCreatedAt = 1147,
  ProjectTagsSkillMapExpanded = 1148,
  ProjectTagsSkillMapId = 1149,
  ProjectTagsSkillMapName = 1150,
  ProjectTagsSkillMapNodeLocale = 1151,
  ProjectTagsSkillMapSkills = 1152,
  ProjectTagsSkillMapSortKey = 1153,
  ProjectTagsSkillMapSpaceId = 1154,
  ProjectTagsSkillMapUpdatedAt = 1155,
  ProjectTagsSpaceId = 1156,
  ProjectTagsSysRevision = 1157,
  ProjectTagsSysType = 1158,
  ProjectTagsUpdatedAt = 1159,
  ProjectUpdatedAt = 1160,
  SkillMap = 1161,
  SkillMapChildren = 1162,
  SkillMapChildrenChildren = 1163,
  SkillMapChildrenChildrenChildren = 1164,
  SkillMapChildrenChildrenId = 1165,
  SkillMapChildrenId = 1166,
  SkillMapChildrenInternalContent = 1167,
  SkillMapChildrenInternalContentDigest = 1168,
  SkillMapChildrenInternalDescription = 1169,
  SkillMapChildrenInternalFieldOwners = 1170,
  SkillMapChildrenInternalIgnoreType = 1171,
  SkillMapChildrenInternalMediaType = 1172,
  SkillMapChildrenInternalOwner = 1173,
  SkillMapChildrenInternalType = 1174,
  SkillMapChildrenParentChildren = 1175,
  SkillMapChildrenParentId = 1176,
  SkillMapContentfulId = 1177,
  SkillMapCreatedAt = 1178,
  SkillMapExpanded = 1179,
  SkillMapId = 1180,
  SkillMapInternalContent = 1181,
  SkillMapInternalContentDigest = 1182,
  SkillMapInternalDescription = 1183,
  SkillMapInternalFieldOwners = 1184,
  SkillMapInternalIgnoreType = 1185,
  SkillMapInternalMediaType = 1186,
  SkillMapInternalOwner = 1187,
  SkillMapInternalType = 1188,
  SkillMapName = 1189,
  SkillMapNodeLocale = 1190,
  SkillMapParentChildren = 1191,
  SkillMapParentChildrenChildren = 1192,
  SkillMapParentChildrenId = 1193,
  SkillMapParentId = 1194,
  SkillMapParentInternalContent = 1195,
  SkillMapParentInternalContentDigest = 1196,
  SkillMapParentInternalDescription = 1197,
  SkillMapParentInternalFieldOwners = 1198,
  SkillMapParentInternalIgnoreType = 1199,
  SkillMapParentInternalMediaType = 1200,
  SkillMapParentInternalOwner = 1201,
  SkillMapParentInternalType = 1202,
  SkillMapParentParentChildren = 1203,
  SkillMapParentParentId = 1204,
  SkillMapSkills = 1205,
  SkillMapSkillsBlogPost = 1206,
  SkillMapSkillsBlogPostChildren = 1207,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1208,
  SkillMapSkillsBlogPostContentfulId = 1209,
  SkillMapSkillsBlogPostCreated = 1210,
  SkillMapSkillsBlogPostCreatedAt = 1211,
  SkillMapSkillsBlogPostExcerpt = 1212,
  SkillMapSkillsBlogPostId = 1213,
  SkillMapSkillsBlogPostNodeLocale = 1214,
  SkillMapSkillsBlogPostSlug = 1215,
  SkillMapSkillsBlogPostSpaceId = 1216,
  SkillMapSkillsBlogPostTags = 1217,
  SkillMapSkillsBlogPostTitle = 1218,
  SkillMapSkillsBlogPostUpdated = 1219,
  SkillMapSkillsBlogPostUpdatedAt = 1220,
  SkillMapSkillsChildren = 1221,
  SkillMapSkillsChildrenChildren = 1222,
  SkillMapSkillsChildrenId = 1223,
  SkillMapSkillsContentfulId = 1224,
  SkillMapSkillsCreatedAt = 1225,
  SkillMapSkillsId = 1226,
  SkillMapSkillsInternalContent = 1227,
  SkillMapSkillsInternalContentDigest = 1228,
  SkillMapSkillsInternalDescription = 1229,
  SkillMapSkillsInternalFieldOwners = 1230,
  SkillMapSkillsInternalIgnoreType = 1231,
  SkillMapSkillsInternalMediaType = 1232,
  SkillMapSkillsInternalOwner = 1233,
  SkillMapSkillsInternalType = 1234,
  SkillMapSkillsLevel = 1235,
  SkillMapSkillsName = 1236,
  SkillMapSkillsNodeLocale = 1237,
  SkillMapSkillsOss = 1238,
  SkillMapSkillsOssChildren = 1239,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 1240,
  SkillMapSkillsOssContentfulId = 1241,
  SkillMapSkillsOssCreatedAt = 1242,
  SkillMapSkillsOssHref = 1243,
  SkillMapSkillsOssId = 1244,
  SkillMapSkillsOssName = 1245,
  SkillMapSkillsOssNodeLocale = 1246,
  SkillMapSkillsOssSpaceId = 1247,
  SkillMapSkillsOssStartDate = 1248,
  SkillMapSkillsOssSubName = 1249,
  SkillMapSkillsOssTags = 1250,
  SkillMapSkillsOssUpdatedAt = 1251,
  SkillMapSkillsParentChildren = 1252,
  SkillMapSkillsParentId = 1253,
  SkillMapSkillsProject = 1254,
  SkillMapSkillsProjectChildren = 1255,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 1256,
  SkillMapSkillsProjectContentfulId = 1257,
  SkillMapSkillsProjectCreatedAt = 1258,
  SkillMapSkillsProjectEndDate = 1259,
  SkillMapSkillsProjectId = 1260,
  SkillMapSkillsProjectName = 1261,
  SkillMapSkillsProjectNodeLocale = 1262,
  SkillMapSkillsProjectSpaceId = 1263,
  SkillMapSkillsProjectStartDate = 1264,
  SkillMapSkillsProjectSubName = 1265,
  SkillMapSkillsProjectTags = 1266,
  SkillMapSkillsProjectUpdatedAt = 1267,
  SkillMapSkillsSkillMap = 1268,
  SkillMapSkillsSkillMapChildren = 1269,
  SkillMapSkillsSkillMapContentfulId = 1270,
  SkillMapSkillsSkillMapCreatedAt = 1271,
  SkillMapSkillsSkillMapExpanded = 1272,
  SkillMapSkillsSkillMapId = 1273,
  SkillMapSkillsSkillMapName = 1274,
  SkillMapSkillsSkillMapNodeLocale = 1275,
  SkillMapSkillsSkillMapSkills = 1276,
  SkillMapSkillsSkillMapSortKey = 1277,
  SkillMapSkillsSkillMapSpaceId = 1278,
  SkillMapSkillsSkillMapUpdatedAt = 1279,
  SkillMapSkillsSpaceId = 1280,
  SkillMapSkillsSysRevision = 1281,
  SkillMapSkillsSysType = 1282,
  SkillMapSkillsUpdatedAt = 1283,
  SkillMapSortKey = 1284,
  SkillMapSpaceId = 1285,
  SkillMapSysRevision = 1286,
  SkillMapSysType = 1287,
  SkillMapUpdatedAt = 1288,
  SpaceId = 1289,
  SysContentTypeSysId = 1290,
  SysContentTypeSysLinkType = 1291,
  SysContentTypeSysType = 1292,
  SysRevision = 1293,
  SysType = 1294,
  UpdatedAt = 1295
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
  Uid = 345
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
  allContentfulCategory: ContentfulCategoryConnection;
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
  contentfulCategory: Maybe<ContentfulCategory>;
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


export type QueryAllContentfulCategoryArgs = {
  filter: InputMaybe<ContentfulCategoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulCategorySortInput>;
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
  file: InputMaybe<ContentfulAssetFileFilterInput>;
  filename: InputMaybe<StringQueryOperatorInput>;
  filesize: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
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
  category: InputMaybe<ContentfulCategoryFilterInput>;
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


export type QueryContentfulCategoryArgs = {
  blog_post: InputMaybe<ContentfulBlogPostFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulCategorySysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
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
  aspectRatio: InputMaybe<Scalars['Float']>;
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
    & { content: Maybe<{ childMdx: Maybe<Pick<Mdx, 'body'>> }>, category: Maybe<Pick<ContentfulCategory, 'name'>>, tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>>, thumbnail: Maybe<(
      Pick<ContentfulAsset, 'title'>
      & { file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
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
          & { tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>>, category: Maybe<Pick<ContentfulCategory, 'name'>>, thumbnail: Maybe<Pick<ContentfulAsset, 'title' | 'gatsbyImageData'>> }
        ) }> }> }, postsLite: { edges: Array<{ node: (
        Pick<ContentfulBlogPost, 'title' | 'slug' | 'created'>
        & { thumbnail: Maybe<{ file: Maybe<Pick<ContentfulAssetFile, 'url'>> }> }
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
          Pick<ContentfulAsset, 'title' | 'gatsbyImageData'>
          & { file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
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
