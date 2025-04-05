cmake_minimum_required(VERSION 3.10)
project(StudyWebRTC LANGUAGES CXX)

# 设置 C++ 标准
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# 包含目录
# include_directories(${CMAKE_SOURCE_DIR}/src)
include_directories(${CMAKE_SOURCE_DIR}/3rd/webRTC/include)
include_directories(${CMAKE_SOURCE_DIR}/3rd/webRTC/include/api)
include_directories(${CMAKE_SOURCE_DIR}/3rd/webRTC/include/third_party)

# 添加可执行文件
add_executable(${PROJECT_NAME} testTaskQueue.cpp)

set(LTC_LIB_DIR ${CMAKE_SOURCE_DIR}/3rd/webRTC/lib)
set(WEBRTC_LIB_NAME libwebrtc)

target_link_libraries(${PROJECT_NAME} PRIVATE ${LTC_LIB_DIR}/${WEBRTC_LIB_NAME}.lib)

get_target_property(LINK_LIBS ${PROJECT_NAME} LINK_LIBRARIES)
message(STATUS "Linked libraries: ${LINK_LIBS}")


if(TARGET_PATH)
    install(TARGETS ${PROJECT_NAME} DESTINATION ${TARGET_PATH})
endif()