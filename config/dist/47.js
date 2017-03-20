webpackJsonp([47],{

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(27);
	var CodeHighlighter = (function () {
	    function CodeHighlighter(el) {
	        this.el = el;
	    }
	    CodeHighlighter.prototype.ngOnInit = function () {
	        Prism.highlightElement(this.el.nativeElement);
	    };
	    return CodeHighlighter;
	}());
	CodeHighlighter = __decorate([
	    core_1.Directive({
	        selector: '[pCode]'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], CodeHighlighter);
	exports.CodeHighlighter = CodeHighlighter;
	var CodeHighlighterModule = (function () {
	    function CodeHighlighterModule() {
	    }
	    return CodeHighlighterModule;
	}());
	CodeHighlighterModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        exports: [CodeHighlighter],
	        declarations: [CodeHighlighter]
	    })
	], CodeHighlighterModule);
	exports.CodeHighlighterModule = CodeHighlighterModule;


/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(27);
	var TabViewNav = (function () {
	    function TabViewNav() {
	        this.orientation = 'top';
	        this.onTabClick = new core_1.EventEmitter();
	        this.onTabCloseClick = new core_1.EventEmitter();
	    }
	    TabViewNav.prototype.getDefaultHeaderClass = function (tab) {
	        var styleClass = 'ui-state-default ui-corner-' + this.orientation;
	        if (tab.headerStyleClass) {
	            styleClass = styleClass + " " + tab.headerStyleClass;
	        }
	        return styleClass;
	    };
	    TabViewNav.prototype.clickTab = function (event, tab) {
	        this.onTabClick.emit({
	            originalEvent: event,
	            tab: tab
	        });
	    };
	    TabViewNav.prototype.clickClose = function (event, tab) {
	        this.onTabCloseClick.emit({
	            originalEvent: event,
	            tab: tab
	        });
	    };
	    return TabViewNav;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], TabViewNav.prototype, "tabs", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], TabViewNav.prototype, "orientation", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], TabViewNav.prototype, "onTabClick", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], TabViewNav.prototype, "onTabCloseClick", void 0);
	TabViewNav = __decorate([
	    core_1.Component({
	        selector: '[p-tabViewNav]',
	        host: {
	            '[class.ui-tabview-nav]': 'true',
	            '[class.ui-helper-reset]': 'true',
	            '[class.ui-helper-clearfix]': 'true',
	            '[class.ui-widget-header]': 'true',
	            '[class.ui-corner-all]': 'true'
	        },
	        template: "\n        <template ngFor let-tab [ngForOf]=\"tabs\">\n            <li [class]=\"getDefaultHeaderClass(tab)\" [ngStyle]=\"tab.headerStyle\" role=\"tab\"\n                [ngClass]=\"{'ui-tabview-selected ui-state-active': tab.selected, 'ui-state-disabled': tab.disabled}\"\n                (click)=\"clickTab($event,tab)\" *ngIf=\"!tab.closed\"\n                [attr.aria-expanded]=\"tab.selected\" [attr.aria-selected]=\"tab.selected\">\n                <a href=\"#\">\n                    <span class=\"ui-tabview-left-icon fa\" [ngClass]=\"tab.leftIcon\" *ngIf=\"tab.leftIcon\"></span>\n                    <span class=\"ui-tabview-title\">{{tab.header}}</span>\n                    <span class=\"ui-tabview-right-icon fa\" [ngClass]=\"tab.rightIcon\" *ngIf=\"tab.rightIcon\"></span>\n                </a>\n                <span *ngIf=\"tab.closable\" class=\"ui-tabview-close fa fa-close\" (click)=\"clickClose($event,tab)\"></span>\n            </li>\n        </template>\n    ",
	    })
	], TabViewNav);
	exports.TabViewNav = TabViewNav;
	var TabPanel = (function () {
	    function TabPanel() {
	    }
	    return TabPanel;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], TabPanel.prototype, "header", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], TabPanel.prototype, "selected", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], TabPanel.prototype, "disabled", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], TabPanel.prototype, "closable", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], TabPanel.prototype, "headerStyle", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], TabPanel.prototype, "headerStyleClass", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], TabPanel.prototype, "leftIcon", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], TabPanel.prototype, "rightIcon", void 0);
	TabPanel = __decorate([
	    core_1.Component({
	        selector: 'p-tabPanel',
	        template: "\n        <div class=\"ui-tabview-panel ui-widget-content\" [style.display]=\"selected ? 'block' : 'none'\" \n            role=\"tabpanel\" [attr.aria-hidden]=\"!selected\" *ngIf=\"closed ? false :\u00A0(lazy ? selected : true)\">\n            <ng-content></ng-content>\n        </div>\n    "
	    })
	], TabPanel);
	exports.TabPanel = TabPanel;
	var TabView = (function () {
	    function TabView(el) {
	        this.el = el;
	        this.orientation = 'top';
	        this.onChange = new core_1.EventEmitter();
	        this.onClose = new core_1.EventEmitter();
	    }
	    TabView.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        this.initTabs();
	        this.tabPanels.changes.subscribe(function (_) {
	            _this.initTabs();
	        });
	    };
	    TabView.prototype.initTabs = function () {
	        this.tabs = this.tabPanels.toArray();
	        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
	            var tab = _a[_i];
	            tab.lazy = this.lazy;
	        }
	        var selectedTab = this.findSelectedTab();
	        if (!selectedTab && this.tabs.length) {
	            this.tabs[0].selected = true;
	        }
	    };
	    TabView.prototype.open = function (event, tab) {
	        if (tab.disabled) {
	            event.preventDefault();
	            return;
	        }
	        if (!tab.selected) {
	            var selectedTab = this.findSelectedTab();
	            if (selectedTab) {
	                selectedTab.selected = false;
	            }
	            tab.selected = true;
	            this.onChange.emit({ originalEvent: event, index: this.findTabIndex(tab) });
	        }
	        event.preventDefault();
	    };
	    TabView.prototype.close = function (event, tab) {
	        var _this = this;
	        if (this.controlClose) {
	            this.onClose.emit({
	                originalEvent: event,
	                index: this.findTabIndex(tab),
	                close: function () {
	                    _this.closeTab(tab);
	                }
	            });
	        }
	        else {
	            this.closeTab(tab);
	            this.onClose.emit({
	                originalEvent: event,
	                index: this.findTabIndex(tab)
	            });
	        }
	        event.stopPropagation();
	    };
	    TabView.prototype.closeTab = function (tab) {
	        if (tab.selected) {
	            tab.selected = false;
	            for (var i = 0; i < this.tabs.length; i++) {
	                var tabPanel = this.tabs[i];
	                if (!tabPanel.closed && !tab.disabled) {
	                    tabPanel.selected = true;
	                    break;
	                }
	            }
	        }
	        tab.closed = true;
	    };
	    TabView.prototype.findSelectedTab = function () {
	        for (var i = 0; i < this.tabs.length; i++) {
	            if (this.tabs[i].selected) {
	                return this.tabs[i];
	            }
	        }
	        return null;
	    };
	    TabView.prototype.findTabIndex = function (tab) {
	        var index = -1;
	        for (var i = 0; i < this.tabs.length; i++) {
	            if (this.tabs[i] == tab) {
	                index = i;
	                break;
	            }
	        }
	        return index;
	    };
	    TabView.prototype.getBlockableElement = function () {
	        return this.el.nativeElement.children[0];
	    };
	    return TabView;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], TabView.prototype, "orientation", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], TabView.prototype, "style", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], TabView.prototype, "styleClass", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], TabView.prototype, "controlClose", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], TabView.prototype, "lazy", void 0);
	__decorate([
	    core_1.ContentChildren(TabPanel),
	    __metadata("design:type", core_1.QueryList)
	], TabView.prototype, "tabPanels", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], TabView.prototype, "onChange", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], TabView.prototype, "onClose", void 0);
	TabView = __decorate([
	    core_1.Component({
	        selector: 'p-tabView',
	        template: "\n        <div [ngClass]=\"'ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-' + orientation\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation!='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\" \n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n            <div class=\"ui-tabview-panels\">\n                <ng-content></ng-content>\n            </div>\n            <ul p-tabViewNav role=\"tablist\" *ngIf=\"orientation=='bottom'\" [tabs]=\"tabs\" [orientation]=\"orientation\"\n                (onTabClick)=\"open($event.originalEvent, $event.tab)\" (onTabCloseClick)=\"close($event.originalEvent, $event.tab)\"></ul>\n        </div>\n    ",
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], TabView);
	exports.TabView = TabView;
	var TabViewModule = (function () {
	    function TabViewModule() {
	    }
	    return TabViewModule;
	}());
	TabViewModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        exports: [TabView, TabPanel, TabViewNav],
	        declarations: [TabView, TabPanel, TabViewNav]
	    })
	], TabViewModule);
	exports.TabViewModule = TabViewModule;


