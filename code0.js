gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDTitleScreenBackgroundObjects1= [];
gdjs.Title_32ScreenCode.GDTitleScreenBackgroundObjects2= [];
gdjs.Title_32ScreenCode.GDLeftClickPromptObjects1= [];
gdjs.Title_32ScreenCode.GDLeftClickPromptObjects2= [];

gdjs.Title_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "..\\..\\..\\Desktop\\Closet Monster Assets\\Untitled (mp3cut.net).mp3", true, 100, 1);
}}

}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


{


{
}

}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDTitleScreenBackgroundObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitleScreenBackgroundObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLeftClickPromptObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLeftClickPromptObjects2.length = 0;

gdjs.Title_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
