initSidebarItems({"enum":[["DuplicateError","Logging error returned by `Duplicate` drain"],["FilterLevel","Logging filtering level"],["Level","Logging level associated with a logging `Record`"]],"fn":[["discard","Discard all logging records"],["duplicate","Duplicate records to two drains"],["filter","Filter by `cond` closure"],["fuse","Panic if the subdrain returns an error."],["ignore_err","Ignore any errors returned by the subdrain"],["level_filter","Filter by log level"]],"macro":[["crit","Log critical level record"],["debug","Log debug level record"],["error","Log error level record"],["info","Log info level record"],["log","Log message of a given level"],["o","Convenience function for building `&[OwnedKeyValue]`"],["slog_crit","Log critical level record (alias)"],["slog_debug","Log debug level record (alias)"],["slog_error","Log error level record"],["slog_info","Log info level record (alias)"],["slog_log","Log message of a given level (alias)"],["slog_trace","Log trace level record (alias)"],["slog_warn","Log warning level record (alias)"],["trace","Log trace level record"],["warn","Log warning level record"]],"mod":[["ser","Serialization"]],"static":[["LOG_LEVEL_NAMES","Official capitalized logging (and logging filtering) level names"],["LOG_LEVEL_SHORT_NAMES","Official capitalized logging (and logging filtering) short level names"]],"struct":[["Discard","`Drain` discarding everything"],["Duplicate","`Drain` duplicating records into two other `Drain`s"],["Filter","`Drain` filtering records"],["Fuse","`Drain` panicking on error"],["IgnoreErr","Drain ignoring errors"],["LevelFilter","`Drain` filtering records by `Record` logging level"],["Logger","Logging handle used to execute logging statements"],["MapError","`Drain` mapping error returned by another `Drain`"],["OwnedKeyValueList","Chain of `OwnedKeyValue`-s of a `Logger` and its ancestors"],["OwnedKeyValueListIterator","Iterator over `OwnedKeyValue`-s"],["Record","One logging record"]],"trait":[["Drain","Logging drain"],["DrainExt","Convenience methods for building drains"]],"type":[["BorrowedKeyValue","Key value pair that can be part of a logging record"],["OwnedKeyValue","Key value pair that can be owned by `Logger`"]]});