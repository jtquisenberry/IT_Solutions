# How to stop your PC from automatically restarting after installing updates

How to stop your PC from automatically restarting after installing updates

Important: Before proceeding note that this is a workaround not supported by Microsoft, and it can stop working at any time. You should use it at your own risk.

    1. Open Start.
    2. Search for Task Scheduler and click the result to open the tool.

    3. Right-click the Reboot task and select Disable.
    
Once you completed the steps, your device will no longer restart after downloading and installing new updates. However, new updates won't apply, and future updates won't install until you manually reboot your computer.
Additional steps (if needed)

In the case, Windows 10 automatically re-enables the Reboot task; you can stop this behavior by doing the following:

    Use the Windows key + R keyboard shortcut to open the Run command.

    Type the following path and click OK:

    %windir%\System32\Tasks\Microsoft\Windows\UpdateOrchestrator

    Select the Reboot file without an extension, right-click it, and select Rename.

    Rename the Reboot file to Reboot.old.

    Right-click inside the folder, select New, and click on Folder.

After you've completed the steps, Windows 10 will no longer be able to re-create the task to reboot your computer automatically.