/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(27);
	var panelmenudemo_1 = __webpack_require__(280);
	var panelmenudemo_routing_module_1 = __webpack_require__(281);
	var panelmenu_1 = __webpack_require__(282);
	var tabview_1 = __webpack_require__(72);
	var codehighlighter_1 = __webpack_require__(63);
	var PanelMenuDemoModule = (function () {
	    function PanelMenuDemoModule() {
	    }
	    return PanelMenuDemoModule;
	}());
	PanelMenuDemoModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            common_1.CommonModule,
	            panelmenudemo_routing_module_1.PanelMenuDemoRoutingModule,
	            panelmenu_1.PanelMenuModule,
	            tabview_1.TabViewModule,
	            codehighlighter_1.CodeHighlighterModule
	        ],
	        declarations: [
	            panelmenudemo_1.PanelMenuDemo
	        ]
	    })
	], PanelMenuDemoModule);
	exports.PanelMenuDemoModule = PanelMenuDemoModule;


/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var PanelMenuDemo = (function () {
	    function PanelMenuDemo() {
	    }
	    PanelMenuDemo.prototype.ngOnInit = function () {
	        this.items = [
	            {
	                label: 'File',
	                icon: 'fa-file-o',
	                items: [{
	                        label: 'New',
	                        icon: 'fa-plus',
	                        items: [
	                            { label: 'Project' },
	                            { label: 'Other' },
	                        ]
	                    },
	                    { label: 'Open' },
	                    { label: 'Quit' }
	                ]
	            },
	            {
	                label: 'Edit',
	                icon: 'fa-edit',
	                items: [
	                    { label: 'Undo', icon: 'fa-mail-forward' },
	                    { label: 'Redo', icon: 'fa-mail-reply' }
	                ]
	            },
	            {
	                label: 'Help',
	                icon: 'fa-question',
	                items: [
	                    {
	                        label: 'Contents'
	                    },
	                    {
	                        label: 'Search',
	                        icon: 'fa-search',
	                        items: [
	                            {
	                                label: 'Text',
	                                items: [
	                                    {
	                                        label: 'Workspace'
	                                    }
	                                ]
	                            },
	                            {
	                                label: 'File'
	                            }
	                        ]
	                    }
	                ]
	            },
	            {
	                label: 'Actions',
	                icon: 'fa-gear',
	                items: [
	                    {
	                        label: 'Edit',
	                        icon: 'fa-refresh',
	                        items: [
	                            { label: 'Save', icon: 'fa-save' },
	                            { label: 'Update', icon: 'fa-save' },
	                        ]
	                    },
	                    {
	                        label: 'Other',
	                        icon: 'fa-phone',
	                        items: [
	                            { label: 'Delete', icon: 'fa-minus' }
	                        ]
	                    }
	                ]
	            }
	        ];
	    };
	    return PanelMenuDemo;
	}());
	PanelMenuDemo = __decorate([
	    core_1.Component({
	        templateUrl: 'showcase/demo/panelmenu/panelmenudemo.html'
	    })
	], PanelMenuDemo);
	exports.PanelMenuDemo = PanelMenuDemo;


