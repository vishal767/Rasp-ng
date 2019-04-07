import { Component } from '@angular/core';

@Component({
  selector: 'app-sider',
  template: `
    <nz-layout>
      <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" [nzWidth]="width" [nzReverseArrow]="isReverseArrow">
        <a routerLink = "" href = ""><div class="logo"></div></a>
        <ul nz-menu [nzTheme]="'dark'" [nzMode]="'inline'" [nzInlineCollapsed]="isCollapsed">
          <li nz-menu-item nz-tooltip nzPlacement="right" [nzTitle]="isCollapsed ? 'Dashboard' : ''">
            <a routerLink = "/dashboard" href = ""><span><i nz-icon type="dashboard"></i><span class="nav-text">Dashboard</span></span></a>
          </li>
          <li nz-menu-item nz-tooltip nzPlacement="right" [nzTitle]="isCollapsed ? 'Previous History' : ''">
            <span><i nz-icon type="database"></i><span class="nav-text">Previous History</span></span>
          </li>
          <li nz-menu-item nz-tooltip nzPlacement="right" [nzTitle]="isCollapsed ? 'Routines' : ''">
            <span><i nz-icon type="schedule"></i><span class="nav-text">Routines</span></span>
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
export  class SideBarComponent {
  isCollapsed = true;
  isReverseArrow = true;
  width = 200;
}
