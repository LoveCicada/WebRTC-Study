
#include <iostream>
#include <memory>
#include "rtc_base/task_queue.h"
using namespace rtc;
using namespace webrtc;

class TaskQueueImp : public TaskQueueBase
{
public:
    void Delete() override
    {

    }

    void PostTask(std::unique_ptr<QueuedTask> task) override
    {

    }

    void PostDelayedTask(std::unique_ptr<QueuedTask> task,
        uint32_t milliseconds) override
    {

    }

};

class MyClass
{
public:
    MyClass()
    {
        auto pTaskQueueImp = std::make_unique<TaskQueueImp>();
        m_pTaskQueue = std::make_unique<TaskQueue>(std::unique_ptr<TaskQueueBase, TaskQueueDeleter>(pTaskQueueImp.release()));
    }

    void StartWork()
    {
        m_pTaskQueue->PostTask([]() 
        {
            std::cout << "#F: " << __FUNCTION__ << ", #L: " << __LINE__ << "\n";
        });
    }

private:
    std::unique_ptr<TaskQueue> m_pTaskQueue;
};

int main() 
{
    MyClass mc;
    mc.StartWork();

    std::cout << "Complete Test!" << std::endl;
    return 0;
}