/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(29);
	var panelmenudemo_1 = __webpack_require__(280);
	var PanelMenuDemoRoutingModule = (function () {
	    function PanelMenuDemoRoutingModule() {
	    }
	    return PanelMenuDemoRoutingModule;
	}());
	PanelMenuDemoRoutingModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            router_1.RouterModule.forChild([
	                { path: '', component: panelmenudemo_1.PanelMenuDemo }
	            ])
	        ],
	        exports: [
	            router_1.RouterModule
	        ]
	    })
	], PanelMenuDemoRoutingModule);
	exports.PanelMenuDemoRoutingModule = PanelMenuDemoRoutingModule;


/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(27);
	var router_1 = __webpack_require__(29);
	var BasePanelMenuItem = (function () {
	    function BasePanelMenuItem(router) {
	        this.router = router;
	    }
	    BasePanelMenuItem.prototype.handleClick = function (event, item) {
	        if (item.disabled) {
	            event.preventDefault();
	            return;
	        }
	        item.expanded = !item.expanded;
	        if (!item.url || item.routerLink) {
	            event.preventDefault();
	        }
	        if (item.command) {
	            if (!item.eventEmitter) {
	                item.eventEmitter = new core_1.EventEmitter();
	                item.eventEmitter.subscribe(item.command);
	            }
	            item.eventEmitter.emit({
	                originalEvent: event,
	                item: item
	            });
	        }
	        if (item.routerLink) {
	            this.router.navigate(item.routerLink);
	        }
	    };
	    return BasePanelMenuItem;
	}());
	exports.BasePanelMenuItem = BasePanelMenuItem;
	var PanelMenuSub = (function (_super) {
	    __extends(PanelMenuSub, _super);
	    function PanelMenuSub(router) {
	        return _super.call(this, router) || this;
	    }
	    return PanelMenuSub;
	}(BasePanelMenuItem));
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], PanelMenuSub.prototype, "item", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], PanelMenuSub.prototype, "expanded", void 0);
	PanelMenuSub = __decorate([
	    core_1.Component({
	        selector: 'p-panelMenuSub',
	        template: "\n        <ul class=\"ui-menu-list ui-helper-reset\" [style.display]=\"expanded ? 'block' : 'none'\">\n            <li *ngFor=\"let child of item.items\" class=\"ui-menuitem ui-corner-all\" [ngClass]=\"{'ui-menu-parent':child.items}\">\n                <a [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" \n                    [ngClass]=\"{'ui-menuitem-link-hasicon':child.icon&&child.items,'ui-state-disabled':child.disabled}\" \n                    (click)=\"handleClick($event,child)\">\n                    <span class=\"ui-panelmenu-icon fa fa-fw\" [ngClass]=\"{'fa-caret-right':!child.expanded,'fa-caret-down':child.expanded}\" *ngIf=\"child.items\"></span\n                    ><span class=\"ui-menuitem-icon fa fa-fw\" [ngClass]=\"child.icon\" *ngIf=\"child.icon\"></span\n                    ><span class=\"ui-menuitem-text\">{{child.label}}</span>\n                </a>\n                <p-panelMenuSub [item]=\"child\" [expanded]=\"child.expanded\" *ngIf=\"child.items\"></p-panelMenuSub>\n            </li>\n        </ul>\n    "
	    }),
	    __metadata("design:paramtypes", [router_1.Router])
	], PanelMenuSub);
	exports.PanelMenuSub = PanelMenuSub;
	var PanelMenu = (function (_super) {
	    __extends(PanelMenu, _super);
	    function PanelMenu(router) {
	        return _super.call(this, router) || this;
	    }
	    PanelMenu.prototype.unsubscribe = function (item) {
	        if (item.eventEmitter) {
	            item.eventEmitter.unsubscribe();
	        }
	        if (item.items) {
	            for (var _i = 0, _a = item.items; _i < _a.length; _i++) {
	                var childItem = _a[_i];
	                this.unsubscribe(childItem);
	            }
	        }
	    };
	    PanelMenu.prototype.ngOnDestroy = function () {
	        if (this.model) {
	            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
	                var item = _a[_i];
	                this.unsubscribe(item);
	            }
	        }
	    };
	    PanelMenu.prototype.handleClick = function (event, item) {
	        var _this = this;
	        this.animating = true;
	        _super.prototype.handleClick.call(this, event, item);
	        //TODO: Use onDone of animate callback instead with RC6
	        setTimeout(function () {
	            _this.animating = false;
	        }, 400);
	    };
	    return PanelMenu;
	}(BasePanelMenuItem));
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], PanelMenu.prototype, "model", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], PanelMenu.prototype, "style", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], PanelMenu.prototype, "styleClass", void 0);
	PanelMenu = __decorate([
	    core_1.Component({
	        selector: 'p-panelMenu',
	        template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-panelmenu ui-widget'\">\n            <div *ngFor=\"let item of model;let f=first;let l=last;\" class=\"ui-panelmenu-panel\">\n                <div tabindex=\"0\" [ngClass]=\"{'ui-widget ui-panelmenu-header ui-state-default':true,'ui-corner-top':f,'ui-corner-bottom':l&&!item.expanded,\n                    'ui-state-active':item.expanded,'ui-state-disabled':item.disabled}\">\n                    <a [href]=\"item.url||'#'\" [ngClass]=\"{'ui-panelmenu-headerlink-hasicon':item.icon}\" (click)=\"handleClick($event,item)\">\n                        <span *ngIf=\"item.items\" class=\"ui-panelmenu-icon fa\" [ngClass]=\"{'fa-caret-right':!item.expanded,'fa-caret-down':item.expanded}\"></span\n                        ><span class=\"ui-menuitem-icon fa\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\"></span\n                        ><span class=\"ui-menuitem-text\">{{item.label}}</span>\n                    </a>\n                </div>\n                <div *ngIf=\"item.items\" class=\"ui-panelmenu-content-wrapper\" [@rootItem]=\"item.expanded ? 'visible' : 'hidden'\" \n                    [ngClass]=\"{'ui-panelmenu-content-wrapper-overflown': !item.expanded||animating}\">\n                    <div class=\"ui-panelmenu-content ui-widget-content\">\n                        <p-panelMenuSub [item]=\"item\" [expanded]=\"true\"></p-panelMenuSub>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
	        animations: [
	            core_1.trigger('rootItem', [
	                core_1.state('hidden', core_1.style({
	                    height: '0px'
	                })),
	                core_1.state('visible', core_1.style({
	                    height: '*'
	                })),
	                core_1.transition('visible => hidden', core_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
	                core_1.transition('hidden => visible', core_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
	            ])
	        ]
	    }),
	    __metadata("design:paramtypes", [router_1.Router])
	], PanelMenu);
	exports.PanelMenu = PanelMenu;
	var PanelMenuModule = (function () {
	    function PanelMenuModule() {
	    }
	    return PanelMenuModule;
	}());
	PanelMenuModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        exports: [PanelMenu],
	        declarations: [PanelMenu, PanelMenuSub]
	    })
	], PanelMenuModule);
	exports.PanelMenuModule = PanelMenuModule;


/***/ }

});