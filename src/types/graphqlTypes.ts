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
  Date: any;
  GatsbyImageData: any;
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
  gatsbyImage: Maybe<Scalars['GatsbyImageData']>;
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
  size: Maybe<Scalars['Int']>;
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
  quality: InputMaybe<Scalars['Int']>;
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
  Size = 107,
  SpaceId = 108,
  SysRevision = 109,
  SysType = 110,
  Title = 111,
  UpdatedAt = 112,
  Url = 113,
  Width = 114
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
  gatsbyImage: InputMaybe<GatsbyImageDataQueryOperatorInput>;
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
  size: InputMaybe<IntQueryOperatorInput>;
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
  CategoryBlogPostTagsSkillGrpup = 58,
  CategoryBlogPostTagsSkillMap = 59,
  CategoryBlogPostTagsSpaceId = 60,
  CategoryBlogPostTagsUpdatedAt = 61,
  CategoryBlogPostThumbnailChildren = 62,
  CategoryBlogPostThumbnailContentfulId = 63,
  CategoryBlogPostThumbnailCreatedAt = 64,
  CategoryBlogPostThumbnailDescription = 65,
  CategoryBlogPostThumbnailFilename = 66,
  CategoryBlogPostThumbnailFilesize = 67,
  CategoryBlogPostThumbnailGatsbyImage = 68,
  CategoryBlogPostThumbnailGatsbyImageData = 69,
  CategoryBlogPostThumbnailHeight = 70,
  CategoryBlogPostThumbnailId = 71,
  CategoryBlogPostThumbnailMimeType = 72,
  CategoryBlogPostThumbnailNodeLocale = 73,
  CategoryBlogPostThumbnailPlaceholderUrl = 74,
  CategoryBlogPostThumbnailPublicUrl = 75,
  CategoryBlogPostThumbnailSize = 76,
  CategoryBlogPostThumbnailSpaceId = 77,
  CategoryBlogPostThumbnailTitle = 78,
  CategoryBlogPostThumbnailUpdatedAt = 79,
  CategoryBlogPostThumbnailUrl = 80,
  CategoryBlogPostThumbnailWidth = 81,
  CategoryBlogPostTitle = 82,
  CategoryBlogPostUpdated = 83,
  CategoryBlogPostUpdatedAt = 84,
  CategoryChildren = 85,
  CategoryChildrenChildren = 86,
  CategoryChildrenChildrenChildren = 87,
  CategoryChildrenChildrenId = 88,
  CategoryChildrenId = 89,
  CategoryChildrenInternalContent = 90,
  CategoryChildrenInternalContentDigest = 91,
  CategoryChildrenInternalDescription = 92,
  CategoryChildrenInternalFieldOwners = 93,
  CategoryChildrenInternalIgnoreType = 94,
  CategoryChildrenInternalMediaType = 95,
  CategoryChildrenInternalOwner = 96,
  CategoryChildrenInternalType = 97,
  CategoryChildrenParentChildren = 98,
  CategoryChildrenParentId = 99,
  CategoryContentfulId = 100,
  CategoryCreatedAt = 101,
  CategoryId = 102,
  CategoryInternalContent = 103,
  CategoryInternalContentDigest = 104,
  CategoryInternalDescription = 105,
  CategoryInternalFieldOwners = 106,
  CategoryInternalIgnoreType = 107,
  CategoryInternalMediaType = 108,
  CategoryInternalOwner = 109,
  CategoryInternalType = 110,
  CategoryName = 111,
  CategoryNodeLocale = 112,
  CategoryParentChildren = 113,
  CategoryParentChildrenChildren = 114,
  CategoryParentChildrenId = 115,
  CategoryParentId = 116,
  CategoryParentInternalContent = 117,
  CategoryParentInternalContentDigest = 118,
  CategoryParentInternalDescription = 119,
  CategoryParentInternalFieldOwners = 120,
  CategoryParentInternalIgnoreType = 121,
  CategoryParentInternalMediaType = 122,
  CategoryParentInternalOwner = 123,
  CategoryParentInternalType = 124,
  CategoryParentParentChildren = 125,
  CategoryParentParentId = 126,
  CategorySortKey = 127,
  CategorySpaceId = 128,
  CategorySysRevision = 129,
  CategorySysType = 130,
  CategoryUpdatedAt = 131,
  ChildContentfulBlogPostContentTextNodeChildMdxBody = 132,
  ChildContentfulBlogPostContentTextNodeChildMdxChildren = 133,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 134,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenId = 135,
  ChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 136,
  ChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 137,
  ChildContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 138,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadings = 139,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 140,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 141,
  ChildContentfulBlogPostContentTextNodeChildMdxHtml = 142,
  ChildContentfulBlogPostContentTextNodeChildMdxId = 143,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContent = 144,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 145,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalDescription = 146,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 147,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 148,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 149,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalOwner = 150,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalType = 151,
  ChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 152,
  ChildContentfulBlogPostContentTextNodeChildMdxParentChildren = 153,
  ChildContentfulBlogPostContentTextNodeChildMdxParentId = 154,
  ChildContentfulBlogPostContentTextNodeChildMdxRawBody = 155,
  ChildContentfulBlogPostContentTextNodeChildMdxSlug = 156,
  ChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 157,
  ChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 158,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 159,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 160,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountWords = 161,
  ChildContentfulBlogPostContentTextNodeChildren = 162,
  ChildContentfulBlogPostContentTextNodeChildrenMdx = 163,
  ChildContentfulBlogPostContentTextNodeChildrenMdxBody = 164,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 165,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 166,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 167,
  ChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 168,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 169,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 170,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 171,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 172,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 173,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 174,
  ChildContentfulBlogPostContentTextNodeChildrenMdxId = 175,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 176,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 177,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 178,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 179,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 180,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 181,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 182,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalType = 183,
  ChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 184,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 185,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentId = 186,
  ChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 187,
  ChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 188,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 189,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 190,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 191,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 192,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 193,
  ChildContentfulBlogPostContentTextNodeChildrenChildren = 194,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenChildren = 195,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenId = 196,
  ChildContentfulBlogPostContentTextNodeChildrenId = 197,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContent = 198,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 199,
  ChildContentfulBlogPostContentTextNodeChildrenInternalDescription = 200,
  ChildContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 201,
  ChildContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 202,
  ChildContentfulBlogPostContentTextNodeChildrenInternalMediaType = 203,
  ChildContentfulBlogPostContentTextNodeChildrenInternalOwner = 204,
  ChildContentfulBlogPostContentTextNodeChildrenInternalType = 205,
  ChildContentfulBlogPostContentTextNodeChildrenParentChildren = 206,
  ChildContentfulBlogPostContentTextNodeChildrenParentId = 207,
  ChildContentfulBlogPostContentTextNodeContent = 208,
  ChildContentfulBlogPostContentTextNodeId = 209,
  ChildContentfulBlogPostContentTextNodeInternalContent = 210,
  ChildContentfulBlogPostContentTextNodeInternalContentDigest = 211,
  ChildContentfulBlogPostContentTextNodeInternalDescription = 212,
  ChildContentfulBlogPostContentTextNodeInternalFieldOwners = 213,
  ChildContentfulBlogPostContentTextNodeInternalIgnoreType = 214,
  ChildContentfulBlogPostContentTextNodeInternalMediaType = 215,
  ChildContentfulBlogPostContentTextNodeInternalOwner = 216,
  ChildContentfulBlogPostContentTextNodeInternalType = 217,
  ChildContentfulBlogPostContentTextNodeParentChildren = 218,
  ChildContentfulBlogPostContentTextNodeParentChildrenChildren = 219,
  ChildContentfulBlogPostContentTextNodeParentChildrenId = 220,
  ChildContentfulBlogPostContentTextNodeParentId = 221,
  ChildContentfulBlogPostContentTextNodeParentInternalContent = 222,
  ChildContentfulBlogPostContentTextNodeParentInternalContentDigest = 223,
  ChildContentfulBlogPostContentTextNodeParentInternalDescription = 224,
  ChildContentfulBlogPostContentTextNodeParentInternalFieldOwners = 225,
  ChildContentfulBlogPostContentTextNodeParentInternalIgnoreType = 226,
  ChildContentfulBlogPostContentTextNodeParentInternalMediaType = 227,
  ChildContentfulBlogPostContentTextNodeParentInternalOwner = 228,
  ChildContentfulBlogPostContentTextNodeParentInternalType = 229,
  ChildContentfulBlogPostContentTextNodeParentParentChildren = 230,
  ChildContentfulBlogPostContentTextNodeParentParentId = 231,
  ChildContentfulBlogPostContentTextNodeSysType = 232,
  Children = 233,
  ChildrenContentfulBlogPostContentTextNode = 234,
  ChildrenContentfulBlogPostContentTextNodeChildMdxBody = 235,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 236,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 237,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenId = 238,
  ChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 239,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 240,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 241,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 242,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 243,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 244,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 245,
  ChildrenContentfulBlogPostContentTextNodeChildMdxId = 246,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContent = 247,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 248,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalDescription = 249,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 250,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 251,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 252,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalOwner = 253,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalType = 254,
  ChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 255,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentChildren = 256,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentId = 257,
  ChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 258,
  ChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 259,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 260,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 261,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 262,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 263,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountWords = 264,
  ChildrenContentfulBlogPostContentTextNodeChildren = 265,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdx = 266,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 267,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 268,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 269,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 270,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 271,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 272,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 273,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 274,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 275,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 276,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 277,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 278,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 279,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 280,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 281,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 282,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 283,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 284,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 285,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalType = 286,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 287,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 288,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentId = 289,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 290,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 291,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 292,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 293,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 294,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 295,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 296,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildren = 297,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenChildren = 298,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenId = 299,
  ChildrenContentfulBlogPostContentTextNodeChildrenId = 300,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContent = 301,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 302,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalDescription = 303,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 304,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 305,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalMediaType = 306,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalOwner = 307,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalType = 308,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentChildren = 309,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentId = 310,
  ChildrenContentfulBlogPostContentTextNodeContent = 311,
  ChildrenContentfulBlogPostContentTextNodeId = 312,
  ChildrenContentfulBlogPostContentTextNodeInternalContent = 313,
  ChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 314,
  ChildrenContentfulBlogPostContentTextNodeInternalDescription = 315,
  ChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 316,
  ChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 317,
  ChildrenContentfulBlogPostContentTextNodeInternalMediaType = 318,
  ChildrenContentfulBlogPostContentTextNodeInternalOwner = 319,
  ChildrenContentfulBlogPostContentTextNodeInternalType = 320,
  ChildrenContentfulBlogPostContentTextNodeParentChildren = 321,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenChildren = 322,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenId = 323,
  ChildrenContentfulBlogPostContentTextNodeParentId = 324,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContent = 325,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentDigest = 326,
  ChildrenContentfulBlogPostContentTextNodeParentInternalDescription = 327,
  ChildrenContentfulBlogPostContentTextNodeParentInternalFieldOwners = 328,
  ChildrenContentfulBlogPostContentTextNodeParentInternalIgnoreType = 329,
  ChildrenContentfulBlogPostContentTextNodeParentInternalMediaType = 330,
  ChildrenContentfulBlogPostContentTextNodeParentInternalOwner = 331,
  ChildrenContentfulBlogPostContentTextNodeParentInternalType = 332,
  ChildrenContentfulBlogPostContentTextNodeParentParentChildren = 333,
  ChildrenContentfulBlogPostContentTextNodeParentParentId = 334,
  ChildrenContentfulBlogPostContentTextNodeSysType = 335,
  ChildrenChildren = 336,
  ChildrenChildrenChildren = 337,
  ChildrenChildrenChildrenChildren = 338,
  ChildrenChildrenChildrenId = 339,
  ChildrenChildrenId = 340,
  ChildrenChildrenInternalContent = 341,
  ChildrenChildrenInternalContentDigest = 342,
  ChildrenChildrenInternalDescription = 343,
  ChildrenChildrenInternalFieldOwners = 344,
  ChildrenChildrenInternalIgnoreType = 345,
  ChildrenChildrenInternalMediaType = 346,
  ChildrenChildrenInternalOwner = 347,
  ChildrenChildrenInternalType = 348,
  ChildrenChildrenParentChildren = 349,
  ChildrenChildrenParentId = 350,
  ChildrenId = 351,
  ChildrenInternalContent = 352,
  ChildrenInternalContentDigest = 353,
  ChildrenInternalDescription = 354,
  ChildrenInternalFieldOwners = 355,
  ChildrenInternalIgnoreType = 356,
  ChildrenInternalMediaType = 357,
  ChildrenInternalOwner = 358,
  ChildrenInternalType = 359,
  ChildrenParentChildren = 360,
  ChildrenParentChildrenChildren = 361,
  ChildrenParentChildrenId = 362,
  ChildrenParentId = 363,
  ChildrenParentInternalContent = 364,
  ChildrenParentInternalContentDigest = 365,
  ChildrenParentInternalDescription = 366,
  ChildrenParentInternalFieldOwners = 367,
  ChildrenParentInternalIgnoreType = 368,
  ChildrenParentInternalMediaType = 369,
  ChildrenParentInternalOwner = 370,
  ChildrenParentInternalType = 371,
  ChildrenParentParentChildren = 372,
  ChildrenParentParentId = 373,
  ContentChildMdxBody = 374,
  ContentChildMdxChildren = 375,
  ContentChildMdxChildrenChildren = 376,
  ContentChildMdxChildrenId = 377,
  ContentChildMdxExcerpt = 378,
  ContentChildMdxFileAbsolutePath = 379,
  ContentChildMdxFrontmatterTitle = 380,
  ContentChildMdxHeadings = 381,
  ContentChildMdxHeadingsDepth = 382,
  ContentChildMdxHeadingsValue = 383,
  ContentChildMdxHtml = 384,
  ContentChildMdxId = 385,
  ContentChildMdxInternalContent = 386,
  ContentChildMdxInternalContentDigest = 387,
  ContentChildMdxInternalDescription = 388,
  ContentChildMdxInternalFieldOwners = 389,
  ContentChildMdxInternalIgnoreType = 390,
  ContentChildMdxInternalMediaType = 391,
  ContentChildMdxInternalOwner = 392,
  ContentChildMdxInternalType = 393,
  ContentChildMdxMdxAst = 394,
  ContentChildMdxParentChildren = 395,
  ContentChildMdxParentId = 396,
  ContentChildMdxRawBody = 397,
  ContentChildMdxSlug = 398,
  ContentChildMdxTableOfContents = 399,
  ContentChildMdxTimeToRead = 400,
  ContentChildMdxWordCountParagraphs = 401,
  ContentChildMdxWordCountSentences = 402,
  ContentChildMdxWordCountWords = 403,
  ContentChildren = 404,
  ContentChildrenMdx = 405,
  ContentChildrenMdxBody = 406,
  ContentChildrenMdxChildren = 407,
  ContentChildrenMdxChildrenChildren = 408,
  ContentChildrenMdxChildrenId = 409,
  ContentChildrenMdxExcerpt = 410,
  ContentChildrenMdxFileAbsolutePath = 411,
  ContentChildrenMdxFrontmatterTitle = 412,
  ContentChildrenMdxHeadings = 413,
  ContentChildrenMdxHeadingsDepth = 414,
  ContentChildrenMdxHeadingsValue = 415,
  ContentChildrenMdxHtml = 416,
  ContentChildrenMdxId = 417,
  ContentChildrenMdxInternalContent = 418,
  ContentChildrenMdxInternalContentDigest = 419,
  ContentChildrenMdxInternalDescription = 420,
  ContentChildrenMdxInternalFieldOwners = 421,
  ContentChildrenMdxInternalIgnoreType = 422,
  ContentChildrenMdxInternalMediaType = 423,
  ContentChildrenMdxInternalOwner = 424,
  ContentChildrenMdxInternalType = 425,
  ContentChildrenMdxMdxAst = 426,
  ContentChildrenMdxParentChildren = 427,
  ContentChildrenMdxParentId = 428,
  ContentChildrenMdxRawBody = 429,
  ContentChildrenMdxSlug = 430,
  ContentChildrenMdxTableOfContents = 431,
  ContentChildrenMdxTimeToRead = 432,
  ContentChildrenMdxWordCountParagraphs = 433,
  ContentChildrenMdxWordCountSentences = 434,
  ContentChildrenMdxWordCountWords = 435,
  ContentChildrenChildren = 436,
  ContentChildrenChildrenChildren = 437,
  ContentChildrenChildrenId = 438,
  ContentChildrenId = 439,
  ContentChildrenInternalContent = 440,
  ContentChildrenInternalContentDigest = 441,
  ContentChildrenInternalDescription = 442,
  ContentChildrenInternalFieldOwners = 443,
  ContentChildrenInternalIgnoreType = 444,
  ContentChildrenInternalMediaType = 445,
  ContentChildrenInternalOwner = 446,
  ContentChildrenInternalType = 447,
  ContentChildrenParentChildren = 448,
  ContentChildrenParentId = 449,
  ContentContent = 450,
  ContentId = 451,
  ContentInternalContent = 452,
  ContentInternalContentDigest = 453,
  ContentInternalDescription = 454,
  ContentInternalFieldOwners = 455,
  ContentInternalIgnoreType = 456,
  ContentInternalMediaType = 457,
  ContentInternalOwner = 458,
  ContentInternalType = 459,
  ContentParentChildren = 460,
  ContentParentChildrenChildren = 461,
  ContentParentChildrenId = 462,
  ContentParentId = 463,
  ContentParentInternalContent = 464,
  ContentParentInternalContentDigest = 465,
  ContentParentInternalDescription = 466,
  ContentParentInternalFieldOwners = 467,
  ContentParentInternalIgnoreType = 468,
  ContentParentInternalMediaType = 469,
  ContentParentInternalOwner = 470,
  ContentParentInternalType = 471,
  ContentParentParentChildren = 472,
  ContentParentParentId = 473,
  ContentSysType = 474,
  ContentfulId = 475,
  Created = 476,
  CreatedAt = 477,
  Excerpt = 478,
  Id = 479,
  InternalContent = 480,
  InternalContentDigest = 481,
  InternalDescription = 482,
  InternalFieldOwners = 483,
  InternalIgnoreType = 484,
  InternalMediaType = 485,
  InternalOwner = 486,
  InternalType = 487,
  NodeLocale = 488,
  ParentChildren = 489,
  ParentChildrenChildren = 490,
  ParentChildrenChildrenChildren = 491,
  ParentChildrenChildrenId = 492,
  ParentChildrenId = 493,
  ParentChildrenInternalContent = 494,
  ParentChildrenInternalContentDigest = 495,
  ParentChildrenInternalDescription = 496,
  ParentChildrenInternalFieldOwners = 497,
  ParentChildrenInternalIgnoreType = 498,
  ParentChildrenInternalMediaType = 499,
  ParentChildrenInternalOwner = 500,
  ParentChildrenInternalType = 501,
  ParentChildrenParentChildren = 502,
  ParentChildrenParentId = 503,
  ParentId = 504,
  ParentInternalContent = 505,
  ParentInternalContentDigest = 506,
  ParentInternalDescription = 507,
  ParentInternalFieldOwners = 508,
  ParentInternalIgnoreType = 509,
  ParentInternalMediaType = 510,
  ParentInternalOwner = 511,
  ParentInternalType = 512,
  ParentParentChildren = 513,
  ParentParentChildrenChildren = 514,
  ParentParentChildrenId = 515,
  ParentParentId = 516,
  ParentParentInternalContent = 517,
  ParentParentInternalContentDigest = 518,
  ParentParentInternalDescription = 519,
  ParentParentInternalFieldOwners = 520,
  ParentParentInternalIgnoreType = 521,
  ParentParentInternalMediaType = 522,
  ParentParentInternalOwner = 523,
  ParentParentInternalType = 524,
  ParentParentParentChildren = 525,
  ParentParentParentId = 526,
  Slug = 527,
  SpaceId = 528,
  SysContentTypeSysId = 529,
  SysContentTypeSysLinkType = 530,
  SysContentTypeSysType = 531,
  SysRevision = 532,
  SysType = 533,
  Tags = 534,
  TagsBlogPost = 535,
  TagsBlogPostCategoryBlogPost = 536,
  TagsBlogPostCategoryChildren = 537,
  TagsBlogPostCategoryContentfulId = 538,
  TagsBlogPostCategoryCreatedAt = 539,
  TagsBlogPostCategoryId = 540,
  TagsBlogPostCategoryName = 541,
  TagsBlogPostCategoryNodeLocale = 542,
  TagsBlogPostCategorySortKey = 543,
  TagsBlogPostCategorySpaceId = 544,
  TagsBlogPostCategoryUpdatedAt = 545,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 546,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 547,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 548,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 549,
  TagsBlogPostChildren = 550,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 551,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 552,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 553,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 554,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 555,
  TagsBlogPostChildrenChildren = 556,
  TagsBlogPostChildrenId = 557,
  TagsBlogPostContentChildren = 558,
  TagsBlogPostContentChildrenMdx = 559,
  TagsBlogPostContentContent = 560,
  TagsBlogPostContentId = 561,
  TagsBlogPostContentfulId = 562,
  TagsBlogPostCreated = 563,
  TagsBlogPostCreatedAt = 564,
  TagsBlogPostExcerpt = 565,
  TagsBlogPostId = 566,
  TagsBlogPostInternalContent = 567,
  TagsBlogPostInternalContentDigest = 568,
  TagsBlogPostInternalDescription = 569,
  TagsBlogPostInternalFieldOwners = 570,
  TagsBlogPostInternalIgnoreType = 571,
  TagsBlogPostInternalMediaType = 572,
  TagsBlogPostInternalOwner = 573,
  TagsBlogPostInternalType = 574,
  TagsBlogPostNodeLocale = 575,
  TagsBlogPostParentChildren = 576,
  TagsBlogPostParentId = 577,
  TagsBlogPostSlug = 578,
  TagsBlogPostSpaceId = 579,
  TagsBlogPostSysRevision = 580,
  TagsBlogPostSysType = 581,
  TagsBlogPostTags = 582,
  TagsBlogPostTagsBlogPost = 583,
  TagsBlogPostTagsChildren = 584,
  TagsBlogPostTagsContentfulId = 585,
  TagsBlogPostTagsCreatedAt = 586,
  TagsBlogPostTagsId = 587,
  TagsBlogPostTagsLevel = 588,
  TagsBlogPostTagsName = 589,
  TagsBlogPostTagsNodeLocale = 590,
  TagsBlogPostTagsOss = 591,
  TagsBlogPostTagsProject = 592,
  TagsBlogPostTagsSkillGrpup = 593,
  TagsBlogPostTagsSkillMap = 594,
  TagsBlogPostTagsSpaceId = 595,
  TagsBlogPostTagsUpdatedAt = 596,
  TagsBlogPostThumbnailChildren = 597,
  TagsBlogPostThumbnailContentfulId = 598,
  TagsBlogPostThumbnailCreatedAt = 599,
  TagsBlogPostThumbnailDescription = 600,
  TagsBlogPostThumbnailFilename = 601,
  TagsBlogPostThumbnailFilesize = 602,
  TagsBlogPostThumbnailGatsbyImage = 603,
  TagsBlogPostThumbnailGatsbyImageData = 604,
  TagsBlogPostThumbnailHeight = 605,
  TagsBlogPostThumbnailId = 606,
  TagsBlogPostThumbnailMimeType = 607,
  TagsBlogPostThumbnailNodeLocale = 608,
  TagsBlogPostThumbnailPlaceholderUrl = 609,
  TagsBlogPostThumbnailPublicUrl = 610,
  TagsBlogPostThumbnailSize = 611,
  TagsBlogPostThumbnailSpaceId = 612,
  TagsBlogPostThumbnailTitle = 613,
  TagsBlogPostThumbnailUpdatedAt = 614,
  TagsBlogPostThumbnailUrl = 615,
  TagsBlogPostThumbnailWidth = 616,
  TagsBlogPostTitle = 617,
  TagsBlogPostUpdated = 618,
  TagsBlogPostUpdatedAt = 619,
  TagsChildren = 620,
  TagsChildrenChildren = 621,
  TagsChildrenChildrenChildren = 622,
  TagsChildrenChildrenId = 623,
  TagsChildrenId = 624,
  TagsChildrenInternalContent = 625,
  TagsChildrenInternalContentDigest = 626,
  TagsChildrenInternalDescription = 627,
  TagsChildrenInternalFieldOwners = 628,
  TagsChildrenInternalIgnoreType = 629,
  TagsChildrenInternalMediaType = 630,
  TagsChildrenInternalOwner = 631,
  TagsChildrenInternalType = 632,
  TagsChildrenParentChildren = 633,
  TagsChildrenParentId = 634,
  TagsContentfulId = 635,
  TagsCreatedAt = 636,
  TagsId = 637,
  TagsInternalContent = 638,
  TagsInternalContentDigest = 639,
  TagsInternalDescription = 640,
  TagsInternalFieldOwners = 641,
  TagsInternalIgnoreType = 642,
  TagsInternalMediaType = 643,
  TagsInternalOwner = 644,
  TagsInternalType = 645,
  TagsLevel = 646,
  TagsName = 647,
  TagsNodeLocale = 648,
  TagsOss = 649,
  TagsOssChildContentfulOssDetailTextNodeChildren = 650,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 651,
  TagsOssChildContentfulOssDetailTextNodeDetail = 652,
  TagsOssChildContentfulOssDetailTextNodeId = 653,
  TagsOssChildren = 654,
  TagsOssChildrenContentfulOssDetailTextNode = 655,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 656,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 657,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 658,
  TagsOssChildrenContentfulOssDetailTextNodeId = 659,
  TagsOssChildrenChildren = 660,
  TagsOssChildrenId = 661,
  TagsOssContentfulId = 662,
  TagsOssCreatedAt = 663,
  TagsOssDetailChildren = 664,
  TagsOssDetailChildrenMdx = 665,
  TagsOssDetailDetail = 666,
  TagsOssDetailId = 667,
  TagsOssHref = 668,
  TagsOssIconChildren = 669,
  TagsOssIconChildrenContentfulIconSvgTextNode = 670,
  TagsOssIconContact = 671,
  TagsOssIconContentfulId = 672,
  TagsOssIconCreatedAt = 673,
  TagsOssIconHistory = 674,
  TagsOssIconId = 675,
  TagsOssIconName = 676,
  TagsOssIconNodeLocale = 677,
  TagsOssIconOss = 678,
  TagsOssIconProject = 679,
  TagsOssIconSpaceId = 680,
  TagsOssIconUpdatedAt = 681,
  TagsOssIconWhatICanDo = 682,
  TagsOssId = 683,
  TagsOssImageChildren = 684,
  TagsOssImageContentfulId = 685,
  TagsOssImageCreatedAt = 686,
  TagsOssImageDescription = 687,
  TagsOssImageFilename = 688,
  TagsOssImageFilesize = 689,
  TagsOssImageGatsbyImage = 690,
  TagsOssImageGatsbyImageData = 691,
  TagsOssImageHeight = 692,
  TagsOssImageId = 693,
  TagsOssImageMimeType = 694,
  TagsOssImageNodeLocale = 695,
  TagsOssImagePlaceholderUrl = 696,
  TagsOssImagePublicUrl = 697,
  TagsOssImageSize = 698,
  TagsOssImageSpaceId = 699,
  TagsOssImageTitle = 700,
  TagsOssImageUpdatedAt = 701,
  TagsOssImageUrl = 702,
  TagsOssImageWidth = 703,
  TagsOssInternalContent = 704,
  TagsOssInternalContentDigest = 705,
  TagsOssInternalDescription = 706,
  TagsOssInternalFieldOwners = 707,
  TagsOssInternalIgnoreType = 708,
  TagsOssInternalMediaType = 709,
  TagsOssInternalOwner = 710,
  TagsOssInternalType = 711,
  TagsOssName = 712,
  TagsOssNodeLocale = 713,
  TagsOssParentChildren = 714,
  TagsOssParentId = 715,
  TagsOssSpaceId = 716,
  TagsOssStartDate = 717,
  TagsOssSubName = 718,
  TagsOssSysRevision = 719,
  TagsOssSysType = 720,
  TagsOssTags = 721,
  TagsOssTagsBlogPost = 722,
  TagsOssTagsChildren = 723,
  TagsOssTagsContentfulId = 724,
  TagsOssTagsCreatedAt = 725,
  TagsOssTagsId = 726,
  TagsOssTagsLevel = 727,
  TagsOssTagsName = 728,
  TagsOssTagsNodeLocale = 729,
  TagsOssTagsOss = 730,
  TagsOssTagsProject = 731,
  TagsOssTagsSkillGrpup = 732,
  TagsOssTagsSkillMap = 733,
  TagsOssTagsSpaceId = 734,
  TagsOssTagsUpdatedAt = 735,
  TagsOssUpdatedAt = 736,
  TagsParentChildren = 737,
  TagsParentChildrenChildren = 738,
  TagsParentChildrenId = 739,
  TagsParentId = 740,
  TagsParentInternalContent = 741,
  TagsParentInternalContentDigest = 742,
  TagsParentInternalDescription = 743,
  TagsParentInternalFieldOwners = 744,
  TagsParentInternalIgnoreType = 745,
  TagsParentInternalMediaType = 746,
  TagsParentInternalOwner = 747,
  TagsParentInternalType = 748,
  TagsParentParentChildren = 749,
  TagsParentParentId = 750,
  TagsProject = 751,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 752,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 753,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 754,
  TagsProjectChildContentfulProjectDetailTextNodeId = 755,
  TagsProjectChildren = 756,
  TagsProjectChildrenContentfulProjectDetailTextNode = 757,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 758,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 759,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 760,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 761,
  TagsProjectChildrenChildren = 762,
  TagsProjectChildrenId = 763,
  TagsProjectContentfulId = 764,
  TagsProjectCreatedAt = 765,
  TagsProjectDetailChildren = 766,
  TagsProjectDetailChildrenMdx = 767,
  TagsProjectDetailDetail = 768,
  TagsProjectDetailId = 769,
  TagsProjectEndDate = 770,
  TagsProjectIconChildren = 771,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 772,
  TagsProjectIconContact = 773,
  TagsProjectIconContentfulId = 774,
  TagsProjectIconCreatedAt = 775,
  TagsProjectIconHistory = 776,
  TagsProjectIconId = 777,
  TagsProjectIconName = 778,
  TagsProjectIconNodeLocale = 779,
  TagsProjectIconOss = 780,
  TagsProjectIconProject = 781,
  TagsProjectIconSpaceId = 782,
  TagsProjectIconUpdatedAt = 783,
  TagsProjectIconWhatICanDo = 784,
  TagsProjectId = 785,
  TagsProjectInternalContent = 786,
  TagsProjectInternalContentDigest = 787,
  TagsProjectInternalDescription = 788,
  TagsProjectInternalFieldOwners = 789,
  TagsProjectInternalIgnoreType = 790,
  TagsProjectInternalMediaType = 791,
  TagsProjectInternalOwner = 792,
  TagsProjectInternalType = 793,
  TagsProjectName = 794,
  TagsProjectNodeLocale = 795,
  TagsProjectParentChildren = 796,
  TagsProjectParentId = 797,
  TagsProjectSpaceId = 798,
  TagsProjectStartDate = 799,
  TagsProjectSubName = 800,
  TagsProjectSysRevision = 801,
  TagsProjectSysType = 802,
  TagsProjectTags = 803,
  TagsProjectTagsBlogPost = 804,
  TagsProjectTagsChildren = 805,
  TagsProjectTagsContentfulId = 806,
  TagsProjectTagsCreatedAt = 807,
  TagsProjectTagsId = 808,
  TagsProjectTagsLevel = 809,
  TagsProjectTagsName = 810,
  TagsProjectTagsNodeLocale = 811,
  TagsProjectTagsOss = 812,
  TagsProjectTagsProject = 813,
  TagsProjectTagsSkillGrpup = 814,
  TagsProjectTagsSkillMap = 815,
  TagsProjectTagsSpaceId = 816,
  TagsProjectTagsUpdatedAt = 817,
  TagsProjectUpdatedAt = 818,
  TagsSkillGrpup = 819,
  TagsSkillGrpupChildren = 820,
  TagsSkillGrpupChildrenChildren = 821,
  TagsSkillGrpupChildrenId = 822,
  TagsSkillGrpupContentfulId = 823,
  TagsSkillGrpupCreatedAt = 824,
  TagsSkillGrpupId = 825,
  TagsSkillGrpupInternalContent = 826,
  TagsSkillGrpupInternalContentDigest = 827,
  TagsSkillGrpupInternalDescription = 828,
  TagsSkillGrpupInternalFieldOwners = 829,
  TagsSkillGrpupInternalIgnoreType = 830,
  TagsSkillGrpupInternalMediaType = 831,
  TagsSkillGrpupInternalOwner = 832,
  TagsSkillGrpupInternalType = 833,
  TagsSkillGrpupName = 834,
  TagsSkillGrpupNodeLocale = 835,
  TagsSkillGrpupParentChildren = 836,
  TagsSkillGrpupParentId = 837,
  TagsSkillGrpupSkillMap = 838,
  TagsSkillGrpupSkillMapChildren = 839,
  TagsSkillGrpupSkillMapContentfulId = 840,
  TagsSkillGrpupSkillMapCreatedAt = 841,
  TagsSkillGrpupSkillMapExpanded = 842,
  TagsSkillGrpupSkillMapId = 843,
  TagsSkillGrpupSkillMapName = 844,
  TagsSkillGrpupSkillMapNodeLocale = 845,
  TagsSkillGrpupSkillMapSkillGroups = 846,
  TagsSkillGrpupSkillMapSkills = 847,
  TagsSkillGrpupSkillMapSortKey = 848,
  TagsSkillGrpupSkillMapSpaceId = 849,
  TagsSkillGrpupSkillMapUpdatedAt = 850,
  TagsSkillGrpupSkills = 851,
  TagsSkillGrpupSkillsBlogPost = 852,
  TagsSkillGrpupSkillsChildren = 853,
  TagsSkillGrpupSkillsContentfulId = 854,
  TagsSkillGrpupSkillsCreatedAt = 855,
  TagsSkillGrpupSkillsId = 856,
  TagsSkillGrpupSkillsLevel = 857,
  TagsSkillGrpupSkillsName = 858,
  TagsSkillGrpupSkillsNodeLocale = 859,
  TagsSkillGrpupSkillsOss = 860,
  TagsSkillGrpupSkillsProject = 861,
  TagsSkillGrpupSkillsSkillGrpup = 862,
  TagsSkillGrpupSkillsSkillMap = 863,
  TagsSkillGrpupSkillsSpaceId = 864,
  TagsSkillGrpupSkillsUpdatedAt = 865,
  TagsSkillGrpupSpaceId = 866,
  TagsSkillGrpupSysRevision = 867,
  TagsSkillGrpupSysType = 868,
  TagsSkillGrpupUpdatedAt = 869,
  TagsSkillMap = 870,
  TagsSkillMapChildren = 871,
  TagsSkillMapChildrenChildren = 872,
  TagsSkillMapChildrenId = 873,
  TagsSkillMapContentfulId = 874,
  TagsSkillMapCreatedAt = 875,
  TagsSkillMapExpanded = 876,
  TagsSkillMapId = 877,
  TagsSkillMapInternalContent = 878,
  TagsSkillMapInternalContentDigest = 879,
  TagsSkillMapInternalDescription = 880,
  TagsSkillMapInternalFieldOwners = 881,
  TagsSkillMapInternalIgnoreType = 882,
  TagsSkillMapInternalMediaType = 883,
  TagsSkillMapInternalOwner = 884,
  TagsSkillMapInternalType = 885,
  TagsSkillMapName = 886,
  TagsSkillMapNodeLocale = 887,
  TagsSkillMapParentChildren = 888,
  TagsSkillMapParentId = 889,
  TagsSkillMapSkillGroups = 890,
  TagsSkillMapSkillGroupsChildren = 891,
  TagsSkillMapSkillGroupsContentfulId = 892,
  TagsSkillMapSkillGroupsCreatedAt = 893,
  TagsSkillMapSkillGroupsId = 894,
  TagsSkillMapSkillGroupsName = 895,
  TagsSkillMapSkillGroupsNodeLocale = 896,
  TagsSkillMapSkillGroupsSkillMap = 897,
  TagsSkillMapSkillGroupsSkills = 898,
  TagsSkillMapSkillGroupsSpaceId = 899,
  TagsSkillMapSkillGroupsUpdatedAt = 900,
  TagsSkillMapSkills = 901,
  TagsSkillMapSkillsBlogPost = 902,
  TagsSkillMapSkillsChildren = 903,
  TagsSkillMapSkillsContentfulId = 904,
  TagsSkillMapSkillsCreatedAt = 905,
  TagsSkillMapSkillsId = 906,
  TagsSkillMapSkillsLevel = 907,
  TagsSkillMapSkillsName = 908,
  TagsSkillMapSkillsNodeLocale = 909,
  TagsSkillMapSkillsOss = 910,
  TagsSkillMapSkillsProject = 911,
  TagsSkillMapSkillsSkillGrpup = 912,
  TagsSkillMapSkillsSkillMap = 913,
  TagsSkillMapSkillsSpaceId = 914,
  TagsSkillMapSkillsUpdatedAt = 915,
  TagsSkillMapSortKey = 916,
  TagsSkillMapSpaceId = 917,
  TagsSkillMapSysRevision = 918,
  TagsSkillMapSysType = 919,
  TagsSkillMapUpdatedAt = 920,
  TagsSpaceId = 921,
  TagsSysRevision = 922,
  TagsSysType = 923,
  TagsUpdatedAt = 924,
  ThumbnailChildren = 925,
  ThumbnailChildrenChildren = 926,
  ThumbnailChildrenChildrenChildren = 927,
  ThumbnailChildrenChildrenId = 928,
  ThumbnailChildrenId = 929,
  ThumbnailChildrenInternalContent = 930,
  ThumbnailChildrenInternalContentDigest = 931,
  ThumbnailChildrenInternalDescription = 932,
  ThumbnailChildrenInternalFieldOwners = 933,
  ThumbnailChildrenInternalIgnoreType = 934,
  ThumbnailChildrenInternalMediaType = 935,
  ThumbnailChildrenInternalOwner = 936,
  ThumbnailChildrenInternalType = 937,
  ThumbnailChildrenParentChildren = 938,
  ThumbnailChildrenParentId = 939,
  ThumbnailContentfulId = 940,
  ThumbnailCreatedAt = 941,
  ThumbnailDescription = 942,
  ThumbnailFileContentType = 943,
  ThumbnailFileDetailsSize = 944,
  ThumbnailFileFileName = 945,
  ThumbnailFileUrl = 946,
  ThumbnailFilename = 947,
  ThumbnailFilesize = 948,
  ThumbnailGatsbyImage = 949,
  ThumbnailGatsbyImageData = 950,
  ThumbnailHeight = 951,
  ThumbnailId = 952,
  ThumbnailInternalContent = 953,
  ThumbnailInternalContentDigest = 954,
  ThumbnailInternalDescription = 955,
  ThumbnailInternalFieldOwners = 956,
  ThumbnailInternalIgnoreType = 957,
  ThumbnailInternalMediaType = 958,
  ThumbnailInternalOwner = 959,
  ThumbnailInternalType = 960,
  ThumbnailMimeType = 961,
  ThumbnailNodeLocale = 962,
  ThumbnailParentChildren = 963,
  ThumbnailParentChildrenChildren = 964,
  ThumbnailParentChildrenId = 965,
  ThumbnailParentId = 966,
  ThumbnailParentInternalContent = 967,
  ThumbnailParentInternalContentDigest = 968,
  ThumbnailParentInternalDescription = 969,
  ThumbnailParentInternalFieldOwners = 970,
  ThumbnailParentInternalIgnoreType = 971,
  ThumbnailParentInternalMediaType = 972,
  ThumbnailParentInternalOwner = 973,
  ThumbnailParentInternalType = 974,
  ThumbnailParentParentChildren = 975,
  ThumbnailParentParentId = 976,
  ThumbnailPlaceholderUrl = 977,
  ThumbnailPublicUrl = 978,
  ThumbnailResizeHeight = 979,
  ThumbnailResizeSrc = 980,
  ThumbnailResizeWidth = 981,
  ThumbnailSize = 982,
  ThumbnailSpaceId = 983,
  ThumbnailSysRevision = 984,
  ThumbnailSysType = 985,
  ThumbnailTitle = 986,
  ThumbnailUpdatedAt = 987,
  ThumbnailUrl = 988,
  ThumbnailWidth = 989,
  Title = 990,
  Updated = 991,
  UpdatedAt = 992
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
  BlogPostTagsSkillGrpup = 273,
  BlogPostTagsSkillGrpupChildren = 274,
  BlogPostTagsSkillGrpupContentfulId = 275,
  BlogPostTagsSkillGrpupCreatedAt = 276,
  BlogPostTagsSkillGrpupId = 277,
  BlogPostTagsSkillGrpupName = 278,
  BlogPostTagsSkillGrpupNodeLocale = 279,
  BlogPostTagsSkillGrpupSkillMap = 280,
  BlogPostTagsSkillGrpupSkills = 281,
  BlogPostTagsSkillGrpupSpaceId = 282,
  BlogPostTagsSkillGrpupUpdatedAt = 283,
  BlogPostTagsSkillMap = 284,
  BlogPostTagsSkillMapChildren = 285,
  BlogPostTagsSkillMapContentfulId = 286,
  BlogPostTagsSkillMapCreatedAt = 287,
  BlogPostTagsSkillMapExpanded = 288,
  BlogPostTagsSkillMapId = 289,
  BlogPostTagsSkillMapName = 290,
  BlogPostTagsSkillMapNodeLocale = 291,
  BlogPostTagsSkillMapSkillGroups = 292,
  BlogPostTagsSkillMapSkills = 293,
  BlogPostTagsSkillMapSortKey = 294,
  BlogPostTagsSkillMapSpaceId = 295,
  BlogPostTagsSkillMapUpdatedAt = 296,
  BlogPostTagsSpaceId = 297,
  BlogPostTagsSysRevision = 298,
  BlogPostTagsSysType = 299,
  BlogPostTagsUpdatedAt = 300,
  BlogPostThumbnailChildren = 301,
  BlogPostThumbnailChildrenChildren = 302,
  BlogPostThumbnailChildrenId = 303,
  BlogPostThumbnailContentfulId = 304,
  BlogPostThumbnailCreatedAt = 305,
  BlogPostThumbnailDescription = 306,
  BlogPostThumbnailFileContentType = 307,
  BlogPostThumbnailFileFileName = 308,
  BlogPostThumbnailFileUrl = 309,
  BlogPostThumbnailFilename = 310,
  BlogPostThumbnailFilesize = 311,
  BlogPostThumbnailGatsbyImage = 312,
  BlogPostThumbnailGatsbyImageData = 313,
  BlogPostThumbnailHeight = 314,
  BlogPostThumbnailId = 315,
  BlogPostThumbnailInternalContent = 316,
  BlogPostThumbnailInternalContentDigest = 317,
  BlogPostThumbnailInternalDescription = 318,
  BlogPostThumbnailInternalFieldOwners = 319,
  BlogPostThumbnailInternalIgnoreType = 320,
  BlogPostThumbnailInternalMediaType = 321,
  BlogPostThumbnailInternalOwner = 322,
  BlogPostThumbnailInternalType = 323,
  BlogPostThumbnailMimeType = 324,
  BlogPostThumbnailNodeLocale = 325,
  BlogPostThumbnailParentChildren = 326,
  BlogPostThumbnailParentId = 327,
  BlogPostThumbnailPlaceholderUrl = 328,
  BlogPostThumbnailPublicUrl = 329,
  BlogPostThumbnailResizeHeight = 330,
  BlogPostThumbnailResizeSrc = 331,
  BlogPostThumbnailResizeWidth = 332,
  BlogPostThumbnailSize = 333,
  BlogPostThumbnailSpaceId = 334,
  BlogPostThumbnailSysRevision = 335,
  BlogPostThumbnailSysType = 336,
  BlogPostThumbnailTitle = 337,
  BlogPostThumbnailUpdatedAt = 338,
  BlogPostThumbnailUrl = 339,
  BlogPostThumbnailWidth = 340,
  BlogPostTitle = 341,
  BlogPostUpdated = 342,
  BlogPostUpdatedAt = 343,
  Children = 344,
  ChildrenChildren = 345,
  ChildrenChildrenChildren = 346,
  ChildrenChildrenChildrenChildren = 347,
  ChildrenChildrenChildrenId = 348,
  ChildrenChildrenId = 349,
  ChildrenChildrenInternalContent = 350,
  ChildrenChildrenInternalContentDigest = 351,
  ChildrenChildrenInternalDescription = 352,
  ChildrenChildrenInternalFieldOwners = 353,
  ChildrenChildrenInternalIgnoreType = 354,
  ChildrenChildrenInternalMediaType = 355,
  ChildrenChildrenInternalOwner = 356,
  ChildrenChildrenInternalType = 357,
  ChildrenChildrenParentChildren = 358,
  ChildrenChildrenParentId = 359,
  ChildrenId = 360,
  ChildrenInternalContent = 361,
  ChildrenInternalContentDigest = 362,
  ChildrenInternalDescription = 363,
  ChildrenInternalFieldOwners = 364,
  ChildrenInternalIgnoreType = 365,
  ChildrenInternalMediaType = 366,
  ChildrenInternalOwner = 367,
  ChildrenInternalType = 368,
  ChildrenParentChildren = 369,
  ChildrenParentChildrenChildren = 370,
  ChildrenParentChildrenId = 371,
  ChildrenParentId = 372,
  ChildrenParentInternalContent = 373,
  ChildrenParentInternalContentDigest = 374,
  ChildrenParentInternalDescription = 375,
  ChildrenParentInternalFieldOwners = 376,
  ChildrenParentInternalIgnoreType = 377,
  ChildrenParentInternalMediaType = 378,
  ChildrenParentInternalOwner = 379,
  ChildrenParentInternalType = 380,
  ChildrenParentParentChildren = 381,
  ChildrenParentParentId = 382,
  ContentfulId = 383,
  CreatedAt = 384,
  Id = 385,
  InternalContent = 386,
  InternalContentDigest = 387,
  InternalDescription = 388,
  InternalFieldOwners = 389,
  InternalIgnoreType = 390,
  InternalMediaType = 391,
  InternalOwner = 392,
  InternalType = 393,
  Name = 394,
  NodeLocale = 395,
  ParentChildren = 396,
  ParentChildrenChildren = 397,
  ParentChildrenChildrenChildren = 398,
  ParentChildrenChildrenId = 399,
  ParentChildrenId = 400,
  ParentChildrenInternalContent = 401,
  ParentChildrenInternalContentDigest = 402,
  ParentChildrenInternalDescription = 403,
  ParentChildrenInternalFieldOwners = 404,
  ParentChildrenInternalIgnoreType = 405,
  ParentChildrenInternalMediaType = 406,
  ParentChildrenInternalOwner = 407,
  ParentChildrenInternalType = 408,
  ParentChildrenParentChildren = 409,
  ParentChildrenParentId = 410,
  ParentId = 411,
  ParentInternalContent = 412,
  ParentInternalContentDigest = 413,
  ParentInternalDescription = 414,
  ParentInternalFieldOwners = 415,
  ParentInternalIgnoreType = 416,
  ParentInternalMediaType = 417,
  ParentInternalOwner = 418,
  ParentInternalType = 419,
  ParentParentChildren = 420,
  ParentParentChildrenChildren = 421,
  ParentParentChildrenId = 422,
  ParentParentId = 423,
  ParentParentInternalContent = 424,
  ParentParentInternalContentDigest = 425,
  ParentParentInternalDescription = 426,
  ParentParentInternalFieldOwners = 427,
  ParentParentInternalIgnoreType = 428,
  ParentParentInternalMediaType = 429,
  ParentParentInternalOwner = 430,
  ParentParentInternalType = 431,
  ParentParentParentChildren = 432,
  ParentParentParentId = 433,
  SortKey = 434,
  SpaceId = 435,
  SysContentTypeSysId = 436,
  SysContentTypeSysLinkType = 437,
  SysContentTypeSysType = 438,
  SysRevision = 439,
  SysType = 440,
  UpdatedAt = 441
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
  IconSvgDarkSize = 99,
  IconSvgDarkSpaceId = 100,
  IconSvgDarkSysRevision = 101,
  IconSvgDarkSysType = 102,
  IconSvgDarkTitle = 103,
  IconSvgDarkUpdatedAt = 104,
  IconSvgDarkUrl = 105,
  IconSvgDarkWidth = 106,
  IconSvgLightChildren = 107,
  IconSvgLightChildrenChildren = 108,
  IconSvgLightChildrenChildrenChildren = 109,
  IconSvgLightChildrenChildrenId = 110,
  IconSvgLightChildrenId = 111,
  IconSvgLightChildrenInternalContent = 112,
  IconSvgLightChildrenInternalContentDigest = 113,
  IconSvgLightChildrenInternalDescription = 114,
  IconSvgLightChildrenInternalFieldOwners = 115,
  IconSvgLightChildrenInternalIgnoreType = 116,
  IconSvgLightChildrenInternalMediaType = 117,
  IconSvgLightChildrenInternalOwner = 118,
  IconSvgLightChildrenInternalType = 119,
  IconSvgLightChildrenParentChildren = 120,
  IconSvgLightChildrenParentId = 121,
  IconSvgLightContentfulId = 122,
  IconSvgLightCreatedAt = 123,
  IconSvgLightDescription = 124,
  IconSvgLightFileContentType = 125,
  IconSvgLightFileDetailsSize = 126,
  IconSvgLightFileFileName = 127,
  IconSvgLightFileUrl = 128,
  IconSvgLightFilename = 129,
  IconSvgLightFilesize = 130,
  IconSvgLightGatsbyImage = 131,
  IconSvgLightGatsbyImageData = 132,
  IconSvgLightHeight = 133,
  IconSvgLightId = 134,
  IconSvgLightInternalContent = 135,
  IconSvgLightInternalContentDigest = 136,
  IconSvgLightInternalDescription = 137,
  IconSvgLightInternalFieldOwners = 138,
  IconSvgLightInternalIgnoreType = 139,
  IconSvgLightInternalMediaType = 140,
  IconSvgLightInternalOwner = 141,
  IconSvgLightInternalType = 142,
  IconSvgLightMimeType = 143,
  IconSvgLightNodeLocale = 144,
  IconSvgLightParentChildren = 145,
  IconSvgLightParentChildrenChildren = 146,
  IconSvgLightParentChildrenId = 147,
  IconSvgLightParentId = 148,
  IconSvgLightParentInternalContent = 149,
  IconSvgLightParentInternalContentDigest = 150,
  IconSvgLightParentInternalDescription = 151,
  IconSvgLightParentInternalFieldOwners = 152,
  IconSvgLightParentInternalIgnoreType = 153,
  IconSvgLightParentInternalMediaType = 154,
  IconSvgLightParentInternalOwner = 155,
  IconSvgLightParentInternalType = 156,
  IconSvgLightParentParentChildren = 157,
  IconSvgLightParentParentId = 158,
  IconSvgLightPlaceholderUrl = 159,
  IconSvgLightPublicUrl = 160,
  IconSvgLightResizeHeight = 161,
  IconSvgLightResizeSrc = 162,
  IconSvgLightResizeWidth = 163,
  IconSvgLightSize = 164,
  IconSvgLightSpaceId = 165,
  IconSvgLightSysRevision = 166,
  IconSvgLightSysType = 167,
  IconSvgLightTitle = 168,
  IconSvgLightUpdatedAt = 169,
  IconSvgLightUrl = 170,
  IconSvgLightWidth = 171,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 172,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 173,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 174,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 175,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 176,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 177,
  IconChildContentfulIconSvgTextNodeChildMdxId = 178,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 179,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 180,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 181,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 182,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 183,
  IconChildContentfulIconSvgTextNodeChildren = 184,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 185,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 186,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 187,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 188,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 189,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 190,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 191,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 192,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 193,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 194,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 195,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 196,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 197,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 198,
  IconChildContentfulIconSvgTextNodeChildrenId = 199,
  IconChildContentfulIconSvgTextNodeId = 200,
  IconChildContentfulIconSvgTextNodeInternalContent = 201,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 202,
  IconChildContentfulIconSvgTextNodeInternalDescription = 203,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 204,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 205,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 206,
  IconChildContentfulIconSvgTextNodeInternalOwner = 207,
  IconChildContentfulIconSvgTextNodeInternalType = 208,
  IconChildContentfulIconSvgTextNodeParentChildren = 209,
  IconChildContentfulIconSvgTextNodeParentId = 210,
  IconChildContentfulIconSvgTextNodeSvg = 211,
  IconChildContentfulIconSvgTextNodeSysType = 212,
  IconChildren = 213,
  IconChildrenContentfulIconSvgTextNode = 214,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 215,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 216,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 217,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 218,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 219,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 220,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 221,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 222,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 223,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 224,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 225,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 226,
  IconChildrenContentfulIconSvgTextNodeChildren = 227,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 228,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 229,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 230,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 231,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 232,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 233,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 234,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 235,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 236,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 237,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 238,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 239,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 240,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 241,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 242,
  IconChildrenContentfulIconSvgTextNodeId = 243,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 244,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 245,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 246,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 247,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 248,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 249,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 250,
  IconChildrenContentfulIconSvgTextNodeInternalType = 251,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 252,
  IconChildrenContentfulIconSvgTextNodeParentId = 253,
  IconChildrenContentfulIconSvgTextNodeSvg = 254,
  IconChildrenContentfulIconSvgTextNodeSysType = 255,
  IconChildrenChildren = 256,
  IconChildrenChildrenChildren = 257,
  IconChildrenChildrenId = 258,
  IconChildrenId = 259,
  IconChildrenInternalContent = 260,
  IconChildrenInternalContentDigest = 261,
  IconChildrenInternalDescription = 262,
  IconChildrenInternalFieldOwners = 263,
  IconChildrenInternalIgnoreType = 264,
  IconChildrenInternalMediaType = 265,
  IconChildrenInternalOwner = 266,
  IconChildrenInternalType = 267,
  IconChildrenParentChildren = 268,
  IconChildrenParentId = 269,
  IconContact = 270,
  IconContactChildren = 271,
  IconContactChildrenChildren = 272,
  IconContactChildrenId = 273,
  IconContactContentfulId = 274,
  IconContactCreatedAt = 275,
  IconContactHref = 276,
  IconContactIconSvgDarkChildren = 277,
  IconContactIconSvgDarkContentfulId = 278,
  IconContactIconSvgDarkCreatedAt = 279,
  IconContactIconSvgDarkDescription = 280,
  IconContactIconSvgDarkFilename = 281,
  IconContactIconSvgDarkFilesize = 282,
  IconContactIconSvgDarkGatsbyImage = 283,
  IconContactIconSvgDarkGatsbyImageData = 284,
  IconContactIconSvgDarkHeight = 285,
  IconContactIconSvgDarkId = 286,
  IconContactIconSvgDarkMimeType = 287,
  IconContactIconSvgDarkNodeLocale = 288,
  IconContactIconSvgDarkPlaceholderUrl = 289,
  IconContactIconSvgDarkPublicUrl = 290,
  IconContactIconSvgDarkSize = 291,
  IconContactIconSvgDarkSpaceId = 292,
  IconContactIconSvgDarkTitle = 293,
  IconContactIconSvgDarkUpdatedAt = 294,
  IconContactIconSvgDarkUrl = 295,
  IconContactIconSvgDarkWidth = 296,
  IconContactIconSvgLightChildren = 297,
  IconContactIconSvgLightContentfulId = 298,
  IconContactIconSvgLightCreatedAt = 299,
  IconContactIconSvgLightDescription = 300,
  IconContactIconSvgLightFilename = 301,
  IconContactIconSvgLightFilesize = 302,
  IconContactIconSvgLightGatsbyImage = 303,
  IconContactIconSvgLightGatsbyImageData = 304,
  IconContactIconSvgLightHeight = 305,
  IconContactIconSvgLightId = 306,
  IconContactIconSvgLightMimeType = 307,
  IconContactIconSvgLightNodeLocale = 308,
  IconContactIconSvgLightPlaceholderUrl = 309,
  IconContactIconSvgLightPublicUrl = 310,
  IconContactIconSvgLightSize = 311,
  IconContactIconSvgLightSpaceId = 312,
  IconContactIconSvgLightTitle = 313,
  IconContactIconSvgLightUpdatedAt = 314,
  IconContactIconSvgLightUrl = 315,
  IconContactIconSvgLightWidth = 316,
  IconContactIconChildren = 317,
  IconContactIconChildrenContentfulIconSvgTextNode = 318,
  IconContactIconContact = 319,
  IconContactIconContentfulId = 320,
  IconContactIconCreatedAt = 321,
  IconContactIconHistory = 322,
  IconContactIconId = 323,
  IconContactIconName = 324,
  IconContactIconNodeLocale = 325,
  IconContactIconOss = 326,
  IconContactIconProject = 327,
  IconContactIconSpaceId = 328,
  IconContactIconUpdatedAt = 329,
  IconContactIconWhatICanDo = 330,
  IconContactId = 331,
  IconContactInternalContent = 332,
  IconContactInternalContentDigest = 333,
  IconContactInternalDescription = 334,
  IconContactInternalFieldOwners = 335,
  IconContactInternalIgnoreType = 336,
  IconContactInternalMediaType = 337,
  IconContactInternalOwner = 338,
  IconContactInternalType = 339,
  IconContactName = 340,
  IconContactNodeLocale = 341,
  IconContactParentChildren = 342,
  IconContactParentId = 343,
  IconContactSortKey = 344,
  IconContactSpaceId = 345,
  IconContactSubName = 346,
  IconContactSysRevision = 347,
  IconContactSysType = 348,
  IconContactUpdatedAt = 349,
  IconContentfulId = 350,
  IconCreatedAt = 351,
  IconHistory = 352,
  IconHistoryChildren = 353,
  IconHistoryChildrenChildren = 354,
  IconHistoryChildrenId = 355,
  IconHistoryContentfulId = 356,
  IconHistoryCreatedAt = 357,
  IconHistoryDate = 358,
  IconHistoryIconChildren = 359,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 360,
  IconHistoryIconContact = 361,
  IconHistoryIconContentfulId = 362,
  IconHistoryIconCreatedAt = 363,
  IconHistoryIconHistory = 364,
  IconHistoryIconId = 365,
  IconHistoryIconName = 366,
  IconHistoryIconNodeLocale = 367,
  IconHistoryIconOss = 368,
  IconHistoryIconProject = 369,
  IconHistoryIconSpaceId = 370,
  IconHistoryIconUpdatedAt = 371,
  IconHistoryIconWhatICanDo = 372,
  IconHistoryId = 373,
  IconHistoryInternalContent = 374,
  IconHistoryInternalContentDigest = 375,
  IconHistoryInternalDescription = 376,
  IconHistoryInternalFieldOwners = 377,
  IconHistoryInternalIgnoreType = 378,
  IconHistoryInternalMediaType = 379,
  IconHistoryInternalOwner = 380,
  IconHistoryInternalType = 381,
  IconHistoryName = 382,
  IconHistoryNodeLocale = 383,
  IconHistoryParentChildren = 384,
  IconHistoryParentId = 385,
  IconHistorySpaceId = 386,
  IconHistorySubName = 387,
  IconHistorySysRevision = 388,
  IconHistorySysType = 389,
  IconHistoryUpdatedAt = 390,
  IconId = 391,
  IconInternalContent = 392,
  IconInternalContentDigest = 393,
  IconInternalDescription = 394,
  IconInternalFieldOwners = 395,
  IconInternalIgnoreType = 396,
  IconInternalMediaType = 397,
  IconInternalOwner = 398,
  IconInternalType = 399,
  IconName = 400,
  IconNodeLocale = 401,
  IconOss = 402,
  IconOssChildContentfulOssDetailTextNodeChildren = 403,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 404,
  IconOssChildContentfulOssDetailTextNodeDetail = 405,
  IconOssChildContentfulOssDetailTextNodeId = 406,
  IconOssChildren = 407,
  IconOssChildrenContentfulOssDetailTextNode = 408,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 409,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 410,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 411,
  IconOssChildrenContentfulOssDetailTextNodeId = 412,
  IconOssChildrenChildren = 413,
  IconOssChildrenId = 414,
  IconOssContentfulId = 415,
  IconOssCreatedAt = 416,
  IconOssDetailChildren = 417,
  IconOssDetailChildrenMdx = 418,
  IconOssDetailDetail = 419,
  IconOssDetailId = 420,
  IconOssHref = 421,
  IconOssIconChildren = 422,
  IconOssIconChildrenContentfulIconSvgTextNode = 423,
  IconOssIconContact = 424,
  IconOssIconContentfulId = 425,
  IconOssIconCreatedAt = 426,
  IconOssIconHistory = 427,
  IconOssIconId = 428,
  IconOssIconName = 429,
  IconOssIconNodeLocale = 430,
  IconOssIconOss = 431,
  IconOssIconProject = 432,
  IconOssIconSpaceId = 433,
  IconOssIconUpdatedAt = 434,
  IconOssIconWhatICanDo = 435,
  IconOssId = 436,
  IconOssImageChildren = 437,
  IconOssImageContentfulId = 438,
  IconOssImageCreatedAt = 439,
  IconOssImageDescription = 440,
  IconOssImageFilename = 441,
  IconOssImageFilesize = 442,
  IconOssImageGatsbyImage = 443,
  IconOssImageGatsbyImageData = 444,
  IconOssImageHeight = 445,
  IconOssImageId = 446,
  IconOssImageMimeType = 447,
  IconOssImageNodeLocale = 448,
  IconOssImagePlaceholderUrl = 449,
  IconOssImagePublicUrl = 450,
  IconOssImageSize = 451,
  IconOssImageSpaceId = 452,
  IconOssImageTitle = 453,
  IconOssImageUpdatedAt = 454,
  IconOssImageUrl = 455,
  IconOssImageWidth = 456,
  IconOssInternalContent = 457,
  IconOssInternalContentDigest = 458,
  IconOssInternalDescription = 459,
  IconOssInternalFieldOwners = 460,
  IconOssInternalIgnoreType = 461,
  IconOssInternalMediaType = 462,
  IconOssInternalOwner = 463,
  IconOssInternalType = 464,
  IconOssName = 465,
  IconOssNodeLocale = 466,
  IconOssParentChildren = 467,
  IconOssParentId = 468,
  IconOssSpaceId = 469,
  IconOssStartDate = 470,
  IconOssSubName = 471,
  IconOssSysRevision = 472,
  IconOssSysType = 473,
  IconOssTags = 474,
  IconOssTagsBlogPost = 475,
  IconOssTagsChildren = 476,
  IconOssTagsContentfulId = 477,
  IconOssTagsCreatedAt = 478,
  IconOssTagsId = 479,
  IconOssTagsLevel = 480,
  IconOssTagsName = 481,
  IconOssTagsNodeLocale = 482,
  IconOssTagsOss = 483,
  IconOssTagsProject = 484,
  IconOssTagsSkillGrpup = 485,
  IconOssTagsSkillMap = 486,
  IconOssTagsSpaceId = 487,
  IconOssTagsUpdatedAt = 488,
  IconOssUpdatedAt = 489,
  IconParentChildren = 490,
  IconParentChildrenChildren = 491,
  IconParentChildrenId = 492,
  IconParentId = 493,
  IconParentInternalContent = 494,
  IconParentInternalContentDigest = 495,
  IconParentInternalDescription = 496,
  IconParentInternalFieldOwners = 497,
  IconParentInternalIgnoreType = 498,
  IconParentInternalMediaType = 499,
  IconParentInternalOwner = 500,
  IconParentInternalType = 501,
  IconParentParentChildren = 502,
  IconParentParentId = 503,
  IconProject = 504,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 505,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 506,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 507,
  IconProjectChildContentfulProjectDetailTextNodeId = 508,
  IconProjectChildren = 509,
  IconProjectChildrenContentfulProjectDetailTextNode = 510,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 511,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 512,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 513,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 514,
  IconProjectChildrenChildren = 515,
  IconProjectChildrenId = 516,
  IconProjectContentfulId = 517,
  IconProjectCreatedAt = 518,
  IconProjectDetailChildren = 519,
  IconProjectDetailChildrenMdx = 520,
  IconProjectDetailDetail = 521,
  IconProjectDetailId = 522,
  IconProjectEndDate = 523,
  IconProjectIconChildren = 524,
  IconProjectIconChildrenContentfulIconSvgTextNode = 525,
  IconProjectIconContact = 526,
  IconProjectIconContentfulId = 527,
  IconProjectIconCreatedAt = 528,
  IconProjectIconHistory = 529,
  IconProjectIconId = 530,
  IconProjectIconName = 531,
  IconProjectIconNodeLocale = 532,
  IconProjectIconOss = 533,
  IconProjectIconProject = 534,
  IconProjectIconSpaceId = 535,
  IconProjectIconUpdatedAt = 536,
  IconProjectIconWhatICanDo = 537,
  IconProjectId = 538,
  IconProjectInternalContent = 539,
  IconProjectInternalContentDigest = 540,
  IconProjectInternalDescription = 541,
  IconProjectInternalFieldOwners = 542,
  IconProjectInternalIgnoreType = 543,
  IconProjectInternalMediaType = 544,
  IconProjectInternalOwner = 545,
  IconProjectInternalType = 546,
  IconProjectName = 547,
  IconProjectNodeLocale = 548,
  IconProjectParentChildren = 549,
  IconProjectParentId = 550,
  IconProjectSpaceId = 551,
  IconProjectStartDate = 552,
  IconProjectSubName = 553,
  IconProjectSysRevision = 554,
  IconProjectSysType = 555,
  IconProjectTags = 556,
  IconProjectTagsBlogPost = 557,
  IconProjectTagsChildren = 558,
  IconProjectTagsContentfulId = 559,
  IconProjectTagsCreatedAt = 560,
  IconProjectTagsId = 561,
  IconProjectTagsLevel = 562,
  IconProjectTagsName = 563,
  IconProjectTagsNodeLocale = 564,
  IconProjectTagsOss = 565,
  IconProjectTagsProject = 566,
  IconProjectTagsSkillGrpup = 567,
  IconProjectTagsSkillMap = 568,
  IconProjectTagsSpaceId = 569,
  IconProjectTagsUpdatedAt = 570,
  IconProjectUpdatedAt = 571,
  IconSpaceId = 572,
  IconSvgChildMdxBody = 573,
  IconSvgChildMdxChildren = 574,
  IconSvgChildMdxExcerpt = 575,
  IconSvgChildMdxFileAbsolutePath = 576,
  IconSvgChildMdxHeadings = 577,
  IconSvgChildMdxHtml = 578,
  IconSvgChildMdxId = 579,
  IconSvgChildMdxMdxAst = 580,
  IconSvgChildMdxRawBody = 581,
  IconSvgChildMdxSlug = 582,
  IconSvgChildMdxTableOfContents = 583,
  IconSvgChildMdxTimeToRead = 584,
  IconSvgChildren = 585,
  IconSvgChildrenMdx = 586,
  IconSvgChildrenMdxBody = 587,
  IconSvgChildrenMdxChildren = 588,
  IconSvgChildrenMdxExcerpt = 589,
  IconSvgChildrenMdxFileAbsolutePath = 590,
  IconSvgChildrenMdxHeadings = 591,
  IconSvgChildrenMdxHtml = 592,
  IconSvgChildrenMdxId = 593,
  IconSvgChildrenMdxMdxAst = 594,
  IconSvgChildrenMdxRawBody = 595,
  IconSvgChildrenMdxSlug = 596,
  IconSvgChildrenMdxTableOfContents = 597,
  IconSvgChildrenMdxTimeToRead = 598,
  IconSvgChildrenChildren = 599,
  IconSvgChildrenId = 600,
  IconSvgId = 601,
  IconSvgInternalContent = 602,
  IconSvgInternalContentDigest = 603,
  IconSvgInternalDescription = 604,
  IconSvgInternalFieldOwners = 605,
  IconSvgInternalIgnoreType = 606,
  IconSvgInternalMediaType = 607,
  IconSvgInternalOwner = 608,
  IconSvgInternalType = 609,
  IconSvgParentChildren = 610,
  IconSvgParentId = 611,
  IconSvgSvg = 612,
  IconSvgSysType = 613,
  IconSysRevision = 614,
  IconSysType = 615,
  IconUpdatedAt = 616,
  IconWhatICanDo = 617,
  IconWhatICanDoChildren = 618,
  IconWhatICanDoChildrenChildren = 619,
  IconWhatICanDoChildrenId = 620,
  IconWhatICanDoContentfulId = 621,
  IconWhatICanDoCreatedAt = 622,
  IconWhatICanDoIconChildren = 623,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 624,
  IconWhatICanDoIconContact = 625,
  IconWhatICanDoIconContentfulId = 626,
  IconWhatICanDoIconCreatedAt = 627,
  IconWhatICanDoIconHistory = 628,
  IconWhatICanDoIconId = 629,
  IconWhatICanDoIconName = 630,
  IconWhatICanDoIconNodeLocale = 631,
  IconWhatICanDoIconOss = 632,
  IconWhatICanDoIconProject = 633,
  IconWhatICanDoIconSpaceId = 634,
  IconWhatICanDoIconUpdatedAt = 635,
  IconWhatICanDoIconWhatICanDo = 636,
  IconWhatICanDoId = 637,
  IconWhatICanDoInternalContent = 638,
  IconWhatICanDoInternalContentDigest = 639,
  IconWhatICanDoInternalDescription = 640,
  IconWhatICanDoInternalFieldOwners = 641,
  IconWhatICanDoInternalIgnoreType = 642,
  IconWhatICanDoInternalMediaType = 643,
  IconWhatICanDoInternalOwner = 644,
  IconWhatICanDoInternalType = 645,
  IconWhatICanDoName = 646,
  IconWhatICanDoNodeLocale = 647,
  IconWhatICanDoParentChildren = 648,
  IconWhatICanDoParentId = 649,
  IconWhatICanDoSortKey = 650,
  IconWhatICanDoSpaceId = 651,
  IconWhatICanDoSubName = 652,
  IconWhatICanDoSysRevision = 653,
  IconWhatICanDoSysType = 654,
  IconWhatICanDoUpdatedAt = 655,
  Id = 656,
  InternalContent = 657,
  InternalContentDigest = 658,
  InternalDescription = 659,
  InternalFieldOwners = 660,
  InternalIgnoreType = 661,
  InternalMediaType = 662,
  InternalOwner = 663,
  InternalType = 664,
  Name = 665,
  NodeLocale = 666,
  ParentChildren = 667,
  ParentChildrenChildren = 668,
  ParentChildrenChildrenChildren = 669,
  ParentChildrenChildrenId = 670,
  ParentChildrenId = 671,
  ParentChildrenInternalContent = 672,
  ParentChildrenInternalContentDigest = 673,
  ParentChildrenInternalDescription = 674,
  ParentChildrenInternalFieldOwners = 675,
  ParentChildrenInternalIgnoreType = 676,
  ParentChildrenInternalMediaType = 677,
  ParentChildrenInternalOwner = 678,
  ParentChildrenInternalType = 679,
  ParentChildrenParentChildren = 680,
  ParentChildrenParentId = 681,
  ParentId = 682,
  ParentInternalContent = 683,
  ParentInternalContentDigest = 684,
  ParentInternalDescription = 685,
  ParentInternalFieldOwners = 686,
  ParentInternalIgnoreType = 687,
  ParentInternalMediaType = 688,
  ParentInternalOwner = 689,
  ParentInternalType = 690,
  ParentParentChildren = 691,
  ParentParentChildrenChildren = 692,
  ParentParentChildrenId = 693,
  ParentParentId = 694,
  ParentParentInternalContent = 695,
  ParentParentInternalContentDigest = 696,
  ParentParentInternalDescription = 697,
  ParentParentInternalFieldOwners = 698,
  ParentParentInternalIgnoreType = 699,
  ParentParentInternalMediaType = 700,
  ParentParentInternalOwner = 701,
  ParentParentInternalType = 702,
  ParentParentParentChildren = 703,
  ParentParentParentId = 704,
  SortKey = 705,
  SpaceId = 706,
  SubName = 707,
  SysContentTypeSysId = 708,
  SysContentTypeSysLinkType = 709,
  SysContentTypeSysType = 710,
  SysRevision = 711,
  SysType = 712,
  UpdatedAt = 713
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
  IconContactIconSvgDarkSize = 161,
  IconContactIconSvgDarkSpaceId = 162,
  IconContactIconSvgDarkTitle = 163,
  IconContactIconSvgDarkUpdatedAt = 164,
  IconContactIconSvgDarkUrl = 165,
  IconContactIconSvgDarkWidth = 166,
  IconContactIconSvgLightChildren = 167,
  IconContactIconSvgLightContentfulId = 168,
  IconContactIconSvgLightCreatedAt = 169,
  IconContactIconSvgLightDescription = 170,
  IconContactIconSvgLightFilename = 171,
  IconContactIconSvgLightFilesize = 172,
  IconContactIconSvgLightGatsbyImage = 173,
  IconContactIconSvgLightGatsbyImageData = 174,
  IconContactIconSvgLightHeight = 175,
  IconContactIconSvgLightId = 176,
  IconContactIconSvgLightMimeType = 177,
  IconContactIconSvgLightNodeLocale = 178,
  IconContactIconSvgLightPlaceholderUrl = 179,
  IconContactIconSvgLightPublicUrl = 180,
  IconContactIconSvgLightSize = 181,
  IconContactIconSvgLightSpaceId = 182,
  IconContactIconSvgLightTitle = 183,
  IconContactIconSvgLightUpdatedAt = 184,
  IconContactIconSvgLightUrl = 185,
  IconContactIconSvgLightWidth = 186,
  IconContactIconChildren = 187,
  IconContactIconChildrenContentfulIconSvgTextNode = 188,
  IconContactIconContact = 189,
  IconContactIconContentfulId = 190,
  IconContactIconCreatedAt = 191,
  IconContactIconHistory = 192,
  IconContactIconId = 193,
  IconContactIconName = 194,
  IconContactIconNodeLocale = 195,
  IconContactIconOss = 196,
  IconContactIconProject = 197,
  IconContactIconSpaceId = 198,
  IconContactIconUpdatedAt = 199,
  IconContactIconWhatICanDo = 200,
  IconContactId = 201,
  IconContactInternalContent = 202,
  IconContactInternalContentDigest = 203,
  IconContactInternalDescription = 204,
  IconContactInternalFieldOwners = 205,
  IconContactInternalIgnoreType = 206,
  IconContactInternalMediaType = 207,
  IconContactInternalOwner = 208,
  IconContactInternalType = 209,
  IconContactName = 210,
  IconContactNodeLocale = 211,
  IconContactParentChildren = 212,
  IconContactParentId = 213,
  IconContactSortKey = 214,
  IconContactSpaceId = 215,
  IconContactSubName = 216,
  IconContactSysRevision = 217,
  IconContactSysType = 218,
  IconContactUpdatedAt = 219,
  IconContentfulId = 220,
  IconCreatedAt = 221,
  IconHistory = 222,
  IconHistoryChildren = 223,
  IconHistoryChildrenChildren = 224,
  IconHistoryChildrenId = 225,
  IconHistoryContentfulId = 226,
  IconHistoryCreatedAt = 227,
  IconHistoryDate = 228,
  IconHistoryIconChildren = 229,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 230,
  IconHistoryIconContact = 231,
  IconHistoryIconContentfulId = 232,
  IconHistoryIconCreatedAt = 233,
  IconHistoryIconHistory = 234,
  IconHistoryIconId = 235,
  IconHistoryIconName = 236,
  IconHistoryIconNodeLocale = 237,
  IconHistoryIconOss = 238,
  IconHistoryIconProject = 239,
  IconHistoryIconSpaceId = 240,
  IconHistoryIconUpdatedAt = 241,
  IconHistoryIconWhatICanDo = 242,
  IconHistoryId = 243,
  IconHistoryInternalContent = 244,
  IconHistoryInternalContentDigest = 245,
  IconHistoryInternalDescription = 246,
  IconHistoryInternalFieldOwners = 247,
  IconHistoryInternalIgnoreType = 248,
  IconHistoryInternalMediaType = 249,
  IconHistoryInternalOwner = 250,
  IconHistoryInternalType = 251,
  IconHistoryName = 252,
  IconHistoryNodeLocale = 253,
  IconHistoryParentChildren = 254,
  IconHistoryParentId = 255,
  IconHistorySpaceId = 256,
  IconHistorySubName = 257,
  IconHistorySysRevision = 258,
  IconHistorySysType = 259,
  IconHistoryUpdatedAt = 260,
  IconId = 261,
  IconInternalContent = 262,
  IconInternalContentDigest = 263,
  IconInternalDescription = 264,
  IconInternalFieldOwners = 265,
  IconInternalIgnoreType = 266,
  IconInternalMediaType = 267,
  IconInternalOwner = 268,
  IconInternalType = 269,
  IconName = 270,
  IconNodeLocale = 271,
  IconOss = 272,
  IconOssChildContentfulOssDetailTextNodeChildren = 273,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 274,
  IconOssChildContentfulOssDetailTextNodeDetail = 275,
  IconOssChildContentfulOssDetailTextNodeId = 276,
  IconOssChildren = 277,
  IconOssChildrenContentfulOssDetailTextNode = 278,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 279,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 280,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 281,
  IconOssChildrenContentfulOssDetailTextNodeId = 282,
  IconOssChildrenChildren = 283,
  IconOssChildrenId = 284,
  IconOssContentfulId = 285,
  IconOssCreatedAt = 286,
  IconOssDetailChildren = 287,
  IconOssDetailChildrenMdx = 288,
  IconOssDetailDetail = 289,
  IconOssDetailId = 290,
  IconOssHref = 291,
  IconOssIconChildren = 292,
  IconOssIconChildrenContentfulIconSvgTextNode = 293,
  IconOssIconContact = 294,
  IconOssIconContentfulId = 295,
  IconOssIconCreatedAt = 296,
  IconOssIconHistory = 297,
  IconOssIconId = 298,
  IconOssIconName = 299,
  IconOssIconNodeLocale = 300,
  IconOssIconOss = 301,
  IconOssIconProject = 302,
  IconOssIconSpaceId = 303,
  IconOssIconUpdatedAt = 304,
  IconOssIconWhatICanDo = 305,
  IconOssId = 306,
  IconOssImageChildren = 307,
  IconOssImageContentfulId = 308,
  IconOssImageCreatedAt = 309,
  IconOssImageDescription = 310,
  IconOssImageFilename = 311,
  IconOssImageFilesize = 312,
  IconOssImageGatsbyImage = 313,
  IconOssImageGatsbyImageData = 314,
  IconOssImageHeight = 315,
  IconOssImageId = 316,
  IconOssImageMimeType = 317,
  IconOssImageNodeLocale = 318,
  IconOssImagePlaceholderUrl = 319,
  IconOssImagePublicUrl = 320,
  IconOssImageSize = 321,
  IconOssImageSpaceId = 322,
  IconOssImageTitle = 323,
  IconOssImageUpdatedAt = 324,
  IconOssImageUrl = 325,
  IconOssImageWidth = 326,
  IconOssInternalContent = 327,
  IconOssInternalContentDigest = 328,
  IconOssInternalDescription = 329,
  IconOssInternalFieldOwners = 330,
  IconOssInternalIgnoreType = 331,
  IconOssInternalMediaType = 332,
  IconOssInternalOwner = 333,
  IconOssInternalType = 334,
  IconOssName = 335,
  IconOssNodeLocale = 336,
  IconOssParentChildren = 337,
  IconOssParentId = 338,
  IconOssSpaceId = 339,
  IconOssStartDate = 340,
  IconOssSubName = 341,
  IconOssSysRevision = 342,
  IconOssSysType = 343,
  IconOssTags = 344,
  IconOssTagsBlogPost = 345,
  IconOssTagsChildren = 346,
  IconOssTagsContentfulId = 347,
  IconOssTagsCreatedAt = 348,
  IconOssTagsId = 349,
  IconOssTagsLevel = 350,
  IconOssTagsName = 351,
  IconOssTagsNodeLocale = 352,
  IconOssTagsOss = 353,
  IconOssTagsProject = 354,
  IconOssTagsSkillGrpup = 355,
  IconOssTagsSkillMap = 356,
  IconOssTagsSpaceId = 357,
  IconOssTagsUpdatedAt = 358,
  IconOssUpdatedAt = 359,
  IconParentChildren = 360,
  IconParentChildrenChildren = 361,
  IconParentChildrenId = 362,
  IconParentId = 363,
  IconParentInternalContent = 364,
  IconParentInternalContentDigest = 365,
  IconParentInternalDescription = 366,
  IconParentInternalFieldOwners = 367,
  IconParentInternalIgnoreType = 368,
  IconParentInternalMediaType = 369,
  IconParentInternalOwner = 370,
  IconParentInternalType = 371,
  IconParentParentChildren = 372,
  IconParentParentId = 373,
  IconProject = 374,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 375,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 376,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 377,
  IconProjectChildContentfulProjectDetailTextNodeId = 378,
  IconProjectChildren = 379,
  IconProjectChildrenContentfulProjectDetailTextNode = 380,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 381,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 382,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 383,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 384,
  IconProjectChildrenChildren = 385,
  IconProjectChildrenId = 386,
  IconProjectContentfulId = 387,
  IconProjectCreatedAt = 388,
  IconProjectDetailChildren = 389,
  IconProjectDetailChildrenMdx = 390,
  IconProjectDetailDetail = 391,
  IconProjectDetailId = 392,
  IconProjectEndDate = 393,
  IconProjectIconChildren = 394,
  IconProjectIconChildrenContentfulIconSvgTextNode = 395,
  IconProjectIconContact = 396,
  IconProjectIconContentfulId = 397,
  IconProjectIconCreatedAt = 398,
  IconProjectIconHistory = 399,
  IconProjectIconId = 400,
  IconProjectIconName = 401,
  IconProjectIconNodeLocale = 402,
  IconProjectIconOss = 403,
  IconProjectIconProject = 404,
  IconProjectIconSpaceId = 405,
  IconProjectIconUpdatedAt = 406,
  IconProjectIconWhatICanDo = 407,
  IconProjectId = 408,
  IconProjectInternalContent = 409,
  IconProjectInternalContentDigest = 410,
  IconProjectInternalDescription = 411,
  IconProjectInternalFieldOwners = 412,
  IconProjectInternalIgnoreType = 413,
  IconProjectInternalMediaType = 414,
  IconProjectInternalOwner = 415,
  IconProjectInternalType = 416,
  IconProjectName = 417,
  IconProjectNodeLocale = 418,
  IconProjectParentChildren = 419,
  IconProjectParentId = 420,
  IconProjectSpaceId = 421,
  IconProjectStartDate = 422,
  IconProjectSubName = 423,
  IconProjectSysRevision = 424,
  IconProjectSysType = 425,
  IconProjectTags = 426,
  IconProjectTagsBlogPost = 427,
  IconProjectTagsChildren = 428,
  IconProjectTagsContentfulId = 429,
  IconProjectTagsCreatedAt = 430,
  IconProjectTagsId = 431,
  IconProjectTagsLevel = 432,
  IconProjectTagsName = 433,
  IconProjectTagsNodeLocale = 434,
  IconProjectTagsOss = 435,
  IconProjectTagsProject = 436,
  IconProjectTagsSkillGrpup = 437,
  IconProjectTagsSkillMap = 438,
  IconProjectTagsSpaceId = 439,
  IconProjectTagsUpdatedAt = 440,
  IconProjectUpdatedAt = 441,
  IconSpaceId = 442,
  IconSvgChildMdxBody = 443,
  IconSvgChildMdxChildren = 444,
  IconSvgChildMdxExcerpt = 445,
  IconSvgChildMdxFileAbsolutePath = 446,
  IconSvgChildMdxHeadings = 447,
  IconSvgChildMdxHtml = 448,
  IconSvgChildMdxId = 449,
  IconSvgChildMdxMdxAst = 450,
  IconSvgChildMdxRawBody = 451,
  IconSvgChildMdxSlug = 452,
  IconSvgChildMdxTableOfContents = 453,
  IconSvgChildMdxTimeToRead = 454,
  IconSvgChildren = 455,
  IconSvgChildrenMdx = 456,
  IconSvgChildrenMdxBody = 457,
  IconSvgChildrenMdxChildren = 458,
  IconSvgChildrenMdxExcerpt = 459,
  IconSvgChildrenMdxFileAbsolutePath = 460,
  IconSvgChildrenMdxHeadings = 461,
  IconSvgChildrenMdxHtml = 462,
  IconSvgChildrenMdxId = 463,
  IconSvgChildrenMdxMdxAst = 464,
  IconSvgChildrenMdxRawBody = 465,
  IconSvgChildrenMdxSlug = 466,
  IconSvgChildrenMdxTableOfContents = 467,
  IconSvgChildrenMdxTimeToRead = 468,
  IconSvgChildrenChildren = 469,
  IconSvgChildrenId = 470,
  IconSvgId = 471,
  IconSvgInternalContent = 472,
  IconSvgInternalContentDigest = 473,
  IconSvgInternalDescription = 474,
  IconSvgInternalFieldOwners = 475,
  IconSvgInternalIgnoreType = 476,
  IconSvgInternalMediaType = 477,
  IconSvgInternalOwner = 478,
  IconSvgInternalType = 479,
  IconSvgParentChildren = 480,
  IconSvgParentId = 481,
  IconSvgSvg = 482,
  IconSvgSysType = 483,
  IconSysRevision = 484,
  IconSysType = 485,
  IconUpdatedAt = 486,
  IconWhatICanDo = 487,
  IconWhatICanDoChildren = 488,
  IconWhatICanDoChildrenChildren = 489,
  IconWhatICanDoChildrenId = 490,
  IconWhatICanDoContentfulId = 491,
  IconWhatICanDoCreatedAt = 492,
  IconWhatICanDoIconChildren = 493,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 494,
  IconWhatICanDoIconContact = 495,
  IconWhatICanDoIconContentfulId = 496,
  IconWhatICanDoIconCreatedAt = 497,
  IconWhatICanDoIconHistory = 498,
  IconWhatICanDoIconId = 499,
  IconWhatICanDoIconName = 500,
  IconWhatICanDoIconNodeLocale = 501,
  IconWhatICanDoIconOss = 502,
  IconWhatICanDoIconProject = 503,
  IconWhatICanDoIconSpaceId = 504,
  IconWhatICanDoIconUpdatedAt = 505,
  IconWhatICanDoIconWhatICanDo = 506,
  IconWhatICanDoId = 507,
  IconWhatICanDoInternalContent = 508,
  IconWhatICanDoInternalContentDigest = 509,
  IconWhatICanDoInternalDescription = 510,
  IconWhatICanDoInternalFieldOwners = 511,
  IconWhatICanDoInternalIgnoreType = 512,
  IconWhatICanDoInternalMediaType = 513,
  IconWhatICanDoInternalOwner = 514,
  IconWhatICanDoInternalType = 515,
  IconWhatICanDoName = 516,
  IconWhatICanDoNodeLocale = 517,
  IconWhatICanDoParentChildren = 518,
  IconWhatICanDoParentId = 519,
  IconWhatICanDoSortKey = 520,
  IconWhatICanDoSpaceId = 521,
  IconWhatICanDoSubName = 522,
  IconWhatICanDoSysRevision = 523,
  IconWhatICanDoSysType = 524,
  IconWhatICanDoUpdatedAt = 525,
  Id = 526,
  InternalContent = 527,
  InternalContentDigest = 528,
  InternalDescription = 529,
  InternalFieldOwners = 530,
  InternalIgnoreType = 531,
  InternalMediaType = 532,
  InternalOwner = 533,
  InternalType = 534,
  Name = 535,
  NodeLocale = 536,
  ParentChildren = 537,
  ParentChildrenChildren = 538,
  ParentChildrenChildrenChildren = 539,
  ParentChildrenChildrenId = 540,
  ParentChildrenId = 541,
  ParentChildrenInternalContent = 542,
  ParentChildrenInternalContentDigest = 543,
  ParentChildrenInternalDescription = 544,
  ParentChildrenInternalFieldOwners = 545,
  ParentChildrenInternalIgnoreType = 546,
  ParentChildrenInternalMediaType = 547,
  ParentChildrenInternalOwner = 548,
  ParentChildrenInternalType = 549,
  ParentChildrenParentChildren = 550,
  ParentChildrenParentId = 551,
  ParentId = 552,
  ParentInternalContent = 553,
  ParentInternalContentDigest = 554,
  ParentInternalDescription = 555,
  ParentInternalFieldOwners = 556,
  ParentInternalIgnoreType = 557,
  ParentInternalMediaType = 558,
  ParentInternalOwner = 559,
  ParentInternalType = 560,
  ParentParentChildren = 561,
  ParentParentChildrenChildren = 562,
  ParentParentChildrenId = 563,
  ParentParentId = 564,
  ParentParentInternalContent = 565,
  ParentParentInternalContentDigest = 566,
  ParentParentInternalDescription = 567,
  ParentParentInternalFieldOwners = 568,
  ParentParentInternalIgnoreType = 569,
  ParentParentInternalMediaType = 570,
  ParentParentInternalOwner = 571,
  ParentParentInternalType = 572,
  ParentParentParentChildren = 573,
  ParentParentParentId = 574,
  SpaceId = 575,
  SubName = 576,
  SysContentTypeSysId = 577,
  SysContentTypeSysLinkType = 578,
  SysContentTypeSysType = 579,
  SysRevision = 580,
  SysType = 581,
  UpdatedAt = 582
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
  ContactIconSvgDarkSize = 293,
  ContactIconSvgDarkSpaceId = 294,
  ContactIconSvgDarkSysRevision = 295,
  ContactIconSvgDarkSysType = 296,
  ContactIconSvgDarkTitle = 297,
  ContactIconSvgDarkUpdatedAt = 298,
  ContactIconSvgDarkUrl = 299,
  ContactIconSvgDarkWidth = 300,
  ContactIconSvgLightChildren = 301,
  ContactIconSvgLightChildrenChildren = 302,
  ContactIconSvgLightChildrenId = 303,
  ContactIconSvgLightContentfulId = 304,
  ContactIconSvgLightCreatedAt = 305,
  ContactIconSvgLightDescription = 306,
  ContactIconSvgLightFileContentType = 307,
  ContactIconSvgLightFileFileName = 308,
  ContactIconSvgLightFileUrl = 309,
  ContactIconSvgLightFilename = 310,
  ContactIconSvgLightFilesize = 311,
  ContactIconSvgLightGatsbyImage = 312,
  ContactIconSvgLightGatsbyImageData = 313,
  ContactIconSvgLightHeight = 314,
  ContactIconSvgLightId = 315,
  ContactIconSvgLightInternalContent = 316,
  ContactIconSvgLightInternalContentDigest = 317,
  ContactIconSvgLightInternalDescription = 318,
  ContactIconSvgLightInternalFieldOwners = 319,
  ContactIconSvgLightInternalIgnoreType = 320,
  ContactIconSvgLightInternalMediaType = 321,
  ContactIconSvgLightInternalOwner = 322,
  ContactIconSvgLightInternalType = 323,
  ContactIconSvgLightMimeType = 324,
  ContactIconSvgLightNodeLocale = 325,
  ContactIconSvgLightParentChildren = 326,
  ContactIconSvgLightParentId = 327,
  ContactIconSvgLightPlaceholderUrl = 328,
  ContactIconSvgLightPublicUrl = 329,
  ContactIconSvgLightResizeHeight = 330,
  ContactIconSvgLightResizeSrc = 331,
  ContactIconSvgLightResizeWidth = 332,
  ContactIconSvgLightSize = 333,
  ContactIconSvgLightSpaceId = 334,
  ContactIconSvgLightSysRevision = 335,
  ContactIconSvgLightSysType = 336,
  ContactIconSvgLightTitle = 337,
  ContactIconSvgLightUpdatedAt = 338,
  ContactIconSvgLightUrl = 339,
  ContactIconSvgLightWidth = 340,
  ContactIconChildContentfulIconSvgTextNodeChildren = 341,
  ContactIconChildContentfulIconSvgTextNodeChildrenMdx = 342,
  ContactIconChildContentfulIconSvgTextNodeId = 343,
  ContactIconChildContentfulIconSvgTextNodeSvg = 344,
  ContactIconChildren = 345,
  ContactIconChildrenContentfulIconSvgTextNode = 346,
  ContactIconChildrenContentfulIconSvgTextNodeChildren = 347,
  ContactIconChildrenContentfulIconSvgTextNodeChildrenMdx = 348,
  ContactIconChildrenContentfulIconSvgTextNodeId = 349,
  ContactIconChildrenContentfulIconSvgTextNodeSvg = 350,
  ContactIconChildrenChildren = 351,
  ContactIconChildrenId = 352,
  ContactIconContact = 353,
  ContactIconContactChildren = 354,
  ContactIconContactContentfulId = 355,
  ContactIconContactCreatedAt = 356,
  ContactIconContactHref = 357,
  ContactIconContactId = 358,
  ContactIconContactName = 359,
  ContactIconContactNodeLocale = 360,
  ContactIconContactSortKey = 361,
  ContactIconContactSpaceId = 362,
  ContactIconContactSubName = 363,
  ContactIconContactUpdatedAt = 364,
  ContactIconContentfulId = 365,
  ContactIconCreatedAt = 366,
  ContactIconHistory = 367,
  ContactIconHistoryChildren = 368,
  ContactIconHistoryContentfulId = 369,
  ContactIconHistoryCreatedAt = 370,
  ContactIconHistoryDate = 371,
  ContactIconHistoryId = 372,
  ContactIconHistoryName = 373,
  ContactIconHistoryNodeLocale = 374,
  ContactIconHistorySpaceId = 375,
  ContactIconHistorySubName = 376,
  ContactIconHistoryUpdatedAt = 377,
  ContactIconId = 378,
  ContactIconInternalContent = 379,
  ContactIconInternalContentDigest = 380,
  ContactIconInternalDescription = 381,
  ContactIconInternalFieldOwners = 382,
  ContactIconInternalIgnoreType = 383,
  ContactIconInternalMediaType = 384,
  ContactIconInternalOwner = 385,
  ContactIconInternalType = 386,
  ContactIconName = 387,
  ContactIconNodeLocale = 388,
  ContactIconOss = 389,
  ContactIconOssChildren = 390,
  ContactIconOssChildrenContentfulOssDetailTextNode = 391,
  ContactIconOssContentfulId = 392,
  ContactIconOssCreatedAt = 393,
  ContactIconOssHref = 394,
  ContactIconOssId = 395,
  ContactIconOssName = 396,
  ContactIconOssNodeLocale = 397,
  ContactIconOssSpaceId = 398,
  ContactIconOssStartDate = 399,
  ContactIconOssSubName = 400,
  ContactIconOssTags = 401,
  ContactIconOssUpdatedAt = 402,
  ContactIconParentChildren = 403,
  ContactIconParentId = 404,
  ContactIconProject = 405,
  ContactIconProjectChildren = 406,
  ContactIconProjectChildrenContentfulProjectDetailTextNode = 407,
  ContactIconProjectContentfulId = 408,
  ContactIconProjectCreatedAt = 409,
  ContactIconProjectEndDate = 410,
  ContactIconProjectId = 411,
  ContactIconProjectName = 412,
  ContactIconProjectNodeLocale = 413,
  ContactIconProjectSpaceId = 414,
  ContactIconProjectStartDate = 415,
  ContactIconProjectSubName = 416,
  ContactIconProjectTags = 417,
  ContactIconProjectUpdatedAt = 418,
  ContactIconSpaceId = 419,
  ContactIconSvgChildren = 420,
  ContactIconSvgChildrenMdx = 421,
  ContactIconSvgId = 422,
  ContactIconSvgSvg = 423,
  ContactIconSysRevision = 424,
  ContactIconSysType = 425,
  ContactIconUpdatedAt = 426,
  ContactIconWhatICanDo = 427,
  ContactIconWhatICanDoChildren = 428,
  ContactIconWhatICanDoContentfulId = 429,
  ContactIconWhatICanDoCreatedAt = 430,
  ContactIconWhatICanDoId = 431,
  ContactIconWhatICanDoName = 432,
  ContactIconWhatICanDoNodeLocale = 433,
  ContactIconWhatICanDoSortKey = 434,
  ContactIconWhatICanDoSpaceId = 435,
  ContactIconWhatICanDoSubName = 436,
  ContactIconWhatICanDoUpdatedAt = 437,
  ContactId = 438,
  ContactInternalContent = 439,
  ContactInternalContentDigest = 440,
  ContactInternalDescription = 441,
  ContactInternalFieldOwners = 442,
  ContactInternalIgnoreType = 443,
  ContactInternalMediaType = 444,
  ContactInternalOwner = 445,
  ContactInternalType = 446,
  ContactName = 447,
  ContactNodeLocale = 448,
  ContactParentChildren = 449,
  ContactParentChildrenChildren = 450,
  ContactParentChildrenId = 451,
  ContactParentId = 452,
  ContactParentInternalContent = 453,
  ContactParentInternalContentDigest = 454,
  ContactParentInternalDescription = 455,
  ContactParentInternalFieldOwners = 456,
  ContactParentInternalIgnoreType = 457,
  ContactParentInternalMediaType = 458,
  ContactParentInternalOwner = 459,
  ContactParentInternalType = 460,
  ContactParentParentChildren = 461,
  ContactParentParentId = 462,
  ContactSortKey = 463,
  ContactSpaceId = 464,
  ContactSubName = 465,
  ContactSysRevision = 466,
  ContactSysType = 467,
  ContactUpdatedAt = 468,
  ContentfulId = 469,
  CreatedAt = 470,
  History = 471,
  HistoryChildren = 472,
  HistoryChildrenChildren = 473,
  HistoryChildrenChildrenChildren = 474,
  HistoryChildrenChildrenId = 475,
  HistoryChildrenId = 476,
  HistoryChildrenInternalContent = 477,
  HistoryChildrenInternalContentDigest = 478,
  HistoryChildrenInternalDescription = 479,
  HistoryChildrenInternalFieldOwners = 480,
  HistoryChildrenInternalIgnoreType = 481,
  HistoryChildrenInternalMediaType = 482,
  HistoryChildrenInternalOwner = 483,
  HistoryChildrenInternalType = 484,
  HistoryChildrenParentChildren = 485,
  HistoryChildrenParentId = 486,
  HistoryContentfulId = 487,
  HistoryCreatedAt = 488,
  HistoryDate = 489,
  HistoryIconChildContentfulIconSvgTextNodeChildren = 490,
  HistoryIconChildContentfulIconSvgTextNodeChildrenMdx = 491,
  HistoryIconChildContentfulIconSvgTextNodeId = 492,
  HistoryIconChildContentfulIconSvgTextNodeSvg = 493,
  HistoryIconChildren = 494,
  HistoryIconChildrenContentfulIconSvgTextNode = 495,
  HistoryIconChildrenContentfulIconSvgTextNodeChildren = 496,
  HistoryIconChildrenContentfulIconSvgTextNodeChildrenMdx = 497,
  HistoryIconChildrenContentfulIconSvgTextNodeId = 498,
  HistoryIconChildrenContentfulIconSvgTextNodeSvg = 499,
  HistoryIconChildrenChildren = 500,
  HistoryIconChildrenId = 501,
  HistoryIconContact = 502,
  HistoryIconContactChildren = 503,
  HistoryIconContactContentfulId = 504,
  HistoryIconContactCreatedAt = 505,
  HistoryIconContactHref = 506,
  HistoryIconContactId = 507,
  HistoryIconContactName = 508,
  HistoryIconContactNodeLocale = 509,
  HistoryIconContactSortKey = 510,
  HistoryIconContactSpaceId = 511,
  HistoryIconContactSubName = 512,
  HistoryIconContactUpdatedAt = 513,
  HistoryIconContentfulId = 514,
  HistoryIconCreatedAt = 515,
  HistoryIconHistory = 516,
  HistoryIconHistoryChildren = 517,
  HistoryIconHistoryContentfulId = 518,
  HistoryIconHistoryCreatedAt = 519,
  HistoryIconHistoryDate = 520,
  HistoryIconHistoryId = 521,
  HistoryIconHistoryName = 522,
  HistoryIconHistoryNodeLocale = 523,
  HistoryIconHistorySpaceId = 524,
  HistoryIconHistorySubName = 525,
  HistoryIconHistoryUpdatedAt = 526,
  HistoryIconId = 527,
  HistoryIconInternalContent = 528,
  HistoryIconInternalContentDigest = 529,
  HistoryIconInternalDescription = 530,
  HistoryIconInternalFieldOwners = 531,
  HistoryIconInternalIgnoreType = 532,
  HistoryIconInternalMediaType = 533,
  HistoryIconInternalOwner = 534,
  HistoryIconInternalType = 535,
  HistoryIconName = 536,
  HistoryIconNodeLocale = 537,
  HistoryIconOss = 538,
  HistoryIconOssChildren = 539,
  HistoryIconOssChildrenContentfulOssDetailTextNode = 540,
  HistoryIconOssContentfulId = 541,
  HistoryIconOssCreatedAt = 542,
  HistoryIconOssHref = 543,
  HistoryIconOssId = 544,
  HistoryIconOssName = 545,
  HistoryIconOssNodeLocale = 546,
  HistoryIconOssSpaceId = 547,
  HistoryIconOssStartDate = 548,
  HistoryIconOssSubName = 549,
  HistoryIconOssTags = 550,
  HistoryIconOssUpdatedAt = 551,
  HistoryIconParentChildren = 552,
  HistoryIconParentId = 553,
  HistoryIconProject = 554,
  HistoryIconProjectChildren = 555,
  HistoryIconProjectChildrenContentfulProjectDetailTextNode = 556,
  HistoryIconProjectContentfulId = 557,
  HistoryIconProjectCreatedAt = 558,
  HistoryIconProjectEndDate = 559,
  HistoryIconProjectId = 560,
  HistoryIconProjectName = 561,
  HistoryIconProjectNodeLocale = 562,
  HistoryIconProjectSpaceId = 563,
  HistoryIconProjectStartDate = 564,
  HistoryIconProjectSubName = 565,
  HistoryIconProjectTags = 566,
  HistoryIconProjectUpdatedAt = 567,
  HistoryIconSpaceId = 568,
  HistoryIconSvgChildren = 569,
  HistoryIconSvgChildrenMdx = 570,
  HistoryIconSvgId = 571,
  HistoryIconSvgSvg = 572,
  HistoryIconSysRevision = 573,
  HistoryIconSysType = 574,
  HistoryIconUpdatedAt = 575,
  HistoryIconWhatICanDo = 576,
  HistoryIconWhatICanDoChildren = 577,
  HistoryIconWhatICanDoContentfulId = 578,
  HistoryIconWhatICanDoCreatedAt = 579,
  HistoryIconWhatICanDoId = 580,
  HistoryIconWhatICanDoName = 581,
  HistoryIconWhatICanDoNodeLocale = 582,
  HistoryIconWhatICanDoSortKey = 583,
  HistoryIconWhatICanDoSpaceId = 584,
  HistoryIconWhatICanDoSubName = 585,
  HistoryIconWhatICanDoUpdatedAt = 586,
  HistoryId = 587,
  HistoryInternalContent = 588,
  HistoryInternalContentDigest = 589,
  HistoryInternalDescription = 590,
  HistoryInternalFieldOwners = 591,
  HistoryInternalIgnoreType = 592,
  HistoryInternalMediaType = 593,
  HistoryInternalOwner = 594,
  HistoryInternalType = 595,
  HistoryName = 596,
  HistoryNodeLocale = 597,
  HistoryParentChildren = 598,
  HistoryParentChildrenChildren = 599,
  HistoryParentChildrenId = 600,
  HistoryParentId = 601,
  HistoryParentInternalContent = 602,
  HistoryParentInternalContentDigest = 603,
  HistoryParentInternalDescription = 604,
  HistoryParentInternalFieldOwners = 605,
  HistoryParentInternalIgnoreType = 606,
  HistoryParentInternalMediaType = 607,
  HistoryParentInternalOwner = 608,
  HistoryParentInternalType = 609,
  HistoryParentParentChildren = 610,
  HistoryParentParentId = 611,
  HistorySpaceId = 612,
  HistorySubName = 613,
  HistorySysRevision = 614,
  HistorySysType = 615,
  HistoryUpdatedAt = 616,
  Id = 617,
  InternalContent = 618,
  InternalContentDigest = 619,
  InternalDescription = 620,
  InternalFieldOwners = 621,
  InternalIgnoreType = 622,
  InternalMediaType = 623,
  InternalOwner = 624,
  InternalType = 625,
  Name = 626,
  NodeLocale = 627,
  Oss = 628,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 629,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 630,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 631,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 632,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 633,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 634,
  OssChildContentfulOssDetailTextNodeChildMdxId = 635,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 636,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 637,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 638,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 639,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 640,
  OssChildContentfulOssDetailTextNodeChildren = 641,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 642,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 643,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 644,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 645,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 646,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 647,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 648,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 649,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 650,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 651,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 652,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 653,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 654,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 655,
  OssChildContentfulOssDetailTextNodeChildrenId = 656,
  OssChildContentfulOssDetailTextNodeDetail = 657,
  OssChildContentfulOssDetailTextNodeId = 658,
  OssChildContentfulOssDetailTextNodeInternalContent = 659,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 660,
  OssChildContentfulOssDetailTextNodeInternalDescription = 661,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 662,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 663,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 664,
  OssChildContentfulOssDetailTextNodeInternalOwner = 665,
  OssChildContentfulOssDetailTextNodeInternalType = 666,
  OssChildContentfulOssDetailTextNodeParentChildren = 667,
  OssChildContentfulOssDetailTextNodeParentId = 668,
  OssChildContentfulOssDetailTextNodeSysType = 669,
  OssChildren = 670,
  OssChildrenContentfulOssDetailTextNode = 671,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 672,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 673,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 674,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 675,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 676,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 677,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 678,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 679,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 680,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 681,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 682,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 683,
  OssChildrenContentfulOssDetailTextNodeChildren = 684,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 685,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 686,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 687,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 688,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 689,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 690,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 691,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 692,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 693,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 694,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 695,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 696,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 697,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 698,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 699,
  OssChildrenContentfulOssDetailTextNodeDetail = 700,
  OssChildrenContentfulOssDetailTextNodeId = 701,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 702,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 703,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 704,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 705,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 706,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 707,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 708,
  OssChildrenContentfulOssDetailTextNodeInternalType = 709,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 710,
  OssChildrenContentfulOssDetailTextNodeParentId = 711,
  OssChildrenContentfulOssDetailTextNodeSysType = 712,
  OssChildrenChildren = 713,
  OssChildrenChildrenChildren = 714,
  OssChildrenChildrenId = 715,
  OssChildrenId = 716,
  OssChildrenInternalContent = 717,
  OssChildrenInternalContentDigest = 718,
  OssChildrenInternalDescription = 719,
  OssChildrenInternalFieldOwners = 720,
  OssChildrenInternalIgnoreType = 721,
  OssChildrenInternalMediaType = 722,
  OssChildrenInternalOwner = 723,
  OssChildrenInternalType = 724,
  OssChildrenParentChildren = 725,
  OssChildrenParentId = 726,
  OssContentfulId = 727,
  OssCreatedAt = 728,
  OssDetailChildMdxBody = 729,
  OssDetailChildMdxChildren = 730,
  OssDetailChildMdxExcerpt = 731,
  OssDetailChildMdxFileAbsolutePath = 732,
  OssDetailChildMdxHeadings = 733,
  OssDetailChildMdxHtml = 734,
  OssDetailChildMdxId = 735,
  OssDetailChildMdxMdxAst = 736,
  OssDetailChildMdxRawBody = 737,
  OssDetailChildMdxSlug = 738,
  OssDetailChildMdxTableOfContents = 739,
  OssDetailChildMdxTimeToRead = 740,
  OssDetailChildren = 741,
  OssDetailChildrenMdx = 742,
  OssDetailChildrenMdxBody = 743,
  OssDetailChildrenMdxChildren = 744,
  OssDetailChildrenMdxExcerpt = 745,
  OssDetailChildrenMdxFileAbsolutePath = 746,
  OssDetailChildrenMdxHeadings = 747,
  OssDetailChildrenMdxHtml = 748,
  OssDetailChildrenMdxId = 749,
  OssDetailChildrenMdxMdxAst = 750,
  OssDetailChildrenMdxRawBody = 751,
  OssDetailChildrenMdxSlug = 752,
  OssDetailChildrenMdxTableOfContents = 753,
  OssDetailChildrenMdxTimeToRead = 754,
  OssDetailChildrenChildren = 755,
  OssDetailChildrenId = 756,
  OssDetailDetail = 757,
  OssDetailId = 758,
  OssDetailInternalContent = 759,
  OssDetailInternalContentDigest = 760,
  OssDetailInternalDescription = 761,
  OssDetailInternalFieldOwners = 762,
  OssDetailInternalIgnoreType = 763,
  OssDetailInternalMediaType = 764,
  OssDetailInternalOwner = 765,
  OssDetailInternalType = 766,
  OssDetailParentChildren = 767,
  OssDetailParentId = 768,
  OssDetailSysType = 769,
  OssHref = 770,
  OssIconChildContentfulIconSvgTextNodeChildren = 771,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 772,
  OssIconChildContentfulIconSvgTextNodeId = 773,
  OssIconChildContentfulIconSvgTextNodeSvg = 774,
  OssIconChildren = 775,
  OssIconChildrenContentfulIconSvgTextNode = 776,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 777,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 778,
  OssIconChildrenContentfulIconSvgTextNodeId = 779,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 780,
  OssIconChildrenChildren = 781,
  OssIconChildrenId = 782,
  OssIconContact = 783,
  OssIconContactChildren = 784,
  OssIconContactContentfulId = 785,
  OssIconContactCreatedAt = 786,
  OssIconContactHref = 787,
  OssIconContactId = 788,
  OssIconContactName = 789,
  OssIconContactNodeLocale = 790,
  OssIconContactSortKey = 791,
  OssIconContactSpaceId = 792,
  OssIconContactSubName = 793,
  OssIconContactUpdatedAt = 794,
  OssIconContentfulId = 795,
  OssIconCreatedAt = 796,
  OssIconHistory = 797,
  OssIconHistoryChildren = 798,
  OssIconHistoryContentfulId = 799,
  OssIconHistoryCreatedAt = 800,
  OssIconHistoryDate = 801,
  OssIconHistoryId = 802,
  OssIconHistoryName = 803,
  OssIconHistoryNodeLocale = 804,
  OssIconHistorySpaceId = 805,
  OssIconHistorySubName = 806,
  OssIconHistoryUpdatedAt = 807,
  OssIconId = 808,
  OssIconInternalContent = 809,
  OssIconInternalContentDigest = 810,
  OssIconInternalDescription = 811,
  OssIconInternalFieldOwners = 812,
  OssIconInternalIgnoreType = 813,
  OssIconInternalMediaType = 814,
  OssIconInternalOwner = 815,
  OssIconInternalType = 816,
  OssIconName = 817,
  OssIconNodeLocale = 818,
  OssIconOss = 819,
  OssIconOssChildren = 820,
  OssIconOssChildrenContentfulOssDetailTextNode = 821,
  OssIconOssContentfulId = 822,
  OssIconOssCreatedAt = 823,
  OssIconOssHref = 824,
  OssIconOssId = 825,
  OssIconOssName = 826,
  OssIconOssNodeLocale = 827,
  OssIconOssSpaceId = 828,
  OssIconOssStartDate = 829,
  OssIconOssSubName = 830,
  OssIconOssTags = 831,
  OssIconOssUpdatedAt = 832,
  OssIconParentChildren = 833,
  OssIconParentId = 834,
  OssIconProject = 835,
  OssIconProjectChildren = 836,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 837,
  OssIconProjectContentfulId = 838,
  OssIconProjectCreatedAt = 839,
  OssIconProjectEndDate = 840,
  OssIconProjectId = 841,
  OssIconProjectName = 842,
  OssIconProjectNodeLocale = 843,
  OssIconProjectSpaceId = 844,
  OssIconProjectStartDate = 845,
  OssIconProjectSubName = 846,
  OssIconProjectTags = 847,
  OssIconProjectUpdatedAt = 848,
  OssIconSpaceId = 849,
  OssIconSvgChildren = 850,
  OssIconSvgChildrenMdx = 851,
  OssIconSvgId = 852,
  OssIconSvgSvg = 853,
  OssIconSysRevision = 854,
  OssIconSysType = 855,
  OssIconUpdatedAt = 856,
  OssIconWhatICanDo = 857,
  OssIconWhatICanDoChildren = 858,
  OssIconWhatICanDoContentfulId = 859,
  OssIconWhatICanDoCreatedAt = 860,
  OssIconWhatICanDoId = 861,
  OssIconWhatICanDoName = 862,
  OssIconWhatICanDoNodeLocale = 863,
  OssIconWhatICanDoSortKey = 864,
  OssIconWhatICanDoSpaceId = 865,
  OssIconWhatICanDoSubName = 866,
  OssIconWhatICanDoUpdatedAt = 867,
  OssId = 868,
  OssImageChildren = 869,
  OssImageChildrenChildren = 870,
  OssImageChildrenId = 871,
  OssImageContentfulId = 872,
  OssImageCreatedAt = 873,
  OssImageDescription = 874,
  OssImageFileContentType = 875,
  OssImageFileFileName = 876,
  OssImageFileUrl = 877,
  OssImageFilename = 878,
  OssImageFilesize = 879,
  OssImageGatsbyImage = 880,
  OssImageGatsbyImageData = 881,
  OssImageHeight = 882,
  OssImageId = 883,
  OssImageInternalContent = 884,
  OssImageInternalContentDigest = 885,
  OssImageInternalDescription = 886,
  OssImageInternalFieldOwners = 887,
  OssImageInternalIgnoreType = 888,
  OssImageInternalMediaType = 889,
  OssImageInternalOwner = 890,
  OssImageInternalType = 891,
  OssImageMimeType = 892,
  OssImageNodeLocale = 893,
  OssImageParentChildren = 894,
  OssImageParentId = 895,
  OssImagePlaceholderUrl = 896,
  OssImagePublicUrl = 897,
  OssImageResizeHeight = 898,
  OssImageResizeSrc = 899,
  OssImageResizeWidth = 900,
  OssImageSize = 901,
  OssImageSpaceId = 902,
  OssImageSysRevision = 903,
  OssImageSysType = 904,
  OssImageTitle = 905,
  OssImageUpdatedAt = 906,
  OssImageUrl = 907,
  OssImageWidth = 908,
  OssInternalContent = 909,
  OssInternalContentDigest = 910,
  OssInternalDescription = 911,
  OssInternalFieldOwners = 912,
  OssInternalIgnoreType = 913,
  OssInternalMediaType = 914,
  OssInternalOwner = 915,
  OssInternalType = 916,
  OssName = 917,
  OssNodeLocale = 918,
  OssParentChildren = 919,
  OssParentChildrenChildren = 920,
  OssParentChildrenId = 921,
  OssParentId = 922,
  OssParentInternalContent = 923,
  OssParentInternalContentDigest = 924,
  OssParentInternalDescription = 925,
  OssParentInternalFieldOwners = 926,
  OssParentInternalIgnoreType = 927,
  OssParentInternalMediaType = 928,
  OssParentInternalOwner = 929,
  OssParentInternalType = 930,
  OssParentParentChildren = 931,
  OssParentParentId = 932,
  OssSpaceId = 933,
  OssStartDate = 934,
  OssSubName = 935,
  OssSysRevision = 936,
  OssSysType = 937,
  OssTags = 938,
  OssTagsBlogPost = 939,
  OssTagsBlogPostChildren = 940,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 941,
  OssTagsBlogPostContentfulId = 942,
  OssTagsBlogPostCreated = 943,
  OssTagsBlogPostCreatedAt = 944,
  OssTagsBlogPostExcerpt = 945,
  OssTagsBlogPostId = 946,
  OssTagsBlogPostNodeLocale = 947,
  OssTagsBlogPostSlug = 948,
  OssTagsBlogPostSpaceId = 949,
  OssTagsBlogPostTags = 950,
  OssTagsBlogPostTitle = 951,
  OssTagsBlogPostUpdated = 952,
  OssTagsBlogPostUpdatedAt = 953,
  OssTagsChildren = 954,
  OssTagsChildrenChildren = 955,
  OssTagsChildrenId = 956,
  OssTagsContentfulId = 957,
  OssTagsCreatedAt = 958,
  OssTagsId = 959,
  OssTagsInternalContent = 960,
  OssTagsInternalContentDigest = 961,
  OssTagsInternalDescription = 962,
  OssTagsInternalFieldOwners = 963,
  OssTagsInternalIgnoreType = 964,
  OssTagsInternalMediaType = 965,
  OssTagsInternalOwner = 966,
  OssTagsInternalType = 967,
  OssTagsLevel = 968,
  OssTagsName = 969,
  OssTagsNodeLocale = 970,
  OssTagsOss = 971,
  OssTagsOssChildren = 972,
  OssTagsOssChildrenContentfulOssDetailTextNode = 973,
  OssTagsOssContentfulId = 974,
  OssTagsOssCreatedAt = 975,
  OssTagsOssHref = 976,
  OssTagsOssId = 977,
  OssTagsOssName = 978,
  OssTagsOssNodeLocale = 979,
  OssTagsOssSpaceId = 980,
  OssTagsOssStartDate = 981,
  OssTagsOssSubName = 982,
  OssTagsOssTags = 983,
  OssTagsOssUpdatedAt = 984,
  OssTagsParentChildren = 985,
  OssTagsParentId = 986,
  OssTagsProject = 987,
  OssTagsProjectChildren = 988,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 989,
  OssTagsProjectContentfulId = 990,
  OssTagsProjectCreatedAt = 991,
  OssTagsProjectEndDate = 992,
  OssTagsProjectId = 993,
  OssTagsProjectName = 994,
  OssTagsProjectNodeLocale = 995,
  OssTagsProjectSpaceId = 996,
  OssTagsProjectStartDate = 997,
  OssTagsProjectSubName = 998,
  OssTagsProjectTags = 999,
  OssTagsProjectUpdatedAt = 1000,
  OssTagsSkillGrpup = 1001,
  OssTagsSkillGrpupChildren = 1002,
  OssTagsSkillGrpupContentfulId = 1003,
  OssTagsSkillGrpupCreatedAt = 1004,
  OssTagsSkillGrpupId = 1005,
  OssTagsSkillGrpupName = 1006,
  OssTagsSkillGrpupNodeLocale = 1007,
  OssTagsSkillGrpupSkillMap = 1008,
  OssTagsSkillGrpupSkills = 1009,
  OssTagsSkillGrpupSpaceId = 1010,
  OssTagsSkillGrpupUpdatedAt = 1011,
  OssTagsSkillMap = 1012,
  OssTagsSkillMapChildren = 1013,
  OssTagsSkillMapContentfulId = 1014,
  OssTagsSkillMapCreatedAt = 1015,
  OssTagsSkillMapExpanded = 1016,
  OssTagsSkillMapId = 1017,
  OssTagsSkillMapName = 1018,
  OssTagsSkillMapNodeLocale = 1019,
  OssTagsSkillMapSkillGroups = 1020,
  OssTagsSkillMapSkills = 1021,
  OssTagsSkillMapSortKey = 1022,
  OssTagsSkillMapSpaceId = 1023,
  OssTagsSkillMapUpdatedAt = 1024,
  OssTagsSpaceId = 1025,
  OssTagsSysRevision = 1026,
  OssTagsSysType = 1027,
  OssTagsUpdatedAt = 1028,
  OssUpdatedAt = 1029,
  ParentChildren = 1030,
  ParentChildrenChildren = 1031,
  ParentChildrenChildrenChildren = 1032,
  ParentChildrenChildrenId = 1033,
  ParentChildrenId = 1034,
  ParentChildrenInternalContent = 1035,
  ParentChildrenInternalContentDigest = 1036,
  ParentChildrenInternalDescription = 1037,
  ParentChildrenInternalFieldOwners = 1038,
  ParentChildrenInternalIgnoreType = 1039,
  ParentChildrenInternalMediaType = 1040,
  ParentChildrenInternalOwner = 1041,
  ParentChildrenInternalType = 1042,
  ParentChildrenParentChildren = 1043,
  ParentChildrenParentId = 1044,
  ParentId = 1045,
  ParentInternalContent = 1046,
  ParentInternalContentDigest = 1047,
  ParentInternalDescription = 1048,
  ParentInternalFieldOwners = 1049,
  ParentInternalIgnoreType = 1050,
  ParentInternalMediaType = 1051,
  ParentInternalOwner = 1052,
  ParentInternalType = 1053,
  ParentParentChildren = 1054,
  ParentParentChildrenChildren = 1055,
  ParentParentChildrenId = 1056,
  ParentParentId = 1057,
  ParentParentInternalContent = 1058,
  ParentParentInternalContentDigest = 1059,
  ParentParentInternalDescription = 1060,
  ParentParentInternalFieldOwners = 1061,
  ParentParentInternalIgnoreType = 1062,
  ParentParentInternalMediaType = 1063,
  ParentParentInternalOwner = 1064,
  ParentParentInternalType = 1065,
  ParentParentParentChildren = 1066,
  ParentParentParentId = 1067,
  Project = 1068,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 1069,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 1070,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 1071,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1072,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 1073,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 1074,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 1075,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 1076,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 1077,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 1078,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 1079,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 1080,
  ProjectChildContentfulProjectDetailTextNodeChildren = 1081,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1082,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 1083,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 1084,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1085,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1086,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 1087,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 1088,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 1089,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1090,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 1091,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 1092,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1093,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1094,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 1095,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 1096,
  ProjectChildContentfulProjectDetailTextNodeDetail = 1097,
  ProjectChildContentfulProjectDetailTextNodeId = 1098,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 1099,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 1100,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 1101,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 1102,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 1103,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 1104,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 1105,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 1106,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 1107,
  ProjectChildContentfulProjectDetailTextNodeParentId = 1108,
  ProjectChildContentfulProjectDetailTextNodeSysType = 1109,
  ProjectChildren = 1110,
  ProjectChildrenContentfulProjectDetailTextNode = 1111,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 1112,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 1113,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 1114,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1115,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 1116,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 1117,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 1118,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 1119,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 1120,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 1121,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 1122,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 1123,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 1124,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1125,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 1126,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 1127,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1128,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1129,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 1130,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 1131,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 1132,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1133,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 1134,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 1135,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1136,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1137,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 1138,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 1139,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 1140,
  ProjectChildrenContentfulProjectDetailTextNodeId = 1141,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 1142,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 1143,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 1144,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 1145,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 1146,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 1147,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 1148,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 1149,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 1150,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 1151,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 1152,
  ProjectChildrenChildren = 1153,
  ProjectChildrenChildrenChildren = 1154,
  ProjectChildrenChildrenId = 1155,
  ProjectChildrenId = 1156,
  ProjectChildrenInternalContent = 1157,
  ProjectChildrenInternalContentDigest = 1158,
  ProjectChildrenInternalDescription = 1159,
  ProjectChildrenInternalFieldOwners = 1160,
  ProjectChildrenInternalIgnoreType = 1161,
  ProjectChildrenInternalMediaType = 1162,
  ProjectChildrenInternalOwner = 1163,
  ProjectChildrenInternalType = 1164,
  ProjectChildrenParentChildren = 1165,
  ProjectChildrenParentId = 1166,
  ProjectContentfulId = 1167,
  ProjectCreatedAt = 1168,
  ProjectDetailChildMdxBody = 1169,
  ProjectDetailChildMdxChildren = 1170,
  ProjectDetailChildMdxExcerpt = 1171,
  ProjectDetailChildMdxFileAbsolutePath = 1172,
  ProjectDetailChildMdxHeadings = 1173,
  ProjectDetailChildMdxHtml = 1174,
  ProjectDetailChildMdxId = 1175,
  ProjectDetailChildMdxMdxAst = 1176,
  ProjectDetailChildMdxRawBody = 1177,
  ProjectDetailChildMdxSlug = 1178,
  ProjectDetailChildMdxTableOfContents = 1179,
  ProjectDetailChildMdxTimeToRead = 1180,
  ProjectDetailChildren = 1181,
  ProjectDetailChildrenMdx = 1182,
  ProjectDetailChildrenMdxBody = 1183,
  ProjectDetailChildrenMdxChildren = 1184,
  ProjectDetailChildrenMdxExcerpt = 1185,
  ProjectDetailChildrenMdxFileAbsolutePath = 1186,
  ProjectDetailChildrenMdxHeadings = 1187,
  ProjectDetailChildrenMdxHtml = 1188,
  ProjectDetailChildrenMdxId = 1189,
  ProjectDetailChildrenMdxMdxAst = 1190,
  ProjectDetailChildrenMdxRawBody = 1191,
  ProjectDetailChildrenMdxSlug = 1192,
  ProjectDetailChildrenMdxTableOfContents = 1193,
  ProjectDetailChildrenMdxTimeToRead = 1194,
  ProjectDetailChildrenChildren = 1195,
  ProjectDetailChildrenId = 1196,
  ProjectDetailDetail = 1197,
  ProjectDetailId = 1198,
  ProjectDetailInternalContent = 1199,
  ProjectDetailInternalContentDigest = 1200,
  ProjectDetailInternalDescription = 1201,
  ProjectDetailInternalFieldOwners = 1202,
  ProjectDetailInternalIgnoreType = 1203,
  ProjectDetailInternalMediaType = 1204,
  ProjectDetailInternalOwner = 1205,
  ProjectDetailInternalType = 1206,
  ProjectDetailParentChildren = 1207,
  ProjectDetailParentId = 1208,
  ProjectDetailSysType = 1209,
  ProjectEndDate = 1210,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1211,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 1212,
  ProjectIconChildContentfulIconSvgTextNodeId = 1213,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1214,
  ProjectIconChildren = 1215,
  ProjectIconChildrenContentfulIconSvgTextNode = 1216,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1217,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1218,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1219,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1220,
  ProjectIconChildrenChildren = 1221,
  ProjectIconChildrenId = 1222,
  ProjectIconContact = 1223,
  ProjectIconContactChildren = 1224,
  ProjectIconContactContentfulId = 1225,
  ProjectIconContactCreatedAt = 1226,
  ProjectIconContactHref = 1227,
  ProjectIconContactId = 1228,
  ProjectIconContactName = 1229,
  ProjectIconContactNodeLocale = 1230,
  ProjectIconContactSortKey = 1231,
  ProjectIconContactSpaceId = 1232,
  ProjectIconContactSubName = 1233,
  ProjectIconContactUpdatedAt = 1234,
  ProjectIconContentfulId = 1235,
  ProjectIconCreatedAt = 1236,
  ProjectIconHistory = 1237,
  ProjectIconHistoryChildren = 1238,
  ProjectIconHistoryContentfulId = 1239,
  ProjectIconHistoryCreatedAt = 1240,
  ProjectIconHistoryDate = 1241,
  ProjectIconHistoryId = 1242,
  ProjectIconHistoryName = 1243,
  ProjectIconHistoryNodeLocale = 1244,
  ProjectIconHistorySpaceId = 1245,
  ProjectIconHistorySubName = 1246,
  ProjectIconHistoryUpdatedAt = 1247,
  ProjectIconId = 1248,
  ProjectIconInternalContent = 1249,
  ProjectIconInternalContentDigest = 1250,
  ProjectIconInternalDescription = 1251,
  ProjectIconInternalFieldOwners = 1252,
  ProjectIconInternalIgnoreType = 1253,
  ProjectIconInternalMediaType = 1254,
  ProjectIconInternalOwner = 1255,
  ProjectIconInternalType = 1256,
  ProjectIconName = 1257,
  ProjectIconNodeLocale = 1258,
  ProjectIconOss = 1259,
  ProjectIconOssChildren = 1260,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1261,
  ProjectIconOssContentfulId = 1262,
  ProjectIconOssCreatedAt = 1263,
  ProjectIconOssHref = 1264,
  ProjectIconOssId = 1265,
  ProjectIconOssName = 1266,
  ProjectIconOssNodeLocale = 1267,
  ProjectIconOssSpaceId = 1268,
  ProjectIconOssStartDate = 1269,
  ProjectIconOssSubName = 1270,
  ProjectIconOssTags = 1271,
  ProjectIconOssUpdatedAt = 1272,
  ProjectIconParentChildren = 1273,
  ProjectIconParentId = 1274,
  ProjectIconProject = 1275,
  ProjectIconProjectChildren = 1276,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1277,
  ProjectIconProjectContentfulId = 1278,
  ProjectIconProjectCreatedAt = 1279,
  ProjectIconProjectEndDate = 1280,
  ProjectIconProjectId = 1281,
  ProjectIconProjectName = 1282,
  ProjectIconProjectNodeLocale = 1283,
  ProjectIconProjectSpaceId = 1284,
  ProjectIconProjectStartDate = 1285,
  ProjectIconProjectSubName = 1286,
  ProjectIconProjectTags = 1287,
  ProjectIconProjectUpdatedAt = 1288,
  ProjectIconSpaceId = 1289,
  ProjectIconSvgChildren = 1290,
  ProjectIconSvgChildrenMdx = 1291,
  ProjectIconSvgId = 1292,
  ProjectIconSvgSvg = 1293,
  ProjectIconSysRevision = 1294,
  ProjectIconSysType = 1295,
  ProjectIconUpdatedAt = 1296,
  ProjectIconWhatICanDo = 1297,
  ProjectIconWhatICanDoChildren = 1298,
  ProjectIconWhatICanDoContentfulId = 1299,
  ProjectIconWhatICanDoCreatedAt = 1300,
  ProjectIconWhatICanDoId = 1301,
  ProjectIconWhatICanDoName = 1302,
  ProjectIconWhatICanDoNodeLocale = 1303,
  ProjectIconWhatICanDoSortKey = 1304,
  ProjectIconWhatICanDoSpaceId = 1305,
  ProjectIconWhatICanDoSubName = 1306,
  ProjectIconWhatICanDoUpdatedAt = 1307,
  ProjectId = 1308,
  ProjectInternalContent = 1309,
  ProjectInternalContentDigest = 1310,
  ProjectInternalDescription = 1311,
  ProjectInternalFieldOwners = 1312,
  ProjectInternalIgnoreType = 1313,
  ProjectInternalMediaType = 1314,
  ProjectInternalOwner = 1315,
  ProjectInternalType = 1316,
  ProjectName = 1317,
  ProjectNodeLocale = 1318,
  ProjectParentChildren = 1319,
  ProjectParentChildrenChildren = 1320,
  ProjectParentChildrenId = 1321,
  ProjectParentId = 1322,
  ProjectParentInternalContent = 1323,
  ProjectParentInternalContentDigest = 1324,
  ProjectParentInternalDescription = 1325,
  ProjectParentInternalFieldOwners = 1326,
  ProjectParentInternalIgnoreType = 1327,
  ProjectParentInternalMediaType = 1328,
  ProjectParentInternalOwner = 1329,
  ProjectParentInternalType = 1330,
  ProjectParentParentChildren = 1331,
  ProjectParentParentId = 1332,
  ProjectSpaceId = 1333,
  ProjectStartDate = 1334,
  ProjectSubName = 1335,
  ProjectSysRevision = 1336,
  ProjectSysType = 1337,
  ProjectTags = 1338,
  ProjectTagsBlogPost = 1339,
  ProjectTagsBlogPostChildren = 1340,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1341,
  ProjectTagsBlogPostContentfulId = 1342,
  ProjectTagsBlogPostCreated = 1343,
  ProjectTagsBlogPostCreatedAt = 1344,
  ProjectTagsBlogPostExcerpt = 1345,
  ProjectTagsBlogPostId = 1346,
  ProjectTagsBlogPostNodeLocale = 1347,
  ProjectTagsBlogPostSlug = 1348,
  ProjectTagsBlogPostSpaceId = 1349,
  ProjectTagsBlogPostTags = 1350,
  ProjectTagsBlogPostTitle = 1351,
  ProjectTagsBlogPostUpdated = 1352,
  ProjectTagsBlogPostUpdatedAt = 1353,
  ProjectTagsChildren = 1354,
  ProjectTagsChildrenChildren = 1355,
  ProjectTagsChildrenId = 1356,
  ProjectTagsContentfulId = 1357,
  ProjectTagsCreatedAt = 1358,
  ProjectTagsId = 1359,
  ProjectTagsInternalContent = 1360,
  ProjectTagsInternalContentDigest = 1361,
  ProjectTagsInternalDescription = 1362,
  ProjectTagsInternalFieldOwners = 1363,
  ProjectTagsInternalIgnoreType = 1364,
  ProjectTagsInternalMediaType = 1365,
  ProjectTagsInternalOwner = 1366,
  ProjectTagsInternalType = 1367,
  ProjectTagsLevel = 1368,
  ProjectTagsName = 1369,
  ProjectTagsNodeLocale = 1370,
  ProjectTagsOss = 1371,
  ProjectTagsOssChildren = 1372,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1373,
  ProjectTagsOssContentfulId = 1374,
  ProjectTagsOssCreatedAt = 1375,
  ProjectTagsOssHref = 1376,
  ProjectTagsOssId = 1377,
  ProjectTagsOssName = 1378,
  ProjectTagsOssNodeLocale = 1379,
  ProjectTagsOssSpaceId = 1380,
  ProjectTagsOssStartDate = 1381,
  ProjectTagsOssSubName = 1382,
  ProjectTagsOssTags = 1383,
  ProjectTagsOssUpdatedAt = 1384,
  ProjectTagsParentChildren = 1385,
  ProjectTagsParentId = 1386,
  ProjectTagsProject = 1387,
  ProjectTagsProjectChildren = 1388,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1389,
  ProjectTagsProjectContentfulId = 1390,
  ProjectTagsProjectCreatedAt = 1391,
  ProjectTagsProjectEndDate = 1392,
  ProjectTagsProjectId = 1393,
  ProjectTagsProjectName = 1394,
  ProjectTagsProjectNodeLocale = 1395,
  ProjectTagsProjectSpaceId = 1396,
  ProjectTagsProjectStartDate = 1397,
  ProjectTagsProjectSubName = 1398,
  ProjectTagsProjectTags = 1399,
  ProjectTagsProjectUpdatedAt = 1400,
  ProjectTagsSkillGrpup = 1401,
  ProjectTagsSkillGrpupChildren = 1402,
  ProjectTagsSkillGrpupContentfulId = 1403,
  ProjectTagsSkillGrpupCreatedAt = 1404,
  ProjectTagsSkillGrpupId = 1405,
  ProjectTagsSkillGrpupName = 1406,
  ProjectTagsSkillGrpupNodeLocale = 1407,
  ProjectTagsSkillGrpupSkillMap = 1408,
  ProjectTagsSkillGrpupSkills = 1409,
  ProjectTagsSkillGrpupSpaceId = 1410,
  ProjectTagsSkillGrpupUpdatedAt = 1411,
  ProjectTagsSkillMap = 1412,
  ProjectTagsSkillMapChildren = 1413,
  ProjectTagsSkillMapContentfulId = 1414,
  ProjectTagsSkillMapCreatedAt = 1415,
  ProjectTagsSkillMapExpanded = 1416,
  ProjectTagsSkillMapId = 1417,
  ProjectTagsSkillMapName = 1418,
  ProjectTagsSkillMapNodeLocale = 1419,
  ProjectTagsSkillMapSkillGroups = 1420,
  ProjectTagsSkillMapSkills = 1421,
  ProjectTagsSkillMapSortKey = 1422,
  ProjectTagsSkillMapSpaceId = 1423,
  ProjectTagsSkillMapUpdatedAt = 1424,
  ProjectTagsSpaceId = 1425,
  ProjectTagsSysRevision = 1426,
  ProjectTagsSysType = 1427,
  ProjectTagsUpdatedAt = 1428,
  ProjectUpdatedAt = 1429,
  SpaceId = 1430,
  SvgChildMdxBody = 1431,
  SvgChildMdxChildren = 1432,
  SvgChildMdxChildrenChildren = 1433,
  SvgChildMdxChildrenId = 1434,
  SvgChildMdxExcerpt = 1435,
  SvgChildMdxFileAbsolutePath = 1436,
  SvgChildMdxFrontmatterTitle = 1437,
  SvgChildMdxHeadings = 1438,
  SvgChildMdxHeadingsDepth = 1439,
  SvgChildMdxHeadingsValue = 1440,
  SvgChildMdxHtml = 1441,
  SvgChildMdxId = 1442,
  SvgChildMdxInternalContent = 1443,
  SvgChildMdxInternalContentDigest = 1444,
  SvgChildMdxInternalDescription = 1445,
  SvgChildMdxInternalFieldOwners = 1446,
  SvgChildMdxInternalIgnoreType = 1447,
  SvgChildMdxInternalMediaType = 1448,
  SvgChildMdxInternalOwner = 1449,
  SvgChildMdxInternalType = 1450,
  SvgChildMdxMdxAst = 1451,
  SvgChildMdxParentChildren = 1452,
  SvgChildMdxParentId = 1453,
  SvgChildMdxRawBody = 1454,
  SvgChildMdxSlug = 1455,
  SvgChildMdxTableOfContents = 1456,
  SvgChildMdxTimeToRead = 1457,
  SvgChildMdxWordCountParagraphs = 1458,
  SvgChildMdxWordCountSentences = 1459,
  SvgChildMdxWordCountWords = 1460,
  SvgChildren = 1461,
  SvgChildrenMdx = 1462,
  SvgChildrenMdxBody = 1463,
  SvgChildrenMdxChildren = 1464,
  SvgChildrenMdxChildrenChildren = 1465,
  SvgChildrenMdxChildrenId = 1466,
  SvgChildrenMdxExcerpt = 1467,
  SvgChildrenMdxFileAbsolutePath = 1468,
  SvgChildrenMdxFrontmatterTitle = 1469,
  SvgChildrenMdxHeadings = 1470,
  SvgChildrenMdxHeadingsDepth = 1471,
  SvgChildrenMdxHeadingsValue = 1472,
  SvgChildrenMdxHtml = 1473,
  SvgChildrenMdxId = 1474,
  SvgChildrenMdxInternalContent = 1475,
  SvgChildrenMdxInternalContentDigest = 1476,
  SvgChildrenMdxInternalDescription = 1477,
  SvgChildrenMdxInternalFieldOwners = 1478,
  SvgChildrenMdxInternalIgnoreType = 1479,
  SvgChildrenMdxInternalMediaType = 1480,
  SvgChildrenMdxInternalOwner = 1481,
  SvgChildrenMdxInternalType = 1482,
  SvgChildrenMdxMdxAst = 1483,
  SvgChildrenMdxParentChildren = 1484,
  SvgChildrenMdxParentId = 1485,
  SvgChildrenMdxRawBody = 1486,
  SvgChildrenMdxSlug = 1487,
  SvgChildrenMdxTableOfContents = 1488,
  SvgChildrenMdxTimeToRead = 1489,
  SvgChildrenMdxWordCountParagraphs = 1490,
  SvgChildrenMdxWordCountSentences = 1491,
  SvgChildrenMdxWordCountWords = 1492,
  SvgChildrenChildren = 1493,
  SvgChildrenChildrenChildren = 1494,
  SvgChildrenChildrenId = 1495,
  SvgChildrenId = 1496,
  SvgChildrenInternalContent = 1497,
  SvgChildrenInternalContentDigest = 1498,
  SvgChildrenInternalDescription = 1499,
  SvgChildrenInternalFieldOwners = 1500,
  SvgChildrenInternalIgnoreType = 1501,
  SvgChildrenInternalMediaType = 1502,
  SvgChildrenInternalOwner = 1503,
  SvgChildrenInternalType = 1504,
  SvgChildrenParentChildren = 1505,
  SvgChildrenParentId = 1506,
  SvgId = 1507,
  SvgInternalContent = 1508,
  SvgInternalContentDigest = 1509,
  SvgInternalDescription = 1510,
  SvgInternalFieldOwners = 1511,
  SvgInternalIgnoreType = 1512,
  SvgInternalMediaType = 1513,
  SvgInternalOwner = 1514,
  SvgInternalType = 1515,
  SvgParentChildren = 1516,
  SvgParentChildrenChildren = 1517,
  SvgParentChildrenId = 1518,
  SvgParentId = 1519,
  SvgParentInternalContent = 1520,
  SvgParentInternalContentDigest = 1521,
  SvgParentInternalDescription = 1522,
  SvgParentInternalFieldOwners = 1523,
  SvgParentInternalIgnoreType = 1524,
  SvgParentInternalMediaType = 1525,
  SvgParentInternalOwner = 1526,
  SvgParentInternalType = 1527,
  SvgParentParentChildren = 1528,
  SvgParentParentId = 1529,
  SvgSvg = 1530,
  SvgSysType = 1531,
  SysContentTypeSysId = 1532,
  SysContentTypeSysLinkType = 1533,
  SysContentTypeSysType = 1534,
  SysRevision = 1535,
  SysType = 1536,
  UpdatedAt = 1537,
  WhatICanDo = 1538,
  WhatICanDoChildren = 1539,
  WhatICanDoChildrenChildren = 1540,
  WhatICanDoChildrenChildrenChildren = 1541,
  WhatICanDoChildrenChildrenId = 1542,
  WhatICanDoChildrenId = 1543,
  WhatICanDoChildrenInternalContent = 1544,
  WhatICanDoChildrenInternalContentDigest = 1545,
  WhatICanDoChildrenInternalDescription = 1546,
  WhatICanDoChildrenInternalFieldOwners = 1547,
  WhatICanDoChildrenInternalIgnoreType = 1548,
  WhatICanDoChildrenInternalMediaType = 1549,
  WhatICanDoChildrenInternalOwner = 1550,
  WhatICanDoChildrenInternalType = 1551,
  WhatICanDoChildrenParentChildren = 1552,
  WhatICanDoChildrenParentId = 1553,
  WhatICanDoContentfulId = 1554,
  WhatICanDoCreatedAt = 1555,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildren = 1556,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildrenMdx = 1557,
  WhatICanDoIconChildContentfulIconSvgTextNodeId = 1558,
  WhatICanDoIconChildContentfulIconSvgTextNodeSvg = 1559,
  WhatICanDoIconChildren = 1560,
  WhatICanDoIconChildrenContentfulIconSvgTextNode = 1561,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildren = 1562,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1563,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeId = 1564,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeSvg = 1565,
  WhatICanDoIconChildrenChildren = 1566,
  WhatICanDoIconChildrenId = 1567,
  WhatICanDoIconContact = 1568,
  WhatICanDoIconContactChildren = 1569,
  WhatICanDoIconContactContentfulId = 1570,
  WhatICanDoIconContactCreatedAt = 1571,
  WhatICanDoIconContactHref = 1572,
  WhatICanDoIconContactId = 1573,
  WhatICanDoIconContactName = 1574,
  WhatICanDoIconContactNodeLocale = 1575,
  WhatICanDoIconContactSortKey = 1576,
  WhatICanDoIconContactSpaceId = 1577,
  WhatICanDoIconContactSubName = 1578,
  WhatICanDoIconContactUpdatedAt = 1579,
  WhatICanDoIconContentfulId = 1580,
  WhatICanDoIconCreatedAt = 1581,
  WhatICanDoIconHistory = 1582,
  WhatICanDoIconHistoryChildren = 1583,
  WhatICanDoIconHistoryContentfulId = 1584,
  WhatICanDoIconHistoryCreatedAt = 1585,
  WhatICanDoIconHistoryDate = 1586,
  WhatICanDoIconHistoryId = 1587,
  WhatICanDoIconHistoryName = 1588,
  WhatICanDoIconHistoryNodeLocale = 1589,
  WhatICanDoIconHistorySpaceId = 1590,
  WhatICanDoIconHistorySubName = 1591,
  WhatICanDoIconHistoryUpdatedAt = 1592,
  WhatICanDoIconId = 1593,
  WhatICanDoIconInternalContent = 1594,
  WhatICanDoIconInternalContentDigest = 1595,
  WhatICanDoIconInternalDescription = 1596,
  WhatICanDoIconInternalFieldOwners = 1597,
  WhatICanDoIconInternalIgnoreType = 1598,
  WhatICanDoIconInternalMediaType = 1599,
  WhatICanDoIconInternalOwner = 1600,
  WhatICanDoIconInternalType = 1601,
  WhatICanDoIconName = 1602,
  WhatICanDoIconNodeLocale = 1603,
  WhatICanDoIconOss = 1604,
  WhatICanDoIconOssChildren = 1605,
  WhatICanDoIconOssChildrenContentfulOssDetailTextNode = 1606,
  WhatICanDoIconOssContentfulId = 1607,
  WhatICanDoIconOssCreatedAt = 1608,
  WhatICanDoIconOssHref = 1609,
  WhatICanDoIconOssId = 1610,
  WhatICanDoIconOssName = 1611,
  WhatICanDoIconOssNodeLocale = 1612,
  WhatICanDoIconOssSpaceId = 1613,
  WhatICanDoIconOssStartDate = 1614,
  WhatICanDoIconOssSubName = 1615,
  WhatICanDoIconOssTags = 1616,
  WhatICanDoIconOssUpdatedAt = 1617,
  WhatICanDoIconParentChildren = 1618,
  WhatICanDoIconParentId = 1619,
  WhatICanDoIconProject = 1620,
  WhatICanDoIconProjectChildren = 1621,
  WhatICanDoIconProjectChildrenContentfulProjectDetailTextNode = 1622,
  WhatICanDoIconProjectContentfulId = 1623,
  WhatICanDoIconProjectCreatedAt = 1624,
  WhatICanDoIconProjectEndDate = 1625,
  WhatICanDoIconProjectId = 1626,
  WhatICanDoIconProjectName = 1627,
  WhatICanDoIconProjectNodeLocale = 1628,
  WhatICanDoIconProjectSpaceId = 1629,
  WhatICanDoIconProjectStartDate = 1630,
  WhatICanDoIconProjectSubName = 1631,
  WhatICanDoIconProjectTags = 1632,
  WhatICanDoIconProjectUpdatedAt = 1633,
  WhatICanDoIconSpaceId = 1634,
  WhatICanDoIconSvgChildren = 1635,
  WhatICanDoIconSvgChildrenMdx = 1636,
  WhatICanDoIconSvgId = 1637,
  WhatICanDoIconSvgSvg = 1638,
  WhatICanDoIconSysRevision = 1639,
  WhatICanDoIconSysType = 1640,
  WhatICanDoIconUpdatedAt = 1641,
  WhatICanDoIconWhatICanDo = 1642,
  WhatICanDoIconWhatICanDoChildren = 1643,
  WhatICanDoIconWhatICanDoContentfulId = 1644,
  WhatICanDoIconWhatICanDoCreatedAt = 1645,
  WhatICanDoIconWhatICanDoId = 1646,
  WhatICanDoIconWhatICanDoName = 1647,
  WhatICanDoIconWhatICanDoNodeLocale = 1648,
  WhatICanDoIconWhatICanDoSortKey = 1649,
  WhatICanDoIconWhatICanDoSpaceId = 1650,
  WhatICanDoIconWhatICanDoSubName = 1651,
  WhatICanDoIconWhatICanDoUpdatedAt = 1652,
  WhatICanDoId = 1653,
  WhatICanDoInternalContent = 1654,
  WhatICanDoInternalContentDigest = 1655,
  WhatICanDoInternalDescription = 1656,
  WhatICanDoInternalFieldOwners = 1657,
  WhatICanDoInternalIgnoreType = 1658,
  WhatICanDoInternalMediaType = 1659,
  WhatICanDoInternalOwner = 1660,
  WhatICanDoInternalType = 1661,
  WhatICanDoName = 1662,
  WhatICanDoNodeLocale = 1663,
  WhatICanDoParentChildren = 1664,
  WhatICanDoParentChildrenChildren = 1665,
  WhatICanDoParentChildrenId = 1666,
  WhatICanDoParentId = 1667,
  WhatICanDoParentInternalContent = 1668,
  WhatICanDoParentInternalContentDigest = 1669,
  WhatICanDoParentInternalDescription = 1670,
  WhatICanDoParentInternalFieldOwners = 1671,
  WhatICanDoParentInternalIgnoreType = 1672,
  WhatICanDoParentInternalMediaType = 1673,
  WhatICanDoParentInternalOwner = 1674,
  WhatICanDoParentInternalType = 1675,
  WhatICanDoParentParentChildren = 1676,
  WhatICanDoParentParentId = 1677,
  WhatICanDoSortKey = 1678,
  WhatICanDoSpaceId = 1679,
  WhatICanDoSubName = 1680,
  WhatICanDoSysRevision = 1681,
  WhatICanDoSysType = 1682,
  WhatICanDoUpdatedAt = 1683
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
  IconContactIconSvgDarkSize = 465,
  IconContactIconSvgDarkSpaceId = 466,
  IconContactIconSvgDarkTitle = 467,
  IconContactIconSvgDarkUpdatedAt = 468,
  IconContactIconSvgDarkUrl = 469,
  IconContactIconSvgDarkWidth = 470,
  IconContactIconSvgLightChildren = 471,
  IconContactIconSvgLightContentfulId = 472,
  IconContactIconSvgLightCreatedAt = 473,
  IconContactIconSvgLightDescription = 474,
  IconContactIconSvgLightFilename = 475,
  IconContactIconSvgLightFilesize = 476,
  IconContactIconSvgLightGatsbyImage = 477,
  IconContactIconSvgLightGatsbyImageData = 478,
  IconContactIconSvgLightHeight = 479,
  IconContactIconSvgLightId = 480,
  IconContactIconSvgLightMimeType = 481,
  IconContactIconSvgLightNodeLocale = 482,
  IconContactIconSvgLightPlaceholderUrl = 483,
  IconContactIconSvgLightPublicUrl = 484,
  IconContactIconSvgLightSize = 485,
  IconContactIconSvgLightSpaceId = 486,
  IconContactIconSvgLightTitle = 487,
  IconContactIconSvgLightUpdatedAt = 488,
  IconContactIconSvgLightUrl = 489,
  IconContactIconSvgLightWidth = 490,
  IconContactIconChildren = 491,
  IconContactIconChildrenContentfulIconSvgTextNode = 492,
  IconContactIconContact = 493,
  IconContactIconContentfulId = 494,
  IconContactIconCreatedAt = 495,
  IconContactIconHistory = 496,
  IconContactIconId = 497,
  IconContactIconName = 498,
  IconContactIconNodeLocale = 499,
  IconContactIconOss = 500,
  IconContactIconProject = 501,
  IconContactIconSpaceId = 502,
  IconContactIconUpdatedAt = 503,
  IconContactIconWhatICanDo = 504,
  IconContactId = 505,
  IconContactInternalContent = 506,
  IconContactInternalContentDigest = 507,
  IconContactInternalDescription = 508,
  IconContactInternalFieldOwners = 509,
  IconContactInternalIgnoreType = 510,
  IconContactInternalMediaType = 511,
  IconContactInternalOwner = 512,
  IconContactInternalType = 513,
  IconContactName = 514,
  IconContactNodeLocale = 515,
  IconContactParentChildren = 516,
  IconContactParentId = 517,
  IconContactSortKey = 518,
  IconContactSpaceId = 519,
  IconContactSubName = 520,
  IconContactSysRevision = 521,
  IconContactSysType = 522,
  IconContactUpdatedAt = 523,
  IconContentfulId = 524,
  IconCreatedAt = 525,
  IconHistory = 526,
  IconHistoryChildren = 527,
  IconHistoryChildrenChildren = 528,
  IconHistoryChildrenId = 529,
  IconHistoryContentfulId = 530,
  IconHistoryCreatedAt = 531,
  IconHistoryDate = 532,
  IconHistoryIconChildren = 533,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 534,
  IconHistoryIconContact = 535,
  IconHistoryIconContentfulId = 536,
  IconHistoryIconCreatedAt = 537,
  IconHistoryIconHistory = 538,
  IconHistoryIconId = 539,
  IconHistoryIconName = 540,
  IconHistoryIconNodeLocale = 541,
  IconHistoryIconOss = 542,
  IconHistoryIconProject = 543,
  IconHistoryIconSpaceId = 544,
  IconHistoryIconUpdatedAt = 545,
  IconHistoryIconWhatICanDo = 546,
  IconHistoryId = 547,
  IconHistoryInternalContent = 548,
  IconHistoryInternalContentDigest = 549,
  IconHistoryInternalDescription = 550,
  IconHistoryInternalFieldOwners = 551,
  IconHistoryInternalIgnoreType = 552,
  IconHistoryInternalMediaType = 553,
  IconHistoryInternalOwner = 554,
  IconHistoryInternalType = 555,
  IconHistoryName = 556,
  IconHistoryNodeLocale = 557,
  IconHistoryParentChildren = 558,
  IconHistoryParentId = 559,
  IconHistorySpaceId = 560,
  IconHistorySubName = 561,
  IconHistorySysRevision = 562,
  IconHistorySysType = 563,
  IconHistoryUpdatedAt = 564,
  IconId = 565,
  IconInternalContent = 566,
  IconInternalContentDigest = 567,
  IconInternalDescription = 568,
  IconInternalFieldOwners = 569,
  IconInternalIgnoreType = 570,
  IconInternalMediaType = 571,
  IconInternalOwner = 572,
  IconInternalType = 573,
  IconName = 574,
  IconNodeLocale = 575,
  IconOss = 576,
  IconOssChildContentfulOssDetailTextNodeChildren = 577,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 578,
  IconOssChildContentfulOssDetailTextNodeDetail = 579,
  IconOssChildContentfulOssDetailTextNodeId = 580,
  IconOssChildren = 581,
  IconOssChildrenContentfulOssDetailTextNode = 582,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 583,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 584,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 585,
  IconOssChildrenContentfulOssDetailTextNodeId = 586,
  IconOssChildrenChildren = 587,
  IconOssChildrenId = 588,
  IconOssContentfulId = 589,
  IconOssCreatedAt = 590,
  IconOssDetailChildren = 591,
  IconOssDetailChildrenMdx = 592,
  IconOssDetailDetail = 593,
  IconOssDetailId = 594,
  IconOssHref = 595,
  IconOssIconChildren = 596,
  IconOssIconChildrenContentfulIconSvgTextNode = 597,
  IconOssIconContact = 598,
  IconOssIconContentfulId = 599,
  IconOssIconCreatedAt = 600,
  IconOssIconHistory = 601,
  IconOssIconId = 602,
  IconOssIconName = 603,
  IconOssIconNodeLocale = 604,
  IconOssIconOss = 605,
  IconOssIconProject = 606,
  IconOssIconSpaceId = 607,
  IconOssIconUpdatedAt = 608,
  IconOssIconWhatICanDo = 609,
  IconOssId = 610,
  IconOssImageChildren = 611,
  IconOssImageContentfulId = 612,
  IconOssImageCreatedAt = 613,
  IconOssImageDescription = 614,
  IconOssImageFilename = 615,
  IconOssImageFilesize = 616,
  IconOssImageGatsbyImage = 617,
  IconOssImageGatsbyImageData = 618,
  IconOssImageHeight = 619,
  IconOssImageId = 620,
  IconOssImageMimeType = 621,
  IconOssImageNodeLocale = 622,
  IconOssImagePlaceholderUrl = 623,
  IconOssImagePublicUrl = 624,
  IconOssImageSize = 625,
  IconOssImageSpaceId = 626,
  IconOssImageTitle = 627,
  IconOssImageUpdatedAt = 628,
  IconOssImageUrl = 629,
  IconOssImageWidth = 630,
  IconOssInternalContent = 631,
  IconOssInternalContentDigest = 632,
  IconOssInternalDescription = 633,
  IconOssInternalFieldOwners = 634,
  IconOssInternalIgnoreType = 635,
  IconOssInternalMediaType = 636,
  IconOssInternalOwner = 637,
  IconOssInternalType = 638,
  IconOssName = 639,
  IconOssNodeLocale = 640,
  IconOssParentChildren = 641,
  IconOssParentId = 642,
  IconOssSpaceId = 643,
  IconOssStartDate = 644,
  IconOssSubName = 645,
  IconOssSysRevision = 646,
  IconOssSysType = 647,
  IconOssTags = 648,
  IconOssTagsBlogPost = 649,
  IconOssTagsChildren = 650,
  IconOssTagsContentfulId = 651,
  IconOssTagsCreatedAt = 652,
  IconOssTagsId = 653,
  IconOssTagsLevel = 654,
  IconOssTagsName = 655,
  IconOssTagsNodeLocale = 656,
  IconOssTagsOss = 657,
  IconOssTagsProject = 658,
  IconOssTagsSkillGrpup = 659,
  IconOssTagsSkillMap = 660,
  IconOssTagsSpaceId = 661,
  IconOssTagsUpdatedAt = 662,
  IconOssUpdatedAt = 663,
  IconParentChildren = 664,
  IconParentChildrenChildren = 665,
  IconParentChildrenId = 666,
  IconParentId = 667,
  IconParentInternalContent = 668,
  IconParentInternalContentDigest = 669,
  IconParentInternalDescription = 670,
  IconParentInternalFieldOwners = 671,
  IconParentInternalIgnoreType = 672,
  IconParentInternalMediaType = 673,
  IconParentInternalOwner = 674,
  IconParentInternalType = 675,
  IconParentParentChildren = 676,
  IconParentParentId = 677,
  IconProject = 678,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 679,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 680,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 681,
  IconProjectChildContentfulProjectDetailTextNodeId = 682,
  IconProjectChildren = 683,
  IconProjectChildrenContentfulProjectDetailTextNode = 684,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 685,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 686,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 687,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 688,
  IconProjectChildrenChildren = 689,
  IconProjectChildrenId = 690,
  IconProjectContentfulId = 691,
  IconProjectCreatedAt = 692,
  IconProjectDetailChildren = 693,
  IconProjectDetailChildrenMdx = 694,
  IconProjectDetailDetail = 695,
  IconProjectDetailId = 696,
  IconProjectEndDate = 697,
  IconProjectIconChildren = 698,
  IconProjectIconChildrenContentfulIconSvgTextNode = 699,
  IconProjectIconContact = 700,
  IconProjectIconContentfulId = 701,
  IconProjectIconCreatedAt = 702,
  IconProjectIconHistory = 703,
  IconProjectIconId = 704,
  IconProjectIconName = 705,
  IconProjectIconNodeLocale = 706,
  IconProjectIconOss = 707,
  IconProjectIconProject = 708,
  IconProjectIconSpaceId = 709,
  IconProjectIconUpdatedAt = 710,
  IconProjectIconWhatICanDo = 711,
  IconProjectId = 712,
  IconProjectInternalContent = 713,
  IconProjectInternalContentDigest = 714,
  IconProjectInternalDescription = 715,
  IconProjectInternalFieldOwners = 716,
  IconProjectInternalIgnoreType = 717,
  IconProjectInternalMediaType = 718,
  IconProjectInternalOwner = 719,
  IconProjectInternalType = 720,
  IconProjectName = 721,
  IconProjectNodeLocale = 722,
  IconProjectParentChildren = 723,
  IconProjectParentId = 724,
  IconProjectSpaceId = 725,
  IconProjectStartDate = 726,
  IconProjectSubName = 727,
  IconProjectSysRevision = 728,
  IconProjectSysType = 729,
  IconProjectTags = 730,
  IconProjectTagsBlogPost = 731,
  IconProjectTagsChildren = 732,
  IconProjectTagsContentfulId = 733,
  IconProjectTagsCreatedAt = 734,
  IconProjectTagsId = 735,
  IconProjectTagsLevel = 736,
  IconProjectTagsName = 737,
  IconProjectTagsNodeLocale = 738,
  IconProjectTagsOss = 739,
  IconProjectTagsProject = 740,
  IconProjectTagsSkillGrpup = 741,
  IconProjectTagsSkillMap = 742,
  IconProjectTagsSpaceId = 743,
  IconProjectTagsUpdatedAt = 744,
  IconProjectUpdatedAt = 745,
  IconSpaceId = 746,
  IconSvgChildMdxBody = 747,
  IconSvgChildMdxChildren = 748,
  IconSvgChildMdxExcerpt = 749,
  IconSvgChildMdxFileAbsolutePath = 750,
  IconSvgChildMdxHeadings = 751,
  IconSvgChildMdxHtml = 752,
  IconSvgChildMdxId = 753,
  IconSvgChildMdxMdxAst = 754,
  IconSvgChildMdxRawBody = 755,
  IconSvgChildMdxSlug = 756,
  IconSvgChildMdxTableOfContents = 757,
  IconSvgChildMdxTimeToRead = 758,
  IconSvgChildren = 759,
  IconSvgChildrenMdx = 760,
  IconSvgChildrenMdxBody = 761,
  IconSvgChildrenMdxChildren = 762,
  IconSvgChildrenMdxExcerpt = 763,
  IconSvgChildrenMdxFileAbsolutePath = 764,
  IconSvgChildrenMdxHeadings = 765,
  IconSvgChildrenMdxHtml = 766,
  IconSvgChildrenMdxId = 767,
  IconSvgChildrenMdxMdxAst = 768,
  IconSvgChildrenMdxRawBody = 769,
  IconSvgChildrenMdxSlug = 770,
  IconSvgChildrenMdxTableOfContents = 771,
  IconSvgChildrenMdxTimeToRead = 772,
  IconSvgChildrenChildren = 773,
  IconSvgChildrenId = 774,
  IconSvgId = 775,
  IconSvgInternalContent = 776,
  IconSvgInternalContentDigest = 777,
  IconSvgInternalDescription = 778,
  IconSvgInternalFieldOwners = 779,
  IconSvgInternalIgnoreType = 780,
  IconSvgInternalMediaType = 781,
  IconSvgInternalOwner = 782,
  IconSvgInternalType = 783,
  IconSvgParentChildren = 784,
  IconSvgParentId = 785,
  IconSvgSvg = 786,
  IconSvgSysType = 787,
  IconSysRevision = 788,
  IconSysType = 789,
  IconUpdatedAt = 790,
  IconWhatICanDo = 791,
  IconWhatICanDoChildren = 792,
  IconWhatICanDoChildrenChildren = 793,
  IconWhatICanDoChildrenId = 794,
  IconWhatICanDoContentfulId = 795,
  IconWhatICanDoCreatedAt = 796,
  IconWhatICanDoIconChildren = 797,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 798,
  IconWhatICanDoIconContact = 799,
  IconWhatICanDoIconContentfulId = 800,
  IconWhatICanDoIconCreatedAt = 801,
  IconWhatICanDoIconHistory = 802,
  IconWhatICanDoIconId = 803,
  IconWhatICanDoIconName = 804,
  IconWhatICanDoIconNodeLocale = 805,
  IconWhatICanDoIconOss = 806,
  IconWhatICanDoIconProject = 807,
  IconWhatICanDoIconSpaceId = 808,
  IconWhatICanDoIconUpdatedAt = 809,
  IconWhatICanDoIconWhatICanDo = 810,
  IconWhatICanDoId = 811,
  IconWhatICanDoInternalContent = 812,
  IconWhatICanDoInternalContentDigest = 813,
  IconWhatICanDoInternalDescription = 814,
  IconWhatICanDoInternalFieldOwners = 815,
  IconWhatICanDoInternalIgnoreType = 816,
  IconWhatICanDoInternalMediaType = 817,
  IconWhatICanDoInternalOwner = 818,
  IconWhatICanDoInternalType = 819,
  IconWhatICanDoName = 820,
  IconWhatICanDoNodeLocale = 821,
  IconWhatICanDoParentChildren = 822,
  IconWhatICanDoParentId = 823,
  IconWhatICanDoSortKey = 824,
  IconWhatICanDoSpaceId = 825,
  IconWhatICanDoSubName = 826,
  IconWhatICanDoSysRevision = 827,
  IconWhatICanDoSysType = 828,
  IconWhatICanDoUpdatedAt = 829,
  Id = 830,
  ImageChildren = 831,
  ImageChildrenChildren = 832,
  ImageChildrenChildrenChildren = 833,
  ImageChildrenChildrenId = 834,
  ImageChildrenId = 835,
  ImageChildrenInternalContent = 836,
  ImageChildrenInternalContentDigest = 837,
  ImageChildrenInternalDescription = 838,
  ImageChildrenInternalFieldOwners = 839,
  ImageChildrenInternalIgnoreType = 840,
  ImageChildrenInternalMediaType = 841,
  ImageChildrenInternalOwner = 842,
  ImageChildrenInternalType = 843,
  ImageChildrenParentChildren = 844,
  ImageChildrenParentId = 845,
  ImageContentfulId = 846,
  ImageCreatedAt = 847,
  ImageDescription = 848,
  ImageFileContentType = 849,
  ImageFileDetailsSize = 850,
  ImageFileFileName = 851,
  ImageFileUrl = 852,
  ImageFilename = 853,
  ImageFilesize = 854,
  ImageGatsbyImage = 855,
  ImageGatsbyImageData = 856,
  ImageHeight = 857,
  ImageId = 858,
  ImageInternalContent = 859,
  ImageInternalContentDigest = 860,
  ImageInternalDescription = 861,
  ImageInternalFieldOwners = 862,
  ImageInternalIgnoreType = 863,
  ImageInternalMediaType = 864,
  ImageInternalOwner = 865,
  ImageInternalType = 866,
  ImageMimeType = 867,
  ImageNodeLocale = 868,
  ImageParentChildren = 869,
  ImageParentChildrenChildren = 870,
  ImageParentChildrenId = 871,
  ImageParentId = 872,
  ImageParentInternalContent = 873,
  ImageParentInternalContentDigest = 874,
  ImageParentInternalDescription = 875,
  ImageParentInternalFieldOwners = 876,
  ImageParentInternalIgnoreType = 877,
  ImageParentInternalMediaType = 878,
  ImageParentInternalOwner = 879,
  ImageParentInternalType = 880,
  ImageParentParentChildren = 881,
  ImageParentParentId = 882,
  ImagePlaceholderUrl = 883,
  ImagePublicUrl = 884,
  ImageResizeHeight = 885,
  ImageResizeSrc = 886,
  ImageResizeWidth = 887,
  ImageSize = 888,
  ImageSpaceId = 889,
  ImageSysRevision = 890,
  ImageSysType = 891,
  ImageTitle = 892,
  ImageUpdatedAt = 893,
  ImageUrl = 894,
  ImageWidth = 895,
  InternalContent = 896,
  InternalContentDigest = 897,
  InternalDescription = 898,
  InternalFieldOwners = 899,
  InternalIgnoreType = 900,
  InternalMediaType = 901,
  InternalOwner = 902,
  InternalType = 903,
  Name = 904,
  NodeLocale = 905,
  ParentChildren = 906,
  ParentChildrenChildren = 907,
  ParentChildrenChildrenChildren = 908,
  ParentChildrenChildrenId = 909,
  ParentChildrenId = 910,
  ParentChildrenInternalContent = 911,
  ParentChildrenInternalContentDigest = 912,
  ParentChildrenInternalDescription = 913,
  ParentChildrenInternalFieldOwners = 914,
  ParentChildrenInternalIgnoreType = 915,
  ParentChildrenInternalMediaType = 916,
  ParentChildrenInternalOwner = 917,
  ParentChildrenInternalType = 918,
  ParentChildrenParentChildren = 919,
  ParentChildrenParentId = 920,
  ParentId = 921,
  ParentInternalContent = 922,
  ParentInternalContentDigest = 923,
  ParentInternalDescription = 924,
  ParentInternalFieldOwners = 925,
  ParentInternalIgnoreType = 926,
  ParentInternalMediaType = 927,
  ParentInternalOwner = 928,
  ParentInternalType = 929,
  ParentParentChildren = 930,
  ParentParentChildrenChildren = 931,
  ParentParentChildrenId = 932,
  ParentParentId = 933,
  ParentParentInternalContent = 934,
  ParentParentInternalContentDigest = 935,
  ParentParentInternalDescription = 936,
  ParentParentInternalFieldOwners = 937,
  ParentParentInternalIgnoreType = 938,
  ParentParentInternalMediaType = 939,
  ParentParentInternalOwner = 940,
  ParentParentInternalType = 941,
  ParentParentParentChildren = 942,
  ParentParentParentId = 943,
  SpaceId = 944,
  StartDate = 945,
  SubName = 946,
  SysContentTypeSysId = 947,
  SysContentTypeSysLinkType = 948,
  SysContentTypeSysType = 949,
  SysRevision = 950,
  SysType = 951,
  Tags = 952,
  TagsBlogPost = 953,
  TagsBlogPostCategoryBlogPost = 954,
  TagsBlogPostCategoryChildren = 955,
  TagsBlogPostCategoryContentfulId = 956,
  TagsBlogPostCategoryCreatedAt = 957,
  TagsBlogPostCategoryId = 958,
  TagsBlogPostCategoryName = 959,
  TagsBlogPostCategoryNodeLocale = 960,
  TagsBlogPostCategorySortKey = 961,
  TagsBlogPostCategorySpaceId = 962,
  TagsBlogPostCategoryUpdatedAt = 963,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 964,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 965,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 966,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 967,
  TagsBlogPostChildren = 968,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 969,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 970,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 971,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 972,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 973,
  TagsBlogPostChildrenChildren = 974,
  TagsBlogPostChildrenId = 975,
  TagsBlogPostContentChildren = 976,
  TagsBlogPostContentChildrenMdx = 977,
  TagsBlogPostContentContent = 978,
  TagsBlogPostContentId = 979,
  TagsBlogPostContentfulId = 980,
  TagsBlogPostCreated = 981,
  TagsBlogPostCreatedAt = 982,
  TagsBlogPostExcerpt = 983,
  TagsBlogPostId = 984,
  TagsBlogPostInternalContent = 985,
  TagsBlogPostInternalContentDigest = 986,
  TagsBlogPostInternalDescription = 987,
  TagsBlogPostInternalFieldOwners = 988,
  TagsBlogPostInternalIgnoreType = 989,
  TagsBlogPostInternalMediaType = 990,
  TagsBlogPostInternalOwner = 991,
  TagsBlogPostInternalType = 992,
  TagsBlogPostNodeLocale = 993,
  TagsBlogPostParentChildren = 994,
  TagsBlogPostParentId = 995,
  TagsBlogPostSlug = 996,
  TagsBlogPostSpaceId = 997,
  TagsBlogPostSysRevision = 998,
  TagsBlogPostSysType = 999,
  TagsBlogPostTags = 1000,
  TagsBlogPostTagsBlogPost = 1001,
  TagsBlogPostTagsChildren = 1002,
  TagsBlogPostTagsContentfulId = 1003,
  TagsBlogPostTagsCreatedAt = 1004,
  TagsBlogPostTagsId = 1005,
  TagsBlogPostTagsLevel = 1006,
  TagsBlogPostTagsName = 1007,
  TagsBlogPostTagsNodeLocale = 1008,
  TagsBlogPostTagsOss = 1009,
  TagsBlogPostTagsProject = 1010,
  TagsBlogPostTagsSkillGrpup = 1011,
  TagsBlogPostTagsSkillMap = 1012,
  TagsBlogPostTagsSpaceId = 1013,
  TagsBlogPostTagsUpdatedAt = 1014,
  TagsBlogPostThumbnailChildren = 1015,
  TagsBlogPostThumbnailContentfulId = 1016,
  TagsBlogPostThumbnailCreatedAt = 1017,
  TagsBlogPostThumbnailDescription = 1018,
  TagsBlogPostThumbnailFilename = 1019,
  TagsBlogPostThumbnailFilesize = 1020,
  TagsBlogPostThumbnailGatsbyImage = 1021,
  TagsBlogPostThumbnailGatsbyImageData = 1022,
  TagsBlogPostThumbnailHeight = 1023,
  TagsBlogPostThumbnailId = 1024,
  TagsBlogPostThumbnailMimeType = 1025,
  TagsBlogPostThumbnailNodeLocale = 1026,
  TagsBlogPostThumbnailPlaceholderUrl = 1027,
  TagsBlogPostThumbnailPublicUrl = 1028,
  TagsBlogPostThumbnailSize = 1029,
  TagsBlogPostThumbnailSpaceId = 1030,
  TagsBlogPostThumbnailTitle = 1031,
  TagsBlogPostThumbnailUpdatedAt = 1032,
  TagsBlogPostThumbnailUrl = 1033,
  TagsBlogPostThumbnailWidth = 1034,
  TagsBlogPostTitle = 1035,
  TagsBlogPostUpdated = 1036,
  TagsBlogPostUpdatedAt = 1037,
  TagsChildren = 1038,
  TagsChildrenChildren = 1039,
  TagsChildrenChildrenChildren = 1040,
  TagsChildrenChildrenId = 1041,
  TagsChildrenId = 1042,
  TagsChildrenInternalContent = 1043,
  TagsChildrenInternalContentDigest = 1044,
  TagsChildrenInternalDescription = 1045,
  TagsChildrenInternalFieldOwners = 1046,
  TagsChildrenInternalIgnoreType = 1047,
  TagsChildrenInternalMediaType = 1048,
  TagsChildrenInternalOwner = 1049,
  TagsChildrenInternalType = 1050,
  TagsChildrenParentChildren = 1051,
  TagsChildrenParentId = 1052,
  TagsContentfulId = 1053,
  TagsCreatedAt = 1054,
  TagsId = 1055,
  TagsInternalContent = 1056,
  TagsInternalContentDigest = 1057,
  TagsInternalDescription = 1058,
  TagsInternalFieldOwners = 1059,
  TagsInternalIgnoreType = 1060,
  TagsInternalMediaType = 1061,
  TagsInternalOwner = 1062,
  TagsInternalType = 1063,
  TagsLevel = 1064,
  TagsName = 1065,
  TagsNodeLocale = 1066,
  TagsOss = 1067,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1068,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1069,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1070,
  TagsOssChildContentfulOssDetailTextNodeId = 1071,
  TagsOssChildren = 1072,
  TagsOssChildrenContentfulOssDetailTextNode = 1073,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1074,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1075,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1076,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1077,
  TagsOssChildrenChildren = 1078,
  TagsOssChildrenId = 1079,
  TagsOssContentfulId = 1080,
  TagsOssCreatedAt = 1081,
  TagsOssDetailChildren = 1082,
  TagsOssDetailChildrenMdx = 1083,
  TagsOssDetailDetail = 1084,
  TagsOssDetailId = 1085,
  TagsOssHref = 1086,
  TagsOssIconChildren = 1087,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1088,
  TagsOssIconContact = 1089,
  TagsOssIconContentfulId = 1090,
  TagsOssIconCreatedAt = 1091,
  TagsOssIconHistory = 1092,
  TagsOssIconId = 1093,
  TagsOssIconName = 1094,
  TagsOssIconNodeLocale = 1095,
  TagsOssIconOss = 1096,
  TagsOssIconProject = 1097,
  TagsOssIconSpaceId = 1098,
  TagsOssIconUpdatedAt = 1099,
  TagsOssIconWhatICanDo = 1100,
  TagsOssId = 1101,
  TagsOssImageChildren = 1102,
  TagsOssImageContentfulId = 1103,
  TagsOssImageCreatedAt = 1104,
  TagsOssImageDescription = 1105,
  TagsOssImageFilename = 1106,
  TagsOssImageFilesize = 1107,
  TagsOssImageGatsbyImage = 1108,
  TagsOssImageGatsbyImageData = 1109,
  TagsOssImageHeight = 1110,
  TagsOssImageId = 1111,
  TagsOssImageMimeType = 1112,
  TagsOssImageNodeLocale = 1113,
  TagsOssImagePlaceholderUrl = 1114,
  TagsOssImagePublicUrl = 1115,
  TagsOssImageSize = 1116,
  TagsOssImageSpaceId = 1117,
  TagsOssImageTitle = 1118,
  TagsOssImageUpdatedAt = 1119,
  TagsOssImageUrl = 1120,
  TagsOssImageWidth = 1121,
  TagsOssInternalContent = 1122,
  TagsOssInternalContentDigest = 1123,
  TagsOssInternalDescription = 1124,
  TagsOssInternalFieldOwners = 1125,
  TagsOssInternalIgnoreType = 1126,
  TagsOssInternalMediaType = 1127,
  TagsOssInternalOwner = 1128,
  TagsOssInternalType = 1129,
  TagsOssName = 1130,
  TagsOssNodeLocale = 1131,
  TagsOssParentChildren = 1132,
  TagsOssParentId = 1133,
  TagsOssSpaceId = 1134,
  TagsOssStartDate = 1135,
  TagsOssSubName = 1136,
  TagsOssSysRevision = 1137,
  TagsOssSysType = 1138,
  TagsOssTags = 1139,
  TagsOssTagsBlogPost = 1140,
  TagsOssTagsChildren = 1141,
  TagsOssTagsContentfulId = 1142,
  TagsOssTagsCreatedAt = 1143,
  TagsOssTagsId = 1144,
  TagsOssTagsLevel = 1145,
  TagsOssTagsName = 1146,
  TagsOssTagsNodeLocale = 1147,
  TagsOssTagsOss = 1148,
  TagsOssTagsProject = 1149,
  TagsOssTagsSkillGrpup = 1150,
  TagsOssTagsSkillMap = 1151,
  TagsOssTagsSpaceId = 1152,
  TagsOssTagsUpdatedAt = 1153,
  TagsOssUpdatedAt = 1154,
  TagsParentChildren = 1155,
  TagsParentChildrenChildren = 1156,
  TagsParentChildrenId = 1157,
  TagsParentId = 1158,
  TagsParentInternalContent = 1159,
  TagsParentInternalContentDigest = 1160,
  TagsParentInternalDescription = 1161,
  TagsParentInternalFieldOwners = 1162,
  TagsParentInternalIgnoreType = 1163,
  TagsParentInternalMediaType = 1164,
  TagsParentInternalOwner = 1165,
  TagsParentInternalType = 1166,
  TagsParentParentChildren = 1167,
  TagsParentParentId = 1168,
  TagsProject = 1169,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1170,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1171,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1172,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1173,
  TagsProjectChildren = 1174,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1175,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1176,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1177,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1178,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1179,
  TagsProjectChildrenChildren = 1180,
  TagsProjectChildrenId = 1181,
  TagsProjectContentfulId = 1182,
  TagsProjectCreatedAt = 1183,
  TagsProjectDetailChildren = 1184,
  TagsProjectDetailChildrenMdx = 1185,
  TagsProjectDetailDetail = 1186,
  TagsProjectDetailId = 1187,
  TagsProjectEndDate = 1188,
  TagsProjectIconChildren = 1189,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1190,
  TagsProjectIconContact = 1191,
  TagsProjectIconContentfulId = 1192,
  TagsProjectIconCreatedAt = 1193,
  TagsProjectIconHistory = 1194,
  TagsProjectIconId = 1195,
  TagsProjectIconName = 1196,
  TagsProjectIconNodeLocale = 1197,
  TagsProjectIconOss = 1198,
  TagsProjectIconProject = 1199,
  TagsProjectIconSpaceId = 1200,
  TagsProjectIconUpdatedAt = 1201,
  TagsProjectIconWhatICanDo = 1202,
  TagsProjectId = 1203,
  TagsProjectInternalContent = 1204,
  TagsProjectInternalContentDigest = 1205,
  TagsProjectInternalDescription = 1206,
  TagsProjectInternalFieldOwners = 1207,
  TagsProjectInternalIgnoreType = 1208,
  TagsProjectInternalMediaType = 1209,
  TagsProjectInternalOwner = 1210,
  TagsProjectInternalType = 1211,
  TagsProjectName = 1212,
  TagsProjectNodeLocale = 1213,
  TagsProjectParentChildren = 1214,
  TagsProjectParentId = 1215,
  TagsProjectSpaceId = 1216,
  TagsProjectStartDate = 1217,
  TagsProjectSubName = 1218,
  TagsProjectSysRevision = 1219,
  TagsProjectSysType = 1220,
  TagsProjectTags = 1221,
  TagsProjectTagsBlogPost = 1222,
  TagsProjectTagsChildren = 1223,
  TagsProjectTagsContentfulId = 1224,
  TagsProjectTagsCreatedAt = 1225,
  TagsProjectTagsId = 1226,
  TagsProjectTagsLevel = 1227,
  TagsProjectTagsName = 1228,
  TagsProjectTagsNodeLocale = 1229,
  TagsProjectTagsOss = 1230,
  TagsProjectTagsProject = 1231,
  TagsProjectTagsSkillGrpup = 1232,
  TagsProjectTagsSkillMap = 1233,
  TagsProjectTagsSpaceId = 1234,
  TagsProjectTagsUpdatedAt = 1235,
  TagsProjectUpdatedAt = 1236,
  TagsSkillGrpup = 1237,
  TagsSkillGrpupChildren = 1238,
  TagsSkillGrpupChildrenChildren = 1239,
  TagsSkillGrpupChildrenId = 1240,
  TagsSkillGrpupContentfulId = 1241,
  TagsSkillGrpupCreatedAt = 1242,
  TagsSkillGrpupId = 1243,
  TagsSkillGrpupInternalContent = 1244,
  TagsSkillGrpupInternalContentDigest = 1245,
  TagsSkillGrpupInternalDescription = 1246,
  TagsSkillGrpupInternalFieldOwners = 1247,
  TagsSkillGrpupInternalIgnoreType = 1248,
  TagsSkillGrpupInternalMediaType = 1249,
  TagsSkillGrpupInternalOwner = 1250,
  TagsSkillGrpupInternalType = 1251,
  TagsSkillGrpupName = 1252,
  TagsSkillGrpupNodeLocale = 1253,
  TagsSkillGrpupParentChildren = 1254,
  TagsSkillGrpupParentId = 1255,
  TagsSkillGrpupSkillMap = 1256,
  TagsSkillGrpupSkillMapChildren = 1257,
  TagsSkillGrpupSkillMapContentfulId = 1258,
  TagsSkillGrpupSkillMapCreatedAt = 1259,
  TagsSkillGrpupSkillMapExpanded = 1260,
  TagsSkillGrpupSkillMapId = 1261,
  TagsSkillGrpupSkillMapName = 1262,
  TagsSkillGrpupSkillMapNodeLocale = 1263,
  TagsSkillGrpupSkillMapSkillGroups = 1264,
  TagsSkillGrpupSkillMapSkills = 1265,
  TagsSkillGrpupSkillMapSortKey = 1266,
  TagsSkillGrpupSkillMapSpaceId = 1267,
  TagsSkillGrpupSkillMapUpdatedAt = 1268,
  TagsSkillGrpupSkills = 1269,
  TagsSkillGrpupSkillsBlogPost = 1270,
  TagsSkillGrpupSkillsChildren = 1271,
  TagsSkillGrpupSkillsContentfulId = 1272,
  TagsSkillGrpupSkillsCreatedAt = 1273,
  TagsSkillGrpupSkillsId = 1274,
  TagsSkillGrpupSkillsLevel = 1275,
  TagsSkillGrpupSkillsName = 1276,
  TagsSkillGrpupSkillsNodeLocale = 1277,
  TagsSkillGrpupSkillsOss = 1278,
  TagsSkillGrpupSkillsProject = 1279,
  TagsSkillGrpupSkillsSkillGrpup = 1280,
  TagsSkillGrpupSkillsSkillMap = 1281,
  TagsSkillGrpupSkillsSpaceId = 1282,
  TagsSkillGrpupSkillsUpdatedAt = 1283,
  TagsSkillGrpupSpaceId = 1284,
  TagsSkillGrpupSysRevision = 1285,
  TagsSkillGrpupSysType = 1286,
  TagsSkillGrpupUpdatedAt = 1287,
  TagsSkillMap = 1288,
  TagsSkillMapChildren = 1289,
  TagsSkillMapChildrenChildren = 1290,
  TagsSkillMapChildrenId = 1291,
  TagsSkillMapContentfulId = 1292,
  TagsSkillMapCreatedAt = 1293,
  TagsSkillMapExpanded = 1294,
  TagsSkillMapId = 1295,
  TagsSkillMapInternalContent = 1296,
  TagsSkillMapInternalContentDigest = 1297,
  TagsSkillMapInternalDescription = 1298,
  TagsSkillMapInternalFieldOwners = 1299,
  TagsSkillMapInternalIgnoreType = 1300,
  TagsSkillMapInternalMediaType = 1301,
  TagsSkillMapInternalOwner = 1302,
  TagsSkillMapInternalType = 1303,
  TagsSkillMapName = 1304,
  TagsSkillMapNodeLocale = 1305,
  TagsSkillMapParentChildren = 1306,
  TagsSkillMapParentId = 1307,
  TagsSkillMapSkillGroups = 1308,
  TagsSkillMapSkillGroupsChildren = 1309,
  TagsSkillMapSkillGroupsContentfulId = 1310,
  TagsSkillMapSkillGroupsCreatedAt = 1311,
  TagsSkillMapSkillGroupsId = 1312,
  TagsSkillMapSkillGroupsName = 1313,
  TagsSkillMapSkillGroupsNodeLocale = 1314,
  TagsSkillMapSkillGroupsSkillMap = 1315,
  TagsSkillMapSkillGroupsSkills = 1316,
  TagsSkillMapSkillGroupsSpaceId = 1317,
  TagsSkillMapSkillGroupsUpdatedAt = 1318,
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
  TagsSkillMapSkillsSkillGrpup = 1330,
  TagsSkillMapSkillsSkillMap = 1331,
  TagsSkillMapSkillsSpaceId = 1332,
  TagsSkillMapSkillsUpdatedAt = 1333,
  TagsSkillMapSortKey = 1334,
  TagsSkillMapSpaceId = 1335,
  TagsSkillMapSysRevision = 1336,
  TagsSkillMapSysType = 1337,
  TagsSkillMapUpdatedAt = 1338,
  TagsSpaceId = 1339,
  TagsSysRevision = 1340,
  TagsSysType = 1341,
  TagsUpdatedAt = 1342,
  UpdatedAt = 1343
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
  IconContactIconSvgDarkSize = 465,
  IconContactIconSvgDarkSpaceId = 466,
  IconContactIconSvgDarkTitle = 467,
  IconContactIconSvgDarkUpdatedAt = 468,
  IconContactIconSvgDarkUrl = 469,
  IconContactIconSvgDarkWidth = 470,
  IconContactIconSvgLightChildren = 471,
  IconContactIconSvgLightContentfulId = 472,
  IconContactIconSvgLightCreatedAt = 473,
  IconContactIconSvgLightDescription = 474,
  IconContactIconSvgLightFilename = 475,
  IconContactIconSvgLightFilesize = 476,
  IconContactIconSvgLightGatsbyImage = 477,
  IconContactIconSvgLightGatsbyImageData = 478,
  IconContactIconSvgLightHeight = 479,
  IconContactIconSvgLightId = 480,
  IconContactIconSvgLightMimeType = 481,
  IconContactIconSvgLightNodeLocale = 482,
  IconContactIconSvgLightPlaceholderUrl = 483,
  IconContactIconSvgLightPublicUrl = 484,
  IconContactIconSvgLightSize = 485,
  IconContactIconSvgLightSpaceId = 486,
  IconContactIconSvgLightTitle = 487,
  IconContactIconSvgLightUpdatedAt = 488,
  IconContactIconSvgLightUrl = 489,
  IconContactIconSvgLightWidth = 490,
  IconContactIconChildren = 491,
  IconContactIconChildrenContentfulIconSvgTextNode = 492,
  IconContactIconContact = 493,
  IconContactIconContentfulId = 494,
  IconContactIconCreatedAt = 495,
  IconContactIconHistory = 496,
  IconContactIconId = 497,
  IconContactIconName = 498,
  IconContactIconNodeLocale = 499,
  IconContactIconOss = 500,
  IconContactIconProject = 501,
  IconContactIconSpaceId = 502,
  IconContactIconUpdatedAt = 503,
  IconContactIconWhatICanDo = 504,
  IconContactId = 505,
  IconContactInternalContent = 506,
  IconContactInternalContentDigest = 507,
  IconContactInternalDescription = 508,
  IconContactInternalFieldOwners = 509,
  IconContactInternalIgnoreType = 510,
  IconContactInternalMediaType = 511,
  IconContactInternalOwner = 512,
  IconContactInternalType = 513,
  IconContactName = 514,
  IconContactNodeLocale = 515,
  IconContactParentChildren = 516,
  IconContactParentId = 517,
  IconContactSortKey = 518,
  IconContactSpaceId = 519,
  IconContactSubName = 520,
  IconContactSysRevision = 521,
  IconContactSysType = 522,
  IconContactUpdatedAt = 523,
  IconContentfulId = 524,
  IconCreatedAt = 525,
  IconHistory = 526,
  IconHistoryChildren = 527,
  IconHistoryChildrenChildren = 528,
  IconHistoryChildrenId = 529,
  IconHistoryContentfulId = 530,
  IconHistoryCreatedAt = 531,
  IconHistoryDate = 532,
  IconHistoryIconChildren = 533,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 534,
  IconHistoryIconContact = 535,
  IconHistoryIconContentfulId = 536,
  IconHistoryIconCreatedAt = 537,
  IconHistoryIconHistory = 538,
  IconHistoryIconId = 539,
  IconHistoryIconName = 540,
  IconHistoryIconNodeLocale = 541,
  IconHistoryIconOss = 542,
  IconHistoryIconProject = 543,
  IconHistoryIconSpaceId = 544,
  IconHistoryIconUpdatedAt = 545,
  IconHistoryIconWhatICanDo = 546,
  IconHistoryId = 547,
  IconHistoryInternalContent = 548,
  IconHistoryInternalContentDigest = 549,
  IconHistoryInternalDescription = 550,
  IconHistoryInternalFieldOwners = 551,
  IconHistoryInternalIgnoreType = 552,
  IconHistoryInternalMediaType = 553,
  IconHistoryInternalOwner = 554,
  IconHistoryInternalType = 555,
  IconHistoryName = 556,
  IconHistoryNodeLocale = 557,
  IconHistoryParentChildren = 558,
  IconHistoryParentId = 559,
  IconHistorySpaceId = 560,
  IconHistorySubName = 561,
  IconHistorySysRevision = 562,
  IconHistorySysType = 563,
  IconHistoryUpdatedAt = 564,
  IconId = 565,
  IconInternalContent = 566,
  IconInternalContentDigest = 567,
  IconInternalDescription = 568,
  IconInternalFieldOwners = 569,
  IconInternalIgnoreType = 570,
  IconInternalMediaType = 571,
  IconInternalOwner = 572,
  IconInternalType = 573,
  IconName = 574,
  IconNodeLocale = 575,
  IconOss = 576,
  IconOssChildContentfulOssDetailTextNodeChildren = 577,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 578,
  IconOssChildContentfulOssDetailTextNodeDetail = 579,
  IconOssChildContentfulOssDetailTextNodeId = 580,
  IconOssChildren = 581,
  IconOssChildrenContentfulOssDetailTextNode = 582,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 583,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 584,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 585,
  IconOssChildrenContentfulOssDetailTextNodeId = 586,
  IconOssChildrenChildren = 587,
  IconOssChildrenId = 588,
  IconOssContentfulId = 589,
  IconOssCreatedAt = 590,
  IconOssDetailChildren = 591,
  IconOssDetailChildrenMdx = 592,
  IconOssDetailDetail = 593,
  IconOssDetailId = 594,
  IconOssHref = 595,
  IconOssIconChildren = 596,
  IconOssIconChildrenContentfulIconSvgTextNode = 597,
  IconOssIconContact = 598,
  IconOssIconContentfulId = 599,
  IconOssIconCreatedAt = 600,
  IconOssIconHistory = 601,
  IconOssIconId = 602,
  IconOssIconName = 603,
  IconOssIconNodeLocale = 604,
  IconOssIconOss = 605,
  IconOssIconProject = 606,
  IconOssIconSpaceId = 607,
  IconOssIconUpdatedAt = 608,
  IconOssIconWhatICanDo = 609,
  IconOssId = 610,
  IconOssImageChildren = 611,
  IconOssImageContentfulId = 612,
  IconOssImageCreatedAt = 613,
  IconOssImageDescription = 614,
  IconOssImageFilename = 615,
  IconOssImageFilesize = 616,
  IconOssImageGatsbyImage = 617,
  IconOssImageGatsbyImageData = 618,
  IconOssImageHeight = 619,
  IconOssImageId = 620,
  IconOssImageMimeType = 621,
  IconOssImageNodeLocale = 622,
  IconOssImagePlaceholderUrl = 623,
  IconOssImagePublicUrl = 624,
  IconOssImageSize = 625,
  IconOssImageSpaceId = 626,
  IconOssImageTitle = 627,
  IconOssImageUpdatedAt = 628,
  IconOssImageUrl = 629,
  IconOssImageWidth = 630,
  IconOssInternalContent = 631,
  IconOssInternalContentDigest = 632,
  IconOssInternalDescription = 633,
  IconOssInternalFieldOwners = 634,
  IconOssInternalIgnoreType = 635,
  IconOssInternalMediaType = 636,
  IconOssInternalOwner = 637,
  IconOssInternalType = 638,
  IconOssName = 639,
  IconOssNodeLocale = 640,
  IconOssParentChildren = 641,
  IconOssParentId = 642,
  IconOssSpaceId = 643,
  IconOssStartDate = 644,
  IconOssSubName = 645,
  IconOssSysRevision = 646,
  IconOssSysType = 647,
  IconOssTags = 648,
  IconOssTagsBlogPost = 649,
  IconOssTagsChildren = 650,
  IconOssTagsContentfulId = 651,
  IconOssTagsCreatedAt = 652,
  IconOssTagsId = 653,
  IconOssTagsLevel = 654,
  IconOssTagsName = 655,
  IconOssTagsNodeLocale = 656,
  IconOssTagsOss = 657,
  IconOssTagsProject = 658,
  IconOssTagsSkillGrpup = 659,
  IconOssTagsSkillMap = 660,
  IconOssTagsSpaceId = 661,
  IconOssTagsUpdatedAt = 662,
  IconOssUpdatedAt = 663,
  IconParentChildren = 664,
  IconParentChildrenChildren = 665,
  IconParentChildrenId = 666,
  IconParentId = 667,
  IconParentInternalContent = 668,
  IconParentInternalContentDigest = 669,
  IconParentInternalDescription = 670,
  IconParentInternalFieldOwners = 671,
  IconParentInternalIgnoreType = 672,
  IconParentInternalMediaType = 673,
  IconParentInternalOwner = 674,
  IconParentInternalType = 675,
  IconParentParentChildren = 676,
  IconParentParentId = 677,
  IconProject = 678,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 679,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 680,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 681,
  IconProjectChildContentfulProjectDetailTextNodeId = 682,
  IconProjectChildren = 683,
  IconProjectChildrenContentfulProjectDetailTextNode = 684,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 685,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 686,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 687,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 688,
  IconProjectChildrenChildren = 689,
  IconProjectChildrenId = 690,
  IconProjectContentfulId = 691,
  IconProjectCreatedAt = 692,
  IconProjectDetailChildren = 693,
  IconProjectDetailChildrenMdx = 694,
  IconProjectDetailDetail = 695,
  IconProjectDetailId = 696,
  IconProjectEndDate = 697,
  IconProjectIconChildren = 698,
  IconProjectIconChildrenContentfulIconSvgTextNode = 699,
  IconProjectIconContact = 700,
  IconProjectIconContentfulId = 701,
  IconProjectIconCreatedAt = 702,
  IconProjectIconHistory = 703,
  IconProjectIconId = 704,
  IconProjectIconName = 705,
  IconProjectIconNodeLocale = 706,
  IconProjectIconOss = 707,
  IconProjectIconProject = 708,
  IconProjectIconSpaceId = 709,
  IconProjectIconUpdatedAt = 710,
  IconProjectIconWhatICanDo = 711,
  IconProjectId = 712,
  IconProjectInternalContent = 713,
  IconProjectInternalContentDigest = 714,
  IconProjectInternalDescription = 715,
  IconProjectInternalFieldOwners = 716,
  IconProjectInternalIgnoreType = 717,
  IconProjectInternalMediaType = 718,
  IconProjectInternalOwner = 719,
  IconProjectInternalType = 720,
  IconProjectName = 721,
  IconProjectNodeLocale = 722,
  IconProjectParentChildren = 723,
  IconProjectParentId = 724,
  IconProjectSpaceId = 725,
  IconProjectStartDate = 726,
  IconProjectSubName = 727,
  IconProjectSysRevision = 728,
  IconProjectSysType = 729,
  IconProjectTags = 730,
  IconProjectTagsBlogPost = 731,
  IconProjectTagsChildren = 732,
  IconProjectTagsContentfulId = 733,
  IconProjectTagsCreatedAt = 734,
  IconProjectTagsId = 735,
  IconProjectTagsLevel = 736,
  IconProjectTagsName = 737,
  IconProjectTagsNodeLocale = 738,
  IconProjectTagsOss = 739,
  IconProjectTagsProject = 740,
  IconProjectTagsSkillGrpup = 741,
  IconProjectTagsSkillMap = 742,
  IconProjectTagsSpaceId = 743,
  IconProjectTagsUpdatedAt = 744,
  IconProjectUpdatedAt = 745,
  IconSpaceId = 746,
  IconSvgChildMdxBody = 747,
  IconSvgChildMdxChildren = 748,
  IconSvgChildMdxExcerpt = 749,
  IconSvgChildMdxFileAbsolutePath = 750,
  IconSvgChildMdxHeadings = 751,
  IconSvgChildMdxHtml = 752,
  IconSvgChildMdxId = 753,
  IconSvgChildMdxMdxAst = 754,
  IconSvgChildMdxRawBody = 755,
  IconSvgChildMdxSlug = 756,
  IconSvgChildMdxTableOfContents = 757,
  IconSvgChildMdxTimeToRead = 758,
  IconSvgChildren = 759,
  IconSvgChildrenMdx = 760,
  IconSvgChildrenMdxBody = 761,
  IconSvgChildrenMdxChildren = 762,
  IconSvgChildrenMdxExcerpt = 763,
  IconSvgChildrenMdxFileAbsolutePath = 764,
  IconSvgChildrenMdxHeadings = 765,
  IconSvgChildrenMdxHtml = 766,
  IconSvgChildrenMdxId = 767,
  IconSvgChildrenMdxMdxAst = 768,
  IconSvgChildrenMdxRawBody = 769,
  IconSvgChildrenMdxSlug = 770,
  IconSvgChildrenMdxTableOfContents = 771,
  IconSvgChildrenMdxTimeToRead = 772,
  IconSvgChildrenChildren = 773,
  IconSvgChildrenId = 774,
  IconSvgId = 775,
  IconSvgInternalContent = 776,
  IconSvgInternalContentDigest = 777,
  IconSvgInternalDescription = 778,
  IconSvgInternalFieldOwners = 779,
  IconSvgInternalIgnoreType = 780,
  IconSvgInternalMediaType = 781,
  IconSvgInternalOwner = 782,
  IconSvgInternalType = 783,
  IconSvgParentChildren = 784,
  IconSvgParentId = 785,
  IconSvgSvg = 786,
  IconSvgSysType = 787,
  IconSysRevision = 788,
  IconSysType = 789,
  IconUpdatedAt = 790,
  IconWhatICanDo = 791,
  IconWhatICanDoChildren = 792,
  IconWhatICanDoChildrenChildren = 793,
  IconWhatICanDoChildrenId = 794,
  IconWhatICanDoContentfulId = 795,
  IconWhatICanDoCreatedAt = 796,
  IconWhatICanDoIconChildren = 797,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 798,
  IconWhatICanDoIconContact = 799,
  IconWhatICanDoIconContentfulId = 800,
  IconWhatICanDoIconCreatedAt = 801,
  IconWhatICanDoIconHistory = 802,
  IconWhatICanDoIconId = 803,
  IconWhatICanDoIconName = 804,
  IconWhatICanDoIconNodeLocale = 805,
  IconWhatICanDoIconOss = 806,
  IconWhatICanDoIconProject = 807,
  IconWhatICanDoIconSpaceId = 808,
  IconWhatICanDoIconUpdatedAt = 809,
  IconWhatICanDoIconWhatICanDo = 810,
  IconWhatICanDoId = 811,
  IconWhatICanDoInternalContent = 812,
  IconWhatICanDoInternalContentDigest = 813,
  IconWhatICanDoInternalDescription = 814,
  IconWhatICanDoInternalFieldOwners = 815,
  IconWhatICanDoInternalIgnoreType = 816,
  IconWhatICanDoInternalMediaType = 817,
  IconWhatICanDoInternalOwner = 818,
  IconWhatICanDoInternalType = 819,
  IconWhatICanDoName = 820,
  IconWhatICanDoNodeLocale = 821,
  IconWhatICanDoParentChildren = 822,
  IconWhatICanDoParentId = 823,
  IconWhatICanDoSortKey = 824,
  IconWhatICanDoSpaceId = 825,
  IconWhatICanDoSubName = 826,
  IconWhatICanDoSysRevision = 827,
  IconWhatICanDoSysType = 828,
  IconWhatICanDoUpdatedAt = 829,
  Id = 830,
  InternalContent = 831,
  InternalContentDigest = 832,
  InternalDescription = 833,
  InternalFieldOwners = 834,
  InternalIgnoreType = 835,
  InternalMediaType = 836,
  InternalOwner = 837,
  InternalType = 838,
  Name = 839,
  NodeLocale = 840,
  ParentChildren = 841,
  ParentChildrenChildren = 842,
  ParentChildrenChildrenChildren = 843,
  ParentChildrenChildrenId = 844,
  ParentChildrenId = 845,
  ParentChildrenInternalContent = 846,
  ParentChildrenInternalContentDigest = 847,
  ParentChildrenInternalDescription = 848,
  ParentChildrenInternalFieldOwners = 849,
  ParentChildrenInternalIgnoreType = 850,
  ParentChildrenInternalMediaType = 851,
  ParentChildrenInternalOwner = 852,
  ParentChildrenInternalType = 853,
  ParentChildrenParentChildren = 854,
  ParentChildrenParentId = 855,
  ParentId = 856,
  ParentInternalContent = 857,
  ParentInternalContentDigest = 858,
  ParentInternalDescription = 859,
  ParentInternalFieldOwners = 860,
  ParentInternalIgnoreType = 861,
  ParentInternalMediaType = 862,
  ParentInternalOwner = 863,
  ParentInternalType = 864,
  ParentParentChildren = 865,
  ParentParentChildrenChildren = 866,
  ParentParentChildrenId = 867,
  ParentParentId = 868,
  ParentParentInternalContent = 869,
  ParentParentInternalContentDigest = 870,
  ParentParentInternalDescription = 871,
  ParentParentInternalFieldOwners = 872,
  ParentParentInternalIgnoreType = 873,
  ParentParentInternalMediaType = 874,
  ParentParentInternalOwner = 875,
  ParentParentInternalType = 876,
  ParentParentParentChildren = 877,
  ParentParentParentId = 878,
  SpaceId = 879,
  StartDate = 880,
  SubName = 881,
  SysContentTypeSysId = 882,
  SysContentTypeSysLinkType = 883,
  SysContentTypeSysType = 884,
  SysRevision = 885,
  SysType = 886,
  Tags = 887,
  TagsBlogPost = 888,
  TagsBlogPostCategoryBlogPost = 889,
  TagsBlogPostCategoryChildren = 890,
  TagsBlogPostCategoryContentfulId = 891,
  TagsBlogPostCategoryCreatedAt = 892,
  TagsBlogPostCategoryId = 893,
  TagsBlogPostCategoryName = 894,
  TagsBlogPostCategoryNodeLocale = 895,
  TagsBlogPostCategorySortKey = 896,
  TagsBlogPostCategorySpaceId = 897,
  TagsBlogPostCategoryUpdatedAt = 898,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 899,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 900,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 901,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 902,
  TagsBlogPostChildren = 903,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 904,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 905,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 906,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 907,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 908,
  TagsBlogPostChildrenChildren = 909,
  TagsBlogPostChildrenId = 910,
  TagsBlogPostContentChildren = 911,
  TagsBlogPostContentChildrenMdx = 912,
  TagsBlogPostContentContent = 913,
  TagsBlogPostContentId = 914,
  TagsBlogPostContentfulId = 915,
  TagsBlogPostCreated = 916,
  TagsBlogPostCreatedAt = 917,
  TagsBlogPostExcerpt = 918,
  TagsBlogPostId = 919,
  TagsBlogPostInternalContent = 920,
  TagsBlogPostInternalContentDigest = 921,
  TagsBlogPostInternalDescription = 922,
  TagsBlogPostInternalFieldOwners = 923,
  TagsBlogPostInternalIgnoreType = 924,
  TagsBlogPostInternalMediaType = 925,
  TagsBlogPostInternalOwner = 926,
  TagsBlogPostInternalType = 927,
  TagsBlogPostNodeLocale = 928,
  TagsBlogPostParentChildren = 929,
  TagsBlogPostParentId = 930,
  TagsBlogPostSlug = 931,
  TagsBlogPostSpaceId = 932,
  TagsBlogPostSysRevision = 933,
  TagsBlogPostSysType = 934,
  TagsBlogPostTags = 935,
  TagsBlogPostTagsBlogPost = 936,
  TagsBlogPostTagsChildren = 937,
  TagsBlogPostTagsContentfulId = 938,
  TagsBlogPostTagsCreatedAt = 939,
  TagsBlogPostTagsId = 940,
  TagsBlogPostTagsLevel = 941,
  TagsBlogPostTagsName = 942,
  TagsBlogPostTagsNodeLocale = 943,
  TagsBlogPostTagsOss = 944,
  TagsBlogPostTagsProject = 945,
  TagsBlogPostTagsSkillGrpup = 946,
  TagsBlogPostTagsSkillMap = 947,
  TagsBlogPostTagsSpaceId = 948,
  TagsBlogPostTagsUpdatedAt = 949,
  TagsBlogPostThumbnailChildren = 950,
  TagsBlogPostThumbnailContentfulId = 951,
  TagsBlogPostThumbnailCreatedAt = 952,
  TagsBlogPostThumbnailDescription = 953,
  TagsBlogPostThumbnailFilename = 954,
  TagsBlogPostThumbnailFilesize = 955,
  TagsBlogPostThumbnailGatsbyImage = 956,
  TagsBlogPostThumbnailGatsbyImageData = 957,
  TagsBlogPostThumbnailHeight = 958,
  TagsBlogPostThumbnailId = 959,
  TagsBlogPostThumbnailMimeType = 960,
  TagsBlogPostThumbnailNodeLocale = 961,
  TagsBlogPostThumbnailPlaceholderUrl = 962,
  TagsBlogPostThumbnailPublicUrl = 963,
  TagsBlogPostThumbnailSize = 964,
  TagsBlogPostThumbnailSpaceId = 965,
  TagsBlogPostThumbnailTitle = 966,
  TagsBlogPostThumbnailUpdatedAt = 967,
  TagsBlogPostThumbnailUrl = 968,
  TagsBlogPostThumbnailWidth = 969,
  TagsBlogPostTitle = 970,
  TagsBlogPostUpdated = 971,
  TagsBlogPostUpdatedAt = 972,
  TagsChildren = 973,
  TagsChildrenChildren = 974,
  TagsChildrenChildrenChildren = 975,
  TagsChildrenChildrenId = 976,
  TagsChildrenId = 977,
  TagsChildrenInternalContent = 978,
  TagsChildrenInternalContentDigest = 979,
  TagsChildrenInternalDescription = 980,
  TagsChildrenInternalFieldOwners = 981,
  TagsChildrenInternalIgnoreType = 982,
  TagsChildrenInternalMediaType = 983,
  TagsChildrenInternalOwner = 984,
  TagsChildrenInternalType = 985,
  TagsChildrenParentChildren = 986,
  TagsChildrenParentId = 987,
  TagsContentfulId = 988,
  TagsCreatedAt = 989,
  TagsId = 990,
  TagsInternalContent = 991,
  TagsInternalContentDigest = 992,
  TagsInternalDescription = 993,
  TagsInternalFieldOwners = 994,
  TagsInternalIgnoreType = 995,
  TagsInternalMediaType = 996,
  TagsInternalOwner = 997,
  TagsInternalType = 998,
  TagsLevel = 999,
  TagsName = 1000,
  TagsNodeLocale = 1001,
  TagsOss = 1002,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1003,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1004,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1005,
  TagsOssChildContentfulOssDetailTextNodeId = 1006,
  TagsOssChildren = 1007,
  TagsOssChildrenContentfulOssDetailTextNode = 1008,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1009,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1010,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1011,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1012,
  TagsOssChildrenChildren = 1013,
  TagsOssChildrenId = 1014,
  TagsOssContentfulId = 1015,
  TagsOssCreatedAt = 1016,
  TagsOssDetailChildren = 1017,
  TagsOssDetailChildrenMdx = 1018,
  TagsOssDetailDetail = 1019,
  TagsOssDetailId = 1020,
  TagsOssHref = 1021,
  TagsOssIconChildren = 1022,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1023,
  TagsOssIconContact = 1024,
  TagsOssIconContentfulId = 1025,
  TagsOssIconCreatedAt = 1026,
  TagsOssIconHistory = 1027,
  TagsOssIconId = 1028,
  TagsOssIconName = 1029,
  TagsOssIconNodeLocale = 1030,
  TagsOssIconOss = 1031,
  TagsOssIconProject = 1032,
  TagsOssIconSpaceId = 1033,
  TagsOssIconUpdatedAt = 1034,
  TagsOssIconWhatICanDo = 1035,
  TagsOssId = 1036,
  TagsOssImageChildren = 1037,
  TagsOssImageContentfulId = 1038,
  TagsOssImageCreatedAt = 1039,
  TagsOssImageDescription = 1040,
  TagsOssImageFilename = 1041,
  TagsOssImageFilesize = 1042,
  TagsOssImageGatsbyImage = 1043,
  TagsOssImageGatsbyImageData = 1044,
  TagsOssImageHeight = 1045,
  TagsOssImageId = 1046,
  TagsOssImageMimeType = 1047,
  TagsOssImageNodeLocale = 1048,
  TagsOssImagePlaceholderUrl = 1049,
  TagsOssImagePublicUrl = 1050,
  TagsOssImageSize = 1051,
  TagsOssImageSpaceId = 1052,
  TagsOssImageTitle = 1053,
  TagsOssImageUpdatedAt = 1054,
  TagsOssImageUrl = 1055,
  TagsOssImageWidth = 1056,
  TagsOssInternalContent = 1057,
  TagsOssInternalContentDigest = 1058,
  TagsOssInternalDescription = 1059,
  TagsOssInternalFieldOwners = 1060,
  TagsOssInternalIgnoreType = 1061,
  TagsOssInternalMediaType = 1062,
  TagsOssInternalOwner = 1063,
  TagsOssInternalType = 1064,
  TagsOssName = 1065,
  TagsOssNodeLocale = 1066,
  TagsOssParentChildren = 1067,
  TagsOssParentId = 1068,
  TagsOssSpaceId = 1069,
  TagsOssStartDate = 1070,
  TagsOssSubName = 1071,
  TagsOssSysRevision = 1072,
  TagsOssSysType = 1073,
  TagsOssTags = 1074,
  TagsOssTagsBlogPost = 1075,
  TagsOssTagsChildren = 1076,
  TagsOssTagsContentfulId = 1077,
  TagsOssTagsCreatedAt = 1078,
  TagsOssTagsId = 1079,
  TagsOssTagsLevel = 1080,
  TagsOssTagsName = 1081,
  TagsOssTagsNodeLocale = 1082,
  TagsOssTagsOss = 1083,
  TagsOssTagsProject = 1084,
  TagsOssTagsSkillGrpup = 1085,
  TagsOssTagsSkillMap = 1086,
  TagsOssTagsSpaceId = 1087,
  TagsOssTagsUpdatedAt = 1088,
  TagsOssUpdatedAt = 1089,
  TagsParentChildren = 1090,
  TagsParentChildrenChildren = 1091,
  TagsParentChildrenId = 1092,
  TagsParentId = 1093,
  TagsParentInternalContent = 1094,
  TagsParentInternalContentDigest = 1095,
  TagsParentInternalDescription = 1096,
  TagsParentInternalFieldOwners = 1097,
  TagsParentInternalIgnoreType = 1098,
  TagsParentInternalMediaType = 1099,
  TagsParentInternalOwner = 1100,
  TagsParentInternalType = 1101,
  TagsParentParentChildren = 1102,
  TagsParentParentId = 1103,
  TagsProject = 1104,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1105,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1106,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1107,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1108,
  TagsProjectChildren = 1109,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1110,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1111,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1112,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1113,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1114,
  TagsProjectChildrenChildren = 1115,
  TagsProjectChildrenId = 1116,
  TagsProjectContentfulId = 1117,
  TagsProjectCreatedAt = 1118,
  TagsProjectDetailChildren = 1119,
  TagsProjectDetailChildrenMdx = 1120,
  TagsProjectDetailDetail = 1121,
  TagsProjectDetailId = 1122,
  TagsProjectEndDate = 1123,
  TagsProjectIconChildren = 1124,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1125,
  TagsProjectIconContact = 1126,
  TagsProjectIconContentfulId = 1127,
  TagsProjectIconCreatedAt = 1128,
  TagsProjectIconHistory = 1129,
  TagsProjectIconId = 1130,
  TagsProjectIconName = 1131,
  TagsProjectIconNodeLocale = 1132,
  TagsProjectIconOss = 1133,
  TagsProjectIconProject = 1134,
  TagsProjectIconSpaceId = 1135,
  TagsProjectIconUpdatedAt = 1136,
  TagsProjectIconWhatICanDo = 1137,
  TagsProjectId = 1138,
  TagsProjectInternalContent = 1139,
  TagsProjectInternalContentDigest = 1140,
  TagsProjectInternalDescription = 1141,
  TagsProjectInternalFieldOwners = 1142,
  TagsProjectInternalIgnoreType = 1143,
  TagsProjectInternalMediaType = 1144,
  TagsProjectInternalOwner = 1145,
  TagsProjectInternalType = 1146,
  TagsProjectName = 1147,
  TagsProjectNodeLocale = 1148,
  TagsProjectParentChildren = 1149,
  TagsProjectParentId = 1150,
  TagsProjectSpaceId = 1151,
  TagsProjectStartDate = 1152,
  TagsProjectSubName = 1153,
  TagsProjectSysRevision = 1154,
  TagsProjectSysType = 1155,
  TagsProjectTags = 1156,
  TagsProjectTagsBlogPost = 1157,
  TagsProjectTagsChildren = 1158,
  TagsProjectTagsContentfulId = 1159,
  TagsProjectTagsCreatedAt = 1160,
  TagsProjectTagsId = 1161,
  TagsProjectTagsLevel = 1162,
  TagsProjectTagsName = 1163,
  TagsProjectTagsNodeLocale = 1164,
  TagsProjectTagsOss = 1165,
  TagsProjectTagsProject = 1166,
  TagsProjectTagsSkillGrpup = 1167,
  TagsProjectTagsSkillMap = 1168,
  TagsProjectTagsSpaceId = 1169,
  TagsProjectTagsUpdatedAt = 1170,
  TagsProjectUpdatedAt = 1171,
  TagsSkillGrpup = 1172,
  TagsSkillGrpupChildren = 1173,
  TagsSkillGrpupChildrenChildren = 1174,
  TagsSkillGrpupChildrenId = 1175,
  TagsSkillGrpupContentfulId = 1176,
  TagsSkillGrpupCreatedAt = 1177,
  TagsSkillGrpupId = 1178,
  TagsSkillGrpupInternalContent = 1179,
  TagsSkillGrpupInternalContentDigest = 1180,
  TagsSkillGrpupInternalDescription = 1181,
  TagsSkillGrpupInternalFieldOwners = 1182,
  TagsSkillGrpupInternalIgnoreType = 1183,
  TagsSkillGrpupInternalMediaType = 1184,
  TagsSkillGrpupInternalOwner = 1185,
  TagsSkillGrpupInternalType = 1186,
  TagsSkillGrpupName = 1187,
  TagsSkillGrpupNodeLocale = 1188,
  TagsSkillGrpupParentChildren = 1189,
  TagsSkillGrpupParentId = 1190,
  TagsSkillGrpupSkillMap = 1191,
  TagsSkillGrpupSkillMapChildren = 1192,
  TagsSkillGrpupSkillMapContentfulId = 1193,
  TagsSkillGrpupSkillMapCreatedAt = 1194,
  TagsSkillGrpupSkillMapExpanded = 1195,
  TagsSkillGrpupSkillMapId = 1196,
  TagsSkillGrpupSkillMapName = 1197,
  TagsSkillGrpupSkillMapNodeLocale = 1198,
  TagsSkillGrpupSkillMapSkillGroups = 1199,
  TagsSkillGrpupSkillMapSkills = 1200,
  TagsSkillGrpupSkillMapSortKey = 1201,
  TagsSkillGrpupSkillMapSpaceId = 1202,
  TagsSkillGrpupSkillMapUpdatedAt = 1203,
  TagsSkillGrpupSkills = 1204,
  TagsSkillGrpupSkillsBlogPost = 1205,
  TagsSkillGrpupSkillsChildren = 1206,
  TagsSkillGrpupSkillsContentfulId = 1207,
  TagsSkillGrpupSkillsCreatedAt = 1208,
  TagsSkillGrpupSkillsId = 1209,
  TagsSkillGrpupSkillsLevel = 1210,
  TagsSkillGrpupSkillsName = 1211,
  TagsSkillGrpupSkillsNodeLocale = 1212,
  TagsSkillGrpupSkillsOss = 1213,
  TagsSkillGrpupSkillsProject = 1214,
  TagsSkillGrpupSkillsSkillGrpup = 1215,
  TagsSkillGrpupSkillsSkillMap = 1216,
  TagsSkillGrpupSkillsSpaceId = 1217,
  TagsSkillGrpupSkillsUpdatedAt = 1218,
  TagsSkillGrpupSpaceId = 1219,
  TagsSkillGrpupSysRevision = 1220,
  TagsSkillGrpupSysType = 1221,
  TagsSkillGrpupUpdatedAt = 1222,
  TagsSkillMap = 1223,
  TagsSkillMapChildren = 1224,
  TagsSkillMapChildrenChildren = 1225,
  TagsSkillMapChildrenId = 1226,
  TagsSkillMapContentfulId = 1227,
  TagsSkillMapCreatedAt = 1228,
  TagsSkillMapExpanded = 1229,
  TagsSkillMapId = 1230,
  TagsSkillMapInternalContent = 1231,
  TagsSkillMapInternalContentDigest = 1232,
  TagsSkillMapInternalDescription = 1233,
  TagsSkillMapInternalFieldOwners = 1234,
  TagsSkillMapInternalIgnoreType = 1235,
  TagsSkillMapInternalMediaType = 1236,
  TagsSkillMapInternalOwner = 1237,
  TagsSkillMapInternalType = 1238,
  TagsSkillMapName = 1239,
  TagsSkillMapNodeLocale = 1240,
  TagsSkillMapParentChildren = 1241,
  TagsSkillMapParentId = 1242,
  TagsSkillMapSkillGroups = 1243,
  TagsSkillMapSkillGroupsChildren = 1244,
  TagsSkillMapSkillGroupsContentfulId = 1245,
  TagsSkillMapSkillGroupsCreatedAt = 1246,
  TagsSkillMapSkillGroupsId = 1247,
  TagsSkillMapSkillGroupsName = 1248,
  TagsSkillMapSkillGroupsNodeLocale = 1249,
  TagsSkillMapSkillGroupsSkillMap = 1250,
  TagsSkillMapSkillGroupsSkills = 1251,
  TagsSkillMapSkillGroupsSpaceId = 1252,
  TagsSkillMapSkillGroupsUpdatedAt = 1253,
  TagsSkillMapSkills = 1254,
  TagsSkillMapSkillsBlogPost = 1255,
  TagsSkillMapSkillsChildren = 1256,
  TagsSkillMapSkillsContentfulId = 1257,
  TagsSkillMapSkillsCreatedAt = 1258,
  TagsSkillMapSkillsId = 1259,
  TagsSkillMapSkillsLevel = 1260,
  TagsSkillMapSkillsName = 1261,
  TagsSkillMapSkillsNodeLocale = 1262,
  TagsSkillMapSkillsOss = 1263,
  TagsSkillMapSkillsProject = 1264,
  TagsSkillMapSkillsSkillGrpup = 1265,
  TagsSkillMapSkillsSkillMap = 1266,
  TagsSkillMapSkillsSpaceId = 1267,
  TagsSkillMapSkillsUpdatedAt = 1268,
  TagsSkillMapSortKey = 1269,
  TagsSkillMapSpaceId = 1270,
  TagsSkillMapSysRevision = 1271,
  TagsSkillMapSysType = 1272,
  TagsSkillMapUpdatedAt = 1273,
  TagsSpaceId = 1274,
  TagsSysRevision = 1275,
  TagsSysType = 1276,
  TagsUpdatedAt = 1277,
  UpdatedAt = 1278
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

export type ContentfulSkillGrpup = ContentfulEntry & ContentfulReference & Node & {
  children: Array<Node>;
  contentful_id: Scalars['String'];
  createdAt: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  node_locale: Scalars['String'];
  parent: Maybe<Node>;
  skill_map: Maybe<Array<Maybe<ContentfulSkillMap>>>;
  skills: Maybe<Array<Maybe<ContentfulTag>>>;
  spaceId: Maybe<Scalars['String']>;
  sys: Maybe<ContentfulSkillGrpupSys>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulSkillGrpupCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulSkillGrpupUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulSkillGrpupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulSkillGrpupEdge>;
  group: Array<ContentfulSkillGrpupGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulSkillGrpup>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulSkillGrpupConnectionDistinctArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupConnectionGroupArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulSkillGrpupConnectionMaxArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupConnectionMinArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupConnectionSumArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};

export type ContentfulSkillGrpupEdge = {
  next: Maybe<ContentfulSkillGrpup>;
  node: ContentfulSkillGrpup;
  previous: Maybe<ContentfulSkillGrpup>;
};

export enum ContentfulSkillGrpupFieldsEnum {
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
  NodeLocale = 51,
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
  SkillMap = 90,
  SkillMapChildren = 91,
  SkillMapChildrenChildren = 92,
  SkillMapChildrenChildrenChildren = 93,
  SkillMapChildrenChildrenId = 94,
  SkillMapChildrenId = 95,
  SkillMapChildrenInternalContent = 96,
  SkillMapChildrenInternalContentDigest = 97,
  SkillMapChildrenInternalDescription = 98,
  SkillMapChildrenInternalFieldOwners = 99,
  SkillMapChildrenInternalIgnoreType = 100,
  SkillMapChildrenInternalMediaType = 101,
  SkillMapChildrenInternalOwner = 102,
  SkillMapChildrenInternalType = 103,
  SkillMapChildrenParentChildren = 104,
  SkillMapChildrenParentId = 105,
  SkillMapContentfulId = 106,
  SkillMapCreatedAt = 107,
  SkillMapExpanded = 108,
  SkillMapId = 109,
  SkillMapInternalContent = 110,
  SkillMapInternalContentDigest = 111,
  SkillMapInternalDescription = 112,
  SkillMapInternalFieldOwners = 113,
  SkillMapInternalIgnoreType = 114,
  SkillMapInternalMediaType = 115,
  SkillMapInternalOwner = 116,
  SkillMapInternalType = 117,
  SkillMapName = 118,
  SkillMapNodeLocale = 119,
  SkillMapParentChildren = 120,
  SkillMapParentChildrenChildren = 121,
  SkillMapParentChildrenId = 122,
  SkillMapParentId = 123,
  SkillMapParentInternalContent = 124,
  SkillMapParentInternalContentDigest = 125,
  SkillMapParentInternalDescription = 126,
  SkillMapParentInternalFieldOwners = 127,
  SkillMapParentInternalIgnoreType = 128,
  SkillMapParentInternalMediaType = 129,
  SkillMapParentInternalOwner = 130,
  SkillMapParentInternalType = 131,
  SkillMapParentParentChildren = 132,
  SkillMapParentParentId = 133,
  SkillMapSkillGroups = 134,
  SkillMapSkillGroupsChildren = 135,
  SkillMapSkillGroupsChildrenChildren = 136,
  SkillMapSkillGroupsChildrenId = 137,
  SkillMapSkillGroupsContentfulId = 138,
  SkillMapSkillGroupsCreatedAt = 139,
  SkillMapSkillGroupsId = 140,
  SkillMapSkillGroupsInternalContent = 141,
  SkillMapSkillGroupsInternalContentDigest = 142,
  SkillMapSkillGroupsInternalDescription = 143,
  SkillMapSkillGroupsInternalFieldOwners = 144,
  SkillMapSkillGroupsInternalIgnoreType = 145,
  SkillMapSkillGroupsInternalMediaType = 146,
  SkillMapSkillGroupsInternalOwner = 147,
  SkillMapSkillGroupsInternalType = 148,
  SkillMapSkillGroupsName = 149,
  SkillMapSkillGroupsNodeLocale = 150,
  SkillMapSkillGroupsParentChildren = 151,
  SkillMapSkillGroupsParentId = 152,
  SkillMapSkillGroupsSkillMap = 153,
  SkillMapSkillGroupsSkillMapChildren = 154,
  SkillMapSkillGroupsSkillMapContentfulId = 155,
  SkillMapSkillGroupsSkillMapCreatedAt = 156,
  SkillMapSkillGroupsSkillMapExpanded = 157,
  SkillMapSkillGroupsSkillMapId = 158,
  SkillMapSkillGroupsSkillMapName = 159,
  SkillMapSkillGroupsSkillMapNodeLocale = 160,
  SkillMapSkillGroupsSkillMapSkillGroups = 161,
  SkillMapSkillGroupsSkillMapSkills = 162,
  SkillMapSkillGroupsSkillMapSortKey = 163,
  SkillMapSkillGroupsSkillMapSpaceId = 164,
  SkillMapSkillGroupsSkillMapUpdatedAt = 165,
  SkillMapSkillGroupsSkills = 166,
  SkillMapSkillGroupsSkillsBlogPost = 167,
  SkillMapSkillGroupsSkillsChildren = 168,
  SkillMapSkillGroupsSkillsContentfulId = 169,
  SkillMapSkillGroupsSkillsCreatedAt = 170,
  SkillMapSkillGroupsSkillsId = 171,
  SkillMapSkillGroupsSkillsLevel = 172,
  SkillMapSkillGroupsSkillsName = 173,
  SkillMapSkillGroupsSkillsNodeLocale = 174,
  SkillMapSkillGroupsSkillsOss = 175,
  SkillMapSkillGroupsSkillsProject = 176,
  SkillMapSkillGroupsSkillsSkillGrpup = 177,
  SkillMapSkillGroupsSkillsSkillMap = 178,
  SkillMapSkillGroupsSkillsSpaceId = 179,
  SkillMapSkillGroupsSkillsUpdatedAt = 180,
  SkillMapSkillGroupsSpaceId = 181,
  SkillMapSkillGroupsSysRevision = 182,
  SkillMapSkillGroupsSysType = 183,
  SkillMapSkillGroupsUpdatedAt = 184,
  SkillMapSkills = 185,
  SkillMapSkillsBlogPost = 186,
  SkillMapSkillsBlogPostChildren = 187,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 188,
  SkillMapSkillsBlogPostContentfulId = 189,
  SkillMapSkillsBlogPostCreated = 190,
  SkillMapSkillsBlogPostCreatedAt = 191,
  SkillMapSkillsBlogPostExcerpt = 192,
  SkillMapSkillsBlogPostId = 193,
  SkillMapSkillsBlogPostNodeLocale = 194,
  SkillMapSkillsBlogPostSlug = 195,
  SkillMapSkillsBlogPostSpaceId = 196,
  SkillMapSkillsBlogPostTags = 197,
  SkillMapSkillsBlogPostTitle = 198,
  SkillMapSkillsBlogPostUpdated = 199,
  SkillMapSkillsBlogPostUpdatedAt = 200,
  SkillMapSkillsChildren = 201,
  SkillMapSkillsChildrenChildren = 202,
  SkillMapSkillsChildrenId = 203,
  SkillMapSkillsContentfulId = 204,
  SkillMapSkillsCreatedAt = 205,
  SkillMapSkillsId = 206,
  SkillMapSkillsInternalContent = 207,
  SkillMapSkillsInternalContentDigest = 208,
  SkillMapSkillsInternalDescription = 209,
  SkillMapSkillsInternalFieldOwners = 210,
  SkillMapSkillsInternalIgnoreType = 211,
  SkillMapSkillsInternalMediaType = 212,
  SkillMapSkillsInternalOwner = 213,
  SkillMapSkillsInternalType = 214,
  SkillMapSkillsLevel = 215,
  SkillMapSkillsName = 216,
  SkillMapSkillsNodeLocale = 217,
  SkillMapSkillsOss = 218,
  SkillMapSkillsOssChildren = 219,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 220,
  SkillMapSkillsOssContentfulId = 221,
  SkillMapSkillsOssCreatedAt = 222,
  SkillMapSkillsOssHref = 223,
  SkillMapSkillsOssId = 224,
  SkillMapSkillsOssName = 225,
  SkillMapSkillsOssNodeLocale = 226,
  SkillMapSkillsOssSpaceId = 227,
  SkillMapSkillsOssStartDate = 228,
  SkillMapSkillsOssSubName = 229,
  SkillMapSkillsOssTags = 230,
  SkillMapSkillsOssUpdatedAt = 231,
  SkillMapSkillsParentChildren = 232,
  SkillMapSkillsParentId = 233,
  SkillMapSkillsProject = 234,
  SkillMapSkillsProjectChildren = 235,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 236,
  SkillMapSkillsProjectContentfulId = 237,
  SkillMapSkillsProjectCreatedAt = 238,
  SkillMapSkillsProjectEndDate = 239,
  SkillMapSkillsProjectId = 240,
  SkillMapSkillsProjectName = 241,
  SkillMapSkillsProjectNodeLocale = 242,
  SkillMapSkillsProjectSpaceId = 243,
  SkillMapSkillsProjectStartDate = 244,
  SkillMapSkillsProjectSubName = 245,
  SkillMapSkillsProjectTags = 246,
  SkillMapSkillsProjectUpdatedAt = 247,
  SkillMapSkillsSkillGrpup = 248,
  SkillMapSkillsSkillGrpupChildren = 249,
  SkillMapSkillsSkillGrpupContentfulId = 250,
  SkillMapSkillsSkillGrpupCreatedAt = 251,
  SkillMapSkillsSkillGrpupId = 252,
  SkillMapSkillsSkillGrpupName = 253,
  SkillMapSkillsSkillGrpupNodeLocale = 254,
  SkillMapSkillsSkillGrpupSkillMap = 255,
  SkillMapSkillsSkillGrpupSkills = 256,
  SkillMapSkillsSkillGrpupSpaceId = 257,
  SkillMapSkillsSkillGrpupUpdatedAt = 258,
  SkillMapSkillsSkillMap = 259,
  SkillMapSkillsSkillMapChildren = 260,
  SkillMapSkillsSkillMapContentfulId = 261,
  SkillMapSkillsSkillMapCreatedAt = 262,
  SkillMapSkillsSkillMapExpanded = 263,
  SkillMapSkillsSkillMapId = 264,
  SkillMapSkillsSkillMapName = 265,
  SkillMapSkillsSkillMapNodeLocale = 266,
  SkillMapSkillsSkillMapSkillGroups = 267,
  SkillMapSkillsSkillMapSkills = 268,
  SkillMapSkillsSkillMapSortKey = 269,
  SkillMapSkillsSkillMapSpaceId = 270,
  SkillMapSkillsSkillMapUpdatedAt = 271,
  SkillMapSkillsSpaceId = 272,
  SkillMapSkillsSysRevision = 273,
  SkillMapSkillsSysType = 274,
  SkillMapSkillsUpdatedAt = 275,
  SkillMapSortKey = 276,
  SkillMapSpaceId = 277,
  SkillMapSysRevision = 278,
  SkillMapSysType = 279,
  SkillMapUpdatedAt = 280,
  Skills = 281,
  SkillsBlogPost = 282,
  SkillsBlogPostCategoryBlogPost = 283,
  SkillsBlogPostCategoryChildren = 284,
  SkillsBlogPostCategoryContentfulId = 285,
  SkillsBlogPostCategoryCreatedAt = 286,
  SkillsBlogPostCategoryId = 287,
  SkillsBlogPostCategoryName = 288,
  SkillsBlogPostCategoryNodeLocale = 289,
  SkillsBlogPostCategorySortKey = 290,
  SkillsBlogPostCategorySpaceId = 291,
  SkillsBlogPostCategoryUpdatedAt = 292,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 293,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 294,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 295,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 296,
  SkillsBlogPostChildren = 297,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 298,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 299,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 300,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 301,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 302,
  SkillsBlogPostChildrenChildren = 303,
  SkillsBlogPostChildrenId = 304,
  SkillsBlogPostContentChildren = 305,
  SkillsBlogPostContentChildrenMdx = 306,
  SkillsBlogPostContentContent = 307,
  SkillsBlogPostContentId = 308,
  SkillsBlogPostContentfulId = 309,
  SkillsBlogPostCreated = 310,
  SkillsBlogPostCreatedAt = 311,
  SkillsBlogPostExcerpt = 312,
  SkillsBlogPostId = 313,
  SkillsBlogPostInternalContent = 314,
  SkillsBlogPostInternalContentDigest = 315,
  SkillsBlogPostInternalDescription = 316,
  SkillsBlogPostInternalFieldOwners = 317,
  SkillsBlogPostInternalIgnoreType = 318,
  SkillsBlogPostInternalMediaType = 319,
  SkillsBlogPostInternalOwner = 320,
  SkillsBlogPostInternalType = 321,
  SkillsBlogPostNodeLocale = 322,
  SkillsBlogPostParentChildren = 323,
  SkillsBlogPostParentId = 324,
  SkillsBlogPostSlug = 325,
  SkillsBlogPostSpaceId = 326,
  SkillsBlogPostSysRevision = 327,
  SkillsBlogPostSysType = 328,
  SkillsBlogPostTags = 329,
  SkillsBlogPostTagsBlogPost = 330,
  SkillsBlogPostTagsChildren = 331,
  SkillsBlogPostTagsContentfulId = 332,
  SkillsBlogPostTagsCreatedAt = 333,
  SkillsBlogPostTagsId = 334,
  SkillsBlogPostTagsLevel = 335,
  SkillsBlogPostTagsName = 336,
  SkillsBlogPostTagsNodeLocale = 337,
  SkillsBlogPostTagsOss = 338,
  SkillsBlogPostTagsProject = 339,
  SkillsBlogPostTagsSkillGrpup = 340,
  SkillsBlogPostTagsSkillMap = 341,
  SkillsBlogPostTagsSpaceId = 342,
  SkillsBlogPostTagsUpdatedAt = 343,
  SkillsBlogPostThumbnailChildren = 344,
  SkillsBlogPostThumbnailContentfulId = 345,
  SkillsBlogPostThumbnailCreatedAt = 346,
  SkillsBlogPostThumbnailDescription = 347,
  SkillsBlogPostThumbnailFilename = 348,
  SkillsBlogPostThumbnailFilesize = 349,
  SkillsBlogPostThumbnailGatsbyImage = 350,
  SkillsBlogPostThumbnailGatsbyImageData = 351,
  SkillsBlogPostThumbnailHeight = 352,
  SkillsBlogPostThumbnailId = 353,
  SkillsBlogPostThumbnailMimeType = 354,
  SkillsBlogPostThumbnailNodeLocale = 355,
  SkillsBlogPostThumbnailPlaceholderUrl = 356,
  SkillsBlogPostThumbnailPublicUrl = 357,
  SkillsBlogPostThumbnailSize = 358,
  SkillsBlogPostThumbnailSpaceId = 359,
  SkillsBlogPostThumbnailTitle = 360,
  SkillsBlogPostThumbnailUpdatedAt = 361,
  SkillsBlogPostThumbnailUrl = 362,
  SkillsBlogPostThumbnailWidth = 363,
  SkillsBlogPostTitle = 364,
  SkillsBlogPostUpdated = 365,
  SkillsBlogPostUpdatedAt = 366,
  SkillsChildren = 367,
  SkillsChildrenChildren = 368,
  SkillsChildrenChildrenChildren = 369,
  SkillsChildrenChildrenId = 370,
  SkillsChildrenId = 371,
  SkillsChildrenInternalContent = 372,
  SkillsChildrenInternalContentDigest = 373,
  SkillsChildrenInternalDescription = 374,
  SkillsChildrenInternalFieldOwners = 375,
  SkillsChildrenInternalIgnoreType = 376,
  SkillsChildrenInternalMediaType = 377,
  SkillsChildrenInternalOwner = 378,
  SkillsChildrenInternalType = 379,
  SkillsChildrenParentChildren = 380,
  SkillsChildrenParentId = 381,
  SkillsContentfulId = 382,
  SkillsCreatedAt = 383,
  SkillsId = 384,
  SkillsInternalContent = 385,
  SkillsInternalContentDigest = 386,
  SkillsInternalDescription = 387,
  SkillsInternalFieldOwners = 388,
  SkillsInternalIgnoreType = 389,
  SkillsInternalMediaType = 390,
  SkillsInternalOwner = 391,
  SkillsInternalType = 392,
  SkillsLevel = 393,
  SkillsName = 394,
  SkillsNodeLocale = 395,
  SkillsOss = 396,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 397,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMdx = 398,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 399,
  SkillsOssChildContentfulOssDetailTextNodeId = 400,
  SkillsOssChildren = 401,
  SkillsOssChildrenContentfulOssDetailTextNode = 402,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 403,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 404,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 405,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 406,
  SkillsOssChildrenChildren = 407,
  SkillsOssChildrenId = 408,
  SkillsOssContentfulId = 409,
  SkillsOssCreatedAt = 410,
  SkillsOssDetailChildren = 411,
  SkillsOssDetailChildrenMdx = 412,
  SkillsOssDetailDetail = 413,
  SkillsOssDetailId = 414,
  SkillsOssHref = 415,
  SkillsOssIconChildren = 416,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 417,
  SkillsOssIconContact = 418,
  SkillsOssIconContentfulId = 419,
  SkillsOssIconCreatedAt = 420,
  SkillsOssIconHistory = 421,
  SkillsOssIconId = 422,
  SkillsOssIconName = 423,
  SkillsOssIconNodeLocale = 424,
  SkillsOssIconOss = 425,
  SkillsOssIconProject = 426,
  SkillsOssIconSpaceId = 427,
  SkillsOssIconUpdatedAt = 428,
  SkillsOssIconWhatICanDo = 429,
  SkillsOssId = 430,
  SkillsOssImageChildren = 431,
  SkillsOssImageContentfulId = 432,
  SkillsOssImageCreatedAt = 433,
  SkillsOssImageDescription = 434,
  SkillsOssImageFilename = 435,
  SkillsOssImageFilesize = 436,
  SkillsOssImageGatsbyImage = 437,
  SkillsOssImageGatsbyImageData = 438,
  SkillsOssImageHeight = 439,
  SkillsOssImageId = 440,
  SkillsOssImageMimeType = 441,
  SkillsOssImageNodeLocale = 442,
  SkillsOssImagePlaceholderUrl = 443,
  SkillsOssImagePublicUrl = 444,
  SkillsOssImageSize = 445,
  SkillsOssImageSpaceId = 446,
  SkillsOssImageTitle = 447,
  SkillsOssImageUpdatedAt = 448,
  SkillsOssImageUrl = 449,
  SkillsOssImageWidth = 450,
  SkillsOssInternalContent = 451,
  SkillsOssInternalContentDigest = 452,
  SkillsOssInternalDescription = 453,
  SkillsOssInternalFieldOwners = 454,
  SkillsOssInternalIgnoreType = 455,
  SkillsOssInternalMediaType = 456,
  SkillsOssInternalOwner = 457,
  SkillsOssInternalType = 458,
  SkillsOssName = 459,
  SkillsOssNodeLocale = 460,
  SkillsOssParentChildren = 461,
  SkillsOssParentId = 462,
  SkillsOssSpaceId = 463,
  SkillsOssStartDate = 464,
  SkillsOssSubName = 465,
  SkillsOssSysRevision = 466,
  SkillsOssSysType = 467,
  SkillsOssTags = 468,
  SkillsOssTagsBlogPost = 469,
  SkillsOssTagsChildren = 470,
  SkillsOssTagsContentfulId = 471,
  SkillsOssTagsCreatedAt = 472,
  SkillsOssTagsId = 473,
  SkillsOssTagsLevel = 474,
  SkillsOssTagsName = 475,
  SkillsOssTagsNodeLocale = 476,
  SkillsOssTagsOss = 477,
  SkillsOssTagsProject = 478,
  SkillsOssTagsSkillGrpup = 479,
  SkillsOssTagsSkillMap = 480,
  SkillsOssTagsSpaceId = 481,
  SkillsOssTagsUpdatedAt = 482,
  SkillsOssUpdatedAt = 483,
  SkillsParentChildren = 484,
  SkillsParentChildrenChildren = 485,
  SkillsParentChildrenId = 486,
  SkillsParentId = 487,
  SkillsParentInternalContent = 488,
  SkillsParentInternalContentDigest = 489,
  SkillsParentInternalDescription = 490,
  SkillsParentInternalFieldOwners = 491,
  SkillsParentInternalIgnoreType = 492,
  SkillsParentInternalMediaType = 493,
  SkillsParentInternalOwner = 494,
  SkillsParentInternalType = 495,
  SkillsParentParentChildren = 496,
  SkillsParentParentId = 497,
  SkillsProject = 498,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 499,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 500,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 501,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 502,
  SkillsProjectChildren = 503,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 504,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 505,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 506,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 507,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 508,
  SkillsProjectChildrenChildren = 509,
  SkillsProjectChildrenId = 510,
  SkillsProjectContentfulId = 511,
  SkillsProjectCreatedAt = 512,
  SkillsProjectDetailChildren = 513,
  SkillsProjectDetailChildrenMdx = 514,
  SkillsProjectDetailDetail = 515,
  SkillsProjectDetailId = 516,
  SkillsProjectEndDate = 517,
  SkillsProjectIconChildren = 518,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 519,
  SkillsProjectIconContact = 520,
  SkillsProjectIconContentfulId = 521,
  SkillsProjectIconCreatedAt = 522,
  SkillsProjectIconHistory = 523,
  SkillsProjectIconId = 524,
  SkillsProjectIconName = 525,
  SkillsProjectIconNodeLocale = 526,
  SkillsProjectIconOss = 527,
  SkillsProjectIconProject = 528,
  SkillsProjectIconSpaceId = 529,
  SkillsProjectIconUpdatedAt = 530,
  SkillsProjectIconWhatICanDo = 531,
  SkillsProjectId = 532,
  SkillsProjectInternalContent = 533,
  SkillsProjectInternalContentDigest = 534,
  SkillsProjectInternalDescription = 535,
  SkillsProjectInternalFieldOwners = 536,
  SkillsProjectInternalIgnoreType = 537,
  SkillsProjectInternalMediaType = 538,
  SkillsProjectInternalOwner = 539,
  SkillsProjectInternalType = 540,
  SkillsProjectName = 541,
  SkillsProjectNodeLocale = 542,
  SkillsProjectParentChildren = 543,
  SkillsProjectParentId = 544,
  SkillsProjectSpaceId = 545,
  SkillsProjectStartDate = 546,
  SkillsProjectSubName = 547,
  SkillsProjectSysRevision = 548,
  SkillsProjectSysType = 549,
  SkillsProjectTags = 550,
  SkillsProjectTagsBlogPost = 551,
  SkillsProjectTagsChildren = 552,
  SkillsProjectTagsContentfulId = 553,
  SkillsProjectTagsCreatedAt = 554,
  SkillsProjectTagsId = 555,
  SkillsProjectTagsLevel = 556,
  SkillsProjectTagsName = 557,
  SkillsProjectTagsNodeLocale = 558,
  SkillsProjectTagsOss = 559,
  SkillsProjectTagsProject = 560,
  SkillsProjectTagsSkillGrpup = 561,
  SkillsProjectTagsSkillMap = 562,
  SkillsProjectTagsSpaceId = 563,
  SkillsProjectTagsUpdatedAt = 564,
  SkillsProjectUpdatedAt = 565,
  SkillsSkillGrpup = 566,
  SkillsSkillGrpupChildren = 567,
  SkillsSkillGrpupChildrenChildren = 568,
  SkillsSkillGrpupChildrenId = 569,
  SkillsSkillGrpupContentfulId = 570,
  SkillsSkillGrpupCreatedAt = 571,
  SkillsSkillGrpupId = 572,
  SkillsSkillGrpupInternalContent = 573,
  SkillsSkillGrpupInternalContentDigest = 574,
  SkillsSkillGrpupInternalDescription = 575,
  SkillsSkillGrpupInternalFieldOwners = 576,
  SkillsSkillGrpupInternalIgnoreType = 577,
  SkillsSkillGrpupInternalMediaType = 578,
  SkillsSkillGrpupInternalOwner = 579,
  SkillsSkillGrpupInternalType = 580,
  SkillsSkillGrpupName = 581,
  SkillsSkillGrpupNodeLocale = 582,
  SkillsSkillGrpupParentChildren = 583,
  SkillsSkillGrpupParentId = 584,
  SkillsSkillGrpupSkillMap = 585,
  SkillsSkillGrpupSkillMapChildren = 586,
  SkillsSkillGrpupSkillMapContentfulId = 587,
  SkillsSkillGrpupSkillMapCreatedAt = 588,
  SkillsSkillGrpupSkillMapExpanded = 589,
  SkillsSkillGrpupSkillMapId = 590,
  SkillsSkillGrpupSkillMapName = 591,
  SkillsSkillGrpupSkillMapNodeLocale = 592,
  SkillsSkillGrpupSkillMapSkillGroups = 593,
  SkillsSkillGrpupSkillMapSkills = 594,
  SkillsSkillGrpupSkillMapSortKey = 595,
  SkillsSkillGrpupSkillMapSpaceId = 596,
  SkillsSkillGrpupSkillMapUpdatedAt = 597,
  SkillsSkillGrpupSkills = 598,
  SkillsSkillGrpupSkillsBlogPost = 599,
  SkillsSkillGrpupSkillsChildren = 600,
  SkillsSkillGrpupSkillsContentfulId = 601,
  SkillsSkillGrpupSkillsCreatedAt = 602,
  SkillsSkillGrpupSkillsId = 603,
  SkillsSkillGrpupSkillsLevel = 604,
  SkillsSkillGrpupSkillsName = 605,
  SkillsSkillGrpupSkillsNodeLocale = 606,
  SkillsSkillGrpupSkillsOss = 607,
  SkillsSkillGrpupSkillsProject = 608,
  SkillsSkillGrpupSkillsSkillGrpup = 609,
  SkillsSkillGrpupSkillsSkillMap = 610,
  SkillsSkillGrpupSkillsSpaceId = 611,
  SkillsSkillGrpupSkillsUpdatedAt = 612,
  SkillsSkillGrpupSpaceId = 613,
  SkillsSkillGrpupSysRevision = 614,
  SkillsSkillGrpupSysType = 615,
  SkillsSkillGrpupUpdatedAt = 616,
  SkillsSkillMap = 617,
  SkillsSkillMapChildren = 618,
  SkillsSkillMapChildrenChildren = 619,
  SkillsSkillMapChildrenId = 620,
  SkillsSkillMapContentfulId = 621,
  SkillsSkillMapCreatedAt = 622,
  SkillsSkillMapExpanded = 623,
  SkillsSkillMapId = 624,
  SkillsSkillMapInternalContent = 625,
  SkillsSkillMapInternalContentDigest = 626,
  SkillsSkillMapInternalDescription = 627,
  SkillsSkillMapInternalFieldOwners = 628,
  SkillsSkillMapInternalIgnoreType = 629,
  SkillsSkillMapInternalMediaType = 630,
  SkillsSkillMapInternalOwner = 631,
  SkillsSkillMapInternalType = 632,
  SkillsSkillMapName = 633,
  SkillsSkillMapNodeLocale = 634,
  SkillsSkillMapParentChildren = 635,
  SkillsSkillMapParentId = 636,
  SkillsSkillMapSkillGroups = 637,
  SkillsSkillMapSkillGroupsChildren = 638,
  SkillsSkillMapSkillGroupsContentfulId = 639,
  SkillsSkillMapSkillGroupsCreatedAt = 640,
  SkillsSkillMapSkillGroupsId = 641,
  SkillsSkillMapSkillGroupsName = 642,
  SkillsSkillMapSkillGroupsNodeLocale = 643,
  SkillsSkillMapSkillGroupsSkillMap = 644,
  SkillsSkillMapSkillGroupsSkills = 645,
  SkillsSkillMapSkillGroupsSpaceId = 646,
  SkillsSkillMapSkillGroupsUpdatedAt = 647,
  SkillsSkillMapSkills = 648,
  SkillsSkillMapSkillsBlogPost = 649,
  SkillsSkillMapSkillsChildren = 650,
  SkillsSkillMapSkillsContentfulId = 651,
  SkillsSkillMapSkillsCreatedAt = 652,
  SkillsSkillMapSkillsId = 653,
  SkillsSkillMapSkillsLevel = 654,
  SkillsSkillMapSkillsName = 655,
  SkillsSkillMapSkillsNodeLocale = 656,
  SkillsSkillMapSkillsOss = 657,
  SkillsSkillMapSkillsProject = 658,
  SkillsSkillMapSkillsSkillGrpup = 659,
  SkillsSkillMapSkillsSkillMap = 660,
  SkillsSkillMapSkillsSpaceId = 661,
  SkillsSkillMapSkillsUpdatedAt = 662,
  SkillsSkillMapSortKey = 663,
  SkillsSkillMapSpaceId = 664,
  SkillsSkillMapSysRevision = 665,
  SkillsSkillMapSysType = 666,
  SkillsSkillMapUpdatedAt = 667,
  SkillsSpaceId = 668,
  SkillsSysRevision = 669,
  SkillsSysType = 670,
  SkillsUpdatedAt = 671,
  SpaceId = 672,
  SysContentTypeSysId = 673,
  SysContentTypeSysLinkType = 674,
  SysContentTypeSysType = 675,
  SysRevision = 676,
  SysType = 677,
  UpdatedAt = 678
}

export type ContentfulSkillGrpupFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  skill_map: InputMaybe<ContentfulSkillMapFilterListInput>;
  skills: InputMaybe<ContentfulTagFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulSkillGrpupSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulSkillGrpupFilterListInput = {
  elemMatch: InputMaybe<ContentfulSkillGrpupFilterInput>;
};

export type ContentfulSkillGrpupGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ContentfulSkillGrpupEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ContentfulSkillGrpupGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ContentfulSkillGrpup>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ContentfulSkillGrpupGroupConnectionDistinctArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupGroupConnectionGroupArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulSkillGrpupGroupConnectionMaxArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupGroupConnectionMinArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupGroupConnectionSumArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};

export type ContentfulSkillGrpupSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulSkillGrpupFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulSkillGrpupSys = {
  contentType: Maybe<ContentfulSkillGrpupSysContentType>;
  revision: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulSkillGrpupSysContentType = {
  sys: Maybe<ContentfulSkillGrpupSysContentTypeSys>;
};

export type ContentfulSkillGrpupSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulSkillGrpupSysContentTypeSysFilterInput>;
};

export type ContentfulSkillGrpupSysContentTypeSys = {
  id: Maybe<Scalars['String']>;
  linkType: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type ContentfulSkillGrpupSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>;
  linkType: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSkillGrpupSysFilterInput = {
  contentType: InputMaybe<ContentfulSkillGrpupSysContentTypeFilterInput>;
  revision: InputMaybe<IntQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
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
  skillGroups: Maybe<Array<Maybe<ContentfulSkillGrpup>>>;
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
  SkillGroups = 91,
  SkillGroupsChildren = 92,
  SkillGroupsChildrenChildren = 93,
  SkillGroupsChildrenChildrenChildren = 94,
  SkillGroupsChildrenChildrenId = 95,
  SkillGroupsChildrenId = 96,
  SkillGroupsChildrenInternalContent = 97,
  SkillGroupsChildrenInternalContentDigest = 98,
  SkillGroupsChildrenInternalDescription = 99,
  SkillGroupsChildrenInternalFieldOwners = 100,
  SkillGroupsChildrenInternalIgnoreType = 101,
  SkillGroupsChildrenInternalMediaType = 102,
  SkillGroupsChildrenInternalOwner = 103,
  SkillGroupsChildrenInternalType = 104,
  SkillGroupsChildrenParentChildren = 105,
  SkillGroupsChildrenParentId = 106,
  SkillGroupsContentfulId = 107,
  SkillGroupsCreatedAt = 108,
  SkillGroupsId = 109,
  SkillGroupsInternalContent = 110,
  SkillGroupsInternalContentDigest = 111,
  SkillGroupsInternalDescription = 112,
  SkillGroupsInternalFieldOwners = 113,
  SkillGroupsInternalIgnoreType = 114,
  SkillGroupsInternalMediaType = 115,
  SkillGroupsInternalOwner = 116,
  SkillGroupsInternalType = 117,
  SkillGroupsName = 118,
  SkillGroupsNodeLocale = 119,
  SkillGroupsParentChildren = 120,
  SkillGroupsParentChildrenChildren = 121,
  SkillGroupsParentChildrenId = 122,
  SkillGroupsParentId = 123,
  SkillGroupsParentInternalContent = 124,
  SkillGroupsParentInternalContentDigest = 125,
  SkillGroupsParentInternalDescription = 126,
  SkillGroupsParentInternalFieldOwners = 127,
  SkillGroupsParentInternalIgnoreType = 128,
  SkillGroupsParentInternalMediaType = 129,
  SkillGroupsParentInternalOwner = 130,
  SkillGroupsParentInternalType = 131,
  SkillGroupsParentParentChildren = 132,
  SkillGroupsParentParentId = 133,
  SkillGroupsSkillMap = 134,
  SkillGroupsSkillMapChildren = 135,
  SkillGroupsSkillMapChildrenChildren = 136,
  SkillGroupsSkillMapChildrenId = 137,
  SkillGroupsSkillMapContentfulId = 138,
  SkillGroupsSkillMapCreatedAt = 139,
  SkillGroupsSkillMapExpanded = 140,
  SkillGroupsSkillMapId = 141,
  SkillGroupsSkillMapInternalContent = 142,
  SkillGroupsSkillMapInternalContentDigest = 143,
  SkillGroupsSkillMapInternalDescription = 144,
  SkillGroupsSkillMapInternalFieldOwners = 145,
  SkillGroupsSkillMapInternalIgnoreType = 146,
  SkillGroupsSkillMapInternalMediaType = 147,
  SkillGroupsSkillMapInternalOwner = 148,
  SkillGroupsSkillMapInternalType = 149,
  SkillGroupsSkillMapName = 150,
  SkillGroupsSkillMapNodeLocale = 151,
  SkillGroupsSkillMapParentChildren = 152,
  SkillGroupsSkillMapParentId = 153,
  SkillGroupsSkillMapSkillGroups = 154,
  SkillGroupsSkillMapSkillGroupsChildren = 155,
  SkillGroupsSkillMapSkillGroupsContentfulId = 156,
  SkillGroupsSkillMapSkillGroupsCreatedAt = 157,
  SkillGroupsSkillMapSkillGroupsId = 158,
  SkillGroupsSkillMapSkillGroupsName = 159,
  SkillGroupsSkillMapSkillGroupsNodeLocale = 160,
  SkillGroupsSkillMapSkillGroupsSkillMap = 161,
  SkillGroupsSkillMapSkillGroupsSkills = 162,
  SkillGroupsSkillMapSkillGroupsSpaceId = 163,
  SkillGroupsSkillMapSkillGroupsUpdatedAt = 164,
  SkillGroupsSkillMapSkills = 165,
  SkillGroupsSkillMapSkillsBlogPost = 166,
  SkillGroupsSkillMapSkillsChildren = 167,
  SkillGroupsSkillMapSkillsContentfulId = 168,
  SkillGroupsSkillMapSkillsCreatedAt = 169,
  SkillGroupsSkillMapSkillsId = 170,
  SkillGroupsSkillMapSkillsLevel = 171,
  SkillGroupsSkillMapSkillsName = 172,
  SkillGroupsSkillMapSkillsNodeLocale = 173,
  SkillGroupsSkillMapSkillsOss = 174,
  SkillGroupsSkillMapSkillsProject = 175,
  SkillGroupsSkillMapSkillsSkillGrpup = 176,
  SkillGroupsSkillMapSkillsSkillMap = 177,
  SkillGroupsSkillMapSkillsSpaceId = 178,
  SkillGroupsSkillMapSkillsUpdatedAt = 179,
  SkillGroupsSkillMapSortKey = 180,
  SkillGroupsSkillMapSpaceId = 181,
  SkillGroupsSkillMapSysRevision = 182,
  SkillGroupsSkillMapSysType = 183,
  SkillGroupsSkillMapUpdatedAt = 184,
  SkillGroupsSkills = 185,
  SkillGroupsSkillsBlogPost = 186,
  SkillGroupsSkillsBlogPostChildren = 187,
  SkillGroupsSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 188,
  SkillGroupsSkillsBlogPostContentfulId = 189,
  SkillGroupsSkillsBlogPostCreated = 190,
  SkillGroupsSkillsBlogPostCreatedAt = 191,
  SkillGroupsSkillsBlogPostExcerpt = 192,
  SkillGroupsSkillsBlogPostId = 193,
  SkillGroupsSkillsBlogPostNodeLocale = 194,
  SkillGroupsSkillsBlogPostSlug = 195,
  SkillGroupsSkillsBlogPostSpaceId = 196,
  SkillGroupsSkillsBlogPostTags = 197,
  SkillGroupsSkillsBlogPostTitle = 198,
  SkillGroupsSkillsBlogPostUpdated = 199,
  SkillGroupsSkillsBlogPostUpdatedAt = 200,
  SkillGroupsSkillsChildren = 201,
  SkillGroupsSkillsChildrenChildren = 202,
  SkillGroupsSkillsChildrenId = 203,
  SkillGroupsSkillsContentfulId = 204,
  SkillGroupsSkillsCreatedAt = 205,
  SkillGroupsSkillsId = 206,
  SkillGroupsSkillsInternalContent = 207,
  SkillGroupsSkillsInternalContentDigest = 208,
  SkillGroupsSkillsInternalDescription = 209,
  SkillGroupsSkillsInternalFieldOwners = 210,
  SkillGroupsSkillsInternalIgnoreType = 211,
  SkillGroupsSkillsInternalMediaType = 212,
  SkillGroupsSkillsInternalOwner = 213,
  SkillGroupsSkillsInternalType = 214,
  SkillGroupsSkillsLevel = 215,
  SkillGroupsSkillsName = 216,
  SkillGroupsSkillsNodeLocale = 217,
  SkillGroupsSkillsOss = 218,
  SkillGroupsSkillsOssChildren = 219,
  SkillGroupsSkillsOssChildrenContentfulOssDetailTextNode = 220,
  SkillGroupsSkillsOssContentfulId = 221,
  SkillGroupsSkillsOssCreatedAt = 222,
  SkillGroupsSkillsOssHref = 223,
  SkillGroupsSkillsOssId = 224,
  SkillGroupsSkillsOssName = 225,
  SkillGroupsSkillsOssNodeLocale = 226,
  SkillGroupsSkillsOssSpaceId = 227,
  SkillGroupsSkillsOssStartDate = 228,
  SkillGroupsSkillsOssSubName = 229,
  SkillGroupsSkillsOssTags = 230,
  SkillGroupsSkillsOssUpdatedAt = 231,
  SkillGroupsSkillsParentChildren = 232,
  SkillGroupsSkillsParentId = 233,
  SkillGroupsSkillsProject = 234,
  SkillGroupsSkillsProjectChildren = 235,
  SkillGroupsSkillsProjectChildrenContentfulProjectDetailTextNode = 236,
  SkillGroupsSkillsProjectContentfulId = 237,
  SkillGroupsSkillsProjectCreatedAt = 238,
  SkillGroupsSkillsProjectEndDate = 239,
  SkillGroupsSkillsProjectId = 240,
  SkillGroupsSkillsProjectName = 241,
  SkillGroupsSkillsProjectNodeLocale = 242,
  SkillGroupsSkillsProjectSpaceId = 243,
  SkillGroupsSkillsProjectStartDate = 244,
  SkillGroupsSkillsProjectSubName = 245,
  SkillGroupsSkillsProjectTags = 246,
  SkillGroupsSkillsProjectUpdatedAt = 247,
  SkillGroupsSkillsSkillGrpup = 248,
  SkillGroupsSkillsSkillGrpupChildren = 249,
  SkillGroupsSkillsSkillGrpupContentfulId = 250,
  SkillGroupsSkillsSkillGrpupCreatedAt = 251,
  SkillGroupsSkillsSkillGrpupId = 252,
  SkillGroupsSkillsSkillGrpupName = 253,
  SkillGroupsSkillsSkillGrpupNodeLocale = 254,
  SkillGroupsSkillsSkillGrpupSkillMap = 255,
  SkillGroupsSkillsSkillGrpupSkills = 256,
  SkillGroupsSkillsSkillGrpupSpaceId = 257,
  SkillGroupsSkillsSkillGrpupUpdatedAt = 258,
  SkillGroupsSkillsSkillMap = 259,
  SkillGroupsSkillsSkillMapChildren = 260,
  SkillGroupsSkillsSkillMapContentfulId = 261,
  SkillGroupsSkillsSkillMapCreatedAt = 262,
  SkillGroupsSkillsSkillMapExpanded = 263,
  SkillGroupsSkillsSkillMapId = 264,
  SkillGroupsSkillsSkillMapName = 265,
  SkillGroupsSkillsSkillMapNodeLocale = 266,
  SkillGroupsSkillsSkillMapSkillGroups = 267,
  SkillGroupsSkillsSkillMapSkills = 268,
  SkillGroupsSkillsSkillMapSortKey = 269,
  SkillGroupsSkillsSkillMapSpaceId = 270,
  SkillGroupsSkillsSkillMapUpdatedAt = 271,
  SkillGroupsSkillsSpaceId = 272,
  SkillGroupsSkillsSysRevision = 273,
  SkillGroupsSkillsSysType = 274,
  SkillGroupsSkillsUpdatedAt = 275,
  SkillGroupsSpaceId = 276,
  SkillGroupsSysRevision = 277,
  SkillGroupsSysType = 278,
  SkillGroupsUpdatedAt = 279,
  Skills = 280,
  SkillsBlogPost = 281,
  SkillsBlogPostCategoryBlogPost = 282,
  SkillsBlogPostCategoryChildren = 283,
  SkillsBlogPostCategoryContentfulId = 284,
  SkillsBlogPostCategoryCreatedAt = 285,
  SkillsBlogPostCategoryId = 286,
  SkillsBlogPostCategoryName = 287,
  SkillsBlogPostCategoryNodeLocale = 288,
  SkillsBlogPostCategorySortKey = 289,
  SkillsBlogPostCategorySpaceId = 290,
  SkillsBlogPostCategoryUpdatedAt = 291,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 292,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 293,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 294,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 295,
  SkillsBlogPostChildren = 296,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 297,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 298,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 299,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 300,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 301,
  SkillsBlogPostChildrenChildren = 302,
  SkillsBlogPostChildrenId = 303,
  SkillsBlogPostContentChildren = 304,
  SkillsBlogPostContentChildrenMdx = 305,
  SkillsBlogPostContentContent = 306,
  SkillsBlogPostContentId = 307,
  SkillsBlogPostContentfulId = 308,
  SkillsBlogPostCreated = 309,
  SkillsBlogPostCreatedAt = 310,
  SkillsBlogPostExcerpt = 311,
  SkillsBlogPostId = 312,
  SkillsBlogPostInternalContent = 313,
  SkillsBlogPostInternalContentDigest = 314,
  SkillsBlogPostInternalDescription = 315,
  SkillsBlogPostInternalFieldOwners = 316,
  SkillsBlogPostInternalIgnoreType = 317,
  SkillsBlogPostInternalMediaType = 318,
  SkillsBlogPostInternalOwner = 319,
  SkillsBlogPostInternalType = 320,
  SkillsBlogPostNodeLocale = 321,
  SkillsBlogPostParentChildren = 322,
  SkillsBlogPostParentId = 323,
  SkillsBlogPostSlug = 324,
  SkillsBlogPostSpaceId = 325,
  SkillsBlogPostSysRevision = 326,
  SkillsBlogPostSysType = 327,
  SkillsBlogPostTags = 328,
  SkillsBlogPostTagsBlogPost = 329,
  SkillsBlogPostTagsChildren = 330,
  SkillsBlogPostTagsContentfulId = 331,
  SkillsBlogPostTagsCreatedAt = 332,
  SkillsBlogPostTagsId = 333,
  SkillsBlogPostTagsLevel = 334,
  SkillsBlogPostTagsName = 335,
  SkillsBlogPostTagsNodeLocale = 336,
  SkillsBlogPostTagsOss = 337,
  SkillsBlogPostTagsProject = 338,
  SkillsBlogPostTagsSkillGrpup = 339,
  SkillsBlogPostTagsSkillMap = 340,
  SkillsBlogPostTagsSpaceId = 341,
  SkillsBlogPostTagsUpdatedAt = 342,
  SkillsBlogPostThumbnailChildren = 343,
  SkillsBlogPostThumbnailContentfulId = 344,
  SkillsBlogPostThumbnailCreatedAt = 345,
  SkillsBlogPostThumbnailDescription = 346,
  SkillsBlogPostThumbnailFilename = 347,
  SkillsBlogPostThumbnailFilesize = 348,
  SkillsBlogPostThumbnailGatsbyImage = 349,
  SkillsBlogPostThumbnailGatsbyImageData = 350,
  SkillsBlogPostThumbnailHeight = 351,
  SkillsBlogPostThumbnailId = 352,
  SkillsBlogPostThumbnailMimeType = 353,
  SkillsBlogPostThumbnailNodeLocale = 354,
  SkillsBlogPostThumbnailPlaceholderUrl = 355,
  SkillsBlogPostThumbnailPublicUrl = 356,
  SkillsBlogPostThumbnailSize = 357,
  SkillsBlogPostThumbnailSpaceId = 358,
  SkillsBlogPostThumbnailTitle = 359,
  SkillsBlogPostThumbnailUpdatedAt = 360,
  SkillsBlogPostThumbnailUrl = 361,
  SkillsBlogPostThumbnailWidth = 362,
  SkillsBlogPostTitle = 363,
  SkillsBlogPostUpdated = 364,
  SkillsBlogPostUpdatedAt = 365,
  SkillsChildren = 366,
  SkillsChildrenChildren = 367,
  SkillsChildrenChildrenChildren = 368,
  SkillsChildrenChildrenId = 369,
  SkillsChildrenId = 370,
  SkillsChildrenInternalContent = 371,
  SkillsChildrenInternalContentDigest = 372,
  SkillsChildrenInternalDescription = 373,
  SkillsChildrenInternalFieldOwners = 374,
  SkillsChildrenInternalIgnoreType = 375,
  SkillsChildrenInternalMediaType = 376,
  SkillsChildrenInternalOwner = 377,
  SkillsChildrenInternalType = 378,
  SkillsChildrenParentChildren = 379,
  SkillsChildrenParentId = 380,
  SkillsContentfulId = 381,
  SkillsCreatedAt = 382,
  SkillsId = 383,
  SkillsInternalContent = 384,
  SkillsInternalContentDigest = 385,
  SkillsInternalDescription = 386,
  SkillsInternalFieldOwners = 387,
  SkillsInternalIgnoreType = 388,
  SkillsInternalMediaType = 389,
  SkillsInternalOwner = 390,
  SkillsInternalType = 391,
  SkillsLevel = 392,
  SkillsName = 393,
  SkillsNodeLocale = 394,
  SkillsOss = 395,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 396,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMdx = 397,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 398,
  SkillsOssChildContentfulOssDetailTextNodeId = 399,
  SkillsOssChildren = 400,
  SkillsOssChildrenContentfulOssDetailTextNode = 401,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 402,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 403,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 404,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 405,
  SkillsOssChildrenChildren = 406,
  SkillsOssChildrenId = 407,
  SkillsOssContentfulId = 408,
  SkillsOssCreatedAt = 409,
  SkillsOssDetailChildren = 410,
  SkillsOssDetailChildrenMdx = 411,
  SkillsOssDetailDetail = 412,
  SkillsOssDetailId = 413,
  SkillsOssHref = 414,
  SkillsOssIconChildren = 415,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 416,
  SkillsOssIconContact = 417,
  SkillsOssIconContentfulId = 418,
  SkillsOssIconCreatedAt = 419,
  SkillsOssIconHistory = 420,
  SkillsOssIconId = 421,
  SkillsOssIconName = 422,
  SkillsOssIconNodeLocale = 423,
  SkillsOssIconOss = 424,
  SkillsOssIconProject = 425,
  SkillsOssIconSpaceId = 426,
  SkillsOssIconUpdatedAt = 427,
  SkillsOssIconWhatICanDo = 428,
  SkillsOssId = 429,
  SkillsOssImageChildren = 430,
  SkillsOssImageContentfulId = 431,
  SkillsOssImageCreatedAt = 432,
  SkillsOssImageDescription = 433,
  SkillsOssImageFilename = 434,
  SkillsOssImageFilesize = 435,
  SkillsOssImageGatsbyImage = 436,
  SkillsOssImageGatsbyImageData = 437,
  SkillsOssImageHeight = 438,
  SkillsOssImageId = 439,
  SkillsOssImageMimeType = 440,
  SkillsOssImageNodeLocale = 441,
  SkillsOssImagePlaceholderUrl = 442,
  SkillsOssImagePublicUrl = 443,
  SkillsOssImageSize = 444,
  SkillsOssImageSpaceId = 445,
  SkillsOssImageTitle = 446,
  SkillsOssImageUpdatedAt = 447,
  SkillsOssImageUrl = 448,
  SkillsOssImageWidth = 449,
  SkillsOssInternalContent = 450,
  SkillsOssInternalContentDigest = 451,
  SkillsOssInternalDescription = 452,
  SkillsOssInternalFieldOwners = 453,
  SkillsOssInternalIgnoreType = 454,
  SkillsOssInternalMediaType = 455,
  SkillsOssInternalOwner = 456,
  SkillsOssInternalType = 457,
  SkillsOssName = 458,
  SkillsOssNodeLocale = 459,
  SkillsOssParentChildren = 460,
  SkillsOssParentId = 461,
  SkillsOssSpaceId = 462,
  SkillsOssStartDate = 463,
  SkillsOssSubName = 464,
  SkillsOssSysRevision = 465,
  SkillsOssSysType = 466,
  SkillsOssTags = 467,
  SkillsOssTagsBlogPost = 468,
  SkillsOssTagsChildren = 469,
  SkillsOssTagsContentfulId = 470,
  SkillsOssTagsCreatedAt = 471,
  SkillsOssTagsId = 472,
  SkillsOssTagsLevel = 473,
  SkillsOssTagsName = 474,
  SkillsOssTagsNodeLocale = 475,
  SkillsOssTagsOss = 476,
  SkillsOssTagsProject = 477,
  SkillsOssTagsSkillGrpup = 478,
  SkillsOssTagsSkillMap = 479,
  SkillsOssTagsSpaceId = 480,
  SkillsOssTagsUpdatedAt = 481,
  SkillsOssUpdatedAt = 482,
  SkillsParentChildren = 483,
  SkillsParentChildrenChildren = 484,
  SkillsParentChildrenId = 485,
  SkillsParentId = 486,
  SkillsParentInternalContent = 487,
  SkillsParentInternalContentDigest = 488,
  SkillsParentInternalDescription = 489,
  SkillsParentInternalFieldOwners = 490,
  SkillsParentInternalIgnoreType = 491,
  SkillsParentInternalMediaType = 492,
  SkillsParentInternalOwner = 493,
  SkillsParentInternalType = 494,
  SkillsParentParentChildren = 495,
  SkillsParentParentId = 496,
  SkillsProject = 497,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 498,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 499,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 500,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 501,
  SkillsProjectChildren = 502,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 503,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 504,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 505,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 506,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 507,
  SkillsProjectChildrenChildren = 508,
  SkillsProjectChildrenId = 509,
  SkillsProjectContentfulId = 510,
  SkillsProjectCreatedAt = 511,
  SkillsProjectDetailChildren = 512,
  SkillsProjectDetailChildrenMdx = 513,
  SkillsProjectDetailDetail = 514,
  SkillsProjectDetailId = 515,
  SkillsProjectEndDate = 516,
  SkillsProjectIconChildren = 517,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 518,
  SkillsProjectIconContact = 519,
  SkillsProjectIconContentfulId = 520,
  SkillsProjectIconCreatedAt = 521,
  SkillsProjectIconHistory = 522,
  SkillsProjectIconId = 523,
  SkillsProjectIconName = 524,
  SkillsProjectIconNodeLocale = 525,
  SkillsProjectIconOss = 526,
  SkillsProjectIconProject = 527,
  SkillsProjectIconSpaceId = 528,
  SkillsProjectIconUpdatedAt = 529,
  SkillsProjectIconWhatICanDo = 530,
  SkillsProjectId = 531,
  SkillsProjectInternalContent = 532,
  SkillsProjectInternalContentDigest = 533,
  SkillsProjectInternalDescription = 534,
  SkillsProjectInternalFieldOwners = 535,
  SkillsProjectInternalIgnoreType = 536,
  SkillsProjectInternalMediaType = 537,
  SkillsProjectInternalOwner = 538,
  SkillsProjectInternalType = 539,
  SkillsProjectName = 540,
  SkillsProjectNodeLocale = 541,
  SkillsProjectParentChildren = 542,
  SkillsProjectParentId = 543,
  SkillsProjectSpaceId = 544,
  SkillsProjectStartDate = 545,
  SkillsProjectSubName = 546,
  SkillsProjectSysRevision = 547,
  SkillsProjectSysType = 548,
  SkillsProjectTags = 549,
  SkillsProjectTagsBlogPost = 550,
  SkillsProjectTagsChildren = 551,
  SkillsProjectTagsContentfulId = 552,
  SkillsProjectTagsCreatedAt = 553,
  SkillsProjectTagsId = 554,
  SkillsProjectTagsLevel = 555,
  SkillsProjectTagsName = 556,
  SkillsProjectTagsNodeLocale = 557,
  SkillsProjectTagsOss = 558,
  SkillsProjectTagsProject = 559,
  SkillsProjectTagsSkillGrpup = 560,
  SkillsProjectTagsSkillMap = 561,
  SkillsProjectTagsSpaceId = 562,
  SkillsProjectTagsUpdatedAt = 563,
  SkillsProjectUpdatedAt = 564,
  SkillsSkillGrpup = 565,
  SkillsSkillGrpupChildren = 566,
  SkillsSkillGrpupChildrenChildren = 567,
  SkillsSkillGrpupChildrenId = 568,
  SkillsSkillGrpupContentfulId = 569,
  SkillsSkillGrpupCreatedAt = 570,
  SkillsSkillGrpupId = 571,
  SkillsSkillGrpupInternalContent = 572,
  SkillsSkillGrpupInternalContentDigest = 573,
  SkillsSkillGrpupInternalDescription = 574,
  SkillsSkillGrpupInternalFieldOwners = 575,
  SkillsSkillGrpupInternalIgnoreType = 576,
  SkillsSkillGrpupInternalMediaType = 577,
  SkillsSkillGrpupInternalOwner = 578,
  SkillsSkillGrpupInternalType = 579,
  SkillsSkillGrpupName = 580,
  SkillsSkillGrpupNodeLocale = 581,
  SkillsSkillGrpupParentChildren = 582,
  SkillsSkillGrpupParentId = 583,
  SkillsSkillGrpupSkillMap = 584,
  SkillsSkillGrpupSkillMapChildren = 585,
  SkillsSkillGrpupSkillMapContentfulId = 586,
  SkillsSkillGrpupSkillMapCreatedAt = 587,
  SkillsSkillGrpupSkillMapExpanded = 588,
  SkillsSkillGrpupSkillMapId = 589,
  SkillsSkillGrpupSkillMapName = 590,
  SkillsSkillGrpupSkillMapNodeLocale = 591,
  SkillsSkillGrpupSkillMapSkillGroups = 592,
  SkillsSkillGrpupSkillMapSkills = 593,
  SkillsSkillGrpupSkillMapSortKey = 594,
  SkillsSkillGrpupSkillMapSpaceId = 595,
  SkillsSkillGrpupSkillMapUpdatedAt = 596,
  SkillsSkillGrpupSkills = 597,
  SkillsSkillGrpupSkillsBlogPost = 598,
  SkillsSkillGrpupSkillsChildren = 599,
  SkillsSkillGrpupSkillsContentfulId = 600,
  SkillsSkillGrpupSkillsCreatedAt = 601,
  SkillsSkillGrpupSkillsId = 602,
  SkillsSkillGrpupSkillsLevel = 603,
  SkillsSkillGrpupSkillsName = 604,
  SkillsSkillGrpupSkillsNodeLocale = 605,
  SkillsSkillGrpupSkillsOss = 606,
  SkillsSkillGrpupSkillsProject = 607,
  SkillsSkillGrpupSkillsSkillGrpup = 608,
  SkillsSkillGrpupSkillsSkillMap = 609,
  SkillsSkillGrpupSkillsSpaceId = 610,
  SkillsSkillGrpupSkillsUpdatedAt = 611,
  SkillsSkillGrpupSpaceId = 612,
  SkillsSkillGrpupSysRevision = 613,
  SkillsSkillGrpupSysType = 614,
  SkillsSkillGrpupUpdatedAt = 615,
  SkillsSkillMap = 616,
  SkillsSkillMapChildren = 617,
  SkillsSkillMapChildrenChildren = 618,
  SkillsSkillMapChildrenId = 619,
  SkillsSkillMapContentfulId = 620,
  SkillsSkillMapCreatedAt = 621,
  SkillsSkillMapExpanded = 622,
  SkillsSkillMapId = 623,
  SkillsSkillMapInternalContent = 624,
  SkillsSkillMapInternalContentDigest = 625,
  SkillsSkillMapInternalDescription = 626,
  SkillsSkillMapInternalFieldOwners = 627,
  SkillsSkillMapInternalIgnoreType = 628,
  SkillsSkillMapInternalMediaType = 629,
  SkillsSkillMapInternalOwner = 630,
  SkillsSkillMapInternalType = 631,
  SkillsSkillMapName = 632,
  SkillsSkillMapNodeLocale = 633,
  SkillsSkillMapParentChildren = 634,
  SkillsSkillMapParentId = 635,
  SkillsSkillMapSkillGroups = 636,
  SkillsSkillMapSkillGroupsChildren = 637,
  SkillsSkillMapSkillGroupsContentfulId = 638,
  SkillsSkillMapSkillGroupsCreatedAt = 639,
  SkillsSkillMapSkillGroupsId = 640,
  SkillsSkillMapSkillGroupsName = 641,
  SkillsSkillMapSkillGroupsNodeLocale = 642,
  SkillsSkillMapSkillGroupsSkillMap = 643,
  SkillsSkillMapSkillGroupsSkills = 644,
  SkillsSkillMapSkillGroupsSpaceId = 645,
  SkillsSkillMapSkillGroupsUpdatedAt = 646,
  SkillsSkillMapSkills = 647,
  SkillsSkillMapSkillsBlogPost = 648,
  SkillsSkillMapSkillsChildren = 649,
  SkillsSkillMapSkillsContentfulId = 650,
  SkillsSkillMapSkillsCreatedAt = 651,
  SkillsSkillMapSkillsId = 652,
  SkillsSkillMapSkillsLevel = 653,
  SkillsSkillMapSkillsName = 654,
  SkillsSkillMapSkillsNodeLocale = 655,
  SkillsSkillMapSkillsOss = 656,
  SkillsSkillMapSkillsProject = 657,
  SkillsSkillMapSkillsSkillGrpup = 658,
  SkillsSkillMapSkillsSkillMap = 659,
  SkillsSkillMapSkillsSpaceId = 660,
  SkillsSkillMapSkillsUpdatedAt = 661,
  SkillsSkillMapSortKey = 662,
  SkillsSkillMapSpaceId = 663,
  SkillsSkillMapSysRevision = 664,
  SkillsSkillMapSysType = 665,
  SkillsSkillMapUpdatedAt = 666,
  SkillsSpaceId = 667,
  SkillsSysRevision = 668,
  SkillsSysType = 669,
  SkillsUpdatedAt = 670,
  SortKey = 671,
  SpaceId = 672,
  SysContentTypeSysId = 673,
  SysContentTypeSysLinkType = 674,
  SysContentTypeSysType = 675,
  SysRevision = 676,
  SysType = 677,
  UpdatedAt = 678
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
  skillGroups: InputMaybe<ContentfulSkillGrpupFilterListInput>;
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
  skill_grpup: Maybe<Array<Maybe<ContentfulSkillGrpup>>>;
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
  BlogPostTagsSkillGrpup = 273,
  BlogPostTagsSkillGrpupChildren = 274,
  BlogPostTagsSkillGrpupContentfulId = 275,
  BlogPostTagsSkillGrpupCreatedAt = 276,
  BlogPostTagsSkillGrpupId = 277,
  BlogPostTagsSkillGrpupName = 278,
  BlogPostTagsSkillGrpupNodeLocale = 279,
  BlogPostTagsSkillGrpupSkillMap = 280,
  BlogPostTagsSkillGrpupSkills = 281,
  BlogPostTagsSkillGrpupSpaceId = 282,
  BlogPostTagsSkillGrpupUpdatedAt = 283,
  BlogPostTagsSkillMap = 284,
  BlogPostTagsSkillMapChildren = 285,
  BlogPostTagsSkillMapContentfulId = 286,
  BlogPostTagsSkillMapCreatedAt = 287,
  BlogPostTagsSkillMapExpanded = 288,
  BlogPostTagsSkillMapId = 289,
  BlogPostTagsSkillMapName = 290,
  BlogPostTagsSkillMapNodeLocale = 291,
  BlogPostTagsSkillMapSkillGroups = 292,
  BlogPostTagsSkillMapSkills = 293,
  BlogPostTagsSkillMapSortKey = 294,
  BlogPostTagsSkillMapSpaceId = 295,
  BlogPostTagsSkillMapUpdatedAt = 296,
  BlogPostTagsSpaceId = 297,
  BlogPostTagsSysRevision = 298,
  BlogPostTagsSysType = 299,
  BlogPostTagsUpdatedAt = 300,
  BlogPostThumbnailChildren = 301,
  BlogPostThumbnailChildrenChildren = 302,
  BlogPostThumbnailChildrenId = 303,
  BlogPostThumbnailContentfulId = 304,
  BlogPostThumbnailCreatedAt = 305,
  BlogPostThumbnailDescription = 306,
  BlogPostThumbnailFileContentType = 307,
  BlogPostThumbnailFileFileName = 308,
  BlogPostThumbnailFileUrl = 309,
  BlogPostThumbnailFilename = 310,
  BlogPostThumbnailFilesize = 311,
  BlogPostThumbnailGatsbyImage = 312,
  BlogPostThumbnailGatsbyImageData = 313,
  BlogPostThumbnailHeight = 314,
  BlogPostThumbnailId = 315,
  BlogPostThumbnailInternalContent = 316,
  BlogPostThumbnailInternalContentDigest = 317,
  BlogPostThumbnailInternalDescription = 318,
  BlogPostThumbnailInternalFieldOwners = 319,
  BlogPostThumbnailInternalIgnoreType = 320,
  BlogPostThumbnailInternalMediaType = 321,
  BlogPostThumbnailInternalOwner = 322,
  BlogPostThumbnailInternalType = 323,
  BlogPostThumbnailMimeType = 324,
  BlogPostThumbnailNodeLocale = 325,
  BlogPostThumbnailParentChildren = 326,
  BlogPostThumbnailParentId = 327,
  BlogPostThumbnailPlaceholderUrl = 328,
  BlogPostThumbnailPublicUrl = 329,
  BlogPostThumbnailResizeHeight = 330,
  BlogPostThumbnailResizeSrc = 331,
  BlogPostThumbnailResizeWidth = 332,
  BlogPostThumbnailSize = 333,
  BlogPostThumbnailSpaceId = 334,
  BlogPostThumbnailSysRevision = 335,
  BlogPostThumbnailSysType = 336,
  BlogPostThumbnailTitle = 337,
  BlogPostThumbnailUpdatedAt = 338,
  BlogPostThumbnailUrl = 339,
  BlogPostThumbnailWidth = 340,
  BlogPostTitle = 341,
  BlogPostUpdated = 342,
  BlogPostUpdatedAt = 343,
  Children = 344,
  ChildrenChildren = 345,
  ChildrenChildrenChildren = 346,
  ChildrenChildrenChildrenChildren = 347,
  ChildrenChildrenChildrenId = 348,
  ChildrenChildrenId = 349,
  ChildrenChildrenInternalContent = 350,
  ChildrenChildrenInternalContentDigest = 351,
  ChildrenChildrenInternalDescription = 352,
  ChildrenChildrenInternalFieldOwners = 353,
  ChildrenChildrenInternalIgnoreType = 354,
  ChildrenChildrenInternalMediaType = 355,
  ChildrenChildrenInternalOwner = 356,
  ChildrenChildrenInternalType = 357,
  ChildrenChildrenParentChildren = 358,
  ChildrenChildrenParentId = 359,
  ChildrenId = 360,
  ChildrenInternalContent = 361,
  ChildrenInternalContentDigest = 362,
  ChildrenInternalDescription = 363,
  ChildrenInternalFieldOwners = 364,
  ChildrenInternalIgnoreType = 365,
  ChildrenInternalMediaType = 366,
  ChildrenInternalOwner = 367,
  ChildrenInternalType = 368,
  ChildrenParentChildren = 369,
  ChildrenParentChildrenChildren = 370,
  ChildrenParentChildrenId = 371,
  ChildrenParentId = 372,
  ChildrenParentInternalContent = 373,
  ChildrenParentInternalContentDigest = 374,
  ChildrenParentInternalDescription = 375,
  ChildrenParentInternalFieldOwners = 376,
  ChildrenParentInternalIgnoreType = 377,
  ChildrenParentInternalMediaType = 378,
  ChildrenParentInternalOwner = 379,
  ChildrenParentInternalType = 380,
  ChildrenParentParentChildren = 381,
  ChildrenParentParentId = 382,
  ContentfulId = 383,
  CreatedAt = 384,
  Id = 385,
  InternalContent = 386,
  InternalContentDigest = 387,
  InternalDescription = 388,
  InternalFieldOwners = 389,
  InternalIgnoreType = 390,
  InternalMediaType = 391,
  InternalOwner = 392,
  InternalType = 393,
  Level = 394,
  Name = 395,
  NodeLocale = 396,
  Oss = 397,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 398,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 399,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 400,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 401,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 402,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 403,
  OssChildContentfulOssDetailTextNodeChildMdxId = 404,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 405,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 406,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 407,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 408,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 409,
  OssChildContentfulOssDetailTextNodeChildren = 410,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 411,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 412,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 413,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 414,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 415,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 416,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 417,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 418,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 419,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 420,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 421,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 422,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 423,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 424,
  OssChildContentfulOssDetailTextNodeChildrenId = 425,
  OssChildContentfulOssDetailTextNodeDetail = 426,
  OssChildContentfulOssDetailTextNodeId = 427,
  OssChildContentfulOssDetailTextNodeInternalContent = 428,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 429,
  OssChildContentfulOssDetailTextNodeInternalDescription = 430,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 431,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 432,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 433,
  OssChildContentfulOssDetailTextNodeInternalOwner = 434,
  OssChildContentfulOssDetailTextNodeInternalType = 435,
  OssChildContentfulOssDetailTextNodeParentChildren = 436,
  OssChildContentfulOssDetailTextNodeParentId = 437,
  OssChildContentfulOssDetailTextNodeSysType = 438,
  OssChildren = 439,
  OssChildrenContentfulOssDetailTextNode = 440,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 441,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 442,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 443,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 444,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 445,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 446,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 447,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 448,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 449,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 450,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 451,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 452,
  OssChildrenContentfulOssDetailTextNodeChildren = 453,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 454,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 455,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 456,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 457,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 458,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 459,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 460,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 461,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 462,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 463,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 464,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 465,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 466,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 467,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 468,
  OssChildrenContentfulOssDetailTextNodeDetail = 469,
  OssChildrenContentfulOssDetailTextNodeId = 470,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 471,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 472,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 473,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 474,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 475,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 476,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 477,
  OssChildrenContentfulOssDetailTextNodeInternalType = 478,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 479,
  OssChildrenContentfulOssDetailTextNodeParentId = 480,
  OssChildrenContentfulOssDetailTextNodeSysType = 481,
  OssChildrenChildren = 482,
  OssChildrenChildrenChildren = 483,
  OssChildrenChildrenId = 484,
  OssChildrenId = 485,
  OssChildrenInternalContent = 486,
  OssChildrenInternalContentDigest = 487,
  OssChildrenInternalDescription = 488,
  OssChildrenInternalFieldOwners = 489,
  OssChildrenInternalIgnoreType = 490,
  OssChildrenInternalMediaType = 491,
  OssChildrenInternalOwner = 492,
  OssChildrenInternalType = 493,
  OssChildrenParentChildren = 494,
  OssChildrenParentId = 495,
  OssContentfulId = 496,
  OssCreatedAt = 497,
  OssDetailChildMdxBody = 498,
  OssDetailChildMdxChildren = 499,
  OssDetailChildMdxExcerpt = 500,
  OssDetailChildMdxFileAbsolutePath = 501,
  OssDetailChildMdxHeadings = 502,
  OssDetailChildMdxHtml = 503,
  OssDetailChildMdxId = 504,
  OssDetailChildMdxMdxAst = 505,
  OssDetailChildMdxRawBody = 506,
  OssDetailChildMdxSlug = 507,
  OssDetailChildMdxTableOfContents = 508,
  OssDetailChildMdxTimeToRead = 509,
  OssDetailChildren = 510,
  OssDetailChildrenMdx = 511,
  OssDetailChildrenMdxBody = 512,
  OssDetailChildrenMdxChildren = 513,
  OssDetailChildrenMdxExcerpt = 514,
  OssDetailChildrenMdxFileAbsolutePath = 515,
  OssDetailChildrenMdxHeadings = 516,
  OssDetailChildrenMdxHtml = 517,
  OssDetailChildrenMdxId = 518,
  OssDetailChildrenMdxMdxAst = 519,
  OssDetailChildrenMdxRawBody = 520,
  OssDetailChildrenMdxSlug = 521,
  OssDetailChildrenMdxTableOfContents = 522,
  OssDetailChildrenMdxTimeToRead = 523,
  OssDetailChildrenChildren = 524,
  OssDetailChildrenId = 525,
  OssDetailDetail = 526,
  OssDetailId = 527,
  OssDetailInternalContent = 528,
  OssDetailInternalContentDigest = 529,
  OssDetailInternalDescription = 530,
  OssDetailInternalFieldOwners = 531,
  OssDetailInternalIgnoreType = 532,
  OssDetailInternalMediaType = 533,
  OssDetailInternalOwner = 534,
  OssDetailInternalType = 535,
  OssDetailParentChildren = 536,
  OssDetailParentId = 537,
  OssDetailSysType = 538,
  OssHref = 539,
  OssIconChildContentfulIconSvgTextNodeChildren = 540,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 541,
  OssIconChildContentfulIconSvgTextNodeId = 542,
  OssIconChildContentfulIconSvgTextNodeSvg = 543,
  OssIconChildren = 544,
  OssIconChildrenContentfulIconSvgTextNode = 545,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 546,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 547,
  OssIconChildrenContentfulIconSvgTextNodeId = 548,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 549,
  OssIconChildrenChildren = 550,
  OssIconChildrenId = 551,
  OssIconContact = 552,
  OssIconContactChildren = 553,
  OssIconContactContentfulId = 554,
  OssIconContactCreatedAt = 555,
  OssIconContactHref = 556,
  OssIconContactId = 557,
  OssIconContactName = 558,
  OssIconContactNodeLocale = 559,
  OssIconContactSortKey = 560,
  OssIconContactSpaceId = 561,
  OssIconContactSubName = 562,
  OssIconContactUpdatedAt = 563,
  OssIconContentfulId = 564,
  OssIconCreatedAt = 565,
  OssIconHistory = 566,
  OssIconHistoryChildren = 567,
  OssIconHistoryContentfulId = 568,
  OssIconHistoryCreatedAt = 569,
  OssIconHistoryDate = 570,
  OssIconHistoryId = 571,
  OssIconHistoryName = 572,
  OssIconHistoryNodeLocale = 573,
  OssIconHistorySpaceId = 574,
  OssIconHistorySubName = 575,
  OssIconHistoryUpdatedAt = 576,
  OssIconId = 577,
  OssIconInternalContent = 578,
  OssIconInternalContentDigest = 579,
  OssIconInternalDescription = 580,
  OssIconInternalFieldOwners = 581,
  OssIconInternalIgnoreType = 582,
  OssIconInternalMediaType = 583,
  OssIconInternalOwner = 584,
  OssIconInternalType = 585,
  OssIconName = 586,
  OssIconNodeLocale = 587,
  OssIconOss = 588,
  OssIconOssChildren = 589,
  OssIconOssChildrenContentfulOssDetailTextNode = 590,
  OssIconOssContentfulId = 591,
  OssIconOssCreatedAt = 592,
  OssIconOssHref = 593,
  OssIconOssId = 594,
  OssIconOssName = 595,
  OssIconOssNodeLocale = 596,
  OssIconOssSpaceId = 597,
  OssIconOssStartDate = 598,
  OssIconOssSubName = 599,
  OssIconOssTags = 600,
  OssIconOssUpdatedAt = 601,
  OssIconParentChildren = 602,
  OssIconParentId = 603,
  OssIconProject = 604,
  OssIconProjectChildren = 605,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 606,
  OssIconProjectContentfulId = 607,
  OssIconProjectCreatedAt = 608,
  OssIconProjectEndDate = 609,
  OssIconProjectId = 610,
  OssIconProjectName = 611,
  OssIconProjectNodeLocale = 612,
  OssIconProjectSpaceId = 613,
  OssIconProjectStartDate = 614,
  OssIconProjectSubName = 615,
  OssIconProjectTags = 616,
  OssIconProjectUpdatedAt = 617,
  OssIconSpaceId = 618,
  OssIconSvgChildren = 619,
  OssIconSvgChildrenMdx = 620,
  OssIconSvgId = 621,
  OssIconSvgSvg = 622,
  OssIconSysRevision = 623,
  OssIconSysType = 624,
  OssIconUpdatedAt = 625,
  OssIconWhatICanDo = 626,
  OssIconWhatICanDoChildren = 627,
  OssIconWhatICanDoContentfulId = 628,
  OssIconWhatICanDoCreatedAt = 629,
  OssIconWhatICanDoId = 630,
  OssIconWhatICanDoName = 631,
  OssIconWhatICanDoNodeLocale = 632,
  OssIconWhatICanDoSortKey = 633,
  OssIconWhatICanDoSpaceId = 634,
  OssIconWhatICanDoSubName = 635,
  OssIconWhatICanDoUpdatedAt = 636,
  OssId = 637,
  OssImageChildren = 638,
  OssImageChildrenChildren = 639,
  OssImageChildrenId = 640,
  OssImageContentfulId = 641,
  OssImageCreatedAt = 642,
  OssImageDescription = 643,
  OssImageFileContentType = 644,
  OssImageFileFileName = 645,
  OssImageFileUrl = 646,
  OssImageFilename = 647,
  OssImageFilesize = 648,
  OssImageGatsbyImage = 649,
  OssImageGatsbyImageData = 650,
  OssImageHeight = 651,
  OssImageId = 652,
  OssImageInternalContent = 653,
  OssImageInternalContentDigest = 654,
  OssImageInternalDescription = 655,
  OssImageInternalFieldOwners = 656,
  OssImageInternalIgnoreType = 657,
  OssImageInternalMediaType = 658,
  OssImageInternalOwner = 659,
  OssImageInternalType = 660,
  OssImageMimeType = 661,
  OssImageNodeLocale = 662,
  OssImageParentChildren = 663,
  OssImageParentId = 664,
  OssImagePlaceholderUrl = 665,
  OssImagePublicUrl = 666,
  OssImageResizeHeight = 667,
  OssImageResizeSrc = 668,
  OssImageResizeWidth = 669,
  OssImageSize = 670,
  OssImageSpaceId = 671,
  OssImageSysRevision = 672,
  OssImageSysType = 673,
  OssImageTitle = 674,
  OssImageUpdatedAt = 675,
  OssImageUrl = 676,
  OssImageWidth = 677,
  OssInternalContent = 678,
  OssInternalContentDigest = 679,
  OssInternalDescription = 680,
  OssInternalFieldOwners = 681,
  OssInternalIgnoreType = 682,
  OssInternalMediaType = 683,
  OssInternalOwner = 684,
  OssInternalType = 685,
  OssName = 686,
  OssNodeLocale = 687,
  OssParentChildren = 688,
  OssParentChildrenChildren = 689,
  OssParentChildrenId = 690,
  OssParentId = 691,
  OssParentInternalContent = 692,
  OssParentInternalContentDigest = 693,
  OssParentInternalDescription = 694,
  OssParentInternalFieldOwners = 695,
  OssParentInternalIgnoreType = 696,
  OssParentInternalMediaType = 697,
  OssParentInternalOwner = 698,
  OssParentInternalType = 699,
  OssParentParentChildren = 700,
  OssParentParentId = 701,
  OssSpaceId = 702,
  OssStartDate = 703,
  OssSubName = 704,
  OssSysRevision = 705,
  OssSysType = 706,
  OssTags = 707,
  OssTagsBlogPost = 708,
  OssTagsBlogPostChildren = 709,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 710,
  OssTagsBlogPostContentfulId = 711,
  OssTagsBlogPostCreated = 712,
  OssTagsBlogPostCreatedAt = 713,
  OssTagsBlogPostExcerpt = 714,
  OssTagsBlogPostId = 715,
  OssTagsBlogPostNodeLocale = 716,
  OssTagsBlogPostSlug = 717,
  OssTagsBlogPostSpaceId = 718,
  OssTagsBlogPostTags = 719,
  OssTagsBlogPostTitle = 720,
  OssTagsBlogPostUpdated = 721,
  OssTagsBlogPostUpdatedAt = 722,
  OssTagsChildren = 723,
  OssTagsChildrenChildren = 724,
  OssTagsChildrenId = 725,
  OssTagsContentfulId = 726,
  OssTagsCreatedAt = 727,
  OssTagsId = 728,
  OssTagsInternalContent = 729,
  OssTagsInternalContentDigest = 730,
  OssTagsInternalDescription = 731,
  OssTagsInternalFieldOwners = 732,
  OssTagsInternalIgnoreType = 733,
  OssTagsInternalMediaType = 734,
  OssTagsInternalOwner = 735,
  OssTagsInternalType = 736,
  OssTagsLevel = 737,
  OssTagsName = 738,
  OssTagsNodeLocale = 739,
  OssTagsOss = 740,
  OssTagsOssChildren = 741,
  OssTagsOssChildrenContentfulOssDetailTextNode = 742,
  OssTagsOssContentfulId = 743,
  OssTagsOssCreatedAt = 744,
  OssTagsOssHref = 745,
  OssTagsOssId = 746,
  OssTagsOssName = 747,
  OssTagsOssNodeLocale = 748,
  OssTagsOssSpaceId = 749,
  OssTagsOssStartDate = 750,
  OssTagsOssSubName = 751,
  OssTagsOssTags = 752,
  OssTagsOssUpdatedAt = 753,
  OssTagsParentChildren = 754,
  OssTagsParentId = 755,
  OssTagsProject = 756,
  OssTagsProjectChildren = 757,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 758,
  OssTagsProjectContentfulId = 759,
  OssTagsProjectCreatedAt = 760,
  OssTagsProjectEndDate = 761,
  OssTagsProjectId = 762,
  OssTagsProjectName = 763,
  OssTagsProjectNodeLocale = 764,
  OssTagsProjectSpaceId = 765,
  OssTagsProjectStartDate = 766,
  OssTagsProjectSubName = 767,
  OssTagsProjectTags = 768,
  OssTagsProjectUpdatedAt = 769,
  OssTagsSkillGrpup = 770,
  OssTagsSkillGrpupChildren = 771,
  OssTagsSkillGrpupContentfulId = 772,
  OssTagsSkillGrpupCreatedAt = 773,
  OssTagsSkillGrpupId = 774,
  OssTagsSkillGrpupName = 775,
  OssTagsSkillGrpupNodeLocale = 776,
  OssTagsSkillGrpupSkillMap = 777,
  OssTagsSkillGrpupSkills = 778,
  OssTagsSkillGrpupSpaceId = 779,
  OssTagsSkillGrpupUpdatedAt = 780,
  OssTagsSkillMap = 781,
  OssTagsSkillMapChildren = 782,
  OssTagsSkillMapContentfulId = 783,
  OssTagsSkillMapCreatedAt = 784,
  OssTagsSkillMapExpanded = 785,
  OssTagsSkillMapId = 786,
  OssTagsSkillMapName = 787,
  OssTagsSkillMapNodeLocale = 788,
  OssTagsSkillMapSkillGroups = 789,
  OssTagsSkillMapSkills = 790,
  OssTagsSkillMapSortKey = 791,
  OssTagsSkillMapSpaceId = 792,
  OssTagsSkillMapUpdatedAt = 793,
  OssTagsSpaceId = 794,
  OssTagsSysRevision = 795,
  OssTagsSysType = 796,
  OssTagsUpdatedAt = 797,
  OssUpdatedAt = 798,
  ParentChildren = 799,
  ParentChildrenChildren = 800,
  ParentChildrenChildrenChildren = 801,
  ParentChildrenChildrenId = 802,
  ParentChildrenId = 803,
  ParentChildrenInternalContent = 804,
  ParentChildrenInternalContentDigest = 805,
  ParentChildrenInternalDescription = 806,
  ParentChildrenInternalFieldOwners = 807,
  ParentChildrenInternalIgnoreType = 808,
  ParentChildrenInternalMediaType = 809,
  ParentChildrenInternalOwner = 810,
  ParentChildrenInternalType = 811,
  ParentChildrenParentChildren = 812,
  ParentChildrenParentId = 813,
  ParentId = 814,
  ParentInternalContent = 815,
  ParentInternalContentDigest = 816,
  ParentInternalDescription = 817,
  ParentInternalFieldOwners = 818,
  ParentInternalIgnoreType = 819,
  ParentInternalMediaType = 820,
  ParentInternalOwner = 821,
  ParentInternalType = 822,
  ParentParentChildren = 823,
  ParentParentChildrenChildren = 824,
  ParentParentChildrenId = 825,
  ParentParentId = 826,
  ParentParentInternalContent = 827,
  ParentParentInternalContentDigest = 828,
  ParentParentInternalDescription = 829,
  ParentParentInternalFieldOwners = 830,
  ParentParentInternalIgnoreType = 831,
  ParentParentInternalMediaType = 832,
  ParentParentInternalOwner = 833,
  ParentParentInternalType = 834,
  ParentParentParentChildren = 835,
  ParentParentParentId = 836,
  Project = 837,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 838,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 839,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 840,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 841,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 842,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 843,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 844,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 845,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 846,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 847,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 848,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 849,
  ProjectChildContentfulProjectDetailTextNodeChildren = 850,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 851,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 852,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 853,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 854,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 855,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 856,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 857,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 858,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 859,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 860,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 861,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 862,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 863,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 864,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 865,
  ProjectChildContentfulProjectDetailTextNodeDetail = 866,
  ProjectChildContentfulProjectDetailTextNodeId = 867,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 868,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 869,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 870,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 871,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 872,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 873,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 874,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 875,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 876,
  ProjectChildContentfulProjectDetailTextNodeParentId = 877,
  ProjectChildContentfulProjectDetailTextNodeSysType = 878,
  ProjectChildren = 879,
  ProjectChildrenContentfulProjectDetailTextNode = 880,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 881,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 882,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 883,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 884,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 885,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 886,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 887,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 888,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 889,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 890,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 891,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 892,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 893,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 894,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 895,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 896,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 897,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 898,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 899,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 900,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 901,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 902,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 903,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 904,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 905,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 906,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 907,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 908,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 909,
  ProjectChildrenContentfulProjectDetailTextNodeId = 910,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 911,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 912,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 913,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 914,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 915,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 916,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 917,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 918,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 919,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 920,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 921,
  ProjectChildrenChildren = 922,
  ProjectChildrenChildrenChildren = 923,
  ProjectChildrenChildrenId = 924,
  ProjectChildrenId = 925,
  ProjectChildrenInternalContent = 926,
  ProjectChildrenInternalContentDigest = 927,
  ProjectChildrenInternalDescription = 928,
  ProjectChildrenInternalFieldOwners = 929,
  ProjectChildrenInternalIgnoreType = 930,
  ProjectChildrenInternalMediaType = 931,
  ProjectChildrenInternalOwner = 932,
  ProjectChildrenInternalType = 933,
  ProjectChildrenParentChildren = 934,
  ProjectChildrenParentId = 935,
  ProjectContentfulId = 936,
  ProjectCreatedAt = 937,
  ProjectDetailChildMdxBody = 938,
  ProjectDetailChildMdxChildren = 939,
  ProjectDetailChildMdxExcerpt = 940,
  ProjectDetailChildMdxFileAbsolutePath = 941,
  ProjectDetailChildMdxHeadings = 942,
  ProjectDetailChildMdxHtml = 943,
  ProjectDetailChildMdxId = 944,
  ProjectDetailChildMdxMdxAst = 945,
  ProjectDetailChildMdxRawBody = 946,
  ProjectDetailChildMdxSlug = 947,
  ProjectDetailChildMdxTableOfContents = 948,
  ProjectDetailChildMdxTimeToRead = 949,
  ProjectDetailChildren = 950,
  ProjectDetailChildrenMdx = 951,
  ProjectDetailChildrenMdxBody = 952,
  ProjectDetailChildrenMdxChildren = 953,
  ProjectDetailChildrenMdxExcerpt = 954,
  ProjectDetailChildrenMdxFileAbsolutePath = 955,
  ProjectDetailChildrenMdxHeadings = 956,
  ProjectDetailChildrenMdxHtml = 957,
  ProjectDetailChildrenMdxId = 958,
  ProjectDetailChildrenMdxMdxAst = 959,
  ProjectDetailChildrenMdxRawBody = 960,
  ProjectDetailChildrenMdxSlug = 961,
  ProjectDetailChildrenMdxTableOfContents = 962,
  ProjectDetailChildrenMdxTimeToRead = 963,
  ProjectDetailChildrenChildren = 964,
  ProjectDetailChildrenId = 965,
  ProjectDetailDetail = 966,
  ProjectDetailId = 967,
  ProjectDetailInternalContent = 968,
  ProjectDetailInternalContentDigest = 969,
  ProjectDetailInternalDescription = 970,
  ProjectDetailInternalFieldOwners = 971,
  ProjectDetailInternalIgnoreType = 972,
  ProjectDetailInternalMediaType = 973,
  ProjectDetailInternalOwner = 974,
  ProjectDetailInternalType = 975,
  ProjectDetailParentChildren = 976,
  ProjectDetailParentId = 977,
  ProjectDetailSysType = 978,
  ProjectEndDate = 979,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 980,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 981,
  ProjectIconChildContentfulIconSvgTextNodeId = 982,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 983,
  ProjectIconChildren = 984,
  ProjectIconChildrenContentfulIconSvgTextNode = 985,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 986,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 987,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 988,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 989,
  ProjectIconChildrenChildren = 990,
  ProjectIconChildrenId = 991,
  ProjectIconContact = 992,
  ProjectIconContactChildren = 993,
  ProjectIconContactContentfulId = 994,
  ProjectIconContactCreatedAt = 995,
  ProjectIconContactHref = 996,
  ProjectIconContactId = 997,
  ProjectIconContactName = 998,
  ProjectIconContactNodeLocale = 999,
  ProjectIconContactSortKey = 1000,
  ProjectIconContactSpaceId = 1001,
  ProjectIconContactSubName = 1002,
  ProjectIconContactUpdatedAt = 1003,
  ProjectIconContentfulId = 1004,
  ProjectIconCreatedAt = 1005,
  ProjectIconHistory = 1006,
  ProjectIconHistoryChildren = 1007,
  ProjectIconHistoryContentfulId = 1008,
  ProjectIconHistoryCreatedAt = 1009,
  ProjectIconHistoryDate = 1010,
  ProjectIconHistoryId = 1011,
  ProjectIconHistoryName = 1012,
  ProjectIconHistoryNodeLocale = 1013,
  ProjectIconHistorySpaceId = 1014,
  ProjectIconHistorySubName = 1015,
  ProjectIconHistoryUpdatedAt = 1016,
  ProjectIconId = 1017,
  ProjectIconInternalContent = 1018,
  ProjectIconInternalContentDigest = 1019,
  ProjectIconInternalDescription = 1020,
  ProjectIconInternalFieldOwners = 1021,
  ProjectIconInternalIgnoreType = 1022,
  ProjectIconInternalMediaType = 1023,
  ProjectIconInternalOwner = 1024,
  ProjectIconInternalType = 1025,
  ProjectIconName = 1026,
  ProjectIconNodeLocale = 1027,
  ProjectIconOss = 1028,
  ProjectIconOssChildren = 1029,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1030,
  ProjectIconOssContentfulId = 1031,
  ProjectIconOssCreatedAt = 1032,
  ProjectIconOssHref = 1033,
  ProjectIconOssId = 1034,
  ProjectIconOssName = 1035,
  ProjectIconOssNodeLocale = 1036,
  ProjectIconOssSpaceId = 1037,
  ProjectIconOssStartDate = 1038,
  ProjectIconOssSubName = 1039,
  ProjectIconOssTags = 1040,
  ProjectIconOssUpdatedAt = 1041,
  ProjectIconParentChildren = 1042,
  ProjectIconParentId = 1043,
  ProjectIconProject = 1044,
  ProjectIconProjectChildren = 1045,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1046,
  ProjectIconProjectContentfulId = 1047,
  ProjectIconProjectCreatedAt = 1048,
  ProjectIconProjectEndDate = 1049,
  ProjectIconProjectId = 1050,
  ProjectIconProjectName = 1051,
  ProjectIconProjectNodeLocale = 1052,
  ProjectIconProjectSpaceId = 1053,
  ProjectIconProjectStartDate = 1054,
  ProjectIconProjectSubName = 1055,
  ProjectIconProjectTags = 1056,
  ProjectIconProjectUpdatedAt = 1057,
  ProjectIconSpaceId = 1058,
  ProjectIconSvgChildren = 1059,
  ProjectIconSvgChildrenMdx = 1060,
  ProjectIconSvgId = 1061,
  ProjectIconSvgSvg = 1062,
  ProjectIconSysRevision = 1063,
  ProjectIconSysType = 1064,
  ProjectIconUpdatedAt = 1065,
  ProjectIconWhatICanDo = 1066,
  ProjectIconWhatICanDoChildren = 1067,
  ProjectIconWhatICanDoContentfulId = 1068,
  ProjectIconWhatICanDoCreatedAt = 1069,
  ProjectIconWhatICanDoId = 1070,
  ProjectIconWhatICanDoName = 1071,
  ProjectIconWhatICanDoNodeLocale = 1072,
  ProjectIconWhatICanDoSortKey = 1073,
  ProjectIconWhatICanDoSpaceId = 1074,
  ProjectIconWhatICanDoSubName = 1075,
  ProjectIconWhatICanDoUpdatedAt = 1076,
  ProjectId = 1077,
  ProjectInternalContent = 1078,
  ProjectInternalContentDigest = 1079,
  ProjectInternalDescription = 1080,
  ProjectInternalFieldOwners = 1081,
  ProjectInternalIgnoreType = 1082,
  ProjectInternalMediaType = 1083,
  ProjectInternalOwner = 1084,
  ProjectInternalType = 1085,
  ProjectName = 1086,
  ProjectNodeLocale = 1087,
  ProjectParentChildren = 1088,
  ProjectParentChildrenChildren = 1089,
  ProjectParentChildrenId = 1090,
  ProjectParentId = 1091,
  ProjectParentInternalContent = 1092,
  ProjectParentInternalContentDigest = 1093,
  ProjectParentInternalDescription = 1094,
  ProjectParentInternalFieldOwners = 1095,
  ProjectParentInternalIgnoreType = 1096,
  ProjectParentInternalMediaType = 1097,
  ProjectParentInternalOwner = 1098,
  ProjectParentInternalType = 1099,
  ProjectParentParentChildren = 1100,
  ProjectParentParentId = 1101,
  ProjectSpaceId = 1102,
  ProjectStartDate = 1103,
  ProjectSubName = 1104,
  ProjectSysRevision = 1105,
  ProjectSysType = 1106,
  ProjectTags = 1107,
  ProjectTagsBlogPost = 1108,
  ProjectTagsBlogPostChildren = 1109,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1110,
  ProjectTagsBlogPostContentfulId = 1111,
  ProjectTagsBlogPostCreated = 1112,
  ProjectTagsBlogPostCreatedAt = 1113,
  ProjectTagsBlogPostExcerpt = 1114,
  ProjectTagsBlogPostId = 1115,
  ProjectTagsBlogPostNodeLocale = 1116,
  ProjectTagsBlogPostSlug = 1117,
  ProjectTagsBlogPostSpaceId = 1118,
  ProjectTagsBlogPostTags = 1119,
  ProjectTagsBlogPostTitle = 1120,
  ProjectTagsBlogPostUpdated = 1121,
  ProjectTagsBlogPostUpdatedAt = 1122,
  ProjectTagsChildren = 1123,
  ProjectTagsChildrenChildren = 1124,
  ProjectTagsChildrenId = 1125,
  ProjectTagsContentfulId = 1126,
  ProjectTagsCreatedAt = 1127,
  ProjectTagsId = 1128,
  ProjectTagsInternalContent = 1129,
  ProjectTagsInternalContentDigest = 1130,
  ProjectTagsInternalDescription = 1131,
  ProjectTagsInternalFieldOwners = 1132,
  ProjectTagsInternalIgnoreType = 1133,
  ProjectTagsInternalMediaType = 1134,
  ProjectTagsInternalOwner = 1135,
  ProjectTagsInternalType = 1136,
  ProjectTagsLevel = 1137,
  ProjectTagsName = 1138,
  ProjectTagsNodeLocale = 1139,
  ProjectTagsOss = 1140,
  ProjectTagsOssChildren = 1141,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1142,
  ProjectTagsOssContentfulId = 1143,
  ProjectTagsOssCreatedAt = 1144,
  ProjectTagsOssHref = 1145,
  ProjectTagsOssId = 1146,
  ProjectTagsOssName = 1147,
  ProjectTagsOssNodeLocale = 1148,
  ProjectTagsOssSpaceId = 1149,
  ProjectTagsOssStartDate = 1150,
  ProjectTagsOssSubName = 1151,
  ProjectTagsOssTags = 1152,
  ProjectTagsOssUpdatedAt = 1153,
  ProjectTagsParentChildren = 1154,
  ProjectTagsParentId = 1155,
  ProjectTagsProject = 1156,
  ProjectTagsProjectChildren = 1157,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1158,
  ProjectTagsProjectContentfulId = 1159,
  ProjectTagsProjectCreatedAt = 1160,
  ProjectTagsProjectEndDate = 1161,
  ProjectTagsProjectId = 1162,
  ProjectTagsProjectName = 1163,
  ProjectTagsProjectNodeLocale = 1164,
  ProjectTagsProjectSpaceId = 1165,
  ProjectTagsProjectStartDate = 1166,
  ProjectTagsProjectSubName = 1167,
  ProjectTagsProjectTags = 1168,
  ProjectTagsProjectUpdatedAt = 1169,
  ProjectTagsSkillGrpup = 1170,
  ProjectTagsSkillGrpupChildren = 1171,
  ProjectTagsSkillGrpupContentfulId = 1172,
  ProjectTagsSkillGrpupCreatedAt = 1173,
  ProjectTagsSkillGrpupId = 1174,
  ProjectTagsSkillGrpupName = 1175,
  ProjectTagsSkillGrpupNodeLocale = 1176,
  ProjectTagsSkillGrpupSkillMap = 1177,
  ProjectTagsSkillGrpupSkills = 1178,
  ProjectTagsSkillGrpupSpaceId = 1179,
  ProjectTagsSkillGrpupUpdatedAt = 1180,
  ProjectTagsSkillMap = 1181,
  ProjectTagsSkillMapChildren = 1182,
  ProjectTagsSkillMapContentfulId = 1183,
  ProjectTagsSkillMapCreatedAt = 1184,
  ProjectTagsSkillMapExpanded = 1185,
  ProjectTagsSkillMapId = 1186,
  ProjectTagsSkillMapName = 1187,
  ProjectTagsSkillMapNodeLocale = 1188,
  ProjectTagsSkillMapSkillGroups = 1189,
  ProjectTagsSkillMapSkills = 1190,
  ProjectTagsSkillMapSortKey = 1191,
  ProjectTagsSkillMapSpaceId = 1192,
  ProjectTagsSkillMapUpdatedAt = 1193,
  ProjectTagsSpaceId = 1194,
  ProjectTagsSysRevision = 1195,
  ProjectTagsSysType = 1196,
  ProjectTagsUpdatedAt = 1197,
  ProjectUpdatedAt = 1198,
  SkillGrpup = 1199,
  SkillGrpupChildren = 1200,
  SkillGrpupChildrenChildren = 1201,
  SkillGrpupChildrenChildrenChildren = 1202,
  SkillGrpupChildrenChildrenId = 1203,
  SkillGrpupChildrenId = 1204,
  SkillGrpupChildrenInternalContent = 1205,
  SkillGrpupChildrenInternalContentDigest = 1206,
  SkillGrpupChildrenInternalDescription = 1207,
  SkillGrpupChildrenInternalFieldOwners = 1208,
  SkillGrpupChildrenInternalIgnoreType = 1209,
  SkillGrpupChildrenInternalMediaType = 1210,
  SkillGrpupChildrenInternalOwner = 1211,
  SkillGrpupChildrenInternalType = 1212,
  SkillGrpupChildrenParentChildren = 1213,
  SkillGrpupChildrenParentId = 1214,
  SkillGrpupContentfulId = 1215,
  SkillGrpupCreatedAt = 1216,
  SkillGrpupId = 1217,
  SkillGrpupInternalContent = 1218,
  SkillGrpupInternalContentDigest = 1219,
  SkillGrpupInternalDescription = 1220,
  SkillGrpupInternalFieldOwners = 1221,
  SkillGrpupInternalIgnoreType = 1222,
  SkillGrpupInternalMediaType = 1223,
  SkillGrpupInternalOwner = 1224,
  SkillGrpupInternalType = 1225,
  SkillGrpupName = 1226,
  SkillGrpupNodeLocale = 1227,
  SkillGrpupParentChildren = 1228,
  SkillGrpupParentChildrenChildren = 1229,
  SkillGrpupParentChildrenId = 1230,
  SkillGrpupParentId = 1231,
  SkillGrpupParentInternalContent = 1232,
  SkillGrpupParentInternalContentDigest = 1233,
  SkillGrpupParentInternalDescription = 1234,
  SkillGrpupParentInternalFieldOwners = 1235,
  SkillGrpupParentInternalIgnoreType = 1236,
  SkillGrpupParentInternalMediaType = 1237,
  SkillGrpupParentInternalOwner = 1238,
  SkillGrpupParentInternalType = 1239,
  SkillGrpupParentParentChildren = 1240,
  SkillGrpupParentParentId = 1241,
  SkillGrpupSkillMap = 1242,
  SkillGrpupSkillMapChildren = 1243,
  SkillGrpupSkillMapChildrenChildren = 1244,
  SkillGrpupSkillMapChildrenId = 1245,
  SkillGrpupSkillMapContentfulId = 1246,
  SkillGrpupSkillMapCreatedAt = 1247,
  SkillGrpupSkillMapExpanded = 1248,
  SkillGrpupSkillMapId = 1249,
  SkillGrpupSkillMapInternalContent = 1250,
  SkillGrpupSkillMapInternalContentDigest = 1251,
  SkillGrpupSkillMapInternalDescription = 1252,
  SkillGrpupSkillMapInternalFieldOwners = 1253,
  SkillGrpupSkillMapInternalIgnoreType = 1254,
  SkillGrpupSkillMapInternalMediaType = 1255,
  SkillGrpupSkillMapInternalOwner = 1256,
  SkillGrpupSkillMapInternalType = 1257,
  SkillGrpupSkillMapName = 1258,
  SkillGrpupSkillMapNodeLocale = 1259,
  SkillGrpupSkillMapParentChildren = 1260,
  SkillGrpupSkillMapParentId = 1261,
  SkillGrpupSkillMapSkillGroups = 1262,
  SkillGrpupSkillMapSkillGroupsChildren = 1263,
  SkillGrpupSkillMapSkillGroupsContentfulId = 1264,
  SkillGrpupSkillMapSkillGroupsCreatedAt = 1265,
  SkillGrpupSkillMapSkillGroupsId = 1266,
  SkillGrpupSkillMapSkillGroupsName = 1267,
  SkillGrpupSkillMapSkillGroupsNodeLocale = 1268,
  SkillGrpupSkillMapSkillGroupsSkillMap = 1269,
  SkillGrpupSkillMapSkillGroupsSkills = 1270,
  SkillGrpupSkillMapSkillGroupsSpaceId = 1271,
  SkillGrpupSkillMapSkillGroupsUpdatedAt = 1272,
  SkillGrpupSkillMapSkills = 1273,
  SkillGrpupSkillMapSkillsBlogPost = 1274,
  SkillGrpupSkillMapSkillsChildren = 1275,
  SkillGrpupSkillMapSkillsContentfulId = 1276,
  SkillGrpupSkillMapSkillsCreatedAt = 1277,
  SkillGrpupSkillMapSkillsId = 1278,
  SkillGrpupSkillMapSkillsLevel = 1279,
  SkillGrpupSkillMapSkillsName = 1280,
  SkillGrpupSkillMapSkillsNodeLocale = 1281,
  SkillGrpupSkillMapSkillsOss = 1282,
  SkillGrpupSkillMapSkillsProject = 1283,
  SkillGrpupSkillMapSkillsSkillGrpup = 1284,
  SkillGrpupSkillMapSkillsSkillMap = 1285,
  SkillGrpupSkillMapSkillsSpaceId = 1286,
  SkillGrpupSkillMapSkillsUpdatedAt = 1287,
  SkillGrpupSkillMapSortKey = 1288,
  SkillGrpupSkillMapSpaceId = 1289,
  SkillGrpupSkillMapSysRevision = 1290,
  SkillGrpupSkillMapSysType = 1291,
  SkillGrpupSkillMapUpdatedAt = 1292,
  SkillGrpupSkills = 1293,
  SkillGrpupSkillsBlogPost = 1294,
  SkillGrpupSkillsBlogPostChildren = 1295,
  SkillGrpupSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1296,
  SkillGrpupSkillsBlogPostContentfulId = 1297,
  SkillGrpupSkillsBlogPostCreated = 1298,
  SkillGrpupSkillsBlogPostCreatedAt = 1299,
  SkillGrpupSkillsBlogPostExcerpt = 1300,
  SkillGrpupSkillsBlogPostId = 1301,
  SkillGrpupSkillsBlogPostNodeLocale = 1302,
  SkillGrpupSkillsBlogPostSlug = 1303,
  SkillGrpupSkillsBlogPostSpaceId = 1304,
  SkillGrpupSkillsBlogPostTags = 1305,
  SkillGrpupSkillsBlogPostTitle = 1306,
  SkillGrpupSkillsBlogPostUpdated = 1307,
  SkillGrpupSkillsBlogPostUpdatedAt = 1308,
  SkillGrpupSkillsChildren = 1309,
  SkillGrpupSkillsChildrenChildren = 1310,
  SkillGrpupSkillsChildrenId = 1311,
  SkillGrpupSkillsContentfulId = 1312,
  SkillGrpupSkillsCreatedAt = 1313,
  SkillGrpupSkillsId = 1314,
  SkillGrpupSkillsInternalContent = 1315,
  SkillGrpupSkillsInternalContentDigest = 1316,
  SkillGrpupSkillsInternalDescription = 1317,
  SkillGrpupSkillsInternalFieldOwners = 1318,
  SkillGrpupSkillsInternalIgnoreType = 1319,
  SkillGrpupSkillsInternalMediaType = 1320,
  SkillGrpupSkillsInternalOwner = 1321,
  SkillGrpupSkillsInternalType = 1322,
  SkillGrpupSkillsLevel = 1323,
  SkillGrpupSkillsName = 1324,
  SkillGrpupSkillsNodeLocale = 1325,
  SkillGrpupSkillsOss = 1326,
  SkillGrpupSkillsOssChildren = 1327,
  SkillGrpupSkillsOssChildrenContentfulOssDetailTextNode = 1328,
  SkillGrpupSkillsOssContentfulId = 1329,
  SkillGrpupSkillsOssCreatedAt = 1330,
  SkillGrpupSkillsOssHref = 1331,
  SkillGrpupSkillsOssId = 1332,
  SkillGrpupSkillsOssName = 1333,
  SkillGrpupSkillsOssNodeLocale = 1334,
  SkillGrpupSkillsOssSpaceId = 1335,
  SkillGrpupSkillsOssStartDate = 1336,
  SkillGrpupSkillsOssSubName = 1337,
  SkillGrpupSkillsOssTags = 1338,
  SkillGrpupSkillsOssUpdatedAt = 1339,
  SkillGrpupSkillsParentChildren = 1340,
  SkillGrpupSkillsParentId = 1341,
  SkillGrpupSkillsProject = 1342,
  SkillGrpupSkillsProjectChildren = 1343,
  SkillGrpupSkillsProjectChildrenContentfulProjectDetailTextNode = 1344,
  SkillGrpupSkillsProjectContentfulId = 1345,
  SkillGrpupSkillsProjectCreatedAt = 1346,
  SkillGrpupSkillsProjectEndDate = 1347,
  SkillGrpupSkillsProjectId = 1348,
  SkillGrpupSkillsProjectName = 1349,
  SkillGrpupSkillsProjectNodeLocale = 1350,
  SkillGrpupSkillsProjectSpaceId = 1351,
  SkillGrpupSkillsProjectStartDate = 1352,
  SkillGrpupSkillsProjectSubName = 1353,
  SkillGrpupSkillsProjectTags = 1354,
  SkillGrpupSkillsProjectUpdatedAt = 1355,
  SkillGrpupSkillsSkillGrpup = 1356,
  SkillGrpupSkillsSkillGrpupChildren = 1357,
  SkillGrpupSkillsSkillGrpupContentfulId = 1358,
  SkillGrpupSkillsSkillGrpupCreatedAt = 1359,
  SkillGrpupSkillsSkillGrpupId = 1360,
  SkillGrpupSkillsSkillGrpupName = 1361,
  SkillGrpupSkillsSkillGrpupNodeLocale = 1362,
  SkillGrpupSkillsSkillGrpupSkillMap = 1363,
  SkillGrpupSkillsSkillGrpupSkills = 1364,
  SkillGrpupSkillsSkillGrpupSpaceId = 1365,
  SkillGrpupSkillsSkillGrpupUpdatedAt = 1366,
  SkillGrpupSkillsSkillMap = 1367,
  SkillGrpupSkillsSkillMapChildren = 1368,
  SkillGrpupSkillsSkillMapContentfulId = 1369,
  SkillGrpupSkillsSkillMapCreatedAt = 1370,
  SkillGrpupSkillsSkillMapExpanded = 1371,
  SkillGrpupSkillsSkillMapId = 1372,
  SkillGrpupSkillsSkillMapName = 1373,
  SkillGrpupSkillsSkillMapNodeLocale = 1374,
  SkillGrpupSkillsSkillMapSkillGroups = 1375,
  SkillGrpupSkillsSkillMapSkills = 1376,
  SkillGrpupSkillsSkillMapSortKey = 1377,
  SkillGrpupSkillsSkillMapSpaceId = 1378,
  SkillGrpupSkillsSkillMapUpdatedAt = 1379,
  SkillGrpupSkillsSpaceId = 1380,
  SkillGrpupSkillsSysRevision = 1381,
  SkillGrpupSkillsSysType = 1382,
  SkillGrpupSkillsUpdatedAt = 1383,
  SkillGrpupSpaceId = 1384,
  SkillGrpupSysRevision = 1385,
  SkillGrpupSysType = 1386,
  SkillGrpupUpdatedAt = 1387,
  SkillMap = 1388,
  SkillMapChildren = 1389,
  SkillMapChildrenChildren = 1390,
  SkillMapChildrenChildrenChildren = 1391,
  SkillMapChildrenChildrenId = 1392,
  SkillMapChildrenId = 1393,
  SkillMapChildrenInternalContent = 1394,
  SkillMapChildrenInternalContentDigest = 1395,
  SkillMapChildrenInternalDescription = 1396,
  SkillMapChildrenInternalFieldOwners = 1397,
  SkillMapChildrenInternalIgnoreType = 1398,
  SkillMapChildrenInternalMediaType = 1399,
  SkillMapChildrenInternalOwner = 1400,
  SkillMapChildrenInternalType = 1401,
  SkillMapChildrenParentChildren = 1402,
  SkillMapChildrenParentId = 1403,
  SkillMapContentfulId = 1404,
  SkillMapCreatedAt = 1405,
  SkillMapExpanded = 1406,
  SkillMapId = 1407,
  SkillMapInternalContent = 1408,
  SkillMapInternalContentDigest = 1409,
  SkillMapInternalDescription = 1410,
  SkillMapInternalFieldOwners = 1411,
  SkillMapInternalIgnoreType = 1412,
  SkillMapInternalMediaType = 1413,
  SkillMapInternalOwner = 1414,
  SkillMapInternalType = 1415,
  SkillMapName = 1416,
  SkillMapNodeLocale = 1417,
  SkillMapParentChildren = 1418,
  SkillMapParentChildrenChildren = 1419,
  SkillMapParentChildrenId = 1420,
  SkillMapParentId = 1421,
  SkillMapParentInternalContent = 1422,
  SkillMapParentInternalContentDigest = 1423,
  SkillMapParentInternalDescription = 1424,
  SkillMapParentInternalFieldOwners = 1425,
  SkillMapParentInternalIgnoreType = 1426,
  SkillMapParentInternalMediaType = 1427,
  SkillMapParentInternalOwner = 1428,
  SkillMapParentInternalType = 1429,
  SkillMapParentParentChildren = 1430,
  SkillMapParentParentId = 1431,
  SkillMapSkillGroups = 1432,
  SkillMapSkillGroupsChildren = 1433,
  SkillMapSkillGroupsChildrenChildren = 1434,
  SkillMapSkillGroupsChildrenId = 1435,
  SkillMapSkillGroupsContentfulId = 1436,
  SkillMapSkillGroupsCreatedAt = 1437,
  SkillMapSkillGroupsId = 1438,
  SkillMapSkillGroupsInternalContent = 1439,
  SkillMapSkillGroupsInternalContentDigest = 1440,
  SkillMapSkillGroupsInternalDescription = 1441,
  SkillMapSkillGroupsInternalFieldOwners = 1442,
  SkillMapSkillGroupsInternalIgnoreType = 1443,
  SkillMapSkillGroupsInternalMediaType = 1444,
  SkillMapSkillGroupsInternalOwner = 1445,
  SkillMapSkillGroupsInternalType = 1446,
  SkillMapSkillGroupsName = 1447,
  SkillMapSkillGroupsNodeLocale = 1448,
  SkillMapSkillGroupsParentChildren = 1449,
  SkillMapSkillGroupsParentId = 1450,
  SkillMapSkillGroupsSkillMap = 1451,
  SkillMapSkillGroupsSkillMapChildren = 1452,
  SkillMapSkillGroupsSkillMapContentfulId = 1453,
  SkillMapSkillGroupsSkillMapCreatedAt = 1454,
  SkillMapSkillGroupsSkillMapExpanded = 1455,
  SkillMapSkillGroupsSkillMapId = 1456,
  SkillMapSkillGroupsSkillMapName = 1457,
  SkillMapSkillGroupsSkillMapNodeLocale = 1458,
  SkillMapSkillGroupsSkillMapSkillGroups = 1459,
  SkillMapSkillGroupsSkillMapSkills = 1460,
  SkillMapSkillGroupsSkillMapSortKey = 1461,
  SkillMapSkillGroupsSkillMapSpaceId = 1462,
  SkillMapSkillGroupsSkillMapUpdatedAt = 1463,
  SkillMapSkillGroupsSkills = 1464,
  SkillMapSkillGroupsSkillsBlogPost = 1465,
  SkillMapSkillGroupsSkillsChildren = 1466,
  SkillMapSkillGroupsSkillsContentfulId = 1467,
  SkillMapSkillGroupsSkillsCreatedAt = 1468,
  SkillMapSkillGroupsSkillsId = 1469,
  SkillMapSkillGroupsSkillsLevel = 1470,
  SkillMapSkillGroupsSkillsName = 1471,
  SkillMapSkillGroupsSkillsNodeLocale = 1472,
  SkillMapSkillGroupsSkillsOss = 1473,
  SkillMapSkillGroupsSkillsProject = 1474,
  SkillMapSkillGroupsSkillsSkillGrpup = 1475,
  SkillMapSkillGroupsSkillsSkillMap = 1476,
  SkillMapSkillGroupsSkillsSpaceId = 1477,
  SkillMapSkillGroupsSkillsUpdatedAt = 1478,
  SkillMapSkillGroupsSpaceId = 1479,
  SkillMapSkillGroupsSysRevision = 1480,
  SkillMapSkillGroupsSysType = 1481,
  SkillMapSkillGroupsUpdatedAt = 1482,
  SkillMapSkills = 1483,
  SkillMapSkillsBlogPost = 1484,
  SkillMapSkillsBlogPostChildren = 1485,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1486,
  SkillMapSkillsBlogPostContentfulId = 1487,
  SkillMapSkillsBlogPostCreated = 1488,
  SkillMapSkillsBlogPostCreatedAt = 1489,
  SkillMapSkillsBlogPostExcerpt = 1490,
  SkillMapSkillsBlogPostId = 1491,
  SkillMapSkillsBlogPostNodeLocale = 1492,
  SkillMapSkillsBlogPostSlug = 1493,
  SkillMapSkillsBlogPostSpaceId = 1494,
  SkillMapSkillsBlogPostTags = 1495,
  SkillMapSkillsBlogPostTitle = 1496,
  SkillMapSkillsBlogPostUpdated = 1497,
  SkillMapSkillsBlogPostUpdatedAt = 1498,
  SkillMapSkillsChildren = 1499,
  SkillMapSkillsChildrenChildren = 1500,
  SkillMapSkillsChildrenId = 1501,
  SkillMapSkillsContentfulId = 1502,
  SkillMapSkillsCreatedAt = 1503,
  SkillMapSkillsId = 1504,
  SkillMapSkillsInternalContent = 1505,
  SkillMapSkillsInternalContentDigest = 1506,
  SkillMapSkillsInternalDescription = 1507,
  SkillMapSkillsInternalFieldOwners = 1508,
  SkillMapSkillsInternalIgnoreType = 1509,
  SkillMapSkillsInternalMediaType = 1510,
  SkillMapSkillsInternalOwner = 1511,
  SkillMapSkillsInternalType = 1512,
  SkillMapSkillsLevel = 1513,
  SkillMapSkillsName = 1514,
  SkillMapSkillsNodeLocale = 1515,
  SkillMapSkillsOss = 1516,
  SkillMapSkillsOssChildren = 1517,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 1518,
  SkillMapSkillsOssContentfulId = 1519,
  SkillMapSkillsOssCreatedAt = 1520,
  SkillMapSkillsOssHref = 1521,
  SkillMapSkillsOssId = 1522,
  SkillMapSkillsOssName = 1523,
  SkillMapSkillsOssNodeLocale = 1524,
  SkillMapSkillsOssSpaceId = 1525,
  SkillMapSkillsOssStartDate = 1526,
  SkillMapSkillsOssSubName = 1527,
  SkillMapSkillsOssTags = 1528,
  SkillMapSkillsOssUpdatedAt = 1529,
  SkillMapSkillsParentChildren = 1530,
  SkillMapSkillsParentId = 1531,
  SkillMapSkillsProject = 1532,
  SkillMapSkillsProjectChildren = 1533,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 1534,
  SkillMapSkillsProjectContentfulId = 1535,
  SkillMapSkillsProjectCreatedAt = 1536,
  SkillMapSkillsProjectEndDate = 1537,
  SkillMapSkillsProjectId = 1538,
  SkillMapSkillsProjectName = 1539,
  SkillMapSkillsProjectNodeLocale = 1540,
  SkillMapSkillsProjectSpaceId = 1541,
  SkillMapSkillsProjectStartDate = 1542,
  SkillMapSkillsProjectSubName = 1543,
  SkillMapSkillsProjectTags = 1544,
  SkillMapSkillsProjectUpdatedAt = 1545,
  SkillMapSkillsSkillGrpup = 1546,
  SkillMapSkillsSkillGrpupChildren = 1547,
  SkillMapSkillsSkillGrpupContentfulId = 1548,
  SkillMapSkillsSkillGrpupCreatedAt = 1549,
  SkillMapSkillsSkillGrpupId = 1550,
  SkillMapSkillsSkillGrpupName = 1551,
  SkillMapSkillsSkillGrpupNodeLocale = 1552,
  SkillMapSkillsSkillGrpupSkillMap = 1553,
  SkillMapSkillsSkillGrpupSkills = 1554,
  SkillMapSkillsSkillGrpupSpaceId = 1555,
  SkillMapSkillsSkillGrpupUpdatedAt = 1556,
  SkillMapSkillsSkillMap = 1557,
  SkillMapSkillsSkillMapChildren = 1558,
  SkillMapSkillsSkillMapContentfulId = 1559,
  SkillMapSkillsSkillMapCreatedAt = 1560,
  SkillMapSkillsSkillMapExpanded = 1561,
  SkillMapSkillsSkillMapId = 1562,
  SkillMapSkillsSkillMapName = 1563,
  SkillMapSkillsSkillMapNodeLocale = 1564,
  SkillMapSkillsSkillMapSkillGroups = 1565,
  SkillMapSkillsSkillMapSkills = 1566,
  SkillMapSkillsSkillMapSortKey = 1567,
  SkillMapSkillsSkillMapSpaceId = 1568,
  SkillMapSkillsSkillMapUpdatedAt = 1569,
  SkillMapSkillsSpaceId = 1570,
  SkillMapSkillsSysRevision = 1571,
  SkillMapSkillsSysType = 1572,
  SkillMapSkillsUpdatedAt = 1573,
  SkillMapSortKey = 1574,
  SkillMapSpaceId = 1575,
  SkillMapSysRevision = 1576,
  SkillMapSysType = 1577,
  SkillMapUpdatedAt = 1578,
  SpaceId = 1579,
  SysContentTypeSysId = 1580,
  SysContentTypeSysLinkType = 1581,
  SysContentTypeSysType = 1582,
  SysRevision = 1583,
  SysType = 1584,
  UpdatedAt = 1585
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
  skill_grpup: InputMaybe<ContentfulSkillGrpupFilterListInput>;
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
  IconContactIconSvgDarkSize = 160,
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
  IconContactIconSvgLightSize = 180,
  IconContactIconSvgLightSpaceId = 181,
  IconContactIconSvgLightTitle = 182,
  IconContactIconSvgLightUpdatedAt = 183,
  IconContactIconSvgLightUrl = 184,
  IconContactIconSvgLightWidth = 185,
  IconContactIconChildren = 186,
  IconContactIconChildrenContentfulIconSvgTextNode = 187,
  IconContactIconContact = 188,
  IconContactIconContentfulId = 189,
  IconContactIconCreatedAt = 190,
  IconContactIconHistory = 191,
  IconContactIconId = 192,
  IconContactIconName = 193,
  IconContactIconNodeLocale = 194,
  IconContactIconOss = 195,
  IconContactIconProject = 196,
  IconContactIconSpaceId = 197,
  IconContactIconUpdatedAt = 198,
  IconContactIconWhatICanDo = 199,
  IconContactId = 200,
  IconContactInternalContent = 201,
  IconContactInternalContentDigest = 202,
  IconContactInternalDescription = 203,
  IconContactInternalFieldOwners = 204,
  IconContactInternalIgnoreType = 205,
  IconContactInternalMediaType = 206,
  IconContactInternalOwner = 207,
  IconContactInternalType = 208,
  IconContactName = 209,
  IconContactNodeLocale = 210,
  IconContactParentChildren = 211,
  IconContactParentId = 212,
  IconContactSortKey = 213,
  IconContactSpaceId = 214,
  IconContactSubName = 215,
  IconContactSysRevision = 216,
  IconContactSysType = 217,
  IconContactUpdatedAt = 218,
  IconContentfulId = 219,
  IconCreatedAt = 220,
  IconHistory = 221,
  IconHistoryChildren = 222,
  IconHistoryChildrenChildren = 223,
  IconHistoryChildrenId = 224,
  IconHistoryContentfulId = 225,
  IconHistoryCreatedAt = 226,
  IconHistoryDate = 227,
  IconHistoryIconChildren = 228,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 229,
  IconHistoryIconContact = 230,
  IconHistoryIconContentfulId = 231,
  IconHistoryIconCreatedAt = 232,
  IconHistoryIconHistory = 233,
  IconHistoryIconId = 234,
  IconHistoryIconName = 235,
  IconHistoryIconNodeLocale = 236,
  IconHistoryIconOss = 237,
  IconHistoryIconProject = 238,
  IconHistoryIconSpaceId = 239,
  IconHistoryIconUpdatedAt = 240,
  IconHistoryIconWhatICanDo = 241,
  IconHistoryId = 242,
  IconHistoryInternalContent = 243,
  IconHistoryInternalContentDigest = 244,
  IconHistoryInternalDescription = 245,
  IconHistoryInternalFieldOwners = 246,
  IconHistoryInternalIgnoreType = 247,
  IconHistoryInternalMediaType = 248,
  IconHistoryInternalOwner = 249,
  IconHistoryInternalType = 250,
  IconHistoryName = 251,
  IconHistoryNodeLocale = 252,
  IconHistoryParentChildren = 253,
  IconHistoryParentId = 254,
  IconHistorySpaceId = 255,
  IconHistorySubName = 256,
  IconHistorySysRevision = 257,
  IconHistorySysType = 258,
  IconHistoryUpdatedAt = 259,
  IconId = 260,
  IconInternalContent = 261,
  IconInternalContentDigest = 262,
  IconInternalDescription = 263,
  IconInternalFieldOwners = 264,
  IconInternalIgnoreType = 265,
  IconInternalMediaType = 266,
  IconInternalOwner = 267,
  IconInternalType = 268,
  IconName = 269,
  IconNodeLocale = 270,
  IconOss = 271,
  IconOssChildContentfulOssDetailTextNodeChildren = 272,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 273,
  IconOssChildContentfulOssDetailTextNodeDetail = 274,
  IconOssChildContentfulOssDetailTextNodeId = 275,
  IconOssChildren = 276,
  IconOssChildrenContentfulOssDetailTextNode = 277,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 278,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 279,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 280,
  IconOssChildrenContentfulOssDetailTextNodeId = 281,
  IconOssChildrenChildren = 282,
  IconOssChildrenId = 283,
  IconOssContentfulId = 284,
  IconOssCreatedAt = 285,
  IconOssDetailChildren = 286,
  IconOssDetailChildrenMdx = 287,
  IconOssDetailDetail = 288,
  IconOssDetailId = 289,
  IconOssHref = 290,
  IconOssIconChildren = 291,
  IconOssIconChildrenContentfulIconSvgTextNode = 292,
  IconOssIconContact = 293,
  IconOssIconContentfulId = 294,
  IconOssIconCreatedAt = 295,
  IconOssIconHistory = 296,
  IconOssIconId = 297,
  IconOssIconName = 298,
  IconOssIconNodeLocale = 299,
  IconOssIconOss = 300,
  IconOssIconProject = 301,
  IconOssIconSpaceId = 302,
  IconOssIconUpdatedAt = 303,
  IconOssIconWhatICanDo = 304,
  IconOssId = 305,
  IconOssImageChildren = 306,
  IconOssImageContentfulId = 307,
  IconOssImageCreatedAt = 308,
  IconOssImageDescription = 309,
  IconOssImageFilename = 310,
  IconOssImageFilesize = 311,
  IconOssImageGatsbyImage = 312,
  IconOssImageGatsbyImageData = 313,
  IconOssImageHeight = 314,
  IconOssImageId = 315,
  IconOssImageMimeType = 316,
  IconOssImageNodeLocale = 317,
  IconOssImagePlaceholderUrl = 318,
  IconOssImagePublicUrl = 319,
  IconOssImageSize = 320,
  IconOssImageSpaceId = 321,
  IconOssImageTitle = 322,
  IconOssImageUpdatedAt = 323,
  IconOssImageUrl = 324,
  IconOssImageWidth = 325,
  IconOssInternalContent = 326,
  IconOssInternalContentDigest = 327,
  IconOssInternalDescription = 328,
  IconOssInternalFieldOwners = 329,
  IconOssInternalIgnoreType = 330,
  IconOssInternalMediaType = 331,
  IconOssInternalOwner = 332,
  IconOssInternalType = 333,
  IconOssName = 334,
  IconOssNodeLocale = 335,
  IconOssParentChildren = 336,
  IconOssParentId = 337,
  IconOssSpaceId = 338,
  IconOssStartDate = 339,
  IconOssSubName = 340,
  IconOssSysRevision = 341,
  IconOssSysType = 342,
  IconOssTags = 343,
  IconOssTagsBlogPost = 344,
  IconOssTagsChildren = 345,
  IconOssTagsContentfulId = 346,
  IconOssTagsCreatedAt = 347,
  IconOssTagsId = 348,
  IconOssTagsLevel = 349,
  IconOssTagsName = 350,
  IconOssTagsNodeLocale = 351,
  IconOssTagsOss = 352,
  IconOssTagsProject = 353,
  IconOssTagsSkillGrpup = 354,
  IconOssTagsSkillMap = 355,
  IconOssTagsSpaceId = 356,
  IconOssTagsUpdatedAt = 357,
  IconOssUpdatedAt = 358,
  IconParentChildren = 359,
  IconParentChildrenChildren = 360,
  IconParentChildrenId = 361,
  IconParentId = 362,
  IconParentInternalContent = 363,
  IconParentInternalContentDigest = 364,
  IconParentInternalDescription = 365,
  IconParentInternalFieldOwners = 366,
  IconParentInternalIgnoreType = 367,
  IconParentInternalMediaType = 368,
  IconParentInternalOwner = 369,
  IconParentInternalType = 370,
  IconParentParentChildren = 371,
  IconParentParentId = 372,
  IconProject = 373,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 374,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 375,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 376,
  IconProjectChildContentfulProjectDetailTextNodeId = 377,
  IconProjectChildren = 378,
  IconProjectChildrenContentfulProjectDetailTextNode = 379,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 380,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 381,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 382,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 383,
  IconProjectChildrenChildren = 384,
  IconProjectChildrenId = 385,
  IconProjectContentfulId = 386,
  IconProjectCreatedAt = 387,
  IconProjectDetailChildren = 388,
  IconProjectDetailChildrenMdx = 389,
  IconProjectDetailDetail = 390,
  IconProjectDetailId = 391,
  IconProjectEndDate = 392,
  IconProjectIconChildren = 393,
  IconProjectIconChildrenContentfulIconSvgTextNode = 394,
  IconProjectIconContact = 395,
  IconProjectIconContentfulId = 396,
  IconProjectIconCreatedAt = 397,
  IconProjectIconHistory = 398,
  IconProjectIconId = 399,
  IconProjectIconName = 400,
  IconProjectIconNodeLocale = 401,
  IconProjectIconOss = 402,
  IconProjectIconProject = 403,
  IconProjectIconSpaceId = 404,
  IconProjectIconUpdatedAt = 405,
  IconProjectIconWhatICanDo = 406,
  IconProjectId = 407,
  IconProjectInternalContent = 408,
  IconProjectInternalContentDigest = 409,
  IconProjectInternalDescription = 410,
  IconProjectInternalFieldOwners = 411,
  IconProjectInternalIgnoreType = 412,
  IconProjectInternalMediaType = 413,
  IconProjectInternalOwner = 414,
  IconProjectInternalType = 415,
  IconProjectName = 416,
  IconProjectNodeLocale = 417,
  IconProjectParentChildren = 418,
  IconProjectParentId = 419,
  IconProjectSpaceId = 420,
  IconProjectStartDate = 421,
  IconProjectSubName = 422,
  IconProjectSysRevision = 423,
  IconProjectSysType = 424,
  IconProjectTags = 425,
  IconProjectTagsBlogPost = 426,
  IconProjectTagsChildren = 427,
  IconProjectTagsContentfulId = 428,
  IconProjectTagsCreatedAt = 429,
  IconProjectTagsId = 430,
  IconProjectTagsLevel = 431,
  IconProjectTagsName = 432,
  IconProjectTagsNodeLocale = 433,
  IconProjectTagsOss = 434,
  IconProjectTagsProject = 435,
  IconProjectTagsSkillGrpup = 436,
  IconProjectTagsSkillMap = 437,
  IconProjectTagsSpaceId = 438,
  IconProjectTagsUpdatedAt = 439,
  IconProjectUpdatedAt = 440,
  IconSpaceId = 441,
  IconSvgChildMdxBody = 442,
  IconSvgChildMdxChildren = 443,
  IconSvgChildMdxExcerpt = 444,
  IconSvgChildMdxFileAbsolutePath = 445,
  IconSvgChildMdxHeadings = 446,
  IconSvgChildMdxHtml = 447,
  IconSvgChildMdxId = 448,
  IconSvgChildMdxMdxAst = 449,
  IconSvgChildMdxRawBody = 450,
  IconSvgChildMdxSlug = 451,
  IconSvgChildMdxTableOfContents = 452,
  IconSvgChildMdxTimeToRead = 453,
  IconSvgChildren = 454,
  IconSvgChildrenMdx = 455,
  IconSvgChildrenMdxBody = 456,
  IconSvgChildrenMdxChildren = 457,
  IconSvgChildrenMdxExcerpt = 458,
  IconSvgChildrenMdxFileAbsolutePath = 459,
  IconSvgChildrenMdxHeadings = 460,
  IconSvgChildrenMdxHtml = 461,
  IconSvgChildrenMdxId = 462,
  IconSvgChildrenMdxMdxAst = 463,
  IconSvgChildrenMdxRawBody = 464,
  IconSvgChildrenMdxSlug = 465,
  IconSvgChildrenMdxTableOfContents = 466,
  IconSvgChildrenMdxTimeToRead = 467,
  IconSvgChildrenChildren = 468,
  IconSvgChildrenId = 469,
  IconSvgId = 470,
  IconSvgInternalContent = 471,
  IconSvgInternalContentDigest = 472,
  IconSvgInternalDescription = 473,
  IconSvgInternalFieldOwners = 474,
  IconSvgInternalIgnoreType = 475,
  IconSvgInternalMediaType = 476,
  IconSvgInternalOwner = 477,
  IconSvgInternalType = 478,
  IconSvgParentChildren = 479,
  IconSvgParentId = 480,
  IconSvgSvg = 481,
  IconSvgSysType = 482,
  IconSysRevision = 483,
  IconSysType = 484,
  IconUpdatedAt = 485,
  IconWhatICanDo = 486,
  IconWhatICanDoChildren = 487,
  IconWhatICanDoChildrenChildren = 488,
  IconWhatICanDoChildrenId = 489,
  IconWhatICanDoContentfulId = 490,
  IconWhatICanDoCreatedAt = 491,
  IconWhatICanDoIconChildren = 492,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 493,
  IconWhatICanDoIconContact = 494,
  IconWhatICanDoIconContentfulId = 495,
  IconWhatICanDoIconCreatedAt = 496,
  IconWhatICanDoIconHistory = 497,
  IconWhatICanDoIconId = 498,
  IconWhatICanDoIconName = 499,
  IconWhatICanDoIconNodeLocale = 500,
  IconWhatICanDoIconOss = 501,
  IconWhatICanDoIconProject = 502,
  IconWhatICanDoIconSpaceId = 503,
  IconWhatICanDoIconUpdatedAt = 504,
  IconWhatICanDoIconWhatICanDo = 505,
  IconWhatICanDoId = 506,
  IconWhatICanDoInternalContent = 507,
  IconWhatICanDoInternalContentDigest = 508,
  IconWhatICanDoInternalDescription = 509,
  IconWhatICanDoInternalFieldOwners = 510,
  IconWhatICanDoInternalIgnoreType = 511,
  IconWhatICanDoInternalMediaType = 512,
  IconWhatICanDoInternalOwner = 513,
  IconWhatICanDoInternalType = 514,
  IconWhatICanDoName = 515,
  IconWhatICanDoNodeLocale = 516,
  IconWhatICanDoParentChildren = 517,
  IconWhatICanDoParentId = 518,
  IconWhatICanDoSortKey = 519,
  IconWhatICanDoSpaceId = 520,
  IconWhatICanDoSubName = 521,
  IconWhatICanDoSysRevision = 522,
  IconWhatICanDoSysType = 523,
  IconWhatICanDoUpdatedAt = 524,
  Id = 525,
  InternalContent = 526,
  InternalContentDigest = 527,
  InternalDescription = 528,
  InternalFieldOwners = 529,
  InternalIgnoreType = 530,
  InternalMediaType = 531,
  InternalOwner = 532,
  InternalType = 533,
  Name = 534,
  NodeLocale = 535,
  ParentChildren = 536,
  ParentChildrenChildren = 537,
  ParentChildrenChildrenChildren = 538,
  ParentChildrenChildrenId = 539,
  ParentChildrenId = 540,
  ParentChildrenInternalContent = 541,
  ParentChildrenInternalContentDigest = 542,
  ParentChildrenInternalDescription = 543,
  ParentChildrenInternalFieldOwners = 544,
  ParentChildrenInternalIgnoreType = 545,
  ParentChildrenInternalMediaType = 546,
  ParentChildrenInternalOwner = 547,
  ParentChildrenInternalType = 548,
  ParentChildrenParentChildren = 549,
  ParentChildrenParentId = 550,
  ParentId = 551,
  ParentInternalContent = 552,
  ParentInternalContentDigest = 553,
  ParentInternalDescription = 554,
  ParentInternalFieldOwners = 555,
  ParentInternalIgnoreType = 556,
  ParentInternalMediaType = 557,
  ParentInternalOwner = 558,
  ParentInternalType = 559,
  ParentParentChildren = 560,
  ParentParentChildrenChildren = 561,
  ParentParentChildrenId = 562,
  ParentParentId = 563,
  ParentParentInternalContent = 564,
  ParentParentInternalContentDigest = 565,
  ParentParentInternalDescription = 566,
  ParentParentInternalFieldOwners = 567,
  ParentParentInternalIgnoreType = 568,
  ParentParentInternalMediaType = 569,
  ParentParentInternalOwner = 570,
  ParentParentInternalType = 571,
  ParentParentParentChildren = 572,
  ParentParentParentId = 573,
  SortKey = 574,
  SpaceId = 575,
  SubName = 576,
  SysContentTypeSysId = 577,
  SysContentTypeSysLinkType = 578,
  SysContentTypeSysType = 579,
  SysRevision = 580,
  SysType = 581,
  UpdatedAt = 582
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

export type GatsbyImageDataQueryOperatorInput = {
  eq: InputMaybe<Scalars['GatsbyImageData']>;
  in: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  ne: InputMaybe<Scalars['GatsbyImageData']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
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
  gatsbyImageData: Scalars['GatsbyImageData'];
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
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
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
  allContentfulSkillGrpup: ContentfulSkillGrpupConnection;
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
  contentfulSkillGrpup: Maybe<ContentfulSkillGrpup>;
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


export type QueryAllContentfulSkillGrpupArgs = {
  filter: InputMaybe<ContentfulSkillGrpupFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulSkillGrpupSortInput>;
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
  gatsbyImage: InputMaybe<GatsbyImageDataQueryOperatorInput>;
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
  size: InputMaybe<IntQueryOperatorInput>;
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


export type QueryContentfulSkillGrpupArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  skill_map: InputMaybe<ContentfulSkillMapFilterListInput>;
  skills: InputMaybe<ContentfulTagFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulSkillGrpupSysFilterInput>;
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
  skillGroups: InputMaybe<ContentfulSkillGrpupFilterListInput>;
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
  skill_grpup: InputMaybe<ContentfulSkillGrpupFilterListInput>;
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
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
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
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
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
  gatsbyImage: Maybe<Scalars['GatsbyImageData']>;
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
  None = 2,
  TracedSvg = 3
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
  graphqlTypegen: Maybe<Scalars['Boolean']>;
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
  GraphqlTypegen = 40,
  Host = 41,
  Id = 42,
  InternalContent = 43,
  InternalContentDigest = 44,
  InternalDescription = 45,
  InternalFieldOwners = 46,
  InternalIgnoreType = 47,
  InternalMediaType = 48,
  InternalOwner = 49,
  InternalType = 50,
  JsxRuntime = 51,
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
  PathPrefix = 90,
  Polyfill = 91,
  Port = 92,
  SiteMetadataDescription = 93,
  SiteMetadataSiteUrl = 94,
  SiteMetadataTitle = 95,
  TrailingSlash = 96
}

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
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
        & { skills: Maybe<Array<Maybe<Pick<ContentfulTag, 'id' | 'level' | 'name'>>>>, skillGroups: Maybe<Array<Maybe<(
          Pick<ContentfulSkillGrpup, 'id' | 'name'>
          & { skills: Maybe<Array<Maybe<Pick<ContentfulTag, 'id' | 'level' | 'name'>>>> }
        )>>> }
      ) }> }, certification: { edges: Array<{ node: (
        Pick<ContentfulQualificationMap, 'id' | 'node_locale' | 'name' | 'expanded'>
        & { qualifications: Maybe<Array<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date'>>>> }
      ) }> }, locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> }, icon: Maybe<(
    Pick<ContentfulAsset, 'title'>
    & { svg: Maybe<Pick<InlineSvg, 'content'>> }
  )> };
