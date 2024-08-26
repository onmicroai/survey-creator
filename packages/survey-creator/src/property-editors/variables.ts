import * as ko from "knockout";

import "./variables.scss";
import { SurveyPropertyVariablesEditor } from "../propertyEditors/propertyVariablesEditor";
const templateHtml = require("./variables.html");

export class PropertyEditorVariablesViewModel {
  constructor(
    public koShowExpressionHeader: any,
    public onShowHideEditor: any,
    public koVariablesDisplayText: any,
    public koIsEditorShowing: any,
    public koIsEditorHidingDisabled: any,
    public koShowTabs: any,
    public koCanParseExpression: any,
    public koActiveView: any,
    public onChangeViewClick: any,
    public getLocString: any,
    public koSetupText: any,
    public koIsWideMode: any,
    public koEditorItems: any,
    public readOnly: any,
    public koCanAddItem: any,
    public onRemoveVariablesClick: any,
    public removeVariablesText: any,
    public addVariables: any,
    public addVariablesText: string,
    public hasAceEditor: boolean,
    public koTextValue: any,
    public availableQuestions: any[],
    public editingObject: any,
    public model: SurveyPropertyVariablesEditor,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-variables", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyVariablesEditor = params.model;
      return new PropertyEditorVariablesViewModel(
        model.koShowExpressionHeader,
        model.onShowHideEditor,
        model.koVariablesDisplayText,
        model.koIsEditorShowing,
        model.koIsEditorHidingDisabled,
        model.koShowTabs,
        model.koCanParseExpression,
        model.koActiveView,
        model.onChangeViewClick,
        model.getLocString,
        model.koSetupText,
        model.koIsWideMode,
        model.koEditorItems,
        model.readOnly,
        model.koCanAddItem,
        model.onRemoveVariablesClick,
        model.removeVariablesText,
        model.addVariables,
        model.addVariablesText,
        model.hasAceEditor,
        model.koTextValue,
        model.availableQuestions,
        model.editingObject,
        model,
        () => {
          typeof params.afterRender === "function" &&
            params.afterRender.call(model, componentInfo);

          typeof model.koAfterRender === "function" &&
            model.koAfterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
