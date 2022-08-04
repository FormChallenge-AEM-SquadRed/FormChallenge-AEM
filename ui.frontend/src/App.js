import { Page, withModel } from "@adobe/aem-react-editable-components";
import React from "react";
import TabsProvider from '../src/components/contexts/TabsProvider';
import UserDataProvider from '../src/components/contexts/UserDataProvider';
// This component is the application entry point
class App extends Page {
  render() {
    return (
      <TabsProvider>
        <UserDataProvider>
          <div>
            {this.childComponents}
            {this.childPages}
          </div>
        </UserDataProvider>
      </TabsProvider>
    );
  }
}

export default withModel(App);
