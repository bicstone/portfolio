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
  gatsbyImageData: Maybe<Scalars['GatsbyImageData']>;
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Description = 44,
  FileContentType = 45,
  FileDetailsImageHeight = 46,
  FileDetailsImageWidth = 47,
  FileDetailsSize = 48,
  FileFileName = 49,
  FileUrl = 50,
  Filename = 51,
  Filesize = 52,
  GatsbyImage = 53,
  GatsbyImageData = 54,
  Height = 55,
  Id = 56,
  InternalContent = 57,
  InternalContentDigest = 58,
  InternalContentFilePath = 59,
  InternalDescription = 60,
  InternalFieldOwners = 61,
  InternalIgnoreType = 62,
  InternalMediaType = 63,
  InternalOwner = 64,
  InternalType = 65,
  MimeType = 66,
  NodeLocale = 67,
  ParentChildren = 68,
  ParentChildrenChildren = 69,
  ParentChildrenChildrenChildren = 70,
  ParentChildrenChildrenId = 71,
  ParentChildrenId = 72,
  ParentChildrenInternalContent = 73,
  ParentChildrenInternalContentDigest = 74,
  ParentChildrenInternalContentFilePath = 75,
  ParentChildrenInternalDescription = 76,
  ParentChildrenInternalFieldOwners = 77,
  ParentChildrenInternalIgnoreType = 78,
  ParentChildrenInternalMediaType = 79,
  ParentChildrenInternalOwner = 80,
  ParentChildrenInternalType = 81,
  ParentChildrenParentChildren = 82,
  ParentChildrenParentId = 83,
  ParentId = 84,
  ParentInternalContent = 85,
  ParentInternalContentDigest = 86,
  ParentInternalContentFilePath = 87,
  ParentInternalDescription = 88,
  ParentInternalFieldOwners = 89,
  ParentInternalIgnoreType = 90,
  ParentInternalMediaType = 91,
  ParentInternalOwner = 92,
  ParentInternalType = 93,
  ParentParentChildren = 94,
  ParentParentChildrenChildren = 95,
  ParentParentChildrenId = 96,
  ParentParentId = 97,
  ParentParentInternalContent = 98,
  ParentParentInternalContentDigest = 99,
  ParentParentInternalContentFilePath = 100,
  ParentParentInternalDescription = 101,
  ParentParentInternalFieldOwners = 102,
  ParentParentInternalIgnoreType = 103,
  ParentParentInternalMediaType = 104,
  ParentParentInternalOwner = 105,
  ParentParentInternalType = 106,
  ParentParentParentChildren = 107,
  ParentParentParentId = 108,
  PlaceholderUrl = 109,
  PublicUrl = 110,
  ResizeHeight = 111,
  ResizeSrc = 112,
  ResizeWidth = 113,
  Size = 114,
  SpaceId = 115,
  SysRevision = 116,
  SysType = 117,
  Title = 118,
  UpdatedAt = 119,
  Url = 120,
  Width = 121
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
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
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
  CategoryBlogPostInternalContentFilePath = 34,
  CategoryBlogPostInternalDescription = 35,
  CategoryBlogPostInternalFieldOwners = 36,
  CategoryBlogPostInternalIgnoreType = 37,
  CategoryBlogPostInternalMediaType = 38,
  CategoryBlogPostInternalOwner = 39,
  CategoryBlogPostInternalType = 40,
  CategoryBlogPostNodeLocale = 41,
  CategoryBlogPostParentChildren = 42,
  CategoryBlogPostParentId = 43,
  CategoryBlogPostSlug = 44,
  CategoryBlogPostSpaceId = 45,
  CategoryBlogPostSysRevision = 46,
  CategoryBlogPostSysType = 47,
  CategoryBlogPostTags = 48,
  CategoryBlogPostTagsBlogPost = 49,
  CategoryBlogPostTagsChildren = 50,
  CategoryBlogPostTagsContentfulId = 51,
  CategoryBlogPostTagsCreatedAt = 52,
  CategoryBlogPostTagsId = 53,
  CategoryBlogPostTagsLevel = 54,
  CategoryBlogPostTagsName = 55,
  CategoryBlogPostTagsNodeLocale = 56,
  CategoryBlogPostTagsOss = 57,
  CategoryBlogPostTagsProject = 58,
  CategoryBlogPostTagsSkillGrpup = 59,
  CategoryBlogPostTagsSkillMap = 60,
  CategoryBlogPostTagsSpaceId = 61,
  CategoryBlogPostTagsUpdatedAt = 62,
  CategoryBlogPostThumbnailChildren = 63,
  CategoryBlogPostThumbnailContentfulId = 64,
  CategoryBlogPostThumbnailCreatedAt = 65,
  CategoryBlogPostThumbnailDescription = 66,
  CategoryBlogPostThumbnailFilename = 67,
  CategoryBlogPostThumbnailFilesize = 68,
  CategoryBlogPostThumbnailGatsbyImage = 69,
  CategoryBlogPostThumbnailGatsbyImageData = 70,
  CategoryBlogPostThumbnailHeight = 71,
  CategoryBlogPostThumbnailId = 72,
  CategoryBlogPostThumbnailMimeType = 73,
  CategoryBlogPostThumbnailNodeLocale = 74,
  CategoryBlogPostThumbnailPlaceholderUrl = 75,
  CategoryBlogPostThumbnailPublicUrl = 76,
  CategoryBlogPostThumbnailSize = 77,
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
  CategoryChildrenInternalContentFilePath = 93,
  CategoryChildrenInternalDescription = 94,
  CategoryChildrenInternalFieldOwners = 95,
  CategoryChildrenInternalIgnoreType = 96,
  CategoryChildrenInternalMediaType = 97,
  CategoryChildrenInternalOwner = 98,
  CategoryChildrenInternalType = 99,
  CategoryChildrenParentChildren = 100,
  CategoryChildrenParentId = 101,
  CategoryContentfulId = 102,
  CategoryCreatedAt = 103,
  CategoryId = 104,
  CategoryInternalContent = 105,
  CategoryInternalContentDigest = 106,
  CategoryInternalContentFilePath = 107,
  CategoryInternalDescription = 108,
  CategoryInternalFieldOwners = 109,
  CategoryInternalIgnoreType = 110,
  CategoryInternalMediaType = 111,
  CategoryInternalOwner = 112,
  CategoryInternalType = 113,
  CategoryName = 114,
  CategoryNodeLocale = 115,
  CategoryParentChildren = 116,
  CategoryParentChildrenChildren = 117,
  CategoryParentChildrenId = 118,
  CategoryParentId = 119,
  CategoryParentInternalContent = 120,
  CategoryParentInternalContentDigest = 121,
  CategoryParentInternalContentFilePath = 122,
  CategoryParentInternalDescription = 123,
  CategoryParentInternalFieldOwners = 124,
  CategoryParentInternalIgnoreType = 125,
  CategoryParentInternalMediaType = 126,
  CategoryParentInternalOwner = 127,
  CategoryParentInternalType = 128,
  CategoryParentParentChildren = 129,
  CategoryParentParentId = 130,
  CategorySortKey = 131,
  CategorySpaceId = 132,
  CategorySysRevision = 133,
  CategorySysType = 134,
  CategoryUpdatedAt = 135,
  ChildContentfulBlogPostContentTextNodeChildMdxBody = 136,
  ChildContentfulBlogPostContentTextNodeChildMdxChildren = 137,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 138,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenId = 139,
  ChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 140,
  ChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 141,
  ChildContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 142,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadings = 143,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 144,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 145,
  ChildContentfulBlogPostContentTextNodeChildMdxHtml = 146,
  ChildContentfulBlogPostContentTextNodeChildMdxId = 147,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContent = 148,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 149,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContentFilePath = 150,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalDescription = 151,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 152,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 153,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 154,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalOwner = 155,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalType = 156,
  ChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 157,
  ChildContentfulBlogPostContentTextNodeChildMdxParentChildren = 158,
  ChildContentfulBlogPostContentTextNodeChildMdxParentId = 159,
  ChildContentfulBlogPostContentTextNodeChildMdxRawBody = 160,
  ChildContentfulBlogPostContentTextNodeChildMdxSlug = 161,
  ChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 162,
  ChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 163,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 164,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 165,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountWords = 166,
  ChildContentfulBlogPostContentTextNodeChildren = 167,
  ChildContentfulBlogPostContentTextNodeChildrenMdx = 168,
  ChildContentfulBlogPostContentTextNodeChildrenMdxBody = 169,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 170,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 171,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 172,
  ChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 173,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 174,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 175,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 176,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 177,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 178,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 179,
  ChildContentfulBlogPostContentTextNodeChildrenMdxId = 180,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 181,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 182,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContentFilePath = 183,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 184,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 185,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 186,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 187,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 188,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalType = 189,
  ChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 190,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 191,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentId = 192,
  ChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 193,
  ChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 194,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 195,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 196,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 197,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 198,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 199,
  ChildContentfulBlogPostContentTextNodeChildrenChildren = 200,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenChildren = 201,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenId = 202,
  ChildContentfulBlogPostContentTextNodeChildrenId = 203,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContent = 204,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 205,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentFilePath = 206,
  ChildContentfulBlogPostContentTextNodeChildrenInternalDescription = 207,
  ChildContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 208,
  ChildContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 209,
  ChildContentfulBlogPostContentTextNodeChildrenInternalMediaType = 210,
  ChildContentfulBlogPostContentTextNodeChildrenInternalOwner = 211,
  ChildContentfulBlogPostContentTextNodeChildrenInternalType = 212,
  ChildContentfulBlogPostContentTextNodeChildrenParentChildren = 213,
  ChildContentfulBlogPostContentTextNodeChildrenParentId = 214,
  ChildContentfulBlogPostContentTextNodeContent = 215,
  ChildContentfulBlogPostContentTextNodeId = 216,
  ChildContentfulBlogPostContentTextNodeInternalContent = 217,
  ChildContentfulBlogPostContentTextNodeInternalContentDigest = 218,
  ChildContentfulBlogPostContentTextNodeInternalContentFilePath = 219,
  ChildContentfulBlogPostContentTextNodeInternalDescription = 220,
  ChildContentfulBlogPostContentTextNodeInternalFieldOwners = 221,
  ChildContentfulBlogPostContentTextNodeInternalIgnoreType = 222,
  ChildContentfulBlogPostContentTextNodeInternalMediaType = 223,
  ChildContentfulBlogPostContentTextNodeInternalOwner = 224,
  ChildContentfulBlogPostContentTextNodeInternalType = 225,
  ChildContentfulBlogPostContentTextNodeParentChildren = 226,
  ChildContentfulBlogPostContentTextNodeParentChildrenChildren = 227,
  ChildContentfulBlogPostContentTextNodeParentChildrenId = 228,
  ChildContentfulBlogPostContentTextNodeParentId = 229,
  ChildContentfulBlogPostContentTextNodeParentInternalContent = 230,
  ChildContentfulBlogPostContentTextNodeParentInternalContentDigest = 231,
  ChildContentfulBlogPostContentTextNodeParentInternalContentFilePath = 232,
  ChildContentfulBlogPostContentTextNodeParentInternalDescription = 233,
  ChildContentfulBlogPostContentTextNodeParentInternalFieldOwners = 234,
  ChildContentfulBlogPostContentTextNodeParentInternalIgnoreType = 235,
  ChildContentfulBlogPostContentTextNodeParentInternalMediaType = 236,
  ChildContentfulBlogPostContentTextNodeParentInternalOwner = 237,
  ChildContentfulBlogPostContentTextNodeParentInternalType = 238,
  ChildContentfulBlogPostContentTextNodeParentParentChildren = 239,
  ChildContentfulBlogPostContentTextNodeParentParentId = 240,
  ChildContentfulBlogPostContentTextNodeSysType = 241,
  Children = 242,
  ChildrenContentfulBlogPostContentTextNode = 243,
  ChildrenContentfulBlogPostContentTextNodeChildMdxBody = 244,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 245,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 246,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenId = 247,
  ChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 248,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 249,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 250,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 251,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 252,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 253,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 254,
  ChildrenContentfulBlogPostContentTextNodeChildMdxId = 255,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContent = 256,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 257,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContentFilePath = 258,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalDescription = 259,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 260,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 261,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 262,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalOwner = 263,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalType = 264,
  ChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 265,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentChildren = 266,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentId = 267,
  ChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 268,
  ChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 269,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 270,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 271,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 272,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 273,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountWords = 274,
  ChildrenContentfulBlogPostContentTextNodeChildren = 275,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdx = 276,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 277,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 278,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 279,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 280,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 281,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 282,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 283,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 284,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 285,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 286,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 287,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 288,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 289,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 290,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContentFilePath = 291,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 292,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 293,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 294,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 295,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 296,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalType = 297,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 298,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 299,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentId = 300,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 301,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 302,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 303,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 304,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 305,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 306,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 307,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildren = 308,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenChildren = 309,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenId = 310,
  ChildrenContentfulBlogPostContentTextNodeChildrenId = 311,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContent = 312,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 313,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentFilePath = 314,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalDescription = 315,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 316,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 317,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalMediaType = 318,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalOwner = 319,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalType = 320,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentChildren = 321,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentId = 322,
  ChildrenContentfulBlogPostContentTextNodeContent = 323,
  ChildrenContentfulBlogPostContentTextNodeId = 324,
  ChildrenContentfulBlogPostContentTextNodeInternalContent = 325,
  ChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 326,
  ChildrenContentfulBlogPostContentTextNodeInternalContentFilePath = 327,
  ChildrenContentfulBlogPostContentTextNodeInternalDescription = 328,
  ChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 329,
  ChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 330,
  ChildrenContentfulBlogPostContentTextNodeInternalMediaType = 331,
  ChildrenContentfulBlogPostContentTextNodeInternalOwner = 332,
  ChildrenContentfulBlogPostContentTextNodeInternalType = 333,
  ChildrenContentfulBlogPostContentTextNodeParentChildren = 334,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenChildren = 335,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenId = 336,
  ChildrenContentfulBlogPostContentTextNodeParentId = 337,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContent = 338,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentDigest = 339,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentFilePath = 340,
  ChildrenContentfulBlogPostContentTextNodeParentInternalDescription = 341,
  ChildrenContentfulBlogPostContentTextNodeParentInternalFieldOwners = 342,
  ChildrenContentfulBlogPostContentTextNodeParentInternalIgnoreType = 343,
  ChildrenContentfulBlogPostContentTextNodeParentInternalMediaType = 344,
  ChildrenContentfulBlogPostContentTextNodeParentInternalOwner = 345,
  ChildrenContentfulBlogPostContentTextNodeParentInternalType = 346,
  ChildrenContentfulBlogPostContentTextNodeParentParentChildren = 347,
  ChildrenContentfulBlogPostContentTextNodeParentParentId = 348,
  ChildrenContentfulBlogPostContentTextNodeSysType = 349,
  ChildrenChildren = 350,
  ChildrenChildrenChildren = 351,
  ChildrenChildrenChildrenChildren = 352,
  ChildrenChildrenChildrenId = 353,
  ChildrenChildrenId = 354,
  ChildrenChildrenInternalContent = 355,
  ChildrenChildrenInternalContentDigest = 356,
  ChildrenChildrenInternalContentFilePath = 357,
  ChildrenChildrenInternalDescription = 358,
  ChildrenChildrenInternalFieldOwners = 359,
  ChildrenChildrenInternalIgnoreType = 360,
  ChildrenChildrenInternalMediaType = 361,
  ChildrenChildrenInternalOwner = 362,
  ChildrenChildrenInternalType = 363,
  ChildrenChildrenParentChildren = 364,
  ChildrenChildrenParentId = 365,
  ChildrenId = 366,
  ChildrenInternalContent = 367,
  ChildrenInternalContentDigest = 368,
  ChildrenInternalContentFilePath = 369,
  ChildrenInternalDescription = 370,
  ChildrenInternalFieldOwners = 371,
  ChildrenInternalIgnoreType = 372,
  ChildrenInternalMediaType = 373,
  ChildrenInternalOwner = 374,
  ChildrenInternalType = 375,
  ChildrenParentChildren = 376,
  ChildrenParentChildrenChildren = 377,
  ChildrenParentChildrenId = 378,
  ChildrenParentId = 379,
  ChildrenParentInternalContent = 380,
  ChildrenParentInternalContentDigest = 381,
  ChildrenParentInternalContentFilePath = 382,
  ChildrenParentInternalDescription = 383,
  ChildrenParentInternalFieldOwners = 384,
  ChildrenParentInternalIgnoreType = 385,
  ChildrenParentInternalMediaType = 386,
  ChildrenParentInternalOwner = 387,
  ChildrenParentInternalType = 388,
  ChildrenParentParentChildren = 389,
  ChildrenParentParentId = 390,
  ContentChildMdxBody = 391,
  ContentChildMdxChildren = 392,
  ContentChildMdxChildrenChildren = 393,
  ContentChildMdxChildrenId = 394,
  ContentChildMdxExcerpt = 395,
  ContentChildMdxFileAbsolutePath = 396,
  ContentChildMdxFrontmatterTitle = 397,
  ContentChildMdxHeadings = 398,
  ContentChildMdxHeadingsDepth = 399,
  ContentChildMdxHeadingsValue = 400,
  ContentChildMdxHtml = 401,
  ContentChildMdxId = 402,
  ContentChildMdxInternalContent = 403,
  ContentChildMdxInternalContentDigest = 404,
  ContentChildMdxInternalContentFilePath = 405,
  ContentChildMdxInternalDescription = 406,
  ContentChildMdxInternalFieldOwners = 407,
  ContentChildMdxInternalIgnoreType = 408,
  ContentChildMdxInternalMediaType = 409,
  ContentChildMdxInternalOwner = 410,
  ContentChildMdxInternalType = 411,
  ContentChildMdxMdxAst = 412,
  ContentChildMdxParentChildren = 413,
  ContentChildMdxParentId = 414,
  ContentChildMdxRawBody = 415,
  ContentChildMdxSlug = 416,
  ContentChildMdxTableOfContents = 417,
  ContentChildMdxTimeToRead = 418,
  ContentChildMdxWordCountParagraphs = 419,
  ContentChildMdxWordCountSentences = 420,
  ContentChildMdxWordCountWords = 421,
  ContentChildren = 422,
  ContentChildrenMdx = 423,
  ContentChildrenMdxBody = 424,
  ContentChildrenMdxChildren = 425,
  ContentChildrenMdxChildrenChildren = 426,
  ContentChildrenMdxChildrenId = 427,
  ContentChildrenMdxExcerpt = 428,
  ContentChildrenMdxFileAbsolutePath = 429,
  ContentChildrenMdxFrontmatterTitle = 430,
  ContentChildrenMdxHeadings = 431,
  ContentChildrenMdxHeadingsDepth = 432,
  ContentChildrenMdxHeadingsValue = 433,
  ContentChildrenMdxHtml = 434,
  ContentChildrenMdxId = 435,
  ContentChildrenMdxInternalContent = 436,
  ContentChildrenMdxInternalContentDigest = 437,
  ContentChildrenMdxInternalContentFilePath = 438,
  ContentChildrenMdxInternalDescription = 439,
  ContentChildrenMdxInternalFieldOwners = 440,
  ContentChildrenMdxInternalIgnoreType = 441,
  ContentChildrenMdxInternalMediaType = 442,
  ContentChildrenMdxInternalOwner = 443,
  ContentChildrenMdxInternalType = 444,
  ContentChildrenMdxMdxAst = 445,
  ContentChildrenMdxParentChildren = 446,
  ContentChildrenMdxParentId = 447,
  ContentChildrenMdxRawBody = 448,
  ContentChildrenMdxSlug = 449,
  ContentChildrenMdxTableOfContents = 450,
  ContentChildrenMdxTimeToRead = 451,
  ContentChildrenMdxWordCountParagraphs = 452,
  ContentChildrenMdxWordCountSentences = 453,
  ContentChildrenMdxWordCountWords = 454,
  ContentChildrenChildren = 455,
  ContentChildrenChildrenChildren = 456,
  ContentChildrenChildrenId = 457,
  ContentChildrenId = 458,
  ContentChildrenInternalContent = 459,
  ContentChildrenInternalContentDigest = 460,
  ContentChildrenInternalContentFilePath = 461,
  ContentChildrenInternalDescription = 462,
  ContentChildrenInternalFieldOwners = 463,
  ContentChildrenInternalIgnoreType = 464,
  ContentChildrenInternalMediaType = 465,
  ContentChildrenInternalOwner = 466,
  ContentChildrenInternalType = 467,
  ContentChildrenParentChildren = 468,
  ContentChildrenParentId = 469,
  ContentContent = 470,
  ContentId = 471,
  ContentInternalContent = 472,
  ContentInternalContentDigest = 473,
  ContentInternalContentFilePath = 474,
  ContentInternalDescription = 475,
  ContentInternalFieldOwners = 476,
  ContentInternalIgnoreType = 477,
  ContentInternalMediaType = 478,
  ContentInternalOwner = 479,
  ContentInternalType = 480,
  ContentParentChildren = 481,
  ContentParentChildrenChildren = 482,
  ContentParentChildrenId = 483,
  ContentParentId = 484,
  ContentParentInternalContent = 485,
  ContentParentInternalContentDigest = 486,
  ContentParentInternalContentFilePath = 487,
  ContentParentInternalDescription = 488,
  ContentParentInternalFieldOwners = 489,
  ContentParentInternalIgnoreType = 490,
  ContentParentInternalMediaType = 491,
  ContentParentInternalOwner = 492,
  ContentParentInternalType = 493,
  ContentParentParentChildren = 494,
  ContentParentParentId = 495,
  ContentSysType = 496,
  ContentfulId = 497,
  Created = 498,
  CreatedAt = 499,
  Excerpt = 500,
  Id = 501,
  InternalContent = 502,
  InternalContentDigest = 503,
  InternalContentFilePath = 504,
  InternalDescription = 505,
  InternalFieldOwners = 506,
  InternalIgnoreType = 507,
  InternalMediaType = 508,
  InternalOwner = 509,
  InternalType = 510,
  NodeLocale = 511,
  ParentChildren = 512,
  ParentChildrenChildren = 513,
  ParentChildrenChildrenChildren = 514,
  ParentChildrenChildrenId = 515,
  ParentChildrenId = 516,
  ParentChildrenInternalContent = 517,
  ParentChildrenInternalContentDigest = 518,
  ParentChildrenInternalContentFilePath = 519,
  ParentChildrenInternalDescription = 520,
  ParentChildrenInternalFieldOwners = 521,
  ParentChildrenInternalIgnoreType = 522,
  ParentChildrenInternalMediaType = 523,
  ParentChildrenInternalOwner = 524,
  ParentChildrenInternalType = 525,
  ParentChildrenParentChildren = 526,
  ParentChildrenParentId = 527,
  ParentId = 528,
  ParentInternalContent = 529,
  ParentInternalContentDigest = 530,
  ParentInternalContentFilePath = 531,
  ParentInternalDescription = 532,
  ParentInternalFieldOwners = 533,
  ParentInternalIgnoreType = 534,
  ParentInternalMediaType = 535,
  ParentInternalOwner = 536,
  ParentInternalType = 537,
  ParentParentChildren = 538,
  ParentParentChildrenChildren = 539,
  ParentParentChildrenId = 540,
  ParentParentId = 541,
  ParentParentInternalContent = 542,
  ParentParentInternalContentDigest = 543,
  ParentParentInternalContentFilePath = 544,
  ParentParentInternalDescription = 545,
  ParentParentInternalFieldOwners = 546,
  ParentParentInternalIgnoreType = 547,
  ParentParentInternalMediaType = 548,
  ParentParentInternalOwner = 549,
  ParentParentInternalType = 550,
  ParentParentParentChildren = 551,
  ParentParentParentId = 552,
  Slug = 553,
  SpaceId = 554,
  SysContentTypeSysId = 555,
  SysContentTypeSysLinkType = 556,
  SysContentTypeSysType = 557,
  SysRevision = 558,
  SysType = 559,
  Tags = 560,
  TagsBlogPost = 561,
  TagsBlogPostCategoryBlogPost = 562,
  TagsBlogPostCategoryChildren = 563,
  TagsBlogPostCategoryContentfulId = 564,
  TagsBlogPostCategoryCreatedAt = 565,
  TagsBlogPostCategoryId = 566,
  TagsBlogPostCategoryName = 567,
  TagsBlogPostCategoryNodeLocale = 568,
  TagsBlogPostCategorySortKey = 569,
  TagsBlogPostCategorySpaceId = 570,
  TagsBlogPostCategoryUpdatedAt = 571,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 572,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 573,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 574,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 575,
  TagsBlogPostChildren = 576,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 577,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 578,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 579,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 580,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 581,
  TagsBlogPostChildrenChildren = 582,
  TagsBlogPostChildrenId = 583,
  TagsBlogPostContentChildren = 584,
  TagsBlogPostContentChildrenMdx = 585,
  TagsBlogPostContentContent = 586,
  TagsBlogPostContentId = 587,
  TagsBlogPostContentfulId = 588,
  TagsBlogPostCreated = 589,
  TagsBlogPostCreatedAt = 590,
  TagsBlogPostExcerpt = 591,
  TagsBlogPostId = 592,
  TagsBlogPostInternalContent = 593,
  TagsBlogPostInternalContentDigest = 594,
  TagsBlogPostInternalContentFilePath = 595,
  TagsBlogPostInternalDescription = 596,
  TagsBlogPostInternalFieldOwners = 597,
  TagsBlogPostInternalIgnoreType = 598,
  TagsBlogPostInternalMediaType = 599,
  TagsBlogPostInternalOwner = 600,
  TagsBlogPostInternalType = 601,
  TagsBlogPostNodeLocale = 602,
  TagsBlogPostParentChildren = 603,
  TagsBlogPostParentId = 604,
  TagsBlogPostSlug = 605,
  TagsBlogPostSpaceId = 606,
  TagsBlogPostSysRevision = 607,
  TagsBlogPostSysType = 608,
  TagsBlogPostTags = 609,
  TagsBlogPostTagsBlogPost = 610,
  TagsBlogPostTagsChildren = 611,
  TagsBlogPostTagsContentfulId = 612,
  TagsBlogPostTagsCreatedAt = 613,
  TagsBlogPostTagsId = 614,
  TagsBlogPostTagsLevel = 615,
  TagsBlogPostTagsName = 616,
  TagsBlogPostTagsNodeLocale = 617,
  TagsBlogPostTagsOss = 618,
  TagsBlogPostTagsProject = 619,
  TagsBlogPostTagsSkillGrpup = 620,
  TagsBlogPostTagsSkillMap = 621,
  TagsBlogPostTagsSpaceId = 622,
  TagsBlogPostTagsUpdatedAt = 623,
  TagsBlogPostThumbnailChildren = 624,
  TagsBlogPostThumbnailContentfulId = 625,
  TagsBlogPostThumbnailCreatedAt = 626,
  TagsBlogPostThumbnailDescription = 627,
  TagsBlogPostThumbnailFilename = 628,
  TagsBlogPostThumbnailFilesize = 629,
  TagsBlogPostThumbnailGatsbyImage = 630,
  TagsBlogPostThumbnailGatsbyImageData = 631,
  TagsBlogPostThumbnailHeight = 632,
  TagsBlogPostThumbnailId = 633,
  TagsBlogPostThumbnailMimeType = 634,
  TagsBlogPostThumbnailNodeLocale = 635,
  TagsBlogPostThumbnailPlaceholderUrl = 636,
  TagsBlogPostThumbnailPublicUrl = 637,
  TagsBlogPostThumbnailSize = 638,
  TagsBlogPostThumbnailSpaceId = 639,
  TagsBlogPostThumbnailTitle = 640,
  TagsBlogPostThumbnailUpdatedAt = 641,
  TagsBlogPostThumbnailUrl = 642,
  TagsBlogPostThumbnailWidth = 643,
  TagsBlogPostTitle = 644,
  TagsBlogPostUpdated = 645,
  TagsBlogPostUpdatedAt = 646,
  TagsChildren = 647,
  TagsChildrenChildren = 648,
  TagsChildrenChildrenChildren = 649,
  TagsChildrenChildrenId = 650,
  TagsChildrenId = 651,
  TagsChildrenInternalContent = 652,
  TagsChildrenInternalContentDigest = 653,
  TagsChildrenInternalContentFilePath = 654,
  TagsChildrenInternalDescription = 655,
  TagsChildrenInternalFieldOwners = 656,
  TagsChildrenInternalIgnoreType = 657,
  TagsChildrenInternalMediaType = 658,
  TagsChildrenInternalOwner = 659,
  TagsChildrenInternalType = 660,
  TagsChildrenParentChildren = 661,
  TagsChildrenParentId = 662,
  TagsContentfulId = 663,
  TagsCreatedAt = 664,
  TagsId = 665,
  TagsInternalContent = 666,
  TagsInternalContentDigest = 667,
  TagsInternalContentFilePath = 668,
  TagsInternalDescription = 669,
  TagsInternalFieldOwners = 670,
  TagsInternalIgnoreType = 671,
  TagsInternalMediaType = 672,
  TagsInternalOwner = 673,
  TagsInternalType = 674,
  TagsLevel = 675,
  TagsName = 676,
  TagsNodeLocale = 677,
  TagsOss = 678,
  TagsOssChildContentfulOssDetailTextNodeChildren = 679,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 680,
  TagsOssChildContentfulOssDetailTextNodeDetail = 681,
  TagsOssChildContentfulOssDetailTextNodeId = 682,
  TagsOssChildren = 683,
  TagsOssChildrenContentfulOssDetailTextNode = 684,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 685,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 686,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 687,
  TagsOssChildrenContentfulOssDetailTextNodeId = 688,
  TagsOssChildrenChildren = 689,
  TagsOssChildrenId = 690,
  TagsOssContentfulId = 691,
  TagsOssCreatedAt = 692,
  TagsOssDetailChildren = 693,
  TagsOssDetailChildrenMdx = 694,
  TagsOssDetailDetail = 695,
  TagsOssDetailId = 696,
  TagsOssHref = 697,
  TagsOssIconChildren = 698,
  TagsOssIconChildrenContentfulIconSvgTextNode = 699,
  TagsOssIconContact = 700,
  TagsOssIconContentfulId = 701,
  TagsOssIconCreatedAt = 702,
  TagsOssIconHistory = 703,
  TagsOssIconId = 704,
  TagsOssIconName = 705,
  TagsOssIconNodeLocale = 706,
  TagsOssIconOss = 707,
  TagsOssIconProject = 708,
  TagsOssIconSpaceId = 709,
  TagsOssIconUpdatedAt = 710,
  TagsOssIconWhatICanDo = 711,
  TagsOssId = 712,
  TagsOssImageChildren = 713,
  TagsOssImageContentfulId = 714,
  TagsOssImageCreatedAt = 715,
  TagsOssImageDescription = 716,
  TagsOssImageFilename = 717,
  TagsOssImageFilesize = 718,
  TagsOssImageGatsbyImage = 719,
  TagsOssImageGatsbyImageData = 720,
  TagsOssImageHeight = 721,
  TagsOssImageId = 722,
  TagsOssImageMimeType = 723,
  TagsOssImageNodeLocale = 724,
  TagsOssImagePlaceholderUrl = 725,
  TagsOssImagePublicUrl = 726,
  TagsOssImageSize = 727,
  TagsOssImageSpaceId = 728,
  TagsOssImageTitle = 729,
  TagsOssImageUpdatedAt = 730,
  TagsOssImageUrl = 731,
  TagsOssImageWidth = 732,
  TagsOssInternalContent = 733,
  TagsOssInternalContentDigest = 734,
  TagsOssInternalContentFilePath = 735,
  TagsOssInternalDescription = 736,
  TagsOssInternalFieldOwners = 737,
  TagsOssInternalIgnoreType = 738,
  TagsOssInternalMediaType = 739,
  TagsOssInternalOwner = 740,
  TagsOssInternalType = 741,
  TagsOssName = 742,
  TagsOssNodeLocale = 743,
  TagsOssParentChildren = 744,
  TagsOssParentId = 745,
  TagsOssSpaceId = 746,
  TagsOssStartDate = 747,
  TagsOssSubName = 748,
  TagsOssSysRevision = 749,
  TagsOssSysType = 750,
  TagsOssTags = 751,
  TagsOssTagsBlogPost = 752,
  TagsOssTagsChildren = 753,
  TagsOssTagsContentfulId = 754,
  TagsOssTagsCreatedAt = 755,
  TagsOssTagsId = 756,
  TagsOssTagsLevel = 757,
  TagsOssTagsName = 758,
  TagsOssTagsNodeLocale = 759,
  TagsOssTagsOss = 760,
  TagsOssTagsProject = 761,
  TagsOssTagsSkillGrpup = 762,
  TagsOssTagsSkillMap = 763,
  TagsOssTagsSpaceId = 764,
  TagsOssTagsUpdatedAt = 765,
  TagsOssUpdatedAt = 766,
  TagsParentChildren = 767,
  TagsParentChildrenChildren = 768,
  TagsParentChildrenId = 769,
  TagsParentId = 770,
  TagsParentInternalContent = 771,
  TagsParentInternalContentDigest = 772,
  TagsParentInternalContentFilePath = 773,
  TagsParentInternalDescription = 774,
  TagsParentInternalFieldOwners = 775,
  TagsParentInternalIgnoreType = 776,
  TagsParentInternalMediaType = 777,
  TagsParentInternalOwner = 778,
  TagsParentInternalType = 779,
  TagsParentParentChildren = 780,
  TagsParentParentId = 781,
  TagsProject = 782,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 783,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 784,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 785,
  TagsProjectChildContentfulProjectDetailTextNodeId = 786,
  TagsProjectChildren = 787,
  TagsProjectChildrenContentfulProjectDetailTextNode = 788,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 789,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 790,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 791,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 792,
  TagsProjectChildrenChildren = 793,
  TagsProjectChildrenId = 794,
  TagsProjectContentfulId = 795,
  TagsProjectCreatedAt = 796,
  TagsProjectDetailChildren = 797,
  TagsProjectDetailChildrenMdx = 798,
  TagsProjectDetailDetail = 799,
  TagsProjectDetailId = 800,
  TagsProjectEndDate = 801,
  TagsProjectIconChildren = 802,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 803,
  TagsProjectIconContact = 804,
  TagsProjectIconContentfulId = 805,
  TagsProjectIconCreatedAt = 806,
  TagsProjectIconHistory = 807,
  TagsProjectIconId = 808,
  TagsProjectIconName = 809,
  TagsProjectIconNodeLocale = 810,
  TagsProjectIconOss = 811,
  TagsProjectIconProject = 812,
  TagsProjectIconSpaceId = 813,
  TagsProjectIconUpdatedAt = 814,
  TagsProjectIconWhatICanDo = 815,
  TagsProjectId = 816,
  TagsProjectInternalContent = 817,
  TagsProjectInternalContentDigest = 818,
  TagsProjectInternalContentFilePath = 819,
  TagsProjectInternalDescription = 820,
  TagsProjectInternalFieldOwners = 821,
  TagsProjectInternalIgnoreType = 822,
  TagsProjectInternalMediaType = 823,
  TagsProjectInternalOwner = 824,
  TagsProjectInternalType = 825,
  TagsProjectName = 826,
  TagsProjectNodeLocale = 827,
  TagsProjectParentChildren = 828,
  TagsProjectParentId = 829,
  TagsProjectSpaceId = 830,
  TagsProjectStartDate = 831,
  TagsProjectSubName = 832,
  TagsProjectSysRevision = 833,
  TagsProjectSysType = 834,
  TagsProjectTags = 835,
  TagsProjectTagsBlogPost = 836,
  TagsProjectTagsChildren = 837,
  TagsProjectTagsContentfulId = 838,
  TagsProjectTagsCreatedAt = 839,
  TagsProjectTagsId = 840,
  TagsProjectTagsLevel = 841,
  TagsProjectTagsName = 842,
  TagsProjectTagsNodeLocale = 843,
  TagsProjectTagsOss = 844,
  TagsProjectTagsProject = 845,
  TagsProjectTagsSkillGrpup = 846,
  TagsProjectTagsSkillMap = 847,
  TagsProjectTagsSpaceId = 848,
  TagsProjectTagsUpdatedAt = 849,
  TagsProjectUpdatedAt = 850,
  TagsSkillGrpup = 851,
  TagsSkillGrpupChildren = 852,
  TagsSkillGrpupChildrenChildren = 853,
  TagsSkillGrpupChildrenId = 854,
  TagsSkillGrpupContentfulId = 855,
  TagsSkillGrpupCreatedAt = 856,
  TagsSkillGrpupId = 857,
  TagsSkillGrpupInternalContent = 858,
  TagsSkillGrpupInternalContentDigest = 859,
  TagsSkillGrpupInternalContentFilePath = 860,
  TagsSkillGrpupInternalDescription = 861,
  TagsSkillGrpupInternalFieldOwners = 862,
  TagsSkillGrpupInternalIgnoreType = 863,
  TagsSkillGrpupInternalMediaType = 864,
  TagsSkillGrpupInternalOwner = 865,
  TagsSkillGrpupInternalType = 866,
  TagsSkillGrpupName = 867,
  TagsSkillGrpupNodeLocale = 868,
  TagsSkillGrpupParentChildren = 869,
  TagsSkillGrpupParentId = 870,
  TagsSkillGrpupSkillMap = 871,
  TagsSkillGrpupSkillMapChildren = 872,
  TagsSkillGrpupSkillMapContentfulId = 873,
  TagsSkillGrpupSkillMapCreatedAt = 874,
  TagsSkillGrpupSkillMapExpanded = 875,
  TagsSkillGrpupSkillMapId = 876,
  TagsSkillGrpupSkillMapName = 877,
  TagsSkillGrpupSkillMapNodeLocale = 878,
  TagsSkillGrpupSkillMapSkillGroups = 879,
  TagsSkillGrpupSkillMapSkills = 880,
  TagsSkillGrpupSkillMapSortKey = 881,
  TagsSkillGrpupSkillMapSpaceId = 882,
  TagsSkillGrpupSkillMapUpdatedAt = 883,
  TagsSkillGrpupSkills = 884,
  TagsSkillGrpupSkillsBlogPost = 885,
  TagsSkillGrpupSkillsChildren = 886,
  TagsSkillGrpupSkillsContentfulId = 887,
  TagsSkillGrpupSkillsCreatedAt = 888,
  TagsSkillGrpupSkillsId = 889,
  TagsSkillGrpupSkillsLevel = 890,
  TagsSkillGrpupSkillsName = 891,
  TagsSkillGrpupSkillsNodeLocale = 892,
  TagsSkillGrpupSkillsOss = 893,
  TagsSkillGrpupSkillsProject = 894,
  TagsSkillGrpupSkillsSkillGrpup = 895,
  TagsSkillGrpupSkillsSkillMap = 896,
  TagsSkillGrpupSkillsSpaceId = 897,
  TagsSkillGrpupSkillsUpdatedAt = 898,
  TagsSkillGrpupSpaceId = 899,
  TagsSkillGrpupSysRevision = 900,
  TagsSkillGrpupSysType = 901,
  TagsSkillGrpupUpdatedAt = 902,
  TagsSkillMap = 903,
  TagsSkillMapChildren = 904,
  TagsSkillMapChildrenChildren = 905,
  TagsSkillMapChildrenId = 906,
  TagsSkillMapContentfulId = 907,
  TagsSkillMapCreatedAt = 908,
  TagsSkillMapExpanded = 909,
  TagsSkillMapId = 910,
  TagsSkillMapInternalContent = 911,
  TagsSkillMapInternalContentDigest = 912,
  TagsSkillMapInternalContentFilePath = 913,
  TagsSkillMapInternalDescription = 914,
  TagsSkillMapInternalFieldOwners = 915,
  TagsSkillMapInternalIgnoreType = 916,
  TagsSkillMapInternalMediaType = 917,
  TagsSkillMapInternalOwner = 918,
  TagsSkillMapInternalType = 919,
  TagsSkillMapName = 920,
  TagsSkillMapNodeLocale = 921,
  TagsSkillMapParentChildren = 922,
  TagsSkillMapParentId = 923,
  TagsSkillMapSkillGroups = 924,
  TagsSkillMapSkillGroupsChildren = 925,
  TagsSkillMapSkillGroupsContentfulId = 926,
  TagsSkillMapSkillGroupsCreatedAt = 927,
  TagsSkillMapSkillGroupsId = 928,
  TagsSkillMapSkillGroupsName = 929,
  TagsSkillMapSkillGroupsNodeLocale = 930,
  TagsSkillMapSkillGroupsSkillMap = 931,
  TagsSkillMapSkillGroupsSkills = 932,
  TagsSkillMapSkillGroupsSpaceId = 933,
  TagsSkillMapSkillGroupsUpdatedAt = 934,
  TagsSkillMapSkills = 935,
  TagsSkillMapSkillsBlogPost = 936,
  TagsSkillMapSkillsChildren = 937,
  TagsSkillMapSkillsContentfulId = 938,
  TagsSkillMapSkillsCreatedAt = 939,
  TagsSkillMapSkillsId = 940,
  TagsSkillMapSkillsLevel = 941,
  TagsSkillMapSkillsName = 942,
  TagsSkillMapSkillsNodeLocale = 943,
  TagsSkillMapSkillsOss = 944,
  TagsSkillMapSkillsProject = 945,
  TagsSkillMapSkillsSkillGrpup = 946,
  TagsSkillMapSkillsSkillMap = 947,
  TagsSkillMapSkillsSpaceId = 948,
  TagsSkillMapSkillsUpdatedAt = 949,
  TagsSkillMapSortKey = 950,
  TagsSkillMapSpaceId = 951,
  TagsSkillMapSysRevision = 952,
  TagsSkillMapSysType = 953,
  TagsSkillMapUpdatedAt = 954,
  TagsSpaceId = 955,
  TagsSysRevision = 956,
  TagsSysType = 957,
  TagsUpdatedAt = 958,
  ThumbnailChildren = 959,
  ThumbnailChildrenChildren = 960,
  ThumbnailChildrenChildrenChildren = 961,
  ThumbnailChildrenChildrenId = 962,
  ThumbnailChildrenId = 963,
  ThumbnailChildrenInternalContent = 964,
  ThumbnailChildrenInternalContentDigest = 965,
  ThumbnailChildrenInternalContentFilePath = 966,
  ThumbnailChildrenInternalDescription = 967,
  ThumbnailChildrenInternalFieldOwners = 968,
  ThumbnailChildrenInternalIgnoreType = 969,
  ThumbnailChildrenInternalMediaType = 970,
  ThumbnailChildrenInternalOwner = 971,
  ThumbnailChildrenInternalType = 972,
  ThumbnailChildrenParentChildren = 973,
  ThumbnailChildrenParentId = 974,
  ThumbnailContentfulId = 975,
  ThumbnailCreatedAt = 976,
  ThumbnailDescription = 977,
  ThumbnailFileContentType = 978,
  ThumbnailFileDetailsSize = 979,
  ThumbnailFileFileName = 980,
  ThumbnailFileUrl = 981,
  ThumbnailFilename = 982,
  ThumbnailFilesize = 983,
  ThumbnailGatsbyImage = 984,
  ThumbnailGatsbyImageData = 985,
  ThumbnailHeight = 986,
  ThumbnailId = 987,
  ThumbnailInternalContent = 988,
  ThumbnailInternalContentDigest = 989,
  ThumbnailInternalContentFilePath = 990,
  ThumbnailInternalDescription = 991,
  ThumbnailInternalFieldOwners = 992,
  ThumbnailInternalIgnoreType = 993,
  ThumbnailInternalMediaType = 994,
  ThumbnailInternalOwner = 995,
  ThumbnailInternalType = 996,
  ThumbnailMimeType = 997,
  ThumbnailNodeLocale = 998,
  ThumbnailParentChildren = 999,
  ThumbnailParentChildrenChildren = 1000,
  ThumbnailParentChildrenId = 1001,
  ThumbnailParentId = 1002,
  ThumbnailParentInternalContent = 1003,
  ThumbnailParentInternalContentDigest = 1004,
  ThumbnailParentInternalContentFilePath = 1005,
  ThumbnailParentInternalDescription = 1006,
  ThumbnailParentInternalFieldOwners = 1007,
  ThumbnailParentInternalIgnoreType = 1008,
  ThumbnailParentInternalMediaType = 1009,
  ThumbnailParentInternalOwner = 1010,
  ThumbnailParentInternalType = 1011,
  ThumbnailParentParentChildren = 1012,
  ThumbnailParentParentId = 1013,
  ThumbnailPlaceholderUrl = 1014,
  ThumbnailPublicUrl = 1015,
  ThumbnailResizeHeight = 1016,
  ThumbnailResizeSrc = 1017,
  ThumbnailResizeWidth = 1018,
  ThumbnailSize = 1019,
  ThumbnailSpaceId = 1020,
  ThumbnailSysRevision = 1021,
  ThumbnailSysType = 1022,
  ThumbnailTitle = 1023,
  ThumbnailUpdatedAt = 1024,
  ThumbnailUrl = 1025,
  ThumbnailWidth = 1026,
  Title = 1027,
  Updated = 1028,
  UpdatedAt = 1029
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
  BlogPostCategoryInternalContentFilePath = 24,
  BlogPostCategoryInternalDescription = 25,
  BlogPostCategoryInternalFieldOwners = 26,
  BlogPostCategoryInternalIgnoreType = 27,
  BlogPostCategoryInternalMediaType = 28,
  BlogPostCategoryInternalOwner = 29,
  BlogPostCategoryInternalType = 30,
  BlogPostCategoryName = 31,
  BlogPostCategoryNodeLocale = 32,
  BlogPostCategoryParentChildren = 33,
  BlogPostCategoryParentId = 34,
  BlogPostCategorySortKey = 35,
  BlogPostCategorySpaceId = 36,
  BlogPostCategorySysRevision = 37,
  BlogPostCategorySysType = 38,
  BlogPostCategoryUpdatedAt = 39,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxBody = 40,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxChildren = 41,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 42,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 43,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHeadings = 44,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHtml = 45,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxId = 46,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 47,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxRawBody = 48,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxSlug = 49,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 50,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 51,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 52,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 53,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxBody = 54,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 55,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 56,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 57,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 58,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 59,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxId = 60,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 61,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 62,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 63,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 64,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 65,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 66,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 67,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 68,
  BlogPostChildContentfulBlogPostContentTextNodeId = 69,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 70,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 71,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentFilePath = 72,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 73,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 74,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 75,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 76,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 77,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 78,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 79,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 80,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 81,
  BlogPostChildren = 82,
  BlogPostChildrenContentfulBlogPostContentTextNode = 83,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxBody = 84,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 85,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 86,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 87,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 88,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 89,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxId = 90,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 91,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 92,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 93,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 94,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 95,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 96,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 97,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 98,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 99,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 100,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 101,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 102,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 103,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 104,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 105,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 106,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 107,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 108,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 109,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 110,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 111,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 112,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 113,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 114,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 115,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentFilePath = 116,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 117,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 118,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 119,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 120,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 121,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 122,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 123,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 124,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 125,
  BlogPostChildrenChildren = 126,
  BlogPostChildrenChildrenChildren = 127,
  BlogPostChildrenChildrenId = 128,
  BlogPostChildrenId = 129,
  BlogPostChildrenInternalContent = 130,
  BlogPostChildrenInternalContentDigest = 131,
  BlogPostChildrenInternalContentFilePath = 132,
  BlogPostChildrenInternalDescription = 133,
  BlogPostChildrenInternalFieldOwners = 134,
  BlogPostChildrenInternalIgnoreType = 135,
  BlogPostChildrenInternalMediaType = 136,
  BlogPostChildrenInternalOwner = 137,
  BlogPostChildrenInternalType = 138,
  BlogPostChildrenParentChildren = 139,
  BlogPostChildrenParentId = 140,
  BlogPostContentChildMdxBody = 141,
  BlogPostContentChildMdxChildren = 142,
  BlogPostContentChildMdxExcerpt = 143,
  BlogPostContentChildMdxFileAbsolutePath = 144,
  BlogPostContentChildMdxHeadings = 145,
  BlogPostContentChildMdxHtml = 146,
  BlogPostContentChildMdxId = 147,
  BlogPostContentChildMdxMdxAst = 148,
  BlogPostContentChildMdxRawBody = 149,
  BlogPostContentChildMdxSlug = 150,
  BlogPostContentChildMdxTableOfContents = 151,
  BlogPostContentChildMdxTimeToRead = 152,
  BlogPostContentChildren = 153,
  BlogPostContentChildrenMdx = 154,
  BlogPostContentChildrenMdxBody = 155,
  BlogPostContentChildrenMdxChildren = 156,
  BlogPostContentChildrenMdxExcerpt = 157,
  BlogPostContentChildrenMdxFileAbsolutePath = 158,
  BlogPostContentChildrenMdxHeadings = 159,
  BlogPostContentChildrenMdxHtml = 160,
  BlogPostContentChildrenMdxId = 161,
  BlogPostContentChildrenMdxMdxAst = 162,
  BlogPostContentChildrenMdxRawBody = 163,
  BlogPostContentChildrenMdxSlug = 164,
  BlogPostContentChildrenMdxTableOfContents = 165,
  BlogPostContentChildrenMdxTimeToRead = 166,
  BlogPostContentChildrenChildren = 167,
  BlogPostContentChildrenId = 168,
  BlogPostContentContent = 169,
  BlogPostContentId = 170,
  BlogPostContentInternalContent = 171,
  BlogPostContentInternalContentDigest = 172,
  BlogPostContentInternalContentFilePath = 173,
  BlogPostContentInternalDescription = 174,
  BlogPostContentInternalFieldOwners = 175,
  BlogPostContentInternalIgnoreType = 176,
  BlogPostContentInternalMediaType = 177,
  BlogPostContentInternalOwner = 178,
  BlogPostContentInternalType = 179,
  BlogPostContentParentChildren = 180,
  BlogPostContentParentId = 181,
  BlogPostContentSysType = 182,
  BlogPostContentfulId = 183,
  BlogPostCreated = 184,
  BlogPostCreatedAt = 185,
  BlogPostExcerpt = 186,
  BlogPostId = 187,
  BlogPostInternalContent = 188,
  BlogPostInternalContentDigest = 189,
  BlogPostInternalContentFilePath = 190,
  BlogPostInternalDescription = 191,
  BlogPostInternalFieldOwners = 192,
  BlogPostInternalIgnoreType = 193,
  BlogPostInternalMediaType = 194,
  BlogPostInternalOwner = 195,
  BlogPostInternalType = 196,
  BlogPostNodeLocale = 197,
  BlogPostParentChildren = 198,
  BlogPostParentChildrenChildren = 199,
  BlogPostParentChildrenId = 200,
  BlogPostParentId = 201,
  BlogPostParentInternalContent = 202,
  BlogPostParentInternalContentDigest = 203,
  BlogPostParentInternalContentFilePath = 204,
  BlogPostParentInternalDescription = 205,
  BlogPostParentInternalFieldOwners = 206,
  BlogPostParentInternalIgnoreType = 207,
  BlogPostParentInternalMediaType = 208,
  BlogPostParentInternalOwner = 209,
  BlogPostParentInternalType = 210,
  BlogPostParentParentChildren = 211,
  BlogPostParentParentId = 212,
  BlogPostSlug = 213,
  BlogPostSpaceId = 214,
  BlogPostSysRevision = 215,
  BlogPostSysType = 216,
  BlogPostTags = 217,
  BlogPostTagsBlogPost = 218,
  BlogPostTagsBlogPostChildren = 219,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 220,
  BlogPostTagsBlogPostContentfulId = 221,
  BlogPostTagsBlogPostCreated = 222,
  BlogPostTagsBlogPostCreatedAt = 223,
  BlogPostTagsBlogPostExcerpt = 224,
  BlogPostTagsBlogPostId = 225,
  BlogPostTagsBlogPostNodeLocale = 226,
  BlogPostTagsBlogPostSlug = 227,
  BlogPostTagsBlogPostSpaceId = 228,
  BlogPostTagsBlogPostTags = 229,
  BlogPostTagsBlogPostTitle = 230,
  BlogPostTagsBlogPostUpdated = 231,
  BlogPostTagsBlogPostUpdatedAt = 232,
  BlogPostTagsChildren = 233,
  BlogPostTagsChildrenChildren = 234,
  BlogPostTagsChildrenId = 235,
  BlogPostTagsContentfulId = 236,
  BlogPostTagsCreatedAt = 237,
  BlogPostTagsId = 238,
  BlogPostTagsInternalContent = 239,
  BlogPostTagsInternalContentDigest = 240,
  BlogPostTagsInternalContentFilePath = 241,
  BlogPostTagsInternalDescription = 242,
  BlogPostTagsInternalFieldOwners = 243,
  BlogPostTagsInternalIgnoreType = 244,
  BlogPostTagsInternalMediaType = 245,
  BlogPostTagsInternalOwner = 246,
  BlogPostTagsInternalType = 247,
  BlogPostTagsLevel = 248,
  BlogPostTagsName = 249,
  BlogPostTagsNodeLocale = 250,
  BlogPostTagsOss = 251,
  BlogPostTagsOssChildren = 252,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 253,
  BlogPostTagsOssContentfulId = 254,
  BlogPostTagsOssCreatedAt = 255,
  BlogPostTagsOssHref = 256,
  BlogPostTagsOssId = 257,
  BlogPostTagsOssName = 258,
  BlogPostTagsOssNodeLocale = 259,
  BlogPostTagsOssSpaceId = 260,
  BlogPostTagsOssStartDate = 261,
  BlogPostTagsOssSubName = 262,
  BlogPostTagsOssTags = 263,
  BlogPostTagsOssUpdatedAt = 264,
  BlogPostTagsParentChildren = 265,
  BlogPostTagsParentId = 266,
  BlogPostTagsProject = 267,
  BlogPostTagsProjectChildren = 268,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 269,
  BlogPostTagsProjectContentfulId = 270,
  BlogPostTagsProjectCreatedAt = 271,
  BlogPostTagsProjectEndDate = 272,
  BlogPostTagsProjectId = 273,
  BlogPostTagsProjectName = 274,
  BlogPostTagsProjectNodeLocale = 275,
  BlogPostTagsProjectSpaceId = 276,
  BlogPostTagsProjectStartDate = 277,
  BlogPostTagsProjectSubName = 278,
  BlogPostTagsProjectTags = 279,
  BlogPostTagsProjectUpdatedAt = 280,
  BlogPostTagsSkillGrpup = 281,
  BlogPostTagsSkillGrpupChildren = 282,
  BlogPostTagsSkillGrpupContentfulId = 283,
  BlogPostTagsSkillGrpupCreatedAt = 284,
  BlogPostTagsSkillGrpupId = 285,
  BlogPostTagsSkillGrpupName = 286,
  BlogPostTagsSkillGrpupNodeLocale = 287,
  BlogPostTagsSkillGrpupSkillMap = 288,
  BlogPostTagsSkillGrpupSkills = 289,
  BlogPostTagsSkillGrpupSpaceId = 290,
  BlogPostTagsSkillGrpupUpdatedAt = 291,
  BlogPostTagsSkillMap = 292,
  BlogPostTagsSkillMapChildren = 293,
  BlogPostTagsSkillMapContentfulId = 294,
  BlogPostTagsSkillMapCreatedAt = 295,
  BlogPostTagsSkillMapExpanded = 296,
  BlogPostTagsSkillMapId = 297,
  BlogPostTagsSkillMapName = 298,
  BlogPostTagsSkillMapNodeLocale = 299,
  BlogPostTagsSkillMapSkillGroups = 300,
  BlogPostTagsSkillMapSkills = 301,
  BlogPostTagsSkillMapSortKey = 302,
  BlogPostTagsSkillMapSpaceId = 303,
  BlogPostTagsSkillMapUpdatedAt = 304,
  BlogPostTagsSpaceId = 305,
  BlogPostTagsSysRevision = 306,
  BlogPostTagsSysType = 307,
  BlogPostTagsUpdatedAt = 308,
  BlogPostThumbnailChildren = 309,
  BlogPostThumbnailChildrenChildren = 310,
  BlogPostThumbnailChildrenId = 311,
  BlogPostThumbnailContentfulId = 312,
  BlogPostThumbnailCreatedAt = 313,
  BlogPostThumbnailDescription = 314,
  BlogPostThumbnailFileContentType = 315,
  BlogPostThumbnailFileFileName = 316,
  BlogPostThumbnailFileUrl = 317,
  BlogPostThumbnailFilename = 318,
  BlogPostThumbnailFilesize = 319,
  BlogPostThumbnailGatsbyImage = 320,
  BlogPostThumbnailGatsbyImageData = 321,
  BlogPostThumbnailHeight = 322,
  BlogPostThumbnailId = 323,
  BlogPostThumbnailInternalContent = 324,
  BlogPostThumbnailInternalContentDigest = 325,
  BlogPostThumbnailInternalContentFilePath = 326,
  BlogPostThumbnailInternalDescription = 327,
  BlogPostThumbnailInternalFieldOwners = 328,
  BlogPostThumbnailInternalIgnoreType = 329,
  BlogPostThumbnailInternalMediaType = 330,
  BlogPostThumbnailInternalOwner = 331,
  BlogPostThumbnailInternalType = 332,
  BlogPostThumbnailMimeType = 333,
  BlogPostThumbnailNodeLocale = 334,
  BlogPostThumbnailParentChildren = 335,
  BlogPostThumbnailParentId = 336,
  BlogPostThumbnailPlaceholderUrl = 337,
  BlogPostThumbnailPublicUrl = 338,
  BlogPostThumbnailResizeHeight = 339,
  BlogPostThumbnailResizeSrc = 340,
  BlogPostThumbnailResizeWidth = 341,
  BlogPostThumbnailSize = 342,
  BlogPostThumbnailSpaceId = 343,
  BlogPostThumbnailSysRevision = 344,
  BlogPostThumbnailSysType = 345,
  BlogPostThumbnailTitle = 346,
  BlogPostThumbnailUpdatedAt = 347,
  BlogPostThumbnailUrl = 348,
  BlogPostThumbnailWidth = 349,
  BlogPostTitle = 350,
  BlogPostUpdated = 351,
  BlogPostUpdatedAt = 352,
  Children = 353,
  ChildrenChildren = 354,
  ChildrenChildrenChildren = 355,
  ChildrenChildrenChildrenChildren = 356,
  ChildrenChildrenChildrenId = 357,
  ChildrenChildrenId = 358,
  ChildrenChildrenInternalContent = 359,
  ChildrenChildrenInternalContentDigest = 360,
  ChildrenChildrenInternalContentFilePath = 361,
  ChildrenChildrenInternalDescription = 362,
  ChildrenChildrenInternalFieldOwners = 363,
  ChildrenChildrenInternalIgnoreType = 364,
  ChildrenChildrenInternalMediaType = 365,
  ChildrenChildrenInternalOwner = 366,
  ChildrenChildrenInternalType = 367,
  ChildrenChildrenParentChildren = 368,
  ChildrenChildrenParentId = 369,
  ChildrenId = 370,
  ChildrenInternalContent = 371,
  ChildrenInternalContentDigest = 372,
  ChildrenInternalContentFilePath = 373,
  ChildrenInternalDescription = 374,
  ChildrenInternalFieldOwners = 375,
  ChildrenInternalIgnoreType = 376,
  ChildrenInternalMediaType = 377,
  ChildrenInternalOwner = 378,
  ChildrenInternalType = 379,
  ChildrenParentChildren = 380,
  ChildrenParentChildrenChildren = 381,
  ChildrenParentChildrenId = 382,
  ChildrenParentId = 383,
  ChildrenParentInternalContent = 384,
  ChildrenParentInternalContentDigest = 385,
  ChildrenParentInternalContentFilePath = 386,
  ChildrenParentInternalDescription = 387,
  ChildrenParentInternalFieldOwners = 388,
  ChildrenParentInternalIgnoreType = 389,
  ChildrenParentInternalMediaType = 390,
  ChildrenParentInternalOwner = 391,
  ChildrenParentInternalType = 392,
  ChildrenParentParentChildren = 393,
  ChildrenParentParentId = 394,
  ContentfulId = 395,
  CreatedAt = 396,
  Id = 397,
  InternalContent = 398,
  InternalContentDigest = 399,
  InternalContentFilePath = 400,
  InternalDescription = 401,
  InternalFieldOwners = 402,
  InternalIgnoreType = 403,
  InternalMediaType = 404,
  InternalOwner = 405,
  InternalType = 406,
  Name = 407,
  NodeLocale = 408,
  ParentChildren = 409,
  ParentChildrenChildren = 410,
  ParentChildrenChildrenChildren = 411,
  ParentChildrenChildrenId = 412,
  ParentChildrenId = 413,
  ParentChildrenInternalContent = 414,
  ParentChildrenInternalContentDigest = 415,
  ParentChildrenInternalContentFilePath = 416,
  ParentChildrenInternalDescription = 417,
  ParentChildrenInternalFieldOwners = 418,
  ParentChildrenInternalIgnoreType = 419,
  ParentChildrenInternalMediaType = 420,
  ParentChildrenInternalOwner = 421,
  ParentChildrenInternalType = 422,
  ParentChildrenParentChildren = 423,
  ParentChildrenParentId = 424,
  ParentId = 425,
  ParentInternalContent = 426,
  ParentInternalContentDigest = 427,
  ParentInternalContentFilePath = 428,
  ParentInternalDescription = 429,
  ParentInternalFieldOwners = 430,
  ParentInternalIgnoreType = 431,
  ParentInternalMediaType = 432,
  ParentInternalOwner = 433,
  ParentInternalType = 434,
  ParentParentChildren = 435,
  ParentParentChildrenChildren = 436,
  ParentParentChildrenId = 437,
  ParentParentId = 438,
  ParentParentInternalContent = 439,
  ParentParentInternalContentDigest = 440,
  ParentParentInternalContentFilePath = 441,
  ParentParentInternalDescription = 442,
  ParentParentInternalFieldOwners = 443,
  ParentParentInternalIgnoreType = 444,
  ParentParentInternalMediaType = 445,
  ParentParentInternalOwner = 446,
  ParentParentInternalType = 447,
  ParentParentParentChildren = 448,
  ParentParentParentId = 449,
  SortKey = 450,
  SpaceId = 451,
  SysContentTypeSysId = 452,
  SysContentTypeSysLinkType = 453,
  SysContentTypeSysType = 454,
  SysRevision = 455,
  SysType = 456,
  UpdatedAt = 457
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Href = 44,
  IconSvgDarkChildren = 45,
  IconSvgDarkChildrenChildren = 46,
  IconSvgDarkChildrenChildrenChildren = 47,
  IconSvgDarkChildrenChildrenId = 48,
  IconSvgDarkChildrenId = 49,
  IconSvgDarkChildrenInternalContent = 50,
  IconSvgDarkChildrenInternalContentDigest = 51,
  IconSvgDarkChildrenInternalContentFilePath = 52,
  IconSvgDarkChildrenInternalDescription = 53,
  IconSvgDarkChildrenInternalFieldOwners = 54,
  IconSvgDarkChildrenInternalIgnoreType = 55,
  IconSvgDarkChildrenInternalMediaType = 56,
  IconSvgDarkChildrenInternalOwner = 57,
  IconSvgDarkChildrenInternalType = 58,
  IconSvgDarkChildrenParentChildren = 59,
  IconSvgDarkChildrenParentId = 60,
  IconSvgDarkContentfulId = 61,
  IconSvgDarkCreatedAt = 62,
  IconSvgDarkDescription = 63,
  IconSvgDarkFileContentType = 64,
  IconSvgDarkFileDetailsSize = 65,
  IconSvgDarkFileFileName = 66,
  IconSvgDarkFileUrl = 67,
  IconSvgDarkFilename = 68,
  IconSvgDarkFilesize = 69,
  IconSvgDarkGatsbyImage = 70,
  IconSvgDarkGatsbyImageData = 71,
  IconSvgDarkHeight = 72,
  IconSvgDarkId = 73,
  IconSvgDarkInternalContent = 74,
  IconSvgDarkInternalContentDigest = 75,
  IconSvgDarkInternalContentFilePath = 76,
  IconSvgDarkInternalDescription = 77,
  IconSvgDarkInternalFieldOwners = 78,
  IconSvgDarkInternalIgnoreType = 79,
  IconSvgDarkInternalMediaType = 80,
  IconSvgDarkInternalOwner = 81,
  IconSvgDarkInternalType = 82,
  IconSvgDarkMimeType = 83,
  IconSvgDarkNodeLocale = 84,
  IconSvgDarkParentChildren = 85,
  IconSvgDarkParentChildrenChildren = 86,
  IconSvgDarkParentChildrenId = 87,
  IconSvgDarkParentId = 88,
  IconSvgDarkParentInternalContent = 89,
  IconSvgDarkParentInternalContentDigest = 90,
  IconSvgDarkParentInternalContentFilePath = 91,
  IconSvgDarkParentInternalDescription = 92,
  IconSvgDarkParentInternalFieldOwners = 93,
  IconSvgDarkParentInternalIgnoreType = 94,
  IconSvgDarkParentInternalMediaType = 95,
  IconSvgDarkParentInternalOwner = 96,
  IconSvgDarkParentInternalType = 97,
  IconSvgDarkParentParentChildren = 98,
  IconSvgDarkParentParentId = 99,
  IconSvgDarkPlaceholderUrl = 100,
  IconSvgDarkPublicUrl = 101,
  IconSvgDarkResizeHeight = 102,
  IconSvgDarkResizeSrc = 103,
  IconSvgDarkResizeWidth = 104,
  IconSvgDarkSize = 105,
  IconSvgDarkSpaceId = 106,
  IconSvgDarkSysRevision = 107,
  IconSvgDarkSysType = 108,
  IconSvgDarkTitle = 109,
  IconSvgDarkUpdatedAt = 110,
  IconSvgDarkUrl = 111,
  IconSvgDarkWidth = 112,
  IconSvgLightChildren = 113,
  IconSvgLightChildrenChildren = 114,
  IconSvgLightChildrenChildrenChildren = 115,
  IconSvgLightChildrenChildrenId = 116,
  IconSvgLightChildrenId = 117,
  IconSvgLightChildrenInternalContent = 118,
  IconSvgLightChildrenInternalContentDigest = 119,
  IconSvgLightChildrenInternalContentFilePath = 120,
  IconSvgLightChildrenInternalDescription = 121,
  IconSvgLightChildrenInternalFieldOwners = 122,
  IconSvgLightChildrenInternalIgnoreType = 123,
  IconSvgLightChildrenInternalMediaType = 124,
  IconSvgLightChildrenInternalOwner = 125,
  IconSvgLightChildrenInternalType = 126,
  IconSvgLightChildrenParentChildren = 127,
  IconSvgLightChildrenParentId = 128,
  IconSvgLightContentfulId = 129,
  IconSvgLightCreatedAt = 130,
  IconSvgLightDescription = 131,
  IconSvgLightFileContentType = 132,
  IconSvgLightFileDetailsSize = 133,
  IconSvgLightFileFileName = 134,
  IconSvgLightFileUrl = 135,
  IconSvgLightFilename = 136,
  IconSvgLightFilesize = 137,
  IconSvgLightGatsbyImage = 138,
  IconSvgLightGatsbyImageData = 139,
  IconSvgLightHeight = 140,
  IconSvgLightId = 141,
  IconSvgLightInternalContent = 142,
  IconSvgLightInternalContentDigest = 143,
  IconSvgLightInternalContentFilePath = 144,
  IconSvgLightInternalDescription = 145,
  IconSvgLightInternalFieldOwners = 146,
  IconSvgLightInternalIgnoreType = 147,
  IconSvgLightInternalMediaType = 148,
  IconSvgLightInternalOwner = 149,
  IconSvgLightInternalType = 150,
  IconSvgLightMimeType = 151,
  IconSvgLightNodeLocale = 152,
  IconSvgLightParentChildren = 153,
  IconSvgLightParentChildrenChildren = 154,
  IconSvgLightParentChildrenId = 155,
  IconSvgLightParentId = 156,
  IconSvgLightParentInternalContent = 157,
  IconSvgLightParentInternalContentDigest = 158,
  IconSvgLightParentInternalContentFilePath = 159,
  IconSvgLightParentInternalDescription = 160,
  IconSvgLightParentInternalFieldOwners = 161,
  IconSvgLightParentInternalIgnoreType = 162,
  IconSvgLightParentInternalMediaType = 163,
  IconSvgLightParentInternalOwner = 164,
  IconSvgLightParentInternalType = 165,
  IconSvgLightParentParentChildren = 166,
  IconSvgLightParentParentId = 167,
  IconSvgLightPlaceholderUrl = 168,
  IconSvgLightPublicUrl = 169,
  IconSvgLightResizeHeight = 170,
  IconSvgLightResizeSrc = 171,
  IconSvgLightResizeWidth = 172,
  IconSvgLightSize = 173,
  IconSvgLightSpaceId = 174,
  IconSvgLightSysRevision = 175,
  IconSvgLightSysType = 176,
  IconSvgLightTitle = 177,
  IconSvgLightUpdatedAt = 178,
  IconSvgLightUrl = 179,
  IconSvgLightWidth = 180,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 181,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 182,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 183,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 184,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 185,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 186,
  IconChildContentfulIconSvgTextNodeChildMdxId = 187,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 188,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 189,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 190,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 191,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 192,
  IconChildContentfulIconSvgTextNodeChildren = 193,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 194,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 195,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 196,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 197,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 198,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 199,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 200,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 201,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 202,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 203,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 204,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 205,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 206,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 207,
  IconChildContentfulIconSvgTextNodeChildrenId = 208,
  IconChildContentfulIconSvgTextNodeId = 209,
  IconChildContentfulIconSvgTextNodeInternalContent = 210,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 211,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 212,
  IconChildContentfulIconSvgTextNodeInternalDescription = 213,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 214,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 215,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 216,
  IconChildContentfulIconSvgTextNodeInternalOwner = 217,
  IconChildContentfulIconSvgTextNodeInternalType = 218,
  IconChildContentfulIconSvgTextNodeParentChildren = 219,
  IconChildContentfulIconSvgTextNodeParentId = 220,
  IconChildContentfulIconSvgTextNodeSvg = 221,
  IconChildContentfulIconSvgTextNodeSysType = 222,
  IconChildren = 223,
  IconChildrenContentfulIconSvgTextNode = 224,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 225,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 226,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 227,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 228,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 229,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 230,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 231,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 232,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 233,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 234,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 235,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 236,
  IconChildrenContentfulIconSvgTextNodeChildren = 237,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 238,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 239,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 240,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 241,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 242,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 243,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 244,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 245,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 246,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 247,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 248,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 249,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 250,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 251,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 252,
  IconChildrenContentfulIconSvgTextNodeId = 253,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 254,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 255,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 256,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 257,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 258,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 259,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 260,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 261,
  IconChildrenContentfulIconSvgTextNodeInternalType = 262,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 263,
  IconChildrenContentfulIconSvgTextNodeParentId = 264,
  IconChildrenContentfulIconSvgTextNodeSvg = 265,
  IconChildrenContentfulIconSvgTextNodeSysType = 266,
  IconChildrenChildren = 267,
  IconChildrenChildrenChildren = 268,
  IconChildrenChildrenId = 269,
  IconChildrenId = 270,
  IconChildrenInternalContent = 271,
  IconChildrenInternalContentDigest = 272,
  IconChildrenInternalContentFilePath = 273,
  IconChildrenInternalDescription = 274,
  IconChildrenInternalFieldOwners = 275,
  IconChildrenInternalIgnoreType = 276,
  IconChildrenInternalMediaType = 277,
  IconChildrenInternalOwner = 278,
  IconChildrenInternalType = 279,
  IconChildrenParentChildren = 280,
  IconChildrenParentId = 281,
  IconContact = 282,
  IconContactChildren = 283,
  IconContactChildrenChildren = 284,
  IconContactChildrenId = 285,
  IconContactContentfulId = 286,
  IconContactCreatedAt = 287,
  IconContactHref = 288,
  IconContactIconSvgDarkChildren = 289,
  IconContactIconSvgDarkContentfulId = 290,
  IconContactIconSvgDarkCreatedAt = 291,
  IconContactIconSvgDarkDescription = 292,
  IconContactIconSvgDarkFilename = 293,
  IconContactIconSvgDarkFilesize = 294,
  IconContactIconSvgDarkGatsbyImage = 295,
  IconContactIconSvgDarkGatsbyImageData = 296,
  IconContactIconSvgDarkHeight = 297,
  IconContactIconSvgDarkId = 298,
  IconContactIconSvgDarkMimeType = 299,
  IconContactIconSvgDarkNodeLocale = 300,
  IconContactIconSvgDarkPlaceholderUrl = 301,
  IconContactIconSvgDarkPublicUrl = 302,
  IconContactIconSvgDarkSize = 303,
  IconContactIconSvgDarkSpaceId = 304,
  IconContactIconSvgDarkTitle = 305,
  IconContactIconSvgDarkUpdatedAt = 306,
  IconContactIconSvgDarkUrl = 307,
  IconContactIconSvgDarkWidth = 308,
  IconContactIconSvgLightChildren = 309,
  IconContactIconSvgLightContentfulId = 310,
  IconContactIconSvgLightCreatedAt = 311,
  IconContactIconSvgLightDescription = 312,
  IconContactIconSvgLightFilename = 313,
  IconContactIconSvgLightFilesize = 314,
  IconContactIconSvgLightGatsbyImage = 315,
  IconContactIconSvgLightGatsbyImageData = 316,
  IconContactIconSvgLightHeight = 317,
  IconContactIconSvgLightId = 318,
  IconContactIconSvgLightMimeType = 319,
  IconContactIconSvgLightNodeLocale = 320,
  IconContactIconSvgLightPlaceholderUrl = 321,
  IconContactIconSvgLightPublicUrl = 322,
  IconContactIconSvgLightSize = 323,
  IconContactIconSvgLightSpaceId = 324,
  IconContactIconSvgLightTitle = 325,
  IconContactIconSvgLightUpdatedAt = 326,
  IconContactIconSvgLightUrl = 327,
  IconContactIconSvgLightWidth = 328,
  IconContactIconChildren = 329,
  IconContactIconChildrenContentfulIconSvgTextNode = 330,
  IconContactIconContact = 331,
  IconContactIconContentfulId = 332,
  IconContactIconCreatedAt = 333,
  IconContactIconHistory = 334,
  IconContactIconId = 335,
  IconContactIconName = 336,
  IconContactIconNodeLocale = 337,
  IconContactIconOss = 338,
  IconContactIconProject = 339,
  IconContactIconSpaceId = 340,
  IconContactIconUpdatedAt = 341,
  IconContactIconWhatICanDo = 342,
  IconContactId = 343,
  IconContactInternalContent = 344,
  IconContactInternalContentDigest = 345,
  IconContactInternalContentFilePath = 346,
  IconContactInternalDescription = 347,
  IconContactInternalFieldOwners = 348,
  IconContactInternalIgnoreType = 349,
  IconContactInternalMediaType = 350,
  IconContactInternalOwner = 351,
  IconContactInternalType = 352,
  IconContactName = 353,
  IconContactNodeLocale = 354,
  IconContactParentChildren = 355,
  IconContactParentId = 356,
  IconContactSortKey = 357,
  IconContactSpaceId = 358,
  IconContactSubName = 359,
  IconContactSysRevision = 360,
  IconContactSysType = 361,
  IconContactUpdatedAt = 362,
  IconContentfulId = 363,
  IconCreatedAt = 364,
  IconHistory = 365,
  IconHistoryChildren = 366,
  IconHistoryChildrenChildren = 367,
  IconHistoryChildrenId = 368,
  IconHistoryContentfulId = 369,
  IconHistoryCreatedAt = 370,
  IconHistoryDate = 371,
  IconHistoryIconChildren = 372,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 373,
  IconHistoryIconContact = 374,
  IconHistoryIconContentfulId = 375,
  IconHistoryIconCreatedAt = 376,
  IconHistoryIconHistory = 377,
  IconHistoryIconId = 378,
  IconHistoryIconName = 379,
  IconHistoryIconNodeLocale = 380,
  IconHistoryIconOss = 381,
  IconHistoryIconProject = 382,
  IconHistoryIconSpaceId = 383,
  IconHistoryIconUpdatedAt = 384,
  IconHistoryIconWhatICanDo = 385,
  IconHistoryId = 386,
  IconHistoryInternalContent = 387,
  IconHistoryInternalContentDigest = 388,
  IconHistoryInternalContentFilePath = 389,
  IconHistoryInternalDescription = 390,
  IconHistoryInternalFieldOwners = 391,
  IconHistoryInternalIgnoreType = 392,
  IconHistoryInternalMediaType = 393,
  IconHistoryInternalOwner = 394,
  IconHistoryInternalType = 395,
  IconHistoryName = 396,
  IconHistoryNodeLocale = 397,
  IconHistoryParentChildren = 398,
  IconHistoryParentId = 399,
  IconHistorySpaceId = 400,
  IconHistorySubName = 401,
  IconHistorySysRevision = 402,
  IconHistorySysType = 403,
  IconHistoryUpdatedAt = 404,
  IconId = 405,
  IconInternalContent = 406,
  IconInternalContentDigest = 407,
  IconInternalContentFilePath = 408,
  IconInternalDescription = 409,
  IconInternalFieldOwners = 410,
  IconInternalIgnoreType = 411,
  IconInternalMediaType = 412,
  IconInternalOwner = 413,
  IconInternalType = 414,
  IconName = 415,
  IconNodeLocale = 416,
  IconOss = 417,
  IconOssChildContentfulOssDetailTextNodeChildren = 418,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 419,
  IconOssChildContentfulOssDetailTextNodeDetail = 420,
  IconOssChildContentfulOssDetailTextNodeId = 421,
  IconOssChildren = 422,
  IconOssChildrenContentfulOssDetailTextNode = 423,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 424,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 425,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 426,
  IconOssChildrenContentfulOssDetailTextNodeId = 427,
  IconOssChildrenChildren = 428,
  IconOssChildrenId = 429,
  IconOssContentfulId = 430,
  IconOssCreatedAt = 431,
  IconOssDetailChildren = 432,
  IconOssDetailChildrenMdx = 433,
  IconOssDetailDetail = 434,
  IconOssDetailId = 435,
  IconOssHref = 436,
  IconOssIconChildren = 437,
  IconOssIconChildrenContentfulIconSvgTextNode = 438,
  IconOssIconContact = 439,
  IconOssIconContentfulId = 440,
  IconOssIconCreatedAt = 441,
  IconOssIconHistory = 442,
  IconOssIconId = 443,
  IconOssIconName = 444,
  IconOssIconNodeLocale = 445,
  IconOssIconOss = 446,
  IconOssIconProject = 447,
  IconOssIconSpaceId = 448,
  IconOssIconUpdatedAt = 449,
  IconOssIconWhatICanDo = 450,
  IconOssId = 451,
  IconOssImageChildren = 452,
  IconOssImageContentfulId = 453,
  IconOssImageCreatedAt = 454,
  IconOssImageDescription = 455,
  IconOssImageFilename = 456,
  IconOssImageFilesize = 457,
  IconOssImageGatsbyImage = 458,
  IconOssImageGatsbyImageData = 459,
  IconOssImageHeight = 460,
  IconOssImageId = 461,
  IconOssImageMimeType = 462,
  IconOssImageNodeLocale = 463,
  IconOssImagePlaceholderUrl = 464,
  IconOssImagePublicUrl = 465,
  IconOssImageSize = 466,
  IconOssImageSpaceId = 467,
  IconOssImageTitle = 468,
  IconOssImageUpdatedAt = 469,
  IconOssImageUrl = 470,
  IconOssImageWidth = 471,
  IconOssInternalContent = 472,
  IconOssInternalContentDigest = 473,
  IconOssInternalContentFilePath = 474,
  IconOssInternalDescription = 475,
  IconOssInternalFieldOwners = 476,
  IconOssInternalIgnoreType = 477,
  IconOssInternalMediaType = 478,
  IconOssInternalOwner = 479,
  IconOssInternalType = 480,
  IconOssName = 481,
  IconOssNodeLocale = 482,
  IconOssParentChildren = 483,
  IconOssParentId = 484,
  IconOssSpaceId = 485,
  IconOssStartDate = 486,
  IconOssSubName = 487,
  IconOssSysRevision = 488,
  IconOssSysType = 489,
  IconOssTags = 490,
  IconOssTagsBlogPost = 491,
  IconOssTagsChildren = 492,
  IconOssTagsContentfulId = 493,
  IconOssTagsCreatedAt = 494,
  IconOssTagsId = 495,
  IconOssTagsLevel = 496,
  IconOssTagsName = 497,
  IconOssTagsNodeLocale = 498,
  IconOssTagsOss = 499,
  IconOssTagsProject = 500,
  IconOssTagsSkillGrpup = 501,
  IconOssTagsSkillMap = 502,
  IconOssTagsSpaceId = 503,
  IconOssTagsUpdatedAt = 504,
  IconOssUpdatedAt = 505,
  IconParentChildren = 506,
  IconParentChildrenChildren = 507,
  IconParentChildrenId = 508,
  IconParentId = 509,
  IconParentInternalContent = 510,
  IconParentInternalContentDigest = 511,
  IconParentInternalContentFilePath = 512,
  IconParentInternalDescription = 513,
  IconParentInternalFieldOwners = 514,
  IconParentInternalIgnoreType = 515,
  IconParentInternalMediaType = 516,
  IconParentInternalOwner = 517,
  IconParentInternalType = 518,
  IconParentParentChildren = 519,
  IconParentParentId = 520,
  IconProject = 521,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 522,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 523,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 524,
  IconProjectChildContentfulProjectDetailTextNodeId = 525,
  IconProjectChildren = 526,
  IconProjectChildrenContentfulProjectDetailTextNode = 527,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 528,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 529,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 530,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 531,
  IconProjectChildrenChildren = 532,
  IconProjectChildrenId = 533,
  IconProjectContentfulId = 534,
  IconProjectCreatedAt = 535,
  IconProjectDetailChildren = 536,
  IconProjectDetailChildrenMdx = 537,
  IconProjectDetailDetail = 538,
  IconProjectDetailId = 539,
  IconProjectEndDate = 540,
  IconProjectIconChildren = 541,
  IconProjectIconChildrenContentfulIconSvgTextNode = 542,
  IconProjectIconContact = 543,
  IconProjectIconContentfulId = 544,
  IconProjectIconCreatedAt = 545,
  IconProjectIconHistory = 546,
  IconProjectIconId = 547,
  IconProjectIconName = 548,
  IconProjectIconNodeLocale = 549,
  IconProjectIconOss = 550,
  IconProjectIconProject = 551,
  IconProjectIconSpaceId = 552,
  IconProjectIconUpdatedAt = 553,
  IconProjectIconWhatICanDo = 554,
  IconProjectId = 555,
  IconProjectInternalContent = 556,
  IconProjectInternalContentDigest = 557,
  IconProjectInternalContentFilePath = 558,
  IconProjectInternalDescription = 559,
  IconProjectInternalFieldOwners = 560,
  IconProjectInternalIgnoreType = 561,
  IconProjectInternalMediaType = 562,
  IconProjectInternalOwner = 563,
  IconProjectInternalType = 564,
  IconProjectName = 565,
  IconProjectNodeLocale = 566,
  IconProjectParentChildren = 567,
  IconProjectParentId = 568,
  IconProjectSpaceId = 569,
  IconProjectStartDate = 570,
  IconProjectSubName = 571,
  IconProjectSysRevision = 572,
  IconProjectSysType = 573,
  IconProjectTags = 574,
  IconProjectTagsBlogPost = 575,
  IconProjectTagsChildren = 576,
  IconProjectTagsContentfulId = 577,
  IconProjectTagsCreatedAt = 578,
  IconProjectTagsId = 579,
  IconProjectTagsLevel = 580,
  IconProjectTagsName = 581,
  IconProjectTagsNodeLocale = 582,
  IconProjectTagsOss = 583,
  IconProjectTagsProject = 584,
  IconProjectTagsSkillGrpup = 585,
  IconProjectTagsSkillMap = 586,
  IconProjectTagsSpaceId = 587,
  IconProjectTagsUpdatedAt = 588,
  IconProjectUpdatedAt = 589,
  IconSpaceId = 590,
  IconSvgChildMdxBody = 591,
  IconSvgChildMdxChildren = 592,
  IconSvgChildMdxExcerpt = 593,
  IconSvgChildMdxFileAbsolutePath = 594,
  IconSvgChildMdxHeadings = 595,
  IconSvgChildMdxHtml = 596,
  IconSvgChildMdxId = 597,
  IconSvgChildMdxMdxAst = 598,
  IconSvgChildMdxRawBody = 599,
  IconSvgChildMdxSlug = 600,
  IconSvgChildMdxTableOfContents = 601,
  IconSvgChildMdxTimeToRead = 602,
  IconSvgChildren = 603,
  IconSvgChildrenMdx = 604,
  IconSvgChildrenMdxBody = 605,
  IconSvgChildrenMdxChildren = 606,
  IconSvgChildrenMdxExcerpt = 607,
  IconSvgChildrenMdxFileAbsolutePath = 608,
  IconSvgChildrenMdxHeadings = 609,
  IconSvgChildrenMdxHtml = 610,
  IconSvgChildrenMdxId = 611,
  IconSvgChildrenMdxMdxAst = 612,
  IconSvgChildrenMdxRawBody = 613,
  IconSvgChildrenMdxSlug = 614,
  IconSvgChildrenMdxTableOfContents = 615,
  IconSvgChildrenMdxTimeToRead = 616,
  IconSvgChildrenChildren = 617,
  IconSvgChildrenId = 618,
  IconSvgId = 619,
  IconSvgInternalContent = 620,
  IconSvgInternalContentDigest = 621,
  IconSvgInternalContentFilePath = 622,
  IconSvgInternalDescription = 623,
  IconSvgInternalFieldOwners = 624,
  IconSvgInternalIgnoreType = 625,
  IconSvgInternalMediaType = 626,
  IconSvgInternalOwner = 627,
  IconSvgInternalType = 628,
  IconSvgParentChildren = 629,
  IconSvgParentId = 630,
  IconSvgSvg = 631,
  IconSvgSysType = 632,
  IconSysRevision = 633,
  IconSysType = 634,
  IconUpdatedAt = 635,
  IconWhatICanDo = 636,
  IconWhatICanDoChildren = 637,
  IconWhatICanDoChildrenChildren = 638,
  IconWhatICanDoChildrenId = 639,
  IconWhatICanDoContentfulId = 640,
  IconWhatICanDoCreatedAt = 641,
  IconWhatICanDoIconChildren = 642,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 643,
  IconWhatICanDoIconContact = 644,
  IconWhatICanDoIconContentfulId = 645,
  IconWhatICanDoIconCreatedAt = 646,
  IconWhatICanDoIconHistory = 647,
  IconWhatICanDoIconId = 648,
  IconWhatICanDoIconName = 649,
  IconWhatICanDoIconNodeLocale = 650,
  IconWhatICanDoIconOss = 651,
  IconWhatICanDoIconProject = 652,
  IconWhatICanDoIconSpaceId = 653,
  IconWhatICanDoIconUpdatedAt = 654,
  IconWhatICanDoIconWhatICanDo = 655,
  IconWhatICanDoId = 656,
  IconWhatICanDoInternalContent = 657,
  IconWhatICanDoInternalContentDigest = 658,
  IconWhatICanDoInternalContentFilePath = 659,
  IconWhatICanDoInternalDescription = 660,
  IconWhatICanDoInternalFieldOwners = 661,
  IconWhatICanDoInternalIgnoreType = 662,
  IconWhatICanDoInternalMediaType = 663,
  IconWhatICanDoInternalOwner = 664,
  IconWhatICanDoInternalType = 665,
  IconWhatICanDoName = 666,
  IconWhatICanDoNodeLocale = 667,
  IconWhatICanDoParentChildren = 668,
  IconWhatICanDoParentId = 669,
  IconWhatICanDoSortKey = 670,
  IconWhatICanDoSpaceId = 671,
  IconWhatICanDoSubName = 672,
  IconWhatICanDoSysRevision = 673,
  IconWhatICanDoSysType = 674,
  IconWhatICanDoUpdatedAt = 675,
  Id = 676,
  InternalContent = 677,
  InternalContentDigest = 678,
  InternalContentFilePath = 679,
  InternalDescription = 680,
  InternalFieldOwners = 681,
  InternalIgnoreType = 682,
  InternalMediaType = 683,
  InternalOwner = 684,
  InternalType = 685,
  Name = 686,
  NodeLocale = 687,
  ParentChildren = 688,
  ParentChildrenChildren = 689,
  ParentChildrenChildrenChildren = 690,
  ParentChildrenChildrenId = 691,
  ParentChildrenId = 692,
  ParentChildrenInternalContent = 693,
  ParentChildrenInternalContentDigest = 694,
  ParentChildrenInternalContentFilePath = 695,
  ParentChildrenInternalDescription = 696,
  ParentChildrenInternalFieldOwners = 697,
  ParentChildrenInternalIgnoreType = 698,
  ParentChildrenInternalMediaType = 699,
  ParentChildrenInternalOwner = 700,
  ParentChildrenInternalType = 701,
  ParentChildrenParentChildren = 702,
  ParentChildrenParentId = 703,
  ParentId = 704,
  ParentInternalContent = 705,
  ParentInternalContentDigest = 706,
  ParentInternalContentFilePath = 707,
  ParentInternalDescription = 708,
  ParentInternalFieldOwners = 709,
  ParentInternalIgnoreType = 710,
  ParentInternalMediaType = 711,
  ParentInternalOwner = 712,
  ParentInternalType = 713,
  ParentParentChildren = 714,
  ParentParentChildrenChildren = 715,
  ParentParentChildrenId = 716,
  ParentParentId = 717,
  ParentParentInternalContent = 718,
  ParentParentInternalContentDigest = 719,
  ParentParentInternalContentFilePath = 720,
  ParentParentInternalDescription = 721,
  ParentParentInternalFieldOwners = 722,
  ParentParentInternalIgnoreType = 723,
  ParentParentInternalMediaType = 724,
  ParentParentInternalOwner = 725,
  ParentParentInternalType = 726,
  ParentParentParentChildren = 727,
  ParentParentParentId = 728,
  SortKey = 729,
  SpaceId = 730,
  SubName = 731,
  SysContentTypeSysId = 732,
  SysContentTypeSysLinkType = 733,
  SysContentTypeSysType = 734,
  SysRevision = 735,
  SysType = 736,
  UpdatedAt = 737
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  Description = 42,
  DisplayField = 43,
  Id = 44,
  InternalContent = 45,
  InternalContentDigest = 46,
  InternalContentFilePath = 47,
  InternalDescription = 48,
  InternalFieldOwners = 49,
  InternalIgnoreType = 50,
  InternalMediaType = 51,
  InternalOwner = 52,
  InternalType = 53,
  Name = 54,
  ParentChildren = 55,
  ParentChildrenChildren = 56,
  ParentChildrenChildrenChildren = 57,
  ParentChildrenChildrenId = 58,
  ParentChildrenId = 59,
  ParentChildrenInternalContent = 60,
  ParentChildrenInternalContentDigest = 61,
  ParentChildrenInternalContentFilePath = 62,
  ParentChildrenInternalDescription = 63,
  ParentChildrenInternalFieldOwners = 64,
  ParentChildrenInternalIgnoreType = 65,
  ParentChildrenInternalMediaType = 66,
  ParentChildrenInternalOwner = 67,
  ParentChildrenInternalType = 68,
  ParentChildrenParentChildren = 69,
  ParentChildrenParentId = 70,
  ParentId = 71,
  ParentInternalContent = 72,
  ParentInternalContentDigest = 73,
  ParentInternalContentFilePath = 74,
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
  ParentParentInternalContentFilePath = 87,
  ParentParentInternalDescription = 88,
  ParentParentInternalFieldOwners = 89,
  ParentParentInternalIgnoreType = 90,
  ParentParentInternalMediaType = 91,
  ParentParentInternalOwner = 92,
  ParentParentInternalType = 93,
  ParentParentParentChildren = 94,
  ParentParentParentId = 95,
  SysType = 96
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  Id = 43,
  InternalContent = 44,
  InternalContentDigest = 45,
  InternalContentFilePath = 46,
  InternalDescription = 47,
  InternalFieldOwners = 48,
  InternalIgnoreType = 49,
  InternalMediaType = 50,
  InternalOwner = 51,
  InternalType = 52,
  NodeLocale = 53,
  ParentChildren = 54,
  ParentChildrenChildren = 55,
  ParentChildrenChildrenChildren = 56,
  ParentChildrenChildrenId = 57,
  ParentChildrenId = 58,
  ParentChildrenInternalContent = 59,
  ParentChildrenInternalContentDigest = 60,
  ParentChildrenInternalContentFilePath = 61,
  ParentChildrenInternalDescription = 62,
  ParentChildrenInternalFieldOwners = 63,
  ParentChildrenInternalIgnoreType = 64,
  ParentChildrenInternalMediaType = 65,
  ParentChildrenInternalOwner = 66,
  ParentChildrenInternalType = 67,
  ParentChildrenParentChildren = 68,
  ParentChildrenParentId = 69,
  ParentId = 70,
  ParentInternalContent = 71,
  ParentInternalContentDigest = 72,
  ParentInternalContentFilePath = 73,
  ParentInternalDescription = 74,
  ParentInternalFieldOwners = 75,
  ParentInternalIgnoreType = 76,
  ParentInternalMediaType = 77,
  ParentInternalOwner = 78,
  ParentInternalType = 79,
  ParentParentChildren = 80,
  ParentParentChildrenChildren = 81,
  ParentParentChildrenId = 82,
  ParentParentId = 83,
  ParentParentInternalContent = 84,
  ParentParentInternalContentDigest = 85,
  ParentParentInternalContentFilePath = 86,
  ParentParentInternalDescription = 87,
  ParentParentInternalFieldOwners = 88,
  ParentParentInternalIgnoreType = 89,
  ParentParentInternalMediaType = 90,
  ParentParentInternalOwner = 91,
  ParentParentInternalType = 92,
  ParentParentParentChildren = 93,
  ParentParentParentId = 94
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Href = 44,
  Id = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  Name = 55,
  NodeLocale = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  SortKey = 98,
  SpaceId = 99,
  SysContentTypeSysId = 100,
  SysContentTypeSysLinkType = 101,
  SysContentTypeSysType = 102,
  SysRevision = 103,
  SysType = 104,
  UpdatedAt = 105
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Date = 44,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 45,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 46,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 47,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 48,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 49,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 50,
  IconChildContentfulIconSvgTextNodeChildMdxId = 51,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 52,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 53,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 54,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 55,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 56,
  IconChildContentfulIconSvgTextNodeChildren = 57,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 58,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 59,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 60,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 61,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 62,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 63,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 64,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 65,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 66,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 67,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 68,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 69,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 70,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 71,
  IconChildContentfulIconSvgTextNodeChildrenId = 72,
  IconChildContentfulIconSvgTextNodeId = 73,
  IconChildContentfulIconSvgTextNodeInternalContent = 74,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 75,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 76,
  IconChildContentfulIconSvgTextNodeInternalDescription = 77,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 78,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 79,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 80,
  IconChildContentfulIconSvgTextNodeInternalOwner = 81,
  IconChildContentfulIconSvgTextNodeInternalType = 82,
  IconChildContentfulIconSvgTextNodeParentChildren = 83,
  IconChildContentfulIconSvgTextNodeParentId = 84,
  IconChildContentfulIconSvgTextNodeSvg = 85,
  IconChildContentfulIconSvgTextNodeSysType = 86,
  IconChildren = 87,
  IconChildrenContentfulIconSvgTextNode = 88,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 89,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 90,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 91,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 92,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 93,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 94,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 95,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 96,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 97,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 98,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 99,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 100,
  IconChildrenContentfulIconSvgTextNodeChildren = 101,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 102,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 103,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 104,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 105,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 106,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 107,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 108,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 109,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 110,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 111,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 112,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 113,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 114,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 115,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 116,
  IconChildrenContentfulIconSvgTextNodeId = 117,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 118,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 119,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 120,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 121,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 122,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 123,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 124,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 125,
  IconChildrenContentfulIconSvgTextNodeInternalType = 126,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 127,
  IconChildrenContentfulIconSvgTextNodeParentId = 128,
  IconChildrenContentfulIconSvgTextNodeSvg = 129,
  IconChildrenContentfulIconSvgTextNodeSysType = 130,
  IconChildrenChildren = 131,
  IconChildrenChildrenChildren = 132,
  IconChildrenChildrenId = 133,
  IconChildrenId = 134,
  IconChildrenInternalContent = 135,
  IconChildrenInternalContentDigest = 136,
  IconChildrenInternalContentFilePath = 137,
  IconChildrenInternalDescription = 138,
  IconChildrenInternalFieldOwners = 139,
  IconChildrenInternalIgnoreType = 140,
  IconChildrenInternalMediaType = 141,
  IconChildrenInternalOwner = 142,
  IconChildrenInternalType = 143,
  IconChildrenParentChildren = 144,
  IconChildrenParentId = 145,
  IconContact = 146,
  IconContactChildren = 147,
  IconContactChildrenChildren = 148,
  IconContactChildrenId = 149,
  IconContactContentfulId = 150,
  IconContactCreatedAt = 151,
  IconContactHref = 152,
  IconContactIconSvgDarkChildren = 153,
  IconContactIconSvgDarkContentfulId = 154,
  IconContactIconSvgDarkCreatedAt = 155,
  IconContactIconSvgDarkDescription = 156,
  IconContactIconSvgDarkFilename = 157,
  IconContactIconSvgDarkFilesize = 158,
  IconContactIconSvgDarkGatsbyImage = 159,
  IconContactIconSvgDarkGatsbyImageData = 160,
  IconContactIconSvgDarkHeight = 161,
  IconContactIconSvgDarkId = 162,
  IconContactIconSvgDarkMimeType = 163,
  IconContactIconSvgDarkNodeLocale = 164,
  IconContactIconSvgDarkPlaceholderUrl = 165,
  IconContactIconSvgDarkPublicUrl = 166,
  IconContactIconSvgDarkSize = 167,
  IconContactIconSvgDarkSpaceId = 168,
  IconContactIconSvgDarkTitle = 169,
  IconContactIconSvgDarkUpdatedAt = 170,
  IconContactIconSvgDarkUrl = 171,
  IconContactIconSvgDarkWidth = 172,
  IconContactIconSvgLightChildren = 173,
  IconContactIconSvgLightContentfulId = 174,
  IconContactIconSvgLightCreatedAt = 175,
  IconContactIconSvgLightDescription = 176,
  IconContactIconSvgLightFilename = 177,
  IconContactIconSvgLightFilesize = 178,
  IconContactIconSvgLightGatsbyImage = 179,
  IconContactIconSvgLightGatsbyImageData = 180,
  IconContactIconSvgLightHeight = 181,
  IconContactIconSvgLightId = 182,
  IconContactIconSvgLightMimeType = 183,
  IconContactIconSvgLightNodeLocale = 184,
  IconContactIconSvgLightPlaceholderUrl = 185,
  IconContactIconSvgLightPublicUrl = 186,
  IconContactIconSvgLightSize = 187,
  IconContactIconSvgLightSpaceId = 188,
  IconContactIconSvgLightTitle = 189,
  IconContactIconSvgLightUpdatedAt = 190,
  IconContactIconSvgLightUrl = 191,
  IconContactIconSvgLightWidth = 192,
  IconContactIconChildren = 193,
  IconContactIconChildrenContentfulIconSvgTextNode = 194,
  IconContactIconContact = 195,
  IconContactIconContentfulId = 196,
  IconContactIconCreatedAt = 197,
  IconContactIconHistory = 198,
  IconContactIconId = 199,
  IconContactIconName = 200,
  IconContactIconNodeLocale = 201,
  IconContactIconOss = 202,
  IconContactIconProject = 203,
  IconContactIconSpaceId = 204,
  IconContactIconUpdatedAt = 205,
  IconContactIconWhatICanDo = 206,
  IconContactId = 207,
  IconContactInternalContent = 208,
  IconContactInternalContentDigest = 209,
  IconContactInternalContentFilePath = 210,
  IconContactInternalDescription = 211,
  IconContactInternalFieldOwners = 212,
  IconContactInternalIgnoreType = 213,
  IconContactInternalMediaType = 214,
  IconContactInternalOwner = 215,
  IconContactInternalType = 216,
  IconContactName = 217,
  IconContactNodeLocale = 218,
  IconContactParentChildren = 219,
  IconContactParentId = 220,
  IconContactSortKey = 221,
  IconContactSpaceId = 222,
  IconContactSubName = 223,
  IconContactSysRevision = 224,
  IconContactSysType = 225,
  IconContactUpdatedAt = 226,
  IconContentfulId = 227,
  IconCreatedAt = 228,
  IconHistory = 229,
  IconHistoryChildren = 230,
  IconHistoryChildrenChildren = 231,
  IconHistoryChildrenId = 232,
  IconHistoryContentfulId = 233,
  IconHistoryCreatedAt = 234,
  IconHistoryDate = 235,
  IconHistoryIconChildren = 236,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 237,
  IconHistoryIconContact = 238,
  IconHistoryIconContentfulId = 239,
  IconHistoryIconCreatedAt = 240,
  IconHistoryIconHistory = 241,
  IconHistoryIconId = 242,
  IconHistoryIconName = 243,
  IconHistoryIconNodeLocale = 244,
  IconHistoryIconOss = 245,
  IconHistoryIconProject = 246,
  IconHistoryIconSpaceId = 247,
  IconHistoryIconUpdatedAt = 248,
  IconHistoryIconWhatICanDo = 249,
  IconHistoryId = 250,
  IconHistoryInternalContent = 251,
  IconHistoryInternalContentDigest = 252,
  IconHistoryInternalContentFilePath = 253,
  IconHistoryInternalDescription = 254,
  IconHistoryInternalFieldOwners = 255,
  IconHistoryInternalIgnoreType = 256,
  IconHistoryInternalMediaType = 257,
  IconHistoryInternalOwner = 258,
  IconHistoryInternalType = 259,
  IconHistoryName = 260,
  IconHistoryNodeLocale = 261,
  IconHistoryParentChildren = 262,
  IconHistoryParentId = 263,
  IconHistorySpaceId = 264,
  IconHistorySubName = 265,
  IconHistorySysRevision = 266,
  IconHistorySysType = 267,
  IconHistoryUpdatedAt = 268,
  IconId = 269,
  IconInternalContent = 270,
  IconInternalContentDigest = 271,
  IconInternalContentFilePath = 272,
  IconInternalDescription = 273,
  IconInternalFieldOwners = 274,
  IconInternalIgnoreType = 275,
  IconInternalMediaType = 276,
  IconInternalOwner = 277,
  IconInternalType = 278,
  IconName = 279,
  IconNodeLocale = 280,
  IconOss = 281,
  IconOssChildContentfulOssDetailTextNodeChildren = 282,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 283,
  IconOssChildContentfulOssDetailTextNodeDetail = 284,
  IconOssChildContentfulOssDetailTextNodeId = 285,
  IconOssChildren = 286,
  IconOssChildrenContentfulOssDetailTextNode = 287,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 288,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 289,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 290,
  IconOssChildrenContentfulOssDetailTextNodeId = 291,
  IconOssChildrenChildren = 292,
  IconOssChildrenId = 293,
  IconOssContentfulId = 294,
  IconOssCreatedAt = 295,
  IconOssDetailChildren = 296,
  IconOssDetailChildrenMdx = 297,
  IconOssDetailDetail = 298,
  IconOssDetailId = 299,
  IconOssHref = 300,
  IconOssIconChildren = 301,
  IconOssIconChildrenContentfulIconSvgTextNode = 302,
  IconOssIconContact = 303,
  IconOssIconContentfulId = 304,
  IconOssIconCreatedAt = 305,
  IconOssIconHistory = 306,
  IconOssIconId = 307,
  IconOssIconName = 308,
  IconOssIconNodeLocale = 309,
  IconOssIconOss = 310,
  IconOssIconProject = 311,
  IconOssIconSpaceId = 312,
  IconOssIconUpdatedAt = 313,
  IconOssIconWhatICanDo = 314,
  IconOssId = 315,
  IconOssImageChildren = 316,
  IconOssImageContentfulId = 317,
  IconOssImageCreatedAt = 318,
  IconOssImageDescription = 319,
  IconOssImageFilename = 320,
  IconOssImageFilesize = 321,
  IconOssImageGatsbyImage = 322,
  IconOssImageGatsbyImageData = 323,
  IconOssImageHeight = 324,
  IconOssImageId = 325,
  IconOssImageMimeType = 326,
  IconOssImageNodeLocale = 327,
  IconOssImagePlaceholderUrl = 328,
  IconOssImagePublicUrl = 329,
  IconOssImageSize = 330,
  IconOssImageSpaceId = 331,
  IconOssImageTitle = 332,
  IconOssImageUpdatedAt = 333,
  IconOssImageUrl = 334,
  IconOssImageWidth = 335,
  IconOssInternalContent = 336,
  IconOssInternalContentDigest = 337,
  IconOssInternalContentFilePath = 338,
  IconOssInternalDescription = 339,
  IconOssInternalFieldOwners = 340,
  IconOssInternalIgnoreType = 341,
  IconOssInternalMediaType = 342,
  IconOssInternalOwner = 343,
  IconOssInternalType = 344,
  IconOssName = 345,
  IconOssNodeLocale = 346,
  IconOssParentChildren = 347,
  IconOssParentId = 348,
  IconOssSpaceId = 349,
  IconOssStartDate = 350,
  IconOssSubName = 351,
  IconOssSysRevision = 352,
  IconOssSysType = 353,
  IconOssTags = 354,
  IconOssTagsBlogPost = 355,
  IconOssTagsChildren = 356,
  IconOssTagsContentfulId = 357,
  IconOssTagsCreatedAt = 358,
  IconOssTagsId = 359,
  IconOssTagsLevel = 360,
  IconOssTagsName = 361,
  IconOssTagsNodeLocale = 362,
  IconOssTagsOss = 363,
  IconOssTagsProject = 364,
  IconOssTagsSkillGrpup = 365,
  IconOssTagsSkillMap = 366,
  IconOssTagsSpaceId = 367,
  IconOssTagsUpdatedAt = 368,
  IconOssUpdatedAt = 369,
  IconParentChildren = 370,
  IconParentChildrenChildren = 371,
  IconParentChildrenId = 372,
  IconParentId = 373,
  IconParentInternalContent = 374,
  IconParentInternalContentDigest = 375,
  IconParentInternalContentFilePath = 376,
  IconParentInternalDescription = 377,
  IconParentInternalFieldOwners = 378,
  IconParentInternalIgnoreType = 379,
  IconParentInternalMediaType = 380,
  IconParentInternalOwner = 381,
  IconParentInternalType = 382,
  IconParentParentChildren = 383,
  IconParentParentId = 384,
  IconProject = 385,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 386,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 387,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 388,
  IconProjectChildContentfulProjectDetailTextNodeId = 389,
  IconProjectChildren = 390,
  IconProjectChildrenContentfulProjectDetailTextNode = 391,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 392,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 393,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 394,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 395,
  IconProjectChildrenChildren = 396,
  IconProjectChildrenId = 397,
  IconProjectContentfulId = 398,
  IconProjectCreatedAt = 399,
  IconProjectDetailChildren = 400,
  IconProjectDetailChildrenMdx = 401,
  IconProjectDetailDetail = 402,
  IconProjectDetailId = 403,
  IconProjectEndDate = 404,
  IconProjectIconChildren = 405,
  IconProjectIconChildrenContentfulIconSvgTextNode = 406,
  IconProjectIconContact = 407,
  IconProjectIconContentfulId = 408,
  IconProjectIconCreatedAt = 409,
  IconProjectIconHistory = 410,
  IconProjectIconId = 411,
  IconProjectIconName = 412,
  IconProjectIconNodeLocale = 413,
  IconProjectIconOss = 414,
  IconProjectIconProject = 415,
  IconProjectIconSpaceId = 416,
  IconProjectIconUpdatedAt = 417,
  IconProjectIconWhatICanDo = 418,
  IconProjectId = 419,
  IconProjectInternalContent = 420,
  IconProjectInternalContentDigest = 421,
  IconProjectInternalContentFilePath = 422,
  IconProjectInternalDescription = 423,
  IconProjectInternalFieldOwners = 424,
  IconProjectInternalIgnoreType = 425,
  IconProjectInternalMediaType = 426,
  IconProjectInternalOwner = 427,
  IconProjectInternalType = 428,
  IconProjectName = 429,
  IconProjectNodeLocale = 430,
  IconProjectParentChildren = 431,
  IconProjectParentId = 432,
  IconProjectSpaceId = 433,
  IconProjectStartDate = 434,
  IconProjectSubName = 435,
  IconProjectSysRevision = 436,
  IconProjectSysType = 437,
  IconProjectTags = 438,
  IconProjectTagsBlogPost = 439,
  IconProjectTagsChildren = 440,
  IconProjectTagsContentfulId = 441,
  IconProjectTagsCreatedAt = 442,
  IconProjectTagsId = 443,
  IconProjectTagsLevel = 444,
  IconProjectTagsName = 445,
  IconProjectTagsNodeLocale = 446,
  IconProjectTagsOss = 447,
  IconProjectTagsProject = 448,
  IconProjectTagsSkillGrpup = 449,
  IconProjectTagsSkillMap = 450,
  IconProjectTagsSpaceId = 451,
  IconProjectTagsUpdatedAt = 452,
  IconProjectUpdatedAt = 453,
  IconSpaceId = 454,
  IconSvgChildMdxBody = 455,
  IconSvgChildMdxChildren = 456,
  IconSvgChildMdxExcerpt = 457,
  IconSvgChildMdxFileAbsolutePath = 458,
  IconSvgChildMdxHeadings = 459,
  IconSvgChildMdxHtml = 460,
  IconSvgChildMdxId = 461,
  IconSvgChildMdxMdxAst = 462,
  IconSvgChildMdxRawBody = 463,
  IconSvgChildMdxSlug = 464,
  IconSvgChildMdxTableOfContents = 465,
  IconSvgChildMdxTimeToRead = 466,
  IconSvgChildren = 467,
  IconSvgChildrenMdx = 468,
  IconSvgChildrenMdxBody = 469,
  IconSvgChildrenMdxChildren = 470,
  IconSvgChildrenMdxExcerpt = 471,
  IconSvgChildrenMdxFileAbsolutePath = 472,
  IconSvgChildrenMdxHeadings = 473,
  IconSvgChildrenMdxHtml = 474,
  IconSvgChildrenMdxId = 475,
  IconSvgChildrenMdxMdxAst = 476,
  IconSvgChildrenMdxRawBody = 477,
  IconSvgChildrenMdxSlug = 478,
  IconSvgChildrenMdxTableOfContents = 479,
  IconSvgChildrenMdxTimeToRead = 480,
  IconSvgChildrenChildren = 481,
  IconSvgChildrenId = 482,
  IconSvgId = 483,
  IconSvgInternalContent = 484,
  IconSvgInternalContentDigest = 485,
  IconSvgInternalContentFilePath = 486,
  IconSvgInternalDescription = 487,
  IconSvgInternalFieldOwners = 488,
  IconSvgInternalIgnoreType = 489,
  IconSvgInternalMediaType = 490,
  IconSvgInternalOwner = 491,
  IconSvgInternalType = 492,
  IconSvgParentChildren = 493,
  IconSvgParentId = 494,
  IconSvgSvg = 495,
  IconSvgSysType = 496,
  IconSysRevision = 497,
  IconSysType = 498,
  IconUpdatedAt = 499,
  IconWhatICanDo = 500,
  IconWhatICanDoChildren = 501,
  IconWhatICanDoChildrenChildren = 502,
  IconWhatICanDoChildrenId = 503,
  IconWhatICanDoContentfulId = 504,
  IconWhatICanDoCreatedAt = 505,
  IconWhatICanDoIconChildren = 506,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 507,
  IconWhatICanDoIconContact = 508,
  IconWhatICanDoIconContentfulId = 509,
  IconWhatICanDoIconCreatedAt = 510,
  IconWhatICanDoIconHistory = 511,
  IconWhatICanDoIconId = 512,
  IconWhatICanDoIconName = 513,
  IconWhatICanDoIconNodeLocale = 514,
  IconWhatICanDoIconOss = 515,
  IconWhatICanDoIconProject = 516,
  IconWhatICanDoIconSpaceId = 517,
  IconWhatICanDoIconUpdatedAt = 518,
  IconWhatICanDoIconWhatICanDo = 519,
  IconWhatICanDoId = 520,
  IconWhatICanDoInternalContent = 521,
  IconWhatICanDoInternalContentDigest = 522,
  IconWhatICanDoInternalContentFilePath = 523,
  IconWhatICanDoInternalDescription = 524,
  IconWhatICanDoInternalFieldOwners = 525,
  IconWhatICanDoInternalIgnoreType = 526,
  IconWhatICanDoInternalMediaType = 527,
  IconWhatICanDoInternalOwner = 528,
  IconWhatICanDoInternalType = 529,
  IconWhatICanDoName = 530,
  IconWhatICanDoNodeLocale = 531,
  IconWhatICanDoParentChildren = 532,
  IconWhatICanDoParentId = 533,
  IconWhatICanDoSortKey = 534,
  IconWhatICanDoSpaceId = 535,
  IconWhatICanDoSubName = 536,
  IconWhatICanDoSysRevision = 537,
  IconWhatICanDoSysType = 538,
  IconWhatICanDoUpdatedAt = 539,
  Id = 540,
  InternalContent = 541,
  InternalContentDigest = 542,
  InternalContentFilePath = 543,
  InternalDescription = 544,
  InternalFieldOwners = 545,
  InternalIgnoreType = 546,
  InternalMediaType = 547,
  InternalOwner = 548,
  InternalType = 549,
  Name = 550,
  NodeLocale = 551,
  ParentChildren = 552,
  ParentChildrenChildren = 553,
  ParentChildrenChildrenChildren = 554,
  ParentChildrenChildrenId = 555,
  ParentChildrenId = 556,
  ParentChildrenInternalContent = 557,
  ParentChildrenInternalContentDigest = 558,
  ParentChildrenInternalContentFilePath = 559,
  ParentChildrenInternalDescription = 560,
  ParentChildrenInternalFieldOwners = 561,
  ParentChildrenInternalIgnoreType = 562,
  ParentChildrenInternalMediaType = 563,
  ParentChildrenInternalOwner = 564,
  ParentChildrenInternalType = 565,
  ParentChildrenParentChildren = 566,
  ParentChildrenParentId = 567,
  ParentId = 568,
  ParentInternalContent = 569,
  ParentInternalContentDigest = 570,
  ParentInternalContentFilePath = 571,
  ParentInternalDescription = 572,
  ParentInternalFieldOwners = 573,
  ParentInternalIgnoreType = 574,
  ParentInternalMediaType = 575,
  ParentInternalOwner = 576,
  ParentInternalType = 577,
  ParentParentChildren = 578,
  ParentParentChildrenChildren = 579,
  ParentParentChildrenId = 580,
  ParentParentId = 581,
  ParentParentInternalContent = 582,
  ParentParentInternalContentDigest = 583,
  ParentParentInternalContentFilePath = 584,
  ParentParentInternalDescription = 585,
  ParentParentInternalFieldOwners = 586,
  ParentParentInternalIgnoreType = 587,
  ParentParentInternalMediaType = 588,
  ParentParentInternalOwner = 589,
  ParentParentInternalType = 590,
  ParentParentParentChildren = 591,
  ParentParentParentId = 592,
  SpaceId = 593,
  SubName = 594,
  SysContentTypeSysId = 595,
  SysContentTypeSysLinkType = 596,
  SysContentTypeSysType = 597,
  SysRevision = 598,
  SysType = 599,
  UpdatedAt = 600
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
  ChildContentfulIconSvgTextNodeChildMdxInternalContentFilePath = 14,
  ChildContentfulIconSvgTextNodeChildMdxInternalDescription = 15,
  ChildContentfulIconSvgTextNodeChildMdxInternalFieldOwners = 16,
  ChildContentfulIconSvgTextNodeChildMdxInternalIgnoreType = 17,
  ChildContentfulIconSvgTextNodeChildMdxInternalMediaType = 18,
  ChildContentfulIconSvgTextNodeChildMdxInternalOwner = 19,
  ChildContentfulIconSvgTextNodeChildMdxInternalType = 20,
  ChildContentfulIconSvgTextNodeChildMdxMdxAst = 21,
  ChildContentfulIconSvgTextNodeChildMdxParentChildren = 22,
  ChildContentfulIconSvgTextNodeChildMdxParentId = 23,
  ChildContentfulIconSvgTextNodeChildMdxRawBody = 24,
  ChildContentfulIconSvgTextNodeChildMdxSlug = 25,
  ChildContentfulIconSvgTextNodeChildMdxTableOfContents = 26,
  ChildContentfulIconSvgTextNodeChildMdxTimeToRead = 27,
  ChildContentfulIconSvgTextNodeChildMdxWordCountParagraphs = 28,
  ChildContentfulIconSvgTextNodeChildMdxWordCountSentences = 29,
  ChildContentfulIconSvgTextNodeChildMdxWordCountWords = 30,
  ChildContentfulIconSvgTextNodeChildren = 31,
  ChildContentfulIconSvgTextNodeChildrenMdx = 32,
  ChildContentfulIconSvgTextNodeChildrenMdxBody = 33,
  ChildContentfulIconSvgTextNodeChildrenMdxChildren = 34,
  ChildContentfulIconSvgTextNodeChildrenMdxChildrenChildren = 35,
  ChildContentfulIconSvgTextNodeChildrenMdxChildrenId = 36,
  ChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 37,
  ChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 38,
  ChildContentfulIconSvgTextNodeChildrenMdxFrontmatterTitle = 39,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadings = 40,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadingsDepth = 41,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadingsValue = 42,
  ChildContentfulIconSvgTextNodeChildrenMdxHtml = 43,
  ChildContentfulIconSvgTextNodeChildrenMdxId = 44,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalContent = 45,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalContentDigest = 46,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalContentFilePath = 47,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalDescription = 48,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalFieldOwners = 49,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalIgnoreType = 50,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalMediaType = 51,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalOwner = 52,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalType = 53,
  ChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 54,
  ChildContentfulIconSvgTextNodeChildrenMdxParentChildren = 55,
  ChildContentfulIconSvgTextNodeChildrenMdxParentId = 56,
  ChildContentfulIconSvgTextNodeChildrenMdxRawBody = 57,
  ChildContentfulIconSvgTextNodeChildrenMdxSlug = 58,
  ChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 59,
  ChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 60,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountParagraphs = 61,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountSentences = 62,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountWords = 63,
  ChildContentfulIconSvgTextNodeChildrenChildren = 64,
  ChildContentfulIconSvgTextNodeChildrenChildrenChildren = 65,
  ChildContentfulIconSvgTextNodeChildrenChildrenId = 66,
  ChildContentfulIconSvgTextNodeChildrenId = 67,
  ChildContentfulIconSvgTextNodeChildrenInternalContent = 68,
  ChildContentfulIconSvgTextNodeChildrenInternalContentDigest = 69,
  ChildContentfulIconSvgTextNodeChildrenInternalContentFilePath = 70,
  ChildContentfulIconSvgTextNodeChildrenInternalDescription = 71,
  ChildContentfulIconSvgTextNodeChildrenInternalFieldOwners = 72,
  ChildContentfulIconSvgTextNodeChildrenInternalIgnoreType = 73,
  ChildContentfulIconSvgTextNodeChildrenInternalMediaType = 74,
  ChildContentfulIconSvgTextNodeChildrenInternalOwner = 75,
  ChildContentfulIconSvgTextNodeChildrenInternalType = 76,
  ChildContentfulIconSvgTextNodeChildrenParentChildren = 77,
  ChildContentfulIconSvgTextNodeChildrenParentId = 78,
  ChildContentfulIconSvgTextNodeId = 79,
  ChildContentfulIconSvgTextNodeInternalContent = 80,
  ChildContentfulIconSvgTextNodeInternalContentDigest = 81,
  ChildContentfulIconSvgTextNodeInternalContentFilePath = 82,
  ChildContentfulIconSvgTextNodeInternalDescription = 83,
  ChildContentfulIconSvgTextNodeInternalFieldOwners = 84,
  ChildContentfulIconSvgTextNodeInternalIgnoreType = 85,
  ChildContentfulIconSvgTextNodeInternalMediaType = 86,
  ChildContentfulIconSvgTextNodeInternalOwner = 87,
  ChildContentfulIconSvgTextNodeInternalType = 88,
  ChildContentfulIconSvgTextNodeParentChildren = 89,
  ChildContentfulIconSvgTextNodeParentChildrenChildren = 90,
  ChildContentfulIconSvgTextNodeParentChildrenId = 91,
  ChildContentfulIconSvgTextNodeParentId = 92,
  ChildContentfulIconSvgTextNodeParentInternalContent = 93,
  ChildContentfulIconSvgTextNodeParentInternalContentDigest = 94,
  ChildContentfulIconSvgTextNodeParentInternalContentFilePath = 95,
  ChildContentfulIconSvgTextNodeParentInternalDescription = 96,
  ChildContentfulIconSvgTextNodeParentInternalFieldOwners = 97,
  ChildContentfulIconSvgTextNodeParentInternalIgnoreType = 98,
  ChildContentfulIconSvgTextNodeParentInternalMediaType = 99,
  ChildContentfulIconSvgTextNodeParentInternalOwner = 100,
  ChildContentfulIconSvgTextNodeParentInternalType = 101,
  ChildContentfulIconSvgTextNodeParentParentChildren = 102,
  ChildContentfulIconSvgTextNodeParentParentId = 103,
  ChildContentfulIconSvgTextNodeSvg = 104,
  ChildContentfulIconSvgTextNodeSysType = 105,
  Children = 106,
  ChildrenContentfulIconSvgTextNode = 107,
  ChildrenContentfulIconSvgTextNodeChildMdxBody = 108,
  ChildrenContentfulIconSvgTextNodeChildMdxChildren = 109,
  ChildrenContentfulIconSvgTextNodeChildMdxChildrenChildren = 110,
  ChildrenContentfulIconSvgTextNodeChildMdxChildrenId = 111,
  ChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 112,
  ChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 113,
  ChildrenContentfulIconSvgTextNodeChildMdxFrontmatterTitle = 114,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadings = 115,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadingsDepth = 116,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadingsValue = 117,
  ChildrenContentfulIconSvgTextNodeChildMdxHtml = 118,
  ChildrenContentfulIconSvgTextNodeChildMdxId = 119,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalContent = 120,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalContentDigest = 121,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalContentFilePath = 122,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalDescription = 123,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalFieldOwners = 124,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalIgnoreType = 125,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalMediaType = 126,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalOwner = 127,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalType = 128,
  ChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 129,
  ChildrenContentfulIconSvgTextNodeChildMdxParentChildren = 130,
  ChildrenContentfulIconSvgTextNodeChildMdxParentId = 131,
  ChildrenContentfulIconSvgTextNodeChildMdxRawBody = 132,
  ChildrenContentfulIconSvgTextNodeChildMdxSlug = 133,
  ChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 134,
  ChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 135,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountParagraphs = 136,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountSentences = 137,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountWords = 138,
  ChildrenContentfulIconSvgTextNodeChildren = 139,
  ChildrenContentfulIconSvgTextNodeChildrenMdx = 140,
  ChildrenContentfulIconSvgTextNodeChildrenMdxBody = 141,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 142,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildrenChildren = 143,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildrenId = 144,
  ChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 145,
  ChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 146,
  ChildrenContentfulIconSvgTextNodeChildrenMdxFrontmatterTitle = 147,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 148,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadingsDepth = 149,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadingsValue = 150,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 151,
  ChildrenContentfulIconSvgTextNodeChildrenMdxId = 152,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalContent = 153,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalContentDigest = 154,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalContentFilePath = 155,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalDescription = 156,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalFieldOwners = 157,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalIgnoreType = 158,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalMediaType = 159,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalOwner = 160,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalType = 161,
  ChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 162,
  ChildrenContentfulIconSvgTextNodeChildrenMdxParentChildren = 163,
  ChildrenContentfulIconSvgTextNodeChildrenMdxParentId = 164,
  ChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 165,
  ChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 166,
  ChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 167,
  ChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 168,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountParagraphs = 169,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountSentences = 170,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountWords = 171,
  ChildrenContentfulIconSvgTextNodeChildrenChildren = 172,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenChildren = 173,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenId = 174,
  ChildrenContentfulIconSvgTextNodeChildrenId = 175,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContent = 176,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContentDigest = 177,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContentFilePath = 178,
  ChildrenContentfulIconSvgTextNodeChildrenInternalDescription = 179,
  ChildrenContentfulIconSvgTextNodeChildrenInternalFieldOwners = 180,
  ChildrenContentfulIconSvgTextNodeChildrenInternalIgnoreType = 181,
  ChildrenContentfulIconSvgTextNodeChildrenInternalMediaType = 182,
  ChildrenContentfulIconSvgTextNodeChildrenInternalOwner = 183,
  ChildrenContentfulIconSvgTextNodeChildrenInternalType = 184,
  ChildrenContentfulIconSvgTextNodeChildrenParentChildren = 185,
  ChildrenContentfulIconSvgTextNodeChildrenParentId = 186,
  ChildrenContentfulIconSvgTextNodeId = 187,
  ChildrenContentfulIconSvgTextNodeInternalContent = 188,
  ChildrenContentfulIconSvgTextNodeInternalContentDigest = 189,
  ChildrenContentfulIconSvgTextNodeInternalContentFilePath = 190,
  ChildrenContentfulIconSvgTextNodeInternalDescription = 191,
  ChildrenContentfulIconSvgTextNodeInternalFieldOwners = 192,
  ChildrenContentfulIconSvgTextNodeInternalIgnoreType = 193,
  ChildrenContentfulIconSvgTextNodeInternalMediaType = 194,
  ChildrenContentfulIconSvgTextNodeInternalOwner = 195,
  ChildrenContentfulIconSvgTextNodeInternalType = 196,
  ChildrenContentfulIconSvgTextNodeParentChildren = 197,
  ChildrenContentfulIconSvgTextNodeParentChildrenChildren = 198,
  ChildrenContentfulIconSvgTextNodeParentChildrenId = 199,
  ChildrenContentfulIconSvgTextNodeParentId = 200,
  ChildrenContentfulIconSvgTextNodeParentInternalContent = 201,
  ChildrenContentfulIconSvgTextNodeParentInternalContentDigest = 202,
  ChildrenContentfulIconSvgTextNodeParentInternalContentFilePath = 203,
  ChildrenContentfulIconSvgTextNodeParentInternalDescription = 204,
  ChildrenContentfulIconSvgTextNodeParentInternalFieldOwners = 205,
  ChildrenContentfulIconSvgTextNodeParentInternalIgnoreType = 206,
  ChildrenContentfulIconSvgTextNodeParentInternalMediaType = 207,
  ChildrenContentfulIconSvgTextNodeParentInternalOwner = 208,
  ChildrenContentfulIconSvgTextNodeParentInternalType = 209,
  ChildrenContentfulIconSvgTextNodeParentParentChildren = 210,
  ChildrenContentfulIconSvgTextNodeParentParentId = 211,
  ChildrenContentfulIconSvgTextNodeSvg = 212,
  ChildrenContentfulIconSvgTextNodeSysType = 213,
  ChildrenChildren = 214,
  ChildrenChildrenChildren = 215,
  ChildrenChildrenChildrenChildren = 216,
  ChildrenChildrenChildrenId = 217,
  ChildrenChildrenId = 218,
  ChildrenChildrenInternalContent = 219,
  ChildrenChildrenInternalContentDigest = 220,
  ChildrenChildrenInternalContentFilePath = 221,
  ChildrenChildrenInternalDescription = 222,
  ChildrenChildrenInternalFieldOwners = 223,
  ChildrenChildrenInternalIgnoreType = 224,
  ChildrenChildrenInternalMediaType = 225,
  ChildrenChildrenInternalOwner = 226,
  ChildrenChildrenInternalType = 227,
  ChildrenChildrenParentChildren = 228,
  ChildrenChildrenParentId = 229,
  ChildrenId = 230,
  ChildrenInternalContent = 231,
  ChildrenInternalContentDigest = 232,
  ChildrenInternalContentFilePath = 233,
  ChildrenInternalDescription = 234,
  ChildrenInternalFieldOwners = 235,
  ChildrenInternalIgnoreType = 236,
  ChildrenInternalMediaType = 237,
  ChildrenInternalOwner = 238,
  ChildrenInternalType = 239,
  ChildrenParentChildren = 240,
  ChildrenParentChildrenChildren = 241,
  ChildrenParentChildrenId = 242,
  ChildrenParentId = 243,
  ChildrenParentInternalContent = 244,
  ChildrenParentInternalContentDigest = 245,
  ChildrenParentInternalContentFilePath = 246,
  ChildrenParentInternalDescription = 247,
  ChildrenParentInternalFieldOwners = 248,
  ChildrenParentInternalIgnoreType = 249,
  ChildrenParentInternalMediaType = 250,
  ChildrenParentInternalOwner = 251,
  ChildrenParentInternalType = 252,
  ChildrenParentParentChildren = 253,
  ChildrenParentParentId = 254,
  Contact = 255,
  ContactChildren = 256,
  ContactChildrenChildren = 257,
  ContactChildrenChildrenChildren = 258,
  ContactChildrenChildrenId = 259,
  ContactChildrenId = 260,
  ContactChildrenInternalContent = 261,
  ContactChildrenInternalContentDigest = 262,
  ContactChildrenInternalContentFilePath = 263,
  ContactChildrenInternalDescription = 264,
  ContactChildrenInternalFieldOwners = 265,
  ContactChildrenInternalIgnoreType = 266,
  ContactChildrenInternalMediaType = 267,
  ContactChildrenInternalOwner = 268,
  ContactChildrenInternalType = 269,
  ContactChildrenParentChildren = 270,
  ContactChildrenParentId = 271,
  ContactContentfulId = 272,
  ContactCreatedAt = 273,
  ContactHref = 274,
  ContactIconSvgDarkChildren = 275,
  ContactIconSvgDarkChildrenChildren = 276,
  ContactIconSvgDarkChildrenId = 277,
  ContactIconSvgDarkContentfulId = 278,
  ContactIconSvgDarkCreatedAt = 279,
  ContactIconSvgDarkDescription = 280,
  ContactIconSvgDarkFileContentType = 281,
  ContactIconSvgDarkFileFileName = 282,
  ContactIconSvgDarkFileUrl = 283,
  ContactIconSvgDarkFilename = 284,
  ContactIconSvgDarkFilesize = 285,
  ContactIconSvgDarkGatsbyImage = 286,
  ContactIconSvgDarkGatsbyImageData = 287,
  ContactIconSvgDarkHeight = 288,
  ContactIconSvgDarkId = 289,
  ContactIconSvgDarkInternalContent = 290,
  ContactIconSvgDarkInternalContentDigest = 291,
  ContactIconSvgDarkInternalContentFilePath = 292,
  ContactIconSvgDarkInternalDescription = 293,
  ContactIconSvgDarkInternalFieldOwners = 294,
  ContactIconSvgDarkInternalIgnoreType = 295,
  ContactIconSvgDarkInternalMediaType = 296,
  ContactIconSvgDarkInternalOwner = 297,
  ContactIconSvgDarkInternalType = 298,
  ContactIconSvgDarkMimeType = 299,
  ContactIconSvgDarkNodeLocale = 300,
  ContactIconSvgDarkParentChildren = 301,
  ContactIconSvgDarkParentId = 302,
  ContactIconSvgDarkPlaceholderUrl = 303,
  ContactIconSvgDarkPublicUrl = 304,
  ContactIconSvgDarkResizeHeight = 305,
  ContactIconSvgDarkResizeSrc = 306,
  ContactIconSvgDarkResizeWidth = 307,
  ContactIconSvgDarkSize = 308,
  ContactIconSvgDarkSpaceId = 309,
  ContactIconSvgDarkSysRevision = 310,
  ContactIconSvgDarkSysType = 311,
  ContactIconSvgDarkTitle = 312,
  ContactIconSvgDarkUpdatedAt = 313,
  ContactIconSvgDarkUrl = 314,
  ContactIconSvgDarkWidth = 315,
  ContactIconSvgLightChildren = 316,
  ContactIconSvgLightChildrenChildren = 317,
  ContactIconSvgLightChildrenId = 318,
  ContactIconSvgLightContentfulId = 319,
  ContactIconSvgLightCreatedAt = 320,
  ContactIconSvgLightDescription = 321,
  ContactIconSvgLightFileContentType = 322,
  ContactIconSvgLightFileFileName = 323,
  ContactIconSvgLightFileUrl = 324,
  ContactIconSvgLightFilename = 325,
  ContactIconSvgLightFilesize = 326,
  ContactIconSvgLightGatsbyImage = 327,
  ContactIconSvgLightGatsbyImageData = 328,
  ContactIconSvgLightHeight = 329,
  ContactIconSvgLightId = 330,
  ContactIconSvgLightInternalContent = 331,
  ContactIconSvgLightInternalContentDigest = 332,
  ContactIconSvgLightInternalContentFilePath = 333,
  ContactIconSvgLightInternalDescription = 334,
  ContactIconSvgLightInternalFieldOwners = 335,
  ContactIconSvgLightInternalIgnoreType = 336,
  ContactIconSvgLightInternalMediaType = 337,
  ContactIconSvgLightInternalOwner = 338,
  ContactIconSvgLightInternalType = 339,
  ContactIconSvgLightMimeType = 340,
  ContactIconSvgLightNodeLocale = 341,
  ContactIconSvgLightParentChildren = 342,
  ContactIconSvgLightParentId = 343,
  ContactIconSvgLightPlaceholderUrl = 344,
  ContactIconSvgLightPublicUrl = 345,
  ContactIconSvgLightResizeHeight = 346,
  ContactIconSvgLightResizeSrc = 347,
  ContactIconSvgLightResizeWidth = 348,
  ContactIconSvgLightSize = 349,
  ContactIconSvgLightSpaceId = 350,
  ContactIconSvgLightSysRevision = 351,
  ContactIconSvgLightSysType = 352,
  ContactIconSvgLightTitle = 353,
  ContactIconSvgLightUpdatedAt = 354,
  ContactIconSvgLightUrl = 355,
  ContactIconSvgLightWidth = 356,
  ContactIconChildContentfulIconSvgTextNodeChildren = 357,
  ContactIconChildContentfulIconSvgTextNodeChildrenMdx = 358,
  ContactIconChildContentfulIconSvgTextNodeId = 359,
  ContactIconChildContentfulIconSvgTextNodeSvg = 360,
  ContactIconChildren = 361,
  ContactIconChildrenContentfulIconSvgTextNode = 362,
  ContactIconChildrenContentfulIconSvgTextNodeChildren = 363,
  ContactIconChildrenContentfulIconSvgTextNodeChildrenMdx = 364,
  ContactIconChildrenContentfulIconSvgTextNodeId = 365,
  ContactIconChildrenContentfulIconSvgTextNodeSvg = 366,
  ContactIconChildrenChildren = 367,
  ContactIconChildrenId = 368,
  ContactIconContact = 369,
  ContactIconContactChildren = 370,
  ContactIconContactContentfulId = 371,
  ContactIconContactCreatedAt = 372,
  ContactIconContactHref = 373,
  ContactIconContactId = 374,
  ContactIconContactName = 375,
  ContactIconContactNodeLocale = 376,
  ContactIconContactSortKey = 377,
  ContactIconContactSpaceId = 378,
  ContactIconContactSubName = 379,
  ContactIconContactUpdatedAt = 380,
  ContactIconContentfulId = 381,
  ContactIconCreatedAt = 382,
  ContactIconHistory = 383,
  ContactIconHistoryChildren = 384,
  ContactIconHistoryContentfulId = 385,
  ContactIconHistoryCreatedAt = 386,
  ContactIconHistoryDate = 387,
  ContactIconHistoryId = 388,
  ContactIconHistoryName = 389,
  ContactIconHistoryNodeLocale = 390,
  ContactIconHistorySpaceId = 391,
  ContactIconHistorySubName = 392,
  ContactIconHistoryUpdatedAt = 393,
  ContactIconId = 394,
  ContactIconInternalContent = 395,
  ContactIconInternalContentDigest = 396,
  ContactIconInternalContentFilePath = 397,
  ContactIconInternalDescription = 398,
  ContactIconInternalFieldOwners = 399,
  ContactIconInternalIgnoreType = 400,
  ContactIconInternalMediaType = 401,
  ContactIconInternalOwner = 402,
  ContactIconInternalType = 403,
  ContactIconName = 404,
  ContactIconNodeLocale = 405,
  ContactIconOss = 406,
  ContactIconOssChildren = 407,
  ContactIconOssChildrenContentfulOssDetailTextNode = 408,
  ContactIconOssContentfulId = 409,
  ContactIconOssCreatedAt = 410,
  ContactIconOssHref = 411,
  ContactIconOssId = 412,
  ContactIconOssName = 413,
  ContactIconOssNodeLocale = 414,
  ContactIconOssSpaceId = 415,
  ContactIconOssStartDate = 416,
  ContactIconOssSubName = 417,
  ContactIconOssTags = 418,
  ContactIconOssUpdatedAt = 419,
  ContactIconParentChildren = 420,
  ContactIconParentId = 421,
  ContactIconProject = 422,
  ContactIconProjectChildren = 423,
  ContactIconProjectChildrenContentfulProjectDetailTextNode = 424,
  ContactIconProjectContentfulId = 425,
  ContactIconProjectCreatedAt = 426,
  ContactIconProjectEndDate = 427,
  ContactIconProjectId = 428,
  ContactIconProjectName = 429,
  ContactIconProjectNodeLocale = 430,
  ContactIconProjectSpaceId = 431,
  ContactIconProjectStartDate = 432,
  ContactIconProjectSubName = 433,
  ContactIconProjectTags = 434,
  ContactIconProjectUpdatedAt = 435,
  ContactIconSpaceId = 436,
  ContactIconSvgChildren = 437,
  ContactIconSvgChildrenMdx = 438,
  ContactIconSvgId = 439,
  ContactIconSvgSvg = 440,
  ContactIconSysRevision = 441,
  ContactIconSysType = 442,
  ContactIconUpdatedAt = 443,
  ContactIconWhatICanDo = 444,
  ContactIconWhatICanDoChildren = 445,
  ContactIconWhatICanDoContentfulId = 446,
  ContactIconWhatICanDoCreatedAt = 447,
  ContactIconWhatICanDoId = 448,
  ContactIconWhatICanDoName = 449,
  ContactIconWhatICanDoNodeLocale = 450,
  ContactIconWhatICanDoSortKey = 451,
  ContactIconWhatICanDoSpaceId = 452,
  ContactIconWhatICanDoSubName = 453,
  ContactIconWhatICanDoUpdatedAt = 454,
  ContactId = 455,
  ContactInternalContent = 456,
  ContactInternalContentDigest = 457,
  ContactInternalContentFilePath = 458,
  ContactInternalDescription = 459,
  ContactInternalFieldOwners = 460,
  ContactInternalIgnoreType = 461,
  ContactInternalMediaType = 462,
  ContactInternalOwner = 463,
  ContactInternalType = 464,
  ContactName = 465,
  ContactNodeLocale = 466,
  ContactParentChildren = 467,
  ContactParentChildrenChildren = 468,
  ContactParentChildrenId = 469,
  ContactParentId = 470,
  ContactParentInternalContent = 471,
  ContactParentInternalContentDigest = 472,
  ContactParentInternalContentFilePath = 473,
  ContactParentInternalDescription = 474,
  ContactParentInternalFieldOwners = 475,
  ContactParentInternalIgnoreType = 476,
  ContactParentInternalMediaType = 477,
  ContactParentInternalOwner = 478,
  ContactParentInternalType = 479,
  ContactParentParentChildren = 480,
  ContactParentParentId = 481,
  ContactSortKey = 482,
  ContactSpaceId = 483,
  ContactSubName = 484,
  ContactSysRevision = 485,
  ContactSysType = 486,
  ContactUpdatedAt = 487,
  ContentfulId = 488,
  CreatedAt = 489,
  History = 490,
  HistoryChildren = 491,
  HistoryChildrenChildren = 492,
  HistoryChildrenChildrenChildren = 493,
  HistoryChildrenChildrenId = 494,
  HistoryChildrenId = 495,
  HistoryChildrenInternalContent = 496,
  HistoryChildrenInternalContentDigest = 497,
  HistoryChildrenInternalContentFilePath = 498,
  HistoryChildrenInternalDescription = 499,
  HistoryChildrenInternalFieldOwners = 500,
  HistoryChildrenInternalIgnoreType = 501,
  HistoryChildrenInternalMediaType = 502,
  HistoryChildrenInternalOwner = 503,
  HistoryChildrenInternalType = 504,
  HistoryChildrenParentChildren = 505,
  HistoryChildrenParentId = 506,
  HistoryContentfulId = 507,
  HistoryCreatedAt = 508,
  HistoryDate = 509,
  HistoryIconChildContentfulIconSvgTextNodeChildren = 510,
  HistoryIconChildContentfulIconSvgTextNodeChildrenMdx = 511,
  HistoryIconChildContentfulIconSvgTextNodeId = 512,
  HistoryIconChildContentfulIconSvgTextNodeSvg = 513,
  HistoryIconChildren = 514,
  HistoryIconChildrenContentfulIconSvgTextNode = 515,
  HistoryIconChildrenContentfulIconSvgTextNodeChildren = 516,
  HistoryIconChildrenContentfulIconSvgTextNodeChildrenMdx = 517,
  HistoryIconChildrenContentfulIconSvgTextNodeId = 518,
  HistoryIconChildrenContentfulIconSvgTextNodeSvg = 519,
  HistoryIconChildrenChildren = 520,
  HistoryIconChildrenId = 521,
  HistoryIconContact = 522,
  HistoryIconContactChildren = 523,
  HistoryIconContactContentfulId = 524,
  HistoryIconContactCreatedAt = 525,
  HistoryIconContactHref = 526,
  HistoryIconContactId = 527,
  HistoryIconContactName = 528,
  HistoryIconContactNodeLocale = 529,
  HistoryIconContactSortKey = 530,
  HistoryIconContactSpaceId = 531,
  HistoryIconContactSubName = 532,
  HistoryIconContactUpdatedAt = 533,
  HistoryIconContentfulId = 534,
  HistoryIconCreatedAt = 535,
  HistoryIconHistory = 536,
  HistoryIconHistoryChildren = 537,
  HistoryIconHistoryContentfulId = 538,
  HistoryIconHistoryCreatedAt = 539,
  HistoryIconHistoryDate = 540,
  HistoryIconHistoryId = 541,
  HistoryIconHistoryName = 542,
  HistoryIconHistoryNodeLocale = 543,
  HistoryIconHistorySpaceId = 544,
  HistoryIconHistorySubName = 545,
  HistoryIconHistoryUpdatedAt = 546,
  HistoryIconId = 547,
  HistoryIconInternalContent = 548,
  HistoryIconInternalContentDigest = 549,
  HistoryIconInternalContentFilePath = 550,
  HistoryIconInternalDescription = 551,
  HistoryIconInternalFieldOwners = 552,
  HistoryIconInternalIgnoreType = 553,
  HistoryIconInternalMediaType = 554,
  HistoryIconInternalOwner = 555,
  HistoryIconInternalType = 556,
  HistoryIconName = 557,
  HistoryIconNodeLocale = 558,
  HistoryIconOss = 559,
  HistoryIconOssChildren = 560,
  HistoryIconOssChildrenContentfulOssDetailTextNode = 561,
  HistoryIconOssContentfulId = 562,
  HistoryIconOssCreatedAt = 563,
  HistoryIconOssHref = 564,
  HistoryIconOssId = 565,
  HistoryIconOssName = 566,
  HistoryIconOssNodeLocale = 567,
  HistoryIconOssSpaceId = 568,
  HistoryIconOssStartDate = 569,
  HistoryIconOssSubName = 570,
  HistoryIconOssTags = 571,
  HistoryIconOssUpdatedAt = 572,
  HistoryIconParentChildren = 573,
  HistoryIconParentId = 574,
  HistoryIconProject = 575,
  HistoryIconProjectChildren = 576,
  HistoryIconProjectChildrenContentfulProjectDetailTextNode = 577,
  HistoryIconProjectContentfulId = 578,
  HistoryIconProjectCreatedAt = 579,
  HistoryIconProjectEndDate = 580,
  HistoryIconProjectId = 581,
  HistoryIconProjectName = 582,
  HistoryIconProjectNodeLocale = 583,
  HistoryIconProjectSpaceId = 584,
  HistoryIconProjectStartDate = 585,
  HistoryIconProjectSubName = 586,
  HistoryIconProjectTags = 587,
  HistoryIconProjectUpdatedAt = 588,
  HistoryIconSpaceId = 589,
  HistoryIconSvgChildren = 590,
  HistoryIconSvgChildrenMdx = 591,
  HistoryIconSvgId = 592,
  HistoryIconSvgSvg = 593,
  HistoryIconSysRevision = 594,
  HistoryIconSysType = 595,
  HistoryIconUpdatedAt = 596,
  HistoryIconWhatICanDo = 597,
  HistoryIconWhatICanDoChildren = 598,
  HistoryIconWhatICanDoContentfulId = 599,
  HistoryIconWhatICanDoCreatedAt = 600,
  HistoryIconWhatICanDoId = 601,
  HistoryIconWhatICanDoName = 602,
  HistoryIconWhatICanDoNodeLocale = 603,
  HistoryIconWhatICanDoSortKey = 604,
  HistoryIconWhatICanDoSpaceId = 605,
  HistoryIconWhatICanDoSubName = 606,
  HistoryIconWhatICanDoUpdatedAt = 607,
  HistoryId = 608,
  HistoryInternalContent = 609,
  HistoryInternalContentDigest = 610,
  HistoryInternalContentFilePath = 611,
  HistoryInternalDescription = 612,
  HistoryInternalFieldOwners = 613,
  HistoryInternalIgnoreType = 614,
  HistoryInternalMediaType = 615,
  HistoryInternalOwner = 616,
  HistoryInternalType = 617,
  HistoryName = 618,
  HistoryNodeLocale = 619,
  HistoryParentChildren = 620,
  HistoryParentChildrenChildren = 621,
  HistoryParentChildrenId = 622,
  HistoryParentId = 623,
  HistoryParentInternalContent = 624,
  HistoryParentInternalContentDigest = 625,
  HistoryParentInternalContentFilePath = 626,
  HistoryParentInternalDescription = 627,
  HistoryParentInternalFieldOwners = 628,
  HistoryParentInternalIgnoreType = 629,
  HistoryParentInternalMediaType = 630,
  HistoryParentInternalOwner = 631,
  HistoryParentInternalType = 632,
  HistoryParentParentChildren = 633,
  HistoryParentParentId = 634,
  HistorySpaceId = 635,
  HistorySubName = 636,
  HistorySysRevision = 637,
  HistorySysType = 638,
  HistoryUpdatedAt = 639,
  Id = 640,
  InternalContent = 641,
  InternalContentDigest = 642,
  InternalContentFilePath = 643,
  InternalDescription = 644,
  InternalFieldOwners = 645,
  InternalIgnoreType = 646,
  InternalMediaType = 647,
  InternalOwner = 648,
  InternalType = 649,
  Name = 650,
  NodeLocale = 651,
  Oss = 652,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 653,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 654,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 655,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 656,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 657,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 658,
  OssChildContentfulOssDetailTextNodeChildMdxId = 659,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 660,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 661,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 662,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 663,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 664,
  OssChildContentfulOssDetailTextNodeChildren = 665,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 666,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 667,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 668,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 669,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 670,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 671,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 672,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 673,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 674,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 675,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 676,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 677,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 678,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 679,
  OssChildContentfulOssDetailTextNodeChildrenId = 680,
  OssChildContentfulOssDetailTextNodeDetail = 681,
  OssChildContentfulOssDetailTextNodeId = 682,
  OssChildContentfulOssDetailTextNodeInternalContent = 683,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 684,
  OssChildContentfulOssDetailTextNodeInternalContentFilePath = 685,
  OssChildContentfulOssDetailTextNodeInternalDescription = 686,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 687,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 688,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 689,
  OssChildContentfulOssDetailTextNodeInternalOwner = 690,
  OssChildContentfulOssDetailTextNodeInternalType = 691,
  OssChildContentfulOssDetailTextNodeParentChildren = 692,
  OssChildContentfulOssDetailTextNodeParentId = 693,
  OssChildContentfulOssDetailTextNodeSysType = 694,
  OssChildren = 695,
  OssChildrenContentfulOssDetailTextNode = 696,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 697,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 698,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 699,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 700,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 701,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 702,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 703,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 704,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 705,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 706,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 707,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 708,
  OssChildrenContentfulOssDetailTextNodeChildren = 709,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 710,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 711,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 712,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 713,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 714,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 715,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 716,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 717,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 718,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 719,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 720,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 721,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 722,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 723,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 724,
  OssChildrenContentfulOssDetailTextNodeDetail = 725,
  OssChildrenContentfulOssDetailTextNodeId = 726,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 727,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 728,
  OssChildrenContentfulOssDetailTextNodeInternalContentFilePath = 729,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 730,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 731,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 732,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 733,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 734,
  OssChildrenContentfulOssDetailTextNodeInternalType = 735,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 736,
  OssChildrenContentfulOssDetailTextNodeParentId = 737,
  OssChildrenContentfulOssDetailTextNodeSysType = 738,
  OssChildrenChildren = 739,
  OssChildrenChildrenChildren = 740,
  OssChildrenChildrenId = 741,
  OssChildrenId = 742,
  OssChildrenInternalContent = 743,
  OssChildrenInternalContentDigest = 744,
  OssChildrenInternalContentFilePath = 745,
  OssChildrenInternalDescription = 746,
  OssChildrenInternalFieldOwners = 747,
  OssChildrenInternalIgnoreType = 748,
  OssChildrenInternalMediaType = 749,
  OssChildrenInternalOwner = 750,
  OssChildrenInternalType = 751,
  OssChildrenParentChildren = 752,
  OssChildrenParentId = 753,
  OssContentfulId = 754,
  OssCreatedAt = 755,
  OssDetailChildMdxBody = 756,
  OssDetailChildMdxChildren = 757,
  OssDetailChildMdxExcerpt = 758,
  OssDetailChildMdxFileAbsolutePath = 759,
  OssDetailChildMdxHeadings = 760,
  OssDetailChildMdxHtml = 761,
  OssDetailChildMdxId = 762,
  OssDetailChildMdxMdxAst = 763,
  OssDetailChildMdxRawBody = 764,
  OssDetailChildMdxSlug = 765,
  OssDetailChildMdxTableOfContents = 766,
  OssDetailChildMdxTimeToRead = 767,
  OssDetailChildren = 768,
  OssDetailChildrenMdx = 769,
  OssDetailChildrenMdxBody = 770,
  OssDetailChildrenMdxChildren = 771,
  OssDetailChildrenMdxExcerpt = 772,
  OssDetailChildrenMdxFileAbsolutePath = 773,
  OssDetailChildrenMdxHeadings = 774,
  OssDetailChildrenMdxHtml = 775,
  OssDetailChildrenMdxId = 776,
  OssDetailChildrenMdxMdxAst = 777,
  OssDetailChildrenMdxRawBody = 778,
  OssDetailChildrenMdxSlug = 779,
  OssDetailChildrenMdxTableOfContents = 780,
  OssDetailChildrenMdxTimeToRead = 781,
  OssDetailChildrenChildren = 782,
  OssDetailChildrenId = 783,
  OssDetailDetail = 784,
  OssDetailId = 785,
  OssDetailInternalContent = 786,
  OssDetailInternalContentDigest = 787,
  OssDetailInternalContentFilePath = 788,
  OssDetailInternalDescription = 789,
  OssDetailInternalFieldOwners = 790,
  OssDetailInternalIgnoreType = 791,
  OssDetailInternalMediaType = 792,
  OssDetailInternalOwner = 793,
  OssDetailInternalType = 794,
  OssDetailParentChildren = 795,
  OssDetailParentId = 796,
  OssDetailSysType = 797,
  OssHref = 798,
  OssIconChildContentfulIconSvgTextNodeChildren = 799,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 800,
  OssIconChildContentfulIconSvgTextNodeId = 801,
  OssIconChildContentfulIconSvgTextNodeSvg = 802,
  OssIconChildren = 803,
  OssIconChildrenContentfulIconSvgTextNode = 804,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 805,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 806,
  OssIconChildrenContentfulIconSvgTextNodeId = 807,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 808,
  OssIconChildrenChildren = 809,
  OssIconChildrenId = 810,
  OssIconContact = 811,
  OssIconContactChildren = 812,
  OssIconContactContentfulId = 813,
  OssIconContactCreatedAt = 814,
  OssIconContactHref = 815,
  OssIconContactId = 816,
  OssIconContactName = 817,
  OssIconContactNodeLocale = 818,
  OssIconContactSortKey = 819,
  OssIconContactSpaceId = 820,
  OssIconContactSubName = 821,
  OssIconContactUpdatedAt = 822,
  OssIconContentfulId = 823,
  OssIconCreatedAt = 824,
  OssIconHistory = 825,
  OssIconHistoryChildren = 826,
  OssIconHistoryContentfulId = 827,
  OssIconHistoryCreatedAt = 828,
  OssIconHistoryDate = 829,
  OssIconHistoryId = 830,
  OssIconHistoryName = 831,
  OssIconHistoryNodeLocale = 832,
  OssIconHistorySpaceId = 833,
  OssIconHistorySubName = 834,
  OssIconHistoryUpdatedAt = 835,
  OssIconId = 836,
  OssIconInternalContent = 837,
  OssIconInternalContentDigest = 838,
  OssIconInternalContentFilePath = 839,
  OssIconInternalDescription = 840,
  OssIconInternalFieldOwners = 841,
  OssIconInternalIgnoreType = 842,
  OssIconInternalMediaType = 843,
  OssIconInternalOwner = 844,
  OssIconInternalType = 845,
  OssIconName = 846,
  OssIconNodeLocale = 847,
  OssIconOss = 848,
  OssIconOssChildren = 849,
  OssIconOssChildrenContentfulOssDetailTextNode = 850,
  OssIconOssContentfulId = 851,
  OssIconOssCreatedAt = 852,
  OssIconOssHref = 853,
  OssIconOssId = 854,
  OssIconOssName = 855,
  OssIconOssNodeLocale = 856,
  OssIconOssSpaceId = 857,
  OssIconOssStartDate = 858,
  OssIconOssSubName = 859,
  OssIconOssTags = 860,
  OssIconOssUpdatedAt = 861,
  OssIconParentChildren = 862,
  OssIconParentId = 863,
  OssIconProject = 864,
  OssIconProjectChildren = 865,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 866,
  OssIconProjectContentfulId = 867,
  OssIconProjectCreatedAt = 868,
  OssIconProjectEndDate = 869,
  OssIconProjectId = 870,
  OssIconProjectName = 871,
  OssIconProjectNodeLocale = 872,
  OssIconProjectSpaceId = 873,
  OssIconProjectStartDate = 874,
  OssIconProjectSubName = 875,
  OssIconProjectTags = 876,
  OssIconProjectUpdatedAt = 877,
  OssIconSpaceId = 878,
  OssIconSvgChildren = 879,
  OssIconSvgChildrenMdx = 880,
  OssIconSvgId = 881,
  OssIconSvgSvg = 882,
  OssIconSysRevision = 883,
  OssIconSysType = 884,
  OssIconUpdatedAt = 885,
  OssIconWhatICanDo = 886,
  OssIconWhatICanDoChildren = 887,
  OssIconWhatICanDoContentfulId = 888,
  OssIconWhatICanDoCreatedAt = 889,
  OssIconWhatICanDoId = 890,
  OssIconWhatICanDoName = 891,
  OssIconWhatICanDoNodeLocale = 892,
  OssIconWhatICanDoSortKey = 893,
  OssIconWhatICanDoSpaceId = 894,
  OssIconWhatICanDoSubName = 895,
  OssIconWhatICanDoUpdatedAt = 896,
  OssId = 897,
  OssImageChildren = 898,
  OssImageChildrenChildren = 899,
  OssImageChildrenId = 900,
  OssImageContentfulId = 901,
  OssImageCreatedAt = 902,
  OssImageDescription = 903,
  OssImageFileContentType = 904,
  OssImageFileFileName = 905,
  OssImageFileUrl = 906,
  OssImageFilename = 907,
  OssImageFilesize = 908,
  OssImageGatsbyImage = 909,
  OssImageGatsbyImageData = 910,
  OssImageHeight = 911,
  OssImageId = 912,
  OssImageInternalContent = 913,
  OssImageInternalContentDigest = 914,
  OssImageInternalContentFilePath = 915,
  OssImageInternalDescription = 916,
  OssImageInternalFieldOwners = 917,
  OssImageInternalIgnoreType = 918,
  OssImageInternalMediaType = 919,
  OssImageInternalOwner = 920,
  OssImageInternalType = 921,
  OssImageMimeType = 922,
  OssImageNodeLocale = 923,
  OssImageParentChildren = 924,
  OssImageParentId = 925,
  OssImagePlaceholderUrl = 926,
  OssImagePublicUrl = 927,
  OssImageResizeHeight = 928,
  OssImageResizeSrc = 929,
  OssImageResizeWidth = 930,
  OssImageSize = 931,
  OssImageSpaceId = 932,
  OssImageSysRevision = 933,
  OssImageSysType = 934,
  OssImageTitle = 935,
  OssImageUpdatedAt = 936,
  OssImageUrl = 937,
  OssImageWidth = 938,
  OssInternalContent = 939,
  OssInternalContentDigest = 940,
  OssInternalContentFilePath = 941,
  OssInternalDescription = 942,
  OssInternalFieldOwners = 943,
  OssInternalIgnoreType = 944,
  OssInternalMediaType = 945,
  OssInternalOwner = 946,
  OssInternalType = 947,
  OssName = 948,
  OssNodeLocale = 949,
  OssParentChildren = 950,
  OssParentChildrenChildren = 951,
  OssParentChildrenId = 952,
  OssParentId = 953,
  OssParentInternalContent = 954,
  OssParentInternalContentDigest = 955,
  OssParentInternalContentFilePath = 956,
  OssParentInternalDescription = 957,
  OssParentInternalFieldOwners = 958,
  OssParentInternalIgnoreType = 959,
  OssParentInternalMediaType = 960,
  OssParentInternalOwner = 961,
  OssParentInternalType = 962,
  OssParentParentChildren = 963,
  OssParentParentId = 964,
  OssSpaceId = 965,
  OssStartDate = 966,
  OssSubName = 967,
  OssSysRevision = 968,
  OssSysType = 969,
  OssTags = 970,
  OssTagsBlogPost = 971,
  OssTagsBlogPostChildren = 972,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 973,
  OssTagsBlogPostContentfulId = 974,
  OssTagsBlogPostCreated = 975,
  OssTagsBlogPostCreatedAt = 976,
  OssTagsBlogPostExcerpt = 977,
  OssTagsBlogPostId = 978,
  OssTagsBlogPostNodeLocale = 979,
  OssTagsBlogPostSlug = 980,
  OssTagsBlogPostSpaceId = 981,
  OssTagsBlogPostTags = 982,
  OssTagsBlogPostTitle = 983,
  OssTagsBlogPostUpdated = 984,
  OssTagsBlogPostUpdatedAt = 985,
  OssTagsChildren = 986,
  OssTagsChildrenChildren = 987,
  OssTagsChildrenId = 988,
  OssTagsContentfulId = 989,
  OssTagsCreatedAt = 990,
  OssTagsId = 991,
  OssTagsInternalContent = 992,
  OssTagsInternalContentDigest = 993,
  OssTagsInternalContentFilePath = 994,
  OssTagsInternalDescription = 995,
  OssTagsInternalFieldOwners = 996,
  OssTagsInternalIgnoreType = 997,
  OssTagsInternalMediaType = 998,
  OssTagsInternalOwner = 999,
  OssTagsInternalType = 1000,
  OssTagsLevel = 1001,
  OssTagsName = 1002,
  OssTagsNodeLocale = 1003,
  OssTagsOss = 1004,
  OssTagsOssChildren = 1005,
  OssTagsOssChildrenContentfulOssDetailTextNode = 1006,
  OssTagsOssContentfulId = 1007,
  OssTagsOssCreatedAt = 1008,
  OssTagsOssHref = 1009,
  OssTagsOssId = 1010,
  OssTagsOssName = 1011,
  OssTagsOssNodeLocale = 1012,
  OssTagsOssSpaceId = 1013,
  OssTagsOssStartDate = 1014,
  OssTagsOssSubName = 1015,
  OssTagsOssTags = 1016,
  OssTagsOssUpdatedAt = 1017,
  OssTagsParentChildren = 1018,
  OssTagsParentId = 1019,
  OssTagsProject = 1020,
  OssTagsProjectChildren = 1021,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 1022,
  OssTagsProjectContentfulId = 1023,
  OssTagsProjectCreatedAt = 1024,
  OssTagsProjectEndDate = 1025,
  OssTagsProjectId = 1026,
  OssTagsProjectName = 1027,
  OssTagsProjectNodeLocale = 1028,
  OssTagsProjectSpaceId = 1029,
  OssTagsProjectStartDate = 1030,
  OssTagsProjectSubName = 1031,
  OssTagsProjectTags = 1032,
  OssTagsProjectUpdatedAt = 1033,
  OssTagsSkillGrpup = 1034,
  OssTagsSkillGrpupChildren = 1035,
  OssTagsSkillGrpupContentfulId = 1036,
  OssTagsSkillGrpupCreatedAt = 1037,
  OssTagsSkillGrpupId = 1038,
  OssTagsSkillGrpupName = 1039,
  OssTagsSkillGrpupNodeLocale = 1040,
  OssTagsSkillGrpupSkillMap = 1041,
  OssTagsSkillGrpupSkills = 1042,
  OssTagsSkillGrpupSpaceId = 1043,
  OssTagsSkillGrpupUpdatedAt = 1044,
  OssTagsSkillMap = 1045,
  OssTagsSkillMapChildren = 1046,
  OssTagsSkillMapContentfulId = 1047,
  OssTagsSkillMapCreatedAt = 1048,
  OssTagsSkillMapExpanded = 1049,
  OssTagsSkillMapId = 1050,
  OssTagsSkillMapName = 1051,
  OssTagsSkillMapNodeLocale = 1052,
  OssTagsSkillMapSkillGroups = 1053,
  OssTagsSkillMapSkills = 1054,
  OssTagsSkillMapSortKey = 1055,
  OssTagsSkillMapSpaceId = 1056,
  OssTagsSkillMapUpdatedAt = 1057,
  OssTagsSpaceId = 1058,
  OssTagsSysRevision = 1059,
  OssTagsSysType = 1060,
  OssTagsUpdatedAt = 1061,
  OssUpdatedAt = 1062,
  ParentChildren = 1063,
  ParentChildrenChildren = 1064,
  ParentChildrenChildrenChildren = 1065,
  ParentChildrenChildrenId = 1066,
  ParentChildrenId = 1067,
  ParentChildrenInternalContent = 1068,
  ParentChildrenInternalContentDigest = 1069,
  ParentChildrenInternalContentFilePath = 1070,
  ParentChildrenInternalDescription = 1071,
  ParentChildrenInternalFieldOwners = 1072,
  ParentChildrenInternalIgnoreType = 1073,
  ParentChildrenInternalMediaType = 1074,
  ParentChildrenInternalOwner = 1075,
  ParentChildrenInternalType = 1076,
  ParentChildrenParentChildren = 1077,
  ParentChildrenParentId = 1078,
  ParentId = 1079,
  ParentInternalContent = 1080,
  ParentInternalContentDigest = 1081,
  ParentInternalContentFilePath = 1082,
  ParentInternalDescription = 1083,
  ParentInternalFieldOwners = 1084,
  ParentInternalIgnoreType = 1085,
  ParentInternalMediaType = 1086,
  ParentInternalOwner = 1087,
  ParentInternalType = 1088,
  ParentParentChildren = 1089,
  ParentParentChildrenChildren = 1090,
  ParentParentChildrenId = 1091,
  ParentParentId = 1092,
  ParentParentInternalContent = 1093,
  ParentParentInternalContentDigest = 1094,
  ParentParentInternalContentFilePath = 1095,
  ParentParentInternalDescription = 1096,
  ParentParentInternalFieldOwners = 1097,
  ParentParentInternalIgnoreType = 1098,
  ParentParentInternalMediaType = 1099,
  ParentParentInternalOwner = 1100,
  ParentParentInternalType = 1101,
  ParentParentParentChildren = 1102,
  ParentParentParentId = 1103,
  Project = 1104,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 1105,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 1106,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 1107,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1108,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 1109,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 1110,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 1111,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 1112,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 1113,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 1114,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 1115,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 1116,
  ProjectChildContentfulProjectDetailTextNodeChildren = 1117,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1118,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 1119,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 1120,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1121,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1122,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 1123,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 1124,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 1125,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1126,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 1127,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 1128,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1129,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1130,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 1131,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 1132,
  ProjectChildContentfulProjectDetailTextNodeDetail = 1133,
  ProjectChildContentfulProjectDetailTextNodeId = 1134,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 1135,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 1136,
  ProjectChildContentfulProjectDetailTextNodeInternalContentFilePath = 1137,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 1138,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 1139,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 1140,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 1141,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 1142,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 1143,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 1144,
  ProjectChildContentfulProjectDetailTextNodeParentId = 1145,
  ProjectChildContentfulProjectDetailTextNodeSysType = 1146,
  ProjectChildren = 1147,
  ProjectChildrenContentfulProjectDetailTextNode = 1148,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 1149,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 1150,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 1151,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1152,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 1153,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 1154,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 1155,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 1156,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 1157,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 1158,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 1159,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 1160,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 1161,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1162,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 1163,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 1164,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1165,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1166,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 1167,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 1168,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 1169,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1170,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 1171,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 1172,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1173,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1174,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 1175,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 1176,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 1177,
  ProjectChildrenContentfulProjectDetailTextNodeId = 1178,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 1179,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 1180,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentFilePath = 1181,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 1182,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 1183,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 1184,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 1185,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 1186,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 1187,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 1188,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 1189,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 1190,
  ProjectChildrenChildren = 1191,
  ProjectChildrenChildrenChildren = 1192,
  ProjectChildrenChildrenId = 1193,
  ProjectChildrenId = 1194,
  ProjectChildrenInternalContent = 1195,
  ProjectChildrenInternalContentDigest = 1196,
  ProjectChildrenInternalContentFilePath = 1197,
  ProjectChildrenInternalDescription = 1198,
  ProjectChildrenInternalFieldOwners = 1199,
  ProjectChildrenInternalIgnoreType = 1200,
  ProjectChildrenInternalMediaType = 1201,
  ProjectChildrenInternalOwner = 1202,
  ProjectChildrenInternalType = 1203,
  ProjectChildrenParentChildren = 1204,
  ProjectChildrenParentId = 1205,
  ProjectContentfulId = 1206,
  ProjectCreatedAt = 1207,
  ProjectDetailChildMdxBody = 1208,
  ProjectDetailChildMdxChildren = 1209,
  ProjectDetailChildMdxExcerpt = 1210,
  ProjectDetailChildMdxFileAbsolutePath = 1211,
  ProjectDetailChildMdxHeadings = 1212,
  ProjectDetailChildMdxHtml = 1213,
  ProjectDetailChildMdxId = 1214,
  ProjectDetailChildMdxMdxAst = 1215,
  ProjectDetailChildMdxRawBody = 1216,
  ProjectDetailChildMdxSlug = 1217,
  ProjectDetailChildMdxTableOfContents = 1218,
  ProjectDetailChildMdxTimeToRead = 1219,
  ProjectDetailChildren = 1220,
  ProjectDetailChildrenMdx = 1221,
  ProjectDetailChildrenMdxBody = 1222,
  ProjectDetailChildrenMdxChildren = 1223,
  ProjectDetailChildrenMdxExcerpt = 1224,
  ProjectDetailChildrenMdxFileAbsolutePath = 1225,
  ProjectDetailChildrenMdxHeadings = 1226,
  ProjectDetailChildrenMdxHtml = 1227,
  ProjectDetailChildrenMdxId = 1228,
  ProjectDetailChildrenMdxMdxAst = 1229,
  ProjectDetailChildrenMdxRawBody = 1230,
  ProjectDetailChildrenMdxSlug = 1231,
  ProjectDetailChildrenMdxTableOfContents = 1232,
  ProjectDetailChildrenMdxTimeToRead = 1233,
  ProjectDetailChildrenChildren = 1234,
  ProjectDetailChildrenId = 1235,
  ProjectDetailDetail = 1236,
  ProjectDetailId = 1237,
  ProjectDetailInternalContent = 1238,
  ProjectDetailInternalContentDigest = 1239,
  ProjectDetailInternalContentFilePath = 1240,
  ProjectDetailInternalDescription = 1241,
  ProjectDetailInternalFieldOwners = 1242,
  ProjectDetailInternalIgnoreType = 1243,
  ProjectDetailInternalMediaType = 1244,
  ProjectDetailInternalOwner = 1245,
  ProjectDetailInternalType = 1246,
  ProjectDetailParentChildren = 1247,
  ProjectDetailParentId = 1248,
  ProjectDetailSysType = 1249,
  ProjectEndDate = 1250,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1251,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 1252,
  ProjectIconChildContentfulIconSvgTextNodeId = 1253,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1254,
  ProjectIconChildren = 1255,
  ProjectIconChildrenContentfulIconSvgTextNode = 1256,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1257,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1258,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1259,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1260,
  ProjectIconChildrenChildren = 1261,
  ProjectIconChildrenId = 1262,
  ProjectIconContact = 1263,
  ProjectIconContactChildren = 1264,
  ProjectIconContactContentfulId = 1265,
  ProjectIconContactCreatedAt = 1266,
  ProjectIconContactHref = 1267,
  ProjectIconContactId = 1268,
  ProjectIconContactName = 1269,
  ProjectIconContactNodeLocale = 1270,
  ProjectIconContactSortKey = 1271,
  ProjectIconContactSpaceId = 1272,
  ProjectIconContactSubName = 1273,
  ProjectIconContactUpdatedAt = 1274,
  ProjectIconContentfulId = 1275,
  ProjectIconCreatedAt = 1276,
  ProjectIconHistory = 1277,
  ProjectIconHistoryChildren = 1278,
  ProjectIconHistoryContentfulId = 1279,
  ProjectIconHistoryCreatedAt = 1280,
  ProjectIconHistoryDate = 1281,
  ProjectIconHistoryId = 1282,
  ProjectIconHistoryName = 1283,
  ProjectIconHistoryNodeLocale = 1284,
  ProjectIconHistorySpaceId = 1285,
  ProjectIconHistorySubName = 1286,
  ProjectIconHistoryUpdatedAt = 1287,
  ProjectIconId = 1288,
  ProjectIconInternalContent = 1289,
  ProjectIconInternalContentDigest = 1290,
  ProjectIconInternalContentFilePath = 1291,
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
  ProjectIconSvgChildrenMdx = 1332,
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
  ProjectInternalContentFilePath = 1352,
  ProjectInternalDescription = 1353,
  ProjectInternalFieldOwners = 1354,
  ProjectInternalIgnoreType = 1355,
  ProjectInternalMediaType = 1356,
  ProjectInternalOwner = 1357,
  ProjectInternalType = 1358,
  ProjectName = 1359,
  ProjectNodeLocale = 1360,
  ProjectParentChildren = 1361,
  ProjectParentChildrenChildren = 1362,
  ProjectParentChildrenId = 1363,
  ProjectParentId = 1364,
  ProjectParentInternalContent = 1365,
  ProjectParentInternalContentDigest = 1366,
  ProjectParentInternalContentFilePath = 1367,
  ProjectParentInternalDescription = 1368,
  ProjectParentInternalFieldOwners = 1369,
  ProjectParentInternalIgnoreType = 1370,
  ProjectParentInternalMediaType = 1371,
  ProjectParentInternalOwner = 1372,
  ProjectParentInternalType = 1373,
  ProjectParentParentChildren = 1374,
  ProjectParentParentId = 1375,
  ProjectSpaceId = 1376,
  ProjectStartDate = 1377,
  ProjectSubName = 1378,
  ProjectSysRevision = 1379,
  ProjectSysType = 1380,
  ProjectTags = 1381,
  ProjectTagsBlogPost = 1382,
  ProjectTagsBlogPostChildren = 1383,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1384,
  ProjectTagsBlogPostContentfulId = 1385,
  ProjectTagsBlogPostCreated = 1386,
  ProjectTagsBlogPostCreatedAt = 1387,
  ProjectTagsBlogPostExcerpt = 1388,
  ProjectTagsBlogPostId = 1389,
  ProjectTagsBlogPostNodeLocale = 1390,
  ProjectTagsBlogPostSlug = 1391,
  ProjectTagsBlogPostSpaceId = 1392,
  ProjectTagsBlogPostTags = 1393,
  ProjectTagsBlogPostTitle = 1394,
  ProjectTagsBlogPostUpdated = 1395,
  ProjectTagsBlogPostUpdatedAt = 1396,
  ProjectTagsChildren = 1397,
  ProjectTagsChildrenChildren = 1398,
  ProjectTagsChildrenId = 1399,
  ProjectTagsContentfulId = 1400,
  ProjectTagsCreatedAt = 1401,
  ProjectTagsId = 1402,
  ProjectTagsInternalContent = 1403,
  ProjectTagsInternalContentDigest = 1404,
  ProjectTagsInternalContentFilePath = 1405,
  ProjectTagsInternalDescription = 1406,
  ProjectTagsInternalFieldOwners = 1407,
  ProjectTagsInternalIgnoreType = 1408,
  ProjectTagsInternalMediaType = 1409,
  ProjectTagsInternalOwner = 1410,
  ProjectTagsInternalType = 1411,
  ProjectTagsLevel = 1412,
  ProjectTagsName = 1413,
  ProjectTagsNodeLocale = 1414,
  ProjectTagsOss = 1415,
  ProjectTagsOssChildren = 1416,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1417,
  ProjectTagsOssContentfulId = 1418,
  ProjectTagsOssCreatedAt = 1419,
  ProjectTagsOssHref = 1420,
  ProjectTagsOssId = 1421,
  ProjectTagsOssName = 1422,
  ProjectTagsOssNodeLocale = 1423,
  ProjectTagsOssSpaceId = 1424,
  ProjectTagsOssStartDate = 1425,
  ProjectTagsOssSubName = 1426,
  ProjectTagsOssTags = 1427,
  ProjectTagsOssUpdatedAt = 1428,
  ProjectTagsParentChildren = 1429,
  ProjectTagsParentId = 1430,
  ProjectTagsProject = 1431,
  ProjectTagsProjectChildren = 1432,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1433,
  ProjectTagsProjectContentfulId = 1434,
  ProjectTagsProjectCreatedAt = 1435,
  ProjectTagsProjectEndDate = 1436,
  ProjectTagsProjectId = 1437,
  ProjectTagsProjectName = 1438,
  ProjectTagsProjectNodeLocale = 1439,
  ProjectTagsProjectSpaceId = 1440,
  ProjectTagsProjectStartDate = 1441,
  ProjectTagsProjectSubName = 1442,
  ProjectTagsProjectTags = 1443,
  ProjectTagsProjectUpdatedAt = 1444,
  ProjectTagsSkillGrpup = 1445,
  ProjectTagsSkillGrpupChildren = 1446,
  ProjectTagsSkillGrpupContentfulId = 1447,
  ProjectTagsSkillGrpupCreatedAt = 1448,
  ProjectTagsSkillGrpupId = 1449,
  ProjectTagsSkillGrpupName = 1450,
  ProjectTagsSkillGrpupNodeLocale = 1451,
  ProjectTagsSkillGrpupSkillMap = 1452,
  ProjectTagsSkillGrpupSkills = 1453,
  ProjectTagsSkillGrpupSpaceId = 1454,
  ProjectTagsSkillGrpupUpdatedAt = 1455,
  ProjectTagsSkillMap = 1456,
  ProjectTagsSkillMapChildren = 1457,
  ProjectTagsSkillMapContentfulId = 1458,
  ProjectTagsSkillMapCreatedAt = 1459,
  ProjectTagsSkillMapExpanded = 1460,
  ProjectTagsSkillMapId = 1461,
  ProjectTagsSkillMapName = 1462,
  ProjectTagsSkillMapNodeLocale = 1463,
  ProjectTagsSkillMapSkillGroups = 1464,
  ProjectTagsSkillMapSkills = 1465,
  ProjectTagsSkillMapSortKey = 1466,
  ProjectTagsSkillMapSpaceId = 1467,
  ProjectTagsSkillMapUpdatedAt = 1468,
  ProjectTagsSpaceId = 1469,
  ProjectTagsSysRevision = 1470,
  ProjectTagsSysType = 1471,
  ProjectTagsUpdatedAt = 1472,
  ProjectUpdatedAt = 1473,
  SpaceId = 1474,
  SvgChildMdxBody = 1475,
  SvgChildMdxChildren = 1476,
  SvgChildMdxChildrenChildren = 1477,
  SvgChildMdxChildrenId = 1478,
  SvgChildMdxExcerpt = 1479,
  SvgChildMdxFileAbsolutePath = 1480,
  SvgChildMdxFrontmatterTitle = 1481,
  SvgChildMdxHeadings = 1482,
  SvgChildMdxHeadingsDepth = 1483,
  SvgChildMdxHeadingsValue = 1484,
  SvgChildMdxHtml = 1485,
  SvgChildMdxId = 1486,
  SvgChildMdxInternalContent = 1487,
  SvgChildMdxInternalContentDigest = 1488,
  SvgChildMdxInternalContentFilePath = 1489,
  SvgChildMdxInternalDescription = 1490,
  SvgChildMdxInternalFieldOwners = 1491,
  SvgChildMdxInternalIgnoreType = 1492,
  SvgChildMdxInternalMediaType = 1493,
  SvgChildMdxInternalOwner = 1494,
  SvgChildMdxInternalType = 1495,
  SvgChildMdxMdxAst = 1496,
  SvgChildMdxParentChildren = 1497,
  SvgChildMdxParentId = 1498,
  SvgChildMdxRawBody = 1499,
  SvgChildMdxSlug = 1500,
  SvgChildMdxTableOfContents = 1501,
  SvgChildMdxTimeToRead = 1502,
  SvgChildMdxWordCountParagraphs = 1503,
  SvgChildMdxWordCountSentences = 1504,
  SvgChildMdxWordCountWords = 1505,
  SvgChildren = 1506,
  SvgChildrenMdx = 1507,
  SvgChildrenMdxBody = 1508,
  SvgChildrenMdxChildren = 1509,
  SvgChildrenMdxChildrenChildren = 1510,
  SvgChildrenMdxChildrenId = 1511,
  SvgChildrenMdxExcerpt = 1512,
  SvgChildrenMdxFileAbsolutePath = 1513,
  SvgChildrenMdxFrontmatterTitle = 1514,
  SvgChildrenMdxHeadings = 1515,
  SvgChildrenMdxHeadingsDepth = 1516,
  SvgChildrenMdxHeadingsValue = 1517,
  SvgChildrenMdxHtml = 1518,
  SvgChildrenMdxId = 1519,
  SvgChildrenMdxInternalContent = 1520,
  SvgChildrenMdxInternalContentDigest = 1521,
  SvgChildrenMdxInternalContentFilePath = 1522,
  SvgChildrenMdxInternalDescription = 1523,
  SvgChildrenMdxInternalFieldOwners = 1524,
  SvgChildrenMdxInternalIgnoreType = 1525,
  SvgChildrenMdxInternalMediaType = 1526,
  SvgChildrenMdxInternalOwner = 1527,
  SvgChildrenMdxInternalType = 1528,
  SvgChildrenMdxMdxAst = 1529,
  SvgChildrenMdxParentChildren = 1530,
  SvgChildrenMdxParentId = 1531,
  SvgChildrenMdxRawBody = 1532,
  SvgChildrenMdxSlug = 1533,
  SvgChildrenMdxTableOfContents = 1534,
  SvgChildrenMdxTimeToRead = 1535,
  SvgChildrenMdxWordCountParagraphs = 1536,
  SvgChildrenMdxWordCountSentences = 1537,
  SvgChildrenMdxWordCountWords = 1538,
  SvgChildrenChildren = 1539,
  SvgChildrenChildrenChildren = 1540,
  SvgChildrenChildrenId = 1541,
  SvgChildrenId = 1542,
  SvgChildrenInternalContent = 1543,
  SvgChildrenInternalContentDigest = 1544,
  SvgChildrenInternalContentFilePath = 1545,
  SvgChildrenInternalDescription = 1546,
  SvgChildrenInternalFieldOwners = 1547,
  SvgChildrenInternalIgnoreType = 1548,
  SvgChildrenInternalMediaType = 1549,
  SvgChildrenInternalOwner = 1550,
  SvgChildrenInternalType = 1551,
  SvgChildrenParentChildren = 1552,
  SvgChildrenParentId = 1553,
  SvgId = 1554,
  SvgInternalContent = 1555,
  SvgInternalContentDigest = 1556,
  SvgInternalContentFilePath = 1557,
  SvgInternalDescription = 1558,
  SvgInternalFieldOwners = 1559,
  SvgInternalIgnoreType = 1560,
  SvgInternalMediaType = 1561,
  SvgInternalOwner = 1562,
  SvgInternalType = 1563,
  SvgParentChildren = 1564,
  SvgParentChildrenChildren = 1565,
  SvgParentChildrenId = 1566,
  SvgParentId = 1567,
  SvgParentInternalContent = 1568,
  SvgParentInternalContentDigest = 1569,
  SvgParentInternalContentFilePath = 1570,
  SvgParentInternalDescription = 1571,
  SvgParentInternalFieldOwners = 1572,
  SvgParentInternalIgnoreType = 1573,
  SvgParentInternalMediaType = 1574,
  SvgParentInternalOwner = 1575,
  SvgParentInternalType = 1576,
  SvgParentParentChildren = 1577,
  SvgParentParentId = 1578,
  SvgSvg = 1579,
  SvgSysType = 1580,
  SysContentTypeSysId = 1581,
  SysContentTypeSysLinkType = 1582,
  SysContentTypeSysType = 1583,
  SysRevision = 1584,
  SysType = 1585,
  UpdatedAt = 1586,
  WhatICanDo = 1587,
  WhatICanDoChildren = 1588,
  WhatICanDoChildrenChildren = 1589,
  WhatICanDoChildrenChildrenChildren = 1590,
  WhatICanDoChildrenChildrenId = 1591,
  WhatICanDoChildrenId = 1592,
  WhatICanDoChildrenInternalContent = 1593,
  WhatICanDoChildrenInternalContentDigest = 1594,
  WhatICanDoChildrenInternalContentFilePath = 1595,
  WhatICanDoChildrenInternalDescription = 1596,
  WhatICanDoChildrenInternalFieldOwners = 1597,
  WhatICanDoChildrenInternalIgnoreType = 1598,
  WhatICanDoChildrenInternalMediaType = 1599,
  WhatICanDoChildrenInternalOwner = 1600,
  WhatICanDoChildrenInternalType = 1601,
  WhatICanDoChildrenParentChildren = 1602,
  WhatICanDoChildrenParentId = 1603,
  WhatICanDoContentfulId = 1604,
  WhatICanDoCreatedAt = 1605,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildren = 1606,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildrenMdx = 1607,
  WhatICanDoIconChildContentfulIconSvgTextNodeId = 1608,
  WhatICanDoIconChildContentfulIconSvgTextNodeSvg = 1609,
  WhatICanDoIconChildren = 1610,
  WhatICanDoIconChildrenContentfulIconSvgTextNode = 1611,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildren = 1612,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1613,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeId = 1614,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeSvg = 1615,
  WhatICanDoIconChildrenChildren = 1616,
  WhatICanDoIconChildrenId = 1617,
  WhatICanDoIconContact = 1618,
  WhatICanDoIconContactChildren = 1619,
  WhatICanDoIconContactContentfulId = 1620,
  WhatICanDoIconContactCreatedAt = 1621,
  WhatICanDoIconContactHref = 1622,
  WhatICanDoIconContactId = 1623,
  WhatICanDoIconContactName = 1624,
  WhatICanDoIconContactNodeLocale = 1625,
  WhatICanDoIconContactSortKey = 1626,
  WhatICanDoIconContactSpaceId = 1627,
  WhatICanDoIconContactSubName = 1628,
  WhatICanDoIconContactUpdatedAt = 1629,
  WhatICanDoIconContentfulId = 1630,
  WhatICanDoIconCreatedAt = 1631,
  WhatICanDoIconHistory = 1632,
  WhatICanDoIconHistoryChildren = 1633,
  WhatICanDoIconHistoryContentfulId = 1634,
  WhatICanDoIconHistoryCreatedAt = 1635,
  WhatICanDoIconHistoryDate = 1636,
  WhatICanDoIconHistoryId = 1637,
  WhatICanDoIconHistoryName = 1638,
  WhatICanDoIconHistoryNodeLocale = 1639,
  WhatICanDoIconHistorySpaceId = 1640,
  WhatICanDoIconHistorySubName = 1641,
  WhatICanDoIconHistoryUpdatedAt = 1642,
  WhatICanDoIconId = 1643,
  WhatICanDoIconInternalContent = 1644,
  WhatICanDoIconInternalContentDigest = 1645,
  WhatICanDoIconInternalContentFilePath = 1646,
  WhatICanDoIconInternalDescription = 1647,
  WhatICanDoIconInternalFieldOwners = 1648,
  WhatICanDoIconInternalIgnoreType = 1649,
  WhatICanDoIconInternalMediaType = 1650,
  WhatICanDoIconInternalOwner = 1651,
  WhatICanDoIconInternalType = 1652,
  WhatICanDoIconName = 1653,
  WhatICanDoIconNodeLocale = 1654,
  WhatICanDoIconOss = 1655,
  WhatICanDoIconOssChildren = 1656,
  WhatICanDoIconOssChildrenContentfulOssDetailTextNode = 1657,
  WhatICanDoIconOssContentfulId = 1658,
  WhatICanDoIconOssCreatedAt = 1659,
  WhatICanDoIconOssHref = 1660,
  WhatICanDoIconOssId = 1661,
  WhatICanDoIconOssName = 1662,
  WhatICanDoIconOssNodeLocale = 1663,
  WhatICanDoIconOssSpaceId = 1664,
  WhatICanDoIconOssStartDate = 1665,
  WhatICanDoIconOssSubName = 1666,
  WhatICanDoIconOssTags = 1667,
  WhatICanDoIconOssUpdatedAt = 1668,
  WhatICanDoIconParentChildren = 1669,
  WhatICanDoIconParentId = 1670,
  WhatICanDoIconProject = 1671,
  WhatICanDoIconProjectChildren = 1672,
  WhatICanDoIconProjectChildrenContentfulProjectDetailTextNode = 1673,
  WhatICanDoIconProjectContentfulId = 1674,
  WhatICanDoIconProjectCreatedAt = 1675,
  WhatICanDoIconProjectEndDate = 1676,
  WhatICanDoIconProjectId = 1677,
  WhatICanDoIconProjectName = 1678,
  WhatICanDoIconProjectNodeLocale = 1679,
  WhatICanDoIconProjectSpaceId = 1680,
  WhatICanDoIconProjectStartDate = 1681,
  WhatICanDoIconProjectSubName = 1682,
  WhatICanDoIconProjectTags = 1683,
  WhatICanDoIconProjectUpdatedAt = 1684,
  WhatICanDoIconSpaceId = 1685,
  WhatICanDoIconSvgChildren = 1686,
  WhatICanDoIconSvgChildrenMdx = 1687,
  WhatICanDoIconSvgId = 1688,
  WhatICanDoIconSvgSvg = 1689,
  WhatICanDoIconSysRevision = 1690,
  WhatICanDoIconSysType = 1691,
  WhatICanDoIconUpdatedAt = 1692,
  WhatICanDoIconWhatICanDo = 1693,
  WhatICanDoIconWhatICanDoChildren = 1694,
  WhatICanDoIconWhatICanDoContentfulId = 1695,
  WhatICanDoIconWhatICanDoCreatedAt = 1696,
  WhatICanDoIconWhatICanDoId = 1697,
  WhatICanDoIconWhatICanDoName = 1698,
  WhatICanDoIconWhatICanDoNodeLocale = 1699,
  WhatICanDoIconWhatICanDoSortKey = 1700,
  WhatICanDoIconWhatICanDoSpaceId = 1701,
  WhatICanDoIconWhatICanDoSubName = 1702,
  WhatICanDoIconWhatICanDoUpdatedAt = 1703,
  WhatICanDoId = 1704,
  WhatICanDoInternalContent = 1705,
  WhatICanDoInternalContentDigest = 1706,
  WhatICanDoInternalContentFilePath = 1707,
  WhatICanDoInternalDescription = 1708,
  WhatICanDoInternalFieldOwners = 1709,
  WhatICanDoInternalIgnoreType = 1710,
  WhatICanDoInternalMediaType = 1711,
  WhatICanDoInternalOwner = 1712,
  WhatICanDoInternalType = 1713,
  WhatICanDoName = 1714,
  WhatICanDoNodeLocale = 1715,
  WhatICanDoParentChildren = 1716,
  WhatICanDoParentChildrenChildren = 1717,
  WhatICanDoParentChildrenId = 1718,
  WhatICanDoParentId = 1719,
  WhatICanDoParentInternalContent = 1720,
  WhatICanDoParentInternalContentDigest = 1721,
  WhatICanDoParentInternalContentFilePath = 1722,
  WhatICanDoParentInternalDescription = 1723,
  WhatICanDoParentInternalFieldOwners = 1724,
  WhatICanDoParentInternalIgnoreType = 1725,
  WhatICanDoParentInternalMediaType = 1726,
  WhatICanDoParentInternalOwner = 1727,
  WhatICanDoParentInternalType = 1728,
  WhatICanDoParentParentChildren = 1729,
  WhatICanDoParentParentId = 1730,
  WhatICanDoSortKey = 1731,
  WhatICanDoSpaceId = 1732,
  WhatICanDoSubName = 1733,
  WhatICanDoSysRevision = 1734,
  WhatICanDoSysType = 1735,
  WhatICanDoUpdatedAt = 1736
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
  ChildContentfulOssDetailTextNodeChildMdxInternalContentFilePath = 14,
  ChildContentfulOssDetailTextNodeChildMdxInternalDescription = 15,
  ChildContentfulOssDetailTextNodeChildMdxInternalFieldOwners = 16,
  ChildContentfulOssDetailTextNodeChildMdxInternalIgnoreType = 17,
  ChildContentfulOssDetailTextNodeChildMdxInternalMediaType = 18,
  ChildContentfulOssDetailTextNodeChildMdxInternalOwner = 19,
  ChildContentfulOssDetailTextNodeChildMdxInternalType = 20,
  ChildContentfulOssDetailTextNodeChildMdxMdxAst = 21,
  ChildContentfulOssDetailTextNodeChildMdxParentChildren = 22,
  ChildContentfulOssDetailTextNodeChildMdxParentId = 23,
  ChildContentfulOssDetailTextNodeChildMdxRawBody = 24,
  ChildContentfulOssDetailTextNodeChildMdxSlug = 25,
  ChildContentfulOssDetailTextNodeChildMdxTableOfContents = 26,
  ChildContentfulOssDetailTextNodeChildMdxTimeToRead = 27,
  ChildContentfulOssDetailTextNodeChildMdxWordCountParagraphs = 28,
  ChildContentfulOssDetailTextNodeChildMdxWordCountSentences = 29,
  ChildContentfulOssDetailTextNodeChildMdxWordCountWords = 30,
  ChildContentfulOssDetailTextNodeChildren = 31,
  ChildContentfulOssDetailTextNodeChildrenMdx = 32,
  ChildContentfulOssDetailTextNodeChildrenMdxBody = 33,
  ChildContentfulOssDetailTextNodeChildrenMdxChildren = 34,
  ChildContentfulOssDetailTextNodeChildrenMdxChildrenChildren = 35,
  ChildContentfulOssDetailTextNodeChildrenMdxChildrenId = 36,
  ChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 37,
  ChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 38,
  ChildContentfulOssDetailTextNodeChildrenMdxFrontmatterTitle = 39,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadings = 40,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadingsDepth = 41,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadingsValue = 42,
  ChildContentfulOssDetailTextNodeChildrenMdxHtml = 43,
  ChildContentfulOssDetailTextNodeChildrenMdxId = 44,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalContent = 45,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalContentDigest = 46,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalContentFilePath = 47,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalDescription = 48,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalFieldOwners = 49,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalIgnoreType = 50,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalMediaType = 51,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalOwner = 52,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalType = 53,
  ChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 54,
  ChildContentfulOssDetailTextNodeChildrenMdxParentChildren = 55,
  ChildContentfulOssDetailTextNodeChildrenMdxParentId = 56,
  ChildContentfulOssDetailTextNodeChildrenMdxRawBody = 57,
  ChildContentfulOssDetailTextNodeChildrenMdxSlug = 58,
  ChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 59,
  ChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 60,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountParagraphs = 61,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountSentences = 62,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountWords = 63,
  ChildContentfulOssDetailTextNodeChildrenChildren = 64,
  ChildContentfulOssDetailTextNodeChildrenChildrenChildren = 65,
  ChildContentfulOssDetailTextNodeChildrenChildrenId = 66,
  ChildContentfulOssDetailTextNodeChildrenId = 67,
  ChildContentfulOssDetailTextNodeChildrenInternalContent = 68,
  ChildContentfulOssDetailTextNodeChildrenInternalContentDigest = 69,
  ChildContentfulOssDetailTextNodeChildrenInternalContentFilePath = 70,
  ChildContentfulOssDetailTextNodeChildrenInternalDescription = 71,
  ChildContentfulOssDetailTextNodeChildrenInternalFieldOwners = 72,
  ChildContentfulOssDetailTextNodeChildrenInternalIgnoreType = 73,
  ChildContentfulOssDetailTextNodeChildrenInternalMediaType = 74,
  ChildContentfulOssDetailTextNodeChildrenInternalOwner = 75,
  ChildContentfulOssDetailTextNodeChildrenInternalType = 76,
  ChildContentfulOssDetailTextNodeChildrenParentChildren = 77,
  ChildContentfulOssDetailTextNodeChildrenParentId = 78,
  ChildContentfulOssDetailTextNodeDetail = 79,
  ChildContentfulOssDetailTextNodeId = 80,
  ChildContentfulOssDetailTextNodeInternalContent = 81,
  ChildContentfulOssDetailTextNodeInternalContentDigest = 82,
  ChildContentfulOssDetailTextNodeInternalContentFilePath = 83,
  ChildContentfulOssDetailTextNodeInternalDescription = 84,
  ChildContentfulOssDetailTextNodeInternalFieldOwners = 85,
  ChildContentfulOssDetailTextNodeInternalIgnoreType = 86,
  ChildContentfulOssDetailTextNodeInternalMediaType = 87,
  ChildContentfulOssDetailTextNodeInternalOwner = 88,
  ChildContentfulOssDetailTextNodeInternalType = 89,
  ChildContentfulOssDetailTextNodeParentChildren = 90,
  ChildContentfulOssDetailTextNodeParentChildrenChildren = 91,
  ChildContentfulOssDetailTextNodeParentChildrenId = 92,
  ChildContentfulOssDetailTextNodeParentId = 93,
  ChildContentfulOssDetailTextNodeParentInternalContent = 94,
  ChildContentfulOssDetailTextNodeParentInternalContentDigest = 95,
  ChildContentfulOssDetailTextNodeParentInternalContentFilePath = 96,
  ChildContentfulOssDetailTextNodeParentInternalDescription = 97,
  ChildContentfulOssDetailTextNodeParentInternalFieldOwners = 98,
  ChildContentfulOssDetailTextNodeParentInternalIgnoreType = 99,
  ChildContentfulOssDetailTextNodeParentInternalMediaType = 100,
  ChildContentfulOssDetailTextNodeParentInternalOwner = 101,
  ChildContentfulOssDetailTextNodeParentInternalType = 102,
  ChildContentfulOssDetailTextNodeParentParentChildren = 103,
  ChildContentfulOssDetailTextNodeParentParentId = 104,
  ChildContentfulOssDetailTextNodeSysType = 105,
  Children = 106,
  ChildrenContentfulOssDetailTextNode = 107,
  ChildrenContentfulOssDetailTextNodeChildMdxBody = 108,
  ChildrenContentfulOssDetailTextNodeChildMdxChildren = 109,
  ChildrenContentfulOssDetailTextNodeChildMdxChildrenChildren = 110,
  ChildrenContentfulOssDetailTextNodeChildMdxChildrenId = 111,
  ChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 112,
  ChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 113,
  ChildrenContentfulOssDetailTextNodeChildMdxFrontmatterTitle = 114,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadings = 115,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadingsDepth = 116,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadingsValue = 117,
  ChildrenContentfulOssDetailTextNodeChildMdxHtml = 118,
  ChildrenContentfulOssDetailTextNodeChildMdxId = 119,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalContent = 120,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalContentDigest = 121,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalContentFilePath = 122,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalDescription = 123,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalFieldOwners = 124,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalIgnoreType = 125,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalMediaType = 126,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalOwner = 127,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalType = 128,
  ChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 129,
  ChildrenContentfulOssDetailTextNodeChildMdxParentChildren = 130,
  ChildrenContentfulOssDetailTextNodeChildMdxParentId = 131,
  ChildrenContentfulOssDetailTextNodeChildMdxRawBody = 132,
  ChildrenContentfulOssDetailTextNodeChildMdxSlug = 133,
  ChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 134,
  ChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 135,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountParagraphs = 136,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountSentences = 137,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountWords = 138,
  ChildrenContentfulOssDetailTextNodeChildren = 139,
  ChildrenContentfulOssDetailTextNodeChildrenMdx = 140,
  ChildrenContentfulOssDetailTextNodeChildrenMdxBody = 141,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 142,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildrenChildren = 143,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildrenId = 144,
  ChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 145,
  ChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 146,
  ChildrenContentfulOssDetailTextNodeChildrenMdxFrontmatterTitle = 147,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 148,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadingsDepth = 149,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadingsValue = 150,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 151,
  ChildrenContentfulOssDetailTextNodeChildrenMdxId = 152,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalContent = 153,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalContentDigest = 154,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalContentFilePath = 155,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalDescription = 156,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalFieldOwners = 157,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalIgnoreType = 158,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalMediaType = 159,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalOwner = 160,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalType = 161,
  ChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 162,
  ChildrenContentfulOssDetailTextNodeChildrenMdxParentChildren = 163,
  ChildrenContentfulOssDetailTextNodeChildrenMdxParentId = 164,
  ChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 165,
  ChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 166,
  ChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 167,
  ChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 168,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountParagraphs = 169,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountSentences = 170,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountWords = 171,
  ChildrenContentfulOssDetailTextNodeChildrenChildren = 172,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenChildren = 173,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenId = 174,
  ChildrenContentfulOssDetailTextNodeChildrenId = 175,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContent = 176,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContentDigest = 177,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContentFilePath = 178,
  ChildrenContentfulOssDetailTextNodeChildrenInternalDescription = 179,
  ChildrenContentfulOssDetailTextNodeChildrenInternalFieldOwners = 180,
  ChildrenContentfulOssDetailTextNodeChildrenInternalIgnoreType = 181,
  ChildrenContentfulOssDetailTextNodeChildrenInternalMediaType = 182,
  ChildrenContentfulOssDetailTextNodeChildrenInternalOwner = 183,
  ChildrenContentfulOssDetailTextNodeChildrenInternalType = 184,
  ChildrenContentfulOssDetailTextNodeChildrenParentChildren = 185,
  ChildrenContentfulOssDetailTextNodeChildrenParentId = 186,
  ChildrenContentfulOssDetailTextNodeDetail = 187,
  ChildrenContentfulOssDetailTextNodeId = 188,
  ChildrenContentfulOssDetailTextNodeInternalContent = 189,
  ChildrenContentfulOssDetailTextNodeInternalContentDigest = 190,
  ChildrenContentfulOssDetailTextNodeInternalContentFilePath = 191,
  ChildrenContentfulOssDetailTextNodeInternalDescription = 192,
  ChildrenContentfulOssDetailTextNodeInternalFieldOwners = 193,
  ChildrenContentfulOssDetailTextNodeInternalIgnoreType = 194,
  ChildrenContentfulOssDetailTextNodeInternalMediaType = 195,
  ChildrenContentfulOssDetailTextNodeInternalOwner = 196,
  ChildrenContentfulOssDetailTextNodeInternalType = 197,
  ChildrenContentfulOssDetailTextNodeParentChildren = 198,
  ChildrenContentfulOssDetailTextNodeParentChildrenChildren = 199,
  ChildrenContentfulOssDetailTextNodeParentChildrenId = 200,
  ChildrenContentfulOssDetailTextNodeParentId = 201,
  ChildrenContentfulOssDetailTextNodeParentInternalContent = 202,
  ChildrenContentfulOssDetailTextNodeParentInternalContentDigest = 203,
  ChildrenContentfulOssDetailTextNodeParentInternalContentFilePath = 204,
  ChildrenContentfulOssDetailTextNodeParentInternalDescription = 205,
  ChildrenContentfulOssDetailTextNodeParentInternalFieldOwners = 206,
  ChildrenContentfulOssDetailTextNodeParentInternalIgnoreType = 207,
  ChildrenContentfulOssDetailTextNodeParentInternalMediaType = 208,
  ChildrenContentfulOssDetailTextNodeParentInternalOwner = 209,
  ChildrenContentfulOssDetailTextNodeParentInternalType = 210,
  ChildrenContentfulOssDetailTextNodeParentParentChildren = 211,
  ChildrenContentfulOssDetailTextNodeParentParentId = 212,
  ChildrenContentfulOssDetailTextNodeSysType = 213,
  ChildrenChildren = 214,
  ChildrenChildrenChildren = 215,
  ChildrenChildrenChildrenChildren = 216,
  ChildrenChildrenChildrenId = 217,
  ChildrenChildrenId = 218,
  ChildrenChildrenInternalContent = 219,
  ChildrenChildrenInternalContentDigest = 220,
  ChildrenChildrenInternalContentFilePath = 221,
  ChildrenChildrenInternalDescription = 222,
  ChildrenChildrenInternalFieldOwners = 223,
  ChildrenChildrenInternalIgnoreType = 224,
  ChildrenChildrenInternalMediaType = 225,
  ChildrenChildrenInternalOwner = 226,
  ChildrenChildrenInternalType = 227,
  ChildrenChildrenParentChildren = 228,
  ChildrenChildrenParentId = 229,
  ChildrenId = 230,
  ChildrenInternalContent = 231,
  ChildrenInternalContentDigest = 232,
  ChildrenInternalContentFilePath = 233,
  ChildrenInternalDescription = 234,
  ChildrenInternalFieldOwners = 235,
  ChildrenInternalIgnoreType = 236,
  ChildrenInternalMediaType = 237,
  ChildrenInternalOwner = 238,
  ChildrenInternalType = 239,
  ChildrenParentChildren = 240,
  ChildrenParentChildrenChildren = 241,
  ChildrenParentChildrenId = 242,
  ChildrenParentId = 243,
  ChildrenParentInternalContent = 244,
  ChildrenParentInternalContentDigest = 245,
  ChildrenParentInternalContentFilePath = 246,
  ChildrenParentInternalDescription = 247,
  ChildrenParentInternalFieldOwners = 248,
  ChildrenParentInternalIgnoreType = 249,
  ChildrenParentInternalMediaType = 250,
  ChildrenParentInternalOwner = 251,
  ChildrenParentInternalType = 252,
  ChildrenParentParentChildren = 253,
  ChildrenParentParentId = 254,
  ContentfulId = 255,
  CreatedAt = 256,
  DetailChildMdxBody = 257,
  DetailChildMdxChildren = 258,
  DetailChildMdxChildrenChildren = 259,
  DetailChildMdxChildrenId = 260,
  DetailChildMdxExcerpt = 261,
  DetailChildMdxFileAbsolutePath = 262,
  DetailChildMdxFrontmatterTitle = 263,
  DetailChildMdxHeadings = 264,
  DetailChildMdxHeadingsDepth = 265,
  DetailChildMdxHeadingsValue = 266,
  DetailChildMdxHtml = 267,
  DetailChildMdxId = 268,
  DetailChildMdxInternalContent = 269,
  DetailChildMdxInternalContentDigest = 270,
  DetailChildMdxInternalContentFilePath = 271,
  DetailChildMdxInternalDescription = 272,
  DetailChildMdxInternalFieldOwners = 273,
  DetailChildMdxInternalIgnoreType = 274,
  DetailChildMdxInternalMediaType = 275,
  DetailChildMdxInternalOwner = 276,
  DetailChildMdxInternalType = 277,
  DetailChildMdxMdxAst = 278,
  DetailChildMdxParentChildren = 279,
  DetailChildMdxParentId = 280,
  DetailChildMdxRawBody = 281,
  DetailChildMdxSlug = 282,
  DetailChildMdxTableOfContents = 283,
  DetailChildMdxTimeToRead = 284,
  DetailChildMdxWordCountParagraphs = 285,
  DetailChildMdxWordCountSentences = 286,
  DetailChildMdxWordCountWords = 287,
  DetailChildren = 288,
  DetailChildrenMdx = 289,
  DetailChildrenMdxBody = 290,
  DetailChildrenMdxChildren = 291,
  DetailChildrenMdxChildrenChildren = 292,
  DetailChildrenMdxChildrenId = 293,
  DetailChildrenMdxExcerpt = 294,
  DetailChildrenMdxFileAbsolutePath = 295,
  DetailChildrenMdxFrontmatterTitle = 296,
  DetailChildrenMdxHeadings = 297,
  DetailChildrenMdxHeadingsDepth = 298,
  DetailChildrenMdxHeadingsValue = 299,
  DetailChildrenMdxHtml = 300,
  DetailChildrenMdxId = 301,
  DetailChildrenMdxInternalContent = 302,
  DetailChildrenMdxInternalContentDigest = 303,
  DetailChildrenMdxInternalContentFilePath = 304,
  DetailChildrenMdxInternalDescription = 305,
  DetailChildrenMdxInternalFieldOwners = 306,
  DetailChildrenMdxInternalIgnoreType = 307,
  DetailChildrenMdxInternalMediaType = 308,
  DetailChildrenMdxInternalOwner = 309,
  DetailChildrenMdxInternalType = 310,
  DetailChildrenMdxMdxAst = 311,
  DetailChildrenMdxParentChildren = 312,
  DetailChildrenMdxParentId = 313,
  DetailChildrenMdxRawBody = 314,
  DetailChildrenMdxSlug = 315,
  DetailChildrenMdxTableOfContents = 316,
  DetailChildrenMdxTimeToRead = 317,
  DetailChildrenMdxWordCountParagraphs = 318,
  DetailChildrenMdxWordCountSentences = 319,
  DetailChildrenMdxWordCountWords = 320,
  DetailChildrenChildren = 321,
  DetailChildrenChildrenChildren = 322,
  DetailChildrenChildrenId = 323,
  DetailChildrenId = 324,
  DetailChildrenInternalContent = 325,
  DetailChildrenInternalContentDigest = 326,
  DetailChildrenInternalContentFilePath = 327,
  DetailChildrenInternalDescription = 328,
  DetailChildrenInternalFieldOwners = 329,
  DetailChildrenInternalIgnoreType = 330,
  DetailChildrenInternalMediaType = 331,
  DetailChildrenInternalOwner = 332,
  DetailChildrenInternalType = 333,
  DetailChildrenParentChildren = 334,
  DetailChildrenParentId = 335,
  DetailDetail = 336,
  DetailId = 337,
  DetailInternalContent = 338,
  DetailInternalContentDigest = 339,
  DetailInternalContentFilePath = 340,
  DetailInternalDescription = 341,
  DetailInternalFieldOwners = 342,
  DetailInternalIgnoreType = 343,
  DetailInternalMediaType = 344,
  DetailInternalOwner = 345,
  DetailInternalType = 346,
  DetailParentChildren = 347,
  DetailParentChildrenChildren = 348,
  DetailParentChildrenId = 349,
  DetailParentId = 350,
  DetailParentInternalContent = 351,
  DetailParentInternalContentDigest = 352,
  DetailParentInternalContentFilePath = 353,
  DetailParentInternalDescription = 354,
  DetailParentInternalFieldOwners = 355,
  DetailParentInternalIgnoreType = 356,
  DetailParentInternalMediaType = 357,
  DetailParentInternalOwner = 358,
  DetailParentInternalType = 359,
  DetailParentParentChildren = 360,
  DetailParentParentId = 361,
  DetailSysType = 362,
  Href = 363,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 364,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 365,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 366,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 367,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 368,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 369,
  IconChildContentfulIconSvgTextNodeChildMdxId = 370,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 371,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 372,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 373,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 374,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 375,
  IconChildContentfulIconSvgTextNodeChildren = 376,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 377,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 378,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 379,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 380,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 381,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 382,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 383,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 384,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 385,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 386,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 387,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 388,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 389,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 390,
  IconChildContentfulIconSvgTextNodeChildrenId = 391,
  IconChildContentfulIconSvgTextNodeId = 392,
  IconChildContentfulIconSvgTextNodeInternalContent = 393,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 394,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 395,
  IconChildContentfulIconSvgTextNodeInternalDescription = 396,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 397,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 398,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 399,
  IconChildContentfulIconSvgTextNodeInternalOwner = 400,
  IconChildContentfulIconSvgTextNodeInternalType = 401,
  IconChildContentfulIconSvgTextNodeParentChildren = 402,
  IconChildContentfulIconSvgTextNodeParentId = 403,
  IconChildContentfulIconSvgTextNodeSvg = 404,
  IconChildContentfulIconSvgTextNodeSysType = 405,
  IconChildren = 406,
  IconChildrenContentfulIconSvgTextNode = 407,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 408,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 409,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 410,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 411,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 412,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 413,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 414,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 415,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 416,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 417,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 418,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 419,
  IconChildrenContentfulIconSvgTextNodeChildren = 420,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 421,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 422,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 423,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 424,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 425,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 426,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 427,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 428,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 429,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 430,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 431,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 432,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 433,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 434,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 435,
  IconChildrenContentfulIconSvgTextNodeId = 436,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 437,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 438,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 439,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 440,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 441,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 442,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 443,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 444,
  IconChildrenContentfulIconSvgTextNodeInternalType = 445,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 446,
  IconChildrenContentfulIconSvgTextNodeParentId = 447,
  IconChildrenContentfulIconSvgTextNodeSvg = 448,
  IconChildrenContentfulIconSvgTextNodeSysType = 449,
  IconChildrenChildren = 450,
  IconChildrenChildrenChildren = 451,
  IconChildrenChildrenId = 452,
  IconChildrenId = 453,
  IconChildrenInternalContent = 454,
  IconChildrenInternalContentDigest = 455,
  IconChildrenInternalContentFilePath = 456,
  IconChildrenInternalDescription = 457,
  IconChildrenInternalFieldOwners = 458,
  IconChildrenInternalIgnoreType = 459,
  IconChildrenInternalMediaType = 460,
  IconChildrenInternalOwner = 461,
  IconChildrenInternalType = 462,
  IconChildrenParentChildren = 463,
  IconChildrenParentId = 464,
  IconContact = 465,
  IconContactChildren = 466,
  IconContactChildrenChildren = 467,
  IconContactChildrenId = 468,
  IconContactContentfulId = 469,
  IconContactCreatedAt = 470,
  IconContactHref = 471,
  IconContactIconSvgDarkChildren = 472,
  IconContactIconSvgDarkContentfulId = 473,
  IconContactIconSvgDarkCreatedAt = 474,
  IconContactIconSvgDarkDescription = 475,
  IconContactIconSvgDarkFilename = 476,
  IconContactIconSvgDarkFilesize = 477,
  IconContactIconSvgDarkGatsbyImage = 478,
  IconContactIconSvgDarkGatsbyImageData = 479,
  IconContactIconSvgDarkHeight = 480,
  IconContactIconSvgDarkId = 481,
  IconContactIconSvgDarkMimeType = 482,
  IconContactIconSvgDarkNodeLocale = 483,
  IconContactIconSvgDarkPlaceholderUrl = 484,
  IconContactIconSvgDarkPublicUrl = 485,
  IconContactIconSvgDarkSize = 486,
  IconContactIconSvgDarkSpaceId = 487,
  IconContactIconSvgDarkTitle = 488,
  IconContactIconSvgDarkUpdatedAt = 489,
  IconContactIconSvgDarkUrl = 490,
  IconContactIconSvgDarkWidth = 491,
  IconContactIconSvgLightChildren = 492,
  IconContactIconSvgLightContentfulId = 493,
  IconContactIconSvgLightCreatedAt = 494,
  IconContactIconSvgLightDescription = 495,
  IconContactIconSvgLightFilename = 496,
  IconContactIconSvgLightFilesize = 497,
  IconContactIconSvgLightGatsbyImage = 498,
  IconContactIconSvgLightGatsbyImageData = 499,
  IconContactIconSvgLightHeight = 500,
  IconContactIconSvgLightId = 501,
  IconContactIconSvgLightMimeType = 502,
  IconContactIconSvgLightNodeLocale = 503,
  IconContactIconSvgLightPlaceholderUrl = 504,
  IconContactIconSvgLightPublicUrl = 505,
  IconContactIconSvgLightSize = 506,
  IconContactIconSvgLightSpaceId = 507,
  IconContactIconSvgLightTitle = 508,
  IconContactIconSvgLightUpdatedAt = 509,
  IconContactIconSvgLightUrl = 510,
  IconContactIconSvgLightWidth = 511,
  IconContactIconChildren = 512,
  IconContactIconChildrenContentfulIconSvgTextNode = 513,
  IconContactIconContact = 514,
  IconContactIconContentfulId = 515,
  IconContactIconCreatedAt = 516,
  IconContactIconHistory = 517,
  IconContactIconId = 518,
  IconContactIconName = 519,
  IconContactIconNodeLocale = 520,
  IconContactIconOss = 521,
  IconContactIconProject = 522,
  IconContactIconSpaceId = 523,
  IconContactIconUpdatedAt = 524,
  IconContactIconWhatICanDo = 525,
  IconContactId = 526,
  IconContactInternalContent = 527,
  IconContactInternalContentDigest = 528,
  IconContactInternalContentFilePath = 529,
  IconContactInternalDescription = 530,
  IconContactInternalFieldOwners = 531,
  IconContactInternalIgnoreType = 532,
  IconContactInternalMediaType = 533,
  IconContactInternalOwner = 534,
  IconContactInternalType = 535,
  IconContactName = 536,
  IconContactNodeLocale = 537,
  IconContactParentChildren = 538,
  IconContactParentId = 539,
  IconContactSortKey = 540,
  IconContactSpaceId = 541,
  IconContactSubName = 542,
  IconContactSysRevision = 543,
  IconContactSysType = 544,
  IconContactUpdatedAt = 545,
  IconContentfulId = 546,
  IconCreatedAt = 547,
  IconHistory = 548,
  IconHistoryChildren = 549,
  IconHistoryChildrenChildren = 550,
  IconHistoryChildrenId = 551,
  IconHistoryContentfulId = 552,
  IconHistoryCreatedAt = 553,
  IconHistoryDate = 554,
  IconHistoryIconChildren = 555,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 556,
  IconHistoryIconContact = 557,
  IconHistoryIconContentfulId = 558,
  IconHistoryIconCreatedAt = 559,
  IconHistoryIconHistory = 560,
  IconHistoryIconId = 561,
  IconHistoryIconName = 562,
  IconHistoryIconNodeLocale = 563,
  IconHistoryIconOss = 564,
  IconHistoryIconProject = 565,
  IconHistoryIconSpaceId = 566,
  IconHistoryIconUpdatedAt = 567,
  IconHistoryIconWhatICanDo = 568,
  IconHistoryId = 569,
  IconHistoryInternalContent = 570,
  IconHistoryInternalContentDigest = 571,
  IconHistoryInternalContentFilePath = 572,
  IconHistoryInternalDescription = 573,
  IconHistoryInternalFieldOwners = 574,
  IconHistoryInternalIgnoreType = 575,
  IconHistoryInternalMediaType = 576,
  IconHistoryInternalOwner = 577,
  IconHistoryInternalType = 578,
  IconHistoryName = 579,
  IconHistoryNodeLocale = 580,
  IconHistoryParentChildren = 581,
  IconHistoryParentId = 582,
  IconHistorySpaceId = 583,
  IconHistorySubName = 584,
  IconHistorySysRevision = 585,
  IconHistorySysType = 586,
  IconHistoryUpdatedAt = 587,
  IconId = 588,
  IconInternalContent = 589,
  IconInternalContentDigest = 590,
  IconInternalContentFilePath = 591,
  IconInternalDescription = 592,
  IconInternalFieldOwners = 593,
  IconInternalIgnoreType = 594,
  IconInternalMediaType = 595,
  IconInternalOwner = 596,
  IconInternalType = 597,
  IconName = 598,
  IconNodeLocale = 599,
  IconOss = 600,
  IconOssChildContentfulOssDetailTextNodeChildren = 601,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 602,
  IconOssChildContentfulOssDetailTextNodeDetail = 603,
  IconOssChildContentfulOssDetailTextNodeId = 604,
  IconOssChildren = 605,
  IconOssChildrenContentfulOssDetailTextNode = 606,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 607,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 608,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 609,
  IconOssChildrenContentfulOssDetailTextNodeId = 610,
  IconOssChildrenChildren = 611,
  IconOssChildrenId = 612,
  IconOssContentfulId = 613,
  IconOssCreatedAt = 614,
  IconOssDetailChildren = 615,
  IconOssDetailChildrenMdx = 616,
  IconOssDetailDetail = 617,
  IconOssDetailId = 618,
  IconOssHref = 619,
  IconOssIconChildren = 620,
  IconOssIconChildrenContentfulIconSvgTextNode = 621,
  IconOssIconContact = 622,
  IconOssIconContentfulId = 623,
  IconOssIconCreatedAt = 624,
  IconOssIconHistory = 625,
  IconOssIconId = 626,
  IconOssIconName = 627,
  IconOssIconNodeLocale = 628,
  IconOssIconOss = 629,
  IconOssIconProject = 630,
  IconOssIconSpaceId = 631,
  IconOssIconUpdatedAt = 632,
  IconOssIconWhatICanDo = 633,
  IconOssId = 634,
  IconOssImageChildren = 635,
  IconOssImageContentfulId = 636,
  IconOssImageCreatedAt = 637,
  IconOssImageDescription = 638,
  IconOssImageFilename = 639,
  IconOssImageFilesize = 640,
  IconOssImageGatsbyImage = 641,
  IconOssImageGatsbyImageData = 642,
  IconOssImageHeight = 643,
  IconOssImageId = 644,
  IconOssImageMimeType = 645,
  IconOssImageNodeLocale = 646,
  IconOssImagePlaceholderUrl = 647,
  IconOssImagePublicUrl = 648,
  IconOssImageSize = 649,
  IconOssImageSpaceId = 650,
  IconOssImageTitle = 651,
  IconOssImageUpdatedAt = 652,
  IconOssImageUrl = 653,
  IconOssImageWidth = 654,
  IconOssInternalContent = 655,
  IconOssInternalContentDigest = 656,
  IconOssInternalContentFilePath = 657,
  IconOssInternalDescription = 658,
  IconOssInternalFieldOwners = 659,
  IconOssInternalIgnoreType = 660,
  IconOssInternalMediaType = 661,
  IconOssInternalOwner = 662,
  IconOssInternalType = 663,
  IconOssName = 664,
  IconOssNodeLocale = 665,
  IconOssParentChildren = 666,
  IconOssParentId = 667,
  IconOssSpaceId = 668,
  IconOssStartDate = 669,
  IconOssSubName = 670,
  IconOssSysRevision = 671,
  IconOssSysType = 672,
  IconOssTags = 673,
  IconOssTagsBlogPost = 674,
  IconOssTagsChildren = 675,
  IconOssTagsContentfulId = 676,
  IconOssTagsCreatedAt = 677,
  IconOssTagsId = 678,
  IconOssTagsLevel = 679,
  IconOssTagsName = 680,
  IconOssTagsNodeLocale = 681,
  IconOssTagsOss = 682,
  IconOssTagsProject = 683,
  IconOssTagsSkillGrpup = 684,
  IconOssTagsSkillMap = 685,
  IconOssTagsSpaceId = 686,
  IconOssTagsUpdatedAt = 687,
  IconOssUpdatedAt = 688,
  IconParentChildren = 689,
  IconParentChildrenChildren = 690,
  IconParentChildrenId = 691,
  IconParentId = 692,
  IconParentInternalContent = 693,
  IconParentInternalContentDigest = 694,
  IconParentInternalContentFilePath = 695,
  IconParentInternalDescription = 696,
  IconParentInternalFieldOwners = 697,
  IconParentInternalIgnoreType = 698,
  IconParentInternalMediaType = 699,
  IconParentInternalOwner = 700,
  IconParentInternalType = 701,
  IconParentParentChildren = 702,
  IconParentParentId = 703,
  IconProject = 704,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 705,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 706,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 707,
  IconProjectChildContentfulProjectDetailTextNodeId = 708,
  IconProjectChildren = 709,
  IconProjectChildrenContentfulProjectDetailTextNode = 710,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 711,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 712,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 713,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 714,
  IconProjectChildrenChildren = 715,
  IconProjectChildrenId = 716,
  IconProjectContentfulId = 717,
  IconProjectCreatedAt = 718,
  IconProjectDetailChildren = 719,
  IconProjectDetailChildrenMdx = 720,
  IconProjectDetailDetail = 721,
  IconProjectDetailId = 722,
  IconProjectEndDate = 723,
  IconProjectIconChildren = 724,
  IconProjectIconChildrenContentfulIconSvgTextNode = 725,
  IconProjectIconContact = 726,
  IconProjectIconContentfulId = 727,
  IconProjectIconCreatedAt = 728,
  IconProjectIconHistory = 729,
  IconProjectIconId = 730,
  IconProjectIconName = 731,
  IconProjectIconNodeLocale = 732,
  IconProjectIconOss = 733,
  IconProjectIconProject = 734,
  IconProjectIconSpaceId = 735,
  IconProjectIconUpdatedAt = 736,
  IconProjectIconWhatICanDo = 737,
  IconProjectId = 738,
  IconProjectInternalContent = 739,
  IconProjectInternalContentDigest = 740,
  IconProjectInternalContentFilePath = 741,
  IconProjectInternalDescription = 742,
  IconProjectInternalFieldOwners = 743,
  IconProjectInternalIgnoreType = 744,
  IconProjectInternalMediaType = 745,
  IconProjectInternalOwner = 746,
  IconProjectInternalType = 747,
  IconProjectName = 748,
  IconProjectNodeLocale = 749,
  IconProjectParentChildren = 750,
  IconProjectParentId = 751,
  IconProjectSpaceId = 752,
  IconProjectStartDate = 753,
  IconProjectSubName = 754,
  IconProjectSysRevision = 755,
  IconProjectSysType = 756,
  IconProjectTags = 757,
  IconProjectTagsBlogPost = 758,
  IconProjectTagsChildren = 759,
  IconProjectTagsContentfulId = 760,
  IconProjectTagsCreatedAt = 761,
  IconProjectTagsId = 762,
  IconProjectTagsLevel = 763,
  IconProjectTagsName = 764,
  IconProjectTagsNodeLocale = 765,
  IconProjectTagsOss = 766,
  IconProjectTagsProject = 767,
  IconProjectTagsSkillGrpup = 768,
  IconProjectTagsSkillMap = 769,
  IconProjectTagsSpaceId = 770,
  IconProjectTagsUpdatedAt = 771,
  IconProjectUpdatedAt = 772,
  IconSpaceId = 773,
  IconSvgChildMdxBody = 774,
  IconSvgChildMdxChildren = 775,
  IconSvgChildMdxExcerpt = 776,
  IconSvgChildMdxFileAbsolutePath = 777,
  IconSvgChildMdxHeadings = 778,
  IconSvgChildMdxHtml = 779,
  IconSvgChildMdxId = 780,
  IconSvgChildMdxMdxAst = 781,
  IconSvgChildMdxRawBody = 782,
  IconSvgChildMdxSlug = 783,
  IconSvgChildMdxTableOfContents = 784,
  IconSvgChildMdxTimeToRead = 785,
  IconSvgChildren = 786,
  IconSvgChildrenMdx = 787,
  IconSvgChildrenMdxBody = 788,
  IconSvgChildrenMdxChildren = 789,
  IconSvgChildrenMdxExcerpt = 790,
  IconSvgChildrenMdxFileAbsolutePath = 791,
  IconSvgChildrenMdxHeadings = 792,
  IconSvgChildrenMdxHtml = 793,
  IconSvgChildrenMdxId = 794,
  IconSvgChildrenMdxMdxAst = 795,
  IconSvgChildrenMdxRawBody = 796,
  IconSvgChildrenMdxSlug = 797,
  IconSvgChildrenMdxTableOfContents = 798,
  IconSvgChildrenMdxTimeToRead = 799,
  IconSvgChildrenChildren = 800,
  IconSvgChildrenId = 801,
  IconSvgId = 802,
  IconSvgInternalContent = 803,
  IconSvgInternalContentDigest = 804,
  IconSvgInternalContentFilePath = 805,
  IconSvgInternalDescription = 806,
  IconSvgInternalFieldOwners = 807,
  IconSvgInternalIgnoreType = 808,
  IconSvgInternalMediaType = 809,
  IconSvgInternalOwner = 810,
  IconSvgInternalType = 811,
  IconSvgParentChildren = 812,
  IconSvgParentId = 813,
  IconSvgSvg = 814,
  IconSvgSysType = 815,
  IconSysRevision = 816,
  IconSysType = 817,
  IconUpdatedAt = 818,
  IconWhatICanDo = 819,
  IconWhatICanDoChildren = 820,
  IconWhatICanDoChildrenChildren = 821,
  IconWhatICanDoChildrenId = 822,
  IconWhatICanDoContentfulId = 823,
  IconWhatICanDoCreatedAt = 824,
  IconWhatICanDoIconChildren = 825,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 826,
  IconWhatICanDoIconContact = 827,
  IconWhatICanDoIconContentfulId = 828,
  IconWhatICanDoIconCreatedAt = 829,
  IconWhatICanDoIconHistory = 830,
  IconWhatICanDoIconId = 831,
  IconWhatICanDoIconName = 832,
  IconWhatICanDoIconNodeLocale = 833,
  IconWhatICanDoIconOss = 834,
  IconWhatICanDoIconProject = 835,
  IconWhatICanDoIconSpaceId = 836,
  IconWhatICanDoIconUpdatedAt = 837,
  IconWhatICanDoIconWhatICanDo = 838,
  IconWhatICanDoId = 839,
  IconWhatICanDoInternalContent = 840,
  IconWhatICanDoInternalContentDigest = 841,
  IconWhatICanDoInternalContentFilePath = 842,
  IconWhatICanDoInternalDescription = 843,
  IconWhatICanDoInternalFieldOwners = 844,
  IconWhatICanDoInternalIgnoreType = 845,
  IconWhatICanDoInternalMediaType = 846,
  IconWhatICanDoInternalOwner = 847,
  IconWhatICanDoInternalType = 848,
  IconWhatICanDoName = 849,
  IconWhatICanDoNodeLocale = 850,
  IconWhatICanDoParentChildren = 851,
  IconWhatICanDoParentId = 852,
  IconWhatICanDoSortKey = 853,
  IconWhatICanDoSpaceId = 854,
  IconWhatICanDoSubName = 855,
  IconWhatICanDoSysRevision = 856,
  IconWhatICanDoSysType = 857,
  IconWhatICanDoUpdatedAt = 858,
  Id = 859,
  ImageChildren = 860,
  ImageChildrenChildren = 861,
  ImageChildrenChildrenChildren = 862,
  ImageChildrenChildrenId = 863,
  ImageChildrenId = 864,
  ImageChildrenInternalContent = 865,
  ImageChildrenInternalContentDigest = 866,
  ImageChildrenInternalContentFilePath = 867,
  ImageChildrenInternalDescription = 868,
  ImageChildrenInternalFieldOwners = 869,
  ImageChildrenInternalIgnoreType = 870,
  ImageChildrenInternalMediaType = 871,
  ImageChildrenInternalOwner = 872,
  ImageChildrenInternalType = 873,
  ImageChildrenParentChildren = 874,
  ImageChildrenParentId = 875,
  ImageContentfulId = 876,
  ImageCreatedAt = 877,
  ImageDescription = 878,
  ImageFileContentType = 879,
  ImageFileDetailsSize = 880,
  ImageFileFileName = 881,
  ImageFileUrl = 882,
  ImageFilename = 883,
  ImageFilesize = 884,
  ImageGatsbyImage = 885,
  ImageGatsbyImageData = 886,
  ImageHeight = 887,
  ImageId = 888,
  ImageInternalContent = 889,
  ImageInternalContentDigest = 890,
  ImageInternalContentFilePath = 891,
  ImageInternalDescription = 892,
  ImageInternalFieldOwners = 893,
  ImageInternalIgnoreType = 894,
  ImageInternalMediaType = 895,
  ImageInternalOwner = 896,
  ImageInternalType = 897,
  ImageMimeType = 898,
  ImageNodeLocale = 899,
  ImageParentChildren = 900,
  ImageParentChildrenChildren = 901,
  ImageParentChildrenId = 902,
  ImageParentId = 903,
  ImageParentInternalContent = 904,
  ImageParentInternalContentDigest = 905,
  ImageParentInternalContentFilePath = 906,
  ImageParentInternalDescription = 907,
  ImageParentInternalFieldOwners = 908,
  ImageParentInternalIgnoreType = 909,
  ImageParentInternalMediaType = 910,
  ImageParentInternalOwner = 911,
  ImageParentInternalType = 912,
  ImageParentParentChildren = 913,
  ImageParentParentId = 914,
  ImagePlaceholderUrl = 915,
  ImagePublicUrl = 916,
  ImageResizeHeight = 917,
  ImageResizeSrc = 918,
  ImageResizeWidth = 919,
  ImageSize = 920,
  ImageSpaceId = 921,
  ImageSysRevision = 922,
  ImageSysType = 923,
  ImageTitle = 924,
  ImageUpdatedAt = 925,
  ImageUrl = 926,
  ImageWidth = 927,
  InternalContent = 928,
  InternalContentDigest = 929,
  InternalContentFilePath = 930,
  InternalDescription = 931,
  InternalFieldOwners = 932,
  InternalIgnoreType = 933,
  InternalMediaType = 934,
  InternalOwner = 935,
  InternalType = 936,
  Name = 937,
  NodeLocale = 938,
  ParentChildren = 939,
  ParentChildrenChildren = 940,
  ParentChildrenChildrenChildren = 941,
  ParentChildrenChildrenId = 942,
  ParentChildrenId = 943,
  ParentChildrenInternalContent = 944,
  ParentChildrenInternalContentDigest = 945,
  ParentChildrenInternalContentFilePath = 946,
  ParentChildrenInternalDescription = 947,
  ParentChildrenInternalFieldOwners = 948,
  ParentChildrenInternalIgnoreType = 949,
  ParentChildrenInternalMediaType = 950,
  ParentChildrenInternalOwner = 951,
  ParentChildrenInternalType = 952,
  ParentChildrenParentChildren = 953,
  ParentChildrenParentId = 954,
  ParentId = 955,
  ParentInternalContent = 956,
  ParentInternalContentDigest = 957,
  ParentInternalContentFilePath = 958,
  ParentInternalDescription = 959,
  ParentInternalFieldOwners = 960,
  ParentInternalIgnoreType = 961,
  ParentInternalMediaType = 962,
  ParentInternalOwner = 963,
  ParentInternalType = 964,
  ParentParentChildren = 965,
  ParentParentChildrenChildren = 966,
  ParentParentChildrenId = 967,
  ParentParentId = 968,
  ParentParentInternalContent = 969,
  ParentParentInternalContentDigest = 970,
  ParentParentInternalContentFilePath = 971,
  ParentParentInternalDescription = 972,
  ParentParentInternalFieldOwners = 973,
  ParentParentInternalIgnoreType = 974,
  ParentParentInternalMediaType = 975,
  ParentParentInternalOwner = 976,
  ParentParentInternalType = 977,
  ParentParentParentChildren = 978,
  ParentParentParentId = 979,
  SpaceId = 980,
  StartDate = 981,
  SubName = 982,
  SysContentTypeSysId = 983,
  SysContentTypeSysLinkType = 984,
  SysContentTypeSysType = 985,
  SysRevision = 986,
  SysType = 987,
  Tags = 988,
  TagsBlogPost = 989,
  TagsBlogPostCategoryBlogPost = 990,
  TagsBlogPostCategoryChildren = 991,
  TagsBlogPostCategoryContentfulId = 992,
  TagsBlogPostCategoryCreatedAt = 993,
  TagsBlogPostCategoryId = 994,
  TagsBlogPostCategoryName = 995,
  TagsBlogPostCategoryNodeLocale = 996,
  TagsBlogPostCategorySortKey = 997,
  TagsBlogPostCategorySpaceId = 998,
  TagsBlogPostCategoryUpdatedAt = 999,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 1000,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 1001,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 1002,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 1003,
  TagsBlogPostChildren = 1004,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 1005,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 1006,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 1007,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 1008,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 1009,
  TagsBlogPostChildrenChildren = 1010,
  TagsBlogPostChildrenId = 1011,
  TagsBlogPostContentChildren = 1012,
  TagsBlogPostContentChildrenMdx = 1013,
  TagsBlogPostContentContent = 1014,
  TagsBlogPostContentId = 1015,
  TagsBlogPostContentfulId = 1016,
  TagsBlogPostCreated = 1017,
  TagsBlogPostCreatedAt = 1018,
  TagsBlogPostExcerpt = 1019,
  TagsBlogPostId = 1020,
  TagsBlogPostInternalContent = 1021,
  TagsBlogPostInternalContentDigest = 1022,
  TagsBlogPostInternalContentFilePath = 1023,
  TagsBlogPostInternalDescription = 1024,
  TagsBlogPostInternalFieldOwners = 1025,
  TagsBlogPostInternalIgnoreType = 1026,
  TagsBlogPostInternalMediaType = 1027,
  TagsBlogPostInternalOwner = 1028,
  TagsBlogPostInternalType = 1029,
  TagsBlogPostNodeLocale = 1030,
  TagsBlogPostParentChildren = 1031,
  TagsBlogPostParentId = 1032,
  TagsBlogPostSlug = 1033,
  TagsBlogPostSpaceId = 1034,
  TagsBlogPostSysRevision = 1035,
  TagsBlogPostSysType = 1036,
  TagsBlogPostTags = 1037,
  TagsBlogPostTagsBlogPost = 1038,
  TagsBlogPostTagsChildren = 1039,
  TagsBlogPostTagsContentfulId = 1040,
  TagsBlogPostTagsCreatedAt = 1041,
  TagsBlogPostTagsId = 1042,
  TagsBlogPostTagsLevel = 1043,
  TagsBlogPostTagsName = 1044,
  TagsBlogPostTagsNodeLocale = 1045,
  TagsBlogPostTagsOss = 1046,
  TagsBlogPostTagsProject = 1047,
  TagsBlogPostTagsSkillGrpup = 1048,
  TagsBlogPostTagsSkillMap = 1049,
  TagsBlogPostTagsSpaceId = 1050,
  TagsBlogPostTagsUpdatedAt = 1051,
  TagsBlogPostThumbnailChildren = 1052,
  TagsBlogPostThumbnailContentfulId = 1053,
  TagsBlogPostThumbnailCreatedAt = 1054,
  TagsBlogPostThumbnailDescription = 1055,
  TagsBlogPostThumbnailFilename = 1056,
  TagsBlogPostThumbnailFilesize = 1057,
  TagsBlogPostThumbnailGatsbyImage = 1058,
  TagsBlogPostThumbnailGatsbyImageData = 1059,
  TagsBlogPostThumbnailHeight = 1060,
  TagsBlogPostThumbnailId = 1061,
  TagsBlogPostThumbnailMimeType = 1062,
  TagsBlogPostThumbnailNodeLocale = 1063,
  TagsBlogPostThumbnailPlaceholderUrl = 1064,
  TagsBlogPostThumbnailPublicUrl = 1065,
  TagsBlogPostThumbnailSize = 1066,
  TagsBlogPostThumbnailSpaceId = 1067,
  TagsBlogPostThumbnailTitle = 1068,
  TagsBlogPostThumbnailUpdatedAt = 1069,
  TagsBlogPostThumbnailUrl = 1070,
  TagsBlogPostThumbnailWidth = 1071,
  TagsBlogPostTitle = 1072,
  TagsBlogPostUpdated = 1073,
  TagsBlogPostUpdatedAt = 1074,
  TagsChildren = 1075,
  TagsChildrenChildren = 1076,
  TagsChildrenChildrenChildren = 1077,
  TagsChildrenChildrenId = 1078,
  TagsChildrenId = 1079,
  TagsChildrenInternalContent = 1080,
  TagsChildrenInternalContentDigest = 1081,
  TagsChildrenInternalContentFilePath = 1082,
  TagsChildrenInternalDescription = 1083,
  TagsChildrenInternalFieldOwners = 1084,
  TagsChildrenInternalIgnoreType = 1085,
  TagsChildrenInternalMediaType = 1086,
  TagsChildrenInternalOwner = 1087,
  TagsChildrenInternalType = 1088,
  TagsChildrenParentChildren = 1089,
  TagsChildrenParentId = 1090,
  TagsContentfulId = 1091,
  TagsCreatedAt = 1092,
  TagsId = 1093,
  TagsInternalContent = 1094,
  TagsInternalContentDigest = 1095,
  TagsInternalContentFilePath = 1096,
  TagsInternalDescription = 1097,
  TagsInternalFieldOwners = 1098,
  TagsInternalIgnoreType = 1099,
  TagsInternalMediaType = 1100,
  TagsInternalOwner = 1101,
  TagsInternalType = 1102,
  TagsLevel = 1103,
  TagsName = 1104,
  TagsNodeLocale = 1105,
  TagsOss = 1106,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1107,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1108,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1109,
  TagsOssChildContentfulOssDetailTextNodeId = 1110,
  TagsOssChildren = 1111,
  TagsOssChildrenContentfulOssDetailTextNode = 1112,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1113,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1114,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1115,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1116,
  TagsOssChildrenChildren = 1117,
  TagsOssChildrenId = 1118,
  TagsOssContentfulId = 1119,
  TagsOssCreatedAt = 1120,
  TagsOssDetailChildren = 1121,
  TagsOssDetailChildrenMdx = 1122,
  TagsOssDetailDetail = 1123,
  TagsOssDetailId = 1124,
  TagsOssHref = 1125,
  TagsOssIconChildren = 1126,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1127,
  TagsOssIconContact = 1128,
  TagsOssIconContentfulId = 1129,
  TagsOssIconCreatedAt = 1130,
  TagsOssIconHistory = 1131,
  TagsOssIconId = 1132,
  TagsOssIconName = 1133,
  TagsOssIconNodeLocale = 1134,
  TagsOssIconOss = 1135,
  TagsOssIconProject = 1136,
  TagsOssIconSpaceId = 1137,
  TagsOssIconUpdatedAt = 1138,
  TagsOssIconWhatICanDo = 1139,
  TagsOssId = 1140,
  TagsOssImageChildren = 1141,
  TagsOssImageContentfulId = 1142,
  TagsOssImageCreatedAt = 1143,
  TagsOssImageDescription = 1144,
  TagsOssImageFilename = 1145,
  TagsOssImageFilesize = 1146,
  TagsOssImageGatsbyImage = 1147,
  TagsOssImageGatsbyImageData = 1148,
  TagsOssImageHeight = 1149,
  TagsOssImageId = 1150,
  TagsOssImageMimeType = 1151,
  TagsOssImageNodeLocale = 1152,
  TagsOssImagePlaceholderUrl = 1153,
  TagsOssImagePublicUrl = 1154,
  TagsOssImageSize = 1155,
  TagsOssImageSpaceId = 1156,
  TagsOssImageTitle = 1157,
  TagsOssImageUpdatedAt = 1158,
  TagsOssImageUrl = 1159,
  TagsOssImageWidth = 1160,
  TagsOssInternalContent = 1161,
  TagsOssInternalContentDigest = 1162,
  TagsOssInternalContentFilePath = 1163,
  TagsOssInternalDescription = 1164,
  TagsOssInternalFieldOwners = 1165,
  TagsOssInternalIgnoreType = 1166,
  TagsOssInternalMediaType = 1167,
  TagsOssInternalOwner = 1168,
  TagsOssInternalType = 1169,
  TagsOssName = 1170,
  TagsOssNodeLocale = 1171,
  TagsOssParentChildren = 1172,
  TagsOssParentId = 1173,
  TagsOssSpaceId = 1174,
  TagsOssStartDate = 1175,
  TagsOssSubName = 1176,
  TagsOssSysRevision = 1177,
  TagsOssSysType = 1178,
  TagsOssTags = 1179,
  TagsOssTagsBlogPost = 1180,
  TagsOssTagsChildren = 1181,
  TagsOssTagsContentfulId = 1182,
  TagsOssTagsCreatedAt = 1183,
  TagsOssTagsId = 1184,
  TagsOssTagsLevel = 1185,
  TagsOssTagsName = 1186,
  TagsOssTagsNodeLocale = 1187,
  TagsOssTagsOss = 1188,
  TagsOssTagsProject = 1189,
  TagsOssTagsSkillGrpup = 1190,
  TagsOssTagsSkillMap = 1191,
  TagsOssTagsSpaceId = 1192,
  TagsOssTagsUpdatedAt = 1193,
  TagsOssUpdatedAt = 1194,
  TagsParentChildren = 1195,
  TagsParentChildrenChildren = 1196,
  TagsParentChildrenId = 1197,
  TagsParentId = 1198,
  TagsParentInternalContent = 1199,
  TagsParentInternalContentDigest = 1200,
  TagsParentInternalContentFilePath = 1201,
  TagsParentInternalDescription = 1202,
  TagsParentInternalFieldOwners = 1203,
  TagsParentInternalIgnoreType = 1204,
  TagsParentInternalMediaType = 1205,
  TagsParentInternalOwner = 1206,
  TagsParentInternalType = 1207,
  TagsParentParentChildren = 1208,
  TagsParentParentId = 1209,
  TagsProject = 1210,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1211,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1212,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1213,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1214,
  TagsProjectChildren = 1215,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1216,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1217,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1218,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1219,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1220,
  TagsProjectChildrenChildren = 1221,
  TagsProjectChildrenId = 1222,
  TagsProjectContentfulId = 1223,
  TagsProjectCreatedAt = 1224,
  TagsProjectDetailChildren = 1225,
  TagsProjectDetailChildrenMdx = 1226,
  TagsProjectDetailDetail = 1227,
  TagsProjectDetailId = 1228,
  TagsProjectEndDate = 1229,
  TagsProjectIconChildren = 1230,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1231,
  TagsProjectIconContact = 1232,
  TagsProjectIconContentfulId = 1233,
  TagsProjectIconCreatedAt = 1234,
  TagsProjectIconHistory = 1235,
  TagsProjectIconId = 1236,
  TagsProjectIconName = 1237,
  TagsProjectIconNodeLocale = 1238,
  TagsProjectIconOss = 1239,
  TagsProjectIconProject = 1240,
  TagsProjectIconSpaceId = 1241,
  TagsProjectIconUpdatedAt = 1242,
  TagsProjectIconWhatICanDo = 1243,
  TagsProjectId = 1244,
  TagsProjectInternalContent = 1245,
  TagsProjectInternalContentDigest = 1246,
  TagsProjectInternalContentFilePath = 1247,
  TagsProjectInternalDescription = 1248,
  TagsProjectInternalFieldOwners = 1249,
  TagsProjectInternalIgnoreType = 1250,
  TagsProjectInternalMediaType = 1251,
  TagsProjectInternalOwner = 1252,
  TagsProjectInternalType = 1253,
  TagsProjectName = 1254,
  TagsProjectNodeLocale = 1255,
  TagsProjectParentChildren = 1256,
  TagsProjectParentId = 1257,
  TagsProjectSpaceId = 1258,
  TagsProjectStartDate = 1259,
  TagsProjectSubName = 1260,
  TagsProjectSysRevision = 1261,
  TagsProjectSysType = 1262,
  TagsProjectTags = 1263,
  TagsProjectTagsBlogPost = 1264,
  TagsProjectTagsChildren = 1265,
  TagsProjectTagsContentfulId = 1266,
  TagsProjectTagsCreatedAt = 1267,
  TagsProjectTagsId = 1268,
  TagsProjectTagsLevel = 1269,
  TagsProjectTagsName = 1270,
  TagsProjectTagsNodeLocale = 1271,
  TagsProjectTagsOss = 1272,
  TagsProjectTagsProject = 1273,
  TagsProjectTagsSkillGrpup = 1274,
  TagsProjectTagsSkillMap = 1275,
  TagsProjectTagsSpaceId = 1276,
  TagsProjectTagsUpdatedAt = 1277,
  TagsProjectUpdatedAt = 1278,
  TagsSkillGrpup = 1279,
  TagsSkillGrpupChildren = 1280,
  TagsSkillGrpupChildrenChildren = 1281,
  TagsSkillGrpupChildrenId = 1282,
  TagsSkillGrpupContentfulId = 1283,
  TagsSkillGrpupCreatedAt = 1284,
  TagsSkillGrpupId = 1285,
  TagsSkillGrpupInternalContent = 1286,
  TagsSkillGrpupInternalContentDigest = 1287,
  TagsSkillGrpupInternalContentFilePath = 1288,
  TagsSkillGrpupInternalDescription = 1289,
  TagsSkillGrpupInternalFieldOwners = 1290,
  TagsSkillGrpupInternalIgnoreType = 1291,
  TagsSkillGrpupInternalMediaType = 1292,
  TagsSkillGrpupInternalOwner = 1293,
  TagsSkillGrpupInternalType = 1294,
  TagsSkillGrpupName = 1295,
  TagsSkillGrpupNodeLocale = 1296,
  TagsSkillGrpupParentChildren = 1297,
  TagsSkillGrpupParentId = 1298,
  TagsSkillGrpupSkillMap = 1299,
  TagsSkillGrpupSkillMapChildren = 1300,
  TagsSkillGrpupSkillMapContentfulId = 1301,
  TagsSkillGrpupSkillMapCreatedAt = 1302,
  TagsSkillGrpupSkillMapExpanded = 1303,
  TagsSkillGrpupSkillMapId = 1304,
  TagsSkillGrpupSkillMapName = 1305,
  TagsSkillGrpupSkillMapNodeLocale = 1306,
  TagsSkillGrpupSkillMapSkillGroups = 1307,
  TagsSkillGrpupSkillMapSkills = 1308,
  TagsSkillGrpupSkillMapSortKey = 1309,
  TagsSkillGrpupSkillMapSpaceId = 1310,
  TagsSkillGrpupSkillMapUpdatedAt = 1311,
  TagsSkillGrpupSkills = 1312,
  TagsSkillGrpupSkillsBlogPost = 1313,
  TagsSkillGrpupSkillsChildren = 1314,
  TagsSkillGrpupSkillsContentfulId = 1315,
  TagsSkillGrpupSkillsCreatedAt = 1316,
  TagsSkillGrpupSkillsId = 1317,
  TagsSkillGrpupSkillsLevel = 1318,
  TagsSkillGrpupSkillsName = 1319,
  TagsSkillGrpupSkillsNodeLocale = 1320,
  TagsSkillGrpupSkillsOss = 1321,
  TagsSkillGrpupSkillsProject = 1322,
  TagsSkillGrpupSkillsSkillGrpup = 1323,
  TagsSkillGrpupSkillsSkillMap = 1324,
  TagsSkillGrpupSkillsSpaceId = 1325,
  TagsSkillGrpupSkillsUpdatedAt = 1326,
  TagsSkillGrpupSpaceId = 1327,
  TagsSkillGrpupSysRevision = 1328,
  TagsSkillGrpupSysType = 1329,
  TagsSkillGrpupUpdatedAt = 1330,
  TagsSkillMap = 1331,
  TagsSkillMapChildren = 1332,
  TagsSkillMapChildrenChildren = 1333,
  TagsSkillMapChildrenId = 1334,
  TagsSkillMapContentfulId = 1335,
  TagsSkillMapCreatedAt = 1336,
  TagsSkillMapExpanded = 1337,
  TagsSkillMapId = 1338,
  TagsSkillMapInternalContent = 1339,
  TagsSkillMapInternalContentDigest = 1340,
  TagsSkillMapInternalContentFilePath = 1341,
  TagsSkillMapInternalDescription = 1342,
  TagsSkillMapInternalFieldOwners = 1343,
  TagsSkillMapInternalIgnoreType = 1344,
  TagsSkillMapInternalMediaType = 1345,
  TagsSkillMapInternalOwner = 1346,
  TagsSkillMapInternalType = 1347,
  TagsSkillMapName = 1348,
  TagsSkillMapNodeLocale = 1349,
  TagsSkillMapParentChildren = 1350,
  TagsSkillMapParentId = 1351,
  TagsSkillMapSkillGroups = 1352,
  TagsSkillMapSkillGroupsChildren = 1353,
  TagsSkillMapSkillGroupsContentfulId = 1354,
  TagsSkillMapSkillGroupsCreatedAt = 1355,
  TagsSkillMapSkillGroupsId = 1356,
  TagsSkillMapSkillGroupsName = 1357,
  TagsSkillMapSkillGroupsNodeLocale = 1358,
  TagsSkillMapSkillGroupsSkillMap = 1359,
  TagsSkillMapSkillGroupsSkills = 1360,
  TagsSkillMapSkillGroupsSpaceId = 1361,
  TagsSkillMapSkillGroupsUpdatedAt = 1362,
  TagsSkillMapSkills = 1363,
  TagsSkillMapSkillsBlogPost = 1364,
  TagsSkillMapSkillsChildren = 1365,
  TagsSkillMapSkillsContentfulId = 1366,
  TagsSkillMapSkillsCreatedAt = 1367,
  TagsSkillMapSkillsId = 1368,
  TagsSkillMapSkillsLevel = 1369,
  TagsSkillMapSkillsName = 1370,
  TagsSkillMapSkillsNodeLocale = 1371,
  TagsSkillMapSkillsOss = 1372,
  TagsSkillMapSkillsProject = 1373,
  TagsSkillMapSkillsSkillGrpup = 1374,
  TagsSkillMapSkillsSkillMap = 1375,
  TagsSkillMapSkillsSpaceId = 1376,
  TagsSkillMapSkillsUpdatedAt = 1377,
  TagsSkillMapSortKey = 1378,
  TagsSkillMapSpaceId = 1379,
  TagsSkillMapSysRevision = 1380,
  TagsSkillMapSysType = 1381,
  TagsSkillMapUpdatedAt = 1382,
  TagsSpaceId = 1383,
  TagsSysRevision = 1384,
  TagsSysType = 1385,
  TagsUpdatedAt = 1386,
  UpdatedAt = 1387
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
  ChildContentfulProjectDetailTextNodeChildMdxInternalContentFilePath = 14,
  ChildContentfulProjectDetailTextNodeChildMdxInternalDescription = 15,
  ChildContentfulProjectDetailTextNodeChildMdxInternalFieldOwners = 16,
  ChildContentfulProjectDetailTextNodeChildMdxInternalIgnoreType = 17,
  ChildContentfulProjectDetailTextNodeChildMdxInternalMediaType = 18,
  ChildContentfulProjectDetailTextNodeChildMdxInternalOwner = 19,
  ChildContentfulProjectDetailTextNodeChildMdxInternalType = 20,
  ChildContentfulProjectDetailTextNodeChildMdxMdxAst = 21,
  ChildContentfulProjectDetailTextNodeChildMdxParentChildren = 22,
  ChildContentfulProjectDetailTextNodeChildMdxParentId = 23,
  ChildContentfulProjectDetailTextNodeChildMdxRawBody = 24,
  ChildContentfulProjectDetailTextNodeChildMdxSlug = 25,
  ChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 26,
  ChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 27,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountParagraphs = 28,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountSentences = 29,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountWords = 30,
  ChildContentfulProjectDetailTextNodeChildren = 31,
  ChildContentfulProjectDetailTextNodeChildrenMdx = 32,
  ChildContentfulProjectDetailTextNodeChildrenMdxBody = 33,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildren = 34,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildrenChildren = 35,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildrenId = 36,
  ChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 37,
  ChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 38,
  ChildContentfulProjectDetailTextNodeChildrenMdxFrontmatterTitle = 39,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 40,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadingsDepth = 41,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadingsValue = 42,
  ChildContentfulProjectDetailTextNodeChildrenMdxHtml = 43,
  ChildContentfulProjectDetailTextNodeChildrenMdxId = 44,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalContent = 45,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalContentDigest = 46,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalContentFilePath = 47,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalDescription = 48,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalFieldOwners = 49,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalIgnoreType = 50,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalMediaType = 51,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalOwner = 52,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalType = 53,
  ChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 54,
  ChildContentfulProjectDetailTextNodeChildrenMdxParentChildren = 55,
  ChildContentfulProjectDetailTextNodeChildrenMdxParentId = 56,
  ChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 57,
  ChildContentfulProjectDetailTextNodeChildrenMdxSlug = 58,
  ChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 59,
  ChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 60,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountParagraphs = 61,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountSentences = 62,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountWords = 63,
  ChildContentfulProjectDetailTextNodeChildrenChildren = 64,
  ChildContentfulProjectDetailTextNodeChildrenChildrenChildren = 65,
  ChildContentfulProjectDetailTextNodeChildrenChildrenId = 66,
  ChildContentfulProjectDetailTextNodeChildrenId = 67,
  ChildContentfulProjectDetailTextNodeChildrenInternalContent = 68,
  ChildContentfulProjectDetailTextNodeChildrenInternalContentDigest = 69,
  ChildContentfulProjectDetailTextNodeChildrenInternalContentFilePath = 70,
  ChildContentfulProjectDetailTextNodeChildrenInternalDescription = 71,
  ChildContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 72,
  ChildContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 73,
  ChildContentfulProjectDetailTextNodeChildrenInternalMediaType = 74,
  ChildContentfulProjectDetailTextNodeChildrenInternalOwner = 75,
  ChildContentfulProjectDetailTextNodeChildrenInternalType = 76,
  ChildContentfulProjectDetailTextNodeChildrenParentChildren = 77,
  ChildContentfulProjectDetailTextNodeChildrenParentId = 78,
  ChildContentfulProjectDetailTextNodeDetail = 79,
  ChildContentfulProjectDetailTextNodeId = 80,
  ChildContentfulProjectDetailTextNodeInternalContent = 81,
  ChildContentfulProjectDetailTextNodeInternalContentDigest = 82,
  ChildContentfulProjectDetailTextNodeInternalContentFilePath = 83,
  ChildContentfulProjectDetailTextNodeInternalDescription = 84,
  ChildContentfulProjectDetailTextNodeInternalFieldOwners = 85,
  ChildContentfulProjectDetailTextNodeInternalIgnoreType = 86,
  ChildContentfulProjectDetailTextNodeInternalMediaType = 87,
  ChildContentfulProjectDetailTextNodeInternalOwner = 88,
  ChildContentfulProjectDetailTextNodeInternalType = 89,
  ChildContentfulProjectDetailTextNodeParentChildren = 90,
  ChildContentfulProjectDetailTextNodeParentChildrenChildren = 91,
  ChildContentfulProjectDetailTextNodeParentChildrenId = 92,
  ChildContentfulProjectDetailTextNodeParentId = 93,
  ChildContentfulProjectDetailTextNodeParentInternalContent = 94,
  ChildContentfulProjectDetailTextNodeParentInternalContentDigest = 95,
  ChildContentfulProjectDetailTextNodeParentInternalContentFilePath = 96,
  ChildContentfulProjectDetailTextNodeParentInternalDescription = 97,
  ChildContentfulProjectDetailTextNodeParentInternalFieldOwners = 98,
  ChildContentfulProjectDetailTextNodeParentInternalIgnoreType = 99,
  ChildContentfulProjectDetailTextNodeParentInternalMediaType = 100,
  ChildContentfulProjectDetailTextNodeParentInternalOwner = 101,
  ChildContentfulProjectDetailTextNodeParentInternalType = 102,
  ChildContentfulProjectDetailTextNodeParentParentChildren = 103,
  ChildContentfulProjectDetailTextNodeParentParentId = 104,
  ChildContentfulProjectDetailTextNodeSysType = 105,
  Children = 106,
  ChildrenContentfulProjectDetailTextNode = 107,
  ChildrenContentfulProjectDetailTextNodeChildMdxBody = 108,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildren = 109,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildrenChildren = 110,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildrenId = 111,
  ChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 112,
  ChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 113,
  ChildrenContentfulProjectDetailTextNodeChildMdxFrontmatterTitle = 114,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 115,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadingsDepth = 116,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadingsValue = 117,
  ChildrenContentfulProjectDetailTextNodeChildMdxHtml = 118,
  ChildrenContentfulProjectDetailTextNodeChildMdxId = 119,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalContent = 120,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalContentDigest = 121,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalContentFilePath = 122,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalDescription = 123,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalFieldOwners = 124,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalIgnoreType = 125,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalMediaType = 126,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalOwner = 127,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalType = 128,
  ChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 129,
  ChildrenContentfulProjectDetailTextNodeChildMdxParentChildren = 130,
  ChildrenContentfulProjectDetailTextNodeChildMdxParentId = 131,
  ChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 132,
  ChildrenContentfulProjectDetailTextNodeChildMdxSlug = 133,
  ChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 134,
  ChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 135,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountParagraphs = 136,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountSentences = 137,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountWords = 138,
  ChildrenContentfulProjectDetailTextNodeChildren = 139,
  ChildrenContentfulProjectDetailTextNodeChildrenMdx = 140,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 141,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 142,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildrenChildren = 143,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildrenId = 144,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 145,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 146,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxFrontmatterTitle = 147,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 148,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadingsDepth = 149,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadingsValue = 150,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 151,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxId = 152,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalContent = 153,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalContentDigest = 154,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalContentFilePath = 155,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalDescription = 156,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalFieldOwners = 157,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalIgnoreType = 158,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalMediaType = 159,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalOwner = 160,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalType = 161,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 162,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxParentChildren = 163,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxParentId = 164,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 165,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 166,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 167,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 168,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountParagraphs = 169,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountSentences = 170,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountWords = 171,
  ChildrenContentfulProjectDetailTextNodeChildrenChildren = 172,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenChildren = 173,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenId = 174,
  ChildrenContentfulProjectDetailTextNodeChildrenId = 175,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContent = 176,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContentDigest = 177,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContentFilePath = 178,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalDescription = 179,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 180,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 181,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalMediaType = 182,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalOwner = 183,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalType = 184,
  ChildrenContentfulProjectDetailTextNodeChildrenParentChildren = 185,
  ChildrenContentfulProjectDetailTextNodeChildrenParentId = 186,
  ChildrenContentfulProjectDetailTextNodeDetail = 187,
  ChildrenContentfulProjectDetailTextNodeId = 188,
  ChildrenContentfulProjectDetailTextNodeInternalContent = 189,
  ChildrenContentfulProjectDetailTextNodeInternalContentDigest = 190,
  ChildrenContentfulProjectDetailTextNodeInternalContentFilePath = 191,
  ChildrenContentfulProjectDetailTextNodeInternalDescription = 192,
  ChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 193,
  ChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 194,
  ChildrenContentfulProjectDetailTextNodeInternalMediaType = 195,
  ChildrenContentfulProjectDetailTextNodeInternalOwner = 196,
  ChildrenContentfulProjectDetailTextNodeInternalType = 197,
  ChildrenContentfulProjectDetailTextNodeParentChildren = 198,
  ChildrenContentfulProjectDetailTextNodeParentChildrenChildren = 199,
  ChildrenContentfulProjectDetailTextNodeParentChildrenId = 200,
  ChildrenContentfulProjectDetailTextNodeParentId = 201,
  ChildrenContentfulProjectDetailTextNodeParentInternalContent = 202,
  ChildrenContentfulProjectDetailTextNodeParentInternalContentDigest = 203,
  ChildrenContentfulProjectDetailTextNodeParentInternalContentFilePath = 204,
  ChildrenContentfulProjectDetailTextNodeParentInternalDescription = 205,
  ChildrenContentfulProjectDetailTextNodeParentInternalFieldOwners = 206,
  ChildrenContentfulProjectDetailTextNodeParentInternalIgnoreType = 207,
  ChildrenContentfulProjectDetailTextNodeParentInternalMediaType = 208,
  ChildrenContentfulProjectDetailTextNodeParentInternalOwner = 209,
  ChildrenContentfulProjectDetailTextNodeParentInternalType = 210,
  ChildrenContentfulProjectDetailTextNodeParentParentChildren = 211,
  ChildrenContentfulProjectDetailTextNodeParentParentId = 212,
  ChildrenContentfulProjectDetailTextNodeSysType = 213,
  ChildrenChildren = 214,
  ChildrenChildrenChildren = 215,
  ChildrenChildrenChildrenChildren = 216,
  ChildrenChildrenChildrenId = 217,
  ChildrenChildrenId = 218,
  ChildrenChildrenInternalContent = 219,
  ChildrenChildrenInternalContentDigest = 220,
  ChildrenChildrenInternalContentFilePath = 221,
  ChildrenChildrenInternalDescription = 222,
  ChildrenChildrenInternalFieldOwners = 223,
  ChildrenChildrenInternalIgnoreType = 224,
  ChildrenChildrenInternalMediaType = 225,
  ChildrenChildrenInternalOwner = 226,
  ChildrenChildrenInternalType = 227,
  ChildrenChildrenParentChildren = 228,
  ChildrenChildrenParentId = 229,
  ChildrenId = 230,
  ChildrenInternalContent = 231,
  ChildrenInternalContentDigest = 232,
  ChildrenInternalContentFilePath = 233,
  ChildrenInternalDescription = 234,
  ChildrenInternalFieldOwners = 235,
  ChildrenInternalIgnoreType = 236,
  ChildrenInternalMediaType = 237,
  ChildrenInternalOwner = 238,
  ChildrenInternalType = 239,
  ChildrenParentChildren = 240,
  ChildrenParentChildrenChildren = 241,
  ChildrenParentChildrenId = 242,
  ChildrenParentId = 243,
  ChildrenParentInternalContent = 244,
  ChildrenParentInternalContentDigest = 245,
  ChildrenParentInternalContentFilePath = 246,
  ChildrenParentInternalDescription = 247,
  ChildrenParentInternalFieldOwners = 248,
  ChildrenParentInternalIgnoreType = 249,
  ChildrenParentInternalMediaType = 250,
  ChildrenParentInternalOwner = 251,
  ChildrenParentInternalType = 252,
  ChildrenParentParentChildren = 253,
  ChildrenParentParentId = 254,
  ContentfulId = 255,
  CreatedAt = 256,
  DetailChildMdxBody = 257,
  DetailChildMdxChildren = 258,
  DetailChildMdxChildrenChildren = 259,
  DetailChildMdxChildrenId = 260,
  DetailChildMdxExcerpt = 261,
  DetailChildMdxFileAbsolutePath = 262,
  DetailChildMdxFrontmatterTitle = 263,
  DetailChildMdxHeadings = 264,
  DetailChildMdxHeadingsDepth = 265,
  DetailChildMdxHeadingsValue = 266,
  DetailChildMdxHtml = 267,
  DetailChildMdxId = 268,
  DetailChildMdxInternalContent = 269,
  DetailChildMdxInternalContentDigest = 270,
  DetailChildMdxInternalContentFilePath = 271,
  DetailChildMdxInternalDescription = 272,
  DetailChildMdxInternalFieldOwners = 273,
  DetailChildMdxInternalIgnoreType = 274,
  DetailChildMdxInternalMediaType = 275,
  DetailChildMdxInternalOwner = 276,
  DetailChildMdxInternalType = 277,
  DetailChildMdxMdxAst = 278,
  DetailChildMdxParentChildren = 279,
  DetailChildMdxParentId = 280,
  DetailChildMdxRawBody = 281,
  DetailChildMdxSlug = 282,
  DetailChildMdxTableOfContents = 283,
  DetailChildMdxTimeToRead = 284,
  DetailChildMdxWordCountParagraphs = 285,
  DetailChildMdxWordCountSentences = 286,
  DetailChildMdxWordCountWords = 287,
  DetailChildren = 288,
  DetailChildrenMdx = 289,
  DetailChildrenMdxBody = 290,
  DetailChildrenMdxChildren = 291,
  DetailChildrenMdxChildrenChildren = 292,
  DetailChildrenMdxChildrenId = 293,
  DetailChildrenMdxExcerpt = 294,
  DetailChildrenMdxFileAbsolutePath = 295,
  DetailChildrenMdxFrontmatterTitle = 296,
  DetailChildrenMdxHeadings = 297,
  DetailChildrenMdxHeadingsDepth = 298,
  DetailChildrenMdxHeadingsValue = 299,
  DetailChildrenMdxHtml = 300,
  DetailChildrenMdxId = 301,
  DetailChildrenMdxInternalContent = 302,
  DetailChildrenMdxInternalContentDigest = 303,
  DetailChildrenMdxInternalContentFilePath = 304,
  DetailChildrenMdxInternalDescription = 305,
  DetailChildrenMdxInternalFieldOwners = 306,
  DetailChildrenMdxInternalIgnoreType = 307,
  DetailChildrenMdxInternalMediaType = 308,
  DetailChildrenMdxInternalOwner = 309,
  DetailChildrenMdxInternalType = 310,
  DetailChildrenMdxMdxAst = 311,
  DetailChildrenMdxParentChildren = 312,
  DetailChildrenMdxParentId = 313,
  DetailChildrenMdxRawBody = 314,
  DetailChildrenMdxSlug = 315,
  DetailChildrenMdxTableOfContents = 316,
  DetailChildrenMdxTimeToRead = 317,
  DetailChildrenMdxWordCountParagraphs = 318,
  DetailChildrenMdxWordCountSentences = 319,
  DetailChildrenMdxWordCountWords = 320,
  DetailChildrenChildren = 321,
  DetailChildrenChildrenChildren = 322,
  DetailChildrenChildrenId = 323,
  DetailChildrenId = 324,
  DetailChildrenInternalContent = 325,
  DetailChildrenInternalContentDigest = 326,
  DetailChildrenInternalContentFilePath = 327,
  DetailChildrenInternalDescription = 328,
  DetailChildrenInternalFieldOwners = 329,
  DetailChildrenInternalIgnoreType = 330,
  DetailChildrenInternalMediaType = 331,
  DetailChildrenInternalOwner = 332,
  DetailChildrenInternalType = 333,
  DetailChildrenParentChildren = 334,
  DetailChildrenParentId = 335,
  DetailDetail = 336,
  DetailId = 337,
  DetailInternalContent = 338,
  DetailInternalContentDigest = 339,
  DetailInternalContentFilePath = 340,
  DetailInternalDescription = 341,
  DetailInternalFieldOwners = 342,
  DetailInternalIgnoreType = 343,
  DetailInternalMediaType = 344,
  DetailInternalOwner = 345,
  DetailInternalType = 346,
  DetailParentChildren = 347,
  DetailParentChildrenChildren = 348,
  DetailParentChildrenId = 349,
  DetailParentId = 350,
  DetailParentInternalContent = 351,
  DetailParentInternalContentDigest = 352,
  DetailParentInternalContentFilePath = 353,
  DetailParentInternalDescription = 354,
  DetailParentInternalFieldOwners = 355,
  DetailParentInternalIgnoreType = 356,
  DetailParentInternalMediaType = 357,
  DetailParentInternalOwner = 358,
  DetailParentInternalType = 359,
  DetailParentParentChildren = 360,
  DetailParentParentId = 361,
  DetailSysType = 362,
  EndDate = 363,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 364,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 365,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 366,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 367,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 368,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 369,
  IconChildContentfulIconSvgTextNodeChildMdxId = 370,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 371,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 372,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 373,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 374,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 375,
  IconChildContentfulIconSvgTextNodeChildren = 376,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 377,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 378,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 379,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 380,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 381,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 382,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 383,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 384,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 385,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 386,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 387,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 388,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 389,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 390,
  IconChildContentfulIconSvgTextNodeChildrenId = 391,
  IconChildContentfulIconSvgTextNodeId = 392,
  IconChildContentfulIconSvgTextNodeInternalContent = 393,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 394,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 395,
  IconChildContentfulIconSvgTextNodeInternalDescription = 396,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 397,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 398,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 399,
  IconChildContentfulIconSvgTextNodeInternalOwner = 400,
  IconChildContentfulIconSvgTextNodeInternalType = 401,
  IconChildContentfulIconSvgTextNodeParentChildren = 402,
  IconChildContentfulIconSvgTextNodeParentId = 403,
  IconChildContentfulIconSvgTextNodeSvg = 404,
  IconChildContentfulIconSvgTextNodeSysType = 405,
  IconChildren = 406,
  IconChildrenContentfulIconSvgTextNode = 407,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 408,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 409,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 410,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 411,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 412,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 413,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 414,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 415,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 416,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 417,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 418,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 419,
  IconChildrenContentfulIconSvgTextNodeChildren = 420,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 421,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 422,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 423,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 424,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 425,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 426,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 427,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 428,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 429,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 430,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 431,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 432,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 433,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 434,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 435,
  IconChildrenContentfulIconSvgTextNodeId = 436,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 437,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 438,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 439,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 440,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 441,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 442,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 443,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 444,
  IconChildrenContentfulIconSvgTextNodeInternalType = 445,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 446,
  IconChildrenContentfulIconSvgTextNodeParentId = 447,
  IconChildrenContentfulIconSvgTextNodeSvg = 448,
  IconChildrenContentfulIconSvgTextNodeSysType = 449,
  IconChildrenChildren = 450,
  IconChildrenChildrenChildren = 451,
  IconChildrenChildrenId = 452,
  IconChildrenId = 453,
  IconChildrenInternalContent = 454,
  IconChildrenInternalContentDigest = 455,
  IconChildrenInternalContentFilePath = 456,
  IconChildrenInternalDescription = 457,
  IconChildrenInternalFieldOwners = 458,
  IconChildrenInternalIgnoreType = 459,
  IconChildrenInternalMediaType = 460,
  IconChildrenInternalOwner = 461,
  IconChildrenInternalType = 462,
  IconChildrenParentChildren = 463,
  IconChildrenParentId = 464,
  IconContact = 465,
  IconContactChildren = 466,
  IconContactChildrenChildren = 467,
  IconContactChildrenId = 468,
  IconContactContentfulId = 469,
  IconContactCreatedAt = 470,
  IconContactHref = 471,
  IconContactIconSvgDarkChildren = 472,
  IconContactIconSvgDarkContentfulId = 473,
  IconContactIconSvgDarkCreatedAt = 474,
  IconContactIconSvgDarkDescription = 475,
  IconContactIconSvgDarkFilename = 476,
  IconContactIconSvgDarkFilesize = 477,
  IconContactIconSvgDarkGatsbyImage = 478,
  IconContactIconSvgDarkGatsbyImageData = 479,
  IconContactIconSvgDarkHeight = 480,
  IconContactIconSvgDarkId = 481,
  IconContactIconSvgDarkMimeType = 482,
  IconContactIconSvgDarkNodeLocale = 483,
  IconContactIconSvgDarkPlaceholderUrl = 484,
  IconContactIconSvgDarkPublicUrl = 485,
  IconContactIconSvgDarkSize = 486,
  IconContactIconSvgDarkSpaceId = 487,
  IconContactIconSvgDarkTitle = 488,
  IconContactIconSvgDarkUpdatedAt = 489,
  IconContactIconSvgDarkUrl = 490,
  IconContactIconSvgDarkWidth = 491,
  IconContactIconSvgLightChildren = 492,
  IconContactIconSvgLightContentfulId = 493,
  IconContactIconSvgLightCreatedAt = 494,
  IconContactIconSvgLightDescription = 495,
  IconContactIconSvgLightFilename = 496,
  IconContactIconSvgLightFilesize = 497,
  IconContactIconSvgLightGatsbyImage = 498,
  IconContactIconSvgLightGatsbyImageData = 499,
  IconContactIconSvgLightHeight = 500,
  IconContactIconSvgLightId = 501,
  IconContactIconSvgLightMimeType = 502,
  IconContactIconSvgLightNodeLocale = 503,
  IconContactIconSvgLightPlaceholderUrl = 504,
  IconContactIconSvgLightPublicUrl = 505,
  IconContactIconSvgLightSize = 506,
  IconContactIconSvgLightSpaceId = 507,
  IconContactIconSvgLightTitle = 508,
  IconContactIconSvgLightUpdatedAt = 509,
  IconContactIconSvgLightUrl = 510,
  IconContactIconSvgLightWidth = 511,
  IconContactIconChildren = 512,
  IconContactIconChildrenContentfulIconSvgTextNode = 513,
  IconContactIconContact = 514,
  IconContactIconContentfulId = 515,
  IconContactIconCreatedAt = 516,
  IconContactIconHistory = 517,
  IconContactIconId = 518,
  IconContactIconName = 519,
  IconContactIconNodeLocale = 520,
  IconContactIconOss = 521,
  IconContactIconProject = 522,
  IconContactIconSpaceId = 523,
  IconContactIconUpdatedAt = 524,
  IconContactIconWhatICanDo = 525,
  IconContactId = 526,
  IconContactInternalContent = 527,
  IconContactInternalContentDigest = 528,
  IconContactInternalContentFilePath = 529,
  IconContactInternalDescription = 530,
  IconContactInternalFieldOwners = 531,
  IconContactInternalIgnoreType = 532,
  IconContactInternalMediaType = 533,
  IconContactInternalOwner = 534,
  IconContactInternalType = 535,
  IconContactName = 536,
  IconContactNodeLocale = 537,
  IconContactParentChildren = 538,
  IconContactParentId = 539,
  IconContactSortKey = 540,
  IconContactSpaceId = 541,
  IconContactSubName = 542,
  IconContactSysRevision = 543,
  IconContactSysType = 544,
  IconContactUpdatedAt = 545,
  IconContentfulId = 546,
  IconCreatedAt = 547,
  IconHistory = 548,
  IconHistoryChildren = 549,
  IconHistoryChildrenChildren = 550,
  IconHistoryChildrenId = 551,
  IconHistoryContentfulId = 552,
  IconHistoryCreatedAt = 553,
  IconHistoryDate = 554,
  IconHistoryIconChildren = 555,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 556,
  IconHistoryIconContact = 557,
  IconHistoryIconContentfulId = 558,
  IconHistoryIconCreatedAt = 559,
  IconHistoryIconHistory = 560,
  IconHistoryIconId = 561,
  IconHistoryIconName = 562,
  IconHistoryIconNodeLocale = 563,
  IconHistoryIconOss = 564,
  IconHistoryIconProject = 565,
  IconHistoryIconSpaceId = 566,
  IconHistoryIconUpdatedAt = 567,
  IconHistoryIconWhatICanDo = 568,
  IconHistoryId = 569,
  IconHistoryInternalContent = 570,
  IconHistoryInternalContentDigest = 571,
  IconHistoryInternalContentFilePath = 572,
  IconHistoryInternalDescription = 573,
  IconHistoryInternalFieldOwners = 574,
  IconHistoryInternalIgnoreType = 575,
  IconHistoryInternalMediaType = 576,
  IconHistoryInternalOwner = 577,
  IconHistoryInternalType = 578,
  IconHistoryName = 579,
  IconHistoryNodeLocale = 580,
  IconHistoryParentChildren = 581,
  IconHistoryParentId = 582,
  IconHistorySpaceId = 583,
  IconHistorySubName = 584,
  IconHistorySysRevision = 585,
  IconHistorySysType = 586,
  IconHistoryUpdatedAt = 587,
  IconId = 588,
  IconInternalContent = 589,
  IconInternalContentDigest = 590,
  IconInternalContentFilePath = 591,
  IconInternalDescription = 592,
  IconInternalFieldOwners = 593,
  IconInternalIgnoreType = 594,
  IconInternalMediaType = 595,
  IconInternalOwner = 596,
  IconInternalType = 597,
  IconName = 598,
  IconNodeLocale = 599,
  IconOss = 600,
  IconOssChildContentfulOssDetailTextNodeChildren = 601,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 602,
  IconOssChildContentfulOssDetailTextNodeDetail = 603,
  IconOssChildContentfulOssDetailTextNodeId = 604,
  IconOssChildren = 605,
  IconOssChildrenContentfulOssDetailTextNode = 606,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 607,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 608,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 609,
  IconOssChildrenContentfulOssDetailTextNodeId = 610,
  IconOssChildrenChildren = 611,
  IconOssChildrenId = 612,
  IconOssContentfulId = 613,
  IconOssCreatedAt = 614,
  IconOssDetailChildren = 615,
  IconOssDetailChildrenMdx = 616,
  IconOssDetailDetail = 617,
  IconOssDetailId = 618,
  IconOssHref = 619,
  IconOssIconChildren = 620,
  IconOssIconChildrenContentfulIconSvgTextNode = 621,
  IconOssIconContact = 622,
  IconOssIconContentfulId = 623,
  IconOssIconCreatedAt = 624,
  IconOssIconHistory = 625,
  IconOssIconId = 626,
  IconOssIconName = 627,
  IconOssIconNodeLocale = 628,
  IconOssIconOss = 629,
  IconOssIconProject = 630,
  IconOssIconSpaceId = 631,
  IconOssIconUpdatedAt = 632,
  IconOssIconWhatICanDo = 633,
  IconOssId = 634,
  IconOssImageChildren = 635,
  IconOssImageContentfulId = 636,
  IconOssImageCreatedAt = 637,
  IconOssImageDescription = 638,
  IconOssImageFilename = 639,
  IconOssImageFilesize = 640,
  IconOssImageGatsbyImage = 641,
  IconOssImageGatsbyImageData = 642,
  IconOssImageHeight = 643,
  IconOssImageId = 644,
  IconOssImageMimeType = 645,
  IconOssImageNodeLocale = 646,
  IconOssImagePlaceholderUrl = 647,
  IconOssImagePublicUrl = 648,
  IconOssImageSize = 649,
  IconOssImageSpaceId = 650,
  IconOssImageTitle = 651,
  IconOssImageUpdatedAt = 652,
  IconOssImageUrl = 653,
  IconOssImageWidth = 654,
  IconOssInternalContent = 655,
  IconOssInternalContentDigest = 656,
  IconOssInternalContentFilePath = 657,
  IconOssInternalDescription = 658,
  IconOssInternalFieldOwners = 659,
  IconOssInternalIgnoreType = 660,
  IconOssInternalMediaType = 661,
  IconOssInternalOwner = 662,
  IconOssInternalType = 663,
  IconOssName = 664,
  IconOssNodeLocale = 665,
  IconOssParentChildren = 666,
  IconOssParentId = 667,
  IconOssSpaceId = 668,
  IconOssStartDate = 669,
  IconOssSubName = 670,
  IconOssSysRevision = 671,
  IconOssSysType = 672,
  IconOssTags = 673,
  IconOssTagsBlogPost = 674,
  IconOssTagsChildren = 675,
  IconOssTagsContentfulId = 676,
  IconOssTagsCreatedAt = 677,
  IconOssTagsId = 678,
  IconOssTagsLevel = 679,
  IconOssTagsName = 680,
  IconOssTagsNodeLocale = 681,
  IconOssTagsOss = 682,
  IconOssTagsProject = 683,
  IconOssTagsSkillGrpup = 684,
  IconOssTagsSkillMap = 685,
  IconOssTagsSpaceId = 686,
  IconOssTagsUpdatedAt = 687,
  IconOssUpdatedAt = 688,
  IconParentChildren = 689,
  IconParentChildrenChildren = 690,
  IconParentChildrenId = 691,
  IconParentId = 692,
  IconParentInternalContent = 693,
  IconParentInternalContentDigest = 694,
  IconParentInternalContentFilePath = 695,
  IconParentInternalDescription = 696,
  IconParentInternalFieldOwners = 697,
  IconParentInternalIgnoreType = 698,
  IconParentInternalMediaType = 699,
  IconParentInternalOwner = 700,
  IconParentInternalType = 701,
  IconParentParentChildren = 702,
  IconParentParentId = 703,
  IconProject = 704,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 705,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 706,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 707,
  IconProjectChildContentfulProjectDetailTextNodeId = 708,
  IconProjectChildren = 709,
  IconProjectChildrenContentfulProjectDetailTextNode = 710,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 711,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 712,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 713,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 714,
  IconProjectChildrenChildren = 715,
  IconProjectChildrenId = 716,
  IconProjectContentfulId = 717,
  IconProjectCreatedAt = 718,
  IconProjectDetailChildren = 719,
  IconProjectDetailChildrenMdx = 720,
  IconProjectDetailDetail = 721,
  IconProjectDetailId = 722,
  IconProjectEndDate = 723,
  IconProjectIconChildren = 724,
  IconProjectIconChildrenContentfulIconSvgTextNode = 725,
  IconProjectIconContact = 726,
  IconProjectIconContentfulId = 727,
  IconProjectIconCreatedAt = 728,
  IconProjectIconHistory = 729,
  IconProjectIconId = 730,
  IconProjectIconName = 731,
  IconProjectIconNodeLocale = 732,
  IconProjectIconOss = 733,
  IconProjectIconProject = 734,
  IconProjectIconSpaceId = 735,
  IconProjectIconUpdatedAt = 736,
  IconProjectIconWhatICanDo = 737,
  IconProjectId = 738,
  IconProjectInternalContent = 739,
  IconProjectInternalContentDigest = 740,
  IconProjectInternalContentFilePath = 741,
  IconProjectInternalDescription = 742,
  IconProjectInternalFieldOwners = 743,
  IconProjectInternalIgnoreType = 744,
  IconProjectInternalMediaType = 745,
  IconProjectInternalOwner = 746,
  IconProjectInternalType = 747,
  IconProjectName = 748,
  IconProjectNodeLocale = 749,
  IconProjectParentChildren = 750,
  IconProjectParentId = 751,
  IconProjectSpaceId = 752,
  IconProjectStartDate = 753,
  IconProjectSubName = 754,
  IconProjectSysRevision = 755,
  IconProjectSysType = 756,
  IconProjectTags = 757,
  IconProjectTagsBlogPost = 758,
  IconProjectTagsChildren = 759,
  IconProjectTagsContentfulId = 760,
  IconProjectTagsCreatedAt = 761,
  IconProjectTagsId = 762,
  IconProjectTagsLevel = 763,
  IconProjectTagsName = 764,
  IconProjectTagsNodeLocale = 765,
  IconProjectTagsOss = 766,
  IconProjectTagsProject = 767,
  IconProjectTagsSkillGrpup = 768,
  IconProjectTagsSkillMap = 769,
  IconProjectTagsSpaceId = 770,
  IconProjectTagsUpdatedAt = 771,
  IconProjectUpdatedAt = 772,
  IconSpaceId = 773,
  IconSvgChildMdxBody = 774,
  IconSvgChildMdxChildren = 775,
  IconSvgChildMdxExcerpt = 776,
  IconSvgChildMdxFileAbsolutePath = 777,
  IconSvgChildMdxHeadings = 778,
  IconSvgChildMdxHtml = 779,
  IconSvgChildMdxId = 780,
  IconSvgChildMdxMdxAst = 781,
  IconSvgChildMdxRawBody = 782,
  IconSvgChildMdxSlug = 783,
  IconSvgChildMdxTableOfContents = 784,
  IconSvgChildMdxTimeToRead = 785,
  IconSvgChildren = 786,
  IconSvgChildrenMdx = 787,
  IconSvgChildrenMdxBody = 788,
  IconSvgChildrenMdxChildren = 789,
  IconSvgChildrenMdxExcerpt = 790,
  IconSvgChildrenMdxFileAbsolutePath = 791,
  IconSvgChildrenMdxHeadings = 792,
  IconSvgChildrenMdxHtml = 793,
  IconSvgChildrenMdxId = 794,
  IconSvgChildrenMdxMdxAst = 795,
  IconSvgChildrenMdxRawBody = 796,
  IconSvgChildrenMdxSlug = 797,
  IconSvgChildrenMdxTableOfContents = 798,
  IconSvgChildrenMdxTimeToRead = 799,
  IconSvgChildrenChildren = 800,
  IconSvgChildrenId = 801,
  IconSvgId = 802,
  IconSvgInternalContent = 803,
  IconSvgInternalContentDigest = 804,
  IconSvgInternalContentFilePath = 805,
  IconSvgInternalDescription = 806,
  IconSvgInternalFieldOwners = 807,
  IconSvgInternalIgnoreType = 808,
  IconSvgInternalMediaType = 809,
  IconSvgInternalOwner = 810,
  IconSvgInternalType = 811,
  IconSvgParentChildren = 812,
  IconSvgParentId = 813,
  IconSvgSvg = 814,
  IconSvgSysType = 815,
  IconSysRevision = 816,
  IconSysType = 817,
  IconUpdatedAt = 818,
  IconWhatICanDo = 819,
  IconWhatICanDoChildren = 820,
  IconWhatICanDoChildrenChildren = 821,
  IconWhatICanDoChildrenId = 822,
  IconWhatICanDoContentfulId = 823,
  IconWhatICanDoCreatedAt = 824,
  IconWhatICanDoIconChildren = 825,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 826,
  IconWhatICanDoIconContact = 827,
  IconWhatICanDoIconContentfulId = 828,
  IconWhatICanDoIconCreatedAt = 829,
  IconWhatICanDoIconHistory = 830,
  IconWhatICanDoIconId = 831,
  IconWhatICanDoIconName = 832,
  IconWhatICanDoIconNodeLocale = 833,
  IconWhatICanDoIconOss = 834,
  IconWhatICanDoIconProject = 835,
  IconWhatICanDoIconSpaceId = 836,
  IconWhatICanDoIconUpdatedAt = 837,
  IconWhatICanDoIconWhatICanDo = 838,
  IconWhatICanDoId = 839,
  IconWhatICanDoInternalContent = 840,
  IconWhatICanDoInternalContentDigest = 841,
  IconWhatICanDoInternalContentFilePath = 842,
  IconWhatICanDoInternalDescription = 843,
  IconWhatICanDoInternalFieldOwners = 844,
  IconWhatICanDoInternalIgnoreType = 845,
  IconWhatICanDoInternalMediaType = 846,
  IconWhatICanDoInternalOwner = 847,
  IconWhatICanDoInternalType = 848,
  IconWhatICanDoName = 849,
  IconWhatICanDoNodeLocale = 850,
  IconWhatICanDoParentChildren = 851,
  IconWhatICanDoParentId = 852,
  IconWhatICanDoSortKey = 853,
  IconWhatICanDoSpaceId = 854,
  IconWhatICanDoSubName = 855,
  IconWhatICanDoSysRevision = 856,
  IconWhatICanDoSysType = 857,
  IconWhatICanDoUpdatedAt = 858,
  Id = 859,
  InternalContent = 860,
  InternalContentDigest = 861,
  InternalContentFilePath = 862,
  InternalDescription = 863,
  InternalFieldOwners = 864,
  InternalIgnoreType = 865,
  InternalMediaType = 866,
  InternalOwner = 867,
  InternalType = 868,
  Name = 869,
  NodeLocale = 870,
  ParentChildren = 871,
  ParentChildrenChildren = 872,
  ParentChildrenChildrenChildren = 873,
  ParentChildrenChildrenId = 874,
  ParentChildrenId = 875,
  ParentChildrenInternalContent = 876,
  ParentChildrenInternalContentDigest = 877,
  ParentChildrenInternalContentFilePath = 878,
  ParentChildrenInternalDescription = 879,
  ParentChildrenInternalFieldOwners = 880,
  ParentChildrenInternalIgnoreType = 881,
  ParentChildrenInternalMediaType = 882,
  ParentChildrenInternalOwner = 883,
  ParentChildrenInternalType = 884,
  ParentChildrenParentChildren = 885,
  ParentChildrenParentId = 886,
  ParentId = 887,
  ParentInternalContent = 888,
  ParentInternalContentDigest = 889,
  ParentInternalContentFilePath = 890,
  ParentInternalDescription = 891,
  ParentInternalFieldOwners = 892,
  ParentInternalIgnoreType = 893,
  ParentInternalMediaType = 894,
  ParentInternalOwner = 895,
  ParentInternalType = 896,
  ParentParentChildren = 897,
  ParentParentChildrenChildren = 898,
  ParentParentChildrenId = 899,
  ParentParentId = 900,
  ParentParentInternalContent = 901,
  ParentParentInternalContentDigest = 902,
  ParentParentInternalContentFilePath = 903,
  ParentParentInternalDescription = 904,
  ParentParentInternalFieldOwners = 905,
  ParentParentInternalIgnoreType = 906,
  ParentParentInternalMediaType = 907,
  ParentParentInternalOwner = 908,
  ParentParentInternalType = 909,
  ParentParentParentChildren = 910,
  ParentParentParentId = 911,
  SpaceId = 912,
  StartDate = 913,
  SubName = 914,
  SysContentTypeSysId = 915,
  SysContentTypeSysLinkType = 916,
  SysContentTypeSysType = 917,
  SysRevision = 918,
  SysType = 919,
  Tags = 920,
  TagsBlogPost = 921,
  TagsBlogPostCategoryBlogPost = 922,
  TagsBlogPostCategoryChildren = 923,
  TagsBlogPostCategoryContentfulId = 924,
  TagsBlogPostCategoryCreatedAt = 925,
  TagsBlogPostCategoryId = 926,
  TagsBlogPostCategoryName = 927,
  TagsBlogPostCategoryNodeLocale = 928,
  TagsBlogPostCategorySortKey = 929,
  TagsBlogPostCategorySpaceId = 930,
  TagsBlogPostCategoryUpdatedAt = 931,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 932,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 933,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 934,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 935,
  TagsBlogPostChildren = 936,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 937,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 938,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 939,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 940,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 941,
  TagsBlogPostChildrenChildren = 942,
  TagsBlogPostChildrenId = 943,
  TagsBlogPostContentChildren = 944,
  TagsBlogPostContentChildrenMdx = 945,
  TagsBlogPostContentContent = 946,
  TagsBlogPostContentId = 947,
  TagsBlogPostContentfulId = 948,
  TagsBlogPostCreated = 949,
  TagsBlogPostCreatedAt = 950,
  TagsBlogPostExcerpt = 951,
  TagsBlogPostId = 952,
  TagsBlogPostInternalContent = 953,
  TagsBlogPostInternalContentDigest = 954,
  TagsBlogPostInternalContentFilePath = 955,
  TagsBlogPostInternalDescription = 956,
  TagsBlogPostInternalFieldOwners = 957,
  TagsBlogPostInternalIgnoreType = 958,
  TagsBlogPostInternalMediaType = 959,
  TagsBlogPostInternalOwner = 960,
  TagsBlogPostInternalType = 961,
  TagsBlogPostNodeLocale = 962,
  TagsBlogPostParentChildren = 963,
  TagsBlogPostParentId = 964,
  TagsBlogPostSlug = 965,
  TagsBlogPostSpaceId = 966,
  TagsBlogPostSysRevision = 967,
  TagsBlogPostSysType = 968,
  TagsBlogPostTags = 969,
  TagsBlogPostTagsBlogPost = 970,
  TagsBlogPostTagsChildren = 971,
  TagsBlogPostTagsContentfulId = 972,
  TagsBlogPostTagsCreatedAt = 973,
  TagsBlogPostTagsId = 974,
  TagsBlogPostTagsLevel = 975,
  TagsBlogPostTagsName = 976,
  TagsBlogPostTagsNodeLocale = 977,
  TagsBlogPostTagsOss = 978,
  TagsBlogPostTagsProject = 979,
  TagsBlogPostTagsSkillGrpup = 980,
  TagsBlogPostTagsSkillMap = 981,
  TagsBlogPostTagsSpaceId = 982,
  TagsBlogPostTagsUpdatedAt = 983,
  TagsBlogPostThumbnailChildren = 984,
  TagsBlogPostThumbnailContentfulId = 985,
  TagsBlogPostThumbnailCreatedAt = 986,
  TagsBlogPostThumbnailDescription = 987,
  TagsBlogPostThumbnailFilename = 988,
  TagsBlogPostThumbnailFilesize = 989,
  TagsBlogPostThumbnailGatsbyImage = 990,
  TagsBlogPostThumbnailGatsbyImageData = 991,
  TagsBlogPostThumbnailHeight = 992,
  TagsBlogPostThumbnailId = 993,
  TagsBlogPostThumbnailMimeType = 994,
  TagsBlogPostThumbnailNodeLocale = 995,
  TagsBlogPostThumbnailPlaceholderUrl = 996,
  TagsBlogPostThumbnailPublicUrl = 997,
  TagsBlogPostThumbnailSize = 998,
  TagsBlogPostThumbnailSpaceId = 999,
  TagsBlogPostThumbnailTitle = 1000,
  TagsBlogPostThumbnailUpdatedAt = 1001,
  TagsBlogPostThumbnailUrl = 1002,
  TagsBlogPostThumbnailWidth = 1003,
  TagsBlogPostTitle = 1004,
  TagsBlogPostUpdated = 1005,
  TagsBlogPostUpdatedAt = 1006,
  TagsChildren = 1007,
  TagsChildrenChildren = 1008,
  TagsChildrenChildrenChildren = 1009,
  TagsChildrenChildrenId = 1010,
  TagsChildrenId = 1011,
  TagsChildrenInternalContent = 1012,
  TagsChildrenInternalContentDigest = 1013,
  TagsChildrenInternalContentFilePath = 1014,
  TagsChildrenInternalDescription = 1015,
  TagsChildrenInternalFieldOwners = 1016,
  TagsChildrenInternalIgnoreType = 1017,
  TagsChildrenInternalMediaType = 1018,
  TagsChildrenInternalOwner = 1019,
  TagsChildrenInternalType = 1020,
  TagsChildrenParentChildren = 1021,
  TagsChildrenParentId = 1022,
  TagsContentfulId = 1023,
  TagsCreatedAt = 1024,
  TagsId = 1025,
  TagsInternalContent = 1026,
  TagsInternalContentDigest = 1027,
  TagsInternalContentFilePath = 1028,
  TagsInternalDescription = 1029,
  TagsInternalFieldOwners = 1030,
  TagsInternalIgnoreType = 1031,
  TagsInternalMediaType = 1032,
  TagsInternalOwner = 1033,
  TagsInternalType = 1034,
  TagsLevel = 1035,
  TagsName = 1036,
  TagsNodeLocale = 1037,
  TagsOss = 1038,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1039,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1040,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1041,
  TagsOssChildContentfulOssDetailTextNodeId = 1042,
  TagsOssChildren = 1043,
  TagsOssChildrenContentfulOssDetailTextNode = 1044,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1045,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1046,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1047,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1048,
  TagsOssChildrenChildren = 1049,
  TagsOssChildrenId = 1050,
  TagsOssContentfulId = 1051,
  TagsOssCreatedAt = 1052,
  TagsOssDetailChildren = 1053,
  TagsOssDetailChildrenMdx = 1054,
  TagsOssDetailDetail = 1055,
  TagsOssDetailId = 1056,
  TagsOssHref = 1057,
  TagsOssIconChildren = 1058,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1059,
  TagsOssIconContact = 1060,
  TagsOssIconContentfulId = 1061,
  TagsOssIconCreatedAt = 1062,
  TagsOssIconHistory = 1063,
  TagsOssIconId = 1064,
  TagsOssIconName = 1065,
  TagsOssIconNodeLocale = 1066,
  TagsOssIconOss = 1067,
  TagsOssIconProject = 1068,
  TagsOssIconSpaceId = 1069,
  TagsOssIconUpdatedAt = 1070,
  TagsOssIconWhatICanDo = 1071,
  TagsOssId = 1072,
  TagsOssImageChildren = 1073,
  TagsOssImageContentfulId = 1074,
  TagsOssImageCreatedAt = 1075,
  TagsOssImageDescription = 1076,
  TagsOssImageFilename = 1077,
  TagsOssImageFilesize = 1078,
  TagsOssImageGatsbyImage = 1079,
  TagsOssImageGatsbyImageData = 1080,
  TagsOssImageHeight = 1081,
  TagsOssImageId = 1082,
  TagsOssImageMimeType = 1083,
  TagsOssImageNodeLocale = 1084,
  TagsOssImagePlaceholderUrl = 1085,
  TagsOssImagePublicUrl = 1086,
  TagsOssImageSize = 1087,
  TagsOssImageSpaceId = 1088,
  TagsOssImageTitle = 1089,
  TagsOssImageUpdatedAt = 1090,
  TagsOssImageUrl = 1091,
  TagsOssImageWidth = 1092,
  TagsOssInternalContent = 1093,
  TagsOssInternalContentDigest = 1094,
  TagsOssInternalContentFilePath = 1095,
  TagsOssInternalDescription = 1096,
  TagsOssInternalFieldOwners = 1097,
  TagsOssInternalIgnoreType = 1098,
  TagsOssInternalMediaType = 1099,
  TagsOssInternalOwner = 1100,
  TagsOssInternalType = 1101,
  TagsOssName = 1102,
  TagsOssNodeLocale = 1103,
  TagsOssParentChildren = 1104,
  TagsOssParentId = 1105,
  TagsOssSpaceId = 1106,
  TagsOssStartDate = 1107,
  TagsOssSubName = 1108,
  TagsOssSysRevision = 1109,
  TagsOssSysType = 1110,
  TagsOssTags = 1111,
  TagsOssTagsBlogPost = 1112,
  TagsOssTagsChildren = 1113,
  TagsOssTagsContentfulId = 1114,
  TagsOssTagsCreatedAt = 1115,
  TagsOssTagsId = 1116,
  TagsOssTagsLevel = 1117,
  TagsOssTagsName = 1118,
  TagsOssTagsNodeLocale = 1119,
  TagsOssTagsOss = 1120,
  TagsOssTagsProject = 1121,
  TagsOssTagsSkillGrpup = 1122,
  TagsOssTagsSkillMap = 1123,
  TagsOssTagsSpaceId = 1124,
  TagsOssTagsUpdatedAt = 1125,
  TagsOssUpdatedAt = 1126,
  TagsParentChildren = 1127,
  TagsParentChildrenChildren = 1128,
  TagsParentChildrenId = 1129,
  TagsParentId = 1130,
  TagsParentInternalContent = 1131,
  TagsParentInternalContentDigest = 1132,
  TagsParentInternalContentFilePath = 1133,
  TagsParentInternalDescription = 1134,
  TagsParentInternalFieldOwners = 1135,
  TagsParentInternalIgnoreType = 1136,
  TagsParentInternalMediaType = 1137,
  TagsParentInternalOwner = 1138,
  TagsParentInternalType = 1139,
  TagsParentParentChildren = 1140,
  TagsParentParentId = 1141,
  TagsProject = 1142,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1143,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1144,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1145,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1146,
  TagsProjectChildren = 1147,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1148,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1149,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1150,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1151,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1152,
  TagsProjectChildrenChildren = 1153,
  TagsProjectChildrenId = 1154,
  TagsProjectContentfulId = 1155,
  TagsProjectCreatedAt = 1156,
  TagsProjectDetailChildren = 1157,
  TagsProjectDetailChildrenMdx = 1158,
  TagsProjectDetailDetail = 1159,
  TagsProjectDetailId = 1160,
  TagsProjectEndDate = 1161,
  TagsProjectIconChildren = 1162,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1163,
  TagsProjectIconContact = 1164,
  TagsProjectIconContentfulId = 1165,
  TagsProjectIconCreatedAt = 1166,
  TagsProjectIconHistory = 1167,
  TagsProjectIconId = 1168,
  TagsProjectIconName = 1169,
  TagsProjectIconNodeLocale = 1170,
  TagsProjectIconOss = 1171,
  TagsProjectIconProject = 1172,
  TagsProjectIconSpaceId = 1173,
  TagsProjectIconUpdatedAt = 1174,
  TagsProjectIconWhatICanDo = 1175,
  TagsProjectId = 1176,
  TagsProjectInternalContent = 1177,
  TagsProjectInternalContentDigest = 1178,
  TagsProjectInternalContentFilePath = 1179,
  TagsProjectInternalDescription = 1180,
  TagsProjectInternalFieldOwners = 1181,
  TagsProjectInternalIgnoreType = 1182,
  TagsProjectInternalMediaType = 1183,
  TagsProjectInternalOwner = 1184,
  TagsProjectInternalType = 1185,
  TagsProjectName = 1186,
  TagsProjectNodeLocale = 1187,
  TagsProjectParentChildren = 1188,
  TagsProjectParentId = 1189,
  TagsProjectSpaceId = 1190,
  TagsProjectStartDate = 1191,
  TagsProjectSubName = 1192,
  TagsProjectSysRevision = 1193,
  TagsProjectSysType = 1194,
  TagsProjectTags = 1195,
  TagsProjectTagsBlogPost = 1196,
  TagsProjectTagsChildren = 1197,
  TagsProjectTagsContentfulId = 1198,
  TagsProjectTagsCreatedAt = 1199,
  TagsProjectTagsId = 1200,
  TagsProjectTagsLevel = 1201,
  TagsProjectTagsName = 1202,
  TagsProjectTagsNodeLocale = 1203,
  TagsProjectTagsOss = 1204,
  TagsProjectTagsProject = 1205,
  TagsProjectTagsSkillGrpup = 1206,
  TagsProjectTagsSkillMap = 1207,
  TagsProjectTagsSpaceId = 1208,
  TagsProjectTagsUpdatedAt = 1209,
  TagsProjectUpdatedAt = 1210,
  TagsSkillGrpup = 1211,
  TagsSkillGrpupChildren = 1212,
  TagsSkillGrpupChildrenChildren = 1213,
  TagsSkillGrpupChildrenId = 1214,
  TagsSkillGrpupContentfulId = 1215,
  TagsSkillGrpupCreatedAt = 1216,
  TagsSkillGrpupId = 1217,
  TagsSkillGrpupInternalContent = 1218,
  TagsSkillGrpupInternalContentDigest = 1219,
  TagsSkillGrpupInternalContentFilePath = 1220,
  TagsSkillGrpupInternalDescription = 1221,
  TagsSkillGrpupInternalFieldOwners = 1222,
  TagsSkillGrpupInternalIgnoreType = 1223,
  TagsSkillGrpupInternalMediaType = 1224,
  TagsSkillGrpupInternalOwner = 1225,
  TagsSkillGrpupInternalType = 1226,
  TagsSkillGrpupName = 1227,
  TagsSkillGrpupNodeLocale = 1228,
  TagsSkillGrpupParentChildren = 1229,
  TagsSkillGrpupParentId = 1230,
  TagsSkillGrpupSkillMap = 1231,
  TagsSkillGrpupSkillMapChildren = 1232,
  TagsSkillGrpupSkillMapContentfulId = 1233,
  TagsSkillGrpupSkillMapCreatedAt = 1234,
  TagsSkillGrpupSkillMapExpanded = 1235,
  TagsSkillGrpupSkillMapId = 1236,
  TagsSkillGrpupSkillMapName = 1237,
  TagsSkillGrpupSkillMapNodeLocale = 1238,
  TagsSkillGrpupSkillMapSkillGroups = 1239,
  TagsSkillGrpupSkillMapSkills = 1240,
  TagsSkillGrpupSkillMapSortKey = 1241,
  TagsSkillGrpupSkillMapSpaceId = 1242,
  TagsSkillGrpupSkillMapUpdatedAt = 1243,
  TagsSkillGrpupSkills = 1244,
  TagsSkillGrpupSkillsBlogPost = 1245,
  TagsSkillGrpupSkillsChildren = 1246,
  TagsSkillGrpupSkillsContentfulId = 1247,
  TagsSkillGrpupSkillsCreatedAt = 1248,
  TagsSkillGrpupSkillsId = 1249,
  TagsSkillGrpupSkillsLevel = 1250,
  TagsSkillGrpupSkillsName = 1251,
  TagsSkillGrpupSkillsNodeLocale = 1252,
  TagsSkillGrpupSkillsOss = 1253,
  TagsSkillGrpupSkillsProject = 1254,
  TagsSkillGrpupSkillsSkillGrpup = 1255,
  TagsSkillGrpupSkillsSkillMap = 1256,
  TagsSkillGrpupSkillsSpaceId = 1257,
  TagsSkillGrpupSkillsUpdatedAt = 1258,
  TagsSkillGrpupSpaceId = 1259,
  TagsSkillGrpupSysRevision = 1260,
  TagsSkillGrpupSysType = 1261,
  TagsSkillGrpupUpdatedAt = 1262,
  TagsSkillMap = 1263,
  TagsSkillMapChildren = 1264,
  TagsSkillMapChildrenChildren = 1265,
  TagsSkillMapChildrenId = 1266,
  TagsSkillMapContentfulId = 1267,
  TagsSkillMapCreatedAt = 1268,
  TagsSkillMapExpanded = 1269,
  TagsSkillMapId = 1270,
  TagsSkillMapInternalContent = 1271,
  TagsSkillMapInternalContentDigest = 1272,
  TagsSkillMapInternalContentFilePath = 1273,
  TagsSkillMapInternalDescription = 1274,
  TagsSkillMapInternalFieldOwners = 1275,
  TagsSkillMapInternalIgnoreType = 1276,
  TagsSkillMapInternalMediaType = 1277,
  TagsSkillMapInternalOwner = 1278,
  TagsSkillMapInternalType = 1279,
  TagsSkillMapName = 1280,
  TagsSkillMapNodeLocale = 1281,
  TagsSkillMapParentChildren = 1282,
  TagsSkillMapParentId = 1283,
  TagsSkillMapSkillGroups = 1284,
  TagsSkillMapSkillGroupsChildren = 1285,
  TagsSkillMapSkillGroupsContentfulId = 1286,
  TagsSkillMapSkillGroupsCreatedAt = 1287,
  TagsSkillMapSkillGroupsId = 1288,
  TagsSkillMapSkillGroupsName = 1289,
  TagsSkillMapSkillGroupsNodeLocale = 1290,
  TagsSkillMapSkillGroupsSkillMap = 1291,
  TagsSkillMapSkillGroupsSkills = 1292,
  TagsSkillMapSkillGroupsSpaceId = 1293,
  TagsSkillMapSkillGroupsUpdatedAt = 1294,
  TagsSkillMapSkills = 1295,
  TagsSkillMapSkillsBlogPost = 1296,
  TagsSkillMapSkillsChildren = 1297,
  TagsSkillMapSkillsContentfulId = 1298,
  TagsSkillMapSkillsCreatedAt = 1299,
  TagsSkillMapSkillsId = 1300,
  TagsSkillMapSkillsLevel = 1301,
  TagsSkillMapSkillsName = 1302,
  TagsSkillMapSkillsNodeLocale = 1303,
  TagsSkillMapSkillsOss = 1304,
  TagsSkillMapSkillsProject = 1305,
  TagsSkillMapSkillsSkillGrpup = 1306,
  TagsSkillMapSkillsSkillMap = 1307,
  TagsSkillMapSkillsSpaceId = 1308,
  TagsSkillMapSkillsUpdatedAt = 1309,
  TagsSkillMapSortKey = 1310,
  TagsSkillMapSpaceId = 1311,
  TagsSkillMapSysRevision = 1312,
  TagsSkillMapSysType = 1313,
  TagsSkillMapUpdatedAt = 1314,
  TagsSpaceId = 1315,
  TagsSysRevision = 1316,
  TagsSysType = 1317,
  TagsUpdatedAt = 1318,
  UpdatedAt = 1319
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Date = 44,
  Id = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  Name = 55,
  NodeLocale = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  QualificationMap = 98,
  QualificationMapChildren = 99,
  QualificationMapChildrenChildren = 100,
  QualificationMapChildrenChildrenChildren = 101,
  QualificationMapChildrenChildrenId = 102,
  QualificationMapChildrenId = 103,
  QualificationMapChildrenInternalContent = 104,
  QualificationMapChildrenInternalContentDigest = 105,
  QualificationMapChildrenInternalContentFilePath = 106,
  QualificationMapChildrenInternalDescription = 107,
  QualificationMapChildrenInternalFieldOwners = 108,
  QualificationMapChildrenInternalIgnoreType = 109,
  QualificationMapChildrenInternalMediaType = 110,
  QualificationMapChildrenInternalOwner = 111,
  QualificationMapChildrenInternalType = 112,
  QualificationMapChildrenParentChildren = 113,
  QualificationMapChildrenParentId = 114,
  QualificationMapContentfulId = 115,
  QualificationMapCreatedAt = 116,
  QualificationMapExpanded = 117,
  QualificationMapId = 118,
  QualificationMapInternalContent = 119,
  QualificationMapInternalContentDigest = 120,
  QualificationMapInternalContentFilePath = 121,
  QualificationMapInternalDescription = 122,
  QualificationMapInternalFieldOwners = 123,
  QualificationMapInternalIgnoreType = 124,
  QualificationMapInternalMediaType = 125,
  QualificationMapInternalOwner = 126,
  QualificationMapInternalType = 127,
  QualificationMapName = 128,
  QualificationMapNodeLocale = 129,
  QualificationMapParentChildren = 130,
  QualificationMapParentChildrenChildren = 131,
  QualificationMapParentChildrenId = 132,
  QualificationMapParentId = 133,
  QualificationMapParentInternalContent = 134,
  QualificationMapParentInternalContentDigest = 135,
  QualificationMapParentInternalContentFilePath = 136,
  QualificationMapParentInternalDescription = 137,
  QualificationMapParentInternalFieldOwners = 138,
  QualificationMapParentInternalIgnoreType = 139,
  QualificationMapParentInternalMediaType = 140,
  QualificationMapParentInternalOwner = 141,
  QualificationMapParentInternalType = 142,
  QualificationMapParentParentChildren = 143,
  QualificationMapParentParentId = 144,
  QualificationMapQualifications = 145,
  QualificationMapQualificationsChildren = 146,
  QualificationMapQualificationsChildrenChildren = 147,
  QualificationMapQualificationsChildrenId = 148,
  QualificationMapQualificationsContentfulId = 149,
  QualificationMapQualificationsCreatedAt = 150,
  QualificationMapQualificationsDate = 151,
  QualificationMapQualificationsId = 152,
  QualificationMapQualificationsInternalContent = 153,
  QualificationMapQualificationsInternalContentDigest = 154,
  QualificationMapQualificationsInternalContentFilePath = 155,
  QualificationMapQualificationsInternalDescription = 156,
  QualificationMapQualificationsInternalFieldOwners = 157,
  QualificationMapQualificationsInternalIgnoreType = 158,
  QualificationMapQualificationsInternalMediaType = 159,
  QualificationMapQualificationsInternalOwner = 160,
  QualificationMapQualificationsInternalType = 161,
  QualificationMapQualificationsName = 162,
  QualificationMapQualificationsNodeLocale = 163,
  QualificationMapQualificationsParentChildren = 164,
  QualificationMapQualificationsParentId = 165,
  QualificationMapQualificationsQualificationMap = 166,
  QualificationMapQualificationsQualificationMapChildren = 167,
  QualificationMapQualificationsQualificationMapContentfulId = 168,
  QualificationMapQualificationsQualificationMapCreatedAt = 169,
  QualificationMapQualificationsQualificationMapExpanded = 170,
  QualificationMapQualificationsQualificationMapId = 171,
  QualificationMapQualificationsQualificationMapName = 172,
  QualificationMapQualificationsQualificationMapNodeLocale = 173,
  QualificationMapQualificationsQualificationMapQualifications = 174,
  QualificationMapQualificationsQualificationMapSortKey = 175,
  QualificationMapQualificationsQualificationMapSpaceId = 176,
  QualificationMapQualificationsQualificationMapUpdatedAt = 177,
  QualificationMapQualificationsSpaceId = 178,
  QualificationMapQualificationsSysRevision = 179,
  QualificationMapQualificationsSysType = 180,
  QualificationMapQualificationsUpdatedAt = 181,
  QualificationMapSortKey = 182,
  QualificationMapSpaceId = 183,
  QualificationMapSysRevision = 184,
  QualificationMapSysType = 185,
  QualificationMapUpdatedAt = 186,
  SpaceId = 187,
  SysContentTypeSysId = 188,
  SysContentTypeSysLinkType = 189,
  SysContentTypeSysType = 190,
  SysRevision = 191,
  SysType = 192,
  UpdatedAt = 193
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Expanded = 44,
  Id = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  Name = 55,
  NodeLocale = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  Qualifications = 98,
  QualificationsChildren = 99,
  QualificationsChildrenChildren = 100,
  QualificationsChildrenChildrenChildren = 101,
  QualificationsChildrenChildrenId = 102,
  QualificationsChildrenId = 103,
  QualificationsChildrenInternalContent = 104,
  QualificationsChildrenInternalContentDigest = 105,
  QualificationsChildrenInternalContentFilePath = 106,
  QualificationsChildrenInternalDescription = 107,
  QualificationsChildrenInternalFieldOwners = 108,
  QualificationsChildrenInternalIgnoreType = 109,
  QualificationsChildrenInternalMediaType = 110,
  QualificationsChildrenInternalOwner = 111,
  QualificationsChildrenInternalType = 112,
  QualificationsChildrenParentChildren = 113,
  QualificationsChildrenParentId = 114,
  QualificationsContentfulId = 115,
  QualificationsCreatedAt = 116,
  QualificationsDate = 117,
  QualificationsId = 118,
  QualificationsInternalContent = 119,
  QualificationsInternalContentDigest = 120,
  QualificationsInternalContentFilePath = 121,
  QualificationsInternalDescription = 122,
  QualificationsInternalFieldOwners = 123,
  QualificationsInternalIgnoreType = 124,
  QualificationsInternalMediaType = 125,
  QualificationsInternalOwner = 126,
  QualificationsInternalType = 127,
  QualificationsName = 128,
  QualificationsNodeLocale = 129,
  QualificationsParentChildren = 130,
  QualificationsParentChildrenChildren = 131,
  QualificationsParentChildrenId = 132,
  QualificationsParentId = 133,
  QualificationsParentInternalContent = 134,
  QualificationsParentInternalContentDigest = 135,
  QualificationsParentInternalContentFilePath = 136,
  QualificationsParentInternalDescription = 137,
  QualificationsParentInternalFieldOwners = 138,
  QualificationsParentInternalIgnoreType = 139,
  QualificationsParentInternalMediaType = 140,
  QualificationsParentInternalOwner = 141,
  QualificationsParentInternalType = 142,
  QualificationsParentParentChildren = 143,
  QualificationsParentParentId = 144,
  QualificationsQualificationMap = 145,
  QualificationsQualificationMapChildren = 146,
  QualificationsQualificationMapChildrenChildren = 147,
  QualificationsQualificationMapChildrenId = 148,
  QualificationsQualificationMapContentfulId = 149,
  QualificationsQualificationMapCreatedAt = 150,
  QualificationsQualificationMapExpanded = 151,
  QualificationsQualificationMapId = 152,
  QualificationsQualificationMapInternalContent = 153,
  QualificationsQualificationMapInternalContentDigest = 154,
  QualificationsQualificationMapInternalContentFilePath = 155,
  QualificationsQualificationMapInternalDescription = 156,
  QualificationsQualificationMapInternalFieldOwners = 157,
  QualificationsQualificationMapInternalIgnoreType = 158,
  QualificationsQualificationMapInternalMediaType = 159,
  QualificationsQualificationMapInternalOwner = 160,
  QualificationsQualificationMapInternalType = 161,
  QualificationsQualificationMapName = 162,
  QualificationsQualificationMapNodeLocale = 163,
  QualificationsQualificationMapParentChildren = 164,
  QualificationsQualificationMapParentId = 165,
  QualificationsQualificationMapQualifications = 166,
  QualificationsQualificationMapQualificationsChildren = 167,
  QualificationsQualificationMapQualificationsContentfulId = 168,
  QualificationsQualificationMapQualificationsCreatedAt = 169,
  QualificationsQualificationMapQualificationsDate = 170,
  QualificationsQualificationMapQualificationsId = 171,
  QualificationsQualificationMapQualificationsName = 172,
  QualificationsQualificationMapQualificationsNodeLocale = 173,
  QualificationsQualificationMapQualificationsQualificationMap = 174,
  QualificationsQualificationMapQualificationsSpaceId = 175,
  QualificationsQualificationMapQualificationsUpdatedAt = 176,
  QualificationsQualificationMapSortKey = 177,
  QualificationsQualificationMapSpaceId = 178,
  QualificationsQualificationMapSysRevision = 179,
  QualificationsQualificationMapSysType = 180,
  QualificationsQualificationMapUpdatedAt = 181,
  QualificationsSpaceId = 182,
  QualificationsSysRevision = 183,
  QualificationsSysType = 184,
  QualificationsUpdatedAt = 185,
  SortKey = 186,
  SpaceId = 187,
  SysContentTypeSysId = 188,
  SysContentTypeSysLinkType = 189,
  SysContentTypeSysType = 190,
  SysRevision = 191,
  SysType = 192,
  UpdatedAt = 193
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Id = 44,
  InternalContent = 45,
  InternalContentDigest = 46,
  InternalContentFilePath = 47,
  InternalDescription = 48,
  InternalFieldOwners = 49,
  InternalIgnoreType = 50,
  InternalMediaType = 51,
  InternalOwner = 52,
  InternalType = 53,
  Name = 54,
  NodeLocale = 55,
  ParentChildren = 56,
  ParentChildrenChildren = 57,
  ParentChildrenChildrenChildren = 58,
  ParentChildrenChildrenId = 59,
  ParentChildrenId = 60,
  ParentChildrenInternalContent = 61,
  ParentChildrenInternalContentDigest = 62,
  ParentChildrenInternalContentFilePath = 63,
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
  ParentInternalContentFilePath = 75,
  ParentInternalDescription = 76,
  ParentInternalFieldOwners = 77,
  ParentInternalIgnoreType = 78,
  ParentInternalMediaType = 79,
  ParentInternalOwner = 80,
  ParentInternalType = 81,
  ParentParentChildren = 82,
  ParentParentChildrenChildren = 83,
  ParentParentChildrenId = 84,
  ParentParentId = 85,
  ParentParentInternalContent = 86,
  ParentParentInternalContentDigest = 87,
  ParentParentInternalContentFilePath = 88,
  ParentParentInternalDescription = 89,
  ParentParentInternalFieldOwners = 90,
  ParentParentInternalIgnoreType = 91,
  ParentParentInternalMediaType = 92,
  ParentParentInternalOwner = 93,
  ParentParentInternalType = 94,
  ParentParentParentChildren = 95,
  ParentParentParentId = 96,
  SkillMap = 97,
  SkillMapChildren = 98,
  SkillMapChildrenChildren = 99,
  SkillMapChildrenChildrenChildren = 100,
  SkillMapChildrenChildrenId = 101,
  SkillMapChildrenId = 102,
  SkillMapChildrenInternalContent = 103,
  SkillMapChildrenInternalContentDigest = 104,
  SkillMapChildrenInternalContentFilePath = 105,
  SkillMapChildrenInternalDescription = 106,
  SkillMapChildrenInternalFieldOwners = 107,
  SkillMapChildrenInternalIgnoreType = 108,
  SkillMapChildrenInternalMediaType = 109,
  SkillMapChildrenInternalOwner = 110,
  SkillMapChildrenInternalType = 111,
  SkillMapChildrenParentChildren = 112,
  SkillMapChildrenParentId = 113,
  SkillMapContentfulId = 114,
  SkillMapCreatedAt = 115,
  SkillMapExpanded = 116,
  SkillMapId = 117,
  SkillMapInternalContent = 118,
  SkillMapInternalContentDigest = 119,
  SkillMapInternalContentFilePath = 120,
  SkillMapInternalDescription = 121,
  SkillMapInternalFieldOwners = 122,
  SkillMapInternalIgnoreType = 123,
  SkillMapInternalMediaType = 124,
  SkillMapInternalOwner = 125,
  SkillMapInternalType = 126,
  SkillMapName = 127,
  SkillMapNodeLocale = 128,
  SkillMapParentChildren = 129,
  SkillMapParentChildrenChildren = 130,
  SkillMapParentChildrenId = 131,
  SkillMapParentId = 132,
  SkillMapParentInternalContent = 133,
  SkillMapParentInternalContentDigest = 134,
  SkillMapParentInternalContentFilePath = 135,
  SkillMapParentInternalDescription = 136,
  SkillMapParentInternalFieldOwners = 137,
  SkillMapParentInternalIgnoreType = 138,
  SkillMapParentInternalMediaType = 139,
  SkillMapParentInternalOwner = 140,
  SkillMapParentInternalType = 141,
  SkillMapParentParentChildren = 142,
  SkillMapParentParentId = 143,
  SkillMapSkillGroups = 144,
  SkillMapSkillGroupsChildren = 145,
  SkillMapSkillGroupsChildrenChildren = 146,
  SkillMapSkillGroupsChildrenId = 147,
  SkillMapSkillGroupsContentfulId = 148,
  SkillMapSkillGroupsCreatedAt = 149,
  SkillMapSkillGroupsId = 150,
  SkillMapSkillGroupsInternalContent = 151,
  SkillMapSkillGroupsInternalContentDigest = 152,
  SkillMapSkillGroupsInternalContentFilePath = 153,
  SkillMapSkillGroupsInternalDescription = 154,
  SkillMapSkillGroupsInternalFieldOwners = 155,
  SkillMapSkillGroupsInternalIgnoreType = 156,
  SkillMapSkillGroupsInternalMediaType = 157,
  SkillMapSkillGroupsInternalOwner = 158,
  SkillMapSkillGroupsInternalType = 159,
  SkillMapSkillGroupsName = 160,
  SkillMapSkillGroupsNodeLocale = 161,
  SkillMapSkillGroupsParentChildren = 162,
  SkillMapSkillGroupsParentId = 163,
  SkillMapSkillGroupsSkillMap = 164,
  SkillMapSkillGroupsSkillMapChildren = 165,
  SkillMapSkillGroupsSkillMapContentfulId = 166,
  SkillMapSkillGroupsSkillMapCreatedAt = 167,
  SkillMapSkillGroupsSkillMapExpanded = 168,
  SkillMapSkillGroupsSkillMapId = 169,
  SkillMapSkillGroupsSkillMapName = 170,
  SkillMapSkillGroupsSkillMapNodeLocale = 171,
  SkillMapSkillGroupsSkillMapSkillGroups = 172,
  SkillMapSkillGroupsSkillMapSkills = 173,
  SkillMapSkillGroupsSkillMapSortKey = 174,
  SkillMapSkillGroupsSkillMapSpaceId = 175,
  SkillMapSkillGroupsSkillMapUpdatedAt = 176,
  SkillMapSkillGroupsSkills = 177,
  SkillMapSkillGroupsSkillsBlogPost = 178,
  SkillMapSkillGroupsSkillsChildren = 179,
  SkillMapSkillGroupsSkillsContentfulId = 180,
  SkillMapSkillGroupsSkillsCreatedAt = 181,
  SkillMapSkillGroupsSkillsId = 182,
  SkillMapSkillGroupsSkillsLevel = 183,
  SkillMapSkillGroupsSkillsName = 184,
  SkillMapSkillGroupsSkillsNodeLocale = 185,
  SkillMapSkillGroupsSkillsOss = 186,
  SkillMapSkillGroupsSkillsProject = 187,
  SkillMapSkillGroupsSkillsSkillGrpup = 188,
  SkillMapSkillGroupsSkillsSkillMap = 189,
  SkillMapSkillGroupsSkillsSpaceId = 190,
  SkillMapSkillGroupsSkillsUpdatedAt = 191,
  SkillMapSkillGroupsSpaceId = 192,
  SkillMapSkillGroupsSysRevision = 193,
  SkillMapSkillGroupsSysType = 194,
  SkillMapSkillGroupsUpdatedAt = 195,
  SkillMapSkills = 196,
  SkillMapSkillsBlogPost = 197,
  SkillMapSkillsBlogPostChildren = 198,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 199,
  SkillMapSkillsBlogPostContentfulId = 200,
  SkillMapSkillsBlogPostCreated = 201,
  SkillMapSkillsBlogPostCreatedAt = 202,
  SkillMapSkillsBlogPostExcerpt = 203,
  SkillMapSkillsBlogPostId = 204,
  SkillMapSkillsBlogPostNodeLocale = 205,
  SkillMapSkillsBlogPostSlug = 206,
  SkillMapSkillsBlogPostSpaceId = 207,
  SkillMapSkillsBlogPostTags = 208,
  SkillMapSkillsBlogPostTitle = 209,
  SkillMapSkillsBlogPostUpdated = 210,
  SkillMapSkillsBlogPostUpdatedAt = 211,
  SkillMapSkillsChildren = 212,
  SkillMapSkillsChildrenChildren = 213,
  SkillMapSkillsChildrenId = 214,
  SkillMapSkillsContentfulId = 215,
  SkillMapSkillsCreatedAt = 216,
  SkillMapSkillsId = 217,
  SkillMapSkillsInternalContent = 218,
  SkillMapSkillsInternalContentDigest = 219,
  SkillMapSkillsInternalContentFilePath = 220,
  SkillMapSkillsInternalDescription = 221,
  SkillMapSkillsInternalFieldOwners = 222,
  SkillMapSkillsInternalIgnoreType = 223,
  SkillMapSkillsInternalMediaType = 224,
  SkillMapSkillsInternalOwner = 225,
  SkillMapSkillsInternalType = 226,
  SkillMapSkillsLevel = 227,
  SkillMapSkillsName = 228,
  SkillMapSkillsNodeLocale = 229,
  SkillMapSkillsOss = 230,
  SkillMapSkillsOssChildren = 231,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 232,
  SkillMapSkillsOssContentfulId = 233,
  SkillMapSkillsOssCreatedAt = 234,
  SkillMapSkillsOssHref = 235,
  SkillMapSkillsOssId = 236,
  SkillMapSkillsOssName = 237,
  SkillMapSkillsOssNodeLocale = 238,
  SkillMapSkillsOssSpaceId = 239,
  SkillMapSkillsOssStartDate = 240,
  SkillMapSkillsOssSubName = 241,
  SkillMapSkillsOssTags = 242,
  SkillMapSkillsOssUpdatedAt = 243,
  SkillMapSkillsParentChildren = 244,
  SkillMapSkillsParentId = 245,
  SkillMapSkillsProject = 246,
  SkillMapSkillsProjectChildren = 247,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 248,
  SkillMapSkillsProjectContentfulId = 249,
  SkillMapSkillsProjectCreatedAt = 250,
  SkillMapSkillsProjectEndDate = 251,
  SkillMapSkillsProjectId = 252,
  SkillMapSkillsProjectName = 253,
  SkillMapSkillsProjectNodeLocale = 254,
  SkillMapSkillsProjectSpaceId = 255,
  SkillMapSkillsProjectStartDate = 256,
  SkillMapSkillsProjectSubName = 257,
  SkillMapSkillsProjectTags = 258,
  SkillMapSkillsProjectUpdatedAt = 259,
  SkillMapSkillsSkillGrpup = 260,
  SkillMapSkillsSkillGrpupChildren = 261,
  SkillMapSkillsSkillGrpupContentfulId = 262,
  SkillMapSkillsSkillGrpupCreatedAt = 263,
  SkillMapSkillsSkillGrpupId = 264,
  SkillMapSkillsSkillGrpupName = 265,
  SkillMapSkillsSkillGrpupNodeLocale = 266,
  SkillMapSkillsSkillGrpupSkillMap = 267,
  SkillMapSkillsSkillGrpupSkills = 268,
  SkillMapSkillsSkillGrpupSpaceId = 269,
  SkillMapSkillsSkillGrpupUpdatedAt = 270,
  SkillMapSkillsSkillMap = 271,
  SkillMapSkillsSkillMapChildren = 272,
  SkillMapSkillsSkillMapContentfulId = 273,
  SkillMapSkillsSkillMapCreatedAt = 274,
  SkillMapSkillsSkillMapExpanded = 275,
  SkillMapSkillsSkillMapId = 276,
  SkillMapSkillsSkillMapName = 277,
  SkillMapSkillsSkillMapNodeLocale = 278,
  SkillMapSkillsSkillMapSkillGroups = 279,
  SkillMapSkillsSkillMapSkills = 280,
  SkillMapSkillsSkillMapSortKey = 281,
  SkillMapSkillsSkillMapSpaceId = 282,
  SkillMapSkillsSkillMapUpdatedAt = 283,
  SkillMapSkillsSpaceId = 284,
  SkillMapSkillsSysRevision = 285,
  SkillMapSkillsSysType = 286,
  SkillMapSkillsUpdatedAt = 287,
  SkillMapSortKey = 288,
  SkillMapSpaceId = 289,
  SkillMapSysRevision = 290,
  SkillMapSysType = 291,
  SkillMapUpdatedAt = 292,
  Skills = 293,
  SkillsBlogPost = 294,
  SkillsBlogPostCategoryBlogPost = 295,
  SkillsBlogPostCategoryChildren = 296,
  SkillsBlogPostCategoryContentfulId = 297,
  SkillsBlogPostCategoryCreatedAt = 298,
  SkillsBlogPostCategoryId = 299,
  SkillsBlogPostCategoryName = 300,
  SkillsBlogPostCategoryNodeLocale = 301,
  SkillsBlogPostCategorySortKey = 302,
  SkillsBlogPostCategorySpaceId = 303,
  SkillsBlogPostCategoryUpdatedAt = 304,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 305,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 306,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 307,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 308,
  SkillsBlogPostChildren = 309,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 310,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 311,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 312,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 313,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 314,
  SkillsBlogPostChildrenChildren = 315,
  SkillsBlogPostChildrenId = 316,
  SkillsBlogPostContentChildren = 317,
  SkillsBlogPostContentChildrenMdx = 318,
  SkillsBlogPostContentContent = 319,
  SkillsBlogPostContentId = 320,
  SkillsBlogPostContentfulId = 321,
  SkillsBlogPostCreated = 322,
  SkillsBlogPostCreatedAt = 323,
  SkillsBlogPostExcerpt = 324,
  SkillsBlogPostId = 325,
  SkillsBlogPostInternalContent = 326,
  SkillsBlogPostInternalContentDigest = 327,
  SkillsBlogPostInternalContentFilePath = 328,
  SkillsBlogPostInternalDescription = 329,
  SkillsBlogPostInternalFieldOwners = 330,
  SkillsBlogPostInternalIgnoreType = 331,
  SkillsBlogPostInternalMediaType = 332,
  SkillsBlogPostInternalOwner = 333,
  SkillsBlogPostInternalType = 334,
  SkillsBlogPostNodeLocale = 335,
  SkillsBlogPostParentChildren = 336,
  SkillsBlogPostParentId = 337,
  SkillsBlogPostSlug = 338,
  SkillsBlogPostSpaceId = 339,
  SkillsBlogPostSysRevision = 340,
  SkillsBlogPostSysType = 341,
  SkillsBlogPostTags = 342,
  SkillsBlogPostTagsBlogPost = 343,
  SkillsBlogPostTagsChildren = 344,
  SkillsBlogPostTagsContentfulId = 345,
  SkillsBlogPostTagsCreatedAt = 346,
  SkillsBlogPostTagsId = 347,
  SkillsBlogPostTagsLevel = 348,
  SkillsBlogPostTagsName = 349,
  SkillsBlogPostTagsNodeLocale = 350,
  SkillsBlogPostTagsOss = 351,
  SkillsBlogPostTagsProject = 352,
  SkillsBlogPostTagsSkillGrpup = 353,
  SkillsBlogPostTagsSkillMap = 354,
  SkillsBlogPostTagsSpaceId = 355,
  SkillsBlogPostTagsUpdatedAt = 356,
  SkillsBlogPostThumbnailChildren = 357,
  SkillsBlogPostThumbnailContentfulId = 358,
  SkillsBlogPostThumbnailCreatedAt = 359,
  SkillsBlogPostThumbnailDescription = 360,
  SkillsBlogPostThumbnailFilename = 361,
  SkillsBlogPostThumbnailFilesize = 362,
  SkillsBlogPostThumbnailGatsbyImage = 363,
  SkillsBlogPostThumbnailGatsbyImageData = 364,
  SkillsBlogPostThumbnailHeight = 365,
  SkillsBlogPostThumbnailId = 366,
  SkillsBlogPostThumbnailMimeType = 367,
  SkillsBlogPostThumbnailNodeLocale = 368,
  SkillsBlogPostThumbnailPlaceholderUrl = 369,
  SkillsBlogPostThumbnailPublicUrl = 370,
  SkillsBlogPostThumbnailSize = 371,
  SkillsBlogPostThumbnailSpaceId = 372,
  SkillsBlogPostThumbnailTitle = 373,
  SkillsBlogPostThumbnailUpdatedAt = 374,
  SkillsBlogPostThumbnailUrl = 375,
  SkillsBlogPostThumbnailWidth = 376,
  SkillsBlogPostTitle = 377,
  SkillsBlogPostUpdated = 378,
  SkillsBlogPostUpdatedAt = 379,
  SkillsChildren = 380,
  SkillsChildrenChildren = 381,
  SkillsChildrenChildrenChildren = 382,
  SkillsChildrenChildrenId = 383,
  SkillsChildrenId = 384,
  SkillsChildrenInternalContent = 385,
  SkillsChildrenInternalContentDigest = 386,
  SkillsChildrenInternalContentFilePath = 387,
  SkillsChildrenInternalDescription = 388,
  SkillsChildrenInternalFieldOwners = 389,
  SkillsChildrenInternalIgnoreType = 390,
  SkillsChildrenInternalMediaType = 391,
  SkillsChildrenInternalOwner = 392,
  SkillsChildrenInternalType = 393,
  SkillsChildrenParentChildren = 394,
  SkillsChildrenParentId = 395,
  SkillsContentfulId = 396,
  SkillsCreatedAt = 397,
  SkillsId = 398,
  SkillsInternalContent = 399,
  SkillsInternalContentDigest = 400,
  SkillsInternalContentFilePath = 401,
  SkillsInternalDescription = 402,
  SkillsInternalFieldOwners = 403,
  SkillsInternalIgnoreType = 404,
  SkillsInternalMediaType = 405,
  SkillsInternalOwner = 406,
  SkillsInternalType = 407,
  SkillsLevel = 408,
  SkillsName = 409,
  SkillsNodeLocale = 410,
  SkillsOss = 411,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 412,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMdx = 413,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 414,
  SkillsOssChildContentfulOssDetailTextNodeId = 415,
  SkillsOssChildren = 416,
  SkillsOssChildrenContentfulOssDetailTextNode = 417,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 418,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 419,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 420,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 421,
  SkillsOssChildrenChildren = 422,
  SkillsOssChildrenId = 423,
  SkillsOssContentfulId = 424,
  SkillsOssCreatedAt = 425,
  SkillsOssDetailChildren = 426,
  SkillsOssDetailChildrenMdx = 427,
  SkillsOssDetailDetail = 428,
  SkillsOssDetailId = 429,
  SkillsOssHref = 430,
  SkillsOssIconChildren = 431,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 432,
  SkillsOssIconContact = 433,
  SkillsOssIconContentfulId = 434,
  SkillsOssIconCreatedAt = 435,
  SkillsOssIconHistory = 436,
  SkillsOssIconId = 437,
  SkillsOssIconName = 438,
  SkillsOssIconNodeLocale = 439,
  SkillsOssIconOss = 440,
  SkillsOssIconProject = 441,
  SkillsOssIconSpaceId = 442,
  SkillsOssIconUpdatedAt = 443,
  SkillsOssIconWhatICanDo = 444,
  SkillsOssId = 445,
  SkillsOssImageChildren = 446,
  SkillsOssImageContentfulId = 447,
  SkillsOssImageCreatedAt = 448,
  SkillsOssImageDescription = 449,
  SkillsOssImageFilename = 450,
  SkillsOssImageFilesize = 451,
  SkillsOssImageGatsbyImage = 452,
  SkillsOssImageGatsbyImageData = 453,
  SkillsOssImageHeight = 454,
  SkillsOssImageId = 455,
  SkillsOssImageMimeType = 456,
  SkillsOssImageNodeLocale = 457,
  SkillsOssImagePlaceholderUrl = 458,
  SkillsOssImagePublicUrl = 459,
  SkillsOssImageSize = 460,
  SkillsOssImageSpaceId = 461,
  SkillsOssImageTitle = 462,
  SkillsOssImageUpdatedAt = 463,
  SkillsOssImageUrl = 464,
  SkillsOssImageWidth = 465,
  SkillsOssInternalContent = 466,
  SkillsOssInternalContentDigest = 467,
  SkillsOssInternalContentFilePath = 468,
  SkillsOssInternalDescription = 469,
  SkillsOssInternalFieldOwners = 470,
  SkillsOssInternalIgnoreType = 471,
  SkillsOssInternalMediaType = 472,
  SkillsOssInternalOwner = 473,
  SkillsOssInternalType = 474,
  SkillsOssName = 475,
  SkillsOssNodeLocale = 476,
  SkillsOssParentChildren = 477,
  SkillsOssParentId = 478,
  SkillsOssSpaceId = 479,
  SkillsOssStartDate = 480,
  SkillsOssSubName = 481,
  SkillsOssSysRevision = 482,
  SkillsOssSysType = 483,
  SkillsOssTags = 484,
  SkillsOssTagsBlogPost = 485,
  SkillsOssTagsChildren = 486,
  SkillsOssTagsContentfulId = 487,
  SkillsOssTagsCreatedAt = 488,
  SkillsOssTagsId = 489,
  SkillsOssTagsLevel = 490,
  SkillsOssTagsName = 491,
  SkillsOssTagsNodeLocale = 492,
  SkillsOssTagsOss = 493,
  SkillsOssTagsProject = 494,
  SkillsOssTagsSkillGrpup = 495,
  SkillsOssTagsSkillMap = 496,
  SkillsOssTagsSpaceId = 497,
  SkillsOssTagsUpdatedAt = 498,
  SkillsOssUpdatedAt = 499,
  SkillsParentChildren = 500,
  SkillsParentChildrenChildren = 501,
  SkillsParentChildrenId = 502,
  SkillsParentId = 503,
  SkillsParentInternalContent = 504,
  SkillsParentInternalContentDigest = 505,
  SkillsParentInternalContentFilePath = 506,
  SkillsParentInternalDescription = 507,
  SkillsParentInternalFieldOwners = 508,
  SkillsParentInternalIgnoreType = 509,
  SkillsParentInternalMediaType = 510,
  SkillsParentInternalOwner = 511,
  SkillsParentInternalType = 512,
  SkillsParentParentChildren = 513,
  SkillsParentParentId = 514,
  SkillsProject = 515,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 516,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 517,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 518,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 519,
  SkillsProjectChildren = 520,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 521,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 522,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 523,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 524,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 525,
  SkillsProjectChildrenChildren = 526,
  SkillsProjectChildrenId = 527,
  SkillsProjectContentfulId = 528,
  SkillsProjectCreatedAt = 529,
  SkillsProjectDetailChildren = 530,
  SkillsProjectDetailChildrenMdx = 531,
  SkillsProjectDetailDetail = 532,
  SkillsProjectDetailId = 533,
  SkillsProjectEndDate = 534,
  SkillsProjectIconChildren = 535,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 536,
  SkillsProjectIconContact = 537,
  SkillsProjectIconContentfulId = 538,
  SkillsProjectIconCreatedAt = 539,
  SkillsProjectIconHistory = 540,
  SkillsProjectIconId = 541,
  SkillsProjectIconName = 542,
  SkillsProjectIconNodeLocale = 543,
  SkillsProjectIconOss = 544,
  SkillsProjectIconProject = 545,
  SkillsProjectIconSpaceId = 546,
  SkillsProjectIconUpdatedAt = 547,
  SkillsProjectIconWhatICanDo = 548,
  SkillsProjectId = 549,
  SkillsProjectInternalContent = 550,
  SkillsProjectInternalContentDigest = 551,
  SkillsProjectInternalContentFilePath = 552,
  SkillsProjectInternalDescription = 553,
  SkillsProjectInternalFieldOwners = 554,
  SkillsProjectInternalIgnoreType = 555,
  SkillsProjectInternalMediaType = 556,
  SkillsProjectInternalOwner = 557,
  SkillsProjectInternalType = 558,
  SkillsProjectName = 559,
  SkillsProjectNodeLocale = 560,
  SkillsProjectParentChildren = 561,
  SkillsProjectParentId = 562,
  SkillsProjectSpaceId = 563,
  SkillsProjectStartDate = 564,
  SkillsProjectSubName = 565,
  SkillsProjectSysRevision = 566,
  SkillsProjectSysType = 567,
  SkillsProjectTags = 568,
  SkillsProjectTagsBlogPost = 569,
  SkillsProjectTagsChildren = 570,
  SkillsProjectTagsContentfulId = 571,
  SkillsProjectTagsCreatedAt = 572,
  SkillsProjectTagsId = 573,
  SkillsProjectTagsLevel = 574,
  SkillsProjectTagsName = 575,
  SkillsProjectTagsNodeLocale = 576,
  SkillsProjectTagsOss = 577,
  SkillsProjectTagsProject = 578,
  SkillsProjectTagsSkillGrpup = 579,
  SkillsProjectTagsSkillMap = 580,
  SkillsProjectTagsSpaceId = 581,
  SkillsProjectTagsUpdatedAt = 582,
  SkillsProjectUpdatedAt = 583,
  SkillsSkillGrpup = 584,
  SkillsSkillGrpupChildren = 585,
  SkillsSkillGrpupChildrenChildren = 586,
  SkillsSkillGrpupChildrenId = 587,
  SkillsSkillGrpupContentfulId = 588,
  SkillsSkillGrpupCreatedAt = 589,
  SkillsSkillGrpupId = 590,
  SkillsSkillGrpupInternalContent = 591,
  SkillsSkillGrpupInternalContentDigest = 592,
  SkillsSkillGrpupInternalContentFilePath = 593,
  SkillsSkillGrpupInternalDescription = 594,
  SkillsSkillGrpupInternalFieldOwners = 595,
  SkillsSkillGrpupInternalIgnoreType = 596,
  SkillsSkillGrpupInternalMediaType = 597,
  SkillsSkillGrpupInternalOwner = 598,
  SkillsSkillGrpupInternalType = 599,
  SkillsSkillGrpupName = 600,
  SkillsSkillGrpupNodeLocale = 601,
  SkillsSkillGrpupParentChildren = 602,
  SkillsSkillGrpupParentId = 603,
  SkillsSkillGrpupSkillMap = 604,
  SkillsSkillGrpupSkillMapChildren = 605,
  SkillsSkillGrpupSkillMapContentfulId = 606,
  SkillsSkillGrpupSkillMapCreatedAt = 607,
  SkillsSkillGrpupSkillMapExpanded = 608,
  SkillsSkillGrpupSkillMapId = 609,
  SkillsSkillGrpupSkillMapName = 610,
  SkillsSkillGrpupSkillMapNodeLocale = 611,
  SkillsSkillGrpupSkillMapSkillGroups = 612,
  SkillsSkillGrpupSkillMapSkills = 613,
  SkillsSkillGrpupSkillMapSortKey = 614,
  SkillsSkillGrpupSkillMapSpaceId = 615,
  SkillsSkillGrpupSkillMapUpdatedAt = 616,
  SkillsSkillGrpupSkills = 617,
  SkillsSkillGrpupSkillsBlogPost = 618,
  SkillsSkillGrpupSkillsChildren = 619,
  SkillsSkillGrpupSkillsContentfulId = 620,
  SkillsSkillGrpupSkillsCreatedAt = 621,
  SkillsSkillGrpupSkillsId = 622,
  SkillsSkillGrpupSkillsLevel = 623,
  SkillsSkillGrpupSkillsName = 624,
  SkillsSkillGrpupSkillsNodeLocale = 625,
  SkillsSkillGrpupSkillsOss = 626,
  SkillsSkillGrpupSkillsProject = 627,
  SkillsSkillGrpupSkillsSkillGrpup = 628,
  SkillsSkillGrpupSkillsSkillMap = 629,
  SkillsSkillGrpupSkillsSpaceId = 630,
  SkillsSkillGrpupSkillsUpdatedAt = 631,
  SkillsSkillGrpupSpaceId = 632,
  SkillsSkillGrpupSysRevision = 633,
  SkillsSkillGrpupSysType = 634,
  SkillsSkillGrpupUpdatedAt = 635,
  SkillsSkillMap = 636,
  SkillsSkillMapChildren = 637,
  SkillsSkillMapChildrenChildren = 638,
  SkillsSkillMapChildrenId = 639,
  SkillsSkillMapContentfulId = 640,
  SkillsSkillMapCreatedAt = 641,
  SkillsSkillMapExpanded = 642,
  SkillsSkillMapId = 643,
  SkillsSkillMapInternalContent = 644,
  SkillsSkillMapInternalContentDigest = 645,
  SkillsSkillMapInternalContentFilePath = 646,
  SkillsSkillMapInternalDescription = 647,
  SkillsSkillMapInternalFieldOwners = 648,
  SkillsSkillMapInternalIgnoreType = 649,
  SkillsSkillMapInternalMediaType = 650,
  SkillsSkillMapInternalOwner = 651,
  SkillsSkillMapInternalType = 652,
  SkillsSkillMapName = 653,
  SkillsSkillMapNodeLocale = 654,
  SkillsSkillMapParentChildren = 655,
  SkillsSkillMapParentId = 656,
  SkillsSkillMapSkillGroups = 657,
  SkillsSkillMapSkillGroupsChildren = 658,
  SkillsSkillMapSkillGroupsContentfulId = 659,
  SkillsSkillMapSkillGroupsCreatedAt = 660,
  SkillsSkillMapSkillGroupsId = 661,
  SkillsSkillMapSkillGroupsName = 662,
  SkillsSkillMapSkillGroupsNodeLocale = 663,
  SkillsSkillMapSkillGroupsSkillMap = 664,
  SkillsSkillMapSkillGroupsSkills = 665,
  SkillsSkillMapSkillGroupsSpaceId = 666,
  SkillsSkillMapSkillGroupsUpdatedAt = 667,
  SkillsSkillMapSkills = 668,
  SkillsSkillMapSkillsBlogPost = 669,
  SkillsSkillMapSkillsChildren = 670,
  SkillsSkillMapSkillsContentfulId = 671,
  SkillsSkillMapSkillsCreatedAt = 672,
  SkillsSkillMapSkillsId = 673,
  SkillsSkillMapSkillsLevel = 674,
  SkillsSkillMapSkillsName = 675,
  SkillsSkillMapSkillsNodeLocale = 676,
  SkillsSkillMapSkillsOss = 677,
  SkillsSkillMapSkillsProject = 678,
  SkillsSkillMapSkillsSkillGrpup = 679,
  SkillsSkillMapSkillsSkillMap = 680,
  SkillsSkillMapSkillsSpaceId = 681,
  SkillsSkillMapSkillsUpdatedAt = 682,
  SkillsSkillMapSortKey = 683,
  SkillsSkillMapSpaceId = 684,
  SkillsSkillMapSysRevision = 685,
  SkillsSkillMapSysType = 686,
  SkillsSkillMapUpdatedAt = 687,
  SkillsSpaceId = 688,
  SkillsSysRevision = 689,
  SkillsSysType = 690,
  SkillsUpdatedAt = 691,
  SpaceId = 692,
  SysContentTypeSysId = 693,
  SysContentTypeSysLinkType = 694,
  SysContentTypeSysType = 695,
  SysRevision = 696,
  SysType = 697,
  UpdatedAt = 698
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Expanded = 44,
  Id = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  Name = 55,
  NodeLocale = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  SkillGroups = 98,
  SkillGroupsChildren = 99,
  SkillGroupsChildrenChildren = 100,
  SkillGroupsChildrenChildrenChildren = 101,
  SkillGroupsChildrenChildrenId = 102,
  SkillGroupsChildrenId = 103,
  SkillGroupsChildrenInternalContent = 104,
  SkillGroupsChildrenInternalContentDigest = 105,
  SkillGroupsChildrenInternalContentFilePath = 106,
  SkillGroupsChildrenInternalDescription = 107,
  SkillGroupsChildrenInternalFieldOwners = 108,
  SkillGroupsChildrenInternalIgnoreType = 109,
  SkillGroupsChildrenInternalMediaType = 110,
  SkillGroupsChildrenInternalOwner = 111,
  SkillGroupsChildrenInternalType = 112,
  SkillGroupsChildrenParentChildren = 113,
  SkillGroupsChildrenParentId = 114,
  SkillGroupsContentfulId = 115,
  SkillGroupsCreatedAt = 116,
  SkillGroupsId = 117,
  SkillGroupsInternalContent = 118,
  SkillGroupsInternalContentDigest = 119,
  SkillGroupsInternalContentFilePath = 120,
  SkillGroupsInternalDescription = 121,
  SkillGroupsInternalFieldOwners = 122,
  SkillGroupsInternalIgnoreType = 123,
  SkillGroupsInternalMediaType = 124,
  SkillGroupsInternalOwner = 125,
  SkillGroupsInternalType = 126,
  SkillGroupsName = 127,
  SkillGroupsNodeLocale = 128,
  SkillGroupsParentChildren = 129,
  SkillGroupsParentChildrenChildren = 130,
  SkillGroupsParentChildrenId = 131,
  SkillGroupsParentId = 132,
  SkillGroupsParentInternalContent = 133,
  SkillGroupsParentInternalContentDigest = 134,
  SkillGroupsParentInternalContentFilePath = 135,
  SkillGroupsParentInternalDescription = 136,
  SkillGroupsParentInternalFieldOwners = 137,
  SkillGroupsParentInternalIgnoreType = 138,
  SkillGroupsParentInternalMediaType = 139,
  SkillGroupsParentInternalOwner = 140,
  SkillGroupsParentInternalType = 141,
  SkillGroupsParentParentChildren = 142,
  SkillGroupsParentParentId = 143,
  SkillGroupsSkillMap = 144,
  SkillGroupsSkillMapChildren = 145,
  SkillGroupsSkillMapChildrenChildren = 146,
  SkillGroupsSkillMapChildrenId = 147,
  SkillGroupsSkillMapContentfulId = 148,
  SkillGroupsSkillMapCreatedAt = 149,
  SkillGroupsSkillMapExpanded = 150,
  SkillGroupsSkillMapId = 151,
  SkillGroupsSkillMapInternalContent = 152,
  SkillGroupsSkillMapInternalContentDigest = 153,
  SkillGroupsSkillMapInternalContentFilePath = 154,
  SkillGroupsSkillMapInternalDescription = 155,
  SkillGroupsSkillMapInternalFieldOwners = 156,
  SkillGroupsSkillMapInternalIgnoreType = 157,
  SkillGroupsSkillMapInternalMediaType = 158,
  SkillGroupsSkillMapInternalOwner = 159,
  SkillGroupsSkillMapInternalType = 160,
  SkillGroupsSkillMapName = 161,
  SkillGroupsSkillMapNodeLocale = 162,
  SkillGroupsSkillMapParentChildren = 163,
  SkillGroupsSkillMapParentId = 164,
  SkillGroupsSkillMapSkillGroups = 165,
  SkillGroupsSkillMapSkillGroupsChildren = 166,
  SkillGroupsSkillMapSkillGroupsContentfulId = 167,
  SkillGroupsSkillMapSkillGroupsCreatedAt = 168,
  SkillGroupsSkillMapSkillGroupsId = 169,
  SkillGroupsSkillMapSkillGroupsName = 170,
  SkillGroupsSkillMapSkillGroupsNodeLocale = 171,
  SkillGroupsSkillMapSkillGroupsSkillMap = 172,
  SkillGroupsSkillMapSkillGroupsSkills = 173,
  SkillGroupsSkillMapSkillGroupsSpaceId = 174,
  SkillGroupsSkillMapSkillGroupsUpdatedAt = 175,
  SkillGroupsSkillMapSkills = 176,
  SkillGroupsSkillMapSkillsBlogPost = 177,
  SkillGroupsSkillMapSkillsChildren = 178,
  SkillGroupsSkillMapSkillsContentfulId = 179,
  SkillGroupsSkillMapSkillsCreatedAt = 180,
  SkillGroupsSkillMapSkillsId = 181,
  SkillGroupsSkillMapSkillsLevel = 182,
  SkillGroupsSkillMapSkillsName = 183,
  SkillGroupsSkillMapSkillsNodeLocale = 184,
  SkillGroupsSkillMapSkillsOss = 185,
  SkillGroupsSkillMapSkillsProject = 186,
  SkillGroupsSkillMapSkillsSkillGrpup = 187,
  SkillGroupsSkillMapSkillsSkillMap = 188,
  SkillGroupsSkillMapSkillsSpaceId = 189,
  SkillGroupsSkillMapSkillsUpdatedAt = 190,
  SkillGroupsSkillMapSortKey = 191,
  SkillGroupsSkillMapSpaceId = 192,
  SkillGroupsSkillMapSysRevision = 193,
  SkillGroupsSkillMapSysType = 194,
  SkillGroupsSkillMapUpdatedAt = 195,
  SkillGroupsSkills = 196,
  SkillGroupsSkillsBlogPost = 197,
  SkillGroupsSkillsBlogPostChildren = 198,
  SkillGroupsSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 199,
  SkillGroupsSkillsBlogPostContentfulId = 200,
  SkillGroupsSkillsBlogPostCreated = 201,
  SkillGroupsSkillsBlogPostCreatedAt = 202,
  SkillGroupsSkillsBlogPostExcerpt = 203,
  SkillGroupsSkillsBlogPostId = 204,
  SkillGroupsSkillsBlogPostNodeLocale = 205,
  SkillGroupsSkillsBlogPostSlug = 206,
  SkillGroupsSkillsBlogPostSpaceId = 207,
  SkillGroupsSkillsBlogPostTags = 208,
  SkillGroupsSkillsBlogPostTitle = 209,
  SkillGroupsSkillsBlogPostUpdated = 210,
  SkillGroupsSkillsBlogPostUpdatedAt = 211,
  SkillGroupsSkillsChildren = 212,
  SkillGroupsSkillsChildrenChildren = 213,
  SkillGroupsSkillsChildrenId = 214,
  SkillGroupsSkillsContentfulId = 215,
  SkillGroupsSkillsCreatedAt = 216,
  SkillGroupsSkillsId = 217,
  SkillGroupsSkillsInternalContent = 218,
  SkillGroupsSkillsInternalContentDigest = 219,
  SkillGroupsSkillsInternalContentFilePath = 220,
  SkillGroupsSkillsInternalDescription = 221,
  SkillGroupsSkillsInternalFieldOwners = 222,
  SkillGroupsSkillsInternalIgnoreType = 223,
  SkillGroupsSkillsInternalMediaType = 224,
  SkillGroupsSkillsInternalOwner = 225,
  SkillGroupsSkillsInternalType = 226,
  SkillGroupsSkillsLevel = 227,
  SkillGroupsSkillsName = 228,
  SkillGroupsSkillsNodeLocale = 229,
  SkillGroupsSkillsOss = 230,
  SkillGroupsSkillsOssChildren = 231,
  SkillGroupsSkillsOssChildrenContentfulOssDetailTextNode = 232,
  SkillGroupsSkillsOssContentfulId = 233,
  SkillGroupsSkillsOssCreatedAt = 234,
  SkillGroupsSkillsOssHref = 235,
  SkillGroupsSkillsOssId = 236,
  SkillGroupsSkillsOssName = 237,
  SkillGroupsSkillsOssNodeLocale = 238,
  SkillGroupsSkillsOssSpaceId = 239,
  SkillGroupsSkillsOssStartDate = 240,
  SkillGroupsSkillsOssSubName = 241,
  SkillGroupsSkillsOssTags = 242,
  SkillGroupsSkillsOssUpdatedAt = 243,
  SkillGroupsSkillsParentChildren = 244,
  SkillGroupsSkillsParentId = 245,
  SkillGroupsSkillsProject = 246,
  SkillGroupsSkillsProjectChildren = 247,
  SkillGroupsSkillsProjectChildrenContentfulProjectDetailTextNode = 248,
  SkillGroupsSkillsProjectContentfulId = 249,
  SkillGroupsSkillsProjectCreatedAt = 250,
  SkillGroupsSkillsProjectEndDate = 251,
  SkillGroupsSkillsProjectId = 252,
  SkillGroupsSkillsProjectName = 253,
  SkillGroupsSkillsProjectNodeLocale = 254,
  SkillGroupsSkillsProjectSpaceId = 255,
  SkillGroupsSkillsProjectStartDate = 256,
  SkillGroupsSkillsProjectSubName = 257,
  SkillGroupsSkillsProjectTags = 258,
  SkillGroupsSkillsProjectUpdatedAt = 259,
  SkillGroupsSkillsSkillGrpup = 260,
  SkillGroupsSkillsSkillGrpupChildren = 261,
  SkillGroupsSkillsSkillGrpupContentfulId = 262,
  SkillGroupsSkillsSkillGrpupCreatedAt = 263,
  SkillGroupsSkillsSkillGrpupId = 264,
  SkillGroupsSkillsSkillGrpupName = 265,
  SkillGroupsSkillsSkillGrpupNodeLocale = 266,
  SkillGroupsSkillsSkillGrpupSkillMap = 267,
  SkillGroupsSkillsSkillGrpupSkills = 268,
  SkillGroupsSkillsSkillGrpupSpaceId = 269,
  SkillGroupsSkillsSkillGrpupUpdatedAt = 270,
  SkillGroupsSkillsSkillMap = 271,
  SkillGroupsSkillsSkillMapChildren = 272,
  SkillGroupsSkillsSkillMapContentfulId = 273,
  SkillGroupsSkillsSkillMapCreatedAt = 274,
  SkillGroupsSkillsSkillMapExpanded = 275,
  SkillGroupsSkillsSkillMapId = 276,
  SkillGroupsSkillsSkillMapName = 277,
  SkillGroupsSkillsSkillMapNodeLocale = 278,
  SkillGroupsSkillsSkillMapSkillGroups = 279,
  SkillGroupsSkillsSkillMapSkills = 280,
  SkillGroupsSkillsSkillMapSortKey = 281,
  SkillGroupsSkillsSkillMapSpaceId = 282,
  SkillGroupsSkillsSkillMapUpdatedAt = 283,
  SkillGroupsSkillsSpaceId = 284,
  SkillGroupsSkillsSysRevision = 285,
  SkillGroupsSkillsSysType = 286,
  SkillGroupsSkillsUpdatedAt = 287,
  SkillGroupsSpaceId = 288,
  SkillGroupsSysRevision = 289,
  SkillGroupsSysType = 290,
  SkillGroupsUpdatedAt = 291,
  Skills = 292,
  SkillsBlogPost = 293,
  SkillsBlogPostCategoryBlogPost = 294,
  SkillsBlogPostCategoryChildren = 295,
  SkillsBlogPostCategoryContentfulId = 296,
  SkillsBlogPostCategoryCreatedAt = 297,
  SkillsBlogPostCategoryId = 298,
  SkillsBlogPostCategoryName = 299,
  SkillsBlogPostCategoryNodeLocale = 300,
  SkillsBlogPostCategorySortKey = 301,
  SkillsBlogPostCategorySpaceId = 302,
  SkillsBlogPostCategoryUpdatedAt = 303,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 304,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 305,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 306,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 307,
  SkillsBlogPostChildren = 308,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 309,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 310,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 311,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 312,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 313,
  SkillsBlogPostChildrenChildren = 314,
  SkillsBlogPostChildrenId = 315,
  SkillsBlogPostContentChildren = 316,
  SkillsBlogPostContentChildrenMdx = 317,
  SkillsBlogPostContentContent = 318,
  SkillsBlogPostContentId = 319,
  SkillsBlogPostContentfulId = 320,
  SkillsBlogPostCreated = 321,
  SkillsBlogPostCreatedAt = 322,
  SkillsBlogPostExcerpt = 323,
  SkillsBlogPostId = 324,
  SkillsBlogPostInternalContent = 325,
  SkillsBlogPostInternalContentDigest = 326,
  SkillsBlogPostInternalContentFilePath = 327,
  SkillsBlogPostInternalDescription = 328,
  SkillsBlogPostInternalFieldOwners = 329,
  SkillsBlogPostInternalIgnoreType = 330,
  SkillsBlogPostInternalMediaType = 331,
  SkillsBlogPostInternalOwner = 332,
  SkillsBlogPostInternalType = 333,
  SkillsBlogPostNodeLocale = 334,
  SkillsBlogPostParentChildren = 335,
  SkillsBlogPostParentId = 336,
  SkillsBlogPostSlug = 337,
  SkillsBlogPostSpaceId = 338,
  SkillsBlogPostSysRevision = 339,
  SkillsBlogPostSysType = 340,
  SkillsBlogPostTags = 341,
  SkillsBlogPostTagsBlogPost = 342,
  SkillsBlogPostTagsChildren = 343,
  SkillsBlogPostTagsContentfulId = 344,
  SkillsBlogPostTagsCreatedAt = 345,
  SkillsBlogPostTagsId = 346,
  SkillsBlogPostTagsLevel = 347,
  SkillsBlogPostTagsName = 348,
  SkillsBlogPostTagsNodeLocale = 349,
  SkillsBlogPostTagsOss = 350,
  SkillsBlogPostTagsProject = 351,
  SkillsBlogPostTagsSkillGrpup = 352,
  SkillsBlogPostTagsSkillMap = 353,
  SkillsBlogPostTagsSpaceId = 354,
  SkillsBlogPostTagsUpdatedAt = 355,
  SkillsBlogPostThumbnailChildren = 356,
  SkillsBlogPostThumbnailContentfulId = 357,
  SkillsBlogPostThumbnailCreatedAt = 358,
  SkillsBlogPostThumbnailDescription = 359,
  SkillsBlogPostThumbnailFilename = 360,
  SkillsBlogPostThumbnailFilesize = 361,
  SkillsBlogPostThumbnailGatsbyImage = 362,
  SkillsBlogPostThumbnailGatsbyImageData = 363,
  SkillsBlogPostThumbnailHeight = 364,
  SkillsBlogPostThumbnailId = 365,
  SkillsBlogPostThumbnailMimeType = 366,
  SkillsBlogPostThumbnailNodeLocale = 367,
  SkillsBlogPostThumbnailPlaceholderUrl = 368,
  SkillsBlogPostThumbnailPublicUrl = 369,
  SkillsBlogPostThumbnailSize = 370,
  SkillsBlogPostThumbnailSpaceId = 371,
  SkillsBlogPostThumbnailTitle = 372,
  SkillsBlogPostThumbnailUpdatedAt = 373,
  SkillsBlogPostThumbnailUrl = 374,
  SkillsBlogPostThumbnailWidth = 375,
  SkillsBlogPostTitle = 376,
  SkillsBlogPostUpdated = 377,
  SkillsBlogPostUpdatedAt = 378,
  SkillsChildren = 379,
  SkillsChildrenChildren = 380,
  SkillsChildrenChildrenChildren = 381,
  SkillsChildrenChildrenId = 382,
  SkillsChildrenId = 383,
  SkillsChildrenInternalContent = 384,
  SkillsChildrenInternalContentDigest = 385,
  SkillsChildrenInternalContentFilePath = 386,
  SkillsChildrenInternalDescription = 387,
  SkillsChildrenInternalFieldOwners = 388,
  SkillsChildrenInternalIgnoreType = 389,
  SkillsChildrenInternalMediaType = 390,
  SkillsChildrenInternalOwner = 391,
  SkillsChildrenInternalType = 392,
  SkillsChildrenParentChildren = 393,
  SkillsChildrenParentId = 394,
  SkillsContentfulId = 395,
  SkillsCreatedAt = 396,
  SkillsId = 397,
  SkillsInternalContent = 398,
  SkillsInternalContentDigest = 399,
  SkillsInternalContentFilePath = 400,
  SkillsInternalDescription = 401,
  SkillsInternalFieldOwners = 402,
  SkillsInternalIgnoreType = 403,
  SkillsInternalMediaType = 404,
  SkillsInternalOwner = 405,
  SkillsInternalType = 406,
  SkillsLevel = 407,
  SkillsName = 408,
  SkillsNodeLocale = 409,
  SkillsOss = 410,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 411,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMdx = 412,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 413,
  SkillsOssChildContentfulOssDetailTextNodeId = 414,
  SkillsOssChildren = 415,
  SkillsOssChildrenContentfulOssDetailTextNode = 416,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 417,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 418,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 419,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 420,
  SkillsOssChildrenChildren = 421,
  SkillsOssChildrenId = 422,
  SkillsOssContentfulId = 423,
  SkillsOssCreatedAt = 424,
  SkillsOssDetailChildren = 425,
  SkillsOssDetailChildrenMdx = 426,
  SkillsOssDetailDetail = 427,
  SkillsOssDetailId = 428,
  SkillsOssHref = 429,
  SkillsOssIconChildren = 430,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 431,
  SkillsOssIconContact = 432,
  SkillsOssIconContentfulId = 433,
  SkillsOssIconCreatedAt = 434,
  SkillsOssIconHistory = 435,
  SkillsOssIconId = 436,
  SkillsOssIconName = 437,
  SkillsOssIconNodeLocale = 438,
  SkillsOssIconOss = 439,
  SkillsOssIconProject = 440,
  SkillsOssIconSpaceId = 441,
  SkillsOssIconUpdatedAt = 442,
  SkillsOssIconWhatICanDo = 443,
  SkillsOssId = 444,
  SkillsOssImageChildren = 445,
  SkillsOssImageContentfulId = 446,
  SkillsOssImageCreatedAt = 447,
  SkillsOssImageDescription = 448,
  SkillsOssImageFilename = 449,
  SkillsOssImageFilesize = 450,
  SkillsOssImageGatsbyImage = 451,
  SkillsOssImageGatsbyImageData = 452,
  SkillsOssImageHeight = 453,
  SkillsOssImageId = 454,
  SkillsOssImageMimeType = 455,
  SkillsOssImageNodeLocale = 456,
  SkillsOssImagePlaceholderUrl = 457,
  SkillsOssImagePublicUrl = 458,
  SkillsOssImageSize = 459,
  SkillsOssImageSpaceId = 460,
  SkillsOssImageTitle = 461,
  SkillsOssImageUpdatedAt = 462,
  SkillsOssImageUrl = 463,
  SkillsOssImageWidth = 464,
  SkillsOssInternalContent = 465,
  SkillsOssInternalContentDigest = 466,
  SkillsOssInternalContentFilePath = 467,
  SkillsOssInternalDescription = 468,
  SkillsOssInternalFieldOwners = 469,
  SkillsOssInternalIgnoreType = 470,
  SkillsOssInternalMediaType = 471,
  SkillsOssInternalOwner = 472,
  SkillsOssInternalType = 473,
  SkillsOssName = 474,
  SkillsOssNodeLocale = 475,
  SkillsOssParentChildren = 476,
  SkillsOssParentId = 477,
  SkillsOssSpaceId = 478,
  SkillsOssStartDate = 479,
  SkillsOssSubName = 480,
  SkillsOssSysRevision = 481,
  SkillsOssSysType = 482,
  SkillsOssTags = 483,
  SkillsOssTagsBlogPost = 484,
  SkillsOssTagsChildren = 485,
  SkillsOssTagsContentfulId = 486,
  SkillsOssTagsCreatedAt = 487,
  SkillsOssTagsId = 488,
  SkillsOssTagsLevel = 489,
  SkillsOssTagsName = 490,
  SkillsOssTagsNodeLocale = 491,
  SkillsOssTagsOss = 492,
  SkillsOssTagsProject = 493,
  SkillsOssTagsSkillGrpup = 494,
  SkillsOssTagsSkillMap = 495,
  SkillsOssTagsSpaceId = 496,
  SkillsOssTagsUpdatedAt = 497,
  SkillsOssUpdatedAt = 498,
  SkillsParentChildren = 499,
  SkillsParentChildrenChildren = 500,
  SkillsParentChildrenId = 501,
  SkillsParentId = 502,
  SkillsParentInternalContent = 503,
  SkillsParentInternalContentDigest = 504,
  SkillsParentInternalContentFilePath = 505,
  SkillsParentInternalDescription = 506,
  SkillsParentInternalFieldOwners = 507,
  SkillsParentInternalIgnoreType = 508,
  SkillsParentInternalMediaType = 509,
  SkillsParentInternalOwner = 510,
  SkillsParentInternalType = 511,
  SkillsParentParentChildren = 512,
  SkillsParentParentId = 513,
  SkillsProject = 514,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 515,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 516,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 517,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 518,
  SkillsProjectChildren = 519,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 520,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 521,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 522,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 523,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 524,
  SkillsProjectChildrenChildren = 525,
  SkillsProjectChildrenId = 526,
  SkillsProjectContentfulId = 527,
  SkillsProjectCreatedAt = 528,
  SkillsProjectDetailChildren = 529,
  SkillsProjectDetailChildrenMdx = 530,
  SkillsProjectDetailDetail = 531,
  SkillsProjectDetailId = 532,
  SkillsProjectEndDate = 533,
  SkillsProjectIconChildren = 534,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 535,
  SkillsProjectIconContact = 536,
  SkillsProjectIconContentfulId = 537,
  SkillsProjectIconCreatedAt = 538,
  SkillsProjectIconHistory = 539,
  SkillsProjectIconId = 540,
  SkillsProjectIconName = 541,
  SkillsProjectIconNodeLocale = 542,
  SkillsProjectIconOss = 543,
  SkillsProjectIconProject = 544,
  SkillsProjectIconSpaceId = 545,
  SkillsProjectIconUpdatedAt = 546,
  SkillsProjectIconWhatICanDo = 547,
  SkillsProjectId = 548,
  SkillsProjectInternalContent = 549,
  SkillsProjectInternalContentDigest = 550,
  SkillsProjectInternalContentFilePath = 551,
  SkillsProjectInternalDescription = 552,
  SkillsProjectInternalFieldOwners = 553,
  SkillsProjectInternalIgnoreType = 554,
  SkillsProjectInternalMediaType = 555,
  SkillsProjectInternalOwner = 556,
  SkillsProjectInternalType = 557,
  SkillsProjectName = 558,
  SkillsProjectNodeLocale = 559,
  SkillsProjectParentChildren = 560,
  SkillsProjectParentId = 561,
  SkillsProjectSpaceId = 562,
  SkillsProjectStartDate = 563,
  SkillsProjectSubName = 564,
  SkillsProjectSysRevision = 565,
  SkillsProjectSysType = 566,
  SkillsProjectTags = 567,
  SkillsProjectTagsBlogPost = 568,
  SkillsProjectTagsChildren = 569,
  SkillsProjectTagsContentfulId = 570,
  SkillsProjectTagsCreatedAt = 571,
  SkillsProjectTagsId = 572,
  SkillsProjectTagsLevel = 573,
  SkillsProjectTagsName = 574,
  SkillsProjectTagsNodeLocale = 575,
  SkillsProjectTagsOss = 576,
  SkillsProjectTagsProject = 577,
  SkillsProjectTagsSkillGrpup = 578,
  SkillsProjectTagsSkillMap = 579,
  SkillsProjectTagsSpaceId = 580,
  SkillsProjectTagsUpdatedAt = 581,
  SkillsProjectUpdatedAt = 582,
  SkillsSkillGrpup = 583,
  SkillsSkillGrpupChildren = 584,
  SkillsSkillGrpupChildrenChildren = 585,
  SkillsSkillGrpupChildrenId = 586,
  SkillsSkillGrpupContentfulId = 587,
  SkillsSkillGrpupCreatedAt = 588,
  SkillsSkillGrpupId = 589,
  SkillsSkillGrpupInternalContent = 590,
  SkillsSkillGrpupInternalContentDigest = 591,
  SkillsSkillGrpupInternalContentFilePath = 592,
  SkillsSkillGrpupInternalDescription = 593,
  SkillsSkillGrpupInternalFieldOwners = 594,
  SkillsSkillGrpupInternalIgnoreType = 595,
  SkillsSkillGrpupInternalMediaType = 596,
  SkillsSkillGrpupInternalOwner = 597,
  SkillsSkillGrpupInternalType = 598,
  SkillsSkillGrpupName = 599,
  SkillsSkillGrpupNodeLocale = 600,
  SkillsSkillGrpupParentChildren = 601,
  SkillsSkillGrpupParentId = 602,
  SkillsSkillGrpupSkillMap = 603,
  SkillsSkillGrpupSkillMapChildren = 604,
  SkillsSkillGrpupSkillMapContentfulId = 605,
  SkillsSkillGrpupSkillMapCreatedAt = 606,
  SkillsSkillGrpupSkillMapExpanded = 607,
  SkillsSkillGrpupSkillMapId = 608,
  SkillsSkillGrpupSkillMapName = 609,
  SkillsSkillGrpupSkillMapNodeLocale = 610,
  SkillsSkillGrpupSkillMapSkillGroups = 611,
  SkillsSkillGrpupSkillMapSkills = 612,
  SkillsSkillGrpupSkillMapSortKey = 613,
  SkillsSkillGrpupSkillMapSpaceId = 614,
  SkillsSkillGrpupSkillMapUpdatedAt = 615,
  SkillsSkillGrpupSkills = 616,
  SkillsSkillGrpupSkillsBlogPost = 617,
  SkillsSkillGrpupSkillsChildren = 618,
  SkillsSkillGrpupSkillsContentfulId = 619,
  SkillsSkillGrpupSkillsCreatedAt = 620,
  SkillsSkillGrpupSkillsId = 621,
  SkillsSkillGrpupSkillsLevel = 622,
  SkillsSkillGrpupSkillsName = 623,
  SkillsSkillGrpupSkillsNodeLocale = 624,
  SkillsSkillGrpupSkillsOss = 625,
  SkillsSkillGrpupSkillsProject = 626,
  SkillsSkillGrpupSkillsSkillGrpup = 627,
  SkillsSkillGrpupSkillsSkillMap = 628,
  SkillsSkillGrpupSkillsSpaceId = 629,
  SkillsSkillGrpupSkillsUpdatedAt = 630,
  SkillsSkillGrpupSpaceId = 631,
  SkillsSkillGrpupSysRevision = 632,
  SkillsSkillGrpupSysType = 633,
  SkillsSkillGrpupUpdatedAt = 634,
  SkillsSkillMap = 635,
  SkillsSkillMapChildren = 636,
  SkillsSkillMapChildrenChildren = 637,
  SkillsSkillMapChildrenId = 638,
  SkillsSkillMapContentfulId = 639,
  SkillsSkillMapCreatedAt = 640,
  SkillsSkillMapExpanded = 641,
  SkillsSkillMapId = 642,
  SkillsSkillMapInternalContent = 643,
  SkillsSkillMapInternalContentDigest = 644,
  SkillsSkillMapInternalContentFilePath = 645,
  SkillsSkillMapInternalDescription = 646,
  SkillsSkillMapInternalFieldOwners = 647,
  SkillsSkillMapInternalIgnoreType = 648,
  SkillsSkillMapInternalMediaType = 649,
  SkillsSkillMapInternalOwner = 650,
  SkillsSkillMapInternalType = 651,
  SkillsSkillMapName = 652,
  SkillsSkillMapNodeLocale = 653,
  SkillsSkillMapParentChildren = 654,
  SkillsSkillMapParentId = 655,
  SkillsSkillMapSkillGroups = 656,
  SkillsSkillMapSkillGroupsChildren = 657,
  SkillsSkillMapSkillGroupsContentfulId = 658,
  SkillsSkillMapSkillGroupsCreatedAt = 659,
  SkillsSkillMapSkillGroupsId = 660,
  SkillsSkillMapSkillGroupsName = 661,
  SkillsSkillMapSkillGroupsNodeLocale = 662,
  SkillsSkillMapSkillGroupsSkillMap = 663,
  SkillsSkillMapSkillGroupsSkills = 664,
  SkillsSkillMapSkillGroupsSpaceId = 665,
  SkillsSkillMapSkillGroupsUpdatedAt = 666,
  SkillsSkillMapSkills = 667,
  SkillsSkillMapSkillsBlogPost = 668,
  SkillsSkillMapSkillsChildren = 669,
  SkillsSkillMapSkillsContentfulId = 670,
  SkillsSkillMapSkillsCreatedAt = 671,
  SkillsSkillMapSkillsId = 672,
  SkillsSkillMapSkillsLevel = 673,
  SkillsSkillMapSkillsName = 674,
  SkillsSkillMapSkillsNodeLocale = 675,
  SkillsSkillMapSkillsOss = 676,
  SkillsSkillMapSkillsProject = 677,
  SkillsSkillMapSkillsSkillGrpup = 678,
  SkillsSkillMapSkillsSkillMap = 679,
  SkillsSkillMapSkillsSpaceId = 680,
  SkillsSkillMapSkillsUpdatedAt = 681,
  SkillsSkillMapSortKey = 682,
  SkillsSkillMapSpaceId = 683,
  SkillsSkillMapSysRevision = 684,
  SkillsSkillMapSysType = 685,
  SkillsSkillMapUpdatedAt = 686,
  SkillsSpaceId = 687,
  SkillsSysRevision = 688,
  SkillsSysType = 689,
  SkillsUpdatedAt = 690,
  SortKey = 691,
  SpaceId = 692,
  SysContentTypeSysId = 693,
  SysContentTypeSysLinkType = 694,
  SysContentTypeSysType = 695,
  SysRevision = 696,
  SysType = 697,
  UpdatedAt = 698
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
  BlogPostCategoryInternalContentFilePath = 24,
  BlogPostCategoryInternalDescription = 25,
  BlogPostCategoryInternalFieldOwners = 26,
  BlogPostCategoryInternalIgnoreType = 27,
  BlogPostCategoryInternalMediaType = 28,
  BlogPostCategoryInternalOwner = 29,
  BlogPostCategoryInternalType = 30,
  BlogPostCategoryName = 31,
  BlogPostCategoryNodeLocale = 32,
  BlogPostCategoryParentChildren = 33,
  BlogPostCategoryParentId = 34,
  BlogPostCategorySortKey = 35,
  BlogPostCategorySpaceId = 36,
  BlogPostCategorySysRevision = 37,
  BlogPostCategorySysType = 38,
  BlogPostCategoryUpdatedAt = 39,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxBody = 40,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxChildren = 41,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 42,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 43,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHeadings = 44,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHtml = 45,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxId = 46,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 47,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxRawBody = 48,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxSlug = 49,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 50,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 51,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 52,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 53,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxBody = 54,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 55,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 56,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 57,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 58,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 59,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxId = 60,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 61,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 62,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 63,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 64,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 65,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 66,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 67,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 68,
  BlogPostChildContentfulBlogPostContentTextNodeId = 69,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 70,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 71,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentFilePath = 72,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 73,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 74,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 75,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 76,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 77,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 78,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 79,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 80,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 81,
  BlogPostChildren = 82,
  BlogPostChildrenContentfulBlogPostContentTextNode = 83,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxBody = 84,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 85,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 86,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 87,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 88,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 89,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxId = 90,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 91,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 92,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 93,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 94,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 95,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 96,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 97,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 98,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 99,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 100,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 101,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 102,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 103,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 104,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 105,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 106,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 107,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 108,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 109,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 110,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 111,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 112,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 113,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 114,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 115,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentFilePath = 116,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 117,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 118,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 119,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 120,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 121,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 122,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 123,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 124,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 125,
  BlogPostChildrenChildren = 126,
  BlogPostChildrenChildrenChildren = 127,
  BlogPostChildrenChildrenId = 128,
  BlogPostChildrenId = 129,
  BlogPostChildrenInternalContent = 130,
  BlogPostChildrenInternalContentDigest = 131,
  BlogPostChildrenInternalContentFilePath = 132,
  BlogPostChildrenInternalDescription = 133,
  BlogPostChildrenInternalFieldOwners = 134,
  BlogPostChildrenInternalIgnoreType = 135,
  BlogPostChildrenInternalMediaType = 136,
  BlogPostChildrenInternalOwner = 137,
  BlogPostChildrenInternalType = 138,
  BlogPostChildrenParentChildren = 139,
  BlogPostChildrenParentId = 140,
  BlogPostContentChildMdxBody = 141,
  BlogPostContentChildMdxChildren = 142,
  BlogPostContentChildMdxExcerpt = 143,
  BlogPostContentChildMdxFileAbsolutePath = 144,
  BlogPostContentChildMdxHeadings = 145,
  BlogPostContentChildMdxHtml = 146,
  BlogPostContentChildMdxId = 147,
  BlogPostContentChildMdxMdxAst = 148,
  BlogPostContentChildMdxRawBody = 149,
  BlogPostContentChildMdxSlug = 150,
  BlogPostContentChildMdxTableOfContents = 151,
  BlogPostContentChildMdxTimeToRead = 152,
  BlogPostContentChildren = 153,
  BlogPostContentChildrenMdx = 154,
  BlogPostContentChildrenMdxBody = 155,
  BlogPostContentChildrenMdxChildren = 156,
  BlogPostContentChildrenMdxExcerpt = 157,
  BlogPostContentChildrenMdxFileAbsolutePath = 158,
  BlogPostContentChildrenMdxHeadings = 159,
  BlogPostContentChildrenMdxHtml = 160,
  BlogPostContentChildrenMdxId = 161,
  BlogPostContentChildrenMdxMdxAst = 162,
  BlogPostContentChildrenMdxRawBody = 163,
  BlogPostContentChildrenMdxSlug = 164,
  BlogPostContentChildrenMdxTableOfContents = 165,
  BlogPostContentChildrenMdxTimeToRead = 166,
  BlogPostContentChildrenChildren = 167,
  BlogPostContentChildrenId = 168,
  BlogPostContentContent = 169,
  BlogPostContentId = 170,
  BlogPostContentInternalContent = 171,
  BlogPostContentInternalContentDigest = 172,
  BlogPostContentInternalContentFilePath = 173,
  BlogPostContentInternalDescription = 174,
  BlogPostContentInternalFieldOwners = 175,
  BlogPostContentInternalIgnoreType = 176,
  BlogPostContentInternalMediaType = 177,
  BlogPostContentInternalOwner = 178,
  BlogPostContentInternalType = 179,
  BlogPostContentParentChildren = 180,
  BlogPostContentParentId = 181,
  BlogPostContentSysType = 182,
  BlogPostContentfulId = 183,
  BlogPostCreated = 184,
  BlogPostCreatedAt = 185,
  BlogPostExcerpt = 186,
  BlogPostId = 187,
  BlogPostInternalContent = 188,
  BlogPostInternalContentDigest = 189,
  BlogPostInternalContentFilePath = 190,
  BlogPostInternalDescription = 191,
  BlogPostInternalFieldOwners = 192,
  BlogPostInternalIgnoreType = 193,
  BlogPostInternalMediaType = 194,
  BlogPostInternalOwner = 195,
  BlogPostInternalType = 196,
  BlogPostNodeLocale = 197,
  BlogPostParentChildren = 198,
  BlogPostParentChildrenChildren = 199,
  BlogPostParentChildrenId = 200,
  BlogPostParentId = 201,
  BlogPostParentInternalContent = 202,
  BlogPostParentInternalContentDigest = 203,
  BlogPostParentInternalContentFilePath = 204,
  BlogPostParentInternalDescription = 205,
  BlogPostParentInternalFieldOwners = 206,
  BlogPostParentInternalIgnoreType = 207,
  BlogPostParentInternalMediaType = 208,
  BlogPostParentInternalOwner = 209,
  BlogPostParentInternalType = 210,
  BlogPostParentParentChildren = 211,
  BlogPostParentParentId = 212,
  BlogPostSlug = 213,
  BlogPostSpaceId = 214,
  BlogPostSysRevision = 215,
  BlogPostSysType = 216,
  BlogPostTags = 217,
  BlogPostTagsBlogPost = 218,
  BlogPostTagsBlogPostChildren = 219,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 220,
  BlogPostTagsBlogPostContentfulId = 221,
  BlogPostTagsBlogPostCreated = 222,
  BlogPostTagsBlogPostCreatedAt = 223,
  BlogPostTagsBlogPostExcerpt = 224,
  BlogPostTagsBlogPostId = 225,
  BlogPostTagsBlogPostNodeLocale = 226,
  BlogPostTagsBlogPostSlug = 227,
  BlogPostTagsBlogPostSpaceId = 228,
  BlogPostTagsBlogPostTags = 229,
  BlogPostTagsBlogPostTitle = 230,
  BlogPostTagsBlogPostUpdated = 231,
  BlogPostTagsBlogPostUpdatedAt = 232,
  BlogPostTagsChildren = 233,
  BlogPostTagsChildrenChildren = 234,
  BlogPostTagsChildrenId = 235,
  BlogPostTagsContentfulId = 236,
  BlogPostTagsCreatedAt = 237,
  BlogPostTagsId = 238,
  BlogPostTagsInternalContent = 239,
  BlogPostTagsInternalContentDigest = 240,
  BlogPostTagsInternalContentFilePath = 241,
  BlogPostTagsInternalDescription = 242,
  BlogPostTagsInternalFieldOwners = 243,
  BlogPostTagsInternalIgnoreType = 244,
  BlogPostTagsInternalMediaType = 245,
  BlogPostTagsInternalOwner = 246,
  BlogPostTagsInternalType = 247,
  BlogPostTagsLevel = 248,
  BlogPostTagsName = 249,
  BlogPostTagsNodeLocale = 250,
  BlogPostTagsOss = 251,
  BlogPostTagsOssChildren = 252,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 253,
  BlogPostTagsOssContentfulId = 254,
  BlogPostTagsOssCreatedAt = 255,
  BlogPostTagsOssHref = 256,
  BlogPostTagsOssId = 257,
  BlogPostTagsOssName = 258,
  BlogPostTagsOssNodeLocale = 259,
  BlogPostTagsOssSpaceId = 260,
  BlogPostTagsOssStartDate = 261,
  BlogPostTagsOssSubName = 262,
  BlogPostTagsOssTags = 263,
  BlogPostTagsOssUpdatedAt = 264,
  BlogPostTagsParentChildren = 265,
  BlogPostTagsParentId = 266,
  BlogPostTagsProject = 267,
  BlogPostTagsProjectChildren = 268,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 269,
  BlogPostTagsProjectContentfulId = 270,
  BlogPostTagsProjectCreatedAt = 271,
  BlogPostTagsProjectEndDate = 272,
  BlogPostTagsProjectId = 273,
  BlogPostTagsProjectName = 274,
  BlogPostTagsProjectNodeLocale = 275,
  BlogPostTagsProjectSpaceId = 276,
  BlogPostTagsProjectStartDate = 277,
  BlogPostTagsProjectSubName = 278,
  BlogPostTagsProjectTags = 279,
  BlogPostTagsProjectUpdatedAt = 280,
  BlogPostTagsSkillGrpup = 281,
  BlogPostTagsSkillGrpupChildren = 282,
  BlogPostTagsSkillGrpupContentfulId = 283,
  BlogPostTagsSkillGrpupCreatedAt = 284,
  BlogPostTagsSkillGrpupId = 285,
  BlogPostTagsSkillGrpupName = 286,
  BlogPostTagsSkillGrpupNodeLocale = 287,
  BlogPostTagsSkillGrpupSkillMap = 288,
  BlogPostTagsSkillGrpupSkills = 289,
  BlogPostTagsSkillGrpupSpaceId = 290,
  BlogPostTagsSkillGrpupUpdatedAt = 291,
  BlogPostTagsSkillMap = 292,
  BlogPostTagsSkillMapChildren = 293,
  BlogPostTagsSkillMapContentfulId = 294,
  BlogPostTagsSkillMapCreatedAt = 295,
  BlogPostTagsSkillMapExpanded = 296,
  BlogPostTagsSkillMapId = 297,
  BlogPostTagsSkillMapName = 298,
  BlogPostTagsSkillMapNodeLocale = 299,
  BlogPostTagsSkillMapSkillGroups = 300,
  BlogPostTagsSkillMapSkills = 301,
  BlogPostTagsSkillMapSortKey = 302,
  BlogPostTagsSkillMapSpaceId = 303,
  BlogPostTagsSkillMapUpdatedAt = 304,
  BlogPostTagsSpaceId = 305,
  BlogPostTagsSysRevision = 306,
  BlogPostTagsSysType = 307,
  BlogPostTagsUpdatedAt = 308,
  BlogPostThumbnailChildren = 309,
  BlogPostThumbnailChildrenChildren = 310,
  BlogPostThumbnailChildrenId = 311,
  BlogPostThumbnailContentfulId = 312,
  BlogPostThumbnailCreatedAt = 313,
  BlogPostThumbnailDescription = 314,
  BlogPostThumbnailFileContentType = 315,
  BlogPostThumbnailFileFileName = 316,
  BlogPostThumbnailFileUrl = 317,
  BlogPostThumbnailFilename = 318,
  BlogPostThumbnailFilesize = 319,
  BlogPostThumbnailGatsbyImage = 320,
  BlogPostThumbnailGatsbyImageData = 321,
  BlogPostThumbnailHeight = 322,
  BlogPostThumbnailId = 323,
  BlogPostThumbnailInternalContent = 324,
  BlogPostThumbnailInternalContentDigest = 325,
  BlogPostThumbnailInternalContentFilePath = 326,
  BlogPostThumbnailInternalDescription = 327,
  BlogPostThumbnailInternalFieldOwners = 328,
  BlogPostThumbnailInternalIgnoreType = 329,
  BlogPostThumbnailInternalMediaType = 330,
  BlogPostThumbnailInternalOwner = 331,
  BlogPostThumbnailInternalType = 332,
  BlogPostThumbnailMimeType = 333,
  BlogPostThumbnailNodeLocale = 334,
  BlogPostThumbnailParentChildren = 335,
  BlogPostThumbnailParentId = 336,
  BlogPostThumbnailPlaceholderUrl = 337,
  BlogPostThumbnailPublicUrl = 338,
  BlogPostThumbnailResizeHeight = 339,
  BlogPostThumbnailResizeSrc = 340,
  BlogPostThumbnailResizeWidth = 341,
  BlogPostThumbnailSize = 342,
  BlogPostThumbnailSpaceId = 343,
  BlogPostThumbnailSysRevision = 344,
  BlogPostThumbnailSysType = 345,
  BlogPostThumbnailTitle = 346,
  BlogPostThumbnailUpdatedAt = 347,
  BlogPostThumbnailUrl = 348,
  BlogPostThumbnailWidth = 349,
  BlogPostTitle = 350,
  BlogPostUpdated = 351,
  BlogPostUpdatedAt = 352,
  Children = 353,
  ChildrenChildren = 354,
  ChildrenChildrenChildren = 355,
  ChildrenChildrenChildrenChildren = 356,
  ChildrenChildrenChildrenId = 357,
  ChildrenChildrenId = 358,
  ChildrenChildrenInternalContent = 359,
  ChildrenChildrenInternalContentDigest = 360,
  ChildrenChildrenInternalContentFilePath = 361,
  ChildrenChildrenInternalDescription = 362,
  ChildrenChildrenInternalFieldOwners = 363,
  ChildrenChildrenInternalIgnoreType = 364,
  ChildrenChildrenInternalMediaType = 365,
  ChildrenChildrenInternalOwner = 366,
  ChildrenChildrenInternalType = 367,
  ChildrenChildrenParentChildren = 368,
  ChildrenChildrenParentId = 369,
  ChildrenId = 370,
  ChildrenInternalContent = 371,
  ChildrenInternalContentDigest = 372,
  ChildrenInternalContentFilePath = 373,
  ChildrenInternalDescription = 374,
  ChildrenInternalFieldOwners = 375,
  ChildrenInternalIgnoreType = 376,
  ChildrenInternalMediaType = 377,
  ChildrenInternalOwner = 378,
  ChildrenInternalType = 379,
  ChildrenParentChildren = 380,
  ChildrenParentChildrenChildren = 381,
  ChildrenParentChildrenId = 382,
  ChildrenParentId = 383,
  ChildrenParentInternalContent = 384,
  ChildrenParentInternalContentDigest = 385,
  ChildrenParentInternalContentFilePath = 386,
  ChildrenParentInternalDescription = 387,
  ChildrenParentInternalFieldOwners = 388,
  ChildrenParentInternalIgnoreType = 389,
  ChildrenParentInternalMediaType = 390,
  ChildrenParentInternalOwner = 391,
  ChildrenParentInternalType = 392,
  ChildrenParentParentChildren = 393,
  ChildrenParentParentId = 394,
  ContentfulId = 395,
  CreatedAt = 396,
  Id = 397,
  InternalContent = 398,
  InternalContentDigest = 399,
  InternalContentFilePath = 400,
  InternalDescription = 401,
  InternalFieldOwners = 402,
  InternalIgnoreType = 403,
  InternalMediaType = 404,
  InternalOwner = 405,
  InternalType = 406,
  Level = 407,
  Name = 408,
  NodeLocale = 409,
  Oss = 410,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 411,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 412,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 413,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 414,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 415,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 416,
  OssChildContentfulOssDetailTextNodeChildMdxId = 417,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 418,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 419,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 420,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 421,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 422,
  OssChildContentfulOssDetailTextNodeChildren = 423,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 424,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 425,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 426,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 427,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 428,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 429,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 430,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 431,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 432,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 433,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 434,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 435,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 436,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 437,
  OssChildContentfulOssDetailTextNodeChildrenId = 438,
  OssChildContentfulOssDetailTextNodeDetail = 439,
  OssChildContentfulOssDetailTextNodeId = 440,
  OssChildContentfulOssDetailTextNodeInternalContent = 441,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 442,
  OssChildContentfulOssDetailTextNodeInternalContentFilePath = 443,
  OssChildContentfulOssDetailTextNodeInternalDescription = 444,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 445,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 446,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 447,
  OssChildContentfulOssDetailTextNodeInternalOwner = 448,
  OssChildContentfulOssDetailTextNodeInternalType = 449,
  OssChildContentfulOssDetailTextNodeParentChildren = 450,
  OssChildContentfulOssDetailTextNodeParentId = 451,
  OssChildContentfulOssDetailTextNodeSysType = 452,
  OssChildren = 453,
  OssChildrenContentfulOssDetailTextNode = 454,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 455,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 456,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 457,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 458,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 459,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 460,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 461,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 462,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 463,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 464,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 465,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 466,
  OssChildrenContentfulOssDetailTextNodeChildren = 467,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 468,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 469,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 470,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 471,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 472,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 473,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 474,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 475,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 476,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 477,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 478,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 479,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 480,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 481,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 482,
  OssChildrenContentfulOssDetailTextNodeDetail = 483,
  OssChildrenContentfulOssDetailTextNodeId = 484,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 485,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 486,
  OssChildrenContentfulOssDetailTextNodeInternalContentFilePath = 487,
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
  OssChildrenInternalContentFilePath = 503,
  OssChildrenInternalDescription = 504,
  OssChildrenInternalFieldOwners = 505,
  OssChildrenInternalIgnoreType = 506,
  OssChildrenInternalMediaType = 507,
  OssChildrenInternalOwner = 508,
  OssChildrenInternalType = 509,
  OssChildrenParentChildren = 510,
  OssChildrenParentId = 511,
  OssContentfulId = 512,
  OssCreatedAt = 513,
  OssDetailChildMdxBody = 514,
  OssDetailChildMdxChildren = 515,
  OssDetailChildMdxExcerpt = 516,
  OssDetailChildMdxFileAbsolutePath = 517,
  OssDetailChildMdxHeadings = 518,
  OssDetailChildMdxHtml = 519,
  OssDetailChildMdxId = 520,
  OssDetailChildMdxMdxAst = 521,
  OssDetailChildMdxRawBody = 522,
  OssDetailChildMdxSlug = 523,
  OssDetailChildMdxTableOfContents = 524,
  OssDetailChildMdxTimeToRead = 525,
  OssDetailChildren = 526,
  OssDetailChildrenMdx = 527,
  OssDetailChildrenMdxBody = 528,
  OssDetailChildrenMdxChildren = 529,
  OssDetailChildrenMdxExcerpt = 530,
  OssDetailChildrenMdxFileAbsolutePath = 531,
  OssDetailChildrenMdxHeadings = 532,
  OssDetailChildrenMdxHtml = 533,
  OssDetailChildrenMdxId = 534,
  OssDetailChildrenMdxMdxAst = 535,
  OssDetailChildrenMdxRawBody = 536,
  OssDetailChildrenMdxSlug = 537,
  OssDetailChildrenMdxTableOfContents = 538,
  OssDetailChildrenMdxTimeToRead = 539,
  OssDetailChildrenChildren = 540,
  OssDetailChildrenId = 541,
  OssDetailDetail = 542,
  OssDetailId = 543,
  OssDetailInternalContent = 544,
  OssDetailInternalContentDigest = 545,
  OssDetailInternalContentFilePath = 546,
  OssDetailInternalDescription = 547,
  OssDetailInternalFieldOwners = 548,
  OssDetailInternalIgnoreType = 549,
  OssDetailInternalMediaType = 550,
  OssDetailInternalOwner = 551,
  OssDetailInternalType = 552,
  OssDetailParentChildren = 553,
  OssDetailParentId = 554,
  OssDetailSysType = 555,
  OssHref = 556,
  OssIconChildContentfulIconSvgTextNodeChildren = 557,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 558,
  OssIconChildContentfulIconSvgTextNodeId = 559,
  OssIconChildContentfulIconSvgTextNodeSvg = 560,
  OssIconChildren = 561,
  OssIconChildrenContentfulIconSvgTextNode = 562,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 563,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 564,
  OssIconChildrenContentfulIconSvgTextNodeId = 565,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 566,
  OssIconChildrenChildren = 567,
  OssIconChildrenId = 568,
  OssIconContact = 569,
  OssIconContactChildren = 570,
  OssIconContactContentfulId = 571,
  OssIconContactCreatedAt = 572,
  OssIconContactHref = 573,
  OssIconContactId = 574,
  OssIconContactName = 575,
  OssIconContactNodeLocale = 576,
  OssIconContactSortKey = 577,
  OssIconContactSpaceId = 578,
  OssIconContactSubName = 579,
  OssIconContactUpdatedAt = 580,
  OssIconContentfulId = 581,
  OssIconCreatedAt = 582,
  OssIconHistory = 583,
  OssIconHistoryChildren = 584,
  OssIconHistoryContentfulId = 585,
  OssIconHistoryCreatedAt = 586,
  OssIconHistoryDate = 587,
  OssIconHistoryId = 588,
  OssIconHistoryName = 589,
  OssIconHistoryNodeLocale = 590,
  OssIconHistorySpaceId = 591,
  OssIconHistorySubName = 592,
  OssIconHistoryUpdatedAt = 593,
  OssIconId = 594,
  OssIconInternalContent = 595,
  OssIconInternalContentDigest = 596,
  OssIconInternalContentFilePath = 597,
  OssIconInternalDescription = 598,
  OssIconInternalFieldOwners = 599,
  OssIconInternalIgnoreType = 600,
  OssIconInternalMediaType = 601,
  OssIconInternalOwner = 602,
  OssIconInternalType = 603,
  OssIconName = 604,
  OssIconNodeLocale = 605,
  OssIconOss = 606,
  OssIconOssChildren = 607,
  OssIconOssChildrenContentfulOssDetailTextNode = 608,
  OssIconOssContentfulId = 609,
  OssIconOssCreatedAt = 610,
  OssIconOssHref = 611,
  OssIconOssId = 612,
  OssIconOssName = 613,
  OssIconOssNodeLocale = 614,
  OssIconOssSpaceId = 615,
  OssIconOssStartDate = 616,
  OssIconOssSubName = 617,
  OssIconOssTags = 618,
  OssIconOssUpdatedAt = 619,
  OssIconParentChildren = 620,
  OssIconParentId = 621,
  OssIconProject = 622,
  OssIconProjectChildren = 623,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 624,
  OssIconProjectContentfulId = 625,
  OssIconProjectCreatedAt = 626,
  OssIconProjectEndDate = 627,
  OssIconProjectId = 628,
  OssIconProjectName = 629,
  OssIconProjectNodeLocale = 630,
  OssIconProjectSpaceId = 631,
  OssIconProjectStartDate = 632,
  OssIconProjectSubName = 633,
  OssIconProjectTags = 634,
  OssIconProjectUpdatedAt = 635,
  OssIconSpaceId = 636,
  OssIconSvgChildren = 637,
  OssIconSvgChildrenMdx = 638,
  OssIconSvgId = 639,
  OssIconSvgSvg = 640,
  OssIconSysRevision = 641,
  OssIconSysType = 642,
  OssIconUpdatedAt = 643,
  OssIconWhatICanDo = 644,
  OssIconWhatICanDoChildren = 645,
  OssIconWhatICanDoContentfulId = 646,
  OssIconWhatICanDoCreatedAt = 647,
  OssIconWhatICanDoId = 648,
  OssIconWhatICanDoName = 649,
  OssIconWhatICanDoNodeLocale = 650,
  OssIconWhatICanDoSortKey = 651,
  OssIconWhatICanDoSpaceId = 652,
  OssIconWhatICanDoSubName = 653,
  OssIconWhatICanDoUpdatedAt = 654,
  OssId = 655,
  OssImageChildren = 656,
  OssImageChildrenChildren = 657,
  OssImageChildrenId = 658,
  OssImageContentfulId = 659,
  OssImageCreatedAt = 660,
  OssImageDescription = 661,
  OssImageFileContentType = 662,
  OssImageFileFileName = 663,
  OssImageFileUrl = 664,
  OssImageFilename = 665,
  OssImageFilesize = 666,
  OssImageGatsbyImage = 667,
  OssImageGatsbyImageData = 668,
  OssImageHeight = 669,
  OssImageId = 670,
  OssImageInternalContent = 671,
  OssImageInternalContentDigest = 672,
  OssImageInternalContentFilePath = 673,
  OssImageInternalDescription = 674,
  OssImageInternalFieldOwners = 675,
  OssImageInternalIgnoreType = 676,
  OssImageInternalMediaType = 677,
  OssImageInternalOwner = 678,
  OssImageInternalType = 679,
  OssImageMimeType = 680,
  OssImageNodeLocale = 681,
  OssImageParentChildren = 682,
  OssImageParentId = 683,
  OssImagePlaceholderUrl = 684,
  OssImagePublicUrl = 685,
  OssImageResizeHeight = 686,
  OssImageResizeSrc = 687,
  OssImageResizeWidth = 688,
  OssImageSize = 689,
  OssImageSpaceId = 690,
  OssImageSysRevision = 691,
  OssImageSysType = 692,
  OssImageTitle = 693,
  OssImageUpdatedAt = 694,
  OssImageUrl = 695,
  OssImageWidth = 696,
  OssInternalContent = 697,
  OssInternalContentDigest = 698,
  OssInternalContentFilePath = 699,
  OssInternalDescription = 700,
  OssInternalFieldOwners = 701,
  OssInternalIgnoreType = 702,
  OssInternalMediaType = 703,
  OssInternalOwner = 704,
  OssInternalType = 705,
  OssName = 706,
  OssNodeLocale = 707,
  OssParentChildren = 708,
  OssParentChildrenChildren = 709,
  OssParentChildrenId = 710,
  OssParentId = 711,
  OssParentInternalContent = 712,
  OssParentInternalContentDigest = 713,
  OssParentInternalContentFilePath = 714,
  OssParentInternalDescription = 715,
  OssParentInternalFieldOwners = 716,
  OssParentInternalIgnoreType = 717,
  OssParentInternalMediaType = 718,
  OssParentInternalOwner = 719,
  OssParentInternalType = 720,
  OssParentParentChildren = 721,
  OssParentParentId = 722,
  OssSpaceId = 723,
  OssStartDate = 724,
  OssSubName = 725,
  OssSysRevision = 726,
  OssSysType = 727,
  OssTags = 728,
  OssTagsBlogPost = 729,
  OssTagsBlogPostChildren = 730,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 731,
  OssTagsBlogPostContentfulId = 732,
  OssTagsBlogPostCreated = 733,
  OssTagsBlogPostCreatedAt = 734,
  OssTagsBlogPostExcerpt = 735,
  OssTagsBlogPostId = 736,
  OssTagsBlogPostNodeLocale = 737,
  OssTagsBlogPostSlug = 738,
  OssTagsBlogPostSpaceId = 739,
  OssTagsBlogPostTags = 740,
  OssTagsBlogPostTitle = 741,
  OssTagsBlogPostUpdated = 742,
  OssTagsBlogPostUpdatedAt = 743,
  OssTagsChildren = 744,
  OssTagsChildrenChildren = 745,
  OssTagsChildrenId = 746,
  OssTagsContentfulId = 747,
  OssTagsCreatedAt = 748,
  OssTagsId = 749,
  OssTagsInternalContent = 750,
  OssTagsInternalContentDigest = 751,
  OssTagsInternalContentFilePath = 752,
  OssTagsInternalDescription = 753,
  OssTagsInternalFieldOwners = 754,
  OssTagsInternalIgnoreType = 755,
  OssTagsInternalMediaType = 756,
  OssTagsInternalOwner = 757,
  OssTagsInternalType = 758,
  OssTagsLevel = 759,
  OssTagsName = 760,
  OssTagsNodeLocale = 761,
  OssTagsOss = 762,
  OssTagsOssChildren = 763,
  OssTagsOssChildrenContentfulOssDetailTextNode = 764,
  OssTagsOssContentfulId = 765,
  OssTagsOssCreatedAt = 766,
  OssTagsOssHref = 767,
  OssTagsOssId = 768,
  OssTagsOssName = 769,
  OssTagsOssNodeLocale = 770,
  OssTagsOssSpaceId = 771,
  OssTagsOssStartDate = 772,
  OssTagsOssSubName = 773,
  OssTagsOssTags = 774,
  OssTagsOssUpdatedAt = 775,
  OssTagsParentChildren = 776,
  OssTagsParentId = 777,
  OssTagsProject = 778,
  OssTagsProjectChildren = 779,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 780,
  OssTagsProjectContentfulId = 781,
  OssTagsProjectCreatedAt = 782,
  OssTagsProjectEndDate = 783,
  OssTagsProjectId = 784,
  OssTagsProjectName = 785,
  OssTagsProjectNodeLocale = 786,
  OssTagsProjectSpaceId = 787,
  OssTagsProjectStartDate = 788,
  OssTagsProjectSubName = 789,
  OssTagsProjectTags = 790,
  OssTagsProjectUpdatedAt = 791,
  OssTagsSkillGrpup = 792,
  OssTagsSkillGrpupChildren = 793,
  OssTagsSkillGrpupContentfulId = 794,
  OssTagsSkillGrpupCreatedAt = 795,
  OssTagsSkillGrpupId = 796,
  OssTagsSkillGrpupName = 797,
  OssTagsSkillGrpupNodeLocale = 798,
  OssTagsSkillGrpupSkillMap = 799,
  OssTagsSkillGrpupSkills = 800,
  OssTagsSkillGrpupSpaceId = 801,
  OssTagsSkillGrpupUpdatedAt = 802,
  OssTagsSkillMap = 803,
  OssTagsSkillMapChildren = 804,
  OssTagsSkillMapContentfulId = 805,
  OssTagsSkillMapCreatedAt = 806,
  OssTagsSkillMapExpanded = 807,
  OssTagsSkillMapId = 808,
  OssTagsSkillMapName = 809,
  OssTagsSkillMapNodeLocale = 810,
  OssTagsSkillMapSkillGroups = 811,
  OssTagsSkillMapSkills = 812,
  OssTagsSkillMapSortKey = 813,
  OssTagsSkillMapSpaceId = 814,
  OssTagsSkillMapUpdatedAt = 815,
  OssTagsSpaceId = 816,
  OssTagsSysRevision = 817,
  OssTagsSysType = 818,
  OssTagsUpdatedAt = 819,
  OssUpdatedAt = 820,
  ParentChildren = 821,
  ParentChildrenChildren = 822,
  ParentChildrenChildrenChildren = 823,
  ParentChildrenChildrenId = 824,
  ParentChildrenId = 825,
  ParentChildrenInternalContent = 826,
  ParentChildrenInternalContentDigest = 827,
  ParentChildrenInternalContentFilePath = 828,
  ParentChildrenInternalDescription = 829,
  ParentChildrenInternalFieldOwners = 830,
  ParentChildrenInternalIgnoreType = 831,
  ParentChildrenInternalMediaType = 832,
  ParentChildrenInternalOwner = 833,
  ParentChildrenInternalType = 834,
  ParentChildrenParentChildren = 835,
  ParentChildrenParentId = 836,
  ParentId = 837,
  ParentInternalContent = 838,
  ParentInternalContentDigest = 839,
  ParentInternalContentFilePath = 840,
  ParentInternalDescription = 841,
  ParentInternalFieldOwners = 842,
  ParentInternalIgnoreType = 843,
  ParentInternalMediaType = 844,
  ParentInternalOwner = 845,
  ParentInternalType = 846,
  ParentParentChildren = 847,
  ParentParentChildrenChildren = 848,
  ParentParentChildrenId = 849,
  ParentParentId = 850,
  ParentParentInternalContent = 851,
  ParentParentInternalContentDigest = 852,
  ParentParentInternalContentFilePath = 853,
  ParentParentInternalDescription = 854,
  ParentParentInternalFieldOwners = 855,
  ParentParentInternalIgnoreType = 856,
  ParentParentInternalMediaType = 857,
  ParentParentInternalOwner = 858,
  ParentParentInternalType = 859,
  ParentParentParentChildren = 860,
  ParentParentParentId = 861,
  Project = 862,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 863,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 864,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 865,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 866,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 867,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 868,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 869,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 870,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 871,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 872,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 873,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 874,
  ProjectChildContentfulProjectDetailTextNodeChildren = 875,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 876,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 877,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 878,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 879,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 880,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 881,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 882,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 883,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 884,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 885,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 886,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 887,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 888,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 889,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 890,
  ProjectChildContentfulProjectDetailTextNodeDetail = 891,
  ProjectChildContentfulProjectDetailTextNodeId = 892,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 893,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 894,
  ProjectChildContentfulProjectDetailTextNodeInternalContentFilePath = 895,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 896,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 897,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 898,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 899,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 900,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 901,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 902,
  ProjectChildContentfulProjectDetailTextNodeParentId = 903,
  ProjectChildContentfulProjectDetailTextNodeSysType = 904,
  ProjectChildren = 905,
  ProjectChildrenContentfulProjectDetailTextNode = 906,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 907,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 908,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 909,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 910,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 911,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 912,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 913,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 914,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 915,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 916,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 917,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 918,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 919,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 920,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 921,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 922,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 923,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 924,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 925,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 926,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 927,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 928,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 929,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 930,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 931,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 932,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 933,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 934,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 935,
  ProjectChildrenContentfulProjectDetailTextNodeId = 936,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 937,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 938,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentFilePath = 939,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 940,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 941,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 942,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 943,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 944,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 945,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 946,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 947,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 948,
  ProjectChildrenChildren = 949,
  ProjectChildrenChildrenChildren = 950,
  ProjectChildrenChildrenId = 951,
  ProjectChildrenId = 952,
  ProjectChildrenInternalContent = 953,
  ProjectChildrenInternalContentDigest = 954,
  ProjectChildrenInternalContentFilePath = 955,
  ProjectChildrenInternalDescription = 956,
  ProjectChildrenInternalFieldOwners = 957,
  ProjectChildrenInternalIgnoreType = 958,
  ProjectChildrenInternalMediaType = 959,
  ProjectChildrenInternalOwner = 960,
  ProjectChildrenInternalType = 961,
  ProjectChildrenParentChildren = 962,
  ProjectChildrenParentId = 963,
  ProjectContentfulId = 964,
  ProjectCreatedAt = 965,
  ProjectDetailChildMdxBody = 966,
  ProjectDetailChildMdxChildren = 967,
  ProjectDetailChildMdxExcerpt = 968,
  ProjectDetailChildMdxFileAbsolutePath = 969,
  ProjectDetailChildMdxHeadings = 970,
  ProjectDetailChildMdxHtml = 971,
  ProjectDetailChildMdxId = 972,
  ProjectDetailChildMdxMdxAst = 973,
  ProjectDetailChildMdxRawBody = 974,
  ProjectDetailChildMdxSlug = 975,
  ProjectDetailChildMdxTableOfContents = 976,
  ProjectDetailChildMdxTimeToRead = 977,
  ProjectDetailChildren = 978,
  ProjectDetailChildrenMdx = 979,
  ProjectDetailChildrenMdxBody = 980,
  ProjectDetailChildrenMdxChildren = 981,
  ProjectDetailChildrenMdxExcerpt = 982,
  ProjectDetailChildrenMdxFileAbsolutePath = 983,
  ProjectDetailChildrenMdxHeadings = 984,
  ProjectDetailChildrenMdxHtml = 985,
  ProjectDetailChildrenMdxId = 986,
  ProjectDetailChildrenMdxMdxAst = 987,
  ProjectDetailChildrenMdxRawBody = 988,
  ProjectDetailChildrenMdxSlug = 989,
  ProjectDetailChildrenMdxTableOfContents = 990,
  ProjectDetailChildrenMdxTimeToRead = 991,
  ProjectDetailChildrenChildren = 992,
  ProjectDetailChildrenId = 993,
  ProjectDetailDetail = 994,
  ProjectDetailId = 995,
  ProjectDetailInternalContent = 996,
  ProjectDetailInternalContentDigest = 997,
  ProjectDetailInternalContentFilePath = 998,
  ProjectDetailInternalDescription = 999,
  ProjectDetailInternalFieldOwners = 1000,
  ProjectDetailInternalIgnoreType = 1001,
  ProjectDetailInternalMediaType = 1002,
  ProjectDetailInternalOwner = 1003,
  ProjectDetailInternalType = 1004,
  ProjectDetailParentChildren = 1005,
  ProjectDetailParentId = 1006,
  ProjectDetailSysType = 1007,
  ProjectEndDate = 1008,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1009,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 1010,
  ProjectIconChildContentfulIconSvgTextNodeId = 1011,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1012,
  ProjectIconChildren = 1013,
  ProjectIconChildrenContentfulIconSvgTextNode = 1014,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1015,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1016,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1017,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1018,
  ProjectIconChildrenChildren = 1019,
  ProjectIconChildrenId = 1020,
  ProjectIconContact = 1021,
  ProjectIconContactChildren = 1022,
  ProjectIconContactContentfulId = 1023,
  ProjectIconContactCreatedAt = 1024,
  ProjectIconContactHref = 1025,
  ProjectIconContactId = 1026,
  ProjectIconContactName = 1027,
  ProjectIconContactNodeLocale = 1028,
  ProjectIconContactSortKey = 1029,
  ProjectIconContactSpaceId = 1030,
  ProjectIconContactSubName = 1031,
  ProjectIconContactUpdatedAt = 1032,
  ProjectIconContentfulId = 1033,
  ProjectIconCreatedAt = 1034,
  ProjectIconHistory = 1035,
  ProjectIconHistoryChildren = 1036,
  ProjectIconHistoryContentfulId = 1037,
  ProjectIconHistoryCreatedAt = 1038,
  ProjectIconHistoryDate = 1039,
  ProjectIconHistoryId = 1040,
  ProjectIconHistoryName = 1041,
  ProjectIconHistoryNodeLocale = 1042,
  ProjectIconHistorySpaceId = 1043,
  ProjectIconHistorySubName = 1044,
  ProjectIconHistoryUpdatedAt = 1045,
  ProjectIconId = 1046,
  ProjectIconInternalContent = 1047,
  ProjectIconInternalContentDigest = 1048,
  ProjectIconInternalContentFilePath = 1049,
  ProjectIconInternalDescription = 1050,
  ProjectIconInternalFieldOwners = 1051,
  ProjectIconInternalIgnoreType = 1052,
  ProjectIconInternalMediaType = 1053,
  ProjectIconInternalOwner = 1054,
  ProjectIconInternalType = 1055,
  ProjectIconName = 1056,
  ProjectIconNodeLocale = 1057,
  ProjectIconOss = 1058,
  ProjectIconOssChildren = 1059,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1060,
  ProjectIconOssContentfulId = 1061,
  ProjectIconOssCreatedAt = 1062,
  ProjectIconOssHref = 1063,
  ProjectIconOssId = 1064,
  ProjectIconOssName = 1065,
  ProjectIconOssNodeLocale = 1066,
  ProjectIconOssSpaceId = 1067,
  ProjectIconOssStartDate = 1068,
  ProjectIconOssSubName = 1069,
  ProjectIconOssTags = 1070,
  ProjectIconOssUpdatedAt = 1071,
  ProjectIconParentChildren = 1072,
  ProjectIconParentId = 1073,
  ProjectIconProject = 1074,
  ProjectIconProjectChildren = 1075,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1076,
  ProjectIconProjectContentfulId = 1077,
  ProjectIconProjectCreatedAt = 1078,
  ProjectIconProjectEndDate = 1079,
  ProjectIconProjectId = 1080,
  ProjectIconProjectName = 1081,
  ProjectIconProjectNodeLocale = 1082,
  ProjectIconProjectSpaceId = 1083,
  ProjectIconProjectStartDate = 1084,
  ProjectIconProjectSubName = 1085,
  ProjectIconProjectTags = 1086,
  ProjectIconProjectUpdatedAt = 1087,
  ProjectIconSpaceId = 1088,
  ProjectIconSvgChildren = 1089,
  ProjectIconSvgChildrenMdx = 1090,
  ProjectIconSvgId = 1091,
  ProjectIconSvgSvg = 1092,
  ProjectIconSysRevision = 1093,
  ProjectIconSysType = 1094,
  ProjectIconUpdatedAt = 1095,
  ProjectIconWhatICanDo = 1096,
  ProjectIconWhatICanDoChildren = 1097,
  ProjectIconWhatICanDoContentfulId = 1098,
  ProjectIconWhatICanDoCreatedAt = 1099,
  ProjectIconWhatICanDoId = 1100,
  ProjectIconWhatICanDoName = 1101,
  ProjectIconWhatICanDoNodeLocale = 1102,
  ProjectIconWhatICanDoSortKey = 1103,
  ProjectIconWhatICanDoSpaceId = 1104,
  ProjectIconWhatICanDoSubName = 1105,
  ProjectIconWhatICanDoUpdatedAt = 1106,
  ProjectId = 1107,
  ProjectInternalContent = 1108,
  ProjectInternalContentDigest = 1109,
  ProjectInternalContentFilePath = 1110,
  ProjectInternalDescription = 1111,
  ProjectInternalFieldOwners = 1112,
  ProjectInternalIgnoreType = 1113,
  ProjectInternalMediaType = 1114,
  ProjectInternalOwner = 1115,
  ProjectInternalType = 1116,
  ProjectName = 1117,
  ProjectNodeLocale = 1118,
  ProjectParentChildren = 1119,
  ProjectParentChildrenChildren = 1120,
  ProjectParentChildrenId = 1121,
  ProjectParentId = 1122,
  ProjectParentInternalContent = 1123,
  ProjectParentInternalContentDigest = 1124,
  ProjectParentInternalContentFilePath = 1125,
  ProjectParentInternalDescription = 1126,
  ProjectParentInternalFieldOwners = 1127,
  ProjectParentInternalIgnoreType = 1128,
  ProjectParentInternalMediaType = 1129,
  ProjectParentInternalOwner = 1130,
  ProjectParentInternalType = 1131,
  ProjectParentParentChildren = 1132,
  ProjectParentParentId = 1133,
  ProjectSpaceId = 1134,
  ProjectStartDate = 1135,
  ProjectSubName = 1136,
  ProjectSysRevision = 1137,
  ProjectSysType = 1138,
  ProjectTags = 1139,
  ProjectTagsBlogPost = 1140,
  ProjectTagsBlogPostChildren = 1141,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1142,
  ProjectTagsBlogPostContentfulId = 1143,
  ProjectTagsBlogPostCreated = 1144,
  ProjectTagsBlogPostCreatedAt = 1145,
  ProjectTagsBlogPostExcerpt = 1146,
  ProjectTagsBlogPostId = 1147,
  ProjectTagsBlogPostNodeLocale = 1148,
  ProjectTagsBlogPostSlug = 1149,
  ProjectTagsBlogPostSpaceId = 1150,
  ProjectTagsBlogPostTags = 1151,
  ProjectTagsBlogPostTitle = 1152,
  ProjectTagsBlogPostUpdated = 1153,
  ProjectTagsBlogPostUpdatedAt = 1154,
  ProjectTagsChildren = 1155,
  ProjectTagsChildrenChildren = 1156,
  ProjectTagsChildrenId = 1157,
  ProjectTagsContentfulId = 1158,
  ProjectTagsCreatedAt = 1159,
  ProjectTagsId = 1160,
  ProjectTagsInternalContent = 1161,
  ProjectTagsInternalContentDigest = 1162,
  ProjectTagsInternalContentFilePath = 1163,
  ProjectTagsInternalDescription = 1164,
  ProjectTagsInternalFieldOwners = 1165,
  ProjectTagsInternalIgnoreType = 1166,
  ProjectTagsInternalMediaType = 1167,
  ProjectTagsInternalOwner = 1168,
  ProjectTagsInternalType = 1169,
  ProjectTagsLevel = 1170,
  ProjectTagsName = 1171,
  ProjectTagsNodeLocale = 1172,
  ProjectTagsOss = 1173,
  ProjectTagsOssChildren = 1174,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1175,
  ProjectTagsOssContentfulId = 1176,
  ProjectTagsOssCreatedAt = 1177,
  ProjectTagsOssHref = 1178,
  ProjectTagsOssId = 1179,
  ProjectTagsOssName = 1180,
  ProjectTagsOssNodeLocale = 1181,
  ProjectTagsOssSpaceId = 1182,
  ProjectTagsOssStartDate = 1183,
  ProjectTagsOssSubName = 1184,
  ProjectTagsOssTags = 1185,
  ProjectTagsOssUpdatedAt = 1186,
  ProjectTagsParentChildren = 1187,
  ProjectTagsParentId = 1188,
  ProjectTagsProject = 1189,
  ProjectTagsProjectChildren = 1190,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1191,
  ProjectTagsProjectContentfulId = 1192,
  ProjectTagsProjectCreatedAt = 1193,
  ProjectTagsProjectEndDate = 1194,
  ProjectTagsProjectId = 1195,
  ProjectTagsProjectName = 1196,
  ProjectTagsProjectNodeLocale = 1197,
  ProjectTagsProjectSpaceId = 1198,
  ProjectTagsProjectStartDate = 1199,
  ProjectTagsProjectSubName = 1200,
  ProjectTagsProjectTags = 1201,
  ProjectTagsProjectUpdatedAt = 1202,
  ProjectTagsSkillGrpup = 1203,
  ProjectTagsSkillGrpupChildren = 1204,
  ProjectTagsSkillGrpupContentfulId = 1205,
  ProjectTagsSkillGrpupCreatedAt = 1206,
  ProjectTagsSkillGrpupId = 1207,
  ProjectTagsSkillGrpupName = 1208,
  ProjectTagsSkillGrpupNodeLocale = 1209,
  ProjectTagsSkillGrpupSkillMap = 1210,
  ProjectTagsSkillGrpupSkills = 1211,
  ProjectTagsSkillGrpupSpaceId = 1212,
  ProjectTagsSkillGrpupUpdatedAt = 1213,
  ProjectTagsSkillMap = 1214,
  ProjectTagsSkillMapChildren = 1215,
  ProjectTagsSkillMapContentfulId = 1216,
  ProjectTagsSkillMapCreatedAt = 1217,
  ProjectTagsSkillMapExpanded = 1218,
  ProjectTagsSkillMapId = 1219,
  ProjectTagsSkillMapName = 1220,
  ProjectTagsSkillMapNodeLocale = 1221,
  ProjectTagsSkillMapSkillGroups = 1222,
  ProjectTagsSkillMapSkills = 1223,
  ProjectTagsSkillMapSortKey = 1224,
  ProjectTagsSkillMapSpaceId = 1225,
  ProjectTagsSkillMapUpdatedAt = 1226,
  ProjectTagsSpaceId = 1227,
  ProjectTagsSysRevision = 1228,
  ProjectTagsSysType = 1229,
  ProjectTagsUpdatedAt = 1230,
  ProjectUpdatedAt = 1231,
  SkillGrpup = 1232,
  SkillGrpupChildren = 1233,
  SkillGrpupChildrenChildren = 1234,
  SkillGrpupChildrenChildrenChildren = 1235,
  SkillGrpupChildrenChildrenId = 1236,
  SkillGrpupChildrenId = 1237,
  SkillGrpupChildrenInternalContent = 1238,
  SkillGrpupChildrenInternalContentDigest = 1239,
  SkillGrpupChildrenInternalContentFilePath = 1240,
  SkillGrpupChildrenInternalDescription = 1241,
  SkillGrpupChildrenInternalFieldOwners = 1242,
  SkillGrpupChildrenInternalIgnoreType = 1243,
  SkillGrpupChildrenInternalMediaType = 1244,
  SkillGrpupChildrenInternalOwner = 1245,
  SkillGrpupChildrenInternalType = 1246,
  SkillGrpupChildrenParentChildren = 1247,
  SkillGrpupChildrenParentId = 1248,
  SkillGrpupContentfulId = 1249,
  SkillGrpupCreatedAt = 1250,
  SkillGrpupId = 1251,
  SkillGrpupInternalContent = 1252,
  SkillGrpupInternalContentDigest = 1253,
  SkillGrpupInternalContentFilePath = 1254,
  SkillGrpupInternalDescription = 1255,
  SkillGrpupInternalFieldOwners = 1256,
  SkillGrpupInternalIgnoreType = 1257,
  SkillGrpupInternalMediaType = 1258,
  SkillGrpupInternalOwner = 1259,
  SkillGrpupInternalType = 1260,
  SkillGrpupName = 1261,
  SkillGrpupNodeLocale = 1262,
  SkillGrpupParentChildren = 1263,
  SkillGrpupParentChildrenChildren = 1264,
  SkillGrpupParentChildrenId = 1265,
  SkillGrpupParentId = 1266,
  SkillGrpupParentInternalContent = 1267,
  SkillGrpupParentInternalContentDigest = 1268,
  SkillGrpupParentInternalContentFilePath = 1269,
  SkillGrpupParentInternalDescription = 1270,
  SkillGrpupParentInternalFieldOwners = 1271,
  SkillGrpupParentInternalIgnoreType = 1272,
  SkillGrpupParentInternalMediaType = 1273,
  SkillGrpupParentInternalOwner = 1274,
  SkillGrpupParentInternalType = 1275,
  SkillGrpupParentParentChildren = 1276,
  SkillGrpupParentParentId = 1277,
  SkillGrpupSkillMap = 1278,
  SkillGrpupSkillMapChildren = 1279,
  SkillGrpupSkillMapChildrenChildren = 1280,
  SkillGrpupSkillMapChildrenId = 1281,
  SkillGrpupSkillMapContentfulId = 1282,
  SkillGrpupSkillMapCreatedAt = 1283,
  SkillGrpupSkillMapExpanded = 1284,
  SkillGrpupSkillMapId = 1285,
  SkillGrpupSkillMapInternalContent = 1286,
  SkillGrpupSkillMapInternalContentDigest = 1287,
  SkillGrpupSkillMapInternalContentFilePath = 1288,
  SkillGrpupSkillMapInternalDescription = 1289,
  SkillGrpupSkillMapInternalFieldOwners = 1290,
  SkillGrpupSkillMapInternalIgnoreType = 1291,
  SkillGrpupSkillMapInternalMediaType = 1292,
  SkillGrpupSkillMapInternalOwner = 1293,
  SkillGrpupSkillMapInternalType = 1294,
  SkillGrpupSkillMapName = 1295,
  SkillGrpupSkillMapNodeLocale = 1296,
  SkillGrpupSkillMapParentChildren = 1297,
  SkillGrpupSkillMapParentId = 1298,
  SkillGrpupSkillMapSkillGroups = 1299,
  SkillGrpupSkillMapSkillGroupsChildren = 1300,
  SkillGrpupSkillMapSkillGroupsContentfulId = 1301,
  SkillGrpupSkillMapSkillGroupsCreatedAt = 1302,
  SkillGrpupSkillMapSkillGroupsId = 1303,
  SkillGrpupSkillMapSkillGroupsName = 1304,
  SkillGrpupSkillMapSkillGroupsNodeLocale = 1305,
  SkillGrpupSkillMapSkillGroupsSkillMap = 1306,
  SkillGrpupSkillMapSkillGroupsSkills = 1307,
  SkillGrpupSkillMapSkillGroupsSpaceId = 1308,
  SkillGrpupSkillMapSkillGroupsUpdatedAt = 1309,
  SkillGrpupSkillMapSkills = 1310,
  SkillGrpupSkillMapSkillsBlogPost = 1311,
  SkillGrpupSkillMapSkillsChildren = 1312,
  SkillGrpupSkillMapSkillsContentfulId = 1313,
  SkillGrpupSkillMapSkillsCreatedAt = 1314,
  SkillGrpupSkillMapSkillsId = 1315,
  SkillGrpupSkillMapSkillsLevel = 1316,
  SkillGrpupSkillMapSkillsName = 1317,
  SkillGrpupSkillMapSkillsNodeLocale = 1318,
  SkillGrpupSkillMapSkillsOss = 1319,
  SkillGrpupSkillMapSkillsProject = 1320,
  SkillGrpupSkillMapSkillsSkillGrpup = 1321,
  SkillGrpupSkillMapSkillsSkillMap = 1322,
  SkillGrpupSkillMapSkillsSpaceId = 1323,
  SkillGrpupSkillMapSkillsUpdatedAt = 1324,
  SkillGrpupSkillMapSortKey = 1325,
  SkillGrpupSkillMapSpaceId = 1326,
  SkillGrpupSkillMapSysRevision = 1327,
  SkillGrpupSkillMapSysType = 1328,
  SkillGrpupSkillMapUpdatedAt = 1329,
  SkillGrpupSkills = 1330,
  SkillGrpupSkillsBlogPost = 1331,
  SkillGrpupSkillsBlogPostChildren = 1332,
  SkillGrpupSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1333,
  SkillGrpupSkillsBlogPostContentfulId = 1334,
  SkillGrpupSkillsBlogPostCreated = 1335,
  SkillGrpupSkillsBlogPostCreatedAt = 1336,
  SkillGrpupSkillsBlogPostExcerpt = 1337,
  SkillGrpupSkillsBlogPostId = 1338,
  SkillGrpupSkillsBlogPostNodeLocale = 1339,
  SkillGrpupSkillsBlogPostSlug = 1340,
  SkillGrpupSkillsBlogPostSpaceId = 1341,
  SkillGrpupSkillsBlogPostTags = 1342,
  SkillGrpupSkillsBlogPostTitle = 1343,
  SkillGrpupSkillsBlogPostUpdated = 1344,
  SkillGrpupSkillsBlogPostUpdatedAt = 1345,
  SkillGrpupSkillsChildren = 1346,
  SkillGrpupSkillsChildrenChildren = 1347,
  SkillGrpupSkillsChildrenId = 1348,
  SkillGrpupSkillsContentfulId = 1349,
  SkillGrpupSkillsCreatedAt = 1350,
  SkillGrpupSkillsId = 1351,
  SkillGrpupSkillsInternalContent = 1352,
  SkillGrpupSkillsInternalContentDigest = 1353,
  SkillGrpupSkillsInternalContentFilePath = 1354,
  SkillGrpupSkillsInternalDescription = 1355,
  SkillGrpupSkillsInternalFieldOwners = 1356,
  SkillGrpupSkillsInternalIgnoreType = 1357,
  SkillGrpupSkillsInternalMediaType = 1358,
  SkillGrpupSkillsInternalOwner = 1359,
  SkillGrpupSkillsInternalType = 1360,
  SkillGrpupSkillsLevel = 1361,
  SkillGrpupSkillsName = 1362,
  SkillGrpupSkillsNodeLocale = 1363,
  SkillGrpupSkillsOss = 1364,
  SkillGrpupSkillsOssChildren = 1365,
  SkillGrpupSkillsOssChildrenContentfulOssDetailTextNode = 1366,
  SkillGrpupSkillsOssContentfulId = 1367,
  SkillGrpupSkillsOssCreatedAt = 1368,
  SkillGrpupSkillsOssHref = 1369,
  SkillGrpupSkillsOssId = 1370,
  SkillGrpupSkillsOssName = 1371,
  SkillGrpupSkillsOssNodeLocale = 1372,
  SkillGrpupSkillsOssSpaceId = 1373,
  SkillGrpupSkillsOssStartDate = 1374,
  SkillGrpupSkillsOssSubName = 1375,
  SkillGrpupSkillsOssTags = 1376,
  SkillGrpupSkillsOssUpdatedAt = 1377,
  SkillGrpupSkillsParentChildren = 1378,
  SkillGrpupSkillsParentId = 1379,
  SkillGrpupSkillsProject = 1380,
  SkillGrpupSkillsProjectChildren = 1381,
  SkillGrpupSkillsProjectChildrenContentfulProjectDetailTextNode = 1382,
  SkillGrpupSkillsProjectContentfulId = 1383,
  SkillGrpupSkillsProjectCreatedAt = 1384,
  SkillGrpupSkillsProjectEndDate = 1385,
  SkillGrpupSkillsProjectId = 1386,
  SkillGrpupSkillsProjectName = 1387,
  SkillGrpupSkillsProjectNodeLocale = 1388,
  SkillGrpupSkillsProjectSpaceId = 1389,
  SkillGrpupSkillsProjectStartDate = 1390,
  SkillGrpupSkillsProjectSubName = 1391,
  SkillGrpupSkillsProjectTags = 1392,
  SkillGrpupSkillsProjectUpdatedAt = 1393,
  SkillGrpupSkillsSkillGrpup = 1394,
  SkillGrpupSkillsSkillGrpupChildren = 1395,
  SkillGrpupSkillsSkillGrpupContentfulId = 1396,
  SkillGrpupSkillsSkillGrpupCreatedAt = 1397,
  SkillGrpupSkillsSkillGrpupId = 1398,
  SkillGrpupSkillsSkillGrpupName = 1399,
  SkillGrpupSkillsSkillGrpupNodeLocale = 1400,
  SkillGrpupSkillsSkillGrpupSkillMap = 1401,
  SkillGrpupSkillsSkillGrpupSkills = 1402,
  SkillGrpupSkillsSkillGrpupSpaceId = 1403,
  SkillGrpupSkillsSkillGrpupUpdatedAt = 1404,
  SkillGrpupSkillsSkillMap = 1405,
  SkillGrpupSkillsSkillMapChildren = 1406,
  SkillGrpupSkillsSkillMapContentfulId = 1407,
  SkillGrpupSkillsSkillMapCreatedAt = 1408,
  SkillGrpupSkillsSkillMapExpanded = 1409,
  SkillGrpupSkillsSkillMapId = 1410,
  SkillGrpupSkillsSkillMapName = 1411,
  SkillGrpupSkillsSkillMapNodeLocale = 1412,
  SkillGrpupSkillsSkillMapSkillGroups = 1413,
  SkillGrpupSkillsSkillMapSkills = 1414,
  SkillGrpupSkillsSkillMapSortKey = 1415,
  SkillGrpupSkillsSkillMapSpaceId = 1416,
  SkillGrpupSkillsSkillMapUpdatedAt = 1417,
  SkillGrpupSkillsSpaceId = 1418,
  SkillGrpupSkillsSysRevision = 1419,
  SkillGrpupSkillsSysType = 1420,
  SkillGrpupSkillsUpdatedAt = 1421,
  SkillGrpupSpaceId = 1422,
  SkillGrpupSysRevision = 1423,
  SkillGrpupSysType = 1424,
  SkillGrpupUpdatedAt = 1425,
  SkillMap = 1426,
  SkillMapChildren = 1427,
  SkillMapChildrenChildren = 1428,
  SkillMapChildrenChildrenChildren = 1429,
  SkillMapChildrenChildrenId = 1430,
  SkillMapChildrenId = 1431,
  SkillMapChildrenInternalContent = 1432,
  SkillMapChildrenInternalContentDigest = 1433,
  SkillMapChildrenInternalContentFilePath = 1434,
  SkillMapChildrenInternalDescription = 1435,
  SkillMapChildrenInternalFieldOwners = 1436,
  SkillMapChildrenInternalIgnoreType = 1437,
  SkillMapChildrenInternalMediaType = 1438,
  SkillMapChildrenInternalOwner = 1439,
  SkillMapChildrenInternalType = 1440,
  SkillMapChildrenParentChildren = 1441,
  SkillMapChildrenParentId = 1442,
  SkillMapContentfulId = 1443,
  SkillMapCreatedAt = 1444,
  SkillMapExpanded = 1445,
  SkillMapId = 1446,
  SkillMapInternalContent = 1447,
  SkillMapInternalContentDigest = 1448,
  SkillMapInternalContentFilePath = 1449,
  SkillMapInternalDescription = 1450,
  SkillMapInternalFieldOwners = 1451,
  SkillMapInternalIgnoreType = 1452,
  SkillMapInternalMediaType = 1453,
  SkillMapInternalOwner = 1454,
  SkillMapInternalType = 1455,
  SkillMapName = 1456,
  SkillMapNodeLocale = 1457,
  SkillMapParentChildren = 1458,
  SkillMapParentChildrenChildren = 1459,
  SkillMapParentChildrenId = 1460,
  SkillMapParentId = 1461,
  SkillMapParentInternalContent = 1462,
  SkillMapParentInternalContentDigest = 1463,
  SkillMapParentInternalContentFilePath = 1464,
  SkillMapParentInternalDescription = 1465,
  SkillMapParentInternalFieldOwners = 1466,
  SkillMapParentInternalIgnoreType = 1467,
  SkillMapParentInternalMediaType = 1468,
  SkillMapParentInternalOwner = 1469,
  SkillMapParentInternalType = 1470,
  SkillMapParentParentChildren = 1471,
  SkillMapParentParentId = 1472,
  SkillMapSkillGroups = 1473,
  SkillMapSkillGroupsChildren = 1474,
  SkillMapSkillGroupsChildrenChildren = 1475,
  SkillMapSkillGroupsChildrenId = 1476,
  SkillMapSkillGroupsContentfulId = 1477,
  SkillMapSkillGroupsCreatedAt = 1478,
  SkillMapSkillGroupsId = 1479,
  SkillMapSkillGroupsInternalContent = 1480,
  SkillMapSkillGroupsInternalContentDigest = 1481,
  SkillMapSkillGroupsInternalContentFilePath = 1482,
  SkillMapSkillGroupsInternalDescription = 1483,
  SkillMapSkillGroupsInternalFieldOwners = 1484,
  SkillMapSkillGroupsInternalIgnoreType = 1485,
  SkillMapSkillGroupsInternalMediaType = 1486,
  SkillMapSkillGroupsInternalOwner = 1487,
  SkillMapSkillGroupsInternalType = 1488,
  SkillMapSkillGroupsName = 1489,
  SkillMapSkillGroupsNodeLocale = 1490,
  SkillMapSkillGroupsParentChildren = 1491,
  SkillMapSkillGroupsParentId = 1492,
  SkillMapSkillGroupsSkillMap = 1493,
  SkillMapSkillGroupsSkillMapChildren = 1494,
  SkillMapSkillGroupsSkillMapContentfulId = 1495,
  SkillMapSkillGroupsSkillMapCreatedAt = 1496,
  SkillMapSkillGroupsSkillMapExpanded = 1497,
  SkillMapSkillGroupsSkillMapId = 1498,
  SkillMapSkillGroupsSkillMapName = 1499,
  SkillMapSkillGroupsSkillMapNodeLocale = 1500,
  SkillMapSkillGroupsSkillMapSkillGroups = 1501,
  SkillMapSkillGroupsSkillMapSkills = 1502,
  SkillMapSkillGroupsSkillMapSortKey = 1503,
  SkillMapSkillGroupsSkillMapSpaceId = 1504,
  SkillMapSkillGroupsSkillMapUpdatedAt = 1505,
  SkillMapSkillGroupsSkills = 1506,
  SkillMapSkillGroupsSkillsBlogPost = 1507,
  SkillMapSkillGroupsSkillsChildren = 1508,
  SkillMapSkillGroupsSkillsContentfulId = 1509,
  SkillMapSkillGroupsSkillsCreatedAt = 1510,
  SkillMapSkillGroupsSkillsId = 1511,
  SkillMapSkillGroupsSkillsLevel = 1512,
  SkillMapSkillGroupsSkillsName = 1513,
  SkillMapSkillGroupsSkillsNodeLocale = 1514,
  SkillMapSkillGroupsSkillsOss = 1515,
  SkillMapSkillGroupsSkillsProject = 1516,
  SkillMapSkillGroupsSkillsSkillGrpup = 1517,
  SkillMapSkillGroupsSkillsSkillMap = 1518,
  SkillMapSkillGroupsSkillsSpaceId = 1519,
  SkillMapSkillGroupsSkillsUpdatedAt = 1520,
  SkillMapSkillGroupsSpaceId = 1521,
  SkillMapSkillGroupsSysRevision = 1522,
  SkillMapSkillGroupsSysType = 1523,
  SkillMapSkillGroupsUpdatedAt = 1524,
  SkillMapSkills = 1525,
  SkillMapSkillsBlogPost = 1526,
  SkillMapSkillsBlogPostChildren = 1527,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1528,
  SkillMapSkillsBlogPostContentfulId = 1529,
  SkillMapSkillsBlogPostCreated = 1530,
  SkillMapSkillsBlogPostCreatedAt = 1531,
  SkillMapSkillsBlogPostExcerpt = 1532,
  SkillMapSkillsBlogPostId = 1533,
  SkillMapSkillsBlogPostNodeLocale = 1534,
  SkillMapSkillsBlogPostSlug = 1535,
  SkillMapSkillsBlogPostSpaceId = 1536,
  SkillMapSkillsBlogPostTags = 1537,
  SkillMapSkillsBlogPostTitle = 1538,
  SkillMapSkillsBlogPostUpdated = 1539,
  SkillMapSkillsBlogPostUpdatedAt = 1540,
  SkillMapSkillsChildren = 1541,
  SkillMapSkillsChildrenChildren = 1542,
  SkillMapSkillsChildrenId = 1543,
  SkillMapSkillsContentfulId = 1544,
  SkillMapSkillsCreatedAt = 1545,
  SkillMapSkillsId = 1546,
  SkillMapSkillsInternalContent = 1547,
  SkillMapSkillsInternalContentDigest = 1548,
  SkillMapSkillsInternalContentFilePath = 1549,
  SkillMapSkillsInternalDescription = 1550,
  SkillMapSkillsInternalFieldOwners = 1551,
  SkillMapSkillsInternalIgnoreType = 1552,
  SkillMapSkillsInternalMediaType = 1553,
  SkillMapSkillsInternalOwner = 1554,
  SkillMapSkillsInternalType = 1555,
  SkillMapSkillsLevel = 1556,
  SkillMapSkillsName = 1557,
  SkillMapSkillsNodeLocale = 1558,
  SkillMapSkillsOss = 1559,
  SkillMapSkillsOssChildren = 1560,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 1561,
  SkillMapSkillsOssContentfulId = 1562,
  SkillMapSkillsOssCreatedAt = 1563,
  SkillMapSkillsOssHref = 1564,
  SkillMapSkillsOssId = 1565,
  SkillMapSkillsOssName = 1566,
  SkillMapSkillsOssNodeLocale = 1567,
  SkillMapSkillsOssSpaceId = 1568,
  SkillMapSkillsOssStartDate = 1569,
  SkillMapSkillsOssSubName = 1570,
  SkillMapSkillsOssTags = 1571,
  SkillMapSkillsOssUpdatedAt = 1572,
  SkillMapSkillsParentChildren = 1573,
  SkillMapSkillsParentId = 1574,
  SkillMapSkillsProject = 1575,
  SkillMapSkillsProjectChildren = 1576,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 1577,
  SkillMapSkillsProjectContentfulId = 1578,
  SkillMapSkillsProjectCreatedAt = 1579,
  SkillMapSkillsProjectEndDate = 1580,
  SkillMapSkillsProjectId = 1581,
  SkillMapSkillsProjectName = 1582,
  SkillMapSkillsProjectNodeLocale = 1583,
  SkillMapSkillsProjectSpaceId = 1584,
  SkillMapSkillsProjectStartDate = 1585,
  SkillMapSkillsProjectSubName = 1586,
  SkillMapSkillsProjectTags = 1587,
  SkillMapSkillsProjectUpdatedAt = 1588,
  SkillMapSkillsSkillGrpup = 1589,
  SkillMapSkillsSkillGrpupChildren = 1590,
  SkillMapSkillsSkillGrpupContentfulId = 1591,
  SkillMapSkillsSkillGrpupCreatedAt = 1592,
  SkillMapSkillsSkillGrpupId = 1593,
  SkillMapSkillsSkillGrpupName = 1594,
  SkillMapSkillsSkillGrpupNodeLocale = 1595,
  SkillMapSkillsSkillGrpupSkillMap = 1596,
  SkillMapSkillsSkillGrpupSkills = 1597,
  SkillMapSkillsSkillGrpupSpaceId = 1598,
  SkillMapSkillsSkillGrpupUpdatedAt = 1599,
  SkillMapSkillsSkillMap = 1600,
  SkillMapSkillsSkillMapChildren = 1601,
  SkillMapSkillsSkillMapContentfulId = 1602,
  SkillMapSkillsSkillMapCreatedAt = 1603,
  SkillMapSkillsSkillMapExpanded = 1604,
  SkillMapSkillsSkillMapId = 1605,
  SkillMapSkillsSkillMapName = 1606,
  SkillMapSkillsSkillMapNodeLocale = 1607,
  SkillMapSkillsSkillMapSkillGroups = 1608,
  SkillMapSkillsSkillMapSkills = 1609,
  SkillMapSkillsSkillMapSortKey = 1610,
  SkillMapSkillsSkillMapSpaceId = 1611,
  SkillMapSkillsSkillMapUpdatedAt = 1612,
  SkillMapSkillsSpaceId = 1613,
  SkillMapSkillsSysRevision = 1614,
  SkillMapSkillsSysType = 1615,
  SkillMapSkillsUpdatedAt = 1616,
  SkillMapSortKey = 1617,
  SkillMapSpaceId = 1618,
  SkillMapSysRevision = 1619,
  SkillMapSysType = 1620,
  SkillMapUpdatedAt = 1621,
  SpaceId = 1622,
  SysContentTypeSysId = 1623,
  SysContentTypeSysLinkType = 1624,
  SysContentTypeSysType = 1625,
  SysRevision = 1626,
  SysType = 1627,
  UpdatedAt = 1628
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 44,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 45,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 46,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 47,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 48,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 49,
  IconChildContentfulIconSvgTextNodeChildMdxId = 50,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 51,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 52,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 53,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 54,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 55,
  IconChildContentfulIconSvgTextNodeChildren = 56,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 57,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 58,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 59,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 60,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 61,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 62,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 63,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 64,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 65,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 66,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 67,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 68,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 69,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 70,
  IconChildContentfulIconSvgTextNodeChildrenId = 71,
  IconChildContentfulIconSvgTextNodeId = 72,
  IconChildContentfulIconSvgTextNodeInternalContent = 73,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 74,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 75,
  IconChildContentfulIconSvgTextNodeInternalDescription = 76,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 77,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 78,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 79,
  IconChildContentfulIconSvgTextNodeInternalOwner = 80,
  IconChildContentfulIconSvgTextNodeInternalType = 81,
  IconChildContentfulIconSvgTextNodeParentChildren = 82,
  IconChildContentfulIconSvgTextNodeParentId = 83,
  IconChildContentfulIconSvgTextNodeSvg = 84,
  IconChildContentfulIconSvgTextNodeSysType = 85,
  IconChildren = 86,
  IconChildrenContentfulIconSvgTextNode = 87,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 88,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 89,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 90,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 91,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 92,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 93,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 94,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 95,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 96,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 97,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 98,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 99,
  IconChildrenContentfulIconSvgTextNodeChildren = 100,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 101,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 102,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 103,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 104,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 105,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 106,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 107,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 108,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 109,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 110,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 111,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 112,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 113,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 114,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 115,
  IconChildrenContentfulIconSvgTextNodeId = 116,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 117,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 118,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 119,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 120,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 121,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 122,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 123,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 124,
  IconChildrenContentfulIconSvgTextNodeInternalType = 125,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 126,
  IconChildrenContentfulIconSvgTextNodeParentId = 127,
  IconChildrenContentfulIconSvgTextNodeSvg = 128,
  IconChildrenContentfulIconSvgTextNodeSysType = 129,
  IconChildrenChildren = 130,
  IconChildrenChildrenChildren = 131,
  IconChildrenChildrenId = 132,
  IconChildrenId = 133,
  IconChildrenInternalContent = 134,
  IconChildrenInternalContentDigest = 135,
  IconChildrenInternalContentFilePath = 136,
  IconChildrenInternalDescription = 137,
  IconChildrenInternalFieldOwners = 138,
  IconChildrenInternalIgnoreType = 139,
  IconChildrenInternalMediaType = 140,
  IconChildrenInternalOwner = 141,
  IconChildrenInternalType = 142,
  IconChildrenParentChildren = 143,
  IconChildrenParentId = 144,
  IconContact = 145,
  IconContactChildren = 146,
  IconContactChildrenChildren = 147,
  IconContactChildrenId = 148,
  IconContactContentfulId = 149,
  IconContactCreatedAt = 150,
  IconContactHref = 151,
  IconContactIconSvgDarkChildren = 152,
  IconContactIconSvgDarkContentfulId = 153,
  IconContactIconSvgDarkCreatedAt = 154,
  IconContactIconSvgDarkDescription = 155,
  IconContactIconSvgDarkFilename = 156,
  IconContactIconSvgDarkFilesize = 157,
  IconContactIconSvgDarkGatsbyImage = 158,
  IconContactIconSvgDarkGatsbyImageData = 159,
  IconContactIconSvgDarkHeight = 160,
  IconContactIconSvgDarkId = 161,
  IconContactIconSvgDarkMimeType = 162,
  IconContactIconSvgDarkNodeLocale = 163,
  IconContactIconSvgDarkPlaceholderUrl = 164,
  IconContactIconSvgDarkPublicUrl = 165,
  IconContactIconSvgDarkSize = 166,
  IconContactIconSvgDarkSpaceId = 167,
  IconContactIconSvgDarkTitle = 168,
  IconContactIconSvgDarkUpdatedAt = 169,
  IconContactIconSvgDarkUrl = 170,
  IconContactIconSvgDarkWidth = 171,
  IconContactIconSvgLightChildren = 172,
  IconContactIconSvgLightContentfulId = 173,
  IconContactIconSvgLightCreatedAt = 174,
  IconContactIconSvgLightDescription = 175,
  IconContactIconSvgLightFilename = 176,
  IconContactIconSvgLightFilesize = 177,
  IconContactIconSvgLightGatsbyImage = 178,
  IconContactIconSvgLightGatsbyImageData = 179,
  IconContactIconSvgLightHeight = 180,
  IconContactIconSvgLightId = 181,
  IconContactIconSvgLightMimeType = 182,
  IconContactIconSvgLightNodeLocale = 183,
  IconContactIconSvgLightPlaceholderUrl = 184,
  IconContactIconSvgLightPublicUrl = 185,
  IconContactIconSvgLightSize = 186,
  IconContactIconSvgLightSpaceId = 187,
  IconContactIconSvgLightTitle = 188,
  IconContactIconSvgLightUpdatedAt = 189,
  IconContactIconSvgLightUrl = 190,
  IconContactIconSvgLightWidth = 191,
  IconContactIconChildren = 192,
  IconContactIconChildrenContentfulIconSvgTextNode = 193,
  IconContactIconContact = 194,
  IconContactIconContentfulId = 195,
  IconContactIconCreatedAt = 196,
  IconContactIconHistory = 197,
  IconContactIconId = 198,
  IconContactIconName = 199,
  IconContactIconNodeLocale = 200,
  IconContactIconOss = 201,
  IconContactIconProject = 202,
  IconContactIconSpaceId = 203,
  IconContactIconUpdatedAt = 204,
  IconContactIconWhatICanDo = 205,
  IconContactId = 206,
  IconContactInternalContent = 207,
  IconContactInternalContentDigest = 208,
  IconContactInternalContentFilePath = 209,
  IconContactInternalDescription = 210,
  IconContactInternalFieldOwners = 211,
  IconContactInternalIgnoreType = 212,
  IconContactInternalMediaType = 213,
  IconContactInternalOwner = 214,
  IconContactInternalType = 215,
  IconContactName = 216,
  IconContactNodeLocale = 217,
  IconContactParentChildren = 218,
  IconContactParentId = 219,
  IconContactSortKey = 220,
  IconContactSpaceId = 221,
  IconContactSubName = 222,
  IconContactSysRevision = 223,
  IconContactSysType = 224,
  IconContactUpdatedAt = 225,
  IconContentfulId = 226,
  IconCreatedAt = 227,
  IconHistory = 228,
  IconHistoryChildren = 229,
  IconHistoryChildrenChildren = 230,
  IconHistoryChildrenId = 231,
  IconHistoryContentfulId = 232,
  IconHistoryCreatedAt = 233,
  IconHistoryDate = 234,
  IconHistoryIconChildren = 235,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 236,
  IconHistoryIconContact = 237,
  IconHistoryIconContentfulId = 238,
  IconHistoryIconCreatedAt = 239,
  IconHistoryIconHistory = 240,
  IconHistoryIconId = 241,
  IconHistoryIconName = 242,
  IconHistoryIconNodeLocale = 243,
  IconHistoryIconOss = 244,
  IconHistoryIconProject = 245,
  IconHistoryIconSpaceId = 246,
  IconHistoryIconUpdatedAt = 247,
  IconHistoryIconWhatICanDo = 248,
  IconHistoryId = 249,
  IconHistoryInternalContent = 250,
  IconHistoryInternalContentDigest = 251,
  IconHistoryInternalContentFilePath = 252,
  IconHistoryInternalDescription = 253,
  IconHistoryInternalFieldOwners = 254,
  IconHistoryInternalIgnoreType = 255,
  IconHistoryInternalMediaType = 256,
  IconHistoryInternalOwner = 257,
  IconHistoryInternalType = 258,
  IconHistoryName = 259,
  IconHistoryNodeLocale = 260,
  IconHistoryParentChildren = 261,
  IconHistoryParentId = 262,
  IconHistorySpaceId = 263,
  IconHistorySubName = 264,
  IconHistorySysRevision = 265,
  IconHistorySysType = 266,
  IconHistoryUpdatedAt = 267,
  IconId = 268,
  IconInternalContent = 269,
  IconInternalContentDigest = 270,
  IconInternalContentFilePath = 271,
  IconInternalDescription = 272,
  IconInternalFieldOwners = 273,
  IconInternalIgnoreType = 274,
  IconInternalMediaType = 275,
  IconInternalOwner = 276,
  IconInternalType = 277,
  IconName = 278,
  IconNodeLocale = 279,
  IconOss = 280,
  IconOssChildContentfulOssDetailTextNodeChildren = 281,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 282,
  IconOssChildContentfulOssDetailTextNodeDetail = 283,
  IconOssChildContentfulOssDetailTextNodeId = 284,
  IconOssChildren = 285,
  IconOssChildrenContentfulOssDetailTextNode = 286,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 287,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 288,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 289,
  IconOssChildrenContentfulOssDetailTextNodeId = 290,
  IconOssChildrenChildren = 291,
  IconOssChildrenId = 292,
  IconOssContentfulId = 293,
  IconOssCreatedAt = 294,
  IconOssDetailChildren = 295,
  IconOssDetailChildrenMdx = 296,
  IconOssDetailDetail = 297,
  IconOssDetailId = 298,
  IconOssHref = 299,
  IconOssIconChildren = 300,
  IconOssIconChildrenContentfulIconSvgTextNode = 301,
  IconOssIconContact = 302,
  IconOssIconContentfulId = 303,
  IconOssIconCreatedAt = 304,
  IconOssIconHistory = 305,
  IconOssIconId = 306,
  IconOssIconName = 307,
  IconOssIconNodeLocale = 308,
  IconOssIconOss = 309,
  IconOssIconProject = 310,
  IconOssIconSpaceId = 311,
  IconOssIconUpdatedAt = 312,
  IconOssIconWhatICanDo = 313,
  IconOssId = 314,
  IconOssImageChildren = 315,
  IconOssImageContentfulId = 316,
  IconOssImageCreatedAt = 317,
  IconOssImageDescription = 318,
  IconOssImageFilename = 319,
  IconOssImageFilesize = 320,
  IconOssImageGatsbyImage = 321,
  IconOssImageGatsbyImageData = 322,
  IconOssImageHeight = 323,
  IconOssImageId = 324,
  IconOssImageMimeType = 325,
  IconOssImageNodeLocale = 326,
  IconOssImagePlaceholderUrl = 327,
  IconOssImagePublicUrl = 328,
  IconOssImageSize = 329,
  IconOssImageSpaceId = 330,
  IconOssImageTitle = 331,
  IconOssImageUpdatedAt = 332,
  IconOssImageUrl = 333,
  IconOssImageWidth = 334,
  IconOssInternalContent = 335,
  IconOssInternalContentDigest = 336,
  IconOssInternalContentFilePath = 337,
  IconOssInternalDescription = 338,
  IconOssInternalFieldOwners = 339,
  IconOssInternalIgnoreType = 340,
  IconOssInternalMediaType = 341,
  IconOssInternalOwner = 342,
  IconOssInternalType = 343,
  IconOssName = 344,
  IconOssNodeLocale = 345,
  IconOssParentChildren = 346,
  IconOssParentId = 347,
  IconOssSpaceId = 348,
  IconOssStartDate = 349,
  IconOssSubName = 350,
  IconOssSysRevision = 351,
  IconOssSysType = 352,
  IconOssTags = 353,
  IconOssTagsBlogPost = 354,
  IconOssTagsChildren = 355,
  IconOssTagsContentfulId = 356,
  IconOssTagsCreatedAt = 357,
  IconOssTagsId = 358,
  IconOssTagsLevel = 359,
  IconOssTagsName = 360,
  IconOssTagsNodeLocale = 361,
  IconOssTagsOss = 362,
  IconOssTagsProject = 363,
  IconOssTagsSkillGrpup = 364,
  IconOssTagsSkillMap = 365,
  IconOssTagsSpaceId = 366,
  IconOssTagsUpdatedAt = 367,
  IconOssUpdatedAt = 368,
  IconParentChildren = 369,
  IconParentChildrenChildren = 370,
  IconParentChildrenId = 371,
  IconParentId = 372,
  IconParentInternalContent = 373,
  IconParentInternalContentDigest = 374,
  IconParentInternalContentFilePath = 375,
  IconParentInternalDescription = 376,
  IconParentInternalFieldOwners = 377,
  IconParentInternalIgnoreType = 378,
  IconParentInternalMediaType = 379,
  IconParentInternalOwner = 380,
  IconParentInternalType = 381,
  IconParentParentChildren = 382,
  IconParentParentId = 383,
  IconProject = 384,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 385,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 386,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 387,
  IconProjectChildContentfulProjectDetailTextNodeId = 388,
  IconProjectChildren = 389,
  IconProjectChildrenContentfulProjectDetailTextNode = 390,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 391,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 392,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 393,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 394,
  IconProjectChildrenChildren = 395,
  IconProjectChildrenId = 396,
  IconProjectContentfulId = 397,
  IconProjectCreatedAt = 398,
  IconProjectDetailChildren = 399,
  IconProjectDetailChildrenMdx = 400,
  IconProjectDetailDetail = 401,
  IconProjectDetailId = 402,
  IconProjectEndDate = 403,
  IconProjectIconChildren = 404,
  IconProjectIconChildrenContentfulIconSvgTextNode = 405,
  IconProjectIconContact = 406,
  IconProjectIconContentfulId = 407,
  IconProjectIconCreatedAt = 408,
  IconProjectIconHistory = 409,
  IconProjectIconId = 410,
  IconProjectIconName = 411,
  IconProjectIconNodeLocale = 412,
  IconProjectIconOss = 413,
  IconProjectIconProject = 414,
  IconProjectIconSpaceId = 415,
  IconProjectIconUpdatedAt = 416,
  IconProjectIconWhatICanDo = 417,
  IconProjectId = 418,
  IconProjectInternalContent = 419,
  IconProjectInternalContentDigest = 420,
  IconProjectInternalContentFilePath = 421,
  IconProjectInternalDescription = 422,
  IconProjectInternalFieldOwners = 423,
  IconProjectInternalIgnoreType = 424,
  IconProjectInternalMediaType = 425,
  IconProjectInternalOwner = 426,
  IconProjectInternalType = 427,
  IconProjectName = 428,
  IconProjectNodeLocale = 429,
  IconProjectParentChildren = 430,
  IconProjectParentId = 431,
  IconProjectSpaceId = 432,
  IconProjectStartDate = 433,
  IconProjectSubName = 434,
  IconProjectSysRevision = 435,
  IconProjectSysType = 436,
  IconProjectTags = 437,
  IconProjectTagsBlogPost = 438,
  IconProjectTagsChildren = 439,
  IconProjectTagsContentfulId = 440,
  IconProjectTagsCreatedAt = 441,
  IconProjectTagsId = 442,
  IconProjectTagsLevel = 443,
  IconProjectTagsName = 444,
  IconProjectTagsNodeLocale = 445,
  IconProjectTagsOss = 446,
  IconProjectTagsProject = 447,
  IconProjectTagsSkillGrpup = 448,
  IconProjectTagsSkillMap = 449,
  IconProjectTagsSpaceId = 450,
  IconProjectTagsUpdatedAt = 451,
  IconProjectUpdatedAt = 452,
  IconSpaceId = 453,
  IconSvgChildMdxBody = 454,
  IconSvgChildMdxChildren = 455,
  IconSvgChildMdxExcerpt = 456,
  IconSvgChildMdxFileAbsolutePath = 457,
  IconSvgChildMdxHeadings = 458,
  IconSvgChildMdxHtml = 459,
  IconSvgChildMdxId = 460,
  IconSvgChildMdxMdxAst = 461,
  IconSvgChildMdxRawBody = 462,
  IconSvgChildMdxSlug = 463,
  IconSvgChildMdxTableOfContents = 464,
  IconSvgChildMdxTimeToRead = 465,
  IconSvgChildren = 466,
  IconSvgChildrenMdx = 467,
  IconSvgChildrenMdxBody = 468,
  IconSvgChildrenMdxChildren = 469,
  IconSvgChildrenMdxExcerpt = 470,
  IconSvgChildrenMdxFileAbsolutePath = 471,
  IconSvgChildrenMdxHeadings = 472,
  IconSvgChildrenMdxHtml = 473,
  IconSvgChildrenMdxId = 474,
  IconSvgChildrenMdxMdxAst = 475,
  IconSvgChildrenMdxRawBody = 476,
  IconSvgChildrenMdxSlug = 477,
  IconSvgChildrenMdxTableOfContents = 478,
  IconSvgChildrenMdxTimeToRead = 479,
  IconSvgChildrenChildren = 480,
  IconSvgChildrenId = 481,
  IconSvgId = 482,
  IconSvgInternalContent = 483,
  IconSvgInternalContentDigest = 484,
  IconSvgInternalContentFilePath = 485,
  IconSvgInternalDescription = 486,
  IconSvgInternalFieldOwners = 487,
  IconSvgInternalIgnoreType = 488,
  IconSvgInternalMediaType = 489,
  IconSvgInternalOwner = 490,
  IconSvgInternalType = 491,
  IconSvgParentChildren = 492,
  IconSvgParentId = 493,
  IconSvgSvg = 494,
  IconSvgSysType = 495,
  IconSysRevision = 496,
  IconSysType = 497,
  IconUpdatedAt = 498,
  IconWhatICanDo = 499,
  IconWhatICanDoChildren = 500,
  IconWhatICanDoChildrenChildren = 501,
  IconWhatICanDoChildrenId = 502,
  IconWhatICanDoContentfulId = 503,
  IconWhatICanDoCreatedAt = 504,
  IconWhatICanDoIconChildren = 505,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 506,
  IconWhatICanDoIconContact = 507,
  IconWhatICanDoIconContentfulId = 508,
  IconWhatICanDoIconCreatedAt = 509,
  IconWhatICanDoIconHistory = 510,
  IconWhatICanDoIconId = 511,
  IconWhatICanDoIconName = 512,
  IconWhatICanDoIconNodeLocale = 513,
  IconWhatICanDoIconOss = 514,
  IconWhatICanDoIconProject = 515,
  IconWhatICanDoIconSpaceId = 516,
  IconWhatICanDoIconUpdatedAt = 517,
  IconWhatICanDoIconWhatICanDo = 518,
  IconWhatICanDoId = 519,
  IconWhatICanDoInternalContent = 520,
  IconWhatICanDoInternalContentDigest = 521,
  IconWhatICanDoInternalContentFilePath = 522,
  IconWhatICanDoInternalDescription = 523,
  IconWhatICanDoInternalFieldOwners = 524,
  IconWhatICanDoInternalIgnoreType = 525,
  IconWhatICanDoInternalMediaType = 526,
  IconWhatICanDoInternalOwner = 527,
  IconWhatICanDoInternalType = 528,
  IconWhatICanDoName = 529,
  IconWhatICanDoNodeLocale = 530,
  IconWhatICanDoParentChildren = 531,
  IconWhatICanDoParentId = 532,
  IconWhatICanDoSortKey = 533,
  IconWhatICanDoSpaceId = 534,
  IconWhatICanDoSubName = 535,
  IconWhatICanDoSysRevision = 536,
  IconWhatICanDoSysType = 537,
  IconWhatICanDoUpdatedAt = 538,
  Id = 539,
  InternalContent = 540,
  InternalContentDigest = 541,
  InternalContentFilePath = 542,
  InternalDescription = 543,
  InternalFieldOwners = 544,
  InternalIgnoreType = 545,
  InternalMediaType = 546,
  InternalOwner = 547,
  InternalType = 548,
  Name = 549,
  NodeLocale = 550,
  ParentChildren = 551,
  ParentChildrenChildren = 552,
  ParentChildrenChildrenChildren = 553,
  ParentChildrenChildrenId = 554,
  ParentChildrenId = 555,
  ParentChildrenInternalContent = 556,
  ParentChildrenInternalContentDigest = 557,
  ParentChildrenInternalContentFilePath = 558,
  ParentChildrenInternalDescription = 559,
  ParentChildrenInternalFieldOwners = 560,
  ParentChildrenInternalIgnoreType = 561,
  ParentChildrenInternalMediaType = 562,
  ParentChildrenInternalOwner = 563,
  ParentChildrenInternalType = 564,
  ParentChildrenParentChildren = 565,
  ParentChildrenParentId = 566,
  ParentId = 567,
  ParentInternalContent = 568,
  ParentInternalContentDigest = 569,
  ParentInternalContentFilePath = 570,
  ParentInternalDescription = 571,
  ParentInternalFieldOwners = 572,
  ParentInternalIgnoreType = 573,
  ParentInternalMediaType = 574,
  ParentInternalOwner = 575,
  ParentInternalType = 576,
  ParentParentChildren = 577,
  ParentParentChildrenChildren = 578,
  ParentParentChildrenId = 579,
  ParentParentId = 580,
  ParentParentInternalContent = 581,
  ParentParentInternalContentDigest = 582,
  ParentParentInternalContentFilePath = 583,
  ParentParentInternalDescription = 584,
  ParentParentInternalFieldOwners = 585,
  ParentParentInternalIgnoreType = 586,
  ParentParentInternalMediaType = 587,
  ParentParentInternalOwner = 588,
  ParentParentInternalType = 589,
  ParentParentParentChildren = 590,
  ParentParentParentId = 591,
  SortKey = 592,
  SpaceId = 593,
  SubName = 594,
  SysContentTypeSysId = 595,
  SysContentTypeSysLinkType = 596,
  SysContentTypeSysType = 597,
  SysRevision = 598,
  SysType = 599,
  UpdatedAt = 600
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
  ChildrenChildrenInternalContentFilePath = 17,
  ChildrenChildrenInternalDescription = 18,
  ChildrenChildrenInternalFieldOwners = 19,
  ChildrenChildrenInternalIgnoreType = 20,
  ChildrenChildrenInternalMediaType = 21,
  ChildrenChildrenInternalOwner = 22,
  ChildrenChildrenInternalType = 23,
  ChildrenChildrenParentChildren = 24,
  ChildrenChildrenParentId = 25,
  ChildrenId = 26,
  ChildrenInternalContent = 27,
  ChildrenInternalContentDigest = 28,
  ChildrenInternalContentFilePath = 29,
  ChildrenInternalDescription = 30,
  ChildrenInternalFieldOwners = 31,
  ChildrenInternalIgnoreType = 32,
  ChildrenInternalMediaType = 33,
  ChildrenInternalOwner = 34,
  ChildrenInternalType = 35,
  ChildrenParentChildren = 36,
  ChildrenParentChildrenChildren = 37,
  ChildrenParentChildrenId = 38,
  ChildrenParentId = 39,
  ChildrenParentInternalContent = 40,
  ChildrenParentInternalContentDigest = 41,
  ChildrenParentInternalContentFilePath = 42,
  ChildrenParentInternalDescription = 43,
  ChildrenParentInternalFieldOwners = 44,
  ChildrenParentInternalIgnoreType = 45,
  ChildrenParentInternalMediaType = 46,
  ChildrenParentInternalOwner = 47,
  ChildrenParentInternalType = 48,
  ChildrenParentParentChildren = 49,
  ChildrenParentParentId = 50,
  Ctime = 51,
  CtimeMs = 52,
  Dev = 53,
  Dir = 54,
  Ext = 55,
  Extension = 56,
  Gid = 57,
  Id = 58,
  Ino = 59,
  InternalContent = 60,
  InternalContentDigest = 61,
  InternalContentFilePath = 62,
  InternalDescription = 63,
  InternalFieldOwners = 64,
  InternalIgnoreType = 65,
  InternalMediaType = 66,
  InternalOwner = 67,
  InternalType = 68,
  Mode = 69,
  ModifiedTime = 70,
  Mtime = 71,
  MtimeMs = 72,
  Name = 73,
  Nlink = 74,
  ParentChildren = 75,
  ParentChildrenChildren = 76,
  ParentChildrenChildrenChildren = 77,
  ParentChildrenChildrenId = 78,
  ParentChildrenId = 79,
  ParentChildrenInternalContent = 80,
  ParentChildrenInternalContentDigest = 81,
  ParentChildrenInternalContentFilePath = 82,
  ParentChildrenInternalDescription = 83,
  ParentChildrenInternalFieldOwners = 84,
  ParentChildrenInternalIgnoreType = 85,
  ParentChildrenInternalMediaType = 86,
  ParentChildrenInternalOwner = 87,
  ParentChildrenInternalType = 88,
  ParentChildrenParentChildren = 89,
  ParentChildrenParentId = 90,
  ParentId = 91,
  ParentInternalContent = 92,
  ParentInternalContentDigest = 93,
  ParentInternalContentFilePath = 94,
  ParentInternalDescription = 95,
  ParentInternalFieldOwners = 96,
  ParentInternalIgnoreType = 97,
  ParentInternalMediaType = 98,
  ParentInternalOwner = 99,
  ParentInternalType = 100,
  ParentParentChildren = 101,
  ParentParentChildrenChildren = 102,
  ParentParentChildrenId = 103,
  ParentParentId = 104,
  ParentParentInternalContent = 105,
  ParentParentInternalContentDigest = 106,
  ParentParentInternalContentFilePath = 107,
  ParentParentInternalDescription = 108,
  ParentParentInternalFieldOwners = 109,
  ParentParentInternalIgnoreType = 110,
  ParentParentInternalMediaType = 111,
  ParentParentInternalOwner = 112,
  ParentParentInternalType = 113,
  ParentParentParentChildren = 114,
  ParentParentParentId = 115,
  PrettySize = 116,
  Rdev = 117,
  RelativeDirectory = 118,
  RelativePath = 119,
  Root = 120,
  Size = 121,
  SourceInstanceName = 122,
  Uid = 123
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
  ChildImageSharpChildrenInternalContentFilePath = 18,
  ChildImageSharpChildrenInternalDescription = 19,
  ChildImageSharpChildrenInternalFieldOwners = 20,
  ChildImageSharpChildrenInternalIgnoreType = 21,
  ChildImageSharpChildrenInternalMediaType = 22,
  ChildImageSharpChildrenInternalOwner = 23,
  ChildImageSharpChildrenInternalType = 24,
  ChildImageSharpChildrenParentChildren = 25,
  ChildImageSharpChildrenParentId = 26,
  ChildImageSharpFixedAspectRatio = 27,
  ChildImageSharpFixedBase64 = 28,
  ChildImageSharpFixedHeight = 29,
  ChildImageSharpFixedOriginalName = 30,
  ChildImageSharpFixedSrc = 31,
  ChildImageSharpFixedSrcSet = 32,
  ChildImageSharpFixedSrcSetWebp = 33,
  ChildImageSharpFixedSrcWebp = 34,
  ChildImageSharpFixedTracedSvg = 35,
  ChildImageSharpFixedWidth = 36,
  ChildImageSharpFluidAspectRatio = 37,
  ChildImageSharpFluidBase64 = 38,
  ChildImageSharpFluidOriginalImg = 39,
  ChildImageSharpFluidOriginalName = 40,
  ChildImageSharpFluidPresentationHeight = 41,
  ChildImageSharpFluidPresentationWidth = 42,
  ChildImageSharpFluidSizes = 43,
  ChildImageSharpFluidSrc = 44,
  ChildImageSharpFluidSrcSet = 45,
  ChildImageSharpFluidSrcSetWebp = 46,
  ChildImageSharpFluidSrcWebp = 47,
  ChildImageSharpFluidTracedSvg = 48,
  ChildImageSharpGatsbyImageData = 49,
  ChildImageSharpId = 50,
  ChildImageSharpInternalContent = 51,
  ChildImageSharpInternalContentDigest = 52,
  ChildImageSharpInternalContentFilePath = 53,
  ChildImageSharpInternalDescription = 54,
  ChildImageSharpInternalFieldOwners = 55,
  ChildImageSharpInternalIgnoreType = 56,
  ChildImageSharpInternalMediaType = 57,
  ChildImageSharpInternalOwner = 58,
  ChildImageSharpInternalType = 59,
  ChildImageSharpOriginalHeight = 60,
  ChildImageSharpOriginalSrc = 61,
  ChildImageSharpOriginalWidth = 62,
  ChildImageSharpParentChildren = 63,
  ChildImageSharpParentChildrenChildren = 64,
  ChildImageSharpParentChildrenId = 65,
  ChildImageSharpParentId = 66,
  ChildImageSharpParentInternalContent = 67,
  ChildImageSharpParentInternalContentDigest = 68,
  ChildImageSharpParentInternalContentFilePath = 69,
  ChildImageSharpParentInternalDescription = 70,
  ChildImageSharpParentInternalFieldOwners = 71,
  ChildImageSharpParentInternalIgnoreType = 72,
  ChildImageSharpParentInternalMediaType = 73,
  ChildImageSharpParentInternalOwner = 74,
  ChildImageSharpParentInternalType = 75,
  ChildImageSharpParentParentChildren = 76,
  ChildImageSharpParentParentId = 77,
  ChildImageSharpResizeAspectRatio = 78,
  ChildImageSharpResizeHeight = 79,
  ChildImageSharpResizeOriginalName = 80,
  ChildImageSharpResizeSrc = 81,
  ChildImageSharpResizeTracedSvg = 82,
  ChildImageSharpResizeWidth = 83,
  ChildLocaleChildren = 84,
  ChildLocaleChildrenChildren = 85,
  ChildLocaleChildrenChildrenChildren = 86,
  ChildLocaleChildrenChildrenId = 87,
  ChildLocaleChildrenId = 88,
  ChildLocaleChildrenInternalContent = 89,
  ChildLocaleChildrenInternalContentDigest = 90,
  ChildLocaleChildrenInternalContentFilePath = 91,
  ChildLocaleChildrenInternalDescription = 92,
  ChildLocaleChildrenInternalFieldOwners = 93,
  ChildLocaleChildrenInternalIgnoreType = 94,
  ChildLocaleChildrenInternalMediaType = 95,
  ChildLocaleChildrenInternalOwner = 96,
  ChildLocaleChildrenInternalType = 97,
  ChildLocaleChildrenParentChildren = 98,
  ChildLocaleChildrenParentId = 99,
  ChildLocaleData = 100,
  ChildLocaleFileAbsolutePath = 101,
  ChildLocaleId = 102,
  ChildLocaleInternalContent = 103,
  ChildLocaleInternalContentDigest = 104,
  ChildLocaleInternalContentFilePath = 105,
  ChildLocaleInternalDescription = 106,
  ChildLocaleInternalFieldOwners = 107,
  ChildLocaleInternalIgnoreType = 108,
  ChildLocaleInternalMediaType = 109,
  ChildLocaleInternalOwner = 110,
  ChildLocaleInternalType = 111,
  ChildLocaleLanguage = 112,
  ChildLocaleNs = 113,
  ChildLocaleParentChildren = 114,
  ChildLocaleParentChildrenChildren = 115,
  ChildLocaleParentChildrenId = 116,
  ChildLocaleParentId = 117,
  ChildLocaleParentInternalContent = 118,
  ChildLocaleParentInternalContentDigest = 119,
  ChildLocaleParentInternalContentFilePath = 120,
  ChildLocaleParentInternalDescription = 121,
  ChildLocaleParentInternalFieldOwners = 122,
  ChildLocaleParentInternalIgnoreType = 123,
  ChildLocaleParentInternalMediaType = 124,
  ChildLocaleParentInternalOwner = 125,
  ChildLocaleParentInternalType = 126,
  ChildLocaleParentParentChildren = 127,
  ChildLocaleParentParentId = 128,
  Children = 129,
  ChildrenImageSharp = 130,
  ChildrenImageSharpChildren = 131,
  ChildrenImageSharpChildrenChildren = 132,
  ChildrenImageSharpChildrenChildrenChildren = 133,
  ChildrenImageSharpChildrenChildrenId = 134,
  ChildrenImageSharpChildrenId = 135,
  ChildrenImageSharpChildrenInternalContent = 136,
  ChildrenImageSharpChildrenInternalContentDigest = 137,
  ChildrenImageSharpChildrenInternalContentFilePath = 138,
  ChildrenImageSharpChildrenInternalDescription = 139,
  ChildrenImageSharpChildrenInternalFieldOwners = 140,
  ChildrenImageSharpChildrenInternalIgnoreType = 141,
  ChildrenImageSharpChildrenInternalMediaType = 142,
  ChildrenImageSharpChildrenInternalOwner = 143,
  ChildrenImageSharpChildrenInternalType = 144,
  ChildrenImageSharpChildrenParentChildren = 145,
  ChildrenImageSharpChildrenParentId = 146,
  ChildrenImageSharpFixedAspectRatio = 147,
  ChildrenImageSharpFixedBase64 = 148,
  ChildrenImageSharpFixedHeight = 149,
  ChildrenImageSharpFixedOriginalName = 150,
  ChildrenImageSharpFixedSrc = 151,
  ChildrenImageSharpFixedSrcSet = 152,
  ChildrenImageSharpFixedSrcSetWebp = 153,
  ChildrenImageSharpFixedSrcWebp = 154,
  ChildrenImageSharpFixedTracedSvg = 155,
  ChildrenImageSharpFixedWidth = 156,
  ChildrenImageSharpFluidAspectRatio = 157,
  ChildrenImageSharpFluidBase64 = 158,
  ChildrenImageSharpFluidOriginalImg = 159,
  ChildrenImageSharpFluidOriginalName = 160,
  ChildrenImageSharpFluidPresentationHeight = 161,
  ChildrenImageSharpFluidPresentationWidth = 162,
  ChildrenImageSharpFluidSizes = 163,
  ChildrenImageSharpFluidSrc = 164,
  ChildrenImageSharpFluidSrcSet = 165,
  ChildrenImageSharpFluidSrcSetWebp = 166,
  ChildrenImageSharpFluidSrcWebp = 167,
  ChildrenImageSharpFluidTracedSvg = 168,
  ChildrenImageSharpGatsbyImageData = 169,
  ChildrenImageSharpId = 170,
  ChildrenImageSharpInternalContent = 171,
  ChildrenImageSharpInternalContentDigest = 172,
  ChildrenImageSharpInternalContentFilePath = 173,
  ChildrenImageSharpInternalDescription = 174,
  ChildrenImageSharpInternalFieldOwners = 175,
  ChildrenImageSharpInternalIgnoreType = 176,
  ChildrenImageSharpInternalMediaType = 177,
  ChildrenImageSharpInternalOwner = 178,
  ChildrenImageSharpInternalType = 179,
  ChildrenImageSharpOriginalHeight = 180,
  ChildrenImageSharpOriginalSrc = 181,
  ChildrenImageSharpOriginalWidth = 182,
  ChildrenImageSharpParentChildren = 183,
  ChildrenImageSharpParentChildrenChildren = 184,
  ChildrenImageSharpParentChildrenId = 185,
  ChildrenImageSharpParentId = 186,
  ChildrenImageSharpParentInternalContent = 187,
  ChildrenImageSharpParentInternalContentDigest = 188,
  ChildrenImageSharpParentInternalContentFilePath = 189,
  ChildrenImageSharpParentInternalDescription = 190,
  ChildrenImageSharpParentInternalFieldOwners = 191,
  ChildrenImageSharpParentInternalIgnoreType = 192,
  ChildrenImageSharpParentInternalMediaType = 193,
  ChildrenImageSharpParentInternalOwner = 194,
  ChildrenImageSharpParentInternalType = 195,
  ChildrenImageSharpParentParentChildren = 196,
  ChildrenImageSharpParentParentId = 197,
  ChildrenImageSharpResizeAspectRatio = 198,
  ChildrenImageSharpResizeHeight = 199,
  ChildrenImageSharpResizeOriginalName = 200,
  ChildrenImageSharpResizeSrc = 201,
  ChildrenImageSharpResizeTracedSvg = 202,
  ChildrenImageSharpResizeWidth = 203,
  ChildrenLocale = 204,
  ChildrenLocaleChildren = 205,
  ChildrenLocaleChildrenChildren = 206,
  ChildrenLocaleChildrenChildrenChildren = 207,
  ChildrenLocaleChildrenChildrenId = 208,
  ChildrenLocaleChildrenId = 209,
  ChildrenLocaleChildrenInternalContent = 210,
  ChildrenLocaleChildrenInternalContentDigest = 211,
  ChildrenLocaleChildrenInternalContentFilePath = 212,
  ChildrenLocaleChildrenInternalDescription = 213,
  ChildrenLocaleChildrenInternalFieldOwners = 214,
  ChildrenLocaleChildrenInternalIgnoreType = 215,
  ChildrenLocaleChildrenInternalMediaType = 216,
  ChildrenLocaleChildrenInternalOwner = 217,
  ChildrenLocaleChildrenInternalType = 218,
  ChildrenLocaleChildrenParentChildren = 219,
  ChildrenLocaleChildrenParentId = 220,
  ChildrenLocaleData = 221,
  ChildrenLocaleFileAbsolutePath = 222,
  ChildrenLocaleId = 223,
  ChildrenLocaleInternalContent = 224,
  ChildrenLocaleInternalContentDigest = 225,
  ChildrenLocaleInternalContentFilePath = 226,
  ChildrenLocaleInternalDescription = 227,
  ChildrenLocaleInternalFieldOwners = 228,
  ChildrenLocaleInternalIgnoreType = 229,
  ChildrenLocaleInternalMediaType = 230,
  ChildrenLocaleInternalOwner = 231,
  ChildrenLocaleInternalType = 232,
  ChildrenLocaleLanguage = 233,
  ChildrenLocaleNs = 234,
  ChildrenLocaleParentChildren = 235,
  ChildrenLocaleParentChildrenChildren = 236,
  ChildrenLocaleParentChildrenId = 237,
  ChildrenLocaleParentId = 238,
  ChildrenLocaleParentInternalContent = 239,
  ChildrenLocaleParentInternalContentDigest = 240,
  ChildrenLocaleParentInternalContentFilePath = 241,
  ChildrenLocaleParentInternalDescription = 242,
  ChildrenLocaleParentInternalFieldOwners = 243,
  ChildrenLocaleParentInternalIgnoreType = 244,
  ChildrenLocaleParentInternalMediaType = 245,
  ChildrenLocaleParentInternalOwner = 246,
  ChildrenLocaleParentInternalType = 247,
  ChildrenLocaleParentParentChildren = 248,
  ChildrenLocaleParentParentId = 249,
  ChildrenChildren = 250,
  ChildrenChildrenChildren = 251,
  ChildrenChildrenChildrenChildren = 252,
  ChildrenChildrenChildrenId = 253,
  ChildrenChildrenId = 254,
  ChildrenChildrenInternalContent = 255,
  ChildrenChildrenInternalContentDigest = 256,
  ChildrenChildrenInternalContentFilePath = 257,
  ChildrenChildrenInternalDescription = 258,
  ChildrenChildrenInternalFieldOwners = 259,
  ChildrenChildrenInternalIgnoreType = 260,
  ChildrenChildrenInternalMediaType = 261,
  ChildrenChildrenInternalOwner = 262,
  ChildrenChildrenInternalType = 263,
  ChildrenChildrenParentChildren = 264,
  ChildrenChildrenParentId = 265,
  ChildrenId = 266,
  ChildrenInternalContent = 267,
  ChildrenInternalContentDigest = 268,
  ChildrenInternalContentFilePath = 269,
  ChildrenInternalDescription = 270,
  ChildrenInternalFieldOwners = 271,
  ChildrenInternalIgnoreType = 272,
  ChildrenInternalMediaType = 273,
  ChildrenInternalOwner = 274,
  ChildrenInternalType = 275,
  ChildrenParentChildren = 276,
  ChildrenParentChildrenChildren = 277,
  ChildrenParentChildrenId = 278,
  ChildrenParentId = 279,
  ChildrenParentInternalContent = 280,
  ChildrenParentInternalContentDigest = 281,
  ChildrenParentInternalContentFilePath = 282,
  ChildrenParentInternalDescription = 283,
  ChildrenParentInternalFieldOwners = 284,
  ChildrenParentInternalIgnoreType = 285,
  ChildrenParentInternalMediaType = 286,
  ChildrenParentInternalOwner = 287,
  ChildrenParentInternalType = 288,
  ChildrenParentParentChildren = 289,
  ChildrenParentParentId = 290,
  Ctime = 291,
  CtimeMs = 292,
  Dev = 293,
  Dir = 294,
  Ext = 295,
  Extension = 296,
  Gid = 297,
  Id = 298,
  Ino = 299,
  InternalContent = 300,
  InternalContentDigest = 301,
  InternalContentFilePath = 302,
  InternalDescription = 303,
  InternalFieldOwners = 304,
  InternalIgnoreType = 305,
  InternalMediaType = 306,
  InternalOwner = 307,
  InternalType = 308,
  Mode = 309,
  ModifiedTime = 310,
  Mtime = 311,
  MtimeMs = 312,
  Name = 313,
  Nlink = 314,
  ParentChildren = 315,
  ParentChildrenChildren = 316,
  ParentChildrenChildrenChildren = 317,
  ParentChildrenChildrenId = 318,
  ParentChildrenId = 319,
  ParentChildrenInternalContent = 320,
  ParentChildrenInternalContentDigest = 321,
  ParentChildrenInternalContentFilePath = 322,
  ParentChildrenInternalDescription = 323,
  ParentChildrenInternalFieldOwners = 324,
  ParentChildrenInternalIgnoreType = 325,
  ParentChildrenInternalMediaType = 326,
  ParentChildrenInternalOwner = 327,
  ParentChildrenInternalType = 328,
  ParentChildrenParentChildren = 329,
  ParentChildrenParentId = 330,
  ParentId = 331,
  ParentInternalContent = 332,
  ParentInternalContentDigest = 333,
  ParentInternalContentFilePath = 334,
  ParentInternalDescription = 335,
  ParentInternalFieldOwners = 336,
  ParentInternalIgnoreType = 337,
  ParentInternalMediaType = 338,
  ParentInternalOwner = 339,
  ParentInternalType = 340,
  ParentParentChildren = 341,
  ParentParentChildrenChildren = 342,
  ParentParentChildrenId = 343,
  ParentParentId = 344,
  ParentParentInternalContent = 345,
  ParentParentInternalContentDigest = 346,
  ParentParentInternalContentFilePath = 347,
  ParentParentInternalDescription = 348,
  ParentParentInternalFieldOwners = 349,
  ParentParentInternalIgnoreType = 350,
  ParentParentInternalMediaType = 351,
  ParentParentInternalOwner = 352,
  ParentParentInternalType = 353,
  ParentParentParentChildren = 354,
  ParentParentParentId = 355,
  PrettySize = 356,
  PublicUrl = 357,
  Rdev = 358,
  RelativeDirectory = 359,
  RelativePath = 360,
  Root = 361,
  Size = 362,
  SourceInstanceName = 363,
  Uid = 364
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  FixedAspectRatio = 42,
  FixedBase64 = 43,
  FixedHeight = 44,
  FixedOriginalName = 45,
  FixedSrc = 46,
  FixedSrcSet = 47,
  FixedSrcSetWebp = 48,
  FixedSrcWebp = 49,
  FixedTracedSvg = 50,
  FixedWidth = 51,
  FluidAspectRatio = 52,
  FluidBase64 = 53,
  FluidOriginalImg = 54,
  FluidOriginalName = 55,
  FluidPresentationHeight = 56,
  FluidPresentationWidth = 57,
  FluidSizes = 58,
  FluidSrc = 59,
  FluidSrcSet = 60,
  FluidSrcSetWebp = 61,
  FluidSrcWebp = 62,
  FluidTracedSvg = 63,
  GatsbyImageData = 64,
  Id = 65,
  InternalContent = 66,
  InternalContentDigest = 67,
  InternalContentFilePath = 68,
  InternalDescription = 69,
  InternalFieldOwners = 70,
  InternalIgnoreType = 71,
  InternalMediaType = 72,
  InternalOwner = 73,
  InternalType = 74,
  OriginalHeight = 75,
  OriginalSrc = 76,
  OriginalWidth = 77,
  ParentChildren = 78,
  ParentChildrenChildren = 79,
  ParentChildrenChildrenChildren = 80,
  ParentChildrenChildrenId = 81,
  ParentChildrenId = 82,
  ParentChildrenInternalContent = 83,
  ParentChildrenInternalContentDigest = 84,
  ParentChildrenInternalContentFilePath = 85,
  ParentChildrenInternalDescription = 86,
  ParentChildrenInternalFieldOwners = 87,
  ParentChildrenInternalIgnoreType = 88,
  ParentChildrenInternalMediaType = 89,
  ParentChildrenInternalOwner = 90,
  ParentChildrenInternalType = 91,
  ParentChildrenParentChildren = 92,
  ParentChildrenParentId = 93,
  ParentId = 94,
  ParentInternalContent = 95,
  ParentInternalContentDigest = 96,
  ParentInternalContentFilePath = 97,
  ParentInternalDescription = 98,
  ParentInternalFieldOwners = 99,
  ParentInternalIgnoreType = 100,
  ParentInternalMediaType = 101,
  ParentInternalOwner = 102,
  ParentInternalType = 103,
  ParentParentChildren = 104,
  ParentParentChildrenChildren = 105,
  ParentParentChildrenId = 106,
  ParentParentId = 107,
  ParentParentInternalContent = 108,
  ParentParentInternalContentDigest = 109,
  ParentParentInternalContentFilePath = 110,
  ParentParentInternalDescription = 111,
  ParentParentInternalFieldOwners = 112,
  ParentParentInternalIgnoreType = 113,
  ParentParentInternalMediaType = 114,
  ParentParentInternalOwner = 115,
  ParentParentInternalType = 116,
  ParentParentParentChildren = 117,
  ParentParentParentId = 118,
  ResizeAspectRatio = 119,
  ResizeHeight = 120,
  ResizeOriginalName = 121,
  ResizeSrc = 122,
  ResizeTracedSvg = 123,
  ResizeWidth = 124
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
  contentFilePath: Maybe<Scalars['String']>;
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
  contentFilePath: InputMaybe<StringQueryOperatorInput>;
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  Data = 42,
  FileAbsolutePath = 43,
  Id = 44,
  InternalContent = 45,
  InternalContentDigest = 46,
  InternalContentFilePath = 47,
  InternalDescription = 48,
  InternalFieldOwners = 49,
  InternalIgnoreType = 50,
  InternalMediaType = 51,
  InternalOwner = 52,
  InternalType = 53,
  Language = 54,
  Ns = 55,
  ParentChildren = 56,
  ParentChildrenChildren = 57,
  ParentChildrenChildrenChildren = 58,
  ParentChildrenChildrenId = 59,
  ParentChildrenId = 60,
  ParentChildrenInternalContent = 61,
  ParentChildrenInternalContentDigest = 62,
  ParentChildrenInternalContentFilePath = 63,
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
  ParentInternalContentFilePath = 75,
  ParentInternalDescription = 76,
  ParentInternalFieldOwners = 77,
  ParentInternalIgnoreType = 78,
  ParentInternalMediaType = 79,
  ParentInternalOwner = 80,
  ParentInternalType = 81,
  ParentParentChildren = 82,
  ParentParentChildrenChildren = 83,
  ParentParentChildrenId = 84,
  ParentParentId = 85,
  ParentParentInternalContent = 86,
  ParentParentInternalContentDigest = 87,
  ParentParentInternalContentFilePath = 88,
  ParentParentInternalDescription = 89,
  ParentParentInternalFieldOwners = 90,
  ParentParentInternalIgnoreType = 91,
  ParentParentInternalMediaType = 92,
  ParentParentInternalOwner = 93,
  ParentParentInternalType = 94,
  ParentParentParentChildren = 95,
  ParentParentParentId = 96
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
  ChildrenChildrenInternalContentFilePath = 9,
  ChildrenChildrenInternalDescription = 10,
  ChildrenChildrenInternalFieldOwners = 11,
  ChildrenChildrenInternalIgnoreType = 12,
  ChildrenChildrenInternalMediaType = 13,
  ChildrenChildrenInternalOwner = 14,
  ChildrenChildrenInternalType = 15,
  ChildrenChildrenParentChildren = 16,
  ChildrenChildrenParentId = 17,
  ChildrenId = 18,
  ChildrenInternalContent = 19,
  ChildrenInternalContentDigest = 20,
  ChildrenInternalContentFilePath = 21,
  ChildrenInternalDescription = 22,
  ChildrenInternalFieldOwners = 23,
  ChildrenInternalIgnoreType = 24,
  ChildrenInternalMediaType = 25,
  ChildrenInternalOwner = 26,
  ChildrenInternalType = 27,
  ChildrenParentChildren = 28,
  ChildrenParentChildrenChildren = 29,
  ChildrenParentChildrenId = 30,
  ChildrenParentId = 31,
  ChildrenParentInternalContent = 32,
  ChildrenParentInternalContentDigest = 33,
  ChildrenParentInternalContentFilePath = 34,
  ChildrenParentInternalDescription = 35,
  ChildrenParentInternalFieldOwners = 36,
  ChildrenParentInternalIgnoreType = 37,
  ChildrenParentInternalMediaType = 38,
  ChildrenParentInternalOwner = 39,
  ChildrenParentInternalType = 40,
  ChildrenParentParentChildren = 41,
  ChildrenParentParentId = 42,
  Excerpt = 43,
  FileAbsolutePath = 44,
  FrontmatterTitle = 45,
  Headings = 46,
  HeadingsDepth = 47,
  HeadingsValue = 48,
  Html = 49,
  Id = 50,
  InternalContent = 51,
  InternalContentDigest = 52,
  InternalContentFilePath = 53,
  InternalDescription = 54,
  InternalFieldOwners = 55,
  InternalIgnoreType = 56,
  InternalMediaType = 57,
  InternalOwner = 58,
  InternalType = 59,
  MdxAst = 60,
  ParentChildren = 61,
  ParentChildrenChildren = 62,
  ParentChildrenChildrenChildren = 63,
  ParentChildrenChildrenId = 64,
  ParentChildrenId = 65,
  ParentChildrenInternalContent = 66,
  ParentChildrenInternalContentDigest = 67,
  ParentChildrenInternalContentFilePath = 68,
  ParentChildrenInternalDescription = 69,
  ParentChildrenInternalFieldOwners = 70,
  ParentChildrenInternalIgnoreType = 71,
  ParentChildrenInternalMediaType = 72,
  ParentChildrenInternalOwner = 73,
  ParentChildrenInternalType = 74,
  ParentChildrenParentChildren = 75,
  ParentChildrenParentId = 76,
  ParentId = 77,
  ParentInternalContent = 78,
  ParentInternalContentDigest = 79,
  ParentInternalContentFilePath = 80,
  ParentInternalDescription = 81,
  ParentInternalFieldOwners = 82,
  ParentInternalIgnoreType = 83,
  ParentInternalMediaType = 84,
  ParentInternalOwner = 85,
  ParentInternalType = 86,
  ParentParentChildren = 87,
  ParentParentChildrenChildren = 88,
  ParentParentChildrenId = 89,
  ParentParentId = 90,
  ParentParentInternalContent = 91,
  ParentParentInternalContentDigest = 92,
  ParentParentInternalContentFilePath = 93,
  ParentParentInternalDescription = 94,
  ParentParentInternalFieldOwners = 95,
  ParentParentInternalIgnoreType = 96,
  ParentParentInternalMediaType = 97,
  ParentParentInternalOwner = 98,
  ParentParentInternalType = 99,
  ParentParentParentChildren = 100,
  ParentParentParentId = 101,
  RawBody = 102,
  Slug = 103,
  TableOfContents = 104,
  TimeToRead = 105,
  WordCountParagraphs = 106,
  WordCountSentences = 107,
  WordCountWords = 108
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
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
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
  jsxImportSource: InputMaybe<StringQueryOperatorInput>;
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
  jsxImportSource: Maybe<Scalars['String']>;
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
  ChildrenChildrenInternalContentFilePath = 9,
  ChildrenChildrenInternalDescription = 10,
  ChildrenChildrenInternalFieldOwners = 11,
  ChildrenChildrenInternalIgnoreType = 12,
  ChildrenChildrenInternalMediaType = 13,
  ChildrenChildrenInternalOwner = 14,
  ChildrenChildrenInternalType = 15,
  ChildrenChildrenParentChildren = 16,
  ChildrenChildrenParentId = 17,
  ChildrenId = 18,
  ChildrenInternalContent = 19,
  ChildrenInternalContentDigest = 20,
  ChildrenInternalContentFilePath = 21,
  ChildrenInternalDescription = 22,
  ChildrenInternalFieldOwners = 23,
  ChildrenInternalIgnoreType = 24,
  ChildrenInternalMediaType = 25,
  ChildrenInternalOwner = 26,
  ChildrenInternalType = 27,
  ChildrenParentChildren = 28,
  ChildrenParentChildrenChildren = 29,
  ChildrenParentChildrenId = 30,
  ChildrenParentId = 31,
  ChildrenParentInternalContent = 32,
  ChildrenParentInternalContentDigest = 33,
  ChildrenParentInternalContentFilePath = 34,
  ChildrenParentInternalDescription = 35,
  ChildrenParentInternalFieldOwners = 36,
  ChildrenParentInternalIgnoreType = 37,
  ChildrenParentInternalMediaType = 38,
  ChildrenParentInternalOwner = 39,
  ChildrenParentInternalType = 40,
  ChildrenParentParentChildren = 41,
  ChildrenParentParentId = 42,
  Id = 43,
  InternalContent = 44,
  InternalContentDigest = 45,
  InternalContentFilePath = 46,
  InternalDescription = 47,
  InternalFieldOwners = 48,
  InternalIgnoreType = 49,
  InternalMediaType = 50,
  InternalOwner = 51,
  InternalType = 52,
  ParentChildren = 53,
  ParentChildrenChildren = 54,
  ParentChildrenChildrenChildren = 55,
  ParentChildrenChildrenId = 56,
  ParentChildrenId = 57,
  ParentChildrenInternalContent = 58,
  ParentChildrenInternalContentDigest = 59,
  ParentChildrenInternalContentFilePath = 60,
  ParentChildrenInternalDescription = 61,
  ParentChildrenInternalFieldOwners = 62,
  ParentChildrenInternalIgnoreType = 63,
  ParentChildrenInternalMediaType = 64,
  ParentChildrenInternalOwner = 65,
  ParentChildrenInternalType = 66,
  ParentChildrenParentChildren = 67,
  ParentChildrenParentId = 68,
  ParentId = 69,
  ParentInternalContent = 70,
  ParentInternalContentDigest = 71,
  ParentInternalContentFilePath = 72,
  ParentInternalDescription = 73,
  ParentInternalFieldOwners = 74,
  ParentInternalIgnoreType = 75,
  ParentInternalMediaType = 76,
  ParentInternalOwner = 77,
  ParentInternalType = 78,
  ParentParentChildren = 79,
  ParentParentChildrenChildren = 80,
  ParentParentChildrenId = 81,
  ParentParentId = 82,
  ParentParentInternalContent = 83,
  ParentParentInternalContentDigest = 84,
  ParentParentInternalContentFilePath = 85,
  ParentParentInternalDescription = 86,
  ParentParentInternalFieldOwners = 87,
  ParentParentInternalIgnoreType = 88,
  ParentParentInternalMediaType = 89,
  ParentParentInternalOwner = 90,
  ParentParentInternalType = 91,
  ParentParentParentChildren = 92,
  ParentParentParentId = 93
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
  ChildrenChildrenInternalContentFilePath = 9,
  ChildrenChildrenInternalDescription = 10,
  ChildrenChildrenInternalFieldOwners = 11,
  ChildrenChildrenInternalIgnoreType = 12,
  ChildrenChildrenInternalMediaType = 13,
  ChildrenChildrenInternalOwner = 14,
  ChildrenChildrenInternalType = 15,
  ChildrenChildrenParentChildren = 16,
  ChildrenChildrenParentId = 17,
  ChildrenId = 18,
  ChildrenInternalContent = 19,
  ChildrenInternalContentDigest = 20,
  ChildrenInternalContentFilePath = 21,
  ChildrenInternalDescription = 22,
  ChildrenInternalFieldOwners = 23,
  ChildrenInternalIgnoreType = 24,
  ChildrenInternalMediaType = 25,
  ChildrenInternalOwner = 26,
  ChildrenInternalType = 27,
  ChildrenParentChildren = 28,
  ChildrenParentChildrenChildren = 29,
  ChildrenParentChildrenId = 30,
  ChildrenParentId = 31,
  ChildrenParentInternalContent = 32,
  ChildrenParentInternalContentDigest = 33,
  ChildrenParentInternalContentFilePath = 34,
  ChildrenParentInternalDescription = 35,
  ChildrenParentInternalFieldOwners = 36,
  ChildrenParentInternalIgnoreType = 37,
  ChildrenParentInternalMediaType = 38,
  ChildrenParentInternalOwner = 39,
  ChildrenParentInternalType = 40,
  ChildrenParentParentChildren = 41,
  ChildrenParentParentId = 42,
  GraphqlTypegen = 43,
  Host = 44,
  Id = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  JsxImportSource = 55,
  JsxRuntime = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  PathPrefix = 98,
  Polyfill = 99,
  Port = 100,
  SiteMetadataDescription = 101,
  SiteMetadataSiteUrl = 102,
  SiteMetadataTitle = 103,
  TrailingSlash = 104
}

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxImportSource: InputMaybe<StringQueryOperatorInput>;
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
  ChildrenChildrenInternalContentFilePath = 9,
  ChildrenChildrenInternalDescription = 10,
  ChildrenChildrenInternalFieldOwners = 11,
  ChildrenChildrenInternalIgnoreType = 12,
  ChildrenChildrenInternalMediaType = 13,
  ChildrenChildrenInternalOwner = 14,
  ChildrenChildrenInternalType = 15,
  ChildrenChildrenParentChildren = 16,
  ChildrenChildrenParentId = 17,
  ChildrenId = 18,
  ChildrenInternalContent = 19,
  ChildrenInternalContentDigest = 20,
  ChildrenInternalContentFilePath = 21,
  ChildrenInternalDescription = 22,
  ChildrenInternalFieldOwners = 23,
  ChildrenInternalIgnoreType = 24,
  ChildrenInternalMediaType = 25,
  ChildrenInternalOwner = 26,
  ChildrenInternalType = 27,
  ChildrenParentChildren = 28,
  ChildrenParentChildrenChildren = 29,
  ChildrenParentChildrenId = 30,
  ChildrenParentId = 31,
  ChildrenParentInternalContent = 32,
  ChildrenParentInternalContentDigest = 33,
  ChildrenParentInternalContentFilePath = 34,
  ChildrenParentInternalDescription = 35,
  ChildrenParentInternalFieldOwners = 36,
  ChildrenParentInternalIgnoreType = 37,
  ChildrenParentInternalMediaType = 38,
  ChildrenParentInternalOwner = 39,
  ChildrenParentInternalType = 40,
  ChildrenParentParentChildren = 41,
  ChildrenParentParentId = 42,
  FunctionRoute = 43,
  Id = 44,
  InternalContent = 45,
  InternalContentDigest = 46,
  InternalContentFilePath = 47,
  InternalDescription = 48,
  InternalFieldOwners = 49,
  InternalIgnoreType = 50,
  InternalMediaType = 51,
  InternalOwner = 52,
  InternalType = 53,
  MatchPath = 54,
  OriginalAbsoluteFilePath = 55,
  OriginalRelativeFilePath = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  PluginName = 98,
  RelativeCompiledFilePath = 99
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
  ChildrenChildrenInternalContentFilePath = 8,
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
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  Component = 42,
  ComponentChunkName = 43,
  Id = 44,
  InternalComponentName = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  MatchPath = 55,
  PageContext = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  Path = 98,
  PluginCreatorBrowserApIs = 99,
  PluginCreatorChildren = 100,
  PluginCreatorChildrenChildren = 101,
  PluginCreatorChildrenChildrenChildren = 102,
  PluginCreatorChildrenChildrenId = 103,
  PluginCreatorChildrenId = 104,
  PluginCreatorChildrenInternalContent = 105,
  PluginCreatorChildrenInternalContentDigest = 106,
  PluginCreatorChildrenInternalContentFilePath = 107,
  PluginCreatorChildrenInternalDescription = 108,
  PluginCreatorChildrenInternalFieldOwners = 109,
  PluginCreatorChildrenInternalIgnoreType = 110,
  PluginCreatorChildrenInternalMediaType = 111,
  PluginCreatorChildrenInternalOwner = 112,
  PluginCreatorChildrenInternalType = 113,
  PluginCreatorChildrenParentChildren = 114,
  PluginCreatorChildrenParentId = 115,
  PluginCreatorId = 116,
  PluginCreatorInternalContent = 117,
  PluginCreatorInternalContentDigest = 118,
  PluginCreatorInternalContentFilePath = 119,
  PluginCreatorInternalDescription = 120,
  PluginCreatorInternalFieldOwners = 121,
  PluginCreatorInternalIgnoreType = 122,
  PluginCreatorInternalMediaType = 123,
  PluginCreatorInternalOwner = 124,
  PluginCreatorInternalType = 125,
  PluginCreatorName = 126,
  PluginCreatorNodeApIs = 127,
  PluginCreatorPackageJson = 128,
  PluginCreatorParentChildren = 129,
  PluginCreatorParentChildrenChildren = 130,
  PluginCreatorParentChildrenId = 131,
  PluginCreatorParentId = 132,
  PluginCreatorParentInternalContent = 133,
  PluginCreatorParentInternalContentDigest = 134,
  PluginCreatorParentInternalContentFilePath = 135,
  PluginCreatorParentInternalDescription = 136,
  PluginCreatorParentInternalFieldOwners = 137,
  PluginCreatorParentInternalIgnoreType = 138,
  PluginCreatorParentInternalMediaType = 139,
  PluginCreatorParentInternalOwner = 140,
  PluginCreatorParentInternalType = 141,
  PluginCreatorParentParentChildren = 142,
  PluginCreatorParentParentId = 143,
  PluginCreatorPluginFilepath = 144,
  PluginCreatorPluginOptions = 145,
  PluginCreatorResolve = 146,
  PluginCreatorSsrApIs = 147,
  PluginCreatorVersion = 148
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
  ChildrenChildrenInternalContentFilePath = 9,
  ChildrenChildrenInternalDescription = 10,
  ChildrenChildrenInternalFieldOwners = 11,
  ChildrenChildrenInternalIgnoreType = 12,
  ChildrenChildrenInternalMediaType = 13,
  ChildrenChildrenInternalOwner = 14,
  ChildrenChildrenInternalType = 15,
  ChildrenChildrenParentChildren = 16,
  ChildrenChildrenParentId = 17,
  ChildrenId = 18,
  ChildrenInternalContent = 19,
  ChildrenInternalContentDigest = 20,
  ChildrenInternalContentFilePath = 21,
  ChildrenInternalDescription = 22,
  ChildrenInternalFieldOwners = 23,
  ChildrenInternalIgnoreType = 24,
  ChildrenInternalMediaType = 25,
  ChildrenInternalOwner = 26,
  ChildrenInternalType = 27,
  ChildrenParentChildren = 28,
  ChildrenParentChildrenChildren = 29,
  ChildrenParentChildrenId = 30,
  ChildrenParentId = 31,
  ChildrenParentInternalContent = 32,
  ChildrenParentInternalContentDigest = 33,
  ChildrenParentInternalContentFilePath = 34,
  ChildrenParentInternalDescription = 35,
  ChildrenParentInternalFieldOwners = 36,
  ChildrenParentInternalIgnoreType = 37,
  ChildrenParentInternalMediaType = 38,
  ChildrenParentInternalOwner = 39,
  ChildrenParentInternalType = 40,
  ChildrenParentParentChildren = 41,
  ChildrenParentParentId = 42,
  Id = 43,
  InternalContent = 44,
  InternalContentDigest = 45,
  InternalContentFilePath = 46,
  InternalDescription = 47,
  InternalFieldOwners = 48,
  InternalIgnoreType = 49,
  InternalMediaType = 50,
  InternalOwner = 51,
  InternalType = 52,
  Name = 53,
  NodeApIs = 54,
  PackageJson = 55,
  ParentChildren = 56,
  ParentChildrenChildren = 57,
  ParentChildrenChildrenChildren = 58,
  ParentChildrenChildrenId = 59,
  ParentChildrenId = 60,
  ParentChildrenInternalContent = 61,
  ParentChildrenInternalContentDigest = 62,
  ParentChildrenInternalContentFilePath = 63,
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
  ParentInternalContentFilePath = 75,
  ParentInternalDescription = 76,
  ParentInternalFieldOwners = 77,
  ParentInternalIgnoreType = 78,
  ParentInternalMediaType = 79,
  ParentInternalOwner = 80,
  ParentInternalType = 81,
  ParentParentChildren = 82,
  ParentParentChildrenChildren = 83,
  ParentParentChildrenId = 84,
  ParentParentId = 85,
  ParentParentInternalContent = 86,
  ParentParentInternalContentDigest = 87,
  ParentParentInternalContentFilePath = 88,
  ParentParentInternalDescription = 89,
  ParentParentInternalFieldOwners = 90,
  ParentParentInternalIgnoreType = 91,
  ParentParentInternalMediaType = 92,
  ParentParentInternalOwner = 93,
  ParentParentInternalType = 94,
  ParentParentParentChildren = 95,
  ParentParentParentId = 96,
  PluginFilepath = 97,
  PluginOptions = 98,
  Resolve = 99,
  SsrApIs = 100,
  Version = 101
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
  ChildMdxChildrenInternalContentFilePath = 8,
  ChildMdxChildrenInternalDescription = 9,
  ChildMdxChildrenInternalFieldOwners = 10,
  ChildMdxChildrenInternalIgnoreType = 11,
  ChildMdxChildrenInternalMediaType = 12,
  ChildMdxChildrenInternalOwner = 13,
  ChildMdxChildrenInternalType = 14,
  ChildMdxChildrenParentChildren = 15,
  ChildMdxChildrenParentId = 16,
  ChildMdxExcerpt = 17,
  ChildMdxFileAbsolutePath = 18,
  ChildMdxFrontmatterTitle = 19,
  ChildMdxHeadings = 20,
  ChildMdxHeadingsDepth = 21,
  ChildMdxHeadingsValue = 22,
  ChildMdxHtml = 23,
  ChildMdxId = 24,
  ChildMdxInternalContent = 25,
  ChildMdxInternalContentDigest = 26,
  ChildMdxInternalContentFilePath = 27,
  ChildMdxInternalDescription = 28,
  ChildMdxInternalFieldOwners = 29,
  ChildMdxInternalIgnoreType = 30,
  ChildMdxInternalMediaType = 31,
  ChildMdxInternalOwner = 32,
  ChildMdxInternalType = 33,
  ChildMdxMdxAst = 34,
  ChildMdxParentChildren = 35,
  ChildMdxParentChildrenChildren = 36,
  ChildMdxParentChildrenId = 37,
  ChildMdxParentId = 38,
  ChildMdxParentInternalContent = 39,
  ChildMdxParentInternalContentDigest = 40,
  ChildMdxParentInternalContentFilePath = 41,
  ChildMdxParentInternalDescription = 42,
  ChildMdxParentInternalFieldOwners = 43,
  ChildMdxParentInternalIgnoreType = 44,
  ChildMdxParentInternalMediaType = 45,
  ChildMdxParentInternalOwner = 46,
  ChildMdxParentInternalType = 47,
  ChildMdxParentParentChildren = 48,
  ChildMdxParentParentId = 49,
  ChildMdxRawBody = 50,
  ChildMdxSlug = 51,
  ChildMdxTableOfContents = 52,
  ChildMdxTimeToRead = 53,
  ChildMdxWordCountParagraphs = 54,
  ChildMdxWordCountSentences = 55,
  ChildMdxWordCountWords = 56,
  Children = 57,
  ChildrenMdx = 58,
  ChildrenMdxBody = 59,
  ChildrenMdxChildren = 60,
  ChildrenMdxChildrenChildren = 61,
  ChildrenMdxChildrenChildrenChildren = 62,
  ChildrenMdxChildrenChildrenId = 63,
  ChildrenMdxChildrenId = 64,
  ChildrenMdxChildrenInternalContent = 65,
  ChildrenMdxChildrenInternalContentDigest = 66,
  ChildrenMdxChildrenInternalContentFilePath = 67,
  ChildrenMdxChildrenInternalDescription = 68,
  ChildrenMdxChildrenInternalFieldOwners = 69,
  ChildrenMdxChildrenInternalIgnoreType = 70,
  ChildrenMdxChildrenInternalMediaType = 71,
  ChildrenMdxChildrenInternalOwner = 72,
  ChildrenMdxChildrenInternalType = 73,
  ChildrenMdxChildrenParentChildren = 74,
  ChildrenMdxChildrenParentId = 75,
  ChildrenMdxExcerpt = 76,
  ChildrenMdxFileAbsolutePath = 77,
  ChildrenMdxFrontmatterTitle = 78,
  ChildrenMdxHeadings = 79,
  ChildrenMdxHeadingsDepth = 80,
  ChildrenMdxHeadingsValue = 81,
  ChildrenMdxHtml = 82,
  ChildrenMdxId = 83,
  ChildrenMdxInternalContent = 84,
  ChildrenMdxInternalContentDigest = 85,
  ChildrenMdxInternalContentFilePath = 86,
  ChildrenMdxInternalDescription = 87,
  ChildrenMdxInternalFieldOwners = 88,
  ChildrenMdxInternalIgnoreType = 89,
  ChildrenMdxInternalMediaType = 90,
  ChildrenMdxInternalOwner = 91,
  ChildrenMdxInternalType = 92,
  ChildrenMdxMdxAst = 93,
  ChildrenMdxParentChildren = 94,
  ChildrenMdxParentChildrenChildren = 95,
  ChildrenMdxParentChildrenId = 96,
  ChildrenMdxParentId = 97,
  ChildrenMdxParentInternalContent = 98,
  ChildrenMdxParentInternalContentDigest = 99,
  ChildrenMdxParentInternalContentFilePath = 100,
  ChildrenMdxParentInternalDescription = 101,
  ChildrenMdxParentInternalFieldOwners = 102,
  ChildrenMdxParentInternalIgnoreType = 103,
  ChildrenMdxParentInternalMediaType = 104,
  ChildrenMdxParentInternalOwner = 105,
  ChildrenMdxParentInternalType = 106,
  ChildrenMdxParentParentChildren = 107,
  ChildrenMdxParentParentId = 108,
  ChildrenMdxRawBody = 109,
  ChildrenMdxSlug = 110,
  ChildrenMdxTableOfContents = 111,
  ChildrenMdxTimeToRead = 112,
  ChildrenMdxWordCountParagraphs = 113,
  ChildrenMdxWordCountSentences = 114,
  ChildrenMdxWordCountWords = 115,
  ChildrenChildren = 116,
  ChildrenChildrenChildren = 117,
  ChildrenChildrenChildrenChildren = 118,
  ChildrenChildrenChildrenId = 119,
  ChildrenChildrenId = 120,
  ChildrenChildrenInternalContent = 121,
  ChildrenChildrenInternalContentDigest = 122,
  ChildrenChildrenInternalContentFilePath = 123,
  ChildrenChildrenInternalDescription = 124,
  ChildrenChildrenInternalFieldOwners = 125,
  ChildrenChildrenInternalIgnoreType = 126,
  ChildrenChildrenInternalMediaType = 127,
  ChildrenChildrenInternalOwner = 128,
  ChildrenChildrenInternalType = 129,
  ChildrenChildrenParentChildren = 130,
  ChildrenChildrenParentId = 131,
  ChildrenId = 132,
  ChildrenInternalContent = 133,
  ChildrenInternalContentDigest = 134,
  ChildrenInternalContentFilePath = 135,
  ChildrenInternalDescription = 136,
  ChildrenInternalFieldOwners = 137,
  ChildrenInternalIgnoreType = 138,
  ChildrenInternalMediaType = 139,
  ChildrenInternalOwner = 140,
  ChildrenInternalType = 141,
  ChildrenParentChildren = 142,
  ChildrenParentChildrenChildren = 143,
  ChildrenParentChildrenId = 144,
  ChildrenParentId = 145,
  ChildrenParentInternalContent = 146,
  ChildrenParentInternalContentDigest = 147,
  ChildrenParentInternalContentFilePath = 148,
  ChildrenParentInternalDescription = 149,
  ChildrenParentInternalFieldOwners = 150,
  ChildrenParentInternalIgnoreType = 151,
  ChildrenParentInternalMediaType = 152,
  ChildrenParentInternalOwner = 153,
  ChildrenParentInternalType = 154,
  ChildrenParentParentChildren = 155,
  ChildrenParentParentId = 156,
  Content = 157,
  Id = 158,
  InternalContent = 159,
  InternalContentDigest = 160,
  InternalContentFilePath = 161,
  InternalDescription = 162,
  InternalFieldOwners = 163,
  InternalIgnoreType = 164,
  InternalMediaType = 165,
  InternalOwner = 166,
  InternalType = 167,
  ParentChildren = 168,
  ParentChildrenChildren = 169,
  ParentChildrenChildrenChildren = 170,
  ParentChildrenChildrenId = 171,
  ParentChildrenId = 172,
  ParentChildrenInternalContent = 173,
  ParentChildrenInternalContentDigest = 174,
  ParentChildrenInternalContentFilePath = 175,
  ParentChildrenInternalDescription = 176,
  ParentChildrenInternalFieldOwners = 177,
  ParentChildrenInternalIgnoreType = 178,
  ParentChildrenInternalMediaType = 179,
  ParentChildrenInternalOwner = 180,
  ParentChildrenInternalType = 181,
  ParentChildrenParentChildren = 182,
  ParentChildrenParentId = 183,
  ParentId = 184,
  ParentInternalContent = 185,
  ParentInternalContentDigest = 186,
  ParentInternalContentFilePath = 187,
  ParentInternalDescription = 188,
  ParentInternalFieldOwners = 189,
  ParentInternalIgnoreType = 190,
  ParentInternalMediaType = 191,
  ParentInternalOwner = 192,
  ParentInternalType = 193,
  ParentParentChildren = 194,
  ParentParentChildrenChildren = 195,
  ParentParentChildrenId = 196,
  ParentParentId = 197,
  ParentParentInternalContent = 198,
  ParentParentInternalContentDigest = 199,
  ParentParentInternalContentFilePath = 200,
  ParentParentInternalDescription = 201,
  ParentParentInternalFieldOwners = 202,
  ParentParentInternalIgnoreType = 203,
  ParentParentInternalMediaType = 204,
  ParentParentInternalOwner = 205,
  ParentParentInternalType = 206,
  ParentParentParentChildren = 207,
  ParentParentParentId = 208,
  SysType = 209
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
  ChildMdxChildrenInternalContentFilePath = 8,
  ChildMdxChildrenInternalDescription = 9,
  ChildMdxChildrenInternalFieldOwners = 10,
  ChildMdxChildrenInternalIgnoreType = 11,
  ChildMdxChildrenInternalMediaType = 12,
  ChildMdxChildrenInternalOwner = 13,
  ChildMdxChildrenInternalType = 14,
  ChildMdxChildrenParentChildren = 15,
  ChildMdxChildrenParentId = 16,
  ChildMdxExcerpt = 17,
  ChildMdxFileAbsolutePath = 18,
  ChildMdxFrontmatterTitle = 19,
  ChildMdxHeadings = 20,
  ChildMdxHeadingsDepth = 21,
  ChildMdxHeadingsValue = 22,
  ChildMdxHtml = 23,
  ChildMdxId = 24,
  ChildMdxInternalContent = 25,
  ChildMdxInternalContentDigest = 26,
  ChildMdxInternalContentFilePath = 27,
  ChildMdxInternalDescription = 28,
  ChildMdxInternalFieldOwners = 29,
  ChildMdxInternalIgnoreType = 30,
  ChildMdxInternalMediaType = 31,
  ChildMdxInternalOwner = 32,
  ChildMdxInternalType = 33,
  ChildMdxMdxAst = 34,
  ChildMdxParentChildren = 35,
  ChildMdxParentChildrenChildren = 36,
  ChildMdxParentChildrenId = 37,
  ChildMdxParentId = 38,
  ChildMdxParentInternalContent = 39,
  ChildMdxParentInternalContentDigest = 40,
  ChildMdxParentInternalContentFilePath = 41,
  ChildMdxParentInternalDescription = 42,
  ChildMdxParentInternalFieldOwners = 43,
  ChildMdxParentInternalIgnoreType = 44,
  ChildMdxParentInternalMediaType = 45,
  ChildMdxParentInternalOwner = 46,
  ChildMdxParentInternalType = 47,
  ChildMdxParentParentChildren = 48,
  ChildMdxParentParentId = 49,
  ChildMdxRawBody = 50,
  ChildMdxSlug = 51,
  ChildMdxTableOfContents = 52,
  ChildMdxTimeToRead = 53,
  ChildMdxWordCountParagraphs = 54,
  ChildMdxWordCountSentences = 55,
  ChildMdxWordCountWords = 56,
  Children = 57,
  ChildrenMdx = 58,
  ChildrenMdxBody = 59,
  ChildrenMdxChildren = 60,
  ChildrenMdxChildrenChildren = 61,
  ChildrenMdxChildrenChildrenChildren = 62,
  ChildrenMdxChildrenChildrenId = 63,
  ChildrenMdxChildrenId = 64,
  ChildrenMdxChildrenInternalContent = 65,
  ChildrenMdxChildrenInternalContentDigest = 66,
  ChildrenMdxChildrenInternalContentFilePath = 67,
  ChildrenMdxChildrenInternalDescription = 68,
  ChildrenMdxChildrenInternalFieldOwners = 69,
  ChildrenMdxChildrenInternalIgnoreType = 70,
  ChildrenMdxChildrenInternalMediaType = 71,
  ChildrenMdxChildrenInternalOwner = 72,
  ChildrenMdxChildrenInternalType = 73,
  ChildrenMdxChildrenParentChildren = 74,
  ChildrenMdxChildrenParentId = 75,
  ChildrenMdxExcerpt = 76,
  ChildrenMdxFileAbsolutePath = 77,
  ChildrenMdxFrontmatterTitle = 78,
  ChildrenMdxHeadings = 79,
  ChildrenMdxHeadingsDepth = 80,
  ChildrenMdxHeadingsValue = 81,
  ChildrenMdxHtml = 82,
  ChildrenMdxId = 83,
  ChildrenMdxInternalContent = 84,
  ChildrenMdxInternalContentDigest = 85,
  ChildrenMdxInternalContentFilePath = 86,
  ChildrenMdxInternalDescription = 87,
  ChildrenMdxInternalFieldOwners = 88,
  ChildrenMdxInternalIgnoreType = 89,
  ChildrenMdxInternalMediaType = 90,
  ChildrenMdxInternalOwner = 91,
  ChildrenMdxInternalType = 92,
  ChildrenMdxMdxAst = 93,
  ChildrenMdxParentChildren = 94,
  ChildrenMdxParentChildrenChildren = 95,
  ChildrenMdxParentChildrenId = 96,
  ChildrenMdxParentId = 97,
  ChildrenMdxParentInternalContent = 98,
  ChildrenMdxParentInternalContentDigest = 99,
  ChildrenMdxParentInternalContentFilePath = 100,
  ChildrenMdxParentInternalDescription = 101,
  ChildrenMdxParentInternalFieldOwners = 102,
  ChildrenMdxParentInternalIgnoreType = 103,
  ChildrenMdxParentInternalMediaType = 104,
  ChildrenMdxParentInternalOwner = 105,
  ChildrenMdxParentInternalType = 106,
  ChildrenMdxParentParentChildren = 107,
  ChildrenMdxParentParentId = 108,
  ChildrenMdxRawBody = 109,
  ChildrenMdxSlug = 110,
  ChildrenMdxTableOfContents = 111,
  ChildrenMdxTimeToRead = 112,
  ChildrenMdxWordCountParagraphs = 113,
  ChildrenMdxWordCountSentences = 114,
  ChildrenMdxWordCountWords = 115,
  ChildrenChildren = 116,
  ChildrenChildrenChildren = 117,
  ChildrenChildrenChildrenChildren = 118,
  ChildrenChildrenChildrenId = 119,
  ChildrenChildrenId = 120,
  ChildrenChildrenInternalContent = 121,
  ChildrenChildrenInternalContentDigest = 122,
  ChildrenChildrenInternalContentFilePath = 123,
  ChildrenChildrenInternalDescription = 124,
  ChildrenChildrenInternalFieldOwners = 125,
  ChildrenChildrenInternalIgnoreType = 126,
  ChildrenChildrenInternalMediaType = 127,
  ChildrenChildrenInternalOwner = 128,
  ChildrenChildrenInternalType = 129,
  ChildrenChildrenParentChildren = 130,
  ChildrenChildrenParentId = 131,
  ChildrenId = 132,
  ChildrenInternalContent = 133,
  ChildrenInternalContentDigest = 134,
  ChildrenInternalContentFilePath = 135,
  ChildrenInternalDescription = 136,
  ChildrenInternalFieldOwners = 137,
  ChildrenInternalIgnoreType = 138,
  ChildrenInternalMediaType = 139,
  ChildrenInternalOwner = 140,
  ChildrenInternalType = 141,
  ChildrenParentChildren = 142,
  ChildrenParentChildrenChildren = 143,
  ChildrenParentChildrenId = 144,
  ChildrenParentId = 145,
  ChildrenParentInternalContent = 146,
  ChildrenParentInternalContentDigest = 147,
  ChildrenParentInternalContentFilePath = 148,
  ChildrenParentInternalDescription = 149,
  ChildrenParentInternalFieldOwners = 150,
  ChildrenParentInternalIgnoreType = 151,
  ChildrenParentInternalMediaType = 152,
  ChildrenParentInternalOwner = 153,
  ChildrenParentInternalType = 154,
  ChildrenParentParentChildren = 155,
  ChildrenParentParentId = 156,
  Id = 157,
  InternalContent = 158,
  InternalContentDigest = 159,
  InternalContentFilePath = 160,
  InternalDescription = 161,
  InternalFieldOwners = 162,
  InternalIgnoreType = 163,
  InternalMediaType = 164,
  InternalOwner = 165,
  InternalType = 166,
  ParentChildren = 167,
  ParentChildrenChildren = 168,
  ParentChildrenChildrenChildren = 169,
  ParentChildrenChildrenId = 170,
  ParentChildrenId = 171,
  ParentChildrenInternalContent = 172,
  ParentChildrenInternalContentDigest = 173,
  ParentChildrenInternalContentFilePath = 174,
  ParentChildrenInternalDescription = 175,
  ParentChildrenInternalFieldOwners = 176,
  ParentChildrenInternalIgnoreType = 177,
  ParentChildrenInternalMediaType = 178,
  ParentChildrenInternalOwner = 179,
  ParentChildrenInternalType = 180,
  ParentChildrenParentChildren = 181,
  ParentChildrenParentId = 182,
  ParentId = 183,
  ParentInternalContent = 184,
  ParentInternalContentDigest = 185,
  ParentInternalContentFilePath = 186,
  ParentInternalDescription = 187,
  ParentInternalFieldOwners = 188,
  ParentInternalIgnoreType = 189,
  ParentInternalMediaType = 190,
  ParentInternalOwner = 191,
  ParentInternalType = 192,
  ParentParentChildren = 193,
  ParentParentChildrenChildren = 194,
  ParentParentChildrenId = 195,
  ParentParentId = 196,
  ParentParentInternalContent = 197,
  ParentParentInternalContentDigest = 198,
  ParentParentInternalContentFilePath = 199,
  ParentParentInternalDescription = 200,
  ParentParentInternalFieldOwners = 201,
  ParentParentInternalIgnoreType = 202,
  ParentParentInternalMediaType = 203,
  ParentParentInternalOwner = 204,
  ParentParentInternalType = 205,
  ParentParentParentChildren = 206,
  ParentParentParentId = 207,
  Svg = 208,
  SysType = 209
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
  ChildMdxChildrenInternalContentFilePath = 8,
  ChildMdxChildrenInternalDescription = 9,
  ChildMdxChildrenInternalFieldOwners = 10,
  ChildMdxChildrenInternalIgnoreType = 11,
  ChildMdxChildrenInternalMediaType = 12,
  ChildMdxChildrenInternalOwner = 13,
  ChildMdxChildrenInternalType = 14,
  ChildMdxChildrenParentChildren = 15,
  ChildMdxChildrenParentId = 16,
  ChildMdxExcerpt = 17,
  ChildMdxFileAbsolutePath = 18,
  ChildMdxFrontmatterTitle = 19,
  ChildMdxHeadings = 20,
  ChildMdxHeadingsDepth = 21,
  ChildMdxHeadingsValue = 22,
  ChildMdxHtml = 23,
  ChildMdxId = 24,
  ChildMdxInternalContent = 25,
  ChildMdxInternalContentDigest = 26,
  ChildMdxInternalContentFilePath = 27,
  ChildMdxInternalDescription = 28,
  ChildMdxInternalFieldOwners = 29,
  ChildMdxInternalIgnoreType = 30,
  ChildMdxInternalMediaType = 31,
  ChildMdxInternalOwner = 32,
  ChildMdxInternalType = 33,
  ChildMdxMdxAst = 34,
  ChildMdxParentChildren = 35,
  ChildMdxParentChildrenChildren = 36,
  ChildMdxParentChildrenId = 37,
  ChildMdxParentId = 38,
  ChildMdxParentInternalContent = 39,
  ChildMdxParentInternalContentDigest = 40,
  ChildMdxParentInternalContentFilePath = 41,
  ChildMdxParentInternalDescription = 42,
  ChildMdxParentInternalFieldOwners = 43,
  ChildMdxParentInternalIgnoreType = 44,
  ChildMdxParentInternalMediaType = 45,
  ChildMdxParentInternalOwner = 46,
  ChildMdxParentInternalType = 47,
  ChildMdxParentParentChildren = 48,
  ChildMdxParentParentId = 49,
  ChildMdxRawBody = 50,
  ChildMdxSlug = 51,
  ChildMdxTableOfContents = 52,
  ChildMdxTimeToRead = 53,
  ChildMdxWordCountParagraphs = 54,
  ChildMdxWordCountSentences = 55,
  ChildMdxWordCountWords = 56,
  Children = 57,
  ChildrenMdx = 58,
  ChildrenMdxBody = 59,
  ChildrenMdxChildren = 60,
  ChildrenMdxChildrenChildren = 61,
  ChildrenMdxChildrenChildrenChildren = 62,
  ChildrenMdxChildrenChildrenId = 63,
  ChildrenMdxChildrenId = 64,
  ChildrenMdxChildrenInternalContent = 65,
  ChildrenMdxChildrenInternalContentDigest = 66,
  ChildrenMdxChildrenInternalContentFilePath = 67,
  ChildrenMdxChildrenInternalDescription = 68,
  ChildrenMdxChildrenInternalFieldOwners = 69,
  ChildrenMdxChildrenInternalIgnoreType = 70,
  ChildrenMdxChildrenInternalMediaType = 71,
  ChildrenMdxChildrenInternalOwner = 72,
  ChildrenMdxChildrenInternalType = 73,
  ChildrenMdxChildrenParentChildren = 74,
  ChildrenMdxChildrenParentId = 75,
  ChildrenMdxExcerpt = 76,
  ChildrenMdxFileAbsolutePath = 77,
  ChildrenMdxFrontmatterTitle = 78,
  ChildrenMdxHeadings = 79,
  ChildrenMdxHeadingsDepth = 80,
  ChildrenMdxHeadingsValue = 81,
  ChildrenMdxHtml = 82,
  ChildrenMdxId = 83,
  ChildrenMdxInternalContent = 84,
  ChildrenMdxInternalContentDigest = 85,
  ChildrenMdxInternalContentFilePath = 86,
  ChildrenMdxInternalDescription = 87,
  ChildrenMdxInternalFieldOwners = 88,
  ChildrenMdxInternalIgnoreType = 89,
  ChildrenMdxInternalMediaType = 90,
  ChildrenMdxInternalOwner = 91,
  ChildrenMdxInternalType = 92,
  ChildrenMdxMdxAst = 93,
  ChildrenMdxParentChildren = 94,
  ChildrenMdxParentChildrenChildren = 95,
  ChildrenMdxParentChildrenId = 96,
  ChildrenMdxParentId = 97,
  ChildrenMdxParentInternalContent = 98,
  ChildrenMdxParentInternalContentDigest = 99,
  ChildrenMdxParentInternalContentFilePath = 100,
  ChildrenMdxParentInternalDescription = 101,
  ChildrenMdxParentInternalFieldOwners = 102,
  ChildrenMdxParentInternalIgnoreType = 103,
  ChildrenMdxParentInternalMediaType = 104,
  ChildrenMdxParentInternalOwner = 105,
  ChildrenMdxParentInternalType = 106,
  ChildrenMdxParentParentChildren = 107,
  ChildrenMdxParentParentId = 108,
  ChildrenMdxRawBody = 109,
  ChildrenMdxSlug = 110,
  ChildrenMdxTableOfContents = 111,
  ChildrenMdxTimeToRead = 112,
  ChildrenMdxWordCountParagraphs = 113,
  ChildrenMdxWordCountSentences = 114,
  ChildrenMdxWordCountWords = 115,
  ChildrenChildren = 116,
  ChildrenChildrenChildren = 117,
  ChildrenChildrenChildrenChildren = 118,
  ChildrenChildrenChildrenId = 119,
  ChildrenChildrenId = 120,
  ChildrenChildrenInternalContent = 121,
  ChildrenChildrenInternalContentDigest = 122,
  ChildrenChildrenInternalContentFilePath = 123,
  ChildrenChildrenInternalDescription = 124,
  ChildrenChildrenInternalFieldOwners = 125,
  ChildrenChildrenInternalIgnoreType = 126,
  ChildrenChildrenInternalMediaType = 127,
  ChildrenChildrenInternalOwner = 128,
  ChildrenChildrenInternalType = 129,
  ChildrenChildrenParentChildren = 130,
  ChildrenChildrenParentId = 131,
  ChildrenId = 132,
  ChildrenInternalContent = 133,
  ChildrenInternalContentDigest = 134,
  ChildrenInternalContentFilePath = 135,
  ChildrenInternalDescription = 136,
  ChildrenInternalFieldOwners = 137,
  ChildrenInternalIgnoreType = 138,
  ChildrenInternalMediaType = 139,
  ChildrenInternalOwner = 140,
  ChildrenInternalType = 141,
  ChildrenParentChildren = 142,
  ChildrenParentChildrenChildren = 143,
  ChildrenParentChildrenId = 144,
  ChildrenParentId = 145,
  ChildrenParentInternalContent = 146,
  ChildrenParentInternalContentDigest = 147,
  ChildrenParentInternalContentFilePath = 148,
  ChildrenParentInternalDescription = 149,
  ChildrenParentInternalFieldOwners = 150,
  ChildrenParentInternalIgnoreType = 151,
  ChildrenParentInternalMediaType = 152,
  ChildrenParentInternalOwner = 153,
  ChildrenParentInternalType = 154,
  ChildrenParentParentChildren = 155,
  ChildrenParentParentId = 156,
  Detail = 157,
  Id = 158,
  InternalContent = 159,
  InternalContentDigest = 160,
  InternalContentFilePath = 161,
  InternalDescription = 162,
  InternalFieldOwners = 163,
  InternalIgnoreType = 164,
  InternalMediaType = 165,
  InternalOwner = 166,
  InternalType = 167,
  ParentChildren = 168,
  ParentChildrenChildren = 169,
  ParentChildrenChildrenChildren = 170,
  ParentChildrenChildrenId = 171,
  ParentChildrenId = 172,
  ParentChildrenInternalContent = 173,
  ParentChildrenInternalContentDigest = 174,
  ParentChildrenInternalContentFilePath = 175,
  ParentChildrenInternalDescription = 176,
  ParentChildrenInternalFieldOwners = 177,
  ParentChildrenInternalIgnoreType = 178,
  ParentChildrenInternalMediaType = 179,
  ParentChildrenInternalOwner = 180,
  ParentChildrenInternalType = 181,
  ParentChildrenParentChildren = 182,
  ParentChildrenParentId = 183,
  ParentId = 184,
  ParentInternalContent = 185,
  ParentInternalContentDigest = 186,
  ParentInternalContentFilePath = 187,
  ParentInternalDescription = 188,
  ParentInternalFieldOwners = 189,
  ParentInternalIgnoreType = 190,
  ParentInternalMediaType = 191,
  ParentInternalOwner = 192,
  ParentInternalType = 193,
  ParentParentChildren = 194,
  ParentParentChildrenChildren = 195,
  ParentParentChildrenId = 196,
  ParentParentId = 197,
  ParentParentInternalContent = 198,
  ParentParentInternalContentDigest = 199,
  ParentParentInternalContentFilePath = 200,
  ParentParentInternalDescription = 201,
  ParentParentInternalFieldOwners = 202,
  ParentParentInternalIgnoreType = 203,
  ParentParentInternalMediaType = 204,
  ParentParentInternalOwner = 205,
  ParentParentInternalType = 206,
  ParentParentParentChildren = 207,
  ParentParentParentId = 208,
  SysType = 209
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
  ChildMdxChildrenInternalContentFilePath = 8,
  ChildMdxChildrenInternalDescription = 9,
  ChildMdxChildrenInternalFieldOwners = 10,
  ChildMdxChildrenInternalIgnoreType = 11,
  ChildMdxChildrenInternalMediaType = 12,
  ChildMdxChildrenInternalOwner = 13,
  ChildMdxChildrenInternalType = 14,
  ChildMdxChildrenParentChildren = 15,
  ChildMdxChildrenParentId = 16,
  ChildMdxExcerpt = 17,
  ChildMdxFileAbsolutePath = 18,
  ChildMdxFrontmatterTitle = 19,
  ChildMdxHeadings = 20,
  ChildMdxHeadingsDepth = 21,
  ChildMdxHeadingsValue = 22,
  ChildMdxHtml = 23,
  ChildMdxId = 24,
  ChildMdxInternalContent = 25,
  ChildMdxInternalContentDigest = 26,
  ChildMdxInternalContentFilePath = 27,
  ChildMdxInternalDescription = 28,
  ChildMdxInternalFieldOwners = 29,
  ChildMdxInternalIgnoreType = 30,
  ChildMdxInternalMediaType = 31,
  ChildMdxInternalOwner = 32,
  ChildMdxInternalType = 33,
  ChildMdxMdxAst = 34,
  ChildMdxParentChildren = 35,
  ChildMdxParentChildrenChildren = 36,
  ChildMdxParentChildrenId = 37,
  ChildMdxParentId = 38,
  ChildMdxParentInternalContent = 39,
  ChildMdxParentInternalContentDigest = 40,
  ChildMdxParentInternalContentFilePath = 41,
  ChildMdxParentInternalDescription = 42,
  ChildMdxParentInternalFieldOwners = 43,
  ChildMdxParentInternalIgnoreType = 44,
  ChildMdxParentInternalMediaType = 45,
  ChildMdxParentInternalOwner = 46,
  ChildMdxParentInternalType = 47,
  ChildMdxParentParentChildren = 48,
  ChildMdxParentParentId = 49,
  ChildMdxRawBody = 50,
  ChildMdxSlug = 51,
  ChildMdxTableOfContents = 52,
  ChildMdxTimeToRead = 53,
  ChildMdxWordCountParagraphs = 54,
  ChildMdxWordCountSentences = 55,
  ChildMdxWordCountWords = 56,
  Children = 57,
  ChildrenMdx = 58,
  ChildrenMdxBody = 59,
  ChildrenMdxChildren = 60,
  ChildrenMdxChildrenChildren = 61,
  ChildrenMdxChildrenChildrenChildren = 62,
  ChildrenMdxChildrenChildrenId = 63,
  ChildrenMdxChildrenId = 64,
  ChildrenMdxChildrenInternalContent = 65,
  ChildrenMdxChildrenInternalContentDigest = 66,
  ChildrenMdxChildrenInternalContentFilePath = 67,
  ChildrenMdxChildrenInternalDescription = 68,
  ChildrenMdxChildrenInternalFieldOwners = 69,
  ChildrenMdxChildrenInternalIgnoreType = 70,
  ChildrenMdxChildrenInternalMediaType = 71,
  ChildrenMdxChildrenInternalOwner = 72,
  ChildrenMdxChildrenInternalType = 73,
  ChildrenMdxChildrenParentChildren = 74,
  ChildrenMdxChildrenParentId = 75,
  ChildrenMdxExcerpt = 76,
  ChildrenMdxFileAbsolutePath = 77,
  ChildrenMdxFrontmatterTitle = 78,
  ChildrenMdxHeadings = 79,
  ChildrenMdxHeadingsDepth = 80,
  ChildrenMdxHeadingsValue = 81,
  ChildrenMdxHtml = 82,
  ChildrenMdxId = 83,
  ChildrenMdxInternalContent = 84,
  ChildrenMdxInternalContentDigest = 85,
  ChildrenMdxInternalContentFilePath = 86,
  ChildrenMdxInternalDescription = 87,
  ChildrenMdxInternalFieldOwners = 88,
  ChildrenMdxInternalIgnoreType = 89,
  ChildrenMdxInternalMediaType = 90,
  ChildrenMdxInternalOwner = 91,
  ChildrenMdxInternalType = 92,
  ChildrenMdxMdxAst = 93,
  ChildrenMdxParentChildren = 94,
  ChildrenMdxParentChildrenChildren = 95,
  ChildrenMdxParentChildrenId = 96,
  ChildrenMdxParentId = 97,
  ChildrenMdxParentInternalContent = 98,
  ChildrenMdxParentInternalContentDigest = 99,
  ChildrenMdxParentInternalContentFilePath = 100,
  ChildrenMdxParentInternalDescription = 101,
  ChildrenMdxParentInternalFieldOwners = 102,
  ChildrenMdxParentInternalIgnoreType = 103,
  ChildrenMdxParentInternalMediaType = 104,
  ChildrenMdxParentInternalOwner = 105,
  ChildrenMdxParentInternalType = 106,
  ChildrenMdxParentParentChildren = 107,
  ChildrenMdxParentParentId = 108,
  ChildrenMdxRawBody = 109,
  ChildrenMdxSlug = 110,
  ChildrenMdxTableOfContents = 111,
  ChildrenMdxTimeToRead = 112,
  ChildrenMdxWordCountParagraphs = 113,
  ChildrenMdxWordCountSentences = 114,
  ChildrenMdxWordCountWords = 115,
  ChildrenChildren = 116,
  ChildrenChildrenChildren = 117,
  ChildrenChildrenChildrenChildren = 118,
  ChildrenChildrenChildrenId = 119,
  ChildrenChildrenId = 120,
  ChildrenChildrenInternalContent = 121,
  ChildrenChildrenInternalContentDigest = 122,
  ChildrenChildrenInternalContentFilePath = 123,
  ChildrenChildrenInternalDescription = 124,
  ChildrenChildrenInternalFieldOwners = 125,
  ChildrenChildrenInternalIgnoreType = 126,
  ChildrenChildrenInternalMediaType = 127,
  ChildrenChildrenInternalOwner = 128,
  ChildrenChildrenInternalType = 129,
  ChildrenChildrenParentChildren = 130,
  ChildrenChildrenParentId = 131,
  ChildrenId = 132,
  ChildrenInternalContent = 133,
  ChildrenInternalContentDigest = 134,
  ChildrenInternalContentFilePath = 135,
  ChildrenInternalDescription = 136,
  ChildrenInternalFieldOwners = 137,
  ChildrenInternalIgnoreType = 138,
  ChildrenInternalMediaType = 139,
  ChildrenInternalOwner = 140,
  ChildrenInternalType = 141,
  ChildrenParentChildren = 142,
  ChildrenParentChildrenChildren = 143,
  ChildrenParentChildrenId = 144,
  ChildrenParentId = 145,
  ChildrenParentInternalContent = 146,
  ChildrenParentInternalContentDigest = 147,
  ChildrenParentInternalContentFilePath = 148,
  ChildrenParentInternalDescription = 149,
  ChildrenParentInternalFieldOwners = 150,
  ChildrenParentInternalIgnoreType = 151,
  ChildrenParentInternalMediaType = 152,
  ChildrenParentInternalOwner = 153,
  ChildrenParentInternalType = 154,
  ChildrenParentParentChildren = 155,
  ChildrenParentParentId = 156,
  Detail = 157,
  Id = 158,
  InternalContent = 159,
  InternalContentDigest = 160,
  InternalContentFilePath = 161,
  InternalDescription = 162,
  InternalFieldOwners = 163,
  InternalIgnoreType = 164,
  InternalMediaType = 165,
  InternalOwner = 166,
  InternalType = 167,
  ParentChildren = 168,
  ParentChildrenChildren = 169,
  ParentChildrenChildrenChildren = 170,
  ParentChildrenChildrenId = 171,
  ParentChildrenId = 172,
  ParentChildrenInternalContent = 173,
  ParentChildrenInternalContentDigest = 174,
  ParentChildrenInternalContentFilePath = 175,
  ParentChildrenInternalDescription = 176,
  ParentChildrenInternalFieldOwners = 177,
  ParentChildrenInternalIgnoreType = 178,
  ParentChildrenInternalMediaType = 179,
  ParentChildrenInternalOwner = 180,
  ParentChildrenInternalType = 181,
  ParentChildrenParentChildren = 182,
  ParentChildrenParentId = 183,
  ParentId = 184,
  ParentInternalContent = 185,
  ParentInternalContentDigest = 186,
  ParentInternalContentFilePath = 187,
  ParentInternalDescription = 188,
  ParentInternalFieldOwners = 189,
  ParentInternalIgnoreType = 190,
  ParentInternalMediaType = 191,
  ParentInternalOwner = 192,
  ParentInternalType = 193,
  ParentParentChildren = 194,
  ParentParentChildrenChildren = 195,
  ParentParentChildrenId = 196,
  ParentParentId = 197,
  ParentParentInternalContent = 198,
  ParentParentInternalContentDigest = 199,
  ParentParentInternalContentFilePath = 200,
  ParentParentInternalDescription = 201,
  ParentParentInternalFieldOwners = 202,
  ParentParentInternalIgnoreType = 203,
  ParentParentInternalMediaType = 204,
  ParentParentInternalOwner = 205,
  ParentParentInternalType = 206,
  ParentParentParentChildren = 207,
  ParentParentParentId = 208,
  SysType = 209
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

export type BlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsQuery = { allContentfulBlogPost: { edges: Array<{ node: Pick<ContentfulBlogPost, 'id' | 'slug'> }> } };

export type SearchDataQueryVariables = Exact<{ [key: string]: never; }>;


export type SearchDataQuery = { allContentfulBlogPost: { nodes: Array<Pick<ContentfulBlogPost, 'title' | 'slug' | 'excerpt'>> } };

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
        )> }
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

export type BlogPostQueryVariables = Exact<{
  id: Scalars['String'];
  language: Scalars['String'];
}>;


export type BlogPostQuery = { post: Maybe<(
    Pick<ContentfulBlogPost, 'id' | 'title' | 'slug' | 'created' | 'updated' | 'excerpt'>
    & { createdDate: ContentfulBlogPost['created'], updatedDate: ContentfulBlogPost['updated'] }
    & { content: Maybe<{ childMdx: Maybe<Pick<Mdx, 'body'>> }>, category: Maybe<Pick<ContentfulCategory, 'name'>>, tags: Maybe<Array<Maybe<(
      Pick<ContentfulTag, 'name'>
      & { blog_post: Maybe<Array<Maybe<(
        Pick<ContentfulBlogPost, 'id' | 'title' | 'slug'>
        & { createdDateTime: ContentfulBlogPost['created'] }
      )>>> }
    )>>>, thumbnail: Maybe<(
      Pick<ContentfulAsset, 'title'>
      & { file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
    )> }
  )>, links: { edges: Array<{ node: Pick<ContentfulHello, 'id' | 'node_locale' | 'name' | 'href'> }> }, icon: Maybe<(
    Pick<ContentfulAsset, 'title'>
    & { svg: Maybe<Pick<InlineSvg, 'content'>> }
  )>, locales: { edges: Array<{ node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };
