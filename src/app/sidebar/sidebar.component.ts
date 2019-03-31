import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-layout-side',
  template: `
    <nz-layout>
      <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" [nzWidth]="width" [nzReverseArrow]="isReverseArrow">
        <div class="logo"></div>
        <ul nz-menu [nzTheme]="'dark'" [nzMode]="'inline'" [nzInlineCollapsed]="isCollapsed">
          <li nz-submenu>
            <span title><i nz-icon type="project"></i><span class="nav-text">Dashboard</span></span>
            <ul>
              <li nz-menu-item>Quick settings 1</li>
              <li nz-menu-item>Quick settings 2</li>
              <li nz-menu-item>Quick settings 3</li>
            </ul>
          </li>
          <li nz-submenu>
            <span title><i nz-icon type="read"></i><span class="nav-text">Previous History</span></span>
            <ul>
              <li nz-menu-item>Team 1</li>
              <li nz-menu-item>Team 2</li>
            </ul>
          </li>
          <li nz-menu-item>
            <span><i nz-icon type="branches"></i><span class="nav-text">Routines</span></span>
          </li>
        </ul>
      </nz-sider>
      <nz-layout>
        <nz-header style="background: #fff; padding:0;"></nz-header>
        <nz-content style="margin:0 16px;">

          <div class="mainContent">
              <router-outlet></router-outlet>
          </div>
        </nz-content>
        <nz-footer style="text-align: center;"></nz-footer>
      </nz-layout>
    </nz-layout>
  `,
  styles: [
    `
      .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
      }
      .ant-layout.ant-layout-has-sider{
        height:100vh;
      }
    `
  ]
})
export  class NzDemoLayoutSideComponent {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
}
