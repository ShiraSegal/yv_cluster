import * as e from "express";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary"
}

export enum NarrowBasicTableRowInputState {
  DEFAULT = 'Default',
  HOVER = 'Hover',
  STATE1 = "STATE1"
}
export enum BasicTableRowPropertyVariants {
  DEFAULT = 'Default',
  VARIANT2 = 'Variant2',
}

export enum BasicTablePropertyType {
  OLD_SUGGESTIONS = 'Old Suggestions',
  NEWֹֹֹֹֹֹ_SUGGESTIONS = 'New Suggestions',
}
export enum ButtonSize {
  BIG = "big",
  SMALL = "small"
}

export enum CheckType {
  UNCHECKED = 'unchecked',
  CHECKED = 'checked'
}
export enum CheckStateType {
  ENABLED = 'enabled',
  DISABLED = 'disabled'
}

export enum DataCellType {
  TEXT = 'string',
  MORE = 'more',
  STATUS = 'status',
  CHECK = 'check',
  LINK = 'link',
  ICON = 'icon',
  ASSIGNEE = 'assignee',
  BUTTON = 'button',
  SLIDER = 'slider',
  PLACEOLDER = 'place-order',
}
export type DataCellValue<T extends DataCellType> = 
  T extends DataCellType.TEXT ? string :
  T extends DataCellType.LINK ? string | number :
  T extends DataCellType.ASSIGNEE ? string :
  T extends DataCellType.BUTTON ? string :
  T extends DataCellType.SLIDER ? number | null:
  never; 



export enum AutoClusterTabType {
  SAPIR_CLUSTERS = 'Sapir Clusters',
  MISSING_FIELD = 'Missing Field',
  APPROVAL_GROUPS = 'Approval Groups',
  CHECKLIST_ITEMS = 'Checklist Items',
  DIFFERENT_CLUSTERS = 'Different Clusters',
  ERROR_MESSAGES = 'Error Messages'
}
export enum ButtonIcon {
  FOLDER_PLUS = "fa-light fa-folder-plus",
  LAYER_PLUS = "fa-light fa-layer-plus",
  PLUS = "fa-light fa-plus",
  FILE_ARROW_DOWN = "fa-light fa-file-arrow-down",
  CHEVRON_LEFT = "fa-light fa-chevron-left"
}

export enum TextSize {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small"
}

export enum TextColor {
  BLACK = "black",
  SLATE_BLUE = "slate-blue",
  NEUTRAL_GRAY = "neutral-gray",
}

export enum TextWeight {
  BOLD = "bold",
  NORMAL = "normal"
}

export enum HeaderCellType {
  TEXT = "text",
  MORE = "more",
  HEADERSEARCH = "header-search",
  PLACEOLDER = "place-order",
  ORDER = "order",
  CHECK = "check",
  ORDERDOWN = "order down"
}

export enum CardIcons {
  HOURGLASS_CLOCK = "fa-solid fa-hourglass-clock",
  CLOCK_FIVE = "fa-solid fa-clock-five",
  EDIT = "fa-solid fa-pen-to-square",
  CIRCLE_CHECK = "fa-solid fa-circle-check",
  HOME = "fa-light fa-house"
}
export enum ToastNotificationIcons {
  ERROR = "fa-solid fa-circle-xmark",
  SUCCESS = "fa-solid fa-circle-check",
}
export enum BadgeType {
  TODO = "To-do",
  DONE = "Done"
}

export enum SliderNavigationTabType {
  VARIANT3 = "variant3",
  ACTIVE = "active"
}
export enum SliderNavigationTabTextType {
  HOME = "Home",
  LOGOUT = "Logout",
  AUTOCLUSRET = "Auto Cluster",
  REPORT = "Report",
  NEWCLUSTER = "New Cluster",

}

export enum State {
  DEFAULT = "default",
  FOCUSED = "focused",
  POPULATED = "populated",
  DISABLED = "disabled",
  ERROR = "error"
}
export enum IconButtonLargeType {
  DEFAULT = "default",
  HOVER = "hover",
}
export enum StatusActiveOrNotActive {
  ACTIVE = "active",
  NOT_ACTIVE = "not-active"
}
