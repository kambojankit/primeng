webpackJsonp([45],{

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

/***/ 137:
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
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(27);
	var Paginator = (function () {
	    function Paginator() {
	        this.rows = 0;
	        this.pageLinkSize = 5;
	        this.onPageChange = new core_1.EventEmitter();
	        this._totalRecords = 0;
	        this._first = 0;
	    }
	    Object.defineProperty(Paginator.prototype, "totalRecords", {
	        get: function () {
	            return this._totalRecords;
	        },
	        set: function (val) {
	            this._totalRecords = val;
	            this.updatePageLinks();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Paginator.prototype, "first", {
	        get: function () {
	            return this._first;
	        },
	        set: function (val) {
	            this._first = val;
	            this.updatePageLinks();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Paginator.prototype.isFirstPage = function () {
	        return this.getPage() === 0;
	    };
	    Paginator.prototype.isLastPage = function () {
	        return this.getPage() === this.getPageCount() - 1;
	    };
	    Paginator.prototype.getPageCount = function () {
	        return Math.ceil(this.totalRecords / this.rows) || 1;
	    };
	    Paginator.prototype.calculatePageLinkBoundaries = function () {
	        var numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
	        //calculate range, keep current in middle if necessary
	        var start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
	        //check when approaching to last page
	        var delta = this.pageLinkSize - (end - start + 1);
	        start = Math.max(0, start - delta);
	        return [start, end];
	    };
	    Paginator.prototype.updatePageLinks = function () {
	        this.pageLinks = [];
	        var boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
	        for (var i = start; i <= end; i++) {
	            this.pageLinks.push(i + 1);
	        }
	    };
	    Paginator.prototype.changePage = function (p, event) {
	        var pc = this.getPageCount();
	        if (p >= 0 && p < pc) {
	            this.first = this.rows * p;
	            var state = {
	                page: p,
	                first: this.first,
	                rows: this.rows,
	                pageCount: pc
	            };
	            this.updatePageLinks();
	            this.onPageChange.emit(state);
	        }
	        if (event) {
	            event.preventDefault();
	        }
	    };
	    Paginator.prototype.getPage = function () {
	        return Math.floor(this.first / this.rows);
	    };
	    Paginator.prototype.changePageToFirst = function (event) {
	        this.changePage(0, event);
	    };
	    Paginator.prototype.changePageToPrev = function (event) {
	        this.changePage(this.getPage() - 1, event);
	    };
	    Paginator.prototype.changePageToNext = function (event) {
	        this.changePage(this.getPage() + 1, event);
	    };
	    Paginator.prototype.changePageToLast = function (event) {
	        this.changePage(this.getPageCount() - 1, event);
	    };
	    Paginator.prototype.onRppChange = function (event) {
	        this.rows = this.rowsPerPageOptions[event.target.selectedIndex];
	        this.changePageToFirst(event);
	    };
	    return Paginator;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], Paginator.prototype, "rows", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], Paginator.prototype, "pageLinkSize", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Paginator.prototype, "onPageChange", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], Paginator.prototype, "style", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], Paginator.prototype, "styleClass", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], Paginator.prototype, "rowsPerPageOptions", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number),
	    __metadata("design:paramtypes", [Number])
	], Paginator.prototype, "totalRecords", null);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number),
	    __metadata("design:paramtypes", [Number])
	], Paginator.prototype, "first", null);
	Paginator = __decorate([
	    core_1.Component({
	        selector: 'p-paginator',
	        template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-paginator ui-widget ui-widget-header ui-unselectable-text'\">\n            <a href=\"#\" class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToFirst($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"fa fa-step-backward\"></span>\n            </a>\n            <a href=\"#\" class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToPrev($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"fa fa-backward\"></span>\n            </a>\n            <span class=\"ui-paginator-pages\">\n                <a href=\"#\" *ngFor=\"let pageLink of pageLinks\" class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePage(pageLink - 1, $event)\" [ngClass]=\"{'ui-state-active': (pageLink-1 == getPage())}\">{{pageLink}}</a>\n            </span>\n            <a href=\"#\" class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToNext($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"fa fa-forward\"></span>\n            </a>\n            <a href=\"#\" class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToLast($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"fa fa-step-forward\"></span>\n            </a>\n            <select class=\"ui-paginator-rpp-options ui-widget ui-state-default\" *ngIf=\"rowsPerPageOptions\" (change)=\"onRppChange($event)\">\n                <option *ngFor=\"let opt of rowsPerPageOptions\" [value]=\"opt\" [selected]=\"rows == opt\">{{opt}}</option>\n            </select>\n        </div>\n    "
	    })
	], Paginator);
	exports.Paginator = Paginator;
	var PaginatorModule = (function () {
	    function PaginatorModule() {
	    }
	    return PaginatorModule;
	}());
	PaginatorModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        exports: [Paginator],
	        declarations: [Paginator]
	    })
	], PaginatorModule);
	exports.PaginatorModule = PaginatorModule;


/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(27);
	var paginatordemo_1 = __webpack_require__(273);
	var paginatordemo_routing_module_1 = __webpack_require__(274);
	var paginator_1 = __webpack_require__(137);
	var tabview_1 = __webpack_require__(72);
	var codehighlighter_1 = __webpack_require__(63);
	var PaginatorDemoModule = (function () {
	    function PaginatorDemoModule() {
	    }
	    return PaginatorDemoModule;
	}());
	PaginatorDemoModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            common_1.CommonModule,
	            paginatordemo_routing_module_1.PaginatorDemoRoutingModule,
	            paginator_1.PaginatorModule,
	            tabview_1.TabViewModule,
	            codehighlighter_1.CodeHighlighterModule
	        ],
	        declarations: [
	            paginatordemo_1.PaginatorDemo
	        ]
	    })
	], PaginatorDemoModule);
	exports.PaginatorDemoModule = PaginatorDemoModule;


/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var PaginatorDemo = (function () {
	    function PaginatorDemo() {
	    }
	    return PaginatorDemo;
	}());
	PaginatorDemo = __decorate([
	    core_1.Component({
	        templateUrl: 'showcase/demo/paginator/paginatordemo.html'
	    })
	], PaginatorDemo);
	exports.PaginatorDemo = PaginatorDemo;


/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(29);
	var paginatordemo_1 = __webpack_require__(273);
	var PaginatorDemoRoutingModule = (function () {
	    function PaginatorDemoRoutingModule() {
	    }
	    return PaginatorDemoRoutingModule;
	}());
	PaginatorDemoRoutingModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            router_1.RouterModule.forChild([
	                { path: '', component: paginatordemo_1.PaginatorDemo }
	            ])
	        ],
	        exports: [
	            router_1.RouterModule
	        ]
	    })
	], PaginatorDemoRoutingModule);
	exports.PaginatorDemoRoutingModule = PaginatorDemoRoutingModule;


/***/ }

});